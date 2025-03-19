// // import React, { useState, useContext, useEffect } from "react";
// // import { StoreContext } from "./StoreContext";
// // import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
// // import { 
// //   Menu, 
// //   BarChart2, 
// //   CreditCard, 
// //   Info, 
// //   X, 
// //   DollarSign,
// //   UserCheck,
// //   Search,
// //   Bell,
// //   LogOut,
// //   ChevronRight,
// //   ChevronDown
// // } from 'lucide-react';

// // // Import components
// // import DailySales from "./DailySales";
// // import Billing from "./Billing";
// // import ViewCustomers from "./ViewCustomers";

// // const CashierDashboard = () => {
// //   const { storeName } = useContext(StoreContext);
// //   const [sidebarOpen, setSidebarOpen] = useState(true);
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const [currentPage, setCurrentPage] = useState('dashboard');
// //   const [expandedMenus, setExpandedMenus] = useState({
// //     sales: false,
// //     customers: false
// //   });

// //   // Stats for dashboard
// //   const stats = [
// //     { title: 'Total Sales Today', value: '$5,890', change: '+15%', up: true },
// //     { title: 'Today\'s Orders', value: '42', change: '+12%', up: true },
// //   ];

// //   // Recent transactions for dashboard
// //   const recentTransactions = [
// //     { id: '#TRX-4589', customer: 'John Smith', amount: '$129.50', date: '20 min ago', status: 'completed' },
// //     { id: '#TRX-4588', customer: 'Lisa Wong', amount: '$245.75', date: '45 min ago', status: 'completed' },
// //     { id: '#TRX-4587', customer: 'Mike Johnson', amount: '$67.25', date: '1 hr ago', status: 'pending' },
// //     { id: '#TRX-4586', customer: 'Sara Miller', amount: '$352.00', date: '2 hrs ago', status: 'completed' },
// //   ];

// //   // Toggle sidebar on mobile
// //   useEffect(() => {
// //     if (window.innerWidth < 768) {
// //       setSidebarOpen(false);
// //     }
// //   }, [location]);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth >= 768) {
// //         setSidebarOpen(true);
// //       }
// //     };

// //     window.addEventListener('resize', handleResize);
// //     handleResize();
// //     return () => window.removeEventListener('resize', handleResize);
// //   }, []);

// //   // Toggle submenu expandable sections
// //   const toggleMenu = (menu) => {
// //     setExpandedMenus(prev => ({
// //       ...prev,
// //       [menu]: !prev[menu]
// //     }));
// //   };

// //   // Change current page based on menu click
// //   const changePage = (page) => {
// //     setCurrentPage(page);
// //     if (window.innerWidth < 768) {
// //       setSidebarOpen(false);
// //     }
// //   };

// //   // Render main dashboard content
// //   const renderDashboard = () => (
// //     <div className="space-y-6">
// //       {/* Welcome section */}
// //       <div className="mb-6">
// //         <h2 className="text-lg font-medium text-gray-800">Welcome to {storeName || "Your Store"}</h2>
// //         <p className="text-sm text-gray-600">Here's what's happening with your store today</p>
// //       </div>
      
// //       {/* Stats cards */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
// //         {stats.map((stat, index) => (
// //           <div key={index} className="bg-white p-4 rounded-lg shadow">
// //             <div className="text-sm font-medium text-gray-500">{stat.title}</div>
// //             <div className="text-2xl font-bold mt-2">{stat.value}</div>
// //             <div className={`text-sm mt-2 flex items-center ${stat.up ? 'text-green-600' : 'text-red-600'}`}>
// //               {stat.change}
// //               {stat.up ? 
// //                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
// //                 </svg> :
// //                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// //                 </svg>
// //               }
// //             </div>
// //           </div>
// //         ))}
// //       </div>
      
// //       {/* Main dashboard layout */}
// //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// //         {/* Transactions */}
// //         <div className="lg:col-span-2">
// //           <div className="bg-white rounded-lg shadow p-4 mb-6">
// //             <div className="flex justify-between items-center mb-4">
// //               <h3 className="font-medium">Recent Transactions</h3>
// //               <button onClick={() => changePage('dailySales')} className="text-sm text-blue-600 hover:underline">View All</button>
// //             </div>
            
// //             <div className="overflow-x-auto">
// //               <table className="w-full">
// //                 <thead>
// //                   <tr className="border-b">
// //                     <th className="text-left py-2 px-2 text-sm font-medium text-gray-500">ID</th>
// //                     <th className="text-left py-2 px-2 text-sm font-medium text-gray-500">Customer</th>
// //                     <th className="text-left py-2 px-2 text-sm font-medium text-gray-500">Amount</th>
// //                     <th className="text-left py-2 px-2 text-sm font-medium text-gray-500">Time</th>
// //                     <th className="text-left py-2 px-2 text-sm font-medium text-gray-500">Status</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {recentTransactions.map((transaction, index) => (
// //                     <tr key={index} className="border-b last:border-0">
// //                       <td className="py-3 px-2 text-sm">{transaction.id}</td>
// //                       <td className="py-3 px-2 text-sm">{transaction.customer}</td>
// //                       <td className="py-3 px-2 text-sm font-medium">{transaction.amount}</td>
// //                       <td className="py-3 px-2 text-sm text-gray-500">{transaction.date}</td>
// //                       <td className="py-3 px-2 text-sm">
// //                         <span className={`inline-block px-2 py-1 rounded-full text-xs ${
// //                           transaction.status === 'completed' 
// //                             ? 'bg-green-100 text-green-800' 
// //                             : 'bg-yellow-100 text-yellow-800'
// //                         }`}>
// //                           {transaction.status}
// //                         </span>
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
          
// //           {/* Sales Chart Placeholder */}
// //           <div className="bg-white rounded-lg shadow p-4 mb-6">
// //             <div className="flex justify-between items-center mb-4">
// //               <h3 className="font-medium">Sales Overview</h3>
// //               <button onClick={() => changePage('dailySales')} className="text-sm text-blue-600 hover:underline">Detailed Report</button>
// //             </div>
            
// //             <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
// //               <button onClick={() => changePage('dailySales')} className="text-blue-600 hover:underline flex items-center">
// //                 <BarChart2 size={18} className="mr-2" />
// //                 <span>View Sales Chart</span>
// //               </button>
// //             </div>
// //           </div>
// //         </div>
        
// //         {/* Sidebar content */}
// //         <div className="space-y-6">
// //           {/* Quick Access */}
// //           <div className="bg-white rounded-lg shadow p-4">
// //             <h3 className="font-medium mb-4">Quick Access</h3>
// //             <div className="grid grid-cols-2 gap-2">
// //               <button 
// //                 onClick={() => changePage('dailySales')} 
// //                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
// //               >
// //                 <DollarSign size={16} className="mr-2 text-blue-600" />
// //                 <span className="truncate">Daily Sales</span>
// //               </button>
// //               <button 
// //                 onClick={() => changePage('billing')} 
// //                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
// //               >
// //                 <CreditCard size={16} className="mr-2 text-blue-600" />
// //                 <span className="truncate">Billing</span>
// //               </button>
// //               <button 
// //                 onClick={() => changePage('customers')} 
// //                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
// //               >
// //                 <UserCheck size={16} className="mr-2 text-blue-600" />
// //                 <span className="truncate">Customers</span>
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   // Render the selected page content
// //   const renderContent = () => {
// //     switch(currentPage) {
// //       case 'dashboard':
// //         return renderDashboard();
// //       case 'dailySales':
// //         return <DailySales />;
// //       case 'billing':
// //         return <Billing />;
// //       case 'customers':
// //         return <ViewCustomers />;
// //       default:
// //         return renderDashboard();
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 flex">
// //       {/* Mobile overlay for sidebar */}
// //       {sidebarOpen && (
// //         <div
// //           className="fixed inset-0 bg-black/50 md:hidden z-20"
// //           onClick={() => setSidebarOpen(false)}
// //         />
// //       )}

// //       {/* Sidebar */}
// //       <aside
// //         className={`fixed md:static inset-y-0 left-0 w-64 bg-gradient-to-br from-blue-800 to-blue-600
// //           transform transition-transform duration-300 ease-in-out z-30
// //           ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
// //       >
// //         <div className="h-16 flex items-center justify-between px-4 border-b border-white/20">
// //           <h1 className="text-xl font-bold text-white truncate">
// //             {storeName || "Store Manager"}
// //           </h1>
// //           <button
// //             onClick={() => setSidebarOpen(false)}
// //             className="md:hidden text-white hover:text-gray-200"
// //           >
// //             <X size={24} />
// //           </button>
// //         </div>

// //         <div className="p-4">
// //           <div className="flex items-center space-x-3 mb-6">
// //             <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-blue-800 font-bold">
// //               C
// //             </div>
// //             <div>
// //               <div className="font-medium text-white">Cashier User</div>
// //               <div className="text-sm text-blue-200">Cashier</div>
// //             </div>
// //           </div>
          
// //           <nav>
// //             <ul className="space-y-1">
// //               <li>
// //                 <button 
// //                   onClick={() => changePage('dashboard')}
// //                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'dashboard' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// //                 >
// //                   <BarChart2 size={18} className="mr-3" />
// //                   Dashboard
// //                 </button>
// //               </li>
              
// //               {/* Sales dropdown */}
// //               <li>
// //                 <div>
// //                   <button 
// //                     onClick={() => toggleMenu('sales')}
// //                     className={`flex items-center justify-between w-full p-2 rounded-md 
// //                       ${currentPage === 'dailySales' || currentPage === 'billing' ? 
// //                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// //                   >
// //                     <div className="flex items-center">
// //                       <DollarSign size={18} className="mr-3" />
// //                       Sales
// //                     </div>
// //                     {expandedMenus.sales ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
// //                   </button>
                  
// //                   {expandedMenus.sales && (
// //                     <ul className="pl-9 pt-1 pb-1">
// //                       <li>
// //                         <button 
// //                           onClick={() => changePage('dailySales')} 
// //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// //                         >
// //                           Daily Sales
// //                         </button>
// //                       </li>
// //                       <li>
// //                         <button 
// //                           onClick={() => changePage('billing')} 
// //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// //                         >
// //                           Billing
// //                         </button>
// //                       </li>
// //                     </ul>
// //                   )}
// //                 </div>
// //               </li>
              
// //               {/* Customers dropdown */}
// //               <li>
// //                 <div>
// //                   <button 
// //                     onClick={() => toggleMenu('customers')}
// //                     className={`flex items-center justify-between w-full p-2 rounded-md 
// //                       ${currentPage === 'customers' ? 
// //                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// //                   >
// //                     <div className="flex items-center">
// //                       <UserCheck size={18} className="mr-3" />
// //                       Customers
// //                     </div>
// //                     {expandedMenus.customers ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
// //                   </button>
                  
// //                   {expandedMenus.customers && (
// //                     <ul className="pl-9 pt-1 pb-1">
// //                       <li>
// //                         <button 
// //                           onClick={() => changePage('customers')} 
// //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// //                         >
// //                           View Customers
// //                         </button>
// //                       </li>
// //                     </ul>
// //                   )}
// //                 </div>
// //               </li>
// //             </ul>
// //           </nav>
// //         </div>
// //       </aside>

// //       {/* Mobile menu button */}
// //       <button
// //         onClick={() => setSidebarOpen(true)}
// //         className={`md:hidden fixed top-4 left-4 z-10 p-2 rounded-lg bg-blue-800 text-white
// //           shadow-lg hover:bg-blue-700 transition-colors duration-200
// //           ${sidebarOpen ? 'hidden' : 'block'}`}
// //       >
// //         <Menu size={24} />
// //       </button>

// //       {/* Main content */}
// //       <main className="flex-1 overflow-auto">
// //         {/* Top header */}
// //         <div className="bg-white shadow-sm border-b">
// //           <div className="px-4 py-3 flex justify-between items-center">
// //             <div className="md:hidden flex items-center">
// //               <h1 className="text-xl font-bold text-blue-800">
// //                 {currentPage === 'dashboard' ? 'Dashboard' : 
// //                  currentPage === 'dailySales' ? 'Sales' :
// //                  currentPage === 'billing' ? 'Billing' :
// //                  currentPage === 'customers' ? 'Customers' :
// //                  'Cashier Dashboard'}
// //               </h1>
// //             </div>
            
// //             <div className="hidden md:flex items-center">
// //               <div className="relative mr-4">
// //                 <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// //                 <input
// //                   type="text"
// //                   placeholder="Search..."
// //                   className="pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// //                 />
// //               </div>
// //             </div>
            
// //             <div className="flex items-center space-x-4">
// //               <button className="p-1 rounded-full hover:bg-gray-100 relative">
// //                 <Bell size={20} />
// //                 <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
// //               </button>
              
// //               <button className="flex items-center text-sm text-red-600 hover:text-red-800">
// //                 <LogOut size={16} className="mr-1" />
// //                 <span className="hidden md:inline">Logout</span>
// //               </button>
// //             </div>
// //           </div>
// //         </div>
        
// //         {/* Page content */}
// //         <div className="p-4">
// //           {renderContent()}
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default CashierDashboard;

// import React, { useState, useContext, useEffect, useRef } from "react";
// import { StoreContext } from "./StoreContext";
// import { useLocation, useNavigate } from "react-router-dom";
// import { 
//   Menu, 
//   BarChart2, 
//   CreditCard, 
//   Info, 
//   X, 
//   DollarSign,
//   UserCheck,
//   Search,
//   Bell,
//   LogOut,
//   ChevronRight,
//   ChevronDown,
//   User
// } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// // Import components
// import DailySales from "./DailySales";
// import Billing from "./Billing";
// import ViewCustomers from "./ViewCustomers";
// import UserProfile from "./UserProfile"; // Import the UserProfile component

// const CashierDashboard = () => {
//   const { storeName } = useContext(StoreContext);
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [currentPage, setCurrentPage] = useState('dashboard');
//   const [expandedMenus, setExpandedMenus] = useState({
//     sales: false,
//     customers: false
//   });
//   const [userMenuOpen, setUserMenuOpen] = useState(false);
//   const [showProfile, setShowProfile] = useState(false); // State to manage profile visibility
//   const userMenuRef = useRef(null);

//   // Stats for dashboard
//   const stats = [
//     { title: 'Total Sales Today', value: '$5,890', change: '+15%', up: true },
//     { title: 'Today\'s Orders', value: '42', change: '+12%', up: true },
//   ];

//   // Recent transactions for dashboard
//   const recentTransactions = [
//     { id: '#TRX-4589', customer: 'John Smith', amount: '$129.50', date: '20 min ago', status: 'completed' },
//     { id: '#TRX-4588', customer: 'Lisa Wong', amount: '$245.75', date: '45 min ago', status: 'completed' },
//     { id: '#TRX-4587', customer: 'Mike Johnson', amount: '$67.25', date: '1 hr ago', status: 'pending' },
//     { id: '#TRX-4586', customer: 'Sara Miller', amount: '$352.00', date: '2 hrs ago', status: 'completed' },
//   ];

//   // Toggle sidebar on mobile
//   useEffect(() => {
//     if (window.innerWidth < 768) {
//       setSidebarOpen(false);
//     }
//   }, [location]);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setSidebarOpen(true);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize();
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Toggle submenu expandable sections
//   const toggleMenu = (menu) => {
//     setExpandedMenus(prev => ({
//       ...prev,
//       [menu]: !prev[menu]
//     }));
//   };

//   // Change current page based on menu click
//   const changePage = (page) => {
//     setCurrentPage(page);
//     if (window.innerWidth < 768) {
//       setSidebarOpen(false);
//     }
//   };

//   // Handle clicks outside dropdowns
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
//         setUserMenuOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   // Render main dashboard content
//   const renderDashboard = () => (
//     <div className="space-y-6">
//       {/* Welcome section */}
//       <div className="mb-6">
//         <h2 className="text-lg font-medium text-gray-800">Welcome to {storeName || "Your Store"}</h2>
//         <p className="text-sm text-gray-600">Here's what's happening with your store today</p>
//       </div>
      
//       {/* Stats cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//         {stats.map((stat, index) => (
//           <div key={index} className="bg-white p-4 rounded-lg shadow">
//             <div className="text-sm font-medium text-gray-500">{stat.title}</div>
//             <div className="text-2xl font-bold mt-2">{stat.value}</div>
//             <div className={`text-sm mt-2 flex items-center ${stat.up ? 'text-green-600' : 'text-red-600'}`}>
//               {stat.change}
//               {stat.up ? 
//                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
//                 </svg> :
//                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               }
//             </div>
//           </div>
//         ))}
//       </div>
      
//       {/* Main dashboard layout */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Transactions */}
//         <div className="lg:col-span-2">
//           <div className="bg-white rounded-lg shadow p-4 mb-6">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="font-medium">Recent Transactions</h3>
//               <button onClick={() => changePage('dailySales')} className="text-sm text-blue-600 hover:underline">View All</button>
//             </div>
            
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="border-b">
//                     <th className="text-left py-2 px-2 text-sm font-medium text-gray-500">ID</th>
//                     <th className="text-left py-2 px-2 text-sm font-medium text-gray-500">Customer</th>
//                     <th className="text-left py-2 px-2 text-sm font-medium text-gray-500">Amount</th>
//                     <th className="text-left py-2 px-2 text-sm font-medium text-gray-500">Time</th>
//                     <th className="text-left py-2 px-2 text-sm font-medium text-gray-500">Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {recentTransactions.map((transaction, index) => (
//                     <tr key={index} className="border-b last:border-0">
//                       <td className="py-3 px-2 text-sm">{transaction.id}</td>
//                       <td className="py-3 px-2 text-sm">{transaction.customer}</td>
//                       <td className="py-3 px-2 text-sm font-medium">{transaction.amount}</td>
//                       <td className="py-3 px-2 text-sm text-gray-500">{transaction.date}</td>
//                       <td className="py-3 px-2 text-sm">
//                         <span className={`inline-block px-2 py-1 rounded-full text-xs ${
//                           transaction.status === 'completed' 
//                             ? 'bg-green-100 text-green-800' 
//                             : 'bg-yellow-100 text-yellow-800'
//                         }`}>
//                           {transaction.status}
//                         </span>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
          
//           {/* Sales Chart Placeholder */}
//           <div className="bg-white rounded-lg shadow p-4 mb-6">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="font-medium">Sales Overview</h3>
//               <button onClick={() => changePage('dailySales')} className="text-sm text-blue-600 hover:underline">Detailed Report</button>
//             </div>
            
//             <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
//               <button onClick={() => changePage('dailySales')} className="text-blue-600 hover:underline flex items-center">
//                 <BarChart2 size={18} className="mr-2" />
//                 <span>View Sales Chart</span>
//               </button>
//             </div>
//           </div>
//         </div>
        
//         {/* Sidebar content */}
//         <div className="space-y-6">
//           {/* Quick Access */}
//           <div className="bg-white rounded-lg shadow p-4">
//             <h3 className="font-medium mb-4">Quick Access</h3>
//             <div className="grid grid-cols-2 gap-2">
//               <button 
//                 onClick={() => changePage('dailySales')} 
//                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
//               >
//                 <DollarSign size={16} className="mr-2 text-blue-600" />
//                 <span className="truncate">Daily Sales</span>
//               </button>
//               <button 
//                 onClick={() => changePage('billing')} 
//                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
//               >
//                 <CreditCard size={16} className="mr-2 text-blue-600" />
//                 <span className="truncate">Billing</span>
//               </button>
//               <button 
//                 onClick={() => changePage('customers')} 
//                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
//               >
//                 <UserCheck size={16} className="mr-2 text-blue-600" />
//                 <span className="truncate">Customers</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   // Render the selected page content
//   const renderContent = () => {
//     switch(currentPage) {
//       case 'dashboard':
//         return renderDashboard();
//       case 'dailySales':
//         return <DailySales />;
//       case 'billing':
//         return <Billing />;
//       case 'customers':
//         return <ViewCustomers />;
//       default:
//         return renderDashboard();
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Mobile overlay for sidebar */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 md:hidden z-20"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`fixed md:static inset-y-0 left-0 w-64 bg-gradient-to-br from-blue-800 to-blue-600
//           transform transition-transform duration-300 ease-in-out z-30
//           ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
//       >
//         <div className="h-16 flex items-center justify-between px-4 border-b border-white/20">
//           <h1 className="text-xl font-bold text-white truncate">
//             {storeName || "Store Manager"}
//           </h1>
//           <button
//             onClick={() => setSidebarOpen(false)}
//             className="md:hidden text-white hover:text-gray-200"
//           >
//             <X size={24} />
//           </button>
//         </div>

//         <div className="p-4">
//           <div className="flex items-center space-x-3 mb-6">
//             <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-blue-800 font-bold">
//               C
//             </div>
//             <div>
//               <div className="font-medium text-white">Cashier User</div>
//               <div className="text-sm text-blue-200">Cashier</div>
//             </div>
//           </div>
          
//           <nav>
//             <ul className="space-y-1">
//               <li>
//                 <button 
//                   onClick={() => changePage('dashboard')}
//                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'dashboard' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
//                 >
//                   <BarChart2 size={18} className="mr-3" />
//                   Dashboard
//                 </button>
//               </li>
              
//               {/* Sales dropdown */}
//               <li>
//                 <div>
//                   <button 
//                     onClick={() => toggleMenu('sales')}
//                     className={`flex items-center justify-between w-full p-2 rounded-md 
//                       ${currentPage === 'dailySales' || currentPage === 'billing' ? 
//                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
//                   >
//                     <div className="flex items-center">
//                       <DollarSign size={18} className="mr-3" />
//                       Sales
//                     </div>
//                     {expandedMenus.sales ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
//                   </button>
                  
//                   {expandedMenus.sales && (
//                     <ul className="pl-9 pt-1 pb-1">
//                       <li>
//                         <button 
//                           onClick={() => changePage('dailySales')} 
//                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
//                         >
//                           Daily Sales
//                         </button>
//                       </li>
//                       <li>
//                         <button 
//                           onClick={() => changePage('billing')} 
//                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
//                         >
//                           Billing
//                         </button>
//                       </li>
//                     </ul>
//                   )}
//                 </div>
//               </li>
              
//               {/* Customers dropdown */}
//               <li>
//                 <div>
//                   <button 
//                     onClick={() => toggleMenu('customers')}
//                     className={`flex items-center justify-between w-full p-2 rounded-md 
//                       ${currentPage === 'customers' ? 
//                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
//                   >
//                     <div className="flex items-center">
//                       <UserCheck size={18} className="mr-3" />
//                       Customers
//                     </div>
//                     {expandedMenus.customers ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
//                   </button>
                  
//                   {expandedMenus.customers && (
//                     <ul className="pl-9 pt-1 pb-1">
//                       <li>
//                         <button 
//                           onClick={() => changePage('customers')} 
//                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
//                         >
//                           View Customers
//                         </button>
//                       </li>
//                     </ul>
//                   )}
//                 </div>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </aside>

//       {/* Mobile menu button */}
//       <button
//         onClick={() => setSidebarOpen(true)}
//         className={`md:hidden fixed top-4 left-4 z-10 p-2 rounded-lg bg-blue-800 text-white
//           shadow-lg hover:bg-blue-700 transition-colors duration-200
//           ${sidebarOpen ? 'hidden' : 'block'}`}
//       >
//         <Menu size={24} />
//       </button>

//       {/* Main content */}
//       <main className="flex-1 overflow-auto">
//         {/* Top header */}
//         <div className="bg-white shadow-sm border-b">
//           <div className="px-4 py-3 flex justify-between items-center">
//             <div className="md:hidden flex items-center">
//               <h1 className="text-xl font-bold text-blue-800">
//                 {currentPage === 'dashboard' ? 'Dashboard' : 
//                  currentPage === 'dailySales' ? 'Sales' :
//                  currentPage === 'billing' ? 'Billing' :
//                  currentPage === 'customers' ? 'Customers' :
//                  'Cashier Dashboard'}
//               </h1>
//             </div>
            
//             <div className="hidden md:flex items-center">
//               <div className="relative mr-4">
//                 <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </div>
            
//             <div className="flex items-center space-x-4">
//               <button className="p-1 rounded-full hover:bg-gray-100 relative">
//                 <Bell size={20} />
//                 <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
//               </button>
              
//               <button 
//                 onClick={() => setUserMenuOpen(!userMenuOpen)} 
//                 className="flex items-center text-sm text-red-600 hover:text-red-800"
//               >
//                 <LogOut size={16} className="mr-1" />
//                 <span className="hidden md:inline">Logout</span>
//               </button>
//             </div>
//           </div>
//         </div>
        
//         {/* Page content */}
//         <div className="p-4">
//           {renderContent()}
//         </div>

//         {/* User Profile */}
//         {showProfile && (
//           <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center">
//             <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6">
//               <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold">User Profile</h2>
//                 <button 
//                   onClick={() => setShowProfile(false)} 
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <X size={24} />
//                 </button>
//               </div>
//               <UserProfile />
//             </div>
//           </div>
//         )}
//       </main>

//       {/* User menu dropdown */}
//       <AnimatePresence>
//         {userMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.2 }}
//             ref={userMenuRef}
//             className="fixed right-4 top-16 w-56 bg-white rounded-lg shadow-lg z-40 border border-gray-100"
//           >
//             <div className="p-2">
//               <button 
//                 onClick={() => {
//                   setShowProfile(true);
//                   setUserMenuOpen(false);
//                 }}
//                 className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg text-left"
//               >
//                 Profile
//               </button>
//               <button 
//                 onClick={() => navigate('/logout')}
//                 className="w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg text-left"
//               >
//                 Logout
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default CashierDashboard;

import React, { useState, useContext, useEffect, useRef } from "react";
import { StoreContext } from "./StoreContext";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, BarChart2, CreditCard, X, DollarSign, UserCheck, Search, Bell, LogOut, ChevronRight, ChevronDown, User, ShoppingBag, ShoppingCart, Tag, Percent, Receipt, Clock, Calendar, HelpCircle, MessageSquare, AlertCircle, CheckCircle, Coffee, Calculator, FileText, Printer, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import components
import DailySales from "./DailySales";
import Billing from "./Billing";
import ViewCustomers from "./ViewCustomers";
import UserProfile from "./UserProfile";

