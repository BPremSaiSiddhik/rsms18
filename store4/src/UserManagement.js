// // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // import axios from 'axios';
// // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // import { useStore } from './StoreContext';  // Import the custom hook

// // // // // // // const UserManagementPage = () => {
// // // // // // //   const [users, setUsers] = useState([]);
// // // // // // //   const [error, setError] = useState(null);
// // // // // // //   const [newUser, setNewUser] = useState({
// // // // // // //     firstName: '',
// // // // // // //     lastName: '',
// // // // // // //     email: '',
// // // // // // //     phoneNumber: '',
// // // // // // //     password: '',
// // // // // // //     role: 'cashier', // default role
// // // // // // //   });
// // // // // // //   const { storeId, userId } = useStore();
// // // // // // //   const navigate = useNavigate();

// // // // // // //   // Fetch the users when the page loads
// // // // // // //   useEffect(() => {
// // // // // // //     const fetchUsers = async () => {
// // // // // // //       try {
// // // // // // //         const response = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
// // // // // // //         setUsers(response.data);
// // // // // // //       } catch (err) {
// // // // // // //         setError("Failed to fetch users.");
// // // // // // //       }
// // // // // // //     };
// // // // // // //     fetchUsers();
// // // // // // //   }, [storeId]);

// // // // // // //   // Handle Add User
// // // // // // //   const handleAddUser = async () => {
// // // // // // //     try {
// // // // // // //       const response = await axios.post("http://localhost:5014/add_user", {
// // // // // // //         ...newUser,
// // // // // // //         storeId: storeId
// // // // // // //       });
// // // // // // //       alert(response.data.message);
// // // // // // //       setNewUser({
// // // // // // //         firstName: '',
// // // // // // //         lastName: '',
// // // // // // //         email: '',
// // // // // // //         phoneNumber: '',
// // // // // // //         password: '',
// // // // // // //         role: 'cashier',
// // // // // // //       });
// // // // // // //       // Refresh the user list
// // // // // // //       const response2 = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
// // // // // // //       setUsers(response2.data);
// // // // // // //     } catch (err) {
// // // // // // //       setError("Failed to add user.");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Handle Delete User
// // // // // // //   const handleDeleteUser = async (userId) => {
// // // // // // //     try {
// // // // // // //       const response = await axios.delete("http://localhost:5014/delete_user", {
// // // // // // //         data: { storeId: storeId, userId: userId }
// // // // // // //       });
// // // // // // //       alert(response.data.message);
// // // // // // //       // Refresh the user list after deletion
// // // // // // //       const response2 = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
// // // // // // //       setUsers(response2.data);
// // // // // // //     } catch (err) {
// // // // // // //       setError("Failed to delete user.");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="user-management-container">
// // // // // // //       <h2>User Management</h2>
      
// // // // // // //       {error && <p className="error">{error}</p>}

// // // // // // //       {/* Display users */}
// // // // // // //       <div className="user-list">
// // // // // // //         <h3>User List</h3>
// // // // // // //         <table>
// // // // // // //           <thead>
// // // // // // //             <tr>
// // // // // // //               <th>Name</th>
// // // // // // //               <th>Email</th>
// // // // // // //               <th>Phone</th>
// // // // // // //               <th>Role</th>
// // // // // // //               <th>Actions</th>
// // // // // // //             </tr>
// // // // // // //           </thead>
// // // // // // //           <tbody>
// // // // // // //             {users.map((user) => (
// // // // // // //               <tr key={user.id}>
// // // // // // //                 <td>{user.firstName} {user.lastName}</td>
// // // // // // //                 <td>{user.email}</td>
// // // // // // //                 <td>{user.phoneNumber}</td>
// // // // // // //                 <td>{user.role}</td>
// // // // // // //                 <td>
// // // // // // //                   <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
// // // // // // //                 </td>
// // // // // // //               </tr>
// // // // // // //             ))}
// // // // // // //           </tbody>
// // // // // // //         </table>
// // // // // // //       </div>

// // // // // // //       {/* Add User Form */}
// // // // // // //       <div className="add-user-form">
// // // // // // //         <h3>Add User</h3>
// // // // // // //         <input 
// // // // // // //           type="text" 
// // // // // // //           placeholder="First Name" 
// // // // // // //           value={newUser.firstName} 
// // // // // // //           onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
// // // // // // //         />
// // // // // // //         <input 
// // // // // // //           type="text" 
// // // // // // //           placeholder="Last Name" 
// // // // // // //           value={newUser.lastName} 
// // // // // // //           onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
// // // // // // //         />
// // // // // // //         <input 
// // // // // // //           type="email" 
// // // // // // //           placeholder="Email" 
// // // // // // //           value={newUser.email} 
// // // // // // //           onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
// // // // // // //         />
// // // // // // //         <input 
// // // // // // //           type="text" 
// // // // // // //           placeholder="Phone Number" 
// // // // // // //           value={newUser.phoneNumber} 
// // // // // // //           onChange={(e) => setNewUser({ ...newUser, phoneNumber: e.target.value })}
// // // // // // //         />
// // // // // // //         <input 
// // // // // // //           type="password" 
// // // // // // //           placeholder="Password" 
// // // // // // //           value={newUser.password} 
// // // // // // //           onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
// // // // // // //         />
// // // // // // //         <select 
// // // // // // //           value={newUser.role} 
// // // // // // //           onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
// // // // // // //         >
// // // // // // //           <option value="cashier">Cashier</option>
// // // // // // //           <option value="manager">Manager</option>
// // // // // // //           <option value="admin">Admin</option>
// // // // // // //         </select>
// // // // // // //         <button onClick={handleAddUser}>Add User</button>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default UserManagementPage;
// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import axios from 'axios';
// // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // import { useStore } from './StoreContext';  // Import the custom hook

// // // // // // const UserManagementPage = () => {
// // // // // //   const [users, setUsers] = useState([]);
// // // // // //   const [error, setError] = useState(null);
// // // // // //   const [newUser, setNewUser] = useState({
// // // // // //     firstName: '',
// // // // // //     lastName: '',
// // // // // //     email: '',
// // // // // //     phoneNumber: '',
// // // // // //     password: '',
// // // // // //     role: 'cashier', // default role
// // // // // //   });
// // // // // //   const { storeId, userId } = useStore();
// // // // // //   const navigate = useNavigate();

// // // // // //   // Fetch the users when the page loads
// // // // // //   useEffect(() => {
// // // // // //     const fetchUsers = async () => {
// // // // // //       try {
// // // // // //         const response = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
// // // // // //         setUsers(response.data);
// // // // // //       } catch (err) {
// // // // // //         setError("Failed to fetch users.");
// // // // // //       }
// // // // // //     };
// // // // // //     fetchUsers();
// // // // // //   }, [storeId]);

// // // // // //   // Handle Add User
// // // // // //   const handleAddUser = async () => {
// // // // // //     try {
// // // // // //       const response = await axios.post("http://localhost:5014/add_user", {
// // // // // //         ...newUser,
// // // // // //         storeId: storeId
// // // // // //       });
// // // // // //       alert(response.data.message);
// // // // // //       setNewUser({
// // // // // //         firstName: '',
// // // // // //         lastName: '',
// // // // // //         email: '',
// // // // // //         phoneNumber: '',
// // // // // //         password: '',
// // // // // //         role: 'cashier',
// // // // // //       });
// // // // // //       // Refresh the user list
// // // // // //       const response2 = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
// // // // // //       setUsers(response2.data);
// // // // // //     } catch (err) {
// // // // // //       setError("Failed to add user.");
// // // // // //     }
// // // // // //   };

// // // // // //   // Handle Delete User
// // // // // //   const handleDeleteUser = async (userId) => {
// // // // // //     try {
// // // // // //       const response = await axios.delete("http://localhost:5014/delete_user", {
// // // // // //         data: { storeId: storeId, userId: userId }
// // // // // //       });
// // // // // //       alert(response.data.message);
// // // // // //       // Refresh the user list after deletion
// // // // // //       const response2 = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
// // // // // //       setUsers(response2.data);
// // // // // //     } catch (err) {
// // // // // //       setError("Failed to delete user.");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="p-6">
// // // // // //       <h2 className="text-3xl font-bold mb-6">User Management</h2>

// // // // // //       {/* Error Handling */}
// // // // // //       {error && <p className="text-red-500 mb-4">{error}</p>}

// // // // // //       {/* User List */}
// // // // // //       <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
// // // // // //         <h3 className="text-2xl font-semibold p-4 border-b">User List</h3>
// // // // // //         <table className="min-w-full table-auto">
// // // // // //           <thead>
// // // // // //             <tr className="bg-gray-100">
// // // // // //               <th className="p-4 text-left text-sm font-medium text-gray-700">Name</th>
// // // // // //               <th className="p-4 text-left text-sm font-medium text-gray-700">Email</th>
// // // // // //               <th className="p-4 text-left text-sm font-medium text-gray-700">Phone</th>
// // // // // //               <th className="p-4 text-left text-sm font-medium text-gray-700">Role</th>
// // // // // //               <th className="p-4 text-left text-sm font-medium text-gray-700">Actions</th>
// // // // // //             </tr>
// // // // // //           </thead>
// // // // // //           <tbody>
// // // // // //             {users.map((user) => (
// // // // // //               <tr key={user.id} className="border-b">
// // // // // //                 <td className="p-4">{user.firstName} {user.lastName}</td>
// // // // // //                 <td className="p-4">{user.email}</td>
// // // // // //                 <td className="p-4">{user.phoneNumber}</td>
// // // // // //                 <td className="p-4">{user.role}</td>
// // // // // //                 <td className="p-4">
// // // // // //                   <button
// // // // // //                     className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
// // // // // //                     onClick={() => handleDeleteUser(user.id)}
// // // // // //                   >
// // // // // //                     Delete
// // // // // //                   </button>
// // // // // //                 </td>
// // // // // //               </tr>
// // // // // //             ))}
// // // // // //           </tbody>
// // // // // //         </table>
// // // // // //       </div>

// // // // // //       {/* Add User Form */}
// // // // // //       <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
// // // // // //         <h3 className="text-2xl font-semibold mb-4">Add User</h3>

// // // // // //         <input
// // // // // //           type="text"
// // // // // //           placeholder="First Name"
// // // // // //           value={newUser.firstName}
// // // // // //           onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
// // // // // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // // // // //         />
// // // // // //         <input
// // // // // //           type="text"
// // // // // //           placeholder="Last Name"
// // // // // //           value={newUser.lastName}
// // // // // //           onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
// // // // // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // // // // //         />
// // // // // //         <input
// // // // // //           type="email"
// // // // // //           placeholder="Email"
// // // // // //           value={newUser.email}
// // // // // //           onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
// // // // // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // // // // //         />
// // // // // //         <input
// // // // // //           type="text"
// // // // // //           placeholder="Phone Number"
// // // // // //           value={newUser.phoneNumber}
// // // // // //           onChange={(e) => setNewUser({ ...newUser, phoneNumber: e.target.value })}
// // // // // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // // // // //         />
// // // // // //         <input
// // // // // //           type="password"
// // // // // //           placeholder="Password"
// // // // // //           value={newUser.password}
// // // // // //           onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
// // // // // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // // // // //         />
// // // // // //         <select
// // // // // //           value={newUser.role}
// // // // // //           onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
// // // // // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // // // // //         >
// // // // // //           <option value="cashier">Cashier</option>
// // // // // //           <option value="manager">Manager</option>
// // // // // //           <option value="admin">Admin</option>
// // // // // //         </select>
// // // // // //         <button
// // // // // //           onClick={handleAddUser}
// // // // // //           className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
// // // // // //         >
// // // // // //           Add User
// // // // // //         </button>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default UserManagementPage;


// // // // // import React, { useEffect, useState } from "react";
// // // // // import axios from 'axios';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import { useStore } from './StoreContext';  // Import the custom hook

// // // // // const UserManagementPage = () => {
// // // // //   const [users, setUsers] = useState([]);
// // // // //   const [error, setError] = useState(null);
// // // // //   const [newUser, setNewUser] = useState({
// // // // //     firstName: '',
// // // // //     lastName: '',
// // // // //     email: '',
// // // // //     phoneNumber: '',
// // // // //     password: '',
// // // // //     role: 'cashier', // default role
// // // // //   });
// // // // //   const { storeId, userId } = useStore();
// // // // //   const navigate = useNavigate();

// // // // //   // Fetch the users when the page loads
// // // // //   useEffect(() => {
// // // // //     const fetchUsers = async () => {
// // // // //       try {
// // // // //         // Fetch the users data
// // // // //         const response = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
// // // // //         console.log("Fetched users:", response.data);  // Log the fetched data for debugging
        
// // // // //         // Ensure that response data is an array before setting it
// // // // //         if (Array.isArray(response.data)) {
// // // // //           setUsers(response.data);
// // // // //         } else {
// // // // //           setError("No users found.");
// // // // //         }
// // // // //       } catch (err) {
// // // // //         setError("Failed to fetch users.");
// // // // //         console.error(err);  // Log error to the console for debugging
// // // // //       }
// // // // //     };
// // // // //     fetchUsers();
// // // // //   }, [storeId]);

// // // // //   // Handle Add User
// // // // //   const handleAddUser = async () => {
// // // // //     try {
// // // // //       const response = await axios.post("http://localhost:5014/add_user", {
// // // // //         ...newUser,
// // // // //         storeId: storeId
// // // // //       });
// // // // //       alert(response.data.message);

// // // // //       // Reset the form
// // // // //       setNewUser({
// // // // //         firstName: '',
// // // // //         lastName: '',
// // // // //         email: '',
// // // // //         phoneNumber: '',
// // // // //         password: '',
// // // // //         role: 'cashier',
// // // // //       });

// // // // //       // Refresh the user list
// // // // //       const response2 = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
// // // // //       setUsers(response2.data);
// // // // //     } catch (err) {
// // // // //       setError("Failed to add user.");
// // // // //       console.error(err);
// // // // //     }
// // // // //   };

// // // // //   // Handle Delete User
// // // // //   const handleDeleteUser = async (userId) => {
// // // // //     try {
// // // // //       const response = await axios.delete("http://localhost:5014/delete_user", {
// // // // //         data: { storeId: storeId, userId: userId }
// // // // //       });
// // // // //       alert(response.data.message);

// // // // //       // Refresh the user list after deletion
// // // // //       const response2 = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
// // // // //       setUsers(response2.data);
// // // // //     } catch (err) {
// // // // //       setError("Failed to delete user.");
// // // // //       console.error(err);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="p-6">
// // // // //       <h2 className="text-3xl font-bold mb-6">User Management</h2>

// // // // //       {/* Error Handling */}
// // // // //       {error && <p className="text-red-500 mb-4">{error}</p>}

// // // // //       {/* User List */}
// // // // //       <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
// // // // //         <h3 className="text-2xl font-semibold p-4 border-b">User List</h3>
// // // // //         {/* Display user list only if there are users */}
// // // // //         {users.length === 0 ? (
// // // // //           <p className="p-4">No users found.</p>
// // // // //         ) : (
// // // // //           <table className="min-w-full table-auto">
// // // // //             <thead>
// // // // //               <tr className="bg-gray-100">
// // // // //                 <th className="p-4 text-left text-sm font-medium text-gray-700">Name</th>
// // // // //                 <th className="p-4 text-left text-sm font-medium text-gray-700">Email</th>
// // // // //                 <th className="p-4 text-left text-sm font-medium text-gray-700">Phone</th>
// // // // //                 <th className="p-4 text-left text-sm font-medium text-gray-700">Role</th>
// // // // //                 <th className="p-4 text-left text-sm font-medium text-gray-700">Actions</th>
// // // // //               </tr>
// // // // //             </thead>
// // // // //             <tbody>
// // // // //               {users.map((user) => (
// // // // //                 <tr key={user.id} className="border-b">
// // // // //                   <td className="p-4">{user.firstName} {user.lastName}</td>
// // // // //                   <td className="p-4">{user.email}</td>
// // // // //                   <td className="p-4">{user.phoneNumber}</td>
// // // // //                   <td className="p-4">{user.role}</td>
// // // // //                   <td className="p-4">
// // // // //                     <button
// // // // //                       className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
// // // // //                       onClick={() => handleDeleteUser(user.id)}
// // // // //                     >
// // // // //                       Delete
// // // // //                     </button>
// // // // //                   </td>
// // // // //                 </tr>
// // // // //               ))}
// // // // //             </tbody>
// // // // //           </table>
// // // // //         )}
// // // // //       </div>

// // // // //       {/* Add User Form */}
// // // // //       <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
// // // // //         <h3 className="text-2xl font-semibold mb-4">Add User</h3>

// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="First Name"
// // // // //           value={newUser.firstName}
// // // // //           onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
// // // // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // // // //         />
// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="Last Name"
// // // // //           value={newUser.lastName}
// // // // //           onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
// // // // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // // // //         />
// // // // //         <input
// // // // //           type="email"
// // // // //           placeholder="Email"
// // // // //           value={newUser.email}
// // // // //           onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
// // // // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // // // //         />
// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="Phone Number"
// // // // //           value={newUser.phoneNumber}
// // // // //           onChange={(e) => setNewUser({ ...newUser, phoneNumber: e.target.value })}
// // // // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // // // //         />
// // // // //         <input
// // // // //           type="password"
// // // // //           placeholder="Password"
// // // // //           value={newUser.password}
// // // // //           onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
// // // // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // // // //         />
// // // // //         <select
// // // // //           value={newUser.role}
// // // // //           onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
// // // // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // // // //         >
// // // // //           <option value="cashier">Cashier</option>
// // // // //           <option value="manager">Manager</option>
// // // // //           <option value="admin">Admin</option>
// // // // //         </select>
// // // // //         <button
// // // // //           onClick={handleAddUser}
// // // // //           className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
// // // // //         >
// // // // //           Add User
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default UserManagementPage;

// // // // import React, { useEffect, useState } from "react";
// // // // import axios from 'axios';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import { useStore } from './StoreContext';  // Import the custom hook

// // // // const UserManagementPage = () => {
// // // //   const [users, setUsers] = useState([]);
// // // //   const [error, setError] = useState(null);
// // // //   const [newUser, setNewUser] = useState({
// // // //     firstName: '',
// // // //     lastName: '',
// // // //     email: '',
// // // //     phoneNumber: '',
// // // //     password: '',
// // // //     role: 'cashier', // default role
// // // //     idno: '' // New field for employee ID
// // // //   });
// // // //   const { storeId, userId } = useStore();
// // // //   const navigate = useNavigate();

// // // //   // Fetch the users when the page loads
// // // //   useEffect(() => {
// // // //     const fetchUsers = async () => {
// // // //       try {
// // // //         // Fetch the users data
// // // //         const response = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
// // // //         console.log("Fetched users:", response.data);  // Log the fetched data for debugging
        
// // // //         // Ensure that response data is an array before setting it
// // // //         if (Array.isArray(response.data)) {
// // // //           setUsers(response.data);
// // // //         } else {
// // // //           setError("No users found.");
// // // //         }
// // // //       } catch (err) {
// // // //         setError("Failed to fetch users.");
// // // //         console.error(err);  // Log error to the console for debugging
// // // //       }
// // // //     };
// // // //     fetchUsers();
// // // //   }, [storeId]);

// // // //   // Handle Add User
// // // //   const handleAddUser = async () => {
// // // //     try {
// // // //       const response = await axios.post("http://localhost:5014/add_user", {
// // // //         ...newUser,
// // // //         storeId: storeId
// // // //       });
// // // //       alert(response.data.message);

// // // //       // Reset the form
// // // //       setNewUser({
// // // //         firstName: '',
// // // //         lastName: '',
// // // //         email: '',
// // // //         phoneNumber: '',
// // // //         password: '',
// // // //         role: 'cashier',
// // // //         idno: ''  // Reset idno field
// // // //       });

// // // //       // Refresh the user list
// // // //       const response2 = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
// // // //       setUsers(response2.data);
// // // //     } catch (err) {
// // // //       setError("Failed to add user.");
// // // //       console.error(err);
// // // //     }
// // // //   };

// // // //   // Handle Delete User
// // // //   const handleDeleteUser = async (userId) => {
// // // //     try {
// // // //       const response = await axios.delete("http://localhost:5014/delete_user", {
// // // //         data: { storeId: storeId, userId: userId }
// // // //       });
// // // //       alert(response.data.message);

// // // //       // Refresh the user list after deletion
// // // //       const response2 = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
// // // //       setUsers(response2.data);
// // // //     } catch (err) {
// // // //       setError("Failed to delete user.");
// // // //       console.error(err);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="p-6">
// // // //       <h2 className="text-3xl font-bold mb-6">User Management</h2>

// // // //       {/* Error Handling */}
// // // //       {error && <p className="text-red-500 mb-4">{error}</p>}

// // // //       {/* User List */}
// // // //       <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
// // // //         <h3 className="text-2xl font-semibold p-4 border-b">User List</h3>
// // // //         {/* Display user list only if there are users */}
// // // //         {users.length === 0 ? (
// // // //           <p className="p-4">No users found.</p>
// // // //         ) : (
// // // //           <table className="min-w-full table-auto">
// // // //             <thead>
// // // //               <tr className="bg-gray-100">
// // // //                 <th className="p-4 text-left text-sm font-medium text-gray-700">Name</th>
// // // //                 <th className="p-4 text-left text-sm font-medium text-gray-700">Email</th>
// // // //                 <th className="p-4 text-left text-sm font-medium text-gray-700">Phone</th>
// // // //                 <th className="p-4 text-left text-sm font-medium text-gray-700">Role</th>
// // // //                 <th className="p-4 text-left text-sm font-medium text-gray-700">Actions</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {users.map((user) => (
// // // //                 <tr key={user.idno} className="border-b">
// // // //                   <td className="p-4">{user.firstName} {user.lastName}</td>
// // // //                   <td className="p-4">{user.email}</td>
// // // //                   <td className="p-4">{user.phoneNumber}</td>
// // // //                   <td className="p-4">{user.role}</td>
// // // //                   <td className="p-4">
// // // //                     <button
// // // //                       className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
// // // //                       onClick={() => handleDeleteUser(user.idno)}  // Delete by idno
// // // //                     >
// // // //                       Delete
// // // //                     </button>
// // // //                   </td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         )}
// // // //       </div>

// // // //       {/* Add User Form */}
// // // //       <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
// // // //         <h3 className="text-2xl font-semibold mb-4">Add User</h3>

// // // //         <input
// // // //           type="text"
// // // //           placeholder="First Name"
// // // //           value={newUser.firstName}
// // // //           onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
// // // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // // //         />
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Last Name"
// // // //           value={newUser.lastName}
// // // //           onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
// // // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // // //         />
// // // //         <input
// // // //           type="email"
// // // //           placeholder="Email"
// // // //           value={newUser.email}
// // // //           onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
// // // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // // //         />
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Phone Number"
// // // //           value={newUser.phoneNumber}
// // // //           onChange={(e) => setNewUser({ ...newUser, phoneNumber: e.target.value })}
// // // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // // //         />
// // // //         <input
// // // //           type="password"
// // // //           placeholder="Password"
// // // //           value={newUser.password}
// // // //           onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
// // // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // // //         />
// // // //         <select
// // // //           value={newUser.role}
// // // //           onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
// // // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // // //         >
// // // //           <option value="cashier">Cashier</option>
// // // //           <option value="manager">Manager</option>
// // // //           <option value="admin">Admin</option>
// // // //         </select>
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Employee ID (idno)"
// // // //           value={newUser.idno}
// // // //           onChange={(e) => setNewUser({ ...newUser, idno: e.target.value })}
// // // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // // //         />
// // // //         <button
// // // //           onClick={handleAddUser}
// // // //           className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
// // // //         >
// // // //           Add User
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default UserManagementPage;
// // // import React, { useEffect, useState } from "react";
// // // import axios from 'axios';
// // // import { useNavigate } from 'react-router-dom';
// // // import { useStore } from './StoreContext';  // Import the custom hook

// // // const UserManagementPage = () => {
// // //   const [users, setUsers] = useState([]);
// // //   const [error, setError] = useState(null);
// // //   const [newUser, setNewUser] = useState({
// // //     firstName: '',
// // //     lastName: '',
// // //     email: '',
// // //     phoneNumber: '',
// // //     password: '',
// // //     role: 'cashier', // default role
// // //     idno: '' // New field for employee ID
// // //   });
// // //   const { storeId, userId } = useStore();
// // //   const navigate = useNavigate();

// // //   // Fetch the users when the page loads
// // //   useEffect(() => {
// // //     const fetchUsers = async () => {
// // //       if (!storeId) {
// // //         setError("Store ID is not available.");
// // //         return;
// // //       }
      
// // //       try {
// // //         // Fetch the users data
// // //         const response = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
// // //         console.log("Fetched users:", response.data);  // Log the fetched data for debugging
        
// // //         // Ensure that response data is an array before setting it
// // //         if (Array.isArray(response.data)) {
// // //           setUsers(response.data);
// // //         } else {
// // //           setError("No users found.");
// // //         }
// // //       } catch (err) {
// // //         setError("Failed to fetch users.");
// // //         console.error(err);  // Log error to the console for debugging
// // //       }
// // //     };

// // //     fetchUsers();
// // //   }, [storeId]);

// // //   // Handle Add User
// // //   const handleAddUser = async () => {
// // //     try {
// // //       const response = await axios.post("http://localhost:5014/add_user", {
// // //         ...newUser,
// // //         storeId: storeId
// // //       });
// // //       alert(response.data.message);

// // //       // Reset the form
// // //       setNewUser({
// // //         firstName: '',
// // //         lastName: '',
// // //         email: '',
// // //         phoneNumber: '',
// // //         password: '',
// // //         role: 'cashier',
// // //         idno: ''  // Reset idno field
// // //       });

// // //       // Refresh the user list
// // //       const response2 = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
// // //       setUsers(response2.data);
// // //     } catch (err) {
// // //       setError("Failed to add user.");
// // //       console.error(err);
// // //     }
// // //   };

// // //   // Handle Delete User
// // //   const handleDeleteUser = async (userId) => {
// // //     try {
// // //       const response = await axios.delete("http://localhost:5014/delete_user", {
// // //         data: { storeId: storeId, userId: userId }
// // //       });
// // //       alert(response.data.message);

// // //       // Refresh the user list after deletion
// // //       const response2 = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
// // //       setUsers(response2.data);
// // //     } catch (err) {
// // //       setError("Failed to delete user.");
// // //       console.error(err);
// // //     }
// // //   };

// // //   return (
// // //     <div className="p-6">
// // //       <h2 className="text-3xl font-bold mb-6">User Management</h2>

// // //       {/* Error Handling */}
// // //       {error && <p className="text-red-500 mb-4">{error}</p>}

// // //       {/* User List */}
// // //       <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
// // //         <h3 className="text-2xl font-semibold p-4 border-b">User List</h3>
// // //         {/* Display user list only if there are users */}
// // //         {users.length === 0 ? (
// // //           <p className="p-4">No users found.</p>
// // //         ) : (
// // //           <table className="min-w-full table-auto">
// // //             <thead>
// // //               <tr className="bg-gray-100">
// // //                 <th className="p-4 text-left text-sm font-medium text-gray-700">Name</th>
// // //                 <th className="p-4 text-left text-sm font-medium text-gray-700">Email</th>
// // //                 <th className="p-4 text-left text-sm font-medium text-gray-700">Phone</th>
// // //                 <th className="p-4 text-left text-sm font-medium text-gray-700">Role</th>
// // //                 <th className="p-4 text-left text-sm font-medium text-gray-700">Actions</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {users.map((user) => (
// // //                 <tr key={user.idno} className="border-b">
// // //                   <td className="p-4">{user.firstName} {user.lastName}</td>
// // //                   <td className="p-4">{user.email}</td>
// // //                   <td className="p-4">{user.phoneNumber}</td>
// // //                   <td className="p-4">{user.role}</td>
// // //                   <td className="p-4">
// // //                     <button
// // //                       className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
// // //                       onClick={() => handleDeleteUser(user.idno)}  // Delete by idno
// // //                     >
// // //                       Delete
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         )}
// // //       </div>

// // //       {/* Add User Form */}
// // //       <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
// // //         <h3 className="text-2xl font-semibold mb-4">Add User</h3>

// // //         <input
// // //           type="text"
// // //           placeholder="First Name"
// // //           value={newUser.firstName}
// // //           onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
// // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // //         />
// // //         <input
// // //           type="text"
// // //           placeholder="Last Name"
// // //           value={newUser.lastName}
// // //           onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
// // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // //         />
// // //         <input
// // //           type="email"
// // //           placeholder="Email"
// // //           value={newUser.email}
// // //           onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
// // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // //         />
// // //         <input
// // //           type="text"
// // //           placeholder="Phone Number"
// // //           value={newUser.phoneNumber}
// // //           onChange={(e) => setNewUser({ ...newUser, phoneNumber: e.target.value })}
// // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // //         />
// // //         <input
// // //           type="password"
// // //           placeholder="Password"
// // //           value={newUser.password}
// // //           onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
// // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // //         />
// // //         <select
// // //           value={newUser.role}
// // //           onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
// // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // //         >
// // //           <option value="cashier">Cashier</option>
// // //           <option value="manager">Manager</option>
// // //           <option value="admin">Admin</option>
// // //         </select>
// // //         <input
// // //           type="text"
// // //           placeholder="Employee ID (idno)"
// // //           value={newUser.idno}
// // //           onChange={(e) => setNewUser({ ...newUser, idno: e.target.value })}
// // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // //         />
// // //         <button
// // //           onClick={handleAddUser}
// // //           className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
// // //         >
// // //           Add User
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default UserManagementPage;
// // // import React, { useEffect, useState } from "react";
// // // import axios from 'axios';
// // // import { useNavigate } from 'react-router-dom';
// // // import { useStore } from './StoreContext';  // Import the custom hook

// // // const UserManagementPage = () => {
// // //   const [users, setUsers] = useState([]);
// // //   const [error, setError] = useState(null);
// // //   const [newUser, setNewUser] = useState({
// // //     firstName: '',
// // //     lastName: '',
// // //     email: '',
// // //     phoneNumber: '',
// // //     password: '',
// // //     role: 'cashier', // default role
// // //     idno: '' // New field for employee ID
// // //   });
// // //   const { storeId, userId } = useStore();  // Get storeId and userId from StoreContext
// // //   const navigate = useNavigate();

// // //   // Check if storeId is available
// // //   useEffect(() => {
// // //     if (!storeId) {
// // //       setError("Store ID is not available.");
// // //       console.log("Store ID is not available:", storeId);  // Log to console for debugging
// // //       return;
// // //     }

// // //     const fetchUsers = async () => {
// // //       try {
// // //         // Fetch the users data
// // //         const response = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
// // //         console.log("Fetched users:", response.data);  // Log the fetched data for debugging
        
// // //         // Ensure that response data is an array before setting it
// // //         if (Array.isArray(response.data)) {
// // //           setUsers(response.data);
// // //         } else {
// // //           setError("No users found.");
// // //         }
// // //       } catch (err) {
// // //         setError("Failed to fetch users.");
// // //         console.error(err);  // Log error to the console for debugging
// // //       }
// // //     };

// // //     fetchUsers();
// // //   }, [storeId]);  // Only run when storeId changes

// // //   // Handle Add User
// // //   const handleAddUser = async () => {
// // //     try {
// // //       const response = await axios.post("http://localhost:5014/add_user", {
// // //         ...newUser,
// // //         storeId: storeId
// // //       });
// // //       alert(response.data.message);

// // //       // Reset the form
// // //       setNewUser({
// // //         firstName: '',
// // //         lastName: '',
// // //         email: '',
// // //         phoneNumber: '',
// // //         password: '',
// // //         role: 'cashier',
// // //         idno: ''  // Reset idno field
// // //       });

// // //       // Refresh the user list
// // //       const response2 = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
// // //       setUsers(response2.data);
// // //     } catch (err) {
// // //       setError("Failed to add user.");
// // //       console.error(err);
// // //     }
// // //   };

// // //   // Handle Delete User
// // //   const handleDeleteUser = async (userId) => {
// // //     try {
// // //       const response = await axios.delete("http://localhost:5014/delete_user", {
// // //         data: { storeId: storeId, userId: userId }
// // //       });
// // //       alert(response.data.message);

// // //       // Refresh the user list after deletion
// // //       const response2 = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
// // //       setUsers(response2.data);
// // //     } catch (err) {
// // //       setError("Failed to delete user.");
// // //       console.error(err);
// // //     }
// // //   };
// // //   const updateUser = async (storeId, userId, updatedData) => {
// // //     try {
// // //       const response = await axios.put("http://localhost:5014/update_user", {
// // //         storeId,
// // //         userId,
// // //         updatedData,
// // //       });
// // //       if (response.data.message === "User updated successfully!") {
// // //         alert("User updated successfully!");
// // //       } else {
// // //         alert(response.data.message);
// // //       }
// // //     } catch (error) {
// // //       alert("Error updating user: " + (error.response?.data?.message || error.message));
// // //     }
// // //   };

// // //   return (
// // //     <div className="p-6">
// // //       <h2 className="text-3xl font-bold mb-6">User Management</h2>

// // //       {/* Error Handling */}
// // //       {error && <p className="text-red-500 mb-4">{error}</p>}

