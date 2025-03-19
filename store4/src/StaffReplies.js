// import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import { motion } from "framer-motion";
// import axios from "axios";
// import {jwtDecode} from "jwt-decode";

// const StaffReplies = () => {
//   const [reviews, setReviews] = useState([]);
//   const [user, setUser] = useState(null);
//   const [replyText, setReplyText] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/"); // Redirect to public page if not logged in
//       return;
//     }
//     try {
//       const decoded = jwtDecode(token);
//       if (decoded.role !== "admin") {
//         localStorage.removeItem("token");
//         navigate("/");
//         return;
//       }
//       setUser(decoded);
//       fetchReviews();
//     } catch (error) {
//       localStorage.removeItem("token");
//       navigate("/");
//     }
//   }, [navigate]);

//   const fetchReviews = async () => {
//     try {
//       const response = await fetch("http://localhost:5011/reviews");
//       const data = await response.json();
//       setReviews(Array.isArray(data) ? data : []);
//     } catch (error) {
//       console.error("Error fetching reviews:", error);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/");
//   };

//   const handleReplySubmit = async (reviewId, type) => {
//     try {
//       const token = localStorage.getItem("token");
//       const endpoint = type === "public" ? "reply/public" : "reply/private";
//       const response = await axios.post(
//         `http://localhost:5011/reviews/${reviewId}/${endpoint}`,
//         { reply: replyText[reviewId] || "" },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       if (type === "public") {
//         setReviews(prev =>
//           prev.map(r => (r._id === reviewId ? { ...r, replies: [...(r.replies || []), response.data] } : r))
//         );
//       }
//       alert(type === "public" ? "Reply posted publicly!" : "Email sent to reviewer!");
//       setReplyText(prev => ({ ...prev, [reviewId]: "" }));
//     } catch (error) {
//       console.error("Error submitting reply:", error);
//       alert(error.response?.data?.error || "Failed to submit reply");
//     }
//   };

//   const getStarColor = (rating) => {
//     switch (rating) {
//       case "5": return "#FF6B6B";
//       case "4": return "#FFB86C";
//       case "3": return "#FFD93D";
//       case "2": return "#6BCB77";
//       case "1": return "#4D96FF";
//       default: return "#FF6B6B";
//     }
//   };

//   if (!user) return null;

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <header className="bg-white p-4 rounded-lg shadow-md mb-6 flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-violet-700">Staff Reply Dashboard</h1>
//         <div>
//           <span className="text-gray-700 mr-4">Logged in as {user.username} ({user.role})</span>
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
//           >
//             Logout
//           </button>
//         </div>
//       </header>

//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Pending Reviews</h2>
//         {reviews.length > 0 ? (
//           <div className="space-y-6">
//             {reviews.map((review) => (
//               <motion.div
//                 key={review._id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4 }}
//                 className="bg-white p-6 rounded-lg shadow-md"
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full text-white font-bold text-lg">
//                     {review.name.charAt(0).toUpperCase()}
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
//                     <div className="flex">
//                       {[...Array(5)].map((_, i) => (
//                         <span
//                           key={i}
//                           className={`text-xl ${i < Number(review.rating) ? "" : "text-gray-200"}`}
//                           style={{ color: i < Number(review.rating) ? getStarColor(review.rating) : "#E5E7EB" }}
//                         >
//                           ★
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 mb-4">"{review.review}"</p>
//                 <p className="text-sm text-gray-500 mb-4">Submitted on: {review.date} {review.email && `| Email: ${review.email}`}</p>
//                 {review.replies && review.replies.length > 0 && (
//                   <div className="mb-4">
//                     <p className="text-gray-600 font-medium">Previous Replies:</p>
//                     {review.replies.map((reply, i) => (
//                       <p key={i} className="text-gray-600 italic">"{reply.text}" by {reply.by} on {reply.date}</p>
//                     ))}
//                   </div>
//                 )}
//                 <textarea
//                   value={replyText[review._id] || ""}
//                   onChange={(e) => setReplyText(prev => ({ ...prev, [review._id]: e.target.value }))}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-400 focus:border-transparent mb-4"
//                   placeholder="Type your reply here..."
//                 />
//                 <div className="flex gap-4">
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => handleReplySubmit(review._id, "public")}
//                     className="bg-violet-600 text-white py-2 px-4 rounded-lg hover:bg-violet-700 transition-colors"
//                   >
//                     Reply Publicly
//                   </motion.button>
//                   {review.email && (
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => handleReplySubmit(review._id, "private")}
//                       className="bg-fuchsia-600 text-white py-2 px-4 rounded-lg hover:bg-fuchsia-700 transition-colors"
//                     >
//                       Reply Privately
//                     </motion.button>
//                   )}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-600 text-center">No reviews available to reply to.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StaffReplies;

