// // // import React, { useState } from "react";
// // // import { useStore } from "./StoreContext"; // Importing the context to get storeId

// // // const CustomerSignupForm = () => {
// // //   const { storeId } = useStore(); // Get storeId from context
// // //   const [customerInfo, setCustomerInfo] = useState({
// // //     name: "",
// // //     email: "",
// // //     phone: "",
// // //     address: "",
// // //     birthday: "",
// // //   });
// // //   const [message, setMessage] = useState("");

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setCustomerInfo((prevInfo) => ({
// // //       ...prevInfo,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     if (!storeId) {
// // //       setMessage("Store ID not found. Please log in.");
// // //       return;
// // //     }

// // //     // Basic validation for phone number (ensuring 10 digits)
// // //     const phonePattern = /^[0-9]{10}$/;
// // //     if (!phonePattern.test(customerInfo.phone)) {
// // //       setMessage("Invalid phone number. Please enter a valid 10-digit phone number.");
// // //       return;
// // //     }

// // //     // POST request to add customer
// // //     try {
// // //       const response = await fetch("http://localhost:5008/api/customers", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ ...customerInfo, storeId }), // Send storeId instead of storeName
// // //       });

// // //       if (response.ok) {
// // //         setMessage("Customer added successfully!");
// // //         setCustomerInfo({
// // //           name: "",
// // //           email: "",
// // //           phone: "",
// // //           address: "",
// // //           birthday: "",
// // //         });
// // //       } else {
// // //         const errorData = await response.json();
// // //         setMessage(`Error: ${errorData.error || "Unknown error"}`);
// // //       }
// // //     } catch (error) {
// // //       setMessage("Failed to save customer information. Please try again later.");
// // //     }
// // //   };

// // //   return (
// // //     <div className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md mt-10">
// // //       <h2 className="text-2xl font-bold text-center mb-6">Customer Signup</h2>
// // //       {message && (
// // //         <p className={`text-center font-bold ${message.includes("Error") ? "text-red-500" : "text-green-500"}`}>
// // //           {message}
// // //         </p>
// // //       )}
// // //       <form onSubmit={handleSubmit} className="space-y-4">
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700">Name:</label>
// // //           <input
// // //             type="text"
// // //             name="name"
// // //             value={customerInfo.name}
// // //             onChange={handleChange}
// // //             required
// // //             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //           />
// // //         </div>
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700">Email:</label>
// // //           <input
// // //             type="email"
// // //             name="email"
// // //             value={customerInfo.email}
// // //             onChange={handleChange}
// // //             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //           />
// // //         </div>
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700">Phone:</label>
// // //           <input
// // //             type="tel"
// // //             name="phone"
// // //             value={customerInfo.phone}
// // //             onChange={handleChange}
// // //             required
// // //             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //           />
// // //         </div>
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700">Address:</label>
// // //           <input
// // //             type="text"
// // //             name="address"
// // //             value={customerInfo.address}
// // //             onChange={handleChange}
// // //             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //           />
// // //         </div>
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700">Birthday:</label>
// // //           <input
// // //             type="date"
// // //             name="birthday"
// // //             value={customerInfo.birthday}
// // //             onChange={handleChange}
// // //             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //           />
// // //         </div>
// // //         <button
// // //           type="submit"
// // //           className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //         >
// // //           Submit
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default CustomerSignupForm;

// // // import React, { useState, useEffect } from "react";
// // // import { useStore } from "./StoreContext"; // Importing the context to get storeId

// // // const CustomerManagement = () => {
// // //   const { storeId } = useStore(); // Get storeId from context
// // //   const [customerInfo, setCustomerInfo] = useState({
// // //     name: "",
// // //     email: "",
// // //     phone: "",
// // //     address: "",
// // //     birthday: "",
// // //   });
// // //   const [customers, setCustomers] = useState([]);
// // //   const [message, setMessage] = useState("");
// // //   const [editingCustomer, setEditingCustomer] = useState(null); // Store customer to be edited

// // //   useEffect(() => {
// // //     if (storeId) {
// // //       fetchCustomers();
// // //     }
// // //   }, [storeId]);

// // //   const fetchCustomers = async () => {
// // //     try {
// // //       const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}`);
// // //       const data = await response.json();
// // //       if (data.customers) {
// // //         setCustomers(data.customers);
// // //       } else {
// // //         setMessage("Failed to fetch customers.");
// // //       }
// // //     } catch (error) {
// // //       setMessage("Failed to fetch customers.");
// // //     }
// // //   };

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setCustomerInfo((prevInfo) => ({
// // //       ...prevInfo,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     if (!storeId) {
// // //       setMessage("Store ID not found. Please log in.");
// // //       return;
// // //     }

// // //     // Basic validation for phone number (ensuring 10 digits)
// // //     const phonePattern = /^[0-9]{10}$/;
// // //     if (!phonePattern.test(customerInfo.phone)) {
// // //       setMessage("Invalid phone number. Please enter a valid 10-digit phone number.");
// // //       return;
// // //     }

// // //     try {
// // //       const method = editingCustomer ? "PUT" : "POST";
// // //       const url = editingCustomer
// // //         ? `http://localhost:5008/api/customers/${editingCustomer.phone}`
// // //         : "http://localhost:5008/api/customers";

// // //       const response = await fetch(url, {
// // //         method,
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ ...customerInfo, storeId }),
// // //       });

// // //       if (response.ok) {
// // //         setMessage("Customer details updated successfully!");
// // //         setCustomerInfo({
// // //           name: "",
// // //           email: "",
// // //           phone: "",
// // //           address: "",
// // //           birthday: "",
// // //         });
// // //         setEditingCustomer(null);
// // //         fetchCustomers(); // Refresh customers list
// // //       } else {
// // //         const errorData = await response.json();
// // //         setMessage(`Error: ${errorData.error || "Unknown error"}`);
// // //       }
// // //     } catch (error) {
// // //       setMessage("Failed to save customer information. Please try again later.");
// // //     }
// // //   };

// // //   const handleEdit = (customer) => {
// // //     setEditingCustomer(customer);
// // //     setCustomerInfo({
// // //       name: customer.name,
// // //       email: customer.email,
// // //       phone: customer.phone,
// // //       address: customer.address,
// // //       birthday: customer.birthday,
// // //     });
// // //   };

// // //   const handleDelete = async (phone) => {
// // //     if (window.confirm("Are you sure you want to delete this customer?")) {
// // //       try {
// // //         const response = await fetch(`http://localhost:5008/api/customers/${phone}`, {
// // //           method: "DELETE",
// // //         });

// // //         if (response.ok) {
// // //           setMessage("Customer deleted successfully!");
// // //           fetchCustomers(); // Refresh customers list
// // //         } else {
// // //           const errorData = await response.json();
// // //           setMessage(`Error: ${errorData.error || "Unknown error"}`);
// // //         }
// // //       } catch (error) {
// // //         setMessage("Failed to delete customer. Please try again later.");
// // //       }
// // //     }
// // //   };

// // //   return (
// // //     <div className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md mt-10">
// // //       <h2 className="text-2xl font-bold text-center mb-6">Customer Management</h2>
// // //       {message && (
// // //         <p className={`text-center font-bold ${message.includes("Error") ? "text-red-500" : "text-green-500"}`}>
// // //           {message}
// // //         </p>
// // //       )}

// // //       {/* Customer form (used for add and edit) */}
// // //       <form onSubmit={handleSubmit} className="space-y-4">
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700">Name:</label>
// // //           <input
// // //             type="text"
// // //             name="name"
// // //             value={customerInfo.name}
// // //             onChange={handleChange}
// // //             required
// // //             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //           />
// // //         </div>
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700">Email:</label>
// // //           <input
// // //             type="email"
// // //             name="email"
// // //             value={customerInfo.email}
// // //             onChange={handleChange}
// // //             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //           />
// // //         </div>
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700">Phone:</label>
// // //           <input
// // //             type="tel"
// // //             name="phone"
// // //             value={customerInfo.phone}
// // //             onChange={handleChange}
// // //             required
// // //             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //           />
// // //         </div>
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700">Address:</label>
// // //           <input
// // //             type="text"
// // //             name="address"
// // //             value={customerInfo.address}
// // //             onChange={handleChange}
// // //             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //           />
// // //         </div>
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700">Birthday:</label>
// // //           <input
// // //             type="date"
// // //             name="birthday"
// // //             value={customerInfo.birthday}
// // //             onChange={handleChange}
// // //             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //           />
// // //         </div>
// // //         <button
// // //           type="submit"
// // //           className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //         >
// // //           {editingCustomer ? "Update Customer" : "Add Customer"}
// // //         </button>
// // //       </form>

// // //       {/* Customer list with edit and delete buttons */}
// // //       <div className="mt-6">
// // //         <h3 className="text-xl font-semibold mb-4">Customer List</h3>
// // //         {customers.length > 0 ? (
// // //           customers.map((customer, index) => (
// // //             <div key={index} className="flex justify-between items-center p-3 bg-gray-100 rounded-md shadow-sm mb-2">
// // //               <div>
// // //                 <p className="font-semibold">{customer.name}</p>
// // //                 <p>{customer.phone}</p>
// // //               </div>
// // //               <div>
// // //                 <button
// // //                   onClick={() => handleEdit(customer)}
// // //                   className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
// // //                 >
// // //                   Edit
// // //                 </button>
// // //                 <button
// // //                   onClick={() => handleDelete(customer.phone)}
// // //                   className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 ml-2"
// // //                 >
// // //                   Delete
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           ))
// // //         ) : (
// // //           <p>No customers found.</p>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CustomerManagement;
// // // import React, { useState, useEffect } from "react";
// // // import { useStore } from "./StoreContext";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { User, Mail, Phone, MapPin, Gift, Calendar, Plus, X, Edit2, Trash2, Check, AlertCircle } from "lucide-react";

// // // const CustomerManagement = () => {
// // //   const { storeId } = useStore();
// // //   const [customerInfo, setCustomerInfo] = useState({
// // //     name: "",
// // //     email: "",
// // //     phone: "",
// // //     address: "",
// // //     birthday: "",
// // //   });
// // //   const [customers, setCustomers] = useState([]);
// // //   const [message, setMessage] = useState("");
// // //   const [editingCustomer, setEditingCustomer] = useState(null);
// // //   const [isFormVisible, setIsFormVisible] = useState(false);

// // //   useEffect(() => {
// // //     if (storeId) {
// // //       fetchCustomers();
// // //     }
// // //   }, [storeId]);

// // //   const fetchCustomers = async () => {
// // //     try {
// // //       const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}`);
// // //       const data = await response.json();
// // //       if (data.customers) {
// // //         setCustomers(data.customers);
// // //       } else {
// // //         showMessage("Failed to fetch customers.", "error");
// // //       }
// // //     } catch (error) {
// // //       showMessage("Failed to fetch customers.", "error");
// // //     }
// // //   };

// // //   const showMessage = (text, type = "success") => {
// // //     setMessage({ text, type });
// // //     setTimeout(() => setMessage(""), 5000);
// // //   };

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setCustomerInfo((prevInfo) => ({
// // //       ...prevInfo,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     if (!storeId) {
// // //       showMessage("Store ID not found. Please log in.", "error");
// // //       return;
// // //     }

// // //     const phonePattern = /^[0-9]{10}$/;
// // //     if (!phonePattern.test(customerInfo.phone)) {
// // //       showMessage("Invalid phone number. Please enter a valid 10-digit phone number.", "error");
// // //       return;
// // //     }

// // //     try {
// // //       const method = editingCustomer ? "PUT" : "POST";
// // //       const url = editingCustomer
// // //         ? `http://localhost:5008/api/customers/${editingCustomer.phone}`
// // //         : "http://localhost:5008/api/customers";

// // //       const response = await fetch(url, {
// // //         method,
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ ...customerInfo, storeId }),
// // //       });

// // //       if (response.ok) {
// // //         showMessage(`Customer ${editingCustomer ? "updated" : "added"} successfully!`);
// // //         setCustomerInfo({
// // //           name: "",
// // //           email: "",
// // //           phone: "",
// // //           address: "",
// // //           birthday: "",
// // //         });
// // //         setEditingCustomer(null);
// // //         setIsFormVisible(false);
// // //         fetchCustomers();
// // //       } else {
// // //         const errorData = await response.json();
// // //         showMessage(`Error: ${errorData.error || "Unknown error"}`, "error");
// // //       }
// // //     } catch (error) {
// // //       showMessage("Failed to save customer information.", "error");
// // //     }
// // //   };

// // //   const handleEdit = (customer) => {
// // //     setEditingCustomer(customer);
// // //     setCustomerInfo({
// // //       name: customer.name,
// // //       email: customer.email,
// // //       phone: customer.phone,
// // //       address: customer.address,
// // //       birthday: customer.birthday,
// // //     });
// // //     setIsFormVisible(true);
// // //   };

// // //   const handleDelete = async (phone) => {
// // //     if (window.confirm("Are you sure you want to delete this customer?")) {
// // //       try {
// // //         const response = await fetch(`http://localhost:5008/api/customers/${phone}`, {
// // //           method: "DELETE",
// // //         });

// // //         if (response.ok) {
// // //           showMessage("Customer deleted successfully!");
// // //           fetchCustomers();
// // //         } else {
// // //           const errorData = await response.json();
// // //           showMessage(`Error: ${errorData.error || "Unknown error"}`, "error");
// // //         }
// // //       } catch (error) {
// // //         showMessage("Failed to delete customer.", "error");
// // //       }
// // //     }
// // //   };

// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0 }}
// // //       animate={{ opacity: 1 }}
// // //       className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-10 px-4 sm:px-6 lg:px-8"
// // //     >
// // //       <div className="max-w-6xl mx-auto">
// // //         <motion.div
// // //           initial={{ y: -20 }}
// // //           animate={{ y: 0 }}
// // //           className="text-center mb-12"
// // //         >
// // //           <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
// // //             Customer Management
// // //           </h1>
// // //           <p className="text-lg text-gray-600">Store ID: {storeId}</p>
// // //         </motion.div>

// // //         <AnimatePresence>
// // //           {message && (
// // //             <motion.div
// // //               initial={{ opacity: 0, y: -20 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               exit={{ opacity: 0, y: -20 }}
// // //               className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg flex items-center gap-2 ${
// // //                 message.type === "error" ? "bg-red-500" : "bg-green-500"
// // //               } text-white`}
// // //             >
// // //               {message.type === "error" ? <AlertCircle size={20} /> : <Check size={20} />}
// // //               <span>{message.text}</span>
// // //             </motion.div>
// // //           )}
// // //         </AnimatePresence>

// // //         <div className="mb-8 flex justify-end">
// // //           <motion.button
// // //             whileHover={{ scale: 1.05 }}
// // //             whileTap={{ scale: 0.95 }}
// // //             onClick={() => setIsFormVisible(!isFormVisible)}
// // //             className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 hover:bg-blue-600 transition-colors"
// // //           >
// // //             {isFormVisible ? <X size={20} /> : <Plus size={20} />}
// // //             {isFormVisible ? "Close Form" : "Add Customer"}
// // //           </motion.button>
// // //         </div>

// // //         <AnimatePresence>
// // //           {isFormVisible && (
// // //             <motion.div
// // //               initial={{ opacity: 0, height: 0 }}
// // //               animate={{ opacity: 1, height: "auto" }}
// // //               exit={{ opacity: 0, height: 0 }}
// // //               className="bg-white rounded-xl shadow-xl p-6 mb-8"
// // //             >
// // //               <h2 className="text-2xl font-bold mb-6">
// // //                 {editingCustomer ? "Edit Customer" : "Add New Customer"}
// // //               </h2>
// // //               <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                     <User size={16} className="inline mr-2" />
// // //                     Name
// // //                   </label>
// // //                   <input
// // //                     type="text"
// // //                     name="name"
// // //                     value={customerInfo.name}
// // //                     onChange={handleChange}
// // //                     required
// // //                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
// // //                   />
// // //                 </div>
// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                     <Mail size={16} className="inline mr-2" />
// // //                     Email
// // //                   </label>
// // //                   <input
// // //                     type="email"
// // //                     name="email"
// // //                     value={customerInfo.email}
// // //                     onChange={handleChange}
// // //                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
// // //                   />
// // //                 </div>
// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                     <Phone size={16} className="inline mr-2" />
// // //                     Phone
// // //                   </label>
// // //                   <input
// // //                     type="tel"
// // //                     name="phone"
// // //                     value={customerInfo.phone}
// // //                     onChange={handleChange}
// // //                     required
// // //                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
// // //                   />
// // //                 </div>
// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                     <MapPin size={16} className="inline mr-2" />
// // //                     Address
// // //                   </label>
// // //                   <input
// // //                     type="text"
// // //                     name="address"
// // //                     value={customerInfo.address}
// // //                     onChange={handleChange}
// // //                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
// // //                   />
// // //                 </div>
// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                     <Gift size={16} className="inline mr-2" />
// // //                     Birthday
// // //                   </label>
// // //                   <input
// // //                     type="date"
// // //                     name="birthday"
// // //                     value={customerInfo.birthday}
// // //                     onChange={handleChange}
// // //                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
// // //                   />
// // //                 </div>
// // //                 <div className="md:col-span-2">
// // //                   <motion.button
// // //                     whileHover={{ scale: 1.02 }}
// // //                     whileTap={{ scale: 0.98 }}
// // //                     type="submit"
// // //                     className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
// // //                   >
// // //                     {editingCustomer ? "Update Customer" : "Add Customer"}
// // //                   </motion.button>
// // //                 </div>
// // //               </form>
// // //             </motion.div>
// // //           )}
// // //         </AnimatePresence>

// // //         <div className="bg-white rounded-xl shadow-xl p-6">
// // //           <h2 className="text-2xl font-bold mb-6">Customer List</h2>
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //             <AnimatePresence>
// // //               {customers.length > 0 ? (
// // //                 customers.map((customer, index) => (
// // //                   <motion.div
// // //                     key={customer.phone}
// // //                     initial={{ opacity: 0, y: 20 }}
// // //                     animate={{ opacity: 1, y: 0 }}
// // //                     exit={{ opacity: 0, y: -20 }}
// // //                     transition={{ delay: index * 0.1 }}
// // //                     className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
// // //                   >
// // //                     <div className="flex justify-between items-start mb-4">
// // //                       <h3 className="text-xl font-semibold">{customer.name}</h3>
// // //                       <div className="flex gap-2">
// // //                         <motion.button
// // //                           whileHover={{ scale: 1.1 }}
// // //                           whileTap={{ scale: 0.9 }}
// // //                           onClick={() => handleEdit(customer)}
// // //                           className="p-2 text-yellow-500 hover:text-yellow-600"
// // //                         >
// // //                           <Edit2 size={20} />
// // //                         </motion.button>
// // //                         <motion.button
// // //                           whileHover={{ scale: 1.1 }}
// // //                           whileTap={{ scale: 0.9 }}
// // //                           onClick={() => handleDelete(customer.phone)}
// // //                           className="p-2 text-red-500 hover:text-red-600"
// // //                         >
// // //                           <Trash2 size={20} />
// // //                         </motion.button>
// // //                       </div>
// // //                     </div>
// // //                     <div className="space-y-2 text-gray-600">
// // //                       <p className="flex items-center gap-2">
// // //                         <Phone size={16} />
// // //                         {customer.phone}
// // //                       </p>
// // //                       <p className="flex items-center gap-2">
// // //                         <Mail size={16} />
// // //                         {customer.email || "N/A"}
// // //                       </p>
// // //                       <p className="flex items-center gap-2">
// // //                         <MapPin size={16} />
// // //                         {customer.address || "N/A"}
// // //                       </p>
// // //                       <p className="flex items-center gap-2">
// // //                         <Calendar size={16} />
// // //                         {customer.birthday || "N/A"}
// // //                       </p>
// // //                     </div>
// // //                   </motion.div>
// // //                 ))
// // //               ) : (
// // //                 <motion.div
// // //                   initial={{ opacity: 0 }}
// // //                   animate={{ opacity: 1 }}
// // //                   className="md:col-span-2 lg:col-span-3 text-center py-12 text-gray-500"
// // //                 >
// // //                   No customers found.
// // //                 </motion.div>
// // //               )}
// // //             </AnimatePresence>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </motion.div>
// // //   );
// // // };

// // // export default CustomerManagement;
// // import React, { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { User, Mail, Phone, MapPin, Gift, Plus, X, Edit2, Trash2, Check, AlertCircle } from "lucide-react";

// // const CustomerManagement = () => {
// //   const storeId = "store123"; // Hardcoded for demo; replace with your store context
// //   const [customerInfo, setCustomerInfo] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     address: "",
// //     birthday: "",
// //   });
// //   const [customers, setCustomers] = useState([]);
// //   const [message, setMessage] = useState({ text: "", type: "success" });
// //   const [editingCustomer, setEditingCustomer] = useState(null);
// //   const [isFormVisible, setIsFormVisible] = useState(false);

// //   useEffect(() => {
// //     if (storeId) {
// //       fetchCustomers();
// //     }
// //   }, [storeId]);

// //   const fetchCustomers = async () => {
// //     try {
// //       const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}`);
// //       const data = await response.json();
// //       if (response.ok && data.customers) {
// //         setCustomers(data.customers);
// //       } else {
// //         showMessage("Failed to fetch customers.", "error");
// //       }
// //     } catch (error) {
// //       showMessage("Network error fetching customers.", "error");
// //     }
// //   };

// //   const showMessage = (text, type = "success") => {
// //     setMessage({ text, type });
// //     setTimeout(() => setMessage({ text: "", type: "success" }), 5000);
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setCustomerInfo((prevInfo) => ({
// //       ...prevInfo,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!storeId) {
// //       showMessage("Store ID not found.", "error");
// //       return;
// //     }

// //     const phonePattern = /^[0-9]{10}$/;
// //     if (!phonePattern.test(customerInfo.phone)) {
// //       showMessage("Please enter a valid 10-digit phone number.", "error");
// //       return;
// //     }

// //     try {
// //       const method = editingCustomer ? "PUT" : "POST";
// //       const url = editingCustomer
// //         ? `http://localhost:5008/api/customers/${editingCustomer.phone}?storeId=${storeId}`
// //         : `http://localhost:5008/api/customers`;

// //       const response = await fetch(url, {
// //         method,
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ ...customerInfo, storeId }),
// //       });

// //       const data = await response.json();
// //       if (response.ok) {
// //         showMessage(`Customer ${editingCustomer ? "updated" : "added"} successfully!`);
// //         setCustomerInfo({ name: "", email: "", phone: "", address: "", birthday: "" });
// //         setEditingCustomer(null);
// //         setIsFormVisible(false);
// //         fetchCustomers();
// //       } else {
// //         showMessage(data.error || "Unknown error occurred", "error");
// //       }
// //     } catch (error) {
// //       showMessage("Network error saving customer.", "error");
// //     }
// //   };

// //   const handleEdit = (customer) => {
// //     setEditingCustomer(customer);
// //     setCustomerInfo({
// //       name: customer.name,
// //       email: customer.email || "",
// //       phone: customer.phone,
// //       address: customer.address || "",
// //       birthday: customer.birthday || "",
// //     });
// //     setIsFormVisible(true);
// //   };

// //   const handleDelete = async (phone) => {
// //     if (window.confirm("Are you sure you want to delete this customer?")) {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:5008/api/customers/${phone}?storeId=${storeId}`,
// //           { method: "DELETE" }
// //         );
// //         const data = await response.json();
// //         if (response.ok) {
// //           showMessage("Customer deleted successfully!");
// //           fetchCustomers();
// //         } else {
// //           showMessage(data.error || "Failed to delete customer", "error");
// //         }
// //       } catch (error) {
// //         showMessage("Network error deleting customer.", "error");
// //       }
// //     }
// //   };

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-10 px-4 sm:px-6 lg:px-8"
// //     >
// //       <div className="max-w-6xl mx-auto">
// //         <motion.div
// //           initial={{ y: -20 }}
// //           animate={{ y: 0 }}
// //           className="text-center mb-12"
// //         >
// //           <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
// //             Customer Management
// //           </h1>
// //           <p className="text-lg text-gray-600">Store ID: {storeId}</p>
// //         </motion.div>

// //         <AnimatePresence>
// //           {message.text && (
// //             <motion.div
// //               initial={{ opacity: 0, y: -20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: -20 }}
// //               className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg flex items-center gap-2 ${
// //                 message.type === "error" ? "bg-red-500" : "bg-green-500"
// //               } text-white`}
// //             >
// //               {message.type === "error" ? <AlertCircle size={20} /> : <Check size={20} />}
// //               <span>{message.text}</span>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>

// //         <div className="mb-8 flex justify-end">
// //           <motion.button
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             onClick={() => {
// //               setIsFormVisible(!isFormVisible);
// //               if (isFormVisible) {
// //                 setEditingCustomer(null);
// //                 setCustomerInfo({ name: "", email: "", phone: "", address: "", birthday: "" });
// //               }
// //             }}
// //             className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 hover:bg-blue-600 transition-colors"
// //           >
// //             {isFormVisible ? <X size={20} /> : <Plus size={20} />}
// //             {isFormVisible ? "Close Form" : "Add Customer"}
// //           </motion.button>
// //         </div>

// //         <AnimatePresence>
// //           {isFormVisible && (
// //             <motion.div
// //               initial={{ opacity: 0, height: 0 }}
// //               animate={{ opacity: 1, height: "auto" }}
// //               exit={{ opacity: 0, height: 0 }}
// //               className="bg-white rounded-xl shadow-xl p-6 mb-8"
// //             >
// //               <h2 className="text-2xl font-bold mb-6">
// //                 {editingCustomer ? "Edit Customer" : "Add New Customer"}
// //               </h2>
// //               <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// //                     <User size={16} className="inline mr-2" />
// //                     Name *
// //                   </label>
// //                   <input
// //                     type="text"
// //                     name="name"
// //                     value={customerInfo.name}
// //                     onChange={handleChange}
// //                     required
// //                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// //                     <Mail size={16} className="inline mr-2" />
// //                     Email
// //                   </label>
// //                   <input
// //                     type="email"
// //                     name="email"
// //                     value={customerInfo.email}
// //                     onChange={handleChange}
// //                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// //                     <Phone size={16} className="inline mr-2" />
// //                     Phone *
// //                   </label>
// //                   <input
// //                     type="tel"
// //                     name="phone"
// //                     value={customerInfo.phone}
// //                     onChange={handleChange}
// //                     required
// //                     pattern="[0-9]{10}"
// //                     placeholder="1234567890"
// //                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// //                     <MapPin size={16} className="inline mr-2" />
// //                     Address
// //                   </label>
// //                   <input
// //                     type="text"
// //                     name="address"
// //                     value={customerInfo.address}
// //                     onChange={handleChange}
// //                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// //                     <Gift size={16} className="inline mr-2" />
// //                     Birthday
// //                   </label>
// //                   <input
// //                     type="date"
// //                     name="birthday"
// //                     value={customerInfo.birthday}
// //                     onChange={handleChange}
// //                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                   />
// //                 </div>
// //                 <div className="md:col-span-2 flex gap-4">
// //                   <motion.button
// //                     whileHover={{ scale: 1.02 }}
// //                     whileTap={{ scale: 0.98 }}
// //                     type="submit"
// //                     className="flex-1 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
// //                   >
// //                     {editingCustomer ? "Update Customer" : "Add Customer"}
// //                   </motion.button>
// //                   {editingCustomer && (
// //                     <motion.button
// //                       whileHover={{ scale: 1.02 }}
// //                       whileTap={{ scale: 0.98 }}
// //                       type="button"
// //                       onClick={() => {
// //                         setEditingCustomer(null);
// //                         setCustomerInfo({ name: "", email: "", phone: "", address: "", birthday: "" });
// //                         setIsFormVisible(false);
// //                       }}
// //                       className="flex-1 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition-colors"
// //                     >
// //                       Cancel
// //                     </motion.button>
// //                   )}
// //                 </div>
// //               </form>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>

// //         <div className="bg-white rounded-xl shadow-xl p-6">
// //           <h2 className="text-2xl font-bold mb-6">Customer List</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             <AnimatePresence>
// //               {customers.length > 0 ? (
// //                 customers.map((customer, index) => (
// //                   <motion.div
// //                     key={customer.phone}
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     exit={{ opacity: 0, y: -20 }}
// //                     transition={{ delay: index * 0.1 }}
// //                     className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
// //                   >
// //                     <div className="flex justify-between items-start mb-4">
// //                       <h3 className="text-xl font-semibold">{customer.name}</h3>
// //                       <div className="flex gap-2">
// //                         <motion.button
// //                           whileHover={{ scale: 1.1 }}
// //                           whileTap={{ scale: 0.9 }}
// //                           onClick={() => handleEdit(customer)}
// //                           className="p-2 text-yellow-500 hover:text-yellow-600"
// //                         >
// //                           <Edit2 size={20} />
// //                         </motion.button>
// //                         <motion.button
// //                           whileHover={{ scale: 1.1 }}
// //                           whileTap={{ scale: 0.9 }}
// //                           onClick={() => handleDelete(customer.phone)}
// //                           className="p-2 text-red-500 hover:text-red-600"
// //                         >
// //                           <Trash2 size={20} />
// //                         </motion.button>
// //                       </div>
// //                     </div>
// //                     <div className="space-y-2 text-gray-600">
// //                       <p className="flex items-center gap-2">
// //                         <Phone size={16} />
// //                         {customer.phone}
// //                       </p>
// //                       <p className="flex items-center gap-2">
// //                         <Mail size={16} />
// //                         {customer.email || "Not provided"}
// //                       </p>
// //                       <p className="flex items-center gap-2">
// //                         <MapPin size={16} />
// //                         {customer.address || "Not provided"}
// //                       </p>
// //                       <p className="flex items-center gap-2">
// //                         <Gift size={16} />
// //                         {customer.birthday || "Not provided"}
// //                       </p>
// //                       <p className="flex items-center gap-2">
// //                         <User size={16} />
// //                         Loyalty Points: {customer.loyaltyPoints}
// //                       </p>
// //                     </div>
// //                   </motion.div>
// //                 ))
// //               ) : (
// //                 <motion.div
// //                   initial={{ opacity: 0 }}
// //                   animate={{ opacity: 1 }}
// //                   className="md:col-span-2 lg:col-span-3 text-center py-12 text-gray-500"
// //                 >
// //                   No customers found. Add a customer to get started!
// //                 </motion.div>
// //               )}
// //             </AnimatePresence>
// //           </div>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // export default CustomerManagement;
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { User, Mail, Phone, MapPin, Gift, Plus, X, Edit2, Trash2, Check, AlertCircle } from "lucide-react";

// const CustomerManagement = () => {
//   const storeId = "STORE-1737889146-4514"; // Matches your logs; adjust if needed
//   const [customerInfo, setCustomerInfo] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     birthday: "",
//   });
//   const [customers, setCustomers] = useState([]);
//   const [message, setMessage] = useState({ text: "", type: "success" });
//   const [editingCustomer, setEditingCustomer] = useState(null);
//   const [isFormVisible, setIsFormVisible] = useState(false);

//   useEffect(() => {
//     fetchCustomers();
//   }, []);

//   const fetchCustomers = async () => {
//     try {
//       const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}`);
//       const data = await response.json();
//       if (response.ok && data.customers) {
//         setCustomers(data.customers);
//         if (data.customers.length === 0) {
//           showMessage("No customers found yet.", "info");
//         }
//       } else {
//         showMessage(data.error || "Failed to fetch customers", "error");
//       }
//     } catch (error) {
//       showMessage("Network error: Could not connect to server", "error");
//     }
//   };

//   const showMessage = (text, type = "success") => {
//     setMessage({ text, type });
//     setTimeout(() => setMessage({ text: "", type: "success" }), 5000);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCustomerInfo((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const phonePattern = /^[0-9]{10}$/;
//     if (!phonePattern.test(customerInfo.phone)) {
//       showMessage("Phone must be a 10-digit number", "error");
//       return;
//     }

//     const url = editingCustomer
//       ? `http://localhost:5008/api/customers/${editingCustomer.phone}`
//       : `http://localhost:5008/api/customers`;
//     const method = editingCustomer ? "PUT" : "POST";

//     try {
//       const response = await fetch(url, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...customerInfo, storeId }),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         showMessage(`Customer ${editingCustomer ? "updated" : "added"} successfully`);
//         setCustomerInfo({ name: "", email: "", phone: "", address: "", birthday: "" });
//         setEditingCustomer(null);
//         setIsFormVisible(false);
//         fetchCustomers();
//       } else {
//         showMessage(data.error || "Operation failed", "error");
//       }
//     } catch (error) {
//       showMessage("Network error: Could not connect to server", "error");
//     }
//   };

//   const handleEdit = (customer) => {
//     setEditingCustomer(customer);
//     setCustomerInfo({
//       name: customer.name,
//       email: customer.email || "",
//       phone: customer.phone,
//       address: customer.address || "",
//       birthday: customer.birthday || "",
//     });
//     setIsFormVisible(true);
//   };

//   const handleDelete = async (phone) => {
//     if (!window.confirm("Are you sure you want to delete this customer?")) return;

//     try {
//       const response = await fetch(
//         `http://localhost:5008/api/customers/${phone}?storeId=${storeId}`,
//         { method: "DELETE" }
//       );
//       const data = await response.json();

//       if (response.ok) {
//         showMessage("Customer deleted successfully");
//         fetchCustomers();
//       } else {
//         showMessage(data.error || "Failed to delete customer", "error");
//       }
//     } catch (error) {
//       showMessage("Network error: Could not connect to server", "error");
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-10 px-4 sm:px-6 lg:px-8"
//     >
//       <div className="max-w-6xl mx-auto">
//         <motion.div initial={{ y: -20 }} animate={{ y: 0 }} className="text-center mb-12">
//           <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Customer Management</h1>
//           <p className="text-lg text-gray-600">Store ID: {storeId}</p>
//         </motion.div>

//         <AnimatePresence>
//           {message.text && (
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg flex items-center gap-2 ${
//                 message.type === "error" ? "bg-red-500" : message.type === "info" ? "bg-blue-500" : "bg-green-500"
//               } text-white`}
//             >
//               {message.type === "error" ? <AlertCircle size={20} /> : <Check size={20} />}
//               <span>{message.text}</span>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         <div className="mb-8 flex justify-end">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => {
//               setIsFormVisible(!isFormVisible);
//               if (isFormVisible) {
//                 setEditingCustomer(null);
//                 setCustomerInfo({ name: "", email: "", phone: "", address: "", birthday: "" });
//               }
//             }}
//             className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 hover:bg-blue-600 transition-colors"
//           >
//             {isFormVisible ? <X size={20} /> : <Plus size={20} />}
//             {isFormVisible ? "Close Form" : "Add Customer"}
//           </motion.button>
//         </div>

//         <AnimatePresence>
//           {isFormVisible && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               className="bg-white rounded-xl shadow-xl p-6 mb-8"
//             >
//               <h2 className="text-2xl font-bold mb-6">
//                 {editingCustomer ? "Edit Customer" : "Add New Customer"}
//               </h2>
//               <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     <User size={16} className="inline mr-2" />
//                     Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={customerInfo.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     <Mail size={16} className="inline mr-2" />
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={customerInfo.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     <Phone size={16} className="inline mr-2" />
//                     Phone *
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={customerInfo.phone}
//                     onChange={handleChange}
//                     required
//                     pattern="[0-9]{10}"
//                     placeholder="1234567890"
//                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     <MapPin size={16} className="inline mr-2" />
//                     Address
//                   </label>
//                   <input
//                     type="text"
//                     name="address"
//                     value={customerInfo.address}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     <Gift size={16} className="inline mr-2" />
//                     Birthday
//                   </label>
//                   <input
//                     type="date"
//                     name="birthday"
//                     value={customerInfo.birthday}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
//                 <div className="md:col-span-2 flex gap-4">
//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     type="submit"
//                     className="flex-1 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
//                   >
//                     {editingCustomer ? "Update Customer" : "Add Customer"}
//                   </motion.button>
//                   {editingCustomer && (
//                     <motion.button
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       type="button"
//                       onClick={() => {
//                         setEditingCustomer(null);
//                         setCustomerInfo({ name: "", email: "", phone: "", address: "", birthday: "" });
//                         setIsFormVisible(false);
//                       }}
//                       className="flex-1 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition-colors"
//                     >
//                       Cancel
//                     </motion.button>
//                   )}
//                 </div>
//               </form>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         <div className="bg-white rounded-xl shadow-xl p-6">
//           <h2 className="text-2xl font-bold mb-6">Customer List</h2>
//           {customers.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <AnimatePresence>
//                 {customers.map((customer, index) => (
//                   <motion.div
//                     key={customer.phone}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ delay: index * 0.1 }}
//                     className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
//                   >
//                     <div className="flex justify-between items-start mb-4">
//                       <h3 className="text-xl font-semibold">{customer.name}</h3>
//                       <div className="flex gap-2">
//                         <motion.button
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={() => handleEdit(customer)}
//                           className="p-2 text-yellow-500 hover:text-yellow-600"
//                         >
//                           <Edit2 size={20} />
//                         </motion.button>
//                         <motion.button
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={() => handleDelete(customer.phone)}
//                           className="p-2 text-red-500 hover:text-red-600"
//                         >
//                           <Trash2 size={20} />
//                         </motion.button>
//                       </div>
//                     </div>
//                     <div className="space-y-2 text-gray-600">
//                       <p className="flex items-center gap-2">
//                         <Phone size={16} /> {customer.phone}
//                       </p>
//                       <p className="flex items-center gap-2">
//                         <Mail size={16} /> {customer.email || "Not provided"}
//                       </p>
//                       <p className="flex items-center gap-2">
//                         <MapPin size={16} /> {customer.address || "Not provided"}
//                       </p>
//                       <p className="flex items-center gap-2">
//                         <Gift size={16} /> {customer.birthday || "Not provided"}
//                       </p>
//                       <p className="flex items-center gap-2">
//                         <User size={16} /> Loyalty Points: {customer.loyaltyPoints || 100}
//                       </p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </div>
//           ) : (
//             <div className="text-center py-12 text-gray-500">
//               No customers found. Add a customer to get started!
//             </div>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default CustomerManagement;
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Phone, MapPin, Gift, Plus, X, Edit2, Trash2, Check, AlertCircle } from "lucide-react";

const CustomerManagement = () => {
  const storeId = "STORE-1737889146-4514"; // Matches your logs; adjust if needed
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    birthday: "",
  });
  const [customers, setCustomers] = useState([]);
  const [message, setMessage] = useState({ text: "", type: "success" });
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}`);
      const data = await response.json();
      if (response.ok && data.customers) {
        setCustomers(data.customers);
        if (data.customers.length === 0) {
          showMessage("No customers found yet.", "info");
        }
      } else {
        showMessage(data.error || "Failed to fetch customers", "error");
      }
    } catch (error) {
      showMessage("Network error: Could not connect to server", "error");
    }
  };

  const showMessage = (text, type = "success") => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: "", type: "success" }), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!customerInfo.name || !customerInfo.phone) {
      showMessage("Name and phone are required", "error");
      return;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(customerInfo.phone)) {
      showMessage("Phone must be a 10-digit number", "error");
      return;
    }

    const url = editingCustomer
      ? `http://localhost:5008/api/customers/${editingCustomer.phone}`
      : `http://localhost:5008/api/customers`;
    const method = editingCustomer ? "PUT" : "POST";
    const payload = { ...customerInfo, storeId };

    try {
      console.log(`Sending ${method} request to ${url} with payload:`, payload); // Debug log
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      console.log("Response:", data); // Debug log

      if (response.ok) {
        showMessage(`Customer ${editingCustomer ? "updated" : "added"} successfully`);
        setCustomerInfo({ name: "", email: "", phone: "", address: "", birthday: "" });
        setEditingCustomer(null);
        setIsFormVisible(false);
        fetchCustomers();
      } else {
        showMessage(data.error || `Failed to ${editingCustomer ? "update" : "add"} customer`, "error");
      }
    } catch (error) {
      console.error("Error:", error); // Debug log
      showMessage(`Network error: ${error.message}`, "error");
    }
  };

  const handleEdit = (customer) => {
    setEditingCustomer(customer);
    setCustomerInfo({
      name: customer.name,
      email: customer.email || "",
      phone: customer.phone,
      address: customer.address || "",
      birthday: customer.birthday || "",
    });
    setIsFormVisible(true);
  };

  const handleDelete = async (phone) => {
    if (!window.confirm("Are you sure you want to delete this customer?")) return;

    try {
      const response = await fetch(
        `http://localhost:5008/api/customers/${phone}?storeId=${storeId}`,
        { method: "DELETE" }
      );
      const data = await response.json();

      if (response.ok) {
        showMessage("Customer deleted successfully");
        fetchCustomers();
      } else {
        showMessage(data.error || "Failed to delete customer", "error");
      }
    } catch (error) {
      showMessage("Network error: Could not connect to server", "error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ y: -20 }} animate={{ y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Customer Management</h1>
          <p className="text-lg text-gray-600">Store ID: {storeId}</p>
        </motion.div>

        <AnimatePresence>
          {message.text && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg flex items-center gap-2 ${
                message.type === "error" ? "bg-red-500" : message.type === "info" ? "bg-blue-500" : "bg-green-500"
              } text-white`}
            >
              {message.type === "error" ? <AlertCircle size={20} /> : <Check size={20} />}
              <span>{message.text}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mb-8 flex justify-end">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsFormVisible(!isFormVisible);
              if (isFormVisible) {
                setEditingCustomer(null);
                setCustomerInfo({ name: "", email: "", phone: "", address: "", birthday: "" });
              }
            }}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 hover:bg-blue-600 transition-colors"
          >
            {isFormVisible ? <X size={20} /> : <Plus size={20} />}
            {isFormVisible ? "Close Form" : "Add Customer"}
          </motion.button>
        </div>

        <AnimatePresence>
          {isFormVisible && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white rounded-xl shadow-xl p-6 mb-8"
            >
              <h2 className="text-2xl font-bold mb-6">
                {editingCustomer ? "Edit Customer" : "Add New Customer"}
              </h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User size={16} className="inline mr-2" />
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={customerInfo.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail size={16} className="inline mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={customerInfo.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone size={16} className="inline mr-2" />
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    placeholder="1234567890"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin size={16} className="inline mr-2" />
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={customerInfo.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Gift size={16} className="inline mr-2" />
                    Birthday
                  </label>
                  <input
                    type="date"
                    name="birthday"
                    value={customerInfo.birthday}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2 flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="flex-1 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                  >
                    {editingCustomer ? "Update Customer" : "Add Customer"}
                  </motion.button>
                  {editingCustomer && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => {
                        setEditingCustomer(null);
                        setCustomerInfo({ name: "", email: "", phone: "", address: "", birthday: "" });
                        setIsFormVisible(false);
                      }}
                      className="flex-1 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition-colors"
                    >
                      Cancel
                    </motion.button>
                  )}
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <h2 className="text-2xl font-bold mb-6">Customer List</h2>
          {customers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {customers.map((customer, index) => (
                  <motion.div
                    key={customer.phone}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">{customer.name}</h3>
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleEdit(customer)}
                          className="p-2 text-yellow-500 hover:text-yellow-600"
                        >
                          <Edit2 size={20} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleDelete(customer.phone)}
                          className="p-2 text-red-500 hover:text-red-600"
                        >
                          <Trash2 size={20} />
                        </motion.button>
                      </div>
                    </div>
                    <div className="space-y-2 text-gray-600">
                      <p className="flex items-center gap-2">
                        <Phone size={16} /> {customer.phone}
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail size={16} /> {customer.email || "Not provided"}
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin size={16} /> {customer.address || "Not provided"}
                      </p>
                      <p className="flex items-center gap-2">
                        <Gift size={16} /> {customer.birthday || "Not provided"}
                      </p>
                      <p className="flex items-center gap-2">
                        <User size={16} /> Loyalty Points: {customer.loyaltyPoints || 100}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              No customers found. Add a customer to get started!
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CustomerManagement;