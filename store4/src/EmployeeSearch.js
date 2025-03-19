

// // // // // // import React, { useState, useEffect, useContext } from "react";
// // // // // // import { StoreContext } from "./StoreContext";

// // // // // // const EmployeeSearch = () => {
// // // // // //   const { storeId } = useContext(StoreContext); // Get storeId from context
// // // // // //   const [employees, setEmployees] = useState([]);
// // // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // // //   const [searchBy, setSearchBy] = useState("role");
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [error, setError] = useState(null);

// // // // // //   // Fetch employees from the backend
// // // // // //   const fetchEmployees = async () => {
// // // // // //     setLoading(true);
// // // // // //     setError(null);
// // // // // //     try {
// // // // // //       const response = await fetch("http://localhost:5004/employees", {
// // // // // //         headers: {
// // // // // //           storeId: storeId, // Use storeId from context
// // // // // //         },
// // // // // //       });
// // // // // //       if (!response.ok) {
// // // // // //         throw new Error("Failed to fetch employees");
// // // // // //       }
// // // // // //       const data = await response.json();
// // // // // //       setEmployees(data);
// // // // // //     } catch (error) {
// // // // // //       setError(error.message);
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     if (storeId) {
// // // // // //       fetchEmployees();
// // // // // //     }
// // // // // //   }, [storeId]);

// // // // // //   // Filter employees based on search term and criteria
// // // // // //   const filteredEmployees = employees.filter((employee) => {
// // // // // //     const fieldValue =
// // // // // //       searchBy === "role" ? employee.role.toLowerCase() : employee.id.toString();
// // // // // //     return fieldValue.includes(searchTerm.toLowerCase());
// // // // // //   });

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8">
// // // // // //       <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8 animate-fade-in">
// // // // // //         <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 animate-slide-in-top">
// // // // // //           Employee Search
// // // // // //         </h1>

// // // // // //         {/* Search Input and Dropdown */}
// // // // // //         <div className="flex flex-col md:flex-row gap-4 mb-8 animate-slide-in-bottom">
// // // // // //           <input
// // // // // //             type="text"
// // // // // //             placeholder={`Search by ${searchBy === "role" ? "Role" : "ID"}...`}
// // // // // //             value={searchTerm}
// // // // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // // // //             className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
// // // // // //           />
// // // // // //           <select
// // // // // //             value={searchBy}
// // // // // //             onChange={(e) => setSearchBy(e.target.value)}
// // // // // //             className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
// // // // // //           >
// // // // // //             <option value="role">Search by Role</option>
// // // // // //             <option value="id">Search by ID</option>
// // // // // //           </select>
// // // // // //         </div>

// // // // // //         {/* Loading and Error Messages */}
// // // // // //         {loading && <p className="text-center text-gray-600">Loading employees...</p>}
// // // // // //         {error && <p className="text-center text-red-500">{error}</p>}

// // // // // //         {/* Employee List */}
// // // // // //         <div className="space-y-4">
// // // // // //           {filteredEmployees.length > 0 ? (
// // // // // //             filteredEmployees.map((employee) => (
// // // // // //               <div
// // // // // //                 key={employee._id}
// // // // // //                 className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 animate-fade-in"
// // // // // //               >
// // // // // //                 <div className="flex items-center space-x-4">
// // // // // //                   <img
// // // // // //                     src={`http://localhost:5004/uploads/${employee.image}`}
// // // // // //                     alt={employee.name}
// // // // // //                     className="w-16 h-16 rounded-full object-cover"
// // // // // //                   />
// // // // // //                   <div>
// // // // // //                     <h2 className="text-xl font-semibold text-gray-800">
// // // // // //                       {employee.name}
// // // // // //                     </h2>
// // // // // //                     <p className="text-gray-600">{employee.role}</p>
// // // // // //                     <p className="text-sm text-gray-500">
// // // // // //                       Department: {employee.department}
// // // // // //                     </p>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             ))
// // // // // //           ) : (
// // // // // //             <p className="text-center text-gray-600">No employees found.</p>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default EmployeeSearch;

// // // // // import React, { useState, useEffect, useContext } from "react";
// // // // // import { StoreContext } from "./StoreContext";

// // // // // const EmployeeSearch = () => {
// // // // //   const { storeId } = useContext(StoreContext); // Get storeId from context
// // // // //   const [employees, setEmployees] = useState([]);
// // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // //   const [searchBy, setSearchBy] = useState("role");
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [error, setError] = useState(null);

// // // // //   // Fetch employees from the backend
// // // // //   const fetchEmployees = async () => {
// // // // //     setLoading(true);
// // // // //     setError(null);
// // // // //     try {
// // // // //       const response = await fetch("http://localhost:5004/employees", {
// // // // //         headers: {
// // // // //           storeId: storeId, // Use storeId from context
// // // // //         },
// // // // //       });
// // // // //       if (!response.ok) {
// // // // //         throw new Error("Failed to fetch employees");
// // // // //       }
// // // // //       const data = await response.json();
// // // // //       setEmployees(data);
// // // // //     } catch (error) {
// // // // //       setError(error.message);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     if (storeId) {
// // // // //       fetchEmployees();
// // // // //     }
// // // // //   }, [storeId]);

// // // // //   // Filter employees based on search term and criteria
// // // // //   const filteredEmployees = employees.filter((employee) => {
// // // // //     // Ensure employee has the required fields
// // // // //     const fieldValue =
// // // // //       searchBy === "role"
// // // // //         ? (employee.role || "").toLowerCase() // Default to empty string if role is undefined
// // // // //         : (employee.id || "").toString(); // Default to empty string if id is undefined
// // // // //     return fieldValue.includes(searchTerm.toLowerCase());
// // // // //   });

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8">
// // // // //       <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8 animate-fade-in">
// // // // //         <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 animate-slide-in-top">
// // // // //           Employee Search
// // // // //         </h1>

// // // // //         {/* Search Input and Dropdown */}
// // // // //         <div className="flex flex-col md:flex-row gap-4 mb-8 animate-slide-in-bottom">
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder={`Search by ${searchBy === "role" ? "Role" : "ID"}...`}
// // // // //             value={searchTerm}
// // // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // // //             className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
// // // // //           />
// // // // //           <select
// // // // //             value={searchBy}
// // // // //             onChange={(e) => setSearchBy(e.target.value)}
// // // // //             className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
// // // // //           >
// // // // //             <option value="role">Search by Role</option>
// // // // //             <option value="id">Search by ID</option>
// // // // //           </select>
// // // // //         </div>

// // // // //         {/* Loading and Error Messages */}
// // // // //         {loading && <p className="text-center text-gray-600">Loading employees...</p>}
// // // // //         {error && <p className="text-center text-red-500">{error}</p>}

// // // // //         {/* Employee List */}
// // // // //         <div className="space-y-4">
// // // // //           {filteredEmployees.length > 0 ? (
// // // // //             filteredEmployees.map((employee) => (
// // // // //               <div
// // // // //                 key={employee._id}
// // // // //                 className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 animate-fade-in"
// // // // //               >
// // // // //                 <div className="flex items-center space-x-4">
// // // // //                   <img
// // // // //                     src={`http://localhost:5004/uploads/${employee.image}`}
// // // // //                     alt={employee.name}
// // // // //                     className="w-16 h-16 rounded-full object-cover"
// // // // //                   />
// // // // //                   <div>
// // // // //                     <h2 className="text-xl font-semibold text-gray-800">
// // // // //                       {employee.name}
// // // // //                     </h2>
// // // // //                     <p className="text-gray-600">{employee.role || "No Role"}</p>
// // // // //                     <p className="text-sm text-gray-500">
// // // // //                       Department: {employee.department || "No Department"}
// // // // //                     </p>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             ))
// // // // //           ) : (
// // // // //             <p className="text-center text-gray-600">No employees found.</p>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default EmployeeSearch;


// // // // import React, { useState, useEffect, useContext } from "react";
// // // // import { StoreContext } from "./StoreContext";

// // // // const EmployeeSearch = () => {
// // // //   const { storeId } = useContext(StoreContext); // Get storeId from context
// // // //   const [employees, setEmployees] = useState([]);
// // // //   const [searchTerm, setSearchTerm] = useState("");
// // // //   const [searchBy, setSearchBy] = useState("role");
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState(null);
// // // //   const [selectedEmployee, setSelectedEmployee] = useState(null); // Track selected employee for additional details

// // // //   // Fetch employees from the backend
// // // //   const fetchEmployees = async () => {
// // // //     setLoading(true);
// // // //     setError(null);
// // // //     try {
// // // //       const response = await fetch("http://localhost:5004/employees", {
// // // //         headers: {
// // // //           storeId: storeId, // Use storeId from context
// // // //         },
// // // //       });
// // // //       if (!response.ok) {
// // // //         throw new Error("Failed to fetch employees");
// // // //       }
// // // //       const data = await response.json();
// // // //       setEmployees(data);
// // // //     } catch (error) {
// // // //       setError(error.message);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     if (storeId) {
// // // //       fetchEmployees();
// // // //     }
// // // //   }, [storeId]);

// // // //   // Filter employees based on search term and criteria
// // // //   const filteredEmployees = employees.filter((employee) => {
// // // //     const fieldValue =
// // // //       searchBy === "role"
// // // //         ? (employee.role || "").toLowerCase() // Default to empty string if role is undefined
// // // //         : (employee.id || "").toString(); // Default to empty string if id is undefined
// // // //     return fieldValue.includes(searchTerm.toLowerCase());
// // // //   });

// // // //   // Handle employee selection for additional details
// // // //   const handleEmployeeClick = (employee) => {
// // // //     setSelectedEmployee(employee);
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8">
// // // //       <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8 animate-fade-in">
// // // //         <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 animate-slide-in-top">
// // // //           Employee Search
// // // //         </h1>

// // // //         {/* Search Input and Dropdown */}
// // // //         <div className="flex flex-col md:flex-row gap-4 mb-8 animate-slide-in-bottom">
// // // //           <input
// // // //             type="text"
// // // //             placeholder={`Search by ${searchBy === "role" ? "Role" : "ID"}...`}
// // // //             value={searchTerm}
// // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // //             className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
// // // //           />
// // // //           <select
// // // //             value={searchBy}
// // // //             onChange={(e) => setSearchBy(e.target.value)}
// // // //             className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
// // // //           >
// // // //             <option value="role">Search by Role</option>
// // // //             <option value="id">Search by ID</option>
// // // //           </select>
// // // //         </div>

// // // //         {/* Loading and Error Messages */}
// // // //         {loading && <p className="text-center text-gray-600">Loading employees...</p>}
// // // //         {error && <p className="text-center text-red-500">{error}</p>}

// // // //         {/* Employee Table */}
// // // //         <div className="overflow-x-auto">
// // // //           <table className="w-full table-auto">
// // // //             <thead>
// // // //               <tr className="bg-gray-800 text-white uppercase text-sm tracking-wider">
// // // //                 <th className="px-6 py-3 text-left">Name</th>
// // // //                 <th className="px-6 py-3 text-left">Role</th>
// // // //                 <th className="px-6 py-3 text-left">Actions</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {filteredEmployees.map((employee) => (
// // // //                 <tr
// // // //                   key={employee._id}
// // // //                   className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 animate-fade-in"
// // // //                   onClick={() => handleEmployeeClick(employee)}
// // // //                 >
// // // //                   <td className="px-6 py-4">{employee.name}</td>
// // // //                   <td className="px-6 py-4">{employee.role || "No Role"}</td>
// // // //                   <td className="px-6 py-4">
// // // //                     <button
// // // //                       className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
// // // //                       onClick={() => handleEmployeeClick(employee)}
// // // //                     >
// // // //                       View Details
// // // //                     </button>
// // // //                   </td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>

// // // //         {/* Additional Employee Details (Outside Table) */}
// // // //         {selectedEmployee && (
// // // //           <div className="mt-8 p-6 bg-gray-50 rounded-lg animate-slide-in-bottom">
// // // //             <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // //               Additional Details for {selectedEmployee.name}
// // // //             </h2>
// // // //             <div className="space-y-2">
// // // //               <p><strong>ID:</strong> {selectedEmployee.id || "N/A"}</p>
// // // //               <p><strong>Department:</strong> {selectedEmployee.department || "N/A"}</p>
// // // //               <p><strong>Image:</strong></p>
// // // //               <img
// // // //                 src={`http://localhost:5004/uploads/${selectedEmployee.image}`}
// // // //                 alt={selectedEmployee.name}
// // // //                 className="w-32 h-32 rounded-full object-cover"
// // // //               />
// // // //               {/* Add more fields here if needed */}
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default EmployeeSearch;

// // // // import React, { useState, useEffect, useContext } from "react";
// // // // import { StoreContext } from "./StoreContext";

// // // // const EmployeeSearch = () => {
// // // //   const { storeId } = useContext(StoreContext); // Get storeId from context
// // // //   const [employees, setEmployees] = useState([]);
// // // //   const [searchTerm, setSearchTerm] = useState("");
// // // //   const [searchBy, setSearchBy] = useState("role");
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState(null);
// // // //   const [selectedEmployee, setSelectedEmployee] = useState(null); // Track selected employee for additional details

// // // //   // Fetch employees from the backend
// // // //   const fetchEmployees = async () => {
// // // //     setLoading(true);
// // // //     setError(null);
// // // //     try {
// // // //       const response = await fetch("http://localhost:5004/employees", {
// // // //         headers: {
// // // //           storeId: storeId, // Use storeId from context
// // // //         },
// // // //       });
// // // //       if (!response.ok) {
// // // //         throw new Error("Failed to fetch employees");
// // // //       }
// // // //       const data = await response.json();
// // // //       setEmployees(data);
// // // //     } catch (error) {
// // // //       setError(error.message);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     if (storeId) {
// // // //       fetchEmployees();
// // // //     }
// // // //   }, [storeId]);

// // // //   // Filter employees based on search term and criteria
// // // //   const filteredEmployees = employees.filter((employee) => {
// // // //     const fieldValue =
// // // //       searchBy === "role"
// // // //         ? (employee.role || "").toLowerCase() // Default to empty string if role is undefined
// // // //         : (employee.id || "").toString(); // Default to empty string if id is undefined
// // // //     return fieldValue.includes(searchTerm.toLowerCase());
// // // //   });

// // // //   // Handle employee selection for additional details
// // // //   const handleEmployeeClick = (employee) => {
// // // //     setSelectedEmployee(employee);
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8">
// // // //       <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8 animate-fade-in">
// // // //         <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 animate-slide-in-top">
// // // //           Employee Search
// // // //         </h1>

// // // //         {/* Search Input and Dropdown */}
// // // //         <div className="flex flex-col md:flex-row gap-4 mb-8 animate-slide-in-bottom">
// // // //           <input
// // // //             type="text"
// // // //             placeholder={`Search by ${searchBy === "role" ? "Role" : "ID"}...`}
// // // //             value={searchTerm}
// // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // //             className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
// // // //           />
// // // //           <select
// // // //             value={searchBy}
// // // //             onChange={(e) => setSearchBy(e.target.value)}
// // // //             className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
// // // //           >
// // // //             <option value="role">Search by Role</option>
// // // //             <option value="id">Search by ID</option>
// // // //           </select>
// // // //         </div>

// // // //         {/* Loading and Error Messages */}
// // // //         {loading && <p className="text-center text-gray-600">Loading employees...</p>}
// // // //         {error && <p className="text-center text-red-500">{error}</p>}

// // // //         {/* Employee Table */}
// // // //         <div className="overflow-x-auto">
// // // //           <table className="w-full table-auto">
// // // //             <thead>
// // // //               <tr className="bg-gray-800 text-white uppercase text-sm tracking-wider">
// // // //                 <th className="px-6 py-3 text-left">Name</th>
// // // //                 <th className="px-6 py-3 text-left">Role</th>
// // // //                 <th className="px-6 py-3 text-left">Actions</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {filteredEmployees.map((employee) => (
// // // //                 <tr
// // // //                   key={employee._id}
// // // //                   className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 animate-fade-in"
// // // //                   onClick={() => handleEmployeeClick(employee)}
// // // //                 >
// // // //                   <td className="px-6 py-4">{employee.name}</td>
// // // //                   <td className="px-6 py-4">{employee.role || "No Role"}</td>
// // // //                   <td className="px-6 py-4">
// // // //                     <button
// // // //                       className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
// // // //                       onClick={() => handleEmployeeClick(employee)}
// // // //                     >
// // // //                       View Details
// // // //                     </button>
// // // //                   </td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>

// // // //         {/* Additional Employee Details (Outside Table) */}
// // // //         {selectedEmployee && (
// // // //           <div className="mt-8 p-6 bg-gray-50 rounded-lg animate-slide-in-bottom">
// // // //             <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // //               Additional Details for {selectedEmployee.name}
// // // //             </h2>
// // // //             <div className="space-y-2">
// // // //               <p><strong>ID:</strong> {selectedEmployee.id || "N/A"}</p>
// // // //               <p><strong>Department:</strong> {selectedEmployee.department || "N/A"}</p>
// // // //               <p><strong>Image:</strong></p>
// // // //               <img
// // // //                 src={`http://localhost:5004/uploads/${selectedEmployee.image}`}
// // // //                 alt={selectedEmployee.name}
// // // //                 className="w-32 h-32 rounded-full object-cover"
// // // //               />
// // // //               {/* Add more fields here if needed */}
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default EmployeeSearch;

// // // import React, { useState, useEffect, useContext } from "react";
// // // import { StoreContext } from "./StoreContext";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // const EmployeeSearch = () => {
// // //   const { storeId } = useContext(StoreContext);
// // //   const [employees, setEmployees] = useState([]);
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [searchBy, setSearchBy] = useState("role");
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);
// // //   const [selectedEmployee, setSelectedEmployee] = useState(null);
// // //   const [isDetailExpanded, setIsDetailExpanded] = useState(false);

