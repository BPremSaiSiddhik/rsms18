// // import React, { useState } from "react";
// // import axios from "axios";
// // import { toast } from "react-toastify";
// // import { useStore } from "./StoreContext"; // Assuming you have a StoreContext for global state

// // const ChangePasswordPage = () => {
// //   const { storeId, userId } = useStore(); // Get storeId and userId from global state
// //   const [currentPassword, setCurrentPassword] = useState("");
// //   const [newPassword, setNewPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [isLoading, setIsLoading] = useState(false);

// //   const handleChangePassword = async () => {
// //     if (newPassword !== confirmPassword) {
// //       toast.error("New passwords do not match!");
// //       return;
// //     }

// //     setIsLoading(true);
// //     try {
// //       const response = await axios.post("http://localhost:5014/change_password", {
// //         storeId,
// //         userId,
// //         currentPassword,
// //         newPassword,
// //       });
// //       toast.success(response.data.message);
// //       setCurrentPassword("");
// //       setNewPassword("");
// //       setConfirmPassword("");
// //     } catch (err) {
// //       toast.error(err.response?.data?.message || "Failed to change password");
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="p-8 min-h-screen bg-gray-100">
// //       <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
// //         <h2 className="text-2xl font-bold mb-6 text-gray-800">Change Password</h2>
// //         <div className="space-y-4">
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">Current Password</label>
// //             <input
// //               type="password"
// //               value={currentPassword}
// //               onChange={(e) => setCurrentPassword(e.target.value)}
// //               className="w-full p-2 border border-gray-300 rounded-md"
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">New Password</label>
// //             <input
// //               type="password"
// //               value={newPassword}
// //               onChange={(e) => setNewPassword(e.target.value)}
// //               className="w-full p-2 border border-gray-300 rounded-md"
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
// //             <input
// //               type="password"
// //               value={confirmPassword}
// //               onChange={(e) => setConfirmPassword(e.target.value)}
// //               className="w-full p-2 border border-gray-300 rounded-md"
// //             />
// //           </div>
// //           <button
// //             onClick={handleChangePassword}
// //             disabled={isLoading}
// //             className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
// //           >
// //             {isLoading ? "Updating..." : "Change Password"}
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ChangePasswordPage;




// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useStore } from "./StoreContext"; // Assuming you have a StoreContext for global state
// import { useNavigate } from "react-router-dom";

// const ChangePasswordPage = () => {
//   const { storeId, userId } = useStore(); // Get storeId and userId from global state
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChangePassword = async () => {
//     if (newPassword !== confirmPassword) {
//       toast.error("New passwords do not match!");
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const response = await axios.post("http://localhost:5014/change_password", {
//         storeId,
//         userId,
//         currentPassword,
//         newPassword,
//       });
//       toast.success(response.data.message);
//       setCurrentPassword("");
//       setNewPassword("");
//       setConfirmPassword("");
//       navigate("/dashboard"); // Redirect to the dashboard after success
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Failed to change password");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="p-8 min-h-screen bg-gray-100">
//       <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800">Change Password</h2>
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Current Password</label>
//             <input
//               type="password"
//               value={currentPassword}
//               onChange={(e) => setCurrentPassword(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">New Password</label>
//             <input
//               type="password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           <button
//             onClick={handleChangePassword}
//             disabled={isLoading}
//             className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//           >
//             {isLoading ? "Updating..." : "Change Password"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChangePasswordPage;

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useStore } from "./StoreContext"; // Assuming you have a StoreContext for global state
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const { storeId, userId } = useStore(); // Get storeId and userId from global state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match!");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:5014/change_password", {
        storeId,
        userId,
        currentPassword,
        newPassword,
      });
      toast.success(response.data.message);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      navigate("/dashboard"); // Redirect to the dashboard after success
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to change password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Change Password</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            onClick={handleChangePassword}
            disabled={isLoading}
            className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {isLoading ? "Updating..." : "Change Password"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;