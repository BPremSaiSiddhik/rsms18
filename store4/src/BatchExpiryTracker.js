// // // import React, { useState, useEffect, useContext } from "react";
// // // import { StoreContext } from "./StoreContext";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // const BatchExpiryTracker = () => {
// // //   const [products, setProducts] = useState([]);
// // //   const { storeId } = useContext(StoreContext);
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [errorMessage, setErrorMessage] = useState(null);
// // //   const API_URL = "http://127.0.0.1:5000/products";

// // //   useEffect(() => {
// // //     if (storeId) {
// // //       setIsLoading(true);
// // //       fetch(`${API_URL}?storeId=${storeId}`)
// // //         .then((res) => {
// // //           if (!res.ok) throw new Error(`Error: ${res.status}`);
// // //           return res.json();
// // //         })
// // //         .then((data) => {
// // //           setProducts(data);
// // //           setIsLoading(false);
// // //         })
// // //         .catch((err) => {
// // //           console.error("Error fetching products:", err);
// // //           setErrorMessage("Failed to fetch products. Please try again.");
// // //           setIsLoading(false);
// // //         });
// // //     }
// // //   }, [storeId]);

// // //   // Calculate expiry status based on validity type
// // //   const getExpiryStatus = (product) => {
// // //     if (!product.valid_till) return "No Expiry Data";

// // //     if (product.validity_type === "date") {
// // //       const expiryDate = new Date(product.valid_till);
// // //       const today = new Date();
// // //       const diffTime = expiryDate - today;
// // //       const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

// // //       if (diffDays < 0) return "Expired";
// // //       if (diffDays <= 7) return "Expiring Soon";
// // //       return "Valid";
// // //     } else if (product.validity_type === "period") {
// // //       const period = product.valid_till.toLowerCase();
// // //       if (period.includes("day") && parseInt(period) <= 7) return "Expiring Soon";
// // //       if (period.includes("month") && parseInt(period) <= 1) return "Expiring Soon";
// // //       return "Valid";
// // //     }

// // //     return "No Expiry Data";
// // //   };

// // //   return (
// // //     <div className="font-poppins bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen p-6 text-gray-800">
// // //       {/* Loading overlay */}
// // //       <AnimatePresence>
// // //         {isLoading && (
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
// // //           >
// // //             <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
// // //               <div className="loader w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
// // //               <p className="mt-4 text-gray-700">Loading...</p>
// // //             </div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>

// // //       {/* Error message */}
// // //       {errorMessage && (
// // //         <motion.div
// // //           initial={{ opacity: 0, y: -50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           exit={{ opacity: 0, y: -50 }}
// // //           className="fixed top-6 right-6 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
// // //           onClick={() => setErrorMessage(null)}
// // //         >
// // //           {errorMessage}
// // //         </motion.div>
// // //       )}

// // //       {/* Header */}
// // //       <motion.header
// // //         initial={{ y: -100, opacity: 0 }}
// // //         animate={{ y: 0, opacity: 1 }}
// // //         transition={{ duration: 0.5 }}
// // //         className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 px-8 rounded-2xl shadow-xl mb-10"
// // //       >
// // //         <div className="container mx-auto">
// // //           <h1 className="text-4xl font-extrabold tracking-tight">
// // //             Batch Expiry Tracker
// // //           </h1>
// // //           <p className="mt-2 text-blue-200 max-w-xl">
// // //             Track product expiry dates and manage inventory effectively.
// // //           </p>
// // //         </div>
// // //       </motion.header>