// // //   // Fetch employees from the backend
// // //   const fetchEmployees = async () => {
// // //     setLoading(true);
// // //     setError(null);
// // //     try {
// // //       const response = await fetch("http://localhost:5004/employees", {
// // //         headers: {
// // //           storeId: storeId,
// // //         },
// // //       });
// // //       if (!response.ok) {
// // //         throw new Error("Failed to fetch employees");
// // //       }
// // //       const data = await response.json();
// // //       setEmployees(data);
// // //     } catch (error) {
// // //       setError(error.message);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     if (storeId) {
// // //       fetchEmployees();
// // //     }
// // //   }, [storeId]);

// // //   // Filter employees based on search term and criteria
// // //   const filteredEmployees = employees.filter((employee) => {
// // //     const fieldValue =
// // //       searchBy === "role"
// // //         ? (employee.role || "").toLowerCase()
// // //         : (employee.id || "").toString();
// // //     return fieldValue.includes(searchTerm.toLowerCase());
// // //   });

// // //   // Handle employee selection for additional details
// // //   const handleEmployeeClick = (employee) => {
// // //     setSelectedEmployee(employee);
// // //     setIsDetailExpanded(true);
// // //   };

// // //   // Loading animation variants
// // //   const loadingVariants = {
// // //     animate: {
// // //       rotate: 360,
// // //       transition: {
// // //         repeat: Infinity,
// // //         duration: 1,
// // //         ease: "linear",
// // //       },
// // //     },
// // //   };

// // //   // Empty state animation variants
// // //   const emptyStateVariants = {
// // //     hidden: { opacity: 0, y: 20 },
// // //     visible: { 
// // //       opacity: 1, 
// // //       y: 0,
// // //       transition: { 
// // //         duration: 0.5,
// // //         delay: 0.2 
// // //       }
// // //     },
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 p-4 md:p-8 font-sans">
// // //       <motion.div 
// // //         initial={{ opacity: 0, y: -20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.5 }}
// // //         className="max-w-6xl mx-auto bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden"
// // //       >
// // //         {/* Header Section with Glassmorphism */}
// // //         <div className="relative overflow-hidden">
// // //           <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-90"></div>
// // //           <div className="relative z-10 px-8 py-12">
// // //             <motion.h1 
// // //               initial={{ opacity: 0, y: -20 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.7, delay: 0.2 }}
// // //               className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight"
// // //             >
// // //               Employee Directory
// // //             </motion.h1>
// // //             <motion.p 
// // //               initial={{ opacity: 0 }}
// // //               animate={{ opacity: 1 }}
// // //               transition={{ duration: 0.7, delay: 0.4 }}
// // //               className="text-purple-100 text-lg max-w-2xl"
// // //             >
// // //               Search and find detailed information about employees across departments
// // //             </motion.p>
// // //           </div>
          
// // //           {/* Decorative Elements */}
// // //           <motion.div 
// // //             animate={{ 
// // //               rotate: 360,
// // //               scale: [1, 1.1, 1],
// // //             }}
// // //             transition={{ 
// // //               rotate: { repeat: Infinity, duration: 20, ease: "linear" },
// // //               scale: { repeat: Infinity, duration: 8, ease: "easeInOut" }
// // //             }}
// // //             className="absolute -top-16 -right-16 w-64 h-64 bg-pink-400 rounded-full opacity-20 blur-xl"
// // //           ></motion.div>
// // //           <motion.div 
// // //             animate={{ 
// // //               rotate: -360,
// // //               scale: [1, 1.2, 1],
// // //             }}
// // //             transition={{ 
// // //               rotate: { repeat: Infinity, duration: 25, ease: "linear" },
// // //               scale: { repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }
// // //             }}
// // //             className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-500 rounded-full opacity-20 blur-xl"
// // //           ></motion.div>
// // //         </div>

// // //         <div className="p-6 md:p-8">
// // //           {/* Search Controls */}
// // //           <motion.div 
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.5, delay: 0.3 }}
// // //             className="flex flex-col md:flex-row gap-4 mb-8"
// // //           >
// // //             <div className="flex-1 relative">
// // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// // //                 </svg>
// // //               </div>
// // //               <input
// // //                 type="text"
// // //                 placeholder={`Search by ${searchBy === "role" ? "Role" : "ID"}...`}
// // //                 value={searchTerm}
// // //                 onChange={(e) => setSearchTerm(e.target.value)}
// // //                 className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white shadow-sm"
// // //               />
// // //             </div>
// // //             <select
// // //               value={searchBy}
// // //               onChange={(e) => setSearchBy(e.target.value)}
// // //               className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm transition-all md:w-48"
// // //             >
// // //               <option value="role">Search by Role</option>
// // //               <option value="id">Search by ID</option>
// // //             </select>
// // //             <motion.button
// // //               whileHover={{ scale: 1.03 }}
// // //               whileTap={{ scale: 0.97 }}
// // //               onClick={fetchEmployees}
// // //               className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 md:w-auto"
// // //             >
// // //               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
// // //               </svg>
// // //               Refresh
// // //             </motion.button>
// // //           </motion.div>

// // //           {/* Loading and Error Messages */}
// // //           <AnimatePresence>
// // //             {loading && (
// // //               <motion.div 
// // //                 initial={{ opacity: 0 }}
// // //                 animate={{ opacity: 1 }}
// // //                 exit={{ opacity: 0 }}
// // //                 className="flex justify-center items-center py-8"
// // //               >
// // //                 <motion.div 
// // //                   variants={loadingVariants}
// // //                   animate="animate"
// // //                   className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full"
// // //                 ></motion.div>
// // //                 <span className="ml-3 text-gray-600 font-medium">Loading employees...</span>
// // //               </motion.div>
// // //             )}
// // //           </AnimatePresence>

// // //           <AnimatePresence>
// // //             {error && (
// // //               <motion.div 
// // //                 initial={{ opacity: 0, y: -10 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 exit={{ opacity: 0, y: -10 }}
// // //                 className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded"
// // //               >
// // //                 <div className="flex items-center">
// // //                   <div className="flex-shrink-0">
// // //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // //                     </svg>
// // //                   </div>
// // //                   <div className="ml-3">
// // //                     <p className="text-red-700">{error}</p>
// // //                   </div>
// // //                 </div>
// // //               </motion.div>
// // //             )}
// // //           </AnimatePresence>

// // //           {/* Empty State */}
// // //           <AnimatePresence>
// // //             {!loading && filteredEmployees.length === 0 && (
// // //               <motion.div 
// // //                 variants={emptyStateVariants}
// // //                 initial="hidden"
// // //                 animate="visible"
// // //                 exit={{ opacity: 0, y: 20 }}
// // //                 className="text-center py-12"
// // //               >
// // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
// // //                 </svg>
// // //                 <h3 className="text-lg font-medium text-gray-600">No employees found</h3>
// // //                 <p className="text-gray-500 mt-1">Try adjusting your search criteria or refresh the list</p>
// // //               </motion.div>
// // //             )}
// // //           </AnimatePresence>