const CashierDashboard = () => {
  const { storeName } = useContext(StoreContext);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [expandedMenus, setExpandedMenus] = useState({
    sales: false,
    customers: false,
    transactions: false
  });
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showCalculator, setShowCalculator] = useState(false);
  const [calculatorValue, setCalculatorValue] = useState('0');
  const [calculatorMemory, setCalculatorMemory] = useState(null);
  const [calculatorOperation, setCalculatorOperation] = useState(null);
  const [calculatorClearOnNextDigit, setCalculatorClearOnNextDigit] = useState(false);
  
  const notificationRef = useRef(null);
  const userMenuRef = useRef(null);
  const calculatorRef = useRef(null);

  // Stats for dashboard
  const stats = [
    { title: 'Total Sales Today', value: '$5,890', change: '+15%', up: true, icon: <DollarSign size={20} className="text-green-500" /> },
    { title: 'Today\'s Transactions', value: '42', change: '+12%', up: true, icon: <ShoppingBag size={20} className="text-blue-500" /> },
    { title: 'Average Sale', value: '$140.24', change: '+3%', up: true, icon: <Receipt size={20} className="text-purple-500" /> },
    { title: 'Active Discounts', value: '8', change: '+2', up: true, icon: <Percent size={20} className="text-amber-500" /> }
  ];

  // Recent transactions for dashboard
  const recentTransactions = [
    { id: '#TRX-4589', customer: 'John Smith', amount: '$129.50', date: '20 min ago', status: 'completed', paymentMethod: 'Credit Card' },
    { id: '#TRX-4588', customer: 'Lisa Wong', amount: '$245.75', date: '45 min ago', status: 'completed', paymentMethod: 'Cash' },
    { id: '#TRX-4587', customer: 'Mike Johnson', amount: '$67.25', date: '1 hr ago', status: 'pending', paymentMethod: 'Credit Card' },
    { id: '#TRX-4586', customer: 'Sara Miller', amount: '$352.00', date: '2 hrs ago', status: 'completed', paymentMethod: 'Mobile Payment' },
  ];

  // Notifications
  const notifications = [
    { id: 1, title: 'New promotion active', message: '25% off on selected items', time: '10 min ago', read: false, type: 'promotion' },
    { id: 2, title: 'Shift reminder', message: 'Your shift ends in 1 hour', time: '25 min ago', read: false, type: 'reminder' },
    { id: 3, title: 'Customer feedback', message: 'New positive review received', time: '2 hours ago', read: true, type: 'feedback' },
    { id: 4, title: 'System update', message: 'POS system updated successfully', time: '1 day ago', read: true, type: 'system' },
  ];

  // Popular items
  const popularItems = [
    { id: 'P-1245', name: 'Premium Coffee Beans', price: '$24.99', sales: 42 },
    { id: 'P-2340', name: 'Organic Green Tea', price: '$18.50', sales: 38 },
    { id: 'P-1023', name: 'Vitamin C Tablets', price: '$15.99', sales: 35 },
    { id: 'P-3456', name: 'Almond Milk', price: '$4.99', sales: 30 },
  ];

  // Active promotions
  const activePromotions = [
    { id: 'PROMO-001', name: 'Summer Sale', discount: '25% off', endDate: 'Aug 31, 2023', category: 'Beverages' },
    { id: 'PROMO-002', name: 'Back to School', discount: '15% off', endDate: 'Sep 15, 2023', category: 'Stationery' },
    { id: 'PROMO-003', name: 'Weekend Special', discount: 'Buy 1 Get 1 Free', endDate: 'Every Weekend', category: 'Bakery' },
  ];

  // Navigation menu structure
  const navigationMenu = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <BarChart2 size={20} />,
      onClick: () => changePage('dashboard')
    },
    {
      id: 'pos',
      label: 'Point of Sale',
      icon: <ShoppingCart size={20} />,
      onClick: () => changePage('pos')
    },
    {
      id: 'transactions',
      label: 'Transactions',
      icon: <Receipt size={20} />,
      submenu: [
        { id: 'dailySales', label: 'Daily Sales', onClick: () => changePage('dailySales') },
        { id: 'billing', label: 'Billing', onClick: () => changePage('billing') },
        { id: 'receipts', label: 'Receipts', onClick: () => changePage('receipts') }
      ]
    },
    {
      id: 'customers',
      label: 'Customers',
      icon: <UserCheck size={20} />,
      submenu: [
        { id: 'customers', label: 'View Customers', onClick: () => changePage('customers') },
        { id: 'loyalty', label: 'Loyalty Program', onClick: () => changePage('loyalty') }
      ]
    },
    {
      id: 'promotions',
      label: 'Promotions',
      icon: <Tag size={20} />,
      onClick: () => changePage('promotions')
    }
  ];

  // Page loading simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [currentPage]);

  // Toggle sidebar on mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, [location]);

  // Resize handling
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle clicks outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationsOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
      if (calculatorRef.current && !calculatorRef.current.contains(event.target) && 
          event.target.id !== 'calculator-toggle') {
        setShowCalculator(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Toggle submenu expandable sections
  const toggleMenu = (menu) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  // Change current page based on menu click
  const changePage = (page) => {
    setCurrentPage(page);
    setLoading(true); // Show loading state when changing pages
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Calculator functions
  const handleCalculatorDigit = (digit) => {
    if (calculatorValue === '0' || calculatorClearOnNextDigit) {
      setCalculatorValue(digit);
      setCalculatorClearOnNextDigit(false);
    } else {
      setCalculatorValue(calculatorValue + digit);
    }
  };

  const handleCalculatorDecimal = () => {
    if (calculatorClearOnNextDigit) {
      setCalculatorValue('0.');
      setCalculatorClearOnNextDigit(false);
    } else if (calculatorValue.indexOf('.') === -1) {
      setCalculatorValue(calculatorValue + '.');
    }
  };

  const handleCalculatorOperation = (operation) => {
    const value = parseFloat(calculatorValue);
    
    if (calculatorMemory === null) {
      setCalculatorMemory(value);
    } else if (calculatorOperation) {
      const result = performCalculation();
      setCalculatorMemory(result);
      setCalculatorValue(String(result));
    }
    
    setCalculatorOperation(operation);
    setCalculatorClearOnNextDigit(true);
  };

  const performCalculation = () => {
    const value = parseFloat(calculatorValue);
    
    switch (calculatorOperation) {
      case '+':
        return calculatorMemory + value;
      case '-':
        return calculatorMemory - value;
      case '*':
        return calculatorMemory * value;
      case '/':
        return calculatorMemory / value;
      default:
        return value;
    }
  };

  const handleCalculatorEquals = () => {
    if (calculatorMemory === null || calculatorOperation === null) return;
    
    const result = performCalculation();
    setCalculatorValue(String(result));
    setCalculatorMemory(null);
    setCalculatorOperation(null);
    setCalculatorClearOnNextDigit(true);
  };

  const handleCalculatorClear = () => {
    setCalculatorValue('0');
    setCalculatorMemory(null);
    setCalculatorOperation(null);
    setCalculatorClearOnNextDigit(false);
  };

  // Render main dashboard content
  const renderDashboard = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Welcome section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white transition-colors">Welcome to {storeName || "Your Store"}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Here's your cashier dashboard for today</p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -4, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors">{stat.title}</div>
              <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700 transition-colors">
                {stat.icon}
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">{stat.value}</div>
            <div className={`text-sm mt-2 flex items-center ${stat.up ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'} transition-colors`}>
              {stat.change}
              {stat.up ? 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg> :
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              }
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Main dashboard layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Transactions */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
                <ShoppingBag size={18} className="mr-2 text-blue-600 dark:text-blue-400" />
                Recent Transactions
              </h3>
              <button 
                onClick={() => changePage('dailySales')} 
                className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center"
              >
                View All
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">ID</th>
                    <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Customer</th>
                    <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                    <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Time</th>
                    <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTransactions.map((transaction, index) => (
                    <motion.tr 
                      key={index} 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                      className="border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                    >
                      <td className="py-4 px-3 text-sm font-medium text-gray-700 dark:text-gray-300">{transaction.id}</td>
                      <td className="py-4 px-3 text-sm text-gray-700 dark:text-gray-300">{transaction.customer}</td>
                      <td className="py-4 px-3 text-sm font-medium text-gray-900 dark:text-white">{transaction.amount}</td>
                      <td className="py-4 px-3 text-sm text-gray-500 dark:text-gray-400">{transaction.date}</td>
                      <td className="py-4 px-3 text-sm">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          transaction.status === 'completed' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                            : transaction.status === 'pending' 
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        }`}>
                          {transaction.status === 'completed' && <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-green-600 dark:bg-green-400"></span>}
                          {transaction.status === 'pending' && <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-yellow-600 dark:bg-yellow-400"></span>}
                          {transaction.status === 'failed' && <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-red-600 dark:bg-red-400"></span>}
                          {transaction.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Popular Items */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
                <ShoppingCart size={18} className="mr-2 text-purple-600 dark:text-purple-400" />
                Popular Items Today
              </h3>
              <button 
                onClick={() => changePage('pos')} 
                className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors flex items-center"
              >
                Go to POS
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Item</th>
                    <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">SKU</th>
                    <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Price</th>
                    <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Sales</th>
                  </tr>
                </thead>
                <tbody>
                  {popularItems.map((item, index) => (
                    <motion.tr 
                      key={index} 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                      className="border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                    >
                      <td className="py-4 px-3 text-sm font-medium text-gray-700 dark:text-gray-300">{item.name}</td>
                      <td className="py-4 px-3 text-sm text-gray-500 dark:text-gray-400">{item.id}</td>
                      <td className="py-4 px-3 text-sm font-medium text-gray-900 dark:text-white">{item.price}</td>
                      <td className="py-4 px-3 text-sm">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          {item.sales} units
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
        
        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="space-y-6"
        >
          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="font-medium text-gray-800 dark:text-white transition-colors mb-4 flex items-center">
              <Clock size={18} className="mr-2 text-blue-600 dark:text-blue-400" />
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => changePage('pos')} 
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 hover:shadow-md transition-all"
              >
                <ShoppingCart size={20} className="mb-1" />
                <span className="text-sm font-medium">New Sale</span>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => changePage('customers')} 
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 hover:shadow-md transition-all"
              >
                <UserCheck size={20} className="mb-1" />
                <span className="text-sm font-medium">Customers</span>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => changePage('receipts')} 
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400 hover:shadow-md transition-all"
              >
                <Printer size={20} className="mb-1" />
                <span className="text-sm font-medium">Receipts</span>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                id="calculator-toggle"
                onClick={() => setShowCalculator(!showCalculator)} 
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 hover:shadow-md transition-all"
              >
                <Calculator size={20} className="mb-1" />
                <span className="text-sm font-medium">Calculator</span>
              </motion.button>
            </div>
          </div>
          
          {/* Active Promotions */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
                <Tag size={18} className="mr-2 text-pink-600 dark:text-pink-400" />
                Active Promotions
              </h3>
              <button 
                onClick={() => changePage('promotions')} 
                className="text-sm text-pink-600 dark:text-pink-400 hover:text-pink-800 dark:hover:text-pink-300 transition-colors"
              >
                View All
              </button>
            </div>
            
            <div className="space-y-3">
              {activePromotions.map((promo, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-750 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                >
                  <div>
                    <div className="font-medium text-sm text-gray-800 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">{promo.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {promo.category} • Ends: {promo.endDate}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-pink-600 dark:text-pink-400">
                    {promo.discount}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => changePage('promotions')}
                className="flex items-center justify-center p-3 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white rounded-lg transition-all text-sm w-full shadow-sm hover:shadow"
              >
                <Percent size={16} className="mr-2" />
                Apply Promotion
              </motion.button>
            </div>
          </div>

          {/* Shift Information */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="font-medium text-gray-800 dark:text-white transition-colors mb-4 flex items-center">
              <Calendar size={18} className="mr-2 text-indigo-600 dark:text-indigo-400" />
              Your Shift
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Today's Shift:</span> 9:00 AM - 5:00 PM
                </div>
                <div className="px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs font-medium">
                  Active
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Break Time:</span> 1:00 PM - 2:00 PM
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Register:</span> #3
                </div>
                <div className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-medium">
                  Assigned
                </div>
              </div>
              <div className="h-px bg-gray-200 dark:bg-gray-700 my-2"></div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Next Shift:</span> Tomorrow, 10:00 AM - 6:00 PM
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  // Render the selected page content
  const renderContent = () => {
    switch(currentPage) {
      case 'dashboard':
        return renderDashboard();
      case 'dailySales':
        return <DailySales />;
      case 'billing':
        return <Billing />;
      case 'customers':
        return <ViewCustomers />;
      // New pages would be implemented here
      case 'pos':
      case 'receipts':
      case 'loyalty':
      case 'promotions':
        return (
          <div className="flex items-center justify-center h-64 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} Feature</h2>
              <p className="text-gray-600 dark:text-gray-300">This feature is coming soon.</p>
            </div>
          </div>
        );
      default:
        return renderDashboard();
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-gray-50 dark:bg-gray-900 flex`}>
      {/* Mobile overlay for sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 w-72 bg-white dark:bg-gray-800 shadow-lg
          transform transition-transform duration-300 ease-in-out z-30 overflow-hidden
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold">
              C
            </div>
            <h1 className="text-xl font-bold text-gray-800 dark:text-white truncate">
              {storeName || "Store Cashier"}
            </h1>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center space-x-3 mb-6 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
              C
            </div>
            <div>
              <div className="font-medium text-gray-800 dark:text-white">Cashier User</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Store Cashier</div>
            </div>
          </div>
          
          {/* Search box */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white text-sm"
            />
          </div>
          
          <nav>
            <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 pl-4">
              Main
            </div>
            <ul className="space-y-1 mb-6">
              {navigationMenu.map((item) => (
                <li key={item.id}>
                  {item.submenu ? (
                    <div>
                      <button 
                        onClick={() => toggleMenu(item.id)}
                        className={`flex items-center justify-between w-full p-3 rounded-lg 
                          ${expandedMenus[item.id] ? 'bg-gray-100 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-700'} 
                          transition-colors duration-200`}
                      >
                        <div className="flex items-center">
                          <div className={`mr-3 ${
                            currentPage === item.id || item.submenu?.some(sub => sub.id === currentPage)
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-gray-500 dark:text-gray-400'
                          }`}>
                            {item.icon}
                          </div>
                          <span className={`font-medium ${
                            currentPage === item.id || item.submenu?.some(sub => sub.id === currentPage)
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-gray-700 dark:text-gray-300'
                          }`}>
                            {item.label}
                          </span>
                        </div>
                        {expandedMenus[item.id] ? 
                          <ChevronDown size={18} className="text-gray-400" /> : 
                          <ChevronRight size={18} className="text-gray-400" />
                        }
                      </button>
                      
                      {expandedMenus[item.id] && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-10 pt-1 pb-1 space-y-1"
                        >
                          {item.submenu.map((subItem) => (
                            <li key={subItem.id}>
                              <button 
                                onClick={subItem.onClick} 
                                className={`p-2 rounded-md text-sm w-full text-left transition-colors duration-200
                                  ${currentPage === subItem.id 
                                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium' 
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-300'
                                  }`}
                              >
                                {subItem.label}
                              </button>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </div>
                  ) : (
                    <button 
                      onClick={item.onClick}
                      className={`flex items-center w-full p-3 rounded-lg transition-colors duration-200
                        ${currentPage === item.id 
                          ? 'bg-blue-50 dark:bg-blue-900/30' 
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                    >
                      <div className={`mr-3 ${
                        currentPage === item.id 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        {item.icon}
                      </div>
                      <span className={`font-medium ${
                        currentPage === item.id 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-gray-700 dark:text-gray-300'
                      }`}>
                        {item.label}
                      </span>
                    </button>
                  )}
                </li>
              ))}
            </ul>
            
            <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 pl-4">
              Support
            </div>
            <ul className="space-y-1">
              <li>
                <button className="flex items-center w-full p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                  <HelpCircle size={20} className="mr-3 text-gray-500 dark:text-gray-400" />
                  <span className="font-medium">Help Center</span>
                </button>
              </li>
              <li>
                <button className="flex items-center w-full p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                  <MessageSquare size={20} className="mr-3 text-gray-500 dark:text-gray-400" />
                  <span className="font-medium">Contact Manager</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        
        {/* Bottom section */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <Coffee size={18} className="text-blue-600 dark:text-blue-400 mr-2" />
              <h4 className="font-medium text-blue-600 dark:text-blue-400">Cashier Tips</h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Remember to ask customers about our loyalty program for repeat purchases.</p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className={`md:hidden fixed top-4 left-4 z-10 p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300
          shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200
          ${sidebarOpen ? 'hidden' : 'block'}`}
      >
        <Menu size={24} />
      </button>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {/* Top header */}
        <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="px-6 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                {currentPage === 'dashboard' ? 'Cashier Dashboard' : 
                 currentPage === 'pos' ? 'Point of Sale' :
                 currentPage === 'dailySales' ? 'Daily Sales' :
                 currentPage === 'billing' ? 'Billing' :
                 currentPage === 'customers' ? 'Customer Management' :
                 currentPage === 'receipts' ? 'Receipts' :
                 currentPage === 'promotions' ? 'Promotions' :
                 currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative" ref={notificationRef}>
                <button 
                  onClick={() => setNotificationsOpen(!notificationsOpen)} 
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative"
                >
                  <Bell size={20} className="text-gray-600 dark:text-gray-400" />
                  <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                    3
                  </span>
                </button>
                
                <AnimatePresence>
                  {notificationsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-40 border border-gray-200 dark:border-gray-700"
                    >
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-medium text-gray-800 dark:text-white">Notifications</h3>
                          <button className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                            Mark all as read
                          </button>
                        </div>
                        <div className="space-y-3">
                          {notifications.map((notification) => (
                            <div key={notification.id} className="flex items-start space-x-3">
                              <div className={`p-2 rounded-full ${
                                notification.type === 'promotion' ? 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400' :
                                notification.type === 'reminder' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                notification.type === 'feedback' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' :
                                'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                              }`}>
                                {notification.type === 'promotion' ? <Tag size={16} /> :
                                 notification.type === 'reminder' ? <Clock size={16} /> :
                                 notification.type === 'feedback' ? <MessageSquare size={16} /> :
                                 <Bell size={16} />}
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-800 dark:text-white">{notification.title}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{notification.message}</div>
                                <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{notification.time}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <button className="w-full mt-4 text-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                          View all notifications
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Dark mode toggle */}
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {darkMode ? (
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
              
              {/* User menu */}
              <div className="relative" ref={userMenuRef}>
                <button 
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                    C
                  </div>
                  <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300">Cashier</span>
                  <ChevronDown size={16} className="hidden md:block text-gray-500 dark:text-gray-400" />
                </button>
                
                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-40 border border-gray-200 dark:border-gray-700"
                    >
                      <div className="p-2">
                        <button 
                          onClick={() => {
                            setShowProfile(true);
                            setUserMenuOpen(false);
                          }}
                          className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left flex items-center"
                        >
                          <User size={16} className="mr-2 text-gray-500 dark:text-gray-400" />
                          Profile
                        </button>
                        <button 
                          onClick={toggleDarkMode}
                          className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left flex items-center"
                        >
                          {darkMode ? (
                            <>
                              <svg className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg>
                              Light Mode
                            </>
                          ) : (
                            <>
                              <svg className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                              </svg>
                              Dark Mode
                            </>
                          )}
                        </button>
                        <button 
                          className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left flex items-center"
                        >
                          <Settings size={16} className="mr-2 text-gray-500 dark:text-gray-400" />
                          Settings
                        </button>
                        <div className="my-1 border-t border-gray-200 dark:border-gray-700"></div>
                        <button 
                          onClick={() => navigate('/logout')}
                          className="w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg text-left flex items-center"
                        >
                          <LogOut size={16} className="mr-2" />
                          Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
        
        {/* Page content */}
        <div className="p-6">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            renderContent()
          )}
        </div>

        {/* User Profile Modal */}
        <AnimatePresence>
          {showProfile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-3xl overflow-hidden"
              >
                <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white">User Profile</h2>
                  <button 
                    onClick={() => setShowProfile(false)} 
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="p-6">
                  <UserProfile />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Calculator */}
        <AnimatePresence>
          {showCalculator && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed bottom-4 right-4 z-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 w-72"
              ref={calculatorRef}
            >
              <div className="flex justify-between items-center p-3 border-b border-gray-200 dark:border-gray-700">
                <h3 className="font-medium text-gray-800 dark:text-white">Calculator</h3>
                <button 
                  onClick={() => setShowCalculator(false)} 
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="p-3">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-3 text-right">
                  <div className="text-2xl font-mono text-gray-800 dark:text-white">{calculatorValue}</div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <button onClick={handleCalculatorClear} className="p-3 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-lg font-medium hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors">C</button>
                  <button onClick={() => handleCalculatorOperation('/')} className="p-3 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">÷</button>
                  <button onClick={() => handleCalculatorOperation('*')} className="p-3 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">×</button>
                  <button onClick={() => handleCalculatorOperation('-')} className="p-3 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">−</button>
                  
                  <button onClick={() => handleCalculatorDigit('7')} className="p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">7</button>
                  <button onClick={() => handleCalculatorDigit('8')} className="p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">8</button>
                  <button onClick={() => handleCalculatorDigit('9')} className="p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">9</button>
                  <button onClick={() => handleCalculatorOperation('+')} className="p-3 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors row-span-2">+</button>
                  
                  <button onClick={() => handleCalculatorDigit('4')} className="p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">4</button>
                  <button onClick={() => handleCalculatorDigit('5')} className="p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">5</button>
                  <button onClick={() => handleCalculatorDigit('6')} className="p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">6</button>
                  
                  <button onClick={() => handleCalculatorDigit('1')} className="p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">1</button>
                  <button onClick={() => handleCalculatorDigit('2')} className="p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">2</button>
                  <button onClick={() => handleCalculatorDigit('3')} className="p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">3</button>
                  <button onClick={handleCalculatorEquals} className="p-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors row-span-2">=</button>
                  
                  <button onClick={() => handleCalculatorDigit('0')} className="p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors col-span-2">0</button>
                  <button onClick={handleCalculatorDecimal} className="p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">.</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default CashierDashboard;
