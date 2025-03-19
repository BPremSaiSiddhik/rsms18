// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import { Bar } from "react-chartjs-2";
// // // // // // import { Chart as ChartJS } from "chart.js/auto";
// // // // // // import "./ProductSales.css";

// // // // // // const ProductSales = () => {
// // // // // //   const [products, setProducts] = useState([]);
// // // // // //   const [selectedProductId, setSelectedProductId] = useState("");
// // // // // //   const [productSales, setProductSales] = useState([]);
// // // // // //   const [bestSellingProduct, setBestSellingProduct] = useState({});
// // // // // //   const [error, setError] = useState(null);

// // // // // //   // Get storeId directly from localStorage
// // // // // //   const storeId = localStorage.getItem("storeId");

// // // // // //   // Fetch products for the store
// // // // // //   useEffect(() => {
// // // // // //     const fetchProducts = async () => {
// // // // // //       if (!storeId) {
// // // // // //         setError("Store ID is required.");
// // // // // //         return;
// // // // // //       }

// // // // // //       try {
// // // // // //         const response = await fetch(`http://localhost:5010/products?storeId=${storeId}`);
// // // // // //         if (!response.ok) {
// // // // // //           throw new Error("Failed to fetch products.");
// // // // // //         }
// // // // // //         const data = await response.json();
// // // // // //         console.log("Fetched products:", data);  // Debug log
// // // // // //         setProducts(data);
// // // // // //       } catch (error) {
// // // // // //         setError(error.message);
// // // // // //       }
// // // // // //     };

// // // // // //     if (storeId) {
// // // // // //       fetchProducts();
// // // // // //     }
// // // // // //   }, [storeId]);

// // // // // //   // Fetch sales data for the selected product
// // // // // //   useEffect(() => {
// // // // // //     const fetchProductSales = async () => {
// // // // // //       if (!selectedProductId) return;

// // // // // //       try {
// // // // // //         const response = await fetch(`http://localhost:5010/api/product-sales?storeId=${storeId}&productName=${selectedProductId}`);
// // // // // //         const data = await response.json();
// // // // // //         console.log("Fetched product sales data:", data);  // Debug log
// // // // // //         if (data.sales_data) {
// // // // // //           setProductSales(data.sales_data);
// // // // // //         } else {
// // // // // //           setError(data.message || "No sales data found.");
// // // // // //         }
// // // // // //       } catch (error) {
// // // // // //         setError("Failed to fetch product sales.");
// // // // // //       }
// // // // // //     };

// // // // // //     if (selectedProductId) {
// // // // // //       fetchProductSales();
// // // // // //     }
// // // // // //   }, [selectedProductId, storeId]);

// // // // // //   // Fetch best-selling product
// // // // // //   useEffect(() => {
// // // // // //     const fetchBestSellingProduct = async () => {
// // // // // //       try {
// // // // // //         const response = await fetch(`http://localhost:5010/api/best-selling-product?storeId=${storeId}`);
// // // // // //         const data = await response.json();
// // // // // //         console.log("Fetched best-selling product:", data);  // Debug log
// // // // // //         if (data.product_name) {
// // // // // //           setBestSellingProduct(data);
// // // // // //         } else {
// // // // // //           setError(data.message || "No sales data found.");
// // // // // //         }
// // // // // //       } catch (error) {
// // // // // //         setError("Failed to fetch best-selling product.");
// // // // // //       }
// // // // // //     };

// // // // // //     if (storeId) {
// // // // // //       fetchBestSellingProduct();
// // // // // //     }
// // // // // //   }, [storeId]);

// // // // // //   // Prepare data for bar chart
// // // // // //   const chartData = {
// // // // // //     labels: productSales.map((sale) => sale.date),
// // // // // //     datasets: [
// // // // // //       {
// // // // // //         label: "Quantity Sold",
// // // // // //         data: productSales.map((sale) => sale.quantity),
// // // // // //         backgroundColor: "rgba(75, 192, 192, 0.2)",
// // // // // //         borderColor: "rgba(75, 192, 192, 1)",
// // // // // //         borderWidth: 1,
// // // // // //       },
// // // // // //     ],
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="product-sales-container max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
// // // // // //       <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">Product Sales Information</h2>

// // // // // //       {error && <p className="text-center text-red-600 mb-4">{error}</p>}

// // // // // //       {/* Select Product Dropdown */}
// // // // // //       <div className="select-product mb-6 flex justify-center items-center gap-4">
// // // // // //         <label htmlFor="product" className="text-lg text-gray-700">Select Product:</label>
// // // // // //         <select
// // // // // //           id="product"
// // // // // //           onChange={(e) => setSelectedProductId(e.target.value)}
// // // // // //           value={selectedProductId}
// // // // // //           className="p-3 w-72 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
// // // // // //         >
// // // // // //           <option value="">Select a product</option>
// // // // // //           {products.map((product) => (
// // // // // //             <option key={product._id} value={product.product_name}>
// // // // // //               {product.product_name}
// // // // // //             </option>
// // // // // //           ))}
// // // // // //         </select>
// // // // // //       </div>

// // // // // //       {/* Product Sales Data */}
// // // // // //       {selectedProductId && productSales.length > 0 && (
// // // // // //         <div className="sales-info bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-teal-500">
// // // // // //           <h3 className="text-center text-xl font-semibold text-gray-800 mb-4">Sales Data for {selectedProductId}</h3>
// // // // // //           <Bar data={chartData} />
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* Best Selling Product */}
// // // // // //       {bestSellingProduct.product_name && (
// // // // // //         <div className="best-selling mt-8 bg-teal-50 p-6 rounded-lg shadow-md border-l-4 border-teal-500">
// // // // // //           <h2 className="text-center text-2xl font-semibold text-teal-600 mb-4">Best Selling Product</h2>
// // // // // //           <div className="text-center text-lg font-semibold text-teal-700">
// // // // // //             <p>Product: <span className="text-gold">{bestSellingProduct.product_name}</span></p>
// // // // // //             <p>Total Quantity Sold: <span className="text-gold">{bestSellingProduct.total_quantity}</span></p>
// // // // // //             <p>Total Sales Amount: <span className="text-gold">₹{bestSellingProduct.total_amount.toFixed(2)}</span></p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ProductSales;
// // // // // import React, { useState, useEffect } from "react";
// // // // // import { Bar } from "react-chartjs-2";
// // // // // import { Chart as ChartJS } from "chart.js/auto";

// // // // // const ProductSales = () => {
// // // // //   const [products, setProducts] = useState([]);
// // // // //   const [selectedProductId, setSelectedProductId] = useState("");
// // // // //   const [productSales, setProductSales] = useState([]);
// // // // //   const [bestSellingProduct, setBestSellingProduct] = useState({});
// // // // //   const [error, setError] = useState(null);

// // // // //   // Get storeId directly from localStorage
// // // // //   const storeId = localStorage.getItem("storeId");

// // // // //   // Fetch products for the store
// // // // //   useEffect(() => {
// // // // //     const fetchProducts = async () => {
// // // // //       if (!storeId) {
// // // // //         setError("Store ID is required.");
// // // // //         return;
// // // // //       }

// // // // //       try {
// // // // //         const response = await fetch(`http://localhost:5010/products?storeId=${storeId}`);
// // // // //         if (!response.ok) {
// // // // //           throw new Error("Failed to fetch products.");
// // // // //         }
// // // // //         const data = await response.json();
// // // // //         setProducts(data);
// // // // //       } catch (error) {
// // // // //         setError(error.message);
// // // // //       }
// // // // //     };

// // // // //     if (storeId) {
// // // // //       fetchProducts();
// // // // //     }
// // // // //   }, [storeId]);

// // // // //   // Fetch sales data for the selected product
// // // // //   useEffect(() => {
// // // // //     const fetchProductSales = async () => {
// // // // //       if (!selectedProductId) return;

// // // // //       try {
// // // // //         const response = await fetch(`http://localhost:5010/api/product-sales?storeId=${storeId}&productName=${selectedProductId}`);
// // // // //         const data = await response.json();
// // // // //         if (data.sales_data) {
// // // // //           setProductSales(data.sales_data);
// // // // //         } else {
// // // // //           setError(data.message || "No sales data found.");
// // // // //         }
// // // // //       } catch (error) {
// // // // //         setError("Failed to fetch product sales.");
// // // // //       }
// // // // //     };

// // // // //     if (selectedProductId) {
// // // // //       fetchProductSales();
// // // // //     }
// // // // //   }, [selectedProductId, storeId]);

// // // // //   // Fetch best-selling product
// // // // //   useEffect(() => {
// // // // //     const fetchBestSellingProduct = async () => {
// // // // //       try {
// // // // //         const response = await fetch(`http://localhost:5010/api/best-selling-product?storeId=${storeId}`);
// // // // //         const data = await response.json();
// // // // //         if (data.product_name) {
// // // // //           setBestSellingProduct(data);
// // // // //         } else {
// // // // //           setError(data.message || "No sales data found.");
// // // // //         }
// // // // //       } catch (error) {
// // // // //         setError("Failed to fetch best-selling product.");
// // // // //       }
// // // // //     };

// // // // //     if (storeId) {
// // // // //       fetchBestSellingProduct();
// // // // //     }
// // // // //   }, [storeId]);

// // // // //   // Prepare data for bar chart
// // // // //   const chartData = {
// // // // //     labels: productSales.map((sale) => sale.date),
// // // // //     datasets: [
// // // // //       {
// // // // //         label: "Quantity Sold",
// // // // //         data: productSales.map((sale) => sale.quantity),
// // // // //         backgroundColor: "rgba(75, 192, 192, 0.2)",
// // // // //         borderColor: "rgba(75, 192, 192, 1)",
// // // // //         borderWidth: 1,
// // // // //       },
// // // // //     ],
// // // // //   };

// // // // //   return (
// // // // //     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
// // // // //       <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">Product Sales Information</h2>

// // // // //       {error && <p className="text-center text-red-600 mb-4">{error}</p>}

// // // // //       {/* Select Product Dropdown */}
// // // // //       <div className="mb-6 flex justify-center items-center gap-4">
// // // // //         <label htmlFor="product" className="text-lg text-gray-700">Select Product:</label>
// // // // //         <select
// // // // //           id="product"
// // // // //           onChange={(e) => setSelectedProductId(e.target.value)}
// // // // //           value={selectedProductId}
// // // // //           className="p-3 w-72 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
// // // // //         >
// // // // //           <option value="">Select a product</option>
// // // // //           {products.map((product) => (
// // // // //             <option key={product._id} value={product.product_name}>
// // // // //               {product.product_name}
// // // // //             </option>
// // // // //           ))}
// // // // //         </select>
// // // // //       </div>

// // // // //       {/* Product Sales Data */}
// // // // //       {selectedProductId && productSales.length > 0 && (
// // // // //         <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-teal-500">
// // // // //           <h3 className="text-center text-xl font-semibold text-gray-800 mb-4">Sales Data for {selectedProductId}</h3>
// // // // //           <Bar data={chartData} />
// // // // //         </div>
// // // // //       )}

// // // // //       {/* Best Selling Product */}
// // // // //       {bestSellingProduct.product_name && (
// // // // //         <div className="mt-8 bg-teal-50 p-6 rounded-lg shadow-md border-l-4 border-teal-500">
// // // // //           <h2 className="text-center text-2xl font-semibold text-teal-600 mb-4">Best Selling Product</h2>
// // // // //           <div className="text-center text-lg font-semibold text-teal-700">
// // // // //             <p>Product: <span className="text-gold">{bestSellingProduct.product_name}</span></p>
// // // // //             <p>Total Quantity Sold: <span className="text-gold">{bestSellingProduct.total_quantity}</span></p>
// // // // //             <p>Total Sales Amount: <span className="text-gold">₹{bestSellingProduct.total_amount.toFixed(2)}</span></p>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ProductSales;