// // //           {/* Employee Table with Staggered Animation */}
// // //           <AnimatePresence>
// // //             {!loading && filteredEmployees.length > 0 && (
// // //               <motion.div 
// // //                 initial={{ opacity: 0 }}
// // //                 animate={{ opacity: 1 }}
// // //                 exit={{ opacity: 0 }}
// // //                 className="overflow-x-auto rounded-xl shadow border border-gray-100"
// // //               >
// // //                 <table className="w-full table-auto">
// // //                   <thead>
// // //                     <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm uppercase tracking-wider">
// // //                       <th className="px-6 py-4 text-left font-semibold">Name</th>
// // //                       <th className="px-6 py-4 text-left font-semibold">Role</th>
// // //                       <th className="px-6 py-4 text-left font-semibold">Actions</th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody>
// // //                     {filteredEmployees.map((employee, index) => (
// // //                       <motion.tr
// // //                         key={employee._id}
// // //                         initial={{ opacity: 0, y: 10 }}
// // //                         animate={{ opacity: 1, y: 0 }}
// // //                         transition={{ 
// // //                           duration: 0.3, 
// // //                           delay: index * 0.05,
// // //                           ease: "easeOut" 
// // //                         }}
// // //                         className={`${
// // //                           selectedEmployee?._id === employee._id 
// // //                             ? "bg-purple-50" 
// // //                             : index % 2 === 0 
// // //                               ? "bg-white" 
// // //                               : "bg-gray-50"
// // //                         } hover:bg-indigo-50 transition-all duration-150`}
// // //                       >
// // //                         <td className="px-6 py-4 border-b border-gray-100">
// // //                           <div className="flex items-center">
// // //                             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-medium mr-3">
// // //                               {employee.name?.charAt(0) || "?"}
// // //                             </div>
// // //                             <span className="font-medium text-gray-800">{employee.name}</span>
// // //                           </div>
// // //                         </td>
// // //                         <td className="px-6 py-4 border-b border-gray-100">
// // //                           <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
// // //                             {employee.role || "No Role"}
// // //                           </span>
// // //                         </td>
// // //                         <td className="px-6 py-4 border-b border-gray-100">
// // //                           <motion.button
// // //                             whileHover={{ scale: 1.05 }}
// // //                             whileTap={{ scale: 0.95 }}
// // //                             className={`px-4 py-2 ${
// // //                               selectedEmployee?._id === employee._id 
// // //                                 ? "bg-purple-600 hover:bg-purple-700" 
// // //                                 : "bg-indigo-600 hover:bg-indigo-700"
// // //                             } text-white rounded-lg transition-all shadow hover:shadow-md flex items-center gap-2`}
// // //                             onClick={() => handleEmployeeClick(employee)}
// // //                           >
// // //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
// // //                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
// // //                             </svg>
// // //                             View Details
// // //                           </motion.button>
// // //                         </td>
// // //                       </motion.tr>
// // //                     ))}
// // //                   </tbody>
// // //                 </table>
// // //               </motion.div>
// // //             )}
// // //           </AnimatePresence>

// // //           {/* Employee Detail Card with Animated Expansion */}
// // //           <AnimatePresence>
// // //             {selectedEmployee && (
// // //               <motion.div 
// // //                 initial={{ opacity: 0, height: 0, marginTop: 0 }}
// // //                 animate={{ 
// // //                   opacity: 1, 
// // //                   height: "auto", 
// // //                   marginTop: 32,
// // //                   transition: { 
// // //                     duration: 0.5, 
// // //                     height: { duration: 0.4 }
// // //                   } 
// // //                 }}
// // //                 exit={{ 
// // //                   opacity: 0, 
// // //                   height: 0, 
// // //                   marginTop: 0,
// // //                   transition: { 
// // //                     duration: 0.3, 
// // //                     opacity: { duration: 0.2 }
// // //                   } 
// // //                 }}
// // //                 className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden"
// // //               >
// // //                 <div className="p-6 md:p-8">
// // //                   <div className="flex flex-col md:flex-row gap-8">
// // //                     {/* Employee Image */}
// // //                     <motion.div 
// // //                       initial={{ opacity: 0, scale: 0.8 }}
// // //                       animate={{ opacity: 1, scale: 1 }}
// // //                       transition={{ delay: 0.2, duration: 0.5 }}
// // //                       className="w-full md:w-1/3 flex justify-center"
// // //                     >
// // //                       <div className="relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
// // //                         <img
// // //                           src={`http://localhost:5004/uploads/${selectedEmployee.image}`}
// // //                           alt={selectedEmployee.name}
// // //                           onError={(e) => {
// // //                             e.target.onerror = null;
// // //                             e.target.src = "https://via.placeholder.com/200?text=No+Image";
// // //                           }}
// // //                           className="w-48 h-48 md:w-full md:h-auto object-cover rounded-lg"
// // //                         />
// // //                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
// // //                           <div className="p-4 text-white">
// // //                             <p className="font-bold">{selectedEmployee.name}</p>
// // //                             <p className="text-sm opacity-90">{selectedEmployee.role || "No Role"}</p>
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     </motion.div>

// // //                     {/* Employee Details */}
// // //                     <motion.div 
// // //                       initial={{ opacity: 0, x: 20 }}
// // //                       animate={{ opacity: 1, x: 0 }}
// // //                       transition={{ delay: 0.3, duration: 0.5 }}
// // //                       className="flex-1"
// // //                     >
// // //                       <div className="flex justify-between items-start mb-4">
// // //                         <div>
// // //                           <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
// // //                             {selectedEmployee.name}
// // //                           </h2>
// // //                           <p className="text-purple-600 font-medium">{selectedEmployee.role || "No Role Assigned"}</p>
// // //                         </div>
// // //                         <motion.button
// // //                           whileHover={{ scale: 1.05 }}
// // //                           whileTap={{ scale: 0.95 }}
// // //                           onClick={() => setSelectedEmployee(null)}
// // //                           className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
// // //                         >
// // //                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
// // //                             <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
// // //                           </svg>
// // //                         </motion.button>
// // //                       </div>

// // //                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                         <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
// // //                           <h3 className="text-sm font-medium text-gray-500 mb-2">Employee ID</h3>
// // //                           <p className="text-lg font-semibold text-gray-800">{selectedEmployee.id || "N/A"}</p>
// // //                         </div>
                        
// // //                         <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
// // //                           <h3 className="text-sm font-medium text-gray-500 mb-2">Department</h3>
// // //                           <p className="text-lg font-semibold text-gray-800">{selectedEmployee.department || "N/A"}</p>
// // //                         </div>
                        
// // //                         <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
// // //                           <h3 className="text-sm font-medium text-gray-500 mb-2">Contact</h3>
// // //                           <p className="text-lg font-semibold text-gray-800">{selectedEmployee.email || "No Email"}</p>
// // //                         </div>
                        
// // //                         <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
// // //                           <h3 className="text-sm font-medium text-gray-500 mb-2">Joined</h3>
// // //                           <p className="text-lg font-semibold text-gray-800">{selectedEmployee.joinDate || "Not Available"}</p>
// // //                         </div>
// // //                       </div>

// // //                       <div className="mt-6 flex gap-3">
// // //                         <motion.button
// // //                           whileHover={{ scale: 1.03 }}
// // //                           whileTap={{ scale: 0.97 }}
// // //                           className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow transition-all flex items-center gap-2"
// // //                         >
// // //                           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
// // //                           </svg>
// // //                           Contact
// // //                         </motion.button>
                        
// // //                         <motion.button
// // //                           whileHover={{ scale: 1.03 }}
// // //                           whileTap={{ scale: 0.97 }}
// // //                           className="px-4 py-2 border border-gray-300 hover:border-gray-400 bg-white text-gray-700 rounded-lg shadow-sm transition-all flex items-center gap-2"
// // //                         >
// // //                           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
// // //                           </svg>
// // //                           Edit Profile
// // //                         </motion.button>
// // //                       </div>
// // //                     </motion.div>
// // //                   </div>
// // //                 </div>
                
// // //                 {/* Footer with Stats */}
// // //                 <motion.div 
// // //                   initial={{ opacity: 0 }}
// // //                   animate={{ opacity: 1 }}
// // //                   transition={{ delay: 0.5 }}
// // //                   className="bg-gray-50 border-t border-gray-200 p-6"
// // //                 >
// // //                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// // //                     <div className="text-center">
// // //                       <p className="text-gray-500 text-sm">Projects</p>
// // //                       <p className="text-xl font-bold text-indigo-600">
// // //                         {selectedEmployee.projects || 0}
// // //                       </p>
// // //                     </div>
// // //                     <div className="text-center">
// // //                       <p className="text-gray-500 text-sm">Tasks</p>
// // //                       <p className="text-xl font-bold text-indigo-600">
// // //                         {selectedEmployee.tasks || 0}
// // //                       </p>
// // //                     </div>
// // //                     <div className="text-center">
// // //                       <p className="text-gray-500 text-sm">Performance</p>
// // //                       <p className="text-xl font-bold text-indigo-600">
// // //                         {selectedEmployee.performance || "N/A"}
// // //                       </p>
// // //                     </div>
// // //                     <div className="text-center">
// // //                       <p className="text-gray-500 text-sm">Team</p>
// // //                       <p className="text-xl font-bold text-indigo-600">
// // //                         {selectedEmployee.team || "N/A"}
// // //                       </p>
// // //                     </div>
// // //                   </div>
// // //                 </motion.div>
// // //               </motion.div>
// // //             )}
// // //           </AnimatePresence>
// // //         </div>
        
// // //         {/* Footer */}
// // //         <motion.div 
// // //           initial={{ opacity: 0 }}
// // //           animate={{ opacity: 1 }}
// // //           transition={{ delay: 0.6 }}
// // //           className="px-8 py-4 bg-gray-50 border-t border-gray-200 text-center text-gray-500 text-sm"
// // //         >
// // //           Employee Directory • {new Date().getFullYear()} • Your Company Name
// // //         </motion.div>
// // //       </motion.div>
// // //     </div>
// // //   );
// // // };

// // // export default EmployeeSearch;


// // import React, { useState, useEffect, useContext } from "react";
// // import { StoreContext } from "./StoreContext";
// // import { motion, AnimatePresence } from "framer-motion";

// // const EmployeeSearch = () => {
// //   const { storeId } = useContext(StoreContext);
// //   const [employees, setEmployees] = useState([]);
// //   const [attendanceRecords, setAttendanceRecords] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [searchBy, setSearchBy] = useState("name");
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [selectedEmployee, setSelectedEmployee] = useState(null);
// //   const [isDetailExpanded, setIsDetailExpanded] = useState(false);
// //   const [showAttendanceModal, setShowAttendanceModal] = useState(false);
// //   const [attendanceStatus, setAttendanceStatus] = useState({});
// //   const [isSavingAttendance, setIsSavingAttendance] = useState(false);
// //   const [attendanceSuccess, setAttendanceSuccess] = useState(false);

// //   // Fetch employees from the backend
// //   const fetchEmployees = async () => {
// //     setLoading(true);
// //     setError(null);
// //     try {
// //       const response = await fetch("http://localhost:5004/employees", {
// //         headers: {
// //           storeId: storeId,
// //         },
// //       });
// //       if (!response.ok) {
// //         throw new Error("Failed to fetch employees");
// //       }
// //       const data = await response.json();
// //       setEmployees(data);
// //     } catch (error) {
// //       setError(error.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Fetch attendance records
// //   const fetchAttendanceRecords = async () => {
// //     if (!storeId) return;

// //     try {
// //       const response = await fetch("http://localhost:5004/attendance", {
// //         headers: {
// //           storeId: storeId,
// //         },
// //       });
// //       if (!response.ok) {
// //         throw new Error("Failed to fetch attendance records");
// //       }
// //       const data = await response.json();
// //       setAttendanceRecords(data);
// //     } catch (error) {
// //       console.error("Error fetching attendance:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     if (storeId) {
// //       fetchEmployees();
// //       fetchAttendanceRecords();
// //     }
// //   }, [storeId]);

// //   // Calculate attendance statistics for an employee
// //   const getAttendanceStats = (employeeId) => {
// //     if (!attendanceRecords.length) return { present: 0, absent: 0, total: 0, rate: 0 };

// //     const employeeRecords = attendanceRecords.filter(
// //       (record) => record.employeeId === employeeId
// //     );

// //     const present = employeeRecords.filter((record) => record.status === "present").length;
// //     const total = employeeRecords.length;
// //     const rate = total > 0 ? Math.round((present / total) * 100) : 0;

// //     return {
// //       present,
// //       absent: total - present,
// //       total,
// //       rate,
// //     };
// //   };

// //   // Filter employees based on search term and criteria
// //   const filteredEmployees = employees.filter((employee) => {
// //     if (!searchTerm.trim()) return true;

// //     let fieldValue = "";
// //     switch (searchBy) {
// //       case "name":
// //         fieldValue = (employee.name || "").toLowerCase();
// //         break;
// //       case "role":
// //         fieldValue = (employee.role || "").toLowerCase();
// //         break;
// //       case "department":
// //         fieldValue = (employee.department || "").toLowerCase();
// //         break;
// //       case "id":
// //         fieldValue = (employee.id || "").toString().toLowerCase();
// //         break;
// //       default:
// //         fieldValue = (employee.name || "").toLowerCase();
// //     }

// //     return fieldValue.includes(searchTerm.toLowerCase());
// //   });

// //   // Handle employee selection for additional details
// //   const handleEmployeeClick = (employee) => {
// //     setSelectedEmployee(employee);
// //     setIsDetailExpanded(true);
// //   };

// //   // Open attendance recording modal
// //   const openAttendanceModal = () => {
// //     // Initialize attendance status for all employees
// //     const initialStatus = {};
// //     employees.forEach((emp) => {
// //       initialStatus[emp._id] = "present"; // Default status
// //     });
// //     setAttendanceStatus(initialStatus);
// //     setShowAttendanceModal(true);
// //   };

// //   // Handle attendance status change
// //   const handleAttendanceChange = (empId, status) => {
// //     setAttendanceStatus((prev) => ({
// //       ...prev,
// //       [empId]: status,
// //     }));
// //   };

// //   // Save attendance records
// //   const saveAttendance = async () => {
// //     if (!storeId) {
// //       setError("Store ID not available");
// //       return;
// //     }

// //     setIsSavingAttendance(true);

// //     try {
// //       // Format attendance data
// //       const records = Object.keys(attendanceStatus).map((empId) => ({
// //         employeeId: empId,
// //         status: attendanceStatus[empId],
// //         date: new Date().toISOString().split("T")[0],
// //       }));

// //       const response = await fetch("http://localhost:5004/attendance", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           storeId: storeId,
// //         },
// //         body: JSON.stringify(records),
// //       });

// //       if (!response.ok) {
// //         throw new Error("Failed to save attendance");
// //       }

// //       // Show success message
// //       setAttendanceSuccess(true);
// //       setTimeout(() => {
// //         setAttendanceSuccess(false);
// //         setShowAttendanceModal(false);
// //       }, 2000);

// //       // Refresh attendance records
// //       fetchAttendanceRecords();
// //     } catch (error) {
// //       setError(error.message);
// //     } finally {
// //       setIsSavingAttendance(false);
// //     }
// //   };

// //   // Loading animation variants
// //   const loadingVariants = {
// //     animate: {
// //       rotate: 360,
// //       transition: {
// //         repeat: Infinity,
// //         duration: 1,
// //         ease: "linear",
// //       },
// //     },
// //   };

// //   // Empty state animation variants
// //   const emptyStateVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: {
// //         duration: 0.5,
// //         delay: 0.2,
// //       },
// //     },
// //   };

// //   // Format date string
// //   const formatDate = (dateString) => {
// //     if (!dateString) return "N/A";
// //     try {
// //       const date = new Date(dateString);
// //       return date.toLocaleDateString("en-US", {
// //         year: "numeric",
// //         month: "short",
// //         day: "numeric",
// //       });
// //     } catch (e) {
// //       return dateString;
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 p-4 md:p-8 font-sans">
// //       <motion.div
// //         initial={{ opacity: 0, y: -20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5 }}
// //         className="max-w-6xl mx-auto bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden"
// //       >
// //         {/* Header Section with Glassmorphism */}
// //         <div className="relative overflow-hidden">
// //           <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-90"></div>
// //           <div className="relative z-10 px-8 py-12">
// //             <motion.h1
// //               initial={{ opacity: 0, y: -20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.7, delay: 0.2 }}
// //               className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight"
// //             >
// //               Employee Directory
// //             </motion.h1>
// //             <motion.p
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ duration: 0.7, delay: 0.4 }}
// //               className="text-purple-100 text-lg max-w-2xl"
// //             >
// //               Search, manage, and track attendance for your team members
// //             </motion.p>
// //           </div>

// //           {/* Decorative Elements */}
// //           <motion.div
// //             animate={{
// //               rotate: 360,
// //               scale: [1, 1.1, 1],
// //             }}
// //             transition={{
// //               rotate: { repeat: Infinity, duration: 20, ease: "linear" },
// //               scale: { repeat: Infinity, duration: 8, ease: "easeInOut" },
// //             }}
// //             className="absolute -top-16 -right-16 w-64 h-64 bg-pink-400 rounded-full opacity-20 blur-xl"
// //           ></motion.div>
// //           <motion.div
// //             animate={{
// //               rotate: -360,
// //               scale: [1, 1.2, 1],
// //             }}
// //             transition={{
// //               rotate: { repeat: Infinity, duration: 25, ease: "linear" },
// //               scale: { repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 },
// //             }}
// //             className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-500 rounded-full opacity-20 blur-xl"
// //           ></motion.div>
// //         </div>

// //         <div className="p-6 md:p-8">
// //           {/* Action Buttons */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.2 }}
// //             className="flex flex-wrap gap-4 mb-8"
// //           >
// //             <motion.button
// //               whileHover={{ scale: 1.03 }}
// //               whileTap={{ scale: 0.97 }}
// //               onClick={openAttendanceModal}
// //               className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
// //             >
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 className="h-5 w-5"
// //                 fill="none"
// //                 viewBox="0 0 24 24"
// //                 stroke="currentColor"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
// //                 />
// //               </svg>
// //               Record Attendance
// //             </motion.button>

// //             <motion.button
// //               whileHover={{ scale: 1.03 }}
// //               whileTap={{ scale: 0.97 }}
// //               onClick={fetchEmployees}
// //               className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
// //             >
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 className="h-5 w-5"
// //                 fill="none"
// //                 viewBox="0 0 24 24"
// //                 stroke="currentColor"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
// //                 />
// //               </svg>
// //               Refresh Data
// //             </motion.button>
// //           </motion.div>

// //           {/* Search Controls */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.3 }}
// //             className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-8"
// //           >
// //             <h2 className="text-lg font-semibold text-gray-700 mb-3">Search Employees</h2>
// //             <div className="flex flex-col md:flex-row gap-4">
// //               <div className="flex-1 relative">
// //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     className="h-5 w-5 text-gray-400"
// //                     fill="none"
// //                     viewBox="0 0 24 24"
// //                     stroke="currentColor"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth={2}
// //                       d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
// //                     />
// //                   </svg>
// //                 </div>
// //                 <input
// //                   type="text"
// //                   placeholder={`Search by ${searchBy}...`}
// //                   value={searchTerm}
// //                   onChange={(e) => setSearchTerm(e.target.value)}
// //                   className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white shadow-sm"
// //                 />
// //               </div>
// //               <select
// //                 value={searchBy}
// //                 onChange={(e) => setSearchBy(e.target.value)}
// //                 className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm transition-all md:w-48"
// //               >
// //                 <option value="name">Search by Name</option>
// //                 <option value="role">Search by Role</option>
// //                 <option value="department">Search by Department</option>
// //                 <option value="id">Search by ID</option>
// //               </select>
// //             </div>
// //           </motion.div>

// //           {/* Quick Stats */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.4 }}
// //             className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
// //           >
// //             <motion.div
// //               whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
// //               className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200 shadow-sm"
// //             >
// //               <div className="flex items-center justify-between">
// //                 <h3 className="text-blue-700 font-medium">Total Employees</h3>
// //                 <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center">
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     className="h-6 w-6 text-blue-500"
// //                     fill="none"
// //                     viewBox="0 0 24 24"
// //                     stroke="currentColor"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth={2}
// //                       d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
// //                     />
// //                   </svg>
// //                 </div>
// //               </div>
// //               <p className="text-3xl font-bold text-blue-800 mt-2">{employees.length}</p>
// //             </motion.div>

// //             <motion.div
// //               whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
// //               className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200 shadow-sm"
// //             >
// //               <div className="flex items-center justify-between">
// //                 <h3 className="text-green-700 font-medium">Present Today</h3>
// //                 <div className="w-10 h-10 rounded-full bg-green-100 border border-green-200 flex items-center justify-center">
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     className="h-6 w-6 text-green-500"
// //                     fill="none"
// //                     viewBox="0 0 24 24"
// //                     stroke="currentColor"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth={2}
// //                       d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
// //                     />
// //                   </svg>
// //                 </div>
// //               </div>
// //               <p className="text-3xl font-bold text-green-800 mt-2">
// //                 {attendanceRecords.filter(
// //                   (r) =>
// //                     r.status === "present" &&
// //                     new Date(r.timestamp).toDateString() === new Date().toDateString()
// //                 ).length}
// //               </p>
// //             </motion.div>

// //             <motion.div
// //               whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
// //               className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl border border-red-200 shadow-sm"
// //             >
// //               <div className="flex items-center justify-between">
// //                 <h3 className="text-red-700 font-medium">Absent Today</h3>
// //                 <div className="w-10 h-10 rounded-full bg-red-100 border border-red-200 flex items-center justify-center">
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     className="h-6 w-6 text-red-500"
// //                     fill="none"
// //                     viewBox="0 0 24 24"
// //                     stroke="currentColor"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth={2}
// //                       d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
// //                     />
// //                   </svg>
// //                 </div>
// //               </div>
// //               <p className="text-3xl font-bold text-red-800 mt-2">
// //                 {attendanceRecords.filter(
// //                   (r) =>
// //                     r.status === "absent" &&
// //                     new Date(r.timestamp).toDateString() === new Date().toDateString()
// //                 ).length}
// //               </p>
// //             </motion.div>

// //             <motion.div
// //               whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
// //               className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200 shadow-sm"
// //             >
// //               <div className="flex items-center justify-between">
// //                 <h3 className="text-purple-700 font-medium">Attendance Rate</h3>
// //                 <div className="w-10 h-10 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center">
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     className="h-6 w-6 text-purple-500"
// //                     fill="none"
// //                     viewBox="0 0 24 24"
// //                     stroke="currentColor"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth={2}
// //                       d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
// //                     />
// //                   </svg>
// //                 </div>
// //               </div>
// //               <p className="text-3xl font-bold text-purple-800 mt-2">
// //                 {attendanceRecords.length > 0
// //                   ? Math.round(
// //                       (attendanceRecords.filter((r) => r.status === "present").length /
// //                         attendanceRecords.length) *
// //                         100
// //                     )
// //                   : 0}
// //                 %
// //               </p>
// //             </motion.div>
// //           </motion.div>

// //           {/* Loading and Error Messages */}
// //           <AnimatePresence>
// //             {loading && (
// //               <motion.div
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 exit={{ opacity: 0 }}
// //                 className="flex justify-center items-center py-8"
// //               >
// //                 <motion.div
// //                   variants={loadingVariants}
// //                   animate="animate"
// //                   className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full"
// //                 ></motion.div>
// //                 <span className="ml-3 text-gray-600 font-medium">Loading employees...</span>
// //               </motion.div>
// //             )}
// //           </AnimatePresence>

// //           <AnimatePresence>
// //             {error && (
// //               <motion.div
// //                 initial={{ opacity: 0, y: -10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: -10 }}
// //                 className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded"
// //               >
// //                 <div className="flex items-center">
// //                   <div className="flex-shrink-0">
// //                     <svg
// //                       xmlns="http://www.w3.org/2000/svg"
// //                       className="h-5 w-5 text-red-500"
// //                       fill="none"
// //                       viewBox="0 0 24 24"
// //                       stroke="currentColor"
// //                     >
// //                       <path
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                         strokeWidth={2}
// //                         d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// //                       />
// //                     </svg>
// //                   </div>
// //                   <div className="ml-3">
// //                     <p className="text-red-700">{error}</p>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             )}
// //           </AnimatePresence>

// //           {/* Empty State */}
// //           <AnimatePresence>
// //             {!loading && filteredEmployees.length === 0 && (
// //               <motion.div
// //                 variants={emptyStateVariants}
// //                 initial="hidden"
// //                 animate="visible"
// //                 exit={{ opacity: 0, y: 20 }}
// //                 className="text-center py-12 bg-gray-50 rounded-xl border border-gray-200"
// //               >
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   className="h-16 w-16 mx-auto text-gray-300 mb-4"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
// //                   />
// //                 </svg>
// //                 <h3 className="text-lg font-medium text-gray-600">No employees found</h3>
// //                 <p className="text-gray-500 mt-1">Try adjusting your search criteria or refresh the list</p>
// //               </motion.div>
// //             )}
// //           </AnimatePresence>

// //           {/* Employee Table with Staggered Animation */}
// //           <AnimatePresence>
// //             {!loading && filteredEmployees.length > 0 && (
// //               <motion.div
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 exit={{ opacity: 0 }}
// //                 className="overflow-x-auto rounded-xl shadow border border-gray-100"
// //               >
// //                 <table className="w-full table-auto">
// //                   <thead>
// //                     <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm uppercase tracking-wider">
// //                       <th className="px-6 py-4 text-left font-semibold">Employee</th>
// //                       <th className="px-6 py-4 text-left font-semibold">ID</th>
// //                       <th className="px-6 py-4 text-left font-semibold">Department</th>
// //                       <th className="px-6 py-4 text-left font-semibold">Attendance</th>
// //                       <th className="px-6 py-4 text-left font-semibold">Actions</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {filteredEmployees.map((employee, index) => {
// //                       const stats = getAttendanceStats(employee._id);

// //                       return (
// //                         <motion.tr
// //                           key={employee._id}
// //                           initial={{ opacity: 0, y: 10 }}
// //                           animate={{ opacity: 1, y: 0 }}
// //                           transition={{
// //                             duration: 0.3,
// //                             delay: index * 0.05,
// //                             ease: "easeOut",
// //                           }}
// //                           className={`${
// //                             selectedEmployee?._id === employee._id
// //                               ? "bg-purple-50"
// //                               : index % 2 === 0
// //                               ? "bg-white"
// //                               : "bg-gray-50"
// //                           } hover:bg-indigo-50 transition-all duration-150`}
// //                         >
// //                           <td className="px-6 py-4 border-b border-gray-100">
// //                             <div className="flex items-center">
// //                               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-medium mr-3 overflow-hidden">
// //                                 {employee.image ? (
// //                                   <img
// //                                     src={`http://localhost:5004/uploads/${employee.image}`}
// //                                     alt={employee.name}
// //                                     className="w-full h-full object-cover"
// //                                     onError={(e) => {
// //                                       e.target.onerror = null;
// //                                       e.target.style.display = "none";
// //                                       e.target.parentNode.innerText =
// //                                         employee.name?.charAt(0) || "?";
// //                                     }}
// //                                   />
// //                                 ) : (
// //                                   employee.name?.charAt(0) || "?"
// //                                 )}
// //                               </div>
// //                               <div>
// //                                 <span className="font-medium text-gray-800 block">
// //                                   {employee.name}
// //                                 </span>
// //                                 <span className="text-sm text-gray-500">
// //                                   {employee.role || "No Role"}
// //                                 </span>
// //                               </div>
// //                             </div>
// //                           </td>
// //                           <td className="px-6 py-4 border-b border-gray-100 text-gray-800">
// //                             {employee.id || "N/A"}
// //                           </td>
// //                           <td className="px-6 py-4 border-b border-gray-100">
// //                             <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
// //                               {employee.department || "Unassigned"}
// //                             </span>
// //                           </td>
// //                           <td className="px-6 py-4 border-b border-gray-100">
// //                             <div className="flex items-center">
// //                               <div className="w-full max-w-xs bg-gray-200 rounded-full h-2.5 mr-2">
// //                                 <div
// //                                   className="bg-green-600 h-2.5 rounded-full"
// //                                   style={{ width: `${stats.rate}%` }}
// //                                 ></div>
// //                               </div>
// //                               <span className="text-sm font-medium text-gray-700">
// //                                 {stats.rate}%
// //                               </span>
// //                             </div>
// //                             <span className="text-xs text-gray-500">
// //                               {stats.present} present / {stats.total} total
// //                             </span>
// //                           </td>
// //                           <td className="px-6 py-4 border-b border-gray-100">
// //                             <motion.button
// //                               whileHover={{ scale: 1.05 }}
// //                               whileTap={{ scale: 0.95 }}
// //                               className={`px-4 py-2 ${
// //                                 selectedEmployee?._id === employee._id
// //                                   ? "bg-purple-600 hover:bg-purple-700"
// //                                   : "bg-indigo-600 hover:bg-indigo-700"
// //                               } text-white rounded-lg transition-all shadow hover:shadow-md flex items-center gap-2`}
// //                               onClick={() => handleEmployeeClick(employee)}
// //                             >
// //                               <svg
// //                                 xmlns="http://www.w3.org/2000/svg"
// //                                 className="h-4 w-4"
// //                                 fill="none"
// //                                 viewBox="0 0 24 24"
// //                                 stroke="currentColor"
// //                               >
// //                                 <path
// //                                   strokeLinecap="round"
// //                                   strokeLinejoin="round"
// //                                   strokeWidth={2}
// //                                   d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
// //                                 />
// //                                 <path
// //                                   strokeLinecap="round"
// //                                   strokeLinejoin="round"
// //                                   strokeWidth={2}
// //                                   d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
// //                                 />
// //                               </svg>
// //                               View Details
// //                             </motion.button>
// //                           </td>
// //                         </motion.tr>
// //                       );
// //                     })}
// //                   </tbody>
// //                 </table>
// //               </motion.div>
// //             )}
// //           </AnimatePresence>

// //           {/* Employee Detail Card with Animated Expansion */}
// //           <AnimatePresence>
// //             {selectedEmployee && (
// //               <motion.div
// //                 initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                 animate={{
// //                   opacity: 1,
// //                   height: "auto",
// //                   marginTop: 32,
// //                   transition: {
// //                     duration: 0.5,
// //                     height: { duration: 0.4 },
// //                   },
// //                 }}
// //                 exit={{
// //                   opacity: 0,
// //                   height: 0,
// //                   marginTop: 0,
// //                   transition: {
// //                     duration: 0.3,
// //                     opacity: { duration: 0.2 },
// //                   },
// //                 }}
// //                 className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden"
// //               >
// //                 <div className="p-6 md:p-8">
// //                   <div className="flex flex-col md:flex-row gap-8">
// //                     {/* Employee Image */}
// //                     <motion.div
// //                       initial={{ opacity: 0, scale: 0.8 }}
// //                       animate={{ opacity: 1, scale: 1 }}
// //                       transition={{ delay: 0.2, duration: 0.5 }}
// //                       className="w-full md:w-1/3 flex justify-center"
// //                     >
// //                       <div className="relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
// //                         <img
// //                           src={`http://localhost:5004/uploads/${selectedEmployee.image}`}
// //                           alt={selectedEmployee.name}
// //                           onError={(e) => {
// //                             e.target.onerror = null;
// //                             e.target.src =
// //                               "https://via.placeholder.com/200?text=No+Image";
// //                           }}
// //                           className="w-48 h-48 md:w-full md:h-auto object-cover rounded-lg"
// //                         />
// //                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
// //                           <div className="p-4 text-white">
// //                             <p className="font-bold">{selectedEmployee.name}</p>
// //                             <p className="text-sm opacity-90">
// //                               {selectedEmployee.role || "No Role"}
// //                             </p>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </motion.div>

// //                     {/* Employee Details */}
// //                     <motion.div
// //                       initial={{ opacity: 0, x: 20 }}
// //                       animate={{ opacity: 1, x: 0 }}
// //                       transition={{ delay: 0.3, duration: 0.5 }}
// //                       className="flex-1"
// //                     >
// //                       <div className="flex justify-between items-start mb-4">
// //                         <div>
// //                           <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
// //                             {selectedEmployee.name}
// //                           </h2>
// //                           <p className="text-purple-600 font-medium">
// //                             {selectedEmployee.role || "No Role Assigned"}
// //                           </p>
// //                         </div>
// //                         <motion.button
// //                           whileHover={{ scale: 1.05 }}
// //                           whileTap={{ scale: 0.95 }}
// //                           onClick={() => setSelectedEmployee(null)}
// //                           className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
// //                         >
// //                           <svg
// //                             xmlns="http://www.w3.org/2000/svg"
// //                             className="h-5 w-5 text-gray-500"
// //                             viewBox="0 0 20 20"
// //                             fill="currentColor"
// //                           >
// //                             <path
// //                               fillRule="evenodd"
// //                               d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
// //                               clipRule="evenodd"
// //                             />
// //                           </svg>
// //                         </motion.button>
// //                       </div>

// //                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                         <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
// //                           <h3 className="text-sm font-medium text-gray-500 mb-2">
// //                             Employee ID
// //                           </h3>
// //                           <p className="text-lg font-semibold text-gray-800">
// //                             {selectedEmployee.id || "N/A"}
// //                           </p>
// //                         </div>

// //                         <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
// //                           <h3 className="text-sm font-medium text-gray-500 mb-2">
// //                             Department
// //                           </h3>
// //                           <p className="text-lg font-semibold text-gray-800">
// //                             {selectedEmployee.department || "N/A"}
// //                           </p>
// //                         </div>

// //                         <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
// //                           <h3 className="text-sm font-medium text-gray-500 mb-2">
// //                             Contact
// //                           </h3>
// //                           <p className="text-lg font-semibold text-gray-800">
// //                             {selectedEmployee.email || "No Email"}
// //                           </p>
// //                         </div>

// //                         <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
// //                           <h3 className="text-sm font-medium text-gray-500 mb-2">
// //                             Joined
// //                           </h3>
// //                           <p className="text-lg font-semibold text-gray-800">
// //                             {selectedEmployee.joinDate || "Not Available"}
// //                           </p>
// //                         </div>
// //                       </div>

// //                       <div className="mt-6 flex gap-3">
// //                         <motion.button
// //                           whileHover={{ scale: 1.03 }}
// //                           whileTap={{ scale: 0.97 }}
// //                           className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow transition-all flex items-center gap-2"
// //                         >
// //                           <svg
// //                             xmlns="http://www.w3.org/2000/svg"
// //                             className="h-4 w-4"
// //                             fill="none"
// //                             viewBox="0 0 24 24"
// //                             stroke="currentColor"
// //                           >
// //                             <path
// //                               strokeLinecap="round"
// //                               strokeLinejoin="round"
// //                               strokeWidth={2}
// //                               d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
// //                             />
// //                           </svg>
// //                           Contact
// //                         </motion.button>

// //                         <motion.button
// //                           whileHover={{ scale: 1.03 }}
// //                           whileTap={{ scale: 0.97 }}
// //                           className="px-4 py-2 border border-gray-300 hover:border-gray-400 bg-white text-gray-700 rounded-lg shadow-sm transition-all flex items-center gap-2"
// //                         >
// //                           <svg
// //                             xmlns="http://www.w3.org/2000/svg"
// //                             className="h-4 w-4"
// //                             fill="none"
// //                             viewBox="0 0 24 24"
// //                             stroke="currentColor"
// //                           >
// //                             <path
// //                               strokeLinecap="round"
// //                               strokeLinejoin="round"
// //                               strokeWidth={2}
// //                               d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
// //                             />
// //                           </svg>
// //                           Edit Profile
// //                         </motion.button>
// //                       </div>
// //                     </motion.div>
// //                   </div>
// //                 </div>

// //                 {/* Footer with Stats */}
// //                 <motion.div
// //                   initial={{ opacity: 0 }}
// //                   animate={{ opacity: 1 }}
// //                   transition={{ delay: 0.5 }}
// //                   className="bg-gray-50 border-t border-gray-200 p-6"
// //                 >
// //                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //                     <div className="text-center">
// //                       <p className="text-gray-500 text-sm">Projects</p>
// //                       <p className="text-xl font-bold text-indigo-600">
// //                         {selectedEmployee.projects || 0}
// //                       </p>
// //                     </div>
// //                     <div className="text-center">
// //                       <p className="text-gray-500 text-sm">Tasks</p>
// //                       <p className="text-xl font-bold text-indigo-600">
// //                         {selectedEmployee.tasks || 0}
// //                       </p>
// //                     </div>
// //                     <div className="text-center">
// //                       <p className="text-gray-500 text-sm">Performance</p>
// //                       <p className="text-xl font-bold text-indigo-600">
// //                         {selectedEmployee.performance || "N/A"}
// //                       </p>
// //                     </div>
// //                     <div className="text-center">
// //                       <p className="text-gray-500 text-sm">Team</p>
// //                       <p className="text-xl font-bold text-indigo-600">
// //                         {selectedEmployee.team || "N/A"}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               </motion.div>
// //             )}
// //           </AnimatePresence>
// //         </div>

// //         {/* Footer */}
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ delay: 0.6 }}
// //           className="px-8 py-4 bg-gray-50 border-t border-gray-200 text-center text-gray-500 text-sm"
// //         >
// //           Employee Directory • {new Date().getFullYear()} • Your Company Name
// //         </motion.div>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default EmployeeSearch;
// import React, { useState, useEffect, useContext } from "react";
// import { StoreContext } from "./StoreContext";
// import { motion, AnimatePresence } from "framer-motion";

// const EmployeeSearch = () => {
//   const { storeId } = useContext(StoreContext);
//   const [employees, setEmployees] = useState([]);
//   const [attendanceRecords, setAttendanceRecords] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchBy, setSearchBy] = useState("name");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [isDetailExpanded, setIsDetailExpanded] = useState(false);
//   const [showAttendanceModal, setShowAttendanceModal] = useState(false);
//   const [attendanceStatus, setAttendanceStatus] = useState({});
//   const [isSavingAttendance, setIsSavingAttendance] = useState(false);
//   const [attendanceSuccess, setAttendanceSuccess] = useState(false);

//   // Fetch employees from the backend
//   const fetchEmployees = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch("http://localhost:5004/employees", {
//         headers: {
//           storeId: storeId,
//         },
//       });
//       if (!response.ok) {
//         throw new Error("Failed to fetch employees");
//       }
//       const data = await response.json();
//       setEmployees(data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch attendance records
//   const fetchAttendanceRecords = async () => {
//     if (!storeId) return;

//     try {
//       const response = await fetch("http://localhost:5004/attendance", {
//         headers: {
//           storeId: storeId,
//         },
//       });
//       if (!response.ok) {
//         throw new Error("Failed to fetch attendance records");
//       }
//       const data = await response.json();
//       setAttendanceRecords(data);
//     } catch (error) {
//       console.error("Error fetching attendance:", error);
//     }
//   };

//   useEffect(() => {
//     if (storeId) {
//       fetchEmployees();
//       fetchAttendanceRecords();
//     }
//   }, [storeId]);

//   // Calculate attendance statistics for an employee
//   const getAttendanceStats = (employeeId) => {
//     if (!attendanceRecords.length) return { present: 0, absent: 0, total: 0, rate: 0 };

//     const employeeRecords = attendanceRecords.filter(
//       (record) => record.employeeId === employeeId
//     );

//     const present = employeeRecords.filter((record) => record.status === "present").length;
//     const total = employeeRecords.length;
//     const rate = total > 0 ? Math.round((present / total) * 100) : 0;

//     return {
//       present,
//       absent: total - present,
//       total,
//       rate,
//     };
//   };

//   // Filter employees based on search term and criteria
//   const filteredEmployees = employees.filter((employee) => {
//     if (!searchTerm.trim()) return true;

//     let fieldValue = "";
//     switch (searchBy) {
//       case "name":
//         fieldValue = (employee.name || "").toLowerCase();
//         break;
//       case "role":
//         fieldValue = (employee.role || "").toLowerCase();
//         break;
//       case "department":
//         fieldValue = (employee.department || "").toLowerCase();
//         break;
//       case "id":
//         fieldValue = (employee.id || "").toString().toLowerCase();
//         break;
//       default:
//         fieldValue = (employee.name || "").toLowerCase();
//     }

//     return fieldValue.includes(searchTerm.toLowerCase());
//   });

//   // Handle employee selection for additional details
//   const handleEmployeeClick = (employee) => {
//     setSelectedEmployee(employee);
//     setIsDetailExpanded(true);
//   };

//   // Open attendance recording modal
//   const openAttendanceModal = () => {
//     // Initialize attendance status for all employees
//     const initialStatus = {};
//     employees.forEach((emp) => {
//       initialStatus[emp._id] = "present"; // Default status
//     });
//     setAttendanceStatus(initialStatus);
//     setShowAttendanceModal(true);
//   };

//   // Handle attendance status change
//   const handleAttendanceChange = (empId, status) => {
//     setAttendanceStatus((prev) => ({
//       ...prev,
//       [empId]: status,
//     }));
//   };

//   // Save attendance records
//   const saveAttendance = async () => {
//     if (!storeId) {
//       setError("Store ID not available");
//       return;
//     }

//     setIsSavingAttendance(true);

//     try {
//       // Format attendance data
//       const records = Object.keys(attendanceStatus).map((empId) => ({
//         employeeId: empId,
//         status: attendanceStatus[empId],
//         date: new Date().toISOString().split("T")[0],
//       }));

//       const response = await fetch("http://localhost:5004/attendance", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           storeId: storeId,
//         },
//         body: JSON.stringify(records),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to save attendance");
//       }

//       // Show success message
//       setAttendanceSuccess(true);
//       setTimeout(() => {
//         setAttendanceSuccess(false);
//         setShowAttendanceModal(false);
//       }, 2000);

//       // Refresh attendance records
//       fetchAttendanceRecords();
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsSavingAttendance(false);
//     }
//   };

//   // Edit employee details
//   const editEmployee = async (employeeId, updatedData) => {
//     try {
//       const response = await fetch(`http://localhost:5004/employees/${employeeId}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           storeId: storeId,
//         },
//         body: JSON.stringify(updatedData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to update employee");
//       }

//       // Refresh employee list
//       fetchEmployees();
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   // Delete employee
//   const deleteEmployee = async (employeeId) => {
//     try {
//       const response = await fetch(`http://localhost:5004/employees/${employeeId}`, {
//         method: "DELETE",
//         headers: {
//           storeId: storeId,
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to delete employee");
//       }

//       // Refresh employee list
//       fetchEmployees();
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   // Loading animation variants
//   const loadingVariants = {
//     animate: {
//       rotate: 360,
//       transition: {
//         repeat: Infinity,
//         duration: 1,
//         ease: "linear",
//       },
//     },
//   };

//   // Empty state animation variants
//   const emptyStateVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         delay: 0.2,
//       },
//     },
//   };

//   // Format date string
//   const formatDate = (dateString) => {
//     if (!dateString) return "N/A";
//     try {
//       const date = new Date(dateString);
//       return date.toLocaleDateString("en-US", {
//         year: "numeric",
//         month: "short",
//         day: "numeric",
//       });
//     } catch (e) {
//       return dateString;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 p-4 md:p-8 font-sans">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-6xl mx-auto bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden"
//       >
//         {/* Header Section with Glassmorphism */}
//         <div className="relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-90"></div>
//           <div className="relative z-10 px-8 py-12">
//             <motion.h1
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight"
//             >
//               Employee Directory
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.7, delay: 0.4 }}
//               className="text-purple-100 text-lg max-w-2xl"
//             >
//               Search, manage, and track attendance for your team members
//             </motion.p>
//           </div>

//           {/* Decorative Elements */}
//           <motion.div
//             animate={{
//               rotate: 360,
//               scale: [1, 1.1, 1],
//             }}
//             transition={{
//               rotate: { repeat: Infinity, duration: 20, ease: "linear" },
//               scale: { repeat: Infinity, duration: 8, ease: "easeInOut" },
//             }}
//             className="absolute -top-16 -right-16 w-64 h-64 bg-pink-400 rounded-full opacity-20 blur-xl"
//           ></motion.div>
//           <motion.div
//             animate={{
//               rotate: -360,
//               scale: [1, 1.2, 1],
//             }}
//             transition={{
//               rotate: { repeat: Infinity, duration: 25, ease: "linear" },
//               scale: { repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 },
//             }}
//             className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-500 rounded-full opacity-20 blur-xl"
//           ></motion.div>
//         </div>

//         <div className="p-6 md:p-8">
//           {/* Action Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="flex flex-wrap gap-4 mb-8"
//           >
//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//               onClick={openAttendanceModal}
//               className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
//                 />
//               </svg>
//               Record Attendance
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//               onClick={fetchEmployees}
//               className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
//                 />
//               </svg>
//               Refresh Data
//             </motion.button>
//           </motion.div>

//           {/* Search Controls */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-8"
//           >
//             <h2 className="text-lg font-semibold text-gray-700 mb-3">Search Employees</h2>
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="flex-1 relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-gray-400"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                     />
//                   </svg>
//                 </div>
//                 <input
//                   type="text"
//                   placeholder={`Search by ${searchBy}...`}
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white shadow-sm"
//                 />
//               </div>
//               <select
//                 value={searchBy}
//                 onChange={(e) => setSearchBy(e.target.value)}
//                 className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm transition-all md:w-48"
//               >
//                 <option value="name">Search by Name</option>
//                 <option value="role">Search by Role</option>
//                 <option value="department">Search by Department</option>
//                 <option value="id">Search by ID</option>
//               </select>
//             </div>
//           </motion.div>

//           {/* Quick Stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
//           >
//             <motion.div
//               whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
//               className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200 shadow-sm"
//             >
//               <div className="flex items-center justify-between">
//                 <h3 className="text-blue-700 font-medium">Total Employees</h3>
//                 <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 text-blue-500"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//                     />
//                   </svg>
//                 </div>
//               </div>
//               <p className="text-3xl font-bold text-blue-800 mt-2">{employees.length}</p>
//             </motion.div>

//             <motion.div
//               whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
//               className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200 shadow-sm"
//             >
//               <div className="flex items-center justify-between">
//                 <h3 className="text-green-700 font-medium">Present Today</h3>
//                 <div className="w-10 h-10 rounded-full bg-green-100 border border-green-200 flex items-center justify-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 text-green-500"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                 </div>
//               </div>
//               <p className="text-3xl font-bold text-green-800 mt-2">
//                 {attendanceRecords.filter(
//                   (r) =>
//                     r.status === "present" &&
//                     new Date(r.timestamp).toDateString() === new Date().toDateString()
//                 ).length}
//               </p>
//             </motion.div>

//             <motion.div
//               whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
//               className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl border border-red-200 shadow-sm"
//             >
//               <div className="flex items-center justify-between">
//                 <h3 className="text-red-700 font-medium">Absent Today</h3>
//                 <div className="w-10 h-10 rounded-full bg-red-100 border border-red-200 flex items-center justify-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 text-red-500"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                 </div>
//               </div>
//               <p className="text-3xl font-bold text-red-800 mt-2">
//                 {attendanceRecords.filter(
//                   (r) =>
//                     r.status === "absent" &&
//                     new Date(r.timestamp).toDateString() === new Date().toDateString()
//                 ).length}
//               </p>
//             </motion.div>

//             <motion.div
//               whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
//               className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200 shadow-sm"
//             >
//               <div className="flex items-center justify-between">
//                 <h3 className="text-purple-700 font-medium">Attendance Rate</h3>
//                 <div className="w-10 h-10 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 text-purple-500"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//                     />
//                   </svg>
//                 </div>
//               </div>
//               <p className="text-3xl font-bold text-purple-800 mt-2">
//                 {attendanceRecords.length > 0
//                   ? Math.round(
//                       (attendanceRecords.filter((r) => r.status === "present").length /
//                         attendanceRecords.length) *
//                         100
//                     )
//                   : 0}
//                 %
//               </p>
//             </motion.div>
//           </motion.div>

//           {/* Loading and Error Messages */}
//           <AnimatePresence>
//             {loading && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="flex justify-center items-center py-8"
//               >
//                 <motion.div
//                   variants={loadingVariants}
//                   animate="animate"
//                   className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full"
//                 ></motion.div>
//                 <span className="ml-3 text-gray-600 font-medium">Loading employees...</span>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           <AnimatePresence>
//             {error && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded"
//               >
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5 text-red-500"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                       />
//                     </svg>
//                   </div>
//                   <div className="ml-3">
//                   <p className="text-red-700">{error}</p>
//                                     </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Empty State */}
//           <AnimatePresence>
//             {!loading && filteredEmployees.length === 0 && (
//               <motion.div
//                 variants={emptyStateVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit={{ opacity: 0, y: 20 }}
//                 className="text-center py-12 bg-gray-50 rounded-xl border border-gray-200"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-16 w-16 mx-auto text-gray-300 mb-4"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
//                   />
//                 </svg>
//                 <h3 className="text-lg font-medium text-gray-600">No employees found</h3>
//                 <p className="text-gray-500 mt-1">Try adjusting your search criteria or refresh the list</p>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Employee Table with Staggered Animation */}
//           <AnimatePresence>
//             {!loading && filteredEmployees.length > 0 && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="overflow-x-auto rounded-xl shadow border border-gray-100"
//               >
//                 <table className="w-full table-auto">
//                   <thead>
//                     <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm uppercase tracking-wider">
//                       <th className="px-6 py-4 text-left font-semibold">Employee</th>
//                       <th className="px-6 py-4 text-left font-semibold">ID</th>
//                       <th className="px-6 py-4 text-left font-semibold">Department</th>
//                       <th className="px-6 py-4 text-left font-semibold">Attendance</th>
//                       <th className="px-6 py-4 text-left font-semibold">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {filteredEmployees.map((employee, index) => {
//                       const stats = getAttendanceStats(employee._id);

//                       return (
//                         <motion.tr
//                           key={employee._id}
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{
//                             duration: 0.3,
//                             delay: index * 0.05,
//                             ease: "easeOut",
//                           }}
//                           className={`${
//                             selectedEmployee?._id === employee._id
//                               ? "bg-purple-50"
//                               : index % 2 === 0
//                               ? "bg-white"
//                               : "bg-gray-50"
//                           } hover:bg-indigo-50 transition-all duration-150`}
//                         >
//                           <td className="px-6 py-4 border-b border-gray-100">
//                             <div className="flex items-center">
//                               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-medium mr-3 overflow-hidden">
//                                 {employee.image ? (
//                                   <img
//                                     src={`http://localhost:5004/uploads/${employee.image}`}
//                                     alt={employee.name}
//                                     className="w-full h-full object-cover"
//                                     onError={(e) => {
//                                       e.target.onerror = null;
//                                       e.target.style.display = "none";
//                                       e.target.parentNode.innerText =
//                                         employee.name?.charAt(0) || "?";
//                                     }}
//                                   />
//                                 ) : (
//                                   employee.name?.charAt(0) || "?"
//                                 )}
//                               </div>
//                               <div>
//                                 <span className="font-medium text-gray-800 block">
//                                   {employee.name}
//                                 </span>
//                                 <span className="text-sm text-gray-500">
//                                   {employee.role || "No Role"}
//                                 </span>
//                               </div>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 border-b border-gray-100 text-gray-800">
//                             {employee.id || "N/A"}
//                           </td>
//                           <td className="px-6 py-4 border-b border-gray-100">
//                             <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
//                               {employee.department || "Unassigned"}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 border-b border-gray-100">
//                             <div className="flex items-center">
//                               <div className="w-full max-w-xs bg-gray-200 rounded-full h-2.5 mr-2">
//                                 <div
//                                   className="bg-green-600 h-2.5 rounded-full"
//                                   style={{ width: `${stats.rate}%` }}
//                                 ></div>
//                               </div>
//                               <span className="text-sm font-medium text-gray-700">
//                                 {stats.rate}%
//                               </span>
//                             </div>
//                             <span className="text-xs text-gray-500">
//                               {stats.present} present / {stats.total} total
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 border-b border-gray-100">
//                             <motion.button
//                               whileHover={{ scale: 1.05 }}
//                               whileTap={{ scale: 0.95 }}
//                               className={`px-4 py-2 ${
//                                 selectedEmployee?._id === employee._id
//                                   ? "bg-purple-600 hover:bg-purple-700"
//                                   : "bg-indigo-600 hover:bg-indigo-700"
//                               } text-white rounded-lg transition-all shadow hover:shadow-md flex items-center gap-2`}
//                               onClick={() => handleEmployeeClick(employee)}
//                             >
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-4 w-4"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   strokeWidth={2}
//                                   d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                                 />
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   strokeWidth={2}
//                                   d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                                 />
//                               </svg>
//                               View Details
//                             </motion.button>
//                           </td>
//                         </motion.tr>
//                       );
//                     })}
//                   </tbody>
//                 </table>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Employee Detail Card with Animated Expansion */}
//           <AnimatePresence>
//             {selectedEmployee && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                 animate={{
//                   opacity: 1,
//                   height: "auto",
//                   marginTop: 32,
//                   transition: {
//                     duration: 0.5,
//                     height: { duration: 0.4 },
//                   },
//                 }}
//                 exit={{
//                   opacity: 0,
//                   height: 0,
//                   marginTop: 0,
//                   transition: {
//                     duration: 0.3,
//                     opacity: { duration: 0.2 },
//                   },
//                 }}
//                 className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden"
//               >
//                 <div className="p-6 md:p-8">
//                   <div className="flex flex-col md:flex-row gap-8">
//                     {/* Employee Image */}
//                     <motion.div
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ delay: 0.2, duration: 0.5 }}
//                       className="w-full md:w-1/3 flex justify-center"
//                     >
//                       <div className="relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
//                         <img
//                           src={`http://localhost:5004/uploads/${selectedEmployee.image}`}
//                           alt={selectedEmployee.name}
//                           onError={(e) => {
//                             e.target.onerror = null;
//                             e.target.src =
//                               "https://via.placeholder.com/200?text=No+Image";
//                           }}
//                           className="w-48 h-48 md:w-full md:h-auto object-cover rounded-lg"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
//                           <div className="p-4 text-white">
//                             <p className="font-bold">{selectedEmployee.name}</p>
//                             <p className="text-sm opacity-90">
//                               {selectedEmployee.role || "No Role"}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>

//                     {/* Employee Details */}
//                     <motion.div
//                       initial={{ opacity: 0, x: 20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.3, duration: 0.5 }}
//                       className="flex-1"
//                     >
//                       <div className="flex justify-between items-start mb-4">
//                         <div>
//                           <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
//                             {selectedEmployee.name}
//                           </h2>
//                           <p className="text-purple-600 font-medium">
//                             {selectedEmployee.role || "No Role Assigned"}
//                           </p>
//                         </div>
//                         <motion.button
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           onClick={() => setSelectedEmployee(null)}
//                           className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5 text-gray-500"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                         </motion.button>
//                       </div>

//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
//                           <h3 className="text-sm font-medium text-gray-500 mb-2">
//                             Employee ID
//                           </h3>
//                           <p className="text-lg font-semibold text-gray-800">
//                             {selectedEmployee.id || "N/A"}
//                           </p>
//                         </div>

//                         <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
//                           <h3 className="text-sm font-medium text-gray-500 mb-2">
//                             Department
//                           </h3>
//                           <p className="text-lg font-semibold text-gray-800">
//                             {selectedEmployee.department || "N/A"}
//                           </p>
//                         </div>

//                         <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
//                           <h3 className="text-sm font-medium text-gray-500 mb-2">
//                             Contact
//                           </h3>
//                           <p className="text-lg font-semibold text-gray-800">
//                             {selectedEmployee.email || "No Email"}
//                           </p>
//                         </div>

//                         <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
//                           <h3 className="text-sm font-medium text-gray-500 mb-2">
//                             Joined
//                           </h3>
//                           <p className="text-lg font-semibold text-gray-800">
//                             {selectedEmployee.joinDate || "Not Available"}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="mt-6 flex gap-3">
//                         <motion.button
//                           whileHover={{ scale: 1.03 }}
//                           whileTap={{ scale: 0.97 }}
//                           className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow transition-all flex items-center gap-2"
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-4 w-4"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                             />
//                           </svg>
//                           Contact
//                         </motion.button>

//                         <motion.button
//                           whileHover={{ scale: 1.03 }}
//                           whileTap={{ scale: 0.97 }}
//                           onClick={() => {
//                             // Open edit modal or form
//                             const updatedData = {
//                               name: "Updated Name",
//                               role: "Updated Role",
//                               department: "Updated Department",
//                             };
//                             editEmployee(selectedEmployee._id, updatedData);
//                           }}
//                           className="px-4 py-2 border border-gray-300 hover:border-gray-400 bg-white text-gray-700 rounded-lg shadow-sm transition-all flex items-center gap-2"
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-4 w-4"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
//                             />
//                           </svg>
//                           Edit Profile
//                         </motion.button>

//                         <motion.button
//                           whileHover={{ scale: 1.03 }}
//                           whileTap={{ scale: 0.97 }}
//                           onClick={() => deleteEmployee(selectedEmployee._id)}
//                           className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow transition-all flex items-center gap-2"
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-4 w-4"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//                             />
//                           </svg>
//                           Delete
//                         </motion.button>
//                       </div>
//                     </motion.div>
//                   </div>
//                 </div>

//                 {/* Footer with Stats */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.5 }}
//                   className="bg-gray-50 border-t border-gray-200 p-6"
//                 >
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                     <div className="text-center">
//                       <p className="text-gray-500 text-sm">Projects</p>
//                       <p className="text-xl font-bold text-indigo-600">
//                         {selectedEmployee.projects || 0}
//                       </p>
//                     </div>
//                     <div className="text-center">
//                       <p className="text-gray-500 text-sm">Tasks</p>
//                       <p className="text-xl font-bold text-indigo-600">
//                         {selectedEmployee.tasks || 0}
//                       </p>
//                     </div>
//                     <div className="text-center">
//                       <p className="text-gray-500 text-sm">Performance</p>
//                       <p className="text-xl font-bold text-indigo-600">
//                         {selectedEmployee.performance || "N/A"}
//                       </p>
//                     </div>
//                     <div className="text-center">
//                       <p className="text-gray-500 text-sm">Team</p>
//                       <p className="text-xl font-bold text-indigo-600">
//                         {selectedEmployee.team || "N/A"}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Attendance Modal */}
//           <AnimatePresence>
//             {showAttendanceModal && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
//               >
//                 <motion.div
//                   initial={{ scale: 0.8 }}
//                   animate={{ scale: 1 }}
//                   exit={{ scale: 0.8 }}
//                   className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6"
//                 >
//                   <h2 className="text-xl font-semibold mb-4">Record Attendance</h2>
//                   <div className="space-y-4">
//                     {employees.map((employee) => (
//                       <div key={employee._id} className="flex items-center justify-between">
//                         <span>{employee.name}</span>
//                         <select
//                           value={attendanceStatus[employee._id]}
//                           onChange={(e) =>
//                             handleAttendanceChange(employee._id, e.target.value)
//                           }
//                           className="px-3 py-1 border border-gray-300 rounded-lg"
//                         >
//                           <option value="present">Present</option>
//                           <option value="absent">Absent</option>
//                         </select>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="mt-6 flex justify-end gap-3">
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => setShowAttendanceModal(false)}
//                       className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
//                     >
//                       Cancel
//                     </motion.button>
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={saveAttendance}
//                       disabled={isSavingAttendance}
//                       className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
//                     >
//                       {isSavingAttendance ? "Saving..." : "Save Attendance"}
//                     </motion.button>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Footer */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//           className="px-8 py-4 bg-gray-50 border-t border-gray-200 text-center text-gray-500 text-sm"
//         >
//           Employee Directory • {new Date().getFullYear()} • Your Company Name
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default EmployeeSearch;

import React, { useState, useEffect, useContext } from "react";
import { StoreContext } from "./StoreContext";
import { motion, AnimatePresence } from "framer-motion";

const EmployeeSearch = () => {
  const { storeId } = useContext(StoreContext);
  const [employees, setEmployees] = useState([]);
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("name");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isDetailExpanded, setIsDetailExpanded] = useState(false);
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  const [attendanceStatus, setAttendanceStatus] = useState({});
  const [isSavingAttendance, setIsSavingAttendance] = useState(false);
  const [attendanceSuccess, setAttendanceSuccess] = useState(false);

  // Fetch employees from the backend
  const fetchEmployees = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:5004/employees", {
        headers: {
          storeId: storeId,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch employees");
      }
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch attendance records
  const fetchAttendanceRecords = async () => {
    if (!storeId) return;

    try {
      const response = await fetch("http://localhost:5004/attendance", {
        headers: {
          storeId: storeId,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch attendance records");
      }
      const data = await response.json();
      setAttendanceRecords(data);
    } catch (error) {
      console.error("Error fetching attendance:", error);
    }
  };

  useEffect(() => {
    if (storeId) {
      fetchEmployees();
      fetchAttendanceRecords();
    }
  }, [storeId]);

  // Calculate attendance statistics for an employee
  const getAttendanceStats = (employeeId) => {
    if (!attendanceRecords.length) return { present: 0, absent: 0, total: 0, rate: 0 };

    const employeeRecords = attendanceRecords.filter(
      (record) => record.employeeId === employeeId
    );

    const present = employeeRecords.filter((record) => record.status === "present").length;
    const total = employeeRecords.length;
    const rate = total > 0 ? Math.round((present / total) * 100) : 0;

    return {
      present,
      absent: total - present,
      total,
      rate,
    };
  };

  // Filter employees based on search term and criteria
  const filteredEmployees = employees.filter((employee) => {
    if (!searchTerm.trim()) return true;

    let fieldValue = "";
    switch (searchBy) {
      case "name":
        fieldValue = (employee.name || "").toLowerCase();
        break;
      case "role":
        fieldValue = (employee.role || "").toLowerCase();
        break;
      case "department":
        fieldValue = (employee.department || "").toLowerCase();
        break;
      case "id":
        fieldValue = (employee.id || "").toString().toLowerCase();
        break;
      default:
        fieldValue = (employee.name || "").toLowerCase();
    }

    return fieldValue.includes(searchTerm.toLowerCase());
  });

  // Handle employee selection for additional details
  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
    setIsDetailExpanded(true);
  };

  // Open attendance recording modal
  const openAttendanceModal = () => {
    // Initialize attendance status for all employees
    const initialStatus = {};
    employees.forEach((emp) => {
      initialStatus[emp._id] = "present"; // Default status
    });
    setAttendanceStatus(initialStatus);
    setShowAttendanceModal(true);
  };

  // Handle attendance status change
  const handleAttendanceChange = (empId, status) => {
    setAttendanceStatus((prev) => ({
      ...prev,
      [empId]: status,
    }));
  };

  // Save attendance records
  const saveAttendance = async () => {
    if (!storeId) {
      setError("Store ID not available");
      return;
    }

    setIsSavingAttendance(true);

    try {
      // Format attendance data
      const records = Object.keys(attendanceStatus).map((empId) => ({
        employeeId: empId,
        status: attendanceStatus[empId],
        date: new Date().toISOString().split("T")[0],
      }));

      const response = await fetch("http://localhost:5004/attendance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          storeId: storeId,
        },
        body: JSON.stringify(records),
      });

      if (!response.ok) {
        throw new Error("Failed to save attendance");
      }

      // Show success message
      setAttendanceSuccess(true);
      setTimeout(() => {
        setAttendanceSuccess(false);
        setShowAttendanceModal(false);
      }, 2000);

      // Refresh attendance records
      fetchAttendanceRecords();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSavingAttendance(false);
    }
  };

  // Edit employee details
  const editEmployee = async (employeeId, updatedData) => {
    try {
      const response = await fetch(`http://localhost:5004/employees/${employeeId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          storeId: storeId,
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Failed to update employee");
      }

      // Refresh employee list
      fetchEmployees();
    } catch (error) {
      setError(error.message);
    }
  };

  // Delete employee
  const deleteEmployee = async (employeeId) => {
    try {
      const response = await fetch(`http://localhost:5004/employees/${employeeId}`, {
        method: "DELETE",
        headers: {
          storeId: storeId,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete employee");
      }

      // Refresh employee list
      fetchEmployees();
    } catch (error) {
      setError(error.message);
    }
  };

  // Loading animation variants
  const loadingVariants = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 1,
        ease: "linear",
      },
    },
  };

  // Empty state animation variants
  const emptyStateVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  // Format date string
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch (e) {
      return dateString;
    }
  };

  // Calculate present and absent counts for today
  const presentToday = attendanceRecords.filter(
    (record) =>
      record.status === "present" &&
      new Date(record.timestamp).toDateString() === new Date().toDateString()
  ).length;

  const absentToday = attendanceRecords.filter(
    (record) =>
      record.status === "absent" &&
      new Date(record.timestamp).toDateString() === new Date().toDateString()
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 p-4 md:p-8 font-sans">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden"
      >
        {/* Header Section with Glassmorphism */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-90"></div>
          <div className="relative z-10 px-8 py-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight"
            >
              Employee Directory
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-purple-100 text-lg max-w-2xl"
            >
              Search, manage, and track attendance for your team members
            </motion.p>
          </div>

          {/* Decorative Elements */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { repeat: Infinity, duration: 20, ease: "linear" },
              scale: { repeat: Infinity, duration: 8, ease: "easeInOut" },
            }}
            className="absolute -top-16 -right-16 w-64 h-64 bg-pink-400 rounded-full opacity-20 blur-xl"
          ></motion.div>
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { repeat: Infinity, duration: 25, ease: "linear" },
              scale: { repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 },
            }}
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-500 rounded-full opacity-20 blur-xl"
          ></motion.div>
        </div>

        <div className="p-6 md:p-8">
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={openAttendanceModal}
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              Record Attendance
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={fetchEmployees}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Refresh Data
            </motion.button>
          </motion.div>

          {/* Search Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-8"
          >
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Search Employees</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder={`Search by ${searchBy}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white shadow-sm"
                />
              </div>
              <select
                value={searchBy}
                onChange={(e) => setSearchBy(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm transition-all md:w-48"
              >
                <option value="name">Search by Name</option>
                <option value="role">Search by Role</option>
                <option value="department">Search by Department</option>
                <option value="id">Search by ID</option>
              </select>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
          >
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-blue-700 font-medium">Total Employees</h3>
                <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-3xl font-bold text-blue-800 mt-2">{employees.length}</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-green-700 font-medium">Present Today</h3>
                <div className="w-10 h-10 rounded-full bg-green-100 border border-green-200 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-3xl font-bold text-green-800 mt-2">{presentToday}</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl border border-red-200 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-red-700 font-medium">Absent Today</h3>
                <div className="w-10 h-10 rounded-full bg-red-100 border border-red-200 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-3xl font-bold text-red-800 mt-2">{absentToday}</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-purple-700 font-medium">Attendance Rate</h3>
                <div className="w-10 h-10 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-3xl font-bold text-purple-800 mt-2">
                {attendanceRecords.length > 0
                  ? Math.round(
                      (attendanceRecords.filter((r) => r.status === "present").length /
                        attendanceRecords.length) *
                        100
                    )
                  : 0}
                %
              </p>
            </motion.div>
          </motion.div>

          {/* Loading and Error Messages */}
          <AnimatePresence>
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-center items-center py-8"
              >
                <motion.div
                  variants={loadingVariants}
                  animate="animate"
                  className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full"
                ></motion.div>
                <span className="ml-3 text-gray-600 font-medium">Loading employees...</span>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-red-700">{error}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Empty State */}
          <AnimatePresence>
            {!loading && filteredEmployees.length === 0 && (
              <motion.div
                variants={emptyStateVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 20 }}
                className="text-center py-12 bg-gray-50 rounded-xl border border-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto text-gray-300 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <h3 className="text-lg font-medium text-gray-600">No employees found</h3>
                <p className="text-gray-500 mt-1">Try adjusting your search criteria or refresh the list</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Employee Table with Staggered Animation */}
          <AnimatePresence>
            {!loading && filteredEmployees.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="overflow-x-auto rounded-xl shadow border border-gray-100"
              >
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm uppercase tracking-wider">
                      <th className="px-6 py-4 text-left font-semibold">Employee</th>
                      <th className="px-6 py-4 text-left font-semibold">ID</th>
                      <th className="px-6 py-4 text-left font-semibold">Department</th>
                      <th className="px-6 py-4 text-left font-semibold">Attendance</th>
                      <th className="px-6 py-4 text-left font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEmployees.map((employee, index) => {
                      const stats = getAttendanceStats(employee._id);

                      return (
                        <motion.tr
                          key={employee._id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.05,
                            ease: "easeOut",
                          }}
                          className={`${
                            selectedEmployee?._id === employee._id
                              ? "bg-purple-50"
                              : index % 2 === 0
                              ? "bg-white"
                              : "bg-gray-50"
                          } hover:bg-indigo-50 transition-all duration-150`}
                        >
                          <td className="px-6 py-4 border-b border-gray-100">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-medium mr-3 overflow-hidden">
                                {employee.image ? (
                                  <img
                                    src={`http://localhost:5004/uploads/${employee.image}`}
                                    alt={employee.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      e.target.onerror = null;
                                      e.target.style.display = "none";
                                      e.target.parentNode.innerText =
                                        employee.name?.charAt(0) || "?";
                                    }}
                                  />
                                ) : (
                                  employee.name?.charAt(0) || "?"
                                )}
                              </div>
                              <div>
                                <span className="font-medium text-gray-800 block">
                                  {employee.name}
                                </span>
                                <span className="text-sm text-gray-500">
                                  {employee.role || "No Role"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 border-b border-gray-100 text-gray-800">
                            {employee.id || "N/A"}
                          </td>
                          <td className="px-6 py-4 border-b border-gray-100">
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                              {employee.department || "Unassigned"}
                            </span>
                          </td>
                          <td className="px-6 py-4 border-b border-gray-100">
                            <div className="flex items-center">
                              <div className="w-full max-w-xs bg-gray-200 rounded-full h-2.5 mr-2">
                                <div
                                  className="bg-green-600 h-2.5 rounded-full"
                                  style={{ width: `${stats.rate}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium text-gray-700">
                                {stats.rate}%
                              </span>
                            </div>
                            <span className="text-xs text-gray-500">
                              {stats.present} present / {stats.total} total
                            </span>
                          </td>
                          <td className="px-6 py-4 border-b border-gray-100">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className={`px-4 py-2 ${
                                selectedEmployee?._id === employee._id
                                  ? "bg-purple-600 hover:bg-purple-700"
                                  : "bg-indigo-600 hover:bg-indigo-700"
                              } text-white rounded-lg transition-all shadow hover:shadow-md flex items-center gap-2`}
                              onClick={() => handleEmployeeClick(employee)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                              View Details
                            </motion.button>
                          </td>
                        </motion.tr>
                      );
                    })}
                  </tbody>
                </table>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Employee Detail Card with Animated Expansion */}
          <AnimatePresence>
            {selectedEmployee && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  marginTop: 32,
                  transition: {
                    duration: 0.5,
                    height: { duration: 0.4 },
                  },
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  marginTop: 0,
                  transition: {
                    duration: 0.3,
                    opacity: { duration: 0.2 },
                  },
                }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Employee Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="w-full md:w-1/3 flex justify-center"
                    >
                      <div className="relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                        <img
                          src={`http://localhost:5004/uploads/${selectedEmployee.image}`}
                          alt={selectedEmployee.name}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://via.placeholder.com/200?text=No+Image";
                          }}
                          className="w-48 h-48 md:w-full md:h-auto object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 text-white">
                            <p className="font-bold">{selectedEmployee.name}</p>
                            <p className="text-sm opacity-90">
                              {selectedEmployee.role || "No Role"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Employee Details */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="flex-1"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                            {selectedEmployee.name}
                          </h2>
                          <p className="text-purple-600 font-medium">
                            {selectedEmployee.role || "No Role Assigned"}
                          </p>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedEmployee(null)}
                          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </motion.button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                          <h3 className="text-sm font-medium text-gray-500 mb-2">
                            Employee ID
                          </h3>
                          <p className="text-lg font-semibold text-gray-800">
                            {selectedEmployee.id || "N/A"}
                          </p>
                        </div>

                        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                          <h3 className="text-sm font-medium text-gray-500 mb-2">
                            Department
                          </h3>
                          <p className="text-lg font-semibold text-gray-800">
                            {selectedEmployee.department || "N/A"}
                          </p>
                        </div>

                        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                          <h3 className="text-sm font-medium text-gray-500 mb-2">
                            Contact
                          </h3>
                          <p className="text-lg font-semibold text-gray-800">
                            {selectedEmployee.email || "No Email"}
                          </p>
                        </div>

                        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                          <h3 className="text-sm font-medium text-gray-500 mb-2">
                            Joined
                          </h3>
                          <p className="text-lg font-semibold text-gray-800">
                            {selectedEmployee.joinDate || "Not Available"}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-3">
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow transition-all flex items-center gap-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          Contact
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => {
                            // Open edit modal or form
                            const updatedData = {
                              name: "Updated Name",
                              role: "Updated Role",
                              department: "Updated Department",
                            };
                            editEmployee(selectedEmployee._id, updatedData);
                          }}
                          className="px-4 py-2 border border-gray-300 hover:border-gray-400 bg-white text-gray-700 rounded-lg shadow-sm transition-all flex items-center gap-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                          Edit Profile
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => deleteEmployee(selectedEmployee._id)}
                          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow transition-all flex items-center gap-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                          Delete
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Footer with Stats */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gray-50 border-t border-gray-200 p-6"
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-gray-500 text-sm">Projects</p>
                      <p className="text-xl font-bold text-indigo-600">
                        {selectedEmployee.projects || 0}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500 text-sm">Tasks</p>
                      <p className="text-xl font-bold text-indigo-600">
                        {selectedEmployee.tasks || 0}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500 text-sm">Performance</p>
                      <p className="text-xl font-bold text-indigo-600">
                        {selectedEmployee.performance || "N/A"}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500 text-sm">Team</p>
                      <p className="text-xl font-bold text-indigo-600">
                        {selectedEmployee.team || "N/A"}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Attendance Modal */}
          <AnimatePresence>
            {showAttendanceModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6"
                >
                  <h2 className="text-xl font-semibold mb-4">Record Attendance</h2>
                  <div className="space-y-4">
                    {employees.map((employee) => (
                      <div key={employee._id} className="flex items-center justify-between">
                        <span>{employee.name}</span>
                        <select
                          value={attendanceStatus[employee._id]}
                          onChange={(e) =>
                            handleAttendanceChange(employee._id, e.target.value)
                          }
                          className="px-3 py-1 border border-gray-300 rounded-lg"
                        >
                          <option value="present">Present</option>
                          <option value="absent">Absent</option>
                        </select>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-end gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowAttendanceModal(false)}
                      className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={saveAttendance}
                      disabled={isSavingAttendance}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                    >
                      {isSavingAttendance ? "Saving..." : "Save Attendance"}
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="px-8 py-4 bg-gray-50 border-t border-gray-200 text-center text-gray-500 text-sm"
        >
          Employee Directory • {new Date().getFullYear()} • Your Company Name
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EmployeeSearch;