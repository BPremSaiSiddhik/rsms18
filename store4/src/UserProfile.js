// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserProfile = () => {
//   const [user, setUser] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({});
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [allUsers, setAllUsers] = useState([]);
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         setLoading(true);
//         const userId = localStorage.getItem('userId');
//         const storeId = localStorage.getItem('storeId');
        
//         if (!userId || !storeId) {
//           setMessage('User ID or Store ID not found. Please login again.');
//           setLoading(false);
//           return;
//         }
        
//         // Fetch all users to find the current user
//         const response = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
        
//         if (response.data && Array.isArray(response.data)) {
//           setAllUsers(response.data);
          
//           // Find current user
//           const currentUser = response.data.find(u => u.id === userId);
          
//           if (currentUser) {
//             setUser(currentUser);
//             setFormData(currentUser);
//             setIsAdmin(currentUser.role === 'admin');
//           } else {
//             setMessage('User not found.');
//           }
//         }
        
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//         setMessage('Error fetching user data. Please try again.');
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const storeId = localStorage.getItem('storeId');
//       const userId = user.id;
      
//       // Remove fields that shouldn't be updated
//       const updatedData = { ...formData };
//       delete updatedData.id;
//       delete updatedData.role; // Role should not be changed by the user
      
//       await axios.put('http://localhost:5014/update_user', {
//         storeId,
//         userId,
//         updatedData
//       });
      
//       setUser(formData);
//       setIsEditing(false);
//       setMessage('Profile updated successfully!');
      
//       // Refresh all users data if admin
//       if (isAdmin) {
//         const response = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
//         if (response.data && Array.isArray(response.data)) {
//           setAllUsers(response.data);
//         }
//       }
//     } catch (error) {
//       console.error('Error updating profile:', error);
//       setMessage('Error updating profile. Please try again.');
//     }
//   };

//   const handleAdminUpdate = async (userId, updatedData) => {
//     try {
//       const storeId = localStorage.getItem('storeId');
      
//       await axios.put('http://localhost:5014/update_user', {
//         storeId,
//         userId,
//         updatedData
//       });
      
//       setMessage(`User ${userId} updated successfully!`);
      
//       // Refresh all users data
//       const response = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
//       if (response.data && Array.isArray(response.data)) {
//         setAllUsers(response.data);
//       }
//     } catch (error) {
//       console.error('Error updating user:', error);
//       setMessage(`Error updating user ${userId}. Please try again.`);
//     }
//   };

//   const handleDeleteUser = async (userId) => {
//     if (window.confirm(`Are you sure you want to delete user ${userId}?`)) {
//       try {
//         const storeId = localStorage.getItem('storeId');
        
//         await axios.delete('http://localhost:5014/delete_user', {
//           data: {
//             storeId,
//             userId
//           }
//         });
        
//         setMessage(`User ${userId} deleted successfully!`);
        
//         // Refresh all users data
//         const response = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
//         if (response.data && Array.isArray(response.data)) {
//           setAllUsers(response.data);
//         }
//       } catch (error) {
//         console.error('Error deleting user:', error);
//         setMessage(`Error deleting user ${userId}. Please try again.`);
//       }
//     }
//   };

//   const renderAdminPanel = () => {
//     return (
//       <div className="mt-8 p-6 bg-gray-100 rounded-lg">
//         <h2 className="text-xl font-bold mb-4">Admin Panel - User Management</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="py-2 px-4 border">ID</th>
//                 <th className="py-2 px-4 border">Name</th>
//                 <th className="py-2 px-4 border">Email</th>
//                 <th className="py-2 px-4 border">Phone</th>
//                 <th className="py-2 px-4 border">Role</th>
//                 <th className="py-2 px-4 border">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {allUsers.map(user => (
//                 <tr key={user.id} className="hover:bg-gray-50">
//                   <td className="py-2 px-4 border">{user.id}</td>
//                   <td className="py-2 px-4 border">
//                     {user.firstName} {user.lastName}
//                   </td>
//                   <td className="py-2 px-4 border">{user.email}</td>
//                   <td className="py-2 px-4 border">{user.phoneNumber}</td>
//                   <td className="py-2 px-4 border">{user.role}</td>
//                   <td className="py-2 px-4 border">
//                     <button 
//                       onClick={() => {
//                         const newRole = prompt(`Change role for ${user.firstName} (admin/cashier/manager):`, user.role);
//                         if (newRole && ['admin', 'cashier', 'manager'].includes(newRole)) {
//                           handleAdminUpdate(user.id, { role: newRole });
//                         }
//                       }}
//                       className="bg-blue-500 text-white py-1 px-2 rounded mr-2 text-sm"
//                     >
//                       Edit Role
//                     </button>
//                     <button 
//                       onClick={() => handleDeleteUser(user.id)}
//                       className="bg-red-500 text-white py-1 px-2 rounded text-sm"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   };

//   if (loading) {
//     return <div className="text-center p-8">Loading user profile...</div>;
//   }

//   if (!user) {
//     return <div className="text-center p-8 text-red-500">{message || 'User not found'}</div>;
//   }

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       {message && (
//         <div className={`mb-4 p-3 rounded ${message.includes('Error') ? 'bg-red-100' : 'bg-green-100'}`}>
//           {message}
//         </div>
//       )}
      
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">
//             {isAdmin ? 'Administrator Profile' : `${user.role.charAt(0).toUpperCase() + user.role.slice(1)} Profile`}
//           </h1>
//           <div>
//             <button 
//               onClick={() => {
//                 if (isEditing) {
//                   setFormData(user);
//                 }
//                 setIsEditing(!isEditing);
//               }}
//               className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
//             >
//               {isEditing ? 'Cancel' : 'Edit Profile'}
//             </button>
//           </div>
//         </div>
        
//         {isEditing ? (
//           <form onSubmit={handleSubmit}>
//             <div className="grid md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-gray-700 mb-1">First Name</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName || ''}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 mb-1">Last Name</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName || ''}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 mb-1">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email || ''}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 mb-1">Phone Number</label>
//                 <input
//                   type="text"
//                   name="phoneNumber"
//                   value={formData.phoneNumber || ''}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 mb-1">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password || ''}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 mb-1">User ID</label>
//                 <input
//                   type="text"
//                   value={user.id}
//                   className="w-full p-2 border rounded bg-gray-100"
//                   disabled
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 mb-1">Role</label>
//                 <input
//                   type="text"
//                   value={user.role}
//                   className="w-full p-2 border rounded bg-gray-100"
//                   disabled
//                 />
//               </div>
//             </div>
//             <div className="mt-6">
//               <button 
//                 type="submit" 
//                 className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </form>
//         ) : (
//           <div className="grid md:grid-cols-2 gap-4">
//             <div>
//               <p className="text-gray-600 mb-1">Name</p>
//               <p className="font-medium">{user.firstName} {user.lastName}</p>
//             </div>
//             <div>
//               <p className="text-gray-600 mb-1">Email</p>
//               <p className="font-medium">{user.email}</p>
//             </div>
//             <div>
//               <p className="text-gray-600 mb-1">Phone Number</p>
//               <p className="font-medium">{user.phoneNumber}</p>
//             </div>
//             <div>
//               <p className="text-gray-600 mb-1">User ID</p>
//               <p className="font-medium">{user.id}</p>
//             </div>
//             <div>
//               <p className="text-gray-600 mb-1">Role</p>
//               <p className="font-medium capitalize">{user.role}</p>
//             </div>
//             <div>
//               <p className="text-gray-600 mb-1">Store ID</p>
//               <p className="font-medium">{localStorage.getItem('storeId')}</p>
//             </div>
//           </div>
//         )}
//       </div>
      
//       {isAdmin && renderAdminPanel()}
//     </div>
//   );
// };

// export default UserProfile;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Settings, Shield, LogOut, Edit2, Save, X, Trash2, Mail, Phone, Key, Users, AlertCircle } from 'lucide-react';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [filterQuery, setFilterQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const userId = localStorage.getItem('userId');
        const storeId = localStorage.getItem('storeId');
        
        if (!userId || !storeId) {
          setMessage('User ID or Store ID not found. Please login again.');
          setLoading(false);
          return;
        }
        
        // Fetch all users to find the current user
        const response = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
        
        if (response.data && Array.isArray(response.data)) {
          setAllUsers(response.data);
          
          // Find current user
          const currentUser = response.data.find(u => u.id === userId);
          
          if (currentUser) {
            setUser(currentUser);
            setFormData(currentUser);
            setIsAdmin(currentUser.role === 'admin');
          } else {
            setMessage('User not found.');
          }
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setMessage('Error fetching user data. Please try again.');
        setLoading(false);
      }
    };

    fetchUserData();
    
    // Check for dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const storeId = localStorage.getItem('storeId');
      const userId = user.id;
      
      // Remove fields that shouldn't be updated
      const updatedData = { ...formData };
      delete updatedData.id;
      delete updatedData.role; // Role should not be changed by the user
      
      await axios.put('http://localhost:5014/update_user', {
        storeId,
        userId,
        updatedData
      });
      
      setUser(formData);
      setIsEditing(false);
      showNotification('Profile updated successfully!');
      
      // Refresh all users data if admin
      if (isAdmin) {
        const response = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
        if (response.data && Array.isArray(response.data)) {
          setAllUsers(response.data);
        }
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      showNotification('Error updating profile. Please try again.', true);
    }
  };

  const handleAdminUpdate = async (userId, updatedData) => {
    try {
      const storeId = localStorage.getItem('storeId');
      
      await axios.put('http://localhost:5014/update_user', {
        storeId,
        userId,
        updatedData
      });
      
      showNotification(`User ${userId} updated successfully!`);
      
      // Refresh all users data
      const response = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
      if (response.data && Array.isArray(response.data)) {
        setAllUsers(response.data);
      }
    } catch (error) {
      console.error('Error updating user:', error);
      showNotification(`Error updating user ${userId}. Please try again.`, true);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm(`Are you sure you want to delete user ${userId}?`)) {
      try {
        const storeId = localStorage.getItem('storeId');
        
        await axios.delete('http://localhost:5014/delete_user', {
          data: {
            storeId,
            userId
          }
        });
        
        showNotification(`User ${userId} deleted successfully!`);
        
        // Refresh all users data
        const response = await axios.get(`http://localhost:5014/get_users?storeId=${storeId}`);
        if (response.data && Array.isArray(response.data)) {
          setAllUsers(response.data);
        }
      } catch (error) {
        console.error('Error deleting user:', error);
        showNotification(`Error deleting user ${userId}. Please try again.`, true);
      }
    }
  };

  const showNotification = (msg, isError = false) => {
    setMessage(msg);
    
    // Auto-hide notification after 5 seconds
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  const filteredUsers = allUsers.filter(user => {
    const searchTerm = filterQuery.toLowerCase();
    return (
      user.firstName.toLowerCase().includes(searchTerm) ||
      user.lastName.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm) ||
      user.role.toLowerCase().includes(searchTerm) ||
      user.id.toString().includes(searchTerm)
    );
  });

  const renderAdminPanel = () => {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 dark:bg-gray-800 bg-white shadow-lg rounded-xl overflow-hidden"
      >
        <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <h2 className="text-xl font-bold flex items-center">
            <Shield className="mr-2" /> Admin Panel - User Management
          </h2>
        </div>
        
        <div className="p-6">
          <div className="mb-4 flex flex-wrap gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search users..."
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                className="w-full p-3 pr-10 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <div className="absolute right-3 top-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            <button 
              onClick={() => {
                const email = prompt("Enter email for new user:");
                if (email) {
                  // Implement new user creation flow
                  showNotification("New user creation feature will be implemented soon.");
                }
              }}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex items-center transition duration-300"
            >
              <Users className="mr-2 h-4 w-4" /> Add New User
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <th className="py-3 px-4 border-b dark:border-gray-600 text-left">ID</th>
                  <th className="py-3 px-4 border-b dark:border-gray-600 text-left">Name</th>
                  <th className="py-3 px-4 border-b dark:border-gray-600 text-left">Email</th>
                  <th className="py-3 px-4 border-b dark:border-gray-600 text-left">Phone</th>
                  <th className="py-3 px-4 border-b dark:border-gray-600 text-left">Role</th>
                  <th className="py-3 px-4 border-b dark:border-gray-600 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map(user => (
                  <motion.tr 
                    key={user.id} 
                    className="hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <td className="py-3 px-4 border-b dark:border-gray-600">{user.id}</td>
                    <td className="py-3 px-4 border-b dark:border-gray-600 font-medium">
                      {user.firstName} {user.lastName}
                    </td>
                    <td className="py-3 px-4 border-b dark:border-gray-600">{user.email}</td>
                    <td className="py-3 px-4 border-b dark:border-gray-600">{user.phoneNumber}</td>
                    <td className="py-3 px-4 border-b dark:border-gray-600">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        user.role === 'admin' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : 
                        user.role === 'manager' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 
                        'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="py-3 px-4 border-b dark:border-gray-600">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => {
                            const newRole = prompt(`Change role for ${user.firstName} (admin/cashier/manager):`, user.role);
                            if (newRole && ['admin', 'cashier', 'manager'].includes(newRole)) {
                              handleAdminUpdate(user.id, { role: newRole });
                            }
                          }}
                          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-md text-sm flex items-center transition duration-300"
                        >
                          <Edit2 className="mr-1 h-3 w-3" /> Edit
                        </button>
                        <button 
                          onClick={() => handleDeleteUser(user.id)}
                          className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md text-sm flex items-center transition duration-300"
                        >
                          <Trash2 className="mr-1 h-3 w-3" /> Delete
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-gray-500 dark:text-gray-400 text-sm">
            Showing {filteredUsers.length} of {allUsers.length} users
          </div>
        </div>
      </motion.div>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading user profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
        <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
          <h2 className="text-xl font-bold text-red-500 mb-2">User Not Found</h2>
          <p className="text-gray-600 dark:text-gray-300">{message || 'User profile could not be loaded'}</p>
          <button 
            onClick={() => window.location.href = '/login'}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300"
          >
            Return to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4">
        <AnimatePresence>
          {message && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`mb-4 p-4 rounded-lg shadow-md flex items-center justify-between ${
                message.includes('Error') ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200' : 
                'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
              }`}
            >
              <div className="flex items-center">
                {message.includes('Error') ? (
                  <AlertCircle className="mr-2 h-5 w-5" />
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
                {message}
              </div>
              <button 
                onClick={() => setMessage('')}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Account Settings
          </h1>
          <div className="flex space-x-3">
            <button
              onClick={toggleDarkMode}
              className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 p-2 rounded-full transition duration-300"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => {
                localStorage.removeItem('userId');
                localStorage.removeItem('storeId');
                window.location.href = '/login';
              }}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg flex items-center transition duration-300"
            >
              <LogOut className="mr-2 h-4 w-4" /> Sign Out
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                <div className="flex flex-col items-center">
                  <div className="h-20 w-20 rounded-full bg-white/30 flex items-center justify-center mb-3">
                    {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                  </div>
                  <h2 className="text-xl font-bold">{user.firstName} {user.lastName}</h2>
                  <p className="text-blue-100">{user.email}</p>
                  <div className="mt-2">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      user.role === 'admin' ? 'bg-red-100 text-red-800' : 
                      user.role === 'manager' ? 'bg-blue-100 text-blue-800' : 
                      'bg-green-100 text-green-800'
                    }`}>
                      {user.role.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <ul>
                  <li>
                    <button
                      onClick={() => setActiveTab('profile')}
                      className={`flex items-center w-full p-3 rounded-lg transition duration-200 ${
                        activeTab === 'profile' ? 
                        'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 
                        'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <User className="mr-3 h-5 w-5" />
                      <span>Profile Information</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('settings')}
                      className={`flex items-center w-full p-3 rounded-lg transition duration-200 ${
                        activeTab === 'settings' ? 
                        'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 
                        'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Settings className="mr-3 h-5 w-5" />
                      <span>Account Settings</span>
                    </button>
                  </li>
                  {isAdmin && (
                    <li>
                      <button
                        onClick={() => setActiveTab('admin')}
                        className={`flex items-center w-full p-3 rounded-lg transition duration-200 ${
                          activeTab === 'admin' ? 
                          'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 
                          'hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        <Shield className="mr-3 h-5 w-5" />
                        <span>Admin Panel</span>
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            </motion.div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3">
            <AnimatePresence mode="wait">
              {activeTab === 'profile' && (
                <motion.div 
                  key="profile"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
                >
                  <div className="p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold flex items-center">
                        <User className="mr-2" /> Profile Information
                      </h2>
                      <button 
                        onClick={() => {
                          if (isEditing) {
                            setFormData(user);
                          }
                          setIsEditing(!isEditing);
                        }}
                        className={`flex items-center py-2 px-4 rounded-lg transition duration-300 ${
                          isEditing ? 
                          'bg-white/20 hover:bg-white/30' : 
                          'bg-white/10 hover:bg-white/20'
                        }`}
                      >
                        {isEditing ? (
                          <>
                            <X className="mr-2 h-4 w-4" /> Cancel
                          </>
                        ) : (
                          <>
                            <Edit2 className="mr-2 h-4 w-4" /> Edit Profile
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {isEditing ? (
                      <form onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">First Name</label>
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName || ''}
                              onChange={handleInputChange}
                              className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Last Name</label>
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName || ''}
                              onChange={handleInputChange}
                              className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                              required
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Email</label>
                            <div className="relative">
                              <input
                                type="email"
                                name="email"
                                value={formData.email || ''}
                                onChange={handleInputChange}
                                className="w-full p-3 pl-10 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                required
                              />
                              <Mail className="text-gray-500 absolute left-3 top-3 h-4 w-4" />
                            </div>
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Phone Number</label>
                            <div className="relative">
                              <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber || ''}
                                onChange={handleInputChange}
                                className="w-full p-3 pl-10 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                required
                              />
                              <Phone className="text-gray-500 absolute left-3 top-3 h-4 w-4" />
                            </div>
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Password</label>
                            <div className="relative">
                              <input
                                type={passwordVisible ? 'text' : 'password'}
                                name="password"
                                value={formData.password || ''}
                                onChange={handleInputChange}
                                className="w-full p-3 pl-10 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                required
                              />
                              <Key className="text-gray-500 absolute left-3 top-3 h-4 w-4" />
                              <button
                                type="button"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                                className="absolute right-3 top-3 text-gray-500"
                              >
                                {passwordVisible ? 'Hide' : 'Show'}
                              </button>
                            </div>
                          </div>
                          <div>
                            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">User ID</label>
                            <input
                              type="text"
                              value={user.id}
                              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400"
                              disabled
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Role</label>
                            <input
                              type="text"
                              value={user.role}
                              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400"
                              disabled
                            />
                          </div>
                        </div>
                        <div className="mt-6">
                          <button 
                            type="submit" 
                            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg flex items-center transition duration-300"
                          >
                            <Save className="mr-2 h-4 w-4" /> Save Changes
                          </button>
                        </div>
                      </form>
                    ) : (
                      <div className="space-y-6">
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg flex items-center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg><span className="text-blue-600 dark:text-blue-400">
                            This is your personal profile information. You can edit your profile by clicking the "Edit Profile" button above.
                          </span>
                        </motion.div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Full Name</h3>
                            <p className="text-gray-800 dark:text-white text-lg font-semibold">{user.firstName} {user.lastName}</p>
                          </div>
                          
                          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Email Address</h3>
                            <p className="text-gray-800 dark:text-white text-lg font-semibold flex items-center">
                              <Mail className="mr-2 h-4 w-4 text-blue-500" />
                              {user.email}
                            </p>
                          </div>
                          
                          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Phone Number</h3>
                            <p className="text-gray-800 dark:text-white text-lg font-semibold flex items-center">
                              <Phone className="mr-2 h-4 w-4 text-blue-500" />
                              {user.phoneNumber}
                            </p>
                          </div>
                          
                          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">User ID</h3>
                            <p className="text-gray-800 dark:text-white text-lg font-semibold">{user.id}</p>
                          </div>
                          
                          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Role</h3>
                            <p className="text-gray-800 dark:text-white text-lg font-semibold flex items-center">
                              <span className={`inline-flex items-center mr-2 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                user.role === 'admin' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : 
                                user.role === 'manager' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 
                                'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              }`}>
                                {user.role.toUpperCase()}
                              </span>
                            </p>
                          </div>
                          
                          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Store ID</h3>
                            <p className="text-gray-800 dark:text-white text-lg font-semibold">{localStorage.getItem('storeId')}</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                          <h3 className="text-gray-700 dark:text-gray-300 font-medium mb-2">Account Activity</h3>
                          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700 dark:text-gray-300">Last login: Today</span>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">IP: 192.168.1.1</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
              
              {activeTab === 'settings' && (
                <motion.div 
                  key="settings"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
                >
                  <div className="p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                    <h2 className="text-xl font-bold flex items-center">
                      <Settings className="mr-2" /> Account Settings
                    </h2>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">Email Notifications</h3>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <input 
                              type="checkbox" 
                              id="emailNotif1" 
                              className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                              defaultChecked
                            />
                            <label htmlFor="emailNotif1" className="ml-2 text-gray-700 dark:text-gray-300">
                              Receive order notifications
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input 
                              type="checkbox" 
                              id="emailNotif2" 
                              className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                              defaultChecked
                            />
                            <label htmlFor="emailNotif2" className="ml-2 text-gray-700 dark:text-gray-300">
                              Receive system updates
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input 
                              type="checkbox" 
                              id="emailNotif3" 
                              className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                            />
                            <label htmlFor="emailNotif3" className="ml-2 text-gray-700 dark:text-gray-300">
                              Receive marketing emails
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">Security Settings</h3>
                        <div className="space-y-4">
                          <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                            <Key className="mr-2 h-4 w-4" />
                            Change Password
                          </button>
                          <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            Enable Two-Factor Authentication
                          </button>
                        </div>
                      </div>
                      
                      <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">Interface Settings</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                              </svg>
                              <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
                            </div>
                            <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full">
                              <input
                                type="checkbox"
                                id="darkMode"
                                className="absolute w-6 h-6 transition duration-200 ease-in-out transform bg-white border rounded-full appearance-none cursor-pointer peer border-gray-300 checked:right-0 checked:border-blue-600 checked:bg-blue-600"
                                checked={darkMode}
                                onChange={toggleDarkMode}
                              />
                              <label
                                htmlFor="darkMode"
                                className="block h-full overflow-hidden rounded-full cursor-pointer bg-gray-300 peer-checked:bg-blue-300"
                              ></label>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                              </svg>
                              <span className="text-gray-700 dark:text-gray-300">Desktop Notifications</span>
                            </div>
                            <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full">
                              <input
                                type="checkbox"
                                id="notifications"
                                className="absolute w-6 h-6 transition duration-200 ease-in-out transform bg-white border rounded-full appearance-none cursor-pointer peer border-gray-300 checked:right-0 checked:border-blue-600 checked:bg-blue-600"
                                defaultChecked
                              />
                              <label
                                htmlFor="notifications"
                                className="block h-full overflow-hidden rounded-full cursor-pointer bg-gray-300 peer-checked:bg-blue-300"
                              ></label>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">Session Management</h3>
                        <div className="space-y-4">
                          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-800 dark:text-white">Current Session</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Started: Today at 9:30 AM</p>
                            </div>
                            <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Active</span>
                          </div>
                          <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 flex items-center">
                            <LogOut className="mr-2 h-4 w-4" />
                            Sign Out of All Devices
                          </button>
                        </div>
                      </div>
                      
                      <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-medium text-red-600 dark:text-red-400 mb-3">Danger Zone</h3>
                        <div className="p-4 border border-red-200 dark:border-red-900 rounded-lg">
                          <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Permanently delete your account and all associated data.
                          </p>
                          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition duration-300">
                            Delete Account
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {activeTab === 'admin' && isAdmin && (
                <motion.div 
                  key="admin"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {renderAdminPanel()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;