// // //       {/* User List */}
// // //       <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
// // //         <h3 className="text-2xl font-semibold p-4 border-b">User List</h3>
// // //         {/* Display user list only if there are users */}
// // //         {users.length === 0 ? (
// // //           <p className="p-4">No users found.</p>
// // //         ) : (
// // //           <table className="min-w-full table-auto">
// // //             <thead>
// // //               <tr className="bg-gray-100">
// // //                 <th className="p-4 text-left text-sm font-medium text-gray-700">Name</th>
// // //                 <th className="p-4 text-left text-sm font-medium text-gray-700">Email</th>
// // //                 <th className="p-4 text-left text-sm font-medium text-gray-700">Phone</th>
// // //                 <th className="p-4 text-left text-sm font-medium text-gray-700">Role</th>
// // //                 <th className="p-4 text-left text-sm font-medium text-gray-700">Actions</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {users.map((user) => (
// // //                 <tr key={user.idno} className="border-b">
// // //                   <td className="p-4">{user.firstName} {user.lastName}</td>
// // //                   <td className="p-4">{user.email}</td>
// // //                   <td className="p-4">{user.phoneNumber}</td>
// // //                   <td className="p-4">{user.role}</td>
// // //                   <td className="p-4">
// // //                     <button
// // //                       className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
// // //                       onClick={() => handleDeleteUser(user.idno)}  // Delete by idno
// // //                     >
// // //                       Delete
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         )}
// // //       </div>

// // //       {/* Add User Form */}
// // //       <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
// // //         <h3 className="text-2xl font-semibold mb-4">Add User</h3>

// // //         <input
// // //           type="text"
// // //           placeholder="First Name"
// // //           value={newUser.firstName}
// // //           onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
// // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // //         />
// // //         <input
// // //           type="text"
// // //           placeholder="Last Name"
// // //           value={newUser.lastName}
// // //           onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
// // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // //         />
// // //         <input
// // //           type="email"
// // //           placeholder="Email"
// // //           value={newUser.email}
// // //           onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
// // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // //         />
// // //         <input
// // //           type="text"
// // //           placeholder="Phone Number"
// // //           value={newUser.phoneNumber}
// // //           onChange={(e) => setNewUser({ ...newUser, phoneNumber: e.target.value })}
// // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // //         />
// // //         <input
// // //           type="password"
// // //           placeholder="Password"
// // //           value={newUser.password}
// // //           onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
// // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // //         />
// // //         <select
// // //           value={newUser.role}
// // //           onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
// // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // //         >
// // //           <option value="cashier">Cashier</option>
// // //           <option value="manager">Manager</option>
// // //           <option value="admin">Admin</option>
// // //         </select>
// // //         <input
// // //           type="text"
// // //           placeholder="Employee ID (idno)"
// // //           value={newUser.idno}
// // //           onChange={(e) => setNewUser({ ...newUser, idno: e.target.value })}
// // //           className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// // //         />
// // //         <button
// // //           onClick={handleAddUser}
// // //           className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
// // //         >
// // //           Add User
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default UserManagementPage;
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import { useStore } from "./StoreContext";
// // import { motion } from "framer-motion";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const UserManagementPage = () => {
// //   const [users, setUsers] = useState([]);
// //   const [error, setError] = useState(null);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [newUser, setNewUser] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     phoneNumber: "",
// //     password: "",
// //     role: "cashier",
// //     idno: "",
// //   });
// //   const [editingUser, setEditingUser] = useState(null);
// //   const { storeId } = useStore();
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     if (!storeId) {
// //       setError("Store ID is not available.");
// //       setIsLoading(false);
// //       return;
// //     }

// //     const fetchUsers = async () => {
// //       try {
// //         const response = await axios.get(
// //           `http://localhost:5014/get_users?storeId=${storeId}`
// //         );

// //         if (Array.isArray(response.data)) {
// //           setUsers(response.data);
// //         } else {
// //           setError("No users found.");
// //         }
// //       } catch (err) {
// //         setError("Failed to fetch users.");
// //         console.error(err);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchUsers();
// //   }, [storeId]);

// //   const handleAddUser = async () => {
// //     try {
// //       const response = await axios.post("http://localhost:5014/add_user", {
// //         ...newUser,
// //         storeId: storeId,
// //       });
      
// //       toast.success(response.data.message);

// //       setNewUser({
// //         firstName: "",
// //         lastName: "",
// //         email: "",
// //         phoneNumber: "",
// //         password: "",
// //         role: "cashier",
// //         idno: "",
// //       });

// //       const response2 = await axios.get(
// //         `http://localhost:5014/get_users?storeId=${storeId}`
// //       );
// //       setUsers(response2.data);
// //     } catch (err) {
// //       toast.error("Failed to add user");
// //       console.error(err);
// //     }
// //   };

// //   // const handleDeleteUser = async (userId) => {
// //   //   if (window.confirm("Are you sure you want to delete this user?")) {
// //   //     try {
// //   //       const response = await axios.delete("http://localhost:5014/delete_user", {
// //   //         data: { storeId: storeId, userId: userId },
// //   //       });
        
// //   //       toast.info(response.data.message);

// //   //       const response2 = await axios.get(
// //   //         `http://localhost:5014/get_users?storeId=${storeId}`
// //   //       );
// //   //       setUsers(response2.data);
// //   //     } catch (err) {
// //   //       toast.error("Failed to delete user");
// //   //       console.error(err);
// //   //     }
// //   //   }
// //   // };

// //   // const handleUpdateUser = async () => {
// //   //   try {
// //   //     const response = await axios.put("http://localhost:5014/update_user", {
// //   //       storeId: storeId,
// //   //       userId: editingUser.idno,
// //   //       updatedData: editingUser,
// //   //     });
      
// //   //     toast.success(response.data.message);
// //   //     setEditingUser(null);

// //   //     const response2 = await axios.get(
// //   //       `http://localhost:5014/get_users?storeId=${storeId}`
// //   //     );
// //   //     setUsers(response2.data);
// //   //   } catch (err) {
// //   //     toast.error("Failed to update user");
// //   //     console.error(err);
// //   //   }
// //   // };
// //   const handleDeleteUser  = async (userId) => {
// //     if (window.confirm("Are you sure you want to delete this user?")) {
// //       try {
// //         const response = await axios.delete("http://localhost:5014/delete_user", {
// //           data: { storeId: storeId, userId: userId }, // Ensure userId is correct
// //         });
        
// //         toast.info(response.data.message);
  
// //         const response2 = await axios.get(
// //           `http://localhost:5014/get_users?storeId=${storeId}`
// //         );
// //         setUsers(response2.data);
// //       } catch (err) {
// //         toast.error("Failed to delete user");
// //         console.error(err);
// //       }
// //     }
// //   };
  
// //   const handleUpdateUser  = async () => {
// //     try {
// //       const response = await axios.put("http://localhost:5014/update_user", {
// //         storeId: storeId,
// //         userId: editingUser .id, // Ensure this matches the id field in MongoDB
// //         updatedData: editingUser ,
// //       });
      
// //       toast.success(response.data.message);
// //       setEditingUser (null);
  
// //       const response2 = await axios.get(
// //         `http://localhost:5014/get_users?storeId=${storeId}`
// //       );
// //       setUsers(response2.data);
// //     } catch (err) {
// //       toast.error("Failed to update user");
// //       console.error(err);
// //     }
// //   };

// //   const handleEditUser = (user) => {
// //     setEditingUser(user);
// //   };

// //   // Card variants for animations
// //   const cardVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: { 
// //       opacity: 1, 
// //       y: 0,
// //       transition: { 
// //         duration: 0.5
// //       }
// //     }
// //   };

// //   // List item variants
// //   const listItemVariants = {
// //     hidden: { opacity: 0, x: -20 },
// //     visible: (i) => ({
// //       opacity: 1,
// //       x: 0,
// //       transition: {
// //         delay: i * 0.1,
// //         duration: 0.3
// //       }
// //     })
// //   };

// //   if (isLoading) {
// //     return (
// //       <div className="flex items-center justify-center h-screen">
// //         <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="p-8 min-h-screen bg-gray-100">
// //       <ToastContainer position="top-right" autoClose={3000} />
// //       <motion.div
// //         initial={{ opacity: 0, y: -20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5 }}
// //       >
// //         <h2 className="text-3xl font-bold mb-6 text-gray-800">
// //           User Management
// //           <div className="h-1 w-24 bg-blue-500 mt-2"></div>
// //         </h2>
// //       </motion.div>

// //       {error && (
// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.9 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           className="p-4 bg-red-100 text-red-700 rounded-lg mb-6"
// //         >
// //           {error}
// //         </motion.div>
// //       )}

// //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //         <motion.div
// //           className="lg:col-span-2"
// //           variants={cardVariants}
// //           initial="hidden"
// //           animate="visible"
// //         >
// //           <div className="bg-white shadow-xl rounded-lg overflow-hidden">
// //             <div className="p-5 bg-gradient-to-r from-blue-600 to-blue-400">
// //               <h3 className="text-xl font-semibold text-white">User List</h3>
// //             </div>
// //             {users.length === 0 ? (
// //               <div className="p-8 text-center text-gray-500">
// //                 <svg className="w-16 h-16 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
// //                 </svg>
// //                 <p className="mt-4">No users found.</p>
// //               </div>
// //             ) : (
// //               <div className="overflow-x-auto">
// //                 <table className="min-w-full table-auto">
// //                   <thead>
// //                     <tr className="bg-gray-50 text-gray-600 uppercase text-xs">
// //                       <th className="py-3 px-4 text-left">Name</th>
// //                       <th className="py-3 px-4 text-left">Email</th>
// //                       <th className="py-3 px-4 text-left">Phone</th>
// //                       <th className="py-3 px-4 text-left">Role</th>
// //                       <th className="py-3 px-4 text-left">Actions</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {users.map((user, index) => (
// //                       <motion.tr
// //                         key={user.idno}
// //                         className="border-b hover:bg-gray-50 transition-colors"
// //                         custom={index}
// //                         variants={listItemVariants}
// //                         initial="hidden"
// //                         animate="visible"
// //                       >
// //                         <td className="py-3 px-4">
// //                           <div className="flex items-center">
// //                             <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-3">
// //                               {(user.firstName || '').charAt(0)}{(user.lastName || '').charAt(0)}
// //                             </div>
// //                             <span>{user.firstName || ''} {user.lastName || ''}</span>
// //                           </div>
// //                         </td>
// //                         <td className="py-3 px-4">{user.email || ''}</td>
// //                         <td className="py-3 px-4">{user.phoneNumber || ''}</td>
// //                         <td className="py-3 px-4">
// //                           <span className={`px-2 py-1 rounded-full text-xs ${
// //                             user.role === 'admin' ? 'bg-purple-100 text-purple-800' :
// //                             user.role === 'manager' ? 'bg-green-100 text-green-800' :
// //                             'bg-blue-100 text-blue-800'
// //                           }`}>
// //                             {user.role || 'cashier'}
// //                           </span>
// //                         </td>
// //                         <td className="py-3 px-4">
// //                           <div className="flex gap-2">
// //                             <button
// //                               className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition-colors"
// //                               onClick={() => handleEditUser(user)}
// //                             >
// //                               Edit
// //                             </button>
// //                             <button
// //                               className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition-colors"
// //                               onClick={() => handleDeleteUser(user.idno)}
// //                             >
// //                               Delete
// //                             </button>
// //                           </div>
// //                         </td>
// //                       </motion.tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             )}
// //           </div>
// //         </motion.div>

// //         <motion.div
// //           variants={cardVariants}
// //           initial="hidden"
// //           animate="visible"
// //           transition={{ delay: 0.3 }}
// //         >
// //           <div className="bg-white shadow-xl rounded-lg overflow-hidden">
// //             <div className="p-5 bg-gradient-to-r from-blue-600 to-blue-400">
// //               <h3 className="text-xl font-semibold text-white">
// //                 {editingUser ? "Edit User" : "Add New User"}
// //               </h3>
// //             </div>
// //             <div className="p-6">
// //               <div className="space-y-4">
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
// //                   <input
// //                     type="text"
// //                     placeholder="First Name"
// //                     value={editingUser ? editingUser.firstName : newUser.firstName}
// //                     onChange={(e) =>
// //                       editingUser
// //                         ? setEditingUser({ ...editingUser, firstName: e.target.value })
// //                         : setNewUser({ ...newUser, firstName: e.target.value })
// //                     }
// //                     className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
// //                   <input
// //                     type="text"
// //                     placeholder="Last Name"
// //                     value={editingUser ? editingUser.lastName : newUser.lastName}
// //                     onChange={(e) =>
// //                       editingUser
// //                         ? setEditingUser({ ...editingUser, lastName: e.target.value })
// //                         : setNewUser({ ...newUser, lastName: e.target.value })
// //                     }
// //                     className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
// //                   <input
// //                     type="email"
// //                     placeholder="Email"
// //                     value={editingUser ? editingUser.email : newUser.email}
// //                     onChange={(e) =>
// //                       editingUser
// //                         ? setEditingUser({ ...editingUser, email: e.target.value })
// //                         : setNewUser({ ...newUser, email: e.target.value })
// //                     }
// //                     className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
// //                   <input
// //                     type="text"
// //                     placeholder="Phone Number"
// //                     value={editingUser ? editingUser.phoneNumber : newUser.phoneNumber}
// //                     onChange={(e) =>
// //                       editingUser
// //                         ? setEditingUser({ ...editingUser, phoneNumber: e.target.value })
// //                         : setNewUser({ ...newUser, phoneNumber: e.target.value })
// //                     }
// //                     className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
// //                   <input
// //                     type="password"
// //                     placeholder="Password"
// //                     value={editingUser ? editingUser.password : newUser.password}
// //                     onChange={(e) =>
// //                       editingUser
// //                         ? setEditingUser({ ...editingUser, password: e.target.value })
// //                         : setNewUser({ ...newUser, password: e.target.value })
// //                     }
// //                     className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
// //                   <select
// //                     value={editingUser ? editingUser.role : newUser.role}
// //                     onChange={(e) =>
// //                       editingUser
// //                         ? setEditingUser({ ...editingUser, role: e.target.value })
// //                         : setNewUser({ ...newUser, role: e.target.value })
// //                     }
// //                     className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// //                   >
// //                     <option value="cashier">Cashier</option>
// //                     <option value="manager">Manager</option>
// //                     <option value="admin">Admin</option>
// //                   </select>
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">Employee ID</label>
// //                   <input
// //                     type="text"
// //                     placeholder="Employee ID (idno)"
// //                     value={editingUser ? editingUser.idno : newUser.idno}
// //                     onChange={(e) =>
// //                       editingUser
// //                         ? setEditingUser({ ...editingUser, idno: e.target.value })
// //                         : setNewUser({ ...newUser, idno: e.target.value })
// //                     }
// //                     className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// //                     disabled={editingUser}
// //                   />
// //                   {editingUser && (
// //                     <p className="text-xs text-gray-500 mt-1">Employee ID cannot be changed</p>
// //                   )}
// //                 </div>
// //                 <motion.button
// //                   whileHover={{ scale: 1.02 }}
// //                   whileTap={{ scale: 0.98 }}
// //                   onClick={editingUser ? handleUpdateUser : handleAddUser}
// //                   className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none transition-all"
// //                 >
// //                   {editingUser ? "Update User" : "Add User"}
// //                 </motion.button>
// //                 {editingUser && (
// //                   <motion.button
// //                     whileHover={{ scale: 1.02 }}
// //                     whileTap={{ scale: 0.98 }}
// //                     onClick={() => setEditingUser(null)}
// //                     className="w-full p-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none transition-all"
// //                   >
// //                     Cancel
// //                   </motion.button>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserManagementPage;  


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useStore } from "./StoreContext";
// import { motion } from "framer-motion";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const UserManagementPage = () => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [newUser , setNewUser ] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//     role: "cashier",
//     idno: "",
//   });
//   const [editingUser , setEditingUser ] = useState(null);
//   const { storeId } = useStore();