import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const StaffReplies = () => {
  const [reviews, setReviews] = useState([]);
  const [user, setUser] = useState(null);
  const [replyText, setReplyText] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/"); // Redirect to public page if not logged in
      return;
    }
    try {
      const decoded = jwtDecode(token);
      if (decoded.role !== "admin") {
        localStorage.removeItem("token");
        navigate("/");
        return;
      }
      setUser(decoded);
      fetchReviews();
    } catch (error) {
      localStorage.removeItem("token");
      navigate("/");
    }
  }, [navigate]);

  const fetchReviews = async () => {
    try {
      const response = await fetch("http://localhost:5011/reviews");
      const data = await response.json();
      setReviews(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  const handleReplySubmit = async (reviewId, type) => {
    try {
      const token = localStorage.getItem("token");
      const endpoint = type === "public" ? "reply/public" : "reply/private";
      const response = await axios.post(
        `http://localhost:5011/reviews/${reviewId}/${endpoint}`,
        { reply: replyText[reviewId] || "" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (type === "public") {
        setReviews(prev =>
          prev.map(r => (r._id === reviewId ? { ...r, replies: [...(r.replies || []), response.data] } : r))
        );
      }
      alert(type === "public" ? "Reply posted publicly!" : "Email sent to reviewer!");
      setReplyText(prev => ({ ...prev, [reviewId]: "" }));
    } catch (error) {
      console.error("Error submitting reply:", error);
      alert(error.response?.data?.error || "Failed to submit reply");
    }
  };

  const getStarColor = (rating) => {
    switch (rating) {
      case "5": return "#FF6B6B";
      case "4": return "#FFB86C";
      case "3": return "#FFD93D";
      case "2": return "#6BCB77";
      case "1": return "#4D96FF";
      default: return "#FF6B6B";
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-white p-4 rounded-lg shadow-md mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-violet-700">Staff Reply Dashboard</h1>
        <div>
          <span className="text-gray-700 mr-4">Logged in as {user.username} ({user.role})</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Pending Reviews</h2>
        {reviews.length > 0 ? (
          <div className="space-y-6">
            {reviews.map((review) => (
              <motion.div
                key={review._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full text-white font-bold text-lg">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-xl ${i < Number(review.rating) ? "" : "text-gray-200"}`}
                          style={{ color: i < Number(review.rating) ? getStarColor(review.rating) : "#E5E7EB" }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"{review.review}"</p>
                <p className="text-sm text-gray-500 mb-4">Submitted on: {review.date} {review.email && `| Email: ${review.email}`}</p>
                {review.replies && review.replies.length > 0 && (
                  <div className="mb-4">
                    <p className="text-gray-600 font-medium">Previous Replies:</p>
                    {review.replies.map((reply, i) => (
                      <p key={i} className="text-gray-600 italic">"{reply.text}" by {reply.by} on {reply.date}</p>
                    ))}
                  </div>
                )}
                <textarea
                  value={replyText[review._id] || ""}
                  onChange={(e) => setReplyText(prev => ({ ...prev, [review._id]: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-400 focus:border-transparent mb-4"
                  placeholder="Type your reply here..."
                />
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleReplySubmit(review._id, "public")}
                    className="bg-violet-600 text-white py-2 px-4 rounded-lg hover:bg-violet-700 transition-colors"
                  >
                    Reply Publicly
                  </motion.button>
                  {review.email && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleReplySubmit(review._id, "private")}
                      className="bg-fuchsia-600 text-white py-2 px-4 rounded-lg hover:bg-fuchsia-700 transition-colors"
                    >
                      Reply Privately
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">No reviews available to reply to.</p>
        )}
      </div>
    </div>
  );
};

export default StaffReplies;