// // // // // import React, { useEffect, useState } from "react";
// // // // // import { useStore } from "./StoreContext";
// // // // // import { Line } from "react-chartjs-2";
// // // // // import Chart from "chart.js/auto";
// // // // // import { format } from "date-fns";

// // // // // const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5010";

// // // // // const StockTracking = () => {
// // // // //   const { storeName } = useStore();
// // // // //   const [products, setProducts] = useState([]);
// // // // //   const [graphData, setGraphData] = useState({ labels: [], datasets: [] });
// // // // //   const [lowStockAlerts, setLowStockAlerts] = useState([]);
// // // // //   const [loading, setLoading] = useState({ products: true, sales: true });
// // // // //   const [error, setError] = useState(null);

// // // // //   useEffect(() => {
// // // // //     if (storeName) {
// // // // //       fetchProducts();
// // // // //       fetchSalesData();
// // // // //     }
// // // // //   }, [storeName]);

// // // // //   const fetchProducts = async () => {
// // // // //     try {
// // // // //       const response = await fetch(`${API_BASE_URL}/products?store=${storeName}`);
// // // // //       const data = await response.json();
// // // // //       setProducts(data);
// // // // //       setLowStockAlerts(data.filter((product) => product.quantity < 10));
// // // // //       setLoading((prev) => ({ ...prev, products: false }));
// // // // //     } catch (err) {
// // // // //       console.error("Error fetching products:", err);
// // // // //       setError("Failed to load products.");
// // // // //       setLoading((prev) => ({ ...prev, products: false }));
// // // // //     }
// // // // //   };

// // // // //   const fetchSalesData = async () => {
// // // // //     try {
// // // // //       const response = await fetch(`${API_BASE_URL}/api/daily-sales`, {
// // // // //         headers: { storeName: storeName },
// // // // //       });
// // // // //       if (!response.ok) throw new Error("Sales data not found.");
// // // // //       const data = await response.json();
// // // // //       generateGraphData(data);
// // // // //       setLoading((prev) => ({ ...prev, sales: false }));
// // // // //     } catch (err) {
// // // // //       console.error("Error fetching sales data:", err);
// // // // //       setError("Failed to load sales data.");
// // // // //       setLoading((prev) => ({ ...prev, sales: false }));
// // // // //     }
// // // // //   };

// // // // //   const generateGraphData = (data) => {
// // // // //     const labels = [];
// // // // //     const sales = [];
// // // // //     Object.keys(data).forEach((date) => {
// // // // //       labels.push(format(new Date(date), "MM/dd"));
// // // // //       sales.push(data[date].total_amount);
// // // // //     });

// // // // //     setGraphData({
// // // // //       labels,
// // // // //       datasets: [
// // // // //         {
// // // // //           label: "Total Sales",
// // // // //           data: sales,
// // // // //           borderColor: "rgba(75, 192, 192, 1)",
// // // // //           backgroundColor: "rgba(75, 192, 192, 0.2)",
// // // // //           borderWidth: 2,
// // // // //           tension: 0.4,
// // // // //           fill: true,
// // // // //         },
// // // // //       ],
// // // // //     });
// // // // //   };

// // // // //   const adjustStock = async (productId, newQuantity) => {
// // // // //     try {
// // // // //       await fetch(`${API_BASE_URL}/products/${productId}?store=${storeName}`, {
// // // // //         method: "PUT",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //         body: JSON.stringify({ quantity: newQuantity }),
// // // // //       });
// // // // //       fetchProducts();
// // // // //     } catch (err) {
// // // // //       console.error("Error updating stock:", err);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gray-100 p-6">
// // // // //       <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Stock Management</h1>
// // // // //       {error && <p className="text-red-500 text-center">{error}</p>}
// // // // //       {loading.products || loading.sales ? (
// // // // //         <p className="text-center text-gray-600">Loading...</p>
// // // // //       ) : (
// // // // //         <>
// // // // //           <LowStockAlerts alerts={lowStockAlerts} />
// // // // //           <SalesChart graphData={graphData} />
// // // // //           <StockTable products={products} adjustStock={adjustStock} />
// // // // //         </>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // const LowStockAlerts = ({ alerts }) =>
// // // // //   alerts.length > 0 && (
// // // // //     <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-lg shadow-sm animate-fade-in">
// // // // //       <h2 className="text-xl font-semibold text-yellow-800 mb-2">Low Stock Alerts</h2>
// // // // //       <ul>
// // // // //         {alerts.map((alert) => (
// // // // //           <li key={alert._id} className="text-yellow-700">
// // // // //             {alert.product_name} - {alert.quantity} left
// // // // //           </li>
// // // // //         ))}
// // // // //       </ul>
// // // // //     </div>
// // // // //   );

// // // // // const SalesChart = ({ graphData }) => (
// // // // //   <div className="bg-white p-6 rounded-lg shadow-md mb-6 animate-fade-in">
// // // // //     <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales Performance</h2>
// // // // //     <Line data={graphData} />
// // // // //   </div>
// // // // // );

// // // // // // const StockTable = ({ products, adjustStock }) => (
// // // // // //   <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
// // // // // //     <h2 className="text-xl font-semibold text-gray-800 mb-4">Stock Overview</h2>
// // // // // //     <table className="w-full table-auto">
// // // // // //       <thead>
// // // // // //         <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
// // // // // //           <th className="py-3 px-6 text-left">Product</th>
// // // // // //           <th className="py-3 px-6 text-center">Quantity</th>
// // // // // //           <th className="py-3 px-6 text-center">Price</th>
// // // // // //           <th className="py-3 px-6 text-center">Actions</th>
// // // // // //         </tr>
// // // // // //       </thead>
// // // // // //       <tbody className="text-gray-600 text-sm font-light">
// // // // // //         {products.map((product) => (
// // // // // //           <tr
// // // // // //             key={product._id}
// // // // // //             className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
// // // // // //               product.quantity < 10 ? "bg-yellow-50" : "bg-green-50"
// // // // // //             }`}
// // // // // //           >
// // // // // //             <td className="py-3 px-6 text-left">{product.product_name}</td>
// // // // // //             <td className="py-3 px-6 text-center">{product.quantity}</td>
// // // // // //             <td className="py-3 px-6 text-center">${parseFloat(product.sale_price).toFixed(2)}</td>
// // // // // //             <td className="py-3 px-6 text-center space-x-2">
// // // // // //               <button
// // // // // //                 onClick={() => adjustStock(product._id, product.quantity + 1)}
// // // // // //                 className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors"
// // // // // //               >
// // // // // //                 Add
// // // // // //               </button>
// // // // // //               <button
// // // // // //                 onClick={() => product.quantity > 0 && adjustStock(product._id, product.quantity - 1)}
// // // // // //                 className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
// // // // // //               >
// // // // // //                 Remove
// // // // // //               </button>
// // // // // //             </td>
// // // // // //           </tr>
// // // // // //         ))}
// // // // // //       </tbody>
// // // // // //     </table>
// // // // // //   </div>
// // // // // // );
// // // // // const StockTable = ({ products, adjustStock }) => (
// // // // //     <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
// // // // //       <h2 className="text-xl font-semibold text-gray-800 mb-4">Stock Overview</h2>
// // // // //       <table className="w-full table-auto">
// // // // //         <thead>
// // // // //           <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
// // // // //             <th className="py-3 px-6 text-left">Product</th>
// // // // //             <th className="py-3 px-6 text-center">Quantity</th>
// // // // //             <th className="py-3 px-6 text-center">Price</th>
// // // // //             <th className="py-3 px-6 text-center">Actions</th>
// // // // //           </tr>
// // // // //         </thead>
// // // // //         <tbody className="text-gray-600 text-sm font-light">
// // // // //           {Array.isArray(products) && products.length > 0 ? (
// // // // //             products.map((product) => (
// // // // //               <tr
// // // // //                 key={product._id}
// // // // //                 className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
// // // // //                   product.quantity < 10 ? "bg-yellow-50" : "bg-green-50"
// // // // //                 }`}
// // // // //               >
// // // // //                 <td className="py-3 px-6 text-left">{product.product_name}</td>
// // // // //                 <td className="py-3 px-6 text-center">{product.quantity}</td>
// // // // //                 <td className="py-3 px-6 text-center">${parseFloat(product.sale_price).toFixed(2)}</td>
// // // // //                 <td className="py-3 px-6 text-center space-x-2">
// // // // //                   <button
// // // // //                     onClick={() => adjustStock(product._id, product.quantity + 1)}
// // // // //                     className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors"
// // // // //                   >
// // // // //                     Add
// // // // //                   </button>
// // // // //                   <button
// // // // //                     onClick={() => product.quantity > 0 && adjustStock(product._id, product.quantity - 1)}
// // // // //                     className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
// // // // //                   >
// // // // //                     Remove
// // // // //                   </button>
// // // // //                 </td>
// // // // //               </tr>
// // // // //             ))
// // // // //           ) : (
// // // // //             <tr>
// // // // //               <td colSpan="4" className="text-center py-3 px-6 text-gray-500">No products available</td>
// // // // //             </tr>
// // // // //           )}
// // // // //         </tbody>
// // // // //       </table>
// // // // //     </div>
// // // // //   );
  
// // // // // export default StockTracking;

// // // // import React, { useEffect, useState } from "react";
// // // // import { useStore } from "./StoreContext";
// // // // import { Line } from "react-chartjs-2";
// // // // import Chart from "chart.js/auto";
// // // // import { format } from "date-fns";

// // // // const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5010";

// // // // const StockTracking = () => {
// // // //   const { storeName } = useStore();
// // // //   const [products, setProducts] = useState([]);
// // // //   const [graphData, setGraphData] = useState({ labels: [], datasets: [] });
// // // //   const [lowStockAlerts, setLowStockAlerts] = useState([]);
// // // //   const [loading, setLoading] = useState({ products: true, sales: true });
// // // //   const [error, setError] = useState(null);

// // // //   useEffect(() => {
// // // //     const storeId = localStorage.getItem("storeId"); // Retrieve storeId from localStorage
// // // //     if (storeId) {
// // // //       fetchProducts(storeId);
// // // //       fetchSalesData(storeId);
// // // //     }
// // // //   }, []);

// // // //   const fetchProducts = async (storeId) => {
// // // //     try {
// // // //       const response = await fetch(`${API_BASE_URL}/products?storeId=${storeId}`);  // Send storeId
// // // //       const data = await response.json();
// // // //       setProducts(data);
// // // //       setLowStockAlerts(data.filter((product) => product.quantity < 10));
// // // //       setLoading((prev) => ({ ...prev, products: false }));
// // // //     } catch (err) {
// // // //       console.error("Error fetching products:", err);
// // // //       setError("Failed to load products.");
// // // //       setLoading((prev) => ({ ...prev, products: false }));
// // // //     }
// // // //   };

// // // //   const fetchSalesData = async (storeId) => {
// // // //     try {
// // // //       const response = await fetch(`${API_BASE_URL}/api/daily-sales`, {
// // // //         headers: { storeId: storeId },  // Send storeId in headers
// // // //       });
// // // //       if (!response.ok) throw new Error("Sales data not found.");
// // // //       const data = await response.json();
// // // //       generateGraphData(data);
// // // //       setLoading((prev) => ({ ...prev, sales: false }));
// // // //     } catch (err) {
// // // //       console.error("Error fetching sales data:", err);
// // // //       setError("Failed to load sales data.");
// // // //       setLoading((prev) => ({ ...prev, sales: false }));
// // // //     }
// // // //   };

// // // //   const generateGraphData = (data) => {
// // // //     const labels = [];
// // // //     const sales = [];
// // // //     Object.keys(data).forEach((date) => {
// // // //       labels.push(format(new Date(date), "MM/dd"));
// // // //       sales.push(data[date].total_amount);
// // // //     });

// // // //     setGraphData({
// // // //       labels,
// // // //       datasets: [
// // // //         {
// // // //           label: "Total Sales",
// // // //           data: sales,
// // // //           borderColor: "rgba(75, 192, 192, 1)",
// // // //           backgroundColor: "rgba(75, 192, 192, 0.2)",
// // // //           borderWidth: 2,
// // // //           tension: 0.4,
// // // //           fill: true,
// // // //         },
// // // //       ],
// // // //     });
// // // //   };

// // // //   const adjustStock = async (productId, newQuantity) => {
// // // //     const storeId = localStorage.getItem("storeId"); // Get storeId from localStorage
// // // //     if (!storeId) return;

// // // //     try {
// // // //       await fetch(`${API_BASE_URL}/products/${productId}?storeId=${storeId}`, {
// // // //         method: "PUT",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({ quantity: newQuantity }),
// // // //       });
// // // //       fetchProducts(storeId);
// // // //     } catch (err) {
// // // //       console.error("Error updating stock:", err);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-100 p-6">
// // // //       <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Stock Management</h1>
// // // //       {error && <p className="text-red-500 text-center">{error}</p>}
// // // //       {loading.products || loading.sales ? (
// // // //         <p className="text-center text-gray-600">Loading...</p>
// // // //       ) : (
// // // //         <>
// // // //           <LowStockAlerts alerts={lowStockAlerts} />
// // // //           <SalesChart graphData={graphData} />
// // // //           <StockTable products={products} adjustStock={adjustStock} />
// // // //         </>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // const LowStockAlerts = ({ alerts }) =>
// // // //   alerts.length > 0 && (
// // // //     <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-lg shadow-sm animate-fade-in">
// // // //       <h2 className="text-xl font-semibold text-yellow-800 mb-2">Low Stock Alerts</h2>
// // // //       <ul>
// // // //         {alerts.map((alert) => (
// // // //           <li key={alert._id} className="text-yellow-700">
// // // //             {alert.product_name} - {alert.quantity} left
// // // //           </li>
// // // //         ))}
// // // //       </ul>
// // // //     </div>
// // // //   );

// // // // const SalesChart = ({ graphData }) => (
// // // //   <div className="bg-white p-6 rounded-lg shadow-md mb-6 animate-fade-in">
// // // //     <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales Performance</h2>
// // // //     <Line data={graphData} />
// // // //   </div>
// // // // );

// // // // const StockTable = ({ products, adjustStock }) => (
// // // //   <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
// // // //     <h2 className="text-xl font-semibold text-gray-800 mb-4">Stock Overview</h2>
// // // //     <table className="w-full table-auto">
// // // //       <thead>
// // // //         <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
// // // //           <th className="py-3 px-6 text-left">Product</th>
// // // //           <th className="py-3 px-6 text-center">Quantity</th>
// // // //           <th className="py-3 px-6 text-center">Price</th>
// // // //           <th className="py-3 px-6 text-center">Actions</th>
// // // //         </tr>
// // // //       </thead>
// // // //       <tbody className="text-gray-600 text-sm font-light">
// // // //         {Array.isArray(products) && products.length > 0 ? (
// // // //           products.map((product) => (
// // // //             <tr
// // // //               key={product._id}
// // // //               className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
// // // //                 product.quantity < 10 ? "bg-yellow-50" : "bg-green-50"
// // // //               }`}
// // // //             >
// // // //               <td className="py-3 px-6 text-left">{product.product_name}</td>
// // // //               <td className="py-3 px-6 text-center">{product.quantity}</td>
// // // //               <td className="py-3 px-6 text-center">${parseFloat(product.sale_price).toFixed(2)}</td>
// // // //               <td className="py-3 px-6 text-center space-x-2">
// // // //                 <button
// // // //                   onClick={() => adjustStock(product._id, product.quantity + 1)}
// // // //                   className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors"
// // // //                 >
// // // //                   Add
// // // //                 </button>
// // // //                 <button
// // // //                   onClick={() => product.quantity > 0 && adjustStock(product._id, product.quantity - 1)}
// // // //                   className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
// // // //                 >
// // // //                   Remove
// // // //                 </button>
// // // //               </td>
// // // //             </tr>
// // // //           ))
// // // //         ) : (
// // // //           <tr>
// // // //             <td colSpan="4" className="text-center py-3 px-6 text-gray-500">
// // // //               No products available
// // // //             </td>
// // // //           </tr>
// // // //         )}
// // // //       </tbody>
// // // //     </table>
// // // //   </div>
// // // // );

// // // // export default StockTracking;
// // // import React, { useEffect, useState } from "react";
// // // import { useStore } from "./StoreContext";
// // // import { Line } from "react-chartjs-2";
// // // import Chart from "chart.js/auto";
// // // import { format } from "date-fns";

// // // const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5010";

// // // const StockTracking = () => {
// // //   const { storeName } = useStore();  // If you have storeName in context, we can use it for better flexibility
// // //   const [products, setProducts] = useState([]);
// // //   const [graphData, setGraphData] = useState({ labels: [], datasets: [] });
// // //   const [lowStockAlerts, setLowStockAlerts] = useState([]);
// // //   const [loading, setLoading] = useState({ products: true, sales: true });
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const storeId = localStorage.getItem("storeId");  // Get storeId from localStorage
// // //     if (storeId) {
// // //       fetchProducts(storeId);
// // //       fetchSalesData(storeId);
// // //     } else {
// // //       setError("Store ID is missing!");
// // //       setLoading({ products: false, sales: false });
// // //     }
// // //   }, []);

// // //   // Fetch product data
// // //   const fetchProducts = async (storeId) => {
// // //     try {
// // //       const response = await fetch(`${API_BASE_URL}/products?storeId=${storeId}`);
// // //       if (!response.ok) throw new Error("Failed to fetch products");
// // //       const data = await response.json();
// // //       setProducts(data);
// // //       setLowStockAlerts(data.filter((product) => product.quantity < 10));
// // //       setLoading((prev) => ({ ...prev, products: false }));
// // //     } catch (err) {
// // //       setError("Error fetching products");
// // //       setLoading((prev) => ({ ...prev, products: false }));
// // //     }
// // //   };

// // //   // Fetch sales data
// // //   const fetchSalesData = async (storeId) => {
// // //     try {
// // //       const response = await fetch(`${API_BASE_URL}/api/daily-sales?storeId=${storeId}`);
// // //       if (!response.ok) throw new Error("Failed to fetch sales data");
// // //       const data = await response.json();
// // //       generateGraphData(data);
// // //       setLoading((prev) => ({ ...prev, sales: false }));
// // //     } catch (err) {
// // //       setError("Error fetching sales data");
// // //       setLoading((prev) => ({ ...prev, sales: false }));
// // //     }
// // //   };

// // //   // Generate data for sales chart
// // //   const generateGraphData = (data) => {
// // //     const labels = [];
// // //     const sales = [];
// // //     Object.keys(data).forEach((date) => {
// // //       labels.push(format(new Date(date), "MM/dd"));
// // //       sales.push(data[date].total_amount);
// // //     });

// // //     setGraphData({
// // //       labels,
// // //       datasets: [
// // //         {
// // //           label: "Total Sales",
// // //           data: sales,
// // //           borderColor: "rgba(75, 192, 192, 1)",
// // //           backgroundColor: "rgba(75, 192, 192, 0.2)",
// // //           borderWidth: 2,
// // //           tension: 0.4,
// // //           fill: true,
// // //         },
// // //       ],
// // //     });
// // //   };

// // //   // Update stock quantity
// // //   const adjustStock = async (productId, newQuantity) => {
// // //     const storeId = localStorage.getItem("storeId");
// // //     if (!storeId) return;
// // //     try {
// // //       await fetch(`${API_BASE_URL}/products/${productId}?storeId=${storeId}`, {
// // //         method: "PUT",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ quantity: newQuantity }),
// // //       });
// // //       fetchProducts(storeId);  // Refresh product data
// // //     } catch (err) {
// // //       console.error("Error updating stock:", err);
// // //     }
// // //   };

// // //   // Render the low stock alerts
// // //   const LowStockAlerts = ({ alerts }) =>
// // //     alerts.length > 0 && (
// // //       <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-lg shadow-sm animate-fade-in">
// // //         <h2 className="text-xl font-semibold text-yellow-800 mb-2">Low Stock Alerts</h2>
// // //         <ul>
// // //           {alerts.map((alert) => (
// // //             <li key={alert._id} className="text-yellow-700">
// // //               {alert.product_name} - {alert.quantity} left
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       </div>
// // //     );

// // //   // Render the sales chart
// // //   const SalesChart = ({ graphData }) => (
// // //     <div className="bg-white p-6 rounded-lg shadow-md mb-6 animate-fade-in">
// // //       <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales Performance</h2>
// // //       <Line data={graphData} />
// // //     </div>
// // //   );

// // //   // Render product table with adjust stock buttons
// // //   const StockTable = ({ products, adjustStock }) => (
// // //     <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
// // //       <h2 className="text-xl font-semibold text-gray-800 mb-4">Stock Overview</h2>
// // //       <table className="w-full table-auto">
// // //         <thead>
// // //           <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
// // //             <th className="py-3 px-6 text-left">Product</th>
// // //             <th className="py-3 px-6 text-center">Quantity</th>
// // //             <th className="py-3 px-6 text-center">Price</th>
// // //             <th className="py-3 px-6 text-center">Actions</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody className="text-gray-600 text-sm font-light">
// // //           {Array.isArray(products) && products.length > 0 ? (
// // //             products.map((product) => (
// // //               <tr
// // //                 key={product._id}
// // //                 className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
// // //                   product.quantity < 10 ? "bg-yellow-50" : "bg-green-50"
// // //                 }`}
// // //               >
// // //                 <td className="py-3 px-6 text-left">{product.product_name}</td>
// // //                 <td className="py-3 px-6 text-center">{product.quantity}</td>
// // //                 <td className="py-3 px-6 text-center">${parseFloat(product.sale_price).toFixed(2)}</td>
// // //                 <td className="py-3 px-6 text-center space-x-2">
// // //                   <button
// // //                     onClick={() => adjustStock(product._id, product.quantity + 1)}
// // //                     className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors"
// // //                   >
// // //                     Add
// // //                   </button>
// // //                   <button
// // //                     onClick={() => product.quantity > 0 && adjustStock(product._id, product.quantity - 1)}
// // //                     className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
// // //                   >
// // //                     Remove
// // //                   </button>
// // //                 </td>
// // //               </tr>
// // //             ))
// // //           ) : (
// // //             <tr>
// // //               <td colSpan="4" className="text-center py-3 px-6 text-gray-500">
// // //                 No products available
// // //               </td>
// // //             </tr>
// // //           )}
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );

// // //   // Render component
// // //   return (
// // //     <div className="min-h-screen bg-gray-100 p-6">
// // //       <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Stock Management</h1>
// // //       {error && <p className="text-red-500 text-center">{error}</p>}
// // //       {loading.products || loading.sales ? (
// // //         <p className="text-center text-gray-600">Loading...</p>
// // //       ) : (
// // //         <>
// // //           <LowStockAlerts alerts={lowStockAlerts} />
// // //           <SalesChart graphData={graphData} />
// // //           <StockTable products={products} adjustStock={adjustStock} />
// // //         </>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default StockTracking;
// // import React, { useEffect, useState } from "react";
// // import { useStore } from "./StoreContext";
// // import { Line } from "react-chartjs-2";
// // import Chart from "chart.js/auto";
// // import { format } from "date-fns";

// // const API_BASE_URL =  "http://localhost:5000";
// // const API_BASE_URL2 =  "http://localhost:5010";

// // const StockTracking = () => {
// //   const { storeName } = useStore();
// //   const [products, setProducts] = useState([]);
// //   const [graphData, setGraphData] = useState({ labels: [], datasets: [] });
// //   const [lowStockAlerts, setLowStockAlerts] = useState([]);
// //   const [loading, setLoading] = useState({ products: true, sales: true });
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const storeId = localStorage.getItem("storeId");  // Get storeId from localStorage
// //     if (storeId) {
// //       fetchProducts(storeId);
// //       fetchSalesData(storeId);
// //     } else {
// //       setError("Store ID is missing!");
// //       setLoading({ products: false, sales: false });
// //     }
// //   }, []);

// //   // Fetch product data
// //   const fetchProducts = async (storeId) => {
// //     setLoading((prev) => ({ ...prev, products: true }));
// //     try {
// //       const response = await fetch(`${API_BASE_URL}/products?storeId=${storeId}`);
// //       if (!response.ok) throw new Error("Failed to fetch products");
// //       const data = await response.json();
// //       setProducts(data);
// //       setLowStockAlerts(data.filter((product) => product.quantity < 10));
// //       setLoading((prev) => ({ ...prev, products: false }));
// //     } catch (err) {
// //       setError("Error fetching products");
// //       setLoading((prev) => ({ ...prev, products: false }));
// //     }
// //   };

// //   // Fetch sales data
// //   const fetchSalesData = async (storeId) => {
// //     setLoading((prev) => ({ ...prev, sales: true }));
// //     try {
// //       const response = await fetch(`${API_BASE_URL2}/api/daily-sales?storeId=${storeId}`);
// //       if (!response.ok) throw new Error("Failed to fetch sales data");
// //       const data = await response.json();
// //       generateGraphData(data);
// //       setLoading((prev) => ({ ...prev, sales: false }));
// //     } catch (err) {
// //       setError("Error fetching sales data");
// //       setLoading((prev) => ({ ...prev, sales: false }));
// //     }
// //   };

// //   // Generate data for sales chart
// //   const generateGraphData = (data) => {
// //     const labels = [];
// //     const sales = [];
// //     Object.keys(data).forEach((date) => {
// //       labels.push(format(new Date(date), "MM/dd"));
// //       sales.push(data[date].total_amount);
// //     });

// //     setGraphData({
// //       labels,
// //       datasets: [
// //         {
// //           label: "Total Sales",
// //           data: sales,
// //           borderColor: "rgba(75, 192, 192, 1)",
// //           backgroundColor: "rgba(75, 192, 192, 0.2)",
// //           borderWidth: 2,
// //           tension: 0.4,
// //           fill: true,
// //         },
// //       ],
// //     });
// //   };

// //   // Update stock quantity
// //   const adjustStock = async (productId, newQuantity) => {
// //     const storeId = localStorage.getItem("storeId");
// //     if (!storeId) return;
// //     try {
// //       await fetch(`${API_BASE_URL}/products/${productId}?storeId=${storeId}`, {
// //         method: "PUT",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ quantity: newQuantity }),
// //       });
// //       fetchProducts(storeId);  // Refresh product data
// //     } catch (err) {
// //       setError("Error updating stock");
// //       console.error("Error updating stock:", err);
// //     }
// //   };

// //   // Render the low stock alerts
// //   const LowStockAlerts = ({ alerts }) =>
// //     alerts.length > 0 && (
// //       <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-lg shadow-sm animate-fade-in">
// //         <h2 className="text-xl font-semibold text-yellow-800 mb-2">Low Stock Alerts</h2>
// //         <ul>
// //           {alerts.map((alert) => (
// //             <li key={alert._id} className="text-yellow-700">
// //               {alert.product_name} - {alert.quantity} left
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     );

// //   // Render the sales chart
// //   const SalesChart = ({ graphData }) => (
// //     <div className="bg-white p-6 rounded-lg shadow-md mb-6 animate-fade-in">
// //       <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales Performance</h2>
// //       <Line data={graphData} />
// //     </div>
// //   );

// //   // Render product table with adjust stock buttons
// //   const StockTable = ({ products, adjustStock }) => (
// //     <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
// //       <h2 className="text-xl font-semibold text-gray-800 mb-4">Stock Overview</h2>
// //       <table className="w-full table-auto">
// //         <thead>
// //           <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
// //             <th className="py-3 px-6 text-left">Product</th>
// //             <th className="py-3 px-6 text-center">Quantity</th>
// //             <th className="py-3 px-6 text-center">Price</th>
// //             <th className="py-3 px-6 text-center">Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody className="text-gray-600 text-sm font-light">
// //           {Array.isArray(products) && products.length > 0 ? (
// //             products.map((product) => (
// //               <tr
// //                 key={product._id}
// //                 className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
// //                   product.quantity < 10 ? "bg-yellow-50" : "bg-green-50"
// //                 }`}
// //               >
// //                 <td className="py-3 px-6 text-left">{product.product_name}</td>
// //                 <td className="py-3 px-6 text-center">{product.quantity}</td>
// //                 <td className="py-3 px-6 text-center">${parseFloat(product.sale_price).toFixed(2)}</td>
// //                 <td className="py-3 px-6 text-center space-x-2">
// //                   <button
// //                     onClick={() => adjustStock(product._id, product.quantity + 1)}
// //                     className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors"
// //                   >
// //                     Add
// //                   </button>
// //                   <button
// //                     onClick={() => product.quantity > 0 && adjustStock(product._id, product.quantity - 1)}
// //                     className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
// //                   >
// //                     Remove
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))
// //           ) : (
// //             <tr>
// //               <td colSpan="4" className="text-center py-3 px-6 text-gray-500">
// //                 No products available
// //               </td>
// //             </tr>
// //           )}
// //         </tbody>
// //       </table>
// //     </div>
// //   );

// //   // Render component
// //   return (
// //     <div className="min-h-screen bg-gray-100 p-6">
// //       <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Stock Management</h1>
// //       {error && <p className="text-red-500 text-center">{error}</p>}
// //       {loading.products || loading.sales ? (
// //         <p className="text-center text-gray-600">Loading...</p>
// //       ) : (
// //         <>
// //           <LowStockAlerts alerts={lowStockAlerts} />
// //           <SalesChart graphData={graphData} />
// //           <StockTable products={products} adjustStock={adjustStock} />
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default StockTracking;
// import React, { useEffect, useState } from "react";
// import { useStore } from "./StoreContext";
// import { Line } from "react-chartjs-2";
// import Chart from "chart.js/auto";
// import { format } from "date-fns";

// const API_BASE_URL =  "http://localhost:5000";
// const API_BASE_URL2 =  "http://localhost:5010";


// const StockTracking = () => {
//   const { storeName } = useStore();  // If you have storeName in context, we can use it for better flexibility
//   const [products, setProducts] = useState([]);
//   const [graphData, setGraphData] = useState({ labels: [], datasets: [] });
//   const [lowStockAlerts, setLowStockAlerts] = useState([]);
//   const [loading, setLoading] = useState({ products: true, sales: true });
//   const [error, setError] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(format(new Date(), "yyyy-MM-dd")); // Default to today