// // //       {/* Table */}
// // //       <motion.section
// // //         initial={{ opacity: 0, y: 20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ delay: 0.2 }}
// // //         className="bg-white rounded-2xl p-6 shadow-lg"
// // //       >
// // //         <div className="overflow-x-auto">
// // //           <table className="min-w-full divide-y divide-gray-200">
// // //             <thead className="bg-gray-50">
// // //               <tr>
// // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                   Product Name
// // //                 </th>
// // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                   Manufacturing Date
// // //                 </th>
// // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                   Valid Till
// // //                 </th>
// // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                   Status
// // //                 </th>
// // //               </tr>
// // //             </thead>
// // //             <tbody className="bg-white divide-y divide-gray-200">
// // //               {products.map((product) => (
// // //                 <tr key={product._id}>
// // //                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
// // //                     {product.product_name}
// // //                   </td>
// // //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // //                     {product.date_of_manufacturing || "N/A"}
// // //                   </td>
// // //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // //                     {product.valid_till || "N/A"}
// // //                   </td>
// // //                   <td className="px-6 py-4 whitespace-nowrap text-sm">
// // //                     <span
// // //                       className={`px-2 py-1 rounded-full text-xs font-medium ${
// // //                         getExpiryStatus(product) === "Expired"
// // //                           ? "bg-red-100 text-red-800"
// // //                           : getExpiryStatus(product) === "Expiring Soon"
// // //                           ? "bg-yellow-100 text-yellow-800"
// // //                           : "bg-green-100 text-green-800"
// // //                       }`}
// // //                     >
// // //                       {getExpiryStatus(product)}
// // //                     </span>
// // //                   </td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       </motion.section>
// // //     </div>
// // //   );
// // // };

// // // export default BatchExpiryTracker;

// // import React, { useState, useEffect, useContext } from "react";
// // import { StoreContext } from "./StoreContext";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// // const BatchExpiryTracker = () => {
// //   const [products, setProducts] = useState([]);
// //   const { storeId } = useContext(StoreContext);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [errorMessage, setErrorMessage] = useState(null);
// //   const [filterStatus, setFilterStatus] = useState("all");
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const API_URL = "http://127.0.0.1:5000/products";

// //   useEffect(() => {
// //     if (storeId) {
// //       setIsLoading(true);
// //       fetch(`${API_URL}?storeId=${storeId}`)
// //         .then((res) => {
// //           if (!res.ok) throw new Error(`Error: ${res.status}`);
// //           return res.json();
// //         })
// //         .then((data) => {
// //           setProducts(data);
// //           setIsLoading(false);
// //         })
// //         .catch((err) => {
// //           console.error("Error fetching products:", err);
// //           setErrorMessage("Failed to fetch products. Please try again.");
// //           setIsLoading(false);
// //         });
// //     }
// //   }, [storeId]);

// //   // Calculate expiry status
// //   const getExpiryStatus = (product) => {
// //     if (!product.valid_till) return "No Expiry Data";

// //     if (product.validity_type === "date") {
// //       const expiryDate = new Date(product.valid_till);
// //       const today = new Date();
// //       const diffTime = expiryDate - today;
// //       const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

// //       if (diffDays < 0) return "Expired";
// //       if (diffDays <= 7) return "Expiring Soon";
// //       return "Valid";
// //     } else if (product.validity_type === "period") {
// //       const period = product.valid_till.toLowerCase();
// //       if (period.includes("day") && parseInt(period) <= 7) return "Expiring Soon";
// //       if (period.includes("month") && parseInt(period) <= 1) return "Expiring Soon";
// //       return "Valid";
// //     }

// //     return "No Expiry Data";
// //   };

// //   // Filter products based on status and search query
// //   const filteredProducts = products.filter((product) => {
// //     const matchesSearch = product.product_name
// //       ?.toLowerCase()
// //       .includes(searchQuery.toLowerCase());
// //     const matchesStatus =
// //       filterStatus === "all" || getExpiryStatus(product) === filterStatus;
// //     return matchesSearch && matchesStatus;
// //   });

// //   // Data for expiry status chart
// //   const expiryData = [
// //     { name: "Expired", value: products.filter((p) => getExpiryStatus(p) === "Expired").length },
// //     { name: "Expiring Soon", value: products.filter((p) => getExpiryStatus(p) === "Expiring Soon").length },
// //     { name: "Valid", value: products.filter((p) => getExpiryStatus(p) === "Valid").length },
// //   ];

