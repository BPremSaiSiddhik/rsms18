// // // // import React, { useContext, useState } from "react";
// // // // import { StoreContext } from "./StoreContext"; 
// // // // import { Routes, Route, Link } from "react-router-dom";
// // // // import ProductDashboard from "./ProductManagement";
// // // // import AboutPage from "./AboutPage";
// // // // import ContactUs from "./ContactUs";

// // // // const Inter = () => {
// // // //   const { storeName } = useContext(StoreContext);
// // // //   const [sidebarOpen, setSidebarOpen] = useState(false);

// // // //   return (
// // // //     <div className="flex min-h-screen bg-gray-100">
// // // //       <button className="md:hidden fixed top-4 left-4 bg-blue-800 text-white p-2 rounded shadow" onClick={() => setSidebarOpen(!sidebarOpen)}>
// // // //         ☰
// // // //       </button>
// // // //       <div className={`fixed top-0 left-0 w-64 h-full bg-gradient-to-br from-blue-800 to-blue-600 text-white p-5 transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
// // // //         <div className="text-xl font-bold text-center uppercase border-b-2 border-white mb-5">{storeName || "Loading..."}</div>
// // // //         <ul className="space-y-4">
// // // //           <li>
// // // //             <Link to="/Inter/ProductManagement" className="flex items-center gap-2 p-2 rounded hover:bg-white hover:bg-opacity-20 transition">
// // // //               <i className="fas fa-box"></i> Products
// // // //             </Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/Inter/AboutPage" className="flex items-center gap-2 p-2 rounded hover:bg-white hover:bg-opacity-20 transition">
// // // //               <i className="fas fa-info-circle"></i> About
// // // //             </Link>
// // // //           </li>
// // // //         </ul>
// // // //       </div>
// // // //       <div className={`flex-grow p-6 ml-64 transition-all duration-300 ${sidebarOpen ? "ml-64" : ""}`}>
// // // //         <Routes>
// // // //           <Route path="/" element={<ContactUs />} />
// // // //           <Route path="/ProductManagement" element={<ProductDashboard />} />
// // // //           <Route path="/AboutPage" element={<AboutPage />} />
// // // //         </Routes>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Inter;

// // // import React, { useContext, useState, useEffect } from "react";
// // // import { StoreContext } from "./StoreContext";
// // // import { Routes, Route, Link, useLocation } from "react-router-dom";
// // // import ProductDashboard from "./ProductManagement";
// // // import AboutPage from "./AboutPage";
// // // import ContactUs from "./ContactUs";
// // // import { Menu, Package, Info, X } from 'lucide-react';
// // // import EmployeeManagement from "./EmployeeManagement";
// // // import RoleDistribution from "./RoleDistribution";
// // // import DailySales from "./DailySales";
// // // import EmployeeSearch from "./EmployeeSearch";
// // // import Billing from "./Billing";
// // // import CustomerSignupForm from "./CustomerSignUpForm";
// // // import ViewCustomers from "./ViewCustomers";
// // // import StockTracking from "./StockTracking";
// // // import SalesChart from "./SalesChart";
// // // import ProductSales from "./ProductSales";
// // // import InventoryDashboard from "./InventoryDashboard";
// // // import UserManagementPage from "./UserManagement";
// // // import ProductDashboard2 from "./RestockAlerts";
// // // import SupplierManagement from "./SupplierManagement";
// // // import SupplierManagement2 from "./SupplierManagement2";
// // // import SupplierManagement3 from "./SupplierManagement3";

// // // const Inter = () => {
// // //   const { storeName } = useContext(StoreContext);
// // //   const [sidebarOpen, setSidebarOpen] = useState(true);
// // //   const location = useLocation();

// // //   // Close sidebar on mobile when route changes
// // //   useEffect(() => {
// // //     if (window.innerWidth < 768) {
// // //       setSidebarOpen(false);
// // //     }
// // //   }, [location]);

// // //   // Handle window resize
// // //   useEffect(() => {
// // //     const handleResize = () => {
// // //       if (window.innerWidth >= 768) {
// // //         setSidebarOpen(true);
// // //       }
// // //     };

// // //     window.addEventListener('resize', handleResize);
// // //     handleResize(); // Initial check
// // //     return () => window.removeEventListener('resize', handleResize);
// // //   }, []);

// // //   const NavLink = ({ to, icon, children }) => {
// // //     const isActive = location.pathname.includes(to);
// // //     return (
// // //       <Link
// // //         to={to}
// // //         className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
// // //           ${isActive 
// // //             ? 'bg-white text-blue-800 shadow-md' 
// // //             : 'text-white hover:bg-white/10'
// // //           }`}
// // //       >
// // //         {icon}
// // //         <span className="font-medium">{children}</span>
// // //       </Link>
// // //     );
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 flex">
// // //       {/* Overlay for mobile */}
// // //       {sidebarOpen && (
// // //         <div 
// // //           className="fixed inset-0 bg-black/50 md:hidden z-20"
// // //           onClick={() => setSidebarOpen(false)}
// // //         />
// // //       )}

// // //       {/* Sidebar */}
// // //       <aside
// // //         className={`fixed md:static inset-y-0 left-0 w-64 bg-gradient-to-br from-blue-800 to-blue-600 
// // //           transform transition-transform duration-300 ease-in-out z-30
// // //           ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
// // //       >
// // //         {/* Sidebar Header */}
// // //         <div className="h-16 flex items-center justify-between px-4 border-b border-white/20">
// // //           <h1 className="text-xl font-bold text-white truncate">
// // //             {storeName || "Loading..."}
// // //           </h1>
// // //           <button 
// // //             onClick={() => setSidebarOpen(false)}
// // //             className="md:hidden text-white hover:text-gray-200"
// // //           >
// // //             <X size={24} />
// // //           </button>
// // //         </div>

// // //         {/* Sidebar Navigation */}
// // //         <nav className="p-4 space-y-2">
// // //           <NavLink to="/Inter/ProductManagement" icon={<Package size={20} />}>
// // //             Products
// // //           </NavLink>
// // //           <NavLink to="/Inter/EmployeeManagement" icon={<Info size={20} />}>
// // //             Employees
// // //           </NavLink>
// // //           <NavLink to="/Inter/RoleDistribution" icon={<Info size={20} />}>
// // //            Roles
// // //           </NavLink>
// // //           <NavLink to="/Inter/DailySales" icon={<Info size={20} />}>
// // //             Sales
// // //           </NavLink>
// // //           <NavLink to="/Inter/StockTracking" icon={<Info size={20} />}>
// // //             StockTracking
// // //           </NavLink>
// // //           <NavLink to="/Inter/EmployeeSearch" icon={<Info size={20} />}>
// // //             EmployeeSearch
// // //           </NavLink>
// // //           <NavLink to="/Inter/BIlling" icon={<Info size={20} />}>
// // //             Billing
// // //           </NavLink>
// // //           <NavLink to="/Inter/CustomerSignUpForm" icon={<Info size={20} />}>
// // //          Customer SignUp
// // //           </NavLink>
// // //           <NavLink to="/Inter/ViewCustomers" icon={<Info size={20} />}>
// // //          Customers
// // //           </NavLink>
// // //           <NavLink to="/Inter/SalesChart" icon={<Info size={20} />}>
// // //          SalesCHart
// // //           </NavLink>
// // //           <NavLink to="/Inter/ProductSales" icon={<Info size={20} />}>
// // //          ProductSales
// // //           </NavLink>
// // //           <NavLink to="/Inter/InventoryDashboard" icon={<Info size={20} />}>
// // //         Inventory
// // //           </NavLink>
// // //           <NavLink to="/Inter/UserManagement" icon={<Info size={20} />}>
// // //         uSERS
// // //           </NavLink>
// // //           <NavLink to="/Inter/RestockAlerts" icon={<Info size={20} />}>
// // //         RestockAlerts
// // //           </NavLink>
// // //           <NavLink to="/Inter/SupplierManagement" icon={<Info size={20} />}>
// // //         Suppliers
// // //           </NavLink>
// // //           <NavLink to="/Inter/SupplierManagement2" icon={<Info size={20} />}>
// // //         Suppliers
// // //           </NavLink>
// // //           <NavLink to="/Inter/SupplierManagement3" icon={<Info size={20} />}>
// // //         Suppliers
// // //           </NavLink> 
// // //         </nav>
// // //       </aside>

// // //       {/* Mobile Toggle Button */}
// // //       <button
// // //         onClick={() => setSidebarOpen(true)}
// // //         className={`md:hidden fixed top-4 left-4 z-10 p-2 rounded-lg bg-blue-800 text-white 
// // //           shadow-lg hover:bg-blue-700 transition-colors duration-200
// // //           ${sidebarOpen ? 'hidden' : 'block'}`}
// // //       >
// // //         <Menu size={24} />
// // //       </button>

// // //       {/* Main Content */}
// // //       <main className={`flex-1 transition-all duration-300 p-6
// // //         ${sidebarOpen ? 'md:ml-0' : 'md:ml-0'}`}
// // //       >
// // //         <div className="max-w-7xl mx-auto">
// // //           <Routes>
// // //             <Route path="/" element={<ContactUs />} />
// // //             <Route path="/ProductManagement" element={<ProductDashboard />} />
// // //             <Route path="/Billing" element={<Billing />} />

// // //             <Route path="/EmployeeManagement" element={<EmployeeManagement />} />
// // //             <Route path="/RoleDistribution" element={<RoleDistribution />} />
// // //             <Route path="/DailySales" element={<DailySales />} />
// // //             <Route path="/EmployeeSearch" element={<EmployeeSearch />} />
// // //             <Route path="/CustomerSignUpForm" element={<CustomerSignupForm />} />

// // //             <Route path="/ViewCustomers" element={<ViewCustomers/>} />
// // //             <Route path="/StockTracking" element={<StockTracking/>} />
// // //             <Route path="/SalesChart" element={<SalesChart/>} />

// // //             <Route path="/ProductSales" element={<ProductSales/>} />
// // //             <Route path="/InventoryDashboard" element={<InventoryDashboard/>} />

// // //             <Route path="/UserManagement" element={<UserManagementPage/>} />
// // //             <Route path="/RestockAlerts" element={<ProductDashboard2/>} />
// // //             <Route path="/RestockAlerts" element={<ProductDashboard2/>} />
// // //             <Route path="/SupplierManagement" element={<SupplierManagement/>} />
// // //             <Route path="/SupplierManagement2" element={<SupplierManagement2/>} />
// // //              <Route path="/SupplierManagement3" element={<SupplierManagement3/>} /> 

// // //           </Routes>
// // //         </div>
// // //       </main>
// // //     </div>
// // //   );
// // // };

// // // export default Inter;



// // import React, { useContext, useState, useEffect } from "react";
// // import { StoreContext } from "./StoreContext";
// // import { Routes, Route, Link, useLocation } from "react-router-dom";
// // import ProductDashboard from "./ProductManagement";
// // import AboutPage from "./AboutPage";
// // import ContactUs from "./ContactUs";
// // import { Menu, Package, Info, X } from 'lucide-react';
// // import EmployeeManagement from "./EmployeeManagement";
// // import RoleDistribution from "./RoleDistribution";
// // import DailySales from "./DailySales";
// // import EmployeeSearch from "./EmployeeSearch";
// // import Billing from "./Billing";
// // import CustomerSignupForm from "./CustomerSignUpForm";
// // import ViewCustomers from "./ViewCustomers";
// // import StockTracking from "./StockTracking";
// // import SalesChart from "./SalesChart";
// // import ProductSales from "./ProductSales";
// // import InventoryDashboard from "./InventoryDashboard";
// // import UserManagementPage from "./UserManagement";
// // import ProductDashboard2 from "./RestockAlerts";
// // import SupplierManagement from "./SupplierManagement";
// // import SupplierManagement2 from "./SupplierManagement2";
// // import {
// //   SupplierDashboard,
// //   SupplierDetailsPage,
// //   AddSupplierPage,
// //   EditSupplierPage,
// //   SupplierReviewForm,
// //   SupplierOrderForm,
// //   SupplierStats,
// // } from "./SupplierManagement3";
// // import { SupplierProvider } from "./SupplierContext"; // Import SupplierProvider
// // import Supc from "./Supc";
// // import Supch from "./Supch";
// // import Supg from "./Supg";
// // import Supd from "./Supd";
// // import AdminDashboard from "./AdminDashboard";

// // const Inter = () => {
// //   const { storeName } = useContext(StoreContext);
// //   const [sidebarOpen, setSidebarOpen] = useState(true);
// //   const location = useLocation();

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

// //   const NavLink = ({ to, icon, children }) => {
// //     const isActive = location.pathname.includes(to);
// //     return (
// //       <Link
// //         to={to}
// //         className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
// //           ${isActive
// //             ? 'bg-white text-blue-800 shadow-md'
// //             : 'text-white hover:bg-white/10'
// //           }`}
// //       >
// //         {icon}
// //         <span className="font-medium">{children}</span>
// //       </Link>
// //     );
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 flex">
// //       {sidebarOpen && (
// //         <div
// //           className="fixed inset-0 bg-black/50 md:hidden z-20"
// //           onClick={() => setSidebarOpen(false)}
// //         />
// //       )}

// //       <aside
// //         className={`fixed md:static inset-y-0 left-0 w-64 bg-gradient-to-br from-blue-800 to-blue-600
// //           transform transition-transform duration-300 ease-in-out z-30
// //           ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
// //       >
// //         <div className="h-16 flex items-center justify-between px-4 border-b border-white/20">
// //           <h1 className="text-xl font-bold text-white truncate">
// //             {storeName || "Loading..."}
// //           </h1>
// //           <button
// //             onClick={() => setSidebarOpen(false)}
// //             className="md:hidden text-white hover:text-gray-200"
// //           >
// //             <X size={24} />
// //           </button>
// //         </div>

// //         <nav className="p-4 space-y-2">
// //           <NavLink to="/Inter/ProductManagement" icon={<Package size={20} />}>
// //             Products
// //           </NavLink>
// //           <NavLink to="/Inter/EmployeeManagement" icon={<Info size={20} />}>
// //             Employees
// //           </NavLink>
// //           <NavLink to="/Inter/RoleDistribution" icon={<Info size={20} />}>
// //             Roles
// //           </NavLink>
// //           <NavLink to="/Inter/DailySales" icon={<Info size={20} />}>
// //             Sales
// //           </NavLink>
// //           <NavLink to="/Inter/StockTracking" icon={<Info size={20} />}>
// //             StockTracking
// //           </NavLink>
// //           <NavLink to="/Inter/EmployeeSearch" icon={<Info size={20} />}>
// //             EmployeeSearch
// //           </NavLink>
// //           <NavLink to="/Inter/BIlling" icon={<Info size={20} />}>
// //             Billing
// //           </NavLink>
// //           <NavLink to="/Inter/CustomerSignUpForm" icon={<Info size={20} />}>
// //             Customer SignUp
// //           </NavLink>
// //           <NavLink to="/Inter/ViewCustomers" icon={<Info size={20} />}>
// //             Customers
// //           </NavLink>
// //           <NavLink to="/Inter/SalesChart" icon={<Info size={20} />}>
// //             SalesCHart
// //           </NavLink>
// //           <NavLink to="/Inter/ProductSales" icon={<Info size={20} />}>
// //             ProductSales
// //           </NavLink>
// //           <NavLink to="/Inter/InventoryDashboard" icon={<Info size={20} />}>
// //             Inventory
// //           </NavLink>
// //           <NavLink to="/Inter/UserManagement" icon={<Info size={20} />}>
// //             uSERS
// //           </NavLink>
// //           <NavLink to="/Inter/RestockAlerts" icon={<Info size={20} />}>
// //             RestockAlerts
// //           </NavLink>
// //           <NavLink to="/Inter/SupplierManagement" icon={<Info size={20} />}>
// //             Suppliers
// //           </NavLink>
// //           <NavLink to="/Inter/SupplierManagement2" icon={<Info size={20} />}>
// //             Suppliers
// //           </NavLink>
// //           <NavLink to="/Inter/SupplierManagement3" icon={<Info size={20} />}>
// //             Suppliers
// //           </NavLink>
// //           <NavLink to="/Inter/Supc" icon={<Info size={20} />}>
// //             Suppliersc
// //           </NavLink>
// //           {/* <NavLink to="/Inter/Supch" icon={<Info size={20} />}>
// //             Suppliersch
// //           </NavLink> */}
// //           <NavLink to="/Inter/Supd" icon={<Info size={20} />}>
// //             Suppliersd
// //           </NavLink>
// //           <NavLink to="/Inter/Supg" icon={<Info size={20} />}>
// //             Suppliersg
// //           </NavLink>
// //           <NavLink to="/Inter/SupplierOrderForm" icon={<Info size={20} />}>
// //             Place Order
// //           </NavLink>
// //           <NavLink to="/Inter/AdminDashboard" icon={<Info size={20} />}>
// //             Place Order
// //           </NavLink>
// //         </nav>
// //       </aside>

// //       <button
// //         onClick={() => setSidebarOpen(true)}
// //         className={`md:hidden fixed top-4 left-4 z-10 p-2 rounded-lg bg-blue-800 text-white
// //           shadow-lg hover:bg-blue-700 transition-colors duration-200
// //           ${sidebarOpen ? 'hidden' : 'block'}`}
// //       >
// //         <Menu size={24} />
// //       </button>

// //       <main className={`flex-1 transition-all duration-300 p-6
// //         ${sidebarOpen ? 'md:ml-0' : 'md:ml-0'}`}
// //       >
// //         <div className="max-w-7xl mx-auto">
// //           <Routes>
// //             <Route path="/" element={<ContactUs />} />
// //             <Route path="/ProductManagement" element={<ProductDashboard />} />
// //             <Route path="/Billing" element={<Billing />} />
// //             <Route path="/EmployeeManagement" element={<EmployeeManagement />} />
// //             <Route path="/RoleDistribution" element={<RoleDistribution />} />
// //             <Route path="/DailySales" element={<DailySales />} />
// //             <Route path="/EmployeeSearch" element={<EmployeeSearch />} />
// //             <Route path="/CustomerSignUpForm" element={<CustomerSignupForm />} />
// //             <Route path="/ViewCustomers" element={<ViewCustomers />} />
// //             <Route path="/StockTracking" element={<StockTracking />} />
// //             <Route path="/SalesChart" element={<SalesChart />} />
// //             <Route path="/ProductSales" element={<ProductSales />} />
// //             <Route path="/InventoryDashboard" element={<InventoryDashboard />} />
// //             <Route path="/UserManagement" element={<UserManagementPage />} />
// //             <Route path="/RestockAlerts" element={<ProductDashboard2 />} />
// //             <Route path="/SupplierManagement" element={<SupplierManagement />} />
// //             <Route path="/SupplierManagement2" element={<SupplierManagement2 />} />

// //             <Route path="/SupplierManagement3/*" element={
// //               <SupplierProvider>
// //                 <Routes>
// //                   <Route path="" element={<SupplierDashboard />} />
// //                   <Route path="new" element={<AddSupplierPage />} />
// //                   <Route path=":supplierId" element={<SupplierDetailsPage />} />
// //                   <Route path=":supplierId/edit" element={<EditSupplierPage />} />
// //                   <Route path=":supplierId/review" element={<SupplierReviewForm />} />
// //                   <Route path=":supplierId/orders/new" element={<SupplierOrderForm />} />
// //                   <Route path="stats" element={<SupplierStats />} />
// //                 </Routes>
// //               </SupplierProvider>
// //             } />
// //             <Route path="/Supc" element={<Supc/>} />
// //             {/* <Route path="/Supch" element={<Supch/>} /> */}
// //             <Route path="/Supd" element={<Supd/>} />

// //             <Route path="/Supg" element={<Supg/>} />
// //             <Route path="/SupplierOrderForm" element={<SupplierOrderForm/>} />

// //             <Route path="/AdminDashboard" element={<AdminDashboard/>} />



// //           </Routes>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default Inter;


// import React, { useContext, useState, useEffect } from "react";
// import { StoreContext } from "./StoreContext";
// import { Routes, Route, Link, useLocation } from "react-router-dom";
// import ProductDashboard from "./ProductManagement";
// import AboutPage from "./AboutPage";
// import ContactUs from "./ContactUs";
// import { Menu, Package, Info, X } from 'lucide-react';
// import EmployeeManagement from "./EmployeeManagement";
// import RoleDistribution from "./RoleDistribution";
// import DailySales from "./DailySales";
// import EmployeeSearch from "./EmployeeSearch";
// import Billing from "./Billing";
// import CustomerSignupForm from "./CustomerSignUpForm";
// import ViewCustomers from "./ViewCustomers";
// import StockTracking from "./StockTracking";
// import SalesChart from "./SalesChart";
// import ProductSales from "./ProductSales";
// import InventoryDashboard from "./InventoryDashboard";
// import UserManagementPage from "./UserManagement";
// import ProductDashboard2 from "./RestockAlerts";
// import SupplierManagement from "./SupplierManagement";
// import SupplierManagement2 from "./SupplierManagement2";
// import {
//   SupplierDashboard,
//   SupplierDetailsPage,
//   AddSupplierPage,
//   EditSupplierPage,
//   SupplierReviewForm,
//   SupplierOrderForm,
//   SupplierStats,
// } from "./SupplierManagement3";
// import { SupplierProvider } from "./SupplierContext"; // Import SupplierProvider
// import Supc from "./Supc";
// import Supch from "./Supch";
// import Supg from "./Supg";
// import Supd from "./Supd";
// import AdminDashboard from "./AdminDashboard";

// const Inter = () => {
//   const { storeName } = useContext(StoreContext);
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const location = useLocation();

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

//   const NavLink = ({ to, icon, children }) => {
//     const isActive = location.pathname.includes(to);
//     return (
//       <Link
//         to={to}
//         className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
//           ${isActive
//             ? 'bg-white text-blue-800 shadow-md'
//             : 'text-white hover:bg-white/10'
//           }`}
//       >
//         {icon}
//         <span className="font-medium">{children}</span>
//       </Link>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 md:hidden z-20"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       <aside
//         className={`fixed md:static inset-y-0 left-0 w-64 bg-gradient-to-br from-blue-800 to-blue-600
//           transform transition-transform duration-300 ease-in-out z-30
//           ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
//       >
//         <div className="h-16 flex items-center justify-between px-4 border-b border-white/20">
//           <h1 className="text-xl font-bold text-white truncate">
//             {storeName || "Loading..."}
//           </h1>
//           <button
//             onClick={() => setSidebarOpen(false)}
//             className="md:hidden text-white hover:text-gray-200"
//           >
//             <X size={24} />
//           </button>
//         </div>

//         <nav className="p-4 space-y-2">
//           <NavLink to="/Inter/ProductManagement" icon={<Package size={20} />}>
//             Products
//           </NavLink>
//           <NavLink to="/Inter/EmployeeManagement" icon={<Info size={20} />}>
//             Employees
//           </NavLink>
//           <NavLink to="/Inter/RoleDistribution" icon={<Info size={20} />}>
//             Roles
//           </NavLink>
//           <NavLink to="/Inter/DailySales" icon={<Info size={20} />}>
//             Sales
//           </NavLink>
//           <NavLink to="/Inter/StockTracking" icon={<Info size={20} />}>
//             StockTracking
//           </NavLink>
//           <NavLink to="/Inter/EmployeeSearch" icon={<Info size={20} />}>
//             EmployeeSearch
//           </NavLink>
//           <NavLink to="/Inter/Billing" icon={<Info size={20} />}>
//             Billing
//           </NavLink>
//           <NavLink to="/Inter/CustomerSignUpForm" icon={<Info size={20} />}>
//             Customer SignUp
//           </NavLink>
//           <NavLink to="/Inter/ViewCustomers" icon={<Info size={20} />}>
//             Customers
//           </NavLink>
//           <NavLink to="/Inter/SalesChart" icon={<Info size={20} />}>
//             SalesChart
//           </NavLink>
//           <NavLink to="/Inter/ProductSales" icon={<Info size={20} />}>
//             ProductSales
//           </NavLink>
//           <NavLink to="/Inter/InventoryDashboard" icon={<Info size={20} />}>
//             Inventory
//           </NavLink>
//           <NavLink to="/Inter/UserManagement" icon={<Info size={20} />}>
//             Users
//           </NavLink>
//           <NavLink to="/Inter/RestockAlerts" icon={<Info size={20} />}>
//             RestockAlerts
//           </NavLink>
//           <NavLink to="/Inter/SupplierManagement" icon={<Info size={20} />}>
//             Suppliers
//           </NavLink>
//           <NavLink to="/Inter/SupplierManagement2" icon={<Info size={20} />}>
//             Suppliers
//           </NavLink>
//           <NavLink to="/Inter/SupplierManagement3" icon={<Info size={20} />}>
//             Suppliers
//           </NavLink>
//           <NavLink to="/Inter/Supc" icon={<Info size={20} />}>
//             Suppliersc
//           </NavLink>
//           <NavLink to="/Inter/Supd" icon={<Info size={20} />}>
//             Suppliersd
//           </NavLink>
//           <NavLink to="/Inter/Supg" icon={<Info size={20} />}>
//             Suppliersg
//           </NavLink>
//           <NavLink to="/Inter/SupplierOrderForm" icon={<Info size={20} />}>
//             Place Order
//           </NavLink>
//           <NavLink to="/Inter/AdminDashboard" icon={<Info size={20} />}>
//             Admin Dashboard
//           </NavLink>
//         </nav>
//       </aside>

//       <button
//         onClick={() => setSidebarOpen(true)}
//         className={`md:hidden fixed top-4 left-4 z-10 p-2 rounded-lg bg-blue-800 text-white
//           shadow-lg hover:bg-blue-700 transition-colors duration-200
//           ${sidebarOpen ? 'hidden' : 'block'}`}
//       >
//         <Menu size={24} />
//       </button>

//       <main className={`flex-1 transition-all duration-300 p-6
//         ${sidebarOpen ? 'md:ml-0' : 'md:ml-0'}`}
//       >
//         <div className="max-w-7xl mx-auto">
//           <Routes>
//             <Route path="/" element={<ContactUs />} />
//             <Route path="/ProductManagement" element={<ProductDashboard />} />
//             <Route path="/Billing" element={<Billing />} />
//             <Route path="/EmployeeManagement" element={<EmployeeManagement />} />
//             <Route path="/RoleDistribution" element={<RoleDistribution />} />
//             <Route path="/DailySales" element={<DailySales />} />
//             <Route path="/EmployeeSearch" element={<EmployeeSearch />} />
//             <Route path="/CustomerSignUpForm" element={<CustomerSignupForm />} />
//             <Route path="/ViewCustomers" element={<ViewCustomers />} />
//             <Route path="/StockTracking" element={<StockTracking />} />
//             <Route path="/SalesChart" element={<SalesChart />} />
//             <Route path="/ProductSales" element={<ProductSales />} />
//             <Route path="/InventoryDashboard" element={<InventoryDashboard />} />
//             <Route path="/UserManagement" element={<UserManagementPage />} />
//             <Route path="/RestockAlerts" element={<ProductDashboard2 />} />
//             <Route path="/SupplierManagement" element={<SupplierManagement />} />
//             <Route path="/SupplierManagement2" element={<SupplierManagement2 />} />

//             <Route path="/SupplierManagement3/*" element={
//               <SupplierProvider>
//                 <Routes>
//                   <Route path="" element={<SupplierDashboard />} />
//                   <Route path="new" element={<AddSupplierPage />} />
//                   <Route path=":supplierId" element={<SupplierDetailsPage />} />
//                   <Route path=":supplierId/edit" element={<EditSupplierPage />} />
//                   <Route path=":supplierId/review" element={<SupplierReviewForm />} />
//                   <Route path=":supplierId/orders/new" element={<SupplierOrderForm />} />
//                   <Route path="stats" element={<SupplierStats />} />
//                 </Routes>
//               </SupplierProvider>
//             } />
//             <Route path="/Supc" element={<Supc />} />
//             <Route path="/Supd" element={<Supd />} />
//             <Route path="/Supg" element={<Supg />} />
//             <Route path="/SupplierOrderForm" element={<SupplierOrderForm />} />
//             <Route path="/AdminDashboard" element={<AdminDashboard />} />
//           </Routes>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Inter;

import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "./StoreContext";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import ProductDashboard from "./ProductManagement";
import EmployeeManagement from "./EmployeeManagement";
import RoleDistribution from "./RoleDistribution";
import DailySales from "./DailySales";
import EmployeeSearch from "./EmployeeSearch";
import Billing from "./Billing";
import CustomerSignupForm from "./CustomerSignUpForm";
import ViewCustomers from "./ViewCustomers";
import StockTracking from "./StockTracking";
import SalesChart from "./SalesChart";
import ProductSales from "./ProductSales";
import InventoryDashboard from "./InventoryDashboard";
import UserManagementPage from "./UserManagement";
import ProductDashboard2 from "./RestockAlerts";
import SupplierManagement from "./SupplierManagement";
import SupplierManagement2 from "./SupplierManagement2";
import {
  SupplierDashboard,
  SupplierDetailsPage,
  AddSupplierPage,
  EditSupplierPage,
  SupplierReviewForm,
  SupplierOrderForm,
  SupplierStats,
} from "./SupplierManagement3";
import { SupplierProvider } from "./SupplierContext";
import Supc from "./Supc";
import Supch from "./Supch";
import Supg from "./Supg";
import Supd from "./Supd";
import AdminDashboard from "./AdminDashboard";
import { Menu, Package, Info, X } from 'lucide-react';
import ContactUs from "./ContactUs";
import ManagerDashboard from "./ManagerDashboard";
import CashierDashboard from "./CashierDashboard";

const Inter = () => {
  const { storeName } = useContext(StoreContext);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, [location]);

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

  const NavLink = ({ to, icon, children }) => {
    const isActive = location.pathname.includes(to);
    return (
      <Link
        to={to}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
          ${isActive
            ? 'bg-white text-blue-800 shadow-md'
            : 'text-white hover:bg-white/10'
          }`}
      >
        {icon}
        <span className="font-medium">{children}</span>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed md:static inset-y-0 left-0 w-64 bg-gradient-to-br from-blue-800 to-blue-600
          transform transition-transform duration-300 ease-in-out z-30
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-white/20">
          <h1 className="text-xl font-bold text-white truncate">
            {storeName || "Loading..."}
          </h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-white hover:text-gray-200"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          <NavLink to="/Inter/ProductManagement" icon={<Package size={20} />}>
            Products
          </NavLink>
          <NavLink to="/Inter/EmployeeManagement" icon={<Info size={20} />}>
            Employees
          </NavLink>
          <NavLink to="/Inter/RoleDistribution" icon={<Info size={20} />}>
            Roles
          </NavLink>
          <NavLink to="/Inter/DailySales" icon={<Info size={20} />}>
            Sales
          </NavLink>
          <NavLink to="/Inter/StockTracking" icon={<Info size={20} />}>
            StockTracking
          </NavLink>
          <NavLink to="/Inter/EmployeeSearch" icon={<Info size={20} />}>
            EmployeeSearch
          </NavLink>
          <NavLink to="/Inter/Billing" icon={<Info size={20} />}>
            Billing
          </NavLink>
          <NavLink to="/Inter/CustomerSignUpForm" icon={<Info size={20} />}>
            Customer SignUp
          </NavLink>
          <NavLink to="/Inter/ViewCustomers" icon={<Info size={20} />}>
            Customers
          </NavLink>
          <NavLink to="/Inter/SalesChart" icon={<Info size={20} />}>
            SalesChart
          </NavLink>
          <NavLink to="/Inter/ProductSales" icon={<Info size={20} />}>
            ProductSales
          </NavLink>
          <NavLink to="/Inter/InventoryDashboard" icon={<Info size={20} />}>
            Inventory
          </NavLink>
          <NavLink to="/Inter/UserManagement" icon={<Info size={20} />}>
            Users
          </NavLink>
          <NavLink to="/Inter/RestockAlerts" icon={<Info size={20} />}>
            RestockAlerts
          </NavLink>
          <NavLink to="/Inter/SupplierManagement" icon={<Info size={20} />}>
            Suppliers
          </NavLink>
          <NavLink to="/Inter/SupplierManagement2" icon={<Info size={20} />}>
            Suppliers
          </NavLink>
          <NavLink to="/Inter/SupplierManagement3" icon={<Info size={20} />}>
            Suppliers
          </NavLink>
          <NavLink to="/Inter/Supc" icon={<Info size={20} />}>
            Suppliersc
          </NavLink>
          <NavLink to="/Inter/Supd" icon={<Info size={20} />}>
            Suppliersd
          </NavLink>
          <NavLink to="/Inter/Supg" icon={<Info size={20} />}>
            Suppliersg
          </NavLink>
          <NavLink to="/Inter/SupplierOrderForm" icon={<Info size={20} />}>
            Place Order
          </NavLink>
          <NavLink to="/Inter/AdminDashboard" icon={<Info size={20} />}>
            Admin Dashboard
          </NavLink>
          <NavLink to="/Inter/ManagerDashboard" icon={<Info size={20} />}>
            Manager Dashboard
          </NavLink>
          <NavLink to="/Inter/CashierDashboard" icon={<Info size={20} />}>
            Cashier Dashboard
          </NavLink>
        </nav>
      </aside>

      <button
        onClick={() => setSidebarOpen(true)}
        className={`md:hidden fixed top-4 left-4 z-10 p-2 rounded-lg bg-blue-800 text-white
          shadow-lg hover:bg-blue-700 transition-colors duration-200
          ${sidebarOpen ? 'hidden' : 'block'}`}
      >
        <Menu size={24} />
      </button>

      <main className={`flex-1 transition-all duration-300 p-6
        ${sidebarOpen ? 'md:ml-0' : 'md:ml-0'}`}
      >
        <div className="max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<ContactUs />} />
            <Route path="/ProductManagement" element={<ProductDashboard />} />
            <Route path="/Billing" element={<Billing />} />
            <Route path="/EmployeeManagement" element={<EmployeeManagement />} />
            <Route path="/RoleDistribution" element={<RoleDistribution />} />
            <Route path="/DailySales" element={<DailySales />} />
            <Route path="/EmployeeSearch" element={<EmployeeSearch />} />
            <Route path="/CustomerSignUpForm" element={<CustomerSignupForm />} />
            <Route path="/ViewCustomers" element={<ViewCustomers />} />
            <Route path="/StockTracking" element={<StockTracking />} />
            <Route path="/SalesChart" element={<SalesChart />} />
            <Route path="/ProductSales" element={<ProductSales />} />
            <Route path="/InventoryDashboard" element={<InventoryDashboard />} />
            <Route path="/UserManagement" element={<UserManagementPage />} />
            <Route path="/RestockAlerts" element={<ProductDashboard2 />} />
            <Route path="/SupplierManagement" element={<SupplierManagement />} />
            <Route path="/SupplierManagement2" element={<SupplierManagement2 />} />

            <Route path="/SupplierManagement3/*" element={
              <SupplierProvider>
                <Routes>
                  <Route path="" element={<SupplierDashboard />} />
                  <Route path="new" element={<AddSupplierPage />} />
                  <Route path=":supplierId" element={<SupplierDetailsPage />} />
                  <Route path=":supplierId/edit" element={<EditSupplierPage />} />
                  <Route path=":supplierId/review" element={<SupplierReviewForm />} />
                  <Route path=":supplierId/orders/new" element={<SupplierOrderForm />} />
                  <Route path="stats" element={<SupplierStats />} />
                </Routes>
              </SupplierProvider>
            } />
            <Route path="/Supc" element={<Supc />} />
            <Route path="/Supd" element={<Supd />} />
            <Route path="/Supg" element={<Supg />} />
            <Route path="/SupplierOrderForm" element={<SupplierOrderForm />} />
            <Route path="/AdminDashboard" element={<AdminDashboard />} />
            <Route path="/ManagerDashboard" element={<ManagerDashboard />} />
            <Route path="/CashierDashboard" element={<CashierDashboard/>} />


          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Inter;