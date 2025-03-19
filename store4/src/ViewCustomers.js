// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";
// // // import { useStore } from "./StoreContext";

// // // const ViewCustomers = () => {
// // //   const { storeId } = useStore(); // Use storeId from context
// // //   const [customers, setCustomers] = useState([]);
// // //   const [error, setError] = useState("");

// // //   useEffect(() => {
// // //     if (storeId) {
// // //       fetchCustomers();
// // //     }
// // //   }, [storeId]);

// // //   const fetchCustomers = async () => {
// // //     try {
// // //       const response = await axios.get(
// // //         `http://localhost:5008/api/customers?storeId=${storeId}` // Use storeId in the request
// // //       );
// // //       setCustomers(response.data.customers);
// // //       setError("");
// // //     } catch (err) {
// // //       console.error(err);
// // //       setError("Failed to fetch customer information. Please try again later.");
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
// // //       <div className="max-w-7xl mx-auto">
// // //         <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
// // //           Customers of Store: {storeId}
// // //         </h2>
// // //         {error && (
// // //           <p className="text-center text-red-500 font-semibold mb-6">{error}</p>
// // //         )}

// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {customers.length > 0 ? (
// // //             customers.map((customer, index) => (
// // //               <div
// // //                 key={index}
// // //                 className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
// // //               >
// // //                 <div className="p-6">
// // //                   <h3 className="text-2xl font-bold text-blue-600 mb-4">
// // //                     {customer.name}
// // //                   </h3>
// // //                   <p className="text-gray-700 mb-2">
// // //                     <span className="font-semibold">Phone:</span> {customer.phone}
// // //                   </p>
// // //                   <p className="text-gray-700 mb-2">
// // //                     <span className="font-semibold">Email:</span> {customer.email}
// // //                   </p>
// // //                   <p className="text-gray-700 mb-2">
// // //                     <span className="font-semibold">Address:</span>{" "}
// // //                     {customer.address || "N/A"}
// // //                   </p>
// // //                   <p className="text-gray-700 mb-2">
// // //                     <span className="font-semibold">Birthday:</span>{" "}
// // //                     {customer.birthday || "N/A"}
// // //                   </p>
// // //                   <p className="text-gray-700">
// // //                     <span className="font-semibold">Loyalty Points:</span>{" "}
// // //                     {customer.loyaltyPoints || 0}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             ))
// // //           ) : (
// // //             <p className="text-center text-gray-500 text-xl col-span-full">
// // //               No customers found for this store.
// // //             </p>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ViewCustomers;

// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";
// // // import { useStore } from "./StoreContext";

// // // const ViewCustomers = () => {
// // //   const { storeId } = useStore();
// // //   const [customers, setCustomers] = useState([]);
// // //   const [error, setError] = useState("");
// // //   const [purchaseHistory, setPurchaseHistory] = useState(null); // To store selected customer's purchase history
// // //   const [loadingHistory, setLoadingHistory] = useState(false);

// // //   useEffect(() => {
// // //     if (storeId) {
// // //       fetchCustomers();
// // //     }
// // //   }, [storeId]);

// // //   const fetchCustomers = async () => {
// // //     try {
// // //       const response = await axios.get(
// // //         `http://localhost:5008/api/customers?storeId=${storeId}`
// // //       );
// // //       setCustomers(response.data.customers);
// // //       setError("");
// // //     } catch (err) {
// // //       console.error(err);
// // //       setError("Failed to fetch customer information. Please try again later.");
// // //     }
// // //   };

// // //   // const fetchPurchaseHistory = async (customerId) => {
// // //   //   setLoadingHistory(true);
// // //   //   try {
// // //   //     const response = await axios.get(
// // //   //       `http://localhost:5008/api/customers/${customerId}/purchase-history?storeId=${storeId}`
// // //   //     );
// // //   //     setPurchaseHistory(response.data.purchase_history);
// // //   //   } catch (err) {
// // //   //     console.error(err);
// // //   //     setError("Failed to fetch purchase history. Please try again later.");
// // //   //   }
// // //   //   setLoadingHistory(false);
// // //   // };
// // //   const fetchPurchaseHistory = async (customerId) => {
// // //     setLoadingHistory(true);
// // //     try {
// // //       const response = await axios.get(
// // //         `http://localhost:5008/api/customers/${customerId}/purchase-history?storeId=${storeId}`
// // //       );
// // //       setPurchaseHistory(response.data.purchase_history);
// // //     } catch (err) {
// // //       console.error(err);
// // //       setError("Failed to fetch purchase history. Please try again later.");
// // //     }
// // //     setLoadingHistory(false);
// // //   };
  

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
// // //       <div className="max-w-7xl mx-auto">
// // //         <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
// // //           Customers of Store: {storeId}
// // //         </h2>
// // //         {error && (
// // //           <p className="text-center text-red-500 font-semibold mb-6">{error}</p>
// // //         )}

// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {customers.length > 0 ? (
// // //             customers.map((customer, index) => (
// // //               <div
// // //                 key={index}
// // //                 className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
// // //                 onClick={() => fetchPurchaseHistory(customer.phone)} // Assuming 'phone' is unique for customer identification
// // //               >
// // //                 <div className="p-6">
// // //                   <h3 className="text-2xl font-bold text-blue-600 mb-4">
// // //                     {customer.name}
// // //                   </h3>
// // //                   <p className="text-gray-700 mb-2">
// // //                     <span className="font-semibold">Phone:</span> {customer.phone}
// // //                   </p>
// // //                   <p className="text-gray-700 mb-2">
// // //                     <span className="font-semibold">Email:</span> {customer.email}
// // //                   </p>
// // //                   <p className="text-gray-700 mb-2">
// // //                     <span className="font-semibold">Address:</span>{" "}
// // //                     {customer.address || "N/A"}
// // //                   </p>
// // //                   <p className="text-gray-700 mb-2">
// // //                     <span className="font-semibold">Birthday:</span>{" "}
// // //                     {customer.birthday || "N/A"}
// // //                   </p>
// // //                   <p className="text-gray-700">
// // //                     <span className="font-semibold">Loyalty Points:</span>{" "}
// // //                     {customer.loyaltyPoints || 0}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             ))
// // //           ) : (
// // //             <p className="text-center text-gray-500 text-xl col-span-full">
// // //               No customers found for this store.
// // //             </p>
// // //           )}
// // //         </div>

// // //         {purchaseHistory && (
// // //           <div className="mt-8">
// // //             <h3 className="text-2xl font-semibold text-gray-900 mb-4">
// // //               Purchase History
// // //             </h3>
// // //             {loadingHistory ? (
// // //               <p>Loading...</p>
// // //             ) : (
// // //               <div className="space-y-4">
// // //                 {purchaseHistory.length > 0 ? (
// // //                   purchaseHistory.map((purchase, index) => (
// // //                     <div
// // //                       key={index}
// // //                       className="bg-white p-4 rounded-lg shadow-md"
// // //                     >
// // //                       <p className="text-gray-700">
// // //                         <span className="font-semibold">Total Amount:</span> $
// // //                         {purchase.total_amount}
// // //                       </p>
// // //                       <p className="text-gray-700">
// // //                         <span className="font-semibold">Date:</span>{" "}
// // //                         {purchase.date}
// // //                       </p>
// // //                       {/* Add more details here depending on the structure of the purchase */}
// // //                     </div>
// // //                   ))
// // //                 ) : (
// // //                   <p>No purchases found for this customer.</p>
// // //                 )}
// // //               </div>
// // //             )}
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ViewCustomers;


// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { useStore } from "./StoreContext";

// // const ViewCustomers = () => {
// //   const { storeId } = useStore();
// //   const [customers, setCustomers] = useState([]);
// //   const [error, setError] = useState("");
// //   const [purchaseHistory, setPurchaseHistory] = useState(null); // To store selected customer's purchase history
// //   const [loadingHistory, setLoadingHistory] = useState(false);

// //   useEffect(() => {
// //     if (storeId) {
// //       fetchCustomers();
// //     }
// //   }, [storeId]);

// //   const fetchCustomers = async () => {
// //     try {
// //       const response = await axios.get(
// //         `http://localhost:5008/api/customers?storeId=${storeId}`
// //       );
// //       setCustomers(response.data.customers);
// //       setError(""); // Reset any previous errors
// //     } catch (err) {
// //       console.error(err);
// //       setError("Failed to fetch customer information. Please try again later.");
// //     }
// //   };

// //   const fetchPurchaseHistory = async (customerId) => {
// //     setLoadingHistory(true);
// //     setPurchaseHistory(null); // Reset purchase history when fetching new data
// //     try {
// //       const response = await axios.get(
// //         `http://localhost:5008/api/customers/${customerId}/purchase-history?storeId=${storeId}`
// //       );
// //       if (response.data.purchase_history.length === 0) {
// //         setPurchaseHistory([]); // Set empty array to indicate no purchases
// //       } else {
// //         setPurchaseHistory(response.data.purchase_history);
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       setError("Failed to fetch purchase history. Please try again later.");
// //     }
// //     setLoadingHistory(false);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-7xl mx-auto">
// //         <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
// //           Customers of Store: {storeId}
// //         </h2>
// //         {error && (
// //           <p className="text-center text-red-500 font-semibold mb-6">{error}</p>
// //         )}

// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {customers.length > 0 ? (
// //             customers.map((customer, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
// //                 onClick={() => fetchPurchaseHistory(customer.phone)} // Assuming 'phone' is unique for customer identification
// //               >
// //                 <div className="p-6">
// //                   <h3 className="text-2xl font-bold text-blue-600 mb-4">
// //                     {customer.name}
// //                   </h3>
// //                   <p className="text-gray-700 mb-2">
// //                     <span className="font-semibold">Phone:</span> {customer.phone}
// //                   </p>
// //                   <p className="text-gray-700 mb-2">
// //                     <span className="font-semibold">Email:</span> {customer.email}
// //                   </p>
// //                   <p className="text-gray-700 mb-2">
// //                     <span className="font-semibold">Address:</span>{" "}
// //                     {customer.address || "N/A"}
// //                   </p>
// //                   <p className="text-gray-700 mb-2">
// //                     <span className="font-semibold">Birthday:</span>{" "}
// //                     {customer.birthday || "N/A"}
// //                   </p>
// //                   <p className="text-gray-700">
// //                     <span className="font-semibold">Loyalty Points:</span>{" "}
// //                     {customer.loyaltyPoints || 0}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))
// //           ) : (
// //             <p className="text-center text-gray-500 text-xl col-span-full">
// //               No customers found for this store.
// //             </p>
// //           )}
// //         </div>

// //         {purchaseHistory !== null && (
// //           <div className="mt-8">
// //             <h3 className="text-2xl font-semibold text-gray-900 mb-4">
// //               Purchase History
// //             </h3>
// //             {loadingHistory ? (
// //               <p className="text-center text-gray-500">Loading purchase history...</p>
// //             ) : purchaseHistory.length === 0 ? (
// //               <p className="text-center text-gray-500">No purchases found for this customer.</p>
// //             ) : (
// //               <div className="space-y-4">
// //                 {purchaseHistory.map((purchase, index) => (
// //                   <div
// //                     key={index}
// //                     className="bg-white p-4 rounded-lg shadow-md"
// //                   >
// //                     <p className="text-gray-700">
// //                       <span className="font-semibold">Total Amount:</span> $
// //                       {purchase.total_amount}
// //                     </p>
// //                     <p className="text-gray-700">
// //                       <span className="font-semibold">Date:</span>{" "}
// //                       {purchase.date}
// //                     </p>
// //                     {/* Add more details here depending on the structure of the purchase */}
// //                   </div>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ViewCustomers;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useStore } from "./StoreContext";

// const ViewCustomers = () => {
//   const { storeId } = useStore();
//   const [customers, setCustomers] = useState([]);
//   const [error, setError] = useState("");
//   const [purchaseHistory, setPurchaseHistory] = useState(null); // To store selected customer's purchase history
//   const [loadingHistory, setLoadingHistory] = useState(false);
//   const [selectedCustomer, setSelectedCustomer] = useState(null); // Store selected customer for modal
//   const [isModalOpen, setIsModalOpen] = useState(false); // To manage modal visibility

//   useEffect(() => {
//     if (storeId) {
//       fetchCustomers();
//     }
//   }, [storeId]);

//   const fetchCustomers = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:5008/api/customers?storeId=${storeId}`
//       );
//       setCustomers(response.data.customers);
//       setError(""); // Reset any previous errors
//     } catch (err) {
//       console.error(err);
//       setError("Failed to fetch customer information. Please try again later.");
//     }
//   };

//   const fetchPurchaseHistory = async (customerId) => {
//     setLoadingHistory(true);
//     setPurchaseHistory(null); // Reset purchase history when fetching new data
//     try {
//       const response = await axios.get(
//         `http://localhost:5008/api/customers/${customerId}/purchase-history?storeId=${storeId}`
//       );
//       if (response.data.purchase_history.length === 0) {
//         setPurchaseHistory([]); // Set empty array to indicate no purchases
//       } else {
//         setPurchaseHistory(response.data.purchase_history);
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Failed to fetch purchase history. Please try again later.");
//     }
//     setLoadingHistory(false);
//   };

//   const openModal = (customer) => {
//     setSelectedCustomer(customer);
//     fetchPurchaseHistory(customer.phone); // Fetch purchase history for the selected customer
//     setIsModalOpen(true); // Open modal
//   };

//   const closeModal = () => {
//     setIsModalOpen(false); // Close modal
//     setSelectedCustomer(null); // Clear selected customer
//     setPurchaseHistory(null); // Reset purchase history
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
//           Customers of Store: {storeId}
//         </h2>
//         {error && (
//           <p className="text-center text-red-500 font-semibold mb-6">{error}</p>
//         )}

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {customers.length > 0 ? (
//             customers.map((customer, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
//                 onClick={() => openModal(customer)} // Open modal with customer details
//               >
//                 <div className="p-6">
//                   <h3 className="text-2xl font-bold text-blue-600 mb-4">
//                     {customer.name}
//                   </h3>
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-semibold">Phone:</span> {customer.phone}
//                   </p>
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-semibold">Email:</span> {customer.email}
//                   </p>
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-semibold">Address:</span>{" "}
//                     {customer.address || "N/A"}
//                   </p>
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-semibold">Birthday:</span>{" "}
//                     {customer.birthday || "N/A"}
//                   </p>
//                   <p className="text-gray-700">
//                     <span className="font-semibold">Loyalty Points:</span>{" "}
//                     {customer.loyaltyPoints || 0}
//                   </p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500 text-xl col-span-full">
//               No customers found for this store.
//             </p>
//           )}
//         </div>

//         {/* Modal for displaying purchase history */}
//         {isModalOpen && selectedCustomer && (
//           <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
//             <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 p-6">
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-2xl font-semibold text-gray-900">
//                   Purchase History for {selectedCustomer.name}
//                 </h3>
//                 <button
//                   onClick={closeModal}
//                   className="text-gray-600 hover:text-gray-900"
//                 >
//                   <svg
//                     className="w-6 h-6"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     ></path>
//                   </svg>
//                 </button>
//               </div>
//               {loadingHistory ? (
//                 <p className="text-center text-gray-500">Loading purchase history...</p>
//               ) : purchaseHistory === null ? (
//                 <p className="text-center text-gray-500">No data available.</p>
//               ) : purchaseHistory.length === 0 ? (
//                 <p className="text-center text-gray-500">No purchases found for this customer.</p>
//               ) : (
//                 <div className="space-y-4">
//                   {purchaseHistory.map((purchase, index) => (
//                     <div
//                       key={index}
//                       className="bg-gray-100 p-4 rounded-lg shadow-md"
//                     >
//                       <p className="text-gray-700">
//                         <span className="font-semibold">Total Amount:</span> $
//                         {purchase.total_amount}
//                       </p>
//                       <p className="text-gray-700">
//                         <span className="font-semibold">Date:</span>{" "}
//                         {purchase.date}
//                       </p>
//                       {/* Add more details here depending on the structure of the purchase */}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ViewCustomers;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useStore } from "./StoreContext";
// import { motion, AnimatePresence } from "framer-motion";
// import { Search, User, Phone, Mail, MapPin, Gift, Crown, ShoppingBag, X, Calendar, ArrowRight } from "lucide-react";

// const ViewCustomers = () => {
//   const { storeId } = useStore();
//   const [customers, setCustomers] = useState([]);
//   const [error, setError] = useState("");
//   const [purchaseHistory, setPurchaseHistory] = useState(null);
//   const [loadingHistory, setLoadingHistory] = useState(false);
//   const [selectedCustomer, setSelectedCustomer] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (storeId) {
//       fetchCustomers();
//     }
//   }, [storeId]);

//   const fetchCustomers = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(
//         `http://localhost:5008/api/customers?storeId=${storeId}`
//       );
//       setCustomers(response.data.customers);
//       setError("");
//     } catch (err) {
//       setError("Failed to fetch customer information. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchPurchaseHistory = async (customerId) => {
//     setLoadingHistory(true);
//     setPurchaseHistory(null);
//     try {
//       const response = await axios.get(
//         `http://localhost:5008/api/customers/${customerId}/purchase-history?storeId=${storeId}`
//       );
//       setPurchaseHistory(response.data.purchase_history || []);
//     } catch (err) {
//       setError("Failed to fetch purchase history. Please try again later.");
//     }
//     setLoadingHistory(false);
//   };

//   const openModal = (customer) => {
//     setSelectedCustomer(customer);
//     fetchPurchaseHistory(customer.phone);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setTimeout(() => {
//       setSelectedCustomer(null);
//       setPurchaseHistory(null);
//     }, 300);
//   };

//   const filteredCustomers = customers.filter(customer =>
//     customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     customer.phone.includes(searchQuery) ||
//     (customer.email && customer.email.toLowerCase().includes(searchQuery.toLowerCase()))
//   );

//   const customerCardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-10 px-4 sm:px-6 lg:px-8"
//     >
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ y: -20 }}
//           animate={{ y: 0 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
//             Customer Management
//           </h2>
//           <p className="text-lg text-gray-600">Store ID: {storeId}</p>
//         </motion.div>

//         {/* Search Bar */}
//         <div className="mb-8 max-w-md mx-auto">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             <input
//               type="text"
//               placeholder="Search customers..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//             />
//           </div>
//         </div>

//         {error && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="bg-red-100 text-red-700 p-4 rounded-lg text-center mb-6"
//           >
//             {error}
//           </motion.div>
//         )}

//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
//           </div>
//         ) : (
//           <motion.div
//             layout
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//           >
//             <AnimatePresence>
//               {filteredCustomers.map((customer, index) => (
//                 <motion.div
//                   key={customer.phone}
//                   variants={customerCardVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="hidden"
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ scale: 1.02, translateY: -5 }}
//                   className="bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer"
//                   onClick={() => openModal(customer)}
//                 >
//                   <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
//                     <User className="w-12 h-12 text-white opacity-80 mb-2" />
//                     <h3 className="text-2xl font-bold text-white">{customer.name}</h3>
//                   </div>
//                   <div className="p-6 space-y-4">
//                     <div className="flex items-center gap-3 text-gray-600">
//                       <Phone size={18} />
//                       <span>{customer.phone}</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-gray-600">
//                       <Mail size={18} />
//                       <span>{customer.email || "N/A"}</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-gray-600">
//                       <MapPin size={18} />
//                       <span>{customer.address || "N/A"}</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-gray-600">
//                       <Gift size={18} />
//                       <span>{customer.birthday || "N/A"}</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-indigo-600 font-semibold">
//                       <Crown size={18} />
//                       <span>{customer.loyaltyPoints || 0} Points</span>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </motion.div>
//         )}

