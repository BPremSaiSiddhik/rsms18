// // // import React, { useState } from "react";
// // // import axios from "axios";
// // // import { toast } from "react-toastify";
// // // import { useNavigate, useLocation } from "react-router-dom";

// // // const ResetPasswordPage = () => {
// // //   const [newPassword, setNewPassword] = useState("");
// // //   const [confirmPassword, setConfirmPassword] = useState("");
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const navigate = useNavigate();
// // //   const location = useLocation();

// // //   // Extract token, storeId, and userId from the URL
// // //   const queryParams = new URLSearchParams(location.search);
// // //   const token = queryParams.get("token");
// // //   const storeId = queryParams.get("storeId");
// // //   const userId = queryParams.get("userId");

// // //   const handleResetPassword = async () => {
// // //     if (newPassword !== confirmPassword) {
// // //       toast.error("New passwords do not match!");
// // //       return;
// // //     }

// // //     setIsLoading(true);
// // //     try {
// // //       const response = await axios.post("http://localhost:5001/reset_password", {
// // //         storeId,
// // //         userId,
// // //         token,
// // //         newPassword,
// // //       });
// // //       toast.success(response.data.message);
// // //       navigate("/login"); // Redirect to login page after success
// // //     } catch (err) {
// // //       toast.error(err.response?.data?.message || "Failed to reset password");
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="p-8 min-h-screen bg-gray-100">
// // //       <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
// // //         <h2 className="text-2xl font-bold mb-6 text-gray-800">Reset Password</h2>
// // //         <div className="space-y-4">
// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700">New Password</label>
// // //             <input
// // //               type="password"
// // //               value={newPassword}
// // //               onChange={(e) => setNewPassword(e.target.value)}
// // //               className="w-full p-2 border border-gray-300 rounded-md"
// // //             />
// // //           </div>
// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
// // //             <input
// // //               type="password"
// // //               value={confirmPassword}
// // //               onChange={(e) => setConfirmPassword(e.target.value)}
// // //               className="w-full p-2 border border-gray-300 rounded-md"
// // //             />
// // //           </div>
// // //           <button
// // //             onClick={handleResetPassword}
// // //             disabled={isLoading}
// // //             className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
// // //           >
// // //             {isLoading ? "Resetting..." : "Reset Password"}
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ResetPasswordPage;
// // import React, { useState } from "react";
// // import { useNavigate, useSearchParams } from "react-router-dom";
// // import { Input } from "./components/ui/Input";
// // import { Button } from "./components/ui/Button";

// // const ResetPassword = () => {
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [searchParams] = useSearchParams();
// //   const token = searchParams.get("token");
// //   const navigate = useNavigate();

// //   const handleResetPassword = async () => {
// //     if (password !== confirmPassword) {
// //       setMessage("Passwords do not match.");
// //       return;
// //     }

// //     try {
// //       const response = await fetch("http://localhost:5001/reset_password", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({ token, password }),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         setMessage(data.message);
// //         navigate("/login");
// //       } else {
// //         setMessage(data.message || "Failed to reset password.");
// //       }
// //     } catch (error) {
// //       setMessage("Something went wrong. Please try again.");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-50">
// //       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
// //         <h1 className="text-2xl font-bold mb-6">Reset Password</h1>
// //         <Input
// //           type="password"
// //           placeholder="New Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           className="mb-4"
// //         />
// //         <Input
// //           type="password"
// //           placeholder="Confirm New Password"
// //           value={confirmPassword}
// //           onChange={(e) => setConfirmPassword(e.target.value)}
// //           className="mb-6"
// //         />
// //         <Button onClick={handleResetPassword}>Reset Password</Button>
// //         {message && <p className="text-sm text-gray-600 mt-2">{message}</p>}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ResetPassword;


// import React, { useState } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";

// const ResetPassword = () => {
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [searchParams] = useSearchParams();
//   const token = searchParams.get("token"); // Get token from URL
//   const navigate = useNavigate();

//   const handleResetPassword = async () => {
//     if (newPassword !== confirmPassword) {
//       setMessage("Passwords do not match.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5001/reset_password", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ token, newPassword }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage(data.message);
//         navigate("/login"); // Redirect to login page after successful reset
//       } else {
//         setMessage(data.message || "Failed to reset password.");
//       }
//     } catch (error) {
//       setMessage("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-6">Reset Password</h1>
//         <input
//           type="password"
//           placeholder="New Password"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//           className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
//         />
//         <input
//           type="password"
//           placeholder="Confirm New Password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 mb-6"
//         />
//         <button
//           onClick={handleResetPassword}
//           className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
//         >
//           Reset Password
//         </button>
//         {message && <p className="text-sm text-gray-600 mt-2">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;

// import React, { useState } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";

// const ResetPassword = () => {
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [searchParams] = useSearchParams();
//   const token = searchParams.get("token"); // Get token from URL
//   const navigate = useNavigate();

//   const handleResetPassword = async () => {
//     if (newPassword !== confirmPassword) {
//       setMessage("Passwords do not match.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5001/reset_password", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ token, newPassword }), // Ensure token and newPassword are sent
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage(data.message);
//         navigate("/login"); // Redirect to login page after successful reset
//       } else {
//         setMessage(data.message || "Failed to reset password.");
//       }
//     } catch (error) {
//       setMessage("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-6">Reset Password</h1>
//         <p className="text-gray-600 mb-4">Token: {token || "No token found"}</p> {/* Debugging message */}
//         <input
//           type="password"
//           placeholder="New Password"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//           className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
//         />
//         <input
//           type="password"
//           placeholder="Confirm New Password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 mb-6"
//         />
//         <button
//           onClick={handleResetPassword}
//           className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
//         >
//           Reset Password
//         </button>
//         {message && <p className="text-sm text-gray-600 mt-2">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;

    import React, { useState } from "react";
    import { useNavigate, useSearchParams } from "react-router-dom";

    const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token"); // Get token from URL
    const navigate = useNavigate();

    const handleResetPassword = async () => {
        if (newPassword !== confirmPassword) {
        setMessage("Passwords do not match.");
        return;
        }

        try {
        const response = await fetch("http://localhost:5001/reset_password", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ token, password: newPassword }), // Send `password` instead of `newPassword`
        });

        const data = await response.json();

        if (response.ok) {
            setMessage(data.message);
            navigate("/login"); // Redirect to login page after successful reset
        } else {
            setMessage(data.message || "Failed to reset password.");
        }
        } catch (error) {
        setMessage("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6">Reset Password</h1>
            <p className="text-gray-600 mb-4">Token: {token || "No token found"}</p> {/* Debugging message */}
            <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
            />
            <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 mb-6"
            />
            <button
            onClick={handleResetPassword}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
            Reset Password
            </button>
            {message && <p className="text-sm text-gray-600 mt-2">{message}</p>}
        </div>
        </div>
    );
    };

    export default ResetPassword;