//   useEffect(() => {
//     const storeId = localStorage.getItem("storeId");  // Get storeId from localStorage
//     if (storeId) {
//       fetchProducts(storeId);
//       fetchSalesData(storeId, selectedDate);  // Fetch sales data with the selected date
//     } else {
//       setError("Store ID is missing!");
//       setLoading({ products: false, sales: false });
//     }
//   }, [selectedDate]);

//   // Fetch product data
//   const fetchProducts = async (storeId) => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/products?storeId=${storeId}`);
//       if (!response.ok) throw new Error("Failed to fetch products");
//       const data = await response.json();
//       setProducts(data);
//       setLowStockAlerts(data.filter((product) => product.quantity < 10));
//       setLoading((prev) => ({ ...prev, products: false }));
//     } catch (err) {
//       setError("Error fetching products");
//       setLoading((prev) => ({ ...prev, products: false }));
//     }
//   };

//   // Fetch sales data
//   const fetchSalesData = async (storeId, date) => {
//     setLoading((prev) => ({ ...prev, sales: true }));
//     try {
//       const response = await fetch(`${API_BASE_URL2}/api/daily-sales2?date=${date}`, {
//         method: "GET",
//         headers: {
//           storeId: storeId  // Pass storeId in headers
//         }
//       });
//       if (!response.ok) throw new Error("Failed to fetch sales data");
//       const data = await response.json();
//       generateGraphData(data);
//       setLoading((prev) => ({ ...prev, sales: false }));
//     } catch (err) {
//       setError("Error fetching sales data");
//       setLoading((prev) => ({ ...prev, sales: false }));
//     }
//   };

//   // Generate data for sales chart
//   const generateGraphData = (data) => {
//     const labels = [];
//     const sales = [];
//     Object.keys(data).forEach((date) => {
//       labels.push(format(new Date(date), "MM/dd"));
//       sales.push(data[date].total_amount);
//     });

//     setGraphData({
//       labels,
//       datasets: [
//         {
//           label: "Total Sales",
//           data: sales,
//           borderColor: "rgba(75, 192, 192, 1)",
//           backgroundColor: "rgba(75, 192, 192, 0.2)",
//           borderWidth: 2,
//           tension: 0.4,
//           fill: true,
//         },
//       ],
//     });
//   };

//   // Update stock quantity
//   const adjustStock = async (productId, newQuantity) => {
//     const storeId = localStorage.getItem("storeId");
//     if (!storeId) return;
//     try {
//       await fetch(`${API_BASE_URL}/products/${productId}?storeId=${storeId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ quantity: newQuantity }),
//       });
//       fetchProducts(storeId);  // Refresh product data
//     } catch (err) {
//       console.error("Error updating stock:", err);
//     }
//   };

//   // Render the low stock alerts
//   const LowStockAlerts = ({ alerts }) =>
//     alerts.length > 0 && (
//       <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-lg shadow-sm animate-fade-in">
//         <h2 className="text-xl font-semibold text-yellow-800 mb-2">Low Stock Alerts</h2>
//         <ul>
//           {alerts.map((alert) => (
//             <li key={alert._id} className="text-yellow-700">
//               {alert.product_name} - {alert.quantity} left
//             </li>
//           ))}
//         </ul>
//       </div>
//     );

//   // Render the sales chart
//   const SalesChart = ({ graphData }) => (
//     <div className="bg-white p-6 rounded-lg shadow-md mb-6 animate-fade-in">
//       <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales Performance</h2>
//       <Line data={graphData} />
//     </div>
//   );

//   // Render product table with adjust stock buttons
//   const StockTable = ({ products, adjustStock }) => (
//     <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
//       <h2 className="text-xl font-semibold text-gray-800 mb-4">Stock Overview</h2>
//       <table className="w-full table-auto">
//         <thead>
//           <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
//             <th className="py-3 px-6 text-left">Product</th>
//             <th className="py-3 px-6 text-center">Quantity</th>
//             <th className="py-3 px-6 text-center">Price</th>
//             <th className="py-3 px-6 text-center">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="text-gray-600 text-sm font-light">
//           {Array.isArray(products) && products.length > 0 ? (
//             products.map((product) => (
//               <tr
//                 key={product._id}
//                 className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
//                   product.quantity < 10 ? "bg-yellow-50" : "bg-green-50"
//                 }`}
//               >
//                 <td className="py-3 px-6 text-left">{product.product_name}</td>
//                 <td className="py-3 px-6 text-center">{product.quantity}</td>
//                 <td className="py-3 px-6 text-center">${parseFloat(product.sale_price).toFixed(2)}</td>
//                 <td className="py-3 px-6 text-center space-x-2">
//                   <button
//                     onClick={() => adjustStock(product._id, product.quantity + 1)}
//                     className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors"
//                   >
//                     Add
//                   </button>
//                   <button
//                     onClick={() => product.quantity > 0 && adjustStock(product._id, product.quantity - 1)}
//                     className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
//                   >
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4" className="text-center py-3 px-6 text-gray-500">
//                 No products available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );

//   // Render component
//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Stock Management</h1>
//       {error && <p className="text-red-500 text-center">{error}</p>}
//       {loading.products || loading.sales ? (
//         <p className="text-center text-gray-600">Loading...</p>
//       ) : (
//         <>
//           <LowStockAlerts alerts={lowStockAlerts} />
//           <SalesChart graphData={graphData} />
//           <StockTable products={products} adjustStock={adjustStock} />
//         </>
//       )}
//     </div>
//   );
// };

// export default StockTracking;
import React, { useEffect, useState } from "react";
import { useStore } from "./StoreContext";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { format } from "date-fns";

const API_BASE_URL = "http://localhost:5000";
const API_BASE_URL2 = "http://localhost:5010";

const StockTracking = () => {
  const { storeName } = useStore();  // If you have storeName in context, we can use it for better flexibility
  const [products, setProducts] = useState([]);
  const [graphData, setGraphData] = useState({ labels: [], datasets: [] });
  const [lowStockAlerts, setLowStockAlerts] = useState([]);
  const [loading, setLoading] = useState({ products: true, sales: true });
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(format(new Date(), "yyyy-MM-dd")); // Default to today

  useEffect(() => {
    const storeId = localStorage.getItem("storeId"); // Get storeId from localStorage
    if (storeId) {
      fetchProducts(storeId);
      fetchSalesData(storeId, selectedDate); // Fetch sales data with the selected date
    } else {
      setError("Store ID is missing!");
      setLoading({ products: false, sales: false });
    }
  }, [selectedDate]);

  // Fetch product data
  const fetchProducts = async (storeId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/products?storeId=${storeId}`);
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProducts(data);
      setLowStockAlerts(data.filter((product) => product.quantity < 10));
      setLoading((prev) => ({ ...prev, products: false }));
    } catch (err) {
      setError("Error fetching products");
      setLoading((prev) => ({ ...prev, products: false }));
    }
  };

  // Fetch sales data
  const fetchSalesData = async (storeId, date) => {
    setLoading((prev) => ({ ...prev, sales: true }));
    try {
      const response = await fetch(`${API_BASE_URL2}/api/daily-sales2?date=${date}`, {
        method: "GET",
        headers: {
          storeId: storeId, // Pass storeId in headers
        },
      });
      if (!response.ok) throw new Error("Failed to fetch sales data");
      const data = await response.json();
      generateGraphData(data);
      setLoading((prev) => ({ ...prev, sales: false }));
    } catch (err) {
      setError("Error fetching sales data");
      setLoading((prev) => ({ ...prev, sales: false }));
    }
  };

  // Generate data for sales chart
  const generateGraphData = (data) => {
    const labels = [];
    const sales = [];
    Object.keys(data).forEach((date) => {
      labels.push(format(new Date(date), "MM/dd"));
      sales.push(data[date].total_amount);
    });

    setGraphData({
      labels,
      datasets: [
        {
          label: "Total Sales",
          data: sales,
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderWidth: 2,
          tension: 0.4,
          fill: true,
        },
      ],
    });
  };

  // Update stock quantity
  const adjustStock = async (productId, newQuantity) => {
    const storeId = localStorage.getItem("storeId");
    if (!storeId) return;
    try {
      await fetch(`${API_BASE_URL}/products/${productId}?storeId=${storeId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: newQuantity }),
      });
      fetchProducts(storeId); // Refresh product data
    } catch (err) {
      console.error("Error updating stock:", err);
    }
  };

  // Render the low stock alerts
  const LowStockAlerts = ({ alerts }) =>
    alerts.length > 0 && (
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-lg shadow-sm animate-fade-in">
        <h2 className="text-xl font-semibold text-yellow-800 mb-2">Low Stock Alerts</h2>
        <ul>
          {alerts.map((alert) => (
            <li key={alert._id} className="text-yellow-700">
              {alert.product_name} - {alert.quantity} left
            </li>
          ))}
        </ul>
      </div>
    );

  // Render the sales chart
  const SalesChart = ({ graphData }) => (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 animate-fade-in">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales Performance</h2>
      <Line data={graphData} />
    </div>
  );

  // Render product table with adjust stock buttons
  const StockTable = ({ products, adjustStock }) => (
    <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Stock Overview</h2>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Product</th>
            <th className="py-3 px-6 text-center">Quantity</th>
            <th className="py-3 px-6 text-center">Price</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <tr
                key={product._id}
                className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                  product.quantity < 10 ? "bg-yellow-50" : "bg-green-50"
                }`}
              >
                <td className="py-3 px-6 text-left">{product.product_name}</td>
                <td className="py-3 px-6 text-center">{product.quantity}</td>
                <td className="py-3 px-6 text-center">${parseFloat(product.sale_price).toFixed(2)}</td>
                <td className="py-3 px-6 text-center space-x-2">
                  <button
                    onClick={() => adjustStock(product._id, product.quantity + 1)}
                    className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => product.quantity > 0 && adjustStock(product._id, product.quantity - 1)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-3 px-6 text-gray-500">
                No products available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );

  // Render component
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Stock Management</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {loading.products || loading.sales ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <>
          <LowStockAlerts alerts={lowStockAlerts} />
          <SalesChart graphData={graphData} />
          <StockTable products={products} adjustStock={adjustStock} />
        </>
      )}
    </div>
  );
};

export default StockTracking;