// //   const COLORS = ["#EF4444", "#F59E0B", "#10B981"];

// //   return (
// //     <div className="font-poppins bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen p-6 text-gray-800">
// //       {/* Loading overlay */}
// //       <AnimatePresence>
// //         {isLoading && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
// //           >
// //             <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
// //               <div className="loader w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
// //               <p className="mt-4 text-gray-700">Loading...</p>
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       {/* Error message */}
// //       {errorMessage && (
// //         <motion.div
// //           initial={{ opacity: 0, y: -50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           exit={{ opacity: 0, y: -50 }}
// //           className="fixed top-6 right-6 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
// //           onClick={() => setErrorMessage(null)}
// //         >
// //           {errorMessage}
// //         </motion.div>
// //       )}

// //       {/* Header */}
// //       <motion.header
// //         initial={{ y: -100, opacity: 0 }}
// //         animate={{ y: 0, opacity: 1 }}
// //         transition={{ duration: 0.5 }}
// //         className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 px-8 rounded-2xl shadow-xl mb-10"
// //       >
// //         <div className="container mx-auto">
// //           <h1 className="text-4xl font-extrabold tracking-tight">
// //             Batch Expiry Tracker
// //           </h1>
// //           <p className="mt-2 text-blue-200 max-w-xl">
// //             Track product expiry dates and manage inventory effectively.
// //           </p>
// //         </div>
// //       </motion.header>

// //       {/* Summary Cards */}
// //       <motion.section
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 0.2 }}
// //         className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
// //       >
// //         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500">
// //           <h3 className="text-gray-500 text-sm font-medium">Expired Products</h3>
// //           <p className="text-3xl font-bold text-gray-800 mt-2">
// //             {products.filter((p) => getExpiryStatus(p) === "Expired").length}
// //           </p>
// //         </div>
// //         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-yellow-500">
// //           <h3 className="text-gray-500 text-sm font-medium">Expiring Soon</h3>
// //           <p className="text-3xl font-bold text-gray-800 mt-2">
// //             {products.filter((p) => getExpiryStatus(p) === "Expiring Soon").length}
// //           </p>
// //         </div>
// //         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
// //           <h3 className="text-gray-500 text-sm font-medium">Valid Products</h3>
// //           <p className="text-3xl font-bold text-gray-800 mt-2">
// //             {products.filter((p) => getExpiryStatus(p) === "Valid").length}
// //           </p>
// //         </div>
// //       </motion.section>

// //       {/* Filters and Search */}
// //       <motion.section
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 0.3 }}
// //         className="bg-white rounded-2xl p-6 shadow-lg mb-10"
// //       >
// //         <div className="flex flex-col md:flex-row gap-4">
// //           <div className="w-full md:w-1/2">
// //             <input
// //               type="text"
// //               placeholder="Search by product name..."
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //           </div>
// //           <div className="w-full md:w-1/2">
// //             <select
// //               value={filterStatus}
// //               onChange={(e) => setFilterStatus(e.target.value)}
// //               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
// //             >
// //               <option value="all">All Statuses</option>
// //               <option value="Expired">Expired</option>
// //               <option value="Expiring Soon">Expiring Soon</option>
// //               <option value="Valid">Valid</option>
// //             </select>
// //           </div>
// //         </div>
// //       </motion.section>

// //       {/* Expiry Chart */}
// //       <motion.section
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 0.4 }}
// //         className="bg-white rounded-2xl p-6 shadow-lg mb-10"
// //       >
// //         <h2 className="text-xl font-bold text-gray-800 mb-6">Expiry Status Overview</h2>
// //         <PieChart width={400} height={300}>
// //           <Pie
// //             data={expiryData}
// //             cx="50%"
// //             cy="50%"
// //             outerRadius={80}
// //             fill="#8884d8"
// //             dataKey="value"
// //             label
// //           >
// //             {expiryData.map((entry, index) => (
// //               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// //             ))}
// //           </Pie>
// //           <Tooltip />
// //           <Legend />
// //         </PieChart>
// //       </motion.section>

// //       {/* Table */}
// //       <motion.section
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 0.5 }}
// //         className="bg-white rounded-2xl p-6 shadow-lg"
// //       >
// //         <div className="overflow-x-auto">
// //           <table className="min-w-full divide-y divide-gray-200">
// //             <thead className="bg-gray-50">
// //               <tr>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                   Product Name
// //                 </th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                   Manufacturing Date
// //                 </th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                   Valid Till
// //                 </th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                   Status
// //                 </th>
// //               </tr>
// //             </thead>
// //             <tbody className="bg-white divide-y divide-gray-200">
// //               {filteredProducts.map((product) => (
// //                 <tr key={product._id}>
// //                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
// //                     {product.product_name}
// //                   </td>
// //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// //                     {product.date_of_manufacturing || "N/A"}
// //                   </td>
// //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// //                     {product.valid_till || "N/A"}
// //                   </td>
// //                   <td className="px-6 py-4 whitespace-nowrap text-sm">
// //                     <span
// //                       className={`px-2 py-1 rounded-full text-xs font-medium ${
// //                         getExpiryStatus(product) === "Expired"
// //                           ? "bg-red-100 text-red-800"
// //                           : getExpiryStatus(product) === "Expiring Soon"
// //                           ? "bg-yellow-100 text-yellow-800"
// //                           : "bg-green-100 text-green-800"
// //                       }`}
// //                     >
// //                       {getExpiryStatus(product)}
// //                     </span>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </motion.section>
// //     </div>
// //   );
// // };

// // export default BatchExpiryTracker;


// import React, { useState, useEffect, useContext } from "react";
// import { StoreContext } from "./StoreContext";
// import { motion, AnimatePresence } from "framer-motion";
// import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// const BatchExpiryTracker = () => {
//   const [products, setProducts] = useState([]);
//   const { storeId } = useContext(StoreContext);
//   const [isLoading, setIsLoading] = useState(true);
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [filterStatus, setFilterStatus] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");
//   const API_URL = "http://127.0.0.1:5000/products";

//   useEffect(() => {
//     if (storeId) {
//       setIsLoading(true);
//       fetch(`${API_URL}?storeId=${storeId}`)
//         .then((res) => {
//           if (!res.ok) throw new Error(`Error: ${res.status}`);
//           return res.json();
//         })
//         .then((data) => {
//           setProducts(data);
//           setIsLoading(false);
//         })
//         .catch((err) => {
//           console.error("Error fetching products:", err);
//           setErrorMessage("Failed to fetch products. Please try again.");
//           setIsLoading(false);
//         });
//     }
//   }, [storeId]);

//   // Calculate expiry status
//   const getExpiryStatus = (product) => {
//     if (!product.valid_till) return "No Expiry Data";

//     if (product.validity_type === "date") {
//       // Handle specific expiry date
//       const expiryDate = new Date(product.valid_till);
//       const today = new Date();
//       const diffTime = expiryDate - today;
//       const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

//       if (diffDays < 0) return "Expired";
//       if (diffDays <= 7) return "Expiring Soon";
//       return "Valid";
//     } else if (product.validity_type === "period") {
//       // Handle time period (e.g., "30 days")
//       const period = product.valid_till.toLowerCase();
//       const periodNumber = parseInt(period);

//       if (isNaN(periodNumber)) return "No Expiry Data";

//       if (period.includes("day")) {
//         if (periodNumber <= 7) return "Expiring Soon";
//         return "Valid";
//       } else if (period.includes("month")) {
//         if (periodNumber <= 1) return "Expiring Soon";
//         return "Valid";
//       } else if (period.includes("year")) {
//         return "Valid";
//       }
//     }