// // // // import React, { useState, useEffect } from "react";
// // // // import { Bar, Line, Doughnut } from "react-chartjs-2";
// // // // import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, ArcElement, Title, Tooltip, Legend, PointElement } from "chart.js";
// // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // Register ChartJS components
// // // // ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, ArcElement, Title, Tooltip, Legend, PointElement);

// // // // const ProductSales = () => {
// // // //   const [products, setProducts] = useState([]);
// // // //   const [selectedProductId, setSelectedProductId] = useState("");
// // // //   const [productSales, setProductSales] = useState([]);
// // // //   const [bestSellingProduct, setBestSellingProduct] = useState({});
// // // //   const [error, setError] = useState(null);
// // // //   const [isLoading, setIsLoading] = useState(false);
// // // //   const [chartType, setChartType] = useState("bar");
// // // //   const [timeRange, setTimeRange] = useState("1w");
// // // //   const [topProducts, setTopProducts] = useState([]);

// // // //   // Get storeId directly from localStorage
// // // //   const storeId = localStorage.getItem("storeId");

// // // //   // Fetch products for the store
// // // //   useEffect(() => {
// // // //     const fetchProducts = async () => {
// // // //       if (!storeId) {
// // // //         setError("Store ID is required.");
// // // //         return;
// // // //       }

// // // //       setIsLoading(true);
// // // //       try {
// // // //         const response = await fetch(`http://localhost:5010/products?storeId=${storeId}`);
// // // //         if (!response.ok) {
// // // //           throw new Error("Failed to fetch products.");
// // // //         }
// // // //         const data = await response.json();
// // // //         setProducts(data);
// // // //         // If we have products and none selected, select the first one
// // // //         if (data.length > 0 && !selectedProductId) {
// // // //           setSelectedProductId(data[0].product_name);
// // // //         }
// // // //       } catch (error) {
// // // //         setError(error.message);
// // // //       } finally {
// // // //         setIsLoading(false);
// // // //       }
// // // //     };

// // // //     if (storeId) {
// // // //       fetchProducts();
// // // //     }
// // // //   }, [storeId]);

// // // //   // Fetch sales data for the selected product
// // // //   useEffect(() => {
// // // //     const fetchProductSales = async () => {
// // // //       if (!selectedProductId) return;

// // // //       setIsLoading(true);
// // // //       try {
// // // //         // Add time range parameter
// // // //         const response = await fetch(`http://localhost:5010/api/product-sales?storeId=${storeId}&productName=${selectedProductId}&timeRange=${timeRange}`);
// // // //         const data = await response.json();
// // // //         if (data.sales_data) {
// // // //           setProductSales(data.sales_data);
// // // //         } else {
// // // //           setError(data.message || "No sales data found.");
// // // //         }
// // // //       } catch (error) {
// // // //         setError("Failed to fetch product sales.");
// // // //       } finally {
// // // //         setIsLoading(false);
// // // //       }
// // // //     };

// // // //     if (selectedProductId) {
// // // //       fetchProductSales();
// // // //     }
// // // //   }, [selectedProductId, storeId, timeRange]);

// // // //   // Fetch best-selling product
// // // //   useEffect(() => {
// // // //     const fetchBestSellingProduct = async () => {
// // // //       setIsLoading(true);
// // // //       try {
// // // //         const response = await fetch(`http://localhost:5010/api/best-selling-product?storeId=${storeId}`);
// // // //         const data = await response.json();
// // // //         if (data.product_name) {
// // // //           setBestSellingProduct(data);
// // // //         } else {
// // // //           setError(data.message || "No sales data found.");
// // // //         }
// // // //       } catch (error) {
// // // //         setError("Failed to fetch best-selling product.");
// // // //       } finally {
// // // //         setIsLoading(false);
// // // //       }
// // // //     };

// // // //     if (storeId) {
// // // //       fetchBestSellingProduct();
// // // //     }
// // // //   }, [storeId]);

// // // //   // Fetch top 5 products
// // // //   useEffect(() => {
// // // //     const fetchTopProducts = async () => {
// // // //       setIsLoading(true);
// // // //       try {
// // // //         const response = await fetch(`http://localhost:5010/api/top-products?storeId=${storeId}&limit=5`);
// // // //         const data = await response.json();
// // // //         if (data.products) {
// // // //           setTopProducts(data.products);
// // // //         }
// // // //       } catch (error) {
// // // //         console.error("Failed to fetch top products:", error);
// // // //       } finally {
// // // //         setIsLoading(false);
// // // //       }
// // // //     };

// // // //     if (storeId) {
// // // //       fetchTopProducts();
// // // //     }
// // // //   }, [storeId]);

// // // //   // Prepare data for charts
// // // //   const chartData = {
// // // //     labels: productSales.map((sale) => sale.date),
// // // //     datasets: [
// // // //       {
// // // //         label: "Quantity Sold",
// // // //         data: productSales.map((sale) => sale.quantity),
// // // //         backgroundColor: "rgba(53, 162, 235, 0.5)",
// // // //         borderColor: "rgba(53, 162, 235, 1)",
// // // //         borderWidth: 2,
// // // //         tension: 0.4,
// // // //       },
// // // //     ],
// // // //   };

// // // //   // Doughnut chart data for top products
// // // //   const doughnutData = {
// // // //     labels: topProducts.map(product => product.product_name),
// // // //     datasets: [
// // // //       {
// // // //         data: topProducts.map(product => product.total_quantity),
// // // //         backgroundColor: [
// // // //           'rgba(255, 99, 132, 0.7)',
// // // //           'rgba(54, 162, 235, 0.7)',
// // // //           'rgba(255, 206, 86, 0.7)',
// // // //           'rgba(75, 192, 192, 0.7)',
// // // //           'rgba(153, 102, 255, 0.7)',
// // // //         ],
// // // //         borderColor: [
// // // //           'rgba(255, 99, 132, 1)',
// // // //           'rgba(54, 162, 235, 1)',
// // // //           'rgba(255, 206, 86, 1)',
// // // //           'rgba(75, 192, 192, 1)',
// // // //           'rgba(153, 102, 255, 1)',
// // // //         ],
// // // //         borderWidth: 1,
// // // //       },
// // // //     ],
// // // //   };

// // // //   // Chart options
// // // //   const chartOptions = {
// // // //     responsive: true,
// // // //     plugins: {
// // // //       legend: {
// // // //         position: 'top',
// // // //       },
// // // //       title: {
// // // //         display: true,
// // // //         text: `Sales Data for ${selectedProductId}`,
// // // //         font: {
// // // //           size: 16,
// // // //           weight: 'bold',
// // // //         }
// // // //       },
// // // //       tooltip: {
// // // //         backgroundColor: 'rgba(0, 0, 0, 0.8)',
// // // //         titleFont: {
// // // //           size: 14,
// // // //         },
// // // //         bodyFont: {
// // // //           size: 13,
// // // //         },
// // // //         padding: 12,
// // // //         cornerRadius: 6,
// // // //       }
// // // //     },
// // // //     scales: {
// // // //       y: {
// // // //         beginAtZero: true,
// // // //         grid: {
// // // //           color: 'rgba(200, 200, 200, 0.2)',
// // // //         },
// // // //         ticks: {
// // // //           font: {
// // // //             size: 12,
// // // //           }
// // // //         }
// // // //       },
// // // //       x: {
// // // //         grid: {
// // // //           display: false,
// // // //         },
// // // //         ticks: {
// // // //           font: {
// // // //             size: 12,
// // // //           }
// // // //         }
// // // //       }
// // // //     },
// // // //     animation: {
// // // //       duration: 1000,
// // // //       easing: 'easeInOutQuart'
// // // //     }
// // // //   };

// // // //   const doughnutOptions = {
// // // //     responsive: true,
// // // //     plugins: {
// // // //       legend: {
// // // //         position: 'right',
// // // //       },
// // // //       title: {
// // // //         display: true,
// // // //         text: 'Top Selling Products',
// // // //         font: {
// // // //           size: 16,
// // // //           weight: 'bold',
// // // //         }
// // // //       }
// // // //     },
// // // //     cutout: '70%'
// // // //   };

// // // //   // Skeletons for loading states
// // // //   const LoadingSkeleton = () => (
// // // //     <div className="animate-pulse">
// // // //       <div className="h-8 bg-gray-200 rounded w-full mb-4"></div>
// // // //       <div className="h-64 bg-gray-200 rounded w-full"></div>
// // // //     </div>
// // // //   );

// // // //   return (
// // // //     <motion.div 
// // // //       initial={{ opacity: 0 }}
// // // //       animate={{ opacity: 1 }}
// // // //       transition={{ duration: 0.5 }}
// // // //       className="max-w-6xl mx-auto p-8 bg-gradient-to-b from-white to-gray-50 shadow-xl rounded-xl"
// // // //     >
// // // //       <motion.div 
// // // //         initial={{ y: -20 }}
// // // //         animate={{ y: 0 }}
// // // //         transition={{ duration: 0.5 }}
// // // //         className="mb-8"
// // // //       >
// // // //         <h2 className="text-center text-3xl font-bold text-gray-800 mb-2">Product Sales Dashboard</h2>
// // // //         <p className="text-center text-gray-500">Track and analyze your product performance</p>
// // // //       </motion.div>

// // // //       {error && (
// // // //         <motion.div 
// // // //           initial={{ opacity: 0, y: 10 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           className="p-4 mb-6 bg-red-50 border-l-4 border-red-500 text-red-700 rounded"
// // // //         >
// // // //           <div className="flex items-center">
// // // //             <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
// // // //               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
// // // //             </svg>
// // // //             {error}
// // // //           </div>
// // // //         </motion.div>
// // // //       )}

// // // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
// // // //         {/* Controls Section */}
// // // //         <motion.div 
// // // //           initial={{ x: -20, opacity: 0 }}
// // // //           animate={{ x: 0, opacity: 1 }}
// // // //           transition={{ delay: 0.1, duration: 0.4 }}
// // // //           className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md border border-gray-100"
// // // //         >
// // // //           <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Dashboard Controls</h3>
          
// // // //           {/* Product Selection */}
// // // //           <div className="mb-6">
// // // //             <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">Select Product:</label>
// // // //             <div className="relative">
// // // //               <select
// // // //                 id="product"
// // // //                 onChange={(e) => setSelectedProductId(e.target.value)}
// // // //                 value={selectedProductId}
// // // //                 className="block w-full pl-3 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md transition-all duration-200 bg-gray-50 hover:bg-gray-100"
// // // //                 disabled={isLoading}
// // // //               >
// // // //                 <option value="">Select a product</option>
// // // //                 {products.map((product) => (
// // // //                   <option key={product._id} value={product.product_name}>
// // // //                     {product.product_name}
// // // //                   </option>
// // // //                 ))}
// // // //               </select>
// // // //               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// // // //                 <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
// // // //                   <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
// // // //                 </svg>
// // // //               </div>
// // // //             </div>
// // // //           </div>
          
// // // //           {/* Chart Type Selection */}
// // // //           <div className="mb-6">
// // // //             <label className="block text-sm font-medium text-gray-700 mb-2">Chart Type:</label>
// // // //             <div className="grid grid-cols-2 gap-2">
// // // //               <button
// // // //                 onClick={() => setChartType("bar")}
// // // //                 className={`py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 
// // // //                   ${chartType === "bar" 
// // // //                     ? "bg-blue-600 text-white shadow-md" 
// // // //                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
// // // //               >
// // // //                 Bar Chart
// // // //               </button>
// // // //               <button
// // // //                 onClick={() => setChartType("line")}
// // // //                 className={`py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 
// // // //                   ${chartType === "line" 
// // // //                     ? "bg-blue-600 text-white shadow-md" 
// // // //                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
// // // //               >
// // // //                 Line Chart
// // // //               </button>
// // // //             </div>
// // // //           </div>
          
// // // //           {/* Time Range Selection */}
// // // //           <div className="mb-6">
// // // //             <label className="block text-sm font-medium text-gray-700 mb-2">Time Range:</label>
// // // //             <div className="grid grid-cols-3 gap-2">
// // // //               <button
// // // //                 onClick={() => setTimeRange("1w")}
// // // //                 className={`py-2 px-2 rounded-md text-sm font-medium transition-all duration-200 
// // // //                   ${timeRange === "1w" 
// // // //                     ? "bg-blue-600 text-white shadow-md" 
// // // //                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
// // // //               >
// // // //                 1 Week
// // // //               </button>
// // // //               <button
// // // //                 onClick={() => setTimeRange("1m")}
// // // //                 className={`py-2 px-2 rounded-md text-sm font-medium transition-all duration-200 
// // // //                   ${timeRange === "1m" 
// // // //                     ? "bg-blue-600 text-white shadow-md" 
// // // //                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
// // // //               >
// // // //                 1 Month
// // // //               </button>
// // // //               <button
// // // //                 onClick={() => setTimeRange("3m")}
// // // //                 className={`py-2 px-2 rounded-md text-sm font-medium transition-all duration-200 
// // // //                   ${timeRange === "3m" 
// // // //                     ? "bg-blue-600 text-white shadow-md" 
// // // //                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
// // // //               >
// // // //                 3 Months
// // // //               </button>
// // // //             </div>
// // // //           </div>
          
// // // //           {/* Best Selling Product Card */}
// // // //           {bestSellingProduct.product_name && (
// // // //             <motion.div 
// // // //               initial={{ opacity: 0, y: 10 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ delay: 0.3, duration: 0.5 }}
// // // //               className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-4 rounded-lg shadow-lg"
// // // //             >
// // // //               <h3 className="text-lg font-semibold mb-3 flex items-center">
// // // //                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
// // // //                   <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
// // // //                 </svg>
// // // //                 Top Performing Product
// // // //               </h3>
// // // //               <div className="pl-2">
// // // //                 <p className="mb-1 font-medium">{bestSellingProduct.product_name}</p>
// // // //                 <div className="flex justify-between text-teal-100 text-sm mb-1">
// // // //                   <span>Total Sold:</span>
// // // //                   <span className="font-bold text-white">{bestSellingProduct.total_quantity}</span>
// // // //                 </div>
// // // //                 <div className="flex justify-between text-teal-100 text-sm">
// // // //                   <span>Revenue:</span>
// // // //                   <span className="font-bold text-white">₹{bestSellingProduct.total_amount.toFixed(2)}</span>
// // // //                 </div>
// // // //               </div>
// // // //             </motion.div>
// // // //           )}
// // // //         </motion.div>

// // // //         {/* Product Sales Chart */}
// // // //         <motion.div 
// // // //           initial={{ y: 20, opacity: 0 }}
// // // //           animate={{ y: 0, opacity: 1 }}
// // // //           transition={{ delay: 0.2, duration: 0.4 }}
// // // //           className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md border border-gray-100"
// // // //         >
// // // //           <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">Sales Performance</h3>
          
// // // //           <AnimatePresence mode="wait">
// // // //             {isLoading ? (
// // // //               <LoadingSkeleton key="loading" />
// // // //             ) : selectedProductId && productSales.length > 0 ? (
// // // //               <motion.div
// // // //                 key="chart"
// // // //                 initial={{ opacity: 0 }}
// // // //                 animate={{ opacity: 1 }}
// // // //                 exit={{ opacity: 0 }}
// // // //                 transition={{ duration: 0.3 }}
// // // //                 className="h-64 lg:h-80"
// // // //               >
// // // //                 {chartType === "bar" && <Bar data={chartData} options={chartOptions} />}
// // // //                 {chartType === "line" && <Line data={chartData} options={chartOptions} />}
// // // //               </motion.div>
// // // //             ) : (
// // // //               <motion.div
// // // //                 key="empty"
// // // //                 initial={{ opacity: 0 }}
// // // //                 animate={{ opacity: 1 }}
// // // //                 exit={{ opacity: 0 }}
// // // //                 transition={{ duration: 0.3 }}
// // // //                 className="flex flex-col items-center justify-center h-64 text-gray-500"
// // // //               >
// // // //                 <svg className="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
// // // //                 </svg>
// // // //                 <p>Select a product to view sales data</p>
// // // //               </motion.div>
// // // //             )}
// // // //           </AnimatePresence>
// // // //         </motion.div>
// // // //       </div>
      
// // // //       {/* Bottom section for top products */}
// // // //       <motion.div 
// // // //         initial={{ y: 20, opacity: 0 }}
// // // //         animate={{ y: 0, opacity: 1 }}
// // // //         transition={{ delay: 0.3, duration: 0.4 }}
// // // //         className="grid grid-cols-1 lg:grid-cols-2 gap-8"
// // // //       >
// // // //         {/* Top Products Doughnut Chart */}
// // // //         <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
// // // //           <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">Top Products Distribution</h3>
// // // //           {isLoading ? (
// // // //             <LoadingSkeleton />
// // // //           ) : topProducts.length > 0 ? (
// // // //             <div className="h-64 lg:h-72">
// // // //               <Doughnut data={doughnutData} options={doughnutOptions} />
// // // //             </div>
// // // //           ) : (
// // // //             <div className="flex flex-col items-center justify-center h-64 text-gray-500">
// // // //               <p>No product data available</p>
// // // //             </div>
// // // //           )}
// // // //         </div>
        
// // // //         {/* Top Products List */}
// // // //         <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
// // // //           <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">Top Performing Products</h3>
// // // //           {isLoading ? (
// // // //             <div className="animate-pulse space-y-3">
// // // //               {[...Array(5)].map((_, i) => (
// // // //                 <div key={i} className="flex items-center p-2">
// // // //                   <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
// // // //                   <div className="ml-4 flex-1">
// // // //                     <div className="h-4 bg-gray-200 rounded w-3/4"></div>
// // // //                     <div className="mt-2 h-3 bg-gray-200 rounded w-1/2"></div>
// // // //                   </div>
// // // //                   <div className="h-6 bg-gray-200 rounded w-16"></div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           ) : topProducts.length > 0 ? (
// // // //             <div className="space-y-3">
// // // //               {topProducts.map((product, index) => (
// // // //                 <motion.div 
// // // //                   key={product.product_name}
// // // //                   initial={{ x: -10, opacity: 0 }}
// // // //                   animate={{ x: 0, opacity: 1 }}
// // // //                   transition={{ delay: index * 0.1, duration: 0.3 }}
// // // //                   className={`flex items-center justify-between p-3 rounded-lg border ${index === 0 ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'}`}
// // // //                 >
// // // //                   <div className="flex items-center">
// // // //                     <div className={`flex items-center justify-center h-8 w-8 rounded-full ${index === 0 ? 'bg-blue-500' : 'bg-gray-500'} text-white font-bold text-sm`}>
// // // //                       {index + 1}
// // // //                     </div>
// // // //                     <div className="ml-3">
// // // //                       <p className="font-medium text-gray-800">{product.product_name}</p>
// // // //                       <p className="text-xs text-gray-500">Total Sold: {product.total_quantity}</p>
// // // //                     </div>
// // // //                   </div>
// // // //                   <div className="font-semibold text-right">
// // // //                     ₹{product.total_amount.toFixed(2)}
// // // //                   </div>
// // // //                 </motion.div>
// // // //               ))}
// // // //             </div>
// // // //           ) : (
// // // //             <div className="flex flex-col items-center justify-center h-64 text-gray-500">
// // // //               <p>No product data available</p>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </motion.div>
// // // //     </motion.div>
// // // //   );
// // // // };

// // // // export default ProductSales;
// // // import React, { useState, useEffect } from "react";
// // // import { Bar, Line, Doughnut ,Chart} from "react-chartjs-2";
// // // import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, ArcElement, Title, Tooltip, Legend, PointElement } from "chart.js";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // // Register ChartJS components
// // // ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, ArcElement, Title, Tooltip, Legend, PointElement);

// // // const ProductSales = () => {
// // //   const [products, setProducts] = useState([]);
// // //   const [selectedProductId, setSelectedProductId] = useState("");
// // //   const [productSales, setProductSales] = useState([]);
// // //   const [bestSellingProduct, setBestSellingProduct] = useState({});
// // //   const [error, setError] = useState(null);
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [chartType, setChartType] = useState("bar");
// // //   const [timeRange, setTimeRange] = useState("1w");
// // //   const [topProducts, setTopProducts] = useState([]);
// // //   const [topProductsLoading, setTopProductsLoading] = useState(false);

// // //   // Get storeId directly from localStorage
// // //   const storeId = localStorage.getItem("storeId");

// // //   // Fetch products for the store
// // //   useEffect(() => {
// // //     const fetchProducts = async () => {
// // //       if (!storeId) {
// // //         setError("Store ID is required.");
// // //         return;
// // //       }

// // //       setIsLoading(true);
// // //       try {
// // //         const response = await fetch(`http://localhost:5010/products?storeId=${storeId}`);
// // //         if (!response.ok) {
// // //           throw new Error("Failed to fetch products.");
// // //         }
// // //         const data = await response.json();
// // //         setProducts(data);
// // //         // If we have products and none selected, select the first one
// // //         if (data.length > 0 && !selectedProductId) {
// // //           setSelectedProductId(data[0].product_name);
// // //         }
// // //       } catch (error) {
// // //         setError(error.message);
// // //       } finally {
// // //         setIsLoading(false);
// // //       }
// // //     };

// // //     if (storeId) {
// // //       fetchProducts();
// // //     }
// // //   }, [storeId]);

// // //   // Fetch sales data for the selected product
// // //   useEffect(() => {
// // //     const fetchProductSales = async () => {
// // //       if (!selectedProductId) return;

// // //       setIsLoading(true);
// // //       try {
// // //         // Add time range parameter
// // //         const response = await fetch(`http://localhost:5010/api/product-sales?storeId=${storeId}&productName=${selectedProductId}&timeRange=${timeRange}`);
        
// // //         if (!response.ok) {
// // //           throw new Error("Failed to fetch product sales data.");
// // //         }
        
// // //         const data = await response.json();
        
// // //         if (data.sales_data && Array.isArray(data.sales_data) && data.sales_data.length > 0) {
// // //           setProductSales(data.sales_data);
// // //           setError(null);
// // //         } else {
// // //           // Clear previous sales data
// // //           setProductSales([]);
// // //           setError(`No sales data found for ${selectedProductId}.`);
// // //         }
// // //       } catch (error) {
// // //         setError(error.message);
// // //         // Clear previous sales data on error
// // //         setProductSales([]);
// // //       } finally {
// // //         setIsLoading(false);
// // //       }
// // //     };

// // //     if (selectedProductId) {
// // //       fetchProductSales();
// // //     }
// // //   }, [selectedProductId, storeId, timeRange]);

// // //   // Fetch best-selling product
// // //   useEffect(() => {
// // //     const fetchBestSellingProduct = async () => {
// // //       setIsLoading(true);
// // //       try {
// // //         const response = await fetch(`http://localhost:5010/api/best-selling-product?storeId=${storeId}`);
        
// // //         if (!response.ok) {
// // //           throw new Error("Failed to fetch best-selling product.");
// // //         }
        
// // //         const data = await response.json();
        
// // //         if (data.product_name) {
// // //           setBestSellingProduct(data);
// // //         } else {
// // //           setBestSellingProduct({});
// // //         }
// // //       } catch (error) {
// // //         console.error("Failed to fetch best-selling product:", error);
// // //         setBestSellingProduct({});
// // //       } finally {
// // //         setIsLoading(false);
// // //       }
// // //     };

// // //     if (storeId) {
// // //       fetchBestSellingProduct();
// // //     }
// // //   }, [storeId]);

// // //   // Fetch top 5 products
// // //   useEffect(() => {
// // //     const fetchTopProducts = async () => {
// // //       setTopProductsLoading(true);
// // //       try {
// // //         const response = await fetch(`http://localhost:5010/api/top-products?storeId=${storeId}&limit=5`);
        
// // //         if (!response.ok) {
// // //           throw new Error("Failed to fetch top products.");
// // //         }
        
// // //         const data = await response.json();
        
// // //         if (data.products && Array.isArray(data.products) && data.products.length > 0) {
// // //           setTopProducts(data.products);
// // //         } else {
// // //           setTopProducts([]);
// // //         }
// // //       } catch (error) {
// // //         console.error("Failed to fetch top products:", error);
// // //         setTopProducts([]);
// // //       } finally {
// // //         setTopProductsLoading(false);
// // //       }
// // //     };

// // //     if (storeId) {
// // //       fetchTopProducts();
// // //     }
// // //   }, [storeId]);

// // //   // Prepare data for charts
// // //   const chartData = {
// // //     labels: productSales.map((sale) => sale.date),
// // //     datasets: [
// // //       {
// // //         label: "Quantity Sold",
// // //         data: productSales.map((sale) => sale.quantity),
// // //         backgroundColor: "rgba(53, 162, 235, 0.5)",
// // //         borderColor: "rgba(53, 162, 235, 1)",
// // //         borderWidth: 2,
// // //         tension: 0.4,
// // //       },
// // //     ],
// // //   };

// // //   // Doughnut chart data for top products
// // //   const doughnutData = {
// // //     labels: topProducts.map(product => product.product_name),
// // //     datasets: [
// // //       {
// // //         data: topProducts.map(product => product.total_quantity),
// // //         backgroundColor: [
// // //           'rgba(255, 99, 132, 0.7)',
// // //           'rgba(54, 162, 235, 0.7)',
// // //           'rgba(255, 206, 86, 0.7)',
// // //           'rgba(75, 192, 192, 0.7)',
// // //           'rgba(153, 102, 255, 0.7)',
// // //         ],
// // //         borderColor: [
// // //           'rgba(255, 99, 132, 1)',
// // //           'rgba(54, 162, 235, 1)',
// // //           'rgba(255, 206, 86, 1)',
// // //           'rgba(75, 192, 192, 1)',
// // //           'rgba(153, 102, 255, 1)',
// // //         ],
// // //         borderWidth: 1,
// // //       },
// // //     ],
// // //   };

// // //   // Chart options
// // //   const chartOptions = {
// // //     responsive: true,
// // //     maintainAspectRatio: false,
// // //     plugins: {
// // //       legend: {
// // //         position: 'top',
// // //       },
// // //       title: {
// // //         display: true,
// // //         text: `Sales Data for ${selectedProductId}`,
// // //         font: {
// // //           size: 16,
// // //           weight: 'bold',
// // //         }
// // //       },
// // //       tooltip: {
// // //         backgroundColor: 'rgba(0, 0, 0, 0.8)',
// // //         titleFont: {
// // //           size: 14,
// // //         },
// // //         bodyFont: {
// // //           size: 13,
// // //         },
// // //         padding: 12,
// // //         cornerRadius: 6,
// // //       }
// // //     },
// // //     scales: {
// // //       y: {
// // //         beginAtZero: true,
// // //         grid: {
// // //           color: 'rgba(200, 200, 200, 0.2)',
// // //         },
// // //         ticks: {
// // //           font: {
// // //             size: 12,
// // //           },
// // //           // Adjust the number of ticks to avoid congestion
// // //           maxTicksLimit: 8,
// // //           callback: function(value) {
// // //             return value.toLocaleString();
// // //           }
// // //         }
// // //       },
// // //       x: {
// // //         grid: {
// // //           display: false,
// // //         },
// // //         ticks: {
// // //           font: {
// // //             size: 12,
// // //           },
// // //           // Limit the number of ticks to avoid congestion
// // //           maxTicksLimit: 10,
// // //           maxRotation: 45,
// // //           minRotation: 45
// // //         }
// // //       }
// // //     },
// // //     animation: {
// // //       duration: 1000,
// // //       easing: 'easeInOutQuart'
// // //     }
// // //   };

// // //   const doughnutOptions = {
// // //     responsive: true,
// // //     maintainAspectRatio: false,
// // //     plugins: {
// // //       legend: {
// // //         position: 'right',
// // //         labels: {
// // //           font: {
// // //             size: 12
// // //           },
// // //           // Limit the length of the labels
// // //           generateLabels: function(chart) {
// // //             const labels = Chart.defaults.plugins.legend.labels.generateLabels(chart);
// // //             return labels.map(label => {
// // //               // Truncate long product names
// // //               if (label.text && label.text.length > 20) {
// // //                 label.text = label.text.substring(0, 17) + '...';
// // //               }
// // //               return label;
// // //             });
// // //           }
// // //         }
// // //       },
// // //       title: {
// // //         display: true,
// // //         text: 'Top Selling Products',
// // //         font: {
// // //           size: 16,
// // //           weight: 'bold',
// // //         }
// // //       },
// // //       tooltip: {
// // //         callbacks: {
// // //           label: function(context) {
// // //             const label = context.label || '';
// // //             const value = context.raw || 0;
// // //             return `${label}: ${value.toLocaleString()} units`;
// // //           }
// // //         }
// // //       }
// // //     },
// // //     cutout: '70%'
// // //   };

// // //   // Skeletons for loading states
// // //   const LoadingSkeleton = () => (
// // //     <div className="animate-pulse">
// // //       <div className="h-8 bg-gray-200 rounded w-full mb-4"></div>
// // //       <div className="h-64 bg-gray-200 rounded w-full"></div>
// // //     </div>
// // //   );

// // //   return (
// // //     <motion.div 
// // //       initial={{ opacity: 0 }}
// // //       animate={{ opacity: 1 }}
// // //       transition={{ duration: 0.5 }}
// // //       className="max-w-6xl mx-auto p-8 bg-gradient-to-b from-white to-gray-50 shadow-xl rounded-xl"
// // //     >
// // //       <motion.div 
// // //         initial={{ y: -20 }}
// // //         animate={{ y: 0 }}
// // //         transition={{ duration: 0.5 }}
// // //         className="mb-8"
// // //       >
// // //         <h2 className="text-center text-3xl font-bold text-gray-800 mb-2">Product Sales Dashboard</h2>
// // //         <p className="text-center text-gray-500">Track and analyze your product performance</p>
// // //       </motion.div>

// // //       {error && (
// // //         <motion.div 
// // //           initial={{ opacity: 0, y: 10 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           className="p-4 mb-6 bg-red-50 border-l-4 border-red-500 text-red-700 rounded"
// // //         >
// // //           <div className="flex items-center">
// // //             <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
// // //               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
// // //             </svg>
// // //             {error}
// // //           </div>
// // //         </motion.div>
// // //       )}

// // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
// // //         {/* Controls Section */}
// // //         <motion.div 
// // //           initial={{ x: -20, opacity: 0 }}
// // //           animate={{ x: 0, opacity: 1 }}
// // //           transition={{ delay: 0.1, duration: 0.4 }}
// // //           className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md border border-gray-100"
// // //         >
// // //           <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Dashboard Controls</h3>
          
// // //           {/* Product Selection */}
// // //           <div className="mb-6">
// // //             <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">Select Product:</label>
// // //             <div className="relative">
// // //               <select
// // //                 id="product"
// // //                 onChange={(e) => setSelectedProductId(e.target.value)}
// // //                 value={selectedProductId}
// // //                 className="block w-full pl-3 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md transition-all duration-200 bg-gray-50 hover:bg-gray-100"
// // //                 disabled={isLoading}
// // //               >
// // //                 <option value="">Select a product</option>
// // //                 {products.map((product) => (
// // //                   <option key={product._id} value={product.product_name}>
// // //                     {product.product_name}
// // //                   </option>
// // //                 ))}
// // //               </select>
// // //               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// // //                 <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
// // //                   <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
// // //                 </svg>
// // //               </div>
// // //             </div>
// // //           </div>
          
// // //           {/* Chart Type Selection */}
// // //           <div className="mb-6">
// // //             <label className="block text-sm font-medium text-gray-700 mb-2">Chart Type:</label>
// // //             <div className="grid grid-cols-2 gap-2">
// // //               <button
// // //                 onClick={() => setChartType("bar")}
// // //                 className={`py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 
// // //                   ${chartType === "bar" 
// // //                     ? "bg-blue-600 text-white shadow-md" 
// // //                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
// // //               >
// // //                 Bar Chart
// // //               </button>
// // //               <button
// // //                 onClick={() => setChartType("line")}
// // //                 className={`py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 
// // //                   ${chartType === "line" 
// // //                     ? "bg-blue-600 text-white shadow-md" 
// // //                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
// // //               >
// // //                 Line Chart
// // //               </button>
// // //             </div>
// // //           </div>
          
// // //           {/* Time Range Selection */}
// // //           <div className="mb-6">
// // //             <label className="block text-sm font-medium text-gray-700 mb-2">Time Range:</label>
// // //             <div className="grid grid-cols-3 gap-2">
// // //               <button
// // //                 onClick={() => setTimeRange("1w")}
// // //                 className={`py-2 px-2 rounded-md text-sm font-medium transition-all duration-200 
// // //                   ${timeRange === "1w" 
// // //                     ? "bg-blue-600 text-white shadow-md" 
// // //                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
// // //               >
// // //                 1 Week
// // //               </button>
// // //               <button
// // //                 onClick={() => setTimeRange("1m")}
// // //                 className={`py-2 px-2 rounded-md text-sm font-medium transition-all duration-200 
// // //                   ${timeRange === "1m" 
// // //                     ? "bg-blue-600 text-white shadow-md" 
// // //                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
// // //               >
// // //                 1 Month
// // //               </button>
// // //               <button
// // //                 onClick={() => setTimeRange("3m")}
// // //                 className={`py-2 px-2 rounded-md text-sm font-medium transition-all duration-200 
// // //                   ${timeRange === "3m" 
// // //                     ? "bg-blue-600 text-white shadow-md" 
// // //                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
// // //               >
// // //                 3 Months
// // //               </button>
// // //             </div>
// // //           </div>
          
// // //           {/* Best Selling Product Card */}
// // //           {bestSellingProduct && bestSellingProduct.product_name ? (
// // //             <motion.div 
// // //               initial={{ opacity: 0, y: 10 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ delay: 0.3, duration: 0.5 }}
// // //               className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-4 rounded-lg shadow-lg"
// // //             >
// // //               <h3 className="text-lg font-semibold mb-3 flex items-center">
// // //                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
// // //                   <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
// // //                 </svg>
// // //                 Top Performing Product
// // //               </h3>
// // //               <div className="pl-2">
// // //                 <p className="mb-1 font-medium">{bestSellingProduct.product_name}</p>
// // //                 <div className="flex justify-between text-teal-100 text-sm mb-1">
// // //                   <span>Total Sold:</span>
// // //                   <span className="font-bold text-white">{bestSellingProduct.total_quantity}</span>
// // //                 </div>
// // //                 <div className="flex justify-between text-teal-100 text-sm">
// // //                   <span>Revenue:</span>
// // //                   <span className="font-bold text-white">₹{bestSellingProduct.total_amount?.toFixed(2) || '0.00'}</span>
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           ) : (
// // //             <div className="bg-gray-100 p-4 rounded-lg text-gray-600 text-center">
// // //               No best-selling product data available
// // //             </div>
// // //           )}
// // //         </motion.div>

// // //         {/* Product Sales Chart */}
// // //         <motion.div 
// // //           initial={{ y: 20, opacity: 0 }}
// // //           animate={{ y: 0, opacity: 1 }}
// // //           transition={{ delay: 0.2, duration: 0.4 }}
// // //           className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md border border-gray-100"
// // //         >
// // //           <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">Sales Performance</h3>
          
// // //           <AnimatePresence mode="wait">
// // //             {isLoading ? (
// // //               <LoadingSkeleton key="loading" />
// // //             ) : selectedProductId && productSales.length > 0 ? (
// // //               <motion.div
// // //                 key="chart"
// // //                 initial={{ opacity: 0 }}
// // //                 animate={{ opacity: 1 }}
// // //                 exit={{ opacity: 0 }}
// // //                 transition={{ duration: 0.3 }}
// // //                 className="h-64 lg:h-80"
// // //               >
// // //                 {chartType === "bar" && <Bar data={chartData} options={chartOptions} />}
// // //                 {chartType === "line" && <Line data={chartData} options={chartOptions} />}
// // //               </motion.div>
// // //             ) : (
// // //               <motion.div
// // //                 key="empty"
// // //                 initial={{ opacity: 0 }}
// // //                 animate={{ opacity: 1 }}
// // //                 exit={{ opacity: 0 }}
// // //                 transition={{ duration: 0.3 }}
// // //                 className="flex flex-col items-center justify-center h-64 text-gray-500"
// // //               >
// // //                 <svg className="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
// // //                 </svg>
// // //                 <p>
// // //                   {selectedProductId 
// // //                     ? `No sales data available for ${selectedProductId}` 
// // //                     : "Select a product to view sales data"}
// // //                 </p>
// // //               </motion.div>
// // //             )}
// // //           </AnimatePresence>
// // //         </motion.div>
// // //       </div>
      
// // //       {/* Bottom section for top products */}
// // //       <motion.div 
// // //         initial={{ y: 20, opacity: 0 }}
// // //         animate={{ y: 0, opacity: 1 }}
// // //         transition={{ delay: 0.3, duration: 0.4 }}
// // //         className="grid grid-cols-1 lg:grid-cols-2 gap-8"
// // //       >
// // //         {/* Top Products Doughnut Chart */}
// // //         <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
// // //           <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">Top Products Distribution</h3>
// // //           {topProductsLoading ? (
// // //             <LoadingSkeleton />
// // //           ) : topProducts.length > 0 ? (
// // //             <div className="h-64 lg:h-72">
// // //               <Doughnut data={doughnutData} options={doughnutOptions} />
// // //             </div>
// // //           ) : (
// // //             <div className="flex flex-col items-center justify-center h-64 text-gray-500">
// // //               <svg className="w-12 h-12 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// // //               </svg>
// // //               <p>No product data available</p>
// // //             </div>
// // //           )}
// // //         </div>
        
// // //         {/* Top Products List */}
// // //         <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
// // //           <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">Top Performing Products</h3>
// // //           {topProductsLoading ? (
// // //             <div className="animate-pulse space-y-3">
// // //               {[...Array(5)].map((_, i) => (
// // //                 <div key={i} className="flex items-center p-2">
// // //                   <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
// // //                   <div className="ml-4 flex-1">
// // //                     <div className="h-4 bg-gray-200 rounded w-3/4"></div>
// // //                     <div className="mt-2 h-3 bg-gray-200 rounded w-1/2"></div>
// // //                   </div>
// // //                   <div className="h-6 bg-gray-200 rounded w-16"></div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           ) : topProducts.length > 0 ? (
// // //             <div className="space-y-3">
// // //               {topProducts.map((product, index) => (
// // //                 <motion.div 
// // //                   key={product.product_name}
// // //                   initial={{ x: -10, opacity: 0 }}
// // //                   animate={{ x: 0, opacity: 1 }}
// // //                   transition={{ delay: index * 0.1, duration: 0.3 }}
// // //                   className={`flex items-center justify-between p-3 rounded-lg border ${index === 0 ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'}`}
// // //                 >
// // //                   <div className="flex items-center">
// // //                     <div className={`flex items-center justify-center h-8 w-8 rounded-full ${index === 0 ? 'bg-blue-500' : 'bg-gray-500'} text-white font-bold text-sm`}>
// // //                       {index + 1}
// // //                     </div>
// // //                     <div className="ml-3">
// // //                       <p className="font-medium text-gray-800">{product.product_name}</p>
// // //                       <p className="text-xs text-gray-500">Total Sold: {product.total_quantity}</p>
// // //                     </div>
// // //                   </div>
// // //                   <div className="font-semibold text-right">
// // //                     ₹{(product.total_amount || 0).toFixed(2)}
// // //                   </div>
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           ) : (
// // //             <div className="flex flex-col items-center justify-center h-64 text-gray-500">
// // //               <svg className="w-12 h-12 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// // //               </svg>
// // //               <p>No product data available</p>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </motion.div>
// // //     </motion.div>
// // //   );
// // // };

// // // export default ProductSales;
// // import React, { useState, useEffect } from "react";
// // import { Bar, Line, Doughnut, Chart } from "react-chartjs-2";
// // import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, ArcElement, Title, Tooltip, Legend, PointElement } from "chart.js";
// // import { motion, AnimatePresence } from "framer-motion";

// // // Register ChartJS components
// // ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, ArcElement, Title, Tooltip, Legend, PointElement);

// // const ProductSales = () => {
// //   const [products, setProducts] = useState([]);
// //   const [selectedProductId, setSelectedProductId] = useState("");
// //   const [productSales, setProductSales] = useState([]);
// //   const [bestSellingProduct, setBestSellingProduct] = useState({});
// //   const [error, setError] = useState(null);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [chartType, setChartType] = useState("bar");
// //   const [timeRange, setTimeRange] = useState("1w");
// //   const [topProducts, setTopProducts] = useState([]);
// //   const [topProductsLoading, setTopProductsLoading] = useState(false);

// //   // Get storeId from localStorage
// //   const storeId = localStorage.getItem("storeId");

// //   // Fetch products for the store
// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       if (!storeId) {
// //         setError("Store ID is required.");
// //         return;
// //       }

// //       setIsLoading(true);
// //       try {
// //         const response = await fetch(`http://localhost:5010/products?storeId=${storeId}`);
// //         if (!response.ok) {
// //           throw new Error("Failed to fetch products.");
// //         }
// //         const data = await response.json();
// //         console.log("Products fetched:", data);
// //         setProducts(data);
// //         if (data.length > 0 && !selectedProductId) {
// //           setSelectedProductId(data[0].product_name);
// //         }
// //       } catch (error) {
// //         setError(error.message);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     if (storeId) {
// //       fetchProducts();
// //     }
// //   }, [storeId, selectedProductId]);

// //   // Fetch sales data for the selected product
// //   useEffect(() => {
// //     const fetchProductSales = async () => {
// //       if (!selectedProductId) return;

// //       setIsLoading(true);
// //       try {
// //         const response = await fetch(`http://localhost:5010/api/product-sales?storeId=${storeId}&productName=${selectedProductId}&timeRange=${timeRange}`);
// //         if (!response.ok) {
// //           throw new Error("Failed to fetch product sales data.");
// //         }
// //         const data = await response.json();
// //         console.log("Product sales fetched:", data);
// //         if (data.sales_data && Array.isArray(data.sales_data) && data.sales_data.length > 0) {
// //           setProductSales(data.sales_data);
// //           setError(null);
// //         } else {
// //           setProductSales([]);
// //           setError(`No sales data found for ${selectedProductId}.`);
// //         }
// //       } catch (error) {
// //         setError(error.message);
// //         setProductSales([]);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     if (selectedProductId) {
// //       fetchProductSales();
// //     }
// //   }, [selectedProductId, storeId, timeRange]);

// //   // Fetch best-selling product
// //   useEffect(() => {
// //     const fetchBestSellingProduct = async () => {
// //       setIsLoading(true);
// //       try {
// //         const response = await fetch(`http://localhost:5010/api/best-selling-product?storeId=${storeId}`);
// //         if (!response.ok) {
// //           throw new Error("Failed to fetch best-selling product.");
// //         }
// //         const data = await response.json();
// //         console.log("Best-selling product fetched:", data);
// //         if (data.product_name) {
// //           setBestSellingProduct(data);
// //         } else {
// //           setBestSellingProduct({});
// //         }
// //       } catch (error) {
// //         console.error("Failed to fetch best-selling product:", error);
// //         setBestSellingProduct({});
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     if (storeId) {
// //       fetchBestSellingProduct();
// //     }
// //   }, [storeId]);

// //   // Fetch top 5 products
// //   useEffect(() => {
// //     const fetchTopProducts = async () => {
// //       setTopProductsLoading(true);
// //       try {
// //         const response = await fetch(`http://localhost:5010/api/top-products?storeId=${storeId}&limit=5`);
// //         if (!response.ok) {
// //           throw new Error(`Failed to fetch top products: ${response.statusText}`);
// //         }
// //         const data = await response.json();
// //         console.log("Top products fetched:", data);
// //         if (data.products && Array.isArray(data.products) && data.products.length > 0) {
// //           setTopProducts(data.products);
// //         } else {
// //           setTopProducts([]);
// //           console.warn("No top products data returned:", data);
// //         }
// //       } catch (error) {
// //         console.error("Failed to fetch top products:", error);
// //         setTopProducts([]);
// //         setError("Could not load top products data.");
// //       } finally {
// //         setTopProductsLoading(false);
// //       }
// //     };

// //     if (storeId) {
// //       fetchTopProducts();
// //     }
// //   }, [storeId]);

// //   // Prepare data for charts
// //   const chartData = {
// //     labels: productSales.map((sale) => sale.date),
// //     datasets: [
// //       {
// //         label: "Quantity Sold",
// //         data: productSales.map((sale) => sale.quantity),
// //         backgroundColor: "rgba(53, 162, 235, 0.5)",
// //         borderColor: "rgba(53, 162, 235, 1)",
// //         borderWidth: 2,
// //         tension: 0.4,
// //       },
// //     ],
// //   };

// //   // Doughnut chart data for top products
// //   const doughnutData = {
// //     labels: topProducts.map((product) => product.product_name),
// //     datasets: [
// //       {
// //         data: topProducts.map((product) => product.total_quantity),
// //         backgroundColor: [
// //           "rgba(255, 99, 132, 0.7)",
// //           "rgba(54, 162, 235, 0.7)",
// //           "rgba(255, 206, 86, 0.7)",
// //           "rgba(75, 192, 192, 0.7)",
// //           "rgba(153, 102, 255, 0.7)",
// //         ],
// //         borderColor: [
// //           "rgba(255, 99, 132, 1)",
// //           "rgba(54, 162, 235, 1)",
// //           "rgba(255, 206, 86, 1)",
// //           "rgba(75, 192, 192, 1)",
// //           "rgba(153, 102, 255, 1)",
// //         ],
// //         borderWidth: 1,
// //       },
// //     ],
// //   };

// //   // Chart options
// //   const chartOptions = {
// //     responsive: true,
// //     maintainAspectRatio: false,
// //     plugins: {
// //       legend: { position: "top" },
// //       title: {
// //         display: true,
// //         text: `Sales Data for ${selectedProductId}`,
// //         font: { size: 16, weight: "bold" },
// //       },
// //       tooltip: {
// //         backgroundColor: "rgba(0, 0, 0, 0.8)",
// //         titleFont: { size: 14 },
// //         bodyFont: { size: 13 },
// //         padding: 12,
// //         cornerRadius: 6,
// //       },
// //     },
// //     scales: {
// //       y: {
// //         beginAtZero: true,
// //         grid: { color: "rgba(200, 200, 200, 0.2)" },
// //         ticks: {
// //           font: { size: 12 },
// //           maxTicksLimit: 8,
// //           callback: (value) => value.toLocaleString(),
// //         },
// //       },
// //       x: {
// //         grid: { display: false },
// //         ticks: {
// //           font: { size: 12 },
// //           maxTicksLimit: 10,
// //           maxRotation: 45,
// //           minRotation: 45,
// //         },
// //       },
// //     },
// //     animation: { duration: 1000, easing: "easeInOutQuart" },
// //   };

// //   const doughnutOptions = {
// //     responsive: true,
// //     maintainAspectRatio: false,
// //     plugins: {
// //       legend: {
// //         position: "right",
// //         labels: {
// //           font: { size: 12 },
// //           generateLabels: (chart) =>
// //             chart.data.labels.map((label, i) => ({
// //               text: label.length > 20 ? `${label.substring(0, 17)}...` : label,
// //               fillStyle: chart.data.datasets[0].backgroundColor[i],
// //               hidden: false,
// //               index: i,
// //             })),
// //         },
// //       },
// //       title: {
// //         display: true,
// //         text: "Top Selling Products",
// //         font: { size: 16, weight: "bold" },
// //       },
// //       tooltip: {
// //         callbacks: {
// //           label: (context) => `${context.label}: ${context.raw.toLocaleString()} units`,
// //         },
// //       },
// //     },
// //     cutout: "70%",
// //   };

// //   // Loading Skeleton
// //   const LoadingSkeleton = () => (
// //     <div className="animate-pulse">
// //       <div className="h-8 bg-gray-200 rounded w-full mb-4"></div>
// //       <div className="h-64 bg-gray-200 rounded w-full"></div>
// //     </div>
// //   );

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       transition={{ duration: 0.5 }}
// //       className="max-w-6xl mx-auto p-8 bg-gradient-to-b from-white to-gray-50 shadow-xl rounded-xl"
// //     >
// //       <motion.div initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className="mb-8">
// //         <h2 className="text-center text-3xl font-bold text-gray-800 mb-2">Product Sales Dashboard</h2>
// //         <p className="text-center text-gray-500">Track and analyze your product performance</p>
// //       </motion.div>

// //       {error && (
// //         <motion.div
// //           initial={{ opacity: 0, y: 10 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           className="p-4 mb-6 bg-red-50 border-l-4 border-red-500 text-red-700 rounded"
// //         >
// //           <div className="flex items-center">
// //             <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
// //               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
// //             </svg>
// //             {error}
// //           </div>
// //         </motion.div>
// //       )}

// //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
// //         {/* Controls Section */}
// //         <motion.div
// //           initial={{ x: -20, opacity: 0 }}
// //           animate={{ x: 0, opacity: 1 }}
// //           transition={{ delay: 0.1, duration: 0.4 }}
// //           className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md border border-gray-100"
// //         >
// //           <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Dashboard Controls</h3>

// //           <div className="mb-6">
// //             <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
// //               Select Product:
// //             </label>
// //             <div className="relative">
// //               <select
// //                 id="product"
// //                 onChange={(e) => setSelectedProductId(e.target.value)}
// //                 value={selectedProductId}
// //                 className="block w-full pl-3 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md transition-all duration-200 bg-gray-50 hover:bg-gray-100"
// //                 disabled={isLoading}
// //               >
// //                 <option value="">Select a product</option>
// //                 {products.map((product) => (
// //                   <option key={product._id} value={product.product_name}>
// //                     {product.product_name}
// //                   </option>
// //                 ))}
// //               </select>
// //               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// //                 <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
// //                   <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
// //                 </svg>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="mb-6">
// //             <label className="block text-sm font-medium text-gray-700 mb-2">Chart Type:</label>
// //             <div className="grid grid-cols-2 gap-2">
// //               <button
// //                 onClick={() => setChartType("bar")}
// //                 className={`py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${chartType === "bar" ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
// //               >
// //                 Bar Chart
// //               </button>
// //               <button
// //                 onClick={() => setChartType("line")}
// //                 className={`py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${chartType === "line" ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
// //               >
// //                 Line Chart
// //               </button>
// //             </div>
// //           </div>

// //           <div className="mb-6">
// //             <label className="block text-sm font-medium text-gray-700 mb-2">Time Range:</label>
// //             <div className="grid grid-cols-3 gap-2">
// //               <button
// //                 onClick={() => setTimeRange("1w")}
// //                 className={`py-2 px-2 rounded-md text-sm font-medium transition-all duration-200 ${timeRange === "1w" ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
// //               >
// //                 1 Week
// //               </button>
// //               <button
// //                 onClick={() => setTimeRange("1m")}
// //                 className={`py-2 px-2 rounded-md text-sm font-medium transition-all duration-200 ${timeRange === "1m" ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
// //               >
// //                 1 Month
// //               </button>
// //               <button
// //                 onClick={() => setTimeRange("3m")}
// //                 className={`py-2 px-2 rounded-md text-sm font-medium transition-all duration-200 ${timeRange === "3m" ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
// //               >
// //                 3 Months
// //               </button>
// //             </div>
// //           </div>

// //           {bestSellingProduct && bestSellingProduct.product_name ? (
// //             <motion.div
// //               initial={{ opacity: 0, y: 10 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.3, duration: 0.5 }}
// //               className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-4 rounded-lg shadow-lg"
// //             >
// //               <h3 className="text-lg font-semibold mb-3 flex items-center">
// //                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
// //                   <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
// //                 </svg>
// //                 Top Performing Product
// //               </h3>
// //               <div className="pl-2">
// //                 <p className="mb-1 font-medium">{bestSellingProduct.product_name}</p>
// //                 <div className="flex justify-between text-teal-100 text-sm mb-1">
// //                   <span>Total Sold:</span>
// //                   <span className="font-bold text-white">{bestSellingProduct.total_quantity}</span>
// //                 </div>
// //                 <div className="flex justify-between text-teal-100 text-sm">
// //                   <span>Revenue:</span>
// //                   <span className="font-bold text-white">₹{bestSellingProduct.total_amount?.toFixed(2) || "0.00"}</span>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ) : (
// //             <div className="bg-gray-100 p-4 rounded-lg text-gray-600 text-center">No best-selling product data available</div>
// //           )}
// //         </motion.div>

// //         {/* Product Sales Chart */}
// //         <motion.div
// //           initial={{ y: 20, opacity: 0 }}
// //           animate={{ y: 0, opacity: 1 }}
// //           transition={{ delay: 0.2, duration: 0.4 }}
// //           className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md border border-gray-100"
// //         >
// //           <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">Sales Performance</h3>
// //           <AnimatePresence mode="wait">
// //             {isLoading ? (
// //               <LoadingSkeleton key="loading" />
// //             ) : selectedProductId && productSales.length > 0 ? (
// //               <motion.div key="chart" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="h-64 lg:h-80">
// //                 {chartType === "bar" && <Bar data={chartData} options={chartOptions} />}
// //                 {chartType === "line" && <Line data={chartData} options={chartOptions} />}
// //               </motion.div>
// //             ) : (
// //               <motion.div
// //                 key="empty"
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 exit={{ opacity: 0 }}
// //                 transition={{ duration: 0.3 }}
// //                 className="flex flex-col items-center justify-center h-64 text-gray-500"
// //               >
// //                 <svg className="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
// //                 </svg>
// //                 <p>{selectedProductId ? `No sales data available for ${selectedProductId}` : "Select a product to view sales data"}</p>
// //               </motion.div>
// //             )}
// //           </AnimatePresence>
// //         </motion.div>
// //       </div>

// //       {/* Bottom section for top products */}
// //       <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.4 }} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// //         {/* Top Products Doughnut Chart */}
// //         <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
// //           <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">Top Products Distribution</h3>
// //           {topProductsLoading ? (
// //             <LoadingSkeleton />
// //           ) : topProducts.length > 0 ? (
// //             <div className="h-64 lg:h-72">
// //               <Doughnut data={doughnutData} options={doughnutOptions} />
// //             </div>
// //           ) : (
// //             <div className="flex flex-col items-center justify-center h-64 text-gray-500">
// //               <svg className="w-12 h-12 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// //               </svg>
// //               <p>No top products data available</p>
// //             </div>
// //           )}
// //         </div>

// //         {/* Top Products List */}
// //         <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
// //           <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">Top Performing Products</h3>
// //           {topProductsLoading ? (
// //             <div className="animate-pulse space-y-3">
// //               {[...Array(5)].map((_, i) => (
// //                 <div key={i} className="flex items-center p-2">
// //                   <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
// //                   <div className="ml-4 flex-1">
// //                     <div className="h-4 bg-gray-200 rounded w-3/4"></div>
// //                     <div className="mt-2 h-3 bg-gray-200 rounded w-1/2"></div>
// //                   </div>
// //                   <div className="h-6 bg-gray-200 rounded w-16"></div>
// //                 </div>
// //               ))}
// //             </div>
// //           ) : topProducts.length > 0 ? (
// //             <div className="space-y-3">
// //               {topProducts.map((product, index) => (
// //                 <motion.div
// //                   key={product.product_name}
// //                   initial={{ x: -10, opacity: 0 }}
// //                   animate={{ x: 0, opacity: 1 }}
// //                   transition={{ delay: index * 0.1, duration: 0.3 }}
// //                   className={`flex items-center justify-between p-3 rounded-lg border ${index === 0 ? "bg-blue-50 border-blue-200" : "bg-gray-50 border-gray-200"}`}
// //                 >
// //                   <div className="flex items-center">
// //                     <div className={`flex items-center justify-center h-8 w-8 rounded-full ${index === 0 ? "bg-blue-500" : "bg-gray-500"} text-white font-bold text-sm`}>{index + 1}</div>
// //                     <div className="ml-3">
// //                       <p className="font-medium text-gray-800">{product.product_name}</p>
// //                       <p className="text-xs text-gray-500">Total Sold: {product.total_quantity}</p>
// //                     </div>
// //                   </div>
// //                   <div className="font-semibold text-right">₹{(product.total_amount || 0).toFixed(2)}</div>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           ) : (
// //             <div className="flex flex-col items-center justify-center h-64 text-gray-500">
// //               <svg className="w-12 h-12 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// //               </svg>
// //               <p>No top products data available</p>
// //             </div>
// //           )}
// //         </div>
// //       </motion.div>
// //     </motion.div>
// //   );
// // };

// // export default ProductSales;
// import React, { useState, useEffect } from "react";
// import { Bar, Line, Doughnut, Chart } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, ArcElement, Title, Tooltip, Legend, PointElement } from "chart.js";
// import { motion, AnimatePresence } from "framer-motion";

// // Register ChartJS components
// ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, ArcElement, Title, Tooltip, Legend, PointElement);

// const ProductSales = () => {
//   const [products, setProducts] = useState([]);
//   const [selectedProductId, setSelectedProductId] = useState("");
//   const [productSales, setProductSales] = useState([]);
//   const [bestSellingProduct, setBestSellingProduct] = useState({});
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [chartType, setChartType] = useState("bar");
//   const [timeRange, setTimeRange] = useState("1w");
//   const [topProducts, setTopProducts] = useState([]);
//   const [topProductsLoading, setTopProductsLoading] = useState(false);

//   // Get storeId from localStorage
//   const storeId = localStorage.getItem("storeId");

//   // Fetch products for the store
//   useEffect(() => {
//     const fetchProducts = async () => {
//       if (!storeId) {
//         setError("Store ID is required.");
//         return;
//       }

//       setIsLoading(true);
//       try {
//         const response = await fetch(`http://localhost:5010/products?storeId=${storeId}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch products.");
//         }
//         const data = await response.json();
//         console.log("Products fetched:", data);
//         setProducts(data);
//         if (data.length > 0 && !selectedProductId) {
//           setSelectedProductId(data[0].product_name);
//         }
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (storeId) {
//       fetchProducts();
//     }
//   }, [storeId, selectedProductId]);

//   // Fetch sales data for the selected product
//   useEffect(() => {
//     const fetchProductSales = async () => {
//       if (!selectedProductId) return;

//       setIsLoading(true);
//       try {
//         const response = await fetch(`http://localhost:5010/api/product-sales?storeId=${storeId}&productName=${selectedProductId}&timeRange=${timeRange}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch product sales data.");
//         }
//         const data = await response.json();
//         console.log("Product sales fetched:", data);
//         if (data.sales_data && Array.isArray(data.sales_data) && data.sales_data.length > 0) {
//           setProductSales(data.sales_data);
//           setError(null);
//         } else {
//           setProductSales([]);
//           setError(`No sales data found for ${selectedProductId}.`);
//         }
//       } catch (error) {
//         setError(error.message);
//         setProductSales([]);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (selectedProductId) {
//       fetchProductSales();
//     }
//   }, [selectedProductId, storeId, timeRange]);

//   // Fetch best-selling product
//   useEffect(() => {
//     const fetchBestSellingProduct = async () => {
//       setIsLoading(true);
//       try {
//         const response = await fetch(`http://localhost:5010/api/best-selling-product?storeId=${storeId}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch best-selling product.");
//         }
//         const data = await response.json();
//         console.log("Best-selling product fetched:", data);
//         if (data.product_name) {
//           setBestSellingProduct(data);
//         } else {
//           setBestSellingProduct({});
//         }
//       } catch (error) {
//         console.error("Failed to fetch best-selling product:", error);
//         setBestSellingProduct({});
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (storeId) {
//       fetchBestSellingProduct();
//     }
//   }, [storeId]);

//   // Fetch top 5 products
//   useEffect(() => {
//     const fetchTopProducts = async () => {
//       setTopProductsLoading(true);
//       try {
//         const response = await fetch(`http://localhost:5010/api/top-products?storeId=${storeId}&limit=5`);
//         if (!response.ok) {
//           throw new Error(`Failed to fetch top products: ${response.statusText}`);
//         }
//         const data = await response.json();
//         console.log("Top products fetched:", data);
//         if (data.products && Array.isArray(data.products) && data.products.length > 0) {
//           setTopProducts(data.products);
//         } else {
//           setTopProducts([]);
//           console.warn("No top products data returned:", data);
//         }
//       } catch (error) {
//         console.error("Failed to fetch top products:", error);
//         setTopProducts([]);
//         setError("Could not load top products data.");
//       } finally {
//         setTopProductsLoading(false);
//       }
//     };

//     if (storeId) {
//       fetchTopProducts();
//     }
//   }, [storeId]);

//   // Prepare data for charts
//   const chartData = {
//     labels: productSales.map((sale) => sale.date),
//     datasets: [
//       {
//         label: "Quantity Sold",
//         data: productSales.map((sale) => sale.quantity),
//         backgroundColor: "rgba(53, 162, 235, 0.5)",
//         borderColor: "rgba(53, 162, 235, 1)",
//         borderWidth: 2,
//         tension: 0.4,
//       },
//     ],
//   };

//   // Doughnut chart data for top products
//   const doughnutData = {
//     labels: topProducts.map((product) => product.product_name),
//     datasets: [
//       {
//         data: topProducts.map((product) => product.total_quantity),
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.7)",
//           "rgba(54, 162, 235, 0.7)",
//           "rgba(255, 206, 86, 0.7)",
//           "rgba(75, 192, 192, 0.7)",
//           "rgba(153, 102, 255, 0.7)",
//         ],
//         borderColor: [
//           "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Chart options
//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { position: "top" },
//       title: {
//         display: true,
//         text: `Sales Data for ${selectedProductId}`,
//         font: { size: 16, weight: "bold" },
//       },
//       tooltip: {
//         backgroundColor: "rgba(0, 0, 0, 0.8)",
//         titleFont: { size: 14 },
//         bodyFont: { size: 13 },
//         padding: 12,
//         cornerRadius: 6,
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         grid: { color: "rgba(200, 200, 200, 0.2)" },
//         ticks: {
//           font: { size: 12 },
//           maxTicksLimit: 8,
//           callback: (value) => value.toLocaleString(),
//         },
//       },
//       x: {
//         grid: { display: false },
//         ticks: {
//           font: { size: 12 },
//           maxTicksLimit: 10,
//           maxRotation: 45,
//           minRotation: 45,
//         },
//       },
//     },
//     animation: { duration: 1000, easing: "easeInOutQuart" },
//   };

//   const doughnutOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: "right",
//         labels: {
//           font: { size: 12 },
//           generateLabels: (chart) =>
//             chart.data.labels.map((label, i) => ({
//               text: label.length > 20 ? `${label.substring(0, 17)}...` : label,
//               fillStyle: chart.data.datasets[0].backgroundColor[i],
//               hidden: false,
//               index: i,
//             })),
//         },
//       },
//       title: {
//         display: true,
//         text: "Top Selling Products",
//         font: { size: 16, weight: "bold" },
//       },
//       tooltip: {
//         callbacks: {
//           label: (context) => `${context.label}: ${context.raw.toLocaleString()} units`,
//         },
//       },
//     },
//     cutout: "70%",
//   };

//   // Loading Skeleton
//   const LoadingSkeleton = () => (
//     <div className="animate-pulse">
//       <div className="h-8 bg-gray-200 rounded w-full mb-4"></div>
//       <div className="h-64 bg-gray-200 rounded w-full"></div>
//     </div>
//   );

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-6xl mx-auto p-8 bg-gradient-to-b from-white to-gray-50 shadow-xl rounded-xl"
//     >
//       <motion.div initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className="mb-8">
//         <h2 className="text-center text-3xl font-bold text-gray-800 mb-2">Product Sales Dashboard</h2>
//         <p className="text-center text-gray-500">Track and analyze your product performance</p>
//       </motion.div>

//       {error && (
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="p-4 mb-6 bg-red-50 border-l-4 border-red-500 text-red-700 rounded"
//         >
//           <div className="flex items-center">
//             <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//             </svg>
//             {error}
//           </div>
//         </motion.div>
//       )}

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
//         {/* Controls Section */}
//         <motion.div
//           initial={{ x: -20, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.1, duration: 0.4 }}
//           className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md border border-gray-100"
//         >
//           <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Dashboard Controls</h3>

//           <div className="mb-6">
//             <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
//               Select Product:
//             </label>
//             <div className="relative">
//               <select
//                 id="product"
//                 onChange={(e) => setSelectedProductId(e.target.value)}
//                 value={selectedProductId}
//                 className="block w-full pl-3 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md transition-all duration-200 bg-gray-50 hover:bg-gray-100"
//                 disabled={isLoading}
//               >
//                 <option value="">Select a product</option>
//                 {products.map((product) => (
//                   <option key={product._id} value={product.product_name}>
//                     {product.product_name}
//                   </option>
//                 ))}
//               </select>
//               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                 <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Chart Type:</label>
//             <div className="grid grid-cols-2 gap-2">
//               <button
//                 onClick={() => setChartType("bar")}
//                 className={`py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${chartType === "bar" ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
//               >
//                 Bar Chart
//               </button>
//               <button
//                 onClick={() => setChartType("line")}
//                 className={`py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${chartType === "line" ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
//               >
//                 Line Chart
//               </button>
//             </div>
//           </div>

//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Time Range:</label>
//             <div className="grid grid-cols-3 gap-2">
//               <button
//                 onClick={() => setTimeRange("1w")}
//                 className={`py-2 px-2 rounded-md text-sm font-medium transition-all duration-200 ${timeRange === "1w" ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
//               >
//                 1 Week
//               </button>
//               <button
//                 onClick={() => setTimeRange("1m")}
//                 className={`py-2 px-2 rounded-md text-sm font-medium transition-all duration-200 ${timeRange === "1m" ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
//               >
//                 1 Month
//               </button>
//               <button
//                 onClick={() => setTimeRange("3m")}
//                 className={`py-2 px-2 rounded-md text-sm font-medium transition-all duration-200 ${timeRange === "3m" ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
//               >
//                 3 Months
//               </button>
//             </div>
//           </div>

//           {bestSellingProduct && bestSellingProduct.product_name ? (
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.5 }}
//               className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-4 rounded-lg shadow-lg"
//             >
//               <h3 className="text-lg font-semibold mb-3 flex items-center">
//                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                 </svg>
//                 Top Performing Product
//               </h3>
//               <div className="pl-2">
//                 <p className="mb-1 font-medium">{bestSellingProduct.product_name}</p>
//                 <div className="flex justify-between text-teal-100 text-sm mb-1">
//                   <span>Total Sold:</span>
//                   <span className="font-bold text-white">{bestSellingProduct.total_quantity}</span>
//                 </div>
//                 <div className="flex justify-between text-teal-100 text-sm">
//                   <span>Revenue:</span>
//                   <span className="font-bold text-white">₹{bestSellingProduct.total_amount?.toFixed(2) || "0.00"}</span>
//                 </div>
//               </div>
//             </motion.div>
//           ) : (
//             <div className="bg-gray-100 p-4 rounded-lg text-gray-600 text-center">No best-selling product data available</div>
//           )}
//         </motion.div>

//         {/* Product Sales Chart */}
//         <motion.div
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.4 }}
//           className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md border border-gray-100"
//         >
//           <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">Sales Performance</h3>
//           <AnimatePresence mode="wait">
//             {isLoading ? (
//               <LoadingSkeleton key="loading" />
//             ) : selectedProductId && productSales.length > 0 ? (
//               <motion.div key="chart" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="h-64 lg:h-80">
//                 {chartType === "bar" && <Bar data={chartData} options={chartOptions} />}
//                 {chartType === "line" && <Line data={chartData} options={chartOptions} />}
//               </motion.div>
//             ) : (
//               <motion.div
//                 key="empty"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="flex flex-col items-center justify-center h-64 text-gray-500"
//               >
//                 <svg className="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                 </svg>
//                 <p>{selectedProductId ? `No sales data available for ${selectedProductId}` : "Select a product to view sales data"}</p>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>
//       </div>

//       {/* Bottom section for top products */}
//       <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.4 }} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Top Products Doughnut Chart */}
//         <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
//           <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">Top Products Distribution</h3>
//           {topProductsLoading ? (
//             <LoadingSkeleton />
//           ) : topProducts.length > 0 ? (
//             <div className="h-64 lg:h-72">
//               <Doughnut data={doughnutData} options={doughnutOptions} />
//             </div>
//           ) : (
//             <div className="flex flex-col items-center justify-center h-64 text-gray-500">
//               <svg className="w-12 h-12 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//               </svg>
//               <p>No top products data available</p>
//             </div>
//           )}
//         </div>

//         {/* Top Products List */}
//         <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
//           <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">Top Performing Products</h3>
//           {topProductsLoading ? (
//             <div className="animate-pulse space-y-3">
//               {[...Array(5)].map((_, i) => (
//                 <div key={i} className="flex items-center p-2">
//                   <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
//                   <div className="ml-4 flex-1">
//                     <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//                     <div className="mt-2 h-3 bg-gray-200 rounded w-1/2"></div>
//                   </div>
//                   <div className="h-6 bg-gray-200 rounded w-16"></div>
//                 </div>
//               ))}
//             </div>
//           ) : topProducts.length > 0 ? (
//             <div className="space-y-3">
//               {topProducts.map((product, index) => (
//                 <motion.div
//                   key={product.product_name}
//                   initial={{ x: -10, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: index * 0.1, duration: 0.3 }}
//                   className={`flex items-center justify-between p-3 rounded-lg border ${index === 0 ? "bg-blue-50 border-blue-200" : "bg-gray-50 border-gray-200"}`}
//                 >
//                   <div className="flex items-center">
//                     <div className={`flex items-center justify-center h-8 w-8 rounded-full ${index === 0 ? "bg-blue-500" : "bg-gray-500"} text-white font-bold text-sm`}>{index + 1}</div>
//                     <div className="ml-3">
//                       <p className="font-medium text-gray-800">{product.product_name}</p>
//                       <p className="text-xs text-gray-500">Total Sold: {product.total_quantity}</p>
//                     </div>
//                   </div>
//                   <div className="font-semibold text-right">₹{(product.total_amount || 0).toFixed(2)}</div>
//                 </motion.div>
//               ))}
//             </div>
//           ) : (
//             <div className="flex flex-col items-center justify-center h-64 text-gray-500">
//               <svg className="w-12 h-12 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//               </svg>
//               <p>No top products data available</p>
//             </div>
//           )}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default ProductSales;  
import React, { useState, useEffect } from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, ArcElement, Title, Tooltip, Legend, PointElement } from "chart.js";
import { motion, AnimatePresence } from "framer-motion";

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, ArcElement, Title, Tooltip, Legend, PointElement);

const ProductSales = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState("");
  const [productSales, setProductSales] = useState([]);
  const [bestSellingProduct, setBestSellingProduct] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [chartType, setChartType] = useState("bar");
  const [timeRange, setTimeRange] = useState("1w");
  const [topProducts, setTopProducts] = useState([]);
  const [topProductsLoading, setTopProductsLoading] = useState(false);
  const [showDataLabels, setShowDataLabels] = useState(false);
  const [chartHeight, setChartHeight] = useState("h-96 lg:h-96"); // Increased height

  // Get storeId from localStorage
  const storeId = localStorage.getItem("storeId");

  // Fetch products for the store
  useEffect(() => {
    const fetchProducts = async () => {
      if (!storeId) {
        setError("Store ID is required.");
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:5010/products?storeId=${storeId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }
        const data = await response.json();
        setProducts(data);
        if (data.length > 0 && !selectedProductId) {
          setSelectedProductId(data[0].product_name);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (storeId) {
      fetchProducts();
    }
  }, [storeId, selectedProductId]);

  // Fetch sales data for the selected product
  useEffect(() => {
    const fetchProductSales = async () => {
      if (!selectedProductId) return;

      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:5010/api/product-sales?storeId=${storeId}&productName=${selectedProductId}&timeRange=${timeRange}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product sales data.");
        }
        const data = await response.json();
        if (data.sales_data && Array.isArray(data.sales_data) && data.sales_data.length > 0) {
          setProductSales(data.sales_data);
          setError(null);
        } else {
          setProductSales([]);
          setError(`No sales data found for ${selectedProductId}.`);
        }
      } catch (error) {
        setError(error.message);
        setProductSales([]);
      } finally {
        setIsLoading(false);
      }
    };

    if (selectedProductId) {
      fetchProductSales();
    }
  }, [selectedProductId, storeId, timeRange]);

  // Fetch best-selling product
  useEffect(() => {
    const fetchBestSellingProduct = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:5010/api/best-selling-product?storeId=${storeId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch best-selling product.");
        }
        const data = await response.json();
        if (data.product_name) {
          setBestSellingProduct(data);
        } else {
          setBestSellingProduct({});
        }
      } catch (error) {
        console.error("Failed to fetch best-selling product:", error);
        setBestSellingProduct({});
      } finally {
        setIsLoading(false);
      }
    };

    if (storeId) {
      fetchBestSellingProduct();
    }
  }, [storeId]);

  // Fetch top 5 products
  useEffect(() => {
    const fetchTopProducts = async () => {
      setTopProductsLoading(true);
      try {
        const response = await fetch(`http://localhost:5010/api/top-products?storeId=${storeId}&limit=5`);
        if (!response.ok) {
          throw new Error(`Failed to fetch top products: ${response.statusText}`);
        }
        const data = await response.json();
        if (data.products && Array.isArray(data.products) && data.products.length > 0) {
          setTopProducts(data.products);
        } else {
          setTopProducts([]);
        }
      } catch (error) {
        console.error("Failed to fetch top products:", error);
        setTopProducts([]);
        setError("Could not load top products data.");
      } finally {
        setTopProductsLoading(false);
      }
    };

    if (storeId) {
      fetchTopProducts();
    }
  }, [storeId]);

  // Prepare data for charts
  const chartData = {
    labels: productSales.map((sale) => sale.date),
    datasets: [
      {
        label: "Quantity Sold",
        data: productSales.map((sale) => sale.quantity),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderColor: "rgba(53, 162, 235, 1)",
        borderWidth: 2,
        tension: 0.4,
        datalabels: {
          display: showDataLabels,
          anchor: 'end',
          align: 'top',
          formatter: (value) => value.toLocaleString(),
          font: {
            weight: 'bold',
            size: 10
          }
        }
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: `Sales Data for ${selectedProductId}`,
        font: { size: 16, weight: "bold" },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: { size: 14 },
        bodyFont: { size: 13 },
        padding: 12,
        cornerRadius: 6,
        callbacks: {
          label: (context) => `Quantity: ${context.parsed.y.toLocaleString()}`,
        }
      },
      datalabels: {
        color: 'blue',
        display: showDataLabels,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: "rgba(200, 200, 200, 0.2)" },
        ticks: {
          font: { size: 12 },
          maxTicksLimit: 8,
          callback: (value) => value.toLocaleString(),
        },
      },
      x: {
        grid: { display: false },
        ticks: {
          font: { size: 10 }, // Reduced font size for x-axis labels
          maxTicksLimit: 15, // Limit the number of labels displayed
          maxRotation: 45, // Rotate labels for better readability
          minRotation: 45,
          autoSkip: true, // Automatically skip overlapping labels
          autoSkipPadding: 10, // Add padding between labels
        },
      },
    },
    animation: { duration: 1000, easing: "easeInOutQuart" },
  };

  // Doughnut chart data for top products
  const doughnutData = {
    labels: topProducts.map((product) => product.product_name),
    datasets: [
      {
        data: topProducts.map((product) => product.total_quantity),
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Doughnut chart options
  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          font: { size: 12 },
          padding: 20,
          generateLabels: (chart) =>
            chart.data.labels.map((label, i) => ({
              text: label.length > 15 ? `${label.substring(0, 12)}...` : label,
              fillStyle: chart.data.datasets[0].backgroundColor[i],
              hidden: false,
              index: i,
            })),
        },
      },
      title: {
        display: true,
        text: "Top Selling Products",
        font: { size: 16, weight: "bold" },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw.toLocaleString()} units`,
        },
      },
    },
    cutout: "70%",
  };

  // Loading Skeleton
  const LoadingSkeleton = () => (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-full mb-4"></div>
      <div className="h-64 bg-gray-200 rounded w-full"></div>
    </div>
  );

  // Toggle chart fullscreen
  const toggleChartSize = () => {
    setChartHeight(chartHeight === "h-96 lg:h-96" ? "h-64 lg:h-80" : "h-96 lg:h-96");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto p-8 bg-gradient-to-b from-white to-gray-50 shadow-xl rounded-xl"
    >
      <motion.div initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className="mb-8">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-2">Product Sales Dashboard</h2>
        <p className="text-center text-gray-500">Track and analyze your product performance</p>
      </motion.div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 mb-6 bg-red-50 border-l-4 border-red-500 text-red-700 rounded"
        >
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Controls Section */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md border border-gray-100"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Dashboard Controls</h3>

          <div className="mb-6">
            <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
              Select Product:
            </label>
            <div className="relative">
              <select
                id="product"
                onChange={(e) => setSelectedProductId(e.target.value)}
                value={selectedProductId}
                className="block w-full pl-3 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md transition-all duration-200 bg-gray-50 hover:bg-gray-100"
                disabled={isLoading}
              >
                <option value="">Select a product</option>
                {products.map((product) => (
                  <option key={product._id} value={product.product_name}>
                    {product.product_name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Chart Type:</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setChartType("bar")}
                className={`py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${chartType === "bar" ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                Bar Chart
              </button>
              <button
                onClick={() => setChartType("line")}
                className={`py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${chartType === "line" ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                Line Chart
              </button>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Range:</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setTimeRange("1w")}
                className={`py-2 px-2 rounded-md text-sm font-medium transition-all duration-200 ${timeRange === "1w" ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                1 Week
              </button>
              <button
                onClick={() => setTimeRange("1m")}
                className={`py-2 px-2 rounded-md text-sm font-medium transition-all duration-200 ${timeRange === "1m" ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                1 Month
              </button>
              <button
                onClick={() => setTimeRange("3m")}
                className={`py-2 px-2 rounded-md text-sm font-medium transition-all duration-200 ${timeRange === "3m" ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                3 Months
              </button>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center">
              <input
                id="dataLabels"
                type="checkbox"
                checked={showDataLabels}
                onChange={() => setShowDataLabels(!showDataLabels)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="dataLabels" className="ml-2 block text-sm text-gray-700">
                Show Data Labels
              </label>
            </div>
          </div>

          {bestSellingProduct && bestSellingProduct.product_name ? (
            <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-4 rounded-lg shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Top Performing Product
            </h3>
            <div className="pl-2">
              <p className="mb-1 font-medium">{bestSellingProduct.product_name}</p>
              <div className="flex justify-between text-teal-100 text-sm mb-1">
                <span>Total Sold:</span>
                <span className="font-bold text-white">{bestSellingProduct.total_quantity}</span>
              </div>
              <div className="flex justify-between text-teal-100 text-sm">
                <span>Revenue:</span>
                <span className="font-bold text-white">₹{bestSellingProduct.total_amount?.toFixed(2) || "0.00"}</span>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="bg-gray-100 p-4 rounded-lg text-gray-600 text-center">No best-selling product data available</div>
        )}
      </motion.div>

      {/* Product Sales Chart */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md border border-gray-100"
      >
        <div className="flex justify-between items-center mb-6 border-b pb-2">
          <h3 className="text-xl font-semibold text-gray-800">Sales Performance</h3>
          <button
            onClick={toggleChartSize}
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"></path>
            </svg>
            {chartHeight === "h-96 lg:h-96" ? "Collapse" : "Expand"}
          </button>
        </div>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingSkeleton key="loading" />
          ) : selectedProductId && productSales.length > 0 ? (
            <motion.div key="chart" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className={chartHeight}>
              {chartType === "bar" && <Bar data={chartData} options={chartOptions} />}
              {chartType === "line" && <Line data={chartData} options={chartOptions} />}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center h-64 text-gray-500"
            >
              <svg className="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <p>{selectedProductId ? `No sales data available for ${selectedProductId}` : "Select a product to view sales data"}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Data stats display */}
        {selectedProductId && productSales.length > 0 && (
          <div className="mt-4 bg-gray-50 p-4 rounded-lg grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white p-2 rounded shadow">
              <p className="text-gray-500">Total Units</p>
              <p className="font-bold text-gray-800">
                {productSales.reduce((sum, item) => sum + item.quantity, 0).toLocaleString()}
              </p>
            </div>
            <div className="bg-white p-2 rounded shadow">
              <p className="text-gray-500">Data Points</p>
              <p className="font-bold text-gray-800">{productSales.length}</p>
            </div>
            <div className="bg-white p-2 rounded shadow">
              <p className="text-gray-500">Peak Sales</p>
              <p className="font-bold text-gray-800">
                {Math.max(...productSales.map(item => item.quantity)).toLocaleString()}
              </p>
            </div>
            <div className="bg-white p-2 rounded shadow">
              <p className="text-gray-500">Average</p>
              <p className="font-bold text-gray-800">
                {(productSales.reduce((sum, item) => sum + item.quantity, 0) / productSales.length).toFixed(0)}
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </div>

    {/* Bottom section for top products */}
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.4 }} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Top Products Doughnut Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">Top Products Distribution</h3>
        {topProductsLoading ? (
          <LoadingSkeleton />
        ) : topProducts.length > 0 ? (
          <div className="h-64 lg:h-72">
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-64 text-gray-500">
            <svg className="w-12 h-12 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p>No top products data available</p>
          </div>
        )}
      </div>

      {/* Top Products List */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">Top Performing Products</h3>
        {topProductsLoading ? (
          <div className="animate-pulse space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center p-2">
                <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                <div className="ml-4 flex-1">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="mt-2 h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div className="h-6 bg-gray-200 rounded w-16"></div>
              </div>
            ))}
          </div>
        ) : topProducts.length > 0 ? (
          <div className="space-y-3">
            {topProducts.map((product, index) => (
              <motion.div
                key={product.product_name}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className={`flex items-center justify-between p-3 rounded-lg border ${index === 0 ? "bg-blue-50 border-blue-200" : "bg-gray-50 border-gray-200"}`}
              >
                <div className="flex items-center">
                  <div className={`flex items-center justify-center h-8 w-8 rounded-full ${index === 0 ? "bg-blue-500" : "bg-gray-500"} text-white font-bold text-sm`}>{index + 1}</div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">{product.product_name}</p>
                    <p className="text-xs text-gray-500">Total Sold: {product.total_quantity}</p>
                  </div>
                </div>
                <div className="font-semibold text-right">₹{(product.total_amount || 0).toFixed(2)}</div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-64 text-gray-500">
            <svg className="w-12 h-12 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p>No top products data available</p>
          </div>
        )}
      </div>
    </motion.div>
  </motion.div>
);
};

export default ProductSales;