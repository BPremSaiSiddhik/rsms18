// // // // // // // // // // // // // // import React, { useEffect, useState, useContext } from "react";
// // // // // // // // // // // // // // import axios from "axios";
// // // // // // // // // // // // // // import { StoreContext } from "./StoreContext";

// // // // // // // // // // // // // // const EmployeeManagement = () => {
// // // // // // // // // // // // // //   const { storeId } = useContext(StoreContext);
// // // // // // // // // // // // // //   const [employees, setEmployees] = useState([]);
// // // // // // // // // // // // // //   const [newEmployee, setNewEmployee] = useState({
// // // // // // // // // // // // // //     name: "",
// // // // // // // // // // // // // //     role: "",
// // // // // // // // // // // // // //     salary: "",
// // // // // // // // // // // // // //     shifts: "",
// // // // // // // // // // // // // //     contact: "",
// // // // // // // // // // // // // //     address: "",
// // // // // // // // // // // // // //     dateOfJoining: "",
// // // // // // // // // // // // // //     employeeId: "",
// // // // // // // // // // // // // //     experience: "",
// // // // // // // // // // // // // //     image: null,
// // // // // // // // // // // // // //   });
// // // // // // // // // // // // // //   const [editEmployeeId, setEditEmployeeId] = useState(null);
// // // // // // // // // // // // // //   const [selectedEmployee, setSelectedEmployee] = useState(null);

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     if (storeId) fetchEmployees();
// // // // // // // // // // // // // //   }, [storeId]);

// // // // // // // // // // // // // //   const fetchEmployees = async () => {
// // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // //       const response = await axios.get("http://localhost:5004/employees", {
// // // // // // // // // // // // // //         headers: { storeId },
// // // // // // // // // // // // // //       });
// // // // // // // // // // // // // //       setEmployees(response.data);
// // // // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // // // //       console.error("Error fetching employees:", error);
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const handleAddEmployee = async () => {
// // // // // // // // // // // // // //     if (!newEmployee.name || !newEmployee.employeeId) {
// // // // // // // // // // // // // //       alert("Name and Employee ID are required!");
// // // // // // // // // // // // // //       return;
// // // // // // // // // // // // // //     }

// // // // // // // // // // // // // //     const formData = new FormData();
// // // // // // // // // // // // // //     Object.keys(newEmployee).forEach((key) => {
// // // // // // // // // // // // // //       formData.append(key, newEmployee[key]);
// // // // // // // // // // // // // //     });

// // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // //       const response = await axios.post(
// // // // // // // // // // // // // //         "http://localhost:5004/employees",
// // // // // // // // // // // // // //         formData,
// // // // // // // // // // // // // //         {
// // // // // // // // // // // // // //           headers: {
// // // // // // // // // // // // // //             storeId,
// // // // // // // // // // // // // //             "Content-Type": "multipart/form-data",
// // // // // // // // // // // // // //           },
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //       );
// // // // // // // // // // // // // //       setEmployees([...employees, response.data]);
// // // // // // // // // // // // // //       resetForm();
// // // // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // // // //       console.error("Error adding employee:", error);
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const handleUpdateEmployee = async () => {
// // // // // // // // // // // // // //     if (!editEmployeeId) return;

// // // // // // // // // // // // // //     const formData = new FormData();
// // // // // // // // // // // // // //     if (newEmployee.image) {
// // // // // // // // // // // // // //       formData.append("image", newEmployee.image);
// // // // // // // // // // // // // //     } else {
// // // // // // // // // // // // // //       formData.append("existingImage", newEmployee.image);
// // // // // // // // // // // // // //     }

// // // // // // // // // // // // // //     Object.keys(newEmployee).forEach((key) => {
// // // // // // // // // // // // // //       formData.append(key, newEmployee[key]);
// // // // // // // // // // // // // //     });

// // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // //       await axios.put(
// // // // // // // // // // // // // //         `http://localhost:5004/employees/${editEmployeeId}`,
// // // // // // // // // // // // // //         formData,
// // // // // // // // // // // // // //         {
// // // // // // // // // // // // // //           headers: {
// // // // // // // // // // // // // //             storeId,
// // // // // // // // // // // // // //             "Content-Type": "multipart/form-data",
// // // // // // // // // // // // // //           },
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //       );
// // // // // // // // // // // // // //       alert("Employee updated successfully!");
// // // // // // // // // // // // // //       resetForm();
// // // // // // // // // // // // // //       fetchEmployees();
// // // // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // // // //       console.error("Error updating employee:", error);
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const handleDeleteEmployee = async (id) => {
// // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // //       await axios.delete(`http://localhost:5004/employees/${id}`, {
// // // // // // // // // // // // // //         headers: { storeId },
// // // // // // // // // // // // // //       });
// // // // // // // // // // // // // //       alert("Employee deleted successfully!");
// // // // // // // // // // // // // //       fetchEmployees();
// // // // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // // // //       console.error("Error deleting employee:", error);
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const handleEditEmployee = (employee) => {
// // // // // // // // // // // // // //     setEditEmployeeId(employee._id);
// // // // // // // // // // // // // //     setNewEmployee({
// // // // // // // // // // // // // //       name: employee.name,
// // // // // // // // // // // // // //       role: employee.role,
// // // // // // // // // // // // // //       salary: employee.salary,
// // // // // // // // // // // // // //       shifts: employee.shifts,
// // // // // // // // // // // // // //       contact: employee.contact,
// // // // // // // // // // // // // //       address: employee.address,
// // // // // // // // // // // // // //       dateOfJoining: employee.dateOfJoining,
// // // // // // // // // // // // // //       employeeId: employee.employeeId,
// // // // // // // // // // // // // //       experience: employee.experience,
// // // // // // // // // // // // // //       image: employee.image || null,
// // // // // // // // // // // // // //     });
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const resetForm = () => {
// // // // // // // // // // // // // //     setEditEmployeeId(null);
// // // // // // // // // // // // // //     setNewEmployee({
// // // // // // // // // // // // // //       name: "",
// // // // // // // // // // // // // //       role: "",
// // // // // // // // // // // // // //       salary: "",
// // // // // // // // // // // // // //       shifts: "",
// // // // // // // // // // // // // //       contact: "",
// // // // // // // // // // // // // //       address: "",
// // // // // // // // // // // // // //       dateOfJoining: "",
// // // // // // // // // // // // // //       employeeId: "",
// // // // // // // // // // // // // //       experience: "",
// // // // // // // // // // // // // //       image: null,
// // // // // // // // // // // // // //     });
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div className="min-h-screen bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white p-8">
// // // // // // // // // // // // // //       <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl p-8 text-gray-800">
// // // // // // // // // // // // // //         <h1 className="text-5xl font-bold text-center mb-8">Employee Management</h1>

// // // // // // // // // // // // // //         {/* Add/Edit Employee Section */}
// // // // // // // // // // // // // //         <div className="mb-8">
// // // // // // // // // // // // // //           <h2 className="text-3xl font-semibold mb-4">
// // // // // // // // // // // // // //             {editEmployeeId ? "Edit Employee" : "Add New Employee"}
// // // // // // // // // // // // // //           </h2>
// // // // // // // // // // // // // //           <div className="space-y-4">
// // // // // // // // // // // // // //             <input
// // // // // // // // // // // // // //               type="text"
// // // // // // // // // // // // // //               placeholder="Name"
// // // // // // // // // // // // // //               value={newEmployee.name}
// // // // // // // // // // // // // //               onChange={(e) =>
// // // // // // // // // // // // // //                 setNewEmployee({ ...newEmployee, name: e.target.value })
// // // // // // // // // // // // // //               }
// // // // // // // // // // // // // //               className="w-full p-3 border-2 border-blue-500 rounded-lg focus:border-yellow-500 focus:outline-none"
// // // // // // // // // // // // // //             />
// // // // // // // // // // // // // //             <input
// // // // // // // // // // // // // //               type="text"
// // // // // // // // // // // // // //               placeholder="Role"
// // // // // // // // // // // // // //               value={newEmployee.role}
// // // // // // // // // // // // // //               onChange={(e) =>
// // // // // // // // // // // // // //                 setNewEmployee({ ...newEmployee, role: e.target.value })
// // // // // // // // // // // // // //               }
// // // // // // // // // // // // // //               className="w-full p-3 border-2 border-blue-500 rounded-lg focus:border-yellow-500 focus:outline-none"
// // // // // // // // // // // // // //             />
// // // // // // // // // // // // // //             <input
// // // // // // // // // // // // // //               type="number"
// // // // // // // // // // // // // //               placeholder="Salary"
// // // // // // // // // // // // // //               value={newEmployee.salary}
// // // // // // // // // // // // // //               onChange={(e) =>
// // // // // // // // // // // // // //                 setNewEmployee({ ...newEmployee, salary: e.target.value })
// // // // // // // // // // // // // //               }
// // // // // // // // // // // // // //               className="w-full p-3 border-2 border-blue-500 rounded-lg focus:border-yellow-500 focus:outline-none"
// // // // // // // // // // // // // //             />
// // // // // // // // // // // // // //             <input
// // // // // // // // // // // // // //               type="text"
// // // // // // // // // // // // // //               placeholder="Shifts"
// // // // // // // // // // // // // //               value={newEmployee.shifts}
// // // // // // // // // // // // // //               onChange={(e) =>
// // // // // // // // // // // // // //                 setNewEmployee({ ...newEmployee, shifts: e.target.value })
// // // // // // // // // // // // // //               }
// // // // // // // // // // // // // //               className="w-full p-3 border-2 border-blue-500 rounded-lg focus:border-yellow-500 focus:outline-none"
// // // // // // // // // // // // // //             />
// // // // // // // // // // // // // //             <input
// // // // // // // // // // // // // //               type="text"
// // // // // // // // // // // // // //               placeholder="Contact"
// // // // // // // // // // // // // //               value={newEmployee.contact}
// // // // // // // // // // // // // //               onChange={(e) =>
// // // // // // // // // // // // // //                 setNewEmployee({ ...newEmployee, contact: e.target.value })
// // // // // // // // // // // // // //               }
// // // // // // // // // // // // // //               className="w-full p-3 border-2 border-blue-500 rounded-lg focus:border-yellow-500 focus:outline-none"
// // // // // // // // // // // // // //             />
// // // // // // // // // // // // // //             <input
// // // // // // // // // // // // // //               type="text"
// // // // // // // // // // // // // //               placeholder="Address"
// // // // // // // // // // // // // //               value={newEmployee.address}
// // // // // // // // // // // // // //               onChange={(e) =>
// // // // // // // // // // // // // //                 setNewEmployee({ ...newEmployee, address: e.target.value })
// // // // // // // // // // // // // //               }
// // // // // // // // // // // // // //               className="w-full p-3 border-2 border-blue-500 rounded-lg focus:border-yellow-500 focus:outline-none"
// // // // // // // // // // // // // //             />
// // // // // // // // // // // // // //             <input
// // // // // // // // // // // // // //               type="date"
// // // // // // // // // // // // // //               placeholder="Date of Joining"
// // // // // // // // // // // // // //               value={newEmployee.dateOfJoining}
// // // // // // // // // // // // // //               onChange={(e) =>
// // // // // // // // // // // // // //                 setNewEmployee({
// // // // // // // // // // // // // //                   ...newEmployee,
// // // // // // // // // // // // // //                   dateOfJoining: e.target.value,
// // // // // // // // // // // // // //                 })
// // // // // // // // // // // // // //               }
// // // // // // // // // // // // // //               className="w-full p-3 border-2 border-blue-500 rounded-lg focus:border-yellow-500 focus:outline-none"
// // // // // // // // // // // // // //             />
// // // // // // // // // // // // // //             <input
// // // // // // // // // // // // // //               type="text"
// // // // // // // // // // // // // //               placeholder="Employee ID"
// // // // // // // // // // // // // //               value={newEmployee.employeeId}
// // // // // // // // // // // // // //               onChange={(e) =>
// // // // // // // // // // // // // //                 setNewEmployee({ ...newEmployee, employeeId: e.target.value })
// // // // // // // // // // // // // //               }
// // // // // // // // // // // // // //               className="w-full p-3 border-2 border-blue-500 rounded-lg focus:border-yellow-500 focus:outline-none"
// // // // // // // // // // // // // //             />
// // // // // // // // // // // // // //             <input
// // // // // // // // // // // // // //               type="text"
// // // // // // // // // // // // // //               placeholder="Experience"
// // // // // // // // // // // // // //               value={newEmployee.experience}
// // // // // // // // // // // // // //               onChange={(e) =>
// // // // // // // // // // // // // //                 setNewEmployee({ ...newEmployee, experience: e.target.value })
// // // // // // // // // // // // // //               }
// // // // // // // // // // // // // //               className="w-full p-3 border-2 border-blue-500 rounded-lg focus:border-yellow-500 focus:outline-none"
// // // // // // // // // // // // // //             />
// // // // // // // // // // // // // //             <input
// // // // // // // // // // // // // //               type="file"
// // // // // // // // // // // // // //               accept="image/*"
// // // // // // // // // // // // // //               onChange={(e) =>
// // // // // // // // // // // // // //                 setNewEmployee({ ...newEmployee, image: e.target.files[0] })
// // // // // // // // // // // // // //               }
// // // // // // // // // // // // // //               className="w-full p-3 border-2 border-blue-500 rounded-lg focus:border-yellow-500 focus:outline-none"
// // // // // // // // // // // // // //             />
// // // // // // // // // // // // // //             <button
// // // // // // // // // // // // // //               onClick={editEmployeeId ? handleUpdateEmployee : handleAddEmployee}
// // // // // // // // // // // // // //               className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
// // // // // // // // // // // // // //             >
// // // // // // // // // // // // // //               {editEmployeeId ? "Update Employee" : "Add Employee"}
// // // // // // // // // // // // // //             </button>
// // // // // // // // // // // // // //             {editEmployeeId && (
// // // // // // // // // // // // // //               <button
// // // // // // // // // // // // // //                 onClick={resetForm}
// // // // // // // // // // // // // //                 className="w-full bg-gray-500 text-white p-3 rounded-lg hover:bg-gray-700 transition duration-300"
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 Cancel
// // // // // // // // // // // // // //               </button>
// // // // // // // // // // // // // //             )}
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //         {/* Employee List Section */}
// // // // // // // // // // // // // //         <div>
// // // // // // // // // // // // // //           <h2 className="text-3xl font-semibold mb-4">Employee List</h2>
// // // // // // // // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // // // // // // // //             {employees.map((employee) => (
// // // // // // // // // // // // // //               <div
// // // // // // // // // // // // // //                 key={employee._id}
// // // // // // // // // // // // // //                 onClick={() => setSelectedEmployee(employee)}
// // // // // // // // // // // // // //                 className="bg-gradient-to-r from-orange-400 to-red-500 p-6 rounded-2xl shadow-lg text-white cursor-pointer transform transition-transform hover:scale-105"
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 <img
// // // // // // // // // // // // // //                   src={
// // // // // // // // // // // // // //                     employee.image
// // // // // // // // // // // // // //                       ? `http://localhost:5004/uploads/${employee.image}`
// // // // // // // // // // // // // //                       : `http://localhost:5004/uploads/em.jpg`
// // // // // // // // // // // // // //                   }
// // // // // // // // // // // // // //                   alt={`${employee.name}'s profile`}
// // // // // // // // // // // // // //                   className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white"
// // // // // // // // // // // // // //                 />
// // // // // // // // // // // // // //                 <h3 className="text-xl font-bold text-center">{employee.name}</h3>
// // // // // // // // // // // // // //                 <p className="text-sm text-center">Role: {employee.role}</p>
// // // // // // // // // // // // // //                 <p className="text-sm text-center">Employee ID: {employee.employeeId}</p>
// // // // // // // // // // // // // //                 <div className="flex justify-center space-x-2 mt-4">
// // // // // // // // // // // // // //                   <button
// // // // // // // // // // // // // //                     onClick={(e) => {
// // // // // // // // // // // // // //                       e.stopPropagation();
// // // // // // // // // // // // // //                       handleEditEmployee(employee);
// // // // // // // // // // // // // //                     }}
// // // // // // // // // // // // // //                     className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
// // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // //                     Edit
// // // // // // // // // // // // // //                   </button>
// // // // // // // // // // // // // //                   <button
// // // // // // // // // // // // // //                     onClick={(e) => {
// // // // // // // // // // // // // //                       e.stopPropagation();
// // // // // // // // // // // // // //                       handleDeleteEmployee(employee._id);
// // // // // // // // // // // // // //                     }}
// // // // // // // // // // // // // //                     className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
// // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // //                     Delete
// // // // // // // // // // // // // //                   </button>
// // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // //             ))}
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //         {/* Full Employee View */}
// // // // // // // // // // // // // //         {selectedEmployee && (
// // // // // // // // // // // // // //           <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4">
// // // // // // // // // // // // // //             <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full text-gray-800">
// // // // // // // // // // // // // //               <img
// // // // // // // // // // // // // //                 src={
// // // // // // // // // // // // // //                   selectedEmployee.image
// // // // // // // // // // // // // //                     ? `http://localhost:5004/uploads/${selectedEmployee.image}`
// // // // // // // // // // // // // //                     : `http://localhost:5004/uploads/em.jpg`
// // // // // // // // // // // // // //                 }
// // // // // // // // // // // // // //                 alt={`${selectedEmployee.name}'s profile`}
// // // // // // // // // // // // // //                 className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500"
// // // // // // // // // // // // // //               />
// // // // // // // // // // // // // //               <h3 className="text-2xl font-bold text-center mb-4">{selectedEmployee.name}</h3>
// // // // // // // // // // // // // //               <div className="grid grid-cols-2 gap-4">
// // // // // // // // // // // // // //                 <div className="font-semibold text-right">Role:</div>
// // // // // // // // // // // // // //                 <div>{selectedEmployee.role}</div>
// // // // // // // // // // // // // //                 <div className="font-semibold text-right">Salary:</div>
// // // // // // // // // // // // // //                 <div>₹{selectedEmployee.salary}</div>
// // // // // // // // // // // // // //                 <div className="font-semibold text-right">Shifts:</div>
// // // // // // // // // // // // // //                 <div>{selectedEmployee.shifts}</div>
// // // // // // // // // // // // // //                 <div className="font-semibold text-right">Contact:</div>
// // // // // // // // // // // // // //                 <div>{selectedEmployee.contact}</div>
// // // // // // // // // // // // // //                 <div className="font-semibold text-right">Address:</div>
// // // // // // // // // // // // // //                 <div>{selectedEmployee.address}</div>
// // // // // // // // // // // // // //                 <div className="font-semibold text-right">Date of Joining:</div>
// // // // // // // // // // // // // //                 <div>{selectedEmployee.dateOfJoining}</div>
// // // // // // // // // // // // // //                 <div className="font-semibold text-right">Experience:</div>
// // // // // // // // // // // // // //                 <div>{selectedEmployee.experience}</div>
// // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // //               <button
// // // // // // // // // // // // // //                 onClick={() => setSelectedEmployee(null)}
// // // // // // // // // // // // // //                 className="w-full bg-red-500 text-white p-3 rounded-lg mt-6 hover:bg-red-700 transition duration-300"
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 Close
// // // // // // // // // // // // // //               </button>
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         )}
// // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default EmployeeManagement;

// // // // // // // // // // // // // import React, { useEffect, useState, useContext } from "react";
// // // // // // // // // // // // // import axios from "axios";
// // // // // // // // // // // // // import { StoreContext } from "./StoreContext";

// // // // // // // // // // // // // const EmployeeManagement = () => {
// // // // // // // // // // // // //   const { storeId } = useContext(StoreContext);
// // // // // // // // // // // // //   const [employees, setEmployees] = useState([]);
// // // // // // // // // // // // //   const [newEmployee, setNewEmployee] = useState({
// // // // // // // // // // // // //     name: "",
// // // // // // // // // // // // //     role: "",
// // // // // // // // // // // // //     salary: "",
// // // // // // // // // // // // //     shifts: "",
// // // // // // // // // // // // //     contact: "",
// // // // // // // // // // // // //     address: "",
// // // // // // // // // // // // //     dateOfJoining: "",
// // // // // // // // // // // // //     employeeId: "",
// // // // // // // // // // // // //     experience: "",
// // // // // // // // // // // // //     image: null,
// // // // // // // // // // // // //   });
// // // // // // // // // // // // //   const [editEmployeeId, setEditEmployeeId] = useState(null);
// // // // // // // // // // // // //   const [selectedEmployee, setSelectedEmployee] = useState(null);

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     if (storeId) fetchEmployees();
// // // // // // // // // // // // //   }, [storeId]);

// // // // // // // // // // // // //   const fetchEmployees = async () => {
// // // // // // // // // // // // //     try {
// // // // // // // // // // // // //       const response = await axios.get("http://localhost:5004/employees", {
// // // // // // // // // // // // //         headers: { storeId },
// // // // // // // // // // // // //       });
// // // // // // // // // // // // //       setEmployees(response.data);
// // // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // // //       console.error("Error fetching employees:", error);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const handleAddEmployee = async () => {
// // // // // // // // // // // // //     if (!newEmployee.name || !newEmployee.employeeId) {
// // // // // // // // // // // // //       alert("Name and Employee ID are required!");
// // // // // // // // // // // // //       return;
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     const formData = new FormData();
// // // // // // // // // // // // //     Object.keys(newEmployee).forEach((key) => {
// // // // // // // // // // // // //       formData.append(key, newEmployee[key]);
// // // // // // // // // // // // //     });

// // // // // // // // // // // // //     try {
// // // // // // // // // // // // //       const response = await axios.post(
// // // // // // // // // // // // //         "http://localhost:5004/employees",
// // // // // // // // // // // // //         formData,
// // // // // // // // // // // // //         {
// // // // // // // // // // // // //           headers: {
// // // // // // // // // // // // //             storeId,
// // // // // // // // // // // // //             "Content-Type": "multipart/form-data",
// // // // // // // // // // // // //           },
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //       );
// // // // // // // // // // // // //       setEmployees([...employees, response.data]);
// // // // // // // // // // // // //       resetForm();
// // // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // // //       console.error("Error adding employee:", error);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const handleUpdateEmployee = async () => {
// // // // // // // // // // // // //     if (!editEmployeeId) return;

// // // // // // // // // // // // //     const formData = new FormData();
// // // // // // // // // // // // //     if (newEmployee.image) {
// // // // // // // // // // // // //       formData.append("image", newEmployee.image);
// // // // // // // // // // // // //     } else {
// // // // // // // // // // // // //       formData.append("existingImage", newEmployee.image);
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     Object.keys(newEmployee).forEach((key) => {
// // // // // // // // // // // // //       formData.append(key, newEmployee[key]);
// // // // // // // // // // // // //     });

// // // // // // // // // // // // //     try {
// // // // // // // // // // // // //       await axios.put(
// // // // // // // // // // // // //         `http://localhost:5004/employees/${editEmployeeId}`,
// // // // // // // // // // // // //         formData,
// // // // // // // // // // // // //         {
// // // // // // // // // // // // //           headers: {
// // // // // // // // // // // // //             storeId,
// // // // // // // // // // // // //             "Content-Type": "multipart/form-data",
// // // // // // // // // // // // //           },
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //       );
// // // // // // // // // // // // //       alert("Employee updated successfully!");
// // // // // // // // // // // // //       resetForm();
// // // // // // // // // // // // //       fetchEmployees();
// // // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // // //       console.error("Error updating employee:", error);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const handleDeleteEmployee = async (id) => {
// // // // // // // // // // // // //     try {
// // // // // // // // // // // // //       await axios.delete(`http://localhost:5004/employees/${id}`, {
// // // // // // // // // // // // //         headers: { storeId },
// // // // // // // // // // // // //       });
// // // // // // // // // // // // //       alert("Employee deleted successfully!");
// // // // // // // // // // // // //       fetchEmployees();
// // // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // // //       console.error("Error deleting employee:", error);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const handleEditEmployee = (employee) => {
// // // // // // // // // // // // //     setEditEmployeeId(employee._id);
// // // // // // // // // // // // //     setNewEmployee({
// // // // // // // // // // // // //       name: employee.name,
// // // // // // // // // // // // //       role: employee.role,
// // // // // // // // // // // // //       salary: employee.salary,
// // // // // // // // // // // // //       shifts: employee.shifts,
// // // // // // // // // // // // //       contact: employee.contact,
// // // // // // // // // // // // //       address: employee.address,
// // // // // // // // // // // // //       dateOfJoining: employee.dateOfJoining,
// // // // // // // // // // // // //       employeeId: employee.employeeId,
// // // // // // // // // // // // //       experience: employee.experience,
// // // // // // // // // // // // //       image: employee.image || null,
// // // // // // // // // // // // //     });
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const resetForm = () => {
// // // // // // // // // // // // //     setEditEmployeeId(null);
// // // // // // // // // // // // //     setNewEmployee({
// // // // // // // // // // // // //       name: "",
// // // // // // // // // // // // //       role: "",
// // // // // // // // // // // // //       salary: "",
// // // // // // // // // // // // //       shifts: "",
// // // // // // // // // // // // //       contact: "",
// // // // // // // // // // // // //       address: "",
// // // // // // // // // // // // //       dateOfJoining: "",
// // // // // // // // // // // // //       employeeId: "",
// // // // // // // // // // // // //       experience: "",
// // // // // // // // // // // // //       image: null,
// // // // // // // // // // // // //     });
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className="p-6 bg-gray-50 min-h-screen">
// // // // // // // // // // // // //       <h1 className="text-3xl font-bold text-gray-800 mb-6">Employee Management</h1>

// // // // // // // // // // // // //       {/* Add/Edit Employee Section */}
// // // // // // // // // // // // //       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
// // // // // // // // // // // // //         <h2 className="text-2xl font-semibold text-gray-700 mb-4">
// // // // // // // // // // // // //           {editEmployeeId ? "Edit Employee" : "Add New Employee"}
// // // // // // // // // // // // //         </h2>
// // // // // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // // // // // // // //           <input
// // // // // // // // // // // // //             type="text"
// // // // // // // // // // // // //             placeholder="Name"
// // // // // // // // // // // // //             value={newEmployee.name}
// // // // // // // // // // // // //             onChange={(e) =>
// // // // // // // // // // // // //               setNewEmployee({ ...newEmployee, name: e.target.value })
// // // // // // // // // // // // //             }
// // // // // // // // // // // // //             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //           <input
// // // // // // // // // // // // //             type="text"
// // // // // // // // // // // // //             placeholder="Role"
// // // // // // // // // // // // //             value={newEmployee.role}
// // // // // // // // // // // // //             onChange={(e) =>
// // // // // // // // // // // // //               setNewEmployee({ ...newEmployee, role: e.target.value })
// // // // // // // // // // // // //             }
// // // // // // // // // // // // //             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //           <input
// // // // // // // // // // // // //             type="number"
// // // // // // // // // // // // //             placeholder="Salary"
// // // // // // // // // // // // //             value={newEmployee.salary}
// // // // // // // // // // // // //             onChange={(e) =>
// // // // // // // // // // // // //               setNewEmployee({ ...newEmployee, salary: e.target.value })
// // // // // // // // // // // // //             }
// // // // // // // // // // // // //             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //           <input
// // // // // // // // // // // // //             type="text"
// // // // // // // // // // // // //             placeholder="Shifts"
// // // // // // // // // // // // //             value={newEmployee.shifts}
// // // // // // // // // // // // //             onChange={(e) =>
// // // // // // // // // // // // //               setNewEmployee({ ...newEmployee, shifts: e.target.value })
// // // // // // // // // // // // //             }
// // // // // // // // // // // // //             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //           <input
// // // // // // // // // // // // //             type="text"
// // // // // // // // // // // // //             placeholder="Contact"
// // // // // // // // // // // // //             value={newEmployee.contact}
// // // // // // // // // // // // //             onChange={(e) =>
// // // // // // // // // // // // //               setNewEmployee({ ...newEmployee, contact: e.target.value })
// // // // // // // // // // // // //             }
// // // // // // // // // // // // //             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //           <input
// // // // // // // // // // // // //             type="text"
// // // // // // // // // // // // //             placeholder="Address"
// // // // // // // // // // // // //             value={newEmployee.address}
// // // // // // // // // // // // //             onChange={(e) =>
// // // // // // // // // // // // //               setNewEmployee({ ...newEmployee, address: e.target.value })
// // // // // // // // // // // // //             }
// // // // // // // // // // // // //             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //           <input
// // // // // // // // // // // // //             type="date"
// // // // // // // // // // // // //             placeholder="Date of Joining"
// // // // // // // // // // // // //             value={newEmployee.dateOfJoining}
// // // // // // // // // // // // //             onChange={(e) =>
// // // // // // // // // // // // //               setNewEmployee({
// // // // // // // // // // // // //                 ...newEmployee,
// // // // // // // // // // // // //                 dateOfJoining: e.target.value,
// // // // // // // // // // // // //               })
// // // // // // // // // // // // //             }
// // // // // // // // // // // // //             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //           <input
// // // // // // // // // // // // //             type="text"
// // // // // // // // // // // // //             placeholder="Employee ID"
// // // // // // // // // // // // //             value={newEmployee.employeeId}
// // // // // // // // // // // // //             onChange={(e) =>
// // // // // // // // // // // // //               setNewEmployee({ ...newEmployee, employeeId: e.target.value })
// // // // // // // // // // // // //             }
// // // // // // // // // // // // //             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //           <input
// // // // // // // // // // // // //             type="text"
// // // // // // // // // // // // //             placeholder="Experience"
// // // // // // // // // // // // //             value={newEmployee.experience}
// // // // // // // // // // // // //             onChange={(e) =>
// // // // // // // // // // // // //               setNewEmployee({ ...newEmployee, experience: e.target.value })
// // // // // // // // // // // // //             }
// // // // // // // // // // // // //             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //           <input
// // // // // // // // // // // // //             type="file"
// // // // // // // // // // // // //             accept="image/*"
// // // // // // // // // // // // //             onChange={(e) =>
// // // // // // // // // // // // //               setNewEmployee({ ...newEmployee, image: e.target.files[0] })
// // // // // // // // // // // // //             }
// // // // // // // // // // // // //             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //         <div className="flex gap-4 mt-6">
// // // // // // // // // // // // //           <button
// // // // // // // // // // // // //             onClick={editEmployeeId ? handleUpdateEmployee : handleAddEmployee}
// // // // // // // // // // // // //             className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             {editEmployeeId ? "Update Employee" : "Add Employee"}
// // // // // // // // // // // // //           </button>
// // // // // // // // // // // // //           {editEmployeeId && (
// // // // // // // // // // // // //             <button
// // // // // // // // // // // // //               onClick={resetForm}
// // // // // // // // // // // // //               className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               Cancel
// // // // // // // // // // // // //             </button>
// // // // // // // // // // // // //           )}
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       {/* Employee List Section */}
// // // // // // // // // // // // //       <div className="bg-white rounded-lg shadow-md p-6">
// // // // // // // // // // // // //         <h2 className="text-2xl font-semibold text-gray-700 mb-4">Employee List</h2>
// // // // // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // // // // // // //           {employees.map((employee) => (
// // // // // // // // // // // // //             <div
// // // // // // // // // // // // //               key={employee._id}
// // // // // // // // // // // // //               onClick={() => setSelectedEmployee(employee)}
// // // // // // // // // // // // //               className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg shadow-lg text-white cursor-pointer transform transition-transform hover:scale-105"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               <img
// // // // // // // // // // // // //                 src={
// // // // // // // // // // // // //                   employee.image
// // // // // // // // // // // // //                     ? `http://localhost:5004/uploads/${employee.image}`
// // // // // // // // // // // // //                     : `http://localhost:5004/uploads/em.jpg`
// // // // // // // // // // // // //                 }
// // // // // // // // // // // // //                 alt={`${employee.name}'s profile`}
// // // // // // // // // // // // //                 className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white"
// // // // // // // // // // // // //               />
// // // // // // // // // // // // //               <h3 className="text-xl font-bold text-center">{employee.name}</h3>
// // // // // // // // // // // // //               <p className="text-sm text-center">Role: {employee.role}</p>
// // // // // // // // // // // // //               <p className="text-sm text-center">Employee ID: {employee.employeeId}</p>
// // // // // // // // // // // // //               <div className="flex justify-center gap-4 mt-4">
// // // // // // // // // // // // //                 <button
// // // // // // // // // // // // //                   onClick={(e) => {
// // // // // // // // // // // // //                     e.stopPropagation();
// // // // // // // // // // // // //                     handleEditEmployee(employee);
// // // // // // // // // // // // //                   }}
// // // // // // // // // // // // //                   className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-200"
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   Edit
// // // // // // // // // // // // //                 </button>
// // // // // // // // // // // // //                 <button
// // // // // // // // // // // // //                   onClick={(e) => {
// // // // // // // // // // // // //                     e.stopPropagation();
// // // // // // // // // // // // //                     handleDeleteEmployee(employee._id);
// // // // // // // // // // // // //                   }}
// // // // // // // // // // // // //                   className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   Delete
// // // // // // // // // // // // //                 </button>
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           ))}
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       {/* Full Employee View */}
// // // // // // // // // // // // //       {selectedEmployee && (
// // // // // // // // // // // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
// // // // // // // // // // // // //           <div className="bg-white rounded-lg shadow-2xl p-8 max-w-3xl w-full">
// // // // // // // // // // // // //             <img
// // // // // // // // // // // // //               src={
// // // // // // // // // // // // //                 selectedEmployee.image
// // // // // // // // // // // // //                   ? `http://localhost:5004/uploads/${selectedEmployee.image}`
// // // // // // // // // // // // //                   : `http://localhost:5004/uploads/em.jpg`
// // // // // // // // // // // // //               }
// // // // // // // // // // // // //               alt={`${selectedEmployee.name}'s profile`}
// // // // // // // // // // // // //               className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500"
// // // // // // // // // // // // //             />
// // // // // // // // // // // // //             <h3 className="text-2xl font-bold text-center mb-4">{selectedEmployee.name}</h3>
// // // // // // // // // // // // //             <div className="grid grid-cols-2 gap-4">
// // // // // // // // // // // // //               <div className="font-semibold text-right">Role:</div>
// // // // // // // // // // // // //               <div>{selectedEmployee.role}</div>
// // // // // // // // // // // // //               <div className="font-semibold text-right">Salary:</div>
// // // // // // // // // // // // //               <div>₹{selectedEmployee.salary}</div>
// // // // // // // // // // // // //               <div className="font-semibold text-right">Shifts:</div>
// // // // // // // // // // // // //               <div>{selectedEmployee.shifts}</div>
// // // // // // // // // // // // //               <div className="font-semibold text-right">Contact:</div>
// // // // // // // // // // // // //               <div>{selectedEmployee.contact}</div>
// // // // // // // // // // // // //               <div className="font-semibold text-right">Address:</div>
// // // // // // // // // // // // //               <div>{selectedEmployee.address}</div>
// // // // // // // // // // // // //               <div className="font-semibold text-right">Date of Joining:</div>
// // // // // // // // // // // // //               <div>{selectedEmployee.dateOfJoining}</div>
// // // // // // // // // // // // //               <div className="font-semibold text-right">Experience:</div>
// // // // // // // // // // // // //               <div>{selectedEmployee.experience}</div>
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //             <button
// // // // // // // // // // // // //               onClick={() => setSelectedEmployee(null)}
// // // // // // // // // // // // //               className="bg-red-500 text-white px-6 py-2 rounded-lg mt-6 hover:bg-red-600 transition duration-200"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               Close
// // // // // // // // // // // // //             </button>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       )}
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default EmployeeManagement;

// // // // // // // // // // // // import React, { useEffect, useState, useContext } from "react";
// // // // // // // // // // // // import axios from "axios";
// // // // // // // // // // // // import { StoreContext } from "./StoreContext";

// // // // // // // // // // // // const EmployeeManagement = () => {
// // // // // // // // // // // //   const { storeId } = useContext(StoreContext);
// // // // // // // // // // // //   const [employees, setEmployees] = useState([]);
// // // // // // // // // // // //   const [newEmployee, setNewEmployee] = useState({
// // // // // // // // // // // //     name: "",
// // // // // // // // // // // //     role: "",
// // // // // // // // // // // //     salary: "",
// // // // // // // // // // // //     shifts: "",
// // // // // // // // // // // //     contact: "",
// // // // // // // // // // // //     address: "",
// // // // // // // // // // // //     dateOfJoining: "",
// // // // // // // // // // // //     employeeId: "",
// // // // // // // // // // // //     experience: "",
// // // // // // // // // // // //     image: null,
// // // // // // // // // // // //   });
// // // // // // // // // // // //   const [editEmployeeId, setEditEmployeeId] = useState(null);
// // // // // // // // // // // //   const [selectedEmployee, setSelectedEmployee] = useState(null);

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     if (storeId) fetchEmployees();
// // // // // // // // // // // //   }, [storeId]);

// // // // // // // // // // // //   const fetchEmployees = async () => {
// // // // // // // // // // // //     try {
// // // // // // // // // // // //       const response = await axios.get("http://localhost:5004/employees", {
// // // // // // // // // // // //         headers: { storeId },
// // // // // // // // // // // //       });
// // // // // // // // // // // //       setEmployees(response.data);
// // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // //       console.error("Error fetching employees:", error);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const handleAddEmployee = async () => {
// // // // // // // // // // // //     if (!newEmployee.name || !newEmployee.employeeId) {
// // // // // // // // // // // //       alert("Name and Employee ID are required!");
// // // // // // // // // // // //       return;
// // // // // // // // // // // //     }

// // // // // // // // // // // //     const formData = new FormData();
// // // // // // // // // // // //     Object.keys(newEmployee).forEach((key) => {
// // // // // // // // // // // //       formData.append(key, newEmployee[key]);
// // // // // // // // // // // //     });

// // // // // // // // // // // //     try {
// // // // // // // // // // // //       const response = await axios.post(
// // // // // // // // // // // //         "http://localhost:5004/employees",
// // // // // // // // // // // //         formData,
// // // // // // // // // // // //         {
// // // // // // // // // // // //           headers: {
// // // // // // // // // // // //             storeId,
// // // // // // // // // // // //             "Content-Type": "multipart/form-data",
// // // // // // // // // // // //           },
// // // // // // // // // // // //         }
// // // // // // // // // // // //       );
// // // // // // // // // // // //       setEmployees([...employees, response.data]);
// // // // // // // // // // // //       resetForm();
// // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // //       console.error("Error adding employee:", error);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const handleUpdateEmployee = async () => {
// // // // // // // // // // // //     if (!editEmployeeId) return;

// // // // // // // // // // // //     const formData = new FormData();
// // // // // // // // // // // //     if (newEmployee.image) {
// // // // // // // // // // // //       formData.append("image", newEmployee.image);
// // // // // // // // // // // //     } else {
// // // // // // // // // // // //       formData.append("existingImage", newEmployee.image);
// // // // // // // // // // // //     }

// // // // // // // // // // // //     Object.keys(newEmployee).forEach((key) => {
// // // // // // // // // // // //       formData.append(key, newEmployee[key]);
// // // // // // // // // // // //     });

// // // // // // // // // // // //     try {
// // // // // // // // // // // //       await axios.put(
// // // // // // // // // // // //         `http://localhost:5004/employees/${editEmployeeId}`,
// // // // // // // // // // // //         formData,
// // // // // // // // // // // //         {
// // // // // // // // // // // //           headers: {
// // // // // // // // // // // //             storeId,
// // // // // // // // // // // //             "Content-Type": "multipart/form-data",
// // // // // // // // // // // //           },
// // // // // // // // // // // //         }
// // // // // // // // // // // //       );
// // // // // // // // // // // //       alert("Employee updated successfully!");
// // // // // // // // // // // //       resetForm();
// // // // // // // // // // // //       fetchEmployees();
// // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // //       console.error("Error updating employee:", error);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const handleDeleteEmployee = async (id) => {
// // // // // // // // // // // //     try {
// // // // // // // // // // // //       await axios.delete(`http://localhost:5004/employees/${id}`, {
// // // // // // // // // // // //         headers: { storeId },
// // // // // // // // // // // //       });
// // // // // // // // // // // //       alert("Employee deleted successfully!");
// // // // // // // // // // // //       fetchEmployees();
// // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // //       console.error("Error deleting employee:", error);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const handleEditEmployee = (employee) => {
// // // // // // // // // // // //     setEditEmployeeId(employee._id);
// // // // // // // // // // // //     setNewEmployee({
// // // // // // // // // // // //       name: employee.name,
// // // // // // // // // // // //       role: employee.role,
// // // // // // // // // // // //       salary: employee.salary,
// // // // // // // // // // // //       shifts: employee.shifts,
// // // // // // // // // // // //       contact: employee.contact,
// // // // // // // // // // // //       address: employee.address,
// // // // // // // // // // // //       dateOfJoining: employee.dateOfJoining,
// // // // // // // // // // // //       employeeId: employee.employeeId,
// // // // // // // // // // // //       experience: employee.experience,
// // // // // // // // // // // //       image: employee.image || null,
// // // // // // // // // // // //     });
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const resetForm = () => {
// // // // // // // // // // // //     setEditEmployeeId(null);
// // // // // // // // // // // //     setNewEmployee({
// // // // // // // // // // // //       name: "",
// // // // // // // // // // // //       role: "",
// // // // // // // // // // // //       salary: "",
// // // // // // // // // // // //       shifts: "",
// // // // // // // // // // // //       contact: "",
// // // // // // // // // // // //       address: "",
// // // // // // // // // // // //       dateOfJoining: "",
// // // // // // // // // // // //       employeeId: "",
// // // // // // // // // // // //       experience: "",
// // // // // // // // // // // //       image: null,
// // // // // // // // // // // //     });
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div
// // // // // // // // // // // //       className={`p-6 bg-gray-50 min-h-screen transition-all duration-300 ${
// // // // // // // // // // // //         selectedEmployee ? "blur-sm" : ""
// // // // // // // // // // // //       }`}
// // // // // // // // // // // //     >
// // // // // // // // // // // //       <h1 className="text-3xl font-bold text-gray-800 mb-6 animate-fade-in">
// // // // // // // // // // // //         Employee Management
// // // // // // // // // // // //       </h1>

// // // // // // // // // // // //       {/* Add/Edit Employee Section */}
// // // // // // // // // // // //       <div className="bg-white rounded-lg shadow-md p-6 mb-8 animate-fade-in-up">
// // // // // // // // // // // //         <h2 className="text-2xl font-semibold text-gray-700 mb-4">
// // // // // // // // // // // //           {editEmployeeId ? "Edit Employee" : "Add New Employee"}
// // // // // // // // // // // //         </h2>
// // // // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // // // // // // //           {/* Input fields */}
// // // // // // // // // // // //           {Object.keys(newEmployee).map((key) => (
// // // // // // // // // // // //             key !== "image" && (
// // // // // // // // // // // //               <input
// // // // // // // // // // // //                 key={key}
// // // // // // // // // // // //                 type={key === "dateOfJoining" ? "date" : key === "salary" ? "number" : "text"}
// // // // // // // // // // // //                 placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
// // // // // // // // // // // //                 value={newEmployee[key]}
// // // // // // // // // // // //                 onChange={(e) =>
// // // // // // // // // // // //                   setNewEmployee({ ...newEmployee, [key]: e.target.value })
// // // // // // // // // // // //                 }
// // // // // // // // // // // //                 className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
// // // // // // // // // // // //               />
// // // // // // // // // // // //             )
// // // // // // // // // // // //           ))}
// // // // // // // // // // // //           <input
// // // // // // // // // // // //             type="file"
// // // // // // // // // // // //             accept="image/*"
// // // // // // // // // // // //             onChange={(e) =>
// // // // // // // // // // // //               setNewEmployee({ ...newEmployee, image: e.target.files[0] })
// // // // // // // // // // // //             }
// // // // // // // // // // // //             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
// // // // // // // // // // // //           />
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //         <div className="flex gap-4 mt-6">
// // // // // // // // // // // //           <button
// // // // // // // // // // // //             onClick={editEmployeeId ? handleUpdateEmployee : handleAddEmployee}
// // // // // // // // // // // //             className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
// // // // // // // // // // // //           >
// // // // // // // // // // // //             {editEmployeeId ? "Update Employee" : "Add Employee"}
// // // // // // // // // // // //           </button>
// // // // // // // // // // // //           {editEmployeeId && (
// // // // // // // // // // // //             <button
// // // // // // // // // // // //               onClick={resetForm}
// // // // // // // // // // // //               className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
// // // // // // // // // // // //             >
// // // // // // // // // // // //               Cancel
// // // // // // // // // // // //             </button>
// // // // // // // // // // // //           )}
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* Employee List Section */}
// // // // // // // // // // // //       <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in-up">
// // // // // // // // // // // //         <h2 className="text-2xl font-semibold text-gray-700 mb-4">Employee List</h2>
// // // // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // // // // // //           {employees.map((employee) => (
// // // // // // // // // // // //             <div
// // // // // // // // // // // //               key={employee._id}
// // // // // // // // // // // //               onClick={() => setSelectedEmployee(employee)}
// // // // // // // // // // // //               className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg shadow-lg text-white cursor-pointer transform transition-transform hover:scale-105 hover:shadow-xl"
// // // // // // // // // // // //               style={{ animation: "fadeIn 0.5s ease-in-out" }}
// // // // // // // // // // // //             >
// // // // // // // // // // // //               <img
// // // // // // // // // // // //                 src={
// // // // // // // // // // // //                   employee.image
// // // // // // // // // // // //                     ? `http://localhost:5004/uploads/${employee.image}`
// // // // // // // // // // // //                     : `http://localhost:5004/uploads/em.jpg`
// // // // // // // // // // // //                 }
// // // // // // // // // // // //                 alt={`${employee.name}'s profile`}
// // // // // // // // // // // //                 className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white"
// // // // // // // // // // // //               />
// // // // // // // // // // // //               <h3 className="text-xl font-bold text-center">{employee.name}</h3>
// // // // // // // // // // // //               <p className="text-sm text-center">Role: {employee.role}</p>
// // // // // // // // // // // //               <p className="text-sm text-center">Employee ID: {employee.employeeId}</p>
// // // // // // // // // // // //               <div className="flex justify-center gap-4 mt-4">
// // // // // // // // // // // //                 <button
// // // // // // // // // // // //                   onClick={(e) => {
// // // // // // // // // // // //                     e.stopPropagation();
// // // // // // // // // // // //                     handleEditEmployee(employee);
// // // // // // // // // // // //                   }}
// // // // // // // // // // // //                   className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-200"
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   Edit
// // // // // // // // // // // //                 </button>
// // // // // // // // // // // //                 <button
// // // // // // // // // // // //                   onClick={(e) => {
// // // // // // // // // // // //                     e.stopPropagation();
// // // // // // // // // // // //                     handleDeleteEmployee(employee._id);
// // // // // // // // // // // //                   }}
// // // // // // // // // // // //                   className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   Delete
// // // // // // // // // // // //                 </button>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           ))}
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* Full Employee View */}
// // // // // // // // // // // //       {selectedEmployee && (
// // // // // // // // // // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
// // // // // // // // // // // //           <div
// // // // // // // // // // // //             className="bg-white rounded-lg shadow-2xl p-8 max-w-3xl w-full"
// // // // // // // // // // // //             style={{ animation: "fadeIn 0.5s ease-in-out" }}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <img
// // // // // // // // // // // //               src={
// // // // // // // // // // // //                 selectedEmployee.image
// // // // // // // // // // // //                   ? `http://localhost:5004/uploads/${selectedEmployee.image}`
// // // // // // // // // // // //                   : `http://localhost:5004/uploads/em.jpg`
// // // // // // // // // // // //               }
// // // // // // // // // // // //               alt={`${selectedEmployee.name}'s profile`}
// // // // // // // // // // // //               className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500"
// // // // // // // // // // // //             />
// // // // // // // // // // // //             <h3 className="text-2xl font-bold text-center mb-4">{selectedEmployee.name}</h3>
// // // // // // // // // // // //             <div className="grid grid-cols-2 gap-4">
// // // // // // // // // // // //               {Object.entries(selectedEmployee).map(([key, value]) => (
// // // // // // // // // // // //                 key !== "image" && (
// // // // // // // // // // // //                   <>
// // // // // // // // // // // //                     <div className="font-semibold text-right">{key.charAt(0).toUpperCase() + key.slice(1)}:</div>
// // // // // // // // // // // //                     <div>{value}</div>
// // // // // // // // // // // //                   </>
// // // // // // // // // // // //                 )
// // // // // // // // // // // //               ))}
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //             <button
// // // // // // // // // // // //               onClick={() => setSelectedEmployee(null)}
// // // // // // // // // // // //               className="bg-red-500 text-white px-6 py-2 rounded-lg mt-6 hover:bg-red-600 transition duration-200"
// // // // // // // // // // // //             >
// // // // // // // // // // // //               Close
// // // // // // // // // // // //             </button>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       )}

// // // // // // // // // // // //       {/* Add Custom CSS for Animations */}
// // // // // // // // // // // //       <style>
// // // // // // // // // // // //         {`
// // // // // // // // // // // //           @keyframes fadeIn {
// // // // // // // // // // // //             from { opacity: 0; }
// // // // // // // // // // // //             to { opacity: 1; }
// // // // // // // // // // // //           }
// // // // // // // // // // // //           @keyframes fadeInUp {
// // // // // // // // // // // //             from { opacity: 0; transform: translateY(20px); }
// // // // // // // // // // // //             to { opacity: 1; transform: translateY(0); }
// // // // // // // // // // // //           }
// // // // // // // // // // // //           .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
// // // // // // // // // // // //           .animate-fade-in-up { animation: fadeInUp 0.5s ease-in-out; }
// // // // // // // // // // // //         `}
// // // // // // // // // // // //       </style>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default EmployeeManagement;

// // // // // // // // // // // import React, { useEffect, useState, useContext } from "react";
// // // // // // // // // // // import axios from "axios";
// // // // // // // // // // // import { StoreContext } from "./StoreContext";

// // // // // // // // // // // const EmployeeManagement = () => {
// // // // // // // // // // //   const { storeId } = useContext(StoreContext);
// // // // // // // // // // //   const [employees, setEmployees] = useState([]);
// // // // // // // // // // //   const [newEmployee, setNewEmployee] = useState({
// // // // // // // // // // //     name: "",
// // // // // // // // // // //     role: "",
// // // // // // // // // // //     salary: "",
// // // // // // // // // // //     shifts: "",
// // // // // // // // // // //     contact: "",
// // // // // // // // // // //     address: "",
// // // // // // // // // // //     dateOfJoining: "",
// // // // // // // // // // //     employeeId: "",
// // // // // // // // // // //     experience: "",
// // // // // // // // // // //     image: null,
// // // // // // // // // // //   });
// // // // // // // // // // //   const [editEmployeeId, setEditEmployeeId] = useState(null);
// // // // // // // // // // //   const [selectedEmployee, setSelectedEmployee] = useState(null);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     if (storeId) fetchEmployees();
// // // // // // // // // // //   }, [storeId]);

// // // // // // // // // // //   const fetchEmployees = async () => {
// // // // // // // // // // //     try {
// // // // // // // // // // //       const response = await axios.get("http://localhost:5004/employees", {
// // // // // // // // // // //         headers: { storeId },
// // // // // // // // // // //       });
// // // // // // // // // // //       setEmployees(response.data);
// // // // // // // // // // //     } catch (error) {
// // // // // // // // // // //       console.error("Error fetching employees:", error);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleAddEmployee = async () => {
// // // // // // // // // // //     if (!newEmployee.name || !newEmployee.employeeId) {
// // // // // // // // // // //       alert("Name and Employee ID are required!");
// // // // // // // // // // //       return;
// // // // // // // // // // //     }

// // // // // // // // // // //     const formData = new FormData();
// // // // // // // // // // //     Object.keys(newEmployee).forEach((key) => {
// // // // // // // // // // //       formData.append(key, newEmployee[key]);
// // // // // // // // // // //     });

// // // // // // // // // // //     try {
// // // // // // // // // // //       const response = await axios.post(
// // // // // // // // // // //         "http://localhost:5004/employees",
// // // // // // // // // // //         formData,
// // // // // // // // // // //         {
// // // // // // // // // // //           headers: {
// // // // // // // // // // //             storeId,
// // // // // // // // // // //             "Content-Type": "multipart/form-data",
// // // // // // // // // // //           },
// // // // // // // // // // //         }
// // // // // // // // // // //       );
// // // // // // // // // // //       setEmployees([...employees, response.data]);
// // // // // // // // // // //       resetForm();
// // // // // // // // // // //     } catch (error) {
// // // // // // // // // // //       console.error("Error adding employee:", error);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleUpdateEmployee = async () => {
// // // // // // // // // // //     if (!editEmployeeId) return;

// // // // // // // // // // //     const formData = new FormData();
// // // // // // // // // // //     if (newEmployee.image) {
// // // // // // // // // // //       formData.append("image", newEmployee.image);
// // // // // // // // // // //     } else {
// // // // // // // // // // //       formData.append("existingImage", newEmployee.image);
// // // // // // // // // // //     }

// // // // // // // // // // //     Object.keys(newEmployee).forEach((key) => {
// // // // // // // // // // //       formData.append(key, newEmployee[key]);
// // // // // // // // // // //     });

// // // // // // // // // // //     try {
// // // // // // // // // // //       await axios.put(
// // // // // // // // // // //         `http://localhost:5004/employees/${editEmployeeId}`,
// // // // // // // // // // //         formData,
// // // // // // // // // // //         {
// // // // // // // // // // //           headers: {
// // // // // // // // // // //             storeId,
// // // // // // // // // // //             "Content-Type": "multipart/form-data",
// // // // // // // // // // //           },
// // // // // // // // // // //         }
// // // // // // // // // // //       );
// // // // // // // // // // //       alert("Employee updated successfully!");
// // // // // // // // // // //       resetForm();
// // // // // // // // // // //       fetchEmployees();
// // // // // // // // // // //     } catch (error) {
// // // // // // // // // // //       console.error("Error updating employee:", error);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleDeleteEmployee = async (id) => {
// // // // // // // // // // //     try {
// // // // // // // // // // //       await axios.delete(`http://localhost:5004/employees/${id}`, {
// // // // // // // // // // //         headers: { storeId },
// // // // // // // // // // //       });
// // // // // // // // // // //       alert("Employee deleted successfully!");
// // // // // // // // // // //       fetchEmployees();
// // // // // // // // // // //     } catch (error) {
// // // // // // // // // // //       console.error("Error deleting employee:", error);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleEditEmployee = (employee) => {
// // // // // // // // // // //     setEditEmployeeId(employee._id);
// // // // // // // // // // //     setNewEmployee({
// // // // // // // // // // //       name: employee.name,
// // // // // // // // // // //       role: employee.role,
// // // // // // // // // // //       salary: employee.salary,
// // // // // // // // // // //       shifts: employee.shifts,
// // // // // // // // // // //       contact: employee.contact,
// // // // // // // // // // //       address: employee.address,
// // // // // // // // // // //       dateOfJoining: employee.dateOfJoining,
// // // // // // // // // // //       employeeId: employee.employeeId,
// // // // // // // // // // //       experience: employee.experience,
// // // // // // // // // // //       image: employee.image || null,
// // // // // // // // // // //     });
// // // // // // // // // // //   };

// // // // // // // // // // //   const resetForm = () => {
// // // // // // // // // // //     setEditEmployeeId(null);
// // // // // // // // // // //     setNewEmployee({
// // // // // // // // // // //       name: "",
// // // // // // // // // // //       role: "",
// // // // // // // // // // //       salary: "",
// // // // // // // // // // //       shifts: "",
// // // // // // // // // // //       contact: "",
// // // // // // // // // // //       address: "",
// // // // // // // // // // //       dateOfJoining: "",
// // // // // // // // // // //       employeeId: "",
// // // // // // // // // // //       experience: "",
// // // // // // // // // // //       image: null,
// // // // // // // // // // //     });
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="p-6 bg-gray-50 min-h-screen">
// // // // // // // // // // //       {/* Blurred Background */}
// // // // // // // // // // //       <div
// // // // // // // // // // //         className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 ${
// // // // // // // // // // //           selectedEmployee ? "block" : "hidden"
// // // // // // // // // // //         }`}
// // // // // // // // // // //       ></div>

// // // // // // // // // // //       <h1 className="text-3xl font-bold text-gray-800 mb-6">Employee Management</h1>

// // // // // // // // // // //       {/* Add/Edit Employee Section */}
// // // // // // // // // // //       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
// // // // // // // // // // //         <h2 className="text-2xl font-semibold text-gray-700 mb-4">
// // // // // // // // // // //           {editEmployeeId ? "Edit Employee" : "Add New Employee"}
// // // // // // // // // // //         </h2>
// // // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // // // // // //           {/* Input fields */}
// // // // // // // // // // //           {Object.keys(newEmployee).map((key) => (
// // // // // // // // // // //             key !== "image" && (
// // // // // // // // // // //               <input
// // // // // // // // // // //                 key={key}
// // // // // // // // // // //                 type={key === "dateOfJoining" ? "date" : key === "salary" ? "number" : "text"}
// // // // // // // // // // //                 placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
// // // // // // // // // // //                 value={newEmployee[key]}
// // // // // // // // // // //                 onChange={(e) =>
// // // // // // // // // // //                   setNewEmployee({ ...newEmployee, [key]: e.target.value })
// // // // // // // // // // //                 }
// // // // // // // // // // //                 className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
// // // // // // // // // // //               />
// // // // // // // // // // //             )
// // // // // // // // // // //           ))}
// // // // // // // // // // //           <input
// // // // // // // // // // //             type="file"
// // // // // // // // // // //             accept="image/*"
// // // // // // // // // // //             onChange={(e) =>
// // // // // // // // // // //               setNewEmployee({ ...newEmployee, image: e.target.files[0] })
// // // // // // // // // // //             }
// // // // // // // // // // //             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
// // // // // // // // // // //           />
// // // // // // // // // // //         </div>
// // // // // // // // // // //         <div className="flex gap-4 mt-6">
// // // // // // // // // // //           <button
// // // // // // // // // // //             onClick={editEmployeeId ? handleUpdateEmployee : handleAddEmployee}
// // // // // // // // // // //             className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
// // // // // // // // // // //           >
// // // // // // // // // // //             {editEmployeeId ? "Update Employee" : "Add Employee"}
// // // // // // // // // // //           </button>
// // // // // // // // // // //           {editEmployeeId && (
// // // // // // // // // // //             <button
// // // // // // // // // // //               onClick={resetForm}
// // // // // // // // // // //               className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
// // // // // // // // // // //             >
// // // // // // // // // // //               Cancel
// // // // // // // // // // //             </button>
// // // // // // // // // // //           )}
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Employee List Section */}
// // // // // // // // // // //       <div className="bg-white rounded-lg shadow-md p-6">
// // // // // // // // // // //         <h2 className="text-2xl font-semibold text-gray-700 mb-4">Employee List</h2>
// // // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // // // // //           {employees.map((employee) => (
// // // // // // // // // // //             <div
// // // // // // // // // // //               key={employee._id}
// // // // // // // // // // //               onClick={() => setSelectedEmployee(employee)}
// // // // // // // // // // //               className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg shadow-lg text-white cursor-pointer transform transition-transform hover:scale-105 hover:shadow-xl"
// // // // // // // // // // //             >
// // // // // // // // // // //               <img
// // // // // // // // // // //                 src={
// // // // // // // // // // //                   employee.image
// // // // // // // // // // //                     ? `http://localhost:5004/uploads/${employee.image}`
// // // // // // // // // // //                     : `http://localhost:5004/uploads/em.jpg`
// // // // // // // // // // //                 }
// // // // // // // // // // //                 alt={`${employee.name}'s profile`}
// // // // // // // // // // //                 className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white"
// // // // // // // // // // //               />
// // // // // // // // // // //               <h3 className="text-xl font-bold text-center">{employee.name}</h3>
// // // // // // // // // // //               <p className="text-sm text-center">Role: {employee.role}</p>
// // // // // // // // // // //               <p className="text-sm text-center">Employee ID: {employee.employeeId}</p>
// // // // // // // // // // //               <div className="flex justify-center gap-4 mt-4">
// // // // // // // // // // //                 <button
// // // // // // // // // // //                   onClick={(e) => {
// // // // // // // // // // //                     e.stopPropagation();
// // // // // // // // // // //                     handleEditEmployee(employee);
// // // // // // // // // // //                   }}
// // // // // // // // // // //                   className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-200"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   Edit
// // // // // // // // // // //                 </button>
// // // // // // // // // // //                 <button
// // // // // // // // // // //                   onClick={(e) => {
// // // // // // // // // // //                     e.stopPropagation();
// // // // // // // // // // //                     handleDeleteEmployee(employee._id);
// // // // // // // // // // //                   }}
// // // // // // // // // // //                   className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   Delete
// // // // // // // // // // //                 </button>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Full Employee View */}
// // // // // // // // // // //       {selectedEmployee && (
// // // // // // // // // // //         <div className="fixed inset-0 flex justify-center items-center z-50">
// // // // // // // // // // //           <div className="bg-white rounded-lg shadow-2xl p-8 max-w-3xl w-full z-50">
// // // // // // // // // // //             <img
// // // // // // // // // // //               src={
// // // // // // // // // // //                 selectedEmployee.image
// // // // // // // // // // //                   ? `http://localhost:5004/uploads/${selectedEmployee.image}`
// // // // // // // // // // //                   : `http://localhost:5004/uploads/em.jpg`
// // // // // // // // // // //               }
// // // // // // // // // // //               alt={`${selectedEmployee.name}'s profile`}
// // // // // // // // // // //               className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500"
// // // // // // // // // // //             />
// // // // // // // // // // //             <h3 className="text-2xl font-bold text-center mb-4">{selectedEmployee.name}</h3>
// // // // // // // // // // //             <div className="grid grid-cols-2 gap-4">
// // // // // // // // // // //               {Object.entries(selectedEmployee).map(([key, value]) => (
// // // // // // // // // // //                 key !== "image" && (
// // // // // // // // // // //                   <>
// // // // // // // // // // //                     <div className="font-semibold text-right">{key.charAt(0).toUpperCase() + key.slice(1)}:</div>
// // // // // // // // // // //                     <div>{value}</div>
// // // // // // // // // // //                   </>
// // // // // // // // // // //                 )
// // // // // // // // // // //               ))}
// // // // // // // // // // //             </div>
// // // // // // // // // // //             <button
// // // // // // // // // // //               onClick={() => setSelectedEmployee(null)}
// // // // // // // // // // //               className="bg-red-500 text-white px-6 py-2 rounded-lg mt-6 hover:bg-red-600 transition duration-200"
// // // // // // // // // // //             >
// // // // // // // // // // //               Close
// // // // // // // // // // //             </button>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )}
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default EmployeeManagement;

// // // // // // // // // // import React, { useEffect, useState, useContext } from "react";
// // // // // // // // // // import axios from "axios";
// // // // // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // // // // import { User, Briefcase, DollarSign, Clock, Phone, Home, Calendar, FileText, Edit, Trash, X } from "react-feather"; // Icons

// // // // // // // // // // const EmployeeManagement = () => {
// // // // // // // // // //   const { storeId } = useContext(StoreContext);
// // // // // // // // // //   const [employees, setEmployees] = useState([]);
// // // // // // // // // //   const [newEmployee, setNewEmployee] = useState({
// // // // // // // // // //     name: "",
// // // // // // // // // //     role: "",
// // // // // // // // // //     salary: "",
// // // // // // // // // //     shifts: "",
// // // // // // // // // //     contact: "",
// // // // // // // // // //     address: "",
// // // // // // // // // //     dateOfJoining: "",
// // // // // // // // // //     employeeId: "",
// // // // // // // // // //     experience: "",
// // // // // // // // // //     image: null,
// // // // // // // // // //   });
// // // // // // // // // //   const [editEmployeeId, setEditEmployeeId] = useState(null);
// // // // // // // // // //   const [selectedEmployee, setSelectedEmployee] = useState(null);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     if (storeId) fetchEmployees();
// // // // // // // // // //   }, [storeId]);

// // // // // // // // // //   const fetchEmployees = async () => {
// // // // // // // // // //     try {
// // // // // // // // // //       const response = await axios.get("http://localhost:5004/employees", {
// // // // // // // // // //         headers: { storeId },
// // // // // // // // // //       });
// // // // // // // // // //       setEmployees(response.data);
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error("Error fetching employees:", error);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleAddEmployee = async () => {
// // // // // // // // // //     if (!newEmployee.name || !newEmployee.employeeId) {
// // // // // // // // // //       alert("Name and Employee ID are required!");
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     const formData = new FormData();
// // // // // // // // // //     Object.keys(newEmployee).forEach((key) => {
// // // // // // // // // //       formData.append(key, newEmployee[key]);
// // // // // // // // // //     });

// // // // // // // // // //     try {
// // // // // // // // // //       const response = await axios.post(
// // // // // // // // // //         "http://localhost:5004/employees",
// // // // // // // // // //         formData,
// // // // // // // // // //         {
// // // // // // // // // //           headers: {
// // // // // // // // // //             storeId,
// // // // // // // // // //             "Content-Type": "multipart/form-data",
// // // // // // // // // //           },
// // // // // // // // // //         }
// // // // // // // // // //       );
// // // // // // // // // //       setEmployees([...employees, response.data]);
// // // // // // // // // //       resetForm();
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error("Error adding employee:", error);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleUpdateEmployee = async () => {
// // // // // // // // // //     if (!editEmployeeId) return;

// // // // // // // // // //     const formData = new FormData();
// // // // // // // // // //     if (newEmployee.image) {
// // // // // // // // // //       formData.append("image", newEmployee.image);
// // // // // // // // // //     } else {
// // // // // // // // // //       formData.append("existingImage", newEmployee.image);
// // // // // // // // // //     }

// // // // // // // // // //     Object.keys(newEmployee).forEach((key) => {
// // // // // // // // // //       formData.append(key, newEmployee[key]);
// // // // // // // // // //     });

// // // // // // // // // //     try {
// // // // // // // // // //       await axios.put(
// // // // // // // // // //         `http://localhost:5004/employees/${editEmployeeId}`,
// // // // // // // // // //         formData,
// // // // // // // // // //         {
// // // // // // // // // //           headers: {
// // // // // // // // // //             storeId,
// // // // // // // // // //             "Content-Type": "multipart/form-data",
// // // // // // // // // //           },
// // // // // // // // // //         }
// // // // // // // // // //       );
// // // // // // // // // //       alert("Employee updated successfully!");
// // // // // // // // // //       resetForm();
// // // // // // // // // //       fetchEmployees();
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error("Error updating employee:", error);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleDeleteEmployee = async (id) => {
// // // // // // // // // //     try {
// // // // // // // // // //       await axios.delete(`http://localhost:5004/employees/${id}`, {
// // // // // // // // // //         headers: { storeId },
// // // // // // // // // //       });
// // // // // // // // // //       alert("Employee deleted successfully!");
// // // // // // // // // //       fetchEmployees();
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error("Error deleting employee:", error);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleEditEmployee = (employee) => {
// // // // // // // // // //     setEditEmployeeId(employee._id);
// // // // // // // // // //     setNewEmployee({
// // // // // // // // // //       name: employee.name,
// // // // // // // // // //       role: employee.role,
// // // // // // // // // //       salary: employee.salary,
// // // // // // // // // //       shifts: employee.shifts,
// // // // // // // // // //       contact: employee.contact,
// // // // // // // // // //       address: employee.address,
// // // // // // // // // //       dateOfJoining: employee.dateOfJoining,
// // // // // // // // // //       employeeId: employee.employeeId,
// // // // // // // // // //       experience: employee.experience,
// // // // // // // // // //       image: employee.image || null,
// // // // // // // // // //     });
// // // // // // // // // //   };

// // // // // // // // // //   const resetForm = () => {
// // // // // // // // // //     setEditEmployeeId(null);
// // // // // // // // // //     setNewEmployee({
// // // // // // // // // //       name: "",
// // // // // // // // // //       role: "",
// // // // // // // // // //       salary: "",
// // // // // // // // // //       shifts: "",
// // // // // // // // // //       contact: "",
// // // // // // // // // //       address: "",
// // // // // // // // // //       dateOfJoining: "",
// // // // // // // // // //       employeeId: "",
// // // // // // // // // //       experience: "",
// // // // // // // // // //       image: null,
// // // // // // // // // //     });
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="p-6 bg-gray-50 min-h-screen">
// // // // // // // // // //       {/* Blurred Background */}
// // // // // // // // // //       <div
// // // // // // // // // //         className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 ${
// // // // // // // // // //           selectedEmployee ? "block" : "hidden"
// // // // // // // // // //         }`}
// // // // // // // // // //       ></div>

// // // // // // // // // //       <h1 className="text-3xl font-bold text-gray-800 mb-6">Employee Management</h1>

// // // // // // // // // //       {/* Add/Edit Employee Section */}
// // // // // // // // // //       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
// // // // // // // // // //         <h2 className="text-2xl font-semibold text-gray-700 mb-4">
// // // // // // // // // //           {editEmployeeId ? "Edit Employee" : "Add New Employee"}
// // // // // // // // // //         </h2>
// // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // // // // //           {/* Input fields with icons */}
// // // // // // // // // //           <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500">
// // // // // // // // // //             <User size={20} className="text-gray-400 mr-2" />
// // // // // // // // // //             <input
// // // // // // // // // //               type="text"
// // // // // // // // // //               placeholder="Name"
// // // // // // // // // //               value={newEmployee.name}
// // // // // // // // // //               onChange={(e) =>
// // // // // // // // // //                 setNewEmployee({ ...newEmployee, name: e.target.value })
// // // // // // // // // //               }
// // // // // // // // // //               className="w-full focus:outline-none"
// // // // // // // // // //             />
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500">
// // // // // // // // // //             <Briefcase size={20} className="text-gray-400 mr-2" />
// // // // // // // // // //             <input
// // // // // // // // // //               type="text"
// // // // // // // // // //               placeholder="Role"
// // // // // // // // // //               value={newEmployee.role}
// // // // // // // // // //               onChange={(e) =>
// // // // // // // // // //                 setNewEmployee({ ...newEmployee, role: e.target.value })
// // // // // // // // // //               }
// // // // // // // // // //               className="w-full focus:outline-none"
// // // // // // // // // //             />
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500">
// // // // // // // // // //             <DollarSign size={20} className="text-gray-400 mr-2" />
// // // // // // // // // //             <input
// // // // // // // // // //               type="number"
// // // // // // // // // //               placeholder="Salary"
// // // // // // // // // //               value={newEmployee.salary}
// // // // // // // // // //               onChange={(e) =>
// // // // // // // // // //                 setNewEmployee({ ...newEmployee, salary: e.target.value })
// // // // // // // // // //               }
// // // // // // // // // //               className="w-full focus:outline-none"
// // // // // // // // // //             />
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500">
// // // // // // // // // //             <Clock size={20} className="text-gray-400 mr-2" />
// // // // // // // // // //             <input
// // // // // // // // // //               type="text"
// // // // // // // // // //               placeholder="Shifts"
// // // // // // // // // //               value={newEmployee.shifts}
// // // // // // // // // //               onChange={(e) =>
// // // // // // // // // //                 setNewEmployee({ ...newEmployee, shifts: e.target.value })
// // // // // // // // // //               }
// // // // // // // // // //               className="w-full focus:outline-none"
// // // // // // // // // //             />
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500">
// // // // // // // // // //             <Phone size={20} className="text-gray-400 mr-2" />
// // // // // // // // // //             <input
// // // // // // // // // //               type="text"
// // // // // // // // // //               placeholder="Contact"
// // // // // // // // // //               value={newEmployee.contact}
// // // // // // // // // //               onChange={(e) =>
// // // // // // // // // //                 setNewEmployee({ ...newEmployee, contact: e.target.value })
// // // // // // // // // //               }
// // // // // // // // // //               className="w-full focus:outline-none"
// // // // // // // // // //             />
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500">
// // // // // // // // // //             <Home size={20} className="text-gray-400 mr-2" />
// // // // // // // // // //             <input
// // // // // // // // // //               type="text"
// // // // // // // // // //               placeholder="Address"
// // // // // // // // // //               value={newEmployee.address}
// // // // // // // // // //               onChange={(e) =>
// // // // // // // // // //                 setNewEmployee({ ...newEmployee, address: e.target.value })
// // // // // // // // // //               }
// // // // // // // // // //               className="w-full focus:outline-none"
// // // // // // // // // //             />
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500">
// // // // // // // // // //             <Calendar size={20} className="text-gray-400 mr-2" />
// // // // // // // // // //             <input
// // // // // // // // // //               type="date"
// // // // // // // // // //               placeholder="Date of Joining"
// // // // // // // // // //               value={newEmployee.dateOfJoining}
// // // // // // // // // //               onChange={(e) =>
// // // // // // // // // //                 setNewEmployee({
// // // // // // // // // //                   ...newEmployee,
// // // // // // // // // //                   dateOfJoining: e.target.value,
// // // // // // // // // //                 })
// // // // // // // // // //               }
// // // // // // // // // //               className="w-full focus:outline-none"
// // // // // // // // // //             />
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500">
// // // // // // // // // //             <FileText size={20} className="text-gray-400 mr-2" />
// // // // // // // // // //             <input
// // // // // // // // // //               type="text"
// // // // // // // // // //               placeholder="Employee ID"
// // // // // // // // // //               value={newEmployee.employeeId}
// // // // // // // // // //               onChange={(e) =>
// // // // // // // // // //                 setNewEmployee({ ...newEmployee, employeeId: e.target.value })
// // // // // // // // // //               }
// // // // // // // // // //               className="w-full focus:outline-none"
// // // // // // // // // //             />
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500">
// // // // // // // // // //             <FileText size={20} className="text-gray-400 mr-2" />
// // // // // // // // // //             <input
// // // // // // // // // //               type="text"
// // // // // // // // // //               placeholder="Experience"
// // // // // // // // // //               value={newEmployee.experience}
// // // // // // // // // //               onChange={(e) =>
// // // // // // // // // //                 setNewEmployee({ ...newEmployee, experience: e.target.value })
// // // // // // // // // //               }
// // // // // // // // // //               className="w-full focus:outline-none"
// // // // // // // // // //             />
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500">
// // // // // // // // // //             <User size={20} className="text-gray-400 mr-2" />
// // // // // // // // // //             <input
// // // // // // // // // //               type="file"
// // // // // // // // // //               accept="image/*"
// // // // // // // // // //               onChange={(e) =>
// // // // // // // // // //                 setNewEmployee({ ...newEmployee, image: e.target.files[0] })
// // // // // // // // // //               }
// // // // // // // // // //               className="w-full focus:outline-none"
// // // // // // // // // //             />
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //         <div className="flex gap-4 mt-6">
// // // // // // // // // //           <button
// // // // // // // // // //             onClick={editEmployeeId ? handleUpdateEmployee : handleAddEmployee}
// // // // // // // // // //             className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200 flex items-center gap-2"
// // // // // // // // // //           >
// // // // // // // // // //             {editEmployeeId ? <Edit size={18} /> : <User size={18} />}
// // // // // // // // // //             {editEmployeeId ? "Update Employee" : "Add Employee"}
// // // // // // // // // //           </button>
// // // // // // // // // //           {editEmployeeId && (
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={resetForm}
// // // // // // // // // //               className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-200 flex items-center gap-2"
// // // // // // // // // //             >
// // // // // // // // // //               <X size={18} />
// // // // // // // // // //               Cancel
// // // // // // // // // //             </button>
// // // // // // // // // //           )}
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Employee List Section */}
// // // // // // // // // //       <div className="bg-white rounded-lg shadow-md p-6">
// // // // // // // // // //         <h2 className="text-2xl font-semibold text-gray-700 mb-4">Employee List</h2>
// // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // // // //           {employees.map((employee) => (
// // // // // // // // // //             <div
// // // // // // // // // //               key={employee._id}
// // // // // // // // // //               onClick={() => setSelectedEmployee(employee)}
// // // // // // // // // //               className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg shadow-lg text-white cursor-pointer transform transition-transform hover:scale-105 hover:shadow-xl"
// // // // // // // // // //             >
// // // // // // // // // //               <img
// // // // // // // // // //                 src={
// // // // // // // // // //                   employee.image
// // // // // // // // // //                     ? `http://localhost:5004/uploads/${employee.image}`
// // // // // // // // // //                     : `http://localhost:5004/uploads/em.jpg`
// // // // // // // // // //                 }
// // // // // // // // // //                 alt={`${employee.name}'s profile`}
// // // // // // // // // //                 className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white"
// // // // // // // // // //               />
// // // // // // // // // //               <h3 className="text-xl font-bold text-center">{employee.name}</h3>
// // // // // // // // // //               <p className="text-sm text-center">Role: {employee.role}</p>
// // // // // // // // // //               <p className="text-sm text-center">Employee ID: {employee.employeeId}</p>
// // // // // // // // // //               <div className="flex justify-center gap-4 mt-4">
// // // // // // // // // //                 <button
// // // // // // // // // //                   onClick={(e) => {
// // // // // // // // // //                     e.stopPropagation();
// // // // // // // // // //                     handleEditEmployee(employee);
// // // // // // // // // //                   }}
// // // // // // // // // //                   className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-200 flex items-center gap-2"
// // // // // // // // // //                 >
// // // // // // // // // //                   <Edit size={16} />
// // // // // // // // // //                   Edit
// // // // // // // // // //                 </button>
// // // // // // // // // //                 <button
// // // // // // // // // //                   onClick={(e) => {
// // // // // // // // // //                     e.stopPropagation();
// // // // // // // // // //                     handleDeleteEmployee(employee._id);
// // // // // // // // // //                   }}
// // // // // // // // // //                   className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 flex items-center gap-2"
// // // // // // // // // //                 >
// // // // // // // // // //                   <Trash size={16} />
// // // // // // // // // //                   Delete
// // // // // // // // // //                 </button>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Full Employee View */}
// // // // // // // // // //       {selectedEmployee && (
// // // // // // // // // //         <div className="fixed inset-0 flex justify-center items-center z-50">
// // // // // // // // // //           <div className="bg-white rounded-lg shadow-2xl p-8 max-w-3xl w-full z-50">
// // // // // // // // // //             <img
// // // // // // // // // //               src={
// // // // // // // // // //                 selectedEmployee.image
// // // // // // // // // //                   ? `http://localhost:5004/uploads/${selectedEmployee.image}`
// // // // // // // // // //                   : `http://localhost:5004/uploads/em.jpg`
// // // // // // // // // //               }
// // // // // // // // // //               alt={`${selectedEmployee.name}'s profile`}
// // // // // // // // // //               className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500"
// // // // // // // // // //             />
// // // // // // // // // //             <h3 className="text-2xl font-bold text-center mb-4">{selectedEmployee.name}</h3>
// // // // // // // // // //             <div className="grid grid-cols-2 gap-4">
// // // // // // // // // //               {Object.entries(selectedEmployee).map(([key, value]) => (
// // // // // // // // // //                 key !== "image" && (
// // // // // // // // // //                   <>
// // // // // // // // // //                     <div className="font-semibold text-right">{key.charAt(0).toUpperCase() + key.slice(1)}:</div>
// // // // // // // // // //                     <div>{value}</div>
// // // // // // // // // //                   </>
// // // // // // // // // //                 )
// // // // // // // // // //               ))}
// // // // // // // // // //             </div>
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={() => setSelectedEmployee(null)}
// // // // // // // // // //               className="bg-red-500 text-white px-6 py-2 rounded-lg mt-6 hover:bg-red-600 transition duration-200 flex items-center gap-2 mx-auto"
// // // // // // // // // //             >
// // // // // // // // // //               <X size={18} />
// // // // // // // // // //               Close
// // // // // // // // // //             </button>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default EmployeeManagement;



// // // // // // // // // import React, { useEffect, useState, useContext } from "react";
// // // // // // // // // import axios from "axios";
// // // // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // // // import { User, Briefcase, DollarSign, Clock, Phone, Home, Calendar, FileText, Edit, Trash, X } from "react-feather"; // Icons
// // // // // // // // // import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from "recharts"; // Charts
// // // // // // // // // import { motion } from "framer-motion"; // Animations

// // // // // // // // // const EmployeeManagement = () => {
// // // // // // // // //   const { storeId } = useContext(StoreContext);
// // // // // // // // //   const [employees, setEmployees] = useState([]);
// // // // // // // // //   const [newEmployee, setNewEmployee] = useState({
// // // // // // // // //     name: "",
// // // // // // // // //     role: "",
// // // // // // // // //     salary: "",
// // // // // // // // //     shifts: "",
// // // // // // // // //     contact: "",
// // // // // // // // //     address: "",
// // // // // // // // //     dateOfJoining: "",
// // // // // // // // //     employeeId: "",
// // // // // // // // //     experience: "",
// // // // // // // // //     image: null,
// // // // // // // // //   });
// // // // // // // // //   const [editEmployeeId, setEditEmployeeId] = useState(null);
// // // // // // // // //   const [selectedEmployee, setSelectedEmployee] = useState(null);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (storeId) fetchEmployees();
// // // // // // // // //   }, [storeId]);

// // // // // // // // //   const fetchEmployees = async () => {
// // // // // // // // //     try {
// // // // // // // // //       const response = await axios.get("http://localhost:5004/employees", {
// // // // // // // // //         headers: { storeId },
// // // // // // // // //       });
// // // // // // // // //       setEmployees(response.data);
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error("Error fetching employees:", error);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   // Data for visualizations
// // // // // // // // //   const roleDistribution = employees.reduce((acc, employee) => {
// // // // // // // // //     acc[employee.role] = (acc[employee.role] || 0) + 1;
// // // // // // // // //     return acc;
// // // // // // // // //   }, {});

// // // // // // // // //   const salaryData = employees.map((employee) => ({
// // // // // // // // //     name: employee.name,
// // // // // // // // //     salary: employee.salary,
// // // // // // // // //   }));

// // // // // // // // //   const roleData = Object.keys(roleDistribution).map((role) => ({
// // // // // // // // //     name: role,
// // // // // // // // //     value: roleDistribution[role],
// // // // // // // // //   }));

// // // // // // // // //   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]; // Colors for pie chart

// // // // // // // // //   return (
// // // // // // // // //     <div className="p-6 bg-gray-50 min-h-screen">
// // // // // // // // //       {/* Blurred Background */}
// // // // // // // // //       <div
// // // // // // // // //         className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 ${
// // // // // // // // //           selectedEmployee ? "block" : "hidden"
// // // // // // // // //         }`}
// // // // // // // // //       ></div>

// // // // // // // // //       <h1 className="text-3xl font-bold text-gray-800 mb-6">Employee Management</h1>

// // // // // // // // //       {/* Visualizations Section */}
// // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
// // // // // // // // //         {/* Salary Distribution Bar Chart */}
// // // // // // // // //         <motion.div
// // // // // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // // // //           transition={{ duration: 0.5 }}
// // // // // // // // //           className="bg-white rounded-lg shadow-md p-6"
// // // // // // // // //         >
// // // // // // // // //           <h2 className="text-xl font-semibold text-gray-700 mb-4">Salary Distribution</h2>
// // // // // // // // //           <BarChart width={500} height={300} data={salaryData}>
// // // // // // // // //             <XAxis dataKey="name" />
// // // // // // // // //             <YAxis />
// // // // // // // // //             <Tooltip />
// // // // // // // // //             <Legend />
// // // // // // // // //             <Bar dataKey="salary" fill="#8884d8" />
// // // // // // // // //           </BarChart>
// // // // // // // // //         </motion.div>

// // // // // // // // //         {/* Role Distribution Pie Chart */}
// // // // // // // // //         <motion.div
// // // // // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // // // //           transition={{ duration: 0.5, delay: 0.2 }}
// // // // // // // // //           className="bg-white rounded-lg shadow-md p-6"
// // // // // // // // //         >
// // // // // // // // //           <h2 className="text-xl font-semibold text-gray-700 mb-4">Role Distribution</h2>
// // // // // // // // //           <PieChart width={500} height={300}>
// // // // // // // // //             <Pie
// // // // // // // // //               data={roleData}
// // // // // // // // //               cx="50%"
// // // // // // // // //               cy="50%"
// // // // // // // // //               outerRadius={100}
// // // // // // // // //               fill="#8884d8"
// // // // // // // // //               dataKey="value"
// // // // // // // // //               label
// // // // // // // // //             >
// // // // // // // // //               {roleData.map((entry, index) => (
// // // // // // // // //                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// // // // // // // // //               ))}
// // // // // // // // //             </Pie>
// // // // // // // // //             <Tooltip />
// // // // // // // // //             <Legend />
// // // // // // // // //           </PieChart>
// // // // // // // // //         </motion.div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Add/Edit Employee Section */}
// // // // // // // // //       <motion.div
// // // // // // // // //         initial={{ opacity: 0, y: 20 }}
// // // // // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // // // // //         transition={{ duration: 0.5, delay: 0.4 }}
// // // // // // // // //         className="bg-white rounded-lg shadow-md p-6 mb-8"
// // // // // // // // //       >
// // // // // // // // //         <h2 className="text-2xl font-semibold text-gray-700 mb-4">
// // // // // // // // //           {editEmployeeId ? "Edit Employee" : "Add New Employee"}
// // // // // // // // //         </h2>
// // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // // // //           {/* Input fields with icons */}
// // // // // // // // //           {Object.keys(newEmployee).map((key) => (
// // // // // // // // //             key !== "image" && (
// // // // // // // // //               <div
// // // // // // // // //                 key={key}
// // // // // // // // //                 className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500"
// // // // // // // // //               >
// // // // // // // // //                 {key === "name" && <User size={20} className="text-gray-400 mr-2" />}
// // // // // // // // //                 {key === "role" && <Briefcase size={20} className="text-gray-400 mr-2" />}
// // // // // // // // //                 {key === "salary" && <DollarSign size={20} className="text-gray-400 mr-2" />}
// // // // // // // // //                 {key === "shifts" && <Clock size={20} className="text-gray-400 mr-2" />}
// // // // // // // // //                 {key === "contact" && <Phone size={20} className="text-gray-400 mr-2" />}
// // // // // // // // //                 {key === "address" && <Home size={20} className="text-gray-400 mr-2" />}
// // // // // // // // //                 {key === "dateOfJoining" && <Calendar size={20} className="text-gray-400 mr-2" />}
// // // // // // // // //                 {key === "employeeId" && <FileText size={20} className="text-gray-400 mr-2" />}
// // // // // // // // //                 {key === "experience" && <FileText size={20} className="text-gray-400 mr-2" />}
// // // // // // // // //                 <input
// // // // // // // // //                   type={key === "dateOfJoining" ? "date" : key === "salary" ? "number" : "text"}
// // // // // // // // //                   placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
// // // // // // // // //                   value={newEmployee[key]}
// // // // // // // // //                   onChange={(e) =>
// // // // // // // // //                     setNewEmployee({ ...newEmployee, [key]: e.target.value })
// // // // // // // // //                   }
// // // // // // // // //                   className="w-full focus:outline-none"
// // // // // // // // //                 />
// // // // // // // // //               </div>
// // // // // // // // //             )
// // // // // // // // //           ))}
// // // // // // // // //           <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500">
// // // // // // // // //             <User size={20} className="text-gray-400 mr-2" />
// // // // // // // // //             <input
// // // // // // // // //               type="file"
// // // // // // // // //               accept="image/*"
// // // // // // // // //               onChange={(e) =>
// // // // // // // // //                 setNewEmployee({ ...newEmployee, image: e.target.files[0] })
// // // // // // // // //               }
// // // // // // // // //               className="w-full focus:outline-none"
// // // // // // // // //             />
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //         <div className="flex gap-4 mt-6">
// // // // // // // // //           <button
// // // // // // // // //             onClick={editEmployeeId ? handleUpdateEmployee : handleAddEmployee}
// // // // // // // // //             className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200 flex items-center gap-2"
// // // // // // // // //           >
// // // // // // // // //             {editEmployeeId ? <Edit size={18} /> : <User size={18} />}
// // // // // // // // //             {editEmployeeId ? "Update Employee" : "Add Employee"}
// // // // // // // // //           </button>
// // // // // // // // //           {editEmployeeId && (
// // // // // // // // //             <button
// // // // // // // // //               onClick={resetForm}
// // // // // // // // //               className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-200 flex items-center gap-2"
// // // // // // // // //             >
// // // // // // // // //               <X size={18} />
// // // // // // // // //               Cancel
// // // // // // // // //             </button>
// // // // // // // // //           )}
// // // // // // // // //         </div>
// // // // // // // // //       </motion.div>

// // // // // // // // //       {/* Employee List Section */}
// // // // // // // // //       <motion.div
// // // // // // // // //         initial={{ opacity: 0, y: 20 }}
// // // // // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // // // // //         transition={{ duration: 0.5, delay: 0.6 }}
// // // // // // // // //         className="bg-white rounded-lg shadow-md p-6"
// // // // // // // // //       >
// // // // // // // // //         <h2 className="text-2xl font-semibold text-gray-700 mb-4">Employee List</h2>
// // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // // //           {employees.map((employee) => (
// // // // // // // // //             <motion.div
// // // // // // // // //               key={employee._id}
// // // // // // // // //               whileHover={{ scale: 1.05 }}
// // // // // // // // //               whileTap={{ scale: 0.95 }}
// // // // // // // // //               onClick={() => setSelectedEmployee(employee)}
// // // // // // // // //               className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg shadow-lg text-white cursor-pointer h-64 flex flex-col justify-center items-center"
// // // // // // // // //             >
// // // // // // // // //               <img
// // // // // // // // //                 src={
// // // // // // // // //                   employee.image
// // // // // // // // //                     ? `http://localhost:5004/uploads/${employee.image}`
// // // // // // // // //                     : `http://localhost:5004/uploads/em.jpg`
// // // // // // // // //                 }
// // // // // // // // //                 alt={`${employee.name}'s profile`}
// // // // // // // // //                 className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white"
// // // // // // // // //               />
// // // // // // // // //               <h3 className="text-xl font-bold text-center">{employee.name}</h3>
// // // // // // // // //               <p className="text-sm text-center">Role: {employee.role}</p>
// // // // // // // // //               <p className="text-sm text-center">Employee ID: {employee.employeeId}</p>
// // // // // // // // //               <div className="flex justify-center gap-4 mt-4">
// // // // // // // // //                 <button
// // // // // // // // //                   onClick={(e) => {
// // // // // // // // //                     e.stopPropagation();
// // // // // // // // //                     handleEditEmployee(employee);
// // // // // // // // //                   }}
// // // // // // // // //                   className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-200 flex items-center gap-2"
// // // // // // // // //                 >
// // // // // // // // //                   <Edit size={16} />
// // // // // // // // //                   Edit
// // // // // // // // //                 </button>
// // // // // // // // //                 <button
// // // // // // // // //                   onClick={(e) => {
// // // // // // // // //                     e.stopPropagation();
// // // // // // // // //                     handleDeleteEmployee(employee._id);
// // // // // // // // //                   }}
// // // // // // // // //                   className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 flex items-center gap-2"
// // // // // // // // //                 >
// // // // // // // // //                   <Trash size={16} />
// // // // // // // // //                   Delete
// // // // // // // // //                 </button>
// // // // // // // // //               </div>
// // // // // // // // //             </motion.div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //       </motion.div>

// // // // // // // // //       {/* Full Employee View */}
// // // // // // // // //       {selectedEmployee && (
// // // // // // // // //         <motion.div
// // // // // // // // //           initial={{ opacity: 0 }}
// // // // // // // // //           animate={{ opacity: 1 }}
// // // // // // // // //           transition={{ duration: 0.3 }}
// // // // // // // // //           className="fixed inset-0 flex justify-center items-center z-50"
// // // // // // // // //         >
// // // // // // // // //           <div className="bg-white rounded-lg shadow-2xl p-8 max-w-3xl w-full z-50">
// // // // // // // // //             <img
// // // // // // // // //               src={
// // // // // // // // //                 selectedEmployee.image
// // // // // // // // //                   ? `http://localhost:5004/uploads/${selectedEmployee.image}`
// // // // // // // // //                   : `http://localhost:5004/uploads/em.jpg`
// // // // // // // // //               }
// // // // // // // // //               alt={`${selectedEmployee.name}'s profile`}
// // // // // // // // //               className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500"
// // // // // // // // //             />
// // // // // // // // //             <h3 className="text-2xl font-bold text-center mb-4">{selectedEmployee.name}</h3>
// // // // // // // // //             <div className="grid grid-cols-2 gap-4">
// // // // // // // // //               {Object.entries(selectedEmployee).map(([key, value]) => (
// // // // // // // // //                 key !== "image" && (
// // // // // // // // //                   <>
// // // // // // // // //                     <div className="font-semibold text-right">{key.charAt(0).toUpperCase() + key.slice(1)}:</div>
// // // // // // // // //                     <div>{value}</div>
// // // // // // // // //                   </>
// // // // // // // // //                 )
// // // // // // // // //               ))}
// // // // // // // // //             </div>
// // // // // // // // //             <button
// // // // // // // // //               onClick={() => setSelectedEmployee(null)}
// // // // // // // // //               className="bg-red-500 text-white px-6 py-2 rounded-lg mt-6 hover:bg-red-600 transition duration-200 flex items-center gap-2 mx-auto"
// // // // // // // // //             >
// // // // // // // // //               <X size={18} />
// // // // // // // // //               Close
// // // // // // // // //             </button>
// // // // // // // // //           </div>
// // // // // // // // //         </motion.div>
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default EmployeeManagement;  


// // // // // // // // import React, { useEffect, useState, useContext } from "react";
// // // // // // // // import axios from "axios";
// // // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // // import { User, Briefcase, DollarSign, Clock, Phone, Home, Calendar, FileText, Edit, Trash, X } from "react-feather"; // Icons
// // // // // // // // import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from "recharts"; // Charts
// // // // // // // // import { motion } from "framer-motion"; // Animations

// // // // // // // // const EmployeeManagement = () => {
// // // // // // // //   const { storeId } = useContext(StoreContext);
// // // // // // // //   const [employees, setEmployees] = useState([]);
// // // // // // // //   const [newEmployee, setNewEmployee] = useState({
// // // // // // // //     name: "",
// // // // // // // //     role: "",
// // // // // // // //     salary: "",
// // // // // // // //     shifts: "",
// // // // // // // //     contact: "",
// // // // // // // //     address: "",
// // // // // // // //     dateOfJoining: "",
// // // // // // // //     employeeId: "",
// // // // // // // //     experience: "",
// // // // // // // //     image: null,
// // // // // // // //   });
// // // // // // // //   const [editEmployeeId, setEditEmployeeId] = useState(null);
// // // // // // // //   const [selectedEmployee, setSelectedEmployee] = useState(null);

// // // // // // // //   useEffect(() => {
// // // // // // // //     if (storeId) fetchEmployees();
// // // // // // // //   }, [storeId]);

// // // // // // // //   const fetchEmployees = async () => {
// // // // // // // //     try {
// // // // // // // //       const response = await axios.get("http://localhost:5004/employees", {
// // // // // // // //         headers: { storeId },
// // // // // // // //       });
// // // // // // // //       setEmployees(response.data);
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error("Error fetching employees:", error);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleAddEmployee = async () => {
// // // // // // // //     if (!newEmployee.name || !newEmployee.employeeId) {
// // // // // // // //       alert("Name and Employee ID are required!");
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     const formData = new FormData();
// // // // // // // //     Object.keys(newEmployee).forEach((key) => {
// // // // // // // //       formData.append(key, newEmployee[key]);
// // // // // // // //     });

// // // // // // // //     try {
// // // // // // // //       const response = await axios.post(
// // // // // // // //         "http://localhost:5004/employees",
// // // // // // // //         formData,
// // // // // // // //         {
// // // // // // // //           headers: {
// // // // // // // //             storeId,
// // // // // // // //             "Content-Type": "multipart/form-data",
// // // // // // // //           },
// // // // // // // //         }
// // // // // // // //       );
// // // // // // // //       setEmployees([...employees, response.data]);
// // // // // // // //       resetForm();
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error("Error adding employee:", error);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleUpdateEmployee = async () => {
// // // // // // // //     if (!editEmployeeId) return;

// // // // // // // //     const formData = new FormData();
// // // // // // // //     if (newEmployee.image) {
// // // // // // // //       formData.append("image", newEmployee.image);
// // // // // // // //     } else {
// // // // // // // //       formData.append("existingImage", newEmployee.image);
// // // // // // // //     }

// // // // // // // //     Object.keys(newEmployee).forEach((key) => {
// // // // // // // //       formData.append(key, newEmployee[key]);
// // // // // // // //     });

// // // // // // // //     try {
// // // // // // // //       await axios.put(
// // // // // // // //         `http://localhost:5004/employees/${editEmployeeId}`,
// // // // // // // //         formData,
// // // // // // // //         {
// // // // // // // //           headers: {
// // // // // // // //             storeId,
// // // // // // // //             "Content-Type": "multipart/form-data",
// // // // // // // //           },
// // // // // // // //         }
// // // // // // // //       );
// // // // // // // //       alert("Employee updated successfully!");
// // // // // // // //       resetForm();
// // // // // // // //       fetchEmployees();
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error("Error updating employee:", error);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleDeleteEmployee = async (id) => {
// // // // // // // //     try {
// // // // // // // //       await axios.delete(`http://localhost:5004/employees/${id}`, {
// // // // // // // //         headers: { storeId },
// // // // // // // //       });
// // // // // // // //       alert("Employee deleted successfully!");
// // // // // // // //       fetchEmployees();
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error("Error deleting employee:", error);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleEditEmployee = (employee) => {
// // // // // // // //     setEditEmployeeId(employee._id);
// // // // // // // //     setNewEmployee({
// // // // // // // //       name: employee.name,
// // // // // // // //       role: employee.role,
// // // // // // // //       salary: employee.salary,
// // // // // // // //       shifts: employee.shifts,
// // // // // // // //       contact: employee.contact,
// // // // // // // //       address: employee.address,
// // // // // // // //       dateOfJoining: employee.dateOfJoining,
// // // // // // // //       employeeId: employee.employeeId,
// // // // // // // //       experience: employee.experience,
// // // // // // // //       image: employee.image || null,
// // // // // // // //     });
// // // // // // // //   };

// // // // // // // //   const resetForm = () => {
// // // // // // // //     setEditEmployeeId(null);
// // // // // // // //     setNewEmployee({
// // // // // // // //       name: "",
// // // // // // // //       role: "",
// // // // // // // //       salary: "",
// // // // // // // //       shifts: "",
// // // // // // // //       contact: "",
// // // // // // // //       address: "",
// // // // // // // //       dateOfJoining: "",
// // // // // // // //       employeeId: "",
// // // // // // // //       experience: "",
// // // // // // // //       image: null,
// // // // // // // //     });
// // // // // // // //   };

// // // // // // // //   // Data for visualizations
// // // // // // // //   const roleDistribution = employees.reduce((acc, employee) => {
// // // // // // // //     acc[employee.role] = (acc[employee.role] || 0) + 1;
// // // // // // // //     return acc;
// // // // // // // //   }, {});

// // // // // // // //   const salaryData = employees.map((employee) => ({
// // // // // // // //     name: employee.name,
// // // // // // // //     salary: employee.salary,
// // // // // // // //   }));

// // // // // // // //   const roleData = Object.keys(roleDistribution).map((role) => ({
// // // // // // // //     name: role,
// // // // // // // //     value: roleDistribution[role],
// // // // // // // //   }));

// // // // // // // //   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]; // Colors for pie chart

// // // // // // // //   return (
// // // // // // // //     <div className="p-6 bg-gray-50 min-h-screen">
// // // // // // // //       {/* Blurred Background */}
// // // // // // // //       <div
// // // // // // // //         className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 ${
// // // // // // // //           selectedEmployee ? "block" : "hidden"
// // // // // // // //         }`}
// // // // // // // //       ></div>

// // // // // // // //       <h1 className="text-3xl font-bold text-gray-800 mb-6">Employee Management</h1>


// // // // // // // //       {/* Add/Edit Employee Section */}
// // // // // // // //       <motion.div
// // // // // // // //         initial={{ opacity: 0, y: 20 }}
// // // // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // // // //         transition={{ duration: 0.5, delay: 0.4 }}
// // // // // // // //         className="bg-white rounded-lg shadow-md p-6 mb-8"
// // // // // // // //       >
// // // // // // // //         <h2 className="text-2xl font-semibold text-gray-700 mb-4">
// // // // // // // //           {editEmployeeId ? "Edit Employee" : "Add New Employee"}
// // // // // // // //         </h2>
// // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // // //           {/* Input fields with icons */}
// // // // // // // //           {Object.keys(newEmployee).map((key) => (
// // // // // // // //             key !== "image" && (
// // // // // // // //               <div
// // // // // // // //                 key={key}
// // // // // // // //                 className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500"
// // // // // // // //               >
// // // // // // // //                 {key === "name" && <User size={20} className="text-gray-400 mr-2" />}
// // // // // // // //                 {key === "role" && <Briefcase size={20} className="text-gray-400 mr-2" />}
// // // // // // // //                 {key === "salary" && <DollarSign size={20} className="text-gray-400 mr-2" />}
// // // // // // // //                 {key === "shifts" && <Clock size={20} className="text-gray-400 mr-2" />}
// // // // // // // //                 {key === "contact" && <Phone size={20} className="text-gray-400 mr-2" />}
// // // // // // // //                 {key === "address" && <Home size={20} className="text-gray-400 mr-2" />}
// // // // // // // //                 {key === "dateOfJoining" && <Calendar size={20} className="text-gray-400 mr-2" />}
// // // // // // // //                 {key === "employeeId" && <FileText size={20} className="text-gray-400 mr-2" />}
// // // // // // // //                 {key === "experience" && <FileText size={20} className="text-gray-400 mr-2" />}
// // // // // // // //                 <input
// // // // // // // //                   type={key === "dateOfJoining" ? "date" : key === "salary" ? "number" : "text"}
// // // // // // // //                   placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
// // // // // // // //                   value={newEmployee[key]}
// // // // // // // //                   onChange={(e) =>
// // // // // // // //                     setNewEmployee({ ...newEmployee, [key]: e.target.value })
// // // // // // // //                   }
// // // // // // // //                   className="w-full focus:outline-none"
// // // // // // // //                 />
// // // // // // // //               </div>
// // // // // // // //             )
// // // // // // // //           ))}
// // // // // // // //           <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500">
// // // // // // // //             <User size={20} className="text-gray-400 mr-2" />
// // // // // // // //             <input
// // // // // // // //               type="file"
// // // // // // // //               accept="image/*"
// // // // // // // //               onChange={(e) =>
// // // // // // // //                 setNewEmployee({ ...newEmployee, image: e.target.files[0] })
// // // // // // // //               }
// // // // // // // //               className="w-full focus:outline-none"
// // // // // // // //             />
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //         <div className="flex gap-4 mt-6">
// // // // // // // //           <button
// // // // // // // //             onClick={editEmployeeId ? handleUpdateEmployee : handleAddEmployee}
// // // // // // // //             className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200 flex items-center gap-2"
// // // // // // // //           >
// // // // // // // //             {editEmployeeId ? <Edit size={18} /> : <User size={18} />}
// // // // // // // //             {editEmployeeId ? "Update Employee" : "Add Employee"}
// // // // // // // //           </button>
// // // // // // // //           {editEmployeeId && (
// // // // // // // //             <button
// // // // // // // //               onClick={resetForm}
// // // // // // // //               className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-200 flex items-center gap-2"
// // // // // // // //             >
// // // // // // // //               <X size={18} />
// // // // // // // //               Cancel
// // // // // // // //             </button>
// // // // // // // //           )}
// // // // // // // //         </div>
// // // // // // // //       </motion.div>

// // // // // // // //       {/* Employee List Section */}
// // // // // // // //       <motion.div
// // // // // // // //         initial={{ opacity: 0, y: 20 }}
// // // // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // // // //         transition={{ duration: 0.5, delay: 0.6 }}
// // // // // // // //         className="bg-white rounded-lg shadow-md p-6"
// // // // // // // //       >
// // // // // // // //         <h2 className="text-2xl font-semibold text-gray-700 mb-4">Employee List</h2>
// // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // //           {employees.map((employee) => (
// // // // // // // //             <motion.div
// // // // // // // //               key={employee._id}
// // // // // // // //               whileHover={{ scale: 1.05 }}
// // // // // // // //               whileTap={{ scale: 0.95 }}
// // // // // // // //               onClick={() => setSelectedEmployee(employee)}
// // // // // // // //               className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg shadow-lg text-white cursor-pointer h-64 flex flex-col justify-center items-center"
// // // // // // // //             >
// // // // // // // //               <img
// // // // // // // //                 src={
// // // // // // // //                   employee.image
// // // // // // // //                     ? `http://localhost:5004/uploads/${employee.image}`
// // // // // // // //                     : `http://localhost:5004/uploads/em.jpg`
// // // // // // // //                 }
// // // // // // // //                 alt={`${employee.name}'s profile`}
// // // // // // // //                 className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white"
// // // // // // // //               />
// // // // // // // //               <h3 className="text-xl font-bold text-center">{employee.name}</h3>
// // // // // // // //               <p className="text-sm text-center">Role: {employee.role}</p>
// // // // // // // //               <p className="text-sm text-center">Employee ID: {employee.employeeId}</p>
// // // // // // // //               <div className="flex justify-center gap-4 mt-4">
// // // // // // // //                 <button
// // // // // // // //                   onClick={(e) => {
// // // // // // // //                     e.stopPropagation();
// // // // // // // //                     handleEditEmployee(employee);
// // // // // // // //                   }}
// // // // // // // //                   className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-200 flex items-center gap-2"
// // // // // // // //                 >
// // // // // // // //                   <Edit size={16} />
// // // // // // // //                   Edit
// // // // // // // //                 </button>
// // // // // // // //                 <button
// // // // // // // //                   onClick={(e) => {
// // // // // // // //                     e.stopPropagation();
// // // // // // // //                     handleDeleteEmployee(employee._id);
// // // // // // // //                   }}
// // // // // // // //                   className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 flex items-center gap-2"
// // // // // // // //                 >
// // // // // // // //                   <Trash size={16} />
// // // // // // // //                   Delete
// // // // // // // //                 </button>
// // // // // // // //               </div>
// // // // // // // //             </motion.div>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       </motion.div>

// // // // // // // //       {/* Full Employee View */}
// // // // // // // //       {selectedEmployee && (
// // // // // // // //         <motion.div
// // // // // // // //           initial={{ opacity: 0 }}
// // // // // // // //           animate={{ opacity: 1 }}
// // // // // // // //           transition={{ duration: 0.3 }}
// // // // // // // //           className="fixed inset-0 flex justify-center items-center z-50"
// // // // // // // //         >
// // // // // // // //           <div className="bg-white rounded-lg shadow-2xl p-8 max-w-3xl w-full z-50">
// // // // // // // //             <img
// // // // // // // //               src={
// // // // // // // //                 selectedEmployee.image
// // // // // // // //                   ? `http://localhost:5004/uploads/${selectedEmployee.image}`
// // // // // // // //                   : `http://localhost:5004/uploads/em.jpg`
// // // // // // // //               }
// // // // // // // //               alt={`${selectedEmployee.name}'s profile`}
// // // // // // // //               className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500"
// // // // // // // //             />
// // // // // // // //             <h3 className="text-2xl font-bold text-center mb-4">{selectedEmployee.name}</h3>
// // // // // // // //             <div className="grid grid-cols-2 gap-4">
// // // // // // // //               {Object.entries(selectedEmployee).map(([key, value]) => (
// // // // // // // //                 key !== "image" && (
// // // // // // // //                   <>
// // // // // // // //                     <div className="font-semibold text-right">{key.charAt(0).toUpperCase() + key.slice(1)}:</div>
// // // // // // // //                     <div>{value}</div>
// // // // // // // //                   </>
// // // // // // // //                 )
// // // // // // // //               ))}
// // // // // // // //             </div>
// // // // // // // //             <button
// // // // // // // //               onClick={() => setSelectedEmployee(null)}
// // // // // // // //               className="bg-red-500 text-white px-6 py-2 rounded-lg mt-6 hover:bg-red-600 transition duration-200 flex items-center gap-2 mx-auto"
// // // // // // // //             >
// // // // // // // //               <X size={18} />
// // // // // // // //               Close
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //         </motion.div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default EmployeeManagement;



// // // // // // // import React, { useEffect, useState, useContext, useRef } from "react";
// // // // // // // import axios from "axios";
// // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // import { 
// // // // // // //   User, Briefcase, DollarSign, Clock, Phone, Home, 
// // // // // // //   Calendar, FileText, Edit, Trash, X, Search, 
// // // // // // //   Plus, ChevronDown, Award, Layers
// // // // // // // } from "react-feather";
// // // // // // // import { 
// // // // // // //   BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
// // // // // // //   PieChart, Pie, Cell, LineChart, Line, CartesianGrid
// // // // // // // } from "recharts";
// // // // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // // // const EmployeeManagement = () => {
// // // // // // //   const { storeId } = useContext(StoreContext);
// // // // // // //   const [employees, setEmployees] = useState([]);
// // // // // // //   const [filteredEmployees, setFilteredEmployees] = useState([]);
// // // // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // // // //   const [newEmployee, setNewEmployee] = useState({
// // // // // // //     name: "",
// // // // // // //     role: "",
// // // // // // //     salary: "",
// // // // // // //     shifts: "",
// // // // // // //     contact: "",
// // // // // // //     address: "",
// // // // // // //     dateOfJoining: "",
// // // // // // //     employeeId: "",
// // // // // // //     experience: "",
// // // // // // //     image: null,
// // // // // // //   });
// // // // // // //   const [editEmployeeId, setEditEmployeeId] = useState(null);
// // // // // // //   const [selectedEmployee, setSelectedEmployee] = useState(null);
// // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // //   const [activeTab, setActiveTab] = useState("list"); // list, analytics
// // // // // // //   const [showForm, setShowForm] = useState(false);
// // // // // // //   const [notification, setNotification] = useState({ show: false, message: "", type: "" });
// // // // // // //   const formRef = useRef(null);

// // // // // // //   // Animation variants
// // // // // // //   const containerVariants = {
// // // // // // //     hidden: { opacity: 0 },
// // // // // // //     visible: { 
// // // // // // //       opacity: 1,
// // // // // // //       transition: { 
// // // // // // //         staggerChildren: 0.1
// // // // // // //       }
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const itemVariants = {
// // // // // // //     hidden: { y: 20, opacity: 0 },
// // // // // // //     visible: { 
// // // // // // //       y: 0, 
// // // // // // //       opacity: 1,
// // // // // // //       transition: { 
// // // // // // //         type: "spring",
// // // // // // //         stiffness: 100,
// // // // // // //         damping: 10
// // // // // // //       }
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const fadeIn = {
// // // // // // //     hidden: { opacity: 0 },
// // // // // // //     visible: { 
// // // // // // //       opacity: 1,
// // // // // // //       transition: { duration: 0.6 }
// // // // // // //     }
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     if (storeId) fetchEmployees();
// // // // // // //   }, [storeId]);

// // // // // // //   useEffect(() => {
// // // // // // //     const filtered = employees.filter(
// // // // // // //       (employee) =>
// // // // // // //         employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // // //         employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // // //         employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
// // // // // // //     );
// // // // // // //     setFilteredEmployees(filtered);
// // // // // // //   }, [searchTerm, employees]);

// // // // // // //   // Click outside to close form
// // // // // // //   useEffect(() => {
// // // // // // //     function handleClickOutside(event) {
// // // // // // //       if (formRef.current && !formRef.current.contains(event.target) && showForm) {
// // // // // // //         setShowForm(false);
// // // // // // //       }
// // // // // // //     }
// // // // // // //     document.addEventListener("mousedown", handleClickOutside);
// // // // // // //     return () => {
// // // // // // //       document.removeEventListener("mousedown", handleClickOutside);
// // // // // // //     };
// // // // // // //   }, [showForm]);

// // // // // // //   const fetchEmployees = async () => {
// // // // // // //     setLoading(true);
// // // // // // //     try {
// // // // // // //       const response = await axios.get("http://localhost:5004/employees", {
// // // // // // //         headers: { storeId },
// // // // // // //       });
// // // // // // //       setEmployees(response.data);
// // // // // // //       setFilteredEmployees(response.data);
// // // // // // //       setLoading(false);
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error fetching employees:", error);
// // // // // // //       showNotification("Failed to fetch employees", "error");
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const showNotification = (message, type = "success") => {
// // // // // // //     setNotification({ show: true, message, type });
// // // // // // //     setTimeout(() => setNotification({ show: false, message: "", type: "" }), 4000);
// // // // // // //   };

// // // // // // //   const handleAddEmployee = async () => {
// // // // // // //     if (!newEmployee.name || !newEmployee.employeeId) {
// // // // // // //       showNotification("Name and Employee ID are required!", "error");
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     const formData = new FormData();
// // // // // // //     Object.keys(newEmployee).forEach((key) => {
// // // // // // //       formData.append(key, newEmployee[key]);
// // // // // // //     });

// // // // // // //     try {
// // // // // // //       const response = await axios.post(
// // // // // // //         "http://localhost:5004/employees",
// // // // // // //         formData,
// // // // // // //         {
// // // // // // //           headers: {
// // // // // // //             storeId,
// // // // // // //             "Content-Type": "multipart/form-data",
// // // // // // //           },
// // // // // // //         }
// // // // // // //       );
// // // // // // //       setEmployees([...employees, response.data]);
// // // // // // //       resetForm();
// // // // // // //       showNotification("Employee added successfully!");
// // // // // // //       setShowForm(false);
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error adding employee:", error);
// // // // // // //       showNotification("Failed to add employee", "error");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleUpdateEmployee = async () => {
// // // // // // //     if (!editEmployeeId) return;

// // // // // // //     const formData = new FormData();
// // // // // // //     if (newEmployee.image instanceof File) {
// // // // // // //       formData.append("image", newEmployee.image);
// // // // // // //     } else {
// // // // // // //       formData.append("existingImage", newEmployee.image);
// // // // // // //     }

// // // // // // //     Object.keys(newEmployee).forEach((key) => {
// // // // // // //       if (key !== "image" || newEmployee[key] instanceof File) {
// // // // // // //         formData.append(key, newEmployee[key]);
// // // // // // //       }
// // // // // // //     });

// // // // // // //     try {
// // // // // // //       await axios.put(
// // // // // // //         `http://localhost:5004/employees/${editEmployeeId}`,
// // // // // // //         formData,
// // // // // // //         {
// // // // // // //           headers: {
// // // // // // //             storeId,
// // // // // // //             "Content-Type": "multipart/form-data",
// // // // // // //           },
// // // // // // //         }
// // // // // // //       );
// // // // // // //       showNotification("Employee updated successfully!");
// // // // // // //       resetForm();
// // // // // // //       fetchEmployees();
// // // // // // //       setShowForm(false);
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error updating employee:", error);
// // // // // // //       showNotification("Failed to update employee", "error");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleDeleteEmployee = async (id) => {
// // // // // // //     if (!window.confirm("Are you sure you want to delete this employee?")) return;
    
// // // // // // //     try {
// // // // // // //       await axios.delete(`http://localhost:5004/employees/${id}`, {
// // // // // // //         headers: { storeId },
// // // // // // //       });
// // // // // // //       showNotification("Employee deleted successfully!");
// // // // // // //       fetchEmployees();
// // // // // // //       if (selectedEmployee && selectedEmployee._id === id) {
// // // // // // //         setSelectedEmployee(null);
// // // // // // //       }
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error deleting employee:", error);
// // // // // // //       showNotification("Failed to delete employee", "error");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleEditEmployee = (employee) => {
// // // // // // //     setEditEmployeeId(employee._id);
// // // // // // //     setNewEmployee({
// // // // // // //       name: employee.name,
// // // // // // //       role: employee.role,
// // // // // // //       salary: employee.salary,
// // // // // // //       shifts: employee.shifts,
// // // // // // //       contact: employee.contact,
// // // // // // //       address: employee.address,
// // // // // // //       dateOfJoining: employee.dateOfJoining,
// // // // // // //       employeeId: employee.employeeId,
// // // // // // //       experience: employee.experience,
// // // // // // //       image: employee.image || null,
// // // // // // //     });
// // // // // // //     setShowForm(true);
// // // // // // //   };

// // // // // // //   const resetForm = () => {
// // // // // // //     setEditEmployeeId(null);
// // // // // // //     setNewEmployee({
// // // // // // //       name: "",
// // // // // // //       role: "",
// // // // // // //       salary: "",
// // // // // // //       shifts: "",
// // // // // // //       contact: "",
// // // // // // //       address: "",
// // // // // // //       dateOfJoining: "",
// // // // // // //       employeeId: "",
// // // // // // //       experience: "",
// // // // // // //       image: null,
// // // // // // //     });
// // // // // // //   };

// // // // // // //   // Data for visualizations
// // // // // // //   const roleDistribution = employees.reduce((acc, employee) => {
// // // // // // //     const role = employee.role || "Unspecified";
// // // // // // //     acc[role] = (acc[role] || 0) + 1;
// // // // // // //     return acc;
// // // // // // //   }, {});

// // // // // // //   const salaryData = employees
// // // // // // //     .filter(emp => emp.salary)
// // // // // // //     .map((employee) => ({
// // // // // // //       name: employee.name.length > 10 ? employee.name.substring(0, 10) + "..." : employee.name,
// // // // // // //       salary: Number(employee.salary) || 0,
// // // // // // //     }))
// // // // // // //     .sort((a, b) => b.salary - a.salary)
// // // // // // //     .slice(0, 5);

// // // // // // //   const roleData = Object.keys(roleDistribution).map((role) => ({
// // // // // // //     name: role,
// // // // // // //     value: roleDistribution[role],
// // // // // // //   }));

// // // // // // //   const experienceData = employees
// // // // // // //     .filter(emp => emp.experience)
// // // // // // //     .map((employee) => ({
// // // // // // //       name: employee.name.length > 10 ? employee.name.substring(0, 10) + "..." : employee.name,
// // // // // // //       years: Number(employee.experience.replace(/[^0-9.]/g, "")) || 0,
// // // // // // //     }))
// // // // // // //     .sort((a, b) => b.years - a.years)
// // // // // // //     .slice(0, 5);

// // // // // // //   const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899"];

// // // // // // //   // Calculate some statistics for the dashboard
// // // // // // //   const totalEmployees = employees.length;
// // // // // // //   const avgSalary = employees.reduce((sum, emp) => sum + (Number(emp.salary) || 0), 0) / (totalEmployees || 1);
// // // // // // //   const newHires = employees.filter(emp => {
// // // // // // //     if (!emp.dateOfJoining) return false;
// // // // // // //     const joinDate = new Date(emp.dateOfJoining);
// // // // // // //     const threeMonthsAgo = new Date();
// // // // // // //     threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
// // // // // // //     return joinDate >= threeMonthsAgo;
// // // // // // //   }).length;

// // // // // // //   const renderFormField = (key, icon, placeholder, type = "text") => (
// // // // // // //     <motion.div
// // // // // // //       variants={itemVariants}
// // // // // // //       className="relative"
// // // // // // //     >
// // // // // // //       <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-500 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
// // // // // // //         <span className="text-gray-400 mr-2">{icon}</span>
// // // // // // //         {type === "file" ? (
// // // // // // //           <input
// // // // // // //             type="file"
// // // // // // //             accept="image/*"
// // // // // // //             onChange={(e) => setNewEmployee({ ...newEmployee, image: e.target.files[0] })}
// // // // // // //             className="w-full focus:outline-none"
// // // // // // //           />
// // // // // // //         ) : (
// // // // // // //           <input
// // // // // // //             type={type}
// // // // // // //             placeholder={placeholder}
// // // // // // //             value={newEmployee[key] || ""}
// // // // // // //             onChange={(e) => setNewEmployee({ ...newEmployee, [key]: e.target.value })}
// // // // // // //             className="w-full focus:outline-none"
// // // // // // //           />
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </motion.div>
// // // // // // //   );

// // // // // // //   return (
// // // // // // //     <div className="p-6 bg-gray-50 min-h-screen">
// // // // // // //       {/* Notification */}
// // // // // // //       <AnimatePresence>
// // // // // // //         {notification.show && (
// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0, y: -50 }}
// // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // //             exit={{ opacity: 0, y: -50 }}
// // // // // // //             className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
// // // // // // //               notification.type === "error" ? "bg-red-500" : "bg-green-500"
// // // // // // //             } text-white`}
// // // // // // //           >
// // // // // // //             {notification.message}
// // // // // // //           </motion.div>
// // // // // // //         )}
// // // // // // //       </AnimatePresence>

// // // // // // //       {/* Backdrop for modal */}
// // // // // // //       <AnimatePresence>
// // // // // // //         {selectedEmployee && (
// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0 }}
// // // // // // //             animate={{ opacity: 1 }}
// // // // // // //             exit={{ opacity: 0 }}
// // // // // // //             className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
// // // // // // //             onClick={() => setSelectedEmployee(null)}
// // // // // // //           ></motion.div>
// // // // // // //         )}
// // // // // // //       </AnimatePresence>

// // // // // // //       {/* Header */}
// // // // // // //       <motion.div
// // // // // // //         initial={{ y: -50, opacity: 0 }}
// // // // // // //         animate={{ y: 0, opacity: 1 }}
// // // // // // //         transition={{ duration: 0.5 }}
// // // // // // //         className="flex justify-between items-center mb-6"
// // // // // // //       >
// // // // // // //         <div>
// // // // // // //           <h1 className="text-3xl font-bold text-gray-800">Employee Management</h1>
// // // // // // //           <p className="text-gray-500">Manage your workforce efficiently</p>
// // // // // // //         </div>
// // // // // // //         <div className="flex gap-3">
// // // // // // //           <motion.button
// // // // // // //             whileHover={{ scale: 1.05 }}
// // // // // // //             whileTap={{ scale: 0.95 }}
// // // // // // //             onClick={() => {
// // // // // // //               resetForm();
// // // // // // //               setShowForm(true);
// // // // // // //             }}
// // // // // // //             className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center gap-2 shadow-md"
// // // // // // //           >
// // // // // // //             <Plus size={18} />
// // // // // // //             Add Employee
// // // // // // //           </motion.button>
// // // // // // //         </div>
// // // // // // //       </motion.div>

// // // // // // //       {/* Tab Navigation */}
// // // // // // //       <motion.div
// // // // // // //         initial={{ opacity: 0 }}
// // // // // // //         animate={{ opacity: 1 }}
// // // // // // //         transition={{ delay: 0.3 }}
// // // // // // //         className="flex mb-6 bg-white rounded-lg shadow-md"
// // // // // // //       >
// // // // // // //         <button
// // // // // // //           onClick={() => setActiveTab("list")}
// // // // // // //           className={`px-6 py-3 flex items-center gap-2 ${
// // // // // // //             activeTab === "list"
// // // // // // //               ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold"
// // // // // // //               : "text-gray-500 hover:text-gray-700"
// // // // // // //           } transition-all duration-200`}
// // // // // // //         >
// // // // // // //           <Layers size={18} />
// // // // // // //           Employee List
// // // // // // //         </button>
// // // // // // //         <button
// // // // // // //           onClick={() => setActiveTab("analytics")}
// // // // // // //           className={`px-6 py-3 flex items-center gap-2 ${
// // // // // // //             activeTab === "analytics"
// // // // // // //               ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold"
// // // // // // //               : "text-gray-500 hover:text-gray-700"
// // // // // // //           } transition-all duration-200`}
// // // // // // //         >
// // // // // // //           <BarChart size={18} />
// // // // // // //           Analytics
// // // // // // //         </button>
// // // // // // //       </motion.div>

// // // // // // //       {/* Search bar */}
// // // // // // //       <motion.div
// // // // // // //         initial={{ opacity: 0, y: 20 }}
// // // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // // //         transition={{ delay: 0.4 }}
// // // // // // //         className="bg-white rounded-lg shadow-md p-4 mb-6 flex"
// // // // // // //       >
// // // // // // //         <div className="relative flex-grow">
// // // // // // //           <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
// // // // // // //             <Search size={18} />
// // // // // // //           </span>
// // // // // // //           <input
// // // // // // //             type="text"
// // // // // // //             placeholder="Search by name, role, or ID..."
// // // // // // //             value={searchTerm}
// // // // // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // //             className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
// // // // // // //           />
// // // // // // //         </div>
// // // // // // //       </motion.div>

// // // // // // //       {/* Add/Edit Employee Form */}
// // // // // // //       <AnimatePresence>
// // // // // // //         {showForm && (
// // // // // // //           <motion.div
// // // // // // //             ref={formRef}
// // // // // // //             initial={{ opacity: 0, y: 50, scale: 0.9 }}
// // // // // // //             animate={{ opacity: 1, y: 0, scale: 1 }}
// // // // // // //             exit={{ opacity: 0, y: 50, scale: 0.9 }}
// // // // // // //             transition={{ duration: 0.3, type: "spring" }}
// // // // // // //             className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200 relative z-10"
// // // // // // //           >
// // // // // // //             <div className="flex justify-between items-center mb-6">
// // // // // // //               <h2 className="text-2xl font-semibold text-gray-700">
// // // // // // //                 {editEmployeeId ? "Edit Employee" : "Add New Employee"}
// // // // // // //               </h2>
// // // // // // //               <button
// // // // // // //                 onClick={() => setShowForm(false)}
// // // // // // //                 className="text-gray-500 hover:text-gray-700"
// // // // // // //               >
// // // // // // //                 <X size={20} />
// // // // // // //               </button>
// // // // // // //             </div>
            
// // // // // // //             <motion.div 
// // // // // // //               variants={containerVariants}
// // // // // // //               initial="hidden"
// // // // // // //               animate="visible"
// // // // // // //               className="grid grid-cols-1 md:grid-cols-2 gap-4"
// // // // // // //             >
// // // // // // //               {renderFormField("name", <User  size={20} />, "Full Name")}
// // // // // // //               {renderFormField("employeeId", <FileText size={20} />, "Employee ID")}
// // // // // // //               {renderFormField("role", <Briefcase size={20} />, "Role/Position")}
// // // // // // //               {renderFormField("salary", <DollarSign size={20} />, "Salary", "number")}
// // // // // // //               {renderFormField("shifts", <Clock size={20} />, "Work Shifts")}
// // // // // // //               {renderFormField("experience", <Award size={20} />, "Experience (years)")}
// // // // // // //               {renderFormField("contact", <Phone size={20} />, "Contact Number")}
// // // // // // //               {renderFormField("address", <Home size={20} />, "Address")}
// // // // // // //               {renderFormField("dateOfJoining", <Calendar size={20} />, "Date of Joining", "date")}
              
// // // // // // //               <motion.div variants={itemVariants} className="relative">
// // // // // // //                 <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-500 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
// // // // // // //                   <User  size={20} className="text-gray-400 mr-2" />
// // // // // // //                   <input
// // // // // // //                     type="file"
// // // // // // //                     accept="image/*"
// // // // // // //                     onChange={(e) =>
// // // // // // //                       setNewEmployee({ ...newEmployee, image: e.target.files[0] })
// // // // // // //                     }
// // // // // // //                     className="w-full focus:outline-none"
// // // // // // //                   />
// // // // // // //                 </div>
// // // // // // //               </motion.div>
// // // // // // //             </motion.div>
            
// // // // // // //             <motion.div 
// // // // // // //               variants={itemVariants}
// // // // // // //               className="flex gap-4 mt-6"
// // // // // // //             >
// // // // // // //               <button
// // // // // // //                 onClick={editEmployeeId ? handleUpdateEmployee : handleAddEmployee}
// // // // // // //                 className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center gap-2 shadow-md"
// // // // // // //               >
// // // // // // //                 {editEmployeeId ? <Edit size={18} /> : <User  size={18} />}
// // // // // // //                 {editEmployeeId ? "Update Employee" : "Add Employee"}
// // // // // // //               </button>
// // // // // // //               {editEmployeeId && (
// // // // // // //                 <button
// // // // // // //                   onClick={resetForm}
// // // // // // //                   className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-200 flex items-center gap-2 shadow-md"
// // // // // // //                 >
// // // // // // //                   <X size={18} />
// // // // // // //                   Cancel
// // // // // // //                 </button>
// // // // // // //               )}
// // // // // // //             </motion.div>
// // // // // // //           </motion.div>
// // // // // // //         )}
// // // // // // //       </AnimatePresence>

// // // // // // //       {/* Content based on active tab */}
// // // // // // //       <AnimatePresence mode="wait">
// // // // // // //         {activeTab === "list" ? (
// // // // // // //           <motion.div
// // // // // // //             key="list"
// // // // // // //             initial={{ opacity: 0, x: -20 }}
// // // // // // //             animate={{ opacity: 1, x: 0 }}
// // // // // // //             exit={{ opacity: 0, x: 20 }}
// // // // // // //             transition={{ duration: 0.3 }}
// // // // // // //             className="bg-white rounded-lg shadow-md p-6"
// // // // // // //           >
// // // // // // //             {loading ? (
// // // // // // //               <div className="flex justify-center items-center h-64">
// // // // // // //                 <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
// // // // // // //               </div>
// // // // // // //             ) : filteredEmployees.length === 0 ? (
// // // // // // //               <div className="text-center py-10">
// // // // // // //                 <div className="mx-auto text-gray-300 mb-4">
// // // // // // //                   <User  size={48} />
// // // // // // //                 </div>
// // // // // // //                 <h3 className="text-xl font-medium text-gray-700">No employees found</h3>
// // // // // // //                 <p className="text-gray-500 mt-2">Add new employees or try a different search term</p>
// // // // // // //               </div>
// // // // // // //             ) : (
// // // // // // //               <motion.div 
// // // // // // //                 variants={containerVariants}
// // // // // // //                 initial="hidden"
// // // // // // //                 animate="visible"
// // // // // // //                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
// // // // // // //               >
// // // // // // //                 {filteredEmployees.map((employee) => (
// // // // // // //                   <motion.div
// // // // // // //                     key={employee._id}
// // // // // // //                     variants={itemVariants}
// // // // // // //                     whileHover={{ 
// // // // // // //                       scale: 1.03,
// // // // // // //                       boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
// // // // // // //                     }}
// // // // // // //                     whileTap={{ scale: 0.98 }}
// // // // // // //                     onClick={() => setSelectedEmployee(employee)}
// // // // // // //                     className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl shadow-lg text-white cursor-pointer h-64 flex flex-col justify-center items-center relative overflow-hidden group"
// // // // // // //                   >
// // // // // // //                     <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
// // // // // // //                     <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
// // // // // // //                       <button
// // // // // // //                         onClick={(e) => {
// // // // // // //                           e.stopPropagation();
// // // // // // //                           handleEditEmployee(employee);
// // // // // // //                         }}
// // // // // // //                         className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition duration-200 mr-2"
// // // // // // //                       >
// // // // // // //                         <Edit size={16} />
// // // // // // //                       </button>
// // // // // // //                       <button
// // // // // // //                         onClick={(e) => {
// // // // // // //                           e.stopPropagation();
// // // // // // //                           handleDeleteEmployee(employee._id);
// // // // // // //                         }}
// // // // // // //                         className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-200"
// // // // // // //                       >
// // // // // // //                         <Trash size={16} />
// // // // // // //                       </button>
// // // // // // //                     </div>
// // // // // // //                     <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-white opacity-5 rounded-full"></div>
// // // // // // //                     <div className="absolute -top-10 -left-10 h-40 w-40 bg-white opacity-5 rounded-full"></div>
// // // // // // //                     <img
// // // // // // //                       src={
// // // // // // //                         employee.image
// // // // // // //                           ? `http://localhost:5004/uploads/${employee.image}`
// // // // // // //                           : `http://localhost:5004/uploads/em.jpg`
// // // // // // //                       }
// // // // // // //                       alt={`${employee.name}'s profile`}
// // // // // // //                       className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-xl object-cover"
// // // // // // //                     />
// // // // // // //                     <h3 className="text-xl font-bold text-center">{employee.name}</h3>
// // // // // // //                     <p className="text-sm text-center text-indigo-100">Role: {employee.role || "N/A"}</p>
// // // // // // //                     <p className="text-sm text-center text-indigo-100">ID: {employee.employeeId}</p>
// // // // // // //                   </motion.div>
// // // // // // //                 ))}
// // // // // // //               </motion.div>
// // // // // // //             )}
// // // // // // //           </motion.div>
// // // // // // //         ) : (
// // // // // // //           <motion.div
// // // // // // //             key="analytics"
// // // // // // //             initial={{ opacity: 0, x: 20 }}
// // // // // // //             animate={{ opacity: 1, x: 0 }}
// // // // // // //             exit={{ opacity: 0, x: -20 }}
// // // // // // //             transition={{ duration: 0.3 }}
// // // // // // //           >
// // // // // // //             {/* Analytics Dashboard */}
// // // // // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // // // // //               <motion.div
// // // // // // //                 variants={fadeIn}
// // // // // // //                 initial="hidden"
// // // // // // //                 animate="visible"
// // // // // // //                 className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500"
// // // // // // //               >
// // // // // // //                 <div className="flex justify-between items-center">
// // // // // // //                   <div>
// // // // // // //                     <p className="text-sm text-gray-500">Total Employees</p>
// // // // // // //                     <h3 className="text-2xl font-bold text-gray-800">{totalEmployees}</h3>
// // // // // // //                   </div>
// // // // // // //                   <div className="p-3 bg-indigo-100 rounded-lg">
// // // // // // //                     <User  size={24} className="text-indigo-600" />
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               </motion.div>
              
// // // // // // //               <motion.div
// // // // // // //                 variants={fadeIn}
// // // // // // //                 initial="hidden"
// // // // // // //                 animate="visible"
// // // // // // //                 transition={{ delay: 0.1 }}
// // // // // // //                 className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500"
// // // // // // //               >
// // // // // // //                 <div className="flex justify-between items-center">
// // // // // // //                   <div>
// // // // // // //                     <p className="text-sm text-gray-500">Average Salary</p>
// // // // // // //                     <h3 className="text-2xl font-bold text-gray-800">${avgSalary.toFixed(2)}</h3>
// // // // // // //                   </div>
// // // // // // //                   <div className="p-3 bg-green-100 rounded-lg">
// // // // // // //                     <DollarSign size={24} className="text-green-600" />
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               </motion.div>
              
// // // // // // //               <motion.div
// // // // // // //                 variants={fadeIn}
// // // // // // //                 initial="hidden"
// // // // // // //                 animate="visible"
// // // // // // //                 transition={{ delay: 0.2 }}
// // // // // // //                 className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500"
// // // // // // //               >
// // // // // // //                 <div className="flex justify-between items-center">
// // // // // // //                   <div>
// // // // // // //                     <p className="text-sm text-gray-500">New Hires (3 months)</p>
// // // // // // //                     <h3 className="text-2xl font-bold text-gray-800">{newHires}</h3>
// // // // // // //                   </div>
// // // // // // //                   <div className="p-3 bg-blue-100 rounded-lg">
// // // // // // //                     <Calendar size={24} className="text-blue-600" />
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               </motion.div>
// // // // // // //             </div>
            
// // // // // // //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // // // // // //               {/* Role Distribution Chart */}
// // // // // // //               <motion.div
// // // // // // //                 variants={fadeIn}
// // // // // // //                 initial="hidden"
// // // // // // //                 animate="visible"
// // // // // // //                 transition={{ delay: 0.3 }}
// // // // // // //                 className="bg-white rounded-lg shadow-md p-6"
// // // // // // //               >
// // // // // // //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Role Distribution</h3>
// // // // // // //                 {roleData.length > 0 ? (
// // // // // // //                   <ResponsiveContainer width="100%" height={300}>
// // // // // // //                     <PieChart>
// // // // // // //                       <Pie
// // // // // // //                         data={roleData}
// // // // // // //                         cx="50%"
// // // // // // //                         cy="50%"
// // // // // // //                         labelLine={false}
// // // // // // //                         outerRadius={100}
// // // // // // //                         fill="#8884d8"
// // // // // // //                         dataKey="value"
// // // // // // //                         label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
// // // // // // //                       >
// // // // // // //                         {roleData.map((entry, index) => (
// // // // // // //                           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// // // // // // //                         ))}
// // // // // // //                       </Pie>
// // // // // // //                       <Tooltip />
// // // // // // //                       <Legend />
// // // // // // //                     </PieChart>
// // // // // // //                   </ResponsiveContainer>
// // // // // // //                 ) : (
// // // // // // //                   <div className="flex justify-center items-center h-64">
// // // // // // //                     <p className="text-gray-500">No role data available</p>
// // // // // // //                   </div>
// // // // // // //                 )}
// // // // // // //               </motion.div>
              
// // // // // // //               {/* Top Salary Chart */}
// // // // // // //               <motion.div
// // // // // // //                 variants={fadeIn}
// // // // // // //                 initial="hidden"
// // // // // // //                 animate="visible"
// // // // // // //                 transition={{ delay: 0.4 }}
// // // // // // //                 className="bg-white rounded-lg shadow-md p-6"
// // // // // // //               >
// // // // // // //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Top 5 Salaries</h3>
// // // // // // //                 {salaryData.length > 0 ? (
// // // // // // //                   <ResponsiveContainer width="100%" height={300}>
// // // // // // //                     <BarChart data={salaryData}>
// // // // // // //                       <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
// // // // // // //                       <XAxis dataKey="name" />
// // // // // // //                       <YAxis />
// // // // // // //                       <Tooltip formatter={(value) => [`$${value}`, "Salary"]} />
// // // // // // //                       <Bar dataKey="salary" fill="#4F46E5" barSize={40} radius={[4, 4, 0, 0]} />
// // // // // // //                     </BarChart>
// // // // // // //                   </ResponsiveContainer>
// // // // // // //                 ) : (
// // // // // // //                   <div className="flex justify-center items-center h-64">
// // // // // // //                     <p className="text-gray-500">No salary data available</p>
// // // // // // //                   </div>
// // // // // // //                 )}
// // // // // // //               </motion.div>
              
// // // // // // //               {/* Experience Chart */}
// // // // // // //               <motion.div
// // // // // // //                 variants={fadeIn}
// // // // // // //                 initial="hidden"
// // // // // // //                 animate="visible"
// // // // // // //                 transition={{ delay: 0.5 }}
// // // // // // //                 className="bg-white rounded-lg shadow-md p-6 col-span-1 lg:col-span-2"
// // // // // // //               >
// // // // // // //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Experience Overview</h3>
// // // // // // //                 {experienceData.length > 0 ? (
// // // // // // //                   <ResponsiveContainer width="100%" height={300}>
// // // // // // //                     <LineChart data={experienceData}>
// // // // // // //                       <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
// // // // // // //                       <XAxis dataKey="name" />
// // // // // // //                       <YAxis />
// // // // // // //                       <Tooltip formatter={(value) => [`${value} years`, "Experience"]} />
// // // // // // //                       <Line 
// // // // // // //                         type="monotone" 
// // // // // // //                         dataKey="years" 
// // // // // // //                         stroke="#10B981" 
// // // // // // //                         strokeWidth={3} 
// // // // // // //                         dot={{ r: 6, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }}
// // // // // // //                         activeDot={{ r: 8, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }}
// // // // // // //                       />
// // // // // // //                     </LineChart>
// // // // // // //                   </ResponsiveContainer>
// // // // // // //                 ) : (
// // // // // // //                   <div className="flex justify-center items-center h-64">
// // // // // // //                     <p className="text-gray-500">No experience data available</p>
// // // // // // //                   </div>
// // // // // // //                 )}
// // // // // // //               </motion.div>
// // // // // // //             </div>
// // // // // // //           </motion.div>
// // // // // // //         )}
// // // // // // //       </AnimatePresence>

// // // // // // //       {/* Employee Detail Modal */}
// // // // // // //       <AnimatePresence>
// // // // // // //         {selectedEmployee && (
// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0 }}
// // // // // // //             animate={{ opacity: 1 }}
// // // // // // //             exit={{ opacity: 0 }}
// // // // // // //             className="fixed inset-0 flex justify-center items-center z-50"
// // // // // // //           >
// // // // // // //             <div className="bg-white rounded-lg shadow-2xl p-8 max-w-3xl w-full z-50">
// // // // // // //               <img
// // // // // // //                 src={
// // // // // // //                   selectedEmployee.image
// // // // // // //                     ? `http://localhost:5004/uploads/${selectedEmployee.image}`
// // // // // // //                     : `http://localhost:5004/uploads/em.jpg`
// // // // // // //                 }
// // // // // // //                 alt={`${selectedEmployee.name}'s profile`}
// // // // // // //                 className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500"
// // // // // // //               />
// // // // // // //               <h3 className="text-2xl font-bold text-center mb-4">{selectedEmployee.name}</h3>
// // // // // // //               <div className="grid grid-cols-2 gap-4">
// // // // // // //                 {Object.entries(selectedEmployee).map(([key, value]) => (
// // // // // // //                   key !== "image" && (
// // // // // // //                     <>
// // // // // // //                       <div className="font-semibold text-right">{key.charAt(0).toUpperCase() + key.slice(1)}:</div>
// // // // // // //                       <div>{value}</div>
// // // // // // //                     </>
// // // // // // //                   )
// // // // // // //                 ))}
// // // // // // //               </div>
// // // // // // //               <button
// // // // // // //                 onClick={() => setSelectedEmployee(null)}
// // // // // // //                 className="bg-red-500 text-white px-6 py-2 rounded-lg mt-6 hover:bg-red-600 transition duration-200 flex items-center gap-2 mx-auto"
// // // // // // //               >
// // // // // // //                 <X size={18} />
// // // // // // //                 Close
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           </motion.div>
// // // // // // //         )}
// // // // // // //       </AnimatePresence>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };      

// // // // // // // export default EmployeeManagement;

// // // // // // import React, { useEffect, useState, useContext, useRef } from "react";
// // // // // // import axios from "axios";
// // // // // // import { StoreContext } from "./StoreContext";
// // // // // // import {
// // // // // //   User, Briefcase, DollarSign, Clock, Phone, Home,
// // // // // //   Calendar, FileText, Edit, Trash, X, Search,
// // // // // //   Plus, ChevronDown, Award, Layers, CreditCard, TrendingUp
// // // // // // } from "react-feather";
// // // // // // import {
// // // // // //   BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
// // // // // //   PieChart, Pie, Cell, LineChart, Line, CartesianGrid
// // // // // // } from "recharts";
// // // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // // const EmployeeManagement = () => {
// // // // // //   const { storeId } = useContext(StoreContext);
// // // // // //   const [employees, setEmployees] = useState([]);
// // // // // //   const [filteredEmployees, setFilteredEmployees] = useState([]);
// // // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // // //   const [newEmployee, setNewEmployee] = useState({
// // // // // //     name: "",
// // // // // //     role: "",
// // // // // //     salary: "",
// // // // // //     shifts: "",
// // // // // //     contact: "",
// // // // // //     address: "",
// // // // // //     dateOfJoining: "",
// // // // // //     employeeId: "",
// // // // // //     experience: "",
// // // // // //     image: null,
// // // // // //     salaryInterval: "monthly", // Default salary interval
// // // // // //     attendance: [], // Track attendance for daily/hourly workers
// // // // // //   });
// // // // // //   const [editEmployeeId, setEditEmployeeId] = useState(null);
// // // // // //   const [selectedEmployee, setSelectedEmployee] = useState(null);
// // // // // //   const [loading, setLoading] = useState(true);
// // // // // //   const [activeTab, setActiveTab] = useState("list"); // list, analytics
// // // // // //   const [showForm, setShowForm] = useState(false);
// // // // // //   const [notification, setNotification] = useState({ show: false, message: "", type: "" });
// // // // // //   const formRef = useRef(null);

// // // // // //   // Animation variants
// // // // // //   const containerVariants = {
// // // // // //     hidden: { opacity: 0 },
// // // // // //     visible: {
// // // // // //       opacity: 1,
// // // // // //       transition: {
// // // // // //         staggerChildren: 0.1,
// // // // // //       },
// // // // // //     },
// // // // // //   };

// // // // // //   const itemVariants = {
// // // // // //     hidden: { y: 20, opacity: 0 },
// // // // // //     visible: {
// // // // // //       y: 0,
// // // // // //       opacity: 1,
// // // // // //       transition: {
// // // // // //         type: "spring",
// // // // // //         stiffness: 100,
// // // // // //         damping: 10,
// // // // // //       },
// // // // // //     },
// // // // // //   };

// // // // // //   const fadeIn = {
// // // // // //     hidden: { opacity: 0 },
// // // // // //     visible: {
// // // // // //       opacity: 1,
// // // // // //       transition: { duration: 0.6 },
// // // // // //     },
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     if (storeId) fetchEmployees();
// // // // // //   }, [storeId]);

// // // // // //   useEffect(() => {
// // // // // //     const filtered = employees.filter(
// // // // // //       (employee) =>
// // // // // //         employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // //         employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // //         employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
// // // // // //     );
// // // // // //     setFilteredEmployees(filtered);
// // // // // //   }, [searchTerm, employees]);

// // // // // //   // Click outside to close form
// // // // // //   useEffect(() => {
// // // // // //     function handleClickOutside(event) {
// // // // // //       if (formRef.current && !formRef.current.contains(event.target) && showForm) {
// // // // // //         setShowForm(false);
// // // // // //       }
// // // // // //     }
// // // // // //     document.addEventListener("mousedown", handleClickOutside);
// // // // // //     return () => {
// // // // // //       document.removeEventListener("mousedown", handleClickOutside);
// // // // // //     };
// // // // // //   }, [showForm]);

// // // // // //   const fetchEmployees = async () => {
// // // // // //     setLoading(true);
// // // // // //     try {
// // // // // //       const response = await axios.get("http://localhost:5004/employees", {
// // // // // //         headers: { storeId },
// // // // // //       });
// // // // // //       setEmployees(response.data);
// // // // // //       setFilteredEmployees(response.data);
// // // // // //       setLoading(false);
// // // // // //     } catch (error) {
// // // // // //       console.error("Error fetching employees:", error);
// // // // // //       showNotification("Failed to fetch employees", "error");
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const showNotification = (message, type = "success") => {
// // // // // //     setNotification({ show: true, message, type });
// // // // // //     setTimeout(() => setNotification({ show: false, message: "", type: "" }), 4000);
// // // // // //   };

// // // // // //   const handleAddEmployee = async () => {
// // // // // //     if (!newEmployee.name || !newEmployee.employeeId) {
// // // // // //       showNotification("Name and Employee ID are required!", "error");
// // // // // //       return;
// // // // // //     }

// // // // // //     const formData = new FormData();
// // // // // //     Object.keys(newEmployee).forEach((key) => {
// // // // // //       formData.append(key, newEmployee[key]);
// // // // // //     });

// // // // // //     try {
// // // // // //       const response = await axios.post(
// // // // // //         "http://localhost:5004/employees",
// // // // // //         formData,
// // // // // //         {
// // // // // //           headers: {
// // // // // //             storeId,
// // // // // //             "Content-Type": "multipart/form-data",
// // // // // //           },
// // // // // //         }
// // // // // //       );
// // // // // //       setEmployees([...employees, response.data]);
// // // // // //       resetForm();
// // // // // //       showNotification("Employee added successfully!");
// // // // // //       setShowForm(false);
// // // // // //     } catch (error) {
// // // // // //       console.error("Error adding employee:", error);
// // // // // //       showNotification("Failed to add employee", "error");
// // // // // //     }
// // // // // //   };

// // // // // //   const handleUpdateEmployee = async () => {
// // // // // //     if (!editEmployeeId) return;

// // // // // //     const formData = new FormData();
// // // // // //     if (newEmployee.image instanceof File) {
// // // // // //       formData.append("image", newEmployee.image);
// // // // // //     } else {
// // // // // //       formData.append("existingImage", newEmployee.image);
// // // // // //     }

// // // // // //     Object.keys(newEmployee).forEach((key) => {
// // // // // //       if (key !== "image" || newEmployee[key] instanceof File) {
// // // // // //         formData.append(key, newEmployee[key]);
// // // // // //       }
// // // // // //     });

// // // // // //     try {
// // // // // //       await axios.put(
// // // // // //         `http://localhost:5004/employees/${editEmployeeId}`,
// // // // // //         formData,
// // // // // //         {
// // // // // //           headers: {
// // // // // //             storeId,
// // // // // //             "Content-Type": "multipart/form-data",
// // // // // //           },
// // // // // //         }
// // // // // //       );
// // // // // //       showNotification("Employee updated successfully!");
// // // // // //       resetForm();
// // // // // //       fetchEmployees();
// // // // // //       setShowForm(false);
// // // // // //     } catch (error) {
// // // // // //       console.error("Error updating employee:", error);
// // // // // //       showNotification("Failed to update employee", "error");
// // // // // //     }
// // // // // //   };

// // // // // //   const handleDeleteEmployee = async (id) => {
// // // // // //     if (!window.confirm("Are you sure you want to delete this employee?")) return;

// // // // // //     try {
// // // // // //       await axios.delete(`http://localhost:5004/employees/${id}`, {
// // // // // //         headers: { storeId },
// // // // // //       });
// // // // // //       showNotification("Employee deleted successfully!");
// // // // // //       fetchEmployees();
// // // // // //       if (selectedEmployee && selectedEmployee._id === id) {
// // // // // //         setSelectedEmployee(null);
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       console.error("Error deleting employee:", error);
// // // // // //       showNotification("Failed to delete employee", "error");
// // // // // //     }
// // // // // //   };

// // // // // //   const handleEditEmployee = (employee) => {
// // // // // //     setEditEmployeeId(employee._id);
// // // // // //     setNewEmployee({
// // // // // //       name: employee.name,
// // // // // //       role: employee.role,
// // // // // //       salary: employee.salary,
// // // // // //       shifts: employee.shifts,
// // // // // //       contact: employee.contact,
// // // // // //       address: employee.address,
// // // // // //       dateOfJoining: employee.dateOfJoining,
// // // // // //       employeeId: employee.employeeId,
// // // // // //       experience: employee.experience,
// // // // // //       image: employee.image || null,
// // // // // //       salaryInterval: employee.salaryInterval || "monthly",
// // // // // //       attendance: employee.attendance || [],
// // // // // //     });
// // // // // //     setShowForm(true);
// // // // // //   };

// // // // // //   const resetForm = () => {
// // // // // //     setEditEmployeeId(null);
// // // // // //     setNewEmployee({
// // // // // //       name: "",
// // // // // //       role: "",
// // // // // //       salary: "",
// // // // // //       shifts: "",
// // // // // //       contact: "",
// // // // // //       address: "",
// // // // // //       dateOfJoining: "",
// // // // // //       employeeId: "",
// // // // // //       experience: "",
// // // // // //       image: null,
// // // // // //       salaryInterval: "monthly",
// // // // // //       attendance: [],
// // // // // //     });
// // // // // //   };

// // // // // //   // Calculate salary based on interval
// // // // // //   const calculateSalary = (employee) => {
// // // // // //     const { salary, salaryInterval, attendance } = employee;
// // // // // //     const baseSalary = parseFloat(salary) || 0;

// // // // // //     switch (salaryInterval) {
// // // // // //       case "daily":
// // // // // //         return (baseSalary / 30) * attendance.length; // Assuming 30 days in a month
// // // // // //       case "weekly":
// // // // // //         return (baseSalary / 4) * (attendance.length / 7); // Assuming 4 weeks in a month
// // // // // //       case "monthly":
// // // // // //         return baseSalary;
// // // // // //       default:
// // // // // //         return baseSalary;
// // // // // //     }
// // // // // //   };

// // // // // //   // Render salary interval options
// // // // // //   const renderSalaryIntervalOptions = () => (
// // // // // //     <select
// // // // // //       value={newEmployee.salaryInterval}
// // // // // //       onChange={(e) => setNewEmployee({ ...newEmployee, salaryInterval: e.target.value })}
// // // // // //       className="w-full p-2 border border-gray-300 rounded-lg"
// // // // // //     >
// // // // // //       <option value="daily">Daily</option>
// // // // // //       <option value="weekly">Weekly</option>
// // // // // //       <option value="monthly">Monthly</option>
// // // // // //     </select>
// // // // // //   );

// // // // // //   // Render salary management UI
// // // // // //   const renderSalaryManagement = (employee) => (
// // // // // //     <div className="p-6 bg-white rounded-lg shadow-md">
// // // // // //       <h3 className="text-xl font-bold mb-4">Salary Management</h3>
// // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // //         <div>
// // // // // //           <p className="text-gray-600">Salary Interval: <span className="font-bold">{employee.salaryInterval}</span></p>
// // // // // //           <p className="text-gray-600">Base Salary: <span className="font-bold">${employee.salary}</span></p>
// // // // // //           <p className="text-gray-600">Calculated Salary: <span className="font-bold">${calculateSalary(employee)}</span></p>
// // // // // //         </div>
// // // // // //         <div>
// // // // // //           {renderSalaryIntervalOptions()}
// // // // // //           <button
// // // // // //             onClick={() => updateSalaryInterval(employee._id, newEmployee.salaryInterval)}
// // // // // //             className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
// // // // // //           >
// // // // // //             Update Interval
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <h4 className="text-lg font-semibold mt-6">Attendance</h4>
// // // // // //       <div className="mt-4">
// // // // // //         {employee.attendance.map((record, index) => (
// // // // // //           <div key={index} className="p-3 border-b border-gray-200">
// // // // // //             <p className="text-gray-600">Date: {new Date(record.date).toLocaleDateString()}</p>
// // // // // //             <p className="text-gray-600">Status: {record.status}</p>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );

// // // // // //   // Update salary interval
// // // // // //   const updateSalaryInterval = async (employeeId, interval) => {
// // // // // //     try {
// // // // // //       await axios.put(
// // // // // //         `http://localhost:5004/employees/${employeeId}/interval`,
// // // // // //         { interval },
// // // // // //         { headers: { storeId } }
// // // // // //       );
// // // // // //       showNotification("Salary interval updated successfully!");
// // // // // //       fetchEmployees();
// // // // // //     } catch (error) {
// // // // // //       console.error("Error updating salary interval:", error);
// // // // // //       showNotification("Failed to update salary interval", "error");
// // // // // //     }
// // // // // //   };

// // // // // //   // Render form field
// // // // // //   const renderFormField = (key, icon, placeholder, type = "text") => (
// // // // // //     <motion.div
// // // // // //       variants={itemVariants}
// // // // // //       className="relative"
// // // // // //     >
// // // // // //       <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-500 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
// // // // // //         <span className="text-gray-400 mr-2">{icon}</span>
// // // // // //         {type === "file" ? (
// // // // // //           <input
// // // // // //             type="file"
// // // // // //             accept="image/*"
// // // // // //             onChange={(e) => setNewEmployee({ ...newEmployee, image: e.target.files[0] })}
// // // // // //             className="w-full focus:outline-none"
// // // // // //           />
// // // // // //         ) : (
// // // // // //           <input
// // // // // //             type={type}
// // // // // //             placeholder={placeholder}
// // // // // //             value={newEmployee[key] || ""}
// // // // // //             onChange={(e) => setNewEmployee({ ...newEmployee, [key]: e.target.value })}
// // // // // //             className="w-full focus:outline-none"
// // // // // //           />
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </motion.div>
// // // // // //   );

// // // // // //   return (
// // // // // //     <div className="p-6 bg-gray-50 min-h-screen">
// // // // // //       {/* Notification */}
// // // // // //       <AnimatePresence>
// // // // // //         {notification.show && (
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, y: -50 }}
// // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // //             exit={{ opacity: 0, y: -50 }}
// // // // // //             className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
// // // // // //               notification.type === "error" ? "bg-red-500" : "bg-green-500"
// // // // // //             } text-white`}
// // // // // //           >
// // // // // //             {notification.message}
// // // // // //           </motion.div>
// // // // // //         )}
// // // // // //       </AnimatePresence>

// // // // // //       {/* Backdrop for modal */}
// // // // // //       <AnimatePresence>
// // // // // //         {selectedEmployee && (
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0 }}
// // // // // //             animate={{ opacity: 1 }}
// // // // // //             exit={{ opacity: 0 }}
// // // // // //             className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
// // // // // //             onClick={() => setSelectedEmployee(null)}
// // // // // //           ></motion.div>
// // // // // //         )}
// // // // // //       </AnimatePresence>

// // // // // //       {/* Header */}
// // // // // //       <motion.div
// // // // // //         initial={{ y: -50, opacity: 0 }}
// // // // // //         animate={{ y: 0, opacity: 1 }}
// // // // // //         transition={{ duration: 0.5 }}
// // // // // //         className="flex justify-between items-center mb-6"
// // // // // //       >
// // // // // //         <div>
// // // // // //           <h1 className="text-3xl font-bold text-gray-800">Employee Management</h1>
// // // // // //           <p className="text-gray-500">Manage your workforce efficiently</p>
// // // // // //         </div>
// // // // // //         <div className="flex gap-3">
// // // // // //           <motion.button
// // // // // //             whileHover={{ scale: 1.05 }}
// // // // // //             whileTap={{ scale: 0.95 }}
// // // // // //             onClick={() => {
// // // // // //               resetForm();
// // // // // //               setShowForm(true);
// // // // // //             }}
// // // // // //             className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center gap-2 shadow-md"
// // // // // //           >
// // // // // //             <Plus size={18} />
// // // // // //             Add Employee
// // // // // //           </motion.button>
// // // // // //         </div>
// // // // // //       </motion.div>

// // // // // //       {/* Tab Navigation */}
// // // // // //       <motion.div
// // // // // //         initial={{ opacity: 0 }}
// // // // // //         animate={{ opacity: 1 }}
// // // // // //         transition={{ delay: 0.3 }}
// // // // // //         className="flex mb-6 bg-white rounded-lg shadow-md"
// // // // // //       >
// // // // // //         <button
// // // // // //           onClick={() => setActiveTab("list")}
// // // // // //           className={`px-6 py-3 flex items-center gap-2 ${
// // // // // //             activeTab === "list"
// // // // // //               ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold"
// // // // // //               : "text-gray-500 hover:text-gray-700"
// // // // // //           } transition-all duration-200`}
// // // // // //         >
// // // // // //           <Layers size={18} />
// // // // // //           Employee List
// // // // // //         </button>
// // // // // //         <button
// // // // // //           onClick={() => setActiveTab("analytics")}
// // // // // //           className={`px-6 py-3 flex items-center gap-2 ${
// // // // // //             activeTab === "analytics"
// // // // // //               ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold"
// // // // // //               : "text-gray-500 hover:text-gray-700"
// // // // // //           } transition-all duration-200`}
// // // // // //         >
// // // // // //           <BarChart size={18} />
// // // // // //           Analytics
// // // // // //         </button>
// // // // // //       </motion.div>

// // // // // //       {/* Search bar */}
// // // // // //       <motion.div
// // // // // //         initial={{ opacity: 0, y: 20 }}
// // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // //         transition={{ delay: 0.4 }}
// // // // // //         className="bg-white rounded-lg shadow-md p-4 mb-6 flex"
// // // // // //       >
// // // // // //         <div className="relative flex-grow">
// // // // // //           <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
// // // // // //             <Search size={18} />
// // // // // //           </span>
// // // // // //           <input
// // // // // //             type="text"
// // // // // //             placeholder="Search by name, role, or ID..."
// // // // // //             value={searchTerm}
// // // // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // // // //             className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
// // // // // //           />
// // // // // //         </div>
// // // // // //       </motion.div>

// // // // // //       {/* Add/Edit Employee Form */}
// // // // // //       <AnimatePresence>
// // // // // //         {showForm && (
// // // // // //           <motion.div
// // // // // //             ref={formRef}
// // // // // //             initial={{ opacity: 0, y: 50, scale: 0.9 }}
// // // // // //             animate={{ opacity: 1, y: 0, scale: 1 }}
// // // // // //             exit={{ opacity: 0, y: 50, scale: 0.9 }}
// // // // // //             transition={{ duration: 0.3, type: "spring" }}
// // // // // //             className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200 relative z-10"
// // // // // //           >
// // // // // //             <div className="flex justify-between items-center mb-6">
// // // // // //               <h2 className="text-2xl font-semibold text-gray-700">
// // // // // //                 {editEmployeeId ? "Edit Employee" : "Add New Employee"}
// // // // // //               </h2>
// // // // // //               <button
// // // // // //                 onClick={() => setShowForm(false)}
// // // // // //                 className="text-gray-500 hover:text-gray-700"
// // // // // //               >
// // // // // //                 <X size={20} />
// // // // // //               </button>
// // // // // //             </div>

// // // // // //             <motion.div
// // // // // //               variants={containerVariants}
// // // // // //               initial="hidden"
// // // // // //               animate="visible"
// // // // // //               className="grid grid-cols-1 md:grid-cols-2 gap-4"
// // // // // //             >
// // // // // //               {renderFormField("name", <User size={20} />, "Full Name")}
// // // // // //               {renderFormField("employeeId", <FileText size={20} />, "Employee ID")}
// // // // // //               {renderFormField("role", <Briefcase size={20} />, "Role/Position")}
// // // // // //               {renderFormField("salary", <DollarSign size={20} />, "Salary", "number")}
// // // // // //               {renderFormField("shifts", <Clock size={20} />, "Work Shifts")}
// // // // // //               {renderFormField("experience", <Award size={20} />, "Experience (years)")}
// // // // // //               {renderFormField("contact", <Phone size={20} />, "Contact Number")}
// // // // // //               {renderFormField("address", <Home size={20} />, "Address")}
// // // // // //               {renderFormField("dateOfJoining", <Calendar size={20} />, "Date of Joining", "date")}
// // // // // //               {renderFormField("salaryInterval", <Clock size={20} />, "Salary Interval", "select")}
// // // // // //               <motion.div variants={itemVariants} className="relative">
// // // // // //                 <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-500 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
// // // // // //                   <User size={20} className="text-gray-400 mr-2" />
// // // // // //                   <input
// // // // // //                     type="file"
// // // // // //                     accept="image/*"
// // // // // //                     onChange={(e) =>
// // // // // //                       setNewEmployee({ ...newEmployee, image: e.target.files[0] })
// // // // // //                     }
// // // // // //                     className="w-full focus:outline-none"
// // // // // //                   />
// // // // // //                 </div>
// // // // // //               </motion.div>
// // // // // //             </motion.div>

// // // // // //             <motion.div
// // // // // //               variants={itemVariants}
// // // // // //               className="flex gap-4 mt-6"
// // // // // //             >
// // // // // //               <button
// // // // // //                 onClick={editEmployeeId ? handleUpdateEmployee : handleAddEmployee}
// // // // // //                 className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center gap-2 shadow-md"
// // // // // //               >
// // // // // //                 {editEmployeeId ? <Edit size={18} /> : <User size={18} />}
// // // // // //                 {editEmployeeId ? "Update Employee" : "Add Employee"}
// // // // // //               </button>
// // // // // //               {editEmployeeId && (
// // // // // //                 <button
// // // // // //                   onClick={resetForm}
// // // // // //                   className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-200 flex items-center gap-2 shadow-md"
// // // // // //                 >
// // // // // //                   <X size={18} />
// // // // // //                   Cancel
// // // // // //                 </button>
// // // // // //               )}
// // // // // //             </motion.div>
// // // // // //           </motion.div>
// // // // // //         )}
// // // // // //       </AnimatePresence>

// // // // // //       {/* Content based on active tab */}
// // // // // //       <AnimatePresence mode="wait">
// // // // // //         {activeTab === "list" ? (
// // // // // //           <motion.div
// // // // // //             key="list"
// // // // // //             initial={{ opacity: 0, x: -20 }}
// // // // // //             animate={{ opacity: 1, x: 0 }}
// // // // // //             exit={{ opacity: 0, x: 20 }}
// // // // // //             transition={{ duration: 0.3 }}
// // // // // //             className="bg-white rounded-lg shadow-md p-6"
// // // // // //           >
// // // // // //             {loading ? (
// // // // // //               <div className="flex justify-center items-center h-64">
// // // // // //                 <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
// // // // // //               </div>
// // // // // //             ) : filteredEmployees.length === 0 ? (
// // // // // //               <div className="text-center py-10">
// // // // // //                 <div className="mx-auto text-gray-300 mb-4">
// // // // // //                   <User size={48} />
// // // // // //                 </div>
// // // // // //                 <h3 className="text-xl font-medium text-gray-700">No employees found</h3>
// // // // // //                 <p className="text-gray-500 mt-2">Add new employees or try a different search term</p>
// // // // // //               </div>
// // // // // //             ) : (
// // // // // //               <motion.div
// // // // // //                 variants={containerVariants}
// // // // // //                 initial="hidden"
// // // // // //                 animate="visible"
// // // // // //                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
// // // // // //               >
// // // // // //                 {filteredEmployees.map((employee) => (
// // // // // //                   <motion.div
// // // // // //                     key={employee._id}
// // // // // //                     variants={itemVariants}
// // // // // //                     whileHover={{
// // // // // //                       scale: 1.03,
// // // // // //                       boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
// // // // // //                     }}
// // // // // //                     whileTap={{ scale: 0.98 }}
// // // // // //                     onClick={() => setSelectedEmployee(employee)}
// // // // // //                     className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl shadow-lg text-white cursor-pointer h-64 flex flex-col justify-center items-center relative overflow-hidden group"
// // // // // //                   >
// // // // // //                     <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
// // // // // //                     <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
// // // // // //                       <button
// // // // // //                         onClick={(e) => {
// // // // // //                           e.stopPropagation();
// // // // // //                           handleEditEmployee(employee);
// // // // // //                         }}
// // // // // //                         className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition duration-200 mr-2"
// // // // // //                       >
// // // // // //                         <Edit size={16} />
// // // // // //                       </button>
// // // // // //                       <button
// // // // // //                         onClick={(e) => {
// // // // // //                           e.stopPropagation();
// // // // // //                           handleDeleteEmployee(employee._id);
// // // // // //                         }}
// // // // // //                         className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-200"
// // // // // //                       >
// // // // // //                         <Trash size={16} />
// // // // // //                       </button>
// // // // // //                     </div>
// // // // // //                     <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-white opacity-5 rounded-full"></div>
// // // // // //                     <div className="absolute -top-10 -left-10 h-40 w-40 bg-white opacity-5 rounded-full"></div>
// // // // // //                     <img
// // // // // //                       src={
// // // // // //                         employee.image
// // // // // //                           ? `http://localhost:5004/uploads/${employee.image}`
// // // // // //                           : `http://localhost:5004/uploads/em.jpg`
// // // // // //                       }
// // // // // //                       alt={`${employee.name}'s profile`}
// // // // // //                       className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-xl object-cover"
// // // // // //                     />
// // // // // //                     <h3 className="text-xl font-bold text-center">{employee.name}</h3>
// // // // // //                     <p className="text-sm text-center text-indigo-100">Role: {employee.role || "N/A"}</p>
// // // // // //                     <p className="text-sm text-center text-indigo-100">ID: {employee.employeeId}</p>
// // // // // //                   </motion.div>
// // // // // //                 ))}
// // // // // //               </motion.div>
// // // // // //             )}
// // // // // //           </motion.div>
// // // // // //         ) : (
// // // // // //           <motion.div
// // // // // //             key="analytics"
// // // // // //             initial={{ opacity: 0, x: 20 }}
// // // // // //             animate={{ opacity: 1, x: 0 }}
// // // // // //             exit={{ opacity: 0, x: -20 }}
// // // // // //             transition={{ duration: 0.3 }}
// // // // // //           >
// // // // // //             {/* Analytics Dashboard */}
// // // // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // // // //               <motion.div
// // // // // //                 variants={fadeIn}
// // // // // //                 initial="hidden"
// // // // // //                 animate="visible"
// // // // // //                 className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500"
// // // // // //               >
// // // // // //                 <div className="flex justify-between items-center">
// // // // // //                   <div>
// // // // // //                     <p className="text-sm text-gray-500">Total Employees</p>
// // // // // //                     <h3 className="text-2xl font-bold text-gray-800">{employees.length}</h3>
// // // // // //                   </div>
// // // // // //                   <div className="p-3 bg-indigo-100 rounded-lg">
// // // // // //                     <User size={24} className="text-indigo-600" />
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </motion.div>

// // // // // //               <motion.div
// // // // // //                 variants={fadeIn}
// // // // // //                 initial="hidden"
// // // // // //                 animate="visible"
// // // // // //                 transition={{ delay: 0.1 }}
// // // // // //                 className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500"
// // // // // //               >
// // // // // //                 <div className="flex justify-between items-center">
// // // // // //                   <div>
// // // // // //                     <p className="text-sm text-gray-500">Average Salary</p>
// // // // // //                     <h3 className="text-2xl font-bold text-gray-800">
// // // // // //                       ${(employees.reduce((sum, emp) => sum + (Number(emp.salary) || 0), 0) / (employees.length || 1)).toFixed(2)}
// // // // // //                     </h3>
// // // // // //                   </div>
// // // // // //                   <div className="p-3 bg-green-100 rounded-lg">
// // // // // //                     <DollarSign size={24} className="text-green-600" />
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </motion.div>

// // // // // //               <motion.div
// // // // // //                 variants={fadeIn}
// // // // // //                 initial="hidden"
// // // // // //                 animate="visible"
// // // // // //                 transition={{ delay: 0.2 }}
// // // // // //                 className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500"
// // // // // //               >
// // // // // //                 <div className="flex justify-between items-center">
// // // // // //                   <div>
// // // // // //                     <p className="text-sm text-gray-500">New Hires (3 months)</p>
// // // // // //                     <h3 className="text-2xl font-bold text-gray-800">
// // // // // //                       {employees.filter((emp) => {
// // // // // //                         if (!emp.dateOfJoining) return false;
// // // // // //                         const joinDate = new Date(emp.dateOfJoining);
// // // // // //                         const threeMonthsAgo = new Date();
// // // // // //                         threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
// // // // // //                         return joinDate >= threeMonthsAgo;
// // // // // //                       }).length}
// // // // // //                     </h3>
// // // // // //                   </div>
// // // // // //                   <div className="p-3 bg-blue-100 rounded-lg">
// // // // // //                     <Calendar size={24} className="text-blue-600" />
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </motion.div>
// // // // // //             </div>

// // // // // //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // // // // //               {/* Role Distribution Chart */}
// // // // // //               <motion.div
// // // // // //                 variants={fadeIn}
// // // // // //                 initial="hidden"
// // // // // //                 animate="visible"
// // // // // //                 transition={{ delay: 0.3 }}
// // // // // //                 className="bg-white rounded-lg shadow-md p-6"
// // // // // //               >
// // // // // //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Role Distribution</h3>
// // // // // //                 {Object.keys(employees.reduce((acc, emp) => {
// // // // // //                   const role = emp.role || "Unspecified";
// // // // // //                   acc[role] = (acc[role] || 0) + 1;
// // // // // //                   return acc;
// // // // // //                 }, {})).length > 0 ? (
// // // // // //                   <ResponsiveContainer width="100%" height={300}>
// // // // // //                     <PieChart>
// // // // // //                       <Pie
// // // // // //                         data={Object.entries(employees.reduce((acc, emp) => {
// // // // // //                           const role = emp.role || "Unspecified";
// // // // // //                           acc[role] = (acc[role] || 0) + 1;
// // // // // //                           return acc;
// // // // // //                         }, {})).map(([name, value]) => ({ name, value }))}
// // // // // //                         cx="50%"
// // // // // //                         cy="50%"
// // // // // //                         labelLine={false}
// // // // // //                         outerRadius={100}
// // // // // //                         fill="#8884d8"
// // // // // //                         dataKey="value"
// // // // // //                         label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
// // // // // //                       >
// // // // // //                         {Object.entries(employees.reduce((acc, emp) => {
// // // // // //                           const role = emp.role || "Unspecified";
// // // // // //                           acc[role] = (acc[role] || 0) + 1;
// // // // // //                           return acc;
// // // // // //                         }, {})).map(([name, value], index) => (
// // // // // //                           <Cell key={`cell-${index}`} fill={["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899"][index % 6]} />
// // // // // //                         ))}
// // // // // //                       </Pie>
// // // // // //                       <Tooltip />
// // // // // //                       <Legend />
// // // // // //                     </PieChart>
// // // // // //                   </ResponsiveContainer>
// // // // // //                 ) : (
// // // // // //                   <div className="flex justify-center items-center h-64">
// // // // // //                     <p className="text-gray-500">No role data available</p>
// // // // // //                   </div>
// // // // // //                 )}
// // // // // //               </motion.div>

// // // // // //               {/* Top Salary Chart */}
// // // // // //               <motion.div
// // // // // //                 variants={fadeIn}
// // // // // //                 initial="hidden"
// // // // // //                 animate="visible"
// // // // // //                 transition={{ delay: 0.4 }}
// // // // // //                 className="bg-white rounded-lg shadow-md p-6"
// // // // // //               >
// // // // // //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Top 5 Salaries</h3>
// // // // // //                 {employees
// // // // // //                   .filter((emp) => emp.salary)
// // // // // //                   .map((emp) => ({
// // // // // //                     name: emp.name.length > 10 ? emp.name.substring(0, 10) + "..." : emp.name,
// // // // // //                     salary: Number(emp.salary) || 0,
// // // // // //                   }))
// // // // // //                   .sort((a, b) => b.salary - a.salary)
// // // // // //                   .slice(0, 5).length > 0 ? (
// // // // // //                   <ResponsiveContainer width="100%" height={300}>
// // // // // //                     <BarChart
// // // // // //                       data={employees
// // // // // //                         .filter((emp) => emp.salary)
// // // // // //                         .map((emp) => ({
// // // // // //                           name: emp.name.length > 10 ? emp.name.substring(0, 10) + "..." : emp.name,
// // // // // //                           salary: Number(emp.salary) || 0,
// // // // // //                         }))
// // // // // //                         .sort((a, b) => b.salary - a.salary)
// // // // // //                         .slice(0, 5)
// // // // // //                       }
// // // // // //                     >
// // // // // //                       <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
// // // // // //                       <XAxis dataKey="name" />
// // // // // //                       <YAxis />
// // // // // //                       <Tooltip formatter={(value) => [`$${value}`, "Salary"]} />
// // // // // //                       <Bar dataKey="salary" fill="#4F46E5" barSize={40} radius={[4, 4, 0, 0]} />
// // // // // //                     </BarChart>
// // // // // //                   </ResponsiveContainer>
// // // // // //                 ) : (
// // // // // //                   <div className="flex justify-center items-center h-64">
// // // // // //                     <p className="text-gray-500">No salary data available</p>
// // // // // //                   </div>
// // // // // //                 )}
// // // // // //               </motion.div>

// // // // // //               {/* Experience Chart */}
// // // // // //               <motion.div
// // // // // //                 variants={fadeIn}
// // // // // //                 initial="hidden"
// // // // // //                 animate="visible"
// // // // // //                 transition={{ delay: 0.5 }}
// // // // // //                 className="bg-white rounded-lg shadow-md p-6 col-span-1 lg:col-span-2"
// // // // // //               >
// // // // // //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Experience Overview</h3>
// // // // // //                 {employees
// // // // // //                   .filter((emp) => emp.experience)
// // // // // //                   .map((emp) => ({
// // // // // //                     name: emp.name.length > 10 ? emp.name.substring(0, 10) + "..." : emp.name,
// // // // // //                     years: Number(emp.experience.replace(/[^0-9.]/g, "")) || 0,
// // // // // //                   }))
// // // // // //                   .sort((a, b) => b.years - a.years)
// // // // // //                   .slice(0, 5).length > 0 ? (
// // // // // //                   <ResponsiveContainer width="100%" height={300}>
// // // // // //                     <LineChart
// // // // // //                       data={employees
// // // // // //                         .filter((emp) => emp.experience)
// // // // // //                         .map((emp) => ({
// // // // // //                           name: emp.name.length > 10 ? emp.name.substring(0, 10) + "..." : emp.name,
// // // // // //                           years: Number(emp.experience.replace(/[^0-9.]/g, "")) || 0,
// // // // // //                         }))
// // // // // //                         .sort((a, b) => b.years - a.years)
// // // // // //                         .slice(0, 5)
// // // // // //                       }
// // // // // //                     >
// // // // // //                       <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
// // // // // //                       <XAxis dataKey="name" />
// // // // // //                       <YAxis />
// // // // // //                       <Tooltip formatter={(value) => [`${value} years`, "Experience"]} />
// // // // // //                       <Line
// // // // // //                         type="monotone"
// // // // // //                         dataKey="years"
// // // // // //                         stroke="#10B981"
// // // // // //                         strokeWidth={3}
// // // // // //                         dot={{ r: 6, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }}
// // // // // //                         activeDot={{ r: 8, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }}
// // // // // //                       />
// // // // // //                     </LineChart>
// // // // // //                   </ResponsiveContainer>
// // // // // //                 ) : (
// // // // // //                   <div className="flex justify-center items-center h-64">
// // // // // //                     <p className="text-gray-500">No experience data available</p>
// // // // // //                   </div>
// // // // // //                 )}
// // // // // //               </motion.div>
// // // // // //             </div>
// // // // // //           </motion.div>
// // // // // //         )}
// // // // // //       </AnimatePresence>

// // // // // //       {/* Employee Detail Modal */}
// // // // // //       <AnimatePresence>
// // // // // //         {selectedEmployee && (
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0 }}
// // // // // //             animate={{ opacity: 1 }}
// // // // // //             exit={{ opacity: 0 }}
// // // // // //             className="fixed inset-0 flex justify-center items-center z-50"
// // // // // //           >
// // // // // //             <div className="bg-white rounded-lg shadow-2xl p-8 max-w-3xl w-full z-50">
// // // // // //               <img
// // // // // //                 src={
// // // // // //                   selectedEmployee.image
// // // // // //                     ? `http://localhost:5004/uploads/${selectedEmployee.image}`
// // // // // //                     : `http://localhost:5004/uploads/em.jpg`
// // // // // //                 }
// // // // // //                 alt={`${selectedEmployee.name}'s profile`}
// // // // // //                 className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500"
// // // // // //               />
// // // // // //               <h3 className="text-2xl font-bold text-center mb-4">{selectedEmployee.name}</h3>
// // // // // //               <div className="grid grid-cols-2 gap-4">
// // // // // //                 {Object.entries(selectedEmployee).map(([key, value]) => (
// // // // // //                   key !== "image" && (
// // // // // //                     <>
// // // // // //                       <div className="font-semibold text-right">{key.charAt(0).toUpperCase() + key.slice(1)}:</div>
// // // // // //                       <div>{value}</div>
// // // // // //                     </>
// // // // // //                   )
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //               <button
// // // // // //                 onClick={() => setSelectedEmployee(null)}
// // // // // //                 className="bg-red-500 text-white px-6 py-2 rounded-lg mt-6 hover:bg-red-600 transition duration-200 flex items-center gap-2 mx-auto"
// // // // // //               >
// // // // // //                 <X size={18} />
// // // // // //                 Close
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </motion.div>
// // // // // //         )}
// // // // // //       </AnimatePresence>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default EmployeeManagement;
// // // // // // import React, { useEffect, useState, useContext, useRef } from "react";
// // // // // // import axios from "axios";
// // // // // // import { StoreContext } from "./StoreContext";
// // // // // // import {
// // // // // //   User, Briefcase, DollarSign, Clock, Phone, Home,
// // // // // //   Calendar, FileText, Edit, Trash, X, Search,
// // // // // //   Plus, ChevronDown, Award, Layers, CreditCard, TrendingUp
// // // // // // } from "react-feather";
// // // // // // import {
// // // // // //   BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
// // // // // //   PieChart, Pie, Cell, LineChart, Line, CartesianGrid
// // // // // // } from "recharts";
// // // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // // const EmployeeManagement = () => {
// // // // // //   const { storeId } = useContext(StoreContext);
// // // // // //   const [employees, setEmployees] = useState([]);
// // // // // //   const [filteredEmployees, setFilteredEmployees] = useState([]);
// // // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // // //   const [newEmployee, setNewEmployee] = useState({
// // // // // //     name: "",
// // // // // //     role: "",
// // // // // //     salary: "",
// // // // // //     shifts: "",
// // // // // //     contact: "",
// // // // // //     address: "",
// // // // // //     dateOfJoining: "",
// // // // // //     employeeId: "",
// // // // // //     experience: "",
// // // // // //     image: null,
// // // // // //     salaryInterval: "monthly", // Default salary interval
// // // // // //     attendance: [], // Track attendance for daily/hourly workers
// // // // // //   });
// // // // // //   const [editEmployeeId, setEditEmployeeId] = useState(null);
// // // // // //   const [selectedEmployee, setSelectedEmployee] = useState(null);
// // // // // //   const [loading, setLoading] = useState(true);
// // // // // //   const [activeTab, setActiveTab] = useState("list"); // list, analytics
// // // // // //   const [showForm, setShowForm] = useState(false);
// // // // // //   const [notification, setNotification] = useState({ show: false, message: "", type: "" });
// // // // // //   const formRef = useRef(null);

// // // // // //   // Animation variants
// // // // // //   const containerVariants = {
// // // // // //     hidden: { opacity: 0 },
// // // // // //     visible: {
// // // // // //       opacity: 1,
// // // // // //       transition: {
// // // // // //         staggerChildren: 0.1,
// // // // // //       },
// // // // // //     },
// // // // // //   };

// // // // // //   const itemVariants = {
// // // // // //     hidden: { y: 20, opacity: 0 },
// // // // // //     visible: {
// // // // // //       y: 0,
// // // // // //       opacity: 1,
// // // // // //       transition: {
// // // // // //         type: "spring",
// // // // // //         stiffness: 100,
// // // // // //         damping: 10,
// // // // // //       },
// // // // // //     },
// // // // // //   };

// // // // // //   const fadeIn = {
// // // // // //     hidden: { opacity: 0 },
// // // // // //     visible: {
// // // // // //       opacity: 1,
// // // // // //       transition: { duration: 0.6 },
// // // // // //     },
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     if (storeId) fetchEmployees();
// // // // // //   }, [storeId]);

// // // // // //   useEffect(() => {
// // // // // //     const filtered = employees.filter(
// // // // // //       (employee) =>
// // // // // //         employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // //         employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // //         employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
// // // // // //     );
// // // // // //     setFilteredEmployees(filtered);
// // // // // //   }, [searchTerm, employees]);

// // // // // //   // Click outside to close form
// // // // // //   useEffect(() => {
// // // // // //     function handleClickOutside(event) {
// // // // // //       if (formRef.current && !formRef.current.contains(event.target) && showForm) {
// // // // // //         setShowForm(false);
// // // // // //       }
// // // // // //     }
// // // // // //     document.addEventListener("mousedown", handleClickOutside);
// // // // // //     return () => {
// // // // // //       document.removeEventListener("mousedown", handleClickOutside);
// // // // // //     };
// // // // // //   }, [showForm]);

// // // // // //   const fetchEmployees = async () => {
// // // // // //     setLoading(true);
// // // // // //     try {
// // // // // //       const response = await axios.get("http://localhost:5004/employees", {
// // // // // //         headers: { storeId },
// // // // // //       });
// // // // // //       setEmployees(response.data);
// // // // // //       setFilteredEmployees(response.data);
// // // // // //       setLoading(false);
// // // // // //     } catch (error) {
// // // // // //       console.error("Error fetching employees:", error);
// // // // // //       showNotification("Failed to fetch employees", "error");
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const showNotification = (message, type = "success") => {
// // // // // //     setNotification({ show: true, message, type });
// // // // // //     setTimeout(() => setNotification({ show: false, message: "", type: "" }), 4000);
// // // // // //   };

// // // // // //   const handleAddEmployee = async () => {
// // // // // //     if (!newEmployee.name || !newEmployee.employeeId) {
// // // // // //       showNotification("Name and Employee ID are required!", "error");
// // // // // //       return;
// // // // // //     }

// // // // // //     const formData = new FormData();
// // // // // //     Object.keys(newEmployee).forEach((key) => {
// // // // // //       formData.append(key, newEmployee[key]);
// // // // // //     });

// // // // // //     try {
// // // // // //       const response = await axios.post(
// // // // // //         "http://localhost:5004/employees",
// // // // // //         formData,
// // // // // //         {
// // // // // //           headers: {
// // // // // //             storeId,
// // // // // //             "Content-Type": "multipart/form-data",
// // // // // //           },
// // // // // //         }
// // // // // //       );
// // // // // //       setEmployees([...employees, response.data]);
// // // // // //       resetForm();
// // // // // //       showNotification("Employee added successfully!");
// // // // // //       setShowForm(false);
// // // // // //     } catch (error) {
// // // // // //       console.error("Error adding employee:", error);
// // // // // //       showNotification("Failed to add employee", "error");
// // // // // //     }
// // // // // //   };

// // // // // //   const handleUpdateEmployee = async () => {
// // // // // //     if (!editEmployeeId) return;

// // // // // //     const formData = new FormData();
// // // // // //     if (newEmployee.image instanceof File) {
// // // // // //       formData.append("image", newEmployee.image);
// // // // // //     } else {
// // // // // //       formData.append("existingImage", newEmployee.image);
// // // // // //     }

// // // // // //     Object.keys(newEmployee).forEach((key) => {
// // // // // //       if (key !== "image" || newEmployee[key] instanceof File) {
// // // // // //         formData.append(key, newEmployee[key]);
// // // // // //       }
// // // // // //     });

// // // // // //     try {
// // // // // //       await axios.put(
// // // // // //         `http://localhost:5004/employees/${editEmployeeId}`,
// // // // // //         formData,
// // // // // //         {
// // // // // //           headers: {
// // // // // //             storeId,
// // // // // //             "Content-Type": "multipart/form-data",
// // // // // //           },
// // // // // //         }
// // // // // //       );
// // // // // //       showNotification("Employee updated successfully!");
// // // // // //       resetForm();
// // // // // //       fetchEmployees();
// // // // // //       setShowForm(false);
// // // // // //     } catch (error) {
// // // // // //       console.error("Error updating employee:", error);
// // // // // //       showNotification("Failed to update employee", "error");
// // // // // //     }
// // // // // //   };

// // // // // //   const handleDeleteEmployee = async (id) => {
// // // // // //     if (!window.confirm("Are you sure you want to delete this employee?")) return;

// // // // // //     try {
// // // // // //       await axios.delete(`http://localhost:5004/employees/${id}`, {
// // // // // //         headers: { storeId },
// // // // // //       });
// // // // // //       showNotification("Employee deleted successfully!");
// // // // // //       fetchEmployees();
// // // // // //       if (selectedEmployee && selectedEmployee._id === id) {
// // // // // //         setSelectedEmployee(null);
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       console.error("Error deleting employee:", error);
// // // // // //       showNotification("Failed to delete employee", "error");
// // // // // //     }
// // // // // //   };

// // // // // //   const handleEditEmployee = (employee) => {
// // // // // //     setEditEmployeeId(employee._id);
// // // // // //     setNewEmployee({
// // // // // //       name: employee.name,
// // // // // //       role: employee.role,
// // // // // //       salary: employee.salary,
// // // // // //       shifts: employee.shifts,
// // // // // //       contact: employee.contact,
// // // // // //       address: employee.address,
// // // // // //       dateOfJoining: employee.dateOfJoining,
// // // // // //       employeeId: employee.employeeId,
// // // // // //       experience: employee.experience,
// // // // // //       image: employee.image || null,
// // // // // //       salaryInterval: employee.salaryInterval || "monthly",
// // // // // //       attendance: employee.attendance || [],
// // // // // //     });
// // // // // //     setShowForm(true);
// // // // // //   };

// // // // // //   const resetForm = () => {
// // // // // //     setEditEmployeeId(null);
// // // // // //     setNewEmployee({
// // // // // //       name: "",
// // // // // //       role: "",
// // // // // //       salary: "",
// // // // // //       shifts: "",
// // // // // //       contact: "",
// // // // // //       address: "",
// // // // // //       dateOfJoining: "",
// // // // // //       employeeId: "",
// // // // // //       experience: "",
// // // // // //       image: null,
// // // // // //       salaryInterval: "monthly",
// // // // // //       attendance: [],
// // // // // //     });
// // // // // //   };

// // // // // //   // Calculate salary based on interval
// // // // // //   const calculateSalary = (employee) => {
// // // // // //     const { salary, salaryInterval, attendance } = employee;
// // // // // //     const baseSalary = parseFloat(salary) || 0;

// // // // // //     switch (salaryInterval) {
// // // // // //       case "daily":
// // // // // //         return (baseSalary / 30) * attendance.length; // Assuming 30 days in a month
// // // // // //       case "weekly":
// // // // // //         return (baseSalary / 4) * (attendance.length / 7); // Assuming 4 weeks in a month
// // // // // //       case "monthly":
// // // // // //         return baseSalary;
// // // // // //       default:
// // // // // //         return baseSalary;
// // // // // //     }
// // // // // //   };

// // // // // //   // Render salary interval options
// // // // // //   const renderSalaryIntervalOptions = () => (
// // // // // //     <select
// // // // // //       value={newEmployee.salaryInterval}
// // // // // //       onChange={(e) => setNewEmployee({ ...newEmployee, salaryInterval: e.target.value })}
// // // // // //       className="w-full p-2 border border-gray-300 rounded-lg"
// // // // // //     >
// // // // // //       <option value="daily">Daily</option>
// // // // // //       <option value="weekly">Weekly</option>
// // // // // //       <option value="monthly">Monthly</option>
// // // // // //     </select>
// // // // // //   );

// // // // // //   // Render salary management UI
// // // // // //   const renderSalaryManagement = (employee) => (
// // // // // //     <div className="p-6 bg-white rounded-lg shadow-md">
// // // // // //       <h3 className="text-xl font-bold mb-4">Salary Management</h3>
// // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // //         <div>
// // // // // //           <p className="text-gray-600">Salary Interval: <span className="font-bold">{employee.salaryInterval}</span></p>
// // // // // //           <p className="text-gray-600">Base Salary: <span className="font-bold">${employee.salary}</span></p>
// // // // // //           <p className="text-gray-600">Calculated Salary: <span className="font-bold">${calculateSalary(employee)}</span></p>
// // // // // //         </div>
// // // // // //         <div>
// // // // // //           {renderSalaryIntervalOptions()}
// // // // // //           <button
// // // // // //             onClick={() => updateSalaryInterval(employee._id, newEmployee.salaryInterval)}
// // // // // //             className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
// // // // // //           >
// // // // // //             Update Interval
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <h4 className="text-lg font-semibold mt-6">Attendance</h4>
// // // // // //       <div className="mt-4">
// // // // // //         {employee.attendance.map((record, index) => (
// // // // // //           <div key={index} className="p-3 border-b border-gray-200">
// // // // // //             <p className="text-gray-600">Date: {new Date(record.date).toLocaleDateString()}</p>
// // // // // //             <p className="text-gray-600">Status: {record.status}</p>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );

// // // // // //   // Update salary interval
// // // // // //   const updateSalaryInterval = async (employeeId, interval) => {
// // // // // //     try {
// // // // // //       await axios.put(
// // // // // //         `http://localhost:5004/employees/${employeeId}/interval`,
// // // // // //         { interval },
// // // // // //         { headers: { storeId } }
// // // // // //       );
// // // // // //       showNotification("Salary interval updated successfully!");
// // // // // //       fetchEmployees();
// // // // // //     } catch (error) {
// // // // // //       console.error("Error updating salary interval:", error);
// // // // // //       showNotification("Failed to update salary interval", "error");
// // // // // //     }
// // // // // //   };

// // // // // //   // Render form field
// // // // // //   const renderFormField = (key, icon, placeholder, type = "text") => (
// // // // // //     <motion.div
// // // // // //       variants={itemVariants}
// // // // // //       className="relative"
// // // // // //     >
// // // // // //       <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-500 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
// // // // // //         <span className="text-gray-400 mr-2">{icon}</span>
// // // // // //         {type === "file" ? (
// // // // // //           <input
// // // // // //             type="file"
// // // // // //             accept="image/*"
// // // // // //             onChange={(e) => setNewEmployee({ ...newEmployee, image: e.target.files[0] })}
// // // // // //             className="w-full focus:outline-none"
// // // // // //           />
// // // // // //         ) : (
// // // // // //           <input
// // // // // //             type={type}
// // // // // //             placeholder={placeholder}
// // // // // //             value={newEmployee[key] || ""}
// // // // // //             onChange={(e) => setNewEmployee({ ...newEmployee, [key]: e.target.value })}
// // // // // //             className="w-full focus:outline-none"
// // // // // //           />
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </motion.div>
// // // // // //   );

// // // // // //   return (
// // // // // //     <div className="p-6 bg-gray-50 min-h-screen">
// // // // // //       {/* Notification */}
// // // // // //       <AnimatePresence>
// // // // // //         {notification.show && (
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, y: -50 }}
// // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // //             exit={{ opacity: 0, y: -50 }}
// // // // // //             className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
// // // // // //               notification.type === "error" ? "bg-red-500" : "bg-green-500"
// // // // // //             } text-white`}
// // // // // //           >
// // // // // //             {notification.message}
// // // // // //           </motion.div>
// // // // // //         )}
// // // // // //       </AnimatePresence>

// // // // // //       {/* Backdrop for modal */}
// // // // // //       <AnimatePresence>
// // // // // //         {selectedEmployee && (
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0 }}
// // // // // //             animate={{ opacity: 1 }}
// // // // // //             exit={{ opacity: 0 }}
// // // // // //             className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
// // // // // //             onClick={() => setSelectedEmployee(null)}
// // // // // //           ></motion.div>
// // // // // //         )}
// // // // // //       </AnimatePresence>

// // // // // //       {/* Header */}
// // // // // //       <motion.div
// // // // // //         initial={{ y: -50, opacity: 0 }}
// // // // // //         animate={{ y: 0, opacity: 1 }}
// // // // // //         transition={{ duration: 0.5 }}
// // // // // //         className="flex justify-between items-center mb-6"
// // // // // //       >
// // // // // //         <div>
// // // // // //           <h1 className="text-3xl font-bold text-gray-800">Employee Management</h1>
// // // // // //           <p className="text-gray-500">Manage your workforce efficiently</p>
// // // // // //         </div>
// // // // // //         <div className="flex gap-3">
// // // // // //           <motion.button
// // // // // //             whileHover={{ scale: 1.05 }}
// // // // // //             whileTap={{ scale: 0.95 }}
// // // // // //             onClick={() => {
// // // // // //               resetForm();
// // // // // //               setShowForm(true);
// // // // // //             }}
// // // // // //             className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center gap-2 shadow-md"
// // // // // //           >
// // // // // //             <Plus size={18} />
// // // // // //             Add Employee
// // // // // //           </motion.button>
// // // // // //         </div>
// // // // // //       </motion.div>

// // // // // //       {/* Tab Navigation */}
// // // // // //       <motion.div
// // // // // //         initial={{ opacity: 0 }}
// // // // // //         animate={{ opacity: 1 }}
// // // // // //         transition={{ delay: 0.3 }}
// // // // // //         className="flex mb-6 bg-white rounded-lg shadow-md"
// // // // // //       >
// // // // // //         <button
// // // // // //           onClick={() => setActiveTab("list")}
// // // // // //           className={`px-6 py-3 flex items-center gap-2 ${
// // // // // //             activeTab === "list"
// // // // // //               ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold"
// // // // // //               : "text-gray-500 hover:text-gray-700"
// // // // // //           } transition-all duration-200`}
// // // // // //         >
// // // // // //           <Layers size={18} />
// // // // // //           Employee List
// // // // // //         </button>
// // // // // //         <button
// // // // // //           onClick={() => setActiveTab("analytics")}
// // // // // //           className={`px-6 py-3 flex items-center gap-2 ${
// // // // // //             activeTab === "analytics"
// // // // // //               ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold"
// // // // // //               : "text-gray-500 hover:text-gray-700"
// // // // // //           } transition-all duration-200`}
// // // // // //         >
// // // // // //           <BarChart size={18} />
// // // // // //           Analytics
// // // // // //         </button>
// // // // // //       </motion.div>

// // // // // //       {/* Search bar */}
// // // // // //       <motion.div
// // // // // //         initial={{ opacity: 0, y: 20 }}
// // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // //         transition={{ delay: 0.4 }}
// // // // // //         className="bg-white rounded-lg shadow-md p-4 mb-6 flex"
// // // // // //       >
// // // // // //         <div className="relative flex-grow">
// // // // // //           <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
// // // // // //             <Search size={18} />
// // // // // //           </span>
// // // // // //           <input
// // // // // //             type="text"
// // // // // //             placeholder="Search by name, role, or ID..."
// // // // // //             value={searchTerm}
// // // // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // // // //             className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
// // // // // //           />
// // // // // //         </div>
// // // // // //       </motion.div>

// // // // // //       {/* Add/Edit Employee Form */}
// // // // // //       <AnimatePresence>
// // // // // //         {showForm && (
// // // // // //           <motion.div
// // // // // //             ref={formRef}
// // // // // //             initial={{ opacity: 0, y: 50, scale: 0.9 }}
// // // // // //             animate={{ opacity: 1, y: 0, scale: 1 }}
// // // // // //             exit={{ opacity: 0, y: 50, scale: 0.9 }}
// // // // // //             transition={{ duration: 0.3, type: "spring" }}
// // // // // //             className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200 relative z-10"
// // // // // //           >
// // // // // //             <div className="flex justify-between items-center mb-6">
// // // // // //               <h2 className="text-2xl font-semibold text-gray-700">
// // // // // //                 {editEmployeeId ? "Edit Employee" : "Add New Employee"}
// // // // // //               </h2>
// // // // // //               <button
// // // // // //                 onClick={() => setShowForm(false)}
// // // // // //                 className="text-gray-500 hover:text-gray-700"
// // // // // //               >
// // // // // //                 <X size={20} />
// // // // // //               </button>
// // // // // //             </div>

// // // // // //             <motion.div
// // // // // //               variants={containerVariants}
// // // // // //               initial="hidden"
// // // // // //               animate="visible"
// // // // // //               className="grid grid-cols-1 md:grid-cols-2 gap-4"
// // // // // //             >
// // // // // //               {renderFormField("name", <User size={20} />, "Full Name")}
// // // // // //               {renderFormField("employeeId", <FileText size={20} />, "Employee ID")}
// // // // // //               {renderFormField("role", <Briefcase size={20} />, "Role/Position")}
// // // // // //               {renderFormField("salary", <DollarSign size={20} />, "Salary", "number")}
// // // // // //               {renderFormField("shifts", <Clock size={20} />, "Work Shifts")}
// // // // // //               {renderFormField("experience", <Award size={20} />, "Experience (years)")}
// // // // // //               {renderFormField("contact", <Phone size={20} />, "Contact Number")}
// // // // // //               {renderFormField("address", <Home size={20} />, "Address")}
// // // // // //               {renderFormField("dateOfJoining", <Calendar size={20} />, "Date of Joining", "date")}
// // // // // //               {renderFormField("salaryInterval", <Clock size={20} />, "Salary Interval", "select")}
// // // // // //               <motion.div variants={itemVariants} className="relative">
// // // // // //                 <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-500 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
// // // // // //                   <User size={20} className="text-gray-400 mr-2" />
// // // // // //                   <input
// // // // // //                     type="file"
// // // // // //                     accept="image/*"
// // // // // //                     onChange={(e) =>
// // // // // //                       setNewEmployee({ ...newEmployee, image: e.target.files[0] })
// // // // // //                     }
// // // // // //                     className="w-full focus:outline-none"
// // // // // //                   />
// // // // // //                 </div>
// // // // // //               </motion.div>
// // // // // //             </motion.div>

// // // // // //             <motion.div
// // // // // //               variants={itemVariants}
// // // // // //               className="flex gap-4 mt-6"
// // // // // //             >
// // // // // //               <button
// // // // // //                 onClick={editEmployeeId ? handleUpdateEmployee : handleAddEmployee}
// // // // // //                 className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center gap-2 shadow-md"
// // // // // //               >
// // // // // //                 {editEmployeeId ? <Edit size={18} /> : <User size={18} />}
// // // // // //                 {editEmployeeId ? "Update Employee" : "Add Employee"}
// // // // // //               </button>
// // // // // //               {editEmployeeId && (
// // // // // //                 <button
// // // // // //                   onClick={resetForm}
// // // // // //                   className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-200 flex items-center gap-2 shadow-md"
// // // // // //                 >
// // // // // //                   <X size={18} />
// // // // // //                   Cancel
// // // // // //                 </button>
// // // // // //               )}
// // // // // //             </motion.div>
// // // // // //           </motion.div>
// // // // // //         )}
// // // // // //       </AnimatePresence>

// // // // // //       {/* Content based on active tab */}
// // // // // //       <AnimatePresence mode="wait">
// // // // // //         {activeTab === "list" ? (
// // // // // //           <motion.div
// // // // // //             key="list"
// // // // // //             initial={{ opacity: 0, x: -20 }}
// // // // // //             animate={{ opacity: 1, x: 0 }}
// // // // // //             exit={{ opacity: 0, x: 20 }}
// // // // // //             transition={{ duration: 0.3 }}
// // // // // //             className="bg-white rounded-lg shadow-md p-6"
// // // // // //           >
// // // // // //             {loading ? (
// // // // // //               <div className="flex justify-center items-center h-64">
// // // // // //                 <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
// // // // // //               </div>
// // // // // //             ) : filteredEmployees.length === 0 ? (
// // // // // //               <div className="text-center py-10">
// // // // // //                 <div className="mx-auto text-gray-300 mb-4">
// // // // // //                   <User size={48} />
// // // // // //                 </div>
// // // // // //                 <h3 className="text-xl font-medium text-gray-700">No employees found</h3>
// // // // // //                 <p className="text-gray-500 mt-2">Add new employees or try a different search term</p>
// // // // // //               </div>
// // // // // //             ) : (
// // // // // //               <motion.div
// // // // // //                 variants={containerVariants}
// // // // // //                 initial="hidden"
// // // // // //                 animate="visible"
// // // // // //                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
// // // // // //               >
// // // // // //                 {filteredEmployees.map((employee) => (
// // // // // //                   <motion.div
// // // // // //                     key={employee._id}
// // // // // //                     variants={itemVariants}
// // // // // //                     whileHover={{
// // // // // //                       scale: 1.03,
// // // // // //                       boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
// // // // // //                     }}
// // // // // //                     whileTap={{ scale: 0.98 }}
// // // // // //                     onClick={() => setSelectedEmployee(employee)}
// // // // // //                     className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl shadow-lg text-white cursor-pointer h-64 flex flex-col justify-center items-center relative overflow-hidden group"
// // // // // //                   >
// // // // // //                     <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
// // // // // //                     <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
// // // // // //                       <button
// // // // // //                         onClick={(e) => {
// // // // // //                           e.stopPropagation();
// // // // // //                           handleEditEmployee(employee);
// // // // // //                         }}
// // // // // //                         className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition duration-200 mr-2"
// // // // // //                       >
// // // // // //                         <Edit size={16} />
// // // // // //                       </button>
// // // // // //                       <button
// // // // // //                         onClick={(e) => {
// // // // // //                           e.stopPropagation();
// // // // // //                           handleDeleteEmployee(employee._id);
// // // // // //                         }}
// // // // // //                         className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-200"
// // // // // //                       >
// // // // // //                         <Trash size={16} />
// // // // // //                       </button>
// // // // // //                     </div>
// // // // // //                     <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-white opacity-5 rounded-full"></div>
// // // // // //                     <div className="absolute -top-10 -left-10 h-40 w-40 bg-white opacity-5 rounded-full"></div>
// // // // // //                     <img
// // // // // //                       src={
// // // // // //                         employee.image
// // // // // //                           ? `http://localhost:5004/uploads/${employee.image}`
// // // // // //                           : `http://localhost:5004/uploads/em.jpg`
// // // // // //                       }
// // // // // //                       alt={`${employee.name}'s profile`}
// // // // // //                       className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-xl object-cover"
// // // // // //                     />
// // // // // //                     <h3 className="text-xl font-bold text-center">{employee.name}</h3>
// // // // // //                     <p className="text-sm text-center text-indigo-100">Role: {employee.role || "N/A"}</p>
// // // // // //                     <p className="text-sm text-center text-indigo-100">ID: {employee.employeeId}</p>
// // // // // //                   </motion.div>
// // // // // //                 ))}
// // // // // //               </motion.div>
// // // // // //             )}
// // // // // //           </motion.div>
// // // // // //         ) : (
// // // // // //           <motion.div
// // // // // //             key="analytics"
// // // // // //             initial={{ opacity: 0, x: 20 }}
// // // // // //             animate={{ opacity: 1, x: 0 }}
// // // // // //             exit={{ opacity: 0, x: -20 }}
// // // // // //             transition={{ duration: 0.3 }}
// // // // // //           >
// // // // // //             {/* Analytics Dashboard */}
// // // // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // // // //               <motion.div
// // // // // //                 variants={fadeIn}
// // // // // //                 initial="hidden"
// // // // // //                 animate="visible"
// // // // // //                 className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500"
// // // // // //               >
// // // // // //                 <div className="flex justify-between items-center">
// // // // // //                   <div>
// // // // // //                     <p className="text-sm text-gray-500">Total Employees</p>
// // // // // //                     <h3 className="text-2xl font-bold text-gray-800">{employees.length}</h3>
// // // // // //                   </div>
// // // // // //                   <div className="p-3 bg-indigo-100 rounded-lg">
// // // // // //                     <User size={24} className="text-indigo-600" />
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </motion.div>

// // // // // //               <motion.div
// // // // // //                 variants={fadeIn}
// // // // // //                 initial="hidden"
// // // // // //                 animate="visible"
// // // // // //                 transition={{ delay: 0.1 }}
// // // // // //                 className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500"
// // // // // //               >
// // // // // //                 <div className="flex justify-between items-center">
// // // // // //                   <div>
// // // // // //                     <p className="text-sm text-gray-500">Average Salary</p>
// // // // // //                     <h3 className="text-2xl font-bold text-gray-800">
// // // // // //                       ${(employees.reduce((sum, emp) => sum + (Number(emp.salary) || 0), 0) / (employees.length || 1)).toFixed(2)}
// // // // // //                     </h3>
// // // // // //                   </div>
// // // // // //                   <div className="p-3 bg-green-100 rounded-lg">
// // // // // //                     <DollarSign size={24} className="text-green-600" />
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </motion.div>

// // // // // //               <motion.div
// // // // // //                 variants={fadeIn}
// // // // // //                 initial="hidden"
// // // // // //                 animate="visible"
// // // // // //                 transition={{ delay: 0.2 }}
// // // // // //                 className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500"
// // // // // //               >
// // // // // //                 <div className="flex justify-between items-center">
// // // // // //                   <div>
// // // // // //                     <p className="text-sm text-gray-500">New Hires (3 months)</p>
// // // // // //                     <h3 className="text-2xl font-bold text-gray-800">
// // // // // //                       {employees.filter((emp) => {
// // // // // //                         if (!emp.dateOfJoining) return false;
// // // // // //                         const joinDate = new Date(emp.dateOfJoining);
// // // // // //                         const threeMonthsAgo = new Date();
// // // // // //                         threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
// // // // // //                         return joinDate >= threeMonthsAgo;
// // // // // //                       }).length}
// // // // // //                     </h3>
// // // // // //                   </div>
// // // // // //                   <div className="p-3 bg-blue-100 rounded-lg">
// // // // // //                     <Calendar size={24} className="text-blue-600" />
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </motion.div>
// // // // // //             </div>

// // // // // //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // // // // //               {/* Role Distribution Chart */}
// // // // // //               <motion.div
// // // // // //                 variants={fadeIn}
// // // // // //                 initial="hidden"
// // // // // //                 animate="visible"
// // // // // //                 transition={{ delay: 0.3 }}
// // // // // //                 className="bg-white rounded-lg shadow-md p-6"
// // // // // //               >
// // // // // //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Role Distribution</h3>
// // // // // //                 {Object.keys(employees.reduce((acc, emp) => {
// // // // // //                   const role = emp.role || "Unspecified";
// // // // // //                   acc[role] = (acc[role] || 0) + 1;
// // // // // //                   return acc;
// // // // // //                 }, {})).length > 0 ? (
// // // // // //                   <ResponsiveContainer width="100%" height={300}>
// // // // // //                     <PieChart>
// // // // // //                       <Pie
// // // // // //                         data={Object.entries(employees.reduce((acc, emp) => {
// // // // // //                           const role = emp.role || "Unspecified";
// // // // // //                           acc[role] = (acc[role] || 0) + 1;
// // // // // //                           return acc;
// // // // // //                         }, {})).map(([name, value]) => ({ name, value }))}
// // // // // //                         cx="50%"
// // // // // //                         cy="50%"
// // // // // //                         labelLine={false}
// // // // // //                         outerRadius={100}
// // // // // //                         fill="#8884d8"
// // // // // //                         dataKey="value"
// // // // // //                         label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
// // // // // //                       >
// // // // // //                         {Object.entries(employees.reduce((acc, emp) => {
// // // // // //                           const role = emp.role || "Unspecified";
// // // // // //                           acc[role] = (acc[role] || 0) + 1;
// // // // // //                           return acc;
// // // // // //                         }, {})).map(([name, value], index) => (
// // // // // //                           <Cell key={`cell-${index}`} fill={["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899"][index % 6]} />
// // // // // //                         ))}
// // // // // //                       </Pie>
// // // // // //                       <Tooltip />
// // // // // //                       <Legend />
// // // // // //                     </PieChart>
// // // // // //                   </ResponsiveContainer>
// // // // // //                 ) : (
// // // // // //                   <div className="flex justify-center items-center h-64">
// // // // // //                     <p className="text-gray-500">No role data available</p>
// // // // // //                   </div>
// // // // // //                 )}
// // // // // //               </motion.div>

// // // // // //               {/* Top Salary Chart */}
// // // // // //               <motion.div
// // // // // //                 variants={fadeIn}
// // // // // //                 initial="hidden"
// // // // // //                 animate="visible"
// // // // // //                 transition={{ delay: 0.4 }}
// // // // // //                 className="bg-white rounded-lg shadow-md p-6"
// // // // // //               >
// // // // // //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Top 5 Salaries</h3>
// // // // // //                 {employees
// // // // // //                   .filter((emp) => emp.salary)
// // // // // //                   .map((emp) => ({
// // // // // //                     name: emp.name.length > 10 ? emp.name.substring(0, 10) + "..." : emp.name,
// // // // // //                     salary: Number(emp.salary) || 0,
// // // // // //                   }))
// // // // // //                   .sort((a, b) => b.salary - a.salary)
// // // // // //                   .slice(0, 5).length > 0 ? (
// // // // // //                   <ResponsiveContainer width="100%" height={300}>
// // // // // //                     <BarChart
// // // // // //                       data={employees
// // // // // //                         .filter((emp) => emp.salary)
// // // // // //                         .map((emp) => ({
// // // // // //                           name: emp.name.length > 10 ? emp.name.substring(0, 10) + "..." : emp.name,
// // // // // //                           salary: Number(emp.salary) || 0,
// // // // // //                         }))
// // // // // //                         .sort((a, b) => b.salary - a.salary)
// // // // // //                         .slice(0, 5)
// // // // // //                       }
// // // // // //                     >
// // // // // //                       <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
// // // // // //                       <XAxis dataKey="name" />
// // // // // //                       <YAxis />
// // // // // //                       <Tooltip formatter={(value) => [`$${value}`, "Salary"]} />
// // // // // //                       <Bar dataKey="salary" fill="#4F46E5" barSize={40} radius={[4, 4, 0, 0]} />
// // // // // //                     </BarChart>
// // // // // //                   </ResponsiveContainer>
// // // // // //                 ) : (
// // // // // //                   <div className="flex justify-center items-center h-64">
// // // // // //                     <p className="text-gray-500">No salary data available</p>
// // // // // //                   </div>
// // // // // //                 )}
// // // // // //               </motion.div>

// // // // // //               {/* Experience Chart */}
// // // // // //               <motion.div
// // // // // //                 variants={fadeIn}
// // // // // //                 initial="hidden"
// // // // // //                 animate="visible"
// // // // // //                 transition={{ delay: 0.5 }}
// // // // // //                 className="bg-white rounded-lg shadow-md p-6 col-span-1 lg:col-span-2"
// // // // // //               >
// // // // // //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Experience Overview</h3>
// // // // // //                 {employees
// // // // // //                   .filter((emp) => emp.experience)
// // // // // //                   .map((emp) => ({
// // // // // //                     name: emp.name.length > 10 ? emp.name.substring(0, 10) + "..." : emp.name,
// // // // // //                     years: Number(emp.experience.replace(/[^0-9.]/g, "")) || 0,
// // // // // //                   }))
// // // // // //                   .sort((a, b) => b.years - a.years)
// // // // // //                   .slice(0, 5).length > 0 ? (
// // // // // //                   <ResponsiveContainer width="100%" height={300}>
// // // // // //                     <LineChart
// // // // // //                       data={employees
// // // // // //                         .filter((emp) => emp.experience)
// // // // // //                         .map((emp) => ({
// // // // // //                           name: emp.name.length > 10 ? emp.name.substring(0, 10) + "..." : emp.name,
// // // // // //                           years: Number(emp.experience.replace(/[^0-9.]/g, "")) || 0,
// // // // // //                         }))
// // // // // //                         .sort((a, b) => b.years - a.years)
// // // // // //                         .slice(0, 5)
// // // // // //                       }
// // // // // //                     >
// // // // // //                       <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
// // // // // //                       <XAxis dataKey="name" />
// // // // // //                       <YAxis />
// // // // // //                       <Tooltip formatter={(value) => [`${value} years`, "Experience"]} />
// // // // // //                       <Line
// // // // // //                         type="monotone"
// // // // // //                         dataKey="years"
// // // // // //                         stroke="#10B981"
// // // // // //                         strokeWidth={3}
// // // // // //                         dot={{ r: 6, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }}
// // // // // //                         activeDot={{ r: 8, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }}
// // // // // //                       />
// // // // // //                     </LineChart>
// // // // // //                   </ResponsiveContainer>
// // // // // //                 ) : (
// // // // // //                   <div className="flex justify-center items-center h-64">
// // // // // //                     <p className="text-gray-500">No experience data available</p>
// // // // // //                   </div>
// // // // // //                 )}
// // // // // //               </motion.div>
// // // // // //             </div>
// // // // // //           </motion.div>
// // // // // //         )}
// // // // // //       </AnimatePresence>

// // // // // //       {/* Employee Detail Modal */}
// // // // // //       <AnimatePresence>
// // // // // //         {selectedEmployee && (
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0 }}
// // // // // //             animate={{ opacity: 1 }}
// // // // // //             exit={{ opacity: 0 }}
// // // // // //             className="fixed inset-0 flex justify-center items-center z-50"
// // // // // //           >
// // // // // //             <div className="bg-white rounded-lg shadow-2xl p-8 max-w-3xl w-full z-50">
// // // // // //               <img
// // // // // //                 src={
// // // // // //                   selectedEmployee.image
// // // // // //                     ? `http://localhost:5004/uploads/${selectedEmployee.image}`
// // // // // //                     : `http://localhost:5004/uploads/em.jpg`
// // // // // //                 }
// // // // // //                 alt={`${selectedEmployee.name}'s profile`}
// // // // // //                 className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500"
// // // // // //               />
// // // // // //               <h3 className="text-2xl font-bold text-center mb-4">{selectedEmployee.name}</h3>
// // // // // //               <div className="grid grid-cols-2 gap-4">
// // // // // //                 {Object.entries(selectedEmployee).map(([key, value]) => (
// // // // // //                   key !== "image" && (
// // // // // //                     <>
// // // // // //                       <div className="font-semibold text-right">{key.charAt(0).toUpperCase() + key.slice(1)}:</div>
// // // // // //                       <div>{value}</div>
// // // // // //                     </>
// // // // // //                   )
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //               <button
// // // // // //                 onClick={() => setSelectedEmployee(null)}
// // // // // //                 className="bg-red-500 text-white px-6 py-2 rounded-lg mt-6 hover:bg-red-600 transition duration-200 flex items-center gap-2 mx-auto"
// // // // // //               >
// // // // // //                 <X size={18} />
// // // // // //                 Close
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </motion.div>
// // // // // //         )}
// // // // // //       </AnimatePresence>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default EmployeeManagement;
// // // // // import React, { useEffect, useState, useContext, useRef } from "react";
// // // // // import axios from "axios";
// // // // // import { StoreContext } from "./StoreContext";
// // // // // import {
// // // // //   User, Briefcase, DollarSign, Clock, Phone, Home,
// // // // //   Calendar, FileText, Edit, Trash, X, Search,
// // // // //   Plus, ChevronDown, Award, Layers, CreditCard, TrendingUp
// // // // // } from "react-feather";
// // // // // import {
// // // // //   BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
// // // // //   PieChart, Pie, Cell, LineChart, Line, CartesianGrid
// // // // // } from "recharts";
// // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // const EmployeeManagement = () => {
// // // // //   const { storeId } = useContext(StoreContext);
// // // // //   const [employees, setEmployees] = useState([]);
// // // // //   const [filteredEmployees, setFilteredEmployees] = useState([]);
// // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // //   const [newEmployee, setNewEmployee] = useState({
// // // // //     name: "",
// // // // //     role: "",
// // // // //     salary: "",
// // // // //     shifts: "",
// // // // //     contact: "",
// // // // //     address: "",
// // // // //     dateOfJoining: "",
// // // // //     employeeId: "",
// // // // //     experience: "",
// // // // //     image: null,
// // // // //     salaryInterval: "monthly",
// // // // //     attendance: [],
// // // // //   });
// // // // //   const [editEmployeeId, setEditEmployeeId] = useState(null);
// // // // //   const [selectedEmployee, setSelectedEmployee] = useState(null);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [activeTab, setActiveTab] = useState("list");
// // // // //   const [showForm, setShowForm] = useState(false);
// // // // //   const [notification, setNotification] = useState({ show: false, message: "", type: "" });
// // // // //   const formRef = useRef(null);

// // // // //   const containerVariants = {
// // // // //     hidden: { opacity: 0 },
// // // // //     visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// // // // //   };

// // // // //   const itemVariants = {
// // // // //     hidden: { y: 20, opacity: 0 },
// // // // //     visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10 } },
// // // // //   };

// // // // //   const fadeIn = {
// // // // //     hidden: { opacity: 0 },
// // // // //     visible: { opacity: 1, transition: { duration: 0.6 } },
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     if (storeId) fetchEmployees();
// // // // //   }, [storeId]);

// // // // //   useEffect(() => {
// // // // //     const filtered = employees.filter(
// // // // //       (employee) =>
// // // // //         employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // //         employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // //         employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
// // // // //     );
// // // // //     setFilteredEmployees(filtered);
// // // // //   }, [searchTerm, employees]);

// // // // //   useEffect(() => {
// // // // //     function handleClickOutside(event) {
// // // // //       if (formRef.current && !formRef.current.contains(event.target) && showForm) {
// // // // //         setShowForm(false);
// // // // //       }
// // // // //     }
// // // // //     document.addEventListener("mousedown", handleClickOutside);
// // // // //     return () => document.removeEventListener("mousedown", handleClickOutside);
// // // // //   }, [showForm]);

// // // // //   const fetchEmployees = async () => {
// // // // //     setLoading(true);
// // // // //     try {
// // // // //       const response = await axios.get("http://localhost:5004/employees", { headers: { storeId } });
// // // // //       setEmployees(response.data);
// // // // //       setFilteredEmployees(response.data);
// // // // //       setLoading(false);
// // // // //     } catch (error) {
// // // // //       console.error("Error fetching employees:", error);
// // // // //       showNotification("Failed to fetch employees", "error");
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const showNotification = (message, type = "success") => {
// // // // //     setNotification({ show: true, message, type });
// // // // //     setTimeout(() => setNotification({ show: false, message: "", type: "" }), 4000);
// // // // //   };

// // // // //   const handleAddEmployee = async () => {
// // // // //     if (!newEmployee.name || !newEmployee.employeeId) {
// // // // //       showNotification("Name and Employee ID are required!", "error");
// // // // //       return;
// // // // //     }
// // // // //     const formData = new FormData();
// // // // //     Object.keys(newEmployee).forEach((key) => formData.append(key, newEmployee[key]));
// // // // //     try {
// // // // //       const response = await axios.post("http://localhost:5004/employees", formData, {
// // // // //         headers: { storeId, "Content-Type": "multipart/form-data" },
// // // // //       });
// // // // //       setEmployees([...employees, response.data]);
// // // // //       resetForm();
// // // // //       showNotification("Employee added successfully!");
// // // // //       setShowForm(false);
// // // // //     } catch (error) {
// // // // //       console.error("Error adding employee:", error);
// // // // //       showNotification("Failed to add employee", "error");
// // // // //     }
// // // // //   };

// // // // //   const handleUpdateEmployee = async () => {
// // // // //     if (!editEmployeeId) return;
// // // // //     const formData = new FormData();
// // // // //     if (newEmployee.image instanceof File) {
// // // // //       formData.append("image", newEmployee.image);
// // // // //     } else {
// // // // //       formData.append("existingImage", newEmployee.image);
// // // // //     }
// // // // //     Object.keys(newEmployee).forEach((key) => {
// // // // //       if (key !== "image" || newEmployee[key] instanceof File) {
// // // // //         formData.append(key, newEmployee[key]);
// // // // //       }
// // // // //     });
// // // // //     try {
// // // // //       await axios.put(`http://localhost:5004/employees/${editEmployeeId}`, formData, {
// // // // //         headers: { storeId, "Content-Type": "multipart/form-data" },
// // // // //       });
// // // // //       showNotification("Employee updated successfully!");
// // // // //       resetForm();
// // // // //       fetchEmployees();
// // // // //       setShowForm(false);
// // // // //     } catch (error) {
// // // // //       console.error("Error updating employee:", error);
// // // // //       showNotification("Failed to update employee", "error");
// // // // //     }
// // // // //   };

// // // // //   const handleDeleteEmployee = async (id) => {
// // // // //     if (!window.confirm("Are you sure you want to delete this employee?")) return;
// // // // //     try {
// // // // //       await axios.delete(`http://localhost:5004/employees/${id}`, { headers: { storeId } });
// // // // //       showNotification("Employee deleted successfully!");
// // // // //       fetchEmployees();
// // // // //       if (selectedEmployee && selectedEmployee._id === id) setSelectedEmployee(null);
// // // // //     } catch (error) {
// // // // //       console.error("Error deleting employee:", error);
// // // // //       showNotification("Failed to delete employee", "error");
// // // // //     }
// // // // //   };

// // // // //   const handleEditEmployee = (employee) => {
// // // // //     setEditEmployeeId(employee._id);
// // // // //     setNewEmployee({
// // // // //       name: employee.name,
// // // // //       role: employee.role,
// // // // //       salary: employee.salary,
// // // // //       shifts: employee.shifts,
// // // // //       contact: employee.contact,
// // // // //       address: employee.address,
// // // // //       dateOfJoining: employee.dateOfJoining,
// // // // //       employeeId: employee.employeeId,
// // // // //       experience: employee.experience,
// // // // //       image: employee.image || null,
// // // // //       salaryInterval: employee.salaryInterval || "monthly",
// // // // //       attendance: employee.attendance || [],
// // // // //     });
// // // // //     setShowForm(true);
// // // // //   };

// // // // //   const resetForm = () => {
// // // // //     setEditEmployeeId(null);
// // // // //     setNewEmployee({
// // // // //       name: "", role: "", salary: "", shifts: "", contact: "", address: "",
// // // // //       dateOfJoining: "", employeeId: "", experience: "", image: null,
// // // // //       salaryInterval: "monthly", attendance: [],
// // // // //     });
// // // // //   };

// // // // //   const calculateSalary = (employee) => {
// // // // //     const { salary, salaryInterval, attendance } = employee;
// // // // //     const baseSalary = parseFloat(salary) || 0;
// // // // //     switch (salaryInterval) {
// // // // //       case "daily": return (baseSalary / 30) * attendance.length;
// // // // //       case "weekly": return (baseSalary / 4) * (attendance.length / 7);
// // // // //       case "monthly": return baseSalary;
// // // // //       default: return baseSalary;
// // // // //     }
// // // // //   };

// // // // //   const renderFormField = (key, icon, placeholder, type = "text") => (
// // // // //     <motion.div variants={itemVariants} className="relative">
// // // // //       <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-500 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
// // // // //         <span className="text-gray-400 mr-2">{icon}</span>
// // // // //         {type === "file" ? (
// // // // //           <input
// // // // //             type="file"
// // // // //             accept="image/*"
// // // // //             onChange={(e) => setNewEmployee({ ...newEmployee, image: e.target.files[0] })}
// // // // //             className="w-full focus:outline-none"
// // // // //           />
// // // // //         ) : (
// // // // //           <input
// // // // //             type={type}
// // // // //             placeholder={placeholder}
// // // // //             value={newEmployee[key] || ""}
// // // // //             onChange={(e) => setNewEmployee({ ...newEmployee, [key]: e.target.value })}
// // // // //             className="w-full focus:outline-none"
// // // // //           />
// // // // //         )}
// // // // //       </div>
// // // // //     </motion.div>
// // // // //   );

// // // // //   return (
// // // // //     <div className="p-6 bg-gray-50 min-h-screen">
// // // // //       <AnimatePresence>
// // // // //         {notification.show && (
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, y: -50 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             exit={{ opacity: 0, y: -50 }}
// // // // //             className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
// // // // //               notification.type === "error" ? "bg-red-500" : "bg-green-500"
// // // // //             } text-white`}
// // // // //           >
// // // // //             {notification.message}
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>

// // // // //       <AnimatePresence>
// // // // //         {selectedEmployee && (
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0 }}
// // // // //             animate={{ opacity: 1 }}
// // // // //             exit={{ opacity: 0 }}
// // // // //             className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
// // // // //             onClick={() => setSelectedEmployee(null)}
// // // // //           />
// // // // //         )}
// // // // //       </AnimatePresence>

// // // // //       <motion.div
// // // // //         initial={{ y: -50, opacity: 0 }}
// // // // //         animate={{ y: 0, opacity: 1 }}
// // // // //         transition={{ duration: 0.5 }}
// // // // //         className="flex justify-between items-center mb-6"
// // // // //       >
// // // // //         <div>
// // // // //           <h1 className="text-3xl font-bold text-gray-800">Employee Management</h1>
// // // // //           <p className="text-gray-500">Manage your workforce efficiently</p>
// // // // //         </div>
// // // // //         <div className="flex gap-3">
// // // // //           <motion.button
// // // // //             whileHover={{ scale: 1.05 }}
// // // // //             whileTap={{ scale: 0.95 }}
// // // // //             onClick={() => { resetForm(); setShowForm(true); }}
// // // // //             className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center gap-2 shadow-md"
// // // // //           >
// // // // //             <Plus size={18} /> Add Employee
// // // // //           </motion.button>
// // // // //         </div>
// // // // //       </motion.div>

// // // // //       <motion.div
// // // // //         initial={{ opacity: 0 }}
// // // // //         animate={{ opacity: 1 }}
// // // // //         transition={{ delay: 0.3 }}
// // // // //         className="flex mb-6 bg-white rounded-lg shadow-md"
// // // // //       >
// // // // //         <button
// // // // //           onClick={() => setActiveTab("list")}
// // // // //           className={`px-6 py-3 flex items-center gap-2 ${
// // // // //             activeTab === "list" ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold" : "text-gray-500 hover:text-gray-700"
// // // // //           } transition-all duration-200`}
// // // // //         >
// // // // //           <Layers size={18} /> Employee List
// // // // //         </button>
// // // // //         <button
// // // // //           onClick={() => setActiveTab("analytics")}
// // // // //           className={`px-6 py-3 flex items-center gap-2 ${
// // // // //             activeTab === "analytics" ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold" : "text-gray-500 hover:text-gray-700"
// // // // //           } transition-all duration-200`}
// // // // //         >
// // // // //           <BarChart size={18} /> Analytics
// // // // //         </button>
// // // // //       </motion.div>

// // // // //       <motion.div
// // // // //         initial={{ opacity: 0, y: 20 }}
// // // // //         animate={{ opacity: 1, y: 0 }}
// // // // //         transition={{ delay: 0.4 }}
// // // // //         className="bg-white rounded-lg shadow-md p-4 mb-6 flex"
// // // // //       >
// // // // //         <div className="relative flex-grow">
// // // // //           <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
// // // // //             <Search size={18} />
// // // // //           </span>
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Search by name, role, or ID..."
// // // // //             value={searchTerm}
// // // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // // //             className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
// // // // //           />
// // // // //         </div>
// // // // //       </motion.div>

// // // // //       <AnimatePresence>
// // // // //         {showForm && (
// // // // //           <motion.div
// // // // //             ref={formRef}
// // // // //             initial={{ opacity: 0, y: 50, scale: 0.9 }}
// // // // //             animate={{ opacity: 1, y: 0, scale: 1 }}
// // // // //             exit={{ opacity: 0, y: 50, scale: 0.9 }}
// // // // //             transition={{ duration: 0.3, type: "spring" }}
// // // // //             className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200 relative z-10"
// // // // //           >
// // // // //             <div className="flex justify-between items-center mb-6">
// // // // //               <h2 className="text-2xl font-semibold text-gray-700">
// // // // //                 {editEmployeeId ? "Edit Employee" : "Add New Employee"}
// // // // //               </h2>
// // // // //               <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
// // // // //                 <X size={20} />
// // // // //               </button>
// // // // //             </div>
// // // // //             <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // //               {renderFormField("name", <User size={20} />, "Full Name")}
// // // // //               {renderFormField("employeeId", <FileText size={20} />, "Employee ID")}
// // // // //               {renderFormField("role", <Briefcase size={20} />, "Role/Position")}
// // // // //               {renderFormField("salary", <DollarSign size={20} />, "Salary", "number")}
// // // // //               {renderFormField("shifts", <Clock size={20} />, "Work Shifts")}
// // // // //               {renderFormField("experience", <Award size={20} />, "Experience (years)")}
// // // // //               {renderFormField("contact", <Phone size={20} />, "Contact Number")}
// // // // //               {renderFormField("address", <Home size={20} />, "Address")}
// // // // //               {renderFormField("dateOfJoining", <Calendar size={20} />, "Date of Joining", "date")}
// // // // //               {renderFormField("salaryInterval", <Clock size={20} />, "Salary Interval", "select")}
// // // // //               <motion.div variants={itemVariants} className="relative">
// // // // //                 <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-500 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
// // // // //                   <User size={20} className="text-gray-400 mr-2" />
// // // // //                   <input
// // // // //                     type="file"
// // // // //                     accept="image/*"
// // // // //                     onChange={(e) => setNewEmployee({ ...newEmployee, image: e.target.files[0] })}
// // // // //                     className="w-full focus:outline-none"
// // // // //                   />
// // // // //                 </div>
// // // // //               </motion.div>
// // // // //             </motion.div>
// // // // //             <motion.div variants={itemVariants} className="flex gap-4 mt-6">
// // // // //               <button
// // // // //                 onClick={editEmployeeId ? handleUpdateEmployee : handleAddEmployee}
// // // // //                 className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center gap-2 shadow-md"
// // // // //               >
// // // // //                 {editEmployeeId ? <Edit size={18} /> : <User size={18} />}
// // // // //                 {editEmployeeId ? "Update Employee" : "Add Employee"}
// // // // //               </button>
// // // // //               {editEmployeeId && (
// // // // //                 <button
// // // // //                   onClick={resetForm}
// // // // //                   className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-200 flex items-center gap-2 shadow-md"
// // // // //                 >
// // // // //                   <X size={18} /> Cancel
// // // // //                 </button>
// // // // //               )}
// // // // //             </motion.div>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>

// // // // //       <AnimatePresence mode="wait">
// // // // //         {activeTab === "list" ? (
// // // // //           <motion.div
// // // // //             key="list"
// // // // //             initial={{ opacity: 0, x: -20 }}
// // // // //             animate={{ opacity: 1, x: 0 }}
// // // // //             exit={{ opacity: 0, x: 20 }}
// // // // //             transition={{ duration: 0.3 }}
// // // // //             className="bg-white rounded-lg shadow-md p-6"
// // // // //           >
// // // // //             {loading ? (
// // // // //               <div className="flex justify-center items-center h-64">
// // // // //                 <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
// // // // //               </div>
// // // // //             ) : filteredEmployees.length === 0 ? (
// // // // //               <div className="text-center py-10">
// // // // //                 <div className="mx-auto text-gray-300 mb-4"><User size={48} /></div>
// // // // //                 <h3 className="text-xl font-medium text-gray-700">No employees found</h3>
// // // // //                 <p className="text-gray-500 mt-2">Add new employees or try a different search term</p>
// // // // //               </div>
// // // // //             ) : (
// // // // //               <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //                 {filteredEmployees.map((employee) => (
// // // // //                   <motion.div
// // // // //                     key={employee._id}
// // // // //                     variants={itemVariants}
// // // // //                     whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
// // // // //                     whileTap={{ scale: 0.98 }}
// // // // //                     onClick={() => setSelectedEmployee(employee)}
// // // // //                     className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl shadow-lg text-white cursor-pointer h-64 flex flex-col justify-center items-center relative overflow-hidden group"
// // // // //                   >
// // // // //                     <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
// // // // //                     <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
// // // // //                       <button
// // // // //                         onClick={(e) => { e.stopPropagation(); handleEditEmployee(employee); }}
// // // // //                         className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition duration-200 mr-2"
// // // // //                       >
// // // // //                         <Edit size={16} />
// // // // //                       </button>
// // // // //                       <button
// // // // //                         onClick={(e) => { e.stopPropagation(); handleDeleteEmployee(employee._id); }}
// // // // //                         className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-200"
// // // // //                       >
// // // // //                         <Trash size={16} />
// // // // //                       </button>
// // // // //                     </div>
// // // // //                     <img
// // // // //                       src={employee.image ? `http://localhost:5004/uploads/${employee.image}` : `http://localhost:5004/uploads/em.jpg`}
// // // // //                       alt={`${employee.name}'s profile`}
// // // // //                       className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-xl object-cover"
// // // // //                     />
// // // // //                     <h3 className="text-xl font-bold text-center">{employee.name}</h3>
// // // // //                     <p className="text-sm text-center text-indigo-100">Role: {employee.role || "N/A"}</p>
// // // // //                     <p className="text-sm text-center text-indigo-100">ID: {employee.employeeId}</p>
// // // // //                   </motion.div>
// // // // //                 ))}
// // // // //               </motion.div>
// // // // //             )}
// // // // //           </motion.div>
// // // // //         ) : (
// // // // //           <motion.div
// // // // //             key="analytics"
// // // // //             initial={{ opacity: 0, x: 20 }}
// // // // //             animate={{ opacity: 1, x: 0 }}
// // // // //             exit={{ opacity: 0, x: -20 }}
// // // // //             transition={{ duration: 0.3 }}
// // // // //           >
// // // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500">
// // // // //                 <div className="flex justify-between items-center">
// // // // //                   <div><p className="text-sm text-gray-500">Total Employees</p><h3 className="text-2xl font-bold text-gray-800">{employees.length}</h3></div>
// // // // //                   <div className="p-3 bg-indigo-100 rounded-lg"><User size={24} className="text-indigo-600" /></div>
// // // // //                 </div>
// // // // //               </motion.div>
// // // // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
// // // // //                 <div className="flex justify-between items-center">
// // // // //                   <div><p className="text-sm text-gray-500">Average Salary</p><h3 className="text-2xl font-bold text-gray-800">${(employees.reduce((sum, emp) => sum + (Number(emp.salary) || 0), 0) / (employees.length || 1)).toFixed(2)}</h3></div>
// // // // //                   <div className="p-3 bg-green-100 rounded-lg"><DollarSign size={24} className="text-green-600" /></div>
// // // // //                 </div>
// // // // //               </motion.div>
// // // // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
// // // // //                 <div className="flex justify-between items-center">
// // // // //                   <div><p className="text-sm text-gray-500">New Hires (3 months)</p><h3 className="text-2xl font-bold text-gray-800">{employees.filter((emp) => {
// // // // //                     if (!emp.dateOfJoining) return false;
// // // // //                     const joinDate = new Date(emp.dateOfJoining);
// // // // //                     const threeMonthsAgo = new Date();
// // // // //                     threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
// // // // //                     return joinDate >= threeMonthsAgo;
// // // // //                   }).length}</h3></div>
// // // // //                   <div className="p-3 bg-blue-100 rounded-lg"><Calendar size={24} className="text-blue-600" /></div>
// // // // //                 </div>
// // // // //               </motion.div>
// // // // //             </div>
// // // // //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // // // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="bg-white rounded-lg shadow-md p-6">
// // // // //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Role Distribution</h3>
// // // // //                 {Object.keys(employees.reduce((acc, emp) => {
// // // // //                   const role = emp.role || "Unspecified";
// // // // //                   acc[role] = (acc[role] || 0) + 1;
// // // // //                   return acc;
// // // // //                 }, {})).length > 0 ? (
// // // // //                   <ResponsiveContainer width="100%" height={300}>
// // // // //                     <PieChart>
// // // // //                       <Pie
// // // // //                         data={Object.entries(employees.reduce((acc, emp) => {
// // // // //                           const role = emp.role || "Unspecified";
// // // // //                           acc[role] = (acc[role] || 0) + 1;
// // // // //                           return acc;
// // // // //                         }, {})).map(([name, value]) => ({ name, value }))}
// // // // //                         cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#8884d8" dataKey="value"
// // // // //                         label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
// // // // //                       >
// // // // //                         {Object.entries(employees.reduce((acc, emp) => {
// // // // //                           const role = emp.role || "Unspecified";
// // // // //                           acc[role] = (acc[role] || 0) + 1;
// // // // //                           return acc;
// // // // //                         }, {})).map((_, index) => (
// // // // //                           <Cell key={`cell-${index}`} fill={["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899"][index % 6]} />
// // // // //                         ))}
// // // // //                       </Pie>
// // // // //                       <Tooltip /><Legend />
// // // // //                     </PieChart>
// // // // //                   </ResponsiveContainer>
// // // // //                 ) : (
// // // // //                   <div className="flex justify-center items-center h-64"><p className="text-gray-500">No role data available</p></div>
// // // // //                 )}
// // // // //               </motion.div>
// // // // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="bg-white rounded-lg shadow-md p-6">
// // // // //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Top 5 Salaries</h3>
// // // // //                 {employees.filter((emp) => emp.salary).length > 0 ? (
// // // // //                   <ResponsiveContainer width="100%" height={300}>
// // // // //                     <BarChart data={employees.filter((emp) => emp.salary).map((emp) => ({
// // // // //                       name: emp.name.length > 10 ? emp.name.substring(0, 10) + "..." : emp.name,
// // // // //                       salary: Number(emp.salary) || 0,
// // // // //                     })).sort((a, b) => b.salary - a.salary).slice(0, 5)}>
// // // // //                       <CartesianGrid strokeDasharray="3 3" opacity={0.3} /><XAxis dataKey="name" /><YAxis />
// // // // //                       <Tooltip formatter={(value) => [`$${value}`, "Salary"]} />
// // // // //                       <Bar dataKey="salary" fill="#4F46E5" barSize={40} radius={[4, 4, 0, 0]} />
// // // // //                     </BarChart>
// // // // //                   </ResponsiveContainer>
// // // // //                 ) : (
// // // // //                   <div className="flex justify-center items-center h-64"><p className="text-gray-500">No salary data available</p></div>
// // // // //                 )}
// // // // //               </motion.div>
// // // // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.5 }} className="bg-white rounded-lg shadow-md p-6 col-span-1 lg:col-span-2">
// // // // //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Experience Overview</h3>
// // // // //                 {employees.filter((emp) => emp.experience).length > 0 ? (
// // // // //                   <ResponsiveContainer width="100%" height={300}>
// // // // //                     <LineChart data={employees.filter((emp) => emp.experience).map((emp) => ({
// // // // //                       name: emp.name.length > 10 ? emp.name.substring(0, 10) + "..." : emp.name,
// // // // //                       years: Number(emp.experience.replace(/[^0-9.]/g, "")) || 0,
// // // // //                     })).sort((a, b) => b.years - a.years).slice(0, 5)}>
// // // // //                       <CartesianGrid strokeDasharray="3 3" opacity={0.3} /><XAxis dataKey="name" /><YAxis />
// // // // //                       <Tooltip formatter={(value) => [`${value} years`, "Experience"]} />
// // // // //                       <Line type="monotone" dataKey="years" stroke="#10B981" strokeWidth={3}
// // // // //                         dot={{ r: 6, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }}
// // // // //                         activeDot={{ r: 8, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }} />
// // // // //                     </LineChart>
// // // // //                   </ResponsiveContainer>
// // // // //                 ) : (
// // // // //                   <div className="flex justify-center items-center h-64"><p className="text-gray-500">No experience data available</p></div>
// // // // //                 )}
// // // // //               </motion.div>
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>

// // // // //       <AnimatePresence>
// // // // //         {selectedEmployee && (
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, scale: 0.95 }}
// // // // //             animate={{ opacity: 1, scale: 1 }}
// // // // //             exit={{ opacity: 0, scale: 0.95 }}
// // // // //             transition={{ duration: 0.2 }}
// // // // //             className="fixed inset-0 flex items-center justify-center z-50 p-4"
// // // // //           >
// // // // //             <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
// // // // //               <div className="sticky top-0 bg-white p-6 border-b border-gray-200">
// // // // //                 <div className="flex justify-between items-center">
// // // // //                   <h3 className="text-2xl font-bold text-gray-800">{selectedEmployee.name}</h3>
// // // // //                   <button
// // // // //                     onClick={() => setSelectedEmployee(null)}
// // // // //                     className="text-gray-500 hover:text-gray-700"
// // // // //                   >
// // // // //                     <X size={24} />
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </div>
// // // // //               <div className="p-6">
// // // // //                 <div className="flex justify-center mb-6">
// // // // //                   <img
// // // // //                     src={
// // // // //                       selectedEmployee.image
// // // // //                         ? `http://localhost:5004/uploads/${selectedEmployee.image}`
// // // // //                         : `http://localhost:5004/uploads/em.jpg`
// // // // //                     }
// // // // //                     alt={`${selectedEmployee.name}'s profile`}
// // // // //                     className="w-32 h-32 rounded-full border-4 border-indigo-500 object-cover"
// // // // //                   />
// // // // //                 </div>
// // // // //                 <div className="grid grid-cols-1 gap-4 text-gray-700">
// // // // //                   {Object.entries(selectedEmployee).map(([key, value]) => (
// // // // //                     key !== "image" && key !== "_id" && key !== "__v" && (
// // // // //                       <div key={key} className="flex border-b border-gray-100 py-2">
// // // // //                         <span className="font-semibold w-1/3 capitalize">
// // // // //                           {key.replace(/([A-Z])/g, ' $1').trim()}:
// // // // //                         </span>
// // // // //                         <span className="w-2/3">
// // // // //                           {Array.isArray(value)
// // // // //                             ? value.length > 0
// // // // //                               ? value.map((item, idx) => (
// // // // //                                   <div key={idx}>
// // // // //                                     {typeof item === 'object'
// // // // //                                       ? JSON.stringify(item)
// // // // //                                       : item}
// // // // //                                   </div>
// // // // //                                 ))
// // // // //                               : "None"
// // // // //                             : value || "N/A"}
// // // // //                         </span>
// // // // //                       </div>
// // // // //                     )
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>
// // // // //               <div className="sticky bottom-0 bg-white p-6 border-t border-gray-200">
// // // // //                 <button
// // // // //                   onClick={() => setSelectedEmployee(null)}
// // // // //                   className="w-full bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center justify-center gap-2"
// // // // //                 >
// // // // //                   <X size={18} /> Close
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default EmployeeManagement;
// // // // import React, { useEffect, useState, useContext, useRef } from "react";
// // // // import axios from "axios";
// // // // import { StoreContext } from "./StoreContext";
// // // // import {
// // // //   User, Briefcase, DollarSign, Clock, Phone, Home,
// // // //   Calendar, FileText, Edit, Trash, X, Search,
// // // //   Plus, ChevronDown, Award, Layers, CreditCard, TrendingUp
// // // // } from "react-feather";
// // // // import {
// // // //   BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
// // // //   PieChart, Pie, Cell, LineChart, Line, CartesianGrid
// // // // } from "recharts";
// // // // import { motion, AnimatePresence } from "framer-motion";

// // // // const EmployeeManagement = () => {
// // // //   const { storeId } = useContext(StoreContext);
// // // //   const [employees, setEmployees] = useState([]);
// // // //   const [filteredEmployees, setFilteredEmployees] = useState([]);
// // // //   const [searchTerm, setSearchTerm] = useState("");
// // // //   const [newEmployee, setNewEmployee] = useState({
// // // //     name: "", role: "", salary: "", shifts: "", contact: "", address: "",
// // // //     dateOfJoining: "", employeeId: "", experience: "", image: null,
// // // //     salaryInterval: "monthly", attendance: [],
// // // //   });
// // // //   const [editEmployeeId, setEditEmployeeId] = useState(null);
// // // //   const [selectedEmployee, setSelectedEmployee] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [activeTab, setActiveTab] = useState("list");
// // // //   const [showForm, setShowForm] = useState(false);
// // // //   const [notification, setNotification] = useState({ show: false, message: "", type: "" });
// // // //   const formRef = useRef(null);

// // // //   const containerVariants = {
// // // //     hidden: { opacity: 0 },
// // // //     visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// // // //   };

// // // //   const itemVariants = {
// // // //     hidden: { y: 20, opacity: 0 },
// // // //     visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10 } },
// // // //   };

// // // //   const fadeIn = {
// // // //     hidden: { opacity: 0 },
// // // //     visible: { opacity: 1, transition: { duration: 0.6 } },
// // // //   };

// // // //   const modalVariants = {
// // // //     hidden: { opacity: 0, scale: 0.8, y: "-50%" },
// // // //     visible: { 
// // // //       opacity: 1, 
// // // //       scale: 1, 
// // // //       y: 0,
// // // //       transition: { 
// // // //         type: "spring", 
// // // //         stiffness: 300, 
// // // //         damping: 25,
// // // //         duration: 0.3 
// // // //       } 
// // // //     },
// // // //     exit: { 
// // // //       opacity: 0, 
// // // //       scale: 0.8, 
// // // //       y: "-50%",
// // // //       transition: { duration: 0.2 } 
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     if (storeId) fetchEmployees();
// // // //   }, [storeId]);

// // // //   useEffect(() => {
// // // //     const filtered = employees.filter(
// // // //       (employee) =>
// // // //         employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //         employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //         employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
// // // //     );
// // // //     setFilteredEmployees(filtered);
// // // //   }, [searchTerm, employees]);

// // // //   useEffect(() => {
// // // //     function handleClickOutside(event) {
// // // //       if (formRef.current && !formRef.current.contains(event.target) && showForm) {
// // // //         setShowForm(false);
// // // //       }
// // // //     }
// // // //     document.addEventListener("mousedown", handleClickOutside);
// // // //     return () => document.removeEventListener("mousedown", handleClickOutside);
// // // //   }, [showForm]);

// // // //   const fetchEmployees = async () => {
// // // //     setLoading(true);
// // // //     try {
// // // //       const response = await axios.get("http://localhost:5004/employees", { headers: { storeId } });
// // // //       setEmployees(response.data);
// // // //       setFilteredEmployees(response.data);
// // // //       setLoading(false);
// // // //     } catch (error) {
// // // //       console.error("Error fetching employees:", error);
// // // //       showNotification("Failed to fetch employees", "error");
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const showNotification = (message, type = "success") => {
// // // //     setNotification({ show: true, message, type });
// // // //     setTimeout(() => setNotification({ show: false, message: "", type: "" }), 4000);
// // // //   };

// // // //   const handleAddEmployee = async () => {
// // // //     if (!newEmployee.name || !newEmployee.employeeId) {
// // // //       showNotification("Name and Employee ID are required!", "error");
// // // //       return;
// // // //     }
// // // //     const formData = new FormData();
// // // //     Object.keys(newEmployee).forEach((key) => formData.append(key, newEmployee[key]));
// // // //     try {
// // // //       const response = await axios.post("http://localhost:5004/employees", formData, {
// // // //         headers: { storeId, "Content-Type": "multipart/form-data" },
// // // //       });
// // // //       setEmployees([...employees, response.data]);
// // // //       resetForm();
// // // //       showNotification("Employee added successfully!");
// // // //       setShowForm(false);
// // // //     } catch (error) {
// // // //       console.error("Error adding employee:", error);
// // // //       showNotification("Failed to add employee", "error");
// // // //     }
// // // //   };

// // // //   const handleUpdateEmployee = async () => {
// // // //     if (!editEmployeeId) return;
// // // //     const formData = new FormData();
// // // //     if (newEmployee.image instanceof File) {
// // // //       formData.append("image", newEmployee.image);
// // // //     } else {
// // // //       formData.append("existingImage", newEmployee.image);
// // // //     }
// // // //     Object.keys(newEmployee).forEach((key) => {
// // // //       if (key !== "image" || newEmployee[key] instanceof File) {
// // // //         formData.append(key, newEmployee[key]);
// // // //       }
// // // //     });
// // // //     try {
// // // //       await axios.put(`http://localhost:5004/employees/${editEmployeeId}`, formData, {
// // // //         headers: { storeId, "Content-Type": "multipart/form-data" },
// // // //       });
// // // //       showNotification("Employee updated successfully!");
// // // //       resetForm();
// // // //       fetchEmployees();
// // // //       setShowForm(false);
// // // //     } catch (error) {
// // // //       console.error("Error updating employee:", error);
// // // //       showNotification("Failed to update employee", "error");
// // // //     }
// // // //   };

// // // //   const handleDeleteEmployee = async (id) => {
// // // //     if (!window.confirm("Are you sure you want to delete this employee?")) return;
// // // //     try {
// // // //       await axios.delete(`http://localhost:5004/employees/${id}`, { headers: { storeId } });
// // // //       showNotification("Employee deleted successfully!");
// // // //       fetchEmployees();
// // // //       if (selectedEmployee && selectedEmployee._id === id) setSelectedEmployee(null);
// // // //     } catch (error) {
// // // //       console.error("Error deleting employee:", error);
// // // //       showNotification("Failed to delete employee", "error");
// // // //     }
// // // //   };

// // // //   const handleEditEmployee = (employee) => {
// // // //     setEditEmployeeId(employee._id);
// // // //     setNewEmployee({
// // // //       name: employee.name, role: employee.role, salary: employee.salary,
// // // //       shifts: employee.shifts, contact: employee.contact, address: employee.address,
// // // //       dateOfJoining: employee.dateOfJoining, employeeId: employee.employeeId,
// // // //       experience: employee.experience, image: employee.image || null,
// // // //       salaryInterval: employee.salaryInterval || "monthly", attendance: employee.attendance || [],
// // // //     });
// // // //     setShowForm(true);
// // // //   };

// // // //   const resetForm = () => {
// // // //     setEditEmployeeId(null);
// // // //     setNewEmployee({
// // // //       name: "", role: "", salary: "", shifts: "", contact: "", address: "",
// // // //       dateOfJoining: "", employeeId: "", experience: "", image: null,
// // // //       salaryInterval: "monthly", attendance: [],
// // // //     });
// // // //   };

// // // //   const calculateSalary = (employee) => {
// // // //     const { salary, salaryInterval, attendance } = employee;
// // // //     const baseSalary = parseFloat(salary) || 0;
// // // //     switch (salaryInterval) {
// // // //       case "daily": return (baseSalary / 30) * attendance.length;
// // // //       case "weekly": return (baseSalary / 4) * (attendance.length / 7);
// // // //       case "monthly": return baseSalary;
// // // //       default: return baseSalary;
// // // //     }
// // // //   };

// // // //   const renderFormField = (key, icon, placeholder, type = "text") => (
// // // //     <motion.div variants={itemVariants} className="relative">
// // // //       <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-500 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
// // // //         <span className="text-gray-400 mr-2">{icon}</span>
// // // //         {type === "file" ? (
// // // //           <input
// // // //             type="file"
// // // //             accept="image/*"
// // // //             onChange={(e) => setNewEmployee({ ...newEmployee, image: e.target.files[0] })}
// // // //             className="w-full focus:outline-none"
// // // //           />
// // // //         ) : (
// // // //           <input
// // // //             type={type}
// // // //             placeholder={placeholder}
// // // //             value={newEmployee[key] || ""}
// // // //             onChange={(e) => setNewEmployee({ ...newEmployee, [key]: e.target.value })}
// // // //             className="w-full focus:outline-none"
// // // //           />
// // // //         )}
// // // //       </div>
// // // //     </motion.div>
// // // //   );

// // // //   return (
// // // //     <div className="p-6 bg-gray-50 min-h-screen">
// // // //       <AnimatePresence>
// // // //         {notification.show && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: -50 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             exit={{ opacity: 0, y: -50 }}
// // // //             className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
// // // //               notification.type === "error" ? "bg-red-500" : "bg-green-500"
// // // //             } text-white`}
// // // //           >
// // // //             {notification.message}
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>

// // // //       <AnimatePresence>
// // // //         {selectedEmployee && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             exit={{ opacity: 0 }}
// // // //             className="fixed inset-0 bg-gray-900 bg-opacity-70 backdrop-blur-sm z-40"
// // // //             style={{
// // // //               backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
// // // //               backgroundSize: 'cover',
// // // //               backgroundPosition: 'center',
// // // //             }}
// // // //           />
// // // //         )}
// // // //       </AnimatePresence>

// // // //       <motion.div
// // // //         initial={{ y: -50, opacity: 0 }}
// // // //         animate={{ y: 0, opacity: 1 }}
// // // //         transition={{ duration: 0.5 }}
// // // //         className="flex justify-between items-center mb-6"
// // // //       >
// // // //         <div>
// // // //           <h1 className="text-3xl font-bold text-gray-800">Employee Management</h1>
// // // //           <p className="text-gray-500">Manage your workforce efficiently</p>
// // // //         </div>
// // // //         <div className="flex gap-3">
// // // //           <motion.button
// // // //             whileHover={{ scale: 1.05 }}
// // // //             whileTap={{ scale: 0.95 }}
// // // //             onClick={() => { resetForm(); setShowForm(true); }}
// // // //             className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center gap-2 shadow-md"
// // // //           >
// // // //             <Plus size={18} /> Add Employee
// // // //           </motion.button>
// // // //         </div>
// // // //       </motion.div>

// // // //       <motion.div
// // // //         initial={{ opacity: 0 }}
// // // //         animate={{ opacity: 1 }}
// // // //         transition={{ delay: 0.3 }}
// // // //         className="flex mb-6 bg-white rounded-lg shadow-md"
// // // //       >
// // // //         <button
// // // //           onClick={() => setActiveTab("list")}
// // // //           className={`px-6 py-3 flex items-center gap-2 ${
// // // //             activeTab === "list" ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold" : "text-gray-500 hover:text-gray-700"
// // // //           } transition-all duration-200`}
// // // //         >
// // // //           <Layers size={18} /> Employee List
// // // //         </button>
// // // //         <button
// // // //           onClick={() => setActiveTab("analytics")}
// // // //           className={`px-6 py-3 flex items-center gap-2 ${
// // // //             activeTab === "analytics" ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold" : "text-gray-500 hover:text-gray-700"
// // // //           } transition-all duration-200`}
// // // //         >
// // // //           <BarChart size={18} /> Analytics
// // // //         </button>
// // // //       </motion.div>

// // // //       <motion.div
// // // //         initial={{ opacity: 0, y: 20 }}
// // // //         animate={{ opacity: 1, y: 0 }}
// // // //         transition={{ delay: 0.4 }}
// // // //         className="bg-white rounded-lg shadow-md p-4 mb-6 flex"
// // // //       >
// // // //         <div className="relative flex-grow">
// // // //           <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
// // // //             <Search size={18} />
// // // //           </span>
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Search by name, role, or ID..."
// // // //             value={searchTerm}
// // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // //             className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
// // // //           />
// // // //         </div>
// // // //       </motion.div>

// // // //       <AnimatePresence>
// // // //         {showForm && (
// // // //           <motion.div
// // // //             ref={formRef}
// // // //             initial={{ opacity: 0, y: 50, scale: 0.9 }}
// // // //             animate={{ opacity: 1, y: 0, scale: 1 }}
// // // //             exit={{ opacity: 0, y: 50, scale: 0.9 }}
// // // //             transition={{ duration: 0.3, type: "spring" }}
// // // //             className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200 relative z-10"
// // // //           >
// // // //             <div className="flex justify-between items-center mb-6">
// // // //               <h2 className="text-2xl font-semibold text-gray-700">
// // // //                 {editEmployeeId ? "Edit Employee" : "Add New Employee"}
// // // //               </h2>
// // // //               <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
// // // //                 <X size={20} />
// // // //               </button>
// // // //             </div>
// // // //             <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //               {renderFormField("name", <User size={20} />, "Full Name")}
// // // //               {renderFormField("employeeId", <FileText size={20} />, "Employee ID")}
// // // //               {renderFormField("role", <Briefcase size={20} />, "Role/Position")}
// // // //               {renderFormField("salary", <DollarSign size={20} />, "Salary", "number")}
// // // //               {renderFormField("shifts", <Clock size={20} />, "Work Shifts")}
// // // //               {renderFormField("experience", <Award size={20} />, "Experience (years)")}
// // // //               {renderFormField("contact", <Phone size={20} />, "Contact Number")}
// // // //               {renderFormField("address", <Home size={20} />, "Address")}
// // // //               {renderFormField("dateOfJoining", <Calendar size={20} />, "Date of Joining", "date")}
// // // //               {renderFormField("salaryInterval", <Clock size={20} />, "Salary Interval", "select")}
// // // //               <motion.div variants={itemVariants} className="relative">
// // // //                 <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-500 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
// // // //                   <User size={20} className="text-gray-400 mr-2" />
// // // //                   <input
// // // //                     type="file"
// // // //                     accept="image/*"
// // // //                     onChange={(e) => setNewEmployee({ ...newEmployee, image: e.target.files[0] })}
// // // //                     className="w-full focus:outline-none"
// // // //                   />
// // // //                 </div>
// // // //               </motion.div>
// // // //             </motion.div>
// // // //             <motion.div variants={itemVariants} className="flex gap-4 mt-6">
// // // //               <button
// // // //                 onClick={editEmployeeId ? handleUpdateEmployee : handleAddEmployee}
// // // //                 className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center gap-2 shadow-md"
// // // //               >
// // // //                 {editEmployeeId ? <Edit size={18} /> : <User size={18} />}
// // // //                 {editEmployeeId ? "Update Employee" : "Add Employee"}
// // // //               </button>
// // // //               {editEmployeeId && (
// // // //                 <button
// // // //                   onClick={resetForm}
// // // //                   className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-200 flex items-center gap-2 shadow-md"
// // // //                 >
// // // //                   <X size={18} /> Cancel
// // // //                 </button>
// // // //               )}
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>

// // // //       <AnimatePresence mode="wait">
// // // //         {activeTab === "list" ? (
// // // //           <motion.div
// // // //             key="list"
// // // //             initial={{ opacity: 0, x: -20 }}
// // // //             animate={{ opacity: 1, x: 0 }}
// // // //             exit={{ opacity: 0, x: 20 }}
// // // //             transition={{ duration: 0.3 }}
// // // //             className="bg-white rounded-lg shadow-md p-6"
// // // //           >
// // // //             {loading ? (
// // // //               <div className="flex justify-center items-center h-64">
// // // //                 <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
// // // //               </div>
// // // //             ) : filteredEmployees.length === 0 ? (
// // // //               <div className="text-center py-10">
// // // //                 <div className="mx-auto text-gray-300 mb-4"><User size={48} /></div>
// // // //                 <h3 className="text-xl font-medium text-gray-700">No employees found</h3>
// // // //                 <p className="text-gray-500 mt-2">Add new employees or try a different search term</p>
// // // //               </div>
// // // //             ) : (
// // // //               <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //                 {filteredEmployees.map((employee) => (
// // // //                   <motion.div
// // // //                     key={employee._id}
// // // //                     variants={itemVariants}
// // // //                     whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
// // // //                     whileTap={{ scale: 0.98 }}
// // // //                     onClick={() => setSelectedEmployee(employee)}
// // // //                     className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl shadow-lg text-white cursor-pointer h-64 flex flex-col justify-center items-center relative overflow-hidden group"
// // // //                   >
// // // //                     <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
// // // //                     <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
// // // //                       <button
// // // //                         onClick={(e) => { e.stopPropagation(); handleEditEmployee(employee); }}
// // // //                         className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition duration-200 mr-2"
// // // //                       >
// // // //                         <Edit size={16} />
// // // //                       </button>
// // // //                       <button
// // // //                         onClick={(e) => { e.stopPropagation(); handleDeleteEmployee(employee._id); }}
// // // //                         className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-200"
// // // //                       >
// // // //                         <Trash size={16} />
// // // //                       </button>
// // // //                     </div>
// // // //                     <img
// // // //                       src={employee.image ? `http://localhost:5004/uploads/${employee.image}` : `http://localhost:5004/uploads/em.jpg`}
// // // //                       alt={`${employee.name}'s profile`}
// // // //                       className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-xl object-cover"
// // // //                     />
// // // //                     <h3 className="text-xl font-bold text-center">{employee.name}</h3>
// // // //                     <p className="text-sm text-center text-indigo-100">Role: {employee.role || "N/A"}</p>
// // // //                     <p className="text-sm text-center text-indigo-100">ID: {employee.employeeId}</p>
// // // //                   </motion.div>
// // // //                 ))}
// // // //               </motion.div>
// // // //             )}
// // // //           </motion.div>
// // // //         ) : (
// // // //           <motion.div
// // // //             key="analytics"
// // // //             initial={{ opacity: 0, x: 20 }}
// // // //             animate={{ opacity: 1, x: 0 }}
// // // //             exit={{ opacity: 0, x: -20 }}
// // // //             transition={{ duration: 0.3 }}
// // // //           >
// // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500">
// // // //                 <div className="flex justify-between items-center">
// // // //                   <div><p className="text-sm text-gray-500">Total Employees</p><h3 className="text-2xl font-bold text-gray-800">{employees.length}</h3></div>
// // // //                   <div className="p-3 bg-indigo-100 rounded-lg"><User size={24} className="text-indigo-600" /></div>
// // // //                 </div>
// // // //               </motion.div>
// // // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
// // // //                 <div className="flex justify-between items-center">
// // // //                   <div><p className="text-sm text-gray-500">Average Salary</p><h3 className="text-2xl font-bold text-gray-800">${(employees.reduce((sum, emp) => sum + (Number(emp.salary) || 0), 0) / (employees.length || 1)).toFixed(2)}</h3></div>
// // // //                   <div className="p-3 bg-green-100 rounded-lg"><DollarSign size={24} className="text-green-600" /></div>
// // // //                 </div>
// // // //               </motion.div>
// // // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
// // // //                 <div className="flex justify-between items-center">
// // // //                   <div><p className="text-sm text-gray-500">New Hires (3 months)</p><h3 className="text-2xl font-bold text-gray-800">{employees.filter((emp) => {
// // // //                     if (!emp.dateOfJoining) return false;
// // // //                     const joinDate = new Date(emp.dateOfJoining);
// // // //                     const threeMonthsAgo = new Date();
// // // //                     threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
// // // //                     return joinDate >= threeMonthsAgo;
// // // //                   }).length}</h3></div>
// // // //                   <div className="p-3 bg-blue-100 rounded-lg"><Calendar size={24} className="text-blue-600" /></div>
// // // //                 </div>
// // // //               </motion.div>
// // // //             </div>
// // // //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="bg-white rounded-lg shadow-md p-6">
// // // //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Role Distribution</h3>
// // // //                 {Object.keys(employees.reduce((acc, emp) => {
// // // //                   const role = emp.role || "Unspecified";
// // // //                   acc[role] = (acc[role] || 0) + 1;
// // // //                   return acc;
// // // //                 }, {})).length > 0 ? (
// // // //                   <ResponsiveContainer width="100%" height={300}>
// // // //                     <PieChart>
// // // //                       <Pie
// // // //                         data={Object.entries(employees.reduce((acc, emp) => {
// // // //                           const role = emp.role || "Unspecified";
// // // //                           acc[role] = (acc[role] || 0) + 1;
// // // //                           return acc;
// // // //                         }, {})).map(([name, value]) => ({ name, value }))}
// // // //                         cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#8884d8" dataKey="value"
// // // //                         label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
// // // //                       >
// // // //                         {Object.entries(employees.reduce((acc, emp) => {
// // // //                           const role = emp.role || "Unspecified";
// // // //                           acc[role] = (acc[role] || 0) + 1;
// // // //                           return acc;
// // // //                         }, {})).map((_, index) => (
// // // //                           <Cell key={`cell-${index}`} fill={["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899"][index % 6]} />
// // // //                         ))}
// // // //                       </Pie>
// // // //                       <Tooltip /><Legend />
// // // //                     </PieChart>
// // // //                   </ResponsiveContainer>
// // // //                 ) : (
// // // //                   <div className="flex justify-center items-center h-64"><p className="text-gray-500">No role data available</p></div>
// // // //                 )}
// // // //               </motion.div>
// // // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="bg-white rounded-lg shadow-md p-6">
// // // //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Top 5 Salaries</h3>
// // // //                 {employees.filter((emp) => emp.salary).length > 0 ? (
// // // //                   <ResponsiveContainer width="100%" height={300}>
// // // //                     <BarChart data={employees.filter((emp) => emp.salary).map((emp) => ({
// // // //                       name: emp.name.length > 10 ? emp.name.substring(0, 10) + "..." : emp.name,
// // // //                       salary: Number(emp.salary) || 0,
// // // //                     })).sort((a, b) => b.salary - a.salary).slice(0, 5)}>
// // // //                       <CartesianGrid strokeDasharray="3 3" opacity={0.3} /><XAxis dataKey="name" /><YAxis />
// // // //                       <Tooltip formatter={(value) => [`$${value}`, "Salary"]} />
// // // //                       <Bar dataKey="salary" fill="#4F46E5" barSize={40} radius={[4, 4, 0, 0]} />
// // // //                     </BarChart>
// // // //                   </ResponsiveContainer>
// // // //                 ) : (
// // // //                   <div className="flex justify-center items-center h-64"><p className="text-gray-500">No salary data available</p></div>
// // // //                 )}
// // // //               </motion.div>
// // // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.5 }} className="bg-white rounded-lg shadow-md p-6 col-span-1 lg:col-span-2">
// // // //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Experience Overview</h3>
// // // //                 {employees.filter((emp) => emp.experience).length > 0 ? (
// // // //                   <ResponsiveContainer width="100%" height={300}>
// // // //                     <LineChart data={employees.filter((emp) => emp.experience).map((emp) => ({
// // // //                       name: emp.name.length > 10 ? emp.name.substring(0, 10) + "..." : emp.name,
// // // //                       years: Number(emp.experience.replace(/[^0-9.]/g, "")) || 0,
// // // //                     })).sort((a, b) => b.years - a.years).slice(0, 5)}>
// // // //                       <CartesianGrid strokeDasharray="3 3" opacity={0.3} /><XAxis dataKey="name" /><YAxis />
// // // //                       <Tooltip formatter={(value) => [`${value} years`, "Experience"]} />
// // // //                       <Line type="monotone" dataKey="years" stroke="#10B981" strokeWidth={3}
// // // //                         dot={{ r: 6, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }}
// // // //                         activeDot={{ r: 8, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }} />
// // // //                     </LineChart>
// // // //                   </ResponsiveContainer>
// // // //                 ) : (
// // // //                   <div className="flex justify-center items-center h-64"><p className="text-gray-500">No experience data available</p></div>
// // // //                 )}
// // // //               </motion.div>
// // // //             </div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>

// // // //       <AnimatePresence>
// // // //         {selectedEmployee && (
// // // //           <motion.div
// // // //             variants={modalVariants}
// // // //             initial="hidden"
// // // //             animate="visible"
// // // //             exit="exit"
// // // //             className="fixed inset-0 flex items-center justify-center z-50 p-6 pointer-events-none"
// // // //           >
// // // //             <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden pointer-events-auto transform-gpu"
// // // //                  style={{ 
// // // //                    background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(245,248,255,1) 100%)',
// // // //                    backdropFilter: 'blur(10px)',
// // // //                    border: '1px solid rgba(255,255,255,0.2)',
// // // //                  }}>
// // // //               {/* Header */}
// // // //               <div className="relative p-6 border-b border-gray-100">
// // // //                 <div className="flex items-center justify-between">
// // // //                   <div className="flex items-center gap-4">
// // // //                     <motion.div
// // // //                       initial={{ scale: 0 }}
// // // //                       animate={{ scale: 1 }}
// // // //                       transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
// // // //                     >
// // // //                       <img
// // // //                         src={
// // // //                           selectedEmployee.image
// // // //                             ? `http://localhost:5004/uploads/${selectedEmployee.image}`
// // // //                             : `http://localhost:5004/uploads/em.jpg`
// // // //                         }
// // // //                         alt={`${selectedEmployee.name}'s profile`}
// // // //                         className="w-16 h-16 rounded-full border-4 border-indigo-500 object-cover shadow-lg"
// // // //                       />
// // // //                     </motion.div>
// // // //                     <div>
// // // //                       <h3 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
// // // //                         {selectedEmployee.name}
// // // //                       </h3>
// // // //                       <p className="text-sm text-gray-500">{selectedEmployee.role || "N/A"}</p>
// // // //                     </div>
// // // //                   </div>
// // // //                   <motion.button
// // // //                     whileHover={{ scale: 1.1, rotate: 90 }}
// // // //                     whileTap={{ scale: 0.9 }}
// // // //                     onClick={() => setSelectedEmployee(null)}
// // // //                     className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
// // // //                   >
// // // //                     <X size={24} />
// // // //                   </motion.button>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Content */}
// // // //               <div className="p-6 overflow-y-auto max-h-[60vh] scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-transparent">
// // // //                 <motion.div 
// // // //                   initial={{ opacity: 0, y: 20 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   transition={{ delay: 0.2 }}
// // // //                   className="space-y-4"
// // // //                 >
// // // //                   {Object.entries(selectedEmployee).map(([key, value]) => (
// // // //                     key !== "image" && key !== "_id" && key !== "__v" && (
// // // //                       <motion.div
// // // //                         key={key}
// // // //                         initial={{ opacity: 0, x: -20 }}
// // // //                         animate={{ opacity: 1, x: 0 }}
// // // //                         transition={{ delay: 0.3 + (Object.keys(selectedEmployee).indexOf(key) * 0.05) }}
// // // //                         className="flex items-start gap-4 p-3 hover:bg-indigo-50 rounded-lg transition-all duration-200 group"
// // // //                       >
// // // //                         <div className="w-1/3">
// // // //                           <span className="font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors capitalize">
// // // //                             {key.replace(/([A-Z])/g, ' $1').trim()}:
// // // //                           </span>
// // // //                         </div>
// // // //                         <div className="w-2/3 text-gray-600">
// // // //                           {Array.isArray(value) ? (
// // // //                             value.length > 0 ? (
// // // //                               <div className="space-y-1">
// // // //                                 {value.map((item, idx) => (
// // // //                                   <div key={idx} className="text-sm bg-gray-100 p-2 rounded-md">
// // // //                                     {typeof item === 'object' ? JSON.stringify(item) : item}
// // // //                                   </div>
// // // //                                 ))}
// // // //                               </div>
// // // //                             ) : (
// // // //                               "None"
// // // //                             )
// // // //                           ) : (
// // // //                             value || "N/A"
// // // //                           )}
// // // //                         </div>
// // // //                       </motion.div>
// // // //                     )
// // // //                   ))}
// // // //                 </motion.div>
// // // //               </div>

// // // //               {/* Footer */}
// // // //               <div className="p-6 border-t border-gray-100 bg-gradient-to-t from-gray-50 to-transparent">
// // // //                 <motion.button
// // // //                   whileHover={{ scale: 1.02 }}
// // // //                   whileTap={{ scale: 0.98 }}
// // // //                   onClick={() => setSelectedEmployee(null)}
// // // //                   className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-blue-600 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
// // // //                 >
// // // //                   <X size={18} /> Close Profile
// // // //                 </motion.button>
// // // //               </div>
// // // //             </div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default EmployeeManagement;
// // // // import React, { useEffect, useState, useContext, useRef } from "react";
// // // // import axios from "axios";
// // // // import { StoreContext } from "./StoreContext";
// // // // import {
// // // //   User, Briefcase, DollarSign, Clock, Phone, Home,
// // // //   Calendar, FileText, Edit, Trash, X, Search,
// // // //   Plus, ChevronDown, Award, Layers, CreditCard, TrendingUp
// // // // } from "react-feather";
// // // // import {
// // // //   BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
// // // //   PieChart, Pie, Cell, LineChart, Line, CartesianGrid
// // // // } from "recharts";
// // // // import { motion, AnimatePresence } from "framer-motion";

// // // // const EmployeeManagement = () => {
// // // //   const { storeId } = useContext(StoreContext);
// // // //   const [employees, setEmployees] = useState([]);
// // // //   const [filteredEmployees, setFilteredEmployees] = useState([]);
// // // //   const [searchTerm, setSearchTerm] = useState("");
// // // //   const [newEmployee, setNewEmployee] = useState({
// // // //     name: "", role: "", salary: "", shifts: "", contact: "", address: "",
// // // //     dateOfJoining: "", employeeId: "", experience: "", image: null,
// // // //     salaryInterval: "monthly", attendance: [],
// // // //   });
// // // //   const [editEmployeeId, setEditEmployeeId] = useState(null);
// // // //   const [selectedEmployee, setSelectedEmployee] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [activeTab, setActiveTab] = useState("list");
// // // //   const [showForm, setShowForm] = useState(false);
// // // //   const [notification, setNotification] = useState({ show: false, message: "", type: "" });
// // // //   const formRef = useRef(null);

// // // //   const containerVariants = {
// // // //     hidden: { opacity: 0 },
// // // //     visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// // // //   };

// // // //   const itemVariants = {
// // // //     hidden: { y: 20, opacity: 0 },
// // // //     visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10 } },
// // // //   };

// // // //   const fadeIn = {
// // // //     hidden: { opacity: 0 },
// // // //     visible: { opacity: 1, transition: { duration: 0.6 } },
// // // //   };

// // // //   const modalVariants = {
// // // //     hidden: { opacity: 0, scale: 0.8, y: "-50%" },
// // // //     visible: { 
// // // //       opacity: 1, 
// // // //       scale: 1, 
// // // //       y: 0,
// // // //       transition: { 
// // // //         type: "spring", 
// // // //         stiffness: 300, 
// // // //         damping: 25,
// // // //         duration: 0.3 
// // // //       } 
// // // //     },
// // // //     exit: { 
// // // //       opacity: 0, 
// // // //       scale: 0.8, 
// // // //       y: "-50%",
// // // //       transition: { duration: 0.2 } 
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     if (storeId) fetchEmployees();
// // // //   }, [storeId]);

// // // //   useEffect(() => {
// // // //     const filtered = employees.filter(
// // // //       (employee) =>
// // // //         employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //         employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //         employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
// // // //     );
// // // //     setFilteredEmployees(filtered);
// // // //   }, [searchTerm, employees]);

// // // //   useEffect(() => {
// // // //     function handleClickOutside(event) {
// // // //       if (formRef.current && !formRef.current.contains(event.target) && showForm) {
// // // //         setShowForm(false);
// // // //       }
// // // //     }
// // // //     document.addEventListener("mousedown", handleClickOutside);
// // // //     return () => document.removeEventListener("mousedown", handleClickOutside);
// // // //   }, [showForm]);

// // // //   const fetchEmployees = async () => {
// // // //     setLoading(true);
// // // //     try {
// // // //       const response = await axios.get("http://localhost:5004/employees", { headers: { storeId } });
// // // //       setEmployees(response.data);
// // // //       setFilteredEmployees(response.data);
// // // //       setLoading(false);
// // // //     } catch (error) {
// // // //       console.error("Error fetching employees:", error);
// // // //       showNotification("Failed to fetch employees", "error");
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const showNotification = (message, type = "success") => {
// // // //     setNotification({ show: true, message, type });
// // // //     setTimeout(() => setNotification({ show: false, message: "", type: "" }), 4000);
// // // //   };

// // // //   const handleAddEmployee = async () => {
// // // //     if (!newEmployee.name || !newEmployee.employeeId) {
// // // //       showNotification("Name and Employee ID are required!", "error");
// // // //       return;
// // // //     }
// // // //     const formData = new FormData();
// // // //     Object.keys(newEmployee).forEach((key) => formData.append(key, newEmployee[key]));
// // // //     try {
// // // //       const response = await axios.post("http://localhost:5004/employees", formData, {
// // // //         headers: { storeId, "Content-Type": "multipart/form-data" },
// // // //       });
// // // //       setEmployees([...employees, response.data]);
// // // //       resetForm();
// // // //       showNotification("Employee added successfully!");
// // // //       setShowForm(false);
// // // //     } catch (error) {
// // // //       console.error("Error adding employee:", error);
// // // //       showNotification("Failed to add employee", "error");
// // // //     }
// // // //   };

// // // //   const handleUpdateEmployee = async () => {
// // // //     if (!editEmployeeId) return;
// // // //     const formData = new FormData();
// // // //     if (newEmployee.image instanceof File) {
// // // //       formData.append("image", newEmployee.image);
// // // //     } else {
// // // //       formData.append("existingImage", newEmployee.image);
// // // //     }
// // // //     Object.keys(newEmployee).forEach((key) => {
// // // //       if (key !== "image" || newEmployee[key] instanceof File) {
// // // //         formData.append(key, newEmployee[key]);
// // // //       }
// // // //     });
// // // //     try {
// // // //       await axios.put(`http://localhost:5004/employees/${editEmployeeId}`, formData, {
// // // //         headers: { storeId, "Content-Type": "multipart/form-data" },
// // // //       });
// // // //       showNotification("Employee updated successfully!");
// // // //       resetForm();
// // // //       fetchEmployees();
// // // //       setShowForm(false);
// // // //     } catch (error) {
// // // //       console.error("Error updating employee:", error);
// // // //       showNotification("Failed to update employee", "error");
// // // //     }
// // // //   };

// // // //   const handleDeleteEmployee = async (id) => {
// // // //     if (!window.confirm("Are you sure you want to delete this employee?")) return;
// // // //     try {
// // // //       await axios.delete(`http://localhost:5004/employees/${id}`, { headers: { storeId } });
// // // //       showNotification("Employee deleted successfully!");
// // // //       fetchEmployees();
// // // //       if (selectedEmployee && selectedEmployee._id === id) setSelectedEmployee(null);
// // // //     } catch (error) {
// // // //       console.error("Error deleting employee:", error);
// // // //       showNotification("Failed to delete employee", "error");
// // // //     }
// // // //   };

// // // //   const handleEditEmployee = (employee) => {
// // // //     setEditEmployeeId(employee._id);
// // // //     setNewEmployee({
// // // //       name: employee.name, role: employee.role, salary: employee.salary,
// // // //       shifts: employee.shifts, contact: employee.contact, address: employee.address,
// // // //       dateOfJoining: employee.dateOfJoining, employeeId: employee.employeeId,
// // // //       experience: employee.experience, image: employee.image || null,
// // // //       salaryInterval: employee.salaryInterval || "monthly", attendance: employee.attendance || [],
// // // //     });
// // // //     setShowForm(true);
// // // //   };

// // // //   const resetForm = () => {
// // // //     setEditEmployeeId(null);
// // // //     setNewEmployee({
// // // //       name: "", role: "", salary: "", shifts: "", contact: "", address: "",
// // // //       dateOfJoining: "", employeeId: "", experience: "", image: null,
// // // //       salaryInterval: "monthly", attendance: [],
// // // //     });
// // // //   };

// // // //   const calculateSalary = (employee) => {
// // // //     const { salary, salaryInterval, attendance } = employee;
// // // //     const baseSalary = parseFloat(salary) || 0;
// // // //     switch (salaryInterval) {
// // // //       case "daily": return (baseSalary / 30) * attendance.length;
// // // //       case "weekly": return (baseSalary / 4) * (attendance.length / 7);
// // // //       case "monthly": return baseSalary;
// // // //       default: return baseSalary;
// // // //     }
// // // //   };

// // // //   const renderFormField = (key, icon, placeholder, type = "text") => (
// // // //     <motion.div variants={itemVariants} className="relative">
// // // //       <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-500 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
// // // //         <span className="text-gray-400 mr-2">{icon}</span>
// // // //         {type === "file" ? (
// // // //           <input
// // // //             type="file"
// // // //             accept="image/*"
// // // //             onChange={(e) => setNewEmployee({ ...newEmployee, image: e.target.files[0] })}
// // // //             className="w-full focus:outline-none"
// // // //           />
// // // //         ) : (
// // // //           <input
// // // //             type={type}
// // // //             placeholder={placeholder}
// // // //             value={newEmployee[key] || ""}
// // // //             onChange={(e) => setNewEmployee({ ...newEmployee, [key]: e.target.value })}
// // // //             className="w-full focus:outline-none"
// // // //           />
// // // //         )}
// // // //       </div>
// // // //     </motion.div>
// // // //   );

// // // //   return (
// // // //     <div className="p-6 bg-gray-50 min-h-screen">
// // // //       <AnimatePresence>
// // // //         {notification.show && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: -50 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             exit={{ opacity: 0, y: -50 }}
// // // //             className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
// // // //               notification.type === "error" ? "bg-red-500" : "bg-green-500"
// // // //             } text-white`}
// // // //           >
// // // //             {notification.message}
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>

// // // //       <AnimatePresence>
// // // //         {selectedEmployee && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             exit={{ opacity: 0 }}
// // // //             className="fixed inset-0 bg-gray-900 bg-opacity-70 backdrop-blur-sm z-40"
// // // //             style={{
// // // //               backgroundImage: `url('https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
// // // //               backgroundSize: 'cover',
// // // //               backgroundPosition: 'center',
// // // //             }}
// // // //           />
// // // //         )}
// // // //       </AnimatePresence>

// // // //       <motion.div
// // // //         initial={{ y: -50, opacity: 0 }}
// // // //         animate={{ y: 0, opacity: 1 }}
// // // //         transition={{ duration: 0.5 }}
// // // //         className="flex justify-between items-center mb-6"
// // // //       >
// // // //         <div>
// // // //           <h1 className="text-3xl font-bold text-gray-800">Employee Management</h1>
// // // //           <p className="text-gray-500">Manage your retail store workforce</p>
// // // //         </div>
// // // //         <div className="flex gap-3">
// // // //           <motion.button
// // // //             whileHover={{ scale: 1.05 }}
// // // //             whileTap={{ scale: 0.95 }}
// // // //             onClick={() => { resetForm(); setShowForm(true); }}
// // // //             className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center gap-2 shadow-md"
// // // //           >
// // // //             <Plus size={18} /> Add Employee
// // // //           </motion.button>
// // // //         </div>
// // // //       </motion.div>

// // // //       <motion.div
// // // //         initial={{ opacity: 0 }}
// // // //         animate={{ opacity: 1 }}
// // // //         transition={{ delay: 0.3 }}
// // // //         className="flex mb-6 bg-white rounded-lg shadow-md"
// // // //       >
// // // //         <button
// // // //           onClick={() => setActiveTab("list")}
// // // //           className={`px-6 py-3 flex items-center gap-2 ${
// // // //             activeTab === "list" ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold" : "text-gray-500 hover:text-gray-700"
// // // //           } transition-all duration-200`}
// // // //         >
// // // //           <Layers size={18} /> Employee List
// // // //         </button>
// // // //         <button
// // // //           onClick={() => setActiveTab("analytics")}
// // // //           className={`px-6 py-3 flex items-center gap-2 ${
// // // //             activeTab === "analytics" ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold" : "text-gray-500 hover:text-gray-700"
// // // //           } transition-all duration-200`}
// // // //         >
// // // //           <BarChart size={18} /> Analytics
// // // //         </button>
// // // //       </motion.div>

// // // //       <motion.div
// // // //         initial={{ opacity: 0, y: 20 }}
// // // //         animate={{ opacity: 1, y: 0 }}
// // // //         transition={{ delay: 0.4 }}
// // // //         className="bg-white rounded-lg shadow-md p-4 mb-6 flex"
// // // //       >
// // // //         <div className="relative flex-grow">
// // // //           <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
// // // //             <Search size={18} />
// // // //           </span>
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Search by name, role, or ID..."
// // // //             value={searchTerm}
// // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // //             className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
// // // //           />
// // // //         </div>
// // // //       </motion.div>

// // // //       <AnimatePresence>
// // // //         {showForm && (
// // // //           <motion.div
// // // //             ref={formRef}
// // // //             initial={{ opacity: 0, y: 50, scale: 0.9 }}
// // // //             animate={{ opacity: 1, y: 0, scale: 1 }}
// // // //             exit={{ opacity: 0, y: 50, scale: 0.9 }}
// // // //             transition={{ duration: 0.3, type: "spring" }}
// // // //             className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200 relative z-10"
// // // //           >
// // // //             <div className="flex justify-between items-center mb-6">
// // // //               <h2 className="text-2xl font-semibold text-gray-700">
// // // //                 {editEmployeeId ? "Edit Employee" : "Add New Employee"}
// // // //               </h2>
// // // //               <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
// // // //                 <X size={20} />
// // // //               </button>
// // // //             </div>
// // // //             <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //               {renderFormField("name", <User size={20} />, "Full Name")}
// // // //               {renderFormField("employeeId", <FileText size={20} />, "Employee ID")}
// // // //               {renderFormField("role", <Briefcase size={20} />, "Role/Position")}
// // // //               {renderFormField("salary", <DollarSign size={20} />, "Salary", "number")}
// // // //               {renderFormField("shifts", <Clock size={20} />, "Work Shifts")}
// // // //               {renderFormField("experience", <Award size={20} />, "Experience (years)")}
// // // //               {renderFormField("contact", <Phone size={20} />, "Contact Number")}
// // // //               {renderFormField("address", <Home size={20} />, "Address")}
// // // //               {renderFormField("dateOfJoining", <Calendar size={20} />, "Date of Joining", "date")}
// // // //               {renderFormField("salaryInterval", <Clock size={20} />, "Salary Interval", "select")}
// // // //               <motion.div variants={itemVariants} className="relative">
// // // //                 <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-500 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
// // // //                   <User size={20} className="text-gray-400 mr-2" />
// // // //                   <input
// // // //                     type="file"
// // // //                     accept="image/*"
// // // //                     onChange={(e) => setNewEmployee({ ...newEmployee, image: e.target.files[0] })}
// // // //                     className="w-full focus:outline-none"
// // // //                   />
// // // //                 </div>
// // // //               </motion.div>
// // // //             </motion.div>
// // // //             <motion.div variants={itemVariants} className="flex gap-4 mt-6">
// // // //               <button
// // // //                 onClick={editEmployeeId ? handleUpdateEmployee : handleAddEmployee}
// // // //                 className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center gap-2 shadow-md"
// // // //               >
// // // //                 {editEmployeeId ? <Edit size={18} /> : <User size={18} />}
// // // //                 {editEmployeeId ? "Update Employee" : "Add Employee"}
// // // //               </button>
// // // //               {editEmployeeId && (
// // // //                 <button
// // // //                   onClick={resetForm}
// // // //                   className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-200 flex items-center gap-2 shadow-md"
// // // //                 >
// // // //                   <X size={18} /> Cancel
// // // //                 </button>
// // // //               )}
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>

// // // //       <AnimatePresence mode="wait">
// // // //         {activeTab === "list" ? (
// // // //           <motion.div
// // // //             key="list"
// // // //             initial={{ opacity: 0, x: -20 }}
// // // //             animate={{ opacity: 1, x: 0 }}
// // // //             exit={{ opacity: 0, x: 20 }}
// // // //             transition={{ duration: 0.3 }}
// // // //             className="bg-white rounded-lg shadow-md p-6"
// // // //           >
// // // //             {loading ? (
// // // //               <div className="flex justify-center items-center h-64">
// // // //                 <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
// // // //               </div>
// // // //             ) : filteredEmployees.length === 0 ? (
// // // //               <div className="text-center py-10">
// // // //                 <div className="mx-auto text-gray-300 mb-4"><User size={48} /></div>
// // // //                 <h3 className="text-xl font-medium text-gray-700">No employees found</h3>
// // // //                 <p className="text-gray-500 mt-2">Add new employees or try a different search term</p>
// // // //               </div>
// // // //             ) : (
// // // //               <motion.div 
// // // //                 variants={containerVariants} 
// // // //                 initial="hidden" 
// // // //                 animate="visible" 
// // // //                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
// // // //               >
// // // //                 {filteredEmployees.map((employee) => (
// // // //                   <motion.div
// // // //                     key={employee._id}
// // // //                     variants={itemVariants}
// // // //                     whileHover={{ 
// // // //                       scale: 1.03, 
// // // //                       boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
// // // //                     }}
// // // //                     whileTap={{ scale: 0.98 }}
// // // //                     onClick={() => setSelectedEmployee(employee)}
// // // //                     className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl shadow-lg text-white cursor-pointer h-64 flex flex-col justify-center items-center relative overflow-hidden group"
// // // //                   >
// // // //                     <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
// // // //                     <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
// // // //                       <button
// // // //                         onClick={(e) => { e.stopPropagation(); handleEditEmployee(employee); }}
// // // //                         className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition duration-200 mr-2"
// // // //                       >
// // // //                         <Edit size={16} />
// // // //                       </button>
// // // //                       <button
// // // //                         onClick={(e) => { e.stopPropagation(); handleDeleteEmployee(employee._id); }}
// // // //                         className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-200"
// // // //                       >
// // // //                         <Trash size={16} />
// // // //                       </button>
// // // //                     </div>
// // // //                     <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-white opacity-5 rounded-full"></div>
// // // //                     <div className="absolute -top-10 -left-10 h-40 w-40 bg-white opacity-5 rounded-full"></div>
// // // //                     <img
// // // //                       src={employee.image ? `http://localhost:5004/uploads/${employee.image}` : `http://localhost:5004/uploads/em.jpg`}
// // // //                       alt={`${employee.name}'s profile`}
// // // //                       className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-xl object-cover"
// // // //                     />
// // // //                     <h3 className="text-xl font-bold text-center">{employee.name}</h3>
// // // //                     <p className="text-sm text-center text-indigo-100">Role: {employee.role || "N/A"}</p>
// // // //                     <p className="text-sm text-center text-indigo-100">ID: {employee.employeeId}</p>
// // // //                   </motion.div>
// // // //                 ))}
// // // //               </motion.div>
// // // //             )}
// // // //           </motion.div>
// // // //         ) : (
// // // //           <motion.div
// // // //             key="analytics"
// // // //             initial={{ opacity: 0, x: 20 }}
// // // //             animate={{ opacity: 1, x: 0 }}
// // // //             exit={{ opacity: 0, x: -20 }}
// // // //             transition={{ duration: 0.3 }}
// // // //           >
// // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500">
// // // //                 <div className="flex justify-between items-center">
// // // //                   <div><p className="text-sm text-gray-500">Total Employees</p><h3 className="text-2xl font-bold text-gray-800">{employees.length}</h3></div>
// // // //                   <div className="p-3 bg-indigo-100 rounded-lg"><User size={24} className="text-indigo-600" /></div>
// // // //                 </div>
// // // //               </motion.div>
// // // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
// // // //                 <div className="flex justify-between items-center">
// // // //                   <div><p className="text-sm text-gray-500">Average Salary</p><h3 className="text-2xl font-bold text-gray-800">${(employees.reduce((sum, emp) => sum + (Number(emp.salary) || 0), 0) / (employees.length || 1)).toFixed(2)}</h3></div>
// // // //                   <div className="p-3 bg-green-100 rounded-lg"><DollarSign size={24} className="text-green-600" /></div>
// // // //                 </div>
// // // //               </motion.div>
// // // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
// // // //                 <div className="flex justify-between items-center">
// // // //                   <div><p className="text-sm text-gray-500">New Hires (3 months)</p><h3 className="text-2xl font-bold text-gray-800">{employees.filter((emp) => {
// // // //                     if (!emp.dateOfJoining) return false;
// // // //                     const joinDate = new Date(emp.dateOfJoining);
// // // //                     const threeMonthsAgo = new Date();
// // // //                     threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
// // // //                     return joinDate >= threeMonthsAgo;
// // // //                   }).length}</h3></div>
// // // //                   <div className="p-3 bg-blue-100 rounded-lg"><Calendar size={24} className="text-blue-600" /></div>
// // // //                 </div>
// // // //               </motion.div>
// // // //             </div>
// // // //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="bg-white rounded-lg shadow-md p-6">
// // // //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Role Distribution</h3>
// // // //                 {Object.keys(employees.reduce((acc, emp) => {
// // // //                   const role = emp.role || "Unspecified";
// // // //                   acc[role] = (acc[role] || 0) + 1;
// // // //                   return acc;
// // // //                 }, {})).length > 0 ? (
// // // //                   <ResponsiveContainer width="100%" height={300}>
// // // //                     <PieChart>
// // // //                       <Pie
// // // //                         data={Object.entries(employees.reduce((acc, emp) => {
// // // //                           const role = emp.role || "Unspecified";
// // // //                           acc[role] = (acc[role] || 0) + 1;
// // // //                           return acc;
// // // //                         }, {})).map(([name, value]) => ({ name, value }))}
// // // //                         cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#8884d8" dataKey="value"
// // // //                         label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
// // // //                       >
// // // //                         {Object.entries(employees.reduce((acc, emp) => {
// // // //                           const role = emp.role || "Unspecified";
// // // //                           acc[role] = (acc[role] || 0) + 1;
// // // //                           return acc;
// // // //                         }, {})).map((_, index) => (
// // // //                           <Cell key={`cell-${index}`} fill={["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899"][index % 6]} />
// // // //                         ))}
// // // //                       </Pie>
// // // //                       <Tooltip /><Legend />
// // // //                     </PieChart>
// // // //                   </ResponsiveContainer>
// // // //                 ) : (
// // // //                   <div className="flex justify-center items-center h-64"><p className="text-gray-500">No role data available</p></div>
// // // //                 )}
// // // //               </motion.div>
// // // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="bg-white rounded-lg shadow-md p-6">
// // // //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Top 5 Salaries</h3>
// // // //                 {employees.filter((emp) => emp.salary).length > 0 ? (
// // // //                   <ResponsiveContainer width="100%" height={300}>
// // // //                     <BarChart data={employees.filter((emp) => emp.salary).map((emp) => ({
// // // //                       name: emp.name.length > 10 ? emp.name.substring(0, 10) + "..." : emp.name,
// // // //                       salary: Number(emp.salary) || 0,
// // // //                     })).sort((a, b) => b.salary - a.salary).slice(0, 5)}>
// // // //                       <CartesianGrid strokeDasharray="3 3" opacity={0.3} /><XAxis dataKey="name" /><YAxis />
// // // //                       <Tooltip formatter={(value) => [`$${value}`, "Salary"]} />
// // // //                       <Bar dataKey="salary" fill="#4F46E5" barSize={40} radius={[4, 4, 0, 0]} />
// // // //                     </BarChart>
// // // //                   </ResponsiveContainer>
// // // //                 ) : (
// // // //                   <div className="flex justify-center items-center h-64"><p className="text-gray-500">No salary data available</p></div>
// // // //                 )}
// // // //               </motion.div>
// // // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.5 }} className="bg-white rounded-lg shadow-md p-6 col-span-1 lg:col-span-2">
// // // //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Experience Overview</h3>
// // // //                 {employees.filter((emp) => emp.experience).length > 0 ? (
// // // //                   <ResponsiveContainer width="100%" height={300}>
// // // //                     <LineChart data={employees.filter((emp) => emp.experience).map((emp) => ({
// // // //                       name: emp.name.length > 10 ? emp.name.substring(0, 10) + "..." : emp.name,
// // // //                       years: Number(emp.experience.replace(/[^0-9.]/g, "")) || 0,
// // // //                     })).sort((a, b) => b.years - a.years).slice(0, 5)}>
// // // //                       <CartesianGrid strokeDasharray="3 3" opacity={0.3} /><XAxis dataKey="name" /><YAxis />
// // // //                       <Tooltip formatter={(value) => [`${value} years`, "Experience"]} />
// // // //                       <Line type="monotone" dataKey="years" stroke="#10B981" strokeWidth={3}
// // // //                         dot={{ r: 6, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }}
// // // //                         activeDot={{ r: 8, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }} />
// // // //                     </LineChart>
// // // //                   </ResponsiveContainer>
// // // //                 ) : (
// // // //                   <div className="flex justify-center items-center h-64"><p className="text-gray-500">No experience data available</p></div>
// // // //                 )}
// // // //               </motion.div>
// // // //             </div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>

// // // //       <AnimatePresence>
// // // //         {selectedEmployee && (
// // // //           <motion.div
// // // //             variants={modalVariants}
// // // //             initial="hidden"
// // // //             animate="visible"
// // // //             exit="exit"
// // // //             className="fixed inset-0 flex items-center justify-center z-50 p-6 pointer-events-none"
// // // //           >
// // // //             <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden pointer-events-auto transform-gpu"
// // // //                  style={{ 
// // // //                    background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(245,248,255,1) 100%)',
// // // //                    backdropFilter: 'blur(10px)',
// // // //                    border: '1px solid rgba(255,255,255,0.2)',
// // // //                  }}>
// // // //               {/* Header */}
// // // //               <div className="relative p-6 border-b border-gray-100">
// // // //                 <div className="flex items-center justify-between">
// // // //                   <div className="flex items-center gap-4">
// // // //                     <motion.div
// // // //                       initial={{ scale: 0 }}
// // // //                       animate={{ scale: 1 }}
// // // //                       transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
// // // //                     >
// // // //                       <img
// // // //                         src={
// // // //                           selectedEmployee.image
// // // //                             ? `http://localhost:5004/uploads/${selectedEmployee.image}`
// // // //                             : `http://localhost:5004/uploads/em.jpg`
// // // //                         }
// // // //                         alt={`${selectedEmployee.name}'s profile`}
// // // //                         className="w-16 h-16 rounded-full border-4 border-indigo-500 object-cover shadow-lg"
// // // //                       />
// // // //                     </motion.div>
// // // //                     <div>
// // // //                       <h3 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
// // // //                         {selectedEmployee.name}
// // // //                       </h3>
// // // //                       <p className="text-sm text-gray-500">{selectedEmployee.role || "N/A"}</p>
// // // //                     </div>
// // // //                   </div>
// // // //                   <motion.button
// // // //                     whileHover={{ scale: 1.1, rotate: 90 }}
// // // //                     whileTap={{ scale: 0.9 }}
// // // //                     onClick={() => setSelectedEmployee(null)}
// // // //                     className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
// // // //                   >
// // // //                     <X size={24} />
// // // //                   </motion.button>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Content */}
// // // //               <div className="p-6 overflow-y-auto max-h-[60vh] scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-transparent">
// // // //                 <motion.div 
// // // //                   initial={{ opacity: 0, y: 20 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   transition={{ delay: 0.2 }}
// // // //                   className="space-y-4"
// // // //                 >
// // // //                   {Object.entries(selectedEmployee).map(([key, value]) => (
// // // //                     key !== "image" && key !== "_id" && key !== "__v" && (
// // // //                       <motion.div
// // // //                         key={key}
// // // //                         initial={{ opacity: 0, x: -20 }}
// // // //                         animate={{ opacity: 1, x: 0 }}
// // // //                         transition={{ delay: 0.3 + (Object.keys(selectedEmployee).indexOf(key) * 0.05) }}
// // // //                         className="flex items-start gap-4 p-3 hover:bg-indigo-50 rounded-lg transition-all duration-200 group"
// // // //                       >
// // // //                         <div className="w-1/3">
// // // //                           <span className="font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors capitalize">
// // // //                             {key.replace(/([A-Z])/g, ' $1').trim()}:
// // // //                           </span>
// // // //                         </div>
// // // //                         <div className="w-2/3 text-gray-600">
// // // //                           {Array.isArray(value) ? (
// // // //                             value.length > 0 ? (
// // // //                               <div className="space-y-1">
// // // //                                 {value.map((item, idx) => (
// // // //                                   <div key={idx} className="text-sm bg-gray-100 p-2 rounded-md">
// // // //                                     {typeof item === 'object' ? JSON.stringify(item) : item}
// // // //                                   </div>
// // // //                                 ))}
// // // //                               </div>
// // // //                             ) : (
// // // //                               "None"
// // // //                             )
// // // //                           ) : (
// // // //                             value || "N/A"
// // // //                           )}
// // // //                         </div>
// // // //                       </motion.div>
// // // //                     )
// // // //                   ))}
// // // //                 </motion.div>
// // // //               </div>

// // // //               {/* Footer */}
// // // //               <div className="p-6 border-t border-gray-100 bg-gradient-to-t from-gray-50 to-transparent">
// // // //                 <motion.button
// // // //                   whileHover={{ scale: 1.02 }}
// // // //                   whileTap={{ scale: 0.98 }}
// // // //                   onClick={() => setSelectedEmployee(null)}
// // // //                   className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-blue-600 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
// // // //                 >
// // // //                   <X size={18} /> Close Profile
// // // //                 </motion.button>
// // // //               </div>
// // // //             </div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default EmployeeManagement;
// // // // import React, { useEffect, useState, useContext, useRef } from "react";
// // // // import axios from "axios";
// // // // import { StoreContext } from "./StoreContext";
// // // // import {
// // // //   User, Briefcase, DollarSign, Clock, Phone, Home,
// // // //   Calendar, FileText, Edit, Trash, X, Search,
// // // //   Plus, ChevronDown, Award, Layers, CreditCard, TrendingUp
// // // // } from "react-feather";
// // // // import {
// // // //   BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
// // // //   PieChart, Pie, Cell, LineChart, Line, CartesianGrid
// // // // } from "recharts";
// // // // import { motion, AnimatePresence } from "framer-motion";

// // // // const EmployeeManagement = () => {
// // // //   const { storeId } = useContext(StoreContext);
// // // //   const [employees, setEmployees] = useState([]);
// // // //   const [filteredEmployees, setFilteredEmployees] = useState([]);
// // // //   const [searchTerm, setSearchTerm] = useState("");
// // // //   const [newEmployee, setNewEmployee] = useState({
// // // //     name: "", role: "", salary: "", shifts: "", contact: "", address: "",
// // // //     dateOfJoining: "", employeeId: "", experience: "", image: null,
// // // //     salaryInterval: "monthly", attendance: [],
// // // //   });
// // // //   const [editEmployeeId, setEditEmployeeId] = useState(null);
// // // //   const [selectedEmployee, setSelectedEmployee] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [activeTab, setActiveTab] = useState("list");
// // // //   const [showForm, setShowForm] = useState(false);
// // // //   const [notification, setNotification] = useState({ show: false, message: "", type: "" });
// // // //   const formRef = useRef(null);

// // // //   const containerVariants = {
// // // //     hidden: { opacity: 0 },
// // // //     visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// // // //   };

// // // //   const itemVariants = {
// // // //     hidden: { y: 20, opacity: 0 },
// // // //     visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10 } },
// // // //   };

// // // //   const fadeIn = {
// // // //     hidden: { opacity: 0 },
// // // //     visible: { opacity: 1, transition: { duration: 0.6 } },
// // // //   };

// // // //   const modalVariants = {
// // // //     hidden: { opacity: 0, scale: 0.8, y: "-50%" },
// // // //     visible: { 
// // // //       opacity: 1, 
// // // //       scale: 1, 
// // // //       y: 0,
// // // //       transition: { 
// // // //         type: "spring", 
// // // //         stiffness: 300, 
// // // //         damping: 25,
// // // //         duration: 0.3 
// // // //       } 
// // // //     },
// // // //     exit: { 
// // // //       opacity: 0, 
// // // //       scale: 0.8, 
// // // //       y: "-50%",
// // // //       transition: { duration: 0.2 } 
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     if (storeId) fetchEmployees();
// // // //   }, [storeId]);

// // // //   useEffect(() => {
// // // //     const filtered = employees.filter(
// // // //       (employee) =>
// // // //         employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //         employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //         employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
// // // //     );
// // // //     setFilteredEmployees(filtered);
// // // //   }, [searchTerm, employees]);

// // // //   useEffect(() => {
// // // //     function handleClickOutside(event) {
// // // //       if (formRef.current && !formRef.current.contains(event.target) && showForm) {
// // // //         setShowForm(false);
// // // //       }
// // // //     }
// // // //     document.addEventListener("mousedown", handleClickOutside);
// // // //     return () => document.removeEventListener("mousedown", handleClickOutside);
// // // //   }, [showForm]);

// // // //   const fetchEmployees = async () => {
// // // //     setLoading(true);
// // // //     try {
// // // //       const response = await axios.get("http://localhost:5004/employees", { headers: { storeId } });
// // // //       setEmployees(response.data);
// // // //       setFilteredEmployees(response.data);
// // // //       setLoading(false);
// // // //     } catch (error) {
// // // //       console.error("Error fetching employees:", error);
// // // //       showNotification("Failed to fetch employees", "error");
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const showNotification = (message, type = "success") => {
// // // //     setNotification({ show: true, message, type });
// // // //     setTimeout(() => setNotification({ show: false, message: "", type: "" }), 4000);
// // // //   };

// // // //   const handleAddEmployee = async () => {
// // // //     if (!newEmployee.name || !newEmployee.employeeId) {
// // // //       showNotification("Name and Employee ID are required!", "error");
// // // //       return;
// // // //     }
// // // //     const formData = new FormData();
// // // //     Object.keys(newEmployee).forEach((key) => formData.append(key, newEmployee[key]));
// // // //     try {
// // // //       const response = await axios.post("http://localhost:5004/employees", formData, {
// // // //         headers: { storeId, "Content-Type": "multipart/form-data" },
// // // //       });
// // // //       setEmployees([...employees, response.data]);
// // // //       resetForm();
// // // //       showNotification("Employee added successfully!");
// // // //       setShowForm(false);
// // // //     } catch (error) {
// // // //       console.error("Error adding employee:", error);
// // // //       showNotification("Failed to add employee", "error");
// // // //     }
// // // //   };

// // // //   const handleUpdateEmployee = async () => {
// // // //     if (!editEmployeeId) return;
// // // //     const formData = new FormData();
// // // //     if (newEmployee.image instanceof File) {
// // // //       formData.append("image", newEmployee.image);
// // // //     } else {
// // // //       formData.append("existingImage", newEmployee.image);
// // // //     }
// // // //     Object.keys(newEmployee).forEach((key) => {
// // // //       if (key !== "image" || newEmployee[key] instanceof File) {
// // // //         formData.append(key, newEmployee[key]);
// // // //       }
// // // //     });
// // // //     try {
// // // //       await axios.put(`http://localhost:5004/employees/${editEmployeeId}`, formData, {
// // // //         headers: { storeId, "Content-Type": "multipart/form-data" },
// // // //       });
// // // //       showNotification("Employee updated successfully!");
// // // //       resetForm();
// // // //       fetchEmployees();
// // // //       setShowForm(false);
// // // //     } catch (error) {
// // // //       console.error("Error updating employee:", error);
// // // //       showNotification("Failed to update employee", "error");
// // // //     }
// // // //   };

// // // //   const handleDeleteEmployee = async (id) => {
// // // //     if (!window.confirm("Are you sure you want to delete this employee?")) return;
// // // //     try {
// // // //       await axios.delete(`http://localhost:5004/employees/${id}`, { headers: { storeId } });
// // // //       showNotification("Employee deleted successfully!");
// // // //       fetchEmployees();
// // // //       if (selectedEmployee && selectedEmployee._id === id) setSelectedEmployee(null);
// // // //     } catch (error) {
// // // //       console.error("Error deleting employee:", error);
// // // //       showNotification("Failed to delete employee", "error");
// // // //     }
// // // //   };

// // // //   const handleEditEmployee = (employee) => {
// // // //     setEditEmployeeId(employee._id);
// // // //     setNewEmployee({
// // // //       name: employee.name, role: employee.role, salary: employee.salary,
// // // //       shifts: employee.shifts, contact: employee.contact, address: employee.address,
// // // //       dateOfJoining: employee.dateOfJoining, employeeId: employee.employeeId,
// // // //       experience: employee.experience, image: employee.image || null,
// // // //       salaryInterval: employee.salaryInterval || "monthly", attendance: employee.attendance || [],
// // // //     });
// // // //     setShowForm(true);
// // // //   };

// // // //   const resetForm = () => {
// // // //     setEditEmployeeId(null);
// // // //     setNewEmployee({
// // // //       name: "", role: "", salary: "", shifts: "", contact: "", address: "",
// // // //       dateOfJoining: "", employeeId: "", experience: "", image: null,
// // // //       salaryInterval: "monthly", attendance: [],
// // // //     });
// // // //   };

// // // //   const calculateSalary = (employee) => {
// // // //     const { salary, salaryInterval, attendance } = employee;
// // // //     const baseSalary = parseFloat(salary) || 0;
// // // //     switch (salaryInterval) {
// // // //       case "daily": return (baseSalary / 30) * attendance.length;
// // // //       case "weekly": return (baseSalary / 4) * (attendance.length / 7);
// // // //       case "monthly": return baseSalary;
// // // //       default: return baseSalary;
// // // //     }
// // // //   };

// // // //   const renderFormField = (key, icon, placeholder, type = "text") => (
// // // //     <motion.div variants={itemVariants} className="relative">
// // // //       <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-500 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
// // // //         <span className="text-gray-400 mr-2">{icon}</span>
// // // //         {type === "file" ? (
// // // //           <input
// // // //             type="file"
// // // //             accept="image/*"
// // // //             onChange={(e) => setNewEmployee({ ...newEmployee, image: e.target.files[0] })}
// // // //             className="w-full focus:outline-none"
// // // //           />
// // // //         ) : (
// // // //           <input
// // // //             type={type}
// // // //             placeholder={placeholder}
// // // //             value={newEmployee[key] || ""}
// // // //             onChange={(e) => setNewEmployee({ ...newEmployee, [key]: e.target.value })}
// // // //             className="w-full focus:outline-none"
// // // //           />
// // // //         )}
// // // //       </div>
// // // //     </motion.div>
// // // //   );

// // // //   return (
// // // //     <div className="p-6 bg-gray-50 min-h-screen">
// // // //       <AnimatePresence>
// // // //         {notification.show && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: -50 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             exit={{ opacity: 0, y: -50 }}
// // // //             className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
// // // //               notification.type === "error" ? "bg-red-500" : "bg-green-500"
// // // //             } text-white`}
// // // //           >
// // // //             {notification.message}
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>

// // // //       {/* <AnimatePresence>
// // // //         {selectedEmployee && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             exit={{ opacity: 0 }}
// // // //             className="fixed inset-0 bg-gray-900 bg-opacity-70 backdrop-blur-sm z-40"
// // // //             style={{
// // // //               backgroundImage: `url('https://images.unsplash.com/photo-1573496359142-b8d8779935e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
// // // //               backgroundSize: 'cover',
// // // //               backgroundPosition: 'center',
// // // //             }}
// // // //           />
// // // //         )}
// // // //       </AnimatePresence> */}
// // // // <AnimatePresence>
// // // //   {selectedEmployee && (
// // // //     <motion.div
// // // //       initial={{ opacity: 0 }}
// // // //       animate={{ opacity: 1 }}
// // // //       exit={{ opacity: 0 }}
// // // //       className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-gray-800 to-blue-900 bg-opacity-90 backdrop-blur-md z-40"
// // // //     />
// // // //   )}
// // // // </AnimatePresence>
// // // //       <motion.div
// // // //         initial={{ y: -50, opacity: 0 }}
// // // //         animate={{ y: 0, opacity: 1 }}
// // // //         transition={{ duration: 0.5 }}
// // // //         className="flex justify-between items-center mb-6"
// // // //       >
// // // //         <div>
// // // //           <h1 className="text-3xl font-bold text-gray-800">Employee Management</h1>
// // // //           <p className="text-gray-500">Manage your retail store workforce</p>
// // // //         </div>
// // // //         <div className="flex gap-3">
// // // //           <motion.button
// // // //             whileHover={{ scale: 1.05 }}
// // // //             whileTap={{ scale: 0.95 }}
// // // //             onClick={() => { resetForm(); setShowForm(true); }}
// // // //             className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center gap-2 shadow-md"
// // // //           >
// // // //             <Plus size={18} /> Add Employee
// // // //           </motion.button>
// // // //         </div>
// // // //       </motion.div>

// // // //       <motion.div
// // // //         initial={{ opacity: 0 }}
// // // //         animate={{ opacity: 1 }}
// // // //         transition={{ delay: 0.3 }}
// // // //         className="flex mb-6 bg-white rounded-lg shadow-md"
// // // //       >
// // // //         <button
// // // //           onClick={() => setActiveTab("list")}
// // // //           className={`px-6 py-3 flex items-center gap-2 ${
// // // //             activeTab === "list" ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold" : "text-gray-500 hover:text-gray-700"
// // // //           } transition-all duration-200`}
// // // //         >
// // // //           <Layers size={18} /> Employee List
// // // //         </button>
// // // //         <button
// // // //           onClick={() => setActiveTab("analytics")}
// // // //           className={`px-6 py-3 flex items-center gap-2 ${
// // // //             activeTab === "analytics" ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold" : "text-gray-500 hover:text-gray-700"
// // // //           } transition-all duration-200`}
// // // //         >
// // // //           <BarChart size={18} /> Analytics
// // // //         </button>
// // // //       </motion.div>

// // // //       <motion.div
// // // //         initial={{ opacity: 0, y: 20 }}
// // // //         animate={{ opacity: 1, y: 0 }}
// // // //         transition={{ delay: 0.4 }}
// // // //         className="bg-white rounded-lg shadow-md p-4 mb-6 flex"
// // // //       >
// // // //         <div className="relative flex-grow">
// // // //           <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
// // // //             <Search size={18} />
// // // //           </span>
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Search by name, role, or ID..."
// // // //             value={searchTerm}
// // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // //             className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
// // // //           />
// // // //         </div>
// // // //       </motion.div>

// // // //       <AnimatePresence>
// // // //         {showForm && (
// // // //           <motion.div
// // // //             ref={formRef}
// // // //             initial={{ opacity: 0, y: 50, scale: 0.9 }}
// // // //             animate={{ opacity: 1, y: 0, scale: 1 }}
// // // //             exit={{ opacity: 0, y: 50, scale: 0.9 }}
// // // //             transition={{ duration: 0.3, type: "spring" }}
// // // //             className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200 relative z-10"
// // // //           >
// // // //             <div className="flex justify-between items-center mb-6">
// // // //               <h2 className="text-2xl font-semibold text-gray-700">
// // // //                 {editEmployeeId ? "Edit Employee" : "Add New Employee"}
// // // //               </h2>
// // // //               <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
// // // //                 <X size={20} />
// // // //               </button>
// // // //             </div>
// // // //             <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //               {renderFormField("name", <User size={20} />, "Full Name")}
// // // //               {renderFormField("employeeId", <FileText size={20} />, "Employee ID")}
// // // //               {renderFormField("role", <Briefcase size={20} />, "Role/Position")}
// // // //               {renderFormField("salary", <DollarSign size={20} />, "Salary", "number")}
// // // //               {renderFormField("shifts", <Clock size={20} />, "Work Shifts")}
// // // //               {renderFormField("experience", <Award size={20} />, "Experience (years)")}
// // // //               {renderFormField("contact", <Phone size={20} />, "Contact Number")}
// // // //               {renderFormField("address", <Home size={20} />, "Address")}
// // // //               {renderFormField("dateOfJoining", <Calendar size={20} />, "Date of Joining", "date")}
// // // //               {renderFormField("salaryInterval", <Clock size={20} />, "Salary Interval", "select")}
// // // //               <motion.div variants={itemVariants} className="relative">
// // // //                 <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-500 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
// // // //                   <User size={20} className="text-gray-400 mr-2" />
// // // //                   <input
// // // //                     type="file"
// // // //                     accept="image/*"
// // // //                     onChange={(e) => setNewEmployee({ ...newEmployee, image: e.target.files[0] })}
// // // //                     className="w-full focus:outline-none"
// // // //                   />
// // // //                 </div>
// // // //               </motion.div>
// // // //             </motion.div>
// // // //             <motion.div variants={itemVariants} className="flex gap-4 mt-6">
// // // //               <button
// // // //                 onClick={editEmployeeId ? handleUpdateEmployee : handleAddEmployee}
// // // //                 className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center gap-2 shadow-md"
// // // //               >
// // // //                 {editEmployeeId ? <Edit size={18} /> : <User size={18} />}
// // // //                 {editEmployeeId ? "Update Employee" : "Add Employee"}
// // // //               </button>
// // // //               {editEmployeeId && (
// // // //                 <button
// // // //                   onClick={resetForm}
// // // //                   className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-200 flex items-center gap-2 shadow-md"
// // // //                 >
// // // //                   <X size={18} /> Cancel
// // // //                 </button>
// // // //               )}
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>

// // // //       <AnimatePresence mode="wait">
// // // //         {activeTab === "list" ? (
// // // //           <motion.div
// // // //             key="list"
// // // //             initial={{ opacity: 0, x: -20 }}
// // // //             animate={{ opacity: 1, x: 0 }}
// // // //             exit={{ opacity: 0, x: 20 }}
// // // //             transition={{ duration: 0.3 }}
// // // //             className="bg-white rounded-lg shadow-md p-6"
// // // //           >
// // // //             {loading ? (
// // // //               <div className="flex justify-center items-center h-64">
// // // //                 <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
// // // //               </div>
// // // //             ) : filteredEmployees.length === 0 ? (
// // // //               <div className="text-center py-10">
// // // //                 <div className="mx-auto text-gray-300 mb-4"><User size={48} /></div>
// // // //                 <h3 className="text-xl font-medium text-gray-700">No employees found</h3>
// // // //                 <p className="text-gray-500 mt-2">Add new employees or try a different search term</p>
// // // //               </div>
// // // //             ) : (
// // // //               <motion.div 
// // // //                 variants={containerVariants} 
// // // //                 initial="hidden" 
// // // //                 animate="visible" 
// // // //                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
// // // //               >
// // // //                 {filteredEmployees.map((employee) => (
// // // //                   <motion.div
// // // //                     key={employee._id}
// // // //                     variants={itemVariants}
// // // //                     whileHover={{ 
// // // //                       scale: 1.03, 
// // // //                       boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
// // // //                     }}
// // // //                     whileTap={{ scale: 0.98 }}
// // // //                     onClick={() => setSelectedEmployee(employee)}
// // // //                     className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl shadow-lg text-white cursor-pointer h-64 flex flex-col justify-center items-center relative overflow-hidden group"
// // // //                   >
// // // //                     <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
// // // //                     <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
// // // //                       <button
// // // //                         onClick={(e) => { e.stopPropagation(); handleEditEmployee(employee); }}
// // // //                         className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition duration-200 mr-2"
// // // //                       >
// // // //                         <Edit size={16} />
// // // //                       </button>
// // // //                       <button
// // // //                         onClick={(e) => { e.stopPropagation(); handleDeleteEmployee(employee._id); }}
// // // //                         className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-200"
// // // //                       >
// // // //                         <Trash size={16} />
// // // //                       </button>
// // // //                     </div>
// // // //                     <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-white opacity-5 rounded-full"></div>
// // // //                     <div className="absolute -top-10 -left-10 h-40 w-40 bg-white opacity-5 rounded-full"></div>
// // // //                     <img
// // // //                       src={employee.image ? `http://localhost:5004/uploads/${employee.image}` : `http://localhost:5004/uploads/em.jpg`}
// // // //                       alt={`${employee.name}'s profile`}
// // // //                       className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-xl object-cover"
// // // //                     />
// // // //                     <h3 className="text-xl font-bold text-center">{employee.name}</h3>
// // // //                     <p className="text-sm text-center text-indigo-100">Role: {employee.role || "N/A"}</p>
// // // //                     <p className="text-sm text-center text-indigo-100">ID: {employee.employeeId}</p>
// // // //                   </motion.div>
// // // //                 ))}
// // // //               </motion.div>
// // // //             )}
// // // //           </motion.div>
// // // //         ) : (
// // // //           <motion.div
// // // //             key="analytics"
// // // //             initial={{ opacity: 0, x: 20 }}
// // // //             animate={{ opacity: 1, x: 0 }}
// // // //             exit={{ opacity: 0, x: -20 }}
// // // //             transition={{ duration: 0.3 }}
// // // //           >
// // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500">
// // // //                 <div className="flex justify-between items-center">
// // // //                   <div><p className="text-sm text-gray-500">Total Employees</p><h3 className="text-2xl font-bold text-gray-800">{employees.length}</h3></div>
// // // //                   <div className="p-3 bg-indigo-100 rounded-lg"><User size={24} className="text-indigo-600" /></div>
// // // //                 </div>
// // // //               </motion.div>
// // // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
// // // //                 <div className="flex justify-between items-center">
// // // //                   <div><p className="text-sm text-gray-500">Average Salary</p><h3 className="text-2xl font-bold text-gray-800">${(employees.reduce((sum, emp) => sum + (Number(emp.salary) || 0), 0) / (employees.length || 1)).toFixed(2)}</h3></div>
// // // //                   <div className="p-3 bg-green-100 rounded-lg"><DollarSign size={24} className="text-green-600" /></div>
// // // //                 </div>
// // // //               </motion.div>
// // // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
// // // //                 <div className="flex justify-between items-center">
// // // //                   <div><p className="text-sm text-gray-500">New Hires (3 months)</p><h3 className="text-2xl font-bold text-gray-800">{employees.filter((emp) => {
// // // //                     if (!emp.dateOfJoining) return false;
// // // //                     const joinDate = new Date(emp.dateOfJoining);
// // // //                     const threeMonthsAgo = new Date();
// // // //                     threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
// // // //                     return joinDate >= threeMonthsAgo;
// // // //                   }).length}</h3></div>
// // // //                   <div className="p-3 bg-blue-100 rounded-lg"><Calendar size={24} className="text-blue-600" /></div>
// // // //                 </div>
// // // //               </motion.div>
// // // //             </div>
// // // //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="bg-white rounded-lg shadow-md p-6">
// // // //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Role Distribution</h3>
// // // //                 {Object.keys(employees.reduce((acc, emp) => {
// // // //                   const role = emp.role || "Unspecified";
// // // //                   acc[role] = (acc[role] || 0) + 1;
// // // //                   return acc;
// // // //                 }, {})).length > 0 ? (
// // // //                   <ResponsiveContainer width="100%" height={300}>
// // // //                     <PieChart>
// // // //                       <Pie
// // // //                         data={Object.entries(employees.reduce((acc, emp) => {
// // // //                           const role = emp.role || "Unspecified";
// // // //                           acc[role] = (acc[role] || 0) + 1;
// // // //                           return acc;
// // // //                         }, {})).map(([name, value]) => ({ name, value }))}
// // // //                         cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#8884d8" dataKey="value"
// // // //                         label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
// // // //                       >
// // // //                         {Object.entries(employees.reduce((acc, emp) => {
// // // //                           const role = emp.role || "Unspecified";
// // // //                           acc[role] = (acc[role] || 0) + 1;
// // // //                           return acc;
// // // //                         }, {})).map((_, index) => (
// // // //                           <Cell key={`cell-${index}`} fill={["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899"][index % 6]} />
// // // //                         ))}
// // // //                       </Pie>
// // // //                       <Tooltip /><Legend />
// // // //                     </PieChart>
// // // //                   </ResponsiveContainer>
// // // //                 ) : (
// // // //                   <div className="flex justify-center items-center h-64"><p className="text-gray-500">No role data available</p></div>
// // // //                 )}
// // // //               </motion.div>
// // // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="bg-white rounded-lg shadow-md p-6">
// // // //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Top 5 Salaries</h3>
// // // //                 {employees.filter((emp) => emp.salary).length > 0 ? (
// // // //                   <ResponsiveContainer width="100%" height={300}>
// // // //                     <BarChart data={employees.filter((emp) => emp.salary).map((emp) => ({
// // // //                       name: emp.name.length > 10 ? emp.name.substring(0, 10) + "..." : emp.name,
// // // //                       salary: Number(emp.salary) || 0,
// // // //                     })).sort((a, b) => b.salary - a.salary).slice(0, 5)}>
// // // //                       <CartesianGrid strokeDasharray="3 3" opacity={0.3} /><XAxis dataKey="name" /><YAxis />
// // // //                       <Tooltip formatter={(value) => [`$${value}`, "Salary"]} />
// // // //                       <Bar dataKey="salary" fill="#4F46E5" barSize={40} radius={[4, 4, 0, 0]} />
// // // //                     </BarChart>
// // // //                   </ResponsiveContainer>
// // // //                 ) : (
// // // //                   <div className="flex justify-center items-center h-64"><p className="text-gray-500">No salary data available</p></div>
// // // //                 )}
// // // //               </motion.div>
// // // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.5 }} className="bg-white rounded-lg shadow-md p-6 col-span-1 lg:col-span-2">
// // // //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Experience Overview</h3>
// // // //                 {employees.filter((emp) => emp.experience).length > 0 ? (
// // // //                   <ResponsiveContainer width="100%" height={300}>
// // // //                     <LineChart data={employees.filter((emp) => emp.experience).map((emp) => ({
// // // //                       name: emp.name.length > 10 ? emp.name.substring(0, 10) + "..." : emp.name,
// // // //                       years: Number(emp.experience.replace(/[^0-9.]/g, "")) || 0,
// // // //                     })).sort((a, b) => b.years - a.years).slice(0, 5)}>
// // // //                       <CartesianGrid strokeDasharray="3 3" opacity={0.3} /><XAxis dataKey="name" /><YAxis />
// // // //                       <Tooltip formatter={(value) => [`${value} years`, "Experience"]} />
// // // //                       <Line type="monotone" dataKey="years" stroke="#10B981" strokeWidth={3}
// // // //                         dot={{ r: 6, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }}
// // // //                         activeDot={{ r: 8, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }} />
// // // //                     </LineChart>
// // // //                   </ResponsiveContainer>
// // // //                 ) : (
// // // //                   <div className="flex justify-center items-center h-64"><p className="text-gray-500">No experience data available</p></div>
// // // //                 )}
// // // //               </motion.div>
// // // //             </div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>

// // // //       <AnimatePresence>
// // // //         {selectedEmployee && (
// // // //           <motion.div
// // // //             variants={modalVariants}
// // // //             initial="hidden"
// // // //             animate="visible"
// // // //             exit="exit"
// // // //             className="fixed inset-0 flex items-center justify-center z-50 p-6 pointer-events-none"
// // // //           >
// // // //             <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden pointer-events-auto transform-gpu"
// // // //                  style={{ 
// // // //                    background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(245,248,255,1) 100%)',
// // // //                    backdropFilter: 'blur(10px)',
// // // //                    border: '1px solid rgba(255,255,255,0.2)',
// // // //                  }}>
// // // //               {/* Header */}
// // // //               <div className="relative p-6 border-b border-gray-100">
// // // //                 <div className="flex items-center justify-between">
// // // //                   <div className="flex items-center gap-4">
// // // //                     <motion.div
// // // //                       initial={{ scale: 0 }}
// // // //                       animate={{ scale: 1 }}
// // // //                       transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
// // // //                     >
// // // //                       <img
// // // //                         src={
// // // //                           selectedEmployee.image
// // // //                             ? `http://localhost:5004/uploads/${selectedEmployee.image}`
// // // //                             : `http://localhost:5004/uploads/em.jpg`
// // // //                         }
// // // //                         alt={`${selectedEmployee.name}'s profile`}
// // // //                         className="w-16 h-16 rounded-full border-4 border-indigo-500 object-cover shadow-lg"
// // // //                       />
// // // //                     </motion.div>
// // // //                     <div>
// // // //                       <h3 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
// // // //                         {selectedEmployee.name}
// // // //                       </h3>
// // // //                       <p className="text-sm text-gray-500">{selectedEmployee.role || "N/A"}</p>
// // // //                     </div>
// // // //                   </div>
// // // //                   <motion.button
// // // //                     whileHover={{ scale: 1.1, rotate: 90 }}
// // // //                     whileTap={{ scale: 0.9 }}
// // // //                     onClick={() => setSelectedEmployee(null)}
// // // //                     className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
// // // //                   >
// // // //                     <X size={24} />
// // // //                   </motion.button>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Content */}
// // // //               <div className="p-6 overflow-y-auto max-h-[60vh] scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-transparent">
// // // //                 <motion.div 
// // // //                   initial={{ opacity: 0, y: 20 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   transition={{ delay: 0.2 }}
// // // //                   className="space-y-4"
// // // //                 >
// // // //                   {Object.entries(selectedEmployee).map(([key, value]) => (
// // // //                     key !== "image" && key !== "_id" && key !== "__v" && (
// // // //                       <motion.div
// // // //                         key={key}
// // // //                         initial={{ opacity: 0, x: -20 }}
// // // //                         animate={{ opacity: 1, x: 0 }}
// // // //                         transition={{ delay: 0.3 + (Object.keys(selectedEmployee).indexOf(key) * 0.05) }}
// // // //                         className="flex items-start gap-4 p-3 hover:bg-indigo-50 rounded-lg transition-all duration-200 group"
// // // //                       >
// // // //                         <div className="w-1/3">
// // // //                           <span className="font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors capitalize">
// // // //                             {key.replace(/([A-Z])/g, ' $1').trim()}:
// // // //                           </span>
// // // //                         </div>
// // // //                         <div className="w-2/3 text-gray-600">
// // // //                           {Array.isArray(value) ? (
// // // //                             value.length > 0 ? (
// // // //                               <div className="space-y-1">
// // // //                                 {value.map((item, idx) => (
// // // //                                   <div key={idx} className="text-sm bg-gray-100 p-2 rounded-md">
// // // //                                     {typeof item === 'object' ? JSON.stringify(item) : item}
// // // //                                   </div>
// // // //                                 ))}
// // // //                               </div>
// // // //                             ) : (
// // // //                               "None"
// // // //                             )
// // // //                           ) : (
// // // //                             value || "N/A"
// // // //                           )}
// // // //                         </div>
// // // //                       </motion.div>
// // // //                     )
// // // //                   ))}
// // // //                 </motion.div>
// // // //               </div>

// // // //               {/* Footer */}
// // // //               <div className="p-6 border-t border-gray-100 bg-gradient-to-t from-gray-50 to-transparent">
// // // //                 <motion.button
// // // //                   whileHover={{ scale: 1.02 }}
// // // //                   whileTap={{ scale: 0.98 }}
// // // //                   onClick={() => setSelectedEmployee(null)}
// // // //                   className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-blue-600 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
// // // //                 >
// // // //                   <X size={18} /> Close Profile
// // // //                 </motion.button>
// // // //               </div>
// // // //             </div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default EmployeeManagement;
// // // import React, { useEffect, useState, useContext, useRef } from "react";
// // // import axios from "axios";
// // // import { StoreContext } from "./StoreContext";
// // // import {
// // //   User, Briefcase, DollarSign, Clock, Phone, Home,
// // //   Calendar, FileText, Edit, Trash, X, Search,
// // //   Plus, ChevronDown, Award, Layers, CreditCard, TrendingUp
// // // } from "react-feather";
// // // import {
// // //   BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
// // //   PieChart, Pie, Cell, LineChart, Line, CartesianGrid
// // // } from "recharts";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // const EmployeeManagement = () => {
// // //   const { storeId } = useContext(StoreContext);
// // //   const [employees, setEmployees] = useState([]);
// // //   const [filteredEmployees, setFilteredEmployees] = useState([]);
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [newEmployee, setNewEmployee] = useState({
// // //     name: "", role: "", salary: "", shifts: "", contact: "", address: "",
// // //     dateOfJoining: "", employeeId: "", experience: "", image: null,
// // //     salaryInterval: "monthly", attendance: [],
// // //   });
// // //   const [editEmployeeId, setEditEmployeeId] = useState(null);
// // //   const [selectedEmployee, setSelectedEmployee] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [activeTab, setActiveTab] = useState("list");
// // //   const [showForm, setShowForm] = useState(false);
// // //   const [notification, setNotification] = useState({ show: false, message: "", type: "" });
// // //   const formRef = useRef(null);

// // //   const containerVariants = {
// // //     hidden: { opacity: 0 },
// // //     visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// // //   };

// // //   const itemVariants = {
// // //     hidden: { y: 20, opacity: 0 },
// // //     visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10 } },
// // //   };

// // //   const fadeIn = {
// // //     hidden: { opacity: 0 },
// // //     visible: { opacity: 1, transition: { duration: 0.6 } },
// // //   };

// // //   const modalVariants = {
// // //     hidden: { opacity: 0, scale: 0.8, y: "-50%" },
// // //     visible: { 
// // //       opacity: 1, 
// // //       scale: 1, 
// // //       y: 0,
// // //       transition: { 
// // //         type: "spring", 
// // //         stiffness: 300, 
// // //         damping: 25,
// // //         duration: 0.3 
// // //       } 
// // //     },
// // //     exit: { 
// // //       opacity: 0, 
// // //       scale: 0.8, 
// // //       y: "-50%",
// // //       transition: { duration: 0.2 } 
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     if (storeId) fetchEmployees();
// // //   }, [storeId]);

// // //   useEffect(() => {
// // //     const filtered = employees.filter(
// // //       (employee) =>
// // //         employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //         employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //         employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
// // //     );
// // //     setFilteredEmployees(filtered);
// // //   }, [searchTerm, employees]);

// // //   useEffect(() => {
// // //     function handleClickOutside(event) {
// // //       if (formRef.current && !formRef.current.contains(event.target) && showForm) {
// // //         setShowForm(false);
// // //       }
// // //     }
// // //     document.addEventListener("mousedown", handleClickOutside);
// // //     return () => document.removeEventListener("mousedown", handleClickOutside);
// // //   }, [showForm]);

// // //   const fetchEmployees = async () => {
// // //     setLoading(true);
// // //     try {
// // //       const response = await axios.get("http://localhost:5004/employees", { headers: { storeId } });
// // //       setEmployees(response.data);
// // //       setFilteredEmployees(response.data);
// // //       setLoading(false);
// // //     } catch (error) {
// // //       console.error("Error fetching employees:", error);
// // //       showNotification("Failed to fetch employees", "error");
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const showNotification = (message, type = "success") => {
// // //     setNotification({ show: true, message, type });
// // //     setTimeout(() => setNotification({ show: false, message: "", type: "" }), 4000);
// // //   };

// // //   const handleAddEmployee = async () => {
// // //     if (!newEmployee.name || !newEmployee.employeeId) {
// // //       showNotification("Name and Employee ID are required!", "error");
// // //       return;
// // //     }
// // //     const formData = new FormData();
// // //     Object.keys(newEmployee).forEach((key) => formData.append(key, newEmployee[key]));
// // //     try {
// // //       const response = await axios.post("http://localhost:5004/employees", formData, {
// // //         headers: { storeId, "Content-Type": "multipart/form-data" },
// // //       });
// // //       setEmployees([...employees, response.data]);
// // //       resetForm();
// // //       showNotification("Employee added successfully!");
// // //       setShowForm(false);
// // //     } catch (error) {
// // //       console.error("Error adding employee:", error);
// // //       showNotification("Failed to add employee", "error");
// // //     }
// // //   };

// // //   const handleUpdateEmployee = async () => {
// // //     if (!editEmployeeId) return;
// // //     const formData = new FormData();
// // //     if (newEmployee.image instanceof File) {
// // //       formData.append("image", newEmployee.image);
// // //     } else {
// // //       formData.append("existingImage", newEmployee.image);
// // //     }
// // //     Object.keys(newEmployee).forEach((key) => {
// // //       if (key !== "image" || newEmployee[key] instanceof File) {
// // //         formData.append(key, newEmployee[key]);
// // //       }
// // //     });
// // //     try {
// // //       await axios.put(`http://localhost:5004/employees/${editEmployeeId}`, formData, {
// // //         headers: { storeId, "Content-Type": "multipart/form-data" },
// // //       });
// // //       showNotification("Employee updated successfully!");
// // //       resetForm();
// // //       fetchEmployees();
// // //       setShowForm(false);
// // //     } catch (error) {
// // //       console.error("Error updating employee:", error);
// // //       showNotification("Failed to update employee", "error");
// // //     }
// // //   };

// // //   const handleDeleteEmployee = async (id) => {
// // //     if (!window.confirm("Are you sure you want to delete this employee?")) return;
// // //     try {
// // //       await axios.delete(`http://localhost:5004/employees/${id}`, { headers: { storeId } });
// // //       showNotification("Employee deleted successfully!");
// // //       fetchEmployees();
// // //       if (selectedEmployee && selectedEmployee._id === id) setSelectedEmployee(null);
// // //     } catch (error) {
// // //       console.error("Error deleting employee:", error);
// // //       showNotification("Failed to delete employee", "error");
// // //     }
// // //   };

// // //   const handleEditEmployee = (employee) => {
// // //     setEditEmployeeId(employee._id);
// // //     setNewEmployee({
// // //       name: employee.name, role: employee.role, salary: employee.salary,
// // //       shifts: employee.shifts, contact: employee.contact, address: employee.address,
// // //       dateOfJoining: employee.dateOfJoining, employeeId: employee.employeeId,
// // //       experience: employee.experience, image: employee.image || null,
// // //       salaryInterval: employee.salaryInterval || "monthly", attendance: employee.attendance || [],
// // //     });
// // //     setShowForm(true);
// // //   };

// // //   const resetForm = () => {
// // //     setEditEmployeeId(null);
// // //     setNewEmployee({
// // //       name: "", role: "", salary: "", shifts: "", contact: "", address: "",
// // //       dateOfJoining: "", employeeId: "", experience: "", image: null,
// // //       salaryInterval: "monthly", attendance: [],
// // //     });
// // //   };

// // //   const calculateSalary = (employee) => {
// // //     const { salary, salaryInterval, attendance } = employee;
// // //     const baseSalary = parseFloat(salary) || 0;
// // //     switch (salaryInterval) {
// // //       case "daily": return (baseSalary / 30) * attendance.length;
// // //       case "weekly": return (baseSalary / 4) * (attendance.length / 7);
// // //       case "monthly": return baseSalary;
// // //       default: return baseSalary;
// // //     }
// // //   };

// // //   const renderFormField = (key, icon, placeholder, type = "text") => (
// // //     <motion.div variants={itemVariants} className="relative">
// // //       <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-500 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
// // //         <span className="text-gray-400 mr-2">{icon}</span>
// // //         {type === "file" ? (
// // //           <input
// // //             type="file"
// // //             accept="image/*"
// // //             onChange={(e) => setNewEmployee({ ...newEmployee, image: e.target.files[0] })}
// // //             className="w-full focus:outline-none"
// // //           />
// // //         ) : (
// // //           <input
// // //             type={type}
// // //             placeholder={placeholder}
// // //             value={newEmployee[key] || ""}
// // //             onChange={(e) => setNewEmployee({ ...newEmployee, [key]: e.target.value })}
// // //             className="w-full focus:outline-none"
// // //           />
// // //         )}
// // //       </div>
// // //     </motion.div>
// // //   );

// // //   return (
// // //     <div className="p-6 bg-gray-50 min-h-screen">
// // //       <AnimatePresence>
// // //         {notification.show && (
// // //           <motion.div
// // //             initial={{ opacity: 0, y: -50 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             exit={{ opacity: 0, y: -50 }}
// // //             className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
// // //               notification.type === "error" ? "bg-red-500" : "bg-green-500"
// // //             } text-white`}
// // //           >
// // //             {notification.message}
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>

// // //       <motion.div
// // //         initial={{ y: -50, opacity: 0 }}
// // //         animate={{ y: 0, opacity: 1 }}
// // //         transition={{ duration: 0.5 }}
// // //         className="flex justify-between items-center mb-6"
// // //       >
// // //         <div>
// // //           <h1 className="text-3xl font-bold text-gray-800">Employee Management</h1>
// // //           <p className="text-gray-500">Manage your retail store workforce</p>
// // //         </div>
// // //         <div className="flex gap-3">
// // //           <motion.button
// // //             whileHover={{ scale: 1.05 }}
// // //             whileTap={{ scale: 0.95 }}
// // //             onClick={() => { resetForm(); setShowForm(true); }}
// // //             className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center gap-2 shadow-md"
// // //           >
// // //             <Plus size={18} /> Add Employee
// // //           </motion.button>
// // //         </div>
// // //       </motion.div>

// // //       <motion.div
// // //         initial={{ opacity: 0 }}
// // //         animate={{ opacity: 1 }}
// // //         transition={{ delay: 0.3 }}
// // //         className="flex mb-6 bg-white rounded-lg shadow-md"
// // //       >
// // //         <button
// // //           onClick={() => setActiveTab("list")}
// // //           className={`px-6 py-3 flex items-center gap-2 ${
// // //             activeTab === "list" ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold" : "text-gray-500 hover:text-gray-700"
// // //           } transition-all duration-200`}
// // //         >
// // //           <Layers size={18} /> Employee List
// // //         </button>
// // //         <button
// // //           onClick={() => setActiveTab("analytics")}
// // //           className={`px-6 py-3 flex items-center gap-2 ${
// // //             activeTab === "analytics" ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold" : "text-gray-500 hover:text-gray-700"
// // //           } transition-all duration-200`}
// // //         >
// // //           <BarChart size={18} /> Analytics
// // //         </button>
// // //       </motion.div>

// // //       <motion.div
// // //         initial={{ opacity: 0, y: 20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ delay: 0.4 }}
// // //         className="bg-white rounded-lg shadow-md p-4 mb-6 flex"
// // //       >
// // //         <div className="relative flex-grow">
// // //           <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
// // //             <Search size={18} />
// // //           </span>
// // //           <input
// // //             type="text"
// // //             placeholder="Search by name, role, or ID..."
// // //             value={searchTerm}
// // //             onChange={(e) => setSearchTerm(e.target.value)}
// // //             className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
// // //           />
// // //         </div>
// // //       </motion.div>

// // //       <AnimatePresence>
// // //         {showForm && (
// // //           <motion.div
// // //             ref={formRef}
// // //             initial={{ opacity: 0, y: 50, scale: 0.9 }}
// // //             animate={{ opacity: 1, y: 0, scale: 1 }}
// // //             exit={{ opacity: 0, y: 50, scale: 0.9 }}
// // //             transition={{ duration: 0.3, type: "spring" }}
// // //             className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200 relative z-10"
// // //           >
// // //             <div className="flex justify-between items-center mb-6">
// // //               <h2 className="text-2xl font-semibold text-gray-700">
// // //                 {editEmployeeId ? "Edit Employee" : "Add New Employee"}
// // //               </h2>
// // //               <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
// // //                 <X size={20} />
// // //               </button>
// // //             </div>
// // //             <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //               {renderFormField("name", <User size={20} />, "Full Name")}
// // //               {renderFormField("employeeId", <FileText size={20} />, "Employee ID")}
// // //               {renderFormField("role", <Briefcase size={20} />, "Role/Position")}
// // //               {renderFormField("salary", <DollarSign size={20} />, "Salary", "number")}
// // //               {renderFormField("shifts", <Clock size={20} />, "Work Shifts")}
// // //               {renderFormField("experience", <Award size={20} />, "Experience (years)")}
// // //               {renderFormField("contact", <Phone size={20} />, "Contact Number")}
// // //               {renderFormField("address", <Home size={20} />, "Address")}
// // //               {renderFormField("dateOfJoining", <Calendar size={20} />, "Date of Joining", "date")}
// // //               {renderFormField("salaryInterval", <Clock size={20} />, "Salary Interval", "select")}
// // //               <motion.div variants={itemVariants} className="relative">
// // //                 <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-500 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
// // //                   <User size={20} className="text-gray-400 mr-2" />
// // //                   <input
// // //                     type="file"
// // //                     accept="image/*"
// // //                     onChange={(e) => setNewEmployee({ ...newEmployee, image: e.target.files[0] })}
// // //                     className="w-full focus:outline-none"
// // //                   />
// // //                 </div>
// // //               </motion.div>
// // //             </motion.div>
// // //             <motion.div variants={itemVariants} className="flex gap-4 mt-6">
// // //               <button
// // //                 onClick={editEmployeeId ? handleUpdateEmployee : handleAddEmployee}
// // //                 className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center gap-2 shadow-md"
// // //               >
// // //                 {editEmployeeId ? <Edit size={18} /> : <User size={18} />}
// // //                 {editEmployeeId ? "Update Employee" : "Add Employee"}
// // //               </button>
// // //               {editEmployeeId && (
// // //                 <button
// // //                   onClick={resetForm}
// // //                   className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-200 flex items-center gap-2 shadow-md"
// // //                 >
// // //                   <X size={18} /> Cancel
// // //                 </button>
// // //               )}
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>

// // //       <AnimatePresence mode="wait">
// // //         {activeTab === "list" ? (
// // //           <motion.div
// // //             key="list"
// // //             initial={{ opacity: 0, x: -20 }}
// // //             animate={{ opacity: 1, x: 0 }}
// // //             exit={{ opacity: 0, x: 20 }}
// // //             transition={{ duration: 0.3 }}
// // //             className="bg-white rounded-lg shadow-md p-6"
// // //           >
// // //             {loading ? (
// // //               <div className="flex justify-center items-center h-64">
// // //                 <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
// // //               </div>
// // //             ) : filteredEmployees.length === 0 ? (
// // //               <div className="text-center py-10">
// // //                 <div className="mx-auto text-gray-300 mb-4"><User size={48} /></div>
// // //                 <h3 className="text-xl font-medium text-gray-700">No employees found</h3>
// // //                 <p className="text-gray-500 mt-2">Add new employees or try a different search term</p>
// // //               </div>
// // //             ) : (
// // //               <motion.div 
// // //                 variants={containerVariants} 
// // //                 initial="hidden" 
// // //                 animate="visible" 
// // //                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
// // //               >
// // //                 {filteredEmployees.map((employee) => (
// // //                   <motion.div
// // //                     key={employee._id}
// // //                     variants={itemVariants}
// // //                     whileHover={{ 
// // //                       scale: 1.03, 
// // //                       boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
// // //                     }}
// // //                     whileTap={{ scale: 0.98 }}
// // //                     onClick={() => setSelectedEmployee(employee)}
// // //                     className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl shadow-lg text-white cursor-pointer h-64 flex flex-col justify-center items-center relative overflow-hidden group"
// // //                   >
// // //                     <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
// // //                     <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
// // //                       <button
// // //                         onClick={(e) => { e.stopPropagation(); handleEditEmployee(employee); }}
// // //                         className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition duration-200 mr-2"
// // //                       >
// // //                         <Edit size={16} />
// // //                       </button>
// // //                       <button
// // //                         onClick={(e) => { e.stopPropagation(); handleDeleteEmployee(employee._id); }}
// // //                         className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-200"
// // //                       >
// // //                         <Trash size={16} />
// // //                       </button>
// // //                     </div>
// // //                     <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-white opacity-5 rounded-full"></div>
// // //                     <div className="absolute -top-10 -left-10 h-40 w-40 bg-white opacity-5 rounded-full"></div>
// // //                     <img
// // //                       src={employee.image ? `http://localhost:5004/uploads/${employee.image}` : `http://localhost:5004/uploads/em.jpg`}
// // //                       alt={`${employee.name}'s profile`}
// // //                       className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-xl object-cover"
// // //                     />
// // //                     <h3 className="text-xl font-bold text-center">{employee.name}</h3>
// // //                     <p className="text-sm text-center text-indigo-100">Role: {employee.role || "N/A"}</p>
// // //                     <p className="text-sm text-center text-indigo-100">ID: {employee.employeeId}</p>
// // //                   </motion.div>
// // //                 ))}
// // //               </motion.div>
// // //             )}
// // //           </motion.div>
// // //         ) : (
// // //           <motion.div
// // //             key="analytics"
// // //             initial={{ opacity: 0, x: 20 }}
// // //             animate={{ opacity: 1, x: 0 }}
// // //             exit={{ opacity: 0, x: -20 }}
// // //             transition={{ duration: 0.3 }}
// // //           >
// // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500">
// // //                 <div className="flex justify-between items-center">
// // //                   <div><p className="text-sm text-gray-500">Total Employees</p><h3 className="text-2xl font-bold text-gray-800">{employees.length}</h3></div>
// // //                   <div className="p-3 bg-indigo-100 rounded-lg"><User size={24} className="text-indigo-600" /></div>
// // //                 </div>
// // //               </motion.div>
// // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
// // //                 <div className="flex justify-between items-center">
// // //                   <div><p className="text-sm text-gray-500">Average Salary</p><h3 className="text-2xl font-bold text-gray-800">${(employees.reduce((sum, emp) => sum + (Number(emp.salary) || 0), 0) / (employees.length || 1)).toFixed(2)}</h3></div>
// // //                   <div className="p-3 bg-green-100 rounded-lg"><DollarSign size={24} className="text-green-600" /></div>
// // //                 </div>
// // //               </motion.div>
// // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
// // //                 <div className="flex justify-between items-center">
// // //                   <div><p className="text-sm text-gray-500">New Hires (3 months)</p><h3 className="text-2xl font-bold text-gray-800">{employees.filter((emp) => {
// // //                     if (!emp.dateOfJoining) return false;
// // //                     const joinDate = new Date(emp.dateOfJoining);
// // //                     const threeMonthsAgo = new Date();
// // //                     threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
// // //                     return joinDate >= threeMonthsAgo;
// // //                   }).length}</h3></div>
// // //                   <div className="p-3 bg-blue-100 rounded-lg"><Calendar size={24} className="text-blue-600" /></div>
// // //                 </div>
// // //               </motion.div>
// // //             </div>
// // //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="bg-white rounded-lg shadow-md p-6">
// // //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Role Distribution</h3>
// // //                 {Object.keys(employees.reduce((acc, emp) => {
// // //                   const role = emp.role || "Unspecified";
// // //                   acc[role] = (acc[role] || 0) + 1;
// // //                   return acc;
// // //                 }, {})).length > 0 ? (
// // //                   <ResponsiveContainer width="100%" height={300}>
// // //                     <PieChart>
// // //                       <Pie
// // //                         data={Object.entries(employees.reduce((acc, emp) => {
// // //                           const role = emp.role || "Unspecified";
// // //                           acc[role] = (acc[role] || 0) + 1;
// // //                           return acc;
// // //                         }, {})).map(([name, value]) => ({ name, value }))}
// // //                         cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#8884d8" dataKey="value"
// // //                         label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
// // //                       >
// // //                         {Object.entries(employees.reduce((acc, emp) => {
// // //                           const role = emp.role || "Unspecified";
// // //                           acc[role] = (acc[role] || 0) + 1;
// // //                           return acc;
// // //                         }, {})).map((_, index) => (
// // //                           <Cell key={`cell-${index}`} fill={["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899"][index % 6]} />
// // //                         ))}
// // //                       </Pie>
// // //                       <Tooltip /><Legend />
// // //                     </PieChart>
// // //                   </ResponsiveContainer>
// // //                 ) : (
// // //                   <div className="flex justify-center items-center h-64"><p className="text-gray-500">No role data available</p></div>
// // //                 )}
// // //               </motion.div>
// // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="bg-white rounded-lg shadow-md p-6">
// // //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Top 5 Salaries</h3>
// // //                 {employees.filter((emp) => emp.salary).length > 0 ? (
// // //                   <ResponsiveContainer width="100%" height={300}>
// // //                     <BarChart data={employees.filter((emp) => emp.salary).map((emp) => ({
// // //                       name: emp.name.length > 10 ? emp.name.substring(0, 10) + "..." : emp.name,
// // //                       salary: Number(emp.salary) || 0,
// // //                     })).sort((a, b) => b.salary - a.salary).slice(0, 5)}>
// // //                       <CartesianGrid strokeDasharray="3 3" opacity={0.3} /><XAxis dataKey="name" /><YAxis />
// // //                       <Tooltip formatter={(value) => [`$${value}`, "Salary"]} />
// // //                       <Bar dataKey="salary" fill="#4F46E5" barSize={40} radius={[4, 4, 0, 0]} />
// // //                     </BarChart>
// // //                   </ResponsiveContainer>
// // //                 ) : (
// // //                   <div className="flex justify-center items-center h-64"><p className="text-gray-500">No salary data available</p></div>
// // //                 )}
// // //               </motion.div>
// // //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.5 }} className="bg-white rounded-lg shadow-md p-6 col-span-1 lg:col-span-2">
// // //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Experience Overview</h3>
// // //                 {employees.filter((emp) => emp.experience).length > 0 ? (
// // //                   <ResponsiveContainer width="100%" height={300}>
// // //                     <LineChart data={employees.filter((emp) => emp.experience).map((emp) => ({
// // //                       name: emp.name.length > 10 ? emp.name.substring(0, 10) + "..." : emp.name,
// // //                       years: Number(emp.experience.replace(/[^0-9.]/g, "")) || 0,
// // //                     })).sort((a, b) => b.years - a.years).slice(0, 5)}>
// // //                       <CartesianGrid strokeDasharray="3 3" opacity={0.3} /><XAxis dataKey="name" /><YAxis />
// // //                       <Tooltip formatter={(value) => [`${value} years`, "Experience"]} />
// // //                       <Line type="monotone" dataKey="years" stroke="#10B981" strokeWidth={3}
// // //                         dot={{ r: 6, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }}
// // //                         activeDot={{ r: 8, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }} />
// // //                     </LineChart>
// // //                   </ResponsiveContainer>
// // //                 ) : (
// // //                   <div className="flex justify-center items-center h-64"><p className="text-gray-500">No experience data available</p></div>
// // //                 )}
// // //               </motion.div>
// // //             </div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>

// // //       <AnimatePresence>
// // //         {selectedEmployee && (
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             className="fixed inset-0 bg-gray-900 bg-opacity-70 backdrop-blur-sm z-40"
// // //           >
// // //             {/* Background Image Layer */}
// // //             <div 
// // //               className="absolute inset-0 bg-cover bg-center bg-no-repeat"
// // //               style={{
// // //                 backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
// // //                 opacity: 0.15,
// // //                 filter: 'grayscale(20%)',
// // //               }}
// // //             />
// // //             {/* Fallback Gradient Layer */}
// // //             <div 
// // //               className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-gray-800/50 to-blue-900/50"
// // //             />

// // //             <motion.div
// // //               variants={modalVariants}
// // //               initial="hidden"
// // //               animate="visible"
// // //               exit="exit"
// // //               className="fixed inset-0 flex items-center justify-center z-50 p-6 pointer-events-none"
// // //             >
// // //               <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden pointer-events-auto transform-gpu relative"
// // //                 style={{ 
// // //                   background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(245,248,255,0.95) 100%)',
// // //                   backdropFilter: 'blur(10px)',
// // //                   border: '1px solid rgba(255,255,255,0.2)',
// // //                 }}>
// // //                 {/* Header */}
// // //                 <div className="relative p-6 border-b border-gray-100">
// // //                   <div className="flex items-center justify-between">
// // //                     <div className="flex items-center gap-4">
// // //                       <motion.div
// // //                         initial={{ scale: 0 }}
// // //                         animate={{ scale: 1 }}
// // //                         transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
// // //                       >
// // //                         <img
// // //                           src={
// // //                             selectedEmployee.image
// // //                               ? `http://localhost:5004/uploads/${selectedEmployee.image}`
// // //                               : `http://localhost:5004/uploads/em.jpg`
// // //                           }
// // //                           alt={`${selectedEmployee.name}'s profile`}
// // //                           className="w-16 h-16 rounded-full border-4 border-indigo-500 object-cover shadow-lg"
// // //                           onError={(e) => {
// // //                             e.target.src = 'https://via.placeholder.com/150?text=Profile';
// // //                           }}
// // //                         />
// // //                       </motion.div>
// // //                       <div>
// // //                         <h3 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
// // //                           {selectedEmployee.name}
// // //                         </h3>
// // //                         <p className="text-sm text-gray-500">{selectedEmployee.role || "N/A"}</p>
// // //                       </div>
// // //                     </div>
// // //                     <motion.button
// // //                       whileHover={{ scale: 1.1, rotate: 90 }}
// // //                       whileTap={{ scale: 0.9 }}
// // //                       onClick={() => setSelectedEmployee(null)}
// // //                       className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
// // //                     >
// // //                       <X size={24} />
// // //                     </motion.button>
// // //                   </div>
// // //                 </div>

// // //                 {/* Content */}
// // //                 <div className="p-6 overflow-y-auto max-h-[60vh] scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-transparent">
// // //                   <motion.div 
// // //                     initial={{ opacity: 0, y: 20 }}
// // //                     animate={{ opacity: 1, y: 0 }}
// // //                     transition={{ delay: 0.2 }}
// // //                     className="space-y-4"
// // //                   >
// // //                     {Object.entries(selectedEmployee).map(([key, value]) => (
// // //                       key !== "image" && key !== "_id" && key !== "__v" && (
// // //                         <motion.div
// // //                           key={key}
// // //                           initial={{ opacity: 0, x: -20 }}
// // //                           animate={{ opacity: 1, x: 0 }}
// // //                           transition={{ delay: 0.3 + (Object.keys(selectedEmployee).indexOf(key) * 0.05) }}
// // //                           className="flex items-start gap-4 p-3 hover:bg-indigo-50 rounded-lg transition-all duration-200 group"
// // //                         >
// // //                           <div className="w-1/3">
// // //                             <span className="font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors capitalize">
// // //                               {key.replace(/([A-Z])/g, ' $1').trim()}:
// // //                             </span>
// // //                           </div>
// // //                           <div className="w-2/3 text-gray-600">
// // //                             {Array.isArray(value) ? (
// // //                               value.length > 0 ? (
// // //                                 <div className="space-y-1">
// // //                                   {value.map((item, idx) => (
// // //                                     <div key={idx} className="text-sm bg-gray-100 p-2 rounded-md">
// // //                                       {typeof item === 'object' ? JSON.stringify(item) : item}
// // //                                     </div>
// // //                                   ))}
// // //                                 </div>
// // //                               ) : (
// // //                                 "None"
// // //                               )
// // //                             ) : (
// // //                               value || "N/A"
// // //                             )}
// // //                           </div>
// // //                         </motion.div>
// // //                       )
// // //                     ))}
// // //                   </motion.div>
// // //                 </div>

// // //                 {/* Footer */}
// // //                 <div className="p-6 border-t border-gray-100 bg-gradient-to-t from-gray-50 to-transparent">
// // //                   <motion.button
// // //                     whileHover={{ scale: 1.02 }}
// // //                     whileTap={{ scale: 0.98 }}
// // //                     onClick={() => setSelectedEmployee(null)}
// // //                     className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-blue-600 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
// // //                   >
// // //                     <X size={18} /> Close Profile
// // //                   </motion.button>
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </div>
// // //   );
// // // };

// // // export default EmployeeManagement;
// // import React, { useEffect, useState, useContext, useRef } from "react";
// // import axios from "axios";
// // import { StoreContext } from "./StoreContext";
// // import {
// //   User, Briefcase, DollarSign, Clock, Phone, Home,
// //   Calendar, FileText, Edit, Trash, X, Search,
// //   Plus, ChevronDown, Award, Layers, CreditCard, TrendingUp,
// //   Mail, MapPin, BriefcaseBusiness, Clock2
// // } from "react-feather";
// // import {
// //   BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
// //   PieChart, Pie, Cell, LineChart, Line, CartesianGrid
// // } from "recharts";
// // import { motion, AnimatePresence } from "framer-motion";

// // const EmployeeManagement = () => {
// //   const { storeId } = useContext(StoreContext);
// //   const [employees, setEmployees] = useState([]);
// //   const [filteredEmployees, setFilteredEmployees] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [newEmployee, setNewEmployee] = useState({
// //     name: "", role: "", salary: "", shifts: "", contact: "", address: "",
// //     dateOfJoining: "", employeeId: "", experience: "", image: null,
// //     salaryInterval: "monthly", attendance: [],
// //   });
// //   const [editEmployeeId, setEditEmployeeId] = useState(null);
// //   const [selectedEmployee, setSelectedEmployee] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [activeTab, setActiveTab] = useState("list");
// //   const [showForm, setShowForm] = useState(false);
// //   const [notification, setNotification] = useState({ show: false, message: "", type: "" });
// //   const formRef = useRef(null);

// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// //   };

// //   const itemVariants = {
// //     hidden: { y: 20, opacity: 0 },
// //     visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10 } },
// //   };

// //   const fadeIn = {
// //     hidden: { opacity: 0 },
// //     visible: { opacity: 1, transition: { duration: 0.6 } },
// //   };

// //   const modalVariants = {
// //     hidden: { opacity: 0, scale: 0.8, y: "-50%" },
// //     visible: { 
// //       opacity: 1, 
// //       scale: 1, 
// //       y: 0,
// //       transition: { 
// //         type: "spring", 
// //         stiffness: 300, 
// //         damping: 25,
// //         duration: 0.3 
// //       } 
// //     },
// //     exit: { 
// //       opacity: 0, 
// //       scale: 0.8, 
// //       y: "-50%",
// //       transition: { duration: 0.2 } 
// //     }
// //   };

// //   useEffect(() => {
// //     if (storeId) fetchEmployees();
// //   }, [storeId]);

// //   useEffect(() => {
// //     const filtered = employees.filter(
// //       (employee) =>
// //         employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //         employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //         employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
// //     );
// //     setFilteredEmployees(filtered);
// //   }, [searchTerm, employees]);

// //   useEffect(() => {
// //     function handleClickOutside(event) {
// //       if (formRef.current && !formRef.current.contains(event.target) && showForm) {
// //         setShowForm(false);
// //       }
// //     }
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, [showForm]);

// //   const fetchEmployees = async () => {
// //     setLoading(true);
// //     try {
// //       const response = await axios.get("http://localhost:5004/employees", { headers: { storeId } });
// //       setEmployees(response.data);
// //       setFilteredEmployees(response.data);
// //       setLoading(false);
// //     } catch (error) {
// //       console.error("Error fetching employees:", error);
// //       showNotification("Failed to fetch employees", "error");
// //       setLoading(false);
// //     }
// //   };

// //   const showNotification = (message, type = "success") => {
// //     setNotification({ show: true, message, type });
// //     setTimeout(() => setNotification({ show: false, message: "", type: "" }), 4000);
// //   };

// //   const handleAddEmployee = async () => {
// //     if (!newEmployee.name || !newEmployee.employeeId) {
// //       showNotification("Name and Employee ID are required!", "error");
// //       return;
// //     }
// //     const formData = new FormData();
// //     Object.keys(newEmployee).forEach((key) => formData.append(key, newEmployee[key]));
// //     try {
// //       const response = await axios.post("http://localhost:5004/employees", formData, {
// //         headers: { storeId, "Content-Type": "multipart/form-data" },
// //       });
// //       setEmployees([...employees, response.data]);
// //       resetForm();
// //       showNotification("Employee added successfully!");
// //       setShowForm(false);
// //     } catch (error) {
// //       console.error("Error adding employee:", error);
// //       showNotification("Failed to add employee", "error");
// //     }
// //   };

// //   const handleUpdateEmployee = async () => {
// //     if (!editEmployeeId) return;
// //     const formData = new FormData();
// //     if (newEmployee.image instanceof File) {
// //       formData.append("image", newEmployee.image);
// //     } else {
// //       formData.append("existingImage", newEmployee.image);
// //     }
// //     Object.keys(newEmployee).forEach((key) => {
// //       if (key !== "image" || newEmployee[key] instanceof File) {
// //         formData.append(key, newEmployee[key]);
// //       }
// //     });
// //     try {
// //       await axios.put(`http://localhost:5004/employees/${editEmployeeId}`, formData, {
// //         headers: { storeId, "Content-Type": "multipart/form-data" },
// //       });
// //       showNotification("Employee updated successfully!");
// //       resetForm();
// //       fetchEmployees();
// //       setShowForm(false);
// //     } catch (error) {
// //       console.error("Error updating employee:", error);
// //       showNotification("Failed to update employee", "error");
// //     }
// //   };

// //   const handleDeleteEmployee = async (id) => {
// //     if (!window.confirm("Are you sure you want to delete this employee?")) return;
// //     try {
// //       await axios.delete(`http://localhost:5004/employees/${id}`, { headers: { storeId } });
// //       showNotification("Employee deleted successfully!");
// //       fetchEmployees();
// //       if (selectedEmployee && selectedEmployee._id === id) setSelectedEmployee(null);
// //     } catch (error) {
// //       console.error("Error deleting employee:", error);
// //       showNotification("Failed to delete employee", "error");
// //     }
// //   };

// //   const handleEditEmployee = (employee) => {
// //     setEditEmployeeId(employee._id);
// //     setNewEmployee({
// //       name: employee.name, role: employee.role, salary: employee.salary,
// //       shifts: employee.shifts, contact: employee.contact, address: employee.address,
// //       dateOfJoining: employee.dateOfJoining, employeeId: employee.employeeId,
// //       experience: employee.experience, image: employee.image || null,
// //       salaryInterval: employee.salaryInterval || "monthly", attendance: employee.attendance || [],
// //     });
// //     setShowForm(true);
// //   };

// //   const resetForm = () => {
// //     setEditEmployeeId(null);
// //     setNewEmployee({
// //       name: "", role: "", salary: "", shifts: "", contact: "", address: "",
// //       dateOfJoining: "", employeeId: "", experience: "", image: null,
// //       salaryInterval: "monthly", attendance: [],
// //     });
// //   };

// //   const calculateSalary = (employee) => {
// //     const { salary, salaryInterval, attendance } = employee;
// //     const baseSalary = parseFloat(salary) || 0;
// //     switch (salaryInterval) {
// //       case "daily": return (baseSalary / 30) * attendance.length;
// //       case "weekly": return (baseSalary / 4) * (attendance.length / 7);
// //       case "monthly": return baseSalary;
// //       default: return baseSalary;
// //     }
// //   };

// //   const renderFormField = (key, icon, placeholder, type = "text") => (
// //     <motion.div variants={itemVariants} className="relative">
// //       <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-500 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
// //         <span className="text-gray-400 mr-2">{icon}</span>
// //         {type === "file" ? (
// //           <input
// //             type="file"
// //             accept="image/*"
// //             onChange={(e) => setNewEmployee({ ...newEmployee, image: e.target.files[0] })}
// //             className="w-full focus:outline-none"
// //           />
// //         ) : (
// //           <input
// //             type={type}
// //             placeholder={placeholder}
// //             value={newEmployee[key] || ""}
// //             onChange={(e) => setNewEmployee({ ...newEmployee, [key]: e.target.value })}
// //             className="w-full focus:outline-none"
// //           />
// //         )}
// //       </div>
// //     </motion.div>
// //   );

// //   const fieldIcons = {
// //     name: <User className="text-indigo-500" />,
// //     role: <BriefcaseBusiness className="text-green-500" />,
// //     salary: <DollarSign className="text-yellow-500" />,
// //     shifts: <Clock2 className="text-purple-500" />,
// //     contact: <Phone className="text-blue-500" />,
// //     address: <MapPin className="text-red-500" />,
// //     dateOfJoining: <Calendar className="text-teal-500" />,
// //     employeeId: <FileText className="text-orange-500" />,
// //     experience: <Award className="text-pink-500" />,
// //     salaryInterval: <Clock className="text-cyan-500" />,
// //     attendance: <TrendingUp className="text-lime-500" />,
// //   };

// //   return (
// //     <div className="p-6 bg-gray-50 min-h-screen">
// //       <AnimatePresence>
// //         {notification.show && (
// //           <motion.div
// //             initial={{ opacity: 0, y: -50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -50 }}
// //             className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
// //               notification.type === "error" ? "bg-red-500" : "bg-green-500"
// //             } text-white`}
// //           >
// //             {notification.message}
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       <motion.div
// //         initial={{ y: -50, opacity: 0 }}
// //         animate={{ y: 0, opacity: 1 }}
// //         transition={{ duration: 0.5 }}
// //         className="flex justify-between items-center mb-6"
// //       >
// //         <div>
// //           <h1 className="text-3xl font-bold text-gray-800">Employee Management</h1>
// //           <p className="text-gray-500">Manage your retail store workforce</p>
// //         </div>
// //         <div className="flex gap-3">
// //           <motion.button
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             onClick={() => { resetForm(); setShowForm(true); }}
// //             className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center gap-2 shadow-md"
// //           >
// //             <Plus size={18} /> Add Employee
// //           </motion.button>
// //         </div>
// //       </motion.div>

// //       <motion.div
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ delay: 0.3 }}
// //         className="flex mb-6 bg-white rounded-lg shadow-md"
// //       >
// //         <button
// //           onClick={() => setActiveTab("list")}
// //           className={`px-6 py-3 flex items-center gap-2 ${
// //             activeTab === "list" ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold" : "text-gray-500 hover:text-gray-700"
// //           } transition-all duration-200`}
// //         >
// //           <Layers size={18} /> Employee List
// //         </button>
// //         <button
// //           onClick={() => setActiveTab("analytics")}
// //           className={`px-6 py-3 flex items-center gap-2 ${
// //             activeTab === "analytics" ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold" : "text-gray-500 hover:text-gray-700"
// //           } transition-all duration-200`}
// //         >
// //           <BarChart size={18} /> Analytics
// //         </button>
// //       </motion.div>

// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 0.4 }}
// //         className="bg-white rounded-lg shadow-md p-4 mb-6 flex"
// //       >
// //         <div className="relative flex-grow">
// //           <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
// //             <Search size={18} />
// //           </span>
// //           <input
// //             type="text"
// //             placeholder="Search by name, role, or ID..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
// //           />
// //         </div>
// //       </motion.div>

// //       <AnimatePresence>
// //         {showForm && (
// //           <motion.div
// //             ref={formRef}
// //             initial={{ opacity: 0, y: 50, scale: 0.9 }}
// //             animate={{ opacity: 1, y: 0, scale: 1 }}
// //             exit={{ opacity: 0, y: 50, scale: 0.9 }}
// //             transition={{ duration: 0.3, type: "spring" }}
// //             className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200 relative z-10"
// //           >
// //             <div className="flex justify-between items-center mb-6">
// //               <h2 className="text-2xl font-semibold text-gray-700">
// //                 {editEmployeeId ? "Edit Employee" : "Add New Employee"}
// //               </h2>
// //               <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
// //                 <X size={20} />
// //               </button>
// //             </div>
// //             <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //               {renderFormField("name", <User size={20} />, "Full Name")}
// //               {renderFormField("employeeId", <FileText size={20} />, "Employee ID")}
// //               {renderFormField("role", <Briefcase size={20} />, "Role/Position")}
// //               {renderFormField("salary", <DollarSign size={20} />, "Salary", "number")}
// //               {renderFormField("shifts", <Clock size={20} />, "Work Shifts")}
// //               {renderFormField("experience", <Award size={20} />, "Experience (years)")}
// //               {renderFormField("contact", <Phone size={20} />, "Contact Number")}
// //               {renderFormField("address", <Home size={20} />, "Address")}
// //               {renderFormField("dateOfJoining", <Calendar size={20} />, "Date of Joining", "date")}
// //               {renderFormField("salaryInterval", <Clock size={20} />, "Salary Interval", "select")}
// //               <motion.div variants={itemVariants} className="relative">
// //                 <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-500 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
// //                   <User size={20} className="text-gray-400 mr-2" />
// //                   <input
// //                     type="file"
// //                     accept="image/*"
// //                     onChange={(e) => setNewEmployee({ ...newEmployee, image: e.target.files[0] })}
// //                     className="w-full focus:outline-none"
// //                   />
// //                 </div>
// //               </motion.div>
// //             </motion.div>
// //             <motion.div variants={itemVariants} className="flex gap-4 mt-6">
// //               <button
// //                 onClick={editEmployeeId ? handleUpdateEmployee : handleAddEmployee}
// //                 className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center gap-2 shadow-md"
// //               >
// //                 {editEmployeeId ? <Edit size={18} /> : <User size={18} />}
// //                 {editEmployeeId ? "Update Employee" : "Add Employee"}
// //               </button>
// //               {editEmployeeId && (
// //                 <button
// //                   onClick={resetForm}
// //                   className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-200 flex items-center gap-2 shadow-md"
// //                 >
// //                   <X size={18} /> Cancel
// //                 </button>
// //               )}
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       <AnimatePresence mode="wait">
// //         {activeTab === "list" ? (
// //           <motion.div
// //             key="list"
// //             initial={{ opacity: 0, x: -20 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             exit={{ opacity: 0, x: 20 }}
// //             transition={{ duration: 0.3 }}
// //             className="bg-white rounded-lg shadow-md p-6"
// //           >
// //             {loading ? (
// //               <div className="flex justify-center items-center h-64">
// //                 <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
// //               </div>
// //             ) : filteredEmployees.length === 0 ? (
// //               <div className="text-center py-10">
// //                 <div className="mx-auto text-gray-300 mb-4"><User size={48} /></div>
// //                 <h3 className="text-xl font-medium text-gray-700">No employees found</h3>
// //                 <p className="text-gray-500 mt-2">Add new employees or try a different search term</p>
// //               </div>
// //             ) : (
// //               <motion.div 
// //                 variants={containerVariants} 
// //                 initial="hidden" 
// //                 animate="visible" 
// //                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
// //               >
// //                 {filteredEmployees.map((employee) => (
// //                   <motion.div
// //                     key={employee._id}
// //                     variants={itemVariants}
// //                     whileHover={{ 
// //                       scale: 1.03, 
// //                       boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
// //                     }}
// //                     whileTap={{ scale: 0.98 }}
// //                     onClick={() => setSelectedEmployee(employee)}
// //                     className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl shadow-lg text-white cursor-pointer h-64 flex flex-col justify-center items-center relative overflow-hidden group"
// //                   >
// //                     <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
// //                     <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
// //                       <button
// //                         onClick={(e) => { e.stopPropagation(); handleEditEmployee(employee); }}
// //                         className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition duration-200 mr-2"
// //                       >
// //                         <Edit size={16} />
// //                       </button>
// //                       <button
// //                         onClick={(e) => { e.stopPropagation(); handleDeleteEmployee(employee._id); }}
// //                         className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-200"
// //                       >
// //                         <Trash size={16} />
// //                       </button>
// //                     </div>
// //                     <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-white opacity-5 rounded-full"></div>
// //                     <div className="absolute -top-10 -left-10 h-40 w-40 bg-white opacity-5 rounded-full"></div>
// //                     <img
// //                       src={employee.image ? `http://localhost:5004/uploads/${employee.image}` : `http://localhost:5004/uploads/em.jpg`}
// //                       alt={`${employee.name}'s profile`}
// //                       className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-xl object-cover"
// //                     />
// //                     <h3 className="text-xl font-bold text-center">{employee.name}</h3>
// //                     <p className="text-sm text-center text-indigo-100">Role: {employee.role || "N/A"}</p>
// //                     <p className="text-sm text-center text-indigo-100">ID: {employee.employeeId}</p>
// //                   </motion.div>
// //                 ))}
// //               </motion.div>
// //             )}
// //           </motion.div>
// //         ) : (
// //           <motion.div
// //             key="analytics"
// //             initial={{ opacity: 0, x: 20 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             exit={{ opacity: 0, x: -20 }}
// //             transition={{ duration: 0.3 }}
// //           >
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// //               <motion.div variants={fadeIn} initial="hidden" animate="visible" className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500">
// //                 <div className="flex justify-between items-center">
// //                   <div><p className="text-sm text-gray-500">Total Employees</p><h3 className="text-2xl font-bold text-gray-800">{employees.length}</h3></div>
// //                   <div className="p-3 bg-indigo-100 rounded-lg"><User size={24} className="text-indigo-600" /></div>
// //                 </div>
// //               </motion.div>
// //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
// //                 <div className="flex justify-between items-center">
// //                   <div><p className="text-sm text-gray-500">Average Salary</p><h3 className="text-2xl font-bold text-gray-800">${(employees.reduce((sum, emp) => sum + (Number(emp.salary) || 0), 0) / (employees.length || 1)).toFixed(2)}</h3></div>
// //                   <div className="p-3 bg-green-100 rounded-lg"><DollarSign size={24} className="text-green-600" /></div>
// //                 </div>
// //               </motion.div>
// //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
// //                 <div className="flex justify-between items-center">
// //                   <div><p className="text-sm text-gray-500">New Hires (3 months)</p><h3 className="text-2xl font-bold text-gray-800">{employees.filter((emp) => {
// //                     if (!emp.dateOfJoining) return false;
// //                     const joinDate = new Date(emp.dateOfJoining);
// //                     const threeMonthsAgo = new Date();
// //                     threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
// //                     return joinDate >= threeMonthsAgo;
// //                   }).length}</h3></div>
// //                   <div className="p-3 bg-blue-100 rounded-lg"><Calendar size={24} className="text-blue-600" /></div>
// //                 </div>
// //               </motion.div>
// //             </div>
// //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="bg-white rounded-lg shadow-md p-6">
// //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Role Distribution</h3>
// //                 {Object.keys(employees.reduce((acc, emp) => {
// //                   const role = emp.role || "Unspecified";
// //                   acc[role] = (acc[role] || 0) + 1;
// //                   return acc;
// //                 }, {})).length > 0 ? (
// //                   <ResponsiveContainer width="100%" height={300}>
// //                     <PieChart>
// //                       <Pie
// //                         data={Object.entries(employees.reduce((acc, emp) => {
// //                           const role = emp.role || "Unspecified";
// //                           acc[role] = (acc[role] || 0) + 1;
// //                           return acc;
// //                         }, {})).map(([name, value]) => ({ name, value }))}
// //                         cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#8884d8" dataKey="value"
// //                         label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
// //                       >
// //                         {Object.entries(employees.reduce((acc, emp) => {
// //                           const role = emp.role || "Unspecified";
// //                           acc[role] = (acc[role] || 0) + 1;
// //                           return acc;
// //                         }, {})).map((_, index) => (
// //                           <Cell key={`cell-${index}`} fill={["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899"][index % 6]} />
// //                         ))}
// //                       </Pie>
// //                       <Tooltip /><Legend />
// //                     </PieChart>
// //                   </ResponsiveContainer>
// //                 ) : (
// //                   <div className="flex justify-center items-center h-64"><p className="text-gray-500">No role data available</p></div>
// //                 )}
// //               </motion.div>
// //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="bg-white rounded-lg shadow-md p-6">
// //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Top 5 Salaries</h3>
// //                 {employees.filter((emp) => emp.salary).length > 0 ? (
// //                   <ResponsiveContainer width="100%" height={300}>
// //                     <BarChart data={employees.filter((emp) => emp.salary).map((emp) => ({
// //                       name: emp.name.length > 10 ? emp.name.substring(0, 10) + "..." : emp.name,
// //                       salary: Number(emp.salary) || 0,
// //                     })).sort((a, b) => b.salary - a.salary).slice(0, 5)}>
// //                       <CartesianGrid strokeDasharray="3 3" opacity={0.3} /><XAxis dataKey="name" /><YAxis />
// //                       <Tooltip formatter={(value) => [`$${value}`, "Salary"]} />
// //                       <Bar dataKey="salary" fill="#4F46E5" barSize={40} radius={[4, 4, 0, 0]} />
// //                     </BarChart>
// //                   </ResponsiveContainer>
// //                 ) : (
// //                   <div className="flex justify-center items-center h-64"><p className="text-gray-500">No salary data available</p></div>
// //                 )}
// //               </motion.div>
// //               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.5 }} className="bg-white rounded-lg shadow-md p-6 col-span-1 lg:col-span-2">
// //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Experience Overview</h3>
// //                 {employees.filter((emp) => emp.experience).length > 0 ? (
// //                   <ResponsiveContainer width="100%" height={300}>
// //                     <LineChart data={employees.filter((emp) => emp.experience).map((emp) => ({
// //                       name: emp.name.length > 10 ? emp.name.substring(0, 10) + "..." : emp.name,
// //                       years: Number(emp.experience.replace(/[^0-9.]/g, "")) || 0,
// //                     })).sort((a, b) => b.years - a.years).slice(0, 5)}>
// //                       <CartesianGrid strokeDasharray="3 3" opacity={0.3} /><XAxis dataKey="name" /><YAxis />
// //                       <Tooltip formatter={(value) => [`${value} years`, "Experience"]} />
// //                       <Line type="monotone" dataKey="years" stroke="#10B981" strokeWidth={3}
// //                         dot={{ r: 6, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }}
// //                         activeDot={{ r: 8, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }} />
// //                     </LineChart>
// //                   </ResponsiveContainer>
// //                 ) : (
// //                   <div className="flex justify-center items-center h-64"><p className="text-gray-500">No experience data available</p></div>
// //                 )}
// //               </motion.div>
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       <AnimatePresence>
// //         {selectedEmployee && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             className="fixed inset-0 bg-gray-900 bg-opacity-70 backdrop-blur-sm z-40"
// //           >
// //             {/* Background Image Layer */}
// //             <div 
// //               className="absolute inset-0 bg-cover bg-center bg-no-repeat"
// //               style={{
// //                 backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
// //                 opacity: 0.15,
// //                 filter: 'grayscale(20%)',
// //               }}
// //             />
// //             {/* Fallback Gradient Layer */}
// //             <div 
// //               className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-gray-800/50 to-blue-900/50"
// //             />

// //             <motion.div
// //               variants={modalVariants}
// //               initial="hidden"
// //               animate="visible"
// //               exit="exit"
// //               className="fixed inset-0 flex items-center justify-center z-50 p-6 pointer-events-none"
// //             >
// //               <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden pointer-events-auto transform-gpu relative"
// //                 style={{ 
// //                   background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(245,248,255,0.95) 100%)',
// //                   backdropFilter: 'blur(10px)',
// //                   border: '1px solid rgba(255,255,255,0.2)',
// //                 }}>
// //                 {/* Header */}
// //                 <div className="relative p-6 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-blue-50">
// //                   <div className="flex items-center justify-between">
// //                     <div className="flex items-center gap-4">
// //                       <motion.div
// //                         initial={{ scale: 0, rotate: -180 }}
// //                         animate={{ scale: 1, rotate: 0 }}
// //                         transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
// //                       >
// //                         <img
// //                           src={
// //                             selectedEmployee.image
// //                               ? `http://localhost:5004/uploads/${selectedEmployee.image}`
// //                               : `http://localhost:5004/uploads/em.jpg`
// //                           }
// //                           alt={`${selectedEmployee.name}'s profile`}
// //                           className="w-20 h-20 rounded-full border-4 border-indigo-500 object-cover shadow-lg transition-transform hover:scale-105"
// //                           onError={(e) => {
// //                             e.target.src = 'https://via.placeholder.com/150?text=Profile';
// //                           }}
// //                         />
// //                       </motion.div>
// //                       <div>
// //                         <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
// //                           {selectedEmployee.name}
// //                         </h3>
// //                         <p className="text-sm font-medium text-gray-600 flex items-center gap-1">
// //                           <Briefcase size={14} className="text-green-500" /> 
// //                           {selectedEmployee.role || "N/A"}
// //                         </p>
// //                         <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
// //                           <FileText size={12} className="text-orange-500" /> 
// //                           ID: {selectedEmployee.employeeId}
// //                         </p>
// //                       </div>
// //                     </div>
// //                     <motion.button
// //                       whileHover={{ scale: 1.1, rotate: 90 }}
// //                       whileTap={{ scale: 0.9 }}
// //                       onClick={() => setSelectedEmployee(null)}
// //                       className="text-gray-500 hover:text-gray-700 p-2 rounded-full bg-white/80 hover:bg-gray-100 transition-all duration-200 shadow-sm"
// //                     >
// //                       <X size={24} />
// //                     </motion.button>
// //                   </div>
// //                 </div>

// //                 {/* Content */}
// //                 <div className="p-6 overflow-y-auto max-h-[60vh] scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-transparent bg-gray-50/50">
// //                   <motion.div 
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ delay: 0.2 }}
// //                     className="space-y-3"
// //                   >
// //                     {Object.entries(selectedEmployee).map(([key, value]) => (
// //                       key !== "image" && key !== "_id" && key !== "__v" && key !== "name" && key !== "role" && key !== "employeeId" && (
// //                         <motion.div
// //                           key={key}
// //                           initial={{ opacity: 0, x: -20 }}
// //                           animate={{ opacity: 1, x: 0 }}
// //                           transition={{ delay: 0.3 + (Object.keys(selectedEmployee).indexOf(key) * 0.05) }}
// //                           className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-transparent hover:border-l-indigo-400"
// //                         >
// //                           <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200">
// //                             {fieldIcons[key] || <User className="text-gray-500" />}
// //                           </div>
// //                           <div className="flex-1">
// //                             <p className="text-sm font-semibold text-gray-700 capitalize">
// //                               {key.replace(/([A-Z])/g, ' $1').trim()}
// //                             </p>
// //                             <div className="mt-1 text-gray-800">
// //                               {Array.isArray(value) ? (
// //                                 value.length > 0 ? (
// //                                   <div className="space-y-2 max-h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-200">
// //                                     {value.map((item, idx) => (
// //                                       <div key={idx} className="text-sm bg-indigo-50 p-2 rounded-md flex items-center gap-2">
// //                                         <TrendingUp size={14} className="text-lime-500" />
// //                                         {typeof item === 'object' ? JSON.stringify(item) : item}
// //                                       </div>
// //                                     ))}
// //                                   </div>
// //                                 ) : (
// //                                   <span className="text-sm text-gray-500 italic">None</span>
// //                                 )
// //                               ) : (
// //                                 <span className="text-sm font-medium">
// //                                   {key === "salary" && value ? `$${value}` : value || "N/A"}
// //                                 </span>
// //                               )}
// //                             </div>
// //                           </div>
// //                         </motion.div>
// //                       )
// //                     ))}
// //                   </motion.div>
// //                 </div>

// //                 {/* Footer */}
// //                 <div className="p-6 border-t border-gray-100 bg-gradient-to-t from-gray-50 to-transparent">
// //                   <div className="flex justify-between gap-4">
// //                     <motion.button
// //                       whileHover={{ scale: 1.05 }}
// //                       whileTap={{ scale: 0.95 }}
// //                       onClick={() => handleEditEmployee(selectedEmployee)}
// //                       className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
// //                     >
// //                       <Edit size={18} /> Edit Profile
// //                     </motion.button>
// //                     <motion.button
// //                       whileHover={{ scale: 1.05 }}
// //                       whileTap={{ scale: 0.95 }}
// //                       onClick={() => setSelectedEmployee(null)}
// //                       className="flex-1 bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-blue-600 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
// //                     >
// //                       <X size={18} /> Close Profile
// //                     </motion.button>
// //                   </div>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // };

// // export default EmployeeManagement;

// import React, { useEffect, useState, useContext, useRef } from "react";
// import axios from "axios";
// import { StoreContext } from "./StoreContext";
// import {
//   User, Briefcase, DollarSign, Clock, Phone, Home,
//   Calendar, FileText, Edit, Trash, X, Search,
//   Plus, ChevronDown, Award, Layers, CreditCard, TrendingUp,
//   Mail, MapPin
// } from "react-feather";
// import {
//   BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
//   PieChart, Pie, Cell, LineChart, Line, CartesianGrid
// } from "recharts";
// import { motion, AnimatePresence } from "framer-motion";

// const EmployeeManagement = () => {
//   const { storeId } = useContext(StoreContext);
//   const [employees, setEmployees] = useState([]);
//   const [filteredEmployees, setFilteredEmployees] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [newEmployee, setNewEmployee] = useState({
//     name: "", role: "", salary: "", shifts: "", contact: "", address: "",
//     dateOfJoining: "", employeeId: "", experience: "", image: null,
//     salaryInterval: "monthly", attendance: [],
//   });
//   const [editEmployeeId, setEditEmployeeId] = useState(null);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState("list");
//   const [showForm, setShowForm] = useState(false);
//   const [notification, setNotification] = useState({ show: false, message: "", type: "" });
//   const formRef = useRef(null);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10 } },
//   };

//   const fadeIn = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.6 } },
//   };

//   const modalVariants = {
//     hidden: { opacity: 0, scale: 0.8, y: "-50%" },
//     visible: { 
//       opacity: 1, 
//       scale: 1, 
//       y: 0,
//       transition: { 
//         type: "spring", 
//         stiffness: 300, 
//         damping: 25,
//         duration: 0.3 
//       } 
//     },
//     exit: { 
//       opacity: 0, 
//       scale: 0.8, 
//       y: "-50%",
//       transition: { duration: 0.2 } 
//     }
//   };

//   useEffect(() => {
//     if (storeId) fetchEmployees();
//   }, [storeId]);

//   useEffect(() => {
//     const filtered = employees.filter(
//       (employee) =>
//         employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredEmployees(filtered);
//   }, [searchTerm, employees]);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (formRef.current && !formRef.current.contains(event.target) && showForm) {
//         setShowForm(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [showForm]);

//   const fetchEmployees = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("http://localhost:5004/employees", { headers: { storeId } });
//       setEmployees(response.data);
//       setFilteredEmployees(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching employees:", error);
//       showNotification("Failed to fetch employees", "error");
//       setLoading(false);
//     }
//   };

//   const showNotification = (message, type = "success") => {
//     setNotification({ show: true, message, type });
//     setTimeout(() => setNotification({ show: false, message: "", type: "" }), 4000);
//   };

//   const handleAddEmployee = async () => {
//     if (!newEmployee.name || !newEmployee.employeeId) {
//       showNotification("Name and Employee ID are required!", "error");
//       return;
//     }
//     const formData = new FormData();
//     Object.keys(newEmployee).forEach((key) => formData.append(key, newEmployee[key]));
//     try {
//       const response = await axios.post("http://localhost:5004/employees", formData, {
//         headers: { storeId, "Content-Type": "multipart/form-data" },
//       });
//       setEmployees([...employees, response.data]);
//       resetForm();
//       showNotification("Employee added successfully!");
//       setShowForm(false);
//     } catch (error) {
//       console.error("Error adding employee:", error);
//       showNotification("Failed to add employee", "error");
//     }
//   };

//   const handleUpdateEmployee = async () => {
//     if (!editEmployeeId) return;
//     const formData = new FormData();
//     if (newEmployee.image instanceof File) {
//       formData.append("image", newEmployee.image);
//     } else {
//       formData.append("existingImage", newEmployee.image);
//     }
//     Object.keys(newEmployee).forEach((key) => {
//       if (key !== "image" || newEmployee[key] instanceof File) {
//         formData.append(key, newEmployee[key]);
//       }
//     });
//     try {
//       await axios.put(`http://localhost:5004/employees/${editEmployeeId}`, formData, {
//         headers: { storeId, "Content-Type": "multipart/form-data" },
//       });
//       showNotification("Employee updated successfully!");
//       resetForm();
//       fetchEmployees();
//       setShowForm(false);
//     } catch (error) {
//       console.error("Error updating employee:", error);
//       showNotification("Failed to update employee", "error");
//     }
//   };

//   const handleDeleteEmployee = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this employee?")) return;
//     try {
//       await axios.delete(`http://localhost:5004/employees/${id}`, { headers: { storeId } });
//       showNotification("Employee deleted successfully!");
//       fetchEmployees();
//       if (selectedEmployee && selectedEmployee._id === id) setSelectedEmployee(null);
//     } catch (error) {
//       console.error("Error deleting employee:", error);
//       showNotification("Failed to delete employee", "error");
//     }
//   };

//   const handleEditEmployee = (employee) => {
//     setEditEmployeeId(employee._id);
//     setNewEmployee({
//       name: employee.name, role: employee.role, salary: employee.salary,
//       shifts: employee.shifts, contact: employee.contact, address: employee.address,
//       dateOfJoining: employee.dateOfJoining, employeeId: employee.employeeId,
//       experience: employee.experience, image: employee.image || null,
//       salaryInterval: employee.salaryInterval || "monthly", attendance: employee.attendance || [],
//     });
//     setShowForm(true);
//   };

//   const resetForm = () => {
//     setEditEmployeeId(null);
//     setNewEmployee({
//       name: "", role: "", salary: "", shifts: "", contact: "", address: "",
//       dateOfJoining: "", employeeId: "", experience: "", image: null,
//       salaryInterval: "monthly", attendance: [],
//     });
//   };

//   const calculateSalary = (employee) => {
//     const { salary, salaryInterval, attendance } = employee;
//     const baseSalary = parseFloat(salary) || 0;
//     switch (salaryInterval) {
//       case "daily": return (baseSalary / 30) * attendance.length;
//       case "weekly": return (baseSalary / 4) * (attendance.length / 7);
//       case "monthly": return baseSalary;
//       default: return baseSalary;
//     }
//   };

//   const renderFormField = (key, icon, placeholder, type = "text") => (
//     <motion.div variants={itemVariants} className="relative">
//       <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-500 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
//         <span className="text-gray-400 mr-2">{icon}</span>
//         {type === "file" ? (
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setNewEmployee({ ...newEmployee, image: e.target.files[0] })}
//             className="w-full focus:outline-none"
//           />
//         ) : (
//           <input
//             type={type}
//             placeholder={placeholder}
//             value={newEmployee[key] || ""}
//             onChange={(e) => setNewEmployee({ ...newEmployee, [key]: e.target.value })}
//             className="w-full focus:outline-none"
//           />
//         )}
//       </div>
//     </motion.div>
//   );

//   const fieldIcons = {
//     name: <User className="text-indigo-500" />,
//     role: <Briefcase className="text-green-500" />,
//     salary: <DollarSign className="text-yellow-500" />,
//     shifts: <Clock className="text-purple-500" />,
//     contact: <Phone className="text-blue-500" />,
//     address: <MapPin className="text-red-500" />,
//     dateOfJoining: <Calendar className="text-teal-500" />,
//     employeeId: <FileText className="text-orange-500" />,
//     experience: <Award className="text-pink-500" />,
//     salaryInterval: <Clock className="text-cyan-500" />,
//     attendance: <TrendingUp className="text-lime-500" />,
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <AnimatePresence>
//         {notification.show && (
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//             className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
//               notification.type === "error" ? "bg-red-500" : "bg-green-500"
//             } text-white`}
//           >
//             {notification.message}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <motion.div
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="flex justify-between items-center mb-6"
//       >
//         <div>
//           <h1 className="text-3xl font-bold text-gray-800">Employee Management</h1>
//           <p className="text-gray-500">Manage your retail store workforce</p>
//         </div>
//         <div className="flex gap-3">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => { resetForm(); setShowForm(true); }}
//             className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center gap-2 shadow-md"
//           >
//             <Plus size={18} /> Add Employee
//           </motion.button>
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//         className="flex mb-6 bg-white rounded-lg shadow-md"
//       >
//         <button
//           onClick={() => setActiveTab("list")}
//           className={`px-6 py-3 flex items-center gap-2 ${
//             activeTab === "list" ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold" : "text-gray-500 hover:text-gray-700"
//           } transition-all duration-200`}
//         >
//           <Layers size={18} /> Employee List
//         </button>
//         <button
//           onClick={() => setActiveTab("analytics")}
//           className={`px-6 py-3 flex items-center gap-2 ${
//             activeTab === "analytics" ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold" : "text-gray-500 hover:text-gray-700"
//           } transition-all duration-200`}
//         >
//           <BarChart size={18} /> Analytics
//         </button>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4 }}
//         className="bg-white rounded-lg shadow-md p-4 mb-6 flex"
//       >
//         <div className="relative flex-grow">
//           <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
//             <Search size={18} />
//           </span>
//           <input
//             type="text"
//             placeholder="Search by name, role, or ID..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
//           />
//         </div>
//       </motion.div>

//       <AnimatePresence>
//         {showForm && (
//           <motion.div
//             ref={formRef}
//             initial={{ opacity: 0, y: 50, scale: 0.9 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 50, scale: 0.9 }}
//             transition={{ duration: 0.3, type: "spring" }}
//             className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200 relative z-10"
//           >
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-semibold text-gray-700">
//                 {editEmployeeId ? "Edit Employee" : "Add New Employee"}
//               </h2>
//               <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
//                 <X size={20} />
//               </button>
//             </div>
//             <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {renderFormField("name", <User size={20} />, "Full Name")}
//               {renderFormField("employeeId", <FileText size={20} />, "Employee ID")}
//               {renderFormField("role", <Briefcase size={20} />, "Role/Position")}
//               {renderFormField("salary", <DollarSign size={20} />, "Salary", "number")}
//               {renderFormField("shifts", <Clock size={20} />, "Work Shifts")}
//               {renderFormField("experience", <Award size={20} />, "Experience (years)")}
//               {renderFormField("contact", <Phone size={20} />, "Contact Number")}
//               {renderFormField("address", <Home size={20} />, "Address")}
//               {renderFormField("dateOfJoining", <Calendar size={20} />, "Date of Joining", "date")}
//               {renderFormField("salaryInterval", <Clock size={20} />, "Salary Interval", "select")}
//               <motion.div variants={itemVariants} className="relative">
//                 <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-500 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
//                   <User size={20} className="text-gray-400 mr-2" />
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => setNewEmployee({ ...newEmployee, image: e.target.files[0] })}
//                     className="w-full focus:outline-none"
//                   />
//                 </div>
//               </motion.div>
//             </motion.div>
//             <motion.div variants={itemVariants} className="flex gap-4 mt-6">
//               <button
//                 onClick={editEmployeeId ? handleUpdateEmployee : handleAddEmployee}
//                 className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center gap-2 shadow-md"
//               >
//                 {editEmployeeId ? <Edit size={18} /> : <User size={18} />}
//                 {editEmployeeId ? "Update Employee" : "Add Employee"}
//               </button>
//               {editEmployeeId && (
//                 <button
//                   onClick={resetForm}
//                   className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-200 flex items-center gap-2 shadow-md"
//                 >
//                   <X size={18} /> Cancel
//                 </button>
//               )}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <AnimatePresence mode="wait">
//         {activeTab === "list" ? (
//           <motion.div
//             key="list"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 20 }}
//             transition={{ duration: 0.3 }}
//             className="bg-white rounded-lg shadow-md p-6"
//           >
//             {loading ? (
//               <div className="flex justify-center items-center h-64">
//                 <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
//               </div>
//             ) : filteredEmployees.length === 0 ? (
//               <div className="text-center py-10">
//                 <div className="mx-auto text-gray-300 mb-4"><User size={48} /></div>
//                 <h3 className="text-xl font-medium text-gray-700">No employees found</h3>
//                 <p className="text-gray-500 mt-2">Add new employees or try a different search term</p>
//               </div>
//             ) : (
//               <motion.div 
//                 variants={containerVariants} 
//                 initial="hidden" 
//                 animate="visible" 
//                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//               >
//                 {filteredEmployees.map((employee) => (
//                   <motion.div
//                     key={employee._id}
//                     variants={itemVariants}
//                     whileHover={{ 
//                       scale: 1.03, 
//                       boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
//                     }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={() => setSelectedEmployee(employee)}
//                     className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl shadow-lg text-white cursor-pointer h-64 flex flex-col justify-center items-center relative overflow-hidden group"
//                   >
//                     <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
//                     <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
//                       <button
//                         onClick={(e) => { e.stopPropagation(); handleEditEmployee(employee); }}
//                         className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition duration-200 mr-2"
//                       >
//                         <Edit size={16} />
//                       </button>
//                       <button
//                         onClick={(e) => { e.stopPropagation(); handleDeleteEmployee(employee._id); }}
//                         className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-200"
//                       >
//                         <Trash size={16} />
//                       </button>
//                     </div>
//                     <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-white opacity-5 rounded-full"></div>
//                     <div className="absolute -top-10 -left-10 h-40 w-40 bg-white opacity-5 rounded-full"></div>
//                     <img
//                       src={employee.image ? `http://localhost:5004/uploads/${employee.image}` : `http://localhost:5004/uploads/em.jpg`}
//                       alt={`${employee.name}'s profile`}
//                       className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-xl object-cover"
//                     />
//                     <h3 className="text-xl font-bold text-center">{employee.name}</h3>
//                     <p className="text-sm text-center text-indigo-100">Role: {employee.role || "N/A"}</p>
//                     <p className="text-sm text-center text-indigo-100">ID: {employee.employeeId}</p>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             )}
//           </motion.div>
//         ) : (
//           <motion.div
//             key="analytics"
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -20 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//               <motion.div variants={fadeIn} initial="hidden" animate="visible" className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500">
//                 <div className="flex justify-between items-center">
//                   <div><p className="text-sm text-gray-500">Total Employees</p><h3 className="text-2xl font-bold text-gray-800">{employees.length}</h3></div>
//                   <div className="p-3 bg-indigo-100 rounded-lg"><User size={24} className="text-indigo-600" /></div>
//                 </div>
//               </motion.div>
//               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
//                 <div className="flex justify-between items-center">
//                   <div><p className="text-sm text-gray-500">Average Salary</p><h3 className="text-2xl font-bold text-gray-800">${(employees.reduce((sum, emp) => sum + (Number(emp.salary) || 0), 0) / (employees.length || 1)).toFixed(2)}</h3></div>
//                   <div className="p-3 bg-green-100 rounded-lg"><DollarSign size={24} className="text-green-600" /></div>
//                 </div>
//               </motion.div>
//               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
//                 <div className="flex justify-between items-center">
//                   <div><p className="text-sm text-gray-500">New Hires (3 months)</p><h3 className="text-2xl font-bold text-gray-800">{employees.filter((emp) => {
//                     if (!emp.dateOfJoining) return false;
//                     const joinDate = new Date(emp.dateOfJoining);
//                     const threeMonthsAgo = new Date();
//                     threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
//                     return joinDate >= threeMonthsAgo;
//                   }).length}</h3></div>
//                   <div className="p-3 bg-blue-100 rounded-lg"><Calendar size={24} className="text-blue-600" /></div>
//                 </div>
//               </motion.div>
//             </div>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="bg-white rounded-lg shadow-md p-6">
//                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Role Distribution</h3>
//                 {Object.keys(employees.reduce((acc, emp) => {
//                   const role = emp.role || "Unspecified";
//                   acc[role] = (acc[role] || 0) + 1;
//                   return acc;
//                 }, {})).length > 0 ? (
//                   <ResponsiveContainer width="100%" height={300}>
//                     <PieChart>
//                       <Pie
//                         data={Object.entries(employees.reduce((acc, emp) => {
//                           const role = emp.role || "Unspecified";
//                           acc[role] = (acc[role] || 0) + 1;
//                           return acc;
//                         }, {})).map(([name, value]) => ({ name, value }))}
//                         cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#8884d8" dataKey="value"
//                         label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                       >
//                         {Object.entries(employees.reduce((acc, emp) => {
//                           const role = emp.role || "Unspecified";
//                           acc[role] = (acc[role] || 0) + 1;
//                           return acc;
//                         }, {})).map((_, index) => (
//                           <Cell key={`cell-${index}`} fill={["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899"][index % 6]} />
//                         ))}
//                       </Pie>
//                       <Tooltip /><Legend />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 ) : (
//                   <div className="flex justify-center items-center h-64"><p className="text-gray-500">No role data available</p></div>
//                 )}
//               </motion.div>
//               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="bg-white rounded-lg shadow-md p-6">
//                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Top 5 Salaries</h3>
//                 {employees.filter((emp) => emp.salary).length > 0 ? (
//                   <ResponsiveContainer width="100%" height={300}>
//                     <BarChart data={employees.filter((emp) => emp.salary).map((emp) => ({
//                       name: emp.name.length > 10 ? emp.name.substring(0, 10) + "..." : emp.name,
//                       salary: Number(emp.salary) || 0,
//                     })).sort((a, b) => b.salary - a.salary).slice(0, 5)}>
//                       <CartesianGrid strokeDasharray="3 3" opacity={0.3} /><XAxis dataKey="name" /><YAxis />
//                       <Tooltip formatter={(value) => [`$${value}`, "Salary"]} />
//                       <Bar dataKey="salary" fill="#4F46E5" barSize={40} radius={[4, 4, 0, 0]} />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 ) : (
//                   <div className="flex justify-center items-center h-64"><p className="text-gray-500">No salary data available</p></div>
//                 )}
//               </motion.div>
//               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.5 }} className="bg-white rounded-lg shadow-md p-6 col-span-1 lg:col-span-2">
//                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Experience Overview</h3>
//                 {employees.filter((emp) => emp.experience).length > 0 ? (
//                   <ResponsiveContainer width="100%" height={300}>
//                     <LineChart data={employees.filter((emp) => emp.experience).map((emp) => ({
//                       name: emp.name.length > 10 ? emp.name.substring(0, 10) + "..." : emp.name,
//                       years: Number(emp.experience.replace(/[^0-9.]/g, "")) || 0,
//                     })).sort((a, b) => b.years - a.years).slice(0, 5)}>
//                       <CartesianGrid strokeDasharray="3 3" opacity={0.3} /><XAxis dataKey="name" /><YAxis />
//                       <Tooltip formatter={(value) => [`${value} years`, "Experience"]} />
//                       <Line type="monotone" dataKey="years" stroke="#10B981" strokeWidth={3}
//                         dot={{ r: 6, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }}
//                         activeDot={{ r: 8, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }} />
//                     </LineChart>
//                   </ResponsiveContainer>
//                 ) : (
//                   <div className="flex justify-center items-center h-64"><p className="text-gray-500">No experience data available</p></div>
//                 )}
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <AnimatePresence>
//         {selectedEmployee && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-gray-900 bg-opacity-70 backdrop-blur-sm z-40"
//           >
//             {/* Background Image Layer */}
//             <div 
//               className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//               style={{
//                 backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
//                 opacity: 0.15,
//                 filter: 'grayscale(20%)',
//               }}
//             />
//             {/* Fallback Gradient Layer */}
//             <div 
//               className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-gray-800/50 to-blue-900/50"
//             />

//             <motion.div
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed inset-0 flex items-center justify-center z-50 p-6 pointer-events-none"
//             >
//               <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden pointer-events-auto transform-gpu relative"
//                 style={{ 
//                   background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(245,248,255,0.95) 100%)',
//                   backdropFilter: 'blur(10px)',
//                   border: '1px solid rgba(255,255,255,0.2)',
//                 }}>
//                 {/* Header */}
//                 <div className="relative p-6 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-blue-50">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-4">
//                       <motion.div
//                         initial={{ scale: 0, rotate: -180 }}
//                         animate={{ scale: 1, rotate: 0 }}
//                         transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
//                       >
//                         <img
//                           src={
//                             selectedEmployee.image
//                               ? `http://localhost:5004/uploads/${selectedEmployee.image}`
//                               : `http://localhost:5004/uploads/em.jpg`
//                           }
//                           alt={`${selectedEmployee.name}'s profile`}
//                           className="w-20 h-20 rounded-full border-4 border-indigo-500 object-cover shadow-lg transition-transform hover:scale-105"
//                           onError={(e) => {
//                             e.target.src = 'https://via.placeholder.com/150?text=Profile';
//                           }}
//                         />
//                       </motion.div>
//                       <div>
//                         <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
//                           {selectedEmployee.name}
//                         </h3>
//                         <p className="text-sm font-medium text-gray-600 flex items-center gap-1">
//                           <Briefcase size={14} className="text-green-500" /> 
//                           {selectedEmployee.role || "N/A"}
//                         </p>
//                         <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
//                           <FileText size={12} className="text-orange-500" /> 
//                           ID: {selectedEmployee.employeeId}
//                         </p>
//                       </div>
//                     </div>
//                     <motion.button
//                       whileHover={{ scale: 1.1, rotate: 90 }}
//                       whileTap={{ scale: 0.9 }}
//                       onClick={() => setSelectedEmployee(null)}
//                       className="text-gray-500 hover:text-gray-700 p-2 rounded-full bg-white/80 hover:bg-gray-100 transition-all duration-200 shadow-sm"
//                     >
//                       <X size={24} />
//                     </motion.button>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 overflow-y-auto max-h-[60vh] scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-transparent bg-gray-50/50">
//                   <motion.div 
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2 }}
//                     className="space-y-3"
//                   >
//                     {Object.entries(selectedEmployee).map(([key, value]) => (
//                       key !== "image" && key !== "_id" && key !== "__v" && key !== "name" && key !== "role" && key !== "employeeId" && (
//                         <motion.div
//                           key={key}
//                           initial={{ opacity: 0, x: -20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ delay: 0.3 + (Object.keys(selectedEmployee).indexOf(key) * 0.05) }}
//                           className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-transparent hover:border-l-indigo-400"
//                         >
//                           <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200">
//                             {fieldIcons[key] || <User className="text-gray-500" />}
//                           </div>
//                           <div className="flex-1">
//                             <p className="text-sm font-semibold text-gray-700 capitalize">
//                               {key.replace(/([A-Z])/g, ' $1').trim()}
//                             </p>
//                             <div className="mt-1 text-gray-800">
//                               {Array.isArray(value) ? (
//                                 value.length > 0 ? (
//                                   <div className="space-y-2 max-h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-200">
//                                     {value.map((item, idx) => (
//                                       <div key={idx} className="text-sm bg-indigo-50 p-2 rounded-md flex items-center gap-2">
//                                         <TrendingUp size={14} className="text-lime-500" />
//                                         {typeof item === 'object' ? JSON.stringify(item) : item}
//                                       </div>
//                                     ))}
//                                   </div>
//                                 ) : (
//                                   <span className="text-sm text-gray-500 italic">None</span>
//                                 )
//                               ) : (
//                                 <span className="text-sm font-medium">
//                                   {key === "salary" && value ? `$${value}` : value || "N/A"}
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                         </motion.div>
//                       )
//                     ))}
//                   </motion.div>
//                 </div>

//                 {/* Footer */}
//                 <div className="p-6 border-t border-gray-100 bg-gradient-to-t from-gray-50 to-transparent">
//                   <div className="flex justify-between gap-4">
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => handleEditEmployee(selectedEmployee)}
//                       className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
//                     >
//                       <Edit size={18} /> Edit Profile
//                     </motion.button>
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => setSelectedEmployee(null)}
//                       className="flex-1 bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-blue-600 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
//                     >
//                       <X size={18} /> Close Profile
//                     </motion.button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default EmployeeManagement;
import React, { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { StoreContext } from "./StoreContext";
import {
  User, Briefcase, DollarSign, Clock, Phone, Home,
  Calendar, FileText, Edit, Trash, X, Search,
  Plus, ChevronDown, Award, Layers, CreditCard, TrendingUp,
  Mail, MapPin
} from "react-feather";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, CartesianGrid
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";

const EmployeeManagement = () => {
  const { storeId } = useContext(StoreContext);
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newEmployee, setNewEmployee] = useState({
    name: "", role: "", salary: "", shifts: "", contact: "", address: "",
    dateOfJoining: "", employeeId: "", experience: "", image: null,
    salaryInterval: "monthly", attendance: [],
  });
  const [editEmployeeId, setEditEmployeeId] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("list");
  const [showForm, setShowForm] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: "", type: "" });
  const [showImageViewer, setShowImageViewer] = useState(false);
  const formRef = useRef(null);

  const RupeeSign = ({ size = 24, className = "text-yellow-500" }) => (
    <span
      style={{
        fontSize: `${size}px`,
        fontWeight: "bold",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className={className}
    >
      ₹
    </span>
  );
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: "-50%" },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 25,
        duration: 0.3 
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: "-50%",
      transition: { duration: 0.2 } 
    }
  };

  const imageViewerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 20,
        duration: 0.3 
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2 } 
    }
  };

  useEffect(() => {
    if (storeId) fetchEmployees();
  }, [storeId]);

  useEffect(() => {
    const filtered = employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEmployees(filtered);
  }, [searchTerm, employees]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target) && showForm) {
        setShowForm(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showForm]);

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5004/employees", { headers: { storeId } });
      setEmployees(response.data);
      setFilteredEmployees(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching employees:", error);
      showNotification("Failed to fetch employees", "error");
      setLoading(false);
    }
  };

  const showNotification = (message, type = "success") => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: "", type: "" }), 4000);
  };

  const handleAddEmployee = async () => {
    if (!newEmployee.name || !newEmployee.employeeId) {
      showNotification("Name and Employee ID are required!", "error");
      return;
    }
    const formData = new FormData();
    Object.keys(newEmployee).forEach((key) => formData.append(key, newEmployee[key]));
    try {
      const response = await axios.post("http://localhost:5004/employees", formData, {
        headers: { storeId, "Content-Type": "multipart/form-data" },
      });
      setEmployees([...employees, response.data]);
      resetForm();
      showNotification("Employee added successfully!");
      setShowForm(false);
    } catch (error) {
      console.error("Error adding employee:", error);
      showNotification("Failed to add employee", "error");
    }
  };

  const handleUpdateEmployee = async () => {
    if (!editEmployeeId) return;
    const formData = new FormData();
    if (newEmployee.image instanceof File) {
      formData.append("image", newEmployee.image);
    } else {
      formData.append("existingImage", newEmployee.image);
    }
    Object.keys(newEmployee).forEach((key) => {
      if (key !== "image" || newEmployee[key] instanceof File) {
        formData.append(key, newEmployee[key]);
      }
    });
    try {
      await axios.put(`http://localhost:5004/employees/${editEmployeeId}`, formData, {
        headers: { storeId, "Content-Type": "multipart/form-data" },
      });
      showNotification("Employee updated successfully!");
      resetForm();
      fetchEmployees();
      setShowForm(false);
    } catch (error) {
      console.error("Error updating employee:", error);
      showNotification("Failed to update employee", "error");
    }
  };

  const handleDeleteEmployee = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;
    try {
      await axios.delete(`http://localhost:5004/employees/${id}`, { headers: { storeId } });
      showNotification("Employee deleted successfully!");
      fetchEmployees();
      if (selectedEmployee && selectedEmployee._id === id) setSelectedEmployee(null);
    } catch (error) {
      console.error("Error deleting employee:", error);
      showNotification("Failed to delete employee", "error");
    }
  };

  const handleEditEmployee = (employee) => {
    setEditEmployeeId(employee._id);
    setNewEmployee({
      name: employee.name, role: employee.role, salary: employee.salary,
      shifts: employee.shifts, contact: employee.contact, address: employee.address,
      dateOfJoining: employee.dateOfJoining, employeeId: employee.employeeId,
      experience: employee.experience, image: employee.image || null,
      salaryInterval: employee.salaryInterval || "monthly", attendance: employee.attendance || [],
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setEditEmployeeId(null);
    setNewEmployee({
      name: "", role: "", salary: "", shifts: "", contact: "", address: "",
      dateOfJoining: "", employeeId: "", experience: "", image: null,
      salaryInterval: "monthly", attendance: [],
    });
  };

  const calculateSalary = (employee) => {
    const { salary, salaryInterval, attendance } = employee;
    const baseSalary = parseFloat(salary) || 0;
    switch (salaryInterval) {
      case "daily": return (baseSalary / 30) * attendance.length;
      case "weekly": return (baseSalary / 4) * (attendance.length / 7);
      case "monthly": return baseSalary;
      default: return baseSalary;
    }
  };

  const renderFormField = (key, icon, placeholder, type = "text") => (
    <motion.div variants={itemVariants} className="relative">
      <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-500 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
        <span className="text-gray-400 mr-2">{icon}</span>
        {type === "file" ? (
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNewEmployee({ ...newEmployee, image: e.target.files[0] })}
            className="w-full focus:outline-none"
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            value={newEmployee[key] || ""}
            onChange={(e) => setNewEmployee({ ...newEmployee, [key]: e.target.value })}
            className="w-full focus:outline-none"
          />
        )}
      </div>
    </motion.div>
  );

  const fieldIcons = {
    name: <User className="text-indigo-500" />,
    role: <Briefcase className="text-green-500" />,
    salary: <DollarSign className="text-yellow-500" />,
    shifts: <Clock className="text-purple-500" />,
    contact: <Phone className="text-blue-500" />,
    address: <MapPin className="text-red-500" />,
    dateOfJoining: <Calendar className="text-teal-500" />,
    employeeId: <FileText className="text-orange-500" />,
    experience: <Award className="text-pink-500" />,
    salaryInterval: <Clock className="text-cyan-500" />,
    attendance: <TrendingUp className="text-lime-500" />,
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <AnimatePresence>
        {notification.show && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
              notification.type === "error" ? "bg-red-500" : "bg-green-500"
            } text-white`}
          >
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center mb-6"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Employee Management</h1>
          <p className="text-gray-500">Manage your retail store workforce</p>
        </div>
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { resetForm(); setShowForm(true); }}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center gap-2 shadow-md"
          >
            <Plus size={18} /> Add Employee
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex mb-6 bg-white rounded-lg shadow-md"
      >
        <button
          onClick={() => setActiveTab("list")}
          className={`px-6 py-3 flex items-center gap-2 ${
            activeTab === "list" ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold" : "text-gray-500 hover:text-gray-700"
          } transition-all duration-200`}
        >
          <Layers size={18} /> Employee List
        </button>
        <button
          onClick={() => setActiveTab("analytics")}
          className={`px-6 py-3 flex items-center gap-2 ${
            activeTab === "analytics" ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold" : "text-gray-500 hover:text-gray-700"
          } transition-all duration-200`}
        >
          <BarChart size={18} /> Analytics
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-lg shadow-md p-4 mb-6 flex"
      >
        <div className="relative flex-grow">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search by name, role, or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          />
        </div>
      </motion.div>

      <AnimatePresence>
        {showForm && (
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200 relative z-10"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-700">
                {editEmployeeId ? "Edit Employee" : "Add New Employee"}
              </h2>
              <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderFormField("name", <User size={20} />, "Full Name")}
              {renderFormField("employeeId", <FileText size={20} />, "Employee ID")}
              {renderFormField("role", <Briefcase size={20} />, "Role/Position")}
              {renderFormField("salary", <DollarSign size={20} />, "Salary", "number")}
              {renderFormField("shifts", <Clock size={20} />, "Work Shifts")}
              {renderFormField("experience", <Award size={20} />, "Experience (years)")}
              {renderFormField("contact", <Phone size={20} />, "Contact Number")}
              {renderFormField("address", <Home size={20} />, "Address")}
              {renderFormField("dateOfJoining", <Calendar size={20} />, "Date of Joining", "date")}
              {renderFormField("salaryInterval", <Clock size={20} />, "Salary Interval", "select")}
              <motion.div variants={itemVariants} className="relative">
                <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-500 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
                  <User size={20} className="text-gray-400 mr-2" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setNewEmployee({ ...newEmployee, image: e.target.files[0] })}
                    className="w-full focus:outline-none"
                  />
                </div>
              </motion.div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex gap-4 mt-6">
              <button
                onClick={editEmployeeId ? handleUpdateEmployee : handleAddEmployee}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center gap-2 shadow-md"
              >
                {editEmployeeId ? <Edit size={18} /> : <User size={18} />}
                {editEmployeeId ? "Update Employee" : "Add Employee"}
              </button>
              {editEmployeeId && (
                <button
                  onClick={resetForm}
                  className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-200 flex items-center gap-2 shadow-md"
                >
                  <X size={18} /> Cancel
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {activeTab === "list" ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
              </div>
            ) : filteredEmployees.length === 0 ? (
              <div className="text-center py-10">
                <div className="mx-auto text-gray-300 mb-4"><User size={48} /></div>
                <h3 className="text-xl font-medium text-gray-700">No employees found</h3>
                <p className="text-gray-500 mt-2">Add new employees or try a different search term</p>
              </div>
            ) : (
              <motion.div 
                variants={containerVariants} 
                initial="hidden" 
                animate="visible" 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredEmployees.map((employee) => (
                  <motion.div
                    key={employee._id}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.03, 
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedEmployee(employee)}
                    className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl shadow-lg text-white cursor-pointer h-64 flex flex-col justify-center items-center relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <button
                        onClick={(e) => { e.stopPropagation(); handleEditEmployee(employee); }}
                        className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition duration-200 mr-2"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleDeleteEmployee(employee._id); }}
                        className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-200"
                      >
                        <Trash size={16} />
                      </button>
                    </div>
                    <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-white opacity-5 rounded-full"></div>
                    <div className="absolute -top-10 -left-10 h-40 w-40 bg-white opacity-5 rounded-full"></div>
                    <img
                      src={employee.image ? `http://localhost:5004/uploads/${employee.image}` : `http://localhost:5004/uploads/em.jpg`}
                      alt={`${employee.name}'s profile`}
                      className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-xl object-cover"
                    />
                    <h3 className="text-xl font-bold text-center">{employee.name}</h3>
                    <p className="text-sm text-center text-indigo-100">Role: {employee.role || "N/A"}</p>
                    <p className="text-sm text-center text-indigo-100">ID: {employee.employeeId}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="analytics"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <motion.div variants={fadeIn} initial="hidden" animate="visible" className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500">
                <div className="flex justify-between items-center">
                  <div><p className="text-sm text-gray-500">Total Employees</p><h3 className="text-2xl font-bold text-gray-800">{employees.length}</h3></div>
                  <div className="p-3 bg-indigo-100 rounded-lg"><User size={24} className="text-indigo-600" /></div>
                </div>
              </motion.div>
              <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
                <div className="flex justify-between items-center">
                  <div><p className="text-sm text-gray-500">Average Salary</p><h3 className="text-2xl font-bold text-gray-800">₹{(employees.reduce((sum, emp) => sum + (Number(emp.salary) || 0), 0) / (employees.length || 1)).toFixed(2)}</h3></div>
                  <div className="p-3 bg-green-100 rounded-lg"><RupeeSign/></div>
                </div>
              </motion.div>
              <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                <div className="flex justify-between items-center">
                  <div><p className="text-sm text-gray-500">New Hires (3 months)</p><h3 className="text-2xl font-bold text-gray-800">{employees.filter((emp) => {
                    if (!emp.dateOfJoining) return false;
                    const joinDate = new Date(emp.dateOfJoining);
                    const threeMonthsAgo = new Date();
                    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
                    return joinDate >= threeMonthsAgo;
                  }).length}</h3></div>
                  <div className="p-3 bg-blue-100 rounded-lg"><Calendar size={24} className="text-blue-600" /></div>
                </div>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Role Distribution</h3>
                {Object.keys(employees.reduce((acc, emp) => {
                  const role = emp.role || "Unspecified";
                  acc[role] = (acc[role] || 0) + 1;
                  return acc;
                }, {})).length > 0 ? (
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={Object.entries(employees.reduce((acc, emp) => {
                          const role = emp.role || "Unspecified";
                          acc[role] = (acc[role] || 0) + 1;
                          return acc;
                        }, {})).map(([name, value]) => ({ name, value }))}
                        cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#8884d8" dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {Object.entries(employees.reduce((acc, emp) => {
                          const role = emp.role || "Unspecified";
                          acc[role] = (acc[role] || 0) + 1;
                          return acc;
                        }, {})).map((_, index) => (
                          <Cell key={`cell-${index}`} fill={["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899"][index % 6]} />
                        ))}
                      </Pie>
                      <Tooltip /><Legend />
                    </PieChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="flex justify-center items-center h-64"><p className="text-gray-500">No role data available</p></div>
                )}
              </motion.div>
              <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Top 5 Salaries</h3>
                {employees.filter((emp) => emp.salary).length > 0 ? (
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={employees.filter((emp) => emp.salary).map((emp) => ({
                      name: emp.name.length > 10 ? emp.name.substring(0, 10) + "..." : emp.name,
                      salary: Number(emp.salary) || 0,
                    })).sort((a, b) => b.salary - a.salary).slice(0, 5)}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.3} /><XAxis dataKey="name" /><YAxis />
                      <Tooltip formatter={(value) => [`₹${value}`, "Salary"]} />
                      <Bar dataKey="salary" fill="#4F46E5" barSize={40} radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="flex justify-center items-center h-64"><p className="text-gray-500">No salary data available</p></div>
                )}
              </motion.div>
              <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.5 }} className="bg-white rounded-lg shadow-md p-6 col-span-1 lg:col-span-2">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Experience Overview</h3>
                {employees.filter((emp) => emp.experience).length > 0 ? (
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={employees.filter((emp) => emp.experience).map((emp) => ({
                      name: emp.name.length > 10 ? emp.name.substring(0, 10) + "..." : emp.name,
                      years: Number(emp.experience.replace(/[^0-9.]/g, "")) || 0,
                    })).sort((a, b) => b.years - a.years).slice(0, 5)}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.3} /><XAxis dataKey="name" /><YAxis />
                      <Tooltip formatter={(value) => [`${value} years`, "Experience"]} />
                      <Line type="monotone" dataKey="years" stroke="#10B981" strokeWidth={3}
                        dot={{ r: 6, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }}
                        activeDot={{ r: 8, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }} />
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="flex justify-center items-center h-64"><p className="text-gray-500">No experience data available</p></div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedEmployee && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900 bg-opacity-70 backdrop-blur-sm z-40"
          >
            {/* Background Image Layer */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
                opacity: 0.15,
                filter: 'grayscale(20%)',
              }}
            />
            {/* Fallback Gradient Layer */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-gray-800/50 to-blue-900/50"
            />

            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 flex items-center justify-center z-50 p-6 pointer-events-none"
            >
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden pointer-events-auto transform-gpu relative"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(245,248,255,0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}>
                {/* Header */}
                <div className="relative p-6 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-blue-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                      >
                        <img
                          src={
                            selectedEmployee.image
                              ? `http://localhost:5004/uploads/${selectedEmployee.image}`
                              : `http://localhost:5004/uploads/em.jpg`
                          }
                          alt={`${selectedEmployee.name}'s profile`}
                          className="w-20 h-20 rounded-full border-4 border-indigo-500 object-cover shadow-lg transition-transform hover:scale-105 cursor-pointer"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/150?text=Profile';
                          }}
                          onClick={() => setShowImageViewer(true)}
                        />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                          {selectedEmployee.name}
                        </h3>
                        <p className="text-sm font-medium text-gray-600 flex items-center gap-1">
                          <Briefcase size={14} className="text-green-500" /> 
                          {selectedEmployee.role || "N/A"}
                        </p>
                        <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                          <FileText size={12} className="text-orange-500" /> 
                          ID: {selectedEmployee.employeeId}
                        </p>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedEmployee(null)}
                      className="text-gray-500 hover:text-gray-700 p-2 rounded-full bg-white/80 hover:bg-gray-100 transition-all duration-200 shadow-sm"
                    >
                      <X size={24} />
                    </motion.button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[60vh] scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-transparent bg-gray-50/50">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-3"
                  >
                    {Object.entries(selectedEmployee).map(([key, value]) => (
                      key !== "image" && key !== "_id" && key !== "__v" && key !== "name" && key !== "role" && key !== "employeeId" && (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + (Object.keys(selectedEmployee).indexOf(key) * 0.05) }}
                          className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-transparent hover:border-l-indigo-400"
                        >
                          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200">
                            {fieldIcons[key] || <User className="text-gray-500" />}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-gray-700 capitalize">
                              {key.replace(/([A-Z])/g, ' ₹1').trim()}
                            </p>
                            <div className="mt-1 text-gray-800">
                              {Array.isArray(value) ? (
                                value.length > 0 ? (
                                  <div className="space-y-2 max-h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-200">
                                    {value.map((item, idx) => (
                                      <div key={idx} className="text-sm bg-indigo-50 p-2 rounded-md flex items-center gap-2">
                                        <TrendingUp size={14} className="text-lime-500" />
                                        {typeof item === 'object' ? JSON.stringify(item) : item}
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <span className="text-sm text-gray-500 italic">None</span>
                                )
                              ) : (
                                <span className="text-sm font-medium">
                                  {key === "salary" && value ? `$${value}` : value || "N/A"}
                                </span>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )
                    ))}
                  </motion.div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-100 bg-gradient-to-t from-gray-50 to-transparent">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedEmployee(null)}
                    className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-blue-600 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <X size={18} /> Close Profile
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Viewer */}
      <AnimatePresence>
        {showImageViewer && selectedEmployee && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-60 flex items-center justify-center"
            onClick={() => setShowImageViewer(false)}
          >
            <motion.div
              variants={imageViewerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative max-w-[90vw] max-h-[90vh] pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={
                  selectedEmployee.image
                    ? `http://localhost:5004/uploads/${selectedEmployee.image}`
                    : `http://localhost:5004/uploads/em.jpg`
                }
                alt={`${selectedEmployee.name}'s profile`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/150?text=Profile';
                }}
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowImageViewer(false)}
                className="absolute top-4 right-4 bg-white/80 text-gray-800 p-2 rounded-full hover:bg-white transition-all duration-200 shadow-md"
              >
                <X size={24} />
              </motion.button>
              <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-lg">
                {selectedEmployee.name}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmployeeManagement;