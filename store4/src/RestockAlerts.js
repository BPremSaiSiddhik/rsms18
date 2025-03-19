// // // // // // // // // // // // // // // // // // import React, { useState, useEffect, useContext } from "react";
// // // // // // // // // // // // // // // // // // import { StoreContext } from "./StoreContext";

// // // // // // // // // // // // // // // // // // const RestockAlerts = ({ products, reorderThreshold = 10 }) => {
// // // // // // // // // // // // // // // // // //   const lowStockProducts = products.filter(
// // // // // // // // // // // // // // // // // //     (product) => product.quantity <= reorderThreshold
// // // // // // // // // // // // // // // // // //   );

// // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // //     <div className="bg-white p-6 rounded-lg shadow-md mt-6">
// // // // // // // // // // // // // // // // // //       <h2 className="text-xl font-bold text-red-600 mb-4">Low Stock Alerts</h2>
// // // // // // // // // // // // // // // // // //       {lowStockProducts.length > 0 ? (
// // // // // // // // // // // // // // // // // //         <ul>
// // // // // // // // // // // // // // // // // //           {lowStockProducts.map((product) => (
// // // // // // // // // // // // // // // // // //             <li key={product._id} className="p-3 border-b border-gray-200">
// // // // // // // // // // // // // // // // // //               <span className="font-semibold">{product.product_name}</span> - Only {product.quantity} {product.units} left!
// // // // // // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // // // // // //         </ul>
// // // // // // // // // // // // // // // // // //       ) : (
// // // // // // // // // // // // // // // // // //         <p className="text-green-600">All products are sufficiently stocked.</p>
// // // // // // // // // // // // // // // // // //       )}
// // // // // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // // const ProductDashboard2 = () => {
// // // // // // // // // // // // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // // // // // // // // // // // //   const { storeId } = useContext(StoreContext);
// // // // // // // // // // // // // // // // // //   const API_URL = "http://127.0.0.1:5000/products";

// // // // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // // // //     if (storeId) {
// // // // // // // // // // // // // // // // // //       fetch(`${API_URL}?storeId=${storeId}`)
// // // // // // // // // // // // // // // // // //         .then((res) => res.json())
// // // // // // // // // // // // // // // // // //         .then((data) => setProducts(data))
// // // // // // // // // // // // // // // // // //         .catch((err) => console.error("Error fetching products:", err));
// // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // //   }, [storeId]);

// // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // //     <div className="font-poppins bg-[#f4f7fa] p-5 text-[#333] max-w-[1200px] mx-auto">
// // // // // // // // // // // // // // // // // //       <header className="bg-white text-[#1d4ed8] py-8 text-center text-3xl font-bold shadow-lg rounded-lg mb-10">
// // // // // // // // // // // // // // // // // //         <h1>Product Dashboard</h1>
// // // // // // // // // // // // // // // // // //       </header>
// // // // // // // // // // // // // // // // // //       <RestockAlerts products={products} reorderThreshold={10} />
// // // // // // // // // // // // // // // // // //       {/* Other product management UI components go here */}
// // // // // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // // export default ProductDashboard2;
// // // // // // // // // // // // // // // // // import React, { useState, useEffect, useContext } from "react";
// // // // // // // // // // // // // // // // // import { StoreContext } from "./StoreContext";

// // // // // // // // // // // // // // // // // const RestockAlerts = ({ products }) => {
// // // // // // // // // // // // // // // // //   const lowStockProducts = products.filter(
// // // // // // // // // // // // // // // // //     (product) => product.quantity < product.stock_level
// // // // // // // // // // // // // // // // //   );
  

// // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // //     <div className="p-5 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 rounded-md mb-5">
// // // // // // // // // // // // // // // // //       <h2 className="text-lg font-semibold">Restock Alerts</h2>
// // // // // // // // // // // // // // // // //       {lowStockProducts.length > 0 ? (
// // // // // // // // // // // // // // // // //         <ul className="mt-2">
// // // // // // // // // // // // // // // // //           {lowStockProducts.map((product) => (
// // // // // // // // // // // // // // // // //             <li key={product._id} className="text-sm">
// // // // // // // // // // // // // // // // //               ⚠️ <strong>{product.product_name}</strong> is low on stock. Current quantity: {product.quantity}, Restock level: {product.stock_level}
// // // // // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // // // // //         </ul>
// // // // // // // // // // // // // // // // //       ) : (
// // // // // // // // // // // // // // // // //         <p className="text-sm">All products are sufficiently stocked.</p>
// // // // // // // // // // // // // // // // //       )}
// // // // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // const ProductDashboard2 = () => {
// // // // // // // // // // // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // // // // // // // // // // //   const { storeId } = useContext(StoreContext);
// // // // // // // // // // // // // // // // //   const API_URL = "http://127.0.0.1:5000/products";

// // // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // // //     if (storeId) {
// // // // // // // // // // // // // // // // //       fetch(`${API_URL}?storeId=${storeId}`)
// // // // // // // // // // // // // // // // //         .then((res) => res.json())
// // // // // // // // // // // // // // // // //         .then((data) => setProducts(data))
// // // // // // // // // // // // // // // // //         .catch((err) => console.error("Error fetching products:", err));
// // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // //   }, [storeId]);

// // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // //     <div className="max-w-4xl mx-auto p-5">
// // // // // // // // // // // // // // // // //       <RestockAlerts products={products} />
// // // // // // // // // // // // // // // // //       <h1 className="text-2xl font-bold mb-4">Product Dashboard</h1>
// // // // // // // // // // // // // // // // //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // // // // // // // // // // // // // // //         {products.map((product) => (
// // // // // // // // // // // // // // // // //           <div key={product._id} className="p-4 bg-white shadow-md rounded-lg">
// // // // // // // // // // // // // // // // //             <h2 className="text-lg font-semibold">{product.product_name}</h2>
// // // // // // // // // // // // // // // // //             <p>Quantity: {product.quantity}</p>
// // // // // // // // // // // // // // // // //             <p>Restock Level: {product.stock_level}</p>
// // // // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // // // //         ))}
// // // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // export default ProductDashboard2;
// // // // // // // // // // // // // // // // import React, { useState, useEffect, useContext } from "react";
// // // // // // // // // // // // // // // // import { StoreContext } from "./StoreContext";

// // // // // // // // // // // // // // // // const ProductDashboard = () => {
// // // // // // // // // // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // // // // // // // // // //   const { storeName, storeId } = useContext(StoreContext);
// // // // // // // // // // // // // // // //   const [lowStockProducts, setLowStockProducts] = useState([]);
// // // // // // // // // // // // // // // //   const API_URL = "http://127.0.0.1:5000/products";

// // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // //     if (storeId) {
// // // // // // // // // // // // // // // //       fetch(`${API_URL}?storeId=${storeId}`)
// // // // // // // // // // // // // // // //         .then((res) => res.json())
// // // // // // // // // // // // // // // //         .then((data) => setProducts(data))
// // // // // // // // // // // // // // // //         .catch((err) => console.error("Error fetching products:", err));
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //   }, [storeId]);

// // // // // // // // // // // // // // // //   // Function to check for low stock
// // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // //     const lowStock = products.filter(
// // // // // // // // // // // // // // // //       (product) => Number(product.quantity) < Number(product.stock_level)
// // // // // // // // // // // // // // // //     );
// // // // // // // // // // // // // // // //     setLowStockProducts(lowStock);
// // // // // // // // // // // // // // // //   }, [products]);

// // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // //     <div className="font-poppins bg-[#f4f7fa] p-5 text-[#333] max-w-[1200px] mx-auto">
// // // // // // // // // // // // // // // //       <header className="bg-white text-[#1d4ed8] py-6 text-center text-3xl font-bold shadow-lg rounded-lg mb-6">
// // // // // // // // // // // // // // // //         <h1>Product Dashboard - {storeName}</h1>
// // // // // // // // // // // // // // // //       </header>

// // // // // // // // // // // // // // // //       {/* Restock Alert Notifications */}
// // // // // // // // // // // // // // // //       {lowStockProducts.length > 0 && (
// // // // // // // // // // // // // // // //         <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6 shadow-md">
// // // // // // // // // // // // // // // //           <h2 className="text-lg font-bold mb-2">⚠️ Restock Alerts</h2>
// // // // // // // // // // // // // // // //           {lowStockProducts.map((product) => (
// // // // // // // // // // // // // // // //             <p key={product._id} className="text-sm">
// // // // // // // // // // // // // // // //               {product.product_name} is low on stock! ({product.quantity} left, needs at least {product.stock_level})
// // // // // // // // // // // // // // // //             </p>
// // // // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // //       )}

// // // // // // // // // // // // // // // //       {/* Product List */}
// // // // // // // // // // // // // // // //       <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-3">
// // // // // // // // // // // // // // // //         {products.length > 0 ? (
// // // // // // // // // // // // // // // //           products.map((product) => (
// // // // // // // // // // // // // // // //             <div
// // // // // // // // // // // // // // // //               key={product._id}
// // // // // // // // // // // // // // // //               className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all ${
// // // // // // // // // // // // // // // //                 Number(product.quantity) < Number(product.stock_level) ? "border-2 border-red-500" : ""
// // // // // // // // // // // // // // // //               }`}
// // // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // // //               <h3 className="text-xl font-bold text-[#1d4ed8] mb-4">{product.product_name}</h3>
// // // // // // // // // // // // // // // //               <p><strong>Category:</strong> {product.category}</p>
// // // // // // // // // // // // // // // //               <p><strong>Quantity:</strong> {product.quantity} {product.units}</p>
// // // // // // // // // // // // // // // //               <p><strong>Stock Level:</strong> {product.stock_level}</p>
// // // // // // // // // // // // // // // //               <p><strong>Supplier:</strong> {product.supplier || "N/A"}</p>

// // // // // // // // // // // // // // // //               {product.image && (
// // // // // // // // // // // // // // // //                 <div className="my-4">
// // // // // // // // // // // // // // // //                   <img src={product.image} alt={product.product_name} className="w-24 h-24 rounded-full object-cover mx-auto" />
// // // // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // // // //               )}

// // // // // // // // // // // // // // // //               {/* Restock Indicator */}
// // // // // // // // // // // // // // // //               {Number(product.quantity) < Number(product.stock_level) && (
// // // // // // // // // // // // // // // //                 <p className="text-red-600 font-bold mt-2">⚠️ Low Stock - Restock Needed!</p>
// // // // // // // // // // // // // // // //               )}
// // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // //           ))
// // // // // // // // // // // // // // // //         ) : (
// // // // // // // // // // // // // // // //           <p className="text-center">No products available. Start adding some!</p>
// // // // // // // // // // // // // // // //         )}
// // // // // // // // // // // // // // // //       </section>
// // // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // export default ProductDashboard;
// // // // // // // // // // // // // // // import React, { useState, useEffect, useContext } from "react";
// // // // // // // // // // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // // // // // // // // // import { Bell, Package, TrendingUp, Phone } from "lucide-react";
// // // // // // // // // // // // // // // // import { Card, CardContent } from "@/components/ui/card";
// // // // // // // // // // // // // // // import {  CardContent } from "@/components/ui/card";

// // // // // // // // // // // // // // // const ProductDashboard2= () => {
// // // // // // // // // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // // // // // // // // //   const { storeId } = useContext(StoreContext);
// // // // // // // // // // // // // // //   const [lowStockProducts, setLowStockProducts] = useState([]);
// // // // // // // // // // // // // // //   const [recentTransactions, setRecentTransactions] = useState([]);
// // // // // // // // // // // // // // //   const API_URL = "http://127.0.0.1:5000/products";

// // // // // // // // // // // // // // //   const Card = ({ children }) => (
// // // // // // // // // // // // // // //     <div className="bg-white shadow-lg p-4 rounded-lg">{children}</div>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // //   const CardContent = ({ children }) => <div className="p-2">{children}</div>;
  
// // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // //     if (storeId) {
// // // // // // // // // // // // // // //       fetch(`${API_URL}?storeId=${storeId}`)
// // // // // // // // // // // // // // //         .then((res) => res.json())
// // // // // // // // // // // // // // //         .then((data) => {
// // // // // // // // // // // // // // //           setProducts(data);
// // // // // // // // // // // // // // //           checkLowStockProducts(data);
// // // // // // // // // // // // // // //           fetchRecentTransactions();
// // // // // // // // // // // // // // //         })
// // // // // // // // // // // // // // //         .catch((err) => console.error("Error fetching products:", err));
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //   }, [storeId]);

// // // // // // // // // // // // // // //   const checkLowStockProducts = (products) => {
// // // // // // // // // // // // // // //     const lowStock = products.filter((p) => p.quantity < p.stock_level);
// // // // // // // // // // // // // // //     setLowStockProducts(lowStock);
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const fetchRecentTransactions = () => {
// // // // // // // // // // // // // // //     fetch(`${API_URL}/transactions?storeId=${storeId}`)
// // // // // // // // // // // // // // //       .then((res) => res.json())
// // // // // // // // // // // // // // //       .then((data) => setRecentTransactions(data))
// // // // // // // // // // // // // // //       .catch((err) => console.error("Error fetching transactions:", err));
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <div className="p-6 max-w-7xl mx-auto">
// // // // // // // // // // // // // // //       <h1 className="text-3xl font-bold mb-6">Product Dashboard</h1>
      
// // // // // // // // // // // // // // //       {lowStockProducts.length > 0 && (
// // // // // // // // // // // // // // //         <div className="bg-red-100 p-4 rounded-lg mb-6">
// // // // // // // // // // // // // // //           <h2 className="text-red-600 font-bold flex items-center">
// // // // // // // // // // // // // // //             <Bell className="mr-2" /> Restock Alerts
// // // // // // // // // // // // // // //           </h2>
// // // // // // // // // // // // // // //           {lowStockProducts.map((product) => (
// // // // // // // // // // // // // // //             <p key={product._id} className="text-red-500">
// // // // // // // // // // // // // // //               {product.product_name} is low on stock ({product.quantity} left, restock at {product.stock_level}).
// // // // // // // // // // // // // // //             </p>
// // // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       )}
      
// // // // // // // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // // // // // // // // //         {products.map((product) => (
// // // // // // // // // // // // // // //           <Card key={product._id}>
// // // // // // // // // // // // // // //             <CardContent>
// // // // // // // // // // // // // // //               <h3 className="text-xl font-bold flex items-center mb-2">
// // // // // // // // // // // // // // //                 <Package className="mr-2" /> {product.product_name}
// // // // // // // // // // // // // // //               </h3>
// // // // // // // // // // // // // // //               <p><strong>Quantity:</strong> {product.quantity} / {product.stock_level}</p>
// // // // // // // // // // // // // // //               <p><strong>Category:</strong> {product.category}</p>
// // // // // // // // // // // // // // //               <p><strong>Supplier:</strong> {product.supplier} <Phone className="inline ml-1" /></p>
// // // // // // // // // // // // // // //             </CardContent>
// // // // // // // // // // // // // // //           </Card>
// // // // // // // // // // // // // // //         ))}
// // // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // // //       <div className="mt-10">
// // // // // // // // // // // // // // //         <h2 className="text-2xl font-bold flex items-center">
// // // // // // // // // // // // // // //           <TrendingUp className="mr-2" /> Recent Transactions
// // // // // // // // // // // // // // //         </h2>
// // // // // // // // // // // // // // //         <ul className="mt-4">
// // // // // // // // // // // // // // //           {recentTransactions.map((tx) => (
// // // // // // // // // // // // // // //             <li key={tx.id} className="border-b py-2">
// // // // // // // // // // // // // // //               {tx.product_name} - {tx.type} ({tx.quantity} units)
// // // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // // //         </ul>
// // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // export default ProductDashboard2;

// // // // // // // // // // // // // // import React, { useState, useEffect, useContext } from "react";
// // // // // // // // // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // // // // // // // // import { Bell, Package, TrendingUp, Phone, RefreshCw } from "lucide-react";

// // // // // // // // // // // // // // const API_URL = "http://127.0.0.1:5000";

// // // // // // // // // // // // // // const Card = ({ children }) => (
// // // // // // // // // // // // // //   <div className="bg-white shadow-lg p-4 rounded-lg border border-gray-200">{children}</div>
// // // // // // // // // // // // // // );
// // // // // // // // // // // // // // const CardContent = ({ children }) => <div className="p-2">{children}</div>;

// // // // // // // // // // // // // // const ProductDashboard = () => {
// // // // // // // // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // // // // // // // //   const { storeId } = useContext(StoreContext);
// // // // // // // // // // // // // //   const [lowStockProducts, setLowStockProducts] = useState([]);
// // // // // // // // // // // // // //   const [recentTransactions, setRecentTransactions] = useState([]);

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     if (storeId) {
// // // // // // // // // // // // // //       fetch(`${API_URL}/products?storeId=${storeId}`)
// // // // // // // // // // // // // //         .then((res) => res.json())
// // // // // // // // // // // // // //         .then((data) => {
// // // // // // // // // // // // // //           setProducts(data);
// // // // // // // // // // // // // //           checkLowStockProducts(data);
// // // // // // // // // // // // // //           fetchRecentTransactions();
// // // // // // // // // // // // // //         })
// // // // // // // // // // // // // //         .catch((err) => console.error("Error fetching products:", err));
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   }, [storeId]);

// // // // // // // // // // // // // //   const checkLowStockProducts = (products) => {
// // // // // // // // // // // // // //     const lowStock = products.filter((p) => p.quantity < p.stock_level);
// // // // // // // // // // // // // //     setLowStockProducts(lowStock);
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const fetchRecentTransactions = () => {
// // // // // // // // // // // // // //     fetch(`${API_URL}/transactions?storeId=${storeId}`)
// // // // // // // // // // // // // //       .then((res) => res.json())
// // // // // // // // // // // // // //       .then((data) => setRecentTransactions(data))
// // // // // // // // // // // // // //       .catch((err) => console.error("Error fetching transactions:", err));
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div className="p-6 max-w-7xl mx-auto">
// // // // // // // // // // // // // //       <h1 className="text-3xl font-bold mb-6">Product Dashboard</h1>
      
// // // // // // // // // // // // // //       {/* Restock Alerts */}
// // // // // // // // // // // // // //       {lowStockProducts.length > 0 && (
// // // // // // // // // // // // // //         <div className="bg-red-100 p-4 rounded-lg mb-6">
// // // // // // // // // // // // // //           <h2 className="text-red-600 font-bold flex items-center">
// // // // // // // // // // // // // //             <Bell className="mr-2" /> Restock Alerts
// // // // // // // // // // // // // //           </h2>
// // // // // // // // // // // // // //           {lowStockProducts.map((product) => (
// // // // // // // // // // // // // //             <p key={product._id} className="text-red-500">
// // // // // // // // // // // // // //               {product.product_name} is low on stock ({product.quantity} left, restock at {product.stock_level}).
// // // // // // // // // // // // // //             </p>
// // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       )}

// // // // // // // // // // // // // //       {/* Product Cards */}
// // // // // // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // // // // // // // //         {products.map((product) => (
// // // // // // // // // // // // // //           <Card key={product._id}>
// // // // // // // // // // // // // //             <CardContent>
// // // // // // // // // // // // // //               <h3 className="text-xl font-bold flex items-center mb-2">
// // // // // // // // // // // // // //                 <Package className="mr-2" /> {product.product_name}
// // // // // // // // // // // // // //               </h3>
// // // // // // // // // // // // // //               <p><strong>Quantity:</strong> {product.quantity} / {product.stock_level}</p>
// // // // // // // // // // // // // //               <p><strong>Category:</strong> {product.category}</p>
// // // // // // // // // // // // // //               <p><strong>Supplier:</strong> {product.supplier} <Phone className="inline ml-1" /></p>
// // // // // // // // // // // // // //               {product.quantity < product.stock_level && (
// // // // // // // // // // // // // //                 <p className="text-red-500 flex items-center mt-2">
// // // // // // // // // // // // // //                   <RefreshCw className="mr-2" /> Restock Needed!
// // // // // // // // // // // // // //                 </p>
// // // // // // // // // // // // // //               )}
// // // // // // // // // // // // // //             </CardContent>
// // // // // // // // // // // // // //           </Card>
// // // // // // // // // // // // // //         ))}
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       {/* Recent Transactions */}
// // // // // // // // // // // // // //       <div className="mt-10">
// // // // // // // // // // // // // //         <h2 className="text-2xl font-bold flex items-center">
// // // // // // // // // // // // // //           <TrendingUp className="mr-2" /> Recent Transactions
// // // // // // // // // // // // // //         </h2>
// // // // // // // // // // // // // //         <ul className="mt-4 border border-gray-300 rounded-lg p-4 bg-gray-50">
// // // // // // // // // // // // // //           {recentTransactions.map((tx) => (
// // // // // // // // // // // // // //             <li key={tx.id} className="border-b py-2 flex justify-between">
// // // // // // // // // // // // // //               <span>{tx.product_name} - {tx.type} ({tx.quantity} units)</span>
// // // // // // // // // // // // // //               <span className="text-gray-500 text-sm">{new Date(tx.date).toLocaleString()}</span>
// // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // //         </ul>
// // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default ProductDashboard;


// // // // // // // // // // // // // import React, { useState, useEffect, useContext } from "react";
// // // // // // // // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // // // // // // // import { Bell, Package, TrendingUp, Phone } from "lucide-react";
// // // // // // // // // // // // // import { Card, CardContent } from "@/components/ui/card";

// // // // // // // // // // // // // const ProductDashboard = () => {
// // // // // // // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // // // // // // //   const { storeId } = useContext(StoreContext);
// // // // // // // // // // // // //   const [lowStockProducts, setLowStockProducts] = useState([]);
// // // // // // // // // // // // //   const [recentTransactions, setRecentTransactions] = useState([]);
// // // // // // // // // // // // //   const API_URL = "http://127.0.0.1:5000/products";

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     if (storeId) {
// // // // // // // // // // // // //       fetch(`${API_URL}?storeId=${storeId}`)
// // // // // // // // // // // // //         .then((res) => res.json())
// // // // // // // // // // // // //         .then((data) => {
// // // // // // // // // // // // //           setProducts(Array.isArray(data) ? data : []);
// // // // // // // // // // // // //           checkLowStockProducts(data);
// // // // // // // // // // // // //           fetchRecentTransactions();
// // // // // // // // // // // // //         })
// // // // // // // // // // // // //         .catch((err) => console.error("Error fetching products:", err));
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   }, [storeId]);

// // // // // // // // // // // // //   const checkLowStockProducts = (products) => {
// // // // // // // // // // // // //     const lowStock = products.filter((p) => p.quantity < p.stock_level);
// // // // // // // // // // // // //     setLowStockProducts(lowStock);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const fetchRecentTransactions = () => {
// // // // // // // // // // // // //     fetch(`${API_URL}/transactions?storeId=${storeId}`)
// // // // // // // // // // // // //       .then((res) => res.json())
// // // // // // // // // // // // //       .then((data) => {
// // // // // // // // // // // // //         setRecentTransactions(Array.isArray(data) ? data : []);
// // // // // // // // // // // // //       })
// // // // // // // // // // // // //       .catch((err) => {
// // // // // // // // // // // // //         console.error("Error fetching transactions:", err);
// // // // // // // // // // // // //         setRecentTransactions([]);
// // // // // // // // // // // // //       });
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className="p-6 max-w-7xl mx-auto">
// // // // // // // // // // // // //       <h1 className="text-3xl font-bold mb-6">Product Dashboard</h1>
      
// // // // // // // // // // // // //       {lowStockProducts.length > 0 && (
// // // // // // // // // // // // //         <div className="bg-red-100 p-4 rounded-lg mb-6">
// // // // // // // // // // // // //           <h2 className="text-red-600 font-bold flex items-center">
// // // // // // // // // // // // //             <Bell className="mr-2" /> Restock Alerts
// // // // // // // // // // // // //           </h2>
// // // // // // // // // // // // //           {lowStockProducts.map((product) => (
// // // // // // // // // // // // //             <p key={product._id} className="text-red-500">
// // // // // // // // // // // // //               {product.product_name} is low on stock ({product.quantity} left, restock at {product.stock_level}).
// // // // // // // // // // // // //             </p>
// // // // // // // // // // // // //           ))}
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       )}
      
// // // // // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // // // // // // //         {products.map((product) => (
// // // // // // // // // // // // //           <Card key={product._id}>
// // // // // // // // // // // // //             <CardContent>
// // // // // // // // // // // // //               <h3 className="text-xl font-bold flex items-center mb-2">
// // // // // // // // // // // // //                 <Package className="mr-2" /> {product.product_name}
// // // // // // // // // // // // //               </h3>
// // // // // // // // // // // // //               <p><strong>Quantity:</strong> {product.quantity} / {product.stock_level}</p>
// // // // // // // // // // // // //               <p><strong>Category:</strong> {product.category}</p>
// // // // // // // // // // // // //               <p><strong>Supplier:</strong> {product.supplier} <Phone className="inline ml-1" /></p>
// // // // // // // // // // // // //             </CardContent>
// // // // // // // // // // // // //           </Card>
// // // // // // // // // // // // //         ))}
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       <div className="mt-10">
// // // // // // // // // // // // //         <h2 className="text-2xl font-bold flex items-center">
// // // // // // // // // // // // //           <TrendingUp className="mr-2" /> Recent Transactions
// // // // // // // // // // // // //         </h2>
// // // // // // // // // // // // //         <ul className="mt-4">
// // // // // // // // // // // // //           {recentTransactions.length > 0 ? (
// // // // // // // // // // // // //             recentTransactions.map((tx, index) => (
// // // // // // // // // // // // //               <li key={index} className="border-b py-2">
// // // // // // // // // // // // //                 {tx.product_name} - {tx.type} ({tx.quantity} units) - {tx.timestamp}
// // // // // // // // // // // // //               </li>
// // // // // // // // // // // // //             ))
// // // // // // // // // // // // //           ) : (
// // // // // // // // // // // // //             <p className="text-gray-500">No recent transactions found.</p>
// // // // // // // // // // // // //           )}
// // // // // // // // // // // // //         </ul>
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default ProductDashboard;
// // // // // // // // // // // // import React, { useState, useEffect, useContext } from "react";
// // // // // // // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // // // // // // import { Bell, Package, TrendingUp, Phone } from "lucide-react";

// // // // // // // // // // // // // Manually created Card component inside this file
// // // // // // // // // // // // const Card = ({ children }) => (
// // // // // // // // // // // //   <div className="bg-white shadow-md rounded-lg p-4">{children}</div>
// // // // // // // // // // // // );

// // // // // // // // // // // // const CardContent = ({ children }) => (
// // // // // // // // // // // //   <div className="p-2">{children}</div>
// // // // // // // // // // // // );

// // // // // // // // // // // // const ProductDashboard = () => {
// // // // // // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // // // // // //   const { storeId } = useContext(StoreContext);
// // // // // // // // // // // //   const [lowStockProducts, setLowStockProducts] = useState([]);
// // // // // // // // // // // //   const [recentTransactions, setRecentTransactions] = useState([]);
// // // // // // // // // // // //   const API_URL = "http://127.0.0.1:5000/products";

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     if (storeId) {
// // // // // // // // // // // //       fetch(`${API_URL}?storeId=${storeId}`)
// // // // // // // // // // // //         .then((res) => res.json())
// // // // // // // // // // // //         .then((data) => {
// // // // // // // // // // // //           setProducts(data);
// // // // // // // // // // // //           checkLowStockProducts(data);
// // // // // // // // // // // //           fetchRecentTransactions();
// // // // // // // // // // // //         })
// // // // // // // // // // // //         .catch((err) => console.error("Error fetching products:", err));
// // // // // // // // // // // //     }
// // // // // // // // // // // //   }, [storeId]);

// // // // // // // // // // // //   const checkLowStockProducts = (products) => {
// // // // // // // // // // // //     const lowStock = products.filter((p) => p.quantity < p.stock_level);
// // // // // // // // // // // //     setLowStockProducts(lowStock);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const fetchRecentTransactions = () => {
// // // // // // // // // // // //     fetch(`${API_URL}/transactions?storeId=${storeId}`)
// // // // // // // // // // // //       .then((res) => res.json())
// // // // // // // // // // // //       .then((data) => {
// // // // // // // // // // // //         setRecentTransactions(Array.isArray(data) ? data : []);
// // // // // // // // // // // //       })
// // // // // // // // // // // //       .catch((err) => {
// // // // // // // // // // // //         console.error("Error fetching transactions:", err);
// // // // // // // // // // // //         setRecentTransactions([]);
// // // // // // // // // // // //       });
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="p-6 max-w-7xl mx-auto">
// // // // // // // // // // // //       <h1 className="text-3xl font-bold mb-6">Product Dashboard</h1>
      
// // // // // // // // // // // //       {lowStockProducts.length > 0 && (
// // // // // // // // // // // //         <div className="bg-red-100 p-4 rounded-lg mb-6">
// // // // // // // // // // // //           <h2 className="text-red-600 font-bold flex items-center">
// // // // // // // // // // // //             <Bell className="mr-2" /> Restock Alerts
// // // // // // // // // // // //           </h2>
// // // // // // // // // // // //           {lowStockProducts.map((product) => (
// // // // // // // // // // // //             <p key={product._id} className="text-red-500">
// // // // // // // // // // // //               {product.product_name} is low on stock ({product.quantity} left, restock at {product.stock_level}).
// // // // // // // // // // // //             </p>
// // // // // // // // // // // //           ))}
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       )}
      
// // // // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // // // // // //         {products.map((product) => (
// // // // // // // // // // // //           <Card key={product._id}>
// // // // // // // // // // // //             <CardContent>
// // // // // // // // // // // //               <h3 className="text-xl font-bold flex items-center mb-2">
// // // // // // // // // // // //                 <Package className="mr-2" /> {product.product_name}
// // // // // // // // // // // //               </h3>
// // // // // // // // // // // //               <p><strong>Quantity:</strong> {product.quantity} / {product.stock_level}</p>
// // // // // // // // // // // //               <p><strong>Category:</strong> {product.category}</p>
// // // // // // // // // // // //               <p><strong>Supplier:</strong> {product.supplier} <Phone className="inline ml-1" /></p>
// // // // // // // // // // // //             </CardContent>
// // // // // // // // // // // //           </Card>
// // // // // // // // // // // //         ))}
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       <div className="mt-10">
// // // // // // // // // // // //         <h2 className="text-2xl font-bold flex items-center">
// // // // // // // // // // // //           <TrendingUp className="mr-2" /> Recent Transactions
// // // // // // // // // // // //         </h2>
// // // // // // // // // // // //         <ul className="mt-4">
// // // // // // // // // // // //           {recentTransactions.length > 0 ? (
// // // // // // // // // // // //             recentTransactions.map((tx) => (
// // // // // // // // // // // //               <li key={tx.id} className="border-b py-2">
// // // // // // // // // // // //                 {tx.product_name} - {tx.type} ({tx.quantity} units) - {tx.timestamp}
// // // // // // // // // // // //               </li>
// // // // // // // // // // // //             ))
// // // // // // // // // // // //           ) : (
// // // // // // // // // // // //             <p className="text-gray-500">No recent transactions found.</p>
// // // // // // // // // // // //           )}
// // // // // // // // // // // //         </ul>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default ProductDashboard;
// // // // // // // // // // // import React, { useState, useEffect, useContext } from "react";
// // // // // // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // // // // // import { Bell, Package, TrendingUp, Phone } from "lucide-react";

// // // // // // // // // // // // Manually created Card component
// // // // // // // // // // // const Card = ({ children }) => (
// // // // // // // // // // //   <div className="bg-white shadow-md rounded-lg p-4">{children}</div>
// // // // // // // // // // // );

// // // // // // // // // // // const CardContent = ({ children }) => (
// // // // // // // // // // //   <div className="p-2">{children}</div>
// // // // // // // // // // // );

// // // // // // // // // // // const ProductDashboard = () => {
// // // // // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // // // // //   const { storeId } = useContext(StoreContext);
// // // // // // // // // // //   const [lowStockProducts, setLowStockProducts] = useState([]);
// // // // // // // // // // //   const [recentTransactions, setRecentTransactions] = useState([]);
// // // // // // // // // // //   const API_URL = "http://127.0.0.1:5000/products";

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     if (storeId) {
// // // // // // // // // // //       fetch(`${API_URL}?storeId=${storeId}`)
// // // // // // // // // // //         .then((res) => res.json())
// // // // // // // // // // //         .then((data) => {
// // // // // // // // // // //           setProducts(data);
// // // // // // // // // // //           checkLowStockProducts(data);
// // // // // // // // // // //           fetchRecentTransactions();
// // // // // // // // // // //         })
// // // // // // // // // // //         .catch((err) => console.error("Error fetching products:", err));
// // // // // // // // // // //     }
// // // // // // // // // // //   }, [storeId]);

// // // // // // // // // // //   const checkLowStockProducts = (products) => {
// // // // // // // // // // //     // ✅ Fix: Only show products where quantity is LESS than the restock level
// // // // // // // // // // //     const lowStock = products.filter((p) => p.quantity < p.stock_level);
// // // // // // // // // // //     setLowStockProducts(lowStock);
// // // // // // // // // // //   };

// // // // // // // // // // //   const fetchRecentTransactions = () => {
// // // // // // // // // // //     fetch(`${API_URL}/transactions?storeId=${storeId}`)
// // // // // // // // // // //       .then((res) => res.json())
// // // // // // // // // // //       .then((data) => {
// // // // // // // // // // //         setRecentTransactions(Array.isArray(data) ? data : []);
// // // // // // // // // // //       })
// // // // // // // // // // //       .catch((err) => {
// // // // // // // // // // //         console.error("Error fetching transactions:", err);
// // // // // // // // // // //         setRecentTransactions([]);
// // // // // // // // // // //       });
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="p-6 max-w-7xl mx-auto">
// // // // // // // // // // //       <h1 className="text-3xl font-bold mb-6">Product Dashboard</h1>
      
// // // // // // // // // // //       {lowStockProducts.length > 0 && (
// // // // // // // // // // //         <div className="bg-red-100 p-4 rounded-lg mb-6">
// // // // // // // // // // //           <h2 className="text-red-600 font-bold flex items-center">
// // // // // // // // // // //             <Bell className="mr-2" /> Restock Alerts
// // // // // // // // // // //           </h2>
// // // // // // // // // // //           {lowStockProducts.map((product) => (
// // // // // // // // // // //             <p key={product._id} className="text-red-500">
// // // // // // // // // // //               {product.product_name} is low on stock ({product.quantity} left, restock at {product.stock_level}).
// // // // // // // // // // //             </p>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )}
      
// // // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // // // // //         {products.map((product) => (
// // // // // // // // // // //           <Card key={product._id}>
// // // // // // // // // // //             <CardContent>
// // // // // // // // // // //               <h3 className="text-xl font-bold flex items-center mb-2">
// // // // // // // // // // //                 <Package className="mr-2" /> {product.product_name}
// // // // // // // // // // //               </h3>
// // // // // // // // // // //               <p><strong>Quantity:</strong> {product.quantity} / {product.stock_level}</p>
// // // // // // // // // // //               <p><strong>Category:</strong> {product.category}</p>
// // // // // // // // // // //               <p><strong>Supplier:</strong> {product.supplier} <Phone className="inline ml-1" /></p>
// // // // // // // // // // //             </CardContent>
// // // // // // // // // // //           </Card>
// // // // // // // // // // //         ))}
// // // // // // // // // // //       </div>

// // // // // // // // // // //       <div className="mt-10">
// // // // // // // // // // //         <h2 className="text-2xl font-bold flex items-center">
// // // // // // // // // // //           <TrendingUp className="mr-2" /> Recent Transactions
// // // // // // // // // // //         </h2>
// // // // // // // // // // //         <ul className="mt-4">
// // // // // // // // // // //           {recentTransactions.length > 0 ? (
// // // // // // // // // // //             recentTransactions.map((tx) => (
// // // // // // // // // // //               <li key={tx.id} className="border-b py-2">
// // // // // // // // // // //                 {tx.product_name} - {tx.type} ({tx.quantity} units) - {tx.timestamp}
// // // // // // // // // // //               </li>
// // // // // // // // // // //             ))
// // // // // // // // // // //           ) : (
// // // // // // // // // // //             <p className="text-gray-500">No recent transactions found.</p>
// // // // // // // // // // //           )}
// // // // // // // // // // //         </ul>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default ProductDashboard;


// // // // // // // // // // import React, { useState, useEffect, useContext } from "react";
// // // // // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // // // // import { Bell, Package, TrendingUp, Phone } from "lucide-react";

// // // // // // // // // // // ✅ Manually created Card component (No ShadCN)
// // // // // // // // // // const Card = ({ children }) => (
// // // // // // // // // //   <div className="bg-white shadow-md rounded-lg p-4 border">{children}</div>
// // // // // // // // // // );

// // // // // // // // // // const CardContent = ({ children }) => (
// // // // // // // // // //   <div className="p-2">{children}</div>
// // // // // // // // // // );

// // // // // // // // // // const ProductDashboard = () => {
// // // // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // // // //   const { storeId } = useContext(StoreContext);
// // // // // // // // // //   const [lowStockProducts, setLowStockProducts] = useState([]);
// // // // // // // // // //   const [recentTransactions, setRecentTransactions] = useState([]);
// // // // // // // // // //   const API_URL = "http://127.0.0.1:5000/products";

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     if (storeId) {
// // // // // // // // // //       fetch(`${API_URL}?storeId=${storeId}`)
// // // // // // // // // //         .then((res) => res.json())
// // // // // // // // // //         .then((data) => {
// // // // // // // // // //           setProducts(data);
// // // // // // // // // //           checkLowStockProducts(data);
// // // // // // // // // //           fetchRecentTransactions();
// // // // // // // // // //         })
// // // // // // // // // //         .catch((err) => console.error("Error fetching products:", err));
// // // // // // // // // //     }
// // // // // // // // // //   }, [storeId]);

// // // // // // // // // // //   const checkLowStockProducts = (products) => {
// // // // // // // // // // //     // ✅ FIXED: Correct logic for restock alerts
// // // // // // // // // // //     const lowStock = products.filter((p) => p.quantity <= p.stock_level);
// // // // // // // // // // //     setLowStockProducts(lowStock);
// // // // // // // // // // //   };

// // // // // // // // // // const checkLowStockProducts = (products) => {
// // // // // // // // // //     // ✅ FIXED: Now alerts only for products with stock BELOW the restock level
// // // // // // // // // //     const lowStock = products.filter((p) => p.quantity < p.stock_level);
// // // // // // // // // //     setLowStockProducts(lowStock);
// // // // // // // // // //   };
  

// // // // // // // // // //   const fetchRecentTransactions = () => {
// // // // // // // // // //     fetch(`${API_URL}/transactions?storeId=${storeId}`)
// // // // // // // // // //       .then((res) => res.json())
// // // // // // // // // //       .then((data) => {
// // // // // // // // // //         setRecentTransactions(Array.isArray(data) ? data : []);
// // // // // // // // // //       })
// // // // // // // // // //       .catch((err) => {
// // // // // // // // // //         console.error("Error fetching transactions:", err);
// // // // // // // // // //         setRecentTransactions([]);
// // // // // // // // // //       });
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="p-6 max-w-7xl mx-auto">
// // // // // // // // // //       <h1 className="text-3xl font-bold mb-6">Product Dashboard</h1>
      
// // // // // // // // // //       {/* ✅ Improved Restock Alerts with more details */}
// // // // // // // // // //       {lowStockProducts.length > 0 && (
// // // // // // // // // //         <div className="bg-red-100 p-4 rounded-lg mb-6">
// // // // // // // // // //           <h2 className="text-red-600 font-bold flex items-center">
// // // // // // // // // //             <Bell className="mr-2" /> Restock Alerts
// // // // // // // // // //           </h2>
// // // // // // // // // //           {lowStockProducts.map((product) => (
// // // // // // // // // //             <p key={product._id} className="text-red-500">
// // // // // // // // // //               {product.product_name} is low on stock (<b>{product.quantity} left</b>, restock at <b>{product.stock_level}</b>).  
// // // // // // // // // //               Last restocked on <b>{product.last_restocked || "N/A"}</b>.
// // // // // // // // // //             </p>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
      
// // // // // // // // // //       {/* ✅ Enhanced Product Cards with More Info */}
// // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // // // //         {products.map((product) => (
// // // // // // // // // //           <Card key={product._id}>
// // // // // // // // // //             <CardContent>
// // // // // // // // // //               <h3 className="text-xl font-bold flex items-center mb-2">
// // // // // // // // // //                 <Package className="mr-2" /> {product.product_name}
// // // // // // // // // //               </h3>
// // // // // // // // // //               <p><strong>Quantity:</strong> {product.quantity} / {product.stock_level}</p>
// // // // // // // // // //               <p><strong>Category:</strong> {product.category}</p>
// // // // // // // // // //               <p><strong>Price:</strong> ${product.price || "N/A"}</p>
// // // // // // // // // //               <p><strong>Expiry Date:</strong> {product.expiry_date || "N/A"}</p>
// // // // // // // // // //               <p><strong>Supplier:</strong> {product.supplier} <Phone className="inline ml-1" /></p>
// // // // // // // // // //               <p><strong>Supplier Contact:</strong> {product.supplier_contact || "N/A"}</p>
// // // // // // // // // //               <p><strong>Last Restocked:</strong> {product.last_restocked || "N/A"}</p>
// // // // // // // // // //             </CardContent>
// // // // // // // // // //           </Card>
// // // // // // // // // //         ))}
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* ✅ Improved Recent Transactions Section */}
// // // // // // // // // //       <div className="mt-10">
// // // // // // // // // //         <h2 className="text-2xl font-bold flex items-center">
// // // // // // // // // //           <TrendingUp className="mr-2" /> Recent Transactions
// // // // // // // // // //         </h2>
// // // // // // // // // //         <ul className="mt-4">
// // // // // // // // // //           {recentTransactions.length > 0 ? (
// // // // // // // // // //             recentTransactions.map((tx) => (
// // // // // // // // // //               <li key={tx.id} className="border-b py-2">
// // // // // // // // // //                 <b>{tx.product_name}</b> - {tx.type} ({tx.quantity} units) - {tx.timestamp}
// // // // // // // // // //               </li>
// // // // // // // // // //             ))
// // // // // // // // // //           ) : (
// // // // // // // // // //             <p className="text-gray-500">No recent transactions found.</p>
// // // // // // // // // //           )}
// // // // // // // // // //         </ul>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default ProductDashboard;

// // // // // // // // // import React, { useState, useEffect, useContext } from "react";
// // // // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // // // import { Bell, Package, TrendingUp, Phone, BarChart2, AlertTriangle, Clock, Truck, Search } from "lucide-react";
// // // // // // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // // // // // // Custom Card components with animations
// // // // // // // // // const Card = ({ children, delay = 0 }) => (
// // // // // // // // //   <motion.div 
// // // // // // // // //     initial={{ opacity: 0, y: 20 }}
// // // // // // // // //     animate={{ opacity: 1, y: 0 }}
// // // // // // // // //     transition={{ duration: 0.4, delay }}
// // // // // // // // //     whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
// // // // // // // // //     className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors"
// // // // // // // // //   >
// // // // // // // // //     {children}
// // // // // // // // //   </motion.div>
// // // // // // // // // );

// // // // // // // // // const CardContent = ({ children }) => (
// // // // // // // // //   <div className="p-2">{children}</div>
// // // // // // // // // );

// // // // // // // // // const ProductDashboard = () => {
// // // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // // //   const { storeId } = useContext(StoreContext);
// // // // // // // // //   const [lowStockProducts, setLowStockProducts] = useState([]);
// // // // // // // // //   const [recentTransactions, setRecentTransactions] = useState([]);
// // // // // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // // // // // //   const [activeCategory, setActiveCategory] = useState("all");
// // // // // // // // //   const [categories, setCategories] = useState([]);
// // // // // // // // //   const API_URL = "http://127.0.0.1:5000/products";

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (storeId) {
// // // // // // // // //       setIsLoading(true);
// // // // // // // // //       fetch(`${API_URL}?storeId=${storeId}`)
// // // // // // // // //         .then((res) => res.json())
// // // // // // // // //         .then((data) => {
// // // // // // // // //           setProducts(data);
// // // // // // // // //           checkLowStockProducts(data);
// // // // // // // // //           fetchRecentTransactions();
          
// // // // // // // // //           // Extract unique categories for the filter
// // // // // // // // //           const uniqueCategories = [...new Set(data.map(p => p.category))];
// // // // // // // // //           setCategories(uniqueCategories);
// // // // // // // // //         })
// // // // // // // // //         .catch((err) => console.error("Error fetching products:", err))
// // // // // // // // //         .finally(() => setIsLoading(false));
// // // // // // // // //     }
// // // // // // // // //   }, [storeId]);

// // // // // // // // //   const checkLowStockProducts = (products) => {
// // // // // // // // //     const lowStock = products.filter((p) => p.quantity < p.stock_level);
// // // // // // // // //     setLowStockProducts(lowStock);
// // // // // // // // //   };

// // // // // // // // //   const fetchRecentTransactions = () => {
// // // // // // // // //     fetch(`${API_URL}/transactions?storeId=${storeId}`)
// // // // // // // // //       .then((res) => res.json())
// // // // // // // // //       .then((data) => {
// // // // // // // // //         setRecentTransactions(Array.isArray(data) ? data : []);
// // // // // // // // //       })
// // // // // // // // //       .catch((err) => {
// // // // // // // // //         console.error("Error fetching transactions:", err);
// // // // // // // // //         setRecentTransactions([]);
// // // // // // // // //       });
// // // // // // // // //   };

// // // // // // // // //   // Filter products based on search term and selected category
// // // // // // // // //   const filteredProducts = products.filter(product => {
// // // // // // // // //     const matchesSearch = product.product_name.toLowerCase().includes(searchTerm.toLowerCase());
// // // // // // // // //     const matchesCategory = activeCategory === "all" || product.category === activeCategory;
// // // // // // // // //     return matchesSearch && matchesCategory;
// // // // // // // // //   });

// // // // // // // // //   // Calculate stock status for color coding
// // // // // // // // //   const getStockStatus = (product) => {
// // // // // // // // //     const ratio = product.quantity / product.stock_level;
// // // // // // // // //     if (ratio < 0.5) return "bg-red-50 border-red-200 text-red-800";
// // // // // // // // //     if (ratio < 0.8) return "bg-yellow-50 border-yellow-200 text-yellow-800";
// // // // // // // // //     return "bg-green-50 border-green-200 text-green-800";
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="p-6 max-w-7xl mx-auto bg-gray-50 min-h-screen">
// // // // // // // // //       <motion.div
// // // // // // // // //         initial={{ opacity: 0, y: -20 }}
// // // // // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // // // // //         transition={{ duration: 0.5 }}
// // // // // // // // //       >
// // // // // // // // //         <h1 className="text-3xl font-bold mb-2 text-gray-800 flex items-center">
// // // // // // // // //           <BarChart2 className="mr-2 text-blue-600" /> 
// // // // // // // // //           Product Dashboard
// // // // // // // // //         </h1>
// // // // // // // // //         <p className="text-gray-500 mb-6">Manage your inventory and track product stock levels</p>
// // // // // // // // //       </motion.div>
      
// // // // // // // // //       {/* Dashboard Summary Cards */}
// // // // // // // // //       <motion.div 
// // // // // // // // //         className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
// // // // // // // // //         initial={{ opacity: 0 }}
// // // // // // // // //         animate={{ opacity: 1 }}
// // // // // // // // //         transition={{ duration: 0.6 }}
// // // // // // // // //       >
// // // // // // // // //         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
// // // // // // // // //           <div className="flex justify-between items-center">
// // // // // // // // //             <div>
// // // // // // // // //               <p className="text-sm text-gray-500">Total Products</p>
// // // // // // // // //               <p className="text-2xl font-bold">{products.length}</p>
// // // // // // // // //             </div>
// // // // // // // // //             <Package className="h-10 w-10 text-blue-500 opacity-70" />
// // // // // // // // //           </div>
// // // // // // // // //         </div>
        
// // // // // // // // //         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-red-500">
// // // // // // // // //           <div className="flex justify-between items-center">
// // // // // // // // //             <div>
// // // // // // // // //               <p className="text-sm text-gray-500">Low Stock Alerts</p>
// // // // // // // // //               <p className="text-2xl font-bold">{lowStockProducts.length}</p>
// // // // // // // // //             </div>
// // // // // // // // //             <AlertTriangle className="h-10 w-10 text-red-500 opacity-70" />
// // // // // // // // //           </div>
// // // // // // // // //         </div>
        
// // // // // // // // //         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
// // // // // // // // //           <div className="flex justify-between items-center">
// // // // // // // // //             <div>
// // // // // // // // //               <p className="text-sm text-gray-500">Recent Transactions</p>
// // // // // // // // //               <p className="text-2xl font-bold">{recentTransactions.length}</p>
// // // // // // // // //             </div>
// // // // // // // // //             <Clock className="h-10 w-10 text-green-500 opacity-70" />
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </motion.div>
      
// // // // // // // // //       {/* Restock Alerts */}
// // // // // // // // //       <AnimatePresence>
// // // // // // // // //         {lowStockProducts.length > 0 && (
// // // // // // // // //           <motion.div 
// // // // // // // // //             initial={{ opacity: 0, height: 0 }}
// // // // // // // // //             animate={{ opacity: 1, height: "auto" }}
// // // // // // // // //             exit={{ opacity: 0, height: 0 }}
// // // // // // // // //             className="overflow-hidden mb-6"
// // // // // // // // //           >
// // // // // // // // //             <div className="bg-red-50 p-6 rounded-lg border border-red-200 shadow-sm">
// // // // // // // // //               <h2 className="text-red-700 font-bold flex items-center text-lg mb-3">
// // // // // // // // //                 <Bell className="mr-2" /> Restock Alerts
// // // // // // // // //               </h2>
// // // // // // // // //               <div className="space-y-2">
// // // // // // // // //                 {lowStockProducts.map((product) => (
// // // // // // // // //                   <motion.div 
// // // // // // // // //                     key={product._id}
// // // // // // // // //                     initial={{ x: -20, opacity: 0 }}
// // // // // // // // //                     animate={{ x: 0, opacity: 1 }}
// // // // // // // // //                     className="flex items-center justify-between bg-white p-3 rounded-md border border-red-100"
// // // // // // // // //                   >
// // // // // // // // //                     <div>
// // // // // // // // //                       <span className="font-medium">{product.product_name}</span>
// // // // // // // // //                       <div className="text-sm text-gray-600">
// // // // // // // // //                         <span className="text-red-600 font-bold">{product.quantity}</span> left, restock at <span className="font-bold">{product.stock_level}</span>
// // // // // // // // //                       </div>
// // // // // // // // //                     </div>
// // // // // // // // //                     <div className="flex items-center">
// // // // // // // // //                       <div className="text-sm text-gray-500 mr-3">
// // // // // // // // //                         <Clock className="inline mr-1 h-4 w-4" /> 
// // // // // // // // //                         Last restocked: {product.last_restocked || "N/A"}
// // // // // // // // //                       </div>
// // // // // // // // //                       <button className="bg-red-100 hover:bg-red-200 text-red-800 px-3 py-1 rounded-full text-sm flex items-center transition-colors">
// // // // // // // // //                         <Truck className="mr-1 h-4 w-4" /> Restock
// // // // // // // // //                       </button>
// // // // // // // // //                     </div>
// // // // // // // // //                   </motion.div>
// // // // // // // // //                 ))}
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </motion.div>
// // // // // // // // //         )}
// // // // // // // // //       </AnimatePresence>
      
// // // // // // // // //       {/* Search and Filter */}
// // // // // // // // //       <div className="bg-white rounded-lg shadow-md p-4 mb-6">
// // // // // // // // //         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
// // // // // // // // //           <div className="relative flex-grow max-w-md">
// // // // // // // // //             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // // // // // // //               <Search className="h-5 w-5 text-gray-400" />
// // // // // // // // //             </div>
// // // // // // // // //             <input
// // // // // // // // //               type="text"
// // // // // // // // //               className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // // // // // // // //               placeholder="Search products..."
// // // // // // // // //               value={searchTerm}
// // // // // // // // //               onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // // // //             />
// // // // // // // // //           </div>
          
// // // // // // // // //           <div className="flex overflow-x-auto pb-1 space-x-2">
// // // // // // // // //             <button
// // // // // // // // //               className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
// // // // // // // // //                 activeCategory === "all" 
// // // // // // // // //                   ? "bg-blue-100 text-blue-800" 
// // // // // // // // //                   : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// // // // // // // // //               }`}
// // // // // // // // //               onClick={() => setActiveCategory("all")}
// // // // // // // // //             >
// // // // // // // // //               All
// // // // // // // // //             </button>
// // // // // // // // //             {categories.map(category => (
// // // // // // // // //               <button
// // // // // // // // //                 key={category}
// // // // // // // // //                 className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
// // // // // // // // //                   activeCategory === category 
// // // // // // // // //                     ? "bg-blue-100 text-blue-800" 
// // // // // // // // //                     : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// // // // // // // // //                 }`}
// // // // // // // // //                 onClick={() => setActiveCategory(category)}
// // // // // // // // //               >
// // // // // // // // //                 {category}
// // // // // // // // //               </button>
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
      
// // // // // // // // //       {/* Loading State */}
// // // // // // // // //       {isLoading ? (
// // // // // // // // //         <div className="flex justify-center items-center py-20">
// // // // // // // // //           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
// // // // // // // // //         </div>
// // // // // // // // //       ) : (
// // // // // // // // //         <>
// // // // // // // // //           {/* Products Grid */}
// // // // // // // // //           {filteredProducts.length > 0 ? (
// // // // // // // // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // // //               {filteredProducts.map((product, index) => (
// // // // // // // // //                 <Card key={product._id} delay={index * 0.1}>
// // // // // // // // //                   <CardContent>
// // // // // // // // //                     <div className={`rounded-t-md -m-2 mb-3 p-3 ${getStockStatus(product)}`}>
// // // // // // // // //                       <h3 className="text-xl font-bold flex items-center">
// // // // // // // // //                         <Package className="mr-2" /> 
// // // // // // // // //                         {product.product_name}
// // // // // // // // //                       </h3>
// // // // // // // // //                       <div className="flex items-center mt-1">
// // // // // // // // //                         <div className="text-sm">
// // // // // // // // //                           <span className="font-medium">{product.quantity}</span> / {product.stock_level} units
// // // // // // // // //                         </div>
// // // // // // // // //                         <div className="ml-auto text-xs px-2 py-1 rounded-full bg-white bg-opacity-70">
// // // // // // // // //                           {product.category}
// // // // // // // // //                         </div>
// // // // // // // // //                       </div>
// // // // // // // // //                     </div>
                    
// // // // // // // // //                     <div className="space-y-2">
// // // // // // // // //                       <div className="flex justify-between">
// // // // // // // // //                         <span className="text-gray-600">Price:</span>
// // // // // // // // //                         <span className="font-medium">${product.price || "N/A"}</span>
// // // // // // // // //                       </div>
                      
// // // // // // // // //                       <div className="flex justify-between">
// // // // // // // // //                         <span className="text-gray-600">Expiry Date:</span>
// // // // // // // // //                         <span className="font-medium">{product.expiry_date || "N/A"}</span>
// // // // // // // // //                       </div>
                      
// // // // // // // // //                       <div className="flex justify-between">
// // // // // // // // //                         <span className="text-gray-600">Supplier:</span>
// // // // // // // // //                         <span className="font-medium flex items-center">
// // // // // // // // //                           {product.supplier} 
// // // // // // // // //                           <Phone className="inline ml-1 h-4 w-4 text-gray-400" />
// // // // // // // // //                         </span>
// // // // // // // // //                       </div>
                      
// // // // // // // // //                       <div className="flex justify-between">
// // // // // // // // //                         <span className="text-gray-600">Contact:</span>
// // // // // // // // //                         <span className="font-medium">{product.supplier_contact || "N/A"}</span>
// // // // // // // // //                       </div>
                      
// // // // // // // // //                       <div className="flex justify-between">
// // // // // // // // //                         <span className="text-gray-600">Last Restocked:</span>
// // // // // // // // //                         <span className="font-medium">{product.last_restocked || "N/A"}</span>
// // // // // // // // //                       </div>
// // // // // // // // //                     </div>
                    
// // // // // // // // //                     <div className="mt-4 flex space-x-2">
// // // // // // // // //                       <button className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-700 py-2 rounded text-sm font-medium transition-colors">
// // // // // // // // //                         Edit
// // // // // // // // //                       </button>
// // // // // // // // //                       <button className="flex-1 bg-red-50 hover:bg-red-100 text-red-700 py-2 rounded text-sm font-medium transition-colors">
// // // // // // // // //                         Delete
// // // // // // // // //                       </button>
// // // // // // // // //                     </div>
// // // // // // // // //                   </CardContent>
// // // // // // // // //                 </Card>
// // // // // // // // //               ))}
// // // // // // // // //             </div>
// // // // // // // // //           ) : (
// // // // // // // // //             <div className="bg-white rounded-lg shadow p-8 text-center">
// // // // // // // // //               <Package className="mx-auto h-12 w-12 text-gray-400" />
// // // // // // // // //               <h3 className="mt-2 text-lg font-medium text-gray-900">No products found</h3>
// // // // // // // // //               <p className="mt-1 text-sm text-gray-500">
// // // // // // // // //                 {searchTerm ? "Try adjusting your search or filters" : "Add some products to get started"}
// // // // // // // // //               </p>
// // // // // // // // //             </div>
// // // // // // // // //           )}
// // // // // // // // //         </>
// // // // // // // // //       )}

// // // // // // // // //       {/* Recent Transactions */}
// // // // // // // // //       <motion.div 
// // // // // // // // //         className="mt-10 bg-white rounded-lg shadow-md p-6"
// // // // // // // // //         initial={{ opacity: 0 }}
// // // // // // // // //         animate={{ opacity: 1 }}
// // // // // // // // //         transition={{ delay: 0.4, duration: 0.6 }}
// // // // // // // // //       >
// // // // // // // // //         <h2 className="text-xl font-bold flex items-center mb-4 text-gray-800">
// // // // // // // // //           <TrendingUp className="mr-2 text-green-600" /> Recent Transactions
// // // // // // // // //         </h2>
        
// // // // // // // // //         {recentTransactions.length > 0 ? (
// // // // // // // // //           <div className="overflow-x-auto">
// // // // // // // // //             <table className="min-w-full divide-y divide-gray-200">
// // // // // // // // //               <thead className="bg-gray-50">
// // // // // // // // //                 <tr>
// // // // // // // // //                   <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
// // // // // // // // //                   <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
// // // // // // // // //                   <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
// // // // // // // // //                   <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
// // // // // // // // //                 </tr>
// // // // // // // // //               </thead>
// // // // // // // // //               <tbody className="bg-white divide-y divide-gray-200">
// // // // // // // // //                 {recentTransactions.map((tx, index) => (
// // // // // // // // //                   <motion.tr 
// // // // // // // // //                     key={tx.id}
// // // // // // // // //                     initial={{ opacity: 0, y: 10 }}
// // // // // // // // //                     animate={{ opacity: 1, y: 0 }}
// // // // // // // // //                     transition={{ delay: index * 0.05, duration: 0.3 }}
// // // // // // // // //                     className="hover:bg-gray-50"
// // // // // // // // //                   >
// // // // // // // // //                     <td className="px-4 py-3 whitespace-nowrap">
// // // // // // // // //                       <div className="font-medium text-gray-900">{tx.product_name}</div>
// // // // // // // // //                     </td>
// // // // // // // // //                     <td className="px-4 py-3 whitespace-nowrap">
// // // // // // // // //                       <span className={`px-2 py-1 text-xs rounded-full ${
// // // // // // // // //                         tx.type === "sale" ? "bg-green-100 text-green-800" : 
// // // // // // // // //                         tx.type === "restock" ? "bg-blue-100 text-blue-800" : 
// // // // // // // // //                         "bg-gray-100 text-gray-800"
// // // // // // // // //                       }`}>
// // // // // // // // //                         {tx.type}
// // // // // // // // //                       </span>
// // // // // // // // //                     </td>
// // // // // // // // //                     <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
// // // // // // // // //                       {tx.quantity} units
// // // // // // // // //                     </td>
// // // // // // // // //                     <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
// // // // // // // // //                       {tx.timestamp}
// // // // // // // // //                     </td>
// // // // // // // // //                   </motion.tr>
// // // // // // // // //                 ))}
// // // // // // // // //               </tbody>
// // // // // // // // //             </table>
// // // // // // // // //           </div>
// // // // // // // // //         ) : (
// // // // // // // // //           <div className="text-center py-8">
// // // // // // // // //             <Clock className="mx-auto h-10 w-10 text-gray-400" />
// // // // // // // // //             <p className="mt-2 text-gray-500">No recent transactions found.</p>
// // // // // // // // //           </div>
// // // // // // // // //         )}
// // // // // // // // //       </motion.div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default ProductDashboard;



// // // // // // // // import React, { useState, useEffect, useContext } from "react";
// // // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // // import { 
// // // // // // // //   Bell, AlertTriangle, TrendingDown, Clock, Truck, Phone, DollarSign, 
// // // // // // // //   Calendar, CheckCircle, BarChart2, RefreshCw, Filter, ChevronDown, ExternalLink 
// // // // // // // // } from "lucide-react";
// // // // // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // // // // const RestockAlerts = () => {
// // // // // // // //   const { storeId } = useContext(StoreContext);
// // // // // // // //   const [lowStockProducts, setLowStockProducts] = useState([]);
// // // // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // // // //   const [restockInProgress, setRestockInProgress] = useState([]);
// // // // // // // //   const [sortBy, setSortBy] = useState("critical"); // critical, name, supplier
// // // // // // // //   const [filterType, setFilterType] = useState("all"); // all, critical, warning
// // // // // // // //   const [expandedItem, setExpandedItem] = useState(null);
// // // // // // // //   const [selectedSupplier, setSelectedSupplier] = useState("all");
// // // // // // // //   const [suppliers, setSuppliers] = useState([]);
// // // // // // // //   const [stats, setStats] = useState({
// // // // // // // //     criticalCount: 0,
// // // // // // // //     warningCount: 0,
// // // // // // // //     totalValue: 0,
// // // // // // // //     avgDaysToEmpty: 0
// // // // // // // //   });
// // // // // // // //   const API_URL = "http://127.0.0.1:5000/products";

// // // // // // // //   useEffect(() => {
// // // // // // // //     if (storeId) {
// // // // // // // //       fetchLowStockProducts();
// // // // // // // //       // Simulate restock in progress for demo purposes
// // // // // // // //       setRestockInProgress(["65f3de2c8a9f12345", "65f3de2c8a9f67890"]);
// // // // // // // //     }
// // // // // // // //   }, [storeId]);

// // // // // // // //   const fetchLowStockProducts = () => {
// // // // // // // //     setIsLoading(true);
// // // // // // // //     fetch(`${API_URL}?storeId=${storeId}`)
// // // // // // // //       .then((res) => res.json())
// // // // // // // //       .then((data) => {
// // // // // // // //         // Filter and process low stock products
// // // // // // // //         const lowStock = data.filter((p) => p.quantity < p.stock_level);
        
// // // // // // // //         // Calculate days to empty based on sales velocity (simulated data)
// // // // // // // //         const enhancedLowStock = lowStock.map(product => {
// // // // // // // //           // Simulate sales velocity (units sold per day)
// // // // // // // //           const salesVelocity = Math.random() * 5 + 0.5;
// // // // // // // //           const daysToEmpty = product.quantity > 0 ? Math.ceil(product.quantity / salesVelocity) : 0;
// // // // // // // //           const criticalThreshold = product.stock_level * 0.3;
// // // // // // // //           const warningThreshold = product.stock_level * 0.6;
          
// // // // // // // //           // Determine status based on stock level
// // // // // // // //           let status = "normal";
// // // // // // // //           if (product.quantity < criticalThreshold) status = "critical";
// // // // // // // //           else if (product.quantity < warningThreshold) status = "warning";
          
// // // // // // // //           // Calculate estimated restock cost
// // // // // // // //           const restockCost = ((product.stock_level - product.quantity) * product.price).toFixed(2);
          
// // // // // // // //           // Add lead time (simulated)
// // // // // // // //           const leadTime = Math.floor(Math.random() * 14) + 3; // 3-14 days
          
// // // // // // // //           return {
// // // // // // // //             ...product,
// // // // // // // //             salesVelocity: salesVelocity.toFixed(1),
// // // // // // // //             daysToEmpty,
// // // // // // // //             status,
// // // // // // // //             restockCost,
// // // // // // // //             leadTime,
// // // // // // // //             lastOrderDate: generateRandomPastDate(30)
// // // // // // // //           };
// // // // // // // //         });
        
// // // // // // // //         setLowStockProducts(enhancedLowStock);
        
// // // // // // // //         // Extract unique suppliers
// // // // // // // //         const uniqueSuppliers = [...new Set(enhancedLowStock.map(p => p.supplier))];
// // // // // // // //         setSuppliers(uniqueSuppliers);
        
// // // // // // // //         // Calculate statistics
// // // // // // // //         const criticalCount = enhancedLowStock.filter(p => p.status === "critical").length;
// // // // // // // //         const warningCount = enhancedLowStock.filter(p => p.status === "warning").length;
// // // // // // // //         const totalValue = enhancedLowStock.reduce((sum, p) => sum + parseFloat(p.restockCost), 0);
// // // // // // // //         const totalDaysToEmpty = enhancedLowStock.reduce((sum, p) => sum + p.daysToEmpty, 0);
// // // // // // // //         const avgDays = enhancedLowStock.length > 0 ? Math.round(totalDaysToEmpty / enhancedLowStock.length) : 0;
        
// // // // // // // //         setStats({
// // // // // // // //           criticalCount,
// // // // // // // //           warningCount,
// // // // // // // //           totalValue: totalValue.toFixed(2),
// // // // // // // //           avgDaysToEmpty: avgDays
// // // // // // // //         });
// // // // // // // //       })
// // // // // // // //       .catch((err) => console.error("Error fetching products:", err))
// // // // // // // //       .finally(() => setIsLoading(false));
// // // // // // // //   };

// // // // // // // //   // Helper function to generate random past date
// // // // // // // //   const generateRandomPastDate = (maxDaysAgo) => {
// // // // // // // //     const today = new Date();
// // // // // // // //     const pastDate = new Date(today);
// // // // // // // //     pastDate.setDate(today.getDate() - Math.floor(Math.random() * maxDaysAgo));
// // // // // // // //     return pastDate.toISOString().split('T')[0];
// // // // // // // //   };

// // // // // // // //   // Filter products based on status and supplier
// // // // // // // //   const filteredProducts = lowStockProducts.filter(product => {
// // // // // // // //     const matchesStatus = filterType === "all" || 
// // // // // // // //                           (filterType === "critical" && product.status === "critical") ||
// // // // // // // //                           (filterType === "warning" && product.status === "warning");
// // // // // // // //     const matchesSupplier = selectedSupplier === "all" || product.supplier === selectedSupplier;
// // // // // // // //     return matchesStatus && matchesSupplier;
// // // // // // // //   });

// // // // // // // //   // Sort products based on selected criteria
// // // // // // // //   const sortedProducts = [...filteredProducts].sort((a, b) => {
// // // // // // // //     if (sortBy === "critical") {
// // // // // // // //       // Sort by status severity first, then by days to empty
// // // // // // // //       if (a.status === "critical" && b.status !== "critical") return -1;
// // // // // // // //       if (a.status !== "critical" && b.status === "critical") return 1;
// // // // // // // //       return a.daysToEmpty - b.daysToEmpty;
// // // // // // // //     } else if (sortBy === "name") {
// // // // // // // //       return a.product_name.localeCompare(b.product_name);
// // // // // // // //     } else if (sortBy === "supplier") {
// // // // // // // //       return a.supplier.localeCompare(b.supplier);
// // // // // // // //     } else if (sortBy === "days") {
// // // // // // // //       return a.daysToEmpty - b.daysToEmpty;
// // // // // // // //     }
// // // // // // // //     return 0;
// // // // // // // //   });

// // // // // // // //   // Get status color for a product
// // // // // // // //   const getStatusColor = (status) => {
// // // // // // // //     switch (status) {
// // // // // // // //       case "critical": return "bg-red-50 border-red-200 text-red-800";
// // // // // // // //       case "warning": return "bg-yellow-50 border-yellow-200 text-yellow-800";
// // // // // // // //       default: return "bg-blue-50 border-blue-200 text-blue-800";
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // Get badge color for status
// // // // // // // //   const getStatusBadge = (status) => {
// // // // // // // //     switch (status) {
// // // // // // // //       case "critical": return "bg-red-100 text-red-800";
// // // // // // // //       case "warning": return "bg-yellow-100 text-yellow-800";
// // // // // // // //       default: return "bg-blue-100 text-blue-800";
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // Toggle expanded view for a product
// // // // // // // //   const toggleExpanded = (id) => {
// // // // // // // //     setExpandedItem(expandedItem === id ? null : id);
// // // // // // // //   };

// // // // // // // //   // Simulate restock action
// // // // // // // //   const handleRestock = (productId) => {
// // // // // // // //     // In a real app, you'd make an API call here
// // // // // // // //     setRestockInProgress([...restockInProgress, productId]);
    
// // // // // // // //     // Simulate API response after delay
// // // // // // // //     setTimeout(() => {
// // // // // // // //       // Remove from in-progress and update stock level
// // // // // // // //       setRestockInProgress(restockInProgress.filter(id => id !== productId));
// // // // // // // //       setLowStockProducts(lowStockProducts.map(product => {
// // // // // // // //         if (product._id === productId) {
// // // // // // // //           return {
// // // // // // // //             ...product,
// // // // // // // //             quantity: product.stock_level,
// // // // // // // //             last_restocked: new Date().toISOString().split('T')[0]
// // // // // // // //           };
// // // // // // // //         }
// // // // // // // //         return product;
// // // // // // // //       }));
// // // // // // // //     }, 2000);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="p-6 max-w-7xl mx-auto bg-gray-50 min-h-screen">
// // // // // // // //       <motion.div
// // // // // // // //         initial={{ opacity: 0, y: -20 }}
// // // // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // // // //         transition={{ duration: 0.5 }}
// // // // // // // //       >
// // // // // // // //         <h1 className="text-3xl font-bold mb-2 text-gray-800 flex items-center">
// // // // // // // //           <Bell className="mr-2 text-red-600" /> 
// // // // // // // //           Restock Alerts Dashboard
// // // // // // // //         </h1>
// // // // // // // //         <p className="text-gray-500 mb-6">Monitor and manage low stock items requiring attention</p>
// // // // // // // //       </motion.div>
      
// // // // // // // //       {/* Statistics Cards */}
// // // // // // // //       <motion.div 
// // // // // // // //         className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
// // // // // // // //         initial={{ opacity: 0 }}
// // // // // // // //         animate={{ opacity: 1 }}
// // // // // // // //         transition={{ duration: 0.6 }}
// // // // // // // //       >
// // // // // // // //         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-red-500">
// // // // // // // //           <div className="flex justify-between items-center">
// // // // // // // //             <div>
// // // // // // // //               <p className="text-sm text-gray-500">Critical Items</p>
// // // // // // // //               <p className="text-2xl font-bold">{stats.criticalCount}</p>
// // // // // // // //             </div>
// // // // // // // //             <AlertTriangle className="h-10 w-10 text-red-500 opacity-70" />
// // // // // // // //           </div>
// // // // // // // //         </div>
        
// // // // // // // //         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-yellow-500">
// // // // // // // //           <div className="flex justify-between items-center">
// // // // // // // //             <div>
// // // // // // // //               <p className="text-sm text-gray-500">Warning Items</p>
// // // // // // // //               <p className="text-2xl font-bold">{stats.warningCount}</p>
// // // // // // // //             </div>
// // // // // // // //             <Bell className="h-10 w-10 text-yellow-500 opacity-70" />
// // // // // // // //           </div>
// // // // // // // //         </div>
        
// // // // // // // //         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
// // // // // // // //           <div className="flex justify-between items-center">
// // // // // // // //             <div>
// // // // // // // //               <p className="text-sm text-gray-500">Avg. Days to Empty</p>
// // // // // // // //               <p className="text-2xl font-bold">{stats.avgDaysToEmpty}</p>
// // // // // // // //             </div>
// // // // // // // //             <Clock className="h-10 w-10 text-blue-500 opacity-70" />
// // // // // // // //           </div>
// // // // // // // //         </div>
        
// // // // // // // //         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
// // // // // // // //           <div className="flex justify-between items-center">
// // // // // // // //             <div>
// // // // // // // //               <p className="text-sm text-gray-500">Restock Value</p>
// // // // // // // //               <p className="text-2xl font-bold">${stats.totalValue}</p>
// // // // // // // //             </div>
// // // // // // // //             <DollarSign className="h-10 w-10 text-green-500 opacity-70" />
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </motion.div>
      
// // // // // // // //       {/* Filter Controls */}
// // // // // // // //       <div className="bg-white rounded-lg shadow-md p-4 mb-6">
// // // // // // // //         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
// // // // // // // //           <div className="flex items-center space-x-2">
// // // // // // // //             <Filter className="text-gray-400" />
// // // // // // // //             <span className="text-gray-700 font-medium">Filter:</span>
            
// // // // // // // //             <div className="flex space-x-2">
// // // // // // // //               <button
// // // // // // // //                 className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
// // // // // // // //                   filterType === "all" 
// // // // // // // //                     ? "bg-blue-100 text-blue-800" 
// // // // // // // //                     : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// // // // // // // //                 }`}
// // // // // // // //                 onClick={() => setFilterType("all")}
// // // // // // // //               >
// // // // // // // //                 All
// // // // // // // //               </button>
// // // // // // // //               <button
// // // // // // // //                 className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
// // // // // // // //                   filterType === "critical" 
// // // // // // // //                     ? "bg-red-100 text-red-800" 
// // // // // // // //                     : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// // // // // // // //                 }`}
// // // // // // // //                 onClick={() => setFilterType("critical")}
// // // // // // // //               >
// // // // // // // //                 Critical
// // // // // // // //               </button>
// // // // // // // //               <button
// // // // // // // //                 className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
// // // // // // // //                   filterType === "warning" 
// // // // // // // //                     ? "bg-yellow-100 text-yellow-800" 
// // // // // // // //                     : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// // // // // // // //                 }`}
// // // // // // // //                 onClick={() => setFilterType("warning")}
// // // // // // // //               >
// // // // // // // //                 Warning
// // // // // // // //               </button>
// // // // // // // //             </div>
// // // // // // // //           </div>
          
// // // // // // // //           <div className="flex items-center space-x-4">
// // // // // // // //             <div className="relative">
// // // // // // // //               <select
// // // // // // // //                 className="appearance-none bg-gray-100 border border-gray-300 rounded-md pl-3 pr-8 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
// // // // // // // //                 value={selectedSupplier}
// // // // // // // //                 onChange={(e) => setSelectedSupplier(e.target.value)}
// // // // // // // //               >
// // // // // // // //                 <option value="all">All Suppliers</option>
// // // // // // // //                 {suppliers.map(supplier => (
// // // // // // // //                   <option key={supplier} value={supplier}>{supplier}</option>
// // // // // // // //                 ))}
// // // // // // // //               </select>
// // // // // // // //               <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
// // // // // // // //             </div>
            
// // // // // // // //             <div className="relative">
// // // // // // // //               <select
// // // // // // // //                 className="appearance-none bg-gray-100 border border-gray-300 rounded-md pl-3 pr-8 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
// // // // // // // //                 value={sortBy}
// // // // // // // //                 onChange={(e) => setSortBy(e.target.value)}
// // // // // // // //               >
// // // // // // // //                 <option value="critical">Sort by Priority</option>
// // // // // // // //                 <option value="days">Sort by Days to Empty</option>
// // // // // // // //                 <option value="name">Sort by Name</option>
// // // // // // // //                 <option value="supplier">Sort by Supplier</option>
// // // // // // // //               </select>
// // // // // // // //               <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
// // // // // // // //             </div>
            
// // // // // // // //             <button 
// // // // // // // //               className="bg-blue-100 hover:bg-blue-200 text-blue-800 p-2 rounded-full transition-colors"
// // // // // // // //               onClick={fetchLowStockProducts}
// // // // // // // //             >
// // // // // // // //               <RefreshCw className="h-4 w-4" />
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
      
// // // // // // // //       {/* Loading State */}
// // // // // // // //       {isLoading ? (
// // // // // // // //         <div className="flex justify-center items-center py-20">
// // // // // // // //           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
// // // // // // // //         </div>
// // // // // // // //       ) : (
// // // // // // // //         <>
// // // // // // // //           {/* Restock Items List */}
// // // // // // // //           {sortedProducts.length > 0 ? (
// // // // // // // //             <div className="space-y-4">
// // // // // // // //               {sortedProducts.map((product) => (
// // // // // // // //                 <motion.div 
// // // // // // // //                   key={product._id}
// // // // // // // //                   initial={{ x: -20, opacity: 0 }}
// // // // // // // //                   animate={{ x: 0, opacity: 1 }}
// // // // // // // //                   className={`border rounded-lg overflow-hidden shadow-sm ${
// // // // // // // //                     expandedItem === product._id ? "bg-gray-50" : "bg-white"
// // // // // // // //                   }`}
// // // // // // // //                 >
// // // // // // // //                   <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4">
// // // // // // // //                     <div className="flex items-start md:items-center space-x-3">
// // // // // // // //                       <div className={`p-2 rounded-md ${getStatusColor(product.status)}`}>
// // // // // // // //                         {product.status === "critical" ? 
// // // // // // // //                           <AlertTriangle className="h-5 w-5" /> : 
// // // // // // // //                           <Bell className="h-5 w-5" />}
// // // // // // // //                       </div>
                      
// // // // // // // //                       <div>
// // // // // // // //                         <div className="flex items-center">
// // // // // // // //                           <h3 className="font-medium text-lg">{product.product_name}</h3>
// // // // // // // //                           <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${getStatusBadge(product.status)}`}>
// // // // // // // //                             {product.status === "critical" ? "Critical" : "Warning"}
// // // // // // // //                           </span>
// // // // // // // //                         </div>
// // // // // // // //                         <p className="text-sm text-gray-600">
// // // // // // // //                           <span className={product.status === "critical" ? "font-bold text-red-600" : ""}>
// // // // // // // //                             {product.quantity}
// // // // // // // //                           </span> / {product.stock_level} units
// // // // // // // //                           {product.daysToEmpty <= 7 && (
// // // // // // // //                             <span className="ml-2 text-red-600 font-medium">
// // // // // // // //                               {product.daysToEmpty === 0 ? "Out of stock!" : `${product.daysToEmpty} days until empty`}
// // // // // // // //                             </span>
// // // // // // // //                           )}
// // // // // // // //                         </p>
// // // // // // // //                       </div>
// // // // // // // //                     </div>
                    
// // // // // // // //                     <div className="mt-4 md:mt-0 flex items-center space-x-2">
// // // // // // // //                       <button
// // // // // // // //                         className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
// // // // // // // //                         onClick={() => toggleExpanded(product._id)}
// // // // // // // //                       >
// // // // // // // //                         {expandedItem === product._id ? "Less details" : "More details"}
// // // // // // // //                         <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
// // // // // // // //                           expandedItem === product._id ? "transform rotate-180" : ""
// // // // // // // //                         }`} />
// // // // // // // //                       </button>
                      
// // // // // // // //                       {restockInProgress.includes(product._id) ? (
// // // // // // // //                         <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded text-sm flex items-center cursor-not-allowed">
// // // // // // // //                           <div className="animate-spin rounded-full h-3 w-3 border-t-2 border-gray-600 mr-2"></div>
// // // // // // // //                           Processing...
// // // // // // // //                         </button>
// // // // // // // //                       ) : (
// // // // // // // //                         <button 
// // // // // // // //                           className="bg-red-100 hover:bg-red-200 text-red-800 px-4 py-2 rounded text-sm flex items-center transition-colors"
// // // // // // // //                           onClick={() => handleRestock(product._id)}
// // // // // // // //                         >
// // // // // // // //                           <Truck className="mr-2 h-4 w-4" /> Restock Now
// // // // // // // //                         </button>
// // // // // // // //                       )}
// // // // // // // //                     </div>
// // // // // // // //                   </div>
                  
// // // // // // // //                   {/* Expanded Details */}
// // // // // // // //                   <AnimatePresence>
// // // // // // // //                     {expandedItem === product._id && (
// // // // // // // //                       <motion.div
// // // // // // // //                         initial={{ height: 0, opacity: 0 }}
// // // // // // // //                         animate={{ height: "auto", opacity: 1 }}
// // // // // // // //                         exit={{ height: 0, opacity: 0 }}
// // // // // // // //                         transition={{ duration: 0.2 }}
// // // // // // // //                         className="overflow-hidden"
// // // // // // // //                       >
// // // // // // // //                         <div className="p-4 pt-0 border-t border-gray-100">
// // // // // // // //                           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// // // // // // // //                             <div className="bg-gray-50 p-3 rounded-lg">
// // // // // // // //                               <h4 className="text-sm font-medium text-gray-500 mb-1 flex items-center">
// // // // // // // //                                 <BarChart2 className="mr-1 h-4 w-4" /> Usage Metrics
// // // // // // // //                               </h4>
// // // // // // // //                               <p className="text-sm"><span className="font-medium">Sales Velocity:</span> {product.salesVelocity} units/day</p>
// // // // // // // //                               <p className="text-sm"><span className="font-medium">Days to Empty:</span> {product.daysToEmpty}</p>
// // // // // // // //                               <div className="mt-1 h-2 bg-gray-200 rounded-full overflow-hidden">
// // // // // // // //                                 <div 
// // // // // // // //                                   className={`h-full ${
// // // // // // // //                                     product.daysToEmpty < 3 ? "bg-red-500" : 
// // // // // // // //                                     product.daysToEmpty < 7 ? "bg-yellow-500" : "bg-green-500"
// // // // // // // //                                   }`}
// // // // // // // //                                   style={{ width: `${Math.min(100, (product.daysToEmpty / 30) * 100)}%` }}
// // // // // // // //                                 ></div>
// // // // // // // //                               </div>
// // // // // // // //                             </div>
                            
// // // // // // // //                             <div className="bg-gray-50 p-3 rounded-lg">
// // // // // // // //                               <h4 className="text-sm font-medium text-gray-500 mb-1 flex items-center">
// // // // // // // //                                 <Truck className="mr-1 h-4 w-4" /> Supplier Information
// // // // // // // //                               </h4>
// // // // // // // //                               <p className="text-sm"><span className="font-medium">Supplier:</span> {product.supplier}</p>
// // // // // // // //                               <p className="text-sm"><span className="font-medium">Contact:</span> {product.supplier_contact || "N/A"}</p>
// // // // // // // //                               <p className="text-sm"><span className="font-medium">Lead Time:</span> {product.leadTime} days</p>
// // // // // // // //                               <button className="mt-1 text-blue-600 text-xs flex items-center">
// // // // // // // //                                 <Phone className="mr-1 h-3 w-3" /> Contact Supplier
// // // // // // // //                               </button>
// // // // // // // //                             </div>
                            
// // // // // // // //                             <div className="bg-gray-50 p-3 rounded-lg">
// // // // // // // //                               <h4 className="text-sm font-medium text-gray-500 mb-1 flex items-center">
// // // // // // // //                                 <Calendar className="mr-1 h-4 w-4" /> Restock History
// // // // // // // //                               </h4>
// // // // // // // //                               <p className="text-sm"><span className="font-medium">Last Restocked:</span> {product.last_restocked || "N/A"}</p>
// // // // // // // //                               <p className="text-sm"><span className="font-medium">Last Order Date:</span> {product.lastOrderDate}</p>
// // // // // // // //                               <p className="text-sm"><span className="font-medium">Restock Cost:</span> ${product.restockCost}</p>
// // // // // // // //                               <button className="mt-1 text-blue-600 text-xs flex items-center">
// // // // // // // //                                 <ExternalLink className="mr-1 h-3 w-3" /> View Order History
// // // // // // // //                               </button>
// // // // // // // //                             </div>
// // // // // // // //                           </div>
                          
// // // // // // // //                           <div className="mt-4 flex justify-between">
// // // // // // // //                             <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-50 transition-colors">
// // // // // // // //                               Schedule Restock
// // // // // // // //                             </button>
// // // // // // // //                             <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-50 transition-colors">
// // // // // // // //                               Adjust Stock Level
// // // // // // // //                             </button>
// // // // // // // //                             <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-50 transition-colors">
// // // // // // // //                               Generate Purchase Order
// // // // // // // //                             </button>
// // // // // // // //                           </div>
// // // // // // // //                         </div>
// // // // // // // //                       </motion.div>
// // // // // // // //                     )}
// // // // // // // //                   </AnimatePresence>
// // // // // // // //                 </motion.div>
// // // // // // // //               ))}
// // // // // // // //             </div>
// // // // // // // //           ) : (
// // // // // // // //             <div className="bg-white rounded-lg shadow p-8 text-center">
// // // // // // // //               <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
// // // // // // // //               <h3 className="mt-2 text-lg font-medium text-gray-900">All products are well-stocked</h3>
// // // // // // // //               <p className="mt-1 text-sm text-gray-500">
// // // // // // // //                 There are no items requiring immediate restock attention
// // // // // // // //               </p>
// // // // // // // //             </div>
// // // // // // // //           )}
// // // // // // // //         </>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default RestockAlerts;

// // // // // // // import React, { useState, useEffect, useContext, useMemo } from "react";
// // // // // // // import { StoreContext } from "./StoreContext";
// // // // // // // import { 
// // // // // // //   Bell, AlertTriangle, TrendingDown, Clock, Truck, Phone, DollarSign, 
// // // // // // //   Calendar, CheckCircle, BarChart2, RefreshCw, Filter, ChevronDown, ExternalLink,
// // // // // // //   ShoppingCart, TrendingUp, Users, FileText, PieChart, DownloadCloud
// // // // // // // } from "lucide-react";
// // // // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // // // const RestockAlerts = () => {
// // // // // // //   const { storeId } = useContext(StoreContext);
// // // // // // //   const [lowStockProducts, setLowStockProducts] = useState([]);
// // // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // // //   const [restockInProgress, setRestockInProgress] = useState([]);
// // // // // // //   const [sortBy, setSortBy] = useState("critical"); // critical, name, supplier, days, profit
// // // // // // //   const [filterType, setFilterType] = useState("all"); // all, critical, warning
// // // // // // //   const [expandedItem, setExpandedItem] = useState(null);
// // // // // // //   const [selectedSupplier, setSelectedSupplier] = useState("all");
// // // // // // //   const [suppliers, setSuppliers] = useState([]);
// // // // // // //   const [dateRange, setDateRange] = useState("30"); // 7, 30, 90 days
// // // // // // //   const [view, setView] = useState("list"); // list, grid, analytics
// // // // // // //   const [restockHistory, setRestockHistory] = useState([]);
// // // // // // //   const [showRestockModal, setShowRestockModal] = useState(false);
// // // // // // //   const [selectedProduct, setSelectedProduct] = useState(null);
// // // // // // //   const [restockQuantity, setRestockQuantity] = useState(0);
// // // // // // //   const [stats, setStats] = useState({
// // // // // // //     criticalCount: 0,
// // // // // // //     warningCount: 0,
// // // // // // //     totalValue: 0,
// // // // // // //     avgDaysToEmpty: 0,
// // // // // // //     potentialLostSales: 0,
// // // // // // //     stockoutRisk: 0
// // // // // // //   });
// // // // // // //   const API_URL = "http://127.0.0.1:5000/products";

// // // // // // //   useEffect(() => {
// // // // // // //     if (storeId) {
// // // // // // //       fetchLowStockProducts();
// // // // // // //       fetchRestockHistory();
// // // // // // //       // Simulate restock in progress for demo purposes
// // // // // // //       setRestockInProgress(["65f3de2c8a9f12345", "65f3de2c8a9f67890"]);
// // // // // // //     }
// // // // // // //   }, [storeId, dateRange]);

// // // // // // //   const fetchLowStockProducts = () => {
// // // // // // //     setIsLoading(true);
// // // // // // //     fetch(`${API_URL}?storeId=${storeId}`)
// // // // // // //       .then((res) => res.json())
// // // // // // //       .then((data) => {
// // // // // // //         // Filter and process low stock products
// // // // // // //         const lowStock = data.filter((p) => p.quantity < p.stock_level);
        
// // // // // // //         // Calculate days to empty based on sales velocity (simulated data)
// // // // // // //         const enhancedLowStock = lowStock.map(product => {
// // // // // // //           // Simulate sales velocity (units sold per day)
// // // // // // //           const salesVelocity = Math.random() * 5 + 0.5;
// // // // // // //           const daysToEmpty = product.quantity > 0 ? Math.ceil(product.quantity / salesVelocity) : 0;
// // // // // // //           const criticalThreshold = product.stock_level * 0.3;
// // // // // // //           const warningThreshold = product.stock_level * 0.6;
          
// // // // // // //           // Determine status based on stock level
// // // // // // //           let status = "normal";
// // // // // // //           if (product.quantity < criticalThreshold) status = "critical";
// // // // // // //           else if (product.quantity < warningThreshold) status = "warning";
          
// // // // // // //           // Calculate estimated restock cost
// // // // // // //           const restockCost = ((product.stock_level - product.quantity) * product.price).toFixed(2);
          
// // // // // // //           // Add lead time (simulated)
// // // // // // //           const leadTime = Math.floor(Math.random() * 14) + 3; // 3-14 days
          
// // // // // // //           // Calculate profit margin (simulated)
// // // // // // //           const costPrice = product.price * 0.6; // Assume 40% markup
// // // // // // //           const profitMargin = ((product.price - costPrice) / product.price * 100).toFixed(1);
          
// // // // // // //           // Calculate potential lost sales if stockout occurs
// // // // // // //           const potentialLostSales = (salesVelocity * leadTime * product.price).toFixed(2);
          
// // // // // // //           // Stock turnover rate (simulated)
// // // // // // //           const turnoverRate = (365 / (product.stock_level / salesVelocity)).toFixed(1);
          
// // // // // // //           // Calculate stockout risk score (0-100)
// // // // // // //           const stockoutRisk = Math.min(100, Math.max(0, Math.round(
// // // // // // //             (100 - (daysToEmpty / leadTime) * 100) + 
// // // // // // //             (turnoverRate / 20) * 100
// // // // // // //           ) / 2));
          
// // // // // // //           // Seasonal demand indicator (simulated)
// // // // // // //           const seasons = ["Spring", "Summer", "Fall", "Winter"];
// // // // // // //           const seasonalDemand = {
// // // // // // //             season: seasons[Math.floor(Math.random() * seasons.length)],
// // // // // // //             impact: ["High", "Medium", "Low"][Math.floor(Math.random() * 3)]
// // // // // // //           };
          
// // // // // // //           // ABC Classification based on value
// // // // // // //           let abcClass = "C";
// // // // // // //           if (product.price * product.stock_level > 1000) abcClass = "A";
// // // // // // //           else if (product.price * product.stock_level > 500) abcClass = "B";
          
// // // // // // //           return {
// // // // // // //             ...product,
// // // // // // //             salesVelocity: salesVelocity.toFixed(1),
// // // // // // //             daysToEmpty,
// // // // // // //             status,
// // // // // // //             restockCost,
// // // // // // //             leadTime,
// // // // // // //             profitMargin,
// // // // // // //             potentialLostSales,
// // // // // // //             turnoverRate,
// // // // // // //             stockoutRisk,
// // // // // // //             seasonalDemand,
// // // // // // //             abcClass,
// // // // // // //             lastOrderDate: generateRandomPastDate(30),
// // // // // // //             recommendedOrderQuantity: Math.ceil(salesVelocity * (leadTime + 7)), // Lead time + safety stock
// // // // // // //             alternativeSuppliers: generateAlternativeSuppliers(),
// // // // // // //             priceHistory: generatePriceHistory()
// // // // // // //           };
// // // // // // //         });
        
// // // // // // //         setLowStockProducts(enhancedLowStock);
        
// // // // // // //         // Extract unique suppliers
// // // // // // //         const uniqueSuppliers = [...new Set(enhancedLowStock.map(p => p.supplier))];
// // // // // // //         setSuppliers(uniqueSuppliers);
        
// // // // // // //         // Calculate statistics
// // // // // // //         const criticalCount = enhancedLowStock.filter(p => p.status === "critical").length;
// // // // // // //         const warningCount = enhancedLowStock.filter(p => p.status === "warning").length;
// // // // // // //         const totalValue = enhancedLowStock.reduce((sum, p) => sum + parseFloat(p.restockCost), 0);
// // // // // // //         const totalDaysToEmpty = enhancedLowStock.reduce((sum, p) => sum + p.daysToEmpty, 0);
// // // // // // //         const avgDays = enhancedLowStock.length > 0 ? Math.round(totalDaysToEmpty / enhancedLowStock.length) : 0;
// // // // // // //         const potentialLostSales = enhancedLowStock.reduce((sum, p) => sum + parseFloat(p.potentialLostSales), 0);
// // // // // // //         const avgStockoutRisk = enhancedLowStock.length > 0 ? 
// // // // // // //           Math.round(enhancedLowStock.reduce((sum, p) => sum + p.stockoutRisk, 0) / enhancedLowStock.length) : 0;
        
// // // // // // //         setStats({
// // // // // // //           criticalCount,
// // // // // // //           warningCount,
// // // // // // //           totalValue: totalValue.toFixed(2),
// // // // // // //           avgDaysToEmpty: avgDays,
// // // // // // //           potentialLostSales: potentialLostSales.toFixed(2),
// // // // // // //           stockoutRisk: avgStockoutRisk
// // // // // // //         });
// // // // // // //       })
// // // // // // //       .catch((err) => console.error("Error fetching products:", err))
// // // // // // //       .finally(() => setIsLoading(false));
// // // // // // //   };

// // // // // // //   // Fetch restock history (simulated)
// // // // // // //   const fetchRestockHistory = () => {
// // // // // // //     // In a real app, this would be an API call
// // // // // // //     setTimeout(() => {
// // // // // // //       const history = Array.from({ length: 10 }, (_, i) => ({
// // // // // // //         id: `hist-${i}`,
// // // // // // //         product_name: `Product ${i + 1}`,
// // // // // // //         date: generateRandomPastDate(parseInt(dateRange)),
// // // // // // //         quantity: Math.floor(Math.random() * 100) + 20,
// // // // // // //         cost: (Math.random() * 1000 + 200).toFixed(2),
// // // // // // //         supplier: ["ABC Supplies", "XYZ Wholesale", "Global Distributors"][Math.floor(Math.random() * 3)],
// // // // // // //         status: ["Completed", "In Transit", "Ordered"][Math.floor(Math.random() * 3)]
// // // // // // //       }));
      
// // // // // // //       setRestockHistory(history);
// // // // // // //     }, 500);
// // // // // // //   };

// // // // // // //   // Helper function to generate random past date
// // // // // // //   const generateRandomPastDate = (maxDaysAgo) => {
// // // // // // //     const today = new Date();
// // // // // // //     const pastDate = new Date(today);
// // // // // // //     pastDate.setDate(today.getDate() - Math.floor(Math.random() * maxDaysAgo));
// // // // // // //     return pastDate.toISOString().split('T')[0];
// // // // // // //   };

// // // // // // //   // Helper function to generate alternative suppliers (simulated)
// // // // // // //   const generateAlternativeSuppliers = () => {
// // // // // // //     const suppliers = [
// // // // // // //       { name: "ABC Supplies", leadTime: 5, priceMultiplier: 1.1 },
// // // // // // //       { name: "XYZ Wholesale", leadTime: 7, priceMultiplier: 0.95 },
// // // // // // //       { name: "Global Distributors", leadTime: 10, priceMultiplier: 0.9 }
// // // // // // //     ];
    
// // // // // // //     return suppliers.slice(0, Math.floor(Math.random() * 2) + 1);
// // // // // // //   };

// // // // // // //   // Helper function to generate price history (simulated)
// // // // // // //   const generatePriceHistory = () => {
// // // // // // //     const basePrice = Math.random() * 50 + 10;
// // // // // // //     return Array.from({ length: 6 }, (_, i) => ({
// // // // // // //       month: i + 1,
// // // // // // //       price: (basePrice * (1 + (Math.random() * 0.2 - 0.1))).toFixed(2)
// // // // // // //     }));
// // // // // // //   };

// // // // // // //   // Filter products based on status and supplier
// // // // // // //   const filteredProducts = useMemo(() => {
// // // // // // //     return lowStockProducts.filter(product => {
// // // // // // //       const matchesStatus = filterType === "all" || 
// // // // // // //                            (filterType === "critical" && product.status === "critical") ||
// // // // // // //                            (filterType === "warning" && product.status === "warning");
// // // // // // //       const matchesSupplier = selectedSupplier === "all" || product.supplier === selectedSupplier;
// // // // // // //       return matchesStatus && matchesSupplier;
// // // // // // //     });
// // // // // // //   }, [lowStockProducts, filterType, selectedSupplier]);

// // // // // // //   // Sort products based on selected criteria
// // // // // // //   const sortedProducts = useMemo(() => {
// // // // // // //     return [...filteredProducts].sort((a, b) => {
// // // // // // //       if (sortBy === "critical") {
// // // // // // //         // Sort by status severity first, then by days to empty
// // // // // // //         if (a.status === "critical" && b.status !== "critical") return -1;
// // // // // // //         if (a.status !== "critical" && b.status === "critical") return 1;
// // // // // // //         return a.daysToEmpty - b.daysToEmpty;
// // // // // // //       } else if (sortBy === "name") {
// // // // // // //         return a.product_name.localeCompare(b.product_name);
// // // // // // //       } else if (sortBy === "supplier") {
// // // // // // //         return a.supplier.localeCompare(b.supplier);
// // // // // // //       } else if (sortBy === "days") {
// // // // // // //         return a.daysToEmpty - b.daysToEmpty;
// // // // // // //       } else if (sortBy === "profit") {
// // // // // // //         return parseFloat(b.profitMargin) - parseFloat(a.profitMargin);
// // // // // // //       } else if (sortBy === "risk") {
// // // // // // //         return b.stockoutRisk - a.stockoutRisk;
// // // // // // //       }
// // // // // // //       return 0;
// // // // // // //     });
// // // // // // //   }, [filteredProducts, sortBy]);

// // // // // // //   // Calculate overall inventory health score (0-100)
// // // // // // //   const inventoryHealthScore = useMemo(() => {
// // // // // // //     if (lowStockProducts.length === 0) return 100;
    
// // // // // // //     const criticalPercentage = stats.criticalCount / lowStockProducts.length * 100;
// // // // // // //     const warningPercentage = stats.warningCount / lowStockProducts.length * 100;
    
// // // // // // //     return Math.max(0, Math.round(100 - (criticalPercentage * 0.7 + warningPercentage * 0.3)));
// // // // // // //   }, [lowStockProducts, stats]);

// // // // // // //   // Get status color for a product
// // // // // // //   const getStatusColor = (status) => {
// // // // // // //     switch (status) {
// // // // // // //       case "critical": return "bg-red-50 border-red-200 text-red-800";
// // // // // // //       case "warning": return "bg-yellow-50 border-yellow-200 text-yellow-800";
// // // // // // //       default: return "bg-blue-50 border-blue-200 text-blue-800";
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Get badge color for status
// // // // // // //   const getStatusBadge = (status) => {
// // // // // // //     switch (status) {
// // // // // // //       case "critical": return "bg-red-100 text-red-800";
// // // // // // //       case "warning": return "bg-yellow-100 text-yellow-800";
// // // // // // //       default: return "bg-blue-100 text-blue-800";
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Toggle expanded view for a product
// // // // // // //   const toggleExpanded = (id) => {
// // // // // // //     setExpandedItem(expandedItem === id ? null : id);
// // // // // // //   };

// // // // // // //   // Handle restock modal open
// // // // // // //   const openRestockModal = (product) => {
// // // // // // //     setSelectedProduct(product);
// // // // // // //     setRestockQuantity(product.stock_level - product.quantity);
// // // // // // //     setShowRestockModal(true);
// // // // // // //   };

// // // // // // //   // Simulate restock action
// // // // // // //   const handleRestock = (productId, quantity) => {
// // // // // // //     // In a real app, you'd make an API call here
// // // // // // //     setRestockInProgress([...restockInProgress, productId]);
// // // // // // //     setShowRestockModal(false);
    
// // // // // // //     // Simulate API response after delay
// // // // // // //     setTimeout(() => {
// // // // // // //       // Remove from in-progress and update stock level
// // // // // // //       setRestockInProgress(restockInProgress.filter(id => id !== productId));
// // // // // // //       setLowStockProducts(lowStockProducts.map(product => {
// // // // // // //         if (product._id === productId) {
// // // // // // //           return {
// // // // // // //             ...product,
// // // // // // //             quantity: product.quantity + (quantity || (product.stock_level - product.quantity)),
// // // // // // //             last_restocked: new Date().toISOString().split('T')[0]
// // // // // // //           };
// // // // // // //         }
// // // // // // //         return product;
// // // // // // //       }));
      
// // // // // // //       // Update restock history
// // // // // // //       const restockedProduct = lowStockProducts.find(p => p._id === productId);
// // // // // // //       if (restockedProduct) {
// // // // // // //         const newHistoryEntry = {
// // // // // // //           id: `hist-new-${Date.now()}`,
// // // // // // //           product_name: restockedProduct.product_name,
// // // // // // //           date: new Date().toISOString().split('T')[0],
// // // // // // //           quantity: quantity || (restockedProduct.stock_level - restockedProduct.quantity),
// // // // // // //           cost: parseFloat(restockedProduct.price) * (quantity || (restockedProduct.stock_level - restockedProduct.quantity)),
// // // // // // //           supplier: restockedProduct.supplier,
// // // // // // //           status: "Completed"
// // // // // // //         };
// // // // // // //         setRestockHistory([newHistoryEntry, ...restockHistory]);
// // // // // // //       }
// // // // // // //     }, 2000);
// // // // // // //   };

// // // // // // //   // Export data to CSV
// // // // // // //   const exportToCSV = () => {
// // // // // // //     const headers = ["Product Name", "Current Stock", "Stock Level", "Status", "Days to Empty", "Supplier", "Restock Cost"];
// // // // // // //     const csvData = sortedProducts.map(p => [
// // // // // // //       p.product_name,
// // // // // // //       p.quantity,
// // // // // // //       p.stock_level,
// // // // // // //       p.status,
// // // // // // //       p.daysToEmpty,
// // // // // // //       p.supplier,
// // // // // // //       p.restockCost
// // // // // // //     ]);
    
// // // // // // //     const csvContent = [
// // // // // // //       headers.join(","),
// // // // // // //       ...csvData.map(row => row.join(","))
// // // // // // //     ].join("\n");
    
// // // // // // //     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
// // // // // // //     const url = URL.createObjectURL(blob);
// // // // // // //     const link = document.createElement("a");
// // // // // // //     link.setAttribute("href", url);
// // // // // // //     link.setAttribute("download", "restock_alerts.csv");
// // // // // // //     document.body.appendChild(link);
// // // // // // //     link.click();
// // // // // // //     document.body.removeChild(link);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="p-6 max-w-7xl mx-auto bg-gray-50 min-h-screen">
// // // // // // //       <motion.div
// // // // // // //         initial={{ opacity: 0, y: -20 }}
// // // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // // //         transition={{ duration: 0.5 }}
// // // // // // //         className="flex flex-col md:flex-row md:items-center md:justify-between mb-6"
// // // // // // //       >
// // // // // // //         <div>
// // // // // // //           <h1 className="text-3xl font-bold mb-2 text-gray-800 flex items-center">
// // // // // // //             <Bell className="mr-2 text-red-600" /> 
// // // // // // //             Restock Alerts Dashboard
// // // // // // //           </h1>
// // // // // // //           <p className="text-gray-500">Monitor and manage low stock items requiring attention</p>
// // // // // // //         </div>
        
// // // // // // //         <div className="mt-4 md:mt-0 flex items-center space-x-2">
// // // // // // //           <button
// // // // // // //             className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
// // // // // // //               view === "list" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
// // // // // // //             }`}
// // // // // // //             onClick={() => setView("list")}
// // // // // // //           >
// // // // // // //             List View
// // // // // // //           </button>
// // // // // // //           <button
// // // // // // //             className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
// // // // // // //               view === "analytics" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
// // // // // // //             }`}
// // // // // // //             onClick={() => setView("analytics")}
// // // // // // //           >
// // // // // // //             Analytics
// // // // // // //           </button>
// // // // // // //           <button
// // // // // // //             className="ml-2 bg-green-100 hover:bg-green-200 text-green-800 px-3 py-1 rounded-md text-sm font-medium transition-colors flex items-center"
// // // // // // //             onClick={exportToCSV}
// // // // // // //           >
// // // // // // //             <DownloadCloud className="mr-1 h-4 w-4" /> Export
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </motion.div>
      
// // // // // // //       {/* Statistics Cards */}
// // // // // // //       <motion.div 
// // // // // // //         className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6"
// // // // // // //         initial={{ opacity: 0 }}
// // // // // // //         animate={{ opacity: 1 }}
// // // // // // //         transition={{ duration: 0.6 }}
// // // // // // //       >
// // // // // // //         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-red-500">
// // // // // // //           <div className="flex justify-between items-center">
// // // // // // //             <div>
// // // // // // //               <p className="text-sm text-gray-500">Critical Items</p>
// // // // // // //               <p className="text-2xl font-bold">{stats.criticalCount}</p>
// // // // // // //             </div>
// // // // // // //             <AlertTriangle className="h-10 w-10 text-red-500 opacity-70" />
// // // // // // //           </div>
// // // // // // //         </div>
        
// // // // // // //         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-yellow-500">
// // // // // // //           <div className="flex justify-between items-center">
// // // // // // //             <div>
// // // // // // //               <p className="text-sm text-gray-500">Warning Items</p>
// // // // // // //               <p className="text-2xl font-bold">{stats.warningCount}</p>
// // // // // // //             </div>
// // // // // // //             <Bell className="h-10 w-10 text-yellow-500 opacity-70" />
// // // // // // //           </div>
// // // // // // //         </div>
        
// // // // // // //         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
// // // // // // //           <div className="flex justify-between items-center">
// // // // // // //             <div>
// // // // // // //               <p className="text-sm text-gray-500">Avg. Days to Empty</p>
// // // // // // //               <p className="text-2xl font-bold">{stats.avgDaysToEmpty}</p>
// // // // // // //             </div>
// // // // // // //             <Clock className="h-10 w-10 text-blue-500 opacity-70" />
// // // // // // //           </div>
// // // // // // //         </div>
        
// // // // // // //         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
// // // // // // //           <div className="flex justify-between items-center">
// // // // // // //             <div>
// // // // // // //               <p className="text-sm text-gray-500">Restock Value</p>
// // // // // // //               <p className="text-2xl font-bold">${stats.totalValue}</p>
// // // // // // //             </div>
// // // // // // //             <DollarSign className="h-10 w-10 text-green-500 opacity-70" />
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-500">
// // // // // // //           <div className="flex justify-between items-center">
// // // // // // //             <div>
// // // // // // //               <p className="text-sm text-gray-500">Potential Lost Sales</p>
// // // // // // //               <p className="text-2xl font-bold">${stats.potentialLostSales}</p>
// // // // // // //             </div>
// // // // // // //             <TrendingDown className="h-10 w-10 text-purple-500 opacity-70" />
// // // // // // //           </div>
// // // // // // //         </div>
        
// // // // // // //         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-indigo-500">
// // // // // // //           <div className="flex justify-between items-center">
// // // // // // //             <div>
// // // // // // //               <p className="text-sm text-gray-500">Inventory Health</p>
// // // // // // //               <div className="flex items-center">
// // // // // // //                 <p className="text-2xl font-bold">{inventoryHealthScore}</p>
// // // // // // //                 <span className="text-sm ml-1">/100</span>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //             <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
// // // // // // //               <div 
// // // // // // //                 className="h-8 w-8 rounded-full" 
// // // // // // //                 style={{ 
// // // // // // //                   background: `conic-gradient(${inventoryHealthScore > 80 ? '#10B981' : inventoryHealthScore > 50 ? '#FBBF24' : '#EF4444'} ${inventoryHealthScore}%, #E5E7EB 0)` 
// // // // // // //                 }} 
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </motion.div>
      
// // // // // // //       {/* Filter Controls */}
// // // // // // //       <div className="bg-white rounded-lg shadow-md p-4 mb-6">
// // // // // // //         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
// // // // // // //           <div className="flex items-center space-x-2">
// // // // // // //             <Filter className="text-gray-400" />
// // // // // // //             <span className="text-gray-700 font-medium">Filter:</span>
            
// // // // // // //             <div className="flex space-x-2">
// // // // // // //               <button
// // // // // // //                 className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
// // // // // // //                   filterType === "all" 
// // // // // // //                     ? "bg-blue-100 text-blue-800" 
// // // // // // //                     : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// // // // // // //                 }`}
// // // // // // //                 onClick={() => setFilterType("all")}
// // // // // // //               >
// // // // // // //                 All
// // // // // // //               </button>
// // // // // // //               <button
// // // // // // //                 className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
// // // // // // //                   filterType === "critical" 
// // // // // // //                     ? "bg-red-100 text-red-800" 
// // // // // // //                     : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// // // // // // //                 }`}
// // // // // // //                 onClick={() => setFilterType("critical")}
// // // // // // //               >
// // // // // // //                 Critical
// // // // // // //               </button>
// // // // // // //               <button
// // // // // // //                 className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
// // // // // // //                   filterType === "warning" 
// // // // // // //                     ? "bg-yellow-100 text-yellow-800" 
// // // // // // //                     : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// // // // // // //                 }`}
// // // // // // //                 onClick={() => setFilterType("warning")}
// // // // // // //               >
// // // // // // //                 Warning
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           </div>
          
// // // // // // //           <div className="flex items-center space-x-4">
// // // // // // //             <div className="relative">
// // // // // // //               <select
// // // // // // //                 className="appearance-none bg-gray-100 border border-gray-300 rounded-md pl-3 pr-8 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
// // // // // // //                 value={selectedSupplier}
// // // // // // //                 onChange={(e) => setSelectedSupplier(e.target.value)}
// // // // // // //               >
// // // // // // //                 <option value="all">All Suppliers</option>
// // // // // // //                 {suppliers.map(supplier => (
// // // // // // //                   <option key={supplier} value={supplier}>{supplier}</option>
// // // // // // //                 ))}
// // // // // // //               </select>
// // // // // // //               <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
// // // // // // //             </div>
            
// // // // // // //             <div className="relative">
// // // // // // //               <select
// // // // // // //                 className="appearance-none bg-gray-100 border border-gray-300 rounded-md pl-3 pr-8 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
// // // // // // //                 value={sortBy}
// // // // // // //                 onChange={(e) => setSortBy(e.target.value)}
// // // // // // //               >
// // // // // // //                 <option value="critical">Sort by Priority</option>
// // // // // // //                 <option value="days">Sort by Days to Empty</option>
// // // // // // //                 <option value="name">Sort by Name</option>
// // // // // // //                 <option value="supplier">Sort by Supplier</option>
// // // // // // //                 <option value="profit">Sort by Profit Margin</option>
// // // // // // //                 <option value="risk">Sort by Stockout Risk</option>
// // // // // // //               </select>
// // // // // // //               <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
// // // // // // //             </div>
            
// // // // // // //             <div className="relative">
// // // // // // //               <select
// // // // // // //                 className="appearance-none bg-gray-100 border border-gray-300 rounded-md pl-3 pr-8 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
// // // // // // //                 value={dateRange}
// // // // // // //                 onChange={(e) => setDateRange(e.target.value)}
// // // // // // //               >
// // // // // // //                 <option value="7">Last 7 Days</option>
// // // // // // //                 <option value="30">Last 30 Days</option>
// // // // // // //                 <option value="90">Last 90 Days</option>
// // // // // // //               </select>
// // // // // // //               <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
// // // // // // //             </div>
            
// // // // // // //             <button 
// // // // // // //               className="bg-blue-100 hover:bg-blue-200 text-blue-800 p-2 rounded-full transition-colors"
// // // // // // //               onClick={fetchLowStockProducts}
// // // // // // //             >
// // // // // // //               <RefreshCw className="h-4 w-4" />
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
      
// // // // // // //       {/* Loading State */}
// // // // // // //       {isLoading ? (
// // // // // // //         <div className="flex justify-center items-center py-20">
// // // // // // //           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
// // // // // // //         </div>
// // // // // // //       ) : (
// // // // // // //         <>
// // // // // // //           {/* Content based on selected view */}
// // // // // // //           {view === "list" ? (
// // // // // // //             // List View
// // // // // // //             sortedProducts.length > 0 ? (
// // // // // // //               <div className="space-y-4">
// // // // // // //                 {sortedProducts.map((product) => (
// // // // // // //                   <motion.div 
// // // // // // //                     key={product._id}
// // // // // // //                     initial={{ x: -20, opacity: 0 }}
// // // // // // //                     animate={{ x: 0, opacity: 1 }}
// // // // // // //                     className={`border rounded-lg overflow-hidden shadow-sm ${
// // // // // // //                       expandedItem === product._id ? "bg-gray-50" : "bg-white"
// // // // // // //                     }`}
// // // // // // //                   >
// // // // // // //                     <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4">
// // // // // // //                       <div className="flex items-start md:items-center space-x-3">
// // // // // // //                         <div className={`p-2 rounded-md ${getStatusColor(product.status)}`}>
// // // // // // //                           {product.status === "critical" ? 
// // // // // // //                             <AlertTriangle className="h-5 w-5" /> : 
// // // // // // //                             <Bell className="h-5 w-5" />}
// // // // // // //                         </div>
                        
// // // // // // //                         <div>
// // // // // // //                           <div className="flex items-center flex-wrap gap-2">
// // // // // // //                             <h3 className="font-medium text-lg">{product.product_name}</h3>
// // // // // // //                             <span className={`px-2 py-0.5 text-xs rounded-full ${getStatusBadge(product.status)}`}>
// // // // // // //                               {product.status === "critical" ? "Critical" : "Warning"}
// // // // // // //                             </span>
// // // // // // //                             <span className="px-2 py-0.5 text-xs rounded-full bg-purple-100 text-purple-800">
// // // // // // //                               Class {product.abcClass}
// // // // // // //                             </span>
// // // // // // //                             <span className="px-2 py-0.5 text-xs rounded-full bg-indigo-100 text-indigo-800">
// // // // // // //                               Risk: {product.stockoutRisk}%
// // // // // // //                             </span>
// // // // // // //                           </div>
// // // // // // //                           <div className="flex items-center mt-1 text-sm text-gray-600">
// // // // // // //                             <span className={product.status === "critical" ? "font-bold text-red-600" : ""}>
// // // // // // //                               {product.quantity}
// // // // // // //                             </span>
// // // // // // //                             <span className="mx-1">/</span>
// // // // // // //                             <span>{product.stock_level} units</span>
// // // // // // //                             {product.daysToEmpty <= 7 && (
// // // // // // //                               <span className="ml-2 text-red-600 font-medium">
// // // // // // //                                 {product.daysToEmpty === 0 ? "Out of stock!" : `${product.daysToEmpty} days until empty`}
// // // // // // //                               </span>
// // // // // // //                             )}
// // // // // // //                             <span className="ml-4 text-gray-500">
// // // // // // //                               ${product.price} | Margin: {product.profitMargin}%
// // // // // // //                             </span>
// // // // // // //                           </div>
// // // // // // //                         </div>
// // // // // // //                       </div>
                      
// // // // // // //                       <div className="mt-4 md:mt-0 flex items-center space-x-2">
// // // // // // //                         <button
// // // // // // //                           className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
// // // // // // //                           onClick={() => toggleExpanded(product._id)}
// // // // // // //                         >
// // // // // // //                           {expandedItem === product._id ? "Less details" : "More details"}
// // // // // // //                           <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
// // // // // // //                             expandedItem === product._id ? "transform rotate-180" : ""
// // // // // // //                           }`} />
// // // // // // //                         </button>
                        
// // // // // // //                         {restockInProgress.includes(product._id) ? (
// // // // // // //                           <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded text-sm flex items-center cursor-not-allowed">
// // // // // // //                             <div className="animate-spin rounded-full h-3 w-3 border-t-2 border-gray-600 mr-2"></div>
// // // // // // //                             Processing...
// // // // // // //                           </button>
// // // // // // //                         ) : (
// // // // // // //                           <button 
// // // // // // //                             className="bg-red-100 hover:bg-red-200 text-red-800 px-4 py-2 rounded text-sm flex items-center transition-colors"
// // // // // // //                             onClick={() => openRestockModal(product)}
// // // // // // //                           >
// // // // // // //                             <Truck className="mr-2 h-4 w-4" /> Restock Now
// // // // // // //                           </button>
// // // // // // //                         )}
// // // // // // //                       </div>
// // // // // // //                     </div>
                    
// // // // // // //                     {/* Expanded Details */}
// // // // // // //                     <AnimatePresence>
// // // // // // //                       {expandedItem === product._id && (
// // // // // // //                         <motion.div
// // // // // // //                           initial={{ height: 0, opacity: 0 }}
// // // // // // //                           animate={{ height: "auto", opacity: 1 }}
// // // // // // //                           exit={{ height: 0, opacity: 0 }}
// // // // // // //                           transition={{ duration: 0.2 }}
// // // // // // //                           className="overflow-hidden"
// // // // // // //                         >
// // // // // // //                           <div className="p-4 pt-0 border-t border-gray-100">
// // // // // // //                             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// // // // // // //                               <div className="bg-gray-50 p-3 rounded-lg">
// // // // // // //                                 <h4 className="text-sm font-medium text-gray-500 mb-1 flex items-center">
// // // // // // //                                   <BarChart2 className="mr-1 h-4 w-4" /> Usage Metrics
// // // // // // //                                 </h4>
// // // // // // //                                 <p className="text-sm"><span className="font-medium">Sales Velocity:</span> {product.salesVelocity} units/day</p>
// // // // // // //                                 <p className="text-sm"><span className="font-medium">Days to Empty:</span> {product.daysToEmpty}</p>
// // // // // // //                                 <p className="text-sm"><span className="font-medium">Turnover Rate:</span> {product.turnoverRate} days</p>
// // // // // // //                                 <div className="mt-1 h-2 bg-gray-200 rounded-full overflow-hidden">
// // // // // // //                                   <div 
// // // // // // //                                     className={`h-full ${
// // // // // // //                                       product.daysToEmpty < 3 ? "bg-red-500" : 
// // // // // // //                                       product.daysToEmpty < 7 ? "bg-yellow-500" : "bg-green-500"
// // // // // // //                                     }`}
// // // // // // //                                     style={{ width: `${Math.min(100, (product.daysToEmpty / 30) * 100)}%` }}
// // // // // // //                                   ></div>
// // // // // // //                                 </div>
// // // // // // //                               </div>
                              
// // // // // // //                               <div className="bg-gray-50 p-3 rounded-lg">
// // // // // // //                                 <h4 className="text-sm font-medium text-gray-500 mb-1 flex items-center">
// // // // // // //                                   <Truck className="mr-1 h-4 w-4" /> Supplier Information
// // // // // // //                                 </h4>
// // // // // // //                                 <p className="text-sm"><span className="font-medium">Supplier:</span> {product.supplier}</p>
// // // // // // //                                 <p className="text-sm"><span className="font-medium">Contact:</span> {product.supplier_contact || "N/A"}</p>
// // // // // // //                                 <p className="text-sm"><span className="font-medium">Lead Time:</span> {product.leadTime} days</p>
// // // // // // //                                 {product.alternativeSuppliers.length > 0 && (
// // // // // // //                                   <div className="mt-2">
// // // // // // //                                     <p className="text-xs text-gray-500">Alternative Suppliers:</p>
// // // // // // //                                     <ul className="text-xs">
// // // // // // //                                       {product.alternativeSuppliers.map((supplier, i) => (
// // // // // // //                                         <li key={i} className="flex items-center justify-between">
// // // // // // //                                           <span>{supplier.name}</span>
// // // // // // //                                           <span className="text-gray-600">{supplier.leadTime} days</span>
// // // // // // //                                         </li>
// // // // // // //                                       ))}
// // // // // // //                                     </ul>
// // // // // // //                                   </div>
// // // // // // //                                 )}
// // // // // // //                               </div>
                              
// // // // // // //                               <div className="bg-gray-50 p-3 rounded-lg">
// // // // // // //                                 <h4 className="text-sm font-medium text-gray-500 mb-1 flex items-center">
// // // // // // //                                   <Calendar className="mr-1 h-4 w-4" /> Restock History
// // // // // // //                                 </h4>
// // // // // // //                                 <p className="text-sm"><span className="font-medium">Last Restocked:</span> {product.last_restocked || "N/A"}</p>
// // // // // // //                                 <p className="text-sm"><span className="font-medium">Last Order Date:</span> {product.lastOrderDate}</p>
// // // // // // //                                 <p className="text-sm"><span className="font-medium">Restock Cost:</span> ${product.restockCost}</p>
// // // // // // //                                 <p className="text-sm"><span className="font-medium">Potential Lost Sales:</span> ${product.potentialLostSales}</p>
// // // // // // //                               </div>
// // // // // // //                             </div>
                            
// // // // // // //                             <div className="mt-4 flex justify-between">
// // // // // // //                               <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-50 transition-colors">
// // // // // // //                                 Schedule Restock
// // // // // // //                               </button>
// // // // // // //                               <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-50 transition-colors">
// // // // // // //                                 Adjust Stock Level
// // // // // // //                               </button>
// // // // // // //                               <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-50 transition-colors">
// // // // // // //                                 Generate Purchase Order
// // // // // // //                               </button>
// // // // // // //                             </div>
// // // // // // //                           </div>
// // // // // // //                         </motion.div>
// // // // // // //                       )}
// // // // // // //                     </AnimatePresence>
// // // // // // //                   </motion.div>
// // // // // // //                 ))}
// // // // // // //               </div>
// // // // // // //             ) : (
// // // // // // //               <div className="bg-white rounded-lg shadow p-8 text-center">
// // // // // // //                 <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
// // // // // // //                 <h3 className="mt-2 text-lg font-medium text-gray-900">All products are well-stocked</h3>
// // // // // // //                 <p className="mt-1 text-sm text-gray-500">
// // // // // // //                   There are no items requiring immediate restock attention
// // // // // // //                 </p>
// // // // // // //               </div>
// // // // // // //             )
// // // // // // //           ) : (
// // // // // // //             // Analytics View
// // // // // // //             <div className="bg-white rounded-lg shadow-md p-6">
// // // // // // //               <h2 className="text-xl font-bold mb-4 flex items-center">
// // // // // // //                 <PieChart className="mr-2 h-5 w-5 text-blue-600" />
// // // // // // //                 Inventory Analytics
// // // // // // //               </h2>
              
// // // // // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // // // //                 <div className="bg-gray-50 p-4 rounded-lg">
// // // // // // //                   <h3 className="text-lg font-medium mb-2">Stockout Risk Distribution</h3>
// // // // // // //                   <div className="h-64">
// // // // // // //                     {/* Placeholder for stockout risk chart */}
// // // // // // //                     <div className="flex items-center justify-center h-full bg-gray-100 rounded">
// // // // // // //                       <span className="text-gray-500">Chart Placeholder</span>
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 </div>
                
// // // // // // //                 <div className="bg-gray-50 p-4 rounded-lg">
// // // // // // //                   <h3 className="text-lg font-medium mb-2">Restock History</h3>
// // // // // // //                   <div className="h-64">
// // // // // // //                     {/* Placeholder for restock history chart */}
// // // // // // //                     <div className="flex items-center justify-center h-full bg-gray-100 rounded">
// // // // // // //                       <span className="text-gray-500">Chart Placeholder</span>
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           )}
// // // // // // //         </>
// // // // // // //       )}

// // // // // // //       {/* Restock Modal */}
// // // // // // //       <AnimatePresence>
// // // // // // //         {showRestockModal && selectedProduct && (
// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0 }}
// // // // // // //             animate={{ opacity: 1 }}
// // // // // // //             exit={{ opacity: 0 }}
// // // // // // //             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
// // // // // // //             onClick={() => setShowRestockModal(false)}
// // // // // // //           >
// // // // // // //             <motion.div
// // // // // // //               initial={{ y: -20, opacity: 0 }}
// // // // // // //               animate={{ y: 0, opacity: 1 }}
// // // // // // //               exit={{ y: -20, opacity: 0 }}
// // // // // // //               className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
// // // // // // //               onClick={(e) => e.stopPropagation()}
// // // // // // //             >
// // // // // // //               <h2 className="text-xl font-bold mb-4">Restock {selectedProduct.product_name}</h2>
// // // // // // //               <div className="space-y-4">
// // // // // // //                 <div>
// // // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Quantity to Restock</label>
// // // // // // //                   <input
// // // // // // //                     type="number"
// // // // // // //                     min="1"
// // // // // // //                     max={selectedProduct.stock_level - selectedProduct.quantity}
// // // // // // //                     value={restockQuantity}
// // // // // // //                     onChange={(e) => setRestockQuantity(parseInt(e.target.value))}
// // // // // // //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // //                   />
// // // // // // //                 </div>
// // // // // // //                 <div className="text-sm text-gray-600">
// // // // // // //                   <p>Current Stock: {selectedProduct.quantity}</p>
// // // // // // //                   <p>Stock Level: {selectedProduct.stock_level}</p>
// // // // // // //                   <p>Estimated Cost: ${(restockQuantity * selectedProduct.price).toFixed(2)}</p>
// // // // // // //                 </div>
// // // // // // //                 <div className="flex justify-end space-x-2">
// // // // // // //                   <button
// // // // // // //                     className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm"
// // // // // // //                     onClick={() => setShowRestockModal(false)}
// // // // // // //                   >
// // // // // // //                     Cancel
// // // // // // //                   </button>
// // // // // // //                   <button
// // // // // // //                     className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
// // // // // // //                     onClick={() => handleRestock(selectedProduct._id, restockQuantity)}
// // // // // // //                   >
// // // // // // //                     Confirm Restock
// // // // // // //                   </button>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </motion.div>
// // // // // // //           </motion.div>
// // // // // // //         )}
// // // // // // //       </AnimatePresence>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default RestockAlerts;

// // // // // // import React, { useState, useEffect, useContext, useMemo } from "react";
// // // // // // import { StoreContext } from "./StoreContext";
// // // // // // import { 
// // // // // //   Bell, AlertTriangle, TrendingDown, Clock, Truck, DollarSign, 
// // // // // //   Calendar, CheckCircle, BarChart2, RefreshCw, Filter, ChevronDown, 
// // // // // //   DownloadCloud, PieChart
// // // // // // } from "lucide-react";
// // // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // // const RestockAlerts = () => {
// // // // // //   const { storeId } = useContext(StoreContext);
// // // // // //   const [lowStockProducts, setLowStockProducts] = useState([]);
// // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // //   const [restockInProgress, setRestockInProgress] = useState([]);
// // // // // //   const [sortBy, setSortBy] = useState("critical");
// // // // // //   const [filterType, setFilterType] = useState("all");
// // // // // //   const [expandedItem, setExpandedItem] = useState(null);
// // // // // //   const [selectedSupplier, setSelectedSupplier] = useState("all");
// // // // // //   const [suppliers, setSuppliers] = useState([]);
// // // // // //   const [dateRange, setDateRange] = useState("30");
// // // // // //   const [view, setView] = useState("list");
// // // // // //   const [restockHistory, setRestockHistory] = useState([]);
// // // // // //   const [showRestockModal, setShowRestockModal] = useState(false);
// // // // // //   const [selectedProduct, setSelectedProduct] = useState(null);
// // // // // //   const [restockQuantity, setRestockQuantity] = useState(0);
// // // // // //   const [stats, setStats] = useState({
// // // // // //     criticalCount: 0,
// // // // // //     warningCount: 0,
// // // // // //     totalValue: 0,
// // // // // //     avgDaysToEmpty: 0,
// // // // // //     potentialLostSales: 0,
// // // // // //     stockoutRisk: 0
// // // // // //   });
// // // // // //   const API_URL = "http://127.0.0.1:5000";

// // // // // //   useEffect(() => {
// // // // // //     if (storeId) {
// // // // // //       fetchLowStockProducts();
// // // // // //       fetchRestockHistory();
// // // // // //     }
// // // // // //   }, [storeId, dateRange]);

// // // // // //   // const fetchLowStockProducts = async () => {
// // // // // //   //   setIsLoading(true);
// // // // // //   //   try {
// // // // // //   //     const response = await fetch(`${API_URL}/products?storeId=${storeId}`);
// // // // // //   //     const data = await response.json();

// // // // // //   //     const enhancedLowStock = data.map(product => {
// // // // // //   //       const stockLevel = parseInt(product.stock_level) || 100;
// // // // // //   //       const quantity = parseInt(product.quantity) || 0;
// // // // // //   //       const price = parseFloat(product.price) || 0;
// // // // // //   //       const salesVelocity = parseFloat(product.salesVelocity) || (Math.random() * 5 + 0.5);
        
// // // // // //   //       const daysToEmpty = quantity > 0 ? Math.ceil(quantity / salesVelocity) : 0;
// // // // // //   //       const criticalThreshold = stockLevel * 0.3;
// // // // // //   //       const warningThreshold = stockLevel * 0.6;
        
// // // // // //   //       const status = quantity < criticalThreshold ? "critical" :
// // // // // //   //                     quantity < warningThreshold ? "warning" : "normal";
        
// // // // // //   //       const restockCost = ((stockLevel - quantity) * price).toFixed(2);
// // // // // //   //       const leadTime = product.leadTime || Math.floor(Math.random() * 14) + 3;
// // // // // //   //       const profitMargin = product.profitMargin || ((price - (price * 0.6)) / price * 100).toFixed(1);
// // // // // //   //       const potentialLostSales = (salesVelocity * leadTime * price).toFixed(2);
// // // // // //   //       const stockoutRisk = Math.min(100, Math.max(0, Math.round(
// // // // // //   //         (100 - (daysToEmpty / leadTime) * 100) / 2
// // // // // //   //       )));

// // // // // //   //       return {
// // // // // //   //         ...product,
// // // // // //   //         salesVelocity: salesVelocity.toFixed(1),
// // // // // //   //         daysToEmpty,
// // // // // //   //         status,
// // // // // //   //         restockCost,
// // // // // //   //         leadTime,
// // // // // //   //         profitMargin,
// // // // // //   //         potentialLostSales,
// // // // // //   //         stockoutRisk,
// // // // // //   //         stock_level: stockLevel,
// // // // // //   //         quantity: quantity,
// // // // // //   //         price: price,
// // // // // //   //         supplier: product.supplier || "Unknown",
// // // // // //   //         last_restocked: product.last_restocked || "N/A"
// // // // // //   //       };
// // // // // //   //     }).filter(p => p.quantity < p.stock_level);

// // // // // //   //     setLowStockProducts(enhancedLowStock);
// // // // // //   //     setSuppliers([...new Set(enhancedLowStock.map(p => p.supplier))]);

// // // // // //   //     const criticalCount = enhancedLowStock.filter(p => p.status === "critical").length;
// // // // // //   //     const warningCount = enhancedLowStock.filter(p => p.status === "warning").length;
// // // // // //   //     const totalValue = enhancedLowStock.reduce((sum, p) => sum + parseFloat(p.restockCost), 0);
// // // // // //   //     const avgDays = enhancedLowStock.length > 0 ? 
// // // // // //   //       Math.round(enhancedLowStock.reduce((sum, p) => sum + p.daysToEmpty, 0) / enhancedLowStock.length) : 0;
// // // // // //   //     const potentialLostSales = enhancedLowStock.reduce((sum, p) => sum + parseFloat(p.potentialLostSales), 0);
// // // // // //   //     const avgStockoutRisk = enhancedLowStock.length > 0 ? 
// // // // // //   //       Math.round(enhancedLowStock.reduce((sum, p) => sum + p.stockoutRisk, 0) / enhancedLowStock.length) : 0;

// // // // // //   //     setStats({
// // // // // //   //       criticalCount,
// // // // // //   //       warningCount,
// // // // // //   //       totalValue: totalValue.toFixed(2),
// // // // // //   //       avgDaysToEmpty: avgDays,
// // // // // //   //       potentialLostSales: potentialLostSales.toFixed(2),
// // // // // //   //       stockoutRisk: avgStockoutRisk
// // // // // //   //     });
// // // // // //   //   } catch (err) {
// // // // // //   //     console.error("Error fetching products:", err);
// // // // // //   //   } finally {
// // // // // //   //     setIsLoading(false);
// // // // // //   //   }
// // // // // //   // };
// // // // // // // In RestockAlerts.js
// // // // // // const fetchLowStockProducts = async () => {
// // // // // //   setIsLoading(true);
// // // // // //   try {
// // // // // //     const response = await fetch(`${API_URL}/products?storeId=${storeId}`);
// // // // // //     const data = await response.json();

// // // // // //     const enhancedLowStock = data.map(product => {
// // // // // //       const stockLevel = parseInt(product.stock_level) || 100; // Minimum required stock
// // // // // //       const quantity = parseInt(product.quantity) || 0;
// // // // // //       const price = parseFloat(product.price) || 0;
// // // // // //       const salesVelocity = parseFloat(product.salesVelocity) || (Math.random() * 5 + 0.5);
      
// // // // // //       const daysToEmpty = quantity > 0 ? Math.ceil(quantity / salesVelocity) : 0;
// // // // // //       // Define thresholds relative to stockLevel (minimum required)
// // // // // //       const warningThreshold = stockLevel * 1.2; // 20% above minimum
// // // // // //       const criticalThreshold = stockLevel; // At or below minimum
      
// // // // // //       const status = quantity <= criticalThreshold ? "critical" :
// // // // // //                     quantity <= warningThreshold ? "warning" : "normal";
      
// // // // // //       const restockCost = ((stockLevel - quantity) * price).toFixed(2);
// // // // // //       const leadTime = product.leadTime || Math.floor(Math.random() * 14) + 3;
// // // // // //       const profitMargin = product.profitMargin || ((price - (price * 0.6)) / price * 100).toFixed(1);
// // // // // //       const potentialLostSales = (salesVelocity * leadTime * price).toFixed(2);
// // // // // //       const stockoutRisk = Math.min(100, Math.max(0, Math.round(
// // // // // //         (1 - (quantity / stockLevel)) * 100
// // // // // //       )));

// // // // // //       return {
// // // // // //         ...product,
// // // // // //         salesVelocity: salesVelocity.toFixed(1),
// // // // // //         daysToEmpty,
// // // // // //         status,
// // // // // //         restockCost,
// // // // // //         leadTime,
// // // // // //         profitMargin,
// // // // // //         potentialLostSales,
// // // // // //         stockoutRisk,
// // // // // //         stock_level: stockLevel,
// // // // // //         quantity: quantity,
// // // // // //         price: price,
// // // // // //         supplier: product.supplier || "Unknown",
// // // // // //         last_restocked: product.last_restocked || "N/A"
// // // // // //       };
// // // // // //     }).filter(p => p.quantity < p.stock_level * 1.5); // Show products below 150% of minimum stock

// // // // // //     setLowStockProducts(enhancedLowStock);
// // // // // //     setSuppliers([...new Set(enhancedLowStock.map(p => p.supplier))]);

// // // // // //     const criticalCount = enhancedLowStock.filter(p => p.status === "critical").length;
// // // // // //     const warningCount = enhancedLowStock.filter(p => p.status === "warning").length;
// // // // // //     const totalValue = enhancedLowStock.reduce((sum, p) => sum + parseFloat(p.restockCost), 0);
// // // // // //     const avgDays = enhancedLowStock.length > 0 ? 
// // // // // //       Math.round(enhancedLowStock.reduce((sum, p) => sum + p.daysToEmpty, 0) / enhancedLowStock.length) : 0;
// // // // // //     const potentialLostSales = enhancedLowStock.reduce((sum, p) => sum + parseFloat(p.potentialLostSales), 0);
// // // // // //     const avgStockoutRisk = enhancedLowStock.length > 0 ? 
// // // // // //       Math.round(enhancedLowStock.reduce((sum, p) => sum + p.stockoutRisk, 0) / enhancedLowStock.length) : 0;

// // // // // //     setStats({
// // // // // //       criticalCount,
// // // // // //       warningCount,
// // // // // //       totalValue: totalValue.toFixed(2),
// // // // // //       avgDaysToEmpty: avgDays,
// // // // // //       potentialLostSales: potentialLostSales.toFixed(2),
// // // // // //       stockoutRisk: avgStockoutRisk
// // // // // //     });
// // // // // //   } catch (err) {
// // // // // //     console.error("Error fetching products:", err);
// // // // // //   } finally {
// // // // // //     setIsLoading(false);
// // // // // //   }
// // // // // // };
// // // // // //   // const fetchRestockHistory = async () => {
// // // // // //   //   // Note: This assumes you'll add a restock-history endpoint to your backend
// // // // // //   //   // For now, using simulated data
// // // // // //   //   setTimeout(() => {
// // // // // //   //     const history = lowStockProducts.slice(0, 10).map((product, i) => ({
// // // // // //   //       id: `hist-${i}`,
// // // // // //   //       product_name: product.product_name,
// // // // // //   //       date: generateRandomPastDate(parseInt(dateRange)),
// // // // // //   //       quantity: Math.floor(Math.random() * 100) + 20,
// // // // // //   //       cost: ((Math.random() * 1000 + 200) * product.price).toFixed(2),
// // // // // //   //       supplier: product.supplier,
// // // // // //   //       status: "Completed"
// // // // // //   //     }));
// // // // // //   //     setRestockHistory(history);
// // // // // //   //   }, 500);
// // // // // //   // };
// // // // // //   // const fetchRestockHistory = async () => {
// // // // // //   //   try {
// // // // // //   //     const response = await fetch(`${API_URL}/restock-history?storeId=${storeId}`);
// // // // // //   //     if (!response.ok) throw new Error("Failed to fetch restock history");
// // // // // //   //     const history = await response.json();
      
// // // // // //   //     // Ensure history entries have the correct format
// // // // // //   //     const formattedHistory = history.map(entry => ({
// // // // // //   //       id: entry._id,
// // // // // //   //       product_name: entry.product_name,
// // // // // //   //       date: entry.date.split('T')[0], // Format date
// // // // // //   //       quantity: parseInt(entry.quantity),
// // // // // //   //       cost: parseFloat(entry.cost).toFixed(2),
// // // // // //   //       supplier: entry.supplier,
// // // // // //   //       status: entry.status
// // // // // //   //     }));
      
// // // // // //   //     setRestockHistory(formattedHistory);
// // // // // //   //   } catch (error) {
// // // // // //   //     console.error("Error fetching restock history:", error);
// // // // // //   //     // Fallback to empty array if fetch fails
// // // // // //   //     setRestockHistory([]);
// // // // // //   //   }
// // // // // //   // };
  
// // // // // //   // // Update useEffect to ensure history refreshes after restock
// // // // // //   // useEffect(() => {
// // // // // //   //   if (storeId) {
// // // // // //   //     fetchLowStockProducts();
// // // // // //   //     fetchRestockHistory();
// // // // // //   //   }
// // // // // //   // }, [storeId, dateRange]);
// // // // // // // In RestockAlerts.js
// // // // // // const fetchRestockHistory = async () => {
// // // // // //   try {
// // // // // //     const response = await fetch(`${API_URL}/restock-history?storeId=${storeId}`);
// // // // // //     if (!response.ok) {
// // // // // //       throw new Error(`Failed to fetch restock history: ${response.statusText}`);
// // // // // //     }
// // // // // //     const history = await response.json();
    
// // // // // //     const formattedHistory = history.map(entry => ({
// // // // // //       id: entry._id,
// // // // // //       product_name: entry.product_name || "Unknown Product",
// // // // // //       date: entry.date.split('T')[0] || "N/A",
// // // // // //       quantity: parseInt(entry.quantity) || 0,
// // // // // //       cost: parseFloat(entry.cost).toFixed(2) || "0.00",
// // // // // //       supplier: entry.supplier || "Unknown",
// // // // // //       status: entry.status || "Completed"
// // // // // //     }));
    
// // // // // //     setRestockHistory(formattedHistory);
// // // // // //     console.log("Restock History:", formattedHistory); // Debug log
// // // // // //   } catch (error) {
// // // // // //     console.error("Error fetching restock history:", error);
// // // // // //     setRestockHistory([]);
// // // // // //   }
// // // // // // };

// // // // // // // Ensure useEffect triggers correctly
// // // // // // useEffect(() => {
// // // // // //   if (storeId) {
// // // // // //     fetchLowStockProducts();
// // // // // //     fetchRestockHistory();
// // // // // //   }
// // // // // // }, [storeId, dateRange]);

// // // // // // // Update handleRestock to refresh history
// // // // // // const handleRestock = async (productId, quantity) => {
// // // // // //   try {
// // // // // //     setRestockInProgress([...restockInProgress, productId]);
// // // // // //     const response = await fetch(`${API_URL}/products/${productId}/restock?storeId=${storeId}`, {
// // // // // //       method: "POST",
// // // // // //       headers: { "Content-Type": "application/json" },
// // // // // //       body: JSON.stringify({ quantity: parseInt(quantity) })
// // // // // //     });
    
// // // // // //     if (!response.ok) throw new Error("Restock failed");
    
// // // // // //     const data = await response.json();
// // // // // //     setRestockInProgress(restockInProgress.filter(id => id !== productId));
    
// // // // // //     setLowStockProducts(lowStockProducts.map(product => 
// // // // // //       product._id === productId ? { 
// // // // // //         ...product, 
// // // // // //         quantity: parseInt(data.new_quantity),
// // // // // //         last_restocked: new Date().toISOString().split('T')[0]
// // // // // //       } : product
// // // // // //     ));
    
// // // // // //     await fetchRestockHistory(); // Refresh history after restock
    
// // // // // //     setShowRestockModal(false);
// // // // // //   } catch (error) {
// // // // // //     console.error("Restock error:", error);
// // // // // //     setRestockInProgress(restockInProgress.filter(id => id !== productId));
// // // // // //   }
// // // // // // };
// // // // // //   const generateRandomPastDate = (maxDaysAgo) => {
// // // // // //     const today = new Date();
// // // // // //     const pastDate = new Date(today);
// // // // // //     pastDate.setDate(today.getDate() - Math.floor(Math.random() * maxDaysAgo));
// // // // // //     return pastDate.toISOString().split('T')[0];
// // // // // //   };

// // // // // //   const filteredProducts = useMemo(() => {
// // // // // //     return lowStockProducts.filter(product => {
// // // // // //       return (filterType === "all" || product.status === filterType) &&
// // // // // //              (selectedSupplier === "all" || product.supplier === selectedSupplier);
// // // // // //     });
// // // // // //   }, [lowStockProducts, filterType, selectedSupplier]);

// // // // // //   const sortedProducts = useMemo(() => {
// // // // // //     return [...filteredProducts].sort((a, b) => {
// // // // // //       switch (sortBy) {
// // // // // //         case "critical":
// // // // // //           if (a.status === "critical" && b.status !== "critical") return -1;
// // // // // //           if (a.status !== "critical" && b.status === "critical") return 1;
// // // // // //           return a.daysToEmpty - b.daysToEmpty;
// // // // // //         case "name":
// // // // // //           return (a.product_name || "").localeCompare(b.product_name || "");
// // // // // //         case "supplier":
// // // // // //           return (a.supplier || "").localeCompare(b.supplier || "");
// // // // // //         case "days":
// // // // // //           return a.daysToEmpty - b.daysToEmpty;
// // // // // //         case "profit":
// // // // // //           return parseFloat(b.profitMargin || 0) - parseFloat(a.profitMargin || 0);
// // // // // //         case "risk":
// // // // // //           return (b.stockoutRisk || 0) - (a.stockoutRisk || 0);
// // // // // //         default:
// // // // // //           return 0;
// // // // // //       }
// // // // // //     });
// // // // // //   }, [filteredProducts, sortBy]);

// // // // // //   const inventoryHealthScore = useMemo(() => {
// // // // // //     if (lowStockProducts.length === 0) return 100;
// // // // // //     const criticalPercentage = (stats.criticalCount / lowStockProducts.length) * 100;
// // // // // //     const warningPercentage = (stats.warningCount / lowStockProducts.length) * 100;
// // // // // //     return Math.max(0, Math.round(100 - (criticalPercentage * 0.7 + warningPercentage * 0.3)));
// // // // // //   }, [lowStockProducts, stats]);

// // // // // //   const stockoutRiskDistribution = useMemo(() => {
// // // // // //     const ranges = { "0-25": 0, "26-50": 0, "51-75": 0, "76-100": 0 };
// // // // // //     lowStockProducts.forEach(p => {
// // // // // //       const risk = p.stockoutRisk || 0;
// // // // // //       if (risk <= 25) ranges["0-25"]++;
// // // // // //       else if (risk <= 50) ranges["26-50"]++;
// // // // // //       else if (risk <= 75) ranges["51-75"]++;
// // // // // //       else ranges["76-100"]++;
// // // // // //     });
// // // // // //     return ranges;
// // // // // //   }, [lowStockProducts]);

// // // // // //   const getStatusColor = (status) => {
// // // // // //     switch (status) {
// // // // // //       case "critical": return "bg-red-50 border-red-200 text-red-800";
// // // // // //       case "warning": return "bg-yellow-50 border-yellow-200 text-yellow-800";
// // // // // //       default: return "bg-blue-50 border-blue-200 text-blue-800";
// // // // // //     }
// // // // // //   };

// // // // // //   const getStatusBadge = (status) => {
// // // // // //     switch (status) {
// // // // // //       case "critical": return "bg-red-100 text-red-800";
// // // // // //       case "warning": return "bg-yellow-100 text-yellow-800";
// // // // // //       default: return "bg-blue-100 text-blue-800";
// // // // // //     }
// // // // // //   };

// // // // // //   const toggleExpanded = (id) => {
// // // // // //     setExpandedItem(expandedItem === id ? null : id);
// // // // // //   };

// // // // // //   const openRestockModal = (product) => {
// // // // // //     setSelectedProduct(product);
// // // // // //     setRestockQuantity(product.stock_level - product.quantity);
// // // // // //     setShowRestockModal(true);
// // // // // //   };

// // // // // //   // const handleRestock = async (productId, quantity) => {
// // // // // //   //   try {
// // // // // //   //     setRestockInProgress([...restockInProgress, productId]);
// // // // // //   //     const response = await fetch(`${API_URL}/products/${productId}/restock?storeId=${storeId}`, {
// // // // // //   //       method: "POST",
// // // // // //   //       headers: { "Content-Type": "application/json" },
// // // // // //   //       body: JSON.stringify({ quantity })
// // // // // //   //     });
      
// // // // // //   //     if (!response.ok) throw new Error("Restock failed");
      
// // // // // //   //     const data = await response.json();
// // // // // //   //     setRestockInProgress(restockInProgress.filter(id => id !== productId));
// // // // // //   //     setLowStockProducts(lowStockProducts.map(product => 
// // // // // //   //       product._id === productId ? { ...product, quantity: data.new_quantity } : product
// // // // // //   //     ));
      
// // // // // //   //     setRestockHistory(prev => [{
// // // // // //   //       id: `hist-${Date.now()}`,
// // // // // //   //       product_name: selectedProduct.product_name,
// // // // // //   //       date: new Date().toISOString().split('T')[0],
// // // // // //   //       quantity,
// // // // // //   //       cost: (quantity * selectedProduct.price).toFixed(2),
// // // // // //   //       supplier: selectedProduct.supplier,
// // // // // //   //       status: "Completed"
// // // // // //   //     }, ...prev]);
      
// // // // // //   //     setShowRestockModal(false);
// // // // // //   //   } catch (error) {
// // // // // //   //     console.error("Restock error:", error);
// // // // // //   //   }
// // // // // //   // };
// // // // // // // In RestockAlerts.js
// // // // // // // const handleRestock = async (productId, quantity) => {
// // // // // // //   try {
// // // // // // //     setRestockInProgress([...restockInProgress, productId]);
// // // // // // //     const response = await fetch(`${API_URL}/products/${productId}/restock?storeId=${storeId}`, {
// // // // // // //       method: "POST",
// // // // // // //       headers: { "Content-Type": "application/json" },
// // // // // // //       body: JSON.stringify({ quantity: parseInt(quantity) }) // Ensure quantity is an integer
// // // // // // //     });
    
// // // // // // //     if (!response.ok) throw new Error("Restock failed");
    
// // // // // // //     const data = await response.json();
// // // // // // //     setRestockInProgress(restockInProgress.filter(id => id !== productId));
    
// // // // // // //     // Update the product's quantity in state
// // // // // // //     setLowStockProducts(lowStockProducts.map(product => 
// // // // // // //       product._id === productId ? { 
// // // // // // //         ...product, 
// // // // // // //         quantity: parseInt(data.new_quantity), // Use the backend's returned quantity
// // // // // // //         last_restocked: new Date().toISOString().split('T')[0]
// // // // // // //       } : product
// // // // // // //     ));
    
// // // // // // //     // Add to restock history
// // // // // // //     setRestockHistory(prev => [{
// // // // // // //       id: `hist-${Date.now()}`,
// // // // // // //       product_name: selectedProduct.product_name,
// // // // // // //       date: new Date().toISOString().split('T')[0],
// // // // // // //       quantity: parseInt(quantity),
// // // // // // //       cost: (quantity * selectedProduct.price).toFixed(2),
// // // // // // //       supplier: selectedProduct.supplier,
// // // // // // //       status: "Completed"
// // // // // // //     }, ...prev]);
    
// // // // // // //     setShowRestockModal(false);
// // // // // // //   } catch (error) {
// // // // // // //     console.error("Restock error:", error);
// // // // // // //     setRestockInProgress(restockInProgress.filter(id => id !== productId));
// // // // // // //   }
// // // // // // // };
// // // // // //   const exportToCSV = () => {
// // // // // //     const headers = ["Product Name", "Current Stock", "Stock Level", "Status", "Days to Empty", "Supplier", "Restock Cost"];
// // // // // //     const csvData = sortedProducts.map(p => [
// // // // // //       p.product_name,
// // // // // //       p.quantity,
// // // // // //       p.stock_level,
// // // // // //       p.status,
// // // // // //       p.daysToEmpty,
// // // // // //       p.supplier,
// // // // // //       p.restockCost
// // // // // //     ]);
    
// // // // // //     const csvContent = [headers.join(","), ...csvData.map(row => row.join(","))].join("\n");
// // // // // //     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
// // // // // //     const url = URL.createObjectURL(blob);
// // // // // //     const link = document.createElement("a");
// // // // // //     link.setAttribute("href", url);
// // // // // //     link.setAttribute("download", "restock_alerts.csv");
// // // // // //     document.body.appendChild(link);
// // // // // //     link.click();
// // // // // //     document.body.removeChild(link);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="p-6 max-w-7xl mx-auto bg-gray-50 min-h-screen">
// // // // // //       <motion.div
// // // // // //         initial={{ opacity: 0, y: -20 }}
// // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // //         transition={{ duration: 0.5 }}
// // // // // //         className="flex flex-col md:flex-row md:items-center md:justify-between mb-6"
// // // // // //       >
// // // // // //         <div>
// // // // // //           <h1 className="text-3xl font-bold mb-2 text-gray-800 flex items-center">
// // // // // //             <Bell className="mr-2 text-red-600" /> 
// // // // // //             Restock Alerts Dashboard
// // // // // //           </h1>
// // // // // //           <p className="text-gray-500">Monitor and manage low stock items</p>
// // // // // //         </div>
        
// // // // // //         <div className="mt-4 md:mt-0 flex items-center space-x-2">
// // // // // //           <button
// // // // // //             className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
// // // // // //               view === "list" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
// // // // // //             }`}
// // // // // //             onClick={() => setView("list")}
// // // // // //           >
// // // // // //             List View
// // // // // //           </button>
// // // // // //           <button
// // // // // //             className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
// // // // // //               view === "analytics" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
// // // // // //             }`}
// // // // // //             onClick={() => setView("analytics")}
// // // // // //           >
// // // // // //             Analytics
// // // // // //           </button>
// // // // // //           <button
// // // // // //             className="ml-2 bg-green-100 hover:bg-green-200 text-green-800 px-3 py-1 rounded-md text-sm font-medium transition-colors flex items-center"
// // // // // //             onClick={exportToCSV}
// // // // // //           >
// // // // // //             <DownloadCloud className="mr-1 h-4 w-4" /> Export
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </motion.div>

// // // // // //       <motion.div 
// // // // // //         className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6"
// // // // // //         initial={{ opacity: 0 }}
// // // // // //         animate={{ opacity: 1 }}
// // // // // //         transition={{ duration: 0.6 }}
// // // // // //       >
// // // // // //         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-red-500">
// // // // // //           <div className="flex justify-between items-center">
// // // // // //             <div>
// // // // // //               <p className="text-sm text-gray-500">Critical Items</p>
// // // // // //               <p className="text-2xl font-bold">{stats.criticalCount}</p>
// // // // // //             </div>
// // // // // //             <AlertTriangle className="h-10 w-10 text-red-500 opacity-70" />
// // // // // //           </div>
// // // // // //         </div>
        
// // // // // //         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-yellow-500">
// // // // // //           <div className="flex justify-between items-center">
// // // // // //             <div>
// // // // // //               <p className="text-sm text-gray-500">Warning Items</p>
// // // // // //               <p className="text-2xl font-bold">{stats.warningCount}</p>
// // // // // //             </div>
// // // // // //             <Bell className="h-10 w-10 text-yellow-500 opacity-70" />
// // // // // //           </div>
// // // // // //         </div>
        
// // // // // //         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
// // // // // //           <div className="flex justify-between items-center">
// // // // // //             <div>
// // // // // //               <p className="text-sm text-gray-500">Avg. Days to Empty</p>
// // // // // //               <p className="text-2xl font-bold">{stats.avgDaysToEmpty}</p>
// // // // // //             </div>
// // // // // //             <Clock className="h-10 w-10 text-blue-500 opacity-70" />
// // // // // //           </div>
// // // // // //         </div>
        
// // // // // //         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
// // // // // //           <div className="flex justify-between items-center">
// // // // // //             <div>
// // // // // //               <p className="text-sm text-gray-500">Restock Value</p>
// // // // // //               <p className="text-2xl font-bold">${stats.totalValue}</p>
// // // // // //             </div>
// // // // // //             <DollarSign className="h-10 w-10 text-green-500 opacity-70" />
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-500">
// // // // // //           <div className="flex justify-between items-center">
// // // // // //             <div>
// // // // // //               <p className="text-sm text-gray-500">Potential Lost Sales</p>
// // // // // //               <p className="text-2xl font-bold">${stats.potentialLostSales}</p>
// // // // // //             </div>
// // // // // //             <TrendingDown className="h-10 w-10 text-purple-500 opacity-70" />
// // // // // //           </div>
// // // // // //         </div>
        
// // // // // //         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-indigo-500">
// // // // // //           <div className="flex justify-between items-center">
// // // // // //             <div>
// // // // // //               <p className="text-sm text-gray-500">Inventory Health</p>
// // // // // //               <div className="flex items-center">
// // // // // //                 <p className="text-2xl font-bold">{inventoryHealthScore}</p>
// // // // // //                 <span className="text-sm ml-1">/100</span>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //             <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
// // // // // //               <div 
// // // // // //                 className="h-8 w-8 rounded-full" 
// // // // // //                 style={{ 
// // // // // //                   background: `conic-gradient(${inventoryHealthScore > 80 ? '#10B981' : inventoryHealthScore > 50 ? '#FBBF24' : '#EF4444'} ${inventoryHealthScore}%, #E5E7EB 0)` 
// // // // // //                 }} 
// // // // // //               />
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </motion.div>

// // // // // //       <div className="bg-white rounded-lg shadow-md p-4 mb-6">
// // // // // //         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
// // // // // //           <div className="flex items-center space-x-2">
// // // // // //             <Filter className="text-gray-400" />
// // // // // //             <span className="text-gray-700 font-medium">Filter:</span>
            
// // // // // //             <div className="flex space-x-2">
// // // // // //               <button
// // // // // //                 className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
// // // // // //                   filterType === "all" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// // // // // //                 }`}
// // // // // //                 onClick={() => setFilterType("all")}
// // // // // //               >
// // // // // //                 All
// // // // // //               </button>
// // // // // //               <button
// // // // // //                 className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
// // // // // //                   filterType === "critical" ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// // // // // //                 }`}
// // // // // //                 onClick={() => setFilterType("critical")}
// // // // // //               >
// // // // // //                 Critical
// // // // // //               </button>
// // // // // //               <button
// // // // // //                 className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
// // // // // //                   filterType === "warning" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// // // // // //                 }`}
// // // // // //                 onClick={() => setFilterType("warning")}
// // // // // //               >
// // // // // //                 Warning
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>
          
// // // // // //           <div className="flex items-center space-x-4">
// // // // // //             <div className="relative">
// // // // // //               <select
// // // // // //                 className="appearance-none bg-gray-100 border border-gray-300 rounded-md pl-3 pr-8 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
// // // // // //                 value={selectedSupplier}
// // // // // //                 onChange={(e) => setSelectedSupplier(e.target.value)}
// // // // // //               >
// // // // // //                 <option value="all">All Suppliers</option>
// // // // // //                 {suppliers.map(supplier => (
// // // // // //                   <option key={supplier} value={supplier}>{supplier}</option>
// // // // // //                 ))}
// // // // // //               </select>
// // // // // //               <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
// // // // // //             </div>
            
// // // // // //             <div className="relative">
// // // // // //               <select
// // // // // //                 className="appearance-none bg-gray-100 border border-gray-300 rounded-md pl-3 pr-8 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
// // // // // //                 value={sortBy}
// // // // // //                 onChange={(e) => setSortBy(e.target.value)}
// // // // // //               >
// // // // // //                 <option value="critical">Sort by Priority</option>
// // // // // //                 <option value="days">Sort by Days to Empty</option>
// // // // // //                 <option value="name">Sort by Name</option>
// // // // // //                 <option value="supplier">Sort by Supplier</option>
// // // // // //                 <option value="profit">Sort by Profit Margin</option>
// // // // // //                 <option value="risk">Sort by Stockout Risk</option>
// // // // // //               </select>
// // // // // //               <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
// // // // // //             </div>
            
// // // // // //             <div className="relative">
// // // // // //               <select
// // // // // //                 className="appearance-none bg-gray-100 border border-gray-300 rounded-md pl-3 pr-8 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
// // // // // //                 value={dateRange}
// // // // // //                 onChange={(e) => setDateRange(e.target.value)}
// // // // // //               >
// // // // // //                 <option value="7">Last 7 Days</option>
// // // // // //                 <option value="30">Last 30 Days</option>
// // // // // //                 <option value="90">Last 90 Days</option>
// // // // // //               </select>
// // // // // //               <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
// // // // // //             </div>
            
// // // // // //             <button 
// // // // // //               className="bg-blue-100 hover:bg-blue-200 text-blue-800 p-2 rounded-full transition-colors"
// // // // // //               onClick={fetchLowStockProducts}
// // // // // //             >
// // // // // //               <RefreshCw className="h-4 w-4" />
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {isLoading ? (
// // // // // //         <div className="flex justify-center items-center py-20">
// // // // // //           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
// // // // // //         </div>
// // // // // //       ) : (
// // // // // //         <>
// // // // // //           {view === "list" ? (
// // // // // //             sortedProducts.length > 0 ? (
// // // // // //               <div className="space-y-4">
// // // // // //                 {sortedProducts.map((product) => (
// // // // // //                   <motion.div 
// // // // // //                     key={product._id}
// // // // // //                     initial={{ x: -20, opacity: 0 }}
// // // // // //                     animate={{ x: 0, opacity: 1 }}
// // // // // //                     className={`border rounded-lg overflow-hidden shadow-sm ${
// // // // // //                       expandedItem === product._id ? "bg-gray-50" : "bg-white"
// // // // // //                     }`}
// // // // // //                   >
// // // // // //                     <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4">
// // // // // //                       <div className="flex items-start md:items-center space-x-3">
// // // // // //                         <div className={`p-2 rounded-md ${getStatusColor(product.status)}`}>
// // // // // //                           {product.status === "critical" ? 
// // // // // //                             <AlertTriangle className="h-5 w-5" /> : 
// // // // // //                             <Bell className="h-5 w-5" />}
// // // // // //                         </div>
                        
// // // // // //                         <div>
// // // // // //                           <div className="flex items-center flex-wrap gap-2">
// // // // // //                             <h3 className="font-medium text-lg">{product.product_name}</h3>
// // // // // //                             <span className={`px-2 py-0.5 text-xs rounded-full ${getStatusBadge(product.status)}`}>
// // // // // //                               {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
// // // // // //                             </span>
// // // // // //                           </div>
// // // // // //                           <div className="flex items-center mt-1 text-sm text-gray-600">
// // // // // //                             <span className={product.status === "critical" ? "font-bold text-red-600" : ""}>
// // // // // //                               {product.quantity}
// // // // // //                             </span>
// // // // // //                             <span className="mx-1">/</span>
// // // // // //                             <span>{product.stock_level} units</span>
// // // // // //                             {product.daysToEmpty <= 7 && (
// // // // // //                               <span className="ml-2 text-red-600 font-medium">
// // // // // //                                 {product.daysToEmpty === 0 ? "Out of stock!" : `${product.daysToEmpty} days until empty`}
// // // // // //                               </span>
// // // // // //                             )}
// // // // // //                             <span className="ml-4 text-gray-500">
// // // // // //                               ${product.price} | Margin: {product.profitMargin}%
// // // // // //                             </span>
// // // // // //                           </div>
// // // // // //                         </div>
// // // // // //                       </div>
                      
// // // // // //                       <div className="mt-4 md:mt-0 flex items-center space-x-2">
// // // // // //                         <button
// // // // // //                           className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
// // // // // //                           onClick={() => toggleExpanded(product._id)}
// // // // // //                         >
// // // // // //                           {expandedItem === product._id ? "Less details" : "More details"}
// // // // // //                           <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
// // // // // //                             expandedItem === product._id ? "transform rotate-180" : ""
// // // // // //                           }`} />
// // // // // //                         </button>
                        
// // // // // //                         {restockInProgress.includes(product._id) ? (
// // // // // //                           <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded text-sm flex items-center cursor-not-allowed">
// // // // // //                             <div className="animate-spin rounded-full h-3 w-3 border-t-2 border-gray-600 mr-2"></div>
// // // // // //                             Processing...
// // // // // //                           </button>
// // // // // //                         ) : (
// // // // // //                           <button 
// // // // // //                             className="bg-red-100 hover:bg-red-200 text-red-800 px-4 py-2 rounded text-sm flex items-center transition-colors"
// // // // // //                             onClick={() => openRestockModal(product)}
// // // // // //                           >
// // // // // //                             <Truck className="mr-2 h-4 w-4" /> Restock Now
// // // // // //                           </button>
// // // // // //                         )}
// // // // // //                       </div>
// // // // // //                     </div>
                    
// // // // // //                     <AnimatePresence>
// // // // // //                       {expandedItem === product._id && (
// // // // // //                         <motion.div
// // // // // //                           initial={{ height: 0, opacity: 0 }}
// // // // // //                           animate={{ height: "auto", opacity: 1 }}
// // // // // //                           exit={{ height: 0, opacity: 0 }}
// // // // // //                           transition={{ duration: 0.2 }}
// // // // // //                           className="overflow-hidden"
// // // // // //                         >
// // // // // //                           <div className="p-4 pt-0 border-t border-gray-100">
// // // // // //                             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// // // // // //                               <div className="bg-gray-50 p-3 rounded-lg">
// // // // // //                                 <h4 className="text-sm font-medium text-gray-500 mb-1 flex items-center">
// // // // // //                                   <BarChart2 className="mr-1 h-4 w-4" /> Usage Metrics
// // // // // //                                 </h4>
// // // // // //                                 <p className="text-sm"><span className="font-medium">Sales Velocity:</span> {product.salesVelocity} units/day</p>
// // // // // //                                 <p className="text-sm"><span className="font-medium">Days to Empty:</span> {product.daysToEmpty}</p>
// // // // // //                                 <div className="mt-1 h-2 bg-gray-200 rounded-full overflow-hidden">
// // // // // //                                   <div 
// // // // // //                                     className={`h-full ${
// // // // // //                                       product.daysToEmpty < 3 ? "bg-red-500" : 
// // // // // //                                       product.daysToEmpty < 7 ? "bg-yellow-500" : "bg-green-500"
// // // // // //                                     }`}
// // // // // //                                     style={{ width: `${Math.min(100, (product.daysToEmpty / 30) * 100)}%` }}
// // // // // //                                   ></div>
// // // // // //                                 </div>
// // // // // //                               </div>
                              
// // // // // //                               <div className="bg-gray-50 p-3 rounded-lg">
// // // // // //                                 <h4 className="text-sm font-medium text-gray-500 mb-1 flex items-center">
// // // // // //                                   <Truck className="mr-1 h-4 w-4" /> Supplier Information
// // // // // //                                 </h4>
// // // // // //                                 <p className="text-sm"><span className="font-medium">Supplier:</span> {product.supplier}</p>
// // // // // //                                 <p className="text-sm"><span className="font-medium">Lead Time:</span> {product.leadTime} days</p>
// // // // // //                               </div>
                              
// // // // // //                               <div className="bg-gray-50 p-3 rounded-lg">
// // // // // //                                 <h4 className="text-sm font-medium text-gray-500 mb-1 flex items-center">
// // // // // //                                   <Calendar className="mr-1 h-4 w-4" /> Restock Details
// // // // // //                                 </h4>
// // // // // //                                 <p className="text-sm"><span className="font-medium">Last Restocked:</span> {product.last_restocked}</p>
// // // // // //                                 <p className="text-sm"><span className="font-medium">Restock Cost:</span> ${product.restockCost}</p>
// // // // // //                                 <p className="text-sm"><span className="font-medium">Potential Lost Sales:</span> ${product.potentialLostSales}</p>
// // // // // //                               </div>
// // // // // //                             </div>
// // // // // //                           </div>
// // // // // //                         </motion.div>
// // // // // //                       )}
// // // // // //                     </AnimatePresence>
// // // // // //                   </motion.div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             ) : (
// // // // // //               <div className="bg-white rounded-lg shadow p-8 text-center">
// // // // // //                 <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
// // // // // //                 <h3 className="mt-2 text-lg font-medium text-gray-900">All products are well-stocked</h3>
// // // // // //                 <p className="mt-1 text-sm text-gray-500">No items require immediate restock attention</p>
// // // // // //               </div>
// // // // // //             )
// // // // // //           ) : (
// // // // // //             <div className="bg-white rounded-lg shadow-md p-6">
// // // // // //               <h2 className="text-xl font-bold mb-4 flex items-center">
// // // // // //                 <PieChart className="mr-2 h-5 w-5 text-blue-600" />
// // // // // //                 Inventory Analytics
// // // // // //               </h2>
              
// // // // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // // //                 <div className="bg-gray-50 p-4 rounded-lg">
// // // // // //                   <h3 className="text-lg font-medium mb-2">Stockout Risk Distribution</h3>
// // // // // //                   <div className="h-64 flex items-end justify-between">
// // // // // //                     {Object.entries(stockoutRiskDistribution).map(([range, count]) => (
// // // // // //                       <div key={range} className="flex-1 flex flex-col items-center">
// // // // // //                         <div 
// // // // // //                           className="bg-red-500 w-3/4 rounded-t"
// // // // // //                           style={{ 
// // // // // //                             height: `${(count / Math.max(...Object.values(stockoutRiskDistribution), 1)) * 80}%`,
// // // // // //                             minHeight: count > 0 ? '10px' : '0px'
// // // // // //                           }}
// // // // // //                         />
// // // // // //                         <span className="text-sm mt-2">{range}%</span>
// // // // // //                         <span className="text-xs text-gray-500">{count}</span>
// // // // // //                       </div>
// // // // // //                     ))}
// // // // // //                   </div>
// // // // // //                 </div>
                
// // // // // //                 <div className="bg-gray-50 p-4 rounded-lg">
// // // // // //                   <h3 className="text-lg font-medium mb-2">Restock History</h3>
// // // // // //                   <div className="h-64 overflow-y-auto">
// // // // // //                     <table className="w-full text-sm">
// // // // // //                       <thead className="bg-gray-100 sticky top-0">
// // // // // //                         <tr>
// // // // // //                           <th className="p-2 text-left">Date</th>
// // // // // //                           <th className="p-2 text-left">Product</th>
// // // // // //                           <th className="p-2 text-right">Qty</th>
// // // // // //                           <th className="p-2 text-right">Cost</th>
// // // // // //                         </tr>
// // // // // //                       </thead>
// // // // // //                       <tbody>
// // // // // //                         {restockHistory.map((entry) => (
// // // // // //                           <tr key={entry.id} className="border-b">
// // // // // //                             <td className="p-2">{entry.date}</td>
// // // // // //                             <td className="p-2">{entry.product_name}</td>
// // // // // //                             <td className="p-2 text-right">{entry.quantity}</td>
// // // // // //                             <td className="p-2 text-right">${entry.cost}</td>
// // // // // //                           </tr>
// // // // // //                         ))}
// // // // // //                         {restockHistory.length === 0 && (
// // // // // //                           <tr>
// // // // // //                             <td colSpan="4" className="p-2 text-center text-gray-500">
// // // // // //                               No restock history available
// // // // // //                             </td>
// // // // // //                           </tr>
// // // // // //                         )}
// // // // // //                       </tbody>
// // // // // //                     </table>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </>
// // // // // //       )}

// // // // // //       <AnimatePresence>
// // // // // //         {showRestockModal && selectedProduct && (
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0 }}
// // // // // //             animate={{ opacity: 1 }}
// // // // // //             exit={{ opacity: 0 }}
// // // // // //             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
// // // // // //             onClick={() => setShowRestockModal(false)}
// // // // // //           >
// // // // // //             <motion.div
// // // // // //               initial={{ y: -20, opacity: 0 }}
// // // // // //               animate={{ y: 0, opacity: 1 }}
// // // // // //               exit={{ y: -20, opacity: 0 }}
// // // // // //               className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
// // // // // //               onClick={(e) => e.stopPropagation()}
// // // // // //             >
// // // // // //               <h2 className="text-xl font-bold mb-4">Restock {selectedProduct.product_name}</h2>
// // // // // //               <div className="space-y-4">
// // // // // //                 <div>
// // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Quantity to Restock</label>
// // // // // //                   <input
// // // // // //                     type="number"
// // // // // //                     min="1"
// // // // // //                     max={selectedProduct.stock_level - selectedProduct.quantity}
// // // // // //                     value={restockQuantity}
// // // // // //                     onChange={(e) => setRestockQuantity(parseInt(e.target.value))}
// // // // // //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // //                   />
// // // // // //                 </div>
// // // // // //                 <div className="text-sm text-gray-600">
// // // // // //                   <p>Current Stock: {selectedProduct.quantity}</p>
// // // // // //                   <p>Stock Level: {selectedProduct.stock_level}</p>
// // // // // //                   <p>Estimated Cost: ${(restockQuantity * selectedProduct.price).toFixed(2)}</p>
// // // // // //                 </div>
// // // // // //                 <div className="flex justify-end space-x-2">
// // // // // //                   <button
// // // // // //                     className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm"
// // // // // //                     onClick={() => setShowRestockModal(false)}
// // // // // //                   >
// // // // // //                     Cancel
// // // // // //                   </button>
// // // // // //                   <button
// // // // // //                     className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
// // // // // //                     onClick={() => handleRestock(selectedProduct._id, restockQuantity)}
// // // // // //                   >
// // // // // //                     Confirm Restock
// // // // // //                   </button>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </motion.div>
// // // // // //           </motion.div>
// // // // // //         )}
// // // // // //       </AnimatePresence>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default RestockAlerts;


// // // // // import React, { useState, useEffect, useContext, useMemo } from "react";
// // // // // import { StoreContext } from "./StoreContext";
// // // // // import { 
// // // // //   Bell, AlertTriangle, TrendingDown, Clock, Truck, DollarSign, 
// // // // //   Calendar, CheckCircle, BarChart2, RefreshCw, Filter, ChevronDown, 
// // // // //   DownloadCloud, PieChart
// // // // // } from "lucide-react";
// // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // const RestockAlerts = () => {
// // // // //   const { storeId } = useContext(StoreContext);
// // // // //   const [allProducts, setAllProducts] = useState([]); // Added for total products
// // // // //   const [lowStockProducts, setLowStockProducts] = useState([]);
// // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // //   const [restockInProgress, setRestockInProgress] = useState([]);
// // // // //   const [sortBy, setSortBy] = useState("critical");
// // // // //   const [filterType, setFilterType] = useState("all");
// // // // //   const [expandedItem, setExpandedItem] = useState(null);
// // // // //   const [selectedSupplier, setSelectedSupplier] = useState("all");
// // // // //   const [suppliers, setSuppliers] = useState([]);
// // // // //   const [dateRange, setDateRange] = useState("30");
// // // // //   const [view, setView] = useState("list");
// // // // //   const [restockHistory, setRestockHistory] = useState([]);
// // // // //   const [showRestockModal, setShowRestockModal] = useState(false);
// // // // //   const [selectedProduct, setSelectedProduct] = useState(null);
// // // // //   const [restockQuantity, setRestockQuantity] = useState(0);
// // // // //   const [stats, setStats] = useState({
// // // // //     criticalCount: 0,
// // // // //     warningCount: 0,
// // // // //     totalValue: 0,
// // // // //     avgDaysToEmpty: 0,
// // // // //     potentialLostSales: 0,
// // // // //     stockoutRisk: 0
// // // // //   });
// // // // //   const API_URL = "http://127.0.0.1:5000";

// // // // //   useEffect(() => {
// // // // //     if (storeId) {
// // // // //       fetchLowStockProducts();
// // // // //       fetchRestockHistory();
// // // // //     }
// // // // //   }, [storeId, dateRange]);

// // // // //   const fetchLowStockProducts = async () => {
// // // // //     setIsLoading(true);
// // // // //     try {
// // // // //       const response = await fetch(`${API_URL}/products?storeId=${storeId}`);
// // // // //       const data = await response.json();

// // // // //       setAllProducts(data); // Store all products

// // // // //       const enhancedLowStock = data.map(product => {
// // // // //         const stockLevel = parseInt(product.stock_level) || 100;
// // // // //         const quantity = parseInt(product.quantity) || 0;
// // // // //         const price = parseFloat(product.price) || 0;
// // // // //         const salesVelocity = parseFloat(product.salesVelocity) || (Math.random() * 5 + 0.5);
        
// // // // //         const daysToEmpty = quantity > 0 ? Math.ceil(quantity / salesVelocity) : 0;
// // // // //         const warningThreshold = stockLevel * 1.2;
// // // // //         const criticalThreshold = stockLevel;
        
// // // // //         const status = quantity <= criticalThreshold ? "critical" :
// // // // //                       quantity <= warningThreshold ? "warning" : "normal";
        
// // // // //         const restockCost = ((stockLevel - quantity) * price).toFixed(2);
// // // // //         const leadTime = product.leadTime || Math.floor(Math.random() * 14) + 3;
// // // // //         const profitMargin = product.profitMargin || ((price - (price * 0.6)) / price * 100).toFixed(1);
// // // // //         const potentialLostSales = (salesVelocity * leadTime * price).toFixed(2);
// // // // //         const stockoutRisk = Math.min(100, Math.max(0, Math.round(
// // // // //           (1 - (quantity / stockLevel)) * 100
// // // // //         )));

// // // // //         return {
// // // // //           ...product,
// // // // //           salesVelocity: salesVelocity.toFixed(1),
// // // // //           daysToEmpty,
// // // // //           status,
// // // // //           restockCost,
// // // // //           leadTime,
// // // // //           profitMargin,
// // // // //           potentialLostSales,
// // // // //           stockoutRisk,
// // // // //           stock_level: stockLevel,
// // // // //           quantity: quantity,
// // // // //           price: price,
// // // // //           supplier: product.supplier || "Unknown",
// // // // //           last_restocked: product.last_restocked || "N/A"
// // // // //         };
// // // // //       }).filter(p => p.quantity < p.stock_level * 1.5);

// // // // //       setLowStockProducts(enhancedLowStock);
// // // // //       setSuppliers([...new Set(enhancedLowStock.map(p => p.supplier))]);

// // // // //       const criticalCount = enhancedLowStock.filter(p => p.status === "critical").length;
// // // // //       const warningCount = enhancedLowStock.filter(p => p.status === "warning").length;
// // // // //       const totalValue = enhancedLowStock.reduce((sum, p) => sum + parseFloat(p.restockCost), 0);
// // // // //       const avgDays = enhancedLowStock.length > 0 ? 
// // // // //         Math.round(enhancedLowStock.reduce((sum, p) => sum + p.daysToEmpty, 0) / enhancedLowStock.length) : 0;
// // // // //       const potentialLostSales = enhancedLowStock.reduce((sum, p) => sum + parseFloat(p.potentialLostSales), 0);
// // // // //       const avgStockoutRisk = enhancedLowStock.length > 0 ? 
// // // // //         Math.round(enhancedLowStock.reduce((sum, p) => sum + p.stockoutRisk, 0) / enhancedLowStock.length) : 0;

// // // // //       setStats({
// // // // //         criticalCount,
// // // // //         warningCount,
// // // // //         totalValue: totalValue.toFixed(2),
// // // // //         avgDaysToEmpty: avgDays,
// // // // //         potentialLostSales: potentialLostSales.toFixed(2),
// // // // //         stockoutRisk: avgStockoutRisk
// // // // //       });
// // // // //     } catch (err) {
// // // // //       console.error("Error fetching products:", err);
// // // // //     } finally {
// // // // //       setIsLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const fetchRestockHistory = async () => {
// // // // //     try {
// // // // //       const response = await fetch(`${API_URL}/restock-history?storeId=${storeId}`);
// // // // //       if (!response.ok) throw new Error(`Failed to fetch restock history: ${response.statusText}`);
// // // // //       const history = await response.json();
      
// // // // //       const formattedHistory = history.map(entry => ({
// // // // //         id: entry._id,
// // // // //         product_name: entry.product_name || "Unknown Product",
// // // // //         date: entry.date.split('T')[0] || "N/A",
// // // // //         quantity: parseInt(entry.quantity) || 0,
// // // // //         cost: parseFloat(entry.cost).toFixed(2) || "0.00",
// // // // //         supplier: entry.supplier || "Unknown",
// // // // //         status: entry.status || "Completed"
// // // // //       }));
      
// // // // //       setRestockHistory(formattedHistory);
// // // // //       console.log("Restock History:", formattedHistory); // Debug log
// // // // //     } catch (error) {
// // // // //       console.error("Error fetching restock history:", error);
// // // // //       setRestockHistory([]);
// // // // //     }
// // // // //   };

// // // // //   const filteredProducts = useMemo(() => {
// // // // //     return lowStockProducts.filter(product => {
// // // // //       return (filterType === "all" || product.status === filterType) &&
// // // // //              (selectedSupplier === "all" || product.supplier === selectedSupplier);
// // // // //     });
// // // // //   }, [lowStockProducts, filterType, selectedSupplier]);

// // // // //   const sortedProducts = useMemo(() => {
// // // // //     return [...filteredProducts].sort((a, b) => {
// // // // //       switch (sortBy) {
// // // // //         case "critical":
// // // // //           if (a.status === "critical" && b.status !== "critical") return -1;
// // // // //           if (a.status !== "critical" && b.status === "critical") return 1;
// // // // //           return a.daysToEmpty - b.daysToEmpty;
// // // // //         case "name":
// // // // //           return (a.product_name || "").localeCompare(b.product_name || "");
// // // // //         case "supplier":
// // // // //           return (a.supplier || "").localeCompare(b.supplier || "");
// // // // //         case "days":
// // // // //           return a.daysToEmpty - b.daysToEmpty;
// // // // //         case "profit":
// // // // //           return parseFloat(b.profitMargin || 0) - parseFloat(a.profitMargin || 0);
// // // // //         case "risk":
// // // // //           return (b.stockoutRisk || 0) - (a.stockoutRisk || 0);
// // // // //         default:
// // // // //           return 0;
// // // // //       }
// // // // //     });
// // // // //   }, [filteredProducts, sortBy]);

// // // // //   const inventoryHealthScore = useMemo(() => {
// // // // //     if (allProducts.length === 0) return 100;
// // // // //     const totalProducts = allProducts.length;
// // // // //     const criticalPercentage = (stats.criticalCount / totalProducts) * 100;
// // // // //     const warningPercentage = (stats.warningCount / totalProducts) * 100;
// // // // //     const baseScore = 100 - (criticalPercentage * 2 + warningPercentage * 1);
// // // // //     console.log("Total Products:", totalProducts, "Critical:", stats.criticalCount, "Warning:", stats.warningCount, "Score:", baseScore);
// // // // //     return Math.max(0, Math.round(baseScore));
// // // // //   }, [allProducts, stats]);

// // // // //   const stockoutRiskDistribution = useMemo(() => {
// // // // //     const ranges = { "0-25": 0, "26-50": 0, "51-75": 0, "76-100": 0 };
// // // // //     lowStockProducts.forEach(p => {
// // // // //       const risk = p.stockoutRisk || 0;
// // // // //       if (risk <= 25) ranges["0-25"]++;
// // // // //       else if (risk <= 50) ranges["26-50"]++;
// // // // //       else if (risk <= 75) ranges["51-75"]++;
// // // // //       else ranges["76-100"]++;
// // // // //     });
// // // // //     return ranges;
// // // // //   }, [lowStockProducts]);

// // // // //   const getStatusColor = (status) => {
// // // // //     switch (status) {
// // // // //       case "critical": return "bg-red-50 border-red-200 text-red-800";
// // // // //       case "warning": return "bg-yellow-50 border-yellow-200 text-yellow-800";
// // // // //       default: return "bg-blue-50 border-blue-200 text-blue-800";
// // // // //     }
// // // // //   };

// // // // //   const getStatusBadge = (status) => {
// // // // //     switch (status) {
// // // // //       case "critical": return "bg-red-100 text-red-800";
// // // // //       case "warning": return "bg-yellow-100 text-yellow-800";
// // // // //       default: return "bg-blue-100 text-blue-800";
// // // // //     }
// // // // //   };

// // // // //   const toggleExpanded = (id) => {
// // // // //     setExpandedItem(expandedItem === id ? null : id);
// // // // //   };

// // // // //   const openRestockModal = (product) => {
// // // // //     setSelectedProduct(product);
// // // // //     setRestockQuantity(product.stock_level - product.quantity);
// // // // //     setShowRestockModal(true);
// // // // //   };

// // // // //   const handleRestock = async (productId, quantity) => {
// // // // //     try {
// // // // //       setRestockInProgress([...restockInProgress, productId]);
// // // // //       const response = await fetch(`${API_URL}/products/${productId}/restock?storeId=${storeId}`, {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //         body: JSON.stringify({ quantity: parseInt(quantity) })
// // // // //       });
      
// // // // //       if (!response.ok) throw new Error("Restock failed");
      
// // // // //       const data = await response.json();
// // // // //       setRestockInProgress(restockInProgress.filter(id => id !== productId));
      
// // // // //       setLowStockProducts(lowStockProducts.map(product => 
// // // // //         product._id === productId ? { 
// // // // //           ...product, 
// // // // //           quantity: parseInt(data.new_quantity),
// // // // //           last_restocked: new Date().toISOString().split('T')[0]
// // // // //         } : product
// // // // //       ));
      
// // // // //       await fetchRestockHistory(); // Refresh history
      
// // // // //       setShowRestockModal(false);
// // // // //     } catch (error) {
// // // // //       console.error("Restock error:", error);
// // // // //       setRestockInProgress(restockInProgress.filter(id => id !== productId));
// // // // //     }
// // // // //   };

// // // // //   const exportToCSV = () => {
// // // // //     const headers = ["Product Name", "Current Stock", "Stock Level", "Status", "Days to Empty", "Supplier", "Restock Cost"];
// // // // //     const csvData = sortedProducts.map(p => [
// // // // //       p.product_name,
// // // // //       p.quantity,
// // // // //       p.stock_level,
// // // // //       p.status,
// // // // //       p.daysToEmpty,
// // // // //       p.supplier,
// // // // //       p.restockCost
// // // // //     ]);
    
// // // // //     const csvContent = [headers.join(","), ...csvData.map(row => row.join(","))].join("\n");
// // // // //     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
// // // // //     const url = URL.createObjectURL(blob);
// // // // //     const link = document.createElement("a");
// // // // //     link.setAttribute("href", url);
// // // // //     link.setAttribute("download", "restock_alerts.csv");
// // // // //     document.body.appendChild(link);
// // // // //     link.click();
// // // // //     document.body.removeChild(link);
// // // // //   };

// // // // //   return (
// // // // //     <div className="p-6 max-w-7xl mx-auto bg-gray-50 min-h-screen">
// // // // //       <motion.div
// // // // //         initial={{ opacity: 0, y: -20 }}
// // // // //         animate={{ opacity: 1, y: 0 }}
// // // // //         transition={{ duration: 0.5 }}
// // // // //         className="flex flex-col md:flex-row md:items-center md:justify-between mb-6"
// // // // //       >
// // // // //         <div>
// // // // //           <h1 className="text-3xl font-bold mb-2 text-gray-800 flex items-center">
// // // // //             <Bell className="mr-2 text-red-600" /> 
// // // // //             Restock Alerts Dashboard
// // // // //           </h1>
// // // // //           <p className="text-gray-500">Monitor and manage low stock items</p>
// // // // //         </div>
        
// // // // //         <div className="mt-4 md:mt-0 flex items-center space-x-2">
// // // // //           <button
// // // // //             className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
// // // // //               view === "list" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
// // // // //             }`}
// // // // //             onClick={() => setView("list")}
// // // // //           >
// // // // //             List View
// // // // //           </button>
// // // // //           <button
// // // // //             className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
// // // // //               view === "analytics" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
// // // // //             }`}
// // // // //             onClick={() => setView("analytics")}
// // // // //           >
// // // // //             Analytics
// // // // //           </button>
// // // // //           <button
// // // // //             className="ml-2 bg-green-100 hover:bg-green-200 text-green-800 px-3 py-1 rounded-md text-sm font-medium transition-colors flex items-center"
// // // // //             onClick={exportToCSV}
// // // // //           >
// // // // //             <DownloadCloud className="mr-1 h-4 w-4" /> Export
// // // // //           </button>
// // // // //         </div>
// // // // //       </motion.div>

// // // // //       <motion.div 
// // // // //         className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6"
// // // // //         initial={{ opacity: 0 }}
// // // // //         animate={{ opacity: 1 }}
// // // // //         transition={{ duration: 0.6 }}
// // // // //       >
// // // // //         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-red-500">
// // // // //           <div className="flex justify-between items-center">
// // // // //             <div>
// // // // //               <p className="text-sm text-gray-500">Critical Items</p>
// // // // //               <p className="text-2xl font-bold">{stats.criticalCount}</p>
// // // // //             </div>
// // // // //             <AlertTriangle className="h-10 w-10 text-red-500 opacity-70" />
// // // // //           </div>
// // // // //         </div>
        
// // // // //         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-yellow-500">
// // // // //           <div className="flex justify-between items-center">
// // // // //             <div>
// // // // //               <p className="text-sm text-gray-500">Warning Items</p>
// // // // //               <p className="text-2xl font-bold">{stats.warningCount}</p>
// // // // //             </div>
// // // // //             <Bell className="h-10 w-10 text-yellow-500 opacity-70" />
// // // // //           </div>
// // // // //         </div>
        
// // // // //         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
// // // // //           <div className="flex justify-between items-center">
// // // // //             <div>
// // // // //               <p className="text-sm text-gray-500">Avg. Days to Empty</p>
// // // // //               <p className="text-2xl font-bold">{stats.avgDaysToEmpty}</p>
// // // // //             </div>
// // // // //             <Clock className="h-10 w-10 text-blue-500 opacity-70" />
// // // // //           </div>
// // // // //         </div>
        
// // // // //         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
// // // // //           <div className="flex justify-between items-center">
// // // // //             <div>
// // // // //               <p className="text-sm text-gray-500">Restock Value</p>
// // // // //               <p className="text-2xl font-bold">${stats.totalValue}</p>
// // // // //             </div>
// // // // //             <DollarSign className="h-10 w-10 text-green-500 opacity-70" />
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-500">
// // // // //           <div className="flex justify-between items-center">
// // // // //             <div>
// // // // //               <p className="text-sm text-gray-500">Potential Lost Sales</p>
// // // // //               <p className="text-2xl font-bold">${stats.potentialLostSales}</p>
// // // // //             </div>
// // // // //             <TrendingDown className="h-10 w-10 text-purple-500 opacity-70" />
// // // // //           </div>
// // // // //         </div>
        
// // // // //         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-indigo-500">
// // // // //           <div className="flex justify-between items-center">
// // // // //             <div>
// // // // //               <p className="text-sm text-gray-500">Inventory Health</p>
// // // // //               <div className="flex items-center">
// // // // //                 <p className="text-2xl font-bold">{inventoryHealthScore}</p>
// // // // //                 <span className="text-sm ml-1">/100</span>
// // // // //               </div>
// // // // //             </div>
// // // // //             <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
// // // // //               <div 
// // // // //                 className="h-8 w-8 rounded-full" 
// // // // //                 style={{ 
// // // // //                   background: `conic-gradient(${inventoryHealthScore > 80 ? '#10B981' : inventoryHealthScore > 50 ? '#FBBF24' : '#EF4444'} ${inventoryHealthScore}%, #E5E7EB 0)` 
// // // // //                 }} 
// // // // //               />
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </motion.div>

// // // // //       <div className="bg-white rounded-lg shadow-md p-4 mb-6">
// // // // //         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
// // // // //           <div className="flex items-center space-x-2">
// // // // //             <Filter className="text-gray-400" />
// // // // //             <span className="text-gray-700 font-medium">Filter:</span>
            
// // // // //             <div className="flex space-x-2">
// // // // //               <button
// // // // //                 className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
// // // // //                   filterType === "all" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// // // // //                 }`}
// // // // //                 onClick={() => setFilterType("all")}
// // // // //               >
// // // // //                 All
// // // // //               </button>
// // // // //               <button
// // // // //                 className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
// // // // //                   filterType === "critical" ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// // // // //                 }`}
// // // // //                 onClick={() => setFilterType("critical")}
// // // // //               >
// // // // //                 Critical
// // // // //               </button>
// // // // //               <button
// // // // //                 className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
// // // // //                   filterType === "warning" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// // // // //                 }`}
// // // // //                 onClick={() => setFilterType("warning")}
// // // // //               >
// // // // //                 Warning
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
          
// // // // //           <div className="flex items-center space-x-4">
// // // // //             <div className="relative">
// // // // //               <select
// // // // //                 className="appearance-none bg-gray-100 border border-gray-300 rounded-md pl-3 pr-8 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
// // // // //                 value={selectedSupplier}
// // // // //                 onChange={(e) => setSelectedSupplier(e.target.value)}
// // // // //               >
// // // // //                 <option value="all">All Suppliers</option>
// // // // //                 {suppliers.map(supplier => (
// // // // //                   <option key={supplier} value={supplier}>{supplier}</option>
// // // // //                 ))}
// // // // //               </select>
// // // // //               <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
// // // // //             </div>
            
// // // // //             <div className="relative">
// // // // //               <select
// // // // //                 className="appearance-none bg-gray-100 border border-gray-300 rounded-md pl-3 pr-8 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
// // // // //                 value={sortBy}
// // // // //                 onChange={(e) => setSortBy(e.target.value)}
// // // // //               >
// // // // //                 <option value="critical">Sort by Priority</option>
// // // // //                 <option value="days">Sort by Days to Empty</option>
// // // // //                 <option value="name">Sort by Name</option>
// // // // //                 <option value="supplier">Sort by Supplier</option>
// // // // //                 <option value="profit">Sort by Profit Margin</option>
// // // // //                 <option value="risk">Sort by Stockout Risk</option>
// // // // //               </select>
// // // // //               <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
// // // // //             </div>
            
// // // // //             <div className="relative">
// // // // //               <select
// // // // //                 className="appearance-none bg-gray-100 border border-gray-300 rounded-md pl-3 pr-8 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
// // // // //                 value={dateRange}
// // // // //                 onChange={(e) => setDateRange(e.target.value)}
// // // // //               >
// // // // //                 <option value="7">Last 7 Days</option>
// // // // //                 <option value="30">Last 30 Days</option>
// // // // //                 <option value="90">Last 90 Days</option>
// // // // //               </select>
// // // // //               <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
// // // // //             </div>
            
// // // // //             <button 
// // // // //               className="bg-blue-100 hover:bg-blue-200 text-blue-800 p-2 rounded-full transition-colors"
// // // // //               onClick={fetchLowStockProducts}
// // // // //             >
// // // // //               <RefreshCw className="h-4 w-4" />
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {isLoading ? (
// // // // //         <div className="flex justify-center items-center py-20">
// // // // //           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
// // // // //         </div>
// // // // //       ) : (
// // // // //         <>
// // // // //           {view === "list" ? (
// // // // //             sortedProducts.length > 0 ? (
// // // // //               <div className="space-y-4">
// // // // //                 {sortedProducts.map((product) => (
// // // // //                   <motion.div 
// // // // //                     key={product._id}
// // // // //                     initial={{ x: -20, opacity: 0 }}
// // // // //                     animate={{ x: 0, opacity: 1 }}
// // // // //                     className={`border rounded-lg overflow-hidden shadow-sm ${
// // // // //                       expandedItem === product._id ? "bg-gray-50" : "bg-white"
// // // // //                     }`}
// // // // //                   >
// // // // //                     <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4">
// // // // //                       <div className="flex items-start md:items-center space-x-3">
// // // // //                         <div className={`p-2 rounded-md ${getStatusColor(product.status)}`}>
// // // // //                           {product.status === "critical" ? 
// // // // //                             <AlertTriangle className="h-5 w-5" /> : 
// // // // //                             <Bell className="h-5 w-5" />}
// // // // //                         </div>
                        
// // // // //                         <div>
// // // // //                           <div className="flex items-center flex-wrap gap-2">
// // // // //                             <h3 className="font-medium text-lg">{product.product_name}</h3>
// // // // //                             <span className={`px-2 py-0.5 text-xs rounded-full ${getStatusBadge(product.status)}`}>
// // // // //                               {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
// // // // //                             </span>
// // // // //                           </div>
// // // // //                           <div className="flex items-center mt-1 text-sm text-gray-600">
// // // // //                             <span className={product.status === "critical" ? "font-bold text-red-600" : ""}>
// // // // //                               {product.quantity}
// // // // //                             </span>
// // // // //                             <span className="mx-1">/</span>
// // // // //                             <span>{product.stock_level} units</span>
// // // // //                             {product.daysToEmpty <= 7 && (
// // // // //                               <span className="ml-2 text-red-600 font-medium">
// // // // //                                 {product.daysToEmpty === 0 ? "Out of stock!" : `${product.daysToEmpty} days until empty`}
// // // // //                               </span>
// // // // //                             )}
// // // // //                             <span className="ml-4 text-gray-500">
// // // // //                               ${product.price} | Margin: {product.profitMargin}%
// // // // //                             </span>
// // // // //                           </div>
// // // // //                         </div>
// // // // //                       </div>
                      
// // // // //                       <div className="mt-4 md:mt-0 flex items-center space-x-2">
// // // // //                         <button
// // // // //                           className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
// // // // //                           onClick={() => toggleExpanded(product._id)}
// // // // //                         >
// // // // //                           {expandedItem === product._id ? "Less details" : "More details"}
// // // // //                           <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
// // // // //                             expandedItem === product._id ? "transform rotate-180" : ""
// // // // //                           }`} />
// // // // //                         </button>
                        
// // // // //                         {restockInProgress.includes(product._id) ? (
// // // // //                           <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded text-sm flex items-center cursor-not-allowed">
// // // // //                             <div className="animate-spin rounded-full h-3 w-3 border-t-2 border-gray-600 mr-2"></div>
// // // // //                             Processing...
// // // // //                           </button>
// // // // //                         ) : (
// // // // //                           <button 
// // // // //                             className="bg-red-100 hover:bg-red-200 text-red-800 px-4 py-2 rounded text-sm flex items-center transition-colors"
// // // // //                             onClick={() => openRestockModal(product)}
// // // // //                           >
// // // // //                             <Truck className="mr-2 h-4 w-4" /> Restock Now
// // // // //                           </button>
// // // // //                         )}
// // // // //                       </div>
// // // // //                     </div>
                    
// // // // //                     <AnimatePresence>
// // // // //                       {expandedItem === product._id && (
// // // // //                         <motion.div
// // // // //                           initial={{ height: 0, opacity: 0 }}
// // // // //                           animate={{ height: "auto", opacity: 1 }}
// // // // //                           exit={{ height: 0, opacity: 0 }}
// // // // //                           transition={{ duration: 0.2 }}
// // // // //                           className="overflow-hidden"
// // // // //                         >
// // // // //                           <div className="p-4 pt-0 border-t border-gray-100">
// // // // //                             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// // // // //                               <div className="bg-gray-50 p-3 rounded-lg">
// // // // //                                 <h4 className="text-sm font-medium text-gray-500 mb-1 flex items-center">
// // // // //                                   <BarChart2 className="mr-1 h-4 w-4" /> Usage Metrics
// // // // //                                 </h4>
// // // // //                                 <p className="text-sm"><span className="font-medium">Sales Velocity:</span> {product.salesVelocity} units/day</p>
// // // // //                                 <p className="text-sm"><span className="font-medium">Days to Empty:</span> {product.daysToEmpty}</p>
// // // // //                                 <div className="mt-1 h-2 bg-gray-200 rounded-full overflow-hidden">
// // // // //                                   <div 
// // // // //                                     className={`h-full ${
// // // // //                                       product.daysToEmpty < 3 ? "bg-red-500" : 
// // // // //                                       product.daysToEmpty < 7 ? "bg-yellow-500" : "bg-green-500"
// // // // //                                     }`}
// // // // //                                     style={{ width: `${Math.min(100, (product.daysToEmpty / 30) * 100)}%` }}
// // // // //                                   ></div>
// // // // //                                 </div>
// // // // //                               </div>
                              
// // // // //                               <div className="bg-gray-50 p-3 rounded-lg">
// // // // //                                 <h4 className="text-sm font-medium text-gray-500 mb-1 flex items-center">
// // // // //                                   <Truck className="mr-1 h-4 w-4" /> Supplier Information
// // // // //                                 </h4>
// // // // //                                 <p className="text-sm"><span className="font-medium">Supplier:</span> {product.supplier}</p>
// // // // //                                 <p className="text-sm"><span className="font-medium">Lead Time:</span> {product.leadTime} days</p>
// // // // //                               </div>
                              
// // // // //                               <div className="bg-gray-50 p-3 rounded-lg">
// // // // //                                 <h4 className="text-sm font-medium text-gray-500 mb-1 flex items-center">
// // // // //                                   <Calendar className="mr-1 h-4 w-4" /> Restock Details
// // // // //                                 </h4>
// // // // //                                 <p className="text-sm"><span className="font-medium">Last Restocked:</span> {product.last_restocked}</p>
// // // // //                                 <p className="text-sm"><span className="font-medium">Restock Cost:</span> ${product.restockCost}</p>
// // // // //                                 <p className="text-sm"><span className="font-medium">Potential Lost Sales:</span> ${product.potentialLostSales}</p>
// // // // //                               </div>
// // // // //                             </div>
// // // // //                           </div>
// // // // //                         </motion.div>
// // // // //                       )}
// // // // //                     </AnimatePresence>
// // // // //                   </motion.div>
// // // // //                 ))}
// // // // //               </div>
// // // // //             ) : (
// // // // //               <div className="bg-white rounded-lg shadow p-8 text-center">
// // // // //                 <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
// // // // //                 <h3 className="mt-2 text-lg font-medium text-gray-900">All products are well-stocked</h3>
// // // // //                 <p className="mt-1 text-sm text-gray-500">No items require immediate restock attention</p>
// // // // //               </div>
// // // // //             )
// // // // //           ) : (
// // // // //             <div className="bg-white rounded-lg shadow-md p-6">
// // // // //               <h2 className="text-xl font-bold mb-4 flex items-center">
// // // // //                 <PieChart className="mr-2 h-5 w-5 text-blue-600" />
// // // // //                 Inventory Analytics
// // // // //               </h2>
              
// // // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // //                 <div className="bg-gray-50 p-4 rounded-lg">
// // // // //                   <h3 className="text-lg font-medium mb-2">Stockout Risk Distribution</h3>
// // // // //                   <div className="h-64 flex items-end justify-between">
// // // // //                     {Object.entries(stockoutRiskDistribution).map(([range, count]) => (
// // // // //                       <div key={range} className="flex-1 flex flex-col items-center">
// // // // //                         <div 
// // // // //                           className="bg-red-500 w-3/4 rounded-t"
// // // // //                           style={{ 
// // // // //                             height: `${(count / Math.max(...Object.values(stockoutRiskDistribution), 1)) * 80}%`,
// // // // //                             minHeight: count > 0 ? '10px' : '0px'
// // // // //                           }}
// // // // //                         />
// // // // //                         <span className="text-sm mt-2">{range}%</span>
// // // // //                         <span className="text-xs text-gray-500">{count}</span>
// // // // //                       </div>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                 </div>
                
// // // // //                 <div className="bg-gray-50 p-4 rounded-lg">
// // // // //                   <h3 className="text-lg font-medium mb-2">Restock History</h3>
// // // // //                   {restockHistory.length === 0 ? (
// // // // //                     <p className="text-sm text-gray-500">No restock history available</p>
// // // // //                   ) : (
// // // // //                     <div className="h-64 overflow-y-auto">
// // // // //                       <table className="w-full text-sm">
// // // // //                         <thead className="bg-gray-100 sticky top-0">
// // // // //                           <tr>
// // // // //                             <th className="p-2 text-left">Date</th>
// // // // //                             <th className="p-2 text-left">Product</th>
// // // // //                             <th className="p-2 text-right">Qty</th>
// // // // //                             <th className="p-2 text-right">Cost</th>
// // // // //                           </tr>
// // // // //                         </thead>
// // // // //                         <tbody>
// // // // //                           {restockHistory.map((entry) => (
// // // // //                             <tr key={entry.id} className="border-b">
// // // // //                               <td className="p-2">{entry.date}</td>
// // // // //                               <td className="p-2">{entry.product_name}</td>
// // // // //                               <td className="p-2 text-right">{entry.quantity}</td>
// // // // //                               <td className="p-2 text-right">${entry.cost}</td>
// // // // //                             </tr>
// // // // //                           ))}
// // // // //                         </tbody>
// // // // //                       </table>
// // // // //                     </div>
// // // // //                   )}
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           )}
// // // // //         </>
// // // // //       )}

// // // // //       <AnimatePresence>
// // // // //         {showRestockModal && selectedProduct && (
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0 }}
// // // // //             animate={{ opacity: 1 }}
// // // // //             exit={{ opacity: 0 }}
// // // // //             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
// // // // //             onClick={() => setShowRestockModal(false)}
// // // // //           >
// // // // //             <motion.div
// // // // //               initial={{ y: -20, opacity: 0 }}
// // // // //               animate={{ y: 0, opacity: 1 }}
// // // // //               exit={{ y: -20, opacity: 0 }}
// // // // //               className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
// // // // //               onClick={(e) => e.stopPropagation()}
// // // // //             >
// // // // //               <h2 className="text-xl font-bold mb-4">Restock {selectedProduct.product_name}</h2>
// // // // //               <div className="space-y-4">
// // // // //                 <div>
// // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Quantity to Restock</label>
// // // // //                   <input
// // // // //                     type="number"
// // // // //                     min="1"
// // // // //                     value={restockQuantity}
// // // // //                     onChange={(e) => setRestockQuantity(parseInt(e.target.value))}
// // // // //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // //                   />
// // // // //                 </div>
// // // // //                 <div className="text-sm text-gray-600">
// // // // //                   <p>Current Stock: {selectedProduct.quantity}</p>
// // // // //                   <p>Stock Level: {selectedProduct.stock_level}</p>
// // // // //                   <p>Estimated Cost: ${(restockQuantity * selectedProduct.price).toFixed(2)}</p>
// // // // //                 </div>
// // // // //                 <div className="flex justify-end space-x-2">
// // // // //                   <button
// // // // //                     className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm"
// // // // //                     onClick={() => setShowRestockModal(false)}
// // // // //                   >
// // // // //                     Cancel
// // // // //                   </button>
// // // // //                   <button
// // // // //                     className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
// // // // //                     onClick={() => handleRestock(selectedProduct._id, restockQuantity)}
// // // // //                   >
// // // // //                     Confirm Restock
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </motion.div>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default RestockAlerts;

// // // // import React, { useState, useEffect, useContext, useMemo } from "react";
// // // // import { StoreContext } from "./StoreContext";
// // // // import { 
// // // //   Bell, AlertTriangle, TrendingDown, Clock, Truck, DollarSign, 
// // // //   Calendar, CheckCircle, BarChart2, RefreshCw, Filter, ChevronDown, 
// // // //   DownloadCloud, PieChart
// // // // } from "lucide-react";
// // // // import { motion, AnimatePresence } from "framer-motion";

// // // // const RestockAlerts = () => {
// // // //   const { storeId } = useContext(StoreContext);
// // // //   const [allProducts, setAllProducts] = useState([]);
// // // //   const [lowStockProducts, setLowStockProducts] = useState([]);
// // // //   const [isLoading, setIsLoading] = useState(true);
// // // //   const [restockInProgress, setRestockInProgress] = useState([]);
// // // //   const [sortBy, setSortBy] = useState("critical");
// // // //   const [filterType, setFilterType] = useState("all");
// // // //   const [expandedItem, setExpandedItem] = useState(null);
// // // //   const [selectedSupplier, setSelectedSupplier] = useState("all");
// // // //   const [suppliers, setSuppliers] = useState([]);
// // // //   const [dateRange, setDateRange] = useState("30");
// // // //   const [view, setView] = useState("list");
// // // //   const [restockHistory, setRestockHistory] = useState([]);
// // // //   const [showRestockModal, setShowRestockModal] = useState(false);
// // // //   const [selectedProduct, setSelectedProduct] = useState(null);
// // // //   const [restockQuantity, setRestockQuantity] = useState(0);
// // // //   const [stats, setStats] = useState({
// // // //     criticalCount: 0,
// // // //     warningCount: 0,
// // // //     totalValue: 0,
// // // //     avgDaysToEmpty: 0,
// // // //     potentialLostSales: 0,
// // // //     stockoutRisk: 0
// // // //   });
// // // //   const API_URL = "http://127.0.0.1:5000";

// // // //   useEffect(() => {
// // // //     if (storeId) {
// // // //       fetchLowStockProducts();
// // // //       fetchRestockHistory();
// // // //     }
// // // //   }, [storeId, dateRange]);

// // // //   const fetchLowStockProducts = async () => {
// // // //     setIsLoading(true);
// // // //     try {
// // // //       const response = await fetch(`${API_URL}/products?storeId=${storeId}`);
// // // //       const data = await response.json();

// // // //       setAllProducts(data);

// // // //       const enhancedLowStock = data.map(product => {
// // // //         const stockLevel = parseInt(product.stock_level) || 100;
// // // //         const quantity = parseInt(product.quantity) || 0;
// // // //         const price = parseFloat(product.price) || 0;
// // // //         const salesVelocity = parseFloat(product.salesVelocity) || (Math.random() * 5 + 0.5);
        
// // // //         const daysToEmpty = quantity > 0 ? Math.ceil(quantity / salesVelocity) : 0;
// // // //         const warningThreshold = stockLevel * 1.2;
// // // //         const criticalThreshold = stockLevel;
        
// // // //         const status = quantity <= criticalThreshold ? "critical" :
// // // //                       quantity <= warningThreshold ? "warning" : "normal";
        
// // // //         const restockCost = ((stockLevel - quantity) * price).toFixed(2);
// // // //         const leadTime = product.leadTime || Math.floor(Math.random() * 14) + 3;
// // // //         const profitMargin = product.profitMargin || ((price - (price * 0.6)) / price * 100).toFixed(1);
// // // //         const potentialLostSales = (salesVelocity * leadTime * price).toFixed(2);
// // // //         const stockoutRisk = Math.min(100, Math.max(0, Math.round(
// // // //           (1 - (quantity / stockLevel)) * 100
// // // //         )));

// // // //         return {
// // // //           ...product,
// // // //           salesVelocity: salesVelocity.toFixed(1),
// // // //           daysToEmpty,
// // // //           status,
// // // //           restockCost,
// // // //           leadTime,
// // // //           profitMargin,
// // // //           potentialLostSales,
// // // //           stockoutRisk,
// // // //           stock_level: stockLevel,
// // // //           quantity: quantity,
// // // //           price: price,
// // // //           supplier: product.supplier || "Unknown",
// // // //           last_restocked: product.last_restocked || "N/A"
// // // //         };
// // // //       }).filter(p => p.quantity < p.stock_level * 1.5);

// // // //       setLowStockProducts(enhancedLowStock);
// // // //       setSuppliers([...new Set(enhancedLowStock.map(p => p.supplier))]);

// // // //       const criticalCount = enhancedLowStock.filter(p => p.status === "critical").length;
// // // //       const warningCount = enhancedLowStock.filter(p => p.status === "warning").length;
// // // //       const totalValue = enhancedLowStock.reduce((sum, p) => sum + parseFloat(p.restockCost), 0);
// // // //       const avgDays = enhancedLowStock.length > 0 ? 
// // // //         Math.round(enhancedLowStock.reduce((sum, p) => sum + p.daysToEmpty, 0) / enhancedLowStock.length) : 0;
// // // //       const potentialLostSales = enhancedLowStock.reduce((sum, p) => sum + parseFloat(p.potentialLostSales), 0);
// // // //       const avgStockoutRisk = enhancedLowStock.length > 0 ? 
// // // //         Math.round(enhancedLowStock.reduce((sum, p) => sum + p.stockoutRisk, 0) / enhancedLowStock.length) : 0;

// // // //       setStats({
// // // //         criticalCount,
// // // //         warningCount,
// // // //         totalValue: totalValue.toFixed(2),
// // // //         avgDaysToEmpty: avgDays,
// // // //         potentialLostSales: potentialLostSales.toFixed(2),
// // // //         stockoutRisk: avgStockoutRisk
// // // //       });
// // // //     } catch (err) {
// // // //       console.error("Error fetching products:", err);
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   const fetchRestockHistory = async () => {
// // // //     try {
// // // //       const response = await fetch(`${API_URL}/restock-history?storeId=${storeId}`);
// // // //       if (!response.ok) throw new Error(`Failed to fetch restock history: ${response.statusText}`);
// // // //       const history = await response.json();
      
// // // //       const formattedHistory = history.map(entry => ({
// // // //         id: entry._id,
// // // //         product_name: entry.product_name || "Unknown Product",
// // // //         date: entry.date.split('T')[0] || "N/A",
// // // //         quantity: parseInt(entry.quantity) || 0,
// // // //         cost: parseFloat(entry.cost).toFixed(2) || "0.00",
// // // //         supplier: entry.supplier || "Unknown",
// // // //         status: entry.status || "Completed"
// // // //       }));
      
// // // //       setRestockHistory(formattedHistory);
// // // //       console.log("Fetched Restock History:", formattedHistory); // Debug log
// // // //     } catch (error) {
// // // //       console.error("Error fetching restock history:", error);
// // // //       setRestockHistory([]);
// // // //     }
// // // //   };

// // // //   const filteredProducts = useMemo(() => {
// // // //     return lowStockProducts.filter(product => {
// // // //       return (filterType === "all" || product.status === filterType) &&
// // // //              (selectedSupplier === "all" || product.supplier === selectedSupplier);
// // // //     });
// // // //   }, [lowStockProducts, filterType, selectedSupplier]);

// // // //   const sortedProducts = useMemo(() => {
// // // //     return [...filteredProducts].sort((a, b) => {
// // // //       switch (sortBy) {
// // // //         case "critical":
// // // //           if (a.status === "critical" && b.status !== "critical") return -1;
// // // //           if (a.status !== "critical" && b.status === "critical") return 1;
// // // //           return a.daysToEmpty - b.daysToEmpty;
// // // //         case "name":
// // // //           return (a.product_name || "").localeCompare(b.product_name || "");
// // // //         case "supplier":
// // // //           return (a.supplier || "").localeCompare(b.supplier || "");
// // // //         case "days":
// // // //           return a.daysToEmpty - b.daysToEmpty;
// // // //         case "profit":
// // // //           return parseFloat(b.profitMargin || 0) - parseFloat(a.profitMargin || 0);
// // // //         case "risk":
// // // //           return (b.stockoutRisk || 0) - (a.stockoutRisk || 0);
// // // //         default:
// // // //           return 0;
// // // //       }
// // // //     });
// // // //   }, [filteredProducts, sortBy]);

// // // //   const inventoryHealthScore = useMemo(() => {
// // // //     if (allProducts.length === 0) return 100;
// // // //     const totalProducts = allProducts.length;
// // // //     const criticalPercentage = (stats.criticalCount / totalProducts) * 100;
// // // //     const warningPercentage = (stats.warningCount / totalProducts) * 100;
// // // //     const baseScore = 100 - (criticalPercentage * 2 + warningPercentage * 1);
// // // //     console.log("Inventory Health - Total:", totalProducts, "Critical:", stats.criticalCount, "Warning:", stats.warningCount, "Score:", baseScore);
// // // //     return Math.max(0, Math.round(baseScore));
// // // //   }, [allProducts, stats]);

// // // //   const stockoutRiskDistribution = useMemo(() => {
// // // //     const ranges = { "0-25": 0, "26-50": 0, "51-75": 0, "76-100": 0 };
// // // //     lowStockProducts.forEach(p => {
// // // //       const risk = p.stockoutRisk || 0;
// // // //       if (risk <= 25) ranges["0-25"]++;
// // // //       else if (risk <= 50) ranges["26-50"]++;
// // // //       else if (risk <= 75) ranges["51-75"]++;
// // // //       else ranges["76-100"]++;
// // // //     });
// // // //     return ranges;
// // // //   }, [lowStockProducts]);

// // // //   const getStatusColor = (status) => {
// // // //     switch (status) {
// // // //       case "critical": return "bg-red-100 border-red-300 text-red-900";
// // // //       case "warning": return "bg-yellow-100 border-yellow-300 text-yellow-900";
// // // //       default: return "bg-green-100 border-green-300 text-green-900";
// // // //     }
// // // //   };

// // // //   const getStatusBadge = (status) => {
// // // //     switch (status) {
// // // //       case "critical": return "bg-red-200 text-red-900";
// // // //       case "warning": return "bg-yellow-200 text-yellow-900";
// // // //       default: return "bg-green-200 text-green-900";
// // // //     }
// // // //   };

// // // //   const toggleExpanded = (id) => {
// // // //     setExpandedItem(expandedItem === id ? null : id);
// // // //   };

// // // //   const openRestockModal = (product) => {
// // // //     setSelectedProduct(product);
// // // //     setRestockQuantity(product.stock_level - product.quantity);
// // // //     setShowRestockModal(true);
// // // //   };

// // // //   const handleRestock = async (productId, quantity) => {
// // // //     if (!quantity || quantity <= 0) {
// // // //       alert("Please enter a valid restock quantity.");
// // // //       return;
// // // //     }

// // // //     try {
// // // //       setRestockInProgress(prev => [...prev, productId]);
// // // //       const response = await fetch(`${API_URL}/products/${productId}/restock?storeId=${storeId}`, {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({ quantity: parseInt(quantity) })
// // // //       });
      
// // // //       if (!response.ok) {
// // // //         const errorData = await response.json();
// // // //         throw new Error(errorData.error || "Restock failed");
// // // //       }
      
// // // //       const data = await response.json();
      
// // // //       // Update low stock products immediately
// // // //       setLowStockProducts(prev => prev.map(product => 
// // // //         product._id === productId ? { 
// // // //           ...product, 
// // // //           quantity: parseInt(data.new_quantity),
// // // //           last_restocked: new Date().toISOString().split('T')[0],
// // // //           status: parseInt(data.new_quantity) <= product.stock_level ? "critical" :
// // // //                   parseInt(data.new_quantity) <= product.stock_level * 1.2 ? "warning" : "normal"
// // // //         } : product
// // // //       ).filter(p => p.quantity < p.stock_level * 1.5));

// // // //       // Update all products for inventory health
// // // //       setAllProducts(prev => prev.map(product => 
// // // //         product._id === productId ? { 
// // // //           ...product, 
// // // //           quantity: parseInt(data.new_quantity),
// // // //           last_restocked: new Date().toISOString().split('T')[0]
// // // //         } : product
// // // //       ));

// // // //       // Fetch updated stats and history
// // // //       await Promise.all([fetchLowStockProducts(), fetchRestockHistory()]);
      
// // // //       setRestockInProgress(prev => prev.filter(id => id !== productId));
// // // //       setShowRestockModal(false);
// // // //     } catch (error) {
// // // //       console.error("Restock error:", error);
// // // //       alert(`Restock failed: ${error.message}`);
// // // //       setRestockInProgress(prev => prev.filter(id => id !== productId));
// // // //     }
// // // //   };

// // // //   const exportToCSV = () => {
// // // //     const headers = ["Product Name", "Current Stock", "Stock Level", "Status", "Days to Empty", "Supplier", "Restock Cost"];
// // // //     const csvData = sortedProducts.map(p => [
// // // //       p.product_name,
// // // //       p.quantity,
// // // //       p.stock_level,
// // // //       p.status,
// // // //       p.daysToEmpty,
// // // //       p.supplier,
// // // //       p.restockCost
// // // //     ]);
    
// // // //     const csvContent = [headers.join(","), ...csvData.map(row => row.join(","))].join("\n");
// // // //     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
// // // //     const url = URL.createObjectURL(blob);
// // // //     const link = document.createElement("a");
// // // //     link.setAttribute("href", url);
// // // //     link.setAttribute("download", "restock_alerts.csv");
// // // //     document.body.appendChild(link);
// // // //     link.click();
// // // //     document.body.removeChild(link);
// // // //   };

// // // //   return (
// // // //     <div className="p-6 max-w-7xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
// // // //       <motion.div
// // // //         initial={{ opacity: 0, y: -20 }}
// // // //         animate={{ opacity: 1, y: 0 }}
// // // //         transition={{ duration: 0.5 }}
// // // //         className="flex flex-col md:flex-row md:items-center md:justify-between mb-8"
// // // //       >
// // // //         <div>
// // // //           <h1 className="text-3xl font-semibold mb-2 text-gray-900 flex items-center">
// // // //             <Bell className="mr-2 text-red-600" /> 
// // // //             Restock Alerts Dashboard
// // // //           </h1>
// // // //           <p className="text-gray-600">Monitor and manage your inventory efficiently</p>
// // // //         </div>
        
// // // //         <div className="mt-4 md:mt-0 flex items-center space-x-3">
// // // //           <button
// // // //             className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
// // // //               view === "list" ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
// // // //             }`}
// // // //             onClick={() => setView("list")}
// // // //           >
// // // //             List View
// // // //           </button>
// // // //           <button
// // // //             className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
// // // //               view === "analytics" ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
// // // //             }`}
// // // //             onClick={() => setView("analytics")}
// // // //           >
// // // //             Analytics
// // // //           </button>
// // // //           <button
// // // //             className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-all duration-200 flex items-center shadow-md"
// // // //             onClick={exportToCSV}
// // // //           >
// // // //             <DownloadCloud className="mr-2 h-4 w-4" /> Export
// // // //           </button>
// // // //         </div>
// // // //       </motion.div>

// // // //       <motion.div 
// // // //         className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8"
// // // //         initial={{ opacity: 0 }}
// // // //         animate={{ opacity: 1 }}
// // // //         transition={{ duration: 0.6 }}
// // // //       >
// // // //         <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-red-600 hover:shadow-xl transition-shadow duration-300">
// // // //           <div className="flex justify-between items-center">
// // // //             <div>
// // // //               <p className="text-sm text-gray-600">Critical Items</p>
// // // //               <p className="text-2xl font-bold text-gray-900">{stats.criticalCount}</p>
// // // //             </div>
// // // //             <AlertTriangle className="h-10 w-10 text-red-600 opacity-80" />
// // // //           </div>
// // // //         </div>
        
// // // //         <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-yellow-600 hover:shadow-xl transition-shadow duration-300">
// // // //           <div className="flex justify-between items-center">
// // // //             <div>
// // // //               <p className="text-sm text-gray-600">Warning Items</p>
// // // //               <p className="text-2xl font-bold text-gray-900">{stats.warningCount}</p>
// // // //             </div>
// // // //             <Bell className="h-10 w-10 text-yellow-600 opacity-80" />
// // // //           </div>
// // // //         </div>
        
// // // //         <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-blue-600 hover:shadow-xl transition-shadow duration-300">
// // // //           <div className="flex justify-between items-center">
// // // //             <div>
// // // //               <p className="text-sm text-gray-600">Avg. Days to Empty</p>
// // // //               <p className="text-2xl font-bold text-gray-900">{stats.avgDaysToEmpty}</p>
// // // //             </div>
// // // //             <Clock className="h-10 w-10 text-blue-600 opacity-80" />
// // // //           </div>
// // // //         </div>
        
// // // //         <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-green-600 hover:shadow-xl transition-shadow duration-300">
// // // //           <div className="flex justify-between items-center">
// // // //             <div>
// // // //               <p className="text-sm text-gray-600">Restock Value</p>
// // // //               <p className="text-2xl font-bold text-gray-900">${stats.totalValue}</p>
// // // //             </div>
// // // //             <DollarSign className="h-10 w-10 text-green-600 opacity-80" />
// // // //           </div>
// // // //         </div>

// // // //         <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-purple-600 hover:shadow-xl transition-shadow duration-300">
// // // //           <div className="flex justify-between items-center">
// // // //             <div>
// // // //               <p className="text-sm text-gray-600">Potential Lost Sales</p>
// // // //               <p className="text-2xl font-bold text-gray-900">${stats.potentialLostSales}</p>
// // // //             </div>
// // // //             <TrendingDown className="h-10 w-10 text-purple-600 opacity-80" />
// // // //           </div>
// // // //         </div>
        
// // // //         <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-indigo-600 hover:shadow-xl transition-shadow duration-300">
// // // //           <div className="flex justify-between items-center">
// // // //             <div>
// // // //               <p className="text-sm text-gray-600">Inventory Health</p>
// // // //               <div className="flex items-center">
// // // //                 <p className="text-2xl font-bold text-gray-900">{inventoryHealthScore}</p>
// // // //                 <span className="text-sm ml-1 text-gray-500">/100</span>
// // // //               </div>
// // // //             </div>
// // // //             <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
// // // //               <div 
// // // //                 className="h-10 w-10 rounded-full" 
// // // //                 style={{ 
// // // //                   background: `conic-gradient(${inventoryHealthScore > 80 ? '#10B981' : inventoryHealthScore > 50 ? '#FBBF24' : '#EF4444'} ${inventoryHealthScore}%, #E5E7EB 0)` 
// // // //                 }} 
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </motion.div>

// // // //       <div className="bg-white rounded-xl shadow-lg p-5 mb-8">
// // // //         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
// // // //           <div className="flex items-center space-x-3">
// // // //             <Filter className="text-gray-500" />
// // // //             <span className="text-gray-800 font-medium">Filter:</span>
            
// // // //             <div className="flex space-x-2">
// // // //               <button
// // // //                 className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
// // // //                   filterType === "all" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// // // //                 }`}
// // // //                 onClick={() => setFilterType("all")}
// // // //               >
// // // //                 All
// // // //               </button>
// // // //               <button
// // // //                 className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
// // // //                   filterType === "critical" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// // // //                 }`}
// // // //                 onClick={() => setFilterType("critical")}
// // // //               >
// // // //                 Critical
// // // //               </button>
// // // //               <button
// // // //                 className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
// // // //                   filterType === "warning" ? "bg-yellow-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// // // //                 }`}
// // // //                 onClick={() => setFilterType("warning")}
// // // //               >
// // // //                 Warning
// // // //               </button>
// // // //             </div>
// // // //           </div>
          
// // // //           <div className="flex items-center space-x-4">
// // // //             <div className="relative">
// // // //               <select
// // // //                 className="appearance-none bg-white border border-gray-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
// // // //                 value={selectedSupplier}
// // // //                 onChange={(e) => setSelectedSupplier(e.target.value)}
// // // //               >
// // // //                 <option value="all">All Suppliers</option>
// // // //                 {suppliers.map(supplier => (
// // // //                   <option key={supplier} value={supplier}>{supplier}</option>
// // // //                 ))}
// // // //               </select>
// // // //               <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
// // // //             </div>
            
// // // //             <div className="relative">
// // // //               <select
// // // //                 className="appearance-none bg-white border border-gray-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
// // // //                 value={sortBy}
// // // //                 onChange={(e) => setSortBy(e.target.value)}
// // // //               >
// // // //                 <option value="critical">Sort by Priority</option>
// // // //                 <option value="days">Sort by Days to Empty</option>
// // // //                 <option value="name">Sort by Name</option>
// // // //                 <option value="supplier">Sort by Supplier</option>
// // // //                 <option value="profit">Sort by Profit Margin</option>
// // // //                 <option value="risk">Sort by Stockout Risk</option>
// // // //               </select>
// // // //               <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
// // // //             </div>
            
// // // //             <div className="relative">
// // // //               <select
// // // //                 className="appearance-none bg-white border border-gray-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
// // // //                 value={dateRange}
// // // //                 onChange={(e) => setDateRange(e.target.value)}
// // // //               >
// // // //                 <option value="7">Last 7 Days</option>
// // // //                 <option value="30">Last 30 Days</option>
// // // //                 <option value="90">Last 90 Days</option>
// // // //               </select>
// // // //               <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
// // // //             </div>
            
// // // //             <button 
// // // //               className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-all duration-200 shadow-md"
// // // //               onClick={fetchLowStockProducts}
// // // //             >
// // // //               <RefreshCw className="h-5 w-5" />
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {isLoading ? (
// // // //         <div className="flex justify-center items-center py-20">
// // // //           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
// // // //         </div>
// // // //       ) : (
// // // //         <>
// // // //           {view === "list" ? (
// // // //             sortedProducts.length > 0 ? (
// // // //               <div className="space-y-6">
// // // //                 {sortedProducts.map((product) => (
// // // //                   <motion.div 
// // // //                     key={product._id}
// // // //                     initial={{ x: -20, opacity: 0 }}
// // // //                     animate={{ x: 0, opacity: 1 }}
// // // //                     className={`border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${
// // // //                       expandedItem === product._id ? "bg-gray-50" : "bg-white"
// // // //                     }`}
// // // //                   >
// // // //                     <div className="flex flex-col md:flex-row md:items-center md:justify-between p-5">
// // // //                       <div className="flex items-start md:items-center space-x-4">
// // // //                         <div className={`p-3 rounded-lg ${getStatusColor(product.status)}`}>
// // // //                           {product.status === "critical" ? 
// // // //                             <AlertTriangle className="h-6 w-6" /> : 
// // // //                             <Bell className="h-6 w-6" />}
// // // //                         </div>
                        
// // // //                         <div>
// // // //                           <div className="flex items-center flex-wrap gap-2">
// // // //                             <h3 className="font-semibold text-lg text-gray-900">{product.product_name}</h3>
// // // //                             <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadge(product.status)} font-medium`}>
// // // //                               {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
// // // //                             </span>
// // // //                           </div>
// // // //                           <div className="flex items-center mt-2 text-sm text-gray-700">
// // // //                             <span className={product.status === "critical" ? "font-bold text-red-700" : "font-medium"}>
// // // //                               {product.quantity}
// // // //                             </span>
// // // //                             <span className="mx-1">/</span>
// // // //                             <span>{product.stock_level} units</span>
// // // //                             {product.daysToEmpty <= 7 && (
// // // //                               <span className="ml-3 text-red-700 font-medium">
// // // //                                 {product.daysToEmpty === 0 ? "Out of stock!" : `${product.daysToEmpty} days left`}
// // // //                               </span>
// // // //                             )}
// // // //                             <span className="ml-4 text-gray-600">
// // // //                               ${product.price} | Margin: {product.profitMargin}%
// // // //                             </span>
// // // //                           </div>
// // // //                         </div>
// // // //                       </div>
                      
// // // //                       <div className="mt-4 md:mt-0 flex items-center space-x-3">
// // // //                         <button
// // // //                           className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors duration-200"
// // // //                           onClick={() => toggleExpanded(product._id)}
// // // //                         >
// // // //                           {expandedItem === product._id ? "Hide Details" : "Show Details"}
// // // //                           <ChevronDown className={`ml-1 h-5 w-5 transition-transform duration-200 ${
// // // //                             expandedItem === product._id ? "transform rotate-180" : ""
// // // //                           }`} />
// // // //                         </button>
                        
// // // //                         {restockInProgress.includes(product._id) ? (
// // // //                           <button className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg text-sm font-medium flex items-center cursor-not-allowed shadow-sm">
// // // //                             <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-gray-700 mr-2"></div>
// // // //                             Restocking...
// // // //                           </button>
// // // //                         ) : (
// // // //                           <button 
// // // //                             className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-medium flex items-center transition-all duration-200 shadow-md"
// // // //                             onClick={() => openRestockModal(product)}
// // // //                           >
// // // //                             <Truck className="mr-2 h-5 w-5" /> Restock Now
// // // //                           </button>
// // // //                         )}
// // // //                       </div>
// // // //                     </div>
                    
// // // //                     <AnimatePresence>
// // // //                       {expandedItem === product._id && (
// // // //                         <motion.div
// // // //                           initial={{ height: 0, opacity: 0 }}
// // // //                           animate={{ height: "auto", opacity: 1 }}
// // // //                           exit={{ height: 0, opacity: 0 }}
// // // //                           transition={{ duration: 0.3 }}
// // // //                           className="overflow-hidden"
// // // //                         >
// // // //                           <div className="p-5 pt-0 border-t border-gray-200">
// // // //                             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// // // //                               <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
// // // //                                 <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
// // // //                                   <BarChart2 className="mr-2 h-5 w-5 text-gray-600" /> Usage Metrics
// // // //                                 </h4>
// // // //                                 <p className="text-sm text-gray-800"><span className="font-medium">Sales Velocity:</span> {product.salesVelocity} units/day</p>
// // // //                                 <p className="text-sm text-gray-800"><span className="font-medium">Days to Empty:</span> {product.daysToEmpty}</p>
// // // //                                 <div className="mt-2 h-2 bg-gray-300 rounded-full overflow-hidden">
// // // //                                   <div 
// // // //                                     className={`h-full ${
// // // //                                       product.daysToEmpty < 3 ? "bg-red-600" : 
// // // //                                       product.daysToEmpty < 7 ? "bg-yellow-600" : "bg-green-600"
// // // //                                     }`}
// // // //                                     style={{ width: `${Math.min(100, (product.daysToEmpty / 30) * 100)}%` }}
// // // //                                   ></div>
// // // //                                 </div>
// // // //                               </div>
                              
// // // //                               <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
// // // //                                 <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
// // // //                                   <Truck className="mr-2 h-5 w-5 text-gray-600" /> Supplier Information
// // // //                                 </h4>
// // // //                                 <p className="text-sm text-gray-800"><span className="font-medium">Supplier:</span> {product.supplier}</p>
// // // //                                 <p className="text-sm text-gray-800"><span className="font-medium">Lead Time:</span> {product.leadTime} days</p>
// // // //                               </div>
                              
// // // //                               <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
// // // //                                 <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
// // // //                                   <Calendar className="mr-2 h-5 w-5 text-gray-600" /> Restock Details
// // // //                                 </h4>
// // // //                                 <p className="text-sm text-gray-800"><span className="font-medium">Last Restocked:</span> {product.last_restocked}</p>
// // // //                                 <p className="text-sm text-gray-800"><span className="font-medium">Restock Cost:</span> ${product.restockCost}</p>
// // // //                                 <p className="text-sm text-gray-800"><span className="font-medium">Potential Lost Sales:</span> ${product.potentialLostSales}</p>
// // // //                               </div>
// // // //                             </div>
// // // //                           </div>
// // // //                         </motion.div>
// // // //                       )}
// // // //                     </AnimatePresence>
// // // //                   </motion.div>
// // // //                 ))}
// // // //               </div>
// // // //             ) : (
// // // //               <div className="bg-white rounded-xl shadow-lg p-8 text-center">
// // // //                 <CheckCircle className="mx-auto h-14 w-14 text-green-600" />
// // // //                 <h3 className="mt-3 text-xl font-semibold text-gray-900">All products are well-stocked</h3>
// // // //                 <p className="mt-2 text-sm text-gray-600">No items require immediate attention</p>
// // // //               </div>
// // // //             )
// // // //           ) : (
// // // //             <div className="bg-white rounded-xl shadow-lg p-6">
// // // //               <h2 className="text-2xl font-semibold mb-5 flex items-center text-gray-900">
// // // //                 <PieChart className="mr-2 h-6 w-6 text-blue-600" />
// // // //                 Inventory Analytics
// // // //               </h2>
              
// // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //                 <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
// // // //                   <h3 className="text-lg font-semibold mb-3 text-gray-800">Stockout Risk Distribution</h3>
// // // //                   <div className="h-64 flex items-end justify-between">
// // // //                     {Object.entries(stockoutRiskDistribution).map(([range, count]) => (
// // // //                       <div key={range} className="flex-1 flex flex-col items-center">
// // // //                         <div 
// // // //                           className="bg-red-600 w-3/4 rounded-t"
// // // //                           style={{ 
// // // //                             height: `${(count / Math.max(...Object.values(stockoutRiskDistribution), 1)) * 80}%`,
// // // //                             minHeight: count > 0 ? '12px' : '0px'
// // // //                           }}
// // // //                         />
// // // //                         <span className="text-sm mt-2 text-gray-700">{range}%</span>
// // // //                         <span className="text-xs text-gray-500">{count}</span>
// // // //                       </div>
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>
                
// // // //                 <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
// // // //                   <h3 className="text-lg font-semibold mb-3 text-gray-800">Restock History</h3>
// // // //                   {restockHistory.length === 0 ? (
// // // //                     <p className="text-sm text-gray-600">No restock history available yet</p>
// // // //                   ) : (
// // // //                     <div className="h-64 overflow-y-auto">
// // // //                       <table className="w-full text-sm">
// // // //                         <thead className="bg-gray-200 sticky top-0">
// // // //                           <tr>
// // // //                             <th className="p-3 text-left text-gray-800 font-semibold">Date</th>
// // // //                             <th className="p-3 text-left text-gray-800 font-semibold">Product</th>
// // // //                             <th className="p-3 text-right text-gray-800 font-semibold">Qty</th>
// // // //                             <th className="p-3 text-right text-gray-800 font-semibold">Cost</th>
// // // //                           </tr>
// // // //                         </thead>
// // // //                         <tbody>
// // // //                           {restockHistory.map((entry) => (
// // // //                             <tr key={entry.id} className="border-b hover:bg-gray-100 transition-colors duration-200">
// // // //                               <td className="p-3 text-gray-700">{entry.date}</td>
// // // //                               <td className="p-3 text-gray-700">{entry.product_name}</td>
// // // //                               <td className="p-3 text-right text-gray-700">{entry.quantity}</td>
// // // //                               <td className="p-3 text-right text-gray-700">${entry.cost}</td>
// // // //                             </tr>
// // // //                           ))}
// // // //                         </tbody>
// // // //                       </table>
// // // //                     </div>
// // // //                   )}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //         </>
// // // //       )}

// // // //       <AnimatePresence>
// // // //         {showRestockModal && selectedProduct && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             exit={{ opacity: 0 }}
// // // //             className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-6"
// // // //             onClick={() => setShowRestockModal(false)}
// // // //           >
// // // //             <motion.div
// // // //               initial={{ y: -30, opacity: 0 }}
// // // //               animate={{ y: 0, opacity: 1 }}
// // // //               exit={{ y: -30, opacity: 0 }}
// // // //               transition={{ duration: 0.3 }}
// // // //               className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg"
// // // //               onClick={(e) => e.stopPropagation()}
// // // //             >
// // // //               <h2 className="text-2xl font-semibold mb-5 text-gray-900">Restock {selectedProduct.product_name}</h2>
// // // //               <div className="space-y-5">
// // // //                 <div>
// // // //                   <label className="block text-sm font-medium text-gray-700 mb-2">Quantity to Restock</label>
// // // //                   <input
// // // //                     type="number"
// // // //                     min="1"
// // // //                     value={restockQuantity}
// // // //                     onChange={(e) => setRestockQuantity(parseInt(e.target.value) || 0)}
// // // //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
// // // //                   />
// // // //                 </div>
// // // //                 <div className="text-sm text-gray-600 space-y-1">
// // // //                   <p><span className="font-medium">Current Stock:</span> {selectedProduct.quantity}</p>
// // // //                   <p><span className="font-medium">Stock Level:</span> {selectedProduct.stock_level}</p>
// // // //                   <p><span className="font-medium">Estimated Cost:</span> ${(restockQuantity * selectedProduct.price).toFixed(2)}</p>
// // // //                 </div>
// // // //                 <div className="flex justify-end space-x-3">
// // // //                   <button
// // // //                     className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm"
// // // //                     onClick={() => setShowRestockModal(false)}
// // // //                   >
// // // //                     Cancel
// // // //                   </button>
// // // //                   <button
// // // //                     className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-md flex items-center"
// // // //                     onClick={() => handleRestock(selectedProduct._id, restockQuantity)}
// // // //                     disabled={restockInProgress.includes(selectedProduct._id)}
// // // //                   >
// // // //                     {restockInProgress.includes(selectedProduct._id) ? (
// // // //                       <>
// // // //                         <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white mr-2"></div>
// // // //                         Processing...
// // // //                       </>
// // // //                     ) : (
// // // //                       "Confirm Restock"
// // // //                     )}
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default RestockAlerts;
// // // import React, { useState, useEffect, useContext, useMemo } from "react";
// // // import { StoreContext } from "./StoreContext";
// // // import { 
// // //   Bell, AlertTriangle, TrendingDown, Clock, Truck, DollarSign, 
// // //   Calendar, CheckCircle, BarChart2, RefreshCw, Filter, ChevronDown, 
// // //   DownloadCloud, PieChart
// // // } from "lucide-react";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // const RestockAlerts = () => {
// // //   const { storeId } = useContext(StoreContext);
// // //   const [allProducts, setAllProducts] = useState([]);
// // //   const [lowStockProducts, setLowStockProducts] = useState([]);
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [restockInProgress, setRestockInProgress] = useState([]);
// // //   const [sortBy, setSortBy] = useState("critical");
// // //   const [filterType, setFilterType] = useState("all");
// // //   const [expandedItem, setExpandedItem] = useState(null);
// // //   const [selectedSupplier, setSelectedSupplier] = useState("all");
// // //   const [suppliers, setSuppliers] = useState([]);
// // //   const [dateRange, setDateRange] = useState("30");
// // //   const [view, setView] = useState("list");
// // //   const [restockHistory, setRestockHistory] = useState([]);
// // //   const [showRestockModal, setShowRestockModal] = useState(false);
// // //   const [selectedProduct, setSelectedProduct] = useState(null);
// // //   const [restockQuantity, setRestockQuantity] = useState(0);
// // //   const [stats, setStats] = useState({
// // //     criticalCount: 0,
// // //     warningCount: 0,
// // //     totalValue: 0,
// // //     avgDaysToEmpty: 0,
// // //     potentialLostSales: 0,
// // //     stockoutRisk: 0
// // //   });
// // //   const API_URL = "http://127.0.0.1:5000";

// // //   useEffect(() => {
// // //     if (storeId) {
// // //       fetchLowStockProducts();
// // //       fetchRestockHistory();
// // //     }
// // //   }, [storeId, dateRange]);

// // //   const fetchLowStockProducts = async () => {
// // //     setIsLoading(true);
// // //     try {
// // //       const response = await fetch(`${API_URL}/products?storeId=${storeId}`);
// // //       const data = await response.json();

// // //       setAllProducts(data);

// // //       const enhancedLowStock = data.map(product => {
// // //         const stockLevel = parseInt(product.stock_level) || 100;
// // //         const quantity = parseInt(product.quantity) || 0;
// // //         const price = parseFloat(product.price) || 0; // Default to 0 if price is missing
// // //         const salesVelocity = parseFloat(product.salesVelocity) || (Math.random() * 5 + 0.5);
        
// // //         const daysToEmpty = quantity > 0 ? Math.ceil(quantity / salesVelocity) : 0;
// // //         const warningThreshold = stockLevel * 1.2;
// // //         const criticalThreshold = stockLevel;
        
// // //         const status = quantity <= criticalThreshold ? "critical" :
// // //                       quantity <= warningThreshold ? "warning" : "normal";
        
// // //         const restockCost = ((stockLevel - quantity) * price).toFixed(2);
// // //         const leadTime = product.leadTime || Math.floor(Math.random() * 14) + 3;
// // //         const profitMargin = product.profitMargin || ((price - (price * 0.6)) / price * 100).toFixed(1);
// // //         const potentialLostSales = (salesVelocity * leadTime * price).toFixed(2);
// // //         const stockoutRisk = Math.min(100, Math.max(0, Math.round(
// // //           (1 - (quantity / stockLevel)) * 100
// // //         )));

// // //         return {
// // //           ...product,
// // //           salesVelocity: salesVelocity.toFixed(1),
// // //           daysToEmpty,
// // //           status,
// // //           restockCost,
// // //           leadTime,
// // //           profitMargin,
// // //           potentialLostSales,
// // //           stockoutRisk,
// // //           stock_level: stockLevel,
// // //           quantity: quantity,
// // //           price: price,
// // //           supplier: product.supplier || "Unknown",
// // //           last_restocked: product.last_restocked || "N/A"
// // //         };
// // //       }).filter(p => p.quantity < p.stock_level * 1.5);

// // //       setLowStockProducts(enhancedLowStock);
// // //       setSuppliers([...new Set(enhancedLowStock.map(p => p.supplier))]);

// // //       const criticalCount = enhancedLowStock.filter(p => p.status === "critical").length;
// // //       const warningCount = enhancedLowStock.filter(p => p.status === "warning").length;
// // //       const totalValue = enhancedLowStock.reduce((sum, p) => sum + parseFloat(p.restockCost), 0);
// // //       const avgDays = enhancedLowStock.length > 0 ? 
// // //         Math.round(enhancedLowStock.reduce((sum, p) => sum + p.daysToEmpty, 0) / enhancedLowStock.length) : 0;
// // //       const potentialLostSales = enhancedLowStock.reduce((sum, p) => sum + parseFloat(p.potentialLostSales), 0);
// // //       const avgStockoutRisk = enhancedLowStock.length > 0 ? 
// // //         Math.round(enhancedLowStock.reduce((sum, p) => sum + p.stockoutRisk, 0) / enhancedLowStock.length) : 0;

// // //       setStats({
// // //         criticalCount,
// // //         warningCount,
// // //         totalValue: totalValue.toFixed(2),
// // //         avgDaysToEmpty: avgDays,
// // //         potentialLostSales: potentialLostSales.toFixed(2),
// // //         stockoutRisk: avgStockoutRisk
// // //       });
// // //     } catch (err) {
// // //       console.error("Error fetching products:", err);
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   const fetchRestockHistory = async () => {
// // //     try {
// // //       const response = await fetch(`${API_URL}/restock-history?storeId=${storeId}`);
// // //       if (!response.ok) throw new Error(`Failed to fetch restock history: ${response.statusText}`);
// // //       const history = await response.json();
      
// // //       const formattedHistory = history.map(entry => ({
// // //         id: entry._id,
// // //         product_name: entry.product_name || "Unknown Product",
// // //         date: entry.date.split('T')[0] || "N/A",
// // //         quantity: parseInt(entry.quantity) || 0,
// // //         cost: parseFloat(entry.cost).toFixed(2) || "0.00",
// // //         supplier: entry.supplier || "Unknown",
// // //         status: entry.status || "Completed"
// // //       }));
      
// // //       setRestockHistory(formattedHistory);
// // //       console.log("Fetched Restock History:", formattedHistory);
// // //     } catch (error) {
// // //       console.error("Error fetching restock history:", error);
// // //       setRestockHistory([]);
// // //     }
// // //   };

// // //   const filteredProducts = useMemo(() => {
// // //     return lowStockProducts.filter(product => {
// // //       return (filterType === "all" || product.status === filterType) &&
// // //              (selectedSupplier === "all" || product.supplier === selectedSupplier);
// // //     });
// // //   }, [lowStockProducts, filterType, selectedSupplier]);

// // //   const sortedProducts = useMemo(() => {
// // //     return [...filteredProducts].sort((a, b) => {
// // //       switch (sortBy) {
// // //         case "critical":
// // //           if (a.status === "critical" && b.status !== "critical") return -1;
// // //           if (a.status !== "critical" && b.status === "critical") return 1;
// // //           return a.daysToEmpty - b.daysToEmpty;
// // //         case "name":
// // //           return (a.product_name || "").localeCompare(b.product_name || "");
// // //         case "supplier":
// // //           return (a.supplier || "").localeCompare(b.supplier || "");
// // //         case "days":
// // //           return a.daysToEmpty - b.daysToEmpty;
// // //         case "profit":
// // //           return parseFloat(b.profitMargin || 0) - parseFloat(a.profitMargin || 0);
// // //         case "risk":
// // //           return (b.stockoutRisk || 0) - (a.stockoutRisk || 0);
// // //         default:
// // //           return 0;
// // //       }
// // //     });
// // //   }, [filteredProducts, sortBy]);

// // //   const inventoryHealthScore = useMemo(() => {
// // //     if (allProducts.length === 0) return 100;
// // //     const totalProducts = allProducts.length;
// // //     const criticalPercentage = (stats.criticalCount / totalProducts) * 100;
// // //     const warningPercentage = (stats.warningCount / totalProducts) * 100;
// // //     const baseScore = 100 - (criticalPercentage * 2 + warningPercentage * 1);
// // //     console.log("Inventory Health - Total:", totalProducts, "Critical:", stats.criticalCount, "Warning:", stats.warningCount, "Score:", baseScore);
// // //     return Math.max(0, Math.round(baseScore));
// // //   }, [allProducts, stats]);

// // //   const stockoutRiskDistribution = useMemo(() => {
// // //     const ranges = { "0-25": 0, "26-50": 0, "51-75": 0, "76-100": 0 };
// // //     lowStockProducts.forEach(p => {
// // //       const risk = p.stockoutRisk || 0;
// // //       if (risk <= 25) ranges["0-25"]++;
// // //       else if (risk <= 50) ranges["26-50"]++;
// // //       else if (risk <= 75) ranges["51-75"]++;
// // //       else ranges["76-100"]++;
// // //     });
// // //     return ranges;
// // //   }, [lowStockProducts]);

// // //   const getStatusColor = (status) => {
// // //     switch (status) {
// // //       case "critical": return "bg-red-100 border-red-300 text-red-900";
// // //       case "warning": return "bg-yellow-100 border-yellow-300 text-yellow-900";
// // //       default: return "bg-green-100 border-green-300 text-green-900";
// // //     }
// // //   };

// // //   const getStatusBadge = (status) => {
// // //     switch (status) {
// // //       case "critical": return "bg-red-200 text-red-900";
// // //       case "warning": return "bg-yellow-200 text-yellow-900";
// // //       default: return "bg-green-200 text-green-900";
// // //     }
// // //   };

// // //   const toggleExpanded = (id) => {
// // //     setExpandedItem(expandedItem === id ? null : id);
// // //   };

// // //   const openRestockModal = (product) => {
// // //     setSelectedProduct(product);
// // //     setRestockQuantity(product.stock_level - product.quantity);
// // //     setShowRestockModal(true);
// // //   };

// // //   const handleRestock = async (productId, quantity) => {
// // //     if (!quantity || quantity <= 0) {
// // //       alert("Please enter a valid restock quantity.");
// // //       return;
// // //     }

// // //     try {
// // //       setRestockInProgress(prev => [...prev, productId]);
// // //       const response = await fetch(`${API_URL}/products/${productId}/restock?storeId=${storeId}`, {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ quantity: parseInt(quantity) })
// // //       });
      
// // //       if (!response.ok) {
// // //         const errorData = await response.json();
// // //         throw new Error(errorData.error || "Unknown restock error");
// // //       }
      
// // //       const data = await response.json();
      
// // //       setLowStockProducts(prev => prev.map(product => 
// // //         product._id === productId ? { 
// // //           ...product, 
// // //           quantity: parseInt(data.new_quantity),
// // //           last_restocked: new Date().toISOString().split('T')[0],
// // //           status: parseInt(data.new_quantity) <= product.stock_level ? "critical" :
// // //                   parseInt(data.new_quantity) <= product.stock_level * 1.2 ? "warning" : "normal"
// // //         } : product
// // //       ).filter(p => p.quantity < p.stock_level * 1.5));

// // //       setAllProducts(prev => prev.map(product => 
// // //         product._id === productId ? { 
// // //           ...product, 
// // //           quantity: parseInt(data.new_quantity),
// // //           last_restocked: new Date().toISOString().split('T')[0]
// // //         } : product
// // //       ));

// // //       await Promise.all([fetchLowStockProducts(), fetchRestockHistory()]);
      
// // //       setRestockInProgress(prev => prev.filter(id => id !== productId));
// // //       setShowRestockModal(false);
// // //     } catch (error) {
// // //       console.error("Restock error:", error);
// // //       alert(`Restock failed: ${error.message}. Please ensure all product data is complete (e.g., price) and try again.`);
// // //       setRestockInProgress(prev => prev.filter(id => id !== productId));
// // //     }
// // //   };

// // //   const exportToCSV = () => {
// // //     const headers = ["Product Name", "Current Stock", "Stock Level", "Status", "Days to Empty", "Supplier", "Restock Cost"];
// // //     const csvData = sortedProducts.map(p => [
// // //       p.product_name,
// // //       p.quantity,
// // //       p.stock_level,
// // //       p.status,
// // //       p.daysToEmpty,
// // //       p.supplier,
// // //       p.restockCost
// // //     ]);
    
// // //     const csvContent = [headers.join(","), ...csvData.map(row => row.join(","))].join("\n");
// // //     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
// // //     const url = URL.createObjectURL(blob);
// // //     const link = document.createElement("a");
// // //     link.setAttribute("href", url);
// // //     link.setAttribute("download", "restock_alerts.csv");
// // //     document.body.appendChild(link);
// // //     link.click();
// // //     document.body.removeChild(link);
// // //   };

// // //   return (
// // //     <div className="p-6 max-w-7xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
// // //       <motion.div
// // //         initial={{ opacity: 0, y: -20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.5 }}
// // //         className="flex flex-col md:flex-row md:items-center md:justify-between mb-8"
// // //       >
// // //         <div>
// // //           <h1 className="text-3xl font-semibold mb-2 text-gray-900 flex items-center">
// // //             <Bell className="mr-2 text-red-600" /> 
// // //             Restock Alerts Dashboard
// // //           </h1>
// // //           <p className="text-gray-600">Monitor and manage your inventory efficiently</p>
// // //         </div>
        
// // //         <div className="mt-4 md:mt-0 flex items-center space-x-3">
// // //           <button
// // //             className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
// // //               view === "list" ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
// // //             }`}
// // //             onClick={() => setView("list")}
// // //           >
// // //             List View
// // //           </button>
// // //           <button
// // //             className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
// // //               view === "analytics" ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
// // //             }`}
// // //             onClick={() => setView("analytics")}
// // //           >
// // //             Analytics
// // //           </button>
// // //           <button
// // //             className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-all duration-200 flex items-center shadow-md"
// // //             onClick={exportToCSV}
// // //           >
// // //             <DownloadCloud className="mr-2 h-4 w-4" /> Export
// // //           </button>
// // //         </div>
// // //       </motion.div>

// // //       <motion.div 
// // //         className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8"
// // //         initial={{ opacity: 0 }}
// // //         animate={{ opacity: 1 }}
// // //         transition={{ duration: 0.6 }}
// // //       >
// // //         <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-red-600 hover:shadow-xl transition-shadow duration-300">
// // //           <div className="flex justify-between items-center">
// // //             <div>
// // //               <p className="text-sm text-gray-600">Critical Items</p>
// // //               <p className="text-2xl font-bold text-gray-900">{stats.criticalCount}</p>
// // //             </div>
// // //             <AlertTriangle className="h-10 w-10 text-red-600 opacity-80" />
// // //           </div>
// // //         </div>
        
// // //         <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-yellow-600 hover:shadow-xl transition-shadow duration-300">
// // //           <div className="flex justify-between items-center">
// // //             <div>
// // //               <p className="text-sm text-gray-600">Warning Items</p>
// // //               <p className="text-2xl font-bold text-gray-900">{stats.warningCount}</p>
// // //             </div>
// // //             <Bell className="h-10 w-10 text-yellow-600 opacity-80" />
// // //           </div>
// // //         </div>
        
// // //         <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-blue-600 hover:shadow-xl transition-shadow duration-300">
// // //           <div className="flex justify-between items-center">
// // //             <div>
// // //               <p className="text-sm text-gray-600">Avg. Days to Empty</p>
// // //               <p className="text-2xl font-bold text-gray-900">{stats.avgDaysToEmpty}</p>
// // //             </div>
// // //             <Clock className="h-10 w-10 text-blue-600 opacity-80" />
// // //           </div>
// // //         </div>
        
// // //         <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-green-600 hover:shadow-xl transition-shadow duration-300">
// // //           <div className="flex justify-between items-center">
// // //             <div>
// // //               <p className="text-sm text-gray-600">Restock Value</p>
// // //               <p className="text-2xl font-bold text-gray-900">${stats.totalValue}</p>
// // //             </div>
// // //             <DollarSign className="h-10 w-10 text-green-600 opacity-80" />
// // //           </div>
// // //         </div>

// // //         <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-purple-600 hover:shadow-xl transition-shadow duration-300">
// // //           <div className="flex justify-between items-center">
// // //             <div>
// // //               <p className="text-sm text-gray-600">Potential Lost Sales</p>
// // //               <p className="text-2xl font-bold text-gray-900">${stats.potentialLostSales}</p>
// // //             </div>
// // //             <TrendingDown className="h-10 w-10 text-purple-600 opacity-80" />
// // //           </div>
// // //         </div>
        
// // //         <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-indigo-600 hover:shadow-xl transition-shadow duration-300">
// // //           <div className="flex justify-between items-center">
// // //             <div>
// // //               <p className="text-sm text-gray-600">Inventory Health</p>
// // //               <div className="flex items-center">
// // //                 <p className="text-2xl font-bold text-gray-900">{inventoryHealthScore}</p>
// // //                 <span className="text-sm ml-1 text-gray-500">/100</span>
// // //               </div>
// // //             </div>
// // //             <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
// // //               <div 
// // //                 className="h-10 w-10 rounded-full" 
// // //                 style={{ 
// // //                   background: `conic-gradient(${inventoryHealthScore > 80 ? '#10B981' : inventoryHealthScore > 50 ? '#FBBF24' : '#EF4444'} ${inventoryHealthScore}%, #E5E7EB 0)` 
// // //                 }} 
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </motion.div>

// // //       <div className="bg-white rounded-xl shadow-lg p-5 mb-8">
// // //         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
// // //           <div className="flex items-center space-x-3">
// // //             <Filter className="text-gray-500" />
// // //             <span className="text-gray-800 font-medium">Filter:</span>
            
// // //             <div className="flex space-x-2">
// // //               <button
// // //                 className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
// // //                   filterType === "all" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// // //                 }`}
// // //                 onClick={() => setFilterType("all")}
// // //               >
// // //                 All
// // //               </button>
// // //               <button
// // //                 className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
// // //                   filterType === "critical" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// // //                 }`}
// // //                 onClick={() => setFilterType("critical")}
// // //               >
// // //                 Critical
// // //               </button>
// // //               <button
// // //                 className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
// // //                   filterType === "warning" ? "bg-yellow-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// // //                 }`}
// // //                 onClick={() => setFilterType("warning")}
// // //               >
// // //                 Warning
// // //               </button>
// // //             </div>
// // //           </div>
          
// // //           <div className="flex items-center space-x-4">
// // //             <div className="relative">
// // //               <select
// // //                 className="appearance-none bg-white border border-gray-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
// // //                 value={selectedSupplier}
// // //                 onChange={(e) => setSelectedSupplier(e.target.value)}
// // //               >
// // //                 <option value="all">All Suppliers</option>
// // //                 {suppliers.map(supplier => (
// // //                   <option key={supplier} value={supplier}>{supplier}</option>
// // //                 ))}
// // //               </select>
// // //               <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
// // //             </div>
            
// // //             <div className="relative">
// // //               <select
// // //                 className="appearance-none bg-white border border-gray-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
// // //                 value={sortBy}
// // //                 onChange={(e) => setSortBy(e.target.value)}
// // //               >
// // //                 <option value="critical">Sort by Priority</option>
// // //                 <option value="days">Sort by Days to Empty</option>
// // //                 <option value="name">Sort by Name</option>
// // //                 <option value="supplier">Sort by Supplier</option>
// // //                 <option value="profit">Sort by Profit Margin</option>
// // //                 <option value="risk">Sort by Stockout Risk</option>
// // //               </select>
// // //               <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
// // //             </div>
            
// // //             <div className="relative">
// // //               <select
// // //                 className="appearance-none bg-white border border-gray-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
// // //                 value={dateRange}
// // //                 onChange={(e) => setDateRange(e.target.value)}
// // //               >
// // //                 <option value="7">Last 7 Days</option>
// // //                 <option value="30">Last 30 Days</option>
// // //                 <option value="90">Last 90 Days</option>
// // //               </select>
// // //               <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
// // //             </div>
            
// // //             <button 
// // //               className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-all duration-200 shadow-md"
// // //               onClick={fetchLowStockProducts}
// // //             >
// // //               <RefreshCw className="h-5 w-5" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {isLoading ? (
// // //         <div className="flex justify-center items-center py-20">
// // //           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
// // //         </div>
// // //       ) : (
// // //         <>
// // //           {view === "list" ? (
// // //             sortedProducts.length > 0 ? (
// // //               <div className="space-y-6">
// // //                 {sortedProducts.map((product) => (
// // //                   <motion.div 
// // //                     key={product._id}
// // //                     initial={{ x: -20, opacity: 0 }}
// // //                     animate={{ x: 0, opacity: 1 }}
// // //                     className={`border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${
// // //                       expandedItem === product._id ? "bg-gray-50" : "bg-white"
// // //                     }`}
// // //                   >
// // //                     <div className="flex flex-col md:flex-row md:items-center md:justify-between p-5">
// // //                       <div className="flex items-start md:items-center space-x-4">
// // //                         <div className={`p-3 rounded-lg ${getStatusColor(product.status)}`}>
// // //                           {product.status === "critical" ? 
// // //                             <AlertTriangle className="h-6 w-6" /> : 
// // //                             <Bell className="h-6 w-6" />}
// // //                         </div>
                        
// // //                         <div>
// // //                           <div className="flex items-center flex-wrap gap-2">
// // //                             <h3 className="font-semibold text-lg text-gray-900">{product.product_name}</h3>
// // //                             <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadge(product.status)} font-medium`}>
// // //                               {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
// // //                             </span>
// // //                           </div>
// // //                           <div className="flex items-center mt-2 text-sm text-gray-700">
// // //                             <span className={product.status === "critical" ? "font-bold text-red-700" : "font-medium"}>
// // //                               {product.quantity}
// // //                             </span>
// // //                             <span className="mx-1">/</span>
// // //                             <span>{product.stock_level} units</span>
// // //                             {product.daysToEmpty <= 7 && (
// // //                               <span className="ml-3 text-red-700 font-medium">
// // //                                 {product.daysToEmpty === 0 ? "Out of stock!" : `${product.daysToEmpty} days left`}
// // //                               </span>
// // //                             )}
// // //                             <span className="ml-4 text-gray-600">
// // //                               ${product.price} | Margin: {product.profitMargin}%
// // //                             </span>
// // //                           </div>
// // //                         </div>
// // //                       </div>
                      
// // //                       <div className="mt-4 md:mt-0 flex items-center space-x-3">
// // //                         <button
// // //                           className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors duration-200"
// // //                           onClick={() => toggleExpanded(product._id)}
// // //                         >
// // //                           {expandedItem === product._id ? "Hide Details" : "Show Details"}
// // //                           <ChevronDown className={`ml-1 h-5 w-5 transition-transform duration-200 ${
// // //                             expandedItem === product._id ? "transform rotate-180" : ""
// // //                           }`} />
// // //                         </button>
                        
// // //                         {restockInProgress.includes(product._id) ? (
// // //                           <button className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg text-sm font-medium flex items-center cursor-not-allowed shadow-sm">
// // //                             <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-gray-700 mr-2"></div>
// // //                             Restocking...
// // //                           </button>
// // //                         ) : (
// // //                           <button 
// // //                             className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-medium flex items-center transition-all duration-200 shadow-md"
// // //                             onClick={() => openRestockModal(product)}
// // //                           >
// // //                             <Truck className="mr-2 h-5 w-5" /> Restock Now
// // //                           </button>
// // //                         )}
// // //                       </div>
// // //                     </div>
                    
// // //                     <AnimatePresence>
// // //                       {expandedItem === product._id && (
// // //                         <motion.div
// // //                           initial={{ height: 0, opacity: 0 }}
// // //                           animate={{ height: "auto", opacity: 1 }}
// // //                           exit={{ height: 0, opacity: 0 }}
// // //                           transition={{ duration: 0.3 }}
// // //                           className="overflow-hidden"
// // //                         >
// // //                           <div className="p-5 pt-0 border-t border-gray-200">
// // //                             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// // //                               <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
// // //                                 <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
// // //                                   <BarChart2 className="mr-2 h-5 w-5 text-gray-600" /> Usage Metrics
// // //                                 </h4>
// // //                                 <p className="text-sm text-gray-800"><span className="font-medium">Sales Velocity:</span> {product.salesVelocity} units/day</p>
// // //                                 <p className="text-sm text-gray-800"><span className="font-medium">Days to Empty:</span> {product.daysToEmpty}</p>
// // //                                 <div className="mt-2 h-2 bg-gray-300 rounded-full overflow-hidden">
// // //                                   <div 
// // //                                     className={`h-full ${
// // //                                       product.daysToEmpty < 3 ? "bg-red-600" : 
// // //                                       product.daysToEmpty < 7 ? "bg-yellow-600" : "bg-green-600"
// // //                                     }`}
// // //                                     style={{ width: `${Math.min(100, (product.daysToEmpty / 30) * 100)}%` }}
// // //                                   ></div>
// // //                                 </div>
// // //                               </div>
                              
// // //                               <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
// // //                                 <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
// // //                                   <Truck className="mr-2 h-5 w-5 text-gray-600" /> Supplier Information
// // //                                 </h4>
// // //                                 <p className="text-sm text-gray-800"><span className="font-medium">Supplier:</span> {product.supplier}</p>
// // //                                 <p className="text-sm text-gray-800"><span className="font-medium">Lead Time:</span> {product.leadTime} days</p>
// // //                               </div>
                              
// // //                               <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
// // //                                 <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
// // //                                   <Calendar className="mr-2 h-5 w-5 text-gray-600" /> Restock Details
// // //                                 </h4>
// // //                                 <p className="text-sm text-gray-800"><span className="font-medium">Last Restocked:</span> {product.last_restocked}</p>
// // //                                 <p className="text-sm text-gray-800"><span className="font-medium">Restock Cost:</span> ${product.restockCost}</p>
// // //                                 <p className="text-sm text-gray-800"><span className="font-medium">Potential Lost Sales:</span> ${product.potentialLostSales}</p>
// // //                               </div>
// // //                             </div>
// // //                           </div>
// // //                         </motion.div>
// // //                       )}
// // //                     </AnimatePresence>
// // //                   </motion.div>
// // //                 ))}
// // //               </div>
// // //             ) : (
// // //               <div className="bg-white rounded-xl shadow-lg p-8 text-center">
// // //                 <CheckCircle className="mx-auto h-14 w-14 text-green-600" />
// // //                 <h3 className="mt-3 text-xl font-semibold text-gray-900">All products are well-stocked</h3>
// // //                 <p className="mt-2 text-sm text-gray-600">No items require immediate attention</p>
// // //               </div>
// // //             )
// // //           ) : (
// // //             <div className="bg-white rounded-xl shadow-lg p-6">
// // //               <h2 className="text-2xl font-semibold mb-5 flex items-center text-gray-900">
// // //                 <PieChart className="mr-2 h-6 w-6 text-blue-600" />
// // //                 Inventory Analytics
// // //               </h2>
              
// // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                 <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
// // //                   <h3 className="text-lg font-semibold mb-3 text-gray-800">Stockout Risk Distribution</h3>
// // //                   <div className="h-64 flex items-end justify-between">
// // //                     {Object.entries(stockoutRiskDistribution).map(([range, count]) => (
// // //                       <div key={range} className="flex-1 flex flex-col items-center">
// // //                         <div 
// // //                           className="bg-red-600 w-3/4 rounded-t"
// // //                           style={{ 
// // //                             height: `${(count / Math.max(...Object.values(stockoutRiskDistribution), 1)) * 80}%`,
// // //                             minHeight: count > 0 ? '12px' : '0px'
// // //                           }}
// // //                         />
// // //                         <span className="text-sm mt-2 text-gray-700">{range}%</span>
// // //                         <span className="text-xs text-gray-500">{count}</span>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 </div>
                
// // //                 <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
// // //                   <h3 className="text-lg font-semibold mb-3 text-gray-800">Restock History</h3>
// // //                   {restockHistory.length === 0 ? (
// // //                     <p className="text-sm text-gray-600">No restock history available yet</p>
// // //                   ) : (
// // //                     <div className="h-64 overflow-y-auto">
// // //                       <table className="w-full text-sm">
// // //                         <thead className="bg-gray-200 sticky top-0">
// // //                           <tr>
// // //                             <th className="p-3 text-left text-gray-800 font-semibold">Date</th>
// // //                             <th className="p-3 text-left text-gray-800 font-semibold">Product</th>
// // //                             <th className="p-3 text-right text-gray-800 font-semibold">Qty</th>
// // //                             <th className="p-3 text-right text-gray-800 font-semibold">Cost</th>
// // //                           </tr>
// // //                         </thead>
// // //                         <tbody>
// // //                           {restockHistory.map((entry) => (
// // //                             <tr key={entry.id} className="border-b hover:bg-gray-100 transition-colors duration-200">
// // //                               <td className="p-3 text-gray-700">{entry.date}</td>
// // //                               <td className="p-3 text-gray-700">{entry.product_name}</td>
// // //                               <td className="p-3 text-right text-gray-700">{entry.quantity}</td>
// // //                               <td className="p-3 text-right text-gray-700">${entry.cost}</td>
// // //                             </tr>
// // //                           ))}
// // //                         </tbody>
// // //                       </table>
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           )}
// // //         </>
// // //       )}

// // //       <AnimatePresence>
// // //         {showRestockModal && selectedProduct && (
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-6"
// // //             onClick={() => setShowRestockModal(false)}
// // //           >
// // //             <motion.div
// // //               initial={{ y: -30, opacity: 0 }}
// // //               animate={{ y: 0, opacity: 1 }}
// // //               exit={{ y: -30, opacity: 0 }}
// // //               transition={{ duration: 0.3 }}
// // //               className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg"
// // //               onClick={(e) => e.stopPropagation()}
// // //             >
// // //               <h2 className="text-2xl font-semibold mb-5 text-gray-900">Restock {selectedProduct.product_name}</h2>
// // //               <div className="space-y-5">
// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 mb-2">Quantity to Restock</label>
// // //                   <input
// // //                     type="number"
// // //                     min="1"
// // //                     value={restockQuantity}
// // //                     onChange={(e) => setRestockQuantity(parseInt(e.target.value) || 0)}
// // //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
// // //                   />
// // //                 </div>
// // //                 <div className="text-sm text-gray-600 space-y-1">
// // //                   <p><span className="font-medium">Current Stock:</span> {selectedProduct.quantity}</p>
// // //                   <p><span className="font-medium">Stock Level:</span> {selectedProduct.stock_level}</p>
// // //                   <p><span className="font-medium">Estimated Cost:</span> ${(restockQuantity * (selectedProduct.price || 0)).toFixed(2)}</p>
// // //                 </div>
// // //                 <div className="flex justify-end space-x-3">
// // //                   <button
// // //                     className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm"
// // //                     onClick={() => setShowRestockModal(false)}
// // //                   >
// // //                     Cancel
// // //                   </button>
// // //                   <button
// // //                     className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-md flex items-center"
// // //                     onClick={() => handleRestock(selectedProduct._id, restockQuantity)}
// // //                     disabled={restockInProgress.includes(selectedProduct._id)}
// // //                   >
// // //                     {restockInProgress.includes(selectedProduct._id) ? (
// // //                       <>
// // //                         <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white mr-2"></div>
// // //                         Processing...
// // //                       </>
// // //                     ) : (
// // //                       "Confirm Restock"
// // //                     )}
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </div>
// // //   );
// // // };

// // // export default RestockAlerts;


// // import React, { useState, useEffect, useContext, useMemo } from "react";
// // import { StoreContext } from "./StoreContext";
// // import { 
// //   Bell, AlertTriangle, TrendingDown, Clock, Truck, DollarSign, 
// //   Calendar, CheckCircle, BarChart2, RefreshCw, Filter, ChevronDown, 
// //   DownloadCloud, PieChart
// // } from "lucide-react";
// // import { motion, AnimatePresence } from "framer-motion";

// // const RestockAlerts = () => {
// //   const { storeId } = useContext(StoreContext);
// //   const [allProducts, setAllProducts] = useState([]);
// //   const [lowStockProducts, setLowStockProducts] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [restockInProgress, setRestockInProgress] = useState([]);
// //   const [sortBy, setSortBy] = useState("critical");
// //   const [filterType, setFilterType] = useState("all");
// //   const [expandedItem, setExpandedItem] = useState(null);
// //   const [selectedSupplier, setSelectedSupplier] = useState("all");
// //   const [suppliers, setSuppliers] = useState([]);
// //   const [dateRange, setDateRange] = useState("30");
// //   const [view, setView] = useState("list");
// //   const [restockHistory, setRestockHistory] = useState([]);
// //   const [showRestockModal, setShowRestockModal] = useState(false);
// //   const [selectedProduct, setSelectedProduct] = useState(null);
// //   const [restockQuantity, setRestockQuantity] = useState(0);
// //   const [stats, setStats] = useState({
// //     criticalCount: 0,
// //     warningCount: 0,
// //     totalValue: 0,
// //     avgDaysToEmpty: 0,
// //     potentialLostSales: 0,
// //     stockoutRisk: 0
// //   });
// //   const API_URL = "http://127.0.0.1:5000";

// //   useEffect(() => {
// //     if (storeId) {
// //       fetchLowStockProducts();
// //       fetchRestockHistory();
// //     }
// //   }, [storeId, dateRange]);

// //   const fetchLowStockProducts = async () => {
// //     setIsLoading(true);
// //     try {
// //       const response = await fetch(`${API_URL}/products?storeId=${storeId}`);
// //       const data = await response.json();

// //       setAllProducts(data);

// //       const enhancedLowStock = data.map(product => {
// //         const stockLevel = parseInt(product.stock_level) || 100;
// //         const quantity = parseInt(product.quantity) || 0;
// //         const price = parseFloat(product.price) || 0; // Default to 0 if missing, but backend should catch this
// //         const salesVelocity = parseFloat(product.salesVelocity) || (Math.random() * 5 + 0.5);
        
// //         const daysToEmpty = quantity > 0 ? Math.ceil(quantity / salesVelocity) : 0;
// //         const warningThreshold = stockLevel * 1.2;
// //         const criticalThreshold = stockLevel;
        
// //         const status = quantity <= criticalThreshold ? "critical" :
// //                       quantity <= warningThreshold ? "warning" : "normal";
        
// //         const restockCost = ((stockLevel - quantity) * price).toFixed(2);
// //         const leadTime = product.leadTime || Math.floor(Math.random() * 14) + 3;
// //         const profitMargin = product.profitMargin || ((price - (price * 0.6)) / price * 100).toFixed(1);
// //         const potentialLostSales = (salesVelocity * leadTime * price).toFixed(2);
// //         const stockoutRisk = Math.min(100, Math.max(0, Math.round(
// //           (1 - (quantity / stockLevel)) * 100
// //         )));

// //         return {
// //           ...product,
// //           salesVelocity: salesVelocity.toFixed(1),
// //           daysToEmpty,
// //           status,
// //           restockCost,
// //           leadTime,
// //           profitMargin,
// //           potentialLostSales,
// //           stockoutRisk,
// //           stock_level: stockLevel,
// //           quantity: quantity,
// //           price: price,
// //           supplier: product.supplier || "Unknown",
// //           last_restocked: product.last_restocked || "N/A"
// //         };
// //       }).filter(p => p.quantity < p.stock_level * 1.5);

// //       setLowStockProducts(enhancedLowStock);
// //       setSuppliers([...new Set(enhancedLowStock.map(p => p.supplier))]);

// //       const criticalCount = enhancedLowStock.filter(p => p.status === "critical").length;
// //       const warningCount = enhancedLowStock.filter(p => p.status === "warning").length;
// //       const totalValue = enhancedLowStock.reduce((sum, p) => sum + parseFloat(p.restockCost), 0);
// //       const avgDays = enhancedLowStock.length > 0 ? 
// //         Math.round(enhancedLowStock.reduce((sum, p) => sum + p.daysToEmpty, 0) / enhancedLowStock.length) : 0;
// //       const potentialLostSales = enhancedLowStock.reduce((sum, p) => sum + parseFloat(p.potentialLostSales), 0);
// //       const avgStockoutRisk = enhancedLowStock.length > 0 ? 
// //         Math.round(enhancedLowStock.reduce((sum, p) => sum + p.stockoutRisk, 0) / enhancedLowStock.length) : 0;

// //       setStats({
// //         criticalCount,
// //         warningCount,
// //         totalValue: totalValue.toFixed(2),
// //         avgDaysToEmpty: avgDays,
// //         potentialLostSales: potentialLostSales.toFixed(2),
// //         stockoutRisk: avgStockoutRisk
// //       });
// //     } catch (err) {
// //       console.error("Error fetching products:", err);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const fetchRestockHistory = async () => {
// //     try {
// //       const response = await fetch(`${API_URL}/restock-history?storeId=${storeId}`);
// //       if (!response.ok) throw new Error(`Failed to fetch restock history: ${response.statusText}`);
// //       const history = await response.json();
      
// //       const formattedHistory = history.map(entry => ({
// //         id: entry._id,
// //         product_name: entry.product_name || "Unknown Product",
// //         date: entry.date.split('T')[0] || "N/A",
// //         quantity: parseInt(entry.quantity) || 0,
// //         cost: parseFloat(entry.cost).toFixed(2) || "0.00",
// //         supplier: entry.supplier || "Unknown",
// //         status: entry.status || "Completed"
// //       }));
      
// //       setRestockHistory(formattedHistory);
// //       console.log("Fetched Restock History:", formattedHistory);
// //     } catch (error) {
// //       console.error("Error fetching restock history:", error);
// //       setRestockHistory([]);
// //     }
// //   };

// //   const filteredProducts = useMemo(() => {
// //     return lowStockProducts.filter(product => {
// //       return (filterType === "all" || product.status === filterType) &&
// //              (selectedSupplier === "all" || product.supplier === selectedSupplier);
// //     });
// //   }, [lowStockProducts, filterType, selectedSupplier]);

// //   const sortedProducts = useMemo(() => {
// //     return [...filteredProducts].sort((a, b) => {
// //       switch (sortBy) {
// //         case "critical":
// //           if (a.status === "critical" && b.status !== "critical") return -1;
// //           if (a.status !== "critical" && b.status === "critical") return 1;
// //           return a.daysToEmpty - b.daysToEmpty;
// //         case "name":
// //           return (a.product_name || "").localeCompare(b.product_name || "");
// //         case "supplier":
// //           return (a.supplier || "").localeCompare(b.supplier || "");
// //         case "days":
// //           return a.daysToEmpty - b.daysToEmpty;
// //         case "profit":
// //           return parseFloat(b.profitMargin || 0) - parseFloat(a.profitMargin || 0);
// //         case "risk":
// //           return (b.stockoutRisk || 0) - (a.stockoutRisk || 0);
// //         default:
// //           return 0;
// //       }
// //     });
// //   }, [filteredProducts, sortBy]);

// //   const inventoryHealthScore = useMemo(() => {
// //     if (allProducts.length === 0) return 100;
// //     const totalProducts = allProducts.length;
// //     const criticalPercentage = (stats.criticalCount / totalProducts) * 100;
// //     const warningPercentage = (stats.warningCount / totalProducts) * 100;
// //     const baseScore = 100 - (criticalPercentage * 2 + warningPercentage * 1);
// //     console.log("Inventory Health - Total:", totalProducts, "Critical:", stats.criticalCount, "Warning:", stats.warningCount, "Score:", baseScore);
// //     return Math.max(0, Math.round(baseScore));
// //   }, [allProducts, stats]);

// //   const stockoutRiskDistribution = useMemo(() => {
// //     const ranges = { "0-25": 0, "26-50": 0, "51-75": 0, "76-100": 0 };
// //     lowStockProducts.forEach(p => {
// //       const risk = p.stockoutRisk || 0;
// //       if (risk <= 25) ranges["0-25"]++;
// //       else if (risk <= 50) ranges["26-50"]++;
// //       else if (risk <= 75) ranges["51-75"]++;
// //       else ranges["76-100"]++;
// //     });
// //     return ranges;
// //   }, [lowStockProducts]);

// //   const getStatusColor = (status) => {
// //     switch (status) {
// //       case "critical": return "bg-red-100 border-red-300 text-red-900";
// //       case "warning": return "bg-yellow-100 border-yellow-300 text-yellow-900";
// //       default: return "bg-green-100 border-green-300 text-green-900";
// //     }
// //   };

// //   const getStatusBadge = (status) => {
// //     switch (status) {
// //       case "critical": return "bg-red-200 text-red-900";
// //       case "warning": return "bg-yellow-200 text-yellow-900";
// //       default: return "bg-green-200 text-green-900";
// //     }
// //   };

// //   const toggleExpanded = (id) => {
// //     setExpandedItem(expandedItem === id ? null : id);
// //   };

// //   const openRestockModal = (product) => {
// //     setSelectedProduct(product);
// //     setRestockQuantity(product.stock_level - product.quantity);
// //     setShowRestockModal(true);
// //   };

// //   const handleRestock = async (productId, quantity) => {
// //     if (!quantity || quantity <= 0) {
// //       alert("Please enter a valid restock quantity.");
// //       return;
// //     }

// //     try {
// //       setRestockInProgress(prev => [...prev, productId]);
// //       const response = await fetch(`${API_URL}/products/${productId}/restock?storeId=${storeId}`, {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ quantity: parseInt(quantity) })
// //       });
      
// //       if (!response.ok) {
// //         const errorData = await response.json();
// //         throw new Error(errorData.error || "Unknown restock error");
// //       }
      
// //       const data = await response.json();
// //       const restockCost = parseFloat(data.restock_cost).toFixed(2);

// //       // Immediately update local state for responsiveness
// //       setLowStockProducts(prev => {
// //         const updatedProducts = prev.map(product => 
// //           product._id === productId ? { 
// //             ...product, 
// //             quantity: parseInt(data.new_quantity),
// //             last_restocked: new Date().toISOString().split('T')[0],
// //             status: parseInt(data.new_quantity) <= product.stock_level ? "critical" :
// //                     parseInt(data.new_quantity) <= product.stock_level * 1.2 ? "warning" : "normal",
// //             restockCost: ((product.stock_level - parseInt(data.new_quantity)) * product.price).toFixed(2)
// //           } : product
// //         ).filter(p => p.quantity < p.stock_level * 1.5);

// //         // Update stats immediately
// //         const criticalCount = updatedProducts.filter(p => p.status === "critical").length;
// //         const warningCount = updatedProducts.filter(p => p.status === "warning").length;
// //         const totalValue = updatedProducts.reduce((sum, p) => sum + parseFloat(p.restockCost), 0);
// //         setStats(prev => ({
// //           ...prev,
// //           criticalCount,
// //           warningCount,
// //           totalValue: totalValue.toFixed(2)
// //         }));

// //         return updatedProducts;
// //       });

// //       setAllProducts(prev => prev.map(product => 
// //         product._id === productId ? { 
// //           ...product, 
// //           quantity: parseInt(data.new_quantity),
// //           last_restocked: new Date().toISOString().split('T')[0]
// //         } : product
// //       ));

// //       // Fetch updated data from server
// //       await fetchRestockHistory();
      
// //       setRestockInProgress(prev => prev.filter(id => id !== productId));
// //       setShowRestockModal(false);
// //     } catch (error) {
// //       console.error("Restock error:", error);
// //       alert(`Restock failed: ${error.message}. Please ensure all product data (e.g., price) is valid.`);
// //       setRestockInProgress(prev => prev.filter(id => id !== productId));
// //     }
// //   };

// //   const exportToCSV = () => {
// //     const headers = ["Product Name", "Current Stock", "Stock Level", "Status", "Days to Empty", "Supplier", "Restock Cost"];
// //     const csvData = sortedProducts.map(p => [
// //       p.product_name,
// //       p.quantity,
// //       p.stock_level,
// //       p.status,
// //       p.daysToEmpty,
// //       p.supplier,
// //       p.restockCost
// //     ]);
    
// //     const csvContent = [headers.join(","), ...csvData.map(row => row.join(","))].join("\n");
// //     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
// //     const url = URL.createObjectURL(blob);
// //     const link = document.createElement("a");
// //     link.setAttribute("href", url);
// //     link.setAttribute("download", "restock_alerts.csv");
// //     document.body.appendChild(link);
// //     link.click();
// //     document.body.removeChild(link);
// //   };

// //   return (
// //     <div className="p-6 max-w-7xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
// //       <motion.div
// //         initial={{ opacity: 0, y: -20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5 }}
// //         className="flex flex-col md:flex-row md:items-center md:justify-between mb-8"
// //       >
// //         <div>
// //           <h1 className="text-3xl font-semibold mb-2 text-gray-900 flex items-center">
// //             <Bell className="mr-2 text-red-600" /> 
// //             Restock Alerts Dashboard
// //           </h1>
// //           <p className="text-gray-600">Monitor and manage your inventory efficiently</p>
// //         </div>
        
// //         <div className="mt-4 md:mt-0 flex items-center space-x-3">
// //           <button
// //             className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
// //               view === "list" ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
// //             }`}
// //             onClick={() => setView("list")}
// //           >
// //             List View
// //           </button>
// //           <button
// //             className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
// //               view === "analytics" ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
// //             }`}
// //             onClick={() => setView("analytics")}
// //           >
// //             Analytics
// //           </button>
// //           <button
// //             className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-all duration-200 flex items-center shadow-md"
// //             onClick={exportToCSV}
// //           >
// //             <DownloadCloud className="mr-2 h-4 w-4" /> Export
// //           </button>
// //         </div>
// //       </motion.div>

// //       <motion.div 
// //         className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8"
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 0.6 }}
// //       >
// //         <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-red-600 hover:shadow-xl transition-shadow duration-300">
// //           <div className="flex justify-between items-center">
// //             <div>
// //               <p className="text-sm text-gray-600">Critical Items</p>
// //               <p className="text-2xl font-bold text-gray-900">{stats.criticalCount}</p>
// //             </div>
// //             <AlertTriangle className="h-10 w-10 text-red-600 opacity-80" />
// //           </div>
// //         </div>
        
// //         <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-yellow-600 hover:shadow-xl transition-shadow duration-300">
// //           <div className="flex justify-between items-center">
// //             <div>
// //               <p className="text-sm text-gray-600">Warning Items</p>
// //               <p className="text-2xl font-bold text-gray-900">{stats.warningCount}</p>
// //             </div>
// //             <Bell className="h-10 w-10 text-yellow-600 opacity-80" />
// //           </div>
// //         </div>
        
// //         <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-blue-600 hover:shadow-xl transition-shadow duration-300">
// //           <div className="flex justify-between items-center">
// //             <div>
// //               <p className="text-sm text-gray-600">Avg. Days to Empty</p>
// //               <p className="text-2xl font-bold text-gray-900">{stats.avgDaysToEmpty}</p>
// //             </div>
// //             <Clock className="h-10 w-10 text-blue-600 opacity-80" />
// //           </div>
// //         </div>
        
// //         <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-green-600 hover:shadow-xl transition-shadow duration-300">
// //           <div className="flex justify-between items-center">
// //             <div>
// //               <p className="text-sm text-gray-600">Restock Value</p>
// //               <p className="text-2xl font-bold text-gray-900">${stats.totalValue}</p>
// //             </div>
// //             <DollarSign className="h-10 w-10 text-green-600 opacity-80" />
// //           </div>
// //         </div>

// //         <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-purple-600 hover:shadow-xl transition-shadow duration-300">
// //           <div className="flex justify-between items-center">
// //             <div>
// //               <p className="text-sm text-gray-600">Potential Lost Sales</p>
// //               <p className="text-2xl font-bold text-gray-900">${stats.potentialLostSales}</p>
// //             </div>
// //             <TrendingDown className="h-10 w-10 text-purple-600 opacity-80" />
// //           </div>
// //         </div>
        
// //         <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-indigo-600 hover:shadow-xl transition-shadow duration-300">
// //           <div className="flex justify-between items-center">
// //             <div>
// //               <p className="text-sm text-gray-600">Inventory Health</p>
// //               <div className="flex items-center">
// //                 <p className="text-2xl font-bold text-gray-900">{inventoryHealthScore}</p>
// //                 <span className="text-sm ml-1 text-gray-500">/100</span>
// //               </div>
// //             </div>
// //             <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
// //               <div 
// //                 className="h-10 w-10 rounded-full" 
// //                 style={{ 
// //                   background: `conic-gradient(${inventoryHealthScore > 80 ? '#10B981' : inventoryHealthScore > 50 ? '#FBBF24' : '#EF4444'} ${inventoryHealthScore}%, #E5E7EB 0)` 
// //                 }} 
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </motion.div>

// //       <div className="bg-white rounded-xl shadow-lg p-5 mb-8">
// //         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
// //           <div className="flex items-center space-x-3">
// //             <Filter className="text-gray-500" />
// //             <span className="text-gray-800 font-medium">Filter:</span>
            
// //             <div className="flex space-x-2">
// //               <button
// //                 className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
// //                   filterType === "all" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// //                 }`}
// //                 onClick={() => setFilterType("all")}
// //               >
// //                 All
// //               </button>
// //               <button
// //                 className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
// //                   filterType === "critical" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// //                 }`}
// //                 onClick={() => setFilterType("critical")}
// //               >
// //                 Critical
// //               </button>
// //               <button
// //                 className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
// //                   filterType === "warning" ? "bg-yellow-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// //                 }`}
// //                 onClick={() => setFilterType("warning")}
// //               >
// //                 Warning
// //               </button>
// //             </div>
// //           </div>
          
// //           <div className="flex items-center space-x-4">
// //             <div className="relative">
// //               <select
// //                 className="appearance-none bg-white border border-gray-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
// //                 value={selectedSupplier}
// //                 onChange={(e) => setSelectedSupplier(e.target.value)}
// //               >
// //                 <option value="all">All Suppliers</option>
// //                 {suppliers.map(supplier => (
// //                   <option key={supplier} value={supplier}>{supplier}</option>
// //                 ))}
// //               </select>
// //               <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
// //             </div>
            
// //             <div className="relative">
// //               <select
// //                 className="appearance-none bg-white border border-gray-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
// //                 value={sortBy}
// //                 onChange={(e) => setSortBy(e.target.value)}
// //               >
// //                 <option value="critical">Sort by Priority</option>
// //                 <option value="days">Sort by Days to Empty</option>
// //                 <option value="name">Sort by Name</option>
// //                 <option value="supplier">Sort by Supplier</option>
// //                 <option value="profit">Sort by Profit Margin</option>
// //                 <option value="risk">Sort by Stockout Risk</option>
// //               </select>
// //               <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
// //             </div>
            
// //             <div className="relative">
// //               <select
// //                 className="appearance-none bg-white border border-gray-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
// //                 value={dateRange}
// //                 onChange={(e) => setDateRange(e.target.value)}
// //               >
// //                 <option value="7">Last 7 Days</option>
// //                 <option value="30">Last 30 Days</option>
// //                 <option value="90">Last 90 Days</option>
// //               </select>
// //               <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
// //             </div>
            
// //             <button 
// //               className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-all duration-200 shadow-md"
// //               onClick={fetchLowStockProducts}
// //             >
// //               <RefreshCw className="h-5 w-5" />
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {isLoading ? (
// //         <div className="flex justify-center items-center py-20">
// //           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
// //         </div>
// //       ) : (
// //         <>
// //           {view === "list" ? (
// //             sortedProducts.length > 0 ? (
// //               <div className="space-y-6">
// //                 {sortedProducts.map((product) => (
// //                   <motion.div 
// //                     key={product._id}
// //                     initial={{ x: -20, opacity: 0 circol}}
// //                     animate={{ x: 0, opacity: 1 }}
// //                     className={`border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${
// //                       expandedItem === product._id ? "bg-gray-50" : "bg-white"
// //                     }`}
// //                   >
// //                     <div className="flex flex-col md:flex-row md:items-center md:justify-between p-5">
// //                       <div className="flex items-start md:items-center space-x-4">
// //                         <div className={`p-3 rounded-lg ${getStatusColor(product.status)}`}>
// //                           {product.status === "critical" ? 
// //                             <AlertTriangle className="h-6 w-6" /> : 
// //                             <Bell className="h-6 w-6" />}
// //                         </div>
                        
// //                         <div>
// //                           <div className="flex items-center flex-wrap gap-2">
// //                             <h3 className="font-semibold text-lg text-gray-900">{product.product_name}</h3>
// //                             <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadge(product.status)} font-medium`}>
// //                               {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
// //                             </span>
// //                           </div>
// //                           <div className="flex items-center mt-2 text-sm text-gray-700">
// //                             <span className={product.status === "critical" ? "font-bold text-red-700" : "font-medium"}>
// //                               {product.quantity}
// //                             </span>
// //                             <span className="mx-1">/</span>
// //                             <span>{product.stock_level} units</span>
// //                             {product.daysToEmpty <= 7 && (
// //                               <span className="ml-3 text-red-700 font-medium">
// //                                 {product.daysToEmpty === 0 ? "Out of stock!" : `${product.daysToEmpty} days left`}
// //                               </span>
// //                             )}
// //                             <span className="ml-4 text-gray-600">
// //                               ${product.price} | Margin: {product.profitMargin}%
// //                             </span>
// //                           </div>
// //                         </div>
// //                       </div>
                      
// //                       <div className="mt-4 md:mt-0 flex items-center space-x-3">
// //                         <button
// //                           className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors duration-200"
// //                           onClick={() => toggleExpanded(product._id)}
// //                         >
// //                           {expandedItem === product._id ? "Hide Details" : "Show Details"}
// //                           <ChevronDown className={`ml-1 h-5 w-5 transition-transform duration-200 ${
// //                             expandedItem === product._id ? "transform rotate-180" : ""
// //                           }`} />
// //                         </button>
                        
// //                         {restockInProgress.includes(product._id) ? (
// //                           <button className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg text-sm font-medium flex items-center cursor-not-allowed shadow-sm">
// //                             <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-gray-700 mr-2"></div>
// //                             Restocking...
// //                           </button>
// //                         ) : (
// //                           <button 
// //                             className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-medium flex items-center transition-all duration-200 shadow-md"
// //                             onClick={() => openRestockModal(product)}
// //                           >
// //                             <Truck className="mr-2 h-5 w-5" /> Restock Now
// //                           </button>
// //                         )}
// //                       </div>
// //                     </div>
                    
// //                     <AnimatePresence>
// //                       {expandedItem === product._id && (
// //                         <motion.div
// //                           initial={{ height: 0, opacity: 0 }}
// //                           animate={{ height: "auto", opacity: 1 }}
// //                           exit={{ height: 0, opacity: 0 }}
// //                           transition={{ duration: 0.3 }}
// //                           className="overflow-hidden"
// //                         >
// //                           <div className="p-5 pt-0 border-t border-gray-200">
// //                             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// //                               <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
// //                                 <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
// //                                   <BarChart2 className="mr-2 h-5 w-5 text-gray-600" /> Usage Metrics
// //                                 </h4>
// //                                 <p className="text-sm text-gray-800"><span className="font-medium">Sales Velocity:</span> {product.salesVelocity} units/day</p>
// //                                 <p className="text-sm text-gray-800"><span className="font-medium">Days to Empty:</span> {product.daysToEmpty}</p>
// //                                 <div className="mt-2 h-2 bg-gray-300 rounded-full overflow-hidden">
// //                                   <div 
// //                                     className={`h-full ${
// //                                       product.daysToEmpty < 3 ? "bg-red-600" : 
// //                                       product.daysToEmpty < 7 ? "bg-yellow-600" : "bg-green-600"
// //                                     }`}
// //                                     style={{ width: `${Math.min(100, (product.daysToEmpty / 30) * 100)}%` }}
// //                                   ></div>
// //                                 </div>
// //                               </div>
                              
// //                               <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
// //                                 <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
// //                                   <Truck className="mr-2 h-5 w-5 text-gray-600" /> Supplier Information
// //                                 </h4>
// //                                 <p className="text-sm text-gray-800"><span className="font-medium">Supplier:</span> {product.supplier}</p>
// //                                 <p className="text-sm text-gray-800"><span className="font-medium">Lead Time:</span> {product.leadTime} days</p>
// //                               </div>
                              
// //                               <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
// //                                 <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
// //                                   <Calendar className="mr-2 h-5 w-5 text-gray-600" /> Restock Details
// //                                 </h4>
// //                                 <p className="text-sm text-gray-800"><span className="font-medium">Last Restocked:</span> {product.last_restocked}</p>
// //                                 <p className="text-sm text-gray-800"><span className="font-medium">Restock Cost:</span> ${product.restockCost}</p>
// //                                 <p className="text-sm text-gray-800"><span className="font-medium">Potential Lost Sales:</span> ${product.potentialLostSales}</p>
// //                               </div>
// //                             </div>
// //                           </div>
// //                         </motion.div>
// //                       )}
// //                     </AnimatePresence>
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             ) : (
// //               <div className="bg-white rounded-xl shadow-lg p-8 text-center">
// //                 <CheckCircle className="mx-auto h-14 w-14 text-green-600" />
// //                 <h3 className="mt-3 text-xl font-semibold text-gray-900">All products are well-stocked</h3>
// //                 <p className="mt-2 text-sm text-gray-600">No items require immediate attention</p>
// //               </div>
// //             )
// //           ) : (
// //             <div className="bg-white rounded-xl shadow-lg p-6">
// //               <h2 className="text-2xl font-semibold mb-5 flex items-center text-gray-900">
// //                 <PieChart className="mr-2 h-6 w-6 text-blue-600" />
// //                 Inventory Analytics
// //               </h2>
              
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                 <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
// //                   <h3 className="text-lg font-semibold mb-3 text-gray-800">Stockout Risk Distribution</h3>
// //                   <div className="h-64 flex items-end justify-between">
// //                     {Object.entries(stockoutRiskDistribution).map(([range, count]) => (
// //                       <div key={range} className="flex-1 flex flex-col items-center">
// //                         <div 
// //                           className="bg-red-600 w-3/4 rounded-t"
// //                           style={{ 
// //                             height: `${(count / Math.max(...Object.values(stockoutRiskDistribution), 1)) * 80}%`,
// //                             minHeight: count > 0 ? '12px' : '0px'
// //                           }}
// //                         />
// //                         <span className="text-sm mt-2 text-gray-700">{range}%</span>
// //                         <span className="text-xs text-gray-500">{count}</span>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
                
// //                 <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
// //                   <h3 className="text-lg font-semibold mb-3 text-gray-800">Restock History</h3>
// //                   {restockHistory.length === 0 ? (
// //                     <p className="text-sm text-gray-600">No restock history available yet</p>
// //                   ) : (
// //                     <div className="h-64 overflow-y-auto">
// //                       <table className="w-full text-sm">
// //                         <thead className="bg-gray-200 sticky top-0">
// //                           <tr>
// //                             <th className="p-3 text-left text-gray-800 font-semibold">Date</th>
// //                             <th className="p-3 text-left text-gray-800 font-semibold">Product</th>
// //                             <th className="p-3 text-right text-gray-800 font-semibold">Qty</th>
// //                             <th className="p-3 text-right text-gray-800 font-semibold">Cost</th>
// //                           </tr>
// //                         </thead>
// //                         <tbody>
// //                           {restockHistory.map((entry) => (
// //                             <tr key={entry.id} className="border-b hover:bg-gray-100 transition-colors duration-200">
// //                               <td className="p-3 text-gray-700">{entry.date}</td>
// //                               <td className="p-3 text-gray-700">{entry.product_name}</td>
// //                               <td className="p-3 text-right text-gray-700">{entry.quantity}</td>
// //                               <td className="p-3 text-right text-gray-700">${entry.cost}</td>
// //                             </tr>
// //                           ))}
// //                         </tbody>
// //                       </table>
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //         </>
// //       )}

// //       <AnimatePresence>
// //         {showRestockModal && selectedProduct && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-6"
// //             onClick={() => setShowRestockModal(false)}
// //           >
// //             <motion.div
// //               initial={{ y: -30, opacity: 0 }}
// //               animate={{ y: 0, opacity: 1 }}
// //               exit={{ y: -30, opacity: 0 }}
// //               transition={{ duration: 0.3 }}
// //               className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg"
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               <h2 className="text-2xl font-semibold mb-5 text-gray-900">Restock {selectedProduct.product_name}</h2>
// //               <div className="space-y-5">
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">Quantity to Restock</label>
// //                   <input
// //                     type="number"
// //                     min="1"
// //                     value={restockQuantity}
// //                     onChange={(e) => setRestockQuantity(parseInt(e.target.value) || 0)}
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
// //                   />
// //                 </div>
// //                 <div className="text-sm text-gray-600 space-y-1">
// //                   <p><span className="font-medium">Current Stock:</span> {selectedProduct.quantity}</p>
// //                   <p><span className="font-medium">Stock Level:</span> {selectedProduct.stock_level}</p>
// //                   <p><span className="font-medium">Estimated Cost:</span> ${(restockQuantity * (selectedProduct.price || 0)).toFixed(2)}</p>
// //                 </div>
// //                 <div className="flex justify-end space-x-3">
// //                   <button
// //                     className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm"
// //                     onClick={() => setShowRestockModal(false)}
// //                   >
// //                     Cancel
// //                   </button>
// //                   <button
// //                     className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-md flex items-center"
// //                     onClick={() => handleRestock(selectedProduct._id, restockQuantity)}
// //                     disabled={restockInProgress.includes(selectedProduct._id)}
// //                   >
// //                     {restockInProgress.includes(selectedProduct._id) ? (
// //                       <>
// //                         <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white mr-2"></div>
// //                         Processing...
// //                       </>
// //                     ) : (
// //                       "Confirm Restock"
// //                     )}
// //                   </button>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // };

// // export default RestockAlerts;

// import React, { useState, useEffect, useContext, useMemo } from "react";
// import { StoreContext } from "./StoreContext";
// import { 
//   Bell, AlertTriangle, TrendingDown, Clock, Truck, DollarSign, 
//   Calendar, CheckCircle, BarChart2, RefreshCw, Filter, ChevronDown, 
//   DownloadCloud, PieChart
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const RestockAlerts = () => {
//   const { storeId } = useContext(StoreContext);
//   const [allProducts, setAllProducts] = useState([]);
//   const [lowStockProducts, setLowStockProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [restockInProgress, setRestockInProgress] = useState([]);
//   const [sortBy, setSortBy] = useState("critical");
//   const [filterType, setFilterType] = useState("all");
//   const [expandedItem, setExpandedItem] = useState(null);
//   const [selectedSupplier, setSelectedSupplier] = useState("all");
//   const [suppliers, setSuppliers] = useState([]);
//   const [dateRange, setDateRange] = useState("30");
//   const [view, setView] = useState("list");
//   const [restockHistory, setRestockHistory] = useState([]);
//   const [showRestockModal, setShowRestockModal] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [restockQuantity, setRestockQuantity] = useState(0);
//   const [stats, setStats] = useState({
//     criticalCount: 0,
//     warningCount: 0,
//     totalValue: 0,
//     avgDaysToEmpty: 0,
//     potentialLostSales: 0,
//     stockoutRisk: 0
//   });
//   const API_URL = "http://127.0.0.1:5000";

//   useEffect(() => {
//     if (storeId) {
//       fetchLowStockProducts();
//       fetchRestockHistory();
//     }
//   }, [storeId, dateRange]);

//   const fetchLowStockProducts = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(`${API_URL}/products?storeId=${storeId}`);
//       const data = await response.json();

//       setAllProducts(data);

//       const enhancedLowStock = data.map(product => {
//         const stockLevel = parseInt(product.stock_level) || 100;
//         const quantity = parseInt(product.quantity) || 0;
//         const price = parseFloat(product.price) || 0;
//         const salesVelocity = parseFloat(product.salesVelocity) || (Math.random() * 5 + 0.5);
        
//         const daysToEmpty = quantity > 0 ? Math.ceil(quantity / salesVelocity) : 0;
//         const warningThreshold = stockLevel * 1.2;
//         const criticalThreshold = stockLevel;
        
//         const status = quantity <= criticalThreshold ? "critical" :
//                       quantity <= warningThreshold ? "warning" : "normal";
        
//         const restockCost = ((stockLevel - quantity) * price).toFixed(2);
//         const leadTime = product.leadTime || Math.floor(Math.random() * 14) + 3;
//         const profitMargin = product.profitMargin || ((price - (price * 0.6)) / price * 100).toFixed(1);
//         const potentialLostSales = (salesVelocity * leadTime * price).toFixed(2);
//         const stockoutRisk = Math.min(100, Math.max(0, Math.round(
//           (1 - (quantity / stockLevel)) * 100
//         )));

//         return {
//           ...product,
//           salesVelocity: salesVelocity.toFixed(1),
//           daysToEmpty,
//           status,
//           restockCost,
//           leadTime,
//           profitMargin,
//           potentialLostSales,
//           stockoutRisk,
//           stock_level: stockLevel,
//           quantity: quantity,
//           price: price,
//           supplier: product.supplier || "Unknown",
//           last_restocked: product.last_restocked || "N/A"
//         };
//       }).filter(p => p.quantity < p.stock_level * 1.5);

//       setLowStockProducts(enhancedLowStock);
//       setSuppliers([...new Set(enhancedLowStock.map(p => p.supplier))]);

//       const criticalCount = enhancedLowStock.filter(p => p.status === "critical").length;
//       const warningCount = enhancedLowStock.filter(p => p.status === "warning").length;
//       const totalValue = enhancedLowStock.reduce((sum, p) => sum + parseFloat(p.restockCost), 0);
//       const avgDays = enhancedLowStock.length > 0 ? 
//         Math.round(enhancedLowStock.reduce((sum, p) => sum + p.daysToEmpty, 0) / enhancedLowStock.length) : 0;
//       const potentialLostSales = enhancedLowStock.reduce((sum, p) => sum + parseFloat(p.potentialLostSales), 0);
//       const avgStockoutRisk = enhancedLowStock.length > 0 ? 
//         Math.round(enhancedLowStock.reduce((sum, p) => sum + p.stockoutRisk, 0) / enhancedLowStock.length) : 0;

//       setStats({
//         criticalCount,
//         warningCount,
//         totalValue: totalValue.toFixed(2),
//         avgDaysToEmpty: avgDays,
//         potentialLostSales: potentialLostSales.toFixed(2),
//         stockoutRisk: avgStockoutRisk
//       });
//     } catch (err) {
//       console.error("Error fetching products:", err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const fetchRestockHistory = async () => {
//     try {
//       const response = await fetch(`${API_URL}/restock-history?storeId=${storeId}`);
//       if (!response.ok) throw new Error(`Failed to fetch restock history: ${response.statusText}`);
//       const history = await response.json();
      
//       const formattedHistory = history.map(entry => ({
//         id: entry._id,
//         product_name: entry.product_name || "Unknown Product",
//         date: entry.date.split('T')[0] || "N/A",
//         quantity: parseInt(entry.quantity) || 0,
//         cost: parseFloat(entry.cost).toFixed(2) || "0.00",
//         supplier: entry.supplier || "Unknown",
//         status: entry.status || "Completed"
//       }));
      
//       setRestockHistory(formattedHistory);
//       console.log("Fetched Restock History:", formattedHistory);
//     } catch (error) {
//       console.error("Error fetching restock history:", error);
//       setRestockHistory([]);
//     }
//   };

//   const filteredProducts = useMemo(() => {
//     return lowStockProducts.filter(product => {
//       return (filterType === "all" || product.status === filterType) &&
//              (selectedSupplier === "all" || product.supplier === selectedSupplier);
//     });
//   }, [lowStockProducts, filterType, selectedSupplier]);

//   const sortedProducts = useMemo(() => {
//     return [...filteredProducts].sort((a, b) => {
//       switch (sortBy) {
//         case "critical":
//           if (a.status === "critical" && b.status !== "critical") return -1;
//           if (a.status !== "critical" && b.status === "critical") return 1;
//           return a.daysToEmpty - b.daysToEmpty;
//         case "name":
//           return (a.product_name || "").localeCompare(b.product_name || "");
//         case "supplier":
//           return (a.supplier || "").localeCompare(b.supplier || "");
//         case "days":
//           return a.daysToEmpty - b.daysToEmpty;
//         case "profit":
//           return parseFloat(b.profitMargin || 0) - parseFloat(a.profitMargin || 0);
//         case "risk":
//           return (b.stockoutRisk || 0) - (a.stockoutRisk || 0);
//         default:
//           return 0;
//       }
//     });
//   }, [filteredProducts, sortBy]);

//   const inventoryHealthScore = useMemo(() => {
//     if (allProducts.length === 0) return 100;
//     const totalProducts = allProducts.length;
//     const criticalPercentage = (stats.criticalCount / totalProducts) * 100;
//     const warningPercentage = (stats.warningCount / totalProducts) * 100;
//     const baseScore = 100 - (criticalPercentage * 2 + warningPercentage * 1);
//     console.log("Inventory Health - Total:", totalProducts, "Critical:", stats.criticalCount, "Warning:", stats.warningCount, "Score:", baseScore);
//     return Math.max(0, Math.round(baseScore));
//   }, [allProducts, stats]);

//   const stockoutRiskDistribution = useMemo(() => {
//     const ranges = { "0-25": 0, "26-50": 0, "51-75": 0, "76-100": 0 };
//     lowStockProducts.forEach(p => {
//       const risk = p.stockoutRisk || 0;
//       if (risk <= 25) ranges["0-25"]++;
//       else if (risk <= 50) ranges["26-50"]++;
//       else if (risk <= 75) ranges["51-75"]++;
//       else ranges["76-100"]++;
//     });
//     return ranges;
//   }, [lowStockProducts]);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "critical": return "bg-red-100 border-red-300 text-red-900";
//       case "warning": return "bg-yellow-100 border-yellow-300 text-yellow-900";
//       default: return "bg-green-100 border-green-300 text-green-900";
//     }
//   };

//   const getStatusBadge = (status) => {
//     switch (status) {
//       case "critical": return "bg-red-200 text-red-900";
//       case "warning": return "bg-yellow-200 text-yellow-900";
//       default: return "bg-green-200 text-green-900";
//     }
//   };

//   const toggleExpanded = (id) => {
//     setExpandedItem(expandedItem === id ? null : id);
//   };

//   const openRestockModal = (product) => {
//     setSelectedProduct(product);
//     setRestockQuantity(product.stock_level - product.quantity);
//     setShowRestockModal(true);
//   };

//   const handleRestock = async (productId, quantity) => {
//     if (!quantity || quantity <= 0) {
//       alert("Please enter a valid restock quantity.");
//       return;
//     }

//     try {
//       setRestockInProgress(prev => [...prev, productId]);
//       const response = await fetch(`${API_URL}/products/${productId}/restock?storeId=${storeId}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ quantity: parseInt(quantity) })
//       });
      
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || "Unknown restock error");
//       }
      
//       const data = await response.json();
//       const restockCost = parseFloat(data.restock_cost).toFixed(2);

//       setLowStockProducts(prev => {
//         const updatedProducts = prev.map(product => 
//           product._id === productId ? { 
//             ...product, 
//             quantity: parseInt(data.new_quantity),
//             last_restocked: new Date().toISOString().split('T')[0],
//             status: parseInt(data.new_quantity) <= product.stock_level ? "critical" :
//                     parseInt(data.new_quantity) <= product.stock_level * 1.2 ? "warning" : "normal",
//             restockCost: ((product.stock_level - parseInt(data.new_quantity)) * product.price).toFixed(2)
//           } : product
//         ).filter(p => p.quantity < p.stock_level * 1.5);

//         const criticalCount = updatedProducts.filter(p => p.status === "critical").length;
//         const warningCount = updatedProducts.filter(p => p.status === "warning").length;
//         const totalValue = updatedProducts.reduce((sum, p) => sum + parseFloat(p.restockCost), 0);
//         setStats(prev => ({
//           ...prev,
//           criticalCount,
//           warningCount,
//           totalValue: totalValue.toFixed(2)
//         }));

//         return updatedProducts;
//       });

//       setAllProducts(prev => prev.map(product => 
//         product._id === productId ? { 
//           ...product, 
//           quantity: parseInt(data.new_quantity),
//           last_restocked: new Date().toISOString().split('T')[0]
//         } : product
//       ));

//       await fetchRestockHistory();
      
//       setRestockInProgress(prev => prev.filter(id => id !== productId));
//       setShowRestockModal(false);
//     } catch (error) {
//       console.error("Restock error:", error);
//       alert(`Restock failed: ${error.message}. Please ensure all product data (e.g., price) is valid.`);
//       setRestockInProgress(prev => prev.filter(id => id !== productId));
//     }
//   };

//   const exportToCSV = () => {
//     const headers = ["Product Name", "Current Stock", "Stock Level", "Status", "Days to Empty", "Supplier", "Restock Cost"];
//     const csvData = sortedProducts.map(p => [
//       p.product_name,
//       p.quantity,
//       p.stock_level,
//       p.status,
//       p.daysToEmpty,
//       p.supplier,
//       p.restockCost
//     ]);
    
//     const csvContent = [headers.join(","), ...csvData.map(row => row.join(","))].join("\n");
//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.setAttribute("href", url);
//     link.setAttribute("download", "restock_alerts.csv");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="p-6 max-w-7xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="flex flex-col md:flex-row md:items-center md:justify-between mb-8"
//       >
//         <div>
//           <h1 className="text-3xl font-semibold mb-2 text-gray-900 flex items-center">
//             <Bell className="mr-2 text-red-600" /> 
//             Restock Alerts Dashboard
//           </h1>
//           <p className="text-gray-600">Monitor and manage your inventory efficiently</p>
//         </div>
        
//         <div className="mt-4 md:mt-0 flex items-center space-x-3">
//           <button
//             className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//               view === "list" ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
//             }`}
//             onClick={() => setView("list")}
//           >
//             List View
//           </button>
//           <button
//             className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//               view === "analytics" ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
//             }`}
//             onClick={() => setView("analytics")}
//           >
//             Analytics
//           </button>
//           <button
//             className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-all duration-200 flex items-center shadow-md"
//             onClick={exportToCSV}
//           >
//             <DownloadCloud className="mr-2 h-4 w-4" /> Export
//           </button>
//         </div>
//       </motion.div>

//       <motion.div 
//         className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-red-600 hover:shadow-xl transition-shadow duration-300">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="text-sm text-gray-600">Critical Items</p>
//               <p className="text-2xl font-bold text-gray-900">{stats.criticalCount}</p>
//             </div>
//             <AlertTriangle className="h-10 w-10 text-red-600 opacity-80" />
//           </div>
//         </div>
        
//         <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-yellow-600 hover:shadow-xl transition-shadow duration-300">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="text-sm text-gray-600">Warning Items</p>
//               <p className="text-2xl font-bold text-gray-900">{stats.warningCount}</p>
//             </div>
//             <Bell className="h-10 w-10 text-yellow-600 opacity-80" />
//           </div>
//         </div>
        
//         <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-blue-600 hover:shadow-xl transition-shadow duration-300">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="text-sm text-gray-600">Avg. Days to Empty</p>
//               <p className="text-2xl font-bold text-gray-900">{stats.avgDaysToEmpty}</p>
//             </div>
//             <Clock className="h-10 w-10 text-blue-600 opacity-80" />
//           </div>
//         </div>
        
//         <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-green-600 hover:shadow-xl transition-shadow duration-300">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="text-sm text-gray-600">Restock Value</p>
//               <p className="text-2xl font-bold text-gray-900">${stats.totalValue}</p>
//             </div>
//             <DollarSign className="h-10 w-10 text-green-600 opacity-80" />
//           </div>
//         </div>

//         <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-purple-600 hover:shadow-xl transition-shadow duration-300">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="text-sm text-gray-600">Potential Lost Sales</p>
//               <p className="text-2xl font-bold text-gray-900">${stats.potentialLostSales}</p>
//             </div>
//             <TrendingDown className="h-10 w-10 text-purple-600 opacity-80" />
//           </div>
//         </div>
        
//         <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-indigo-600 hover:shadow-xl transition-shadow duration-300">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="text-sm text-gray-600">Inventory Health</p>
//               <div className="flex items-center">
//                 <p className="text-2xl font-bold text-gray-900">{inventoryHealthScore}</p>
//                 <span className="text-sm ml-1 text-gray-500">/100</span>
//               </div>
//             </div>
//             <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
//               <div 
//                 className="h-10 w-10 rounded-full" 
//                 style={{ 
//                   background: `conic-gradient(${inventoryHealthScore > 80 ? '#10B981' : inventoryHealthScore > 50 ? '#FBBF24' : '#EF4444'} ${inventoryHealthScore}%, #E5E7EB 0)` 
//                 }} 
//               />
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       <div className="bg-white rounded-xl shadow-lg p-5 mb-8">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//           <div className="flex items-center space-x-3">
//             <Filter className="text-gray-500" />
//             <span className="text-gray-800 font-medium">Filter:</span>
            
//             <div className="flex space-x-2">
//               <button
//                 className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
//                   filterType === "all" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
//                 }`}
//                 onClick={() => setFilterType("all")}
//               >
//                 All
//               </button>
//               <button
//                 className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
//                   filterType === "critical" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
//                 }`}
//                 onClick={() => setFilterType("critical")}
//               >
//                 Critical
//               </button>
//               <button
//                 className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
//                   filterType === "warning" ? "bg-yellow-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
//                 }`}
//                 onClick={() => setFilterType("warning")}
//               >
//                 Warning
//               </button>
//             </div>
//           </div>
          
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <select
//                 className="appearance-none bg-white border border-gray-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
//                 value={selectedSupplier}
//                 onChange={(e) => setSelectedSupplier(e.target.value)}
//               >
//                 <option value="all">All Suppliers</option>
//                 {suppliers.map(supplier => (
//                   <option key={supplier} value={supplier}>{supplier}</option>
//                 ))}
//               </select>
//               <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
//             </div>
            
//             <div className="relative">
//               <select
//                 className="appearance-none bg-white border border-gray-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value)}
//               >
//                 <option value="critical">Sort by Priority</option>
//                 <option value="days">Sort by Days to Empty</option>
//                 <option value="name">Sort by Name</option>
//                 <option value="supplier">Sort by Supplier</option>
//                 <option value="profit">Sort by Profit Margin</option>
//                 <option value="risk">Sort by Stockout Risk</option>
//               </select>
//               <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
//             </div>
            
//             <div className="relative">
//               <select
//                 className="appearance-none bg-white border border-gray-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
//                 value={dateRange}
//                 onChange={(e) => setDateRange(e.target.value)}
//               >
//                 <option value="7">Last 7 Days</option>
//                 <option value="30">Last 30 Days</option>
//                 <option value="90">Last 90 Days</option>
//               </select>
//               <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
//             </div>
            
//             <button 
//               className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-all duration-200 shadow-md"
//               onClick={fetchLowStockProducts}
//             >
//               <RefreshCw className="h-5 w-5" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {isLoading ? (
//         <div className="flex justify-center items-center py-20">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
//         </div>
//       ) : (
//         <>
//           {view === "list" ? (
//             sortedProducts.length > 0 ? (
//               <div className="space-y-6">
//                 {sortedProducts.map((product) => (
//                   <motion.div 
//                     key={product._id}
//                     initial={{ x: -20, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     className={`border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${
//                       expandedItem === product._id ? "bg-gray-50" : "bg-white"
//                     }`}
//                   >
//                     <div className="flex flex-col md:flex-row md:items-center md:justify-between p-5">
//                       <div className="flex items-start md:items-center space-x-4">
//                         <div className={`p-3 rounded-lg ${getStatusColor(product.status)}`}>
//                           {product.status === "critical" ? 
//                             <AlertTriangle className="h-6 w-6" /> : 
//                             <Bell className="h-6 w-6" />}
//                         </div>
                        
//                         <div>
//                           <div className="flex items-center flex-wrap gap-2">
//                             <h3 className="font-semibold text-lg text-gray-900">{product.product_name}</h3>
//                             <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadge(product.status)} font-medium`}>
//                               {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
//                             </span>
//                           </div>
//                           <div className="flex items-center mt-2 text-sm text-gray-700">
//                             <span className={product.status === "critical" ? "font-bold text-red-700" : "font-medium"}>
//                               {product.quantity}
//                             </span>
//                             <span className="mx-1">/</span>
//                             <span>{product.stock_level} units</span>
//                             {product.daysToEmpty <= 7 && (
//                               <span className="ml-3 text-red-700 font-medium">
//                                 {product.daysToEmpty === 0 ? "Out of stock!" : `${product.daysToEmpty} days left`}
//                               </span>
//                             )}
//                             <span className="ml-4 text-gray-600">
//                               ${product.price} | Margin: {product.profitMargin}%
//                             </span>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="mt-4 md:mt-0 flex items-center space-x-3">
//                         <button
//                           className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors duration-200"
//                           onClick={() => toggleExpanded(product._id)}
//                         >
//                           {expandedItem === product._id ? "Hide Details" : "Show Details"}
//                           <ChevronDown className={`ml-1 h-5 w-5 transition-transform duration-200 ${
//                             expandedItem === product._id ? "transform rotate-180" : ""
//                           }`} />
//                         </button>
                        
//                         {restockInProgress.includes(product._id) ? (
//                           <button className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg text-sm font-medium flex items-center cursor-not-allowed shadow-sm">
//                             <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-gray-700 mr-2"></div>
//                             Restocking...
//                           </button>
//                         ) : (
//                           <button 
//                             className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-medium flex items-center transition-all duration-200 shadow-md"
//                             onClick={() => openRestockModal(product)}
//                           >
//                             <Truck className="mr-2 h-5 w-5" /> Restock Now
//                           </button>
//                         )}
//                       </div>
//                     </div>
                    
//                     <AnimatePresence>
//                       {expandedItem === product._id && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.3 }}
//                           className="overflow-hidden"
//                         >
//                           <div className="p-5 pt-0 border-t border-gray-200">
//                             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                               <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
//                                 <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
//                                   <BarChart2 className="mr-2 h-5 w-5 text-gray-600" /> Usage Metrics
//                                 </h4>
//                                 <p className="text-sm text-gray-800"><span className="font-medium">Sales Velocity:</span> {product.salesVelocity} units/day</p>
//                                 <p className="text-sm text-gray-800"><span className="font-medium">Days to Empty:</span> {product.daysToEmpty}</p>
//                                 <div className="mt-2 h-2 bg-gray-300 rounded-full overflow-hidden">
//                                   <div 
//                                     className={`h-full ${
//                                       product.daysToEmpty < 3 ? "bg-red-600" : 
//                                       product.daysToEmpty < 7 ? "bg-yellow-600" : "bg-green-600"
//                                     }`}
//                                     style={{ width: `${Math.min(100, (product.daysToEmpty / 30) * 100)}%` }}
//                                   ></div>
//                                 </div>
//                               </div>
                              
//                               <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
//                                 <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
//                                   <Truck className="mr-2 h-5 w-5 text-gray-600" /> Supplier Information
//                                 </h4>
//                                 <p className="text-sm text-gray-800"><span className="font-medium">Supplier:</span> {product.supplier}</p>
//                                 <p className="text-sm text-gray-800"><span className="font-medium">Lead Time:</span> {product.leadTime} days</p>
//                               </div>
                              
//                               <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
//                                 <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
//                                   <Calendar className="mr-2 h-5 w-5 text-gray-600" /> Restock Details
//                                 </h4>
//                                 <p className="text-sm text-gray-800"><span className="font-medium">Last Restocked:</span> {product.last_restocked}</p>
//                                 <p className="text-sm text-gray-800"><span className="font-medium">Restock Cost:</span> ${product.restockCost}</p>
//                                 <p className="text-sm text-gray-800"><span className="font-medium">Potential Lost Sales:</span> ${product.potentialLostSales}</p>
//                               </div>
//                             </div>
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </motion.div>
//                 ))}
//               </div>
//             ) : (
//               <div className="bg-white rounded-xl shadow-lg p-8 text-center">
//                 <CheckCircle className="mx-auto h-14 w-14 text-green-600" />
//                 <h3 className="mt-3 text-xl font-semibold text-gray-900">All products are well-stocked</h3>
//                 <p className="mt-2 text-sm text-gray-600">No items require immediate attention</p>
//               </div>
//             )
//           ) : (
//             <div className="bg-white rounded-xl shadow-lg p-6">
//               <h2 className="text-2xl font-semibold mb-5 flex items-center text-gray-900">
//                 <PieChart className="mr-2 h-6 w-6 text-blue-600" />
//                 Inventory Analytics
//               </h2>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
//                   <h3 className="text-lg font-semibold mb-3 text-gray-800">Stockout Risk Distribution</h3>
//                   <div className="h-64 flex items-end justify-between">
//                     {Object.entries(stockoutRiskDistribution).map(([range, count]) => (
//                       <div key={range} className="flex-1 flex flex-col items-center">
//                         <div 
//                           className="bg-red-600 w-3/4 rounded-t"
//                           style={{ 
//                             height: `${(count / Math.max(...Object.values(stockoutRiskDistribution), 1)) * 80}%`,
//                             minHeight: count > 0 ? '12px' : '0px'
//                           }}
//                         />
//                         <span className="text-sm mt-2 text-gray-700">{range}%</span>
//                         <span className="text-xs text-gray-500">{count}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
                
//                 <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
//                   <h3 className="text-lg font-semibold mb-3 text-gray-800">Restock History</h3>
//                   {restockHistory.length === 0 ? (
//                     <p className="text-sm text-gray-600">No restock history available yet</p>
//                   ) : (
//                     <div className="h-64 overflow-y-auto">
//                       <table className="w-full text-sm">
//                         <thead className="bg-gray-200 sticky top-0">
//                           <tr>
//                             <th className="p-3 text-left text-gray-800 font-semibold">Date</th>
//                             <th className="p-3 text-left text-gray-800 font-semibold">Product</th>
//                             <th className="p-3 text-right text-gray-800 font-semibold">Qty</th>
//                             <th className="p-3 text-right text-gray-800 font-semibold">Cost</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {restockHistory.map((entry) => (
//                             <tr key={entry.id} className="border-b hover:bg-gray-100 transition-colors duration-200">
//                               <td className="p-3 text-gray-700">{entry.date}</td>
//                               <td className="p-3 text-gray-700">{entry.product_name}</td>
//                               <td className="p-3 text-right text-gray-700">{entry.quantity}</td>
//                               <td className="p-3 text-right text-gray-700">${entry.cost}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}
//         </>
//       )}

//       <AnimatePresence>
//         {showRestockModal && selectedProduct && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-6"
//             onClick={() => setShowRestockModal(false)}
//           >
//             <motion.div
//               initial={{ y: -30, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -30, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <h2 className="text-2xl font-semibold mb-5 text-gray-900">Restock {selectedProduct.product_name}</h2>
//               <div className="space-y-5">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Quantity to Restock</label>
//                   <input
//                     type="number"
//                     min="1"
//                     value={restockQuantity}
//                     onChange={(e) => setRestockQuantity(parseInt(e.target.value) || 0)}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
//                   />
//                 </div>
//                 <div className="text-sm text-gray-600 space-y-1">
//                   <p><span className="font-medium">Current Stock:</span> {selectedProduct.quantity}</p>
//                   <p><span className="font-medium">Stock Level:</span> {selectedProduct.stock_level}</p>
//                   <p><span className="font-medium">Estimated Cost:</span> ${(restockQuantity * (selectedProduct.price || 0)).toFixed(2)}</p>
//                 </div>
//                 <div className="flex justify-end space-x-3">
//                   <button
//                     className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm"
//                     onClick={() => setShowRestockModal(false)}
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-md flex items-center"
//                     onClick={() => handleRestock(selectedProduct._id, restockQuantity)}
//                     disabled={restockInProgress.includes(selectedProduct._id)}
//                   >
//                     {restockInProgress.includes(selectedProduct._id) ? (
//                       <>
//                         <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white mr-2"></div>
//                         Processing...
//                       </>
//                     ) : (
//                       "Confirm Restock"
//                     )}
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default RestockAlerts;

import React, { useState, useEffect, useContext, useMemo } from "react";
import { StoreContext } from "./StoreContext";
import { 
  Bell, AlertTriangle, TrendingDown, Clock, Truck, DollarSign, 
  Calendar, CheckCircle, BarChart2, RefreshCw, Filter, ChevronDown, 
  DownloadCloud, PieChart
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const RestockAlerts = () => {
  const { storeId } = useContext(StoreContext);
  const [allProducts, setAllProducts] = useState([]);
  const [lowStockProducts, setLowStockProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [restockInProgress, setRestockInProgress] = useState([]);
  const [sortBy, setSortBy] = useState("critical");
  const [filterType, setFilterType] = useState("all");
  const [expandedItem, setExpandedItem] = useState(null);
  const [selectedSupplier, setSelectedSupplier] = useState("all");
  const [suppliers, setSuppliers] = useState([]);
  const [dateRange, setDateRange] = useState("30");
  const [view, setView] = useState("list");
  const [restockHistory, setRestockHistory] = useState([]);
  const [showRestockModal, setShowRestockModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [restockQuantity, setRestockQuantity] = useState(0);
  const [stats, setStats] = useState({
    criticalCount: 0,
    warningCount: 0,
    totalValue: 0,
    avgDaysToEmpty: 0,
    potentialLostSales: 0,
    stockoutRisk: 0
  });
  const API_URL = "http://127.0.0.1:5000";

  useEffect(() => {
    if (storeId) {
      fetchLowStockProducts();
      fetchRestockHistory();
    }
  }, [storeId, dateRange]);

  const fetchLowStockProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/products?storeId=${storeId}`);
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();

      setAllProducts(data);

      const enhancedLowStock = data.map(product => {
        const stockLevel = parseInt(product.stock_level) || 100;
        const quantity = parseInt(product.quantity) || 0;
        const price = parseFloat(product.price); // No default to 0 here; backend enforces valid price
        const salesVelocity = parseFloat(product.salesVelocity) || (Math.random() * 5 + 0.5);
        
        const daysToEmpty = quantity > 0 ? Math.ceil(quantity / salesVelocity) : 0;
        const warningThreshold = stockLevel * 1.2;
        const criticalThreshold = stockLevel;
        
        const status = quantity <= criticalThreshold ? "critical" :
                      quantity <= warningThreshold ? "warning" : "normal";
        
        const restockCost = ((stockLevel - quantity) * price).toFixed(2);
        const leadTime = product.leadTime || Math.floor(Math.random() * 14) + 3;
        const profitMargin = product.profitMargin || ((price - (price * 0.6)) / price * 100).toFixed(1);
        const potentialLostSales = (salesVelocity * leadTime * price).toFixed(2);
        const stockoutRisk = Math.min(100, Math.max(0, Math.round(
          (1 - (quantity / stockLevel)) * 100
        )));

        return {
          ...product,
          salesVelocity: salesVelocity.toFixed(1),
          daysToEmpty,
          status,
          restockCost,
          leadTime,
          profitMargin,
          potentialLostSales,
          stockoutRisk,
          stock_level: stockLevel,
          quantity: quantity,
          price: price,
          supplier: product.supplier || "Unknown",
          last_restocked: product.last_restocked || "N/A"
        };
      }).filter(p => p.quantity < p.stock_level * 1.5);

      setLowStockProducts(enhancedLowStock);
      setSuppliers([...new Set(enhancedLowStock.map(p => p.supplier))]);

      const criticalCount = enhancedLowStock.filter(p => p.status === "critical").length;
      const warningCount = enhancedLowStock.filter(p => p.status === "warning").length;
      const totalValue = enhancedLowStock.reduce((sum, p) => sum + parseFloat(p.restockCost), 0);
      const avgDays = enhancedLowStock.length > 0 ? 
        Math.round(enhancedLowStock.reduce((sum, p) => sum + p.daysToEmpty, 0) / enhancedLowStock.length) : 0;
      const potentialLostSales = enhancedLowStock.reduce((sum, p) => sum + parseFloat(p.potentialLostSales), 0);
      const avgStockoutRisk = enhancedLowStock.length > 0 ? 
        Math.round(enhancedLowStock.reduce((sum, p) => sum + p.stockoutRisk, 0) / enhancedLowStock.length) : 0;

      setStats({
        criticalCount,
        warningCount,
        totalValue: totalValue.toFixed(2),
        avgDaysToEmpty: avgDays,
        potentialLostSales: potentialLostSales.toFixed(2),
        stockoutRisk: avgStockoutRisk
      });

      console.log("Fetched Products:", enhancedLowStock); // Debug log
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchRestockHistory = async () => {
    try {
      const response = await fetch(`${API_URL}/restock-history?storeId=${storeId}`);
      if (!response.ok) throw new Error(`Failed to fetch restock history: ${response.statusText}`);
      const history = await response.json();
      
      const formattedHistory = history.map(entry => ({
        id: entry._id,
        product_name: entry.product_name || "Unknown Product",
        date: entry.date.split('T')[0] || "N/A",
        quantity: parseInt(entry.quantity) || 0,
        cost: parseFloat(entry.cost).toFixed(2),
        supplier: entry.supplier || "Unknown",
        status: entry.status || "Completed"
      }));
      
      setRestockHistory(formattedHistory);
      console.log("Fetched Restock History:", formattedHistory);
    } catch (error) {
      console.error("Error fetching restock history:", error);
      setRestockHistory([]);
    }
  };

  const filteredProducts = useMemo(() => {
    return lowStockProducts.filter(product => {
      return (filterType === "all" || product.status === filterType) &&
             (selectedSupplier === "all" || product.supplier === selectedSupplier);
    });
  }, [lowStockProducts, filterType, selectedSupplier]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      switch (sortBy) {
        case "critical":
          if (a.status === "critical" && b.status !== "critical") return -1;
          if (a.status !== "critical" && b.status === "critical") return 1;
          return a.daysToEmpty - b.daysToEmpty;
        case "name":
          return (a.product_name || "").localeCompare(b.product_name || "");
        case "supplier":
          return (a.supplier || "").localeCompare(b.supplier || "");
        case "days":
          return a.daysToEmpty - b.daysToEmpty;
        case "profit":
          return parseFloat(b.profitMargin || 0) - parseFloat(a.profitMargin || 0);
        case "risk":
          return (b.stockoutRisk || 0) - (a.stockoutRisk || 0);
        default:
          return 0;
      }
    });
  }, [filteredProducts, sortBy]);

  const inventoryHealthScore = useMemo(() => {
    if (allProducts.length === 0) return 100;
    const totalProducts = allProducts.length;
    const criticalPercentage = (stats.criticalCount / totalProducts) * 100;
    const warningPercentage = (stats.warningCount / totalProducts) * 100;
    const baseScore = 100 - (criticalPercentage * 2 + warningPercentage * 1);
    return Math.max(0, Math.round(baseScore));
  }, [allProducts, stats]);

  const stockoutRiskDistribution = useMemo(() => {
    const ranges = { "0-25": 0, "26-50": 0, "51-75": 0, "76-100": 0 };
    lowStockProducts.forEach(p => {
      const risk = p.stockoutRisk || 0;
      if (risk <= 25) ranges["0-25"]++;
      else if (risk <= 50) ranges["26-50"]++;
      else if (risk <= 75) ranges["51-75"]++;
      else ranges["76-100"]++;
    });
    return ranges;
  }, [lowStockProducts]);

  const getStatusColor = (status) => {
    switch (status) {
      case "critical": return "bg-red-100 border-red-300 text-red-900";
      case "warning": return "bg-yellow-100 border-yellow-300 text-yellow-900";
      default: return "bg-green-100 border-green-300 text-green-900";
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "critical": return "bg-red-200 text-red-900";
      case "warning": return "bg-yellow-200 text-yellow-900";
      default: return "bg-green-200 text-green-900";
    }
  };

  const toggleExpanded = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const openRestockModal = (product) => {
    setSelectedProduct(product);
    setRestockQuantity(product.stock_level - product.quantity);
    setShowRestockModal(true);
  };

  const handleRestock = async (productId, quantity) => {
    if (!quantity || quantity <= 0) {
      alert("Please enter a valid restock quantity.");
      return;
    }

    try {
      setRestockInProgress(prev => [...prev, productId]);
      const response = await fetch(`${API_URL}/products/${productId}/restock?storeId=${storeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: parseInt(quantity) })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Unknown restock error");
      }
      
      const data = await response.json();
      const restockCost = parseFloat(data.restock_cost).toFixed(2);

      setLowStockProducts(prev => {
        const updatedProducts = prev.map(product => 
          product._id === productId ? { 
            ...product, 
            quantity: parseInt(data.new_quantity),
            last_restocked: new Date().toISOString().split('T')[0],
            status: parseInt(data.new_quantity) <= product.stock_level ? "critical" :
                    parseInt(data.new_quantity) <= product.stock_level * 1.2 ? "warning" : "normal",
            restockCost: ((product.stock_level - parseInt(data.new_quantity)) * product.price).toFixed(2)
          } : product
        ).filter(p => p.quantity < p.stock_level * 1.5);

        const criticalCount = updatedProducts.filter(p => p.status === "critical").length;
        const warningCount = updatedProducts.filter(p => p.status === "warning").length;
        const totalValue = updatedProducts.reduce((sum, p) => sum + parseFloat(p.restockCost), 0);
        setStats(prev => ({
          ...prev,
          criticalCount,
          warningCount,
          totalValue: totalValue.toFixed(2)
        }));

        return updatedProducts;
      });

      setAllProducts(prev => prev.map(product => 
        product._id === productId ? { 
          ...product, 
          quantity: parseInt(data.new_quantity),
          last_restocked: new Date().toISOString().split('T')[0]
        } : product
      ));

      await fetchRestockHistory();
      
      setRestockInProgress(prev => prev.filter(id => id !== productId));
      setShowRestockModal(false);
    } catch (error) {
      console.error("Restock error:", error);
      alert(`Restock failed: ${error.message}. Please ensure product price is set in the database.`);
      setRestockInProgress(prev => prev.filter(id => id !== productId));
    }
  };

  const exportToCSV = () => {
    const headers = ["Product Name", "Current Stock", "Stock Level", "Status", "Days to Empty", "Supplier", "Restock Cost"];
    const csvData = sortedProducts.map(p => [
      p.product_name,
      p.quantity,
      p.stock_level,
      p.status,
      p.daysToEmpty,
      p.supplier,
      p.restockCost
    ]);
    
    const csvContent = [headers.join(","), ...csvData.map(row => row.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "restock_alerts.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between mb-8"
      >
        <div>
          <h1 className="text-3xl font-semibold mb-2 text-gray-900 flex items-center">
            <Bell className="mr-2 text-red-600" /> 
            Restock Alerts Dashboard
          </h1>
          <p className="text-gray-600">Monitor and manage your inventory efficiently</p>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center space-x-3">
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              view === "list" ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
            }`}
            onClick={() => setView("list")}
          >
            List View
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              view === "analytics" ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
            }`}
            onClick={() => setView("analytics")}
          >
            Analytics
          </button>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-all duration-200 flex items-center shadow-md"
            onClick={exportToCSV}
          >
            <DownloadCloud className="mr-2 h-4 w-4" /> Export
          </button>
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-red-600 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Critical Items</p>
              <p className="text-2xl font-bold text-gray-900">{stats.criticalCount}</p>
            </div>
            <AlertTriangle className="h-10 w-10 text-red-600 opacity-80" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-yellow-600 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Warning Items</p>
              <p className="text-2xl font-bold text-gray-900">{stats.warningCount}</p>
            </div>
            <Bell className="h-10 w-10 text-yellow-600 opacity-80" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-blue-600 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Avg. Days to Empty</p>
              <p className="text-2xl font-bold text-gray-900">{stats.avgDaysToEmpty}</p>
            </div>
            <Clock className="h-10 w-10 text-blue-600 opacity-80" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-green-600 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Restock Value</p>
              <p className="text-2xl font-bold text-gray-900">${stats.totalValue}</p>
            </div>
            <DollarSign className="h-10 w-10 text-green-600 opacity-80" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-purple-600 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Potential Lost Sales</p>
              <p className="text-2xl font-bold text-gray-900">${stats.potentialLostSales}</p>
            </div>
            <TrendingDown className="h-10 w-10 text-purple-600 opacity-80" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-indigo-600 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Inventory Health</p>
              <div className="flex items-center">
                <p className="text-2xl font-bold text-gray-900">{inventoryHealthScore}</p>
                <span className="text-sm ml-1 text-gray-500">/100</span>
              </div>
            </div>
            <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
              <div 
                className="h-10 w-10 rounded-full" 
                style={{ 
                  background: `conic-gradient(${inventoryHealthScore > 80 ? '#10B981' : inventoryHealthScore > 50 ? '#FBBF24' : '#EF4444'} ${inventoryHealthScore}%, #E5E7EB 0)` 
                }} 
              />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="bg-white rounded-xl shadow-lg p-5 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-3">
            <Filter className="text-gray-500" />
            <span className="text-gray-800 font-medium">Filter:</span>
            
            <div className="flex space-x-2">
              <button
                className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                  filterType === "all" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
                onClick={() => setFilterType("all")}
              >
                All
              </button>
              <button
                className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                  filterType === "critical" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
                onClick={() => setFilterType("critical")}
              >
                Critical
              </button>
              <button
                className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                  filterType === "warning" ? "bg-yellow-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
                onClick={() => setFilterType("warning")}
              >
                Warning
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
                value={selectedSupplier}
                onChange={(e) => setSelectedSupplier(e.target.value)}
              >
                <option value="all">All Suppliers</option>
                {suppliers.map(supplier => (
                  <option key={supplier} value={supplier}>{supplier}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            </div>
            
          <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="critical">Sort by Priority</option>
                <option value="days">Sort by Days to Empty</option>
                <option value="name">Sort by Name</option>
                <option value="supplier">Sort by Supplier</option>
                <option value="profit">Sort by Profit Margin</option>
                <option value="risk">Sort by Stockout Risk</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            </div>
            
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
              >
                <option value="7">Last 7 Days</option>
                <option value="30">Last 30 Days</option>
                <option value="90">Last 90 Days</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            </div>
            
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-all duration-200 shadow-md"
              onClick={fetchLowStockProducts}
            >
              <RefreshCw className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <>
          {view === "list" ? (
            sortedProducts.length > 0 ? (
              <div className="space-y-6">
                {sortedProducts.map((product) => (
                  <motion.div 
                    key={product._id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className={`border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${
                      expandedItem === product._id ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between p-5">
                      <div className="flex items-start md:items-center space-x-4">
                        <div className={`p-3 rounded-lg ${getStatusColor(product.status)}`}>
                          {product.status === "critical" ? 
                            <AlertTriangle className="h-6 w-6" /> : 
                            <Bell className="h-6 w-6" />}
                        </div>
                        
                        <div>
                          <div className="flex items-center flex-wrap gap-2">
                            <h3 className="font-semibold text-lg text-gray-900">{product.product_name}</h3>
                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadge(product.status)} font-medium`}>
                              {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                            </span>
                          </div>
                          <div className="flex items-center mt-2 text-sm text-gray-700">
                            <span className={product.status === "critical" ? "font-bold text-red-700" : "font-medium"}>
                              {product.quantity}
                            </span>
                            <span className="mx-1">/</span>
                            <span>{product.stock_level} units</span>
                            {product.daysToEmpty <= 7 && (
                              <span className="ml-3 text-red-700 font-medium">
                                {product.daysToEmpty === 0 ? "Out of stock!" : `${product.daysToEmpty} days left`}
                              </span>
                            )}
                            <span className="ml-4 text-gray-600">
                              ${product.price.toFixed(2)} | Margin: {product.profitMargin}%
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 md:mt-0 flex items-center space-x-3">
                        <button
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors duration-200"
                          onClick={() => toggleExpanded(product._id)}
                        >
                          {expandedItem === product._id ? "Hide Details" : "Show Details"}
                          <ChevronDown className={`ml-1 h-5 w-5 transition-transform duration-200 ${
                            expandedItem === product._id ? "transform rotate-180" : ""
                          }`} />
                        </button>
                        
                        {restockInProgress.includes(product._id) ? (
                          <button className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg text-sm font-medium flex items-center cursor-not-allowed shadow-sm">
                            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-gray-700 mr-2"></div>
                            Restocking...
                          </button>
                        ) : (
                          <button 
                            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-medium flex items-center transition-all duration-200 shadow-md"
                            onClick={() => openRestockModal(product)}
                          >
                            <Truck className="mr-2 h-5 w-5" /> Restock Now
                          </button>
                        )}
                      </div>
                    </div>
                    
                    <AnimatePresence>
                      {expandedItem === product._id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 pt-0 border-t border-gray-200">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                              <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                                <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                  <BarChart2 className="mr-2 h-5 w-5 text-gray-600" /> Usage Metrics
                                </h4>
                                <p className="text-sm text-gray-800"><span className="font-medium">Sales Velocity:</span> {product.salesVelocity} units/day</p>
                                <p className="text-sm text-gray-800"><span className="font-medium">Days to Empty:</span> {product.daysToEmpty}</p>
                                <div className="mt-2 h-2 bg-gray-300 rounded-full overflow-hidden">
                                  <div 
                                    className={`h-full ${
                                      product.daysToEmpty < 3 ? "bg-red-600" : 
                                      product.daysToEmpty < 7 ? "bg-yellow-600" : "bg-green-600"
                                    }`}
                                    style={{ width: `${Math.min(100, (product.daysToEmpty / 30) * 100)}%` }}
                                  ></div>
                                </div>
                              </div>
                              
                              <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                                <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                  <Truck className="mr-2 h-5 w-5 text-gray-600" /> Supplier Information
                                </h4>
                                <p className="text-sm text-gray-800"><span className="font-medium">Supplier:</span> {product.supplier}</p>
                                <p className="text-sm text-gray-800"><span className="font-medium">Lead Time:</span> {product.leadTime} days</p>
                              </div>
                              
                              <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                                <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                  <Calendar className="mr-2 h-5 w-5 text-gray-600" /> Restock Details
                                </h4>
                                <p className="text-sm text-gray-800"><span className="font-medium">Last Restocked:</span> {product.last_restocked}</p>
                                <p className="text-sm text-gray-800"><span className="font-medium">Restock Cost:</span> ${product.restockCost}</p>
                                <p className="text-sm text-gray-800"><span className="font-medium">Potential Lost Sales:</span> ${product.potentialLostSales}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <CheckCircle className="mx-auto h-14 w-14 text-green-600" />
                <h3 className="mt-3 text-xl font-semibold text-gray-900">All products are well-stocked</h3>
                <p className="mt-2 text-sm text-gray-600">No items require immediate attention</p>
              </div>
            )
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-5 flex items-center text-gray-900">
                <PieChart className="mr-2 h-6 w-6 text-blue-600" />
                Inventory Analytics
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Stockout Risk Distribution</h3>
                  <div className="h-64 flex items-end justify-between">
                    {Object.entries(stockoutRiskDistribution).map(([range, count]) => (
                      <div key={range} className="flex-1 flex flex-col items-center">
                        <div 
                          className="bg-red-600 w-3/4 rounded-t"
                          style={{ 
                            height: `${(count / Math.max(...Object.values(stockoutRiskDistribution), 1)) * 80}%`,
                            minHeight: count > 0 ? '12px' : '0px'
                          }}
                        />
                        <span className="text-sm mt-2 text-gray-700">{range}%</span>
                        <span className="text-xs text-gray-500">{count}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Restock History</h3>
                  {restockHistory.length === 0 ? (
                    <p className="text-sm text-gray-600">No restock history available yet</p>
                  ) : (
                    <div className="h-64 overflow-y-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-200 sticky top-0">
                          <tr>
                            <th className="p-3 text-left text-gray-800 font-semibold">Date</th>
                            <th className="p-3 text-left text-gray-800 font-semibold">Product</th>
                            <th className="p-3 text-right text-gray-800 font-semibold">Qty</th>
                            <th className="p-3 text-right text-gray-800 font-semibold">Cost</th>
                          </tr>
                        </thead>
                        <tbody>
                          {restockHistory.map((entry) => (
                            <tr key={entry.id} className="border-b hover:bg-gray-100 transition-colors duration-200">
                              <td className="p-3 text-gray-700">{entry.date}</td>
                              <td className="p-3 text-gray-700">{entry.product_name}</td>
                              <td className="p-3 text-right text-gray-700">{entry.quantity}</td>
                              <td className="p-3 text-right text-gray-700">${entry.cost}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}

      <AnimatePresence>
        {showRestockModal && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-6"
            onClick={() => setShowRestockModal(false)}
          >
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-semibold mb-5 text-gray-900">Restock {selectedProduct.product_name}</h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity to Restock</label>
                  <input
                    type="number"
                    min="1"
                    value={restockQuantity}
                    onChange={(e) => setRestockQuantity(parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                  />
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><span className="font-medium">Current Stock:</span> {selectedProduct.quantity}</p>
                  <p><span className="font-medium">Stock Level:</span> {selectedProduct.stock_level}</p>
                  <p><span className="font-medium">Estimated Cost:</span> ${(restockQuantity * selectedProduct.price).toFixed(2)}</p>
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm"
                    onClick={() => setShowRestockModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-md flex items-center"
                    onClick={() => handleRestock(selectedProduct._id, restockQuantity)}
                    disabled={restockInProgress.includes(selectedProduct._id)}
                  >
                    {restockInProgress.includes(selectedProduct._id) ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      "Confirm Restock"
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RestockAlerts;