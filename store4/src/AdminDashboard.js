// // // // // // // // // // // // // import React from "react";

// // // // // // // // // // // // // const AdminDashboard = () => {
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className="flex h-screen bg-gray-100">
// // // // // // // // // // // // //       {/* Sidebar */}
// // // // // // // // // // // // //       <div className="bg-white w-64 p-6 shadow-lg">
// // // // // // // // // // // // //         <h1 className="text-2xl font-bold text-gray-800 mb-8">Admin Panel</h1>
// // // // // // // // // // // // //         <nav>
// // // // // // // // // // // // //           <ul className="space-y-4">
// // // // // // // // // // // // //             <li>
// // // // // // // // // // // // //               <a
// // // // // // // // // // // // //                 href="#"
// // // // // // // // // // // // //                 className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 <span>Dashboard</span>
// // // // // // // // // // // // //               </a>
// // // // // // // // // // // // //             </li>
// // // // // // // // // // // // //             <li>
// // // // // // // // // // // // //               <a
// // // // // // // // // // // // //                 href="#"
// // // // // // // // // // // // //                 className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 <span>Stores</span>
// // // // // // // // // // // // //               </a>
// // // // // // // // // // // // //             </li>
// // // // // // // // // // // // //             <li>
// // // // // // // // // // // // //               <a
// // // // // // // // // // // // //                 href="#"
// // // // // // // // // // // // //                 className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 <span>Users</span>
// // // // // // // // // // // // //               </a>
// // // // // // // // // // // // //             </li>
// // // // // // // // // // // // //             <li>
// // // // // // // // // // // // //               <a
// // // // // // // // // // // // //                 href="#"
// // // // // // // // // // // // //                 className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 <span>Inventory</span>
// // // // // // // // // // // // //               </a>
// // // // // // // // // // // // //             </li>
// // // // // // // // // // // // //             <li>
// // // // // // // // // // // // //               <a
// // // // // // // // // // // // //                 href="#"
// // // // // // // // // // // // //                 className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 <span>Sales</span>
// // // // // // // // // // // // //               </a>
// // // // // // // // // // // // //             </li>
// // // // // // // // // // // // //             <li>
// // // // // // // // // // // // //               <a
// // // // // // // // // // // // //                 href="#"
// // // // // // // // // // // // //                 className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 <span>Reports</span>
// // // // // // // // // // // // //               </a>
// // // // // // // // // // // // //             </li>
// // // // // // // // // // // // //             <li>
// // // // // // // // // // // // //               <a
// // // // // // // // // // // // //                 href="#"
// // // // // // // // // // // // //                 className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 <span>Settings</span>
// // // // // // // // // // // // //               </a>
// // // // // // // // // // // // //             </li>
// // // // // // // // // // // // //           </ul>
// // // // // // // // // // // // //         </nav>
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       {/* Main Content */}
// // // // // // // // // // // // //       <div className="flex-1 p-8">
// // // // // // // // // // // // //         <h2 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h2>

// // // // // // // // // // // // //         {/* Summary Cards */}
// // // // // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// // // // // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow-md">
// // // // // // // // // // // // //             <h3 className="text-lg font-semibold text-gray-700">Total Sales</h3>
// // // // // // // // // // // // //             <p className="text-2xl font-bold text-gray-900">$12,345</p>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow-md">
// // // // // // // // // // // // //             <h3 className="text-lg font-semibold text-gray-700">Total Stores</h3>
// // // // // // // // // // // // //             <p className="text-2xl font-bold text-gray-900">5</p>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow-md">
// // // // // // // // // // // // //             <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
// // // // // // // // // // // // //             <p className="text-2xl font-bold text-gray-900">25</p>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Quick Links */}
// // // // // // // // // // // // //         <div className="bg-white p-6 rounded-lg shadow-md">
// // // // // // // // // // // // //           <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h3>
// // // // // // // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // // // // // // // // // //             <a
// // // // // // // // // // // // //               href="#"
// // // // // // // // // // // // //               className="p-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition duration-300"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               Manage Stores
// // // // // // // // // // // // //             </a>
// // // // // // // // // // // // //             <a
// // // // // // // // // // // // //               href="#"
// // // // // // // // // // // // //               className="p-4 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition duration-300"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               Manage Users
// // // // // // // // // // // // //             </a>
// // // // // // // // // // // // //             <a
// // // // // // // // // // // // //               href="#"
// // // // // // // // // // // // //               className="p-4 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition duration-300"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               View Reports
// // // // // // // // // // // // //             </a>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default AdminDashboard;


// // // // // // // // // // // // import React, { useState } from "react";

// // // // // // // // // // // // const AdminDashboard = () => {
// // // // // // // // // // // //   const [activeTab, setActiveTab] = useState("sales-history"); // State to track active subcategory

// // // // // // // // // // // //   // Function to handle subcategory clicks
// // // // // // // // // // // //   const handleTabClick = (tab) => {
// // // // // // // // // // // //     setActiveTab(tab);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="flex h-screen bg-gray-100">
// // // // // // // // // // // //       {/* Sidebar */}
// // // // // // // // // // // //       <div className="bg-white w-64 p-6 shadow-lg">
// // // // // // // // // // // //         <h1 className="text-2xl font-bold text-gray-800 mb-8">Admin Panel</h1>
// // // // // // // // // // // //         <nav>
// // // // // // // // // // // //           <ul className="space-y-4">
// // // // // // // // // // // //             <li>
// // // // // // // // // // // //               <a
// // // // // // // // // // // //                 href="#"
// // // // // // // // // // // //                 className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 <span>Dashboard</span>
// // // // // // // // // // // //               </a>
// // // // // // // // // // // //             </li>
// // // // // // // // // // // //             <li>
// // // // // // // // // // // //               <a
// // // // // // // // // // // //                 href="#"
// // // // // // // // // // // //                 className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 <span>Stores</span>
// // // // // // // // // // // //               </a>
// // // // // // // // // // // //             </li>
// // // // // // // // // // // //             <li>
// // // // // // // // // // // //               <a
// // // // // // // // // // // //                 href="#"
// // // // // // // // // // // //                 className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 <span>Users</span>
// // // // // // // // // // // //               </a>
// // // // // // // // // // // //             </li>
// // // // // // // // // // // //             <li>
// // // // // // // // // // // //               <a
// // // // // // // // // // // //                 href="#"
// // // // // // // // // // // //                 className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 <span>Inventory</span>
// // // // // // // // // // // //               </a>
// // // // // // // // // // // //             </li>
// // // // // // // // // // // //             <li>
// // // // // // // // // // // //               <a
// // // // // // // // // // // //                 href="#"
// // // // // // // // // // // //                 className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 <span>Sales</span>
// // // // // // // // // // // //               </a>
// // // // // // // // // // // //             </li>
// // // // // // // // // // // //             <li>
// // // // // // // // // // // //               <a
// // // // // // // // // // // //                 href="#"
// // // // // // // // // // // //                 className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 <span>Reports</span>
// // // // // // // // // // // //               </a>
// // // // // // // // // // // //             </li>
// // // // // // // // // // // //             <li>
// // // // // // // // // // // //               <a
// // // // // // // // // // // //                 href="#"
// // // // // // // // // // // //                 className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 <span>Settings</span>
// // // // // // // // // // // //               </a>
// // // // // // // // // // // //             </li>
// // // // // // // // // // // //           </ul>
// // // // // // // // // // // //         </nav>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* Main Content */}
// // // // // // // // // // // //       <div className="flex-1 p-8">
// // // // // // // // // // // //         <h2 className="text-3xl font-bold text-gray-800 mb-8">Sales</h2>

// // // // // // // // // // // //         {/* Sub-Navigation Bar */}
// // // // // // // // // // // //         <div className="mb-8">
// // // // // // // // // // // //           <nav className="flex space-x-4 border-b border-gray-200">
// // // // // // // // // // // //             <button
// // // // // // // // // // // //               onClick={() => handleTabClick("sales-history")}
// // // // // // // // // // // //               className={`px-4 py-2 text-sm font-medium ${
// // // // // // // // // // // //                 activeTab === "sales-history"
// // // // // // // // // // // //                   ? "text-blue-600 border-b-2 border-blue-600"
// // // // // // // // // // // //                   : "text-gray-500 hover:text-gray-700"
// // // // // // // // // // // //               }`}
// // // // // // // // // // // //             >
// // // // // // // // // // // //               Sales History
// // // // // // // // // // // //             </button>
// // // // // // // // // // // //             <button
// // // // // // // // // // // //               onClick={() => handleTabClick("pending-orders")}
// // // // // // // // // // // //               className={`px-4 py-2 text-sm font-medium ${
// // // // // // // // // // // //                 activeTab === "pending-orders"
// // // // // // // // // // // //                   ? "text-blue-600 border-b-2 border-blue-600"
// // // // // // // // // // // //                   : "text-gray-500 hover:text-gray-700"
// // // // // // // // // // // //               }`}
// // // // // // // // // // // //             >
// // // // // // // // // // // //               Pending Orders
// // // // // // // // // // // //             </button>
// // // // // // // // // // // //             <button
// // // // // // // // // // // //               onClick={() => handleTabClick("returns")}
// // // // // // // // // // // //               className={`px-4 py-2 text-sm font-medium ${
// // // // // // // // // // // //                 activeTab === "returns"
// // // // // // // // // // // //                   ? "text-blue-600 border-b-2 border-blue-600"
// // // // // // // // // // // //                   : "text-gray-500 hover:text-gray-700"
// // // // // // // // // // // //               }`}
// // // // // // // // // // // //             >
// // // // // // // // // // // //               Returns
// // // // // // // // // // // //             </button>
// // // // // // // // // // // //             <button
// // // // // // // // // // // //               onClick={() => handleTabClick("discounts")}
// // // // // // // // // // // //               className={`px-4 py-2 text-sm font-medium ${
// // // // // // // // // // // //                 activeTab === "discounts"
// // // // // // // // // // // //                   ? "text-blue-600 border-b-2 border-blue-600"
// // // // // // // // // // // //                   : "text-gray-500 hover:text-gray-700"
// // // // // // // // // // // //               }`}
// // // // // // // // // // // //             >
// // // // // // // // // // // //               Discounts
// // // // // // // // // // // //             </button>
// // // // // // // // // // // //           </nav>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* Content Based on Active Tab */}
// // // // // // // // // // // //         <div className="bg-white p-6 rounded-lg shadow-md">
// // // // // // // // // // // //           {activeTab === "sales-history" && (
// // // // // // // // // // // //             <div>
// // // // // // // // // // // //               <h3 className="text-xl font-semibold text-gray-800 mb-4">
// // // // // // // // // // // //                 Sales History
// // // // // // // // // // // //               </h3>
// // // // // // // // // // // //               <p>Display sales history data here...</p>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           )}
// // // // // // // // // // // //           {activeTab === "pending-orders" && (
// // // // // // // // // // // //             <div>
// // // // // // // // // // // //               <h3 className="text-xl font-semibold text-gray-800 mb-4">
// // // // // // // // // // // //                 Pending Orders
// // // // // // // // // // // //               </h3>
// // // // // // // // // // // //               <p>Display pending orders data here...</p>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           )}
// // // // // // // // // // // //           {activeTab === "returns" && (
// // // // // // // // // // // //             <div>
// // // // // // // // // // // //               <h3 className="text-xl font-semibold text-gray-800 mb-4">Returns</h3>
// // // // // // // // // // // //               <p>Display returns data here...</p>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           )}
// // // // // // // // // // // //           {activeTab === "discounts" && (
// // // // // // // // // // // //             <div>
// // // // // // // // // // // //               <h3 className="text-xl font-semibold text-gray-800 mb-4">Discounts</h3>
// // // // // // // // // // // //               <p>Display discounts data here...</p>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           )}
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default AdminDashboard;

// // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // import { 
// // // // // // // // // // //   Users, 
// // // // // // // // // // //   ShoppingBag, 
// // // // // // // // // // //   BarChart2, 
// // // // // // // // // // //   Settings, 
// // // // // // // // // // //   CreditCard, 
// // // // // // // // // // //   UserCheck,
// // // // // // // // // // //   ChevronDown,
// // // // // // // // // // //   ChevronRight,
// // // // // // // // // // //   Home,
// // // // // // // // // // //   Bell,
// // // // // // // // // // //   Search,
// // // // // // // // // // //   LogOut
// // // // // // // // // // // } from 'lucide-react';

// // // // // // // // // // // const AdminDashboard = () => {
// // // // // // // // // // //   const [activeMenu, setActiveMenu] = useState('dashboard');
// // // // // // // // // // //   const [expandedSubmenu, setExpandedSubmenu] = useState('');
  
// // // // // // // // // // //   const toggleSubmenu = (menu) => {
// // // // // // // // // // //     if (expandedSubmenu === menu) {
// // // // // // // // // // //       setExpandedSubmenu('');
// // // // // // // // // // //     } else {
// // // // // // // // // // //       setExpandedSubmenu(menu);
// // // // // // // // // // //     }
// // // // // // // // // // //   };
  
// // // // // // // // // // //   // Mock data for dashboard stats
// // // // // // // // // // //   const stats = [
// // // // // // // // // // //     { title: 'Total Sales', value: '$24,590', change: '+12%', up: true },
// // // // // // // // // // //     { title: 'Total Orders', value: '1,243', change: '+8%', up: true },
// // // // // // // // // // //     { title: 'Low Stock Items', value: '18', change: '-5%', up: false },
// // // // // // // // // // //     { title: 'Active Employees', value: '24', change: '+2', up: true },
// // // // // // // // // // //   ];
  
// // // // // // // // // // //   // Recent transactions for dashboard
// // // // // // // // // // //   const recentTransactions = [
// // // // // // // // // // //     { id: '#TRX-2451', customer: 'John Smith', amount: '$125.00', date: '2 hrs ago', status: 'completed' },
// // // // // // // // // // //     { id: '#TRX-2450', customer: 'Sarah Johnson', amount: '$348.50', date: '4 hrs ago', status: 'completed' },
// // // // // // // // // // //     { id: '#TRX-2449', customer: 'Mike Peters', amount: '$62.25', date: '6 hrs ago', status: 'pending' },
// // // // // // // // // // //     { id: '#TRX-2448', customer: 'Lisa Wong', amount: '$189.99', date: '8 hrs ago', status: 'completed' },
// // // // // // // // // // //   ];
  
// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="flex h-screen bg-gray-100">
// // // // // // // // // // //       {/* Sidebar */}
// // // // // // // // // // //       <div className="w-64 bg-gray-900 text-white">
// // // // // // // // // // //         <div className="p-4 text-xl font-bold border-b border-gray-700">
// // // // // // // // // // //           Store Manager
// // // // // // // // // // //         </div>
        
// // // // // // // // // // //         <div className="p-4">
// // // // // // // // // // //           <div className="flex items-center space-x-3 mb-6">
// // // // // // // // // // //             <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
// // // // // // // // // // //               A
// // // // // // // // // // //             </div>
// // // // // // // // // // //             <div>
// // // // // // // // // // //               <div className="font-medium">Admin User</div>
// // // // // // // // // // //               <div className="text-sm text-gray-400">Main Store</div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
          
// // // // // // // // // // //           <nav>
// // // // // // // // // // //             <ul className="space-y-1">
// // // // // // // // // // //               <li>
// // // // // // // // // // //                 <button 
// // // // // // // // // // //                   onClick={() => setActiveMenu('dashboard')}
// // // // // // // // // // //                   className={`flex items-center w-full p-2 rounded-md ${activeMenu === 'dashboard' ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   <Home size={18} className="mr-3" />
// // // // // // // // // // //                   Dashboard
// // // // // // // // // // //                 </button>
// // // // // // // // // // //               </li>
              
// // // // // // // // // // //               <li>
// // // // // // // // // // //                 <div>
// // // // // // // // // // //                   <button 
// // // // // // // // // // //                     onClick={() => toggleSubmenu('products')}
// // // // // // // // // // //                     className={`flex items-center justify-between w-full p-2 rounded-md ${expandedSubmenu === 'products' ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <div className="flex items-center">
// // // // // // // // // // //                       <ShoppingBag size={18} className="mr-3" />
// // // // // // // // // // //                       Products
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                     {expandedSubmenu === 'products' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
// // // // // // // // // // //                   </button>
                  
// // // // // // // // // // //                   {expandedSubmenu === 'products' && (
// // // // // // // // // // //                     <ul className="pl-9 pt-1 pb-1">
// // // // // // // // // // //                       <li><button className="p-1 hover:text-blue-400 text-sm w-full text-left">All Products</button></li>
// // // // // // // // // // //                       <li><button className="p-1 hover:text-blue-400 text-sm w-full text-left">Categories</button></li>
// // // // // // // // // // //                       <li><button className="p-1 hover:text-blue-400 text-sm w-full text-left">Inventory</button></li>
// // // // // // // // // // //                       <li><button className="p-1 hover:text-blue-400 text-sm w-full text-left">Promotions</button></li>
// // // // // // // // // // //                     </ul>
// // // // // // // // // // //                   )}
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </li>
              
// // // // // // // // // // //               <li>
// // // // // // // // // // //                 <div>
// // // // // // // // // // //                   <button 
// // // // // // // // // // //                     onClick={() => toggleSubmenu('sales')}
// // // // // // // // // // //                     className={`flex items-center justify-between w-full p-2 rounded-md ${expandedSubmenu === 'sales' ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <div className="flex items-center">
// // // // // // // // // // //                       <CreditCard size={18} className="mr-3" />
// // // // // // // // // // //                       Sales
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                     {expandedSubmenu === 'sales' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
// // // // // // // // // // //                   </button>
                  
// // // // // // // // // // //                   {expandedSubmenu === 'sales' && (
// // // // // // // // // // //                     <ul className="pl-9 pt-1 pb-1">
// // // // // // // // // // //                       <li><button className="p-1 hover:text-blue-400 text-sm w-full text-left">Transactions</button></li>
// // // // // // // // // // //                       <li><button className="p-1 hover:text-blue-400 text-sm w-full text-left">Invoices</button></li>
// // // // // // // // // // //                       <li><button className="p-1 hover:text-blue-400 text-sm w-full text-left">Returns</button></li>
// // // // // // // // // // //                     </ul>
// // // // // // // // // // //                   )}
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </li>
              
// // // // // // // // // // //               <li>
// // // // // // // // // // //                 <div>
// // // // // // // // // // //                   <button 
// // // // // // // // // // //                     onClick={() => toggleSubmenu('employees')}
// // // // // // // // // // //                     className={`flex items-center justify-between w-full p-2 rounded-md ${expandedSubmenu === 'employees' ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <div className="flex items-center">
// // // // // // // // // // //                       <Users size={18} className="mr-3" />
// // // // // // // // // // //                       Employees
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                     {expandedSubmenu === 'employees' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
// // // // // // // // // // //                   </button>
                  
// // // // // // // // // // //                   {expandedSubmenu === 'employees' && (
// // // // // // // // // // //                     <ul className="pl-9 pt-1 pb-1">
// // // // // // // // // // //                       <li><button className="p-1 hover:text-blue-400 text-sm w-full text-left">All Employees</button></li>
// // // // // // // // // // //                       <li><button className="p-1 hover:text-blue-400 text-sm w-full text-left">Roles</button></li>
// // // // // // // // // // //                       <li><button className="p-1 hover:text-blue-400 text-sm w-full text-left">Scheduling</button></li>
// // // // // // // // // // //                       <li><button className="p-1 hover:text-blue-400 text-sm w-full text-left">Performance</button></li>
// // // // // // // // // // //                     </ul>
// // // // // // // // // // //                   )}
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </li>
              
// // // // // // // // // // //               <li>
// // // // // // // // // // //                 <button 
// // // // // // // // // // //                   onClick={() => setActiveMenu('customers')}
// // // // // // // // // // //                   className={`flex items-center w-full p-2 rounded-md ${activeMenu === 'customers' ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   <UserCheck size={18} className="mr-3" />
// // // // // // // // // // //                   Customers
// // // // // // // // // // //                 </button>
// // // // // // // // // // //               </li>
              
// // // // // // // // // // //               <li>
// // // // // // // // // // //                 <button 
// // // // // // // // // // //                   onClick={() => setActiveMenu('reports')}
// // // // // // // // // // //                   className={`flex items-center w-full p-2 rounded-md ${activeMenu === 'reports' ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   <BarChart2 size={18} className="mr-3" />
// // // // // // // // // // //                   Reports
// // // // // // // // // // //                 </button>
// // // // // // // // // // //               </li>
              
// // // // // // // // // // //               <li>
// // // // // // // // // // //                 <button 
// // // // // // // // // // //                   onClick={() => setActiveMenu('settings')}
// // // // // // // // // // //                   className={`flex items-center w-full p-2 rounded-md ${activeMenu === 'settings' ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   <Settings size={18} className="mr-3" />
// // // // // // // // // // //                   Settings
// // // // // // // // // // //                 </button>
// // // // // // // // // // //               </li>
// // // // // // // // // // //             </ul>
// // // // // // // // // // //           </nav>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
      
// // // // // // // // // // //       {/* Main Content */}
// // // // // // // // // // //       <div className="flex-1 flex flex-col overflow-hidden">
// // // // // // // // // // //         {/* Top navigation */}
// // // // // // // // // // //         <header className="bg-white shadow-sm">
// // // // // // // // // // //           <div className="px-4 py-3 flex items-center justify-between">
// // // // // // // // // // //             <div className="flex items-center">
// // // // // // // // // // //               <div className="relative">
// // // // // // // // // // //                 <Search size={16} className="absolute left-2 top-2.5 text-gray-400" />
// // // // // // // // // // //                 <input 
// // // // // // // // // // //                   type="text" 
// // // // // // // // // // //                   placeholder="Search..." 
// // // // // // // // // // //                   className="pl-8 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
// // // // // // // // // // //                 />
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
            
// // // // // // // // // // //             <div className="flex items-center space-x-4">
// // // // // // // // // // //               <button className="p-1 rounded-full hover:bg-gray-100 relative">
// // // // // // // // // // //                 <Bell size={20} />
// // // // // // // // // // //                 <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
// // // // // // // // // // //               </button>
              
// // // // // // // // // // //               <button className="flex items-center text-sm text-red-600 hover:text-red-800">
// // // // // // // // // // //                 <LogOut size={16} className="mr-1" />
// // // // // // // // // // //                 Logout
// // // // // // // // // // //               </button>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </header>
        
// // // // // // // // // // //         {/* Dashboard content */}
// // // // // // // // // // //         <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
// // // // // // // // // // //           <div className="mb-6">
// // // // // // // // // // //             <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
// // // // // // // // // // //             <p className="text-gray-600">Welcome back, Admin. Here's your store at a glance.</p>
// // // // // // // // // // //           </div>
          
// // // // // // // // // // //           {/* Stats */}
// // // // // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
// // // // // // // // // // //             {stats.map((stat, index) => (
// // // // // // // // // // //               <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
// // // // // // // // // // //                 <div className="text-gray-500 text-sm">{stat.title}</div>
// // // // // // // // // // //                 <div className="text-2xl font-bold mt-1">{stat.value}</div>
// // // // // // // // // // //                 <div className={`text-sm mt-2 ${stat.up ? 'text-green-500' : 'text-red-500'}`}>
// // // // // // // // // // //                   {stat.change} {stat.up ? '↑' : '↓'}
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </div>
          
// // // // // // // // // // //           {/* Recent Transactions */}
// // // // // // // // // // //           <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
// // // // // // // // // // //             <div className="flex justify-between items-center mb-4">
// // // // // // // // // // //               <h2 className="text-lg font-medium">Recent Transactions</h2>
// // // // // // // // // // //               <button className="text-blue-600 text-sm hover:underline">View All</button>
// // // // // // // // // // //             </div>
            
// // // // // // // // // // //             <div className="overflow-x-auto">
// // // // // // // // // // //               <table className="w-full">
// // // // // // // // // // //                 <thead>
// // // // // // // // // // //                   <tr className="text-left text-gray-500 text-sm border-b">
// // // // // // // // // // //                     <th className="pb-2">Transaction ID</th>
// // // // // // // // // // //                     <th className="pb-2">Customer</th>
// // // // // // // // // // //                     <th className="pb-2">Amount</th>
// // // // // // // // // // //                     <th className="pb-2">Date</th>
// // // // // // // // // // //                     <th className="pb-2">Status</th>
// // // // // // // // // // //                   </tr>
// // // // // // // // // // //                 </thead>
// // // // // // // // // // //                 <tbody>
// // // // // // // // // // //                   {recentTransactions.map((transaction, index) => (
// // // // // // // // // // //                     <tr key={index} className="border-b last:border-0">
// // // // // // // // // // //                       <td className="py-3 text-sm">{transaction.id}</td>
// // // // // // // // // // //                       <td className="py-3 text-sm">{transaction.customer}</td>
// // // // // // // // // // //                       <td className="py-3 text-sm font-medium">{transaction.amount}</td>
// // // // // // // // // // //                       <td className="py-3 text-sm text-gray-500">{transaction.date}</td>
// // // // // // // // // // //                       <td className="py-3 text-sm">
// // // // // // // // // // //                         <span className={`px-2 py-1 rounded-full text-xs ${
// // // // // // // // // // //                           transaction.status === 'completed' 
// // // // // // // // // // //                             ? 'bg-green-100 text-green-800' 
// // // // // // // // // // //                             : 'bg-yellow-100 text-yellow-800'
// // // // // // // // // // //                         }`}>
// // // // // // // // // // //                           {transaction.status}
// // // // // // // // // // //                         </span>
// // // // // // // // // // //                       </td>
// // // // // // // // // // //                     </tr>
// // // // // // // // // // //                   ))}
// // // // // // // // // // //                 </tbody>
// // // // // // // // // // //               </table>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
          
// // // // // // // // // // //           {/* Quick Actions */}
// // // // // // // // // // //           <div className="bg-white rounded-lg shadow-sm p-4">
// // // // // // // // // // //             <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
// // // // // // // // // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// // // // // // // // // // //               <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
// // // // // // // // // // //                 <div className="font-medium">Add New Product</div>
// // // // // // // // // // //                 <div className="text-sm text-gray-500 mt-1">Create a new product listing</div>
// // // // // // // // // // //               </button>
// // // // // // // // // // //               <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
// // // // // // // // // // //                 <div className="font-medium">Process Return</div>
// // // // // // // // // // //                 <div className="text-sm text-gray-500 mt-1">Handle customer returns</div>
// // // // // // // // // // //               </button>
// // // // // // // // // // //               <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
// // // // // // // // // // //                 <div className="font-medium">Generate Reports</div>
// // // // // // // // // // //                 <div className="text-sm text-gray-500 mt-1">View detailed analytics</div>
// // // // // // // // // // //               </button>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </main>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default AdminDashboard;

// // // // // // // // // // import React, { useState, useContext } from "react";
// // // // // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // // // // import { Link } from "react-router-dom";
// // // // // // // // // // import {
// // // // // // // // // //   Users,
// // // // // // // // // //   ShoppingBag,
// // // // // // // // // //   BarChart2,
// // // // // // // // // //   Settings,
// // // // // // // // // //   CreditCard,
// // // // // // // // // //   Package,
// // // // // // // // // //   Truck,
// // // // // // // // // //   DollarSign,
// // // // // // // // // //   UserCheck,
// // // // // // // // // //   AlertTriangle,
// // // // // // // // // //   Layers,
// // // // // // // // // //   Clock,
// // // // // // // // // //   Search,
// // // // // // // // // //   Bell,
// // // // // // // // // //   User,
// // // // // // // // // //   ChevronDown,
// // // // // // // // // //   LogOut
// // // // // // // // // // } from 'lucide-react';

// // // // // // // // // // const AdminDashboard = () => {
// // // // // // // // // //   const { storeName } = useContext(StoreContext);
// // // // // // // // // //   const [searchQuery, setSearchQuery] = useState("");
  
// // // // // // // // // //   // Mock data for dashboard stats
// // // // // // // // // //   const stats = [
// // // // // // // // // //     { title: 'Total Sales Today', value: '$5,890', change: '+15%', up: true },
// // // // // // // // // //     { title: 'Low Stock Items', value: '24', change: '+8', up: false },
// // // // // // // // // //     { title: 'Today\'s Orders', value: '42', change: '+12%', up: true },
// // // // // // // // // //     { title: 'Active Employees', value: '18', change: '0', up: true },
// // // // // // // // // //   ];
  
// // // // // // // // // //   // Recent transactions for dashboard
// // // // // // // // // //   const recentTransactions = [
// // // // // // // // // //     { id: '#TRX-4589', customer: 'John Smith', amount: '$129.50', date: '20 min ago', status: 'completed' },
// // // // // // // // // //     { id: '#TRX-4588', customer: 'Lisa Wong', amount: '$245.75', date: '45 min ago', status: 'completed' },
// // // // // // // // // //     { id: '#TRX-4587', customer: 'Mike Johnson', amount: '$67.25', date: '1 hr ago', status: 'pending' },
// // // // // // // // // //     { id: '#TRX-4586', customer: 'Sara Miller', amount: '$352.00', date: '2 hrs ago', status: 'completed' },
// // // // // // // // // //   ];
  
// // // // // // // // // //   // Low stock items
// // // // // // // // // //   const lowStockItems = [
// // // // // // // // // //     { id: 'P-1245', name: 'Premium Coffee Beans', current: 12, min: 20 },
// // // // // // // // // //     { id: 'P-2340', name: 'Organic Green Tea', current: 8, min: 15 },
// // // // // // // // // //     { id: 'P-1023', name: 'Vitamin C Tablets', current: 5, min: 10 },
// // // // // // // // // //     { id: 'P-3456', name: 'Almond Milk', current: 9, min: 12 },
// // // // // // // // // //   ];
  
// // // // // // // // // //   // Quick access links based on your Inter.js routes
// // // // // // // // // //   const quickLinks = [
// // // // // // // // // //     { name: "Product Management", icon: <Package size={16} />, path: "/Inter/ProductManagement" },
// // // // // // // // // //     { name: "Employee Management", icon: <Users size={16} />, path: "/Inter/EmployeeManagement" },
// // // // // // // // // //     { name: "Daily Sales", icon: <DollarSign size={16} />, path: "/Inter/DailySales" },
// // // // // // // // // //     { name: "Billing", icon: <CreditCard size={16} />, path: "/Inter/Billing" },
// // // // // // // // // //     { name: "Stock Tracking", icon: <Layers size={16} />, path: "/Inter/StockTracking" },
// // // // // // // // // //     { name: "Supplier Management", icon: <Truck size={16} />, path: "/Inter/SupplierManagement3" },
// // // // // // // // // //     { name: "Restock Alerts", icon: <AlertTriangle size={16} />, path: "/Inter/RestockAlerts" },
// // // // // // // // // //     { name: "User Management", icon: <UserCheck size={16} />, path: "/Inter/UserManagement" }
// // // // // // // // // //   ];
  
// // // // // // // // // //   return (
// // // // // // // // // //     <div className="min-h-screen bg-gray-50">
// // // // // // // // // //       {/* Header section with search and user info */}
// // // // // // // // // //       <div className="bg-white shadow-sm border-b">
// // // // // // // // // //         <div className="container mx-auto px-4 py-3 flex justify-between items-center">
// // // // // // // // // //           <div className="flex items-center flex-1">
// // // // // // // // // //             <h1 className="text-xl font-bold text-blue-800">Admin Dashboard</h1>
// // // // // // // // // //           </div>
          
// // // // // // // // // //           <div className="flex items-center">
// // // // // // // // // //             <div className="relative mr-4">
// // // // // // // // // //               <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// // // // // // // // // //               <input
// // // // // // // // // //                 type="text"
// // // // // // // // // //                 placeholder="Search..."
// // // // // // // // // //                 value={searchQuery}
// // // // // // // // // //                 onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // // // //                 className="pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // // // // // // // // //               />
// // // // // // // // // //             </div>
            
// // // // // // // // // //             <button className="p-2 rounded-full hover:bg-gray-100 relative mr-4">
// // // // // // // // // //               <Bell size={20} />
// // // // // // // // // //               <span className="absolute top-0 right-0 h-5 w-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">5</span>
// // // // // // // // // //             </button>
            
// // // // // // // // // //             <div className="flex items-center">
// // // // // // // // // //               <div className="h-8 w-8 rounded-full bg-blue-700 flex items-center justify-center text-white font-medium mr-2">
// // // // // // // // // //                 A
// // // // // // // // // //               </div>
// // // // // // // // // //               <div className="flex items-center">
// // // // // // // // // //                 <span className="text-sm font-medium mr-1">Admin</span>
// // // // // // // // // //                 <ChevronDown size={14} />
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
      
// // // // // // // // // //       <div className="container mx-auto p-4">
// // // // // // // // // //         {/* Welcome section */}
// // // // // // // // // //         <div className="mb-6">
// // // // // // // // // //           <h2 className="text-lg font-medium text-gray-800">Welcome to {storeName || "Your Store"}</h2>
// // // // // // // // // //           <p className="text-sm text-gray-600">Here's what's happening with your store today</p>
// // // // // // // // // //         </div>
        
// // // // // // // // // //         {/* Stats cards */}
// // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
// // // // // // // // // //           {stats.map((stat, index) => (
// // // // // // // // // //             <div key={index} className="bg-white p-4 rounded-lg shadow">
// // // // // // // // // //               <div className="text-sm font-medium text-gray-500">{stat.title}</div>
// // // // // // // // // //               <div className="text-2xl font-bold mt-2">{stat.value}</div>
// // // // // // // // // //               <div className={`text-sm mt-2 flex items-center ${stat.up ? 'text-green-600' : 'text-red-600'}`}>
// // // // // // // // // //                 {stat.change}
// // // // // // // // // //                 {stat.up ? 
// // // // // // // // // //                   <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // // // // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
// // // // // // // // // //                   </svg> :
// // // // // // // // // //                   <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // // // // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// // // // // // // // // //                   </svg>
// // // // // // // // // //                 }
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>
        
// // // // // // // // // //         {/* Main dashboard layout */}
// // // // // // // // // //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // // // // // // // // //           {/* Transactions */}
// // // // // // // // // //           <div className="lg:col-span-2">
// // // // // // // // // //             <div className="bg-white rounded-lg shadow p-4 mb-6">
// // // // // // // // // //               <div className="flex justify-between items-center mb-4">
// // // // // // // // // //                 <h3 className="font-medium">Recent Transactions</h3>
// // // // // // // // // //                 <Link to="/Inter/DailySales" className="text-sm text-blue-600 hover:underline">View All</Link>
// // // // // // // // // //               </div>
              
// // // // // // // // // //               <div className="overflow-x-auto">
// // // // // // // // // //                 <table className="w-full">
// // // // // // // // // //                   <thead>
// // // // // // // // // //                     <tr className="border-b">
// // // // // // // // // //                       <th className="text-left py-2 px-2 text-sm font-medium text-gray-500">ID</th>
// // // // // // // // // //                       <th className="text-left py-2 px-2 text-sm font-medium text-gray-500">Customer</th>
// // // // // // // // // //                       <th className="text-left py-2 px-2 text-sm font-medium text-gray-500">Amount</th>
// // // // // // // // // //                       <th className="text-left py-2 px-2 text-sm font-medium text-gray-500">Time</th>
// // // // // // // // // //                       <th className="text-left py-2 px-2 text-sm font-medium text-gray-500">Status</th>
// // // // // // // // // //                     </tr>
// // // // // // // // // //                   </thead>
// // // // // // // // // //                   <tbody>
// // // // // // // // // //                     {recentTransactions.map((transaction, index) => (
// // // // // // // // // //                       <tr key={index} className="border-b last:border-0">
// // // // // // // // // //                         <td className="py-3 px-2 text-sm">{transaction.id}</td>
// // // // // // // // // //                         <td className="py-3 px-2 text-sm">{transaction.customer}</td>
// // // // // // // // // //                         <td className="py-3 px-2 text-sm font-medium">{transaction.amount}</td>
// // // // // // // // // //                         <td className="py-3 px-2 text-sm text-gray-500">{transaction.date}</td>
// // // // // // // // // //                         <td className="py-3 px-2 text-sm">
// // // // // // // // // //                           <span className={`inline-block px-2 py-1 rounded-full text-xs ${
// // // // // // // // // //                             transaction.status === 'completed' 
// // // // // // // // // //                               ? 'bg-green-100 text-green-800' 
// // // // // // // // // //                               : 'bg-yellow-100 text-yellow-800'
// // // // // // // // // //                           }`}>
// // // // // // // // // //                             {transaction.status}
// // // // // // // // // //                           </span>
// // // // // // // // // //                         </td>
// // // // // // // // // //                       </tr>
// // // // // // // // // //                     ))}
// // // // // // // // // //                   </tbody>
// // // // // // // // // //                 </table>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
            
// // // // // // // // // //             {/* Sales Chart Placeholder */}
// // // // // // // // // //             <div className="bg-white rounded-lg shadow p-4 mb-6">
// // // // // // // // // //               <div className="flex justify-between items-center mb-4">
// // // // // // // // // //                 <h3 className="font-medium">Sales Overview</h3>
// // // // // // // // // //                 <Link to="/Inter/SalesChart" className="text-sm text-blue-600 hover:underline">Detailed Report</Link>
// // // // // // // // // //               </div>
              
// // // // // // // // // //               <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
// // // // // // // // // //                 <Link to="/Inter/SalesChart" className="text-blue-600 hover:underline flex items-center">
// // // // // // // // // //                   <BarChart2 size={18} className="mr-2" />
// // // // // // // // // //                   <span>View Sales Chart</span>
// // // // // // // // // //                 </Link>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
          
// // // // // // // // // //           {/* Sidebar content */}
// // // // // // // // // //           <div className="space-y-6">
// // // // // // // // // //             {/* Quick Access */}
// // // // // // // // // //             <div className="bg-white rounded-lg shadow p-4">
// // // // // // // // // //               <h3 className="font-medium mb-4">Quick Access</h3>
// // // // // // // // // //               <div className="grid grid-cols-2 gap-2">
// // // // // // // // // //                 {quickLinks.slice(0, 6).map((link, index) => (
// // // // // // // // // //                   <Link 
// // // // // // // // // //                     key={index} 
// // // // // // // // // //                     to={link.path}
// // // // // // // // // //                     className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
// // // // // // // // // //                   >
// // // // // // // // // //                     <div className="mr-2 text-blue-600">
// // // // // // // // // //                       {link.icon}
// // // // // // // // // //                     </div>
// // // // // // // // // //                     <span className="truncate">{link.name}</span>
// // // // // // // // // //                   </Link>
// // // // // // // // // //                 ))}
// // // // // // // // // //               </div>
              
// // // // // // // // // //               <div className="mt-4 pt-3 border-t border-gray-100">
// // // // // // // // // //                 <Link 
// // // // // // // // // //                   to="/Inter"
// // // // // // // // // //                   className="flex items-center justify-center p-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm"
// // // // // // // // // //                 >
// // // // // // // // // //                   View All Features
// // // // // // // // // //                 </Link>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
            
// // // // // // // // // //             {/* Low Stock Alert */}
// // // // // // // // // //             <div className="bg-white rounded-lg shadow p-4">
// // // // // // // // // //               <div className="flex justify-between items-center mb-4">
// // // // // // // // // //                 <h3 className="font-medium">Low Stock Alert</h3>
// // // // // // // // // //                 <Link to="/Inter/RestockAlerts" className="text-sm text-blue-600 hover:underline">All Alerts</Link>
// // // // // // // // // //               </div>
              
// // // // // // // // // //               <div className="space-y-3">
// // // // // // // // // //                 {lowStockItems.map((item, index) => (
// // // // // // // // // //                   <div key={index} className="flex items-center justify-between p-2 rounded bg-gray-50">
// // // // // // // // // //                     <div>
// // // // // // // // // //                       <div className="font-medium text-sm">{item.name}</div>
// // // // // // // // // //                       <div className="text-xs text-gray-500">SKU: {item.id}</div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                     <div className="text-sm font-medium text-red-600">
// // // // // // // // // //                       {item.current}/{item.min}
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 ))}
// // // // // // // // // //               </div>
              
// // // // // // // // // //               <div className="mt-4">
// // // // // // // // // //                 <Link 
// // // // // // // // // //                   to="/Inter/SupplierOrderForm"
// // // // // // // // // //                   className="flex items-center justify-center p-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm"
// // // // // // // // // //                 >
// // // // // // // // // //                   Place Order
// // // // // // // // // //                 </Link>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default AdminDashboard;


// // // // // // // // // import React, { useState, useContext, useEffect } from "react";
// // // // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // // // import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
// // // // // // // // // import { 
// // // // // // // // //   Menu, 
// // // // // // // // //   Package, 
// // // // // // // // //   Users, 
// // // // // // // // //   BarChart2, 
// // // // // // // // //   Settings, 
// // // // // // // // //   CreditCard, 
// // // // // // // // //   Info, 
// // // // // // // // //   X, 
// // // // // // // // //   DollarSign,
// // // // // // // // //   UserCheck,
// // // // // // // // //   Search,
// // // // // // // // //   Bell,
// // // // // // // // //   LogOut,
// // // // // // // // //   Truck,
// // // // // // // // //   Layers,
// // // // // // // // //   ShoppingBag,
// // // // // // // // //   ChevronRight,
// // // // // // // // //   ChevronDown,
// // // // // // // // //   AlertTriangle,
// // // // // // // // //   User
// // // // // // // // // } from 'lucide-react';

// // // // // // // // // // Import all the components you need
// // // // // // // // // // These are placeholders - you'll need to import your actual components
// // // // // // // // // const ProductDashboard = () => <div>Product Dashboard</div>;
// // // // // // // // // const EmployeeManagement = () => <div>Employee Management</div>;
// // // // // // // // // const RoleDistribution = () => <div>Role Distribution</div>;
// // // // // // // // // const DailySales = () => <div>Daily Sales</div>;
// // // // // // // // // const StockTracking = () => <div>Stock Tracking</div>;
// // // // // // // // // const EmployeeSearch = () => <div>Employee Search</div>;
// // // // // // // // // const Billing = () => <div>Billing</div>;
// // // // // // // // // const CustomerSignupForm = () => <div>Customer Signup Form</div>;
// // // // // // // // // const ViewCustomers = () => <div>View Customers</div>;
// // // // // // // // // const SalesChart = () => <div>Sales Chart</div>;
// // // // // // // // // const ProductSales = () => <div>Product Sales</div>;
// // // // // // // // // const InventoryDashboard = () => <div>Inventory Dashboard</div>;
// // // // // // // // // const UserManagementPage = () => <div>User Management</div>;
// // // // // // // // // const ProductDashboard2 = () => <div>Restock Alerts</div>;
// // // // // // // // // const SupplierManagement = () => <div>Supplier Management</div>;
// // // // // // // // // const ContactUs = () => <div>Contact Us</div>;

// // // // // // // // // const AdminDashboard = () => {
// // // // // // // // //   const { storeName } = useContext(StoreContext);
// // // // // // // // //   const [sidebarOpen, setSidebarOpen] = useState(true);
// // // // // // // // //   const location = useLocation();
// // // // // // // // //   const navigate = useNavigate();
// // // // // // // // //   const [currentPage, setCurrentPage] = useState('dashboard');
// // // // // // // // //   const [expandedMenus, setExpandedMenus] = useState({
// // // // // // // // //     products: false,
// // // // // // // // //     employees: false,
// // // // // // // // //     sales: false,
// // // // // // // // //     customers: false,
// // // // // // // // //     suppliers: false
// // // // // // // // //   });

// // // // // // // // //   // Stats for dashboard
// // // // // // // // //   const stats = [
// // // // // // // // //     { title: 'Total Sales Today', value: '$5,890', change: '+15%', up: true },
// // // // // // // // //     { title: 'Low Stock Items', value: '24', change: '+8', up: false },
// // // // // // // // //     { title: 'Today\'s Orders', value: '42', change: '+12%', up: true },
// // // // // // // // //     { title: 'Active Employees', value: '18', change: '0', up: true },
// // // // // // // // //   ];
  
// // // // // // // // //   // Recent transactions for dashboard
// // // // // // // // //   const recentTransactions = [
// // // // // // // // //     { id: '#TRX-4589', customer: 'John Smith', amount: '$129.50', date: '20 min ago', status: 'completed' },
// // // // // // // // //     { id: '#TRX-4588', customer: 'Lisa Wong', amount: '$245.75', date: '45 min ago', status: 'completed' },
// // // // // // // // //     { id: '#TRX-4587', customer: 'Mike Johnson', amount: '$67.25', date: '1 hr ago', status: 'pending' },
// // // // // // // // //     { id: '#TRX-4586', customer: 'Sara Miller', amount: '$352.00', date: '2 hrs ago', status: 'completed' },
// // // // // // // // //   ];
  
// // // // // // // // //   // Low stock items
// // // // // // // // //   const lowStockItems = [
// // // // // // // // //     { id: 'P-1245', name: 'Premium Coffee Beans', current: 12, min: 20 },
// // // // // // // // //     { id: 'P-2340', name: 'Organic Green Tea', current: 8, min: 15 },
// // // // // // // // //     { id: 'P-1023', name: 'Vitamin C Tablets', current: 5, min: 10 },
// // // // // // // // //     { id: 'P-3456', name: 'Almond Milk', current: 9, min: 12 },
// // // // // // // // //   ];

// // // // // // // // //   // Toggle sidebar on mobile
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (window.innerWidth < 768) {
// // // // // // // // //       setSidebarOpen(false);
// // // // // // // // //     }
// // // // // // // // //   }, [location]);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const handleResize = () => {
// // // // // // // // //       if (window.innerWidth >= 768) {
// // // // // // // // //         setSidebarOpen(true);
// // // // // // // // //       }
// // // // // // // // //     };

// // // // // // // // //     window.addEventListener('resize', handleResize);
// // // // // // // // //     handleResize();
// // // // // // // // //     return () => window.removeEventListener('resize', handleResize);
// // // // // // // // //   }, []);

// // // // // // // // //   // Toggle submenu expandable sections
// // // // // // // // //   const toggleMenu = (menu) => {
// // // // // // // // //     setExpandedMenus(prev => ({
// // // // // // // // //       ...prev,
// // // // // // // // //       [menu]: !prev[menu]
// // // // // // // // //     }));
// // // // // // // // //   };

// // // // // // // // //   // Change current page based on menu click
// // // // // // // // //   const changePage = (page) => {
// // // // // // // // //     setCurrentPage(page);
// // // // // // // // //     if (window.innerWidth < 768) {
// // // // // // // // //       setSidebarOpen(false);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   // Render main dashboard content
// // // // // // // // //   const renderDashboard = () => (
// // // // // // // // //     <div className="space-y-6">
// // // // // // // // //       {/* Welcome section */}
// // // // // // // // //       <div className="mb-6">
// // // // // // // // //         <h2 className="text-lg font-medium text-gray-800">Welcome to {storeName || "Your Store"}</h2>
// // // // // // // // //         <p className="text-sm text-gray-600">Here's what's happening with your store today</p>
// // // // // // // // //       </div>
      
// // // // // // // // //       {/* Stats cards */}
// // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
// // // // // // // // //         {stats.map((stat, index) => (
// // // // // // // // //           <div key={index} className="bg-white p-4 rounded-lg shadow">
// // // // // // // // //             <div className="text-sm font-medium text-gray-500">{stat.title}</div>
// // // // // // // // //             <div className="text-2xl font-bold mt-2">{stat.value}</div>
// // // // // // // // //             <div className={`text-sm mt-2 flex items-center ${stat.up ? 'text-green-600' : 'text-red-600'}`}>
// // // // // // // // //               {stat.change}
// // // // // // // // //               {stat.up ? 
// // // // // // // // //                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // // // // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
// // // // // // // // //                 </svg> :
// // // // // // // // //                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // // // // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// // // // // // // // //                 </svg>
// // // // // // // // //               }
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         ))}
// // // // // // // // //       </div>
      
// // // // // // // // //       {/* Main dashboard layout */}
// // // // // // // // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // // // // // // // //         {/* Transactions */}
// // // // // // // // //         <div className="lg:col-span-2">
// // // // // // // // //           <div className="bg-white rounded-lg shadow p-4 mb-6">
// // // // // // // // //             <div className="flex justify-between items-center mb-4">
// // // // // // // // //               <h3 className="font-medium">Recent Transactions</h3>
// // // // // // // // //               <button onClick={() => changePage('dailySales')} className="text-sm text-blue-600 hover:underline">View All</button>
// // // // // // // // //             </div>
            
// // // // // // // // //             <div className="overflow-x-auto">
// // // // // // // // //               <table className="w-full">
// // // // // // // // //                 <thead>
// // // // // // // // //                   <tr className="border-b">
// // // // // // // // //                     <th className="text-left py-2 px-2 text-sm font-medium text-gray-500">ID</th>
// // // // // // // // //                     <th className="text-left py-2 px-2 text-sm font-medium text-gray-500">Customer</th>
// // // // // // // // //                     <th className="text-left py-2 px-2 text-sm font-medium text-gray-500">Amount</th>
// // // // // // // // //                     <th className="text-left py-2 px-2 text-sm font-medium text-gray-500">Time</th>
// // // // // // // // //                     <th className="text-left py-2 px-2 text-sm font-medium text-gray-500">Status</th>
// // // // // // // // //                   </tr>
// // // // // // // // //                 </thead>
// // // // // // // // //                 <tbody>
// // // // // // // // //                   {recentTransactions.map((transaction, index) => (
// // // // // // // // //                     <tr key={index} className="border-b last:border-0">
// // // // // // // // //                       <td className="py-3 px-2 text-sm">{transaction.id}</td>
// // // // // // // // //                       <td className="py-3 px-2 text-sm">{transaction.customer}</td>
// // // // // // // // //                       <td className="py-3 px-2 text-sm font-medium">{transaction.amount}</td>
// // // // // // // // //                       <td className="py-3 px-2 text-sm text-gray-500">{transaction.date}</td>
// // // // // // // // //                       <td className="py-3 px-2 text-sm">
// // // // // // // // //                         <span className={`inline-block px-2 py-1 rounded-full text-xs ${
// // // // // // // // //                           transaction.status === 'completed' 
// // // // // // // // //                             ? 'bg-green-100 text-green-800' 
// // // // // // // // //                             : 'bg-yellow-100 text-yellow-800'
// // // // // // // // //                         }`}>
// // // // // // // // //                           {transaction.status}
// // // // // // // // //                         </span>
// // // // // // // // //                       </td>
// // // // // // // // //                     </tr>
// // // // // // // // //                   ))}
// // // // // // // // //                 </tbody>
// // // // // // // // //               </table>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
          
// // // // // // // // //           {/* Sales Chart Placeholder */}
// // // // // // // // //           <div className="bg-white rounded-lg shadow p-4 mb-6">
// // // // // // // // //             <div className="flex justify-between items-center mb-4">
// // // // // // // // //               <h3 className="font-medium">Sales Overview</h3>
// // // // // // // // //               <button onClick={() => changePage('salesChart')} className="text-sm text-blue-600 hover:underline">Detailed Report</button>
// // // // // // // // //             </div>
            
// // // // // // // // //             <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
// // // // // // // // //               <button onClick={() => changePage('salesChart')} className="text-blue-600 hover:underline flex items-center">
// // // // // // // // //                 <BarChart2 size={18} className="mr-2" />
// // // // // // // // //                 <span>View Sales Chart</span>
// // // // // // // // //               </button>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
        
// // // // // // // // //         {/* Sidebar content */}
// // // // // // // // //         <div className="space-y-6">
// // // // // // // // //           {/* Quick Access */}
// // // // // // // // //           <div className="bg-white rounded-lg shadow p-4">
// // // // // // // // //             <h3 className="font-medium mb-4">Quick Access</h3>
// // // // // // // // //             <div className="grid grid-cols-2 gap-2">
// // // // // // // // //               <button 
// // // // // // // // //                 onClick={() => changePage('products')} 
// // // // // // // // //                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
// // // // // // // // //               >
// // // // // // // // //                 <Package size={16} className="mr-2 text-blue-600" />
// // // // // // // // //                 <span className="truncate">Products</span>
// // // // // // // // //               </button>
// // // // // // // // //               <button 
// // // // // // // // //                 onClick={() => changePage('employees')} 
// // // // // // // // //                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
// // // // // // // // //               >
// // // // // // // // //                 <Users size={16} className="mr-2 text-blue-600" />
// // // // // // // // //                 <span className="truncate">Employees</span>
// // // // // // // // //               </button>
// // // // // // // // //               <button 
// // // // // // // // //                 onClick={() => changePage('dailySales')} 
// // // // // // // // //                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
// // // // // // // // //               >
// // // // // // // // //                 <DollarSign size={16} className="mr-2 text-blue-600" />
// // // // // // // // //                 <span className="truncate">Daily Sales</span>
// // // // // // // // //               </button>
// // // // // // // // //               <button 
// // // // // // // // //                 onClick={() => changePage('billing')} 
// // // // // // // // //                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
// // // // // // // // //               >
// // // // // // // // //                 <CreditCard size={16} className="mr-2 text-blue-600" />
// // // // // // // // //                 <span className="truncate">Billing</span>
// // // // // // // // //               </button>
// // // // // // // // //               <button 
// // // // // // // // //                 onClick={() => changePage('stockTracking')} 
// // // // // // // // //                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
// // // // // // // // //               >
// // // // // // // // //                 <Layers size={16} className="mr-2 text-blue-600" />
// // // // // // // // //                 <span className="truncate">Stock</span>
// // // // // // // // //               </button>
// // // // // // // // //               <button 
// // // // // // // // //                 onClick={() => changePage('suppliers')} 
// // // // // // // // //                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
// // // // // // // // //               >
// // // // // // // // //                 <Truck size={16} className="mr-2 text-blue-600" />
// // // // // // // // //                 <span className="truncate">Suppliers</span>
// // // // // // // // //               </button>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
          
// // // // // // // // //           {/* Low Stock Alert */}
// // // // // // // // //           <div className="bg-white rounded-lg shadow p-4">
// // // // // // // // //             <div className="flex justify-between items-center mb-4">
// // // // // // // // //               <h3 className="font-medium">Low Stock Alert</h3>
// // // // // // // // //               <button onClick={() => changePage('restockAlerts')} className="text-sm text-blue-600 hover:underline">All Alerts</button>
// // // // // // // // //             </div>
            
// // // // // // // // //             <div className="space-y-3">
// // // // // // // // //               {lowStockItems.map((item, index) => (
// // // // // // // // //                 <div key={index} className="flex items-center justify-between p-2 rounded bg-gray-50">
// // // // // // // // //                   <div>
// // // // // // // // //                     <div className="font-medium text-sm">{item.name}</div>
// // // // // // // // //                     <div className="text-xs text-gray-500">SKU: {item.id}</div>
// // // // // // // // //                   </div>
// // // // // // // // //                   <div className="text-sm font-medium text-red-600">
// // // // // // // // //                     {item.current}/{item.min}
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
// // // // // // // // //               ))}
// // // // // // // // //             </div>
            
// // // // // // // // //             <div className="mt-4">
// // // // // // // // //               <button 
// // // // // // // // //                 onClick={() => changePage('suppliers')}
// // // // // // // // //                 className="flex items-center justify-center p-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm w-full"
// // // // // // // // //               >
// // // // // // // // //                 Place Order
// // // // // // // // //               </button>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );

// // // // // // // // //   // Render the selected page content
// // // // // // // // //   const renderContent = () => {
// // // // // // // // //     switch(currentPage) {
// // // // // // // // //       case 'dashboard':
// // // // // // // // //         return renderDashboard();
// // // // // // // // //       case 'products':
// // // // // // // // //         return <ProductDashboard />;
// // // // // // // // //       case 'employees':
// // // // // // // // //         return <EmployeeManagement />;
// // // // // // // // //       case 'roles':
// // // // // // // // //         return <RoleDistribution />;
// // // // // // // // //       case 'dailySales':
// // // // // // // // //         return <DailySales />;
// // // // // // // // //       case 'stockTracking':
// // // // // // // // //         return <StockTracking />;
// // // // // // // // //       case 'employeeSearch':
// // // // // // // // //         return <EmployeeSearch />;
// // // // // // // // //       case 'billing':
// // // // // // // // //         return <Billing />;
// // // // // // // // //       case 'customerSignup':
// // // // // // // // //         return <CustomerSignupForm />;
// // // // // // // // //       case 'customers':
// // // // // // // // //         return <ViewCustomers />;
// // // // // // // // //       case 'salesChart':
// // // // // // // // //         return <SalesChart />;
// // // // // // // // //       case 'productSales':
// // // // // // // // //         return <ProductSales />;
// // // // // // // // //       case 'inventory':
// // // // // // // // //         return <InventoryDashboard />;
// // // // // // // // //       case 'users':
// // // // // // // // //         return <UserManagementPage />;
// // // // // // // // //       case 'restockAlerts':
// // // // // // // // //         return <ProductDashboard2 />;
// // // // // // // // //       case 'suppliers':
// // // // // // // // //         return <SupplierManagement />;
// // // // // // // // //       default:
// // // // // // // // //         return renderDashboard();
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="min-h-screen bg-gray-50 flex">
// // // // // // // // //       {/* Mobile overlay for sidebar */}
// // // // // // // // //       {sidebarOpen && (
// // // // // // // // //         <div
// // // // // // // // //           className="fixed inset-0 bg-black/50 md:hidden z-20"
// // // // // // // // //           onClick={() => setSidebarOpen(false)}
// // // // // // // // //         />
// // // // // // // // //       )}

// // // // // // // // //       {/* Sidebar */}
// // // // // // // // //       <aside
// // // // // // // // //         className={`fixed md:static inset-y-0 left-0 w-64 bg-gradient-to-br from-blue-800 to-blue-600
// // // // // // // // //           transform transition-transform duration-300 ease-in-out z-30
// // // // // // // // //           ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
// // // // // // // // //       >
// // // // // // // // //         <div className="h-16 flex items-center justify-between px-4 border-b border-white/20">
// // // // // // // // //           <h1 className="text-xl font-bold text-white truncate">
// // // // // // // // //             {storeName || "Store Manager"}
// // // // // // // // //           </h1>
// // // // // // // // //           <button
// // // // // // // // //             onClick={() => setSidebarOpen(false)}
// // // // // // // // //             className="md:hidden text-white hover:text-gray-200"
// // // // // // // // //           >
// // // // // // // // //             <X size={24} />
// // // // // // // // //           </button>
// // // // // // // // //         </div>

// // // // // // // // //         <div className="p-4">
// // // // // // // // //           <div className="flex items-center space-x-3 mb-6">
// // // // // // // // //             <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-blue-800 font-bold">
// // // // // // // // //               A
// // // // // // // // //             </div>
// // // // // // // // //             <div>
// // // // // // // // //               <div className="font-medium text-white">Admin User</div>
// // // // // // // // //               <div className="text-sm text-blue-200">Super Admin</div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
          
// // // // // // // // //           <nav>
// // // // // // // // //             <ul className="space-y-1">
// // // // // // // // //               <li>
// // // // // // // // //                 <button 
// // // // // // // // //                   onClick={() => changePage('dashboard')}
// // // // // // // // //                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'dashboard' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// // // // // // // // //                 >
// // // // // // // // //                   <BarChart2 size={18} className="mr-3" />
// // // // // // // // //                   Dashboard
// // // // // // // // //                 </button>
// // // // // // // // //               </li>
              
// // // // // // // // //               {/* Products dropdown */}
// // // // // // // // //               <li>
// // // // // // // // //                 <div>
// // // // // // // // //                   <button 
// // // // // // // // //                     onClick={() => toggleMenu('products')}
// // // // // // // // //                     className={`flex items-center justify-between w-full p-2 rounded-md 
// // // // // // // // //                       ${currentPage === 'products' || currentPage === 'inventory' || currentPage === 'restockAlerts' ? 
// // // // // // // // //                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// // // // // // // // //                   >
// // // // // // // // //                     <div className="flex items-center">
// // // // // // // // //                       <Package size={18} className="mr-3" />
// // // // // // // // //                       Products
// // // // // // // // //                     </div>
// // // // // // // // //                     {expandedMenus.products ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
// // // // // // // // //                   </button>
                  
// // // // // // // // //                   {expandedMenus.products && (
// // // // // // // // //                     <ul className="pl-9 pt-1 pb-1">
// // // // // // // // //                       <li>
// // // // // // // // //                         <button 
// // // // // // // // //                           onClick={() => changePage('products')} 
// // // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // // //                         >
// // // // // // // // //                           All Products
// // // // // // // // //                         </button>
// // // // // // // // //                       </li>
// // // // // // // // //                       <li>
// // // // // // // // //                         <button 
// // // // // // // // //                           onClick={() => changePage('inventory')} 
// // // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // // //                         >
// // // // // // // // //                           Inventory
// // // // // // // // //                         </button>
// // // // // // // // //                       </li>
// // // // // // // // //                       <li>
// // // // // // // // //                         <button 
// // // // // // // // //                           onClick={() => changePage('restockAlerts')} 
// // // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // // //                         >
// // // // // // // // //                           Restock Alerts
// // // // // // // // //                         </button>
// // // // // // // // //                       </li>
// // // // // // // // //                     </ul>
// // // // // // // // //                   )}
// // // // // // // // //                 </div>
// // // // // // // // //               </li>
              
// // // // // // // // //               {/* Employees dropdown */}
// // // // // // // // //               <li>
// // // // // // // // //                 <div>
// // // // // // // // //                   <button 
// // // // // // // // //                     onClick={() => toggleMenu('employees')}
// // // // // // // // //                     className={`flex items-center justify-between w-full p-2 rounded-md 
// // // // // // // // //                       ${currentPage === 'employees' || currentPage === 'roles' || currentPage === 'employeeSearch' ? 
// // // // // // // // //                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// // // // // // // // //                   >
// // // // // // // // //                     <div className="flex items-center">
// // // // // // // // //                       <Users size={18} className="mr-3" />
// // // // // // // // //                       Employees
// // // // // // // // //                     </div>
// // // // // // // // //                     {expandedMenus.employees ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
// // // // // // // // //                   </button>
                  
// // // // // // // // //                   {expandedMenus.employees && (
// // // // // // // // //                     <ul className="pl-9 pt-1 pb-1">
// // // // // // // // //                       <li>
// // // // // // // // //                         <button 
// // // // // // // // //                           onClick={() => changePage('employees')} 
// // // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // // //                         >
// // // // // // // // //                           Manage Employees
// // // // // // // // //                         </button>
// // // // // // // // //                       </li>
// // // // // // // // //                       <li>
// // // // // // // // //                         <button 
// // // // // // // // //                           onClick={() => changePage('roles')} 
// // // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // // //                         >
// // // // // // // // //                           Roles & Permissions
// // // // // // // // //                         </button>
// // // // // // // // //                       </li>
// // // // // // // // //                       <li>
// // // // // // // // //                         <button 
// // // // // // // // //                           onClick={() => changePage('employeeSearch')} 
// // // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // // //                         >
// // // // // // // // //                           Employee Search
// // // // // // // // //                         </button>
// // // // // // // // //                       </li>
// // // // // // // // //                     </ul>
// // // // // // // // //                   )}
// // // // // // // // //                 </div>
// // // // // // // // //               </li>
              
// // // // // // // // //               {/* Sales dropdown */}
// // // // // // // // //               <li>
// // // // // // // // //                 <div>
// // // // // // // // //                   <button 
// // // // // // // // //                     onClick={() => toggleMenu('sales')}
// // // // // // // // //                     className={`flex items-center justify-between w-full p-2 rounded-md 
// // // // // // // // //                       ${currentPage === 'dailySales' || currentPage === 'salesChart' || currentPage === 'productSales' || currentPage === 'billing' ? 
// // // // // // // // //                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// // // // // // // // //                   >
// // // // // // // // //                     <div className="flex items-center">
// // // // // // // // //                       <DollarSign size={18} className="mr-3" />
// // // // // // // // //                       Sales
// // // // // // // // //                     </div>
// // // // // // // // //                     {expandedMenus.sales ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
// // // // // // // // //                   </button>
                  
// // // // // // // // //                   {expandedMenus.sales && (
// // // // // // // // //                     <ul className="pl-9 pt-1 pb-1">
// // // // // // // // //                       <li>
// // // // // // // // //                         <button 
// // // // // // // // //                           onClick={() => changePage('dailySales')} 
// // // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // // //                         >
// // // // // // // // //                           Daily Sales
// // // // // // // // //                         </button>
// // // // // // // // //                       </li>
// // // // // // // // //                       <li>
// // // // // // // // //                         <button 
// // // // // // // // //                           onClick={() => changePage('salesChart')} 
// // // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // // //                         >
// // // // // // // // //                           Sales Reports
// // // // // // // // //                         </button>
// // // // // // // // //                       </li>
// // // // // // // // //                       <li>
// // // // // // // // //                         <button 
// // // // // // // // //                           onClick={() => changePage('productSales')} 
// // // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // // //                         >
// // // // // // // // //                           Product Sales
// // // // // // // // //                         </button>
// // // // // // // // //                       </li>
// // // // // // // // //                       <li>
// // // // // // // // //                         <button 
// // // // // // // // //                           onClick={() => changePage('billing')} 
// // // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // // //                         >
// // // // // // // // //                           Billing
// // // // // // // // //                         </button>
// // // // // // // // //                       </li>
// // // // // // // // //                     </ul>
// // // // // // // // //                   )}
// // // // // // // // //                 </div>
// // // // // // // // //               </li>
              
// // // // // // // // //               {/* Customers dropdown */}
// // // // // // // // //               <li>
// // // // // // // // //                 <div>
// // // // // // // // //                   <button 
// // // // // // // // //                     onClick={() => toggleMenu('customers')}
// // // // // // // // //                     className={`flex items-center justify-between w-full p-2 rounded-md 
// // // // // // // // //                       ${currentPage === 'customers' || currentPage === 'customerSignup' ? 
// // // // // // // // //                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// // // // // // // // //                   >
// // // // // // // // //                     <div className="flex items-center">
// // // // // // // // //                       <UserCheck size={18} className="mr-3" />
// // // // // // // // //                       Customers
// // // // // // // // //                     </div>
// // // // // // // // //                     {expandedMenus.customers ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
// // // // // // // // //                   </button>
                  
// // // // // // // // //                   {expandedMenus.customers && (
// // // // // // // // //                     <ul className="pl-9 pt-1 pb-1">
// // // // // // // // //                       <li>
// // // // // // // // //                         <button 
// // // // // // // // //                           onClick={() => changePage('customers')} 
// // // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // // //                         >
// // // // // // // // //                           View Customers
// // // // // // // // //                         </button>
// // // // // // // // //                       </li>
// // // // // // // // //                       <li>
// // // // // // // // //                         <button 
// // // // // // // // //                           onClick={() => changePage('customerSignup')} 
// // // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // // //                         >
// // // // // // // // //                           Add Customer
// // // // // // // // //                         </button>
// // // // // // // // //                       </li>
// // // // // // // // //                     </ul>
// // // // // // // // //                   )}
// // // // // // // // //                 </div>
// // // // // // // // //               </li>
              
// // // // // // // // //               {/* Suppliers */}
// // // // // // // // //               <li>
// // // // // // // // //                 <button 
// // // // // // // // //                   onClick={() => changePage('suppliers')}
// // // // // // // // //                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'suppliers' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// // // // // // // // //                 >
// // // // // // // // //                   <Truck size={18} className="mr-3" />
// // // // // // // // //                   Suppliers
// // // // // // // // //                 </button>
// // // // // // // // //               </li>
              
// // // // // // // // //               {/* Inventory/Stock */}
// // // // // // // // //               <li>
// // // // // // // // //                 <button 
// // // // // // // // //                   onClick={() => changePage('stockTracking')}
// // // // // // // // //                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'stockTracking' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// // // // // // // // //                 >
// // // // // // // // //                   <Layers size={18} className="mr-3" />
// // // // // // // // //                   Stock Tracking
// // // // // // // // //                 </button>
// // // // // // // // //               </li>
              
// // // // // // // // //               {/* User Management */}
// // // // // // // // //               <li>
// // // // // // // // //                 <button 
// // // // // // // // //                   onClick={() => changePage('users')}
// // // // // // // // //                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'users' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// // // // // // // // //                 >
// // // // // // // // //                   <User size={18} className="mr-3" />
// // // // // // // // //                   User Management
// // // // // // // // //                 </button>
// // // // // // // // //               </li>
              
// // // // // // // // //               {/* Settings */}
// // // // // // // // //               <li>
// // // // // // // // //                 <button 
// // // // // // // // //                   className="flex items-center w-full p-2 rounded-md text-white hover:bg-white/10"
// // // // // // // // //                 >
// // // // // // // // //                   <Settings size={18} className="mr-3" />
// // // // // // // // //                   Settings
// // // // // // // // //                 </button>
// // // // // // // // //               </li>
// // // // // // // // //             </ul>
// // // // // // // // //           </nav>
// // // // // // // // //         </div>
// // // // // // // // //       </aside>

// // // // // // // // //       {/* Mobile menu button */}
// // // // // // // // //       <button
// // // // // // // // //         onClick={() => setSidebarOpen(true)}
// // // // // // // // //         className={`md:hidden fixed top-4 left-4 z-10 p-2 rounded-lg bg-blue-800 text-white
// // // // // // // // //           shadow-lg hover:bg-blue-700 transition-colors duration-200
// // // // // // // // //           ${sidebarOpen ? 'hidden' : 'block'}`}
// // // // // // // // //       >
// // // // // // // // //         <Menu size={24} />
// // // // // // // // //       </button>

// // // // // // // // //       {/* Main content */}
// // // // // // // // //       <main className="flex-1 overflow-auto">
// // // // // // // // //         {/* Top header */}
// // // // // // // // //         <div className="bg-white shadow-sm border-b">
// // // // // // // // //           <div className="px-4 py-3 flex justify-between items-center">
// // // // // // // // //             <div className="md:hidden flex items-center">
// // // // // // // // //               <h1 className="text-xl font-bold text-blue-800">
// // // // // // // // //                 {currentPage === 'dashboard' ? 'Dashboard' : 
// // // // // // // // //                  currentPage === 'products' ? 'Products' :
// // // // // // // // //                  currentPage === 'employees' ? 'Employees' :
// // // // // // // // //                  currentPage === 'dailySales' ? 'Sales' :
// // // // // // // // //                  currentPage === 'stockTracking' ? 'Stock' :
// // // // // // // // //                  currentPage === 'suppliers' ? 'Suppliers' :
// // // // // // // // //                  'Admin Dashboard'}
// // // // // // // // //               </h1>
// // // // // // // // //             </div>
            
// // // // // // // // //             <div className="hidden md:flex items-center">
// // // // // // // // //               <div className="relative mr-4">
// // // // // // // // //                 <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// // // // // // // // //                 <input
// // // // // // // // //                   type="text"
// // // // // // // // //                   placeholder="Search..."
// // // // // // // // //                   className="pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // // // // // // // //                 />
// // // // // // // // //               </div>
// // // // // // // // //             </div>
            
// // // // // // // // //             <div className="flex items-center space-x-4">
// // // // // // // // //               <button className="p-1 rounded-full hover:bg-gray-100 relative">
// // // // // // // // //                 <Bell size={20} />
// // // // // // // // //                 <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
// // // // // // // // //               </button>
              
// // // // // // // // //               <button className="flex items-center text-sm text-red-600 hover:text-red-800">
// // // // // // // // //                 <LogOut size={16} className="mr-1" />
// // // // // // // // //                 <span className="hidden md:inline">Logout</span>
// // // // // // // // //               </button>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
        
// // // // // // // // //         {/* Page content */}
// // // // // // // // //         <div className="p-4">
// // // // // // // // //           {renderContent()}
// // // // // // // // //         </div>
// // // // // // // // //       </main>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default AdminDashboard;  




// // // // // // // // // import React, { useState, useContext, useEffect } from "react";
// // // // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // // // import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
// // // // // // // // // import { 
// // // // // // // // //   Menu, 
// // // // // // // // //   Package, 
// // // // // // // // //   Users, 
// // // // // // // // //   BarChart2, 
// // // // // // // // //   Settings, 
// // // // // // // // //   CreditCard, 
// // // // // // // // //   Info, 
// // // // // // // // //   X, 
// // // // // // // // //   DollarSign,
// // // // // // // // //   UserCheck,
// // // // // // // // //   Search,
// // // // // // // // //   Bell,
// // // // // // // // //   LogOut,
// // // // // // // // //   Truck,
// // // // // // // // //   Layers,
// // // // // // // // //   ShoppingBag,
// // // // // // // // //   ChevronRight,
// // // // // // // // //   ChevronDown,
// // // // // // // // //   AlertTriangle,
// // // // // // // // //   User
// // // // // // // // // } from 'lucide-react';

// // // // // // // // // // Import all the components you need
// // // // // // // // // import ProductDashboard from "./ProductManagement";
// // // // // // // // // import EmployeeManagement from "./EmployeeManagement";
// // // // // // // // // import RoleDistribution from "./RoleDistribution";
// // // // // // // // // import DailySales from "./DailySales";
// // // // // // // // // import StockTracking from "./StockTracking";
// // // // // // // // // import EmployeeSearch from "./EmployeeSearch";
// // // // // // // // // import Billing from "./Billing";
// // // // // // // // // import CustomerSignupForm from "./CustomerSignUpForm";
// // // // // // // // // import ViewCustomers from "./ViewCustomers";
// // // // // // // // // import SalesChart from "./SalesChart";
// // // // // // // // // import ProductSales from "./ProductSales";
// // // // // // // // // import InventoryDashboard from "./InventoryDashboard";
// // // // // // // // // import UserManagementPage from "./UserManagement";
// // // // // // // // // import ProductDashboard2 from "./RestockAlerts";
// // // // // // // // // import SupplierManagement from "./SupplierManagement";

// // // // // // // // // const AdminDashboard = () => {
// // // // // // // // //   const { storeName } = useContext(StoreContext);
// // // // // // // // //   const [sidebarOpen, setSidebarOpen] = useState(true);
// // // // // // // // //   const location = useLocation();
// // // // // // // // //   const navigate = useNavigate();
// // // // // // // // //   const [currentPage, setCurrentPage] = useState('dashboard');
// // // // // // // // //   const [expandedMenus, setExpandedMenus] = useState({
// // // // // // // // //     products: false,
// // // // // // // // //     employees: false,
// // // // // // // // //     sales: false,
// // // // // // // // //     customers: false,
// // // // // // // // //     suppliers: false
// // // // // // // // //   });

// // // // // // // // //   // Stats for dashboard
// // // // // // // // //   const stats = [
// // // // // // // // //     { title: 'Total Sales Today', value: '$5,890', change: '+15%', up: true },
// // // // // // // // //     { title: 'Low Stock Items', value: '24', change: '+8', up: false },
// // // // // // // // //     { title: 'Today\'s Orders', value: '42', change: '+12%', up: true },
// // // // // // // // //     { title: 'Active Employees', value: '18', change: '0', up: true },
// // // // // // // // //   ];
  
// // // // // // // // //   // Recent transactions for dashboard
// // // // // // // // //   const recentTransactions = [
// // // // // // // // //     { id: '#TRX-4589', customer: 'John Smith', amount: '$129.50', date: '20 min ago', status: 'completed' },
// // // // // // // // //     { id: '#TRX-4588', customer: 'Lisa Wong', amount: '$245.75', date: '45 min ago', status: 'completed' },
// // // // // // // // //     { id: '#TRX-4587', customer: 'Mike Johnson', amount: '$67.25', date: '1 hr ago', status: 'pending' },
// // // // // // // // //     { id: '#TRX-4586', customer: 'Sara Miller', amount: '$352.00', date: '2 hrs ago', status: 'completed' },
// // // // // // // // //   ];
  
// // // // // // // // //   // Low stock items
// // // // // // // // //   const lowStockItems = [
// // // // // // // // //     { id: 'P-1245', name: 'Premium Coffee Beans', current: 12, min: 20 },
// // // // // // // // //     { id: 'P-2340', name: 'Organic Green Tea', current: 8, min: 15 },
// // // // // // // // //     { id: 'P-1023', name: 'Vitamin C Tablets', current: 5, min: 10 },
// // // // // // // // //     { id: 'P-3456', name: 'Almond Milk', current: 9, min: 12 },
// // // // // // // // //   ];

// // // // // // // // //   // Toggle sidebar on mobile
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (window.innerWidth < 768) {
// // // // // // // // //       setSidebarOpen(false);
// // // // // // // // //     }
// // // // // // // // //   }, [location]);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const handleResize = () => {
// // // // // // // // //       if (window.innerWidth >= 768) {
// // // // // // // // //         setSidebarOpen(true);
// // // // // // // // //       }
// // // // // // // // //     };

// // // // // // // // //     window.addEventListener('resize', handleResize);
// // // // // // // // //     handleResize();
// // // // // // // // //     return () => window.removeEventListener('resize', handleResize);
// // // // // // // // //   }, []);

// // // // // // // // //   // Toggle submenu expandable sections
// // // // // // // // //   const toggleMenu = (menu) => {
// // // // // // // // //     setExpandedMenus(prev => ({
// // // // // // // // //       ...prev,
// // // // // // // // //       [menu]: !prev[menu]
// // // // // // // // //     }));
// // // // // // // // //   };

// // // // // // // // //   // Change current page based on menu click
// // // // // // // // //   const changePage = (page) => {
// // // // // // // // //     setCurrentPage(page);
// // // // // // // // //     if (window.innerWidth < 768) {
// // // // // // // // //       setSidebarOpen(false);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   // Render main dashboard content
// // // // // // // // //   const renderDashboard = () => (
// // // // // // // // //     <div className="space-y-6">
// // // // // // // // //       {/* Welcome section */}
// // // // // // // // //       <div className="mb-6">
// // // // // // // // //         <h2 className="text-lg font-medium text-gray-800">Welcome to {storeName || "Your Store"}</h2>
// // // // // // // // //         <p className="text-sm text-gray-600">Here's what's happening with your store today</p>
// // // // // // // // //       </div>
      
// // // // // // // // //       {/* Stats cards */}
// // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
// // // // // // // // //         {stats.map((stat, index) => (
// // // // // // // // //           <div key={index} className="bg-white p-4 rounded-lg shadow">
// // // // // // // // //             <div className="text-sm font-medium text-gray-500">{stat.title}</div>
// // // // // // // // //             <div className="text-2xl font-bold mt-2">{stat.value}</div>
// // // // // // // // //             <div className={`text-sm mt-2 flex items-center ${stat.up ? 'text-green-600' : 'text-red-600'}`}>
// // // // // // // // //               {stat.change}
// // // // // // // // //               {stat.up ? 
// // // // // // // // //                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // // // // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
// // // // // // // // //                 </svg> :
// // // // // // // // //                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // // // // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// // // // // // // // //                 </svg>
// // // // // // // // //               }
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         ))}
// // // // // // // // //       </div>
      
// // // // // // // // //       {/* Main dashboard layout */}
// // // // // // // // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // // // // // // // //         {/* Transactions */}
// // // // // // // // //         <div className="lg:col-span-2">
// // // // // // // // //           <div className="bg-white rounded-lg shadow p-4 mb-6">
// // // // // // // // //             <div className="flex justify-between items-center mb-4">
// // // // // // // // //               <h3 className="font-medium">Recent Transactions</h3>
// // // // // // // // //               <button onClick={() => changePage('dailySales')} className="text-sm text-blue-600 hover:underline">View All</button>
// // // // // // // // //             </div>
            
// // // // // // // // //             <div className="overflow-x-auto">
// // // // // // // // //               <table className="w-full">
// // // // // // // // //                 <thead>
// // // // // // // // //                   <tr className="border-b">
// // // // // // // // //                     <th className="text-left py-2 px-2 text-sm font-medium text-gray-500">ID</th>
// // // // // // // // //                     <th className="text-left py-2 px-2 text-sm font-medium text-gray-500">Customer</th>
// // // // // // // // //                     <th className="text-left py-2 px-2 text-sm font-medium text-gray-500">Amount</th>
// // // // // // // // //                     <th className="text-left py-2 px-2 text-sm font-medium text-gray-500">Time</th>
// // // // // // // // //                     <th className="text-left py-2 px-2 text-sm font-medium text-gray-500">Status</th>
// // // // // // // // //                   </tr>
// // // // // // // // //                 </thead>
// // // // // // // // //                 <tbody>
// // // // // // // // //                   {recentTransactions.map((transaction, index) => (
// // // // // // // // //                     <tr key={index} className="border-b last:border-0">
// // // // // // // // //                       <td className="py-3 px-2 text-sm">{transaction.id}</td>
// // // // // // // // //                       <td className="py-3 px-2 text-sm">{transaction.customer}</td>
// // // // // // // // //                       <td className="py-3 px-2 text-sm font-medium">{transaction.amount}</td>
// // // // // // // // //                       <td className="py-3 px-2 text-sm text-gray-500">{transaction.date}</td>
// // // // // // // // //                       <td className="py-3 px-2 text-sm">
// // // // // // // // //                         <span className={`inline-block px-2 py-1 rounded-full text-xs ${
// // // // // // // // //                           transaction.status === 'completed' 
// // // // // // // // //                             ? 'bg-green-100 text-green-800' 
// // // // // // // // //                             : 'bg-yellow-100 text-yellow-800'
// // // // // // // // //                         }`}>
// // // // // // // // //                           {transaction.status}
// // // // // // // // //                         </span>
// // // // // // // // //                       </td>
// // // // // // // // //                     </tr>
// // // // // // // // //                   ))}
// // // // // // // // //                 </tbody>
// // // // // // // // //               </table>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
          
// // // // // // // // //           {/* Sales Chart Placeholder */}
// // // // // // // // //           <div className="bg-white rounded-lg shadow p-4 mb-6">
// // // // // // // // //             <div className="flex justify-between items-center mb-4">
// // // // // // // // //               <h3 className="font-medium">Sales Overview</h3>
// // // // // // // // //               <button onClick={() => changePage('salesChart')} className="text-sm text-blue-600 hover:underline">Detailed Report</button>
// // // // // // // // //             </div>
            
// // // // // // // // //             <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
// // // // // // // // //               <button onClick={() => changePage('salesChart')} className="text-blue-600 hover:underline flex items-center">
// // // // // // // // //                 <BarChart2 size={18} className="mr-2" />
// // // // // // // // //                 <span>View Sales Chart</span>
// // // // // // // // //               </button>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
        
// // // // // // // // //         {/* Sidebar content */}
// // // // // // // // //         <div className="space-y-6">
// // // // // // // // //           {/* Quick Access */}
// // // // // // // // //           <div className="bg-white rounded-lg shadow p-4">
// // // // // // // // //             <h3 className="font-medium mb-4">Quick Access</h3>
// // // // // // // // //             <div className="grid grid-cols-2 gap-2">
// // // // // // // // //               <button 
// // // // // // // // //                 onClick={() => changePage('products')} 
// // // // // // // // //                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
// // // // // // // // //               >
// // // // // // // // //                 <Package size={16} className="mr-2 text-blue-600" />
// // // // // // // // //                 <span className="truncate">Products</span>
// // // // // // // // //               </button>
// // // // // // // // //               <button 
// // // // // // // // //                 onClick={() => changePage('employees')} 
// // // // // // // // //                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
// // // // // // // // //               >
// // // // // // // // //                 <Users size={16} className="mr-2 text-blue-600" />
// // // // // // // // //                 <span className="truncate">Employees</span>
// // // // // // // // //               </button>
// // // // // // // // //               <button 
// // // // // // // // //                 onClick={() => changePage('dailySales')} 
// // // // // // // // //                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
// // // // // // // // //               >
// // // // // // // // //                 <DollarSign size={16} className="mr-2 text-blue-600" />
// // // // // // // // //                 <span className="truncate">Daily Sales</span>
// // // // // // // // //               </button>
// // // // // // // // //               <button 
// // // // // // // // //                 onClick={() => changePage('billing')} 
// // // // // // // // //                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
// // // // // // // // //               >
// // // // // // // // //                 <CreditCard size={16} className="mr-2 text-blue-600" />
// // // // // // // // //                 <span className="truncate">Billing</span>
// // // // // // // // //               </button>
// // // // // // // // //               <button 
// // // // // // // // //                 onClick={() => changePage('stockTracking')} 
// // // // // // // // //                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
// // // // // // // // //               >
// // // // // // // // //                 <Layers size={16} className="mr-2 text-blue-600" />
// // // // // // // // //                 <span className="truncate">Stock</span>
// // // // // // // // //               </button>
// // // // // // // // //               <button 
// // // // // // // // //                 onClick={() => changePage('suppliers')} 
// // // // // // // // //                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
// // // // // // // // //               >
// // // // // // // // //                 <Truck size={16} className="mr-2 text-blue-600" />
// // // // // // // // //                 <span className="truncate">Suppliers</span>
// // // // // // // // //               </button>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
          
// // // // // // // // //           {/* Low Stock Alert */}
// // // // // // // // //           <div className="bg-white rounded-lg shadow p-4">
// // // // // // // // //             <div className="flex justify-between items-center mb-4">
// // // // // // // // //               <h3 className="font-medium">Low Stock Alert</h3>
// // // // // // // // //               <button onClick={() => changePage('restockAlerts')} className="text-sm text-blue-600 hover:underline">All Alerts</button>
// // // // // // // // //             </div>
            
// // // // // // // // //             <div className="space-y-3">
// // // // // // // // //               {lowStockItems.map((item, index) => (
// // // // // // // // //                 <div key={index} className="flex items-center justify-between p-2 rounded bg-gray-50">
// // // // // // // // //                   <div>
// // // // // // // // //                     <div className="font-medium text-sm">{item.name}</div>
// // // // // // // // //                     <div className="text-xs text-gray-500">SKU: {item.id}</div>
// // // // // // // // //                   </div>
// // // // // // // // //                   <div className="text-sm font-medium text-red-600">
// // // // // // // // //                     {item.current}/{item.min}
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
// // // // // // // // //               ))}
// // // // // // // // //             </div>
            
// // // // // // // // //             <div className="mt-4">
// // // // // // // // //               <button 
// // // // // // // // //                 onClick={() => changePage('suppliers')}
// // // // // // // // //                 className="flex items-center justify-center p-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm w-full"
// // // // // // // // //               >
// // // // // // // // //                 Place Order
// // // // // // // // //               </button>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );

// // // // // // // // //   // Render the selected page content
// // // // // // // // //   const renderContent = () => {
// // // // // // // // //     switch(currentPage) {
// // // // // // // // //       case 'dashboard':
// // // // // // // // //         return renderDashboard();
// // // // // // // // //       case 'products':
// // // // // // // // //         return <ProductDashboard />;
// // // // // // // // //       case 'employees':
// // // // // // // // //         return <EmployeeManagement />;
// // // // // // // // //       case 'roles':
// // // // // // // // //         return <RoleDistribution />;
// // // // // // // // //       case 'dailySales':
// // // // // // // // //         return <DailySales />;
// // // // // // // // //       case 'stockTracking':
// // // // // // // // //         return <StockTracking />;
// // // // // // // // //       case 'employeeSearch':
// // // // // // // // //         return <EmployeeSearch />;
// // // // // // // // //       case 'billing':
// // // // // // // // //         return <Billing />;
// // // // // // // // //       case 'customerSignup':
// // // // // // // // //         return <CustomerSignupForm />;
// // // // // // // // //       case 'customers':
// // // // // // // // //         return <ViewCustomers />;
// // // // // // // // //       case 'salesChart':
// // // // // // // // //         return <SalesChart />;
// // // // // // // // //       case 'productSales':
// // // // // // // // //         return <ProductSales />;
// // // // // // // // //       case 'inventory':
// // // // // // // // //         return <InventoryDashboard />;
// // // // // // // // //       case 'users':
// // // // // // // // //         return <UserManagementPage />;
// // // // // // // // //       case 'restockAlerts':
// // // // // // // // //         return <ProductDashboard2 />;
// // // // // // // // //       case 'suppliers':
// // // // // // // // //         return <SupplierManagement />;
// // // // // // // // //       default:
// // // // // // // // //         return renderDashboard();
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="min-h-screen bg-gray-50 flex">
// // // // // // // // //       {/* Mobile overlay for sidebar */}
// // // // // // // // //       {sidebarOpen && (
// // // // // // // // //         <div
// // // // // // // // //           className="fixed inset-0 bg-black/50 md:hidden z-20"
// // // // // // // // //           onClick={() => setSidebarOpen(false)}
// // // // // // // // //         />
// // // // // // // // //       )}

// // // // // // // // //       {/* Sidebar */}
// // // // // // // // //       <aside
// // // // // // // // //         className={`fixed md:static inset-y-0 left-0 w-64 bg-gradient-to-br from-blue-800 to-blue-600
// // // // // // // // //           transform transition-transform duration-300 ease-in-out z-30
// // // // // // // // //           ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
// // // // // // // // //       >
// // // // // // // // //         <div className="h-16 flex items-center justify-between px-4 border-b border-white/20">
// // // // // // // // //           <h1 className="text-xl font-bold text-white truncate">
// // // // // // // // //             {storeName || "Store Manager"}
// // // // // // // // //           </h1>
// // // // // // // // //           <button
// // // // // // // // //             onClick={() => setSidebarOpen(false)}
// // // // // // // // //             className="md:hidden text-white hover:text-gray-200"
// // // // // // // // //           >
// // // // // // // // //             <X size={24} />
// // // // // // // // //           </button>
// // // // // // // // //         </div>

// // // // // // // // //         <div className="p-4">
// // // // // // // // //           <div className="flex items-center space-x-3 mb-6">
// // // // // // // // //             <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-blue-800 font-bold">
// // // // // // // // //               A
// // // // // // // // //             </div>
// // // // // // // // //             <div>
// // // // // // // // //               <div className="font-medium text-white">Admin User</div>
// // // // // // // // //               <div className="text-sm text-blue-200">Super Admin</div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
          
// // // // // // // // //           <nav>
// // // // // // // // //             <ul className="space-y-1">
// // // // // // // // //               <li>
// // // // // // // // //                 <button 
// // // // // // // // //                   onClick={() => changePage('dashboard')}
// // // // // // // // //                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'dashboard' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// // // // // // // // //                 >
// // // // // // // // //                   <BarChart2 size={18} className="mr-3" />
// // // // // // // // //                   Dashboard
// // // // // // // // //                 </button>
// // // // // // // // //               </li>
              
// // // // // // // // //               {/* Products dropdown */}
// // // // // // // // //               <li>
// // // // // // // // //                 <div>
// // // // // // // // //                   <button 
// // // // // // // // //                     onClick={() => toggleMenu('products')}
// // // // // // // // //                     className={`flex items-center justify-between w-full p-2 rounded-md 
// // // // // // // // //                       ${currentPage === 'products' || currentPage === 'inventory' || currentPage === 'restockAlerts' ? 
// // // // // // // // //                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// // // // // // // // //                   >
// // // // // // // // //                     <div className="flex items-center">
// // // // // // // // //                       <Package size={18} className="mr-3" />
// // // // // // // // //                       Products
// // // // // // // // //                     </div>
// // // // // // // // //                     {expandedMenus.products ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
// // // // // // // // //                   </button>
                  
// // // // // // // // //                   {expandedMenus.products && (
// // // // // // // // //                     <ul className="pl-9 pt-1 pb-1">
// // // // // // // // //                       <li>
// // // // // // // // //                         <button 
// // // // // // // // //                           onClick={() => changePage('products')} 
// // // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // // //                         >
// // // // // // // // //                           All Products
// // // // // // // // //                         </button>
// // // // // // // // //                       </li>
// // // // // // // // //                       <li>
// // // // // // // // //                         <button 
// // // // // // // // //                           onClick={() => changePage('inventory')} 
// // // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // // //                         >
// // // // // // // // //                           Inventory
// // // // // // // // //                         </button>
// // // // // // // // //                       </li>
// // // // // // // // //                       <li>
// // // // // // // // //                         <button 
// // // // // // // // //                           onClick={() => changePage('restockAlerts')} 
// // // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // // //                         >
// // // // // // // // //                           Restock Alerts
// // // // // // // // //                         </button>
// // // // // // // // //                       </li>
// // // // // // // // //                     </ul>
// // // // // // // // //                   )}
// // // // // // // // //                 </div>
// // // // // // // // //               </li>
              
// // // // // // // // //               {/* Employees dropdown */}
// // // // // // // // //               <li>
// // // // // // // // //                 <div>
// // // // // // // // //                   <button 
// // // // // // // // //                     onClick={() => toggleMenu('employees')}
// // // // // // // // //                     className={`flex items-center justify-between w-full p-2 rounded-md 
// // // // // // // // //                       ${currentPage === 'employees' || currentPage === 'roles' || currentPage === 'employeeSearch' ? 
// // // // // // // // //                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// // // // // // // // //                   >
// // // // // // // // //                     <div className="flex items-center">
// // // // // // // // //                       <Users size={18} className="mr-3" />
// // // // // // // // //                       Employees
// // // // // // // // //                     </div>
// // // // // // // // //                     {expandedMenus.employees ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
// // // // // // // // //                   </button>
                  
// // // // // // // // //                   {expandedMenus.employees && (
// // // // // // // // //                     <ul className="pl-9 pt-1 pb-1">
// // // // // // // // //                       <li>
// // // // // // // // //                         <button 
// // // // // // // // //                           onClick={() => changePage('employees')} 
// // // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // // //                         >
// // // // // // // // //                           Manage Employees
// // // // // // // // //                         </button>
// // // // // // // // //                       </li>
// // // // // // // // //                       <li>
// // // // // // // // //                         <button 
// // // // // // // // //                           onClick={() => changePage('roles')} 
// // // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // // //                         >
// // // // // // // // //                           Roles & Permissions
// // // // // // // // //                         </button>
// // // // // // // // //                       </li>
// // // // // // // // //                       <li>
// // // // // // // // //                         <button 
// // // // // // // // //                           onClick={() => changePage('employeeSearch')} 
// // // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // // //                         >
// // // // // // // // //                           Employee Search
// // // // // // // // //                         </button>
// // // // // // // // //                       </li>
// // // // // // // // //                     </ul>
// // // // // // // // //                   )}
// // // // // // // // //                 </div>
// // // // // // // // //               </li>
              
// // // // // // // // //               {/* Sales dropdown */}
// // // // // // // // //               <li>
// // // // // // // // //                 <div>
// // // // // // // // //                   <button 
// // // // // // // // //                     onClick={() => toggleMenu('sales')}
// // // // // // // // //                     className={`flex items-center justify-between w-full p-2 rounded-md 
// // // // // // // // //                       ${currentPage === 'dailySales' || currentPage === 'salesChart' || currentPage === 'productSales' || currentPage === 'billing' ? 
// // // // // // // // //                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// // // // // // // // //                   >
// // // // // // // // //                     <div className="flex items-center">
// // // // // // // // //                       <DollarSign size={18} className="mr-3" />
// // // // // // // // //                       Sales
// // // // // // // // //                     </div>
// // // // // // // // //                     {expandedMenus.sales ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
// // // // // // // // //                   </button>
                  
// // // // // // // // //                   {expandedMenus.sales && (
// // // // // // // // //                     <ul className="pl-9 pt-1 pb-1">
// // // // // // // // //                       <li>
// // // // // // // // //                         <button 
// // // // // // // // //                           onClick={() => changePage('dailySales')} 
// // // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // // //                         >
// // // // // // // // //                           Daily Sales
// // // // // // // // //                         </button>
// // // // // // // // //                       </li>
// // // // // // // // //                       <li>
// // // // // // // // //                         <button 
// // // // // // // // //                           onClick={() => changePage('salesChart')} 
// // // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // // //                         >
// // // // // // // // //                           Sales Reports
// // // // // // // // //                         </button>
// // // // // // // // //                       </li>
// // // // // // // // //                       <li>
// // // // // // // // //                         <button 
// // // // // // // // //                           onClick={() => changePage('productSales')} 
// // // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // // //                         >
// // // // // // // // //                           Product Sales
// // // // // // // // //                         </button>
// // // // // // // // //                       </li>
// // // // // // // // //                       <li>
// // // // // // // // //                         <button 
// // // // // // // // //                           onClick={() => changePage('billing')} 
// // // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // // //                         >
// // // // // // // // //                           Billing
// // // // // // // // //                         </button>
// // // // // // // // //                       </li>
// // // // // // // // //                     </ul>
// // // // // // // // //                   )}
// // // // // // // // //                 </div>
// // // // // // // // //               </li>
              
// // // // // // // // //               {/* Customers dropdown */}
// // // // // // // // //               <li>
// // // // // // // // //                 <div>
// // // // // // // // //                   <button 
// // // // // // // // //                     onClick={() => toggleMenu('customers')}
// // // // // // // // //                     className={`flex items-center justify-between w-full p-2 rounded-md 
// // // // // // // // //                       ${currentPage === 'customers' || currentPage === 'customerSignup' ? 
// // // // // // // // //                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// // // // // // // // //                   >
// // // // // // // // //                     <div className="flex items-center">
// // // // // // // // //                       <UserCheck size={18} className="mr-3" />
// // // // // // // // //                       Customers
// // // // // // // // //                     </div>
// // // // // // // // //                     {expandedMenus.customers ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
// // // // // // // // //                   </button>
                  
// // // // // // // // //                   {expandedMenus.customers && (
// // // // // // // // //                     <ul className="pl-9 pt-1 pb-1">
// // // // // // // // //                       <li>
// // // // // // // // //                         <button 
// // // // // // // // //                           onClick={() => changePage('customers')} 
// // // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // // //                         >
// // // // // // // // //                           View Customers
// // // // // // // // //                         </button>
// // // // // // // // //                       </li>
// // // // // // // // //                       <li>
// // // // // // // // //                         <button 
// // // // // // // // //                           onClick={() => changePage('customerSignup')} 
// // // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // // //                         >
// // // // // // // // //                           Add Customer
// // // // // // // // //                         </button>
// // // // // // // // //                       </li>
// // // // // // // // //                     </ul>
// // // // // // // // //                   )}
// // // // // // // // //                 </div>
// // // // // // // // //               </li>
              
// // // // // // // // //               {/* Suppliers */}
// // // // // // // // //               <li>
// // // // // // // // //                 <button 
// // // // // // // // //                   onClick={() => changePage('suppliers')}
// // // // // // // // //                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'suppliers' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// // // // // // // // //                 >
// // // // // // // // //                   <Truck size={18} className="mr-3" />
// // // // // // // // //                   Suppliers
// // // // // // // // //                 </button>
// // // // // // // // //               </li>
              
// // // // // // // // //               {/* Inventory/Stock */}
// // // // // // // // //               <li>
// // // // // // // // //                 <button 
// // // // // // // // //                   onClick={() => changePage('stockTracking')}
// // // // // // // // //                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'stockTracking' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// // // // // // // // //                 >
// // // // // // // // //                   <Layers size={18} className="mr-3" />
// // // // // // // // //                   Stock Tracking
// // // // // // // // //                 </button>
// // // // // // // // //               </li>
              
// // // // // // // // //               {/* User Management */}
// // // // // // // // //               <li>
// // // // // // // // //                 <button 
// // // // // // // // //                   onClick={() => changePage('users')}
// // // // // // // // //                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'users' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// // // // // // // // //                 >
// // // // // // // // //                   <User size={18} className="mr-3" />
// // // // // // // // //                   User Management
// // // // // // // // //                 </button>
// // // // // // // // //               </li>
              
// // // // // // // // //               {/* Settings */}
// // // // // // // // //               <li>
// // // // // // // // //                 <button 
// // // // // // // // //                   className="flex items-center w-full p-2 rounded-md text-white hover:bg-white/10"
// // // // // // // // //                 >
// // // // // // // // //                   <Settings size={18} className="mr-3" />
// // // // // // // // //                   Settings
// // // // // // // // //                 </button>
// // // // // // // // //               </li>
// // // // // // // // //             </ul>
// // // // // // // // //           </nav>
// // // // // // // // //         </div>
// // // // // // // // //       </aside>

// // // // // // // // //       {/* Mobile menu button */}
// // // // // // // // //       <button
// // // // // // // // //         onClick={() => setSidebarOpen(true)}
// // // // // // // // //         className={`md:hidden fixed top-4 left-4 z-10 p-2 rounded-lg bg-blue-800 text-white
// // // // // // // // //           shadow-lg hover:bg-blue-700 transition-colors duration-200
// // // // // // // // //           ${sidebarOpen ? 'hidden' : 'block'}`}
// // // // // // // // //       >
// // // // // // // // //         <Menu size={24} />
// // // // // // // // //       </button>

// // // // // // // // //       {/* Main content */}
// // // // // // // // //       <main className="flex-1 overflow-auto">
// // // // // // // // //         {/* Top header */}
// // // // // // // // //         <div className="bg-white shadow-sm border-b">
// // // // // // // // //           <div className="px-4 py-3 flex justify-between items-center">
// // // // // // // // //             <div className="md:hidden flex items-center">
// // // // // // // // //               <h1 className="text-xl font-bold text-blue-800">
// // // // // // // // //                 {currentPage === 'dashboard' ? 'Dashboard' : 
// // // // // // // // //                  currentPage === 'products' ? 'Products' :
// // // // // // // // //                  currentPage === 'employees' ? 'Employees' :
// // // // // // // // //                  currentPage === 'dailySales' ? 'Sales' :
// // // // // // // // //                  currentPage === 'stockTracking' ? 'Stock' :
// // // // // // // // //                  currentPage === 'suppliers' ? 'Suppliers' :
// // // // // // // // //                  'Admin Dashboard'}
// // // // // // // // //               </h1>
// // // // // // // // //             </div>
            
// // // // // // // // //             <div className="hidden md:flex items-center">
// // // // // // // // //               <div className="relative mr-4">
// // // // // // // // //                 <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// // // // // // // // //                 <input
// // // // // // // // //                   type="text"
// // // // // // // // //                   placeholder="Search..."
// // // // // // // // //                   className="pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // // // // // // // //                 />
// // // // // // // // //               </div>
// // // // // // // // //             </div>
            
// // // // // // // // //             <div className="flex items-center space-x-4">
// // // // // // // // //               <button className="p-1 rounded-full hover:bg-gray-100 relative">
// // // // // // // // //                 <Bell size={20} />
// // // // // // // // //                 <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
// // // // // // // // //               </button>
              
// // // // // // // // //               <button className="flex items-center text-sm text-red-600 hover:text-red-800">
// // // // // // // // //                 <LogOut size={16} className="mr-1" />
// // // // // // // // //                 <span className="hidden md:inline">Logout</span>
// // // // // // // // //               </button>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
        
// // // // // // // // //         {/* Page content */}
// // // // // // // // //         <div className="p-4">
// // // // // // // // //           {renderContent()}
// // // // // // // // //         </div>
// // // // // // // // //       </main>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default AdminDashboard;


// // // // // // // // import React, { useState, useContext, useEffect, useRef } from "react";
// // // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // // import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
// // // // // // // // import { 
// // // // // // // //   Menu, 
// // // // // // // //   Package, 
// // // // // // // //   Users, 
// // // // // // // //   BarChart2, 
// // // // // // // //   Settings, 
// // // // // // // //   CreditCard, 
// // // // // // // //   Info, 
// // // // // // // //   X, 
// // // // // // // //   DollarSign,
// // // // // // // //   UserCheck,
// // // // // // // //   Search,
// // // // // // // //   Bell,
// // // // // // // //   LogOut,
// // // // // // // //   Truck,
// // // // // // // //   Layers,
// // // // // // // //   ShoppingBag,
// // // // // // // //   ChevronRight,
// // // // // // // //   ChevronDown,
// // // // // // // //   AlertTriangle,
// // // // // // // //   User,
// // // // // // // //   Calendar,
// // // // // // // //   Inbox,
// // // // // // // //   Home,
// // // // // // // //   Shield,
// // // // // // // //   Zap,
// // // // // // // //   TrendingUp,
// // // // // // // //   HelpCircle,
// // // // // // // //   Grid
// // // // // // // // } from 'lucide-react';
// // // // // // // // import { motion, AnimatePresence } from 'framer-motion';

// // // // // // // // // Import all the components you need
// // // // // // // // import ProductDashboard from "./ProductManagement";
// // // // // // // // import EmployeeManagement from "./EmployeeManagement";
// // // // // // // // import RoleDistribution from "./RoleDistribution";
// // // // // // // // import DailySales from "./DailySales";
// // // // // // // // import StockTracking from "./StockTracking";
// // // // // // // // import EmployeeSearch from "./EmployeeSearch";
// // // // // // // // import Billing from "./Billing";
// // // // // // // // import CustomerSignupForm from "./CustomerSignUpForm";
// // // // // // // // import ViewCustomers from "./ViewCustomers";
// // // // // // // // import SalesChart from "./SalesChart";
// // // // // // // // import ProductSales from "./ProductSales";
// // // // // // // // import InventoryDashboard from "./InventoryDashboard";
// // // // // // // // import UserManagementPage from "./UserManagement";
// // // // // // // // import ProductDashboard2 from "./RestockAlerts";
// // // // // // // // import SupplierManagement from "./Supc";
// // // // // // // // import BatchExpiryTracker from "./BatchExpiryTracker";
// // // // // // // // import DamageItemsManagement from "./DamageItemsManagement";
// // // // // // // // import EmployeeSales from "./EmployeeSales";
// // // // // // // // import EmployeeAttendanceForm from "./EmployeeAttendance";
// // // // // // // // import FacialRecognitionAttendance from "./FacialRecognitionAttendance";
// // // // // // // // import AddEmployeeFace from "./AddEmployeeFace";
// // // // // // // // import EmployeesSalaryManagement from  './EmployeesSalaryManagement';
// // // // // // // // import SalesAnalyticsDashboard from "./SalesAnalyticsDashboard";
// // // // // // // // import Khatabook from "./Khatabook";
// // // // // // // // import KhatabookPage from "./Khatabook2";
// // // // // // // // const AdminDashboard = () => {
// // // // // // // //   const { storeName } = useContext(StoreContext);
// // // // // // // //   const [sidebarOpen, setSidebarOpen] = useState(true);
// // // // // // // //   const location = useLocation();
// // // // // // // //   const navigate = useNavigate();
// // // // // // // //   const [currentPage, setCurrentPage] = useState('dashboard');
// // // // // // // //   const [expandedMenus, setExpandedMenus] = useState({
// // // // // // // //     products: false,
// // // // // // // //     employees: false,
// // // // // // // //     sales: false,
// // // // // // // //     customers: false,
// // // // // // // //     suppliers: false
// // // // // // // //   });
// // // // // // // //   const [searchFocused, setSearchFocused] = useState(false);
// // // // // // // //   const [notificationsOpen, setNotificationsOpen] = useState(false);
// // // // // // // //   const [userMenuOpen, setUserMenuOpen] = useState(false);
// // // // // // // //   const [darkMode, setDarkMode] = useState(false);
// // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // //   const [animateCharts, setAnimateCharts] = useState(false);
  
// // // // // // // //   const notificationRef = useRef(null);
// // // // // // // //   const userMenuRef = useRef(null);

// // // // // // // //   // Stats for dashboard with more specific data
// // // // // // // //   const stats = [
// // // // // // // //     { title: 'Total Sales Today', value: '$5,890', change: '+15%', up: true, icon: <DollarSign size={20} className="text-green-500" /> },
// // // // // // // //     { title: 'Low Stock Items', value: '24', change: '+8', up: false, icon: <AlertTriangle size={20} className="text-amber-500" /> },
// // // // // // // //     { title: 'Today\'s Orders', value: '42', change: '+12%', up: true, icon: <ShoppingBag size={20} className="text-blue-500" /> },
// // // // // // // //     { title: 'Active Employees', value: '18', change: '0', up: true, icon: <Users size={20} className="text-purple-500" /> },
// // // // // // // //   ];
  
// // // // // // // //   // Recent transactions for dashboard
// // // // // // // //   const recentTransactions = [
// // // // // // // //     { id: '#TRX-4589', customer: 'John Smith', amount: '$129.50', date: '20 min ago', status: 'completed', paymentMethod: 'Credit Card' },
// // // // // // // //     { id: '#TRX-4588', customer: 'Lisa Wong', amount: '$245.75', date: '45 min ago', status: 'completed', paymentMethod: 'PayPal' },
// // // // // // // //     { id: '#TRX-4587', customer: 'Mike Johnson', amount: '$67.25', date: '1 hr ago', status: 'pending', paymentMethod: 'Credit Card' },
// // // // // // // //     { id: '#TRX-4586', customer: 'Sara Miller', amount: '$352.00', date: '2 hrs ago', status: 'completed', paymentMethod: 'Bank Transfer' },
// // // // // // // //     { id: '#TRX-4585', customer: 'David Chen', amount: '$84.30', date: '3 hrs ago', status: 'failed', paymentMethod: 'Credit Card' },
// // // // // // // //   ];
  
// // // // // // // //   // Low stock items
// // // // // // // //   const lowStockItems = [
// // // // // // // //     { id: 'P-1245', name: 'Premium Coffee Beans', current: 12, min: 20, reorderStatus: 'urgent' },
// // // // // // // //     { id: 'P-2340', name: 'Organic Green Tea', current: 8, min: 15, reorderStatus: 'pending' },
// // // // // // // //     { id: 'P-1023', name: 'Vitamin C Tablets', current: 5, min: 10, reorderStatus: 'ordered' },
// // // // // // // //     { id: 'P-3456', name: 'Almond Milk', current: 9, min: 12, reorderStatus: 'urgent' },
// // // // // // // //   ];

// // // // // // // //   // Mock data for sales chart
// // // // // // // //   const salesData = [
// // // // // // // //     { month: 'Jan', sales: 4500, target: 4000 },
// // // // // // // //     { month: 'Feb', sales: 5200, target: 4200 },
// // // // // // // //     { month: 'Mar', sales: 4800, target: 4400 },
// // // // // // // //     { month: 'Apr', sales: 5500, target: 4600 },
// // // // // // // //     { month: 'May', sales: 6200, target: 4800 },
// // // // // // // //     { month: 'Jun', sales: 5900, target: 5000 },
// // // // // // // //     { month: 'Jul', sales: 6500, target: 5200 },
// // // // // // // //   ];

// // // // // // // //   // Notifications
// // // // // // // //   const notifications = [
// // // // // // // //     { id: 1, title: 'Low stock alert', message: '4 products need reordering', time: '10 min ago', read: false, type: 'alert' },
// // // // // // // //     { id: 2, title: 'New order received', message: 'Order #12458 from John D.', time: '25 min ago', read: false, type: 'order' },
// // // // // // // //     { id: 3, title: 'Staff meeting', message: 'Reminder: Meeting at 3 PM', time: '2 hours ago', read: true, type: 'reminder' },
// // // // // // // //     { id: 4, title: 'System update', message: 'Maintenance scheduled for tonight', time: '1 day ago', read: true, type: 'system' },
// // // // // // // //   ];

// // // // // // // //   // Page loading simulation
// // // // // // // //   useEffect(() => {
// // // // // // // //     const timer = setTimeout(() => {
// // // // // // // //       setLoading(false);
// // // // // // // //       setTimeout(() => setAnimateCharts(true), 500);
// // // // // // // //     }, 800);
// // // // // // // //     return () => clearTimeout(timer);
// // // // // // // //   }, [currentPage]);

// // // // // // // //   // Toggle sidebar on mobile
// // // // // // // //   useEffect(() => {
// // // // // // // //     if (window.innerWidth < 768) {
// // // // // // // //       setSidebarOpen(false);
// // // // // // // //     }
// // // // // // // //   }, [location]);

// // // // // // // //   // Resize handling
// // // // // // // //   useEffect(() => {
// // // // // // // //     const handleResize = () => {
// // // // // // // //       if (window.innerWidth >= 768) {
// // // // // // // //         setSidebarOpen(true);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     window.addEventListener('resize', handleResize);
// // // // // // // //     handleResize();
// // // // // // // //     return () => window.removeEventListener('resize', handleResize);
// // // // // // // //   }, []);

// // // // // // // //   // Handle clicks outside dropdowns
// // // // // // // //   useEffect(() => {
// // // // // // // //     const handleClickOutside = (event) => {
// // // // // // // //       if (notificationRef.current && !notificationRef.current.contains(event.target)) {
// // // // // // // //         setNotificationsOpen(false);
// // // // // // // //       }
// // // // // // // //       if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
// // // // // // // //         setUserMenuOpen(false);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     document.addEventListener('mousedown', handleClickOutside);
// // // // // // // //     return () => document.removeEventListener('mousedown', handleClickOutside);
// // // // // // // //   }, []);

// // // // // // // //   // Toggle submenu expandable sections
// // // // // // // //   const toggleMenu = (menu) => {
// // // // // // // //     setExpandedMenus(prev => ({
// // // // // // // //       ...prev,
// // // // // // // //       [menu]: !prev[menu]
// // // // // // // //     }));
// // // // // // // //   };

// // // // // // // //   // Change current page based on menu click
// // // // // // // //   const changePage = (page) => {
// // // // // // // //     setCurrentPage(page);
// // // // // // // //     setLoading(true); // Show loading state when changing pages
// // // // // // // //     if (window.innerWidth < 768) {
// // // // // // // //       setSidebarOpen(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // Toggle dark mode
// // // // // // // //   const toggleDarkMode = () => {
// // // // // // // //     setDarkMode(!darkMode);
// // // // // // // //     document.documentElement.classList.toggle('dark');
// // // // // // // //   };

// // // // // // // //   // Render main dashboard content
// // // // // // // //   const renderDashboard = () => (
// // // // // // // //     <motion.div 
// // // // // // // //       initial={{ opacity: 0 }}
// // // // // // // //       animate={{ opacity: 1 }}
// // // // // // // //       transition={{ duration: 0.3 }}
// // // // // // // //       className="space-y-6"
// // // // // // // //     >
// // // // // // // //       {/* Welcome section */}
// // // // // // // //       <div className="mb-6">
// // // // // // // //         <h2 className="text-xl font-semibold text-gray-800 dark:text-white transition-colors">Welcome to {storeName || "Your Store"}</h2>
// // // // // // // //         <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Here's a quick summary of your store performance today</p>
// // // // // // // //       </div>
      
// // // // // // // //       {/* Stats cards */}
// // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
// // // // // // // //         {stats.map((stat, index) => (
// // // // // // // //           <motion.div 
// // // // // // // //             key={index} 
// // // // // // // //             initial={{ y: 20, opacity: 0 }}
// // // // // // // //             animate={{ y: 0, opacity: 1 }}
// // // // // // // //             transition={{ duration: 0.3, delay: index * 0.1 }}
// // // // // // // //             whileHover={{ y: -4, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
// // // // // // // //             className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700"
// // // // // // // //           >
// // // // // // // //             <div className="flex justify-between items-start mb-3">
// // // // // // // //               <div className="text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors">{stat.title}</div>
// // // // // // // //               <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700 transition-colors">
// // // // // // // //                 {stat.icon}
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //             <div className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">{stat.value}</div>
// // // // // // // //             <div className={`text-sm mt-2 flex items-center ${stat.up ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'} transition-colors`}>
// // // // // // // //               {stat.change}
// // // // // // // //               {stat.up ? 
// // // // // // // //                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // // // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
// // // // // // // //                 </svg> :
// // // // // // // //                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // // // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// // // // // // // //                 </svg>
// // // // // // // //               }
// // // // // // // //             </div>
// // // // // // // //           </motion.div>
// // // // // // // //         ))}
// // // // // // // //       </div>
      
// // // // // // // //       {/* Main dashboard layout */}
// // // // // // // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // // // // // // //         {/* Transactions */}
// // // // // // // //         <motion.div
// // // // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // // //           transition={{ duration: 0.3, delay: 0.2 }}
// // // // // // // //           className="lg:col-span-2"
// // // // // // // //         >
// // // // // // // //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 mb-6 border border-gray-100 dark:border-gray-700">
// // // // // // // //             <div className="flex justify-between items-center mb-6">
// // // // // // // //               <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
// // // // // // // //                 <ShoppingBag size={18} className="mr-2 text-blue-600 dark:text-blue-400" />
// // // // // // // //                 Recent Transactions
// // // // // // // //               </h3>
// // // // // // // //               <button 
// // // // // // // //                 onClick={() => changePage('dailySales')} 
// // // // // // // //                 className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center"
// // // // // // // //               >
// // // // // // // //                 View All
// // // // // // // //                 <ChevronRight size={16} className="ml-1" />
// // // // // // // //               </button>
// // // // // // // //             </div>
            
// // // // // // // //             <div className="overflow-x-auto">
// // // // // // // //               <table className="w-full">
// // // // // // // //                 <thead>
// // // // // // // //                   <tr className="border-b border-gray-200 dark:border-gray-700">
// // // // // // // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">ID</th>
// // // // // // // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Customer</th>
// // // // // // // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
// // // // // // // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Time</th>
// // // // // // // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
// // // // // // // //                   </tr>
// // // // // // // //                 </thead>
// // // // // // // //                 <tbody>
// // // // // // // //                   {recentTransactions.map((transaction, index) => (
// // // // // // // //                     <motion.tr 
// // // // // // // //                       key={index} 
// // // // // // // //                       initial={{ opacity: 0, y: 10 }}
// // // // // // // //                       animate={{ opacity: 1, y: 0 }}
// // // // // // // //                       transition={{ duration: 0.2, delay: index * 0.1 }}
// // // // // // // //                       className="border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
// // // // // // // //                     >
// // // // // // // //                       <td className="py-4 px-3 text-sm font-medium text-gray-700 dark:text-gray-300">{transaction.id}</td>
// // // // // // // //                       <td className="py-4 px-3 text-sm text-gray-700 dark:text-gray-300">{transaction.customer}</td>
// // // // // // // //                       <td className="py-4 px-3 text-sm font-medium text-gray-900 dark:text-white">{transaction.amount}</td>
// // // // // // // //                       <td className="py-4 px-3 text-sm text-gray-500 dark:text-gray-400">{transaction.date}</td>
// // // // // // // //                       <td className="py-4 px-3 text-sm">
// // // // // // // //                         <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
// // // // // // // //                           transaction.status === 'completed' 
// // // // // // // //                             ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
// // // // // // // //                             : transaction.status === 'pending' 
// // // // // // // //                             ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
// // // // // // // //                             : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
// // // // // // // //                         }`}>
// // // // // // // //                           {transaction.status === 'completed' && <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-green-600 dark:bg-green-400"></span>}
// // // // // // // //                           {transaction.status === 'pending' && <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-yellow-600 dark:bg-yellow-400"></span>}
// // // // // // // //                           {transaction.status === 'failed' && <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-red-600 dark:bg-red-400"></span>}
// // // // // // // //                           {transaction.status}
// // // // // // // //                         </span>
// // // // // // // //                       </td>
// // // // // // // //                     </motion.tr>
// // // // // // // //                   ))}
// // // // // // // //                 </tbody>
// // // // // // // //               </table>
// // // // // // // //             </div>
// // // // // // // //           </div>
          
// // // // // // // //           {/* Sales Chart */}
// // // // // // // //           <motion.div
// // // // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // // //             transition={{ duration: 0.3, delay: 0.3 }}
// // // // // // // //             className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 mb-6 border border-gray-100 dark:border-gray-700"
// // // // // // // //           >
// // // // // // // //             <div className="flex justify-between items-center mb-6">
// // // // // // // //               <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
// // // // // // // //                 <TrendingUp size={18} className="mr-2 text-indigo-600 dark:text-indigo-400" />
// // // // // // // //                 Sales Overview
// // // // // // // //               </h3>
// // // // // // // //               <button 
// // // // // // // //                 onClick={() => changePage('salesChart')} 
// // // // // // // //                 className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors flex items-center"
// // // // // // // //               >
// // // // // // // //                 Detailed Report
// // // // // // // //                 <ChevronRight size={16} className="ml-1" />
// // // // // // // //               </button>
// // // // // // // //             </div>
            
// // // // // // // //             <div className="h-80 relative">
// // // // // // // //               {animateCharts ? (
// // // // // // // //                 <div className="h-full">
// // // // // // // //                   <div className="h-full flex items-end space-x-4 px-2">
// // // // // // // //                     {salesData.map((item, index) => (
// // // // // // // //                       <div key={index} className="flex-1 flex flex-col items-center">
// // // // // // // //                         <div className="w-full h-full flex flex-col justify-end space-y-2">
// // // // // // // //                           <motion.div
// // // // // // // //                             initial={{ height: 0 }}
// // // // // // // //                             animate={{ height: `${(item.sales / 7000) * 100}%` }}
// // // // // // // //                             transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
// // // // // // // //                             className="w-full bg-gradient-to-t from-blue-500 to-blue-400 dark:from-blue-600 dark:to-blue-500 rounded-t-md relative group"
// // // // // // // //                           >
// // // // // // // //                             <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
// // // // // // // //                               ${item.sales}
// // // // // // // //                             </div>
// // // // // // // //                           </motion.div>
// // // // // // // //                           <motion.div
// // // // // // // //                             initial={{ height: 0 }}
// // // // // // // //                             animate={{ height: `${(item.target / 7000) * 100}%` }}
// // // // // // // //                             transition={{ duration: 0.8, delay: index * 0.1 + 0.2, type: "spring" }}
// // // // // // // //                             className="w-full bg-gradient-to-t from-gray-300 to-gray-200 dark:from-gray-600 dark:to-gray-500 rounded-t-md relative group"
// // // // // // // //                           >
// // // // // // // //                             <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
// // // // // // // //                               Target: ${item.target}
// // // // // // // //                             </div>
// // // // // // // //                           </motion.div>
// // // // // // // //                         </div>
// // // // // // // //                         <div className="text-xs mt-2 text-gray-600 dark:text-gray-400 font-medium">{item.month}</div>
// // // // // // // //                       </div>
// // // // // // // //                     ))}
// // // // // // // //                   </div>
// // // // // // // //                   <div className="mt-4 flex justify-between items-center text-sm">
// // // // // // // //                     <div className="flex items-center">
// // // // // // // //                       <div className="w-3 h-3 bg-blue-500 rounded-sm mr-2"></div>
// // // // // // // //                       <span className="text-gray-700 dark:text-gray-300">Actual Sales</span>
// // // // // // // //                     </div>
// // // // // // // //                     <div className="flex items-center">
// // // // // // // //                       <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-sm mr-2"></div>
// // // // // // // //                       <span className="text-gray-700 dark:text-gray-300">Target</span>
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               ) : (
// // // // // // // //                 <div className="h-full flex items-center justify-center">
// // // // // // // //                   <div className="animate-pulse text-gray-400 dark:text-gray-500">Loading chart data...</div>
// // // // // // // //                 </div>
// // // // // // // //               )}
// // // // // // // //             </div>
// // // // // // // //           </motion.div>
// // // // // // // //         </motion.div>
        
// // // // // // // //         {/* Sidebar content */}
// // // // // // // //         <motion.div
// // // // // // // //           initial={{ opacity: 0, x: 20 }}
// // // // // // // //           animate={{ opacity: 1, x: 0 }}
// // // // // // // //           transition={{ duration: 0.3, delay: 0.4 }}
// // // // // // // //           className="space-y-6"
// // // // // // // //         >
// // // // // // // //           {/* Quick Access */}
// // // // // // // //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
// // // // // // // //             <h3 className="font-medium text-gray-800 dark:text-white transition-colors mb-4 flex items-center">
// // // // // // // //               <Zap size={18} className="mr-2 text-amber-500" />
// // // // // // // //               Quick Access
// // // // // // // //             </h3>
// // // // // // // //             <div className="grid grid-cols-2 gap-3">
// // // // // // // //               {[
// // // // // // // //                 { icon: <Package size={16} />, label: 'Products', page: 'products', color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
// // // // // // // //                 { icon: <Users size={16} />, label: 'Employees', page: 'employees', color: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' },
// // // // // // // //                 { icon: <DollarSign size={16} />, label: 'Sales', page: 'dailySales', color: 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400' },
// // // // // // // //                 { icon: <CreditCard size={16} />, label: 'Billing', page: 'billing', color: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400' },
// // // // // // // //                 { icon: <Layers size={16} />, label: 'Stock', page: 'stockTracking', color: 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' },
// // // // // // // //                 { icon: <Truck size={16} />, label: 'Suppliers', page: 'suppliers', color: 'bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400' },
// // // // // // // //               ].map((item, index) => (
// // // // // // // //                 <motion.button 
// // // // // // // //                   key={index}
// // // // // // // //                   whileHover={{ scale: 1.03 }}
// // // // // // // //                   whileTap={{ scale: 0.97 }}
// // // // // // // //                   onClick={() => changePage(item.page)} 
// // // // // // // //                   className={`flex items-center justify-center p-3 rounded-lg transition-all ${item.color} hover:shadow-md`}
// // // // // // // //                 >
// // // // // // // //                   <div className="flex flex-col items-center">
// // // // // // // //                     <div className="mb-1">{item.icon}</div>
// // // // // // // //                     <span className="text-xs font-medium">{item.label}</span>
// // // // // // // //                   </div>
// // // // // // // //                 </motion.button>
// // // // // // // //               ))}
// // // // // // // //             </div>
// // // // // // // //           </div>
          
// // // // // // // //           {/* Low Stock Alert */}
// // // // // // // //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
// // // // // // // //             <div className="flex justify-between items-center mb-4">
// // // // // // // //               <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
// // // // // // // //                 <AlertTriangle size={18} className="mr-2 text-red-500" />
// // // // // // // //                 Low Stock Alert
// // // // // // // //               </h3>
// // // // // // // //               <button 
// // // // // // // //                 onClick={() => changePage('restockAlerts')} 
// // // // // // // //                 className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
// // // // // // // //               >
// // // // // // // //                 All Alerts
// // // // // // // //               </button>
// // // // // // // //             </div>
            
// // // // // // // //             <div className="space-y-3">
// // // // // // // //               {lowStockItems.map((item, index) => (
// // // // // // // //                 <motion.div 
// // // // // // // //                   key={index} 
// // // // // // // //                   initial={{ opacity: 0, y: 10 }}
// // // // // // // //                   animate={{ opacity: 1, y: 0 }}
// // // // // // // //                   transition={{ duration: 0.2, delay: index * 0.1 }}
// // // // // // // //                   className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-750 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
// // // // // // // //                 >
// // // // // // // //                   <div className="flex items-start space-x-3">
// // // // // // // //                     <div className={`mt-0.5 p-1.5 rounded-md ${
// // // // // // // //                       item.reorderStatus === 'urgent' ? 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400' : 
// // // // // // // //                       item.reorderStatus === 'pending' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-400' : 
// // // // // // // //                       'bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400'
// // // // // // // //                     }`}>
// // // // // // // //                       <Layers size={14} />
// // // // // // // //                     </div>
// // // // // // // //                     <div>
// // // // // // // //                       <div className="font-medium text-sm text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.name}</div>
// // // // // // // //                       <div className="text-xs text-gray-500 dark:text-gray-400">SKU: {item.id}</div>
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                   <div className={`text-sm font-medium ${
// // // // // // // //                     (item.current / item.min) < 0.5 ? 'text-red-600 dark:text-red-400' : 
// // // // // // // //                     (item.current / item.min) < 0.75 ? 'text-yellow-600 dark:text-yellow-400' : 
// // // // // // // //                     'text-gray-700 dark:text-gray-300'
// // // // // // // //                   }`}>
// // // // // // // //                     {item.current}/{item.min}
// // // // // // // //                   </div>
// // // // // // // //                 </motion.div>
// // // // // // // //               ))}
// // // // // // // //             </div>
            
// // // // // // // //             <div className="mt-4">
// // // // // // // //               <motion.button 
// // // // // // // //                 whileHover={{ scale: 1.02 }}
// // // // // // // //                 whileTap={{ scale: 0.98 }}
// // // // // // // //                 onClick={() => changePage('suppliers')}
// // // // // // // //                 className="flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all text-sm w-full shadow-sm hover:shadow"
// // // // // // // //               >
// // // // // // // //                 <Truck size={16} className="mr-2" />
// // // // // // // //                 Place Restock Order
// // // // // // // //               </motion.button>
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* Recent activity timeline */}
// // // // // // // //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
// // // // // // // //             <h3 className="font-medium text-gray-800 dark:text-white transition-colors mb-4 flex items-center">
// // // // // // // //               <Calendar size={18} className="mr-2 text-purple-500" />
// // // // // // // //               Recent Activity
// // // // // // // //             </h3>
            
// // // // // // // //             <div className="relative">
// // // // // // // //               {/* Timeline line */}
// // // // // // // //               <div className="absolute top-0 bottom-0 left-3 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              
// // // // // // // //               <div className="space-y-4">
// // // // // // // //                 {[
// // // // // // // //                   { time: '9:32 AM', title: 'New order received', description: 'Order #4592 from Michael T.', color: 'bg-green-500' },
// // // // // // // //                   { time: '11:15 AM', title: 'Low stock notification', description: 'Vitamin B Complex needs restock', color: 'bg-yellow-500' },
// // // // // // // //                   { time: '1:45 PM', title: 'Employee login', description: 'Sarah logged in for afternoon shift', color: 'bg-blue-500' },
// // // // // // // //                   { time: '2:30 PM', title: 'System report', description: 'Daily inventory check completed', color: 'bg-purple-500' },
// // // // // // // //                 ].map((activity, index) => (
// // // // // // // //                   <motion.div 
// // // // // // // //                     key={index}
// // // // // // // //                     initial={{ opacity: 0, x: -10 }}
// // // // // // // //                     animate={{ opacity: 1, x: 0 }}
// // // // // // // //                     transition={{ duration: 0.3, delay: index * 0.1 }}
// // // // // // // //                     className="relative pl-8"
// // // // // // // //                   >
// // // // // // // //                     <div className={`absolute left-0 top-1 h-6 w-6 rounded-full flex items-center justify-center ${activity.color} shadow-md`}>
// // // // // // // //                       <span className="h-3 w-3 bg-white rounded-full"></span>
// // // // // // // //                     </div>
// // // // // // // //                     <div className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</div>
// // // // // // // //                     <div className="font-medium text-sm text-gray-800 dark:text-white">{activity.title}</div>                    <div className="text-xs text-gray-500 dark:text-gray-400">{activity.description}</div>
// // // // // // // //                   </motion.div>
// // // // // // // //                 ))}
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </motion.div>
// // // // // // // //       </div>
// // // // // // // //     </motion.div>
// // // // // // // //   );

// // // // // // // //   // Render the selected page content
// // // // // // // //   const renderContent = () => {
// // // // // // // //     switch(currentPage) {
// // // // // // // //       case 'dashboard':
// // // // // // // //         return renderDashboard();
// // // // // // // //       case 'products':
// // // // // // // //         return <ProductDashboard />;
// // // // // // // //       case 'employees':
// // // // // // // //         return <EmployeeManagement />;
// // // // // // // //       case 'roles':
// // // // // // // //         return <RoleDistribution />;
// // // // // // // //       case 'dailySales':
// // // // // // // //         return <DailySales />;
// // // // // // // //       case 'stockTracking':
// // // // // // // //         return <StockTracking />;
// // // // // // // //       case 'employeeSearch':
// // // // // // // //         return <EmployeeSearch />;
// // // // // // // //       case 'billing':
// // // // // // // //         return <Billing />;
// // // // // // // //       case 'customerSignup':
// // // // // // // //         return <CustomerSignupForm />;
// // // // // // // //       case 'customers':
// // // // // // // //         return <ViewCustomers />;
// // // // // // // //       case 'salesChart':
// // // // // // // //         return <SalesChart />;
// // // // // // // //       case 'productSales':
// // // // // // // //         return <ProductSales />;
// // // // // // // //       case 'inventory':
// // // // // // // //         return <InventoryDashboard />;
// // // // // // // //       case 'users':
// // // // // // // //         return <UserManagementPage />;
// // // // // // // //       case 'restockAlerts':
// // // // // // // //         return <ProductDashboard2 />;
// // // // // // // //       case 'suppliers':
// // // // // // // //         return <SupplierManagement />;
// // // // // // // //         case 'batch':
// // // // // // // //           return <BatchExpiryTracker/>;
// // // // // // // //           case 'damage':
// // // // // // // //           return <DamageItemsManagement/>;
// // // // // // // //           case 'emp':
// // // // // // // //             return <EmployeeSales/>;
// // // // // // // //             case 'attendance':
// // // // // // // //               return <EmployeeAttendanceForm/>;
// // // // // // // //               case 'face':
// // // // // // // //                 return <FacialRecognitionAttendance/>;
// // // // // // // //                 case 'add_face':
// // // // // // // //                 return <AddEmployeeFace/>;
// // // // // // // //                 case 'salaries':
// // // // // // // //                 return <EmployeesSalaryManagement/>;
// // // // // // // //                 case 'analytics':
// // // // // // // //                   return <SalesAnalyticsDashboard/>;
// // // // // // // //                   case 'khata':
// // // // // // // //                   return <Khatabook/>;
// // // // // // // //                   case 'khata2':
// // // // // // // //                     return <KhatabookPage/>;

// // // // // // // //       default:
// // // // // // // //         return renderDashboard();
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-gray-50 dark:bg-gray-900 flex`}>
// // // // // // // //       {/* Mobile overlay for sidebar */}
// // // // // // // //       {sidebarOpen && (
// // // // // // // //         <div
// // // // // // // //           className="fixed inset-0 bg-black/50 md:hidden z-20"
// // // // // // // //           onClick={() => setSidebarOpen(false)}
// // // // // // // //         />
// // // // // // // //       )}

// // // // // // // //       {/* Sidebar */}
// // // // // // // //       <aside
// // // // // // // //         className={`fixed md:static inset-y-0 left-0 w-64 bg-gradient-to-br from-blue-800 to-blue-600
// // // // // // // //           transform transition-transform duration-300 ease-in-out z-30
// // // // // // // //           ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
// // // // // // // //       >
// // // // // // // //         <div className="h-16 flex items-center justify-between px-4 border-b border-white/20">
// // // // // // // //           <h1 className="text-xl font-bold text-white truncate">
// // // // // // // //             {storeName || "Store Manager"}
// // // // // // // //           </h1>
// // // // // // // //           <button
// // // // // // // //             onClick={() => setSidebarOpen(false)}
// // // // // // // //             className="md:hidden text-white hover:text-gray-200"
// // // // // // // //           >
// // // // // // // //             <X size={24} />
// // // // // // // //           </button>
// // // // // // // //         </div>

// // // // // // // //         <div className="p-4">
// // // // // // // //           <div className="flex items-center space-x-3 mb-6">
// // // // // // // //             <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-blue-800 font-bold">
// // // // // // // //               A
// // // // // // // //             </div>
// // // // // // // //             <div>
// // // // // // // //               <div className="font-medium text-white">Admin User</div>
// // // // // // // //               <div className="text-sm text-blue-200">Super Admin</div>
// // // // // // // //             </div>
// // // // // // // //           </div>
          
// // // // // // // //           <nav>
// // // // // // // //             <ul className="space-y-1">
// // // // // // // //               <li>
// // // // // // // //                 <button 
// // // // // // // //                   onClick={() => changePage('dashboard')}
// // // // // // // //                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'dashboard' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// // // // // // // //                 >
// // // // // // // //                   <BarChart2 size={18} className="mr-3" />
// // // // // // // //                   Dashboard
// // // // // // // //                 </button>
// // // // // // // //               </li>
              
// // // // // // // //               {/* Products dropdown */}
// // // // // // // //               <li>
// // // // // // // //                 <div>
// // // // // // // //                   <button 
// // // // // // // //                     onClick={() => toggleMenu('products')}
// // // // // // // //                     className={`flex items-center justify-between w-full p-2 rounded-md 
// // // // // // // //                       ${currentPage === 'products' || currentPage === 'inventory' || currentPage === 'restockAlerts' ? 
// // // // // // // //                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// // // // // // // //                   >
// // // // // // // //                     <div className="flex items-center">
// // // // // // // //                       <Package size={18} className="mr-3" />
// // // // // // // //                       Products
// // // // // // // //                     </div>
// // // // // // // //                     {expandedMenus.products ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
// // // // // // // //                   </button>
                  
// // // // // // // //                   {expandedMenus.products && (
// // // // // // // //                     <ul className="pl-9 pt-1 pb-1">
// // // // // // // //                       <li>
// // // // // // // //                         <button 
// // // // // // // //                           onClick={() => changePage('products')} 
// // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // //                         >
// // // // // // // //                           All Products
// // // // // // // //                         </button>
// // // // // // // //                       </li>
// // // // // // // //                       <li>
// // // // // // // //                         <button 
// // // // // // // //                           onClick={() => changePage('restockAlerts')} 
// // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // //                         >
// // // // // // // //                           Restock Alerts
// // // // // // // //                         </button>
// // // // // // // //                       </li>
// // // // // // // //                       <li>
// // // // // // // //                         <button 
// // // // // // // //                           onClick={() => changePage('batch')} 
// // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // //                         >
// // // // // // // //                           Batch Expiry Tracker
// // // // // // // //                         </button>
// // // // // // // //                       </li>
// // // // // // // //                       <li>
// // // // // // // //                         <button 
// // // // // // // //                           onClick={() => changePage('damage')} 
// // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // //                         >
// // // // // // // //                          Damage Items
// // // // // // // //                         </button>
// // // // // // // //                       </li>
// // // // // // // //                     </ul>
// // // // // // // //                   )}
// // // // // // // //                 </div>
// // // // // // // //               </li>
              
// // // // // // // //               {/* Employees dropdown */}
// // // // // // // //               <li>
// // // // // // // //                 <div>
// // // // // // // //                   <button 
// // // // // // // //                     onClick={() => toggleMenu('employees')}
// // // // // // // //                     className={`flex items-center justify-between w-full p-2 rounded-md 
// // // // // // // //                       ${currentPage === 'employees' || currentPage === 'roles' || currentPage === 'employeeSearch' ? 
// // // // // // // //                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// // // // // // // //                   >
// // // // // // // //                     <div className="flex items-center">
// // // // // // // //                       <Users size={18} className="mr-3" />
// // // // // // // //                       Employees
// // // // // // // //                     </div>
// // // // // // // //                     {expandedMenus.employees ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
// // // // // // // //                   </button>
                  
// // // // // // // //                   {expandedMenus.employees && (
// // // // // // // //                     <ul className="pl-9 pt-1 pb-1">
// // // // // // // //                       <li>
// // // // // // // //                         <button 
// // // // // // // //                           onClick={() => changePage('employees')} 
// // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // //                         >
// // // // // // // //                           Manage Employees
// // // // // // // //                         </button>
// // // // // // // //                       </li>
// // // // // // // //                       <li>
// // // // // // // //                         <button 
// // // // // // // //                           onClick={() => changePage('roles')} 
// // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // //                         >
// // // // // // // //                           Roles & Permissions
// // // // // // // //                         </button>
// // // // // // // //                       </li>
// // // // // // // //                       <li>
// // // // // // // //                         <button 
// // // // // // // //                           onClick={() => changePage('attendance')} 
// // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // //                         >
// // // // // // // //                           Attendance
// // // // // // // //                         </button>
// // // // // // // //                       </li>
// // // // // // // //                       <li>
// // // // // // // //                         <button 
// // // // // // // //                           onClick={() => changePage('add_face')} 
// // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // //                         >
// // // // // // // //                           Add Face
// // // // // // // //                         </button>
// // // // // // // //                       </li>
// // // // // // // //                       <li>
// // // // // // // //                         <button 
// // // // // // // //                           onClick={() => changePage('face')} 
// // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // //                         >
// // // // // // // //                           Face
// // // // // // // //                         </button>
// // // // // // // //                       </li>
// // // // // // // //                       <li>
// // // // // // // //                         <button 
// // // // // // // //                           onClick={() => changePage('employeeSearch')} 
// // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // //                         >
// // // // // // // //                           Employee Search
// // // // // // // //                         </button>
// // // // // // // //                       </li>
// // // // // // // //                       <li>
// // // // // // // //                         <button 
// // // // // // // //                           onClick={() => changePage('emp')} 
// // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // //                         >
// // // // // // // //                           Employee Sales
// // // // // // // //                         </button>
// // // // // // // //                       </li>
// // // // // // // //                       <li>
// // // // // // // //                         <button 
// // // // // // // //                           onClick={() => changePage('salaries')} 
// // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // //                         >
// // // // // // // //                           Salaries
// // // // // // // //                         </button>
// // // // // // // //                       </li>
// // // // // // // //                     </ul>
// // // // // // // //                   )}
// // // // // // // //                 </div>
// // // // // // // //               </li>
              
// // // // // // // //               {/* Sales dropdown */}
// // // // // // // //               <li>
// // // // // // // //                 <div>
// // // // // // // //                   <button 
// // // // // // // //                     onClick={() => toggleMenu('sales')}
// // // // // // // //                     className={`flex items-center justify-between w-full p-2 rounded-md 
// // // // // // // //                       ${currentPage === 'dailySales' || currentPage === 'salesChart' || currentPage === 'productSales' || currentPage === 'billing' ? 
// // // // // // // //                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// // // // // // // //                   >
// // // // // // // //                     <div className="flex items-center">
// // // // // // // //                       <DollarSign size={18} className="mr-3" />
// // // // // // // //                       Sales
// // // // // // // //                     </div>
// // // // // // // //                     {expandedMenus.sales ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
// // // // // // // //                   </button>
                  
// // // // // // // //                   {expandedMenus.sales && (
// // // // // // // //                     <ul className="pl-9 pt-1 pb-1">
// // // // // // // //                       <li>
// // // // // // // //                         <button 
// // // // // // // //                           onClick={() => changePage('dailySales')} 
// // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // //                         >
// // // // // // // //                           Daily Sales
// // // // // // // //                         </button>
// // // // // // // //                       </li>
// // // // // // // //                       <li>
// // // // // // // //                         <button 
// // // // // // // //                           onClick={() => changePage('salesChart')} 
// // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // //                         >
// // // // // // // //                           Sales Reports
// // // // // // // //                         </button>
// // // // // // // //                       </li>
// // // // // // // //                       <li>
// // // // // // // //                         <button 
// // // // // // // //                           onClick={() => changePage('productSales')} 
// // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // //                         >
// // // // // // // //                           Product Sales
// // // // // // // //                         </button>
// // // // // // // //                       </li>
// // // // // // // //                       <li>
// // // // // // // //                         <button 
// // // // // // // //                           onClick={() => changePage('analytics')} 
// // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // //                         >
// // // // // // // //                           Analytics
// // // // // // // //                         </button>
// // // // // // // //                       </li>
// // // // // // // //                       <li>
// // // // // // // //                         <button 
// // // // // // // //                           onClick={() => changePage('billing')} 
// // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // //                         >
// // // // // // // //                           Billing
// // // // // // // //                         </button>
// // // // // // // //                       </li>
// // // // // // // //                     </ul>
// // // // // // // //                   )}
// // // // // // // //                 </div>
// // // // // // // //               </li>
              
// // // // // // // //               {/* Customers dropdown */}
// // // // // // // //               <li>
// // // // // // // //                 <div>
// // // // // // // //                   <button 
// // // // // // // //                     onClick={() => toggleMenu('customers')}
// // // // // // // //                     className={`flex items-center justify-between w-full p-2 rounded-md 
// // // // // // // //                       ${currentPage === 'customers' || currentPage === 'customerSignup' ? 
// // // // // // // //                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// // // // // // // //                   >
// // // // // // // //                     <div className="flex items-center">
// // // // // // // //                       <UserCheck size={18} className="mr-3" />
// // // // // // // //                       Customers
// // // // // // // //                     </div>
// // // // // // // //                     {expandedMenus.customers ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
// // // // // // // //                   </button>
                  
// // // // // // // //                   {expandedMenus.customers && (
// // // // // // // //                     <ul className="pl-9 pt-1 pb-1">
// // // // // // // //                       <li>
// // // // // // // //                         <button 
// // // // // // // //                           onClick={() => changePage('customers')} 
// // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // //                         >
// // // // // // // //                           View Customers
// // // // // // // //                         </button>
// // // // // // // //                       </li>
// // // // // // // //                       <li>
// // // // // // // //                         <button 
// // // // // // // //                           onClick={() => changePage('customerSignup')} 
// // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // //                         >
// // // // // // // //                           Add Customer
// // // // // // // //                         </button>
// // // // // // // //                       </li>
// // // // // // // //                       <li>
// // // // // // // //                         <button 
// // // // // // // //                           onClick={() => changePage('khata')} 
// // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // //                         >
// // // // // // // //                           Khatabook
// // // // // // // //                         </button>
// // // // // // // //                       </li>
// // // // // // // //                       <li>
// // // // // // // //                         <button 
// // // // // // // //                           onClick={() => changePage('khata2')} 
// // // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // // //                         >
// // // // // // // //                           Khatabook2
// // // // // // // //                         </button>
// // // // // // // //                       </li>
// // // // // // // //                     </ul>
// // // // // // // //                   )}
// // // // // // // //                 </div>
// // // // // // // //               </li>
              
// // // // // // // //               {/* Suppliers */}
// // // // // // // //               <li>
// // // // // // // //                 <button 
// // // // // // // //                   onClick={() => changePage('suppliers')}
// // // // // // // //                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'suppliers' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// // // // // // // //                 >
// // // // // // // //                   <Truck size={18} className="mr-3" />
// // // // // // // //                   Suppliers
// // // // // // // //                 </button>
// // // // // // // //               </li>
              
// // // // // // // //               {/* Inventory/Stock */}
// // // // // // // //               <li>
// // // // // // // //                 <button 
// // // // // // // //                   onClick={() => changePage('stockTracking')}
// // // // // // // //                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'stockTracking' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// // // // // // // //                 >
// // // // // // // //                   <Layers size={18} className="mr-3" />
// // // // // // // //                   Stock Tracking
// // // // // // // //                 </button>
// // // // // // // //               </li>
              
// // // // // // // //               {/* User Management */}
// // // // // // // //               <li>
// // // // // // // //                 <button 
// // // // // // // //                   onClick={() => changePage('users')}
// // // // // // // //                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'users' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// // // // // // // //                 >
// // // // // // // //                   <User size={18} className="mr-3" />
// // // // // // // //                   User Management
// // // // // // // //                 </button>
// // // // // // // //               </li>
              
// // // // // // // //               {/* Settings */}
// // // // // // // //               <li>
// // // // // // // //                 <button 
// // // // // // // //                   className="flex items-center w-full p-2 rounded-md text-white hover:bg-white/10"
// // // // // // // //                 >
// // // // // // // //                   <Settings size={18} className="mr-3" />
// // // // // // // //                   Settings
// // // // // // // //                 </button>
// // // // // // // //               </li>
// // // // // // // //             </ul>
// // // // // // // //           </nav>
// // // // // // // //         </div>
// // // // // // // //       </aside>

// // // // // // // //       {/* Mobile menu button */}
// // // // // // // //       <button
// // // // // // // //         onClick={() => setSidebarOpen(true)}
// // // // // // // //         className={`md:hidden fixed top-4 left-4 z-10 p-2 rounded-lg bg-blue-800 text-white
// // // // // // // //           shadow-lg hover:bg-blue-700 transition-colors duration-200
// // // // // // // //           ${sidebarOpen ? 'hidden' : 'block'}`}
// // // // // // // //       >
// // // // // // // //         <Menu size={24} />
// // // // // // // //       </button>

// // // // // // // //       {/* Main content */}
// // // // // // // //       <main className="flex-1 overflow-auto">
// // // // // // // //         {/* Top header */}
// // // // // // // //         <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-100 dark:border-gray-700">
// // // // // // // //           <div className="px-4 py-3 flex justify-between items-center">
// // // // // // // //             <div className="md:hidden flex items-center">
// // // // // // // //               <h1 className="text-xl font-bold text-blue-800 dark:text-white">
// // // // // // // //                 {currentPage === 'dashboard' ? 'Dashboard' : 
// // // // // // // //                  currentPage === 'products' ? 'Products' :
// // // // // // // //                  currentPage === 'employees' ? 'Employees' :
// // // // // // // //                  currentPage === 'dailySales' ? 'Sales' :
// // // // // // // //                  currentPage === 'stockTracking' ? 'Stock' :
// // // // // // // //                  currentPage === 'suppliers' ? 'Suppliers' :
// // // // // // // //                  'Admin Dashboard'}
// // // // // // // //               </h1>
// // // // // // // //             </div>
            
// // // // // // // //             <div className="hidden md:flex items-center">
// // // // // // // //               <div className="relative mr-4">
// // // // // // // //                 <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// // // // // // // //                 <input
// // // // // // // //                   type="text"
// // // // // // // //                   placeholder="Search..."
// // // // // // // //                   className="pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
// // // // // // // //                 />
// // // // // // // //               </div>
// // // // // // // //             </div>
            
// // // // // // // //             <div className="flex items-center space-x-4">
// // // // // // // //               <button 
// // // // // // // //                 onClick={() => setNotificationsOpen(!notificationsOpen)} 
// // // // // // // //                 className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative"
// // // // // // // //               >
// // // // // // // //                 <Bell size={20} />
// // // // // // // //                 <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
// // // // // // // //               </button>
              
// // // // // // // //               <button 
// // // // // // // //                 onClick={() => setUserMenuOpen(!userMenuOpen)} 
// // // // // // // //                 className="flex items-center text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
// // // // // // // //               >
// // // // // // // //                 <LogOut size={16} className="mr-1" />
// // // // // // // //                 <span className="hidden md:inline">Logout</span>
// // // // // // // //               </button>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
        
// // // // // // // //         {/* Page content */}
// // // // // // // //         <div className="p-4">
// // // // // // // //           {renderContent()}
// // // // // // // //         </div>
// // // // // // // //       </main>

// // // // // // // //       {/* Notifications dropdown */}
// // // // // // // //       <AnimatePresence>
// // // // // // // //         {notificationsOpen && (
// // // // // // // //           <motion.div
// // // // // // // //             initial={{ opacity: 0, y: -10 }}
// // // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // // //             exit={{ opacity: 0, y: -10 }}
// // // // // // // //             transition={{ duration: 0.2 }}
// // // // // // // //             ref={notificationRef}
// // // // // // // //             className="fixed right-4 top-16 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-40 border border-gray-100 dark:border-gray-700"
// // // // // // // //           >
// // // // // // // //             <div className="p-4">
// // // // // // // //               <h3 className="font-medium text-gray-800 dark:text-white mb-4">Notifications</h3>
// // // // // // // //               <div className="space-y-3">
// // // // // // // //                 {notifications.map((notification) => (
// // // // // // // //                   <div key={notification.id} className="flex items-start space-x-3">
// // // // // // // //                     <div className={`p-2 rounded-full ${
// // // // // // // //                       notification.type === 'alert' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' :
// // // // // // // //                       notification.type === 'order' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' :
// // // // // // // //                       notification.type === 'reminder' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400' :
// // // // // // // //                       'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
// // // // // // // //                     }`}>
// // // // // // // //                       <Bell size={16} />
// // // // // // // //                     </div>
// // // // // // // //                     <div>
// // // // // // // //                       <div className="text-sm font-medium text-gray-800 dark:text-white">{notification.title}</div>
// // // // // // // //                       <div className="text-xs text-gray-500 dark:text-gray-400">{notification.message}</div>
// // // // // // // //                       <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{notification.time}</div>
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                 ))}
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </motion.div>
// // // // // // // //         )}
// // // // // // // //       </AnimatePresence>

// // // // // // // //       {/* User menu dropdown */}
// // // // // // // //       <AnimatePresence>
// // // // // // // //         {userMenuOpen && (
// // // // // // // //           <motion.div
// // // // // // // //             initial={{ opacity: 0, y: -10 }}
// // // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // // //             exit={{ opacity: 0, y: -10 }}
// // // // // // // //             transition={{ duration: 0.2 }}
// // // // // // // //             ref={userMenuRef}
// // // // // // // //             className="fixed right-4 top-16 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-40 border border-gray-100 dark:border-gray-700"
// // // // // // // //           >
// // // // // // // //             <div className="p-2">
// // // // // // // //               <button 
// // // // // // // //                 onClick={toggleDarkMode}
// // // // // // // //                 className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left"
// // // // // // // //               >
// // // // // // // //                 {darkMode ? 'Light Mode' : 'Dark Mode'}
// // // // // // // //               </button>
// // // // // // // //               <button 
// // // // // // // //                 onClick={() => navigate('/settings')}
// // // // // // // //                 className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left"
// // // // // // // //               >
// // // // // // // //                 Settings
// // // // // // // //               </button>
// // // // // // // //               <button 
// // // // // // // //                 onClick={() => navigate('/logout')}
// // // // // // // //                 className="w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg text-left"
// // // // // // // //               >
// // // // // // // //                 Logout
// // // // // // // //               </button>
// // // // // // // //             </div>
// // // // // // // //           </motion.div>
// // // // // // // //         )}
// // // // // // // //       </AnimatePresence>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default AdminDashboard;  


// // // // // // // import React, { useState, useContext, useEffect, useRef } from "react";
// // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
// // // // // // // import { 
// // // // // // //   Menu, 
// // // // // // //   Package, 
// // // // // // //   Users, 
// // // // // // //   BarChart2, 
// // // // // // //   Settings, 
// // // // // // //   CreditCard, 
// // // // // // //   Info, 
// // // // // // //   X, 
// // // // // // //   DollarSign,
// // // // // // //   UserCheck,
// // // // // // //   Search,
// // // // // // //   Bell,
// // // // // // //   LogOut,
// // // // // // //   Truck,
// // // // // // //   Layers,
// // // // // // //   ShoppingBag,
// // // // // // //   ChevronRight,
// // // // // // //   ChevronDown,
// // // // // // //   AlertTriangle,
// // // // // // //   User,
// // // // // // //   Calendar,
// // // // // // //   Inbox,
// // // // // // //   Home,
// // // // // // //   Shield,
// // // // // // //   Zap,
// // // // // // //   TrendingUp,
// // // // // // //   HelpCircle,
// // // // // // //   Grid
// // // // // // // } from 'lucide-react';
// // // // // // // import { motion, AnimatePresence } from 'framer-motion';

// // // // // // // // Import all the components you need
// // // // // // // import ProductDashboard from "./ProductManagement";
// // // // // // // import EmployeeManagement from "./EmployeeManagement";
// // // // // // // import RoleDistribution from "./RoleDistribution";
// // // // // // // import DailySales from "./DailySales";
// // // // // // // import StockTracking from "./StockTracking";
// // // // // // // import EmployeeSearch from "./EmployeeSearch";
// // // // // // // import Billing from "./Billing";
// // // // // // // import CustomerSignupForm from "./CustomerSignUpForm";
// // // // // // // import ViewCustomers from "./ViewCustomers";
// // // // // // // import SalesChart from "./SalesChart";
// // // // // // // import ProductSales from "./ProductSales";
// // // // // // // import InventoryDashboard from "./InventoryDashboard";
// // // // // // // import UserManagementPage from "./UserManagement";
// // // // // // // import ProductDashboard2 from "./RestockAlerts";
// // // // // // // import SupplierManagement from "./Supc";
// // // // // // // import BatchExpiryTracker from "./BatchExpiryTracker";
// // // // // // // import DamageItemsManagement from "./DamageItemsManagement";
// // // // // // // import EmployeeSales from "./EmployeeSales";
// // // // // // // import EmployeeAttendanceForm from "./EmployeeAttendance";
// // // // // // // import FacialRecognitionAttendance from "./FacialRecognitionAttendance";
// // // // // // // import AddEmployeeFace from "./AddEmployeeFace";
// // // // // // // import EmployeesSalaryManagement from  './EmployeesSalaryManagement';
// // // // // // // import SalesAnalyticsDashboard from "./SalesAnalyticsDashboard";
// // // // // // // import Khatabook from "./Khatabook";
// // // // // // // import KhatabookPage from "./Khatabook2";

// // // // // // // const AdminDashboard = () => {
// // // // // // //   const { storeName } = useContext(StoreContext);
// // // // // // //   const [sidebarOpen, setSidebarOpen] = useState(true);
// // // // // // //   const location = useLocation();
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const [currentPage, setCurrentPage] = useState('dashboard');
// // // // // // //   const [expandedMenus, setExpandedMenus] = useState({
// // // // // // //     products: false,
// // // // // // //     employees: false,
// // // // // // //     sales: false,
// // // // // // //     customers: false,
// // // // // // //     suppliers: false
// // // // // // //   });
// // // // // // //   const [searchFocused, setSearchFocused] = useState(false);
// // // // // // //   const [notificationsOpen, setNotificationsOpen] = useState(false);
// // // // // // //   const [userMenuOpen, setUserMenuOpen] = useState(false);
// // // // // // //   const [darkMode, setDarkMode] = useState(false);
// // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // //   const [animateCharts, setAnimateCharts] = useState(false);
  
// // // // // // //   const notificationRef = useRef(null);
// // // // // // //   const userMenuRef = useRef(null);

// // // // // // //   // Stats for dashboard with more specific data
// // // // // // //   const stats = [
// // // // // // //     { title: 'Total Sales Today', value: '$5,890', change: '+15%', up: true, icon: <DollarSign size={20} className="text-green-500" /> },
// // // // // // //     { title: 'Low Stock Items', value: '24', change: '+8', up: false, icon: <AlertTriangle size={20} className="text-amber-500" /> },
// // // // // // //     { title: 'Today\'s Orders', value: '42', change: '+12%', up: true, icon: <ShoppingBag size={20} className="text-blue-500" /> },
// // // // // // //     { title: 'Active Employees', value: '18', change: '0', up: true, icon: <Users size={20} className="text-purple-500" /> },
// // // // // // //   ];
  
// // // // // // //   // Recent transactions for dashboard
// // // // // // //   const recentTransactions = [
// // // // // // //     { id: '#TRX-4589', customer: 'John Smith', amount: '$129.50', date: '20 min ago', status: 'completed', paymentMethod: 'Credit Card' },
// // // // // // //     { id: '#TRX-4588', customer: 'Lisa Wong', amount: '$245.75', date: '45 min ago', status: 'completed', paymentMethod: 'PayPal' },
// // // // // // //     { id: '#TRX-4587', customer: 'Mike Johnson', amount: '$67.25', date: '1 hr ago', status: 'pending', paymentMethod: 'Credit Card' },
// // // // // // //     { id: '#TRX-4586', customer: 'Sara Miller', amount: '$352.00', date: '2 hrs ago', status: 'completed', paymentMethod: 'Bank Transfer' },
// // // // // // //     { id: '#TRX-4585', customer: 'David Chen', amount: '$84.30', date: '3 hrs ago', status: 'failed', paymentMethod: 'Credit Card' },
// // // // // // //   ];
  
// // // // // // //   // Low stock items
// // // // // // //   const lowStockItems = [
// // // // // // //     { id: 'P-1245', name: 'Premium Coffee Beans', current: 12, min: 20, reorderStatus: 'urgent' },
// // // // // // //     { id: 'P-2340', name: 'Organic Green Tea', current: 8, min: 15, reorderStatus: 'pending' },
// // // // // // //     { id: 'P-1023', name: 'Vitamin C Tablets', current: 5, min: 10, reorderStatus: 'ordered' },
// // // // // // //     { id: 'P-3456', name: 'Almond Milk', current: 9, min: 12, reorderStatus: 'urgent' },
// // // // // // //   ];

// // // // // // //   // Mock data for sales chart
// // // // // // //   const salesData = [
// // // // // // //     { month: 'Jan', sales: 4500, target: 4000 },
// // // // // // //     { month: 'Feb', sales: 5200, target: 4200 },
// // // // // // //     { month: 'Mar', sales: 4800, target: 4400 },
// // // // // // //     { month: 'Apr', sales: 5500, target: 4600 },
// // // // // // //     { month: 'May', sales: 6200, target: 4800 },
// // // // // // //     { month: 'Jun', sales: 5900, target: 5000 },
// // // // // // //     { month: 'Jul', sales: 6500, target: 5200 },
// // // // // // //   ];

// // // // // // //   // Notifications
// // // // // // //   const notifications = [
// // // // // // //     { id: 1, title: 'Low stock alert', message: '4 products need reordering', time: '10 min ago', read: false, type: 'alert' },
// // // // // // //     { id: 2, title: 'New order received', message: 'Order #12458 from John D.', time: '25 min ago', read: false, type: 'order' },
// // // // // // //     { id: 3, title: 'Staff meeting', message: 'Reminder: Meeting at 3 PM', time: '2 hours ago', read: true, type: 'reminder' },
// // // // // // //     { id: 4, title: 'System update', message: 'Maintenance scheduled for tonight', time: '1 day ago', read: true, type: 'system' },
// // // // // // //   ];

// // // // // // //   // Page loading simulation
// // // // // // //   useEffect(() => {
// // // // // // //     const timer = setTimeout(() => {
// // // // // // //       setLoading(false);
// // // // // // //       setTimeout(() => setAnimateCharts(true), 500);
// // // // // // //     }, 800);
// // // // // // //     return () => clearTimeout(timer);
// // // // // // //   }, [currentPage]);

// // // // // // //   // Toggle sidebar on mobile
// // // // // // //   useEffect(() => {
// // // // // // //     if (window.innerWidth < 768) {
// // // // // // //       setSidebarOpen(false);
// // // // // // //     }
// // // // // // //   }, [location]);

// // // // // // //   // Resize handling
// // // // // // //   useEffect(() => {
// // // // // // //     const handleResize = () => {
// // // // // // //       if (window.innerWidth >= 768) {
// // // // // // //         setSidebarOpen(true);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     window.addEventListener('resize', handleResize);
// // // // // // //     handleResize();
// // // // // // //     return () => window.removeEventListener('resize', handleResize);
// // // // // // //   }, []);

// // // // // // //   // Handle clicks outside dropdowns
// // // // // // //   useEffect(() => {
// // // // // // //     const handleClickOutside = (event) => {
// // // // // // //       if (notificationRef.current && !notificationRef.current.contains(event.target)) {
// // // // // // //         setNotificationsOpen(false);
// // // // // // //       }
// // // // // // //       if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
// // // // // // //         setUserMenuOpen(false);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     document.addEventListener('mousedown', handleClickOutside);
// // // // // // //     return () => document.removeEventListener('mousedown', handleClickOutside);
// // // // // // //   }, []);

// // // // // // //   // Toggle submenu expandable sections
// // // // // // //   const toggleMenu = (menu) => {
// // // // // // //     setExpandedMenus(prev => ({
// // // // // // //       ...prev,
// // // // // // //       [menu]: !prev[menu]
// // // // // // //     }));
// // // // // // //   };

// // // // // // //   // Change current page based on menu click
// // // // // // //   const changePage = (page) => {
// // // // // // //     setCurrentPage(page);
// // // // // // //     setLoading(true); // Show loading state when changing pages
// // // // // // //     if (window.innerWidth < 768) {
// // // // // // //       setSidebarOpen(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Toggle dark mode
// // // // // // //   const toggleDarkMode = () => {
// // // // // // //     setDarkMode(!darkMode);
// // // // // // //     document.documentElement.classList.toggle('dark');
// // // // // // //   };

// // // // // // //   // Render main dashboard content
// // // // // // //   const renderDashboard = () => (
// // // // // // //     <motion.div 
// // // // // // //       initial={{ opacity: 0 }}
// // // // // // //       animate={{ opacity: 1 }}
// // // // // // //       transition={{ duration: 0.3 }}
// // // // // // //       className="space-y-6"
// // // // // // //     >
// // // // // // //       {/* Welcome section */}
// // // // // // //       <div className="mb-6">
// // // // // // //         <h2 className="text-xl font-semibold text-gray-800 dark:text-white transition-colors">Welcome to {storeName || "Your Store"}</h2>
// // // // // // //         <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Here's a quick summary of your store performance today</p>
// // // // // // //       </div>
      
// // // // // // //       {/* Stats cards */}
// // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
// // // // // // //         {stats.map((stat, index) => (
// // // // // // //           <motion.div 
// // // // // // //             key={index} 
// // // // // // //             initial={{ y: 20, opacity: 0 }}
// // // // // // //             animate={{ y: 0, opacity: 1 }}
// // // // // // //             transition={{ duration: 0.3, delay: index * 0.1 }}
// // // // // // //             whileHover={{ y: -4, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
// // // // // // //             className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700"
// // // // // // //           >
// // // // // // //             <div className="flex justify-between items-start mb-3">
// // // // // // //               <div className="text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors">{stat.title}</div>
// // // // // // //               <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700 transition-colors">
// // // // // // //                 {stat.icon}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //             <div className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">{stat.value}</div>
// // // // // // //             <div className={`text-sm mt-2 flex items-center ${stat.up ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'} transition-colors`}>
// // // // // // //               {stat.change}
// // // // // // //               {stat.up ? 
// // // // // // //                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
// // // // // // //                 </svg> :
// // // // // // //                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// // // // // // //                 </svg>
// // // // // // //               }
// // // // // // //             </div>
// // // // // // //           </motion.div>
// // // // // // //         ))}
// // // // // // //       </div>
      
// // // // // // //       {/* Main dashboard layout */}
// // // // // // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // // // // // //         {/* Transactions */}
// // // // // // //         <motion.div
// // // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // //           transition={{ duration: 0.3, delay: 0.2 }}
// // // // // // //           className="lg:col-span-2"
// // // // // // //         >
// // // // // // //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 mb-6 border border-gray-100 dark:border-gray-700">
// // // // // // //             <div className="flex justify-between items-center mb-6">
// // // // // // //               <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
// // // // // // //                 <ShoppingBag size={18} className="mr-2 text-blue-600 dark:text-blue-400" />
// // // // // // //                 Recent Transactions
// // // // // // //               </h3>
// // // // // // //               <button 
// // // // // // //                 onClick={() => changePage('dailySales')} 
// // // // // // //                 className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center"
// // // // // // //               >
// // // // // // //                 View All
// // // // // // //                 <ChevronRight size={16} className="ml-1" />
// // // // // // //               </button>
// // // // // // //             </div>
            
// // // // // // //             <div className="overflow-x-auto">
// // // // // // //               <table className="w-full">
// // // // // // //                 <thead>
// // // // // // //                   <tr className="border-b border-gray-200 dark:border-gray-700">
// // // // // // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">ID</th>
// // // // // // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Customer</th>
// // // // // // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
// // // // // // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Time</th>
// // // // // // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
// // // // // // //                   </tr>
// // // // // // //                 </thead>
// // // // // // //                 <tbody>
// // // // // // //                   {recentTransactions.map((transaction, index) => (
// // // // // // //                     <motion.tr 
// // // // // // //                       key={index} 
// // // // // // //                       initial={{ opacity: 0, y: 10 }}
// // // // // // //                       animate={{ opacity: 1, y: 0 }}
// // // // // // //                       transition={{ duration: 0.2, delay: index * 0.1 }}
// // // // // // //                       className="border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
// // // // // // //                     >
// // // // // // //                       <td className="py-4 px-3 text-sm font-medium text-gray-700 dark:text-gray-300">{transaction.id}</td>
// // // // // // //                       <td className="py-4 px-3 text-sm text-gray-700 dark:text-gray-300">{transaction.customer}</td>
// // // // // // //                       <td className="py-4 px-3 text-sm font-medium text-gray-900 dark:text-white">{transaction.amount}</td>
// // // // // // //                       <td className="py-4 px-3 text-sm text-gray-500 dark:text-gray-400">{transaction.date}</td>
// // // // // // //                       <td className="py-4 px-3 text-sm">
// // // // // // //                         <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
// // // // // // //                           transaction.status === 'completed' 
// // // // // // //                             ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
// // // // // // //                             : transaction.status === 'pending' 
// // // // // // //                             ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
// // // // // // //                             : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
// // // // // // //                         }`}>
// // // // // // //                           {transaction.status === 'completed' && <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-green-600 dark:bg-green-400"></span>}
// // // // // // //                           {transaction.status === 'pending' && <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-yellow-600 dark:bg-yellow-400"></span>}
// // // // // // //                           {transaction.status === 'failed' && <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-red-600 dark:bg-red-400"></span>}
// // // // // // //                           {transaction.status}
// // // // // // //                         </span>
// // // // // // //                       </td>
// // // // // // //                     </motion.tr>
// // // // // // //                   ))}
// // // // // // //                 </tbody>
// // // // // // //               </table>
// // // // // // //             </div>
// // // // // // //           </div>
          
// // // // // // //           {/* Sales Chart */}
// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // //             transition={{ duration: 0.3, delay: 0.3 }}
// // // // // // //             className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 mb-6 border border-gray-100 dark:border-gray-700"
// // // // // // //           >
// // // // // // //             <div className="flex justify-between items-center mb-6">
// // // // // // //               <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
// // // // // // //                 <TrendingUp size={18} className="mr-2 text-indigo-600 dark:text-indigo-400" />
// // // // // // //                 Sales Overview
// // // // // // //               </h3>
// // // // // // //               <button 
// // // // // // //                 onClick={() => changePage('salesChart')} 
// // // // // // //                 className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors flex items-center"
// // // // // // //               >
// // // // // // //                 Detailed Report
// // // // // // //                 <ChevronRight size={16} className="ml-1" />
// // // // // // //               </button>
// // // // // // //             </div>
            
// // // // // // //             <div className="h-80 relative">
// // // // // // //               {animateCharts ? (
// // // // // // //                 <div className="h-full">
// // // // // // //                   <div className="h-full flex items-end space-x-4 px-2">
// // // // // // //                     {salesData.map((item, index) => (
// // // // // // //                       <div key={index} className="flex-1 flex flex-col                       items-center">
// // // // // // //                         <div className="w-full h-full flex flex-col justify-end space-y-2">
// // // // // // //                           <motion.div
// // // // // // //                             initial={{ height: 0 }}
// // // // // // //                             animate={{ height: `${(item.sales / 7000) * 100}%` }}
// // // // // // //                             transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
// // // // // // //                             className="w-full bg-gradient-to-t from-blue-500 to-blue-400 dark:from-blue-600 dark:to-blue-500 rounded-t-md relative group"
// // // // // // //                           >
// // // // // // //                             <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
// // // // // // //                               ${item.sales}
// // // // // // //                             </div>
// // // // // // //                           </motion.div>
// // // // // // //                           <motion.div
// // // // // // //                             initial={{ height: 0 }}
// // // // // // //                             animate={{ height: `${(item.target / 7000) * 100}%` }}
// // // // // // //                             transition={{ duration: 0.8, delay: index * 0.1 + 0.2, type: "spring" }}
// // // // // // //                             className="w-full bg-gradient-to-t from-gray-300 to-gray-200 dark:from-gray-600 dark:to-gray-500 rounded-t-md relative group"
// // // // // // //                           >
// // // // // // //                             <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
// // // // // // //                               Target: ${item.target}
// // // // // // //                             </div>
// // // // // // //                           </motion.div>
// // // // // // //                         </div>
// // // // // // //                         <div className="text-xs mt-2 text-gray-600 dark:text-gray-400 font-medium">{item.month}</div>
// // // // // // //                       </div>
// // // // // // //                     ))}
// // // // // // //                   </div>
// // // // // // //                   <div className="mt-4 flex justify-between items-center text-sm">
// // // // // // //                     <div className="flex items-center">
// // // // // // //                       <div className="w-3 h-3 bg-blue-500 rounded-sm mr-2"></div>
// // // // // // //                       <span className="text-gray-700 dark:text-gray-300">Actual Sales</span>
// // // // // // //                     </div>
// // // // // // //                     <div className="flex items-center">
// // // // // // //                       <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-sm mr-2"></div>
// // // // // // //                       <span className="text-gray-700 dark:text-gray-300">Target</span>
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               ) : (
// // // // // // //                 <div className="h-full flex items-center justify-center">
// // // // // // //                   <div className="animate-pulse text-gray-400 dark:text-gray-500">Loading chart data...</div>
// // // // // // //                 </div>
// // // // // // //               )}
// // // // // // //             </div>
// // // // // // //           </motion.div>
// // // // // // //         </motion.div>
        
// // // // // // //         {/* Sidebar content */}
// // // // // // //         <motion.div
// // // // // // //           initial={{ opacity: 0, x: 20 }}
// // // // // // //           animate={{ opacity: 1, x: 0 }}
// // // // // // //           transition={{ duration: 0.3, delay: 0.4 }}
// // // // // // //           className="space-y-6"
// // // // // // //         >
// // // // // // //           {/* Quick Access */}
// // // // // // //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
// // // // // // //             <h3 className="font-medium text-gray-800 dark:text-white transition-colors mb-4 flex items-center">
// // // // // // //               <Zap size={18} className="mr-2 text-amber-500" />
// // // // // // //               Quick Access
// // // // // // //             </h3>
// // // // // // //             <div className="grid grid-cols-2 gap-3">
// // // // // // //               {[
// // // // // // //                 { icon: <Package size={16} />, label: 'Products', page: 'products', color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
// // // // // // //                 { icon: <Users size={16} />, label: 'Employees', page: 'employees', color: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' },
// // // // // // //                 { icon: <DollarSign size={16} />, label: 'Sales', page: 'dailySales', color: 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400' },
// // // // // // //                 { icon: <CreditCard size={16} />, label: 'Billing', page: 'billing', color: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400' },
// // // // // // //                 { icon: <Layers size={16} />, label: 'Stock', page: 'stockTracking', color: 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' },
// // // // // // //                 { icon: <Truck size={16} />, label: 'Suppliers', page: 'suppliers', color: 'bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400' },
// // // // // // //               ].map((item, index) => (
// // // // // // //                 <motion.button 
// // // // // // //                   key={index}
// // // // // // //                   whileHover={{ scale: 1.03 }}
// // // // // // //                   whileTap={{ scale: 0.97 }}
// // // // // // //                   onClick={() => changePage(item.page)} 
// // // // // // //                   className={`flex items-center justify-center p-3 rounded-lg transition-all ${item.color} hover:shadow-md`}
// // // // // // //                 >
// // // // // // //                   <div className="flex flex-col items-center">
// // // // // // //                     <div className="mb-1">{item.icon}</div>
// // // // // // //                     <span className="text-xs font-medium">{item.label}</span>
// // // // // // //                   </div>
// // // // // // //                 </motion.button>
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           </div>
          
// // // // // // //           {/* Low Stock Alert */}
// // // // // // //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
// // // // // // //             <div className="flex justify-between items-center mb-4">
// // // // // // //               <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
// // // // // // //                 <AlertTriangle size={18} className="mr-2 text-red-500" />
// // // // // // //                 Low Stock Alert
// // // // // // //               </h3>
// // // // // // //               <button 
// // // // // // //                 onClick={() => changePage('restockAlerts')} 
// // // // // // //                 className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
// // // // // // //               >
// // // // // // //                 All Alerts
// // // // // // //               </button>
// // // // // // //             </div>
            
// // // // // // //             <div className="space-y-3">
// // // // // // //               {lowStockItems.map((item, index) => (
// // // // // // //                 <motion.div 
// // // // // // //                   key={index} 
// // // // // // //                   initial={{ opacity: 0, y: 10 }}
// // // // // // //                   animate={{ opacity: 1, y: 0 }}
// // // // // // //                   transition={{ duration: 0.2, delay: index * 0.1 }}
// // // // // // //                   className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-750 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
// // // // // // //                 >
// // // // // // //                   <div className="flex items-start space-x-3">
// // // // // // //                     <div className={`mt-0.5 p-1.5 rounded-md ${
// // // // // // //                       item.reorderStatus === 'urgent' ? 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400' : 
// // // // // // //                       item.reorderStatus === 'pending' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-400' : 
// // // // // // //                       'bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400'
// // // // // // //                     }`}>
// // // // // // //                       <Layers size={14} />
// // // // // // //                     </div>
// // // // // // //                     <div>
// // // // // // //                       <div className="font-medium text-sm text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.name}</div>
// // // // // // //                       <div className="text-xs text-gray-500 dark:text-gray-400">SKU: {item.id}</div>
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                   <div className={`text-sm font-medium ${
// // // // // // //                     (item.current / item.min) < 0.5 ? 'text-red-600 dark:text-red-400' : 
// // // // // // //                     (item.current / item.min) < 0.75 ? 'text-yellow-600 dark:text-yellow-400' : 
// // // // // // //                     'text-gray-700 dark:text-gray-300'
// // // // // // //                   }`}>
// // // // // // //                     {item.current}/{item.min}
// // // // // // //                   </div>
// // // // // // //                 </motion.div>
// // // // // // //               ))}
// // // // // // //             </div>
            
// // // // // // //             <div className="mt-4">
// // // // // // //               <motion.button 
// // // // // // //                 whileHover={{ scale: 1.02 }}
// // // // // // //                 whileTap={{ scale: 0.98 }}
// // // // // // //                 onClick={() => changePage('suppliers')}
// // // // // // //                 className="flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all text-sm w-full shadow-sm hover:shadow"
// // // // // // //               >
// // // // // // //                 <Truck size={16} className="mr-2" />
// // // // // // //                 Place Restock Order
// // // // // // //               </motion.button>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* Recent activity timeline */}
// // // // // // //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
// // // // // // //             <h3 className="font-medium text-gray-800 dark:text-white transition-colors mb-4 flex items-center">
// // // // // // //               <Calendar size={18} className="mr-2 text-purple-500" />
// // // // // // //               Recent Activity
// // // // // // //             </h3>
            
// // // // // // //             <div className="relative">
// // // // // // //               {/* Timeline line */}
// // // // // // //               <div className="absolute top-0 bottom-0 left-3 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              
// // // // // // //               <div className="space-y-4">
// // // // // // //                 {[
// // // // // // //                   { time: '9:32 AM', title: 'New order received', description: 'Order #4592 from Michael T.', color: 'bg-green-500' },
// // // // // // //                   { time: '11:15 AM', title: 'Low stock notification', description: 'Vitamin B Complex needs restock', color: 'bg-yellow-500' },
// // // // // // //                   { time: '1:45 PM', title: 'Employee login', description: 'Sarah logged in for afternoon shift', color: 'bg-blue-500' },
// // // // // // //                   { time: '2:30 PM', title: 'System report', description: 'Daily inventory check completed', color: 'bg-purple-500' },
// // // // // // //                 ].map((activity, index) => (
// // // // // // //                   <motion.div 
// // // // // // //                     key={index}
// // // // // // //                     initial={{ opacity: 0, x: -10 }}
// // // // // // //                     animate={{ opacity: 1, x: 0 }}
// // // // // // //                     transition={{ duration: 0.3, delay: index * 0.1 }}
// // // // // // //                     className="relative pl-8"
// // // // // // //                   >
// // // // // // //                     <div className={`absolute left-0 top-1 h-6 w-6 rounded-full flex items-center justify-center ${activity.color} shadow-md`}>
// // // // // // //                       <span className="h-3 w-3 bg-white rounded-full"></span>
// // // // // // //                     </div>
// // // // // // //                     <div className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</div>
// // // // // // //                     <div className="font-medium text-sm text-gray-800 dark:text-white">{activity.title}</div>
// // // // // // //                     <div className="text-xs text-gray-500 dark:text-gray-400">{activity.description}</div>
// // // // // // //                   </motion.div>
// // // // // // //                 ))}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </motion.div>
// // // // // // //       </div>
// // // // // // //     </motion.div>
// // // // // // //   );

// // // // // // //   // Render the selected page content
// // // // // // //   const renderContent = () => {
// // // // // // //     switch(currentPage) {
// // // // // // //       case 'dashboard':
// // // // // // //         return renderDashboard();
// // // // // // //       case 'products':
// // // // // // //         return <ProductDashboard />;
// // // // // // //       case 'employees':
// // // // // // //         return <EmployeeManagement />;
// // // // // // //       case 'roles':
// // // // // // //         return <RoleDistribution />;
// // // // // // //       case 'dailySales':
// // // // // // //         return <DailySales />;
// // // // // // //       case 'stockTracking':
// // // // // // //         return <StockTracking />;
// // // // // // //       case 'employeeSearch':
// // // // // // //         return <EmployeeSearch />;
// // // // // // //       case 'billing':
// // // // // // //         return <Billing />;
// // // // // // //       case 'customerSignup':
// // // // // // //         return <CustomerSignupForm />;
// // // // // // //       case 'customers':
// // // // // // //         return <ViewCustomers />;
// // // // // // //       case 'salesChart':
// // // // // // //         return <SalesChart />;
// // // // // // //       case 'productSales':
// // // // // // //         return <ProductSales />;
// // // // // // //       case 'inventory':
// // // // // // //         return <InventoryDashboard />;
// // // // // // //       case 'users':
// // // // // // //         return <UserManagementPage />;
// // // // // // //       case 'restockAlerts':
// // // // // // //         return <ProductDashboard2 />;
// // // // // // //       case 'suppliers':
// // // // // // //         return <SupplierManagement />;
// // // // // // //       case 'batch':
// // // // // // //         return <BatchExpiryTracker />;
// // // // // // //       case 'damage':
// // // // // // //         return <DamageItemsManagement />;
// // // // // // //       case 'emp':
// // // // // // //         return <EmployeeSales />;
// // // // // // //       case 'attendance':
// // // // // // //         return <EmployeeAttendanceForm />;
// // // // // // //       case 'face':
// // // // // // //         return <FacialRecognitionAttendance />;
// // // // // // //       case 'add_face':
// // // // // // //         return <AddEmployeeFace />;
// // // // // // //       case 'salaries':
// // // // // // //         return <EmployeesSalaryManagement />;
// // // // // // //       case 'analytics':
// // // // // // //         return <SalesAnalyticsDashboard />;
// // // // // // //       case 'khata':
// // // // // // //         return <Khatabook />;
// // // // // // //       case 'khata2':
// // // // // // //         return <KhatabookPage />;
// // // // // // //       default:
// // // // // // //         return renderDashboard();
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-gray-50 dark:bg-gray-900 flex`}>
// // // // // // //       {/* Mobile overlay for sidebar */}
// // // // // // //       {sidebarOpen && (
// // // // // // //         <div
// // // // // // //           className="fixed inset-0 bg-black/50 md:hidden z-20"
// // // // // // //           onClick={() => setSidebarOpen(false)}
// // // // // // //         />
// // // // // // //       )}

// // // // // // //       {/* Sidebar */}
// // // // // // //       <aside
// // // // // // //         className={`fixed md:static inset-y-0 left-0 w-64 bg-gradient-to-br from-blue-800 to-blue-600
// // // // // // //           transform transition-transform duration-300 ease-in-out z-30
// // // // // // //           ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
// // // // // // //       >
// // // // // // //         <div className="h-16 flex items-center justify-between px-4 border-b border-white/20">
// // // // // // //           <h1 className="text-xl font-bold text-white truncate">
// // // // // // //             {storeName || "Store Manager"}
// // // // // // //           </h1>
// // // // // // //           <button
// // // // // // //             onClick={() => setSidebarOpen(false)}
// // // // // // //             className="md:hidden text-white hover:text-gray-200"
// // // // // // //           >
// // // // // // //             <X size={24} />
// // // // // // //           </button>
// // // // // // //         </div>

// // // // // // //         <div className="p-4">
// // // // // // //           <div className="flex items-center space-x-3 mb-6">
// // // // // // //             <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-blue-800 font-bold">
// // // // // // //               A
// // // // // // //             </div>
// // // // // // //             <div>
// // // // // // //               <div className="font-medium text-white">Admin User</div>
// // // // // // //               <div className="text-sm text-blue-200">Super Admin</div>
// // // // // // //             </div>
// // // // // // //           </div>
          
// // // // // // //           <nav>
// // // // // // //             <ul className="space-y-1">
// // // // // // //               <li>
// // // // // // //                 <button 
// // // // // // //                   onClick={() => changePage('dashboard')}
// // // // // // //                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'dashboard' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'} text-lg`} // Increased font size
// // // // // // //                 >
// // // // // // //                   <BarChart2 size={18} className="mr-3" />
// // // // // // //                   Dashboard
// // // // // // //                 </button>
// // // // // // //               </li>
              
// // // // // // //               {/* Products dropdown */}
// // // // // // //               <li>
// // // // // // //                 <div>
// // // // // // //                   <button 
// // // // // // //                     onClick={() => toggleMenu('products')}
// // // // // // //                     className={`flex items-center justify-between w-full p-2 rounded-md 
// // // // // // //                       ${currentPage === 'products' || currentPage === 'inventory' || currentPage === 'restockAlerts' ? 
// // // // // // //                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'} text-lg`} // Increased font size
// // // // // // //                   >
// // // // // // //                     <div className="flex items-center">
// // // // // // //                       <Package size={18} className="mr-3" />
// // // // // // //                       Products
// // // // // // //                     </div>
// // // // // // //                     {expandedMenus.products ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
// // // // // // //                   </button>
                  
// // // // // // //                   {expandedMenus.products && (
// // // // // // //                     <ul className="pl-9 pt-1 pb-1">
// // // // // // //                       <li>
// // // // // // //                         <button 
// // // // // // //                           onClick={() => changePage('products')} 
// // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // //                         >
// // // // // // //                           All Products
// // // // // // //                         </button>
// // // // // // //                       </li>
// // // // // // //                       <li>
// // // // // // //                         <button 
// // // // // // //                           onClick={() => changePage('restockAlerts')} 
// // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // //                         >
// // // // // // //                           Restock Alerts
// // // // // // //                         </button>
// // // // // // //                       </li>
// // // // // // //                       <li>
// // // // // // //                         <button 
// // // // // // //                           onClick={() => changePage('batch')} 
// // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // //                         >
// // // // // // //                           Batch Expiry Tracker
// // // // // // //                         </button>
// // // // // // //                       </li>
// // // // // // //                       <li>
// // // // // // //                         <button 
// // // // // // //                           onClick={() => changePage('damage')} 
// // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // //                         >
// // // // // // //                           Damage Items
// // // // // // //                         </button>
// // // // // // //                       </li>
// // // // // // //                     </ul>
// // // // // // //                   )}
// // // // // // //                 </div>
// // // // // // //               </li>
              
// // // // // // //               {/* Employees dropdown */}
// // // // // // //               <li>
// // // // // // //                 <div>
// // // // // // //                   <button 
// // // // // // //                     onClick={() => toggleMenu('employees')}
// // // // // // //                     className={`flex items-center justify-between w-full p-2 rounded-md 
// // // // // // //                       ${currentPage === 'employees' || currentPage === 'roles' || currentPage === 'employeeSearch' ? 
// // // // // // //                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'} text-lg`} // Increased font size
// // // // // // //                   >
// // // // // // //                     <div className="flex items-center">
// // // // // // //                       <Users size={18} className="mr-3" />
// // // // // // //                       Employees
// // // // // // //                     </div>
// // // // // // //                     {expandedMenus.employees ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
// // // // // // //                   </button>
                  
// // // // // // //                   {expandedMenus.employees && (
// // // // // // //                     <ul className="pl-9 pt-1 pb-1">
// // // // // // //                       <li>
// // // // // // //                         <button 
// // // // // // //                           onClick={() => changePage('employees')} 
// // // // // // //                           className="p-1 hover                           text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // //                         >
// // // // // // //                           Manage Employees
// // // // // // //                         </button>
// // // // // // //                       </li>
// // // // // // //                       <li>
// // // // // // //                         <button 
// // // // // // //                           onClick={() => changePage('roles')} 
// // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // //                         >
// // // // // // //                           Roles & Permissions
// // // // // // //                         </button>
// // // // // // //                       </li>
// // // // // // //                       <li>
// // // // // // //                         <button 
// // // // // // //                           onClick={() => changePage('attendance')} 
// // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // //                         >
// // // // // // //                           Attendance
// // // // // // //                         </button>
// // // // // // //                       </li>
// // // // // // //                       <li>
// // // // // // //                         <button 
// // // // // // //                           onClick={() => changePage('add_face')} 
// // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // //                         >
// // // // // // //                           Add Face
// // // // // // //                         </button>
// // // // // // //                       </li>
// // // // // // //                       <li>
// // // // // // //                         <button 
// // // // // // //                           onClick={() => changePage('face')} 
// // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // //                         >
// // // // // // //                           Face
// // // // // // //                         </button>
// // // // // // //                       </li>
// // // // // // //                       <li>
// // // // // // //                         <button 
// // // // // // //                           onClick={() => changePage('employeeSearch')} 
// // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // //                         >
// // // // // // //                           Employee Search
// // // // // // //                         </button>
// // // // // // //                       </li>
// // // // // // //                       <li>
// // // // // // //                         <button 
// // // // // // //                           onClick={() => changePage('emp')} 
// // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // //                         >
// // // // // // //                           Employee Sales
// // // // // // //                         </button>
// // // // // // //                       </li>
// // // // // // //                       <li>
// // // // // // //                         <button 
// // // // // // //                           onClick={() => changePage('salaries')} 
// // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // //                         >
// // // // // // //                           Salaries
// // // // // // //                         </button>
// // // // // // //                       </li>
// // // // // // //                     </ul>
// // // // // // //                   )}
// // // // // // //                 </div>
// // // // // // //               </li>
              
// // // // // // //               {/* Sales dropdown */}
// // // // // // //               <li>
// // // // // // //                 <div>
// // // // // // //                   <button 
// // // // // // //                     onClick={() => toggleMenu('sales')}
// // // // // // //                     className={`flex items-center justify-between w-full p-2 rounded-md 
// // // // // // //                       ${currentPage === 'dailySales' || currentPage === 'salesChart' || currentPage === 'productSales' || currentPage === 'billing' ? 
// // // // // // //                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'} text-lg`} // Increased font size
// // // // // // //                   >
// // // // // // //                     <div className="flex items-center">
// // // // // // //                       <DollarSign size={18} className="mr-3" />
// // // // // // //                       Sales
// // // // // // //                     </div>
// // // // // // //                     {expandedMenus.sales ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
// // // // // // //                   </button>
                  
// // // // // // //                   {expandedMenus.sales && (
// // // // // // //                     <ul className="pl-9 pt-1 pb-1">
// // // // // // //                       <li>
// // // // // // //                         <button 
// // // // // // //                           onClick={() => changePage('dailySales')} 
// // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // //                         >
// // // // // // //                           Daily Sales
// // // // // // //                         </button>
// // // // // // //                       </li>
// // // // // // //                       <li>
// // // // // // //                         <button 
// // // // // // //                           onClick={() => changePage('salesChart')} 
// // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // //                         >
// // // // // // //                           Sales Reports
// // // // // // //                         </button>
// // // // // // //                       </li>
// // // // // // //                       <li>
// // // // // // //                         <button 
// // // // // // //                           onClick={() => changePage('productSales')} 
// // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // //                         >
// // // // // // //                           Product Sales
// // // // // // //                         </button>
// // // // // // //                       </li>
// // // // // // //                       <li>
// // // // // // //                         <button 
// // // // // // //                           onClick={() => changePage('analytics')} 
// // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // //                         >
// // // // // // //                           Analytics
// // // // // // //                         </button>
// // // // // // //                       </li>
// // // // // // //                       <li>
// // // // // // //                         <button 
// // // // // // //                           onClick={() => changePage('billing')} 
// // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // //                         >
// // // // // // //                           Billing
// // // // // // //                         </button>
// // // // // // //                       </li>
// // // // // // //                     </ul>
// // // // // // //                   )}
// // // // // // //                 </div>
// // // // // // //               </li>
              
// // // // // // //               {/* Customers dropdown */}
// // // // // // //               <li>
// // // // // // //                 <div>
// // // // // // //                   <button 
// // // // // // //                     onClick={() => toggleMenu('customers')}
// // // // // // //                     className={`flex items-center justify-between w-full p-2 rounded-md 
// // // // // // //                       ${currentPage === 'customers' || currentPage === 'customerSignup' ? 
// // // // // // //                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'} text-lg`} // Increased font size
// // // // // // //                   >
// // // // // // //                     <div className="flex items-center">
// // // // // // //                       <UserCheck size={18} className="mr-3" />
// // // // // // //                       Customers
// // // // // // //                     </div>
// // // // // // //                     {expandedMenus.customers ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
// // // // // // //                   </button>
                  
// // // // // // //                   {expandedMenus.customers && (
// // // // // // //                     <ul className="pl-9 pt-1 pb-1">
// // // // // // //                       <li>
// // // // // // //                         <button 
// // // // // // //                           onClick={() => changePage('customers')} 
// // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // //                         >
// // // // // // //                           View Customers
// // // // // // //                         </button>
// // // // // // //                       </li>
// // // // // // //                       <li>
// // // // // // //                         <button 
// // // // // // //                           onClick={() => changePage('customerSignup')} 
// // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // //                         >
// // // // // // //                           Add Customer
// // // // // // //                         </button>
// // // // // // //                       </li>
// // // // // // //                       <li>
// // // // // // //                         <button 
// // // // // // //                           onClick={() => changePage('khata')} 
// // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // //                         >
// // // // // // //                           Khatabook
// // // // // // //                         </button>
// // // // // // //                       </li>
// // // // // // //                       <li>
// // // // // // //                         <button 
// // // // // // //                           onClick={() => changePage('khata2')} 
// // // // // // //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// // // // // // //                         >
// // // // // // //                           Khatabook2
// // // // // // //                         </button>
// // // // // // //                       </li>
// // // // // // //                     </ul>
// // // // // // //                   )}
// // // // // // //                 </div>
// // // // // // //               </li>
              
// // // // // // //               {/* Suppliers */}
// // // // // // //               <li>
// // // // // // //                 <button 
// // // // // // //                   onClick={() => changePage('suppliers')}
// // // // // // //                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'suppliers' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'} text-lg`} // Increased font size
// // // // // // //                 >
// // // // // // //                   <Truck size={18} className="mr-3" />
// // // // // // //                   Suppliers
// // // // // // //                 </button>
// // // // // // //               </li>
              
// // // // // // //               {/* Inventory/Stock */}
// // // // // // //               <li>
// // // // // // //                 <button 
// // // // // // //                   onClick={() => changePage('stockTracking')}
// // // // // // //                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'stockTracking' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'} text-lg`} // Increased font size
// // // // // // //                 >
// // // // // // //                   <Layers size={18} className="mr-3" />
// // // // // // //                   Stock Tracking
// // // // // // //                 </button>
// // // // // // //               </li>
              
// // // // // // //               {/* User Management */}
// // // // // // //               <li>
// // // // // // //                 <button 
// // // // // // //                   onClick={() => changePage('users')}
// // // // // // //                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'users' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'} text-lg`} // Increased font size
// // // // // // //                 >
// // // // // // //                   <User size={18} className="mr-3" />
// // // // // // //                   User Management
// // // // // // //                 </button>
// // // // // // //               </li>
              
// // // // // // //               {/* Settings */}
// // // // // // //               <li>
// // // // // // //                 <button 
// // // // // // //                   className="flex items-center w-full p-2 rounded-md text-white hover:bg-white/10 text-lg" // Increased font size
// // // // // // //                 >
// // // // // // //                   <Settings size={18} className="mr-3" />
// // // // // // //                   Settings
// // // // // // //                 </button>
// // // // // // //               </li>
// // // // // // //             </ul>
// // // // // // //           </nav>
// // // // // // //         </div>
// // // // // // //       </aside>

// // // // // // //       {/* Mobile menu button */}
// // // // // // //       <button
// // // // // // //         onClick={() => setSidebarOpen(true)}
// // // // // // //         className={`md:hidden fixed top-4 left-4 z-10 p-2 rounded-lg bg-blue-800 text-white
// // // // // // //           shadow-lg hover:bg-blue-700 transition-colors duration-200
// // // // // // //           ${sidebarOpen ? 'hidden' : 'block'}`}
// // // // // // //       >
// // // // // // //         <Menu size={24} />
// // // // // // //       </button>

// // // // // // //       {/* Main content */}
// // // // // // //       <main className="flex-1 overflow-auto">
// // // // // // //         {/* Top header */}
// // // // // // //         <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-100 dark:border-gray-700">
// // // // // // //           <div className="px-4 py-3 flex justify-between items-center">
// // // // // // //             <div className="md:hidden flex items-center">
// // // // // // //               <h1 className="text-xl font-bold text-blue-800 dark:text-white">
// // // // // // //                 {currentPage === 'dashboard' ? 'Dashboard' : 
// // // // // // //                  currentPage === 'products' ? 'Products' :
// // // // // // //                  currentPage === 'employees' ? 'Employees' :
// // // // // // //                  currentPage === 'dailySales' ? 'Sales' :
// // // // // // //                  currentPage === 'stockTracking' ? 'Stock' :
// // // // // // //                  currentPage === 'suppliers' ? 'Suppliers' :
// // // // // // //                  'Admin Dashboard'}
// // // // // // //               </h1>
// // // // // // //             </div>
            
// // // // // // //             <div className="hidden md:flex items-center">
// // // // // // //               <div className="relative mr-4">
// // // // // // //                 <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// // // // // // //                 <input
// // // // // // //                   type="text"
// // // // // // //                   placeholder="Search..."
// // // // // // //                   className="pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //             </div>
            
// // // // // // //             <div className="flex items-center space-x-4">
// // // // // // //               <button 
// // // // // // //                 onClick={() => setNotificationsOpen(!notificationsOpen)} 
// // // // // // //                 className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative"
// // // // // // //               >
// // // // // // //                 <Bell size={20} />
// // // // // // //                 <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
// // // // // // //               </button>
              
// // // // // // //               <button 
// // // // // // //                 onClick={() => setUserMenuOpen(!userMenuOpen)} 
// // // // // // //                 className="flex items-center text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
// // // // // // //               >
// // // // // // //                 <LogOut size={16} className="mr-1" />
// // // // // // //                 <span className="hidden md:inline">Logout</span>
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
        
// // // // // // //         {/* Page content */}
// // // // // // //         <div className="p-4">
// // // // // // //           {renderContent()}
// // // // // // //         </div>
// // // // // // //       </main>

// // // // // // //       {/* Notifications dropdown */}
// // // // // // //       <AnimatePresence>
// // // // // // //         {notificationsOpen && (
// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0, y: -10 }}
// // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // //             exit={{ opacity: 0, y: -10 }}
// // // // // // //             transition={{ duration: 0.2 }}
// // // // // // //             ref={notificationRef}
// // // // // // //             className="fixed right-4 top-16 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-40 border border-gray-100 dark:border-gray-700"
// // // // // // //           >
// // // // // // //             <div className="p-4">
// // // // // // //               <h3 className="font-medium text-gray-800 dark:text-white mb-4">Notifications</h3>
// // // // // // //               <div className="space-y-3">
// // // // // // //                 {notifications.map((notification) => (
// // // // // // //                   <div key={notification.id} className="flex items-start space-x-3">
// // // // // // //                     <div className={`p-2 rounded-full ${
// // // // // // //                       notification.type === 'alert' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' :
// // // // // // //                       notification.type === 'order' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' :
// // // // // // //                       notification.type === 'reminder' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400' :
// // // // // // //                       'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
// // // // // // //                     }`}>
// // // // // // //                       <Bell size={16} />
// // // // // // //                     </div>
// // // // // // //                     <div>
// // // // // // //                       <div className="text-sm font-medium text-gray-800 dark:text-white">{notification.title}</div>
// // // // // // //                       <div className="text-xs text-gray-500 dark:text-gray-400">{notification.message}</div>
// // // // // // //                       <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{notification.time}</div>
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 ))}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </motion.div>
// // // // // // //         )}
// // // // // // //       </AnimatePresence>

// // // // // // //       {/* User menu dropdown */}
// // // // // // //       <AnimatePresence>
// // // // // // //         {userMenuOpen && (
// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0, y: -10 }}
// // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // //             exit={{ opacity: 0, y: -10 }}
// // // // // // //             transition={{ duration: 0.2 }}
// // // // // // //             ref={userMenuRef}
// // // // // // //             className="fixed right-4 top-16 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-40 border border-gray-100 dark:border-gray-700"
// // // // // // //           >
// // // // // // //             <div className="p-2">
// // // // // // //               <button 
// // // // // // //                 onClick={toggleDarkMode}
// // // // // // //                 className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left"
// // // // // // //               >
// // // // // // //                 {darkMode ? 'Light Mode' : 'Dark Mode'}
// // // // // // //               </button>
// // // // // // //               <button 
// // // // // // //                 onClick={() => navigate('/settings')}
// // // // // // //                 className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left"
// // // // // // //               >
// // // // // // //                 Settings
// // // // // // //               </button>
// // // // // // //               <button 
// // // // // // //                 onClick={() => navigate('/logout')}
// // // // // // //                 className="w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg text-left"
// // // // // // //               >
// // // // // // //                 Logout
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           </motion.div>
// // // // // // //         )}
// // // // // // //       </AnimatePresence>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default AdminDashboard;


// // // // // // import React, { useState, useContext, useEffect, useRef } from "react";
// // // // // // import { StoreContext } from "./StoreContext";
// // // // // // import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
// // // // // // import { 
// // // // // //   Menu, 
// // // // // //   Package, 
// // // // // //   Users, 
// // // // // //   BarChart2, 
// // // // // //   Settings, 
// // // // // //   CreditCard, 
// // // // // //   Info, 
// // // // // //   X, 
// // // // // //   DollarSign,
// // // // // //   UserCheck,
// // // // // //   Search,
// // // // // //   Bell,
// // // // // //   LogOut,
// // // // // //   Truck,
// // // // // //   Layers,
// // // // // //   ShoppingBag,
// // // // // //   ChevronRight,
// // // // // //   ChevronDown,
// // // // // //   AlertTriangle,
// // // // // //   User,
// // // // // //   Calendar,
// // // // // //   Inbox,
// // // // // //   Home,
// // // // // //   Shield,
// // // // // //   Zap,
// // // // // //   TrendingUp,
// // // // // //   HelpCircle,
// // // // // //   Grid
// // // // // // } from 'lucide-react';
// // // // // // import { motion, AnimatePresence } from 'framer-motion';

// // // // // // // Import all the components you need
// // // // // // import ProductDashboard from "./ProductManagement";
// // // // // // import EmployeeManagement from "./EmployeeManagement";
// // // // // // import RoleDistribution from "./RoleDistribution";
// // // // // // import DailySales from "./DailySales";
// // // // // // import StockTracking from "./StockTracking";
// // // // // // import EmployeeSearch from "./EmployeeSearch";
// // // // // // import Billing from "./Billing";
// // // // // // import CustomerSignupForm from "./CustomerSignUpForm";
// // // // // // import ViewCustomers from "./ViewCustomers";
// // // // // // import SalesChart from "./SalesChart";
// // // // // // import ProductSales from "./ProductSales";
// // // // // // import InventoryDashboard from "./InventoryDashboard";
// // // // // // import UserManagementPage from "./UserManagement";
// // // // // // import ProductDashboard2 from "./RestockAlerts";
// // // // // // import SupplierManagement from "./Supc";
// // // // // // import BatchExpiryTracker from "./BatchExpiryTracker";
// // // // // // import DamageItemsManagement from "./DamageItemsManagement";
// // // // // // import EmployeeSales from "./EmployeeSales";
// // // // // // import EmployeeAttendanceForm from "./EmployeeAttendance";
// // // // // // import FacialRecognitionAttendance from "./FacialRecognitionAttendance";
// // // // // // import AddEmployeeFace from "./AddEmployeeFace";
// // // // // // import EmployeesSalaryManagement from  './EmployeesSalaryManagement';
// // // // // // import SalesAnalyticsDashboard from "./SalesAnalyticsDashboard";
// // // // // // import KhatabookPage from "./Khatabook2";
// // // // // // import UserProfile from "./UserProfile";
// // // // // // import SearchProductsByCategory from "./ProductCategorization";
// // // // // // import LoginPage from './LoginPage';
// // // // // // const AdminDashboard = () => {
// // // // // //   const { storeName } = useContext(StoreContext);
// // // // // //   const [sidebarOpen, setSidebarOpen] = useState(true);
// // // // // //   const location = useLocation();
// // // // // //   const navigate = useNavigate();
// // // // // //   const [currentPage, setCurrentPage] = useState('dashboard');
// // // // // //   const [expandedMenus, setExpandedMenus] = useState({
// // // // // //     products: false,
// // // // // //     employees: false,
// // // // // //     sales: false,
// // // // // //     customers: false,
// // // // // //     suppliers: false
// // // // // //   });
// // // // // //   const [searchFocused, setSearchFocused] = useState(false);
// // // // // //   const [notificationsOpen, setNotificationsOpen] = useState(false);
// // // // // //   const [userMenuOpen, setUserMenuOpen] = useState(false);
// // // // // //   const [darkMode, setDarkMode] = useState(false);
// // // // // //   const [loading, setLoading] = useState(true);
// // // // // //   const [animateCharts, setAnimateCharts] = useState(false);
  
// // // // // //   const notificationRef = useRef(null);
// // // // // //   const userMenuRef = useRef(null);

// // // // // //   // Stats for dashboard with more specific data
// // // // // //   const stats = [
// // // // // //     { title: 'Total Sales Today', value: '$5,890', change: '+15%', up: true, icon: <DollarSign size={20} className="text-green-500" /> },
// // // // // //     { title: 'Low Stock Items', value: '24', change: '+8', up: false, icon: <AlertTriangle size={20} className="text-amber-500" /> },
// // // // // //     { title: 'Today\'s Orders', value: '42', change: '+12%', up: true, icon: <ShoppingBag size={20} className="text-blue-500" /> },
// // // // // //     { title: 'Active Employees', value: '18', change: '0', up: true, icon: <Users size={20} className="text-purple-500" /> },
// // // // // //   ];
  
// // // // // //   // Recent transactions for dashboard
// // // // // //   const recentTransactions = [
// // // // // //     { id: '#TRX-4589', customer: 'John Smith', amount: '$129.50', date: '20 min ago', status: 'completed', paymentMethod: 'Credit Card' },
// // // // // //     { id: '#TRX-4588', customer: 'Lisa Wong', amount: '$245.75', date: '45 min ago', status: 'completed', paymentMethod: 'PayPal' },
// // // // // //     { id: '#TRX-4587', customer: 'Mike Johnson', amount: '$67.25', date: '1 hr ago', status: 'pending', paymentMethod: 'Credit Card' },
// // // // // //     { id: '#TRX-4586', customer: 'Sara Miller', amount: '$352.00', date: '2 hrs ago', status: 'completed', paymentMethod: 'Bank Transfer' },
// // // // // //     { id: '#TRX-4585', customer: 'David Chen', amount: '$84.30', date: '3 hrs ago', status: 'failed', paymentMethod: 'Credit Card' },
// // // // // //   ];
  
// // // // // //   // Low stock items
// // // // // //   const lowStockItems = [
// // // // // //     { id: 'P-1245', name: 'Premium Coffee Beans', current: 12, min: 20, reorderStatus: 'urgent' },
// // // // // //     { id: 'P-2340', name: 'Organic Green Tea', current: 8, min: 15, reorderStatus: 'pending' },
// // // // // //     { id: 'P-1023', name: 'Vitamin C Tablets', current: 5, min: 10, reorderStatus: 'ordered' },
// // // // // //     { id: 'P-3456', name: 'Almond Milk', current: 9, min: 12, reorderStatus: 'urgent' },
// // // // // //   ];

// // // // // //   // Mock data for sales chart
// // // // // //   const salesData = [
// // // // // //     { month: 'Jan', sales: 4500, target: 4000 },
// // // // // //     { month: 'Feb', sales: 5200, target: 4200 },
// // // // // //     { month: 'Mar', sales: 4800, target: 4400 },
// // // // // //     { month: 'Apr', sales: 5500, target: 4600 },
// // // // // //     { month: 'May', sales: 6200, target: 4800 },
// // // // // //     { month: 'Jun', sales: 5900, target: 5000 },
// // // // // //     { month: 'Jul', sales: 6500, target: 5200 },
// // // // // //   ];

// // // // // //   // Notifications
// // // // // //   const notifications = [
// // // // // //     { id: 1, title: 'Low stock alert', message: '4 products need reordering', time: '10 min ago', read: false, type: 'alert' },
// // // // // //     { id: 2, title: 'New order received', message: 'Order #12458 from John D.', time: '25 min ago', read: false, type: 'order' },
// // // // // //     { id: 3, title: 'Staff meeting', message: 'Reminder: Meeting at 3 PM', time: '2 hours ago', read: true, type: 'reminder' },
// // // // // //     { id: 4, title: 'System update', message: 'Maintenance scheduled for tonight', time: '1 day ago', read: true, type: 'system' },
// // // // // //   ];

// // // // // //   // Page loading simulation
// // // // // //   useEffect(() => {
// // // // // //     const timer = setTimeout(() => {
// // // // // //       setLoading(false);
// // // // // //       setTimeout(() => setAnimateCharts(true), 500);
// // // // // //     }, 800);
// // // // // //     return () => clearTimeout(timer);
// // // // // //   }, [currentPage]);

// // // // // //   // Toggle sidebar on mobile
// // // // // //   useEffect(() => {
// // // // // //     if (window.innerWidth < 768) {
// // // // // //       setSidebarOpen(false);
// // // // // //     }
// // // // // //   }, [location]);

// // // // // //   // Resize handling
// // // // // //   useEffect(() => {
// // // // // //     const handleResize = () => {
// // // // // //       if (window.innerWidth >= 768) {
// // // // // //         setSidebarOpen(true);
// // // // // //       }
// // // // // //     };

// // // // // //     window.addEventListener('resize', handleResize);
// // // // // //     handleResize();
// // // // // //     return () => window.removeEventListener('resize', handleResize);
// // // // // //   }, []);

// // // // // //   // Handle clicks outside dropdowns
// // // // // //   useEffect(() => {
// // // // // //     const handleClickOutside = (event) => {
// // // // // //       if (notificationRef.current && !notificationRef.current.contains(event.target)) {
// // // // // //         setNotificationsOpen(false);
// // // // // //       }
// // // // // //       if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
// // // // // //         setUserMenuOpen(false);
// // // // // //       }
// // // // // //     };

// // // // // //     document.addEventListener('mousedown', handleClickOutside);
// // // // // //     return () => document.removeEventListener('mousedown', handleClickOutside);
// // // // // //   }, []);

// // // // // //   // Toggle submenu expandable sections
// // // // // //   const toggleMenu = (menu) => {
// // // // // //     setExpandedMenus(prev => ({
// // // // // //       ...prev,
// // // // // //       [menu]: !prev[menu]
// // // // // //     }));
// // // // // //   };

// // // // // //   // Change current page based on menu click
// // // // // //   const changePage = (page) => {
// // // // // //     setCurrentPage(page);
// // // // // //     setLoading(true); // Show loading state when changing pages
// // // // // //     if (window.innerWidth < 768) {
// // // // // //       setSidebarOpen(false);
// // // // // //     }
// // // // // //   };

// // // // // //   // Toggle dark mode
// // // // // //   const toggleDarkMode = () => {
// // // // // //     setDarkMode(!darkMode);
// // // // // //     document.documentElement.classList.toggle('dark');
// // // // // //   };

// // // // // //   // Render main dashboard content
// // // // // //   const renderDashboard = () => (
// // // // // //     <motion.div 
// // // // // //       initial={{ opacity: 0 }}
// // // // // //       animate={{ opacity: 1 }}
// // // // // //       transition={{ duration: 0.3 }}
// // // // // //       className="space-y-6"
// // // // // //     >
// // // // // //       {/* Welcome section */}
// // // // // //       <div className="mb-6">
// // // // // //         <h2 className="text-xl font-semibold text-gray-800 dark:text-white transition-colors">Welcome to {storeName || "Your Store"}</h2>
// // // // // //         <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Here's a quick summary of your store performance today</p>
// // // // // //       </div>
      
// // // // // //       {/* Stats cards */}
// // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
// // // // // //         {stats.map((stat, index) => (
// // // // // //           <motion.div 
// // // // // //             key={index} 
// // // // // //             initial={{ y: 20, opacity: 0 }}
// // // // // //             animate={{ y: 0, opacity: 1 }}
// // // // // //             transition={{ duration: 0.3, delay: index * 0.1 }}
// // // // // //             whileHover={{ y: -4, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
// // // // // //             className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700"
// // // // // //           >
// // // // // //             <div className="flex justify-between items-start mb-3">
// // // // // //               <div className="text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors">{stat.title}</div>
// // // // // //               <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700 transition-colors">
// // // // // //                 {stat.icon}
// // // // // //               </div>
// // // // // //             </div>
// // // // // //             <div className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">{stat.value}</div>
// // // // // //             <div className={`text-sm mt-2 flex items-center ${stat.up ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'} transition-colors`}>
// // // // // //               {stat.change}
// // // // // //               {stat.up ? 
// // // // // //                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
// // // // // //                 </svg> :
// // // // // //                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// // // // // //                 </svg>
// // // // // //               }
// // // // // //             </div>
// // // // // //           </motion.div>
// // // // // //         ))}
// // // // // //       </div>
      
// // // // // //       {/* Main dashboard layout */}
// // // // // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // // // // //         {/* Transactions */}
// // // // // //         <motion.div
// // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // //           transition={{ duration: 0.3, delay: 0.2 }}
// // // // // //           className="lg:col-span-2"
// // // // // //         >
// // // // // //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 mb-6 border border-gray-100 dark:border-gray-700">
// // // // // //             <div className="flex justify-between items-center mb-6">
// // // // // //               <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
// // // // // //                 <ShoppingBag size={18} className="mr-2 text-blue-600 dark:text-blue-400" />
// // // // // //                 Recent Transactions
// // // // // //               </h3>
// // // // // //               <button 
// // // // // //                 onClick={() => changePage('dailySales')} 
// // // // // //                 className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center"
// // // // // //               >
// // // // // //                 View All
// // // // // //                 <ChevronRight size={16} className="ml-1" />
// // // // // //               </button>
// // // // // //             </div>
            
// // // // // //             <div className="overflow-x-auto">
// // // // // //               <table className="w-full">
// // // // // //                 <thead>
// // // // // //                   <tr className="border-b border-gray-200 dark:border-gray-700">
// // // // // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">ID</th>
// // // // // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Customer</th>
// // // // // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
// // // // // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Time</th>
// // // // // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
// // // // // //                   </tr>
// // // // // //                 </thead>
// // // // // //                 <tbody>
// // // // // //                   {recentTransactions.map((transaction, index) => (
// // // // // //                     <motion.tr 
// // // // // //                       key={index} 
// // // // // //                       initial={{ opacity: 0, y: 10 }}
// // // // // //                       animate={{ opacity: 1, y: 0 }}
// // // // // //                       transition={{ duration: 0.2, delay: index * 0.1 }}
// // // // // //                       className="border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
// // // // // //                     >
// // // // // //                       <td className="py-4 px-3 text-sm font-medium text-gray-700 dark:text-gray-300">{transaction.id}</td>
// // // // // //                       <td className="py-4 px-3 text-sm text-gray-700 dark:text-gray-300">{transaction.customer}</td>
// // // // // //                       <td className="py-4 px-3 text-sm font-medium text-gray-900 dark:text-white">{transaction.amount}</td>
// // // // // //                       <td className="py-4 px-3 text-sm text-gray-500 dark:text-gray-400">{transaction.date}</td>
// // // // // //                       <td className="py-4 px-3 text-sm">
// // // // // //                         <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
// // // // // //                           transaction.status === 'completed' 
// // // // // //                             ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
// // // // // //                             : transaction.status === 'pending' 
// // // // // //                             ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
// // // // // //                             : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
// // // // // //                         }`}>
// // // // // //                           {transaction.status === 'completed' && <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-green-600 dark:bg-green-400"></span>}
// // // // // //                           {transaction.status === 'pending' && <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-yellow-600 dark:bg-yellow-400"></span>}
// // // // // //                           {transaction.status === 'failed' && <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-red-600 dark:bg-red-400"></span>}
// // // // // //                           {transaction.status}
// // // // // //                         </span>
// // // // // //                       </td>
// // // // // //                     </motion.tr>
// // // // // //                   ))}
// // // // // //                 </tbody>
// // // // // //               </table>
// // // // // //             </div>
// // // // // //           </div>
          
// // // // // //           {/* Sales Chart */}
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 0.3, delay: 0.3 }}
// // // // // //             className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 mb-6 border border-gray-100 dark:border-gray-700"
// // // // // //           >
// // // // // //             <div className="flex justify-between items-center mb-6">
// // // // // //               <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
// // // // // //                 <TrendingUp size={18} className="mr-2 text-indigo-600 dark:text-indigo-400" />
// // // // // //                 Sales Overview
// // // // // //               </h3>
// // // // // //               <button 
// // // // // //                 onClick={() => changePage('salesChart')} 
// // // // // //                 className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors flex items-center"
// // // // // //               >
// // // // // //                 Detailed Report
// // // // // //                 <ChevronRight size={16} className="ml-1" />
// // // // // //               </button>
// // // // // //             </div>
            
// // // // // //             <div className="h-80 relative">
// // // // // //               {animateCharts ? (
// // // // // //                 <div className="h-full">
// // // // // //                   <div className="h-full flex items-end space-x-4 px-2">
// // // // // //                     {salesData.map((item, index) => (
// // // // // //                       <div key={index} className="flex-1 flex flex                       items-center">
// // // // // //                         <div className="w-full h-full flex flex-col justify-end space-y-2">
// // // // // //                           <motion.div
// // // // // //                             initial={{ height: 0 }}
// // // // // //                             animate={{ height: `${(item.sales / 7000) * 100}%` }}
// // // // // //                             transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
// // // // // //                             className="w-full bg-gradient-to-t from-blue-500 to-blue-400 dark:from-blue-600 dark:to-blue-500 rounded-t-md relative group"
// // // // // //                           >
// // // // // //                             <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
// // // // // //                               ${item.sales}
// // // // // //                             </div>
// // // // // //                           </motion.div>
// // // // // //                           <motion.div
// // // // // //                             initial={{ height: 0 }}
// // // // // //                             animate={{ height: `${(item.target / 7000) * 100}%` }}
// // // // // //                             transition={{ duration: 0.8, delay: index * 0.1 + 0.2, type: "spring" }}
// // // // // //                             className="w-full bg-gradient-to-t from-gray-300 to-gray-200 dark:from-gray-600 dark:to-gray-500 rounded-t-md relative group"
// // // // // //                           >
// // // // // //                             <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
// // // // // //                               Target: ${item.target}
// // // // // //                             </div>
// // // // // //                           </motion.div>
// // // // // //                         </div>
// // // // // //                         <div className="text-xs mt-2 text-gray-600 dark:text-gray-400 font-medium">{item.month}</div>
// // // // // //                       </div>
// // // // // //                     ))}
// // // // // //                   </div>
// // // // // //                   <div className="mt-4 flex justify-between items-center text-sm">
// // // // // //                     <div className="flex items-center">
// // // // // //                       <div className="w-3 h-3 bg-blue-500 rounded-sm mr-2"></div>
// // // // // //                       <span className="text-gray-700 dark:text-gray-300">Actual Sales</span>
// // // // // //                     </div>
// // // // // //                     <div className="flex items-center">
// // // // // //                       <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-sm mr-2"></div>
// // // // // //                       <span className="text-gray-700 dark:text-gray-300">Target</span>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               ) : (
// // // // // //                 <div className="h-full flex items-center justify-center">
// // // // // //                   <div className="animate-pulse text-gray-400 dark:text-gray-500">Loading chart data...</div>
// // // // // //                 </div>
// // // // // //               )}
// // // // // //             </div>
// // // // // //           </motion.div>
// // // // // //         </motion.div>
        
// // // // // //         {/* Sidebar content */}
// // // // // //         <motion.div
// // // // // //           initial={{ opacity: 0, x: 20 }}
// // // // // //           animate={{ opacity: 1, x: 0 }}
// // // // // //           transition={{ duration: 0.3, delay: 0.4 }}
// // // // // //           className="space-y-6"
// // // // // //         >
// // // // // //           {/* Quick Access */}
// // // // // //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
// // // // // //             <h3 className="font-medium text-gray-800 dark:text-white transition-colors mb-4 flex items-center">
// // // // // //               <Zap size={18} className="mr-2 text-amber-500" />
// // // // // //               Quick Access
// // // // // //             </h3>
// // // // // //             <div className="grid grid-cols-2 gap-3">
// // // // // //               {[
// // // // // //                 { icon: <Package size={20} />, label: 'Products', page: 'products', color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
// // // // // //                 { icon: <Users size={20} />, label: 'Employees', page: 'employees', color: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' },
// // // // // //                 { icon: <DollarSign size={20} />, label: 'Sales', page: 'dailySales', color: 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400' },
// // // // // //                 { icon: <CreditCard size={20} />, label: 'Billing', page: 'billing', color: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400' },
// // // // // //                 { icon: <Layers size={20} />, label: 'Stock', page: 'stockTracking', color: 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' },
// // // // // //                 { icon: <Truck size={20} />, label: 'Suppliers', page: 'suppliers', color: 'bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400' },
// // // // // //               ].map((item, index) => (
// // // // // //                 <motion.button 
// // // // // //                   key={index}
// // // // // //                   whileHover={{ scale: 1.03 }}
// // // // // //                   whileTap={{ scale: 0.97 }}
// // // // // //                   onClick={() => changePage(item.page)} 
// // // // // //                   className={`flex items-center justify-center p-3 rounded-lg transition-all ${item.color} hover:shadow-md`}
// // // // // //                 >
// // // // // //                   <div className="flex flex-col items-center">
// // // // // //                     <div className="mb-1">{item.icon}</div>
// // // // // //                     <span className="text-base font-medium">{item.label}</span> {/* Increased font size */}
// // // // // //                   </div>
// // // // // //                 </motion.button>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>
          
// // // // // //           {/* Low Stock Alert */}
// // // // // //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
// // // // // //             <div className="flex justify-between items-center mb-4">
// // // // // //               <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
// // // // // //                 <AlertTriangle size={20} className="mr-2 text-red-500" />
// // // // // //                 Low Stock Alert
// // // // // //               </h3>
// // // // // //               <button 
// // // // // //                 onClick={() => changePage('restockAlerts')} 
// // // // // //                 className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
// // // // // //               >
// // // // // //                 All Alerts
// // // // // //               </button>
// // // // // //             </div>
            
// // // // // //             <div className="space-y-3">
// // // // // //               {lowStockItems.map((item, index) => (
// // // // // //                 <motion.div 
// // // // // //                   key={index} 
// // // // // //                   initial={{ opacity: 0, y: 10 }}
// // // // // //                   animate={{ opacity: 1, y: 0 }}
// // // // // //                   transition={{ duration: 0.2, delay: index * 0.1 }}
// // // // // //                   className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-750 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
// // // // // //                 >
// // // // // //                   <div className="flex items-start space-x-3">
// // // // // //                     <div className={`mt-0.5 p-1.5 rounded-md ${
// // // // // //                       item.reorderStatus === 'urgent' ? 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400' : 
// // // // // //                       item.reorderStatus === 'pending' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-400' : 
// // // // // //                       'bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400'
// // // // // //                     }`}>
// // // // // //                       <Layers size={16} />
// // // // // //                     </div>
// // // // // //                     <div>
// // // // // //                       <div className="font-medium text-sm text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.name}</div>
// // // // // //                       <div className="text-xs text-gray-500 dark:text-gray-400">SKU: {item.id}</div>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                   <div className={`text-sm font-medium ${
// // // // // //                     (item.current / item.min) < 0.5 ? 'text-red-600 dark:text-red-400' : 
// // // // // //                     (item.current / item.min) < 0.75 ? 'text-yellow-600 dark:text-yellow-400' : 
// // // // // //                     'text-gray-700 dark:text-gray-300'
// // // // // //                   }`}>
// // // // // //                     {item.current}/{item.min}
// // // // // //                   </div>
// // // // // //                 </motion.div>
// // // // // //               ))}
// // // // // //             </div>
            
// // // // // //             <div className="mt-4">
// // // // // //               <motion.button 
// // // // // //                 whileHover={{ scale: 1.02 }}
// // // // // //                 whileTap={{ scale: 0.98 }}
// // // // // //                 onClick={() => changePage('suppliers')}
// // // // // //                 className="flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all text-sm w-full shadow-sm hover:shadow"
// // // // // //               >
// // // // // //                 <Truck size={16} className="mr-2" />
// // // // // //                 Place Restock Order
// // // // // //               </motion.button>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Recent activity timeline */}
// // // // // //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
// // // // // //             <h3 className="font-medium text-gray-800 dark:text-white transition-colors mb-4 flex items-center">
// // // // // //               <Calendar size={20} className="mr-2 text-purple-500" />
// // // // // //               Recent Activity
// // // // // //             </h3>
            
// // // // // //             <div className="relative">
// // // // // //               {/* Timeline line */}
// // // // // //               <div className="absolute top-0 bottom-0 left-3 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              
// // // // // //               <div className="space-y-4">
// // // // // //                 {[
// // // // // //                   { time: '9:32 AM', title: 'New order received', description: 'Order #4592 from Michael T.', color: 'bg-green-500' },
// // // // // //                   { time: '11:15 AM', title: 'Low stock notification', description: 'Vitamin B Complex needs restock', color: 'bg-yellow-500' },
// // // // // //                   { time: '1:45 PM', title: 'Employee login', description: 'Sarah logged in for afternoon shift', color: 'bg-blue-500' },
// // // // // //                   { time: '2:30 PM', title: 'System report', description: 'Daily inventory check completed', color: 'bg-purple-500' },
// // // // // //                 ].map((activity, index) => (
// // // // // //                   <motion.div 
// // // // // //                     key={index}
// // // // // //                     initial={{ opacity: 0, x: -10 }}
// // // // // //                     animate={{ opacity: 1, x: 0 }}
// // // // // //                     transition={{ duration: 0.3, delay: index * 0.1 }}
// // // // // //                     className="relative pl-8"
// // // // // //                   >
// // // // // //                     <div className={`absolute left-0 top-1 h-6 w-6 rounded-full flex items-center justify-center ${activity.color} shadow-md`}>
// // // // // //                       <span className="h-3 w-3 bg-white rounded-full"></span>
// // // // // //                     </div>
// // // // // //                     <div className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</div>
// // // // // //                     <div className="font-medium text-sm text-gray-800 dark:text-white">{activity.title}</div>
// // // // // //                     <div className="text-xs text-gray-500 dark:text-gray-400">{activity.description}</div>
// // // // // //                   </motion.div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </motion.div>
// // // // // //       </div>
// // // // // //     </motion.div>
// // // // // //   );

// // // // // //   // Render the selected page content
// // // // // //   const renderContent = () => {
// // // // // //     switch(currentPage) {
// // // // // //       case 'dashboard':
// // // // // //         return renderDashboard();
// // // // // //         case 'Login':
// // // // // //           return <LoginPage/>;
// // // // // //       case 'products':
// // // // // //         return <ProductDashboard />;
// // // // // //       case 'employees':
// // // // // //         return <EmployeeManagement />;
// // // // // //       case 'roles':
// // // // // //         return <RoleDistribution />;
// // // // // //       case 'dailySales':
// // // // // //         return <DailySales />;
// // // // // //       case 'stockTracking':
// // // // // //         return <StockTracking />;
// // // // // //       case 'employeeSearch':
// // // // // //         return <EmployeeSearch />;
// // // // // //       case 'billing':
// // // // // //         return <Billing />;
// // // // // //       case 'customerSignup':
// // // // // //         return <CustomerSignupForm />;
// // // // // //       case 'customers':
// // // // // //         return <ViewCustomers />;
// // // // // //       case 'salesChart':
// // // // // //         return <SalesChart />;
// // // // // //       case 'productSales':
// // // // // //         return <ProductSales />;
// // // // // //       case 'inventory':
// // // // // //         return <InventoryDashboard />;
// // // // // //       case 'users':
// // // // // //         return <UserManagementPage />;
// // // // // //       case 'restockAlerts':
// // // // // //         return <ProductDashboard2 />;
// // // // // //       case 'suppliers':
// // // // // //         return <SupplierManagement />;
// // // // // //       case 'batch':
// // // // // //         return <BatchExpiryTracker />;
// // // // // //       case 'damage':
// // // // // //         return <DamageItemsManagement />;
// // // // // //       case 'emp':
// // // // // //         return <EmployeeSales />;
// // // // // //       case 'attendance':
// // // // // //         return <EmployeeAttendanceForm />;
// // // // // //       case 'face':
// // // // // //         return <FacialRecognitionAttendance />;
// // // // // //       case 'add_face':
// // // // // //         return <AddEmployeeFace />;
// // // // // //       case 'salaries':
// // // // // //         return <EmployeesSalaryManagement />;
// // // // // //       case 'analytics':
// // // // // //         return <SalesAnalyticsDashboard />;
// // // // // //       case 'khata2':
// // // // // //         return <KhatabookPage />;
// // // // // //         case 'UserProfile':
// // // // // //           return <UserProfile/>;
// // // // // //           case 'category':
// // // // // //           return <SearchProductsByCategory/>;
// // // // // //       default:
// // // // // //         return renderDashboard();
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-gray-50 dark:bg-gray-900 flex`}>
// // // // // //       {/* Mobile overlay for sidebar */}
// // // // // //       {sidebarOpen && (
// // // // // //         <div
// // // // // //           className="fixed inset-0 bg-black/50 md:hidden z-20"
// // // // // //           onClick={() => setSidebarOpen(false)}
// // // // // //         />
// // // // // //       )}

// // // // // //       {/* Sidebar */}
// // // // // //       <aside
// // // // // //         className={`fixed md:static inset-y-0 left-0 w-64 bg-gradient-to-br from-blue-800 to-blue-600
// // // // // //           transform transition-transform duration-300 ease-in-out z-30
// // // // // //           ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
// // // // // //       >
// // // // // //         <div className="h-16 flex items-center justify-between px-4 border-b border-white/20">
// // // // // //           <h1 className="text-xl font-bold text-white truncate">
// // // // // //             {storeName || "Store Manager"}
// // // // // //           </h1>
// // // // // //           <button
// // // // // //             onClick={() => setSidebarOpen(false)}
// // // // // //             className="md:hidden text-white hover:text-gray-200"
// // // // // //           >
// // // // // //             <X size={24} />
// // // // // //           </button>
// // // // // //         </div>

// // // // // //         <div className="p-4">
// // // // // //           <div className="flex items-center space-x-3 mb-6">
// // // // // //             <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-blue-800 font-bold">
// // // // // //               A
// // // // // //             </div>
// // // // // //             <div>
// // // // // //               <div className="font-medium text-white">Admin User</div>
// // // // // //               <div className="text-sm text-blue-200">Super Admin</div>
// // // // // //             </div>
// // // // // //           </div>
          
// // // // // //           <nav>
// // // // // //             <ul className="space-y-1">
// // // // // //               <li>
// // // // // //                 <button 
// // // // // //                   onClick={() => changePage('dashboard')}
// // // // // //                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'dashboard' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'} text-xl`} // Increased font size
// // // // // //                 >
// // // // // //                   <BarChart2 size={20} className="mr-3" />
// // // // // //                   Dashboard
// // // // // //                 </button>
// // // // // //               </li>
              
// // // // // //               {/* Products dropdown */}
// // // // // //               <li>
// // // // // //                 <div>
// // // // // //                   <button 
// // // // // //                     onClick={() => toggleMenu('products')}
// // // // // //                     className={`flex items-center justify-between w-full p-2 rounded-md 
// // // // // //                       ${currentPage === 'products' || currentPage === 'inventory' || currentPage === 'restockAlerts' ? 
// // // // // //                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'} text-xl`} // Increased font size
// // // // // //                   >
// // // // // //                     <div className="flex items-center">
// // // // // //                       <Package size={20} className="mr-3" />
// // // // // //                       Products
// // // // // //                     </div>
// // // // // //                     {expandedMenus.products ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
// // // // // //                   </button>
                  
// // // // // //                   {expandedMenus.products && (
// // // // // //                     <ul className="pl-9 pt-1 pb-1">
// // // // // //                       <li>
// // // // // //                         <button 
// // // // // //                           onClick={() => changePage('products')} 
// // // // // //                           className="p-1 hover:text-blue-300 text-base w-full text-left text-blue-100" // Increased font size
// // // // // //                         >
// // // // // //                           All Products
// // // // // //                         </button>
// // // // // //                       </li>
// // // // // //                       <li>
// // // // // //                         <button 
// // // // // //                           onClick={() => changePage('restockAlerts')} 
// // // // // //                           className="p-1 hover:text-blue-300 text-base w-full text-left text-blue-100" // Increased font size
// // // // // //                         >
// // // // // //                           Restock Alerts
// // // // // //                         </button>
// // // // // //                       </li>
// // // // // //                       <li>
// // // // // //                         <button 
// // // // // //                           onClick={() => changePage('batch')} 
// // // // // //                           className="p-1 hover:text-blue-300 text-base w-full text-left text-blue-100" // Increased font size
// // // // // //                         >
// // // // // //                           Batch Expiry Tracker
// // // // // //                         </button>
// // // // // //                       </li>
// // // // // //                       <li>
// // // // // //                         <button 
// // // // // //                           onClick={() => changePage('damage')} 
// // // // // //                           className="p-1 hover:text-blue-300 text-base w-full text-left text-blue-100" // Increased font size
// // // // // //                         >
// // // // // //                           Damage Items
// // // // // //                         </button>
// // // // // //                       </li>
// // // // // //                       <li>
// // // // // //                         <button 
// // // // // //                           onClick={() => changePage('category')} 
// // // // // //                           className="p-1 hover:text-blue-300 text-base w-full text-left text-blue-100" // Increased font size
// // // // // //                         >categorization
// // // // // //                         </button>
// // // // // //                       </li>
// // // // // //                     </ul>
// // // // // //                   )}
// // // // // //                 </div>
// // // // // //               </li>
              
// // // // // //               {/* Employees dropdown */}
// // // // // //               <li>
// // // // // //                 <div>
// // // // // //                   <button 
// // // // // //                     onClick={() => toggleMenu('employees')}
// // // // // //                     className={`flex items-center justify-between w-full p-2 rounded-md 
// // // // // //                       ${currentPage === 'employees' || currentPage === 'roles' || currentPage === 'employeeSearch' ? 
// // // // // //                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'} text-xl`} // Increased font size
// // // // // //                   >
// // // // // //                     <div className="flex items-center">
// // // // // //                       <Users size={20} className="mr-3" />
// // // // // //                       Employees
// // // // // //                     </div>
// // // // // //                     {expandedMenus.employees ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
// // // // // //                   </button>
                  
// // // // // //                   {expandedMenus.employees && (
// // // // // //                     <ul className="pl-9 pt-1 pb-1">
// // // // // //                       <li>
// // // // // //                         <button 
// // // // // //                           onClick={() => changePage('employees')} 
// // // // // //                           className="p-1 hover:text-blue-300 text-base w-full text-left text-blue-100" // Increased font size
// // // // // //                         >
// // // // // //                           Manage Employees
// // // // // //                         </button>
// // // // // //                       </li>
// // // // // //                       <li>
// // // // // //                         <button 
// // // // // //                           onClick={() => changePage('roles')} 
// // // // // //                           className="p-1 hover:text-blue-300 text-base w-full text-left text-blue-100" // Increased font size
// // // // // //                         >
// // // // // //                           Roles & Permissions
// // // // // //                         </button>
// // // // // //                       </li>
// // // // // //                       <li>
// // // // // //                         <button 
// // // // // //                           onClick={() => changePage('attendance')} 
// // // // // //                           className="p-1 hover:text-blue-300 text-base w-full text-left text-blue-100" // Increased font size
// // // // // //                         >
// // // // // //                           Attendance
// // // // // //                         </button>
// // // // // //                       </li>
// // // // // //                       <li>
// // // // // //                         <button 
// // // // // //                           onClick={() => changePage('add_face')} 
// // // // // //                           className="p-1 hover:text-blue-300 text-base w-full text-left text-blue-100" // Increased font size
// // // // // //                         >
// // // // // //                           Add Face
// // // // // //                         </button>
// // // // // //                       </li>
// // // // // //                       <li>
// // // // // //                         <button 
// // // // // //                           onClick={() => changePage('face')} 
// // // // // //                           className="p-1 hover:text-blue-300 text-base w-full text-left text-blue-100" // Increased font size
// // // // // //                         >
// // // // // //                           Face
// // // // // //                         </button>
// // // // // //                       </li>
// // // // // //                       <li>
// // // // // //                         <button 
// // // // // //                           onClick={() => changePage('employeeSearch')} 
// // // // // //                           className="p-1 hover:text-blue-300 text-base w-full text-left text-blue-100" // Increased font size
// // // // // //                         >
// // // // // //                           Employee Search
// // // // // //                         </button>
// // // // // //                       </li>
// // // // // //                       <li>
// // // // // //                         <button 
// // // // // //                           onClick={() => changePage('emp')} 
// // // // // //                           className="p-1 hover:text-blue-300 text-base w-full text-left text-blue-100" // Increased font size
// // // // // //                         >
// // // // // //                           Employee Sales
// // // // // //                         </button>
// // // // // //                       </li>
// // // // // //                       <li>
// // // // // //                         <button 
// // // // // //                           onClick={() => changePage('salaries')} 
// // // // // //                           className="p-1 hover:text-blue-300 text-base w-full text-left text-blue-100" // Increased font size
// // // // // //                         >
// // // // // //                           Salaries
// // // // // //                         </button>
// // // // // //                       </li>
// // // // // //                     </ul>
// // // // // //                   )}
// // // // // //                 </div>
// // // // // //               </li>
              
// // // // // //               {/* Sales dropdown */}
// // // // // //               <li>
// // // // // //                 <div>
// // // // // //                   <button 
// // // // // //                     onClick={() => toggleMenu('sales')}
// // // // // //                     className={`flex items-center justify-between w-full p-2 rounded-md 
// // // // // //                       ${currentPage === 'dailySales' || currentPage === 'salesChart' || currentPage === 'productSales' || currentPage === 'billing' ? 
// // // // // //                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'} text-xl`} // Increased font size
// // // // // //                   >
// // // // // //                     <div className="flex items-center">
// // // // // //                       <DollarSign size={20} className="mr-3" />
// // // // // //                       Sales
// // // // // //                     </div>
// // // // // //                     {expandedMenus.sales ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
// // // // // //                   </button>
                  
// // // // // //                   {expandedMenus.sales && (
// // // // // //                     <ul className="pl-9 pt-1 pb-1">
// // // // // //                       <li>
// // // // // //                         <button 
// // // // // //                           onClick={() => changePage('dailySales')} 
// // // // // //                           className="p-1 hover:text-blue-300 text-base w-full text-left text-blue-100" // Increased font size
// // // // // //                         >
// // // // // //                           Daily Sales
// // // // // //                         </button>
// // // // // //                       </li>
// // // // // //                       <li>
// // // // // //                         <button 
// // // // // //                           onClick={() => changePage('salesChart')} 
// // // // // //                           className="p-1 hover:text-blue-300 text-base w-full text-left text-blue-100" // Increased font size
// // // // // //                         >
// // // // // //                           Sales Reports
// // // // // //                         </button>
// // // // // //                       </li>
// // // // // //                       <li>
// // // // // //                         <button 
// // // // // //                           onClick={() => changePage('productSales')} 
// // // // // //                           className="p-1 hover:text-blue-300 text-base w-full text-left text-blue-100" // Increased font size
// // // // // //                         >
// // // // // //                           Product Sales
// // // // // //                         </button>
// // // // // //                       </li>
// // // // // //                       <li>
// // // // // //                         <button 
// // // // // //                           onClick={() => changePage('analytics')} 
// // // // // //                           className="p-1 hover:text-blue-300 text-base w-full text-left text-blue-100" // Increased font size
// // // // // //                         >
// // // // // //                           Analytics
// // // // // //                         </button>
// // // // // //                       </li>
// // // // // //                       <li>
// // // // // //                         <button 
// // // // // //                           onClick={() => changePage('billing')} 
// // // // // //                           className="p-1 hover:text-blue-300 text-base w-full text-left text-blue-100" // Increased font size
// // // // // //                         >
// // // // // //                           Billing
// // // // // //                         </button>
// // // // // //                       </li>
// // // // // //                     </ul>
// // // // // //                   )}
// // // // // //                 </div>
// // // // // //               </li>
              
// // // // // //               {/* Customers dropdown */}
// // // // // //               <li>
// // // // // //                 <div>
// // // // // //                   <button 
// // // // // //                     onClick={() => toggleMenu('customers')}
// // // // // //                     className={`flex items-center justify-between w-full p-2 rounded-md 
// // // // // //                       ${currentPage === 'customers' || currentPage === 'customerSignup' ? 
// // // // // //                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'} text-xl`} // Increased font size
// // // // // //                   >
// // // // // //                     <div className="flex items-center">
// // // // // //                       <UserCheck size={20} className="mr-3" />
// // // // // //                       Customers
// // // // // //                     </div>
// // // // // //                     {expandedMenus.customers ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
// // // // // //                   </button>
                  
// // // // // //                   {expandedMenus.customers && (
// // // // // //                     <ul className="pl-9 pt-1 pb-1">
// // // // // //                       <li>
// // // // // //                         <button 
// // // // // //                           onClick={() => changePage('customers')} 
// // // // // //                           className="p-1 hover:text-blue-300 text-base w-full text-left text-blue-100" // Increased font size
// // // // // //                         >
// // // // // //                           View Customers
// // // // // //                         </button>
// // // // // //                       </li>
// // // // // //                       <li>
// // // // // //                         <button 
// // // // // //                           onClick={() => changePage('customerSignup')} 
// // // // // //                           className="p-1 hover:text-blue-300 text-base w-full text-left text-blue-100" // Increased font size
// // // // // //                         >
// // // // // //                           Add Customer
// // // // // //                         </button>
// // // // // //                       </li>
                      
// // // // // //                       <li>
// // // // // //                         <button 
// // // // // //                           onClick={() => changePage('khata2')} 
// // // // // //                           className="p-1 hover:text-blue-300 text-base w-full text-left text-blue-100" // Increased font size
// // // // // //                         >
// // // // // //                           Khatabook
// // // // // //                         </button>
// // // // // //                       </li>
// // // // // //                     </ul>
// // // // // //                   )}
// // // // // //                 </div>
// // // // // //               </li>
              
// // // // // //               {/* Suppliers */}
// // // // // //               <li>
// // // // // //                 <button 
// // // // // //                   onClick={() => changePage('suppliers')}
// // // // // //                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'suppliers' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'} text-xl`} // Increased font size
// // // // // //                 >
// // // // // //                   <Truck size={20} className="mr-3" />
// // // // // //                   Suppliers
// // // // // //                 </button>
// // // // // //               </li>
              
// // // // // //               {/* Inventory/Stock */}
// // // // // //               <li>
// // // // // //                 <button 
// // // // // //                   onClick={() => changePage('stockTracking')}
// // // // // //                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'stockTracking' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'} text-xl`} // Increased font size
// // // // // //                 >
// // // // // //                   <Layers size={20} className="mr-3" />
// // // // // //                   Stock Tracking
// // // // // //                 </button>
// // // // // //               </li>
              
// // // // // //               {/* User Management */}
// // // // // //               <li>
// // // // // //                 <button 
// // // // // //                   onClick={() => changePage('users')}
// // // // // //                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'users' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'} text-xl`} // Increased font size
// // // // // //                 >
// // // // // //                   <User size={20} className="mr-3" />
// // // // // //                   User Management
// // // // // //                 </button>
// // // // // //               </li>
              
// // // // // //               {/* Settings */}
// // // // // //               <li>
// // // // // //                 <button 
// // // // // //                   className="flex items-center w-full p-2 rounded-md text-white hover:bg-white/10 text-xl" // Increased font size
// // // // // //                 >
// // // // // //                   <Settings size={20} className="mr-3" />
// // // // // //                   Settings
// // // // // //                 </button>
// // // // // //               </li>
// // // // // //             </ul>
// // // // // //           </nav>
// // // // // //         </div>
// // // // // //       </aside>

// // // // // //       {/* Mobile menu button */}
// // // // // //       <button
// // // // // //         onClick={() => setSidebarOpen(true)}
// // // // // //         className={`md:hidden fixed top-4 left-4 z-10 p-2 rounded-lg bg-blue-800 text-white
// // // // // //           shadow-lg hover:bg-blue-700 transition-colors duration-200
// // // // // //           ${sidebarOpen ? 'hidden' : 'block'}`}
// // // // // //       >
// // // // // //         <Menu size={24} />
// // // // // //       </button>

// // // // // //       {/* Main content */}
// // // // // //       <main className="flex-1 overflow-auto">
// // // // // //         {/* Top header */}
// // // // // //         <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-100 dark:border-gray-700">
// // // // // //           <div className="px-4 py-3 flex justify-between items-center">
// // // // // //             <div className="md:hidden flex items-center">
// // // // // //               <h1 className="text-xl font-bold text-blue-800 dark:text-white">
// // // // // //                 {currentPage === 'dashboard' ? 'Dashboard' : 
// // // // // //                  currentPage === 'products' ? 'Products' :
// // // // // //                  currentPage === 'employees' ? 'Employees' :
// // // // // //                  currentPage === 'dailySales' ? 'Sales' :
// // // // // //                  currentPage === 'stockTracking' ? 'Stock' :
// // // // // //                  currentPage === 'suppliers' ? 'Suppliers' :
// // // // // //                  'Admin Dashboard'}
// // // // // //               </h1>
// // // // // //             </div>
            
// // // // // //             <div className="hidden md:flex items-center">
// // // // // //               <div className="relative mr-4">
// // // // // //                 <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// // // // // //                 <input
// // // // // //                   type="text"
// // // // // //                   placeholder="Search..."
// // // // // //                   className="pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
// // // // // //                 />
// // // // // //               </div>
// // // // // //             </div>
            
// // // // // //             <div className="flex items-center space-x-4">
// // // // // //               <button 
// // // // // //                 onClick={() => setNotificationsOpen(!notificationsOpen)} 
// // // // // //                 className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative"
// // // // // //               >
// // // // // //                 <Bell size={20} />
// // // // // //                 <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
// // // // // //               </button>
              
// // // // // //               <button 
// // // // // //                 onClick={() => setUserMenuOpen(!userMenuOpen)} 
// // // // // //                 className="flex items-center text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
// // // // // //               >
// // // // // //                 <LogOut size={16} className="mr-1" />
// // // // // //                 <span className="hidden md:inline">Logout</span>
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
        
// // // // // //         {/* Page content */}
// // // // // //         <div className="p-4">
// // // // // //           {renderContent()}
// // // // // //         </div>
// // // // // //       </main>

// // // // // //       {/* Notifications dropdown */}
// // // // // //       <AnimatePresence>
// // // // // //         {notificationsOpen && (
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, y: -10 }}
// // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // //             exit={{ opacity: 0, y: -10 }}
// // // // // //             transition={{ duration: 0.2 }}
// // // // // //             ref={notificationRef}
// // // // // //             className="fixed right-4 top-16 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-40 border border-gray-100 dark:border-gray-700"
// // // // // //           >
// // // // // //             <div className="p-4">
// // // // // //               <h3 className="font-medium text-gray-800 dark:text-white mb-4">Notifications</h3>
// // // // // //               <div className="space-y-3">
// // // // // //                 {notifications.map((notification) => (
// // // // // //                   <div key={notification.id} className="flex items-start space-x-3">
// // // // // //                     <div className={`p-2 rounded-full ${
// // // // // //                       notification.type === 'alert' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' :
// // // // // //                       notification.type === 'order' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' :
// // // // // //                       notification.type === 'reminder' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400' :
// // // // // //                       'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
// // // // // //                     }`}>
// // // // // //                       <Bell size={16} />
// // // // // //                     </div>
// // // // // //                     <div>
// // // // // //                       <div className="text-sm font-medium text-gray-800 dark:text-white">{notification.title}</div>
// // // // // //                       <div className="text-xs text-gray-500 dark:text-gray-400">{notification.message}</div>
// // // // // //                       <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{notification.time}</div>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </motion.div>
// // // // // //         )}
// // // // // //       </AnimatePresence>

// // // // // //       {/* User menu dropdown */}
// // // // // //       <AnimatePresence>
// // // // // //         {userMenuOpen && (
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, y: -10 }}
// // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // //             exit={{ opacity: 0, y: -10 }}
// // // // // //             transition={{ duration: 0.2 }}
// // // // // //             ref={userMenuRef}
// // // // // //             className="fixed right-4 top-16 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-40 border border-gray-100 dark:border-gray-700"
// // // // // //           >
// // // // // //             <div className="p-2">
// // // // // //             <button 
// // // // // //                 onClick={() => navigate('/UserProfile')}
// // // // // //                 className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left"
// // // // // //               >
// // // // // //                 Profile
// // // // // //               </button>
// // // // // //               <button 
// // // // // //                 onClick={toggleDarkMode}
// // // // // //                 className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left"
// // // // // //               >
// // // // // //                 {darkMode ? 'Light Mode' : 'Dark Mode'}
// // // // // //               </button>
// // // // // //               <button 
// // // // // //                 onClick={() => navigate('/settings')}
// // // // // //                 className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left"
// // // // // //               >
// // // // // //                 Settings
// // // // // //               </button>
// // // // // //               <button 
// // // // // //                 onClick={() => navigate('/LoginPage')}
// // // // // //                 className="w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg text-left"
// // // // // //               >
// // // // // //                 Logout
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </motion.div>
// // // // // //         )}
// // // // // //       </AnimatePresence>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default AdminDashboard;

// // // // // "use client"

// // // // // import { useState, useContext, useEffect, useRef } from "react"
// // // // // import { StoreContext } from "./StoreContext"
// // // // // import { useLocation, useNavigate } from "react-router-dom"
// // // // // import {
// // // // //   Menu,
// // // // //   Package,
// // // // //   Users,
// // // // //   BarChart2,
// // // // //   Settings,
// // // // //   CreditCard,
// // // // //   X,
// // // // //   DollarSign,
// // // // //   UserCheck,
// // // // //   Search,
// // // // //   Bell,
// // // // //   LogOut,
// // // // //   Truck,
// // // // //   Layers,
// // // // //   ShoppingBag,
// // // // //   ChevronRight,
// // // // //   ChevronDown,
// // // // //   AlertTriangle,
// // // // //   User,
// // // // //   Calendar,
// // // // //   Shield,
// // // // //   Zap,
// // // // //   TrendingUp,
// // // // //   HelpCircle,
// // // // //   FileText,
// // // // // } from "lucide-react"
// // // // // import { motion, AnimatePresence } from "framer-motion"

// // // // // // Import all the components you need
// // // // // import ProductDashboard from "./ProductManagement"
// // // // // import EmployeeManagement from "./EmployeeManagement"
// // // // // import RoleDistribution from "./RoleDistribution"
// // // // // import DailySales from "./DailySales"
// // // // // import StockTracking from "./StockTracking"
// // // // // import EmployeeSearch from "./EmployeeSearch"
// // // // // import Billing from "./Billing"
// // // // // import CustomerSignupForm from "./CustomerSignUpForm"
// // // // // import ViewCustomers from "./ViewCustomers"
// // // // // import SalesChart from "./SalesChart"
// // // // // import ProductSales from "./ProductSales"
// // // // // import InventoryDashboard from "./InventoryDashboard"
// // // // // import UserManagementPage from "./UserManagement"
// // // // // import ProductDashboard2 from "./RestockAlerts"
// // // // // import SupplierManagement from "./Supc"
// // // // // import BatchExpiryTracker from "./BatchExpiryTracker"
// // // // // import DamageItemsManagement from "./DamageItemsManagement"
// // // // // import EmployeeSales from "./EmployeeSales"
// // // // // import EmployeeAttendanceForm from "./EmployeeAttendance"
// // // // // import FacialRecognitionAttendance from "./FacialRecognitionAttendance"
// // // // // import AddEmployeeFace from "./AddEmployeeFace"
// // // // // import EmployeesSalaryManagement from "./EmployeesSalaryManagement"
// // // // // import SalesAnalyticsDashboard from "./SalesAnalyticsDashboard"
// // // // // import KhatabookPage from "./Khatabook2"
// // // // // import UserProfile from "./UserProfile"
// // // // // import SearchProductsByCategory from "./ProductCategorization"
// // // // // import LoginPage from "./LoginPage"

// // // // // const AdminDashboard = () => {
// // // // //   const { storeName } = useContext(StoreContext)
// // // // //   const [sidebarOpen, setSidebarOpen] = useState(true)
// // // // //   const location = useLocation()
// // // // //   const navigate = useNavigate()
// // // // //   const [currentPage, setCurrentPage] = useState("dashboard")
// // // // //   const [expandedMenus, setExpandedMenus] = useState({
// // // // //     products: false,
// // // // //     employees: false,
// // // // //     sales: false,
// // // // //     customers: false,
// // // // //     suppliers: false,
// // // // //   })
// // // // //   const [searchFocused, setSearchFocused] = useState(false)
// // // // //   const [notificationsOpen, setNotificationsOpen] = useState(false)
// // // // //   const [userMenuOpen, setUserMenuOpen] = useState(false)
// // // // //   const [darkMode, setDarkMode] = useState(false)
// // // // //   const [loading, setLoading] = useState(true)
// // // // //   const [animateCharts, setAnimateCharts] = useState(false)

// // // // //   const notificationRef = useRef(null)
// // // // //   const userMenuRef = useRef(null)

// // // // //   // Stats for dashboard with more specific data
// // // // //   const stats = [
// // // // //     {
// // // // //       title: "Total Sales Today",
// // // // //       value: "$5,890",
// // // // //       change: "+15%",
// // // // //       up: true,
// // // // //       icon: <DollarSign size={20} className="text-green-500" />,
// // // // //     },
// // // // //     {
// // // // //       title: "Low Stock Items",
// // // // //       value: "24",
// // // // //       change: "+8",
// // // // //       up: false,
// // // // //       icon: <AlertTriangle size={20} className="text-amber-500" />,
// // // // //     },
// // // // //     {
// // // // //       title: "Today's Orders",
// // // // //       value: "42",
// // // // //       change: "+12%",
// // // // //       up: true,
// // // // //       icon: <ShoppingBag size={20} className="text-blue-500" />,
// // // // //     },
// // // // //     {
// // // // //       title: "Active Employees",
// // // // //       value: "18",
// // // // //       change: "0",
// // // // //       up: true,
// // // // //       icon: <Users size={20} className="text-purple-500" />,
// // // // //     },
// // // // //   ]

// // // // //   // Recent transactions for dashboard
// // // // //   const recentTransactions = [
// // // // //     {
// // // // //       id: "#TRX-4589",
// // // // //       customer: "John Smith",
// // // // //       amount: "$129.50",
// // // // //       date: "20 min ago",
// // // // //       status: "completed",
// // // // //       paymentMethod: "Credit Card",
// // // // //     },
// // // // //     {
// // // // //       id: "#TRX-4588",
// // // // //       customer: "Lisa Wong",
// // // // //       amount: "$245.75",
// // // // //       date: "45 min ago",
// // // // //       status: "completed",
// // // // //       paymentMethod: "PayPal",
// // // // //     },
// // // // //     {
// // // // //       id: "#TRX-4587",
// // // // //       customer: "Mike Johnson",
// // // // //       amount: "$67.25",
// // // // //       date: "1 hr ago",
// // // // //       status: "pending",
// // // // //       paymentMethod: "Credit Card",
// // // // //     },
// // // // //     {
// // // // //       id: "#TRX-4586",
// // // // //       customer: "Sara Miller",
// // // // //       amount: "$352.00",
// // // // //       date: "2 hrs ago",
// // // // //       status: "completed",
// // // // //       paymentMethod: "Bank Transfer",
// // // // //     },
// // // // //     {
// // // // //       id: "#TRX-4585",
// // // // //       customer: "David Chen",
// // // // //       amount: "$84.30",
// // // // //       date: "3 hrs ago",
// // // // //       status: "failed",
// // // // //       paymentMethod: "Credit Card",
// // // // //     },
// // // // //   ]

// // // // //   // Low stock items
// // // // //   const lowStockItems = [
// // // // //     { id: "P-1245", name: "Premium Coffee Beans", current: 12, min: 20, reorderStatus: "urgent" },
// // // // //     { id: "P-2340", name: "Organic Green Tea", current: 8, min: 15, reorderStatus: "pending" },
// // // // //     { id: "P-1023", name: "Vitamin C Tablets", current: 5, min: 10, reorderStatus: "ordered" },
// // // // //     { id: "P-3456", name: "Almond Milk", current: 9, min: 12, reorderStatus: "urgent" },
// // // // //   ]

// // // // //   // Mock data for sales chart
// // // // //   const salesData = [
// // // // //     { month: "Jan", sales: 4500, target: 4000 },
// // // // //     { month: "Feb", sales: 5200, target: 4200 },
// // // // //     { month: "Mar", sales: 4800, target: 4400 },
// // // // //     { month: "Apr", sales: 5500, target: 4600 },
// // // // //     { month: "May", sales: 6200, target: 4800 },
// // // // //     { month: "Jun", sales: 5900, target: 5000 },
// // // // //     { month: "Jul", sales: 6500, target: 5200 },
// // // // //   ]

// // // // //   // Notifications
// // // // //   const notifications = [
// // // // //     {
// // // // //       id: 1,
// // // // //       title: "Low stock alert",
// // // // //       message: "4 products need reordering",
// // // // //       time: "10 min ago",
// // // // //       read: false,
// // // // //       type: "alert",
// // // // //     },
// // // // //     {
// // // // //       id: 2,
// // // // //       title: "New order received",
// // // // //       message: "Order #12458 from John D.",
// // // // //       time: "25 min ago",
// // // // //       read: false,
// // // // //       type: "order",
// // // // //     },
// // // // //     {
// // // // //       id: 3,
// // // // //       title: "Staff meeting",
// // // // //       message: "Reminder: Meeting at 3 PM",
// // // // //       time: "2 hours ago",
// // // // //       read: true,
// // // // //       type: "reminder",
// // // // //     },
// // // // //     {
// // // // //       id: 4,
// // // // //       title: "System update",
// // // // //       message: "Maintenance scheduled for tonight",
// // // // //       time: "1 day ago",
// // // // //       read: true,
// // // // //       type: "system",
// // // // //     },
// // // // //   ]

// // // // //   // Navigation menu structure
// // // // //   const navigationMenu = [
// // // // //     {
// // // // //       id: "dashboard",
// // // // //       label: "Dashboard",
// // // // //       icon: <BarChart2 size={20} />,
// // // // //       onClick: () => changePage("dashboard"),
// // // // //     },
// // // // //     {
// // // // //       id: "products",
// // // // //       label: "Products",
// // // // //       icon: <Package size={20} />,
// // // // //       submenu: [
// // // // //         { id: "products", label: "All Products", onClick: () => changePage("products") },
// // // // //         { id: "restockAlerts", label: "Restock Alerts", onClick: () => changePage("restockAlerts") },
// // // // //         { id: "batch", label: "Batch Expiry Tracker", onClick: () => changePage("batch") },
// // // // //         { id: "damage", label: "Damage Items", onClick: () => changePage("damage") },
// // // // //         { id: "category", label: "Categorization", onClick: () => changePage("category") },
// // // // //       ],
// // // // //     },
// // // // //     {
// // // // //       id: "employees",
// // // // //       label: "Employees",
// // // // //       icon: <Users size={20} />,
// // // // //       submenu: [
// // // // //         { id: "employees", label: "Manage Employees", onClick: () => changePage("employees") },
// // // // //         { id: "roles", label: "Roles & Permissions", onClick: () => changePage("roles") },
// // // // //         { id: "attendance", label: "Attendance", onClick: () => changePage("attendance") },
// // // // //         { id: "add_face", label: "Add Face", onClick: () => changePage("add_face") },
// // // // //         { id: "face", label: "Face Recognition", onClick: () => changePage("face") },
// // // // //         { id: "employeeSearch", label: "Employee Search", onClick: () => changePage("employeeSearch") },
// // // // //         { id: "emp", label: "Employee Sales", onClick: () => changePage("emp") },
// // // // //         { id: "salaries", label: "Salaries", onClick: () => changePage("salaries") },
// // // // //       ],
// // // // //     },
// // // // //     {
// // // // //       id: "sales",
// // // // //       label: "Sales",
// // // // //       icon: <DollarSign size={20} />,
// // // // //       submenu: [
// // // // //         { id: "dailySales", label: "Daily Sales", onClick: () => changePage("dailySales") },
// // // // //         { id: "salesChart", label: "Sales Reports", onClick: () => changePage("salesChart") },
// // // // //         { id: "productSales", label: "Product Sales", onClick: () => changePage("productSales") },
// // // // //         { id: "analytics", label: "Analytics", onClick: () => changePage("analytics") },
// // // // //         { id: "billing", label: "Billing", onClick: () => changePage("billing") },
// // // // //       ],
// // // // //     },
// // // // //     {
// // // // //       id: "customers",
// // // // //       label: "Customers",
// // // // //       icon: <UserCheck size={20} />,
// // // // //       submenu: [
// // // // //         { id: "customers", label: "View Customers", onClick: () => changePage("customers") },
// // // // //         { id: "customerSignup", label: "Add Customer", onClick: () => changePage("customerSignup") },
// // // // //         { id: "khata2", label: "Khatabook", onClick: () => changePage("khata2") },
// // // // //       ],
// // // // //     },
// // // // //     {
// // // // //       id: "suppliers",
// // // // //       label: "Suppliers",
// // // // //       icon: <Truck size={20} />,
// // // // //       onClick: () => changePage("suppliers"),
// // // // //     },
// // // // //     {
// // // // //       id: "stockTracking",
// // // // //       label: "Stock Tracking",
// // // // //       icon: <Layers size={20} />,
// // // // //       onClick: () => changePage("stockTracking"),
// // // // //     },
// // // // //     {
// // // // //       id: "users",
// // // // //       label: "User Management",
// // // // //       icon: <User size={20} />,
// // // // //       onClick: () => changePage("users"),
// // // // //     },
// // // // //     {
// // // // //       id: "settings",
// // // // //       label: "Settings",
// // // // //       icon: <Settings size={20} />,
// // // // //       onClick: () => {},
// // // // //     },
// // // // //   ]

// // // // //   // Page loading simulation
// // // // //   useEffect(() => {
// // // // //     const timer = setTimeout(() => {
// // // // //       setLoading(false)
// // // // //       setTimeout(() => setAnimateCharts(true), 500)
// // // // //     }, 800)
// // // // //     return () => clearTimeout(timer)
// // // // //   }, [currentPage])

// // // // //   // Toggle sidebar on mobile
// // // // //   useEffect(() => {
// // // // //     if (window.innerWidth < 768) {
// // // // //       setSidebarOpen(false)
// // // // //     }
// // // // //   }, [location])

// // // // //   // Resize handling
// // // // //   useEffect(() => {
// // // // //     const handleResize = () => {
// // // // //       if (window.innerWidth >= 768) {
// // // // //         setSidebarOpen(true)
// // // // //       }
// // // // //     }

// // // // //     window.addEventListener("resize", handleResize)
// // // // //     handleResize()
// // // // //     return () => window.removeEventListener("resize", handleResize)
// // // // //   }, [])

// // // // //   // Handle clicks outside dropdowns
// // // // //   useEffect(() => {
// // // // //     const handleClickOutside = (event) => {
// // // // //       if (notificationRef.current && !notificationRef.current.contains(event.target)) {
// // // // //         setNotificationsOpen(false)
// // // // //       }
// // // // //       if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
// // // // //         setUserMenuOpen(false)
// // // // //       }
// // // // //     }

// // // // //     document.addEventListener("mousedown", handleClickOutside)
// // // // //     return () => document.removeEventListener("mousedown", handleClickOutside)
// // // // //   }, [])

// // // // //   // Toggle submenu expandable sections
// // // // //   const toggleMenu = (menu) => {
// // // // //     setExpandedMenus((prev) => ({
// // // // //       ...prev,
// // // // //       [menu]: !prev[menu],
// // // // //     }))
// // // // //   }

// // // // //   // Change current page based on menu click
// // // // //   const changePage = (page) => {
// // // // //     setCurrentPage(page)
// // // // //     setLoading(true) // Show loading state when changing pages
// // // // //     if (window.innerWidth < 768) {
// // // // //       setSidebarOpen(false)
// // // // //     }
// // // // //   }

// // // // //   // Toggle dark mode
// // // // //   const toggleDarkMode = () => {
// // // // //     setDarkMode(!darkMode)
// // // // //     document.documentElement.classList.toggle("dark")
// // // // //   }

// // // // //   // Render main dashboard content
// // // // //   const renderDashboard = () => (
// // // // //     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
// // // // //       {/* Welcome section */}
// // // // //       <div className="mb-6">
// // // // //         <h2 className="text-xl font-semibold text-gray-800 dark:text-white transition-colors">
// // // // //           Welcome to {storeName || "Your Store"}
// // // // //         </h2>
// // // // //         <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
// // // // //           Here's a quick summary of your store performance today
// // // // //         </p>
// // // // //       </div>

// // // // //       {/* Stats cards */}
// // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
// // // // //         {stats.map((stat, index) => (
// // // // //           <motion.div
// // // // //             key={index}
// // // // //             initial={{ y: 20, opacity: 0 }}
// // // // //             animate={{ y: 0, opacity: 1 }}
// // // // //             transition={{ duration: 0.3, delay: index * 0.1 }}
// // // // //             whileHover={{ y: -4, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
// // // // //             className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700"
// // // // //           >
// // // // //             <div className="flex justify-between items-start mb-3">
// // // // //               <div className="text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors">{stat.title}</div>
// // // // //               <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700 transition-colors">{stat.icon}</div>
// // // // //             </div>
// // // // //             <div className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">{stat.value}</div>
// // // // //             <div
// // // // //               className={`text-sm mt-2 flex items-center ${stat.up ? "text-green-600 dark:text-green-500" : "text-red-600 dark:text-red-500"} transition-colors`}
// // // // //             >
// // // // //               {stat.change}
// // // // //               {stat.up ? (
// // // // //                 <svg
// // // // //                   className="w-4 h-4 ml-1"
// // // // //                   fill="none"
// // // // //                   stroke="currentColor"
// // // // //                   viewBox="0 0 24 24"
// // // // //                   xmlns="http://www.w3.org/2000/svg"
// // // // //                 >
// // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
// // // // //                 </svg>
// // // // //               ) : (
// // // // //                 <svg
// // // // //                   className="w-4 h-4 ml-1"
// // // // //                   fill="none"
// // // // //                   stroke="currentColor"
// // // // //                   viewBox="0 0 24 24"
// // // // //                   xmlns="http://www.w3.org/2000/svg"
// // // // //                 >
// // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// // // // //                 </svg>
// // // // //               )}
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* Main dashboard layout */}
// // // // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // // // //         {/* Transactions */}
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0, y: 20 }}
// // // // //           animate={{ opacity: 1, y: 0 }}
// // // // //           transition={{ duration: 0.3, delay: 0.2 }}
// // // // //           className="lg:col-span-2"
// // // // //         >
// // // // //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 mb-6 border border-gray-100 dark:border-gray-700">
// // // // //             <div className="flex justify-between items-center mb-6">
// // // // //               <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
// // // // //                 <ShoppingBag size={18} className="mr-2 text-blue-600 dark:text-blue-400" />
// // // // //                 Recent Transactions
// // // // //               </h3>
// // // // //               <button
// // // // //                 onClick={() => changePage("dailySales")}
// // // // //                 className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center"
// // // // //               >
// // // // //                 View All
// // // // //                 <ChevronRight size={16} className="ml-1" />
// // // // //               </button>
// // // // //             </div>

// // // // //             <div className="overflow-x-auto">
// // // // //               <table className="w-full">
// // // // //                 <thead>
// // // // //                   <tr className="border-b border-gray-200 dark:border-gray-700">
// // // // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
// // // // //                       ID
// // // // //                     </th>
// // // // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
// // // // //                       Customer
// // // // //                     </th>
// // // // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
// // // // //                       Amount
// // // // //                     </th>
// // // // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
// // // // //                       Time
// // // // //                     </th>
// // // // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
// // // // //                       Status
// // // // //                     </th>
// // // // //                   </tr>
// // // // //                 </thead>
// // // // //                 <tbody>
// // // // //                   {recentTransactions.map((transaction, index) => (
// // // // //                     <motion.tr
// // // // //                       key={index}
// // // // //                       initial={{ opacity: 0, y: 10 }}
// // // // //                       animate={{ opacity: 1, y: 0 }}
// // // // //                       transition={{ duration: 0.2, delay: index * 0.1 }}
// // // // //                       className="border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
// // // // //                     >
// // // // //                       <td className="py-4 px-3 text-sm font-medium text-gray-700 dark:text-gray-300">
// // // // //                         {transaction.id}
// // // // //                       </td>
// // // // //                       <td className="py-4 px-3 text-sm text-gray-700 dark:text-gray-300">{transaction.customer}</td>
// // // // //                       <td className="py-4 px-3 text-sm font-medium text-gray-900 dark:text-white">
// // // // //                         {transaction.amount}
// // // // //                       </td>
// // // // //                       <td className="py-4 px-3 text-sm text-gray-500 dark:text-gray-400">{transaction.date}</td>
// // // // //                       <td className="py-4 px-3 text-sm">
// // // // //                         <span
// // // // //                           className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
// // // // //                             transaction.status === "completed"
// // // // //                               ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
// // // // //                               : transaction.status === "pending"
// // // // //                                 ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
// // // // //                                 : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
// // // // //                           }`}
// // // // //                         >
// // // // //                           {transaction.status === "completed" && (
// // // // //                             <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-green-600 dark:bg-green-400"></span>
// // // // //                           )}
// // // // //                           {transaction.status === "pending" && (
// // // // //                             <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-yellow-600 dark:bg-yellow-400"></span>
// // // // //                           )}
// // // // //                           {transaction.status === "failed" && (
// // // // //                             <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-red-600 dark:bg-red-400"></span>
// // // // //                           )}
// // // // //                           {transaction.status}
// // // // //                         </span>
// // // // //                       </td>
// // // // //                     </motion.tr>
// // // // //                   ))}
// // // // //                 </tbody>
// // // // //               </table>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Sales Chart */}
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, y: 20 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 0.3, delay: 0.3 }}
// // // // //             className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 mb-6 border border-gray-100 dark:border-gray-700"
// // // // //           >
// // // // //             <div className="flex justify-between items-center mb-6">
// // // // //               <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
// // // // //                 <TrendingUp size={18} className="mr-2 text-indigo-600 dark:text-indigo-400" />
// // // // //                 Sales Overview
// // // // //               </h3>
// // // // //               <button
// // // // //                 onClick={() => changePage("salesChart")}
// // // // //                 className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors flex items-center"
// // // // //               >
// // // // //                 Detailed Report
// // // // //                 <ChevronRight size={16} className="ml-1" />
// // // // //               </button>
// // // // //             </div>

// // // // //             <div className="h-80 relative">
// // // // //               {animateCharts ? (
// // // // //                 <div className="h-full">
// // // // //                   <div className="h-full flex items-end space-x-4 px-2">
// // // // //                     {salesData.map((item, index) => (
// // // // //                       <div key={index} className="flex-1 flex items-center">
// // // // //                         <div className="w-full h-full flex flex-col justify-end space-y-2">
// // // // //                           <motion.div
// // // // //                             initial={{ height: 0 }}
// // // // //                             animate={{ height: `${(item.sales / 7000) * 100}%` }}
// // // // //                             transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
// // // // //                             className="w-full bg-gradient-to-t from-blue-500 to-blue-400 dark:from-blue-600 dark:to-blue-500 rounded-t-md relative group"
// // // // //                           >
// // // // //                             <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
// // // // //                               ${item.sales}
// // // // //                             </div>
// // // // //                           </motion.div>
// // // // //                           <motion.div
// // // // //                             initial={{ height: 0 }}
// // // // //                             animate={{ height: `${(item.target / 7000) * 100}%` }}
// // // // //                             transition={{ duration: 0.8, delay: index * 0.1 + 0.2, type: "spring" }}
// // // // //                             className="w-full bg-gradient-to-t from-gray-300 to-gray-200 dark:from-gray-600 dark:to-gray-500 rounded-t-md relative group"
// // // // //                           >
// // // // //                             <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
// // // // //                               Target: ${item.target}
// // // // //                             </div>
// // // // //                           </motion.div>
// // // // //                         </div>
// // // // //                         <div className="text-xs mt-2 text-gray-600 dark:text-gray-400 font-medium">{item.month}</div>
// // // // //                       </div>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                   <div className="mt-4 flex justify-between items-center text-sm">
// // // // //                     <div className="flex items-center">
// // // // //                       <div className="w-3 h-3 bg-blue-500 rounded-sm mr-2"></div>
// // // // //                       <span className="text-gray-700 dark:text-gray-300">Actual Sales</span>
// // // // //                     </div>
// // // // //                     <div className="flex items-center">
// // // // //                       <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-sm mr-2"></div>
// // // // //                       <span className="text-gray-700 dark:text-gray-300">Target</span>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               ) : (
// // // // //                 <div className="h-full flex items-center justify-center">
// // // // //                   <div className="animate-pulse text-gray-400 dark:text-gray-500">Loading chart data...</div>
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         </motion.div>

// // // // //         {/* Sidebar content */}
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0, x: 20 }}
// // // // //           animate={{ opacity: 1, x: 0 }}
// // // // //           transition={{ duration: 0.3, delay: 0.4 }}
// // // // //           className="space-y-6"
// // // // //         >
// // // // //           {/* Quick Access */}
// // // // //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
// // // // //             <h3 className="font-medium text-gray-800 dark:text-white transition-colors mb-4 flex items-center">
// // // // //               <Zap size={18} className="mr-2 text-amber-500" />
// // // // //               Quick Access
// // // // //             </h3>
// // // // //             <div className="grid grid-cols-2 gap-3">
// // // // //               {[
// // // // //                 {
// // // // //                   icon: <Package size={20} />,
// // // // //                   label: "Products",
// // // // //                   page: "products",
// // // // //                   color: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
// // // // //                 },
// // // // //                 {
// // // // //                   icon: <Users size={20} />,
// // // // //                   label: "Employees",
// // // // //                   page: "employees",
// // // // //                   color: "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
// // // // //                 },
// // // // //                 {
// // // // //                   icon: <DollarSign size={20} />,
// // // // //                   label: "Sales",
// // // // //                   page: "dailySales",
// // // // //                   color: "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400",
// // // // //                 },
// // // // //                 {
// // // // //                   icon: <CreditCard size={20} />,
// // // // //                   label: "Billing",
// // // // //                   page: "billing",
// // // // //                   color: "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
// // // // //                 },
// // // // //                 {
// // // // //                   icon: <Layers size={20} />,
// // // // //                   label: "Stock",
// // // // //                   page: "stockTracking",
// // // // //                   color: "bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
// // // // //                 },
// // // // //                 {
// // // // //                   icon: <Truck size={20} />,
// // // // //                   label: "Suppliers",
// // // // //                   page: "suppliers",
// // // // //                   color: "bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400",
// // // // //                 },
// // // // //               ].map((item, index) => (
// // // // //                 <motion.button
// // // // //                   key={index}
// // // // //                   whileHover={{ scale: 1.03 }}
// // // // //                   whileTap={{ scale: 0.97 }}
// // // // //                   onClick={() => changePage(item.page)}
// // // // //                   className={`flex items-center justify-center p-3 rounded-lg transition-all ${item.color} hover:shadow-md`}
// // // // //                 >
// // // // //                   <div className="flex flex-col items-center">
// // // // //                     <div className="mb-1">{item.icon}</div>
// // // // //                     <span className="text-base font-medium">{item.label}</span>
// // // // //                   </div>
// // // // //                 </motion.button>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Low Stock Alert */}
// // // // //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
// // // // //             <div className="flex justify-between items-center mb-4">
// // // // //               <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
// // // // //                 <AlertTriangle size={20} className="mr-2 text-red-500" />
// // // // //                 Low Stock Alert
// // // // //               </h3>
// // // // //               <button
// // // // //                 onClick={() => changePage("restockAlerts")}
// // // // //                 className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
// // // // //               >
// // // // //                 All Alerts
// // // // //               </button>
// // // // //             </div>

// // // // //             <div className="space-y-3">
// // // // //               {lowStockItems.map((item, index) => (
// // // // //                 <motion.div
// // // // //                   key={index}
// // // // //                   initial={{ opacity: 0, y: 10 }}
// // // // //                   animate={{ opacity: 1, y: 0 }}
// // // // //                   transition={{ duration: 0.2, delay: index * 0.1 }}
// // // // //                   className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-750 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
// // // // //                 >
// // // // //                   <div className="flex items-start space-x-3">
// // // // //                     <div
// // // // //                       className={`mt-0.5 p-1.5 rounded-md ${
// // // // //                         item.reorderStatus === "urgent"
// // // // //                           ? "bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400"
// // // // //                           : item.reorderStatus === "pending"
// // // // //                             ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-400"
// // // // //                             : "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400"
// // // // //                       }`}
// // // // //                     >
// // // // //                       <Layers size={16} />
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <div className="font-medium text-sm text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
// // // // //                         {item.name}
// // // // //                       </div>
// // // // //                       <div className="text-xs text-gray-500 dark:text-gray-400">SKU: {item.id}</div>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                   <div
// // // // //                     className={`text-sm font-medium ${
// // // // //                       (item.current / item.min) < 0.5
// // // // //                         ? "text-red-600 dark:text-red-400"
// // // // //                         : item.current / item.min < 0.75
// // // // //                           ? "text-yellow-600 dark:text-yellow-400"
// // // // //                           : "text-gray-700 dark:text-gray-300"
// // // // //                     }`}
// // // // //                   >
// // // // //                     {item.current}/{item.min}
// // // // //                   </div>
// // // // //                 </motion.div>
// // // // //               ))}
// // // // //             </div>

// // // // //             <div className="mt-4">
// // // // //               <motion.button
// // // // //                 whileHover={{ scale: 1.02 }}
// // // // //                 whileTap={{ scale: 0.98 }}
// // // // //                 onClick={() => changePage("suppliers")}
// // // // //                 className="flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all text-sm w-full shadow-sm hover:shadow"
// // // // //               >
// // // // //                 <Truck size={16} className="mr-2" />
// // // // //                 Place Restock Order
// // // // //               </motion.button>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Recent activity timeline */}
// // // // //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
// // // // //             <h3 className="font-medium text-gray-800 dark:text-white transition-colors mb-4 flex items-center">
// // // // //               <Calendar size={20} className="mr-2 text-purple-500" />
// // // // //               Recent Activity
// // // // //             </h3>

// // // // //             <div className="relative">
// // // // //               {/* Timeline line */}
// // // // //               <div className="absolute top-0 bottom-0 left-3 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

// // // // //               <div className="space-y-4">
// // // // //                 {[
// // // // //                   {
// // // // //                     time: "9:32 AM",
// // // // //                     title: "New order received",
// // // // //                     description: "Order #4592 from Michael T.",
// // // // //                     color: "bg-green-500",
// // // // //                   },
// // // // //                   {
// // // // //                     time: "11:15 AM",
// // // // //                     title: "Low stock notification",
// // // // //                     description: "Vitamin B Complex needs restock",
// // // // //                     color: "bg-yellow-500",
// // // // //                   },
// // // // //                   {
// // // // //                     time: "1:45 PM",
// // // // //                     title: "Employee login",
// // // // //                     description: "Sarah logged in for afternoon shift",
// // // // //                     color: "bg-blue-500",
// // // // //                   },
// // // // //                   {
// // // // //                     time: "2:30 PM",
// // // // //                     title: "System report",
// // // // //                     description: "Daily inventory check completed",
// // // // //                     color: "bg-purple-500",
// // // // //                   },
// // // // //                 ].map((activity, index) => (
// // // // //                   <motion.div
// // // // //                     key={index}
// // // // //                     initial={{ opacity: 0, x: -10 }}
// // // // //                     animate={{ opacity: 1, x: 0 }}
// // // // //                     transition={{ duration: 0.3, delay: index * 0.1 }}
// // // // //                     className="relative pl-8"
// // // // //                   >
// // // // //                     <div
// // // // //                       className={`absolute left-0 top-1 h-6 w-6 rounded-full flex items-center justify-center ${activity.color} shadow-md`}
// // // // //                     >
// // // // //                       <span className="h-3 w-3 bg-white rounded-full"></span>
// // // // //                     </div>
// // // // //                     <div className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</div>
// // // // //                     <div className="font-medium text-sm text-gray-800 dark:text-white">{activity.title}</div>
// // // // //                     <div className="text-xs text-gray-500 dark:text-gray-400">{activity.description}</div>
// // // // //                   </motion.div>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </motion.div>
// // // // //       </div>
// // // // //     </motion.div>
// // // // //   )

// // // // //   // Render the selected page content
// // // // //   const renderContent = () => {
// // // // //     switch (currentPage) {
// // // // //       case "dashboard":
// // // // //         return renderDashboard()
// // // // //       case "Login":
// // // // //         return <LoginPage />
// // // // //       case "products":
// // // // //         return <ProductDashboard />
// // // // //       case "employees":
// // // // //         return <EmployeeManagement />
// // // // //       case "roles":
// // // // //         return <RoleDistribution />
// // // // //       case "dailySales":
// // // // //         return <DailySales />
// // // // //       case "stockTracking":
// // // // //         return <StockTracking />
// // // // //       case "employeeSearch":
// // // // //         return <EmployeeSearch />
// // // // //       case "billing":
// // // // //         return <Billing />
// // // // //       case "customerSignup":
// // // // //         return <CustomerSignupForm />
// // // // //       case "customers":
// // // // //         return <ViewCustomers />
// // // // //       case "salesChart":
// // // // //         return <SalesChart />
// // // // //       case "productSales":
// // // // //         return <ProductSales />
// // // // //       case "inventory":
// // // // //         return <InventoryDashboard />
// // // // //       case "users":
// // // // //         return <UserManagementPage />
// // // // //       case "restockAlerts":
// // // // //         return <ProductDashboard2 />
// // // // //       case "suppliers":
// // // // //         return <SupplierManagement />
// // // // //       case "batch":
// // // // //         return <BatchExpiryTracker />
// // // // //       case "damage":
// // // // //         return <DamageItemsManagement />
// // // // //       case "emp":
// // // // //         return <EmployeeSales />
// // // // //       case "attendance":
// // // // //         return <EmployeeAttendanceForm />
// // // // //       case "face":
// // // // //         return <FacialRecognitionAttendance />
// // // // //       case "add_face":
// // // // //         return <AddEmployeeFace />
// // // // //       case "salaries":
// // // // //         return <EmployeesSalaryManagement />
// // // // //       case "analytics":
// // // // //         return <SalesAnalyticsDashboard />
// // // // //       case "khata2":
// // // // //         return <KhatabookPage />
// // // // //       case "UserProfile":
// // // // //         return <UserProfile />
// // // // //       case "category":
// // // // //         return <SearchProductsByCategory />
// // // // //       default:
// // // // //         return renderDashboard()
// // // // //     }
// // // // //   }

// // // // //   return (
// // // // //     <div className={`min-h-screen ${darkMode ? "dark" : ""} bg-gray-50 dark:bg-gray-900 flex`}>
// // // // //       {/* Mobile overlay for sidebar */}
// // // // //       {sidebarOpen && (
// // // // //         <div className="fixed inset-0 bg-black/50 md:hidden z-20" onClick={() => setSidebarOpen(false)} />
// // // // //       )}

// // // // //       {/* Sidebar */}
// // // // //       <aside
// // // // //         className={`fixed md:static inset-y-0 left-0 w-72 bg-white dark:bg-gray-800 shadow-lg
// // // // //           transform transition-transform duration-300 ease-in-out z-30 overflow-hidden
// // // // //           ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
// // // // //       >
// // // // //         <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-700">
// // // // //           <div className="flex items-center space-x-2">
// // // // //             <div className="h-8 w-8 rounded-md bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold">
// // // // //               S
// // // // //             </div>
// // // // //             <h1 className="text-xl font-bold text-gray-800 dark:text-white truncate">{storeName || "Store Manager"}</h1>
// // // // //           </div>
// // // // //           <button
// // // // //             onClick={() => setSidebarOpen(false)}
// // // // //             className="md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
// // // // //           >
// // // // //             <X size={20} />
// // // // //           </button>
// // // // //         </div>

// // // // //         <div className="p-4">
// // // // //           <div className="flex items-center space-x-3 mb-6 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
// // // // //             <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
// // // // //               A
// // // // //             </div>
// // // // //             <div>
// // // // //               <div className="font-medium text-gray-800 dark:text-white">Admin User</div>
// // // // //               <div className="text-sm text-gray-500 dark:text-gray-400">Super Admin</div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Search box */}
// // // // //           <div className="relative mb-6">
// // // // //             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // // //               <Search size={16} className="text-gray-400" />
// // // // //             </div>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Search..."
// // // // //               className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white text-sm"
// // // // //             />
// // // // //           </div>

// // // // //           <nav>
// // // // //             <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 pl-4">
// // // // //               Main
// // // // //             </div>
// // // // //             <ul className="space-y-1 mb-6">
// // // // //               {navigationMenu.map((item) => (
// // // // //                 <li key={item.id}>
// // // // //                   {item.submenu ? (
// // // // //                     <div>
// // // // //                       <button
// // // // //                         onClick={() => toggleMenu(item.id)}
// // // // //                         className={`flex items-center justify-between w-full p-3 rounded-lg 
// // // // //                           ${expandedMenus[item.id] ? "bg-gray-100 dark:bg-gray-700" : "hover:bg-gray-100 dark:hover:bg-gray-700"} 
// // // // //                           transition-colors duration-200`}
// // // // //                       >
// // // // //                         <div className="flex items-center">
// // // // //                           <div
// // // // //                             className={`mr-3 ${
// // // // //                               currentPage === item.id || item.submenu?.some((sub) => sub.id === currentPage)
// // // // //                                 ? "text-blue-600 dark:text-blue-400"
// // // // //                                 : "text-gray-500 dark:text-gray-400"
// // // // //                             }`}
// // // // //                           >
// // // // //                             {item.icon}
// // // // //                           </div>
// // // // //                           <span
// // // // //                             className={`font-medium ${
// // // // //                               currentPage === item.id || item.submenu?.some((sub) => sub.id === currentPage)
// // // // //                                 ? "text-blue-600 dark:text-blue-400"
// // // // //                                 : "text-gray-700 dark:text-gray-300"
// // // // //                             }`}
// // // // //                           >
// // // // //                             {item.label}
// // // // //                           </span>
// // // // //                         </div>
// // // // //                         {expandedMenus[item.id] ? (
// // // // //                           <ChevronDown size={18} className="text-gray-400" />
// // // // //                         ) : (
// // // // //                           <ChevronRight size={18} className="text-gray-400" />
// // // // //                         )}
// // // // //                       </button>

// // // // //                       {expandedMenus[item.id] && (
// // // // //                         <motion.ul
// // // // //                           initial={{ opacity: 0, height: 0 }}
// // // // //                           animate={{ opacity: 1, height: "auto" }}
// // // // //                           exit={{ opacity: 0, height: 0 }}
// // // // //                           transition={{ duration: 0.2 }}
// // // // //                           className="pl-10 pt-1 pb-1 space-y-1"
// // // // //                         >
// // // // //                           {item.submenu.map((subItem) => (
// // // // //                             <li key={subItem.id}>
// // // // //                               <button
// // // // //                                 onClick={subItem.onClick}
// // // // //                                 className={`p-2 rounded-md text-sm w-full text-left transition-colors duration-200
// // // // //                                   ${
// // // // //                                     currentPage === subItem.id
// // // // //                                       ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium"
// // // // //                                       : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-300"
// // // // //                                   }`}
// // // // //                               >
// // // // //                                 {subItem.label}
// // // // //                               </button>
// // // // //                             </li>
// // // // //                           ))}
// // // // //                         </motion.ul>
// // // // //                       )}
// // // // //                     </div>
// // // // //                   ) : (
// // // // //                     <button
// // // // //                       onClick={item.onClick}
// // // // //                       className={`flex items-center w-full p-3 rounded-lg transition-colors duration-200
// // // // //                         ${
// // // // //                           currentPage === item.id
// // // // //                             ? "bg-blue-50 dark:bg-blue-900/30"
// // // // //                             : "hover:bg-gray-100 dark:hover:bg-gray-700"
// // // // //                         }`}
// // // // //                     >
// // // // //                       <div
// // // // //                         className={`mr-3 ${
// // // // //                           currentPage === item.id
// // // // //                             ? "text-blue-600 dark:text-blue-400"
// // // // //                             : "text-gray-500 dark:text-gray-400"
// // // // //                         }`}
// // // // //                       >
// // // // //                         {item.icon}
// // // // //                       </div>
// // // // //                       <span
// // // // //                         className={`font-medium ${
// // // // //                           currentPage === item.id
// // // // //                             ? "text-blue-600 dark:text-blue-400"
// // // // //                             : "text-gray-700 dark:text-gray-300"
// // // // //                         }`}
// // // // //                       >
// // // // //                         {item.label}
// // // // //                       </span>
// // // // //                     </button>
// // // // //                   )}
// // // // //                 </li>
// // // // //               ))}
// // // // //             </ul>

// // // // //             {/* <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 pl-4">
// // // // //               Support
// // // // //             </div>
// // // // //             <ul className="space-y-1">
// // // // //               <li>
// // // // //                 <button className="flex items-center w-full p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
// // // // //                   <HelpCircle size={20} className="mr-3 text-gray-500 dark:text-gray-400" />
// // // // //                   <span className="font-medium">Help Center</span>
// // // // //                 </button>
// // // // //               </li>
// // // // //               <li>
// // // // //                 <button className="flex items-center w-full p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
// // // // //                   <FileText size={20} className="mr-3 text-gray-500 dark:text-gray-400" />
// // // // //                   <span className="font-medium">Documentation</span>
// // // // //                 </button>
// // // // //               </li>
// // // // //             </ul> */}
// // // // //           </nav>
// // // // //         </div>

// // // // //         {/* Bottom section */}
// // // // //         {/* <div className="absolute bottom-0 left-0 right-0 p-4">
// // // // //           <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
// // // // //             <div className="flex items-center mb-3">
// // // // //               <Shield size={18} className="text-blue-600 dark:text-blue-400 mr-2" />
// // // // //               <h4 className="font-medium text-blue-600 dark:text-blue-400">Pro Plan</h4>
// // // // //             </div>
// // // // //             <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
// // // // //               Get access to all features and premium support.
// // // // //             </p>
// // // // //             <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
// // // // //               Upgrade Now
// // // // //             </button>
// // // // //           </div>
// // // // //         </div> */}
// // // // //       </aside>

// // // // //       {/* Mobile menu button */}
// // // // //       <button
// // // // //         onClick={() => setSidebarOpen(true)}
// // // // //         className={`md:hidden fixed top-4 left-4 z-10 p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300
// // // // //           shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200
// // // // //           ${sidebarOpen ? "hidden" : "block"}`}
// // // // //       >
// // // // //         <Menu size={24} />
// // // // //       </button>

// // // // //       {/* Main content */}
// // // // //       <main className="flex-1 overflow-auto">
// // // // //         {/* Top header */}
// // // // //         <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
// // // // //           <div className="px-6 py-4 flex justify-between items-center">
// // // // //             <div className="flex items-center">
// // // // //               <h1 className="text-xl font-bold text-gray-800 dark:text-white">
// // // // //                 {currentPage === "dashboard"
// // // // //                   ? "Dashboard"
// // // // //                   : currentPage === "products"
// // // // //                     ? "Products Management"
// // // // //                     : currentPage === "employees"
// // // // //                       ? "Employee Management"
// // // // //                       : currentPage === "dailySales"
// // // // //                         ? "Sales Dashboard"
// // // // //                         : currentPage === "stockTracking"
// // // // //                           ? "Stock Tracking"
// // // // //                           : currentPage === "suppliers"
// // // // //                             ? "Supplier Management"
// // // // //                             : currentPage === "users"
// // // // //                               ? "User Management"
// // // // //                               : currentPage === "customers"
// // // // //                                 ? "Customer Management"
// // // // //                                 : currentPage === "billing"
// // // // //                                   ? "Billing & Invoices"
// // // // //                                   : "Admin Dashboard"}
// // // // //               </h1>
// // // // //             </div>

// // // // //             <div className="flex items-center space-x-4">
// // // // //               {/* Notifications */}
// // // // //               <div className="relative" ref={notificationRef}>
// // // // //                 <button
// // // // //                   onClick={() => setNotificationsOpen(!notificationsOpen)}
// // // // //                   className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative"
// // // // //                 >
// // // // //                   <Bell size={20} className="text-gray-600 dark:text-gray-400" />
// // // // //                   <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
// // // // //                     3
// // // // //                   </span>
// // // // //                 </button>

// // // // //                 <AnimatePresence>
// // // // //                   {notificationsOpen && (
// // // // //                     <motion.div
// // // // //                       initial={{ opacity: 0, y: -10 }}
// // // // //                       animate={{ opacity: 1, y: 0 }}
// // // // //                       exit={{ opacity: 0, y: -10 }}
// // // // //                       transition={{ duration: 0.2 }}
// // // // //                       className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-40 border border-gray-200 dark:border-gray-700"
// // // // //                     >
// // // // //                       <div className="p-4">
// // // // //                         <div className="flex justify-between items-center mb-4">
// // // // //                           <h3 className="font-medium text-gray-800 dark:text-white">Notifications</h3>
// // // // //                           <button className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
// // // // //                             Mark all as read
// // // // //                           </button>
// // // // //                         </div>
// // // // //                         <div className="space-y-3">
// // // // //                           {notifications.map((notification) => (
// // // // //                             <div key={notification.id} className="flex items-start space-x-3">
// // // // //                               <div
// // // // //                                 className={`p-2 rounded-full ${
// // // // //                                   notification.type === "alert"
// // // // //                                     ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
// // // // //                                     : notification.type === "order"
// // // // //                                       ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
// // // // //                                       : notification.type === "reminder"
// // // // //                                         ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
// // // // //                                         : "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
// // // // //                                 }`}
// // // // //                               >
// // // // //                                 <Bell size={16} />
// // // // //                               </div>
// // // // //                               <div>
// // // // //                                 <div className="text-sm font-medium text-gray-800 dark:text-white">
// // // // //                                   {notification.title}
// // // // //                                 </div>
// // // // //                                 <div className="text-xs text-gray-500 dark:text-gray-400">{notification.message}</div>
// // // // //                                 <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{notification.time}</div>
// // // // //                               </div>
// // // // //                             </div>
// // // // //                           ))}
// // // // //                         </div>
// // // // //                         <button className="w-full mt-4 text-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
// // // // //                           View all notifications
// // // // //                         </button>
// // // // //                       </div>
// // // // //                     </motion.div>
// // // // //                   )}
// // // // //                 </AnimatePresence>
// // // // //               </div>

// // // // //               {/* Dark mode toggle */}
// // // // //               <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
// // // // //                 {darkMode ? (
// // // // //                   <svg
// // // // //                     className="w-5 h-5 text-gray-600 dark:text-gray-400"
// // // // //                     fill="none"
// // // // //                     stroke="currentColor"
// // // // //                     viewBox="0 0 24 24"
// // // // //                     xmlns="http://www.w3.org/2000/svg"
// // // // //                   >
// // // // //                     <path
// // // // //                       strokeLinecap="round"
// // // // //                       strokeLinejoin="round"
// // // // //                       strokeWidth={2}
// // // // //                       d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
// // // // //                     />
// // // // //                   </svg>
// // // // //                 ) : (
// // // // //                   <svg
// // // // //                     className="w-5 h-5 text-gray-600 dark:text-gray-400"
// // // // //                     fill="none"
// // // // //                     stroke="currentColor"
// // // // //                     viewBox="0 0 24 24"
// // // // //                     xmlns="http://www.w3.org/2000/svg"
// // // // //                   >
// // // // //                     <path
// // // // //                       strokeLinecap="round"
// // // // //                       strokeLinejoin="round"
// // // // //                       strokeWidth={2}
// // // // //                       d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
// // // // //                     />
// // // // //                   </svg>
// // // // //                 )}
// // // // //               </button>

// // // // //               {/* User menu */}
// // // // //               <div className="relative" ref={userMenuRef}>
// // // // //                 <button
// // // // //                   onClick={() => setUserMenuOpen(!userMenuOpen)}
// // // // //                   className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
// // // // //                 >
// // // // //                   <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
// // // // //                     A
// // // // //                   </div>
// // // // //                   <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300">Admin</span>
// // // // //                   <ChevronDown size={16} className="hidden md:block text-gray-500 dark:text-gray-400" />
// // // // //                 </button>

// // // // //                 <AnimatePresence>
// // // // //                   {userMenuOpen && (
// // // // //                     <motion.div
// // // // //                       initial={{ opacity: 0, y: -10 }}
// // // // //                       animate={{ opacity: 1, y: 0 }}
// // // // //                       exit={{ opacity: 0, y: -10 }}
// // // // //                       transition={{ duration: 0.2 }}
// // // // //                       className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-40 border border-gray-200 dark:border-gray-700"
// // // // //                     >
// // // // //                       <div className="p-2">
// // // // //                         <button
// // // // //                           onClick={() => navigate("/UserProfile")}
// // // // //                           className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left flex items-center"
// // // // //                         >
// // // // //                           <User size={16} className="mr-2 text-gray-500 dark:text-gray-400" />
// // // // //                           Profile
// // // // //                         </button>
// // // // //                         <button
// // // // //                           onClick={toggleDarkMode}
// // // // //                           className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left flex items-center"
// // // // //                         >
// // // // //                           {darkMode ? (
// // // // //                             <>
// // // // //                               <svg
// // // // //                                 className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"
// // // // //                                 fill="none"
// // // // //                                 stroke="currentColor"
// // // // //                                 viewBox="0 0 24 24"
// // // // //                                 xmlns="http://www.w3.org/2000/svg"
// // // // //                               >
// // // // //                                 <path
// // // // //                                   strokeLinecap="round"
// // // // //                                   strokeLinejoin="round"
// // // // //                                   strokeWidth={2}
// // // // //                                   d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
// // // // //                                 />
// // // // //                               </svg>
// // // // //                               Light Mode
// // // // //                             </>
// // // // //                           ) : (
// // // // //                             <>
// // // // //                               <svg
// // // // //                                 className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"
// // // // //                                 fill="none"
// // // // //                                 stroke="currentColor"
// // // // //                                 viewBox="0 0 24 24"
// // // // //                                 xmlns="http://www.w3.org/2000/svg"
// // // // //                               >
// // // // //                                 <path
// // // // //                                   strokeLinecap="round"
// // // // //                                   strokeLinejoin="round"
// // // // //                                   strokeWidth={2}
// // // // //                                   d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
// // // // //                                 />
// // // // //                               </svg>
// // // // //                               Dark Mode
// // // // //                             </>
// // // // //                           )}
// // // // //                         </button>
// // // // //                         <button
// // // // //                           onClick={() => navigate("/settings")}
// // // // //                           className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left flex items-center"
// // // // //                         >
// // // // //                           <Settings size={16} className="mr-2 text-gray-500 dark:text-gray-400" />
// // // // //                           Settings
// // // // //                         </button>
// // // // //                         <div className="my-1 border-t border-gray-200 dark:border-gray-700"></div>
// // // // //                         <button
// // // // //                           onClick={() => navigate("/LoginPage")}
// // // // //                           className="w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg text-left flex items-center"
// // // // //                         >
// // // // //                           <LogOut size={16} className="mr-2" />
// // // // //                           Logout
// // // // //                         </button>
// // // // //                       </div>
// // // // //                     </motion.div>
// // // // //                   )}
// // // // //                 </AnimatePresence>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Page content */}
// // // // //         <div className="p-6">
// // // // //           {loading ? (
// // // // //             <div className="flex items-center justify-center h-64">
// // // // //               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
// // // // //             </div>
// // // // //           ) : (
// // // // //             renderContent()
// // // // //           )}
// // // // //         </div>
// // // // //       </main>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default AdminDashboard

// // // // "use client"

// // // // import { useState, useContext, useEffect, useRef } from "react"
// // // // import { StoreContext } from "./StoreContext"
// // // // import { useLocation, useNavigate } from "react-router-dom"
// // // // import {
// // // //   Menu,
// // // //   Package,
// // // //   Users,
// // // //   BarChart2,
// // // //   Settings,
// // // //   CreditCard,
// // // //   X,
// // // //   DollarSign,
// // // //   UserCheck,
// // // //   Search,
// // // //   Bell,
// // // //   LogOut,
// // // //   Truck,
// // // //   Layers,
// // // //   ShoppingBag,
// // // //   ChevronRight,
// // // //   ChevronDown,
// // // //   AlertTriangle,
// // // //   User,
// // // //   Calendar,
// // // //   Zap,
// // // //   TrendingUp,
// // // // } from "lucide-react"
// // // // import { motion, AnimatePresence } from "framer-motion"

// // // // // Import all the components you need
// // // // import ProductDashboard from "./ProductManagement"
// // // // import EmployeeManagement from "./EmployeeManagement"
// // // // import RoleDistribution from "./RoleDistribution"
// // // // import DailySales from "./DailySales"
// // // // import StockTracking from "./StockTracking"
// // // // import EmployeeSearch from "./EmployeeSearch"
// // // // import Billing from "./Billing"
// // // // import CustomerSignupForm from "./CustomerSignUpForm"
// // // // import ViewCustomers from "./ViewCustomers"
// // // // import SalesChart from "./SalesChart"
// // // // import ProductSales from "./ProductSales"
// // // // import InventoryDashboard from "./InventoryDashboard"
// // // // import UserManagementPage from "./UserManagement"
// // // // import ProductDashboard2 from "./RestockAlerts"
// // // // import SupplierManagement from "./Supc"
// // // // import BatchExpiryTracker from "./BatchExpiryTracker"
// // // // import DamageItemsManagement from "./DamageItemsManagement"
// // // // import EmployeeSales from "./EmployeeSales"
// // // // import EmployeeAttendanceForm from "./EmployeeAttendance"
// // // // import FacialRecognitionAttendance from "./FacialRecognitionAttendance"
// // // // import AddEmployeeFace from "./AddEmployeeFace"
// // // // import EmployeesSalaryManagement from "./EmployeesSalaryManagement"
// // // // import SalesAnalyticsDashboard from "./SalesAnalyticsDashboard"
// // // // import KhatabookPage from "./Khatabook2"
// // // // import UserProfile from "./UserProfile"
// // // // import SearchProductsByCategory from "./ProductCategorization"
// // // // import LoginPage from "./LoginPage"

// // // // const AdminDashboard = () => {
// // // //   const { storeName } = useContext(StoreContext)
// // // //   const [sidebarOpen, setSidebarOpen] = useState(true)
// // // //   const location = useLocation()
// // // //   const navigate = useNavigate()
// // // //   const [currentPage, setCurrentPage] = useState("dashboard")
// // // //   const [expandedMenus, setExpandedMenus] = useState({
// // // //     products: false,
// // // //     employees: false,
// // // //     sales: false,
// // // //     customers: false,
// // // //     suppliers: false,
// // // //   })
// // // //   const [searchFocused, setSearchFocused] = useState(false)
// // // //   const [notificationsOpen, setNotificationsOpen] = useState(false)
// // // //   const [userMenuOpen, setUserMenuOpen] = useState(false)
// // // //   const [darkMode, setDarkMode] = useState(false)
// // // //   const [loading, setLoading] = useState(true)
// // // //   const [animateCharts, setAnimateCharts] = useState(false)

// // // //   const notificationRef = useRef(null)
// // // //   const userMenuRef = useRef(null)

// // // //   // Stats for dashboard with more specific data
// // // //   const stats = [
// // // //     {
// // // //       title: "Total Sales Today",
// // // //       value: "$5,890",
// // // //       change: "+15%",
// // // //       up: true,
// // // //       icon: <DollarSign size={20} className="text-green-500" />,
// // // //     },
// // // //     {
// // // //       title: "Low Stock Items",
// // // //       value: "24",
// // // //       change: "+8",
// // // //       up: false,
// // // //       icon: <AlertTriangle size={20} className="text-amber-500" />,
// // // //     },
// // // //     {
// // // //       title: "Today's Orders",
// // // //       value: "42",
// // // //       change: "+12%",
// // // //       up: true,
// // // //       icon: <ShoppingBag size={20} className="text-blue-500" />,
// // // //     },
// // // //     {
// // // //       title: "Active Employees",
// // // //       value: "18",
// // // //       change: "0",
// // // //       up: true,
// // // //       icon: <Users size={20} className="text-purple-500" />,
// // // //     },
// // // //   ]

// // // //   // Recent transactions for dashboard
// // // //   const recentTransactions = [
// // // //     {
// // // //       id: "#TRX-4589",
// // // //       customer: "John Smith",
// // // //       amount: "$129.50",
// // // //       date: "20 min ago",
// // // //       status: "completed",
// // // //       paymentMethod: "Credit Card",
// // // //     },
// // // //     {
// // // //       id: "#TRX-4588",
// // // //       customer: "Lisa Wong",
// // // //       amount: "$245.75",
// // // //       date: "45 min ago",
// // // //       status: "completed",
// // // //       paymentMethod: "PayPal",
// // // //     },
// // // //     {
// // // //       id: "#TRX-4587",
// // // //       customer: "Mike Johnson",
// // // //       amount: "$67.25",
// // // //       date: "1 hr ago",
// // // //       status: "pending",
// // // //       paymentMethod: "Credit Card",
// // // //     },
// // // //     {
// // // //       id: "#TRX-4586",
// // // //       customer: "Sara Miller",
// // // //       amount: "$352.00",
// // // //       date: "2 hrs ago",
// // // //       status: "completed",
// // // //       paymentMethod: "Bank Transfer",
// // // //     },
// // // //     {
// // // //       id: "#TRX-4585",
// // // //       customer: "David Chen",
// // // //       amount: "$84.30",
// // // //       date: "3 hrs ago",
// // // //       status: "failed",
// // // //       paymentMethod: "Credit Card",
// // // //     },
// // // //   ]

// // // //   // Low stock items
// // // //   const lowStockItems = [
// // // //     { id: "P-1245", name: "Premium Coffee Beans", current: 12, min: 20, reorderStatus: "urgent" },
// // // //     { id: "P-2340", name: "Organic Green Tea", current: 8, min: 15, reorderStatus: "pending" },
// // // //     { id: "P-1023", name: "Vitamin C Tablets", current: 5, min: 10, reorderStatus: "ordered" },
// // // //     { id: "P-3456", name: "Almond Milk", current: 9, min: 12, reorderStatus: "urgent" },
// // // //   ]

// // // //   // Mock data for sales chart
// // // //   const salesData = [
// // // //     { month: "Jan", sales: 4500, target: 4000 },
// // // //     { month: "Feb", sales: 5200, target: 4200 },
// // // //     { month: "Mar", sales: 4800, target: 4400 },
// // // //     { month: "Apr", sales: 5500, target: 4600 },
// // // //     { month: "May", sales: 6200, target: 4800 },
// // // //     { month: "Jun", sales: 5900, target: 5000 },
// // // //     { month: "Jul", sales: 6500, target: 5200 },
// // // //   ]

// // // //   // Notifications
// // // //   const notifications = [
// // // //     {
// // // //       id: 1,
// // // //       title: "Low stock alert",
// // // //       message: "4 products need reordering",
// // // //       time: "10 min ago",
// // // //       read: false,
// // // //       type: "alert",
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       title: "New order received",
// // // //       message: "Order #12458 from John D.",
// // // //       time: "25 min ago",
// // // //       read: false,
// // // //       type: "order",
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       title: "Staff meeting",
// // // //       message: "Reminder: Meeting at 3 PM",
// // // //       time: "2 hours ago",
// // // //       read: true,
// // // //       type: "reminder",
// // // //     },
// // // //     {
// // // //       id: 4,
// // // //       title: "System update",
// // // //       message: "Maintenance scheduled for tonight",
// // // //       time: "1 day ago",
// // // //       read: true,
// // // //       type: "system",
// // // //     },
// // // //   ]

// // // //   // Navigation menu structure
// // // //   const navigationMenu = [
// // // //     {
// // // //       id: "dashboard",
// // // //       label: "Dashboard",
// // // //       icon: <BarChart2 size={20} />,
// // // //       onClick: () => changePage("dashboard"),
// // // //     },
// // // //     {
// // // //       id: "products",
// // // //       label: "Products",
// // // //       icon: <Package size={20} />,
// // // //       submenu: [
// // // //         { id: "products", label: "All Products", onClick: () => changePage("products") },
// // // //         { id: "restockAlerts", label: "Restock Alerts", onClick: () => changePage("restockAlerts") },
// // // //         { id: "batch", label: "Batch Expiry Tracker", onClick: () => changePage("batch") },
// // // //         { id: "damage", label: "Damage Items", onClick: () => changePage("damage") },
// // // //         { id: "category", label: "Categorization", onClick: () => changePage("category") },
// // // //       ],
// // // //     },
// // // //     {
// // // //       id: "employees",
// // // //       label: "Employees",
// // // //       icon: <Users size={20} />,
// // // //       submenu: [
// // // //         { id: "employees", label: "Manage Employees", onClick: () => changePage("employees") },
// // // //         { id: "roles", label: "Roles & Permissions", onClick: () => changePage("roles") },
// // // //         { id: "attendance", label: "Attendance", onClick: () => changePage("attendance") },
// // // //         { id: "add_face", label: "Add Face", onClick: () => changePage("add_face") },
// // // //         { id: "face", label: "Face Recognition", onClick: () => changePage("face") },
// // // //         { id: "employeeSearch", label: "Employee Search", onClick: () => changePage("employeeSearch") },
// // // //         { id: "emp", label: "Employee Sales", onClick: () => changePage("emp") },
// // // //         { id: "salaries", label: "Salaries", onClick: () => changePage("salaries") },
// // // //       ],
// // // //     },
// // // //     {
// // // //       id: "sales",
// // // //       label: "Sales",
// // // //       icon: <DollarSign size={20} />,
// // // //       submenu: [
// // // //         { id: "dailySales", label: "Daily Sales", onClick: () => changePage("dailySales") },
// // // //         { id: "salesChart", label: "Sales Reports", onClick: () => changePage("salesChart") },
// // // //         { id: "productSales", label: "Product Sales", onClick: () => changePage("productSales") },
// // // //         { id: "analytics", label: "Analytics", onClick: () => changePage("analytics") },
// // // //         { id: "billing", label: "Billing", onClick: () => changePage("billing") },
// // // //       ],
// // // //     },
// // // //     {
// // // //       id: "customers",
// // // //       label: "Customers",
// // // //       icon: <UserCheck size={20} />,
// // // //       submenu: [
// // // //         { id: "customers", label: "View Customers", onClick: () => changePage("customers") },
// // // //         { id: "customerSignup", label: "Add Customer", onClick: () => changePage("customerSignup") },
// // // //         { id: "khata2", label: "Khatabook", onClick: () => changePage("khata2") },
// // // //       ],
// // // //     },
// // // //     {
// // // //       id: "suppliers",
// // // //       label: "Suppliers",
// // // //       icon: <Truck size={20} />,
// // // //       onClick: () => changePage("suppliers"),
// // // //     },
// // // //     {
// // // //       id: "stockTracking",
// // // //       label: "Stock Tracking",
// // // //       icon: <Layers size={20} />,
// // // //       onClick: () => changePage("stockTracking"),
// // // //     },
// // // //     {
// // // //       id: "users",
// // // //       label: "User Management",
// // // //       icon: <User size={20} />,
// // // //       onClick: () => changePage("users"),
// // // //     },
// // // //     {
// // // //       id: "settings",
// // // //       label: "Settings",
// // // //       icon: <Settings size={20} />,
// // // //       onClick: () => {},
// // // //     },
// // // //   ]

// // // //   // Page loading simulation
// // // //   useEffect(() => {
// // // //     const timer = setTimeout(() => {
// // // //       setLoading(false)
// // // //       setTimeout(() => setAnimateCharts(true), 500)
// // // //     }, 800)
// // // //     return () => clearTimeout(timer)
// // // //   }, [currentPage])

// // // //   // Toggle sidebar on mobile
// // // //   useEffect(() => {
// // // //     if (window.innerWidth < 768) {
// // // //       setSidebarOpen(false)
// // // //     }
// // // //   }, [location])

// // // //   // Resize handling
// // // //   useEffect(() => {
// // // //     const handleResize = () => {
// // // //       if (window.innerWidth >= 768) {
// // // //         setSidebarOpen(true)
// // // //       }
// // // //     }

// // // //     window.addEventListener("resize", handleResize)
// // // //     handleResize()
// // // //     return () => window.removeEventListener("resize", handleResize)
// // // //   }, [])

// // // //   // Handle clicks outside dropdowns
// // // //   useEffect(() => {
// // // //     const handleClickOutside = (event) => {
// // // //       if (notificationRef.current && !notificationRef.current.contains(event.target)) {
// // // //         setNotificationsOpen(false)
// // // //       }
// // // //       if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
// // // //         setUserMenuOpen(false)
// // // //       }
// // // //     }

// // // //     document.addEventListener("mousedown", handleClickOutside)
// // // //     return () => document.removeEventListener("mousedown", handleClickOutside)
// // // //   }, [])

// // // //   // Toggle submenu expandable sections
// // // //   const toggleMenu = (menu) => {
// // // //     setExpandedMenus((prev) => ({
// // // //       ...prev,
// // // //       [menu]: !prev[menu],
// // // //     }))
// // // //   }

// // // //   // Change current page based on menu click
// // // //   const changePage = (page) => {
// // // //     setCurrentPage(page)
// // // //     setLoading(true) // Show loading state when changing pages
// // // //     if (window.innerWidth < 768) {
// // // //       setSidebarOpen(false)
// // // //     }
// // // //   }

// // // //   // Toggle dark mode
// // // //   const toggleDarkMode = () => {
// // // //     setDarkMode(!darkMode)
// // // //     document.documentElement.classList.toggle("dark")
// // // //   }

// // // //   // Render main dashboard content
// // // //   const renderDashboard = () => (
// // // //     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
// // // //       {/* Welcome section */}
// // // //       <div className="mb-6">
// // // //         <h2 className="text-xl font-semibold text-gray-800 dark:text-white transition-colors">
// // // //           Welcome to {storeName || "Your Store"}
// // // //         </h2>
// // // //         <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
// // // //           Here's a quick summary of your store performance today
// // // //         </p>
// // // //       </div>

// // // //       {/* Stats cards */}
// // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
// // // //         {stats.map((stat, index) => (
// // // //           <motion.div
// // // //             key={index}
// // // //             initial={{ y: 20, opacity: 0 }}
// // // //             animate={{ y: 0, opacity: 1 }}
// // // //             transition={{ duration: 0.3, delay: index * 0.1 }}
// // // //             whileHover={{ y: -4, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
// // // //             className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700"
// // // //           >
// // // //             <div className="flex justify-between items-start mb-3">
// // // //               <div className="text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors">{stat.title}</div>
// // // //               <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700 transition-colors">{stat.icon}</div>
// // // //             </div>
// // // //             <div className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">{stat.value}</div>
// // // //             <div
// // // //               className={`text-sm mt-2 flex items-center ${stat.up ? "text-green-600 dark:text-green-500" : "text-red-600 dark:text-red-500"} transition-colors`}
// // // //             >
// // // //               {stat.change}
// // // //               {stat.up ? (
// // // //                 <svg
// // // //                   className="w-4 h-4 ml-1"
// // // //                   fill="none"
// // // //                   stroke="currentColor"
// // // //                   viewBox="0 0 24 24"
// // // //                   xmlns="http://www.w3.org/2000/svg"
// // // //                 >
// // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
// // // //                 </svg>
// // // //               ) : (
// // // //                 <svg
// // // //                   className="w-4 h-4 ml-1"
// // // //                   fill="none"
// // // //                   stroke="currentColor"
// // // //                   viewBox="0 0 24 24"
// // // //                   xmlns="http://www.w3.org/2000/svg"
// // // //                 >
// // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// // // //                 </svg>
// // // //               )}
// // // //             </div>
// // // //           </motion.div>
// // // //         ))}
// // // //       </div>

// // // //       {/* Main dashboard layout */}
// // // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // // //         {/* Transactions */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.3, delay: 0.2 }}
// // // //           className="lg:col-span-2"
// // // //         >
// // // //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 mb-6 border border-gray-100 dark:border-gray-700">
// // // //             <div className="flex justify-between items-center mb-6">
// // // //               <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
// // // //                 <ShoppingBag size={18} className="mr-2 text-blue-600 dark:text-blue-400" />
// // // //                 Recent Transactions
// // // //               </h3>
// // // //               <button
// // // //                 onClick={() => changePage("dailySales")}
// // // //                 className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center"
// // // //               >
// // // //                 View All
// // // //                 <ChevronRight size={16} className="ml-1" />
// // // //               </button>
// // // //             </div>

// // // //             <div className="overflow-x-auto">
// // // //               <table className="w-full">
// // // //                 <thead>
// // // //                   <tr className="border-b border-gray-200 dark:border-gray-700">
// // // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
// // // //                       ID
// // // //                     </th>
// // // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
// // // //                       Customer
// // // //                     </th>
// // // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
// // // //                       Amount
// // // //                     </th>
// // // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
// // // //                       Time
// // // //                     </th>
// // // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
// // // //                       Status
// // // //                     </th>
// // // //                   </tr>
// // // //                 </thead>
// // // //                 <tbody>
// // // //                   {recentTransactions.map((transaction, index) => (
// // // //                     <motion.tr
// // // //                       key={index}
// // // //                       initial={{ opacity: 0, y: 10 }}
// // // //                       animate={{ opacity: 1, y: 0 }}
// // // //                       transition={{ duration: 0.2, delay: index * 0.1 }}
// // // //                       className="border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
// // // //                     >
// // // //                       <td className="py-4 px-3 text-sm font-medium text-gray-700 dark:text-gray-300">
// // // //                         {transaction.id}
// // // //                       </td>
// // // //                       <td className="py-4 px-3 text-sm text-gray-700 dark:text-gray-300">{transaction.customer}</td>
// // // //                       <td className="py-4 px-3 text-sm font-medium text-gray-900 dark:text-white">
// // // //                         {transaction.amount}
// // // //                       </td>
// // // //                       <td className="py-4 px-3 text-sm text-gray-500 dark:text-gray-400">{transaction.date}</td>
// // // //                       <td className="py-4 px-3 text-sm">
// // // //                         <span
// // // //                           className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
// // // //                             transaction.status === "completed"
// // // //                               ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
// // // //                               : transaction.status === "pending"
// // // //                                 ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
// // // //                                 : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
// // // //                           }`}
// // // //                         >
// // // //                           {transaction.status === "completed" && (
// // // //                             <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-green-600 dark:bg-green-400"></span>
// // // //                           )}
// // // //                           {transaction.status === "pending" && (
// // // //                             <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-yellow-600 dark:bg-yellow-400"></span>
// // // //                           )}
// // // //                           {transaction.status === "failed" && (
// // // //                             <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-red-600 dark:bg-red-400"></span>
// // // //                           )}
// // // //                           {transaction.status}
// // // //                         </span>
// // // //                       </td>
// // // //                     </motion.tr>
// // // //                   ))}
// // // //                 </tbody>
// // // //               </table>
// // // //             </div>
// // // //           </div>

// // // //           {/* Sales Chart */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.3, delay: 0.3 }}
// // // //             className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 mb-6 border border-gray-100 dark:border-gray-700"
// // // //           >
// // // //             <div className="flex justify-between items-center mb-6">
// // // //               <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
// // // //                 <TrendingUp size={18} className="mr-2 text-indigo-600 dark:text-indigo-400" />
// // // //                 Sales Overview
// // // //               </h3>
// // // //               <button
// // // //                 onClick={() => changePage("salesChart")}
// // // //                 className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors flex items-center"
// // // //               >
// // // //                 Detailed Report
// // // //                 <ChevronRight size={16} className="ml-1" />
// // // //               </button>
// // // //             </div>

// // // //             <div className="h-80 relative">
// // // //               {animateCharts ? (
// // // //                 <div className="h-full">
// // // //                   <div className="h-full flex items-end space-x-4 px-2">
// // // //                     {salesData.map((item, index) => (
// // // //                       <div key={index} className="flex-1 flex items-center">
// // // //                         <div className="w-full h-full flex flex-col justify-end space-y-2">
// // // //                           <motion.div
// // // //                             initial={{ height: 0 }}
// // // //                             animate={{ height: `${(item.sales / 7000) * 100}%` }}
// // // //                             transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
// // // //                             className="w-full bg-gradient-to-t from-blue-500 to-blue-400 dark:from-blue-600 dark:to-blue-500 rounded-t-md relative group"
// // // //                           >
// // // //                             <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
// // // //                               ${item.sales}
// // // //                             </div>
// // // //                           </motion.div>
// // // //                           <motion.div
// // // //                             initial={{ height: 0 }}
// // // //                             animate={{ height: `${(item.target / 7000) * 100}%` }}
// // // //                             transition={{ duration: 0.8, delay: index * 0.1 + 0.2, type: "spring" }}
// // // //                             className="w-full bg-gradient-to-t from-gray-300 to-gray-200 dark:from-gray-600 dark:to-gray-500 rounded-t-md relative group"
// // // //                           >
// // // //                             <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
// // // //                               Target: ${item.target}
// // // //                             </div>
// // // //                           </motion.div>
// // // //                         </div>
// // // //                         <div className="text-xs mt-2 text-gray-600 dark:text-gray-400 font-medium">{item.month}</div>
// // // //                       </div>
// // // //                     ))}
// // // //                   </div>
// // // //                   <div className="mt-4 flex justify-between items-center text-sm">
// // // //                     <div className="flex items-center">
// // // //                       <div className="w-3 h-3 bg-blue-500 rounded-sm mr-2"></div>
// // // //                       <span className="text-gray-700 dark:text-gray-300">Actual Sales</span>
// // // //                     </div>
// // // //                     <div className="flex items-center">
// // // //                       <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-sm mr-2"></div>
// // // //                       <span className="text-gray-700 dark:text-gray-300">Target</span>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               ) : (
// // // //                 <div className="h-full flex items-center justify-center">
// // // //                   <div className="animate-pulse text-gray-400 dark:text-gray-500">Loading chart data...</div>
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //           </motion.div>
// // // //         </motion.div>

// // // //         {/* Sidebar content */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, x: 20 }}
// // // //           animate={{ opacity: 1, x: 0 }}
// // // //           transition={{ duration: 0.3, delay: 0.4 }}
// // // //           className="space-y-6"
// // // //         >
// // // //           {/* Quick Access */}
// // // //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
// // // //             <h3 className="font-medium text-gray-800 dark:text-white transition-colors mb-4 flex items-center">
// // // //               <Zap size={18} className="mr-2 text-amber-500" />
// // // //               Quick Access
// // // //             </h3>
// // // //             <div className="grid grid-cols-2 gap-3">
// // // //               {[
// // // //                 {
// // // //                   icon: <Package size={20} />,
// // // //                   label: "Products",
// // // //                   page: "products",
// // // //                   color: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
// // // //                 },
// // // //                 {
// // // //                   icon: <Users size={20} />,
// // // //                   label: "Employees",
// // // //                   page: "employees",
// // // //                   color: "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
// // // //                 },
// // // //                 {
// // // //                   icon: <DollarSign size={20} />,
// // // //                   label: "Sales",
// // // //                   page: "dailySales",
// // // //                   color: "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400",
// // // //                 },
// // // //                 {
// // // //                   icon: <CreditCard size={20} />,
// // // //                   label: "Billing",
// // // //                   page: "billing",
// // // //                   color: "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
// // // //                 },
// // // //                 {
// // // //                   icon: <Layers size={20} />,
// // // //                   label: "Stock",
// // // //                   page: "stockTracking",
// // // //                   color: "bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
// // // //                 },
// // // //                 {
// // // //                   icon: <Truck size={20} />,
// // // //                   label: "Suppliers",
// // // //                   page: "suppliers",
// // // //                   color: "bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400",
// // // //                 },
// // // //               ].map((item, index) => (
// // // //                 <motion.button
// // // //                   key={index}
// // // //                   whileHover={{ scale: 1.03 }}
// // // //                   whileTap={{ scale: 0.97 }}
// // // //                   onClick={() => changePage(item.page)}
// // // //                   className={`flex items-center justify-center p-3 rounded-lg transition-all ${item.color} hover:shadow-md`}
// // // //                 >
// // // //                   <div className="flex flex-col items-center">
// // // //                     <div className="mb-1">{item.icon}</div>
// // // //                     <span className="text-base font-medium">{item.label}</span>
// // // //                   </div>
// // // //                 </motion.button>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {/* Low Stock Alert */}
// // // //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
// // // //             <div className="flex justify-between items-center mb-4">
// // // //               <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
// // // //                 <AlertTriangle size={20} className="mr-2 text-red-500" />
// // // //                 Low Stock Alert
// // // //               </h3>
// // // //               <button
// // // //                 onClick={() => changePage("restockAlerts")}
// // // //                 className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
// // // //               >
// // // //                 All Alerts
// // // //               </button>
// // // //             </div>

// // // //             <div className="space-y-3">
// // // //               {lowStockItems.map((item, index) => (
// // // //                 <motion.div
// // // //                   key={index}
// // // //                   initial={{ opacity: 0, y: 10 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   transition={{ duration: 0.2, delay: index * 0.1 }}
// // // //                   className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-750 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
// // // //                 >
// // // //                   <div className="flex items-start space-x-3">
// // // //                     <div
// // // //                       className={`mt-0.5 p-1.5 rounded-md ${
// // // //                         item.reorderStatus === "urgent"
// // // //                           ? "bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400"
// // // //                           : item.reorderStatus === "pending"
// // // //                             ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-400"
// // // //                             : "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400"
// // // //                       }`}
// // // //                     >
// // // //                       <Layers size={16} />
// // // //                     </div>
// // // //                     <div>
// // // //                       <div className="font-medium text-sm text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
// // // //                         {item.name}
// // // //                       </div>
// // // //                       <div className="text-xs text-gray-500 dark:text-gray-400">SKU: {item.id}</div>
// // // //                     </div>
// // // //                   </div>
// // // //                   <div
// // // //                     className={`text-sm font-medium ${
// // // //                       (item.current / item.min) < 0.5
// // // //                         ? "text-red-600 dark:text-red-400"
// // // //                         : item.current / item.min < 0.75
// // // //                           ? "text-yellow-600 dark:text-yellow-400"
// // // //                           : "text-gray-700 dark:text-gray-300"
// // // //                     }`}
// // // //                   >
// // // //                     {item.current}/{item.min}
// // // //                   </div>
// // // //                 </motion.div>
// // // //               ))}
// // // //             </div>

// // // //             <div className="mt-4">
// // // //               <motion.button
// // // //                 whileHover={{ scale: 1.02 }}
// // // //                 whileTap={{ scale: 0.98 }}
// // // //                 onClick={() => changePage("suppliers")}
// // // //                 className="flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all text-sm w-full shadow-sm hover:shadow"
// // // //               >
// // // //                 <Truck size={16} className="mr-2" />
// // // //                 Place Restock Order
// // // //               </motion.button>
// // // //             </div>
// // // //           </div>

// // // //           {/* Recent activity timeline */}
// // // //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
// // // //             <h3 className="font-medium text-gray-800 dark:text-white transition-colors mb-4 flex items-center">
// // // //               <Calendar size={20} className="mr-2 text-purple-500" />
// // // //               Recent Activity
// // // //             </h3>

// // // //             <div className="relative">
// // // //               {/* Timeline line */}
// // // //               <div className="absolute top-0 bottom-0 left-3 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

// // // //               <div className="space-y-4">
// // // //                 {[
// // // //                   {
// // // //                     time: "9:32 AM",
// // // //                     title: "New order received",
// // // //                     description: "Order #4592 from Michael T.",
// // // //                     color: "bg-green-500",
// // // //                   },
// // // //                   {
// // // //                     time: "11:15 AM",
// // // //                     title: "Low stock notification",
// // // //                     description: "Vitamin B Complex needs restock",
// // // //                     color: "bg-yellow-500",
// // // //                   },
// // // //                   {
// // // //                     time: "1:45 PM",
// // // //                     title: "Employee login",
// // // //                     description: "Sarah logged in for afternoon shift",
// // // //                     color: "bg-blue-500",
// // // //                   },
// // // //                   {
// // // //                     time: "2:30 PM",
// // // //                     title: "System report",
// // // //                     description: "Daily inventory check completed",
// // // //                     color: "bg-purple-500",
// // // //                   },
// // // //                 ].map((activity, index) => (
// // // //                   <motion.div
// // // //                     key={index}
// // // //                     initial={{ opacity: 0, x: -10 }}
// // // //                     animate={{ opacity: 1, x: 0 }}
// // // //                     transition={{ duration: 0.3, delay: index * 0.1 }}
// // // //                     className="relative pl-8"
// // // //                   >
// // // //                     <div
// // // //                       className={`absolute left-0 top-1 h-6 w-6 rounded-full flex items-center justify-center ${activity.color} shadow-md`}
// // // //                     >
// // // //                       <span className="h-3 w-3 bg-white rounded-full"></span>
// // // //                     </div>
// // // //                     <div className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</div>
// // // //                     <div className="font-medium text-sm text-gray-800 dark:text-white">{activity.title}</div>
// // // //                     <div className="text-xs text-gray-500 dark:text-gray-400">{activity.description}</div>
// // // //                   </motion.div>
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </motion.div>
// // // //       </div>
// // // //     </motion.div>
// // // //   )

// // // //   // Render the selected page content
// // // //   const renderContent = () => {
// // // //     switch (currentPage) {
// // // //       case "dashboard":
// // // //         return renderDashboard()
// // // //       case "Login":
// // // //         return <LoginPage />
// // // //       case "products":
// // // //         return <ProductDashboard />
// // // //       case "employees":
// // // //         return <EmployeeManagement />
// // // //       case "roles":
// // // //         return <RoleDistribution />
// // // //       case "dailySales":
// // // //         return <DailySales />
// // // //       case "stockTracking":
// // // //         return <StockTracking />
// // // //       case "employeeSearch":
// // // //         return <EmployeeSearch />
// // // //       case "billing":
// // // //         return <Billing />
// // // //       case "customerSignup":
// // // //         return <CustomerSignupForm />
// // // //       case "customers":
// // // //         return <ViewCustomers />
// // // //       case "salesChart":
// // // //         return <SalesChart />
// // // //       case "productSales":
// // // //         return <ProductSales />
// // // //       case "inventory":
// // // //         return <InventoryDashboard />
// // // //       case "users":
// // // //         return <UserManagementPage />
// // // //       case "restockAlerts":
// // // //         return <ProductDashboard2 />
// // // //       case "suppliers":
// // // //         return <SupplierManagement />
// // // //       case "batch":
// // // //         return <BatchExpiryTracker />
// // // //       case "damage":
// // // //         return <DamageItemsManagement />
// // // //       case "emp":
// // // //         return <EmployeeSales />
// // // //       case "attendance":
// // // //         return <EmployeeAttendanceForm />
// // // //       case "face":
// // // //         return <FacialRecognitionAttendance />
// // // //       case "add_face":
// // // //         return <AddEmployeeFace />
// // // //       case "salaries":
// // // //         return <EmployeesSalaryManagement />
// // // //       case "analytics":
// // // //         return <SalesAnalyticsDashboard />
// // // //       case "khata2":
// // // //         return <KhatabookPage />
// // // //       case "UserProfile":
// // // //         return <UserProfile />
// // // //       case "category":
// // // //         return <SearchProductsByCategory />
// // // //       default:
// // // //         return renderDashboard()
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div className={`min-h-screen ${darkMode ? "dark" : ""} bg-gray-50 dark:bg-gray-900 flex`}>
// // // //       {/* Mobile overlay for sidebar */}
// // // //       {sidebarOpen && (
// // // //         <div className="fixed inset-0 bg-black/50 md:hidden z-20" onClick={() => setSidebarOpen(false)} />
// // // //       )}

// // // //       {/* Sidebar */}
// // // //       <aside
// // // //         className={`fixed inset-y-0 left-0 w-72 bg-white dark:bg-gray-800 shadow-lg
// // // //     transform transition-transform duration-300 ease-in-out z-30 overflow-y-auto
// // // //     ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
// // // //       >
// // // //         <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-700">
// // // //           <div className="flex items-center space-x-2">
// // // //             <div className="h-8 w-8 rounded-md bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold">
// // // //               S
// // // //             </div>
// // // //             <h1 className="text-xl font-bold text-gray-800 dark:text-white truncate">{storeName || "Store Manager"}</h1>
// // // //           </div>
// // // //           <button
// // // //             onClick={() => setSidebarOpen(false)}
// // // //             className="md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
// // // //           >
// // // //             <X size={20} />
// // // //           </button>
// // // //         </div>

// // // //         <div className="p-4">
// // // //           <div className="flex items-center space-x-3 mb-6 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
// // // //             <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
// // // //               A
// // // //             </div>
// // // //             <div>
// // // //               <div className="font-medium text-gray-800 dark:text-white">Admin User</div>
// // // //               <div className="text-sm text-gray-500 dark:text-gray-400">Super Admin</div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Search box */}
// // // //           <div className="relative mb-6">
// // // //             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // //               <Search size={16} className="text-gray-400" />
// // // //             </div>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Search..."
// // // //               className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white text-sm"
// // // //             />
// // // //           </div>

// // // //           <nav>
// // // //             <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 pl-4">
// // // //               Main
// // // //             </div>
// // // //             <ul className="space-y-1 mb-6">
// // // //               {navigationMenu.map((item) => (
// // // //                 <li key={item.id}>
// // // //                   {item.submenu ? (
// // // //                     <div>
// // // //                       <button
// // // //                         onClick={() => toggleMenu(item.id)}
// // // //                         className={`flex items-center justify-between w-full p-3 rounded-lg 
// // // //                           ${expandedMenus[item.id] ? "bg-gray-100 dark:bg-gray-700" : "hover:bg-gray-100 dark:hover:bg-gray-700"} 
// // // //                           transition-colors duration-200`}
// // // //                       >
// // // //                         <div className="flex items-center">
// // // //                           <div
// // // //                             className={`mr-3 ${
// // // //                               currentPage === item.id || item.submenu?.some((sub) => sub.id === currentPage)
// // // //                                 ? "text-blue-600 dark:text-blue-400"
// // // //                                 : "text-gray-500 dark:text-gray-400"
// // // //                             }`}
// // // //                           >
// // // //                             {item.icon}
// // // //                           </div>
// // // //                           <span
// // // //                             className={`font-medium ${
// // // //                               currentPage === item.id || item.submenu?.some((sub) => sub.id === currentPage)
// // // //                                 ? "text-blue-600 dark:text-blue-400"
// // // //                                 : "text-gray-700 dark:text-gray-300"
// // // //                             }`}
// // // //                           >
// // // //                             {item.label}
// // // //                           </span>
// // // //                         </div>
// // // //                         {expandedMenus[item.id] ? (
// // // //                           <ChevronDown size={18} className="text-gray-400" />
// // // //                         ) : (
// // // //                           <ChevronRight size={18} className="text-gray-400" />
// // // //                         )}
// // // //                       </button>

// // // //                       {expandedMenus[item.id] && (
// // // //                         <motion.ul
// // // //                           initial={{ opacity: 0, height: 0 }}
// // // //                           animate={{ opacity: 1, height: "auto" }}
// // // //                           exit={{ opacity: 0, height: 0 }}
// // // //                           transition={{ duration: 0.2 }}
// // // //                           className="pl-10 pt-1 pb-1 space-y-1"
// // // //                         >
// // // //                           {item.submenu.map((subItem) => (
// // // //                             <li key={subItem.id}>
// // // //                               <button
// // // //                                 onClick={subItem.onClick}
// // // //                                 className={`p-2 rounded-md text-sm w-full text-left transition-colors duration-200
// // // //                                   ${
// // // //                                     currentPage === subItem.id
// // // //                                       ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium"
// // // //                                       : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-300"
// // // //                                   }`}
// // // //                               >
// // // //                                 {subItem.label}
// // // //                               </button>
// // // //                             </li>
// // // //                           ))}
// // // //                         </motion.ul>
// // // //                       )}
// // // //                     </div>
// // // //                   ) : (
// // // //                     <button
// // // //                       onClick={item.onClick}
// // // //                       className={`flex items-center w-full p-3 rounded-lg transition-colors duration-200
// // // //                         ${
// // // //                           currentPage === item.id
// // // //                             ? "bg-blue-50 dark:bg-blue-900/30"
// // // //                             : "hover:bg-gray-100 dark:hover:bg-gray-700"
// // // //                         }`}
// // // //                     >
// // // //                       <div
// // // //                         className={`mr-3 ${
// // // //                           currentPage === item.id
// // // //                             ? "text-blue-600 dark:text-blue-400"
// // // //                             : "text-gray-500 dark:text-gray-400"
// // // //                         }`}
// // // //                       >
// // // //                         {item.icon}
// // // //                       </div>
// // // //                       <span
// // // //                         className={`font-medium ${
// // // //                           currentPage === item.id
// // // //                             ? "text-blue-600 dark:text-blue-400"
// // // //                             : "text-gray-700 dark:text-gray-300"
// // // //                         }`}
// // // //                       >
// // // //                         {item.label}
// // // //                       </span>
// // // //                     </button>
// // // //                   )}
// // // //                 </li>
// // // //               ))}
// // // //             </ul>

// // // //             {/* <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 pl-4">
// // // //               Support
// // // //             </div>
// // // //             <ul className="space-y-1">
// // // //               <li>
// // // //                 <button className="flex items-center w-full p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
// // // //                   <HelpCircle size={20} className="mr-3 text-gray-500 dark:text-gray-400" />
// // // //                   <span className="font-medium">Help Center</span>
// // // //                 </button>
// // // //               </li>
// // // //               <li>
// // // //                 <button className="flex items-center w-full p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
// // // //                   <FileText size={20} className="mr-3 text-gray-500 dark:text-gray-400" />
// // // //                   <span className="font-medium">Documentation</span>
// // // //                 </button>
// // // //               </li>
// // // //             </ul> */}
// // // //           </nav>
// // // //         </div>

// // // //         {/* Bottom section */}
// // // //         {/* <div className="absolute bottom-0 left-0 right-0 p-4">
// // // //           <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
// // // //             <div className="flex items-center mb-3">
// // // //               <Shield size={18} className="text-blue-600 dark:text-blue-400 mr-2" />
// // // //               <h4 className="font-medium text-blue-600 dark:text-blue-400">Pro Plan</h4>
// // // //             </div>
// // // //             <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
// // // //               Get access to all features and premium support.
// // // //             </p>
// // // //             <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
// // // //               Upgrade Now
// // // //             </button>
// // // //           </div>
// // // //         </div> */}
// // // //       </aside>

// // // //       {/* Mobile menu button */}
// // // //       <button
// // // //         onClick={() => setSidebarOpen(true)}
// // // //         className={`md:hidden fixed top-4 left-4 z-10 p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300
// // // //           shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200
// // // //           ${sidebarOpen ? "hidden" : "block"}`}
// // // //       >
// // // //         <Menu size={24} />
// // // //       </button>

// // // //       {/* Main content */}
// // // //       <main className="flex-1 overflow-auto ml-0 md:ml-72">
// // // //         {/* Top header */}
// // // //         <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-20">
// // // //           <div className="px-6 py-4 flex justify-between items-center">
// // // //             <div className="flex items-center">
// // // //               <h1 className="text-xl font-bold text-gray-800 dark:text-white">
// // // //                 {currentPage === "dashboard"
// // // //                   ? "Dashboard"
// // // //                   : currentPage === "products"
// // // //                     ? "Products Management"
// // // //                     : currentPage === "employees"
// // // //                       ? "Employee Management"
// // // //                       : currentPage === "dailySales"
// // // //                         ? "Sales Dashboard"
// // // //                         : currentPage === "stockTracking"
// // // //                           ? "Stock Tracking"
// // // //                           : currentPage === "suppliers"
// // // //                             ? "Supplier Management"
// // // //                             : currentPage === "users"
// // // //                               ? "User Management"
// // // //                               : currentPage === "customers"
// // // //                                 ? "Customer Management"
// // // //                                 : currentPage === "billing"
// // // //                                   ? "Billing & Invoices"
// // // //                                   : "Admin Dashboard"}
// // // //               </h1>
// // // //             </div>

// // // //             <div className="flex items-center space-x-4">
// // // //               {/* Notifications */}
// // // //               <div className="relative" ref={notificationRef}>
// // // //                 <button
// // // //                   onClick={() => setNotificationsOpen(!notificationsOpen)}
// // // //                   className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative"
// // // //                 >
// // // //                   <Bell size={20} className="text-gray-600 dark:text-gray-400" />
// // // //                   <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
// // // //                     3
// // // //                   </span>
// // // //                 </button>

// // // //                 <AnimatePresence>
// // // //                   {notificationsOpen && (
// // // //                     <motion.div
// // // //                       initial={{ opacity: 0, y: -10 }}
// // // //                       animate={{ opacity: 1, y: 0 }}
// // // //                       exit={{ opacity: 0, y: -10 }}
// // // //                       transition={{ duration: 0.2 }}
// // // //                       className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-40 border border-gray-200 dark:border-gray-700"
// // // //                     >
// // // //                       <div className="p-4">
// // // //                         <div className="flex justify-between items-center mb-4">
// // // //                           <h3 className="font-medium text-gray-800 dark:text-white">Notifications</h3>
// // // //                           <button className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
// // // //                             Mark all as read
// // // //                           </button>
// // // //                         </div>
// // // //                         <div className="space-y-3">
// // // //                           {notifications.map((notification) => (
// // // //                             <div key={notification.id} className="flex items-start space-x-3">
// // // //                               <div
// // // //                                 className={`p-2 rounded-full ${
// // // //                                   notification.type === "alert"
// // // //                                     ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
// // // //                                     : notification.type === "order"
// // // //                                       ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
// // // //                                       : notification.type === "reminder"
// // // //                                         ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
// // // //                                         : "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
// // // //                                 }`}
// // // //                               >
// // // //                                 <Bell size={16} />
// // // //                               </div>
// // // //                               <div>
// // // //                                 <div className="text-sm font-medium text-gray-800 dark:text-white">
// // // //                                   {notification.title}
// // // //                                 </div>
// // // //                                 <div className="text-xs text-gray-500 dark:text-gray-400">{notification.message}</div>
// // // //                                 <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{notification.time}</div>
// // // //                               </div>
// // // //                             </div>
// // // //                           ))}
// // // //                         </div>
// // // //                         <button className="w-full mt-4 text-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
// // // //                           View all notifications
// // // //                         </button>
// // // //                       </div>
// // // //                     </motion.div>
// // // //                   )}
// // // //                 </AnimatePresence>
// // // //               </div>

// // // //               {/* Dark mode toggle */}
// // // //               <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
// // // //                 {darkMode ? (
// // // //                   <svg
// // // //                     className="w-5 h-5 text-gray-600 dark:text-gray-400"
// // // //                     fill="none"
// // // //                     stroke="currentColor"
// // // //                     viewBox="0 0 24 24"
// // // //                     xmlns="http://www.w3.org/2000/svg"
// // // //                   >
// // // //                     <path
// // // //                       strokeLinecap="round"
// // // //                       strokeLinejoin="round"
// // // //                       strokeWidth={2}
// // // //                       d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
// // // //                     />
// // // //                   </svg>
// // // //                 ) : (
// // // //                   <svg
// // // //                     className="w-5 h-5 text-gray-600 dark:text-gray-400"
// // // //                     fill="none"
// // // //                     stroke="currentColor"
// // // //                     viewBox="0 0 24 24"
// // // //                     xmlns="http://www.w3.org/2000/svg"
// // // //                   >
// // // //                     <path
// // // //                       strokeLinecap="round"
// // // //                       strokeLinejoin="round"
// // // //                       strokeWidth={2}
// // // //                       d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
// // // //                     />
// // // //                   </svg>
// // // //                 )}
// // // //               </button>

// // // //               {/* User menu */}
// // // //               <div className="relative" ref={userMenuRef}>
// // // //                 <button
// // // //                   onClick={() => setUserMenuOpen(!userMenuOpen)}
// // // //                   className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
// // // //                 >
// // // //                   <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
// // // //                     A
// // // //                   </div>
// // // //                   <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300">Admin</span>
// // // //                   <ChevronDown size={16} className="hidden md:block text-gray-500 dark:text-gray-400" />
// // // //                 </button>

// // // //                 <AnimatePresence>
// // // //                   {userMenuOpen && (
// // // //                     <motion.div
// // // //                       initial={{ opacity: 0, y: -10 }}
// // // //                       animate={{ opacity: 1, y: 0 }}
// // // //                       exit={{ opacity: 0, y: -10 }}
// // // //                       transition={{ duration: 0.2 }}
// // // //                       className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-40 border border-gray-200 dark:border-gray-700"
// // // //                     >
// // // //                       <div className="p-2">
// // // //                         <button
// // // //                           onClick={() => navigate("/UserProfile")}
// // // //                           className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left flex items-center"
// // // //                         >
// // // //                           <User size={16} className="mr-2 text-gray-500 dark:text-gray-400" />
// // // //                           Profile
// // // //                         </button>
// // // //                         <button
// // // //                           onClick={toggleDarkMode}
// // // //                           className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left flex items-center"
// // // //                         >
// // // //                           {darkMode ? (
// // // //                             <>
// // // //                               <svg
// // // //                                 className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"
// // // //                                 fill="none"
// // // //                                 stroke="currentColor"
// // // //                                 viewBox="0 0 24 24"
// // // //                                 xmlns="http://www.w3.org/2000/svg"
// // // //                               >
// // // //                                 <path
// // // //                                   strokeLinecap="round"
// // // //                                   strokeLinejoin="round"
// // // //                                   strokeWidth={2}
// // // //                                   d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
// // // //                                 />
// // // //                               </svg>
// // // //                               Light Mode
// // // //                             </>
// // // //                           ) : (
// // // //                             <>
// // // //                               <svg
// // // //                                 className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"
// // // //                                 fill="none"
// // // //                                 stroke="currentColor"
// // // //                                 viewBox="0 0 24 24"
// // // //                                 xmlns="http://www.w3.org/2000/svg"
// // // //                               >
// // // //                                 <path
// // // //                                   strokeLinecap="round"
// // // //                                   strokeLinejoin="round"
// // // //                                   strokeWidth={2}
// // // //                                   d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
// // // //                                 />
// // // //                               </svg>
// // // //                               Dark Mode
// // // //                             </>
// // // //                           )}
// // // //                         </button>
// // // //                         <button
// // // //                           onClick={() => navigate("/settings")}
// // // //                           className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left flex items-center"
// // // //                         >
// // // //                           <Settings size={16} className="mr-2 text-gray-500 dark:text-gray-400" />
// // // //                           Settings
// // // //                         </button>
// // // //                         <div className="my-1 border-t border-gray-200 dark:border-gray-700"></div>
// // // //                         <button
// // // //                           onClick={() => navigate("/LoginPage")}
// // // //                           className="w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg text-left flex items-center"
// // // //                         >
// // // //                           <LogOut size={16} className="mr-2" />
// // // //                           Logout
// // // //                         </button>
// // // //                       </div>
// // // //                     </motion.div>
// // // //                   )}
// // // //                 </AnimatePresence>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Page content */}
// // // //         <div className="p-6">
// // // //           {loading ? (
// // // //             <div className="flex items-center justify-center h-64">
// // // //               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
// // // //             </div>
// // // //           ) : (
// // // //             renderContent()
// // // //           )}
// // // //         </div>
// // // //       </main>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default AdminDashboard
// // // "use client"

// // // import { useState, useContext, useEffect, useRef } from "react"
// // // import { StoreContext } from "./StoreContext"
// // // import { useLocation, useNavigate } from "react-router-dom"
// // // import {
// // //   Menu,
// // //   Package,
// // //   Users,
// // //   BarChart2,
// // //   Settings,
// // //   CreditCard,
// // //   X,
// // //   DollarSign,
// // //   UserCheck,
// // //   Search,
// // //   Bell,
// // //   LogOut,
// // //   Truck,
// // //   Layers,
// // //   ShoppingBag,
// // //   ChevronRight,
// // //   ChevronDown,
// // //   AlertTriangle,
// // //   User,
// // //   Calendar,
// // //   Zap,
// // //   TrendingUp,
// // // } from "lucide-react"
// // // import { motion, AnimatePresence } from "framer-motion"

// // // // Import all the components you need
// // // import ProductDashboard from "./ProductManagement"
// // // import EmployeeManagement from "./EmployeeManagement"
// // // import RoleDistribution from "./RoleDistribution"
// // // import DailySales from "./DailySales"
// // // import StockTracking from "./StockTracking"
// // // import EmployeeSearch from "./EmployeeSearch"
// // // import Billing from "./Billing"
// // // import CustomerSignupForm from "./CustomerSignUpForm"
// // // import ViewCustomers from "./ViewCustomers"
// // // import SalesChart from "./SalesChart"
// // // import ProductSales from "./ProductSales"
// // // import InventoryDashboard from "./InventoryDashboard"
// // // import UserManagementPage from "./UserManagement"
// // // import ProductDashboard2 from "./RestockAlerts"
// // // import SupplierManagement from "./Supc"
// // // import BatchExpiryTracker from "./BatchExpiryTracker"
// // // import DamageItemsManagement from "./DamageItemsManagement"
// // // import EmployeeSales from "./EmployeeSales"
// // // import EmployeeAttendanceForm from "./EmployeeAttendance"
// // // import FacialRecognitionAttendance from "./FacialRecognitionAttendance"
// // // import AddEmployeeFace from "./AddEmployeeFace"
// // // import EmployeesSalaryManagement from "./EmployeesSalaryManagement"
// // // import SalesAnalyticsDashboard from "./SalesAnalyticsDashboard"
// // // import KhatabookPage from "./Khatabook2"
// // // import UserProfile from "./UserProfile"
// // // import SearchProductsByCategory from "./ProductCategorization"
// // // import LoginPage from "./LoginPage"
// // // import SalesPerformanceDashboard from "./SalesPerformanceReports"
// // // import EmployeePerformanceReports from "./EmployeePerformanceReports"
// // // import ExpenseTracker from "./Expenses"
// // // import FinancialAnalytics from "./FinancialAnalytics"
// // // import CustomerSegmentation from "./CustomerSegmentation"

// // // const AdminDashboard = () => {
// // //   const { storeName } = useContext(StoreContext)
// // //   const [sidebarOpen, setSidebarOpen] = useState(true)
// // //   const location = useLocation()
// // //   const navigate = useNavigate()
// // //   const [currentPage, setCurrentPage] = useState("dashboard")
// // //   const [expandedMenus, setExpandedMenus] = useState({
// // //     products: false,
// // //     employees: false,
// // //     sales: false,
// // //     customers: false,
// // //     suppliers: false,
// // //   })
// // //   const [searchFocused, setSearchFocused] = useState(false)
// // //   const [notificationsOpen, setNotificationsOpen] = useState(false)
// // //   const [userMenuOpen, setUserMenuOpen] = useState(false)
// // //   const [darkMode, setDarkMode] = useState(false)
// // //   const [loading, setLoading] = useState(true)
// // //   const [animateCharts, setAnimateCharts] = useState(false)

// // //   const notificationRef = useRef(null)
// // //   const userMenuRef = useRef(null)

// // //   // Stats for dashboard with more specific data
// // //   const stats = [
// // //     {
// // //       title: "Total Sales Today",
// // //       value: "$5,890",
// // //       change: "+15%",
// // //       up: true,
// // //       icon: <DollarSign size={20} className="text-green-500" />,
// // //     },
// // //     {
// // //       title: "Low Stock Items",
// // //       value: "24",
// // //       change: "+8",
// // //       up: false,
// // //       icon: <AlertTriangle size={20} className="text-amber-500" />,
// // //     },
// // //     {
// // //       title: "Today's Orders",
// // //       value: "42",
// // //       change: "+12%",
// // //       up: true,
// // //       icon: <ShoppingBag size={20} className="text-blue-500" />,
// // //     },
// // //     {
// // //       title: "Active Employees",
// // //       value: "18",
// // //       change: "0",
// // //       up: true,
// // //       icon: <Users size={20} className="text-purple-500" />,
// // //     },
// // //   ]

// // //   // Recent transactions for dashboard
// // //   const recentTransactions = [
// // //     {
// // //       id: "#TRX-4589",
// // //       customer: "John Smith",
// // //       amount: "$129.50",
// // //       date: "20 min ago",
// // //       status: "completed",
// // //       paymentMethod: "Credit Card",
// // //     },
// // //     {
// // //       id: "#TRX-4588",
// // //       customer: "Lisa Wong",
// // //       amount: "$245.75",
// // //       date: "45 min ago",
// // //       status: "completed",
// // //       paymentMethod: "PayPal",
// // //     },
// // //     {
// // //       id: "#TRX-4587",
// // //       customer: "Mike Johnson",
// // //       amount: "$67.25",
// // //       date: "1 hr ago",
// // //       status: "pending",
// // //       paymentMethod: "Credit Card",
// // //     },
// // //     {
// // //       id: "#TRX-4586",
// // //       customer: "Sara Miller",
// // //       amount: "$352.00",
// // //       date: "2 hrs ago",
// // //       status: "completed",
// // //       paymentMethod: "Bank Transfer",
// // //     },
// // //     {
// // //       id: "#TRX-4585",
// // //       customer: "David Chen",
// // //       amount: "$84.30",
// // //       date: "3 hrs ago",
// // //       status: "failed",
// // //       paymentMethod: "Credit Card",
// // //     },
// // //   ]

// // //   // Low stock items
// // //   const lowStockItems = [
// // //     { id: "P-1245", name: "Premium Coffee Beans", current: 12, min: 20, reorderStatus: "urgent" },
// // //     { id: "P-2340", name: "Organic Green Tea", current: 8, min: 15, reorderStatus: "pending" },
// // //     { id: "P-1023", name: "Vitamin C Tablets", current: 5, min: 10, reorderStatus: "ordered" },
// // //     { id: "P-3456", name: "Almond Milk", current: 9, min: 12, reorderStatus: "urgent" },
// // //   ]

// // //   // Mock data for sales chart
// // //   const salesData = [
// // //     { month: "Jan", sales: 4500, target: 4000 },
// // //     { month: "Feb", sales: 5200, target: 4200 },
// // //     { month: "Mar", sales: 4800, target: 4400 },
// // //     { month: "Apr", sales: 5500, target: 4600 },
// // //     { month: "May", sales: 6200, target: 4800 },
// // //     { month: "Jun", sales: 5900, target: 5000 },
// // //     { month: "Jul", sales: 6500, target: 5200 },
// // //   ]

// // //   // Notifications
// // //   const notifications = [
// // //     {
// // //       id: 1,
// // //       title: "Low stock alert",
// // //       message: "4 products need reordering",
// // //       time: "10 min ago",
// // //       read: false,
// // //       type: "alert",
// // //     },
// // //     {
// // //       id: 2,
// // //       title: "New order received",
// // //       message: "Order #12458 from John D.",
// // //       time: "25 min ago",
// // //       read: false,
// // //       type: "order",
// // //     },
// // //     {
// // //       id: 3,
// // //       title: "Staff meeting",
// // //       message: "Reminder: Meeting at 3 PM",
// // //       time: "2 hours ago",
// // //       read: true,
// // //       type: "reminder",
// // //     },
// // //     {
// // //       id: 4,
// // //       title: "System update",
// // //       message: "Maintenance scheduled for tonight",
// // //       time: "1 day ago",
// // //       read: true,
// // //       type: "system",
// // //     },
// // //   ]

// // //   // Navigation menu structure
// // //   const navigationMenu = [
// // //     {
// // //       id: "dashboard",
// // //       label: "Dashboard",
// // //       icon: <BarChart2 size={20} />,
// // //       onClick: () => changePage("dashboard"),
// // //     },
// // //     {
// // //       id: "products",
// // //       label: "Products",
// // //       icon: <Package size={20} />,
// // //       submenu: [
// // //         { id: "products", label: "All Products", onClick: () => changePage("products") },
// // //         { id: "restockAlerts", label: "Restock Alerts", onClick: () => changePage("restockAlerts") },
// // //         { id: "batch", label: "Batch Expiry Tracker", onClick: () => changePage("batch") },
// // //         { id: "damage", label: "Damage Items", onClick: () => changePage("damage") },
// // //         { id: "category", label: "Categorization", onClick: () => changePage("category") },
// // //       ],
// // //     },
// // //     {
// // //       id: "employees",
// // //       label: "Employees",
// // //       icon: <Users size={20} />,
// // //       submenu: [
// // //         { id: "employees", label: "Manage Employees", onClick: () => changePage("employees") },
// // //         { id: "roles", label: "Roles & Permissions", onClick: () => changePage("roles") },
// // //         { id: "attendance", label: "Attendance", onClick: () => changePage("attendance") },
// // //         { id: "add_face", label: "Add Face", onClick: () => changePage("add_face") },
// // //         { id: "face", label: "Face Recognition", onClick: () => changePage("face") },
// // //         { id: "employeeSearch", label: "Employee Search", onClick: () => changePage("employeeSearch") },
// // //         { id: "emp", label: "Employee Sales", onClick: () => changePage("emp") },
// // //         { id: "salaries", label: "Salaries", onClick: () => changePage("salaries") },
// // //       ],
// // //     },
// // //     {
// // //       id: "sales",
// // //       label: "Sales",
// // //       icon: <DollarSign size={20} />,
// // //       submenu: [
// // //         { id: "dailySales", label: "Daily Sales", onClick: () => changePage("dailySales") },
// // //         { id: "salesChart", label: "Sales Reports", onClick: () => changePage("salesChart") },
// // //         { id: "productSales", label: "Product Sales", onClick: () => changePage("productSales") },
// // //         { id: "analytics", label: "Analytics", onClick: () => changePage("analytics") },
// // //         { id: "billing", label: "Billing", onClick: () => changePage("billing") },
// // //         { id: "SalesPerformanceReports", label: "SalesPerformanceReports", onClick: () => changePage("salesperformance") },
// // //         { id: "EmployeePerformanceReports", label: "EmployeePerformanceReports", onClick: () => changePage("employeeperformance") },
// // //         { id: "expenses", label: "Expense Tracker", onClick: () => changePage("expenses") },
// // //         { id: "ft", label: "Financial Tracker", onClick: () => changePage("financial") },

// // //       ],
// // //     },
// // //     {
// // //       id: "customers",
// // //       label: "Customers",
// // //       icon: <UserCheck size={20} />,
// // //       submenu: [
// // //         { id: "customers", label: "View Customers", onClick: () => changePage("customers") },
// // //         { id: "customerSignup", label: "Add Customer", onClick: () => changePage("customerSignup") },
// // //         { id: "khata2", label: "Khatabook", onClick: () => changePage("khata2") },
// // //         { id: "customersegmentation", label: "Customer segemnattion", onClick: () => changePage("customerseg") },

// // //       ],
// // //     },
// // //     {
// // //       id: "suppliers",
// // //       label: "Suppliers",
// // //       icon: <Truck size={20} />,
// // //       onClick: () => changePage("suppliers"),
// // //     },
// // //     {
// // //       id: "stockTracking",
// // //       label: "Stock Tracking",
// // //       icon: <Layers size={20} />,
// // //       onClick: () => changePage("stockTracking"),
// // //     },
// // //     {
// // //       id: "users",
// // //       label: "User Management",
// // //       icon: <User size={20} />,
// // //       onClick: () => changePage("users"),
// // //     },
// // //     {
// // //       id: "settings",
// // //       label: "Settings",
// // //       icon: <Settings size={20} />,
// // //       onClick: () => {},
// // //     },
// // //   ]

// // //   // Page loading simulation
// // //   useEffect(() => {
// // //     const timer = setTimeout(() => {
// // //       setLoading(false)
// // //       setTimeout(() => setAnimateCharts(true), 500)
// // //     }, 800)
// // //     return () => clearTimeout(timer)
// // //   }, [currentPage])

// // //   // Toggle sidebar on mobile
// // //   useEffect(() => {
// // //     if (window.innerWidth < 768) {
// // //       setSidebarOpen(false)
// // //     }
// // //   }, [location])

// // //   // Resize handling
// // //   useEffect(() => {
// // //     const handleResize = () => {
// // //       if (window.innerWidth >= 768) {
// // //         setSidebarOpen(true)
// // //       }
// // //     }

// // //     window.addEventListener("resize", handleResize)
// // //     handleResize()
// // //     return () => window.removeEventListener("resize", handleResize)
// // //   }, [])

// // //   // Handle clicks outside dropdowns
// // //   useEffect(() => {
// // //     const handleClickOutside = (event) => {
// // //       if (notificationRef.current && !notificationRef.current.contains(event.target)) {
// // //         setNotificationsOpen(false)
// // //       }
// // //       if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
// // //         setUserMenuOpen(false)
// // //       }
// // //     }

// // //     document.addEventListener("mousedown", handleClickOutside)
// // //     return () => document.removeEventListener("mousedown", handleClickOutside)
// // //   }, [])

// // //   // Toggle submenu expandable sections
// // //   const toggleMenu = (menu) => {
// // //     setExpandedMenus((prev) => ({
// // //       ...prev,
// // //       [menu]: !prev[menu],
// // //     }))
// // //   }

// // //   // Change current page based on menu click
// // //   const changePage = (page) => {
// // //     setCurrentPage(page)
// // //     setLoading(true) // Show loading state when changing pages
// // //     if (window.innerWidth < 768) {
// // //       setSidebarOpen(false)
// // //     }
// // //   }

// // //   // Toggle dark mode
// // //   const toggleDarkMode = () => {
// // //     setDarkMode(!darkMode)
// // //     document.documentElement.classList.toggle("dark")
// // //   }

// // //   // Render main dashboard content
// // //   const renderDashboard = () => (
// // //     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
// // //       {/* Welcome section */}
// // //       <div className="mb-6">
// // //         <h2 className="text-xl font-semibold text-gray-800 dark:text-white transition-colors">
// // //           Welcome to {storeName || "Your Store"}
// // //         </h2>
// // //         <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
// // //           Here's a quick summary of your store performance today
// // //         </p>
// // //       </div>

// // //       {/* Stats cards */}
// // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
// // //         {stats.map((stat, index) => (
// // //           <motion.div
// // //             key={index}
// // //             initial={{ y: 20, opacity: 0 }}
// // //             animate={{ y: 0, opacity: 1 }}
// // //             transition={{ duration: 0.3, delay: index * 0.1 }}
// // //             whileHover={{ y: -4, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
// // //             className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700"
// // //           >
// // //             <div className="flex justify-between items-start mb-3">
// // //               <div className="text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors">{stat.title}</div>
// // //               <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700 transition-colors">{stat.icon}</div>
// // //             </div>
// // //             <div className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">{stat.value}</div>
// // //             <div
// // //               className={`text-sm mt-2 flex items-center ${stat.up ? "text-green-600 dark:text-green-500" : "text-red-600 dark:text-red-500"} transition-colors`}
// // //             >
// // //               {stat.change}
// // //               {stat.up ? (
// // //                 <svg
// // //                   className="w-4 h-4 ml-1"
// // //                   fill="none"
// // //                   stroke="currentColor"
// // //                   viewBox="0 0 24 24"
// // //                   xmlns="http://www.w3.org/2000/svg"
// // //                 >
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
// // //                 </svg>
// // //               ) : (
// // //                 <svg
// // //                   className="w-4 h-4 ml-1"
// // //                   fill="none"
// // //                   stroke="currentColor"
// // //                   viewBox="0 0 24 24"
// // //                   xmlns="http://www.w3.org/2000/svg"
// // //                 >
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// // //                 </svg>
// // //               )}
// // //             </div>
// // //           </motion.div>
// // //         ))}
// // //       </div>

// // //       {/* Main dashboard layout */}
// // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // //         {/* Transactions */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.3, delay: 0.2 }}
// // //           className="lg:col-span-2"
// // //         >
// // //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 mb-6 border border-gray-100 dark:border-gray-700">
// // //             <div className="flex justify-between items-center mb-6">
// // //               <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
// // //                 <ShoppingBag size={18} className="mr-2 text-blue-600 dark:text-blue-400" />
// // //                 Recent Transactions
// // //               </h3>
// // //               <button
// // //                 onClick={() => changePage("dailySales")}
// // //                 className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center"
// // //               >
// // //                 View All
// // //                 <ChevronRight size={16} className="ml-1" />
// // //               </button>
// // //             </div>

// // //             <div className="overflow-x-auto">
// // //               <table className="w-full">
// // //                 <thead>
// // //                   <tr className="border-b border-gray-200 dark:border-gray-700">
// // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
// // //                       ID
// // //                     </th>
// // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
// // //                       Customer
// // //                     </th>
// // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
// // //                       Amount
// // //                     </th>
// // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
// // //                       Time
// // //                     </th>
// // //                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
// // //                       Status
// // //                     </th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {recentTransactions.map((transaction, index) => (
// // //                     <motion.tr
// // //                       key={index}
// // //                       initial={{ opacity: 0, y: 10 }}
// // //                       animate={{ opacity: 1, y: 0 }}
// // //                       transition={{ duration: 0.2, delay: index * 0.1 }}
// // //                       className="border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
// // //                     >
// // //                       <td className="py-4 px-3 text-sm font-medium text-gray-700 dark:text-gray-300">
// // //                         {transaction.id}
// // //                       </td>
// // //                       <td className="py-4 px-3 text-sm text-gray-700 dark:text-gray-300">{transaction.customer}</td>
// // //                       <td className="py-4 px-3 text-sm font-medium text-gray-900 dark:text-white">
// // //                         {transaction.amount}
// // //                       </td>
// // //                       <td className="py-4 px-3 text-sm text-gray-500 dark:text-gray-400">{transaction.date}</td>
// // //                       <td className="py-4 px-3 text-sm">
// // //                         <span
// // //                           className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
// // //                             transaction.status === "completed"
// // //                               ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
// // //                               : transaction.status === "pending"
// // //                                 ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
// // //                                 : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
// // //                           }`}
// // //                         >
// // //                           {transaction.status === "completed" && (
// // //                             <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-green-600 dark:bg-green-400"></span>
// // //                           )}
// // //                           {transaction.status === "pending" && (
// // //                             <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-yellow-600 dark:bg-yellow-400"></span>
// // //                           )}
// // //                           {transaction.status === "failed" && (
// // //                             <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-red-600 dark:bg-red-400"></span>
// // //                           )}
// // //                           {transaction.status}
// // //                         </span>
// // //                       </td>
// // //                     </motion.tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>
// // //           </div>

// // //           {/* Sales Chart */}
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.3, delay: 0.3 }}
// // //             className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 mb-6 border border-gray-100 dark:border-gray-700"
// // //           >
// // //             <div className="flex justify-between items-center mb-6">
// // //               <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
// // //                 <TrendingUp size={18} className="mr-2 text-indigo-600 dark:text-indigo-400" />
// // //                 Sales Overview
// // //               </h3>
// // //               <button
// // //                 onClick={() => changePage("salesChart")}
// // //                 className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors flex items-center"
// // //               >
// // //                 Detailed Report
// // //                 <ChevronRight size={16} className="ml-1" />
// // //               </button>
// // //             </div>

// // //             <div className="h-80 relative">
// // //               {animateCharts ? (
// // //                 <div className="h-full">
// // //                   <div className="h-full flex items-end space-x-4 px-2">
// // //                     {salesData.map((item, index) => (
// // //                       <div key={index} className="flex-1 flex items-center">
// // //                         <div className="w-full h-full flex flex-col justify-end space-y-2">
// // //                           <motion.div
// // //                             initial={{ height: 0 }}
// // //                             animate={{ height: `${(item.sales / 7000) * 100}%` }}
// // //                             transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
// // //                             className="w-full bg-gradient-to-t from-blue-500 to-blue-400 dark:from-blue-600 dark:to-blue-500 rounded-t-md relative group"
// // //                           >
// // //                             <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
// // //                               ${item.sales}
// // //                             </div>
// // //                           </motion.div>
// // //                           <motion.div
// // //                             initial={{ height: 0 }}
// // //                             animate={{ height: `${(item.target / 7000) * 100}%` }}
// // //                             transition={{ duration: 0.8, delay: index * 0.1 + 0.2, type: "spring" }}
// // //                             className="w-full bg-gradient-to-t from-gray-300 to-gray-200 dark:from-gray-600 dark:to-gray-500 rounded-t-md relative group"
// // //                           >
// // //                             <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
// // //                               Target: ${item.target}
// // //                             </div>
// // //                           </motion.div>
// // //                         </div>
// // //                         <div className="text-xs mt-2 text-gray-600 dark:text-gray-400 font-medium">{item.month}</div>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                   <div className="mt-4 flex justify-between items-center text-sm">
// // //                     <div className="flex items-center">
// // //                       <div className="w-3 h-3 bg-blue-500 rounded-sm mr-2"></div>
// // //                       <span className="text-gray-700 dark:text-gray-300">Actual Sales</span>
// // //                     </div>
// // //                     <div className="flex items-center">
// // //                       <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-sm mr-2"></div>
// // //                       <span className="text-gray-700 dark:text-gray-300">Target</span>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               ) : (
// // //                 <div className="h-full flex items-center justify-center">
// // //                   <div className="animate-pulse text-gray-400 dark:text-gray-500">Loading chart data...</div>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </motion.div>
// // //         </motion.div>

// // //         {/* Sidebar content */}
// // //         <motion.div
// // //           initial={{ opacity: 0, x: 20 }}
// // //           animate={{ opacity: 1, x: 0 }}
// // //           transition={{ duration: 0.3, delay: 0.4 }}
// // //           className="space-y-6"
// // //         >
// // //           {/* Quick Access */}
// // //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
// // //             <h3 className="font-medium text-gray-800 dark:text-white transition-colors mb-4 flex items-center">
// // //               <Zap size={18} className="mr-2 text-amber-500" />
// // //               Quick Access
// // //             </h3>
// // //             <div className="grid grid-cols-2 gap-3">
// // //               {[
// // //                 {
// // //                   icon: <Package size={20} />,
// // //                   label: "Products",
// // //                   page: "products",
// // //                   color: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
// // //                 },
// // //                 {
// // //                   icon: <Users size={20} />,
// // //                   label: "Employees",
// // //                   page: "employees",
// // //                   color: "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
// // //                 },
// // //                 {
// // //                   icon: <DollarSign size={20} />,
// // //                   label: "Sales",
// // //                   page: "dailySales",
// // //                   color: "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400",
// // //                 },
// // //                 {
// // //                   icon: <CreditCard size={20} />,
// // //                   label: "Billing",
// // //                   page: "billing",
// // //                   color: "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
// // //                 },
// // //                 {
// // //                   icon: <Layers size={20} />,
// // //                   label: "Stock",
// // //                   page: "stockTracking",
// // //                   color: "bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
// // //                 },
// // //                 {
// // //                   icon: <Truck size={20} />,
// // //                   label: "Suppliers",
// // //                   page: "suppliers",
// // //                   color: "bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400",
// // //                 },
// // //               ].map((item, index) => (
// // //                 <motion.button
// // //                   key={index}
// // //                   whileHover={{ scale: 1.03 }}
// // //                   whileTap={{ scale: 0.97 }}
// // //                   onClick={() => changePage(item.page)}
// // //                   className={`flex items-center justify-center p-3 rounded-lg transition-all ${item.color} hover:shadow-md`}
// // //                 >
// // //                   <div className="flex flex-col items-center">
// // //                     <div className="mb-1">{item.icon}</div>
// // //                     <span className="text-base font-medium">{item.label}</span>
// // //                   </div>
// // //                 </motion.button>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* Low Stock Alert */}
// // //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
// // //                 <AlertTriangle size={20} className="mr-2 text-red-500" />
// // //                 Low Stock Alert
// // //               </h3>
// // //               <button
// // //                 onClick={() => changePage("restockAlerts")}
// // //                 className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
// // //               >
// // //                 All Alerts
// // //               </button>
// // //             </div>

// // //             <div className="space-y-3">
// // //               {lowStockItems.map((item, index) => (
// // //                 <motion.div
// // //                   key={index}
// // //                   initial={{ opacity: 0, y: 10 }}
// // //                   animate={{ opacity: 1, y: 0 }}
// // //                   transition={{ duration: 0.2, delay: index * 0.1 }}
// // //                   className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-750 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
// // //                 >
// // //                   <div className="flex items-start space-x-3">
// // //                     <div
// // //                       className={`mt-0.5 p-1.5 rounded-md ${
// // //                         item.reorderStatus === "urgent"
// // //                           ? "bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400"
// // //                           : item.reorderStatus === "pending"
// // //                             ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-400"
// // //                             : "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400"
// // //                       }`}
// // //                     >
// // //                       <Layers size={16} />
// // //                     </div>
// // //                     <div>
// // //                       <div className="font-medium text-sm text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
// // //                         {item.name}
// // //                       </div>
// // //                       <div className="text-xs text-gray-500 dark:text-gray-400">SKU: {item.id}</div>
// // //                     </div>
// // //                   </div>
// // //                   <div
// // //                     className={`text-sm font-medium ${
// // //                       (item.current / item.min) < 0.5
// // //                         ? "text-red-600 dark:text-red-400"
// // //                         : item.current / item.min < 0.75
// // //                           ? "text-yellow-600 dark:text-yellow-400"
// // //                           : "text-gray-700 dark:text-gray-300"
// // //                     }`}
// // //                   >
// // //                     {item.current}/{item.min}
// // //                   </div>
// // //                 </motion.div>
// // //               ))}
// // //             </div>

// // //             <div className="mt-4">
// // //               <motion.button
// // //                 whileHover={{ scale: 1.02 }}
// // //                 whileTap={{ scale: 0.98 }}
// // //                 onClick={() => changePage("suppliers")}
// // //                 className="flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all text-sm w-full shadow-sm hover:shadow"
// // //               >
// // //                 <Truck size={16} className="mr-2" />
// // //                 Place Restock Order
// // //               </motion.button>
// // //             </div>
// // //           </div>

// // //           {/* Recent activity timeline */}
// // //           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
// // //             <h3 className="font-medium text-gray-800 dark:text-white transition-colors mb-4 flex items-center">
// // //               <Calendar size={20} className="mr-2 text-purple-500" />
// // //               Recent Activity
// // //             </h3>

// // //             <div className="relative">
// // //               {/* Timeline line */}
// // //               <div className="absolute top-0 bottom-0 left-3 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

// // //               <div className="space-y-4">
// // //                 {[
// // //                   {
// // //                     time: "9:32 AM",
// // //                     title: "New order received",
// // //                     description: "Order #4592 from Michael T.",
// // //                     color: "bg-green-500",
// // //                   },
// // //                   {
// // //                     time: "11:15 AM",
// // //                     title: "Low stock notification",
// // //                     description: "Vitamin B Complex needs restock",
// // //                     color: "bg-yellow-500",
// // //                   },
// // //                   {
// // //                     time: "1:45 PM",
// // //                     title: "Employee login",
// // //                     description: "Sarah logged in for afternoon shift",
// // //                     color: "bg-blue-500",
// // //                   },
// // //                   {
// // //                     time: "2:30 PM",
// // //                     title: "System report",
// // //                     description: "Daily inventory check completed",
// // //                     color: "bg-purple-500",
// // //                   },
// // //                 ].map((activity, index) => (
// // //                   <motion.div
// // //                     key={index}
// // //                     initial={{ opacity: 0, x: -10 }}
// // //                     animate={{ opacity: 1, x: 0 }}
// // //                     transition={{ duration: 0.3, delay: index * 0.1 }}
// // //                     className="relative pl-8"
// // //                   >
// // //                     <div
// // //                       className={`absolute left-0 top-1 h-6 w-6 rounded-full flex items-center justify-center ${activity.color} shadow-md`}
// // //                     >
// // //                       <span className="h-3 w-3 bg-white rounded-full"></span>
// // //                     </div>
// // //                     <div className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</div>
// // //                     <div className="font-medium text-sm text-gray-800 dark:text-white">{activity.title}</div>
// // //                     <div className="text-xs text-gray-500 dark:text-gray-400">{activity.description}</div>
// // //                   </motion.div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </motion.div>
// // //       </div>
// // //     </motion.div>
// // //   )

// // //   // Render the selected page content
// // //   const renderContent = () => {
// // //     switch (currentPage) {
// // //       case "dashboard":
// // //         return renderDashboard()
// // //       case "Login":
// // //         return <LoginPage />
// // //       case "products":
// // //         return <ProductDashboard />
// // //       case "employees":
// // //         return <EmployeeManagement />
// // //       case "roles":
// // //         return <RoleDistribution />
// // //       case "dailySales":
// // //         return <DailySales />
// // //       case "stockTracking":
// // //         return <StockTracking />
// // //       case "employeeSearch":
// // //         return <EmployeeSearch />
// // //       case "billing":
// // //         return <Billing />
// // //       case "customerSignup":
// // //         return <CustomerSignupForm />
// // //       case "customers":
// // //         return <ViewCustomers />
// // //       case "salesChart":
// // //         return <SalesChart />
// // //       case "productSales":
// // //         return <ProductSales />
// // //       case "inventory":
// // //         return <InventoryDashboard />
// // //       case "users":
// // //         return <UserManagementPage />
// // //       case "restockAlerts":
// // //         return <ProductDashboard2 />
// // //       case "suppliers":
// // //         return <SupplierManagement />
// // //       case "batch":
// // //         return <BatchExpiryTracker />
// // //       case "damage":
// // //         return <DamageItemsManagement />
// // //       case "emp":
// // //         return <EmployeeSales />
// // //       case "attendance":
// // //         return <EmployeeAttendanceForm />
// // //       case "face":
// // //         return <FacialRecognitionAttendance />
// // //       case "add_face":
// // //         return <AddEmployeeFace />
// // //       case "salaries":
// // //         return <EmployeesSalaryManagement />
// // //       case "analytics":
// // //         return <SalesAnalyticsDashboard />
// // //       case "khata2":
// // //         return <KhatabookPage />
// // //       case "UserProfile":
// // //         return <UserProfile />
// // //       case "category":
// // //         return <SearchProductsByCategory />
// // //         case "salesperformance":
// // //           return <SalesPerformanceDashboard/>
// // //           case "employeeperformance":
// // //             return <EmployeePerformanceReports/>
// // //             case "expenses":
// // //               return <ExpenseTracker/>
// // //               case "financial":
// // //                 return <FinancialAnalytics/>
// // //                 case "customerseg":
// // //                 return <CustomerSegmentation/>

// // //       default:
// // //         return renderDashboard()
// // //     }
// // //   }

// // //   // Add CSS for custom scrollbar
// // //   useEffect(() => {
// // //     const style = document.createElement("style")
// // //     style.textContent = `
// // //       /* Custom scrollbar styles */
// // //       ::-webkit-scrollbar {
// // //         width: 6px;
// // //         height: 6px;
// // //       }
// // //       ::-webkit-scrollbar-track {
// // //         background: transparent;
// // //       }
// // //       ::-webkit-scrollbar-thumb {
// // //         background: rgba(156, 163, 175, 0.5);
// // //         border-radius: 3px;
// // //       }
// // //       ::-webkit-scrollbar-thumb:hover {
// // //         background: rgba(156, 163, 175, 0.8);
// // //       }
// // //       /* For Firefox */
// // //       * {
// // //         scrollbar-width: thin;
// // //         scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
// // //       }
// // //     `
// // //     document.head.appendChild(style)
// // //     return () => {
// // //       document.head.removeChild(style)
// // //     }
// // //   }, [])

// // //   return (
// // //     <div className={`min-h-screen ${darkMode ? "dark" : ""} bg-gray-50 dark:bg-gray-900 flex`}>
// // //       {/* Mobile overlay for sidebar */}
// // //       {sidebarOpen && (
// // //         <div className="fixed inset-0 bg-black/50 md:hidden z-20" onClick={() => setSidebarOpen(false)} />
// // //       )}

// // //       {/* Sidebar */}
// // //       <aside
// // //         className={`fixed inset-y-0 left-0 w-72 bg-white dark:bg-gray-800 shadow-lg
// // //     transform transition-transform duration-300 ease-in-out z-30 overflow-y-auto
// // //     ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
// // //       >
// // //         <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800 z-10">
// // //           <div className="flex items-center space-x-2">
// // //             <div className="h-8 w-8 rounded-md bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold">
// // //               S
// // //             </div>
// // //             <h1 className="text-xl font-bold text-gray-800 dark:text-white truncate">{storeName || "Store Manager"}</h1>
// // //           </div>
// // //           <button
// // //             onClick={() => setSidebarOpen(false)}
// // //             className="md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
// // //           >
// // //             <X size={20} />
// // //           </button>
// // //         </div>

// // //         <div className="p-4">
// // //           <div className="flex items-center space-x-3 mb-6 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
// // //             <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
// // //               A
// // //             </div>
// // //             <div>
// // //               <div className="font-medium text-gray-800 dark:text-white">Admin User</div>
// // //               <div className="text-sm text-gray-500 dark:text-gray-400">Super Admin</div>
// // //             </div>
// // //           </div>

// // //           {/* Search box */}
// // //           <div className="relative mb-6">
// // //             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //               <Search size={16} className="text-gray-400" />
// // //             </div>
// // //             <input
// // //               type="text"
// // //               placeholder="Search..."
// // //               className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white text-sm"
// // //             />
// // //           </div>

// // //           <nav>
// // //             <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 pl-4">
// // //               Main
// // //             </div>
// // //             <ul className="space-y-1 mb-6">
// // //               {navigationMenu.map((item) => (
// // //                 <li key={item.id}>
// // //                   {item.submenu ? (
// // //                     <div>
// // //                       <button
// // //                         onClick={() => toggleMenu(item.id)}
// // //                         className={`flex items-center justify-between w-full p-3 rounded-lg 
// // //                           ${expandedMenus[item.id] ? "bg-gray-100 dark:bg-gray-700" : "hover:bg-gray-100 dark:hover:bg-gray-700"} 
// // //                           transition-colors duration-200`}
// // //                       >
// // //                         <div className="flex items-center">
// // //                           <div
// // //                             className={`mr-3 ${
// // //                               currentPage === item.id || item.submenu?.some((sub) => sub.id === currentPage)
// // //                                 ? "text-blue-600 dark:text-blue-400"
// // //                                 : "text-gray-500 dark:text-gray-400"
// // //                             }`}
// // //                           >
// // //                             {item.icon}
// // //                           </div>
// // //                           <span
// // //                             className={`font-medium ${
// // //                               currentPage === item.id || item.submenu?.some((sub) => sub.id === currentPage)
// // //                                 ? "text-blue-600 dark:text-blue-400"
// // //                                 : "text-gray-700 dark:text-gray-300"
// // //                             }`}
// // //                           >
// // //                             {item.label}
// // //                           </span>
// // //                         </div>
// // //                         {expandedMenus[item.id] ? (
// // //                           <ChevronDown size={18} className="text-gray-400" />
// // //                         ) : (
// // //                           <ChevronRight size={18} className="text-gray-400" />
// // //                         )}
// // //                       </button>

// // //                       {expandedMenus[item.id] && (
// // //                         <motion.ul
// // //                           initial={{ opacity: 0, height: 0 }}
// // //                           animate={{ opacity: 1, height: "auto" }}
// // //                           exit={{ opacity: 0, height: 0 }}
// // //                           transition={{ duration: 0.2 }}
// // //                           className="pl-10 pt-1 pb-1 space-y-1"
// // //                         >
// // //                           {item.submenu.map((subItem) => (
// // //                             <li key={subItem.id}>
// // //                               <button
// // //                                 onClick={subItem.onClick}
// // //                                 className={`p-2 rounded-md text-sm w-full text-left transition-colors duration-200
// // //                                   ${
// // //                                     currentPage === subItem.id
// // //                                       ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium"
// // //                                       : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-300"
// // //                                   }`}
// // //                               >
// // //                                 {subItem.label}
// // //                               </button>
// // //                             </li>
// // //                           ))}
// // //                         </motion.ul>
// // //                       )}
// // //                     </div>
// // //                   ) : (
// // //                     <button
// // //                       onClick={item.onClick}
// // //                       className={`flex items-center w-full p-3 rounded-lg transition-colors duration-200
// // //                         ${
// // //                           currentPage === item.id
// // //                             ? "bg-blue-50 dark:bg-blue-900/30"
// // //                             : "hover:bg-gray-100 dark:hover:bg-gray-700"
// // //                         }`}
// // //                     >
// // //                       <div
// // //                         className={`mr-3 ${
// // //                           currentPage === item.id
// // //                             ? "text-blue-600 dark:text-blue-400"
// // //                             : "text-gray-500 dark:text-gray-400"
// // //                         }`}
// // //                       >
// // //                         {item.icon}
// // //                       </div>
// // //                       <span
// // //                         className={`font-medium ${
// // //                           currentPage === item.id
// // //                             ? "text-blue-600 dark:text-blue-400"
// // //                             : "text-gray-700 dark:text-gray-300"
// // //                         }`}
// // //                       >
// // //                         {item.label}
// // //                       </span>
// // //                     </button>
// // //                   )}
// // //                 </li>
// // //               ))}
// // //             </ul>

// // //             {/* <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 pl-4">
// // //               Support
// // //             </div>
// // //             <ul className="space-y-1">
// // //               <li>
// // //                 <button className="flex items-center w-full p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
// // //                   <HelpCircle size={20} className="mr-3 text-gray-500 dark:text-gray-400" />
// // //                   <span className="font-medium">Help Center</span>
// // //                 </button>
// // //               </li>
// // //               <li>
// // //                 <button className="flex items-center w-full p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
// // //                   <FileText size={20} className="mr-3 text-gray-500 dark:text-gray-400" />
// // //                   <span className="font-medium">Documentation</span>
// // //                 </button>
// // //               </li>
// // //             </ul> */}
// // //           </nav>
// // //         </div>

// // //         {/* Bottom section */}
// // //         {/* <div className="absolute bottom-0 left-0 right-0 p-4">
// // //           <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
// // //             <div className="flex items-center mb-3">
// // //               <Shield size={18} className="text-blue-600 dark:text-blue-400 mr-2" />
// // //               <h4 className="font-medium text-blue-600 dark:text-blue-400">Pro Plan</h4>
// // //             </div>
// // //             <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
// // //               Get access to all features and premium support.
// // //             </p>
// // //             <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
// // //               Upgrade Now
// // //             </button>
// // //           </div>
// // //         </div> */}
// // //       </aside>

// // //       {/* Mobile menu button */}
// // //       <button
// // //         onClick={() => setSidebarOpen(true)}
// // //         className={`md:hidden fixed top-4 left-4 z-10 p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300
// // //           shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200
// // //           ${sidebarOpen ? "hidden" : "block"}`}
// // //       >
// // //         <Menu size={24} />
// // //       </button>

// // //       {/* Main content */}
// // //       <main className="flex-1 overflow-auto ml-0 md:ml-72">
// // //         {/* Top header */}
// // //         <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 fixed top-0 right-0 left-0 md:left-72 z-20">
// // //           <div className="px-6 py-4 flex justify-between items-center">
// // //             <div className="flex items-center">
// // //               <h1 className="text-xl font-bold text-gray-800 dark:text-white">
// // //                 {currentPage === "dashboard"
// // //                   ? "Dashboard"
// // //                   : currentPage === "products"
// // //                     ? "Products Management"
// // //                     : currentPage === "employees"
// // //                       ? "Employee Management"
// // //                       : currentPage === "dailySales"
// // //                         ? "Sales Dashboard"
// // //                         : currentPage === "stockTracking"
// // //                           ? "Stock Tracking"
// // //                           : currentPage === "suppliers"
// // //                             ? "Supplier Management"
// // //                             : currentPage === "users"
// // //                               ? "User Management"
// // //                               : currentPage === "customers"
// // //                                 ? "Customer Management"
// // //                                 : currentPage === "billing"
// // //                                   ? "Billing & Invoices"
// // //                                   : "Admin Dashboard"}
// // //               </h1>
// // //             </div>

// // //             <div className="flex items-center space-x-4">
// // //               {/* Notifications */}
// // //               <div className="relative" ref={notificationRef}>
// // //                 <button
// // //                   onClick={() => setNotificationsOpen(!notificationsOpen)}
// // //                   className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative"
// // //                 >
// // //                   <Bell size={20} className="text-gray-600 dark:text-gray-400" />
// // //                   <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
// // //                     3
// // //                   </span>
// // //                 </button>

// // //                 <AnimatePresence>
// // //                   {notificationsOpen && (
// // //                     <motion.div
// // //                       initial={{ opacity: 0, y: -10 }}
// // //                       animate={{ opacity: 1, y: 0 }}
// // //                       exit={{ opacity: 0, y: -10 }}
// // //                       transition={{ duration: 0.2 }}
// // //                       className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-40 border border-gray-200 dark:border-gray-700"
// // //                     >
// // //                       <div className="p-4">
// // //                         <div className="flex justify-between items-center mb-4">
// // //                           <h3 className="font-medium text-gray-800 dark:text-white">Notifications</h3>
// // //                           <button className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
// // //                             Mark all as read
// // //                           </button>
// // //                         </div>
// // //                         <div className="space-y-3">
// // //                           {notifications.map((notification) => (
// // //                             <div key={notification.id} className="flex items-start space-x-3">
// // //                               <div
// // //                                 className={`p-2 rounded-full ${
// // //                                   notification.type === "alert"
// // //                                     ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
// // //                                     : notification.type === "order"
// // //                                       ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
// // //                                       : notification.type === "reminder"
// // //                                         ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
// // //                                         : "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
// // //                                 }`}
// // //                               >
// // //                                 <Bell size={16} />
// // //                               </div>
// // //                               <div>
// // //                                 <div className="text-sm font-medium text-gray-800 dark:text-white">
// // //                                   {notification.title}
// // //                                 </div>
// // //                                 <div className="text-xs text-gray-500 dark:text-gray-400">{notification.message}</div>
// // //                                 <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{notification.time}</div>
// // //                               </div>
// // //                             </div>
// // //                           ))}
// // //                         </div>
// // //                         <button className="w-full mt-4 text-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
// // //                           View all notifications
// // //                         </button>
// // //                       </div>
// // //                     </motion.div>
// // //                   )}
// // //                 </AnimatePresence>
// // //               </div>

// // //               {/* Dark mode toggle */}
// // //               <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
// // //                 {darkMode ? (
// // //                   <svg
// // //                     className="w-5 h-5 text-gray-600 dark:text-gray-400"
// // //                     fill="none"
// // //                     stroke="currentColor"
// // //                     viewBox="0 0 24 24"
// // //                     xmlns="http://www.w3.org/2000/svg"
// // //                   >
// // //                     <path
// // //                       strokeLinecap="round"
// // //                       strokeLinejoin="round"
// // //                       strokeWidth={2}
// // //                       d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
// // //                     />
// // //                   </svg>
// // //                 ) : (
// // //                   <svg
// // //                     className="w-5 h-5 text-gray-600 dark:text-gray-400"
// // //                     fill="none"
// // //                     stroke="currentColor"
// // //                     viewBox="0 0 24 24"
// // //                     xmlns="http://www.w3.org/2000/svg"
// // //                   >
// // //                     <path
// // //                       strokeLinecap="round"
// // //                       strokeLinejoin="round"
// // //                       strokeWidth={2}
// // //                       d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
// // //                     />
// // //                   </svg>
// // //                 )}
// // //               </button>

// // //               {/* User menu */}
// // //               <div className="relative" ref={userMenuRef}>
// // //                 <button
// // //                   onClick={() => setUserMenuOpen(!userMenuOpen)}
// // //                   className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
// // //                 >
// // //                   <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
// // //                     A
// // //                   </div>
// // //                   <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300">Admin</span>
// // //                   <ChevronDown size={16} className="hidden md:block text-gray-500 dark:text-gray-400" />
// // //                 </button>

// // //                 <AnimatePresence>
// // //                   {userMenuOpen && (
// // //                     <motion.div
// // //                       initial={{ opacity: 0, y: -10 }}
// // //                       animate={{ opacity: 1, y: 0 }}
// // //                       exit={{ opacity: 0, y: -10 }}
// // //                       transition={{ duration: 0.2 }}
// // //                       className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-40 border border-gray-200 dark:border-gray-700"
// // //                     >
// // //                       <div className="p-2">
// // //                         <button
// // //                           onClick={() => navigate("/UserProfile")}
// // //                           className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left flex items-center"
// // //                         >
// // //                           <User size={16} className="mr-2 text-gray-500 dark:text-gray-400" />
// // //                           Profile
// // //                         </button>
// // //                         <button
// // //                           onClick={toggleDarkMode}
// // //                           className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left flex items-center"
// // //                         >
// // //                           {darkMode ? (
// // //                             <>
// // //                               <svg
// // //                                 className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"
// // //                                 fill="none"
// // //                                 stroke="currentColor"
// // //                                 viewBox="0 0 24 24"
// // //                                 xmlns="http://www.w3.org/2000/svg"
// // //                               >
// // //                                 <path
// // //                                   strokeLinecap="round"
// // //                                   strokeLinejoin="round"
// // //                                   strokeWidth={2}
// // //                                   d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
// // //                                 />
// // //                               </svg>
// // //                               Light Mode
// // //                             </>
// // //                           ) : (
// // //                             <>
// // //                               <svg
// // //                                 className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"
// // //                                 fill="none"
// // //                                 stroke="currentColor"
// // //                                 viewBox="0 0 24 24"
// // //                                 xmlns="http://www.w3.org/2000/svg"
// // //                               >
// // //                                 <path
// // //                                   strokeLinecap="round"
// // //                                   strokeLinejoin="round"
// // //                                   strokeWidth={2}
// // //                                   d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
// // //                                 />
// // //                               </svg>
// // //                               Dark Mode
// // //                             </>
// // //                           )}
// // //                         </button>
// // //                         <button
// // //                           onClick={() => navigate("/settings")}
// // //                           className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left flex items-center"
// // //                         >
// // //                           <Settings size={16} className="mr-2 text-gray-500 dark:text-gray-400" />
// // //                           Settings
// // //                         </button>
// // //                         <div className="my-1 border-t border-gray-200 dark:border-gray-700"></div>
// // //                         <button
// // //                           onClick={() => navigate("/LoginPage")}
// // //                           className="w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg text-left flex items-center"
// // //                         >
// // //                           <LogOut size={16} className="mr-2" />
// // //                           Logout
// // //                         </button>
// // //                       </div>
// // //                     </motion.div>
// // //                   )}
// // //                 </AnimatePresence>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Page content */}
// // //         <div className="p-6 mt-16">
// // //           {loading ? (
// // //             <div className="flex items-center justify-center h-64">
// // //               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
// // //             </div>
// // //           ) : (
// // //             renderContent()
// // //           )}
// // //         </div>
// // //       </main>
// // //     </div>
// // //   )
// // // }

// // // export default AdminDashboard


// // import { useState, useContext, useEffect, useRef } from "react";
// // import { StoreContext } from "./StoreContext";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import {
// //   Menu,
// //   Package,
// //   Users,
// //   BarChart2,
// //   Settings,
// //   CreditCard,
// //   X,
// //   DollarSign,
// //   UserCheck,
// //   Search,
// //   Bell,
// //   LogOut,
// //   Truck,
// //   Layers,
// //   ShoppingBag,
// //   ChevronRight,
// //   ChevronDown,
// //   AlertTriangle,
// //   User,
// //   Calendar,
// //   Zap,
// //   TrendingUp,
// //   Sun,
// //   Moon,
// // } from "lucide-react";
// // import { motion, AnimatePresence } from "framer-motion";

// // // Import all components
// // import ProductDashboard from "./ProductManagement";
// // import EmployeeManagement from "./EmployeeManagement";
// // import RoleDistribution from "./RoleDistribution";
// // import DailySales from "./DailySales";
// // import StockTracking from "./StockTracking";
// // import EmployeeSearch from "./EmployeeSearch";
// // import Billing from "./Billing";
// // import CustomerSignupForm from "./CustomerSignUpForm";
// // import ViewCustomers from "./ViewCustomers";
// // import SalesChart from "./SalesChart";
// // import ProductSales from "./ProductSales";
// // import InventoryDashboard from "./InventoryDashboard";
// // import UserManagementPage from "./UserManagement";
// // import ProductDashboard2 from "./RestockAlerts";
// // import SupplierManagement from "./Supc";
// // import BatchExpiryTracker from "./BatchExpiryTracker";
// // import DamageItemsManagement from "./DamageItemsManagement";
// // import EmployeeSales from "./EmployeeSales";
// // import EmployeeAttendanceForm from "./EmployeeAttendance";
// // import FacialRecognitionAttendance from "./FacialRecognitionAttendance";
// // import AddEmployeeFace from "./AddEmployeeFace";
// // import EmployeesSalaryManagement from "./EmployeesSalaryManagement";
// // import SalesAnalyticsDashboard from "./SalesAnalyticsDashboard";
// // import KhatabookPage from "./Khatabook2";
// // import UserProfile from "./UserProfile";
// // import SearchProductsByCategory from "./ProductCategorization";
// // import LoginPage from "./LoginPage";
// // import SalesPerformanceDashboard from "./SalesPerformanceReports";
// // import EmployeePerformanceReports from "./EmployeePerformanceReports";
// // import ExpenseTracker from "./Expenses";
// // import FinancialAnalytics from "./FinancialAnalytics";
// // import CustomerSegmentation from "./CustomerSegmentation";

// // const AdminDashboard = () => {
// //   const { storeName } = useContext(StoreContext);
// //   const [sidebarOpen, setSidebarOpen] = useState(true);
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const [currentPage, setCurrentPage] = useState("dashboard");
// //   const [expandedMenus, setExpandedMenus] = useState({
// //     products: false,
// //     employees: false,
// //     sales: false,
// //     customers: false,
// //     suppliers: false,
// //   });
// //   const [notificationsOpen, setNotificationsOpen] = useState(false);
// //   const [userMenuOpen, setUserMenuOpen] = useState(false);
// //   const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
// //   const [loading, setLoading] = useState(true);
// //   const [animateCharts, setAnimateCharts] = useState(false);

// //   const notificationRef = useRef(null);
// //   const userMenuRef = useRef(null);

// //   const stats = [
// //     { title: "Total Sales Today", value: "$5,890", change: "+15%", up: true, icon: <DollarSign size={24} className="text-green-500" /> },
// //     { title: "Low Stock Items", value: "24", change: "+8", up: false, icon: <AlertTriangle size={24} className="text-amber-500" /> },
// //     { title: "Today's Orders", value: "42", change: "+12%", up: true, icon: <ShoppingBag size={24} className="text-blue-500" /> },
// //     { title: "Active Employees", value: "18", change: "0", up: true, icon: <Users size={24} className="text-purple-500" /> },
// //   ];

// //   const recentTransactions = [
// //     { id: "#TRX-4589", customer: "John Smith", amount: "$129.50", date: "20 min ago", status: "completed", paymentMethod: "Credit Card" },
// //     { id: "#TRX-4588", customer: "Lisa Wong", amount: "$245.75", date: "45 min ago", status: "completed", paymentMethod: "PayPal" },
// //     { id: "#TRX-4587", customer: "Mike Johnson", amount: "$67.25", date: "1 hr ago", status: "pending", paymentMethod: "Credit Card" },
// //     { id: "#TRX-4586", customer: "Sara Miller", amount: "$352.00", date: "2 hrs ago", status: "completed", paymentMethod: "Bank Transfer" },
// //     { id: "#TRX-4585", customer: "David Chen", amount: "$84.30", date: "3 hrs ago", status: "failed", paymentMethod: "Credit Card" },
// //   ];

// //   const lowStockItems = [
// //     { id: "P-1245", name: "Premium Coffee Beans", current: 12, min: 20, reorderStatus: "urgent" },
// //     { id: "P-2340", name: "Organic Green Tea", current: 8, min: 15, reorderStatus: "pending" },
// //     { id: "P-1023", name: "Vitamin C Tablets", current: 5, min: 10, reorderStatus: "ordered" },
// //     { id: "P-3456", name: "Almond Milk", current: 9, min: 12, reorderStatus: "urgent" },
// //   ];

// //   const salesData = [
// //     { month: "Jan", sales: 4500, target: 4000 },
// //     { month: "Feb", sales: 5200, target: 4200 },
// //     { month: "Mar", sales: 4800, target: 4400 },
// //     { month: "Apr", sales: 5500, target: 4600 },
// //     { month: "May", sales: 6200, target: 4800 },
// //     { month: "Jun", sales: 5900, target: 5000 },
// //     { month: "Jul", sales: 6500, target: 5200 },
// //   ];

// //   const notifications = [
// //     { id: 1, title: "Low stock alert", message: "4 products need reordering", time: "10 min ago", read: false, type: "alert" },
// //     { id: 2, title: "New order received", message: "Order #12458 from John D.", time: "25 min ago", read: false, type: "order" },
// //     { id: 3, title: "Staff meeting", message: "Reminder: Meeting at 3 PM", time: "2 hours ago", read: true, type: "reminder" },
// //     { id: 4, title: "System update", message: "Maintenance scheduled for tonight", time: "1 day ago", read: true, type: "system" },
// //   ];

// //   const navigationMenu = [
// //     { id: "dashboard", label: "Dashboard", icon: <BarChart2 size={20} />, onClick: () => changePage("dashboard") },
// //     {
// //       id: "products",
// //       label: "Products",
// //       icon: <Package size={20} />,
// //       submenu: [
// //         { id: "products", label: "All Products", onClick: () => changePage("products") },
// //         { id: "restockAlerts", label: "Restock Alerts", onClick: () => changePage("restockAlerts") },
// //         { id: "batch", label: "Batch Expiry", onClick: () => changePage("batch") },
// //         { id: "damage", label: "Damaged Items", onClick: () => changePage("damage") },
// //         { id: "category", label: "Categories", onClick: () => changePage("category") },
// //       ],
// //     },
// //     {
// //       id: "employees",
// //       label: "Employees",
// //       icon: <Users size={20} />,
// //       submenu: [
// //         { id: "employees", label: "Manage Employees", onClick: () => changePage("employees") },
// //         { id: "roles", label: "Roles & Permissions", onClick: () => changePage("roles") },
// //         { id: "attendance", label: "Attendance", onClick: () => changePage("attendance") },
// //         { id: "add_face", label: "Add Face ID", onClick: () => changePage("add_face") },
// //         { id: "face", label: "Face Recognition", onClick: () => changePage("face") },
// //         { id: "employeeSearch", label: "Employee Search", onClick: () => changePage("employeeSearch") },
// //         { id: "emp", label: "Employee Sales", onClick: () => changePage("emp") },
// //         { id: "salaries", label: "Salaries", onClick: () => changePage("salaries") },
// //       ],
// //     },
// //     {
// //       id: "sales",
// //       label: "Sales",
// //       icon: <DollarSign size={20} />,
// //       submenu: [
// //         { id: "dailySales", label: "Daily Sales", onClick: () => changePage("dailySales") },
// //         { id: "salesChart", label: "Sales Reports", onClick: () => changePage("salesChart") },
// //         { id: "productSales", label: "Product Sales", onClick: () => changePage("productSales") },
// //         { id: "analytics", label: "Analytics", onClick: () => changePage("analytics") },
// //         { id: "billing", label: "Billing", onClick: () => changePage("billing") },
// //         { id: "salesperformance", label: "Sales Performance", onClick: () => changePage("salesperformance") },
// //         { id: "employeeperformance", label: "Employee Performance", onClick: () => changePage("employeeperformance") },
// //         { id: "expenses", label: "Expenses", onClick: () => changePage("expenses") },
// //         { id: "financial", label: "Financial Analytics", onClick: () => changePage("financial") },
// //       ],
// //     },
// //     {
// //       id: "customers",
// //       label: "Customers",
// //       icon: <UserCheck size={20} />,
// //       submenu: [
// //         { id: "customers", label: "View Customers", onClick: () => changePage("customers") },
// //         { id: "customerSignup", label: "Add Customer", onClick: () => changePage("customerSignup") },
// //         { id: "khata2", label: "Khatabook", onClick: () => changePage("khata2") },
// //         { id: "customerseg", label: "Segmentation", onClick: () => changePage("customerseg") },
// //       ],
// //     },
// //     { id: "suppliers", label: "Suppliers", icon: <Truck size={20} />, onClick: () => changePage("suppliers") },
// //     { id: "stockTracking", label: "Stock Tracking", icon: <Layers size={20} />, onClick: () => changePage("stockTracking") },
// //     { id: "users", label: "User Management", icon: <User size={20} />, onClick: () => changePage("users") },
// //     { id: "settings", label: "Settings", icon: <Settings size={20} />, onClick: () => navigate("/settings") },
// //   ];

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setLoading(false);
// //       setTimeout(() => setAnimateCharts(true), 500);
// //     }, 800);
// //     return () => clearTimeout(timer);
// //   }, [currentPage]);

// //   useEffect(() => {
// //     if (window.innerWidth < 768) setSidebarOpen(false);
// //   }, [location]);

// //   useEffect(() => {
// //     const handleResize = () => window.innerWidth >= 768 && setSidebarOpen(true);
// //     window.addEventListener("resize", handleResize);
// //     handleResize();
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (notificationRef.current && !notificationRef.current.contains(event.target)) setNotificationsOpen(false);
// //       if (userMenuRef.current && !userMenuRef.current.contains(event.target)) setUserMenuOpen(false);
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   useEffect(() => {
// //     const style = document.createElement("style");
// //     style.textContent = `
// //       ::-webkit-scrollbar { width: 8px; height: 8px; }
// //       ::-webkit-scrollbar-track { background: transparent; }
// //       ::-webkit-scrollbar-thumb { background: rgba(156, 163, 175, 0.5); border-radius: 4px; }
// //       ::-webkit-scrollbar-thumb:hover { background: rgba(156, 163, 175, 0.8); }
// //       * { scrollbar-width: thin; scrollbar-color: rgba(156, 163, 175, 0.5) transparent; }
// //     `;
// //     document.head.appendChild(style);
// //     return () => document.head.removeChild(style);
// //   }, []);

// //   useEffect(() => {
// //     // Apply dark mode class to root element and save to localStorage
// //     if (darkMode) {
// //       document.documentElement.classList.add("dark");
// //       localStorage.setItem("theme", "dark");
// //     } else {
// //       document.documentElement.classList.remove("dark");
// //       localStorage.setItem("theme", "light");
// //     }
// //   }, [darkMode]);

// //   const toggleMenu = (menu) => {
// //     setExpandedMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
// //   };

// //   const changePage = (page) => {
// //     setCurrentPage(page);
// //     setLoading(true);
// //     if (window.innerWidth < 768) setSidebarOpen(false);
// //   };

// //   const toggleDarkMode = () => {
// //     setDarkMode((prev) => !prev);
// //   };

// //   const handleLogout = () => {
// //     const currentTheme = localStorage.getItem("theme");
// //     localStorage.clear();
// //     if (currentTheme) localStorage.setItem("theme", currentTheme);
// //     navigate("/LoginPage");
// //   };

// //   const renderDashboard = () => (
// //     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-8">
// //       <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-900 p-6 rounded-2xl shadow-xl text-white">
// //         <h2 className="text-2xl font-bold tracking-tight">Welcome to {storeName || "Your Store"}</h2>
// //         <p className="text-sm opacity-80 mt-1">Your daily performance overview</p>
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //         {stats.map((stat, index) => (
// //           <motion.div
// //             key={index}
// //             initial={{ y: 20, opacity: 0 }}
// //             animate={{ y: 0, opacity: 1 }}
// //             transition={{ duration: 0.5, delay: index * 0.1 }}
// //             className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
// //           >
// //             <div className="flex justify-between items-center mb-4">
// //               <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{stat.title}</span>
// //               {stat.icon}
// //             </div>
// //             <div className="text-3xl font-extrabold text-gray-900 dark:text-white">{stat.value}</div>
// //             <div className={`text-sm mt-2 font-medium ${stat.up ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
// //               {stat.change} {stat.up ? "↑" : "↓"}
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>

// //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// //         <div className="lg:col-span-2 space-y-6">
// //           <motion.div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
// //             <div className="flex justify-between items-center mb-6">
// //               <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
// //                 <ShoppingBag size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
// //                 Recent Transactions
// //               </h3>
// //               <button
// //                 onClick={() => changePage("dailySales")}
// //                 className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center transition-colors"
// //               >
// //                 View All <ChevronRight size={16} className="ml-1" />
// //               </button>
// //             </div>
// //             <div className="overflow-x-auto">
// //               <table className="w-full text-sm">
// //                 <thead className="border-b dark:border-gray-700">
// //                   <tr className="text-gray-600 dark:text-gray-300">
// //                     <th className="py-3 px-4 text-left font-medium">ID</th>
// //                     <th className="py-3 px-4 text-left font-medium">Customer</th>
// //                     <th className="py-3 px-4 text-left font-medium">Amount</th>
// //                     <th className="py-3 px-4 text-left font-medium">Time</th>
// //                     <th className="py-3 px-4 text-left font-medium">Status</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {recentTransactions.map((transaction, index) => (
// //                     <motion.tr
// //                       key={index}
// //                       initial={{ opacity: 0 }}
// //                       animate={{ opacity: 1 }}
// //                       transition={{ delay: index * 0.1 }}
// //                       className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
// //                     >
// //                       <td className="py-4 px-4 text-gray-700 dark:text-gray-200">{transaction.id}</td>
// //                       <td className="py-4 px-4 text-gray-700 dark:text-gray-200">{transaction.customer}</td>
// //                       <td className="py-4 px-4 font-medium text-gray-900 dark:text-white">{transaction.amount}</td>
// //                       <td className="py-4 px-4 text-gray-500 dark:text-gray-400">{transaction.date}</td>
// //                       <td className="py-4 px-4">
// //                         <span
// //                           className={`px-2.5 py-1 rounded-full text-xs font-medium ${
// //                             transaction.status === "completed"
// //                               ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
// //                               : transaction.status === "pending"
// //                               ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300"
// //                               : "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300"
// //                           }`}
// //                         >
// //                           {transaction.status}
// //                         </span>
// //                       </td>
// //                     </motion.tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </motion.div>

// //           <motion.div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
// //             <div className="flex justify-between items-center mb-6">
// //               <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
// //                 <TrendingUp size={20} className="mr-2 text-indigo-600 dark:text-indigo-400" />
// //                 Sales Overview
// //               </h3>
// //               <button
// //                 onClick={() => changePage("salesChart")}
// //                 className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center transition-colors"
// //               >
// //                 Detailed Report <ChevronRight size={16} className="ml-1" />
// //               </button>
// //             </div>
// //             <div className="h-80">
// //               {animateCharts ? (
// //                 <div className="h-full flex items-end space-x-4 px-2">
// //                   {salesData.map((item, index) => (
// //                     <div key={index} className="flex-1 flex flex-col items-center">
// //                       <motion.div
// //                         initial={{ height: 0 }}
// //                         animate={{ height: `${(item.sales / 7000) * 100}%` }}
// //                         transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
// //                         className="w-10 bg-gradient-to-t from-indigo-500 to-blue-500 dark:from-indigo-600 dark:to-blue-600 rounded-t-lg relative group"
// //                       >
// //                         <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
// //                           ${item.sales}
// //                         </span>
// //                       </motion.div>
// //                       <span className="mt-2 text-xs font-medium text-gray-600 dark:text-gray-300">{item.month}</span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               ) : (
// //                 <div className="h-full flex items-center justify-center text-gray-400 dark:text-gray-500 animate-pulse">
// //                   Loading chart data...
// //                 </div>
// //               )}
// //             </div>
// //           </motion.div>
// //         </div>

// //         <div className="space-y-6">
// //           <motion.div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
// //             <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
// //               <Zap size={20} className="mr-2 text-amber-500" />
// //               Quick Access
// //             </h3>
// //             <div className="grid grid-cols-2 gap-4">
// //               {[
// //                 { icon: <Package size={20} />, label: "Products", page: "products", color: "bg-blue-600" },
// //                 { icon: <Users size={20} />, label: "Employees", page: "employees", color: "bg-purple-600" },
// //                 { icon: <DollarSign size={20} />, label: "Sales", page: "dailySales", color: "bg-green-600" },
// //                 { icon: <CreditCard size={20} />, label: "Billing", page: "billing", color: "bg-indigo-600" },
// //                 { icon: <Layers size={20} />, label: "Stock", page: "stockTracking", color: "bg-orange-600" },
// //                 { icon: <Truck size={20} />, label: "Suppliers", page: "suppliers", color: "bg-teal-600" },
// //               ].map((item, index) => (
// //                 <motion.button
// //                   key={index}
// //                   whileHover={{ scale: 1.05 }}
// //                   whileTap={{ scale: 0.95 }}
// //                   onClick={() => changePage(item.page)}
// //                   className={`${item.color} text-white p-4 rounded-xl flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all`}
// //                 >
// //                   {item.icon}
// //                   <span className="mt-2 font-medium text-sm">{item.label}</span>
// //                 </motion.button>
// //               ))}
// //             </div>
// //           </motion.div>

// //           <motion.div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
// //             <div className="flex justify-between items-center mb-6">
// //               <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
// //                 <AlertTriangle size={20} className="mr-2 text-red-500" />
// //                 Low Stock Alert
// //               </h3>
// //               <button
// //                 onClick={() => changePage("restockAlerts")}
// //                 className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
// //               >
// //                 All Alerts
// //               </button>
// //             </div>
// //             <div className="space-y-4">
// //               {lowStockItems.map((item, index) => (
// //                 <motion.div
// //                   key={index}
// //                   initial={{ opacity: 0 }}
// //                   animate={{ opacity: 1 }}
// //                   transition={{ delay: index * 0.1 }}
// //                   className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-750 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
// //                 >
// //                   <div>
// //                     <div className="font-medium text-gray-900 dark:text-white">{item.name}</div>
// //                     <div className="text-xs text-gray-500 dark:text-gray-400">SKU: {item.id}</div>
// //                   </div>
// //                   <div className={`font-medium ${item.current < item.min ? "text-red-600 dark:text-red-400" : "text-gray-700 dark:text-gray-300"}`}>
// //                     {item.current}/{item.min}
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </div>
// //             <motion.button
// //               whileHover={{ scale: 1.02 }}
// //               whileTap={{ scale: 0.98 }}
// //               onClick={() => changePage("suppliers")}
// //               className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-all"
// //             >
// //               <Truck size={16} className="mr-2" />
// //               Place Restock Order
// //             </motion.button>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );

// //   const renderContent = () => {
// //     switch (currentPage) {
// //       case "dashboard": return renderDashboard();
// //       case "Login": return <LoginPage />;
// //       case "products": return <ProductDashboard />;
// //       case "employees": return <EmployeeManagement />;
// //       case "roles": return <RoleDistribution />;
// //       case "dailySales": return <DailySales />;
// //       case "stockTracking": return <StockTracking />;
// //       case "employeeSearch": return <EmployeeSearch />;
// //       case "billing": return <Billing />;
// //       case "customerSignup": return <CustomerSignupForm />;
// //       case "customers": return <ViewCustomers />;
// //       case "salesChart": return <SalesChart />;
// //       case "productSales": return <ProductSales />;
// //       case "inventory": return <InventoryDashboard />;
// //       case "users": return <UserManagementPage />;
// //       case "restockAlerts": return <ProductDashboard2 />;
// //       case "suppliers": return <SupplierManagement />;
// //       case "batch": return <BatchExpiryTracker />;
// //       case "damage": return <DamageItemsManagement />;
// //       case "emp": return <EmployeeSales />;
// //       case "attendance": return <EmployeeAttendanceForm />;
// //       case "face": return <FacialRecognitionAttendance />;
// //       case "add_face": return <AddEmployeeFace />;
// //       case "salaries": return <EmployeesSalaryManagement />;
// //       case "analytics": return <SalesAnalyticsDashboard />;
// //       case "khata2": return <KhatabookPage />;
// //       case "UserProfile": return <UserProfile />;
// //       case "category": return <SearchProductsByCategory />;
// //       case "salesperformance": return <SalesPerformanceDashboard />;
// //       case "employeeperformance": return <EmployeePerformanceReports />;
// //       case "expenses": return <ExpenseTracker />;
// //       case "financial": return <FinancialAnalytics />;
// //       case "customerseg": return <CustomerSegmentation />;
// //       default: return renderDashboard();
// //     }
// //   };

// //   return (
// //     <div className={`min-h-screen ${darkMode ? "dark" : ""} bg-gray-100 dark:bg-gray-900 flex font-sans antialiased`}>
// //       {/* Sidebar */}
// //       <aside
// //         className={`fixed top-0 left-0 w-72 h-screen bg-white dark:bg-gray-800 shadow-2xl transform transition-transform duration-300 z-30 overflow-y-auto ${
// //           sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
// //         }`}
// //       >
// //         <div className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-900 text-white p-4 flex items-center justify-between shadow-md">
// //           <div className="flex items-center space-x-3">
// //             <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-blue-600 font-extrabold text-xl shadow-lg">S</div>
// //             <h1 className="text-xl font-bold truncate">{storeName || "Store Manager"}</h1>
// //           </div>
// //           <button onClick={() => setSidebarOpen(false)} className="md:hidden text-white hover:text-gray-200 transition-colors">
// //             <X size={24} />
// //           </button>
// //         </div>

// //         <div className="p-6 space-y-6">
// //           <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-sm">
// //             <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-extrabold text-xl shadow-md">A</div>
// //             <div>
// //               <div className="font-semibold text-gray-900 dark:text-white text-lg">Prem Sai Siddhik</div>
// //               <div className="text-sm text-gray-600 dark:text-gray-400">Admin</div>
// //             </div>
// //           </div>

// //           <div className="relative">
// //             <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// //             <input
// //               type="text"
// //               placeholder="Search..."
// //               className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-sm shadow-sm transition-all"
// //             />
// //           </div>

// //           <nav className="space-y-2">
// //             {navigationMenu.map((item) => (
// //               <div key={item.id}>
// //                 {item.submenu ? (
// //                   <>
// //                     <button
// //                       onClick={() => toggleMenu(item.id)}
// //                       className={`flex items-center justify-between w-full p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all ${
// //                         expandedMenus[item.id] ? "bg-gray-100 dark:bg-gray-700" : ""
// //                       }`}
// //                     >
// //                       <div className="flex items-center space-x-3">
// //                         <span className={`${currentPage === item.id || item.submenu.some((sub) => sub.id === currentPage) ? "text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-400"}`}>{item.icon}</span>
// //                         <span className={`font-medium ${currentPage === item.id || item.submenu.some((sub) => sub.id === currentPage) ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-white"}`}>{item.label}</span>
// //                       </div>
// //                       {expandedMenus[item.id] ? <ChevronDown size={20} className="text-gray-500" /> : <ChevronRight size={20} className="text-gray-500" />}
// //                     </button>
// //                     <AnimatePresence>
// //                       {expandedMenus[item.id] && (
// //                         <motion.ul initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.3 }} className="pl-8 space-y-1 mt-1">
// //                           {item.submenu.map((subItem) => (
// //                             <li key={subItem.id}>
// //                               <button
// //                                 onClick={subItem.onClick}
// //                                 className={`w-full text-left p-2 rounded-lg text-sm ${
// //                                   currentPage === subItem.id ? "bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400 font-semibold" : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
// //                                 } transition-colors`}
// //                               >
// //                                 {subItem.label}
// //                               </button>
// //                             </li>
// //                           ))}
// //                         </motion.ul>
// //                       )}
// //                     </AnimatePresence>
// //                   </>
// //                 ) : (
// //                   <button
// //                     onClick={item.onClick}
// //                     className={`flex items-center w-full p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all ${
// //                       currentPage === item.id ? "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-white"
// //                     }`}
// //                   >
// //                     <span className={`mr-3 ${currentPage === item.id ? "text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-400"}`}>{item.icon}</span>
// //                     <span className="font-medium">{item.label}</span>
// //                   </button>
// //                 )}
// //               </div>
// //             ))}
// //           </nav>
// //         </div>
// //       </aside>

// //       {/* Mobile menu button */}
// //       <button
// //         onClick={() => setSidebarOpen(true)}
// //         className={`md:hidden fixed top-4 left-4 z-40 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all ${sidebarOpen ? "hidden" : "block"}`}
// //       >
// //         <Menu size={24} className="text-gray-700 dark:text-gray-300" />
// //       </button>

// //       {/* Main content */}
// //       <div className="flex-1 md:ml-72">
// //         <header className="bg-white dark:bg-gray-800 shadow-lg border-b dark:border-gray-700 fixed top-0 right-0 md:left-72 left-0 z-20">
// //           <div className="px-6 py-4 flex justify-between items-center">
// //             <h1 className="text-2xl font-bold text-gray-900 dark:text-white capitalize tracking-tight">
// //               {currentPage === "dashboard" ? "Dashboard" : currentPage.replace(/([A-Z])/g, " $1").trim()}
// //             </h1>
// //             <div className="flex items-center space-x-4">
// //               <div className="relative" ref={notificationRef}>
// //                 <button
// //                   onClick={() => setNotificationsOpen(!notificationsOpen)}
// //                   className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative transition-colors"
// //                 >
// //                   <Bell size={22} className="text-gray-600 dark:text-gray-400" />
// //                   <span className="absolute top-0 right-0 h-5 w-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center shadow-md">3</span>
// //                 </button>
// //                 <AnimatePresence>
// //                   {notificationsOpen && (
// //                     <motion.div
// //                       initial={{ opacity: 0, y: -10 }}
// //                       animate={{ opacity: 1, y: 0 }}
// //                       exit={{ opacity: 0, y: -10 }}
// //                       transition={{ duration: 0.2 }}
// //                       className="absolute right-0 mt-3 w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border dark:border-gray-700 p-4 z-50"
// //                     >
// //                       <div className="flex justify-between items-center mb-4">
// //                         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h3>
// //                         <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">Mark all as read</button>
// //                       </div>
// //                       {notifications.map((notification) => (
// //                         <div key={notification.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
// //                           <div
// //                             className={`p-2 rounded-full ${
// //                               notification.type === "alert" ? "bg-red-100 dark:bg-red-900/50" : notification.type === "order" ? "bg-green-100 dark:bg-green-900/50" : "bg-blue-100 dark:bg-blue-900/50"
// //                             }`}
// //                           >
// //                             <Bell
// //                               size={16}
// //                               className={`${notification.type === "alert" ? "text-red-600 dark:text-red-400" : notification.type === "order" ? "text-green-600 dark:text-green-400" : "text-blue-600 dark:text-blue-400"}`}
// //                             />
// //                           </div>
// //                           <div className="flex-1">
// //                             <div className="text-sm font-medium text-gray-900 dark:text-white">{notification.title}</div>
// //                             <div className="text-xs text-gray-600 dark:text-gray-400">{notification.message}</div>
// //                             <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">{notification.time}</div>
// //                           </div>
// //                         </div>
// //                       ))}
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </div>

// //               <button
// //                 onClick={toggleDarkMode}
// //                 className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
// //                 title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
// //               >
// //                 {darkMode ? (
// //                   <Sun size={22} className="text-gray-600 dark:text-yellow-400" />
// //                 ) : (
// //                   <Moon size={22} className="text-gray-600 dark:text-gray-400" />
// //                 )}
// //               </button>

// //               <div className="relative" ref={userMenuRef}>
// //                 <button onClick={() => setUserMenuOpen(!userMenuOpen)} className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
// //                   <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-extrabold shadow-md">A</div>
// //                   <span className="hidden md:block font-medium text-gray-900 dark:text-white">Prem Sai</span>
// //                   <ChevronDown size={18} className="hidden md:block text-gray-600 dark:text-gray-400" />
// //                 </button>
// //                 <AnimatePresence>
// //                   {userMenuOpen && (
// //                     <motion.div
// //                       initial={{ opacity: 0, y: -10 }}
// //                       animate={{ opacity: 1, y: 0 }}
// //                       exit={{ opacity: 0, y: -10 }}
// //                       transition={{ duration: 0.2 }}
// //                       className="absolute right-0 mt-3 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border dark:border-gray-700 p-2 z-50"
// //                     >
// //                       <button
// //                         onClick={() => changePage("UserProfile")}
// //                         className="w-full p-3 text-left flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
// //                       >
// //                         <User size={18} className="mr-3 text-gray-600 dark:text-gray-400" />
// //                         Profile
// //                       </button>
// //                       <button
// //                         onClick={toggleDarkMode}
// //                         className="w-full p-3 text-left flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
// //                       >
// //                         {darkMode ? (
// //                           <>
// //                             <Sun size={18} className="mr-3 text-gray-600 dark:text-yellow-400" />
// //                             Light Mode
// //                           </>
// //                         ) : (
// //                           <>
// //                             <Moon size={18} className="mr-3 text-gray-600 dark:text-gray-400" />
// //                             Dark Mode
// //                           </>
// //                         )}
// //                       </button>
// //                       <button
// //                         onClick={() => navigate("/settings")}
// //                         className="w-full p-3 text-left flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
// //                       >
// //                         <Settings size={18} className="mr-3 text-gray-600 dark:text-gray-400" />
// //                         Settings
// //                       </button>
// //                       <div className="my-2 border-t dark:border-gray-700" />
// //                       <button
// //                         onClick={handleLogout}
// //                         className="w-full p-3 text-left flex items-center text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/50 rounded-xl transition-colors"
// //                       >
// //                         <LogOut size={18} className="mr-3" />
// //                         Logout
// //                       </button>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </div>
// //             </div>
// //           </div>
// //         </header>

// //         <main className="p-8 mt-20 min-h-[calc(100vh-5rem)]">
// //           {loading ? (
// //             <div className="flex items-center justify-center h-64">
// //               <motion.div
// //                 animate={{ rotate: 360 }}
// //                 transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
// //                 className="w-12 h-12 border-4 border-blue-500 dark:border-blue-400 border-t-transparent rounded-full"
// //               />
// //             </div>
// //           ) : (
// //             renderContent()
// //           )}
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;
// import { useState, useContext, useEffect, useRef } from "react";
// import { StoreContext } from "./StoreContext";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   Menu,
//   Package,
//   Users,
//   BarChart2,
//   Settings,
//   CreditCard,
//   X,
//   DollarSign,
//   UserCheck,
//   Search,
//   Bell,
//   LogOut,
//   Truck,
//   Layers,
//   ShoppingBag,
//   ChevronRight,
//   ChevronDown,
//   AlertTriangle,
//   User,
//   Zap,
//   TrendingUp,
//   Sun,
//   Moon,
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// // Import all components
// import ProductDashboard from "./ProductManagement";
// import EmployeeManagement from "./EmployeeManagement";
// import RoleDistribution from "./RoleDistribution";
// import DailySales from "./DailySales";
// import StockTracking from "./StockTracking";
// import EmployeeSearch from "./EmployeeSearch";
// import Billing from "./Billing";
// import CustomerSignupForm from "./CustomerSignUpForm";
// import ViewCustomers from "./ViewCustomers";
// import SalesChart from "./SalesChart";
// import ProductSales from "./ProductSales";
// import InventoryDashboard from "./InventoryDashboard";
// import UserManagementPage from "./UserManagement";
// import ProductDashboard2 from "./RestockAlerts";
// import SupplierManagement from "./Supc";
// import BatchExpiryTracker from "./BatchExpiryTracker";
// import DamageItemsManagement from "./DamageItemsManagement";
// import EmployeeSales from "./EmployeeSales";
// import EmployeeAttendanceForm from "./EmployeeAttendance";
// import FacialRecognitionAttendance from "./FacialRecognitionAttendance";
// import AddEmployeeFace from "./AddEmployeeFace";
// import EmployeesSalaryManagement from "./EmployeesSalaryManagement";
// import SalesAnalyticsDashboard from "./SalesAnalyticsDashboard";
// import KhatabookPage from "./Khatabook2";
// import UserProfile from "./UserProfile";
// import SearchProductsByCategory from "./ProductCategorization";
// import LoginPage from "./LoginPage";
// import SalesPerformanceDashboard from "./SalesPerformanceReports";
// import EmployeePerformanceReports from "./EmployeePerformanceReports";
// import ExpenseTracker from "./Expenses";
// import FinancialAnalytics from "./FinancialAnalytics";
// import CustomerSegmentation from "./CustomerSegmentation";

// const AdminDashboard = () => {
//   const { storeName } = useContext(StoreContext);
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [currentPage, setCurrentPage] = useState("dashboard");
//   const [expandedMenus, setExpandedMenus] = useState({
//     products: false,
//     employees: false,
//     sales: false,
//     customers: false,
//     suppliers: false,
//   });
//   const [notificationsOpen, setNotificationsOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(() => {
//     // Check localStorage or default to system preference
//     const savedTheme = localStorage.getItem("theme");
//     return savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
//   });
//   const [loading, setLoading] = useState(true);
//   const [animateCharts, setAnimateCharts] = useState(false);

//   const notificationRef = useRef(null);
//   const userMenuRef = useRef(null);

//   const stats = [
//     { title: "Total Sales Today", value: "$5,890", change: "+15%", up: true, icon: <DollarSign size={24} className="text-green-500" /> },
//     { title: "Low Stock Items", value: "24", change: "+8", up: false, icon: <AlertTriangle size={24} className="text-amber-500" /> },
//     { title: "Today's Orders", value: "42", change: "+12%", up: true, icon: <ShoppingBag size={24} className="text-blue-500" /> },
//     { title: "Active Employees", value: "18", change: "0", up: true, icon: <Users size={24} className="text-purple-500" /> },
//   ];

//   const recentTransactions = [
//     { id: "#TRX-4589", customer: "John Smith", amount: "$129.50", date: "20 min ago", status: "completed", paymentMethod: "Credit Card" },
//     { id: "#TRX-4588", customer: "Lisa Wong", amount: "$245.75", date: "45 min ago", status: "completed", paymentMethod: "PayPal" },
//     { id: "#TRX-4587", customer: "Mike Johnson", amount: "$67.25", date: "1 hr ago", status: "pending", paymentMethod: "Credit Card" },
//     { id: "#TRX-4586", customer: "Sara Miller", amount: "$352.00", date: "2 hrs ago", status: "completed", paymentMethod: "Bank Transfer" },
//     { id: "#TRX-4585", customer: "David Chen", amount: "$84.30", date: "3 hrs ago", status: "failed", paymentMethod: "Credit Card" },
//   ];

//   const lowStockItems = [
//     { id: "P-1245", name: "Premium Coffee Beans", current: 12, min: 20, reorderStatus: "urgent" },
//     { id: "P-2340", name: "Organic Green Tea", current: 8, min: 15, reorderStatus: "pending" },
//     { id: "P-1023", name: "Vitamin C Tablets", current: 5, min: 10, reorderStatus: "ordered" },
//     { id: "P-3456", name: "Almond Milk", current: 9, min: 12, reorderStatus: "urgent" },
//   ];

//   const salesData = [
//     { month: "Jan", sales: 4500, target: 4000 },
//     { month: "Feb", sales: 5200, target: 4200 },
//     { month: "Mar", sales: 4800, target: 4400 },
//     { month: "Apr", sales: 5500, target: 4600 },
//     { month: "May", sales: 6200, target: 4800 },
//     { month: "Jun", sales: 5900, target: 5000 },
//     { month: "Jul", sales: 6500, target: 5200 },
//   ];

//   const notifications = [
//     { id: 1, title: "Low stock alert", message: "4 products need reordering", time: "10 min ago", read: false, type: "alert" },
//     { id: 2, title: "New order received", message: "Order #12458 from John D.", time: "25 min ago", read: false, type: "order" },
//     { id: 3, title: "Staff meeting", message: "Reminder: Meeting at 3 PM", time: "2 hours ago", read: true, type: "reminder" },
//     { id: 4, title: "System update", message: "Maintenance scheduled for tonight", time: "1 day ago", read: true, type: "system" },
//   ];

//   const navigationMenu = [
//     { id: "dashboard", label: "Dashboard", icon: <BarChart2 size={20} />, onClick: () => changePage("dashboard") },
//     {
//       id: "products",
//       label: "Products",
//       icon: <Package size={20} />,
//       submenu: [
//         { id: "products", label: "All Products", onClick: () => changePage("products") },
//         { id: "restockAlerts", label: "Restock Alerts", onClick: () => changePage("restockAlerts") },
//         { id: "batch", label: "Batch Expiry", onClick: () => changePage("batch") },
//         { id: "damage", label: "Damaged Items", onClick: () => changePage("damage") },
//         { id: "category", label: "Categories", onClick: () => changePage("category") },
//       ],
//     },
//     {
//       id: "employees",
//       label: "Employees",
//       icon: <Users size={20} />,
//       submenu: [
//         { id: "employees", label: "Manage Employees", onClick: () => changePage("employees") },
//         { id: "roles", label: "Roles & Permissions", onClick: () => changePage("roles") },
//         { id: "attendance", label: "Attendance", onClick: () => changePage("attendance") },
//         { id: "add_face", label: "Add Face ID", onClick: () => changePage("add_face") },
//         { id: "face", label: "Face Recognition", onClick: () => changePage("face") },
//         { id: "employeeSearch", label: "Employee Search", onClick: () => changePage("employeeSearch") },
//         { id: "emp", label: "Employee Sales", onClick: () => changePage("emp") },
//         { id: "salaries", label: "Salaries", onClick: () => changePage("salaries") },
//       ],
//     },
//     {
//       id: "sales",
//       label: "Sales",
//       icon: <DollarSign size={20} />,
//       submenu: [
//         { id: "dailySales", label: "Daily Sales", onClick: () => changePage("dailySales") },
//         { id: "salesChart", label: "Sales Reports", onClick: () => changePage("salesChart") },
//         { id: "analytics", label: "Analytics", onClick: () => changePage("analytics") },
//         { id: "billing", label: "Billing", onClick: () => changePage("billing") },
//         { id: "expenses", label: "Expenses", onClick: () => changePage("expenses") },
//       ],
//     },
//     {
//       id: "customers",
//       label: "Customers",
//       icon: <UserCheck size={20} />,
//       submenu: [
//         { id: "customers", label: "View Customers", onClick: () => changePage("customers") },
//         { id: "customerSignup", label: "Add Customer", onClick: () => changePage("customerSignup") },
//         { id: "khata2", label: "Khatabook", onClick: () => changePage("khata2") },
//       ],
//     },
//     {
//         id: "reports",
//         label: "Reports",
//         icon: <UserCheck size={20} />,
//         submenu: [
//           { id: "customerseg", label: "Segmentation", onClick: () => changePage("customerseg") },
//           { id: "financial", label: "Financial Analytics", onClick: () => changePage("financial") },
//           { id: "salesperformance", label: "Sales Performance", onClick: () => changePage("salesperformance") },
//           { id: "employeeperformance", label: "Employee Performance", onClick: () => changePage("employeeperformance") },
//           { id: "productSales", label: "Product Sales", onClick: () => changePage("productSales") },

//         ],
//       },
//     { id: "suppliers", label: "Suppliers", icon: <Truck size={20} />, onClick: () => changePage("suppliers") },
//     { id: "stockTracking", label: "Stock Tracking", icon: <Layers size={20} />, onClick: () => changePage("stockTracking") },
//     { id: "users", label: "User Management", icon: <User size={20} />, onClick: () => changePage("users") },
//     { id: "settings", label: "Settings", icon: <Settings size={20} />, onClick: () => navigate("/settings") },
//   ];

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//       setTimeout(() => setAnimateCharts(true), 500);
//     }, 800);
//     return () => clearTimeout(timer);
//   }, [currentPage]);

//   useEffect(() => {
//     if (window.innerWidth < 768) setSidebarOpen(false);
//   }, [location]);

//   useEffect(() => {
//     const handleResize = () => window.innerWidth >= 768 && setSidebarOpen(true);
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (notificationRef.current && !notificationRef.current.contains(event.target)) setNotificationsOpen(false);
//       if (userMenuRef.current && !userMenuRef.current.contains(event.target)) setUserMenuOpen(false);
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     const style = document.createElement("style");
//     style.textContent = `
//       ::-webkit-scrollbar { width: 8px; height: 8px; }
//       ::-webkit-scrollbar-track { background: transparent; }
//       ::-webkit-scrollbar-thumb { background: rgba(156, 163, 175, 0.5); border-radius: 4px; }
//       ::-webkit-scrollbar-thumb:hover { background: rgba(156, 163, 175, 0.8); }
//       * { scrollbar-width: thin; scrollbar-color: rgba(156, 163, 175, 0.5) transparent; }
//     `;
//     document.head.appendChild(style);
//     return () => document.head.removeChild(style);
//   }, []);

//   useEffect(() => {
//     // Apply dark mode class to root element and save to localStorage
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   const toggleMenu = (menu) => {
//     setExpandedMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
//   };

//   const changePage = (page) => {
//     setCurrentPage(page);
//     setLoading(true);
//     if (window.innerWidth < 768) setSidebarOpen(false);
//   };

//   const handleToggleDarkMode = () => {
//     setDarkMode((prevMode) => !prevMode);
//   };

//   const handleLogout = () => {
//     const currentTheme = localStorage.getItem("theme");
//     localStorage.clear();
//     if (currentTheme) localStorage.setItem("theme", currentTheme);
//     navigate("/LoginPage");
//   };

//   const renderDashboard = () => (
//     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-8">
//       <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-900 p-6 rounded-2xl shadow-xl text-white">
//         <h2 className="text-2xl font-bold tracking-tight">Welcome to {storeName || "Your Store"}</h2>
//         <p className="text-sm opacity-80 mt-1">Your daily performance overview</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {stats.map((stat, index) => (
//           <motion.div
//             key={index}
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
//           >
//             <div className="flex justify-between items-center mb-4">
//               <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{stat.title}</span>
//               {stat.icon}
//             </div>
//             <div className="text-3xl font-extrabold text-gray-900 dark:text-white">{stat.value}</div>
//             <div className={`text-sm mt-2 font-medium ${stat.up ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
//               {stat.change} {stat.up ? "↑" : "↓"}
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="lg:col-span-2 space-y-6">
//           <motion.div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
//                 <ShoppingBag size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
//                 Recent Transactions
//               </h3>
//               <button
//                 onClick={() => changePage("dailySales")}
//                 className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center transition-colors"
//               >
//                 View All <ChevronRight size={16} className="ml-1" />
//               </button>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full text-sm">
//                 <thead className="border-b dark:border-gray-700">
//                   <tr className="text-gray-600 dark:text-gray-300">
//                     <th className="py-3 px-4 text-left font-medium">ID</th>
//                     <th className="py-3 px-4 text-left font-medium">Customer</th>
//                     <th className="py-3 px-4 text-left font-medium">Amount</th>
//                     <th className="py-3 px-4 text-left font-medium">Time</th>
//                     <th className="py-3 px-4 text-left font-medium">Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {recentTransactions.map((transaction, index) => (
//                     <motion.tr
//                       key={index}
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: index * 0.1 }}
//                       className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
//                     >
//                       <td className="py-4 px-4 text-gray-700 dark:text-gray-200">{transaction.id}</td>
//                       <td className="py-4 px-4 text-gray-700 dark:text-gray-200">{transaction.customer}</td>
//                       <td className="py-4 px-4 font-medium text-gray-900 dark:text-white">{transaction.amount}</td>
//                       <td className="py-4 px-4 text-gray-500 dark:text-gray-400">{transaction.date}</td>
//                       <td className="py-4 px-4">
//                         <span
//                           className={`px-2.5 py-1 rounded-full text-xs font-medium ${
//                             transaction.status === "completed"
//                               ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
//                               : transaction.status === "pending"
//                               ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300"
//                               : "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300"
//                           }`}
//                         >
//                           {transaction.status}
//                         </span>
//                       </td>
//                     </motion.tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           <motion.div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
//                 <TrendingUp size={20} className="mr-2 text-indigo-600 dark:text-indigo-400" />
//                 Sales Overview
//               </h3>
//               <button
//                 onClick={() => changePage("salesChart")}
//                 className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center transition-colors"
//               >
//                 Detailed Report <ChevronRight size={16} className="ml-1" />
//               </button>
//             </div>
//             <div className="h-80">
//               {animateCharts ? (
//                 <div className="h-full flex items-end space-x-4 px-2">
//                   {salesData.map((item, index) => (
//                     <div key={index} className="flex-1 flex flex-col items-center">
//                       <motion.div
//                         initial={{ height: 0 }}
//                         animate={{ height: `${(item.sales / 7000) * 100}%` }}
//                         transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
//                         className="w-10 bg-gradient-to-t from-indigo-500 to-blue-500 dark:from-indigo-600 dark:to-blue-600 rounded-t-lg relative group"
//                       >
//                         <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
//                           ${item.sales}
//                         </span>
//                       </motion.div>
//                       <span className="mt-2 text-xs font-medium text-gray-600 dark:text-gray-300">{item.month}</span>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="h-full flex items-center justify-center text-gray-400 dark:text-gray-500 animate-pulse">
//                   Loading chart data...
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         </div>

//         <div className="space-y-6">
//           <motion.div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
//             <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
//               <Zap size={20} className="mr-2 text-amber-500" />
//               Quick Access
//             </h3>
//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 { icon: <Package size={20} />, label: "Products", page: "products", color: "bg-blue-600" },
//                 { icon: <Users size={20} />, label: "Employees", page: "employees", color: "bg-purple-600" },
//                 { icon: <DollarSign size={20} />, label: "Sales", page: "dailySales", color: "bg-green-600" },
//                 { icon: <CreditCard size={20} />, label: "Billing", page: "billing", color: "bg-indigo-600" },
//                 { icon: <Layers size={20} />, label: "Stock", page: "stockTracking", color: "bg-orange-600" },
//                 { icon: <Truck size={20} />, label: "Suppliers", page: "suppliers", color: "bg-teal-600" },
//               ].map((item, index) => (
//                 <motion.button
//                   key={index}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => changePage(item.page)}
//                   className={`${item.color} text-white p-4 rounded-xl flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all`}
//                 >
//                   {item.icon}
//                   <span className="mt-2 font-medium text-sm">{item.label}</span>
//                 </motion.button>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
//                 <AlertTriangle size={20} className="mr-2 text-red-500" />
//                 Low Stock Alert
//               </h3>
//               <button
//                 onClick={() => changePage("restockAlerts")}
//                 className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
//               >
//                 All Alerts
//               </button>
//             </div>
//             <div className="space-y-4">
//               {lowStockItems.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-750 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
//                 >
//                   <div>
//                     <div className="font-medium text-gray-900 dark:text-white">{item.name}</div>
//                     <div className="text-xs text-gray-500 dark:text-gray-400">SKU: {item.id}</div>
//                   </div>
//                   <div className={`font-medium ${item.current < item.min ? "text-red-600 dark:text-red-400" : "text-gray-700 dark:text-gray-300"}`}>
//                     {item.current}/{item.min}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={() => changePage("suppliers")}
//               className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-all"
//             >
//               <Truck size={16} className="mr-2" />
//               Place Restock Order
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );

//   const renderContent = () => {
//     switch (currentPage) {
//       case "dashboard": return renderDashboard();
//       case "Login": return <LoginPage />;
//       case "products": return <ProductDashboard />;
//       case "employees": return <EmployeeManagement />;
//       case "roles": return <RoleDistribution />;
//       case "dailySales": return <DailySales />;
//       case "stockTracking": return <StockTracking />;
//       case "employeeSearch": return <EmployeeSearch />;
//       case "billing": return <Billing />;
//       case "customerSignup": return <CustomerSignupForm />;
//       case "customers": return <ViewCustomers />;
//       case "salesChart": return <SalesChart />;
//       case "productSales": return <ProductSales />;
//       case "inventory": return <InventoryDashboard />;
//       case "users": return <UserManagementPage />;
//       case "restockAlerts": return <ProductDashboard2 />;
//       case "suppliers": return <SupplierManagement />;
//       case "batch": return <BatchExpiryTracker />;
//       case "damage": return <DamageItemsManagement />;
//       case "emp": return <EmployeeSales />;
//       case "attendance": return <EmployeeAttendanceForm />;
//       case "face": return <FacialRecognitionAttendance />;
//       case "add_face": return <AddEmployeeFace />;
//       case "salaries": return <EmployeesSalaryManagement />;
//       case "analytics": return <SalesAnalyticsDashboard />;
//       case "khata2": return <KhatabookPage />;
//       case "UserProfile": return <UserProfile />;
//       case "category": return <SearchProductsByCategory />;
//       case "salesperformance": return <SalesPerformanceDashboard />;
//       case "employeeperformance": return <EmployeePerformanceReports />;
//       case "expenses": return <ExpenseTracker />;
//       case "financial": return <FinancialAnalytics />;
//       case "customerseg": return <CustomerSegmentation />;
//       default: return renderDashboard();
//     }
//   };

//   return (
//     <div className={`min-h-screen ${darkMode ? "dark" : ""} bg-gray-100 dark:bg-gray-900 flex font-sans antialiased`}>
//       {/* Sidebar */}
//       <aside
//         className={`fixed top-0 left-0 w-72 h-screen bg-white dark:bg-gray-800 shadow-2xl transform transition-transform duration-300 z-30 overflow-y-auto ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
//         }`}
//       >
//         <div className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-900 text-white p-4 flex items-center justify-between shadow-md">
//           <div className="flex items-center space-x-3">
//             <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-blue-600 font-extrabold text-xl shadow-lg">S</div>
//             <h1 className="text-xl font-bold truncate">{storeName || "Store Manager"}</h1>
//           </div>
//           <button onClick={() => setSidebarOpen(false)} className="md:hidden text-white hover:text-gray-200 transition-colors">
//             <X size={24} />
//           </button>
//         </div>

//         <div className="p-6 space-y-6">
//           <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-sm">
//             <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-extrabold text-xl shadow-md">A</div>
//             <div>
//               <div className="font-semibold text-gray-900 dark:text-white text-lg">Prem Sai Siddhik</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">Admin</div>
//             </div>
//           </div>

//           <div className="relative">
//             <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-sm shadow-sm transition-all"
//             />
//           </div>

//           <nav className="space-y-2">
//             {navigationMenu.map((item) => (
//               <div key={item.id}>
//                 {item.submenu ? (
//                   <>
//                     <button
//                       onClick={() => toggleMenu(item.id)}
//                       className={`flex items-center justify-between w-full p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all ${
//                         expandedMenus[item.id] ? "bg-gray-100 dark:bg-gray-700" : ""
//                       }`}
//                     >
//                       <div className="flex items-center space-x-3">
//                         <span className={`${currentPage === item.id || item.submenu.some((sub) => sub.id === currentPage) ? "text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-400"}`}>{item.icon}</span>
//                         <span className={`font-medium ${currentPage === item.id || item.submenu.some((sub) => sub.id === currentPage) ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-white"}`}>{item.label}</span>
//                       </div>
//                       {expandedMenus[item.id] ? <ChevronDown size={20} className="text-gray-500" /> : <ChevronRight size={20} className="text-gray-500" />}
//                     </button>
//                     <AnimatePresence>
//                       {expandedMenus[item.id] && (
//                         <motion.ul initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.3 }} className="pl-8 space-y-1 mt-1">
//                           {item.submenu.map((subItem) => (
//                             <li key={subItem.id}>
//                               <button
//                                 onClick={subItem.onClick}
//                                 className={`w-full text-left p-2 rounded-lg text-sm ${
//                                   currentPage === subItem.id ? "bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400 font-semibold" : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
//                                 } transition-colors`}
//                               >
//                                 {subItem.label}
//                               </button>
//                             </li>
//                           ))}
//                         </motion.ul>
//                       )}
//                     </AnimatePresence>
//                   </>
//                 ) : (
//                   <button
//                     onClick={item.onClick}
//                     className={`flex items-center w-full p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all ${
//                       currentPage === item.id ? "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-white"
//                     }`}
//                   >
//                     <span className={`mr-3 ${currentPage === item.id ? "text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-400"}`}>{item.icon}</span>
//                     <span className="font-medium">{item.label}</span>
//                   </button>
//                 )}
//               </div>
//             ))}
//           </nav>
//         </div>
//       </aside>

//       {/* Mobile menu button */}
//       <button
//         onClick={() => setSidebarOpen(true)}
//         className={`md:hidden fixed top-4 left-4 z-40 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all ${sidebarOpen ? "hidden" : "block"}`}
//       >
//         <Menu size={24} className="text-gray-700 dark:text-gray-300" />
//       </button>

//       {/* Main content */}
//       <div className="flex-1 md:ml-72">
//         <header className="bg-white dark:bg-gray-800 shadow-lg border-b dark:border-gray-700 fixed top-0 right-0 md:left-72 left-0 z-20">
//           <div className="px-6 py-4 flex justify-between items-center">
//             <h1 className="text-2xl font-bold text-gray-900 dark:text-white capitalize tracking-tight">
//               {currentPage === "dashboard" ? "Dashboard" : currentPage.replace(/([A-Z])/g, " $1").trim()}
//             </h1>
//             <div className="flex items-center space-x-4">
//               <div className="relative" ref={notificationRef}>
//                 <button
//                   onClick={() => setNotificationsOpen(!notificationsOpen)}
//                   className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative transition-colors"
//                 >
//                   <Bell size={22} className="text-gray-600 dark:text-gray-400" />
//                   <span className="absolute top-0 right-0 h-5 w-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center shadow-md">3</span>
//                 </button>
//                 <AnimatePresence>
//                   {notificationsOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.2 }}
//                       className="absolute right-0 mt-3 w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border dark:border-gray-700 p-4 z-50"
//                     >
//                       <div className="flex justify-between items-center mb-4">
//                         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h3>
//                         <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">Mark all as read</button>
//                       </div>
//                       {notifications.map((notification) => (
//                         <div key={notification.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
//                           <div
//                             className={`p-2 rounded-full ${
//                               notification.type === "alert" ? "bg-red-100 dark:bg-red-900/50" : notification.type === "order" ? "bg-green-100 dark:bg-green-900/50" : "bg-blue-100 dark:bg-blue-900/50"
//                             }`}
//                           >
//                             <Bell
//                               size={16}
//                               className={`${notification.type === "alert" ? "text-red-600 dark:text-red-400" : notification.type === "order" ? "text-green-600 dark:text-green-400" : "text-blue-600 dark:text-blue-400"}`}
//                             />
//                           </div>
//                           <div className="flex-1">
//                             <div className="text-sm font-medium text-gray-900 dark:text-white">{notification.title}</div>
//                             <div className="text-xs text-gray-600 dark:text-gray-400">{notification.message}</div>
//                             <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">{notification.time}</div>
//                           </div>
//                         </div>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               <button
//                 onClick={handleToggleDarkMode}
//                 className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
//                 title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//               >
//                 {darkMode ? (
//                   <Sun size={22} className="text-gray-600 dark:text-yellow-400" />
//                 ) : (
//                   <Moon size={22} className="text-gray-600 dark:text-gray-400" />
//                 )}
//               </button>

//               <div className="relative" ref={userMenuRef}>
//                 <button onClick={() => setUserMenuOpen(!userMenuOpen)} className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
//                   <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-extrabold shadow-md">A</div>
//                   <span className="hidden md:block font-medium text-gray-900 dark:text-white">Prem Sai</span>
//                   <ChevronDown size={18} className="hidden md:block text-gray-600 dark:text-gray-400" />
//                 </button>
//                 <AnimatePresence>
//                   {userMenuOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.2 }}
//                       className="absolute right-0 mt-3 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border dark:border-gray-700 p-2 z-50"
//                     >
//                       <button
//                         onClick={() => changePage("UserProfile")}
//                         className="w-full p-3 text-left flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
//                       >
//                         <User size={18} className="mr-3 text-gray-600 dark:text-gray-400" />
//                         Profile
//                       </button>
//                       <button
//                         onClick={handleToggleDarkMode}
//                         className="w-full p-3 text-left flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
//                       >
//                         {darkMode ? (
//                           <>
//                             <Sun size={18} className="mr-3 text-gray-600 dark:text-yellow-400" />
//                             Light Mode
//                           </>
//                         ) : (
//                           <>
//                             <Moon size={18} className="mr-3 text-gray-600 dark:text-gray-400" />
//                             Dark Mode
//                           </>
//                         )}
//                       </button>
//                       <button
//                         onClick={() => navigate("/settings")}
//                         className="w-full p-3 text-left flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
//                       >
//                         <Settings size={18} className="mr-3 text-gray-600 dark:text-gray-400" />
//                         Settings
//                       </button>
//                       <div className="my-2 border-t dark:border-gray-700" />
//                       <button
//                         onClick={handleLogout}
//                         className="w-full p-3 text-left flex items-center text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/50 rounded-xl transition-colors"
//                       >
//                         <LogOut size={18} className="mr-3" />
//                         Logout
//                       </button>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div>
//         </header>

//         <main className="p-8 mt-20 min-h-[calc(100vh-5rem)]">
//           {loading ? (
//             <div className="flex items-center justify-center h-64">
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                 className="w-12 h-12 border-4 border-blue-500 dark:border-blue-400 border-t-transparent rounded-full"
//               />
//             </div>
//           ) : (
//             renderContent()
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
import { useState, useContext, useEffect, useRef } from "react";
import { StoreContext } from "./StoreContext";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios"; // Add axios for API calls
import {
  Menu,
  Package,
  Users,
  BarChart2,
  Settings,
  CreditCard,
  X,
  DollarSign,
  UserCheck,
  Search,
  Bell,
  LogOut,
  Truck,
  Layers,
  ShoppingBag,
  ChevronRight,
  ChevronDown,
  AlertTriangle,
  User,
  Zap,
  TrendingUp,
  Sun,
  Moon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Import all components
import ProductDashboard from "./ProductManagement";
import EmployeeManagement from "./EmployeeManagement";
import RoleDistribution from "./RoleDistribution";
import DailySales from "./DailySales";
import StockTracking from "./StockTracking";
import EmployeeSearch from "./EmployeeSearch";
import Billing from "./Billing";
import CustomerSignupForm from "./CustomerSignUpForm";
import ViewCustomers from "./ViewCustomers";
import SalesChart from "./SalesChart";
import ProductSales from "./ProductSales";
import InventoryDashboard from "./InventoryDashboard";
import UserManagementPage from "./UserManagement";
import ProductDashboard2 from "./RestockAlerts";
import SupplierManagement from "./Supc";
import BatchExpiryTracker from "./BatchExpiryTracker";
import DamageItemsManagement from "./DamageItemsManagement";
import EmployeeSales from "./EmployeeSales";
import EmployeeAttendanceForm from "./EmployeeAttendance";
import FacialRecognitionAttendance from "./FacialRecognitionAttendance";
import AddEmployeeFace from "./AddEmployeeFace";
import EmployeesSalaryManagement from "./EmployeesSalaryManagement";
import SalesAnalyticsDashboard from "./SalesAnalyticsDashboard";
import KhatabookPage from "./Khatabook2";
import UserProfile from "./UserProfile";
import SearchProductsByCategory from "./ProductCategorization";
import LoginPage from "./LoginPage";
import SalesPerformanceDashboard from "./SalesPerformanceReports";
import EmployeePerformanceReports from "./EmployeePerformanceReports";
import ExpenseTracker from "./Expenses";
import FinancialAnalytics from "./FinancialAnalytics";
import CustomerSegmentation from "./CustomerSegmentation";
import ReturnsManagement from "./ReturnsManagement";

const AdminDashboard = () => {
  const { storeName, storeId } = useContext(StoreContext); // Assuming storeId is provided by StoreContext
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [expandedMenus, setExpandedMenus] = useState({
    products: false,
    employees: false,
    sales: false,
    customers: false,
    suppliers: false,
  });
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [loading, setLoading] = useState(true);
  const [animateCharts, setAnimateCharts] = useState(false);
  const [currentUser, setCurrentUser] = useState(null); // State for current user details

  const notificationRef = useRef(null);
  const userMenuRef = useRef(null);

  const stats = [
    { title: "Total Sales Today", value: "$5,890", change: "+15%", up: true, icon: <DollarSign size={24} className="text-green-500" /> },
    { title: "Low Stock Items", value: "24", change: "+8", up: false, icon: <AlertTriangle size={24} className="text-amber-500" /> },
    { title: "Today's Orders", value: "42", change: "+12%", up: true, icon: <ShoppingBag size={24} className="text-blue-500" /> },
    { title: "Active Employees", value: "18", change: "0", up: true, icon: <Users size={24} className="text-purple-500" /> },
  ];

  const recentTransactions = [
    { id: "#TRX-4589", customer: "John Smith", amount: "$129.50", date: "20 min ago", status: "completed", paymentMethod: "Credit Card" },
    { id: "#TRX-4588", customer: "Lisa Wong", amount: "$245.75", date: "45 min ago", status: "completed", paymentMethod: "PayPal" },
    { id: "#TRX-4587", customer: "Mike Johnson", amount: "$67.25", date: "1 hr ago", status: "pending", paymentMethod: "Credit Card" },
    { id: "#TRX-4586", customer: "Sara Miller", amount: "$352.00", date: "2 hrs ago", status: "completed", paymentMethod: "Bank Transfer" },
    { id: "#TRX-4585", customer: "David Chen", amount: "$84.30", date: "3 hrs ago", status: "failed", paymentMethod: "Credit Card" },
  ];

  const lowStockItems = [
    { id: "P-1245", name: "Premium Coffee Beans", current: 12, min: 20, reorderStatus: "urgent" },
    { id: "P-2340", name: "Organic Green Tea", current: 8, min: 15, reorderStatus: "pending" },
    { id: "P-1023", name: "Vitamin C Tablets", current: 5, min: 10, reorderStatus: "ordered" },
    { id: "P-3456", name: "Almond Milk", current: 9, min: 12, reorderStatus: "urgent" },
  ];

  const salesData = [
    { month: "Jan", sales: 4500, target: 4000 },
    { month: "Feb", sales: 5200, target: 4200 },
    { month: "Mar", sales: 4800, target: 4400 },
    { month: "Apr", sales: 5500, target: 4600 },
    { month: "May", sales: 6200, target: 4800 },
    { month: "Jun", sales: 5900, target: 5000 },
    { month: "Jul", sales: 6500, target: 5200 },
  ];

  const notifications = [
    { id: 1, title: "Low stock alert", message: "4 products need reordering", time: "10 min ago", read: false, type: "alert" },
    { id: 2, title: "New order received", message: "Order #12458 from John D.", time: "25 min ago", read: false, type: "order" },
    { id: 3, title: "Staff meeting", message: "Reminder: Meeting at 3 PM", time: "2 hours ago", read: true, type: "reminder" },
    { id: 4, title: "System update", message: "Maintenance scheduled for tonight", time: "1 day ago", read: true, type: "system" },
  ];

  const navigationMenu = [
    { id: "dashboard", label: "Dashboard", icon: <BarChart2 size={20} />, onClick: () => changePage("dashboard") },
    {
      id: "products",
      label: "Products",
      icon: <Package size={20} />,
      submenu: [
        { id: "products", label: "All Products", onClick: () => changePage("products") },
        { id: "restockAlerts", label: "Restock Alerts", onClick: () => changePage("restockAlerts") },
        { id: "batch", label: "Batch Expiry", onClick: () => changePage("batch") },
        { id: "damage", label: "Damaged Items", onClick: () => changePage("damage") },
        { id: "category", label: "Categories", onClick: () => changePage("category") },

      ],
    },
    {
      id: "employees",
      label: "Employees",
      icon: <Users size={20} />,
      submenu: [
        { id: "employees", label: "Manage Employees", onClick: () => changePage("employees") },
        { id: "roles", label: "Roles & Permissions", onClick: () => changePage("roles") },
        { id: "attendance", label: "Attendance", onClick: () => changePage("attendance") },
        // { id: "add_face", label: "Add Face ID", onClick: () => changePage("add_face") },
        // { id: "face", label: "Face Recognition", onClick: () => changePage("face") },
        { id: "employeeSearch", label: "Employee Search", onClick: () => changePage("employeeSearch") },
        { id: "emp", label: "Employee Sales", onClick: () => changePage("emp") },
        { id: "salaries", label: "Salaries", onClick: () => changePage("salaries") },
      ],
    },
    {
      id: "sales",
      label: "Sales",
      icon: <DollarSign size={20} />,
      submenu: [
        { id: "dailySales", label: "Daily Sales", onClick: () => changePage("dailySales") },
        { id: "salesChart", label: "Sales Reports", onClick: () => changePage("salesChart") },
        { id: "analytics", label: "Analytics", onClick: () => changePage("analytics") },
        { id: "billing", label: "Billing", onClick: () => changePage("billing") },
        { id: "expenses", label: "Expenses", onClick: () => changePage("expenses") },
      ],
    },
    {
      id: "customers",
      label: "Customers",
      icon: <UserCheck size={20} />,
      submenu: [
        { id: "customers", label: "View Customers", onClick: () => changePage("customers") },
        { id: "customerSignup", label: "Add Customer", onClick: () => changePage("customerSignup") },
        { id: "khata2", label: "Khatabook", onClick: () => changePage("khata2") },
        { id: "returns", label: "Customer Returns", onClick: () => changePage("returns") },

      ],
    },
    {
      id: "reports",
      label: "Reports",
      icon: <UserCheck size={20} />,
      submenu: [
        { id: "customerseg", label: "Segmentation", onClick: () => changePage("customerseg") },
        { id: "financial", label: "Financial Analytics", onClick: () => changePage("financial") },
        { id: "salesperformance", label: "Sales Performance", onClick: () => changePage("salesperformance") },
        { id: "employeeperformance", label: "Employee Performance", onClick: () => changePage("employeeperformance") },
        { id: "productSales", label: "Product Sales", onClick: () => changePage("productSales") },
      ],
    },
    { id: "suppliers", label: "Suppliers", icon: <Truck size={20} />, onClick: () => changePage("suppliers") },
    { id: "stockTracking", label: "Stock Tracking", icon: <Layers size={20} />, onClick: () => changePage("stockTracking") },
    { id: "users", label: "User Management", icon: <User size={20} />, onClick: () => changePage("users") },
    { id: "settings", label: "Settings", icon: <Settings size={20} />, onClick: () => navigate("/settings") },
  ];

  // Fetch current user details
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const userId = localStorage.getItem("userId");
      if (!userId || !storeId) {
        console.error("No userId or storeId found in localStorage or context");
        navigate("/LoginPage"); // Redirect to login if no userId or storeId
        return;
      }

      try {
        const response = await axios.get("http://localhost:5014/get_users", {
          params: { storeId },
        });
        const users = response.data;
        const user = users.find(u => u.id === userId);
        if (user) {
          setCurrentUser(user);
          console.log("Current user fetched:", user);
        } else {
          console.warn("User not found for userId:", userId);
          setCurrentUser(null);
          navigate("/LoginPage"); // Redirect if user not found
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        setCurrentUser(null);
        navigate("/LoginPage"); // Redirect on error
      }
    };

    fetchCurrentUser();
  }, [storeId, navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setAnimateCharts(true), 500);
    }, 800);
    return () => clearTimeout(timer);
  }, [currentPage]);

  useEffect(() => {
    if (window.innerWidth < 768) setSidebarOpen(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 768 && setSidebarOpen(true);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) setNotificationsOpen(false);
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) setUserMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      ::-webkit-scrollbar { width: 8px; height: 8px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: rgba(156, 163, 175, 0.5); border-radius: 4px; }
      ::-webkit-scrollbar-thumb:hover { background: rgba(156, 163, 175, 0.8); }
      * { scrollbar-width: thin; scrollbar-color: rgba(156, 163, 175, 0.5) transparent; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleMenu = (menu) => {
    setExpandedMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const changePage = (page) => {
    setCurrentPage(page);
    setLoading(true);
    if (window.innerWidth < 768) setSidebarOpen(false);
  };

  const handleToggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleLogout = () => {
    const currentTheme = localStorage.getItem("theme");
    localStorage.clear();
    if (currentTheme) localStorage.setItem("theme", currentTheme);
    navigate("/LoginPage");
  };

  const renderDashboard = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-900 p-6 rounded-2xl shadow-xl text-white">
        <h2 className="text-2xl font-bold tracking-tight">Welcome to {storeName || "Your Store"}</h2>
        <p className="text-sm opacity-80 mt-1">Your daily performance overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{stat.title}</span>
              {stat.icon}
            </div>
            <div className="text-3xl font-extrabold text-gray-900 dark:text-white">{stat.value}</div>
            <div className={`text-sm mt-2 font-medium ${stat.up ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
              {stat.change} {stat.up ? "↑" : "↓"}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <motion.div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                <ShoppingBag size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                Recent Transactions
              </h3>
              <button
                onClick={() => changePage("dailySales")}
                className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center transition-colors"
              >
                View All <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b dark:border-gray-700">
                  <tr className="text-gray-600 dark:text-gray-300">
                    <th className="py-3 px-4 text-left font-medium">ID</th>
                    <th className="py-3 px-4 text-left font-medium">Customer</th>
                    <th className="py-3 px-4 text-left font-medium">Amount</th>
                    <th className="py-3 px-4 text-left font-medium">Time</th>
                    <th className="py-3 px-4 text-left font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTransactions.map((transaction, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                    >
                      <td className="py-4 px-4 text-gray-700 dark:text-gray-200">{transaction.id}</td>
                      <td className="py-4 px-4 text-gray-700 dark:text-gray-200">{transaction.customer}</td>
                      <td className="py-4 px-4 font-medium text-gray-900 dark:text-white">{transaction.amount}</td>
                      <td className="py-4 px-4 text-gray-500 dark:text-gray-400">{transaction.date}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                            transaction.status === "completed"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
                              : transaction.status === "pending"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300"
                              : "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300"
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                <TrendingUp size={20} className="mr-2 text-indigo-600 dark:text-indigo-400" />
                Sales Overview
              </h3>
              <button
                onClick={() => changePage("salesChart")}
                className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center transition-colors"
              >
                Detailed Report <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
            <div className="h-80">
              {animateCharts ? (
                <div className="h-full flex items-end space-x-4 px-2">
                  {salesData.map((item, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${(item.sales / 7000) * 100}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
                        className="w-10 bg-gradient-to-t from-indigo-500 to-blue-500 dark:from-indigo-600 dark:to-blue-600 rounded-t-lg relative group"
                      >
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          ${item.sales}
                        </span>
                      </motion.div>
                      <span className="mt-2 text-xs font-medium text-gray-600 dark:text-gray-300">{item.month}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-400 dark:text-gray-500 animate-pulse">
                  Loading chart data...
                </div>
              )}
            </div>
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <Zap size={20} className="mr-2 text-amber-500" />
              Quick Access
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Package size={20} />, label: "Products", page: "products", color: "bg-blue-600" },
                { icon: <Users size={20} />, label: "Employees", page: "employees", color: "bg-purple-600" },
                { icon: <DollarSign size={20} />, label: "Sales", page: "dailySales", color: "bg-green-600" },
                { icon: <CreditCard size={20} />, label: "Billing", page: "billing", color: "bg-indigo-600" },
                { icon: <Layers size={20} />, label: "Stock", page: "stockTracking", color: "bg-orange-600" },
                { icon: <Truck size={20} />, label: "Suppliers", page: "suppliers", color: "bg-teal-600" },
              ].map((item, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => changePage(item.page)}
                  className={`${item.color} text-white p-4 rounded-xl flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all`}
                >
                  {item.icon}
                  <span className="mt-2 font-medium text-sm">{item.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                <AlertTriangle size={20} className="mr-2 text-red-500" />
                Low Stock Alert
              </h3>
              <button
                onClick={() => changePage("restockAlerts")}
                className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                All Alerts
              </button>
            </div>
            <div className="space-y-4">
              {lowStockItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-750 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">{item.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">SKU: {item.id}</div>
                  </div>
                  <div className={`font-medium ${item.current < item.min ? "text-red-600 dark:text-red-400" : "text-gray-700 dark:text-gray-300"}`}>
                    {item.current}/{item.min}
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => changePage("suppliers")}
              className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-all"
            >
              <Truck size={16} className="mr-2" />
              Place Restock Order
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case "dashboard": return renderDashboard();
      case "Login": return <LoginPage />;
      case "products": return <ProductDashboard />;
      case "employees": return <EmployeeManagement />;
      case "roles": return <RoleDistribution />;
      case "dailySales": return <DailySales />;
      case "stockTracking": return <StockTracking />;
      case "employeeSearch": return <EmployeeSearch />;
      case "billing": return <Billing />;
      case "customerSignup": return <CustomerSignupForm />;
      case "customers": return <ViewCustomers />;
      case "salesChart": return <SalesChart />;
      case "productSales": return <ProductSales />;
      case "inventory": return <InventoryDashboard />;
      case "users": return <UserManagementPage />;
      case "restockAlerts": return <ProductDashboard2 />;
      case "suppliers": return <SupplierManagement />;
      case "batch": return <BatchExpiryTracker />;
      case "damage": return <DamageItemsManagement />;
      case "emp": return <EmployeeSales />;
      case "attendance": return <EmployeeAttendanceForm />;
      case "face": return <FacialRecognitionAttendance />;
      case "add_face": return <AddEmployeeFace />;
      case "salaries": return <EmployeesSalaryManagement />;
      case "analytics": return <SalesAnalyticsDashboard />;
      case "khata2": return <KhatabookPage />;
      case "UserProfile": return <UserProfile />;
      case "category": return <SearchProductsByCategory />;
      case "salesperformance": return <SalesPerformanceDashboard />;
      case "employeeperformance": return <EmployeePerformanceReports />;
      case "expenses": return <ExpenseTracker />;
      case "financial": return <FinancialAnalytics />;
      case "customerseg": return <CustomerSegmentation />;
      case "returns":return <ReturnsManagement/>;
      default: return renderDashboard();
    }
  };

  if (!currentUser && !loading) {
    return <div>Loading user data...</div>; // Temporary fallback while user data is fetched
  }

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""} bg-gray-100 dark:bg-gray-900 flex font-sans antialiased`}>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-72 h-screen bg-white dark:bg-gray-800 shadow-2xl transform transition-transform duration-300 z-30 overflow-y-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-900 text-white p-4 flex items-center justify-between shadow-md">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-blue-600 font-extrabold text-xl shadow-lg">S</div>
            <h1 className="text-xl font-bold truncate">{storeName || "Store Manager"}</h1>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden text-white hover:text-gray-200 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-sm">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-extrabold text-xl shadow-md">
              {currentUser?.firstName?.charAt(0) || "U"}
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white text-lg">
                {currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : "Loading..."}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{currentUser?.role || "Unknown"}</div>
            </div>
          </div>

          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-sm shadow-sm transition-all"
            />
          </div>

          <nav className="space-y-2">
            {navigationMenu.map((item) => (
              <div key={item.id}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleMenu(item.id)}
                      className={`flex items-center justify-between w-full p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all ${
                        expandedMenus[item.id] ? "bg-gray-100 dark:bg-gray-700" : ""
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className={`${currentPage === item.id || item.submenu.some((sub) => sub.id === currentPage) ? "text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-400"}`}>{item.icon}</span>
                        <span className={`font-medium ${currentPage === item.id || item.submenu.some((sub) => sub.id === currentPage) ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-white"}`}>{item.label}</span>
                      </div>
                      {expandedMenus[item.id] ? <ChevronDown size={20} className="text-gray-500" /> : <ChevronRight size={20} className="text-gray-500" />}
                    </button>
                    <AnimatePresence>
                      {expandedMenus[item.id] && (
                        <motion.ul initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.3 }} className="pl-8 space-y-1 mt-1">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.id}>
                              <button
                                onClick={subItem.onClick}
                                className={`w-full text-left p-2 rounded-lg text-sm ${
                                  currentPage === subItem.id ? "bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400 font-semibold" : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                                } transition-colors`}
                              >
                                {subItem.label}
                              </button>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <button
                    onClick={item.onClick}
                    className={`flex items-center w-full p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all ${
                      currentPage === item.id ? "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-white"
                    }`}
                  >
                    <span className={`mr-3 ${currentPage === item.id ? "text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-400"}`}>{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </button>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className={`md:hidden fixed top-4 left-4 z-40 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all ${sidebarOpen ? "hidden" : "block"}`}
      >
        <Menu size={24} className="text-gray-700 dark:text-gray-300" />
      </button>

      {/* Main content */}
      <div className="flex-1 md:ml-72">
        <header className="bg-white dark:bg-gray-800 shadow-lg border-b dark:border-gray-700 fixed top-0 right-0 md:left-72 left-0 z-20">
          <div className="px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white capitalize tracking-tight">
              {currentPage === "dashboard" ? "Dashboard" : currentPage.replace(/([A-Z])/g, " $1").trim()}
            </h1>
            <div className="flex items-center space-x-4">
              <div className="relative" ref={notificationRef}>
                <button
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative transition-colors"
                >
                  <Bell size={22} className="text-gray-600 dark:text-gray-400" />
                  <span className="absolute top-0 right-0 h-5 w-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center shadow-md">3</span>
                </button>
                <AnimatePresence>
                  {notificationsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-3 w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border dark:border-gray-700 p-4 z-50"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h3>
                        <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">Mark all as read</button>
                      </div>
                      {notifications.map((notification) => (
                        <div key={notification.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                          <div
                            className={`p-2 rounded-full ${
                              notification.type === "alert" ? "bg-red-100 dark:bg-red-900/50" : notification.type === "order" ? "bg-green-100 dark:bg-green-900/50" : "bg-blue-100 dark:bg-blue-900/50"
                            }`}
                          >
                            <Bell
                              size={16}
                              className={`${notification.type === "alert" ? "text-red-600 dark:text-red-400" : notification.type === "order" ? "text-green-600 dark:text-green-400" : "text-blue-600 dark:text-blue-400"}`}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">{notification.title}</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">{notification.message}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">{notification.time}</div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={handleToggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {darkMode ? (
                  <Sun size={22} className="text-gray-600 dark:text-yellow-400" />
                ) : (
                  <Moon size={22} className="text-gray-600 dark:text-gray-400" />
                )}
              </button>

              <div className="relative" ref={userMenuRef}>
                <button onClick={() => setUserMenuOpen(!userMenuOpen)} className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-extrabold shadow-md">
                    {currentUser?.firstName?.charAt(0) || "U"}
                  </div>
                  <span className="hidden md:block font-medium text-gray-900 dark:text-white">
                    {currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : "Loading..."}
                  </span>
                  <ChevronDown size={18} className="hidden md:block text-gray-600 dark:text-gray-400" />
                </button>
                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-3 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border dark:border-gray-700 p-2 z-50"
                    >
                      <button
                        onClick={() => changePage("UserProfile")}
                        className="w-full p-3 text-left flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
                      >
                        <User size={18} className="mr-3 text-gray-600 dark:text-gray-400" />
                        Profile
                      </button>
                      <button
                        onClick={handleToggleDarkMode}
                        className="w-full p-3 text-left flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
                      >
                        {darkMode ? (
                          <>
                            <Sun size={18} className="mr-3 text-gray-600 dark:text-yellow-400" />
                            Light Mode
                          </>
                        ) : (
                          <>
                            <Moon size={18} className="mr-3 text-gray-600 dark:text-gray-400" />
                            Dark Mode
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => navigate("/settings")}
                        className="w-full p-3 text-left flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
                      >
                        <Settings size={18} className="mr-3 text-gray-600 dark:text-gray-400" />
                        Settings
                      </button>
                      <div className="my-2 border-t dark:border-gray-700" />
                      <button
                        onClick={handleLogout}
                        className="w-full p-3 text-left flex items-center text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/50 rounded-xl transition-colors"
                      >
                        <LogOut size={18} className="mr-3" />
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </header>

        <main className="p-8 mt-20 min-h-[calc(100vh-5rem)]">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-4 border-blue-500 dark:border-blue-400 border-t-transparent rounded-full"
              />
            </div>
          ) : (
            renderContent()
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;