// import React, { useState, useEffect, useContext } from "react";
// import { StoreContext } from "./StoreContext";
// import { motion } from "framer-motion";
// import { FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";

// const SearchProductsByCategory = () => {
//   const [products, setProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const { storeId } = useContext(StoreContext);
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [expandedCategories, setExpandedCategories] = useState({});

//   const API_URL = "http://127.0.0.1:5000/products";

//   useEffect(() => {
//     if (storeId) {
//       setIsLoading(true);
//       fetch(`${API_URL}?storeId=${storeId}`)
//         .then((res) => {
//           if (!res.ok) throw new Error(`Error: ${res.status}`);
//           return res.json();
//         })
//         .then((data) => {
//           setProducts(data);
//           // Initialize all categories as expanded
//           const categories = {};
//           data.forEach(product => {
//             const category = product.category || "Uncategorized";
//             categories[category] = true;
//           });
//           setExpandedCategories(categories);
//           setIsLoading(false);
//         })
//         .catch((err) => {
//           console.error("Error fetching products:", err);
//           setErrorMessage("Failed to fetch products. Please try again.");
//           setIsLoading(false);
//         });
//     }
//   }, [storeId]);

//   // Group products by category
//   const groupedProducts = products.reduce((acc, product) => {
//     const category = product.category || "Uncategorized";
//     if (!acc[category]) {
//       acc[category] = [];
//     }
//     acc[category].push(product);
//     return acc;
//   }, {});

//   const filteredGroupedProducts = Object.keys(groupedProducts).filter((category) =>
//     category.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const toggleCategory = (category) => {
//     setExpandedCategories({
//       ...expandedCategories,
//       [category]: !expandedCategories[category]
//     });
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { 
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1,
//       transition: { type: "spring", stiffness: 100 }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-200 to-rose-500 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div 
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-100">
//               Product Categories
//             </span>
//           </h1>
//           <p className="mt-3 text-xl text-white opacity-90">
//             Browse and search through our product collection
//           </p>
//         </motion.div>

//         {/* Search Bar */}
//         <motion.div 
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="max-w-2xl mx-auto mb-8"
//         >
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search categories..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full px-6 py-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all duration-300 shadow-lg text-lg"
//             />
//             <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-rose-500">
//               <FaSearch className="text-xl" />
//             </div>
//           </div>
//         </motion.div>

//         {/* Error Message */}
//         {errorMessage && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="max-w-2xl mx-auto p-4 bg-red-500 text-white rounded-lg mb-8 shadow-lg"
//           >
//             <p>{errorMessage}</p>
//           </motion.div>
//         )}

//         {/* Loading Indicator */}
//         {isLoading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
//           </div>
//         ) : (
//           <motion.div 
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="grid grid-cols-1 md:grid-cols-2 gap-8"
//           >
//             {filteredGroupedProducts.length > 0 ? (
//               filteredGroupedProducts.map((category) => (
//                 <motion.div
//                   key={category}
//                   variants={itemVariants}
//                   className="bg-gradient-to-br from-rose-400 to-amber-300 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
//                 >
//                   <div 
//                     className="p-6 cursor-pointer flex justify-between items-center border-b-2 border-white border-opacity-30"
//                     onClick={() => toggleCategory(category)}
//                   >
//                     <h3 className="text-2xl font-bold text-white">
//                       {category}
//                     </h3>
//                     <div className="text-white text-lg">
//                       {expandedCategories[category] ? <FaChevronUp /> : <FaChevronDown />}
//                     </div>
//                   </div>
                  
//                   {expandedCategories[category] && (
//                     <motion.div 
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="p-6"
//                     >
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                         {groupedProducts[category].map((product) => (
//                           <motion.div
//                             key={product._id}
//                             whileHover={{ 
//                               scale: 1.02,
//                               boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
//                             }}
//                             className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-5 shadow-md relative overflow-hidden transform transition-all duration-300"
//                           >
//                             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-amber-400"></div>
//                             <h4 className="text-xl font-semibold text-rose-600 mb-3 pb-2 border-b border-gray-200">
//                               {product.product_name}
//                             </h4>
//                             <div className="space-y-2">
//                               <p className="flex justify-between">
//                                 <span className="font-medium text-gray-700">Sale Price:</span>
//                                 <span className="text-rose-600 font-bold">₹{product.sale_price}</span>
//                               </p>
//                               <p className="flex justify-between">
//                                 <span className="font-medium text-gray-700">Tax:</span>
//                                 <span>{product.tax}%</span>
//                               </p>
//                               <p className="flex justify-between">
//                                 <span className="font-medium text-gray-700">Discount:</span>
//                                 <span className="text-green-600">{product.discount}%</span>
//                               </p>
//                               <p className="flex justify-between">
//                                 <span className="font-medium text-gray-700">Quantity:</span>
//                                 <span>{product.quantity} {product.units}</span>
//                               </p>
//                             </div>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </motion.div>
//                   )}
//                 </motion.div>
//               ))
//             ) : (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="col-span-full text-center p-12"
//               >
//                 <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
//                   <h3 className="text-2xl font-bold text-gray-800 mb-2">No Categories Found</h3>
//                   <p className="text-gray-600">Try a different search term or check back later.</p>
//                 </div>
//               </motion.div>
//             )}
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchProductsByCategory;

// import React, { useState, useEffect, useContext, useMemo } from "react";
// import { StoreContext } from "./StoreContext";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   FaSearch, 
//   FaChevronDown, 
//   FaChevronUp, 
//   FaChartPie, 
//   FaArrowUp, 
//   FaArrowDown, 
//   FaStar,
//   FaFilter,
//   FaBoxOpen
// } from "react-icons/fa";
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   Cell,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from "recharts";

// const SearchProductsByCategory = () => {
//   const [products, setProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const { storeId } = useContext(StoreContext);
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [expandedCategories, setExpandedCategories] = useState({});
//   const [viewMode, setViewMode] = useState("grid"); // grid, analytics
//   const [analyticsActiveTab, setAnalyticsActiveTab] = useState("overview");
//   const [analyticsTimeRange, setAnalyticsTimeRange] = useState(30);
//   const [sortBy, setSortBy] = useState("name");
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [priceRange, setPriceRange] = useState([0, 100000]);
//   const [analyticsData, setAnalyticsData] = useState({
//     categoryDistribution: [],
//     priceDistribution: [],
//     inventoryTrends: [],
//     topSellingProducts: [],
//     lowStockAlert: []
//   });

//   const API_URL = "http://127.0.0.1:5000";

//   // Colors for charts
//   const COLORS = [
//     "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", 
//     "#FF9F40", "#C9CBCF", "#8D6E63", "#00BCD4", "#CDDC39"
//   ];

//   useEffect(() => {
//     if (storeId) {
//       fetchProducts();
//       fetchAnalyticsData();
//     }
//   }, [storeId, analyticsTimeRange]);

//   const fetchProducts = async () => {
//     setIsLoading(true);
//     try {
//       const res = await fetch(`${API_URL}/products?storeId=${storeId}`);
//       if (!res.ok) throw new Error(`Error: ${res.status}`);
//       const data = await res.json();
//       setProducts(data);
      
//       // Initialize all categories as expanded
//       const categories = {};
//       data.forEach(product => {
//         const category = product.category || "Uncategorized";
//         categories[category] = true;
//       });
//       setExpandedCategories(categories);
//     } catch (err) {
//       console.error("Error fetching products:", err);
//       setErrorMessage("Failed to fetch products. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const fetchAnalyticsData = async () => {
//     try {
//       // This would be separate API calls in a real application
//       // For demo purposes, we'll generate data based on the products
      
//       const categoryData = generateCategoryData();
//       const priceData = generatePriceDistribution();
//       const inventoryData = generateInventoryTrends();
//       const topSelling = generateTopSellingProducts();
//       const lowStock = generateLowStockAlerts();
      
//       setAnalyticsData({
//         categoryDistribution: categoryData,
//         priceDistribution: priceData,
//         inventoryTrends: inventoryData,
//         topSellingProducts: topSelling,
//         lowStockAlert: lowStock
//       });
//     } catch (err) {
//       console.error("Error fetching analytics data:", err);
//     }
//   };

//   // Generate mock analytics data based on products
//   const generateCategoryData = () => {
//     const categoryCounts = products.reduce((acc, product) => {
//       const category = product.category || "Uncategorized";
//       if (!acc[category]) {
//         acc[category] = 0;
//       }
//       acc[category]++;
//       return acc;
//     }, {});

//     return Object.keys(categoryCounts).map(category => ({
//       name: category,
//       value: categoryCounts[category]
//     }));
//   };

//   const generatePriceDistribution = () => {
//     const priceRanges = {
//       "₹0-₹500": 0,
//       "₹500-₹1000": 0,
//       "₹1000-₹2000": 0,
//       "₹2000-₹5000": 0,
//       "₹5000+": 0
//     };

//     products.forEach(product => {
//       const price = product.sale_price;
//       if (price <= 500) priceRanges["₹0-₹500"]++;
//       else if (price <= 1000) priceRanges["₹500-₹1000"]++;
//       else if (price <= 2000) priceRanges["₹1000-₹2000"]++;
//       else if (price <= 5000) priceRanges["₹2000-₹5000"]++;
//       else priceRanges["₹5000+"]++;
//     });

//     return Object.keys(priceRanges).map(range => ({
//       name: range,
//       value: priceRanges[range]
//     }));
//   };

//   const generateInventoryTrends = () => {
//     // Mock data for inventory trends over time
//     return [
//       { name: 'Jan', inventory: 4000, sales: 2400, returns: 400 },
//       { name: 'Feb', inventory: 3000, sales: 1398, returns: 210 },
//       { name: 'Mar', inventory: 2000, sales: 9800, returns: 290 },
//       { name: 'Apr', inventory: 2780, sales: 3908, returns: 300 },
//       { name: 'May', inventory: 1890, sales: 4800, returns: 180 },
//       { name: 'Jun', inventory: 2390, sales: 3800, returns: 220 }
//     ];
//   };

//   const generateTopSellingProducts = () => {
//     // Generate mock data for top selling products
//     return products
//       .slice(0, 5)
//       .map(product => ({
//         name: product.product_name,
//         sales: Math.floor(Math.random() * 1000) + 100,
//         revenue: (product.sale_price * (Math.floor(Math.random() * 1000) + 100))
//       }))
//       .sort((a, b) => b.sales - a.sales);
//   };

//   const generateLowStockAlerts = () => {
//     // Find products with low quantity
//     return products
//       .filter(product => product.quantity < 10)
//       .map(product => ({
//         name: product.product_name,
//         quantity: product.quantity,
//         category: product.category || "Uncategorized"
//       }))
//       .slice(0, 5);
//   };

//   // Group and filter products
//   const groupedProducts = useMemo(() => {
//     return products.reduce((acc, product) => {
//       const category = product.category || "Uncategorized";
//       if (!acc[category]) {
//         acc[category] = [];
//       }
//       acc[category].push(product);
//       return acc;
//     }, {});
//   }, [products]);

//   const filteredGroupedProducts = useMemo(() => {
//     const filtered = Object.keys(groupedProducts).filter(category =>
//       category.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     // Sort categories
//     return filtered.sort((a, b) => {
//       if (sortOrder === "asc") {
//         return a.localeCompare(b);
//       } else {
//         return b.localeCompare(a);
//       }
//     });
//   }, [groupedProducts, searchQuery, sortOrder]);

//   // Sort products within categories
//   const getSortedProducts = (category) => {
//     const productsInCategory = [...groupedProducts[category]];
    
//     switch (sortBy) {
//       case "name":
//         return productsInCategory.sort((a, b) => 
//           sortOrder === "asc" 
//             ? a.product_name.localeCompare(b.product_name)
//             : b.product_name.localeCompare(a.product_name)
//         );
//       case "price":
//         return productsInCategory.sort((a, b) => 
//           sortOrder === "asc" 
//             ? a.sale_price - b.sale_price
//             : b.sale_price - a.sale_price
//         );
//       case "quantity":
//         return productsInCategory.sort((a, b) => 
//           sortOrder === "asc" 
//             ? a.quantity - b.quantity
//             : b.quantity - a.quantity
//         );
//       default:
//         return productsInCategory;
//     }
//   };

//   const toggleCategory = (category) => {
//     setExpandedCategories({
//       ...expandedCategories,
//       [category]: !expandedCategories[category]
//     });
//   };

//   const toggleSortOrder = () => {
//     setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//   };

//   const handlePriceRangeChange = (e, index) => {
//     const newRange = [...priceRange];
//     newRange[index] = parseInt(e.target.value);
//     setPriceRange(newRange);
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { 
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1,
//       transition: { type: "spring", stiffness: 100 }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div 
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-indigo-300">
//               Product Catalog
//             </span>
//           </h1>
//           <p className="mt-4 text-xl text-white opacity-90 max-w-3xl mx-auto">
//             Explore our product collection with advanced filtering and analytics
//           </p>
          
//           {/* View Mode Toggle */}
//           <div className="flex justify-center mt-6 space-x-4">
//             <button 
//               onClick={() => setViewMode("grid")}
//               className={`px-5 py-2 rounded-full flex items-center space-x-2 transition-all ${
//                 viewMode === "grid" 
//                   ? "bg-white text-indigo-900 shadow-lg" 
//                   : "bg-indigo-900 bg-opacity-50 text-white hover:bg-opacity-70"
//               }`}
//             >
//               <FaBoxOpen />
//               <span>Products</span>
//             </button>
//             <button 
//               onClick={() => setViewMode("analytics")}
//               className={`px-5 py-2 rounded-full flex items-center space-x-2 transition-all ${
//                 viewMode === "analytics" 
//                   ? "bg-white text-indigo-900 shadow-lg" 
//                   : "bg-indigo-900 bg-opacity-50 text-white hover:bg-opacity-70"
//               }`}
//             >
//               <FaChartPie />
//               <span>Analytics</span>
//             </button>
//           </div>
//         </motion.div>

//         {/* Products View */}
//         {viewMode === "grid" && (
//           <>
//             {/* Search & Filter Bar */}
//             <motion.div 
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="max-w-5xl mx-auto mb-8"
//             >
//               <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 shadow-xl">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   {/* Search */}
//                   <div className="relative">
//                     <input
//                       type="text"
//                       placeholder="Search categories..."
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                       className="w-full px-5 py-3 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 shadow-md"
//                     />
//                     <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-indigo-500">
//                       <FaSearch className="text-lg" />
//                     </div>
//                   </div>

//                   {/* Sort Options */}
//                   <div className="flex space-x-3">
//                     <select
//                       value={sortBy}
//                       onChange={(e) => setSortBy(e.target.value)}
//                       className="w-full px-4 py-3 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
//                     >
//                       <option value="name">Sort by Name</option>
//                       <option value="price">Sort by Price</option>
//                       <option value="quantity">Sort by Quantity</option>
//                     </select>
//                     <button 
//                       onClick={toggleSortOrder}
//                       className="flex items-center justify-center w-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition-colors"
//                     >
//                       {sortOrder === "asc" ? <FaArrowUp /> : <FaArrowDown />}
//                     </button>
//                   </div>

//                   {/* Price Range Filter */}
//                   <div className="relative">
//                     <div className="flex items-center space-x-3">
//                       <span className="text-white">₹{priceRange[0]}</span>
//                       <input
//                         type="range"
//                         min="0"
//                         max="10000"
//                         step="500"
//                         value={priceRange[0]}
//                         onChange={(e) => handlePriceRangeChange(e, 0)}
//                         className="flex-grow h-2 bg-indigo-200 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-600"
//                       />
//                       <span className="text-white">₹{priceRange[1]}</span>
//                     </div>
//                     <div className="absolute -bottom-6 left-0 right-0 text-xs text-center text-pink-200">
//                       Price Range Filter
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Error Message */}
//             {errorMessage && (
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="max-w-2xl mx-auto p-4 bg-red-500 text-white rounded-lg mb-8 shadow-lg"
//               >
//                 <p>{errorMessage}</p>
//               </motion.div>
//             )}

//             {/* Loading Indicator */}
//             {isLoading ? (
//               <div className="flex justify-center items-center h-64">
//                 <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-pink-300"></div>
//               </div>
//             ) : (
//               <motion.div 
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="grid grid-cols-1 lg:grid-cols-2 gap-8"
//               >
//                 {filteredGroupedProducts.length > 0 ? (
//                   filteredGroupedProducts.map((category) => (
//                     <motion.div
//                       key={category}
//                       variants={itemVariants}
//                       className="bg-gradient-to-br from-indigo-800 to-purple-600 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
//                     >
//                       <div 
//                         className="p-6 cursor-pointer flex justify-between items-center border-b-2 border-indigo-400 border-opacity-30"
//                         onClick={() => toggleCategory(category)}
//                       >
//                         <h3 className="text-2xl font-bold text-white flex items-center">
//                           <span className="w-8 h-8 flex items-center justify-center bg-pink-500 rounded-full mr-3 text-white text-sm">
//                             {groupedProducts[category].length}
//                           </span>
//                           {category}
//                         </h3>
//                         <div className="text-white text-lg bg-indigo-700 bg-opacity-50 p-2 rounded-lg">
//                           {expandedCategories[category] ? <FaChevronUp /> : <FaChevronDown />}
//                         </div>
//                       </div>
                      
//                       <AnimatePresence>
//                         {expandedCategories[category] && (
//                           <motion.div 
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: "auto" }}
//                             exit={{ opacity: 0, height: 0 }}
//                             transition={{ duration: 0.3 }}
//                             className="p-6"
//                           >
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                               {getSortedProducts(category)
//                                 .filter(product => 
//                                   product.sale_price >= priceRange[0] && 
//                                   product.sale_price <= priceRange[1]
//                                 )
//                                 .map((product) => (
//                                 <motion.div
//                                   key={product._id}
//                                   whileHover={{ 
//                                     scale: 1.02,
//                                     boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
//                                   }}
//                                   className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 shadow-md relative overflow-hidden transform transition-all duration-300 border border-pink-500 border-opacity-30"
//                                 >
//                                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-indigo-500"></div>
                                  
//                                   {/* Product badge */}
//                                   {product.quantity < 10 && (
//                                     <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//                                       Low Stock
//                                     </div>
//                                   )}
                                  
//                                   <h4 className="text-xl font-semibold text-white mb-3 pb-2 border-b border-indigo-300 border-opacity-30">
//                                     {product.product_name}
//                                   </h4>
                                  
//                                   <div className="space-y-2 text-white">
//                                     <p className="flex justify-between">
//                                       <span className="text-indigo-200">Sale Price:</span>
//                                       <span className="text-pink-300 font-bold">₹{product.sale_price}</span>
//                                     </p>
//                                     <p className="flex justify-between">
//                                       <span className="text-indigo-200">Tax:</span>
//                                       <span>{product.tax}%</span>
//                                     </p>
//                                     <p className="flex justify-between">
//                                       <span className="text-indigo-200">Discount:</span>
//                                       <span className="text-green-400">{product.discount}%</span>
//                                     </p>
//                                     <p className="flex justify-between">
//                                       <span className="text-indigo-200">Quantity:</span>
//                                       <span className={`${product.quantity < 10 ? 'text-red-400' : 'text-white'}`}>
//                                         {product.quantity} {product.units}
//                                       </span>
//                                     </p>
//                                   </div>
                                  
//                                   {/* Quick actions */}
//                                   <div className="mt-4 pt-3 border-t border-indigo-300 border-opacity-30 flex justify-end space-x-2">
//                                     <button className="p-2 bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg transition-colors text-sm">
//                                       View Details
//                                     </button>
//                                   </div>
//                                 </motion.div>
//                               ))}
//                             </div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </motion.div>
//                   ))
//                 ) : (
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     className="col-span-full text-center p-12"
//                   >
//                     <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 shadow-lg">
//                       <h3 className="text-2xl font-bold text-white mb-2">No Categories Found</h3>
//                       <p className="text-indigo-200">Try a different search term or check back later.</p>
//                     </div>
//                   </motion.div>
//                 )}
//               </motion.div>
//             )}
//           </>
//         )}

//         {/* Analytics View */}
//         {viewMode === "analytics" && (
//           <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 shadow-xl mb-8">
//             {/* Analytics Controls */}
//             <div className="mb-8 flex flex-wrap justify-between items-center">
//               <div className="flex space-x-4 mb-4 lg:mb-0">
//                 <button 
//                   onClick={() => setAnalyticsActiveTab("overview")}
//                   className={`px-4 py-2 rounded-lg transition-all ${
//                     analyticsActiveTab === "overview" 
//                       ? "bg-indigo-600 text-white shadow-lg" 
//                       : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
//                   }`}
//                 >
//                   Overview
//                 </button>
//                 <button 
//                   onClick={() => setAnalyticsActiveTab("categories")}
//                   className={`px-4 py-2 rounded-lg transition-all ${
//                     analyticsActiveTab === "categories" 
//                       ? "bg-indigo-600 text-white shadow-lg" 
//                       : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
//                   }`}
//                 >
//                   Categories
//                 </button>
//                 <button 
//                   onClick={() => setAnalyticsActiveTab("inventory")}
//                   className={`px-4 py-2 rounded-lg transition-all ${
//                     analyticsActiveTab === "inventory" 
//                       ? "bg-indigo-600 text-white shadow-lg" 
//                       : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
//                   }`}
//                 >
//                   Inventory
//                 </button>
//                 <button 
//                   onClick={() => setAnalyticsActiveTab("performance")}
//                   className={`px-4 py-2 rounded-lg transition-all ${
//                     analyticsActiveTab === "performance" 
//                       ? "bg-indigo-600 text-white shadow-lg" 
//                       : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
//                   }`}
//                 >
//                   Performance
//                 </button>
//               </div>
              
//               <div>
//                 <select
//                   value={analyticsTimeRange}
//                   onChange={(e) => setAnalyticsTimeRange(Number(e.target.value))}
//                   className="px-4 py-2 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
//                 >
//                   <option value={7}>Last 7 days</option>
//                   <option value={30}>Last 30 days</option>
//                   <option value={90}>Last 3 months</option>
//                   <option value={365}>Last year</option>
//                 </select>
//               </div>
//             </div>
            
//             {/* Analytics Content */}
//             <div className="text-white">
//               {/* Overview Tab */}
//               {analyticsActiveTab === "overview" && (
//                 <div>
//                   <h2 className="text-2xl font-bold mb-6">Product Overview</h2>
                  
//                   {/* Stats Cards */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//                     <div className="bg-gradient-to-br from-indigo-600 to-blue-500 rounded-xl p-6 shadow-lg">
//                       <h3 className="text-lg font-medium opacity-80 mb-2">Total Products</h3>
//                       <p className="text-3xl font-bold">{products.length}</p>
//                       <div className="mt-4 text-sm opacity-70">Across all categories</div>
//                     </div>
                    
//                     <div className="bg-gradient-to-br from-pink-600 to-purple-500 rounded-xl p-6 shadow-lg">
//                       <h3 className="text-lg font-medium opacity-80 mb-2">Categories</h3>
//                       <p className="text-3xl font-bold">{Object.keys(groupedProducts).length}</p>
//                       <div className="mt-4 text-sm opacity-70">Product classifications</div>
//                     </div>
                    
//                     <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-6 shadow-lg">
//                       <h3 className="text-lg font-medium opacity-80 mb-2">Low Stock</h3>
//                       <p className="text-3xl font-bold">{analyticsData.lowStockAlert.length}</p>
//                       <div className="mt-4 text-sm opacity-70">Products need attention</div>
//                     </div>
                    
//                     <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 shadow-lg">
//                       <h3 className="text-lg font-medium opacity-80 mb-2">Avg. Price</h3>
//                       <p className="text-3xl font-bold">₹{Math.floor(products.reduce((sum, item) => sum + item.sale_price, 0) / products.length || 0)}</p>
//                       <div className="mt-4 text-sm opacity-70">Per product</div>
//                     </div>
//                   </div>
                  
//                   {/* Charts Overview */}
//                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                     {/* Category Distribution */}
//                     <div className="bg-white bg-opacity-5 rounded-xl p-6 shadow-lg">
//                       <h3 className="text-xl font-semibold mb-6">Product Categories</h3>
//                       <div className="h-64">
//                         <ResponsiveContainer width="100%" height="100%">
//                           <PieChart>
//                             <Pie
//                               data={analyticsData.categoryDistribution}
//                               cx="50%"
//                               cy="50%"
//                               labelLine={false}
//                               label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                               outerRadius={80}
//                               fill="#8884d8"
//                               dataKey="value"
//                             >
//                               {analyticsData.categoryDistribution.map((entry, index) => (
//                                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                               ))}
//                             </Pie>
//                             <Tooltip />
//                             <Legend />
//                           </PieChart>
//                         </ResponsiveContainer>
//                       </div>
//                     </div>
                    
//                     {/* Top Selling Products */}
//                     <div className="bg-white bg-opacity-5 rounded-xl p-6 shadow-lg">
//                       <h3 className="text-xl font-semibold mb-6">Top Selling Products</h3>
//                       <div className="h-64">
//                         <ResponsiveContainer width="100%" height="100%">
//                           <BarChart
//                             data={analyticsData.topSellingProducts}
//                             layout="vertical"
//                             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//                           >
//                             <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                             <XAxis type="number" />
//                             <YAxis dataKey="name" type="category" width={100} tick={{ fill: 'white' }} />
//                             <Tooltip 
//                               contentStyle={{ backgroundColor: 'rgba(23, 25, 35, 0.9)', borderColor: '#4c1d95' }}
//                               labelStyle={{ color: 'white' }}
//                             />
//                             <Legend />
//                             <Bar dataKey="sales" fill="#FF6384" name="Units Sold" />
//                           </BarChart>
//                         </ResponsiveContainer>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
              
//               {/* Categories Tab */}
//               {analyticsActiveTab === "categories" && (
//                 <div>
//                   <h2 className="text-2xl font-bold mb-6">Category Insights</h2>
//                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                     {/* Category Distribution */}
//                     <div className="bg-white bg-opacity-5 rounded-xl p-6 shadow-lg">
//                       <h3 className="text-xl font-semibold mb-6">Category Distribution</h3>
//                       <div className="h-64">
//                         <ResponsiveContainer width="100%" height="100%">
//                           <PieChart>
//                             <Pie
//                               data={analyticsData.categoryDistribution}
//                               cx="50%"
//                               cy="50%"
//                               labelLine={false}
//                               label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                               outerRadius={80}
//                               fill="#8884d8"
//                               dataKey="value"
//                             >
//                               {analyticsData.categoryDistribution.map((entry, index) => (
//                                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                               ))}
//                             </Pie>
//                             <Tooltip />
//                             <Legend />
//                           </PieChart>
//                         </ResponsiveContainer>
//                       </div>
//                     </div>
                    
//                     {/* Price Distribution */}
//                     <div className="bg-white bg-opacity-5 rounded-xl p-6 shadow-lg">
//                       <h3 className="text-xl font-semibold mb-6">Price Distribution</h3>
//                       <div className="h-64">
//                         <ResponsiveContainer width="100%" height="100%">
//                           <BarChart
//                             data={analyticsData.priceDistribution}
//                             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//                           >
//                             <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                             <XAxis dataKey="name" tick={{ fill: 'white' }} />
//                             <YAxis tick={{ fill: 'white' }} />
//                             <Tooltip 
//                               contentStyle={{ backgroundColor: 'rgba(23, 25, 35, 0.9)', borderColor: '#4c1d95' }}
//                               labelStyle={{ color: 'white' }}
//                             />
//                             <Legend />
//                             <Bar dataKey="value" fill="#36A2EB" name="Products" />
//                           </BarChart>
//                         </ResponsiveContainer>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
              
//               {/* Inventory Tab */}
//               {analyticsActiveTab === "inventory" && (
//                 <div>
//                   <h2 className="text-2xl font-bold mb-6">Inventory Insights</h2>
//                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                     {/* Inventory Trends */}
//                     <div className="bg-white bg-opacity-5 rounded-xl p-6 shadow-lg">
//                       <h3 className="text-xl font-semibold mb-6">Inventory Trends</h3>
//                       <div className="h-64">
//                         <ResponsiveContainer width="100%" height="100%">
//                           <LineChart
//                             data={analyticsData.inventoryTrends}
//                             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//                           >
//                             <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                             <XAxis dataKey="name" tick={{ fill: 'white' }} />
//                             <YAxis tick={{ fill: 'white' }} />
//                             <Tooltip 
//                               contentStyle={{ backgroundColor: 'rgba(23, 25, 35, 0.9)', borderColor: '#4c1d95' }}
//                               labelStyle={{ color: 'white' }}
//                             />
//                             <Legend />
//                             <Line type="monotone" dataKey="inventory" stroke="#FF6384" name="Inventory" />
//                             <Line type="monotone" dataKey="sales" stroke="#36A2EB" name="Sales" />
//                             <Line type="monotone" dataKey="returns" stroke="#FFCE56" name="Returns" />
//                           </LineChart>
//                         </ResponsiveContainer>
//                       </div>
//                     </div>
                    
//                     {/* Low Stock Alerts */}
//                     <div className="bg-white bg-opacity-5 rounded-xl p-6 shadow-lg">
//                       <h3 className="text-xl font-semibold mb-6">Low Stock Alerts</h3>
//                       <div className="space-y-4">
//                         {analyticsData.lowStockAlert.map((product, index) => (
//                           <div key={index} className="bg-white bg-opacity-10 p-4 rounded-lg">
//                             <h4 className="text-lg font-semibold">{product.name}</h4>
//                             <p className="text-sm text-indigo-200">Category: {product.category}</p>
//                             <p className="text-sm text-red-400">Quantity: {product.quantity}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
              
//               {/* Performance Tab */}
//               {analyticsActiveTab === "performance" && (
//                 <div>
//                   <h2 className="text-2xl font-bold mb-6">Performance Insights</h2>
//                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                     {/* Top Selling Products */}
//                     <div className="bg-white bg-opacity-5 rounded-xl p-6 shadow-lg">
//                       <h3 className="text-xl font-semibold mb-6">Top Selling Products</h3>
//                       <div className="h-64">
//                         <ResponsiveContainer width="100%" height="100%">
//                           <BarChart
//                             data={analyticsData.topSellingProducts}
//                             layout="vertical"
//                             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//                           >
//                             <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                             <XAxis type="number" />
//                             <YAxis dataKey="name" type="category" width={100} tick={{ fill: 'white' }} />
//                             <Tooltip 
//                               contentStyle={{ backgroundColor: 'rgba(23, 25, 35, 0.9)', borderColor: '#4c1d95' }}
//                               labelStyle={{ color: 'white' }}
//                             />
//                             <Legend />
//                             <Bar dataKey="sales" fill="#FF6384" name="Units Sold" />
//                           </BarChart>
//                         </ResponsiveContainer>
//                       </div>
//                     </div>
                    
//                     {/* Revenue by Product */}
//                     <div className="bg-white bg-opacity-5 rounded-xl p-6 shadow-lg">
//                       <h3 className="text-xl font-semibold mb-6">Revenue by Product</h3>
//                       <div className="h-64">
//                         <ResponsiveContainer width="100%" height="100%">
//                           <BarChart
//                             data={analyticsData.topSellingProducts}
//                             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//                           >
//                             <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
//                             <XAxis dataKey="name" tick={{ fill: 'white' }} />
//                             <YAxis tick={{ fill: 'white' }} />
//                             <Tooltip 
//                               contentStyle={{ backgroundColor: 'rgba(23, 25, 35, 0.9)', borderColor: '#4c1d95' }}
//                               labelStyle={{ color: 'white' }}
//                             />
//                             <Legend />
//                             <Bar dataKey="revenue" fill="#36A2EB" name="Revenue" />
//                           </BarChart>
//                         </ResponsiveContainer>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchProductsByCategory;

import React, { useState, useEffect, useContext, useMemo } from "react";
import { StoreContext } from "./StoreContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaSearch, 
  FaChevronDown, 
  FaChevronUp, 
  FaChartPie, 
  FaArrowUp, 
  FaArrowDown, 
  FaStar,
  FaFilter,
  FaBoxOpen
} from "react-icons/fa";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const SearchProductsByCategory = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { storeId } = useContext(StoreContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [viewMode, setViewMode] = useState("grid"); // grid, analytics
  const [analyticsActiveTab, setAnalyticsActiveTab] = useState("overview");
  const [analyticsTimeRange, setAnalyticsTimeRange] = useState(30);
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [analyticsData, setAnalyticsData] = useState({
    categoryDistribution: [],
    priceDistribution: [],
    inventoryTrends: [],
    topSellingProducts: [],
    lowStockAlert: []
  });

  const API_URL = "http://127.0.0.1:5000";

  // Professional color scheme
  const COLORS = [
    "#2E7DD1", "#67B7DC", "#8BC34A", "#FF8A65", "#9575CD", 
    "#4DB6AC", "#FFB74D", "#F06292", "#7986CB", "#4DD0E1"
  ];

  useEffect(() => {
    if (storeId) {
      fetchProducts();
      fetchAnalyticsData();
    }
  }, [storeId, analyticsTimeRange]);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_URL}/products?storeId=${storeId}`);
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      const data = await res.json();
      setProducts(data);
      
      // Initialize all categories as expanded
      const categories = {};
      data.forEach(product => {
        const category = product.category || "Uncategorized";
        categories[category] = true;
      });
      setExpandedCategories(categories);
    } catch (err) {
      console.error("Error fetching products:", err);
      setErrorMessage("Failed to fetch products. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAnalyticsData = async () => {
    try {
      // This would be separate API calls in a real application
      // For demo purposes, we'll generate data based on the products
      
      const categoryData = generateCategoryData();
      const priceData = generatePriceDistribution();
      const inventoryData = generateInventoryTrends();
      const topSelling = generateTopSellingProducts();
      const lowStock = generateLowStockAlerts();
      
      setAnalyticsData({
        categoryDistribution: categoryData,
        priceDistribution: priceData,
        inventoryTrends: inventoryData,
        topSellingProducts: topSelling,
        lowStockAlert: lowStock
      });
    } catch (err) {
      console.error("Error fetching analytics data:", err);
    }
  };

  // Generate mock analytics data based on products
  const generateCategoryData = () => {
    const categoryCounts = products.reduce((acc, product) => {
      const category = product.category || "Uncategorized";
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category]++;
      return acc;
    }, {});

    return Object.keys(categoryCounts).map(category => ({
      name: category,
      value: categoryCounts[category]
    }));
  };

  const generatePriceDistribution = () => {
    const priceRanges = {
      "₹0-₹500": 0,
      "₹500-₹1000": 0,
      "₹1000-₹2000": 0,
      "₹2000-₹5000": 0,
      "₹5000+": 0
    };

    products.forEach(product => {
      const price = product.sale_price;
      if (price <= 500) priceRanges["₹0-₹500"]++;
      else if (price <= 1000) priceRanges["₹500-₹1000"]++;
      else if (price <= 2000) priceRanges["₹1000-₹2000"]++;
      else if (price <= 5000) priceRanges["₹2000-₹5000"]++;
      else priceRanges["₹5000+"]++;
    });

    return Object.keys(priceRanges).map(range => ({
      name: range,
      value: priceRanges[range]
    }));
  };

  const generateInventoryTrends = () => {
    // Mock data for inventory trends over time
    return [
      { name: 'Jan', inventory: 4000, sales: 2400, returns: 400 },
      { name: 'Feb', inventory: 3000, sales: 1398, returns: 210 },
      { name: 'Mar', inventory: 2000, sales: 9800, returns: 290 },
      { name: 'Apr', inventory: 2780, sales: 3908, returns: 300 },
      { name: 'May', inventory: 1890, sales: 4800, returns: 180 },
      { name: 'Jun', inventory: 2390, sales: 3800, returns: 220 }
    ];
  };

  const generateTopSellingProducts = () => {
    // Generate mock data for top selling products
    return products
      .slice(0, 5)
      .map(product => ({
        name: product.product_name,
        sales: Math.floor(Math.random() * 1000) + 100,
        revenue: (product.sale_price * (Math.floor(Math.random() * 1000) + 100))
      }))
      .sort((a, b) => b.sales - a.sales);
  };

  const generateLowStockAlerts = () => {
    // Find products with low quantity
    return products
      .filter(product => product.quantity < 10)
      .map(product => ({
        name: product.product_name,
        quantity: product.quantity,
        category: product.category || "Uncategorized"
      }))
      .slice(0, 5);
  };

  // Group and filter products
  const groupedProducts = useMemo(() => {
    return products.reduce((acc, product) => {
      const category = product.category || "Uncategorized";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    }, {});
  }, [products]);

  const filteredGroupedProducts = useMemo(() => {
    const filtered = Object.keys(groupedProducts).filter(category =>
      category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort categories
    return filtered.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.localeCompare(b);
      } else {
        return b.localeCompare(a);
      }
    });
  }, [groupedProducts, searchQuery, sortOrder]);

  // Sort products within categories
  const getSortedProducts = (category) => {
    const productsInCategory = [...groupedProducts[category]];
    
    switch (sortBy) {
      case "name":
        return productsInCategory.sort((a, b) => 
          sortOrder === "asc" 
            ? a.product_name.localeCompare(b.product_name)
            : b.product_name.localeCompare(a.product_name)
        );
      case "price":
        return productsInCategory.sort((a, b) => 
          sortOrder === "asc" 
            ? a.sale_price - b.sale_price
            : b.sale_price - a.sale_price
        );
      case "quantity":
        return productsInCategory.sort((a, b) => 
          sortOrder === "asc" 
            ? a.quantity - b.quantity
            : b.quantity - a.quantity
        );
      default:
        return productsInCategory;
    }
  };

  const toggleCategory = (category) => {
    setExpandedCategories({
      ...expandedCategories,
      [category]: !expandedCategories[category]
    });
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handlePriceRangeChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(e.target.value);
    setPriceRange(newRange);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            <span className="text-blue-600">Product Catalog</span>
          </h1>
          <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
            Explore our product collection with advanced filtering and analytics
          </p>
          
          {/* View Mode Toggle */}
          <div className="flex justify-center mt-6 space-x-4">
            <button 
              onClick={() => setViewMode("grid")}
              className={`px-5 py-2 rounded-md flex items-center space-x-2 transition-all ${
                viewMode === "grid" 
                  ? "bg-blue-600 text-white shadow-md" 
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <FaBoxOpen />
              <span>Products</span>
            </button>
            <button 
              onClick={() => setViewMode("analytics")}
              className={`px-5 py-2 rounded-md flex items-center space-x-2 transition-all ${
                viewMode === "analytics" 
                  ? "bg-blue-600 text-white shadow-md" 
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <FaChartPie />
              <span>Analytics</span>
            </button>
          </div>
        </motion.div>

        {/* Products View */}
        {viewMode === "grid" && (
          <>
            {/* Search & Filter Bar */}
            <motion.div 
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl mx-auto mb-8"
            >
              <div className="bg-white rounded-lg p-5 shadow-md border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Search */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search categories..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FaSearch />
                    </div>
                  </div>

                  {/* Sort Options */}
                  <div className="flex space-x-2">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="name">Sort by Name</option>
                      <option value="price">Sort by Price</option>
                      <option value="quantity">Sort by Quantity</option>
                    </select>
                    <button 
                      onClick={toggleSortOrder}
                      className="flex items-center justify-center w-10 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md border border-gray-300 transition-colors"
                    >
                      {sortOrder === "asc" ? <FaArrowUp /> : <FaArrowDown />}
                    </button>
                  </div>

                  {/* Price Range Filter */}
                  <div className="relative">
                    <div className="flex items-center space-x-3">
                      <span className="text-gray-600 text-sm">₹{priceRange[0]}</span>
                      <input
                        type="range"
                        min="0"
                        max="10000"
                        step="500"
                        value={priceRange[0]}
                        onChange={(e) => handlePriceRangeChange(e, 0)}
                        className="flex-grow h-2 bg-gray-200 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
                      />
                      <span className="text-gray-600 text-sm">₹{priceRange[1]}</span>
                    </div>
                    <div className="absolute -bottom-5 left-0 right-0 text-xs text-center text-gray-500">
                      Price Range Filter
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Error Message */}
            {errorMessage && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-2xl mx-auto p-4 bg-red-100 text-red-700 border border-red-200 rounded-md mb-6"
              >
                <p>{errorMessage}</p>
              </motion.div>
            )}

            {/* Loading Indicator */}
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
              </div>
            ) : (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              >
                {filteredGroupedProducts.length > 0 ? (
                  filteredGroupedProducts.map((category) => (
                    <motion.div
                      key={category}
                      variants={itemVariants}
                      className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
                    >
                      <div 
                        className="p-4 cursor-pointer flex justify-between items-center border-b border-gray-200 bg-gray-50"
                        onClick={() => toggleCategory(category)}
                      >
                        <h3 className="text-lg font-medium text-gray-800 flex items-center">
                          <span className="w-6 h-6 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-3 text-xs font-semibold">
                            {groupedProducts[category].length}
                          </span>
                          {category}
                        </h3>
                        <div className="text-gray-500">
                          {expandedCategories[category] ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                      </div>
                      
                      <AnimatePresence>
                        {expandedCategories[category] && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="p-4"
                          >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {getSortedProducts(category)
                                .filter(product => 
                                  product.sale_price >= priceRange[0] && 
                                  product.sale_price <= priceRange[1]
                                )
                                .map((product) => (
                                <motion.div
                                  key={product._id}
                                  whileHover={{ 
                                    scale: 1.01,
                                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                                  }}
                                  className="bg-white rounded-md p-4 border border-gray-200 relative shadow-sm hover:shadow transition-all"
                                >
                                  {/* Product badge */}
                                  {product.quantity < 10 && (
                                    <div className="absolute top-2 right-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded-md font-medium">
                                      Low Stock
                                    </div>
                                  )}
                                  
                                  <h4 className="text-lg font-medium text-gray-800 mb-2 pb-2 border-b border-gray-100">
                                    {product.product_name}
                                  </h4>
                                  
                                  <div className="space-y-2 text-sm">
                                    <p className="flex justify-between">
                                      <span className="text-gray-500">Sale Price:</span>
                                      <span className="text-blue-600 font-semibold">₹{product.sale_price}</span>
                                    </p>
                                    <p className="flex justify-between">
                                      <span className="text-gray-500">Tax:</span>
                                      <span>{product.tax}%</span>
                                    </p>
                                    <p className="flex justify-between">
                                      <span className="text-gray-500">Discount:</span>
                                      <span className="text-green-600">{product.discount}%</span>
                                    </p>
                                    <p className="flex justify-between">
                                      <span className="text-gray-500">Quantity:</span>
                                      <span className={`${product.quantity < 10 ? 'text-red-600' : 'text-gray-800'}`}>
                                        {product.quantity} {product.units}
                                      </span>
                                    </p>
                                  </div>
                                  
                                  {/* Quick actions */}
                                  <div className="mt-4 pt-3 border-t border-gray-100 flex justify-end">
                                    <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors">
                                      View Details
                                    </button>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full text-center p-12"
                  >
                    <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-md">
                      <h3 className="text-xl font-medium text-gray-800 mb-2">No Categories Found</h3>
                      <p className="text-gray-600">Try a different search term or check back later.</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </>
        )}

        {/* Analytics View */}
        {viewMode === "analytics" && (
          <div className="bg-white rounded-lg border border-gray-200 shadow-md p-6 mb-8">
            {/* Analytics Controls */}
            <div className="mb-8 flex flex-wrap justify-between items-center">
              <div className="flex space-x-3 mb-4 lg:mb-0 overflow-x-auto">
                <button 
                  onClick={() => setAnalyticsActiveTab("overview")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                    analyticsActiveTab === "overview" 
                      ? "bg-blue-600 text-white shadow-sm" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Overview
                </button>
                <button 
                  onClick={() => setAnalyticsActiveTab("categories")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                    analyticsActiveTab === "categories" 
                      ? "bg-blue-600 text-white shadow-sm" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Categories
                </button>
                <button 
                  onClick={() => setAnalyticsActiveTab("inventory")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                    analyticsActiveTab === "inventory" 
                      ? "bg-blue-600 text-white shadow-sm" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Inventory
                </button>
                <button 
                  onClick={() => setAnalyticsActiveTab("performance")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                    analyticsActiveTab === "performance" 
                      ? "bg-blue-600 text-white shadow-sm" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Performance
                </button>
              </div>
              
              <div>
                <select
                  value={analyticsTimeRange}
                  onChange={(e) => setAnalyticsTimeRange(Number(e.target.value))}
                  className="px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value={7}>Last 7 days</option>
                  <option value={30}>Last 30 days</option>
                  <option value={90}>Last 3 months</option>
                  <option value={365}>Last year</option>
                </select>
              </div>
            </div>
            
            {/* Analytics Content */}
            <div>
              {/* Overview Tab */}
              {analyticsActiveTab === "overview" && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Product Overview</h2>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                      <h3 className="text-sm font-medium text-gray-500 mb-1">Total Products</h3>
                      <p className="text-2xl font-bold text-gray-800">{products.length}</p>
                      <div className="mt-2 text-xs text-gray-400">Across all categories</div>
                    </div>
                    
                    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                      <h3 className="text-sm font-medium text-gray-500 mb-1">Categories</h3>
                      <p className="text-2xl font-bold text-gray-800">{Object.keys(groupedProducts).length}</p>
                      <div className="mt-2 text-xs text-gray-400">Product classifications</div>
                    </div>
                    
                    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                      <h3 className="text-sm font-medium text-gray-500 mb-1">Low Stock</h3>
                      <p className="text-2xl font-bold text-red-600">{analyticsData.lowStockAlert.length}</p>
                      <div className="mt-2 text-xs text-gray-400">Products need attention</div>
                    </div>
                    
                    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                      <h3 className="text-sm font-medium text-gray-500 mb-1">Avg. Price</h3>
                      <p className="text-2xl font-bold text-gray-800">₹{Math.floor(products.reduce((sum, item) => sum + item.sale_price, 0) / products.length || 0)}</p>
                      <div className="mt-2 text-xs text-gray-400">Per product</div>
                    </div>
                  </div>
                  
                  {/* Charts Overview */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Category Distribution */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                      <h3 className="text-lg font-medium text-gray-800 mb-4">Product Categories</h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={analyticsData.categoryDistribution}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                            >
                              {analyticsData.categoryDistribution.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    
                    {/* Top Selling Products */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                      <h3 className="text-lg font-medium text-gray-800 mb-4">Top Selling Products</h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={analyticsData.topSellingProducts}
                            layout="vertical"
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" width={100} />
                            <Tooltip 
                              contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderColor: '#e5e7eb' }}
                            />
                            <Legend />
                            <Bar dataKey="sales" fill="#2E7DD1" name="Units Sold" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Categories Tab */}
              {analyticsActiveTab === "categories" && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Category Insights</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Category Distribution */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                      <h3 className="text-lg font-medium text-gray-800 mb-4">Category Distribution</h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={analyticsData.categoryDistribution}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                            >
                              {analyticsData.categoryDistribution.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip 
                              contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderColor: '#e5e7eb' }}
                            />
                            <Legend />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    
                    {/* Price Distribution */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                      <h3 className="text-lg font-medium text-gray-800 mb-4">Price Distribution</h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={analyticsData.priceDistribution}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip 
                              contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderColor: '#e5e7eb' }}
                            />
                            <Legend />
                            <Bar dataKey="value" fill="#67B7DC" name="Products" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Inventory Tab */}
              {analyticsActiveTab === "inventory" && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Inventory Insights</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Inventory Trends */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                      <h3 className="text-lg font-medium text-gray-800 mb-4">Inventory Trends</h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart
                            data={analyticsData.inventoryTrends}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip 
                              contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderColor: '#e5e7eb' }}
                            />
                            <Legend />
                            <Line type="monotone" dataKey="inventory" stroke="#8BC34A" name="Inventory" />
                            <Line type="monotone" dataKey="sales" stroke="#FF8A65" name="Sales" />
                            <Line type="monotone" dataKey="returns" stroke="#9575CD" name="Returns" />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    
                    {/* Low Stock Alerts */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                      <h3 className="text-lg font-medium text-gray-800 mb-4">Low Stock Alerts</h3>
                      <div className="space-y-3">
                        {analyticsData.lowStockAlert.map((product, index) => (
                          <div key={index} className="bg-gray-50 p-3 rounded-md">
                            <h4 className="text-sm font-medium text-gray-800">{product.name}</h4>
                            <p className="text-xs text-gray-500">Category: {product.category}</p>
                            <p className="text-xs text-red-600">Quantity: {product.quantity}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Performance Tab */}
              {analyticsActiveTab === "performance" && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Performance Insights</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Top Selling Products */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                      <h3 className="text-lg font-medium text-gray-800 mb-4">Top Selling Products</h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={analyticsData.topSellingProducts}
                            layout="vertical"
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" width={100} />
                            <Tooltip 
                              contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderColor: '#e5e7eb' }}
                            />
                            <Legend />
                            <Bar dataKey="sales" fill="#4DB6AC" name="Units Sold" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    
                    {/* Revenue by Product */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                      <h3 className="text-lg font-medium text-gray-800 mb-4">Revenue by Product</h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={analyticsData.topSellingProducts}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip 
                              contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderColor: '#e5e7eb' }}
                            />
                            <Legend />
                            <Bar dataKey="revenue" fill="#FFB74D" name="Revenue" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchProductsByCategory;