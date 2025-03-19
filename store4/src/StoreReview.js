// // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // import logo from './images/logo.jpg';
// // // // // // // // // import { Link } from 'react-router-dom';

// // // // // // // // // const StoreReview = () => {
// // // // // // // // //   const [reviews, setReviews] = useState([]);
// // // // // // // // //   const [formData, setFormData] = useState({ name: "", rating: "", review: "", email: "", phone: "" });

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     fetchReviews();
// // // // // // // // //   }, []);

// // // // // // // // //   const fetchReviews = async () => {
// // // // // // // // //     try {
// // // // // // // // //       const response = await fetch("http://localhost:5011/reviews");
// // // // // // // // //       const data = await response.json();
// // // // // // // // //       setReviews(Array.isArray(data) ? data : []);
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error("Error fetching reviews:", error);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleInputChange = (e) => {
// // // // // // // // //     const { name, value } = e.target;
// // // // // // // // //     setFormData({ ...formData, [name]: value });
// // // // // // // // //   };

// // // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // // //     e.preventDefault();
// // // // // // // // //     if (formData.name && formData.rating && formData.review) {
// // // // // // // // //       try {
// // // // // // // // //         const dataToSubmit = { ...formData };
// // // // // // // // //         if (!formData.email) delete dataToSubmit.email;
// // // // // // // // //         if (!formData.phone) delete dataToSubmit.phone;

// // // // // // // // //         const response = await fetch("http://localhost:5011/reviews", {
// // // // // // // // //           method: "POST",
// // // // // // // // //           headers: {
// // // // // // // // //             "Content-Type": "application/json",
// // // // // // // // //           },
// // // // // // // // //           body: JSON.stringify(dataToSubmit),
// // // // // // // // //         });

// // // // // // // // //         if (!response.ok) {
// // // // // // // // //           throw new Error("Failed to submit review");
// // // // // // // // //         }

// // // // // // // // //         const result = await response.json();
// // // // // // // // //         setFormData({ name: "", rating: "", review: "", email: "", phone: "" });
// // // // // // // // //         setReviews(prevReviews => [...prevReviews, result]);
// // // // // // // // //       } catch (error) {
// // // // // // // // //         console.error("Error submitting review:", error);
// // // // // // // // //         alert("There was an error submitting your review. Please try again.");
// // // // // // // // //       }
// // // // // // // // //     } else {
// // // // // // // // //       alert("Name, Rating, and Review are required!");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const getStarColor = (rating) => {
// // // // // // // // //     switch (rating) {
// // // // // // // // //       case "5":
// // // // // // // // //         return "#FFD700"; // Gold
// // // // // // // // //       case "4":
// // // // // // // // //         return "#32CD32"; // Lime Green
// // // // // // // // //       case "3":
// // // // // // // // //         return "#FFA500"; // Orange
// // // // // // // // //       case "2":
// // // // // // // // //         return "#FF6347"; // Tomato Red
// // // // // // // // //       case "1":
// // // // // // // // //         return "#8B0000"; // Dark Red
// // // // // // // // //       default:
// // // // // // // // //         return "#FFD700"; // Default to Gold for invalid rating
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="bg-gradient-to-r from-gray-800 to-purple-600 min-h-screen text-white">
// // // // // // // // //       <header className="flex justify-between items-center p-5 bg-gray-900">
// // // // // // // // //         <div className="flex items-center gap-4">
// // // // // // // // //           <Link to="/AboutPage">
// // // // // // // // //             <img src={logo} alt="Logo" className="w-12 h-12" />
// // // // // // // // //           </Link>
// // // // // // // // //           <nav className="flex gap-4">
// // // // // // // // //             <Link to="/" className="hover:text-yellow-300">Home</Link>
// // // // // // // // //             <Link to="/AboutPage" className="hover:text-yellow-300">About</Link>
// // // // // // // // //             <Link to="/ContactUs" className="hover:text-yellow-300">Contact</Link>
// // // // // // // // //           </nav>
// // // // // // // // //         </div>
// // // // // // // // //         <div className="flex gap-2">
// // // // // // // // //           <Link to="/SignUp">
// // // // // // // // //             <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">SignUp</button>
// // // // // // // // //           </Link>
// // // // // // // // //           <Link to="/LoginPage">
// // // // // // // // //             <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
// // // // // // // // //           </Link>
// // // // // // // // //         </div>
// // // // // // // // //       </header>

// // // // // // // // //       <div className="flex flex-col items-center p-10 min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('./images/review8.jpg')" }}>
// // // // // // // // //         <div className="absolute inset-0 bg-black opacity-50"></div>
// // // // // // // // //         <h1 className="text-4xl font-bold mb-8 z-10">LEAVE A REVIEW</h1>
// // // // // // // // //         <form className="bg-gray-800 p-8 rounded-lg shadow-md z-10" onSubmit={handleSubmit}>
// // // // // // // // //           <label className="block text-lg mb-2">Your Name:</label>
// // // // // // // // //           <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full p-2 mb-4 border border-blue-500 rounded" />

// // // // // // // // //           <label className="block text-lg mb-2">Rating (1-5):</label>
// // // // // // // // //           <input type="number" name="rating" value={formData.rating} onChange={handleInputChange} min="1" max="5" required className="w-full p-2 mb-4 border border-blue-500 rounded" />

// // // // // // // // //           <label className="block text-lg mb-2">Review:</label>
// // // // // // // // //           <textarea name="review" value={formData.review} onChange={handleInputChange} required className="w-full p-2 mb-4 border border-blue-500 rounded h-32"></textarea>

// // // // // // // // //           <label className="block text-lg mb-2">Your Email (optional):</label>
// // // // // // // // //           <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full p-2 mb-4 border border-blue-500 rounded" />

// // // // // // // // //           <label className="block text-lg mb-2">Your Phone Number (optional):</label>
// // // // // // // // //           <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full p-2 mb-4 border border-blue-500 rounded" />

// // // // // // // // //           <button type="submit" className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">SUBMIT REVIEW</button>
// // // // // // // // //         </form>

// // // // // // // // //         <div className="mt-10 w-full max-w-2xl">
// // // // // // // // //           {reviews.length > 0 ? (
// // // // // // // // //             reviews.map((review, index) => {
// // // // // // // // //               const starColor = getStarColor(review.rating);
// // // // // // // // //               return (
// // // // // // // // //                 <div key={index} className="bg-gradient-to-r from-red-400 to-orange-400 rounded-lg p-4 mb-4 shadow-lg">
// // // // // // // // //                   <strong className="text-lg">
// // // // // // // // //                     {review.name} - 
// // // // // // // // //                     <span style={{ color: starColor, fontSize: "1.5em" }}>
// // // // // // // // //                       {"⭐".repeat(Number(review.rating))}
// // // // // // // // //                     </span>
// // // // // // // // //                   </strong>
// // // // // // // // //                   <p>{review.review}</p>
// // // // // // // // //                 </div>
// // // // // // // // //               );
// // // // // // // // //             })
// // // // // // // // //           ) : (
// // // // // // // // //             <p>No reviews yet.</p>
// // // // // // // // //           )}
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default StoreReview;

// // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // import logo from './images/logo.jpg';
// // // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // // // // // const StoreReview = () => {
// // // // // // // // //   const [reviews, setReviews] = useState([]);
// // // // // // // // //   const [formData, setFormData] = useState({ name: "", rating: "5", review: "", email: "", phone: "" });
// // // // // // // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // // // // // // //   const [submitSuccess, setSubmitSuccess] = useState(false);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     fetchReviews();
// // // // // // // // //   }, []);

// // // // // // // // //   const fetchReviews = async () => {
// // // // // // // // //     try {
// // // // // // // // //       const response = await fetch("http://localhost:5011/reviews");
// // // // // // // // //       const data = await response.json();
// // // // // // // // //       setReviews(Array.isArray(data) ? data : []);
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error("Error fetching reviews:", error);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleInputChange = (e) => {
// // // // // // // // //     const { name, value } = e.target;
// // // // // // // // //     setFormData({ ...formData, [name]: value });
// // // // // // // // //   };

// // // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // // //     e.preventDefault();
// // // // // // // // //     if (formData.name && formData.rating && formData.review) {
// // // // // // // // //       setIsSubmitting(true);
// // // // // // // // //       try {
// // // // // // // // //         const dataToSubmit = { ...formData };
// // // // // // // // //         if (!formData.email) delete dataToSubmit.email;
// // // // // // // // //         if (!formData.phone) delete dataToSubmit.phone;

// // // // // // // // //         const response = await fetch("http://localhost:5011/reviews", {
// // // // // // // // //           method: "POST",
// // // // // // // // //           headers: {
// // // // // // // // //             "Content-Type": "application/json",
// // // // // // // // //           },
// // // // // // // // //           body: JSON.stringify(dataToSubmit),
// // // // // // // // //         });

// // // // // // // // //         if (!response.ok) {
// // // // // // // // //           throw new Error("Failed to submit review");
// // // // // // // // //         }

// // // // // // // // //         const result = await response.json();
// // // // // // // // //         setFormData({ name: "", rating: "5", review: "", email: "", phone: "" });
// // // // // // // // //         setReviews(prevReviews => [result, ...prevReviews]);
// // // // // // // // //         setSubmitSuccess(true);
// // // // // // // // //         setTimeout(() => setSubmitSuccess(false), 3000);
// // // // // // // // //       } catch (error) {
// // // // // // // // //         console.error("Error submitting review:", error);
// // // // // // // // //         alert("There was an error submitting your review. Please try again.");
// // // // // // // // //       } finally {
// // // // // // // // //         setIsSubmitting(false);
// // // // // // // // //       }
// // // // // // // // //     } else {
// // // // // // // // //       alert("Name, Rating, and Review are required!");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const getStarColor = (rating) => {
// // // // // // // // //     switch (rating) {
// // // // // // // // //       case "5":
// // // // // // // // //         return "#FFD700"; // Gold
// // // // // // // // //       case "4":
// // // // // // // // //         return "#4CAF50"; // Green
// // // // // // // // //       case "3":
// // // // // // // // //         return "#FFA500"; // Orange
// // // // // // // // //       case "2":
// // // // // // // // //         return "#FF6347"; // Tomato Red
// // // // // // // // //       case "1":
// // // // // // // // //         return "#D32F2F"; // Dark Red
// // // // // // // // //       default:
// // // // // // // // //         return "#FFD700"; // Default to Gold for invalid rating
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const renderStars = (rating) => {
// // // // // // // // //     const stars = [];
// // // // // // // // //     for (let i = 1; i <= 5; i++) {
// // // // // // // // //       stars.push(
// // // // // // // // //         <button
// // // // // // // // //           key={i}
// // // // // // // // //           type="button"
// // // // // // // // //           className={`text-2xl focus:outline-none transition-transform ${
// // // // // // // // //             i <= formData.rating ? "text-yellow-400 scale-110" : "text-gray-300"
// // // // // // // // //           }`}
// // // // // // // // //           onClick={() => setFormData({ ...formData, rating: String(i) })}
// // // // // // // // //         >
// // // // // // // // //           ★
// // // // // // // // //         </button>
// // // // // // // // //       );
// // // // // // // // //     }
// // // // // // // // //     return stars;
// // // // // // // // //   };

// // // // // // // // //   const Header = ({ logo }) => {
// // // // // // // // //     return (
// // // // // // // // //       <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md">
// // // // // // // // //         <div className="flex items-center gap-5">
// // // // // // // // //           <div className="w-12 h-12 transform hover:scale-105 transition-transform">
// // // // // // // // //             <Link to="/AboutPage">
// // // // // // // // //               <img src={logo} alt="Logo" className="w-full h-full rounded-full object-cover" />
// // // // // // // // //             </Link>
// // // // // // // // //           </div>
// // // // // // // // //           <nav className="hidden md:flex gap-4">
// // // // // // // // //             <Link to="/" className="text-blue-600 text-base no-underline hover:text-blue-800 transition-colors">Home</Link>
// // // // // // // // //             <Link to="/AboutPage" className="text-gray-700 text-base no-underline hover:text-blue-600 transition-colors">About</Link>
// // // // // // // // //             <Link to="/ContactUs" className="text-gray-700 text-base no-underline hover:text-blue-600 transition-colors">Contact</Link>
// // // // // // // // //           </nav>
// // // // // // // // //         </div>
// // // // // // // // //         <div className="flex gap-3">
// // // // // // // // //           <Link to="/SignUp">
// // // // // // // // //             <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg">
// // // // // // // // //               Sign Up
// // // // // // // // //             </button>
// // // // // // // // //           </Link>
// // // // // // // // //           <Link to="/LoginPage">
// // // // // // // // //             <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg">
// // // // // // // // //               Login
// // // // // // // // //             </button> 
// // // // // // // // //           </Link>
// // // // // // // // //           {/* <Link to="/StoreReview">
// // // // // // // // //             <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md text-sm hover:bg-blue-200 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg">
// // // // // // // // //               Store Review
// // // // // // // // //             </button>
// // // // // // // // //           </Link> */}
// // // // // // // // //         </div>
// // // // // // // // //       </header>
// // // // // // // // //     );
// // // // // // // // //   };
  
// // // // // // // // //   return (
// // // // // // // // //     <div className="bg-white min-h-screen text-gray-800">
// // // // // // // // //       {/* <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-20">
// // // // // // // // //         <div className="max-w-7xl mx-auto flex justify-between items-center">
// // // // // // // // //           <div className="flex items-center gap-6">
// // // // // // // // //             <Link to="/AboutPage" className="flex items-center">
// // // // // // // // //               <img src={logo} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
// // // // // // // // //               <span className="ml-2 font-semibold text-lg text-indigo-600">Store Name</span>
// // // // // // // // //             </Link>
// // // // // // // // //             <nav className="hidden md:flex gap-6">
// // // // // // // // //               <Link to="/" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</Link>
// // // // // // // // //               <Link to="/AboutPage" className="text-gray-600 hover:text-indigo-600 transition-colors">About</Link>
// // // // // // // // //               <Link to="/ContactUs" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</Link>
// // // // // // // // //             </nav>
// // // // // // // // //           </div>
// // // // // // // // //           <div className="flex gap-3">
// // // // // // // // //             <Link to="/SignUp">
// // // // // // // // //               <button className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-200 transition-colors">Sign Up</button>
// // // // // // // // //             </Link>
// // // // // // // // //             <Link to="/LoginPage">
// // // // // // // // //               <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">Login</button>
// // // // // // // // //             </Link>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </header>
// // // // // // // // //  */}
// // // // // // // // //  <Header logo={logo} />
// // // // // // // // //       <main className="max-w-6xl mx-auto py-12 px-4">
// // // // // // // // //         <div className="flex flex-col md:flex-row gap-10">
// // // // // // // // //           <motion.div 
// // // // // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // // // //             transition={{ duration: 0.5 }}
// // // // // // // // //             className="md:w-1/2"
// // // // // // // // //           >
// // // // // // // // //             <div className="bg-white rounded-lg shadow-xl overflow-hidden">
// // // // // // // // //               <div className="bg-gradient-to-r from-indigo-500 to-purple-500 py-6 px-8">
// // // // // // // // //                 <h1 className="text-3xl font-bold text-white">Share Your Experience</h1>
// // // // // // // // //                 <p className="text-indigo-100 mt-2">Your feedback helps us improve</p>
// // // // // // // // //               </div>
              
// // // // // // // // //               <form className="p-8" onSubmit={handleSubmit}>
// // // // // // // // //                 <div className="mb-5">
// // // // // // // // //                   <label className="block text-gray-700 font-medium mb-2">Your Name</label>
// // // // // // // // //                   <input 
// // // // // // // // //                     type="text" 
// // // // // // // // //                     name="name" 
// // // // // // // // //                     value={formData.name} 
// // // // // // // // //                     onChange={handleInputChange} 
// // // // // // // // //                     required 
// // // // // // // // //                     className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
// // // // // // // // //                     placeholder="John Doe"
// // // // // // // // //                   />
// // // // // // // // //                 </div>

// // // // // // // // //                 <div className="mb-5">
// // // // // // // // //                   <label className="block text-gray-700 font-medium mb-2">Rating</label>
// // // // // // // // //                   <div className="flex space-x-1">
// // // // // // // // //                     {renderStars()}
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>

// // // // // // // // //                 <div className="mb-5">
// // // // // // // // //                   <label className="block text-gray-700 font-medium mb-2">Your Review</label>
// // // // // // // // //                   <textarea 
// // // // // // // // //                     name="review" 
// // // // // // // // //                     value={formData.review} 
// // // // // // // // //                     onChange={handleInputChange} 
// // // // // // // // //                     required 
// // // // // // // // //                     className="w-full p-3 border border-gray-300 rounded-md h-32 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
// // // // // // // // //                     placeholder="Share your experience with us..."
// // // // // // // // //                   ></textarea>
// // // // // // // // //                 </div>

// // // // // // // // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
// // // // // // // // //                   <div>
// // // // // // // // //                     <label className="block text-gray-700 font-medium mb-2">Email (optional)</label>
// // // // // // // // //                     <input 
// // // // // // // // //                       type="email" 
// // // // // // // // //                       name="email" 
// // // // // // // // //                       value={formData.email} 
// // // // // // // // //                       onChange={handleInputChange} 
// // // // // // // // //                       className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
// // // // // // // // //                       placeholder="email@example.com"
// // // // // // // // //                     />
// // // // // // // // //                   </div>
// // // // // // // // //                   <div>
// // // // // // // // //                     <label className="block text-gray-700 font-medium mb-2">Phone (optional)</label>
// // // // // // // // //                     <input 
// // // // // // // // //                       type="tel" 
// // // // // // // // //                       name="phone" 
// // // // // // // // //                       value={formData.phone} 
// // // // // // // // //                       onChange={handleInputChange} 
// // // // // // // // //                       className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
// // // // // // // // //                       placeholder="(123) 456-7890"
// // // // // // // // //                     />
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>

// // // // // // // // //                 <motion.button 
// // // // // // // // //                   type="submit" 
// // // // // // // // //                   className="w-full bg-indigo-600 text-white py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors relative overflow-hidden"
// // // // // // // // //                   whileHover={{ scale: 1.02 }}
// // // // // // // // //                   whileTap={{ scale: 0.98 }}
// // // // // // // // //                   disabled={isSubmitting}
// // // // // // // // //                 >
// // // // // // // // //                   {isSubmitting ? "Submitting..." : "SUBMIT REVIEW"}
// // // // // // // // //                 </motion.button>
                
// // // // // // // // //                 <AnimatePresence>
// // // // // // // // //                   {submitSuccess && (
// // // // // // // // //                     <motion.div 
// // // // // // // // //                       initial={{ opacity: 0, y: 10 }}
// // // // // // // // //                       animate={{ opacity: 1, y: 0 }}
// // // // // // // // //                       exit={{ opacity: 0 }}
// // // // // // // // //                       className="mt-4 p-3 bg-green-100 text-green-700 rounded-md text-center"
// // // // // // // // //                     >
// // // // // // // // //                       Thank you! Your review has been submitted successfully.
// // // // // // // // //                     </motion.div>
// // // // // // // // //                   )}
// // // // // // // // //                 </AnimatePresence>
// // // // // // // // //               </form>
// // // // // // // // //             </div>
// // // // // // // // //           </motion.div>

// // // // // // // // //           <motion.div 
// // // // // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // // // //             transition={{ duration: 0.5, delay: 0.2 }}
// // // // // // // // //             className="md:w-1/2"
// // // // // // // // //           >
// // // // // // // // //             <h2 className="text-2xl font-bold mb-6 text-gray-800">Recent Reviews</h2>
            
// // // // // // // // //             <div className="space-y-4 max-h-[700px] overflow-y-auto pr-2">
// // // // // // // // //               <AnimatePresence>
// // // // // // // // //                 {reviews.length > 0 ? (
// // // // // // // // //                   reviews.map((review, index) => {
// // // // // // // // //                     const starColor = getStarColor(review.rating);
// // // // // // // // //                     return (
// // // // // // // // //                       <motion.div 
// // // // // // // // //                         key={index}
// // // // // // // // //                         initial={{ opacity: 0, y: 20 }}
// // // // // // // // //                         animate={{ opacity: 1, y: 0 }}
// // // // // // // // //                         transition={{ duration: 0.3, delay: index * 0.1 }}
// // // // // // // // //                         className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4"
// // // // // // // // //                         style={{ borderLeftColor: starColor }}
// // // // // // // // //                       >
// // // // // // // // //                         <div className="flex justify-between items-start mb-3">
// // // // // // // // //                           <h3 className="text-lg font-semibold">{review.name}</h3>
// // // // // // // // //                           <div className="flex">
// // // // // // // // //                             {[...Array(5)].map((_, i) => (
// // // // // // // // //                               <span 
// // // // // // // // //                                 key={i} 
// // // // // // // // //                                 className="text-xl"
// // // // // // // // //                                 style={{ color: i < Number(review.rating) ? starColor : '#E5E7EB' }}
// // // // // // // // //                               >
// // // // // // // // //                                 ★
// // // // // // // // //                               </span>
// // // // // // // // //                             ))}
// // // // // // // // //                           </div>
// // // // // // // // //                         </div>
// // // // // // // // //                         <p className="text-gray-600">{review.review}</p>
// // // // // // // // //                       </motion.div>
// // // // // // // // //                     );
// // // // // // // // //                   })
// // // // // // // // //                 ) : (
// // // // // // // // //                   <div className="text-center py-12 bg-gray-50 rounded-lg">
// // // // // // // // //                     <svg className="w-16 h-16 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // // // // // // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
// // // // // // // // //                     </svg>
// // // // // // // // //                     <p className="mt-4 text-gray-500">No reviews yet. Be the first to share your experience!</p>
// // // // // // // // //                   </div>
// // // // // // // // //                 )}
// // // // // // // // //               </AnimatePresence>
// // // // // // // // //             </div>
// // // // // // // // //           </motion.div>
// // // // // // // // //         </div>
// // // // // // // // //       </main>

// // // // // // // // //       <footer className="bg-gray-50 border-t py-8 mt-16">
// // // // // // // // //         <div className="max-w-6xl mx-auto px-4 text-center">
// // // // // // // // //           <p className="text-gray-600">© 2025 Store Name. All rights reserved.</p>
// // // // // // // // //           <div className="flex justify-center gap-4 mt-4">
// // // // // // // // //             <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">Privacy Policy</a>
// // // // // // // // //             <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">Terms of Service</a>
// // // // // // // // //             <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">Contact Us</a>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </footer>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default StoreReview;


// // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // import logo from './images/logo.jpg';
// // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // // // // const StoreReview = () => {
// // // // // // // //   const [reviews, setReviews] = useState([]);
// // // // // // // //   const [formData, setFormData] = useState({ name: "", rating: "5", review: "", email: "", phone: "" });
// // // // // // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // // // // // //   const [submitSuccess, setSubmitSuccess] = useState(false);

// // // // // // // //   useEffect(() => {
// // // // // // // //     fetchReviews();
// // // // // // // //   }, []);

// // // // // // // //   const fetchReviews = async () => {
// // // // // // // //     try {
// // // // // // // //       const response = await fetch("http://localhost:5011/reviews");
// // // // // // // //       const data = await response.json();
// // // // // // // //       setReviews(Array.isArray(data) ? data : []);
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error("Error fetching reviews:", error);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleInputChange = (e) => {
// // // // // // // //     const { name, value } = e.target;
// // // // // // // //     setFormData({ ...formData, [name]: value });
// // // // // // // //   };

// // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     if (formData.name && formData.rating && formData.review) {
// // // // // // // //       setIsSubmitting(true);
// // // // // // // //       try {
// // // // // // // //         const dataToSubmit = { ...formData };
// // // // // // // //         if (!formData.email) delete dataToSubmit.email;
// // // // // // // //         if (!formData.phone) delete dataToSubmit.phone;

// // // // // // // //         const response = await fetch("http://localhost:5011/reviews", {
// // // // // // // //           method: "POST",
// // // // // // // //           headers: {
// // // // // // // //             "Content-Type": "application/json",
// // // // // // // //           },
// // // // // // // //           body: JSON.stringify(dataToSubmit),
// // // // // // // //         });

// // // // // // // //         if (!response.ok) {
// // // // // // // //           throw new Error("Failed to submit review");
// // // // // // // //         }

// // // // // // // //         const result = await response.json();
// // // // // // // //         setFormData({ name: "", rating: "5", review: "", email: "", phone: "" });
// // // // // // // //         setReviews(prevReviews => [result, ...prevReviews]);
// // // // // // // //         setSubmitSuccess(true);
// // // // // // // //         setTimeout(() => setSubmitSuccess(false), 3000);
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error("Error submitting review:", error);
// // // // // // // //         alert("There was an error submitting your review. Please try again.");
// // // // // // // //       } finally {
// // // // // // // //         setIsSubmitting(false);
// // // // // // // //       }
// // // // // // // //     } else {
// // // // // // // //       alert("Name, Rating, and Review are required!");
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const getStarColor = (rating) => {
// // // // // // // //     switch (rating) {
// // // // // // // //       case "5":
// // // // // // // //         return "#FFD700"; // Gold
// // // // // // // //       case "4":
// // // // // // // //         return "#4CAF50"; // Green
// // // // // // // //       case "3":
// // // // // // // //         return "#FFA500"; // Orange
// // // // // // // //       case "2":
// // // // // // // //         return "#FF6347"; // Tomato Red
// // // // // // // //       case "1":
// // // // // // // //         return "#D32F2F"; // Dark Red
// // // // // // // //       default:
// // // // // // // //         return "#FFD700"; // Default to Gold for invalid rating
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const renderStars = (rating) => {
// // // // // // // //     const stars = [];
// // // // // // // //     for (let i = 1; i <= 5; i++) {
// // // // // // // //       stars.push(
// // // // // // // //         <button
// // // // // // // //           key={i}
// // // // // // // //           type="button"
// // // // // // // //           className={`text-2xl focus:outline-none transition-transform ${
// // // // // // // //             i <= formData.rating ? "text-yellow-400 scale-110" : "text-gray-300"
// // // // // // // //           }`}
// // // // // // // //           onClick={() => setFormData({ ...formData, rating: String(i) })}
// // // // // // // //         >
// // // // // // // //           ★
// // // // // // // //         </button>
// // // // // // // //       );
// // // // // // // //     }
// // // // // // // //     return stars;
// // // // // // // //   };

// // // // // // // //   const Header = ({ logo }) => {
// // // // // // // //     return (
// // // // // // // //       <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md">
// // // // // // // //         <div className="flex items-center gap-5">
// // // // // // // //           <div className="w-12 h-12 transform hover:scale-105 transition-transform">
// // // // // // // //             <Link to="/AboutPage">
// // // // // // // //               <img src={logo} alt="Logo" className="w-full h-full rounded-full object-cover" />
// // // // // // // //             </Link>
// // // // // // // //           </div>
// // // // // // // //           <nav className="hidden md:flex gap-4">
// // // // // // // //             <Link to="/" className="text-blue-600 text-base no-underline hover:text-blue-800 transition-colors">Home</Link>
// // // // // // // //             <Link to="/AboutPage" className="text-gray-700 text-base no-underline hover:text-blue-600 transition-colors">About</Link>
// // // // // // // //             <Link to="/ContactUs" className="text-gray-700 text-base no-underline hover:text-blue-600 transition-colors">Contact</Link>
// // // // // // // //           </nav>
// // // // // // // //         </div>
// // // // // // // //         <div className="flex gap-3">
// // // // // // // //           <Link to="/SignUp">
// // // // // // // //             <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg">
// // // // // // // //               Sign Up
// // // // // // // //             </button>
// // // // // // // //           </Link>
// // // // // // // //           <Link to="/LoginPage">
// // // // // // // //             <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg">
// // // // // // // //               Login
// // // // // // // //             </button> 
// // // // // // // //           </Link>
// // // // // // // //         </div>
// // // // // // // //       </header>
// // // // // // // //     );
// // // // // // // //   };
  
// // // // // // // //   return (
// // // // // // // //     <div className="bg-white min-h-screen text-gray-800">
// // // // // // // //       <Header logo={logo} />
      
// // // // // // // //       {/* Add padding top to prevent header from covering content */}
// // // // // // // //       <main className="max-w-6xl mx-auto px-4 pt-20 pb-12">
// // // // // // // //         <div className="flex flex-col md:flex-row gap-10">
// // // // // // // //           <motion.div 
// // // // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // // //             transition={{ duration: 0.5 }}
// // // // // // // //             className="md:w-1/2"
// // // // // // // //           >
// // // // // // // //             <div className="bg-white rounded-lg shadow-xl overflow-hidden">
// // // // // // // //               <div className="bg-gradient-to-r from-indigo-500 to-purple-500 py-6 px-8">
// // // // // // // //                 <h1 className="text-3xl font-bold text-white">Share Your Experience</h1>
// // // // // // // //                 <p className="text-indigo-100 mt-2">Your feedback helps us improve</p>
// // // // // // // //               </div>
              
// // // // // // // //               <form className="p-8" onSubmit={handleSubmit}>
// // // // // // // //                 <div className="mb-5">
// // // // // // // //                   <label className="block text-gray-700 font-medium mb-2">Your Name</label>
// // // // // // // //                   <input 
// // // // // // // //                     type="text" 
// // // // // // // //                     name="name" 
// // // // // // // //                     value={formData.name} 
// // // // // // // //                     onChange={handleInputChange} 
// // // // // // // //                     required 
// // // // // // // //                     className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
// // // // // // // //                     placeholder="John Doe"
// // // // // // // //                   />
// // // // // // // //                 </div>

// // // // // // // //                 <div className="mb-5">
// // // // // // // //                   <label className="block text-gray-700 font-medium mb-2">Rating</label>
// // // // // // // //                   <div className="flex space-x-1">
// // // // // // // //                     {renderStars()}
// // // // // // // //                   </div>
// // // // // // // //                 </div>

// // // // // // // //                 <div className="mb-5">
// // // // // // // //                   <label className="block text-gray-700 font-medium mb-2">Your Review</label>
// // // // // // // //                   <textarea 
// // // // // // // //                     name="review" 
// // // // // // // //                     value={formData.review} 
// // // // // // // //                     onChange={handleInputChange} 
// // // // // // // //                     required 
// // // // // // // //                     className="w-full p-3 border border-gray-300 rounded-md h-32 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
// // // // // // // //                     placeholder="Share your experience with us..."
// // // // // // // //                   ></textarea>
// // // // // // // //                 </div>

// // // // // // // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
// // // // // // // //                   <div>
// // // // // // // //                     <label className="block text-gray-700 font-medium mb-2">Email (optional)</label>
// // // // // // // //                     <input 
// // // // // // // //                       type="email" 
// // // // // // // //                       name="email" 
// // // // // // // //                       value={formData.email} 
// // // // // // // //                       onChange={handleInputChange} 
// // // // // // // //                       className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
// // // // // // // //                       placeholder="email@example.com"
// // // // // // // //                     />
// // // // // // // //                   </div>
// // // // // // // //                   <div>
// // // // // // // //                     <label className="block text-gray-700 font-medium mb-2">Phone (optional)</label>
// // // // // // // //                     <input 
// // // // // // // //                       type="tel" 
// // // // // // // //                       name="phone" 
// // // // // // // //                       value={formData.phone} 
// // // // // // // //                       onChange={handleInputChange} 
// // // // // // // //                       className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
// // // // // // // //                       placeholder="(123) 456-7890"
// // // // // // // //                     />
// // // // // // // //                   </div>
// // // // // // // //                 </div>

// // // // // // // //                 <motion.button 
// // // // // // // //                   type="submit" 
// // // // // // // //                   className="w-full bg-indigo-600 text-white py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors relative overflow-hidden"
// // // // // // // //                   whileHover={{ scale: 1.02 }}
// // // // // // // //                   whileTap={{ scale: 0.98 }}
// // // // // // // //                   disabled={isSubmitting}
// // // // // // // //                 >
// // // // // // // //                   {isSubmitting ? "Submitting..." : "SUBMIT REVIEW"}
// // // // // // // //                 </motion.button>
                
// // // // // // // //                 <AnimatePresence>
// // // // // // // //                   {submitSuccess && (
// // // // // // // //                     <motion.div 
// // // // // // // //                       initial={{ opacity: 0, y: 10 }}
// // // // // // // //                       animate={{ opacity: 1, y: 0 }}
// // // // // // // //                       exit={{ opacity: 0 }}
// // // // // // // //                       className="mt-4 p-3 bg-green-100 text-green-700 rounded-md text-center"
// // // // // // // //                     >
// // // // // // // //                       Thank you! Your review has been submitted successfully.
// // // // // // // //                     </motion.div>
// // // // // // // //                   )}
// // // // // // // //                 </AnimatePresence>
// // // // // // // //               </form>
// // // // // // // //             </div>
// // // // // // // //           </motion.div>

// // // // // // // //           <motion.div 
// // // // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // // //             transition={{ duration: 0.5, delay: 0.2 }}
// // // // // // // //             className="md:w-1/2"
// // // // // // // //           >
// // // // // // // //             <h2 className="text-2xl font-bold mb-6 text-gray-800">Recent Reviews</h2>
            
// // // // // // // //             <div className="space-y-4 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar">
// // // // // // // //               <AnimatePresence>
// // // // // // // //                 {reviews.length > 0 ? (
// // // // // // // //                   reviews.map((review, index) => {
// // // // // // // //                     const starColor = getStarColor(review.rating);
// // // // // // // //                     return (
// // // // // // // //                       <motion.div 
// // // // // // // //                         key={index}
// // // // // // // //                         initial={{ opacity: 0, y: 20 }}
// // // // // // // //                         animate={{ opacity: 1, y: 0 }}
// // // // // // // //                         transition={{ duration: 0.3, delay: index * 0.1 }}
// // // // // // // //                         className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4"
// // // // // // // //                         style={{ borderLeftColor: starColor }}
// // // // // // // //                       >
// // // // // // // //                         <div className="flex justify-between items-start mb-3">
// // // // // // // //                           <h3 className="text-lg font-semibold">{review.name}</h3>
// // // // // // // //                           <div className="flex">
// // // // // // // //                             {[...Array(5)].map((_, i) => (
// // // // // // // //                               <span 
// // // // // // // //                                 key={i} 
// // // // // // // //                                 className="text-xl"
// // // // // // // //                                 style={{ color: i < Number(review.rating) ? starColor : '#E5E7EB' }}
// // // // // // // //                               >
// // // // // // // //                                 ★
// // // // // // // //                               </span>
// // // // // // // //                             ))}
// // // // // // // //                           </div>
// // // // // // // //                         </div>
// // // // // // // //                         <p className="text-gray-600">{review.review}</p>
// // // // // // // //                       </motion.div>
// // // // // // // //                     );
// // // // // // // //                   })
// // // // // // // //                 ) : (
// // // // // // // //                   <div className="text-center py-12 bg-gray-50 rounded-lg">
// // // // // // // //                     <svg className="w-16 h-16 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // // // // // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
// // // // // // // //                     </svg>
// // // // // // // //                     <p className="mt-4 text-gray-500">No reviews yet. Be the first to share your experience!</p>
// // // // // // // //                   </div>
// // // // // // // //                 )}
// // // // // // // //               </AnimatePresence>
// // // // // // // //             </div>
// // // // // // // //           </motion.div>
// // // // // // // //         </div>
// // // // // // // //       </main>

// // // // // // // //       <footer className="bg-gray-50 border-t py-8 mt-8">
// // // // // // // //         <div className="max-w-6xl mx-auto px-4 text-center">
// // // // // // // //           <p className="text-gray-600">© 2025 Store Name. All rights reserved.</p>
// // // // // // // //           <div className="flex justify-center gap-4 mt-4">
// // // // // // // //             <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">Privacy Policy</a>
// // // // // // // //             <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">Terms of Service</a>
// // // // // // // //             <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">Contact Us</a>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </footer>
      
// // // // // // // //       {/* Add global styles for custom scrollbar */}
// // // // // // // //       <style jsx global>{`
// // // // // // // //         .custom-scrollbar::-webkit-scrollbar {
// // // // // // // //           width: 6px;
// // // // // // // //         }
// // // // // // // //         .custom-scrollbar::-webkit-scrollbar-track {
// // // // // // // //           background: #f1f1f1;
// // // // // // // //           border-radius: 10px;
// // // // // // // //         }
// // // // // // // //         .custom-scrollbar::-webkit-scrollbar-thumb {
// // // // // // // //           background: #c7d2fe;
// // // // // // // //           border-radius: 10px;
// // // // // // // //         }
// // // // // // // //         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
// // // // // // // //           background: #a5b4fc;
// // // // // // // //         }
// // // // // // // //       `}</style>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default StoreReview;
// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import logo from './images/logo.jpg';
// // // // // // // import { Link } from 'react-router-dom';
// // // // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // // // const StoreReview = () => {
// // // // // // //   const [reviews, setReviews] = useState([]);
// // // // // // //   const [formData, setFormData] = useState({ name: "", rating: "5", review: "", email: "", phone: "" });
// // // // // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // // // // //   const [submitSuccess, setSubmitSuccess] = useState(false);
// // // // // // //   const [activeTab, setActiveTab] = useState("write");

// // // // // // //   useEffect(() => {
// // // // // // //     fetchReviews();
// // // // // // //   }, []);

// // // // // // //   const fetchReviews = async () => {
// // // // // // //     try {
// // // // // // //       const response = await fetch("http://localhost:5011/reviews");
// // // // // // //       const data = await response.json();
// // // // // // //       setReviews(Array.isArray(data) ? data : []);
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error fetching reviews:", error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleInputChange = (e) => {
// // // // // // //     const { name, value } = e.target;
// // // // // // //     setFormData({ ...formData, [name]: value });
// // // // // // //   };

// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     if (formData.name && formData.rating && formData.review) {
// // // // // // //       setIsSubmitting(true);
// // // // // // //       try {
// // // // // // //         const dataToSubmit = { ...formData };
// // // // // // //         if (!formData.email) delete dataToSubmit.email;
// // // // // // //         if (!formData.phone) delete dataToSubmit.phone;

// // // // // // //         const response = await fetch("http://localhost:5011/reviews", {
// // // // // // //           method: "POST",
// // // // // // //           headers: {
// // // // // // //             "Content-Type": "application/json",
// // // // // // //           },
// // // // // // //           body: JSON.stringify(dataToSubmit),
// // // // // // //         });

// // // // // // //         if (!response.ok) {
// // // // // // //           throw new Error("Failed to submit review");
// // // // // // //         }

// // // // // // //         const result = await response.json();
// // // // // // //         setFormData({ name: "", rating: "5", review: "", email: "", phone: "" });
// // // // // // //         setReviews(prevReviews => [result, ...prevReviews]);
// // // // // // //         setSubmitSuccess(true);
// // // // // // //         setTimeout(() => {
// // // // // // //           setSubmitSuccess(false);
// // // // // // //           setActiveTab("read");
// // // // // // //         }, 2000);
// // // // // // //       } catch (error) {
// // // // // // //         console.error("Error submitting review:", error);
// // // // // // //         alert("There was an error submitting your review. Please try again.");
// // // // // // //       } finally {
// // // // // // //         setIsSubmitting(false);
// // // // // // //       }
// // // // // // //     } else {
// // // // // // //       alert("Name, Rating, and Review are required!");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const getStarColor = (rating) => {
// // // // // // //     switch (rating) {
// // // // // // //       case "5":
// // // // // // //         return "#4F46E5"; // Indigo
// // // // // // //       case "4":
// // // // // // //         return "#6366F1"; // Lighter Indigo
// // // // // // //       case "3":
// // // // // // //         return "#818CF8"; // Light Indigo
// // // // // // //       case "2":
// // // // // // //         return "#F59E0B"; // Amber
// // // // // // //       case "1":
// // // // // // //         return "#EF4444"; // Red
// // // // // // //       default:
// // // // // // //         return "#4F46E5"; // Default to Indigo
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const renderStars = () => {
// // // // // // //     const stars = [];
// // // // // // //     for (let i = 1; i <= 5; i++) {
// // // // // // //       stars.push(
// // // // // // //         <button
// // // // // // //           key={i}
// // // // // // //           type="button"
// // // // // // //           className={`text-3xl focus:outline-none transition-all duration-300 transform ${
// // // // // // //             i <= formData.rating ? "text-indigo-600 scale-110" : "text-gray-300"
// // // // // // //           }`}
// // // // // // //           onClick={() => setFormData({ ...formData, rating: String(i) })}
// // // // // // //         >
// // // // // // //           ★
// // // // // // //         </button>
// // // // // // //       );
// // // // // // //     }
// // // // // // //     return stars;
// // // // // // //   };

// // // // // // //   const Header = ({ logo }) => {
// // // // // // //     return (
// // // // // // //       <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md">
// // // // // // //         <div className="flex items-center gap-5">
// // // // // // //           <div className="w-12 h-12 transform hover:scale-105 transition-transform">
// // // // // // //             <Link to="/AboutPage">
// // // // // // //               <img src={logo} alt="Logo" className="w-full h-full rounded-full object-cover" />
// // // // // // //             </Link>
// // // // // // //           </div>
// // // // // // //           <nav className="hidden md:flex gap-4">
// // // // // // //             <Link to="/" className="text-blue-600 text-base no-underline hover:text-blue-800 transition-colors">Home</Link>
// // // // // // //             <Link to="/AboutPage" className="text-gray-700 text-base no-underline hover:text-blue-600 transition-colors">About</Link>
// // // // // // //             <Link to="/ContactUs" className="text-gray-700 text-base no-underline hover:text-blue-600 transition-colors">Contact</Link>
// // // // // // //           </nav>
// // // // // // //         </div>
// // // // // // //         <div className="flex gap-3">
// // // // // // //           <Link to="/SignUp">
// // // // // // //             <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg">
// // // // // // //               Sign Up
// // // // // // //             </button>
// // // // // // //           </Link>
// // // // // // //           <Link to="/LoginPage">
// // // // // // //             <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg">
// // // // // // //               Login
// // // // // // //             </button> 
// // // // // // //           </Link>
// // // // // // //         </div>
// // // // // // //       </header>
// // // // // // //     );
// // // // // // //   };
  
// // // // // // //   return (
// // // // // // //     <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen text-gray-800">
// // // // // // //       <Header logo={logo} />
      
// // // // // // //       <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
// // // // // // //         <motion.div 
// // // // // // //           initial={{ opacity: 0, y: 30 }}
// // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // //           transition={{ duration: 0.6 }}
// // // // // // //           className="text-center mb-10"
// // // // // // //         >
// // // // // // //           <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
// // // // // // //             Customer Experiences
// // // // // // //           </h1>
// // // // // // //           <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
// // // // // // //             We value your feedback to continually improve our products and services. Share your thoughts or explore what others have to say.
// // // // // // //           </p>
// // // // // // //         </motion.div>
        
// // // // // // //         <div className="flex justify-center mb-10">
// // // // // // //           <div className="bg-white rounded-full shadow-md p-1 inline-flex">
// // // // // // //             <button 
// // // // // // //               onClick={() => setActiveTab("write")} 
// // // // // // //               className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
// // // // // // //                 activeTab === "write" 
// // // // // // //                   ? "bg-indigo-600 text-white shadow-lg" 
// // // // // // //                   : "text-gray-600 hover:bg-indigo-50"
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               Write a Review
// // // // // // //             </button>
// // // // // // //             <button 
// // // // // // //               onClick={() => setActiveTab("read")} 
// // // // // // //               className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
// // // // // // //                 activeTab === "read" 
// // // // // // //                   ? "bg-indigo-600 text-white shadow-lg" 
// // // // // // //                   : "text-gray-600 hover:bg-indigo-50"
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               Read Reviews ({reviews.length})
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>
        
// // // // // // //         <AnimatePresence mode="wait">
// // // // // // //           {activeTab === "write" ? (
// // // // // // //             <motion.div
// // // // // // //               key="write"
// // // // // // //               initial={{ opacity: 0, x: -30 }}
// // // // // // //               animate={{ opacity: 1, x: 0 }}
// // // // // // //               exit={{ opacity: 0, x: -30 }}
// // // // // // //               transition={{ duration: 0.5 }}
// // // // // // //             >
// // // // // // //               <div className="max-w-3xl mx-auto">
// // // // // // //                 <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:shadow-2xl">
// // // // // // //                   <div className="relative h-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
// // // // // // //                     <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
// // // // // // //                     <div className="absolute inset-0 flex items-center justify-center">
// // // // // // //                       <h2 className="text-3xl font-bold text-white text-center px-4">Share Your Experience</h2>
// // // // // // //                     </div>
// // // // // // //                     <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
// // // // // // //                       <div className="bg-white rounded-full p-3 shadow-lg">
// // // // // // //                         <svg className="w-8 h-8 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
// // // // // // //                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
// // // // // // //                         </svg>
// // // // // // //                       </div>
// // // // // // //                     </div>
// // // // // // //                   </div>
                  
// // // // // // //                   <form className="p-8 pt-12" onSubmit={handleSubmit}>
// // // // // // //                     <div className="mb-6">
// // // // // // //                       <label className="block text-gray-700 font-medium mb-2">Your Name</label>
// // // // // // //                       <input 
// // // // // // //                         type="text" 
// // // // // // //                         name="name" 
// // // // // // //                         value={formData.name} 
// // // // // // //                         onChange={handleInputChange} 
// // // // // // //                         required 
// // // // // // //                         className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all bg-gray-50" 
// // // // // // //                         placeholder="John Doe"
// // // // // // //                       />
// // // // // // //                     </div>

// // // // // // //                     <div className="mb-6">
// // // // // // //                       <label className="block text-gray-700 font-medium mb-2">Rating</label>
// // // // // // //                       <div className="flex space-x-2 bg-gray-50 p-4 rounded-lg justify-center">
// // // // // // //                         {renderStars()}
// // // // // // //                       </div>
// // // // // // //                     </div>

// // // // // // //                     <div className="mb-6">
// // // // // // //                       <label className="block text-gray-700 font-medium mb-2">Your Review</label>
// // // // // // //                       <textarea 
// // // // // // //                         name="review" 
// // // // // // //                         value={formData.review} 
// // // // // // //                         onChange={handleInputChange} 
// // // // // // //                         required 
// // // // // // //                         className="w-full p-4 border border-gray-200 rounded-lg h-36 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all bg-gray-50" 
// // // // // // //                         placeholder="Share your shopping experience, product quality, customer service..."
// // // // // // //                       ></textarea>
// // // // // // //                     </div>

// // // // // // //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// // // // // // //                       <div>
// // // // // // //                         <label className="block text-gray-700 font-medium mb-2">Email (optional)</label>
// // // // // // //                         <input 
// // // // // // //                           type="email" 
// // // // // // //                           name="email" 
// // // // // // //                           value={formData.email} 
// // // // // // //                           onChange={handleInputChange} 
// // // // // // //                           className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all bg-gray-50" 
// // // // // // //                           placeholder="email@example.com"
// // // // // // //                         />
// // // // // // //                       </div>
// // // // // // //                       <div>
// // // // // // //                         <label className="block text-gray-700 font-medium mb-2">Phone (optional)</label>
// // // // // // //                         <input 
// // // // // // //                           type="tel" 
// // // // // // //                           name="phone" 
// // // // // // //                           value={formData.phone} 
// // // // // // //                           onChange={handleInputChange} 
// // // // // // //                           className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all bg-gray-50" 
// // // // // // //                           placeholder="(123) 456-7890"
// // // // // // //                         />
// // // // // // //                       </div>
// // // // // // //                     </div>

// // // // // // //                     <motion.button 
// // // // // // //                       type="submit" 
// // // // // // //                       className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-4 rounded-lg font-medium hover:from-indigo-700 hover:to-blue-600 transition-colors relative overflow-hidden"
// // // // // // //                       whileHover={{ scale: 1.02 }}
// // // // // // //                       whileTap={{ scale: 0.98 }}
// // // // // // //                       disabled={isSubmitting}
// // // // // // //                     >
// // // // // // //                       {isSubmitting ? (
// // // // // // //                         <span className="flex items-center justify-center">
// // // // // // //                           <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // // // // // //                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // // // // //                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // // // // //                           </svg>
// // // // // // //                           Processing...
// // // // // // //                         </span>
// // // // // // //                       ) : "SUBMIT YOUR REVIEW"}
// // // // // // //                     </motion.button>
                    
// // // // // // //                     <AnimatePresence>
// // // // // // //                       {submitSuccess && (
// // // // // // //                         <motion.div 
// // // // // // //                           initial={{ opacity: 0, y: 10 }}
// // // // // // //                           animate={{ opacity: 1, y: 0 }}
// // // // // // //                           exit={{ opacity: 0 }}
// // // // // // //                           className="mt-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center flex items-center justify-center space-x-2"
// // // // // // //                         >
// // // // // // //                           <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // // // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
// // // // // // //                           </svg>
// // // // // // //                           <span>Thank you! Your review has been submitted successfully.</span>
// // // // // // //                         </motion.div>
// // // // // // //                       )}
// // // // // // //                     </AnimatePresence>
// // // // // // //                   </form>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </motion.div>
// // // // // // //           ) : (
// // // // // // //             <motion.div
// // // // // // //               key="read"
// // // // // // //               initial={{ opacity: 0, x: 30 }}
// // // // // // //               animate={{ opacity: 1, x: 0 }}
// // // // // // //               exit={{ opacity: 0, x: 30 }}
// // // // // // //               transition={{ duration: 0.5 }}
// // // // // // //               className="max-w-5xl mx-auto"
// // // // // // //             >
// // // // // // //               <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6">
// // // // // // //                 <div className="mb-6 flex justify-between items-center">
// // // // // // //                   <h2 className="text-2xl font-bold text-gray-800">Customer Reviews</h2>
                  
// // // // // // //                   {reviews.length > 0 && (
// // // // // // //                     <div className="bg-indigo-50 rounded-full px-4 py-2 flex items-center">
// // // // // // //                       <span className="text-indigo-600 font-medium">{reviews.length} Reviews</span>
// // // // // // //                     </div>
// // // // // // //                   )}
// // // // // // //                 </div>
                
// // // // // // //                 <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
// // // // // // //                   <AnimatePresence>
// // // // // // //                     {reviews.length > 0 ? (
// // // // // // //                       reviews.map((review, index) => {
// // // // // // //                         const starColor = getStarColor(review.rating);
// // // // // // //                         return (
// // // // // // //                           <motion.div 
// // // // // // //                             key={index}
// // // // // // //                             initial={{ opacity: 0, y: 20 }}
// // // // // // //                             animate={{ opacity: 1, y: 0 }}
// // // // // // //                             transition={{ duration: 0.4, delay: index * 0.1 }}
// // // // // // //                             className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
// // // // // // //                           >
// // // // // // //                             <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
// // // // // // //                               <div className="flex items-center gap-4">
// // // // // // //                                 <div className="flex justify-center items-center w-12 h-12 bg-indigo-100 rounded-full text-indigo-600 font-bold text-xl">
// // // // // // //                                   {review.name.charAt(0).toUpperCase()}
// // // // // // //                                 </div>
// // // // // // //                                 <div>
// // // // // // //                                   <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
// // // // // // //                                   <div className="flex mt-1">
// // // // // // //                                     {[...Array(5)].map((_, i) => (
// // // // // // //                                       <span 
// // // // // // //                                         key={i} 
// // // // // // //                                         className={`text-xl ${i < Number(review.rating) ? "" : "text-gray-200"}`}
// // // // // // //                                         style={{ color: i < Number(review.rating) ? starColor : undefined }}
// // // // // // //                                       >
// // // // // // //                                         ★
// // // // // // //                                       </span>
// // // // // // //                                     ))}
// // // // // // //                                   </div>
// // // // // // //                                 </div>
// // // // // // //                               </div>
// // // // // // //                               <div className="bg-indigo-50 text-indigo-600 text-xs font-medium px-3 py-1 rounded-full">
// // // // // // //                                 Verified Purchase
// // // // // // //                               </div>
// // // // // // //                             </div>
// // // // // // //                             <div className="mt-4">
// // // // // // //                               <p className="text-gray-600 italic">"<span className="not-italic">{review.review}</span>"</p>
// // // // // // //                             </div>
// // // // // // //                             <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
// // // // // // //                               <div className="text-sm text-gray-500">
// // // // // // //                                 {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
// // // // // // //                               </div>
// // // // // // //                               <div className="flex space-x-2">
// // // // // // //                                 <button className="flex items-center gap-1 text-gray-400 hover:text-gray-600 text-sm">
// // // // // // //                                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // // // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
// // // // // // //                                   </svg>
// // // // // // //                                   Helpful
// // // // // // //                                 </button>
// // // // // // //                                 <button className="flex items-center gap-1 text-gray-400 hover:text-gray-600 text-sm">
// // // // // // //                                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // // // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
// // // // // // //                                   </svg>
// // // // // // //                                   Reply
// // // // // // //                                 </button>
// // // // // // //                               </div>
// // // // // // //                             </div>
// // // // // // //                           </motion.div>
// // // // // // //                         );
// // // // // // //                       })
// // // // // // //                     ) : (
// // // // // // //                       <motion.div 
// // // // // // //                         initial={{ opacity: 0 }}
// // // // // // //                         animate={{ opacity: 1 }}
// // // // // // //                         className="text-center py-20 bg-gray-50 rounded-xl"
// // // // // // //                       >
// // // // // // //                         <div className="flex flex-col items-center justify-center">
// // // // // // //                           <svg className="w-20 h-20 text-indigo-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
// // // // // // //                             <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"></path>
// // // // // // //                           </svg>
// // // // // // //                           <h3 className="mt-4 text-xl font-medium text-gray-800">No reviews yet</h3>
// // // // // // //                           <p className="mt-2 text-gray-500 max-w-md">Be the first to share your experience with our products and services!</p>
// // // // // // //                           <motion.button
// // // // // // //                             whileHover={{ scale: 1.05 }}
// // // // // // //                             whileTap={{ scale: 0.95 }}
// // // // // // //                             onClick={() => setActiveTab("write")}
// // // // // // //                             className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
// // // // // // //                           >
// // // // // // //                             Write a Review
// // // // // // //                           </motion.button>
// // // // // // //                         </div>
// // // // // // //                       </motion.div>
// // // // // // //                     )}
// // // // // // //                   </AnimatePresence>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </motion.div>
// // // // // // //           )}
// // // // // // //         </AnimatePresence>
// // // // // // //       </div>

// // // // // // //       <div className="bg-gradient-to-br from-indigo-500 to-blue-600 py-16 mt-20">
// // // // // // //         <div className="max-w-5xl mx-auto px-4 text-center">
// // // // // // //           <h2 className="text-3xl font-bold text-white mb-6">Why Your Feedback Matters</h2>
// // // // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // // // // //             <motion.div 
// // // // // // //               whileHover={{ y: -5 }}
// // // // // // //               className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-white"
// // // // // // //             >
// // // // // // //               <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white bg-opacity-20 rounded-full">
// // // // // // //                 <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
// // // // // // //                   <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
// // // // // // //                   <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
// // // // // // //                 </svg>
// // // // // // //               </div>
// // // // // // //               <h3 className="text-xl font-semibold mb-2">Improve Our Products</h3>
// // // // // // //               <p className="text-indigo-100">Your feedback helps us identify what products work well and which ones need improvement.</p>
// // // // // // //             </motion.div>
            
// // // // // // //             <motion.div 
// // // // // // //               whileHover={{ y: -5 }}
// // // // // // //               className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-white"
// // // // // // //             >
// // // // // // //               <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white bg-opacity-20 rounded-full">
// // // // // // //                 <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
// // // // // // //                   <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
// // // // // // //                 </svg>
// // // // // // //               </div>
// // // // // // //               <h3 className="text-xl font-semibold mb-2">Enhance Experience</h3>
// // // // // // //               <p className="text-indigo-100">We use your suggestions to continuously improve your shopping experience with us.</p>
// // // // // // //             </motion.div>
            
// // // // // // //             <motion.div 
// // // // // // //               whileHover={{ y: -5 }}
// // // // // // //               className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-white"
// // // // // // //             >
// // // // // // //               <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white bg-opacity-20 rounded-full">
// // // // // // //                 <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
// // // // // // //                   <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"></path>
// // // // // // //                 </svg>
// // // // // // //               </div>
// // // // // // //               <h3 className="text-xl font-semibold mb-2">Build Community</h3>
// // // // // // //               <p className="text-indigo-100">Your reviews help other shoppers make informed decisions about our products.</p>
// // // // // // //             </motion.div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <footer className="bg-white border-t py-10">
// // // // // // //         <div className="max-w-6xl mx-auto px-4">
// // // // // // //           <div className="flex flex-col md:flex-row justify-between items-center">
// // // // // // //             <div className="mb-6 md:mb-0">
// // // // // // //               <p className="text-gray-600 font-medium">© 2025 Retail Store Management System. All rights reserved.</p>
// // // // // // //             </div>
// // // // // // //             <div className="flex gap-6">
// // // // // // //               <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm">Privacy Policy</a>
// // // // // // //               <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm">Terms of Service</a>
// // // // // // //               <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm">Contact Us</a>
// // // // // // //               <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm">FAQ</a>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </footer>
      
// // // // // // //       {/* Add global styles for custom scrollbar */}
// // // // // // //       <style jsx global>{`
// // // // // // //         .custom-scrollbar::-webkit-scrollbar {
// // // // // // //           width: 6px;
// // // // // // //         }
// // // // // // //         .custom-scrollbar::-webkit-scrollbar-track {
// // // // // // //           background: #f1f1f1;
// // // // // // //           border-radius: 10px;
// // // // // // //         }
// // // // // // //         .custom-scrollbar::-webkit-scrollbar-thumb {
// // // // // // //           background: #c7d2fe;
// // // // // // //           border-radius: 10px;
// // // // // // //         }
// // // // // // //         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
// // // // // // //           background: #818cf8;
// // // // // // //         }
// // // // // // //       `}</style>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default StoreReview;

// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import logo from './images/logo.jpg';
// // // // // // import { Link } from 'react-router-dom';
// // // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // // // Sample images for the review section
// // // // // // const REVIEW_IMAGES = [
// // // // // //   "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
// // // // // //   "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
// // // // // //   "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
// // // // // // ];

// // // // // // const StoreReview = () => {
// // // // // //   const [reviews, setReviews] = useState([]);
// // // // // //   const [formData, setFormData] = useState({ name: "", rating: "5", review: "", email: "", phone: "" });
// // // // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // // // //   const [submitSuccess, setSubmitSuccess] = useState(false);
// // // // // //   const [activeTab, setActiveTab] = useState("write");
// // // // // //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

// // // // // //   useEffect(() => {
// // // // // //     fetchReviews();
// // // // // //     const handleMouseMove = (e) => {
// // // // // //       const x = e.clientX / window.innerWidth;
// // // // // //       const y = e.clientY / window.innerHeight;
// // // // // //       setMousePosition({ x, y });
// // // // // //     };

// // // // // //     window.addEventListener("mousemove", handleMouseMove);
// // // // // //     return () => window.removeEventListener("mousemove", handleMouseMove);
// // // // // //   }, []);

// // // // // //   const fetchReviews = async () => {
// // // // // //     try {
// // // // // //       const response = await fetch("http://localhost:5011/reviews");
// // // // // //       const data = await response.json();
// // // // // //       setReviews(Array.isArray(data) ? data : []);
// // // // // //     } catch (error) {
// // // // // //       console.error("Error fetching reviews:", error);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleInputChange = (e) => {
// // // // // //     const { name, value } = e.target;
// // // // // //     setFormData({ ...formData, [name]: value });
// // // // // //   };

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     if (formData.name && formData.rating && formData.review) {
// // // // // //       setIsSubmitting(true);
// // // // // //       try {
// // // // // //         const dataToSubmit = { ...formData };
// // // // // //         if (!formData.email) delete dataToSubmit.email;
// // // // // //         if (!formData.phone) delete dataToSubmit.phone;

// // // // // //         const response = await fetch("http://localhost:5011/reviews", {
// // // // // //           method: "POST",
// // // // // //           headers: {
// // // // // //             "Content-Type": "application/json",
// // // // // //           },
// // // // // //           body: JSON.stringify(dataToSubmit),
// // // // // //         });

// // // // // //         if (!response.ok) {
// // // // // //           throw new Error("Failed to submit review");
// // // // // //         }

// // // // // //         const result = await response.json();
// // // // // //         setFormData({ name: "", rating: "5", review: "", email: "", phone: "" });
// // // // // //         setReviews(prevReviews => [result, ...prevReviews]);
// // // // // //         setSubmitSuccess(true);
// // // // // //         setTimeout(() => {
// // // // // //           setSubmitSuccess(false);
// // // // // //           setActiveTab("read");
// // // // // //         }, 2000);
// // // // // //       } catch (error) {
// // // // // //         console.error("Error submitting review:", error);
// // // // // //         alert("There was an error submitting your review. Please try again.");
// // // // // //       } finally {
// // // // // //         setIsSubmitting(false);
// // // // // //       }
// // // // // //     } else {
// // // // // //       alert("Name, Rating, and Review are required!");
// // // // // //     }
// // // // // //   };

// // // // // //   const getStarColor = (rating) => {
// // // // // //     switch (rating) {
// // // // // //       case "5":
// // // // // //         return "#FF6B6B"; // Coral red
// // // // // //       case "4":
// // // // // //         return "#FFB86C"; // Soft orange
// // // // // //       case "3":
// // // // // //         return "#FFD93D"; // Bright yellow
// // // // // //       case "2":
// // // // // //         return "#6BCB77"; // Mint green
// // // // // //       case "1":
// // // // // //         return "#4D96FF"; // Sky blue
// // // // // //       default:
// // // // // //         return "#FF6B6B"; // Default to coral red
// // // // // //     }
// // // // // //   };

// // // // // //   const renderStars = () => {
// // // // // //     const stars = [];
// // // // // //     for (let i = 1; i <= 5; i++) {
// // // // // //       stars.push(
// // // // // //         <button
// // // // // //           key={i}
// // // // // //           type="button"
// // // // // //           className={`text-3xl focus:outline-none transition-all duration-300 transform ${
// // // // // //             i <= formData.rating ? "scale-110" : "text-gray-300"
// // // // // //           }`}
// // // // // //           style={{ color: i <= formData.rating ? getStarColor(formData.rating) : "#D1D5DB" }}
// // // // // //           onClick={() => setFormData({ ...formData, rating: String(i) })}
// // // // // //         >
// // // // // //           ★
// // // // // //         </button>
// // // // // //       );
// // // // // //     }
// // // // // //     return stars;
// // // // // //   };

// // // // // //   const Header = ({ logo }) => {
// // // // // //     return (
// // // // // //       <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-3 bg-white/80 backdrop-blur-sm shadow-lg">
// // // // // //         <div className="flex items-center gap-5">
// // // // // //           <div className="w-12 h-12 transform hover:scale-105 transition-transform">
// // // // // //             <Link to="/AboutPage">
// // // // // //               <img src={logo} alt="Logo" className="w-full h-full rounded-full object-cover border-2 border-violet-400" />
// // // // // //             </Link>
// // // // // //           </div>
// // // // // //           <nav className="hidden md:flex gap-4">
// // // // // //             <Link to="/" className="text-violet-700 text-base no-underline hover:text-fuchsia-600 transition-colors font-medium">Home</Link>
// // // // // //             <Link to="/AboutPage" className="text-gray-700 text-base no-underline hover:text-violet-600 transition-colors font-medium">About</Link>
// // // // // //             <Link to="/ContactUs" className="text-gray-700 text-base no-underline hover:text-violet-600 transition-colors font-medium">Contact</Link>
// // // // // //           </nav>
// // // // // //         </div>
// // // // // //         <div className="flex gap-3">
// // // // // //           <Link to="/SignUp">
// // // // // //             <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-4 py-2 rounded-md text-sm hover:from-violet-600 hover:to-fuchsia-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg">
// // // // // //               Sign Up
// // // // // //             </button>
// // // // // //           </Link>
// // // // // //           <Link to="/LoginPage">
// // // // // //             <button className="bg-white text-violet-700 border border-violet-300 px-4 py-2 rounded-md text-sm hover:bg-violet-50 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg font-medium">
// // // // // //               Login
// // // // // //             </button> 
// // // // // //           </Link>
// // // // // //         </div>
// // // // // //       </header>
// // // // // //     );
// // // // // //   };

// // // // // //   return (
// // // // // //     <div 
// // // // // //       className="min-h-screen overflow-hidden relative text-gray-800 font-sans"
// // // // // //       style={{
// // // // // //         background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, #e0ecff 0%, #f5f9ff 40%, #edf6ff 100%)`,
// // // // // //         backgroundSize: '200% 200%',
// // // // // //         transition: 'background-position 0.3s ease'
// // // // // //       }}
// // // // // //     >
// // // // // //       <Header logo={logo} />
      
// // // // // //       <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
// // // // // //         <motion.div 
// // // // // //           initial={{ opacity: 0, y: 30 }}
// // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // //           transition={{ duration: 0.6 }}
// // // // // //           className="text-center mb-10"
// // // // // //         >
// // // // // //           <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500 drop-shadow-sm">
// // // // // //             Customer Voices
// // // // // //           </h1>
// // // // // //           <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto font-medium">
// // // // // //             Your experiences shape our future. Share your journey with us or discover what others have experienced with our products.
// // // // // //           </p>
// // // // // //         </motion.div>
        
// // // // // //         <div className="flex justify-center mb-10">
// // // // // //           <div className="bg-white rounded-full shadow-xl p-1 inline-flex border border-violet-100">
// // // // // //             <button 
// // // // // //               onClick={() => setActiveTab("write")} 
// // // // // //               className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
// // // // // //                 activeTab === "write" 
// // // // // //                   ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg" 
// // // // // //                   : "text-gray-600 hover:bg-violet-50"
// // // // // //               }`}
// // // // // //             >
// // // // // //               Write a Review
// // // // // //             </button>
// // // // // //             <button 
// // // // // //               onClick={() => setActiveTab("read")} 
// // // // // //               className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
// // // // // //                 activeTab === "read" 
// // // // // //                   ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg" 
// // // // // //                   : "text-gray-600 hover:bg-violet-50"
// // // // // //               }`}
// // // // // //             >
// // // // // //               Read Reviews ({reviews.length})
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>
        
// // // // // //         <AnimatePresence mode="wait">
// // // // // //           {activeTab === "write" ? (
// // // // // //             <motion.div
// // // // // //               key="write"
// // // // // //               initial={{ opacity: 0, x: -30 }}
// // // // // //               animate={{ opacity: 1, x: 0 }}
// // // // // //               exit={{ opacity: 0, x: -30 }}
// // // // // //               transition={{ duration: 0.5 }}
// // // // // //             >
// // // // // //               <div className="max-w-3xl mx-auto">
// // // // // //                 <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all hover:shadow-2xl border border-violet-100">
// // // // // //                   <div className="relative h-56 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500">
// // // // // //                     <div className="absolute inset-0 bg-pattern opacity-10"></div>
// // // // // //                     <div className="absolute inset-0 flex items-center justify-center">
// // // // // //                       <h2 className="text-3xl font-bold text-white text-center px-4 drop-shadow-md">Share Your Voice</h2>
// // // // // //                     </div>
// // // // // //                     <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
// // // // // //                       <div className="bg-white rounded-full p-4 shadow-lg border-4 border-white">
// // // // // //                         <svg className="w-10 h-10 text-violet-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
// // // // // //                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
// // // // // //                         </svg>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   </div>
                  
// // // // // //                   <form className="p-8 pt-16" onSubmit={handleSubmit}>
// // // // // //                     <div className="mb-6">
// // // // // //                       <label className="block text-gray-700 font-medium mb-2">Your Name</label>
// // // // // //                       <input 
// // // // // //                         type="text" 
// // // // // //                         name="name" 
// // // // // //                         value={formData.name} 
// // // // // //                         onChange={handleInputChange} 
// // // // // //                         required 
// // // // // //                         className="w-full p-4 border border-violet-200 rounded-xl focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all bg-violet-50" 
// // // // // //                         placeholder="John Doe"
// // // // // //                       />
// // // // // //                     </div>

// // // // // //                     <div className="mb-6">
// // // // // //                       <label className="block text-gray-700 font-medium mb-2">Rating</label>
// // // // // //                       <div className="flex space-x-2 bg-violet-50 p-4 rounded-xl justify-center border border-violet-100">
// // // // // //                         {renderStars()}
// // // // // //                       </div>
// // // // // //                     </div>

// // // // // //                     <div className="mb-6">
// // // // // //                       <label className="block text-gray-700 font-medium mb-2">Your Review</label>
// // // // // //                       <textarea 
// // // // // //                         name="review" 
// // // // // //                         value={formData.review} 
// // // // // //                         onChange={handleInputChange} 
// // // // // //                         required 
// // // // // //                         className="w-full p-4 border border-violet-200 rounded-xl h-36 focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all bg-violet-50" 
// // // // // //                         placeholder="Tell us about your experience with our products, service quality, and overall shopping journey..."
// // // // // //                       ></textarea>
// // // // // //                     </div>

// // // // // //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// // // // // //                       <div>
// // // // // //                         <label className="block text-gray-700 font-medium mb-2">Email (optional)</label>
// // // // // //                         <input 
// // // // // //                           type="email" 
// // // // // //                           name="email" 
// // // // // //                           value={formData.email} 
// // // // // //                           onChange={handleInputChange} 
// // // // // //                           className="w-full p-4 border border-violet-200 rounded-xl focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all bg-violet-50" 
// // // // // //                           placeholder="email@example.com"
// // // // // //                         />
// // // // // //                       </div>
// // // // // //                       <div>
// // // // // //                         <label className="block text-gray-700 font-medium mb-2">Phone (optional)</label>
// // // // // //                         <input 
// // // // // //                           type="tel" 
// // // // // //                           name="phone" 
// // // // // //                           value={formData.phone} 
// // // // // //                           onChange={handleInputChange} 
// // // // // //                           className="w-full p-4 border border-violet-200 rounded-xl focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all bg-violet-50" 
// // // // // //                           placeholder="(123) 456-7890"
// // // // // //                         />
// // // // // //                       </div>
// // // // // //                     </div>

// // // // // //                     <motion.button 
// // // // // //                       type="submit" 
// // // // // //                       className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white py-4 rounded-xl font-bold hover:from-violet-700 hover:to-fuchsia-600 transition-colors relative overflow-hidden"
// // // // // //                       whileHover={{ scale: 1.02 }}
// // // // // //                       whileTap={{ scale: 0.98 }}
// // // // // //                       disabled={isSubmitting}
// // // // // //                     >
// // // // // //                       {isSubmitting ? (
// // // // // //                         <span className="flex items-center justify-center">
// // // // // //                           <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // // // // //                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // // // //                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // // // //                           </svg>
// // // // // //                           Processing...
// // // // // //                         </span>
// // // // // //                       ) : "SUBMIT YOUR REVIEW"}
// // // // // //                     </motion.button>
                    
// // // // // //                     <AnimatePresence>
// // // // // //                       {submitSuccess && (
// // // // // //                         <motion.div 
// // // // // //                           initial={{ opacity: 0, y: 10 }}
// // // // // //                           animate={{ opacity: 1, y: 0 }}
// // // // // //                           exit={{ opacity: 0 }}
// // // // // //                           className="mt-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center flex items-center justify-center space-x-2"
// // // // // //                         >
// // // // // //                           <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
// // // // // //                           </svg>
// // // // // //                           <span>Thank you! Your review has been submitted successfully.</span>
// // // // // //                         </motion.div>
// // // // // //                       )}
// // // // // //                     </AnimatePresence>
// // // // // //                   </form>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </motion.div>
// // // // // //           ) : (
// // // // // //             <motion.div
// // // // // //               key="read"
// // // // // //               initial={{ opacity: 0, x: 30 }}
// // // // // //               animate={{ opacity: 1, x: 0 }}
// // // // // //               exit={{ opacity: 0, x: 30 }}
// // // // // //               transition={{ duration: 0.5 }}
// // // // // //               className="max-w-5xl mx-auto"
// // // // // //             >
// // // // // //               <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-6 border border-violet-100">
// // // // // //                 <div className="mb-6 flex justify-between items-center">
// // // // // //                   <h2 className="text-2xl font-bold text-gray-800">What Our Customers Say</h2>
                  
// // // // // //                   {reviews.length > 0 && (
// // // // // //                     <div className="bg-violet-50 rounded-full px-4 py-2 flex items-center border border-violet-100">
// // // // // //                       <span className="text-violet-700 font-medium">{reviews.length} Reviews</span>
// // // // // //                     </div>
// // // // // //                   )}
// // // // // //                 </div>
                
// // // // // //                 <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
// // // // // //                   <AnimatePresence>
// // // // // //                     {reviews.length > 0 ? (
// // // // // //                       reviews.map((review, index) => {
// // // // // //                         const starColor = getStarColor(review.rating);
// // // // // //                         return (
// // // // // //                           <motion.div 
// // // // // //                             key={index}
// // // // // //                             initial={{ opacity: 0, y: 20 }}
// // // // // //                             animate={{ opacity: 1, y: 0 }}
// // // // // //                             transition={{ duration: 0.4, delay: index * 0.1 }}
// // // // // //                             className="bg-gradient-to-br from-white to-violet-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-violet-100"
// // // // // //                           >
// // // // // //                             <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
// // // // // //                               <div className="flex items-center gap-4">
// // // // // //                                 <div className="flex justify-center items-center w-14 h-14 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl text-white font-bold text-xl shadow-md">
// // // // // //                                   {review.name.charAt(0).toUpperCase()}
// // // // // //                                 </div>
// // // // // //                                 <div>
// // // // // //                                   <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
// // // // // //                                   <div className="flex mt-1">
// // // // // //                                     {[...Array(5)].map((_, i) => (
// // // // // //                                       <span 
// // // // // //                                         key={i} 
// // // // // //                                         className={`text-xl ${i < Number(review.rating) ? "" : "text-gray-200"}`}
// // // // // //                                         style={{ color: i < Number(review.rating) ? starColor : "#E5E7EB" }}
// // // // // //                                       >
// // // // // //                                         ★
// // // // // //                                       </span>
// // // // // //                                     ))}
// // // // // //                                   </div>
// // // // // //                                 </div>
// // // // // //                               </div>
// // // // // //                               <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
// // // // // //                                 Verified Purchase
// // // // // //                               </div>
// // // // // //                             </div>
// // // // // //                             <div className="mt-4">
// // // // // //                               <p className="text-gray-700">"<span className="not-italic font-medium">{review.review}</span>"</p>
// // // // // //                             </div>
// // // // // //                             <div className="mt-4 pt-4 border-t border-violet-100 flex justify-between items-center">
// // // // // //                               <div className="text-sm text-gray-500">
// // // // // //                                 {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
// // // // // //                               </div>
// // // // // //                               <div className="flex space-x-4">
// // // // // //                                 <motion.button 
// // // // // //                                   whileHover={{ scale: 1.05 }} 
// // // // // //                                   whileTap={{ scale: 0.95 }}
// // // // // //                                   className="flex items-center gap-1 text-violet-600 hover:text-violet-800 text-sm font-medium"
// // // // // //                                 >
// // // // // //                                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
// // // // // //                                     <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
// // // // // //                                   </svg>
// // // // // //                                   Helpful
// // // // // //                                 </motion.button>
// // // // // //                                 <motion.button 
// // // // // //                                   whileHover={{ scale: 1.05 }} 
// // // // // //                                   whileTap={{ scale: 0.95 }}
// // // // // //                                   className="flex items-center gap-1 text-fuchsia-600 hover:text-fuchsia-800 text-sm font-medium"
// // // // // //                                 >
// // // // // //                                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
// // // // // //                                     <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
// // // // // //                                   </svg>
// // // // // //                                   Reply
// // // // // //                                 </motion.button>
// // // // // //                               </div>
// // // // // //                             </div>
// // // // // //                           </motion.div>
// // // // // //                         );
// // // // // //                       })
// // // // // //                     ) : (
// // // // // //                       <motion.div 
// // // // // //                         initial={{ opacity: 0 }}
// // // // // //                         animate={{ opacity: 1 }}
// // // // // //                         className="text-center py-20 bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-2xl border border-violet-100"
// // // // // //                       >
// // // // // //                         <div className="flex flex-col items-center justify-center">
// // // // // //                           <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center">
// // // // // //                             <svg className="w-12 h-12 text-violet-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
// // // // // //                               <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"></path>
// // // // // //                             </svg>
// // // // // //                           </div>
// // // // // //                           <h3 className="mt-6 text-2xl font-bold text-gray-800">Be Our First Reviewer</h3>
// // // // // //                           <p className="mt-3 text-gray-600 max-w-md font-medium">Share your unique perspective and help others make informed decisions about our products!</p>
// // // // // //                           <motion.button
// // // // // //                             whileHover={{ scale: 1.05 }}
// // // // // //                             whileTap={{ scale: 0.95 }}
// // // // // //                             onClick={() => setActiveTab("write")}
// // // // // //                             className="mt-8 px-8 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white rounded-xl font-bold hover:from-violet-700 hover:to-fuchsia-600 transition-colors shadow-lg"
// // // // // //                           >
// // // // // //                             Write the First Review
// // // // // //                           </motion.button>
// // // // // //                         </div>
// // // // // //                       </motion.div>
// // // // // //                     )}
// // // // // //                   </AnimatePresence>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </motion.div>
// // // // // //           )}
// // // // // //         </AnimatePresence>
// // // // // //       </div>

// // // // // //       <div className="relative mt-20">
// // // // // //         <div className="absolute inset-0 bg-pattern opacity-5"></div>
// // // // // //         <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 py-16 relative">
// // // // // //           <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
// // // // // //             <h2 className="text-3xl font-bold text-white mb-8">Why Your Feedback Matters</h2>
// // // // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // // // //               <motion.div 
// // // // // //                 whileHover={{ y: -5 }}
// // // // // //                 className="bg-white rounded-2xl p-6 shadow-xl text-gray-800"
// // // // // //               >
// // // // // //                 <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-violet-100 text-violet-600 rounded-2xl">
// // // // // //                   <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
// // // // // //                     <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
// // // // // //                     <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
// // // // // //                   </svg>
// // // // // //                 </div>
// // // // // //                 <h3 className="text-xl font-semibold mb-3 text-violet-700">Product Insight</h3>
// // // // // //                 <p className="text-gray-700 font-medium">Your honest reviews help us understand which products excel and which ones need improvement to meet your expectations.</p>
// // // // // //               </motion.div>
              
// // // // // //               <motion.div 
// // // // // //                 whileHover={{ y: -5 }}
// // // // // //                 className="bg-white rounded-2xl p-6 shadow-xl text-gray-800"
// // // // // //               >
// // // // // //                 <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-fuchsia-100 text-fuchsia-600 rounded-2xl">
// // // // // //                   <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
// // // // // //                     <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"></path>
// // // // // //                   </svg>
// // // // // //                 </div>
// // // // // //                 <h3 className="text-xl font-semibold mb-3 text-fuchsia-700">Service Excellence</h3>
// // // // // //                 <p className="text-gray-700 font-medium">We continuously refine our customer experience based on your valuable suggestions and feedback.</p>
// // // // // //               </motion.div>
              
// // // // // //               <motion.div 
// // // // // //                 whileHover={{ y: -5 }}
// // // // // //                 className="bg-white rounded-2xl p-6 shadow-xl text-gray-800"
// // // // // //               >
// // // // // //                 <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-pink-100 text-pink-600 rounded-2xl">
// // // // // //                   <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
// // // // // //                     <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
// // // // // //                   </svg>
// // // // // //                 </div>
// // // // // //                 <h3 className="text-xl font-semibold mb-3 text-pink-700">Community Growth</h3>
// // // // // //                 <p className="text-gray-700 font-medium">Your honest reviews guide fellow shoppers in making informed decisions about our products and services.</p>
// // // // // //               </motion.div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <footer className="bg-white border-t py-10">
// // // // // //         <div className="max-w-6xl mx-auto px-4">
// // // // // //           <div className="flex flex-col md:flex-row justify-between items-center">
// // // // // //             <div className="mb-6 md:mb-0">
// // // // // //               <p className="text-gray-600 font-medium">© 2025 Retail Store Management System. All rights reserved.</p>
// // // // // //             </div>
// // // // // //             <div className="flex gap-6">
// // // // // //               <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm">Privacy Policy</a>
// // // // // //               <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm">Terms of Service</a>
// // // // // //               <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm">Contact Us</a>
// // // // // //               <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm">FAQ</a>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </footer>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default StoreReview;

// import React, { useState, useEffect } from "react";
// import logo from './images/logo.jpg';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from "framer-motion";

// const StoreReview = () => {
//   const [reviews, setReviews] = useState([]);
//   const [formData, setFormData] = useState({ name: "", rating: "5", review: "", email: "", phone: "" });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [activeTab, setActiveTab] = useState("write");

//   useEffect(() => {
//     fetchReviews();
//   }, []);

//   const fetchReviews = async () => {
//     try {
//       const response = await fetch("http://localhost:5011/reviews");
//       const data = await response.json();
//       setReviews(Array.isArray(data) ? data : []);
//     } catch (error) {
//       console.error("Error fetching reviews:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.name && formData.rating && formData.review) {
//       setIsSubmitting(true);
//       try {
//         const dataToSubmit = { ...formData };
//         if (!formData.email) delete dataToSubmit.email;
//         if (!formData.phone) delete dataToSubmit.phone;

//         const response = await fetch("http://localhost:5011/reviews", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(dataToSubmit),
//         });

//         if (!response.ok) {
//           throw new Error("Failed to submit review");
//         }

//         const result = await response.json();
//         setFormData({ name: "", rating: "5", review: "", email: "", phone: "" });
//         setReviews(prevReviews => [result, ...prevReviews]);
//         setSubmitSuccess(true);
//         setTimeout(() => {
//           setSubmitSuccess(false);
//           setActiveTab("read");
//         }, 2000);
//       } catch (error) {
//         console.error("Error submitting review:", error);
//         alert("There was an error submitting your review. Please try again.");
//       } finally {
//         setIsSubmitting(false);
//       }
//     } else {
//       alert("Name, Rating, and Review are required!");
//     }
//   };

//   const getStarColor = (rating) => {
//     switch (rating) {
//       case "5":
//         return "#FF6B6B"; // Coral red
//       case "4":
//         return "#FFB86C"; // Soft orange
//       case "3":
//         return "#FFD93D"; // Bright yellow
//       case "2":
//         return "#6BCB77"; // Mint green
//       case "1":
//         return "#4D96FF"; // Sky blue
//       default:
//         return "#FF6B6B"; // Default to coral red
//     }
//   };

//   const renderStars = () => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       stars.push(
//         <button
//           key={i}
//           type="button"
//           className={`text-3xl focus:outline-none transition-all duration-300 transform ${
//             i <= formData.rating ? "scale-110" : "text-gray-300"
//           }`}
//           style={{ color: i <= formData.rating ? getStarColor(formData.rating) : "#D1D5DB" }}
//           onClick={() => setFormData({ ...formData, rating: String(i) })}
//         >
//           ★
//         </button>
//       );
//     }
//     return stars;
//   };

//   const Header = ({ logo }) => {
//     return (
//       <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-3 bg-white/80 backdrop-blur-sm shadow-lg">
//         <div className="flex items-center gap-5">
//           <div className="w-12 h-12 transform hover:scale-105 transition-transform">
//             <Link to="/AboutPage">
//               <img src={logo} alt="Logo" className="w-full h-full rounded-full object-cover border-2 border-violet-400" />
//             </Link>
//           </div>
//           <nav className="hidden md:flex gap-4">
//             <Link to="/" className="text-violet-700 text-base no-underline hover:text-fuchsia-600 transition-colors font-medium">Home</Link>
//             <Link to="/AboutPage" className="text-gray-700 text-base no-underline hover:text-violet-600 transition-colors font-medium">About</Link>
//             <Link to="/ContactUs" className="text-gray-700 text-base no-underline hover:text-violet-600 transition-colors font-medium">Contact</Link>
//           </nav>
//         </div>
//         <div className="flex gap-3">
//           <Link to="/SignUp">
//             <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-4 py-2 rounded-md text-sm hover:from-violet-600 hover:to-fuchsia-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg">
//               Sign Up
//             </button>
//           </Link>
//           <Link to="/LoginPage">
//             <button className="bg-white text-violet-700 border border-violet-300 px-4 py-2 rounded-md text-sm hover:bg-violet-50 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg font-medium">
//               Login
//             </button> 
//           </Link>
//         </div>
//       </header>
//     );
//   };

//   return (
//     <div className="min-h-screen overflow-hidden relative text-gray-800 font-sans">
//       <Header logo={logo} />
      
//       <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-10"
//         >
//           <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500 drop-shadow-sm">
//             Customer Voices
//           </h1>
//           <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto font-medium">
//             Your experiences shape our future. Share your journey with us or discover what others have experienced with our products.
//           </p>
//         </motion.div>
        
//         <div className="flex justify-center mb-10">
//           <div className="bg-white rounded-full shadow-xl p-1 inline-flex border border-violet-100">
//             <button 
//               onClick={() => setActiveTab("write")} 
//               className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
//                 activeTab === "write" 
//                   ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg" 
//                   : "text-gray-600 hover:bg-violet-50"
//               }`}
//             >
//               Write a Review
//             </button>
//             <button 
//               onClick={() => setActiveTab("read")} 
//               className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
//                 activeTab === "read" 
//                   ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg" 
//                   : "text-gray-600 hover:bg-violet-50"
//               }`}
//             >
//               Read Reviews ({reviews.length})
//             </button>
//           </div>
//         </div>
        
//         <AnimatePresence mode="wait">
//           {activeTab === "write" ? (
//             <motion.div
//               key="write"
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -30 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="max-w-3xl mx-auto">
//                 <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all hover:shadow-2xl border border-violet-100">
//                   <div className="relative h-56 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500">
//                     <div className="absolute inset-0 bg-pattern opacity-10"></div>
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <h2 className="text-3xl font-bold text-white text-center px-4 drop-shadow-md">Share Your Voice</h2>
//                     </div>
//                     <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
//                       <div className="bg-white rounded-full p-4 shadow-lg border-4 border-white">
//                         <svg className="w-10 h-10 text-violet-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <form className="p-8 pt-16" onSubmit={handleSubmit}>
//                     <div className="mb-6">
//                       <label className="block text-gray-700 font-medium mb-2">Your Name</label>
//                       <input 
//                         type="text" 
//                         name="name" 
//                         value={formData.name} 
//                         onChange={handleInputChange} 
//                         required 
//                         className="w-full p-4 border border-violet-200 rounded-xl focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all bg-violet-50" 
//                         placeholder="John Doe"
//                       />
//                     </div>

//                     <div className="mb-6">
//                       <label className="block text-gray-700 font-medium mb-2">Rating</label>
//                       <div className="flex space-x-2 bg-violet-50 p-4 rounded-xl justify-center border border-violet-100">
//                         {renderStars()}
//                       </div>
//                     </div>

//                     <div className="mb-6">
//                       <label className="block text-gray-700 font-medium mb-2">Your Review</label>
//                       <textarea 
//                         name="review" 
//                         value={formData.review} 
//                         onChange={handleInputChange} 
//                         required 
//                         className="w-full p-4 border border-violet-200 rounded-xl h-36 focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all bg-violet-50" 
//                         placeholder="Tell us about your experience with our products, service quality, and overall shopping journey..."
//                       ></textarea>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                       <div>
//                         <label className="block text-gray-700 font-medium mb-2">Email (optional)</label>
//                         <input 
//                           type="email" 
//                           name="email" 
//                           value={formData.email} 
//                           onChange={handleInputChange} 
//                           className="w-full p-4 border border-violet-200 rounded-xl focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all bg-violet-50" 
//                           placeholder="email@example.com"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-gray-700 font-medium mb-2">Phone (optional)</label>
//                         <input 
//                           type="tel" 
//                           name="phone" 
//                           value={formData.phone} 
//                           onChange={handleInputChange} 
//                           className="w-full p-4 border border-violet-200 rounded-xl focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all bg-violet-50" 
//                           placeholder="(123) 456-7890"
//                         />
//                       </div>
//                     </div>

//                     <motion.button 
//                       type="submit" 
//                       className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white py-4 rounded-xl font-bold hover:from-violet-700 hover:to-fuchsia-600 transition-colors relative overflow-hidden"
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? (
//                         <span className="flex items-center justify-center">
//                           <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                           </svg>
//                           Processing...
//                         </span>
//                       ) : "SUBMIT YOUR REVIEW"}
//                     </motion.button>
                    
//                     <AnimatePresence>
//                       {submitSuccess && (
//                         <motion.div 
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0 }}
//                           className="mt-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center flex items-center justify-center space-x-2"
//                         >
//                           <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                           </svg>
//                           <span>Thank you! Your review has been submitted successfully.</span>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </form>
//                 </div>
//               </div>
//             </motion.div>
//           ) : (
//             <motion.div
//               key="read"
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 30 }}
//               transition={{ duration: 0.5 }}
//               className="max-w-5xl mx-auto"
//             >
//               <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-6 border border-violet-100">
//                 <div className="mb-6 flex justify-between items-center">
//                   <h2 className="text-2xl font-bold text-gray-800">What Our Customers Say</h2>
                  
//                   {reviews.length > 0 && (
//                     <div className="bg-violet-50 rounded-full px-4 py-2 flex items-center border border-violet-100">
//                       <span className="text-violet-700 font-medium">{reviews.length} Reviews</span>
//                     </div>
//                   )}
//                 </div>
                
//                 <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
//                   <AnimatePresence>
//                     {reviews.length > 0 ? (
//                       reviews.map((review, index) => {
//                         const starColor = getStarColor(review.rating);
//                         return (
//                           <motion.div 
//                             key={index}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.4, delay: index * 0.1 }}
//                             className="bg-gradient-to-br from-white to-violet-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-violet-100"
//                           >
//                             <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
//                               <div className="flex items-center gap-4">
//                                 <div className="flex justify-center items-center w-14 h-14 bg-gradient-to-br                                 from-violet-500 to-fuchsia-500 rounded-2xl text-white font-bold text-xl shadow-md">
//                                   {review.name.charAt(0).toUpperCase()}
//                                 </div>
//                                 <div>
//                                   <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
//                                   <div className="flex mt-1">
//                                     {[...Array(5)].map((_, i) => (
//                                       <span 
//                                         key={i} 
//                                         className={`text-xl ${i < Number(review.rating) ? "" : "text-gray-200"}`}
//                                         style={{ color: i < Number(review.rating) ? starColor : "#E5E7EB" }}
//                                       >
//                                         ★
//                                       </span>
//                                     ))}
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
//                                 Verified Purchase
//                               </div>
//                             </div>
//                             <div className="mt-4">
//                               <p className="text-gray-700">"<span className="not-italic font-medium">{review.review}</span>"</p>
//                             </div>
//                             <div className="mt-4 pt-4 border-t border-violet-100 flex justify-between items-center">
//                               <div className="text-sm text-gray-500">
//                                 {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
//                               </div>
//                               <div className="flex space-x-4">
//                                 <motion.button 
//                                   whileHover={{ scale: 1.05 }} 
//                                   whileTap={{ scale: 0.95 }}
//                                   className="flex items-center gap-1 text-violet-600 hover:text-violet-800 text-sm font-medium"
//                                 >
//                                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
//                                   </svg>
//                                   Helpful
//                                 </motion.button>
//                                 <motion.button 
//                                   whileHover={{ scale: 1.05 }} 
//                                   whileTap={{ scale: 0.95 }}
//                                   className="flex items-center gap-1 text-fuchsia-600 hover:text-fuchsia-800 text-sm font-medium"
//                                 >
//                                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                                     <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
//                                   </svg>
//                                   Reply
//                                 </motion.button>
//                               </div>
//                             </div>
//                           </motion.div>
//                         );
//                       })
//                     ) : (
//                       <motion.div 
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         className="text-center py-20 bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-2xl border border-violet-100"
//                       >
//                         <div className="flex flex-col items-center justify-center">
//                           <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center">
//                             <svg className="w-12 h-12 text-violet-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                               <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"></path>
//                             </svg>
//                           </div>
//                           <h3 className="mt-6 text-2xl font-bold text-gray-800">Be Our First Reviewer</h3>
//                           <p className="mt-3 text-gray-600 max-w-md font-medium">Share your unique perspective and help others make informed decisions about our products!</p>
//                           <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={() => setActiveTab("write")}
//                             className="mt-8 px-8 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white rounded-xl font-bold hover:from-violet-700 hover:to-fuchsia-600 transition-colors shadow-lg"
//                           >
//                             Write the First Review
//                           </motion.button>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       <div className="relative mt-20">
//         <div className="absolute inset-0 bg-pattern opacity-5"></div>
//         <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 py-16 relative">
//           <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
//             <h2 className="text-3xl font-bold text-white mb-8">Why Your Feedback Matters</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <motion.div 
//                 whileHover={{ y: -5 }}
//                 className="bg-white rounded-2xl p-6 shadow-xl text-gray-800"
//               >
//                 <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-violet-100 text-violet-600 rounded-2xl">
//                   <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
//                     <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-violet-700">Product Insight</h3>
//                 <p className="text-gray-700 font-medium">Your honest reviews help us understand which products excel and which ones need improvement to meet your expectations.</p>
//               </motion.div>
              
//               <motion.div 
//                 whileHover={{ y: -5 }}
//                 className="bg-white rounded-2xl p-6 shadow-xl text-gray-800"
//               >
//                 <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-fuchsia-100 text-fuchsia-600 rounded-2xl">
//                   <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                     <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"></path>
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-fuchsia-700">Service Excellence</h3>
//                 <p className="text-gray-700 font-medium">We continuously refine our customer experience based on your valuable suggestions and feedback.</p>
//               </motion.div>
              
//               <motion.div 
//                 whileHover={{ y: -5 }}
//                 className="bg-white rounded-2xl p-6 shadow-xl text-gray-800"
//               >
//                 <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-pink-100 text-pink-600 rounded-2xl">
//                   <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-pink-700">Community Growth</h3>
//                 <p className="text-gray-700 font-medium">Your honest reviews guide fellow shoppers in making informed decisions about our products and services.</p>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <footer className="bg-white border-t py-10">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-6 md:mb-0">
//               <p className="text-gray-600 font-medium">© 2025 Retail Store Management System. All rights reserved.</p>
//             </div>
//             <div className="flex gap-6">
//               <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm">Privacy Policy</a>
//               <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm">Terms of Service</a>
//               <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm">Contact Us</a>
//               <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm">FAQ</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default StoreReview;




import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from 'lucide-react';
import logo from './images/logo.jpg';

// Reusable Header Component (consistent across all pages)
const Header = ({ currentTheme, toggleTheme, isDarkMode, scrolled, mobileMenuOpen, setMobileMenuOpen, location }) => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/AboutPage' },
    { name: 'Contact', path: '/ContactUs' },
  ];
  const actionButtons = [
    { name: 'Sign Up', path: '/SignUp' },
    { name: 'Login', path: '/LoginPage' },
    { name: 'Store Review', path: '/StoreReview' },
  ];

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? currentTheme.header : currentTheme.headerTransparent}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img src={logo} alt="RetailPro" className="w-12 h-12 rounded-full group-hover:rotate-12 transition-transform" whileHover={{ scale: 1.1 }} />
            <span className={`${currentTheme.accent} text-2xl font-extrabold tracking-tight group-hover:text-opacity-80 transition-all`}>RetailPro</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link, idx) => (
              <motion.div key={idx} whileHover={{ y: -2 }} transition={{ duration: 0.3 }}>
                <Link to={link.path} className={`text-lg font-medium ${location.pathname === link.path ? currentTheme.accent : currentTheme.secondaryText} hover:${currentTheme.accent} transition-colors`}>
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="hidden md:flex gap-4">
            {actionButtons.map((button, idx) => (
              <motion.button
                key={idx}
                className={`px-5 py-2 rounded-full text-sm font-semibold ${idx === 2 ? `${currentTheme.button} text-white` : currentTheme.secondaryButton} ${currentTheme.glow} transition-all`}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(79,70,229,0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={button.path}>{button.name}</Link>
              </motion.button>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className={`w-8 h-8 ${currentTheme.accent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <motion.div
            className={`${currentTheme.card} mt-4 p-4 rounded-lg`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {navLinks.map((link, idx) => (
              <Link key={idx} to={link.path} className={`block py-2 ${currentTheme.text} hover:${currentTheme.accent}`} onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
            {actionButtons.map((button, idx) => (
              <Link key={idx} to={button.path} className="block w-full">
                <button className={`w-full py-2 mt-2 rounded-lg ${idx === 2 ? `${currentTheme.button} text-white` : currentTheme.secondaryButton}`} onClick={() => setMobileMenuOpen(false)}>
                  {button.name}
                </button>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

const StoreReview = () => {
  const location = useLocation();
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ name: "", rating: "5", review: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState("write");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches);

  const themes = {
    light: {
      background: 'bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50',
      text: 'text-gray-800',
      secondaryText: 'text-gray-600',
      accent: 'text-purple-600',
      button: 'bg-purple-600 hover:bg-purple-700 text-white',
      secondaryButton: 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50',
      card: 'bg-white',
      border: 'border-gray-300',
      header: 'bg-white/90 backdrop-blur-md shadow-lg',
      headerTransparent: 'bg-transparent',
      highlight: 'text-purple-500',
      glow: 'shadow-md hover:shadow-lg',
      input: 'bg-violet-50',
      errorInput: 'bg-red-50 border-red-300 focus:ring-red-500 focus:border-red-500',
      reviewCard: 'bg-gradient-to-br from-white to-violet-50',
      tabActive: 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white',
      tabInactive: 'text-gray-600 hover:bg-violet-50',
      footer: 'bg-white',
      success: 'bg-green-50 text-green-700 border-green-200',
    },
    dark: {
      background: 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700',
      text: 'text-gray-100',
      secondaryText: 'text-gray-400',
      accent: 'text-purple-400',
      button: 'bg-purple-600 hover:bg-purple-700 text-white',
      secondaryButton: 'bg-gray-800 text-purple-400 border-2 border-purple-400 hover:bg-gray-700',
      card: 'bg-gray-800',
      border: 'border-gray-700',
      header: 'bg-gray-900/90 backdrop-blur-lg shadow-lg',
      headerTransparent: 'bg-transparent',
      highlight: 'text-purple-300',
      glow: 'shadow-[0_0_15px_rgba(129,140,248,0.4)] hover:shadow-[0_0_20px_rgba(129,140,248,0.6)]',
      input: 'bg-gray-700',
      errorInput: 'bg-red-900 border-red-700 focus:ring-red-400 focus:border-red-400',
      reviewCard: 'bg-gradient-to-br from-gray-800 to-violet-900',
      tabActive: 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white',
      tabInactive: 'text-gray-400 hover:bg-gray-700',
      footer: 'bg-gray-900',
      success: 'bg-green-900 text-green-300 border-green-700',
    },
  };

  const currentTheme = isDarkMode ? themes.dark : themes.light;

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  useEffect(() => {
    fetchReviews();
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch("http://localhost:5011/reviews");
      const data = await response.json();
      setReviews(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.rating && formData.review) {
      setIsSubmitting(true);
      try {
        const dataToSubmit = { ...formData };
        if (!formData.email) delete dataToSubmit.email;
        if (!formData.phone) delete dataToSubmit.phone;

        const response = await fetch("http://localhost:5011/reviews", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSubmit),
        });

        if (!response.ok) throw new Error("Failed to submit review");

        const result = await response.json();
        setFormData({ name: "", rating: "5", review: "", email: "", phone: "" });
        setReviews(prev => [result, ...prev]);
        setSubmitSuccess(true);
        setTimeout(() => {
          setSubmitSuccess(false);
          setActiveTab("read");
        }, 2000);
      } catch (error) {
        console.error("Error submitting review:", error);
        alert("There was an error submitting your review. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      alert("Name, Rating, and Review are required!");
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

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <button
          key={i}
          type="button"
          className={`text-3xl focus:outline-none transition-all duration-300 transform ${i <= formData.rating ? "scale-110" : "text-gray-300 dark:text-gray-500"}`}
          style={{ color: i <= formData.rating ? getStarColor(formData.rating) : (isDarkMode ? "#6B7280" : "#D1D5DB") }}
          onClick={() => setFormData({ ...formData, rating: String(i) })}
        >
          ★
        </button>
      );
    }
    return stars;
  };

  return (
    <div className={`${currentTheme.background} ${currentTheme.text} min-h-screen overflow-hidden relative font-sans`}>
      {/* Theme Toggle */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className={`fixed top-6 right-6 z-[100] p-3 rounded-full ${currentTheme.card} ${currentTheme.glow} transition-all`}
      >
        {isDarkMode ? <Sun className={`w-6 h-6 ${currentTheme.accent}`} /> : <Moon className={`w-6 h-6 ${currentTheme.accent}`} />}
      </motion.button>

      {/* Header */}
      <Header
        currentTheme={currentTheme}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        location={location}
      />

      <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-10">
          <h1 className={`text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500 drop-shadow-sm`}>
            Customer Voices
          </h1>
          <p className={`mt-4 text-lg ${currentTheme.secondaryText} max-w-2xl mx-auto font-medium`}>
            Your experiences shape our future. Share your journey with us or discover what others have experienced with our products.
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className={`${currentTheme.card} rounded-full shadow-xl p-1 inline-flex border ${currentTheme.border}`}>
            <button
              onClick={() => setActiveTab("write")}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === "write" ? currentTheme.tabActive : currentTheme.tabInactive}`}
            >
              Write a Review
            </button>
            <button
              onClick={() => setActiveTab("read")}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === "read" ? currentTheme.tabActive : currentTheme.tabInactive}`}
            >
              Read Reviews ({reviews.length})
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "write" ? (
            <motion.div key="write" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.5 }}>
              <div className="max-w-3xl mx-auto">
                <div className={`${currentTheme.card} rounded-3xl shadow-xl overflow-hidden transform transition-all hover:shadow-2xl border ${currentTheme.border}`}>
                  <div className="relative h-56 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500">
                    <div className="absolute inset-0 bg-pattern opacity-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h2 className="text-3xl font-bold text-white text-center px-4 drop-shadow-md">Share Your Voice</h2>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <div className={`${currentTheme.card} rounded-full p-4 shadow-lg border-4 border-white`}>
                        <svg className={`w-10 h-10 ${currentTheme.accent}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <form className="p-8 pt-16" onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label className="block font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`w-full p-4 border ${currentTheme.border} rounded-xl focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all ${currentTheme.input}`}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block font-medium mb-2">Rating</label>
                      <div className={`flex space-x-2 ${currentTheme.input} p-4 rounded-xl justify-center border ${currentTheme.border}`}>
                        {renderStars()}
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="block font-medium mb-2">Your Review</label>
                      <textarea
                        name="review"
                        value={formData.review}
                        onChange={handleInputChange}
                        required
                        className={`w-full p-4 border ${currentTheme.border} rounded-xl h-36 focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all ${currentTheme.input}`}
                        placeholder="Tell us about your experience with our products, service quality, and overall shopping journey..."
                      ></textarea>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block font-medium mb-2">Email (optional)</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full p-4 border ${currentTheme.border} rounded-xl focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all ${currentTheme.input}`}
                          placeholder="email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block font-medium mb-2">Phone (optional)</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full p-4 border ${currentTheme.border} rounded-xl focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all ${currentTheme.input}`}
                          placeholder="(123) 456-7890"
                        />
                      </div>
                    </div>
                    <motion.button
                      type="submit"
                      className={`${currentTheme.button} py-4 rounded-xl font-bold w-full relative overflow-hidden`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : "SUBMIT YOUR REVIEW"}
                    </motion.button>
                    <AnimatePresence>
                      {submitSuccess && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className={`mt-6 p-4 ${currentTheme.success} rounded-lg text-center flex items-center justify-center space-x-2`}
                        >
                          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Thank you! Your review has been submitted successfully.</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div key="read" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.5 }} className="max-w-5xl mx-auto">
              <div className={`${currentTheme.card} rounded-3xl shadow-xl overflow-hidden p-6 border ${currentTheme.border}`}>
                <div className="mb-6 flex justify-between items-center">
                  <h2 className="text-2xl font-bold">What Our Customers Say</h2>
                  {reviews.length > 0 && (
                    <div className={`${currentTheme.input} rounded-full px-4 py-2 flex items-center border ${currentTheme.border}`}>
                      <span className={`${currentTheme.accent} font-medium`}>{reviews.length} Reviews</span>
                    </div>
                  )}
                </div>
                <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                  <AnimatePresence>
                    {reviews.length > 0 ? (
                      reviews.map((review, index) => {
                        const starColor = getStarColor(review.rating);
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className={`${currentTheme.reviewCard} rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border ${currentTheme.border}`}
                          >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                              <div className="flex items-center gap-4">
                                <div className="flex justify-center items-center w-14 h-14 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl text-white font-bold text-xl shadow-md">
                                  {review.name.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                  <h3 className="text-lg font-semibold">{review.name}</h3>
                                  <div className="flex mt-1">
                                    {[...Array(5)].map((_, i) => (
                                      <span
                                        key={i}
                                        className={`text-xl ${i < Number(review.rating) ? "" : "text-gray-200 dark:text-gray-600"}`}
                                        style={{ color: i < Number(review.rating) ? starColor : (isDarkMode ? "#4B5563" : "#E5E7EB") }}
                                      >
                                        ★
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                                Verified Purchase
                              </div>
                            </div>
                            <div className="mt-4">
                              <p className={`${currentTheme.secondaryText}`}>"<span className="not-italic font-medium">{review.review}</span>"</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-violet-100 dark:border-gray-700 flex justify-between items-center">
                              <div className={`text-sm ${currentTheme.secondaryText}`}>
                                {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                              </div>
                              <div className="flex space-x-4">
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`flex items-center gap-1 ${currentTheme.accent} hover:${currentTheme.highlight} text-sm font-medium`}>
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                                  </svg>
                                  Helpful
                                </motion.button>
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`flex items-center gap-1 ${currentTheme.accent} hover:${currentTheme.highlight} text-sm font-medium`}>
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
                                  </svg>
                                  Reply
                                </motion.button>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })
                    ) : (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`text-center py-20 ${currentTheme.reviewCard} rounded-2xl border ${currentTheme.border}`}>
                        <div className="flex flex-col items-center justify-center">
                          <div className={`${currentTheme.card} w-24 h-24 rounded-full shadow-md flex items-center justify-center`}>
                            <svg className={`w-12 h-12 ${currentTheme.accent}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <h3 className="mt-6 text-2xl font-bold">Be Our First Reviewer</h3>
                          <p className={`mt-3 ${currentTheme.secondaryText} max-w-md font-medium`}>Share your unique perspective and help others make informed decisions about our products!</p>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveTab("write")}
                            className={`${currentTheme.button} mt-8 px-8 py-3 rounded-xl font-bold`}
                          >
                            Write the First Review
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative mt-20">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 py-16 relative">
          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl font-bold text-white mb-8">Why Your Feedback Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "M10 12a2 2 0 100-4 2 2 0 000 4zM.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z", title: "Product Insight", text: "Your honest reviews help us understand which products excel and which ones need improvement to meet your expectations.", color: "violet" },
                { icon: "M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z", title: "Service Excellence", text: "We continuously refine our customer experience based on your valuable suggestions and feedback.", color: "fuchsia" },
                { icon: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z", title: "Community Growth", text: "Your honest reviews guide fellow shoppers in making informed decisions about our products and services.", color: "pink" },
              ].map((item, idx) => (
                <motion.div whileHover={{ y: -5 }} className={`${currentTheme.card} rounded-2xl p-6 shadow-xl`} key={idx}>
                  <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-${item.color}-100 text-${item.color}-600 dark:bg-${item.color}-900 dark:text-${item.color}-300 rounded-2xl`}>
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule={item.icon.includes("fillRule") ? "evenodd" : undefined} d={item.icon} clipRule={item.icon.includes("clipRule") ? "evenodd" : undefined}></path>
                    </svg>
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${currentTheme.accent}`}>{item.title}</h3>
                  <p className={`font-medium ${currentTheme.secondaryText}`}>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className={`${currentTheme.footer} border-t py-10`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className={`${currentTheme.secondaryText} font-medium`}>© 2025 Retail Store Management System. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Contact Us", "FAQ"].map((link, idx) => (
                <a key={idx} href="#" className={`${currentTheme.secondaryText} hover:${currentTheme.accent} transition-colors text-sm`}>{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StoreReview;