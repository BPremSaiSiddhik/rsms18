// // // // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // // // // // // import {
// // // // // // // // // // // //   Search, X, ChevronDown, AlertCircle, CheckCircle,
// // // // // // // // // // // //   Package, CreditCard, Gift, Sun, Moon
// // // // // // // // // // // // } from "lucide-react";

// // // // // // // // // // // // // Returns Management Component (No Header/Navbar)
// // // // // // // // // // // // const ReturnsManagement = () => {
// // // // // // // // // // // //   const [storeId] = useState(localStorage.getItem("storeId") || "");
// // // // // // // // // // // //   const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
// // // // // // // // // // // //   const [searchInput, setSearchInput] = useState("");
// // // // // // // // // // // //   const [searchResults, setSearchResults] = useState(null);
// // // // // // // // // // // //   const [selectedSale, setSelectedSale] = useState(null);
// // // // // // // // // // // //   const [returnItems, setReturnItems] = useState([]);
// // // // // // // // // // // //   const [returnReason, setReturnReason] = useState("");
// // // // // // // // // // // //   const [returnNotes, setReturnNotes] = useState("");
// // // // // // // // // // // //   const [returnCondition, setReturnCondition] = useState("resellable");
// // // // // // // // // // // //   const [refundOption, setRefundOption] = useState("original");
// // // // // // // // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // //   const [success, setSuccess] = useState(null);

// // // // // // // // // // // //   const themes = {
// // // // // // // // // // // //     light: {
// // // // // // // // // // // //       background: 'bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50',
// // // // // // // // // // // //       text: 'text-gray-800',
// // // // // // // // // // // //       secondaryText: 'text-gray-600',
// // // // // // // // // // // //       accent: 'text-purple-600',
// // // // // // // // // // // //       button: 'bg-purple-600 hover:bg-purple-700 text-white',
// // // // // // // // // // // //       secondaryButton: 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50',
// // // // // // // // // // // //       card: 'bg-white',
// // // // // // // // // // // //       border: 'border-gray-300',
// // // // // // // // // // // //       glow: 'shadow-md hover:shadow-lg',
// // // // // // // // // // // //       input: 'bg-violet-50 border-gray-300',
// // // // // // // // // // // //       error: 'bg-red-50 text-red-600 border-red-200',
// // // // // // // // // // // //       success: 'bg-green-50 text-green-600 border-green-200',
// // // // // // // // // // // //     },
// // // // // // // // // // // //     dark: {
// // // // // // // // // // // //       background: 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700',
// // // // // // // // // // // //       text: 'text-gray-100',
// // // // // // // // // // // //       secondaryText: 'text-gray-400',
// // // // // // // // // // // //       accent: 'text-purple-400',
// // // // // // // // // // // //       button: 'bg-purple-600 hover:bg-purple-700 text-white',
// // // // // // // // // // // //       secondaryButton: 'bg-gray-800 text-purple-400 border-2 border-purple-400 hover:bg-gray-700',
// // // // // // // // // // // //       card: 'bg-gray-800',
// // // // // // // // // // // //       border: 'border-gray-700',
// // // // // // // // // // // //       glow: 'shadow-[0_0_15px_rgba(129,140,248,0.4)] hover:shadow-[0_0_20px_rgba(129,140,248,0.6)]',
// // // // // // // // // // // //       input: 'bg-gray-700 border-gray-600',
// // // // // // // // // // // //       error: 'bg-red-900/30 text-red-400 border-red-700',
// // // // // // // // // // // //       success: 'bg-green-900/30 text-green-300 border-green-700',
// // // // // // // // // // // //     },
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const currentTheme = isDarkMode ? themes.dark : themes.light;

// // // // // // // // // // // //   const toggleTheme = () => {
// // // // // // // // // // // //     setIsDarkMode((prev) => {
// // // // // // // // // // // //       const newMode = !prev;
// // // // // // // // // // // //       localStorage.setItem('theme', newMode ? 'dark' : 'light');
// // // // // // // // // // // //       return newMode;
// // // // // // // // // // // //     });
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Search for sales transaction
// // // // // // // // // // // //   const handleSearch = async () => {
// // // // // // // // // // // //     if (!searchInput.trim()) {
// // // // // // // // // // // //       setError("Please enter a search term (serial number, barcode, or customer phone).");
// // // // // // // // // // // //       return;
// // // // // // // // // // // //     }

// // // // // // // // // // // //     setIsLoading(true);
// // // // // // // // // // // //     setError(null);
// // // // // // // // // // // //     setSearchResults(null);
// // // // // // // // // // // //     setSelectedSale(null);

// // // // // // // // // // // //     try {
// // // // // // // // // // // //       // Try fetching sale by serialNumber
// // // // // // // // // // // //       const saleResponse = await fetch(`http://localhost:5010/api/daily-sales2?storeId=${storeId}&date=${new Date().toISOString().split('T')[0]}`, {
// // // // // // // // // // // //         headers: { storeId }
// // // // // // // // // // // //       });
// // // // // // // // // // // //       const saleData = await saleResponse.json();
// // // // // // // // // // // //       if (saleResponse.ok && saleData[new Date().toISOString().split('T')[0]]) {
// // // // // // // // // // // //         const sales = saleData[new Date().toISOString().split('T')[0]].sales;
// // // // // // // // // // // //         const matchedSale = sales.find(sale => sale.serialNumber === searchInput);
// // // // // // // // // // // //         if (matchedSale) {
// // // // // // // // // // // //           setSearchResults({ type: 'sale', data: matchedSale });
// // // // // // // // // // // //           return;
// // // // // // // // // // // //         }
// // // // // // // // // // // //       }

// // // // // // // // // // // //       // Try fetching product by barcode
// // // // // // // // // // // //       const productResponse = await fetch(`http://localhost:5000/products?storeId=${storeId}`);
// // // // // // // // // // // //       const products = await productResponse.json();
// // // // // // // // // // // //       if (productResponse.ok) {
// // // // // // // // // // // //         const matchedProduct = products.find(p => p.barcode === searchInput);
// // // // // // // // // // // //         if (matchedProduct) {
// // // // // // // // // // // //           setSearchResults({ type: 'product', data: matchedProduct });
// // // // // // // // // // // //           return;
// // // // // // // // // // // //         }
// // // // // // // // // // // //       }

// // // // // // // // // // // //       // Try fetching customer by phone
// // // // // // // // // // // //       const customerResponse = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}`);
// // // // // // // // // // // //       const customers = await customerResponse.json();
// // // // // // // // // // // //       if (customerResponse.ok && customers.customers) {
// // // // // // // // // // // //         const matchedCustomer = customers.customers.find(c => c.phone === searchInput);
// // // // // // // // // // // //         if (matchedCustomer) {
// // // // // // // // // // // //           const purchaseHistoryResponse = await fetch(`http://localhost:5008/api/customers/${matchedCustomer.phone}/purchase-history?storeId=${storeId}`);
// // // // // // // // // // // //           const purchaseHistory = await purchaseHistoryResponse.json();
// // // // // // // // // // // //           if (purchaseHistory.purchase_history) {
// // // // // // // // // // // //             setSearchResults({ type: 'customer', data: { customer: matchedCustomer, purchases: purchaseHistory.purchase_history } });
// // // // // // // // // // // //             return;
// // // // // // // // // // // //           }
// // // // // // // // // // // //         }
// // // // // // // // // // // //       }

// // // // // // // // // // // //       setError("No matching sale, product, or customer found.");
// // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // //       setError("Error searching for transaction: " + err.message);
// // // // // // // // // // // //     } finally {
// // // // // // // // // // // //       setIsLoading(false);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Handle selecting items for return
// // // // // // // // // // // //   const handleItemSelection = (product, quantity) => {
// // // // // // // // // // // //     setReturnItems(prev => {
// // // // // // // // // // // //       const existing = prev.find(item => item.product._id === product._id);
// // // // // // // // // // // //       if (existing) {
// // // // // // // // // // // //         return prev.map(item =>
// // // // // // // // // // // //           item.product._id === product._id ? { ...item, quantity: Math.min(quantity, product.quantity) } : item
// // // // // // // // // // // //         );
// // // // // // // // // // // //       }
// // // // // // // // // // // //       return [...prev, { product, quantity: Math.min(quantity, product.quantity), condition: returnCondition }];
// // // // // // // // // // // //     });
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Submit return
// // // // // // // // // // // //   const handleSubmitReturn = async () => {
// // // // // // // // // // // //     if (!selectedSale || returnItems.length === 0 || !returnReason) {
// // // // // // // // // // // //       setError("Please select a sale, items to return, and a reason.");
// // // // // // // // // // // //       return;
// // // // // // // // // // // //     }

// // // // // // // // // // // //     setIsLoading(true);
// // // // // // // // // // // //     setError(null);
// // // // // // // // // // // //     setSuccess(null);

// // // // // // // // // // // //     const returnData = {
// // // // // // // // // // // //       storeId,
// // // // // // // // // // // //       serialNumber: selectedSale.serialNumber,
// // // // // // // // // // // //       items: returnItems.map(item => ({
// // // // // // // // // // // //         productId: item.product._id,
// // // // // // // // // // // //         barcode: item.product.barcode,
// // // // // // // // // // // //         quantity: item.quantity,
// // // // // // // // // // // //         condition: item.condition,
// // // // // // // // // // // //       })),
// // // // // // // // // // // //       reason: returnReason,
// // // // // // // // // // // //       notes: returnNotes,
// // // // // // // // // // // //       refundOption,
// // // // // // // // // // // //       date: new Date().toISOString(),
// // // // // // // // // // // //     };

// // // // // // // // // // // //     try {
// // // // // // // // // // // //       // Post return to the returns endpoint
// // // // // // // // // // // //       const response = await fetch(`http://localhost:5010/api/returns`, {
// // // // // // // // // // // //         method: "POST",
// // // // // // // // // // // //         headers: { "Content-Type": "application/json", storeId },
// // // // // // // // // // // //         body: JSON.stringify(returnData),
// // // // // // // // // // // //       });

// // // // // // // // // // // //       if (!response.ok) throw new Error("Failed to process return");

// // // // // // // // // // // //       // Update inventory
// // // // // // // // // // // //       for (const item of returnItems) {
// // // // // // // // // // // //         if (item.condition === "resellable") {
// // // // // // // // // // // //           await fetch(`http://localhost:5000/products/${item.product._id}/restock?storeId=${storeId}`, {
// // // // // // // // // // // //             method: "POST",
// // // // // // // // // // // //             headers: { "Content-Type": "application/json" },
// // // // // // // // // // // //             body: JSON.stringify({ quantity: item.quantity }),
// // // // // // // // // // // //           });
// // // // // // // // // // // //         } else {
// // // // // // // // // // // //           await fetch(`http://localhost:5000/damage-items?storeId=${storeId}`, {
// // // // // // // // // // // //             method: "POST",
// // // // // // // // // // // //             headers: { "Content-Type": "application/json" },
// // // // // // // // // // // //             body: JSON.stringify({ productId: item.product._id, quantity: item.quantity, reason: returnReason }),
// // // // // // // // // // // //           });
// // // // // // // // // // // //         }
// // // // // // // // // // // //       }

// // // // // // // // // // // //       // Update customer loyalty points if applicable
// // // // // // // // // // // //       if (refundOption === "loyalty" && selectedSale.customer_phone) {
// // // // // // // // // // // //         const customerResponse = await fetch(`http://localhost:5008/api/customers/${selectedSale.customer_phone}?storeId=${storeId}`);
// // // // // // // // // // // //         const customer = await customerResponse.json();
// // // // // // // // // // // //         const points = returnItems.reduce((sum, item) => sum + item.quantity * (item.product.total_price / item.product.quantity), 0);
// // // // // // // // // // // //         await fetch(`http://localhost:5008/api/customers/${selectedSale.customer_phone}?storeId=${storeId}`, {
// // // // // // // // // // // //           method: "PUT",
// // // // // // // // // // // //           headers: { "Content-Type": "application/json" },
// // // // // // // // // // // //           body: JSON.stringify({ ...customer.customers[0], loyaltyPoints: customer.customers[0].loyaltyPoints + points, storeId }),
// // // // // // // // // // // //         });
// // // // // // // // // // // //       }

// // // // // // // // // // // //       setSuccess("Return processed successfully!");
// // // // // // // // // // // //       setTimeout(() => {
// // // // // // // // // // // //         setSearchInput("");
// // // // // // // // // // // //         setSearchResults(null);
// // // // // // // // // // // //         setSelectedSale(null);
// // // // // // // // // // // //         setReturnItems([]);
// // // // // // // // // // // //         setReturnReason("");
// // // // // // // // // // // //         setReturnNotes("");
// // // // // // // // // // // //         setRefundOption("original");
// // // // // // // // // // // //       }, 2000);
// // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // //       setError("Error processing return: " + err.message);
// // // // // // // // // // // //     } finally {
// // // // // // // // // // // //       setIsLoading(false);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className={`${currentTheme.background} ${currentTheme.text} min-h-screen overflow-hidden relative font-sans p-6`}>
// // // // // // // // // // // //       {/* Theme Toggle */}
// // // // // // // // // // // //       <motion.button
// // // // // // // // // // // //         whileHover={{ scale: 1.1, rotate: 10 }}
// // // // // // // // // // // //         whileTap={{ scale: 0.9 }}
// // // // // // // // // // // //         onClick={toggleTheme}
// // // // // // // // // // // //         className={`fixed top-6 right-6 z-[100] p-3 rounded-full ${currentTheme.card} ${currentTheme.glow} transition-all`}
// // // // // // // // // // // //       >
// // // // // // // // // // // //         {isDarkMode ? <Sun className={`w-6 h-6 ${currentTheme.accent}`} /> : <Moon className={`w-6 h-6 ${currentTheme.accent}`} />}
// // // // // // // // // // // //       </motion.button>

// // // // // // // // // // // //       {/* Main Content */}
// // // // // // // // // // // //       <div className="max-w-6xl mx-auto pt-12 pb-16">
// // // // // // // // // // // //         <motion.div
// // // // // // // // // // // //           initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // //           transition={{ duration: 0.6 }}
// // // // // // // // // // // //           className="text-center mb-10"
// // // // // // // // // // // //         >
// // // // // // // // // // // //           <h1 className={`text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600`}>
// // // // // // // // // // // //             Returns Management
// // // // // // // // // // // //           </h1>
// // // // // // // // // // // //           <p className={`${currentTheme.secondaryText} mt-4 text-lg max-w-2xl mx-auto font-medium`}>
// // // // // // // // // // // //             Efficiently handle product returns with ease and accuracy.
// // // // // // // // // // // //           </p>
// // // // // // // // // // // //         </motion.div>

// // // // // // // // // // // //         {/* Search Section */}
// // // // // // // // // // // //         <motion.div
// // // // // // // // // // // //           className={`${currentTheme.card} p-6 rounded-xl shadow-xl ${currentTheme.border}`}
// // // // // // // // // // // //           initial={{ opacity: 0 }}
// // // // // // // // // // // //           animate={{ opacity: 1 }}
// // // // // // // // // // // //           transition={{ delay: 0.2 }}
// // // // // // // // // // // //         >
// // // // // // // // // // // //           <div className="flex items-center gap-4">
// // // // // // // // // // // //             <Search className={`w-6 h-6 ${currentTheme.accent}`} />
// // // // // // // // // // // //             <input
// // // // // // // // // // // //               type="text"
// // // // // // // // // // // //               value={searchInput}
// // // // // // // // // // // //               onChange={(e) => setSearchInput(e.target.value)}
// // // // // // // // // // // //               placeholder="Enter serial number, barcode, or customer phone"
// // // // // // // // // // // //               className={`w-full p-3 ${currentTheme.input} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
// // // // // // // // // // // //             />
// // // // // // // // // // // //             <motion.button
// // // // // // // // // // // //               whileHover={{ scale: 1.05 }}
// // // // // // // // // // // //               whileTap={{ scale: 0.95 }}
// // // // // // // // // // // //               onClick={handleSearch}
// // // // // // // // // // // //               disabled={isLoading}
// // // // // // // // // // // //               className={`${currentTheme.button} px-6 py-3 rounded-lg`}
// // // // // // // // // // // //             >
// // // // // // // // // // // //               {isLoading ? "Searching..." : "Search"}
// // // // // // // // // // // //             </motion.button>
// // // // // // // // // // // //           </div>

// // // // // // // // // // // //           {error && (
// // // // // // // // // // // //             <motion.div
// // // // // // // // // // // //               initial={{ opacity: 0 }}
// // // // // // // // // // // //               animate={{ opacity: 1 }}
// // // // // // // // // // // //               className={`mt-4 p-4 ${currentTheme.error} rounded-lg flex items-center gap-2`}
// // // // // // // // // // // //             >
// // // // // // // // // // // //               <AlertCircle className="w-5 h-5" />
// // // // // // // // // // // //               <p>{error}</p>
// // // // // // // // // // // //             </motion.div>
// // // // // // // // // // // //           )}

// // // // // // // // // // // //           {searchResults && (
// // // // // // // // // // // //             <motion.div
// // // // // // // // // // // //               initial={{ opacity: 0, y: 20 }}
// // // // // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // //               className="mt-6"
// // // // // // // // // // // //             >
// // // // // // // // // // // //               {searchResults.type === 'sale' && (
// // // // // // // // // // // //                 <div>
// // // // // // // // // // // //                   <h3 className="text-lg font-semibold">Sale Found</h3>
// // // // // // // // // // // //                   <p>Serial Number: {searchResults.data.serialNumber}</p>
// // // // // // // // // // // //                   <p>Total Amount: ${searchResults.data.total_amount}</p>
// // // // // // // // // // // //                   <p>Date: {searchResults.data.date}</p>
// // // // // // // // // // // //                   <button
// // // // // // // // // // // //                     onClick={() => setSelectedSale(searchResults.data)}
// // // // // // // // // // // //                     className={`${currentTheme.secondaryButton} mt-2 px-4 py-2 rounded-lg`}
// // // // // // // // // // // //                   >
// // // // // // // // // // // //                     Process Return
// // // // // // // // // // // //                   </button>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               )}
// // // // // // // // // // // //               {searchResults.type === 'product' && (
// // // // // // // // // // // //                 <div>
// // // // // // // // // // // //                   <h3 className="text-lg font-semibold">Product Found</h3>
// // // // // // // // // // // //                   <p>Name: {searchResults.data.product_name}</p>
// // // // // // // // // // // //                   <p>Barcode: {searchResults.data.barcode}</p>
// // // // // // // // // // // //                   <p>Quantity: {searchResults.data.quantity}</p>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               )}
// // // // // // // // // // // //               {searchResults.type === 'customer' && (
// // // // // // // // // // // //                 <div>
// // // // // // // // // // // //                   <h3 className="text-lg font-semibold">Customer Found</h3>
// // // // // // // // // // // //                   <p>Name: {searchResults.data.customer.name}</p>
// // // // // // // // // // // //                   <p>Phone: {searchResults.data.customer.phone}</p>
// // // // // // // // // // // //                   <select
// // // // // // // // // // // //                     onChange={(e) => setSelectedSale(searchResults.data.purchases[e.target.value])}
// // // // // // // // // // // //                     className={`${currentTheme.input} p-2 mt-2 rounded-lg`}
// // // // // // // // // // // //                   >
// // // // // // // // // // // //                     <option value="">Select a purchase</option>
// // // // // // // // // // // //                     {searchResults.data.purchases.map((purchase, idx) => (
// // // // // // // // // // // //                       <option key={idx} value={idx}>Serial: {purchase.serialNumber} - ${purchase.total_amount}</option>
// // // // // // // // // // // //                     ))}
// // // // // // // // // // // //                   </select>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               )}
// // // // // // // // // // // //             </motion.div>
// // // // // // // // // // // //           )}
// // // // // // // // // // // //         </motion.div>

// // // // // // // // // // // //         {/* Return Form */}
// // // // // // // // // // // //         {selectedSale && (
// // // // // // // // // // // //           <motion.div
// // // // // // // // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // // // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // //             className={`${currentTheme.card} mt-8 p-6 rounded-xl shadow-xl ${currentTheme.border}`}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <h2 className="text-2xl font-bold mb-4">Process Return</h2>
// // // // // // // // // // // //             <div className="mb-6">
// // // // // // // // // // // //               <h3 className="font-semibold">Selected Sale</h3>
// // // // // // // // // // // //               <p>Serial Number: {selectedSale.serialNumber}</p>
// // // // // // // // // // // //               <p>Total Amount: ${selectedSale.total_amount}</p>
// // // // // // // // // // // //               <p>Date: {selectedSale.date}</p>
// // // // // // // // // // // //             </div>

// // // // // // // // // // // //             <div className="mb-6">
// // // // // // // // // // // //               <h3 className="font-semibold">Select Items to Return</h3>
// // // // // // // // // // // //               {selectedSale.products.map((product, idx) => (
// // // // // // // // // // // //                 <div key={idx} className={`flex items-center gap-4 py-2 border-b ${currentTheme.border}`}>
// // // // // // // // // // // //                   <input
// // // // // // // // // // // //                     type="number"
// // // // // // // // // // // //                     min="0"
// // // // // // // // // // // //                     max={product.quantity}
// // // // // // // // // // // //                     value={returnItems.find(i => i.product._id === product._id)?.quantity || 0}
// // // // // // // // // // // //                     onChange={(e) => handleItemSelection(product, parseInt(e.target.value))}
// // // // // // // // // // // //                     className={`${currentTheme.input} w-20 p-2 rounded-lg`}
// // // // // // // // // // // //                   />
// // // // // // // // // // // //                   <span>{product.name} (Qty: {product.quantity}, Price: ${product.total_price / product.quantity})</span>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               ))}
// // // // // // // // // // // //             </div>

// // // // // // // // // // // //             <div className="mb-6">
// // // // // // // // // // // //               <label className="block font-medium mb-2">Return Reason</label>
// // // // // // // // // // // //               <select
// // // // // // // // // // // //                 value={returnReason}
// // // // // // // // // // // //                 onChange={(e) => setReturnReason(e.target.value)}
// // // // // // // // // // // //                 className={`${currentTheme.input} w-full p-3 rounded-lg`}
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 <option value="">Select a reason</option>
// // // // // // // // // // // //                 <option value="defective">Defective Product</option>
// // // // // // // // // // // //                 <option value="wrong_item">Wrong Item</option>
// // // // // // // // // // // //                 <option value="damaged_shipping">Damaged During Shipping</option>
// // // // // // // // // // // //                 <option value="changed_mind">Customer Changed Mind</option>
// // // // // // // // // // // //               </select>
// // // // // // // // // // // //             </div>

// // // // // // // // // // // //             <div className="mb-6">
// // // // // // // // // // // //               <label className="block font-medium mb-2">Additional Notes</label>
// // // // // // // // // // // //               <textarea
// // // // // // // // // // // //                 value={returnNotes}
// // // // // // // // // // // //                 onChange={(e) => setReturnNotes(e.target.value)}
// // // // // // // // // // // //                 className={`${currentTheme.input} w-full p-3 rounded-lg h-24`}
// // // // // // // // // // // //                 placeholder="Add any additional details..."
// // // // // // // // // // // //               />
// // // // // // // // // // // //             </div>

// // // // // // // // // // // //             <div className="mb-6">
// // // // // // // // // // // //               <label className="block font-medium mb-2">Return Condition</label>
// // // // // // // // // // // //               <select
// // // // // // // // // // // //                 value={returnCondition}
// // // // // // // // // // // //                 onChange={(e) => setReturnCondition(e.target.value)}
// // // // // // // // // // // //                 className={`${currentTheme.input} w-full p-3 rounded-lg`}
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 <option value="resellable">Resellable</option>
// // // // // // // // // // // //                 <option value="damaged">Damaged</option>
// // // // // // // // // // // //               </select>
// // // // // // // // // // // //             </div>

// // // // // // // // // // // //             <div className="mb-6">
// // // // // // // // // // // //               <label className="block font-medium mb-2">Refund Option</label>
// // // // // // // // // // // //               <select
// // // // // // // // // // // //                 value={refundOption}
// // // // // // // // // // // //                 onChange={(e) => setRefundOption(e.target.value)}
// // // // // // // // // // // //                 className={`${currentTheme.input} w-full p-3 rounded-lg`}
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 <option value="original">Original Payment Method</option>
// // // // // // // // // // // //                 <option value="store_credit">Store Credit</option>
// // // // // // // // // // // //                 <option value="loyalty">Loyalty Points</option>
// // // // // // // // // // // //                 <option value="exchange">Product Exchange</option>
// // // // // // // // // // // //               </select>
// // // // // // // // // // // //             </div>

// // // // // // // // // // // //             <motion.button
// // // // // // // // // // // //               whileHover={{ scale: 1.05 }}
// // // // // // // // // // // //               whileTap={{ scale: 0.95 }}
// // // // // // // // // // // //               onClick={handleSubmitReturn}
// // // // // // // // // // // //               disabled={isLoading}
// // // // // // // // // // // //               className={`${currentTheme.button} w-full py-3 rounded-lg`}
// // // // // // // // // // // //             >
// // // // // // // // // // // //               {isLoading ? "Processing..." : "Submit Return"}
// // // // // // // // // // // //             </motion.button>

// // // // // // // // // // // //             {success && (
// // // // // // // // // // // //               <motion.div
// // // // // // // // // // // //                 initial={{ opacity: 0 }}
// // // // // // // // // // // //                 animate={{ opacity: 1 }}
// // // // // // // // // // // //                 className={`mt-4 p-4 ${currentTheme.success} rounded-lg flex items-center gap-2`}
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 <CheckCircle className="w-5 h-5" />
// // // // // // // // // // // //                 <p>{success}</p>
// // // // // // // // // // // //               </motion.div>
// // // // // // // // // // // //             )}
// // // // // // // // // // // //           </motion.div>
// // // // // // // // // // // //         )}
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default ReturnsManagement;
// // // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // // // import { Search, AlertCircle, CheckCircle, Sun, Moon } from "lucide-react";

// // // // // // // // // // // const ReturnsManagement = () => {
// // // // // // // // // // //   const [storeId] = useState(localStorage.getItem("storeId") || "");
// // // // // // // // // // //   const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark");
// // // // // // // // // // //   const [searchInput, setSearchInput] = useState("");
// // // // // // // // // // //   const [selectedSale, setSelectedSale] = useState(null);
// // // // // // // // // // //   const [returnItems, setReturnItems] = useState([]);
// // // // // // // // // // //   const [returnReason, setReturnReason] = useState("");
// // // // // // // // // // //   const [returnNotes, setReturnNotes] = useState("");
// // // // // // // // // // //   const [returnCondition, setReturnCondition] = useState("resellable");
// // // // // // // // // // //   const [refundOption, setRefundOption] = useState("original");
// // // // // // // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // //   const [success, setSuccess] = useState(null);

// // // // // // // // // // //   const themes = {
// // // // // // // // // // //     light: {
// // // // // // // // // // //       background: "bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50",
// // // // // // // // // // //       text: "text-gray-800",
// // // // // // // // // // //       secondaryText: "text-gray-600",
// // // // // // // // // // //       accent: "text-purple-600",
// // // // // // // // // // //       button: "bg-purple-600 hover:bg-purple-700 text-white",
// // // // // // // // // // //       secondaryButton: "bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50",
// // // // // // // // // // //       card: "bg-white",
// // // // // // // // // // //       border: "border-gray-300",
// // // // // // // // // // //       input: "bg-violet-50 border-gray-300",
// // // // // // // // // // //       error: "bg-red-50 text-red-600 border-red-200",
// // // // // // // // // // //       success: "bg-green-50 text-green-600 border-green-200",
// // // // // // // // // // //     },
// // // // // // // // // // //     dark: {
// // // // // // // // // // //       background: "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700",
// // // // // // // // // // //       text: "text-gray-100",
// // // // // // // // // // //       secondaryText: "text-gray-400",
// // // // // // // // // // //       accent: "text-purple-400",
// // // // // // // // // // //       button: "bg-purple-600 hover:bg-purple-700 text-white",
// // // // // // // // // // //       secondaryButton: "bg-gray-800 text-purple-400 border-2 border-purple-400 hover:bg-gray-700",
// // // // // // // // // // //       card: "bg-gray-800",
// // // // // // // // // // //       border: "border-gray-700",
// // // // // // // // // // //       input: "bg-gray-700 border-gray-600",
// // // // // // // // // // //       error: "bg-red-900/30 text-red-400 border-red-700",
// // // // // // // // // // //       success: "bg-green-900/30 text-green-300 border-green-700",
// // // // // // // // // // //     },
// // // // // // // // // // //   };

// // // // // // // // // // //   const currentTheme = isDarkMode ? themes.dark : themes.light;

// // // // // // // // // // //   const toggleTheme = () => {
// // // // // // // // // // //     setIsDarkMode((prev) => {
// // // // // // // // // // //       const newMode = !prev;
// // // // // // // // // // //       localStorage.setItem("theme", newMode ? "dark" : "light");
// // // // // // // // // // //       return newMode;
// // // // // // // // // // //     });
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleSearch = async () => {
// // // // // // // // // // //     if (!storeId) {
// // // // // // // // // // //       setError("Store ID is missing. Please log in again.");
// // // // // // // // // // //       return;
// // // // // // // // // // //     }
// // // // // // // // // // //     if (!searchInput.trim()) {
// // // // // // // // // // //       setError("Please enter a serial number.");
// // // // // // // // // // //       return;
// // // // // // // // // // //     }

// // // // // // // // // // //     setIsLoading(true);
// // // // // // // // // // //     setError(null);
// // // // // // // // // // //     setSelectedSale(null);

// // // // // // // // // // //     try {
// // // // // // // // // // //       console.log("Searching for sale with serialNumber:", searchInput);
// // // // // // // // // // //       const response = await fetch(
// // // // // // // // // // //         `http://localhost:5010/api/daily-sales2?storeId=${storeId}&date=${new Date().toISOString().split("T")[0]}`,
// // // // // // // // // // //         { headers: { storeId } }
// // // // // // // // // // //       );
// // // // // // // // // // //       const data = await response.json();
// // // // // // // // // // //       if (!response.ok) throw new Error(data.error || "Failed to fetch sales");

// // // // // // // // // // //       const sales = data[new Date().toISOString().split("T")[0]]?.sales || [];
// // // // // // // // // // //       const sale = sales.find((s) => s.serialNumber === searchInput);
// // // // // // // // // // //       if (!sale) {
// // // // // // // // // // //         setError("No sale found with this serial number.");
// // // // // // // // // // //       } else {
// // // // // // // // // // //         console.log("Sale found:", sale);
// // // // // // // // // // //         setSelectedSale(sale);
// // // // // // // // // // //       }
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       setError("Error searching: " + err.message);
// // // // // // // // // // //       console.error("Search error:", err);
// // // // // // // // // // //     } finally {
// // // // // // // // // // //       setIsLoading(false);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleItemSelection = (product, quantity) => {
// // // // // // // // // // //     setReturnItems((prev) => {
// // // // // // // // // // //       const existing = prev.find((item) => item.product._id === product._id);
// // // // // // // // // // //       if (existing) {
// // // // // // // // // // //         return prev.map((item) =>
// // // // // // // // // // //           item.product._id === product._id ? { ...item, quantity: Math.min(quantity, product.quantity) } : item
// // // // // // // // // // //         );
// // // // // // // // // // //       }
// // // // // // // // // // //       return [...prev, { product, quantity: Math.min(quantity, product.quantity), condition: returnCondition }];
// // // // // // // // // // //     });
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleSubmitReturn = async () => {
// // // // // // // // // // //     if (!selectedSale || returnItems.length === 0 || !returnReason) {
// // // // // // // // // // //       setError("Please select a sale, items to return, and a reason.");
// // // // // // // // // // //       return;
// // // // // // // // // // //     }

// // // // // // // // // // //     setIsLoading(true);
// // // // // // // // // // //     setError(null);
// // // // // // // // // // //     setSuccess(null);

// // // // // // // // // // //     const returnData = {
// // // // // // // // // // //       storeId,
// // // // // // // // // // //       serialNumber: selectedSale.serialNumber,
// // // // // // // // // // //       items: returnItems.map((item) => ({
// // // // // // // // // // //         productId: item.product._id,
// // // // // // // // // // //         barcode: item.product.barcode || "",
// // // // // // // // // // //         quantity: item.quantity,
// // // // // // // // // // //         condition: item.condition,
// // // // // // // // // // //       })),
// // // // // // // // // // //       reason: returnReason,
// // // // // // // // // // //       notes: returnNotes,
// // // // // // // // // // //       refundOption,
// // // // // // // // // // //       date: new Date().toISOString(),
// // // // // // // // // // //     };

// // // // // // // // // // //     try {
// // // // // // // // // // //       console.log("Submitting return:", returnData);
// // // // // // // // // // //       const response = await fetch("http://localhost:5010/api/returns", {
// // // // // // // // // // //         method: "POST",
// // // // // // // // // // //         headers: { "Content-Type": "application/json", storeId },
// // // // // // // // // // //         body: JSON.stringify(returnData),
// // // // // // // // // // //       });
// // // // // // // // // // //       const result = await response.json();
// // // // // // // // // // //       if (!response.ok) throw new Error(result.error || "Failed to process return");

// // // // // // // // // // //       // Update inventory
// // // // // // // // // // //       for (const item of returnItems) {
// // // // // // // // // // //         if (item.condition === "resellable") {
// // // // // // // // // // //           await fetch(`http://localhost:5000/products/${item.product._id}/restock?storeId=${storeId}`, {
// // // // // // // // // // //             method: "POST",
// // // // // // // // // // //             headers: { "Content-Type": "application/json" },
// // // // // // // // // // //             body: JSON.stringify({ quantity: item.quantity }),
// // // // // // // // // // //           });
// // // // // // // // // // //         } else {
// // // // // // // // // // //           await fetch(`http://localhost:5000/damage-items?storeId=${storeId}`, {
// // // // // // // // // // //             method: "POST",
// // // // // // // // // // //             headers: { "Content-Type": "application/json" },
// // // // // // // // // // //             body: JSON.stringify({ productId: item.product._id, quantity: item.quantity, reason: returnReason }),
// // // // // // // // // // //           });
// // // // // // // // // // //         }
// // // // // // // // // // //       }

// // // // // // // // // // //       setSuccess("Return processed successfully!");
// // // // // // // // // // //       console.log("Return processed:", result);
// // // // // // // // // // //       setTimeout(() => {
// // // // // // // // // // //         setSearchInput("");
// // // // // // // // // // //         setSelectedSale(null);
// // // // // // // // // // //         setReturnItems([]);
// // // // // // // // // // //         setReturnReason("");
// // // // // // // // // // //         setReturnNotes("");
// // // // // // // // // // //         setRefundOption("original");
// // // // // // // // // // //       }, 2000);
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       setError("Error processing return: " + err.message);
// // // // // // // // // // //       console.error("Submit error:", err);
// // // // // // // // // // //     } finally {
// // // // // // // // // // //       setIsLoading(false);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className={`${currentTheme.background} ${currentTheme.text} min-h-screen p-6`}>
// // // // // // // // // // //       <motion.button
// // // // // // // // // // //         whileHover={{ scale: 1.1 }}
// // // // // // // // // // //         onClick={toggleTheme}
// // // // // // // // // // //         className={`fixed top-6 right-6 p-3 rounded-full ${currentTheme.card}`}
// // // // // // // // // // //       >
// // // // // // // // // // //         {isDarkMode ? <Sun className={currentTheme.accent} /> : <Moon className={currentTheme.accent} />}
// // // // // // // // // // //       </motion.button>

// // // // // // // // // // //       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto">
// // // // // // // // // // //         <h1 className="text-4xl font-bold text-center mb-6">Returns Management</h1>

// // // // // // // // // // //         {/* Search Section */}
// // // // // // // // // // //         <div className={`${currentTheme.card} p-6 rounded-lg`}>
// // // // // // // // // // //           <div className="flex gap-4">
// // // // // // // // // // //             <Search className={currentTheme.accent} />
// // // // // // // // // // //             <input
// // // // // // // // // // //               type="text"
// // // // // // // // // // //               value={searchInput}
// // // // // // // // // // //               onChange={(e) => setSearchInput(e.target.value)}
// // // // // // // // // // //               placeholder="Enter sale serial number"
// // // // // // // // // // //               className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // // // // // // //             />
// // // // // // // // // // //             <button
// // // // // // // // // // //               onClick={handleSearch}
// // // // // // // // // // //               disabled={isLoading}
// // // // // // // // // // //               className={`${currentTheme.button} px-4 py-2 rounded`}
// // // // // // // // // // //             >
// // // // // // // // // // //               {isLoading ? "Searching..." : "Search"}
// // // // // // // // // // //             </button>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           {error && (
// // // // // // // // // // //             <div className={`${currentTheme.error} mt-4 p-2 rounded flex gap-2`}>
// // // // // // // // // // //               <AlertCircle /> {error}
// // // // // // // // // // //             </div>
// // // // // // // // // // //           )}
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Return Form */}
// // // // // // // // // // //         {selectedSale && (
// // // // // // // // // // //           <motion.div
// // // // // // // // // // //             initial={{ opacity: 0 }}
// // // // // // // // // // //             animate={{ opacity: 1 }}
// // // // // // // // // // //             className={`${currentTheme.card} mt-6 p-6 rounded-lg`}
// // // // // // // // // // //           >
// // // // // // // // // // //             <h2 className="text-2xl font-semibold mb-4">Process Return for Serial: {selectedSale.serialNumber}</h2>
// // // // // // // // // // //             <div className="mb-4">
// // // // // // // // // // //               <p>Total Amount: ${selectedSale.total_amount}</p>
// // // // // // // // // // //               <p>Date: {selectedSale.date}</p>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             <div className="mb-4">
// // // // // // // // // // //               <h3 className="font-medium">Items to Return</h3>
// // // // // // // // // // //               {selectedSale.products.map((product) => (
// // // // // // // // // // //                 <div key={product._id} className="flex gap-4 py-2">
// // // // // // // // // // //                   <input
// // // // // // // // // // //                     type="number"
// // // // // // // // // // //                     min="0"
// // // // // // // // // // //                     max={product.quantity}
// // // // // // // // // // //                     value={returnItems.find((i) => i.product._id === product._id)?.quantity || 0}
// // // // // // // // // // //                     onChange={(e) => handleItemSelection(product, parseInt(e.target.value))}
// // // // // // // // // // //                     className={`${currentTheme.input} w-16 p-1 rounded`}
// // // // // // // // // // //                   />
// // // // // // // // // // //                   <span>{product.name} (Qty: {product.quantity}, Price: ${product.total_price / product.quantity})</span>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               ))}
// // // // // // // // // // //             </div>

// // // // // // // // // // //             <div className="mb-4">
// // // // // // // // // // //               <label className="block mb-1">Return Reason</label>
// // // // // // // // // // //               <select
// // // // // // // // // // //                 value={returnReason}
// // // // // // // // // // //                 onChange={(e) => setReturnReason(e.target.value)}
// // // // // // // // // // //                 className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // // // // // // //               >
// // // // // // // // // // //                 <option value="">Select</option>
// // // // // // // // // // //                 <option value="defective">Defective</option>
// // // // // // // // // // //                 <option value="wrong_item">Wrong Item</option>
// // // // // // // // // // //                 <option value="damaged_shipping">Damaged in Shipping</option>
// // // // // // // // // // //                 <option value="changed_mind">Changed Mind</option>
// // // // // // // // // // //               </select>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             <div className="mb-4">
// // // // // // // // // // //               <label className="block mb-1">Notes</label>
// // // // // // // // // // //               <textarea
// // // // // // // // // // //                 value={returnNotes}
// // // // // // // // // // //                 onChange={(e) => setReturnNotes(e.target.value)}
// // // // // // // // // // //                 className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // // // // // // //                 placeholder="Optional notes"
// // // // // // // // // // //               />
// // // // // // // // // // //             </div>

// // // // // // // // // // //             <div className="mb-4">
// // // // // // // // // // //               <label className="block mb-1">Condition</label>
// // // // // // // // // // //               <select
// // // // // // // // // // //                 value={returnCondition}
// // // // // // // // // // //                 onChange={(e) => setReturnCondition(e.target.value)}
// // // // // // // // // // //                 className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // // // // // // //               >
// // // // // // // // // // //                 <option value="resellable">Resellable</option>
// // // // // // // // // // //                 <option value="damaged">Damaged</option>
// // // // // // // // // // //               </select>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             <div className="mb-4">
// // // // // // // // // // //               <label className="block mb-1">Refund Option</label>
// // // // // // // // // // //               <select
// // // // // // // // // // //                 value={refundOption}
// // // // // // // // // // //                 onChange={(e) => setRefundOption(e.target.value)}
// // // // // // // // // // //                 className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // // // // // // //               >
// // // // // // // // // // //                 <option value="original">Original Payment</option>
// // // // // // // // // // //                 <option value="store_credit">Store Credit</option>
// // // // // // // // // // //                 <option value="loyalty">Loyalty Points</option>
// // // // // // // // // // //                 <option value="exchange">Exchange</option>
// // // // // // // // // // //               </select>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             <button
// // // // // // // // // // //               onClick={handleSubmitReturn}
// // // // // // // // // // //               disabled={isLoading}
// // // // // // // // // // //               className={`${currentTheme.button} w-full py-2 rounded`}
// // // // // // // // // // //             >
// // // // // // // // // // //               {isLoading ? "Processing..." : "Submit Return"}
// // // // // // // // // // //             </button>

// // // // // // // // // // //             {success && (
// // // // // // // // // // //               <div className={`${currentTheme.success} mt-4 p-2 rounded flex gap-2`}>
// // // // // // // // // // //                 <CheckCircle /> {success}
// // // // // // // // // // //               </div>
// // // // // // // // // // //             )}
// // // // // // // // // // //           </motion.div>
// // // // // // // // // // //         )}
// // // // // // // // // // //       </motion.div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default ReturnsManagement;
// // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // // import { Search, AlertCircle, CheckCircle, Sun, Moon } from "lucide-react";

// // // // // // // // // // const ReturnsManagement = () => {
// // // // // // // // // //   const [storeId] = useState(localStorage.getItem("storeId") || "");
// // // // // // // // // //   const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark");
// // // // // // // // // //   const [searchInput, setSearchInput] = useState("");
// // // // // // // // // //   const [selectedSale, setSelectedSale] = useState(null);
// // // // // // // // // //   const [returnItems, setReturnItems] = useState([]);
// // // // // // // // // //   const [returnReason, setReturnReason] = useState("");
// // // // // // // // // //   const [returnNotes, setReturnNotes] = useState("");
// // // // // // // // // //   const [returnCondition, setReturnCondition] = useState("resellable");
// // // // // // // // // //   const [refundOption, setRefundOption] = useState("original");
// // // // // // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // //   const [success, setSuccess] = useState(null);

// // // // // // // // // //   const themes = {
// // // // // // // // // //     light: {
// // // // // // // // // //       background: "bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50",
// // // // // // // // // //       text: "text-gray-800",
// // // // // // // // // //       secondaryText: "text-gray-600",
// // // // // // // // // //       accent: "text-purple-600",
// // // // // // // // // //       button: "bg-purple-600 hover:bg-purple-700 text-white",
// // // // // // // // // //       secondaryButton: "bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50",
// // // // // // // // // //       card: "bg-white",
// // // // // // // // // //       border: "border-gray-300",
// // // // // // // // // //       input: "bg-violet-50 border-gray-300",
// // // // // // // // // //       error: "bg-red-50 text-red-600 border-red-200",
// // // // // // // // // //       success: "bg-green-50 text-green-600 border-green-200",
// // // // // // // // // //     },
// // // // // // // // // //     dark: {
// // // // // // // // // //       background: "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700",
// // // // // // // // // //       text: "text-gray-100",
// // // // // // // // // //       secondaryText: "text-gray-400",
// // // // // // // // // //       accent: "text-purple-400",
// // // // // // // // // //       button: "bg-purple-600 hover:bg-purple-700 text-white",
// // // // // // // // // //       secondaryButton: "bg-gray-800 text-purple-400 border-2 border-purple-400 hover:bg-gray-700",
// // // // // // // // // //       card: "bg-gray-800",
// // // // // // // // // //       border: "border-gray-700",
// // // // // // // // // //       input: "bg-gray-700 border-gray-600",
// // // // // // // // // //       error: "bg-red-900/30 text-red-400 border-red-700",
// // // // // // // // // //       success: "bg-green-900/30 text-green-300 border-green-700",
// // // // // // // // // //     },
// // // // // // // // // //   };

// // // // // // // // // //   const currentTheme = isDarkMode ? themes.dark : themes.light;

// // // // // // // // // //   const toggleTheme = () => {
// // // // // // // // // //     setIsDarkMode((prev) => {
// // // // // // // // // //       const newMode = !prev;
// // // // // // // // // //       localStorage.setItem("theme", newMode ? "dark" : "light");
// // // // // // // // // //       return newMode;
// // // // // // // // // //     });
// // // // // // // // // //   };

// // // // // // // // // //   const handleSearch = async () => {
// // // // // // // // // //     if (!storeId) {
// // // // // // // // // //       setError("Store ID is missing. Please log in again.");
// // // // // // // // // //       return;
// // // // // // // // // //     }
// // // // // // // // // //     if (!searchInput.trim()) {
// // // // // // // // // //       setError("Please enter a serial number.");
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     setIsLoading(true);
// // // // // // // // // //     setError(null);
// // // // // // // // // //     setSelectedSale(null);

// // // // // // // // // //     try {
// // // // // // // // // //       const serialNumber = parseInt(searchInput); // Convert to number
// // // // // // // // // //       console.log("Searching for serialNumber:", serialNumber, "in store:", storeId);

// // // // // // // // // //       // New endpoint to search by serial number directly
// // // // // // // // // //       const response = await fetch(`http://localhost:5010/api/sale-by-serial?storeId=${storeId}&serialNumber=${serialNumber}`, {
// // // // // // // // // //         headers: { storeId }
// // // // // // // // // //       });
// // // // // // // // // //       const data = await response.json();
// // // // // // // // // //       if (!response.ok) throw new Error(data.error || "Failed to fetch sale");

// // // // // // // // // //       if (!data.sale) {
// // // // // // // // // //         setError("No sale found with this serial number.");
// // // // // // // // // //       } else {
// // // // // // // // // //         console.log("Sale found:", data.sale);
// // // // // // // // // //         setSelectedSale(data.sale);
// // // // // // // // // //       }
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       setError("Error searching: " + err.message);
// // // // // // // // // //       console.error("Search error:", err);
// // // // // // // // // //     } finally {
// // // // // // // // // //       setIsLoading(false);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleItemSelection = (product, quantity) => {
// // // // // // // // // //     setReturnItems((prev) => {
// // // // // // // // // //       const existing = prev.find((item) => item.product._id === product._id);
// // // // // // // // // //       if (existing) {
// // // // // // // // // //         return prev.map((item) =>
// // // // // // // // // //           item.product._id === product._id ? { ...item, quantity: Math.min(quantity, product.quantity) } : item
// // // // // // // // // //         );
// // // // // // // // // //       }
// // // // // // // // // //       return [...prev, { product, quantity: Math.min(quantity, product.quantity), condition: returnCondition }];
// // // // // // // // // //     });
// // // // // // // // // //   };

// // // // // // // // // //   const handleSubmitReturn = async () => {
// // // // // // // // // //     if (!selectedSale || returnItems.length === 0 || !returnReason) {
// // // // // // // // // //       setError("Please select a sale, items to return, and a reason.");
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     setIsLoading(true);
// // // // // // // // // //     setError(null);
// // // // // // // // // //     setSuccess(null);

// // // // // // // // // //     const returnData = {
// // // // // // // // // //       storeId,
// // // // // // // // // //       serialNumber: selectedSale.serialNumber,
// // // // // // // // // //       items: returnItems.map((item) => ({
// // // // // // // // // //         productId: item.product._id,
// // // // // // // // // //         barcode: item.product.barcode || "",
// // // // // // // // // //         quantity: item.quantity,
// // // // // // // // // //         condition: item.condition,
// // // // // // // // // //       })),
// // // // // // // // // //       reason: returnReason,
// // // // // // // // // //       notes: returnNotes,
// // // // // // // // // //       refundOption,
// // // // // // // // // //       date: new Date().toISOString(),
// // // // // // // // // //     };

// // // // // // // // // //     try {
// // // // // // // // // //       console.log("Submitting return:", returnData);
// // // // // // // // // //       const response = await fetch("http://localhost:5010/api/returns", {
// // // // // // // // // //         method: "POST",
// // // // // // // // // //         headers: { "Content-Type": "application/json", storeId },
// // // // // // // // // //         body: JSON.stringify(returnData),
// // // // // // // // // //       });
// // // // // // // // // //       const result = await response.json();
// // // // // // // // // //       if (!response.ok) throw new Error(result.error || "Failed to process return");

// // // // // // // // // //       // Update inventory
// // // // // // // // // //       for (const item of returnItems) {
// // // // // // // // // //         if (item.condition === "resellable") {
// // // // // // // // // //           const restockResponse = await fetch(`http://localhost:5000/products/${item.product._id}/restock?storeId=${storeId}`, {
// // // // // // // // // //             method: "POST",
// // // // // // // // // //             headers: { "Content-Type": "application/json" },
// // // // // // // // // //             body: JSON.stringify({ quantity: item.quantity }),
// // // // // // // // // //           });
// // // // // // // // // //           if (!restockResponse.ok) console.error("Restock failed:", await restockResponse.json());
// // // // // // // // // //         } else {
// // // // // // // // // //           const damageResponse = await fetch(`http://localhost:5000/damage-items?storeId=${storeId}`, {
// // // // // // // // // //             method: "POST",
// // // // // // // // // //             headers: { "Content-Type": "application/json" },
// // // // // // // // // //             body: JSON.stringify({ productId: item.product._id, quantity: item.quantity, reason: returnReason }),
// // // // // // // // // //           });
// // // // // // // // // //           if (!damageResponse.ok) console.error("Damage record failed:", await damageResponse.json());
// // // // // // // // // //         }
// // // // // // // // // //       }

// // // // // // // // // //       setSuccess("Return processed successfully!");
// // // // // // // // // //       console.log("Return processed:", result);
// // // // // // // // // //       setTimeout(() => {
// // // // // // // // // //         setSearchInput("");
// // // // // // // // // //         setSelectedSale(null);
// // // // // // // // // //         setReturnItems([]);
// // // // // // // // // //         setReturnReason("");
// // // // // // // // // //         setReturnNotes("");
// // // // // // // // // //         setRefundOption("original");
// // // // // // // // // //       }, 2000);
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       setError("Error processing return: " + err.message);
// // // // // // // // // //       console.error("Submit error:", err);
// // // // // // // // // //     } finally {
// // // // // // // // // //       setIsLoading(false);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className={`${currentTheme.background} ${currentTheme.text} min-h-screen p-6`}>
// // // // // // // // // //       <motion.button
// // // // // // // // // //         whileHover={{ scale: 1.1 }}
// // // // // // // // // //         onClick={toggleTheme}
// // // // // // // // // //         className={`fixed top-6 right-6 p-3 rounded-full ${currentTheme.card}`}
// // // // // // // // // //       >
// // // // // // // // // //         {isDarkMode ? <Sun className={currentTheme.accent} /> : <Moon className={currentTheme.accent} />}
// // // // // // // // // //       </motion.button>

// // // // // // // // // //       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto">
// // // // // // // // // //         <h1 className="text-4xl font-bold text-center mb-6">Returns Management</h1>

// // // // // // // // // //         {/* Search Section */}
// // // // // // // // // //         <div className={`${currentTheme.card} p-6 rounded-lg`}>
// // // // // // // // // //           <div className="flex gap-4">
// // // // // // // // // //             <Search className={currentTheme.accent} />
// // // // // // // // // //             <input
// // // // // // // // // //               type="text"
// // // // // // // // // //               value={searchInput}
// // // // // // // // // //               onChange={(e) => setSearchInput(e.target.value)}
// // // // // // // // // //               placeholder="Enter sale serial number"
// // // // // // // // // //               className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // // // // // //             />
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={handleSearch}
// // // // // // // // // //               disabled={isLoading}
// // // // // // // // // //               className={`${currentTheme.button} px-4 py-2 rounded`}
// // // // // // // // // //             >
// // // // // // // // // //               {isLoading ? "Searching..." : "Search"}
// // // // // // // // // //             </button>
// // // // // // // // // //           </div>
// // // // // // // // // //           {error && (
// // // // // // // // // //             <div className={`${currentTheme.error} mt-4 p-2 rounded flex gap-2`}>
// // // // // // // // // //               <AlertCircle /> {error}
// // // // // // // // // //             </div>
// // // // // // // // // //           )}
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Return Form */}
// // // // // // // // // //         {selectedSale && (
// // // // // // // // // //           <motion.div
// // // // // // // // // //             initial={{ opacity: 0 }}
// // // // // // // // // //             animate={{ opacity: 1 }}
// // // // // // // // // //             className={`${currentTheme.card} mt-6 p-6 rounded-lg`}
// // // // // // // // // //           >
// // // // // // // // // //             <h2 className="text-2xl font-semibold mb-4">Process Return for Serial: {selectedSale.serialNumber}</h2>
// // // // // // // // // //             <div className="mb-4">
// // // // // // // // // //               <p>Total Amount: ${selectedSale.total_amount}</p>
// // // // // // // // // //               <p>Date: {selectedSale.date}</p>
// // // // // // // // // //             </div>

// // // // // // // // // //             <div className="mb-4">
// // // // // // // // // //               <h3 className="font-medium">Items to Return</h3>
// // // // // // // // // //               {selectedSale.products.map((product) => (
// // // // // // // // // //                 <div key={product._id} className="flex gap-4 py-2">
// // // // // // // // // //                   <input
// // // // // // // // // //                     type="number"
// // // // // // // // // //                     min="0"
// // // // // // // // // //                     max={product.quantity}
// // // // // // // // // //                     value={returnItems.find((i) => i.product._id === product._id)?.quantity || 0}
// // // // // // // // // //                     onChange={(e) => handleItemSelection(product, parseInt(e.target.value))}
// // // // // // // // // //                     className={`${currentTheme.input} w-16 p-1 rounded`}
// // // // // // // // // //                   />
// // // // // // // // // //                   <span>{product.name} (Qty: {product.quantity}, Price: ${product.total_price / product.quantity})</span>
// // // // // // // // // //                 </div>
// // // // // // // // // //               ))}
// // // // // // // // // //             </div>

// // // // // // // // // //             <div className="mb-4">
// // // // // // // // // //               <label className="block mb-1">Return Reason</label>
// // // // // // // // // //               <select
// // // // // // // // // //                 value={returnReason}
// // // // // // // // // //                 onChange={(e) => setReturnReason(e.target.value)}
// // // // // // // // // //                 className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // // // // // //               >
// // // // // // // // // //                 <option value="">Select</option>
// // // // // // // // // //                 <option value="defective">Defective</option>
// // // // // // // // // //                 <option value="wrong_item">Wrong Item</option>
// // // // // // // // // //                 <option value="damaged_shipping">Damaged in Shipping</option>
// // // // // // // // // //                 <option value="changed_mind">Changed Mind</option>
// // // // // // // // // //               </select>
// // // // // // // // // //             </div>

// // // // // // // // // //             <div className="mb-4">
// // // // // // // // // //               <label className="block mb-1">Notes</label>
// // // // // // // // // //               <textarea
// // // // // // // // // //                 value={returnNotes}
// // // // // // // // // //                 onChange={(e) => setReturnNotes(e.target.value)}
// // // // // // // // // //                 className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // // // // // //                 placeholder="Optional notes"
// // // // // // // // // //               />
// // // // // // // // // //             </div>

// // // // // // // // // //             <div className="mb-4">
// // // // // // // // // //               <label className="block mb-1">Condition</label>
// // // // // // // // // //               <select
// // // // // // // // // //                 value={returnCondition}
// // // // // // // // // //                 onChange={(e) => setReturnCondition(e.target.value)}
// // // // // // // // // //                 className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // // // // // //               >
// // // // // // // // // //                 <option value="resellable">Resellable</option>
// // // // // // // // // //                 <option value="damaged">Damaged</option>
// // // // // // // // // //               </select>
// // // // // // // // // //             </div>

// // // // // // // // // //             <div className="mb-4">
// // // // // // // // // //               <label className="block mb-1">Refund Option</label>
// // // // // // // // // //               <select
// // // // // // // // // //                 value={refundOption}
// // // // // // // // // //                 onChange={(e) => setRefundOption(e.target.value)}
// // // // // // // // // //                 className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // // // // // //               >
// // // // // // // // // //                 <option value="original">Original Payment</option>
// // // // // // // // // //                 <option value="store_credit">Store Credit</option>
// // // // // // // // // //                 <option value="loyalty">Loyalty Points</option>
// // // // // // // // // //                 <option value="exchange">Exchange</option>
// // // // // // // // // //               </select>
// // // // // // // // // //             </div>

// // // // // // // // // //             <button
// // // // // // // // // //               onClick={handleSubmitReturn}
// // // // // // // // // //               disabled={isLoading}
// // // // // // // // // //               className={`${currentTheme.button} w-full py-2 rounded`}
// // // // // // // // // //             >
// // // // // // // // // //               {isLoading ? "Processing..." : "Submit Return"}
// // // // // // // // // //             </button>

// // // // // // // // // //             {success && (
// // // // // // // // // //               <div className={`${currentTheme.success} mt-4 p-2 rounded flex gap-2`}>
// // // // // // // // // //                 <CheckCircle /> {success}
// // // // // // // // // //               </div>
// // // // // // // // // //             )}
// // // // // // // // // //           </motion.div>
// // // // // // // // // //         )}
// // // // // // // // // //       </motion.div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default ReturnsManagement;
// // // // // // // // // import React, { useState } from "react";
// // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // import { Search, AlertCircle, CheckCircle, Sun, Moon } from "lucide-react";

// // // // // // // // // const ReturnsManagement = () => {
// // // // // // // // //   const [storeId] = useState(localStorage.getItem("storeId") || "");
// // // // // // // // //   const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark");
// // // // // // // // //   const [searchInput, setSearchInput] = useState("");
// // // // // // // // //   const [selectedSale, setSelectedSale] = useState(null);
// // // // // // // // //   const [returnItems, setReturnItems] = useState([]);
// // // // // // // // //   const [returnReason, setReturnReason] = useState("");
// // // // // // // // //   const [returnNotes, setReturnNotes] = useState("");
// // // // // // // // //   const [returnCondition, setReturnCondition] = useState("resellable");
// // // // // // // // //   const [refundOption, setRefundOption] = useState("original");
// // // // // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // //   const [success, setSuccess] = useState(null);

// // // // // // // // //   const themes = {
// // // // // // // // //     light: {
// // // // // // // // //       background: "bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50",
// // // // // // // // //       text: "text-gray-800",
// // // // // // // // //       secondaryText: "text-gray-600",
// // // // // // // // //       accent: "text-purple-600",
// // // // // // // // //       button: "bg-purple-600 hover:bg-purple-700 text-white",
// // // // // // // // //       secondaryButton: "bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50",
// // // // // // // // //       card: "bg-white",
// // // // // // // // //       border: "border-gray-300",
// // // // // // // // //       input: "bg-violet-50 border-gray-300",
// // // // // // // // //       error: "bg-red-50 text-red-600 border-red-200",
// // // // // // // // //       success: "bg-green-50 text-green-600 border-green-200",
// // // // // // // // //     },
// // // // // // // // //     dark: {
// // // // // // // // //       background: "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700",
// // // // // // // // //       text: "text-gray-100",
// // // // // // // // //       secondaryText: "text-gray-400",
// // // // // // // // //       accent: "text-purple-400",
// // // // // // // // //       button: "bg-purple-600 hover:bg-purple-700 text-white",
// // // // // // // // //       secondaryButton: "bg-gray-800 text-purple-400 border-2 border-purple-400 hover:bg-gray-700",
// // // // // // // // //       card: "bg-gray-800",
// // // // // // // // //       border: "border-gray-700",
// // // // // // // // //       input: "bg-gray-700 border-gray-600",
// // // // // // // // //       error: "bg-red-900/30 text-red-400 border-red-700",
// // // // // // // // //       success: "bg-green-900/30 text-green-300 border-green-700",
// // // // // // // // //     },
// // // // // // // // //   };

// // // // // // // // //   const currentTheme = isDarkMode ? themes.dark : themes.light;

// // // // // // // // //   const toggleTheme = () => {
// // // // // // // // //     setIsDarkMode((prev) => {
// // // // // // // // //       const newMode = !prev;
// // // // // // // // //       localStorage.setItem("theme", newMode ? "dark" : "light");
// // // // // // // // //       return newMode;
// // // // // // // // //     });
// // // // // // // // //   };

// // // // // // // // //   const handleSearch = async () => {
// // // // // // // // //     if (!storeId) {
// // // // // // // // //       setError("Store ID is missing. Please log in again.");
// // // // // // // // //       return;
// // // // // // // // //     }
// // // // // // // // //     if (!searchInput.trim()) {
// // // // // // // // //       setError("Please enter a serial number.");
// // // // // // // // //       return;
// // // // // // // // //     }

// // // // // // // // //     setIsLoading(true);
// // // // // // // // //     setError(null);
// // // // // // // // //     setSelectedSale(null);

// // // // // // // // //     try {
// // // // // // // // //       const serialNumber = parseInt(searchInput);
// // // // // // // // //       console.log("Searching for serialNumber:", serialNumber, "in store:", storeId);

// // // // // // // // //       const response = await fetch(
// // // // // // // // //         `http://localhost:5010/api/sale-by-serial?storeId=${storeId}&serialNumber=${serialNumber}`,
// // // // // // // // //         { headers: { storeId } }
// // // // // // // // //       );
// // // // // // // // //       const data = await response.json();
// // // // // // // // //       if (!response.ok) throw new Error(data.error || "Failed to fetch sale");

// // // // // // // // //       if (!data.sale) {
// // // // // // // // //         setError("No sale found with this serial number.");
// // // // // // // // //       } else {
// // // // // // // // //         // Add a temporary _id if missing for compatibility
// // // // // // // // //         const sale = {
// // // // // // // // //           ...data.sale,
// // // // // // // // //           products: data.sale.products.map((p, index) => ({ ...p, _id: p._id || `temp-${index}` })),
// // // // // // // // //         };
// // // // // // // // //         console.log("Sale found:", sale);
// // // // // // // // //         setSelectedSale(sale);
// // // // // // // // //       }
// // // // // // // // //     } catch (err) {
// // // // // // // // //       setError("Error searching: " + err.message);
// // // // // // // // //       console.error("Search error:", err);
// // // // // // // // //     } finally {
// // // // // // // // //       setIsLoading(false);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleItemSelection = (product, quantity) => {
// // // // // // // // //     setReturnItems((prev) => {
// // // // // // // // //       const existing = prev.find((item) => item.product._id === product._id);
// // // // // // // // //       if (existing) {
// // // // // // // // //         return prev.map((item) =>
// // // // // // // // //           item.product._id === product._id ? { ...item, quantity: Math.min(quantity, product.quantity) } : item
// // // // // // // // //         );
// // // // // // // // //       }
// // // // // // // // //       return [...prev, { product, quantity: Math.min(quantity, product.quantity), condition: returnCondition }];
// // // // // // // // //     });
// // // // // // // // //   };

// // // // // // // // //   const handleSubmitReturn = async () => {
// // // // // // // // //     if (!selectedSale || returnItems.length === 0 || !returnReason) {
// // // // // // // // //       setError("Please select a sale, items to return, and a reason.");
// // // // // // // // //       return;
// // // // // // // // //     }

// // // // // // // // //     setIsLoading(true);
// // // // // // // // //     setError(null);
// // // // // // // // //     setSuccess(null);

// // // // // // // // //     const returnData = {
// // // // // // // // //       storeId,
// // // // // // // // //       serialNumber: selectedSale.serialNumber,
// // // // // // // // //       items: returnItems.map((item) => ({
// // // // // // // // //         barcode: item.product.barcode || "", // Use barcode instead of productId
// // // // // // // // //         quantity: item.quantity,
// // // // // // // // //         condition: item.condition,
// // // // // // // // //       })),
// // // // // // // // //       reason: returnReason,
// // // // // // // // //       notes: returnNotes,
// // // // // // // // //       refundOption,
// // // // // // // // //       date: new Date().toISOString(),
// // // // // // // // //     };

// // // // // // // // //     try {
// // // // // // // // //       console.log("Submitting return:", JSON.stringify(returnData, null, 2));
// // // // // // // // //       const response = await fetch("http://localhost:5010/api/returns", {
// // // // // // // // //         method: "POST",
// // // // // // // // //         headers: { "Content-Type": "application/json", storeId },
// // // // // // // // //         body: JSON.stringify(returnData),
// // // // // // // // //       });
// // // // // // // // //       const result = await response.json();
// // // // // // // // //       if (!response.ok) throw new Error(result.error || "Failed to process return");

// // // // // // // // //       // Update inventory using barcode
// // // // // // // // //       for (const item of returnItems) {
// // // // // // // // //         if (item.condition === "resellable") {
// // // // // // // // //           const restockResponse = await fetch(
// // // // // // // // //             `http://localhost:5000/products/restock-by-barcode?storeId=${storeId}&barcode=${item.product.barcode}`,
// // // // // // // // //             {
// // // // // // // // //               method: "POST",
// // // // // // // // //               headers: { "Content-Type": "application/json" },
// // // // // // // // //               body: JSON.stringify({ quantity: item.quantity }),
// // // // // // // // //             }
// // // // // // // // //           );
// // // // // // // // //           if (!restockResponse.ok) console.error("Restock failed:", await restockResponse.json());
// // // // // // // // //         } else {
// // // // // // // // //           const damageResponse = await fetch(`http://localhost:5000/damage-items?storeId=${storeId}`, {
// // // // // // // // //             method: "POST",
// // // // // // // // //             headers: { "Content-Type": "application/json" },
// // // // // // // // //             body: JSON.stringify({ barcode: item.product.barcode, quantity: item.quantity, reason: returnReason }),
// // // // // // // // //           });
// // // // // // // // //           if (!damageResponse.ok) console.error("Damage record failed:", await damageResponse.json());
// // // // // // // // //         }
// // // // // // // // //       }

// // // // // // // // //       setSuccess("Return processed successfully!");
// // // // // // // // //       console.log("Return processed:", result);
// // // // // // // // //       setTimeout(() => {
// // // // // // // // //         setSearchInput("");
// // // // // // // // //         setSelectedSale(null);
// // // // // // // // //         setReturnItems([]);
// // // // // // // // //         setReturnReason("");
// // // // // // // // //         setReturnNotes("");
// // // // // // // // //         setRefundOption("original");
// // // // // // // // //       }, 2000);
// // // // // // // // //     } catch (err) {
// // // // // // // // //       setError("Error processing return: " + err.message);
// // // // // // // // //       console.error("Submit error:", err);
// // // // // // // // //     } finally {
// // // // // // // // //       setIsLoading(false);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className={`${currentTheme.background} ${currentTheme.text} min-h-screen p-6`}>
// // // // // // // // //       <motion.button
// // // // // // // // //         whileHover={{ scale: 1.1 }}
// // // // // // // // //         onClick={toggleTheme}
// // // // // // // // //         className={`fixed top-6 right-6 p-3 rounded-full ${currentTheme.card}`}
// // // // // // // // //       >
// // // // // // // // //         {isDarkMode ? <Sun className={currentTheme.accent} /> : <Moon className={currentTheme.accent} />}
// // // // // // // // //       </motion.button>

// // // // // // // // //       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto">
// // // // // // // // //         <h1 className="text-4xl font-bold text-center mb-6">Returns Management</h1>

// // // // // // // // //         {/* Search Section */}
// // // // // // // // //         <div className={`${currentTheme.card} p-6 rounded-lg`}>
// // // // // // // // //           <div className="flex gap-4">
// // // // // // // // //             <Search className={currentTheme.accent} />
// // // // // // // // //             <input
// // // // // // // // //               type="text"
// // // // // // // // //               value={searchInput}
// // // // // // // // //               onChange={(e) => setSearchInput(e.target.value)}
// // // // // // // // //               placeholder="Enter sale serial number"
// // // // // // // // //               className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // // // // //             />
// // // // // // // // //             <button
// // // // // // // // //               onClick={handleSearch}
// // // // // // // // //               disabled={isLoading}
// // // // // // // // //               className={`${currentTheme.button} px-4 py-2 rounded`}
// // // // // // // // //             >
// // // // // // // // //               {isLoading ? "Searching..." : "Search"}
// // // // // // // // //             </button>
// // // // // // // // //           </div>
// // // // // // // // //           {error && (
// // // // // // // // //             <div className={`${currentTheme.error} mt-4 p-2 rounded flex gap-2`}>
// // // // // // // // //               <AlertCircle /> {error}
// // // // // // // // //             </div>
// // // // // // // // //           )}
// // // // // // // // //         </div>

// // // // // // // // //         {/* Return Form */}
// // // // // // // // //         {selectedSale && (
// // // // // // // // //           <motion.div
// // // // // // // // //             initial={{ opacity: 0 }}
// // // // // // // // //             animate={{ opacity: 1 }}
// // // // // // // // //             className={`${currentTheme.card} mt-6 p-6 rounded-lg`}
// // // // // // // // //           >
// // // // // // // // //             <h2 className="text-2xl font-semibold mb-4">Process Return for Serial: {selectedSale.serialNumber}</h2>
// // // // // // // // //             <div className="mb-4">
// // // // // // // // //               <p>Total Amount: ${selectedSale.total_amount}</p>
// // // // // // // // //               <p>Date: {selectedSale.date}</p>
// // // // // // // // //             </div>

// // // // // // // // //             <div className="mb-4">
// // // // // // // // //               <h3 className="font-medium">Items to Return</h3>
// // // // // // // // //               {selectedSale.products.map((product) => (
// // // // // // // // //                 <div key={product._id} className="flex gap-4 py-2">
// // // // // // // // //                   <input
// // // // // // // // //                     type="number"
// // // // // // // // //                     min="0"
// // // // // // // // //                     max={product.quantity}
// // // // // // // // //                     value={returnItems.find((i) => i.product._id === product._id)?.quantity || 0}
// // // // // // // // //                     onChange={(e) => handleItemSelection(product, parseInt(e.target.value))}
// // // // // // // // //                     className={`${currentTheme.input} w-16 p-1 rounded`}
// // // // // // // // //                   />
// // // // // // // // //                   <span>{product.name} (Qty: {product.quantity}, Price: ${product.total_price / product.quantity})</span>
// // // // // // // // //                 </div>
// // // // // // // // //               ))}
// // // // // // // // //             </div>

// // // // // // // // //             <div className="mb-4">
// // // // // // // // //               <label className="block mb-1">Return Reason</label>
// // // // // // // // //               <select
// // // // // // // // //                 value={returnReason}
// // // // // // // // //                 onChange={(e) => setReturnReason(e.target.value)}
// // // // // // // // //                 className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // // // // //               >
// // // // // // // // //                 <option value="">Select</option>
// // // // // // // // //                 <option value="defective">Defective</option>
// // // // // // // // //                 <option value="wrong_item">Wrong Item</option>
// // // // // // // // //                 <option value="damaged_shipping">Damaged in Shipping</option>
// // // // // // // // //                 <option value="changed_mind">Changed Mind</option>
// // // // // // // // //               </select>
// // // // // // // // //             </div>

// // // // // // // // //             <div className="mb-4">
// // // // // // // // //               <label className="block mb-1">Notes</label>
// // // // // // // // //               <textarea
// // // // // // // // //                 value={returnNotes}
// // // // // // // // //                 onChange={(e) => setReturnNotes(e.target.value)}
// // // // // // // // //                 className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // // // // //                 placeholder="Optional notes"
// // // // // // // // //               />
// // // // // // // // //             </div>

// // // // // // // // //             <div className="mb-4">
// // // // // // // // //               <label className="block mb-1">Condition</label>
// // // // // // // // //               <select
// // // // // // // // //                 value={returnCondition}
// // // // // // // // //                 onChange={(e) => setReturnCondition(e.target.value)}
// // // // // // // // //                 className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // // // // //               >
// // // // // // // // //                 <option value="resellable">Resellable</option>
// // // // // // // // //                 <option value="damaged">Damaged</option>
// // // // // // // // //               </select>
// // // // // // // // //             </div>

// // // // // // // // //             <div className="mb-4">
// // // // // // // // //               <label className="block mb-1">Refund Option</label>
// // // // // // // // //               <select
// // // // // // // // //                 value={refundOption}
// // // // // // // // //                 onChange={(e) => setRefundOption(e.target.value)}
// // // // // // // // //                 className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // // // // //               >
// // // // // // // // //                 <option value="original">Original Payment</option>
// // // // // // // // //                 <option value="store_credit">Store Credit</option>
// // // // // // // // //                 <option value="loyalty">Loyalty Points</option>
// // // // // // // // //                 <option value="exchange">Exchange</option>
// // // // // // // // //               </select>
// // // // // // // // //             </div>

// // // // // // // // //             <button
// // // // // // // // //               onClick={handleSubmitReturn}
// // // // // // // // //               disabled={isLoading}
// // // // // // // // //               className={`${currentTheme.button} w-full py-2 rounded`}
// // // // // // // // //             >
// // // // // // // // //               {isLoading ? "Processing..." : "Submit Return"}
// // // // // // // // //             </button>

// // // // // // // // //             {success && (
// // // // // // // // //               <div className={`${currentTheme.success} mt-4 p-2 rounded flex gap-2`}>
// // // // // // // // //                 <CheckCircle /> {success}
// // // // // // // // //               </div>
// // // // // // // // //             )}
// // // // // // // // //           </motion.div>
// // // // // // // // //         )}
// // // // // // // // //       </motion.div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default ReturnsManagement;
// // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // import { motion } from "framer-motion";
// // // // // // // // import { Search, AlertCircle, CheckCircle, Sun, Moon, History } from "lucide-react";

// // // // // // // // const ReturnsManagement = () => {
// // // // // // // //   const [storeId] = useState(localStorage.getItem("storeId") || "");
// // // // // // // //   const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark");
// // // // // // // //   const [searchInput, setSearchInput] = useState("");
// // // // // // // //   const [searchType, setSearchType] = useState("serialNumber");
// // // // // // // //   const [selectedSale, setSelectedSale] = useState(null);
// // // // // // // //   const [returnItems, setReturnItems] = useState([]);
// // // // // // // //   const [returnReason, setReturnReason] = useState("");
// // // // // // // //   const [returnNotes, setReturnNotes] = useState("");
// // // // // // // //   const [returnCondition, setReturnCondition] = useState("resellable");
// // // // // // // //   const [refundOption, setRefundOption] = useState("original");
// // // // // // // //   const [returnsHistory, setReturnsHistory] = useState([]);
// // // // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // // // //   const [error, setError] = useState(null);
// // // // // // // //   const [success, setSuccess] = useState(null);

// // // // // // // //   const themes = {
// // // // // // // //     light: {
// // // // // // // //       background: "bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50",
// // // // // // // //       text: "text-gray-800",
// // // // // // // //       secondaryText: "text-gray-600",
// // // // // // // //       accent: "text-purple-600",
// // // // // // // //       button: "bg-purple-600 hover:bg-purple-700 text-white",
// // // // // // // //       card: "bg-white",
// // // // // // // //       border: "border-gray-300",
// // // // // // // //       input: "bg-violet-50 border-gray-300",
// // // // // // // //       error: "bg-red-50 text-red-600 border-red-200",
// // // // // // // //       success: "bg-green-50 text-green-600 border-green-200",
// // // // // // // //     },
// // // // // // // //     dark: {
// // // // // // // //       background: "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700",
// // // // // // // //       text: "text-gray-100",
// // // // // // // //       secondaryText: "text-gray-400",
// // // // // // // //       accent: "text-purple-400",
// // // // // // // //       button: "bg-purple-600 hover:bg-purple-700 text-white",
// // // // // // // //       card: "bg-gray-800",
// // // // // // // //       border: "border-gray-700",
// // // // // // // //       input: "bg-gray-700 border-gray-600",
// // // // // // // //       error: "bg-red-900/30 text-red-400 border-red-700",
// // // // // // // //       success: "bg-green-900/30 text-green-300 border-green-700",
// // // // // // // //     },
// // // // // // // //   };

// // // // // // // //   const currentTheme = isDarkMode ? themes.dark : themes.light;

// // // // // // // //   // Fetch Returns History on component mount
// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchReturnsHistory = async () => {
// // // // // // // //       if (!storeId) return;
// // // // // // // //       try {
// // // // // // // //         const response = await fetch(`http://localhost:5010/api/returns?storeId=${storeId}`, {
// // // // // // // //           headers: { storeId },
// // // // // // // //         });
// // // // // // // //         const data = await response.json();
// // // // // // // //         if (response.ok) {
// // // // // // // //           setReturnsHistory(data);
// // // // // // // //         } else {
// // // // // // // //           console.error("Failed to fetch returns history:", data.error);
// // // // // // // //         }
// // // // // // // //       } catch (err) {
// // // // // // // //         console.error("Error fetching returns history:", err);
// // // // // // // //       }
// // // // // // // //     };
// // // // // // // //     fetchReturnsHistory();
// // // // // // // //   }, [storeId]);

// // // // // // // //   const toggleTheme = () => {
// // // // // // // //     setIsDarkMode((prev) => {
// // // // // // // //       const newMode = !prev;
// // // // // // // //       localStorage.setItem("theme", newMode ? "dark" : "light");
// // // // // // // //       return newMode;
// // // // // // // //     });
// // // // // // // //   };

// // // // // // // //   const handleSearch = async () => {
// // // // // // // //     if (!storeId) {
// // // // // // // //       setError("Store ID is missing. Please log in again.");
// // // // // // // //       return;
// // // // // // // //     }
// // // // // // // //     if (!searchInput.trim()) {
// // // // // // // //       setError("Please enter a search value.");
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     setIsLoading(true);
// // // // // // // //     setError(null);
// // // // // // // //     setSelectedSale(null);

// // // // // // // //     try {
// // // // // // // //       let url = "";
// // // // // // // //       if (searchType === "serialNumber") {
// // // // // // // //         const serialNumber = parseInt(searchInput);
// // // // // // // //         url = `http://localhost:5010/api/sale-by-serial?storeId=${storeId}&serialNumber=${serialNumber}`;
// // // // // // // //       } else if (searchType === "barcode") {
// // // // // // // //         url = `http://localhost:5010/api/sale-by-barcode?storeId=${storeId}&barcode=${searchInput}`;
// // // // // // // //       } else if (searchType === "customer_phone") {
// // // // // // // //         url = `http://localhost:5010/api/sale-by-phone?storeId=${storeId}&phone=${searchInput}`;
// // // // // // // //       }

// // // // // // // //       console.log(`Searching with ${searchType}:`, searchInput);
// // // // // // // //       const response = await fetch(url, { headers: { storeId } });
// // // // // // // //       const data = await response.json();
// // // // // // // //       if (!response.ok) throw new Error(data.error || "Failed to fetch sale");

// // // // // // // //       if (!data.sale) {
// // // // // // // //         setError(`No sale found with this ${searchType}.`);
// // // // // // // //       } else {
// // // // // // // //         console.log("Sale found:", data.sale);
// // // // // // // //         setSelectedSale(data.sale);
// // // // // // // //       }
// // // // // // // //     } catch (err) {
// // // // // // // //       setError("Error searching: " + err.message);
// // // // // // // //       console.error("Search error:", err);
// // // // // // // //     } finally {
// // // // // // // //       setIsLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleItemSelection = (product, quantity) => {
// // // // // // // //     setReturnItems((prev) => {
// // // // // // // //       const existing = prev.find((item) => item.product.barcode === product.barcode);
// // // // // // // //       if (existing) {
// // // // // // // //         return prev.map((item) =>
// // // // // // // //           item.product.barcode === product.barcode ? { ...item, quantity: Math.min(quantity, product.quantity) } : item
// // // // // // // //         );
// // // // // // // //       }
// // // // // // // //       return [...prev, { product, quantity: Math.min(quantity, product.quantity), condition: returnCondition }];
// // // // // // // //     });
// // // // // // // //   };

// // // // // // // //   const handleSubmitReturn = async () => {
// // // // // // // //     if (!selectedSale || returnItems.length === 0 || !returnReason) {
// // // // // // // //       setError("Please select a sale, items to return, and a reason.");
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     setIsLoading(true);
// // // // // // // //     setError(null);
// // // // // // // //     setSuccess(null);

// // // // // // // //     const returnData = {
// // // // // // // //       storeId,
// // // // // // // //       serialNumber: selectedSale.serialNumber,
// // // // // // // //       items: returnItems.map((item) => ({
// // // // // // // //         barcode: item.product.barcode,
// // // // // // // //         quantity: item.quantity,
// // // // // // // //         condition: item.condition,
// // // // // // // //       })),
// // // // // // // //       reason: returnReason,
// // // // // // // //       notes: returnNotes,
// // // // // // // //       refundOption,
// // // // // // // //       date: new Date().toISOString(),
// // // // // // // //     };

// // // // // // // //     try {
// // // // // // // //       console.log("Submitting return payload:", JSON.stringify(returnData, null, 2));
// // // // // // // //       const response = await fetch("http://localhost:5010/api/returns", {
// // // // // // // //         method: "POST",
// // // // // // // //         headers: { "Content-Type": "application/json", storeId },
// // // // // // // //         body: JSON.stringify(returnData),
// // // // // // // //       });
// // // // // // // //       const result = await response.json();
// // // // // // // //       console.log("Backend response:", result);
// // // // // // // //       if (!response.ok) throw new Error(result.error || "Failed to process return");

// // // // // // // //       // Update inventory
// // // // // // // //       for (const item of returnItems) {
// // // // // // // //         if (item.condition === "resellable") {
// // // // // // // //           const restockResponse = await fetch(
// // // // // // // //             `http://localhost:5000/products/restock-by-barcode?storeId=${storeId}&barcode=${item.product.barcode}`,
// // // // // // // //             {
// // // // // // // //               method: "POST",
// // // // // // // //               headers: { "Content-Type": "application/json" },
// // // // // // // //               body: JSON.stringify({ quantity: item.quantity }),
// // // // // // // //             }
// // // // // // // //           );
// // // // // // // //           const restockResult = await restockResponse.json();
// // // // // // // //           if (!restockResponse.ok) console.error("Restock failed:", restockResult);
// // // // // // // //           else console.log("Restock successful:", restockResult);
// // // // // // // //         } else {
// // // // // // // //           const damageResponse = await fetch(`http://localhost:5000/damage-items?storeId=${storeId}`, {
// // // // // // // //             method: "POST",
// // // // // // // //             headers: { "Content-Type": "application/json" },
// // // // // // // //             body: JSON.stringify({ barcode: item.product.barcode, quantity: item.quantity, reason: returnReason }),
// // // // // // // //           });
// // // // // // // //           const damageResult = await damageResponse.json();
// // // // // // // //           if (!damageResponse.ok) console.error("Damage record failed:", damageResult);
// // // // // // // //           else console.log("Damage recorded:", damageResult);
// // // // // // // //         }
// // // // // // // //       }

// // // // // // // //       // Refresh returns history
// // // // // // // //       const historyResponse = await fetch(`http://localhost:5010/api/returns?storeId=${storeId}`, {
// // // // // // // //         headers: { storeId },
// // // // // // // //       });
// // // // // // // //       const historyData = await historyResponse.json();
// // // // // // // //       if (historyResponse.ok) setReturnsHistory(historyData);

// // // // // // // //       setSuccess("Return processed successfully!");
// // // // // // // //       setTimeout(() => {
// // // // // // // //         setSearchInput("");
// // // // // // // //         setSelectedSale(null);
// // // // // // // //         setReturnItems([]);
// // // // // // // //         setReturnReason("");
// // // // // // // //         setReturnNotes("");
// // // // // // // //         setRefundOption("original");
// // // // // // // //       }, 2000);
// // // // // // // //     } catch (err) {
// // // // // // // //       setError("Error processing return: " + err.message);
// // // // // // // //       console.error("Submit error details:", err);
// // // // // // // //     } finally {
// // // // // // // //       setIsLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className={`${currentTheme.background} ${currentTheme.text} min-h-screen p-6`}>
// // // // // // // //       <motion.button
// // // // // // // //         whileHover={{ scale: 1.1 }}
// // // // // // // //         onClick={toggleTheme}
// // // // // // // //         className={`fixed top-6 right-6 p-3 rounded-full ${currentTheme.card}`}
// // // // // // // //       >
// // // // // // // //         {isDarkMode ? <Sun className={currentTheme.accent} /> : <Moon className={currentTheme.accent} />}
// // // // // // // //       </motion.button>

// // // // // // // //       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto">
// // // // // // // //         <h1 className="text-4xl font-bold text-center mb-6">Returns Management</h1>

// // // // // // // //         {/* Search Section */}
// // // // // // // //         <div className={`${currentTheme.card} p-6 rounded-lg mb-6`}>
// // // // // // // //           <div className="flex gap-4 items-center">
// // // // // // // //             <Search className={currentTheme.accent} />
// // // // // // // //             <select
// // // // // // // //               value={searchType}
// // // // // // // //               onChange={(e) => setSearchType(e.target.value)}
// // // // // // // //               className={`${currentTheme.input} p-2 rounded`}
// // // // // // // //             >
// // // // // // // //               <option value="serialNumber">Serial Number</option>
// // // // // // // //               <option value="barcode">Barcode</option>
// // // // // // // //               <option value="customer_phone">Customer Phone</option>
// // // // // // // //             </select>
// // // // // // // //             <input
// // // // // // // //               type="text"
// // // // // // // //               value={searchInput}
// // // // // // // //               onChange={(e) => setSearchInput(e.target.value)}
// // // // // // // //               placeholder={`Enter ${searchType.replace("_", " ")}`}
// // // // // // // //               className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // // // //             />
// // // // // // // //             <button
// // // // // // // //               onClick={handleSearch}
// // // // // // // //               disabled={isLoading}
// // // // // // // //               className={`${currentTheme.button} px-4 py-2 rounded`}
// // // // // // // //             >
// // // // // // // //               {isLoading ? "Searching..." : "Search"}
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //           {error && (
// // // // // // // //             <div className={`${currentTheme.error} mt-4 p-2 rounded flex gap-2`}>
// // // // // // // //               <AlertCircle /> {error}
// // // // // // // //             </div>
// // // // // // // //           )}
// // // // // // // //         </div>

// // // // // // // //         {/* Return Form */}
// // // // // // // //         {selectedSale && (
// // // // // // // //           <motion.div
// // // // // // // //             initial={{ opacity: 0 }}
// // // // // // // //             animate={{ opacity: 1 }}
// // // // // // // //             className={`${currentTheme.card} p-6 rounded-lg mb-6`}
// // // // // // // //           >
// // // // // // // //             <h2 className="text-2xl font-semibold mb-4">Process Return for Serial: {selectedSale.serialNumber}</h2>
// // // // // // // //             <div className="mb-4">
// // // // // // // //               <p>Total Amount: ${selectedSale.total_amount}</p>
// // // // // // // //               <p>Date: {selectedSale.date}</p>
// // // // // // // //               {selectedSale.customer_phone && <p>Customer Phone: {selectedSale.customer_phone}</p>}
// // // // // // // //             </div>

// // // // // // // //             <div className="mb-4">
// // // // // // // //               <h3 className="font-medium">Items to Return</h3>
// // // // // // // //               {selectedSale.products.map((product) => (
// // // // // // // //                 <div key={product.barcode} className="flex gap-4 py-2">
// // // // // // // //                   <input
// // // // // // // //                     type="number"
// // // // // // // //                     min="0"
// // // // // // // //                     max={product.quantity}
// // // // // // // //                     value={returnItems.find((i) => i.product.barcode === product.barcode)?.quantity || 0}
// // // // // // // //                     onChange={(e) => handleItemSelection(product, parseInt(e.target.value))}
// // // // // // // //                     className={`${currentTheme.input} w-16 p-1 rounded`}
// // // // // // // //                   />
// // // // // // // //                   <span>{product.name} (Qty: {product.quantity}, Price: ${product.total_price / product.quantity})</span>
// // // // // // // //                 </div>
// // // // // // // //               ))}
// // // // // // // //             </div>

// // // // // // // //             <div className="mb-4">
// // // // // // // //               <label className="block mb-1">Return Reason</label>
// // // // // // // //               <select
// // // // // // // //                 value={returnReason}
// // // // // // // //                 onChange={(e) => setReturnReason(e.target.value)}
// // // // // // // //                 className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // // // //               >
// // // // // // // //                 <option value="">Select</option>
// // // // // // // //                 <option value="defective">Defective</option>
// // // // // // // //                 <option value="wrong_item">Wrong Item</option>
// // // // // // // //                 <option value="damaged_shipping">Damaged in Shipping</option>
// // // // // // // //                 <option value="changed_mind">Changed Mind</option>
// // // // // // // //               </select>
// // // // // // // //             </div>

// // // // // // // //             <div className="mb-4">
// // // // // // // //               <label className="block mb-1">Notes</label>
// // // // // // // //               <textarea
// // // // // // // //                 value={returnNotes}
// // // // // // // //                 onChange={(e) => setReturnNotes(e.target.value)}
// // // // // // // //                 className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // // // //                 placeholder="Optional notes"
// // // // // // // //               />
// // // // // // // //             </div>

// // // // // // // //             <div className="mb-4">
// // // // // // // //               <label className="block mb-1">Condition</label>
// // // // // // // //               <select
// // // // // // // //                 value={returnCondition}
// // // // // // // //                 onChange={(e) => setReturnCondition(e.target.value)}
// // // // // // // //                 className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // // // //               >
// // // // // // // //                 <option value="resellable">Resellable</option>
// // // // // // // //                 <option value="damaged">Damaged</option>
// // // // // // // //               </select>
// // // // // // // //             </div>

// // // // // // // //             <div className="mb-4">
// // // // // // // //               <label className="block mb-1">Refund Option</label>
// // // // // // // //               <select
// // // // // // // //                 value={refundOption}
// // // // // // // //                 onChange={(e) => setRefundOption(e.target.value)}
// // // // // // // //                 className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // // // //               >
// // // // // // // //                 <option value="original">Original Payment</option>
// // // // // // // //                 <option value="store_credit">Store Credit</option>
// // // // // // // //                 <option value="loyalty">Loyalty Points</option>
// // // // // // // //                 <option value="exchange">Exchange</option>
// // // // // // // //               </select>
// // // // // // // //             </div>

// // // // // // // //             <button
// // // // // // // //               onClick={handleSubmitReturn}
// // // // // // // //               disabled={isLoading}
// // // // // // // //               className={`${currentTheme.button} w-full py-2 rounded`}
// // // // // // // //             >
// // // // // // // //               {isLoading ? "Processing..." : "Submit Return"}
// // // // // // // //             </button>

// // // // // // // //             {success && (
// // // // // // // //               <div className={`${currentTheme.success} mt-4 p-2 rounded flex gap-2`}>
// // // // // // // //                 <CheckCircle /> {success}
// // // // // // // //               </div>
// // // // // // // //             )}
// // // // // // // //           </motion.div>
// // // // // // // //         )}

// // // // // // // //         {/* Returns History */}
// // // // // // // //         <motion.div
// // // // // // // //           initial={{ opacity: 0 }}
// // // // // // // //           animate={{ opacity: 1 }}
// // // // // // // //           className={`${currentTheme.card} p-6 rounded-lg`}
// // // // // // // //         >
// // // // // // // //           <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
// // // // // // // //             <History className={currentTheme.accent} /> Returns History
// // // // // // // //           </h2>
// // // // // // // //           {returnsHistory.length === 0 ? (
// // // // // // // //             <p className={currentTheme.secondaryText}>No returns recorded yet.</p>
// // // // // // // //           ) : (
// // // // // // // //             <div className="space-y-4">
// // // // // // // //               {returnsHistory.map((returnEntry) => (
// // // // // // // //                 <div
// // // // // // // //                   key={returnEntry.returnId}
// // // // // // // //                   className={`${currentTheme.border} p-4 rounded-lg`}
// // // // // // // //                 >
// // // // // // // //                   <p>
// // // // // // // //                     <strong>Return ID:</strong> {returnEntry.returnId}
// // // // // // // //                   </p>
// // // // // // // //                   <p>
// // // // // // // //                     <strong>Serial Number:</strong> {returnEntry.serialNumber}
// // // // // // // //                   </p>
// // // // // // // //                   <p>
// // // // // // // //                     <strong>Date:</strong> {new Date(returnEntry.date).toLocaleString()}
// // // // // // // //                   </p>
// // // // // // // //                   <p>
// // // // // // // //                     <strong>Reason:</strong> {returnEntry.reason}
// // // // // // // //                   </p>
// // // // // // // //                   <p>
// // // // // // // //                     <strong>Total Refunded:</strong> ${returnEntry.totalRefunded.toFixed(2)}
// // // // // // // //                   </p>
// // // // // // // //                   <p>
// // // // // // // //                     <strong>Refund Option:</strong> {returnEntry.refundOption}
// // // // // // // //                   </p>
// // // // // // // //                   <p>
// // // // // // // //                     <strong>Items:</strong>
// // // // // // // //                   </p>
// // // // // // // //                   <ul className="list-disc pl-5">
// // // // // // // //                     {returnEntry.items.map((item, index) => (
// // // // // // // //                       <li key={index}>
// // // // // // // //                         Barcode: {item.barcode}, Quantity: {item.quantity}, Condition: {item.condition}
// // // // // // // //                       </li>
// // // // // // // //                     ))}
// // // // // // // //                   </ul>
// // // // // // // //                   {returnEntry.notes && (
// // // // // // // //                     <p>
// // // // // // // //                       <strong>Notes:</strong> {returnEntry.notes}
// // // // // // // //                     </p>
// // // // // // // //                   )}
// // // // // // // //                 </div>
// // // // // // // //               ))}
// // // // // // // //             </div>
// // // // // // // //           )}
// // // // // // // //         </motion.div>
// // // // // // // //       </motion.div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default ReturnsManagement;
// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import { motion } from "framer-motion";
// // // // // // // import { Search, AlertCircle, CheckCircle, Sun, Moon, History, Download, Filter } from "lucide-react";
// // // // // // // import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from "recharts";
// // // // // // // import "./ReturnsManagement.css"; // For custom styles

// // // // // // // const ReturnsManagement = () => {
// // // // // // //   const [storeId] = useState(localStorage.getItem("storeId") || "STORE-1737889146-4514");
// // // // // // //   const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark");
// // // // // // //   const [searchInput, setSearchInput] = useState("");
// // // // // // //   const [searchType, setSearchType] = useState("serialNumber");
// // // // // // //   const [selectedSale, setSelectedSale] = useState(null);
// // // // // // //   const [returnItems, setReturnItems] = useState([]);
// // // // // // //   const [returnReason, setReturnReason] = useState("");
// // // // // // //   const [returnNotes, setReturnNotes] = useState("");
// // // // // // //   const [returnCondition, setReturnCondition] = useState("resellable");
// // // // // // //   const [refundOption, setRefundOption] = useState("original");
// // // // // // //   const [returnsHistory, setReturnsHistory] = useState([]);
// // // // // // //   const [dateFilter, setDateFilter] = useState("all");
// // // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // // //   const [error, setError] = useState(null);
// // // // // // //   const [success, setSuccess] = useState(null);

// // // // // // //   const themes = {
// // // // // // //     light: {
// // // // // // //       background: "bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50",
// // // // // // //       text: "text-gray-800",
// // // // // // //       secondaryText: "text-gray-600",
// // // // // // //       accent: "text-purple-600",
// // // // // // //       button: "bg-purple-600 hover:bg-purple-700 text-white",
// // // // // // //       card: "bg-white",
// // // // // // //       border: "border-gray-300",
// // // // // // //       input: "bg-violet-50 border-gray-300",
// // // // // // //       error: "bg-red-50 text-red-600 border-red-200",
// // // // // // //       success: "bg-green-50 text-green-600 border-green-200",
// // // // // // //     },
// // // // // // //     dark: {
// // // // // // //       background: "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700",
// // // // // // //       text: "text-gray-100",
// // // // // // //       secondaryText: "text-gray-400",
// // // // // // //       accent: "text-purple-400",
// // // // // // //       button: "bg-purple-600 hover:bg-purple-700 text-white",
// // // // // // //       card: "bg-gray-800",
// // // // // // //       border: "border-gray-700",
// // // // // // //       input: "bg-gray-700 border-gray-600",
// // // // // // //       error: "bg-red-900/30 text-red-400 border-red-700",
// // // // // // //       success: "bg-green-900/30 text-green-300 border-green-700",
// // // // // // //     },
// // // // // // //   };

// // // // // // //   const currentTheme = isDarkMode ? themes.dark : themes.light;

// // // // // // //   // Fetch Returns History
// // // // // // //   useEffect(() => {
// // // // // // //     const fetchReturnsHistory = async () => {
// // // // // // //       if (!storeId) return;
// // // // // // //       try {
// // // // // // //         const response = await fetch(`http://localhost:5010/api/returns?storeId=${storeId}`, { headers: { storeId } });
// // // // // // //         const data = await response.json();
// // // // // // //         if (response.ok) {
// // // // // // //           setReturnsHistory(data);
// // // // // // //         } else {
// // // // // // //           console.error("Failed to fetch returns history:", data.error);
// // // // // // //         }
// // // // // // //       } catch (err) {
// // // // // // //         console.error("Error fetching returns history:", err);
// // // // // // //       }
// // // // // // //     };
// // // // // // //     fetchReturnsHistory();
// // // // // // //   }, [storeId]);

// // // // // // //   const toggleTheme = () => {
// // // // // // //     setIsDarkMode((prev) => {
// // // // // // //       const newMode = !prev;
// // // // // // //       localStorage.setItem("theme", newMode ? "dark" : "light");
// // // // // // //       return newMode;
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const handleSearch = async () => {
// // // // // // //     if (!storeId) {
// // // // // // //       setError("Store ID is missing. Please log in again.");
// // // // // // //       return;
// // // // // // //     }
// // // // // // //     if (!searchInput.trim()) {
// // // // // // //       setError("Please enter a search value.");
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     setIsLoading(true);
// // // // // // //     setError(null);
// // // // // // //     setSelectedSale(null);

// // // // // // //     try {
// // // // // // //       let url = "";
// // // // // // //       if (searchType === "serialNumber") {
// // // // // // //         const serialNumber = parseInt(searchInput);
// // // // // // //         url = `http://localhost:5010/api/sale-by-serial?storeId=${storeId}&serialNumber=${serialNumber}`;
// // // // // // //       } else if (searchType === "barcode") {
// // // // // // //         url = `http://localhost:5010/api/sale-by-barcode?storeId=${storeId}&barcode=${searchInput}`;
// // // // // // //       } else if (searchType === "customer_phone") {
// // // // // // //         url = `http://localhost:5010/api/sale-by-phone?storeId=${storeId}&phone=${searchInput}`;
// // // // // // //       }

// // // // // // //       console.log(`Searching with ${searchType}:`, searchInput);
// // // // // // //       const response = await fetch(url, { headers: { storeId } });
// // // // // // //       const data = await response.json();
// // // // // // //       if (!response.ok) throw new Error(data.error || "Failed to fetch sale");

// // // // // // //       if (!data.sale) {
// // // // // // //         setError(`No sale found with this ${searchType}.`);
// // // // // // //       } else {
// // // // // // //         console.log("Sale found:", data.sale);
// // // // // // //         setSelectedSale(data.sale);
// // // // // // //       }
// // // // // // //     } catch (err) {
// // // // // // //       setError("Error searching: " + err.message);
// // // // // // //       console.error("Search error:", err);
// // // // // // //     } finally {
// // // // // // //       setIsLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleItemSelection = (product, quantity) => {
// // // // // // //     setReturnItems((prev) => {
// // // // // // //       const existing = prev.find((item) => item.product.barcode === product.barcode);
// // // // // // //       if (existing) {
// // // // // // //         return prev.map((item) =>
// // // // // // //           item.product.barcode === product.barcode ? { ...item, quantity: Math.min(quantity, product.quantity) } : item
// // // // // // //         );
// // // // // // //       }
// // // // // // //       return [...prev, { product, quantity: Math.min(quantity, product.quantity), condition: returnCondition }];
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const handleSubmitReturn = async () => {
// // // // // // //     if (!selectedSale || returnItems.length === 0 || !returnReason) {
// // // // // // //       setError("Please select a sale, items to return, and a reason.");
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     setIsLoading(true);
// // // // // // //     setError(null);
// // // // // // //     setSuccess(null);

// // // // // // //     const returnData = {
// // // // // // //       storeId,
// // // // // // //       serialNumber: selectedSale.serialNumber,
// // // // // // //       items: returnItems.map((item) => ({
// // // // // // //         barcode: item.product.barcode,
// // // // // // //         quantity: item.quantity,
// // // // // // //         condition: item.condition,
// // // // // // //       })),
// // // // // // //       reason: returnReason,
// // // // // // //       notes: returnNotes,
// // // // // // //       refundOption,
// // // // // // //       date: new Date().toISOString(),
// // // // // // //     };

// // // // // // //     try {
// // // // // // //       console.log("Submitting return payload:", JSON.stringify(returnData, null, 2));
// // // // // // //       const response = await fetch("http://localhost:5010/api/returns", {
// // // // // // //         method: "POST",
// // // // // // //         headers: { "Content-Type": "application/json", storeId },
// // // // // // //         body: JSON.stringify(returnData),
// // // // // // //       });
// // // // // // //       const result = await response.json();
// // // // // // //       if (!response.ok) throw new Error(result.error || "Failed to process return");

// // // // // // //       // Update inventory
// // // // // // //       for (const item of returnItems) {
// // // // // // //         if (item.condition === "resellable") {
// // // // // // //           await fetch(`http://localhost:5000/products/restock-by-barcode?storeId=${storeId}&barcode=${item.product.barcode}`, {
// // // // // // //             method: "POST",
// // // // // // //             headers: { "Content-Type": "application/json" },
// // // // // // //             body: JSON.stringify({ quantity: item.quantity }),
// // // // // // //           });
// // // // // // //         } else {
// // // // // // //           await fetch(`http://localhost:5000/damage-items?storeId=${storeId}`, {
// // // // // // //             method: "POST",
// // // // // // //             headers: { "Content-Type": "application/json" },
// // // // // // //             body: JSON.stringify({ barcode: item.product.barcode, quantity: item.quantity, reason: returnReason }),
// // // // // // //           });
// // // // // // //         }
// // // // // // //       }

// // // // // // //       // Refresh returns history
// // // // // // //       const historyResponse = await fetch(`http://localhost:5010/api/returns?storeId=${storeId}`, { headers: { storeId } });
// // // // // // //       const historyData = await historyResponse.json();
// // // // // // //       if (historyResponse.ok) setReturnsHistory(historyData);

// // // // // // //       setSuccess("Return processed successfully!");
// // // // // // //       setTimeout(() => {
// // // // // // //         setSearchInput("");
// // // // // // //         setSelectedSale(null);
// // // // // // //         setReturnItems([]);
// // // // // // //         setReturnReason("");
// // // // // // //         setReturnNotes("");
// // // // // // //         setRefundOption("original");
// // // // // // //       }, 2000);
// // // // // // //     } catch (err) {
// // // // // // //       setError("Error processing return: " + err.message);
// // // // // // //       console.error("Submit error:", err);
// // // // // // //     } finally {
// // // // // // //       setIsLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleExportCSV = () => {
// // // // // // //     const csvContent = [
// // // // // // //       ["Return ID", "Serial Number", "Date", "Reason", "Total Refunded", "Refund Option", "Items"],
// // // // // // //       ...returnsHistory.map((r) => [
// // // // // // //         r.returnId,
// // // // // // //         r.serialNumber,
// // // // // // //         new Date(r.date).toLocaleString(),
// // // // // // //         r.reason,
// // // // // // //         r.totalRefunded.toFixed(2),
// // // // // // //         r.refundOption,
// // // // // // //         r.items.map((i) => `${i.barcode} (${i.quantity})`).join(", "),
// // // // // // //       ]),
// // // // // // //     ]
// // // // // // //       .map((row) => row.join(","))
// // // // // // //       .join("\n");
// // // // // // //     const blob = new Blob([csvContent], { type: "text/csv" });
// // // // // // //     const url = window.URL.createObjectURL(blob);
// // // // // // //     const a = document.createElement("a");
// // // // // // //     a.href = url;
// // // // // // //     a.download = "returns_history.csv";
// // // // // // //     a.click();
// // // // // // //   };

// // // // // // //   // Prepare data for visualizations
// // // // // // //   const today = new Date().toISOString().split("T")[0];
// // // // // // //   const filteredReturns = returnsHistory.filter((r) => {
// // // // // // //     if (dateFilter === "today") return r.date.startsWith(today);
// // // // // // //     if (dateFilter === "week") {
// // // // // // //       const weekAgo = new Date();
// // // // // // //       weekAgo.setDate(weekAgo.getDate() - 7);
// // // // // // //       return new Date(r.date) >= weekAgo;
// // // // // // //     }
// // // // // // //     return true;
// // // // // // //   });

// // // // // // //   const returnsTrendData = filteredReturns.reduce((acc, r) => {
// // // // // // //     const date = new Date(r.date).toLocaleDateString();
// // // // // // //     const existing = acc.find((d) => d.date === date);
// // // // // // //     if (existing) existing.amount += r.totalRefunded;
// // // // // // //     else acc.push({ date, amount: r.totalRefunded });
// // // // // // //     return acc;
// // // // // // //   }, []);

// // // // // // //   const topReturnedItems = filteredReturns
// // // // // // //     .flatMap((r) => r.items)
// // // // // // //     .reduce((acc, item) => {
// // // // // // //       const existing = acc.find((i) => i.barcode === item.barcode);
// // // // // // //       if (existing) existing.quantity += item.quantity;
// // // // // // //       else acc.push({ barcode: item.barcode, quantity: item.quantity });
// // // // // // //       return acc;
// // // // // // //     }, [])
// // // // // // //     .sort((a, b) => b.quantity - a.quantity)
// // // // // // //     .slice(0, 5);

// // // // // // //   const totalRefundsToday = returnsHistory
// // // // // // //     .filter((r) => r.date.startsWith(today))
// // // // // // //     .reduce((sum, r) => sum + r.totalRefunded, 0);

// // // // // // //   return (
// // // // // // //     <div className={`${currentTheme.background} ${currentTheme.text} min-h-screen p-6 font-khata`}>
// // // // // // //       <motion.button
// // // // // // //         whileHover={{ scale: 1.1 }}
// // // // // // //         onClick={toggleTheme}
// // // // // // //         className={`fixed top-6 right-6 p-3 rounded-full ${currentTheme.card}`}
// // // // // // //       >
// // // // // // //         {isDarkMode ? <Sun className={currentTheme.accent} /> : <Moon className={currentTheme.accent} />}
// // // // // // //       </motion.button>

// // // // // // //       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-5xl mx-auto space-y-8">
// // // // // // //         <h1 className="text-4xl font-bold text-center mb-6">Returns Management</h1>

// // // // // // //         {/* Search Section */}
// // // // // // //         <div className={`${currentTheme.card} p-6 rounded-lg shadow-lg`}>
// // // // // // //           <div className="flex gap-4 items-center">
// // // // // // //             <Search className={currentTheme.accent} />
// // // // // // //             <select
// // // // // // //               value={searchType}
// // // // // // //               onChange={(e) => setSearchType(e.target.value)}
// // // // // // //               className={`${currentTheme.input} p-2 rounded`}
// // // // // // //             >
// // // // // // //               <option value="serialNumber">Serial Number</option>
// // // // // // //               <option value="barcode">Barcode</option>
// // // // // // //               <option value="customer_phone">Customer Phone</option>
// // // // // // //             </select>
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               value={searchInput}
// // // // // // //               onChange={(e) => setSearchInput(e.target.value)}
// // // // // // //               placeholder={`Enter ${searchType.replace("_", " ")}`}
// // // // // // //               className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // // //             />
// // // // // // //             <button
// // // // // // //               onClick={handleSearch}
// // // // // // //               disabled={isLoading}
// // // // // // //               className={`${currentTheme.button} px-4 py-2 rounded`}
// // // // // // //             >
// // // // // // //               {isLoading ? "Searching..." : "Search"}
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //           {error && (
// // // // // // //             <div className={`${currentTheme.error} mt-4 p-2 rounded flex gap-2`}>
// // // // // // //               <AlertCircle /> {error}
// // // // // // //             </div>
// // // // // // //           )}
// // // // // // //         </div>

// // // // // // //         {/* Return Form */}
// // // // // // //         {selectedSale && (
// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0 }}
// // // // // // //             animate={{ opacity: 1 }}
// // // // // // //             className={`${currentTheme.card} p-6 rounded-lg shadow-lg`}
// // // // // // //           >
// // // // // // //             <h2 className="text-2xl font-semibold mb-4">Process Return for Serial: {selectedSale.serialNumber}</h2>
// // // // // // //             <div className="mb-4">
// // // // // // //               <p>Total Amount: ${selectedSale.total_amount}</p>
// // // // // // //               <p>Date: {selectedSale.date}</p>
// // // // // // //               {selectedSale.customer_phone && <p>Customer Phone: {selectedSale.customer_phone}</p>}
// // // // // // //             </div>

// // // // // // //             <div className="mb-4">
// // // // // // //               <h3 className="font-medium">Items to Return</h3>
// // // // // // //               {selectedSale.products.map((product) => (
// // // // // // //                 <div key={product.barcode} className="flex gap-4 py-2">
// // // // // // //                   <input
// // // // // // //                     type="number"
// // // // // // //                     min="0"
// // // // // // //                     max={product.quantity}
// // // // // // //                     value={returnItems.find((i) => i.product.barcode === product.barcode)?.quantity || 0}
// // // // // // //                     onChange={(e) => handleItemSelection(product, parseInt(e.target.value))}
// // // // // // //                     className={`${currentTheme.input} w-16 p-1 rounded`}
// // // // // // //                   />
// // // // // // //                   <span>{product.name} (Qty: {product.quantity}, Price: ${product.total_price / product.quantity})</span>
// // // // // // //                 </div>
// // // // // // //               ))}
// // // // // // //             </div>

// // // // // // //             <div className="grid grid-cols-2 gap-4 mb-4">
// // // // // // //               <div>
// // // // // // //                 <label className="block mb-1">Return Reason</label>
// // // // // // //                 <select
// // // // // // //                   value={returnReason}
// // // // // // //                   onChange={(e) => setReturnReason(e.target.value)}
// // // // // // //                   className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // // //                 >
// // // // // // //                   <option value="">Select</option>
// // // // // // //                   <option value="defective">Defective</option>
// // // // // // //                   <option value="wrong_item">Wrong Item</option>
// // // // // // //                   <option value="damaged_shipping">Damaged in Shipping</option>
// // // // // // //                   <option value="changed_mind">Changed Mind</option>
// // // // // // //                 </select>
// // // // // // //               </div>
// // // // // // //               <div>
// // // // // // //                 <label className="block mb-1">Condition</label>
// // // // // // //                 <select
// // // // // // //                   value={returnCondition}
// // // // // // //                   onChange={(e) => setReturnCondition(e.target.value)}
// // // // // // //                   className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // // //                 >
// // // // // // //                   <option value="resellable">Resellable</option>
// // // // // // //                   <option value="damaged">Damaged</option>
// // // // // // //                 </select>
// // // // // // //               </div>
// // // // // // //               <div>
// // // // // // //                 <label className="block mb-1">Refund Option</label>
// // // // // // //                 <select
// // // // // // //                   value={refundOption}
// // // // // // //                   onChange={(e) => setRefundOption(e.target.value)}
// // // // // // //                   className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // // //                 >
// // // // // // //                   <option value="original">Original Payment</option>
// // // // // // //                   <option value="store_credit">Store Credit</option>
// // // // // // //                   <option value="loyalty">Loyalty Points</option>
// // // // // // //                   <option value="exchange">Exchange</option>
// // // // // // //                 </select>
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             <div className="mb-4">
// // // // // // //               <label className="block mb-1">Notes</label>
// // // // // // //               <textarea
// // // // // // //                 value={returnNotes}
// // // // // // //                 onChange={(e) => setReturnNotes(e.target.value)}
// // // // // // //                 className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // // //                 placeholder="Optional notes"
// // // // // // //               />
// // // // // // //             </div>

// // // // // // //             <button
// // // // // // //               onClick={handleSubmitReturn}
// // // // // // //               disabled={isLoading}
// // // // // // //               className={`${currentTheme.button} w-full py-2 rounded`}
// // // // // // //             >
// // // // // // //               {isLoading ? "Processing..." : "Submit Return"}
// // // // // // //             </button>

// // // // // // //             {success && (
// // // // // // //               <div className={`${currentTheme.success} mt-4 p-2 rounded flex gap-2`}>
// // // // // // //                 <CheckCircle /> {success}
// // // // // // //               </div>
// // // // // // //             )}
// // // // // // //           </motion.div>
// // // // // // //         )}

// // // // // // //         {/* Visualizations and Summary */}
// // // // // // //         <div className={`${currentTheme.card} p-6 rounded-lg shadow-lg`}>
// // // // // // //           <h2 className="text-2xl font-semibold mb-4">Returns Dashboard</h2>

// // // // // // //           {/* Today's Refund Summary */}
// // // // // // //           <div className="mb-6">
// // // // // // //             <p className="text-lg">
// // // // // // //               <strong>Total Refunds Today:</strong> ${totalRefundsToday.toFixed(2)}
// // // // // // //             </p>
// // // // // // //           </div>

// // // // // // //           {/* Returns Trend Chart */}
// // // // // // //           <div className="mb-6">
// // // // // // //             <h3 className="font-medium mb-2">Returns Trend</h3>
// // // // // // //             <LineChart width={600} height={300} data={returnsTrendData} className="mx-auto">
// // // // // // //               <CartesianGrid strokeDasharray="3 3" />
// // // // // // //               <XAxis dataKey="date" />
// // // // // // //               <YAxis />
// // // // // // //               <Tooltip />
// // // // // // //               <Legend />
// // // // // // //               <Line type="monotone" dataKey="amount" stroke={isDarkMode ? "#a78bfa" : "#6b7280"} />
// // // // // // //             </LineChart>
// // // // // // //           </div>

// // // // // // //           {/* Top Returned Items */}
// // // // // // //           <div className="mb-6">
// // // // // // //             <h3 className="font-medium mb-2">Top Returned Items</h3>
// // // // // // //             <BarChart width={600} height={300} data={topReturnedItems} className="mx-auto">
// // // // // // //               <CartesianGrid strokeDasharray="3 3" />
// // // // // // //               <XAxis dataKey="barcode" />
// // // // // // //               <YAxis />
// // // // // // //               <Tooltip />
// // // // // // //               <Legend />
// // // // // // //               <Bar dataKey="quantity" fill={isDarkMode ? "#a78bfa" : "#6b7280"} />
// // // // // // //             </BarChart>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Returns History (Khata Book Style) */}
// // // // // // //         <div className={`${currentTheme.card} p-6 rounded-lg shadow-lg`}>
// // // // // // //           <div className="flex justify-between items-center mb-4">
// // // // // // //             <h2 className="text-2xl font-semibold flex items-center gap-2">
// // // // // // //               <History className={currentTheme.accent} /> Returns History
// // // // // // //             </h2>
// // // // // // //             <div className="flex gap-4">
// // // // // // //               <select
// // // // // // //                 value={dateFilter}
// // // // // // //                 onChange={(e) => setDateFilter(e.target.value)}
// // // // // // //                 className={`${currentTheme.input} p-2 rounded`}
// // // // // // //               >
// // // // // // //                 <option value="all">All Time</option>
// // // // // // //                 <option value="today">Today</option>
// // // // // // //                 <option value="week">Last 7 Days</option>
// // // // // // //               </select>
// // // // // // //               <button
// // // // // // //                 onClick={handleExportCSV}
// // // // // // //                 className={`${currentTheme.button} px-4 py-2 rounded flex items-center gap-2`}
// // // // // // //               >
// // // // // // //                 <Download /> Export CSV
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {filteredReturns.length === 0 ? (
// // // // // // //             <p className={currentTheme.secondaryText}>No returns recorded for this period.</p>
// // // // // // //           ) : (
// // // // // // //             <div className="overflow-x-auto">
// // // // // // //               <table className="w-full khata-table">
// // // // // // //                 <thead>
// // // // // // //                   <tr className={`${currentTheme.border} bg-gray-200 dark:bg-gray-700`}>
// // // // // // //                     <th className="p-2">Return ID</th>
// // // // // // //                     <th className="p-2">Serial No.</th>
// // // // // // //                     <th className="p-2">Date</th>
// // // // // // //                     <th className="p-2">Reason</th>
// // // // // // //                     <th className="p-2">Refunded</th>
// // // // // // //                     <th className="p-2">Items</th>
// // // // // // //                   </tr>
// // // // // // //                 </thead>
// // // // // // //                 <tbody>
// // // // // // //                   {filteredReturns.map((r, index) => (
// // // // // // //                     <tr key={r.returnId} className={index % 2 === 0 ? "bg-gray-100 dark:bg-gray-800" : ""}>
// // // // // // //                       <td className="p-2">{r.returnId}</td>
// // // // // // //                       <td className="p-2">{r.serialNumber}</td>
// // // // // // //                       <td className="p-2">{new Date(r.date).toLocaleString()}</td>
// // // // // // //                       <td className="p-2">{r.reason}</td>
// // // // // // //                       <td className="p-2">${r.totalRefunded.toFixed(2)}</td>
// // // // // // //                       <td className="p-2">
// // // // // // //                         {r.items.map((i) => `${i.barcode} (${i.quantity})`).join(", ")}
// // // // // // //                       </td>
// // // // // // //                     </tr>
// // // // // // //                   ))}
// // // // // // //                 </tbody>
// // // // // // //               </table>
// // // // // // //             </div>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       </motion.div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ReturnsManagement;
// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import { motion } from "framer-motion";
// // // // // // import {
// // // // // //   Search,
// // // // // //   AlertCircle,
// // // // // //   CheckCircle,
// // // // // //   Sun,
// // // // // //   Moon,
// // // // // //   History,
// // // // // //   Download,
// // // // // //   Filter,
// // // // // // } from "lucide-react";
// // // // // // import {
// // // // // //   BarChart,
// // // // // //   Bar,
// // // // // //   XAxis,
// // // // // //   YAxis,
// // // // // //   CartesianGrid,
// // // // // //   Tooltip,
// // // // // //   Legend,
// // // // // //   LineChart,
// // // // // //   Line,
// // // // // //   PieChart,
// // // // // //   Pie,
// // // // // //   Cell,
// // // // // // } from "recharts";
// // // // // // import "./ReturnsManagement.css";

// // // // // // const ReturnsManagement = () => {
// // // // // //   const [storeId] = useState(localStorage.getItem("storeId") || "STORE-1737889146-4514");
// // // // // //   const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark");
// // // // // //   const [searchInput, setSearchInput] = useState("");
// // // // // //   const [searchType, setSearchType] = useState("serialNumber");
// // // // // //   const [selectedSale, setSelectedSale] = useState(null);
// // // // // //   const [returnItems, setReturnItems] = useState([]);
// // // // // //   const [returnReason, setReturnReason] = useState("");
// // // // // //   const [returnNotes, setReturnNotes] = useState("");
// // // // // //   const [returnCondition, setReturnCondition] = useState("resellable");
// // // // // //   const [refundOption, setRefundOption] = useState("original");
// // // // // //   const [returnsHistory, setReturnsHistory] = useState([]);
// // // // // //   const [dateFilter, setDateFilter] = useState("all");
// // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // //   const [error, setError] = useState(null);
// // // // // //   const [success, setSuccess] = useState(null);

// // // // // //   const themes = {
// // // // // //     light: {
// // // // // //       background: "bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50",
// // // // // //       text: "text-gray-800",
// // // // // //       secondaryText: "text-gray-600",
// // // // // //       accent: "text-purple-600",
// // // // // //       button: "bg-purple-600 hover:bg-purple-700 text-white",
// // // // // //       card: "bg-white",
// // // // // //       border: "border-gray-300",
// // // // // //       input: "bg-violet-50 border-gray-300",
// // // // // //       error: "bg-red-50 text-red-600 border-red-200",
// // // // // //       success: "bg-green-50 text-green-600 border-green-200",
// // // // // //     },
// // // // // //     dark: {
// // // // // //       background: "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700",
// // // // // //       text: "text-gray-100",
// // // // // //       secondaryText: "text-gray-400",
// // // // // //       accent: "text-purple-400",
// // // // // //       button: "bg-purple-600 hover:bg-purple-700 text-white",
// // // // // //       card: "bg-gray-800",
// // // // // //       border: "border-gray-700",
// // // // // //       input: "bg-gray-700 border-gray-600",
// // // // // //       error: "bg-red-900/30 text-red-400 border-red-700",
// // // // // //       success: "bg-green-900/30 text-green-300 border-green-700",
// // // // // //     },
// // // // // //   };

// // // // // //   const currentTheme = isDarkMode ? themes.dark : themes.light;
// // // // // //   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A78BFA"];

// // // // // //   useEffect(() => {
// // // // // //     const fetchReturnsHistory = async () => {
// // // // // //       if (!storeId) return;
// // // // // //       try {
// // // // // //         const response = await fetch(`http://localhost:5010/api/returns?storeId=${storeId}`, {
// // // // // //           headers: { storeId },
// // // // // //         });
// // // // // //         const data = await response.json();
// // // // // //         if (response.ok) {
// // // // // //           setReturnsHistory(data);
// // // // // //         } else {
// // // // // //           console.error("Failed to fetch returns history:", data.error);
// // // // // //           setReturnsHistory([]); // Fallback to empty array on error
// // // // // //         }
// // // // // //       } catch (err) {
// // // // // //         console.error("Error fetching returns history:", err);
// // // // // //         setReturnsHistory([]); // Fallback to empty array on fetch failure
// // // // // //       }
// // // // // //     };
// // // // // //     fetchReturnsHistory();
// // // // // //   }, [storeId]);

// // // // // //   const toggleTheme = () => {
// // // // // //     setIsDarkMode((prev) => {
// // // // // //       const newMode = !prev;
// // // // // //       localStorage.setItem("theme", newMode ? "dark" : "light");
// // // // // //       return newMode;
// // // // // //     });
// // // // // //   };

// // // // // //   const handleSearch = async () => {
// // // // // //     if (!storeId) {
// // // // // //       setError("Store ID is missing. Please log in again.");
// // // // // //       return;
// // // // // //     }
// // // // // //     if (!searchInput.trim()) {
// // // // // //       setError("Please enter a search value.");
// // // // // //       return;
// // // // // //     }

// // // // // //     setIsLoading(true);
// // // // // //     setError(null);
// // // // // //     setSelectedSale(null);

// // // // // //     try {
// // // // // //       let url = "";
// // // // // //       if (searchType === "serialNumber") {
// // // // // //         const serialNumber = parseInt(searchInput);
// // // // // //         url = `http://localhost:5010/api/sale-by-serial?storeId=${storeId}&serialNumber=${serialNumber}`;
// // // // // //       } else if (searchType === "barcode") {
// // // // // //         url = `http://localhost:5010/api/sale-by-barcode?storeId=${storeId}&barcode=${searchInput}`;
// // // // // //       } else if (searchType === "customer_phone") {
// // // // // //         url = `http://localhost:5010/api/sale-by-phone?storeId=${storeId}&phone=${searchInput}`;
// // // // // //       }

// // // // // //       const response = await fetch(url, { headers: { storeId } });
// // // // // //       const data = await response.json();
// // // // // //       if (!response.ok) throw new Error(data.error || "Failed to fetch sale");

// // // // // //       if (!data.sale) {
// // // // // //         setError(`No sale found with this ${searchType}.`);
// // // // // //       } else {
// // // // // //         setSelectedSale(data.sale);
// // // // // //       }
// // // // // //     } catch (err) {
// // // // // //       setError("Error searching: " + err.message);
// // // // // //       console.error("Search error:", err);
// // // // // //     } finally {
// // // // // //       setIsLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleItemSelection = (product, quantity) => {
// // // // // //     setReturnItems((prev) => {
// // // // // //       const existing = prev.find((item) => item.product.barcode === product.barcode);
// // // // // //       if (existing) {
// // // // // //         return prev.map((item) =>
// // // // // //           item.product.barcode === product.barcode ? { ...item, quantity: Math.min(quantity, product.quantity) } : item
// // // // // //         );
// // // // // //       }
// // // // // //       return [...prev, { product, quantity: Math.min(quantity, product.quantity), condition: returnCondition }];
// // // // // //     });
// // // // // //   };

// // // // // //   const handleSubmitReturn = async () => {
// // // // // //     if (!selectedSale || returnItems.length === 0 || !returnReason) {
// // // // // //       setError("Please select a sale, items to return, and a reason.");
// // // // // //       return;
// // // // // //     }

// // // // // //     setIsLoading(true);
// // // // // //     setError(null);
// // // // // //     setSuccess(null);

// // // // // //     const returnData = {
// // // // // //       storeId,
// // // // // //       serialNumber: selectedSale.serialNumber,
// // // // // //       items: returnItems.map((item) => ({
// // // // // //         barcode: item.product.barcode,
// // // // // //         quantity: item.quantity,
// // // // // //         condition: item.condition,
// // // // // //       })),
// // // // // //       reason: returnReason,
// // // // // //       notes: returnNotes,
// // // // // //       refundOption,
// // // // // //       date: new Date().toISOString(),
// // // // // //     };

// // // // // //     try {
// // // // // //       const response = await fetch("http://localhost:5010/api/returns", {
// // // // // //         method: "POST",
// // // // // //         headers: { "Content-Type": "application/json", storeId },
// // // // // //         body: JSON.stringify(returnData),
// // // // // //       });
// // // // // //       const result = await response.json();
// // // // // //       if (!response.ok) throw new Error(result.error || "Failed to process return");

// // // // // //       for (const item of returnItems) {
// // // // // //         if (item.condition === "resellable") {
// // // // // //           await fetch(`http://localhost:5000/products/restock-by-barcode?storeId=${storeId}&barcode=${item.product.barcode}`, {
// // // // // //             method: "POST",
// // // // // //             headers: { "Content-Type": "application/json" },
// // // // // //             body: JSON.stringify({ quantity: item.quantity }),
// // // // // //           });
// // // // // //         } else {
// // // // // //           await fetch(`http://localhost:5000/damage-items?storeId=${storeId}`, {
// // // // // //             method: "POST",
// // // // // //             headers: { "Content-Type": "application/json" },
// // // // // //             body: JSON.stringify({ barcode: item.product.barcode, quantity: item.quantity, reason: returnReason }),
// // // // // //           });
// // // // // //         }
// // // // // //       }

// // // // // //       const historyResponse = await fetch(`http://localhost:5010/api/returns?storeId=${storeId}`, { headers: { storeId } });
// // // // // //       const historyData = await historyResponse.json();
// // // // // //       if (historyResponse.ok) setReturnsHistory(historyData);

// // // // // //       setSuccess("Return processed successfully!");
// // // // // //       setTimeout(() => {
// // // // // //         setSearchInput("");
// // // // // //         setSelectedSale(null);
// // // // // //         setReturnItems([]);
// // // // // //         setReturnReason("");
// // // // // //         setReturnNotes("");
// // // // // //         setRefundOption("original");
// // // // // //       }, 2000);
// // // // // //     } catch (err) {
// // // // // //       setError("Error processing return: " + err.message);
// // // // // //       console.error("Submit error:", err);
// // // // // //     } finally {
// // // // // //       setIsLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleExportCSV = () => {
// // // // // //     const csvContent = [
// // // // // //       ["Return ID", "Serial Number", "Date", "Reason", "Total Refunded", "Refund Option", "Items"],
// // // // // //       ...returnsHistory.map((r) => [
// // // // // //         r.returnId,
// // // // // //         r.serialNumber,
// // // // // //         new Date(r.date).toLocaleString(),
// // // // // //         r.reason,
// // // // // //         r.totalRefunded.toFixed(2),
// // // // // //         r.refundOption,
// // // // // //         r.items.map((i) => `${i.barcode} (${i.quantity})`).join(", "),
// // // // // //       ]),
// // // // // //     ]
// // // // // //       .map((row) => row.join(","))
// // // // // //       .join("\n");
// // // // // //     const blob = new Blob([csvContent], { type: "text/csv" });
// // // // // //     const url = window.URL.createObjectURL(blob);
// // // // // //     const a = document.createElement("a");
// // // // // //     a.href = url;
// // // // // //     a.download = "returns_history.csv";
// // // // // //     a.click();
// // // // // //   };

// // // // // //   // Data Preparation with Fallbacks
// // // // // //   const today = new Date().toISOString().split("T")[0];
// // // // // //   const filteredReturns = returnsHistory.filter((r) => {
// // // // // //     if (dateFilter === "today") return r.date.startsWith(today);
// // // // // //     if (dateFilter === "week") {
// // // // // //       const weekAgo = new Date();
// // // // // //       weekAgo.setDate(weekAgo.getDate() - 7);
// // // // // //       return new Date(r.date) >= weekAgo;
// // // // // //     }
// // // // // //     return true;
// // // // // //   });

// // // // // //   const returnsTrendData = filteredReturns.reduce((acc, r) => {
// // // // // //     const date = new Date(r.date).toLocaleDateString();
// // // // // //     const existing = acc.find((d) => d.date === date);
// // // // // //     const resellable = r.items.reduce((sum, i) => (i.condition === "resellable" ? sum + i.quantity : sum), 0);
// // // // // //     const damaged = r.items.reduce((sum, i) => (i.condition === "damaged" ? sum + i.quantity : sum), 0);
// // // // // //     if (existing) {
// // // // // //       existing.total += r.totalRefunded;
// // // // // //       existing.resellable += resellable;
// // // // // //       existing.damaged += damaged;
// // // // // //     } else {
// // // // // //       acc.push({ date, total: r.totalRefunded, resellable, damaged });
// // // // // //     }
// // // // // //     return acc;
// // // // // //   }, []);

// // // // // //   const reasonsData = filteredReturns.reduce((acc, r) => {
// // // // // //     const existing = acc.find((d) => d.name === r.reason);
// // // // // //     if (existing) existing.value += r.totalRefunded;
// // // // // //     else acc.push({ name: r.reason, value: r.totalRefunded });
// // // // // //     return acc;
// // // // // //   }, []);

// // // // // //   const conditionsData = filteredReturns.reduce((acc, r) => {
// // // // // //     const date = new Date(r.date).toLocaleDateString();
// // // // // //     const existing = acc.find((d) => d.date === date);
// // // // // //     const resellable = r.items.reduce((sum, i) => (i.condition === "resellable" ? sum + i.quantity : sum), 0);
// // // // // //     const damaged = r.items.reduce((sum, i) => (i.condition === "damaged" ? sum + i.quantity : sum), 0);
// // // // // //     if (existing) {
// // // // // //       existing.resellable += resellable;
// // // // // //       existing.damaged += damaged;
// // // // // //     } else {
// // // // // //       acc.push({ date, resellable, damaged });
// // // // // //     }
// // // // // //     return acc;
// // // // // //   }, []);

// // // // // //   const refundOptionsData = filteredReturns.reduce((acc, r) => {
// // // // // //     const existing = acc.find((d) => d.name === r.refundOption);
// // // // // //     if (existing) existing.value += r.totalRefunded;
// // // // // //     else acc.push({ name: r.refundOption, value: r.totalRefunded });
// // // // // //     return acc;
// // // // // //   }, []);

// // // // // //   const topReturnedItems = filteredReturns
// // // // // //     .flatMap((r) => r.items)
// // // // // //     .reduce((acc, item) => {
// // // // // //       const existing = acc.find((i) => i.barcode === item.barcode);
// // // // // //       if (existing) existing.quantity += item.quantity;
// // // // // //       else acc.push({ barcode: item.barcode, quantity: item.quantity });
// // // // // //     }, [])
// // // // // //     .sort((a, b) => b.quantity - a.quantity)
// // // // // //     .slice(0, 5);

// // // // // //   const totalRefundsToday = filteredReturns
// // // // // //     .filter((r) => r.date.startsWith(today))
// // // // // //     .reduce((sum, r) => sum + r.totalRefunded, 0);

// // // // // //   // Summary Stats with Fallbacks
// // // // // //   const mostCommonReason = reasonsData.length > 0 ? reasonsData.sort((a, b) => b.value - a.value)[0]?.name || "N/A" : "N/A";
// // // // // //   const highestRefundDay = returnsTrendData.length > 0 ? returnsTrendData.sort((a, b) => b.total - a.total)[0]?.date || "N/A" : "N/A";

// // // // // //   return (
// // // // // //     <div className={`${currentTheme.background} ${currentTheme.text} min-h-screen p-6 font-khata`}>
// // // // // //       <motion.button
// // // // // //         whileHover={{ scale: 1.1 }}
// // // // // //         onClick={toggleTheme}
// // // // // //         className={`fixed top-6 right-6 p-3 rounded-full ${currentTheme.card}`}
// // // // // //       >
// // // // // //         {isDarkMode ? <Sun className={currentTheme.accent} /> : <Moon className={currentTheme.accent} />}
// // // // // //       </motion.button>

// // // // // //       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-6xl mx-auto space-y-8">
// // // // // //         <h1 className="text-4xl font-bold text-center mb-6">Returns Management</h1>

// // // // // //         {/* Search Section */}
// // // // // //         <div className={`${currentTheme.card} p-6 rounded-lg shadow-lg`}>
// // // // // //           <div className="flex gap-4 items-center">
// // // // // //             <Search className={currentTheme.accent} />
// // // // // //             <select
// // // // // //               value={searchType}
// // // // // //               onChange={(e) => setSearchType(e.target.value)}
// // // // // //               className={`${currentTheme.input} p-2 rounded`}
// // // // // //             >
// // // // // //               <option value="serialNumber">Serial Number</option>
// // // // // //               <option value="barcode">Barcode</option>
// // // // // //               <option value="customer_phone">Customer Phone</option>
// // // // // //             </select>
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               value={searchInput}
// // // // // //               onChange={(e) => setSearchInput(e.target.value)}
// // // // // //               placeholder={`Enter ${searchType.replace("_", " ")}`}
// // // // // //               className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // //             />
// // // // // //             <button
// // // // // //               onClick={handleSearch}
// // // // // //               disabled={isLoading}
// // // // // //               className={`${currentTheme.button} px-4 py-2 rounded`}
// // // // // //             >
// // // // // //               {isLoading ? "Searching..." : "Search"}
// // // // // //             </button>
// // // // // //           </div>
// // // // // //           {error && (
// // // // // //             <div className={`${currentTheme.error} mt-4 p-2 rounded flex gap-2`}>
// // // // // //               <AlertCircle /> {error}
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>

// // // // // //         {/* Simple Return Form */}
// // // // // //         {selectedSale && (
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0 }}
// // // // // //             animate={{ opacity: 1 }}
// // // // // //             className={`${currentTheme.card} p-6 rounded-lg shadow-lg`}
// // // // // //           >
// // // // // //             <h2 className="text-2xl font-semibold mb-4">Process Return - Serial: {selectedSale.serialNumber}</h2>
// // // // // //             <div className="mb-4">
// // // // // //               <p>Total Amount: ${selectedSale.total_amount}</p>
// // // // // //               <p>Date: {selectedSale.date}</p>
// // // // // //               {selectedSale.customer_phone && <p>Customer Phone: {selectedSale.customer_phone}</p>}
// // // // // //             </div>

// // // // // //             <div className="mb-4">
// // // // // //               <h3 className="font-medium">Items to Return</h3>
// // // // // //               {selectedSale.products.map((product) => (
// // // // // //                 <div key={product.barcode} className="flex gap-4 py-2">
// // // // // //                   <input
// // // // // //                     type="number"
// // // // // //                     min="0"
// // // // // //                     max={product.quantity}
// // // // // //                     value={returnItems.find((i) => i.product.barcode === product.barcode)?.quantity || 0}
// // // // // //                     onChange={(e) => handleItemSelection(product, parseInt(e.target.value))}
// // // // // //                     className={`${currentTheme.input} w-16 p-1 rounded`}
// // // // // //                   />
// // // // // //                   <span>{product.name} (Qty: {product.quantity}, Price: ${product.total_price / product.quantity})</span>
// // // // // //                 </div>
// // // // // //               ))}
// // // // // //             </div>

// // // // // //             <div className="grid grid-cols-2 gap-4 mb-4">
// // // // // //               <div>
// // // // // //                 <label className="block mb-1">Reason</label>
// // // // // //                 <select
// // // // // //                   value={returnReason}
// // // // // //                   onChange={(e) => setReturnReason(e.target.value)}
// // // // // //                   className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // //                 >
// // // // // //                   <option value="">Select</option>
// // // // // //                   <option value="defective">Defective</option>
// // // // // //                   <option value="wrong_item">Wrong Item</option>
// // // // // //                   <option value="damaged_shipping">Damaged in Shipping</option>
// // // // // //                   <option value="changed_mind">Changed Mind</option>
// // // // // //                 </select>
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <label className="block mb-1">Condition</label>
// // // // // //                 <select
// // // // // //                   value={returnCondition}
// // // // // //                   onChange={(e) => setReturnCondition(e.target.value)}
// // // // // //                   className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // //                 >
// // // // // //                   <option value="resellable">Resellable</option>
// // // // // //                   <option value="damaged">Damaged</option>
// // // // // //                 </select>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             <div className="grid grid-cols-2 gap-4 mb-4">
// // // // // //               <div>
// // // // // //                 <label className="block mb-1">Refund Option</label>
// // // // // //                 <select
// // // // // //                   value={refundOption}
// // // // // //                   onChange={(e) => setRefundOption(e.target.value)}
// // // // // //                   className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // //                 >
// // // // // //                   <option value="original">Original Payment</option>
// // // // // //                   <option value="store_credit">Store Credit</option>
// // // // // //                   <option value="loyalty">Loyalty Points</option>
// // // // // //                   <option value="exchange">Exchange</option>
// // // // // //                 </select>
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <label className="block mb-1">Notes</label>
// // // // // //                 <textarea
// // // // // //                   value={returnNotes}
// // // // // //                   onChange={(e) => setReturnNotes(e.target.value)}
// // // // // //                   className={`${currentTheme.input} w-full p-2 rounded`}
// // // // // //                   placeholder="Optional"
// // // // // //                 />
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             <button
// // // // // //               onClick={handleSubmitReturn}
// // // // // //               disabled={isLoading}
// // // // // //               className={`${currentTheme.button} w-full py-2 rounded`}
// // // // // //             >
// // // // // //               {isLoading ? "Processing..." : "Submit Return"}
// // // // // //             </button>

// // // // // //             {success && (
// // // // // //               <div className={`${currentTheme.success} mt-4 p-2 rounded flex gap-2`}>
// // // // // //                 <CheckCircle /> {success}
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </motion.div>
// // // // // //         )}

// // // // // //         {/* Visualizations and Insights */}
// // // // // //         <div className={`${currentTheme.card} p-6 rounded-lg shadow-lg`}>
// // // // // //           <h2 className="text-2xl font-semibold mb-4">Returns Insights</h2>

// // // // // //           {/* Summary Stats */}
// // // // // //           <div className="grid grid-cols-3 gap-4 mb-6">
// // // // // //             <p>
// // // // // //               <strong>Total Refunds Today:</strong> ${totalRefundsToday.toFixed(2)}
// // // // // //             </p>
// // // // // //             <p>
// // // // // //               <strong>Most Common Reason:</strong> {mostCommonReason}
// // // // // //             </p>
// // // // // //             <p>
// // // // // //               <strong>Highest Refund Day:</strong> {highestRefundDay}
// // // // // //             </p>
// // // // // //           </div>

// // // // // //           {filteredReturns.length === 0 ? (
// // // // // //             <p className={currentTheme.secondaryText}>No data available for visualizations.</p>
// // // // // //           ) : (
// // // // // //             <>
// // // // // //               {/* Detailed Returns Trend */}
// // // // // //               <div className="mb-6">
// // // // // //                 <h3 className="font-medium mb-2">Returns Trend (Amount & Items)</h3>
// // // // // //                 <LineChart width={700} height={300} data={returnsTrendData} className="mx-auto">
// // // // // //                   <CartesianGrid strokeDasharray="3 3" />
// // // // // //                   <XAxis dataKey="date" />
// // // // // //                   <YAxis yAxisId="left" />
// // // // // //                   <YAxis yAxisId="right" orientation="right" />
// // // // // //                   <Tooltip />
// // // // // //                   <Legend />
// // // // // //                   <Line yAxisId="left" type="monotone" dataKey="total" stroke="#0088FE" name="Total Refunded" />
// // // // // //                   <Line yAxisId="right" type="monotone" dataKey="resellable" stroke="#00C49F" name="Resellable Items" />
// // // // // //                   <Line yAxisId="right" type="monotone" dataKey="damaged" stroke="#FF8042" name="Damaged Items" />
// // // // // //                 </LineChart>
// // // // // //               </div>

// // // // // //               {/* Return Reasons */}
// // // // // //               <div className="mb-6">
// // // // // //                 <h3 className="font-medium mb-2">Return Reasons (by Refund Amount)</h3>
// // // // // //                 <PieChart width={400} height={300} className="mx-auto">
// // // // // //                   <Pie
// // // // // //                     data={reasonsData}
// // // // // //                     cx="50%"
// // // // // //                     cy="50%"
// // // // // //                     outerRadius={100}
// // // // // //                     fill="#8884d8"
// // // // // //                     dataKey="value"
// // // // // //                     label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
// // // // // //                   >
// // // // // //                     {reasonsData.map((entry, index) => (
// // // // // //                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// // // // // //                     ))}
// // // // // //                   </Pie>
// // // // // //                   <Tooltip />
// // // // // //                 </PieChart>
// // // // // //               </div>

// // // // // //               {/* Conditions Breakdown */}
// // // // // //               <div className="mb-6">
// // // // // //                 <h3 className="font-medium mb-2">Conditions Over Time (Items)</h3>
// // // // // //                 <BarChart width={700} height={300} data={conditionsData} className="mx-auto">
// // // // // //                   <CartesianGrid strokeDasharray="3 3" />
// // // // // //                   <XAxis dataKey="date" />
// // // // // //                   <YAxis />
// // // // // //                   <Tooltip />
// // // // // //                   <Legend />
// // // // // //                   <Bar dataKey="resellable" stackId="a" fill="#00C49F" />
// // // // // //                   <Bar dataKey="damaged" stackId="a" fill="#FF8042" />
// // // // // //                 </BarChart>
// // // // // //               </div>

// // // // // //               {/* Refund Options */}
// // // // // //               <div className="mb-6">
// // // // // //                 <h3 className="font-medium mb-2">Refund Options (by Amount)</h3>
// // // // // //                 <PieChart width={400} height={300} className="mx-auto">
// // // // // //                   <Pie
// // // // // //                     data={refundOptionsData}
// // // // // //                     cx="50%"
// // // // // //                     cy="50%"
// // // // // //                     outerRadius={100}
// // // // // //                     fill="#8884d8"
// // // // // //                     dataKey="value"
// // // // // //                     label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
// // // // // //                   >
// // // // // //                     {refundOptionsData.map((entry, index) => (
// // // // // //                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// // // // // //                     ))}
// // // // // //                   </Pie>
// // // // // //                   <Tooltip />
// // // // // //                 </PieChart>
// // // // // //               </div>

// // // // // //               {/* Top Returned Items */}
// // // // // //               <div className="mb-6">
// // // // // //                 <h3 className="font-medium mb-2">Top Returned Items</h3>
// // // // // //                 <BarChart width={700} height={300} data={topReturnedItems} className="mx-auto">
// // // // // //                   <CartesianGrid strokeDasharray="3 3" />
// // // // // //                   <XAxis dataKey="barcode" />
// // // // // //                   <YAxis />
// // // // // //                   <Tooltip />
// // // // // //                   <Legend />
// // // // // //                   <Bar dataKey="quantity" fill={isDarkMode ? "#a78bfa" : "#6b7280"} />
// // // // // //                 </BarChart>
// // // // // //               </div>
// // // // // //             </>
// // // // // //           )}
// // // // // //         </div>

// // // // // //         {/* Returns History (Khata Book Style) */}
// // // // // //         <div className={`${currentTheme.card} p-6 rounded-lg shadow-lg`}>
// // // // // //           <div className="flex justify-between items-center mb-4">
// // // // // //             <h2 className="text-2xl font-semibold flex items-center gap-2">
// // // // // //               <History className={currentTheme.accent} /> Returns History
// // // // // //             </h2>
// // // // // //             <div className="flex gap-4">
// // // // // //               <select
// // // // // //                 value={dateFilter}
// // // // // //                 onChange={(e) => setDateFilter(e.target.value)}
// // // // // //                 className={`${currentTheme.input} p-2 rounded`}
// // // // // //               >
// // // // // //                 <option value="all">All Time</option>
// // // // // //                 <option value="today">Today</option>
// // // // // //                 <option value="week">Last 7 Days</option>
// // // // // //               </select>
// // // // // //               <button
// // // // // //                 onClick={handleExportCSV}
// // // // // //                 className={`${currentTheme.button} px-4 py-2 rounded flex items-center gap-2`}
// // // // // //               >
// // // // // //                 <Download /> Export CSV
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {filteredReturns.length === 0 ? (
// // // // // //             <p className={currentTheme.secondaryText}>No returns recorded for this period.</p>
// // // // // //           ) : (
// // // // // //             <div className="overflow-x-auto">
// // // // // //               <table className="w-full khata-table">
// // // // // //                 <thead>
// // // // // //                   <tr className={`${currentTheme.border} bg-gray-200 dark:bg-gray-700`}>
// // // // // //                     <th className="p-2">Return ID</th>
// // // // // //                     <th className="p-2">Serial No.</th>
// // // // // //                     <th className="p-2">Date</th>
// // // // // //                     <th className="p-2">Reason</th>
// // // // // //                     <th className="p-2">Refunded</th>
// // // // // //                     <th className="p-2">Items</th>
// // // // // //                   </tr>
// // // // // //                 </thead>
// // // // // //                 <tbody>
// // // // // //                   {filteredReturns.map((r, index) => (
// // // // // //                     <tr key={r.returnId} className={index % 2 === 0 ? "bg-gray-100 dark:bg-gray-800" : ""}>
// // // // // //                       <td className="p-2">{r.returnId}</td>
// // // // // //                       <td className="p-2">{r.serialNumber}</td>
// // // // // //                       <td className="p-2">{new Date(r.date).toLocaleString()}</td>
// // // // // //                       <td className="p-2">{r.reason}</td>
// // // // // //                       <td className="p-2">${r.totalRefunded.toFixed(2)}</td>
// // // // // //                       <td className="p-2">
// // // // // //                         {r.items.map((i) => `${i.barcode} (${i.quantity})`).join(", ")}
// // // // // //                       </td>
// // // // // //                     </tr>
// // // // // //                   ))}
// // // // // //                 </tbody>
// // // // // //               </table>
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </motion.div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ReturnsManagement;
// // // // // import React, { useState, useEffect, useMemo } from "react";
// // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // import {
// // // // //   Search, AlertCircle, CheckCircle, Sun, Moon, History, Download, Filter,
// // // // //   RefreshCcw, ArrowUpDown, PieChart as PieChartIcon, BarChart as BarChartIcon, TrendingUp,
// // // // //   Calendar, User, Package, DollarSign, Clipboard, Archive, Printer, ChevronDown, ChevronUp
// // // // // } from "lucide-react";
// // // // // import {
// // // // //   BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
// // // // //   LineChart, Line, Area, AreaChart, PieChart, Pie, Cell, Sector
// // // // // } from "recharts";
// // // // // import { format, subDays, differenceInDays, isWithinInterval } from "date-fns";
// // // // // import "./ReturnsManagement.css"; // Custom styles

// // // // // const ReturnsManagement = () => {
// // // // //   // Core state
// // // // //   const [storeId] = useState(localStorage.getItem("storeId") || "STORE-1737889146-4514");
// // // // //   const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark");
// // // // //   const [activeTab, setActiveTab] = useState("process");
// // // // //   const [searchInput, setSearchInput] = useState("");
// // // // //   const [searchType, setSearchType] = useState("serialNumber");
// // // // //   const [selectedSale, setSelectedSale] = useState(null);
// // // // //   const [returnItems, setReturnItems] = useState([]);
// // // // //   const [returnReason, setReturnReason] = useState("");
// // // // //   const [returnNotes, setReturnNotes] = useState("");
// // // // //   const [returnCondition, setReturnCondition] = useState("resellable");
// // // // //   const [refundOption, setRefundOption] = useState("original");
// // // // //   const [returnsHistory, setReturnsHistory] = useState([]);
// // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // //   const [error, setError] = useState(null);
// // // // //   const [success, setSuccess] = useState(null);
// // // // //   const [showNotification, setShowNotification] = useState(false);

// // // // //   // Advanced filters
// // // // //   const [dateFilter, setDateFilter] = useState("all");
// // // // //   const [customDateRange, setCustomDateRange] = useState({
// // // // //     start: format(subDays(new Date(), 30), "yyyy-MM-dd"),
// // // // //     end: format(new Date(), "yyyy-MM-dd")
// // // // //   });
// // // // //   const [reasonFilter, setReasonFilter] = useState("all");
// // // // //   const [sortConfig, setSortConfig] = useState({ key: "date", direction: "desc" });
// // // // //   const [activeReturnId, setActiveReturnId] = useState(null);
// // // // //   const [expandedReturnDetails, setExpandedReturnDetails] = useState({});
// // // // //   const [viewMode, setViewMode] = useState("table");
// // // // //   const [activePieSegment, setActivePieSegment] = useState(null);

// // // // //   // Dashboard metrics
// // // // //   const [dashboardMetrics, setDashboardMetrics] = useState({
// // // // //     totalReturns: 0,
// // // // //     totalRefunded: 0,
// // // // //     averageReturnValue: 0,
// // // // //     returnRate: 0,
// // // // //     returnsByReason: {},
// // // // //     returnsByProduct: {},
// // // // //     returnsByDay: {},
// // // // //     returnsByCondition: {},
// // // // //     topReturningCustomers: []
// // // // //   });

// // // // //   // Theme configuration
// // // // //   const themes = {
// // // // //     light: {
// // // // //       background: "bg-gradient-to-r from-violet-50 via-indigo-50 to-blue-50",
// // // // //       text: "text-gray-800",
// // // // //       secondaryText: "text-gray-600",
// // // // //       accent: "text-violet-600",
// // // // //       button: "bg-violet-600 hover:bg-violet-700 text-white",
// // // // //       card: "bg-white",
// // // // //       border: "border-gray-200",
// // // // //       input: "bg-violet-50 border-gray-300",
// // // // //       error: "bg-red-50 text-red-600 border-red-200",
// // // // //       success: "bg-green-50 text-green-600 border-green-200",
// // // // //       tableHeader: "bg-violet-100 text-violet-800",
// // // // //       tableRow: "even:bg-violet-50",
// // // // //       chartColors: ["#8b5cf6", "#6366f1", "#3b82f6", "#0ea5e9", "#06b6d4", "#14b8a6"]
// // // // //     },
// // // // //     dark: {
// // // // //       background: "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700",
// // // // //       text: "text-gray-100",
// // // // //       secondaryText: "text-gray-300",
// // // // //       accent: "text-violet-400",
// // // // //       button: "bg-violet-600 hover:bg-violet-700 text-white",
// // // // //       card: "bg-gray-800",
// // // // //       border: "border-gray-700",
// // // // //       input: "bg-gray-700 border-gray-600",
// // // // //       error: "bg-red-900/30 text-red-400 border-red-700",
// // // // //       success: "bg-green-900/30 text-green-300 border-green-700",
// // // // //       tableHeader: "bg-gray-700 text-gray-200",
// // // // //       tableRow: "even:bg-gray-750",
// // // // //       chartColors: ["#a78bfa", "#818cf8", "#60a5fa", "#38bdf8", "#22d3ee", "#2dd4bf"]
// // // // //     }
// // // // //   };

// // // // //   const currentTheme = isDarkMode ? themes.dark : themes.light;

// // // // //   // Fetch Returns History
// // // // //   useEffect(() => {
// // // // //     const fetchReturnsHistory = async () => {
// // // // //       if (!storeId) return;
// // // // //       setIsLoading(true);
// // // // //       try {
// // // // //         const response = await fetch(`http://localhost:5010/api/returns?storeId=${storeId}`, { headers: { storeId } });
// // // // //         const data = await response.json();
// // // // //         if (response.ok) {
// // // // //           setReturnsHistory(data);
// // // // //           calculateDashboardMetrics(data);
// // // // //         } else {
// // // // //           console.error("Failed to fetch returns history:", data.error);
// // // // //         }
// // // // //       } catch (err) {
// // // // //         console.error("Error fetching returns history:", err);
// // // // //       } finally {
// // // // //         setIsLoading(false);
// // // // //       }
// // // // //     };
// // // // //     fetchReturnsHistory();
// // // // //   }, [storeId]);

// // // // //   // Calculate dashboard metrics
// // // // //   const calculateDashboardMetrics = (returnsData) => {
// // // // //     const totalReturns = returnsData.length;
// // // // //     const totalRefunded = returnsData.reduce((sum, r) => sum + r.totalRefunded, 0);
// // // // //     const averageReturnValue = totalReturns > 0 ? totalRefunded / totalReturns : 0;

// // // // //     const returnsByReason = returnsData.reduce((acc, r) => {
// // // // //       acc[r.reason] = (acc[r.reason] || 0) + 1;
// // // // //       return acc;
// // // // //     }, {});

// // // // //     const returnsByProduct = returnsData.flatMap(r => r.items).reduce((acc, item) => {
// // // // //       acc[item.barcode] = (acc[item.barcode] || 0) + item.quantity;
// // // // //       return acc;
// // // // //     }, {});

// // // // //     const returnsByDay = returnsData.reduce((acc, r) => {
// // // // //       const date = format(new Date(r.date), "yyyy-MM-dd");
// // // // //       acc[date] = (acc[date] || 0) + r.totalRefunded;
// // // // //       return acc;
// // // // //     }, {});

// // // // //     const returnsByCondition = returnsData.flatMap(r => r.items).reduce((acc, item) => {
// // // // //       acc[item.condition || "resellable"] = (acc[item.condition || "resellable"] || 0) + item.quantity;
// // // // //       return acc;
// // // // //     }, {});

// // // // //     const customerReturns = returnsData.reduce((acc, r) => {
// // // // //       if (r.customerPhone) {
// // // // //         acc[r.customerPhone] = (acc[r.customerPhone] || 0) + 1;
// // // // //       }
// // // // //       return acc;
// // // // //     }, {});

// // // // //     const topReturningCustomers = Object.entries(customerReturns)
// // // // //       .map(([phone, count]) => ({ phone, count }))
// // // // //       .sort((a, b) => b.count - a.count)
// // // // //       .slice(0, 5);

// // // // //     setDashboardMetrics({
// // // // //       totalReturns,
// // // // //       totalRefunded,
// // // // //       averageReturnValue,
// // // // //       returnRate: 9.8, // Example return rate
// // // // //       returnsByReason,
// // // // //       returnsByProduct,
// // // // //       returnsByDay,
// // // // //       returnsByCondition,
// // // // //       topReturningCustomers
// // // // //     });
// // // // //   };

// // // // //   // Handle search
// // // // //   const handleSearch = async () => {
// // // // //     if (!storeId) {
// // // // //       setError("Store ID is missing. Please log in again.");
// // // // //       return;
// // // // //     }
// // // // //     if (!searchInput.trim()) {
// // // // //       setError("Please enter a search value.");
// // // // //       return;
// // // // //     }

// // // // //     setIsLoading(true);
// // // // //     setError(null);
// // // // //     setSelectedSale(null);

// // // // //     try {
// // // // //       let url = "";
// // // // //       if (searchType === "serialNumber") {
// // // // //         const serialNumber = parseInt(searchInput);
// // // // //         url = `http://localhost:5010/api/sale-by-serial?storeId=${storeId}&serialNumber=${serialNumber}`;
// // // // //       } else if (searchType === "barcode") {
// // // // //         url = `http://localhost:5010/api/sale-by-barcode?storeId=${storeId}&barcode=${searchInput}`;
// // // // //       } else if (searchType === "customer_phone") {
// // // // //         url = `http://localhost:5010/api/sale-by-phone?storeId=${storeId}&phone=${searchInput}`;
// // // // //       }

// // // // //       const response = await fetch(url, { headers: { storeId } });
// // // // //       const data = await response.json();
// // // // //       if (!response.ok) throw new Error(data.error || "Failed to fetch sale");

// // // // //       if (!data.sale) {
// // // // //         setError(`No sale found with this ${searchType}.`);
// // // // //       } else {
// // // // //         setSelectedSale(data.sale);
// // // // //         setSuccess("Sale found successfully!");
// // // // //         setShowNotification(true);
// // // // //         setTimeout(() => setShowNotification(false), 3000);
// // // // //       }
// // // // //     } catch (err) {
// // // // //       setError("Error searching: " + err.message);
// // // // //       console.error("Search error:", err);
// // // // //     } finally {
// // // // //       setIsLoading(false);
// // // // //     }
// // // // //   };

// // // // //   // Handle submit return
// // // // //   const handleSubmitReturn = async () => {
// // // // //     if (!selectedSale || returnItems.length === 0 || !returnReason) {
// // // // //       setError("Please select a sale, items to return, and a reason.");
// // // // //       return;
// // // // //     }

// // // // //     setIsLoading(true);
// // // // //     setError(null);
// // // // //     setSuccess(null);

// // // // //     const returnData = {
// // // // //       storeId,
// // // // //       serialNumber: selectedSale.serialNumber,
// // // // //       customerPhone: selectedSale.customer_phone,
// // // // //       items: returnItems.map((item) => ({
// // // // //         barcode: item.product.barcode,
// // // // //         productName: item.product.name,
// // // // //         quantity: item.quantity,
// // // // //         condition: item.condition,
// // // // //         unitPrice: item.product.total_price / item.product.quantity
// // // // //       })),
// // // // //       reason: returnReason,
// // // // //       notes: returnNotes,
// // // // //       refundOption,
// // // // //       date: new Date().toISOString(),
// // // // //       totalRefunded: returnItems.reduce((sum, item) => sum + (item.quantity * (item.product.total_price / item.product.quantity)), 0)
// // // // //     };

// // // // //     try {
// // // // //       const response = await fetch("http://localhost:5010/api/returns", {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json", storeId },
// // // // //         body: JSON.stringify(returnData),
// // // // //       });
// // // // //       const result = await response.json();
// // // // //       if (!response.ok) throw new Error(result.error || "Failed to process return");

// // // // //       // Update inventory
// // // // //       for (const item of returnItems) {
// // // // //         if (item.condition === "resellable") {
// // // // //           await fetch(`http://localhost:5000/products/restock-by-barcode?storeId=${storeId}&barcode=${item.product.barcode}`, {
// // // // //             method: "POST",
// // // // //             headers: { "Content-Type": "application/json" },
// // // // //             body: JSON.stringify({ quantity: item.quantity }),
// // // // //           });
// // // // //         } else {
// // // // //           await fetch(`http://localhost:5000/damage-items?storeId=${storeId}`, {
// // // // //             method: "POST",
// // // // //             headers: { "Content-Type": "application/json" },
// // // // //             body: JSON.stringify({ barcode: item.product.barcode, quantity: item.quantity, reason: returnReason }),
// // // // //           });
// // // // //         }
// // // // //       }

// // // // //       // Refresh returns history
// // // // //       const historyResponse = await fetch(`http://localhost:5010/api/returns?storeId=${storeId}`, { headers: { storeId } });
// // // // //       const historyData = await historyResponse.json();
// // // // //       if (historyResponse.ok) {
// // // // //         setReturnsHistory(historyData);
// // // // //         calculateDashboardMetrics(historyData);
// // // // //       }

// // // // //       setSuccess("Return processed successfully!");
// // // // //       setShowNotification(true);
// // // // //       setTimeout(() => {
// // // // //         setShowNotification(false);
// // // // //         setSearchInput("");
// // // // //         setSelectedSale(null);
// // // // //         setReturnItems([]);
// // // // //         setReturnReason("");
// // // // //         setReturnNotes("");
// // // // //         setRefundOption("original");
// // // // //       }, 3000);
// // // // //     } catch (err) {
// // // // //       setError("Error processing return: " + err.message);
// // // // //       console.error("Submit error:", err);
// // // // //     } finally {
// // // // //       setIsLoading(false);
// // // // //     }
// // // // //   };

// // // // //   // Render returns history table
// // // // //   const renderReturnsTable = () => {
// // // // //     return (
// // // // //       <div className="overflow-x-auto">
// // // // //         <table className={`w-full border-collapse`}>
// // // // //           <thead>
// // // // //             <tr className={`${currentTheme.tableHeader} border-b ${currentTheme.border}`}>
// // // // //               <th className="p-3 text-left">Return ID</th>
// // // // //               <th className="p-3 text-left">Serial No.</th>
// // // // //               <th className="p-3 text-left">Date</th>
// // // // //               <th className="p-3 text-left">Reason</th>
// // // // //               <th className="p-3 text-left">Refunded</th>
// // // // //               <th className="p-3 text-center">Actions</th>
// // // // //             </tr>
// // // // //           </thead>
// // // // //           <tbody>
// // // // //             {filteredReturns.map((r) => (
// // // // //               <tr key={r.returnId} className={`${currentTheme.tableRow} border-b ${currentTheme.border}`}>
// // // // //                 <td className="p-3">{r.returnId}</td>
// // // // //                 <td className="p-3">{r.serialNumber}</td>
// // // // //                 <td className="p-3">{new Date(r.date).toLocaleString()}</td>
// // // // //                 <td className="p-3">{r.reason}</td>
// // // // //                 <td className="p-3">${r.totalRefunded.toFixed(2)}</td>
// // // // //                 <td className="p-3 text-center">
// // // // //                   <button
// // // // //                     onClick={() => generateReceipt(r)}
// // // // //                     className={`p-2 rounded-full ${currentTheme.button}`}
// // // // //                   >
// // // // //                     <Printer size={16} />
// // // // //                   </button>
// // // // //                 </td>
// // // // //               </tr>
// // // // //             ))}
// // // // //           </tbody>
// // // // //         </table>
// // // // //       </div>
// // // // //     );
// // // // //   };

// // // // //   // Render dashboard metrics
// // // // //   const renderDashboardMetrics = () => {
// // // // //     return (
// // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //         {/* Total Returns */}
// // // // //         <div className={`${currentTheme.card} p-6 rounded-lg shadow-sm`}>
// // // // //           <div className="flex items-center space-x-4">
// // // // //             <Package size={24} className={currentTheme.accent} />
// // // // //             <div>
// // // // //               <p className="text-sm text-gray-500">Total Returns</p>
// // // // //               <p className="text-2xl font-bold">{dashboardMetrics.totalReturns}</p>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Total Refunded */}
// // // // //         <div className={`${currentTheme.card} p-6 rounded-lg shadow-sm`}>
// // // // //           <div className="flex items-center space-x-4">
// // // // //             <DollarSign size={24} className={currentTheme.accent} />
// // // // //             <div>
// // // // //               <p className="text-sm text-gray-500">Total Refunded</p>
// // // // //               <p className="text-2xl font-bold">${dashboardMetrics.totalRefunded.toFixed(2)}</p>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Average Return Value */}
// // // // //         <div className={`${currentTheme.card} p-6 rounded-lg shadow-sm`}>
// // // // //           <div className="flex items-center space-x-4">
// // // // //             <Clipboard size={24} className={currentTheme.accent} />
// // // // //             <div>
// // // // //               <p className="text-sm text-gray-500">Avg. Return Value</p>
// // // // //               <p className="text-2xl font-bold">${dashboardMetrics.averageReturnValue.toFixed(2)}</p>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Returns Trend Chart */}
// // // // //         <div className={`${currentTheme.card} p-6 rounded-lg shadow-sm col-span-1 md:col-span-2 lg:col-span-3`}>
// // // // //           <h3 className="text-lg font-medium mb-4">Returns Trend (Last 30 Days)</h3>
// // // // //           <ResponsiveContainer width="100%" height={300}>
// // // // //             <AreaChart data={returnsTrendData}>
// // // // //               <CartesianGrid strokeDasharray="3 3" />
// // // // //               <XAxis dataKey="date" />
// // // // //               <YAxis />
// // // // //               <Tooltip />
// // // // //               <Legend />
// // // // //               <Area
// // // // //                 type="monotone"
// // // // //                 dataKey="amount"
// // // // //                 stroke={currentTheme.chartColors[0]}
// // // // //                 fill={currentTheme.chartColors[0]}
// // // // //                 fillOpacity={0.3}
// // // // //               />
// // // // //             </AreaChart>
// // // // //           </ResponsiveContainer>
// // // // //         </div>

// // // // //         {/* Returns by Reason */}
// // // // //         <div className={`${currentTheme.card} p-6 rounded-lg shadow-sm`}>
// // // // //           <h3 className="text-lg font-medium mb-4">Returns by Reason</h3>
// // // // //           <ResponsiveContainer width="100%" height={300}>
// // // // //             <PieChart>
// // // // //               <Pie
// // // // //                 data={returnsByReasonData}
// // // // //                 dataKey="value"
// // // // //                 nameKey="name"
// // // // //                 cx="50%"
// // // // //                 cy="50%"
// // // // //                 outerRadius={100}
// // // // //                 fill={currentTheme.chartColors[1]}
// // // // //                 label
// // // // //               >
// // // // //                 {returnsByReasonData.map((entry, index) => (
// // // // //                   <Cell
// // // // //                     key={`cell-${index}`}
// // // // //                     fill={currentTheme.chartColors[index % currentTheme.chartColors.length]}
// // // // //                   />
// // // // //                 ))}
// // // // //               </Pie>
// // // // //               <Tooltip />
// // // // //               <Legend />
// // // // //             </PieChart>
// // // // //           </ResponsiveContainer>
// // // // //         </div>

// // // // //         {/* Top Returned Items */}
// // // // //         <div className={`${currentTheme.card} p-6 rounded-lg shadow-sm`}>
// // // // //           <h3 className="text-lg font-medium mb-4">Top Returned Items</h3>
// // // // //           <ResponsiveContainer width="100%" height={300}>
// // // // //             <BarChart data={topReturnedItems}>
// // // // //               <CartesianGrid strokeDasharray="3 3" />
// // // // //               <XAxis dataKey="name" />
// // // // //               <YAxis />
// // // // //               <Tooltip />
// // // // //               <Legend />
// // // // //               <Bar
// // // // //                 dataKey="quantity"
// // // // //                 fill={currentTheme.chartColors[2]}
// // // // //               />
// // // // //             </BarChart>
// // // // //           </ResponsiveContainer>
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   };

// // // // //   return (
// // // // //     <div className={`${currentTheme.background} ${currentTheme.text} min-h-screen p-6 font-khata`}>
// // // // //       {/* Theme Toggle Button */}
// // // // //       <motion.button
// // // // //         whileHover={{ scale: 1.1 }}
// // // // //         onClick={toggleTheme}
// // // // //         className={`fixed top-6 right-6 p-3 rounded-full ${currentTheme.card}`}
// // // // //       >
// // // // //         {isDarkMode ? <Sun className={currentTheme.accent} /> : <Moon className={currentTheme.accent} />}
// // // // //       </motion.button>

// // // // //       {/* Main Content */}
// // // // //       <motion.div
// // // // //         initial={{ opacity: 0, y: 20 }}
// // // // //         animate={{ opacity: 1, y: 0 }}
// // // // //         className="max-w-7xl mx-auto space-y-8"
// // // // //       >
// // // // //         {/* Header */}
// // // // //         <h1 className="text-4xl font-bold text-center mb-6">Returns Management</h1>

// // // // //         {/* Tabs */}
// // // // //         <div className="flex space-x-4 border-b ${currentTheme.border}">
// // // // //           <button
// // // // //             onClick={() => setActiveTab("process")}
// // // // //             className={`px-4 py-2 rounded-t-lg ${
// // // // //               activeTab === "process" ? currentTheme.activeTab : currentTheme.inactiveTab
// // // // //             }`}
// // // // //           >
// // // // //             Process Return
// // // // //           </button>
// // // // //           <button
// // // // //             onClick={() => setActiveTab("history")}
// // // // //             className={`px-4 py-2 rounded-t-lg ${
// // // // //               activeTab === "history" ? currentTheme.activeTab : currentTheme.inactiveTab
// // // // //             }`}
// // // // //           >
// // // // //             Returns History
// // // // //           </button>
// // // // //           <button
// // // // //             onClick={() => setActiveTab("dashboard")}
// // // // //             className={`px-4 py-2 rounded-t-lg ${
// // // // //               activeTab === "dashboard" ? currentTheme.activeTab : currentTheme.inactiveTab
// // // // //             }`}
// // // // //           >
// // // // //             Dashboard
// // // // //           </button>
// // // // //         </div>

// // // // //         {/* Tab Content */}
// // // // //         <AnimatePresence mode="wait">
// // // // //           {activeTab === "process" && (
// // // // //             <motion.div
// // // // //               key="process"
// // // // //               initial={{ opacity: 0, y: 20 }}
// // // // //               animate={{ opacity: 1, y: 0 }}
// // // // //               exit={{ opacity: 0, y: -20 }}
// // // // //               className="space-y-8"
// // // // //             >
// // // // //               {/* Search Section */}
// // // // //               <div className={`${currentTheme.card} p-6 rounded-lg shadow-lg`}>
// // // // //                 <div className="flex gap-4 items-center">
// // // // //                   <Search className={currentTheme.accent} />
// // // // //                   <select
// // // // //                     value={searchType}
// // // // //                     onChange={(e) => setSearchType(e.target.value)}
// // // // //                     className={`${currentTheme.input} p-2 rounded`}
// // // // //                   >
// // // // //                     <option value="serialNumber">Serial Number</option>
// // // // //                     <option value="barcode">Barcode</option>
// // // // //                     <option value="customer_phone">Customer Phone</option>
// // // // //                   </select>
// // // // //                   <input
// // // // //                     type="text"
// // // // //                     value={searchInput}
// // // // //                     onChange={(e) => setSearchInput(e.target.value)}
// // // // //                     placeholder={`Enter ${searchType.replace("_", " ")}`}
// // // // //                     className={`${currentTheme.input} w-full p-2 rounded`}
// // // // //                   />
// // // // //                   <button
// // // // //                     onClick={handleSearch}
// // // // //                     disabled={isLoading}
// // // // //                     className={`${currentTheme.button} px-4 py-2 rounded`}
// // // // //                   >
// // // // //                     {isLoading ? "Searching..." : "Search"}
// // // // //                   </button>
// // // // //                 </div>
// // // // //                 {error && (
// // // // //                   <div className={`${currentTheme.error} mt-4 p-2 rounded flex gap-2`}>
// // // // //                     <AlertCircle /> {error}
// // // // //                   </div>
// // // // //                 )}
// // // // //               </div>

// // // // //               {/* Return Form */}
// // // // //               {selectedSale && (
// // // // //                 <motion.div
// // // // //                   initial={{ opacity: 0 }}
// // // // //                   animate={{ opacity: 1 }}
// // // // //                   className={`${currentTheme.card} p-6 rounded-lg shadow-lg`}
// // // // //                 >
// // // // //                   <h2 className="text-2xl font-semibold mb-4">
// // // // //                     Process Return for Serial: {selectedSale.serialNumber}
// // // // //                   </h2>
// // // // //                   <div className="mb-4">
// // // // //                     <p>Total Amount: ${selectedSale.total_amount}</p>
// // // // //                     <p>Date: {selectedSale.date}</p>
// // // // //                     {selectedSale.customer_phone && <p>Customer Phone: {selectedSale.customer_phone}</p>}
// // // // //                   </div>

// // // // //                   <div className="mb-4">
// // // // //                     <h3 className="font-medium">Items to Return</h3>
// // // // //                     {selectedSale.products.map((product) => (
// // // // //                       <div key={product.barcode} className="flex gap-4 py-2">
// // // // //                         <input
// // // // //                           type="number"
// // // // //                           min="0"
// // // // //                           max={product.quantity}
// // // // //                           value={returnItems.find((i) => i.product.barcode === product.barcode)?.quantity || 0}
// // // // //                           onChange={(e) => handleItemSelection(product, parseInt(e.target.value))}
// // // // //                           className={`${currentTheme.input} w-16 p-1 rounded`}
// // // // //                         />
// // // // //                         <span>
// // // // //                           {product.name} (Qty: {product.quantity}, Price: $
// // // // //                           {(product.total_price / product.quantity).toFixed(2)})
// // // // //                         </span>
// // // // //                       </div>
// // // // //                     ))}
// // // // //                   </div>

// // // // //                   <div className="grid grid-cols-2 gap-4 mb-4">
// // // // //                     <div>
// // // // //                       <label className="block mb-1">Return Reason</label>
// // // // //                       <select
// // // // //                         value={returnReason}
// // // // //                         onChange={(e) => setReturnReason(e.target.value)}
// // // // //                         className={`${currentTheme.input} w-full p-2 rounded`}
// // // // //                       >
// // // // //                         <option value="">Select</option>
// // // // //                         <option value="defective">Defective</option>
// // // // //                         <option value="wrong_item">Wrong Item</option>
// // // // //                         <option value="damaged_shipping">Damaged in Shipping</option>
// // // // //                         <option value="changed_mind">Changed Mind</option>
// // // // //                       </select>
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <label className="block mb-1">Condition</label>
// // // // //                       <select
// // // // //                         value={returnCondition}
// // // // //                         onChange={(e) => setReturnCondition(e.target.value)}
// // // // //                         className={`${currentTheme.input} w-full p-2 rounded`}
// // // // //                       >
// // // // //                         <option value="resellable">Resellable</option>
// // // // //                         <option value="damaged">Damaged</option>
// // // // //                       </select>
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <label className="block mb-1">Refund Option</label>
// // // // //                       <select
// // // // //                         value={refundOption}
// // // // //                         onChange={(e) => setRefundOption(e.target.value)}
// // // // //                         className={`${currentTheme.input} w-full p-2 rounded`}
// // // // //                       >
// // // // //                         <option value="original">Original Payment</option>
// // // // //                         <option value="store_credit">Store Credit</option>
// // // // //                         <option value="loyalty">Loyalty Points</option>
// // // // //                         <option value="exchange">Exchange</option>
// // // // //                       </select>
// // // // //                     </div>
// // // // //                   </div>

// // // // //                   <div className="mb-4">
// // // // //                     <label className="block mb-1">Notes</label>
// // // // //                     <textarea
// // // // //                       value={returnNotes}
// // // // //                       onChange={(e) => setReturnNotes(e.target.value)}
// // // // //                       className={`${currentTheme.input} w-full p-2 rounded`}
// // // // //                       placeholder="Optional notes"
// // // // //                     />
// // // // //                   </div>

// // // // //                   <button
// // // // //                     onClick={handleSubmitReturn}
// // // // //                     disabled={isLoading}
// // // // //                     className={`${currentTheme.button} w-full py-2 rounded`}
// // // // //                   >
// // // // //                     {isLoading ? "Processing..." : "Submit Return"}
// // // // //                   </button>

// // // // //                   {success && (
// // // // //                     <div className={`${currentTheme.success} mt-4 p-2 rounded flex gap-2`}>
// // // // //                       <CheckCircle /> {success}
// // // // //                     </div>
// // // // //                   )}
// // // // //                 </motion.div>
// // // // //               )}
// // // // //             </motion.div>
// // // // //           )}

// // // // //           {activeTab === "history" && (
// // // // //             <motion.div
// // // // //               key="history"
// // // // //               initial={{ opacity: 0, y: 20 }}
// // // // //               animate={{ opacity: 1, y: 0 }}
// // // // //               exit={{ opacity: 0, y: -20 }}
// // // // //               className="space-y-8"
// // // // //             >
// // // // //               {/* Filters */}
// // // // //               <div className={`${currentTheme.card} p-6 rounded-lg shadow-lg`}>
// // // // //                 <div className="flex gap-4 items-center">
// // // // //                   <Filter className={currentTheme.accent} />
// // // // //                   <select
// // // // //                     value={dateFilter}
// // // // //                     onChange={(e) => setDateFilter(e.target.value)}
// // // // //                     className={`${currentTheme.input} p-2 rounded`}
// // // // //                   >
// // // // //                     <option value="all">All Time</option>
// // // // //                     <option value="today">Today</option>
// // // // //                     <option value="week">Last 7 Days</option>
// // // // //                     <option value="month">Last 30 Days</option>
// // // // //                     <option value="custom">Custom Range</option>
// // // // //                   </select>
// // // // //                   {dateFilter === "custom" && (
// // // // //                     <div className="flex gap-2">
// // // // //                       <input
// // // // //                         type="date"
// // // // //                         value={customDateRange.start}
// // // // //                         onChange={(e) =>
// // // // //                           setCustomDateRange((prev) => ({ ...prev, start: e.target.value }))
// // // // //                         }
// // // // //                         className={`${currentTheme.input} p-2 rounded`}
// // // // //                       />
// // // // //                       <input
// // // // //                         type="date"
// // // // //                         value={customDateRange.end}
// // // // //                         onChange={(e) =>
// // // // //                           setCustomDateRange((prev) => ({ ...prev, end: e.target.value }))
// // // // //                         }
// // // // //                         className={`${currentTheme.input} p-2 rounded`}
// // // // //                       />
// // // // //                     </div>
// // // // //                   )}
// // // // //                   <select
// // // // //                     value={reasonFilter}
// // // // //                     onChange={(e) => setReasonFilter(e.target.value)}
// // // // //                     className={`${currentTheme.input} p-2 rounded`}
// // // // //                   >
// // // // //                     <option value="all">All Reasons</option>
// // // // //                     <option value="defective">Defective</option>
// // // // //                     <option value="wrong_item">Wrong Item</option>
// // // // //                     <option value="damaged_shipping">Damaged in Shipping</option>
// // // // //                     <option value="changed_mind">Changed Mind</option>
// // // // //                   </select>
// // // // //                   <button
// // // // //                     onClick={handleExportCSV}
// // // // //                     className={`${currentTheme.button} px-4 py-2 rounded flex items-center gap-2`}
// // // // //                   >
// // // // //                     <Download /> Export CSV
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Returns Table */}
// // // // //               {renderReturnsTable()}
// // // // //             </motion.div>
// // // // //           )}

// // // // //           {activeTab === "dashboard" && (
// // // // //             <motion.div
// // // // //               key="dashboard"
// // // // //               initial={{ opacity: 0, y: 20 }}
// // // // //               animate={{ opacity: 1, y: 0 }}
// // // // //               exit={{ opacity: 0, y: -20 }}
// // // // //               className="space-y-8"
// // // // //             >
// // // // //               {renderDashboardMetrics()}
// // // // //             </motion.div>
// // // // //           )}
// // // // //         </AnimatePresence>
// // // // //       </motion.div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ReturnsManagement;
// // // // import React, { useState, useEffect } from "react";
// // // // import { motion } from "framer-motion";
// // // // import {
// // // //   Search,
// // // //   AlertCircle,
// // // //   CheckCircle,
// // // //   Sun,
// // // //   Moon,
// // // //   History,
// // // //   Download,
// // // //   Filter,
// // // // } from "lucide-react";
// // // // import {
// // // //   BarChart,
// // // //   Bar,
// // // //   XAxis,
// // // //   YAxis,
// // // //   CartesianGrid,
// // // //   Tooltip,
// // // //   Legend,
// // // //   LineChart,
// // // //   Line,
// // // //   PieChart,
// // // //   Pie,
// // // //   Cell,
// // // // } from "recharts";
// // // // import "./ReturnsManagement.css";

// // // // const ReturnsManagement = () => {
// // // //   const [storeId] = useState(localStorage.getItem("storeId") || "STORE-1737889146-4514");
// // // //   const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark");
// // // //   const [searchInput, setSearchInput] = useState("");
// // // //   const [searchType, setSearchType] = useState("serialNumber");
// // // //   const [selectedSale, setSelectedSale] = useState(null);
// // // //   const [returnItems, setReturnItems] = useState([]);
// // // //   const [returnReason, setReturnReason] = useState("");
// // // //   const [returnNotes, setReturnNotes] = useState("");
// // // //   const [returnCondition, setReturnCondition] = useState("resellable");
// // // //   const [refundOption, setRefundOption] = useState("original");
// // // //   const [returnsHistory, setReturnsHistory] = useState([]); // Ensure initial state is an array
// // // //   const [dateFilter, setDateFilter] = useState("all");
// // // //   const [isLoading, setIsLoading] = useState(false);
// // // //   const [error, setError] = useState(null);
// // // //   const [success, setSuccess] = useState(null);

// // // //   const themes = {
// // // //     light: {
// // // //       background: "bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50",
// // // //       text: "text-gray-800",
// // // //       secondaryText: "text-gray-600",
// // // //       accent: "text-purple-600",
// // // //       button: "bg-purple-600 hover:bg-purple-700 text-white",
// // // //       card: "bg-white",
// // // //       border: "border-gray-300",
// // // //       input: "bg-violet-50 border-gray-300",
// // // //       error: "bg-red-50 text-red-600 border-red-200",
// // // //       success: "bg-green-50 text-green-600 border-green-200",
// // // //     },
// // // //     dark: {
// // // //       background: "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700",
// // // //       text: "text-gray-100",
// // // //       secondaryText: "text-gray-400",
// // // //       accent: "text-purple-400",
// // // //       button: "bg-purple-600 hover:bg-purple-700 text-white",
// // // //       card: "bg-gray-800",
// // // //       border: "border-gray-700",
// // // //       input: "bg-gray-700 border-gray-600",
// // // //       error: "bg-red-900/30 text-red-400 border-red-700",
// // // //       success: "bg-green-900/30 text-green-300 border-green-700",
// // // //     },
// // // //   };

// // // //   const currentTheme = isDarkMode ? themes.dark : themes.light;
// // // //   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A78BFA"];

// // // //   useEffect(() => {
// // // //     const fetchReturnsHistory = async () => {
// // // //       if (!storeId) {
// // // //         setError("No store ID provided.");
// // // //         return;
// // // //       }
// // // //       setIsLoading(true);
// // // //       try {
// // // //         const response = await fetch(`http://localhost:5010/api/returns?storeId=${storeId}`, {
// // // //           headers: { storeId },
// // // //         });
// // // //         const data = await response.json();
// // // //         console.log("Fetched returns history:", data); // Debug log
// // // //         if (response.ok) {
// // // //           // Ensure data is an array
// // // //           setReturnsHistory(Array.isArray(data) ? data : []);
// // // //         } else {
// // // //           console.error("Failed to fetch returns history:", data.error);
// // // //           setReturnsHistory([]);
// // // //           setError("Failed to load returns history.");
// // // //         }
// // // //       } catch (err) {
// // // //         console.error("Error fetching returns history:", err);
// // // //         setReturnsHistory([]);
// // // //         setError("Error connecting to server.");
// // // //       } finally {
// // // //         setIsLoading(false);
// // // //       }
// // // //     };
// // // //     fetchReturnsHistory();
// // // //   }, [storeId]);

// // // //   const toggleTheme = () => {
// // // //     setIsDarkMode((prev) => {
// // // //       const newMode = !prev;
// // // //       localStorage.setItem("theme", newMode ? "dark" : "light");
// // // //       return newMode;
// // // //     });
// // // //   };

// // // //   const handleSearch = async () => {
// // // //     if (!storeId) {
// // // //       setError("Store ID is missing. Please log in again.");
// // // //       return;
// // // //     }
// // // //     if (!searchInput.trim()) {
// // // //       setError("Please enter a search value.");
// // // //       return;
// // // //     }

// // // //     setIsLoading(true);
// // // //     setError(null);
// // // //     setSelectedSale(null);

// // // //     try {
// // // //       let url = "";
// // // //       if (searchType === "serialNumber") {
// // // //         const serialNumber = parseInt(searchInput);
// // // //         url = `http://localhost:5010/api/sale-by-serial?storeId=${storeId}&serialNumber=${serialNumber}`;
// // // //       } else if (searchType === "barcode") {
// // // //         url = `http://localhost:5010/api/sale-by-barcode?storeId=${storeId}&barcode=${searchInput}`;
// // // //       } else if (searchType === "customer_phone") {
// // // //         url = `http://localhost:5010/api/sale-by-phone?storeId=${storeId}&phone=${searchInput}`;
// // // //       }

// // // //       const response = await fetch(url, { headers: { storeId } });
// // // //       const data = await response.json();
// // // //       if (!response.ok) throw new Error(data.error || "Failed to fetch sale");

// // // //       if (!data.sale) {
// // // //         setError(`No sale found with this ${searchType}.`);
// // // //       } else {
// // // //         setSelectedSale(data.sale);
// // // //       }
// // // //     } catch (err) {
// // // //       setError("Error searching: " + err.message);
// // // //       console.error("Search error:", err);
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   const handleItemSelection = (product, quantity) => {
// // // //     setReturnItems((prev) => {
// // // //       const existing = prev.find((item) => item.product.barcode === product.barcode);
// // // //       if (existing) {
// // // //         return prev.map((item) =>
// // // //           item.product.barcode === product.barcode ? { ...item, quantity: Math.min(quantity, product.quantity) } : item
// // // //         );
// // // //       }
// // // //       return [...prev, { product, quantity: Math.min(quantity, product.quantity), condition: returnCondition }];
// // // //     });
// // // //   };

// // // //   const handleSubmitReturn = async () => {
// // // //     if (!selectedSale || returnItems.length === 0 || !returnReason) {
// // // //       setError("Please select a sale, items to return, and a reason.");
// // // //       return;
// // // //     }

// // // //     setIsLoading(true);
// // // //     setError(null);
// // // //     setSuccess(null);

// // // //     const returnData = {
// // // //       storeId,
// // // //       serialNumber: selectedSale.serialNumber,
// // // //       items: returnItems.map((item) => ({
// // // //         barcode: item.product.barcode,
// // // //         quantity: item.quantity,
// // // //         condition: item.condition,
// // // //       })),
// // // //       reason: returnReason,
// // // //       notes: returnNotes,
// // // //       refundOption,
// // // //       date: new Date().toISOString(),
// // // //     };

// // // //     try {
// // // //       const response = await fetch("http://localhost:5010/api/returns", {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json", storeId },
// // // //         body: JSON.stringify(returnData),
// // // //       });
// // // //       const result = await response.json();
// // // //       if (!response.ok) throw new Error(result.error || "Failed to process return");

// // // //       for (const item of returnItems) {
// // // //         if (item.condition === "resellable") {
// // // //           await fetch(`http://localhost:5000/products/restock-by-barcode?storeId=${storeId}&barcode=${item.product.barcode}`, {
// // // //             method: "POST",
// // // //             headers: { "Content-Type": "application/json" },
// // // //             body: JSON.stringify({ quantity: item.quantity }),
// // // //           });
// // // //         } else {
// // // //           await fetch(`http://localhost:5000/damage-items?storeId=${storeId}`, {
// // // //             method: "POST",
// // // //             headers: { "Content-Type": "application/json" },
// // // //             body: JSON.stringify({ barcode: item.product.barcode, quantity: item.quantity, reason: returnReason }),
// // // //           });
// // // //         }
// // // //       }

// // // //       const historyResponse = await fetch(`http://localhost:5010/api/returns?storeId=${storeId}`, { headers: { storeId } });
// // // //       const historyData = await historyResponse.json();
// // // //       if (historyResponse.ok) {
// // // //         setReturnsHistory(Array.isArray(historyData) ? historyData : []);
// // // //       } else {
// // // //         setReturnsHistory([]);
// // // //       }

// // // //       setSuccess("Return processed successfully!");
// // // //       setTimeout(() => {
// // // //         setSearchInput("");
// // // //         setSelectedSale(null);
// // // //         setReturnItems([]);
// // // //         setReturnReason("");
// // // //         setReturnNotes("");
// // // //         setRefundOption("original");
// // // //       }, 2000);
// // // //     } catch (err) {
// // // //       setError("Error processing return: " + err.message);
// // // //       console.error("Submit error:", err);
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   const handleExportCSV = () => {
// // // //     const csvContent = [
// // // //       ["Return ID", "Serial Number", "Date", "Reason", "Total Refunded", "Refund Option", "Items"],
// // // //       ...returnsHistory.map((r) => [
// // // //         r.returnId,
// // // //         r.serialNumber,
// // // //         new Date(r.date).toLocaleString(),
// // // //         r.reason,
// // // //         r.totalRefunded.toFixed(2),
// // // //         r.refundOption,
// // // //         r.items.map((i) => `${i.barcode} (${i.quantity})`).join(", "),
// // // //       ]),
// // // //     ]
// // // //       .map((row) => row.join(","))
// // // //       .join("\n");
// // // //     const blob = new Blob([csvContent], { type: "text/csv" });
// // // //     const url = window.URL.createObjectURL(blob);
// // // //     const a = document.createElement("a");
// // // //     a.href = url;
// // // //     a.download = "returns_history.csv";
// // // //     a.click();
// // // //   };

// // // //   // Data Preparation with Robust Checks
// // // //   const today = new Date().toISOString().split("T")[0];
// // // //   const filteredReturns = Array.isArray(returnsHistory)
// // // //     ? returnsHistory.filter((r) => {
// // // //         if (dateFilter === "today") return r.date.startsWith(today);
// // // //         if (dateFilter === "week") {
// // // //           const weekAgo = new Date();
// // // //           weekAgo.setDate(weekAgo.getDate() - 7);
// // // //           return new Date(r.date) >= weekAgo;
// // // //         }
// // // //         return true;
// // // //       })
// // // //     : [];

// // // //   const returnsTrendData = filteredReturns.reduce((acc, r) => {
// // // //     const date = new Date(r.date).toLocaleDateString();
// // // //     const existing = acc.find((d) => d.date === date);
// // // //     const resellable = r.items.reduce((sum, i) => (i.condition === "resellable" ? sum + i.quantity : sum), 0);
// // // //     const damaged = r.items.reduce((sum, i) => (i.condition === "damaged" ? sum + i.quantity : sum), 0);
// // // //     if (existing) {
// // // //       existing.total += r.totalRefunded;
// // // //       existing.resellable += resellable;
// // // //       existing.damaged += damaged;
// // // //     } else {
// // // //       acc.push({ date, total: r.totalRefunded, resellable, damaged });
// // // //     }
// // // //     return acc;
// // // //   }, []);

// // // //   const reasonsData = filteredReturns.reduce((acc, r) => {
// // // //     const existing = acc.find((d) => d.name === r.reason);
// // // //     if (existing) existing.value += r.totalRefunded;
// // // //     else acc.push({ name: r.reason, value: r.totalRefunded });
// // // //     return acc;
// // // //   }, []);

// // // //   const conditionsData = filteredReturns.reduce((acc, r) => {
// // // //     const date = new Date(r.date).toLocaleDateString();
// // // //     const existing = acc.find((d) => d.date === date);
// // // //     const resellable = r.items.reduce((sum, i) => (i.condition === "resellable" ? sum + i.quantity : sum), 0);
// // // //     const damaged = r.items.reduce((sum, i) => (i.condition === "damaged" ? sum + i.quantity : sum), 0);
// // // //     if (existing) {
// // // //       existing.resellable += resellable;
// // // //       existing.damaged += damaged;
// // // //     } else {
// // // //       acc.push({ date, resellable, damaged });
// // // //     }
// // // //     return acc;
// // // //   }, []);

// // // //   const refundOptionsData = filteredReturns.reduce((acc, r) => {
// // // //     const existing = acc.find((d) => d.name === r.refundOption);
// // // //     if (existing) existing.value += r.totalRefunded;
// // // //     else acc.push({ name: r.refundOption, value: r.totalRefunded });
// // // //     return acc;
// // // //   }, []);

// // // //   const topReturnedItems = Array.isArray(filteredReturns)
// // // //     ? filteredReturns
// // // //         .flatMap((r) => (Array.isArray(r.items) ? r.items : [])) // Ensure items is an array
// // // //         .reduce((acc, item) => {
// // // //           const existing = acc.find((i) => i.barcode === item.barcode);
// // // //           if (existing) existing.quantity += item.quantity;
// // // //           else acc.push({ barcode: item.barcode, quantity: item.quantity });
// // // //           return acc;
// // // //         }, [])
// // // //         .sort((a, b) => b.quantity - a.quantity)
// // // //         .slice(0, 5)
// // // //     : [];

// // // //   const totalRefundsToday = filteredReturns
// // // //     .filter((r) => r.date.startsWith(today))
// // // //     .reduce((sum, r) => sum + r.totalRefunded, 0);

// // // //   const mostCommonReason = reasonsData.length > 0 ? reasonsData.sort((a, b) => b.value - a.value)[0]?.name || "N/A" : "N/A";
// // // //   const highestRefundDay = returnsTrendData.length > 0 ? returnsTrendData.sort((a, b) => b.total - a.total)[0]?.date || "N/A" : "N/A";

// // // //   return (
// // // //     <div className={`${currentTheme.background} ${currentTheme.text} min-h-screen p-6 font-khata`}>
// // // //       <motion.button
// // // //         whileHover={{ scale: 1.1 }}
// // // //         onClick={toggleTheme}
// // // //         className={`fixed top-6 right-6 p-3 rounded-full ${currentTheme.card}`}
// // // //       >
// // // //         {isDarkMode ? <Sun className={currentTheme.accent} /> : <Moon className={currentTheme.accent} />}
// // // //       </motion.button>

// // // //       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-6xl mx-auto space-y-8">
// // // //         <h1 className="text-4xl font-bold text-center mb-6">Returns Management</h1>

// // // //         {/* Search Section */}
// // // //         <div className={`${currentTheme.card} p-6 rounded-lg shadow-lg`}>
// // // //           <div className="flex gap-4 items-center">
// // // //             <Search className={currentTheme.accent} />
// // // //             <select
// // // //               value={searchType}
// // // //               onChange={(e) => setSearchType(e.target.value)}
// // // //               className={`${currentTheme.input} p-2 rounded`}
// // // //             >
// // // //               <option value="serialNumber">Serial Number</option>
// // // //               <option value="barcode">Barcode</option>
// // // //               <option value="customer_phone">Customer Phone</option>
// // // //             </select>
// // // //             <input
// // // //               type="text"
// // // //               value={searchInput}
// // // //               onChange={(e) => setSearchInput(e.target.value)}
// // // //               placeholder={`Enter ${searchType.replace("_", " ")}`}
// // // //               className={`${currentTheme.input} w-full p-2 rounded`}
// // // //             />
// // // //             <button
// // // //               onClick={handleSearch}
// // // //               disabled={isLoading}
// // // //               className={`${currentTheme.button} px-4 py-2 rounded`}
// // // //             >
// // // //               {isLoading ? "Searching..." : "Search"}
// // // //             </button>
// // // //           </div>
// // // //           {error && (
// // // //             <div className={`${currentTheme.error} mt-4 p-2 rounded flex gap-2`}>
// // // //               <AlertCircle /> {error}
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         {/* Simple Return Form */}
// // // //         {selectedSale && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             className={`${currentTheme.card} p-6 rounded-lg shadow-lg`}
// // // //           >
// // // //             <h2 className="text-2xl font-semibold mb-4">Process Return - Serial: {selectedSale.serialNumber}</h2>
// // // //             <div className="mb-4">
// // // //               <p>Total Amount: ${selectedSale.total_amount}</p>
// // // //               <p>Date: {selectedSale.date}</p>
// // // //               {selectedSale.customer_phone && <p>Customer Phone: {selectedSale.customer_phone}</p>}
// // // //             </div>

// // // //             <div className="mb-4">
// // // //               <h3 className="font-medium">Items to Return</h3>
// // // //               {selectedSale.products.map((product) => (
// // // //                 <div key={product.barcode} className="flex gap-4 py-2">
// // // //                   <input
// // // //                     type="number"
// // // //                     min="0"
// // // //                     max={product.quantity}
// // // //                     value={returnItems.find((i) => i.product.barcode === product.barcode)?.quantity || 0}
// // // //                     onChange={(e) => handleItemSelection(product, parseInt(e.target.value))}
// // // //                     className={`${currentTheme.input} w-16 p-1 rounded`}
// // // //                   />
// // // //                   <span>{product.name} (Qty: {product.quantity}, Price: ${product.total_price / product.quantity})</span>
// // // //                 </div>
// // // //               ))}
// // // //             </div>

// // // //             <div className="grid grid-cols-2 gap-4 mb-4">
// // // //               <div>
// // // //                 <label className="block mb-1">Reason</label>
// // // //                 <select
// // // //                   value={returnReason}
// // // //                   onChange={(e) => setReturnReason(e.target.value)}
// // // //                   className={`${currentTheme.input} w-full p-2 rounded`}
// // // //                 >
// // // //                   <option value="">Select</option>
// // // //                   <option value="defective">Defective</option>
// // // //                   <option value="wrong_item">Wrong Item</option>
// // // //                   <option value="damaged_shipping">Damaged in Shipping</option>
// // // //                   <option value="changed_mind">Changed Mind</option>
// // // //                 </select>
// // // //               </div>
// // // //               <div>
// // // //                 <label className="block mb-1">Condition</label>
// // // //                 <select
// // // //                   value={returnCondition}
// // // //                   onChange={(e) => setReturnCondition(e.target.value)}
// // // //                   className={`${currentTheme.input} w-full p-2 rounded`}
// // // //                 >
// // // //                   <option value="resellable">Resellable</option>
// // // //                   <option value="damaged">Damaged</option>
// // // //                 </select>
// // // //               </div>
// // // //             </div>

// // // //             <div className="grid grid-cols-2 gap-4 mb-4">
// // // //               <div>
// // // //                 <label className="block mb-1">Refund Option</label>
// // // //                 <select
// // // //                   value={refundOption}
// // // //                   onChange={(e) => setRefundOption(e.target.value)}
// // // //                   className={`${currentTheme.input} w-full p-2 rounded`}
// // // //                 >
// // // //                   <option value="original">Original Payment</option>
// // // //                   <option value="store_credit">Store Credit</option>
// // // //                   <option value="loyalty">Loyalty Points</option>
// // // //                   <option value="exchange">Exchange</option>
// // // //                 </select>
// // // //               </div>
// // // //               <div>
// // // //                 <label className="block mb-1">Notes</label>
// // // //                 <textarea
// // // //                   value={returnNotes}
// // // //                   onChange={(e) => setReturnNotes(e.target.value)}
// // // //                   className={`${currentTheme.input} w-full p-2 rounded`}
// // // //                   placeholder="Optional"
// // // //                 />
// // // //               </div>
// // // //             </div>

// // // //             <button
// // // //               onClick={handleSubmitReturn}
// // // //               disabled={isLoading}
// // // //               className={`${currentTheme.button} w-full py-2 rounded`}
// // // //             >
// // // //               {isLoading ? "Processing..." : "Submit Return"}
// // // //             </button>

// // // //             {success && (
// // // //               <div className={`${currentTheme.success} mt-4 p-2 rounded flex gap-2`}>
// // // //                 <CheckCircle /> {success}
// // // //               </div>
// // // //             )}
// // // //           </motion.div>
// // // //         )}

// // // //         {/* Visualizations and Insights */}
// // // //         <div className={`${currentTheme.card} p-6 rounded-lg shadow-lg`}>
// // // //           <h2 className="text-2xl font-semibold mb-4">Returns Insights</h2>

// // // //           {/* Summary Stats */}
// // // //           <div className="grid grid-cols-3 gap-4 mb-6">
// // // //             <p>
// // // //               <strong>Total Refunds Today:</strong> ${totalRefundsToday.toFixed(2)}
// // // //             </p>
// // // //             <p>
// // // //               <strong>Most Common Reason:</strong> {mostCommonReason}
// // // //             </p>
// // // //             <p>
// // // //               <strong>Highest Refund Day:</strong> {highestRefundDay}
// // // //             </p>
// // // //           </div>

// // // //           {filteredReturns.length === 0 ? (
// // // //             <p className={currentTheme.secondaryText}>No data available for visualizations.</p>
// // // //           ) : (
// // // //             <>
// // // //               <div className="mb-6">
// // // //                 <h3 className="font-medium mb-2">Returns Trend (Amount & Items)</h3>
// // // //                 <LineChart width={700} height={300} data={returnsTrendData} className="mx-auto">
// // // //                   <CartesianGrid strokeDasharray="3 3" />
// // // //                   <XAxis dataKey="date" />
// // // //                   <YAxis yAxisId="left" />
// // // //                   <YAxis yAxisId="right" orientation="right" />
// // // //                   <Tooltip />
// // // //                   <Legend />
// // // //                   <Line yAxisId="left" type="monotone" dataKey="total" stroke="#0088FE" name="Total Refunded" />
// // // //                   <Line yAxisId="right" type="monotone" dataKey="resellable" stroke="#00C49F" name="Resellable Items" />
// // // //                   <Line yAxisId="right" type="monotone" dataKey="damaged" stroke="#FF8042" name="Damaged Items" />
// // // //                 </LineChart>
// // // //               </div>

// // // //               <div className="mb-6">
// // // //                 <h3 className="font-medium mb-2">Return Reasons (by Refund Amount)</h3>
// // // //                 <PieChart width={400} height={300} className="mx-auto">
// // // //                   <Pie
// // // //                     data={reasonsData}
// // // //                     cx="50%"
// // // //                     cy="50%"
// // // //                     outerRadius={100}
// // // //                     fill="#8884d8"
// // // //                     dataKey="value"
// // // //                     label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
// // // //                   >
// // // //                     {reasonsData.map((entry, index) => (
// // // //                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// // // //                     ))}
// // // //                   </Pie>
// // // //                   <Tooltip />
// // // //                 </PieChart>
// // // //               </div>

// // // //               <div className="mb-6">
// // // //                 <h3 className="font-medium mb-2">Conditions Over Time (Items)</h3>
// // // //                 <BarChart width={700} height={300} data={conditionsData} className="mx-auto">
// // // //                   <CartesianGrid strokeDasharray="3 3" />
// // // //                   <XAxis dataKey="date" />
// // // //                   <YAxis />
// // // //                   <Tooltip />
// // // //                   <Legend />
// // // //                   <Bar dataKey="resellable" stackId="a" fill="#00C49F" />
// // // //                   <Bar dataKey="damaged" stackId="a" fill="#FF8042" />
// // // //                 </BarChart>
// // // //               </div>

// // // //               <div className="mb-6">
// // // //                 <h3 className="font-medium mb-2">Refund Options (by Amount)</h3>
// // // //                 <PieChart width={400} height={300} className="mx-auto">
// // // //                   <Pie
// // // //                     data={refundOptionsData}
// // // //                     cx="50%"
// // // //                     cy="50%"
// // // //                     outerRadius={100}
// // // //                     fill="#8884d8"
// // // //                     dataKey="value"
// // // //                     label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
// // // //                   >
// // // //                     {refundOptionsData.map((entry, index) => (
// // // //                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// // // //                     ))}
// // // //                   </Pie>
// // // //                   <Tooltip />
// // // //                 </PieChart>
// // // //               </div>

// // // //               <div className="mb-6">
// // // //                 <h3 className="font-medium mb-2">Top Returned Items</h3>
// // // //                 <BarChart width={700} height={300} data={topReturnedItems} className="mx-auto">
// // // //                   <CartesianGrid strokeDasharray="3 3" />
// // // //                   <XAxis dataKey="barcode" />
// // // //                   <YAxis />
// // // //                   <Tooltip />
// // // //                   <Legend />
// // // //                   <Bar dataKey="quantity" fill={isDarkMode ? "#a78bfa" : "#6b7280"} />
// // // //                 </BarChart>
// // // //               </div>
// // // //             </>
// // // //           )}
// // // //         </div>

// // // //         {/* Returns History (Khata Book Style) */}
// // // //         <div className={`${currentTheme.card} p-6 rounded-lg shadow-lg`}>
// // // //           <div className="flex justify-between items-center mb-4">
// // // //             <h2 className="text-2xl font-semibold flex items-center gap-2">
// // // //               <History className={currentTheme.accent} /> Returns History
// // // //             </h2>
// // // //             <div className="flex gap-4">
// // // //               <select
// // // //                 value={dateFilter}
// // // //                 onChange={(e) => setDateFilter(e.target.value)}
// // // //                 className={`${currentTheme.input} p-2 rounded`}
// // // //               >
// // // //                 <option value="all">All Time</option>
// // // //                 <option value="today">Today</option>
// // // //                 <option value="week">Last 7 Days</option>
// // // //               </select>
// // // //               <button
// // // //                 onClick={handleExportCSV}
// // // //                 className={`${currentTheme.button} px-4 py-2 rounded flex items-center gap-2`}
// // // //               >
// // // //                 <Download /> Export CSV
// // // //               </button>
// // // //             </div>
// // // //           </div>

// // // //           {filteredReturns.length === 0 ? (
// // // //             <p className={currentTheme.secondaryText}>No returns recorded for this period.</p>
// // // //           ) : (
// // // //             <div className="overflow-x-auto">
// // // //               <table className="w-full khata-table">
// // // //                 <thead>
// // // //                   <tr className={`${currentTheme.border} bg-gray-200 dark:bg-gray-700`}>
// // // //                     <th className="p-2">Return ID</th>
// // // //                     <th className="p-2">Serial No.</th>
// // // //                     <th className="p-2">Date</th>
// // // //                     <th className="p-2">Reason</th>
// // // //                     <th className="p-2">Refunded</th>
// // // //                     <th className="p-2">Items</th>
// // // //                   </tr>
// // // //                 </thead>
// // // //                 <tbody>
// // // //                   {filteredReturns.map((r, index) => (
// // // //                     <tr key={r.returnId} className={index % 2 === 0 ? "bg-gray-100 dark:bg-gray-800" : ""}>
// // // //                       <td className="p-2">{r.returnId}</td>
// // // //                       <td className="p-2">{r.serialNumber}</td>
// // // //                       <td className="p-2">{new Date(r.date).toLocaleString()}</td>
// // // //                       <td className="p-2">{r.reason}</td>
// // // //                       <td className="p-2">${r.totalRefunded.toFixed(2)}</td>
// // // //                       <td className="p-2">
// // // //                         {r.items.map((i) => `${i.barcode} (${i.quantity})`).join(", ")}
// // // //                       </td>
// // // //                     </tr>
// // // //                   ))}
// // // //                 </tbody>
// // // //               </table>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </motion.div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ReturnsManagement;
// // // import React, { useState, useEffect } from "react";
// // // import { motion } from "framer-motion";
// // // import {
// // //   Search,
// // //   AlertCircle,
// // //   CheckCircle,
// // //   Sun,
// // //   Moon,
// // //   History,
// // //   Download,
// // //   Filter,
// // // } from "lucide-react";
// // // import {
// // //   BarChart,
// // //   Bar,
// // //   XAxis,
// // //   YAxis,
// // //   CartesianGrid,
// // //   Tooltip,
// // //   Legend,
// // //   LineChart,
// // //   Line,
// // //   PieChart,
// // //   Pie,
// // //   Cell,
// // // } from "recharts";
// // // import "./ReturnsManagement.css";

// // // const ReturnsManagement = () => {
// // //   const [storeId] = useState(localStorage.getItem("storeId") || "STORE-1737889146-4514");
// // //   const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark");
// // //   const [searchInput, setSearchInput] = useState("");
// // //   const [searchType, setSearchType] = useState("serialNumber");
// // //   const [selectedSale, setSelectedSale] = useState(null);
// // //   const [returnItems, setReturnItems] = useState([]);
// // //   const [returnReason, setReturnReason] = useState("");
// // //   const [returnNotes, setReturnNotes] = useState("");
// // //   const [returnCondition, setReturnCondition] = useState("resellable");
// // //   const [refundOption, setRefundOption] = useState("original");
// // //   const [returnsHistory, setReturnsHistory] = useState([]); // Ensure initial state is an array
// // //   const [dateFilter, setDateFilter] = useState("all");
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [error, setError] = useState(null);
// // //   const [success, setSuccess] = useState(null);

// // //   const themes = {
// // //     light: {
// // //       background: "bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50",
// // //       text: "text-gray-800",
// // //       secondaryText: "text-gray-600",
// // //       accent: "text-purple-600",
// // //       button: "bg-purple-600 hover:bg-purple-700 text-white",
// // //       card: "bg-white",
// // //       border: "border-gray-300",
// // //       input: "bg-violet-50 border-gray-300",
// // //       error: "bg-red-50 text-red-600 border-red-200",
// // //       success: "bg-green-50 text-green-600 border-green-200",
// // //     },
// // //     dark: {
// // //       background: "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700",
// // //       text: "text-gray-100",
// // //       secondaryText: "text-gray-400",
// // //       accent: "text-purple-400",
// // //       button: "bg-purple-600 hover:bg-purple-700 text-white",
// // //       card: "bg-gray-800",
// // //       border: "border-gray-700",
// // //       input: "bg-gray-700 border-gray-600",
// // //       error: "bg-red-900/30 text-red-400 border-red-700",
// // //       success: "bg-green-900/30 text-green-300 border-green-700",
// // //     },
// // //   };

// // //   const currentTheme = isDarkMode ? themes.dark : themes.light;
// // //   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A78BFA"];

// // //   useEffect(() => {
// // //     const fetchReturnsHistory = async () => {
// // //       if (!storeId) {
// // //         setError("No store ID provided.");
// // //         return;
// // //       }
// // //       setIsLoading(true);
// // //       try {
// // //         const response = await fetch(`http://localhost:5010/api/returns?storeId=${storeId}`, {
// // //           headers: { storeId },
// // //         });
// // //         const data = await response.json();
// // //         console.log("Fetched returns history:", data); // Debug log
// // //         if (response.ok) {
// // //           // Ensure data is an array
// // //           setReturnsHistory(Array.isArray(data) ? data : []);
// // //         } else {
// // //           console.error("Failed to fetch returns history:", data.error);
// // //           setReturnsHistory([]);
// // //           setError("Failed to load returns history.");
// // //         }
// // //       } catch (err) {
// // //         console.error("Error fetching returns history:", err);
// // //         setReturnsHistory([]);
// // //         setError("Error connecting to server.");
// // //       } finally {
// // //         setIsLoading(false);
// // //       }
// // //     };
// // //     fetchReturnsHistory();
// // //   }, [storeId]);

// // //   const toggleTheme = () => {
// // //     setIsDarkMode((prev) => {
// // //       const newMode = !prev;
// // //       localStorage.setItem("theme", newMode ? "dark" : "light");
// // //       return newMode;
// // //     });
// // //   };

// // //   const handleSearch = async () => {
// // //     if (!storeId) {
// // //       setError("Store ID is missing. Please log in again.");
// // //       return;
// // //     }
// // //     if (!searchInput.trim()) {
// // //       setError("Please enter a search value.");
// // //       return;
// // //     }

// // //     setIsLoading(true);
// // //     setError(null);
// // //     setSelectedSale(null);

// // //     try {
// // //       let url = "";
// // //       if (searchType === "serialNumber") {
// // //         const serialNumber = parseInt(searchInput);
// // //         url = `http://localhost:5010/api/sale-by-serial?storeId=${storeId}&serialNumber=${serialNumber}`;
// // //       } else if (searchType === "barcode") {
// // //         url = `http://localhost:5010/api/sale-by-barcode?storeId=${storeId}&barcode=${searchInput}`;
// // //       } else if (searchType === "customer_phone") {
// // //         url = `http://localhost:5010/api/sale-by-phone?storeId=${storeId}&phone=${searchInput}`;
// // //       }

// // //       const response = await fetch(url, { headers: { storeId } });
// // //       const data = await response.json();
// // //       if (!response.ok) throw new Error(data.error || "Failed to fetch sale");

// // //       if (!data.sale) {
// // //         setError(`No sale found with this ${searchType}.`);
// // //       } else {
// // //         setSelectedSale(data.sale);
// // //       }
// // //     } catch (err) {
// // //       setError("Error searching: " + err.message);
// // //       console.error("Search error:", err);
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   const handleItemSelection = (product, quantity) => {
// // //     setReturnItems((prev) => {
// // //       const existing = prev.find((item) => item.product.barcode === product.barcode);
// // //       if (existing) {
// // //         return prev.map((item) =>
// // //           item.product.barcode === product.barcode ? { ...item, quantity: Math.min(quantity, product.quantity) } : item
// // //         );
// // //       }
// // //       return [...prev, { product, quantity: Math.min(quantity, product.quantity), condition: returnCondition }];
// // //     });
// // //   };

// // //   const handleSubmitReturn = async () => {
// // //     if (!selectedSale || returnItems.length === 0 || !returnReason) {
// // //       setError("Please select a sale, items to return, and a reason.");
// // //       return;
// // //     }

// // //     setIsLoading(true);
// // //     setError(null);
// // //     setSuccess(null);

// // //     const returnData = {
// // //       storeId,
// // //       serialNumber: selectedSale.serialNumber,
// // //       items: returnItems.map((item) => ({
// // //         barcode: item.product.barcode,
// // //         quantity: item.quantity,
// // //         condition: item.condition,
// // //       })),
// // //       reason: returnReason,
// // //       notes: returnNotes,
// // //       refundOption,
// // //       date: new Date().toISOString(),
// // //     };

// // //     try {
// // //       const response = await fetch("http://localhost:5010/api/returns", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json", storeId },
// // //         body: JSON.stringify(returnData),
// // //       });
// // //       const result = await response.json();
// // //       if (!response.ok) throw new Error(result.error || "Failed to process return");

// // //       for (const item of returnItems) {
// // //         if (item.condition === "resellable") {
// // //           await fetch(`http://localhost:5000/products/restock-by-barcode?storeId=${storeId}&barcode=${item.product.barcode}`, {
// // //             method: "POST",
// // //             headers: { "Content-Type": "application/json" },
// // //             body: JSON.stringify({ quantity: item.quantity }),
// // //           });
// // //         } else {
// // //           await fetch(`http://localhost:5000/damage-items?storeId=${storeId}`, {
// // //             method: "POST",
// // //             headers: { "Content-Type": "application/json" },
// // //             body: JSON.stringify({ barcode: item.product.barcode, quantity: item.quantity, reason: returnReason }),
// // //           });
// // //         }
// // //       }

// // //       const historyResponse = await fetch(`http://localhost:5010/api/returns?storeId=${storeId}`, { headers: { storeId } });
// // //       const historyData = await historyResponse.json();
// // //       if (historyResponse.ok) {
// // //         setReturnsHistory(Array.isArray(historyData) ? historyData : []);
// // //       } else {
// // //         setReturnsHistory([]);
// // //       }

// // //       setSuccess("Return processed successfully!");
// // //       setTimeout(() => {
// // //         setSearchInput("");
// // //         setSelectedSale(null);
// // //         setReturnItems([]);
// // //         setReturnReason("");
// // //         setReturnNotes("");
// // //         setRefundOption("original");
// // //       }, 2000);
// // //     } catch (err) {
// // //       setError("Error processing return: " + err.message);
// // //       console.error("Submit error:", err);
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   const handleExportCSV = () => {
// // //     const csvContent = [
// // //       ["Return ID", "Serial Number", "Date", "Reason", "Total Refunded", "Refund Option", "Items"],
// // //       ...returnsHistory.map((r) => [
// // //         r.returnId,
// // //         r.serialNumber,
// // //         new Date(r.date).toLocaleString(),
// // //         r.reason,
// // //         r.totalRefunded.toFixed(2),
// // //         r.refundOption,
// // //         r.items.map((i) => `${i.barcode} (${i.quantity})`).join(", "),
// // //       ]),
// // //     ]
// // //       .map((row) => row.join(","))
// // //       .join("\n");
// // //     const blob = new Blob([csvContent], { type: "text/csv" });
// // //     const url = window.URL.createObjectURL(blob);
// // //     const a = document.createElement("a");
// // //     a.href = url;
// // //     a.download = "returns_history.csv";
// // //     a.click();
// // //   };

// // //   // Data Preparation with Robust Checks
// // //   const today = new Date().toISOString().split("T")[0];
// // //   const filteredReturns = Array.isArray(returnsHistory)
// // //     ? returnsHistory.filter((r) => {
// // //         if (dateFilter === "today") return r.date.startsWith(today);
// // //         if (dateFilter === "week") {
// // //           const weekAgo = new Date();
// // //           weekAgo.setDate(weekAgo.getDate() - 7);
// // //           return new Date(r.date) >= weekAgo;
// // //         }
// // //         return true;
// // //       })
// // //     : [];

// // //   const returnsTrendData = filteredReturns.reduce((acc, r) => {
// // //     const date = new Date(r.date).toLocaleDateString();
// // //     const existing = acc.find((d) => d.date === date);
// // //     const resellable = r.items.reduce((sum, i) => (i.condition === "resellable" ? sum + i.quantity : sum), 0);
// // //     const damaged = r.items.reduce((sum, i) => (i.condition === "damaged" ? sum + i.quantity : sum), 0);
// // //     if (existing) {
// // //       existing.total += r.totalRefunded;
// // //       existing.resellable += resellable;
// // //       existing.damaged += damaged;
// // //     } else {
// // //       acc.push({ date, total: r.totalRefunded, resellable, damaged });
// // //     }
// // //     return acc;
// // //   }, []);

// // //   const reasonsData = filteredReturns.reduce((acc, r) => {
// // //     const existing = acc.find((d) => d.name === r.reason);
// // //     if (existing) existing.value += r.totalRefunded;
// // //     else acc.push({ name: r.reason, value: r.totalRefunded });
// // //     return acc;
// // //   }, []);

// // //   const conditionsData = filteredReturns.reduce((acc, r) => {
// // //     const date = new Date(r.date).toLocaleDateString();
// // //     const existing = acc.find((d) => d.date === date);
// // //     const resellable = r.items.reduce((sum, i) => (i.condition === "resellable" ? sum + i.quantity : sum), 0);
// // //     const damaged = r.items.reduce((sum, i) => (i.condition === "damaged" ? sum + i.quantity : sum), 0);
// // //     if (existing) {
// // //       existing.resellable += resellable;
// // //       existing.damaged += damaged;
// // //     } else {
// // //       acc.push({ date, resellable, damaged });
// // //     }
// // //     return acc;
// // //   }, []);

// // //   const refundOptionsData = filteredReturns.reduce((acc, r) => {
// // //     const existing = acc.find((d) => d.name === r.refundOption);
// // //     if (existing) existing.value += r.totalRefunded;
// // //     else acc.push({ name: r.refundOption, value: r.totalRefunded });
// // //     return acc;
// // //   }, []);

// // //   const topReturnedItems = Array.isArray(filteredReturns)
// // //     ? filteredReturns
// // //         .flatMap((r) => (Array.isArray(r.items) ? r.items : [])) // Ensure items is an array
// // //         .reduce((acc, item) => {
// // //           const existing = acc.find((i) => i.barcode === item.barcode);
// // //           if (existing) existing.quantity += item.quantity;
// // //           else acc.push({ barcode: item.barcode, quantity: item.quantity });
// // //           return acc;
// // //         }, [])
// // //         .sort((a, b) => b.quantity - a.quantity)
// // //         .slice(0, 5)
// // //     : [];

// // //   const totalRefundsToday = filteredReturns
// // //     .filter((r) => r.date.startsWith(today))
// // //     .reduce((sum, r) => sum + r.totalRefunded, 0);

// // //   const mostCommonReason = reasonsData.length > 0 ? reasonsData.sort((a, b) => b.value - a.value)[0]?.name || "N/A" : "N/A";
// // //   const highestRefundDay = returnsTrendData.length > 0 ? returnsTrendData.sort((a, b) => b.total - a.total)[0]?.date || "N/A" : "N/A";

// // //   return (
// // //     <div className={`${currentTheme.background} ${currentTheme.text} min-h-screen p-6 font-khata`}>
// // //       <motion.button
// // //         whileHover={{ scale: 1.1 }}
// // //         onClick={toggleTheme}
// // //         className={`fixed top-6 right-6 p-3 rounded-full ${currentTheme.card}`}
// // //       >
// // //         {isDarkMode ? <Sun className={currentTheme.accent} /> : <Moon className={currentTheme.accent} />}
// // //       </motion.button>

// // //       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-6xl mx-auto space-y-8">
// // //         <h1 className="text-4xl font-bold text-center mb-6">Returns Management</h1>

// // //         {/* Search Section */}
// // //         <div className={`${currentTheme.card} p-6 rounded-lg shadow-lg`}>
// // //           <div className="flex gap-4 items-center">
// // //             <Search className={currentTheme.accent} />
// // //             <select
// // //               value={searchType}
// // //               onChange={(e) => setSearchType(e.target.value)}
// // //               className={`${currentTheme.input} p-2 rounded`}
// // //             >
// // //               <option value="serialNumber">Serial Number</option>
// // //               <option value="barcode">Barcode</option>
// // //               <option value="customer_phone">Customer Phone</option>
// // //             </select>
// // //             <input
// // //               type="text"
// // //               value={searchInput}
// // //               onChange={(e) => setSearchInput(e.target.value)}
// // //               placeholder={`Enter ${searchType.replace("_", " ")}`}
// // //               className={`${currentTheme.input} w-full p-2 rounded`}
// // //             />
// // //             <button
// // //               onClick={handleSearch}
// // //               disabled={isLoading}
// // //               className={`${currentTheme.button} px-4 py-2 rounded`}
// // //             >
// // //               {isLoading ? "Searching..." : "Search"}
// // //             </button>
// // //           </div>
// // //           {error && (
// // //             <div className={`${currentTheme.error} mt-4 p-2 rounded flex gap-2`}>
// // //               <AlertCircle /> {error}
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* Simple Return Form */}
// // //         {selectedSale && (
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             className={`${currentTheme.card} p-6 rounded-lg shadow-lg`}
// // //           >
// // //             <h2 className="text-2xl font-semibold mb-4">Process Return - Serial: {selectedSale.serialNumber}</h2>
// // //             <div className="mb-4">
// // //               <p>Total Amount: ${selectedSale.total_amount}</p>
// // //               <p>Date: {selectedSale.date}</p>
// // //               {selectedSale.customer_phone && <p>Customer Phone: {selectedSale.customer_phone}</p>}
// // //             </div>

// // //             <div className="mb-4">
// // //               <h3 className="font-medium">Items to Return</h3>
// // //               {selectedSale.products.map((product) => (
// // //                 <div key={product.barcode} className="flex gap-4 py-2">
// // //                   <input
// // //                     type="number"
// // //                     min="0"
// // //                     max={product.quantity}
// // //                     value={returnItems.find((i) => i.product.barcode === product.barcode)?.quantity || 0}
// // //                     onChange={(e) => handleItemSelection(product, parseInt(e.target.value))}
// // //                     className={`${currentTheme.input} w-16 p-1 rounded`}
// // //                   />
// // //                   <span>{product.name} (Qty: {product.quantity}, Price: ${product.total_price / product.quantity})</span>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             <div className="grid grid-cols-2 gap-4 mb-4">
// // //               <div>
// // //                 <label className="block mb-1">Reason</label>
// // //                 <select
// // //                   value={returnReason}
// // //                   onChange={(e) => setReturnReason(e.target.value)}
// // //                   className={`${currentTheme.input} w-full p-2 rounded`}
// // //                 >
// // //                   <option value="">Select</option>
// // //                   <option value="defective">Defective</option>
// // //                   <option value="wrong_item">Wrong Item</option>
// // //                   <option value="damaged_shipping">Damaged in Shipping</option>
// // //                   <option value="changed_mind">Changed Mind</option>
// // //                 </select>
// // //               </div>
// // //               <div>
// // //                 <label className="block mb-1">Condition</label>
// // //                 <select
// // //                   value={returnCondition}
// // //                   onChange={(e) => setReturnCondition(e.target.value)}
// // //                   className={`${currentTheme.input} w-full p-2 rounded`}
// // //                 >
// // //                   <option value="resellable">Resellable</option>
// // //                   <option value="damaged">Damaged</option>
// // //                 </select>
// // //               </div>
// // //             </div>

// // //             <div className="grid grid-cols-2 gap-4 mb-4">
// // //               <div>
// // //                 <label className="block mb-1">Refund Option</label>
// // //                 <select
// // //                   value={refundOption}
// // //                   onChange={(e) => setRefundOption(e.target.value)}
// // //                   className={`${currentTheme.input} w-full p-2 rounded`}
// // //                 >
// // //                   <option value="original">Original Payment</option>
// // //                   <option value="store_credit">Store Credit</option>
// // //                   <option value="loyalty">Loyalty Points</option>
// // //                   <option value="exchange">Exchange</option>
// // //                 </select>
// // //               </div>
// // //               <div>
// // //                 <label className="block mb-1">Notes</label>
// // //                 <textarea
// // //                   value={returnNotes}
// // //                   onChange={(e) => setReturnNotes(e.target.value)}
// // //                   className={`${currentTheme.input} w-full p-2 rounded`}
// // //                   placeholder="Optional"
// // //                 />
// // //               </div>
// // //             </div>

// // //             <button
// // //               onClick={handleSubmitReturn}
// // //               disabled={isLoading}
// // //               className={`${currentTheme.button} w-full py-2 rounded`}
// // //             >
// // //               {isLoading ? "Processing..." : "Submit Return"}
// // //             </button>

// // //             {success && (
// // //               <div className={`${currentTheme.success} mt-4 p-2 rounded flex gap-2`}>
// // //                 <CheckCircle /> {success}
// // //               </div>
// // //             )}
// // //           </motion.div>
// // //         )}

// // //         {/* Visualizations and Insights */}
// // //         <div className={`${currentTheme.card} p-6 rounded-lg shadow-lg`}>
// // //           <h2 className="text-2xl font-semibold mb-4">Returns Insights</h2>

// // //           {/* Summary Stats */}
// // //           <div className="grid grid-cols-3 gap-4 mb-6">
// // //             <p>
// // //               <strong>Total Refunds Today:</strong> ${totalRefundsToday.toFixed(2)}
// // //             </p>
// // //             <p>
// // //               <strong>Most Common Reason:</strong> {mostCommonReason}
// // //             </p>
// // //             <p>
// // //               <strong>Highest Refund Day:</strong> {highestRefundDay}
// // //             </p>
// // //           </div>

// // //           {filteredReturns.length === 0 ? (
// // //             <p className={currentTheme.secondaryText}>No data available for visualizations.</p>
// // //           ) : (
// // //             <>
// // //               <div className="mb-6">
// // //                 <h3 className="font-medium mb-2">Returns Trend (Amount & Items)</h3>
// // //                 <LineChart width={700} height={300} data={returnsTrendData} className="mx-auto">
// // //                   <CartesianGrid strokeDasharray="3 3" />
// // //                   <XAxis dataKey="date" />
// // //                   <YAxis yAxisId="left" />
// // //                   <YAxis yAxisId="right" orientation="right" />
// // //                   <Tooltip />
// // //                   <Legend />
// // //                   <Line yAxisId="left" type="monotone" dataKey="total" stroke="#0088FE" name="Total Refunded" />
// // //                   <Line yAxisId="right" type="monotone" dataKey="resellable" stroke="#00C49F" name="Resellable Items" />
// // //                   <Line yAxisId="right" type="monotone" dataKey="damaged" stroke="#FF8042" name="Damaged Items" />
// // //                 </LineChart>
// // //               </div>

// // //               <div className="mb-6">
// // //                 <h3 className="font-medium mb-2">Return Reasons (by Refund Amount)</h3>
// // //                 <PieChart width={400} height={300} className="mx-auto">
// // //                   <Pie
// // //                     data={reasonsData}
// // //                     cx="50%"
// // //                     cy="50%"
// // //                     outerRadius={100}
// // //                     fill="#8884d8"
// // //                     dataKey="value"
// // //                     label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
// // //                   >
// // //                     {reasonsData.map((entry, index) => (
// // //                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// // //                     ))}
// // //                   </Pie>
// // //                   <Tooltip />
// // //                 </PieChart>
// // //               </div>

// // //               <div className="mb-6">
// // //                 <h3 className="font-medium mb-2">Conditions Over Time (Items)</h3>
// // //                 <BarChart width={700} height={300} data={conditionsData} className="mx-auto">
// // //                   <CartesianGrid strokeDasharray="3 3" />
// // //                   <XAxis dataKey="date" />
// // //                   <YAxis />
// // //                   <Tooltip />
// // //                   <Legend />
// // //                   <Bar dataKey="resellable" stackId="a" fill="#00C49F" />
// // //                   <Bar dataKey="damaged" stackId="a" fill="#FF8042" />
// // //                 </BarChart>
// // //               </div>

// // //               <div className="mb-6">
// // //                 <h3 className="font-medium mb-2">Refund Options (by Amount)</h3>
// // //                 <PieChart width={400} height={300} className="mx-auto">
// // //                   <Pie
// // //                     data={refundOptionsData}
// // //                     cx="50%"
// // //                     cy="50%"
// // //                     outerRadius={100}
// // //                     fill="#8884d8"
// // //                     dataKey="value"
// // //                     label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
// // //                   >
// // //                     {refundOptionsData.map((entry, index) => (
// // //                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// // //                     ))}
// // //                   </Pie>
// // //                   <Tooltip />
// // //                 </PieChart>
// // //               </div>

// // //               <div className="mb-6">
// // //                 <h3 className="font-medium mb-2">Top Returned Items</h3>
// // //                 <BarChart width={700} height={300} data={topReturnedItems} className="mx-auto">
// // //                   <CartesianGrid strokeDasharray="3 3" />
// // //                   <XAxis dataKey="barcode" />
// // //                   <YAxis />
// // //                   <Tooltip />
// // //                   <Legend />
// // //                   <Bar dataKey="quantity" fill={isDarkMode ? "#a78bfa" : "#6b7280"} />
// // //                 </BarChart>
// // //               </div>
// // //             </>
// // //           )}
// // //         </div>

// // //         {/* Returns History (Khata Book Style) */}
// // //         <div className={`${currentTheme.card} p-6 rounded-lg shadow-lg`}>
// // //           <div className="flex justify-between items-center mb-4">
// // //             <h2 className="text-2xl font-semibold flex items-center gap-2">
// // //               <History className={currentTheme.accent} /> Returns History
// // //             </h2>
// // //             <div className="flex gap-4">
// // //               <select
// // //                 value={dateFilter}
// // //                 onChange={(e) => setDateFilter(e.target.value)}
// // //                 className={`${currentTheme.input} p-2 rounded`}
// // //               >
// // //                 <option value="all">All Time</option>
// // //                 <option value="today">Today</option>
// // //                 <option value="week">Last 7 Days</option>
// // //               </select>
// // //               <button
// // //                 onClick={handleExportCSV}
// // //                 className={`${currentTheme.button} px-4 py-2 rounded flex items-center gap-2`}
// // //               >
// // //                 <Download /> Export CSV
// // //               </button>
// // //             </div>
// // //           </div>

// // //           {filteredReturns.length === 0 ? (
// // //             <p className={currentTheme.secondaryText}>No returns recorded for this period.</p>
// // //           ) : (
// // //             <div className="overflow-x-auto">
// // //               <table className="w-full khata-table">
// // //                 <thead>
// // //                   <tr className={`${currentTheme.border} bg-gray-200 dark:bg-gray-700`}>
// // //                     <th className="p-2">Return ID</th>
// // //                     <th className="p-2">Serial No.</th>
// // //                     <th className="p-2">Date</th>
// // //                     <th className="p-2">Reason</th>
// // //                     <th className="p-2">Refunded</th>
// // //                     <th className="p-2">Items</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {filteredReturns.map((r, index) => (
// // //                     <tr key={r.returnId} className={index % 2 === 0 ? "bg-gray-100 dark:bg-gray-800" : ""}>
// // //                       <td className="p-2">{r.returnId}</td>
// // //                       <td className="p-2">{r.serialNumber}</td>
// // //                       <td className="p-2">{new Date(r.date).toLocaleString()}</td>
// // //                       <td className="p-2">{r.reason}</td>
// // //                       <td className="p-2">${r.totalRefunded.toFixed(2)}</td>
// // //                       <td className="p-2">
// // //                         {r.items.map((i) => `${i.barcode} (${i.quantity})`).join(", ")}
// // //                       </td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </motion.div>
// // //     </div>
// // //   );
// // // };

// // // export default ReturnsManagement;
// // import React, { useState, useEffect, useMemo } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   Search, AlertCircle, CheckCircle, Sun, Moon, History, Download, Filter,
// //   RefreshCcw, ArrowUpDown, PieChart as PieChartIcon, BarChart as BarChartIcon, TrendingUp,
// //   Calendar, User, Package, DollarSign, Clipboard, Archive, Printer, ChevronDown, ChevronUp
// // } from "lucide-react";
// // import {
// //   BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
// //   LineChart, Line, Area, AreaChart, PieChart, Pie, Cell, Sector
// // } from "recharts";
// // import { format, subDays, differenceInDays, isWithinInterval } from "date-fns";
// // import "./ReturnsManagement.css"; // Custom styles

// // const ReturnsManagement = () => {
// //   // Core state
// //   const [storeId] = useState(localStorage.getItem("storeId") || "STORE-1737889146-4514");
// //   const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark");
// //   const [activeTab, setActiveTab] = useState("process");
// //   const [searchInput, setSearchInput] = useState("");
// //   const [searchType, setSearchType] = useState("serialNumber");
// //   const [selectedSale, setSelectedSale] = useState(null);
// //   const [returnItems, setReturnItems] = useState([]);
// //   const [returnReason, setReturnReason] = useState("");
// //   const [returnNotes, setReturnNotes] = useState("");
// //   const [returnCondition, setReturnCondition] = useState("resellable");
// //   const [refundOption, setRefundOption] = useState("original");
// //   const [returnsHistory, setReturnsHistory] = useState([]);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [success, setSuccess] = useState(null);
// //   const [showNotification, setShowNotification] = useState(false);

// //   // Advanced filters
// //   const [dateFilter, setDateFilter] = useState("all");
// //   const [customDateRange, setCustomDateRange] = useState({
// //     start: format(subDays(new Date(), 30), "yyyy-MM-dd"),
// //     end: format(new Date(), "yyyy-MM-dd")
// //   });
// //   const [reasonFilter, setReasonFilter] = useState("all");
// //   const [sortConfig, setSortConfig] = useState({ key: "date", direction: "desc" });
// //   const [activeReturnId, setActiveReturnId] = useState(null);
// //   const [expandedReturnDetails, setExpandedReturnDetails] = useState({});
// //   const [viewMode, setViewMode] = useState("table");
// //   const [activePieSegment, setActivePieSegment] = useState(null);

// //   // Dashboard metrics
// //   const [dashboardMetrics, setDashboardMetrics] = useState({
// //     totalReturns: 0,
// //     totalRefunded: 0,
// //     averageReturnValue: 0,
// //     returnRate: 0,
// //     returnsByReason: {},
// //     returnsByProduct: {},
// //     returnsByDay: {},
// //     returnsByCondition: {},
// //     topReturningCustomers: []
// //   });

// //   // Animation variants
// //   const pageTransition = {
// //     initial: { opacity: 0, y: 20 },
// //     animate: { opacity: 1, y: 0 },
// //     exit: { opacity: 0, y: -20 },
// //     transition: { duration: 0.3 }
// //   };

// //   const cardVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
// //   };

// //   const buttonVariants = {
// //     hover: { scale: 1.03, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" },
// //     tap: { scale: 0.97 }
// //   };

// //   const tableRowVariants = {
// //     hidden: { opacity: 0, x: -20 },
// //     visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.05, duration: 0.3 } })
// //   };

// //   // Theme configuration
// //   const themes = {
// //     light: {
// //       background: "bg-gradient-to-r from-violet-50 via-indigo-50 to-blue-50",
// //       text: "text-gray-800",
// //       secondaryText: "text-gray-600",
// //       accent: "text-violet-600",
// //       button: "bg-violet-600 hover:bg-violet-700 text-white",
// //       card: "bg-white",
// //       border: "border-gray-200",
// //       input: "bg-violet-50 border-gray-300",
// //       error: "bg-red-50 text-red-600 border-red-200",
// //       success: "bg-green-50 text-green-600 border-green-200",
// //       tableHeader: "bg-violet-100 text-violet-800",
// //       tableRow: "even:bg-violet-50",
// //       chartColors: ["#8b5cf6", "#6366f1", "#3b82f6", "#0ea5e9", "#06b6d4", "#14b8a6"]
// //     },
// //     dark: {
// //       background: "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700",
// //       text: "text-gray-100",
// //       secondaryText: "text-gray-300",
// //       accent: "text-violet-400",
// //       button: "bg-violet-600 hover:bg-violet-700 text-white",
// //       card: "bg-gray-800",
// //       border: "border-gray-700",
// //       input: "bg-gray-700 border-gray-600",
// //       error: "bg-red-900/30 text-red-400 border-red-700",
// //       success: "bg-green-900/30 text-green-300 border-green-700",
// //       tableHeader: "bg-gray-700 text-gray-200",
// //       tableRow: "even:bg-gray-750",
// //       chartColors: ["#a78bfa", "#818cf8", "#60a5fa", "#38bdf8", "#22d3ee", "#2dd4bf"]
// //     }
// //   };

// //   const currentTheme = isDarkMode ? themes.dark : themes.light;

// //   // Fetch Returns History
// //   useEffect(() => {
// //     const fetchReturnsHistory = async () => {
// //       if (!storeId) return;
// //       setIsLoading(true);
// //       try {
// //         const response = await fetch(`http://localhost:5010/api/returns?storeId=${storeId}`, { headers: { storeId } });
// //         const data = await response.json();
// //         if (response.ok) {
// //           setReturnsHistory(data);
// //           calculateDashboardMetrics(data);
// //         } else {
// //           console.error("Failed to fetch returns history:", data.error);
// //         }
// //       } catch (err) {
// //         console.error("Error fetching returns history:", err);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };
// //     fetchReturnsHistory();
// //   }, [storeId]);

// //   // Calculate dashboard metrics
// //   const calculateDashboardMetrics = (returnsData) => {
// //     const totalReturns = returnsData.length;
// //     const totalRefunded = returnsData.reduce((sum, r) => sum + r.totalRefunded, 0);
// //     const averageReturnValue = totalReturns > 0 ? totalRefunded / totalReturns : 0;

// //     const returnsByReason = returnsData.reduce((acc, r) => {
// //       acc[r.reason] = (acc[r.reason] || 0) + 1;
// //       return acc;
// //     }, {});

// //     const returnsByProduct = returnsData.flatMap(r => r.items).reduce((acc, item) => {
// //       acc[item.barcode] = (acc[item.barcode] || 0) + item.quantity;
// //       return acc;
// //     }, {});

// //     const returnsByDay = returnsData.reduce((acc, r) => {
// //       const date = format(new Date(r.date), "yyyy-MM-dd");
// //       acc[date] = (acc[date] || 0) + r.totalRefunded;
// //       return acc;
// //     }, {});

// //     const returnsByCondition = returnsData.flatMap(r => r.items).reduce((acc, item) => {
// //       acc[item.condition || "resellable"] = (acc[item.condition || "resellable"] || 0) + item.quantity;
// //       return acc;
// //     }, {});

// //     const customerReturns = returnsData.reduce((acc, r) => {
// //       if (r.customerPhone) {
// //         acc[r.customerPhone] = (acc[r.customerPhone] || 0) + 1;
// //       }
// //       return acc;
// //     }, {});

// //     const topReturningCustomers = Object.entries(customerReturns)
// //       .map(([phone, count]) => ({ phone, count }))
// //       .sort((a, b) => b.count - a.count)
// //       .slice(0, 5);

// //     setDashboardMetrics({
// //       totalReturns,
// //       totalRefunded,
// //       averageReturnValue,
// //       returnRate: 9.8, // Example return rate
// //       returnsByReason,
// //       returnsByProduct,
// //       returnsByDay,
// //       returnsByCondition,
// //       topReturningCustomers
// //     });
// //   };

// //   // Handle search
// //   const handleSearch = async () => {
// //     if (!storeId) {
// //       setError("Store ID is missing. Please log in again.");
// //       return;
// //     }
// //     if (!searchInput.trim()) {
// //       setError("Please enter a search value.");
// //       return;
// //     }

// //     setIsLoading(true);
// //     setError(null);
// //     setSelectedSale(null);

// //     try {
// //       let url = "";
// //       if (searchType === "serialNumber") {
// //         const serialNumber = parseInt(searchInput);
// //         url = `http://localhost:5010/api/sale-by-serial?storeId=${storeId}&serialNumber=${serialNumber}`;
// //       } else if (searchType === "barcode") {
// //         url = `http://localhost:5010/api/sale-by-barcode?storeId=${storeId}&barcode=${searchInput}`;
// //       } else if (searchType === "customer_phone") {
// //         url = `http://localhost:5010/api/sale-by-phone?storeId=${storeId}&phone=${searchInput}`;
// //       }

// //       const response = await fetch(url, { headers: { storeId } });
// //       const data = await response.json();
// //       if (!response.ok) throw new Error(data.error || "Failed to fetch sale");

// //       if (!data.sale) {
// //         setError(`No sale found with this ${searchType}.`);
// //       } else {
// //         setSelectedSale(data.sale);
// //         setSuccess("Sale found successfully!");
// //         setShowNotification(true);
// //         setTimeout(() => setShowNotification(false), 3000);
// //       }
// //     } catch (err) {
// //       setError("Error searching: " + err.message);
// //       console.error("Search error:", err);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   // Handle item selection
// //   const handleItemSelection = (product, quantity, condition) => {
// //     setReturnItems((prev) => {
// //       const existing = prev.find((item) => item.product.barcode === product.barcode);
// //       if (existing) {
// //         return prev.map((item) =>
// //           item.product.barcode === product.barcode
// //             ? { ...item, quantity: Math.min(quantity, product.quantity), condition: condition || item.condition }
// //             : item
// //         );
// //       }
// //       return [...prev, { product, quantity: Math.min(quantity, product.quantity), condition: condition || returnCondition }];
// //     });
// //   };

// //   // Handle submit return
// //   const handleSubmitReturn = async () => {
// //     if (!selectedSale || returnItems.length === 0 || !returnReason) {
// //       setError("Please select a sale, items to return, and a reason.");
// //       return;
// //     }

// //     setIsLoading(true);
// //     setError(null);
// //     setSuccess(null);

// //     const returnData = {
// //       storeId,
// //       serialNumber: selectedSale.serialNumber,
// //       customerPhone: selectedSale.customer_phone,
// //       items: returnItems.map((item) => ({
// //         barcode: item.product.barcode,
// //         productName: item.product.name,
// //         quantity: item.quantity,
// //         condition: item.condition,
// //         unitPrice: item.product.total_price / item.product.quantity
// //       })),
// //       reason: returnReason,
// //       notes: returnNotes,
// //       refundOption,
// //       date: new Date().toISOString(),
// //       totalRefunded: returnItems.reduce((sum, item) => sum + (item.quantity * (item.product.total_price / item.product.quantity)), 0)
// //     };

// //     try {
// //       const response = await fetch("http://localhost:5010/api/returns", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json", storeId },
// //         body: JSON.stringify(returnData),
// //       });
// //       const result = await response.json();
// //       if (!response.ok) throw new Error(result.error || "Failed to process return");

// //       // Update inventory
// //       for (const item of returnItems) {
// //         if (item.condition === "resellable") {
// //           await fetch(`http://localhost:5000/products/restock-by-barcode?storeId=${storeId}&barcode=${item.product.barcode}`, {
// //             method: "POST",
// //             headers: { "Content-Type": "application/json" },
// //             body: JSON.stringify({ quantity: item.quantity }),
// //           });
// //         } else {
// //           await fetch(`http://localhost:5000/damage-items?storeId=${storeId}`, {
// //             method: "POST",
// //             headers: { "Content-Type": "application/json" },
// //             body: JSON.stringify({ barcode: item.product.barcode, quantity: item.quantity, reason: returnReason }),
// //           });
// //         }
// //       }

// //       // Refresh returns history
// //       const historyResponse = await fetch(`http://localhost:5010/api/returns?storeId=${storeId}`, { headers: { storeId } });
// //       const historyData = await historyResponse.json();
// //       if (historyResponse.ok) {
// //         setReturnsHistory(historyData);
// //         calculateDashboardMetrics(historyData);
// //       }

// //       setSuccess("Return processed successfully!");
// //       setShowNotification(true);
// //       setTimeout(() => {
// //         setShowNotification(false);
// //         setSearchInput("");
// //         setSelectedSale(null);
// //         setReturnItems([]);
// //         setReturnReason("");
// //         setReturnNotes("");
// //         setRefundOption("original");
// //       }, 3000);
// //     } catch (err) {
// //       setError("Error processing return: " + err.message);
// //       console.error("Submit error:", err);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   // Generate receipt
// //   const generateReceipt = (returnData) => {
// //     const receiptWindow = window.open('', '_blank', 'width=400,height=600');
// //     if (receiptWindow) {
// //       receiptWindow.document.write(`
// //         <html>
// //           <head>
// //             <title>Return Receipt</title>
// //             <style>
// //               body { font-family: Arial, sans-serif; margin: 20px; }
// //               .header { text-align: center; margin-bottom: 20px; }
// //               .section { margin-bottom: 15px; }
// //               .item { display: flex; justify-content: space-between; margin: 5px 0; }
// //               .total { font-weight: bold; border-top: 1px solid #000; padding-top: 10px; }
// //               .footer { margin-top: 30px; font-size: 0.8em; text-align: center; }
// //             </style>
// //           </head>
// //           <body>
// //             <div class="header">
// //               <h2>Return Receipt</h2>
// //               <p>Return ID: ${returnData.returnId}</p>
// //               <p>Date: ${new Date(returnData.date).toLocaleString()}</p>
// //             </div>
// //             <div class="section">
// //               <h3>Customer Information</h3>
// //               <p>Phone: ${returnData.customerPhone || 'N/A'}</p>
// //               <p>Original Sale: #${returnData.serialNumber}</p>
// //             </div>
// //             <div class="section">
// //               <h3>Returned Items</h3>
// //               ${returnData.items.map(item => `
// //                 <div class="item">
// //                   <span>${item.productName} (${item.quantity})</span>
// //                   <span>$${(item.unitPrice * item.quantity).toFixed(2)}</span>
// //                 </div>
// //               `).join('')}
// //               <div class="total">
// //                 <div class="item">
// //                   <span>Total Refund:</span>
// //                   <span>$${returnData.totalRefunded.toFixed(2)}</span>
// //                 </div>
// //               </div>
// //             </div>
// //             <div class="section">
// //               <h3>Return Details</h3>
// //               <p>Reason: ${returnData.reason}</p>
// //               <p>Refund Method: ${returnData.refundOption}</p>
// //               ${returnData.notes ? `<p>Notes: ${returnData.notes}</p>` : ''}
// //             </div>
// //             <div class="footer">
// //               <p>Thank you for shopping with us!</p>
// //             </div>
// //           </body>
// //         </html>
// //       `);
// //       receiptWindow.document.close();
// //       receiptWindow.print();
// //     }
// //   };

// //   // Handle export CSV
// //   const handleExportCSV = () => {
// //     const csvContent = [
// //       ["Return ID", "Serial Number", "Date", "Reason", "Total Refunded", "Refund Option", "Items", "Condition", "Notes"],
// //       ...filteredReturns.map((r) => [
// //         r.returnId,
// //         r.serialNumber,
// //         new Date(r.date).toLocaleString(),
// //         r.reason,
// //         r.totalRefunded.toFixed(2),
// //         r.refundOption,
// //         r.items.map((i) => `${i.productName || i.barcode} (${i.quantity})`).join("; "),
// //         r.items.map((i) => i.condition).join("; "),
// //         r.notes || ""
// //       ]),
// //     ]
// //       .map((row) => row.join(","))
// //       .join("\n");
// //     const blob = new Blob([csvContent], { type: "text/csv" });
// //     const url = window.URL.createObjectURL(blob);
// //     const a = document.createElement("a");
// //     a.href = url;
// //     a.download = `returns_history_${format(new Date(), "yyyy-MM-dd")}.csv`;
// //     a.click();
// //   };

// //   // Handle sort
// //   const handleSort = (key) => {
// //     setSortConfig(prevConfig => {
// //       if (prevConfig.key === key) {
// //         return { key, direction: prevConfig.direction === "asc" ? "desc" : "asc" };
// //       }
// //       return { key, direction: "asc" };
// //     });
// //   };

// //   // Filter returns based on criteria
// //   const filteredReturns = useMemo(() => {
// //     let filtered = [...returnsHistory];
    
// //     // Filter by date
// //     if (dateFilter === "today") {
// //       const today = format(new Date(), "yyyy-MM-dd");
// //       filtered = filtered.filter(r => r.date.startsWith(today));
// //     } else if (dateFilter === "week") {
// //       const weekAgo = subDays(new Date(), 7);
// //       filtered = filtered.filter(r => new Date(r.date) >= weekAgo);
// //     } else if (dateFilter === "month") {
// //       const monthAgo = subDays(new Date(), 30);
// //       filtered = filtered.filter(r => new Date(r.date) >= monthAgo);
// //     } else if (dateFilter === "custom") {
// //       filtered = filtered.filter(r => {
// //         const date = new Date(r.date);
// //         return isWithinInterval(date, {
// //           start: new Date(customDateRange.start),
// //           end: new Date(`${customDateRange.end}T23:59:59`)
// //         });
// //       });
// //     }
    
// //     // Filter by reason
// //     if (reasonFilter !== "all") {
// //       filtered = filtered.filter(r => r.reason === reasonFilter);
// //     }
    
// //     // Sort
// //     if (sortConfig.key) {
// //       filtered.sort((a, b) => {
// //         if (a[sortConfig.key] < b[sortConfig.key]) {
// //           return sortConfig.direction === "asc" ? -1 : 1;
// //         }
// //         if (a[sortConfig.key] > b[sortConfig.key]) {
// //           return sortConfig.direction === "asc" ? 1 : -1;
// //         }
// //         return 0;
// //       });
// //     }
    
// //     return filtered;
// //   }, [returnsHistory, dateFilter, customDateRange, reasonFilter, sortConfig]);

// //   // Prepare data for visualizations
// //   const today = format(new Date(), "yyyy-MM-dd");
  
// //   const returnsTrendData = useMemo(() => {
// //     const days = [];
// //     const lastDate = new Date();
// //     const firstDate = subDays(lastDate, 30);
    
// //     for (let i = 30; i >= 0; i--) {
// //       const date = format(subDays(lastDate, i), "yyyy-MM-dd");
// //       days.push({ date, amount: 0 });
// //     }
    
// //     filteredReturns.forEach(r => {
// //       const date = format(new Date(r.date), "yyyy-MM-dd");
// //       const dayIndex = days.findIndex(d => d.date === date);
// //       if (dayIndex !== -1) {
// //         days[dayIndex].amount += r.totalRefunded;
// //       }
// //     });
    
// //     return days;
// //   }, [filteredReturns]);

// //   const returnsByReasonData = useMemo(() => {
// //     const reasons = {};
// //     filteredReturns.forEach(r => {
// //       reasons[r.reason] = (reasons[r.reason] || 0) + 1;
// //     });
    
// //     return Object.entries(reasons).map(([name, value]) => ({
// //       name,
// //       value
// //     }));
// //   }, [filteredReturns]);

// //   const topReturnedItems = useMemo(() => {
// //     const items = {};
// //     filteredReturns.forEach(r => {
// //       r.items.forEach(item => {
// //         const key = item.productName || item.barcode;
// //         items[key] = (items[key] || 0) + item.quantity;
// //       });
// //     });
    
// //     return Object.entries(items)
// //       .map(([name, quantity]) => ({ name, quantity }))
// //       .sort((a, b) => b.quantity - a.quantity)
// //       .slice(0, 10);
// //   }, [filteredReturns]);

// //   const returnsByConditionData = useMemo(() => {
// //     const conditions = {};
// //     filteredReturns.forEach(r => {
// //       r.items.forEach(item => {
// //         const condition = item.condition || "resellable";
// //         conditions[condition] = (conditions[condition] || 0) + item.quantity;
// //       });
// //     });
    
// //     return Object.entries(conditions).map(([name, value]) => ({
// //       name: name.charAt(0).toUpperCase() + name.slice(1),
// //       value
// //     }));
// //   }, [filteredReturns]);

// //   const totalRefundsToday = useMemo(() => {
// //     return returnsHistory
// //       .filter(r => r.date.startsWith(today))
// //       .reduce((sum, r) => sum + r.totalRefunded, 0);
// //   }, [returnsHistory, today]);

// //   // Render returns history table
// //   const renderReturnsTable = () => {
// //     return (
// //       <div className="overflow-x-auto">
// //         <table className={`w-full border-collapse`}>
// //           <thead>
// //             <tr className={`${currentTheme.tableHeader} border-b ${currentTheme.border}`}>
// //               <th className="p-3 text-left" onClick={() => handleSort("returnId")}>
// //                 <div className="flex items-center space-x-1 cursor-pointer">
// //                   <span>Return ID</span>
// //                   {sortConfig.key === "returnId" && (
// //                     <ArrowUpDown size={16} className={sortConfig.direction === "asc" ? "transform rotate-180" : ""} />
// //                   )}
// //                 </div>
// //               </th>
// //               <th className="p-3 text-left">Serial No.</th>
// //               <th className="p-3 text-left" onClick={() => handleSort("date")}>
// //                 <div className="flex items-center space-x-1 cursor-pointer">
// //                   <span>Date</span>
// //                   {sortConfig.key === "date" && (
// //                     <ArrowUpDown size={16} className={sortConfig.direction === "asc" ? "transform rotate-180" : ""} />
// //                   )}
// //                 </div>
// //               </th>
// //               <th className="p-3 text-left" onClick={() => handleSort("reason")}>
// //                 <div className="flex items-center space-x-1 cursor-pointer">
// //                   <span>Reason</span>
// //                   {sortConfig.key === "reason" && (
// //                     <ArrowUpDown size={16} className={sortConfig.direction === "asc" ? "transform rotate-180" : ""} />
// //                   )}
// //                 </div>
// //               </th>
// //               <th className="p-3 text-left" onClick={() => handleSort("totalRefunded")}>
// //                 <div className="flex items-center space-x-1 cursor-pointer">
// //                   <span>Refunded</span>
// //                   {sortConfig.key === "totalRefunded" && (
// //                     <ArrowUpDown size={16} className={sortConfig.direction === "asc" ? "transform rotate-180" : ""} />
// //                   )}
// //                 </div>
// //               </th>
// //               <th className="p-3 text-center">Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             <AnimatePresence>
// //               {filteredReturns.map((r, index) => (
// //                 <React.Fragment key={r.returnId}>
// //                   <motion.tr
// //                     initial="hidden"
// //                     animate="visible"
// //                     custom={index}
// //                     variants={tableRowVariants}
// //                     className={`${currentTheme.tableRow} ${currentTheme.tableRowHover} cursor-pointer border-b ${currentTheme.border}`}
// //                     onClick={() => setActiveReturnId(activeReturnId === r.returnId ? null : r.returnId)}
// //                   >
// //                     <td className="p-3 font-medium">{r.returnId}</td>
// //                     <td className="p-3">{r.serialNumber}</td>
// //                     <td className="p-3">{new Date(r.date).toLocaleString()}</td>
// //                     <td className="p-3">
// //                       <span className={`px-2 py-1 rounded-full text-xs font-medium ${
// //                         r.reason === "defective" ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400" :
// //                         r.reason === "damaged_shipping" ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400" :
// //                         r.reason === "wrong_item" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400" :
// //                         "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
// //                       }`}>
// //                         {r.reason}
// //                       </span>
// //                     </td>
// //                     <td className="p-3 font-medium">${r.totalRefunded.toFixed(2)}</td>
// //                     <td className="p-3 text-center">
// //                       <div className="flex justify-center space-x-2">
// //                         <motion.button
// //                           variants={buttonVariants}
// //                           whileHover="hover"
// //                           whileTap="tap"
// //                           onClick={(e) => {
// //                             e.stopPropagation();
// //                             generateReceipt(r);
// //                           }}
// //                           className={`p-2 rounded-full ${currentTheme.secondaryButton} hover:bg-violet-100`}
// //                         >
// //                           <Printer size={16} />
// //                         </motion.button>
// //                         <motion.button
// //                           variants={buttonVariants}
// //                           whileHover="hover"
// //                           whileTap="tap"
// //                           onClick={(e) => {
// //                             e.stopPropagation();
// //                             setExpandedReturnDetails((prev) => ({
// //                               ...prev,
// //                               [r.returnId]: !prev[r.returnId],
// //                             }));
// //                           }}
// //                           className={`p-2 rounded-full ${currentTheme.secondaryButton} hover:bg-violet-100`}
// //                         >
// //                           {expandedReturnDetails[r.returnId] ? (
// //                             <ChevronUp size={16} />
// //                           ) : (
// //                             <ChevronDown size={16} />
// //                           )}
// //                         </motion.button>
// //                       </div>
// //                     </td>
// //                   </motion.tr>
// //                   {expandedReturnDetails[r.returnId] && (
// //                     <motion.tr
// //                       initial={{ opacity: 0, height: 0 }}
// //                       animate={{ opacity: 1, height: "auto" }}
// //                       exit={{ opacity: 0, height: 0 }}
// //                       className={`${currentTheme.tableRow} border-b ${currentTheme.border}`}
// //                     >
// //                       <td colSpan={6} className="p-3">
// //                         <div className="space-y-4">
// //                           <div className="grid grid-cols-2 gap-4">
// //                             <div>
// //                               <h4 className="font-medium">Customer Information</h4>
// //                               <p>Phone: {r.customerPhone || "N/A"}</p>
// //                               <p>Original Sale: #{r.serialNumber}</p>
// //                             </div>
// //                             <div>
// //                               <h4 className="font-medium">Refund Details</h4>
// //                               <p>Refund Method: {r.refundOption}</p>
// //                               <p>Total Refunded: ${r.totalRefunded.toFixed(2)}</p>
// //                             </div>
// //                           </div>
// //                           <div>
// //                             <h4 className="font-medium">Returned Items</h4>
// //                             <div className="space-y-2">
// //                               {r.items.map((item, idx) => (
// //                                 <div key={idx} className="flex justify-between">
// //                                   <span>
// //                                     {item.productName || item.barcode} (Qty: {item.quantity})
// //                                   </span>
// //                                   <span>${(item.unitPrice * item.quantity).toFixed(2)}</span>
// //                                 </div>
// //                               ))}
// //                             </div>
// //                           </div>
// //                           {r.notes && (
// //                             <div>
// //                               <h4 className="font-medium">Notes</h4>
// //                               <p>{r.notes}</p>
// //                             </div>
// //                           )}
// //                         </div>
// //                       </td>
// //                     </motion.tr>
// //                   )}
// //                 </React.Fragment>
// //               ))}
// //             </AnimatePresence>
// //           </tbody>
// //         </table>
// //       </div>
// //     );
// //   };

// //   // Render dashboard metrics
// //   const renderDashboardMetrics = () => {
// //     return (
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {/* Total Returns */}
// //         <motion.div
// //           variants={cardVariants}
// //           className={`${currentTheme.stats} p-6 rounded-lg shadow-sm`}
// //         >
// //           <div className="flex items-center space-x-4">
// //             <Package size={24} className={currentTheme.accent} />
// //             <div>
// //               <p className="text-sm text-gray-500 dark:text-gray-400">Total Returns</p>
// //               <p className="text-2xl font-bold">{dashboardMetrics.totalReturns}</p>
// //             </div>
// //           </div>
// //         </motion.div>

// //         {/* Total Refunded */}
// //         <motion.div
// //           variants={cardVariants}
// //           className={`${currentTheme.stats} p-6 rounded-lg shadow-sm`}
// //         >
// //           <div className="flex items-center space-x-4">
// //             <DollarSign size={24} className={currentTheme.accent} />
// //             <div>
// //               <p className="text-sm text-gray-500 dark:text-gray-400">Total Refunded</p>
// //               <p className="text-2xl font-bold">${dashboardMetrics.totalRefunded.toFixed(2)}</p>
// //             </div>
// //           </div>
// //         </motion.div>

// //         {/* Average Return Value */}
// //         <motion.div
// //           variants={cardVariants}
// //           className={`${currentTheme.stats} p-6 rounded-lg shadow-sm`}
// //         >
// //           <div className="flex items-center space-x-4">
// //             <Clipboard size={24} className={currentTheme.accent} />
// //             <div>
// //               <p className="text-sm text-gray-500 dark:text-gray-400">Avg. Return Value</p>
// //               <p className="text-2xl font-bold">${dashboardMetrics.averageReturnValue.toFixed(2)}</p>
// //             </div>
// //           </div>
// //         </motion.div>

// //         {/* Returns Trend Chart */}
// //         <motion.div
// //           variants={cardVariants}
// //           className={`${currentTheme.card} p-6 rounded-lg shadow-sm col-span-1 md:col-span-2 lg:col-span-3`}
// //         >
// //           <h3 className="text-lg font-medium mb-4">Returns Trend (Last 30 Days)</h3>
// //           <ResponsiveContainer width="100%" height={300}>
// //             <AreaChart data={returnsTrendData}>
// //               <CartesianGrid strokeDasharray="3 3" />
// //               <XAxis dataKey="date" />
// //               <YAxis />
// //               <Tooltip />
// //               <Legend />
// //               <Area
// //                 type="monotone"
// //                 dataKey="amount"
// //                 stroke={currentTheme.chartColors[0]}
// //                 fill={currentTheme.chartColors[0]}
// //                 fillOpacity={0.3}
// //               />
// //             </AreaChart>
// //           </ResponsiveContainer>
// //         </motion.div>

// //         {/* Returns by Reason */}
// //         <motion.div
// //           variants={cardVariants}
// //           className={`${currentTheme.card} p-6 rounded-lg shadow-sm`}
// //         >
// //           <h3 className="text-lg font-medium mb-4">Returns by Reason</h3>
// //           <ResponsiveContainer width="100%" height={300}>
// //             <PieChart>
// //               <Pie
// //                 data={returnsByReasonData}
// //                 dataKey="value"
// //                 nameKey="name"
// //                 cx="50%"
// //                 cy="50%"
// //                 outerRadius={100}
// //                 fill={currentTheme.chartColors[1]}
// //                 label
// //               >
// //                 {returnsByReasonData.map((entry, index) => (
// //                   <Cell
// //                     key={`cell-${index}`}
// //                     fill={currentTheme.chartColors[index % currentTheme.chartColors.length]}
// //                   />
// //                 ))}
// //               </Pie>
// //               <Tooltip />
// //               <Legend />
// //             </PieChart>
// //           </ResponsiveContainer>
// //         </motion.div>

// //         {/* Top Returned Items */}
// //         <motion.div
// //           variants={cardVariants}
// //           className={`${currentTheme.card} p-6 rounded-lg shadow-sm`}
// //         >
// //           <h3 className="text-lg font-medium mb-4">Top Returned Items</h3>
// //           <ResponsiveContainer width="100%" height={300}>
// //             <BarChart data={topReturnedItems}>
// //               <CartesianGrid strokeDasharray="3 3" />
// //               <XAxis dataKey="name" />
// //               <YAxis />
// //               <Tooltip />
// //               <Legend />
// //               <Bar
// //                 dataKey="quantity"
// //                 fill={currentTheme.chartColors[2]}
// //               />
// //             </BarChart>
// //           </ResponsiveContainer>
// //         </motion.div>
// //       </div>
// //     );
// //   };

// //   return (
// //     <div className={`${currentTheme.background} ${currentTheme.text} min-h-screen p-6 font-khata`}>
// //       {/* Theme Toggle Button */}
// //       <motion.button
// //         whileHover={{ scale: 1.1 }}
// //         onClick={toggleTheme}
// //         className={`fixed top-6 right-6 p-3 rounded-full ${currentTheme.card}`}
// //       >
// //         {isDarkMode ? <Sun className={currentTheme.accent} /> : <Moon className={currentTheme.accent} />}
// //       </motion.button>

// //       {/* Main Content */}
// //       <motion.div
// //         initial="initial"
// //         animate="animate"
// //         exit="exit"
// //         variants={pageTransition}
// //         className="max-w-7xl mx-auto space-y-8"
// //       >
// //         {/* Header */}
// //         <h1 className="text-4xl font-bold text-center mb-6">Returns Management</h1>

// //         {/* Tabs */}
// //         <div className="flex space-x-4 border-b ${currentTheme.border}">
// //           <button
// //             onClick={() => setActiveTab("process")}
// //             className={`px-4 py-2 rounded-t-lg ${
// //               activeTab === "process" ? currentTheme.activeTab : currentTheme.inactiveTab
// //             }`}
// //           >
// //             Process Return
// //           </button>
// //           <button
// //             onClick={() => setActiveTab("history")}
// //             className={`px-4 py-2 rounded-t-lg ${
// //               activeTab === "history" ? currentTheme.activeTab : currentTheme.inactiveTab
// //             }`}
// //           >
// //             Returns History
// //           </button>
// //           <button
// //             onClick={() => setActiveTab("dashboard")}
// //             className={`px-4 py-2 rounded-t-lg ${
// //               activeTab === "dashboard" ? currentTheme.activeTab : currentTheme.inactiveTab
// //             }`}
// //           >
// //             Dashboard
// //           </button>
// //         </div>

// //         {/* Tab Content */}
// //         <AnimatePresence mode="wait">
// //           {activeTab === "process" && (
// //             <motion.div
// //               key="process"
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: -20 }}
// //               className="space-y-8"
// //             >
// //               {/* Search Section */}
// //               <div className={`${currentTheme.card} p-6 rounded-lg shadow-lg`}>
// //                 <div className="flex gap-4 items-center">
// //                   <Search className={currentTheme.accent} />
// //                   <select
// //                     value={searchType}
// //                     onChange={(e) => setSearchType(e.target.value)}
// //                     className={`${currentTheme.input} p-2 rounded`}
// //                   >
// //                     <option value="serialNumber">Serial Number</option>
// //                     <option value="barcode">Barcode</option>
// //                     <option value="customer_phone">Customer Phone</option>
// //                   </select>
// //                   <input
// //                     type="text"
// //                     value={searchInput}
// //                     onChange={(e) => setSearchInput(e.target.value)}
// //                     placeholder={`Enter ${searchType.replace("_", " ")}`}
// //                     className={`${currentTheme.input} w-full p-2 rounded`}
// //                   />
// //                   <button
// //                     onClick={handleSearch}
// //                     disabled={isLoading}
// //                     className={`${currentTheme.button} px-4 py-2 rounded`}
// //                   >
// //                     {isLoading ? "Searching..." : "Search"}
// //                   </button>
// //                 </div>
// //                 {error && (
// //                   <div className={`${currentTheme.error} mt-4 p-2 rounded flex gap-2`}>
// //                     <AlertCircle /> {error}
// //                   </div>
// //                 )}
// //               </div>

// //               {/* Return Form */}
// //               {selectedSale && (
// //                 <motion.div
// //                   initial={{ opacity: 0 }}
// //                   animate={{ opacity: 1 }}
// //                   className={`${currentTheme.card} p-6 rounded-lg shadow-lg`}
// //                 >
// //                   <h2 className="text-2xl font-semibold mb-4">
// //                     Process Return for Serial: {selectedSale.serialNumber}
// //                   </h2>
// //                   <div className="mb-4">
// //                     <p>Total Amount: ${selectedSale.total_amount}</p>
// //                     <p>Date: {selectedSale.date}</p>
// //                     {selectedSale.customer_phone && <p>Customer Phone: {selectedSale.customer_phone}</p>}
// //                   </div>

// //                   <div className="mb-4">
// //                     <h3 className="font-medium">Items to Return</h3>
// //                     {selectedSale.products.map((product) => (
// //                       <div key={product.barcode} className="flex gap-4 py-2">
// //                         <input
// //                           type="number"
// //                           min="0"
// //                           max={product.quantity}
// //                           value={returnItems.find((i) => i.product.barcode === product.barcode)?.quantity || 0}
// //                           onChange={(e) => handleItemSelection(product, parseInt(e.target.value))}
// //                           className={`${currentTheme.input} w-16 p-1 rounded`}
// //                         />
// //                         <span>
// //                           {product.name} (Qty: {product.quantity}, Price: $
// //                           {(product.total_price / product.quantity).toFixed(2)})
// //                         </span>
// //                       </div>
// //                     ))}
// //                   </div>

// //                   <div className="grid grid-cols-2 gap-4 mb-4">
// //                     <div>
// //                       <label className="block mb-1">Return Reason</label>
// //                       <select
// //                         value={returnReason}
// //                         onChange={(e) => setReturnReason(e.target.value)}
// //                         className={`${currentTheme.input} w-full p-2 rounded`}
// //                       >
// //                         <option value="">Select</option>
// //                         <option value="defective">Defective</option>
// //                         <option value="wrong_item">Wrong Item</option>
// //                         <option value="damaged_shipping">Damaged in Shipping</option>
// //                         <option value="changed_mind">Changed Mind</option>
// //                       </select>
// //                     </div>
// //                     <div>
// //                       <label className="block mb-1">Condition</label>
// //                       <select
// //                         value={returnCondition}
// //                         onChange={(e) => setReturnCondition(e.target.value)}
// //                         className={`${currentTheme.input} w-full p-2 rounded`}
// //                       >
// //                         <option value="resellable">Resellable</option>
// //                         <option value="damaged">Damaged</option>
// //                       </select>
// //                     </div>
// //                     <div>
// //                       <label className="block mb-1">Refund Option</label>
// //                       <select
// //                         value={refundOption}
// //                         onChange={(e) => setRefundOption(e.target.value)}
// //                         className={`${currentTheme.input} w-full p-2 rounded`}
// //                       >
// //                         <option value="original">Original Payment</option>
// //                         <option value="store_credit">Store Credit</option>
// //                         <option value="loyalty">Loyalty Points</option>
// //                         <option value="exchange">Exchange</option>
// //                       </select>
// //                     </div>
// //                   </div>

// //                   <div className="mb-4">
// //                     <label className="block mb-1">Notes</label>
// //                     <textarea
// //                       value={returnNotes}
// //                       onChange={(e) => setReturnNotes(e.target.value)}
// //                       className={`${currentTheme.input} w-full p-2 rounded`}
// //                       placeholder="Optional notes"
// //                     />
// //                   </div>

// //                   <button
// //                     onClick={handleSubmitReturn}
// //                     disabled={isLoading}
// //                     className={`${currentTheme.button} w-full py-2 rounded`}
// //                   >
// //                     {isLoading ? "Processing..." : "Submit Return"}
// //                   </button>

// //                   {success && (
// //                     <div className={`${currentTheme.success} mt-4 p-2 rounded flex gap-2`}>
// //                       <CheckCircle /> {success}
// //                     </div>
// //                   )}
// //                 </motion.div>
// //               )}
// //             </motion.div>
// //           )}

// //           {activeTab === "history" && (
// //             <motion.div
// //               key="history"
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: -20 }}
// //               className="space-y-8"
// //             >
// //               {/* Filters */}
// //               <div className={`${currentTheme.card} p-6 rounded-lg shadow-lg`}>
// //                 <div className="flex gap-4 items-center">
// //                   <Filter className={currentTheme.accent} />
// //                   <select
// //                     value={dateFilter}
// //                     onChange={(e) => setDateFilter(e.target.value)}
// //                     className={`${currentTheme.input} p-2 rounded`}
// //                   >
// //                     <option value="all">All Time</option>
// //                     <option value="today">Today</option>
// //                     <option value="week">Last 7 Days</option>
// //                     <option value="month">Last 30 Days</option>
// //                     <option value="custom">Custom Range</option>
// //                   </select>
// //                   {dateFilter === "custom" && (
// //                     <div className="flex gap-2">
// //                       <input
// //                         type="date"
// //                         value={customDateRange.start}
// //                         onChange={(e) =>
// //                           setCustomDateRange((prev) => ({ ...prev, start: e.target.value }))
// //                         }
// //                         className={`${currentTheme.input} p-2 rounded`}
// //                       />
// //                       <input
// //                         type="date"
// //                         value={customDateRange.end}
// //                         onChange={(e) =>
// //                           setCustomDateRange((prev) => ({ ...prev, end: e.target.value }))
// //                         }
// //                         className={`${currentTheme.input} p-2 rounded`}
// //                       />
// //                     </div>
// //                   )}
// //                   <select
// //                     value={reasonFilter}
// //                     onChange={(e) => setReasonFilter(e.target.value)}
// //                     className={`${currentTheme.input} p-2 rounded`}
// //                   >
// //                     <option value="all">All Reasons</option>
// //                     <option value="defective">Defective</option>
// //                     <option value="wrong_item">Wrong Item</option>
// //                     <option value="damaged_shipping">Damaged in Shipping</option>
// //                     <option value="changed_mind">Changed Mind</option>
// //                   </select>
// //                   <button
// //                     onClick={handleExportCSV}
// //                     className={`${currentTheme.button} px-4 py-2 rounded flex items-center gap-2`}
// //                   >
// //                     <Download /> Export CSV
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* Returns Table */}
// //               {renderReturnsTable()}
// //             </motion.div>
// //           )}

// //           {activeTab === "dashboard" && (
// //             <motion.div
// //               key="dashboard"
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: -20 }}
// //               className="space-y-8"
// //             >
// //               {renderDashboardMetrics()}
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default ReturnsManagement;
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Search,
//   AlertCircle,
//   CheckCircle,
//   Sun,
//   Moon,
//   History,
//   Download,
//   Filter,
// } from "lucide-react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";
// import "./ReturnsManagement.css";

// const ReturnsManagement = () => {
//   const [storeId] = useState(localStorage.getItem("storeId") || "STORE-1737889146-4514");
//   const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark");
//   const [searchInput, setSearchInput] = useState("");
//   const [searchType, setSearchType] = useState("serialNumber");
//   const [selectedSale, setSelectedSale] = useState(null);
//   const [returnItems, setReturnItems] = useState([]);
//   const [returnReason, setReturnReason] = useState("");
//   const [returnNotes, setReturnNotes] = useState("");
//   const [returnCondition, setReturnCondition] = useState("resellable");
//   const [refundOption, setRefundOption] = useState("original");
//   const [returnsHistory, setReturnsHistory] = useState([]);
//   const [dateFilter, setDateFilter] = useState("all");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   const themes = {
//     light: {
//       background: "bg-gradient-to-br from-gray-100 to-gray-200",
//       text: "text-gray-900",
//       secondaryText: "text-gray-600",
//       accent: "text-indigo-600",
//       button: "bg-indigo-600 hover:bg-indigo-700 text-white",
//       card: "bg-white",
//       border: "border-gray-200",
//       input: "bg-gray-50 border-gray-300",
//       error: "bg-red-50 text-red-600 border-red-200",
//       success: "bg-green-50 text-green-600 border-green-200",
//     },
//     dark: {
//       background: "bg-gradient-to-br from-gray-800 to-gray-900",
//       text: "text-gray-100",
//       secondaryText: "text-gray-400",
//       accent: "text-indigo-400",
//       button: "bg-indigo-500 hover:bg-indigo-600 text-white",
//       card: "bg-gray-800",
//       border: "border-gray-700",
//       input: "bg-gray-700 border-gray-600",
//       error: "bg-red-900/50 text-red-400 border-red-800",
//       success: "bg-green-900/50 text-green-400 border-green-800",
//     },
//   };

//   const currentTheme = isDarkMode ? themes.dark : themes.light;
//   const COLORS = ["#4f46e5", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

//   useEffect(() => {
//     const fetchReturnsHistory = async () => {
//       if (!storeId) {
//         setError("No store ID provided.");
//         return;
//       }
//       setIsLoading(true);
//       try {
//         const response = await fetch(`http://localhost:5010/api/returns?storeId=${storeId}`, {
//           headers: { storeId },
//         });
//         const data = await response.json();
//         console.log("Fetched returns history:", data);
//         if (response.ok) {
//           setReturnsHistory(Array.isArray(data) ? data : []);
//         } else {
//           setReturnsHistory([]);
//           setError("Failed to load returns history.");
//         }
//       } catch (err) {
//         console.error("Error fetching returns history:", err);
//         setReturnsHistory([]);
//         setError("Error connecting to server.");
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchReturnsHistory();
//   }, [storeId]);

//   const toggleTheme = () => {
//     setIsDarkMode((prev) => {
//       const newMode = !prev;
//       localStorage.setItem("theme", newMode ? "dark" : "light");
//       return newMode;
//     });
//   };

//   const handleSearch = async () => {
//     if (!storeId) {
//       setError("Store ID is missing. Please log in again.");
//       return;
//     }
//     if (!searchInput.trim()) {
//       setError("Please enter a search value.");
//       return;
//     }

//     setIsLoading(true);
//     setError(null);
//     setSelectedSale(null);

//     try {
//       let url = "";
//       if (searchType === "serialNumber") {
//         url = `http://localhost:5010/api/sale-by-serial?storeId=${storeId}&serialNumber=${parseInt(searchInput)}`;
//       } else if (searchType === "barcode") {
//         url = `http://localhost:5010/api/sale-by-barcode?storeId=${storeId}&barcode=${searchInput}`;
//       } else if (searchType === "customer_phone") {
//         url = `http://localhost:5010/api/sale-by-phone?storeId=${storeId}&phone=${searchInput}`;
//       }

//       const response = await fetch(url, { headers: { storeId } });
//       const data = await response.json();
//       if (!response.ok) throw new Error(data.error || "Failed to fetch sale");

//       if (!data.sale) {
//         setError(`No sale found with this ${searchType}.`);
//       } else {
//         setSelectedSale(data.sale);
//       }
//     } catch (err) {
//       setError("Error searching: " + err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleItemSelection = (product, quantity) => {
//     setReturnItems((prev) => {
//       const existing = prev.find((item) => item.product.barcode === product.barcode);
//       if (existing) {
//         return prev.map((item) =>
//           item.product.barcode === product.barcode ? { ...item, quantity: Math.min(quantity, product.quantity) } : item
//         );
//       }
//       return [...prev, { product, quantity: Math.min(quantity, product.quantity), condition: returnCondition }];
//     });
//   };

//   const handleSubmitReturn = async () => {
//     if (!selectedSale || returnItems.length === 0 || !returnReason) {
//       setError("Please select a sale, items to return, and a reason.");
//       return;
//     }

//     setIsLoading(true);
//     setError(null);
//     setSuccess(null);

//     const returnData = {
//       storeId,
//       serialNumber: selectedSale.serialNumber,
//       items: returnItems.map((item) => ({
//         barcode: item.product.barcode,
//         quantity: item.quantity,
//         condition: item.condition,
//       })),
//       reason: returnReason,
//       notes: returnNotes,
//       refundOption,
//       date: new Date().toISOString(),
//     };

//     try {
//       const response = await fetch("http://localhost:5010/api/returns", {
//         method: "POST",
//         headers: { "Content-Type": "application/json", storeId },
//         body: JSON.stringify(returnData),
//       });
//       const result = await response.json();
//       if (!response.ok) throw new Error(result.error || "Failed to process return");

//       for (const item of returnItems) {
//         if (item.condition === "resellable") {
//           await fetch(`http://localhost:5000/products/restock-by-barcode?storeId=${storeId}&barcode=${item.product.barcode}`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ quantity: item.quantity }),
//           });
//         } else {
//           await fetch(`http://localhost:5000/damage-items?storeId=${storeId}`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ barcode: item.product.barcode, quantity: item.quantity, reason: returnReason }),
//           });
//         }
//       }

//       const historyResponse = await fetch(`http://localhost:5010/api/returns?storeId=${storeId}`, { headers: { storeId } });
//       const historyData = await historyResponse.json();
//       if (historyResponse.ok) {
//         setReturnsHistory(Array.isArray(historyData) ? historyData : []);
//       } else {
//         setReturnsHistory([]);
//       }

//       setSuccess("Return processed successfully!");
//       setTimeout(() => {
//         setSearchInput("");
//         setSelectedSale(null);
//         setReturnItems([]);
//         setReturnReason("");
//         setReturnNotes("");
//         setRefundOption("original");
//       }, 2000);
//     } catch (err) {
//       setError("Error processing return: " + err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleExportCSV = () => {
//     const csvContent = [
//       ["Return ID", "Serial Number", "Date", "Reason", "Total Refunded", "Refund Option", "Items"],
//       ...returnsHistory.map((r) => [
//         r.returnId,
//         r.serialNumber,
//         new Date(r.date).toLocaleString(),
//         r.reason,
//         r.totalRefunded.toFixed(2),
//         r.refundOption,
//         r.items.map((i) => `${i.barcode} (${i.quantity})`).join(", "),
//       ]),
//     ]
//       .map((row) => row.join(","))
//       .join("\n");
//     const blob = new Blob([csvContent], { type: "text/csv" });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "returns_history.csv";
//     a.click();
//   };

//   // Data Preparation for Visualizations
//   const today = new Date().toISOString().split("T")[0];
//   const filteredReturns = Array.isArray(returnsHistory)
//     ? returnsHistory.filter((r) => {
//         if (dateFilter === "today") return r.date.startsWith(today);
//         if (dateFilter === "week") {
//           const weekAgo = new Date();
//           weekAgo.setDate(weekAgo.getDate() - 7);
//           return new Date(r.date) >= weekAgo;
//         }
//         return true;
//       })
//     : [];

//   const returnsTrendData = filteredReturns.reduce((acc, r) => {
//     const date = new Date(r.date).toLocaleDateString();
//     const existing = acc.find((d) => d.date === date);
//     const resellable = r.items.reduce((sum, i) => (i.condition === "resellable" ? sum + i.quantity : sum), 0);
//     const damaged = r.items.reduce((sum, i) => (i.condition === "damaged" ? sum + i.quantity : sum), 0);
//     if (existing) {
//       existing.total += r.totalRefunded;
//       existing.resellable += resellable;
//       existing.damaged += damaged;
//     } else {
//       acc.push({ date, total: r.totalRefunded, resellable, damaged });
//     }
//     return acc;
//   }, []);

//   const reasonsData = filteredReturns.reduce((acc, r) => {
//     const existing = acc.find((d) => d.name === r.reason);
//     if (existing) existing.value += r.totalRefunded;
//     else acc.push({ name: r.reason, value: r.totalRefunded });
//     return acc;
//   }, []);

//   const conditionsData = filteredReturns.reduce((acc, r) => {
//     const date = new Date(r.date).toLocaleDateString();
//     const existing = acc.find((d) => d.date === date);
//     const resellable = r.items.reduce((sum, i) => (i.condition === "resellable" ? sum + i.quantity : sum), 0);
//     const damaged = r.items.reduce((sum, i) => (i.condition === "damaged" ? sum + i.quantity : sum), 0);
//     if (existing) {
//       existing.resellable += resellable;
//       existing.damaged += damaged;
//     } else {
//       acc.push({ date, resellable, damaged });
//     }
//     return acc;
//   }, []);

//   const refundOptionsData = filteredReturns.reduce((acc, r) => {
//     const existing = acc.find((d) => d.name === r.refundOption);
//     if (existing) existing.value += r.totalRefunded;
//     else acc.push({ name: r.refundOption, value: r.totalRefunded });
//     return acc;
//   }, []);

//   const topReturnedItems = Array.isArray(filteredReturns)
//     ? filteredReturns
//         .flatMap((r) => (Array.isArray(r.items) ? r.items : []))
//         .reduce((acc, item) => {
//           const existing = acc.find((i) => i.barcode === item.barcode);
//           if (existing) existing.quantity += item.quantity;
//           else acc.push({ barcode: item.barcode, quantity: item.quantity });
//           return acc;
//         }, [])
//         .sort((a, b) => b.quantity - a.quantity)
//         .slice(0, 5)
//     : [];

//   const totalRefundsToday = filteredReturns
//     .filter((r) => r.date.startsWith(today))
//     .reduce((sum, r) => sum + r.totalRefunded, 0);

//   const mostCommonReason = reasonsData.length > 0 ? reasonsData.sort((a, b) => b.value - a.value)[0]?.name || "N/A" : "N/A";
//   const highestRefundDay = returnsTrendData.length > 0 ? returnsTrendData.sort((a, b) => b.total - a.total)[0]?.date || "N/A" : "N/A";

//   return (
//     <div className={`${currentTheme.background} ${currentTheme.text} min-h-screen p-6`}>
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         onClick={toggleTheme}
//         className={`fixed top-6 right-6 p-2 rounded-full ${currentTheme.card} shadow-md`}
//       >
//         {isDarkMode ? <Sun className={currentTheme.accent} /> : <Moon className={currentTheme.accent} />}
//       </motion.button>

//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-6xl mx-auto space-y-12">
//         <h1 className="text-4xl font-bold text-center mb-8">Returns Management</h1>

//         {/* Search and Form Section */}
//         <div className={`${currentTheme.card} p-6 rounded-xl shadow-lg`}>
//           <div className="flex gap-4 items-center">
//             <Search className={currentTheme.accent} />
//             <select
//               value={searchType}
//               onChange={(e) => setSearchType(e.target.value)}
//               className={`${currentTheme.input} p-2 rounded-md`}
//             >
//               <option value="serialNumber">Serial Number</option>
//               <option value="barcode">Barcode</option>
//               <option value="customer_phone">Customer Phone</option>
//             </select>
//             <input
//               type="text"
//               value={searchInput}
//               onChange={(e) => setSearchInput(e.target.value)}
//               placeholder={`Enter ${searchType.replace("_", " ")}`}
//               className={`${currentTheme.input} w-full p-2 rounded-md`}
//             />
//             <button
//               onClick={handleSearch}
//               disabled={isLoading}
//               className={`${currentTheme.button} px-4 py-2 rounded-md transition-all`}
//             >
//               {isLoading ? "Searching..." : "Search"}
//             </button>
//           </div>
//           {error && (
//             <div className={`${currentTheme.error} mt-4 p-2 rounded-md flex gap-2`}>
//               <AlertCircle /> {error}
//             </div>
//           )}
//         </div>

//         {selectedSale && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className={`${currentTheme.card} p-6 rounded-xl shadow-lg`}
//           >
//             <h2 className="text-2xl font-semibold mb-4">Process Return - Serial: {selectedSale.serialNumber}</h2>
//             <div className="mb-4">
//               <p>Total Amount: ${selectedSale.total_amount}</p>
//               <p>Date: {selectedSale.date}</p>
//               {selectedSale.customer_phone && <p>Customer Phone: {selectedSale.customer_phone}</p>}
//             </div>

//             <div className="mb-4">
//               <h3 className="font-medium">Items to Return</h3>
//               {selectedSale.products.map((product) => (
//                 <div key={product.barcode} className="flex gap-4 py-2">
//                   <input
//                     type="number"
//                     min="0"
//                     max={product.quantity}
//                     value={returnItems.find((i) => i.product.barcode === product.barcode)?.quantity || 0}
//                     onChange={(e) => handleItemSelection(product, parseInt(e.target.value))}
//                     className={`${currentTheme.input} w-16 p-1 rounded-md`}
//                   />
//                   <span>{product.name} (Qty: {product.quantity}, Price: ${product.total_price / product.quantity})</span>
//                 </div>
//               ))}
//             </div>

//             <div className="grid grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="block mb-1">Reason</label>
//                 <select
//                   value={returnReason}
//                   onChange={(e) => setReturnReason(e.target.value)}
//                   className={`${currentTheme.input} w-full p-2 rounded-md`}
//                 >
//                   <option value="">Select</option>
//                   <option value="defective">Defective</option>
//                   <option value="wrong_item">Wrong Item</option>
//                   <option value="damaged_shipping">Damaged in Shipping</option>
//                   <option value="changed_mind">Changed Mind</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block mb-1">Condition</label>
//                 <select
//                   value={returnCondition}
//                   onChange={(e) => setReturnCondition(e.target.value)}
//                   className={`${currentTheme.input} w-full p-2 rounded-md`}
//                 >
//                   <option value="resellable">Resellable</option>
//                   <option value="damaged">Damaged</option>
//                 </select>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="block mb-1">Refund Option</label>
//                 <select
//                   value={refundOption}
//                   onChange={(e) => setRefundOption(e.target.value)}
//                   className={`${currentTheme.input} w-full p-2 rounded-md`}
//                 >
//                   <option value="original">Original Payment</option>
//                   <option value="store_credit">Store Credit</option>
//                   <option value="loyalty">Loyalty Points</option>
//                   <option value="exchange">Exchange</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block mb-1">Notes</label>
//                 <textarea
//                   value={returnNotes}
//                   onChange={(e) => setReturnNotes(e.target.value)}
//                   className={`${currentTheme.input} w-full p-2 rounded-md`}
//                   placeholder="Optional"
//                 />
//               </div>
//             </div>

//             <button
//               onClick={handleSubmitReturn}
//               disabled={isLoading}
//               className={`${currentTheme.button} w-full py-2 rounded-md transition-all`}
//             >
//               {isLoading ? "Processing..." : "Submit Return"}
//             </button>

//             {success && (
//               <div className={`${currentTheme.success} mt-4 p-2 rounded-md flex gap-2`}>
//                 <CheckCircle /> {success}
//               </div>
//             )}
//           </motion.div>
//         )}

//         {/* Visualizations Section */}
//         <div className={`${currentTheme.card} p-6 rounded-xl shadow-lg`}>
//           <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
//             <Filter className={currentTheme.accent} /> Returns Insights
//           </h2>
//           <div className="flex justify-end mb-4">
//             <select
//               value={dateFilter}
//               onChange={(e) => setDateFilter(e.target.value)}
//               className={`${currentTheme.input} p-2 rounded-md`}
//             >
//               <option value="all">All Time</option>
//               <option value="today">Today</option>
//               <option value="week">Last 7 Days</option>
//             </select>
//           </div>

//           {filteredReturns.length === 0 ? (
//             <p className={currentTheme.secondaryText}>No data available for visualizations.</p>
//           ) : (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ staggerChildren: 0.2 }}
//               className="space-y-8"
//             >
//               <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
//                 <h3 className="font-medium mb-2">Returns Trend</h3>
//                 <LineChart width={700} height={300} data={returnsTrendData} className="mx-auto">
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="date" />
//                   <YAxis yAxisId="left" />
//                   <YAxis yAxisId="right" orientation="right" />
//                   <Tooltip />
//                   <Legend />
//                   <Line yAxisId="left" type="monotone" dataKey="total" stroke="#4f46e5" name="Total Refunded" />
//                   <Line yAxisId="right" type="monotone" dataKey="resellable" stroke="#10b981" name="Resellable Items" />
//                   <Line yAxisId="right" type="monotone" dataKey="damaged" stroke="#ef4444" name="Damaged Items" />
//                 </LineChart>
//               </motion.div>

//               <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
//                 <h3 className="font-medium mb-2">Return Reasons</h3>
//                 <PieChart width={400} height={300} className="mx-auto">
//                   <Pie
//                     data={reasonsData}
//                     cx="50%"
//                     cy="50%"
//                     outerRadius={100}
//                     dataKey="value"
//                     label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
//                   >
//                     {reasonsData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                   </Pie>
//                   <Tooltip />
//                 </PieChart>
//               </motion.div>

//               <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
//                 <h3 className="font-medium mb-2">Conditions Over Time</h3>
//                 <BarChart width={700} height={300} data={conditionsData} className="mx-auto">
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="date" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="resellable" stackId="a" fill="#10b981" />
//                   <Bar dataKey="damaged" stackId="a" fill="#ef4444" />
//                 </BarChart>
//               </motion.div>

//               <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
//                 <h3 className="font-medium mb-2">Refund Options</h3>
//                 <PieChart width={400} height={300} className="mx-auto">
//                   <Pie
//                     data={refundOptionsData}
//                     cx="50%"
//                     cy="50%"
//                     outerRadius={100}
//                     dataKey="value"
//                     label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
//                   >
//                     {refundOptionsData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                   </Pie>
//                   <Tooltip />
//                 </PieChart>
//               </motion.div>

//               <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
//                 <h3 className="font-medium mb-2">Top Returned Items</h3>
//                 <BarChart width={700} height={300} data={topReturnedItems} className="mx-auto">
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="barcode" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="quantity" fill={isDarkMode ? "#8b5cf6" : "#4f46e5"} />
//                 </BarChart>
//               </motion.div>
//             </motion.div>
//           )}
//         </div>

//         {/* History Section */}
//         <div className={`${currentTheme.card} p-6 rounded-xl shadow-lg`}>
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-semibold flex items-center gap-2">
//               <History className={currentTheme.accent} /> Returns History
//             </h2>
//             <div className="flex gap-4">
//               <select
//                 value={dateFilter}
//                 onChange={(e) => setDateFilter(e.target.value)}
//                 className={`${currentTheme.input} p-2 rounded-md`}
//               >
//                 <option value="all">All Time</option>
//                 <option value="today">Today</option>
//                 <option value="week">Last 7 Days</option>
//               </select>
//               <button
//                 onClick={handleExportCSV}
//                 className={`${currentTheme.button} px-4 py-2 rounded-md flex items-center gap-2 transition-all`}
//               >
//                 <Download /> Export CSV
//               </button>
//             </div>
//           </div>

//           {filteredReturns.length === 0 ? (
//             <p className={currentTheme.secondaryText}>No returns recorded for this period.</p>
//           ) : (
//             <motion.div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//               <AnimatePresence>
//                 {filteredReturns.map((r) => (
//                   <motion.div
//                     key={r.returnId}
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.95 }}
//                     transition={{ duration: 0.3 }}
//                     className={`${currentTheme.card} p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}
//                   >
//                     <div className="flex justify-between items-start">
//                       <h3 className="font-semibold text-lg">Return #{r.returnId}</h3>
//                       <span className={`text-sm ${currentTheme.secondaryText}`}>
//                         {new Date(r.date).toLocaleDateString()}
//                       </span>
//                     </div>
//                     <p className="mt-2">
//                       <strong>Serial:</strong> {r.serialNumber}
//                     </p>
//                     <p>
//                       <strong>Reason:</strong> {r.reason}
//                     </p>
//                     <p>
//                       <strong>Refunded:</strong> ${r.totalRefunded.toFixed(2)}
//                     </p>
//                     <p>
//                       <strong>Option:</strong> {r.refundOption}
//                     </p>
//                     <p className="mt-2">
//                       <strong>Items:</strong>{" "}
//                       {r.items.map((i) => `${i.barcode} (${i.quantity})`).join(", ")}
//                     </p>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </motion.div>
//           )}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ReturnsManagement;
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, AlertCircle, CheckCircle, Sun, Moon, History, Download, Filter,
  RefreshCcw, ArrowUpDown, PieChart as PieChartIcon, BarChart as BarChartIcon, TrendingUp,
  Calendar, User, Package, DollarSign, Clipboard, Archive, Printer, ChevronDown, ChevronUp
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, Area, AreaChart, PieChart, Pie, Cell, Sector
} from "recharts";
import { format, subDays, differenceInDays, isWithinInterval } from "date-fns";
import "./ReturnsManagement.css"; // Custom styles

const ReturnsManagement = () => {
  // Core state
  const [storeId] = useState(localStorage.getItem("storeId") || "STORE-1737889146-4514");
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const [activeTab, setActiveTab] = useState("process");
  const [searchInput, setSearchInput] = useState("");
  const [searchType, setSearchType] = useState("serialNumber");
  const [selectedSale, setSelectedSale] = useState(null);
  const [returnItems, setReturnItems] = useState([]);
  const [returnReason, setReturnReason] = useState("");
  const [returnNotes, setReturnNotes] = useState("");
  const [returnCondition, setReturnCondition] = useState("resellable");
  const [refundOption, setRefundOption] = useState("original");
  const [returnsHistory, setReturnsHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  // Advanced filters
  const [dateFilter, setDateFilter] = useState("all");
  const [customDateRange, setCustomDateRange] = useState({
    start: format(subDays(new Date(), 30), "yyyy-MM-dd"),
    end: format(new Date(), "yyyy-MM-dd")
  });
  const [reasonFilter, setReasonFilter] = useState("all");
  const [sortConfig, setSortConfig] = useState({ key: "date", direction: "desc" });
  const [activeReturnId, setActiveReturnId] = useState(null);
  const [expandedReturnDetails, setExpandedReturnDetails] = useState({});
  const [viewMode, setViewMode] = useState("table");
  const [activePieSegment, setActivePieSegment] = useState(null);

  // Dashboard metrics
  const [dashboardMetrics, setDashboardMetrics] = useState({
    totalReturns: 0,
    totalRefunded: 0,
    averageReturnValue: 0,
    returnRate: 0,
    returnsByReason: {},
    returnsByProduct: {},
    returnsByDay: {},
    returnsByCondition: {},
    topReturningCustomers: []
  });

  // Animation variants
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const buttonVariants = {
    hover: { scale: 1.03, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" },
    tap: { scale: 0.97 }
  };

  const tableRowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.05, duration: 0.3 } })
  };

  // Theme configuration
  const themes = {
    light: {
      background: "bg-gradient-to-r from-violet-50 via-indigo-50 to-blue-50",
      text: "text-gray-800",
      secondaryText: "text-gray-600",
      accent: "text-violet-600",
      button: "bg-violet-600 hover:bg-violet-700 text-white",
      card: "bg-white",
      border: "border-gray-200",
      input: "bg-violet-50 border-gray-300",
      error: "bg-red-50 text-red-600 border-red-200",
      success: "bg-green-50 text-green-600 border-green-200",
      tableHeader: "bg-violet-100 text-violet-800",
      tableRow: "even:bg-violet-50",
      chartColors: ["#8b5cf6", "#6366f1", "#3b82f6", "#0ea5e9", "#06b6d4", "#14b8a6"]
    },
    dark: {
      background: "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700",
      text: "text-gray-100",
      secondaryText: "text-gray-300",
      accent: "text-violet-400",
      button: "bg-violet-600 hover:bg-violet-700 text-white",
      card: "bg-gray-800",
      border: "border-gray-700",
      input: "bg-gray-700 border-gray-600",
      error: "bg-red-900/30 text-red-400 border-red-700",
      success: "bg-green-900/30 text-green-300 border-green-700",
      tableHeader: "bg-gray-700 text-gray-200",
      tableRow: "even:bg-gray-750",
      chartColors: ["#a78bfa", "#818cf8", "#60a5fa", "#38bdf8", "#22d3ee", "#2dd4bf"]
    }
  };

  const currentTheme = isDarkMode ? themes.dark : themes.light;

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  // Fetch Returns History
  useEffect(() => {
    const fetchReturnsHistory = async () => {
      if (!storeId) return;
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:5010/api/returns?storeId=${storeId}`, { headers: { storeId } });
        const data = await response.json();
        if (response.ok) {
          setReturnsHistory(data);
          calculateDashboardMetrics(data);
        } else {
          console.error("Failed to fetch returns history:", data.error);
        }
      } catch (err) {
        console.error("Error fetching returns history:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReturnsHistory();
  }, [storeId]);

  // Calculate dashboard metrics
  const calculateDashboardMetrics = (returnsData) => {
    const totalReturns = returnsData.length;
    const totalRefunded = returnsData.reduce((sum, r) => sum + r.totalRefunded, 0);
    const averageReturnValue = totalReturns > 0 ? totalRefunded / totalReturns : 0;

    const returnsByReason = returnsData.reduce((acc, r) => {
      acc[r.reason] = (acc[r.reason] || 0) + 1;
      return acc;
    }, {});

    const returnsByProduct = returnsData.flatMap(r => r.items).reduce((acc, item) => {
      acc[item.barcode] = (acc[item.barcode] || 0) + item.quantity;
      return acc;
    }, {});

    const returnsByDay = returnsData.reduce((acc, r) => {
      const date = format(new Date(r.date), "yyyy-MM-dd");
      acc[date] = (acc[date] || 0) + r.totalRefunded;
      return acc;
    }, {});

    const returnsByCondition = returnsData.flatMap(r => r.items).reduce((acc, item) => {
      acc[item.condition || "resellable"] = (acc[item.condition || "resellable"] || 0) + item.quantity;
      return acc;
    }, {});

    const customerReturns = returnsData.reduce((acc, r) => {
      if (r.customerPhone) {
        acc[r.customerPhone] = (acc[r.customerPhone] || 0) + 1;
      }
      return acc;
    }, {});

    const topReturningCustomers = Object.entries(customerReturns)
      .map(([phone, count]) => ({ phone, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    setDashboardMetrics({
      totalReturns,
      totalRefunded,
      averageReturnValue,
      returnRate: 9.8, // Example return rate
      returnsByReason,
      returnsByProduct,
      returnsByDay,
      returnsByCondition,
      topReturningCustomers
    });
  };

  // Handle search
  const handleSearch = async () => {
    if (!storeId) {
      setError("Store ID is missing. Please log in again.");
      return;
    }
    if (!searchInput.trim()) {
      setError("Please enter a search value.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSelectedSale(null);

    try {
      let url = "";
      if (searchType === "serialNumber") {
        const serialNumber = parseInt(searchInput);
        url = `http://localhost:5010/api/sale-by-serial?storeId=${storeId}&serialNumber=${serialNumber}`;
      } else if (searchType === "barcode") {
        url = `http://localhost:5010/api/sale-by-barcode?storeId=${storeId}&barcode=${searchInput}`;
      } else if (searchType === "customer_phone") {
        url = `http://localhost:5010/api/sale-by-phone?storeId=${storeId}&phone=${searchInput}`;
      }

      const response = await fetch(url, { headers: { storeId } });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to fetch sale");

      if (!data.sale) {
        setError(`No sale found with this ${searchType}.`);
      } else {
        setSelectedSale(data.sale);
        setSuccess("Sale found successfully!");
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      }
    } catch (err) {
      setError("Error searching: " + err.message);
      console.error("Search error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle item selection
  const handleItemSelection = (product, quantity, condition) => {
    setReturnItems((prev) => {
      const existing = prev.find((item) => item.product.barcode === product.barcode);
      if (existing) {
        return prev.map((item) =>
          item.product.barcode === product.barcode
            ? { ...item, quantity: Math.min(quantity, product.quantity), condition: condition || item.condition }
            : item
        );
      }
      return [...prev, { product, quantity: Math.min(quantity, product.quantity), condition: condition || returnCondition }];
    });
  };

  // Handle submit return
  const handleSubmitReturn = async () => {
    if (!selectedSale || returnItems.length === 0 || !returnReason) {
      setError("Please select a sale, items to return, and a reason.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(null);

    const returnData = {
      storeId,
      serialNumber: selectedSale.serialNumber,
      customerPhone: selectedSale.customer_phone,
      items: returnItems.map((item) => ({
        barcode: item.product.barcode,
        productName: item.product.name,
        quantity: item.quantity,
        condition: item.condition,
        unitPrice: item.product.total_price / item.product.quantity
      })),
      reason: returnReason,
      notes: returnNotes,
      refundOption,
      date: new Date().toISOString(),
      totalRefunded: returnItems.reduce((sum, item) => sum + (item.quantity * (item.product.total_price / item.product.quantity)), 0)
    };

    try {
      const response = await fetch("http://localhost:5010/api/returns", {
        method: "POST",
        headers: { "Content-Type": "application/json", storeId },
        body: JSON.stringify(returnData),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Failed to process return");

      // Update inventory
      for (const item of returnItems) {
        if (item.condition === "resellable") {
          await fetch(`http://localhost:5000/products/restock-by-barcode?storeId=${storeId}&barcode=${item.product.barcode}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ quantity: item.quantity }),
          });
        } else {
          await fetch(`http://localhost:5000/damage-items?storeId=${storeId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ barcode: item.product.barcode, quantity: item.quantity, reason: returnReason }),
          });
        }
      }

      // Refresh returns history
      const historyResponse = await fetch(`http://localhost:5010/api/returns?storeId=${storeId}`, { headers: { storeId } });
      const historyData = await historyResponse.json();
      if (historyResponse.ok) {
        setReturnsHistory(historyData);
        calculateDashboardMetrics(historyData);
      }

      setSuccess("Return processed successfully!");
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
        setSearchInput("");
        setSelectedSale(null);
        setReturnItems([]);
        setReturnReason("");
        setReturnNotes("");
        setRefundOption("original");
      }, 3000);
    } catch (err) {
      setError("Error processing return: " + err.message);
      console.error("Submit error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Generate receipt
  const generateReceipt = (returnData) => {
    const receiptWindow = window.open('', '_blank', 'width=400,height=600');
    if (receiptWindow) {
      receiptWindow.document.write(`
        <html>
          <head>
            <title>Return Receipt</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 20px; }
              .header { text-align: center; margin-bottom: 20px; }
              .section { margin-bottom: 15px; }
              .item { display: flex; justify-content: space-between; margin: 5px 0; }
              .total { font-weight: bold; border-top: 1px solid #000; padding-top: 10px; }
              .footer { margin-top: 30px; font-size: 0.8em; text-align: center; }
            </style>
          </head>
          <body>
            <div class="header">
              <h2>Return Receipt</h2>
              <p>Return ID: ${returnData.returnId}</p>
              <p>Date: ${new Date(returnData.date).toLocaleString()}</p>
            </div>
            <div class="section">
              <h3>Customer Information</h3>
              <p>Phone: ${returnData.customerPhone || 'N/A'}</p>
              <p>Original Sale: #${returnData.serialNumber}</p>
            </div>
            <div class="section">
              <h3>Returned Items</h3>
              ${returnData.items.map(item => `
                <div class="item">
                  <span>${item.productName} (${item.quantity})</span>
                  <span>$${(item.unitPrice * item.quantity).toFixed(2)}</span>
                </div>
              `).join('')}
              <div class="total">
                <div class="item">
                  <span>Total Refund:</span>
                  <span>$${returnData.totalRefunded.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div class="section">
              <h3>Return Details</h3>
              <p>Reason: ${returnData.reason}</p>
              <p>Refund Method: ${returnData.refundOption}</p>
              ${returnData.notes ? `<p>Notes: ${returnData.notes}</p>` : ''}
            </div>
            <div class="footer">
              <p>Thank you for shopping with us!</p>
            </div>
          </body>
        </html>
      `);
      receiptWindow.document.close();
      receiptWindow.print();
    }
  };

  // Handle export CSV
  const handleExportCSV = () => {
    const csvContent = [
      ["Return ID", "Serial Number", "Date", "Reason", "Total Refunded", "Refund Option", "Items", "Condition", "Notes"],
      ...filteredReturns.map((r) => [
        r.returnId,
        r.serialNumber,
        new Date(r.date).toLocaleString(),
        r.reason,
        r.totalRefunded.toFixed(2),
        r.refundOption,
        r.items.map((i) => `${i.productName || i.barcode} (${i.quantity})`).join("; "),
        r.items.map((i) => i.condition).join("; "),
        r.notes || ""
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `returns_history_${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
  };

  // Handle sort
  const handleSort = (key) => {
    setSortConfig(prevConfig => {
      if (prevConfig.key === key) {
        return { key, direction: prevConfig.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: "asc" };
    });
  };

  // Filter returns based on criteria
  const filteredReturns = useMemo(() => {
    let filtered = [...returnsHistory];
    
    // Filter by date
    if (dateFilter === "today") {
      const today = format(new Date(), "yyyy-MM-dd");
      filtered = filtered.filter(r => r.date.startsWith(today));
    } else if (dateFilter === "week") {
      const weekAgo = subDays(new Date(), 7);
      filtered = filtered.filter(r => new Date(r.date) >= weekAgo);
    } else if (dateFilter === "month") {
      const monthAgo = subDays(new Date(), 30);
      filtered = filtered.filter(r => new Date(r.date) >= monthAgo);
    } else if (dateFilter === "custom") {
      filtered = filtered.filter(r => {
        const date = new Date(r.date);
        return isWithinInterval(date, {
          start: new Date(customDateRange.start),
          end: new Date(`${customDateRange.end}T23:59:59`)
        });
      });
    }
    
    // Filter by reason
    if (reasonFilter !== "all") {
      filtered = filtered.filter(r => r.reason === reasonFilter);
    }
    
    // Sort
    if (sortConfig.key) {
      filtered.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    
    return filtered;
  }, [returnsHistory, dateFilter, customDateRange, reasonFilter, sortConfig]);

  // Prepare data for visualizations
  const today = format(new Date(), "yyyy-MM-dd");
  
  const returnsTrendData = useMemo(() => {
    const days = [];
    const lastDate = new Date();
    const firstDate = subDays(lastDate, 30);
    
    for (let i = 30; i >= 0; i--) {
      const date = format(subDays(lastDate, i), "yyyy-MM-dd");
      days.push({ date, amount: 0 });
    }
    
    filteredReturns.forEach(r => {
      const date = format(new Date(r.date), "yyyy-MM-dd");
      const dayIndex = days.findIndex(d => d.date === date);
      if (dayIndex !== -1) {
        days[dayIndex].amount += r.totalRefunded;
      }
    });
    
    return days;
  }, [filteredReturns]);

  const returnsByReasonData = useMemo(() => {
    const reasons = {};
    filteredReturns.forEach(r => {
      reasons[r.reason] = (reasons[r.reason] || 0) + 1;
    });
    
    return Object.entries(reasons).map(([name, value]) => ({
      name,
      value
    }));
  }, [filteredReturns]);

  const topReturnedItems = useMemo(() => {
    const items = {};
    filteredReturns.forEach(r => {
      r.items.forEach(item => {
        const key = item.productName || item.barcode;
        items[key] = (items[key] || 0) + item.quantity;
      });
    });
    
    return Object.entries(items)
      .map(([name, quantity]) => ({ name, quantity }))
      .sort((a, b) => b.quantity - a.quantity)
      .slice(0, 10);
  }, [filteredReturns]);

  const returnsByConditionData = useMemo(() => {
    const conditions = {};
    filteredReturns.forEach(r => {
      r.items.forEach(item => {
        const condition = item.condition || "resellable";
        conditions[condition] = (conditions[condition] || 0) + item.quantity;
      });
    });
    
    return Object.entries(conditions).map(([name, value]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      value
    }));
  }, [filteredReturns]);

  const totalRefundsToday = useMemo(() => {
    return returnsHistory
      .filter(r => r.date.startsWith(today))
      .reduce((sum, r) => sum + r.totalRefunded, 0);
  }, [returnsHistory, today]);

  // Render returns history table
  const renderReturnsTable = () => {
    return (
      <div className="overflow-x-auto">
        <table className={`w-full border-collapse`}>
          <thead>
            <tr className={`${currentTheme.tableHeader} border-b ${currentTheme.border}`}>
              <th className="p-3 text-left" onClick={() => handleSort("returnId")}>
                <div className="flex items-center space-x-1 cursor-pointer">
                  <span>Return ID</span>
                  {sortConfig.key === "returnId" && (
                    <ArrowUpDown size={16} className={sortConfig.direction === "asc" ? "transform rotate-180" : ""} />
                  )}
                </div>
              </th>
              <th className="p-3 text-left">Serial No.</th>
              <th className="p-3 text-left" onClick={() => handleSort("date")}>
                <div className="flex items-center space-x-1 cursor-pointer">
                  <span>Date</span>
                  {sortConfig.key === "date" && (
                    <ArrowUpDown size={16} className={sortConfig.direction === "asc" ? "transform rotate-180" : ""} />
                  )}
                </div>
              </th>
              <th className="p-3 text-left" onClick={() => handleSort("reason")}>
                <div className="flex items-center space-x-1 cursor-pointer">
                  <span>Reason</span>
                  {sortConfig.key === "reason" && (
                    <ArrowUpDown size={16} className={sortConfig.direction === "asc" ? "transform rotate-180" : ""} />
                  )}
                </div>
              </th>
              <th className="p-3 text-left" onClick={() => handleSort("totalRefunded")}>
                <div className="flex items-center space-x-1 cursor-pointer">
                  <span>Refunded</span>
                  {sortConfig.key === "totalRefunded" && (
                    <ArrowUpDown size={16} className={sortConfig.direction === "asc" ? "transform rotate-180" : ""} />
                  )}
                </div>
              </th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {filteredReturns.map((r, index) => (
                <React.Fragment key={r.returnId}>
                  <motion.tr
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    variants={tableRowVariants}
                    className={`${currentTheme.tableRow} ${currentTheme.tableRowHover} cursor-pointer border-b ${currentTheme.border}`}
                    onClick={() => setActiveReturnId(activeReturnId === r.returnId ? null : r.returnId)}
                  >
                    <td className="p-3 font-medium">{r.returnId}</td>
                    <td className="p-3">{r.serialNumber}</td>
                    <td className="p-3">{new Date(r.date).toLocaleString()}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        r.reason === "defective" ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400" :
                        r.reason === "damaged_shipping" ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400" :
                        r.reason === "wrong_item" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400" :
                        "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                      }`}>
                        {r.reason}
                      </span>
                    </td>
                    <td className="p-3 font-medium">${r.totalRefunded.toFixed(2)}</td>
                    <td className="p-3 text-center">
                      <div className="flex justify-center space-x-2">
                        <motion.button
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          onClick={(e) => {
                            e.stopPropagation();
                            generateReceipt(r);
                          }}
                          className={`p-2 rounded-full ${currentTheme.secondaryButton} hover:bg-violet-100`}
                        >
                          <Printer size={16} />
                        </motion.button>
                        <motion.button
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedReturnDetails((prev) => ({
                              ...prev,
                              [r.returnId]: !prev[r.returnId],
                            }));
                          }}
                          className={`p-2 rounded-full ${currentTheme.secondaryButton} hover:bg-violet-100`}
                        >
                          {expandedReturnDetails[r.returnId] ? (
                            <ChevronUp size={16} />
                          ) : (
                            <ChevronDown size={16} />
                          )}
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>
                  {expandedReturnDetails[r.returnId] && (
                    <motion.tr
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`${currentTheme.tableRow} border-b ${currentTheme.border}`}
                    >
                      <td colSpan={6} className="p-3">
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium">Customer Information</h4>
                              <p>Phone: {r.customerPhone || "N/A"}</p>
                              <p>Original Sale: #{r.serialNumber}</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Refund Details</h4>
                              <p>Refund Method: {r.refundOption}</p>
                              <p>Total Refunded: ${r.totalRefunded.toFixed(2)}</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium">Returned Items</h4>
                            <div className="space-y-2">
                              {r.items.map((item, idx) => (
                                <div key={idx} className="flex justify-between">
                                  <span>
                                    {item.productName || item.barcode} (Qty: {item.quantity})
                                  </span>
                                  <span>${(item.unitPrice * item.quantity).toFixed(2)}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          {r.notes && (
                            <div>
                              <h4 className="font-medium">Notes</h4>
                              <p>{r.notes}</p>
                            </div>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  )}
                </React.Fragment>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    );
  };

  // Render dashboard metrics
  const renderDashboardMetrics = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Returns */}
        <motion.div
          variants={cardVariants}
          className={`${currentTheme.stats} p-6 rounded-lg shadow-sm`}
        >
          <div className="flex items-center space-x-4">
            <Package size={24} className={currentTheme.accent} />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Returns</p>
              <p className="text-2xl font-bold">{dashboardMetrics.totalReturns}</p>
            </div>
          </div>
        </motion.div>

        {/* Total Refunded */}
        <motion.div
          variants={cardVariants}
          className={`${currentTheme.stats} p-6 rounded-lg shadow-sm`}
        >
          <div className="flex items-center space-x-4">
            <DollarSign size={24} className={currentTheme.accent} />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Refunded</p>
              <p className="text-2xl font-bold">${dashboardMetrics.totalRefunded.toFixed(2)}</p>
            </div>
          </div>
        </motion.div>

        {/* Average Return Value */}
        <motion.div
          variants={cardVariants}
          className={`${currentTheme.stats} p-6 rounded-lg shadow-sm`}
        >
          <div className="flex items-center space-x-4">
            <Clipboard size={24} className={currentTheme.accent} />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Avg. Return Value</p>
              <p className="text-2xl font-bold">${dashboardMetrics.averageReturnValue.toFixed(2)}</p>
            </div>
          </div>
        </motion.div>

        {/* Returns Trend Chart */}
        <motion.div
          variants={cardVariants}
          className={`${currentTheme.card} p-6 rounded-lg shadow-sm col-span-1 md:col-span-2 lg:col-span-3`}
        >
          <h3 className="text-lg font-medium mb-4">Returns Trend (Last 30 Days)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={returnsTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="amount"
                stroke={currentTheme.chartColors[0]}
                fill={currentTheme.chartColors[0]}
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Returns by Reason */}
        <motion.div
          variants={cardVariants}
          className={`${currentTheme.card} p-6 rounded-lg shadow-sm`}
        >
          <h3 className="text-lg font-medium mb-4">Returns by Reason</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={returnsByReasonData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill={currentTheme.chartColors[1]}
                label
              >
                {returnsByReasonData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={currentTheme.chartColors[index % currentTheme.chartColors.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Top Returned Items */}
        <motion.div
          variants={cardVariants}
          className={`${currentTheme.card} p-6 rounded-lg shadow-sm`}
        >
          <h3 className="text-lg font-medium mb-4">Top Returned Items</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topReturnedItems}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="quantity"
                fill={currentTheme.chartColors[2]}
              />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    );
  };

  return (
    <div className={`${currentTheme.background} ${currentTheme.text} min-h-screen p-6 font-khata`}>
      {/* Theme Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={toggleTheme}
        className={`fixed top-6 right-6 p-3 rounded-full ${currentTheme.card}`}
      >
        {isDarkMode ? <Sun className={currentTheme.accent} /> : <Moon className={currentTheme.accent} />}
      </motion.button>

      {/* Main Content */}
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        className="max-w-7xl mx-auto space-y-8"
      >
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-6">Returns Management</h1>

        {/* Tabs */}
        <div className="flex space-x-4 border-b ${currentTheme.border}">
          <button
            onClick={() => setActiveTab("process")}
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === "process" ? currentTheme.activeTab : currentTheme.inactiveTab
            }`}
          >
            Process Return
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === "history" ? currentTheme.activeTab : currentTheme.inactiveTab
            }`}
          >
            Returns History
          </button>
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === "dashboard" ? currentTheme.activeTab : currentTheme.inactiveTab
            }`}
          >
            Dashboard
          </button>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "process" && (
            <motion.div
              key="process"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Search Section */}
              <div className={`${currentTheme.card} p-6 rounded-lg shadow-lg`}>
                <div className="flex gap-4 items-center">
                  <Search className={currentTheme.accent} />
                  <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className={`${currentTheme.input} p-2 rounded`}
                  >
                    <option value="serialNumber">Serial Number</option>
                    <option value="barcode">Barcode</option>
                    <option value="customer_phone">Customer Phone</option>
                  </select>
                  <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder={`Enter ${searchType.replace("_", " ")}`}
                    className={`${currentTheme.input} w-full p-2 rounded`}
                  />
                  <button
                    onClick={handleSearch}
                    disabled={isLoading}
                    className={`${currentTheme.button} px-4 py-2 rounded`}
                  >
                    {isLoading ? "Searching..." : "Search"}
                  </button>
                </div>
                {error && (
                  <div className={`${currentTheme.error} mt-4 p-2 rounded flex gap-2`}>
                    <AlertCircle /> {error}
                  </div>
                )}
              </div>

              {/* Return Form */}
              {selectedSale && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`${currentTheme.card} p-6 rounded-lg shadow-lg`}
                >
                  <h2 className="text-2xl font-semibold mb-4">
                    Process Return for Serial: {selectedSale.serialNumber}
                  </h2>
                  <div className="mb-4">
                    <p>Total Amount: ${selectedSale.total_amount}</p>
                    <p>Date: {selectedSale.date}</p>
                    {selectedSale.customer_phone && <p>Customer Phone: {selectedSale.customer_phone}</p>}
                  </div>

                  <div className="mb-4">
                    <h3 className="font-medium">Items to Return</h3>
                    {selectedSale.products.map((product) => (
                      <div key={product.barcode} className="flex gap-4 py-2">
                        <input
                          type="number"
                          min="0"
                          max={product.quantity}
                          value={returnItems.find((i) => i.product.barcode === product.barcode)?.quantity || 0}
                          onChange={(e) => handleItemSelection(product, parseInt(e.target.value))}
                          className={`${currentTheme.input} w-16 p-1 rounded`}
                        />
                        <span>
                          {product.name} (Qty: {product.quantity}, Price: $
                          {(product.total_price / product.quantity).toFixed(2)})
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block mb-1">Return Reason</label>
                      <select
                        value={returnReason}
                        onChange={(e) => setReturnReason(e.target.value)}
                        className={`${currentTheme.input} w-full p-2 rounded`}
                      >
                        <option value="">Select</option>
                        <option value="defective">Defective</option>
                        <option value="wrong_item">Wrong Item</option>
                        <option value="damaged_shipping">Damaged in Shipping</option>
                        <option value="changed_mind">Changed Mind</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-1">Condition</label>
                      <select
                        value={returnCondition}
                        onChange={(e) => setReturnCondition(e.target.value)}
                        className={`${currentTheme.input} w-full p-2 rounded`}
                      >
                        <option value="resellable">Resellable</option>
                        <option value="damaged">Damaged</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-1">Refund Option</label>
                      <select
                        value={refundOption}
                        onChange={(e) => setRefundOption(e.target.value)}
                        className={`${currentTheme.input} w-full p-2 rounded`}
                      >
                        <option value="original">Original Payment</option>
                        <option value="store_credit">Store Credit</option>
                        <option value="loyalty">Loyalty Points</option>
                        <option value="exchange">Exchange</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block mb-1">Notes</label>
                    <textarea
                      value={returnNotes}
                      onChange={(e) => setReturnNotes(e.target.value)}
                      className={`${currentTheme.input} w-full p-2 rounded`}
                      placeholder="Optional notes"
                    />
                  </div>

                  <button
                    onClick={handleSubmitReturn}
                    disabled={isLoading}
                    className={`${currentTheme.button} w-full py-2 rounded`}
                  >
                    {isLoading ? "Processing..." : "Submit Return"}
                  </button>

                  {success && (
                    <div className={`${currentTheme.success} mt-4 p-2 rounded flex gap-2`}>
                      <CheckCircle /> {success}
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>
          )}

          {activeTab === "history" && (
            <motion.div
              key="history"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Filters */}
              <div className={`${currentTheme.card} p-6 rounded-lg shadow-lg`}>
                <div className="flex gap-4 items-center">
                  <Filter className={currentTheme.accent} />
                  <select
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className={`${currentTheme.input} p-2 rounded`}
                  >
                    <option value="all">All Time</option>
                    <option value="today">Today</option>
                    <option value="week">Last 7 Days</option>
                    <option value="month">Last 30 Days</option>
                    <option value="custom">Custom Range</option>
                  </select>
                  {dateFilter === "custom" && (
                    <div className="flex gap-2">
                      <input
                        type="date"
                        value={customDateRange.start}
                        onChange={(e) =>
                          setCustomDateRange((prev) => ({ ...prev, start: e.target.value }))
                        }
                        className={`${currentTheme.input} p-2 rounded`}
                      />
                      <input
                        type="date"
                        value={customDateRange.end}
                        onChange={(e) =>
                          setCustomDateRange((prev) => ({ ...prev, end: e.target.value }))
                        }
                        className={`${currentTheme.input} p-2 rounded`}
                      />
                    </div>
                  )}
                  <select
                    value={reasonFilter}
                    onChange={(e) => setReasonFilter(e.target.value)}
                    className={`${currentTheme.input} p-2 rounded`}
                  >
                    <option value="all">All Reasons</option>
                    <option value="defective">Defective</option>
                    <option value="wrong_item">Wrong Item</option>
                    <option value="damaged_shipping">Damaged in Shipping</option>
                    <option value="changed_mind">Changed Mind</option>
                  </select>
                  <button
                    onClick={handleExportCSV}
                    className={`${currentTheme.button} px-4 py-2 rounded flex items-center gap-2`}
                  >
                    <Download /> Export CSV
                  </button>
                </div>
              </div>

              {/* Returns Table */}
              {renderReturnsTable()}
            </motion.div>
          )}

          {activeTab === "dashboard" && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {renderDashboardMetrics()}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ReturnsManagement;