//         {/* Modal */}
//         <AnimatePresence>
//           {isModalOpen && selectedCustomer && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50 p-4"
//             >
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden"
//               >
//                 <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
//                   <div className="flex justify-between items-center">
//                     <h3 className="text-2xl font-bold text-white">
//                       {selectedCustomer.name}'s History
//                     </h3>
//                     <button
//                       onClick={closeModal}
//                       className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
//                     >
//                       <X size={24} />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="p-6 max-h-[70vh] overflow-y-auto">
//                   {loadingHistory ? (
//                     <div className="flex justify-center items-center h-32">
//                       <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
//                     </div>
//                   ) : purchaseHistory?.length === 0 ? (
//                     <div className="text-center py-8">
//                       <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//                       <p className="text-gray-500 text-lg">No purchase history found</p>
//                     </div>
//                   ) : (
//                     <div className="space-y-4">
//                       {purchaseHistory?.map((purchase, index) => (
//                         <motion.div
//                           key={index}
//                           initial={{ opacity: 0, x: -20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ delay: index * 0.1 }}
//                           className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
//                         >
//                           <div className="flex justify-between items-center mb-2">
//                             <div className="flex items-center gap-2">
//                               <Calendar size={18} className="text-gray-500" />
//                               <span className="text-gray-600">{purchase.date}</span>
//                             </div>
//                             <span className="text-lg font-bold text-green-600">
//                               ${purchase.total_amount}
//                             </span>
//                           </div>
//                           <div className="flex items-center gap-2 text-blue-600 hover:text-blue-700 cursor-pointer">
//                             <span className="text-sm">View Details</span>
//                             <ArrowRight size={16} />
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// export default ViewCustomers;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useStore } from "./StoreContext";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, Phone, Mail, MapPin, Gift, Crown, ShoppingBag, X, Calendar, ArrowRight, History } from "lucide-react";

const ViewCustomers = () => {
  const { storeId } = useStore();
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState("");
  const [purchaseHistory, setPurchaseHistory] = useState(null);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (storeId) {
      fetchCustomers();
    }
  }, [storeId]);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:5008/api/customers?storeId=${storeId}`
      );
      setCustomers(response.data.customers);
      setError("");
    } catch (err) {
      setError("Failed to fetch customer information. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const fetchPurchaseHistory = async (customerId) => {
    setLoadingHistory(true);
    setPurchaseHistory(null);
    try {
      const response = await axios.get(
        `http://localhost:5008/api/customers/${customerId}/purchase-history?storeId=${storeId}`
      );
      setPurchaseHistory(response.data.purchase_history || []);
    } catch (err) {
      setError("Failed to fetch purchase history. Please try again later.");
    }
    setLoadingHistory(false);
  };

  const openModal = (customer) => {
    setSelectedCustomer(customer);
    fetchPurchaseHistory(customer.phone);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedCustomer(null);
      setPurchaseHistory(null);
    }, 300);
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.phone.includes(searchQuery) ||
    (customer.email && customer.email.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const customerCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Customer Management
          </h2>
          <p className="text-lg text-gray-600">Store ID: {storeId}</p>
        </motion.div>

        {/* Search Bar */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search customers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-100 text-red-700 p-4 rounded-lg text-center mb-6"
          >
            {error}
          </motion.div>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredCustomers.map((customer, index) => (
                <motion.div
                  key={customer.phone}
                  variants={customerCardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, translateY: -5 }}
                  className="bg-white rounded-xl shadow-xl overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
                    <User className="w-12 h-12 text-white opacity-80 mb-2" />
                    <h3 className="text-2xl font-bold text-white">{customer.name}</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Phone size={18} />
                      <span>{customer.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Mail size={18} />
                      <span>{customer.email || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin size={18} />
                      <span>{customer.address || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Gift size={18} />
                      <span>{customer.birthday || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-3 text-indigo-600 font-semibold">
                      <Crown size={18} />
                      <span>{customer.loyaltyPoints || 0} Points</span>
                    </div>
                    <button
                      onClick={() => openModal(customer)}
                      className="w-full mt-4 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-200"
                    >
                      <History size={18} />
                      View Purchase History
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && selectedCustomer && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-white">
                      {selectedCustomer.name}'s History
                    </h3>
                    <button
                      onClick={closeModal}
                      className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>

                <div className="p-6 max-h-[70vh] overflow-y-auto">
                  {loadingHistory ? (
                    <div className="flex justify-center items-center h-32">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                  ) : purchaseHistory?.length === 0 ? (
                    <div className="text-center py-8">
                      <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 text-lg">No purchase history found</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {purchaseHistory?.map((purchase, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-2">
                              <Calendar size={18} className="text-gray-500" />
                              <span className="text-gray-600">{purchase.date}</span>
                            </div>
                            <span className="text-lg font-bold text-green-600">
                              ${purchase.total_amount}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-blue-600 hover:text-blue-700 cursor-pointer">
                            <span className="text-sm">View Details</span>
                            <ArrowRight size={16} />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ViewCustomers;