//     return "No Expiry Data";
//   };

//   // Filter products based on status and search query
//   const filteredProducts = products.filter((product) => {
//     const matchesSearch = product.product_name
//       ?.toLowerCase()
//       .includes(searchQuery.toLowerCase());
//     const matchesStatus =
//       filterStatus === "all" || getExpiryStatus(product) === filterStatus;
//     return matchesSearch && matchesStatus;
//   });

//   // Data for expiry status chart
//   const expiryData = [
//     { name: "Expired", value: products.filter((p) => getExpiryStatus(p) === "Expired").length },
//     { name: "Expiring Soon", value: products.filter((p) => getExpiryStatus(p) === "Expiring Soon").length },
//     { name: "Valid", value: products.filter((p) => getExpiryStatus(p) === "Valid").length },
//   ];

//   const COLORS = ["#EF4444", "#F59E0B", "#10B981"];

//   return (
//     <div className="font-poppins bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen p-6 text-gray-800">
//       {/* Loading overlay */}
//       <AnimatePresence>
//         {isLoading && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//           >
//             <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
//               <div className="loader w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
//               <p className="mt-4 text-gray-700">Loading...</p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Error message */}
//       {errorMessage && (
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -50 }}
//           className="fixed top-6 right-6 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
//           onClick={() => setErrorMessage(null)}
//         >
//           {errorMessage}
//         </motion.div>
//       )}

//       {/* Header */}
//       <motion.header
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 px-8 rounded-2xl shadow-xl mb-10"
//       >
//         <div className="container mx-auto">
//           <h1 className="text-4xl font-extrabold tracking-tight">
//             Batch Expiry Tracker
//           </h1>
//           <p className="mt-2 text-blue-200 max-w-xl">
//             Track product expiry dates and manage inventory effectively.
//           </p>
//         </div>
//       </motion.header>

//       {/* Summary Cards */}
//       <motion.section
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//         className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
//       >
//         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500">
//           <h3 className="text-gray-500 text-sm font-medium">Expired Products</h3>
//           <p className="text-3xl font-bold text-gray-800 mt-2">
//             {products.filter((p) => getExpiryStatus(p) === "Expired").length}
//           </p>
//         </div>
//         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-yellow-500">
//           <h3 className="text-gray-500 text-sm font-medium">Expiring Soon</h3>
//           <p className="text-3xl font-bold text-gray-800 mt-2">
//             {products.filter((p) => getExpiryStatus(p) === "Expiring Soon").length}
//           </p>
//         </div>
//         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
//           <h3 className="text-gray-500 text-sm font-medium">Valid Products</h3>
//           <p className="text-3xl font-bold text-gray-800 mt-2">
//             {products.filter((p) => getExpiryStatus(p) === "Valid").length}
//           </p>
//         </div>
//       </motion.section>

//       {/* Filters and Search */}
//       <motion.section
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3 }}
//         className="bg-white rounded-2xl p-6 shadow-lg mb-10"
//       >
//         <div className="flex flex-col md:flex-row gap-4">
//           <div className="w-full md:w-1/2">
//             <input
//               type="text"
//               placeholder="Search by product name..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="w-full md:w-1/2">
//             <select
//               value={filterStatus}
//               onChange={(e) => setFilterStatus(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
//             >
//               <option value="all">All Statuses</option>
//               <option value="Expired">Expired</option>
//               <option value="Expiring Soon">Expiring Soon</option>
//               <option value="Valid">Valid</option>
//             </select>
//           </div>
//         </div>
//       </motion.section>

//       {/* Expiry Chart */}
//       <motion.section
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4 }}
//         className="bg-white rounded-2xl p-6 shadow-lg mb-10"
//       >
//         <h2 className="text-xl font-bold text-gray-800 mb-6">Expiry Status Overview</h2>
//         <PieChart width={400} height={300}>
//           <Pie
//             data={expiryData}
//             cx="50%"
//             cy="50%"
//             outerRadius={80}
//             fill="#8884d8"
//             dataKey="value"
//             label
//           >
//             {expiryData.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//           <Tooltip />
//           <Legend />
//         </PieChart>
//       </motion.section>

//       {/* Table */}
//       <motion.section
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5 }}
//         className="bg-white rounded-2xl p-6 shadow-lg"
//       >
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Product Name
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Manufacturing Date
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Valid Till
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Status
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {filteredProducts.map((product) => (
//                 <tr key={product._id}>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                     {product.product_name}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {product.date_of_manufacturing || "N/A"}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {product.valid_till || "N/A"}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm">
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs font-medium ${
//                         getExpiryStatus(product) === "Expired"
//                           ? "bg-red-100 text-red-800"
//                           : getExpiryStatus(product) === "Expiring Soon"
//                           ? "bg-yellow-100 text-yellow-800"
//                           : "bg-green-100 text-green-800"
//                       }`}
//                     >
//                       {getExpiryStatus(product)}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default BatchExpiryTracker;
import React, { useState, useEffect, useContext } from "react";
import { StoreContext } from "./StoreContext";
import { motion, AnimatePresence } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Download, AlertCircle, Clock, Package } from "lucide-react";

const BatchExpiryTracker = () => {
  const [products, setProducts] = useState([]);
  const { storeId } = useContext(StoreContext);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const API_URL = "http://127.0.0.1:5000/products";

  useEffect(() => {
    if (storeId) {
      setIsLoading(true);
      fetch(`${API_URL}?storeId=${storeId}`)
        .then((res) => {
          if (!res.ok) throw new Error(`Error: ${res.status}`);
          return res.json();
        })
        .then((data) => {
          setProducts(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching products:", err);
          setErrorMessage("Failed to load inventory data");
          setIsLoading(false);
        });
    }
  }, [storeId]);

  // Dynamic current date
  const getCurrentDate = () => new Date();

  // Enhanced expiry status calculation
  const getExpiryStatus = (product) => {
    const currentDate = getCurrentDate();
    if (!product.valid_till) return "No Expiry Data";

    if (product.validity_type === "date") {
      const expiryDate = new Date(product.valid_till);
      if (isNaN(expiryDate.getTime())) return "Invalid Date";
      const diffTime = expiryDate - currentDate;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays < 0) return "Expired";
      if (diffDays <= 7) return "Expiring Soon";
      if (diffDays <= 30) return "Warning";
      return "Valid";
    } else if (product.validity_type === "period") {
      const period = product.valid_till.toLowerCase();
      const periodNumber = parseInt(period);
      if (isNaN(periodNumber)) return "Invalid Period";

      let days;
      if (period.includes("day")) days = periodNumber;
      else if (period.includes("month")) days = periodNumber * 30;
      else if (period.includes("year")) days = periodNumber * 365;
      else return "Invalid Period";

      const manufacturingDate = product.date_of_manufacturing 
        ? new Date(product.date_of_manufacturing) 
        : new Date(currentDate - 30 * 24 * 60 * 60 * 1000); // Default to 30 days ago if missing
      if (isNaN(manufacturingDate.getTime())) return "Invalid Mfg Date";

      const expiryDate = new Date(manufacturingDate);
      expiryDate.setDate(expiryDate.getDate() + days);
      const diffTime = expiryDate - currentDate;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays < 0) return "Expired";
      if (diffDays <= 7) return "Expiring Soon";
      if (diffDays <= 30) return "Warning";
      return "Valid";
    }
    return "No Expiry Data";
  };

  // Get days remaining
  const getDaysRemaining = (product) => {
    const currentDate = getCurrentDate();
    if (!product.valid_till) return "N/A";

    if (product.validity_type === "date") {
      const expiryDate = new Date(product.valid_till);
      if (isNaN(expiryDate.getTime())) return "N/A";
      const diffTime = expiryDate - currentDate;
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    } else if (product.validity_type === "period") {
      const period = product.valid_till.toLowerCase();
      const periodNumber = parseInt(period);
      if (isNaN(periodNumber)) return "N/A";

      let days;
      if (period.includes("day")) days = periodNumber;
      else if (period.includes("month")) days = periodNumber * 30;
      else if (period.includes("year")) days = periodNumber * 365;
      else return "N/A";

      const manufacturingDate = product.date_of_manufacturing 
        ? new Date(product.date_of_manufacturing) 
        : new Date(currentDate - 30 * 24 * 60 * 60 * 1000); // Default to 30 days ago
      if (isNaN(manufacturingDate.getTime())) return "N/A";

      const expiryDate = new Date(manufacturingDate);
      expiryDate.setDate(expiryDate.getDate() + days);
      const diffTime = expiryDate - currentDate;
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return "N/A";
  };

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.product_name?.toLowerCase().includes(searchQuery.toLowerCase());
    const status = getExpiryStatus(product);
    const matchesStatus = filterStatus === "all" || status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Chart data
  const expiryData = [
    { name: "Expired", value: products.filter((p) => getExpiryStatus(p) === "Expired").length },
    { name: "Expiring Soon", value: products.filter((p) => getExpiryStatus(p) === "Expiring Soon").length },
    { name: "Warning", value: products.filter((p) => getExpiryStatus(p) === "Warning").length },
    { name: "Valid", value: products.filter((p) => getExpiryStatus(p) === "Valid").length },
    { name: "No Data", value: products.filter((p) => getExpiryStatus(p) === "No Expiry Data" || getExpiryStatus(p).includes("Invalid")).length },
  ].filter(item => item.value > 0);

  const COLORS = ["#EF4444", "#F59E0B", "#FBBF24", "#10B981", "#6B7280"];

  // Export to CSV
  const exportToCSV = () => {
    const headers = "Product Name,Manufacturing Date,Valid Till,Days Remaining,Status,Quantity,Stock Level\n";
    const rows = filteredProducts.map(product => 
      `${product.product_name},${product.date_of_manufacturing || "N/A"},${product.valid_till || "N/A"},${getDaysRemaining(product)},${getExpiryStatus(product)},${product.quantity || "N/A"},${product.stock_level || "N/A"}`
    ).join("\n");
    const csv = headers + rows;
    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `batch_expiry_${getCurrentDate().toISOString().split("T")[0]}.csv`;
    link.click();
  };

  // Theme configuration
  const theme = {
    primary: "#4F46E5",
    secondary: "#1E293B",
    success: "#10B981",
    danger: "#EF4444",
    warning: "#F59E0B",
    info: "#3B82F6",
    background: "#F9FAFB",
    card: "#FFFFFF",
    text: "#1F2A44",
    textLight: "#6B7280",
    border: "#E5E7EB",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-inter bg-gray-50 min-h-screen p-8 text-gray-900"
      style={{ background: theme.background }}
    >
      {/* Header */}
      <motion.header
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-8 px-10 rounded-2xl shadow-lg mb-12"
      >
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Batch Expiry Tracker</h1>
            <p className="mt-2 text-indigo-100">Real-time inventory expiration management</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={exportToCSV}
            className="bg-white text-indigo-600 px-4 py-2 rounded-lg flex items-center gap-2 font-semibold shadow-md"
          >
            <Download size={20} /> Export CSV
          </motion.button>
        </div>
      </motion.header>

      {/* Summary Cards */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12"
      >
        {[
          { title: "Expired", value: expiryData.find(d => d.name === "Expired")?.value || 0, color: theme.danger, icon: AlertCircle },
          { title: "Expiring Soon", value: expiryData.find(d => d.name === "Expiring Soon")?.value || 0, color: theme.warning, icon: Clock },
          { title: "Warning (30d)", value: expiryData.find(d => d.name === "Warning")?.value || 0, color: "#FBBF24", icon: Package },
          { title: "Valid", value: expiryData.find(d => d.name === "Valid")?.value || 0, color: theme.success, icon: Package },
          { title: "No Data", value: expiryData.find(d => d.name === "No Data")?.value || 0, color: theme.textLight, icon: AlertCircle },
        ].map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
            className="bg-white p-6 rounded-xl shadow-md border-l-4"
            style={{ borderColor: card.color }}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-600">{card.title}</p>
                <p className="text-2xl font-bold mt-1" style={{ color: card.color }}>{card.value}</p>
              </div>
              <card.icon size={24} color={card.color} />
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Filters and Search */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl p-6 shadow-md mb-12 flex flex-col md:flex-row gap-6"
      >
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          style={{ borderColor: theme.border }}
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          style={{ borderColor: theme.border }}
        >
          <option value="all">All Statuses</option>
          <option value="Expired">Expired</option>
          <option value="Expiring Soon">Expiring Soon</option>
          <option value="Warning">Warning (30d)</option>
          <option value="Valid">Valid</option>
          <option value="No Expiry Data">No Expiry Data</option>
        </select>
      </motion.section>

      {/* Chart */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl p-6 shadow-md mb-12"
      >
        <h2 className="text-xl font-semibold mb-6" style={{ color: theme.text }}>Expiry Distribution</h2>
        <PieChart width={500} height={300}>
          <Pie
            data={expiryData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
          >
            {expiryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value} products`} />
          <Legend wrapperStyle={{ paddingTop: "20px" }} />
        </PieChart>
      </motion.section>

      {/* Table */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-2xl p-6 shadow-md overflow-x-auto"
      >
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {["Product Name", "Mfg Date", "Valid Till", "Days Left", "Status", "Quantity", "Stock Level"].map((header, idx) => (
                <th key={idx} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredProducts.map((product) => {
              const status = getExpiryStatus(product);
              const daysLeft = getDaysRemaining(product);
              return (
                <motion.tr
                  key={product._id}
                  whileHover={{ backgroundColor: "#F9FAFB" }}
                  className="transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium" style={{ color: theme.text }}>{product.product_name}</td>
                  <td className="px-6 py-4 text-sm" style={{ color: theme.textLight }}>
                    {product.date_of_manufacturing ? new Date(product.date_of_manufacturing).toLocaleDateString() : "N/A"}
                  </td>
                  <td className="px-6 py-4 text-sm" style={{ color: theme.textLight }}>{product.valid_till || "N/A"}</td>
                  <td className="px-6 py-4 text-sm" style={{ color: daysLeft < 0 ? theme.danger : daysLeft <= 7 ? theme.warning : theme.text }}>
                    {daysLeft !== "N/A" ? `${daysLeft} days` : "N/A"}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        status === "Expired" ? "bg-red-100 text-red-800" :
                        status === "Expiring Soon" ? "bg-yellow-100 text-yellow-800" :
                        status === "Warning" ? "bg-amber-100 text-amber-800" :
                        status === "Valid" ? "bg-green-100 text-green-800" :
                        "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm" style={{ color: theme.text }}>{product.quantity || "N/A"}</td>
                  <td className="px-6 py-4 text-sm" style={{ color: theme.text }}>{product.stock_level || "N/A"}</td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </motion.section>

      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center"
            >
              <Package size={40} color={theme.primary} />
              <p className="mt-4 text-gray-700 font-medium">Loading Inventory...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Message */}
      {errorMessage && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-6 right-6 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2"
          onClick={() => setErrorMessage(null)}
        >
          <AlertCircle size={20} /> {errorMessage}
        </motion.div>
      )}
    </motion.div>
  );
};

export default BatchExpiryTracker;