//   useEffect(() => {
//     if (!storeId) {
//       setError("Store ID is not available.");
//       setIsLoading(false);
//       return;
//     }

//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5014/get_users?storeId=${storeId}`
//         );

//         if (Array.isArray(response.data)) {
//           setUsers(response.data);
//         } else {
//           setError("No users found.");
//         }
//       } catch (err) {
//         setError("Failed to fetch users.");
//         console.error(err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchUsers();
//   }, [storeId]);

//   const handleAddUser  = async () => {
//     try {
//       const response = await axios.post("http://localhost:5014/add_user", {
//         ...newUser ,
//         storeId: storeId,
//       });
      
//       toast.success(response.data.message);
//       setNewUser ({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phoneNumber: "",
//         password: "",
//         role: "cashier",
//         idno: "",
//       });

//       const response2 = await axios.get(
//         `http://localhost:5014/get_users?storeId=${storeId}`
//       );
//       setUsers(response2.data);
//     } catch (err) {
//       toast.error("Failed to add user");
//       console.error(err);
//     }
//   };

//   const handleDeleteUser  = async (userId) => {
//     if (window.confirm("Are you sure you want to delete this user?")) {
//       try {
//         const response = await axios.delete("http://localhost:5014/delete_user", {
//           data: { storeId: storeId, userId: userId },
//         });
        
//         toast.info(response.data.message);
//         const response2 = await axios.get(
//           `http://localhost:5014/get_users?storeId=${storeId}`
//         );
//         setUsers(response2.data);
//       } catch (err) {
//         toast.error("Failed to delete user");
//         console.error(err);
//       }
//     }
//   };
  
