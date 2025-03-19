// // // // // // // // // // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // // // // // // // // // import axios from "axios";
// // // // // // // // // // // // // // // // // // import { useNavigate, Link } from "react-router-dom";
// // // // // // // // // // // // // // // // // // import { useStore } from "./StoreContext";
// // // // // // // // // // // // // // // // // // import logo from "./logo.jpg";

// // // // // // // // // // // // // // // // // // const Login = () => {
// // // // // // // // // // // // // // // // // //   const [storeId, setStoreId] = useState("");
// // // // // // // // // // // // // // // // // //   const [password, setPassword] = useState("");
// // // // // // // // // // // // // // // // // //   const [id, setId] = useState("");
// // // // // // // // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // // // // // // // //   const [userDetails, setUserDetails] = useState(null);
// // // // // // // // // // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // // // // // // // // // //   const { setStoreName, setStoreId: setStoreInContext, setUserId } = useStore();

// // // // // // // // // // // // // // // // // //   const handleUserCheck = async (e) => {
// // // // // // // // // // // // // // // // // //     e.preventDefault();
    
// // // // // // // // // // // // // // // // // //     const data = { storeId, id: parseInt(id), password };
// // // // // // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // // // // // //       const response = await axios.post("http://localhost:5001/check_user", data);
// // // // // // // // // // // // // // // // // //       if (response.data && response.data.message === "User found!") {
// // // // // // // // // // // // // // // // // //         setUserDetails(response.data);
// // // // // // // // // // // // // // // // // //         setError(null);
        
// // // // // // // // // // // // // // // // // //         localStorage.setItem("storeName", response.data.store_name);
// // // // // // // // // // // // // // // // // //         localStorage.setItem("storeId", storeId);
// // // // // // // // // // // // // // // // // //         localStorage.setItem("userId", response.data.id);
        
// // // // // // // // // // // // // // // // // //         setStoreName(response.data.store_name);
// // // // // // // // // // // // // // // // // //         setStoreInContext(storeId);
// // // // // // // // // // // // // // // // // //         setUserId(response.data.id);
        
// // // // // // // // // // // // // // // // // //         navigate("/Inter");
// // // // // // // // // // // // // // // // // //       } else {
// // // // // // // // // // // // // // // // // //         setError("User not found or fields mismatch");
// // // // // // // // // // // // // // // // // //         setUserDetails(null);
// // // // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // // // // // // // //       setError(error.response?.data?.message || "Something went wrong!");
// // // // // // // // // // // // // // // // // //       setUserDetails(null);
// // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // //     <>
// // // // // // // // // // // // // // // // // //       <header className="flex justify-between items-center p-4 bg-white shadow-md">
// // // // // // // // // // // // // // // // // //         <div className="flex items-center gap-4">
// // // // // // // // // // // // // // // // // //           <Link to="/AboutPage">
// // // // // // // // // // // // // // // // // //             <img src={logo} alt="Logo" className="w-16 h-16" />
// // // // // // // // // // // // // // // // // //           </Link>
// // // // // // // // // // // // // // // // // //           <nav className="flex gap-4">
// // // // // // // // // // // // // // // // // //             <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
// // // // // // // // // // // // // // // // // //             <Link to="#" className="text-blue-500">About</Link>
// // // // // // // // // // // // // // // // // //             <Link to="/ContactUs" className="text-gray-700 hover:text-blue-500">Contact</Link>
// // // // // // // // // // // // // // // // // //           </nav>
// // // // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // // // //         <div className="flex gap-4">
// // // // // // // // // // // // // // // // // //           <Link to="/SignUp" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Sign Up</Link>
// // // // // // // // // // // // // // // // // //           <Link to="/reviews" className="px-4 py-2 bg-green-500 text-white rounded-lg">Leave a Review</Link>
// // // // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // // // //       </header>

// // // // // // // // // // // // // // // // // //       <div className="flex h-screen bg-gray-100">
// // // // // // // // // // // // // // // // // //         <div className="hidden lg:flex flex-1 bg-cover bg-center" style={{ backgroundImage: "url('./login.png')" }}></div>
// // // // // // // // // // // // // // // // // //         <div className="flex-1 flex flex-col justify-center items-center bg-white shadow-lg p-8">
// // // // // // // // // // // // // // // // // //           <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
// // // // // // // // // // // // // // // // // //           <form onSubmit={handleUserCheck} className="w-full max-w-md flex flex-col gap-4">
// // // // // // // // // // // // // // // // // //             <input type="text" placeholder="Store ID" value={storeId} onChange={(e) => setStoreId(e.target.value)} className="p-3 border border-gray-300 rounded-lg focus:border-blue-500" />
// // // // // // // // // // // // // // // // // //             <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} className="p-3 border border-gray-300 rounded-lg focus:border-blue-500" />
// // // // // // // // // // // // // // // // // //             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-3 border border-gray-300 rounded-lg focus:border-blue-500" />
// // // // // // // // // // // // // // // // // //             <button type="submit" className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600">Check User</button>
// // // // // // // // // // // // // // // // // //             <p className="text-center text-gray-600">No Account? <Link to="/SignUp" className="text-blue-500 font-bold">Create One!</Link></p>
// // // // // // // // // // // // // // // // // //           </form>
// // // // // // // // // // // // // // // // // //           {error && <p className="text-red-500 mt-4">{error}</p>}
// // // // // // // // // // // // // // // // // //           {userDetails && (
// // // // // // // // // // // // // // // // // //             <div className="mt-6 text-center border p-4 rounded-lg">
// // // // // // // // // // // // // // // // // //               <h3 className="text-lg font-bold">User Found</h3>
// // // // // // // // // // // // // // // // // //               <p>Store Name: {userDetails.store_name}</p>
// // // // // // // // // // // // // // // // // //               <p>User ID: {userDetails.id}</p>
// // // // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // // // //           )}
// // // // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // // // //     </>
// // // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // // export default Login;
// // // // // // // // // // // // // // // // //   // const handleUserCheck = async (e) => {
// // // // // // // // // // // // // // // // //   //   e.preventDefault();

// // // // // // // // // // // // // // // // //   //   // const data = {
// // // // // // // // // // // // // // // // //   //   //   storeId,
// // // // // // // // // // // // // // // // //   //   //   id: parseInt(id),

// // // // // // // // // // // // // // // // //   //   //   password,
// // // // // // // // // // // // // // // // //   //   // };
// // // // // // // // // // // // // // // // //   //   const data = {
// // // // // // // // // // // // // // // // //   //     storeId,
// // // // // // // // // // // // // // // // //   //     id: String(id),  // Convert the id to string here
// // // // // // // // // // // // // // // // //   //     password,
// // // // // // // // // // // // // // // // //   //   };
    
// // // // // // // // // // // // // // // // //   //   try {
// // // // // // // // // // // // // // // // //   //     const response = await axios.post("http://localhost:5001/check_user", data);
// // // // // // // // // // // // // // // // //   //     if (response.data && response.data.message === "User found!") {
// // // // // // // // // // // // // // // // //   //       setUserDetails(response.data);
// // // // // // // // // // // // // // // // //   //       setError(null);

// // // // // // // // // // // // // // // // //   //       // Store store name, store ID, and user ID in localStorage and context
// // // // // // // // // // // // // // // // //   //       localStorage.setItem("storeName", response.data.store_name);
// // // // // // // // // // // // // // // // //   //       localStorage.setItem("storeId", storeId);  // Store storeId
// // // // // // // // // // // // // // // // //   //       localStorage.setItem("userId", response.data.id);  // Store user ID
// // // // // // // // // // // // // // // // //   //       setStoreName(response.data.store_name);
// // // // // // // // // // // // // // // // //   //       setStoreInContext(storeId);  // Set storeId in context
// // // // // // // // // // // // // // // // //   //       setUserId(response.data.id);  // Set userId in context

// // // // // // // // // // // // // // // // //   //       navigate("/Inter");
// // // // // // // // // // // // // // // // //   //     } else {
// // // // // // // // // // // // // // // // //   //       setError("User not found or fields mismatch");
// // // // // // // // // // // // // // // // //   //       setUserDetails(null);
// // // // // // // // // // // // // // // // //   //     }
// // // // // // // // // // // // // // // // //   //   } catch (error) {
// // // // // // // // // // // // // // // // //   //     setError(error.response?.data?.message || "Something went wrong!");
// // // // // // // // // // // // // // // // //   //     setUserDetails(null);
// // // // // // // // // // // // // // // // //   //   }
// // // // // // // // // // // // // // // // //   // };

// // // // // // // // // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // // // // // import logo from './images/logo.jpg';
// // // // // // // // // // // // // // // // // import { useNavigate, Link } from 'react-router-dom';
// // // // // // // // // // // // // // // // // import { useStore } from './StoreContext'; // Import the custom hook
// // // // // // // // // // // // // // // // // import loginImage from './images/login.png';

// // // // // // // // // // // // // // // // // const Login = () => {
// // // // // // // // // // // // // // // // //   const [storeId, setStoreId] = useState('');
// // // // // // // // // // // // // // // // //   const [password, setPassword] = useState('');
// // // // // // // // // // // // // // // // //   const [id, setId] = useState('');
// // // // // // // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // // // // // // //   const [userDetails, setUserDetails] = useState(null);
// // // // // // // // // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // // // // // // // // //   const { setStoreName, setStoreId: setStoreInContext, setUserId } = useStore();  // Access context setters

// // // // // // // // // // // // // // // // //   const handleUserCheck = async (e) => {
// // // // // // // // // // // // // // // // //     e.preventDefault();
  
// // // // // // // // // // // // // // // // //     const data = {
// // // // // // // // // // // // // // // // //       storeId,
// // // // // // // // // // // // // // // // //       id: String(id),  // Ensure id is treated as a string
// // // // // // // // // // // // // // // // //       password,
// // // // // // // // // // // // // // // // //     };
  
// // // // // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // // // // //       const response = await axios.post("http://localhost:5001/check_user", data);
// // // // // // // // // // // // // // // // //       if (response.data && response.data.message === "User found!") {
// // // // // // // // // // // // // // // // //         setUserDetails(response.data);
// // // // // // // // // // // // // // // // //         setError(null);
  
// // // // // // // // // // // // // // // // //         // Store store name, store ID, and user ID in localStorage and context
// // // // // // // // // // // // // // // // //         localStorage.setItem("storeName", response.data.store_name);
// // // // // // // // // // // // // // // // //         localStorage.setItem("storeId", storeId);  // Store storeId
// // // // // // // // // // // // // // // // //         localStorage.setItem("userId", response.data.id);  // Store user ID
// // // // // // // // // // // // // // // // //         setStoreName(response.data.store_name);
// // // // // // // // // // // // // // // // //         setStoreInContext(storeId);  // Set storeId in context
// // // // // // // // // // // // // // // // //         setUserId(response.data.id);  // Set userId in context
  
// // // // // // // // // // // // // // // // //         navigate("/Inter");
// // // // // // // // // // // // // // // // //       } else {
// // // // // // // // // // // // // // // // //         setError("User not found or fields mismatch");
// // // // // // // // // // // // // // // // //         setUserDetails(null);
// // // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // // // // // // //       setError(error.response?.data?.message || "Something went wrong!");
// // // // // // // // // // // // // // // // //       setUserDetails(null);
// // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // //   };
// // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // //     <>
// // // // // // // // // // // // // // // // //       {/* Header Section */}
// // // // // // // // // // // // // // // // //       <header className="flex justify-between items-center p-3 bg-[#0d1122]">
// // // // // // // // // // // // // // // // //         <div className="flex items-center gap-5">
// // // // // // // // // // // // // // // // //           <div className="w-12 h-12">
// // // // // // // // // // // // // // // // //             <Link to="/AboutPage">
// // // // // // // // // // // // // // // // //               <img src={logo} alt="Logo" className="w-full h-full" />
// // // // // // // // // // // // // // // // //             </Link>
// // // // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // // // //           <nav className="flex gap-4">
// // // // // // // // // // // // // // // // //             <Link to="/" className="text-white text-base no-underline hover:text-[#ff6347]">Home</Link>
// // // // // // // // // // // // // // // // //             <Link className="text-blue-500 text-base no-underline">About</Link>
// // // // // // // // // // // // // // // // //             <Link to="/ContactUs" className="text-white text-base no-underline hover:text-[#ff6347]">Contact</Link>
// // // // // // // // // // // // // // // // //           </nav>
// // // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // // //         <div className="flex gap-3">
// // // // // // // // // // // // // // // // //           <Link to="/SignUp">
// // // // // // // // // // // // // // // // //             <button className="bg-[#1c4b82] text-white px-4 py-2 rounded-md text-sm hover:bg-[#337ab7] transition-all">
// // // // // // // // // // // // // // // // //               SignUp
// // // // // // // // // // // // // // // // //             </button>
// // // // // // // // // // // // // // // // //           </Link>
// // // // // // // // // // // // // // // // //           <Link to="/reviews">
// // // // // // // // // // // // // // // // //             <button className="bg-[#1c4b82] text-white px-4 py-2 rounded-md text-sm hover:bg-[#337ab7] transition-all">
// // // // // // // // // // // // // // // // //               Leave a Review
// // // // // // // // // // // // // // // // //             </button>
// // // // // // // // // // // // // // // // //           </Link>
// // // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // // //       </header>

// // // // // // // // // // // // // // // // //       {/* Login Page Container */}
// // // // // // // // // // // // // // // // //       <div className="flex h-screen bg-gradient-to-r from-white to-[#f0f3f4]">
// // // // // // // // // // // // // // // // //         {/* Left Section */}
// // // // // // // // // // // // // // // // //         <div
// // // // // // // // // // // // // // // // //           className="flex-1 bg-cover bg-center brightness-80 rounded-l-lg"
// // // // // // // // // // // // // // // // //           // style={{ backgroundImage: "url('login.png')" }}
// // // // // // // // // // // // // // // // //           style={{ backgroundImage: `url(${loginImage})` }}

// // // // // // // // // // // // // // // // //         ></div>

// // // // // // // // // // // // // // // // //         {/* Right Section */}
// // // // // // // // // // // // // // // // //         <div className="flex-1 bg-white flex flex-col justify-center items-center p-8 shadow-[-5px_0_15px_rgba(0,0,0,0.1)] rounded-r-lg">
// // // // // // // // // // // // // // // // //           <h2 className="text-2xl font-bold text-[#2c3e50] mb-5">Login</h2>
// // // // // // // // // // // // // // // // //           <form onSubmit={handleUserCheck} className="w-full max-w-[400px] flex flex-col gap-4">
// // // // // // // // // // // // // // // // //             <input
// // // // // // // // // // // // // // // // //               type="text"
// // // // // // // // // // // // // // // // //               placeholder="Store ID"
// // // // // // // // // // // // // // // // //               value={storeId}
// // // // // // // // // // // // // // // // //               onChange={(e) => setStoreId(e.target.value)}
// // // // // // // // // // // // // // // // //               className="w-full p-2.5 border border-[#dcdcdc] rounded-md text-sm focus:border-[#3498db] focus:outline-none"
// // // // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // // // //             <input
// // // // // // // // // // // // // // // // //               type="text"
// // // // // // // // // // // // // // // // //               placeholder="ID"
// // // // // // // // // // // // // // // // //               value={id}
// // // // // // // // // // // // // // // // //               onChange={(e) => setId(e.target.value)}
// // // // // // // // // // // // // // // // //               className="w-full p-2.5 border border-[#dcdcdc] rounded-md text-sm focus:border-[#3498db] focus:outline-none"
// // // // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // // // //             <input
// // // // // // // // // // // // // // // // //               type="password"
// // // // // // // // // // // // // // // // //               placeholder="Password"
// // // // // // // // // // // // // // // // //               value={password}
// // // // // // // // // // // // // // // // //               onChange={(e) => setPassword(e.target.value)}
// // // // // // // // // // // // // // // // //               className="w-full p-2.5 border border-[#dcdcdc] rounded-md text-sm focus:border-[#3498db] focus:outline-none"
// // // // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // // // //             <button
// // // // // // // // // // // // // // // // //               type="submit"
// // // // // // // // // // // // // // // // //               className="w-full p-2.5 bg-[#2ecc71] text-white rounded-md text-base hover:bg-[#27ae60] transition-all"
// // // // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // // // //               Check User
// // // // // // // // // // // // // // // // //             </button>
// // // // // // // // // // // // // // // // //             <p className="text-sm text-[#2c3e50] mt-2.5 text-center">
// // // // // // // // // // // // // // // // //               No Account?{" "}
// // // // // // // // // // // // // // // // //               <Link to="/SignUp" className="text-[#3498db] font-bold no-underline hover:underline">
// // // // // // // // // // // // // // // // //                 Create One!
// // // // // // // // // // // // // // // // //               </Link>
// // // // // // // // // // // // // // // // //             </p>
// // // // // // // // // // // // // // // // //           </form>
// // // // // // // // // // // // // // // // //           {error && <p className="text-red-500 mt-4">{error}</p>}
// // // // // // // // // // // // // // // // //           {userDetails && (
// // // // // // // // // // // // // // // // //             <div className="mt-5 text-center">
// // // // // // // // // // // // // // // // //               <h3 className="text-lg font-bold text-[#2c3e50]">User Found</h3>
// // // // // // // // // // // // // // // // //               <p className="text-[#34495e]">Store Name: {userDetails.store_name}</p>
// // // // // // // // // // // // // // // // //               <p className="text-[#34495e]">User ID: {userDetails.id}</p>
// // // // // // // // // // // // // // // // //               <p className="text-[#34495e]">Password: {userDetails.password}</p>
// // // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // // //           )}
// // // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // // //     </>
// // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // export default Login; 



// // // // // // // // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // // // // // // // import { useNavigate, Link } from "react-router-dom";
// // // // // // // // // // // // // // // // import { useStore } from "./StoreContext";
// // // // // // // // // // // // // // // // // import { Motion, AlertCircle } from "lucide-react";
// // // // // // // // // // // // // // // // // import { Alert, AlertDescription } from "@/components/ui/alert";
// // // // // // // // // // // // // // // // import { Alert, AlertDescription } from "./components/ui/Alert";  // Adjust the path if necessary
// // // // // // // // // // // // // // // // import { motion } from 'framer-motion';
// // // // // // // // // // // // // // // // import { AlertCircle } from 'lucide-react'; // Correct import for AlertCircle


// // // // // // // // // // // // // // // // const Login = () => {
// // // // // // // // // // // // // // // //   const [storeId, setStoreId] = useState("");
// // // // // // // // // // // // // // // //   const [password, setPassword] = useState("");
// // // // // // // // // // // // // // // //   const [id, setId] = useState("");
// // // // // // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // // // // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // // // // // // // //   const { setStoreName, setStoreId: setStoreInContext, setUserId } = useStore();

// // // // // // // // // // // // // // // //   const handleUserCheck = async (e) => {
// // // // // // // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // // // // // // //     setIsLoading(true);

// // // // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // // // //       const response = await fetch("http://localhost:5001/check_user", {
// // // // // // // // // // // // // // // //         method: "POST",
// // // // // // // // // // // // // // // //         headers: {
// // // // // // // // // // // // // // // //           "Content-Type": "application/json",
// // // // // // // // // // // // // // // //         },
// // // // // // // // // // // // // // // //         body: JSON.stringify({
// // // // // // // // // // // // // // // //           storeId,
// // // // // // // // // // // // // // // //           id: String(id),
// // // // // // // // // // // // // // // //           password,
// // // // // // // // // // // // // // // //         }),
// // // // // // // // // // // // // // // //       });

// // // // // // // // // // // // // // // //       const data = await response.json();

// // // // // // // // // // // // // // // //       if (data.message === "User found!") {
// // // // // // // // // // // // // // // //         localStorage.setItem("storeName", data.store_name);
// // // // // // // // // // // // // // // //         localStorage.setItem("storeId", storeId);
// // // // // // // // // // // // // // // //         localStorage.setItem("userId", data.id);
// // // // // // // // // // // // // // // //         setStoreName(data.store_name);
// // // // // // // // // // // // // // // //         setStoreInContext(storeId);
// // // // // // // // // // // // // // // //         setUserId(data.id);
// // // // // // // // // // // // // // // //         navigate("/Inter");
// // // // // // // // // // // // // // // //       } else {
// // // // // // // // // // // // // // // //         setError("Invalid credentials");
// // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // // // // //       setError("Something went wrong. Please try again.");
// // // // // // // // // // // // // // // //     } finally {
// // // // // // // // // // // // // // // //       setIsLoading(false);
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // //     <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
// // // // // // // // // // // // // // // //       {/* Header */}
// // // // // // // // // // // // // // // //       <header className="fixed w-full top-0 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 z-50">
// // // // // // // // // // // // // // // //         <div className="container mx-auto px-4">
// // // // // // // // // // // // // // // //           <div className="flex justify-between items-center h-16">
// // // // // // // // // // // // // // // //             <div className="flex items-center space-x-8">
// // // // // // // // // // // // // // // //               <Link to="/" className="flex items-center space-x-2">
// // // // // // // // // // // // // // // //                 <Motion className="h-8 w-8 text-blue-500" />
// // // // // // // // // // // // // // // //                 <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
// // // // // // // // // // // // // // // //                   StorePro
// // // // // // // // // // // // // // // //                 </span>
// // // // // // // // // // // // // // // //               </Link>
// // // // // // // // // // // // // // // //               <nav className="hidden md:flex space-x-6">
// // // // // // // // // // // // // // // //                 <Link to="/" className="text-slate-300 hover:text-white transition-colors">
// // // // // // // // // // // // // // // //                   Home
// // // // // // // // // // // // // // // //                 </Link>
// // // // // // // // // // // // // // // //                 <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
// // // // // // // // // // // // // // // //                   About
// // // // // // // // // // // // // // // //                 </Link>
// // // // // // // // // // // // // // // //                 <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">
// // // // // // // // // // // // // // // //                   Contact
// // // // // // // // // // // // // // // //                 </Link>
// // // // // // // // // // // // // // // //               </nav>
// // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // //             <div className="flex items-center space-x-4">
// // // // // // // // // // // // // // // //               <Link
// // // // // // // // // // // // // // // //                 to="/signup"
// // // // // // // // // // // // // // // //                 className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
// // // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // // //                 Sign Up
// // // // // // // // // // // // // // // //               </Link>
// // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // //       </header>

// // // // // // // // // // // // // // // //       {/* Main Content */}
// // // // // // // // // // // // // // // //       <main className="container mx-auto px-4 pt-24 pb-12">
// // // // // // // // // // // // // // // //         <div className="max-w-md mx-auto">
// // // // // // // // // // // // // // // //           <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-slate-700">
// // // // // // // // // // // // // // // //             <div className="text-center mb-8">
// // // // // // // // // // // // // // // //               <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
// // // // // // // // // // // // // // // //               <p className="text-slate-400">Sign in to your account</p>
// // // // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // // // //             {error && (
// // // // // // // // // // // // // // // //               <Alert variant="destructive" className="mb-6 bg-red-500/10 border-red-500/50">
// // // // // // // // // // // // // // // //                 <AlertCircle className="h-4 w-4" />
// // // // // // // // // // // // // // // //                 <AlertDescription>{error}</AlertDescription>
// // // // // // // // // // // // // // // //               </Alert>
// // // // // // // // // // // // // // // //             )}

// // // // // // // // // // // // // // // //             <form onSubmit={handleUserCheck} className="space-y-6">
// // // // // // // // // // // // // // // //               <div className="space-y-2">
// // // // // // // // // // // // // // // //                 <label className="text-sm font-medium text-slate-300">Store ID</label>
// // // // // // // // // // // // // // // //                 <input
// // // // // // // // // // // // // // // //                   type="text"
// // // // // // // // // // // // // // // //                   value={storeId}
// // // // // // // // // // // // // // // //                   onChange={(e) => setStoreId(e.target.value)}
// // // // // // // // // // // // // // // //                   className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-500"
// // // // // // // // // // // // // // // //                   placeholder="Enter your store ID"
// // // // // // // // // // // // // // // //                 />
// // // // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // // // //               <div className="space-y-2">
// // // // // // // // // // // // // // // //                 <label className="text-sm font-medium text-slate-300">User ID</label>
// // // // // // // // // // // // // // // //                 <input
// // // // // // // // // // // // // // // //                   type="text"
// // // // // // // // // // // // // // // //                   value={id}
// // // // // // // // // // // // // // // //                   onChange={(e) => setId(e.target.value)}
// // // // // // // // // // // // // // // //                   className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-500"
// // // // // // // // // // // // // // // //                   placeholder="Enter your user ID"
// // // // // // // // // // // // // // // //                 />
// // // // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // // // //               <div className="space-y-2">
// // // // // // // // // // // // // // // //                 <label className="text-sm font-medium text-slate-300">Password</label>
// // // // // // // // // // // // // // // //                 <input
// // // // // // // // // // // // // // // //                   type="password"
// // // // // // // // // // // // // // // //                   value={password}
// // // // // // // // // // // // // // // //                   onChange={(e) => setPassword(e.target.value)}
// // // // // // // // // // // // // // // //                   className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-500"
// // // // // // // // // // // // // // // //                   placeholder="Enter your password"
// // // // // // // // // // // // // // // //                 />
// // // // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // // // //               <button
// // // // // // // // // // // // // // // //                 type="submit"
// // // // // // // // // // // // // // // //                 disabled={isLoading}
// // // // // // // // // // // // // // // //                 className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
// // // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // // //                 {isLoading ? (
// // // // // // // // // // // // // // // //                   <span className="flex items-center justify-center">
// // // // // // // // // // // // // // // //                     <Motion className="animate-spin h-5 w-5 mr-2" />
// // // // // // // // // // // // // // // //                     Signing in...
// // // // // // // // // // // // // // // //                   </span>
// // // // // // // // // // // // // // // //                 ) : (
// // // // // // // // // // // // // // // //                   "Sign In"
// // // // // // // // // // // // // // // //                 )}
// // // // // // // // // // // // // // // //               </button>
// // // // // // // // // // // // // // // //             </form>

// // // // // // // // // // // // // // // //             <div className="mt-6 text-center">
// // // // // // // // // // // // // // // //               <p className="text-slate-400">
// // // // // // // // // // // // // // // //                 Don't have an account?{" "}
// // // // // // // // // // // // // // // //                 <Link
// // // // // // // // // // // // // // // //                   to="/signup"
// // // // // // // // // // // // // // // //                   className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
// // // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // // //                   Create one now
// // // // // // // // // // // // // // // //                 </Link>
// // // // // // // // // // // // // // // //               </p>
// // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // //       </main>
// // // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // export default Login;


// // // // // // // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // // // // // // import { useNavigate, Link } from "react-router-dom";
// // // // // // // // // // // // // // // import { useStore } from "./StoreContext";
// // // // // // // // // // // // // // // import { motion } from "framer-motion";  // Correct import from framer-motion
// // // // // // // // // // // // // // // import { Alert, AlertDescription } from "./components/ui/Alert";  // Corrected path for Alert
// // // // // // // // // // // // // // // import { AlertCircle } from "lucide-react";  // Correct import for AlertCircle

// // // // // // // // // // // // // // // const Login = () => {
// // // // // // // // // // // // // // //   const [storeId, setStoreId] = useState("");
// // // // // // // // // // // // // // //   const [password, setPassword] = useState("");
// // // // // // // // // // // // // // //   const [id, setId] = useState("");
// // // // // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // // // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // // // // // // //   const { setStoreName, setStoreId: setStoreInContext, setUserId } = useStore();

// // // // // // // // // // // // // // //   const handleUserCheck = async (e) => {
// // // // // // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // // // // // //     setIsLoading(true);

// // // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // // //       const response = await fetch("http://localhost:5001/check_user", {
// // // // // // // // // // // // // // //         method: "POST",
// // // // // // // // // // // // // // //         headers: {
// // // // // // // // // // // // // // //           "Content-Type": "application/json",
// // // // // // // // // // // // // // //         },
// // // // // // // // // // // // // // //         body: JSON.stringify({
// // // // // // // // // // // // // // //           storeId,
// // // // // // // // // // // // // // //           id: String(id),
// // // // // // // // // // // // // // //           password,
// // // // // // // // // // // // // // //         }),
// // // // // // // // // // // // // // //       });

// // // // // // // // // // // // // // //       const data = await response.json();

// // // // // // // // // // // // // // //       if (data.message === "User found!") {
// // // // // // // // // // // // // // //         localStorage.setItem("storeName", data.store_name);
// // // // // // // // // // // // // // //         localStorage.setItem("storeId", storeId);
// // // // // // // // // // // // // // //         localStorage.setItem("userId", data.id);
// // // // // // // // // // // // // // //         setStoreName(data.store_name);
// // // // // // // // // // // // // // //         setStoreInContext(storeId);
// // // // // // // // // // // // // // //         setUserId(data.id);
// // // // // // // // // // // // // // //         navigate("/Inter");
// // // // // // // // // // // // // // //       } else {
// // // // // // // // // // // // // // //         setError("Invalid credentials");
// // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // // // //       setError("Something went wrong. Please try again.");
// // // // // // // // // // // // // // //     } finally {
// // // // // // // // // // // // // // //       setIsLoading(false);
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
// // // // // // // // // // // // // // //       {/* Header */}
// // // // // // // // // // // // // // //       <header className="fixed w-full top-0 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 z-50">
// // // // // // // // // // // // // // //         <div className="container mx-auto px-4">
// // // // // // // // // // // // // // //           <div className="flex justify-between items-center h-16">
// // // // // // // // // // // // // // //             <div className="flex items-center space-x-8">
// // // // // // // // // // // // // // //               <Link to="/" className="flex items-center space-x-2">
// // // // // // // // // // // // // // //                 <motion.div className="h-8 w-8 text-blue-500" />
// // // // // // // // // // // // // // //                 <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
// // // // // // // // // // // // // // //                   StorePro
// // // // // // // // // // // // // // //                 </span>
// // // // // // // // // // // // // // //               </Link>
// // // // // // // // // // // // // // //               <nav className="hidden md:flex space-x-6">
// // // // // // // // // // // // // // //                 <Link to="/" className="text-slate-300 hover:text-white transition-colors">
// // // // // // // // // // // // // // //                   Home
// // // // // // // // // // // // // // //                 </Link>
// // // // // // // // // // // // // // //                 <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
// // // // // // // // // // // // // // //                   About
// // // // // // // // // // // // // // //                 </Link>
// // // // // // // // // // // // // // //                 <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">
// // // // // // // // // // // // // // //                   Contact
// // // // // // // // // // // // // // //                 </Link>
// // // // // // // // // // // // // // //               </nav>
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //             <div className="flex items-center space-x-4">
// // // // // // // // // // // // // // //               <Link
// // // // // // // // // // // // // // //                 to="/signup"
// // // // // // // // // // // // // // //                 className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
// // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // //                 Sign Up
// // // // // // // // // // // // // // //               </Link>
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       </header>

// // // // // // // // // // // // // // //       {/* Main Content */}
// // // // // // // // // // // // // // //       <main className="container mx-auto px-4 pt-24 pb-12">
// // // // // // // // // // // // // // //         <div className="max-w-md mx-auto">
// // // // // // // // // // // // // // //           <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-slate-700">
// // // // // // // // // // // // // // //             <div className="text-center mb-8">
// // // // // // // // // // // // // // //               <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
// // // // // // // // // // // // // // //               <p className="text-slate-400">Sign in to your account</p>
// // // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // // //             {error && (
// // // // // // // // // // // // // // //               <Alert variant="destructive" className="mb-6 bg-red-500/10 border-red-500/50">
// // // // // // // // // // // // // // //                 <AlertCircle className="h-4 w-4" />
// // // // // // // // // // // // // // //                 <AlertDescription>{error}</AlertDescription>
// // // // // // // // // // // // // // //               </Alert>
// // // // // // // // // // // // // // //             )}

// // // // // // // // // // // // // // //             <form onSubmit={handleUserCheck} className="space-y-6">
// // // // // // // // // // // // // // //               <div className="space-y-2">
// // // // // // // // // // // // // // //                 <label className="text-sm font-medium text-slate-300">Store ID</label>
// // // // // // // // // // // // // // //                 <input
// // // // // // // // // // // // // // //                   type="text"
// // // // // // // // // // // // // // //                   value={storeId}
// // // // // // // // // // // // // // //                   onChange={(e) => setStoreId(e.target.value)}
// // // // // // // // // // // // // // //                   className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-500"
// // // // // // // // // // // // // // //                   placeholder="Enter your store ID"
// // // // // // // // // // // // // // //                 />
// // // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // // //               <div className="space-y-2">
// // // // // // // // // // // // // // //                 <label className="text-sm font-medium text-slate-300">User ID</label>
// // // // // // // // // // // // // // //                 <input
// // // // // // // // // // // // // // //                   type="text"
// // // // // // // // // // // // // // //                   value={id}
// // // // // // // // // // // // // // //                   onChange={(e) => setId(e.target.value)}
// // // // // // // // // // // // // // //                   className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-500"
// // // // // // // // // // // // // // //                   placeholder="Enter your user ID"
// // // // // // // // // // // // // // //                 />
// // // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // // //               <div className="space-y-2">
// // // // // // // // // // // // // // //                 <label className="text-sm font-medium text-slate-300">Password</label>
// // // // // // // // // // // // // // //                 <input
// // // // // // // // // // // // // // //                   type="password"
// // // // // // // // // // // // // // //                   value={password}
// // // // // // // // // // // // // // //                   onChange={(e) => setPassword(e.target.value)}
// // // // // // // // // // // // // // //                   className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-500"
// // // // // // // // // // // // // // //                   placeholder="Enter your password"
// // // // // // // // // // // // // // //                 />
// // // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // // //               <button
// // // // // // // // // // // // // // //                 type="submit"
// // // // // // // // // // // // // // //                 disabled={isLoading}
// // // // // // // // // // // // // // //                 className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
// // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // //                 {isLoading ? (
// // // // // // // // // // // // // // //                   <span className="flex items-center justify-center">
// // // // // // // // // // // // // // //                     <motion.div className="animate-spin h-5 w-5 mr-2" />
// // // // // // // // // // // // // // //                     Signing in...
// // // // // // // // // // // // // // //                   </span>
// // // // // // // // // // // // // // //                 ) : (
// // // // // // // // // // // // // // //                   "Sign In"
// // // // // // // // // // // // // // //                 )}
// // // // // // // // // // // // // // //               </button>
// // // // // // // // // // // // // // //             </form>

// // // // // // // // // // // // // // //             <div className="mt-6 text-center">
// // // // // // // // // // // // // // //               <p className="text-slate-400">
// // // // // // // // // // // // // // //                 Don't have an account?{" "}
// // // // // // // // // // // // // // //                 <Link
// // // // // // // // // // // // // // //                   to="/signup"
// // // // // // // // // // // // // // //                   className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
// // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // //                   Create one now
// // // // // // // // // // // // // // //                 </Link>
// // // // // // // // // // // // // // //               </p>
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       </main>
// // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // export default Login;



// // // // // // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // // // // // import { useNavigate, Link } from "react-router-dom";
// // // // // // // // // // // // // // import { useStore } from "./StoreContext";
// // // // // // // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // // // // // // import { Alert, AlertDescription } from "./components/ui/Alert";
// // // // // // // // // // // // // // import { AlertCircle } from "lucide-react";
// // // // // // // // // // // // // // import loginImage from './images/login.png';
// // // // // // // // // // // // // // import logo from './images/logo.jpg';

// // // // // // // // // // // // // // const Login = () => {
// // // // // // // // // // // // // //   const [storeId, setStoreId] = useState("");
// // // // // // // // // // // // // //   const [password, setPassword] = useState("");
// // // // // // // // // // // // // //   const [id, setId] = useState("");
// // // // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // // // // // //   const { setStoreName, setStoreId: setStoreInContext, setUserId } = useStore();

// // // // // // // // // // // // // //   const handleUserCheck = async (e) => {
// // // // // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // // // // //     setIsLoading(true);

// // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // //       const response = await fetch("http://localhost:5001/check_user", {
// // // // // // // // // // // // // //         method: "POST",
// // // // // // // // // // // // // //         headers: {
// // // // // // // // // // // // // //           "Content-Type": "application/json",
// // // // // // // // // // // // // //         },
// // // // // // // // // // // // // //         body: JSON.stringify({
// // // // // // // // // // // // // //           storeId,
// // // // // // // // // // // // // //           id: String(id),
// // // // // // // // // // // // // //           password,
// // // // // // // // // // // // // //         }),
// // // // // // // // // // // // // //       });

// // // // // // // // // // // // // //       const data = await response.json();

// // // // // // // // // // // // // //       if (data.message === "User found!") {
// // // // // // // // // // // // // //         localStorage.setItem("storeName", data.store_name);
// // // // // // // // // // // // // //         localStorage.setItem("storeId", storeId);
// // // // // // // // // // // // // //         localStorage.setItem("userId", data.id);
// // // // // // // // // // // // // //         setStoreName(data.store_name);
// // // // // // // // // // // // // //         setStoreInContext(storeId);
// // // // // // // // // // // // // //         setUserId(data.id);
// // // // // // // // // // // // // //         navigate("/Inter");
// // // // // // // // // // // // // //       } else {
// // // // // // // // // // // // // //         setError("Invalid credentials");
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // // //       setError("Something went wrong. Please try again.");
// // // // // // // // // // // // // //     } finally {
// // // // // // // // // // // // // //       setIsLoading(false);
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   // Animation variants
// // // // // // // // // // // // // //   const containerVariants = {
// // // // // // // // // // // // // //     hidden: { opacity: 0, y: 20 },
// // // // // // // // // // // // // //     visible: { 
// // // // // // // // // // // // // //       opacity: 1, 
// // // // // // // // // // // // // //       y: 0,
// // // // // // // // // // // // // //       transition: { 
// // // // // // // // // // // // // //         duration: 0.6,
// // // // // // // // // // // // // //         ease: "easeOut"
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const inputVariants = {
// // // // // // // // // // // // // //     focus: { scale: 1.02, transition: { duration: 0.2 } }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
// // // // // // // // // // // // // //       {/* Original Header */}
// // // // // // // // // // // // // // //       <header className="flex justify-between items-center p-3 bg-[#0d1122]">
// // // // // // // // // // // // // // //         <div className="flex items-center gap-5">
// // // // // // // // // // // // // // //           <div className="w-12 h-12">
// // // // // // // // // // // // // // //             <Link to="/AboutPage">
// // // // // // // // // // // // // // //               <img src={logo} alt="Logo" className="w-full h-full" />
// // // // // // // // // // // // // // //             </Link>
// // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // //           <nav className="flex gap-4">
// // // // // // // // // // // // // // //             <Link to="/" className="text-white text-base no-underline hover:text-[#ff6347]">Home</Link>
// // // // // // // // // // // // // // //             <Link className="text-blue-500 text-base no-underline">About</Link>
// // // // // // // // // // // // // // //             <Link to="/ContactUs" className="text-white text-base no-underline hover:text-[#ff6347]">Contact</Link>
// // // // // // // // // // // // // // //           </nav>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //         <div className="flex gap-3">
// // // // // // // // // // // // // // //           <Link to="/SignUp">
// // // // // // // // // // // // // // //             <button className="bg-[#1c4b82] text-white px-4 py-2 rounded-md text-sm hover:bg-[#337ab7] transition-all">
// // // // // // // // // // // // // // //               SignUp
// // // // // // // // // // // // // // //             </button>
// // // // // // // // // // // // // // //           </Link>
// // // // // // // // // // // // // // //           <Link to="/reviews">
// // // // // // // // // // // // // // //             <button className="bg-[#1c4b82] text-white px-4 py-2 rounded-md text-sm hover:bg-[#337ab7] transition-all">
// // // // // // // // // // // // // // //               Leave a Review
// // // // // // // // // // // // // // //             </button>
// // // // // // // // // // // // // // //           </Link>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       </header>

// // // // // // // // // // // // // // //       {/* Main Content */}
// // // // // // // // // // // // // // //       <div className="flex min-h-[calc(100vh-64px)]">
// // // // // // // // // // // // // // //         {/* Left Section - Login Image */}
// // // // // // // // // // // // // // //         <motion.div
// // // // // // // // // // // // // // //           initial={{ opacity: 0, x: -50 }}
// // // // // // // // // // // // // // //           animate={{ opacity: 1, x: 0 }}
// // // // // // // // // // // // // // //           transition={{ duration: 0.8 }}
// // // // // // // // // // // // // // //           className="hidden lg:block w-1/2 bg-cover bg-center"
// // // // // // // // // // // // // // //           style={{ 
// // // // // // // // // // // // // // //             backgroundImage: `url(${loginImage})`,
// // // // // // // // // // // // // // //             boxShadow: 'inset -10px 0 30px -10px rgba(0,0,0,0.3)'
// // // // // // // // // // // // // // //           }}
// // // // // // // // // // // // // // //         />

// // // // // // // // // // // // // // //         {/* Right Section - Login Form */}
// // // // // // // // // // // // // // //         <motion.div
// // // // // // // // // // // // // // //           initial="hidden"
// // // // // // // // // // // // // // //           animate="visible"
// // // // // // // // // // // // // // //           variants={containerVariants}
// // // // // // // // // // // // // // //           className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white"
// // // // // // // // // // // // // // //         >
// // // // // // // // // // // // // // //           <div className="w-full max-w-md">
// // // // // // // // // // // // // // //             <motion.div
// // // // // // // // // // // // // // //               initial={{ opacity: 0, y: -20 }}
// // // // // // // // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // // // //               transition={{ delay: 0.3 }}
// // // // // // // // // // // // // // //               className="text-center mb-8"
// // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // //               <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
// // // // // // // // // // // // // // //               <p className="text-gray-600">Please sign in to your account</p>
// // // // // // // // // // // // // // //             </motion.div>

// // // // // // // // // // // // // // //             {error && (
// // // // // // // // // // // // // // //               <motion.div
// // // // // // // // // // // // // // //                 initial={{ opacity: 0, y: -10 }}
// // // // // // // // // // // // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // // // //                 className="mb-6"
// // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // //                 <Alert variant="destructive" className="bg-red-50 border-red-200">
// // // // // // // // // // // // // // //                   <AlertCircle className="h-4 w-4 text-red-600" />
// // // // // // // // // // // // // // //                   <AlertDescription className="text-red-600">{error}</AlertDescription>
// // // // // // // // // // // // // // //                 </Alert>
// // // // // // // // // // // // // // //               </motion.div>
// // // // // // // // // // // // // // //             )}

// // // // // // // // // // // // // // //             <form onSubmit={handleUserCheck} className="space-y-6">
// // // // // // // // // // // // // // //               <motion.div
// // // // // // // // // // // // // // //                 variants={inputVariants}
// // // // // // // // // // // // // // //                 whileFocus="focus"
// // // // // // // // // // // // // // //                 className="space-y-2"
// // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // //                 <label className="text-sm font-medium text-gray-700">Store ID</label>
// // // // // // // // // // // // // // //                 <input
// // // // // // // // // // // // // // //                   type="text"
// // // // // // // // // // // // // // //                   value={storeId}
// // // // // // // // // // // // // // //                   onChange={(e) => setStoreId(e.target.value)}
// // // // // // // // // // // // // // //                   className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
// // // // // // // // // // // // // // //                   placeholder="Enter your store ID"
// // // // // // // // // // // // // // //                 />
// // // // // // // // // // // // // // //               </motion.div>

// // // // // // // // // // // // // // //               <motion.div
// // // // // // // // // // // // // // //                 variants={inputVariants}
// // // // // // // // // // // // // // //                 whileFocus="focus"
// // // // // // // // // // // // // // //                 className="space-y-2"
// // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // //                 <label className="text-sm font-medium text-gray-700">User ID</label>
// // // // // // // // // // // // // // //                 <input
// // // // // // // // // // // // // // //                   type="text"
// // // // // // // // // // // // // // //                   value={id}
// // // // // // // // // // // // // // //                   onChange={(e) => setId(e.target.value)}
// // // // // // // // // // // // // // //                   className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
// // // // // // // // // // // // // // //                   placeholder="Enter your user ID"
// // // // // // // // // // // // // // //                 />
// // // // // // // // // // // // // // //               </motion.div>

// // // // // // // // // // // // // // //               <motion.div
// // // // // // // // // // // // // // //                 variants={inputVariants}
// // // // // // // // // // // // // // //                 whileFocus="focus"
// // // // // // // // // // // // // // //                 className="space-y-2"
// // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // //                 <label className="text-sm font-medium text-gray-700">Password</label>
// // // // // // // // // // // // // // //                 <input
// // // // // // // // // // // // // // //                   type="password"
// // // // // // // // // // // // // // //                   value={password}
// // // // // // // // // // // // // // //                   onChange={(e) => setPassword(e.target.value)}
// // // // // // // // // // // // // // //                   className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
// // // // // // // // // // // // // // //                   placeholder="Enter your password"
// // // // // // // // // // // // // // //                 />
// // // // // // // // // // // // // // //               </motion.div>

// // // // // // // // // // // // // // //               <motion.button
// // // // // // // // // // // // // // //                 type="submit"
// // // // // // // // // // // // // // //                 disabled={isLoading}
// // // // // // // // // // // // // // //                 whileHover={{ scale: 1.02 }}
// // // // // // // // // // // // // // //                 whileTap={{ scale: 0.98 }}
// // // // // // // // // // // // // // //                 className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium transition-all disabled:opacity-70 disabled:cursor-not-allowed"
// // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // //                 {isLoading ? (
// // // // // // // // // // // // // // //                   <span className="flex items-center justify-center">
// // // // // // // // // // // // // // //                     <motion.div
// // // // // // // // // // // // // // //                       animate={{ rotate: 360 }}
// // // // // // // // // // // // // // //                       transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
// // // // // // // // // // // // // // //                       className="h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"
// // // // // // // // // // // // // // //                     />
// // // // // // // // // // // // // // //                     Signing in...
// // // // // // // // // // // // // // //                   </span>
// // // // // // // // // // // // // // //                 ) : (
// // // // // // // // // // // // // // //                   "Sign In"
// // // // // // // // // // // // // // //                 )}
// // // // // // // // // // // // // // //               </motion.button>
// // // // // // // // // // // // // // //             </form>

// // // // // // // // // // // // // // //             <motion.div
// // // // // // // // // // // // // // //               initial={{ opacity: 0 }}
// // // // // // // // // // // // // // //               animate={{ opacity: 1 }}
// // // // // // // // // // // // // // //               transition={{ delay: 0.5 }}
// // // // // // // // // // // // // // //               className="mt-6 text-center"
// // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // //               <p className="text-gray-600">
// // // // // // // // // // // // // // //                 Don't have an account?{" "}
// // // // // // // // // // // // // // //                 <Link
// // // // // // // // // // // // // // //                   to="/signup"
// // // // // // // // // // // // // // //                   className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
// // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // //                   Create one now
// // // // // // // // // // // // // // //                 </Link>
// // // // // // // // // // // // // // //               </p>
// // // // // // // // // // // // // // //             </motion.div>
// // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // //         </motion.div>
// // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // export default Login;



// // // // // // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // // // // // import { useNavigate, Link } from "react-router-dom";
// // // // // // // // // // // // // // import { useStore } from "./StoreContext";
// // // // // // // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // // // // // // import { Alert, AlertDescription } from "./components/ui/Alert";
// // // // // // // // // // // // // // import { AlertCircle } from "lucide-react";
// // // // // // // // // // // // // // import loginImage from './images/login.png';
// // // // // // // // // // // // // // import logo from './images/logo.jpg';


// // // // // // // // // // // // // // const Login = () => {
// // // // // // // // // // // // // //   const [storeId, setStoreId] = useState("");
// // // // // // // // // // // // // //   const [password, setPassword] = useState("");
// // // // // // // // // // // // // //   const [id, setId] = useState("");
// // // // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // // // // // //   const { setStoreName, setStoreId: setStoreInContext, setUserId } = useStore();

// // // // // // // // // // // // // //   const handleUserCheck = async (e) => {
// // // // // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // // // // //     setIsLoading(true);

// // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // //       const response = await fetch("http://localhost:5001/check_user", {
// // // // // // // // // // // // // //         method: "POST",
// // // // // // // // // // // // // //         headers: {
// // // // // // // // // // // // // //           "Content-Type": "application/json",
// // // // // // // // // // // // // //         },
// // // // // // // // // // // // // //         body: JSON.stringify({
// // // // // // // // // // // // // //           storeId,
// // // // // // // // // // // // // //           id: String(id),
// // // // // // // // // // // // // //           password,
// // // // // // // // // // // // // //         }),
// // // // // // // // // // // // // //       });

// // // // // // // // // // // // // //       const data = await response.json();

// // // // // // // // // // // // // //       if (data.message === "User found!") {
// // // // // // // // // // // // // //         localStorage.setItem("storeName", data.store_name);
// // // // // // // // // // // // // //         localStorage.setItem("storeId", storeId);
// // // // // // // // // // // // // //         localStorage.setItem("userId", data.id);
// // // // // // // // // // // // // //         setStoreName(data.store_name);
// // // // // // // // // // // // // //         setStoreInContext(storeId);
// // // // // // // // // // // // // //         setUserId(data.id);
// // // // // // // // // // // // // //         navigate("/Inter");
// // // // // // // // // // // // // //       } else {
// // // // // // // // // // // // // //         setError("Invalid credentials");
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // // //       setError("Something went wrong. Please try again.");
// // // // // // // // // // // // // //     } finally {
// // // // // // // // // // // // // //       setIsLoading(false);
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   // Animation variants
// // // // // // // // // // // // // //   const containerVariants = {
// // // // // // // // // // // // // //     hidden: { opacity: 0, y: 20 },
// // // // // // // // // // // // // //     visible: { 
// // // // // // // // // // // // // //       opacity: 1, 
// // // // // // // // // // // // // //       y: 0,
// // // // // // // // // // // // // //       transition: { 
// // // // // // // // // // // // // //         duration: 0.6,
// // // // // // // // // // // // // //         ease: "easeOut"
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const inputVariants = {
// // // // // // // // // // // // // //     focus: { scale: 1.02, transition: { duration: 0.2 } }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
// // // // // // // // // // // // // //       {/* Original Header */}
// // // // // // // // // // // // // //       {/* <header className="flex justify-between items-center p-3 bg-[#0d1122]">
// // // // // // // // // // // // // //         <div className="flex items-center gap-5">
// // // // // // // // // // // // // //           <div className="w-12 h-12">
// // // // // // // // // // // // // //             <Link to="/AboutPage">
// // // // // // // // // // // // // //               <img src={logo} alt="Logo" className="w-full h-full" />
// // // // // // // // // // // // // //             </Link>
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //           <nav className="flex gap-4">
// // // // // // // // // // // // // //             <Link to="/" className="text-white text-base no-underline hover:text-[#ff6347]">Home</Link>
// // // // // // // // // // // // // //             <Link className="text-blue-500 text-base no-underline">About</Link>
// // // // // // // // // // // // // //             <Link to="/ContactUs" className="text-white text-base no-underline hover:text-[#ff6347]">Contact</Link>
// // // // // // // // // // // // // //           </nav>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //         <div className="flex gap-3">
// // // // // // // // // // // // // //           <Link to="/SignUp">
// // // // // // // // // // // // // //             <button className="bg-[#1c4b82] text-white px-4 py-2 rounded-md text-sm hover:bg-[#337ab7] transition-all">
// // // // // // // // // // // // // //               SignUp
// // // // // // // // // // // // // //             </button>
// // // // // // // // // // // // // //           </Link>
// // // // // // // // // // // // // //           <Link to="/reviews">
// // // // // // // // // // // // // //             <button className="bg-[#1c4b82] text-white px-4 py-2 rounded-md text-sm hover:bg-[#337ab7] transition-all">
// // // // // // // // // // // // // //               Leave a Review
// // // // // // // // // // // // // //             </button>
// // // // // // // // // // // // // //           </Link>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </header> */}

// // // // // // // // // // // // // //       {/* Main Content */}

// // // // // // // // // // // // //       import React, { useState } from "react";
// // // // // // // // // // // // // import { useNavigate, Link } from "react-router-dom";
// // // // // // // // // // // // // import { useStore } from "./StoreContext";
// // // // // // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // // // // // import { Alert, AlertDescription } from "./components/ui/Alert";
// // // // // // // // // // // // // import { AlertCircle } from "lucide-react";
// // // // // // // // // // // // // import loginImage from './images/login.png';
// // // // // // // // // // // // // import logo from './images/logo.jpg';


// // // // // // // // // // // // // const Login = () => {
// // // // // // // // // // // // //   const [storeId, setStoreId] = useState("");
// // // // // // // // // // // // //   const [password, setPassword] = useState("");
// // // // // // // // // // // // //   const [id, setId] = useState("");
// // // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // // // // //   const { setStoreName, setStoreId: setStoreInContext, setUserId } = useStore();

// // // // // // // // // // // // //   const handleUserCheck = async (e) => {
// // // // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // // // //     setIsLoading(true);

// // // // // // // // // // // // //     try {
// // // // // // // // // // // // //       const response = await fetch("http://localhost:5001/check_user", {
// // // // // // // // // // // // //         method: "POST",
// // // // // // // // // // // // //         headers: {
// // // // // // // // // // // // //           "Content-Type": "application/json",
// // // // // // // // // // // // //         },
// // // // // // // // // // // // //         body: JSON.stringify({
// // // // // // // // // // // // //           storeId,
// // // // // // // // // // // // //           id: String(id),
// // // // // // // // // // // // //           password,
// // // // // // // // // // // // //         }),
// // // // // // // // // // // // //       });

// // // // // // // // // // // // //       const data = await response.json();

// // // // // // // // // // // // //       if (data.message === "User found!") {
// // // // // // // // // // // // //         localStorage.setItem("storeName", data.store_name);
// // // // // // // // // // // // //         localStorage.setItem("storeId", storeId);
// // // // // // // // // // // // //         localStorage.setItem("userId", data.id);
// // // // // // // // // // // // //         setStoreName(data.store_name);
// // // // // // // // // // // // //         setStoreInContext(storeId);
// // // // // // // // // // // // //         setUserId(data.id);
// // // // // // // // // // // // //         navigate("/Inter");
// // // // // // // // // // // // //       } else {
// // // // // // // // // // // // //         setError("Invalid credentials");
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // //       setError("Something went wrong. Please try again.");
// // // // // // // // // // // // //     } finally {
// // // // // // // // // // // // //       setIsLoading(false);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Animation variants
// // // // // // // // // // // // //   const containerVariants = {
// // // // // // // // // // // // //     hidden: { opacity: 0, y: 20 },
// // // // // // // // // // // // //     visible: { 
// // // // // // // // // // // // //       opacity: 1, 
// // // // // // // // // // // // //       y: 0,
// // // // // // // // // // // // //       transition: { 
// // // // // // // // // // // // //         duration: 0.6,
// // // // // // // // // // // // //         ease: "easeOut"
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const inputVariants = {
// // // // // // // // // // // // //     focus: { scale: 1.02, transition: { duration: 0.2 } }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
// // // // // // // // // // // // //           <header className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md animate-fadeIn">
// // // // // // // // // // // // //             <div className="flex items-center gap-5">
// // // // // // // // // // // // //               <div className="w-12 h-12 transform hover:scale-105 transition-transform">
// // // // // // // // // // // // //                 <Link to="/AboutPage">
// // // // // // // // // // // // //                   <img src={logo} alt="Logo" className="w-full h-full" />
// // // // // // // // // // // // //                 </Link>
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //               <nav className="flex gap-4">
// // // // // // // // // // // // //                 <Link to="/" className=" text-base no-underline hover:text-blue-800 transition-colors">Home</Link>
// // // // // // // // // // // // //                 <Link to="/AboutPage" className="text-gray-700 text-base no-underline hover:text-blue-600 transition-colors">About</Link>
// // // // // // // // // // // // //                 <Link to="/ContactUs" className="text-gray-700 text-base no-underline hover:text-blue-600 transition-colors">Contact</Link>
// // // // // // // // // // // // //               </nav>
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //             <div className="flex gap-3">
// // // // // // // // // // // // //               {['SignUp', 'StoreReview'].map((text, index) => (
// // // // // // // // // // // // //                 <Link key={index} to={`/${text.replace(/\s+/g, '')}`}>
// // // // // // // // // // // // //                   <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm 
// // // // // // // // // // // // //                     hover:bg-blue-600 transform hover:-translate-y-0.5 transition-all duration-300 
// // // // // // // // // // // // //                     shadow-md hover:shadow-lg">
// // // // // // // // // // // // //                     {text}
// // // // // // // // // // // // //                   </button>
// // // // // // // // // // // // //                 </Link>
// // // // // // // // // // // // //               ))}
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           </header>
// // // // // // // // // // // // //       <div className="flex min-h-[calc(100vh-64px)]">
// // // // // // // // // // // // //         {/* Left Section - Login Image */}
// // // // // // // // // // // // //         <motion.div
// // // // // // // // // // // // //           initial={{ opacity: 0, x: -50 }}
// // // // // // // // // // // // //           animate={{ opacity: 1, x: 0 }}
// // // // // // // // // // // // //           transition={{ duration: 0.8 }}
// // // // // // // // // // // // //           className="hidden lg:block w-1/2 bg-cover bg-center"
// // // // // // // // // // // // //           style={{ 
// // // // // // // // // // // // //             backgroundImage: `url(${loginImage})`,
// // // // // // // // // // // // //             boxShadow: 'inset -10px 0 30px -10px rgba(0,0,0,0.3)'
// // // // // // // // // // // // //           }}
// // // // // // // // // // // // //         />

// // // // // // // // // // // // //         {/* Right Section - Login Form */}
// // // // // // // // // // // // //         <motion.div
// // // // // // // // // // // // //           initial="hidden"
// // // // // // // // // // // // //           animate="visible"
// // // // // // // // // // // // //           variants={containerVariants}
// // // // // // // // // // // // //           className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white"
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           <div className="w-full max-w-md">
// // // // // // // // // // // // //             <motion.div
// // // // // // // // // // // // //               initial={{ opacity: 0, y: -20 }}
// // // // // // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // //               transition={{ delay: 0.3 }}
// // // // // // // // // // // // //               className="text-center mb-8"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
// // // // // // // // // // // // //               <p className="text-gray-600">Please sign in to your account</p>
// // // // // // // // // // // // //             </motion.div>

// // // // // // // // // // // // //             {error && (
// // // // // // // // // // // // //               <motion.div
// // // // // // // // // // // // //                 initial={{ opacity: 0, y: -10 }}
// // // // // // // // // // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // //                 className="mb-6"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 <Alert variant="destructive" className="bg-red-50 border-red-200">
// // // // // // // // // // // // //                   <AlertCircle className="h-4 w-4 text-red-600" />
// // // // // // // // // // // // //                   <AlertDescription className="text-red-600">{error}</AlertDescription>
// // // // // // // // // // // // //                 </Alert>
// // // // // // // // // // // // //               </motion.div>
// // // // // // // // // // // // //             )}

// // // // // // // // // // // // //             <form onSubmit={handleUserCheck} className="space-y-6">
// // // // // // // // // // // // //               <motion.div
// // // // // // // // // // // // //                 variants={inputVariants}
// // // // // // // // // // // // //                 whileFocus="focus"
// // // // // // // // // // // // //                 className="space-y-2"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 <label className="text-sm font-medium text-gray-700">Store ID</label>
// // // // // // // // // // // // //                 <input
// // // // // // // // // // // // //                   type="text"
// // // // // // // // // // // // //                   value={storeId}
// // // // // // // // // // // // //                   onChange={(e) => setStoreId(e.target.value)}
// // // // // // // // // // // // //                   className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
// // // // // // // // // // // // //                   placeholder="Enter your store ID"
// // // // // // // // // // // // //                 />
// // // // // // // // // // // // //               </motion.div>

// // // // // // // // // // // // //               <motion.div
// // // // // // // // // // // // //                 variants={inputVariants}
// // // // // // // // // // // // //                 whileFocus="focus"
// // // // // // // // // // // // //                 className="space-y-2"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 <label className="text-sm font-medium text-gray-700">User ID</label>
// // // // // // // // // // // // //                 <input
// // // // // // // // // // // // //                   type="text"
// // // // // // // // // // // // //                   value={id}
// // // // // // // // // // // // //                   onChange={(e) => setId(e.target.value)}
// // // // // // // // // // // // //                   className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
// // // // // // // // // // // // //                   placeholder="Enter your user ID"
// // // // // // // // // // // // //                 />
// // // // // // // // // // // // //               </motion.div>

// // // // // // // // // // // // //               <motion.div
// // // // // // // // // // // // //                 variants={inputVariants}
// // // // // // // // // // // // //                 whileFocus="focus"
// // // // // // // // // // // // //                 className="space-y-2"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 <label className="text-sm font-medium text-gray-700">Password</label>
// // // // // // // // // // // // //                 <input
// // // // // // // // // // // // //                   type="password"
// // // // // // // // // // // // //                   value={password}
// // // // // // // // // // // // //                   onChange={(e) => setPassword(e.target.value)}
// // // // // // // // // // // // //                   className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
// // // // // // // // // // // // //                   placeholder="Enter your password"
// // // // // // // // // // // // //                 />
// // // // // // // // // // // // //               </motion.div>

// // // // // // // // // // // // //               <motion.button
// // // // // // // // // // // // //                 type="submit"
// // // // // // // // // // // // //                 disabled={isLoading}
// // // // // // // // // // // // //                 whileHover={{ scale: 1.02 }}
// // // // // // // // // // // // //                 whileTap={{ scale: 0.98 }}
// // // // // // // // // // // // //                 className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium transition-all disabled:opacity-70 disabled:cursor-not-allowed"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 {isLoading ? (
// // // // // // // // // // // // //                   <span className="flex items-center justify-center">
// // // // // // // // // // // // //                     <motion.div
// // // // // // // // // // // // //                       animate={{ rotate: 360 }}
// // // // // // // // // // // // //                       transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
// // // // // // // // // // // // //                       className="h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"
// // // // // // // // // // // // //                     />
// // // // // // // // // // // // //                     Signing in...
// // // // // // // // // // // // //                   </span>
// // // // // // // // // // // // //                 ) : (
// // // // // // // // // // // // //                   "Sign In"
// // // // // // // // // // // // //                 )}
// // // // // // // // // // // // //               </motion.button>
// // // // // // // // // // // // //             </form>

// // // // // // // // // // // // //             <motion.div
// // // // // // // // // // // // //               initial={{ opacity: 0 }}
// // // // // // // // // // // // //               animate={{ opacity: 1 }}
// // // // // // // // // // // // //               transition={{ delay: 0.5 }}
// // // // // // // // // // // // //               className="mt-6 text-center"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               <p className="text-gray-600">
// // // // // // // // // // // // //                 Don't have an account?{" "}
// // // // // // // // // // // // //                 <Link
// // // // // // // // // // // // //                   to="/signup"
// // // // // // // // // // // // //                   className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   Create one now
// // // // // // // // // // // // //                 </Link>
// // // // // // // // // // // // //               </p>
// // // // // // // // // // // // //             </motion.div>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </motion.div>
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default Login;



// // // // // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // // // // import { useNavigate, Link } from "react-router-dom";
// // // // // // // // // // // // // import { useStore } from "./StoreContext";
// // // // // // // // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // // // // // // // import { Alert, AlertDescription } from "./components/ui/Alert";
// // // // // // // // // // // // // import { AlertCircle } from "lucide-react";
// // // // // // // // // // // // // import loginImage from './images/login.png';
// // // // // // // // // // // // // import logo from './images/logo.jpg';

// // // // // // // // // // // // // const Login = () => {
// // // // // // // // // // // // //   const [storeId, setStoreId] = useState("");
// // // // // // // // // // // // //   const [password, setPassword] = useState("");
// // // // // // // // // // // // //   const [id, setId] = useState("");
// // // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // // // // // // // // //   const [activeField, setActiveField] = useState(null);
// // // // // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // // // // //   const { setStoreName, setStoreId: setStoreInContext, setUserId } = useStore();

// // // // // // // // // // // // //   // Animation for background gradient
// // // // // // // // // // // // //   const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
  
// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const handleMouseMove = (e) => {
// // // // // // // // // // // // //       const x = e.clientX / window.innerWidth;
// // // // // // // // // // // // //       const y = e.clientY / window.innerHeight;
// // // // // // // // // // // // //       setGradientPosition({ x, y });
// // // // // // // // // // // // //     };
    
// // // // // // // // // // // // //     window.addEventListener('mousemove', handleMouseMove);
// // // // // // // // // // // // //     return () => {
// // // // // // // // // // // // //       window.removeEventListener('mousemove', handleMouseMove);
// // // // // // // // // // // // //     };
// // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // //   const handleUserCheck = async (e) => {
// // // // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // // // //     setIsLoading(true);

// // // // // // // // // // // // //     try {
// // // // // // // // // // // // //       const response = await fetch("http://localhost:5001/check_user", {
// // // // // // // // // // // // //         method: "POST",
// // // // // // // // // // // // //         headers: {
// // // // // // // // // // // // //           "Content-Type": "application/json",
// // // // // // // // // // // // //         },
// // // // // // // // // // // // //         body: JSON.stringify({
// // // // // // // // // // // // //           storeId,
// // // // // // // // // // // // //           id: String(id),
// // // // // // // // // // // // //           password,
// // // // // // // // // // // // //         }),
// // // // // // // // // // // // //       });

// // // // // // // // // // // // //       const data = await response.json();

// // // // // // // // // // // // //       if (data.message === "User found!") {
// // // // // // // // // // // // //         localStorage.setItem("storeName", data.store_name);
// // // // // // // // // // // // //         localStorage.setItem("storeId", storeId);
// // // // // // // // // // // // //         localStorage.setItem("userId", data.id);
// // // // // // // // // // // // //         setStoreName(data.store_name);
// // // // // // // // // // // // //         setStoreInContext(storeId);
// // // // // // // // // // // // //         setUserId(data.id);
// // // // // // // // // // // // //         navigate("/Inter");
// // // // // // // // // // // // //       } else {
// // // // // // // // // // // // //         setError("Invalid credentials");
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // //       setError("Something went wrong. Please try again.");
// // // // // // // // // // // // //     } finally {
// // // // // // // // // // // // //       setIsLoading(false);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Animation variants
// // // // // // // // // // // // //   const containerVariants = {
// // // // // // // // // // // // //     hidden: { opacity: 0, y: 20 },
// // // // // // // // // // // // //     visible: { 
// // // // // // // // // // // // //       opacity: 1, 
// // // // // // // // // // // // //       y: 0,
// // // // // // // // // // // // //       transition: { 
// // // // // // // // // // // // //         duration: 0.6,
// // // // // // // // // // // // //         ease: "easeOut",
// // // // // // // // // // // // //         staggerChildren: 0.1,
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const itemVariants = {
// // // // // // // // // // // // //     hidden: { opacity: 0, y: 20 },
// // // // // // // // // // // // //     visible: { 
// // // // // // // // // // // // //       opacity: 1, 
// // // // // // // // // // // // //       y: 0,
// // // // // // // // // // // // //       transition: { duration: 0.4 }
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div 
// // // // // // // // // // // // //       className="min-h-screen overflow-hidden"
// // // // // // // // // // // // //       style={{
// // // // // // // // // // // // //         background: `linear-gradient(${120 + gradientPosition.x * 40}deg, rgba(239, 246, 255, 0.9) 0%, rgba(219, 234, 254, 0.9) 35%, rgba(196, 181, 253, 0.5) 100%)`,
// // // // // // // // // // // // //         backgroundSize: '400% 400%',
// // // // // // // // // // // // //         transition: 'background-position 0.5s ease'
// // // // // // // // // // // // //       }}
// // // // // // // // // // // // //     >
// // // // // // // // // // // // //       {/* Keeping your navigation bar constant */}
// // // // // // // // // // // // //       <header className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md z-10 relative">
// // // // // // // // // // // // //         <div className="flex items-center gap-5">
// // // // // // // // // // // // //           <div className="w-12 h-12 transform hover:scale-105 transition-transform">
// // // // // // // // // // // // //             <Link to="/AboutPage">
// // // // // // // // // // // // //               <img src={logo} alt="Logo" className="w-full h-full" />
// // // // // // // // // // // // //             </Link>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //           <nav className="flex gap-4">
// // // // // // // // // // // // //             <Link to="/" className="text-base no-underline hover:text-blue-800 transition-colors">Home</Link>
// // // // // // // // // // // // //             <Link to="/AboutPage" className="text-gray-700 text-base no-underline hover:text-blue-600 transition-colors">About</Link>
// // // // // // // // // // // // //             <Link to="/ContactUs" className="text-gray-700 text-base no-underline hover:text-blue-600 transition-colors">Contact</Link>
// // // // // // // // // // // // //           </nav>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //         <div className="flex gap-3">
// // // // // // // // // // // // //           {['SignUp', 'StoreReview'].map((text, index) => (
// // // // // // // // // // // // //             <Link key={index} to={`/${text.replace(/\s+/g, '')}`}>
// // // // // // // // // // // // //               <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm 
// // // // // // // // // // // // //                 hover:bg-blue-600 transform hover:-translate-y-0.5 transition-all duration-300 
// // // // // // // // // // // // //                 shadow-md hover:shadow-lg">
// // // // // // // // // // // // //                 {text}
// // // // // // // // // // // // //               </button>
// // // // // // // // // // // // //             </Link>
// // // // // // // // // // // // //           ))}
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </header>

// // // // // // // // // // // // //       {/* Decorative elements */}
// // // // // // // // // // // // //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // // // // // // // // // // // //         <motion.div 
// // // // // // // // // // // // //           initial={{ opacity: 0 }}
// // // // // // // // // // // // //           animate={{ opacity: 0.4 }}
// // // // // // // // // // // // //           transition={{ duration: 1.5 }}
// // // // // // // // // // // // //           className="absolute top-20 right-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl"
// // // // // // // // // // // // //           style={{ 
// // // // // // // // // // // // //             transformOrigin: 'center center',
// // // // // // // // // // // // //             animation: 'pulse 15s ease-in-out infinite alternate'
// // // // // // // // // // // // //           }}
// // // // // // // // // // // // //         />
// // // // // // // // // // // // //         <motion.div 
// // // // // // // // // // // // //           initial={{ opacity: 0 }}
// // // // // // // // // // // // //           animate={{ opacity: 0.3 }}
// // // // // // // // // // // // //           transition={{ duration: 1.5, delay: 0.2 }}
// // // // // // // // // // // // //           className="absolute top-40 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl"
// // // // // // // // // // // // //           style={{ 
// // // // // // // // // // // // //             transformOrigin: 'center center',
// // // // // // // // // // // // //             animation: 'pulse 20s ease-in-out infinite alternate-reverse'
// // // // // // // // // // // // //           }}
// // // // // // // // // // // // //         />
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       <div className="flex min-h-[calc(100vh-64px)]">
// // // // // // // // // // // // //         {/* Left Section - Login Image with enhanced effects */}
// // // // // // // // // // // // //         <motion.div
// // // // // // // // // // // // //           initial={{ opacity: 0, x: -50 }}
// // // // // // // // // // // // //           animate={{ opacity: 1, x: 0 }}
// // // // // // // // // // // // //           transition={{ duration: 0.8 }}
// // // // // // // // // // // // //           className="hidden lg:block w-1/2 relative bg-cover bg-center rounded-r-3xl overflow-hidden"
// // // // // // // // // // // // //           style={{ 
// // // // // // // // // // // // //             backgroundImage: `url(${loginImage})`,
// // // // // // // // // // // // //           }}
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           {/* Overlay with gradient */}
// // // // // // // // // // // // //           <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/30" />
          
// // // // // // // // // // // // //           {/* Animated shine effect */}
// // // // // // // // // // // // //           <motion.div 
// // // // // // // // // // // // //             initial={{ left: '-100%', top: '-100%' }}
// // // // // // // // // // // // //             animate={{ 
// // // // // // // // // // // // //               left: ['-100%', '200%'],
// // // // // // // // // // // // //               top: ['-100%', '200%']
// // // // // // // // // // // // //             }}
// // // // // // // // // // // // //             transition={{ 
// // // // // // // // // // // // //               repeat: Infinity, 
// // // // // // // // // // // // //               duration: 8,
// // // // // // // // // // // // //               repeatType: 'loop',
// // // // // // // // // // // // //               ease: "linear"
// // // // // // // // // // // // //             }}
// // // // // // // // // // // // //             className="absolute w-1/2 h-1/2 bg-white/5 blur-lg"
// // // // // // // // // // // // //             style={{ transform: 'rotate(30deg)' }}
// // // // // // // // // // // // //           />
          
// // // // // // // // // // // // //           {/* Image shadow */}
// // // // // // // // // // // // //           <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/20 to-transparent" />
// // // // // // // // // // // // //         </motion.div>

// // // // // // // // // // // // //         {/* Right Section - Login Form with enhanced styling */}
// // // // // // // // // // // // //         <motion.div
// // // // // // // // // // // // //           initial="hidden"
// // // // // // // // // // // // //           animate="visible"
// // // // // // // // // // // // //           variants={containerVariants}
// // // // // // // // // // // // //           className="w-full lg:w-1/2 flex items-center justify-center p-8"
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           <motion.div 
// // // // // // // // // // // // //             className="w-full max-w-md bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/50 relative overflow-hidden"
// // // // // // // // // // // // //             whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
// // // // // // // // // // // // //             transition={{ duration: 0.3 }}
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             {/* Subtle background pattern */}
// // // // // // // // // // // // //             <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-violet-50 opacity-50" />
            
// // // // // // // // // // // // //             <div className="relative z-10">
// // // // // // // // // // // // //               <motion.div
// // // // // // // // // // // // //                 variants={itemVariants}
// // // // // // // // // // // // //                 className="text-center mb-8"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 <h1 className="text-3xl font-bold text-gray-800 mb-2">
// // // // // // // // // // // // //                   Welcome Back!
// // // // // // // // // // // // //                 </h1>
// // // // // // // // // // // // //                 <p className="text-gray-600">Please sign in to your account</p>
// // // // // // // // // // // // //               </motion.div>

// // // // // // // // // // // // //               <AnimatePresence>
// // // // // // // // // // // // //                 {error && (
// // // // // // // // // // // // //                   <motion.div
// // // // // // // // // // // // //                     initial={{ opacity: 0, y: -10, height: 0 }}
// // // // // // // // // // // // //                     animate={{ opacity: 1, y: 0, height: 'auto' }}
// // // // // // // // // // // // //                     exit={{ opacity: 0, height: 0 }}
// // // // // // // // // // // // //                     className="mb-6"
// // // // // // // // // // // // //                   >
// // // // // // // // // // // // //                     <Alert variant="destructive" className="bg-red-50 border border-red-200 rounded-lg">
// // // // // // // // // // // // //                       <AlertCircle className="h-4 w-4 text-red-600" />
// // // // // // // // // // // // //                       <AlertDescription className="text-red-600">{error}</AlertDescription>
// // // // // // // // // // // // //                     </Alert>
// // // // // // // // // // // // //                   </motion.div>
// // // // // // // // // // // // //                 )}
// // // // // // // // // // // // //               </AnimatePresence>

// // // // // // // // // // // // //               <form onSubmit={handleUserCheck} className="space-y-6">
// // // // // // // // // // // // //                 <motion.div
// // // // // // // // // // // // //                   variants={itemVariants}
// // // // // // // // // // // // //                   className="space-y-2"
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   <label className="text-sm font-medium text-gray-700">Store ID</label>
// // // // // // // // // // // // //                   <div className="relative">
// // // // // // // // // // // // //                     <motion.input
// // // // // // // // // // // // //                       type="text"
// // // // // // // // // // // // //                       value={storeId}
// // // // // // // // // // // // //                       onChange={(e) => setStoreId(e.target.value)}
// // // // // // // // // // // // //                       onFocus={() => setActiveField('store')}
// // // // // // // // // // // // //                       onBlur={() => setActiveField(null)}
// // // // // // // // // // // // //                       className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none transition-all"
// // // // // // // // // // // // //                       placeholder="Enter your store ID"
// // // // // // // // // // // // //                       style={{ boxShadow: activeField === 'store' ? '0 0 0 2px rgba(59, 130, 246, 0.5)' : 'none' }}
// // // // // // // // // // // // //                     />
// // // // // // // // // // // // //                     {activeField === 'store' && (
// // // // // // // // // // // // //                       <motion.div 
// // // // // // // // // // // // //                         initial={{ width: '0%' }}
// // // // // // // // // // // // //                         animate={{ width: '100%' }}
// // // // // // // // // // // // //                         className="absolute bottom-0 left-0 h-0.5 bg-blue-500 rounded-full"
// // // // // // // // // // // // //                       />
// // // // // // // // // // // // //                     )}
// // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // //                 </motion.div>

// // // // // // // // // // // // //                 <motion.div
// // // // // // // // // // // // //                   variants={itemVariants}
// // // // // // // // // // // // //                   className="space-y-2"
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   <label className="text-sm font-medium text-gray-700">User ID</label>
// // // // // // // // // // // // //                   <div className="relative">
// // // // // // // // // // // // //                     <motion.input
// // // // // // // // // // // // //                       type="text"
// // // // // // // // // // // // //                       value={id}
// // // // // // // // // // // // //                       onChange={(e) => setId(e.target.value)}
// // // // // // // // // // // // //                       onFocus={() => setActiveField('user')}
// // // // // // // // // // // // //                       onBlur={() => setActiveField(null)}
// // // // // // // // // // // // //                       className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none transition-all"
// // // // // // // // // // // // //                       placeholder="Enter your user ID"
// // // // // // // // // // // // //                       style={{ boxShadow: activeField === 'user' ? '0 0 0 2px rgba(59, 130, 246, 0.5)' : 'none' }}
// // // // // // // // // // // // //                     />
// // // // // // // // // // // // //                     {activeField === 'user' && (
// // // // // // // // // // // // //                       <motion.div 
// // // // // // // // // // // // //                         initial={{ width: '0%' }}
// // // // // // // // // // // // //                         animate={{ width: '100%' }}
// // // // // // // // // // // // //                         className="absolute bottom-0 left-0 h-0.5 bg-blue-500 rounded-full"
// // // // // // // // // // // // //                       />
// // // // // // // // // // // // //                     )}
// // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // //                 </motion.div>

// // // // // // // // // // // // //                 <motion.div
// // // // // // // // // // // // //                   variants={itemVariants}
// // // // // // // // // // // // //                   className="space-y-2"
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   <label className="text-sm font-medium text-gray-700">Password</label>
// // // // // // // // // // // // //                   <div className="relative">
// // // // // // // // // // // // //                     <motion.input
// // // // // // // // // // // // //                       type="password"
// // // // // // // // // // // // //                       value={password}
// // // // // // // // // // // // //                       onChange={(e) => setPassword(e.target.value)}
// // // // // // // // // // // // //                       onFocus={() => setActiveField('password')}
// // // // // // // // // // // // //                       onBlur={() => setActiveField(null)}
// // // // // // // // // // // // //                       className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none transition-all"
// // // // // // // // // // // // //                       placeholder="Enter your password"
// // // // // // // // // // // // //                       style={{ boxShadow: activeField === 'password' ? '0 0 0 2px rgba(59, 130, 246, 0.5)' : 'none' }}
// // // // // // // // // // // // //                     />
// // // // // // // // // // // // //                     {activeField === 'password' && (
// // // // // // // // // // // // //                       <motion.div 
// // // // // // // // // // // // //                         initial={{ width: '0%' }}
// // // // // // // // // // // // //                         animate={{ width: '100%' }}
// // // // // // // // // // // // //                         className="absolute bottom-0 left-0 h-0.5 bg-blue-500 rounded-full"
// // // // // // // // // // // // //                       />
// // // // // // // // // // // // //                     )}
// // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // //                 </motion.div>

// // // // // // // // // // // // //                 <motion.button
// // // // // // // // // // // // //                   variants={itemVariants}
// // // // // // // // // // // // //                   type="submit"
// // // // // // // // // // // // //                   disabled={isLoading}
// // // // // // // // // // // // //                   whileHover={{ scale: 1.02, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
// // // // // // // // // // // // //                   whileTap={{ scale: 0.98 }}
// // // // // // // // // // // // //                   className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium transition-all disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden"
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   {/* Button shine effect */}
// // // // // // // // // // // // //                   <motion.div 
// // // // // // // // // // // // //                     className="absolute inset-0 w-full h-full"
// // // // // // // // // // // // //                     initial={{ opacity: 0, right: '100%' }}
// // // // // // // // // // // // //                     whileHover={{ 
// // // // // // // // // // // // //                       opacity: 1, 
// // // // // // // // // // // // //                       right: '-120%',
// // // // // // // // // // // // //                       transition: { duration: 1 }
// // // // // // // // // // // // //                     }}
// // // // // // // // // // // // //                     style={{
// // // // // // // // // // // // //                       background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
// // // // // // // // // // // // //                       transform: 'skewX(-20deg)'
// // // // // // // // // // // // //                     }}
// // // // // // // // // // // // //                   />
                  
// // // // // // // // // // // // //                   {isLoading ? (
// // // // // // // // // // // // //                     <span className="flex items-center justify-center">
// // // // // // // // // // // // //                       <motion.div
// // // // // // // // // // // // //                         animate={{ rotate: 360 }}
// // // // // // // // // // // // //                         transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
// // // // // // // // // // // // //                         className="h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"
// // // // // // // // // // // // //                       />
// // // // // // // // // // // // //                       Signing in...
// // // // // // // // // // // // //                     </span>
// // // // // // // // // // // // //                   ) : (
// // // // // // // // // // // // //                     <span className="relative z-10">Sign In</span>
// // // // // // // // // // // // //                   )}
// // // // // // // // // // // // //                 </motion.button>
// // // // // // // // // // // // //               </form>

// // // // // // // // // // // // //               <motion.div
// // // // // // // // // // // // //                 variants={itemVariants}
// // // // // // // // // // // // //                 className="mt-6 text-center"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 <p className="text-gray-600">
// // // // // // // // // // // // //                   Don't have an account?{" "}
// // // // // // // // // // // // //                   <Link
// // // // // // // // // // // // //                     to="/signup"
// // // // // // // // // // // // //                     className="text-blue-600 hover:text-blue-700 font-medium transition-colors relative group"
// // // // // // // // // // // // //                   >
// // // // // // // // // // // // //                     Create one now
// // // // // // // // // // // // //                     <motion.span 
// // // // // // // // // // // // //                       className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"
// // // // // // // // // // // // //                     />
// // // // // // // // // // // // //                   </Link>
// // // // // // // // // // // // //                 </p>
// // // // // // // // // // // // //               </motion.div>
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           </motion.div>
// // // // // // // // // // // // //         </motion.div>
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       {/* Add floating animated elements */}
// // // // // // // // // // // // //       <div className="fixed inset-0 pointer-events-none">
// // // // // // // // // // // // //         <motion.div
// // // // // // // // // // // // //           animate={{
// // // // // // // // // // // // //             y: [0, -20, 0],
// // // // // // // // // // // // //             opacity: [0.5, 0.8, 0.5]
// // // // // // // // // // // // //           }}
// // // // // // // // // // // // //           transition={{
// // // // // // // // // // // // //             duration: 8,
// // // // // // // // // // // // //             repeat: Infinity,
// // // // // // // // // // // // //             repeatType: 'loop'
// // // // // // // // // // // // //           }}
// // // // // // // // // // // // //           className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-blue-400/30"
// // // // // // // // // // // // //         />
// // // // // // // // // // // // //         <motion.div
// // // // // // // // // // // // //           animate={{
// // // // // // // // // // // // //             y: [0, 30, 0],
// // // // // // // // // // // // //             opacity: [0.3, 0.6, 0.3]
// // // // // // // // // // // // //           }}
// // // // // // // // // // // // //           transition={{
// // // // // // // // // // // // //             duration: 10,
// // // // // // // // // // // // //             repeat: Infinity,
// // // // // // // // // // // // //             repeatType: 'loop',
// // // // // // // // // // // // //             delay: 1
// // // // // // // // // // // // //           }}
// // // // // // // // // // // // //           className="absolute top-2/3 left-1/3 w-6 h-6 rounded-full bg-purple-400/20"
// // // // // // // // // // // // //         />
// // // // // // // // // // // // //         <motion.div
// // // // // // // // // // // // //           animate={{
// // // // // // // // // // // // //             y: [0, -15, 0],
// // // // // // // // // // // // //             opacity: [0.4, 0.7, 0.4]
// // // // // // // // // // // // //           }}
// // // // // // // // // // // // //           transition={{
// // // // // // // // // // // // //             duration: 7,
// // // // // // // // // // // // //             repeat: Infinity,
// // // // // // // // // // // // //             repeatType: 'loop',
// // // // // // // // // // // // //             delay: 2
// // // // // // // // // // // // //           }}
// // // // // // // // // // // // //           className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-indigo-400/30"
// // // // // // // // // // // // //         />
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       {/* CSS for animations */}
// // // // // // // // // // // // //       <style jsx>{`
// // // // // // // // // // // // //         @keyframes pulse {
// // // // // // // // // // // // //           0% { transform: scale(1); opacity: 0.3; }
// // // // // // // // // // // // //           50% { transform: scale(1.1); opacity: 0.5; }
// // // // // // // // // // // // //           100% { transform: scale(1); opacity: 0.3; }
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //       `}</style>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default Login;

// // // // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // // // import { useNavigate, Link } from "react-router-dom";
// // // // // // // // // // // // import { useStore } from "./StoreContext";
// // // // // // // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // // // // // // import { Alert, AlertDescription } from "./components/ui/Alert";
// // // // // // // // // // // // import { AlertCircle } from "lucide-react";
// // // // // // // // // // // // import loginImage from './images/login.png';
// // // // // // // // // // // // import logo from './images/logo.jpg';

// // // // // // // // // // // // const Login = () => {
// // // // // // // // // // // //   const [storeId, setStoreId] = useState("");
// // // // // // // // // // // //   const [password, setPassword] = useState("");
// // // // // // // // // // // //   const [id, setId] = useState("");
// // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // // // // // // // //   const [activeField, setActiveField] = useState(null);
// // // // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // // // //   const { setStoreName, setStoreId: setStoreInContext, setUserId } = useStore();

// // // // // // // // // // // //   // Animation for background gradient
// // // // // // // // // // // //   const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
  
// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     const handleMouseMove = (e) => {
// // // // // // // // // // // //       const x = e.clientX / window.innerWidth;
// // // // // // // // // // // //       const y = e.clientY / window.innerHeight;
// // // // // // // // // // // //       setGradientPosition({ x, y });
// // // // // // // // // // // //     };
    
// // // // // // // // // // // //     window.addEventListener('mousemove', handleMouseMove);
// // // // // // // // // // // //     return () => {
// // // // // // // // // // // //       window.removeEventListener('mousemove', handleMouseMove);
// // // // // // // // // // // //     };
// // // // // // // // // // // //   }, []);

// // // // // // // // // // // //   const handleUserCheck = async (e) => {
// // // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // // //     setIsLoading(true);

// // // // // // // // // // // //     try {
// // // // // // // // // // // //       const response = await fetch("http://localhost:5001/check_user", {
// // // // // // // // // // // //         method: "POST",
// // // // // // // // // // // //         headers: {
// // // // // // // // // // // //           "Content-Type": "application/json",
// // // // // // // // // // // //         },
// // // // // // // // // // // //         body: JSON.stringify({
// // // // // // // // // // // //           storeId,
// // // // // // // // // // // //           id: String(id),
// // // // // // // // // // // //           password,
// // // // // // // // // // // //         }),
// // // // // // // // // // // //       });

// // // // // // // // // // // //       const data = await response.json();

// // // // // // // // // // // //       if (data.message === "User found!") {
// // // // // // // // // // // //         localStorage.setItem("storeName", data.store_name);
// // // // // // // // // // // //         localStorage.setItem("storeId", storeId);
// // // // // // // // // // // //         localStorage.setItem("userId", data.id);
// // // // // // // // // // // //         localStorage.setItem("userRole", data.role); // Store the user's role
// // // // // // // // // // // //         setStoreName(data.store_name);
// // // // // // // // // // // //         setStoreInContext(storeId);
// // // // // // // // // // // //         setUserId(data.id);

// // // // // // // // // // // //         // Redirect based on user role
// // // // // // // // // // // //         switch (data.role) {
// // // // // // // // // // // //           case "admin":
// // // // // // // // // // // //             navigate("/AdminDashboard");
// // // // // // // // // // // //             break;
// // // // // // // // // // // //           case "manager":
// // // // // // // // // // // //             navigate("/ManagerDashboard");
// // // // // // // // // // // //             break;
// // // // // // // // // // // //           case "cashier":
// // // // // // // // // // // //             navigate("/CashierDashboard");
// // // // // // // // // // // //             break;
// // // // // // // // // // // //           default:
// // // // // // // // // // // //             navigate("/Inter");
// // // // // // // // // // // //         }
// // // // // // // // // // // //       } else {
// // // // // // // // // // // //         setError("Invalid credentials");
// // // // // // // // // // // //       }
// // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // //       setError("Something went wrong. Please try again.");
// // // // // // // // // // // //     } finally {
// // // // // // // // // // // //       setIsLoading(false);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Animation variants
// // // // // // // // // // // //   const containerVariants = {
// // // // // // // // // // // //     hidden: { opacity: 0, y: 20 },
// // // // // // // // // // // //     visible: { 
// // // // // // // // // // // //       opacity: 1, 
// // // // // // // // // // // //       y: 0,
// // // // // // // // // // // //       transition: { 
// // // // // // // // // // // //         duration: 0.6,
// // // // // // // // // // // //         ease: "easeOut",
// // // // // // // // // // // //         staggerChildren: 0.1,
// // // // // // // // // // // //       }
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const itemVariants = {
// // // // // // // // // // // //     hidden: { opacity: 0, y: 20 },
// // // // // // // // // // // //     visible: { 
// // // // // // // // // // // //       opacity: 1, 
// // // // // // // // // // // //       y: 0,
// // // // // // // // // // // //       transition: { duration: 0.4 }
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div 
// // // // // // // // // // // //       className="min-h-screen overflow-hidden"
// // // // // // // // // // // //       style={{
// // // // // // // // // // // //         background: `linear-gradient(${120 + gradientPosition.x * 40}deg, rgba(239, 246, 255, 0.9) 0%, rgba(219, 234, 254, 0.9) 35%, rgba(196, 181, 253, 0.5) 100%)`,
// // // // // // // // // // // //         backgroundSize: '400% 400%',
// // // // // // // // // // // //         transition: 'background-position 0.5s ease'
// // // // // // // // // // // //       }}
// // // // // // // // // // // //     >
// // // // // // // // // // // //       {/* Navigation bar */}
// // // // // // // // // // // //       <header className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md z-10 relative">
// // // // // // // // // // // //         <div className="flex items-center gap-5">
// // // // // // // // // // // //           <div className="w-12 h-12 transform hover:scale-105 transition-transform">
// // // // // // // // // // // //             <Link to="/AboutPage">
// // // // // // // // // // // //               <img src={logo} alt="Logo" className="w-full h-full" />
// // // // // // // // // // // //             </Link>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <nav className="flex gap-4">
// // // // // // // // // // // //             <Link to="/" className="text-base no-underline hover:text-blue-800 transition-colors">Home</Link>
// // // // // // // // // // // //             <Link to="/AboutPage" className="text-gray-700 text-base no-underline hover:text-blue-600 transition-colors">About</Link>
// // // // // // // // // // // //             <Link to="/ContactUs" className="text-gray-700 text-base no-underline hover:text-blue-600 transition-colors">Contact</Link>
// // // // // // // // // // // //           </nav>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //         <div className="flex gap-3">
// // // // // // // // // // // //           {['SignUp', 'StoreReview'].map((text, index) => (
// // // // // // // // // // // //             <Link key={index} to={`/${text.replace(/\s+/g, '')}`}>
// // // // // // // // // // // //               <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm 
// // // // // // // // // // // //                 hover:bg-blue-600 transform hover:-translate-y-0.5 transition-all duration-300 
// // // // // // // // // // // //                 shadow-md hover:shadow-lg">
// // // // // // // // // // // //                 {text}
// // // // // // // // // // // //               </button>
// // // // // // // // // // // //             </Link>
// // // // // // // // // // // //           ))}
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </header>

// // // // // // // // // // // //       {/* Decorative elements */}
// // // // // // // // // // // //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // // // // // // // // // // //         <motion.div 
// // // // // // // // // // // //           initial={{ opacity: 0 }}
// // // // // // // // // // // //           animate={{ opacity: 0.4 }}
// // // // // // // // // // // //           transition={{ duration: 1.5 }}
// // // // // // // // // // // //           className="absolute top-20 right-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl"
// // // // // // // // // // // //           style={{ 
// // // // // // // // // // // //             transformOrigin: 'center center',
// // // // // // // // // // // //             animation: 'pulse 15s ease-in-out infinite alternate'
// // // // // // // // // // // //           }}
// // // // // // // // // // // //         />
// // // // // // // // // // // //         <motion.div 
// // // // // // // // // // // //           initial={{ opacity: 0 }}
// // // // // // // // // // // //           animate={{ opacity: 0.3 }}
// // // // // // // // // // // //           transition={{ duration: 1.5, delay: 0.2 }}
// // // // // // // // // // // //           className="absolute top-40 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl"
// // // // // // // // // // // //           style={{ 
// // // // // // // // // // // //             transformOrigin: 'center center',
// // // // // // // // // // // //             animation: 'pulse 20s ease-in-out infinite alternate-reverse'
// // // // // // // // // // // //           }}
// // // // // // // // // // // //         />
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       <div className="flex min-h-[calc(100vh-64px)]">
// // // // // // // // // // // //         {/* Left Section - Login Image with enhanced effects */}
// // // // // // // // // // // //         <motion.div
// // // // // // // // // // // //           initial={{ opacity: 0, x: -50 }}
// // // // // // // // // // // //           animate={{ opacity: 1, x: 0 }}
// // // // // // // // // // // //           transition={{ duration: 0.8 }}
// // // // // // // // // // // //           className="hidden lg:block w-1/2 relative bg-cover bg-center rounded-r-3xl overflow-hidden"
// // // // // // // // // // // //           style={{ 
// // // // // // // // // // // //             backgroundImage: `url(${loginImage})`,
// // // // // // // // // // // //           }}
// // // // // // // // // // // //         >
// // // // // // // // // // // //           {/* Overlay with gradient */}
// // // // // // // // // // // //           <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/30" />
          
// // // // // // // // // // // //           {/* Animated shine effect */}
// // // // // // // // // // // //           <motion.div 
// // // // // // // // // // // //             initial={{ left: '-100%', top: '-100%' }}
// // // // // // // // // // // //             animate={{ 
// // // // // // // // // // // //               left: ['-100%', '200%'],
// // // // // // // // // // // //               top: ['-100%', '200%']
// // // // // // // // // // // //             }}
// // // // // // // // // // // //             transition={{ 
// // // // // // // // // // // //               repeat: Infinity, 
// // // // // // // // // // // //               duration: 8,
// // // // // // // // // // // //               repeatType: 'loop',
// // // // // // // // // // // //               ease: "linear"
// // // // // // // // // // // //             }}
// // // // // // // // // // // //             className="absolute w-1/2 h-1/2 bg-white/5 blur-lg"
// // // // // // // // // // // //             style={{ transform: 'rotate(30deg)' }}
// // // // // // // // // // // //           />
          
// // // // // // // // // // // //           {/* Image shadow */}
// // // // // // // // // // // //           <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/20 to-transparent" />
// // // // // // // // // // // //         </motion.div>

// // // // // // // // // // // //         {/* Right Section - Login Form with enhanced styling */}
// // // // // // // // // // // //         <motion.div
// // // // // // // // // // // //           initial="hidden"
// // // // // // // // // // // //           animate="visible"
// // // // // // // // // // // //           variants={containerVariants}
// // // // // // // // // // // //           className="w-full lg:w-1/2 flex items-center justify-center p-8"
// // // // // // // // // // // //         >
// // // // // // // // // // // //           <motion.div 
// // // // // // // // // // // //             className="w-full max-w-md bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/50 relative overflow-hidden"
// // // // // // // // // // // //             whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
// // // // // // // // // // // //             transition={{ duration: 0.3 }}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             {/* Subtle background pattern */}
// // // // // // // // // // // //             <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-violet-50 opacity-50" />
            
// // // // // // // // // // // //             <div className="relative z-10">
// // // // // // // // // // // //               <motion.div
// // // // // // // // // // // //                 variants={itemVariants}
// // // // // // // // // // // //                 className="text-center mb-8"
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 <h1 className="text-3xl font-bold text-gray-800 mb-2">
// // // // // // // // // // // //                   Welcome Back!
// // // // // // // // // // // //                 </h1>
// // // // // // // // // // // //                 <p className="text-gray-600">Please sign in to your account</p>
// // // // // // // // // // // //               </motion.div>

// // // // // // // // // // // //               <AnimatePresence>
// // // // // // // // // // // //                 {error && (
// // // // // // // // // // // //                   <motion.div
// // // // // // // // // // // //                     initial={{ opacity: 0, y: -10, height: 0 }}
// // // // // // // // // // // //                     animate={{ opacity: 1, y: 0, height: 'auto' }}
// // // // // // // // // // // //                     exit={{ opacity: 0, height: 0 }}
// // // // // // // // // // // //                     className="mb-6"
// // // // // // // // // // // //                   >
// // // // // // // // // // // //                     <Alert variant="destructive" className="bg-red-50 border border-red-200 rounded-lg">
// // // // // // // // // // // //                       <AlertCircle className="h-4 w-4 text-red-600" />
// // // // // // // // // // // //                       <AlertDescription className="text-red-600">{error}</AlertDescription>
// // // // // // // // // // // //                     </Alert>
// // // // // // // // // // // //                   </motion.div>
// // // // // // // // // // // //                 )}
// // // // // // // // // // // //               </AnimatePresence>

// // // // // // // // // // // //               <form onSubmit={handleUserCheck} className="space-y-6">
// // // // // // // // // // // //                 <motion.div
// // // // // // // // // // // //                   variants={itemVariants}
// // // // // // // // // // // //                   className="space-y-2"
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   <label className="text-sm font-medium text-gray-700">Store ID</label>
// // // // // // // // // // // //                   <div className="relative">
// // // // // // // // // // // //                     <motion.input
// // // // // // // // // // // //                       type="text"
// // // // // // // // // // // //                       value={storeId}
// // // // // // // // // // // //                       onChange={(e) => setStoreId(e.target.value)}
// // // // // // // // // // // //                       onFocus={() => setActiveField('store')}
// // // // // // // // // // // //                       onBlur={() => setActiveField(null)}
// // // // // // // // // // // //                       className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none transition-all"
// // // // // // // // // // // //                       placeholder="Enter your store ID"
// // // // // // // // // // // //                       style={{ boxShadow: activeField === 'store' ? '0 0 0 2px rgba(59, 130, 246, 0.5)' : 'none' }}
// // // // // // // // // // // //                     />
// // // // // // // // // // // //                     {activeField === 'store' && (
// // // // // // // // // // // //                       <motion.div 
// // // // // // // // // // // //                         initial={{ width: '0%' }}
// // // // // // // // // // // //                         animate={{ width: '100%' }}
// // // // // // // // // // // //                         className="absolute bottom-0 left-0 h-0.5 bg-blue-500 rounded-full"
// // // // // // // // // // // //                       />
// // // // // // // // // // // //                     )}
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                 </motion.div>

// // // // // // // // // // // //                 <motion.div
// // // // // // // // // // // //                   variants={itemVariants}
// // // // // // // // // // // //                   className="space-y-2"
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   <label className="text-sm font-medium text-gray-700">User ID</label>
// // // // // // // // // // // //                   <div className="relative">
// // // // // // // // // // // //                     <motion.input
// // // // // // // // // // // //                       type="text"
// // // // // // // // // // // //                       value={id}
// // // // // // // // // // // //                       onChange={(e) => setId(e.target.value)}
// // // // // // // // // // // //                       onFocus={() => setActiveField('user')}
// // // // // // // // // // // //                       onBlur={() => setActiveField(null)}
// // // // // // // // // // // //                       className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none transition-all"
// // // // // // // // // // // //                       placeholder="Enter your user ID"
// // // // // // // // // // // //                       style={{ boxShadow: activeField === 'user' ? '0 0 0 2px rgba(59, 130, 246, 0.5)' : 'none' }}
// // // // // // // // // // // //                     />
// // // // // // // // // // // //                     {activeField === 'user' && (
// // // // // // // // // // // //                       <motion.div 
// // // // // // // // // // // //                         initial={{ width: '0%' }}
// // // // // // // // // // // //                         animate={{ width: '100%' }}
// // // // // // // // // // // //                         className="absolute bottom-0 left-0 h-0.5 bg-blue-500 rounded-full"
// // // // // // // // // // // //                       />
// // // // // // // // // // // //                     )}
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                 </motion.div>

// // // // // // // // // // // //                 <motion.div
// // // // // // // // // // // //                   variants={itemVariants}
// // // // // // // // // // // //                   className="space-y-2"
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   <label className="text-sm font-medium text-gray-700">Password</label>
// // // // // // // // // // // //                   <div className="relative">
// // // // // // // // // // // //                     <motion.input
// // // // // // // // // // // //                       type="password"
// // // // // // // // // // // //                       value={password}
// // // // // // // // // // // //                       onChange={(e) => setPassword(e.target.value)}
// // // // // // // // // // // //                       onFocus={() => setActiveField('password')}
// // // // // // // // // // // //                       onBlur={() => setActiveField(null)}
// // // // // // // // // // // //                       className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none transition-all"
// // // // // // // // // // // //                       placeholder="Enter your password"
// // // // // // // // // // // //                       style={{ boxShadow: activeField === 'password' ? '0 0 0 2px rgba(59, 130, 246, 0.5)' : 'none' }}
// // // // // // // // // // // //                     />
// // // // // // // // // // // //                     {activeField === 'password' && (
// // // // // // // // // // // //                       <motion.div 
// // // // // // // // // // // //                         initial={{ width: '0%' }}
// // // // // // // // // // // //                         animate={{ width: '100%' }}
// // // // // // // // // // // //                         className="absolute bottom-0 left-0 h-0.5 bg-blue-500 rounded-full"
// // // // // // // // // // // //                       />
// // // // // // // // // // // //                     )}
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                 </motion.div>

// // // // // // // // // // // //                 <motion.button
// // // // // // // // // // // //                   variants={itemVariants}
// // // // // // // // // // // //                   type="submit"
// // // // // // // // // // // //                   disabled={isLoading}
// // // // // // // // // // // //                   whileHover={{ scale: 1.02, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
// // // // // // // // // // // //                   whileTap={{ scale: 0.98 }}
// // // // // // // // // // // //                   className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium transition-all disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden"
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   {/* Button shine effect */}
// // // // // // // // // // // //                   <motion.div 
// // // // // // // // // // // //                     className="absolute inset-0 w-full h-full"
// // // // // // // // // // // //                     initial={{ opacity: 0, right: '100%' }}
// // // // // // // // // // // //                     whileHover={{ 
// // // // // // // // // // // //                       opacity: 1, 
// // // // // // // // // // // //                       right: '-120%',
// // // // // // // // // // // //                       transition: { duration: 1 }
// // // // // // // // // // // //                     }}
// // // // // // // // // // // //                     style={{
// // // // // // // // // // // //                       background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
// // // // // // // // // // // //                       transform: 'skewX(-20deg)'
// // // // // // // // // // // //                     }}
// // // // // // // // // // // //                   />
                  
// // // // // // // // // // // //                   {isLoading ? (
// // // // // // // // // // // //                     <span className="flex items-center justify-center">
// // // // // // // // // // // //                       <motion.div
// // // // // // // // // // // //                         animate={{ rotate: 360 }}
// // // // // // // // // // // //                         transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
// // // // // // // // // // // //                         className="h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"
// // // // // // // // // // // //                       />
// // // // // // // // // // // //                       Signing in...
// // // // // // // // // // // //                     </span>
// // // // // // // // // // // //                   ) : (
// // // // // // // // // // // //                     <span className="relative z-10">Sign In</span>
// // // // // // // // // // // //                   )}
// // // // // // // // // // // //                 </motion.button>
// // // // // // // // // // // //               </form>

// // // // // // // // // // // //               <motion.div
// // // // // // // // // // // //                 variants={itemVariants}
// // // // // // // // // // // //                 className="mt-6 text-center"
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 <p className="text-gray-600">
// // // // // // // // // // // //                   Don't have an account?{" "}
// // // // // // // // // // // //                   <Link
// // // // // // // // // // // //                     to="/signup"
// // // // // // // // // // // //                     className="text-blue-600 hover:text-blue-700 font-medium transition-colors relative group"
// // // // // // // // // // // //                   >
// // // // // // // // // // // //                     Create one now
// // // // // // // // // // // //                     <motion.span 
// // // // // // // // // // // //                       className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"
// // // // // // // // // // // //                     />
// // // // // // // // // // // //                   </Link>
// // // // // // // // // // // //                 </p>
// // // // // // // // // // // //               </motion.div>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           </motion.div>
// // // // // // // // // // // //         </motion.div>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* Add floating animated elements */}
// // // // // // // // // // // //       <div className="fixed inset-0 pointer-events-none">
// // // // // // // // // // // //         <motion.div
// // // // // // // // // // // //           animate={{
// // // // // // // // // // // //             y: [0, -20, 0],
// // // // // // // // // // // //             opacity: [0.5, 0.8, 0.5]
// // // // // // // // // // // //           }}
// // // // // // // // // // // //           transition={{
// // // // // // // // // // // //             duration: 8,
// // // // // // // // // // // //             repeat: Infinity,
// // // // // // // // // // // //             repeatType: 'loop'
// // // // // // // // // // // //           }}
// // // // // // // // // // // //           className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-blue-400/30"
// // // // // // // // // // // //         />
// // // // // // // // // // // //         <motion.div
// // // // // // // // // // // //           animate={{
// // // // // // // // // // // //             y: [0, 30, 0],
// // // // // // // // // // // //             opacity: [0.3, 0.6, 0.3]
// // // // // // // // // // // //           }}
// // // // // // // // // // // //           transition={{
// // // // // // // // // // // //             duration: 10,
// // // // // // // // // // // //             repeat: Infinity,
// // // // // // // // // // // //             repeatType: 'loop',
// // // // // // // // // // // //             delay: 1
// // // // // // // // // // // //           }}
// // // // // // // // // // // //           className="absolute top-2/3 left-1/3 w-6 h-6 rounded-full bg-purple-400/20"
// // // // // // // // // // // //         />
// // // // // // // // // // // //         <motion.div
// // // // // // // // // // // //           animate={{
// // // // // // // // // // // //             y: [0, -15, 0],
// // // // // // // // // // // //             opacity: [0.4, 0.7, 0.4]
// // // // // // // // // // // //           }}
// // // // // // // // // // // //           transition={{
// // // // // // // // // // // //             duration: 7,
// // // // // // // // // // // //             repeat: Infinity,
// // // // // // // // // // // //             repeatType: 'loop',
// // // // // // // // // // // //             delay: 2
// // // // // // // // // // // //           }}
// // // // // // // // // // // //           className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-indigo-400/30"
// // // // // // // // // // // //         />
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* CSS for animations */}
// // // // // // // // // // // //       <style jsx>{`
// // // // // // // // // // // //         @keyframes pulse {
// // // // // // // // // // // //           0% { transform: scale(1); opacity: 0.3; }
// // // // // // // // // // // //           50% { transform: scale(1.1); opacity: 0.5; }
// // // // // // // // // // // //           100% { transform: scale(1); opacity: 0.3; }
// // // // // // // // // // // //         }
// // // // // // // // // // // //       `}</style>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default Login;
// // // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // // import { useNavigate, Link } from "react-router-dom";
// // // // // // // // // // // import { useStore } from "./StoreContext";
// // // // // // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // // // // // import { Alert, AlertDescription } from "./components/ui/Alert";
// // // // // // // // // // // import { AlertCircle } from "lucide-react";
// // // // // // // // // // // import loginImage from './images/login.png';
// // // // // // // // // // // import logo from './images/logo.jpg';

// // // // // // // // // // // const Login = () => {
// // // // // // // // // // //   const [storeId, setStoreId] = useState("");
// // // // // // // // // // //   const [password, setPassword] = useState("");
// // // // // // // // // // //   const [id, setId] = useState("");
// // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // // // // // // //   const [activeField, setActiveField] = useState(null);
// // // // // // // // // // //   const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false); // Forgot Password Modal State
// // // // // // // // // // //   const [email, setEmail] = useState(""); // Email for Forgot Password
// // // // // // // // // // //   const [resetMessage, setResetMessage] = useState(""); // Reset Message
// // // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // // //   const { setStoreName, setStoreId: setStoreInContext, setUserId } = useStore();

// // // // // // // // // // //   // Animation for background gradient
// // // // // // // // // // //   const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const handleMouseMove = (e) => {
// // // // // // // // // // //       const x = e.clientX / window.innerWidth;
// // // // // // // // // // //       const y = e.clientY / window.innerHeight;
// // // // // // // // // // //       setGradientPosition({ x, y });
// // // // // // // // // // //     };

// // // // // // // // // // //     window.addEventListener('mousemove', handleMouseMove);
// // // // // // // // // // //     return () => {
// // // // // // // // // // //       window.removeEventListener('mousemove', handleMouseMove);
// // // // // // // // // // //     };
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   // const handleUserCheck = async (e) => {
// // // // // // // // // // //   //   e.preventDefault();
// // // // // // // // // // //   //   setIsLoading(true);

// // // // // // // // // // //   //   try {
// // // // // // // // // // //   //     const response = await fetch("http://localhost:5001/check_user", {
// // // // // // // // // // //   //       method: "POST",
// // // // // // // // // // //   //       headers: {
// // // // // // // // // // //   //         "Content-Type": "application/json",
// // // // // // // // // // //   //       },
// // // // // // // // // // //   //       body: JSON.stringify({
// // // // // // // // // // //   //         storeId,
// // // // // // // // // // //   //         id: String(id),
// // // // // // // // // // //   //         password,
// // // // // // // // // // //   //       }),
// // // // // // // // // // //   //     });

// // // // // // // // // // //   //     const data = await response.json();

// // // // // // // // // // //   //     if (data.message === "User found!") {
// // // // // // // // // // //   //       localStorage.setItem("storeName", data.store_name);
// // // // // // // // // // //   //       localStorage.setItem("storeId", storeId);
// // // // // // // // // // //   //       localStorage.setItem("userId", data.id);
// // // // // // // // // // //   //       localStorage.setItem("userRole", data.role); // Store the user's role
// // // // // // // // // // //   //       setStoreName(data.store_name);
// // // // // // // // // // //   //       setStoreInContext(storeId);
// // // // // // // // // // //   //       setUserId(data.id);

// // // // // // // // // // //   //       // Redirect based on user role
// // // // // // // // // // //   //       switch (data.role) {
// // // // // // // // // // //   //         case "admin":
// // // // // // // // // // //   //           navigate("/AdminDashboard");
// // // // // // // // // // //   //           break;
// // // // // // // // // // //   //         case "manager":
// // // // // // // // // // //   //           navigate("/ManagerDashboard");
// // // // // // // // // // //   //           break;
// // // // // // // // // // //   //         case "cashier":
// // // // // // // // // // //   //           navigate("/CashierDashboard");
// // // // // // // // // // //   //           break;
// // // // // // // // // // //   //         default:
// // // // // // // // // // //   //           navigate("/Inter");
// // // // // // // // // // //   //       }
// // // // // // // // // // //   //     } else {
// // // // // // // // // // //   //       setError("Invalid credentials");
// // // // // // // // // // //   //     }
// // // // // // // // // // //   //   } catch (err) {
// // // // // // // // // // //   //     setError("Something went wrong. Please try again.");
// // // // // // // // // // //   //   } finally {
// // // // // // // // // // //   //     setIsLoading(false);
// // // // // // // // // // //   //   }
// // // // // // // // // // //   // };
// // // // // // // // // // //   const handleUserCheck = async (e) => {
// // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // //     setIsLoading(true);
  
// // // // // // // // // // //     try {
// // // // // // // // // // //       const response = await fetch("http://localhost:5001/check_user", {
// // // // // // // // // // //         method: "POST",
// // // // // // // // // // //         headers: {
// // // // // // // // // // //           "Content-Type": "application/json",
// // // // // // // // // // //         },
// // // // // // // // // // //         body: JSON.stringify({
// // // // // // // // // // //           storeId,
// // // // // // // // // // //           id: String(id),
// // // // // // // // // // //           password,
// // // // // // // // // // //         }),
// // // // // // // // // // //       });
  
// // // // // // // // // // //       const data = await response.json();
  
// // // // // // // // // // //       if (data.message === "User found!") {
// // // // // // // // // // //         // Store user and store details in localStorage
// // // // // // // // // // //         localStorage.setItem("storeName", data.store_name);
// // // // // // // // // // //         localStorage.setItem("storeId", storeId);
// // // // // // // // // // //         localStorage.setItem("userId", data.id);
// // // // // // // // // // //         localStorage.setItem("userRole", data.role);
  
// // // // // // // // // // //         // Store admin details in localStorage
// // // // // // // // // // //         localStorage.setItem("storeAddress", data.store_address);
// // // // // // // // // // //         localStorage.setItem("email", data.email);
// // // // // // // // // // //         localStorage.setItem("fullName", data.full_name);
// // // // // // // // // // //         localStorage.setItem("phoneNumber", data.phone_number);
  
// // // // // // // // // // //         // Set context or state if needed
// // // // // // // // // // //         setStoreName(data.store_name);
// // // // // // // // // // //         setStoreInContext(storeId);
// // // // // // // // // // //         setUserId(data.id);
  
// // // // // // // // // // //         // Redirect based on user role
// // // // // // // // // // //         switch (data.role) {
// // // // // // // // // // //           case "admin":
// // // // // // // // // // //             navigate("/AdminDashboard");
// // // // // // // // // // //             break;
// // // // // // // // // // //           case "manager":
// // // // // // // // // // //             navigate("/ManagerDashboard");
// // // // // // // // // // //             break;
// // // // // // // // // // //           case "cashier":
// // // // // // // // // // //             navigate("/CashierDashboard");
// // // // // // // // // // //             break;
// // // // // // // // // // //           default:
// // // // // // // // // // //             navigate("/Inter");
// // // // // // // // // // //         }
// // // // // // // // // // //       } else {
// // // // // // // // // // //         setError("Invalid credentials");
// // // // // // // // // // //       }
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       setError("Something went wrong. Please try again.");
// // // // // // // // // // //     } finally {
// // // // // // // // // // //       setIsLoading(false);
// // // // // // // // // // //     }
// // // // // // // // // // //   };
// // // // // // // // // // //   // Forgot Password Handler
// // // // // // // // // // //   const handleForgotPassword = async () => {
// // // // // // // // // // //     try {
// // // // // // // // // // //       const response = await fetch("http://localhost:5001/forgot_password", {
// // // // // // // // // // //         method: "POST",
// // // // // // // // // // //         headers: {
// // // // // // // // // // //           "Content-Type": "application/json",
// // // // // // // // // // //         },
// // // // // // // // // // //         body: JSON.stringify({ email }),
// // // // // // // // // // //       });

// // // // // // // // // // //       const data = await response.json();

// // // // // // // // // // //       if (response.ok) {
// // // // // // // // // // //         setResetMessage(data.message);
// // // // // // // // // // //       } else {
// // // // // // // // // // //         setResetMessage(data.message || "Failed to send reset email.");
// // // // // // // // // // //       }
// // // // // // // // // // //     } catch (error) {
// // // // // // // // // // //       setResetMessage("Something went wrong. Please try again.");
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   // Animation variants
// // // // // // // // // // //   const containerVariants = {
// // // // // // // // // // //     hidden: { opacity: 0, y: 20 },
// // // // // // // // // // //     visible: { 
// // // // // // // // // // //       opacity: 1, 
// // // // // // // // // // //       y: 0,
// // // // // // // // // // //       transition: { 
// // // // // // // // // // //         duration: 0.6,
// // // // // // // // // // //         ease: "easeOut",
// // // // // // // // // // //         staggerChildren: 0.1,
// // // // // // // // // // //       }
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const itemVariants = {
// // // // // // // // // // //     hidden: { opacity: 0, y: 20 },
// // // // // // // // // // //     visible: { 
// // // // // // // // // // //       opacity: 1, 
// // // // // // // // // // //       y: 0,
// // // // // // // // // // //       transition: { duration: 0.4 }
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div 
// // // // // // // // // // //       className="min-h-screen overflow-hidden"
// // // // // // // // // // //       style={{
// // // // // // // // // // //         background: `linear-gradient(${120 + gradientPosition.x * 40}deg, rgba(239, 246, 255, 0.9) 0%, rgba(219, 234, 254, 0.9) 35%, rgba(196, 181, 253, 0.5) 100%)`,
// // // // // // // // // // //         backgroundSize: '400% 400%',
// // // // // // // // // // //         transition: 'background-position 0.5s ease'
// // // // // // // // // // //       }}
// // // // // // // // // // //     >
// // // // // // // // // // //       {/* Navigation bar */}
// // // // // // // // // // //       <header className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md z-10 relative">
// // // // // // // // // // //         <div className="flex items-center gap-5">
// // // // // // // // // // //           <div className="w-12 h-12 transform hover:scale-105 transition-transform">
// // // // // // // // // // //             <Link to="/AboutPage">
// // // // // // // // // // //               <img src={logo} alt="Logo" className="w-full h-full" />
// // // // // // // // // // //             </Link>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <nav className="flex gap-4">
// // // // // // // // // // //             <Link to="/" className="text-base no-underline hover:text-blue-800 transition-colors">Home</Link>
// // // // // // // // // // //             <Link to="/AboutPage" className="text-gray-700 text-base no-underline hover:text-blue-600 transition-colors">About</Link>
// // // // // // // // // // //             <Link to="/ContactUs" className="text-gray-700 text-base no-underline hover:text-blue-600 transition-colors">Contact</Link>
// // // // // // // // // // //           </nav>
// // // // // // // // // // //         </div>
// // // // // // // // // // //         <div className="flex gap-3">
// // // // // // // // // // //           {['SignUp', 'StoreReview'].map((text, index) => (
// // // // // // // // // // //             <Link key={index} to={`/${text.replace(/\s+/g, '')}`}>
// // // // // // // // // // //               <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm 
// // // // // // // // // // //                 hover:bg-blue-600 transform hover:-translate-y-0.5 transition-all duration-300 
// // // // // // // // // // //                 shadow-md hover:shadow-lg">
// // // // // // // // // // //                 {text}
// // // // // // // // // // //               </button>
// // // // // // // // // // //             </Link>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </header>

// // // // // // // // // // //       {/* Decorative elements */}
// // // // // // // // // // //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // // // // // // // // // //         <motion.div 
// // // // // // // // // // //           initial={{ opacity: 0 }}
// // // // // // // // // // //           animate={{ opacity: 0.4 }}
// // // // // // // // // // //           transition={{ duration: 1.5 }}
// // // // // // // // // // //           className="absolute top-20 right-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl"
// // // // // // // // // // //           style={{ 
// // // // // // // // // // //             transformOrigin: 'center center',
// // // // // // // // // // //             animation: 'pulse 15s ease-in-out infinite alternate'
// // // // // // // // // // //           }}
// // // // // // // // // // //         />
// // // // // // // // // // //         <motion.div 
// // // // // // // // // // //           initial={{ opacity: 0 }}
// // // // // // // // // // //           animate={{ opacity: 0.3 }}
// // // // // // // // // // //           transition={{ duration: 1.5, delay: 0.2 }}
// // // // // // // // // // //           className="absolute top-40 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl"
// // // // // // // // // // //           style={{ 
// // // // // // // // // // //             transformOrigin: 'center center',
// // // // // // // // // // //             animation: 'pulse 20s ease-in-out infinite alternate-reverse'
// // // // // // // // // // //           }}
// // // // // // // // // // //         />
// // // // // // // // // // //       </div>

// // // // // // // // // // //       <div className="flex min-h-[calc(100vh-64px)]">
// // // // // // // // // // //         {/* Left Section - Login Image with enhanced effects */}
// // // // // // // // // // //         <motion.div
// // // // // // // // // // //           initial={{ opacity: 0, x: -50 }}
// // // // // // // // // // //           animate={{ opacity: 1, x: 0 }}
// // // // // // // // // // //           transition={{ duration: 0.8 }}
// // // // // // // // // // //           className="hidden lg:block w-1/2 relative bg-cover bg-center rounded-r-3xl overflow-hidden"
// // // // // // // // // // //           style={{ 
// // // // // // // // // // //             backgroundImage: `url(${loginImage})`,
// // // // // // // // // // //           }}
// // // // // // // // // // //         >
// // // // // // // // // // //           {/* Overlay with gradient */}
// // // // // // // // // // //           <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/30" />
          
// // // // // // // // // // //           {/* Animated shine effect */}
// // // // // // // // // // //           <motion.div 
// // // // // // // // // // //             initial={{ left: '-100%', top: '-100%' }}
// // // // // // // // // // //             animate={{ 
// // // // // // // // // // //               left: ['-100%', '200%'],
// // // // // // // // // // //               top: ['-100%', '200%']
// // // // // // // // // // //             }}
// // // // // // // // // // //             transition={{ 
// // // // // // // // // // //               repeat: Infinity, 
// // // // // // // // // // //               duration: 8,
// // // // // // // // // // //               repeatType: 'loop',
// // // // // // // // // // //               ease: "linear"
// // // // // // // // // // //             }}
// // // // // // // // // // //             className="absolute w-1/2 h-1/2 bg-white/5 blur-lg"
// // // // // // // // // // //             style={{ transform: 'rotate(30deg)' }}
// // // // // // // // // // //           />
          
// // // // // // // // // // //           {/* Image shadow */}
// // // // // // // // // // //           <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/20 to-transparent" />
// // // // // // // // // // //         </motion.div>

// // // // // // // // // // //         {/* Right Section - Login Form with enhanced styling */}
// // // // // // // // // // //         <motion.div
// // // // // // // // // // //           initial="hidden"
// // // // // // // // // // //           animate="visible"
// // // // // // // // // // //           variants={containerVariants}
// // // // // // // // // // //           className="w-full lg:w-1/2 flex items-center justify-center p-8"
// // // // // // // // // // //         >
// // // // // // // // // // //           <motion.div 
// // // // // // // // // // //             className="w-full max-w-md bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/50 relative overflow-hidden"
// // // // // // // // // // //             whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
// // // // // // // // // // //             transition={{ duration: 0.3 }}
// // // // // // // // // // //           >
// // // // // // // // // // //             {/* Subtle background pattern */}
// // // // // // // // // // //             <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-violet-50 opacity-50" />
            
// // // // // // // // // // //             <div className="relative z-10">
// // // // // // // // // // //               <motion.div
// // // // // // // // // // //                 variants={itemVariants}
// // // // // // // // // // //                 className="text-center mb-8"
// // // // // // // // // // //               >
// // // // // // // // // // //                 <h1 className="text-3xl font-bold text-gray-800 mb-2">
// // // // // // // // // // //                   Welcome Back!
// // // // // // // // // // //                 </h1>
// // // // // // // // // // //                 <p className="text-gray-600">Please sign in to your account</p>
// // // // // // // // // // //               </motion.div>

// // // // // // // // // // //               <AnimatePresence>
// // // // // // // // // // //                 {error && (
// // // // // // // // // // //                   <motion.div
// // // // // // // // // // //                     initial={{ opacity: 0, y: -10, height: 0 }}
// // // // // // // // // // //                     animate={{ opacity: 1, y: 0, height: 'auto' }}
// // // // // // // // // // //                     exit={{ opacity: 0, height: 0 }}
// // // // // // // // // // //                     className="mb-6"
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <Alert variant="destructive" className="bg-red-50 border border-red-200 rounded-lg">
// // // // // // // // // // //                       <AlertCircle className="h-4 w-4 text-red-600" />
// // // // // // // // // // //                       <AlertDescription className="text-red-600">{error}</AlertDescription>
// // // // // // // // // // //                     </Alert>
// // // // // // // // // // //                   </motion.div>
// // // // // // // // // // //                 )}
// // // // // // // // // // //               </AnimatePresence>

// // // // // // // // // // //               <form onSubmit={handleUserCheck} className="space-y-6">
// // // // // // // // // // //                 <motion.div
// // // // // // // // // // //                   variants={itemVariants}
// // // // // // // // // // //                   className="space-y-2"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   <label className="text-sm font-medium text-gray-700">Store ID</label>
// // // // // // // // // // //                   <div className="relative">
// // // // // // // // // // //                     <motion.input
// // // // // // // // // // //                       type="text"
// // // // // // // // // // //                       value={storeId}
// // // // // // // // // // //                       onChange={(e) => setStoreId(e.target.value)}
// // // // // // // // // // //                       onFocus={() => setActiveField('store')}
// // // // // // // // // // //                       onBlur={() => setActiveField(null)}
// // // // // // // // // // //                       className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none transition-all"
// // // // // // // // // // //                       placeholder="Enter your store ID"
// // // // // // // // // // //                       style={{ boxShadow: activeField === 'store' ? '0 0 0 2px rgba(59, 130, 246, 0.5)' : 'none' }}
// // // // // // // // // // //                     />
// // // // // // // // // // //                     {activeField === 'store' && (
// // // // // // // // // // //                       <motion.div 
// // // // // // // // // // //                         initial={{ width: '0%' }}
// // // // // // // // // // //                         animate={{ width: '100%' }}
// // // // // // // // // // //                         className="absolute bottom-0 left-0 h-0.5 bg-blue-500 rounded-full"
// // // // // // // // // // //                       />
// // // // // // // // // // //                     )}
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </motion.div>

// // // // // // // // // // //                 <motion.div
// // // // // // // // // // //                   variants={itemVariants}
// // // // // // // // // // //                   className="space-y-2"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   <label className="text-sm font-medium text-gray-700">User ID</label>
// // // // // // // // // // //                   <div className="relative">
// // // // // // // // // // //                     <motion.input
// // // // // // // // // // //                       type="text"
// // // // // // // // // // //                       value={id}
// // // // // // // // // // //                       onChange={(e) => setId(e.target.value)}
// // // // // // // // // // //                       onFocus={() => setActiveField('user')}
// // // // // // // // // // //                       onBlur={() => setActiveField(null)}
// // // // // // // // // // //                       className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none transition-all"
// // // // // // // // // // //                       placeholder="Enter your user ID"
// // // // // // // // // // //                       style={{ boxShadow: activeField === 'user' ? '0 0 0 2px rgba(59, 130, 246, 0.5)' : 'none' }}
// // // // // // // // // // //                     />
// // // // // // // // // // //                     {activeField === 'user' && (
// // // // // // // // // // //                       <motion.div 
// // // // // // // // // // //                         initial={{ width: '0%' }}
// // // // // // // // // // //                         animate={{ width: '100%' }}
// // // // // // // // // // //                         className="absolute bottom-0 left-0 h-0.5 bg-blue-500 rounded-full"
// // // // // // // // // // //                       />
// // // // // // // // // // //                     )}
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </motion.div>

// // // // // // // // // // //                 <motion.div
// // // // // // // // // // //                   variants={itemVariants}
// // // // // // // // // // //                   className="space-y-2"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   <label className="text-sm font-medium text-gray-700">Password</label>
// // // // // // // // // // //                   <div className="relative">
// // // // // // // // // // //                     <motion.input
// // // // // // // // // // //                       type="password"
// // // // // // // // // // //                       value={password}
// // // // // // // // // // //                       onChange={(e) => setPassword(e.target.value)}
// // // // // // // // // // //                       onFocus={() => setActiveField('password')}
// // // // // // // // // // //                       onBlur={() => setActiveField(null)}
// // // // // // // // // // //                       className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none transition-all"
// // // // // // // // // // //                       placeholder="Enter your password"
// // // // // // // // // // //                       style={{ boxShadow: activeField === 'password' ? '0 0 0 2px rgba(59, 130, 246, 0.5)' : 'none' }}
// // // // // // // // // // //                     />
// // // // // // // // // // //                     {activeField === 'password' && (
// // // // // // // // // // //                       <motion.div 
// // // // // // // // // // //                         initial={{ width: '0%' }}
// // // // // // // // // // //                         animate={{ width: '100%' }}
// // // // // // // // // // //                         className="absolute bottom-0 left-0 h-0.5 bg-blue-500 rounded-full"
// // // // // // // // // // //                       />
// // // // // // // // // // //                     )}
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </motion.div>

// // // // // // // // // // //                 <motion.button
// // // // // // // // // // //                   variants={itemVariants}
// // // // // // // // // // //                   type="submit"
// // // // // // // // // // //                   disabled={isLoading}
// // // // // // // // // // //                   whileHover={{ scale: 1.02, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
// // // // // // // // // // //                   whileTap={{ scale: 0.98 }}
// // // // // // // // // // //                   className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium transition-all disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   {/* Button shine effect */}
// // // // // // // // // // //                   <motion.div 
// // // // // // // // // // //                     className="absolute inset-0 w-full h-full"
// // // // // // // // // // //                     initial={{ opacity: 0, right: '100%' }}
// // // // // // // // // // //                     whileHover={{ 
// // // // // // // // // // //                       opacity: 1, 
// // // // // // // // // // //                       right: '-120%',
// // // // // // // // // // //                       transition: { duration: 1 }
// // // // // // // // // // //                     }}
// // // // // // // // // // //                     style={{
// // // // // // // // // // //                       background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
// // // // // // // // // // //                       transform: 'skewX(-20deg)'
// // // // // // // // // // //                     }}
// // // // // // // // // // //                   />
                  
// // // // // // // // // // //                   {isLoading ? (
// // // // // // // // // // //                     <span className="flex items-center justify-center">
// // // // // // // // // // //                       <motion.div
// // // // // // // // // // //                         animate={{ rotate: 360 }}
// // // // // // // // // // //                         transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
// // // // // // // // // // //                         className="h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"
// // // // // // // // // // //                       />
// // // // // // // // // // //                       Signing in...
// // // // // // // // // // //                     </span>
// // // // // // // // // // //                   ) : (
// // // // // // // // // // //                     <span className="relative z-10">Sign In</span>
// // // // // // // // // // //                   )}
// // // // // // // // // // //                 </motion.button>
// // // // // // // // // // //               </form>

// // // // // // // // // // //               <motion.div
// // // // // // // // // // //                 variants={itemVariants}
// // // // // // // // // // //                 className="mt-6 text-center"
// // // // // // // // // // //               >
// // // // // // // // // // //                 <p className="text-gray-600">
// // // // // // // // // // //                   Don't have an account?{" "}
// // // // // // // // // // //                   <Link
// // // // // // // // // // //                     to="/signup"
// // // // // // // // // // //                     className="text-blue-600 hover:text-blue-700 font-medium transition-colors relative group"
// // // // // // // // // // //                   >
// // // // // // // // // // //                     Create one now
// // // // // // // // // // //                     <motion.span 
// // // // // // // // // // //                       className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"
// // // // // // // // // // //                     />
// // // // // // // // // // //                   </Link>
// // // // // // // // // // //                 </p>
// // // // // // // // // // //                 <p className="text-gray-600 mt-2">
// // // // // // // // // // //                   Forgot your password?{" "}
// // // // // // // // // // //                   <button
// // // // // // // // // // //                     onClick={() => setIsForgotPasswordOpen(true)}
// // // // // // // // // // //                     className="text-blue-600 hover:text-blue-700 font-medium transition-colors relative group"
// // // // // // // // // // //                   >
// // // // // // // // // // //                     Reset it here
// // // // // // // // // // //                     <motion.span 
// // // // // // // // // // //                       className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"
// // // // // // // // // // //                     />
// // // // // // // // // // //                   </button>
// // // // // // // // // // //                 </p>
// // // // // // // // // // //               </motion.div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </motion.div>
// // // // // // // // // // //         </motion.div>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Forgot Password Modal */}
// // // // // // // // // // //       {isForgotPasswordOpen && (
// // // // // // // // // // //         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
// // // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
// // // // // // // // // // //             <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
// // // // // // // // // // //             <p className="text-gray-600 mb-4">Enter your email address to receive a password reset link.</p>
// // // // // // // // // // //             <input
// // // // // // // // // // //               type="email"
// // // // // // // // // // //               placeholder="Enter your email"
// // // // // // // // // // //               value={email}
// // // // // // // // // // //               onChange={(e) => setEmail(e.target.value)}
// // // // // // // // // // //               className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
// // // // // // // // // // //             />
// // // // // // // // // // //             <button
// // // // // // // // // // //               onClick={handleForgotPassword}
// // // // // // // // // // //               className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
// // // // // // // // // // //             >
// // // // // // // // // // //               Send Reset Link
// // // // // // // // // // //             </button>
// // // // // // // // // // //             {resetMessage && <p className="text-sm text-gray-600 mt-2">{resetMessage}</p>}
// // // // // // // // // // //             <button
// // // // // // // // // // //               onClick={() => setIsForgotPasswordOpen(false)}
// // // // // // // // // // //               className="w-full mt-4 text-gray-600 hover:text-gray-800 transition-colors"
// // // // // // // // // // //             >
// // // // // // // // // // //               Close
// // // // // // // // // // //             </button>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )}

// // // // // // // // // // //       {/* Add floating animated elements */}
// // // // // // // // // // //       <div className="fixed inset-0 pointer-events-none">
// // // // // // // // // // //         <motion.div
// // // // // // // // // // //           animate={{
// // // // // // // // // // //             y: [0, -20, 0],
// // // // // // // // // // //             opacity: [0.5, 0.8, 0.5]
// // // // // // // // // // //           }}
// // // // // // // // // // //           transition={{
// // // // // // // // // // //             duration: 8,
// // // // // // // // // // //             repeat: Infinity,
// // // // // // // // // // //             repeatType: 'loop'
// // // // // // // // // // //           }}
// // // // // // // // // // //           className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-blue-400/30"
// // // // // // // // // // //         />
// // // // // // // // // // //         <motion.div
// // // // // // // // // // //           animate={{
// // // // // // // // // // //             y: [0, 30, 0],
// // // // // // // // // // //             opacity: [0.3, 0.6, 0.3]
// // // // // // // // // // //           }}
// // // // // // // // // // //           transition={{
// // // // // // // // // // //             duration: 10,
// // // // // // // // // // //             repeat: Infinity,
// // // // // // // // // // //             repeatType: 'loop',
// // // // // // // // // // //             delay: 1
// // // // // // // // // // //           }}
// // // // // // // // // // //           className="absolute top-2/3 left-1/3 w-6 h-6 rounded-full bg-purple-400/20"
// // // // // // // // // // //         />
// // // // // // // // // // //         <motion.div
// // // // // // // // // // //           animate={{
// // // // // // // // // // //             y: [0, -15, 0],
// // // // // // // // // // //             opacity: [0.4, 0.7, 0.4]
// // // // // // // // // // //           }}
// // // // // // // // // // //           transition={{
// // // // // // // // // // //             duration: 7,
// // // // // // // // // // //             repeat: Infinity,
// // // // // // // // // // //             repeatType: 'loop',
// // // // // // // // // // //             delay: 2
// // // // // // // // // // //           }}
// // // // // // // // // // //           className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-indigo-400/30"
// // // // // // // // // // //         />
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* CSS for animations */}
// // // // // // // // // // //       <style jsx>{`
// // // // // // // // // // //         @keyframes pulse {
// // // // // // // // // // //           0% { transform: scale(1); opacity: 0.3; }
// // // // // // // // // // //           50% { transform: scale(1.1); opacity: 0.5; }
// // // // // // // // // // //           100% { transform: scale(1); opacity: 0.3; }
// // // // // // // // // // //         }
// // // // // // // // // // //       `}</style>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Login;


// // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // import { useNavigate, Link } from "react-router-dom";
// // // // // // // // // // import { useStore } from "./StoreContext";
// // // // // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // // // // import { Alert, AlertDescription } from "./components/ui/Alert";
// // // // // // // // // // import { AlertCircle, Lock, User, Store, Mail } from "lucide-react"; // Added icons
// // // // // // // // // // import loginImage from './images/login.png';
// // // // // // // // // // import logo from './images/logo.jpg';

// // // // // // // // // // const Login = () => {
// // // // // // // // // //   const [storeId, setStoreId] = useState("");
// // // // // // // // // //   const [password, setPassword] = useState("");
// // // // // // // // // //   const [id, setId] = useState("");
// // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // // // // // //   const [activeField, setActiveField] = useState(null);
// // // // // // // // // //   const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
// // // // // // // // // //   const [email, setEmail] = useState("");
// // // // // // // // // //   const [resetMessage, setResetMessage] = useState("");
// // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // //   const { setStoreName, setStoreId: setStoreInContext, setUserId } = useStore();

// // // // // // // // // //   const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const handleMouseMove = (e) => {
// // // // // // // // // //       const x = e.clientX / window.innerWidth;
// // // // // // // // // //       const y = e.clientY / window.innerHeight;
// // // // // // // // // //       setGradientPosition({ x, y });
// // // // // // // // // //     };
// // // // // // // // // //     window.addEventListener('mousemove', handleMouseMove);
// // // // // // // // // //     return () => window.removeEventListener('mousemove', handleMouseMove);
// // // // // // // // // //   }, []);

// // // // // // // // // //   const handleUserCheck = async (e) => {
// // // // // // // // // //     e.preventDefault();
// // // // // // // // // //     setIsLoading(true);
// // // // // // // // // //     try {
// // // // // // // // // //       const response = await fetch("http://localhost:5001/check_user", {
// // // // // // // // // //         method: "POST",
// // // // // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // // // // //         body: JSON.stringify({ storeId, id: String(id), password }),
// // // // // // // // // //       });
// // // // // // // // // //       const data = await response.json();
// // // // // // // // // //       if (data.message === "User found!") {
// // // // // // // // // //         localStorage.setItem("storeName", data.store_name);
// // // // // // // // // //         localStorage.setItem("storeId", storeId);
// // // // // // // // // //         localStorage.setItem("userId", data.id);
// // // // // // // // // //         localStorage.setItem("userRole", data.role);
// // // // // // // // // //         localStorage.setItem("storeAddress", data.store_address);
// // // // // // // // // //         localStorage.setItem("email", data.email);
// // // // // // // // // //         localStorage.setItem("fullName", data.full_name);
// // // // // // // // // //         localStorage.setItem("phoneNumber", data.phone_number);
// // // // // // // // // //         setStoreName(data.store_name);
// // // // // // // // // //         setStoreInContext(storeId);
// // // // // // // // // //         setUserId(data.id);
// // // // // // // // // //         switch (data.role) {
// // // // // // // // // //           case "admin": navigate("/AdminDashboard"); break;
// // // // // // // // // //           case "manager": navigate("/ManagerDashboard"); break;
// // // // // // // // // //           case "cashier": navigate("/CashierDashboard"); break;
// // // // // // // // // //           default: navigate("/Inter");
// // // // // // // // // //         }
// // // // // // // // // //       } else {
// // // // // // // // // //         setError("Invalid credentials");
// // // // // // // // // //       }
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       setError("Something went wrong. Please try again.");
// // // // // // // // // //     } finally {
// // // // // // // // // //       setIsLoading(false);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleForgotPassword = async () => {
// // // // // // // // // //     try {
// // // // // // // // // //       const response = await fetch("http://localhost:5001/forgot_password", {
// // // // // // // // // //         method: "POST",
// // // // // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // // // // //         body: JSON.stringify({ email }),
// // // // // // // // // //       });
// // // // // // // // // //       const data = await response.json();
// // // // // // // // // //       setResetMessage(response.ok ? data.message : data.message || "Failed to send reset email.");
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       setResetMessage("Something went wrong. Please try again.");
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const containerVariants = {
// // // // // // // // // //     hidden: { opacity: 0, y: 50 },
// // // // // // // // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } },
// // // // // // // // // //   };

// // // // // // // // // //   const itemVariants = {
// // // // // // // // // //     hidden: { opacity: 0, y: 30 },
// // // // // // // // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div
// // // // // // // // // //       className="min-h-screen overflow-hidden"
// // // // // // // // // //       style={{
// // // // // // // // // //         background: `radial-gradient(circle at ${gradientPosition.x * 100}% ${gradientPosition.y * 100}%, #1e3a8a, #a5b4fc, #e0e7ff)`,
// // // // // // // // // //         backgroundSize: '200% 200%',
// // // // // // // // // //         transition: 'background-position 0.5s ease',
// // // // // // // // // //       }}
// // // // // // // // // //     >
// // // // // // // // // //       {/* Header */}
// // // // // // // // // //       <header className="flex justify-between items-center p-4 bg-white/95 backdrop-blur-md shadow-lg z-20">
// // // // // // // // // //         <div className="flex items-center gap-6">
// // // // // // // // // //           <motion.div whileHover={{ scale: 1.1 }} className="w-14 h-14">
// // // // // // // // // //             <Link to="/AboutPage">
// // // // // // // // // //               <img src={logo} alt="Logo" className="w-full h-full object-contain" />
// // // // // // // // // //             </Link>
// // // // // // // // // //           </motion.div>
// // // // // // // // // //           <nav className="flex gap-6">
// // // // // // // // // //             {['Home', 'About', 'Contact'].map((text) => (
// // // // // // // // // //               <Link
// // // // // // // // // //                 key={text}
// // // // // // // // // //                 to={text === 'Home' ? '/' : `/${text}Page`}
// // // // // // // // // //                 className="text-gray-800 font-medium hover:text-indigo-600 transition-colors duration-300 relative group"
// // // // // // // // // //               >
// // // // // // // // // //                 {text}
// // // // // // // // // //                 <motion.span
// // // // // // // // // //                   className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"
// // // // // // // // // //                 />
// // // // // // // // // //               </Link>
// // // // // // // // // //             ))}
// // // // // // // // // //           </nav>
// // // // // // // // // //         </div>
// // // // // // // // // //         <div className="flex gap-4">
// // // // // // // // // //           {['Sign Up', 'Store Review'].map((text) => (
// // // // // // // // // //             <Link key={text} to={`/${text.replace(/\s+/g, '')}`}>
// // // // // // // // // //               <motion.button
// // // // // // // // // //                 whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
// // // // // // // // // //                 whileTap={{ scale: 0.95 }}
// // // // // // // // // //                 className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
// // // // // // // // // //               >
// // // // // // // // // //                 {text}
// // // // // // // // // //               </motion.button>
// // // // // // // // // //             </Link>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>
// // // // // // // // // //       </header>

// // // // // // // // // //       {/* Main Content */}
// // // // // // // // // //       <div className="flex min-h-[calc(100vh-80px)]">
// // // // // // // // // //         {/* Left Section - Image */}
// // // // // // // // // //         <motion.div
// // // // // // // // // //           initial={{ opacity: 0, x: -100 }}
// // // // // // // // // //           animate={{ opacity: 1, x: 0 }}
// // // // // // // // // //           transition={{ duration: 1 }}
// // // // // // // // // //           className="hidden lg:block w-1/2 bg-cover bg-center relative overflow-hidden"
// // // // // // // // // //           style={{ backgroundImage: `url(${loginImage})` }}
// // // // // // // // // //         >
// // // // // // // // // //           <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent" />
// // // // // // // // // //           <motion.div
// // // // // // // // // //             animate={{ scale: [1, 1.05, 1] }}
// // // // // // // // // //             transition={{ duration: 5, repeat: Infinity }}
// // // // // // // // // //             className="absolute inset-0 bg-white/10 backdrop-blur-sm"
// // // // // // // // // //           />
// // // // // // // // // //           <div className="absolute bottom-10 left-10 text-white">
// // // // // // // // // //             <h2 className="text-4xl font-bold">Secure Access</h2>
// // // // // // // // // //             <p className="text-lg mt-2">Login to manage your store effortlessly</p>
// // // // // // // // // //           </div>
// // // // // // // // // //         </motion.div>

// // // // // // // // // //         {/* Right Section - Form */}
// // // // // // // // // //         <motion.div
// // // // // // // // // //           initial="hidden"
// // // // // // // // // //           animate="visible"
// // // // // // // // // //           variants={containerVariants}
// // // // // // // // // //           className="w-full lg:w-1/2 flex items-center justify-center p-8"
// // // // // // // // // //         >
// // // // // // // // // //           <motion.div
// // // // // // // // // //             className="w-full max-w-lg bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-gray-100"
// // // // // // // // // //             whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
// // // // // // // // // //             transition={{ duration: 0.3 }}
// // // // // // // // // //           >
// // // // // // // // // //             <motion.div variants={itemVariants} className="text-center mb-8">
// // // // // // // // // //               <h1 className="text-4xl font-extrabold text-gray-900 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
// // // // // // // // // //                 Welcome Back
// // // // // // // // // //               </h1>
// // // // // // // // // //               <p className="text-gray-500 mt-2">Sign in to continue</p>
// // // // // // // // // //             </motion.div>

// // // // // // // // // //             <AnimatePresence>
// // // // // // // // // //               {error && (
// // // // // // // // // //                 <motion.div
// // // // // // // // // //                   initial={{ opacity: 0, y: -20 }}
// // // // // // // // // //                   animate={{ opacity: 1, y: 0 }}
// // // // // // // // // //                   exit={{ opacity: 0, y: -20 }}
// // // // // // // // // //                   className="mb-6"
// // // // // // // // // //                 >
// // // // // // // // // //                   <Alert variant="destructive" className="bg-red-50 border-red-300 rounded-xl">
// // // // // // // // // //                     <AlertCircle className="h-5 w-5 text-red-600" />
// // // // // // // // // //                     <AlertDescription className="text-red-600 font-medium">{error}</AlertDescription>
// // // // // // // // // //                   </Alert>
// // // // // // // // // //                 </motion.div>
// // // // // // // // // //               )}
// // // // // // // // // //             </AnimatePresence>

// // // // // // // // // //             <form onSubmit={handleUserCheck} className="space-y-6">
// // // // // // // // // //               <motion.div variants={itemVariants}>
// // // // // // // // // //                 <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
// // // // // // // // // //                   <Store className="w-5 h-5 mr-2 text-indigo-600" /> Store ID
// // // // // // // // // //                 </label>
// // // // // // // // // //                 <motion.input
// // // // // // // // // //                   type="text"
// // // // // // // // // //                   value={storeId}
// // // // // // // // // //                   onChange={(e) => setStoreId(e.target.value)}
// // // // // // // // // //                   onFocus={() => setActiveField('store')}
// // // // // // // // // //                   onBlur={() => setActiveField(null)}
// // // // // // // // // //                   className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
// // // // // // // // // //                   placeholder="Enter store ID"
// // // // // // // // // //                   whileFocus={{ scale: 1.02 }}
// // // // // // // // // //                 />
// // // // // // // // // //               </motion.div>

// // // // // // // // // //               <motion.div variants={itemVariants}>
// // // // // // // // // //                 <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
// // // // // // // // // //                   <User className="w-5 h-5 mr-2 text-indigo-600" /> User ID
// // // // // // // // // //                 </label>
// // // // // // // // // //                 <motion.input
// // // // // // // // // //                   type="text"
// // // // // // // // // //                   value={id}
// // // // // // // // // //                   onChange={(e) => setId(e.target.value)}
// // // // // // // // // //                   onFocus={() => setActiveField('user')}
// // // // // // // // // //                   onBlur={() => setActiveField(null)}
// // // // // // // // // //                   className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
// // // // // // // // // //                   placeholder="Enter user ID"
// // // // // // // // // //                   whileFocus={{ scale: 1.02 }}
// // // // // // // // // //                 />
// // // // // // // // // //               </motion.div>

// // // // // // // // // //               <motion.div variants={itemVariants}>
// // // // // // // // // //                 <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
// // // // // // // // // //                   <Lock className="w-5 h-5 mr-2 text-indigo-600" /> Password
// // // // // // // // // //                 </label>
// // // // // // // // // //                 <motion.input
// // // // // // // // // //                   type="password"
// // // // // // // // // //                   value={password}
// // // // // // // // // //                   onChange={(e) => setPassword(e.target.value)}
// // // // // // // // // //                   onFocus={() => setActiveField('password')}
// // // // // // // // // //                   onBlur={() => setActiveField(null)}
// // // // // // // // // //                   className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
// // // // // // // // // //                   placeholder="Enter password"
// // // // // // // // // //                   whileFocus={{ scale: 1.02 }}
// // // // // // // // // //                 />
// // // // // // // // // //               </motion.div>

// // // // // // // // // //               <motion.button
// // // // // // // // // //                 variants={itemVariants}
// // // // // // // // // //                 type="submit"
// // // // // // // // // //                 disabled={isLoading}
// // // // // // // // // //                 whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
// // // // // // // // // //                 whileTap={{ scale: 0.95 }}
// // // // // // // // // //                 className="w-full py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
// // // // // // // // // //               >
// // // // // // // // // //                 {isLoading ? (
// // // // // // // // // //                   <span className="flex items-center justify-center">
// // // // // // // // // //                     <motion.div
// // // // // // // // // //                       animate={{ rotate: 360 }}
// // // // // // // // // //                       transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
// // // // // // // // // //                       className="h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"
// // // // // // // // // //                     />
// // // // // // // // // //                     Signing In...
// // // // // // // // // //                   </span>
// // // // // // // // // //                 ) : (
// // // // // // // // // //                   "Sign In"
// // // // // // // // // //                 )}
// // // // // // // // // //               </motion.button>
// // // // // // // // // //             </form>

// // // // // // // // // //             <motion.div variants={itemVariants} className="mt-6 text-center text-gray-600">
// // // // // // // // // //               <p>
// // // // // // // // // //                 Don’t have an account?{" "}
// // // // // // // // // //                 <Link to="/signup" className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors">
// // // // // // // // // //                   Sign Up
// // // // // // // // // //                 </Link>
// // // // // // // // // //               </p>
// // // // // // // // // //               <p className="mt-2">
// // // // // // // // // //                 Forgot password?{" "}
// // // // // // // // // //                 <button
// // // // // // // // // //                   onClick={() => setIsForgotPasswordOpen(true)}
// // // // // // // // // //                   className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
// // // // // // // // // //                 >
// // // // // // // // // //                   Reset Now
// // // // // // // // // //                 </button>
// // // // // // // // // //               </p>
// // // // // // // // // //             </motion.div>
// // // // // // // // // //           </motion.div>
// // // // // // // // // //         </motion.div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Forgot Password Modal */}
// // // // // // // // // //       {isForgotPasswordOpen && (
// // // // // // // // // //         <motion.div
// // // // // // // // // //           initial={{ opacity: 0 }}
// // // // // // // // // //           animate={{ opacity: 1 }}
// // // // // // // // // //           exit={{ opacity: 0 }}
// // // // // // // // // //           className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
// // // // // // // // // //         >
// // // // // // // // // //           <motion.div
// // // // // // // // // //             initial={{ scale: 0.9, y: 50 }}
// // // // // // // // // //             animate={{ scale: 1, y: 0 }}
// // // // // // // // // //             className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
// // // // // // // // // //           >
// // // // // // // // // //             <h2 className="text-2xl font-bold text-gray-800 mb-4">Reset Password</h2>
// // // // // // // // // //             <p className="text-gray-500 mb-6">Enter your email to receive a reset link.</p>
// // // // // // // // // //             <div className="relative">
// // // // // // // // // //               <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 w-5 h-5" />
// // // // // // // // // //               <input
// // // // // // // // // //                 type="email"
// // // // // // // // // //                 placeholder="Your email"
// // // // // // // // // //                 value={email}
// // // // // // // // // //                 onChange={(e) => setEmail(e.target.value)}
// // // // // // // // // //                 className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
// // // // // // // // // //               />
// // // // // // // // // //             </div>
// // // // // // // // // //             <motion.button
// // // // // // // // // //               whileHover={{ scale: 1.05 }}
// // // // // // // // // //               whileTap={{ scale: 0.95 }}
// // // // // // // // // //               onClick={handleForgotPassword}
// // // // // // // // // //               className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all"
// // // // // // // // // //             >
// // // // // // // // // //               Send Reset Link
// // // // // // // // // //             </motion.button>
// // // // // // // // // //             {resetMessage && <p className="text-sm text-gray-600 mt-4">{resetMessage}</p>}
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={() => setIsForgotPasswordOpen(false)}
// // // // // // // // // //               className="w-full mt-4 text-indigo-600 hover:text-indigo-800 font-medium"
// // // // // // // // // //             >
// // // // // // // // // //               Close
// // // // // // // // // //             </button>
// // // // // // // // // //           </motion.div>
// // // // // // // // // //         </motion.div>
// // // // // // // // // //       )}

// // // // // // // // // //       {/* Floating Elements */}
// // // // // // // // // //       <div className="fixed inset-0 pointer-events-none">
// // // // // // // // // //         <motion.div
// // // // // // // // // //           animate={{ y: [-20, 20, -20], opacity: [0.3, 0.6, 0.3] }}
// // // // // // // // // //           transition={{ duration: 6, repeat: Infinity }}
// // // // // // // // // //           className="absolute top-1/4 left-1/5 w-8 h-8 bg-indigo-400/20 rounded-full blur-md"
// // // // // // // // // //         />
// // // // // // // // // //         <motion.div
// // // // // // // // // //           animate={{ y: [30, -30, 30], opacity: [0.2, 0.5, 0.2] }}
// // // // // // // // // //           transition={{ duration: 8, repeat: Infinity, delay: 1 }}
// // // // // // // // // //           className="absolute top-3/4 right-1/4 w-10 h-10 bg-blue-400/20 rounded-full blur-md"
// // // // // // // // // //         />
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Login;
// // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // import { useNavigate, Link } from "react-router-dom";
// // // // // // // // // import { useStore } from "./StoreContext";
// // // // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // // // import { Alert, AlertDescription } from "./components/ui/Alert";
// // // // // // // // // import { AlertCircle, Store, User, Lock, Mail, ArrowRight, Loader2 } from "lucide-react";
// // // // // // // // // import loginImage from './images/login.png';
// // // // // // // // // import logo from './images/logo.jpg';

// // // // // // // // // const Login = () => {
// // // // // // // // //   const [storeId, setStoreId] = useState("");
// // // // // // // // //   const [password, setPassword] = useState("");
// // // // // // // // //   const [id, setId] = useState("");
// // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // // // // //   const [activeField, setActiveField] = useState(null);
// // // // // // // // //   const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
// // // // // // // // //   const [email, setEmail] = useState("");
// // // // // // // // //   const [resetMessage, setResetMessage] = useState("");
// // // // // // // // //   const navigate = useNavigate();
// // // // // // // // //   const { setStoreName, setStoreId: setStoreInContext, setUserId } = useStore();

// // // // // // // // //   // Mouse position for interactive elements
// // // // // // // // //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const handleMouseMove = (e) => {
// // // // // // // // //       const x = e.clientX / window.innerWidth;
// // // // // // // // //       const y = e.clientY / window.innerHeight;
// // // // // // // // //       setMousePosition({ x, y });
// // // // // // // // //     };

// // // // // // // // //     window.addEventListener('mousemove', handleMouseMove);
// // // // // // // // //     return () => {
// // // // // // // // //       window.removeEventListener('mousemove', handleMouseMove);
// // // // // // // // //     };
// // // // // // // // //   }, []);

// // // // // // // // //   const handleUserCheck = async (e) => {
// // // // // // // // //     e.preventDefault();
// // // // // // // // //     setIsLoading(true);
  
// // // // // // // // //     try {
// // // // // // // // //       const response = await fetch("http://localhost:5001/check_user", {
// // // // // // // // //         method: "POST",
// // // // // // // // //         headers: {
// // // // // // // // //           "Content-Type": "application/json",
// // // // // // // // //         },
// // // // // // // // //         body: JSON.stringify({
// // // // // // // // //           storeId,
// // // // // // // // //           id: String(id),
// // // // // // // // //           password,
// // // // // // // // //         }),
// // // // // // // // //       });
  
// // // // // // // // //       const data = await response.json();
  
// // // // // // // // //       if (data.message === "User found!") {
// // // // // // // // //         // Success animation before redirect
// // // // // // // // //         setTimeout(() => {
// // // // // // // // //           // Store user and store details in localStorage
// // // // // // // // //           localStorage.setItem("storeName", data.store_name);
// // // // // // // // //           localStorage.setItem("storeId", storeId);
// // // // // // // // //           localStorage.setItem("userId", data.id);
// // // // // // // // //           localStorage.setItem("userRole", data.role);
// // // // // // // // //           localStorage.setItem("storeAddress", data.store_address);
// // // // // // // // //           localStorage.setItem("email", data.email);
// // // // // // // // //           localStorage.setItem("fullName", data.full_name);
// // // // // // // // //           localStorage.setItem("phoneNumber", data.phone_number);
    
// // // // // // // // //           // Set context or state if needed
// // // // // // // // //           setStoreName(data.store_name);
// // // // // // // // //           setStoreInContext(storeId);
// // // // // // // // //           setUserId(data.id);
    
// // // // // // // // //           // Redirect based on user role
// // // // // // // // //           switch (data.role) {
// // // // // // // // //             case "admin":
// // // // // // // // //               navigate("/AdminDashboard");
// // // // // // // // //               break;
// // // // // // // // //             case "manager":
// // // // // // // // //               navigate("/ManagerDashboard");
// // // // // // // // //               break;
// // // // // // // // //             case "cashier":
// // // // // // // // //               navigate("/CashierDashboard");
// // // // // // // // //               break;
// // // // // // // // //             default:
// // // // // // // // //               navigate("/Inter");
// // // // // // // // //           }
// // // // // // // // //         }, 600);
// // // // // // // // //       } else {
// // // // // // // // //         setError("Invalid credentials");
// // // // // // // // //       }
// // // // // // // // //     } catch (err) {
// // // // // // // // //       setError("Something went wrong. Please try again.");
// // // // // // // // //     } finally {
// // // // // // // // //       setIsLoading(false);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleForgotPassword = async () => {
// // // // // // // // //     if (!email) {
// // // // // // // // //       setResetMessage("Please enter your email address");
// // // // // // // // //       return;
// // // // // // // // //     }

// // // // // // // // //     setResetMessage("");
// // // // // // // // //     setIsLoading(true);
    
// // // // // // // // //     try {
// // // // // // // // //       const response = await fetch("http://localhost:5001/forgot_password", {
// // // // // // // // //         method: "POST",
// // // // // // // // //         headers: {
// // // // // // // // //           "Content-Type": "application/json",
// // // // // // // // //         },
// // // // // // // // //         body: JSON.stringify({ email }),
// // // // // // // // //       });

// // // // // // // // //       const data = await response.json();

// // // // // // // // //       if (response.ok) {
// // // // // // // // //         setResetMessage(data.message);
// // // // // // // // //       } else {
// // // // // // // // //         setResetMessage(data.message || "Failed to send reset email.");
// // // // // // // // //       }
// // // // // // // // //     } catch (error) {
// // // // // // // // //       setResetMessage("Something went wrong. Please try again.");
// // // // // // // // //     } finally {
// // // // // // // // //       setIsLoading(false);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   // Animation variants
// // // // // // // // //   const containerVariants = {
// // // // // // // // //     hidden: { opacity: 0 },
// // // // // // // // //     visible: { 
// // // // // // // // //       opacity: 1,
// // // // // // // // //       transition: { 
// // // // // // // // //         duration: 0.8,
// // // // // // // // //         staggerChildren: 0.08,
// // // // // // // // //       }
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const itemVariants = {
// // // // // // // // //     hidden: { opacity: 0, y: 15 },
// // // // // // // // //     visible: { 
// // // // // // // // //       opacity: 1, 
// // // // // // // // //       y: 0,
// // // // // // // // //       transition: { duration: 0.5, ease: "easeOut" }
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const buttonVariants = {
// // // // // // // // //     rest: { scale: 1 },
// // // // // // // // //     hover: { 
// // // // // // // // //       scale: 1.02,
// // // // // // // // //       boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
// // // // // // // // //       transition: { 
// // // // // // // // //         duration: 0.3,
// // // // // // // // //         ease: "easeInOut"
// // // // // // // // //       }
// // // // // // // // //     },
// // // // // // // // //     tap: { 
// // // // // // // // //       scale: 0.98,
// // // // // // // // //       boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div 
// // // // // // // // //       className="min-h-screen overflow-hidden relative text-gray-800 font-sans"
// // // // // // // // //       style={{
// // // // // // // // //         background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, #e0ecff 0%, #f5f9ff 40%, #edf6ff 100%)`,
// // // // // // // // //         backgroundSize: '200% 200%',
// // // // // // // // //         transition: 'background-position 0.3s ease'
// // // // // // // // //       }}
// // // // // // // // //     >
// // // // // // // // //       {/* Background Decorative Elements */}
// // // // // // // // //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // // // // // // // //         <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-gradient-to-br from-blue-200/40 to-indigo-300/40 rounded-full blur-3xl" />
// // // // // // // // //         <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-96 h-96 bg-gradient-to-tr from-purple-200/30 to-blue-200/30 rounded-full blur-3xl" />
// // // // // // // // //         <svg className="absolute -bottom-48 -right-48 w-96 h-96 text-indigo-100 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
// // // // // // // // //           <path fill="currentColor" d="M45.3,-51.8C58.9,-35.3,70.3,-17.6,71.9,1.6C73.4,20.8,65.2,41.6,51.6,55.5C38.1,69.3,19,76.3,-0.9,77.2C-20.8,78.2,-41.6,73.2,-57.8,59.3C-73.9,45.5,-85.3,22.7,-85,0.3C-84.8,-22.1,-72.9,-44.2,-56.7,-60.7C-40.4,-77.1,-20.2,-87.9,-1.3,-86.6C17.6,-85.3,31.7,-68.3,45.3,-51.8Z" transform="translate(100 100)" />
// // // // // // // // //         </svg>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Navigation Bar */}
// // // // // // // // //       <motion.header 
// // // // // // // // //         initial={{ y: -20, opacity: 0 }}
// // // // // // // // //         animate={{ y: 0, opacity: 1 }}
// // // // // // // // //         transition={{ duration: 0.5 }}
// // // // // // // // //         className="flex justify-between items-center p-4 z-10 relative"
// // // // // // // // //       >
// // // // // // // // //         <div className="flex items-center gap-5">
// // // // // // // // //           <motion.div 
// // // // // // // // //             whileHover={{ scale: 1.05, rotate: 3 }}
// // // // // // // // //             className="w-12 h-12 overflow-hidden rounded-full shadow-lg"
// // // // // // // // //           >
// // // // // // // // //             <Link to="/AboutPage">
// // // // // // // // //               <img src={logo} alt="Logo" className="w-full h-full object-cover" />
// // // // // // // // //             </Link>
// // // // // // // // //           </motion.div>
// // // // // // // // //           <nav className="hidden md:flex gap-6">
// // // // // // // // //             {[
// // // // // // // // //               { name: "Home", path: "/" },
// // // // // // // // //               { name: "About", path: "/AboutPage" },
// // // // // // // // //               { name: "Contact", path: "/ContactUs" }
// // // // // // // // //             ].map((item, index) => (
// // // // // // // // //               <Link 
// // // // // // // // //                 key={index}
// // // // // // // // //                 to={item.path} 
// // // // // // // // //                 className="relative text-gray-700 font-medium no-underline hover:text-blue-600 transition-colors group"
// // // // // // // // //               >
// // // // // // // // //                 {item.name}
// // // // // // // // //                 <motion.span 
// // // // // // // // //                   initial={{ width: 0 }}
// // // // // // // // //                   whileHover={{ width: "100%" }}
// // // // // // // // //                   transition={{ duration: 0.3 }}
// // // // // // // // //                   className="absolute -bottom-1 left-0 h-0.5 bg-blue-500 rounded-full"
// // // // // // // // //                 />
// // // // // // // // //               </Link>
// // // // // // // // //             ))}
// // // // // // // // //           </nav>
// // // // // // // // //         </div>
        
// // // // // // // // //         <div className="flex gap-3">
// // // // // // // // //           {[
// // // // // // // // //             { name: "Sign Up", path: "/SignUp" },
// // // // // // // // //             { name: "Store Review", path: "/StoreReview" }
// // // // // // // // //           ].map((item, index) => (
// // // // // // // // //             <Link key={index} to={item.path}>
// // // // // // // // //               <motion.button 
// // // // // // // // //                 whileHover={{ scale: 1.03, y: -2 }}
// // // // // // // // //                 whileTap={{ scale: 0.97 }}
// // // // // // // // //                 className={`px-4 py-2 rounded-lg text-sm font-medium shadow-md 
// // // // // // // // //                   ${index === 0 
// // // // // // // // //                     ? "bg-white text-blue-600 border border-blue-200 hover:border-blue-400" 
// // // // // // // // //                     : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"} 
// // // // // // // // //                   transition-all duration-300`}
// // // // // // // // //               >
// // // // // // // // //                 {item.name}
// // // // // // // // //               </motion.button>
// // // // // // // // //             </Link>
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //       </motion.header>

// // // // // // // // //       <div className="flex min-h-[calc(100vh-80px)] items-center">
// // // // // // // // //         {/* Left Section - Login Image with enhanced effects */}
// // // // // // // // //         <motion.div
// // // // // // // // //           initial={{ opacity: 0, x: -50 }}
// // // // // // // // //           animate={{ opacity: 1, x: 0 }}
// // // // // // // // //           transition={{ duration: 0.8, delay: 0.2 }}
// // // // // // // // //           className="hidden lg:block w-1/2 relative overflow-hidden h-screen"
// // // // // // // // //         >
// // // // // // // // //           {/* Decorative layer */}
// // // // // // // // //           <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-500/10 to-purple-500/20 mix-blend-overlay" />
          
// // // // // // // // //           <div className="relative h-full">
// // // // // // // // //             {/* Image container with mask */}
// // // // // // // // //             <div className="absolute inset-12 overflow-hidden rounded-3xl shadow-2xl">
// // // // // // // // //               <div 
// // // // // // // // //                 className="absolute inset-0 bg-cover bg-center"
// // // // // // // // //                 style={{ 
// // // // // // // // //                   backgroundImage: `url(${loginImage})`,
// // // // // // // // //                   filter: "brightness(1.05) contrast(1.05)",
// // // // // // // // //                 }}
// // // // // // // // //               />
              
// // // // // // // // //               {/* Glass overlay */}
// // // // // // // // //               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-500/20 to-purple-500/30 mix-blend-overlay" />
              
// // // // // // // // //               {/* Animated moving gradient */}
// // // // // // // // //               <motion.div 
// // // // // // // // //                 initial={{ backgroundPosition: "0% 0%" }}
// // // // // // // // //                 animate={{ 
// // // // // // // // //                   backgroundPosition: ["0% 0%", "100% 100%"]
// // // // // // // // //                 }}
// // // // // // // // //                 transition={{ 
// // // // // // // // //                   repeat: Infinity, 
// // // // // // // // //                   repeatType: "mirror",
// // // // // // // // //                   duration: 8,
// // // // // // // // //                   ease: "linear"
// // // // // // // // //                 }}
// // // // // // // // //                 className="absolute inset-0"
// // // // // // // // //                 style={{
// // // // // // // // //                   background: "linear-gradient(45deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 60%)",
// // // // // // // // //                   backgroundSize: "200% 200%"
// // // // // // // // //                 }}
// // // // // // // // //               />
// // // // // // // // //             </div>
            
// // // // // // // // //             {/* Decorative rings */}
// // // // // // // // //             <div className="absolute -bottom-20 -left-20 w-64 h-64 border-2 border-blue-200/30 rounded-full" />
// // // // // // // // //             <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-indigo-200/30 rounded-full" />
// // // // // // // // //             <div className="absolute top-40 -right-5 w-20 h-20 border border-purple-200/30 rounded-full" />
// // // // // // // // //           </div>
// // // // // // // // //         </motion.div>

// // // // // // // // //         {/* Right Section - Login Form */}
// // // // // // // // //         <motion.div
// // // // // // // // //           initial="hidden"
// // // // // // // // //           animate="visible"
// // // // // // // // //           variants={containerVariants}
// // // // // // // // //           className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-8 lg:p-12"
// // // // // // // // //         >
// // // // // // // // //           <motion.div 
// // // // // // // // //             className="w-full max-w-md"
// // // // // // // // //             variants={itemVariants}
// // // // // // // // //           >
// // // // // // // // //             <motion.div
// // // // // // // // //               variants={itemVariants}
// // // // // // // // //               className="text-center mb-8"
// // // // // // // // //             >
// // // // // // // // //               <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
// // // // // // // // //                 Welcome Back
// // // // // // // // //               </h1>
// // // // // // // // //               <p className="text-gray-600">Sign in to your account to continue</p>
// // // // // // // // //             </motion.div>

// // // // // // // // //             <motion.div
// // // // // // // // //               variants={itemVariants}
// // // // // // // // //               className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/50 p-8 relative overflow-hidden"
// // // // // // // // //             >
// // // // // // // // //               {/* Subtle card pattern */}
// // // // // // // // //               <div className="absolute inset-0 opacity-10">
// // // // // // // // //                 <svg width="100%" height="100%" className="text-blue-500">
// // // // // // // // //                   <pattern id="pattern-circles" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
// // // // // // // // //                     <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="currentColor"></circle>
// // // // // // // // //                   </pattern>
// // // // // // // // //                   <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
// // // // // // // // //                 </svg>
// // // // // // // // //               </div>

// // // // // // // // //               <AnimatePresence>
// // // // // // // // //                 {error && (
// // // // // // // // //                   <motion.div
// // // // // // // // //                     initial={{ opacity: 0, y: -10, height: 0 }}
// // // // // // // // //                     animate={{ opacity: 1, y: 0, height: 'auto' }}
// // // // // // // // //                     exit={{ opacity: 0, height: 0 }}
// // // // // // // // //                     className="mb-6 relative z-10"
// // // // // // // // //                   >
// // // // // // // // //                     <Alert variant="destructive" className="bg-red-50 border border-red-200 rounded-lg flex items-center p-3">
// // // // // // // // //                       <AlertCircle className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
// // // // // // // // //                       <AlertDescription className="text-red-600 text-sm">{error}</AlertDescription>
// // // // // // // // //                     </Alert>
// // // // // // // // //                   </motion.div>
// // // // // // // // //                 )}
// // // // // // // // //               </AnimatePresence>

// // // // // // // // //               <form onSubmit={handleUserCheck} className="space-y-5 relative z-10">
// // // // // // // // //                 <motion.div variants={itemVariants} className="space-y-2">
// // // // // // // // //                   <label className="text-sm font-medium text-gray-700 flex items-center">
// // // // // // // // //                     <Store className="w-4 h-4 mr-2 text-blue-500" />
// // // // // // // // //                     Store ID
// // // // // // // // //                   </label>
// // // // // // // // //                   <div className="relative group">
// // // // // // // // //                     <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
// // // // // // // // //                       <Store className="w-5 h-5" />
// // // // // // // // //                     </div>
// // // // // // // // //                     <input
// // // // // // // // //                       type="text"
// // // // // // // // //                       value={storeId}
// // // // // // // // //                       onChange={(e) => setStoreId(e.target.value)}
// // // // // // // // //                       onFocus={() => setActiveField('store')}
// // // // // // // // //                       onBlur={() => setActiveField(null)}
// // // // // // // // //                       className="w-full pl-10 pr-4 py-3 bg-white/70 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
// // // // // // // // //                       placeholder="Enter store ID"
// // // // // // // // //                     />
// // // // // // // // //                     {activeField === 'store' && (
// // // // // // // // //                       <motion.div 
// // // // // // // // //                         initial={{ width: '0%' }}
// // // // // // // // //                         animate={{ width: '100%' }}
// // // // // // // // //                         className="absolute bottom-0 left-0 h-0.5 bg-blue-500 rounded-full"
// // // // // // // // //                       />
// // // // // // // // //                     )}
// // // // // // // // //                   </div>
// // // // // // // // //                 </motion.div>

// // // // // // // // //                 <motion.div variants={itemVariants} className="space-y-2">
// // // // // // // // //                   <label className="text-sm font-medium text-gray-700 flex items-center">
// // // // // // // // //                     <User className="w-4 h-4 mr-2 text-blue-500" />
// // // // // // // // //                     User ID
// // // // // // // // //                   </label>
// // // // // // // // //                   <div className="relative group">
// // // // // // // // //                     <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
// // // // // // // // //                       <User className="w-5 h-5" />
// // // // // // // // //                     </div>
// // // // // // // // //                     <input
// // // // // // // // //                       type="text"
// // // // // // // // //                       value={id}
// // // // // // // // //                       onChange={(e) => setId(e.target.value)}
// // // // // // // // //                       onFocus={() => setActiveField('user')}
// // // // // // // // //                       onBlur={() => setActiveField(null)}
// // // // // // // // //                       className="w-full pl-10 pr-4 py-3 bg-white/70 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
// // // // // // // // //                       placeholder="Enter user ID"
// // // // // // // // //                     />
// // // // // // // // //                     {activeField === 'user' && (
// // // // // // // // //                       <motion.div 
// // // // // // // // //                         initial={{ width: '0%' }}
// // // // // // // // //                         animate={{ width: '100%' }}
// // // // // // // // //                         className="absolute bottom-0 left-0 h-0.5 bg-blue-500 rounded-full"
// // // // // // // // //                       />
// // // // // // // // //                     )}
// // // // // // // // //                   </div>
// // // // // // // // //                 </motion.div>

// // // // // // // // //                 <motion.div variants={itemVariants} className="space-y-2">
// // // // // // // // //                   <label className="text-sm font-medium text-gray-700 flex items-center">
// // // // // // // // //                     <Lock className="w-4 h-4 mr-2 text-blue-500" />
// // // // // // // // //                     Password
// // // // // // // // //                   </label>
// // // // // // // // //                   <div className="relative group">
// // // // // // // // //                     <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
// // // // // // // // //                       <Lock className="w-5 h-5" />
// // // // // // // // //                     </div>
// // // // // // // // //                     <input
// // // // // // // // //                       type="password"
// // // // // // // // //                       value={password}
// // // // // // // // //                       onChange={(e) => setPassword(e.target.value)}
// // // // // // // // //                       onFocus={() => setActiveField('password')}
// // // // // // // // //                       onBlur={() => setActiveField(null)}
// // // // // // // // //                       className="w-full pl-10 pr-4 py-3 bg-white/70 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
// // // // // // // // //                       placeholder="Enter password"
// // // // // // // // //                     />
// // // // // // // // //                     {activeField === 'password' && (
// // // // // // // // //                       <motion.div 
// // // // // // // // //                         initial={{ width: '0%' }}
// // // // // // // // //                         animate={{ width: '100%' }}
// // // // // // // // //                         className="absolute bottom-0 left-0 h-0.5 bg-blue-500 rounded-full"
// // // // // // // // //                       />
// // // // // // // // //                     )}
// // // // // // // // //                   </div>
// // // // // // // // //                 </motion.div>

// // // // // // // // //                 <motion.button
// // // // // // // // //                   variants={buttonVariants}
// // // // // // // // //                   initial="rest"
// // // // // // // // //                   whileHover="hover"
// // // // // // // // //                   whileTap="tap"
// // // // // // // // //                   type="submit"
// // // // // // // // //                   disabled={isLoading}
// // // // // // // // //                   className="w-full py-3.5 px-4 mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium text-sm shadow-lg shadow-blue-500/20 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden flex items-center justify-center gap-2"
// // // // // // // // //                 >
// // // // // // // // //                   {/* Button animation */}
// // // // // // // // //                   <motion.div 
// // // // // // // // //                     className="absolute inset-0 w-full h-full"
// // // // // // // // //                     initial={{ opacity: 0, right: '100%' }}
// // // // // // // // //                     whileHover={{ 
// // // // // // // // //                       opacity: 1, 
// // // // // // // // //                       right: '-180%',
// // // // // // // // //                       transition: { duration: 1.5, repeat: Infinity }
// // // // // // // // //                     }}
// // // // // // // // //                     style={{
// // // // // // // // //                       background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
// // // // // // // // //                       transform: 'skewX(-30deg)'
// // // // // // // // //                     }}
// // // // // // // // //                   />
                  
// // // // // // // // //                   {isLoading ? (
// // // // // // // // //                     <>
// // // // // // // // //                       <Loader2 className="h-5 w-5 animate-spin" />
// // // // // // // // //                       <span>Signing in...</span>
// // // // // // // // //                     </>
// // // // // // // // //                   ) : (
// // // // // // // // //                     <>
// // // // // // // // //                       <span className="relative z-10">Sign In</span>
// // // // // // // // //                       <ArrowRight className="w-4 h-4" />
// // // // // // // // //                     </>
// // // // // // // // //                   )}
// // // // // // // // //                 </motion.button>
// // // // // // // // //               </form>

// // // // // // // // //               <motion.div
// // // // // // // // //                 variants={itemVariants}
// // // // // // // // //                 className="mt-6 text-center"
// // // // // // // // //               >
// // // // // // // // //                 <div className="flex items-center justify-center space-x-2 text-sm">
// // // // // // // // //                   <span className="text-gray-500">Don't have an account?</span>
// // // // // // // // //                   <Link
// // // // // // // // //                     to="/signup"
// // // // // // // // //                     className="text-blue-600 hover:text-blue-700 font-medium transition-colors relative group"
// // // // // // // // //                   >
// // // // // // // // //                     Create account
// // // // // // // // //                     <motion.span 
// // // // // // // // //                       initial={{ width: 0 }}
// // // // // // // // //                       whileHover={{ width: "100%" }}
// // // // // // // // //                       transition={{ duration: 0.3 }}
// // // // // // // // //                       className="absolute -bottom-0.5 left-0 h-0.5 bg-blue-600 rounded-full"
// // // // // // // // //                     />
// // // // // // // // //                   </Link>
// // // // // // // // //                 </div>
// // // // // // // // //                 <div className="mt-3">
// // // // // // // // //                   <button
// // // // // // // // //                     onClick={() => setIsForgotPasswordOpen(true)}
// // // // // // // // //                     className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
// // // // // // // // //                   >
// // // // // // // // //                     Forgot your password?
// // // // // // // // //                   </button>
// // // // // // // // //                 </div>
// // // // // // // // //               </motion.div>
// // // // // // // // //             </motion.div>
// // // // // // // // //           </motion.div>
// // // // // // // // //         </motion.div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Forgot Password Modal */}
// // // // // // // // //       <AnimatePresence>
// // // // // // // // //         {isForgotPasswordOpen && (
// // // // // // // // //           <motion.div 
// // // // // // // // //             initial={{ opacity: 0 }}
// // // // // // // // //             animate={{ opacity: 1 }}
// // // // // // // // //             exit={{ opacity: 0 }}
// // // // // // // // //             className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
// // // // // // // // //             onClick={(e) => {
// // // // // // // // //               if (e.target === e.currentTarget) setIsForgotPasswordOpen(false);
// // // // // // // // //             }}
// // // // // // // // //           >
// // // // // // // // //             <motion.div 
// // // // // // // // //               initial={{ scale: 0.9, y: 20, opacity: 0 }}
// // // // // // // // //               animate={{ scale: 1, y: 0, opacity: 1 }}
// // // // // // // // //               exit={{ scale: 0.9, y: 20, opacity: 0 }}
// // // // // // // // //               transition={{ type: "spring", damping: 25 }}
// // // // // // // // //               className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden"
// // // // // // // // //               onClick={(e) => e.stopPropagation()}
// // // // // // // // //             >
// // // // // // // // //               <div className="p-1">
// // // // // // // // //                 <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-t-xl">
// // // // // // // // //                   <h2 className="text-2xl font-bold text-gray-800 mb-1">Reset Password</h2>
// // // // // // // // //                   <p className="text-gray-600 text-sm">We'll send you instructions to reset your password</p>
// // // // // // // // //                 </div>
                
// // // // // // // // //                 <div className="p-6">
// // // // // // // // //                   <div className="space-y-4">
// // // // // // // // //                     <div className="space-y-2">
// // // // // // // // //                       <label className="text-sm font-medium text-gray-700 flex items-center">
// // // // // // // // //                         <Mail className="w-4 h-4 mr-2 text-blue-500" />
// // // // // // // // //                         Email Address
// // // // // // // // //                       </label>
// // // // // // // // //                       <div className="relative">
// // // // // // // // //                         <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
// // // // // // // // //                           <Mail className="w-5 h-5" />
// // // // // // // // //                         </div>
// // // // // // // // //                         <input
// // // // // // // // //                           type="email"
// // // // // // // // //                           placeholder="Enter your email"
// // // // // // // // //                           value={email}
// // // // // // // // //                           onChange={(e) => setEmail(e.target.value)}
// // // // // // // // //                           className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
// // // // // // // // //                         />
// // // // // // // // //                       </div>
// // // // // // // // //                     </div>
                    
// // // // // // // // //                     {resetMessage && (
// // // // // // // // //                       <motion.div
// // // // // // // // //                         initial={{ opacity: 0, height: 0 }}
// // // // // // // // //                         animate={{ opacity: 1, height: 'auto' }}
// // // // // // // // //                         className="text-sm p-3 rounded-lg bg-blue-50 text-blue-700"
// // // // // // // // //                       >
// // // // // // // // //                         {resetMessage}
// // // // // // // // //                       </motion.div>
// // // // // // // // //                     )}
                    
// // // // // // // // //                     <motion.button
// // // // // // // // //                       variants={buttonVariants}
// // // // // // // // //                       initial="rest"
// // // // // // // // //                       whileHover="hover"
// // // // // // // // //                       whileTap="tap"
// // // // // // // // //                       onClick={handleForgotPassword}
// // // // // // // // //                       disabled={isLoading}
// // // // // // // // //                       className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-medium shadow-md disabled:opacity-70 flex items-center justify-center gap-2"
// // // // // // // // //                     >
// // // // // // // // //                       {isLoading ? (
// // // // // // // // //                         <>
// // // // // // // // //                           <Loader2 className="h-5 w-5 animate-spin" />
// // // // // // // // //                           <span>Sending...</span>
// // // // // // // // //                         </>
// // // // // // // // //                       ) : (
// // // // // // // // //                         <>
// // // // // // // // //                           <span>Send Reset Link</span>
// // // // // // // // //                           <ArrowRight className="w-4 h-4" />
// // // // // // // // //                         </>
// // // // // // // // //                       )}
// // // // // // // // //                     </motion.button>
                    
// // // // // // // // //                     <div className="pt-2">
// // // // // // // // //                       <motion.button
// // // // // // // // //                         whileHover={{ scale: 1.01 }}
// // // // // // // // //                         whileTap={{ scale: 0.99 }}
// // // // // // // // //                         onClick={() => setIsForgotPasswordOpen(false)}
// // // // // // // // //                         className="w-full py-2.5 text-gray-600 hover:text-gray-800 font-medium transition-colors"
// // // // // // // // //                       >
// // // // // // // // //                         Cancel
// // // // // // // // //                       </motion.button>
// // // // // // // // //                     </div>
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             </motion.div>
// // // // // // // // //           </motion.div>
// // // // // // // // //         )}
// // // // // // // // //       </AnimatePresence>

// // // // // // // // //       {/* Floating animated elements */}
// // // // // // // // //       <div className="fixed inset-0 pointer-events-none overflow-hidden">
// // // // // // // // //         {[...Array(6)].map((_, i) => (
// // // // // // // // //           <motion.div
// // // // // // // // //             key={i}
// // // // // // // // //             initial={{ 
// // // // // // // // //               x: Math.random() * window.innerWidth,
// // // // // // // // //               y: Math.random() * window.innerHeight,
// // // // // // // // //               scale: Math.random() * 0.5 + 0.5,
// // // // // // // // //               opacity: Math.random() * 0.3 + 0.1
// // // // // // // // //             }}
// // // // // // // // //             animate={{
// // // // // // // // //               y: [null, Math.random() * -30 - 10, null],
// // // // // // // // //               opacity: [null, Math.random() * 0.3 + 0.2, null]
// // // // // // // // //             }}
// // // // // // // // //             transition={{
// // // // // // // // //               duration: Math.random() * 5 + 5,
// // // // // // // // //               repeat: Infinity,
// // // // // // // // //               repeatType: 'reverse',
// // // // // // // // //               delay: Math.random() * 2
// // // // // // // // //             }}
// // // // // // // // //             className={`absolute w-${Math.floor(Math.random() * 5) + 3} h-${Math.floor(Math.random() * 5) + 3} rounded-full`}
// // // // // // // // //             style={{
// // // // // // // // //               background: `rgba(${Math.floor(Math.random() * 50) + 100}, ${Math.floor(Math.random() * 50) + 150}, ${Math.floor(Math.random() * 50) + 200}, 0.${Math.floor(Math.random() * 4) + 1})`
// // // // // // // // //             }}
// // // // // // // // //           />
// // // // // // // // //         ))}
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Login;

// // // // // // // // import React, { useState, useEffect, useRef } from "react";
// // // // // // // // import { useNavigate, Link } from "react-router-dom";
// // // // // // // // import { useStore } from "./StoreContext";
// // // // // // // // import { motion } from "framer-motion";
// // // // // // // // import { Alert, AlertDescription } from "./components/ui/Alert";
// // // // // // // // import { 
// // // // // // // //   AlertCircle, Lock, User, Store, Mail, 
// // // // // // // //   ShoppingBag, Coffee, Package, BarChart4,
// // // // // // // //   Calendar, Clock, Users, ShieldCheck
// // // // // // // // } from "lucide-react";
// // // // // // // // import logo from './images/logo.jpg';

// // // // // // // // const Login = () => {
// // // // // // // //   // State management
// // // // // // // //   const [storeId, setStoreId] = useState("");
// // // // // // // //   const [password, setPassword] = useState("");
// // // // // // // //   const [id, setId] = useState("");
// // // // // // // //   const [error, setError] = useState(null);
// // // // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // // // //   const [activeField, setActiveField] = useState(null);
// // // // // // // //   const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
// // // // // // // //   const [email, setEmail] = useState("");
// // // // // // // //   const [resetMessage, setResetMessage] = useState("");
// // // // // // // //   const [animationComplete, setAnimationComplete] = useState(false);
// // // // // // // //   const navigate = useNavigate();
// // // // // // // //   const { setStoreName, setStoreId: setStoreInContext, setUserId } = useStore();
  
// // // // // // // //   // Refs for animation elements
// // // // // // // //   const formRef = useRef(null);
// // // // // // // //   const canvasRef = useRef(null);
  
// // // // // // // //   // Particle animation setup
// // // // // // // //   useEffect(() => {
// // // // // // // //     if (!canvasRef.current) return;
    
// // // // // // // //     const canvas = canvasRef.current;
// // // // // // // //     const ctx = canvas.getContext('2d');
// // // // // // // //     const particles = [];
    
// // // // // // // //     canvas.width = window.innerWidth;
// // // // // // // //     canvas.height = window.innerHeight;
    
// // // // // // // //     class Particle {
// // // // // // // //       constructor() {
// // // // // // // //         this.x = Math.random() * canvas.width;
// // // // // // // //         this.y = Math.random() * canvas.height;
// // // // // // // //         this.size = Math.random() * 5 + 1;
// // // // // // // //         this.speedX = Math.random() * 1 - 0.5;
// // // // // // // //         this.speedY = Math.random() * 1 - 0.5;
// // // // // // // //         this.color = `rgba(${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 155) + 100}, ${Math.random() * 0.3 + 0.1})`;
// // // // // // // //       }
      
// // // // // // // //       update() {
// // // // // // // //         this.x += this.speedX;
// // // // // // // //         this.y += this.speedY;
        
// // // // // // // //         if (this.size > 0.2) this.size -= 0.02;
        
// // // // // // // //         if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
// // // // // // // //         if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
// // // // // // // //       }
      
// // // // // // // //       draw() {
// // // // // // // //         ctx.fillStyle = this.color;
// // // // // // // //         ctx.beginPath();
// // // // // // // //         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
// // // // // // // //         ctx.fill();
// // // // // // // //       }
// // // // // // // //     }
    
// // // // // // // //     const init = () => {
// // // // // // // //       for (let i = 0; i < 70; i++) {
// // // // // // // //         particles.push(new Particle());
// // // // // // // //       }
// // // // // // // //     }
    
// // // // // // // //     const animate = () => {
// // // // // // // //       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
// // // // // // // //       for (let i = 0; i < particles.length; i++) {
// // // // // // // //         particles[i].update();
// // // // // // // //         particles[i].draw();
        
// // // // // // // //         for (let j = i; j < particles.length; j++) {
// // // // // // // //           const dx = particles[i].x - particles[j].x;
// // // // // // // //           const dy = particles[i].y - particles[j].y;
// // // // // // // //           const distance = Math.sqrt(dx * dx + dy * dy);
          
// // // // // // // //           if (distance < 100) {
// // // // // // // //             ctx.beginPath();
// // // // // // // //             ctx.strokeStyle = `rgba(200, 200, 255, ${0.15 - distance/1000})`;
// // // // // // // //             ctx.lineWidth = 0.5;
// // // // // // // //             ctx.moveTo(particles[i].x, particles[i].y);
// // // // // // // //             ctx.lineTo(particles[j].x, particles[j].y);
// // // // // // // //             ctx.stroke();
// // // // // // // //           }
// // // // // // // //         }
// // // // // // // //       }
      
// // // // // // // //       requestAnimationFrame(animate);
// // // // // // // //     }
    
// // // // // // // //     init();
// // // // // // // //     animate();
    
// // // // // // // //     const handleResize = () => {
// // // // // // // //       canvas.width = window.innerWidth;
// // // // // // // //       canvas.height = window.innerHeight;
// // // // // // // //       init();
// // // // // // // //     }
    
// // // // // // // //     window.addEventListener('resize', handleResize);
    
// // // // // // // //     return () => {
// // // // // // // //       window.removeEventListener('resize', handleResize);
// // // // // // // //     }
// // // // // // // //   }, []);
  
// // // // // // // //   // Automatic slide-in animation for form after page loads
// // // // // // // //   useEffect(() => {
// // // // // // // //     const timer = setTimeout(() => {
// // // // // // // //       setAnimationComplete(true);
// // // // // // // //     }, 300);
    
// // // // // // // //     return () => clearTimeout(timer);
// // // // // // // //   }, []);
  
// // // // // // // //   const handleUserCheck = async (e) => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     setIsLoading(true);
// // // // // // // //     try {
// // // // // // // //       const response = await fetch("http://localhost:5001/check_user", {
// // // // // // // //         method: "POST",
// // // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // // //         body: JSON.stringify({ storeId, id: String(id), password }),
// // // // // // // //       });
// // // // // // // //       const data = await response.json();
// // // // // // // //       if (data.message === "User found!") {
// // // // // // // //         localStorage.setItem("storeName", data.store_name);
// // // // // // // //         localStorage.setItem("storeId", storeId);
// // // // // // // //         localStorage.setItem("userId", data.id);
// // // // // // // //         localStorage.setItem("userRole", data.role);
// // // // // // // //         localStorage.setItem("storeAddress", data.store_address);
// // // // // // // //         localStorage.setItem("email", data.email);
// // // // // // // //         localStorage.setItem("fullName", data.full_name);
// // // // // // // //         localStorage.setItem("phoneNumber", data.phone_number);
// // // // // // // //         setStoreName(data.store_name);
// // // // // // // //         setStoreInContext(storeId);
// // // // // // // //         setUserId(data.id);
        
// // // // // // // //         // Show success animation before redirect
// // // // // // // //         setError(null);
// // // // // // // //         setTimeout(() => {
// // // // // // // //           switch (data.role) {
// // // // // // // //             case "admin": navigate("/AdminDashboard"); break;
// // // // // // // //             case "manager": navigate("/ManagerDashboard"); break;
// // // // // // // //             case "cashier": navigate("/CashierDashboard"); break;
// // // // // // // //             default: navigate("/Inter");
// // // // // // // //           }
// // // // // // // //         }, 1000);
// // // // // // // //       } else {
// // // // // // // //         setError("Invalid credentials. Please check your Store ID, User ID, and Password.");
// // // // // // // //       }
// // // // // // // //     } catch (err) {
// // // // // // // //       setError("Connection error. Please check your internet connection and try again.");
// // // // // // // //     } finally {
// // // // // // // //       setIsLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleForgotPassword = async () => {
// // // // // // // //     if (!email.trim()) {
// // // // // // // //       setResetMessage("Please enter your email address");
// // // // // // // //       return;
// // // // // // // //     }
    
// // // // // // // //     setResetMessage("Processing request...");
// // // // // // // //     try {
// // // // // // // //       const response = await fetch("http://localhost:5001/forgot_password", {
// // // // // // // //         method: "POST",
// // // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // // //         body: JSON.stringify({ email }),
// // // // // // // //       });
// // // // // // // //       const data = await response.json();
// // // // // // // //       setResetMessage(response.ok ? data.message : data.message || "Failed to send reset email.");
// // // // // // // //     } catch (error) {
// // // // // // // //       setResetMessage("Something went wrong. Please try again.");
// // // // // // // //     }
// // // // // // // //   };
  
// // // // // // // //   // Animation variants
// // // // // // // //   const fadeInUp = {
// // // // // // // //     hidden: { opacity: 0, y: 20 },
// // // // // // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
// // // // // // // //   };
  
// // // // // // // //   const staggerContainer = {
// // // // // // // //     hidden: { opacity: 0 },
// // // // // // // //     visible: {
// // // // // // // //       opacity: 1,
// // // // // // // //       transition: {
// // // // // // // //         staggerChildren: 0.1,
// // // // // // // //         delayChildren: 0.3
// // // // // // // //       }
// // // // // // // //     }
// // // // // // // //   };
  
// // // // // // // //   // Features section data
// // // // // // // //   const features = [
// // // // // // // //     { icon: <ShoppingBag className="w-5 h-5 text-blue-600" />, text: "Inventory Management" },
// // // // // // // //     { icon: <BarChart4 className="w-5 h-5 text-indigo-600" />, text: "Sales Analytics" },
// // // // // // // //     { icon: <Users className="w-5 h-5 text-purple-600" />, text: "Staff Management" },
// // // // // // // //     { icon: <Calendar className="w-5 h-5 text-cyan-600" />, text: "Schedule Planning" }
// // // // // // // //   ];

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative">
// // // // // // // //       {/* Particle canvas background */}
// // // // // // // //       <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
      
// // // // // // // //       {/* Header */}
// // // // // // // //       <header className="flex justify-between items-center px-6 py-4 bg-white/90 backdrop-blur-md shadow-sm z-10 relative">
// // // // // // // //         <div className="flex items-center gap-6">
// // // // // // // //           <motion.div 
// // // // // // // //             whileHover={{ scale: 1.05, rotate: 5 }}
// // // // // // // //             whileTap={{ scale: 0.95 }}
// // // // // // // //             className="w-12 h-12 overflow-hidden rounded-lg"
// // // // // // // //           >
// // // // // // // //             <Link to="/AboutPage">
// // // // // // // //               <img src={logo} alt="Logo" className="w-full h-full object-contain" />
// // // // // // // //             </Link>
// // // // // // // //           </motion.div>
// // // // // // // //           <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hidden sm:block">
// // // // // // // //             RetailPro Manager
// // // // // // // //           </h1>
// // // // // // // //         </div>
        
// // // // // // // //         <nav className="hidden md:flex gap-6">
// // // // // // // //           {['Home', 'About', 'Features', 'Contact'].map((text) => (
// // // // // // // //             <Link
// // // // // // // //               key={text}
// // // // // // // //               to={text === 'Home' ? '/' : `/${text}Page`}
// // // // // // // //               className="text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-300 relative group"
// // // // // // // //             >
// // // // // // // //               {text}
// // // // // // // //               <motion.span
// // // // // // // //                 initial={{ width: 0 }}
// // // // // // // //                 whileHover={{ width: '100%' }}
// // // // // // // //                 className="absolute -bottom-1 left-0 h-0.5 bg-indigo-600"
// // // // // // // //               />
// // // // // // // //             </Link>
// // // // // // // //           ))}
// // // // // // // //         </nav>
        
// // // // // // // //         <div className="flex gap-3">
// // // // // // // //           <Link to="/SignUp">
// // // // // // // //             <motion.button
// // // // // // // //               whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(79, 70, 229, 0.2)" }}
// // // // // // // //               whileTap={{ scale: 0.95 }}
// // // // // // // //               className="bg-white text-indigo-600 border border-indigo-200 px-4 py-2 rounded-full text-sm font-medium hover:border-indigo-300 transition-all duration-300"
// // // // // // // //             >
// // // // // // // //               Sign Up
// // // // // // // //             </motion.button>
// // // // // // // //           </Link>
// // // // // // // //           <Link to="/StoreReview">
// // // // // // // //             <motion.button
// // // // // // // //               whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(79, 70, 229, 0.2)" }}
// // // // // // // //               whileTap={{ scale: 0.95 }}
// // // // // // // //               className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-all duration-300"
// // // // // // // //             >
// // // // // // // //               Store Review
// // // // // // // //             </motion.button>
// // // // // // // //           </Link>
// // // // // // // //         </div>
// // // // // // // //       </header>

// // // // // // // //       {/* Main Content */}
// // // // // // // //       <div className="flex flex-col-reverse lg:flex-row min-h-[calc(100vh-72px)] relative z-10 px-6 py-8">
// // // // // // // //         {/* Left Section - Features */}
// // // // // // // //         <motion.div
// // // // // // // //           initial={{ opacity: 0, x: -20 }}
// // // // // // // //           animate={{ opacity: 1, x: 0 }}
// // // // // // // //           transition={{ duration: 0.6, delay: 0.2 }}
// // // // // // // //           className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-6 py-8 lg:py-0"
// // // // // // // //         >
// // // // // // // //           <motion.div 
// // // // // // // //             initial="hidden"
// // // // // // // //             animate="visible"
// // // // // // // //             variants={staggerContainer}
// // // // // // // //             className="max-w-xl"
// // // // // // // //           >
// // // // // // // //             <motion.h2 
// // // // // // // //               variants={fadeInUp}
// // // // // // // //               className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
// // // // // // // //             >
// // // // // // // //               Streamline Your <span className="text-indigo-600">Retail Operations</span>
// // // // // // // //             </motion.h2>
            
// // // // // // // //             <motion.p 
// // // // // // // //               variants={fadeInUp}
// // // // // // // //               className="text-gray-600 text-lg mb-8"
// // // // // // // //             >
// // // // // // // //               Access our comprehensive retail management platform designed to boost efficiency and provide real-time insights for your business.
// // // // // // // //             </motion.p>
            
// // // // // // // //             <motion.div 
// // // // // // // //               variants={fadeInUp}
// // // // // // // //               className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
// // // // // // // //             >
// // // // // // // //               {features.map((feature, index) => (
// // // // // // // //                 <motion.div 
// // // // // // // //                   key={index}
// // // // // // // //                   whileHover={{ scale: 1.03, y: -5 }}
// // // // // // // //                   className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100"
// // // // // // // //                 >
// // // // // // // //                   <div className="p-2 bg-blue-50 rounded-lg mr-3">
// // // // // // // //                     {feature.icon}
// // // // // // // //                   </div>
// // // // // // // //                   <span className="text-gray-700 font-medium">{feature.text}</span>
// // // // // // // //                 </motion.div>
// // // // // // // //               ))}
// // // // // // // //             </motion.div>
            
// // // // // // // //             <motion.div 
// // // // // // // //               variants={fadeInUp}
// // // // // // // //               className="flex items-center gap-2 bg-blue-50 p-4 rounded-lg border border-blue-100"
// // // // // // // //             >
// // // // // // // //               <ShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0" />
// // // // // // // //               <p className="text-blue-700 text-sm">
// // // // // // // //                 <span className="font-semibold">Secure Access:</span> Your data is protected with enterprise-grade encryption and multi-factor authentication.
// // // // // // // //               </p>
// // // // // // // //             </motion.div>
// // // // // // // //           </motion.div>
// // // // // // // //         </motion.div>
        
// // // // // // // //         {/* Right Section - Form */}
// // // // // // // //         <motion.div
// // // // // // // //           ref={formRef}
// // // // // // // //           initial={{ opacity: 0, x: 50 }}
// // // // // // // //           animate={animationComplete ? { opacity: 1, x: 0 } : {}}
// // // // // // // //           transition={{ duration: 0.6 }}
// // // // // // // //           className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end p-6"
// // // // // // // //         >
// // // // // // // //           <motion.div
// // // // // // // //             whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
// // // // // // // //             transition={{ duration: 0.3 }}
// // // // // // // //             className="w-full max-w-md bg-white/95 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden"
// // // // // // // //           >
// // // // // // // //             {/* Decorative elements */}
// // // // // // // //             <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full opacity-50" />
// // // // // // // //             <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-100 rounded-full opacity-50" />
            
// // // // // // // //             <motion.div 
// // // // // // // //               initial="hidden"
// // // // // // // //               animate="visible"
// // // // // // // //               variants={staggerContainer}
// // // // // // // //               className="relative z-10"
// // // // // // // //             >
// // // // // // // //               <motion.div variants={fadeInUp} className="flex flex-col items-center mb-8">
// // // // // // // //                 <motion.div
// // // // // // // //                   initial={{ scale: 0.8, opacity: 0 }}
// // // // // // // //                   animate={{ scale: 1, opacity: 1 }}
// // // // // // // //                   transition={{ duration: 0.5 }}
// // // // // // // //                   className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-indigo-200"
// // // // // // // //                 >
// // // // // // // //                   <Store className="h-8 w-8 text-white" />
// // // // // // // //                 </motion.div>
// // // // // // // //                 <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
// // // // // // // //                 <p className="text-gray-500 mt-1 text-sm">Sign in to your account</p>
// // // // // // // //               </motion.div>

// // // // // // // //               {error && (
// // // // // // // //                 <motion.div
// // // // // // // //                   initial={{ opacity: 0, y: -10 }}
// // // // // // // //                   animate={{ opacity: 1, y: 0 }}
// // // // // // // //                   className="mb-6"
// // // // // // // //                 >
// // // // // // // //                   <Alert variant="destructive" className="bg-red-50 border border-red-100 rounded-xl">
// // // // // // // //                     <AlertCircle className="h-4 w-4 text-red-500" />
// // // // // // // //                     <AlertDescription className="text-red-600 text-sm ml-2">{error}</AlertDescription>
// // // // // // // //                   </Alert>
// // // // // // // //                 </motion.div>
// // // // // // // //               )}

// // // // // // // //               <form onSubmit={handleUserCheck} className="space-y-5">
// // // // // // // //                 <motion.div variants={fadeInUp}>
// // // // // // // //                   <label className="flex items-center text-sm font-medium text-gray-700 mb-1.5">
// // // // // // // //                     <Store className="w-4 h-4 mr-2 text-indigo-500" /> Store ID
// // // // // // // //                   </label>
// // // // // // // //                   <div className="relative">
// // // // // // // //                     <input
// // // // // // // //                       type="text"
// // // // // // // //                       value={storeId}
// // // // // // // //                       onChange={(e) => setStoreId(e.target.value)}
// // // // // // // //                       onFocus={() => setActiveField('store')}
// // // // // // // //                       onBlur={() => setActiveField(null)}
// // // // // // // //                       className="w-full px-4 py-3 pl-10 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
// // // // // // // //                       placeholder="Enter store ID"
// // // // // // // //                     />
// // // // // // // //                     <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
// // // // // // // //                       <motion.div
// // // // // // // //                         animate={activeField === 'store' ? { scale: 1.2, color: '#6366f1' } : {}}
// // // // // // // //                       >
// // // // // // // //                         <Store className="w-4 h-4 text-gray-400" />
// // // // // // // //                       </motion.div>
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                 </motion.div>

// // // // // // // //                 <motion.div variants={fadeInUp}>
// // // // // // // //                   <label className="flex items-center text-sm font-medium text-gray-700 mb-1.5">
// // // // // // // //                     <User className="w-4 h-4 mr-2 text-indigo-500" /> User ID
// // // // // // // //                   </label>
// // // // // // // //                   <div className="relative">
// // // // // // // //                     <input
// // // // // // // //                       type="text"
// // // // // // // //                       value={id}
// // // // // // // //                       onChange={(e) => setId(e.target.value)}
// // // // // // // //                       onFocus={() => setActiveField('user')}
// // // // // // // //                       onBlur={() => setActiveField(null)}
// // // // // // // //                       className="w-full px-4 py-3 pl-10 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
// // // // // // // //                       placeholder="Enter user ID"
// // // // // // // //                     />
// // // // // // // //                     <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
// // // // // // // //                       <motion.div
// // // // // // // //                         animate={activeField === 'user' ? { scale: 1.2, color: '#6366f1' } : {}}
// // // // // // // //                       >
// // // // // // // //                         <User className="w-4 h-4 text-gray-400" />
// // // // // // // //                       </motion.div>
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                 </motion.div>

// // // // // // // //                 <motion.div variants={fadeInUp}>
// // // // // // // //                   <label className="flex items-center text-sm font-medium text-gray-700 mb-1.5">
// // // // // // // //                     <Lock className="w-4 h-4 mr-2 text-indigo-500" /> Password
// // // // // // // //                   </label>
// // // // // // // //                   <div className="relative">
// // // // // // // //                     <input
// // // // // // // //                       type="password"
// // // // // // // //                       value={password}
// // // // // // // //                       onChange={(e) => setPassword(e.target.value)}
// // // // // // // //                       onFocus={() => setActiveField('password')}
// // // // // // // //                       onBlur={() => setActiveField(null)}
// // // // // // // //                       className="w-full px-4 py-3 pl-10 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
// // // // // // // //                       placeholder="Enter password"
// // // // // // // //                     />
// // // // // // // //                     <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
// // // // // // // //                       <motion.div
// // // // // // // //                         animate={activeField === 'password' ? { scale: 1.2, color: '#6366f1' } : {}}
// // // // // // // //                       >
// // // // // // // //                         <Lock className="w-4 h-4 text-gray-400" />
// // // // // // // //                       </motion.div>
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                 </motion.div>

// // // // // // // //                 <motion.div variants={fadeInUp} className="flex items-center justify-between">
// // // // // // // //                   <div className="flex items-center">
// // // // // // // //                     <input
// // // // // // // //                       type="checkbox"
// // // // // // // //                       id="remember"
// // // // // // // //                       className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
// // // // // // // //                     />
// // // // // // // //                     <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
// // // // // // // //                       Remember me
// // // // // // // //                     </label>
// // // // // // // //                   </div>
// // // // // // // //                   <button
// // // // // // // //                     type="button"
// // // // // // // //                     onClick={() => setIsForgotPasswordOpen(true)}
// // // // // // // //                     className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
// // // // // // // //                   >
// // // // // // // //                     Forgot password?
// // // // // // // //                   </button>
// // // // // // // //                 </motion.div>

// // // // // // // //                 <motion.button
// // // // // // // //                   variants={fadeInUp}
// // // // // // // //                   type="submit"
// // // // // // // //                   disabled={isLoading}
// // // // // // // //                   whileHover={{ scale: 1.02, boxShadow: "0 8px 16px rgba(99,102,241,0.25)" }}
// // // // // // // //                   whileTap={{ scale: 0.98 }}
// // // // // // // //                   className="w-full py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
// // // // // // // //                 >
// // // // // // // //                   {isLoading ? (
// // // // // // // //                     <span className="flex items-center justify-center">
// // // // // // // //                       <motion.div
// // // // // // // //                         animate={{ rotate: 360 }}
// // // // // // // //                         transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
// // // // // // // //                         className="h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"
// // // // // // // //                       />
// // // // // // // //                       Verifying...
// // // // // // // //                     </span>
// // // // // // // //                   ) : (
// // // // // // // //                     "Sign In Securely"
// // // // // // // //                   )}
// // // // // // // //                 </motion.button>
// // // // // // // //               </form>

// // // // // // // //               <motion.div variants={fadeInUp} className="mt-6 text-center text-gray-600">
// // // // // // // //                 <p className="text-sm">
// // // // // // // //                   Don't have an account?{" "}
// // // // // // // //                   <Link to="/signup" className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors">
// // // // // // // //                     Register Now
// // // // // // // //                   </Link>
// // // // // // // //                 </p>
// // // // // // // //               </motion.div>
// // // // // // // //             </motion.div>
// // // // // // // //           </motion.div>
// // // // // // // //         </motion.div>
// // // // // // // //       </div>
      
// // // // // // // //       {/* Footer */}
// // // // // // // //       <footer className="bg-white/80 backdrop-blur-sm py-4 px-6 text-center text-gray-500 text-sm relative z-10 border-t border-gray-100">
// // // // // // // //         <p>© 2025 RetailPro Manager. All rights reserved.</p>
// // // // // // // //       </footer>

// // // // // // // //       {/* Forgot Password Modal */}
// // // // // // // //       {isForgotPasswordOpen && (
// // // // // // // //         <motion.div
// // // // // // // //           initial={{ opacity: 0 }}
// // // // // // // //           animate={{ opacity: 1 }}
// // // // // // // //           exit={{ opacity: 0 }}
// // // // // // // //           className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
// // // // // // // //         >
// // // // // // // //           <motion.div
// // // // // // // //             initial={{ scale: 0.9, y: 20 }}
// // // // // // // //             animate={{ scale: 1, y: 0 }}
// // // // // // // //             className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md m-4 relative"
// // // // // // // //           >
// // // // // // // //             <div className="absolute top-3 right-3">
// // // // // // // //               <motion.button
// // // // // // // //                 whileHover={{ scale: 1.1, rotate: 90 }}
// // // // // // // //                 whileTap={{ scale: 0.9 }}
// // // // // // // //                 onClick={() => setIsForgotPasswordOpen(false)}
// // // // // // // //                 className="text-gray-400 hover:text-gray-600"
// // // // // // // //               >
// // // // // // // //                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // //                   <line x1="18" y1="6" x2="6" y2="18"></line>
// // // // // // // //                   <line x1="6" y1="6" x2="18" y2="18"></line>
// // // // // // // //                 </svg>
// // // // // // // //               </motion.button>
// // // // // // // //             </div>
            
// // // // // // // //             <div className="flex flex-col items-center mb-6">
// // // // // // // //               <motion.div
// // // // // // // //                 initial={{ scale: 0.8, opacity: 0 }}
// // // // // // // //                 animate={{ scale: 1, opacity: 1 }}
// // // // // // // //                 className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4"
// // // // // // // //               >
// // // // // // // //                 <Mail className="h-6 w-6 text-blue-600" />
// // // // // // // //               </motion.div>
// // // // // // // //               <h2 className="text-xl font-bold text-gray-800">Reset Password</h2>
// // // // // // // //               <p className="text-gray-500 mt-1 text-sm text-center">
// // // // // // // //                 Enter your email address and we'll send you instructions to reset your password.
// // // // // // // //               </p>
// // // // // // // //             </div>
            
// // // // // // // //             <div className="relative mb-6">
// // // // // // // //               <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
// // // // // // // //               <input
// // // // // // // //                 type="email"
// // // // // // // //                 placeholder="Your email address"
// // // // // // // //                 value={email}
// // // // // // // //                 onChange={(e) => setEmail(e.target.value)}
// // // // // // // //                 className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // // // // // //               />
// // // // // // // //             </div>
            
// // // // // // // //             {resetMessage && (
// // // // // // // //               <motion.div
// // // // // // // //                 initial={{ opacity: 0, y: -10 }}
// // // // // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // // // // //                 className="mb-6 p-3 rounded-lg text-sm"
// // // // // // // //                 style={{
// // // // // // // //                   backgroundColor: resetMessage.includes("success") ? "rgba(209, 250, 229, 0.8)" : "rgba(254, 226, 226, 0.8)",
// // // // // // // //                   color: resetMessage.includes("success") ? "#065f46" : "#991b1b"
// // // // // // // //                 }}
// // // // // // // //               >
// // // // // // // //                 {resetMessage}
// // // // // // // //               </motion.div>
// // // // // // // //             )}
            
// // // // // // // //             <motion.button
// // // // // // // //               whileHover={{ scale: 1.03 }}
// // // // // // // //               whileTap={{ scale: 0.97 }}
// // // // // // // //               onClick={handleForgotPassword}
// // // // // // // //               className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-medium hover:shadow-lg transition-all"
// // // // // // // //             >
// // // // // // // //               Send Reset Instructions
// // // // // // // //             </motion.button>
            
// // // // // // // //             <button
// // // // // // // //               onClick={() => setIsForgotPasswordOpen(false)}
// // // // // // // //               className="w-full mt-4 text-gray-600 hover:text-gray-800 font-medium text-sm"
// // // // // // // //             >
// // // // // // // //               Back to Login
// // // // // // // //             </button>
// // // // // // // //           </motion.div>
// // // // // // // //         </motion.div>
// // // // // // // //       )}
      
// // // // // // // //       {/* Floating animated elements */}
// // // // // // // //       <motion.div
// // // // // // // //         animate={{ 
// // // // // // // //           y: [0, 15, 0],
// // // // // // // //           opacity: [0.5, 0.7, 0.5]
// // // // // // // //         }}
// // // // // // // //         transition={{ 
// // // // // // // //           duration: 8, 
// // // // // // // //           repeat: Infinity,
// // // // // // // //           ease: "easeInOut" 
// // // // // // // //         }}
// // // // // // // //         className="absolute top-1/3 left-1/4 w-12 h-12 bg-blue-200 rounded-full opacity-20 blur-xl z-0"
// // // // // // // //       />
      
// // // // // // // //       <motion.div
// // // // // // // //         animate={{ 
// // // // // // // //           y: [0, -20, 0],
// // // // // // // //           opacity: [0.3, 0.5, 0.3]
// // // // // // // //         }}
// // // // // // // //         transition={{ 
// // // // // // // //           duration: 10, 
// // // // // // // //           repeat: Infinity,
// // // // // // // //           ease: "easeInOut",
// // // // // // // //           delay: 1
// // // // // // // //         }}
// // // // // // // //         className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-indigo-200 rounded-full opacity-20 blur-xl z-0"
// // // // // // // //       />
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Login;
// // // // // // // import React, { useState, useEffect, useRef } from "react";
// // // // // // // import { useNavigate, Link } from "react-router-dom";
// // // // // // // import { useStore } from "./StoreContext";
// // // // // // // import { motion } from "framer-motion";
// // // // // // // import { Alert, AlertDescription } from "./components/ui/Alert";
// // // // // // // import { 
// // // // // // //   AlertCircle, Lock, User, Store, Mail, 
// // // // // // //   ShoppingBag, Coffee, Package, BarChart4,
// // // // // // //   Calendar, Clock, Users, ShieldCheck
// // // // // // // } from "lucide-react";
// // // // // // // import logo from './images/logo.jpg';

// // // // // // // const Login = () => {
// // // // // // //   // State management
// // // // // // //   const [storeId, setStoreId] = useState("");
// // // // // // //   const [password, setPassword] = useState("");
// // // // // // //   const [id, setId] = useState("");
// // // // // // //   const [error, setError] = useState(null);
// // // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // // //   const [activeField, setActiveField] = useState(null);
// // // // // // //   const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
// // // // // // //   const [email, setEmail] = useState("");
// // // // // // //   const [resetMessage, setResetMessage] = useState("");
// // // // // // //   const [animationComplete, setAnimationComplete] = useState(false);
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const { setStoreName, setStoreId: setStoreInContext, setUserId } = useStore();
  
// // // // // // //   // Refs for animation elements
// // // // // // //   const formRef = useRef(null);
// // // // // // //   const canvasRef = useRef(null);
  
// // // // // // //   // Particle animation setup
// // // // // // //   useEffect(() => {
// // // // // // //     if (!canvasRef.current) return;
    
// // // // // // //     const canvas = canvasRef.current;
// // // // // // //     const ctx = canvas.getContext('2d');
// // // // // // //     const particles = [];
    
// // // // // // //     canvas.width = window.innerWidth;
// // // // // // //     canvas.height = window.innerHeight;
    
// // // // // // //     class Particle {
// // // // // // //       constructor() {
// // // // // // //         this.x = Math.random() * canvas.width;
// // // // // // //         this.y = Math.random() * canvas.height;
// // // // // // //         this.size = Math.random() * 5 + 1;
// // // // // // //         this.speedX = Math.random() * 1 - 0.5;
// // // // // // //         this.speedY = Math.random() * 1 - 0.5;
// // // // // // //         this.color = `rgba(${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 155) + 100}, ${Math.random() * 0.3 + 0.1})`;
// // // // // // //       }
      
// // // // // // //       update() {
// // // // // // //         this.x += this.speedX;
// // // // // // //         this.y += this.speedY;
        
// // // // // // //         if (this.size > 0.2) this.size -= 0.02;
        
// // // // // // //         if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
// // // // // // //         if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
// // // // // // //       }
      
// // // // // // //       draw() {
// // // // // // //         ctx.fillStyle = this.color;
// // // // // // //         ctx.beginPath();
// // // // // // //         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
// // // // // // //         ctx.fill();
// // // // // // //       }
// // // // // // //     }
    
// // // // // // //     const init = () => {
// // // // // // //       for (let i = 0; i < 70; i++) {
// // // // // // //         particles.push(new Particle());
// // // // // // //       }
// // // // // // //     }
    
// // // // // // //     const animate = () => {
// // // // // // //       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
// // // // // // //       for (let i = 0; i < particles.length; i++) {
// // // // // // //         particles[i].update();
// // // // // // //         particles[i].draw();
        
// // // // // // //         for (let j = i; j < particles.length; j++) {
// // // // // // //           const dx = particles[i].x - particles[j].x;
// // // // // // //           const dy = particles[i].y - particles[j].y;
// // // // // // //           const distance = Math.sqrt(dx * dx + dy * dy);
          
// // // // // // //           if (distance < 100) {
// // // // // // //             ctx.beginPath();
// // // // // // //             ctx.strokeStyle = `rgba(200, 200, 255, ${0.15 - distance/1000})`;
// // // // // // //             ctx.lineWidth = 0.5;
// // // // // // //             ctx.moveTo(particles[i].x, particles[i].y);
// // // // // // //             ctx.lineTo(particles[j].x, particles[j].y);
// // // // // // //             ctx.stroke();
// // // // // // //           }
// // // // // // //         }
// // // // // // //       }
      
// // // // // // //       requestAnimationFrame(animate);
// // // // // // //     }
    
// // // // // // //     init();
// // // // // // //     animate();
    
// // // // // // //     const handleResize = () => {
// // // // // // //       canvas.width = window.innerWidth;
// // // // // // //       canvas.height = window.innerHeight;
// // // // // // //       init();
// // // // // // //     }
    
// // // // // // //     window.addEventListener('resize', handleResize);
    
// // // // // // //     return () => {
// // // // // // //       window.removeEventListener('resize', handleResize);
// // // // // // //     }
// // // // // // //   }, []);
  
// // // // // // //   // Automatic slide-in animation for form after page loads
// // // // // // //   useEffect(() => {
// // // // // // //     const timer = setTimeout(() => {
// // // // // // //       setAnimationComplete(true);
// // // // // // //     }, 300);
    
// // // // // // //     return () => clearTimeout(timer);
// // // // // // //   }, []);
  
// // // // // // //   const handleUserCheck = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     setIsLoading(true);
// // // // // // //     try {
// // // // // // //       const response = await fetch("http://localhost:5001/check_user", {
// // // // // // //         method: "POST",
// // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // //         body: JSON.stringify({ storeId, id: String(id), password }),
// // // // // // //       });
// // // // // // //       const data = await response.json();
// // // // // // //       if (data.message === "User found!") {
// // // // // // //         localStorage.setItem("storeName", data.store_name);
// // // // // // //         localStorage.setItem("storeId", storeId);
// // // // // // //         localStorage.setItem("userId", data.id);
// // // // // // //         localStorage.setItem("userRole", data.role);
// // // // // // //         localStorage.setItem("storeAddress", data.store_address);
// // // // // // //         localStorage.setItem("email", data.email);
// // // // // // //         localStorage.setItem("fullName", data.full_name);
// // // // // // //         localStorage.setItem("phoneNumber", data.phone_number);
// // // // // // //         setStoreName(data.store_name);
// // // // // // //         setStoreInContext(storeId);
// // // // // // //         setUserId(data.id);
        
// // // // // // //         // Show success animation before redirect
// // // // // // //         setError(null);
// // // // // // //         setTimeout(() => {
// // // // // // //           switch (data.role) {
// // // // // // //             case "admin": navigate("/AdminDashboard"); break;
// // // // // // //             case "manager": navigate("/ManagerDashboard"); break;
// // // // // // //             case "cashier": navigate("/CashierDashboard"); break;
// // // // // // //             default: navigate("/Inter");
// // // // // // //           }
// // // // // // //         }, 1000);
// // // // // // //       } else {
// // // // // // //         setError("Invalid credentials. Please check your Store ID, User ID, and Password.");
// // // // // // //       }
// // // // // // //     } catch (err) {
// // // // // // //       setError("Connection error. Please check your internet connection and try again.");
// // // // // // //     } finally {
// // // // // // //       setIsLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleForgotPassword = async () => {
// // // // // // //     if (!email.trim()) {
// // // // // // //       setResetMessage("Please enter your email address");
// // // // // // //       return;
// // // // // // //     }
    
// // // // // // //     setResetMessage("Processing request...");
// // // // // // //     try {
// // // // // // //       const response = await fetch("http://localhost:5001/forgot_password", {
// // // // // // //         method: "POST",
// // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // //         body: JSON.stringify({ email }),
// // // // // // //       });
// // // // // // //       const data = await response.json();
// // // // // // //       setResetMessage(response.ok ? data.message : data.message || "Failed to send reset email.");
// // // // // // //     } catch (error) {
// // // // // // //       setResetMessage("Something went wrong. Please try again.");
// // // // // // //     }
// // // // // // //   };
  
// // // // // // //   // Animation variants
// // // // // // //   const fadeInUp = {
// // // // // // //     hidden: { opacity: 0, y: 20 },
// // // // // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
// // // // // // //   };
  
// // // // // // //   const staggerContainer = {
// // // // // // //     hidden: { opacity: 0 },
// // // // // // //     visible: {
// // // // // // //       opacity: 1,
// // // // // // //       transition: {
// // // // // // //         staggerChildren: 0.1,
// // // // // // //         delayChildren: 0.3
// // // // // // //       }
// // // // // // //     }
// // // // // // //   };
  
// // // // // // //   // Features section data
// // // // // // //   const features = [
// // // // // // //     { icon: <ShoppingBag className="w-5 h-5 text-blue-600" />, text: "Inventory Management" },
// // // // // // //     { icon: <BarChart4 className="w-5 h-5 text-indigo-600" />, text: "Sales Analytics" },
// // // // // // //     { icon: <Users className="w-5 h-5 text-purple-600" />, text: "Staff Management" },
// // // // // // //     { icon: <Calendar className="w-5 h-5 text-cyan-600" />, text: "Schedule Planning" }
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative">
// // // // // // //       {/* Particle canvas background */}
// // // // // // //       <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
      
// // // // // // //       {/* Header */}
// // // // // // //       <header className="flex justify-between items-center px-6 py-4 bg-white/90 backdrop-blur-md shadow-sm z-10 relative">
// // // // // // //         <div className="flex items-center gap-6">
// // // // // // //           <motion.div 
// // // // // // //             whileHover={{ scale: 1.05, rotate: 5 }}
// // // // // // //             whileTap={{ scale: 0.95 }}
// // // // // // //             className="w-12 h-12 overflow-hidden rounded-lg"
// // // // // // //           >
// // // // // // //             <Link to="/AboutPage">
// // // // // // //               <img src={logo} alt="Logo" className="w-full h-full object-contain" />
// // // // // // //             </Link>
// // // // // // //           </motion.div>
// // // // // // //           <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hidden sm:block">
// // // // // // //             RetailPro Manager
// // // // // // //           </h1>
// // // // // // //         </div>
        
// // // // // // //         <nav className="hidden md:flex gap-6">
// // // // // // //           {['Home', 'About', 'Features', 'Contact'].map((text) => (
// // // // // // //             <Link
// // // // // // //               key={text}
// // // // // // //               to={text === 'Home' ? '/' : `/${text}Page`}
// // // // // // //               className="text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-300 relative group"
// // // // // // //             >
// // // // // // //               {text}
// // // // // // //               <motion.span
// // // // // // //                 initial={{ width: 0 }}
// // // // // // //                 whileHover={{ width: '100%' }}
// // // // // // //                 className="absolute -bottom-1 left-0 h-0.5 bg-indigo-600"
// // // // // // //               />
// // // // // // //             </Link>
// // // // // // //           ))}
// // // // // // //         </nav>
        
// // // // // // //         <div className="flex gap-3">
// // // // // // //           <Link to="/SignUp">
// // // // // // //             <motion.button
// // // // // // //               whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(79, 70, 229, 0.2)" }}
// // // // // // //               whileTap={{ scale: 0.95 }}
// // // // // // //               className="bg-white text-indigo-600 border border-indigo-200 px-4 py-2 rounded-full text-sm font-medium hover:border-indigo-300 transition-all duration-300"
// // // // // // //             >
// // // // // // //               Sign Up
// // // // // // //             </motion.button>
// // // // // // //           </Link>
// // // // // // //           <Link to="/StoreReview">
// // // // // // //             <motion.button
// // // // // // //               whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(79, 70, 229, 0.2)" }}
// // // // // // //               whileTap={{ scale: 0.95 }}
// // // // // // //               className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-all duration-300"
// // // // // // //             >
// // // // // // //               Store Review
// // // // // // //             </motion.button>
// // // // // // //           </Link>
// // // // // // //         </div>
// // // // // // //       </header>

// // // // // // //       {/* Main Content */}
// // // // // // //       <div className="flex flex-col-reverse lg:flex-row min-h-[calc(100vh-72px)] relative z-10 px-6 py-8">
// // // // // // //         {/* Left Section - Features */}
// // // // // // //         <motion.div
// // // // // // //           initial={{ opacity: 0, x: -20 }}
// // // // // // //           animate={{ opacity: 1, x: 0 }}
// // // // // // //           transition={{ duration: 0.6, delay: 0.2 }}
// // // // // // //           className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-6 py-8 lg:py-0"
// // // // // // //         >
// // // // // // //           <motion.div 
// // // // // // //             initial="hidden"
// // // // // // //             animate="visible"
// // // // // // //             variants={staggerContainer}
// // // // // // //             className="max-w-xl"
// // // // // // //           >
// // // // // // //             <motion.h2 
// // // // // // //               variants={fadeInUp}
// // // // // // //               className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
// // // // // // //             >
// // // // // // //               Streamline Your <span className="text-indigo-600">Retail Operations</span>
// // // // // // //             </motion.h2>
            
// // // // // // //             <motion.p 
// // // // // // //               variants={fadeInUp}
// // // // // // //               className="text-gray-600 text-lg mb-8"
// // // // // // //             >
// // // // // // //               Access our comprehensive retail management platform designed to boost efficiency and provide real-time insights for your business.
// // // // // // //             </motion.p>
            
// // // // // // //             <motion.div 
// // // // // // //               variants={fadeInUp}
// // // // // // //               className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
// // // // // // //             >
// // // // // // //               {features.map((feature, index) => (
// // // // // // //                 <motion.div 
// // // // // // //                   key={index}
// // // // // // //                   whileHover={{ scale: 1.03, y: -5 }}
// // // // // // //                   className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100"
// // // // // // //                 >
// // // // // // //                   <div className="p-2 bg-blue-50 rounded-lg mr-3">
// // // // // // //                     {feature.icon}
// // // // // // //                   </div>
// // // // // // //                   <span className="text-gray-700 font-medium">{feature.text}</span>
// // // // // // //                 </motion.div>
// // // // // // //               ))}
// // // // // // //             </motion.div>
            
// // // // // // //             <motion.div 
// // // // // // //               variants={fadeInUp}
// // // // // // //               className="flex items-center gap-2 bg-blue-50 p-4 rounded-lg border border-blue-100"
// // // // // // //             >
// // // // // // //               <ShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0" />
// // // // // // //               <p className="text-blue-700 text-sm">
// // // // // // //                 <span className="font-semibold">Secure Access:</span> Your data is protected with enterprise-grade encryption and multi-factor authentication.
// // // // // // //               </p>
// // // // // // //             </motion.div>
// // // // // // //           </motion.div>
// // // // // // //         </motion.div>
        
// // // // // // //         {/* Right Section - Form */}
// // // // // // //         <motion.div
// // // // // // //           ref={formRef}
// // // // // // //           initial={{ opacity: 0, x: 50 }}
// // // // // // //           animate={animationComplete ? { opacity: 1, x: 0 } : {}}
// // // // // // //           transition={{ duration: 0.6 }}
// // // // // // //           className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end p-6"
// // // // // // //         >
// // // // // // //           <motion.div
// // // // // // //             whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
// // // // // // //             transition={{ duration: 0.3 }}
// // // // // // //             className="w-full max-w-md bg-white/95 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden"
// // // // // // //           >
// // // // // // //             {/* Decorative elements */}
// // // // // // //             <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full opacity-50" />
// // // // // // //             <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-100 rounded-full opacity-50" />
            
// // // // // // //             <motion.div 
// // // // // // //               initial="hidden"
// // // // // // //               animate="visible"
// // // // // // //               variants={staggerContainer}
// // // // // // //               className="relative z-10"
// // // // // // //             >
// // // // // // //               <motion.div variants={fadeInUp} className="flex flex-col items-center mb-8">
// // // // // // //                 <motion.div
// // // // // // //                   initial={{ scale: 0.8, opacity: 0 }}
// // // // // // //                   animate={{ scale: 1, opacity: 1 }}
// // // // // // //                   transition={{ duration: 0.5 }}
// // // // // // //                   className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-indigo-200"
// // // // // // //                 >
// // // // // // //                   <Store className="h-8 w-8 text-white" />
// // // // // // //                 </motion.div>
// // // // // // //                 <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
// // // // // // //                 <p className="text-gray-500 mt-1 text-sm">Sign in to your account</p>
// // // // // // //               </motion.div>

// // // // // // //               {error && (
// // // // // // //                 <motion.div
// // // // // // //                   initial={{ opacity: 0, y: -10 }}
// // // // // // //                   animate={{ opacity: 1, y: 0 }}
// // // // // // //                   className="mb-6"
// // // // // // //                 >
// // // // // // //                   <Alert variant="destructive" className="bg-red-50 border border-red-100 rounded-xl">
// // // // // // //                     <AlertCircle className="h-4 w-4 text-red-500" />
// // // // // // //                     <AlertDescription className="text-red-600 text-sm ml-2">{error}</AlertDescription>
// // // // // // //                   </Alert>
// // // // // // //                 </motion.div>
// // // // // // //               )}

// // // // // // //               <form onSubmit={handleUserCheck} className="space-y-5">
// // // // // // //                 <motion.div variants={fadeInUp}>
// // // // // // //                   <label className="flex items-center text-sm font-medium text-gray-700 mb-1.5">
// // // // // // //                     <Store className="w-4 h-4 mr-2 text-indigo-500" /> Store ID
// // // // // // //                   </label>
// // // // // // //                   <div className="relative">
// // // // // // //                     <input
// // // // // // //                       type="text"
// // // // // // //                       value={storeId}
// // // // // // //                       onChange={(e) => setStoreId(e.target.value)}
// // // // // // //                       onFocus={() => setActiveField('store')}
// // // // // // //                       onBlur={() => setActiveField(null)}
// // // // // // //                       className="w-full px-4 py-3 pl-10 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
// // // // // // //                       placeholder="Enter store ID"
// // // // // // //                     />
// // // // // // //                     <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
// // // // // // //                       <motion.div
// // // // // // //                         animate={activeField === 'store' ? { scale: 1.2, color: '#6366f1' } : {}}
// // // // // // //                       >
// // // // // // //                         <Store className="w-4 h-4 text-gray-400" />
// // // // // // //                       </motion.div>
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 </motion.div>

// // // // // // //                 <motion.div variants={fadeInUp}>
// // // // // // //                   <label className="flex items-center text-sm font-medium text-gray-700 mb-1.5">
// // // // // // //                     <User className="w-4 h-4 mr-2 text-indigo-500" /> User ID
// // // // // // //                   </label>
// // // // // // //                   <div className="relative">
// // // // // // //                     <input
// // // // // // //                       type="text"
// // // // // // //                       value={id}
// // // // // // //                       onChange={(e) => setId(e.target.value)}
// // // // // // //                       onFocus={() => setActiveField('user')}
// // // // // // //                       onBlur={() => setActiveField(null)}
// // // // // // //                       className="w-full px-4 py-3 pl-10 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
// // // // // // //                       placeholder="Enter user ID"
// // // // // // //                     />
// // // // // // //                     <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
// // // // // // //                       <motion.div
// // // // // // //                         animate={activeField === 'user' ? { scale: 1.2, color: '#6366f1' } : {}}
// // // // // // //                       >
// // // // // // //                         <User className="w-4 h-4 text-gray-400" />
// // // // // // //                       </motion.div>
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 </motion.div>

// // // // // // //                 <motion.div variants={fadeInUp}>
// // // // // // //                   <label className="flex items-center text-sm font-medium text-gray-700 mb-1.5">
// // // // // // //                     <Lock className="w-4 h-4 mr-2 text-indigo-500" /> Password
// // // // // // //                   </label>
// // // // // // //                   <div className="relative">
// // // // // // //                     <input
// // // // // // //                       type="password"
// // // // // // //                       value={password}
// // // // // // //                       onChange={(e) => setPassword(e.target.value)}
// // // // // // //                       onFocus={() => setActiveField('password')}
// // // // // // //                       onBlur={() => setActiveField(null)}
// // // // // // //                       className="w-full px-4 py-3 pl-10 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
// // // // // // //                       placeholder="Enter password"
// // // // // // //                     />
// // // // // // //                     <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
// // // // // // //                       <motion.div
// // // // // // //                         animate={activeField === 'password' ? { scale: 1.2, color: '#6366f1' } : {}}
// // // // // // //                       >
// // // // // // //                         <Lock className="w-4 h-4 text-gray-400" />
// // // // // // //                       </motion.div>
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 </motion.div>

// // // // // // //                 <motion.div variants={fadeInUp} className="flex items-center justify-between">
// // // // // // //                   <div className="flex items-center">
// // // // // // //                     <input
// // // // // // //                       type="checkbox"
// // // // // // //                       id="remember"
// // // // // // //                       className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
// // // // // // //                     />
// // // // // // //                     <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
// // // // // // //                       Remember me
// // // // // // //                     </label>
// // // // // // //                   </div>
// // // // // // //                   <button
// // // // // // //                     type="button"
// // // // // // //                     onClick={() => setIsForgotPasswordOpen(true)}
// // // // // // //                     className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
// // // // // // //                   >
// // // // // // //                     Forgot password?
// // // // // // //                   </button>
// // // // // // //                 </motion.div>

// // // // // // //                 <motion.button
// // // // // // //                   variants={fadeInUp}
// // // // // // //                   type="submit"
// // // // // // //                   disabled={isLoading}
// // // // // // //                   whileHover={{ scale: 1.02, boxShadow: "0 8px 16px rgba(99,102,241,0.25)" }}
// // // // // // //                   whileTap={{ scale: 0.98 }}
// // // // // // //                   className="w-full py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
// // // // // // //                 >
// // // // // // //                   {isLoading ? (
// // // // // // //                     <span className="flex items-center justify-center">
// // // // // // //                       <motion.div
// // // // // // //                         animate={{ rotate: 360 }}
// // // // // // //                         transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
// // // // // // //                         className="h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"
// // // // // // //                       />
// // // // // // //                       Verifying...
// // // // // // //                     </span>
// // // // // // //                   ) : (
// // // // // // //                     "Sign In Securely"
// // // // // // //                   )}
// // // // // // //                 </motion.button>
// // // // // // //               </form>

// // // // // // //               <motion.div variants={fadeInUp} className="mt-6 text-center text-gray-600">
// // // // // // //                 <p className="text-sm">
// // // // // // //                   Don't have an account?{" "}
// // // // // // //                   <Link to="/signup" className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors">
// // // // // // //                     Register Now
// // // // // // //                   </Link>
// // // // // // //                 </p>
// // // // // // //               </motion.div>
// // // // // // //             </motion.div>
// // // // // // //           </motion.div>
// // // // // // //         </motion.div>
// // // // // // //       </div>
      
// // // // // // //       {/* Footer */}
// // // // // // //       <footer className="bg-white/80 backdrop-blur-sm py-4 px-6 text-center text-gray-500 text-sm relative z-10 border-t border-gray-100">
// // // // // // //         <p>© 2025 RetailPro Manager. All rights reserved.</p>
// // // // // // //       </footer>

// // // // // // //       {/* Forgot Password Modal */}
// // // // // // //       {isForgotPasswordOpen && (
// // // // // // //         <motion.div
// // // // // // //           initial={{ opacity: 0 }}
// // // // // // //           animate={{ opacity: 1 }}
// // // // // // //           exit={{ opacity: 0 }}
// // // // // // //           className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
// // // // // // //         >
// // // // // // //           <motion.div
// // // // // // //             initial={{ scale: 0.9, y: 20 }}
// // // // // // //             animate={{ scale: 1, y: 0 }}
// // // // // // //             className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md m-4 relative"
// // // // // // //           >
// // // // // // //             <div className="absolute top-3 right-3">
// // // // // // //               <motion.button
// // // // // // //                 whileHover={{ scale: 1.1, rotate: 90 }}
// // // // // // //                 whileTap={{ scale: 0.9 }}
// // // // // // //                 onClick={() => setIsForgotPasswordOpen(false)}
// // // // // // //                 className="text-gray-400 hover:text-gray-600"
// // // // // // //               >
// // // // // // //                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // //                   <line x1="18" y1="6" x2="6" y2="18"></line>
// // // // // // //                   <line x1="6" y1="6" x2="18" y2="18"></line>
// // // // // // //                 </svg>
// // // // // // //               </motion.button>
// // // // // // //             </div>
            
// // // // // // //             <div className="flex flex-col items-center mb-6">
// // // // // // //               <motion.div
// // // // // // //                 initial={{ scale: 0.8, opacity: 0 }}
// // // // // // //                 animate={{ scale: 1, opacity: 1 }}
// // // // // // //                 className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4"
// // // // // // //               >
// // // // // // //                 <Mail className="h-6 w-6 text-blue-600" />
// // // // // // //               </motion.div>
// // // // // // //               <h2 className="text-xl font-bold text-gray-800">Reset Password</h2>
// // // // // // //               <p className="text-gray-500 mt-1 text-sm text-center">
// // // // // // //                 Enter your email address and we'll send you instructions to reset your password.
// // // // // // //               </p>
// // // // // // //             </div>
            
// // // // // // //             <div className="relative mb-6">
// // // // // // //               <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
// // // // // // //               <input
// // // // // // //                 type="email"
// // // // // // //                 placeholder="Your email address"
// // // // // // //                 value={email}
// // // // // // //                 onChange={(e) => setEmail(e.target.value)}
// // // // // // //                 className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // // // // //               />
// // // // // // //             </div>
            
// // // // // // //             {resetMessage && (
// // // // // // //               <motion.div
// // // // // // //                 initial={{ opacity: 0, y: -10 }}
// // // // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // // // //                 className="mb-6 p-3 rounded-lg text-sm"
// // // // // // //                 style={{
// // // // // // //                   backgroundColor: resetMessage.includes("success") ? "rgba(209, 250, 229, 0.8)" : "rgba(254, 226, 226, 0.8)",
// // // // // // //                   color: resetMessage.includes("success") ? "#065f46" : "#991b1b"
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 {resetMessage}
// // // // // // //               </motion.div>
// // // // // // //             )}
            
// // // // // // //             <motion.button
// // // // // // //               whileHover={{ scale: 1.03 }}
// // // // // // //               whileTap={{ scale: 0.97 }}
// // // // // // //               onClick={handleForgotPassword}
// // // // // // //               className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-medium hover:shadow-lg transition-all"
// // // // // // //             >
// // // // // // //               Send Reset Instructions
// // // // // // //             </motion.button>
            
// // // // // // //             <button
// // // // // // //               onClick={() => setIsForgotPasswordOpen(false)}
// // // // // // //               className="w-full mt-4 text-gray-600 hover:text-gray-800 font-medium text-sm"
// // // // // // //             >
// // // // // // //               Back to Login
// // // // // // //             </button>
// // // // // // //           </motion.div>
// // // // // // //         </motion.div>
// // // // // // //       )}
      
// // // // // // //       {/* Floating animated elements */}
// // // // // // //       <motion.div
// // // // // // //         animate={{ 
// // // // // // //           y: [0, 15, 0],
// // // // // // //           opacity: [0.5, 0.7, 0.5]
// // // // // // //         }}
// // // // // // //         transition={{ 
// // // // // // //           duration: 8, 
// // // // // // //           repeat: Infinity,
// // // // // // //           ease: "easeInOut" 
// // // // // // //         }}
// // // // // // //         className="absolute top-1/3 left-1/4 w-12 h-12 bg-blue-200 rounded-full opacity-20 blur-xl z-0"
// // // // // // //       />
      
// // // // // // //       <motion.div
// // // // // // //         animate={{ 
// // // // // // //           y: [0, -20, 0],
// // // // // // //           opacity: [0.3, 0.5, 0.3]
// // // // // // //         }}
// // // // // // //         transition={{ 
// // // // // // //           duration: 10, 
// // // // // // //           repeat: Infinity,
// // // // // // //           ease: "easeInOut",
// // // // // // //           delay: 1
// // // // // // //         }}
// // // // // // //         className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-indigo-200 rounded-full opacity-20 blur-xl z-0"
// // // // // // //       />
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Login;

// // // // // // import React, { useState, useEffect, useRef } from "react";
// // // // // // import { useNavigate, Link } from "react-router-dom";
// // // // // // import { useStore } from "./StoreContext";
// // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // import { 
// // // // // //   AlertCircle, Lock, User, Store, Mail, 
// // // // // //   ShoppingBag, BarChart4, Users, Calendar,
// // // // // //   ShieldCheck, ArrowRight, CheckCircle,
// // // // // //   CreditCard, Truck, Package, Gift, RefreshCw,
// // // // // //   Search, Menu, X
// // // // // // } from "lucide-react";

// // // // // // const Login = () => {
// // // // // //   // State management
// // // // // //   const [storeId, setStoreId] = useState("");
// // // // // //   const [password, setPassword] = useState("");
// // // // // //   const [id, setId] = useState("");
// // // // // //   const [error, setError] = useState(null);
// // // // // //   const [success, setSuccess] = useState(false);
// // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // //   const [activeField, setActiveField] = useState(null);
// // // // // //   const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
// // // // // //   const [email, setEmail] = useState("");
// // // // // //   const [resetMessage, setResetMessage] = useState("");
// // // // // //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
// // // // // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// // // // // //   const navigate = useNavigate();
// // // // // //   const { setStoreName, setStoreId: setStoreInContext, setUserId } = useStore();
  
// // // // // //   // Refs for animation elements
// // // // // //   const canvasRef = useRef(null);
// // // // // //   const storeIdInputRef = useRef(null);
// // // // // //   const userIdInputRef = useRef(null);
// // // // // //   const passwordInputRef = useRef(null);
  
// // // // // //   // Theme colors
// // // // // //   const colors = {
// // // // // //     primary: "#3B82F6", // Blue
// // // // // //     secondary: "#6366F1", // Indigo
// // // // // //     accent: "#8B5CF6", // Violet
// // // // // //     success: "#10B981", // Emerald
// // // // // //     warning: "#F59E0B", // Amber
// // // // // //     error: "#EF4444", // Red
// // // // // //     dark: "#1E293B", // Slate 800
// // // // // //     light: "#F1F5F9", // Slate 100
// // // // // //   };
  
// // // // // //   // Store images for carousel
// // // // // //   const storeImages = [
// // // // // //     "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
// // // // // //     "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
// // // // // //     "https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
// // // // // //   ];
  
// // // // // //   // Change background image every 5 seconds
// // // // // //   useEffect(() => {
// // // // // //     const interval = setInterval(() => {
// // // // // //       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % storeImages.length);
// // // // // //     }, 5000);
// // // // // //     return () => clearInterval(interval);
// // // // // //   }, []);

// // // // // //   // Interactive particle effect for canvas
// // // // // //   useEffect(() => {
// // // // // //     if (!canvasRef.current) return;
    
// // // // // //     const canvas = canvasRef.current;
// // // // // //     const ctx = canvas.getContext('2d');
// // // // // //     let particles = [];
// // // // // //     let mousePosition = { x: null, y: null };
// // // // // //     let animationFrame;
    
// // // // // //     const setCanvasDimensions = () => {
// // // // // //       canvas.width = window.innerWidth;
// // // // // //       canvas.height = window.innerHeight;
// // // // // //     };
    
// // // // // //     setCanvasDimensions();
    
// // // // // //     class Particle {
// // // // // //       constructor(x, y, size, color, speed) {
// // // // // //         this.x = x || Math.random() * canvas.width;
// // // // // //         this.y = y || Math.random() * canvas.height;
// // // // // //         this.size = size || Math.random() * 3 + 1;
// // // // // //         this.baseSize = this.size;
// // // // // //         this.color = color || `hsla(${Math.random() * 60 + 210}, 80%, 60%, ${Math.random() * 0.4 + 0.1})`;
// // // // // //         this.speedX = (Math.random() - 0.5) * speed || (Math.random() - 0.5) * 0.8;
// // // // // //         this.speedY = (Math.random() - 0.5) * speed || (Math.random() - 0.5) * 0.8;
// // // // // //         this.maxSize = this.baseSize * 3;
// // // // // //         this.angle = Math.random() * Math.PI * 2;
// // // // // //         this.angleSpeed = Math.random() * 0.1 - 0.05;
// // // // // //         this.curveRadius = Math.random() * 2;
// // // // // //       }
      
// // // // // //       update() {
// // // // // //         this.x += this.speedX + Math.sin(this.angle) * this.curveRadius * 0.1;
// // // // // //         this.y += this.speedY + Math.cos(this.angle) * this.curveRadius * 0.1;
// // // // // //         this.angle += this.angleSpeed;
        
// // // // // //         if (this.x < 0 || this.x > canvas.width) this.speedX *= -1.02;
// // // // // //         if (this.y < 0 || this.y > canvas.height) this.speedY *= -1.02;
        
// // // // // //         if (mousePosition.x != null && mousePosition.y != null) {
// // // // // //           const dx = mousePosition.x - this.x;
// // // // // //           const dy = mousePosition.y - this.y;
// // // // // //           const distance = Math.sqrt(dx * dx + dy * dy);
          
// // // // // //           if (distance < 100) {
// // // // // //             const force = (100 - distance) / 2000;
// // // // // //             this.x += dx * force;
// // // // // //             this.y += dy * force;
// // // // // //             this.size = Math.min(this.maxSize, this.baseSize + (100 - distance) / 10);
// // // // // //           } else {
// // // // // //             this.size = Math.max(this.baseSize, this.size - 0.1);
// // // // // //           }
// // // // // //         }
// // // // // //       }
      
// // // // // //       draw() {
// // // // // //         ctx.beginPath();
// // // // // //         ctx.fillStyle = this.color;
// // // // // //         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
// // // // // //         ctx.fill();
// // // // // //       }
// // // // // //     }
    
// // // // // //     const initParticles = () => {
// // // // // //       particles = [];
// // // // // //       const particleCount = Math.min(window.innerWidth / 10, 150);
      
// // // // // //       for (let i = 0; i < particleCount; i++) {
// // // // // //         const size = Math.random() * 3 + 1;
// // // // // //         const speed = Math.random() * 0.5 + 0.3;
// // // // // //         const hue = Math.random() * 60 + 210;
// // // // // //         const color = `hsla(${hue}, 80%, 60%, ${Math.random() * 0.4 + 0.1})`;
// // // // // //         particles.push(new Particle(null, null, size, color, speed));
// // // // // //       }
// // // // // //     };
    
// // // // // //     const handleMouseMove = (e) => {
// // // // // //       mousePosition.x = e.clientX;
// // // // // //       mousePosition.y = e.clientY;
// // // // // //     };
    
// // // // // //     const animate = () => {
// // // // // //       ctx.clearRect(0, 0, canvas.width, canvas.height);
// // // // // //       const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
// // // // // //       gradient.addColorStop(0, "rgba(30, 41, 59, 0.02)");
// // // // // //       gradient.addColorStop(1, "rgba(30, 41, 59, 0.04)");
// // // // // //       ctx.fillStyle = gradient;
// // // // // //       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
// // // // // //       particles.forEach((particle, index) => {
// // // // // //         particle.update();
// // // // // //         particle.draw();
        
// // // // // //         for (let j = index + 1; j < particles.length; j++) {
// // // // // //           const dx = particle.x - particles[j].x;
// // // // // //           const dy = particle.y - particles[j].y;
// // // // // //           const distance = Math.sqrt(dx * dx + dy * dy);
          
// // // // // //           if (distance < 85) {
// // // // // //             ctx.beginPath();
// // // // // //             ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 - distance / 850})`;
// // // // // //             ctx.lineWidth = 0.5;
// // // // // //             ctx.moveTo(particle.x, particle.y);
// // // // // //             ctx.lineTo(particles[j].x, particles[j].y);
// // // // // //             ctx.stroke();
// // // // // //           }
// // // // // //         }
// // // // // //       });
      
// // // // // //       animationFrame = requestAnimationFrame(animate);
// // // // // //     };
    
// // // // // //     const handleResize = () => {
// // // // // //       setCanvasDimensions();
// // // // // //       initParticles();
// // // // // //     };
    
// // // // // //     window.addEventListener('resize', handleResize);
// // // // // //     window.addEventListener('mousemove', handleMouseMove);
// // // // // //     initParticles();
// // // // // //     animate();
    
// // // // // //     return () => {
// // // // // //       window.removeEventListener('resize', handleResize);
// // // // // //       window.removeEventListener('mousemove', handleMouseMove);
// // // // // //       cancelAnimationFrame(animationFrame);
// // // // // //     };
// // // // // //   }, []);

// // // // // //   // Focus fields with sequence animation
// // // // // //   useEffect(() => {
// // // // // //     const timers = [
// // // // // //       setTimeout(() => storeIdInputRef.current?.focus(), 1000),
// // // // // //       setTimeout(() => userIdInputRef.current?.focus(), 1300),
// // // // // //       setTimeout(() => passwordInputRef.current?.focus(), 1600),
// // // // // //       setTimeout(() => storeIdInputRef.current?.focus(), 1900),
// // // // // //     ];
// // // // // //     return () => timers.forEach(clearTimeout);
// // // // // //   }, []);

// // // // // //   const handleUserCheck = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     setIsLoading(true);
// // // // // //     setError(null);
    
// // // // // //     if (!storeId.trim() || !id.trim() || !password.trim()) {
// // // // // //       setError("All fields are required.");
// // // // // //       setIsLoading(false);
// // // // // //       return;
// // // // // //     }
    
// // // // // //     try {
// // // // // //       const response = await fetch("http://localhost:5001/check_user", {
// // // // // //         method: "POST",
// // // // // //         headers: { "Content-Type": "application/json" },
// // // // // //         body: JSON.stringify({ storeId, id: String(id), password }),
// // // // // //       });
      
// // // // // //       const data = await response.json();
      
// // // // // //       if (data.message === "User found!") {
// // // // // //         localStorage.setItem("storeName", data.store_name);
// // // // // //         localStorage.setItem("storeId", storeId);
// // // // // //         localStorage.setItem("userId", data.id);
// // // // // //         localStorage.setItem("userRole", data.role);
// // // // // //         localStorage.setItem("storeAddress", data.store_address);
// // // // // //         localStorage.setItem("email", data.email);
// // // // // //         localStorage.setItem("fullName", data.full_name);
// // // // // //         localStorage.setItem("phoneNumber", data.phone_number);
        
// // // // // //         setStoreName(data.store_name);
// // // // // //         setStoreInContext(storeId);
// // // // // //         setUserId(data.id);
        
// // // // // //         setSuccess(true);
// // // // // //         setTimeout(() => {
// // // // // //           switch (data.role) {
// // // // // //             case "admin": navigate("/AdminDashboard"); break;
// // // // // //             case "manager": navigate("/ManagerDashboard"); break;
// // // // // //             case "cashier": navigate("/CashierDashboard"); break;
// // // // // //             default: navigate("/Inter");
// // // // // //           }
// // // // // //         }, 1500);
// // // // // //       } else {
// // // // // //         setError("Invalid credentials. Please check your details.");
// // // // // //       }
// // // // // //     } catch (err) {
// // // // // //       setError("Connection error. Please try again.");
// // // // // //     } finally {
// // // // // //       if (!success) setIsLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleForgotPassword = async () => {
// // // // // //     if (!email.trim()) {
// // // // // //       setResetMessage("Please enter your email address");
// // // // // //       return;
// // // // // //     }
    
// // // // // //     if (!/^\S+@\S+\.\S+$/.test(email)) {
// // // // // //       setResetMessage("Please enter a valid email address");
// // // // // //       return;
// // // // // //     }
    
// // // // // //     setResetMessage("Processing request...");
    
// // // // // //     try {
// // // // // //       const response = await fetch("http://localhost:5001/forgot_password", {
// // // // // //         method: "POST",
// // // // // //         headers: { "Content-Type": "application/json" },
// // // // // //         body: JSON.stringify({ email }),
// // // // // //       });
      
// // // // // //       const data = await response.json();
// // // // // //       setResetMessage(response.ok 
// // // // // //         ? "Password reset instructions sent!" 
// // // // // //         : data.message || "Failed to send reset email.");
// // // // // //     } catch (error) {
// // // // // //       setResetMessage("Connection error. Please try again.");
// // // // // //     }
// // // // // //   };
  
// // // // // //   // Animation variants
// // // // // //   const logoAnimation = {
// // // // // //     initial: { scale: 0, rotate: -180 },
// // // // // //     animate: { scale: 1, rotate: 0, transition: { type: "spring", duration: 1.5 } }
// // // // // //   };
  
// // // // // //   const fadeInScale = {
// // // // // //     hidden: { opacity: 0, scale: 0.9 },
// // // // // //     visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
// // // // // //   };
  
// // // // // //   const slideInFromRight = {
// // // // // //     hidden: { x: 100, opacity: 0 },
// // // // // //     visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
// // // // // //   };
  
// // // // // //   const slideInFromLeft = {
// // // // // //     hidden: { x: -100, opacity: 0 },
// // // // // //     visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
// // // // // //   };
  
// // // // // //   const staggerContainer = {
// // // // // //     hidden: { opacity: 0 },
// // // // // //     visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
// // // // // //   };
  
// // // // // //   const inputAnimation = {
// // // // // //     focus: { scale: 1.02, borderColor: colors.primary, transition: { duration: 0.3 } },
// // // // // //     blur: { scale: 1, borderColor: "rgba(255, 255, 255, 0.1)", transition: { duration: 0.3 } }
// // // // // //   };
  
// // // // // //   const features = [
// // // // // //     { icon: <ShoppingBag className="w-6 h-6" />, title: "Inventory", description: "Real-time tracking" },
// // // // // //     { icon: <BarChart4 className="w-6 h-6" />, title: "Analytics", description: "Sales insights" },
// // // // // //     { icon: <Users className="w-6 h-6" />, title: "Staff", description: "Team management" },
// // // // // //     { icon: <CreditCard className="w-6 h-6" />, title: "POS", description: "Payment processing" },
// // // // // //     { icon: <Package className="w-6 h-6" />, title: "Suppliers", description: "Vendor portal" },
// // // // // //     { icon: <Gift className="w-6 h-6" />, title: "Loyalty", description: "Customer rewards" },
// // // // // //   ];
  
// // // // // //   const stats = [
// // // // // //     { value: "27%", label: "Revenue Increase" },
// // // // // //     { value: "3.2x", label: "Inventory Turnover" },
// // // // // //     { value: "5hrs", label: "Time Saved" },
// // // // // //   ];

// // // // // //   return (
// // // // // //     <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white font-sans">
// // // // // //       {/* Particle Background */}
// // // // // //       <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
      
// // // // // //       {/* Gradient Overlay */}
// // // // // //       <motion.div
// // // // // //         className="absolute inset-0"
// // // // // //         animate={{ opacity: [0.05, 0.1, 0.05] }}
// // // // // //         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
// // // // // //         style={{ background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.1), transparent 70%)" }}
// // // // // //       />
      
// // // // // //       {/* Floating Orbs */}
// // // // // //       <motion.div
// // // // // //         animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
// // // // // //         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
// // // // // //         className="absolute top-1/4 left-1/4 w-28 h-28 rounded-full blur-3xl bg-blue-400/20 z-0"
// // // // // //       />
// // // // // //       <motion.div
// // // // // //         animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }}
// // // // // //         transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
// // // // // //         className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full blur-3xl bg-indigo-500/20 z-0"
// // // // // //       />
      
// // // // // //       {/* Header */}
// // // // // //       <header className="relative z-20 backdrop-blur-lg bg-slate-900/40 px-6 py-4 border-b border-white/10">
// // // // // //         <div className="mx-auto max-w-7xl flex items-center justify-between">
// // // // // //           <motion.div initial={logoAnimation.initial} animate={logoAnimation.animate} className="flex items-center gap-3">
// // // // // //             <div className="relative">
// // // // // //               <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
// // // // // //                 <Store className="h-5 w-5 text-white" />
// // // // // //               </div>
// // // // // //               <motion.div 
// // // // // //                 animate={{ scale: [1, 1.2, 1] }}
// // // // // //                 transition={{ duration: 2, repeat: Infinity }}
// // // // // //                 className="absolute -inset-1.5 rounded-xl bg-blue-500/20 blur-sm"
// // // // // //               />
// // // // // //             </div>
// // // // // //             <motion.h1 
// // // // // //               initial={{ opacity: 0, x: -20 }}
// // // // // //               animate={{ opacity: 1, x: 0 }}
// // // // // //               transition={{ delay: 0.5 }}
// // // // // //               className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent"
// // // // // //             >
// // // // // //               RetailPro
// // // // // //             </motion.h1>
// // // // // //           </motion.div>
          
// // // // // //           <nav className="hidden md:flex items-center gap-8">
// // // // // //             {['Home', 'Features', 'Pricing', 'Support'].map((text, index) => (
// // // // // //               <motion.div key={text} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.1 }}>
// // // // // //                 <Link to={text === 'Home' ? '/' : `/${text}Page`} className="text-slate-300 hover:text-white relative group">
// // // // // //                   {text}
// // // // // //                   <motion.span initial={{ width: 0 }} whileHover={{ width: '100%' }} className="absolute -bottom-1 left-0 h-0.5 bg-blue-500 rounded-full" />
// // // // // //                 </Link>
// // // // // //               </motion.div>
// // // // // //             ))}
// // // // // //           </nav>
          
// // // // // //           <motion.button
// // // // // //             initial={{ opacity: 0 }}
// // // // // //             animate={{ opacity: 1 }}
// // // // // //             transition={{ delay: 0.8 }}
// // // // // //             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// // // // // //             className="md:hidden p-2 rounded-lg hover:bg-white/10"
// // // // // //           >
// // // // // //             {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
// // // // // //           </motion.button>
          
// // // // // //           <div className="hidden md:flex items-center gap-3">
// // // // // //             <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }}>
// // // // // //               <Link to="/SignUp">
// // // // // //                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
// // // // // //                   Get Started
// // // // // //                 </motion.button>
// // // // // //               </Link>
// // // // // //             </motion.div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </header>
      
// // // // // //       {/* Mobile Menu */}
// // // // // //       <AnimatePresence>
// // // // // //         {mobileMenuOpen && (
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, height: 0 }}
// // // // // //             animate={{ opacity: 1, height: 'auto' }}
// // // // // //             exit={{ opacity: 0, height: 0 }}
// // // // // //             className="md:hidden relative z-20 bg-slate-900/90 border-b border-white/10"
// // // // // //           >
// // // // // //             <nav className="flex flex-col py-3 px-6">
// // // // // //               {['Home', 'Features', 'Pricing', 'Support'].map((text, index) => (
// // // // // //                 <motion.div key={text} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
// // // // // //                   <Link to={text === 'Home' ? '/' : `/${text}Page`} className="block py-3 text-slate-300 hover:text-white border-b border-white/5 last:border-0" onClick={() => setMobileMenuOpen(false)}>
// // // // // //                     {text}
// // // // // //                   </Link>
// // // // // //                 </motion.div>
// // // // // //               ))}
// // // // // //             </nav>
// // // // // //           </motion.div>
// // // // // //         )}
// // // // // //       </AnimatePresence>

// // // // // //       {/* Main Content */}
// // // // // //       <div className="relative z-10 min-h-[calc(100vh-72px)] mx-auto max-w-7xl px-6 py-8 md:py-16 flex flex-col lg:flex-row items-center">
// // // // // //         {/* Left Section */}
// // // // // //         <motion.div initial="hidden" animate="visible" variants={slideInFromLeft} className="w-full lg:w-1/2 lg:pr-10 mb-12 lg:mb-0">
// // // // // //           <motion.div variants={staggerContainer}>
// // // // // //             <motion.div variants={fadeInScale} className="inline-flex items-center py-1 px-3 rounded-full bg-blue-900/30 text-blue-400 text-xs font-medium mb-6">
// // // // // //               <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} className="mr-2 w-2 h-2 rounded-full bg-blue-400" />
// // // // // //               Retail Management Suite
// // // // // //             </motion.div>
            
// // // // // //             <motion.h2 variants={fadeInScale} className="text-4xl md:text-5xl font-bold leading-tight mb-6">
// // // // // //               Elevate Your <br />
// // // // // //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Retail Operations</span>
// // // // // //             </motion.h2>
            
// // // // // //             <motion.p variants={fadeInScale} className="text-slate-300 text-lg max-w-lg mb-8">
// // // // // //               Optimize your store with cutting-edge tools for inventory, analytics, and staff management.
// // // // // //             </motion.p>
            
// // // // // //             <motion.div variants={fadeInScale} className="grid grid-cols-3 gap-4 mb-10">
// // // // // //               {stats.map((stat, index) => (
// // // // // //                 <motion.div key={index} whileHover={{ scale: 1.05 }} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
// // // // // //                   <h3 className="text-2xl font-bold text-blue-400">{stat.value}</h3>
// // // // // //                   <p className="text-xs text-slate-400">{stat.label}</p>
// // // // // //                 </motion.div>
// // // // // //               ))}
// // // // // //             </motion.div>
            
// // // // // //             <motion.div variants={fadeInScale} className="grid grid-cols-2 gap-4">
// // // // // //               {features.map((feature, index) => (
// // // // // //                 <motion.div key={index} whileHover={{ scale: 1.03 }} className="flex items-start p-4 bg-white/5 rounded-xl border border-white/10">
// // // // // //                   <div className="p-2 bg-blue-900/30 rounded-lg mr-3">{feature.icon}</div>
// // // // // //                   <div>
// // // // // //                     <h3 className="font-medium">{feature.title}</h3>
// // // // // //                     <p className="text-sm text-slate-400">{feature.description}</p>
// // // // // //                   </div>
// // // // // //                 </motion.div>
// // // // // //               ))}
// // // // // //             </motion.div>
// // // // // //           </motion.div>
// // // // // //         </motion.div>
        
// // // // // //         {/* Right Section - Login Form */}
// // // // // //         <motion.div initial="hidden" animate="visible" variants={slideInFromRight} className="w-full lg:w-1/2 flex justify-center">
// // // // // //           <motion.div
// // // // // //             whileHover={{ scale: 1.02 }}
// // // // // //             className="relative w-full max-w-md bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl"
// // // // // //           >
// // // // // //             <motion.div className="relative z-10" variants={staggerContainer} initial="hidden" animate="visible">
// // // // // //               <motion.div variants={fadeInScale} className="flex flex-col items-center mb-8">
// // // // // //                 <motion.div
// // // // // //                   animate={{ rotate: [0, 360] }}
// // // // // //                   transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
// // // // // //                   className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4"
// // // // // //                 >
// // // // // //                   <Store className="h-8 w-8 text-white" />
// // // // // //                 </motion.div>
// // // // // //                 <h2 className="text-2xl font-bold">Store Login</h2>
// // // // // //                 <p className="text-slate-400 text-sm">Access your management dashboard</p>
// // // // // //               </motion.div>

// // // // // //               {error && (
// // // // // //                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6">
// // // // // //                   <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-3 flex items-center">
// // // // // //                     <AlertCircle className="h-4 w-4 text-red-400 mr-2" />
// // // // // //                     <span className="text-red-400 text-sm">{error}</span>
// // // // // //                   </div>
// // // // // //                 </motion.div>
// // // // // //               )}

// // // // // //               {success && (
// // // // // //                 <motion.div
// // // // // //                   initial={{ scale: 0 }}
// // // // // //                   animate={{ scale: 1 }}
// // // // // //                   className="absolute inset-0 flex items-center justify-center bg-green-900/20 rounded-2xl"
// // // // // //                 >
// // // // // //                   <CheckCircle className="w-16 h-16 text-green-400" />
// // // // // //                 </motion.div>
// // // // // //               )}

// // // // // //               <form onSubmit={handleUserCheck} className="space-y-6">
// // // // // //                 <motion.div variants={fadeInScale}>
// // // // // //                   <label className="flex items-center text-sm font-medium mb-1.5">
// // // // // //                     <Store className="w-4 h-4 mr-2 text-blue-400" /> Store ID
// // // // // //                   </label>
// // // // // //                   <motion.div animate={activeField === 'store' ? inputAnimation.focus : inputAnimation.blur} className="relative">
// // // // // //                     <input
// // // // // //                       ref={storeIdInputRef}
// // // // // //                       type="text"
// // // // // //                       value={storeId}
// // // // // //                       onChange={(e) => setStoreId(e.target.value)}
// // // // // //                       onFocus={() => setActiveField('store')}
// // // // // //                       onBlur={() => setActiveField(null)}
// // // // // //                       className="w-full px-4 py-3 pl-10 bg-white/5 border border-white/10 rounded-xl focus:outline-none text-white placeholder-slate-400"
// // // // // //                       placeholder="Enter Store ID"
// // // // // //                     />
// // // // // //                     <Store className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
// // // // // //                   </motion.div>
// // // // // //                 </motion.div>

// // // // // //                 <motion.div variants={fadeInScale}>
// // // // // //                   <label className="flex items-center text-sm font-medium mb-1.5">
// // // // // //                     <User className="w-4 h-4 mr-2 text-blue-400" /> User ID
// // // // // //                   </label>
// // // // // //                   <motion.div animate={activeField === 'user' ? inputAnimation.focus : inputAnimation.blur} className="relative">
// // // // // //                     <input
// // // // // //                       ref={userIdInputRef}
// // // // // //                       type="text"
// // // // // //                       value={id}
// // // // // //                       onChange={(e) => setId(e.target.value)}
// // // // // //                       onFocus={() => setActiveField('user')}
// // // // // //                       onBlur={() => setActiveField(null)}
// // // // // //                       className="w-full px-4 py-3 pl-10 bg-white/5 border border-white/10 rounded-xl focus:outline-none text-white placeholder-slate-400"
// // // // // //                       placeholder="Enter User ID"
// // // // // //                     />
// // // // // //                     <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
// // // // // //                   </motion.div>
// // // // // //                 </motion.div>

// // // // // //                 <motion.div variants={fadeInScale}>
// // // // // //                   <label className="flex items-center text-sm font-medium mb-1.5">
// // // // // //                     <Lock className="w-4 h-4 mr-2 text-blue-400" /> Password
// // // // // //                   </label>
// // // // // //                   <motion.div animate={activeField === 'password' ? inputAnimation.focus : inputAnimation.blur} className="relative">
// // // // // //                     <input
// // // // // //                       ref={passwordInputRef}
// // // // // //                       type="password"
// // // // // //                       value={password}
// // // // // //                       onChange={(e) => setPassword(e.target.value)}
// // // // // //                       onFocus={() => setActiveField('password')}
// // // // // //                       onBlur={() => setActiveField(null)}
// // // // // //                       className="w-full px-4 py-3 pl-10 bg-white/5 border border-white/10 rounded-xl focus:outline-none text-white placeholder-slate-400"
// // // // // //                       placeholder="Enter Password"
// // // // // //                     />
// // // // // //                     <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
// // // // // //                   </motion.div>
// // // // // //                 </motion.div>

// // // // // //                 <motion.div variants={fadeInScale} className="flex justify-between text-sm">
// // // // // //                   <label className="flex items-center">
// // // // // //                     <input type="checkbox" className="mr-2 rounded border-white/20 bg-white/5 text-blue-400 focus:ring-blue-400" />
// // // // // //                     <span className="text-slate-300">Remember me</span>
// // // // // //                   </label>
// // // // // //                   <button type="button" onClick={() => setIsForgotPasswordOpen(true)} className="text-blue-400 hover:text-blue-300">
// // // // // //                     Forgot Password?
// // // // // //                   </button>
// // // // // //                 </motion.div>

// // // // // //                 <motion.button
// // // // // //                   variants={fadeInScale}
// // // // // //                   type="submit"
// // // // // //                   disabled={isLoading}
// // // // // //                   whileHover={{ scale: 1.05 }}
// // // // // //                   whileTap={{ scale: 0.95 }}
// // // // // //                   className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-medium disabled:opacity-50"
// // // // // //                 >
// // // // // //                   {isLoading ? (
// // // // // //                     <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }} className="flex items-center justify-center">
// // // // // //                       <RefreshCw className="w-5 h-5 mr-2" /> Verifying...
// // // // // //                     </motion.span>
// // // // // //                   ) : (
// // // // // //                     "Sign In"
// // // // // //                   )}
// // // // // //                 </motion.button>
// // // // // //               </form>

// // // // // //               <motion.div variants={fadeInScale} className="mt-6 text-center text-sm text-slate-300">
// // // // // //                 New to RetailPro? <Link to="/signup" className="text-blue-400 hover:text-blue-300 font-medium">Sign Up</Link>
// // // // // //               </motion.div>
// // // // // //             </motion.div>
// // // // // //           </motion.div>
// // // // // //         </motion.div>
// // // // // //       </div>

// // // // // //       {/* Forgot Password Modal */}
// // // // // //       <AnimatePresence>
// // // // // //         {isForgotPasswordOpen && (
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0 }}
// // // // // //             animate={{ opacity: 1 }}
// // // // // //             exit={{ opacity: 0 }}
// // // // // //             className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
// // // // // //           >
// // // // // //             <motion.div
// // // // // //               initial={{ scale: 0.9, y: 20 }}
// // // // // //               animate={{ scale: 1, y: 0 }}
// // // // // //               className="bg-slate-900/90 backdrop-blur-xl p-6 rounded-2xl w-full max-w-md border border-white/10"
// // // // // //             >
// // // // // //               <motion.button
// // // // // //                 whileHover={{ scale: 1.1 }}
// // // // // //                 onClick={() => setIsForgotPasswordOpen(false)}
// // // // // //                 className="absolute top-3 right-3 text-slate-300 hover:text-white"
// // // // // //               >
// // // // // //                 <X className="w-6 h-6" />
// // // // // //               </motion.button>
              
// // // // // //               <div className="flex flex-col items-center mb-6">
// // // // // //                 <div className="w-14 h-14 bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
// // // // // //                   <Mail className="h-6 w-6 text-blue-400" />
// // // // // //                 </div>
// // // // // //                 <h2 className="text-xl font-bold">Reset Password</h2>
// // // // // //                 <p className="text-slate-400 text-sm text-center">Enter your email to receive reset instructions.</p>
// // // // // //               </div>
              
// // // // // //               <div className="relative mb-6">
// // // // // //                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
// // // // // //                 <input
// // // // // //                   type="email"
// // // // // //                   value={email}
// // // // // //                   onChange={(e) => setEmail(e.target.value)}
// // // // // //                   className="w-full pl-10 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none text-white placeholder-slate-400"
// // // // // //                   placeholder="Your email address"
// // // // // //                 />
// // // // // //               </div>
              
// // // // // //               {resetMessage && (
// // // // // //                 <motion.div
// // // // // //                   initial={{ opacity: 0 }}
// // // // // //                   animate={{ opacity: 1 }}
// // // // // //                   className={`mb-6 p-3 rounded-lg text-sm ${resetMessage.includes("sent") ? "bg-green-900/20 text-green-400" : "bg-red-900/20 text-red-400"}`}
// // // // // //                 >
// // // // // //                   {resetMessage}
// // // // // //                 </motion.div>
// // // // // //               )}
              
// // // // // //               <motion.button
// // // // // //                 whileHover={{ scale: 1.03 }}
// // // // // //                 onClick={handleForgotPassword}
// // // // // //                 className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-medium"
// // // // // //               >
// // // // // //                 Send Instructions
// // // // // //               </motion.button>
// // // // // //             </motion.div>
// // // // // //           </motion.div>
// // // // // //         )}
// // // // // //       </AnimatePresence>

// // // // // //       {/* Footer */}
// // // // // //       <footer className="relative z-10 bg-slate-900/40 backdrop-blur-lg py-4 px-6 text-center text-slate-400 text-sm border-t border-white/10">
// // // // // //         © {new Date().getFullYear()} RetailPro. All rights reserved.
// // // // // //       </footer>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Login;
// // // // // import React, { useState, useEffect, useRef } from "react";
// // // // // import { useNavigate, Link } from "react-router-dom";
// // // // // import { useStore } from "./StoreContext";
// // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // import { 
// // // // //   AlertCircle, Lock, User, Store, Mail, 
// // // // //   ShoppingBag, BarChart4, Users, Calendar,
// // // // //   ShieldCheck, ArrowRight, CheckCircle,
// // // // //   CreditCard, Package, Gift, RefreshCw,
// // // // //   Search, Menu, X
// // // // // } from "lucide-react";

// // // // // const Login = () => {
// // // // //   // State management
// // // // //   const [storeId, setStoreId] = useState("");
// // // // //   const [password, setPassword] = useState("");
// // // // //   const [id, setId] = useState("");
// // // // //   const [error, setError] = useState(null);
// // // // //   const [success, setSuccess] = useState(false);
// // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // //   const [activeField, setActiveField] = useState(null);
// // // // //   const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
// // // // //   const [email, setEmail] = useState("");
// // // // //   const [resetMessage, setResetMessage] = useState("");
// // // // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// // // // //   const navigate = useNavigate();
// // // // //   const { setStoreName, setStoreId: setStoreInContext, setUserId } = useStore();
  
// // // // //   // Refs for animation elements
// // // // //   const canvasRef = useRef(null);
// // // // //   const storeIdInputRef = useRef(null);
// // // // //   const userIdInputRef = useRef(null);
// // // // //   const passwordInputRef = useRef(null);
  
// // // // //   // Theme colors (light theme)
// // // // //   const colors = {
// // // // //     primary: "#3B82F6", // Blue
// // // // //     secondary: "#6366F1", // Indigo
// // // // //     accent: "#8B5CF6", // Violet
// // // // //     success: "#10B981", // Emerald
// // // // //     warning: "#F59E0B", // Amber
// // // // //     error: "#EF4444", // Red
// // // // //     dark: "#1E293B", // Slate 800
// // // // //     light: "#F8FAFC", // Slate 50
// // // // //     text: "#334155", // Slate 700
// // // // //   };
  
// // // // //   // Interactive particle effect for canvas (light theme adjusted)
// // // // //   useEffect(() => {
// // // // //     if (!canvasRef.current) return;
    
// // // // //     const canvas = canvasRef.current;
// // // // //     const ctx = canvas.getContext('2d');
// // // // //     let particles = [];
// // // // //     let mousePosition = { x: null, y: null };
// // // // //     let animationFrame;
    
// // // // //     const setCanvasDimensions = () => {
// // // // //       canvas.width = window.innerWidth;
// // // // //       canvas.height = window.innerHeight;
// // // // //     };
    
// // // // //     setCanvasDimensions();
    
// // // // //     class Particle {
// // // // //       constructor(x, y, size, color, speed) {
// // // // //         this.x = x || Math.random() * canvas.width;
// // // // //         this.y = y || Math.random() * canvas.height;
// // // // //         this.size = size || Math.random() * 2 + 1;
// // // // //         this.baseSize = this.size;
// // // // //         this.color = color || `hsla(${Math.random() * 60 + 180}, 70%, 60%, ${Math.random() * 0.3 + 0.1})`;
// // // // //         this.speedX = (Math.random() - 0.5) * speed || (Math.random() - 0.5) * 0.6;
// // // // //         this.speedY = (Math.random() - 0.5) * speed || (Math.random() - 0.5) * 0.6;
// // // // //         this.maxSize = this.baseSize * 2.5;
// // // // //         this.angle = Math.random() * Math.PI * 2;
// // // // //         this.angleSpeed = Math.random() * 0.08 - 0.04;
// // // // //       }
      
// // // // //       update() {
// // // // //         this.x += this.speedX + Math.sin(this.angle) * 0.1;
// // // // //         this.y += this.speedY + Math.cos(this.angle) * 0.1;
// // // // //         this.angle += this.angleSpeed;
        
// // // // //         if (this.x < 0 || this.x > canvas.width) this.speedX *= -1.01;
// // // // //         if (this.y < 0 || this.y > canvas.height) this.speedY *= -1.01;
        
// // // // //         if (mousePosition.x != null && mousePosition.y != null) {
// // // // //           const dx = mousePosition.x - this.x;
// // // // //           const dy = mousePosition.y - this.y;
// // // // //           const distance = Math.sqrt(dx * dx + dy * dy);
          
// // // // //           if (distance < 90) {
// // // // //             const force = (90 - distance) / 1800;
// // // // //             this.x += dx * force;
// // // // //             this.y += dy * force;
// // // // //             this.size = Math.min(this.maxSize, this.baseSize + (90 - distance) / 12);
// // // // //           } else {
// // // // //             this.size = Math.max(this.baseSize, this.size - 0.08);
// // // // //           }
// // // // //         }
// // // // //       }
      
// // // // //       draw() {
// // // // //         ctx.beginPath();
// // // // //         ctx.fillStyle = this.color;
// // // // //         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
// // // // //         ctx.fill();
// // // // //       }
// // // // //     }
    
// // // // //     const initParticles = () => {
// // // // //       particles = [];
// // // // //       const particleCount = Math.min(window.innerWidth / 12, 120);
      
// // // // //       for (let i = 0; i < particleCount; i++) {
// // // // //         const size = Math.random() * 2 + 1;
// // // // //         const speed = Math.random() * 0.4 + 0.2;
// // // // //         const hue = Math.random() * 60 + 180; // Light blue to purple hues
// // // // //         const color = `hsla(${hue}, 70%, 60%, ${Math.random() * 0.3 + 0.1})`;
// // // // //         particles.push(new Particle(null, null, size, color, speed));
// // // // //       }
// // // // //     };
    
// // // // //     const handleMouseMove = (e) => {
// // // // //       mousePosition.x = e.clientX;
// // // // //       mousePosition.y = e.clientY;
// // // // //     };
    
// // // // //     const animate = () => {
// // // // //       ctx.clearRect(0, 0, canvas.width, canvas.height);
// // // // //       const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
// // // // //       gradient.addColorStop(0, "rgba(248, 250, 252, 0.05)");
// // // // //       gradient.addColorStop(1, "rgba(241, 245, 249, 0.05)");
// // // // //       ctx.fillStyle = gradient;
// // // // //       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
// // // // //       particles.forEach((particle, index) => {
// // // // //         particle.update();
// // // // //         particle.draw();
        
// // // // //         for (let j = index + 1; j < particles.length; j++) {
// // // // //           const dx = particle.x - particles[j].x;
// // // // //           const dy = particle.y - particles[j].y;
// // // // //           const distance = Math.sqrt(dx * dx + dy * dy);
          
// // // // //           if (distance < 80) {
// // // // //             ctx.beginPath();
// // // // //             ctx.strokeStyle = `rgba(59, 130, 246, ${0.08 - distance / 800})`;
// // // // //             ctx.lineWidth = 0.4;
// // // // //             ctx.moveTo(particle.x, particle.y);
// // // // //             ctx.lineTo(particles[j].x, particles[j].y);
// // // // //             ctx.stroke();
// // // // //           }
// // // // //         }
// // // // //       });
      
// // // // //       animationFrame = requestAnimationFrame(animate);
// // // // //     };
    
// // // // //     const handleResize = () => {
// // // // //       setCanvasDimensions();
// // // // //       initParticles();
// // // // //     };
    
// // // // //     window.addEventListener('resize', handleResize);
// // // // //     window.addEventListener('mousemove', handleMouseMove);
// // // // //     initParticles();
// // // // //     animate();
    
// // // // //     return () => {
// // // // //       window.removeEventListener('resize', handleResize);
// // // // //       window.removeEventListener('mousemove', handleMouseMove);
// // // // //       cancelAnimationFrame(animationFrame);
// // // // //     };
// // // // //   }, []);

// // // // //   // Focus fields with sequence animation
// // // // //   useEffect(() => {
// // // // //     const timers = [
// // // // //       setTimeout(() => storeIdInputRef.current?.focus(), 1000),
// // // // //       setTimeout(() => userIdInputRef.current?.focus(), 1300),
// // // // //       setTimeout(() => passwordInputRef.current?.focus(), 1600),
// // // // //       setTimeout(() => storeIdInputRef.current?.focus(), 1900),
// // // // //     ];
// // // // //     return () => timers.forEach(clearTimeout);
// // // // //   }, []);

// // // // //   const handleUserCheck = async (e) => {
// // // // //     e.preventDefault();
// // // // //     setIsLoading(true);
// // // // //     setError(null);
    
// // // // //     if (!storeId.trim() || !id.trim() || !password.trim()) {
// // // // //       setError("All fields are required.");
// // // // //       setIsLoading(false);
// // // // //       return;
// // // // //     }
    
// // // // //     try {
// // // // //       const response = await fetch("http://localhost:5001/check_user", {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //         body: JSON.stringify({ storeId, id: String(id), password }),
// // // // //       });
      
// // // // //       const data = await response.json();
      
// // // // //       if (data.message === "User found!") {
// // // // //         localStorage.setItem("storeName", data.store_name);
// // // // //         localStorage.setItem("storeId", storeId);
// // // // //         localStorage.setItem("userId", data.id);
// // // // //         localStorage.setItem("userRole", data.role);
// // // // //         localStorage.setItem("storeAddress", data.store_address);
// // // // //         localStorage.setItem("email", data.email);
// // // // //         localStorage.setItem("fullName", data.full_name);
// // // // //         localStorage.setItem("phoneNumber", data.phone_number);
        
// // // // //         setStoreName(data.store_name);
// // // // //         setStoreInContext(storeId);
// // // // //         setUserId(data.id);
        
// // // // //         setSuccess(true);
// // // // //         setTimeout(() => {
// // // // //           switch (data.role) {
// // // // //             case "admin": navigate("/AdminDashboard"); break;
// // // // //             case "manager": navigate("/ManagerDashboard"); break;
// // // // //             case "cashier": navigate("/CashierDashboard"); break;
// // // // //             default: navigate("/Inter");
// // // // //           }
// // // // //         }, 1500);
// // // // //       } else {
// // // // //         setError("Invalid credentials. Please check your details.");
// // // // //       }
// // // // //     } catch (err) {
// // // // //       setError("Connection error. Please try again.");
// // // // //     } finally {
// // // // //       if (!success) setIsLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const handleForgotPassword = async () => {
// // // // //     if (!email.trim()) {
// // // // //       setResetMessage("Please enter your email address");
// // // // //       return;
// // // // //     }
    
// // // // //     if (!/^\S+@\S+\.\S+$/.test(email)) {
// // // // //       setResetMessage("Please enter a valid email address");
// // // // //       return;
// // // // //     }
    
// // // // //     setResetMessage("Processing request...");
    
// // // // //     try {
// // // // //       const response = await fetch("http://localhost:5001/forgot_password", {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //         body: JSON.stringify({ email }),
// // // // //       });
      
// // // // //       const data = await response.json();
// // // // //       setResetMessage(response.ok 
// // // // //         ? "Password reset instructions sent!" 
// // // // //         : data.message || "Failed to send reset email.");
// // // // //     } catch (error) {
// // // // //       setResetMessage("Connection error. Please try again.");
// // // // //     }
// // // // //   };
  
// // // // //   // Animation variants
// // // // //   const logoAnimation = {
// // // // //     initial: { scale: 0, rotate: -180 },
// // // // //     animate: { scale: 1, rotate: 0, transition: { type: "spring", duration: 1.5 } }
// // // // //   };
  
// // // // //   const fadeInScale = {
// // // // //     hidden: { opacity: 0, scale: 0.9 },
// // // // //     visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
// // // // //   };
  
// // // // //   const slideInFromRight = {
// // // // //     hidden: { x: 100, opacity: 0 },
// // // // //     visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
// // // // //   };
  
// // // // //   const slideInFromLeft = {
// // // // //     hidden: { x: -100, opacity: 0 },
// // // // //     visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
// // // // //   };
  
// // // // //   const staggerContainer = {
// // // // //     hidden: { opacity: 0 },
// // // // //     visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
// // // // //   };
  
// // // // //   const inputAnimation = {
// // // // //     focus: { scale: 1.02, borderColor: colors.primary, transition: { duration: 0.3 } },
// // // // //     blur: { scale: 1, borderColor: "#E2E8F0", transition: { duration: 0.3 } }
// // // // //   };
  
// // // // //   const features = [
// // // // //     { icon: <ShoppingBag className="w-6 h-6" />, title: "Inventory", description: "Real-time tracking" },
// // // // //     { icon: <BarChart4 className="w-6 h-6" />, title: "Analytics", description: "Sales insights" },
// // // // //     { icon: <Users className="w-6 h-6" />, title: "Staff", description: "Team management" },
// // // // //     { icon: <CreditCard className="w-6 h-6" />, title: "POS", description: "Payment processing" },
// // // // //     { icon: <Package className="w-6 h-6" />, title: "Suppliers", description: "Vendor portal" },
// // // // //     { icon: <Gift className="w-6 h-6" />, title: "Loyalty", description: "Customer rewards" },
// // // // //   ];
  
// // // // //   const stats = [
// // // // //     { value: "27%", label: "Revenue Increase" },
// // // // //     { value: "3.2x", label: "Inventory Turnover" },
// // // // //     { value: "5hrs", label: "Time Saved" },
// // // // //   ];

// // // // //   return (
// // // // //     <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50 text-gray-900 font-sans">
// // // // //       {/* Particle Background */}
// // // // //       <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
      
// // // // //       {/* Gradient Overlay */}
// // // // //       <motion.div
// // // // //         className="absolute inset-0"
// // // // //         animate={{ opacity: [0.05, 0.1, 0.05] }}
// // // // //         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
// // // // //         style={{ background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.05), transparent 70%)" }}
// // // // //       />
      
// // // // //       {/* Floating Orbs */}
// // // // //       <motion.div
// // // // //         animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
// // // // //         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
// // // // //         className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full blur-2xl bg-blue-200/30 z-0"
// // // // //       />
// // // // //       <motion.div
// // // // //         animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
// // // // //         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
// // // // //         className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full blur-2xl bg-indigo-200/30 z-0"
// // // // //       />
      
// // // // //       {/* Header */}
// // // // //       <header className="relative z-20 bg-white/80 backdrop-blur-md px-6 py-4 border-b border-gray-100 shadow-sm">
// // // // //         <div className="mx-auto max-w-7xl flex items-center justify-between">
// // // // //           <motion.div initial={logoAnimation.initial} animate={logoAnimation.animate} className="flex items-center gap-3">
// // // // //             <div className="relative">
// // // // //               <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
// // // // //                 <Store className="h-5 w-5 text-white" />
// // // // //               </div>
// // // // //               <motion.div 
// // // // //                 animate={{ scale: [1, 1.15, 1] }}
// // // // //                 transition={{ duration: 2, repeat: Infinity }}
// // // // //                 className="absolute -inset-1 rounded-xl bg-blue-300/20 blur-sm"
// // // // //               />
// // // // //             </div>
// // // // //             <motion.h1 
// // // // //               initial={{ opacity: 0, x: -20 }}
// // // // //               animate={{ opacity: 1, x: 0 }}
// // // // //               transition={{ delay: 0.5 }}
// // // // //               className="text-xl font-bold text-gray-900"
// // // // //             >
// // // // //               RetailPro
// // // // //             </motion.h1>
// // // // //           </motion.div>
          
// // // // //           <nav className="hidden md:flex items-center gap-8">
// // // // //             {['Home', 'Features', 'Pricing', 'Support'].map((text, index) => (
// // // // //               <motion.div key={text} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.1 }}>
// // // // //                 <Link to={text === 'Home' ? '/' : `/${text}Page`} className="text-gray-600 hover:text-blue-600 relative group">
// // // // //                   {text}
// // // // //                   <motion.span initial={{ width: 0 }} whileHover={{ width: '100%' }} className="absolute -bottom-1 left-0 h-0.5 bg-blue-500 rounded-full" />
// // // // //                 </Link>
// // // // //               </motion.div>
// // // // //             ))}
// // // // //           </nav>
          
// // // // //           <motion.button
// // // // //             initial={{ opacity: 0 }}
// // // // //             animate={{ opacity: 1 }}
// // // // //             transition={{ delay: 0.8 }}
// // // // //             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// // // // //             className="md:hidden p-2 rounded-lg hover:bg-gray-100"
// // // // //           >
// // // // //             {mobileMenuOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
// // // // //           </motion.button>
          
// // // // //           <div className="hidden md:flex items-center gap-3">
// // // // //             <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }}>
// // // // //               <Link to="/SignUp">
// // // // //                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md">
// // // // //                   Get Started
// // // // //                 </motion.button>
// // // // //               </Link>
// // // // //             </motion.div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </header>
      
// // // // //       {/* Mobile Menu */}
// // // // //       <AnimatePresence>
// // // // //         {mobileMenuOpen && (
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, height: 0 }}
// // // // //             animate={{ opacity: 1, height: 'auto' }}
// // // // //             exit={{ opacity: 0, height: 0 }}
// // // // //             className="md:hidden relative z-20 bg-white/90 border-b border-gray-100 shadow-sm"
// // // // //           >
// // // // //             <nav className="flex flex-col py-3 px-6">
// // // // //               {['Home', 'Features', 'Pricing', 'Support'].map((text, index) => (
// // // // //                 <motion.div key={text} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
// // // // //                   <Link to={text === 'Home' ? '/' : `/${text}Page`} className="block py-3 text-gray-600 hover:text-blue-600 border-b border-gray-100 last:border-0" onClick={() => setMobileMenuOpen(false)}>
// // // // //                     {text}
// // // // //                   </Link>
// // // // //                 </motion.div>
// // // // //               ))}
// // // // //             </nav>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>

// // // // //       {/* Main Content */}
// // // // //       <div className="relative z-10 min-h-[calc(100vh-72px)] mx-auto max-w-7xl px-6 py-8 md:py-16 flex flex-col lg:flex-row items-center">
// // // // //         {/* Left Section */}
// // // // //         <motion.div initial="hidden" animate="visible" variants={slideInFromLeft} className="w-full lg:w-1/2 lg:pr-10 mb-12 lg:mb-0">
// // // // //           <motion.div variants={staggerContainer}>
// // // // //             <motion.div variants={fadeInScale} className="inline-flex items-center py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-xs font-medium mb-6">
// // // // //               <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} className="mr-2 w-2 h-2 rounded-full bg-blue-500" />
// // // // //               Retail Management Suite
// // // // //             </motion.div>
            
// // // // //             <motion.h2 variants={fadeInScale} className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
// // // // //               Empower Your <br />
// // // // //               <span className="text-blue-600">Retail Business</span>
// // // // //             </motion.h2>
            
// // // // //             <motion.p variants={fadeInScale} className="text-gray-600 text-lg max-w-lg mb-8">
// // // // //               Streamline operations and boost efficiency with our all-in-one retail management platform.
// // // // //             </motion.p>
            
// // // // //             {/* Placeholder for Optional Image */}
// // // // //             <motion.div variants={fadeInScale} className="mb-8">
// // // // //               <div className="w-full h-48 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
// // // // //                 <span className="text-gray-400 text-sm">
// // // // //                   {/* Uncomment and replace with your image path if desired */}
// // // // //                   {/* <img src="/path/to/retail-image.jpg" alt="Retail Store" className="w-full h-full object-cover rounded-xl" /> */}
// // // // //                   Image Placeholder (Optional)
// // // // //                 </span>
// // // // //               </div>
// // // // //             </motion.div>
            
// // // // //             <motion.div variants={fadeInScale} className="grid grid-cols-3 gap-4 mb-10">
// // // // //               {stats.map((stat, index) => (
// // // // //                 <motion.div key={index} whileHover={{ scale: 1.05 }} className="text-center p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
// // // // //                   <h3 className="text-2xl font-bold text-blue-600">{stat.value}</h3>
// // // // //                   <p className="text-xs text-gray-500">{stat.label}</p>
// // // // //                 </motion.div>
// // // // //               ))}
// // // // //             </motion.div>
            
// // // // //             <motion.div variants={fadeInScale} className="grid grid-cols-2 gap-4">
// // // // //               {features.map((feature, index) => (
// // // // //                 <motion.div key={index} whileHover={{ scale: 1.03 }} className="flex items-start p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
// // // // //                   <div className="p-2 bg-blue-50 rounded-lg mr-3 text-blue-600">{feature.icon}</div>
// // // // //                   <div>
// // // // //                     <h3 className="font-medium text-gray-900">{feature.title}</h3>
// // // // //                     <p className="text-sm text-gray-500">{feature.description}</p>
// // // // //                   </div>
// // // // //                 </motion.div>
// // // // //               ))}
// // // // //             </motion.div>
// // // // //           </motion.div>
// // // // //         </motion.div>
        
// // // // //         {/* Right Section - Login Form */}
// // // // //         <motion.div initial="hidden" animate="visible" variants={slideInFromRight} className="w-full lg:w-1/2 flex justify-center">
// // // // //           <motion.div
// // // // //             whileHover={{ scale: 1.02 }}
// // // // //             className="relative w-full max-w-md bg-white p-8 rounded-2xl border border-gray-100 shadow-xl"
// // // // //           >
// // // // //             <motion.div className="relative z-10" variants={staggerContainer} initial="hidden" animate="visible">
// // // // //               <motion.div variants={fadeInScale} className="flex flex-col items-center mb-8">
// // // // //                 <motion.div
// // // // //                   animate={{ rotate: [0, 360] }}
// // // // //                   transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
// // // // //                   className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-md"
// // // // //                 >
// // // // //                   <Store className="h-8 w-8 text-white" />
// // // // //                 </motion.div>
// // // // //                 <h2 className="text-2xl font-bold text-gray-900">Store Login</h2>
// // // // //                 <p className="text-gray-500 text-sm">Access your management dashboard</p>
// // // // //               </motion.div>

// // // // //               {error && (
// // // // //                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6">
// // // // //                   <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-center">
// // // // //                     <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
// // // // //                     <span className="text-red-600 text-sm">{error}</span>
// // // // //                   </div>
// // // // //                 </motion.div>
// // // // //               )}

// // // // //               {success && (
// // // // //                 <motion.div
// // // // //                   initial={{ scale: 0 }}
// // // // //                   animate={{ scale: 1 }}
// // // // //                   className="absolute inset-0 flex items-center justify-center bg-green-50 rounded-2xl"
// // // // //                 >
// // // // //                   <CheckCircle className="w-16 h-16 text-green-500" />
// // // // //                 </motion.div>
// // // // //               )}

// // // // //               <form onSubmit={handleUserCheck} className="space-y-6">
// // // // //                 <motion.div variants={fadeInScale}>
// // // // //                   <label className="flex items-center text-sm font-medium text-gray-700 mb-1.5">
// // // // //                     <Store className="w-4 h-4 mr-2 text-blue-600" /> Store ID
// // // // //                   </label>
// // // // //                   <motion.div animate={activeField === 'store' ? inputAnimation.focus : inputAnimation.blur} className="relative">
// // // // //                     <input
// // // // //                       ref={storeIdInputRef}
// // // // //                       type="text"
// // // // //                       value={storeId}
// // // // //                       onChange={(e) => setStoreId(e.target.value)}
// // // // //                       onFocus={() => setActiveField('store')}
// // // // //                       onBlur={() => setActiveField(null)}
// // // // //                       className="w-full px-4 py-3 pl-10 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none text-gray-900 placeholder-gray-400"
// // // // //                       placeholder="Enter Store ID"
// // // // //                     />
// // // // //                     <Store className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-600" />
// // // // //                   </motion.div>
// // // // //                 </motion.div>

// // // // //                 <motion.div variants={fadeInScale}>
// // // // //                   <label className="flex items-center text-sm font-medium text-gray-700 mb-1.5">
// // // // //                     <User className="w-4 h-4 mr-2 text-blue-600" /> User ID
// // // // //                   </label>
// // // // //                   <motion.div animate={activeField === 'user' ? inputAnimation.focus : inputAnimation.blur} className="relative">
// // // // //                     <input
// // // // //                       ref={userIdInputRef}
// // // // //                       type="text"
// // // // //                       value={id}
// // // // //                       onChange={(e) => setId(e.target.value)}
// // // // //                       onFocus={() => setActiveField('user')}
// // // // //                       onBlur={() => setActiveField(null)}
// // // // //                       className="w-full px-4 py-3 pl-10 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none text-gray-900 placeholder-gray-400"
// // // // //                       placeholder="Enter User ID"
// // // // //                     />
// // // // //                     <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-600" />
// // // // //                   </motion.div>
// // // // //                 </motion.div>

// // // // //                 <motion.div variants={fadeInScale}>
// // // // //                   <label className="flex items-center text-sm font-medium text-gray-700 mb-1.5">
// // // // //                     <Lock className="w-4 h-4 mr-2 text-blue-600" /> Password
// // // // //                   </label>
// // // // //                   <motion.div animate={activeField === 'password' ? inputAnimation.focus : inputAnimation.blur} className="relative">
// // // // //                     <input
// // // // //                       ref={passwordInputRef}
// // // // //                       type="password"
// // // // //                       value={password}
// // // // //                       onChange={(e) => setPassword(e.target.value)}
// // // // //                       onFocus={() => setActiveField('password')}
// // // // //                       onBlur={() => setActiveField(null)}
// // // // //                       className="w-full px-4 py-3 pl-10 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none text-gray-900 placeholder-gray-400"
// // // // //                       placeholder="Enter Password"
// // // // //                     />
// // // // //                     <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-600" />
// // // // //                   </motion.div>
// // // // //                 </motion.div>

// // // // //                 <motion.div variants={fadeInScale} className="flex justify-between text-sm">
// // // // //                   <label className="flex items-center">
// // // // //                     <input type="checkbox" className="mr-2 rounded border-gray-300 bg-white text-blue-600 focus:ring-blue-500" />
// // // // //                     <span className="text-gray-600">Remember me</span>
// // // // //                   </label>
// // // // //                   <button type="button" onClick={() => setIsForgotPasswordOpen(true)} className="text-blue-600 hover:text-blue-700">
// // // // //                     Forgot Password?
// // // // //                   </button>
// // // // //                 </motion.div>

// // // // //                 <motion.button
// // // // //                   variants={fadeInScale}
// // // // //                   type="submit"
// // // // //                   disabled={isLoading}
// // // // //                   whileHover={{ scale: 1.05 }}
// // // // //                   whileTap={{ scale: 0.95 }}
// // // // //                   className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium shadow-md disabled:opacity-50"
// // // // //                 >
// // // // //                   {isLoading ? (
// // // // //                     <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }} className="flex items-center justify-center">
// // // // //                       <RefreshCw className="w-5 h-5 mr-2" /> Verifying...
// // // // //                     </motion.span>
// // // // //                   ) : (
// // // // //                     "Sign In"
// // // // //                   )}
// // // // //                 </motion.button>
// // // // //               </form>

// // // // //               <motion.div variants={fadeInScale} className="mt-6 text-center text-sm text-gray-600">
// // // // //                 New to RetailPro? <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-medium">Sign Up</Link>
// // // // //               </motion.div>
// // // // //             </motion.div>
// // // // //           </motion.div>
// // // // //         </motion.div>
// // // // //       </div>

// // // // //       {/* Forgot Password Modal */}
// // // // //       <AnimatePresence>
// // // // //         {isForgotPasswordOpen && (
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0 }}
// // // // //             animate={{ opacity: 1 }}
// // // // //             exit={{ opacity: 0 }}
// // // // //             className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50"
// // // // //           >
// // // // //             <motion.div
// // // // //               initial={{ scale: 0.9, y: 20 }}
// // // // //               animate={{ scale: 1, y: 0 }}
// // // // //               className="bg-white p-6 rounded-2xl w-full max-w-md border border-gray-100 shadow-xl"
// // // // //             >
// // // // //               <motion.button
// // // // //                 whileHover={{ scale: 1.1 }}
// // // // //                 onClick={() => setIsForgotPasswordOpen(false)}
// // // // //                 className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
// // // // //               >
// // // // //                 <X className="w-6 h-6" />
// // // // //               </motion.button>
              
// // // // //               <div className="flex flex-col items-center mb-6">
// // // // //                 <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4">
// // // // //                   <Mail className="h-6 w-6 text-blue-600" />
// // // // //                 </div>
// // // // //                 <h2 className="text-xl font-bold text-gray-900">Reset Password</h2>
// // // // //                 <p className="text-gray-500 text-sm text-center">Enter your email to receive reset instructions.</p>
// // // // //               </div>
              
// // // // //               <div className="relative mb-6">
// // // // //                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-600" />
// // // // //                 <input
// // // // //                   type="email"
// // // // //                   value={email}
// // // // //                   onChange={(e) => setEmail(e.target.value)}
// // // // //                   className="w-full pl-10 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none text-gray-900 placeholder-gray-400"
// // // // //                   placeholder="Your email address"
// // // // //                 />
// // // // //               </div>
              
// // // // //               {resetMessage && (
// // // // //                 <motion.div
// // // // //                   initial={{ opacity: 0 }}
// // // // //                   animate={{ opacity: 1 }}
// // // // //                   className={`mb-6 p-3 rounded-lg text-sm ${resetMessage.includes("sent") ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}
// // // // //                 >
// // // // //                   {resetMessage}
// // // // //                 </motion.div>
// // // // //               )}
              
// // // // //               <motion.button
// // // // //                 whileHover={{ scale: 1.03 }}
// // // // //                 onClick={handleForgotPassword}
// // // // //                 className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium shadow-md"
// // // // //               >
// // // // //                 Send Instructions
// // // // //               </motion.button>
// // // // //             </motion.div>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>

// // // // //       {/* Footer */}
// // // // //       <footer className="relative z-10 bg-white/80 backdrop-blur-md py-4 px-6 text-center text-gray-500 text-sm border-t border-gray-100 shadow-sm">
// // // // //         © {new Date().getFullYear()} RetailPro. All rights reserved.
// // // // //       </footer>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Login;

// // import React, { useState, useEffect, useRef } from "react";
// // import { useNavigate, Link } from "react-router-dom";
// // import { useStore } from "./StoreContext";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { 
// //   AlertCircle, Lock, User, Store, Mail, 
// //   ShoppingBag, BarChart4, Users, Calendar,
// //   ShieldCheck, ArrowRight, CheckCircle, Coffee,
// //   CreditCard, Truck, Package, Gift, RefreshCw,
// //   Search, Menu, X
// // } from "lucide-react";

// // const Login = () => {
// //   // State management
// //   const [storeId, setStoreId] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [id, setId] = useState("");
// //   const [error, setError] = useState(null);
// //   const [success, setSuccess] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [activeField, setActiveField] = useState(null);
// //   const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
// //   const [email, setEmail] = useState("");
// //   const [resetMessage, setResetMessage] = useState("");
// //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //   const navigate = useNavigate();
// //   const { setStoreName, setStoreId: setStoreInContext, setUserId } = useStore();
  
// //   // Refs for animation elements
// //   const canvasRef = useRef(null);
// //   const storeIdInputRef = useRef(null);
// //   const userIdInputRef = useRef(null);
// //   const passwordInputRef = useRef(null);
  
// //   // Theme colors
// //   const colors = {
// //     primary: "#3B82F6", // Blue
// //     secondary: "#6366F1", // Indigo
// //     accent: "#8B5CF6", // Violet
// //     success: "#10B981", // Emerald
// //     warning: "#F59E0B", // Amber
// //     error: "#EF4444", // Red
// //     dark: "#1E293B", // Slate 800
// //     light: "#F1F5F9", // Slate 100
// //   };
  
// //   // 3D Store images for carousel
// //   const storeImages = [
// //     "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
// //     "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
// //     "https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
// //   ];
  
// //   // Change background image every 5 seconds
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % storeImages.length);
// //     }, 5000);
    
// //     return () => clearInterval(interval);
// //   }, []);
  
// //   // Interactive particle effect for canvas
// //   useEffect(() => {
// //     if (!canvasRef.current) return;
    
// //     const canvas = canvasRef.current;
// //     const ctx = canvas.getContext('2d');
// //     let particles = [];
// //     let mousePosition = { x: null, y: null };
// //     let animationFrame;
    
// //     // Set canvas dimensions
// //     const setCanvasDimensions = () => {
// //       canvas.width = window.innerWidth;
// //       canvas.height = window.innerHeight;
// //     };
    
// //     setCanvasDimensions();
    
// //     // Particle class with more sophisticated behavior
// //     class Particle {
// //       constructor(x, y, size, color, speed) {
// //         this.x = x || Math.random() * canvas.width;
// //         this.y = y || Math.random() * canvas.height;
// //         this.size = size || Math.random() * 3 + 1;
// //         this.baseSize = this.size;
// //         this.color = color || `hsla(${Math.random() * 60 + 210}, 80%, 60%, ${Math.random() * 0.4 + 0.1})`;
// //         this.speedX = (Math.random() - 0.5) * speed || (Math.random() - 0.5) * 0.8;
// //         this.speedY = (Math.random() - 0.5) * speed || (Math.random() - 0.5) * 0.8;
// //         this.maxSize = this.baseSize * 3;
// //         this.angle = Math.random() * Math.PI * 2;
// //         this.angleSpeed = Math.random() * 0.1 - 0.05;
// //         this.curveRadius = Math.random() * 2;
// //       }
      
// //       update() {
// //         // Create subtle wave-like motion
// //         this.x += this.speedX + Math.sin(this.angle) * this.curveRadius * 0.1;
// //         this.y += this.speedY + Math.cos(this.angle) * this.curveRadius * 0.1;
// //         this.angle += this.angleSpeed;
        
// //         // Bounce off edges with momentum change
// //         if (this.x < 0 || this.x > canvas.width) {
// //           this.speedX *= -1.02;
// //           this.x = Math.max(0, Math.min(this.x, canvas.width));
// //         }
// //         if (this.y < 0 || this.y > canvas.height) {
// //           this.speedY *= -1.02;
// //           this.y = Math.max(0, Math.min(this.y, canvas.height));
// //         }
        
// //         // Mouse interaction - particles expand and are attracted toward mouse
// //         if (mousePosition.x != null && mousePosition.y != null) {
// //           const dx = mousePosition.x - this.x;
// //           const dy = mousePosition.y - this.y;
// //           const distance = Math.sqrt(dx * dx + dy * dy);
          
// //           if (distance < 100) {
// //             const force = (100 - distance) / 2000;
// //             this.x += dx * force;
// //             this.y += dy * force;
            
// //             // Expand particle on mouse proximity
// //             this.size = Math.min(this.maxSize, this.baseSize + (100 - distance) / 10);
// //           } else {
// //             // Return to original size
// //             this.size = Math.max(this.baseSize, this.size - 0.1);
// //           }
// //         }
// //       }
      
// //       draw() {
// //         ctx.beginPath();
// //         ctx.fillStyle = this.color;
// //         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
// //         ctx.fill();
// //       }
// //     }
    
// //     // Initialize particles with more variety
// //     const initParticles = () => {
// //       particles = [];
// //       const particleCount = Math.min(window.innerWidth / 10, 150); // Responsive particle count
      
// //       for (let i = 0; i < particleCount; i++) {
// //         const size = Math.random() * 3 + 1;
// //         const speed = Math.random() * 0.5 + 0.3;
// //         const hue = Math.random() * 60 + 210; // Blue to purple hue range
// //         const color = `hsla(${hue}, 80%, 60%, ${Math.random() * 0.4 + 0.1})`;
        
// //         particles.push(new Particle(null, null, size, color, speed));
// //       }
// //     };
    
// //     // Handle mouse movement to interact with particles
// //     const handleMouseMove = (e) => {
// //       mousePosition.x = e.clientX;
// //       mousePosition.y = e.clientY;
// //     };
    
// //     // Animate particles
// //     const animate = () => {
// //       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
// //       // Create subtle gradient background
// //       const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
// //       gradient.addColorStop(0, "rgba(30, 41, 59, 0.02)");
// //       gradient.addColorStop(1, "rgba(30, 41, 59, 0.04)");
// //       ctx.fillStyle = gradient;
// //       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
// //       particles.forEach((particle, index) => {
// //         particle.update();
// //         particle.draw();
        
// //         // Connection lines between close particles
// //         for (let j = index + 1; j < particles.length; j++) {
// //           const dx = particle.x - particles[j].x;
// //           const dy = particle.y - particles[j].y;
// //           const distance = Math.sqrt(dx * dx + dy * dy);
          
// //           if (distance < 85) {
// //             ctx.beginPath();
// //             ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 - distance / 850})`;
// //             ctx.lineWidth = 0.5;
// //             ctx.moveTo(particle.x, particle.y);
// //             ctx.lineTo(particles[j].x, particles[j].y);
// //             ctx.stroke();
// //           }
// //         }
// //       });
      
// //       animationFrame = requestAnimationFrame(animate);
// //     };
    
// //     // Handle window resize
// //     const handleResize = () => {
// //       setCanvasDimensions();
// //       initParticles();
// //     };
    
// //     // Add event listeners
// //     window.addEventListener('resize', handleResize);
// //     window.addEventListener('mousemove', handleMouseMove);
    
// //     // Initialize and start animation
// //     initParticles();
// //     animate();
    
// //     // Cleanup
// //     return () => {
// //       window.removeEventListener('resize', handleResize);
// //       window.removeEventListener('mousemove', handleMouseMove);
// //       cancelAnimationFrame(animationFrame);
// //     };
// //   }, []);

// //   // Focus fields with sequence animation on load
// //   useEffect(() => {
// //     const timer1 = setTimeout(() => {
// //       if (storeIdInputRef.current) storeIdInputRef.current.focus();
// //     }, 1000);
    
// //     const timer2 = setTimeout(() => {
// //       if (userIdInputRef.current) userIdInputRef.current.focus();
// //     }, 1300);
    
// //     const timer3 = setTimeout(() => {
// //       if (passwordInputRef.current) passwordInputRef.current.focus();
// //     }, 1600);
    
// //     const timer4 = setTimeout(() => {
// //       if (storeIdInputRef.current) storeIdInputRef.current.focus();
// //     }, 1900);
    
// //     return () => {
// //       clearTimeout(timer1);
// //       clearTimeout(timer2);
// //       clearTimeout(timer3);
// //       clearTimeout(timer4);
// //     };
// //   }, []);
  
// //   // Handle login submission
// //   const handleUserCheck = async (e) => {
// //     e.preventDefault();
// //     setIsLoading(true);
// //     setError(null);
    
// //     // Perform form validation
// //     if (!storeId.trim() || !id.trim() || !password.trim()) {
// //       setError("All fields are required.");
// //       setIsLoading(false);
// //       return;
// //     }
    
// //     try {
// //       const response = await fetch("http://localhost:5001/check_user", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ storeId, id: String(id), password }),
// //       });
      
// //       const data = await response.json();
      
// //       if (data.message === "User found!") {
// //         // Save user data
// //         localStorage.setItem("storeName", data.store_name);
// //         localStorage.setItem("storeId", storeId);
// //         localStorage.setItem("userId", data.id);
// //         localStorage.setItem("userRole", data.role);
// //         localStorage.setItem("storeAddress", data.store_address);
// //         localStorage.setItem("email", data.email);
// //         localStorage.setItem("fullName", data.full_name);
// //         localStorage.setItem("phoneNumber", data.phone_number);
        
// //         // Update context
// //         setStoreName(data.store_name);
// //         setStoreInContext(storeId);
// //         setUserId(data.id);
        
// //         // Show success animation before redirect
// //         setSuccess(true);
        
// //         // Redirect based on role after success animation
// //         setTimeout(() => {
// //           switch (data.role) {
// //             case "admin": navigate("/AdminDashboard"); break;
// //             case "manager": navigate("/ManagerDashboard"); break;
// //             case "cashier": navigate("/CashierDashboard"); break;
// //             default: navigate("/Inter");
// //           }
// //         }, 1500);
// //       } else {
// //         setError("Invalid credentials. Please check your Store ID, User ID, and Password.");
// //       }
// //     } catch (err) {
// //       setError("Connection error. Please check your internet connection and try again.");
// //     } finally {
// //       if (!success) setIsLoading(false);
// //     }
// //   };

// //   // Handle forgot password request
// //   const handleForgotPassword = async () => {
// //     if (!email.trim()) {
// //       setResetMessage("Please enter your email address");
// //       return;
// //     }
    
// //     if (!/^\S+@\S+\.\S+$/.test(email)) {
// //       setResetMessage("Please enter a valid email address");
// //       return;
// //     }
    
// //     setResetMessage("Processing request...");
    
// //     try {
// //       const response = await fetch("http://localhost:5001/forgot_password", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ email }),
// //       });
      
// //       const data = await response.json();
// //       setResetMessage(response.ok 
// //         ? "Password reset instructions sent! Please check your email." 
// //         : data.message || "Failed to send reset email.");
// //     } catch (error) {
// //       setResetMessage("Connection error. Please try again later.");
// //     }
// //   };
  
// //   // Animation variants
// //   const logoAnimation = {
// //     initial: { scale: 0, rotate: -180 },
// //     animate: { scale: 1, rotate: 0, transition: { type: "spring", duration: 1.5 } }
// //   };
  
// //   const fadeInScale = {
// //     hidden: { opacity: 0, scale: 0.9 },
// //     visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
// //   };
  
// //   const slideInFromRight = {
// //     hidden: { x: 100, opacity: 0 },
// //     visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
// //   };
  
// //   const slideInFromLeft = {
// //     hidden: { x: -100, opacity: 0 },
// //     visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
// //   };
  
// //   const staggerContainer = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.1,
// //         delayChildren: 0.3
// //       }
// //     }
// //   };
  
// //   // Features display data
// //   const features = [
// //     { 
// //       icon: <ShoppingBag className="w-6 h-6" />, 
// //       title: "Inventory Management",
// //       description: "Real-time tracking and smart restocking alerts"
// //     },
// //     { 
// //       icon: <BarChart4 className="w-6 h-6" />, 
// //       title: "Sales Analytics",
// //       description: "Comprehensive data insights and forecasting"
// //     },
// //     { 
// //       icon: <Users className="w-6 h-6" />, 
// //       title: "Staff Management",
// //       description: "Scheduling, performance tracking and training"
// //     },
// //     { 
// //       icon: <CreditCard className="w-6 h-6" />, 
// //       title: "POS Integration",
// //       description: "Seamless checkout and payment processing"
// //     },
// //     { 
// //       icon: <Package className="w-6 h-6" />, 
// //       title: "Supplier Portal",
// //       description: "Streamlined ordering and vendor management"
// //     },
// //     { 
// //       icon: <Gift className="w-6 h-6" />, 
// //       title: "Loyalty Programs",
// //       description: "Customer retention and reward systems"
// //     }
// //   ];
  
// //   // Stats display data
// //   const stats = [
// //     { value: "27%", label: "Average Revenue Increase" },
// //     { value: "3.2x", label: "Inventory Turnover Improvement" },
// //     { value: "5hrs", label: "Weekly Time Saved on Management" }
// //   ];

// //   return (
// //     <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
// //       {/* Interactive Particle Background */}
// //       <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
      
// //       {/* Animated Gradient Overlay */}
// //       <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 z-0"></div>
      
// //       {/* Floating Orbs */}
// //       <motion.div
// //         animate={{ 
// //           y: [0, -30, 0],
// //           x: [0, 15, 0],
// //           opacity: [0.3, 0.5, 0.3],
// //           scale: [1, 1.1, 1]
// //         }}
// //         transition={{ 
// //           duration: 10, 
// //           repeat: Infinity,
// //           ease: "easeInOut" 
// //         }}
// //         className="absolute top-1/4 left-1/4 w-28 h-28 rounded-full blur-3xl bg-blue-400/20 z-0"
// //       />
      
// //       <motion.div
// //         animate={{ 
// //           y: [0, 40, 0],
// //           x: [0, -20, 0],
// //           opacity: [0.2, 0.4, 0.2],
// //           scale: [1, 1.2, 1]
// //         }}
// //         transition={{ 
// //           duration: 15, 
// //           repeat: Infinity,
// //           ease: "easeInOut",
// //           delay: 1
// //         }}
// //         className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full blur-3xl bg-indigo-500/20 z-0"
// //       />
      
// //       <motion.div
// //         animate={{ 
// //           y: [-20, 20, -20],
// //           x: [10, -10, 10],
// //           opacity: [0.2, 0.3, 0.2],
// //           scale: [1, 1.1, 1]
// //         }}
// //         transition={{ 
// //           duration: 12, 
// //           repeat: Infinity,
// //           ease: "easeInOut",
// //           delay: 2
// //         }}
// //         className="absolute top-1/2 right-1/3 w-36 h-36 rounded-full blur-3xl bg-violet-500/15 z-0"
// //       />
      
// //       {/* Header with Glass Effect */}
// //       <header className="relative z-20 backdrop-blur-lg bg-slate-900/40 px-6 py-4 border-b border-white/10">
// //         <div className="mx-auto max-w-7xl flex items-center justify-between">
// //           <motion.div 
// //             initial={logoAnimation.initial}
// //             animate={logoAnimation.animate}
// //             className="flex items-center gap-3"
// //           >
// //             <div className="relative">
// //               <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
// //                 <Store className="h-5 w-5 text-white" />
// //               </div>
// //               <motion.div 
// //                 animate={{ 
// //                   scale: [1, 1.2, 1],
// //                   opacity: [0.5, 0.8, 0.5] 
// //                 }}
// //                 transition={{ 
// //                   duration: 2,
// //                   repeat: Infinity,
// //                   ease: "easeInOut"
// //                 }}
// //                 className="absolute -inset-1.5 rounded-xl bg-blue-500/20 -z-10 blur-sm"
// //               />
// //             </div>
// //             <motion.h1 
// //               initial={{ opacity: 0, x: -20 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ delay: 0.5, duration: 0.8 }}
// //               className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent"
// //             >
// //               RetailPro<span className="hidden sm:inline"> Management</span>
// //             </motion.h1>
// //           </motion.div>
          
// //           {/* Desktop Nav */}
// //           <nav className="hidden md:flex items-center gap-8">
// //             {['Home', 'Features', 'Pricing', 'Support'].map((text, index) => (
// //               <motion.div
// //                 key={text}
// //                 initial={{ opacity: 0, y: -10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
// //               >
// //                 <Link
// //                   to={text === 'Home' ? '/' : `/${text}Page`}
// //                   className="text-slate-300 font-medium hover:text-white transition-colors duration-300 relative group py-2"
// //                 >
// //                   {text}
// //                   <motion.span
// //                     initial={{ width: 0 }}
// //                     whileHover={{ width: '100%' }}
// //                     className="absolute -bottom-1 left-0 h-0.5 bg-blue-500/70 rounded-full"
// //                   />
// //                 </Link>
// //               </motion.div>
// //             ))}
// //           </nav>
          
// //           {/* Mobile menu button */}
// //           <motion.button
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.8 }}
// //             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// //             className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
// //           >
// //             {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
// //           </motion.button>
          
// //           {/* CTA Buttons */}
// //           <div className="hidden md:flex items-center gap-3">
// //             <motion.div
// //               initial={{ opacity: 0, scale: 0.9 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               transition={{ delay: 0.7, duration: 0.5 }}
// //             >
// //               <Link to="/ContactPage">
// //                 <motion.button
// //                   whileHover={{ scale: 1.05 }}
// //                   whileTap={{ scale: 0.95 }}
// //                   className="px-4 py-2 text-sm font-medium text-blue-400 hover:text-white transition-colors duration-300"
// //                 >
// //                   Contact Sales
// //                 </motion.button>
// //               </Link>
// //             </motion.div>
            
// //             <motion.div
// //               initial={{ opacity: 0, scale: 0.9 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               transition={{ delay: 0.8, duration: 0.5 }}
// //             >
// //               <Link to="/SignUp">
// //                 <motion.button
// //                   whileHover={{ 
// //                     scale: 1.05, 
// //                     boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" 
// //                   }}
// //                   whileTap={{ scale: 0.95 }}
// //                   className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium shadow-lg shadow-blue-900/30 hover:shadow-blue-800/50 transition-all duration-300"
// //                 >
// //                   Get Started
// //                 </motion.button>
// //               </Link>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </header>
      
// //       {/* Mobile Navigation Menu */}
// //       <AnimatePresence>
// //         {mobileMenuOpen && (
// //           <motion.div
// //             initial={{ opacity: 0, height: 0 }}
// //             animate={{ opacity: 1, height: 'auto' }}
// //             exit={{ opacity: 0, height: 0 }}
// //             className="md:hidden relative z-20 overflow-hidden bg-slate-900/90 backdrop-blur-lg border-b border-white/10"
// //           >
// //             <nav className="flex flex-col py-3 px-6">
// //               {['Home', 'Features', 'Pricing', 'Support', 'Contact Sales'].map((text, index) => (
// //                 <motion.div
// //                   key={text}
// //                   initial={{ opacity: 0, x: -20 }}
// //                   animate={{ opacity: 1, x: 0 }}
// //                   transition={{ delay: index * 0.1, duration: 0.3 }}
// //                 >
// //                   <Link
// //                     to={text === 'Home' ? '/' : `/${text.replace(' ', '')}Page`}
// //                     className="block py-3 text-slate-300 font-medium hover:text-white transition-colors border-b border-white/5 last:border-0"
// //                     onClick={() => setMobileMenuOpen(false)}
// //                   >
// //                     {text}
// //                   </Link>
// //                 </motion.div>
// //               ))}
// //               <motion.div
// //                 initial={{ opacity: 0, y: 10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.6 }}
// //                 className="mt-4"
// //               >
// //                 <Link to="/SignUp" onClick={() => setMobileMenuOpen(false)}>
// //                   <button className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium">
// //                     Get Started
// //                   </button>
// //                 </Link>
// //               </motion.div>
// //             </nav>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       {/* Main Content */}
// //       <div className="relative z-10 min-h-[calc(100vh-72px)] mx-auto max-w-7xl px-6 py-8 md:py-16 flex flex-col lg:flex-row items-center">
// //         {/* Left Section - Features */}
// //         <motion.div
// //           initial="hidden"
// //           animate="visible"
// //           variants={slideInFromLeft}
// //           className="w-full lg:w-1/2 lg:pr-10 mb-12 lg:mb-0"
// //         >
// //           <motion.div
// //             variants={staggerContainer}
// //             initial="hidden"
// //             animate="visible" 
// //             className="text-left max-w-xl mx-auto lg:mx-0"
// //           >
// //             <motion.div variants={fadeInScale} className="mb-4">
// //               <div className="inline-flex items-center py-1 px-3 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-medium mb-6">
// //                 <motion.span
// //                   animate={{ opacity: [0.5, 1, 0.5] }}
// //                   transition={{ duration: 1.5, repeat: Infinity }}
// //                   className="mr-2 w-2 h-2 rounded-full bg-blue-400"
// //                 />
// //                 Smart Retail Management Platform
// //               </div>
// //             </motion.div>
            
// //             <motion.h2 
// //               variants={fadeInScale}
// //               className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6"
// //             >
// //               Transform Your <br />
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
// //                 Retail Experience
// //               </span>
// //             </motion.h2>
            
// //             <motion.p 
// //               variants={fadeInScale}
// //               className="text-slate-300 text-lg max-w-lg mb-8"
// //             >
// //               Streamline operations, gain real-time insights, and deliver exceptional customer experiences with our all-in-one retail management platform.
// //             </motion.p>
            
// //             {/* Stats */}
// //             <motion.div 
// //               variants={fadeInScale}
// //               className="grid grid-cols-3 gap-4 mb-10"
// //             >
// //               {stats.map((stat, index) => (
// //                 <motion.div 
// //                   key={index}
// //                   whileHover={{ scale: 1.05, y: -5 }}
// //                   transition={{ type: "spring", stiffness: 300 }}
// //                   className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
// //                 >
// //                   <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">{stat.value}</h3>
// //                   <p className="text-xs md:text-sm text-slate-400">{stat.label}</p>
// //                 </motion.div>
// //               ))}
// //             </motion.div>
            
// //             {/* Features Grid */}
// //             <motion.div 
// //               variants={fadeInScale}
// //               className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
// //             >
// //               {features.map((feature, index) => (
// //                 <motion.div 
// //                   key={index}
// //                   whileHover={{ scale: 1.03, y: -3 }}
// //                   className="flex items-start p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group"
// //                 >
// //                   <div className="p-2 bg-blue-900/30 rounded-lg mr-3 group-hover:bg-blue-800/50 transition-colors">
// //                     <motion.div
// //                       whileHover={{ rotate: 360 }}
// //                       transition={{ duration: 0.5 }}
// //                       className="text-blue-400 group-hover:text-blue-300"
// //                     >
// //                       {feature.icon}
// //                     </motion.div>
// //                   </div>
// //                   <div>
// //                     <h3 className="font-medium text-white mb-1">{feature.title}</h3>
// //                     <p className="text-sm text-slate-400">{feature.description}</p>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </motion.div>
            
// //             {/* Trust Signal */}
// //             <motion.div 
// //               variants={fadeInScale}
// //               className="flex items-center gap-3 p-4 rounded-xl bg-blue-900/20 border border-blue-500/20 mb-8"
// //             >
// //               <div className="p-2 bg-blue-900/50 rounded-lg">
// //                 <ShieldCheck className="w-6 h-6 text-blue-400" />
// //               </div>
// //               <div>
// //               <h3 className="font-medium text-white mb-1">Secure & Reliable</h3>
// //                 <p className="text-sm text-slate-400">
// //                   Your data is protected with enterprise-grade encryption and multi-factor authentication.
// //                 </p>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         </motion.div>

// //         {/* Right Section - Login Form */}
// //         <motion.div
// //           initial="hidden"
// //           animate="visible"
// //           variants={slideInFromRight}
// //           className="w-full lg:w-1/2 lg:pl-10"
// //         >
// //           <motion.div
// //             whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
// //             transition={{ duration: 0.3 }}
// //             className="w-full max-w-md mx-auto bg-slate-900/70 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/10 relative overflow-hidden"
// //           >
// //             {/* Decorative elements */}
// //             <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />
// //             <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />

// //             <motion.div 
// //               initial="hidden"
// //               animate="visible"
// //               variants={staggerContainer}
// //               className="relative z-10"
// //             >
// //               <motion.div variants={fadeInScale} className="flex flex-col items-center mb-8">
// //                 <motion.div
// //                   initial={{ scale: 0.8, opacity: 0 }}
// //                   animate={{ scale: 1, opacity: 1 }}
// //                   transition={{ duration: 0.5 }}
// //                   className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20"
// //                 >
// //                   <Store className="h-8 w-8 text-white" />
// //                 </motion.div>
// //                 <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
// //                 <p className="text-slate-400 mt-1 text-sm">Sign in to your account</p>
// //               </motion.div>

// //               {error && (
// //                 <motion.div
// //                   initial={{ opacity: 0, y: -10 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   className="mb-6"
// //                 >
// //                   <div className="flex items-center p-4 bg-red-900/30 border border-red-500/30 rounded-xl">
// //                     <AlertCircle className="h-5 w-5 text-red-400" />
// //                     <p className="text-red-400 text-sm ml-2">{error}</p>
// //                   </div>
// //                 </motion.div>
// //               )}

// //               {success && (
// //                 <motion.div
// //                   initial={{ opacity: 0, y: -10 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   className="mb-6"
// //                 >
// //                   <div className="flex items-center p-4 bg-green-900/30 border border-green-500/30 rounded-xl">
// //                     <CheckCircle className="h-5 w-5 text-green-400" />
// //                     <p className="text-green-400 text-sm ml-2">Login successful! Redirecting...</p>
// //                   </div>
// //                 </motion.div>
// //               )}

// //               <form onSubmit={handleUserCheck} className="space-y-5">
// //                 <motion.div variants={fadeInScale}>
// //                   <label className="flex items-center text-sm font-medium text-slate-300 mb-1.5">
// //                     <Store className="w-4 h-4 mr-2 text-blue-400" /> Store ID
// //                   </label>
// //                   <div className="relative">
// //                     <input
// //                       ref={storeIdInputRef}
// //                       type="text"
// //                       value={storeId}
// //                       onChange={(e) => setStoreId(e.target.value)}
// //                       onFocus={() => setActiveField('store')}
// //                       onBlur={() => setActiveField(null)}
// //                       className="w-full px-4 py-3 pl-10 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
// //                       placeholder="Enter store ID"
// //                     />
// //                     <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
// //                       <motion.div
// //                         animate={activeField === 'store' ? { scale: 1.2, color: '#3B82F6' } : {}}
// //                       >
// //                         <Store className="w-4 h-4 text-slate-400" />
// //                       </motion.div>
// //                     </div>
// //                   </div>
// //                 </motion.div>

// //                 <motion.div variants={fadeInScale}>
// //                   <label className="flex items-center text-sm font-medium text-slate-300 mb-1.5">
// //                     <User className="w-4 h-4 mr-2 text-blue-400" /> User ID
// //                   </label>
// //                   <div className="relative">
// //                     <input
// //                       ref={userIdInputRef}
// //                       type="text"
// //                       value={id}
// //                       onChange={(e) => setId(e.target.value)}
// //                       onFocus={() => setActiveField('user')}
// //                       onBlur={() => setActiveField(null)}
// //                       className="w-full px-4 py-3 pl-10 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
// //                       placeholder="Enter user ID"
// //                     />
// //                     <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
// //                       <motion.div
// //                         animate={activeField === 'user' ? { scale: 1.2, color: '#3B82F6' } : {}}
// //                       >
// //                         <User className="w-4 h-4 text-slate-400" />
// //                       </motion.div>
// //                     </div>
// //                   </div>
// //                 </motion.div>

// //                 <motion.div variants={fadeInScale}>
// //                   <label className="flex items-center text-sm font-medium text-slate-300 mb-1.5">
// //                     <Lock className="w-4 h-4 mr-2 text-blue-400" /> Password
// //                   </label>
// //                   <div className="relative">
// //                     <input
// //                       ref={passwordInputRef}
// //                       type="password"
// //                       value={password}
// //                       onChange={(e) => setPassword(e.target.value)}
// //                       onFocus={() => setActiveField('password')}
// //                       onBlur={() => setActiveField(null)}
// //                       className="w-full px-4 py-3 pl-10 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
// //                       placeholder="Enter password"
// //                     />
// //                     <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
// //                       <motion.div
// //                         animate={activeField === 'password' ? { scale: 1.2, color: '#3B82F6' } : {}}
// //                       >
// //                         <Lock className="w-4 h-4 text-slate-400" />
// //                       </motion.div>
// //                     </div>
// //                   </div>
// //                 </motion.div>

// //                 <motion.div variants={fadeInScale} className="flex items-center justify-between">
// //                   <div className="flex items-center">
// //                     <input
// //                       type="checkbox"
// //                       id="remember"
// //                       className="w-4 h-4 text-blue-500 rounded border-slate-700 focus:ring-blue-500"
// //                     />
// //                     <label htmlFor="remember" className="ml-2 text-sm text-slate-400">
// //                       Remember me
// //                     </label>
// //                   </div>
// //                   <button
// //                     type="button"
// //                     onClick={() => setIsForgotPasswordOpen(true)}
// //                     className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
// //                   >
// //                     Forgot password?
// //                   </button>
// //                 </motion.div>

// //                 <motion.button
// //                   variants={fadeInScale}
// //                   type="submit"
// //                   disabled={isLoading}
// //                   whileHover={{ scale: 1.02, boxShadow: "0 8px 16px rgba(59, 130, 246, 0.25)" }}
// //                   whileTap={{ scale: 0.98 }}
// //                   className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
// //                 >
// //                   {isLoading ? (
// //                     <span className="flex items-center justify-center">
// //                       <motion.div
// //                         animate={{ rotate: 360 }}
// //                         transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
// //                         className="h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"
// //                       />
// //                       Verifying...
// //                     </span>
// //                   ) : (
// //                     "Sign In Securely"
// //                   )}
// //                 </motion.button>
// //               </form>

// //               <motion.div variants={fadeInScale} className="mt-6 text-center text-slate-400">
// //                 <p className="text-sm">
// //                   Don't have an account?{" "}
// //                   <Link to="/signup" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
// //                     Register Now
// //                   </Link>
// //                 </p>
// //               </motion.div>
// //             </motion.div>
// //           </motion.div>
// //         </motion.div>
// //       </div>

// //       {/* Forgot Password Modal */}
// //       <AnimatePresence>
// //         {isForgotPasswordOpen && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
// //           >
// //             <motion.div
// //               initial={{ scale: 0.9, y: 20 }}
// //               animate={{ scale: 1, y: 0 }}
// //               exit={{ scale: 0.9, y: 20 }}
// //               className="bg-slate-900/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl w-full max-w-md m-4 relative border border-white/10"
// //             >
// //               <div className="absolute top-3 right-3">
// //                 <motion.button
// //                   whileHover={{ scale: 1.1, rotate: 90 }}
// //                   whileTap={{ scale: 0.9 }}
// //                   onClick={() => setIsForgotPasswordOpen(false)}
// //                   className="text-slate-400 hover:text-slate-200"
// //                 >
// //                   <X className="w-6 h-6" />
// //                 </motion.button>
// //               </div>

// //               <div className="flex flex-col items-center mb-6">
// //                 <motion.div
// //                   initial={{ scale: 0.8, opacity: 0 }}
// //                   animate={{ scale: 1, opacity: 1 }}
// //                   className="w-14 h-14 bg-blue-900/30 rounded-full flex items-center justify-center mb-4 border border-blue-500/30"
// //                 >
// //                   <Mail className="h-6 w-6 text-blue-400" />
// //                 </motion.div>
// //                 <h2 className="text-xl font-bold text-white">Reset Password</h2>
// //                 <p className="text-slate-400 mt-1 text-sm text-center">
// //                   Enter your email address and we'll send you instructions to reset your password.
// //                 </p>
// //               </div>

// //               <div className="relative mb-6">
// //                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
// //                 <input
// //                   type="email"
// //                   placeholder="Your email address"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                   className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
// //                 />
// //               </div>

// //               {resetMessage && (
// //                 <motion.div
// //                   initial={{ opacity: 0, y: -10 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   className="mb-6 p-3 rounded-lg text-sm"
// //                   style={{
// //                     backgroundColor: resetMessage.includes("success") ? "rgba(16, 185, 129, 0.1)" : "rgba(239, 68, 68, 0.1)",
// //                     color: resetMessage.includes("success") ? "#10B981" : "#EF4444"
// //                   }}
// //                 >
// //                   {resetMessage}
// //                 </motion.div>
// //               )}

// //               <motion.button
// //                 whileHover={{ scale: 1.03 }}
// //                 whileTap={{ scale: 0.97 }}
// //                 onClick={handleForgotPassword}
// //                 className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-medium hover:shadow-lg transition-all"
// //               >
// //                 Send Reset Instructions
// //               </motion.button>

// //               <button
// //                 onClick={() => setIsForgotPasswordOpen(false)}
// //                 className="w-full mt-4 text-slate-400 hover:text-slate-200 font-medium text-sm"
// //               >
// //                 Back to Login
// //               </button>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // };

// // export default Login;


// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useStore } from "./StoreContext";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   AlertCircle, Lock, User, Store, Mail, 
//   ShoppingBag, BarChart4, Users, Calendar,
//   ShieldCheck, ArrowRight, CheckCircle, Coffee,
//   CreditCard, Truck, Package, Gift, RefreshCw,
//   Search, Menu, X, Sun, Moon
// } from "lucide-react";

// const Login = () => {
//   // State management
//   const [storeId, setStoreId] = useState("");
//   const [password, setPassword] = useState("");
//   const [id, setId] = useState("");
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [activeField, setActiveField] = useState(null);
//   const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
//   const [email, setEmail] = useState("");
//   const [resetMessage, setResetMessage] = useState("");
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const navigate = useNavigate();
//   const { setStoreName, setStoreId: setStoreInContext, setUserId } = useStore();
  
//   // Refs
//   const canvasRef = useRef(null);
//   const storeIdInputRef = useRef(null);
//   const userIdInputRef = useRef(null);
//   const passwordInputRef = useRef(null);
  
//   // Theme definitions
//   const themes = {
//     dark: {
//       background: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950",
//       text: "text-white",
//       card: "bg-slate-900/70",
//       input: "bg-slate-800/50 border-slate-700",
//       accent: "text-blue-400",
//       button: "from-blue-500 to-indigo-500",
//       secondaryText: "text-slate-400",
//       border: "border-white/10",
//       header: "bg-slate-900/40",
//       modal: "bg-black/50",
//       featureCard: "bg-white/5",
//       statsCard: "bg-white/5",
//       trustCard: "bg-blue-900/20 border-blue-500/20",
//       errorBg: "bg-red-900/30 border-red-500/30",
//       successBg: "bg-green-900/30 border-green-500/30",
//     },
//     light: {
//       background: "bg-gradient-to-br from-gray-50 via-white to-blue-50",
//       text: "text-gray-900",
//       card: "bg-white/90",
//       input: "bg-gray-100/50 border-gray-300",
//       accent: "text-blue-600",
//       button: "from-blue-600 to-indigo-600",
//       secondaryText: "text-gray-600",
//       border: "border-gray-200/50",
//       header: "bg-white/40",
//       modal: "bg-gray-500/50",
//       featureCard: "bg-gray-50/50",
//       statsCard: "bg-gray-100/50",
//       trustCard: "bg-blue-50/20 border-blue-200/20",
//       errorBg: "bg-red-100/30 border-red-300/30",
//       successBg: "bg-green-100/30 border-green-300/30",
//     }
//   };

//   const currentTheme = isDarkMode ? themes.dark : themes.light;
//   const storeImages = [
//     "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
//     "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
//     "https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//   ];

//   // Toggle theme
//   const toggleTheme = () => {
//     setIsDarkMode(prev => !prev);
//   };

//   // Image carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % storeImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   // Particle effect
//   useEffect(() => {
//     if (!canvasRef.current) return;
    
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     let particles = [];
//     let mousePosition = { x: null, y: null };
//     let animationFrame;
    
//     const setCanvasDimensions = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
    
//     setCanvasDimensions();
    
//     class Particle {
//       constructor(x, y, size, color, speed) {
//         this.x = x || Math.random() * canvas.width;
//         this.y = y || Math.random() * canvas.height;
//         this.size = size || Math.random() * 3 + 1;
//         this.baseSize = this.size;
//         this.color = color || `hsla(${Math.random() * 60 + (isDarkMode ? 210 : 180)}, 80%, ${isDarkMode ? 60 : 50}%, ${Math.random() * 0.4 + 0.1})`;
//         this.speedX = (Math.random() - 0.5) * speed || (Math.random() - 0.5) * 0.8;
//         this.speedY = (Math.random() - 0.5) * speed || (Math.random() - 0.5) * 0.8;
//         this.maxSize = this.baseSize * 3;
//         this.angle = Math.random() * Math.PI * 2;
//         this.angleSpeed = Math.random() * 0.1 - 0.05;
//         this.curveRadius = Math.random() * 2;
//       }
      
//       update() {
//         this.x += this.speedX + Math.sin(this.angle) * this.curveRadius * 0.1;
//         this.y += this.speedY + Math.cos(this.angle) * this.curveRadius * 0.1;
//         this.angle += this.angleSpeed;
        
//         if (this.x < 0 || this.x > canvas.width) {
//           this.speedX *= -1.02;
//           this.x = Math.max(0, Math.min(this.x, canvas.width));
//         }
//         if (this.y < 0 || this.y > canvas.height) {
//           this.speedY *= -1.02;
//           this.y = Math.max(0, Math.min(this.y, canvas.height));
//         }
        
//         if (mousePosition.x != null && mousePosition.y != null) {
//           const dx = mousePosition.x - this.x;
//           const dy = mousePosition.y - this.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
          
//           if (distance < 100) {
//             const force = (100 - distance) / 2000;
//             this.x += dx * force;
//             this.y += dy * force;
//             this.size = Math.min(this.maxSize, this.baseSize + (100 - distance) / 10);
//           } else {
//             this.size = Math.max(this.baseSize, this.size - 0.1);
//           }
//         }
//       }
      
//       draw() {
//         ctx.beginPath();
//         ctx.fillStyle = this.color;
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fill();
//       }
//     }
    
//     const initParticles = () => {
//       particles = [];
//       const particleCount = Math.min(window.innerWidth / 10, 150);
      
//       for (let i = 0; i < particleCount; i++) {
//         const size = Math.random() * 3 + 1;
//         const speed = Math.random() * 0.5 + 0.3;
//         const hue = Math.random() * 60 + (isDarkMode ? 210 : 180);
//         const color = `hsla(${hue}, 80%, ${isDarkMode ? 60 : 50}%, ${Math.random() * 0.4 + 0.1})`;
        
//         particles.push(new Particle(null, null, size, color, speed));
//       }
//     };
    
//     const handleMouseMove = (e) => {
//       mousePosition.x = e.clientX;
//       mousePosition.y = e.clientY;
//     };
    
//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
//       gradient.addColorStop(0, isDarkMode ? "rgba(30, 41, 59, 0.02)" : "rgba(229, 231, 235, 0.02)");
//       gradient.addColorStop(1, isDarkMode ? "rgba(30, 41, 59, 0.04)" : "rgba(229, 231, 235, 0.04)");
//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
//       particles.forEach((particle, index) => {
//         particle.update();
//         particle.draw();
        
//         for (let j = index + 1; j < particles.length; j++) {
//           const dx = particle.x - particles[j].x;
//           const dy = particle.y - particles[j].y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
          
//           if (distance < 85) {
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(${isDarkMode ? '99, 102, 241' : '59, 130, 246'}, ${0.1 - distance / 850})`;
//             ctx.lineWidth = 0.5;
//             ctx.moveTo(particle.x, particle.y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.stroke();
//           }
//         }
//       });
      
//       animationFrame = requestAnimationFrame(animate);
//     };
    
//     const handleResize = () => {
//       setCanvasDimensions();
//       initParticles();
//     };
    
//     window.addEventListener('resize', handleResize);
//     window.addEventListener('mousemove', handleMouseMove);
    
//     initParticles();
//     animate();
    
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       window.removeEventListener('mousemove', handleMouseMove);
//       cancelAnimationFrame(animationFrame);
//     };
//   }, [isDarkMode]);

//   // Input focus animation
//   useEffect(() => {
//     const timer1 = setTimeout(() => {
//       if (storeIdInputRef.current) storeIdInputRef.current.focus();
//     }, 1000);
    
//     const timer2 = setTimeout(() => {
//       if (userIdInputRef.current) userIdInputRef.current.focus();
//     }, 1300);
    
//     const timer3 = setTimeout(() => {
//       if (passwordInputRef.current) passwordInputRef.current.focus();
//     }, 1600);
    
//     const timer4 = setTimeout(() => {
//       if (storeIdInputRef.current) storeIdInputRef.current.focus();
//     }, 1900);
    
//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//       clearTimeout(timer3);
//       clearTimeout(timer4);
//     };
//   }, []);

//   // Handle login
//   const handleUserCheck = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError(null);
    
//     if (!storeId.trim() || !id.trim() || !password.trim()) {
//       setError("All fields are required.");
//       setIsLoading(false);
//       return;
//     }
    
//     try {
//       const response = await fetch("http://localhost:5001/check_user", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ storeId, id: String(id), password }),
//       });
      
//       const data = await response.json();
      
//       if (data.message === "User found!") {
//         localStorage.setItem("storeName", data.store_name);
//         localStorage.setItem("storeId", storeId);
//         localStorage.setItem("userId", data.id);
//         localStorage.setItem("userRole", data.role);
//         localStorage.setItem("storeAddress", data.store_address);
//         localStorage.setItem("email", data.email);
//         localStorage.setItem("fullName", data.full_name);
//         localStorage.setItem("phoneNumber", data.phone_number);
        
//         setStoreName(data.store_name);
//         setStoreInContext(storeId);
//         setUserId(data.id);
        
//         setSuccess(true);
        
//         setTimeout(() => {
//           switch (data.role) {
//             case "admin": navigate("/AdminDashboard"); break;
//             case "manager": navigate("/ManagerDashboard"); break;
//             case "cashier": navigate("/CashierDashboard"); break;
//             default: navigate("/Inter");
//           }
//         }, 1500);
//       } else {
//         setError("Invalid credentials. Please check your Store ID, User ID, and Password.");
//       }
//     } catch (err) {
//       setError("Connection error. Please check your internet connection and try again.");
//     } finally {
//       if (!success) setIsLoading(false);
//     }
//   };

//   // Handle forgot password
//   const handleForgotPassword = async () => {
//     if (!email.trim()) {
//       setResetMessage("Please enter your email address");
//       return;
//     }
    
//     if (!/^\S+@\S+\.\S+$/.test(email)) {
//       setResetMessage("Please enter a valid email address");
//       return;
//     }
    
//     setResetMessage("Processing request...");
    
//     try {
//       const response = await fetch("http://localhost:5001/forgot_password", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });
      
//       const data = await response.json();
//       setResetMessage(response.ok 
//         ? "Password reset instructions sent! Please check your email." 
//         : data.message || "Failed to send reset email.");
//     } catch (error) {
//       setResetMessage("Connection error. Please try again later.");
//     }
//   };

//   // Animation variants
//   const logoAnimation = {
//     initial: { scale: 0, rotate: -180 },
//     animate: { scale: 1, rotate: 0, transition: { type: "spring", duration: 1.5 } }
//   };
  
//   const fadeInScale = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
//   };
  
//   const slideInFromRight = {
//     hidden: { x: 100, opacity: 0 },
//     visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
//   };
  
//   const slideInFromLeft = {
//     hidden: { x: -100, opacity: 0 },
//     visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
//   };
  
//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     }
//   };

//   // Features and stats data
//   const features = [
//     { icon: <ShoppingBag className="w-6 h-6" />, title: "Inventory Management", description: "Real-time tracking and smart restocking alerts" },
//     { icon: <BarChart4 className="w-6 h-6" />, title: "Sales Analytics", description: "Comprehensive data insights and forecasting" },
//     { icon: <Users className="w-6 h-6" />, title: "Staff Management", description: "Scheduling, performance tracking and training" },
//     { icon: <CreditCard className="w-6 h-6" />, title: "POS Integration", description: "Seamless checkout and payment processing" },
//     { icon: <Package className="w-6 h-6" />, title: "Supplier Portal", description: "Streamlined ordering and vendor management" },
//     { icon: <Gift className="w-6 h-6" />, title: "Loyalty Programs", description: "Customer retention and reward systems" }
//   ];
  
//   const stats = [
//     { value: "27%", label: "Average Revenue Increase" },
//     { value: "3.2x", label: "Inventory Turnover Improvement" },
//     { value: "5hrs", label: "Weekly Time Saved on Management" }
//   ];

//   return (
//     <div className={`relative min-h-screen overflow-hidden ${currentTheme.background} ${currentTheme.text}`}>
//       {/* Theme Toggle Button */}
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={toggleTheme}
//         className="fixed top-4 right-4 z-50 p-2 rounded-full bg-opacity-20 backdrop-blur-lg"
//         style={{ backgroundColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}
//       >
//         {isDarkMode ? (
//           <Sun className={`w-6 h-6 ${currentTheme.accent}`} />
//         ) : (
//           <Moon className={`w-6 h-6 ${currentTheme.accent}`} />
//         )}
//       </motion.button>

//       {/* Particle Background */}
//       <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
      
//       {/* Gradient Overlay */}
//       <div className={`absolute inset-0 bg-gradient-to-br ${isDarkMode ? 'from-blue-500/5 via-transparent to-indigo-500/5' : 'from-blue-200/5 via-transparent to-indigo-200/5'} z-0`}></div>
      
//       {/* Floating Orbs */}
//       <motion.div
//         animate={{ y: [0, -30, 0], x: [0, 15, 0], opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         className={`absolute top-1/4 left-1/4 w-28 h-28 rounded-full blur-3xl ${isDarkMode ? 'bg-blue-400/20' : 'bg-blue-300/20'} z-0`}
//       />
//       <motion.div
//         animate={{ y: [0, 40, 0], x: [0, -20, 0], opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
//         transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//         className={`absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full blur-3xl ${isDarkMode ? 'bg-indigo-500/20' : 'bg-indigo-300/20'} z-0`}
//       />
//       <motion.div
//         animate={{ y: [-20, 20, -20], x: [10, -10, 10], opacity: [0.2, 0.3, 0.2], scale: [1, 1.1, 1] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//         className={`absolute top-1/2 right-1/3 w-36 h-36 rounded-full blur-3xl ${isDarkMode ? 'bg-violet-500/15' : 'bg-violet-300/15'} z-0`}
//       />
      
//       {/* Header */}
//       <header className={`relative z-20 backdrop-blur-lg ${currentTheme.header} px-6 py-4 ${currentTheme.border}`}>
//         <div className="mx-auto max-w-7xl flex items-center justify-between">
//           <motion.div initial={logoAnimation.initial} animate={logoAnimation.animate} className="flex items-center gap-3">
//             <div className="relative">
//               <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${currentTheme.button} flex items-center justify-center shadow-lg ${isDarkMode ? 'shadow-indigo-500/20' : 'shadow-blue-600/20'}`}>
//                 <Store className="h-5 w-5 text-white" />
//               </div>
//               <motion.div 
//                 animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
//                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                 className={`absolute -inset-1.5 rounded-xl ${isDarkMode ? 'bg-blue-500/20' : 'bg-blue-600/20'} -z-10 blur-sm`}
//               />
//             </div>
//             <motion.h1 
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//               className={`text-xl font-bold ${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-300' : 'bg-gradient-to-r from-blue-600 to-indigo-500'} bg-clip-text text-transparent`}
//             >
//               RetailPro<span className="hidden sm:inline"> Management</span>
//             </motion.h1>
//           </motion.div>
          
//           <nav className={`hidden md:flex items-center gap-8 ${currentTheme.secondaryText}`}>
//             {['Home', 'Features', 'Pricing', 'Support'].map((text, index) => (
//               <motion.div
//                 key={text}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
//               >
//                 <Link
//                   to={text === 'Home' ? '/' : `/${text}Page`}
//                   className={`font-medium hover:${currentTheme.text} transition-colors duration-300 relative group py-2`}
//                 >
//                   {text}
//                   <motion.span
//                     initial={{ width: 0 }}
//                     whileHover={{ width: '100%' }}
//                     className={`absolute -bottom-1 left-0 h-0.5 ${isDarkMode ? 'bg-blue-500/70' : 'bg-blue-600/70'} rounded-full`}
//                   />
//                 </Link>
//               </motion.div>
//             ))}
//           </nav>
          
//           <motion.button
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className={`md:hidden p-2 rounded-lg hover:${isDarkMode ? 'bg-white/10' : 'bg-gray-200/50'} transition-colors`}
//           >
//             {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </motion.button>
          
//           <div className="hidden md:flex items-center gap-3">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.7, duration: 0.5 }}
//             >
//               <Link to="/ContactPage">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`px-4 py-2 text-sm font-medium ${currentTheme.accent} hover:${currentTheme.text} transition-colors duration-300`}
//                 >
//                   Contact Sales
//                 </motion.button>
//               </Link>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.8, duration: 0.5 }}
//             >
//               <Link to="/SignUp">
//                 <motion.button
//                   whileHover={{ scale: 1.05, boxShadow: `0 0 20px rgba(${isDarkMode ? '59, 130, 246, 0.5' : '37, 99, 235, 0.5'})` }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`px-4 py-2 rounded-lg bg-gradient-to-r ${currentTheme.button} text-white text-sm font-medium shadow-lg ${isDarkMode ? 'shadow-blue-900/30 hover:shadow-blue-800/50' : 'shadow-blue-700/30 hover:shadow-blue-600/50'} transition-all duration-300`}
//                 >
//                   Get Started
//                 </motion.button>
//               </Link>
//             </motion.div>
//           </div>
//         </div>
//       </header>
      
//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className={`md:hidden relative z-20 overflow-hidden ${isDarkMode ? 'bg-slate-900/90' : 'bg-white/90'} backdrop-blur-lg ${currentTheme.border}`}
//           >
//             <nav className="flex flex-col py-3 px-6">
//               {['Home', 'Features', 'Pricing', 'Support', 'Contact Sales'].map((text, index) => (
//                 <motion.div
//                   key={text}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1, duration: 0.3 }}
//                 >
//                   <Link
//                     to={text === 'Home' ? '/' : `/${text.replace(' ', '')}Page`}
//                     className={`block py-3 ${currentTheme.secondaryText} font-medium hover:${currentTheme.text} transition-colors ${currentTheme.border}`}
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     {text}
//                   </Link>
//                 </motion.div>
//               ))}
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 }}
//                 className="mt-4"
//               >
//                 <Link to="/SignUp" onClick={() => setMobileMenuOpen(false)}>
//                   <button className={`w-full py-3 rounded-lg bg-gradient-to-r ${currentTheme.button} text-white font-medium`}>
//                     Get Started
//                   </button>
//                 </Link>
//               </motion.div>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Main Content */}
//       <div className="relative z-10 min-h-[calc(100vh-72px)] mx-auto max-w-7xl px-6 py-8 md:py-16 flex flex-col lg:flex-row items-center">
//         {/* Left Section - Features */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={slideInFromLeft}
//           className="w-full lg:w-1/2 lg:pr-10 mb-12 lg:mb-0"
//         >
//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             animate="visible"
//             className="text-left max-w-xl mx-auto lg:mx-0"
//           >
//             <motion.div variants={fadeInScale} className="mb-4">
//               <div className={`inline-flex items-center py-1 px-3 rounded-full ${isDarkMode ? 'bg-blue-900/30 border-blue-500/30' : 'bg-blue-100/30 border-blue-200/30'} ${currentTheme.accent} text-xs font-medium mb-6`}>
//                 <motion.span
//                   animate={{ opacity: [0.5, 1, 0.5] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                   className={`mr-2 w-2 h-2 rounded-full ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'}`}
//                 />
//                 Smart Retail Management Platform
//               </div>
//             </motion.div>
            
//             <motion.h2 
//               variants={fadeInScale}
//               className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6"
//             >
//               Transform Your <br />
//               <span className={`text-transparent bg-clip-text ${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600'}`}>
//                 Retail Experience
//               </span>
//             </motion.h2>
            
//             <motion.p 
//               variants={fadeInScale}
//               className={`${currentTheme.secondaryText} text-lg max-w-lg mb-8`}
//             >
//               Streamline operations, gain real-time insights, and deliver exceptional customer experiences with our all-in-one retail management platform.
//             </motion.p>
            
//             <motion.div 
//               variants={fadeInScale}
//               className="grid grid-cols-3 gap-4 mb-10"
//             >
//               {stats.map((stat, index) => (
//                 <motion.div 
//                   key={index}
//                   whileHover={{ scale: 1.05, y: -5 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                   className={`text-center p-4 rounded-xl ${currentTheme.statsCard} backdrop-blur-sm ${currentTheme.border}`}
//                 >
//                   <h3 className={`text-2xl md:text-3xl font-bold ${currentTheme.accent} mb-1`}>{stat.value}</h3>
//                   <p className={`text-xs md:text-sm ${currentTheme.secondaryText}`}>{stat.label}</p>
//                 </motion.div>
//               ))}
//             </motion.div>
            
//             <motion.div 
//               variants={fadeInScale}
//               className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
//             >
//               {features.map((feature, index) => (
//                 <motion.div 
//                   key={index}
//                   whileHover={{ scale: 1.03, y: -3 }}
//                   className={`flex items-start p-4 ${currentTheme.featureCard} backdrop-blur-sm rounded-xl ${currentTheme.border} group`}
//                 >
//                   <div className={`p-2 ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100/30'} rounded-lg mr-3 group-hover:${isDarkMode ? 'bg-blue-800/50' : 'bg-blue-200/50'} transition-colors`}>
//                     <motion.div
//                       whileHover={{ rotate: 360 }}
//                       transition={{ duration: 0.5 }}
//                       className={`${currentTheme.accent} group-hover:${isDarkMode ? 'text-blue-300' : 'text-blue-500'}`}
//                     >
//                       {feature.icon}
//                     </motion.div>
//                   </div>
//                   <div>
//                     <h3 className={`font-medium ${currentTheme.text} mb-1`}>{feature.title}</h3>
//                     <p className={`text-sm ${currentTheme.secondaryText}`}>{feature.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
            
//             <motion.div 
//               variants={fadeInScale}
//               className={`flex items-center gap-3 p-4 rounded-xl ${currentTheme.trustCard} mb-8`}
//             >
//               <div className={`p-2 ${isDarkMode ? 'bg-blue-900/50' : 'bg-blue-100/50'} rounded-lg`}>
//                 <ShieldCheck className={`w-6 h-6 ${currentTheme.accent}`} />
//               </div>
//               <div>
//                 <h3 className={`font-medium ${currentTheme.text} mb-1`}>Secure & Reliable</h3>
//                 <p className={`text-sm ${currentTheme.secondaryText}`}>
//                   Your data is protected with enterprise-grade encryption and multi-factor authentication.
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         </motion.div>

//         {/* Right Section - Login Form */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={slideInFromRight}
//           className="w-full lg:w-1/2 lg:pl-10"
//         >
//           <motion.div
//             whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
//             transition={{ duration: 0.3 }}
//             className={`w-full max-w-md mx-auto ${currentTheme.card} backdrop-blur-xl p-8 rounded-2xl shadow-xl ${currentTheme.border} relative overflow-hidden`}
//           >
//             <div className={`absolute -top-10 -right-10 w-40 h-40 ${isDarkMode ? 'bg-blue-500/10' : 'bg-blue-200/10'} rounded-full blur-2xl`} />
//             <div className={`absolute -bottom-8 -left-8 w-32 h-32 ${isDarkMode ? 'bg-indigo-500/10' : 'bg-indigo-200/10'} rounded-full blur-2xl`} />

//             <motion.div 
//               initial="hidden"
//               animate="visible"
//               variants={staggerContainer}
//               className="relative z-10"
//             >
//               <motion.div variants={fadeInScale} className="flex flex-col items-center mb-8">
//                 <motion.div
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 0.5 }}
//                   className={`w-16 h-16 bg-gradient-to-br ${currentTheme.button} rounded-2xl flex items-center justify-center mb-4 shadow-lg ${isDarkMode ? 'shadow-blue-500/20' : 'shadow-blue-600/20'}`}
//                 >
//                   <Store className="h-8 w-8 text-white" />
//                 </motion.div>
//                 <h2 className={`text-2xl font-bold ${currentTheme.text}`}>Welcome Back</h2>
//                 <p className={`${currentTheme.secondaryText} mt-1 text-sm`}>Sign in to your account</p>
//               </motion.div>

//               {error && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="mb-6"
//                 >
//                   <div className={`flex items-center p-4 ${currentTheme.errorBg} rounded-xl`}>
//                     <AlertCircle className={`h-5 w-5 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`} />
//                     <p className={`${isDarkMode ? 'text-red-400' : 'text-red-600'} text-sm ml-2`}>{error}</p>
//                   </div>
//                 </motion.div>
//               )}

//               {success && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="mb-6"
//                 >
//                   <div className={`flex items-center p-4 ${currentTheme.successBg} rounded-xl`}>
//                     <CheckCircle className={`h-5 w-5 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
//                     <p className={`${isDarkMode ? 'text-green-400' : 'text-green-600'} text-sm ml-2`}>Login successful! Redirecting...</p>
//                   </div>
//                 </motion.div>
//               )}

//               <form onSubmit={handleUserCheck} className="space-y-5">
//                 <motion.div variants={fadeInScale}>
//                   <label className={`flex items-center text-sm font-medium ${currentTheme.secondaryText} mb-1.5`}>
//                     <Store className={`w-4 h-4 mr-2 ${currentTheme.accent}`} /> Store ID
//                   </label>
//                   <div className="relative">
//                     <input
//                       ref={storeIdInputRef}
//                       type="text"
//                       value={storeId}
//                       onChange={(e) => setStoreId(e.target.value)}
//                       onFocus={() => setActiveField('store')}
//                       onBlur={() => setActiveField(null)}
//                       className={`w-full px-4 py-3 pl-10 ${currentTheme.input} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
//                       placeholder="Enter store ID"
//                     />
//                     <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
//                       <motion.div
//                         animate={activeField === 'store' ? { scale: 1.2, color: isDarkMode ? '#3B82F6' : '#2563EB' } : {}}
//                       >
//                         <Store className={`w-4 h-4 ${currentTheme.secondaryText}`} />
//                       </motion.div>
//                     </div>
//                   </div>
//                 </motion.div>

//                 <motion.div variants={fadeInScale}>
//                   <label className={`flex items-center text-sm font-medium ${currentTheme.secondaryText} mb-1.5`}>
//                     <User className={`w-4 h-4 mr-2 ${currentTheme.accent}`} /> User ID
//                   </label>
//                   <div className="relative">
//                     <input
//                       ref={userIdInputRef}
//                       type="text"
//                       value={id}
//                       onChange={(e) => setId(e.target.value)}
//                       onFocus={() => setActiveField('user')}
//                       onBlur={() => setActiveField(null)}
//                       className={`w-full px-4 py-3 pl-10 ${currentTheme.input} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
//                       placeholder="Enter user ID"
//                     />
//                     <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
//                       <motion.div
//                         animate={activeField === 'user' ? { scale: 1.2, color: isDarkMode ? '#3B82F6' : '#2563EB' } : {}}
//                       >
//                         <User className={`w-4 h-4 ${currentTheme.secondaryText}`} />
//                       </motion.div>
//                     </div>
//                   </div>
//                 </motion.div>

//                 <motion.div variants={fadeInScale}>
//                   <label className={`flex items-center text-sm font-medium ${currentTheme.secondaryText} mb-1.5`}>
//                     <Lock className={`w-4 h-4 mr-2 ${currentTheme.accent}`} /> Password
//                   </label>
//                   <div className="relative">
//                     <input
//                       ref={passwordInputRef}
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       onFocus={() => setActiveField('password')}
//                       onBlur={() => setActiveField(null)}
//                       className={`w-full px-4 py-3 pl-10 ${currentTheme.input} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
//                       placeholder="Enter password"
//                     />
//                     <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
//                       <motion.div
//                         animate={activeField === 'password' ? { scale: 1.2, color: isDarkMode ? '#3B82F6' : '#2563EB' } : {}}
//                       >
//                         <Lock className={`w-4 h-4 ${currentTheme.secondaryText}`} />
//                       </motion.div>
//                     </div>
//                   </div>
//                 </motion.div>

//                 <motion.div variants={fadeInScale} className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       id="remember"
//                       className={`w-4 h-4 ${currentTheme.accent} rounded ${currentTheme.border} focus:ring-blue-500`}
//                     />
//                     <label htmlFor="remember" className={`ml-2 text-sm ${currentTheme.secondaryText}`}>
//                       Remember me
//                     </label>
//                   </div>
//                   <button
//                     type="button"
//                     onClick={() => setIsForgotPasswordOpen(true)}
//                     className={`text-sm ${currentTheme.accent} hover:${isDarkMode ? 'text-blue-300' : 'text-blue-700'} font-medium transition-colors`}
//                   >
//                     Forgot password?
//                   </button>
//                 </motion.div>

//                 <motion.button
//                   variants={fadeInScale}
//                   type="submit"
//                   disabled={isLoading}
//                   whileHover={{ scale: 1.02, boxShadow: `0 8px 16px rgba(${isDarkMode ? '59, 130, 246, 0.25' : '37, 99, 235, 0.25'})` }}
//                   whileTap={{ scale: 0.98 }}
//                   className={`w-full py-3 bg-gradient-to-r ${currentTheme.button} text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed`}
//                 >
//                   {isLoading ? (
//                     <span className="flex items-center justify-center">
//                       <motion.div
//                         animate={{ rotate: 360 }}
//                         transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                         className="h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"
//                       />
//                       Verifying...
//                     </span>
//                   ) : (
//                     "Sign In Securely"
//                   )}
//                 </motion.button>
//               </form>

//               <motion.div variants={fadeInScale} className={`mt-6 text-center ${currentTheme.secondaryText}`}>
//                 <p className="text-sm">
//                   Don't have an account?{" "}
//                   <Link to="/signup" className={`${currentTheme.accent} hover:${isDarkMode ? 'text-blue-300' : 'text-blue-700'} font-semibold transition-colors`}>
//                     Register Now
//                   </Link>
//                 </p>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Forgot Password Modal */}
//       <AnimatePresence>
//         {isForgotPasswordOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className={`fixed inset-0 flex items-center justify-center ${currentTheme.modal} backdrop-blur-sm z-50`}
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 20 }}
//               className={`bg-opacity-90 ${currentTheme.card} backdrop-blur-xl p-6 rounded-2xl shadow-2xl w-full max-w-md m-4 relative ${currentTheme.border}`}
//             >
//               <div className="absolute top-3 right-3">
//                 <motion.button
//                   whileHover={{ scale: 1.1, rotate: 90 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={() => setIsForgotPasswordOpen(false)}
//                   className={`${currentTheme.secondaryText} hover:${currentTheme.text}`}
//                 >
//                   <X className="w-6 h-6" />
//                 </motion.button>
//               </div>

//               <div className="flex flex-col items-center mb-6">
//                 <motion.div
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   className={`w-14 h-14 ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100/30'} rounded-full flex items-center justify-center mb-4 ${isDarkMode ? 'border-blue-500/30' : 'border-blue-200/30'}`}
//                 >
//                   <Mail className={`h-6 w-6 ${currentTheme.accent}`} />
//                 </motion.div>
//                 <h2 className={`text-xl font-bold ${currentTheme.text}`}>Reset Password</h2>
//                 <p className={`${currentTheme.secondaryText} mt-1 text-sm text-center`}>
//                   Enter your email address and we'll send you instructions to reset your password.
//                 </p>
//               </div>

//               <div className="relative mb-6">
//                 <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${currentTheme.secondaryText} w-5 h-5`} />
//                 <input
//                   type="email"
//                   placeholder="Your email address"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className={`w-full pl-10 pr-4 py-3 ${currentTheme.input} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
//                 />
//               </div>

//               {resetMessage && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="mb-6 p-3 rounded-lg text-sm"
//                   style={{
//                     backgroundColor: resetMessage.includes("success") ? (isDarkMode ? 'rgba(16, 185, 129, 0.1)' : 'rgba(16, 185, 129, 0.2)') : (isDarkMode ? 'rgba(239, 68, 68, 0.1)' : 'rgba(239, 68, 68, 0.2)'),
//                     color: resetMessage.includes("success") ? (isDarkMode ? '#10B981' : '#059669') : (isDarkMode ? '#EF4444' : '#DC2626')
//                   }}
//                 >
//                   {resetMessage}
//                 </motion.div>
//               )}

//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 onClick={handleForgotPassword}
//                 className={`w-full py-3 bg-gradient-to-r ${currentTheme.button} text-white rounded-xl font-medium hover:shadow-lg transition-all`}
//               >
//                 Send Reset Instructions
//               </motion.button>

//               <button
//                 onClick={() => setIsForgotPasswordOpen(false)}
//                 className={`w-full mt-4 ${currentTheme.secondaryText} hover:${currentTheme.text} font-medium text-sm`}
//               >
//                 Back to Login
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Login;
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useStore } from "./StoreContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle, Lock, User, Store, Mail,
  ShoppingBag, BarChart4, Users, CreditCard,
  Package, Gift, Sun, Moon, X, Menu
} from "lucide-react";
import logo from './images/logo.jpg'; // Adjust the path to your logo image

// Reusable Header Component (adapted from StoreReview)
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

const Login = () => {
  // State management
  const [storeId, setStoreId] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true; // Default to dark mode if not set
  });

  const navigate = useNavigate();
  const location = useLocation();
  const { setStoreName, setStoreId: setStoreInContext, setUserId } = useStore();

  // Refs
  const canvasRef = useRef(null);
  const storeIdInputRef = useRef(null);
  const userIdInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  // Theme definitions (aligned with StoreReview where possible)
  const themes = {
    light: {
      background: 'bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50',
      text: 'text-gray-800',
      secondaryText: 'text-gray-600',
      accent: 'text-purple-600',
      button: 'bg-purple-600 hover:bg-purple-700',
      secondaryButton: 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50',
      card: 'bg-white',
      border: 'border-gray-300',
      header: 'bg-white/90 backdrop-blur-md shadow-lg',
      headerTransparent: 'bg-transparent',
      glow: 'shadow-md hover:shadow-lg',
      input: 'bg-violet-50 border-gray-300',
      errorBg: 'bg-red-50 border-red-300',
      successBg: 'bg-green-50 border-green-200',
      featureCard: 'bg-gray-50/50',
      statsCard: 'bg-gray-100/50',
      trustCard: 'bg-blue-50/20 border-blue-200/20',
      modal: 'bg-gray-500/50',
    },
    dark: {
      background: 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700',
      text: 'text-gray-100',
      secondaryText: 'text-gray-400',
      accent: 'text-purple-400',
      button: 'bg-purple-600 hover:bg-purple-700',
      secondaryButton: 'bg-gray-800 text-purple-400 border-2 border-purple-400 hover:bg-gray-700',
      card: 'bg-gray-800',
      border: 'border-gray-700',
      header: 'bg-gray-900/90 backdrop-blur-lg shadow-lg',
      headerTransparent: 'bg-transparent',
      glow: 'shadow-[0_0_15px_rgba(129,140,248,0.4)] hover:shadow-[0_0_20px_rgba(129,140,248,0.6)]',
      input: 'bg-gray-700 border-gray-600',
      errorBg: 'bg-red-900/30 border-red-700',
      successBg: 'bg-green-900/30 border-green-700',
      featureCard: 'bg-white/5',
      statsCard: 'bg-white/5',
      trustCard: 'bg-blue-900/20 border-blue-500/20',
      modal: 'bg-black/50',
    }
  };

  const currentTheme = isDarkMode ? themes.dark : themes.light;

  // Toggle theme and update localStorage
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  // Handle scroll for header transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Particle effect
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mousePosition = { x: null, y: null };
    let animationFrame;

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();

    class Particle {
      constructor(x, y, size, color, speed) {
        this.x = x || Math.random() * canvas.width;
        this.y = y || Math.random() * canvas.height;
        this.size = size || Math.random() * 3 + 1;
        this.baseSize = this.size;
        this.color = color || `hsla(${Math.random() * 60 + (isDarkMode ? 210 : 180)}, 80%, ${isDarkMode ? 60 : 50}%, ${Math.random() * 0.4 + 0.1})`;
        this.speedX = (Math.random() - 0.5) * speed || (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * speed || (Math.random() - 0.5) * 0.8;
        this.maxSize = this.baseSize * 3;
        this.angle = Math.random() * Math.PI * 2;
        this.angleSpeed = Math.random() * 0.1 - 0.05;
        this.curveRadius = Math.random() * 2;
      }

      update() {
        this.x += this.speedX + Math.sin(this.angle) * this.curveRadius * 0.1;
        this.y += this.speedY + Math.cos(this.angle) * this.curveRadius * 0.1;
        this.angle += this.angleSpeed;

        if (this.x < 0 || this.x > canvas.width) {
          this.speedX *= -1.02;
          this.x = Math.max(0, Math.min(this.x, canvas.width));
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.speedY *= -1.02;
          this.y = Math.max(0, Math.min(this.y, canvas.height));
        }

        if (mousePosition.x != null && mousePosition.y != null) {
          const dx = mousePosition.x - this.x;
          const dy = mousePosition.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const force = (100 - distance) / 2000;
            this.x += dx * force;
            this.y += dy * force;
            this.size = Math.min(this.maxSize, this.baseSize + (100 - distance) / 10);
          } else {
            this.size = Math.max(this.baseSize, this.size - 0.1);
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(window.innerWidth / 10, 150);

      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 3 + 1;
        const speed = Math.random() * 0.5 + 0.3;
        const hue = Math.random() * 60 + (isDarkMode ? 210 : 180);
        const color = `hsla(${hue}, 80%, ${isDarkMode ? 60 : 50}%, ${Math.random() * 0.4 + 0.1})`;
        particles.push(new Particle(null, null, size, color, speed));
      }
    };

    const handleMouseMove = (e) => {
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, isDarkMode ? "rgba(30, 41, 59, 0.02)" : "rgba(229, 231, 235, 0.02)");
      gradient.addColorStop(1, isDarkMode ? "rgba(30, 41, 59, 0.04)" : "rgba(229, 231, 235, 0.04)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        for (let j = index + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x;
          const dy = particle.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 85) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${isDarkMode ? '99, 102, 241' : '59, 130, 246'}, ${0.1 - distance / 850})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      setCanvasDimensions();
      initParticles();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [isDarkMode]);

  // Input focus animation
  useEffect(() => {
    const timer1 = setTimeout(() => {
      if (storeIdInputRef.current) storeIdInputRef.current.focus();
    }, 1000);

    const timer2 = setTimeout(() => {
      if (userIdInputRef.current) userIdInputRef.current.focus();
    }, 1300);

    const timer3 = setTimeout(() => {
      if (passwordInputRef.current) passwordInputRef.current.focus();
    }, 1600);

    const timer4 = setTimeout(() => {
      if (storeIdInputRef.current) storeIdInputRef.current.focus();
    }, 1900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  // Handle login
  const handleUserCheck = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!storeId.trim() || !id.trim() || !password.trim()) {
      setError("All fields are required.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/check_user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ storeId, id: String(id), password }),
      });

      const data = await response.json();

      if (data.message === "User found!") {
        localStorage.setItem("storeName", data.store_name);
        localStorage.setItem("storeId", storeId);
        localStorage.setItem("userId", data.id);
        localStorage.setItem("userRole", data.role);
        localStorage.setItem("storeAddress", data.store_address);
        localStorage.setItem("email", data.email);
        localStorage.setItem("fullName", data.full_name);
        localStorage.setItem("phoneNumber", data.phone_number);

        setStoreName(data.store_name);
        setStoreInContext(storeId);
        setUserId(data.id);

        setSuccess(true);

        setTimeout(() => {
          switch (data.role) {
            case "admin": navigate("/AdminDashboard"); break;
            case "manager": navigate("/ManagerDashboard"); break;
            case "cashier": navigate("/CashierDashboard"); break;
            default: navigate("/Inter");
          }
        }, 1500);
      } else {
        setError("Invalid credentials. Please check your Store ID, User ID, and Password.");
      }
    } catch (err) {
      setError("Connection error. Please check your internet connection and try again.");
    } finally {
      if (!success) setIsLoading(false);
    }
  };

  // Handle forgot password
  const handleForgotPassword = async () => {
    if (!email.trim()) {
      setResetMessage("Please enter your email address");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setResetMessage("Please enter a valid email address");
      return;
    }

    setResetMessage("Processing request...");

    try {
      const response = await fetch("http://localhost:5001/forgot_password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setResetMessage(response.ok
        ? "Password reset instructions sent! Please check your email."
        : data.message || "Failed to send reset email.");
    } catch (error) {
      setResetMessage("Connection error. Please try again later.");
    }
  };

  // Animation variants
  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  // Features and stats data
  const features = [
    { icon: <ShoppingBag className="w-6 h-6" />, title: "Inventory Management", description: "Real-time tracking and smart restocking alerts" },
    { icon: <BarChart4 className="w-6 h-6" />, title: "Sales Analytics", description: "Comprehensive data insights and forecasting" },
    { icon: <Users className="w-6 h-6" />, title: "Staff Management", description: "Scheduling, performance tracking and training" },
    { icon: <CreditCard className="w-6 h-6" />, title: "POS Integration", description: "Seamless checkout and payment processing" },
    { icon: <Package className="w-6 h-6" />, title: "Supplier Portal", description: "Streamlined ordering and vendor management" },
    { icon: <Gift className="w-6 h-6" />, title: "Loyalty Programs", description: "Customer retention and reward systems" }
  ];

  const stats = [
    { value: "27%", label: "Average Revenue Increase" },
    { value: "3.2x", label: "Inventory Turnover Improvement" },
    { value: "5hrs", label: "Weekly Time Saved on Management" }
  ];

  return (
    <div className={`relative min-h-screen overflow-hidden ${currentTheme.background} ${currentTheme.text}`}>
      {/* Theme Toggle Button */}
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

      {/* Particle Background */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative z-10 min-h-[calc(100vh-72px)] mx-auto max-w-7xl px-6 py-20 md:py-24 flex flex-col lg:flex-row items-center">
        {/* Left Section - Features */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft}
          className="w-full lg:w-1/2 lg:pr-10 mb-12 lg:mb-0"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-left max-w-xl mx-auto lg:mx-0"
          >
            <motion.h2
             In variants={fadeInScale}
              className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6"
            >
              Transform Your <br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-purple-400 to-indigo-400' : 'from-purple-600 to-indigo-600'}`}>
                Retail Experience
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInScale}
              className={`${currentTheme.secondaryText} text-lg max-w-lg mb-8`}
            >
              Streamline operations, gain real-time insights, and deliver exceptional customer experiences with our all-in-one retail management platform.
            </motion.p>

            <motion.div
              variants={fadeInScale}
              className="grid grid-cols-3 gap-4 mb-10"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`text-center p-4 rounded-xl ${currentTheme.statsCard} backdrop-blur-sm ${currentTheme.border}`}
                >
                  <h3 className={`text-2xl md:text-3xl font-bold ${currentTheme.accent} mb-1`}>{stat.value}</h3>
                  <p className={`text-xs md:text-sm ${currentTheme.secondaryText}`}>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInScale}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03, y: -3 }}
                  className={`flex items-start p-4 ${currentTheme.featureCard} backdrop-blur-sm rounded-xl ${currentTheme.border} group`}
                >
                  <div className={`p-2 ${isDarkMode ? 'bg-purple-900/30' : 'bg-purple-100/30'} rounded-lg mr-3 group-hover:${isDarkMode ? 'bg-purple-800/50' : 'bg-purple-200/50'} transition-colors`}>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`${currentTheme.accent} group-hover:${isDarkMode ? 'text-purple-300' : 'text-purple-500'}`}
                    >
                      {feature.icon}
                    </motion.div>
                  </div>
                  <div>
                    <h3 className={`font-medium ${currentTheme.text} mb-1`}>{feature.title}</h3>
                    <p className={`text-sm ${currentTheme.secondaryText}`}>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Section - Login Form */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromRight}
          className="w-full lg:w-1/2 lg:pl-10"
        >
          <motion.div
            whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            transition={{ duration: 0.3 }}
            className={`w-full max-w-md mx-auto ${currentTheme.card} backdrop-blur-xl p-8 rounded-2xl shadow-xl ${currentTheme.border} relative overflow-hidden`}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="relative z-10"
            >
              <motion.div variants={fadeInScale} className="flex flex-col items-center mb-8">
                <h2 className={`text-2xl font-bold ${currentTheme.text}`}>Welcome Back</h2>
                <p className={`${currentTheme.secondaryText} mt-1 text-sm`}>Sign in to your account</p>
              </motion.div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  <div className={`flex items-center p-4 ${currentTheme.errorBg} rounded-xl`}>
                    <AlertCircle className={`h-5 w-5 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`} />
                    <p className={`${isDarkMode ? 'text-red-400' : 'text-red-600'} text-sm ml-2`}>{error}</p>
                  </div>
                </motion.div>
              )}

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  <div className={`flex items-center p-4 ${currentTheme.successBg} rounded-xl`}>
                    <svg className={`w-5 h-5 ${isDarkMode ? 'text-green-300' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className={`${isDarkMode ? 'text-green-300' : 'text-green-600'} text-sm ml-2`}>Login successful! Redirecting...</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleUserCheck} className="space-y-5">
                <motion.div variants={fadeInScale}>
                  <label className={`flex items-center text-sm font-medium ${currentTheme.secondaryText} mb-1.5`}>
                    <Store className={`w-4 h-4 mr-2 ${currentTheme.accent}`} /> Store ID
                  </label>
                  <div className="relative">
                    <input
                      ref={storeIdInputRef}
                      type="text"
                      value={storeId}
                      onChange={(e) => setStoreId(e.target.value)}
                      onFocus={() => setActiveField('store')}
                      onBlur={() => setActiveField(null)}
                      className={`w-full px-4 py-3 pl-10 ${currentTheme.input} rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                      placeholder="Enter store ID"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <motion.div
                        animate={activeField === 'store' ? { scale: 1.2, color: isDarkMode ? '#C084FC' : '#9333EA' } : {}}
                      >
                        <Store className={`w-4 h-4 ${currentTheme.secondaryText}`} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInScale}>
                  <label className={`flex items-center text-sm font-medium ${currentTheme.secondaryText} mb-1.5`}>
                    <User className={`w-4 h-4 mr-2 ${currentTheme.accent}`} /> User ID
                  </label>
                  <div className="relative">
                    <input
                      ref={userIdInputRef}
                      type="text"
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      onFocus={() => setActiveField('user')}
                      onBlur={() => setActiveField(null)}
                      className={`w-full px-4 py-3 pl-10 ${currentTheme.input} rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                      placeholder="Enter user ID"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <motion.div
                        animate={activeField === 'user' ? { scale: 1.2, color: isDarkMode ? '#C084FC' : '#9333EA' } : {}}
                      >
                        <User className={`w-4 h-4 ${currentTheme.secondaryText}`} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInScale}>
                  <label className={`flex items-center text-sm font-medium ${currentTheme.secondaryText} mb-1.5`}>
                    <Lock className={`w-4 h-4 mr-2 ${currentTheme.accent}`} /> Password
                  </label>
                  <div className="relative">
                    <input
                      ref={passwordInputRef}
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setActiveField('password')}
                      onBlur={() => setActiveField(null)}
                      className={`w-full px-4 py-3 pl-10 ${currentTheme.input} rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                      placeholder="Enter password"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <motion.div
                        animate={activeField === 'password' ? { scale: 1.2, color: isDarkMode ? '#C084FC' : '#9333EA' } : {}}
                      >
                        <Lock className={`w-4 h-4 ${currentTheme.secondaryText}`} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInScale} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className={`w-4 h-4 ${currentTheme.accent} rounded ${currentTheme.border} focus:ring-purple-500`}
                    />
                    <label htmlFor="remember" className={`ml-2 text-sm ${currentTheme.secondaryText}`}>
                      Remember me
                    </label>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsForgotPasswordOpen(true)}
                    className={`text-sm ${currentTheme.accent} hover:${isDarkMode ? 'text-purple-300' : 'text-purple-700'} font-medium transition-colors`}
                  >
                    Forgot password?
                  </button>
                </motion.div>

                <motion.button
                  variants={fadeInScale}
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02, boxShadow: `0 8px 16px rgba(${isDarkMode ? '192, 132, 252, 0.25' : '147, 51, 234, 0.25'})` }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 ${currentTheme.button} text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"
                      />
                      Verifying...
                    </span>
                  ) : (
                    "Sign In Securely"
                  )}
                </motion.button>
              </form>

              <motion.div variants={fadeInScale} className={`mt-6 text-center ${currentTheme.secondaryText}`}>
                <p className="text-sm">
                  Don't have an account?{" "}
                  <Link to="/SignUp" className={`${currentTheme.accent} hover:${isDarkMode ? 'text-purple-300' : 'text-purple-700'} font-semibold transition-colors`}>
                    Register Now
                  </Link>
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Forgot Password Modal */}
      <AnimatePresence>
        {isForgotPasswordOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 flex items-center justify-center ${currentTheme.modal} backdrop-blur-sm z-50`}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className={`bg-opacity-90 ${currentTheme.card} backdrop-blur-xl p-6 rounded-2xl shadow-2xl w-full max-w-md m-4 relative ${currentTheme.border}`}
            >
              <div className="absolute top-3 right-3">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsForgotPasswordOpen(false)}
                  className={`${currentTheme.secondaryText} hover:${currentTheme.text}`}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              <div className="flex flex-col items-center mb-6">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={`w-14 h-14 ${isDarkMode ? 'bg-purple-900/30' : 'bg-purple-100/30'} rounded-full flex items-center justify-center mb-4 ${isDarkMode ? 'border-purple-500/30' : 'border-purple-200/30'}`}
                >
                  <Mail className={`h-6 w-6 ${currentTheme.accent}`} />
                </motion.div>
                <h2 className={`text-xl font-bold ${currentTheme.text}`}>Reset Password</h2>
                <p className={`${currentTheme.secondaryText} mt-1 text-sm text-center`}>
                  Enter your email address and we'll send you instructions to reset your password.
                </p>
              </div>

              <div className="relative mb-6">
                <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${currentTheme.secondaryText} w-5 h-5`} />
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 ${currentTheme.input} rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                />
              </div>

              {resetMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-3 rounded-lg text-sm"
                  style={{
                    backgroundColor: resetMessage.includes("success") ? (isDarkMode ? 'rgba(16, 185, 129, 0.1)' : 'rgba(16, 185, 129, 0.2)') : (isDarkMode ? 'rgba(239, 68, 68, 0.1)' : 'rgba(239, 68, 68, 0.2)'),
                    color: resetMessage.includes("success") ? (isDarkMode ? '#10B981' : '#059669') : (isDarkMode ? '#EF4444' : '#DC2626')
                  }}
                >
                  {resetMessage}
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleForgotPassword}
                className={`w-full py-3 ${currentTheme.button} text-white rounded-xl font-medium hover:shadow-lg transition-all`}
              >
                Send Reset Instructions
              </motion.button>

              <button
                onClick={() => setIsForgotPasswordOpen(false)}
                className={`w-full mt-4 ${currentTheme.secondaryText} hover:${currentTheme.text} font-medium text-sm`}
              >
                Back to Login
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Login;