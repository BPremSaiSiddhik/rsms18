// // import React, { useState, useContext, useEffect } from "react";
// // import { StoreContext } from "./StoreContext";
// // import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
// // import { 
// //   Menu, 
// //   Package, 
// //   Users, 
// //   BarChart2, 
// //   CreditCard, 
// //   Info, 
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
// //   User
// // } from 'lucide-react';

// // // Import components
// // import ProductDashboard from "./ProductManagement";
// // import EmployeeManagement from "./EmployeeManagement";
// // import DailySales from "./DailySales";
// // import StockTracking from "./StockTracking";
// // import Billing from "./Billing";
// // import ViewCustomers from "./ViewCustomers";
// // import SalesChart from "./SalesChart";
// // import ProductSales from "./ProductSales";
// // import InventoryDashboard from "./InventoryDashboard";
// // import ProductDashboard2 from "./RestockAlerts";
// // import SupplierManagement from "./SupplierManagement";

// // const ManagerDashboard = () => {
// //   const { storeName } = useContext(StoreContext);
// //   const [sidebarOpen, setSidebarOpen] = useState(true);
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const [currentPage, setCurrentPage] = useState('dashboard');
// //   const [expandedMenus, setExpandedMenus] = useState({
// //     products: false,
// //     employees: false,
// //     sales: false,
// //     customers: false,
// //     suppliers: false
// //   });

// //   // Stats for dashboard
// //   const stats = [
// //     { title: 'Total Sales Today', value: '$5,890', change: '+15%', up: true },
// //     { title: 'Low Stock Items', value: '24', change: '+8', up: false },
// //     { title: 'Today\'s Orders', value: '42', change: '+12%', up: true },
// //     { title: 'Active Employees', value: '18', change: '0', up: true },
// //   ];

// //   // Recent transactions for dashboard
// //   const recentTransactions = [
// //     { id: '#TRX-4589', customer: 'John Smith', amount: '$129.50', date: '20 min ago', status: 'completed' },
// //     { id: '#TRX-4588', customer: 'Lisa Wong', amount: '$245.75', date: '45 min ago', status: 'completed' },
// //     { id: '#TRX-4587', customer: 'Mike Johnson', amount: '$67.25', date: '1 hr ago', status: 'pending' },
// //     { id: '#TRX-4586', customer: 'Sara Miller', amount: '$352.00', date: '2 hrs ago', status: 'completed' },
// //   ];

// //   // Low stock items
// //   const lowStockItems = [
// //     { id: 'P-1245', name: 'Premium Coffee Beans', current: 12, min: 20 },
// //     { id: 'P-2340', name: 'Organic Green Tea', current: 8, min: 15 },
// //     { id: 'P-1023', name: 'Vitamin C Tablets', current: 5, min: 10 },
// //     { id: 'P-3456', name: 'Almond Milk', current: 9, min: 12 },
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
// //               <button onClick={() => changePage('salesChart')} className="text-sm text-blue-600 hover:underline">Detailed Report</button>
// //             </div>
            
// //             <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
// //               <button onClick={() => changePage('salesChart')} className="text-blue-600 hover:underline flex items-center">
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
// //                 onClick={() => changePage('products')} 
// //                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
// //               >
// //                 <Package size={16} className="mr-2 text-blue-600" />
// //                 <span className="truncate">Products</span>
// //               </button>
// //               <button 
// //                 onClick={() => changePage('employees')} 
// //                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
// //               >
// //                 <Users size={16} className="mr-2 text-blue-600" />
// //                 <span className="truncate">Employees</span>
// //               </button>
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
// //                 onClick={() => changePage('stockTracking')} 
// //                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
// //               >
// //                 <Layers size={16} className="mr-2 text-blue-600" />
// //                 <span className="truncate">Stock</span>
// //               </button>
// //               <button 
// //                 onClick={() => changePage('suppliers')} 
// //                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
// //               >
// //                 <Truck size={16} className="mr-2 text-blue-600" />
// //                 <span className="truncate">Suppliers</span>
// //               </button>
// //             </div>
// //           </div>
          
// //           {/* Low Stock Alert */}
// //           <div className="bg-white rounded-lg shadow p-4">
// //             <div className="flex justify-between items-center mb-4">
// //               <h3 className="font-medium">Low Stock Alert</h3>
// //               <button onClick={() => changePage('restockAlerts')} className="text-sm text-blue-600 hover:underline">All Alerts</button>
// //             </div>
            
// //             <div className="space-y-3">
// //               {lowStockItems.map((item, index) => (
// //                 <div key={index} className="flex items-center justify-between p-2 rounded bg-gray-50">
// //                   <div>
// //                     <div className="font-medium text-sm">{item.name}</div>
// //                     <div className="text-xs text-gray-500">SKU: {item.id}</div>
// //                   </div>
// //                   <div className="text-sm font-medium text-red-600">
// //                     {item.current}/{item.min}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
            
// //             <div className="mt-4">
// //               <button 
// //                 onClick={() => changePage('suppliers')}
// //                 className="flex items-center justify-center p-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm w-full"
// //               >
// //                 Place Order
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
// //       case 'products':
// //         return <ProductDashboard />;
// //       case 'employees':
// //         return <EmployeeManagement />;
// //       case 'dailySales':
// //         return <DailySales />;
// //       case 'stockTracking':
// //         return <StockTracking />;
// //       case 'billing':
// //         return <Billing />;
// //       case 'customers':
// //         return <ViewCustomers />;
// //       case 'salesChart':
// //         return <SalesChart />;
// //       case 'productSales':
// //         return <ProductSales />;
// //       case 'inventory':
// //         return <InventoryDashboard />;
// //       case 'restockAlerts':
// //         return <ProductDashboard2 />;
// //       case 'suppliers':
// //         return <SupplierManagement />;
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
// //               M
// //             </div>
// //             <div>
// //               <div className="font-medium text-white">Manager User</div>
// //               <div className="text-sm text-blue-200">Manager</div>
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
              
// //               {/* Products dropdown */}
// //               <li>
// //                 <div>
// //                   <button 
// //                     onClick={() => toggleMenu('products')}
// //                     className={`flex items-center justify-between w-full p-2 rounded-md 
// //                       ${currentPage === 'products' || currentPage === 'inventory' || currentPage === 'restockAlerts' ? 
// //                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// //                   >
// //                     <div className="flex items-center">
// //                       <Package size={18} className="mr-3" />
// //                       Products
// //                     </div>
// //                     {expandedMenus.products ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
// //                   </button>
                  
// //                   {expandedMenus.products && (
// //                     <ul className="pl-9 pt-1 pb-1">
// //                       <li>
// //                         <button 
// //                           onClick={() => changePage('products')} 
// //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// //                         >
// //                           All Products
// //                         </button>
// //                       </li>
// //                       <li>
// //                         <button 
// //                           onClick={() => changePage('inventory')} 
// //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// //                         >
// //                           Inventory
// //                         </button>
// //                       </li>
// //                       <li>
// //                         <button 
// //                           onClick={() => changePage('restockAlerts')} 
// //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// //                         >
// //                           Restock Alerts
// //                         </button>
// //                       </li>
// //                     </ul>
// //                   )}
// //                 </div>
// //               </li>
              
// //               {/* Employees dropdown */}
// //               <li>
// //                 <div>
// //                   <button 
// //                     onClick={() => toggleMenu('employees')}
// //                     className={`flex items-center justify-between w-full p-2 rounded-md 
// //                       ${currentPage === 'employees' ? 
// //                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// //                   >
// //                     <div className="flex items-center">
// //                       <Users size={18} className="mr-3" />
// //                       Employees
// //                     </div>
// //                     {expandedMenus.employees ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
// //                   </button>
                  
// //                   {expandedMenus.employees && (
// //                     <ul className="pl-9 pt-1 pb-1">
// //                       <li>
// //                         <button 
// //                           onClick={() => changePage('employees')} 
// //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// //                         >
// //                           Manage Employees
// //                         </button>
// //                       </li>
// //                     </ul>
// //                   )}
// //                 </div>
// //               </li>
              
// //               {/* Sales dropdown */}
// //               <li>
// //                 <div>
// //                   <button 
// //                     onClick={() => toggleMenu('sales')}
// //                     className={`flex items-center justify-between w-full p-2 rounded-md 
// //                       ${currentPage === 'dailySales' || currentPage === 'salesChart' || currentPage === 'productSales' || currentPage === 'billing' ? 
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
// //                           onClick={() => changePage('salesChart')} 
// //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// //                         >
// //                           Sales Reports
// //                         </button>
// //                       </li>
// //                       <li>
// //                         <button 
// //                           onClick={() => changePage('productSales')} 
// //                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
// //                         >
// //                           Product Sales
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
              
// //               {/* Suppliers */}
// //               <li>
// //                 <button 
// //                   onClick={() => changePage('suppliers')}
// //                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'suppliers' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// //                 >
// //                   <Truck size={18} className="mr-3" />
// //                   Suppliers
// //                 </button>
// //               </li>
              
// //               {/* Inventory/Stock */}
// //               <li>
// //                 <button 
// //                   onClick={() => changePage('stockTracking')}
// //                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'stockTracking' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
// //                 >
// //                   <Layers size={18} className="mr-3" />
// //                   Stock Tracking
// //                 </button>
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
// //                  currentPage === 'products' ? 'Products' :
// //                  currentPage === 'employees' ? 'Employees' :
// //                  currentPage === 'dailySales' ? 'Sales' :
// //                  currentPage === 'stockTracking' ? 'Stock' :
// //                  currentPage === 'suppliers' ? 'Suppliers' :
// //                  'Manager Dashboard'}
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
              
// //               <AnimatePresence>
// //         {userMenuOpen && (
// //           <motion.div
// //             initial={{ opacity: 0, y: -10 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -10 }}
// //             transition={{ duration: 0.2 }}
// //             ref={userMenuRef}
// //             className="fixed right-4 top-16 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-40 border border-gray-100 dark:border-gray-700"
// //           >
// //             <div className="p-2">
// //             <button 
// //                 onClick={() => navigate('/UserProfile')}
// //                 className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left"
// //               >
// //                 Profile
// //               </button>
// //               <button 
// //                 onClick={toggleDarkMode}
// //                 className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left"
// //               >
// //                 {darkMode ? 'Light Mode' : 'Dark Mode'}
// //               </button>
// //               <button 
// //                 onClick={() => navigate('/settings')}
// //                 className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left"
// //               >
// //                 Settings
// //               </button>
// //               <button 
// //                 onClick={() => navigate('/logout')}
// //                 className="w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg text-left"
// //               >
// //                 Logout
// //               </button>
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
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

// // export default ManagerDashboard;

// import React, { useState, useContext, useEffect, useRef } from "react";
// import { StoreContext } from "./StoreContext";
// import { useLocation, useNavigate } from "react-router-dom";
// import { 
//   Menu, 
//   Package, 
//   Users, 
//   BarChart2, 
//   CreditCard, 
//   X, 
//   DollarSign,
//   UserCheck,
//   Search,
//   Bell,
//   LogOut,
//   Truck,
//   Layers,
//   ChevronRight,
//   ChevronDown,
//   User
// } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// // Import components
// import ProductDashboard from "./ProductManagement";
// import EmployeeManagement from "./EmployeeManagement";
// import DailySales from "./DailySales";
// import StockTracking from "./StockTracking";
// import Billing from "./Billing";
// import ViewCustomers from "./ViewCustomers";
// import SalesChart from "./SalesChart";
// import ProductSales from "./ProductSales";
// import InventoryDashboard from "./InventoryDashboard";
// import ProductDashboard2 from "./RestockAlerts";
// import SupplierManagement from "./SupplierManagement";
// import UserProfile from "./UserProfile"; // Import the UserProfile component

// const ManagerDashboard = () => {
//   const { storeName } = useContext(StoreContext);
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [currentPage, setCurrentPage] = useState('dashboard');
//   const [expandedMenus, setExpandedMenus] = useState({
//     products: false,
//     employees: false,
//     sales: false,
//     customers: false,
//     suppliers: false
//   });
//   const [userMenuOpen, setUserMenuOpen] = useState(false);
//   const [showProfile, setShowProfile] = useState(false); // State to manage profile visibility
//   const userMenuRef = useRef(null);

//   // Stats for dashboard
//   const stats = [
//     { title: 'Total Sales Today', value: '$5,890', change: '+15%', up: true },
//     { title: 'Low Stock Items', value: '24', change: '+8', up: false },
//     { title: 'Today\'s Orders', value: '42', change: '+12%', up: true },
//     { title: 'Active Employees', value: '18', change: '0', up: true },
//   ];

//   // Recent transactions for dashboard
//   const recentTransactions = [
//     { id: '#TRX-4589', customer: 'John Smith', amount: '$129.50', date: '20 min ago', status: 'completed' },
//     { id: '#TRX-4588', customer: 'Lisa Wong', amount: '$245.75', date: '45 min ago', status: 'completed' },
//     { id: '#TRX-4587', customer: 'Mike Johnson', amount: '$67.25', date: '1 hr ago', status: 'pending' },
//     { id: '#TRX-4586', customer: 'Sara Miller', amount: '$352.00', date: '2 hrs ago', status: 'completed' },
//   ];

//   // Low stock items
//   const lowStockItems = [
//     { id: 'P-1245', name: 'Premium Coffee Beans', current: 12, min: 20 },
//     { id: 'P-2340', name: 'Organic Green Tea', current: 8, min: 15 },
//     { id: 'P-1023', name: 'Vitamin C Tablets', current: 5, min: 10 },
//     { id: 'P-3456', name: 'Almond Milk', current: 9, min: 12 },
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
//               <button onClick={() => changePage('salesChart')} className="text-sm text-blue-600 hover:underline">Detailed Report</button>
//             </div>
            
//             <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
//               <button onClick={() => changePage('salesChart')} className="text-blue-600 hover:underline flex items-center">
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
//                 onClick={() => changePage('products')} 
//                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
//               >
//                 <Package size={16} className="mr-2 text-blue-600" />
//                 <span className="truncate">Products</span>
//               </button>
//               <button 
//                 onClick={() => changePage('employees')} 
//                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
//               >
//                 <Users size={16} className="mr-2 text-blue-600" />
//                 <span className="truncate">Employees</span>
//               </button>
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
//                 onClick={() => changePage('stockTracking')} 
//                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
//               >
//                 <Layers size={16} className="mr-2 text-blue-600" />
//                 <span className="truncate">Stock</span>
//               </button>
//               <button 
//                 onClick={() => changePage('suppliers')} 
//                 className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors text-sm"
//               >
//                 <Truck size={16} className="mr-2 text-blue-600" />
//                 <span className="truncate">Suppliers</span>
//               </button>
//             </div>
//           </div>
          
//           {/* Low Stock Alert */}
//           <div className="bg-white rounded-lg shadow p-4">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="font-medium">Low Stock Alert</h3>
//               <button onClick={() => changePage('restockAlerts')} className="text-sm text-blue-600 hover:underline">All Alerts</button>
//             </div>
            
//             <div className="space-y-3">
//               {lowStockItems.map((item, index) => (
//                 <div key={index} className="flex items-center justify-between p-2 rounded bg-gray-50">
//                   <div>
//                     <div className="font-medium text-sm">{item.name}</div>
//                     <div className="text-xs text-gray-500">SKU: {item.id}</div>
//                   </div>
//                   <div className="text-sm font-medium text-red-600">
//                     {item.current}/{item.min}
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             <div className="mt-4">
//               <button 
//                 onClick={() => changePage('suppliers')}
//                 className="flex items-center justify-center p-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm w-full"
//               >
//                 Place Order
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
//       case 'products':
//         return <ProductDashboard />;
//       case 'employees':
//         return <EmployeeManagement />;
//       case 'dailySales':
//         return <DailySales />;
//       case 'stockTracking':
//         return <StockTracking />;
//       case 'billing':
//         return <Billing />;
//       case 'customers':
//         return <ViewCustomers />;
//       case 'salesChart':
//         return <SalesChart />;
//       case 'productSales':
//         return <ProductSales />;
//       case 'inventory':
//         return <InventoryDashboard />;
//       case 'restockAlerts':
//         return <ProductDashboard2 />;
//       case 'suppliers':
//         return <SupplierManagement />;
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
//               M
//             </div>
//             <div>
//               <div className="font-medium text-white">Manager User</div>
//               <div className="text-sm text-blue-200">Manager</div>
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
              
//               {/* Products dropdown */}
//               <li>
//                 <div>
//                   <button 
//                     onClick={() => toggleMenu('products')}
//                     className={`flex items-center justify-between w-full p-2 rounded-md 
//                       ${currentPage === 'products' || currentPage === 'inventory' || currentPage === 'restockAlerts' ? 
//                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
//                   >
//                     <div className="flex items-center">
//                       <Package size={18} className="mr-3" />
//                       Products
//                     </div>
//                     {expandedMenus.products ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
//                   </button>
                  
//                   {expandedMenus.products && (
//                     <ul className="pl-9 pt-1 pb-1">
//                       <li>
//                         <button 
//                           onClick={() => changePage('products')} 
//                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
//                         >
//                           All Products
//                         </button>
//                       </li>
//                       <li>
//                         <button 
//                           onClick={() => changePage('inventory')} 
//                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
//                         >
//                           Inventory
//                         </button>
//                       </li>
//                       <li>
//                         <button 
//                           onClick={() => changePage('restockAlerts')} 
//                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
//                         >
//                           Restock Alerts
//                         </button>
//                       </li>
//                     </ul>
//                   )}
//                 </div>
//               </li>
              
//               {/* Employees dropdown */}
//               <li>
//                 <div>
//                   <button 
//                     onClick={() => toggleMenu('employees')}
//                     className={`flex items-center justify-between w-full p-2 rounded-md 
//                       ${currentPage === 'employees' ? 
//                         'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
//                   >
//                     <div className="flex items-center">
//                       <Users size={18} className="mr-3" />
//                       Employees
//                     </div>
//                     {expandedMenus.employees ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
//                   </button>
                  
//                   {expandedMenus.employees && (
//                     <ul className="pl-9 pt-1 pb-1">
//                       <li>
//                         <button 
//                           onClick={() => changePage('employees')} 
//                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
//                         >
//                           Manage Employees
//                         </button>
//                       </li>
//                     </ul>
//                   )}
//                 </div>
//               </li>
              
//               {/* Sales dropdown */}
//               <li>
//                 <div>
//                   <button 
//                     onClick={() => toggleMenu('sales')}
//                     className={`flex items-center justify-between w-full p-2 rounded-md 
//                       ${currentPage === 'dailySales' || currentPage === 'salesChart' || currentPage === 'productSales' || currentPage === 'billing' ? 
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
//                           onClick={() => changePage('salesChart')} 
//                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
//                         >
//                           Sales Reports
//                         </button>
//                       </li>
//                       <li>
//                         <button 
//                           onClick={() => changePage('productSales')} 
//                           className="p-1 hover:text-blue-300 text-sm w-full text-left text-blue-100"
//                         >
//                           Product Sales
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
              
//               {/* Suppliers */}
//               <li>
//                 <button 
//                   onClick={() => changePage('suppliers')}
//                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'suppliers' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
//                 >
//                   <Truck size={18} className="mr-3" />
//                   Suppliers
//                 </button>
//               </li>
              
//               {/* Inventory/Stock */}
//               <li>
//                 <button 
//                   onClick={() => changePage('stockTracking')}
//                   className={`flex items-center w-full p-2 rounded-md ${currentPage === 'stockTracking' ? 'bg-white text-blue-800' : 'text-white hover:bg-white/10'}`}
//                 >
//                   <Layers size={18} className="mr-3" />
//                   Stock Tracking
//                 </button>
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
//                  currentPage === 'products' ? 'Products' :
//                  currentPage === 'employees' ? 'Employees' :
//                  currentPage === 'dailySales' ? 'Sales' :
//                  currentPage === 'stockTracking' ? 'Stock' :
//                  currentPage === 'suppliers' ? 'Suppliers' :
//                  'Manager Dashboard'}
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
//                 <h2 className="text-xl font-bold">User Profile</h2>
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

// export default ManagerDashboard;

"use client"

// import { useState, useContext, useEffect, useRef } from "react"
// import { StoreContext } from "./StoreContext"
// import { useLocation, useNavigate } from "react-router-dom"
// import {
//   Menu,
//   Package,
//   Users,
//   BarChart2,
//   X,
//   DollarSign,
//   UserCheck,
//   Search,
//   Bell,
//   LogOut,
//   Truck,
//   Layers,
//   ChevronRight,
//   ChevronDown,
//   User,
//   Calendar,
//   Clock,
//   ShoppingBag,
//   AlertTriangle,
//   FileText,
//   HelpCircle,
//   Settings,
//   Tag,
//   Activity,
//   CheckSquare,
//   Coffee,
//   MessageSquare,
// } from "lucide-react"
// import { motion, AnimatePresence } from "framer-motion"

// // Import components
// import ProductDashboard from "./ProductManagement"
// import EmployeeManagement from "./EmployeeManagement"
// import DailySales from "./DailySales"
// import StockTracking from "./StockTracking"
// import Billing from "./Billing"
// import ViewCustomers from "./ViewCustomers"
// import SalesChart from "./SalesChart"
// import ProductSales from "./ProductSales"
// import InventoryDashboard from "./InventoryDashboard"
// import ProductDashboard2 from "./RestockAlerts"
// import SupplierManagement from "./SupplierManagement"
// import UserProfile from "./UserProfile"

// const ManagerDashboard = () => {
//   const { storeName } = useContext(StoreContext)
//   const [sidebarOpen, setSidebarOpen] = useState(true)
//   const location = useLocation()
//   const navigate = useNavigate()
//   const [currentPage, setCurrentPage] = useState("dashboard")
//   const [expandedMenus, setExpandedMenus] = useState({
//     products: false,
//     employees: false,
//     sales: false,
//     customers: false,
//     suppliers: false,
//     reports: false,
//   })
//   const [notificationsOpen, setNotificationsOpen] = useState(false)
//   const [userMenuOpen, setUserMenuOpen] = useState(false)
//   const [showProfile, setShowProfile] = useState(false)
//   const [darkMode, setDarkMode] = useState(false)
//   const [loading, setLoading] = useState(true)
//   const [animateCharts, setAnimateCharts] = useState(false)

//   const notificationRef = useRef(null)
//   const userMenuRef = useRef(null)

//   // Stats for dashboard
//   const stats = [
//     {
//       title: "Total Sales Today",
//       value: "$5,890",
//       change: "+15%",
//       up: true,
//       icon: <DollarSign size={20} className="text-green-500" />,
//     },
//     {
//       title: "Low Stock Items",
//       value: "24",
//       change: "+8",
//       up: false,
//       icon: <AlertTriangle size={20} className="text-amber-500" />,
//     },
//     {
//       title: "Today's Orders",
//       value: "42",
//       change: "+12%",
//       up: true,
//       icon: <ShoppingBag size={20} className="text-blue-500" />,
//     },
//     {
//       title: "Active Employees",
//       value: "18",
//       change: "0",
//       up: true,
//       icon: <Users size={20} className="text-purple-500" />,
//     },
//   ]

//   // Recent transactions for dashboard
//   const recentTransactions = [
//     {
//       id: "#TRX-4589",
//       customer: "John Smith",
//       amount: "$129.50",
//       date: "20 min ago",
//       status: "completed",
//       paymentMethod: "Credit Card",
//     },
//     {
//       id: "#TRX-4588",
//       customer: "Lisa Wong",
//       amount: "$245.75",
//       date: "45 min ago",
//       status: "completed",
//       paymentMethod: "PayPal",
//     },
//     {
//       id: "#TRX-4587",
//       customer: "Mike Johnson",
//       amount: "$67.25",
//       date: "1 hr ago",
//       status: "pending",
//       paymentMethod: "Credit Card",
//     },
//     {
//       id: "#TRX-4586",
//       customer: "Sara Miller",
//       amount: "$352.00",
//       date: "2 hrs ago",
//       status: "completed",
//       paymentMethod: "Bank Transfer",
//     },
//   ]

//   // Low stock items
//   const lowStockItems = [
//     { id: "P-1245", name: "Premium Coffee Beans", current: 12, min: 20, reorderStatus: "urgent" },
//     { id: "P-2340", name: "Organic Green Tea", current: 8, min: 15, reorderStatus: "pending" },
//     { id: "P-1023", name: "Vitamin C Tablets", current: 5, min: 10, reorderStatus: "ordered" },
//     { id: "P-3456", name: "Almond Milk", current: 9, min: 12, reorderStatus: "urgent" },
//   ]

//   // Notifications
//   const notifications = [
//     {
//       id: 1,
//       title: "Low stock alert",
//       message: "4 products need reordering",
//       time: "10 min ago",
//       read: false,
//       type: "alert",
//     },
//     {
//       id: 2,
//       title: "New order received",
//       message: "Order #12458 from John D.",
//       time: "25 min ago",
//       read: false,
//       type: "order",
//     },
//     {
//       id: 3,
//       title: "Staff meeting",
//       message: "Reminder: Meeting at 3 PM",
//       time: "2 hours ago",
//       read: true,
//       type: "reminder",
//     },
//     {
//       id: 4,
//       title: "System update",
//       message: "Maintenance scheduled for tonight",
//       time: "1 day ago",
//       read: true,
//       type: "system",
//     },
//   ]

//   // Staff schedule for today
//   const staffSchedule = [
//     { name: "Sarah Johnson", position: "Cashier", shift: "8:00 AM - 4:00 PM", status: "on-duty" },
//     { name: "Michael Chen", position: "Sales Associate", shift: "10:00 AM - 6:00 PM", status: "on-duty" },
//     { name: "Emily Rodriguez", position: "Inventory Specialist", shift: "9:00 AM - 5:00 PM", status: "on-duty" },
//     { name: "David Kim", position: "Cashier", shift: "4:00 PM - 10:00 PM", status: "upcoming" },
//     { name: "Jessica Taylor", position: "Sales Associate", shift: "2:00 PM - 10:00 PM", status: "upcoming" },
//   ]

//   // Tasks for today
//   const todaysTasks = [
//     { id: 1, title: "Review inventory report", priority: "high", completed: false },
//     { id: 2, title: "Staff meeting at 10:00 AM", priority: "medium", completed: true },
//     { id: 3, title: "Process supplier invoices", priority: "high", completed: false },
//     { id: 4, title: "Train new cashier", priority: "medium", completed: false },
//     { id: 5, title: "Update product prices", priority: "low", completed: true },
//   ]

//   // Navigation menu structure
//   const navigationMenu = [
//     {
//       id: "dashboard",
//       label: "Dashboard",
//       icon: <BarChart2 size={20} />,
//       onClick: () => changePage("dashboard"),
//     },
//     {
//       id: "products",
//       label: "Products",
//       icon: <Package size={20} />,
//       submenu: [
//         { id: "products", label: "All Products", onClick: () => changePage("products") },
//         { id: "inventory", label: "Inventory", onClick: () => changePage("inventory") },
//         { id: "restockAlerts", label: "Restock Alerts", onClick: () => changePage("restockAlerts") },
//         { id: "promotions", label: "Promotions", onClick: () => changePage("promotions") },
//       ],
//     },
//     {
//       id: "employees",
//       label: "Employees",
//       icon: <Users size={20} />,
//       submenu: [
//         { id: "employees", label: "Manage Employees", onClick: () => changePage("employees") },
//         { id: "schedule", label: "Staff Schedule", onClick: () => changePage("schedule") },
//         { id: "performance", label: "Performance", onClick: () => changePage("performance") },
//       ],
//     },
//     {
//       id: "sales",
//       label: "Sales",
//       icon: <DollarSign size={20} />,
//       submenu: [
//         { id: "dailySales", label: "Daily Sales", onClick: () => changePage("dailySales") },
//         { id: "salesChart", label: "Sales Reports", onClick: () => changePage("salesChart") },
//         { id: "productSales", label: "Product Sales", onClick: () => changePage("productSales") },
//         { id: "billing", label: "Billing", onClick: () => changePage("billing") },
//       ],
//     },
//     {
//       id: "customers",
//       label: "Customers",
//       icon: <UserCheck size={20} />,
//       submenu: [
//         { id: "customers", label: "View Customers", onClick: () => changePage("customers") },
//         { id: "feedback", label: "Customer Feedback", onClick: () => changePage("feedback") },
//         { id: "loyalty", label: "Loyalty Program", onClick: () => changePage("loyalty") },
//       ],
//     },
//     {
//       id: "suppliers",
//       label: "Suppliers",
//       icon: <Truck size={20} />,
//       onClick: () => changePage("suppliers"),
//     },
//     {
//       id: "stockTracking",
//       label: "Stock Tracking",
//       icon: <Layers size={20} />,
//       onClick: () => changePage("stockTracking"),
//     },
//     {
//       id: "reports",
//       label: "Reports",
//       icon: <FileText size={20} />,
//       submenu: [
//         { id: "dailyReport", label: "Daily Report", onClick: () => changePage("dailyReport") },
//         { id: "inventoryReport", label: "Inventory Report", onClick: () => changePage("inventoryReport") },
//         { id: "salesReport", label: "Sales Report", onClick: () => changePage("salesReport") },
//       ],
//     },
//     {
//       id: "tasks",
//       label: "Tasks",
//       icon: <CheckSquare size={20} />,
//       onClick: () => changePage("tasks"),
//     },
//   ]

//   // Page loading simulation
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false)
//       setTimeout(() => setAnimateCharts(true), 500)
//     }, 800)
//     return () => clearTimeout(timer)
//   }, [currentPage])

//   // Toggle sidebar on mobile
//   useEffect(() => {
//     if (window.innerWidth < 768) {
//       setSidebarOpen(false)
//     }
//   }, [location])

//   // Resize handling
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setSidebarOpen(true)
//       }
//     }

//     window.addEventListener("resize", handleResize)
//     handleResize()
//     return () => window.removeEventListener("resize", handleResize)
//   }, [])

//   // Handle clicks outside dropdowns
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (notificationRef.current && !notificationRef.current.contains(event.target)) {
//         setNotificationsOpen(false)
//       }
//       if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
//         setUserMenuOpen(false)
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside)
//     return () => document.removeEventListener("mousedown", handleClickOutside)
//   }, [])

//   // Toggle submenu expandable sections
//   const toggleMenu = (menu) => {
//     setExpandedMenus((prev) => ({
//       ...prev,
//       [menu]: !prev[menu],
//     }))
//   }

//   // Change current page based on menu click
//   const changePage = (page) => {
//     setCurrentPage(page)
//     setLoading(true) // Show loading state when changing pages
//     if (window.innerWidth < 768) {
//       setSidebarOpen(false)
//     }
//   }

//   // Toggle dark mode
//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode)
//     document.documentElement.classList.toggle("dark")
//   }

//   // Render main dashboard content
//   const renderDashboard = () => (
//     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
//       {/* Welcome section */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold text-gray-800 dark:text-white transition-colors">
//           Welcome to {storeName || "Your Store"}
//         </h2>
//         <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
//           Here's what's happening with your store today
//         </p>
//       </div>

//       {/* Stats cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
//         {stats.map((stat, index) => (
//           <motion.div
//             key={index}
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.3, delay: index * 0.1 }}
//             whileHover={{ y: -4, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
//             className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700"
//           >
//             <div className="flex justify-between items-start mb-3">
//               <div className="text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors">{stat.title}</div>
//               <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700 transition-colors">{stat.icon}</div>
//             </div>
//             <div className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">{stat.value}</div>
//             <div
//               className={`text-sm mt-2 flex items-center ${stat.up ? "text-green-600 dark:text-green-500" : "text-red-600 dark:text-red-500"} transition-colors`}
//             >
//               {stat.change}
//               {stat.up ? (
//                 <svg
//                   className="w-4 h-4 ml-1"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
//                 </svg>
//               ) : (
//                 <svg
//                   className="w-4 h-4 ml-1"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Main dashboard layout */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left column */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.2 }}
//           className="lg:col-span-2 space-y-6"
//         >
//           {/* Transactions */}
//           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
//                 <ShoppingBag size={18} className="mr-2 text-blue-600 dark:text-blue-400" />
//                 Recent Transactions
//               </h3>
//               <button
//                 onClick={() => changePage("dailySales")}
//                 className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center"
//               >
//                 View All
//                 <ChevronRight size={16} className="ml-1" />
//               </button>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="border-b border-gray-200 dark:border-gray-700">
//                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                       ID
//                     </th>
//                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                       Customer
//                     </th>
//                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                       Amount
//                     </th>
//                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                       Time
//                     </th>
//                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                       Status
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {recentTransactions.map((transaction, index) => (
//                     <motion.tr
//                       key={index}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.2, delay: index * 0.1 }}
//                       className="border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
//                     >
//                       <td className="py-4 px-3 text-sm font-medium text-gray-700 dark:text-gray-300">
//                         {transaction.id}
//                       </td>
//                       <td className="py-4 px-3 text-sm text-gray-700 dark:text-gray-300">{transaction.customer}</td>
//                       <td className="py-4 px-3 text-sm font-medium text-gray-900 dark:text-white">
//                         {transaction.amount}
//                       </td>
//                       <td className="py-4 px-3 text-sm text-gray-500 dark:text-gray-400">{transaction.date}</td>
//                       <td className="py-4 px-3 text-sm">
//                         <span
//                           className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                             transaction.status === "completed"
//                               ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
//                               : transaction.status === "pending"
//                                 ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
//                                 : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
//                           }`}
//                         >
//                           {transaction.status === "completed" && (
//                             <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-green-600 dark:bg-green-400"></span>
//                           )}
//                           {transaction.status === "pending" && (
//                             <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-yellow-600 dark:bg-yellow-400"></span>
//                           )}
//                           {transaction.status === "failed" && (
//                             <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-red-600 dark:bg-red-400"></span>
//                           )}
//                           {transaction.status}
//                         </span>
//                       </td>
//                     </motion.tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Staff Schedule */}
//           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
//                 <Clock size={18} className="mr-2 text-purple-600 dark:text-purple-400" />
//                 Today's Staff Schedule
//               </h3>
//               <button
//                 onClick={() => changePage("schedule")}
//                 className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors flex items-center"
//               >
//                 Full Schedule
//                 <ChevronRight size={16} className="ml-1" />
//               </button>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="border-b border-gray-200 dark:border-gray-700">
//                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                       Employee
//                     </th>
//                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                       Position
//                     </th>
//                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                       Shift
//                     </th>
//                     <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                       Status
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {staffSchedule.map((staff, index) => (
//                     <motion.tr
//                       key={index}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.2, delay: index * 0.1 }}
//                       className="border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
//                     >
//                       <td className="py-4 px-3 text-sm font-medium text-gray-700 dark:text-gray-300">{staff.name}</td>
//                       <td className="py-4 px-3 text-sm text-gray-700 dark:text-gray-300">{staff.position}</td>
//                       <td className="py-4 px-3 text-sm text-gray-700 dark:text-gray-300">{staff.shift}</td>
//                       <td className="py-4 px-3 text-sm">
//                         <span
//                           className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                             staff.status === "on-duty"
//                               ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
//                               : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
//                           }`}
//                         >
//                           {staff.status === "on-duty" ? "On Duty" : "Upcoming"}
//                         </span>
//                       </td>
//                     </motion.tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </motion.div>

//         {/* Right column */}
//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.3, delay: 0.4 }}
//           className="space-y-6"
//         >
//           {/* Tasks */}
//           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
//                 <CheckSquare size={18} className="mr-2 text-teal-600 dark:text-teal-400" />
//                 Today's Tasks
//               </h3>
//               <button
//                 onClick={() => changePage("tasks")}
//                 className="text-sm text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors"
//               >
//                 All Tasks
//               </button>
//             </div>

//             <div className="space-y-3">
//               {todaysTasks.map((task, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.2, delay: index * 0.1 }}
//                   className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-750 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
//                 >
//                   <div className="flex items-center">
//                     <div
//                       className={`flex-shrink-0 h-5 w-5 rounded-full mr-3 ${
//                         task.completed
//                           ? "bg-green-500 dark:bg-green-600"
//                           : task.priority === "high"
//                             ? "bg-red-500 dark:bg-red-600"
//                             : task.priority === "medium"
//                               ? "bg-yellow-500 dark:bg-yellow-600"
//                               : "bg-blue-500 dark:bg-blue-600"
//                       }`}
//                     ></div>
//                     <span
//                       className={`text-sm ${task.completed ? "line-through text-gray-500 dark:text-gray-400" : "text-gray-800 dark:text-white"}`}
//                     >
//                       {task.title}
//                     </span>
//                   </div>
//                   <div>
//                     <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
//                       {task.completed ? (
//                         <svg
//                           className="w-5 h-5"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                       ) : (
//                         <svg
//                           className="w-5 h-5"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                           />
//                         </svg>
//                       )}
//                     </button>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             <div className="mt-4">
//               <button
//                 onClick={() => changePage("tasks")}
//                 className="flex items-center justify-center p-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors text-sm w-full"
//               >
//                 <svg
//                   className="w-4 h-4 mr-2"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                 </svg>
//                 Add New Task
//               </button>
//             </div>
//           </div>

//           {/* Low Stock Alert */}
//           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
//                 <AlertTriangle size={18} className="mr-2 text-red-500" />
//                 Low Stock Alert
//               </h3>
//               <button
//                 onClick={() => changePage("restockAlerts")}
//                 className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
//               >
//                 All Alerts
//               </button>
//             </div>

//             <div className="space-y-3">
//               {lowStockItems.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.2, delay: index * 0.1 }}
//                   className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-750 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
//                 >
//                   <div className="flex items-start space-x-3">
//                     <div
//                       className={`mt-0.5 p-1.5 rounded-md ${
//                         item.reorderStatus === "urgent"
//                           ? "bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400"
//                           : item.reorderStatus === "pending"
//                             ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-400"
//                             : "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400"
//                       }`}
//                     >
//                       <Layers size={16} />
//                     </div>
//                     <div>
//                       <div className="font-medium text-sm text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                         {item.name}
//                       </div>
//                       <div className="text-xs text-gray-500 dark:text-gray-400">SKU: {item.id}</div>
//                     </div>
//                   </div>
//                   <div
//                     className={`text-sm font-medium ${
//                       (item.current / item.min) < 0.5
//                         ? "text-red-600 dark:text-red-400"
//                         : item.current / item.min < 0.75
//                           ? "text-yellow-600 dark:text-yellow-400"
//                           : "text-gray-700 dark:text-gray-300"
//                     }`}
//                   >
//                     {item.current}/{item.min}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             <div className="mt-4">
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={() => changePage("suppliers")}
//                 className="flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all text-sm w-full shadow-sm hover:shadow"
//               >
//                 <Truck size={16} className="mr-2" />
//                 Place Restock Order
//               </motion.button>
//             </div>
//           </div>

//           {/* Quick Actions */}
//           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
//             <h3 className="font-medium text-gray-800 dark:text-white transition-colors mb-4 flex items-center">
//               <Activity size={18} className="mr-2 text-indigo-600 dark:text-indigo-400" />
//               Quick Actions
//             </h3>
//             <div className="grid grid-cols-2 gap-3">
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 onClick={() => changePage("dailySales")}
//                 className="flex flex-col items-center justify-center p-3 rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 hover:shadow-md transition-all"
//               >
//                 <DollarSign size={20} className="mb-1" />
//                 <span className="text-sm font-medium">View Sales</span>
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 onClick={() => changePage("schedule")}
//                 className="flex flex-col items-center justify-center p-3 rounded-lg bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 hover:shadow-md transition-all"
//               >
//                 <Calendar size={20} className="mb-1" />
//                 <span className="text-sm font-medium">Schedule</span>
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 onClick={() => changePage("inventory")}
//                 className="flex flex-col items-center justify-center p-3 rounded-lg bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400 hover:shadow-md transition-all"
//               >
//                 <Package size={20} className="mb-1" />
//                 <span className="text-sm font-medium">Inventory</span>
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 onClick={() => changePage("promotions")}
//                 className="flex flex-col items-center justify-center p-3 rounded-lg bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 hover:shadow-md transition-all"
//               >
//                 <Tag size={20} className="mb-1" />
//                 <span className="text-sm font-medium">Promotions</span>
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   )

//   // Render the selected page content
//   const renderContent = () => {
//     switch (currentPage) {
//       case "dashboard":
//         return renderDashboard()
//       case "products":
//         return <ProductDashboard />
//       case "employees":
//         return <EmployeeManagement />
//       case "dailySales":
//         return <DailySales />
//       case "stockTracking":
//         return <StockTracking />
//       case "billing":
//         return <Billing />
//       case "customers":
//         return <ViewCustomers />
//       case "salesChart":
//         return <SalesChart />
//       case "productSales":
//         return <ProductSales />
//       case "inventory":
//         return <InventoryDashboard />
//       case "restockAlerts":
//         return <ProductDashboard2 />
//       case "suppliers":
//         return <SupplierManagement />
//       // New pages would be implemented here
//       case "schedule":
//       case "performance":
//       case "feedback":
//       case "loyalty":
//       case "promotions":
//       case "dailyReport":
//       case "inventoryReport":
//       case "salesReport":
//       case "tasks":
//         return (
//           <div className="flex items-center justify-center h-64 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
//             <div className="text-center">
//               <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
//                 {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} Feature
//               </h2>
//               <p className="text-gray-600 dark:text-gray-300">This feature is coming soon.</p>
//             </div>
//           </div>
//         )
//       default:
//         return renderDashboard()
//     }
//   }

//   return (
//     <div className={`min-h-screen ${darkMode ? "dark" : ""} bg-gray-50 dark:bg-gray-900 flex`}>
//       {/* Mobile overlay for sidebar */}
//       {sidebarOpen && (
//         <div className="fixed inset-0 bg-black/50 md:hidden z-20" onClick={() => setSidebarOpen(false)} />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`fixed md:static inset-y-0 left-0 w-72 bg-white dark:bg-gray-800 shadow-lg
//           transform transition-transform duration-300 ease-in-out z-30 overflow-hidden
//           ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
//       >
//         <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-700">
//           <div className="flex items-center space-x-2">
//             <div className="h-8 w-8 rounded-md bg-gradient-to-br from-teal-600 to-emerald-500 flex items-center justify-center text-white font-bold">
//               M
//             </div>
//             <h1 className="text-xl font-bold text-gray-800 dark:text-white truncate">{storeName || "Store Manager"}</h1>
//           </div>
//           <button
//             onClick={() => setSidebarOpen(false)}
//             className="md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         <div className="p-4">
//           <div className="flex items-center space-x-3 mb-6 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
//             <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-bold">
//               M
//             </div>
//             <div>
//               <div className="font-medium text-gray-800 dark:text-white">Manager User</div>
//               <div className="text-sm text-gray-500 dark:text-gray-400">Store Manager</div>
//             </div>
//           </div>

//           {/* Search box */}
//           <div className="relative mb-6">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <Search size={16} className="text-gray-400" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:text-white text-sm"
//             />
//           </div>

//           <nav>
//             <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 pl-4">
//               Main
//             </div>
//             <ul className="space-y-1 mb-6">
//               {navigationMenu.map((item) => (
//                 <li key={item.id}>
//                   {item.submenu ? (
//                     <div>
//                       <button
//                         onClick={() => toggleMenu(item.id)}
//                         className={`flex items-center justify-between w-full p-3 rounded-lg 
//                           ${expandedMenus[item.id] ? "bg-gray-100 dark:bg-gray-700" : "hover:bg-gray-100 dark:hover:bg-gray-700"} 
//                           transition-colors duration-200`}
//                       >
//                         <div className="flex items-center">
//                           <div
//                             className={`mr-3 ${
//                               currentPage === item.id || item.submenu?.some((sub) => sub.id === currentPage)
//                                 ? "text-teal-600 dark:text-teal-400"
//                                 : "text-gray-500 dark:text-gray-400"
//                             }`}
//                           >
//                             {item.icon}
//                           </div>
//                           <span
//                             className={`font-medium ${
//                               currentPage === item.id || item.submenu?.some((sub) => sub.id === currentPage)
//                                 ? "text-teal-600 dark:text-teal-400"
//                                 : "text-gray-700 dark:text-gray-300"
//                             }`}
//                           >
//                             {item.label}
//                           </span>
//                         </div>
//                         {expandedMenus[item.id] ? (
//                           <ChevronDown size={18} className="text-gray-400" />
//                         ) : (
//                           <ChevronRight size={18} className="text-gray-400" />
//                         )}
//                       </button>

//                       {expandedMenus[item.id] && (
//                         <motion.ul
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           exit={{ opacity: 0, height: 0 }}
//                           transition={{ duration: 0.2 }}
//                           className="pl-10 pt-1 pb-1 space-y-1"
//                         >
//                           {item.submenu.map((subItem) => (
//                             <li key={subItem.id}>
//                               <button
//                                 onClick={subItem.onClick}
//                                 className={`p-2 rounded-md text-sm w-full text-left transition-colors duration-200
//                                   ${
//                                     currentPage === subItem.id
//                                       ? "bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400 font-medium"
//                                       : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-300"
//                                   }`}
//                               >
//                                 {subItem.label}
//                               </button>
//                             </li>
//                           ))}
//                         </motion.ul>
//                       )}
//                     </div>
//                   ) : (
//                     <button
//                       onClick={item.onClick}
//                       className={`flex items-center w-full p-3 rounded-lg transition-colors duration-200
//                         ${
//                           currentPage === item.id
//                             ? "bg-teal-50 dark:bg-teal-900/30"
//                             : "hover:bg-gray-100 dark:hover:bg-gray-700"
//                         }`}
//                     >
//                       <div
//                         className={`mr-3 ${
//                           currentPage === item.id
//                             ? "text-teal-600 dark:text-teal-400"
//                             : "text-gray-500 dark:text-gray-400"
//                         }`}
//                       >
//                         {item.icon}
//                       </div>
//                       <span
//                         className={`font-medium ${
//                           currentPage === item.id
//                             ? "text-teal-600 dark:text-teal-400"
//                             : "text-gray-700 dark:text-gray-300"
//                         }`}
//                       >
//                         {item.label}
//                       </span>
//                     </button>
//                   )}
//                 </li>
//               ))}
//             </ul>

//             <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 pl-4">
//               Support
//             </div>
//             <ul className="space-y-1">
//               <li>
//                 <button className="flex items-center w-full p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
//                   <HelpCircle size={20} className="mr-3 text-gray-500 dark:text-gray-400" />
//                   <span className="font-medium">Help Center</span>
//                 </button>
//               </li>
//               <li>
//                 <button className="flex items-center w-full p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
//                   <MessageSquare size={20} className="mr-3 text-gray-500 dark:text-gray-400" />
//                   <span className="font-medium">Contact Admin</span>
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </div>

//         {/* Bottom section */}
//         <div className="absolute bottom-0 left-0 right-0 p-4">
//           <div className="bg-teal-50 dark:bg-teal-900/30 rounded-lg p-4">
//             <div className="flex items-center mb-3">
//               <Coffee size={18} className="text-teal-600 dark:text-teal-400 mr-2" />
//               <h4 className="font-medium text-teal-600 dark:text-teal-400">Manager Tips</h4>
//             </div>
//             <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
//               Check the daily report for insights on store performance and staff productivity.
//             </p>
//             <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
//               View Report
//             </button>
//           </div>
//         </div>
//       </aside>

//       {/* Mobile menu button */}
//       <button
//         onClick={() => setSidebarOpen(true)}
//         className={`md:hidden fixed top-4 left-4 z-10 p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300
//           shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200
//           ${sidebarOpen ? "hidden" : "block"}`}
//       >
//         <Menu size={24} />
//       </button>

//       {/* Main content */}
//       <main className="flex-1 overflow-auto">
//         {/* Top header */}
//         <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
//           <div className="px-6 py-4 flex justify-between items-center">
//             <div className="flex items-center">
//               <h1 className="text-xl font-bold text-gray-800 dark:text-white">
//                 {currentPage === "dashboard"
//                   ? "Manager Dashboard"
//                   : currentPage === "products"
//                     ? "Products Management"
//                     : currentPage === "employees"
//                       ? "Employee Management"
//                       : currentPage === "dailySales"
//                         ? "Sales Dashboard"
//                         : currentPage === "stockTracking"
//                           ? "Stock Tracking"
//                           : currentPage === "suppliers"
//                             ? "Supplier Management"
//                             : currentPage === "schedule"
//                               ? "Staff Schedule"
//                               : currentPage === "tasks"
//                                 ? "Task Management"
//                                 : currentPage === "promotions"
//                                   ? "Promotions & Discounts"
//                                   : currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
//               </h1>
//             </div>

//             <div className="flex items-center space-x-4">
//               {/* Notifications */}
//               <div className="relative" ref={notificationRef}>
//                 <button
//                   onClick={() => setNotificationsOpen(!notificationsOpen)}
//                   className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative"
//                 >
//                   <Bell size={20} className="text-gray-600 dark:text-gray-400" />
//                   <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
//                     3
//                   </span>
//                 </button>

//                 <AnimatePresence>
//                   {notificationsOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.2 }}
//                       className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-40 border border-gray-200 dark:border-gray-700"
//                     >
//                       <div className="p-4">
//                         <div className="flex justify-between items-center mb-4">
//                           <h3 className="font-medium text-gray-800 dark:text-white">Notifications</h3>
//                           <button className="text-xs text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300">
//                             Mark all as read
//                           </button>
//                         </div>
//                         <div className="space-y-3">
//                           {notifications.map((notification) => (
//                             <div key={notification.id} className="flex items-start space-x-3">
//                               <div
//                                 className={`p-2 rounded-full ${
//                                   notification.type === "alert"
//                                     ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
//                                     : notification.type === "order"
//                                       ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
//                                       : notification.type === "reminder"
//                                         ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
//                                         : "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
//                                 }`}
//                               >
//                                 <Bell size={16} />
//                               </div>
//                               <div>
//                                 <div className="text-sm font-medium text-gray-800 dark:text-white">
//                                   {notification.title}
//                                 </div>
//                                 <div className="text-xs text-gray-500 dark:text-gray-400">{notification.message}</div>
//                                 <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{notification.time}</div>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                         <button className="w-full mt-4 text-center text-sm text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300">
//                           View all notifications
//                         </button>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Dark mode toggle */}
//               <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
//                 {darkMode ? (
//                   <svg
//                     className="w-5 h-5 text-gray-600 dark:text-gray-400"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     className="w-5 h-5 text-gray-600 dark:text-gray-400"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
//                     />
//                   </svg>
//                 )}
//               </button>

//               {/* User menu */}
//               <div className="relative" ref={userMenuRef}>
//                 <button
//                   onClick={() => setUserMenuOpen(!userMenuOpen)}
//                   className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
//                 >
//                   <div className="h-8 w-8 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-bold">
//                     M
//                   </div>
//                   <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300">Manager</span>
//                   <ChevronDown size={16} className="hidden md:block text-gray-500 dark:text-gray-400" />
//                 </button>

//                 <AnimatePresence>
//                   {userMenuOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.2 }}
//                       className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-40 border border-gray-200 dark:border-gray-700"
//                     >
//                       <div className="p-2">
//                         <button
//                           onClick={() => {
//                             setShowProfile(true)
//                             setUserMenuOpen(false)
//                           }}
//                           className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left flex items-center"
//                         >
//                           <User size={16} className="mr-2 text-gray-500 dark:text-gray-400" />
//                           Profile
//                         </button>
//                         <button
//                           onClick={toggleDarkMode}
//                           className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left flex items-center"
//                         >
//                           {darkMode ? (
//                             <>
//                               <svg
//                                 className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   strokeWidth={2}
//                                   d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
//                                 />
//                               </svg>
//                               Light Mode
//                             </>
//                           ) : (
//                             <>
//                               <svg
//                                 className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   strokeWidth={2}
//                                   d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
//                                 />
//                               </svg>
//                               Dark Mode
//                             </>
//                           )}
//                         </button>
//                         <button className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left flex items-center">
//                           <Settings size={16} className="mr-2 text-gray-500 dark:text-gray-400" />
//                           Settings
//                         </button>
//                         <div className="my-1 border-t border-gray-200 dark:border-gray-700"></div>
//                         <button
//                           onClick={() => navigate("/logout")}
//                           className="w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg text-left flex items-center"
//                         >
//                           <LogOut size={16} className="mr-2" />
//                           Logout
//                         </button>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Page content */}
//         <div className="p-6">
//           {loading ? (
//             <div className="flex items-center justify-center h-64">
//               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
//             </div>
//           ) : (
//             renderContent()
//           )}
//         </div>

//         {/* User Profile Modal */}
//         <AnimatePresence>
//           {showProfile && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4"
//             >
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-3xl overflow-hidden"
//               >
//                 <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
//                   <h2 className="text-xl font-bold text-gray-800 dark:text-white">User Profile</h2>
//                   <button
//                     onClick={() => setShowProfile(false)}
//                     className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
//                   >
//                     <X size={20} />
//                   </button>
//                 </div>
//                 <div className="p-6">
//                   <UserProfile />
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </main>
//     </div>
//   )
// }

// export default ManagerDashboard;

import { useState, useContext, useEffect, useRef } from "react"
import { StoreContext } from "./StoreContext"
import { useLocation, useNavigate } from "react-router-dom"
import {
  Menu,
  Package,
  Users,
  BarChart2,
  X,
  DollarSign,
  UserCheck,
  Search,
  Bell,
  LogOut,
  Truck,
  Layers,
  ChevronRight,
  ChevronDown,
  User,
  Calendar,
  Clock,
  ShoppingBag,
  AlertTriangle,
  FileText,
  HelpCircle,
  Settings,
  Tag,
  Activity,
  CheckSquare,
  Coffee,
  MessageSquare,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Import components
import ProductDashboard from "./ProductManagement"
import EmployeeManagement from "./EmployeeManagement"
import DailySales from "./DailySales"
import StockTracking from "./StockTracking"
import Billing from "./Billing"
import ViewCustomers from "./ViewCustomers"
import SalesChart from "./SalesChart"
import ProductSales from "./ProductSales"
import InventoryDashboard from "./InventoryDashboard"
import ProductDashboard2 from "./RestockAlerts"
import SupplierManagement from "./SupplierManagement"
import UserProfile from "./UserProfile"

const ManagerDashboard = () => {
  const { storeName } = useContext(StoreContext)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState("dashboard")
  const [expandedMenus, setExpandedMenus] = useState({
    products: false,
    employees: false,
    sales: false,
    customers: false,
    suppliers: false,
    reports: false,
  })
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(true)
  const [animateCharts, setAnimateCharts] = useState(false)

  const notificationRef = useRef(null)
  const userMenuRef = useRef(null)

  // Stats for dashboard
  const stats = [
    {
      title: "Total Sales Today",
      value: "$5,890",
      change: "+15%",
      up: true,
      icon: <DollarSign size={20} className="text-green-500" />,
    },
    {
      title: "Low Stock Items",
      value: "24",
      change: "+8",
      up: false,
      icon: <AlertTriangle size={20} className="text-amber-500" />,
    },
    {
      title: "Today's Orders",
      value: "42",
      change: "+12%",
      up: true,
      icon: <ShoppingBag size={20} className="text-blue-500" />,
    },
    {
      title: "Active Employees",
      value: "18",
      change: "0",
      up: true,
      icon: <Users size={20} className="text-purple-500" />,
    },
  ]

  // Recent transactions for dashboard
  const recentTransactions = [
    {
      id: "#TRX-4589",
      customer: "John Smith",
      amount: "$129.50",
      date: "20 min ago",
      status: "completed",
      paymentMethod: "Credit Card",
    },
    {
      id: "#TRX-4588",
      customer: "Lisa Wong",
      amount: "$245.75",
      date: "45 min ago",
      status: "completed",
      paymentMethod: "PayPal",
    },
    {
      id: "#TRX-4587",
      customer: "Mike Johnson",
      amount: "$67.25",
      date: "1 hr ago",
      status: "pending",
      paymentMethod: "Credit Card",
    },
    {
      id: "#TRX-4586",
      customer: "Sara Miller",
      amount: "$352.00",
      date: "2 hrs ago",
      status: "completed",
      paymentMethod: "Bank Transfer",
    },
  ]

  // Low stock items
  const lowStockItems = [
    { id: "P-1245", name: "Premium Coffee Beans", current: 12, min: 20, reorderStatus: "urgent" },
    { id: "P-2340", name: "Organic Green Tea", current: 8, min: 15, reorderStatus: "pending" },
    { id: "P-1023", name: "Vitamin C Tablets", current: 5, min: 10, reorderStatus: "ordered" },
    { id: "P-3456", name: "Almond Milk", current: 9, min: 12, reorderStatus: "urgent" },
  ]

  // Notifications
  const notifications = [
    {
      id: 1,
      title: "Low stock alert",
      message: "4 products need reordering",
      time: "10 min ago",
      read: false,
      type: "alert",
    },
    {
      id: 2,
      title: "New order received",
      message: "Order #12458 from John D.",
      time: "25 min ago",
      read: false,
      type: "order",
    },
    {
      id: 3,
      title: "Staff meeting",
      message: "Reminder: Meeting at 3 PM",
      time: "2 hours ago",
      read: true,
      type: "reminder",
    },
    {
      id: 4,
      title: "System update",
      message: "Maintenance scheduled for tonight",
      time: "1 day ago",
      read: true,
      type: "system",
    },
  ]

  // Staff schedule for today
  const staffSchedule = [
    { name: "Sarah Johnson", position: "Cashier", shift: "8:00 AM - 4:00 PM", status: "on-duty" },
    { name: "Michael Chen", position: "Sales Associate", shift: "10:00 AM - 6:00 PM", status: "on-duty" },
    { name: "Emily Rodriguez", position: "Inventory Specialist", shift: "9:00 AM - 5:00 PM", status: "on-duty" },
    { name: "David Kim", position: "Cashier", shift: "4:00 PM - 10:00 PM", status: "upcoming" },
    { name: "Jessica Taylor", position: "Sales Associate", shift: "2:00 PM - 10:00 PM", status: "upcoming" },
  ]

  // Tasks for today
  const todaysTasks = [
    { id: 1, title: "Review inventory report", priority: "high", completed: false },
    { id: 2, title: "Staff meeting at 10:00 AM", priority: "medium", completed: true },
    { id: 3, title: "Process supplier invoices", priority: "high", completed: false },
    { id: 4, title: "Train new cashier", priority: "medium", completed: false },
    { id: 5, title: "Update product prices", priority: "low", completed: true },
  ]

  // Navigation menu structure
  const navigationMenu = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <BarChart2 size={20} />,
      onClick: () => changePage("dashboard"),
    },
    {
      id: "products",
      label: "Products",
      icon: <Package size={20} />,
      submenu: [
        { id: "products", label: "All Products", onClick: () => changePage("products") },
        { id: "inventory", label: "Inventory", onClick: () => changePage("inventory") },
        { id: "restockAlerts", label: "Restock Alerts", onClick: () => changePage("restockAlerts") },
        { id: "promotions", label: "Promotions", onClick: () => changePage("promotions") },
      ],
    },
    {
      id: "employees",
      label: "Employees",
      icon: <Users size={20} />,
      submenu: [
        { id: "employees", label: "Manage Employees", onClick: () => changePage("employees") },
        { id: "schedule", label: "Staff Schedule", onClick: () => changePage("schedule") },
        { id: "performance", label: "Performance", onClick: () => changePage("performance") },
      ],
    },
    {
      id: "sales",
      label: "Sales",
      icon: <DollarSign size={20} />,
      submenu: [
        { id: "dailySales", label: "Daily Sales", onClick: () => changePage("dailySales") },
        { id: "salesChart", label: "Sales Reports", onClick: () => changePage("salesChart") },
        { id: "productSales", label: "Product Sales", onClick: () => changePage("productSales") },
        { id: "billing", label: "Billing", onClick: () => changePage("billing") },
      ],
    },
    {
      id: "customers",
      label: "Customers",
      icon: <UserCheck size={20} />,
      submenu: [
        { id: "customers", label: "View Customers", onClick: () => changePage("customers") },
        { id: "feedback", label: "Customer Feedback", onClick: () => changePage("feedback") },
        { id: "loyalty", label: "Loyalty Program", onClick: () => changePage("loyalty") },
      ],
    },
    {
      id: "suppliers",
      label: "Suppliers",
      icon: <Truck size={20} />,
      onClick: () => changePage("suppliers"),
    },
    {
      id: "stockTracking",
      label: "Stock Tracking",
      icon: <Layers size={20} />,
      onClick: () => changePage("stockTracking"),
    },
    {
      id: "reports",
      label: "Reports",
      icon: <FileText size={20} />,
      submenu: [
        { id: "dailyReport", label: "Daily Report", onClick: () => changePage("dailyReport") },
        { id: "inventoryReport", label: "Inventory Report", onClick: () => changePage("inventoryReport") },
        { id: "salesReport", label: "Sales Report", onClick: () => changePage("salesReport") },
      ],
    },
    {
      id: "tasks",
      label: "Tasks",
      icon: <CheckSquare size={20} />,
      onClick: () => changePage("tasks"),
    },
  ]

  // Page loading simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      setTimeout(() => setAnimateCharts(true), 500)
    }, 800)
    return () => clearTimeout(timer)
  }, [currentPage])

  // Toggle sidebar on mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false)
    }
  }, [location])

  // Resize handling
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle clicks outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationsOpen(false)
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Add CSS for custom scrollbar
  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      /* Custom scrollbar styles */
      ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      ::-webkit-scrollbar-thumb {
        background: rgba(156, 163, 175, 0.5);
        border-radius: 3px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(156, 163, 175, 0.8);
      }
      /* For Firefox */
      * {
        scrollbar-width: thin;
        scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  // Toggle submenu expandable sections
  const toggleMenu = (menu) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }))
  }

  // Change current page based on menu click
  const changePage = (page) => {
    setCurrentPage(page)
    setLoading(true) // Show loading state when changing pages
    if (window.innerWidth < 768) {
      setSidebarOpen(false)
    }
  }

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  // Render main dashboard content
  const renderDashboard = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
      {/* Welcome section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white transition-colors">
          Welcome to {storeName || "Your Store"}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
          Here's what's happening with your store today
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -4, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors">{stat.title}</div>
              <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700 transition-colors">{stat.icon}</div>
            </div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">{stat.value}</div>
            <div
              className={`text-sm mt-2 flex items-center ${stat.up ? "text-green-600 dark:text-green-500" : "text-red-600 dark:text-red-500"} transition-colors`}
            >
              {stat.change}
              {stat.up ? (
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
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
                onClick={() => changePage("dailySales")}
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
                    <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
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
                      <td className="py-4 px-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                        {transaction.id}
                      </td>
                      <td className="py-4 px-3 text-sm text-gray-700 dark:text-gray-300">{transaction.customer}</td>
                      <td className="py-4 px-3 text-sm font-medium text-gray-900 dark:text-white">
                        {transaction.amount}
                      </td>
                      <td className="py-4 px-3 text-sm text-gray-500 dark:text-gray-400">{transaction.date}</td>
                      <td className="py-4 px-3 text-sm">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            transaction.status === "completed"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : transaction.status === "pending"
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                          }`}
                        >
                          {transaction.status === "completed" && (
                            <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-green-600 dark:bg-green-400"></span>
                          )}
                          {transaction.status === "pending" && (
                            <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-yellow-600 dark:bg-yellow-400"></span>
                          )}
                          {transaction.status === "failed" && (
                            <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-red-600 dark:bg-red-400"></span>
                          )}
                          {transaction.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Staff Schedule */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
                <Clock size={18} className="mr-2 text-purple-600 dark:text-purple-400" />
                Today's Staff Schedule
              </h3>
              <button
                onClick={() => changePage("schedule")}
                className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors flex items-center"
              >
                Full Schedule
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Employee
                    </th>
                    <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Position
                    </th>
                    <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Shift
                    </th>
                    <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {staffSchedule.map((staff, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                      className="border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                    >
                      <td className="py-4 px-3 text-sm font-medium text-gray-700 dark:text-gray-300">{staff.name}</td>
                      <td className="py-4 px-3 text-sm text-gray-700 dark:text-gray-300">{staff.position}</td>
                      <td className="py-4 px-3 text-sm text-gray-700 dark:text-gray-300">{staff.shift}</td>
                      <td className="py-4 px-3 text-sm">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            staff.status === "on-duty"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          }`}
                        >
                          {staff.status === "on-duty" ? "On Duty" : "Upcoming"}
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
          {/* Tasks */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
                <CheckSquare size={18} className="mr-2 text-teal-600 dark:text-teal-400" />
                Today's Tasks
              </h3>
              <button
                onClick={() => changePage("tasks")}
                className="text-sm text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors"
              >
                All Tasks
              </button>
            </div>

            <div className="space-y-3">
              {todaysTasks.map((task, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-750 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center">
                    <div
                      className={`flex-shrink-0 h-5 w-5 rounded-full mr-3 ${
                        task.completed
                          ? "bg-green-500 dark:bg-green-600"
                          : task.priority === "high"
                            ? "bg-red-500 dark:bg-red-600"
                            : task.priority === "medium"
                              ? "bg-yellow-500 dark:bg-yellow-600"
                              : "bg-blue-500 dark:bg-blue-600"
                      }`}
                    ></div>
                    <span
                      className={`text-sm ${task.completed ? "line-through text-gray-500 dark:text-gray-400" : "text-gray-800 dark:text-white"}`}
                    >
                      {task.title}
                    </span>
                  </div>
                  <div>
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      {task.completed ? (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4">
              <button
                onClick={() => changePage("tasks")}
                className="flex items-center justify-center p-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors text-sm w-full"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add New Task
              </button>
            </div>
          </div>

          {/* Low Stock Alert */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-800 dark:text-white transition-colors flex items-center">
                <AlertTriangle size={18} className="mr-2 text-red-500" />
                Low Stock Alert
              </h3>
              <button
                onClick={() => changePage("restockAlerts")}
                className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                All Alerts
              </button>
            </div>

            <div className="space-y-3">
              {lowStockItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-750 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                >
                  <div className="flex items-start space-x-3">
                    <div
                      className={`mt-0.5 p-1.5 rounded-md ${
                        item.reorderStatus === "urgent"
                          ? "bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400"
                          : item.reorderStatus === "pending"
                            ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-400"
                            : "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400"
                      }`}
                    >
                      <Layers size={16} />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">SKU: {item.id}</div>
                    </div>
                  </div>
                  <div
                    className={`text-sm font-medium ${
                      (item.current / item.min) < 0.5
                        ? "text-red-600 dark:text-red-400"
                        : item.current / item.min < 0.75
                          ? "text-yellow-600 dark:text-yellow-400"
                          : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {item.current}/{item.min}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => changePage("suppliers")}
                className="flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all text-sm w-full shadow-sm hover:shadow"
              >
                <Truck size={16} className="mr-2" />
                Place Restock Order
              </motion.button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="font-medium text-gray-800 dark:text-white transition-colors mb-4 flex items-center">
              <Activity size={18} className="mr-2 text-indigo-600 dark:text-indigo-400" />
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => changePage("dailySales")}
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 hover:shadow-md transition-all"
              >
                <DollarSign size={20} className="mb-1" />
                <span className="text-sm font-medium">View Sales</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => changePage("schedule")}
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 hover:shadow-md transition-all"
              >
                <Calendar size={20} className="mb-1" />
                <span className="text-sm font-medium">Schedule</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => changePage("inventory")}
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400 hover:shadow-md transition-all"
              >
                <Package size={20} className="mb-1" />
                <span className="text-sm font-medium">Inventory</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => changePage("promotions")}
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 hover:shadow-md transition-all"
              >
                <Tag size={20} className="mb-1" />
                <span className="text-sm font-medium">Promotions</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )

  // Render the selected page content
  const renderContent = () => {
    switch (currentPage) {
      case "dashboard":
        return renderDashboard()
      case "products":
        return <ProductDashboard />
      case "employees":
        return <EmployeeManagement />
      case "dailySales":
        return <DailySales />
      case "stockTracking":
        return <StockTracking />
      case "billing":
        return <Billing />
      case "customers":
        return <ViewCustomers />
      case "salesChart":
        return <SalesChart />
      case "productSales":
        return <ProductSales />
      case "inventory":
        return <InventoryDashboard />
      case "restockAlerts":
        return <ProductDashboard2 />
      case "suppliers":
        return <SupplierManagement />
      // New pages would be implemented here
      case "schedule":
      case "performance":
      case "feedback":
      case "loyalty":
      case "promotions":
      case "dailyReport":
      case "inventoryReport":
      case "salesReport":
      case "tasks":
        return (
          <div className="flex items-center justify-center h-64 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} Feature
              </h2>
              <p className="text-gray-600 dark:text-gray-300">This feature is coming soon.</p>
            </div>
          </div>
        )
      default:
        return renderDashboard()
    }
  }

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""} bg-gray-50 dark:bg-gray-900 flex`}>
      {/* Mobile overlay for sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 md:hidden z-20" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-72 bg-white dark:bg-gray-800 shadow-lg
          transform transition-transform duration-300 ease-in-out z-30 overflow-y-auto
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800 z-10">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-teal-600 to-emerald-500 flex items-center justify-center text-white font-bold">
              M
            </div>
            <h1 className="text-xl font-bold text-gray-800 dark:text-white truncate">{storeName || "Store Manager"}</h1>
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
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-bold">
              M
            </div>
            <div>
              <div className="font-medium text-gray-800 dark:text-white">Manager User</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Store Manager</div>
            </div>
          </div>

          {/* Search box */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:text-white text-sm"
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
                          ${expandedMenus[item.id] ? "bg-gray-100 dark:bg-gray-700" : "hover:bg-gray-100 dark:hover:bg-gray-700"} 
                          transition-colors duration-200`}
                      >
                        <div className="flex items-center">
                          <div
                            className={`mr-3 ${
                              currentPage === item.id || item.submenu?.some((sub) => sub.id === currentPage)
                                ? "text-teal-600 dark:text-teal-400"
                                : "text-gray-500 dark:text-gray-400"
                            }`}
                          >
                            {item.icon}
                          </div>
                          <span
                            className={`font-medium ${
                              currentPage === item.id || item.submenu?.some((sub) => sub.id === currentPage)
                                ? "text-teal-600 dark:text-teal-400"
                                : "text-gray-700 dark:text-gray-300"
                            }`}
                          >
                            {item.label}
                          </span>
                        </div>
                        {expandedMenus[item.id] ? (
                          <ChevronDown size={18} className="text-gray-400" />
                        ) : (
                          <ChevronRight size={18} className="text-gray-400" />
                        )}
                      </button>

                      {expandedMenus[item.id] && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-10 pt-1 pb-1 space-y-1"
                        >
                          {item.submenu.map((subItem) => (
                            <li key={subItem.id}>
                              <button
                                onClick={subItem.onClick}
                                className={`p-2 rounded-md text-sm w-full text-left transition-colors duration-200
                                  ${
                                    currentPage === subItem.id
                                      ? "bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400 font-medium"
                                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-300"
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
                        ${
                          currentPage === item.id
                            ? "bg-teal-50 dark:bg-teal-900/30"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                    >
                      <div
                        className={`mr-3 ${
                          currentPage === item.id
                            ? "text-teal-600 dark:text-teal-400"
                            : "text-gray-500 dark:text-gray-400"
                        }`}
                      >
                        {item.icon}
                      </div>
                      <span
                        className={`font-medium ${
                          currentPage === item.id
                            ? "text-teal-600 dark:text-teal-400"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
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
                  <span className="font-medium">Contact Admin</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom section */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="bg-teal-50 dark:bg-teal-900/30 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <Coffee size={18} className="text-teal-600 dark:text-teal-400 mr-2" />
              <h4 className="font-medium text-teal-600 dark:text-teal-400">Manager Tips</h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Check the daily report for insights on store performance and staff productivity.
            </p>
            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
              View Report
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className={`md:hidden fixed top-4 left-4 z-10 p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300
          shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200
          ${sidebarOpen ? "hidden" : "block"}`}
      >
        <Menu size={24} />
      </button>

      {/* Main content */}
      <main className="flex-1 overflow-auto ml-0 md:ml-72">
        {/* Top header */}
        <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 fixed top-0 right-0 left-0 md:left-72 z-20">
          <div className="px-6 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                {currentPage === "dashboard"
                  ? "Manager Dashboard"
                  : currentPage === "products"
                    ? "Products Management"
                    : currentPage === "employees"
                      ? "Employee Management"
                      : currentPage === "dailySales"
                        ? "Sales Dashboard"
                        : currentPage === "stockTracking"
                          ? "Stock Tracking"
                          : currentPage === "suppliers"
                            ? "Supplier Management"
                            : currentPage === "schedule"
                              ? "Staff Schedule"
                              : currentPage === "tasks"
                                ? "Task Management"
                                : currentPage === "promotions"
                                  ? "Promotions & Discounts"
                                  : currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
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
                          <button className="text-xs text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300">
                            Mark all as read
                          </button>
                        </div>
                        <div className="space-y-3">
                          {notifications.map((notification) => (
                            <div key={notification.id} className="flex items-start space-x-3">
                              <div
                                className={`p-2 rounded-full ${
                                  notification.type === "alert"
                                    ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                                    : notification.type === "order"
                                      ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                                      : notification.type === "reminder"
                                        ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
                                        : "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                                }`}
                              >
                                <Bell size={16} />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-800 dark:text-white">
                                  {notification.title}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{notification.message}</div>
                                <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{notification.time}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <button className="w-full mt-4 text-center text-sm text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300">
                          View all notifications
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Dark mode toggle */}
              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                {darkMode ? (
                  <svg
                    className="w-5 h-5 text-gray-600 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-gray-600 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>

              {/* User menu */}
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300">Manager</span>
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
                            setShowProfile(true)
                            setUserMenuOpen(false)
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
                              <svg
                                className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                              </svg>
                              Light Mode
                            </>
                          ) : (
                            <>
                              <svg
                                className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                              </svg>
                              Dark Mode
                            </>
                          )}
                        </button>
                        <button className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-left flex items-center">
                          <Settings size={16} className="mr-2 text-gray-500 dark:text-gray-400" />
                          Settings
                        </button>
                        <div className="my-1 border-t border-gray-200 dark:border-gray-700"></div>
                        <button
                          onClick={() => navigate("/logout")}
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
        <div className="p-6 mt-16">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
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
      </main>
    </div>
  )
}

export default ManagerDashboard