//   const handleUpdateUser  = async () => {
//     try {
//       const response = await axios.put("http://localhost:5014/update_user", {
//         storeId: storeId,
//         userId: editingUser .id, // Ensure this matches the id field in MongoDB
//         updatedData: {
//           firstName: editingUser .firstName,
//           lastName: editingUser .lastName,
//           email: editingUser .email,
//           phoneNumber: editingUser .phoneNumber,
//           password: editingUser .password,
//           role: editingUser .role,
//         },
//       });
      
//       toast.success(response.data.message);
//       setEditingUser (null);
//       const response2 = await axios.get(
//         `http://localhost:5014/get_users?storeId=${storeId}`
//       );
//       setUsers(response2.data);
//     } catch (err) {
//       toast.error("Failed to update user");
//       console.error(err);
//     }
//   };

//   const handleEditUser  = (user) => {
//     setEditingUser (user);
//   };

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-8 min-h-screen bg-gray-100">
//       <ToastContainer position="top-right" autoClose={3000} />
//       <h2 className="text-3xl font-bold mb-6 text-gray-800">User  Management</h2>

//       {error && (
//         <div className="p-4 bg-red-100 text-red-700 rounded-lg mb-6">
//           {error}
//         </div>
//       )}

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2">
//           <div className="bg-white shadow-xl rounded-lg overflow-hidden">
//             <div className="p-5 bg-gradient-to-r from-blue-600 to-blue-400">
//               <h3 className="text-xl font-semibold text-white">User  List</h3>
//             </div>
//             {users.length === 0 ? (
//               <div className="p-8 text-center text-gray-500">No users found.</div>
//             ) : (
//               <div className="overflow-x-auto">
//                 <table className="min-w-full table-auto">
//                   <thead>
//                     <tr className="bg-gray-50 text-gray-600 uppercase text-xs">
//                       <th className="py-3 px-4 text-left">Name</th>
//                       <th className="py-3 px-4 text-left">Email</th>
//                       <th className="py-3 px-4 text-left">Phone</th>
//                       <th className="py-3 px-4 text-left">Role</th>
//                       <th className="py-3 px-4 text-left">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {users.map((user) => (
//                       <tr key={user.id} className="border-b hover:bg-gray-50 transition-colors">
//                         <td className="py-3 px-4">
//                           <div className="flex items-center">
//                             <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-3">
//                               {(user.firstName || '').charAt(0)}{(user.lastName || '').charAt(0)}
//                             </div>
//                             <span>{user.firstName || ''} {user.lastName || ''}</span>
//                           </div>
//                         </td>
//                         <td className="py-3 px-4">{user.email || ''}</td>
//                         <td className="py-3 px-4">{user.phoneNumber || ''}</td>
//                         <td className="py-3 px-4">
//                           <span className={`px-2 py-1 rounded-full text-xs ${
//                             user.role === 'admin' ? 'bg-purple-100 text-purple-800' :
//                             user.role === 'manager' ? 'bg-green-100 text-green-800' :
//                             'bg-blue-100 text-blue-800'
//                           }`}>
//                             {user.role || 'cashier'}
//                           </span>
//                         </td>
//                         <td className="py-3 px-4">
//                           <div className="flex gap-2">
//                             <button
//                               className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition-colors"
//                               onClick={() => handleEditUser (user)}
//                             >
//                               Edit
//                             </button>
//                             <button
//                               className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition-colors"
//                               onClick={() => handleDeleteUser (user.id)}
//                             >
//                               Delete
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="bg-white shadow-xl rounded-lg overflow-hidden">
//           <div className="p-5 bg-gradient-to-r from-blue-600 to-blue-400">
//             <h3 className="text-xl font-semibold text-white">
//               {editingUser  ? "Edit User" : "Add New User"}
//             </h3>
//           </div>
//           <div className="p-6">
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   value={editingUser  ? editingUser .firstName : newUser .firstName}
//                   onChange={(e) =>
//                     editingUser 
//                       ? setEditingUser ({ ...editingUser , firstName: e.target.value })
//                       : setNewUser ({ ...newUser , firstName: e.target.value })
//                   }
//                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   value={editingUser  ? editingUser .lastName : newUser .lastName}
//                   onChange={(e) =>
//                     editingUser 
//                       ? setEditingUser ({ ...editingUser , lastName: e.target.value })
//                       : setNewUser ({ ...newUser , lastName: e.target.value })
//                   }
//                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   value={editingUser  ? editingUser .email : newUser .email}
//                   onChange={(e) =>
//                     editingUser 
//                       ? setEditingUser ({ ...editingUser , email: e.target.value })
//                       : setNewUser ({ ...newUser , email: e.target.value })
//                   }
//                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
//                 <input
//                   type="text"
//                   placeholder="Phone Number"
//                   value={editingUser  ? editingUser .phoneNumber : newUser .phoneNumber}
//                   onChange={(e) =>
//                     editingUser 
//                       ? setEditingUser ({ ...editingUser , phoneNumber: e.target.value })
//                       : setNewUser ({ ...newUser , phoneNumber: e.target.value })
//                   }
//                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={editingUser  ? editingUser .password : newUser .password}
//                   onChange={(e) =>
//                     editingUser 
//                       ? setEditingUser ({ ...editingUser , password: e.target.value })
//                       : setNewUser ({ ...newUser , password: e.target.value })
//                   }
//                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
//                 <select
//                   value={editingUser  ? editingUser .role : newUser .role}
//                   onChange={(e) =>
//                     editingUser 
//                       ? setEditingUser ({ ...editingUser , role: e.target.value })
//                       : setNewUser ({ ...newUser , role: e.target.value })
//                   }
//                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                 >
//                   <option value="cashier">Cashier</option>
//                   <option value="manager">Manager</option>
//                   <option value="admin">Admin</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Employee ID</label>
//                 <input
//                   type="text"
//                   placeholder="Employee ID (idno)"
//                   value={editingUser  ? editingUser .id : newUser .idno}
//                   onChange={(e) =>
//                     editingUser 
//                       ? setEditingUser ({ ...editingUser , id: e.target.value })
//                       : setNewUser ({ ...newUser , idno: e.target.value })
//                   }
//                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                   disabled={editingUser }
//                 />
//                 {editingUser  && (
//                   <p className="text-xs text-gray-500 mt-1">Employee ID cannot be changed</p>
//                 )}
//               </div>
//               <button
//                 onClick={editingUser  ? handleUpdateUser  : handleAddUser }
//                 className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none transition-all"
//               >
//                 {editingUser  ? "Update User" : "Add User"}
//               </button>
//               {editingUser  && (
//                 <button
//                   onClick={() => setEditingUser (null)}
//                   className="w-full p-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none transition-all"
//                 >
//                   Cancel
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserManagementPage;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useStore } from "./StoreContext";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserManagementPage = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "cashier",
    idno: "",
  });
  const [editingUser, setEditingUser] = useState(null);
  const { storeId } = useStore();

  useEffect(() => {
    if (!storeId) {
      setError("Store ID is not available.");
      setIsLoading(false);
      return;
    }

    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5014/get_users?storeId=${storeId}`
        );

        if (Array.isArray(response.data)) {
          setUsers(response.data);
        } else {
          setError("No users found.");
        }
      } catch (err) {
        setError("Failed to fetch users.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [storeId]);

  const handleAddUser = async () => {
    // Form validation
    if (!newUser.firstName || !newUser.lastName || !newUser.email || !newUser.password) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:5014/add_user", {
        ...newUser,
        storeId: storeId,
      });
      
      toast.success(response.data.message);
      setNewUser({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "cashier",
        idno: "",
      });

      const response2 = await axios.get(
        `http://localhost:5014/get_users?storeId=${storeId}`
      );
      setUsers(response2.data);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add user");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        setIsLoading(true);
        const response = await axios.delete("http://localhost:5014/delete_user", {
          data: { storeId: storeId, userId: userId },
        });
        
        toast.info(response.data.message);
        const response2 = await axios.get(
          `http://localhost:5014/get_users?storeId=${storeId}`
        );
        setUsers(response2.data);
      } catch (err) {
        toast.error("Failed to delete user");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
  };
  
  const handleUpdateUser = async () => {
    // Form validation
    if (!editingUser.firstName || !editingUser.lastName || !editingUser.email) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.put("http://localhost:5014/update_user", {
        storeId: storeId,
        userId: editingUser.id,
        updatedData: {
          firstName: editingUser.firstName,
          lastName: editingUser.lastName,
          email: editingUser.email,
          phoneNumber: editingUser.phoneNumber,
          password: editingUser.password,
          role: editingUser.role,
        },
      });
      
      toast.success(response.data.message);
      setEditingUser(null);
      const response2 = await axios.get(
        `http://localhost:5014/get_users?storeId=${storeId}`
      );
      setUsers(response2.data);
    } catch (err) {
      toast.error("Failed to update user");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const filteredUsers = users.filter(user => {
    const searchLower = searchTerm.toLowerCase();
    return (
      (user.firstName && user.firstName.toLowerCase().includes(searchLower)) ||
      (user.lastName && user.lastName.toLowerCase().includes(searchLower)) ||
      (user.email && user.email.toLowerCase().includes(searchLower)) ||
      (user.role && user.role.toLowerCase().includes(searchLower))
    );
  });

  const getRoleColor = (role) => {
    switch (role) {
      case 'admin':
        return { bg: 'bg-purple-100', text: 'text-purple-800', icon: '👑' };
      case 'manager':
        return { bg: 'bg-green-100', text: 'text-green-800', icon: '🔑' };
      default:
        return { bg: 'bg-blue-100', text: 'text-blue-800', icon: '👤' };
    }
  };

  // Form input component to reduce repetition
  const FormInput = ({ label, type, value, onChange, placeholder, disabled, required }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
          disabled ? 'bg-gray-100' : 'border-gray-300'
        }`}
      />
      {disabled && (
        <p className="text-xs text-gray-500 mt-1">This field cannot be changed</p>
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="p-8 max-w-7xl mx-auto">
        <ToastContainer 
          position="top-right" 
          autoClose={3000} 
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-800">User Management</h2>
            <p className="text-gray-500 mt-1">Manage your staff and their permissions</p>
          </div>
          
          <div className="flex items-center bg-white rounded-lg shadow-md px-3 py-2 w-64">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input
              type="text"
              placeholder="Search users..."
              className="ml-2 w-full focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>
        
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-lg mb-6"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
              </svg>
              {error}
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="p-5 bg-gradient-to-r from-blue-700 to-blue-500 flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">User List</h3>
                <span className="bg-white bg-opacity-20 text-white rounded-full px-3 py-1 text-sm">
                  {filteredUsers.length} users
                </span>
              </div>
              
              {isLoading ? (
                <div className="p-16 flex justify-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : filteredUsers.length === 0 ? (
                <div className="p-16 text-center text-gray-500 flex flex-col items-center">
                  <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <p>No users found.</p>
                  {searchTerm && <p className="mt-2">Try adjusting your search.</p>}
                </div>
              ) : (
                <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  <table className="min-w-full table-auto">
                    <thead>
                      <tr className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wider">
                        <th className="py-3 px-4 text-left">Name</th>
                        <th className="py-3 px-4 text-left">Email</th>
                        <th className="py-3 px-4 text-left">Phone</th>
                        <th className="py-3 px-4 text-left">Role</th>
                        <th className="py-3 px-4 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <AnimatePresence>
                        {filteredUsers.map((user, index) => {
                          const roleStyle = getRoleColor(user.role);
                          return (
                            <motion.tr
                              key={user.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2, delay: index * 0.05 }}
                              className="border-b hover:bg-blue-50 transition-all"
                            >
                              <td className="py-3 px-4">
                                <div className="flex items-center">
                                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-md">
                                    {(user.firstName || '').charAt(0)}{(user.lastName || '').charAt(0)}
                                  </div>
                                  <div className="ml-3">
                                    <p className="font-medium text-gray-800">{user.firstName || ''} {user.lastName || ''}</p>
                                    <p className="text-xs text-gray-500">ID: {user.id || ''}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex items-center">
                                  <svg className="w-4 h-4 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                  </svg>
                                  {user.email || ''}
                                </div>
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex items-center">
                                  <svg className="w-4 h-4 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                  </svg>
                                  {user.phoneNumber || '-'}
                                </div>
                              </td>
                              <td className="py-3 px-4">
                                <span className={`px-3 py-1 rounded-full text-xs flex items-center w-fit ${roleStyle.bg} ${roleStyle.text}`}>
                                  <span className="mr-1">{roleStyle.icon}</span>
                                  {user.role || 'cashier'}
                                </span>
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex gap-2">
                                  <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition-colors flex items-center shadow-md"
                                    onClick={() => handleEditUser(user)}
                                  >
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                    </svg>
                                    Edit
                                  </motion.button>
                                  <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition-colors flex items-center shadow-md"
                                    onClick={() => handleDeleteUser(user.id)}
                                  >
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                    </svg>
                                    Delete
                                  </motion.button>
                                </div>
                              </td>
                            </motion.tr>
                          );
                        })}
                      </AnimatePresence>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white shadow-xl rounded-lg overflow-hidden"
          >
            <div className="p-5 bg-gradient-to-r from-blue-700 to-blue-500">
              <h3 className="text-xl font-semibold text-white flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {editingUser ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                  )}
                </svg>
                {editingUser ? "Edit User" : "Add New User"}
              </h3>
            </div>
            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={editingUser ? 'edit' : 'add'}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormInput
                      label="First Name"
                      type="text"
                      placeholder="Enter first name"
                      value={editingUser ? editingUser.firstName : newUser.firstName}
                      onChange={(e) =>
                        editingUser
                          ? setEditingUser({ ...editingUser, firstName: e.target.value })
                          : setNewUser({ ...newUser, firstName: e.target.value })
                      }
                      required={true}
                    />
                    
                    <FormInput
                      label="Last Name"
                      type="text"
                      placeholder="Enter last name"
                      value={editingUser ? editingUser.lastName : newUser.lastName}
                      onChange={(e) =>
                        editingUser
                          ? setEditingUser({ ...editingUser, lastName: e.target.value })
                          : setNewUser({ ...newUser, lastName: e.target.value })
                      }
                      required={true}
                    />
                  </div>
                  
                  <FormInput
                    label="Email"
                    type="email"
                    placeholder="Enter email address"
                    value={editingUser ? editingUser.email : newUser.email}
                    onChange={(e) =>
                      editingUser
                        ? setEditingUser({ ...editingUser, email: e.target.value })
                        : setNewUser({ ...newUser, email: e.target.value })
                    }
                    required={true}
                  />
                  
                  <FormInput
                    label="Phone Number"
                    type="text"
                    placeholder="Enter phone number"
                    value={editingUser ? editingUser.phoneNumber : newUser.phoneNumber}
                    onChange={(e) =>
                      editingUser
                        ? setEditingUser({ ...editingUser, phoneNumber: e.target.value })
                        : setNewUser({ ...newUser, phoneNumber: e.target.value })
                    }
                  />
                  
                  <FormInput
                    label="Password"
                    type="password"
                    placeholder={editingUser ? "Leave blank to keep current password" : "Enter password"}
                    value={editingUser ? editingUser.password || '' : newUser.password}
                    onChange={(e) =>
                      editingUser
                        ? setEditingUser({ ...editingUser, password: e.target.value })
                        : setNewUser({ ...newUser, password: e.target.value })
                    }
                    required={!editingUser}
                  />
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                    <div className="grid grid-cols-3 gap-3">
                      {['cashier', 'manager', 'admin'].map((role) => {
                        const isSelected = editingUser ? editingUser.role === role : newUser.role === role;
                        const roleStyle = getRoleColor(role);
                        
                        return (
                          <motion.button
                            key={role}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            type="button"
                            className={`p-2 rounded-lg border-2 transition-all ${
                              isSelected
                                ? `border-blue-500 bg-blue-50 text-blue-700`
                                : `border-gray-200 bg-gray-50 text-gray-600`
                            }`}
                            onClick={() =>
                              editingUser
                                ? setEditingUser({ ...editingUser, role: role })
                                : setNewUser({ ...newUser, role: role })
                            }
                          >
                            <div className="flex flex-col items-center">
                              <span className="text-lg mb-1">{roleStyle.icon}</span>
                              <span className="capitalize">{role}</span>
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                  
                  <FormInput
                    label="Employee ID"
                    type="text"
                    placeholder="Enter employee ID"
                    value={editingUser ? editingUser.id : newUser.idno}
                    onChange={(e) =>
                      editingUser
                        ? setEditingUser({ ...editingUser, id: e.target.value })
                        : setNewUser({ ...newUser, idno: e.target.value })
                    }
                    disabled={editingUser}
                    required={!editingUser}
                  />
                  
                  <div className="pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isLoading}
                      onClick={editingUser ? handleUpdateUser : handleAddUser}
                      className={`w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none transition-all flex items-center justify-center shadow-md ${
                        isLoading ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isLoading ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                      ) : (
                        <>
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {editingUser ? (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                            ) : (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                            )}
                          </svg>
                          {editingUser ? "Update User" : "Add User"}
                        </>
                      )}
                    </motion.button>
                    
                    {editingUser && (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setEditingUser(null)}
                        className="w-full mt-2 p-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none transition-all flex items-center justify-center shadow-md"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                        Cancel
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserManagementPage;