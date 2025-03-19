// // // // // // // // import React, { useState, useEffect } from "react";

// // // // // // // // const CustomerSegmentation = () => {
// // // // // // // //   const [customers, setCustomers] = useState([]);
// // // // // // // //   const [segment, setSegment] = useState("All");
// // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // //   const [error, setError] = useState(null);
// // // // // // // //   const [loyaltyFilter, setLoyaltyFilter] = useState(0); // New state for loyalty points filter
// // // // // // // //   const [selectedCustomer, setSelectedCustomer] = useState(null); // New state for selected customer
// // // // // // // //   const [purchaseHistory, setPurchaseHistory] = useState([]); // New state for purchase history

// // // // // // // //   // Fetch customer data based on segment and loyalty points
// // // // // // // //   useEffect(() => {
// // // // // // // //     setLoading(true);
// // // // // // // //     fetch(`http://localhost:5008/api/customers?storeId=${localStorage.getItem("storeId")}&segment=${segment}&loyaltyPoints=${loyaltyFilter}`)
// // // // // // // //       .then((response) => {
// // // // // // // //         if (!response.ok) {
// // // // // // // //           throw new Error("Network response was not ok");
// // // // // // // //         }
// // // // // // // //         return response.json();
// // // // // // // //       })
// // // // // // // //       .then((data) => {
// // // // // // // //         setCustomers(data.customers);
// // // // // // // //         setLoading(false);
// // // // // // // //       })
// // // // // // // //       .catch((error) => {
// // // // // // // //         console.error("Error fetching data:", error);
// // // // // // // //         setError("Failed to load customer data. Please try again later.");
// // // // // // // //         setLoading(false);
// // // // // // // //       });
// // // // // // // //   }, [segment, loyaltyFilter]);

// // // // // // // //   // Fetch purchase history for a specific customer
// // // // // // // //   const fetchPurchaseHistory = (customerPhone) => {
// // // // // // // //     fetch(`http://localhost:5000/api/customers/${customerPhone}/purchase-history?storeId=${localStorage.getItem("storeId")}`)
// // // // // // // //       .then((response) => {
// // // // // // // //         if (!response.ok) {
// // // // // // // //           throw new Error("Network response was not ok");
// // // // // // // //         }
// // // // // // // //         return response.json();
// // // // // // // //       })
// // // // // // // //       .then((data) => {
// // // // // // // //         setPurchaseHistory(data.purchase_history);
// // // // // // // //         setSelectedCustomer(customerPhone);
// // // // // // // //       })
// // // // // // // //       .catch((error) => {
// // // // // // // //         console.error("Error fetching purchase history:", error);
// // // // // // // //         setError("Failed to load purchase history. Please try again later.");
// // // // // // // //       });
// // // // // // // //   };

// // // // // // // //   // Get segment color based on segment name
// // // // // // // //   const getSegmentColor = (segment) => {
// // // // // // // //     const colors = {
// // // // // // // //       "High-Spender": "#4CAF50",
// // // // // // // //       "Medium-Spender": "#2196F3",
// // // // // // // //       "Low-Spender": "#FFC107",
// // // // // // // //       "Occasional": "#9C27B0",
// // // // // // // //       "Loyal": "#E91E63",
// // // // // // // //       "New-Customer": "#FF5722"
// // // // // // // //     };
// // // // // // // //     return colors[segment] || "#757575";
// // // // // // // //   };

// // // // // // // //   // Format currency
// // // // // // // //   const formatCurrency = (amount) => {
// // // // // // // //     return new Intl.NumberFormat('en-US', {
// // // // // // // //       style: 'currency',
// // // // // // // //       currency: 'USD',
// // // // // // // //     }).format(amount);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div style={{
// // // // // // // //       fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
// // // // // // // //       maxWidth: "1200px",
// // // // // // // //       margin: "0 auto",
// // // // // // // //       padding: "20px",
// // // // // // // //       color: "#333"
// // // // // // // //     }}>
// // // // // // // //       <h2 style={{
// // // // // // // //         borderBottom: "2px solid #2196F3",
// // // // // // // //         paddingBottom: "10px",
// // // // // // // //         color: "#1976D2",
// // // // // // // //         fontSize: "28px",
// // // // // // // //         marginBottom: "25px"
// // // // // // // //       }}>Customer Segmentation Analysis</h2>

// // // // // // // //       {/* Filter Section */}
// // // // // // // //       <div style={{
// // // // // // // //         display: "flex",
// // // // // // // //         justifyContent: "space-between",
// // // // // // // //         alignItems: "center",
// // // // // // // //         marginBottom: "25px",
// // // // // // // //         backgroundColor: "#f9f9f9",
// // // // // // // //         padding: "15px",
// // // // // // // //         borderRadius: "8px",
// // // // // // // //         boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
// // // // // // // //       }}>
// // // // // // // //         <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
// // // // // // // //           <label style={{ fontWeight: "600", fontSize: "16px" }}>Select Segment: </label>
// // // // // // // //           <select
// // // // // // // //             value={segment}
// // // // // // // //             onChange={(e) => setSegment(e.target.value)}
// // // // // // // //             style={{
// // // // // // // //               padding: "10px 15px",
// // // // // // // //               borderRadius: "4px",
// // // // // // // //               border: "1px solid #ddd",
// // // // // // // //               backgroundColor: "#fff",
// // // // // // // //               fontSize: "15px",
// // // // // // // //               cursor: "pointer",
// // // // // // // //               outline: "none",
// // // // // // // //               boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             <option value="All">All Customers</option>
// // // // // // // //             <option value="High-Spender">High Spender</option>
// // // // // // // //             <option value="Medium-Spender">Medium Spender</option>
// // // // // // // //             <option value="Low-Spender">Low Spender</option>
// // // // // // // //             <option value="Occasional">Occasional</option>
// // // // // // // //             <option value="Loyal">Loyal</option>
// // // // // // // //             <option value="New-Customer">New Customer</option>
// // // // // // // //           </select>
// // // // // // // //         </div>

// // // // // // // //         <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
// // // // // // // //           <label style={{ fontWeight: "600", fontSize: "16px" }}>Loyalty Points: </label>
// // // // // // // //           <input
// // // // // // // //             type="number"
// // // // // // // //             value={loyaltyFilter}
// // // // // // // //             onChange={(e) => setLoyaltyFilter(e.target.value)}
// // // // // // // //             style={{
// // // // // // // //               padding: "10px 15px",
// // // // // // // //               borderRadius: "4px",
// // // // // // // //               border: "1px solid #ddd",
// // // // // // // //               backgroundColor: "#fff",
// // // // // // // //               fontSize: "15px",
// // // // // // // //               outline: "none",
// // // // // // // //               boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
// // // // // // // //             }}
// // // // // // // //           />
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Error Handling */}
// // // // // // // //       {error && (
// // // // // // // //         <div style={{
// // // // // // // //           backgroundColor: "#FFEBEE",
// // // // // // // //           color: "#C62828",
// // // // // // // //           padding: "15px",
// // // // // // // //           borderRadius: "4px",
// // // // // // // //           marginBottom: "20px",
// // // // // // // //           borderLeft: "4px solid #C62828"
// // // // // // // //         }}>
// // // // // // // //           {error}
// // // // // // // //         </div>
// // // // // // // //       )}

// // // // // // // //       {/* Loading State */}
// // // // // // // //       {loading ? (
// // // // // // // //         <div style={{
// // // // // // // //           textAlign: "center",
// // // // // // // //           padding: "30px",
// // // // // // // //           backgroundColor: "#f5f5f5",
// // // // // // // //           borderRadius: "8px"
// // // // // // // //         }}>
// // // // // // // //           <p style={{ fontSize: "16px", color: "#555" }}>Loading customer data...</p>
// // // // // // // //         </div>
// // // // // // // //       ) : (
// // // // // // // //         <div style={{
// // // // // // // //           overflowX: "auto",
// // // // // // // //           boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
// // // // // // // //           borderRadius: "8px"
// // // // // // // //         }}>
// // // // // // // //           <table style={{
// // // // // // // //             width: "100%",
// // // // // // // //             borderCollapse: "collapse",
// // // // // // // //             textAlign: "left",
// // // // // // // //             overflow: "hidden"
// // // // // // // //           }}>
// // // // // // // //             <thead>
// // // // // // // //               <tr style={{ backgroundColor: "#1976D2", color: "white" }}>
// // // // // // // //                 <th style={{ padding: "15px", borderBottom: "1px solid #ddd", fontSize: "16px" }}>Customer Name</th>
// // // // // // // //                 <th style={{ padding: "15px", borderBottom: "1px solid #ddd", fontSize: "16px" }}>Email</th>
// // // // // // // //                 <th style={{ padding: "15px", borderBottom: "1px solid #ddd", fontSize: "16px", textAlign: "right" }}>Total Spent</th>
// // // // // // // //                 <th style={{ padding: "15px", borderBottom: "1px solid #ddd", fontSize: "16px" }}>Segment</th>
// // // // // // // //                 <th style={{ padding: "15px", borderBottom: "1px solid #ddd", fontSize: "16px" }}>Loyalty Points</th>
// // // // // // // //                 <th style={{ padding: "15px", borderBottom: "1px solid #ddd", fontSize: "16px" }}>Actions</th>
// // // // // // // //               </tr>
// // // // // // // //             </thead>
// // // // // // // //             <tbody>
// // // // // // // //               {customers.length > 0 ? (
// // // // // // // //                 customers.map((customer, index) => (
// // // // // // // //                   <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff" }}>
// // // // // // // //                     <td style={{ padding: "12px 15px", borderBottom: "1px solid #ddd", fontWeight: "500" }}>{customer.name}</td>
// // // // // // // //                     <td style={{ padding: "12px 15px", borderBottom: "1px solid #ddd", color: "#444" }}>{customer.email}</td>
// // // // // // // //                     <td style={{ padding: "12px 15px", borderBottom: "1px solid #ddd", textAlign: "right", fontWeight: "600" }}>{formatCurrency(customer.total_spent)}</td>
// // // // // // // //                     <td style={{ padding: "12px 15px", borderBottom: "1px solid #ddd" }}>
// // // // // // // //                       <span style={{
// // // // // // // //                         backgroundColor: getSegmentColor(customer.segment),
// // // // // // // //                         color: "white",
// // // // // // // //                         padding: "5px 10px",
// // // // // // // //                         borderRadius: "4px",
// // // // // // // //                         fontSize: "14px",
// // // // // // // //                         display: "inline-block"
// // // // // // // //                       }}>
// // // // // // // //                         {customer.segment}
// // // // // // // //                       </span>
// // // // // // // //                     </td>
// // // // // // // //                     <td style={{ padding: "12px 15px", borderBottom: "1px solid #ddd" }}>{customer.loyaltyPoints}</td>
// // // // // // // //                     <td style={{ padding: "12px 15px", borderBottom: "1px solid #ddd" }}>
// // // // // // // //                       <button
// // // // // // // //                         onClick={() => fetchPurchaseHistory(customer.phone)}
// // // // // // // //                         style={{
// // // // // // // //                           backgroundColor: "#2196F3",
// // // // // // // //                           color: "white",
// // // // // // // //                           padding: "5px 10px",
// // // // // // // //                           borderRadius: "4px",
// // // // // // // //                           border: "none",
// // // // // // // //                           cursor: "pointer"
// // // // // // // //                         }}
// // // // // // // //                       >
// // // // // // // //                         View History
// // // // // // // //                       </button>
// // // // // // // //                     </td>
// // // // // // // //                   </tr>
// // // // // // // //                 ))
// // // // // // // //               ) : (
// // // // // // // //                 <tr>
// // // // // // // //                   <td colSpan="6" style={{ padding: "25px", textAlign: "center", color: "#666", backgroundColor: "#f5f5f5" }}>
// // // // // // // //                     No customer data available for this segment
// // // // // // // //                   </td>
// // // // // // // //                 </tr>
// // // // // // // //               )}
// // // // // // // //             </tbody>
// // // // // // // //           </table>
// // // // // // // //         </div>
// // // // // // // //       )}

// // // // // // // //       {/* Purchase History Section */}
// // // // // // // //       {selectedCustomer && (
// // // // // // // //         <div style={{ marginTop: "25px" }}>
// // // // // // // //           <h3 style={{ color: "#1976D2", fontSize: "22px", marginBottom: "15px" }}>Purchase History for {selectedCustomer}</h3>
// // // // // // // //           {purchaseHistory.length > 0 ? (
// // // // // // // //             <ul style={{ listStyle: "none", padding: "0" }}>
// // // // // // // //               {purchaseHistory.map((purchase, index) => (
// // // // // // // //                 <li key={index} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff", padding: "10px", borderRadius: "4px", marginBottom: "10px" }}>
// // // // // // // //                   <p><strong>Date:</strong> {purchase.date}</p>
// // // // // // // //                   <p><strong>Total Amount:</strong> {formatCurrency(purchase.total_amount)}</p>
// // // // // // // //                   <p><strong>Products:</strong> {purchase.products.map((product) => product.name).join(", ")}</p>
// // // // // // // //                 </li>
// // // // // // // //               ))}
// // // // // // // //             </ul>
// // // // // // // //           ) : (
// // // // // // // //             <p style={{ color: "#666" }}>No purchase history found for this customer.</p>
// // // // // // // //           )}
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default CustomerSegmentation;
// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import { Chart } from "react-chartjs-2";
// // // // // // // import { CSVLink } from "react-csv";
// // // // // // // import "chart.js/auto";

// // // // // // // const CustomerSegmentation = () => {
// // // // // // //   const [customers, setCustomers] = useState([]);
// // // // // // //   const [segment, setSegment] = useState("All");
// // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // //   const [error, setError] = useState(null);
// // // // // // //   const [loyaltyFilter, setLoyaltyFilter] = useState(0);
// // // // // // //   const [selectedCustomer, setSelectedCustomer] = useState(null);
// // // // // // //   const [purchaseHistory, setPurchaseHistory] = useState([]);
// // // // // // //   const [dateRange, setDateRange] = useState({ start: "", end: "" });
// // // // // // //   const [spendingFilter, setSpendingFilter] = useState({ min: 0, max: Infinity });
// // // // // // //   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
// // // // // // //   const [chartData, setChartData] = useState(null);
// // // // // // //   const [customerStats, setCustomerStats] = useState({});

// // // // // // //   // Fetch customer data with enhanced filtering
// // // // // // //   useEffect(() => {
// // // // // // //     const fetchCustomers = async () => {
// // // // // // //       setLoading(true);
// // // // // // //       try {
// // // // // // //         const params = new URLSearchParams({
// // // // // // //           storeId: localStorage.getItem("storeId"),
// // // // // // //           segment,
// // // // // // //           loyaltyPoints: loyaltyFilter,
// // // // // // //           ...(dateRange.start && { startDate: dateRange.start }),
// // // // // // //           ...(dateRange.end && { endDate: dateRange.end })
// // // // // // //         });

// // // // // // //         const response = await fetch(`http://localhost:5008/api/customers?${params}`);
// // // // // // //         if (!response.ok) throw new Error("Failed to fetch customers");
// // // // // // //         const data = await response.json();
        
// // // // // // //         // Process customer data with purchase history
// // // // // // //         const enrichedCustomers = await Promise.all(
// // // // // // //           data.customers.map(async (customer) => {
// // // // // // //             const history = await fetchPurchaseHistory(customer.phone, true);
// // // // // // //             return { ...customer, purchaseHistory: history };
// // // // // // //           })
// // // // // // //         );

// // // // // // //         setCustomers(enrichedCustomers);
// // // // // // //         calculateCustomerStats(enrichedCustomers);
// // // // // // //         updateChartData(enrichedCustomers);
// // // // // // //         setLoading(false);
// // // // // // //       } catch (err) {
// // // // // // //         setError(err.message);
// // // // // // //         setLoading(false);
// // // // // // //       }
// // // // // // //     };
// // // // // // //     fetchCustomers();
// // // // // // //   }, [segment, loyaltyFilter, dateRange]);

// // // // // // //   // Fetch purchase history
// // // // // // //   const fetchPurchaseHistory = async (customerPhone, silent = false) => {
// // // // // // //     try {
// // // // // // //       const response = await fetch(
// // // // // // //         `http://localhost:5008/api/customers/${customerPhone}/purchase-history?storeId=${localStorage.getItem("storeId")}`
// // // // // // //       );
// // // // // // //       if (!response.ok) throw new Error("Failed to fetch purchase history");
// // // // // // //       const data = await response.json();
// // // // // // //       if (!silent) {
// // // // // // //         setPurchaseHistory(data.purchase_history);
// // // // // // //         setSelectedCustomer(customerPhone);
// // // // // // //       }
// // // // // // //       return data.purchase_history;
// // // // // // //     } catch (err) {
// // // // // // //       if (!silent) setError(err.message);
// // // // // // //       return [];
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Calculate customer statistics
// // // // // // //   const calculateCustomerStats = (customerData) => {
// // // // // // //     const stats = customerData.reduce(
// // // // // // //       (acc, customer) => {
// // // // // // //         const purchaseCount = customer.purchaseHistory.length;
// // // // // // //         const totalSpent = customer.purchaseHistory.reduce(
// // // // // // //           (sum, purchase) => sum + (purchase.total_amount || 0),
// // // // // // //           0
// // // // // // //         );
// // // // // // //         const avgPurchase = purchaseCount > 0 ? totalSpent / purchaseCount : 0;
        
// // // // // // //         return {
// // // // // // //           totalCustomers: acc.totalCustomers + 1,
// // // // // // //           totalPurchases: acc.totalPurchases + purchaseCount,
// // // // // // //           totalSpending: acc.totalSpending + totalSpent,
// // // // // // //           avgPurchaseValue:
// // // // // // //             (acc.avgPurchaseValue * acc.totalCustomers + avgPurchase) /
// // // // // // //             (acc.totalCustomers + 1),
// // // // // // //         };
// // // // // // //       },
// // // // // // //       { totalCustomers: 0, totalPurchases: 0, totalSpending: 0, avgPurchaseValue: 0 }
// // // // // // //     );
// // // // // // //     setCustomerStats(stats);
// // // // // // //   };

// // // // // // //   // Update chart data
// // // // // // //   const updateChartData = (customerData) => {
// // // // // // //     const segmentCounts = customerData.reduce((acc, customer) => {
// // // // // // //       acc[customer.segment] = (acc[customer.segment] || 0) + 1;
// // // // // // //       return acc;
// // // // // // //     }, {});

// // // // // // //     setChartData({
// // // // // // //       labels: Object.keys(segmentCounts),
// // // // // // //       datasets: [{
// // // // // // //         label: "Customer Segments",
// // // // // // //         data: Object.values(segmentCounts),
// // // // // // //         backgroundColor: Object.keys(segmentCounts).map(seg => getSegmentColor(seg)),
// // // // // // //       }],
// // // // // // //     });
// // // // // // //   };

// // // // // // //   // Segment color mapping
// // // // // // //   const getSegmentColor = (segment) => {
// // // // // // //     const colors = {
// // // // // // //       "High-Spender": "#4CAF50",
// // // // // // //       "Medium-Spender": "#2196F3",
// // // // // // //       "Low-Spender": "#FFC107",
// // // // // // //       "Occasional": "#9C27B0",
// // // // // // //       "Loyal": "#E91E63",
// // // // // // //       "New-Customer": "#FF5722",
// // // // // // //     };
// // // // // // //     return colors[segment] || "#757575";
// // // // // // //   };

// // // // // // //   // Format currency
// // // // // // //   const formatCurrency = (amount) =>
// // // // // // //     new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);

// // // // // // //   // Sorting function
// // // // // // //   const sortCustomers = (key) => {
// // // // // // //     const direction =
// // // // // // //       sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
// // // // // // //     setSortConfig({ key, direction });

// // // // // // //     const sorted = [...customers].sort((a, b) => {
// // // // // // //       if (key === "total_spent" || key === "loyaltyPoints") {
// // // // // // //         return direction === "asc" ? a[key] - b[key] : b[key] - a[key];
// // // // // // //       }
// // // // // // //       return direction === "asc"
// // // // // // //         ? a[key].localeCompare(b[key])
// // // // // // //         : b[key].localeCompare(a[key]);
// // // // // // //     });
// // // // // // //     setCustomers(sorted);
// // // // // // //   };

// // // // // // //   // CSV data preparation
// // // // // // //   const csvData = customers.map(customer => ({
// // // // // // //     Name: customer.name,
// // // // // // //     Email: customer.email,
// // // // // // //     "Total Spent": formatCurrency(customer.total_spent),
// // // // // // //     Segment: customer.segment,
// // // // // // //     "Loyalty Points": customer.loyaltyPoints,
// // // // // // //     "Purchase Count": customer.purchaseHistory.length,
// // // // // // //   }));

// // // // // // //   return (
// // // // // // //     <div style={{ fontFamily: "'Segoe UI', sans-serif", maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
// // // // // // //       <h2 style={{ borderBottom: "2px solid #2196F3", paddingBottom: "10px", color: "#1976D2" }}>
// // // // // // //         Customer Segmentation Analysis
// // // // // // //       </h2>

// // // // // // //       {/* Enhanced Filter Section */}
// // // // // // //       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginBottom: "25px", backgroundColor: "#f9f9f9", padding: "15px", borderRadius: "8px" }}>
// // // // // // //         <div>
// // // // // // //           <label style={{ fontWeight: "600" }}>Segment: </label>
// // // // // // //           <select value={segment} onChange={(e) => setSegment(e.target.value)} style={{ padding: "10px", borderRadius: "4px" }}>
// // // // // // //             <option value="All">All Customers</option>
// // // // // // //             <option value="High-Spender">High Spender</option>
// // // // // // //             <option value="Medium-Spender">Medium Spender</option>
// // // // // // //             <option value="Low-Spender">Low Spender</option>
// // // // // // //             <option value="Occasional">Occasional</option>
// // // // // // //             <option value="Loyal">Loyal</option>
// // // // // // //             <option value="New-Customer">New Customer</option>
// // // // // // //           </select>
// // // // // // //         </div>

// // // // // // //         <div>
// // // // // // //           <label style={{ fontWeight: "600" }}>Loyalty Points: </label>
// // // // // // //           <input
// // // // // // //             type="number"
// // // // // // //             value={loyaltyFilter}
// // // // // // //             onChange={(e) => setLoyaltyFilter(e.target.value)}
// // // // // // //             style={{ padding: "10px", borderRadius: "4px" }}
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         <div>
// // // // // // //           <label style={{ fontWeight: "600" }}>Date Range: </label>
// // // // // // //           <input
// // // // // // //             type="date"
// // // // // // //             value={dateRange.start}
// // // // // // //             onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
// // // // // // //             style={{ padding: "10px", borderRadius: "4px" }}
// // // // // // //           />
// // // // // // //           <input
// // // // // // //             type="date"
// // // // // // //             value={dateRange.end}
// // // // // // //             onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
// // // // // // //             style={{ padding: "10px", borderRadius: "4px", marginLeft: "10px" }}
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         <div>
// // // // // // //           <label style={{ fontWeight: "600" }}>Spending Range: </label>
// // // // // // //           <input
// // // // // // //             type="number"
// // // // // // //             placeholder="Min"
// // // // // // //             onChange={(e) => setSpendingFilter({ ...spendingFilter, min: Number(e.target.value) })}
// // // // // // //             style={{ padding: "10px", borderRadius: "4px" }}
// // // // // // //           />
// // // // // // //           <input
// // // // // // //             type="number"
// // // // // // //             placeholder="Max"
// // // // // // //             onChange={(e) => setSpendingFilter({ ...spendingFilter, max: Number(e.target.value) || Infinity })}
// // // // // // //             style={{ padding: "10px", borderRadius: "4px", marginLeft: "10px" }}
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         <CSVLink
// // // // // // //           data={csvData}
// // // // // // //           filename={`customer_segmentation_${new Date().toISOString()}.csv`}
// // // // // // //           style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", borderRadius: "4px", textDecoration: "none" }}
// // // // // // //         >
// // // // // // //           Export to CSV
// // // // // // //         </CSVLink>
// // // // // // //       </div>

// // // // // // //       {/* Stats Overview */}
// // // // // // //       {customerStats.totalCustomers > 0 && (
// // // // // // //         <div style={{ marginBottom: "25px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
// // // // // // //           <div style={{ backgroundColor: "#f0f0f0", padding: "15px", borderRadius: "8px", flex: "1" }}>
// // // // // // //             <strong>Total Customers:</strong> {customerStats.totalCustomers}
// // // // // // //           </div>
// // // // // // //           <div style={{ backgroundColor: "#f0f0f0", padding: "15px", borderRadius: "8px", flex: "1" }}>
// // // // // // //             <strong>Total Purchases:</strong> {customerStats.totalPurchases}
// // // // // // //           </div>
// // // // // // //           <div style={{ backgroundColor: "#f0f0f0", padding: "15px", borderRadius: "8px", flex: "1" }}>
// // // // // // //             <strong>Total Spending:</strong> {formatCurrency(customerStats.totalSpending)}
// // // // // // //           </div>
// // // // // // //           <div style={{ backgroundColor: "#f0f0f0", padding: "15px", borderRadius: "8px", flex: "1" }}>
// // // // // // //             <strong>Avg Purchase:</strong> {formatCurrency(customerStats.avgPurchaseValue)}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* Chart Visualization */}
// // // // // // //       {chartData && (
// // // // // // //         <div style={{ marginBottom: "25px", maxWidth: "600px", margin: "0 auto" }}>
// // // // // // //           <Chart type="pie" data={chartData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* Customer Table */}
// // // // // // //       {!loading && customers.length > 0 && (
// // // // // // //         <div style={{ overflowX: "auto", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "8px" }}>
// // // // // // //           <table style={{ width: "100%", borderCollapse: "collapse" }}>
// // // // // // //             <thead>
// // // // // // //               <tr style={{ backgroundColor: "#1976D2", color: "white" }}>
// // // // // // //                 {["name", "email", "total_spent", "segment", "loyaltyPoints", "Purchase Count", "Actions"].map((header) => (
// // // // // // //                   <th
// // // // // // //                     key={header}
// // // // // // //                     onClick={() => header !== "Actions" && sortCustomers(header.toLowerCase().replace(" ", "_"))}
// // // // // // //                     style={{ padding: "15px", cursor: header !== "Actions" ? "pointer" : "default" }}
// // // // // // //                   >
// // // // // // //                     {header}
// // // // // // //                     {sortConfig.key === header.toLowerCase().replace(" ", "_") && (
// // // // // // //                       <span>{sortConfig.direction === "asc" ? " ↑" : " ↓"}</span>
// // // // // // //                     )}
// // // // // // //                   </th>
// // // // // // //                 ))}
// // // // // // //               </tr>
// // // // // // //             </thead>
// // // // // // //             <tbody>
// // // // // // //               {customers
// // // // // // //                 .filter((c) => c.total_spent >= spendingFilter.min && c.total_spent <= spendingFilter.max)
// // // // // // //                 .map((customer, index) => (
// // // // // // //                   <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff" }}>
// // // // // // //                     <td style={{ padding: "12px" }}>{customer.name}</td>
// // // // // // //                     <td style={{ padding: "12px" }}>{customer.email}</td>
// // // // // // //                     <td style={{ padding: "12px", textAlign: "right" }}>{formatCurrency(customer.total_spent)}</td>
// // // // // // //                     <td style={{ padding: "12px" }}>
// // // // // // //                       <span style={{ backgroundColor: getSegmentColor(customer.segment), color: "white", padding: "5px 10px", borderRadius: "4px" }}>
// // // // // // //                         {customer.segment}
// // // // // // //                       </span>
// // // // // // //                     </td>
// // // // // // //                     <td style={{ padding: "12px" }}>{customer.loyaltyPoints}</td>
// // // // // // //                     <td style={{ padding: "12px" }}>{customer.purchaseHistory.length}</td>
// // // // // // //                     <td style={{ padding: "12px" }}>
// // // // // // //                       <button
// // // // // // //                         onClick={() => fetchPurchaseHistory(customer.phone)}
// // // // // // //                         style={{ backgroundColor: "#2196F3", color: "white", padding: "5px 10px", borderRadius: "4px", border: "none" }}
// // // // // // //                       >
// // // // // // //                         View History
// // // // // // //                       </button>
// // // // // // //                     </td>
// // // // // // //                   </tr>
// // // // // // //                 ))}
// // // // // // //             </tbody>
// // // // // // //           </table>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* Purchase History */}
// // // // // // //       {selectedCustomer && (
// // // // // // //         <div style={{ marginTop: "25px" }}>
// // // // // // //           <h3 style={{ color: "#1976D2" }}>Purchase History for {selectedCustomer}</h3>
// // // // // // //           {purchaseHistory.length > 0 ? (
// // // // // // //             <ul style={{ listStyle: "none", padding: "0" }}>
// // // // // // //               {purchaseHistory.map((purchase, index) => (
// // // // // // //                 <li key={index} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff", padding: "10px", borderRadius: "4px", marginBottom: "10px" }}>
// // // // // // //                   <p><strong>Date:</strong> {purchase.date}</p>
// // // // // // //                   <p><strong>Total:</strong> {formatCurrency(purchase.total_amount)}</p>
// // // // // // //                   <p><strong>Products:</strong> {purchase.products.map((p) => `${p.name} (x${p.quantity})`).join(", ")}</p>
// // // // // // //                 </li>
// // // // // // //               ))}
// // // // // // //             </ul>
// // // // // // //           ) : (
// // // // // // //             <p>No purchase history found.</p>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {error && <div style={{ color: "#C62828", backgroundColor: "#FFEBEE", padding: "15px", borderRadius: "4px" }}>{error}</div>}
// // // // // // //       {loading && <div style={{ textAlign: "center", padding: "30px" }}>Loading...</div>}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default CustomerSegmentation;
// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import { Chart } from "react-chartjs-2";
// // // // // // import { CSVLink } from "react-csv";
// // // // // // import "chart.js/auto";

// // // // // // const CustomerSegmentation = () => {
// // // // // //   const [customers, setCustomers] = useState([]);
// // // // // //   const [segment, setSegment] = useState("All");
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [error, setError] = useState(null);
// // // // // //   const [loyaltyFilter, setLoyaltyFilter] = useState(0);
// // // // // //   const [selectedCustomer, setSelectedCustomer] = useState(null);
// // // // // //   const [purchaseHistory, setPurchaseHistory] = useState([]);
// // // // // //   const [dateRange, setDateRange] = useState({ start: "", end: "" });
// // // // // //   const [spendingFilter, setSpendingFilter] = useState({ min: 0, max: Infinity });
// // // // // //   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
// // // // // //   const [chartData, setChartData] = useState(null);
// // // // // //   const [customerStats, setCustomerStats] = useState({});
// // // // // //   const [activeTab, setActiveTab] = useState("data"); // Tab state for Data/Visualizations

// // // // // //   // Fetch customer data
// // // // // //   useEffect(() => {
// // // // // //     const fetchCustomers = async () => {
// // // // // //       setLoading(true);
// // // // // //       try {
// // // // // //         const params = new URLSearchParams({
// // // // // //           storeId: localStorage.getItem("storeId"),
// // // // // //           segment,
// // // // // //           loyaltyPoints: loyaltyFilter,
// // // // // //           ...(dateRange.start && { startDate: dateRange.start }),
// // // // // //           ...(dateRange.end && { endDate: dateRange.end }),
// // // // // //         });

// // // // // //         const response = await fetch(`http://localhost:5008/api/customers?${params}`);
// // // // // //         if (!response.ok) throw new Error("Failed to fetch customers");
// // // // // //         const data = await response.json();

// // // // // //         // Enrich with purchase history
// // // // // //         const enrichedCustomers = await Promise.all(
// // // // // //           data.customers.map(async (customer) => {
// // // // // //             const history = await fetchPurchaseHistory(customer.phone, true);
// // // // // //             const totalSpent = history.reduce((sum, p) => sum + (p.total_amount || 0), 0);
// // // // // //             return { ...customer, purchaseHistory: history, total_spent: totalSpent };
// // // // // //           })
// // // // // //         );

// // // // // //         setCustomers(enrichedCustomers);
// // // // // //         calculateCustomerStats(enrichedCustomers);
// // // // // //         updateChartData(enrichedCustomers);
// // // // // //         setLoading(false);
// // // // // //       } catch (err) {
// // // // // //         setError(err.message);
// // // // // //         setLoading(false);
// // // // // //       }
// // // // // //     };
// // // // // //     fetchCustomers();
// // // // // //   }, [segment, loyaltyFilter, dateRange]);

// // // // // //   // Fetch purchase history
// // // // // //   const fetchPurchaseHistory = async (customerPhone, silent = false) => {
// // // // // //     try {
// // // // // //       const response = await fetch(
// // // // // //         `http://localhost:5008/api/customers/${customerPhone}/purchase-history?storeId=${localStorage.getItem("storeId")}`
// // // // // //       );
// // // // // //       if (!response.ok) throw new Error("Failed to fetch purchase history");
// // // // // //       const data = await response.json();
// // // // // //       if (!silent) {
// // // // // //         setPurchaseHistory(data.purchase_history || []);
// // // // // //         setSelectedCustomer(customerPhone);
// // // // // //       }
// // // // // //       return data.purchase_history || [];
// // // // // //     } catch (err) {
// // // // // //       if (!silent) setError(err.message);
// // // // // //       return [];
// // // // // //     }
// // // // // //   };

// // // // // //   // Calculate customer stats
// // // // // //   const calculateCustomerStats = (customerData) => {
// // // // // //     const stats = customerData.reduce(
// // // // // //       (acc, customer) => {
// // // // // //         const purchaseCount = customer.purchaseHistory.length;
// // // // // //         const totalSpent = customer.total_spent;
// // // // // //         const avgPurchase = purchaseCount > 0 ? totalSpent / purchaseCount : 0;
// // // // // //         return {
// // // // // //           totalCustomers: acc.totalCustomers + 1,
// // // // // //           totalPurchases: acc.totalPurchases + purchaseCount,
// // // // // //           totalSpending: acc.totalSpending + totalSpent,
// // // // // //           avgPurchaseValue:
// // // // // //             (acc.avgPurchaseValue * acc.totalCustomers + avgPurchase) / (acc.totalCustomers + 1),
// // // // // //         };
// // // // // //       },
// // // // // //       { totalCustomers: 0, totalPurchases: 0, totalSpending: 0, avgPurchaseValue: 0 }
// // // // // //     );
// // // // // //     setCustomerStats(stats);
// // // // // //   };

// // // // // //   // Update chart data
// // // // // //   const updateChartData = (customerData) => {
// // // // // //     const segmentCounts = customerData.reduce((acc, customer) => {
// // // // // //       acc[customer.segment] = (acc[customer.segment] || 0) + 1;
// // // // // //       return acc;
// // // // // //     }, {});

// // // // // //     setChartData({
// // // // // //       labels: Object.keys(segmentCounts),
// // // // // //       datasets: [{
// // // // // //         label: "Customer Segments",
// // // // // //         data: Object.values(segmentCounts),
// // // // // //         backgroundColor: Object.keys(segmentCounts).map(seg => getSegmentColor(seg)),
// // // // // //       }],
// // // // // //     });
// // // // // //   };

// // // // // //   // Segment color mapping
// // // // // //   const getSegmentColor = (segment) => {
// // // // // //     const colors = {
// // // // // //       "High-Spender": "#4CAF50",
// // // // // //       "Medium-Spender": "#2196F3",
// // // // // //       "Low-Spender": "#FFC107",
// // // // // //       "Occasional": "#9C27B0",
// // // // // //       "Loyal": "#E91E63",
// // // // // //       "New-Customer": "#FF5722",
// // // // // //     };
// // // // // //     return colors[segment] || "#757575";
// // // // // //   };

// // // // // //   // Format currency
// // // // // //   const formatCurrency = (amount) =>
// // // // // //     new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);

// // // // // //   // Sorting function
// // // // // //   const sortCustomers = (key) => {
// // // // // //     const direction = sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
// // // // // //     setSortConfig({ key, direction });
// // // // // //     const sorted = [...customers].sort((a, b) => {
// // // // // //       if (key === "total_spent" || key === "loyaltyPoints" || key === "purchaseCount") {
// // // // // //         return direction === "asc" ? a[key] - b[key] : b[key] - a[key];
// // // // // //       }
// // // // // //       return direction === "asc" ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key]);
// // // // // //     });
// // // // // //     setCustomers(sorted);
// // // // // //   };

// // // // // //   // CSV data
// // // // // //   const csvData = customers.map(customer => ({
// // // // // //     Name: customer.name,
// // // // // //     Email: customer.email,
// // // // // //     "Total Spent": formatCurrency(customer.total_spent),
// // // // // //     Segment: customer.segment,
// // // // // //     "Loyalty Points": customer.loyaltyPoints,
// // // // // //     "Purchase Count": customer.purchaseHistory.length,
// // // // // //   }));

// // // // // //   return (
// // // // // //     <div style={{ fontFamily: "'Segoe UI', sans-serif", maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
// // // // // //       <h2 style={{ borderBottom: "2px solid #2196F3", paddingBottom: "10px", color: "#1976D2" }}>
// // // // // //         Customer Segmentation Analysis
// // // // // //       </h2>

// // // // // //       {/* Filter Section */}
// // // // // //       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginBottom: "25px", backgroundColor: "#f9f9f9", padding: "15px", borderRadius: "8px" }}>
// // // // // //         <div>
// // // // // //           <label style={{ fontWeight: "600" }}>Segment: </label>
// // // // // //           <select value={segment} onChange={(e) => setSegment(e.target.value)} style={{ padding: "10px", borderRadius: "4px" }}>
// // // // // //             <option value="All">All Customers</option>
// // // // // //             <option value="High-Spender">High Spender</option>
// // // // // //             <option value="Medium-Spender">Medium Spender</option>
// // // // // //             <option value="Low-Spender">Low Spender</option>
// // // // // //             <option value="Occasional">Occasional</option>
// // // // // //             <option value="Loyal">Loyal</option>
// // // // // //             <option value="New-Customer">New Customer</option>
// // // // // //           </select>
// // // // // //         </div>
// // // // // //         <div>
// // // // // //           <label style={{ fontWeight: "600" }}>Loyalty Points: </label>
// // // // // //           <input type="number" value={loyaltyFilter} onChange={(e) => setLoyaltyFilter(e.target.value)} style={{ padding: "10px", borderRadius: "4px" }} />
// // // // // //         </div>
// // // // // //         <div>
// // // // // //           <label style={{ fontWeight: "600" }}>Date Range: </label>
// // // // // //           <input
// // // // // //             type="date"
// // // // // //             value={dateRange.start}
// // // // // //             onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
// // // // // //             style={{ padding: "10px", borderRadius: "4px" }}
// // // // // //           />
// // // // // //           <input
// // // // // //             type="date"
// // // // // //             value={dateRange.end}
// // // // // //             onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
// // // // // //             style={{ padding: "10px", borderRadius: "4px", marginLeft: "10px" }}
// // // // // //           />
// // // // // //         </div>
// // // // // //         <div>
// // // // // //           <label style={{ fontWeight: "600" }}>Spending Range: </label>
// // // // // //           <input
// // // // // //             type="number"
// // // // // //             placeholder="Min"
// // // // // //             onChange={(e) => setSpendingFilter({ ...spendingFilter, min: Number(e.target.value) })}
// // // // // //             style={{ padding: "10px", borderRadius: "4px" }}
// // // // // //           />
// // // // // //           <input
// // // // // //             type="number"
// // // // // //             placeholder="Max"
// // // // // //             onChange={(e) => setSpendingFilter({ ...spendingFilter, max: Number(e.target.value) || Infinity })}
// // // // // //             style={{ padding: "10px", borderRadius: "4px", marginLeft: "10px" }}
// // // // // //           />
// // // // // //         </div>
// // // // // //         <CSVLink
// // // // // //           data={csvData}
// // // // // //           filename={`customer_segmentation_${new Date().toISOString()}.csv`}
// // // // // //           style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", borderRadius: "4px", textDecoration: "none" }}
// // // // // //         >
// // // // // //           Export to CSV
// // // // // //         </CSVLink>
// // // // // //       </div>

// // // // // //       {/* Tabs */}
// // // // // //       <div style={{ marginBottom: "20px" }}>
// // // // // //         <button
// // // // // //           onClick={() => setActiveTab("data")}
// // // // // //           style={{
// // // // // //             padding: "10px 20px",
// // // // // //             backgroundColor: activeTab === "data" ? "#2196F3" : "#ddd",
// // // // // //             color: activeTab === "data" ? "white" : "black",
// // // // // //             border: "none",
// // // // // //             borderRadius: "4px 4px 0 0",
// // // // // //             marginRight: "5px",
// // // // // //           }}
// // // // // //         >
// // // // // //           Data
// // // // // //         </button>
// // // // // //         <button
// // // // // //           onClick={() => setActiveTab("visualizations")}
// // // // // //           style={{
// // // // // //             padding: "10px 20px",
// // // // // //             backgroundColor: activeTab === "visualizations" ? "#2196F3" : "#ddd",
// // // // // //             color: activeTab === "visualizations" ? "white" : "black",
// // // // // //             border: "none",
// // // // // //             borderRadius: "4px 4px 0 0",
// // // // // //           }}
// // // // // //         >
// // // // // //           Visualizations
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       {/* Data Tab */}
// // // // // //       {activeTab === "data" && (
// // // // // //         <div>
// // // // // //           {loading ? (
// // // // // //             <div style={{ textAlign: "center", padding: "30px" }}>Loading...</div>
// // // // // //           ) : error ? (
// // // // // //             <div style={{ color: "#C62828", backgroundColor: "#FFEBEE", padding: "15px", borderRadius: "4px" }}>{error}</div>
// // // // // //           ) : customers.length === 0 ? (
// // // // // //             <div style={{ textAlign: "center", padding: "20px" }}>No customers found for the selected filters.</div>
// // // // // //           ) : (
// // // // // //             <>
// // // // // //               <div style={{ overflowX: "auto", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "8px" }}>
// // // // // //                 <table style={{ width: "100%", borderCollapse: "collapse" }}>
// // // // // //                   <thead>
// // // // // //                     <tr style={{ backgroundColor: "#1976D2", color: "white" }}>
// // // // // //                       {["Name", "Email", "Total Spent", "Segment", "Loyalty Points", "Purchase Count", "Actions"].map((header) => (
// // // // // //                         <th
// // // // // //                           key={header}
// // // // // //                           onClick={() => header !== "Actions" && sortCustomers(header.toLowerCase().replace(" ", "_"))}
// // // // // //                           style={{ padding: "15px", cursor: header !== "Actions" ? "pointer" : "default" }}
// // // // // //                         >
// // // // // //                           {header}
// // // // // //                           {sortConfig.key === header.toLowerCase().replace(" ", "_") && (
// // // // // //                             <span>{sortConfig.direction === "asc" ? " ↑" : " ↓"}</span>
// // // // // //                           )}
// // // // // //                         </th>
// // // // // //                       ))}
// // // // // //                     </tr>
// // // // // //                   </thead>
// // // // // //                   <tbody>
// // // // // //                     {customers
// // // // // //                       .filter((c) => c.total_spent >= spendingFilter.min && c.total_spent <= spendingFilter.max)
// // // // // //                       .map((customer, index) => (
// // // // // //                         <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff" }}>
// // // // // //                           <td style={{ padding: "12px" }}>{customer.name}</td>
// // // // // //                           <td style={{ padding: "12px" }}>{customer.email}</td>
// // // // // //                           <td style={{ padding: "12px", textAlign: "right" }}>{formatCurrency(customer.total_spent)}</td>
// // // // // //                           <td style={{ padding: "12px" }}>
// // // // // //                             <span style={{ backgroundColor: getSegmentColor(customer.segment), color: "white", padding: "5px 10px", borderRadius: "4px" }}>
// // // // // //                               {customer.segment}
// // // // // //                             </span>
// // // // // //                           </td>
// // // // // //                           <td style={{ padding: "12px" }}>{customer.loyaltyPoints}</td>
// // // // // //                           <td style={{ padding: "12px" }}>{customer.purchaseHistory.length}</td>
// // // // // //                           <td style={{ padding: "12px" }}>
// // // // // //                             <button
// // // // // //                               onClick={() => fetchPurchaseHistory(customer.phone)}
// // // // // //                               style={{ backgroundColor: "#2196F3", color: "white", padding: "5px 10px", borderRadius: "4px", border: "none" }}
// // // // // //                             >
// // // // // //                               View History
// // // // // //                             </button>
// // // // // //                           </td>
// // // // // //                         </tr>
// // // // // //                       ))}
// // // // // //                   </tbody>
// // // // // //                 </table>
// // // // // //               </div>

// // // // // //               {/* Purchase History */}
// // // // // //               {selectedCustomer && (
// // // // // //                 <div style={{ marginTop: "25px" }}>
// // // // // //                   <h3 style={{ color: "#1976D2" }}>Purchase History for {selectedCustomer}</h3>
// // // // // //                   {purchaseHistory.length > 0 ? (
// // // // // //                     <ul style={{ listStyle: "none", padding: "0" }}>
// // // // // //                       {purchaseHistory.map((purchase, index) => (
// // // // // //                         <li key={index} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff", padding: "10px", borderRadius: "4px", marginBottom: "10px" }}>
// // // // // //                           <p><strong>Date:</strong> {purchase.date}</p>
// // // // // //                           <p><strong>Total:</strong> {formatCurrency(purchase.total_amount)}</p>
// // // // // //                           <p><strong>Products:</strong> {purchase.products.map((p) => `${p.name} (x${p.quantity})`).join(", ")}</p>
// // // // // //                         </li>
// // // // // //                       ))}
// // // // // //                     </ul>
// // // // // //                   ) : (
// // // // // //                     <p>No purchase history found.</p>
// // // // // //                   )}
// // // // // //                 </div>
// // // // // //               )}
// // // // // //             </>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* Visualizations Tab */}
// // // // // //       {activeTab === "visualizations" && (
// // // // // //         <div>
// // // // // //           {loading ? (
// // // // // //             <div style={{ textAlign: "center", padding: "30px" }}>Loading...</div>
// // // // // //           ) : error ? (
// // // // // //             <div style={{ color: "#C62828", backgroundColor: "#FFEBEE", padding: "15px", borderRadius: "4px" }}>{error}</div>
// // // // // //           ) : (
// // // // // //             <>
// // // // // //               {/* Stats Overview */}
// // // // // //               {customerStats.totalCustomers > 0 && (
// // // // // //                 <div style={{ marginBottom: "25px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
// // // // // //                   <div style={{ backgroundColor: "#f0f0f0", padding: "15px", borderRadius: "8px", flex: "1" }}>
// // // // // //                     <strong>Total Customers:</strong> {customerStats.totalCustomers}
// // // // // //                   </div>
// // // // // //                   <div style={{ backgroundColor: "#f0f0f0", padding: "15px", borderRadius: "8px", flex: "1" }}>
// // // // // //                     <strong>Total Purchases:</strong> {customerStats.totalPurchases}
// // // // // //                   </div>
// // // // // //                   <div style={{ backgroundColor: "#f0f0f0", padding: "15px", borderRadius: "8px", flex: "1" }}>
// // // // // //                     <strong>Total Spending:</strong> {formatCurrency(customerStats.totalSpending)}
// // // // // //                   </div>
// // // // // //                   <div style={{ backgroundColor: "#f0f0f0", padding: "15px", borderRadius: "8px", flex: "1" }}>
// // // // // //                     <strong>Avg Purchase:</strong> {formatCurrency(customerStats.avgPurchaseValue)}
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               )}

// // // // // //               {/* Chart */}
// // // // // //               {chartData && (
// // // // // //                 <div style={{ maxWidth: "600px", margin: "0 auto" }}>
// // // // // //                   <Chart type="pie" data={chartData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
// // // // // //                 </div>
// // // // // //               )}
// // // // // //             </>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default CustomerSegmentation;

// // // // // import React, { useState, useEffect } from "react";
// // // // // import { Chart } from "react-chartjs-2";
// // // // // import { CSVLink } from "react-csv";
// // // // // import "chart.js/auto";
// // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // const CustomerSegmentation = () => {
// // // // //   const [customers, setCustomers] = useState([]);
// // // // //   const [segment, setSegment] = useState("All");
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [error, setError] = useState(null);
// // // // //   const [loyaltyFilter, setLoyaltyFilter] = useState(0);
// // // // //   const [selectedCustomer, setSelectedCustomer] = useState(null);
// // // // //   const [purchaseHistory, setPurchaseHistory] = useState([]);
// // // // //   const [dateRange, setDateRange] = useState({ start: "", end: "" });
// // // // //   const [spendingFilter, setSpendingFilter] = useState({ min: 0, max: Infinity });
// // // // //   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
// // // // //   const [chartData, setChartData] = useState(null);
// // // // //   const [customerStats, setCustomerStats] = useState({});
// // // // //   const [activeTab, setActiveTab] = useState("data");
// // // // //   const [trendData, setTrendData] = useState(null);
// // // // //   const [viewMode, setViewMode] = useState("table");
// // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // //   const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
// // // // //   const [recencyFilter, setRecencyFilter] = useState(365); // Last X days
// // // // //   const [riskCategories, setRiskCategories] = useState({
// // // // //     churnRisk: [],
// // // // //     highValue: [],
// // // // //     potentialLoyalists: []
// // // // //   });

// // // // //   // Fetch customer data
// // // // //   useEffect(() => {
// // // // //     const fetchCustomers = async () => {
// // // // //       setLoading(true);
// // // // //       try {
// // // // //         const params = new URLSearchParams({
// // // // //           storeId: localStorage.getItem("storeId"),
// // // // //           segment,
// // // // //           loyaltyPoints: loyaltyFilter,
// // // // //           ...(dateRange.start && { startDate: dateRange.start }),
// // // // //           ...(dateRange.end && { endDate: dateRange.end }),
// // // // //         });

// // // // //         const response = await fetch(`http://localhost:5008/api/customers?${params}`);
// // // // //         if (!response.ok) throw new Error("Failed to fetch customers");
// // // // //         const data = await response.json();

// // // // //         // Enrich with purchase history
// // // // //         const enrichedCustomers = await Promise.all(
// // // // //           data.customers.map(async (customer) => {
// // // // //             const history = await fetchPurchaseHistory(customer.phone, true);
// // // // //             const totalSpent = history.reduce((sum, p) => sum + (p.total_amount || 0), 0);
            
// // // // //             // Calculate additional metrics
// // // // //             const purchaseCount = history.length;
// // // // //             const lastPurchaseDate = history.length > 0 ? 
// // // // //               new Date(history.sort((a, b) => new Date(b.date) - new Date(a.date))[0].date) : null;
// // // // //             const daysSinceLastPurchase = lastPurchaseDate ? 
// // // // //               Math.floor((new Date() - lastPurchaseDate) / (1000 * 60 * 60 * 24)) : null;
// // // // //             const avgOrderValue = purchaseCount > 0 ? totalSpent / purchaseCount : 0;
// // // // //             const purchaseFrequency = purchaseCount > 0 ? 
// // // // //               (lastPurchaseDate ? Math.floor((new Date() - new Date(history[history.length-1].date)) / (1000 * 60 * 60 * 24)) / purchaseCount : null) : null;
              
// // // // //             return { 
// // // // //               ...customer, 
// // // // //               purchaseHistory: history, 
// // // // //               total_spent: totalSpent,
// // // // //               purchaseCount,
// // // // //               daysSinceLastPurchase,
// // // // //               avgOrderValue,
// // // // //               purchaseFrequency
// // // // //             };
// // // // //           })
// // // // //         );

// // // // //         setCustomers(enrichedCustomers);
// // // // //         calculateCustomerStats(enrichedCustomers);
// // // // //         updateChartData(enrichedCustomers);
// // // // //         generateTrendData(enrichedCustomers);
// // // // //         identifyCustomerCategories(enrichedCustomers);
// // // // //         setLoading(false);
// // // // //       } catch (err) {
// // // // //         setError(err.message);
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };
// // // // //     fetchCustomers();
// // // // //   }, [segment, loyaltyFilter, dateRange]);

// // // // //   // Fetch purchase history
// // // // //   const fetchPurchaseHistory = async (customerPhone, silent = false) => {
// // // // //     try {
// // // // //       const response = await fetch(
// // // // //         `http://localhost:5008/api/customers/${customerPhone}/purchase-history?storeId=${localStorage.getItem("storeId")}`
// // // // //       );
// // // // //       if (!response.ok) throw new Error("Failed to fetch purchase history");
// // // // //       const data = await response.json();
// // // // //       if (!silent) {
// // // // //         setPurchaseHistory(data.purchase_history || []);
// // // // //         setSelectedCustomer(customerPhone);
// // // // //       }
// // // // //       return data.purchase_history || [];
// // // // //     } catch (err) {
// // // // //       if (!silent) setError(err.message);
// // // // //       return [];
// // // // //     }
// // // // //   };

// // // // //   // Calculate customer stats
// // // // //   const calculateCustomerStats = (customerData) => {
// // // // //     const stats = customerData.reduce(
// // // // //       (acc, customer) => {
// // // // //         const purchaseCount = customer.purchaseHistory.length;
// // // // //         const totalSpent = customer.total_spent;
// // // // //         const avgPurchase = purchaseCount > 0 ? totalSpent / purchaseCount : 0;
        
// // // // //         // Calculate additional stats
// // // // //         const activeCustomers = acc.activeCustomers + (customer.daysSinceLastPurchase < 90 ? 1 : 0);
// // // // //         const inactiveCustomers = acc.inactiveCustomers + (customer.daysSinceLastPurchase >= 90 ? 1 : 0);
// // // // //         const highValueCustomers = acc.highValueCustomers + (customer.total_spent > 1000 ? 1 : 0);
        
// // // // //         return {
// // // // //           totalCustomers: acc.totalCustomers + 1,
// // // // //           totalPurchases: acc.totalPurchases + purchaseCount,
// // // // //           totalSpending: acc.totalSpending + totalSpent,
// // // // //           avgPurchaseValue:
// // // // //             (acc.avgPurchaseValue * acc.totalCustomers + avgPurchase) / (acc.totalCustomers + 1),
// // // // //           activeCustomers,
// // // // //           inactiveCustomers,
// // // // //           highValueCustomers,
// // // // //           loyaltyPointsAvg: acc.loyaltyPointsAvg + (customer.loyaltyPoints || 0),
// // // // //         };
// // // // //       },
// // // // //       { 
// // // // //         totalCustomers: 0, 
// // // // //         totalPurchases: 0, 
// // // // //         totalSpending: 0, 
// // // // //         avgPurchaseValue: 0,
// // // // //         activeCustomers: 0,
// // // // //         inactiveCustomers: 0,
// // // // //         highValueCustomers: 0,
// // // // //         loyaltyPointsAvg: 0
// // // // //       }
// // // // //     );
    
// // // // //     // Finalize averages
// // // // //     stats.loyaltyPointsAvg = stats.totalCustomers > 0 ? Math.round(stats.loyaltyPointsAvg / stats.totalCustomers) : 0;
    
// // // // //     setCustomerStats(stats);
// // // // //   };

// // // // //   // Generate trend data for charts
// // // // //   const generateTrendData = (customerData) => {
// // // // //     // Group purchases by month
// // // // //     const purchasesByMonth = {};
    
// // // // //     customerData.forEach(customer => {
// // // // //       customer.purchaseHistory.forEach(purchase => {
// // // // //         const date = new Date(purchase.date);
// // // // //         const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        
// // // // //         if (!purchasesByMonth[monthKey]) {
// // // // //           purchasesByMonth[monthKey] = {
// // // // //             totalAmount: 0,
// // // // //             purchaseCount: 0,
// // // // //             customerCount: new Set(),
// // // // //           };
// // // // //         }
        
// // // // //         purchasesByMonth[monthKey].totalAmount += purchase.total_amount || 0;
// // // // //         purchasesByMonth[monthKey].purchaseCount += 1;
// // // // //         purchasesByMonth[monthKey].customerCount.add(customer.phone);
// // // // //       });
// // // // //     });
    
// // // // //     // Convert to arrays for charts
// // // // //     const sortedMonths = Object.keys(purchasesByMonth).sort();
    
// // // // //     const trendData = {
// // // // //       revenue: {
// // // // //         labels: sortedMonths.map(month => {
// // // // //           const [year, monthNum] = month.split('-');
// // // // //           return `${monthNum}/${year.slice(2)}`;
// // // // //         }),
// // // // //         datasets: [{
// // // // //           label: 'Monthly Revenue',
// // // // //           data: sortedMonths.map(month => purchasesByMonth[month].totalAmount),
// // // // //           borderColor: '#2196F3',
// // // // //           backgroundColor: 'rgba(33, 150, 243, 0.2)',
// // // // //           fill: true,
// // // // //           tension: 0.4,
// // // // //         }]
// // // // //       },
// // // // //       purchases: {
// // // // //         labels: sortedMonths.map(month => {
// // // // //           const [year, monthNum] = month.split('-');
// // // // //           return `${monthNum}/${year.slice(2)}`;
// // // // //         }),
// // // // //         datasets: [{
// // // // //           label: 'Purchase Count',
// // // // //           data: sortedMonths.map(month => purchasesByMonth[month].purchaseCount),
// // // // //           borderColor: '#4CAF50',
// // // // //           backgroundColor: 'rgba(76, 175, 80, 0.2)',
// // // // //           fill: true,
// // // // //           tension: 0.4,
// // // // //         }]
// // // // //       },
// // // // //       customers: {
// // // // //         labels: sortedMonths.map(month => {
// // // // //           const [year, monthNum] = month.split('-');
// // // // //           return `${monthNum}/${year.slice(2)}`;
// // // // //         }),
// // // // //         datasets: [{
// // // // //           label: 'Active Customers',
// // // // //           data: sortedMonths.map(month => purchasesByMonth[month].customerCount.size),
// // // // //           borderColor: '#E91E63',
// // // // //           backgroundColor: 'rgba(233, 30, 99, 0.2)',
// // // // //           fill: true,
// // // // //           tension: 0.4,
// // // // //         }]
// // // // //       }
// // // // //     };
    
// // // // //     setTrendData(trendData);
// // // // //   };

// // // // //   // Identify customer categories for focused marketing
// // // // //   const identifyCustomerCategories = (customerData) => {
// // // // //     const categories = {
// // // // //       churnRisk: [],
// // // // //       highValue: [],
// // // // //       potentialLoyalists: []
// // // // //     };
    
// // // // //     customerData.forEach(customer => {
// // // // //       // Customers who haven't purchased in a while but were previously active
// // // // //       if (customer.purchaseCount > 3 && customer.daysSinceLastPurchase > 120) {
// // // // //         categories.churnRisk.push(customer);
// // // // //       }
      
// // // // //       // High value customers (high spending, frequent purchases)
// // // // //       if (customer.total_spent > 1000 && customer.purchaseCount > 5) {
// // // // //         categories.highValue.push(customer);
// // // // //       }
      
// // // // //       // Customers who show loyalty potential (moderate spending, recent activity)
// // // // //       if (customer.purchaseCount >= 2 && customer.purchaseCount < 5 && 
// // // // //           customer.daysSinceLastPurchase < 60 && customer.total_spent > 200) {
// // // // //         categories.potentialLoyalists.push(customer);
// // // // //       }
// // // // //     });
    
// // // // //     setRiskCategories(categories);
// // // // //   };

// // // // //   // Update chart data
// // // // //   const updateChartData = (customerData) => {
// // // // //     const segmentCounts = customerData.reduce((acc, customer) => {
// // // // //       acc[customer.segment] = (acc[customer.segment] || 0) + 1;
// // // // //       return acc;
// // // // //     }, {});

// // // // //     // Create spending by segment data
// // // // //     const spendingBySegment = customerData.reduce((acc, customer) => {
// // // // //       if (!acc[customer.segment]) {
// // // // //         acc[customer.segment] = 0;
// // // // //       }
// // // // //       acc[customer.segment] += customer.total_spent;
// // // // //       return acc;
// // // // //     }, {});

// // // // //     setChartData({
// // // // //       segments: {
// // // // //         labels: Object.keys(segmentCounts),
// // // // //         datasets: [{
// // // // //           label: "Customer Segments",
// // // // //           data: Object.values(segmentCounts),
// // // // //           backgroundColor: Object.keys(segmentCounts).map(seg => getSegmentColor(seg)),
// // // // //           borderWidth: 1,
// // // // //           borderColor: '#ffffff',
// // // // //         }],
// // // // //       },
// // // // //       spending: {
// // // // //         labels: Object.keys(spendingBySegment),
// // // // //         datasets: [{
// // // // //           label: "Spending by Segment",
// // // // //           data: Object.values(spendingBySegment),
// // // // //           backgroundColor: Object.keys(spendingBySegment).map(seg => getSegmentColor(seg, 0.7)),
// // // // //           borderWidth: 1,
// // // // //           borderColor: '#ffffff',
// // // // //         }],
// // // // //       },
// // // // //       loyalty: {
// // // // //         labels: ['0-50', '51-100', '101-200', '201-500', '501+'],
// // // // //         datasets: [{
// // // // //           label: "Loyalty Points Distribution",
// // // // //           data: [
// // // // //             customerData.filter(c => c.loyaltyPoints >= 0 && c.loyaltyPoints <= 50).length,
// // // // //             customerData.filter(c => c.loyaltyPoints > 50 && c.loyaltyPoints <= 100).length,
// // // // //             customerData.filter(c => c.loyaltyPoints > 100 && c.loyaltyPoints <= 200).length,
// // // // //             customerData.filter(c => c.loyaltyPoints > 200 && c.loyaltyPoints <= 500).length,
// // // // //             customerData.filter(c => c.loyaltyPoints > 500).length
// // // // //           ],
// // // // //           backgroundColor: [
// // // // //             'rgba(76, 175, 80, 0.7)',
// // // // //             'rgba(33, 150, 243, 0.7)',
// // // // //             'rgba(255, 193, 7, 0.7)',
// // // // //             'rgba(156, 39, 176, 0.7)',
// // // // //             'rgba(233, 30, 99, 0.7)'
// // // // //           ],
// // // // //           borderWidth: 1,
// // // // //           borderColor: '#ffffff',
// // // // //         }],
// // // // //       }
// // // // //     });
// // // // //   };

// // // // //   // Segment color mapping
// // // // //   const getSegmentColor = (segment, opacity = 1) => {
// // // // //     const colors = {
// // // // //       "High-Spender": `rgba(76, 175, 80, ${opacity})`,
// // // // //       "Medium-Spender": `rgba(33, 150, 243, ${opacity})`,
// // // // //       "Low-Spender": `rgba(255, 193, 7, ${opacity})`,
// // // // //       "Occasional": `rgba(156, 39, 176, ${opacity})`,
// // // // //       "Loyal": `rgba(233, 30, 99, ${opacity})`,
// // // // //       "New-Customer": `rgba(255, 87, 34, ${opacity})`,
// // // // //     };
// // // // //     return colors[segment] || `rgba(117, 117, 117, ${opacity})`;
// // // // //   };

// // // // //   // Format currency
// // // // //   const formatCurrency = (amount) =>
// // // // //     new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);

// // // // //   // Sorting function
// // // // //   const sortCustomers = (key) => {
// // // // //     const direction = sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
// // // // //     setSortConfig({ key, direction });
// // // // //     const sorted = [...customers].sort((a, b) => {
// // // // //       if (key === "total_spent" || key === "loyaltyPoints" || key === "purchaseCount" || 
// // // // //           key === "daysSinceLastPurchase" || key === "avgOrderValue") {
// // // // //         return direction === "asc" ? a[key] - b[key] : b[key] - a[key];
// // // // //       }
// // // // //       if (a[key] === null) return direction === "asc" ? 1 : -1;
// // // // //       if (b[key] === null) return direction === "asc" ? -1 : 1;
// // // // //       return direction === "asc" ? 
// // // // //         (a[key]?.toString() || "").localeCompare(b[key]?.toString() || "") : 
// // // // //         (b[key]?.toString() || "").localeCompare(a[key]?.toString() || "");
// // // // //     });
// // // // //     setCustomers(sorted);
// // // // //   };

// // // // //   // Filter customers
// // // // //   const filteredCustomers = customers
// // // // //     .filter(c => c.total_spent >= spendingFilter.min && c.total_spent <= spendingFilter.max)
// // // // //     .filter(c => !recencyFilter || c.daysSinceLastPurchase <= recencyFilter)
// // // // //     .filter(c => !searchTerm || 
// // // // //       c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
// // // // //       c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // //       c.phone.includes(searchTerm));

// // // // //   // CSV data
// // // // //   const csvData = filteredCustomers.map(customer => ({
// // // // //     Name: customer.name,
// // // // //     Email: customer.email,
// // // // //     Phone: customer.phone,
// // // // //     "Total Spent": formatCurrency(customer.total_spent),
// // // // //     Segment: customer.segment,
// // // // //     "Loyalty Points": customer.loyaltyPoints,
// // // // //     "Purchase Count": customer.purchaseCount,
// // // // //     "Last Purchase (Days)": customer.daysSinceLastPurchase,
// // // // //     "Avg Order Value": formatCurrency(customer.avgOrderValue),
// // // // //   }));

// // // // //   // Get customer risk level indicator
// // // // //   const getCustomerRiskLevel = (customer) => {
// // // // //     if (!customer.daysSinceLastPurchase) return { level: "new", label: "New" };
// // // // //     if (customer.daysSinceLastPurchase > 180) return { level: "high", label: "High Risk" };
// // // // //     if (customer.daysSinceLastPurchase > 90) return { level: "medium", label: "Medium Risk" };
// // // // //     return { level: "low", label: "Low Risk" };
// // // // //   };

// // // // //   return (
// // // // //     <div className="customer-segmentation" style={{ 
// // // // //       fontFamily: "'Inter', 'Segoe UI', sans-serif", 
// // // // //       maxWidth: "1200px", 
// // // // //       margin: "0 auto", 
// // // // //       padding: "20px",
// // // // //       color: "#333",
// // // // //       background: "#fafafa",
// // // // //       borderRadius: "12px",
// // // // //       boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
// // // // //     }}>
// // // // //       <motion.h2 
// // // // //         initial={{ opacity: 0, y: -20 }}
// // // // //         animate={{ opacity: 1, y: 0 }}
// // // // //         transition={{ duration: 0.5 }}
// // // // //         style={{ 
// // // // //           borderBottom: "2px solid #2196F3", 
// // // // //           paddingBottom: "15px", 
// // // // //           color: "#1565C0",
// // // // //           fontSize: "28px",
// // // // //           fontWeight: "600",
// // // // //           marginBottom: "25px"
// // // // //         }}
// // // // //       >
// // // // //         Customer Segmentation Analytics
// // // // //       </motion.h2>

// // // // //       {/* Quick Stats */}
// // // // //       {customerStats.totalCustomers > 0 && (
// // // // //         <motion.div 
// // // // //           initial={{ opacity: 0, y: 20 }}
// // // // //           animate={{ opacity: 1, y: 0 }}
// // // // //           transition={{ duration: 0.5, delay: 0.2 }}
// // // // //           style={{ 
// // // // //             marginBottom: "30px", 
// // // // //             display: "flex", 
// // // // //             gap: "20px", 
// // // // //             flexWrap: "wrap",
// // // // //             justifyContent: "space-between"
// // // // //           }}
// // // // //         >
// // // // //           <div style={{ 
// // // // //             backgroundColor: "#fff", 
// // // // //             padding: "20px", 
// // // // //             borderRadius: "12px", 
// // // // //             flex: "1",
// // // // //             minWidth: "200px",
// // // // //             boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // // //             transition: "transform 0.2s",
// // // // //             cursor: "pointer",
// // // // //             display: "flex",
// // // // //             flexDirection: "column",
// // // // //             alignItems: "center",
// // // // //             justifyContent: "center"
// // // // //           }}
// // // // //           onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
// // // // //           onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
// // // // //           >
// // // // //             <div style={{ fontSize: "36px", fontWeight: "700", color: "#1976D2", marginBottom: "5px" }}>
// // // // //               {customerStats.totalCustomers}
// // // // //             </div>
// // // // //             <div style={{ fontSize: "14px", color: "#666", textTransform: "uppercase", letterSpacing: "1px" }}>
// // // // //               Total Customers
// // // // //             </div>
// // // // //           </div>
          
// // // // //           <div style={{ 
// // // // //             backgroundColor: "#fff", 
// // // // //             padding: "20px", 
// // // // //             borderRadius: "12px", 
// // // // //             flex: "1",
// // // // //             minWidth: "200px",
// // // // //             boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // // //             transition: "transform 0.2s",
// // // // //             cursor: "pointer",
// // // // //             display: "flex",
// // // // //             flexDirection: "column",
// // // // //             alignItems: "center",
// // // // //             justifyContent: "center"
// // // // //           }}
// // // // //           onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
// // // // //           onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
// // // // //           >
// // // // //             <div style={{ fontSize: "36px", fontWeight: "700", color: "#4CAF50", marginBottom: "5px" }}>
// // // // //               {formatCurrency(customerStats.totalSpending)}
// // // // //             </div>
// // // // //             <div style={{ fontSize: "14px", color: "#666", textTransform: "uppercase", letterSpacing: "1px" }}>
// // // // //               Total Revenue
// // // // //             </div>
// // // // //           </div>
          
// // // // //           <div style={{ 
// // // // //             backgroundColor: "#fff", 
// // // // //             padding: "20px", 
// // // // //             borderRadius: "12px", 
// // // // //             flex: "1",
// // // // //             minWidth: "200px",
// // // // //             boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // // //             transition: "transform 0.2s",
// // // // //             cursor: "pointer",
// // // // //             display: "flex",
// // // // //             flexDirection: "column",
// // // // //             alignItems: "center",
// // // // //             justifyContent: "center"
// // // // //           }}
// // // // //           onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
// // // // //           onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
// // // // //           >
// // // // //             <div style={{ fontSize: "36px", fontWeight: "700", color: "#FF5722", marginBottom: "5px" }}>
// // // // //               {formatCurrency(customerStats.avgPurchaseValue)}
// // // // //             </div>
// // // // //             <div style={{ fontSize: "14px", color: "#666", textTransform: "uppercase", letterSpacing: "1px" }}>
// // // // //               Avg Order Value
// // // // //             </div>
// // // // //           </div>
          
// // // // //           <div style={{ 
// // // // //             backgroundColor: "#fff", 
// // // // //             padding: "20px", 
// // // // //             borderRadius: "12px", 
// // // // //             flex: "1",
// // // // //             minWidth: "200px",
// // // // //             boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // // //             transition: "transform 0.2s",
// // // // //             cursor: "pointer",
// // // // //             display: "flex",
// // // // //             flexDirection: "column",
// // // // //             alignItems: "center",
// // // // //             justifyContent: "center"
// // // // //           }}
// // // // //           onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
// // // // //           onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
// // // // //           >
// // // // //             <div style={{ fontSize: "36px", fontWeight: "700", color: "#9C27B0", marginBottom: "5px" }}>
// // // // //               {customerStats.activeCustomers}
// // // // //             </div>
// // // // //             <div style={{ fontSize: "14px", color: "#666", textTransform: "uppercase", letterSpacing: "1px" }}>
// // // // //               Active Customers
// // // // //             </div>
// // // // //           </div>
// // // // //         </motion.div>
// // // // //       )}

// // // // //       {/* Search & Advanced Filters Toggle */}
// // // // //       <motion.div
// // // // //         initial={{ opacity: 0 }}
// // // // //         animate={{ opacity: 1 }}
// // // // //         transition={{ duration: 0.5, delay: 0.3 }}
// // // // //         style={{ marginBottom: "20px", display: "flex", gap: "15px", flexWrap: "wrap", alignItems: "center" }}
// // // // //       >
// // // // //         <div style={{ flex: "1", minWidth: "250px" }}>
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Search by name, email or phone..."
// // // // //             value={searchTerm}
// // // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // // //             style={{ 
// // // // //               width: "100%", 
// // // // //               padding: "12px 15px", 
// // // // //               borderRadius: "8px", 
// // // // //               border: "1px solid #ddd",
// // // // //               fontSize: "15px",
// // // // //               transition: "all 0.2s",
// // // // //               boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
// // // // //             }}
// // // // //           />
// // // // //         </div>
// // // // //         <button 
// // // // //           onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
// // // // //           style={{
// // // // //             backgroundColor: showAdvancedFilters ? "#1976D2" : "#fff",
// // // // //             color: showAdvancedFilters ? "#fff" : "#1976D2",
// // // // //             padding: "12px 20px",
// // // // //             borderRadius: "8px",
// // // // //             border: "1px solid #1976D2",
// // // // //             cursor: "pointer",
// // // // //             fontWeight: "500",
// // // // //             transition: "all 0.2s",
// // // // //             display: "flex",
// // // // //             alignItems: "center",
// // // // //             gap: "8px"
// // // // //           }}
// // // // //         >
// // // // //           <span>{showAdvancedFilters ? "Hide" : "Show"} Advanced Filters</span>
// // // // //           <span style={{ fontSize: "10px", transform: showAdvancedFilters ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
// // // // //         </button>

// // // // //         <div style={{ marginLeft: "auto", display: "flex", gap: "10px" }}>
// // // // //           <button 
// // // // //             onClick={() => setViewMode("table")}
// // // // //             style={{
// // // // //               backgroundColor: viewMode === "table" ? "#1976D2" : "#fff",
// // // // //               color: viewMode === "table" ? "#fff" : "#1976D2",
// // // // //               padding: "12px 15px",
// // // // //               borderRadius: "8px",
// // // // //               border: "1px solid #1976D2",
// // // // //               cursor: "pointer",
// // // // //               fontWeight: "500",
// // // // //               transition: "all 0.2s"
// // // // //             }}
// // // // //           >
// // // // //             Table View
// // // // //           </button>
// // // // //           <button 
// // // // //             onClick={() => setViewMode("card")}
// // // // //             style={{
// // // // //               backgroundColor: viewMode === "card" ? "#1976D2" : "#fff",
// // // // //               color: viewMode === "card" ? "#fff" : "#1976D2",
// // // // //               padding: "12px 15px",
// // // // //               borderRadius: "8px",
// // // // //               border: "1px solid #1976D2",
// // // // //               cursor: "pointer",
// // // // //               fontWeight: "500",
// // // // //               transition: "all 0.2s"
// // // // //             }}
// // // // //           >
// // // // //             Card View
// // // // //           </button>
// // // // //         </div>
// // // // //       </motion.div>

// // // // //       {/* Advanced Filters */}
// // // // //       <AnimatePresence>
// // // // //         {showAdvancedFilters && (
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, height: 0 }}
// // // // //             animate={{ opacity: 1, height: "auto" }}
// // // // //             exit={{ opacity: 0, height: 0 }}
// // // // //             transition={{ duration: 0.3 }}
// // // // //             style={{ 
// // // // //               overflow: "hidden",
// // // // //               marginBottom: "25px", 
// // // // //               backgroundColor: "#fff", 
// // // // //               padding: "20px", 
// // // // //               borderRadius: "12px",
// // // // //               boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // // //             }}
// // // // //           >
// // // // //             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
// // // // //               <div style={{ minWidth: "200px", flex: "1" }}>
// // // // //                 <label style={{ display: "block", fontWeight: "500", marginBottom: "8px", color: "#555" }}>Segment:</label>
// // // // //                 <select 
// // // // //                   value={segment} 
// // // // //                   onChange={(e) => setSegment(e.target.value)} 
// // // // //                   style={{ 
// // // // //                     width: "100%",
// // // // //                     padding: "12px", 
// // // // //                     borderRadius: "8px",
// // // // //                     border: "1px solid #ddd",
// // // // //                     backgroundColor: "#fff",
// // // // //                     fontSize: "15px"
// // // // //                   }}
// // // // //                 >
// // // // //                   <option value="All">All Customers</option>
// // // // //                   <option value="High-Spender">High Spender</option>
// // // // //                   <option value="Medium-Spender">Medium Spender</option>
// // // // //                   <option value="Low-Spender">Low Spender</option>
// // // // //                   <option value="Occasional">Occasional</option>
// // // // //                   <option value="Loyal">Loyal</option>
// // // // //                   <option value="New-Customer">New Customer</option>
// // // // //                 </select>
// // // // //               </div>
              
// // // // //               <div style={{ minWidth: "200px", flex: "1" }}>
// // // // //                 <label style={{ display: "block", fontWeight: "500", marginBottom: "8px", color: "#555" }}>Min Loyalty Points:</label>
// // // // //                 <input 
// // // // //                   type="number" 
// // // // //                   value={loyaltyFilter} 
// // // // //                   onChange={(e) => setLoyaltyFilter(e.target.value)} 
// // // // //                   style={{ 
// // // // //                     width: "100%",
// // // // //                     padding: "12px", 
// // // // //                     borderRadius: "8px",
// // // // //                     border: "1px solid #ddd",
// // // // //                     fontSize: "15px"
// // // // //                   }} 
// // // // //                 />
// // // // //               </div>
              
// // // // //               <div style={{ minWidth: "200px", flex: "1" }}>
// // // // //                 <label style={{ display: "block", fontWeight: "500", marginBottom: "8px", color: "#555" }}>Customer Activity (Last X Days):</label>
// // // // //                 <input 
// // // // //                   type="range" 
// // // // //                   min="30" 
// // // // //                   max="730" 
// // // // //                   step="30"
// // // // //                   value={recencyFilter} 
// // // // //                   onChange={(e) => setRecencyFilter(Number(e.target.value))} 
// // // // //                   style={{ 
// // // // //                     width: "100%",
// // // // //                   }} 
// // // // //                 />
// // // // //                 <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#666" }}>
// // // // //                   <span>30 days</span>
// // // // //                   <span>{recencyFilter} days</span>
// // // // //                   <span>2 years</span>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
            
// // // // //             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
// // // // //               <div style={{ flex: "1", minWidth: "200px" }}>
// // // // //                 <label style={{ display: "block", fontWeight: "500", marginBottom: "8px", color: "#555" }}>Date Range:</label>
// // // // //                 <div style={{ display: "flex", gap: "10px" }}>
// // // // //                   <input
// // // // //                     type="date"
// // // // //                     value={dateRange.start}
// // // // //                     onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
// // // // //                     style={{ 
// // // // //                       flex: "1",
// // // // //                       padding: "12px", 
// // // // //                       borderRadius: "8px",
// // // // //                       border: "1px solid #ddd",
// // // // //                       fontSize: "15px"
// // // // //                     }}
// // // // //                   />
// // // // //                   <input
// // // // //                     type="date"
// // // // //                     value={dateRange.end}
// // // // //                     onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
// // // // //                     style={{ 
// // // // //                       flex: "1",
// // // // //                       padding: "12px", 
// // // // //                       borderRadius: "8px",
// // // // //                       border: "1px solid #ddd",
// // // // //                       fontSize: "15px"
// // // // //                     }}
// // // // //                   />
// // // // //                 </div>
// // // // //               </div>              <div style={{ flex: "1", minWidth: "200px" }}>
// // // // //                 <label style={{ display: "block", fontWeight: "500", marginBottom: "8px", color: "#555" }}>Spending Range:</label>
// // // // //                 <div style={{ display: "flex", gap: "10px" }}>
// // // // //                   <input
// // // // //                     type="number"
// // // // //                     placeholder="Min"
// // // // //                     value={spendingFilter.min}
// // // // //                     onChange={(e) => setSpendingFilter({ ...spendingFilter, min: Number(e.target.value) })}
// // // // //                     style={{ 
// // // // //                       flex: "1",
// // // // //                       padding: "12px", 
// // // // //                       borderRadius: "8px",
// // // // //                       border: "1px solid #ddd",
// // // // //                       fontSize: "15px"
// // // // //                     }}
// // // // //                   />
// // // // //                   <input
// // // // //                     type="number"
// // // // //                     placeholder="Max"
// // // // //                     value={spendingFilter.max === Infinity ? "" : spendingFilter.max}
// // // // //                     onChange={(e) => setSpendingFilter({ ...spendingFilter, max: Number(e.target.value) || Infinity })}
// // // // //                     style={{ 
// // // // //                       flex: "1",
// // // // //                       padding: "12px", 
// // // // //                       borderRadius: "8px",
// // // // //                       border: "1px solid #ddd",
// // // // //                       fontSize: "15px"
// // // // //                     }}
// // // // //                   />
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>
// // // // //             {/* Main Content */}
// // // // //             <motion.div
// // // // //         initial={{ opacity: 0, y: 20 }}
// // // // //         animate={{ opacity: 1, y: 0 }}
// // // // //         transition={{ duration: 0.5, delay: 0.4 }}
// // // // //         style={{ marginBottom: "30px" }}
// // // // //       >
// // // // //         {loading ? (
// // // // //           <div style={{ textAlign: "center", padding: "30px" }}>
// // // // //             <div style={{ fontSize: "18px", color: "#666" }}>Loading customer data...</div>
// // // // //             <div style={{ marginTop: "10px" }}>⏳</div>
// // // // //           </div>
// // // // //         ) : error ? (
// // // // //           <div style={{ 
// // // // //             color: "#C62828", 
// // // // //             backgroundColor: "#FFEBEE", 
// // // // //             padding: "15px", 
// // // // //             borderRadius: "8px",
// // // // //             textAlign: "center"
// // // // //           }}>
// // // // //             {error}
// // // // //           </div>
// // // // //         ) : filteredCustomers.length === 0 ? (
// // // // //           <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>
// // // // //             No customers found matching the selected filters.
// // // // //           </div>
// // // // //         ) : viewMode === "table" ? (
// // // // //           <div style={{ overflowX: "auto", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", borderRadius: "12px" }}>
// // // // //             <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#fff" }}>
// // // // //               <thead>
// // // // //                 <tr style={{ backgroundColor: "#1976D2", color: "white" }}>
// // // // //                   {["Name", "Email", "Phone", "Total Spent", "Segment", "Loyalty Points", "Last Purchase", "Risk Level", "Actions"].map((header) => (
// // // // //                     <th
// // // // //                       key={header}
// // // // //                       onClick={() => header !== "Actions" && sortCustomers(header.toLowerCase().replace(" ", "_"))}
// // // // //                       style={{ 
// // // // //                         padding: "15px", 
// // // // //                         cursor: header !== "Actions" ? "pointer" : "default",
// // // // //                         textAlign: "left",
// // // // //                         fontWeight: "500",
// // // // //                         fontSize: "14px"
// // // // //                       }}
// // // // //                     >
// // // // //                       {header}
// // // // //                       {sortConfig.key === header.toLowerCase().replace(" ", "_") && (
// // // // //                         <span style={{ marginLeft: "5px" }}>
// // // // //                           {sortConfig.direction === "asc" ? "▲" : "▼"}
// // // // //                         </span>
// // // // //                       )}
// // // // //                     </th>
// // // // //                   ))}
// // // // //                 </tr>
// // // // //               </thead>
// // // // //               <tbody>
// // // // //                 {filteredCustomers.map((customer, index) => {
// // // // //                   const riskLevel = getCustomerRiskLevel(customer);
// // // // //                   return (
// // // // //                     <tr 
// // // // //                       key={index} 
// // // // //                       style={{ 
// // // // //                         backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
// // // // //                         transition: "background-color 0.2s",
// // // // //                         cursor: "pointer"
// // // // //                       }}
// // // // //                       onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f0f0f0"}
// // // // //                       onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? "#f9f9f9" : "#fff"}
// // // // //                     >
// // // // //                       <td style={{ padding: "12px", fontSize: "14px" }}>{customer.name}</td>
// // // // //                       <td style={{ padding: "12px", fontSize: "14px" }}>{customer.email}</td>
// // // // //                       <td style={{ padding: "12px", fontSize: "14px" }}>{customer.phone}</td>
// // // // //                       <td style={{ padding: "12px", fontSize: "14px", textAlign: "right" }}>{formatCurrency(customer.total_spent)}</td>
// // // // //                       <td style={{ padding: "12px", fontSize: "14px" }}>
// // // // //                         <span style={{ 
// // // // //                           backgroundColor: getSegmentColor(customer.segment, 0.1),
// // // // //                           color: getSegmentColor(customer.segment),
// // // // //                           padding: "5px 10px", 
// // // // //                           borderRadius: "4px",
// // // // //                           fontSize: "12px",
// // // // //                           fontWeight: "500"
// // // // //                         }}>
// // // // //                           {customer.segment}
// // // // //                         </span>
// // // // //                       </td>
// // // // //                       <td style={{ padding: "12px", fontSize: "14px" }}>{customer.loyaltyPoints}</td>
// // // // //                       <td style={{ padding: "12px", fontSize: "14px" }}>
// // // // //                         {customer.daysSinceLastPurchase !== null ? `${customer.daysSinceLastPurchase} days ago` : "N/A"}
// // // // //                       </td>
// // // // //                       <td style={{ padding: "12px", fontSize: "14px" }}>
// // // // //                         <span style={{ 
// // // // //                           backgroundColor: riskLevel.level === "high" ? "#FFEBEE" : 
// // // // //                             riskLevel.level === "medium" ? "#FFF3E0" : "#E8F5E9",
// // // // //                           color: riskLevel.level === "high" ? "#C62828" : 
// // // // //                             riskLevel.level === "medium" ? "#EF6C00" : "#2E7D32",
// // // // //                           padding: "5px 10px", 
// // // // //                           borderRadius: "4px",
// // // // //                           fontSize: "12px",
// // // // //                           fontWeight: "500"
// // // // //                         }}>
// // // // //                           {riskLevel.label}
// // // // //                         </span>
// // // // //                       </td>
// // // // //                       <td style={{ padding: "12px" }}>
// // // // //                         <button
// // // // //                           onClick={() => fetchPurchaseHistory(customer.phone)}
// // // // //                           style={{ 
// // // // //                             backgroundColor: "#2196F3", 
// // // // //                             color: "white", 
// // // // //                             padding: "8px 12px", 
// // // // //                             borderRadius: "4px", 
// // // // //                             border: "none",
// // // // //                             fontSize: "13px",
// // // // //                             cursor: "pointer",
// // // // //                             transition: "background-color 0.2s"
// // // // //                           }}
// // // // //                           onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1976D2"}
// // // // //                           onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#2196F3"}
// // // // //                         >
// // // // //                           View History
// // // // //                         </button>
// // // // //                       </td>
// // // // //                     </tr>
// // // // //                   );
// // // // //                 })}
// // // // //               </tbody>
// // // // //             </table>
// // // // //           </div>
// // // // //         ) : (
// // // // //           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
// // // // //             {filteredCustomers.map((customer, index) => {
// // // // //               const riskLevel = getCustomerRiskLevel(customer);
// // // // //               return (
// // // // //                 <div 
// // // // //                   key={index}
// // // // //                   style={{ 
// // // // //                     backgroundColor: "#fff",
// // // // //                     borderRadius: "12px",
// // // // //                     padding: "20px",
// // // // //                     boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // // //                     transition: "transform 0.2s",
// // // // //                     cursor: "pointer"
// // // // //                   }}
// // // // //                   onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
// // // // //                   onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
// // // // //                 >
// // // // //                   <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
// // // // //                     <div style={{ 
// // // // //                       width: "40px", 
// // // // //                       height: "40px", 
// // // // //                       borderRadius: "50%", 
// // // // //                       backgroundColor: getSegmentColor(customer.segment, 0.1),
// // // // //                       color: getSegmentColor(customer.segment),
// // // // //                       display: "flex", 
// // // // //                       alignItems: "center", 
// // // // //                       justifyContent: "center",
// // // // //                       fontSize: "18px",
// // // // //                       fontWeight: "500",
// // // // //                       marginRight: "12px"
// // // // //                     }}>
// // // // //                       {customer.name.charAt(0)}
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <div style={{ fontSize: "16px", fontWeight: "500" }}>{customer.name}</div>
// // // // //                       <div style={{ fontSize: "13px", color: "#666" }}>{customer.email}</div>
// // // // //                     </div>
// // // // //                   </div>
                  
// // // // //                   <div style={{ marginBottom: "15px" }}>
// // // // //                     <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
// // // // //                       <span style={{ fontSize: "13px", color: "#666" }}>Total Spent:</span>
// // // // //                       <span style={{ fontSize: "14px", fontWeight: "500" }}>{formatCurrency(customer.total_spent)}</span>
// // // // //                     </div>
// // // // //                     <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
// // // // //                       <span style={{ fontSize: "13px", color: "#666" }}>Loyalty Points:</span>
// // // // //                       <span style={{ fontSize: "14px", fontWeight: "500" }}>{customer.loyaltyPoints}</span>
// // // // //                     </div>
// // // // //                     <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
// // // // //                       <span style={{ fontSize: "13px", color: "#666" }}>Last Purchase:</span>
// // // // //                       <span style={{ fontSize: "14px", fontWeight: "500" }}>
// // // // //                         {customer.daysSinceLastPurchase !== null ? `${customer.daysSinceLastPurchase} days ago` : "N/A"}
// // // // //                       </span>
// // // // //                     </div>
// // // // //                   </div>
                  
// // // // //                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // // // //                     <span style={{ 
// // // // //                       backgroundColor: riskLevel.level === "high" ? "#FFEBEE" : 
// // // // //                         riskLevel.level === "medium" ? "#FFF3E0" : "#E8F5E9",
// // // // //                       color: riskLevel.level === "high" ? "#C62828" : 
// // // // //                         riskLevel.level === "medium" ? "#EF6C00" : "#2E7D32",
// // // // //                       padding: "5px 10px", 
// // // // //                       borderRadius: "4px",
// // // // //                       fontSize: "12px",
// // // // //                       fontWeight: "500"
// // // // //                     }}>
// // // // //                       {riskLevel.label}
// // // // //                     </span>
// // // // //                     <button
// // // // //                       onClick={() => fetchPurchaseHistory(customer.phone)}
// // // // //                       style={{ 
// // // // //                         backgroundColor: "#2196F3", 
// // // // //                         color: "white", 
// // // // //                         padding: "8px 12px", 
// // // // //                         borderRadius: "4px", 
// // // // //                         border: "none",
// // // // //                         fontSize: "13px",
// // // // //                         cursor: "pointer",
// // // // //                         transition: "background-color 0.2s"
// // // // //                       }}
// // // // //                       onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1976D2"}
// // // // //                       onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#2196F3"}
// // // // //                     >
// // // // //                       View History
// // // // //                     </button>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               );
// // // // //             })}
// // // // //           </div>
// // // // //         )}
// // // // //       </motion.div>
// // // // //             {/* Purchase History */}
// // // // //             {selectedCustomer && (
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0, y: 20 }}
// // // // //           animate={{ opacity: 1, y: 0 }}
// // // // //           transition={{ duration: 0.5 }}
// // // // //           style={{ marginTop: "25px" }}
// // // // //         >
// // // // //           <h3 style={{ color: "#1976D2", marginBottom: "15px" }}>Purchase History for {selectedCustomer}</h3>
// // // // //           {purchaseHistory.length > 0 ? (
// // // // //             <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "20px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
// // // // //               {purchaseHistory.map((purchase, index) => (
// // // // //                 <div 
// // // // //                   key={index}
// // // // //                   style={{ 
// // // // //                     backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
// // // // //                     padding: "15px", 
// // // // //                     borderRadius: "8px",
// // // // //                     marginBottom: "10px",
// // // // //                     transition: "transform 0.2s",
// // // // //                     cursor: "pointer"
// // // // //                   }}
// // // // //                   onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
// // // // //                   onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
// // // // //                 >
// // // // //                   <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
// // // // //                     <span style={{ fontSize: "14px", fontWeight: "500" }}>Date: {purchase.date}</span>
// // // // //                     <span style={{ fontSize: "14px", fontWeight: "500" }}>Total: {formatCurrency(purchase.total_amount)}</span>
// // // // //                   </div>
// // // // //                   <div style={{ fontSize: "13px", color: "#666" }}>
// // // // //                     <strong>Products:</strong> {purchase.products.map((p) => `${p.name} (x${p.quantity})`).join(", ")}
// // // // //                   </div>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           ) : (
// // // // //             <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>No purchase history found.</div>
// // // // //           )}
// // // // //         </motion.div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CustomerSegmentation;

// // // // // import React, { useState, useEffect } from "react";
// // // // // import { Chart } from "react-chartjs-2";
// // // // // import { CSVLink } from "react-csv";
// // // // // import "chart.js/auto";
// // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // const CustomerSegmentation = () => {
// // // // //   const [customers, setCustomers] = useState([]);
// // // // //   const [segment, setSegment] = useState("All");
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [error, setError] = useState(null);
// // // // //   const [loyaltyFilter, setLoyaltyFilter] = useState(0);
// // // // //   const [selectedCustomer, setSelectedCustomer] = useState(null);
// // // // //   const [purchaseHistory, setPurchaseHistory] = useState([]);
// // // // //   const [dateRange, setDateRange] = useState({ start: "", end: "" });
// // // // //   const [spendingFilter, setSpendingFilter] = useState({ min: 0, max: Infinity });
// // // // //   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
// // // // //   const [chartData, setChartData] = useState(null);
// // // // //   const [customerStats, setCustomerStats] = useState({});
// // // // //   const [activeTab, setActiveTab] = useState("data");
// // // // //   const [trendData, setTrendData] = useState(null);
// // // // //   const [viewMode, setViewMode] = useState("table");
// // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // //   const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
// // // // //   const [recencyFilter, setRecencyFilter] = useState(365); // Last X days
// // // // //   const [riskCategories, setRiskCategories] = useState({
// // // // //     churnRisk: [],
// // // // //     highValue: [],
// // // // //     potentialLoyalists: []
// // // // //   });
  
// // // // //   // New state for modal and purchase details
// // // // //   const [showPurchaseModal, setShowPurchaseModal] = useState(false);
// // // // //   const [selectedPurchase, setSelectedPurchase] = useState(null);
// // // // //   const [selectedCustomerDetails, setSelectedCustomerDetails] = useState(null);

// // // // //   // Fetch customer data
// // // // //   useEffect(() => {
// // // // //     const fetchCustomers = async () => {
// // // // //       setLoading(true);
// // // // //       try {
// // // // //         const params = new URLSearchParams({
// // // // //           storeId: localStorage.getItem("storeId"),
// // // // //           segment,
// // // // //           loyaltyPoints: loyaltyFilter,
// // // // //           ...(dateRange.start && { startDate: dateRange.start }),
// // // // //           ...(dateRange.end && { endDate: dateRange.end }),
// // // // //         });

// // // // //         const response = await fetch(`http://localhost:5008/api/customers?${params}`);
// // // // //         if (!response.ok) throw new Error("Failed to fetch customers");
// // // // //         const data = await response.json();

// // // // //         // Enrich with purchase history
// // // // //         const enrichedCustomers = await Promise.all(
// // // // //           data.customers.map(async (customer) => {
// // // // //             const history = await fetchPurchaseHistory(customer.phone, true);
// // // // //             const totalSpent = history.reduce((sum, p) => sum + (p.total_amount || 0), 0);
            
// // // // //             // Calculate additional metrics
// // // // //             const purchaseCount = history.length;
// // // // //             const lastPurchaseDate = history.length > 0 ? 
// // // // //               new Date(history.sort((a, b) => new Date(b.date) - new Date(a.date))[0].date) : null;
// // // // //             const daysSinceLastPurchase = lastPurchaseDate ? 
// // // // //               Math.floor((new Date() - lastPurchaseDate) / (1000 * 60 * 60 * 24)) : null;
// // // // //             const avgOrderValue = purchaseCount > 0 ? totalSpent / purchaseCount : 0;
// // // // //             const purchaseFrequency = purchaseCount > 0 ? 
// // // // //               (lastPurchaseDate ? Math.floor((new Date() - new Date(history[history.length-1].date)) / (1000 * 60 * 60 * 24)) / purchaseCount : null) : null;
              
// // // // //             return { 
// // // // //               ...customer, 
// // // // //               purchaseHistory: history, 
// // // // //               total_spent: totalSpent,
// // // // //               purchaseCount,
// // // // //               daysSinceLastPurchase,
// // // // //               avgOrderValue,
// // // // //               purchaseFrequency
// // // // //             };
// // // // //           })
// // // // //         );

// // // // //         setCustomers(enrichedCustomers);
// // // // //         calculateCustomerStats(enrichedCustomers);
// // // // //         updateChartData(enrichedCustomers);
// // // // //         generateTrendData(enrichedCustomers);
// // // // //         identifyCustomerCategories(enrichedCustomers);
// // // // //         setLoading(false);
// // // // //       } catch (err) {
// // // // //         setError(err.message);
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };
// // // // //     fetchCustomers();
// // // // //   }, [segment, loyaltyFilter, dateRange]);

// // // // //   // Fetch purchase history
// // // // //   const fetchPurchaseHistory = async (customerPhone, silent = false) => {
// // // // //     try {
// // // // //       const response = await fetch(
// // // // //         `http://localhost:5008/api/customers/${customerPhone}/purchase-history?storeId=${localStorage.getItem("storeId")}`
// // // // //       );
// // // // //       if (!response.ok) throw new Error("Failed to fetch purchase history");
// // // // //       const data = await response.json();
// // // // //       if (!silent) {
// // // // //         setPurchaseHistory(data.purchase_history || []);
// // // // //         setSelectedCustomer(customerPhone);
        
// // // // //         // Find and set customer details for the modal
// // // // //         const customer = customers.find(c => c.phone === customerPhone);
// // // // //         if (customer) {
// // // // //           setSelectedCustomerDetails(customer);
// // // // //         }
// // // // //       }
// // // // //       return data.purchase_history || [];
// // // // //     } catch (err) {
// // // // //       if (!silent) setError(err.message);
// // // // //       return [];
// // // // //     }
// // // // //   };

// // // // //   // Function to open purchase details modal
// // // // //   const openPurchaseDetails = (purchase) => {
// // // // //     setSelectedPurchase(purchase);
// // // // //     setShowPurchaseModal(true);
// // // // //   };

// // // // //   // Calculate customer stats
// // // // //   const calculateCustomerStats = (customerData) => {
// // // // //     const stats = customerData.reduce(
// // // // //       (acc, customer) => {
// // // // //         const purchaseCount = customer.purchaseHistory.length;
// // // // //         const totalSpent = customer.total_spent;
// // // // //         const avgPurchase = purchaseCount > 0 ? totalSpent / purchaseCount : 0;
        
// // // // //         // Calculate additional stats
// // // // //         const activeCustomers = acc.activeCustomers + (customer.daysSinceLastPurchase < 90 ? 1 : 0);
// // // // //         const inactiveCustomers = acc.inactiveCustomers + (customer.daysSinceLastPurchase >= 90 ? 1 : 0);
// // // // //         const highValueCustomers = acc.highValueCustomers + (customer.total_spent > 1000 ? 1 : 0);
        
// // // // //         return {
// // // // //           totalCustomers: acc.totalCustomers + 1,
// // // // //           totalPurchases: acc.totalPurchases + purchaseCount,
// // // // //           totalSpending: acc.totalSpending + totalSpent,
// // // // //           avgPurchaseValue:
// // // // //             (acc.avgPurchaseValue * acc.totalCustomers + avgPurchase) / (acc.totalCustomers + 1),
// // // // //           activeCustomers,
// // // // //           inactiveCustomers,
// // // // //           highValueCustomers,
// // // // //           loyaltyPointsAvg: acc.loyaltyPointsAvg + (customer.loyaltyPoints || 0),
// // // // //         };
// // // // //       },
// // // // //       { 
// // // // //         totalCustomers: 0, 
// // // // //         totalPurchases: 0, 
// // // // //         totalSpending: 0, 
// // // // //         avgPurchaseValue: 0,
// // // // //         activeCustomers: 0,
// // // // //         inactiveCustomers: 0,
// // // // //         highValueCustomers: 0,
// // // // //         loyaltyPointsAvg: 0
// // // // //       }
// // // // //     );
    
// // // // //     // Finalize averages
// // // // //     stats.loyaltyPointsAvg = stats.totalCustomers > 0 ? Math.round(stats.loyaltyPointsAvg / stats.totalCustomers) : 0;
    
// // // // //     setCustomerStats(stats);
// // // // //   };

// // // // //   // Generate trend data for charts
// // // // //   const generateTrendData = (customerData) => {
// // // // //     // Group purchases by month
// // // // //     const purchasesByMonth = {};
    
// // // // //     customerData.forEach(customer => {
// // // // //       customer.purchaseHistory.forEach(purchase => {
// // // // //         const date = new Date(purchase.date);
// // // // //         const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        
// // // // //         if (!purchasesByMonth[monthKey]) {
// // // // //           purchasesByMonth[monthKey] = {
// // // // //             totalAmount: 0,
// // // // //             purchaseCount: 0,
// // // // //             customerCount: new Set(),
// // // // //           };
// // // // //         }
        
// // // // //         purchasesByMonth[monthKey].totalAmount += purchase.total_amount || 0;
// // // // //         purchasesByMonth[monthKey].purchaseCount += 1;
// // // // //         purchasesByMonth[monthKey].customerCount.add(customer.phone);
// // // // //       });
// // // // //     });
    
// // // // //     // Convert to arrays for charts
// // // // //     const sortedMonths = Object.keys(purchasesByMonth).sort();
    
// // // // //     const trendData = {
// // // // //       revenue: {
// // // // //         labels: sortedMonths.map(month => {
// // // // //           const [year, monthNum] = month.split('-');
// // // // //           return `${monthNum}/${year.slice(2)}`;
// // // // //         }),
// // // // //         datasets: [{
// // // // //           label: 'Monthly Revenue',
// // // // //           data: sortedMonths.map(month => purchasesByMonth[month].totalAmount),
// // // // //           borderColor: '#2196F3',
// // // // //           backgroundColor: 'rgba(33, 150, 243, 0.2)',
// // // // //           fill: true,
// // // // //           tension: 0.4,
// // // // //         }]
// // // // //       },
// // // // //       purchases: {
// // // // //         labels: sortedMonths.map(month => {
// // // // //           const [year, monthNum] = month.split('-');
// // // // //           return `${monthNum}/${year.slice(2)}`;
// // // // //         }),
// // // // //         datasets: [{
// // // // //           label: 'Purchase Count',
// // // // //           data: sortedMonths.map(month => purchasesByMonth[month].purchaseCount),
// // // // //           borderColor: '#4CAF50',
// // // // //           backgroundColor: 'rgba(76, 175, 80, 0.2)',
// // // // //           fill: true,
// // // // //           tension: 0.4,
// // // // //         }]
// // // // //       },
// // // // //       customers: {
// // // // //         labels: sortedMonths.map(month => {
// // // // //           const [year, monthNum] = month.split('-');
// // // // //           return `${monthNum}/${year.slice(2)}`;
// // // // //         }),
// // // // //         datasets: [{
// // // // //           label: 'Active Customers',
// // // // //           data: sortedMonths.map(month => purchasesByMonth[month].customerCount.size),
// // // // //           borderColor: '#E91E63',
// // // // //           backgroundColor: 'rgba(233, 30, 99, 0.2)',
// // // // //           fill: true,
// // // // //           tension: 0.4,
// // // // //         }]
// // // // //       }
// // // // //     };
    
// // // // //     setTrendData(trendData);
// // // // //   };

// // // // //   // Identify customer categories for focused marketing
// // // // //   const identifyCustomerCategories = (customerData) => {
// // // // //     const categories = {
// // // // //       churnRisk: [],
// // // // //       highValue: [],
// // // // //       potentialLoyalists: []
// // // // //     };
    
// // // // //     customerData.forEach(customer => {
// // // // //       // Customers who haven't purchased in a while but were previously active
// // // // //       if (customer.purchaseCount > 3 && customer.daysSinceLastPurchase > 120) {
// // // // //         categories.churnRisk.push(customer);
// // // // //       }
      
// // // // //       // High value customers (high spending, frequent purchases)
// // // // //       if (customer.total_spent > 1000 && customer.purchaseCount > 5) {
// // // // //         categories.highValue.push(customer);
// // // // //       }
      
// // // // //       // Customers who show loyalty potential (moderate spending, recent activity)
// // // // //       if (customer.purchaseCount >= 2 && customer.purchaseCount < 5 && 
// // // // //           customer.daysSinceLastPurchase < 60 && customer.total_spent > 200) {
// // // // //         categories.potentialLoyalists.push(customer);
// // // // //       }
// // // // //     });
    
// // // // //     setRiskCategories(categories);
// // // // //   };

// // // // //   // Update chart data
// // // // //   const updateChartData = (customerData) => {
// // // // //     const segmentCounts = customerData.reduce((acc, customer) => {
// // // // //       acc[customer.segment] = (acc[customer.segment] || 0) + 1;
// // // // //       return acc;
// // // // //     }, {});

// // // // //     // Create spending by segment data
// // // // //     const spendingBySegment = customerData.reduce((acc, customer) => {
// // // // //       if (!acc[customer.segment]) {
// // // // //         acc[customer.segment] = 0;
// // // // //       }
// // // // //       acc[customer.segment] += customer.total_spent;
// // // // //       return acc;
// // // // //     }, {});

// // // // //     setChartData({
// // // // //       segments: {
// // // // //         labels: Object.keys(segmentCounts),
// // // // //         datasets: [{
// // // // //           label: "Customer Segments",
// // // // //           data: Object.values(segmentCounts),
// // // // //           backgroundColor: Object.keys(segmentCounts).map(seg => getSegmentColor(seg)),
// // // // //           borderWidth: 1,
// // // // //           borderColor: '#ffffff',
// // // // //         }],
// // // // //       },
// // // // //       spending: {
// // // // //         labels: Object.keys(spendingBySegment),
// // // // //         datasets: [{
// // // // //           label: "Spending by Segment",
// // // // //           data: Object.values(spendingBySegment),
// // // // //           backgroundColor: Object.keys(spendingBySegment).map(seg => getSegmentColor(seg, 0.7)),
// // // // //           borderWidth: 1,
// // // // //           borderColor: '#ffffff',
// // // // //         }],
// // // // //       },
// // // // //       loyalty: {
// // // // //         labels: ['0-50', '51-100', '101-200', '201-500', '501+'],
// // // // //         datasets: [{
// // // // //           label: "Loyalty Points Distribution",
// // // // //           data: [
// // // // //             customerData.filter(c => c.loyaltyPoints >= 0 && c.loyaltyPoints <= 50).length,
// // // // //             customerData.filter(c => c.loyaltyPoints > 50 && c.loyaltyPoints <= 100).length,
// // // // //             customerData.filter(c => c.loyaltyPoints > 100 && c.loyaltyPoints <= 200).length,
// // // // //             customerData.filter(c => c.loyaltyPoints > 200 && c.loyaltyPoints <= 500).length,
// // // // //             customerData.filter(c => c.loyaltyPoints > 500).length
// // // // //           ],
// // // // //           backgroundColor: [
// // // // //             'rgba(76, 175, 80, 0.7)',
// // // // //             'rgba(33, 150, 243, 0.7)',
// // // // //             'rgba(255, 193, 7, 0.7)',
// // // // //             'rgba(156, 39, 176, 0.7)',
// // // // //             'rgba(233, 30, 99, 0.7)'
// // // // //           ],
// // // // //           borderWidth: 1,
// // // // //           borderColor: '#ffffff',
// // // // //         }],
// // // // //       }
// // // // //     });
// // // // //   };

// // // // //   // Segment color mapping
// // // // //   const getSegmentColor = (segment, opacity = 1) => {
// // // // //     const colors = {
// // // // //       "High-Spender": `rgba(76, 175, 80, ${opacity})`,
// // // // //       "Medium-Spender": `rgba(33, 150, 243, ${opacity})`,
// // // // //       "Low-Spender": `rgba(255, 193, 7, ${opacity})`,
// // // // //       "Occasional": `rgba(156, 39, 176, ${opacity})`,
// // // // //       "Loyal": `rgba(233, 30, 99, ${opacity})`,
// // // // //       "New-Customer": `rgba(255, 87, 34, ${opacity})`,
// // // // //     };
// // // // //     return colors[segment] || `rgba(117, 117, 117, ${opacity})`;
// // // // //   };

// // // // //   // Format currency
// // // // //   const formatCurrency = (amount) =>
// // // // //     new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);

// // // // //   // Sorting function
// // // // //   const sortCustomers = (key) => {
// // // // //     const direction = sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
// // // // //     setSortConfig({ key, direction });
// // // // //     const sorted = [...customers].sort((a, b) => {
// // // // //       if (key === "total_spent" || key === "loyaltyPoints" || key === "purchaseCount" || 
// // // // //           key === "daysSinceLastPurchase" || key === "avgOrderValue") {
// // // // //         return direction === "asc" ? a[key] - b[key] : b[key] - a[key];
// // // // //       }
// // // // //       if (a[key] === null) return direction === "asc" ? 1 : -1;
// // // // //       if (b[key] === null) return direction === "asc" ? -1 : 1;
// // // // //       return direction === "asc" ? 
// // // // //         (a[key]?.toString() || "").localeCompare(b[key]?.toString() || "") : 
// // // // //         (b[key]?.toString() || "").localeCompare(a[key]?.toString() || "");
// // // // //     });
// // // // //     setCustomers(sorted);
// // // // //   };

// // // // //   // Filter customers
// // // // //   const filteredCustomers = customers
// // // // //     .filter(c => c.total_spent >= spendingFilter.min && c.total_spent <= spendingFilter.max)
// // // // //     .filter(c => !recencyFilter || c.daysSinceLastPurchase <= recencyFilter)
// // // // //     .filter(c => !searchTerm || 
// // // // //       c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
// // // // //       c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // //       c.phone.includes(searchTerm));

// // // // //   // Format date for display
// // // // //   const formatDate = (dateString) => {
// // // // //     const options = { year: 'numeric', month: 'short', day: 'numeric' };
// // // // //     return new Date(dateString).toLocaleDateString(undefined, options);
// // // // //   };

// // // // //   // CSV data for customers
// // // // //   const csvData = filteredCustomers.map(customer => ({
// // // // //     Name: customer.name,
// // // // //     Email: customer.email,
// // // // //     Phone: customer.phone,
// // // // //     "Total Spent": formatCurrency(customer.total_spent).replace('$', ''),
// // // // //     Segment: customer.segment,
// // // // //     "Loyalty Points": customer.loyaltyPoints,
// // // // //     "Purchase Count": customer.purchaseCount,
// // // // //     "Last Purchase (Days)": customer.daysSinceLastPurchase,
// // // // //     "Avg Order Value": formatCurrency(customer.avgOrderValue).replace('$', ''),
// // // // //   }));

// // // // //   // CSV data for purchase history
// // // // //   const purchaseHistoryCsvData = purchaseHistory.map(purchase => ({
// // // // //     Date: formatDate(purchase.date),
// // // // //     "Order ID": purchase.order_id || "N/A",
// // // // //     "Total Amount": formatCurrency(purchase.total_amount).replace('$', ''),
// // // // //     Products: purchase.products.map(p => `${p.name} (x${p.quantity})`).join("; "),
// // // // //   }));

// // // // //   // Get customer risk level indicator
// // // // //   const getCustomerRiskLevel = (customer) => {
// // // // //     if (!customer.daysSinceLastPurchase) return { level: "new", label: "New" };
// // // // //     if (customer.daysSinceLastPurchase > 180) return { level: "high", label: "High Risk" };
// // // // //     if (customer.daysSinceLastPurchase > 90) return { level: "medium", label: "Medium Risk" };
// // // // //     return { level: "low", label: "Low Risk" };
// // // // //   };

// // // // //   // Modal styles
// // // // //   const modalOverlayStyle = {
// // // // //     position: "fixed",
// // // // //     top: 0,
// // // // //     left: 0,
// // // // //     right: 0,
// // // // //     bottom: 0,
// // // // //     backgroundColor: "rgba(0, 0, 0, 0.6)",
// // // // //     display: "flex",
// // // // //     justifyContent: "center",
// // // // //     alignItems: "center",
// // // // //     zIndex: 1000,
// // // // //     backdropFilter: "blur(5px)"
// // // // //   };

// // // // //   const modalStyle = {
// // // // //     backgroundColor: "white",
// // // // //     borderRadius: "16px",
// // // // //     width: "90%",
// // // // //     maxWidth: "800px",
// // // // //     maxHeight: "90vh",
// // // // //     overflow: "hidden",
// // // // //     boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
// // // // //     display: "flex",
// // // // //     flexDirection: "column"
// // // // //   };

// // // // //   const modalHeaderStyle = {
// // // // //     padding: "20px 25px",
// // // // //     borderBottom: "1px solid #eee",
// // // // //     display: "flex",
// // // // //     justifyContent: "space-between",
// // // // //     alignItems: "center",
// // // // //     backgroundColor: "#f9f9f9"
// // // // //   };

// // // // //   const modalBodyStyle = {
// // // // //     padding: "25px",
// // // // //     overflowY: "auto",
// // // // //     maxHeight: "calc(90vh - 140px)"
// // // // //   };

// // // // //   const modalFooterStyle = {
// // // // //     padding: "15px 25px",
// // // // //     borderTop: "1px solid #eee",
// // // // //     display: "flex",
// // // // //     justifyContent: "flex-end",
// // // // //     backgroundColor: "#f9f9f9"
// // // // //   };

// // // // //   return (
// // // // //     <div className="customer-segmentation" style={{ 
// // // // //       fontFamily: "'Inter', 'Segoe UI', sans-serif", 
// // // // //       maxWidth: "1200px", 
// // // // //       margin: "0 auto", 
// // // // //       padding: "20px",
// // // // //       color: "#333",
// // // // //       background: "#fafafa",
// // // // //       borderRadius: "12px",
// // // // //       boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
// // // // //     }}>
// // // // //       <motion.h2 
// // // // //         initial={{ opacity: 0, y: -20 }}
// // // // //         animate={{ opacity: 1, y: 0 }}
// // // // //         transition={{ duration: 0.5 }}
// // // // //         style={{ 
// // // // //           borderBottom: "2px solid #2196F3", 
// // // // //           paddingBottom: "15px", 
// // // // //           color: "#1565C0",
// // // // //           fontSize: "28px",
// // // // //           fontWeight: "600",
// // // // //           marginBottom: "25px",
// // // // //           display: "flex",
// // // // //           justifyContent: "space-between",
// // // // //           alignItems: "center"
// // // // //         }}
// // // // //       >
// // // // //         <span>Customer Segmentation Analytics</span>
// // // // //         {/* Export to CSV button */}
// // // // //         <CSVLink 
// // // // //           data={csvData}
// // // // //           filename={"customer-data.csv"}
// // // // //           className="csv-link"
// // // // //           style={{
// // // // //             backgroundColor: "#4CAF50",
// // // // //             color: "white",
// // // // //             padding: "10px 15px",
// // // // //             borderRadius: "8px",
// // // // //             textDecoration: "none",
// // // // //             fontSize: "14px",
// // // // //             fontWeight: "500",
// // // // //             display: "flex",
// // // // //             alignItems: "center",
// // // // //             gap: "8px",
// // // // //             transition: "background-color 0.2s"
// // // // //           }}
// // // // //           target="_blank"
// // // // //         >
// // // // //           <span style={{ fontSize: "16px" }}>↓</span>
// // // // //           Export to CSV
// // // // //         </CSVLink>
// // // // //       </motion.h2>

// // // // //       {/* Quick Stats */}
// // // // //       {customerStats.totalCustomers > 0 && (
// // // // //         <motion.div 
// // // // //           initial={{ opacity: 0, y: 20 }}
// // // // //           animate={{ opacity: 1, y: 0 }}
// // // // //           transition={{ duration: 0.5, delay: 0.2 }}
// // // // //           style={{ 
// // // // //             marginBottom: "30px", 
// // // // //             display: "flex", 
// // // // //             gap: "20px", 
// // // // //             flexWrap: "wrap",
// // // // //             justifyContent: "space-between"
// // // // //           }}
// // // // //         >
// // // // //           <div style={{ 
// // // // //             backgroundColor: "#fff", 
// // // // //             padding: "20px", 
// // // // //             borderRadius: "12px", 
// // // // //             flex: "1",
// // // // //             minWidth: "200px",
// // // // //             boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // // //             transition: "transform 0.2s",
// // // // //             cursor: "pointer",
// // // // //             display: "flex",
// // // // //             flexDirection: "column",
// // // // //             alignItems: "center",
// // // // //             justifyContent: "center"
// // // // //           }}
// // // // //           onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
// // // // //           onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
// // // // //           >
// // // // //             <div style={{ fontSize: "36px", fontWeight: "700", color: "#1976D2", marginBottom: "5px" }}>
// // // // //               {customerStats.totalCustomers}
// // // // //             </div>
// // // // //             <div style={{ fontSize: "14px", color: "#666", textTransform: "uppercase", letterSpacing: "1px" }}>
// // // // //               Total Customers
// // // // //             </div>
// // // // //           </div>
          
// // // // //           <div style={{ 
// // // // //             backgroundColor: "#fff", 
// // // // //             padding: "20px", 
// // // // //             borderRadius: "12px", 
// // // // //             flex: "1",
// // // // //             minWidth: "200px",
// // // // //             boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // // //             transition: "transform 0.2s",
// // // // //             cursor: "pointer",
// // // // //             display: "flex",
// // // // //             flexDirection: "column",
// // // // //             alignItems: "center",
// // // // //             justifyContent: "center"
// // // // //           }}
// // // // //           onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
// // // // //           onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
// // // // //           >
// // // // //             <div style={{ fontSize: "36px", fontWeight: "700", color: "#4CAF50", marginBottom: "5px" }}>
// // // // //               {formatCurrency(customerStats.totalSpending)}
// // // // //             </div>
// // // // //             <div style={{ fontSize: "14px", color: "#666", textTransform: "uppercase", letterSpacing: "1px" }}>
// // // // //               Total Revenue
// // // // //             </div>
// // // // //           </div>
          
// // // // //           <div style={{ 
// // // // //             backgroundColor: "#fff", 
// // // // //             padding: "20px", 
// // // // //             borderRadius: "12px", 
// // // // //             flex: "1",
// // // // //             minWidth: "200px",
// // // // //             boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // // //             transition: "transform 0.2s",
// // // // //             cursor: "pointer",
// // // // //             display: "flex",
// // // // //             flexDirection: "column",
// // // // //             alignItems: "center",
// // // // //             justifyContent: "center"
// // // // //           }}
// // // // //           onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
// // // // //           onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
// // // // //           >
// // // // //             <div style={{ fontSize: "36px", fontWeight: "700", color: "#FF5722", marginBottom: "5px" }}>
// // // // //               {formatCurrency(customerStats.avgPurchaseValue)}
// // // // //             </div>
// // // // //             <div style={{ fontSize: "14px", color: "#666", textTransform: "uppercase", letterSpacing: "1px" }}>
// // // // //               Avg Order Value
// // // // //             </div>
// // // // //           </div>
          
// // // // //           <div style={{ 
// // // // //             backgroundColor: "#fff", 
// // // // //             padding: "20px", 
// // // // //             borderRadius: "12px", 
// // // // //             flex: "1",
// // // // //             minWidth: "200px",
// // // // //             boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // // //             transition: "transform 0.2s",
// // // // //             cursor: "pointer",
// // // // //             display: "flex",
// // // // //             flexDirection: "column",
// // // // //             alignItems: "center",
// // // // //             justifyContent: "center"
// // // // //           }}
// // // // //           onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
// // // // //           onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
// // // // //           >
// // // // //             <div style={{ fontSize: "36px", fontWeight: "700", color: "#9C27B0", marginBottom: "5px" }}>
// // // // //               {customerStats.activeCustomers}
// // // // //             </div>
// // // // //             <div style={{ fontSize: "14px", color: "#666", textTransform: "uppercase", letterSpacing: "1px" }}>
// // // // //               Active Customers
// // // // //             </div>
// // // // //           </div>
// // // // //         </motion.div>
// // // // //       )}

// // // // //       {/* Search & Advanced Filters Toggle */}
// // // // //       <motion.div
// // // // //         initial={{ opacity: 0 }}
// // // // //         animate={{ opacity: 1 }}
// // // // //         transition={{ duration: 0.5, delay: 0.3 }}
// // // // //         style={{ marginBottom: "20px", display: "flex", gap: "15px", flexWrap: "wrap", alignItems: "center" }}
// // // // //       >
// // // // //         <div style={{ flex: "1", minWidth: "250px" }}>
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Search by name, email or phone..."
// // // // //             value={searchTerm}
// // // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // // //             style={{ 
// // // // //               width: "100%", 
// // // // //               padding: "12px 15px", 
// // // // //               borderRadius: "8px", 
// // // // //               border: "1px solid #ddd",
// // // // //               fontSize: "15px",
// // // // //               transition: "all 0.2s",
// // // // //               boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
// // // // //             }}
// // // // //           />
// // // // //         </div>
// // // // //         <button 
// // // // //           onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
// // // // //           style={{
// // // // //             backgroundColor: showAdvancedFilters ? "#1976D2" : "#fff",
// // // // //             color: showAdvancedFilters ? "#fff" : "#1976D2",
// // // // //             padding: "12px 20px",
// // // // //             borderRadius: "8px",
// // // // //             border: "1px solid #1976D2",
// // // // //             cursor: "pointer",
// // // // //             fontWeight: "500",
// // // // //             transition: "all 0.2s",
// // // // //             display: "flex",
// // // // //             alignItems: "center",
// // // // //             gap: "8px"
// // // // //           }}
// // // // //         >
// // // // //           <span>{showAdvancedFilters ? "Hide" : "Show"} Advanced Filters</span>
// // // // //           <span style={{ fontSize: "10px", transform: showAdvancedFilters ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
// // // // //         </button>

// // // // //         <div style={{ marginLeft: "auto", display: "flex", gap: "10px" }}>
// // // // //           <button 
// // // // //             onClick={() => setViewMode("table")}
// // // // //             style={{
// // // // //               backgroundColor: viewMode === "table" ? "#1976D2" : "#fff",
// // // // //               color: viewMode === "table" ? "#fff" : "#1976D2",
// // // // //               padding: "12px 15px",
// // // // //               borderRadius: "8px",
// // // // //               border: "1px solid #1976D2",
// // // // //               cursor: "pointer",
// // // // //               fontWeight: "500",
// // // // //               transition: "all 0.2s"
// // // // //             }}
// // // // //           >
// // // // //             Table View
// // // // //           </button>
// // // // //           <button 
// // // // //             onClick={() => setViewMode("card")}
// // // // //             style={{
// // // // //               backgroundColor: viewMode === "card" ? "#1976D2" : "#fff",
// // // // //               color: viewMode === "card" ? "#fff" : "#1976D2",
// // // // //               padding: "12px 15px",
// // // // //               borderRadius: "8px",
// // // // //               border: "1px solid #1976D2",
// // // // //               cursor: "pointer",
// // // // //               fontWeight: "500",
// // // // //               transition: "all 0.2s"
// // // // //             }}
// // // // //           >
// // // // //             Card View
// // // // //           </button>
// // // // //         </div>
// // // // //       </motion.div>

// // // // //       {/* Advanced Filters */}
// // // // //       <AnimatePresence>
// // // // //         {showAdvancedFilters && (
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, height: 0 }}
// // // // //             animate={{ opacity: 1, height: "auto" }}
// // // // //             exit={{ opacity: 0, height: 0 }}
// // // // //             transition={{ duration: 0.3 }}
// // // // //             style={{ 
// // // // //               overflow: "hidden",
// // // // //               marginBottom: "25px", 
// // // // //               backgroundColor: "#fff", 
// // // // //               padding: "20px", 
// // // // //               borderRadius: "12px",
// // // // //               boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // // //             }}
// // // // //           >
// // // // //             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
// // // // //               <div style={{ minWidth: "200px", flex: "1" }}>
// // // // //               <label style={{ display: "block", fontWeight: "500", marginBottom: "8px", color: "#555" }}>Segment:</label>
// // // // //                 <select 
// // // // //                   value={segment} 
// // // // //                   onChange={(e) => setSegment(e.target.value)} 
// // // // //                   style={{ 
// // // // //                     width: "100%",
// // // // //                     padding: "12px", 
// // // // //                     borderRadius: "8px",
// // // // //                     border: "1px solid #ddd",
// // // // //                     backgroundColor: "#fff",
// // // // //                     fontSize: "15px"
// // // // //                   }}
// // // // //                 >
// // // // //                   <option value="All">All Customers</option>
// // // // //                   <option value="High-Spender">High Spender</option>
// // // // //                   <option value="Medium-Spender">Medium Spender</option>
// // // // //                   <option value="Low-Spender">Low Spender</option>
// // // // //                   <option value="Occasional">Occasional</option>
// // // // //                   <option value="Loyal">Loyal</option>
// // // // //                   <option value="New-Customer">New Customer</option>
// // // // //                 </select>
// // // // //               </div>
              
// // // // //               <div style={{ minWidth: "200px", flex: "1" }}>
// // // // //                 <label style={{ display: "block", fontWeight: "500", marginBottom: "8px", color: "#555" }}>Min Loyalty Points:</label>
// // // // //                 <input 
// // // // //                   type="number" 
// // // // //                   value={loyaltyFilter} 
// // // // //                   onChange={(e) => setLoyaltyFilter(e.target.value)} 
// // // // //                   style={{ 
// // // // //                     width: "100%",
// // // // //                     padding: "12px", 
// // // // //                     borderRadius: "8px",
// // // // //                     border: "1px solid #ddd",
// // // // //                     fontSize: "15px"
// // // // //                   }} 
// // // // //                 />
// // // // //               </div>
              
// // // // //               <div style={{ minWidth: "200px", flex: "1" }}>
// // // // //                 <label style={{ display: "block", fontWeight: "500", marginBottom: "8px", color: "#555" }}>Customer Activity (Last X Days):</label>
// // // // //                 <input 
// // // // //                   type="range" 
// // // // //                   min="30" 
// // // // //                   max="730" 
// // // // //                   step="30"
// // // // //                   value={recencyFilter} 
// // // // //                   onChange={(e) => setRecencyFilter(Number(e.target.value))} 
// // // // //                   style={{ 
// // // // //                     width: "100%",
// // // // //                   }} 
// // // // //                 />
// // // // //                 <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#666" }}>
// // // // //                   <span>30 days</span>
// // // // //                   <span>{recencyFilter} days</span>
// // // // //                   <span>2 years</span>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
            
// // // // //             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
// // // // //               <div style={{ flex: "1", minWidth: "200px" }}>
// // // // //                 <label style={{ display: "block", fontWeight: "500", marginBottom: "8px", color: "#555" }}>Date Range:</label>
// // // // //                 <div style={{ display: "flex", gap: "10px" }}>
// // // // //                   <input
// // // // //                     type="date"
// // // // //                     value={dateRange.start}
// // // // //                     onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
// // // // //                     style={{ 
// // // // //                       flex: "1",
// // // // //                       padding: "12px", 
// // // // //                       borderRadius: "8px",
// // // // //                       border: "1px solid #ddd",
// // // // //                       fontSize: "15px"
// // // // //                     }}
// // // // //                   />
// // // // //                   <input
// // // // //                     type="date"
// // // // //                     value={dateRange.end}
// // // // //                     onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
// // // // //                     style={{ 
// // // // //                       flex: "1",
// // // // //                       padding: "12px", 
// // // // //                       borderRadius: "8px",
// // // // //                       border: "1px solid #ddd",
// // // // //                       fontSize: "15px"
// // // // //                     }}
// // // // //                   />
// // // // //                 </div>
// // // // //               </div>
              
// // // // //               <div style={{ flex: "1", minWidth: "200px" }}>
// // // // //                 <label style={{ display: "block", fontWeight: "500", marginBottom: "8px", color: "#555" }}>Spending Range:</label>
// // // // //                 <div style={{ display: "flex", gap: "10px" }}>
// // // // //                   <input
// // // // //                     type="number"
// // // // //                     placeholder="Min"
// // // // //                     value={spendingFilter.min}
// // // // //                     onChange={(e) => setSpendingFilter({ ...spendingFilter, min: Number(e.target.value) })}
// // // // //                     style={{ 
// // // // //                       flex: "1",
// // // // //                       padding: "12px", 
// // // // //                       borderRadius: "8px",
// // // // //                       border: "1px solid #ddd",
// // // // //                       fontSize: "15px"
// // // // //                     }}
// // // // //                   />
// // // // //                   <input
// // // // //                     type="number"
// // // // //                     placeholder="Max"
// // // // //                     value={spendingFilter.max === Infinity ? "" : spendingFilter.max}
// // // // //                     onChange={(e) => setSpendingFilter({ ...spendingFilter, max: Number(e.target.value) || Infinity })}
// // // // //                     style={{ 
// // // // //                       flex: "1",
// // // // //                       padding: "12px", 
// // // // //                       borderRadius: "8px",
// // // // //                       border: "1px solid #ddd",
// // // // //                       fontSize: "15px"
// // // // //                     }}
// // // // //                   />
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>

// // // // //       {/* Main Content */}
// // // // //       <motion.div
// // // // //         initial={{ opacity: 0, y: 20 }}
// // // // //         animate={{ opacity: 1, y: 0 }}
// // // // //         transition={{ duration: 0.5, delay: 0.4 }}
// // // // //         style={{ marginBottom: "30px" }}
// // // // //       >
// // // // //         {loading ? (
// // // // //           <div style={{ textAlign: "center", padding: "30px" }}>
// // // // //             <div style={{ fontSize: "18px", color: "#666" }}>Loading customer data...</div>
// // // // //             <div style={{ marginTop: "10px" }}>⏳</div>
// // // // //           </div>
// // // // //         ) : error ? (
// // // // //           <div style={{ 
// // // // //             color: "#C62828", 
// // // // //             backgroundColor: "#FFEBEE", 
// // // // //             padding: "15px", 
// // // // //             borderRadius: "8px",
// // // // //             textAlign: "center"
// // // // //           }}>
// // // // //             {error}
// // // // //           </div>
// // // // //         ) : filteredCustomers.length === 0 ? (
// // // // //           <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>
// // // // //             No customers found matching the selected filters.
// // // // //           </div>
// // // // //         ) : viewMode === "table" ? (
// // // // //           <div style={{ overflowX: "auto", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", borderRadius: "12px" }}>
// // // // //             <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#fff" }}>
// // // // //               <thead>
// // // // //                 <tr style={{ backgroundColor: "#1976D2", color: "white" }}>
// // // // //                   {["Name", "Email", "Phone", "Total Spent", "Segment", "Loyalty Points", "Last Purchase", "Risk Level", "Actions"].map((header) => (
// // // // //                     <th
// // // // //                       key={header}
// // // // //                       onClick={() => header !== "Actions" && sortCustomers(header.toLowerCase().replace(" ", "_"))}
// // // // //                       style={{ 
// // // // //                         padding: "15px", 
// // // // //                         cursor: header !== "Actions" ? "pointer" : "default",
// // // // //                         textAlign: "left",
// // // // //                         fontWeight: "500",
// // // // //                         fontSize: "14px"
// // // // //                       }}
// // // // //                     >
// // // // //                       {header}
// // // // //                       {sortConfig.key === header.toLowerCase().replace(" ", "_") && (
// // // // //                         <span style={{ marginLeft: "5px" }}>
// // // // //                           {sortConfig.direction === "asc" ? "▲" : "▼"}
// // // // //                         </span>
// // // // //                       )}
// // // // //                     </th>
// // // // //                   ))}
// // // // //                 </tr>
// // // // //               </thead>
// // // // //               <tbody>
// // // // //                 {filteredCustomers.map((customer, index) => {
// // // // //                   const riskLevel = getCustomerRiskLevel(customer);
// // // // //                   return (
// // // // //                     <tr 
// // // // //                       key={index} 
// // // // //                       style={{ 
// // // // //                         backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
// // // // //                         transition: "background-color 0.2s",
// // // // //                         cursor: "pointer"
// // // // //                       }}
// // // // //                       onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f0f0f0"}
// // // // //                       onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? "#f9f9f9" : "#fff"}
// // // // //                     >
// // // // //                       <td style={{ padding: "12px", fontSize: "14px" }}>{customer.name}</td>
// // // // //                       <td style={{ padding: "12px", fontSize: "14px" }}>{customer.email}</td>
// // // // //                       <td style={{ padding: "12px", fontSize: "14px" }}>{customer.phone}</td>
// // // // //                       <td style={{ padding: "12px", fontSize: "14px", textAlign: "right" }}>{formatCurrency(customer.total_spent)}</td>
// // // // //                       <td style={{ padding: "12px", fontSize: "14px" }}>
// // // // //                         <span style={{ 
// // // // //                           backgroundColor: getSegmentColor(customer.segment, 0.1),
// // // // //                           color: getSegmentColor(customer.segment),
// // // // //                           padding: "5px 10px", 
// // // // //                           borderRadius: "4px",
// // // // //                           fontSize: "12px",
// // // // //                           fontWeight: "500"
// // // // //                         }}>
// // // // //                           {customer.segment}
// // // // //                         </span>
// // // // //                       </td>
// // // // //                       <td style={{ padding: "12px", fontSize: "14px" }}>{customer.loyaltyPoints}</td>
// // // // //                       <td style={{ padding: "12px", fontSize: "14px" }}>
// // // // //                         {customer.daysSinceLastPurchase !== null ? `${customer.daysSinceLastPurchase} days ago` : "N/A"}
// // // // //                       </td>
// // // // //                       <td style={{ padding: "12px", fontSize: "14px" }}>
// // // // //                         <span style={{ 
// // // // //                           backgroundColor: riskLevel.level === "high" ? "#FFEBEE" : 
// // // // //                             riskLevel.level === "medium" ? "#FFF3E0" : "#E8F5E9",
// // // // //                           color: riskLevel.level === "high" ? "#C62828" : 
// // // // //                             riskLevel.level === "medium" ? "#EF6C00" : "#2E7D32",
// // // // //                           padding: "5px 10px", 
// // // // //                           borderRadius: "4px",
// // // // //                           fontSize: "12px",
// // // // //                           fontWeight: "500"
// // // // //                         }}>
// // // // //                           {riskLevel.label}
// // // // //                         </span>
// // // // //                       </td>
// // // // //                       <td style={{ padding: "12px" }}>
// // // // //                         <button
// // // // //                           onClick={() => fetchPurchaseHistory(customer.phone)}
// // // // //                           style={{ 
// // // // //                             backgroundColor: "#2196F3", 
// // // // //                             color: "white", 
// // // // //                             padding: "8px 12px", 
// // // // //                             borderRadius: "4px", 
// // // // //                             border: "none",
// // // // //                             fontSize: "13px",
// // // // //                             cursor: "pointer",
// // // // //                             transition: "background-color 0.2s"
// // // // //                           }}
// // // // //                           onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1976D2"}
// // // // //                           onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#2196F3"}
// // // // //                         >
// // // // //                           View History
// // // // //                         </button>
// // // // //                       </td>
// // // // //                     </tr>
// // // // //                   );
// // // // //                 })}
// // // // //               </tbody>
// // // // //             </table>
// // // // //           </div>
// // // // //         ) : (
// // // // //           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
// // // // //             {filteredCustomers.map((customer, index) => {
// // // // //               const riskLevel = getCustomerRiskLevel(customer);
// // // // //               return (
// // // // //                 <div 
// // // // //                   key={index}
// // // // //                   style={{ 
// // // // //                     backgroundColor: "#fff",
// // // // //                     borderRadius: "12px",
// // // // //                     padding: "20px",
// // // // //                     boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // // //                     transition: "transform 0.2s",
// // // // //                     cursor: "pointer"
// // // // //                   }}
// // // // //                   onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
// // // // //                   onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
// // // // //                 >
// // // // //                   <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
// // // // //                     <div style={{ 
// // // // //                       width: "40px", 
// // // // //                       height: "40px", 
// // // // //                       borderRadius: "50%", 
// // // // //                       backgroundColor: getSegmentColor(customer.segment, 0.1),
// // // // //                       color: getSegmentColor(customer.segment),
// // // // //                       display: "flex", 
// // // // //                       alignItems: "center", 
// // // // //                       justifyContent: "center",
// // // // //                       fontSize: "18px",
// // // // //                       fontWeight: "500",
// // // // //                       marginRight: "12px"
// // // // //                     }}>
// // // // //                       {customer.name.charAt(0)}
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <div style={{ fontSize: "16px", fontWeight: "500" }}>{customer.name}</div>
// // // // //                       <div style={{ fontSize: "13px", color: "#666" }}>{customer.email}</div>
// // // // //                     </div>
// // // // //                   </div>
                  
// // // // //                   <div style={{ marginBottom: "15px" }}>
// // // // //                     <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
// // // // //                       <span style={{ fontSize: "13px", color: "#666" }}>Total Spent:</span>
// // // // //                       <span style={{ fontSize: "14px", fontWeight: "500" }}>{formatCurrency(customer.total_spent)}</span>
// // // // //                     </div>
// // // // //                     <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
// // // // //                       <span style={{ fontSize: "13px", color: "#666" }}>Loyalty Points:</span>
// // // // //                       <span style={{ fontSize: "14px", fontWeight: "500" }}>{customer.loyaltyPoints}</span>
// // // // //                     </div>
// // // // //                     <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
// // // // //                       <span style={{ fontSize: "13px", color: "#666" }}>Last Purchase:</span>
// // // // //                       <span style={{ fontSize: "14px", fontWeight: "500" }}>
// // // // //                         {customer.daysSinceLastPurchase !== null ? `${customer.daysSinceLastPurchase} days ago` : "N/A"}
// // // // //                       </span>
// // // // //                     </div>
// // // // //                   </div>
                  
// // // // //                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // // // //                     <span style={{ 
// // // // //                       backgroundColor: riskLevel.level === "high" ? "#FFEBEE" : 
// // // // //                         riskLevel.level === "medium" ? "#FFF3E0" : "#E8F5E9",
// // // // //                       color: riskLevel.level === "high" ? "#C62828" : 
// // // // //                         riskLevel.level === "medium" ? "#EF6C00" : "#2E7D32",
// // // // //                       padding: "5px 10px", 
// // // // //                       borderRadius: "4px",
// // // // //                       fontSize: "12px",
// // // // //                       fontWeight: "500"
// // // // //                     }}>
// // // // //                       {riskLevel.label}
// // // // //                     </span>
// // // // //                     <button
// // // // //                       onClick={() => fetchPurchaseHistory(customer.phone)}
// // // // //                       style={{ 
// // // // //                         backgroundColor: "#2196F3", 
// // // // //                         color: "white", 
// // // // //                         padding: "8px 12px", 
// // // // //                         borderRadius: "4px", 
// // // // //                         border: "none",
// // // // //                         fontSize: "13px",
// // // // //                         cursor: "pointer",
// // // // //                         transition: "background-color 0.2s"
// // // // //                       }}
// // // // //                       onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1976D2"}
// // // // //                       onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#2196F3"}
// // // // //                     >
// // // // //                       View History
// // // // //                     </button>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               );
// // // // //             })}
// // // // //           </div>
// // // // //         )}
// // // // //       </motion.div>

// // // // //       {/* Purchase History Modal */}
// // // // //       <AnimatePresence>
// // // // //         {showPurchaseModal && selectedPurchase && (
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0 }}
// // // // //             animate={{ opacity: 1 }}
// // // // //             exit={{ opacity: 0 }}
// // // // //             transition={{ duration: 0.3 }}
// // // // //             style={modalOverlayStyle}
// // // // //             onClick={() => setShowPurchaseModal(false)}
// // // // //           >
// // // // //             <motion.div
// // // // //               initial={{ y: 50, opacity: 0 }}
// // // // //               animate={{ y: 0, opacity: 1 }}
// // // // //               exit={{ y: 50, opacity: 0 }}
// // // // //               transition={{ duration: 0.3 }}
// // // // //               style={modalStyle}
// // // // //               onClick={(e) => e.stopPropagation()}
// // // // //             >
// // // // //               <div style={modalHeaderStyle}>
// // // // //                 <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "600" }}>
// // // // //                   Purchase Details
// // // // //                 </h3>
// // // // //                 <button
// // // // //                   onClick={() => setShowPurchaseModal(false)}
// // // // //                   style={{
// // // // //                     backgroundColor: "transparent",
// // // // //                     border: "none",
// // // // //                     fontSize: "20px",
// // // // //                     cursor: "pointer",
// // // // //                     color: "#666",
// // // // //                     padding: "5px"
// // // // //                   }}
// // // // //                 >
// // // // //                   ×
// // // // //                 </button>
// // // // //               </div>
// // // // //               <div style={modalBodyStyle}>
// // // // //                 <div style={{ marginBottom: "20px" }}>
// // // // //                   <h4 style={{ marginBottom: "10px", fontSize: "16px", fontWeight: "500" }}>Customer Details</h4>
// // // // //                   <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
// // // // //                     <div>
// // // // //                       <span style={{ fontSize: "14px", color: "#666" }}>Name:</span>
// // // // //                       <span style={{ fontSize: "14px", fontWeight: "500" }}>{selectedCustomerDetails?.name}</span>
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <span style={{ fontSize: "14px", color: "#666" }}>Email:</span>
// // // // //                       <span style={{ fontSize: "14px", fontWeight: "500" }}>{selectedCustomerDetails?.email}</span>
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <span style={{ fontSize: "14px", color: "#666" }}>Phone:</span>
// // // // //                       <span style={{ fontSize: "14px", fontWeight: "500" }}>{selectedCustomerDetails?.phone}</span>
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <span style={{ fontSize: "14px", color: "#666" }}>Segment:</span>
// // // // //                       <span style={{ fontSize: "14px", fontWeight: "500" }}>{selectedCustomerDetails?.segment}</span>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //                 <div>
// // // // //                   <h4 style={{ marginBottom: "10px", fontSize: "16px", fontWeight: "500" }}>Purchase Details</h4>
// // // // //                   <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
// // // // //                     <div>
// // // // //                       <span style={{ fontSize: "14px", color: "#666" }}>Date:</span>
// // // // //                       <span style={{ fontSize: "14px", fontWeight: "500" }}>{formatDate(selectedPurchase.date)}</span>
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <span style={{ fontSize: "14px", color: "#666" }}>Order ID:</span>
// // // // //                       <span style={{ fontSize: "14px", fontWeight: "500" }}>{selectedPurchase.order_id || "N/A"}</span>
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <span style={{ fontSize: "14px", color: "#666" }}>Total Amount:</span>
// // // // //                       <span style={{ fontSize: "14px", fontWeight: "500" }}>{formatCurrency(selectedPurchase.total_amount)}</span>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                   <div style={{ marginTop: "20px" }}>
// // // // //                     <h5 style={{ marginBottom: "10px", fontSize: "14px", fontWeight: "500" }}>Products Purchased</h5>
// // // // //                     <ul style={{ listStyle: "none", padding: 0 }}>
// // // // //                       {selectedPurchase.products.map((product, index) => (
// // // // //                         <li key={index} style={{ marginBottom: "10px", padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
// // // // //                           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // // // //                             <span style={{ fontSize: "14px", fontWeight: "500" }}>{product.name}</span>
// // // // //                             <span style={{ fontSize: "14px", color: "#666" }}>x{product.quantity}</span>
// // // // //                           </div>
// // // // //                           <div style={{ fontSize: "13px", color: "#666" }}>
// // // // //                             Price: {formatCurrency(product.price)}
// // // // //                           </div>
// // // // //                         </li>
// // // // //                       ))}
// // // // //                     </ul>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //               <div style={modalFooterStyle}>
// // // // //                 <CSVLink
// // // // //                   data={purchaseHistoryCsvData}
// // // // //                   filename={`purchase-history-${selectedCustomerDetails?.phone}.csv`}
// // // // //                   style={{
// // // // //                     backgroundColor: "#4CAF50",
// // // // //                     color: "white",
// // // // //                     padding: "10px 15px",
// // // // //                     borderRadius: "8px",
// // // // //                     textDecoration: "none",
// // // // //                     fontSize: "14px",
// // // // //                     fontWeight: "500",
// // // // //                     display: "flex",
// // // // //                     alignItems: "center",
// // // // //                     gap: "8px",
// // // // //                     transition: "background-color 0.2s"
// // // // //                   }}
// // // // //                   target="_blank"
// // // // //                 >
// // // // //                   <span style={{ fontSize: "16px" }}>↓</span>
// // // // //                   Export Purchase History
// // // // //                 </CSVLink>
// // // // //               </div>
// // // // //             </motion.div>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>

// // // // //       {/* Purchase History Section */}
// // // // //       {selectedCustomer && (
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0, y: 20 }}
// // // // //           animate={{ opacity: 1, y: 0 }}
// // // // //           transition={{ duration: 0.5 }}
// // // // //           style={{ marginTop: "25px" }}
// // // // //         >
// // // // //           <h3 style={{ color: "#1976D2", marginBottom: "15px" }}>Purchase History for {selectedCustomer}</h3>
// // // // //           {purchaseHistory.length > 0 ? (
// // // // //             <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "20px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
// // // // //               {purchaseHistory.map((purchase, index) => (
// // // // //                 <div 
// // // // //                   key={index}
// // // // //                   style={{ 
// // // // //                     backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
// // // // //                     padding: "15px", 
// // // // //                     borderRadius: "8px",
// // // // //                     marginBottom: "10px",
// // // // //                     transition: "transform 0.2s",
// // // // //                     cursor: "pointer"
// // // // //                   }}
// // // // //                   onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
// // // // //                   onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
// // // // //                   onClick={() => openPurchaseDetails(purchase)}
// // // // //                 >
// // // // //                   <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
// // // // //                     <span style={{ fontSize: "14px", fontWeight: "500" }}>Date: {formatDate(purchase.date)}</span>
// // // // //                     <span style={{ fontSize: "14px", fontWeight: "500" }}>Total: {formatCurrency(purchase.total_amount)}</span>
// // // // //                   </div>
// // // // //                   <div style={{ fontSize: "13px", color: "#666" }}>
// // // // //                     <strong>Products:</strong> {purchase.products.map((p) => `${p.name} (x${p.quantity})`).join(", ")}
// // // // //                   </div>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           ) : (
// // // // //             <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>No purchase history found.</div>
// // // // //           )}
// // // // //         </motion.div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CustomerSegmentation;
// // // // // import React, { useState, useEffect } from "react";
// // // // // import { Chart } from "react-chartjs-2";
// // // // // import { CSVLink } from "react-csv";
// // // // // import "chart.js/auto";
// // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // const CustomerSegmentation = () => {
// // // // //   const [customers, setCustomers] = useState([]);
// // // // //   const [segment, setSegment] = useState("All");
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [error, setError] = useState(null);
// // // // //   const [loyaltyFilter, setLoyaltyFilter] = useState(0);
// // // // //   const [selectedCustomer, setSelectedCustomer] = useState(null);
// // // // //   const [purchaseHistory, setPurchaseHistory] = useState([]);
// // // // //   const [dateRange, setDateRange] = useState({ start: "", end: "" });
// // // // //   const [spendingFilter, setSpendingFilter] = useState({ min: 0, max: Infinity });
// // // // //   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
// // // // //   const [chartData, setChartData] = useState(null);
// // // // //   const [customerStats, setCustomerStats] = useState({});
// // // // //   const [activeTab, setActiveTab] = useState("data");
// // // // //   const [trendData, setTrendData] = useState(null);
// // // // //   const [viewMode, setViewMode] = useState("table");
// // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // //   const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
// // // // //   const [recencyFilter, setRecencyFilter] = useState(365);
// // // // //   const [riskCategories, setRiskCategories] = useState({
// // // // //     churnRisk: [],
// // // // //     highValue: [],
// // // // //     potentialLoyalists: []
// // // // //   });
// // // // //   const [showPurchaseModal, setShowPurchaseModal] = useState(false);
// // // // //   const [selectedPurchase, setSelectedPurchase] = useState(null);
// // // // //   const [selectedCustomerDetails, setSelectedCustomerDetails] = useState(null);
// // // // //   const [purchaseStats, setPurchaseStats] = useState(null);

// // // // //   useEffect(() => {
// // // // //     const fetchCustomers = async () => {
// // // // //       setLoading(true);
// // // // //       try {
// // // // //         const params = new URLSearchParams({
// // // // //           storeId: localStorage.getItem("storeId"),
// // // // //           segment,
// // // // //           loyaltyPoints: loyaltyFilter,
// // // // //           ...(dateRange.start && { startDate: dateRange.start }),
// // // // //           ...(dateRange.end && { endDate: dateRange.end }),
// // // // //         });

// // // // //         const response = await fetch(`http://localhost:5008/api/customers?${params}`);
// // // // //         if (!response.ok) throw new Error("Failed to fetch customers");
// // // // //         const data = await response.json();

// // // // //         const enrichedCustomers = await Promise.all(
// // // // //           data.customers.map(async (customer) => {
// // // // //             const history = await fetchPurchaseHistory(customer.phone, true);
// // // // //             const totalSpent = history.reduce((sum, p) => sum + (p.total_amount || 0), 0);
// // // // //             const purchaseCount = history.length;
// // // // //             const lastPurchaseDate = history.length > 0 ? 
// // // // //               new Date(history.sort((a, b) => new Date(b.date) - new Date(a.date))[0].date) : null;
// // // // //             const daysSinceLastPurchase = lastPurchaseDate ? 
// // // // //               Math.floor((new Date() - lastPurchaseDate) / (1000 * 60 * 60 * 24)) : null;
// // // // //             const avgOrderValue = purchaseCount > 0 ? totalSpent / purchaseCount : 0;
// // // // //             const purchaseFrequency = purchaseCount > 0 ? 
// // // // //               (lastPurchaseDate ? Math.floor((new Date() - new Date(history[history.length-1].date)) / (1000 * 60 * 60 * 24)) / purchaseCount : null) : null;
              
// // // // //             return { 
// // // // //               ...customer, 
// // // // //               purchaseHistory: history, 
// // // // //               total_spent: totalSpent,
// // // // //               purchaseCount,
// // // // //               daysSinceLastPurchase,
// // // // //               avgOrderValue,
// // // // //               purchaseFrequency
// // // // //             };
// // // // //           })
// // // // //         );

// // // // //         setCustomers(enrichedCustomers);
// // // // //         calculateCustomerStats(enrichedCustomers);
// // // // //         updateChartData(enrichedCustomers);
// // // // //         generateTrendData(enrichedCustomers);
// // // // //         identifyCustomerCategories(enrichedCustomers);
// // // // //         setLoading(false);
// // // // //       } catch (err) {
// // // // //         setError(err.message);
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };
// // // // //     fetchCustomers();
// // // // //   }, [segment, loyaltyFilter, dateRange]);

// // // // //   const fetchPurchaseHistory = async (customerPhone, silent = false) => {
// // // // //     try {
// // // // //       const response = await fetch(
// // // // //         `http://localhost:5008/api/customers/${customerPhone}/purchase-history?storeId=${localStorage.getItem("storeId")}`
// // // // //       );
// // // // //       if (!response.ok) throw new Error("Failed to fetch purchase history");
// // // // //       const data = await response.json();
// // // // //       if (!silent) {
// // // // //         setPurchaseHistory(data.purchase_history || []);
// // // // //         setSelectedCustomer(customerPhone);
        
// // // // //         const customer = customers.find(c => c.phone === customerPhone);
// // // // //         if (customer) {
// // // // //           setSelectedCustomerDetails(customer);
// // // // //           setPurchaseStats(calculatePurchaseStats(data.purchase_history || []));
// // // // //         }
// // // // //         setShowPurchaseModal(true);
// // // // //       }
// // // // //       return data.purchase_history || [];
// // // // //     } catch (err) {
// // // // //       if (!silent) setError(err.message);
// // // // //       return [];
// // // // //     }
// // // // //   };

// // // // //   const calculateCustomerStats = (customerData) => {
// // // // //     const stats = customerData.reduce(
// // // // //       (acc, customer) => {
// // // // //         const purchaseCount = customer.purchaseHistory.length;
// // // // //         const totalSpent = customer.total_spent;
// // // // //         const avgPurchase = purchaseCount > 0 ? totalSpent / purchaseCount : 0;
        
// // // // //         return {
// // // // //           totalCustomers: acc.totalCustomers + 1,
// // // // //           totalPurchases: acc.totalPurchases + purchaseCount,
// // // // //           totalSpending: acc.totalSpending + totalSpent,
// // // // //           avgPurchaseValue:
// // // // //             (acc.avgPurchaseValue * acc.totalCustomers + avgPurchase) / (acc.totalCustomers + 1),
// // // // //           activeCustomers: acc.activeCustomers + (customer.daysSinceLastPurchase < 90 ? 1 : 0),
// // // // //           inactiveCustomers: acc.inactiveCustomers + (customer.daysSinceLastPurchase >= 90 ? 1 : 0),
// // // // //           highValueCustomers: acc.highValueCustomers + (customer.total_spent > 1000 ? 1 : 0),
// // // // //           loyaltyPointsAvg: acc.loyaltyPointsAvg + (customer.loyaltyPoints || 0),
// // // // //         };
// // // // //       },
// // // // //       { 
// // // // //         totalCustomers: 0, 
// // // // //         totalPurchases: 0, 
// // // // //         totalSpending: 0, 
// // // // //         avgPurchaseValue: 0,
// // // // //         activeCustomers: 0,
// // // // //         inactiveCustomers: 0,
// // // // //         highValueCustomers: 0,
// // // // //         loyaltyPointsAvg: 0
// // // // //       }
// // // // //     );
    
// // // // //     stats.loyaltyPointsAvg = stats.totalCustomers > 0 ? Math.round(stats.loyaltyPointsAvg / stats.totalCustomers) : 0;
// // // // //     setCustomerStats(stats);
// // // // //   };

// // // // //   const calculatePurchaseStats = (history) => {
// // // // //     const totalSpent = history.reduce((sum, p) => sum + (p.total_amount || 0), 0);
// // // // //     const avgPurchase = history.length > 0 ? totalSpent / history.length : 0;
// // // // //     const purchaseDates = history.map(p => new Date(p.date));
// // // // //     const frequency = history.length > 1 ? 
// // // // //       (Math.max(...purchaseDates) - Math.min(...purchaseDates)) / (1000 * 60 * 60 * 24) / (history.length - 1) 
// // // // //       : 0;

// // // // //     const purchasesByMonth = history.reduce((acc, purchase) => {
// // // // //       const date = new Date(purchase.date);
// // // // //       const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
// // // // //       acc[monthKey] = (acc[monthKey] || 0) + purchase.total_amount;
// // // // //       return acc;
// // // // //     }, {});

// // // // //     const purchaseTrendData = {
// // // // //       labels: Object.keys(purchasesByMonth).sort().map(month => {
// // // // //         const [year, monthNum] = month.split('-');
// // // // //         return `${monthNum}/${year.slice(2)}`;
// // // // //       }),
// // // // //       datasets: [{
// // // // //         label: 'Purchase Amount',
// // // // //         data: Object.keys(purchasesByMonth).sort().map(month => purchasesByMonth[month]),
// // // // //         borderColor: '#2196F3',
// // // // //         backgroundColor: 'rgba(33, 150, 243, 0.2)',
// // // // //         fill: true,
// // // // //         tension: 0.4,
// // // // //       }]
// // // // //     };

// // // // //     return {
// // // // //       totalSpent,
// // // // //       avgPurchase,
// // // // //       purchaseCount: history.length,
// // // // //       frequency: Math.round(frequency),
// // // // //       purchaseTrendData
// // // // //     };
// // // // //   };

// // // // //   const generateTrendData = (customerData) => {
// // // // //     const purchasesByMonth = {};
// // // // //     customerData.forEach(customer => {
// // // // //       customer.purchaseHistory.forEach(purchase => {
// // // // //         const date = new Date(purchase.date);
// // // // //         const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
// // // // //         if (!purchasesByMonth[monthKey]) {
// // // // //           purchasesByMonth[monthKey] = {
// // // // //             totalAmount: 0,
// // // // //             purchaseCount: 0,
// // // // //             customerCount: new Set(),
// // // // //           };
// // // // //         }
// // // // //         purchasesByMonth[monthKey].totalAmount += purchase.total_amount || 0;
// // // // //         purchasesByMonth[monthKey].purchaseCount += 1;
// // // // //         purchasesByMonth[monthKey].customerCount.add(customer.phone);
// // // // //       });
// // // // //     });

// // // // //     const sortedMonths = Object.keys(purchasesByMonth).sort();
// // // // //     const trendData = {
// // // // //       revenue: {
// // // // //         labels: sortedMonths.map(month => {
// // // // //           const [year, monthNum] = month.split('-');
// // // // //           return `${monthNum}/${year.slice(2)}`;
// // // // //         }),
// // // // //         datasets: [{
// // // // //           label: 'Monthly Revenue',
// // // // //           data: sortedMonths.map(month => purchasesByMonth[month].totalAmount),
// // // // //           borderColor: '#2196F3',
// // // // //           backgroundColor: 'rgba(33, 150, 243, 0.2)',
// // // // //           fill: true,
// // // // //           tension: 0.4,
// // // // //         }]
// // // // //       },
// // // // //       purchases: {
// // // // //         labels: sortedMonths.map(month => {
// // // // //           const [year, monthNum] = month.split('-');
// // // // //           return `${monthNum}/${year.slice(2)}`;
// // // // //         }),
// // // // //         datasets: [{
// // // // //           label: 'Purchase Count',
// // // // //           data: sortedMonths.map(month => purchasesByMonth[month].purchaseCount),
// // // // //           borderColor: '#4CAF50',
// // // // //           backgroundColor: 'rgba(76, 175, 80, 0.2)',
// // // // //           fill: true,
// // // // //           tension: 0.4,
// // // // //         }]
// // // // //       },
// // // // //       customers: {
// // // // //         labels: sortedMonths.map(month => {
// // // // //           const [year, monthNum] = month.split('-');
// // // // //           return `${monthNum}/${year.slice(2)}`;
// // // // //         }),
// // // // //         datasets: [{
// // // // //           label: 'Active Customers',
// // // // //           data: sortedMonths.map(month => purchasesByMonth[month].customerCount.size),
// // // // //           borderColor: '#E91E63',
// // // // //           backgroundColor: 'rgba(233, 30, 99, 0.2)',
// // // // //           fill: true,
// // // // //           tension: 0.4,
// // // // //         }]
// // // // //       }
// // // // //     };
// // // // //     setTrendData(trendData);
// // // // //   };

// // // // //   const identifyCustomerCategories = (customerData) => {
// // // // //     const categories = {
// // // // //       churnRisk: [],
// // // // //       highValue: [],
// // // // //       potentialLoyalists: []
// // // // //     };
    
// // // // //     customerData.forEach(customer => {
// // // // //       if (customer.purchaseCount > 3 && customer.daysSinceLastPurchase > 120) {
// // // // //         categories.churnRisk.push(customer);
// // // // //       }
// // // // //       if (customer.total_spent > 1000 && customer.purchaseCount > 5) {
// // // // //         categories.highValue.push(customer);
// // // // //       }
// // // // //       if (customer.purchaseCount >= 2 && customer.purchaseCount < 5 && 
// // // // //           customer.daysSinceLastPurchase < 60 && customer.total_spent > 200) {
// // // // //         categories.potentialLoyalists.push(customer);
// // // // //       }
// // // // //     });
// // // // //     setRiskCategories(categories);
// // // // //   };

// // // // //   const updateChartData = (customerData) => {
// // // // //     const segmentCounts = customerData.reduce((acc, customer) => {
// // // // //       acc[customer.segment] = (acc[customer.segment] || 0) + 1;
// // // // //       return acc;
// // // // //     }, {});

// // // // //     const spendingBySegment = customerData.reduce((acc, customer) => {
// // // // //       if (!acc[customer.segment]) {
// // // // //         acc[customer.segment] = 0;
// // // // //       }
// // // // //       acc[customer.segment] += customer.total_spent;
// // // // //       return acc;
// // // // //     }, {});

// // // // //     setChartData({
// // // // //       segments: {
// // // // //         labels: Object.keys(segmentCounts),
// // // // //         datasets: [{
// // // // //           label: "Customer Segments",
// // // // //           data: Object.values(segmentCounts),
// // // // //           backgroundColor: Object.keys(segmentCounts).map(seg => getSegmentColor(seg)),
// // // // //           borderWidth: 1,
// // // // //           borderColor: '#ffffff',
// // // // //         }],
// // // // //       },
// // // // //       spending: {
// // // // //         labels: Object.keys(spendingBySegment),
// // // // //         datasets: [{
// // // // //           label: "Spending by Segment",
// // // // //           data: Object.values(spendingBySegment),
// // // // //           backgroundColor: Object.keys(spendingBySegment).map(seg => getSegmentColor(seg, 0.7)),
// // // // //           borderWidth: 1,
// // // // //           borderColor: '#ffffff',
// // // // //         }],
// // // // //       },
// // // // //       loyalty: {
// // // // //         labels: ['0-50', '51-100', '101-200', '201-500', '501+'],
// // // // //         datasets: [{
// // // // //           label: "Loyalty Points Distribution",
// // // // //           data: [
// // // // //             customerData.filter(c => c.loyaltyPoints >= 0 && c.loyaltyPoints <= 50).length,
// // // // //             customerData.filter(c => c.loyaltyPoints > 50 && c.loyaltyPoints <= 100).length,
// // // // //             customerData.filter(c => c.loyaltyPoints > 100 && c.loyaltyPoints <= 200).length,
// // // // //             customerData.filter(c => c.loyaltyPoints > 200 && c.loyaltyPoints <= 500).length,
// // // // //             customerData.filter(c => c.loyaltyPoints > 500).length
// // // // //           ],
// // // // //           backgroundColor: [
// // // // //             'rgba(76, 175, 80, 0.7)',
// // // // //             'rgba(33, 150, 243, 0.7)',
// // // // //             'rgba(255, 193, 7, 0.7)',
// // // // //             'rgba(156, 39, 176, 0.7)',
// // // // //             'rgba(233, 30, 99, 0.7)'
// // // // //           ],
// // // // //           borderWidth: 1,
// // // // //           borderColor: '#ffffff',
// // // // //         }],
// // // // //       }
// // // // //     });
// // // // //   };

// // // // //   const getSegmentColor = (segment, opacity = 1) => {
// // // // //     const colors = {
// // // // //       "High-Spender": `rgba(76, 175, 80, ${opacity})`,
// // // // //       "Medium-Spender": `rgba(33, 150, 243, ${opacity})`,
// // // // //       "Low-Spender": `rgba(255, 193, 7, ${opacity})`,
// // // // //       "Occasional": `rgba(156, 39, 176, ${opacity})`,
// // // // //       "Loyal": `rgba(233, 30, 99, ${opacity})`,
// // // // //       "New-Customer": `rgba(255, 87, 34, ${opacity})`,
// // // // //     };
// // // // //     return colors[segment] || `rgba(117, 117, 117, ${opacity})`;
// // // // //   };

// // // // //   const formatCurrency = (amount) =>
// // // // //     new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);

// // // // //   const sortCustomers = (key) => {
// // // // //     const direction = sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
// // // // //     setSortConfig({ key, direction });
// // // // //     const sorted = [...customers].sort((a, b) => {
// // // // //       if (key === "total_spent" || key === "loyaltyPoints" || key === "purchaseCount" || 
// // // // //           key === "daysSinceLastPurchase" || key === "avgOrderValue") {
// // // // //         return direction === "asc" ? a[key] - b[key] : b[key] - a[key];
// // // // //       }
// // // // //       if (a[key] === null) return direction === "asc" ? 1 : -1;
// // // // //       if (b[key] === null) return direction === "asc" ? -1 : 1;
// // // // //       return direction === "asc" ? 
// // // // //         (a[key]?.toString() || "").localeCompare(b[key]?.toString() || "") : 
// // // // //         (b[key]?.toString() || "").localeCompare(a[key]?.toString() || "");
// // // // //     });
// // // // //     setCustomers(sorted);
// // // // //   };

// // // // //   const filteredCustomers = customers
// // // // //     .filter(c => c.total_spent >= spendingFilter.min && c.total_spent <= spendingFilter.max)
// // // // //     .filter(c => !recencyFilter || c.daysSinceLastPurchase <= recencyFilter)
// // // // //     .filter(c => !searchTerm || 
// // // // //       c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
// // // // //       c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // //       c.phone.includes(searchTerm));

// // // // //   const formatDate = (dateString) => {
// // // // //     const options = { year: 'numeric', month: 'short', day: 'numeric' };
// // // // //     return new Date(dateString).toLocaleDateString(undefined, options);
// // // // //   };

// // // // //   const csvData = filteredCustomers.map(customer => ({
// // // // //     Name: customer.name,
// // // // //     Email: customer.email,
// // // // //     Phone: customer.phone,
// // // // //     "Total Spent": formatCurrency(customer.total_spent).replace('$', ''),
// // // // //     Segment: customer.segment,
// // // // //     "Loyalty Points": customer.loyaltyPoints,
// // // // //     "Purchase Count": customer.purchaseCount,
// // // // //     "Last Purchase (Days)": customer.daysSinceLastPurchase,
// // // // //     "Avg Order Value": formatCurrency(customer.avgOrderValue).replace('$', ''),
// // // // //   }));

// // // // //   const purchaseHistoryCsvData = purchaseHistory.map(purchase => ({
// // // // //     Date: formatDate(purchase.date),
// // // // //     "Order ID": purchase.order_id || "N/A",
// // // // //     "Total Amount": formatCurrency(purchase.total_amount).replace('$', ''),
// // // // //     Products: purchase.products.map(p => `${p.name} (x${p.quantity})`).join("; "),
// // // // //   }));

// // // // //   const getCustomerRiskLevel = (customer) => {
// // // // //     if (!customer.daysSinceLastPurchase) return { level: "new", label: "New" };
// // // // //     if (customer.daysSinceLastPurchase > 180) return { level: "high", label: "High Risk" };
// // // // //     if (customer.daysSinceLastPurchase > 90) return { level: "medium", label: "Medium Risk" };
// // // // //     return { level: "low", label: "Low Risk" };
// // // // //   };

// // // // //   const modalOverlayStyle = {
// // // // //     position: "fixed",
// // // // //     top: 0,
// // // // //     left: 0,
// // // // //     right: 0,
// // // // //     bottom: 0,
// // // // //     backgroundColor: "rgba(0, 0, 0, 0.6)",
// // // // //     display: "flex",
// // // // //     justifyContent: "center",
// // // // //     alignItems: "center",
// // // // //     zIndex: 1000,
// // // // //     backdropFilter: "blur(5px)"
// // // // //   };

// // // // //   const modalStyle = {
// // // // //     backgroundColor: "white",
// // // // //     borderRadius: "16px",
// // // // //     width: "90%",
// // // // //     maxWidth: "800px",
// // // // //     maxHeight: "90vh",
// // // // //     overflow: "hidden",
// // // // //     boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
// // // // //     display: "flex",
// // // // //     flexDirection: "column"
// // // // //   };

// // // // //   const modalHeaderStyle = {
// // // // //     padding: "20px 25px",
// // // // //     borderBottom: "1px solid #eee",
// // // // //     display: "flex",
// // // // //     justifyContent: "space-between",
// // // // //     alignItems: "center",
// // // // //     backgroundColor: "#f9f9f9"
// // // // //   };

// // // // //   const modalBodyStyle = {
// // // // //     padding: "25px",
// // // // //     overflowY: "auto",
// // // // //     maxHeight: "calc(90vh - 140px)"
// // // // //   };

// // // // //   const modalFooterStyle = {
// // // // //     padding: "15px 25px",
// // // // //     borderTop: "1px solid #eee",
// // // // //     display: "flex",
// // // // //     justifyContent: "flex-end",
// // // // //     backgroundColor: "#f9f9f9"
// // // // //   };

// // // // //   return (
// // // // //     <div className="customer-segmentation" style={{ 
// // // // //       fontFamily: "'Inter', 'Segoe UI', sans-serif", 
// // // // //       maxWidth: "1200px", 
// // // // //       margin: "0 auto", 
// // // // //       padding: "20px",
// // // // //       color: "#333",
// // // // //       background: "#fafafa",
// // // // //       borderRadius: "12px",
// // // // //       boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
// // // // //     }}>
// // // // //       <motion.h2 
// // // // //         initial={{ opacity: 0, y: -20 }}
// // // // //         animate={{ opacity: 1, y: 0 }}
// // // // //         transition={{ duration: 0.5 }}
// // // // //         style={{ 
// // // // //           borderBottom: "2px solid #2196F3", 
// // // // //           paddingBottom: "15px", 
// // // // //           color: "#1565C0",
// // // // //           fontSize: "28px",
// // // // //           fontWeight: "600",
// // // // //           marginBottom: "25px",
// // // // //           display: "flex",
// // // // //           justifyContent: "space-between",
// // // // //           alignItems: "center"
// // // // //         }}
// // // // //       >
// // // // //         <span>Customer Segmentation Analytics</span>
// // // // //         <CSVLink 
// // // // //           data={csvData}
// // // // //           filename={"customer-data.csv"}
// // // // //           className="csv-link"
// // // // //           style={{
// // // // //             backgroundColor: "#4CAF50",
// // // // //             color: "white",
// // // // //             padding: "10px 15px",
// // // // //             borderRadius: "8px",
// // // // //             textDecoration: "none",
// // // // //             fontSize: "14px",
// // // // //             fontWeight: "500",
// // // // //             display: "flex",
// // // // //             alignItems: "center",
// // // // //             gap: "8px",
// // // // //             transition: "background-color 0.2s"
// // // // //           }}
// // // // //           target="_blank"
// // // // //         >
// // // // //           <span style={{ fontSize: "16px" }}>↓</span>
// // // // //           Export to CSV
// // // // //         </CSVLink>
// // // // //       </motion.h2>

// // // // //       {customerStats.totalCustomers > 0 && (
// // // // //         <motion.div 
// // // // //           initial={{ opacity: 0, y: 20 }}
// // // // //           animate={{ opacity: 1, y: 0 }}
// // // // //           transition={{ duration: 0.5, delay: 0.2 }}
// // // // //           style={{ 
// // // // //             marginBottom: "30px", 
// // // // //             display: "flex", 
// // // // //             gap: "20px", 
// // // // //             flexWrap: "wrap",
// // // // //             justifyContent: "space-between"
// // // // //           }}
// // // // //         >
// // // // //           <div style={{ 
// // // // //             backgroundColor: "#fff", 
// // // // //             padding: "20px", 
// // // // //             borderRadius: "12px", 
// // // // //             flex: "1",
// // // // //             minWidth: "200px",
// // // // //             boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // // //             transition: "transform 0.2s",
// // // // //             cursor: "pointer",
// // // // //             display: "flex",
// // // // //             flexDirection: "column",
// // // // //             alignItems: "center",
// // // // //             justifyContent: "center"
// // // // //           }}
// // // // //           onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
// // // // //           onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
// // // // //           >
// // // // //             <div style={{ fontSize: "36px", fontWeight: "700", color: "#1976D2", marginBottom: "5px" }}>
// // // // //               {customerStats.totalCustomers}
// // // // //             </div>
// // // // //             <div style={{ fontSize: "14px", color: "#666", textTransform: "uppercase", letterSpacing: "1px" }}>
// // // // //               Total Customers
// // // // //             </div>
// // // // //           </div>
          
// // // // //           <div style={{ 
// // // // //             backgroundColor: "#fff", 
// // // // //             padding: "20px", 
// // // // //             borderRadius: "12px", 
// // // // //             flex: "1",
// // // // //             minWidth: "200px",
// // // // //             boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // // //             transition: "transform 0.2s",
// // // // //             cursor: "pointer",
// // // // //             display: "flex",
// // // // //             flexDirection: "column",
// // // // //             alignItems: "center",
// // // // //             justifyContent: "center"
// // // // //           }}
// // // // //           onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
// // // // //           onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
// // // // //           >
// // // // //             <div style={{ fontSize: "36px", fontWeight: "700", color: "#4CAF50", marginBottom: "5px" }}>
// // // // //               {formatCurrency(customerStats.totalSpending)}
// // // // //             </div>
// // // // //             <div style={{ fontSize: "14px", color: "#666", textTransform: "uppercase", letterSpacing: "1px" }}>
// // // // //               Total Revenue
// // // // //             </div>
// // // // //           </div>
          
// // // // //           <div style={{ 
// // // // //             backgroundColor: "#fff", 
// // // // //             padding: "20px", 
// // // // //             borderRadius: "12px", 
// // // // //             flex: "1",
// // // // //             minWidth: "200px",
// // // // //             boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // // //             transition: "transform 0.2s",
// // // // //             cursor: "pointer",
// // // // //             display: "flex",
// // // // //             flexDirection: "column",
// // // // //             alignItems: "center",
// // // // //             justifyContent: "center"
// // // // //           }}
// // // // //           onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
// // // // //           onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
// // // // //           >
// // // // //             <div style={{ fontSize: "36px", fontWeight: "700", color: "#FF5722", marginBottom: "5px" }}>
// // // // //               {formatCurrency(customerStats.avgPurchaseValue)}
// // // // //             </div>
// // // // //             <div style={{ fontSize: "14px", color: "#666", textTransform: "uppercase", letterSpacing: "1px" }}>
// // // // //               Avg Order Value
// // // // //             </div>
// // // // //           </div>
          
// // // // //           <div style={{ 
// // // // //             backgroundColor: "#fff", 
// // // // //             padding: "20px", 
// // // // //             borderRadius: "12px", 
// // // // //             flex: "1",
// // // // //             minWidth: "200px",
// // // // //             boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // // //             transition: "transform 0.2s",
// // // // //             cursor: "pointer",
// // // // //             display: "flex",
// // // // //             flexDirection: "column",
// // // // //             alignItems: "center",
// // // // //             justifyContent: "center"
// // // // //           }}
// // // // //           onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
// // // // //           onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
// // // // //           >
// // // // //             <div style={{ fontSize: "36px", fontWeight: "700", color: "#9C27B0", marginBottom: "5px" }}>
// // // // //               {customerStats.activeCustomers}
// // // // //             </div>
// // // // //             <div style={{ fontSize: "14px", color: "#666", textTransform: "uppercase", letterSpacing: "1px" }}>
// // // // //               Active Customers
// // // // //             </div>
// // // // //           </div>
// // // // //         </motion.div>
// // // // //       )}

// // // // //       <motion.div
// // // // //         initial={{ opacity: 0 }}
// // // // //         animate={{ opacity: 1 }}
// // // // //         transition={{ duration: 0.5, delay: 0.3 }}
// // // // //         style={{ marginBottom: "20px", display: "flex", gap: "15px", flexWrap: "wrap", alignItems: "center" }}
// // // // //       >
// // // // //         <div style={{ flex: "1", minWidth: "250px" }}>
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Search by name, email or phone..."
// // // // //             value={searchTerm}
// // // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // // //             style={{ 
// // // // //               width: "100%", 
// // // // //               padding: "12px 15px", 
// // // // //               borderRadius: "8px", 
// // // // //               border: "1px solid #ddd",
// // // // //               fontSize: "15px",
// // // // //               transition: "all 0.2s",
// // // // //               boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
// // // // //             }}
// // // // //           />
// // // // //         </div>
// // // // //         <button 
// // // // //           onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
// // // // //           style={{
// // // // //             backgroundColor: showAdvancedFilters ? "#1976D2" : "#fff",
// // // // //             color: showAdvancedFilters ? "#fff" : "#1976D2",
// // // // //             padding: "12px 20px",
// // // // //             borderRadius: "8px",
// // // // //             border: "1px solid #1976D2",
// // // // //             cursor: "pointer",
// // // // //             fontWeight: "500",
// // // // //             transition: "all 0.2s",
// // // // //             display: "flex",
// // // // //             alignItems: "center",
// // // // //             gap: "8px"
// // // // //           }}
// // // // //         >
// // // // //           <span>{showAdvancedFilters ? "Hide" : "Show"} Advanced Filters</span>
// // // // //           <span style={{ fontSize: "10px", transform: showAdvancedFilters ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
// // // // //         </button>

// // // // //         <div style={{ marginLeft: "auto", display: "flex", gap: "10px" }}>
// // // // //           <button 
// // // // //             onClick={() => setViewMode("table")}
// // // // //             style={{
// // // // //               backgroundColor: viewMode === "table" ? "#1976D2" : "#fff",
// // // // //               color: viewMode === "table" ? "#fff" : "#1976D2",
// // // // //               padding: "12px 15px",
// // // // //               borderRadius: "8px",
// // // // //               border: "1px solid #1976D2",
// // // // //               cursor: "pointer",
// // // // //               fontWeight: "500",
// // // // //               transition: "all 0.2s"
// // // // //             }}
// // // // //           >
// // // // //             Table View
// // // // //           </button>
// // // // //           <button 
// // // // //             onClick={() => setViewMode("card")}
// // // // //             style={{
// // // // //               backgroundColor: viewMode === "card" ? "#1976D2" : "#fff",
// // // // //               color: viewMode === "card" ? "#fff" : "#1976D2",
// // // // //               padding: "12px 15px",
// // // // //               borderRadius: "8px",
// // // // //               border: "1px solid #1976D2",
// // // // //               cursor: "pointer",
// // // // //               fontWeight: "500",
// // // // //               transition: "all 0.2s"
// // // // //             }}
// // // // //           >
// // // // //             Card View
// // // // //           </button>
// // // // //         </div>
// // // // //       </motion.div>

// // // // //       <AnimatePresence>
// // // // //         {showAdvancedFilters && (
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, height: 0 }}
// // // // //             animate={{ opacity: 1, height: "auto" }}
// // // // //             exit={{ opacity: 0, height: 0 }}
// // // // //             transition={{ duration: 0.3 }}
// // // // //             style={{ 
// // // // //               overflow: "hidden",
// // // // //               marginBottom: "25px", 
// // // // //               backgroundColor: "#fff", 
// // // // //               padding: "20px", 
// // // // //               borderRadius: "12px",
// // // // //               boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // // //             }}
// // // // //           >
// // // // //             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
// // // // //               <div style={{ minWidth: "200px", flex: "1" }}>
// // // // //                 <label style={{ display: "block", fontWeight: "500", marginBottom: "8px", color: "#555" }}>Segment:</label>
// // // // //                 <select 
// // // // //                   value={segment} 
// // // // //                   onChange={(e) => setSegment(e.target.value)} 
// // // // //                   style={{ 
// // // // //                     width: "100%",
// // // // //                     padding: "12px", 
// // // // //                     borderRadius: "8px",
// // // // //                     border: "1px solid #ddd",
// // // // //                     backgroundColor: "#fff",
// // // // //                     fontSize: "15px"
// // // // //                   }}
// // // // //                 >
// // // // //                   <option value="All">All Customers</option>
// // // // //                   <option value="High-Spender">High Spender</option>
// // // // //                   <option value="Medium-Spender">Medium Spender</option>
// // // // //                   <option value="Low-Spender">Low Spender</option>
// // // // //                   <option value="Occasional">Occasional</option>
// // // // //                   <option value="Loyal">Loyal</option>
// // // // //                   <option value="New-Customer">New Customer</option>
// // // // //                 </select>
// // // // //               </div>
              
// // // // //               <div style={{ minWidth: "200px", flex: "1" }}>
// // // // //                 <label style={{ display: "block", fontWeight: "500", marginBottom: "8px", color: "#555" }}>Min Loyalty Points:</label>
// // // // //                 <input 
// // // // //                   type="number" 
// // // // //                   value={loyaltyFilter} 
// // // // //                   onChange={(e) => setLoyaltyFilter(e.target.value)} 
// // // // //                   style={{ 
// // // // //                     width: "100%",
// // // // //                     padding: "12px", 
// // // // //                     borderRadius: "8px",
// // // // //                     border: "1px solid #ddd",
// // // // //                     fontSize: "15px"
// // // // //                   }} 
// // // // //                 />
// // // // //               </div>
              
// // // // //               <div style={{ minWidth: "200px", flex: "1" }}>
// // // // //                 <label style={{ display: "block", fontWeight: "500", marginBottom: "8px", color: "#555" }}>Customer Activity (Last X Days):</label>
// // // // //                 <input 
// // // // //                   type="range" 
// // // // //                   min="30" 
// // // // //                   max="730" 
// // // // //                   step="30"
// // // // //                   value={recencyFilter} 
// // // // //                   onChange={(e) => setRecencyFilter(Number(e.target.value))} 
// // // // //                   style={{ width: "100%" }} 
// // // // //                 />
// // // // //                 <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#666" }}>
// // // // //                   <span>30 days</span>
// // // // //                   <span>{recencyFilter} days</span>
// // // // //                   <span>2 years</span>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
            
// // // // //             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
// // // // //               <div style={{ flex: "1", minWidth: "200px" }}>
// // // // //                 <label style={{ display: "block", fontWeight: "500", marginBottom: "8px", color: "#555" }}>Date Range:</label>
// // // // //                 <div style={{ display: "flex", gap: "10px" }}>
// // // // //                   <input
// // // // //                     type="date"
// // // // //                     value={dateRange.start}
// // // // //                     onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
// // // // //                     style={{ 
// // // // //                       flex: "1",
// // // // //                       padding: "12px", 
// // // // //                       borderRadius: "8px",
// // // // //                       border: "1px solid #ddd",
// // // // //                       fontSize: "15px"
// // // // //                     }}
// // // // //                   />
// // // // //                   <input
// // // // //                     type="date"
// // // // //                     value={dateRange.end}
// // // // //                     onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
// // // // //                     style={{ 
// // // // //                       flex: "1",
// // // // //                       padding: "12px", 
// // // // //                       borderRadius: "8px",
// // // // //                       border: "1px solid #ddd",
// // // // //                       fontSize: "15px"
// // // // //                     }}
// // // // //                   />
// // // // //                 </div>
// // // // //               </div>
              
// // // // //               <div style={{ flex: "1", minWidth: "200px" }}>
// // // // //                 <label style={{ display: "block", fontWeight: "500", marginBottom: "8px", color: "#555" }}>Spending Range:</label>
// // // // //                 <div style={{ display: "flex", gap: "10px" }}>
// // // // //                   <input
// // // // //                     type="number"
// // // // //                     placeholder="Min"
// // // // //                     value={spendingFilter.min}
// // // // //                     onChange={(e) => setSpendingFilter({ ...spendingFilter, min: Number(e.target.value) })}
// // // // //                     style={{ 
// // // // //                       flex: "1",
// // // // //                       padding: "12px", 
// // // // //                       borderRadius: "8px",
// // // // //                       border: "1px solid #ddd",
// // // // //                       fontSize: "15px"
// // // // //                     }}
// // // // //                   />
// // // // //                   <input
// // // // //                     type="number"
// // // // //                     placeholder="Max"
// // // // //                     value={spendingFilter.max === Infinity ? "" : spendingFilter.max}
// // // // //                     onChange={(e) => setSpendingFilter({ ...spendingFilter, max: Number(e.target.value) || Infinity })}
// // // // //                     style={{ 
// // // // //                       flex: "1",
// // // // //                       padding: "12px", 
// // // // //                       borderRadius: "8px",
// // // // //                       border: "1px solid #ddd",
// // // // //                       fontSize: "15px"
// // // // //                     }}
// // // // //                   />
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>

// // // // //       <motion.div
// // // // //         initial={{ opacity: 0, y: 20 }}
// // // // //         animate={{ opacity: 1, y: 0 }}
// // // // //         transition={{ duration: 0.5, delay: 0.4 }}
// // // // //         style={{ marginBottom: "30px" }}
// // // // //       >
// // // // //         {loading ? (
// // // // //           <div style={{ textAlign: "center", padding: "30px" }}>
// // // // //             <div style={{ fontSize: "18px", color: "#666" }}>Loading customer data...</div>
// // // // //             <div style={{ marginTop: "10px" }}>⏳</div>
// // // // //           </div>
// // // // //         ) : error ? (
// // // // //           <div style={{ 
// // // // //             color: "#C62828", 
// // // // //             backgroundColor: "#FFEBEE", 
// // // // //             padding: "15px", 
// // // // //             borderRadius: "8px",
// // // // //             textAlign: "center"
// // // // //           }}>
// // // // //             {error}
// // // // //           </div>
// // // // //         ) : filteredCustomers.length === 0 ? (
// // // // //           <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>
// // // // //             No customers found matching the selected filters.
// // // // //           </div>
// // // // //         ) : viewMode === "table" ? (
// // // // //           <div style={{ overflowX: "auto", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", borderRadius: "12px" }}>
// // // // //             <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#fff" }}>
// // // // //               <thead>
// // // // //                 <tr style={{ backgroundColor: "#1976D2", color: "white" }}>
// // // // //                   {["Name", "Email", "Phone", "Total Spent", "Segment", "Loyalty Points", "Last Purchase", "Risk Level", "Actions"].map((header) => (
// // // // //                     <th
// // // // //                       key={header}
// // // // //                       onClick={() => header !== "Actions" && sortCustomers(header.toLowerCase().replace(" ", "_"))}
// // // // //                       style={{ 
// // // // //                         padding: "15px", 
// // // // //                         cursor: header !== "Actions" ? "pointer" : "default",
// // // // //                         textAlign: "left",
// // // // //                         fontWeight: "500",
// // // // //                         fontSize: "14px"
// // // // //                       }}
// // // // //                     >
// // // // //                       {header}
// // // // //                       {sortConfig.key === header.toLowerCase().replace(" ", "_") && (
// // // // //                         <span style={{ marginLeft: "5px" }}>
// // // // //                           {sortConfig.direction === "asc" ? "▲" : "▼"}
// // // // //                         </span>
// // // // //                       )}
// // // // //                     </th>
// // // // //                   ))}
// // // // //                 </tr>
// // // // //               </thead>
// // // // //               <tbody>
// // // // //                 {filteredCustomers.map((customer, index) => {
// // // // //                   const riskLevel = getCustomerRiskLevel(customer);
// // // // //                   return (
// // // // //                     <tr 
// // // // //                       key={index} 
// // // // //                       style={{ 
// // // // //                         backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
// // // // //                         transition: "background-color 0.2s",
// // // // //                         cursor: "pointer"
// // // // //                       }}
// // // // //                       onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f0f0f0"}
// // // // //                       onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? "#f9f9f9" : "#fff"}
// // // // //                     >
// // // // //                       <td style={{ padding: "12px", fontSize: "14px" }}>{customer.name}</td>
// // // // //                       <td style={{ padding: "12px", fontSize: "14px" }}>{customer.email}</td>
// // // // //                       <td style={{ padding: "12px", fontSize: "14px" }}>{customer.phone}</td>
// // // // //                       <td style={{ padding: "12px", fontSize: "14px", textAlign: "right" }}>{formatCurrency(customer.total_spent)}</td>
// // // // //                       <td style={{ padding: "12px", fontSize: "14px" }}>
// // // // //                         <span style={{ 
// // // // //                           backgroundColor: getSegmentColor(customer.segment, 0.1),
// // // // //                           color: getSegmentColor(customer.segment),
// // // // //                           padding: "5px 10px", 
// // // // //                           borderRadius: "4px",
// // // // //                           fontSize: "12px",
// // // // //                           fontWeight: "500"
// // // // //                         }}>
// // // // //                           {customer.segment}
// // // // //                         </span>
// // // // //                       </td>
// // // // //                       <td style={{ padding: "12px", fontSize: "14px" }}>{customer.loyaltyPoints}</td>
// // // // //                       <td style={{ padding: "12px", fontSize: "14px" }}>
// // // // //                         {customer.daysSinceLastPurchase !== null ? `${customer.daysSinceLastPurchase} days ago` : "N/A"}
// // // // //                       </td>
// // // // //                       <td style={{ padding: "12px", fontSize: "14px" }}>
// // // // //                         <span style={{ 
// // // // //                           backgroundColor: riskLevel.level === "high" ? "#FFEBEE" : 
// // // // //                             riskLevel.level === "medium" ? "#FFF3E0" : "#E8F5E9",
// // // // //                           color: riskLevel.level === "high" ? "#C62828" : 
// // // // //                             riskLevel.level === "medium" ? "#EF6C00" : "#2E7D32",
// // // // //                           padding: "5px 10px", 
// // // // //                           borderRadius: "4px",
// // // // //                           fontSize: "12px",
// // // // //                           fontWeight: "500"
// // // // //                         }}>
// // // // //                           {riskLevel.label}
// // // // //                         </span>
// // // // //                       </td>
// // // // //                       <td style={{ padding: "12px" }}>
// // // // //                         <button
// // // // //                           onClick={() => fetchPurchaseHistory(customer.phone)}
// // // // //                           style={{ 
// // // // //                             backgroundColor: "#2196F3", 
// // // // //                             color: "white", 
// // // // //                             padding: "8px 12px", 
// // // // //                             borderRadius: "4px", 
// // // // //                             border: "none",
// // // // //                             fontSize: "13px",
// // // // //                             cursor: "pointer",
// // // // //                             transition: "background-color 0.2s"
// // // // //                           }}
// // // // //                           onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1976D2"}
// // // // //                           onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#2196F3"}
// // // // //                         >
// // // // //                           View History
// // // // //                         </button>
// // // // //                       </td>
// // // // //                     </tr>
// // // // //                   );
// // // // //                 })}
// // // // //               </tbody>
// // // // //             </table>
// // // // //           </div>
// // // // //         ) : (
// // // // //           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
// // // // //             {filteredCustomers.map((customer, index) => {
// // // // //               const riskLevel = getCustomerRiskLevel(customer);
// // // // //               return (
// // // // //                 <div 
// // // // //                   key={index}
// // // // //                   style={{ 
// // // // //                     backgroundColor: "#fff",
// // // // //                     borderRadius: "12px",
// // // // //                     padding: "20px",
// // // // //                     boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // // //                     transition: "transform 0.2s",
// // // // //                     cursor: "pointer"
// // // // //                   }}
// // // // //                   onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
// // // // //                   onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
// // // // //                 >
// // // // //                   <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
// // // // //                     <div style={{ 
// // // // //                       width: "40px", 
// // // // //                       height: "40px", 
// // // // //                       borderRadius: "50%", 
// // // // //                       backgroundColor: getSegmentColor(customer.segment, 0.1),
// // // // //                       color: getSegmentColor(customer.segment),
// // // // //                       display: "flex", 
// // // // //                       alignItems: "center", 
// // // // //                       justifyContent: "center",
// // // // //                       fontSize: "18px",
// // // // //                       fontWeight: "500",
// // // // //                       marginRight: "12px"
// // // // //                     }}>
// // // // //                       {customer.name.charAt(0)}
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <div style={{ fontSize: "16px", fontWeight: "500" }}>{customer.name}</div>
// // // // //                       <div style={{ fontSize: "13px", color: "#666" }}>{customer.email}</div>
// // // // //                     </div>
// // // // //                   </div>
                  
// // // // //                   <div style={{ marginBottom: "15px" }}>
// // // // //                     <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
// // // // //                       <span style={{ fontSize: "13px", color: "#666" }}>Total Spent:</span>
// // // // //                       <span style={{ fontSize: "14px", fontWeight: "500" }}>{formatCurrency(customer.total_spent)}</span>
// // // // //                     </div>
// // // // //                     <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
// // // // //                       <span style={{ fontSize: "13px", color: "#666" }}>Loyalty Points:</span>
// // // // //                       <span style={{ fontSize: "14px", fontWeight: "500" }}>{customer.loyaltyPoints}</span>
// // // // //                     </div>
// // // // //                     <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
// // // // //                       <span style={{ fontSize: "13px", color: "#666" }}>Last Purchase:</span>
// // // // //                       <span style={{ fontSize: "14px", fontWeight: "500" }}>
// // // // //                         {customer.daysSinceLastPurchase !== null ? `${customer.daysSinceLastPurchase} days ago` : "N/A"}
// // // // //                       </span>
// // // // //                     </div>
// // // // //                   </div>
                  
// // // // //                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // // // //                     <span style={{ 
// // // // //                       backgroundColor: riskLevel.level === "high" ? "#FFEBEE" : 
// // // // //                         riskLevel.level === "medium" ? "#FFF3E0" : "#E8F5E9",
// // // // //                       color: riskLevel.level === "high" ? "#C62828" : 
// // // // //                         riskLevel.level === "medium" ? "#EF6C00" : "#2E7D32",
// // // // //                       padding: "5px 10px", 
// // // // //                       borderRadius: "4px",
// // // // //                       fontSize: "12px",
// // // // //                       fontWeight: "500"
// // // // //                     }}>
// // // // //                       {riskLevel.label}
// // // // //                     </span>
// // // // //                     <button
// // // // //                       onClick={() => fetchPurchaseHistory(customer.phone)}
// // // // //                       style={{ 
// // // // //                         backgroundColor: "#2196F3", 
// // // // //                         color: "white", 
// // // // //                         padding: "8px 12px", 
// // // // //                         borderRadius: "4px", 
// // // // //                         border: "none",
// // // // //                         fontSize: "13px",
// // // // //                         cursor: "pointer",
// // // // //                         transition: "background-color 0.2s"
// // // // //                       }}
// // // // //                       onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1976D2"}
// // // // //                       onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#2196F3"}
// // // // //                     >
// // // // //                       View History
// // // // //                     </button>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               );
// // // // //             })}
// // // // //           </div>
// // // // //         )}
// // // // //       </motion.div>

// // // // //       <AnimatePresence>
// // // // //         {showPurchaseModal && (
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0 }}
// // // // //             animate={{ opacity: 1 }}
// // // // //             exit={{ opacity: 0 }}
// // // // //             transition={{ duration: 0.3 }}
// // // // //             style={modalOverlayStyle}
// // // // //             onClick={() => setShowPurchaseModal(false)}
// // // // //           >
// // // // //             <motion.div
// // // // //               initial={{ y: 50, opacity: 0 }}
// // // // //               animate={{ y: 0, opacity: 1 }}
// // // // //               exit={{ y: 50, opacity: 0 }}
// // // // //               transition={{ duration: 0.3 }}
// // // // //               style={modalStyle}
// // // // //               onClick={(e) => e.stopPropagation()}
// // // // //             >
// // // // //               <div style={modalHeaderStyle}>
// // // // //                 <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "600" }}>
// // // // //                   Purchase History - {selectedCustomerDetails?.name}
// // // // //                 </h3>
// // // // //                 <button
// // // // //                   onClick={() => setShowPurchaseModal(false)}
// // // // //                   style={{
// // // // //                     backgroundColor: "transparent",
// // // // //                     border: "none",
// // // // //                     fontSize: "20px",
// // // // //                     cursor: "pointer",
// // // // //                     color: "#666",
// // // // //                     padding: "5px"
// // // // //                   }}
// // // // //                 >
// // // // //                   ×
// // // // //                 </button>
// // // // //               </div>
              
// // // // //               <div style={modalBodyStyle}>
// // // // //                 <div style={{ marginBottom: "20px" }}>
// // // // //                   <h4 style={{ marginBottom: "15px", fontSize: "16px", fontWeight: "500" }}>
// // // // //                     Customer Summary
// // // // //                   </h4>
// // // // //                   <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "15px" }}>
// // // // //                     <div>
// // // // //                       <span style={{ fontSize: "13px", color: "#666" }}>Name:</span>
// // // // //                       <div style={{ fontSize: "14px", fontWeight: "500" }}>{selectedCustomerDetails?.name}</div>
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <span style={{ fontSize: "13px", color: "#666" }}>Total Spent:</span>
// // // // //                       <div style={{ fontSize: "14px", fontWeight: "500" }}>{formatCurrency(purchaseStats?.totalSpent)}</div>
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <span style={{ fontSize: "13px", color: "#666" }}>Avg Purchase:</span>
// // // // //                       <div style={{ fontSize: "14px", fontWeight: "500" }}>{formatCurrency(purchaseStats?.avgPurchase)}</div>
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <span style={{ fontSize: "13px", color: "#666" }}>Frequency:</span>
// // // // //                       <div style={{ fontSize: "14px", fontWeight: "500" }}>
// // // // //                         {purchaseStats?.frequency ? `Every ${purchaseStats.frequency} days` : "N/A"}
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 {purchaseStats?.purchaseTrendData && (
// // // // //                   <div style={{ marginBottom: "20px" }}>
// // // // //                     <h4 style={{ marginBottom: "15px", fontSize: "16px", fontWeight: "500" }}>
// // // // //                       Purchase Trend
// // // // //                     </h4>
// // // // //                     <div style={{ height: "200px" }}>
// // // // //                       <Chart 
// // // // //                         type="line" 
// // // // //                         data={purchaseStats.purchaseTrendData}
// // // // //                         options={{
// // // // //                           maintainAspectRatio: false,
// // // // //                           scales: {
// // // // //                             y: {
// // // // //                               beginAtZero: true,
// // // // //                               title: { display: true, text: 'Amount ($)' }
// // // // //                             },
// // // // //                             x: {
// // // // //                               title: { display: true, text: 'Month' }
// // // // //                             }
// // // // //                           },
// // // // //                           plugins: {
// // // // //                             legend: { position: 'top' },
// // // // //                             tooltip: {
// // // // //                               callbacks: {
// // // // //                                 label: (context) => `${context.dataset.label}: $${context.parsed.y.toFixed(2)}`
// // // // //                               }
// // // // //                             }
// // // // //                           }
// // // // //                         }}
// // // // //                       />
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 )}

// // // // //                 <div>
// // // // //                   <h4 style={{ marginBottom: "15px", fontSize: "16px", fontWeight: "500" }}>
// // // // //                     Purchase History ({purchaseStats?.purchaseCount || 0})
// // // // //                   </h4>
// // // // //                   <div style={{ maxHeight: "300px", overflowY: "auto" }}>
// // // // //                     {purchaseHistory.map((purchase, index) => (
// // // // //                       <div 
// // // // //                         key={index}
// // // // //                         style={{ 
// // // // //                           backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
// // // // //                           padding: "15px", 
// // // // //                           borderRadius: "8px",
// // // // //                           marginBottom: "10px",
// // // // //                           transition: "background-color 0.2s",
// // // // //                           cursor: "pointer"
// // // // //                         }}
// // // // //                         onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f0f0f0"}
// // // // //                         onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? "#f9f9f9" : "#fff"}
// // // // //                         onClick={() => setSelectedPurchase(purchase)}
// // // // //                       >
// // // // //                         <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
// // // // //                           <span style={{ fontSize: "14px", fontWeight: "500" }}>{formatDate(purchase.date)}</span>
// // // // //                           <span style={{ fontSize: "14px", fontWeight: "500" }}>{formatCurrency(purchase.total_amount)}</span>
// // // // //                         </div>
// // // // //                         <div style={{ fontSize: "13px", color: "#666" }}>
// // // // //                           {purchase.products.map((p) => `${p.name} (x${p.quantity})`).join(", ")}
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 {selectedPurchase && (
// // // // //                   <div style={{ marginTop: "20px" }}>
// // // // //                     <h4 style={{ marginBottom: "15px", fontSize: "16px", fontWeight: "500" }}>
// // // // //                       Selected Purchase Details
// // // // //                     </h4>
// // // // //                     <div style={{ backgroundColor: "#f9f9f9", padding: "15px", borderRadius: "8px" }}>
// // // // //                       <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", marginBottom: "15px" }}>
// // // // //                         <div>
// // // // //                           <span style={{ fontSize: "13px", color: "#666" }}>Date:</span>
// // // // //                           <span style={{ fontSize: "14px", fontWeight: "500" }}>{formatDate(selectedPurchase.date)}</span>
// // // // //                         </div>
// // // // //                         <div>
// // // // //                           <span style={{ fontSize: "13px", color: "#666" }}>Order ID:</span>
// // // // //                           <span style={{ fontSize: "14px", fontWeight: "500" }}>{selectedPurchase.order_id || "N/A"}</span>
// // // // //                         </div>
// // // // //                       </div>
// // // // //                       <div>
// // // // //                         <h5 style={{ fontSize: "14px", fontWeight: "500", marginBottom: "10px" }}>Products</h5>
// // // // //                         {selectedPurchase.products.map((product, idx) => (
// // // // //                           <div key={idx} style={{ marginBottom: "10px", fontSize: "13px" }}>
// // // // //                             <span style={{ fontWeight: "500" }}>{product.name}</span>
// // // // //                             <span style={{ color: "#666" }}> (x{product.quantity}) - {formatCurrency(product.price)}</span>
// // // // //                           </div>
// // // // //                         ))}
// // // // //                         <div style={{ fontSize: "14px", fontWeight: "500", marginTop: "15px" }}>
// // // // //                           Total: {formatCurrency(selectedPurchase.total_amount)}
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 )}
// // // // //               </div>

// // // // //               <div style={modalFooterStyle}>
// // // // //                 <CSVLink
// // // // //                   data={purchaseHistoryCsvData}
// // // // //                   filename={`purchase-history-${selectedCustomerDetails?.phone}.csv`}
// // // // //                   style={{
// // // // //                     backgroundColor: "#4CAF50",
// // // // //                     color: "white",
// // // // //                     padding: "10px 15px",
// // // // //                     borderRadius: "8px",
// // // // //                     textDecoration: "none",
// // // // //                     fontSize: "14px",
// // // // //                     fontWeight: "500",
// // // // //                     display: "flex",
// // // // //                     alignItems: "center",
// // // // //                     gap: "8px",
// // // // //                     transition: "background-color 0.2s"
// // // // //                   }}
// // // // //                   target="_blank"
// // // // //                 >
// // // // //                   <span style={{ fontSize: "16px" }}>↓</span>
// // // // //                   Export Purchase History
// // // // //                 </CSVLink>
// // // // //               </div>
// // // // //             </motion.div>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CustomerSegmentation;

// // // // import React, { useState, useEffect } from "react";
// // // // import { Chart } from "react-chartjs-2";
// // // // import { CSVLink } from "react-csv";
// // // // import "chart.js/auto";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import { BarChart2, PieChart, TrendingUp, Users } from "lucide-react";

// // // // const CustomerSegmentation = () => {
// // // //   const [customers, setCustomers] = useState([]);
// // // //   const [segment, setSegment] = useState("All");
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState(null);
// // // //   const [loyaltyFilter, setLoyaltyFilter] = useState(0);
// // // //   const [selectedCustomer, setSelectedCustomer] = useState(null);
// // // //   const [purchaseHistory, setPurchaseHistory] = useState([]);
// // // //   const [dateRange, setDateRange] = useState({ start: "", end: "" });
// // // //   const [spendingFilter, setSpendingFilter] = useState({ min: 0, max: Infinity });
// // // //   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
// // // //   const [chartData, setChartData] = useState(null);
// // // //   const [customerStats, setCustomerStats] = useState({});
// // // //   const [activeTab, setActiveTab] = useState("data");
// // // //   const [trendData, setTrendData] = useState(null);
// // // //   const [viewMode, setViewMode] = useState("table");
// // // //   const [searchTerm, setSearchTerm] = useState("");
// // // //   const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
// // // //   const [recencyFilter, setRecencyFilter] = useState(365);
// // // //   const [riskCategories, setRiskCategories] = useState({
// // // //     churnRisk: [],
// // // //     highValue: [],
// // // //     potentialLoyalists: [],
// // // //   });
// // // //   const [showPurchaseModal, setShowPurchaseModal] = useState(false);
// // // //   const [selectedPurchase, setSelectedPurchase] = useState(null);
// // // //   const [selectedCustomerDetails, setSelectedCustomerDetails] = useState(null);
// // // //   const [purchaseStats, setPurchaseStats] = useState(null);

// // // //   useEffect(() => {
// // // //     const fetchCustomers = async () => {
// // // //       setLoading(true);
// // // //       try {
// // // //         const params = new URLSearchParams({
// // // //           storeId: localStorage.getItem("storeId"),
// // // //           segment,
// // // //           loyaltyPoints: loyaltyFilter,
// // // //           ...(dateRange.start && { startDate: dateRange.start }),
// // // //           ...(dateRange.end && { endDate: dateRange.end }),
// // // //         });

// // // //         const response = await fetch(`http://localhost:5008/api/customers?${params}`);
// // // //         if (!response.ok) throw new Error("Failed to fetch customers");
// // // //         const data = await response.json();

// // // //         const enrichedCustomers = await Promise.all(
// // // //           data.customers.map(async (customer) => {
// // // //             const history = await fetchPurchaseHistory(customer.phone, true);
// // // //             const totalSpent = history.reduce((sum, p) => sum + (p.total_amount || 0), 0);
// // // //             const purchaseCount = history.length;
// // // //             const lastPurchaseDate = history.length > 0
// // // //               ? new Date(history.sort((a, b) => new Date(b.date) - new Date(a.date))[0].date)
// // // //               : null;
// // // //             const daysSinceLastPurchase = lastPurchaseDate
// // // //               ? Math.floor((new Date() - lastPurchaseDate) / (1000 * 60 * 60 * 24))
// // // //               : null;
// // // //             const avgOrderValue = purchaseCount > 0 ? totalSpent / purchaseCount : 0;
// // // //             const purchaseFrequency = purchaseCount > 0
// // // //               ? lastPurchaseDate
// // // //                 ? Math.floor((new Date() - new Date(history[history.length - 1].date)) / (1000 * 60 * 60 * 24)) / purchaseCount
// // // //                 : null
// // // //               : null;

// // // //             return {
// // // //               ...customer,
// // // //               purchaseHistory: history,
// // // //               total_spent: totalSpent,
// // // //               purchaseCount,
// // // //               daysSinceLastPurchase,
// // // //               avgOrderValue,
// // // //               purchaseFrequency,
// // // //             };
// // // //           })
// // // //         );

// // // //         setCustomers(enrichedCustomers);
// // // //         calculateCustomerStats(enrichedCustomers);
// // // //         updateChartData(enrichedCustomers);
// // // //         generateTrendData(enrichedCustomers);
// // // //         identifyCustomerCategories(enrichedCustomers);
// // // //         setLoading(false);
// // // //       } catch (err) {
// // // //         setError(err.message);
// // // //         setLoading(false);
// // // //       }
// // // //     };
// // // //     fetchCustomers();
// // // //   }, [segment, loyaltyFilter, dateRange]);

// // // //   const fetchPurchaseHistory = async (customerPhone, silent = false) => {
// // // //     try {
// // // //       const response = await fetch(
// // // //         `http://localhost:5008/api/customers/${customerPhone}/purchase-history?storeId=${localStorage.getItem("storeId")}`
// // // //       );
// // // //       if (!response.ok) throw new Error("Failed to fetch purchase history");
// // // //       const data = await response.json();
// // // //       if (!silent) {
// // // //         setPurchaseHistory(data.purchase_history || []);
// // // //         setSelectedCustomer(customerPhone);
// // // //         const customer = customers.find((c) => c.phone === customerPhone);
// // // //         if (customer) {
// // // //           setSelectedCustomerDetails(customer);
// // // //           setPurchaseStats(calculatePurchaseStats(data.purchase_history || []));
// // // //         }
// // // //         setShowPurchaseModal(true);
// // // //       }
// // // //       return data.purchase_history || [];
// // // //     } catch (err) {
// // // //       if (!silent) setError(err.message);
// // // //       return [];
// // // //     }
// // // //   };

// // // //   const calculateCustomerStats = (customerData) => {
// // // //     const stats = customerData.reduce(
// // // //       (acc, customer) => {
// // // //         const purchaseCount = customer.purchaseHistory.length;
// // // //         const totalSpent = customer.total_spent;
// // // //         const avgPurchase = purchaseCount > 0 ? totalSpent / purchaseCount : 0;

// // // //         return {
// // // //           totalCustomers: acc.totalCustomers + 1,
// // // //           totalPurchases: acc.totalPurchases + purchaseCount,
// // // //           totalSpending: acc.totalSpending + totalSpent,
// // // //           avgPurchaseValue: (acc.avgPurchaseValue * acc.totalCustomers + avgPurchase) / (acc.totalCustomers + 1),
// // // //           activeCustomers: acc.activeCustomers + (customer.daysSinceLastPurchase < 90 ? 1 : 0),
// // // //           inactiveCustomers: acc.inactiveCustomers + (customer.daysSinceLastPurchase >= 90 ? 1 : 0),
// // // //           highValueCustomers: acc.highValueCustomers + (customer.total_spent > 1000 ? 1 : 0),
// // // //           loyaltyPointsAvg: acc.loyaltyPointsAvg + (customer.loyaltyPoints || 0),
// // // //         };
// // // //       },
// // // //       {
// // // //         totalCustomers: 0,
// // // //         totalPurchases: 0,
// // // //         totalSpending: 0,
// // // //         avgPurchaseValue: 0,
// // // //         activeCustomers: 0,
// // // //         inactiveCustomers: 0,
// // // //         highValueCustomers: 0,
// // // //         loyaltyPointsAvg: 0,
// // // //       }
// // // //     );
// // // //     stats.loyaltyPointsAvg = stats.totalCustomers > 0 ? Math.round(stats.loyaltyPointsAvg / stats.totalCustomers) : 0;
// // // //     setCustomerStats(stats);
// // // //   };

// // // //   const calculatePurchaseStats = (history) => {
// // // //     const totalSpent = history.reduce((sum, p) => sum + (p.total_amount || 0), 0);
// // // //     const avgPurchase = history.length > 0 ? totalSpent / history.length : 0;
// // // //     const purchaseDates = history.map((p) => new Date(p.date));
// // // //     const frequency =
// // // //       history.length > 1
// // // //         ? (Math.max(...purchaseDates) - Math.min(...purchaseDates)) / (1000 * 60 * 60 * 24) / (history.length - 1)
// // // //         : 0;

// // // //     const purchasesByMonth = history.reduce((acc, purchase) => {
// // // //       const date = new Date(purchase.date);
// // // //       const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
// // // //       acc[monthKey] = (acc[monthKey] || 0) + purchase.total_amount;
// // // //       return acc;
// // // //     }, {});

// // // //     const purchaseTrendData = {
// // // //       labels: Object.keys(purchasesByMonth)
// // // //         .sort()
// // // //         .map((month) => {
// // // //           const [year, monthNum] = month.split("-");
// // // //           return `${monthNum}/${year.slice(2)}`;
// // // //         }),
// // // //       datasets: [
// // // //         {
// // // //           label: "Purchase Amount",
// // // //           data: Object.keys(purchasesByMonth)
// // // //             .sort()
// // // //             .map((month) => purchasesByMonth[month]),
// // // //           borderColor: "#2196F3",
// // // //           backgroundColor: "rgba(33, 150, 243, 0.2)",
// // // //           fill: true,
// // // //           tension: 0.4,
// // // //         },
// // // //       ],
// // // //     };

// // // //     return { totalSpent, avgPurchase, purchaseCount: history.length, frequency: Math.round(frequency), purchaseTrendData };
// // // //   };

// // // //   const generateTrendData = (customerData) => {
// // // //     const purchasesByMonth = {};
// // // //     customerData.forEach((customer) => {
// // // //       customer.purchaseHistory.forEach((purchase) => {
// // // //         const date = new Date(purchase.date);
// // // //         const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
// // // //         if (!purchasesByMonth[monthKey]) {
// // // //           purchasesByMonth[monthKey] = { totalAmount: 0, purchaseCount: 0, customerCount: new Set() };
// // // //         }
// // // //         purchasesByMonth[monthKey].totalAmount += purchase.total_amount || 0;
// // // //         purchasesByMonth[monthKey].purchaseCount += 1;
// // // //         purchasesByMonth[monthKey].customerCount.add(customer.phone);
// // // //       });
// // // //     });

// // // //     const sortedMonths = Object.keys(purchasesByMonth).sort();
// // // //     const trendData = {
// // // //       revenue: {
// // // //         labels: sortedMonths.map((month) => {
// // // //           const [year, monthNum] = month.split("-");
// // // //           return `${monthNum}/${year.slice(2)}`;
// // // //         }),
// // // //         datasets: [
// // // //           {
// // // //             label: "Monthly Revenue",
// // // //             data: sortedMonths.map((month) => purchasesByMonth[month].totalAmount),
// // // //             borderColor: "#2196F3",
// // // //             backgroundColor: "rgba(33, 150, 243, 0.2)",
// // // //             fill: true,
// // // //             tension: 0.4,
// // // //           },
// // // //         ],
// // // //       },
// // // //       purchases: {
// // // //         labels: sortedMonths.map((month) => {
// // // //           const [year, monthNum] = month.split("-");
// // // //           return `${monthNum}/${year.slice(2)}`;
// // // //         }),
// // // //         datasets: [
// // // //           {
// // // //             label: "Purchase Count",
// // // //             data: sortedMonths.map((month) => purchasesByMonth[month].purchaseCount),
// // // //             borderColor: "#4CAF50",
// // // //             backgroundColor: "rgba(76, 175, 80, 0.2)",
// // // //             fill: true,
// // // //             tension: 0.4,
// // // //           },
// // // //         ],
// // // //       },
// // // //       customers: {
// // // //         labels: sortedMonths.map((month) => {
// // // //           const [year, monthNum] = month.split("-");
// // // //           return `${monthNum}/${year.slice(2)}`;
// // // //         }),
// // // //         datasets: [
// // // //           {
// // // //             label: "Active Customers",
// // // //             data: sortedMonths.map((month) => purchasesByMonth[month].customerCount.size),
// // // //             borderColor: "#E91E63",
// // // //             backgroundColor: "rgba(233, 30, 99, 0.2)",
// // // //             fill: true,
// // // //             tension: 0.4,
// // // //           },
// // // //         ],
// // // //       },
// // // //     };
// // // //     setTrendData(trendData);
// // // //   };

// // // //   const identifyCustomerCategories = (customerData) => {
// // // //     const categories = { churnRisk: [], highValue: [], potentialLoyalists: [] };
// // // //     customerData.forEach((customer) => {
// // // //       if (customer.purchaseCount > 3 && customer.daysSinceLastPurchase > 120) categories.churnRisk.push(customer);
// // // //       if (customer.total_spent > 1000 && customer.purchaseCount > 5) categories.highValue.push(customer);
// // // //       if (customer.purchaseCount >= 2 && customer.purchaseCount < 5 && customer.daysSinceLastPurchase < 60 && customer.total_spent > 200)
// // // //         categories.potentialLoyalists.push(customer);
// // // //     });
// // // //     setRiskCategories(categories);
// // // //   };

// // // //   const updateChartData = (customerData) => {
// // // //     const segmentCounts = customerData.reduce((acc, customer) => {
// // // //       acc[customer.segment] = (acc[customer.segment] || 0) + 1;
// // // //       return acc;
// // // //     }, {});

// // // //     const spendingBySegment = customerData.reduce((acc, customer) => {
// // // //       acc[customer.segment] = (acc[customer.segment] || 0) + customer.total_spent;
// // // //       return acc;
// // // //     }, {});

// // // //     setChartData({
// // // //       segments: {
// // // //         labels: Object.keys(segmentCounts),
// // // //         datasets: [
// // // //           {
// // // //             label: "Customer Segments",
// // // //             data: Object.values(segmentCounts),
// // // //             backgroundColor: Object.keys(segmentCounts).map((seg) => getSegmentColor(seg)),
// // // //             borderWidth: 1,
// // // //             borderColor: "#ffffff",
// // // //           },
// // // //         ],
// // // //       },
// // // //       spending: {
// // // //         labels: Object.keys(spendingBySegment),
// // // //         datasets: [
// // // //           {
// // // //             label: "Spending by Segment",
// // // //             data: Object.values(spendingBySegment),
// // // //             backgroundColor: Object.keys(spendingBySegment).map((seg) => getSegmentColor(seg, 0.7)),
// // // //             borderWidth: 1,
// // // //             borderColor: "#ffffff",
// // // //           },
// // // //         ],
// // // //       },
// // // //       loyalty: {
// // // //         labels: ["0-50", "51-100", "101-200", "201-500", "501+"],
// // // //         datasets: [
// // // //           {
// // // //             label: "Loyalty Points Distribution",
// // // //             data: [
// // // //               customerData.filter((c) => c.loyaltyPoints >= 0 && c.loyaltyPoints <= 50).length,
// // // //               customerData.filter((c) => c.loyaltyPoints > 50 && c.loyaltyPoints <= 100).length,
// // // //               customerData.filter((c) => c.loyaltyPoints > 100 && c.loyaltyPoints <= 200).length,
// // // //               customerData.filter((c) => c.loyaltyPoints > 200 && c.loyaltyPoints <= 500).length,
// // // //               customerData.filter((c) => c.loyaltyPoints > 500).length,
// // // //             ],
// // // //             backgroundColor: ["#4CAF50", "#2196F3", "#FF9800", "#9C27B0", "#E91E63"],
// // // //             borderWidth: 1,
// // // //             borderColor: "#ffffff",
// // // //           },
// // // //         ],
// // // //       },
// // // //     });
// // // //   };

// // // //   const getSegmentColor = (segment, opacity = 1) => {
// // // //     const colors = {
// // // //       "High-Spender": `rgba(76, 175, 80, ${opacity})`,
// // // //       "Medium-Spender": `rgba(33, 150, 243, ${opacity})`,
// // // //       "Low-Spender": `rgba(255, 193, 7, ${opacity})`,
// // // //       "Occasional": `rgba(156, 39, 176, ${opacity})`,
// // // //       "Loyal": `rgba(233, 30, 99, ${opacity})`,
// // // //       "New-Customer": `rgba(255, 87, 34, ${opacity})`,
// // // //     };
// // // //     return colors[segment] || `rgba(117, 117, 117, ${opacity})`;
// // // //   };

// // // //   const formatCurrency = (amount) =>
// // // //     new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);

// // // //   const sortCustomers = (key) => {
// // // //     const direction = sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
// // // //     setSortConfig({ key, direction });
// // // //     const sorted = [...customers].sort((a, b) => {
// // // //       if (["total_spent", "loyaltyPoints", "purchaseCount", "daysSinceLastPurchase", "avgOrderValue"].includes(key)) {
// // // //         return direction === "asc" ? (a[key] || 0) - (b[key] || 0) : (b[key] || 0) - (a[key] || 0);
// // // //       }
// // // //       if (a[key] === null) return direction === "asc" ? 1 : -1;
// // // //       if (b[key] === null) return direction === "asc" ? -1 : 1;
// // // //       return direction === "asc"
// // // //         ? (a[key]?.toString() || "").localeCompare(b[key]?.toString() || "")
// // // //         : (b[key]?.toString() || "").localeCompare(a[key]?.toString() || "");
// // // //     });
// // // //     setCustomers(sorted);
// // // //   };

// // // //   const filteredCustomers = customers
// // // //     .filter((c) => c.total_spent >= spendingFilter.min && c.total_spent <= spendingFilter.max)
// // // //     .filter((c) => !recencyFilter || (c.daysSinceLastPurchase || Infinity) <= recencyFilter)
// // // //     .filter(
// // // //       (c) =>
// // // //         !searchTerm ||
// // // //         c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //         c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //         c.phone.includes(searchTerm)
// // // //     );

// // // //   const formatDate = (dateString) => {
// // // //     const options = { year: "numeric", month: "short", day: "numeric" };
// // // //     return new Date(dateString).toLocaleDateString(undefined, options);
// // // //   };

// // // //   const csvData = filteredCustomers.map((customer) => ({
// // // //     Name: customer.name,
// // // //     Email: customer.email,
// // // //     Phone: customer.phone,
// // // //     "Total Spent": formatCurrency(customer.total_spent).replace("$", ""),
// // // //     Segment: customer.segment,
// // // //     "Loyalty Points": customer.loyaltyPoints,
// // // //     "Purchase Count": customer.purchaseCount,
// // // //     "Last Purchase (Days)": customer.daysSinceLastPurchase,
// // // //     "Avg Order Value": formatCurrency(customer.avgOrderValue).replace("$", ""),
// // // //   }));

// // // //   const purchaseHistoryCsvData = purchaseHistory.map((purchase) => ({
// // // //     Date: formatDate(purchase.date),
// // // //     "Order ID": purchase.order_id || "N/A",
// // // //     "Total Amount": formatCurrency(purchase.total_amount).replace("$", ""),
// // // //     Products: purchase.products.map((p) => `${p.name} (x${p.quantity})`).join("; "),
// // // //   }));

// // // //   const getCustomerRiskLevel = (customer) => {
// // // //     if (!customer.daysSinceLastPurchase) return { level: "new", label: "New" };
// // // //     if (customer.daysSinceLastPurchase > 180) return { level: "high", label: "High Risk" };
// // // //     if (customer.daysSinceLastPurchase > 90) return { level: "medium", label: "Medium Risk" };
// // // //     return { level: "low", label: "Low Risk" };
// // // //   };

// // // //   const chartOptions = {
// // // //     responsive: true,
// // // //     maintainAspectRatio: false,
// // // //     plugins: {
// // // //       legend: { position: "top", labels: { color: "#4a5568", font: { size: 14 } } },
// // // //       tooltip: { backgroundColor: "rgba(0, 0, 0, 0.8)", titleFont: { size: 14 }, bodyFont: { size: 12 } },
// // // //     },
// // // //     scales: {
// // // //       x: { grid: { color: "rgba(0, 0, 0, 0.05)" }, ticks: { color: "#4a5568" } },
// // // //       y: { beginAtZero: true, grid: { color: "rgba(0, 0, 0, 0.05)" }, ticks: { color: "#4a5568" } },
// // // //     },
// // // //   };

// // // //   const pieChartOptions = {
// // // //     responsive: true,
// // // //     maintainAspectRatio: false,
// // // //     plugins: {
// // // //       legend: { position: "top", labels: { color: "#4a5568", font: { size: 14 } } },
// // // //       tooltip: { backgroundColor: "rgba(0, 0, 0, 0.8)", titleFont: { size: 14 }, bodyFont: { size: 12 } },
// // // //     },
// // // //   };

// // // //   return (
// // // //     <motion.div
// // // //       initial={{ opacity: 0 }}
// // // //       animate={{ opacity: 1 }}
// // // //       transition={{ duration: 0.5 }}
// // // //       style={{
// // // //         maxWidth: "1400px",
// // // //         margin: "20px auto",
// // // //         padding: "20px",
// // // //         fontFamily: "'Inter', sans-serif",
// // // //         background: "#f7fafc",
// // // //         borderRadius: "12px",
// // // //         boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
// // // //       }}
// // // //     >
// // // //       <motion.h2
// // // //         initial={{ y: -20 }}
// // // //         animate={{ y: 0 }}
// // // //         transition={{ duration: 0.5 }}
// // // //         style={{ fontSize: "28px", color: "#2d3748", textAlign: "center", marginBottom: "25px" }}
// // // //       >
// // // //         Customer Segmentation Dashboard
// // // //       </motion.h2>

// // // //       {/* Summary Cards */}
// // // //       {customerStats.totalCustomers > 0 && (
// // // //         <motion.div
// // // //           initial={{ y: 20 }}
// // // //           animate={{ y: 0 }}
// // // //           transition={{ duration: 0.5, delay: 0.2 }}
// // // //           style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "30px" }}
// // // //         >
// // // //           {[
// // // //             { title: "Total Customers", value: customerStats.totalCustomers, color: "#3b82f6", icon: <Users size={20} /> },
// // // //             { title: "Total Revenue", value: formatCurrency(customerStats.totalSpending), color: "#10b981", icon: <TrendingUp size={20} /> },
// // // //             { title: "Avg Order Value", value: formatCurrency(customerStats.avgPurchaseValue), color: "#f59e0b", icon: <BarChart2 size={20} /> },
// // // //             { title: "Active Customers", value: customerStats.activeCustomers, color: "#8b5cf6", icon: <Users size={20} /> },
// // // //           ].map((stat, index) => (
// // // //             <motion.div
// // // //               key={index}
// // // //               whileHover={{ scale: 1.05 }}
// // // //               style={{
// // // //                 flex: "1",
// // // //                 minWidth: "200px",
// // // //                 background: "white",
// // // //                 padding: "20px",
// // // //                 borderRadius: "12px",
// // // //                 boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // //                 textAlign: "center",
// // // //               }}
// // // //             >
// // // //               <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
// // // //                 <span style={{ color: stat.color }}>{stat.icon}</span>
// // // //                 <div style={{ fontSize: "14px", color: "#718096" }}>{stat.title}</div>
// // // //               </div>
// // // //               <div style={{ fontSize: "24px", fontWeight: "600", color: stat.color }}>{stat.value}</div>
// // // //             </motion.div>
// // // //           ))}
// // // //         </motion.div>
// // // //       )}

// // // //       {/* Filters and Controls */}
// // // //       <motion.div
// // // //         initial={{ y: 20 }}
// // // //         animate={{ y: 0 }}
// // // //         transition={{ duration: 0.5, delay: 0.3 }}
// // // //         style={{ display: "flex", flexWrap: "wrap", gap: "15px", marginBottom: "25px", alignItems: "center" }}
// // // //       >
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Search by name, email, or phone..."
// // // //           value={searchTerm}
// // // //           onChange={(e) => setSearchTerm(e.target.value)}
// // // //           style={{ flex: "1", minWidth: "250px", padding: "12px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "15px" }}
// // // //         />
// // // //         <motion.button
// // // //           whileHover={{ scale: 1.05 }}
// // // //           whileTap={{ scale: 0.95 }}
// // // //           onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
// // // //           style={{
// // // //             backgroundColor: showAdvancedFilters ? "#3b82f6" : "#edf2f7",
// // // //             color: showAdvancedFilters ? "white" : "#4a5568",
// // // //             padding: "12px 20px",
// // // //             borderRadius: "8px",
// // // //             border: "none",
// // // //             cursor: "pointer",
// // // //             fontWeight: "500",
// // // //             display: "flex",
// // // //             alignItems: "center",
// // // //             gap: "8px",
// // // //           }}
// // // //         >
// // // //           {showAdvancedFilters ? "Hide Filters" : "Show Filters"}
// // // //           <span style={{ transform: showAdvancedFilters ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>▼</span>
// // // //         </motion.button>
// // // //         <div style={{ display: "flex", gap: "10px" }}>
// // // //           {["data", "visualizations"].map((tab) => (
// // // //             <motion.button
// // // //               key={tab}
// // // //               whileHover={{ scale: 1.05 }}
// // // //               whileTap={{ scale: 0.95 }}
// // // //               onClick={() => setActiveTab(tab)}
// // // //               style={{
// // // //                 backgroundColor: activeTab === tab ? "#3b82f6" : "#edf2f7",
// // // //                 color: activeTab === tab ? "white" : "#4a5568",
// // // //                 padding: "12px 15px",
// // // //                 borderRadius: "8px",
// // // //                 border: "none",
// // // //                 cursor: "pointer",
// // // //                 fontWeight: "500",
// // // //               }}
// // // //             >
// // // //               {tab === "data" ? "Customer Data" : "Visualizations"}
// // // //             </motion.button>
// // // //           ))}
// // // //           <motion.button
// // // //             whileHover={{ scale: 1.05 }}
// // // //             whileTap={{ scale: 0.95 }}
// // // //             style={{
// // // //               backgroundColor: "#10b981",
// // // //               color: "white",
// // // //               padding: "12px 15px",
// // // //               borderRadius: "8px",
// // // //               border: "none",
// // // //               cursor: "pointer",
// // // //               fontWeight: "500",
// // // //               display: "flex",
// // // //               alignItems: "center",
// // // //               gap: "8px",
// // // //             }}
// // // //           >
// // // //             <CSVLink
// // // //               data={csvData}
// // // //               filename={"customer-data.csv"}
// // // //               style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}
// // // //             >
// // // //               <span>↓</span> Export CSV
// // // //             </CSVLink>
// // // //           </motion.button>
// // // //         </div>
// // // //       </motion.div>

// // // //       {/* Advanced Filters */}
// // // //       <AnimatePresence>
// // // //         {showAdvancedFilters && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0, height: 0 }}
// // // //             animate={{ opacity: 1, height: "auto" }}
// // // //             exit={{ opacity: 0, height: 0 }}
// // // //             transition={{ duration: 0.3 }}
// // // //             style={{
// // // //               background: "white",
// // // //               padding: "20px",
// // // //               borderRadius: "12px",
// // // //               boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // //               marginBottom: "25px",
// // // //             }}
// // // //           >
// // // //             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
// // // //               <div style={{ flex: "1", minWidth: "200px" }}>
// // // //                 <label style={{ display: "block", fontWeight: "500", marginBottom: "8px", color: "#4a5568" }}>Segment:</label>
// // // //                 <select
// // // //                   value={segment}
// // // //                   onChange={(e) => setSegment(e.target.value)}
// // // //                   style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "15px" }}
// // // //                 >
// // // //                   <option value="All">All Customers</option>
// // // //                   <option value="High-Spender">High Spender</option>
// // // //                   <option value="Medium-Spender">Medium Spender</option>
// // // //                   <option value="Low-Spender">Low Spender</option>
// // // //                   <option value="Occasional">Occasional</option>
// // // //                   <option value="Loyal">Loyal</option>
// // // //                   <option value="New-Customer">New Customer</option>
// // // //                 </select>
// // // //               </div>
// // // //               <div style={{ flex: "1", minWidth: "200px" }}>
// // // //                 <label style={{ display: "block", fontWeight: "500", marginBottom: "8px", color: "#4a5568" }}>Min Loyalty Points:</label>
// // // //                 <input
// // // //                   type="number"
// // // //                   value={loyaltyFilter}
// // // //                   onChange={(e) => setLoyaltyFilter(e.target.value)}
// // // //                   style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "15px" }}
// // // //                 />
// // // //               </div>
// // // //               <div style={{ flex: "1", minWidth: "200px" }}>
// // // //                 <label style={{ display: "block", fontWeight: "500", marginBottom: "8px", color: "#4a5568" }}>Recency (Last X Days):</label>
// // // //                 <input
// // // //                   type="range"
// // // //                   min="30"
// // // //                   max="730"
// // // //                   step="30"
// // // //                   value={recencyFilter}
// // // //                   onChange={(e) => setRecencyFilter(Number(e.target.value))}
// // // //                   style={{ width: "100%" }}
// // // //                 />
// // // //                 <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#718096" }}>
// // // //                   <span>30 days</span>
// // // //                   <span>{recencyFilter} days</span>
// // // //                   <span>2 years</span>
// // // //                 </div>
// // // //               </div>
// // // //               <div style={{ flex: "1", minWidth: "200px" }}>
// // // //                 <label style={{ display: "block", fontWeight: "500", marginBottom: "8px", color: "#4a5568" }}>Date Range:</label>
// // // //                 <div style={{ display: "flex", gap: "10px" }}>
// // // //                   <input
// // // //                     type="date"
// // // //                     value={dateRange.start}
// // // //                     onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
// // // //                     style={{ flex: "1", padding: "12px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "15px" }}
// // // //                   />
// // // //                   <input
// // // //                     type="date"
// // // //                     value={dateRange.end}
// // // //                     onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
// // // //                     style={{ flex: "1", padding: "12px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "15px" }}
// // // //                   />
// // // //                 </div>
// // // //               </div>
// // // //               <div style={{ flex: "1", minWidth: "200px" }}>
// // // //                 <label style={{ display: "block", fontWeight: "500", marginBottom: "8px", color: "#4a5568" }}>Spending Range:</label>
// // // //                 <div style={{ display: "flex", gap: "10px" }}>
// // // //                   <input
// // // //                     type="number"
// // // //                     placeholder="Min"
// // // //                     value={spendingFilter.min}
// // // //                     onChange={(e) => setSpendingFilter({ ...spendingFilter, min: Number(e.target.value) })}
// // // //                     style={{ flex: "1", padding: "12px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "15px" }}
// // // //                   />
// // // //                   <input
// // // //                     type="number"
// // // //                     placeholder="Max"
// // // //                     value={spendingFilter.max === Infinity ? "" : spendingFilter.max}
// // // //                     onChange={(e) => setSpendingFilter({ ...spendingFilter, max: Number(e.target.value) || Infinity })}
// // // //                     style={{ flex: "1", padding: "12px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "15px" }}
// // // //                   />
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>

// // // //       {/* Tab Content */}
// // // //       <AnimatePresence mode="wait">
// // // //         {loading ? (
// // // //           <motion.div
// // // //             key="loading"
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             exit={{ opacity: 0 }}
// // // //             style={{ textAlign: "center", padding: "40px", color: "#718096" }}
// // // //           >
// // // //             <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} style={{ fontSize: "24px" }}>
// // // //               ⏳
// // // //             </motion.div>
// // // //             <div style={{ marginTop: "10px" }}>Loading customer data...</div>
// // // //           </motion.div>
// // // //         ) : error ? (
// // // //           <motion.div
// // // //             key="error"
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             exit={{ opacity: 0 }}
// // // //             style={{ textAlign: "center", padding: "40px", color: "#e53e3e", background: "#fefcbf", borderRadius: "8px" }}
// // // //           >
// // // //             Error: {error}
// // // //           </motion.div>
// // // //         ) : activeTab === "data" ? (
// // // //           <motion.div
// // // //             key="data"
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             exit={{ opacity: 0, y: 20 }}
// // // //             transition={{ duration: 0.5 }}
// // // //           >
// // // //             <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
// // // //               <motion.button
// // // //                 whileHover={{ scale: 1.05 }}
// // // //                 whileTap={{ scale: 0.95 }}
// // // //                 onClick={() => setViewMode("table")}
// // // //                 style={{
// // // //                   backgroundColor: viewMode === "table" ? "#3b82f6" : "#edf2f7",
// // // //                   color: viewMode === "table" ? "white" : "#4a5568",
// // // //                   padding: "10px 15px",
// // // //                   borderRadius: "8px",
// // // //                   border: "none",
// // // //                   cursor: "pointer",
// // // //                   fontWeight: "500",
// // // //                 }}
// // // //               >
// // // //                 Table View
// // // //               </motion.button>
// // // //               <motion.button
// // // //                 whileHover={{ scale: 1.05 }}
// // // //                 whileTap={{ scale: 0.95 }}
// // // //                 onClick={() => setViewMode("card")}
// // // //                 style={{
// // // //                   backgroundColor: viewMode === "card" ? "#3b82f6" : "#edf2f7",
// // // //                   color: viewMode === "card" ? "white" : "#4a5568",
// // // //                   padding: "10px 15px",
// // // //                   borderRadius: "8px",
// // // //                   border: "none",
// // // //                   cursor: "pointer",
// // // //                   fontWeight: "500",
// // // //                 }}
// // // //               >
// // // //                 Card View
// // // //               </motion.button>
// // // //             </div>

// // // //             {filteredCustomers.length === 0 ? (
// // // //               <div style={{ textAlign: "center", padding: "20px", color: "#718096" }}>
// // // //                 No customers found matching the selected filters.
// // // //               </div>
// // // //             ) : viewMode === "table" ? (
// // // //               <div style={{ overflowX: "auto", background: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
// // // //                 <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 8px" }}>
// // // //                   <thead>
// // // //                     <tr style={{ background: "#edf2f7", color: "#2d3748" }}>
// // // //                       {["Name", "Email", "Phone", "Total Spent", "Segment", "Loyalty Points", "Last Purchase", "Risk Level", "Actions"].map((header) => (
// // // //                         <th
// // // //                           key={header}
// // // //                           onClick={() => header !== "Actions" && sortCustomers(header.toLowerCase().replace(" ", "_"))}
// // // //                           style={{
// // // //                             padding: "12px",
// // // //                             fontWeight: "600",
// // // //                             textAlign: "left",
// // // //                             cursor: header !== "Actions" ? "pointer" : "default",
// // // //                           }}
// // // //                         >
// // // //                           {header}
// // // //                           {sortConfig.key === header.toLowerCase().replace(" ", "_") && (
// // // //                             <span style={{ marginLeft: "5px" }}>{sortConfig.direction === "asc" ? "▲" : "▼"}</span>
// // // //                           )}
// // // //                         </th>
// // // //                       ))}
// // // //                     </tr>
// // // //                   </thead>
// // // //                   <tbody>
// // // //                     {filteredCustomers.map((customer, index) => {
// // // //                       const riskLevel = getCustomerRiskLevel(customer);
// // // //                       return (
// // // //                         <motion.tr
// // // //                           key={index}
// // // //                           initial={{ opacity: 0, y: 10 }}
// // // //                           animate={{ opacity: 1, y: 0 }}
// // // //                           transition={{ duration: 0.3, delay: index * 0.05 }}
// // // //                           style={{ background: index % 2 === 0 ? "#f7fafc" : "white" }}
// // // //                           whileHover={{ backgroundColor: "#edf2f7" }}
// // // //                         >
// // // //                           <td style={{ padding: "12px", color: "#4a5568" }}>{customer.name}</td>
// // // //                           <td style={{ padding: "12px", color: "#4a5568" }}>{customer.email}</td>
// // // //                           <td style={{ padding: "12px", color: "#4a5568" }}>{customer.phone}</td>
// // // //                           <td style={{ padding: "12px", color: "#3b82f6", textAlign: "right" }}>{formatCurrency(customer.total_spent)}</td>
// // // //                           <td style={{ padding: "12px" }}>
// // // //                             <span
// // // //                               style={{
// // // //                                 backgroundColor: getSegmentColor(customer.segment, 0.2),
// // // //                                 color: getSegmentColor(customer.segment),
// // // //                                 padding: "4px 8px",
// // // //                                 borderRadius: "4px",
// // // //                                 fontSize: "12px",
// // // //                               }}
// // // //                             >
// // // //                               {customer.segment}
// // // //                             </span>
// // // //                           </td>
// // // //                           <td style={{ padding: "12px", color: "#4a5568" }}>{customer.loyaltyPoints}</td>
// // // //                           <td style={{ padding: "12px", color: "#4a5568" }}>
// // // //                             {customer.daysSinceLastPurchase !== null ? `${customer.daysSinceLastPurchase} days` : "N/A"}
// // // //                           </td>
// // // //                           <td style={{ padding: "12px" }}>
// // // //                             <span
// // // //                               style={{
// // // //                                 backgroundColor: riskLevel.level === "high" ? "#fee2e2" : riskLevel.level === "medium" ? "#fef3c7" : "#d1fae5",
// // // //                                 color: riskLevel.level === "high" ? "#dc2626" : riskLevel.level === "medium" ? "#d97706" : "#059669",
// // // //                                 padding: "4px 8px",
// // // //                                 borderRadius: "4px",
// // // //                                 fontSize: "12px",
// // // //                               }}
// // // //                             >
// // // //                               {riskLevel.label}
// // // //                             </span>
// // // //                           </td>
// // // //                           <td style={{ padding: "12px" }}>
// // // //                             <motion.button
// // // //                               whileHover={{ scale: 1.05 }}
// // // //                               whileTap={{ scale: 0.95 }}
// // // //                               onClick={() => fetchPurchaseHistory(customer.phone)}
// // // //                               style={{
// // // //                                 backgroundColor: "#3b82f6",
// // // //                                 color: "white",
// // // //                                 padding: "8px 12px",
// // // //                                 borderRadius: "4px",
// // // //                                 border: "none",
// // // //                                 cursor: "pointer",
// // // //                               }}
// // // //                             >
// // // //                               View History
// // // //                             </motion.button>
// // // //                           </td>
// // // //                         </motion.tr>
// // // //                       );
// // // //                     })}
// // // //                   </tbody>
// // // //                 </table>
// // // //               </div>
// // // //             ) : (
// // // //               <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
// // // //                 {filteredCustomers.map((customer, index) => {
// // // //                   const riskLevel = getCustomerRiskLevel(customer);
// // // //                   return (
// // // //                     <motion.div
// // // //                       key={index}
// // // //                       initial={{ opacity: 0, y: 20 }}
// // // //                       animate={{ opacity: 1, y: 0 }}
// // // //                       transition={{ duration: 0.3, delay: index * 0.05 }}
// // // //                       whileHover={{ scale: 1.03 }}
// // // //                       style={{
// // // //                         background: "white",
// // // //                         padding: "20px",
// // // //                         borderRadius: "12px",
// // // //                         boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // //                       }}
// // // //                     >
// // // //                       <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
// // // //                         <div
// // // //                           style={{
// // // //                             width: "40px",
// // // //                             height: "40px",
// // // //                             borderRadius: "50%",
// // // //                             backgroundColor: getSegmentColor(customer.segment, 0.2),
// // // //                             color: getSegmentColor(customer.segment),
// // // //                             display: "flex",
// // // //                             alignItems: "center",
// // // //                             justifyContent: "center",
// // // //                             fontSize: "18px",
// // // //                             marginRight: "12px",
// // // //                           }}
// // // //                         >
// // // //                           {customer.name.charAt(0)}
// // // //                         </div>
// // // //                         <div>
// // // //                           <div style={{ fontSize: "16px", fontWeight: "600", color: "#2d3748" }}>{customer.name}</div>
// // // //                           <div style={{ fontSize: "13px", color: "#718096" }}>{customer.email}</div>
// // // //                         </div>
// // // //                       </div>
// // // //                       <div style={{ fontSize: "14px", color: "#4a5568", marginBottom: "15px" }}>
// // // //                         <div style={{ display: "flex", justifyContent: "space-between" }}>
// // // //                           <span>Total Spent:</span>
// // // //                           <span style={{ color: "#3b82f6" }}>{formatCurrency(customer.total_spent)}</span>
// // // //                         </div>
// // // //                         <div style={{ display: "flex", justifyContent: "space-between" }}>
// // // //                           <span>Loyalty Points:</span>
// // // //                           <span>{customer.loyaltyPoints}</span>
// // // //                         </div>
// // // //                         <div style={{ display: "flex", justifyContent: "space-between" }}>
// // // //                           <span>Last Purchase:</span>
// // // //                           <span>{customer.daysSinceLastPurchase !== null ? `${customer.daysSinceLastPurchase} days` : "N/A"}</span>
// // // //                         </div>
// // // //                       </div>
// // // //                       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // // //                         <span
// // // //                           style={{
// // // //                             backgroundColor: riskLevel.level === "high" ? "#fee2e2" : riskLevel.level === "medium" ? "#fef3c7" : "#d1fae5",
// // // //                             color: riskLevel.level === "high" ? "#dc2626" : riskLevel.level === "medium" ? "#d97706" : "#059669",
// // // //                             padding: "4px 8px",
// // // //                             borderRadius: "4px",
// // // //                             fontSize: "12px",
// // // //                           }}
// // // //                         >
// // // //                           {riskLevel.label}
// // // //                         </span>
// // // //                         <motion.button
// // // //                           whileHover={{ scale: 1.05 }}
// // // //                           whileTap={{ scale: 0.95 }}
// // // //                           onClick={() => fetchPurchaseHistory(customer.phone)}
// // // //                           style={{
// // // //                             backgroundColor: "#3b82f6",
// // // //                             color: "white",
// // // //                             padding: "8px 12px",
// // // //                             borderRadius: "4px",
// // // //                             border: "none",
// // // //                             cursor: "pointer",
// // // //                           }}
// // // //                         >
// // // //                           View History
// // // //                         </motion.button>
// // // //                       </div>
// // // //                     </motion.div>
// // // //                   );
// // // //                 })}
// // // //               </div>
// // // //             )}
// // // //           </motion.div>
// // // //         ) : (
// // // //           <motion.div
// // // //             key="visualizations"
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             exit={{ opacity: 0, y: 20 }}
// // // //             transition={{ duration: 0.5 }}
// // // //           >
// // // //             {chartData && trendData && (
// // // //               <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "25px" }}>
// // // //                 <motion.div
// // // //                   initial={{ opacity: 0, y: 20 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   transition={{ duration: 0.5, delay: 0.1 }}
// // // //                   style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
// // // //                 >
// // // //                   <h3 style={{ fontSize: "18px", color: "#2d3748", marginBottom: "15px", display: "flex", alignItems: "center", gap: "10px" }}>
// // // //                     <PieChart size={20} /> Customer Segments
// // // //                   </h3>
// // // //                   <div style={{ height: "300px" }}>
// // // //                     <Chart type="pie" data={chartData.segments} options={pieChartOptions} />
// // // //                   </div>
// // // //                 </motion.div>
// // // //                 <motion.div
// // // //                   initial={{ opacity: 0, y: 20 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   transition={{ duration: 0.5, delay: 0.2 }}
// // // //                   style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
// // // //                 >
// // // //                   <h3 style={{ fontSize: "18px", color: "#2d3748", marginBottom: "15px", display: "flex", alignItems: "center", gap: "10px" }}>
// // // //                     <BarChart2 size={20} /> Spending by Segment
// // // //                   </h3>
// // // //                   <div style={{ height: "300px" }}>
// // // //                     <Chart type="bar" data={chartData.spending} options={chartOptions} />
// // // //                   </div>
// // // //                 </motion.div>
// // // //                 <motion.div
// // // //                   initial={{ opacity: 0, y: 20 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   transition={{ duration: 0.5, delay: 0.3 }}
// // // //                   style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
// // // //                 >
// // // //                   <h3 style={{ fontSize: "18px", color: "#2d3748", marginBottom: "15px", display: "flex", alignItems: "center", gap: "10px" }}>
// // // //                     <PieChart size={20} /> Loyalty Points Distribution
// // // //                   </h3>
// // // //                   <div style={{ height: "300px" }}>
// // // //                     <Chart type="pie" data={chartData.loyalty} options={pieChartOptions} />
// // // //                   </div>
// // // //                 </motion.div>
// // // //                 <motion.div
// // // //                   initial={{ opacity: 0, y: 20 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   transition={{ duration: 0.5, delay: 0.4 }}
// // // //                   style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
// // // //                 >
// // // //                   <h3 style={{ fontSize: "18px", color: "#2d3748", marginBottom: "15px", display: "flex", alignItems: "center", gap: "10px" }}>
// // // //                     <TrendingUp size={20} /> Revenue Trend
// // // //                   </h3>
// // // //                   <div style={{ height: "300px" }}>
// // // //                     <Chart type="line" data={trendData.revenue} options={chartOptions} />
// // // //                   </div>
// // // //                 </motion.div>
// // // //                 <motion.div
// // // //                   initial={{ opacity: 0, y: 20 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   transition={{ duration: 0.5, delay: 0.5 }}
// // // //                   style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
// // // //                 >
// // // //                   <h3 style={{ fontSize: "18px", color: "#2d3748", marginBottom: "15px", display: "flex", alignItems: "center", gap: "10px" }}>
// // // //                     <TrendingUp size={20} /> Purchase Count Trend
// // // //                   </h3>
// // // //                   <div style={{ height: "300px" }}>
// // // //                     <Chart type="line" data={trendData.purchases} options={chartOptions} />
// // // //                   </div>
// // // //                 </motion.div>
// // // //                 <motion.div
// // // //                   initial={{ opacity: 0, y: 20 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   transition={{ duration: 0.5, delay: 0.6 }}
// // // //                   style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
// // // //                 >
// // // //                   <h3 style={{ fontSize: "18px", color: "#2d3748", marginBottom: "15px", display: "flex", alignItems: "center", gap: "10px" }}>
// // // //                     <Users size={20} /> Active Customers Trend
// // // //                   </h3>
// // // //                   <div style={{ height: "300px" }}>
// // // //                     <Chart type="line" data={trendData.customers} options={chartOptions} />
// // // //                   </div>
// // // //                 </motion.div>
// // // //               </div>
// // // //             )}
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>

// // // //       {/* Purchase History Modal */}
// // // //       <AnimatePresence>
// // // //         {showPurchaseModal && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             exit={{ opacity: 0 }}
// // // //             transition={{ duration: 0.3 }}
// // // //             style={{
// // // //               position: "fixed",
// // // //               top: 0,
// // // //               left: 0,
// // // //               right: 0,
// // // //               bottom: 0,
// // // //               backgroundColor: "rgba(0, 0, 0, 0.6)",
// // // //               display: "flex",
// // // //               justifyContent: "center",
// // // //               alignItems: "center",
// // // //               zIndex: 1000,
// // // //               backdropFilter: "blur(5px)",
// // // //             }}
// // // //             onClick={() => setShowPurchaseModal(false)}
// // // //           >
// // // //             <motion.div
// // // //               initial={{ y: 50, opacity: 0 }}
// // // //               animate={{ y: 0, opacity: 1 }}
// // // //               exit={{ y: 50, opacity: 0 }}
// // // //               transition={{ duration: 0.3 }}
// // // //               style={{
// // // //                 background: "white",
// // // //                 borderRadius: "16px",
// // // //                 width: "90%",
// // // //                 maxWidth: "900px",
// // // //                 maxHeight: "90vh",
// // // //                 overflow: "hidden",
// // // //                 boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
// // // //                 display: "flex",
// // // //                 flexDirection: "column",
// // // //               }}
// // // //               onClick={(e) => e.stopPropagation()}
// // // //             >
// // // //               <div style={{ padding: "20px", borderBottom: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // // //                 <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "600", color: "#2d3748" }}>
// // // //                   Purchase History - {selectedCustomerDetails?.name}
// // // //                 </h3>
// // // //                 <motion.button
// // // //                   whileHover={{ scale: 1.1 }}
// // // //                   whileTap={{ scale: 0.9 }}
// // // //                   onClick={() => setShowPurchaseModal(false)}
// // // //                   style={{ background: "none", border: "none", fontSize: "24px", cursor: "pointer", color: "#718096" }}
// // // //                 >
// // // //                   ×
// // // //                 </motion.button>
// // // //               </div>
// // // //               <div style={{ padding: "20px", overflowY: "auto", maxHeight: "calc(90vh - 140px)" }}>
// // // //                 <div style={{ marginBottom: "20px" }}>
// // // //                   <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#2d3748", marginBottom: "15px" }}>Customer Summary</h4>
// // // //                   <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "15px" }}>
// // // //                     <div>
// // // //                       <span style={{ fontSize: "13px", color: "#718096" }}>Name:</span>
// // // //                       <div style={{ fontSize: "14px", fontWeight: "500", color: "#2d3748" }}>{selectedCustomerDetails?.name}</div>
// // // //                     </div>
// // // //                     <div>
// // // //                       <span style={{ fontSize: "13px", color: "#718096" }}>Total Spent:</span>
// // // //                       <div style={{ fontSize: "14px", fontWeight: "500", color: "#3b82f6" }}>{formatCurrency(purchaseStats?.totalSpent)}</div>
// // // //                     </div>
// // // //                     <div>
// // // //                       <span style={{ fontSize: "13px", color: "#718096" }}>Avg Purchase:</span>
// // // //                       <div style={{ fontSize: "14px", fontWeight: "500", color: "#f59e0b" }}>{formatCurrency(purchaseStats?.avgPurchase)}</div>
// // // //                     </div>
// // // //                     <div>
// // // //                       <span style={{ fontSize: "13px", color: "#718096" }}>Frequency:</span>
// // // //                       <div style={{ fontSize: "14px", fontWeight: "500", color: "#10b981" }}>
// // // //                         {purchaseStats?.frequency ? `Every ${purchaseStats.frequency} days` : "N/A"}
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>

// // // //                 {purchaseStats?.purchaseTrendData && (
// // // //                   <div style={{ marginBottom: "20px", background: "#f7fafc", padding: "15px", borderRadius: "8px" }}>
// // // //                     <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#2d3748", marginBottom: "15px" }}>Purchase Trend</h4>
// // // //                     <div style={{ height: "250px" }}>
// // // //                       <Chart type="line" data={purchaseStats.purchaseTrendData} options={chartOptions} />
// // // //                     </div>
// // // //                   </div>
// // // //                 )}

// // // //                 <div>
// // // //                   <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#2d3748", marginBottom: "15px" }}>
// // // //                     Purchase History ({purchaseStats?.purchaseCount || 0})
// // // //                   </h4>
// // // //                   <div style={{ maxHeight: "300px", overflowY: "auto" }}>
// // // //                     {purchaseHistory.map((purchase, index) => (
// // // //                       <motion.div
// // // //                         key={index}
// // // //                         initial={{ opacity: 0, y: 10 }}
// // // //                         animate={{ opacity: 1, y: 0 }}
// // // //                         transition={{ duration: 0.3, delay: index * 0.05 }}
// // // //                         style={{
// // // //                           background: index % 2 === 0 ? "#f7fafc" : "white",
// // // //                           padding: "15px",
// // // //                           borderRadius: "8px",
// // // //                           marginBottom: "10px",
// // // //                           cursor: "pointer",
// // // //                         }}
// // // //                         whileHover={{ backgroundColor: "#edf2f7" }}
// // // //                         onClick={() => setSelectedPurchase(purchase)}
// // // //                       >
// // // //                         <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
// // // //                           <span style={{ fontSize: "14px", fontWeight: "500", color: "#2d3748" }}>{formatDate(purchase.date)}</span>
// // // //                           <span style={{ fontSize: "14px", fontWeight: "500", color: "#3b82f6" }}>{formatCurrency(purchase.total_amount)}</span>
// // // //                         </div>
// // // //                         <div style={{ fontSize: "13px", color: "#718096" }}>
// // // //                           {purchase.products.map((p) => `${p.name} (x${p.quantity})`).join(", ")}
// // // //                         </div>
// // // //                       </motion.div>
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>

// // // //                 {selectedPurchase && (
// // // //                   <div style={{ marginTop: "20px", background: "#f7fafc", padding: "15px", borderRadius: "8px" }}>
// // // //                     <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#2d3748", marginBottom: "15px" }}>Selected Purchase Details</h4>
// // // //                     <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", marginBottom: "15px" }}>
// // // //                       <div>
// // // //                         <span style={{ fontSize: "13px", color: "#718096" }}>Date:</span>
// // // //                         <span style={{ fontSize: "14px", fontWeight: "500", color: "#2d3748" }}>{formatDate(selectedPurchase.date)}</span>
// // // //                       </div>
// // // //                       <div>
// // // //                         <span style={{ fontSize: "13px", color: "#718096" }}>Order ID:</span>
// // // //                         <span style={{ fontSize: "14px", fontWeight: "500", color: "#2d3748" }}>{selectedPurchase.order_id || "N/A"}</span>
// // // //                       </div>
// // // //                     </div>
// // // //                     <div>
// // // //                       <h5 style={{ fontSize: "14px", fontWeight: "500", color: "#2d3748", marginBottom: "10px" }}>Products</h5>
// // // //                       {selectedPurchase.products.map((product, idx) => (
// // // //                         <div key={idx} style={{ marginBottom: "10px", fontSize: "13px", color: "#4a5568" }}>
// // // //                           <span style={{ fontWeight: "500" }}>{product.name}</span>
// // // //                           <span style={{ color: "#718096" }}> (x{product.quantity}) - {formatCurrency(product.price)}</span>
// // // //                         </div>
// // // //                       ))}
// // // //                       <div style={{ fontSize: "14px", fontWeight: "600", color: "#3b82f6", marginTop: "15px" }}>
// // // //                         Total: {formatCurrency(selectedPurchase.total_amount)}
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 )}
// // // //               </div>
// // // //               <div style={{ padding: "15px", borderTop: "1px solid #e2e8f0", display: "flex", justifyContent: "flex-end" }}>
// // // //                 <motion.button
// // // //                   whileHover={{ scale: 1.05 }}
// // // //                   whileTap={{ scale: 0.95 }}
// // // //                   style={{
// // // //                     backgroundColor: "#10b981",
// // // //                     color: "white",
// // // //                     padding: "10px 15px",
// // // //                     borderRadius: "8px",
// // // //                     border: "none",
// // // //                     cursor: "pointer",
// // // //                     fontWeight: "500",
// // // //                     display: "flex",
// // // //                     alignItems: "center",
// // // //                     gap: "8px",
// // // //                   }}
// // // //                 >
// // // //                   <CSVLink
// // // //                     data={purchaseHistoryCsvData}
// // // //                     filename={`purchase-history-${selectedCustomerDetails?.phone}.csv`}
// // // //                     style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}
// // // //                   >
// // // //                     <span>↓</span> Export Purchase History
// // // //                   </CSVLink>
// // // //                 </motion.button>
// // // //               </div>
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </motion.div>
// // // //   );
// // // // };

// // // // export default CustomerSegmentation;

// // // import React, { useState, useEffect } from "react";
// // // import { Chart } from "react-chartjs-2";
// // // import { CSVLink } from "react-csv";
// // // import "chart.js/auto";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { BarChart2, PieChart, TrendingUp, Users, Filter, X } from "lucide-react";

// // // const CustomerSegmentation = () => {
// // //   const [customers, setCustomers] = useState([]);
// // //   const [segment, setSegment] = useState("All");
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);
// // //   const [loyaltyFilter, setLoyaltyFilter] = useState(0);
// // //   const [selectedCustomer, setSelectedCustomer] = useState(null);
// // //   const [purchaseHistory, setPurchaseHistory] = useState([]);
// // //   const [dateRange, setDateRange] = useState({ start: "", end: "" });
// // //   const [spendingFilter, setSpendingFilter] = useState({ min: 0, max: Infinity });
// // //   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
// // //   const [chartData, setChartData] = useState(null);
// // //   const [customerStats, setCustomerStats] = useState({});
// // //   const [activeTab, setActiveTab] = useState("data");
// // //   const [trendData, setTrendData] = useState(null);
// // //   const [viewMode, setViewMode] = useState("table");
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [showSidebar, setShowSidebar] = useState(false);
// // //   const [recencyFilter, setRecencyFilter] = useState(365);
// // //   const [riskCategories, setRiskCategories] = useState({
// // //     churnRisk: [],
// // //     highValue: [],
// // //     potentialLoyalists: [],
// // //   });
// // //   const [showPurchaseModal, setShowPurchaseModal] = useState(false);
// // //   const [selectedPurchase, setSelectedPurchase] = useState(null);
// // //   const [selectedCustomerDetails, setSelectedCustomerDetails] = useState(null);
// // //   const [purchaseStats, setPurchaseStats] = useState(null);

// // //   useEffect(() => {
// // //     const fetchCustomers = async () => {
// // //       setLoading(true);
// // //       try {
// // //         const params = new URLSearchParams({
// // //           storeId: localStorage.getItem("storeId"),
// // //           segment: segment !== "All" ? segment : "",
// // //           loyaltyPoints: loyaltyFilter.toString(),
// // //           ...(dateRange.start && { startDate: dateRange.start }),
// // //           ...(dateRange.end && { endDate: dateRange.end }),
// // //         });

// // //         const response = await fetch(`http://localhost:5008/api/customers?${params}`);
// // //         if (!response.ok) throw new Error("Failed to fetch customers");
// // //         const data = await response.json();

// // //         const enrichedCustomers = await Promise.all(
// // //           data.customers.map(async (customer) => {
// // //             const history = await fetchPurchaseHistory(customer.phone, true);
// // //             const totalSpent = history.reduce((sum, p) => sum + (p.total_amount || 0), 0);
// // //             const purchaseCount = history.length;
// // //             const lastPurchaseDate = history.length > 0
// // //               ? new Date(history.sort((a, b) => new Date(b.date) - new Date(a.date))[0].date)
// // //               : null;
// // //             const daysSinceLastPurchase = lastPurchaseDate
// // //               ? Math.floor((new Date() - lastPurchaseDate) / (1000 * 60 * 60 * 24))
// // //               : null;
// // //             const avgOrderValue = purchaseCount > 0 ? totalSpent / purchaseCount : 0;

// // //             return {
// // //               ...customer,
// // //               purchaseHistory: history,
// // //               total_spent: totalSpent,
// // //               purchaseCount,
// // //               daysSinceLastPurchase,
// // //               avgOrderValue,
// // //             };
// // //           })
// // //         );

// // //         setCustomers(enrichedCustomers);
// // //         calculateCustomerStats(enrichedCustomers);
// // //         updateChartData(enrichedCustomers);
// // //         generateTrendData(enrichedCustomers);
// // //         identifyCustomerCategories(enrichedCustomers);
// // //         setLoading(false);
// // //       } catch (err) {
// // //         setError(err.message);
// // //         setLoading(false);
// // //       }
// // //     };
// // //     fetchCustomers();
// // //   }, [segment, loyaltyFilter, dateRange]);

// // //   const fetchPurchaseHistory = async (customerPhone, silent = false) => {
// // //     try {
// // //       const response = await fetch(
// // //         `http://localhost:5008/api/customers/${customerPhone}/purchase-history?storeId=${localStorage.getItem("storeId")}`
// // //       );
// // //       if (!response.ok) throw new Error("Failed to fetch purchase history");
// // //       const data = await response.json();
// // //       if (!silent) {
// // //         setPurchaseHistory(data.purchase_history || []);
// // //         setSelectedCustomer(customerPhone);
// // //         const customer = customers.find((c) => c.phone === customerPhone);
// // //         if (customer) {
// // //           setSelectedCustomerDetails(customer);
// // //           setPurchaseStats(calculatePurchaseStats(data.purchase_history || []));
// // //         }
// // //         setShowPurchaseModal(true);
// // //       }
// // //       return data.purchase_history || [];
// // //     } catch (err) {
// // //       if (!silent) setError(err.message);
// // //       return [];
// // //     }
// // //   };

// // //   const calculateCustomerStats = (customerData) => {
// // //     const stats = customerData.reduce(
// // //       (acc, customer) => ({
// // //         totalCustomers: acc.totalCustomers + 1,
// // //         totalPurchases: acc.totalPurchases + customer.purchaseCount,
// // //         totalSpending: acc.totalSpending + customer.total_spent,
// // //         avgPurchaseValue: (acc.avgPurchaseValue * acc.totalCustomers + (customer.avgOrderValue || 0)) / (acc.totalCustomers + 1),
// // //         activeCustomers: acc.activeCustomers + (customer.daysSinceLastPurchase < 90 ? 1 : 0),
// // //         inactiveCustomers: acc.inactiveCustomers + (customer.daysSinceLastPurchase >= 90 ? 1 : 0),
// // //         highValueCustomers: acc.highValueCustomers + (customer.total_spent > 1000 ? 1 : 0),
// // //         loyaltyPointsAvg: acc.loyaltyPointsAvg + (customer.loyaltyPoints || 0),
// // //       }),
// // //       {
// // //         totalCustomers: 0,
// // //         totalPurchases: 0,
// // //         totalSpending: 0,
// // //         avgPurchaseValue: 0,
// // //         activeCustomers: 0,
// // //         inactiveCustomers: 0,
// // //         highValueCustomers: 0,
// // //         loyaltyPointsAvg: 0,
// // //       }
// // //     );
// // //     stats.loyaltyPointsAvg = stats.totalCustomers > 0 ? Math.round(stats.loyaltyPointsAvg / stats.totalCustomers) : 0;
// // //     setCustomerStats(stats);
// // //   };

// // //   const calculatePurchaseStats = (history) => {
// // //     const totalSpent = history.reduce((sum, p) => sum + (p.total_amount || 0), 0);
// // //     const avgPurchase = history.length > 0 ? totalSpent / history.length : 0;
// // //     const purchaseDates = history.map((p) => new Date(p.date));
// // //     const frequency =
// // //       history.length > 1
// // //         ? (Math.max(...purchaseDates) - Math.min(...purchaseDates)) / (1000 * 60 * 60 * 24) / (history.length - 1)
// // //         : 0;

// // //     const purchasesByMonth = history.reduce((acc, purchase) => {
// // //       const date = new Date(purchase.date);
// // //       const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
// // //       acc[monthKey] = (acc[monthKey] || 0) + purchase.total_amount;
// // //       return acc;
// // //     }, {});

// // //     const purchaseTrendData = {
// // //       labels: Object.keys(purchasesByMonth)
// // //         .sort()
// // //         .map((month) => {
// // //           const [year, monthNum] = month.split("-");
// // //           return `${monthNum}/${year.slice(2)}`;
// // //         }),
// // //       datasets: [
// // //         {
// // //           label: "Purchase Amount",
// // //           data: Object.keys(purchasesByMonth)
// // //             .sort()
// // //             .map((month) => purchasesByMonth[month]),
// // //           borderColor: "#6366f1",
// // //           backgroundColor: "rgba(99, 102, 241, 0.2)",
// // //           fill: true,
// // //           tension: 0.4,
// // //         },
// // //       ],
// // //     };

// // //     return { totalSpent, avgPurchase, purchaseCount: history.length, frequency: Math.round(frequency), purchaseTrendData };
// // //   };

// // //   const generateTrendData = (customerData) => {
// // //     const purchasesByMonth = {};
// // //     customerData.forEach((customer) => {
// // //       customer.purchaseHistory.forEach((purchase) => {
// // //         const date = new Date(purchase.date);
// // //         const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
// // //         if (!purchasesByMonth[monthKey]) {
// // //           purchasesByMonth[monthKey] = { totalAmount: 0, purchaseCount: 0, customerCount: new Set() };
// // //         }
// // //         purchasesByMonth[monthKey].totalAmount += purchase.total_amount || 0;
// // //         purchasesByMonth[monthKey].purchaseCount += 1;
// // //         purchasesByMonth[monthKey].customerCount.add(customer.phone);
// // //       });
// // //     });

// // //     const sortedMonths = Object.keys(purchasesByMonth).sort();
// // //     const trendData = {
// // //       revenue: {
// // //         labels: sortedMonths.map((month) => `${month.split("-")[1]}/${month.split("-")[0].slice(2)}`),
// // //         datasets: [
// // //           {
// // //             label: "Monthly Revenue",
// // //             data: sortedMonths.map((month) => purchasesByMonth[month].totalAmount),
// // //             borderColor: "#6366f1",
// // //             backgroundColor: "rgba(99, 102, 241, 0.2)",
// // //             fill: true,
// // //             tension: 0.4,
// // //           },
// // //         ],
// // //       },
// // //       purchases: {
// // //         labels: sortedMonths.map((month) => `${month.split("-")[1]}/${month.split("-")[0].slice(2)}`),
// // //         datasets: [
// // //           {
// // //             label: "Purchase Count",
// // //             data: sortedMonths.map((month) => purchasesByMonth[month].purchaseCount),
// // //             borderColor: "#10b981",
// // //             backgroundColor: "rgba(16, 185, 129, 0.2)",
// // //             fill: true,
// // //             tension: 0.4,
// // //           },
// // //         ],
// // //       },
// // //       customers: {
// // //         labels: sortedMonths.map((month) => `${month.split("-")[1]}/${month.split("-")[0].slice(2)}`),
// // //         datasets: [
// // //           {
// // //             label: "Active Customers",
// // //             data: sortedMonths.map((month) => purchasesByMonth[month].customerCount.size),
// // //             borderColor: "#f59e0b",
// // //             backgroundColor: "rgba(245, 158, 11, 0.2)",
// // //             fill: true,
// // //             tension: 0.4,
// // //           },
// // //         ],
// // //       },
// // //     };
// // //     setTrendData(trendData);
// // //   };

// // //   const identifyCustomerCategories = (customerData) => {
// // //     const categories = { churnRisk: [], highValue: [], potentialLoyalists: [] };
// // //     customerData.forEach((customer) => {
// // //       if (customer.purchaseCount > 3 && customer.daysSinceLastPurchase > 120) categories.churnRisk.push(customer);
// // //       if (customer.total_spent > 1000 && customer.purchaseCount > 5) categories.highValue.push(customer);
// // //       if (customer.purchaseCount >= 2 && customer.purchaseCount < 5 && customer.daysSinceLastPurchase < 60 && customer.total_spent > 200)
// // //         categories.potentialLoyalists.push(customer);
// // //     });
// // //     setRiskCategories(categories);
// // //   };

// // //   const updateChartData = (customerData) => {
// // //     const segmentCounts = customerData.reduce((acc, customer) => {
// // //       acc[customer.segment] = (acc[customer.segment] || 0) + 1;
// // //       return acc;
// // //     }, {});

// // //     const spendingBySegment = customerData.reduce((acc, customer) => {
// // //       acc[customer.segment] = (acc[customer.segment] || 0) + customer.total_spent;
// // //       return acc;
// // //     }, {});

// // //     setChartData({
// // //       segments: {
// // //         labels: Object.keys(segmentCounts),
// // //         datasets: [{ label: "Customer Segments", data: Object.values(segmentCounts), backgroundColor: Object.keys(segmentCounts).map((seg) => getSegmentColor(seg)), borderWidth: 1, borderColor: "#ffffff" }],
// // //       },
// // //       spending: {
// // //         labels: Object.keys(spendingBySegment),
// // //         datasets: [{ label: "Spending by Segment", data: Object.values(spendingBySegment), backgroundColor: Object.keys(spendingBySegment).map((seg) => getSegmentColor(seg, 0.7)), borderWidth: 1, borderColor: "#ffffff" }],
// // //       },
// // //       loyalty: {
// // //         labels: ["0-50", "51-100", "101-200", "201-500", "501+"],
// // //         datasets: [
// // //           {
// // //             label: "Loyalty Points Distribution",
// // //             data: [
// // //               customerData.filter((c) => (c.loyaltyPoints || 0) >= 0 && (c.loyaltyPoints || 0) <= 50).length,
// // //               customerData.filter((c) => (c.loyaltyPoints || 0) > 50 && (c.loyaltyPoints || 0) <= 100).length,
// // //               customerData.filter((c) => (c.loyaltyPoints || 0) > 100 && (c.loyaltyPoints || 0) <= 200).length,
// // //               customerData.filter((c) => (c.loyaltyPoints || 0) > 200 && (c.loyaltyPoints || 0) <= 500).length,
// // //               customerData.filter((c) => (c.loyaltyPoints || 0) > 500).length,
// // //             ],
// // //             backgroundColor: ["#10b981", "#6366f1", "#f59e0b", "#ec4899", "#8b5cf6"],
// // //             borderWidth: 1,
// // //             borderColor: "#ffffff",
// // //           },
// // //         ],
// // //       },
// // //     });
// // //   };

// // //   const getSegmentColor = (segment, opacity = 1) => {
// // //     const colors = {
// // //       "High-Spender": `rgba(16, 185, 129, ${opacity})`,
// // //       "Medium-Spender": `rgba(99, 102, 241, ${opacity})`,
// // //       "Low-Spender": `rgba(245, 158, 11, ${opacity})`,
// // //       "Occasional": `rgba(236, 72, 153, ${opacity})`,
// // //       "Loyal": `rgba(139, 92, 246, ${opacity})`,
// // //       "New-Customer": `rgba(244, 63, 94, ${opacity})`,
// // //     };
// // //     return colors[segment] || `rgba(107, 114, 128, ${opacity})`;
// // //   };

// // //   const formatCurrency = (amount) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount || 0);

// // //   const sortCustomers = (key) => {
// // //     const direction = sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
// // //     setSortConfig({ key, direction });
// // //     const sorted = [...customers].sort((a, b) => {
// // //       if (["total_spent", "loyaltyPoints", "purchaseCount", "daysSinceLastPurchase", "avgOrderValue"].includes(key)) {
// // //         return direction === "asc" ? (a[key] || 0) - (b[key] || 0) : (b[key] || 0) - (a[key] || 0);
// // //       }
// // //       if (a[key] === null || a[key] === undefined) return direction === "asc" ? 1 : -1;
// // //       if (b[key] === null || b[key] === undefined) return direction === "asc" ? -1 : 1;
// // //       return direction === "asc" ? String(a[key]).localeCompare(String(b[key])) : String(b[key]).localeCompare(String(a[key]));
// // //     });
// // //     setCustomers(sorted);
// // //   };

// // //   const filteredCustomers = customers.filter((customer) => {
// // //     const matchesSegment = segment === "All" || customer.segment === segment;
// // //     const matchesLoyalty = (customer.loyaltyPoints || 0) >= Number(loyaltyFilter);
// // //     const matchesSpending = (customer.total_spent || 0) >= spendingFilter.min && (customer.total_spent || 0) <= (spendingFilter.max === Infinity ? Number.MAX_VALUE : spendingFilter.max);
// // //     const matchesRecency = !recencyFilter || (customer.daysSinceLastPurchase || Infinity) <= recencyFilter;
// // //     const matchesSearch =
// // //       !searchTerm ||
// // //       (customer.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //       (customer.email || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //       (customer.phone || "").includes(searchTerm);
// // //     const matchesDateRange =
// // //       (!dateRange.start || new Date(customer.purchaseHistory[0]?.date || "1900-01-01") >= new Date(dateRange.start)) &&
// // //       (!dateRange.end || new Date(customer.purchaseHistory[0]?.date || "9999-12-31") <= new Date(dateRange.end));

// // //     return matchesSegment && matchesLoyalty && matchesSpending && matchesRecency && matchesSearch && matchesDateRange;
// // //   });

// // //   const formatDate = (dateString) => {
// // //     const options = { year: "numeric", month: "short", day: "numeric" };
// // //     return dateString ? new Date(dateString).toLocaleDateString(undefined, options) : "N/A";
// // //   };

// // //   const csvData = filteredCustomers.map((customer) => ({
// // //     Name: customer.name || "N/A",
// // //     Email: customer.email || "N/A",
// // //     Phone: customer.phone || "N/A",
// // //     "Total Spent": formatCurrency(customer.total_spent).replace("$", ""),
// // //     Segment: customer.segment || "N/A",
// // //     "Loyalty Points": customer.loyaltyPoints || 0,
// // //     "Purchase Count": customer.purchaseCount || 0,
// // //     "Last Purchase (Days)": customer.daysSinceLastPurchase || "N/A",
// // //     "Avg Order Value": formatCurrency(customer.avgOrderValue).replace("$", ""),
// // //   }));

// // //   const purchaseHistoryCsvData = purchaseHistory.map((purchase) => ({
// // //     Date: formatDate(purchase.date),
// // //     "Order ID": purchase.order_id || "N/A",
// // //     "Total Amount": formatCurrency(purchase.total_amount).replace("$", ""),
// // //     Products: purchase.products ? purchase.products.map((p) => `${p.name} (x${p.quantity})`).join("; ") : "N/A",
// // //   }));

// // //   const getCustomerRiskLevel = (customer) => {
// // //     if (!customer.daysSinceLastPurchase) return { level: "new", label: "New", color: "#10b981" };
// // //     if (customer.daysSinceLastPurchase > 180) return { level: "high", label: "High Risk", color: "#ef4444" };
// // //     if (customer.daysSinceLastPurchase > 90) return { level: "medium", label: "Medium Risk", color: "#f59e0b" };
// // //     return { level: "low", label: "Low Risk", color: "#6366f1" };
// // //   };

// // //   const chartOptions = {
// // //     responsive: true,
// // //     maintainAspectRatio: false,
// // //     plugins: { legend: { position: "top", labels: { color: "#374151", font: { size: 14, family: "'Inter', sans-serif" } } }, tooltip: { backgroundColor: "#1f2937", titleFont: { size: 14 }, bodyFont: { size: 12 } } },
// // //     scales: { x: { grid: { display: false }, ticks: { color: "#6b7280" } }, y: { beginAtZero: true, grid: { color: "rgba(0, 0, 0, 0.05)" }, ticks: { color: "#6b7280" } } },
// // //   };

// // //   const pieChartOptions = {
// // //     responsive: true,
// // //     maintainAspectRatio: false,
// // //     plugins: { legend: { position: "top", labels: { color: "#374151", font: { size: 14, family: "'Inter', sans-serif" } } }, tooltip: { backgroundColor: "#1f2937", titleFont: { size: 14 }, bodyFont: { size: 12 } } },
// // //   };

// // //   return (
// // //     <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f9fafb 0%, #e5e7eb 100%)", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: "#1f2937" }}>
// // //       <div style={{ display: "flex", maxWidth: "1600px", margin: "0 auto", padding: "20px", gap: "20px" }}>
// // //         {/* Sidebar */}
// // //         <motion.div
// // //           initial={{ x: -300 }}
// // //           animate={{ x: showSidebar ? 0 : -300 }}
// // //           transition={{ duration: 0.3 }}
// // //           style={{ width: "300px", background: "white", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", padding: "20px", position: "fixed", top: "20px", bottom: "20px", left: "20px", zIndex: 100, overflowY: "auto" }}
// // //         >
// // //           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
// // //             <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937" }}>Filters</h3>
// // //             <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setShowSidebar(false)} style={{ background: "none", border: "none", color: "#6b7280", cursor: "pointer" }}>
// // //               <X size={20} />
// // //             </motion.button>
// // //           </div>
// // //           <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
// // //             <div>
// // //               <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "8px", display: "block" }}>Segment</label>
// // //               <select value={segment} onChange={(e) => setSegment(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px" }}>
// // //                 <option value="All">All Customers</option>
// // //                 <option value="High-Spender">High Spender</option>
// // //                 <option value="Medium-Spender">Medium Spender</option>
// // //                 <option value="Low-Spender">Low Spender</option>
// // //                 <option value="Occasional">Occasional</option>
// // //                 <option value="Loyal">Loyal</option>
// // //                 <option value="New-Customer">New Customer</option>
// // //               </select>
// // //             </div>
// // //             <div>
// // //               <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "8px", display: "block" }}>Min Loyalty Points</label>
// // //               <input type="number" value={loyaltyFilter} onChange={(e) => setLoyaltyFilter(Number(e.target.value))} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px" }} />
// // //             </div>
// // //             <div>
// // //               <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "8px", display: "block" }}>Recency (Days)</label>
// // //               <input type="range" min="30" max="730" step="30" value={recencyFilter} onChange={(e) => setRecencyFilter(Number(e.target.value))} style={{ width: "100%" }} />
// // //               <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#6b7280" }}>
// // //                 <span>30</span>
// // //                 <span>{recencyFilter}</span>
// // //                 <span>730</span>
// // //               </div>
// // //             </div>
// // //             <div>
// // //               <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "8px", display: "block" }}>Date Range</label>
// // //               <input type="date" value={dateRange.start} onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px", marginBottom: "10px" }} />
// // //               <input type="date" value={dateRange.end} onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px" }} />
// // //             </div>
// // //             <div>
// // //               <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "8px", display: "block" }}>Spending Range</label>
// // //               <div style={{ display: "flex", gap: "10px" }}>
// // //                 <input type="number" placeholder="Min" value={spendingFilter.min} onChange={(e) => setSpendingFilter({ ...spendingFilter, min: Number(e.target.value) })} style={{ flex: "1", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px" }} />
// // //                 <input type="number" placeholder="Max" value={spendingFilter.max === Infinity ? "" : spendingFilter.max} onChange={(e) => setSpendingFilter({ ...spendingFilter, max: Number(e.target.value) || Infinity })} style={{ flex: "1", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px" }} />
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </motion.div>

// // //         {/* Main Content */}
// // //         <div style={{ flex: 1, marginLeft: showSidebar ? "320px" : "0", transition: "margin-left 0.3s" }}>
// // //           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} style={{ background: "white", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", padding: "20px", minHeight: "calc(100vh - 40px)" }}>
// // //             {/* Header */}
// // //             <div style={{ position: "sticky", top: 0, background: "white", zIndex: 10, paddingBottom: "20px", borderBottom: "1px solid #e5e7eb" }}>
// // //               <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
// // //                 <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#1f2937" }}>Customer Analytics Dashboard</h2>
// // //                 <div style={{ display: "flex", gap: "15px" }}>
// // //                   <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setShowSidebar(true)} style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
// // //                     <Filter size={18} /> Filters
// // //                   </motion.button>
// // //                   <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ background: "linear-gradient(135deg, #10b981, #34d399)", color: "white", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer" }}>
// // //                     <CSVLink data={csvData} filename={"customer-data.csv"} style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
// // //                       <span>↓</span> Export CSV
// // //                     </CSVLink>
// // //                   </motion.button>
// // //                 </div>
// // //               </div>
// // //               <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
// // //                 <input type="text" placeholder="Search customers..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ flex: 1, padding: "12px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px", boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05)" }} />
// // //                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveTab("data")} style={{ background: activeTab === "data" ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "#f3f4f6", color: activeTab === "data" ? "white" : "#6b7280", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "500" }}>
// // //                   Data
// // //                 </motion.button>
// // //                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveTab("visualizations")} style={{ background: activeTab === "visualizations" ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "#f3f4f6", color: activeTab === "visualizations" ? "white" : "#6b7280", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "500" }}>
// // //                   Visualizations
// // //                 </motion.button>
// // //               </div>
// // //             </div>

// // //             {/* Summary Cards */}
// // //             {customerStats.totalCustomers > 0 && (
// // //               <motion.div initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", margin: "20px 0" }}>
// // //                 {[
// // //                   { title: "Total Customers", value: customerStats.totalCustomers, gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)", icon: <Users size={20} /> },
// // //                   { title: "Total Revenue", value: formatCurrency(customerStats.totalSpending), gradient: "linear-gradient(135deg, #10b981, #34d399)", icon: <TrendingUp size={20} /> },
// // //                   { title: "Avg Order Value", value: formatCurrency(customerStats.avgPurchaseValue), gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)", icon: <BarChart2 size={20} /> },
// // //                   { title: "Active Customers", value: customerStats.activeCustomers, gradient: "linear-gradient(135deg, #ec4899, #f472b6)", icon: <Users size={20} /> },
// // //                 ].map((stat, index) => (
// // //                   <motion.div key={index} whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }} style={{ background: stat.gradient, padding: "20px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", color: "white", textAlign: "center" }}>
// // //                     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
// // //                       {stat.icon}
// // //                       <div style={{ fontSize: "14px", fontWeight: "500" }}>{stat.title}</div>
// // //                     </div>
// // //                     <div style={{ fontSize: "24px", fontWeight: "700" }}>{stat.value}</div>
// // //                   </motion.div>
// // //                 ))}
// // //               </motion.div>
// // //             )}

// // //             {/* Tab Content */}
// // //             <AnimatePresence mode="wait">
// // //               {loading ? (
// // //                 <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ textAlign: "center", padding: "40px", color: "#6b7280" }}>
// // //                   <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} style={{ fontSize: "24px" }}>
// // //                     ⏳
// // //                   </motion.div>
// // //                   <div style={{ marginTop: "10px" }}>Loading data...</div>
// // //                 </motion.div>
// // //               ) : error ? (
// // //                 <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ textAlign: "center", padding: "40px", color: "#ef4444", background: "#fee2e2", borderRadius: "8px" }}>
// // //                   Error: {error}
// // //                 </motion.div>
// // //               ) : activeTab === "data" ? (
// // //                 <motion.div key="data" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>
// // //                   <div style={{ display: "flex", gap: "10px", margin: "20px 0" }}>
// // //                     <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setViewMode("table")} style={{ background: viewMode === "table" ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "#f3f4f6", color: viewMode === "table" ? "white" : "#6b7280", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "500" }}>
// // //                       Table View
// // //                     </motion.button>
// // //                     <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setViewMode("card")} style={{ background: viewMode === "card" ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "#f3f4f6", color: viewMode === "card" ? "white" : "#6b7280", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "500" }}>
// // //                       Card View
// // //                     </motion.button>
// // //                   </div>

// // //                   {filteredCustomers.length === 0 ? (
// // //                     <div style={{ textAlign: "center", padding: "40px", color: "#6b7280" }}>No customers found.</div>
// // //                   ) : viewMode === "table" ? (
// // //                     <div style={{ overflowX: "auto", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", position: "relative" }}>
// // //                       <div style={{ position: "sticky", top: "0", zIndex: 5, background: "white" }}>
// // //                         <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0" }}>
// // //                           <thead>
// // //                             <tr style={{ background: "linear-gradient(135deg, #f3f4f6, #e5e7eb)" }}>
// // //                               {["Name", "Email", "Phone", "Total Spent", "Segment", "Loyalty Points", "Last Purchase", "Risk Level", "Actions"].map((header) => (
// // //                                 <th key={header} onClick={() => header !== "Actions" && sortCustomers(header.toLowerCase().replace(" ", "_"))} style={{ padding: "15px", fontWeight: "600", textAlign: "left", color: "#374151", cursor: header !== "Actions" ? "pointer" : "default", position: "sticky", top: 0, background: "inherit" }}>
// // //                                   {header}
// // //                                   {sortConfig.key === header.toLowerCase().replace(" ", "_") && <span style={{ marginLeft: "5px" }}>{sortConfig.direction === "asc" ? "▲" : "▼"}</span>}
// // //                                 </th>
// // //                               ))}
// // //                             </tr>
// // //                           </thead>
// // //                         </table>
// // //                       </div>
// // //                       <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0" }}>
// // //                         <tbody>
// // //                           {filteredCustomers.map((customer, index) => {
// // //                             const riskLevel = getCustomerRiskLevel(customer);
// // //                             return (
// // //                               <motion.tr key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: index * 0.05 }} whileHover={{ backgroundColor: "#f9fafb" }}>
// // //                                 <td style={{ padding: "15px", color: "#374151" }}>{customer.name || "N/A"}</td>
// // //                                 <td style={{ padding: "15px", color: "#374151" }}>{customer.email || "N/A"}</td>
// // //                                 <td style={{ padding: "15px", color: "#374151" }}>{customer.phone || "N/A"}</td>
// // //                                 <td style={{ padding: "15px", color: "#6366f1", textAlign: "right" }}>{formatCurrency(customer.total_spent)}</td>
// // //                                 <td style={{ padding: "15px" }}>
// // //                                   <span style={{ background: getSegmentColor(customer.segment, 0.2), color: getSegmentColor(customer.segment), padding: "4px 8px", borderRadius: "4px", fontSize: "12px" }}>{customer.segment || "N/A"}</span>
// // //                                 </td>
// // //                                 <td style={{ padding: "15px", color: "#374151" }}>{customer.loyaltyPoints || 0}</td>
// // //                                 <td style={{ padding: "15px", color: "#374151" }}>{customer.daysSinceLastPurchase !== null ? `${customer.daysSinceLastPurchase} days` : "N/A"}</td>
// // //                                 <td style={{ padding: "15px" }}>
// // //                                   <span style={{ background: `${riskLevel.color}20`, color: riskLevel.color, padding: "4px 8px", borderRadius: "4px", fontSize: "12px" }}>{riskLevel.label}</span>
// // //                                 </td>
// // //                                 <td style={{ padding: "15px" }}>
// // //                                   <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => fetchPurchaseHistory(customer.phone)} style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white", padding: "8px 12px", borderRadius: "6px", border: "none", cursor: "pointer" }}>
// // //                                     View
// // //                                   </motion.button>
// // //                                 </td>
// // //                               </motion.tr>
// // //                             );
// // //                           })}
// // //                         </tbody>
// // //                       </table>
// // //                     </div>
// // //                   ) : (
// // //                     <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
// // //                       {filteredCustomers.map((customer, index) => {
// // //                         const riskLevel = getCustomerRiskLevel(customer);
// // //                         return (
// // //                           <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }} whileHover={{ scale: 1.03, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }} style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
// // //                             <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
// // //                               <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: getSegmentColor(customer.segment, 0.2), color: getSegmentColor(customer.segment), display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", marginRight: "12px" }}>{(customer.name || "N/A").charAt(0)}</div>
// // //                               <div>
// // //                                 <div style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937" }}>{customer.name || "N/A"}</div>
// // //                                 <div style={{ fontSize: "13px", color: "#6b7280" }}>{customer.email || "N/A"}</div>
// // //                               </div>
// // //                             </div>
// // //                             <div style={{ fontSize: "14px", color: "#374151", marginBottom: "15px" }}>
// // //                               <div style={{ display: "flex", justifyContent: "space-between" }}>
// // //                                 <span>Total Spent:</span>
// // //                                 <span style={{ color: "#6366f1" }}>{formatCurrency(customer.total_spent)}</span>
// // //                               </div>
// // //                               <div style={{ display: "flex", justifyContent: "space-between" }}>
// // //                                 <span>Loyalty Points:</span>
// // //                                 <span>{customer.loyaltyPoints || 0}</span>
// // //                               </div>
// // //                               <div style={{ display: "flex", justifyContent: "space-between" }}>
// // //                                 <span>Last Purchase:</span>
// // //                                 <span>{customer.daysSinceLastPurchase !== null ? `${customer.daysSinceLastPurchase} days` : "N/A"}</span>
// // //                               </div>
// // //                             </div>
// // //                             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // //                               <span style={{ background: `${riskLevel.color}20`, color: riskLevel.color, padding: "4px 8px", borderRadius: "4px", fontSize: "12px" }}>{riskLevel.label}</span>
// // //                               <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => fetchPurchaseHistory(customer.phone)} style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white", padding: "8px 12px", borderRadius: "6px", border: "none", cursor: "pointer" }}>
// // //                                 View
// // //                               </motion.button>
// // //                             </div>
// // //                           </motion.div>
// // //                         );
// // //                       })}
// // //                     </div>
// // //                   )}
// // //                 </motion.div>
// // //               ) : (
// // //                 <motion.div key="visualizations" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>
// // //                   {chartData && trendData && (
// // //                     <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "25px", marginTop: "20px" }}>
// // //                       {[
// // //                         { title: "Customer Segments", icon: <PieChart size={20} />, data: chartData.segments, type: "pie", options: pieChartOptions },
// // //                         { title: "Spending by Segment", icon: <BarChart2 size={20} />, data: chartData.spending, type: "bar", options: chartOptions },
// // //                         { title: "Loyalty Points", icon: <PieChart size={20} />, data: chartData.loyalty, type: "pie", options: pieChartOptions },
// // //                         { title: "Revenue Trend", icon: <TrendingUp size={20} />, data: trendData.revenue, type: "line", options: chartOptions },
// // //                         { title: "Purchase Trend", icon: <TrendingUp size={20} />, data: trendData.purchases, type: "line", options: chartOptions },
// // //                         { title: "Customer Trend", icon: <Users size={20} />, data: trendData.customers, type: "line", options: chartOptions },
// // //                       ].map((chart, index) => (
// // //                         <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }} style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
// // //                           <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937", marginBottom: "15px", display: "flex", alignItems: "center", gap: "10px" }}>{chart.icon} {chart.title}</h3>
// // //                           <div style={{ height: "300px" }}>
// // //                             <Chart type={chart.type} data={chart.data} options={chart.options} />
// // //                           </div>
// // //                         </motion.div>
// // //                       ))}
// // //                     </div>
// // //                   )}
// // //                 </motion.div>
// // //               )}
// // //             </AnimatePresence>
// // //           </motion.div>
// // //         </div>
// // //       </div>

// // //       {/* Purchase History Modal */}
// // //       <AnimatePresence>
// // //         {showPurchaseModal && (
// // //           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.7)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000, backdropFilter: "blur(5px)" }} onClick={() => setShowPurchaseModal(false)}>
// // //             <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.3 }} style={{ background: "white", borderRadius: "16px", width: "90%", maxWidth: "1000px", maxHeight: "90vh", overflow: "hidden", boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)", display: "flex", flexDirection: "column" }} onClick={(e) => e.stopPropagation()}>
// // //               <div style={{ padding: "20px", background: "linear-gradient(135deg, #f9fafb, #e5e7eb)", borderBottom: "1px solid #d1d5db", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // //                 <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "700", color: "#1f2937" }}>Purchase History - {selectedCustomerDetails?.name || "N/A"}</h3>
// // //                 <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setShowPurchaseModal(false)} style={{ background: "none", border: "none", fontSize: "24px", cursor: "pointer", color: "#6b7280" }}>
// // //                   ×
// // //                 </motion.button>
// // //               </div>
// // //               <div style={{ padding: "20px", overflowY: "auto", flex: 1 }}>
// // //                 <div style={{ marginBottom: "20px", background: "#f9fafb", padding: "15px", borderRadius: "8px" }}>
// // //                   <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937", marginBottom: "15px" }}>Customer Summary</h4>
// // //                   <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "15px" }}>
// // //                     <div>
// // //                       <span style={{ fontSize: "13px", color: "#6b7280" }}>Name:</span>
// // //                       <div style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>{selectedCustomerDetails?.name || "N/A"}</div>
// // //                     </div>
// // //                     <div>
// // //                       <span style={{ fontSize: "13px", color: "#6b7280" }}>Total Spent:</span>
// // //                       <div style={{ fontSize: "14px", fontWeight: "500", color: "#6366f1" }}>{formatCurrency(purchaseStats?.totalSpent)}</div>
// // //                     </div>
// // //                     <div>
// // //                       <span style={{ fontSize: "13px", color: "#6b7280" }}>Avg Purchase:</span>
// // //                       <div style={{ fontSize: "14px", fontWeight: "500", color: "#f59e0b" }}>{formatCurrency(purchaseStats?.avgPurchase)}</div>
// // //                     </div>
// // //                     <div>
// // //                       <span style={{ fontSize: "13px", color: "#6b7280" }}>Frequency:</span>
// // //                       <div style={{ fontSize: "14px", fontWeight: "500", color: "#10b981" }}>{purchaseStats?.frequency ? `Every ${purchaseStats.frequency} days` : "N/A"}</div>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {purchaseStats?.purchaseTrendData && (
// // //                   <div style={{ marginBottom: "20px", background: "#f9fafb", padding: "15px", borderRadius: "8px" }}>
// // //                     <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937", marginBottom: "15px" }}>Purchase Trend</h4>
// // //                     <div style={{ height: "250px" }}>
// // //                       <Chart type="line" data={purchaseStats.purchaseTrendData} options={chartOptions} />
// // //                     </div>
// // //                   </div>
// // //                 )}

// // //                 <div>
// // //                   <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937", marginBottom: "15px" }}>Purchase History ({purchaseStats?.purchaseCount || 0})</h4>
// // //                   <div style={{ maxHeight: "300px", overflowY: "auto" }}>
// // //                     {purchaseHistory.map((purchase, index) => (
// // //                       <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }} whileHover={{ backgroundColor: "#f3f4f6" }} style={{ background: index % 2 === 0 ? "#f9fafb" : "white", padding: "15px", borderRadius: "8px", marginBottom: "10px", cursor: "pointer" }} onClick={() => setSelectedPurchase(purchase)}>
// // //                         <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
// // //                           <span style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>{formatDate(purchase.date)}</span>
// // //                           <span style={{ fontSize: "14px", fontWeight: "500", color: "#6366f1" }}>{formatCurrency(purchase.total_amount)}</span>
// // //                         </div>
// // //                         <div style={{ fontSize: "13px", color: "#6b7280" }}>{purchase.products ? purchase.products.map((p) => `${p.name} (x${p.quantity})`).join(", ") : "N/A"}</div>
// // //                       </motion.div>
// // //                     ))}
// // //                   </div>
// // //                 </div>

// // //                 {selectedPurchase && (
// // //                   <div style={{ marginTop: "20px", background: "#f9fafb", padding: "15px", borderRadius: "8px" }}>
// // //                     <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937", marginBottom: "15px" }}>Purchase Details</h4>
// // //                     <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", marginBottom: "15px" }}>
// // //                       <div>
// // //                         <span style={{ fontSize: "13px", color: "#6b7280" }}>Date:</span>
// // //                         <span style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>{formatDate(selectedPurchase.date)}</span>
// // //                       </div>
// // //                       <div>
// // //                         <span style={{ fontSize: "13px", color: "#6b7280" }}>Order ID:</span>
// // //                         <span style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>{selectedPurchase.order_id || "N/A"}</span>
// // //                       </div>
// // //                     </div>
// // //                     <div>
// // //                       <h5 style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937", marginBottom: "10px" }}>Products</h5>
// // //                       {selectedPurchase.products && selectedPurchase.products.map((product, idx) => (
// // //                         <div key={idx} style={{ marginBottom: "10px", fontSize: "13px", color: "#374151" }}>
// // //                           <span style={{ fontWeight: "500" }}>{product.name || "N/A"}</span>
// // //                           <span style={{ color: "#6b7280" }}> (x{product.quantity || 0}) - {formatCurrency(product.price)}</span>
// // //                         </div>
// // //                       ))}
// // //                       <div style={{ fontSize: "14px", fontWeight: "600", color: "#6366f1", marginTop: "15px" }}>Total: {formatCurrency(selectedPurchase.total_amount)}</div>
// // //                     </div>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //               <div style={{ padding: "15px", borderTop: "1px solid #d1d5db", display: "flex", justifyContent: "flex-end" }}>
// // //                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ background: "linear-gradient(135deg, #10b981, #34d399)", color: "white", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
// // //                   <CSVLink data={purchaseHistoryCsvData} filename={`purchase-history-${selectedCustomerDetails?.phone || "unknown"}.csv`} style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
// // //                     <span>↓</span> Export
// // //                   </CSVLink>
// // //                 </motion.button>
// // //               </div>
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </div>
// // //   );
// // // };

// // // export default CustomerSegmentation;

// // import React, { useState, useEffect } from "react";
// // import { Chart } from "react-chartjs-2";
// // import { CSVLink } from "react-csv";
// // import "chart.js/auto";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { BarChart2, PieChart, TrendingUp, Users, Filter, X } from "lucide-react";

// // const CustomerSegmentation = () => {
// //   const [customers, setCustomers] = useState([]);
// //   const [segment, setSegment] = useState("All");
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [loyaltyFilter, setLoyaltyFilter] = useState(0);
// //   const [selectedCustomer, setSelectedCustomer] = useState(null);
// //   const [purchaseHistory, setPurchaseHistory] = useState([]);
// //   const [dateRange, setDateRange] = useState({ start: "", end: "" });
// //   const [spendingFilter, setSpendingFilter] = useState({ min: 0, max: Infinity });
// //   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
// //   const [chartData, setChartData] = useState(null);
// //   const [customerStats, setCustomerStats] = useState({});
// //   const [activeTab, setActiveTab] = useState("data");
// //   const [trendData, setTrendData] = useState(null);
// //   const [viewMode, setViewMode] = useState("table");
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [showSidebar, setShowSidebar] = useState(false);
// //   const [recencyFilter, setRecencyFilter] = useState(365);
// //   const [riskCategories, setRiskCategories] = useState({
// //     churnRisk: [],
// //     highValue: [],
// //     potentialLoyalists: [],
// //   });
// //   const [showPurchaseModal, setShowPurchaseModal] = useState(false);
// //   const [selectedPurchase, setSelectedPurchase] = useState(null);
// //   const [selectedCustomerDetails, setSelectedCustomerDetails] = useState(null);
// //   const [purchaseStats, setPurchaseStats] = useState(null);

// //   useEffect(() => {
// //     const fetchCustomers = async () => {
// //       setLoading(true);
// //       try {
// //         const params = new URLSearchParams({
// //           storeId: localStorage.getItem("storeId"),
// //           segment: segment !== "All" ? segment : "",
// //           loyaltyPoints: loyaltyFilter.toString(),
// //           ...(dateRange.start && { startDate: dateRange.start }),
// //           ...(dateRange.end && { endDate: dateRange.end }),
// //         });

// //         const response = await fetch(`http://localhost:5008/api/customers?${params}`);
// //         if (!response.ok) throw new Error("Failed to fetch customers");
// //         const data = await response.json();

// //         const enrichedCustomers = await Promise.all(
// //           data.customers.map(async (customer) => {
// //             const history = await fetchPurchaseHistory(customer.phone, true);
// //             const totalSpent = history.reduce((sum, p) => sum + (p.total_amount || 0), 0);
// //             const purchaseCount = history.length;
// //             const lastPurchaseDate = history.length > 0
// //               ? new Date(history.sort((a, b) => new Date(b.date) - new Date(a.date))[0].date)
// //               : null;
// //             const daysSinceLastPurchase = lastPurchaseDate
// //               ? Math.floor((new Date() - lastPurchaseDate) / (1000 * 60 * 60 * 24))
// //               : null;
// //             const avgOrderValue = purchaseCount > 0 ? totalSpent / purchaseCount : 0;

// //             return {
// //               ...customer,
// //               purchaseHistory: history,
// //               total_spent: totalSpent,
// //               purchaseCount,
// //               daysSinceLastPurchase,
// //               avgOrderValue,
// //             };
// //           })
// //         );

// //         setCustomers(enrichedCustomers);
// //         calculateCustomerStats(enrichedCustomers);
// //         updateChartData(enrichedCustomers);
// //         generateTrendData(enrichedCustomers);
// //         identifyCustomerCategories(enrichedCustomers);
// //         setLoading(false);
// //       } catch (err) {
// //         setError(err.message);
// //         setLoading(false);
// //       }
// //     };
// //     fetchCustomers();
// //   }, [segment, loyaltyFilter, dateRange]);

// //   const fetchPurchaseHistory = async (customerPhone, silent = false) => {
// //     try {
// //       const response = await fetch(
// //         `http://localhost:5008/api/customers/${customerPhone}/purchase-history?storeId=${localStorage.getItem("storeId")}`
// //       );
// //       if (!response.ok) throw new Error("Failed to fetch purchase history");
// //       const data = await response.json();
// //       if (!silent) {
// //         setPurchaseHistory(data.purchase_history || []);
// //         setSelectedCustomer(customerPhone);
// //         const customer = customers.find((c) => c.phone === customerPhone);
// //         if (customer) {
// //           setSelectedCustomerDetails(customer);
// //           setPurchaseStats(calculatePurchaseStats(data.purchase_history || []));
// //         }
// //         setShowPurchaseModal(true);
// //       }
// //       return data.purchase_history || [];
// //     } catch (err) {
// //       if (!silent) setError(err.message);
// //       return [];
// //     }
// //   };

// //   const calculateCustomerStats = (customerData) => {
// //     const stats = customerData.reduce(
// //       (acc, customer) => ({
// //         totalCustomers: acc.totalCustomers + 1,
// //         totalPurchases: acc.totalPurchases + customer.purchaseCount,
// //         totalSpending: acc.totalSpending + customer.total_spent,
// //         avgPurchaseValue: (acc.avgPurchaseValue * acc.totalCustomers + (customer.avgOrderValue || 0)) / (acc.totalCustomers + 1),
// //         activeCustomers: acc.activeCustomers + (customer.daysSinceLastPurchase < 90 ? 1 : 0),
// //         inactiveCustomers: acc.inactiveCustomers + (customer.daysSinceLastPurchase >= 90 ? 1 : 0),
// //         highValueCustomers: acc.highValueCustomers + (customer.total_spent > 1000 ? 1 : 0),
// //         loyaltyPointsAvg: acc.loyaltyPointsAvg + (customer.loyaltyPoints || 0),
// //       }),
// //       {
// //         totalCustomers: 0,
// //         totalPurchases: 0,
// //         totalSpending: 0,
// //         avgPurchaseValue: 0,
// //         activeCustomers: 0,
// //         inactiveCustomers: 0,
// //         highValueCustomers: 0,
// //         loyaltyPointsAvg: 0,
// //       }
// //     );
// //     stats.loyaltyPointsAvg = stats.totalCustomers > 0 ? Math.round(stats.loyaltyPointsAvg / stats.totalCustomers) : 0;
// //     setCustomerStats(stats);
// //   };

// //   const calculatePurchaseStats = (history) => {
// //     const totalSpent = history.reduce((sum, p) => sum + (p.total_amount || 0), 0);
// //     const avgPurchase = history.length > 0 ? totalSpent / history.length : 0;
// //     const purchaseDates = history.map((p) => new Date(p.date));
// //     const frequency =
// //       history.length > 1
// //         ? (Math.max(...purchaseDates) - Math.min(...purchaseDates)) / (1000 * 60 * 60 * 24) / (history.length - 1)
// //         : 0;

// //     const purchasesByMonth = history.reduce((acc, purchase) => {
// //       const date = new Date(purchase.date);
// //       const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
// //       acc[monthKey] = (acc[monthKey] || 0) + purchase.total_amount;
// //       return acc;
// //     }, {});

// //     const purchaseTrendData = {
// //       labels: Object.keys(purchasesByMonth)
// //         .sort()
// //         .map((month) => {
// //           const [year, monthNum] = month.split("-");
// //           return `${monthNum}/${year.slice(2)}`;
// //         }),
// //       datasets: [
// //         {
// //           label: "Purchase Amount",
// //           data: Object.keys(purchasesByMonth)
// //             .sort()
// //             .map((month) => purchasesByMonth[month]),
// //           borderColor: "#6366f1",
// //           backgroundColor: "rgba(99, 102, 241, 0.2)",
// //           fill: true,
// //           tension: 0.4,
// //         },
// //       ],
// //     };

// //     return { totalSpent, avgPurchase, purchaseCount: history.length, frequency: Math.round(frequency), purchaseTrendData };
// //   };

// //   const generateTrendData = (customerData) => {
// //     const purchasesByMonth = {};
// //     customerData.forEach((customer) => {
// //       customer.purchaseHistory.forEach((purchase) => {
// //         const date = new Date(purchase.date);
// //         const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
// //         if (!purchasesByMonth[monthKey]) {
// //           purchasesByMonth[monthKey] = { totalAmount: 0, purchaseCount: 0, customerCount: new Set() };
// //         }
// //         purchasesByMonth[monthKey].totalAmount += purchase.total_amount || 0;
// //         purchasesByMonth[monthKey].purchaseCount += 1;
// //         purchasesByMonth[monthKey].customerCount.add(customer.phone);
// //       });
// //     });

// //     const sortedMonths = Object.keys(purchasesByMonth).sort();
// //     const trendData = {
// //       revenue: {
// //         labels: sortedMonths.map((month) => `${month.split("-")[1]}/${month.split("-")[0].slice(2)}`),
// //         datasets: [
// //           {
// //             label: "Monthly Revenue",
// //             data: sortedMonths.map((month) => purchasesByMonth[month].totalAmount),
// //             borderColor: "#6366f1",
// //             backgroundColor: "rgba(99, 102, 241, 0.2)",
// //             fill: true,
// //             tension: 0.4,
// //           },
// //         ],
// //       },
// //       purchases: {
// //         labels: sortedMonths.map((month) => `${month.split("-")[1]}/${month.split("-")[0].slice(2)}`),
// //         datasets: [
// //           {
// //             label: "Purchase Count",
// //             data: sortedMonths.map((month) => purchasesByMonth[month].purchaseCount),
// //             borderColor: "#10b981",
// //             backgroundColor: "rgba(16, 185, 129, 0.2)",
// //             fill: true,
// //             tension: 0.4,
// //           },
// //         ],
// //       },
// //       customers: {
// //         labels: sortedMonths.map((month) => `${month.split("-")[1]}/${month.split("-")[0].slice(2)}`),
// //         datasets: [
// //           {
// //             label: "Active Customers",
// //             data: sortedMonths.map((month) => purchasesByMonth[month].customerCount.size),
// //             borderColor: "#f59e0b",
// //             backgroundColor: "rgba(245, 158, 11, 0.2)",
// //             fill: true,
// //             tension: 0.4,
// //           },
// //         ],
// //       },
// //     };
// //     setTrendData(trendData);
// //   };

// //   const identifyCustomerCategories = (customerData) => {
// //     const categories = { churnRisk: [], highValue: [], potentialLoyalists: [] };
// //     customerData.forEach((customer) => {
// //       if (customer.purchaseCount > 3 && customer.daysSinceLastPurchase > 120) categories.churnRisk.push(customer);
// //       if (customer.total_spent > 1000 && customer.purchaseCount > 5) categories.highValue.push(customer);
// //       if (customer.purchaseCount >= 2 && customer.purchaseCount < 5 && customer.daysSinceLastPurchase < 60 && customer.total_spent > 200)
// //         categories.potentialLoyalists.push(customer);
// //     });
// //     setRiskCategories(categories);
// //   };

// //   const updateChartData = (customerData) => {
// //     const segmentCounts = customerData.reduce((acc, customer) => {
// //       acc[customer.segment] = (acc[customer.segment] || 0) + 1;
// //       return acc;
// //     }, {});

// //     const spendingBySegment = customerData.reduce((acc, customer) => {
// //       acc[customer.segment] = (acc[customer.segment] || 0) + customer.total_spent;
// //       return acc;
// //     }, {});

// //     setChartData({
// //       segments: {
// //         labels: Object.keys(segmentCounts),
// //         datasets: [{ label: "Customer Segments", data: Object.values(segmentCounts), backgroundColor: Object.keys(segmentCounts).map((seg) => getSegmentColor(seg)), borderWidth: 1, borderColor: "#ffffff" }],
// //       },
// //       spending: {
// //         labels: Object.keys(spendingBySegment),
// //         datasets: [{ label: "Spending by Segment", data: Object.values(spendingBySegment), backgroundColor: Object.keys(spendingBySegment).map((seg) => getSegmentColor(seg, 0.7)), borderWidth: 1, borderColor: "#ffffff" }],
// //       },
// //       loyalty: {
// //         labels: ["0-50", "51-100", "101-200", "201-500", "501+"],
// //         datasets: [
// //           {
// //             label: "Loyalty Points Distribution",
// //             data: [
// //               customerData.filter((c) => (c.loyaltyPoints || 0) >= 0 && (c.loyaltyPoints || 0) <= 50).length,
// //               customerData.filter((c) => (c.loyaltyPoints || 0) > 50 && (c.loyaltyPoints || 0) <= 100).length,
// //               customerData.filter((c) => (c.loyaltyPoints || 0) > 100 && (c.loyaltyPoints || 0) <= 200).length,
// //               customerData.filter((c) => (c.loyaltyPoints || 0) > 200 && (c.loyaltyPoints || 0) <= 500).length,
// //               customerData.filter((c) => (c.loyaltyPoints || 0) > 500).length,
// //             ],
// //             backgroundColor: ["#10b981", "#6366f1", "#f59e0b", "#ec4899", "#8b5cf6"],
// //             borderWidth: 1,
// //             borderColor: "#ffffff",
// //           },
// //         ],
// //       },
// //     });
// //   };

// //   const getSegmentColor = (segment, opacity = 1) => {
// //     const colors = {
// //       "High-Spender": `rgba(16, 185, 129, ${opacity})`,
// //       "Medium-Spender": `rgba(99, 102, 241, ${opacity})`,
// //       "Low-Spender": `rgba(245, 158, 11, ${opacity})`,
// //       "Occasional": `rgba(236, 72, 153, ${opacity})`,
// //       "Loyal": `rgba(139, 92, 246, ${opacity})`,
// //       "New-Customer": `rgba(244, 63, 94, ${opacity})`,
// //     };
// //     return colors[segment] || `rgba(107, 114, 128, ${opacity})`;
// //   };

// //   const formatCurrency = (amount) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(amount || 0);

// //   const sortCustomers = (key) => {
// //     const direction = sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
// //     setSortConfig({ key, direction });
// //     const sorted = [...customers].sort((a, b) => {
// //       if (["total_spent", "loyaltyPoints", "purchaseCount", "daysSinceLastPurchase", "avgOrderValue"].includes(key)) {
// //         return direction === "asc" ? (a[key] || 0) - (b[key] || 0) : (b[key] || 0) - (a[key] || 0);
// //       }
// //       if (a[key] === null || a[key] === undefined) return direction === "asc" ? 1 : -1;
// //       if (b[key] === null || b[key] === undefined) return direction === "asc" ? -1 : 1;
// //       return direction === "asc" ? String(a[key]).localeCompare(String(b[key])) : String(b[key]).localeCompare(String(a[key]));
// //     });
// //     setCustomers(sorted);
// //   };

// //   const filteredCustomers = customers.filter((customer) => {
// //     const matchesSegment = segment === "All" || customer.segment === segment;
// //     const matchesLoyalty = (customer.loyaltyPoints || 0) >= Number(loyaltyFilter);
// //     const matchesSpending = (customer.total_spent || 0) >= spendingFilter.min && (customer.total_spent || 0) <= (spendingFilter.max === Infinity ? Number.MAX_VALUE : spendingFilter.max);
// //     const matchesRecency = !recencyFilter || (customer.daysSinceLastPurchase || Infinity) <= recencyFilter;
// //     const matchesSearch =
// //       !searchTerm ||
// //       (customer.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       (customer.email || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       (customer.phone || "").includes(searchTerm);
// //     const matchesDateRange =
// //       (!dateRange.start || new Date(customer.purchaseHistory[0]?.date || "1900-01-01") >= new Date(dateRange.start)) &&
// //       (!dateRange.end || new Date(customer.purchaseHistory[0]?.date || "9999-12-31") <= new Date(dateRange.end));

// //     return matchesSegment && matchesLoyalty && matchesSpending && matchesRecency && matchesSearch && matchesDateRange;
// //   });

// //   const formatDate = (dateString) => {
// //     const options = { year: "numeric", month: "short", day: "numeric" };
// //     return dateString ? new Date(dateString).toLocaleDateString(undefined, options) : "N/A";
// //   };

// //   const csvData = filteredCustomers.map((customer) => ({
// //     Name: customer.name || "N/A",
// //     Email: customer.email || "N/A",
// //     Phone: customer.phone || "N/A",
// //     "Total Spent": formatCurrency(customer.total_spent).replace("₹", ""),
// //     Segment: customer.segment || "N/A",
// //     "Loyalty Points": customer.loyaltyPoints || 0,
// //     "Purchase Count": customer.purchaseCount || 0,
// //     "Last Purchase (Days)": customer.daysSinceLastPurchase || "N/A",
// //     "Avg Order Value": formatCurrency(customer.avgOrderValue).replace("₹", ""),
// //   }));

// //   const purchaseHistoryCsvData = purchaseHistory.map((purchase) => ({
// //     Date: formatDate(purchase.date),
// //     "Order ID": purchase.order_id || "N/A",
// //     "Total Amount": formatCurrency(purchase.total_amount).replace("₹", ""),
// //     Products: purchase.products ? purchase.products.map((p) => `${p.name} (x${p.quantity})`).join("; ") : "N/A",
// //   }));

// //   const getCustomerRiskLevel = (customer) => {
// //     if (!customer.daysSinceLastPurchase) return { level: "new", label: "New", color: "#10b981" };
// //     if (customer.daysSinceLastPurchase > 180) return { level: "high", label: "High Risk", color: "#ef4444" };
// //     if (customer.daysSinceLastPurchase > 90) return { level: "medium", label: "Medium Risk", color: "#f59e0b" };
// //     return { level: "low", label: "Low Risk", color: "#6366f1" };
// //   };

// //   const chartOptions = {
// //     responsive: true,
// //     maintainAspectRatio: false,
// //     plugins: { legend: { position: "top", labels: { color: "#374151", font: { size: 14, family: "'Inter', sans-serif" } } }, tooltip: { backgroundColor: "#1f2937", titleFont: { size: 14 }, bodyFont: { size: 12 } } },
// //     scales: { x: { grid: { display: false }, ticks: { color: "#6b7280" } }, y: { beginAtZero: true, grid: { color: "rgba(0, 0, 0, 0.05)" }, ticks: { color: "#6b7280" } } },
// //   };

// //   const pieChartOptions = {
// //     responsive: true,
// //     maintainAspectRatio: false,
// //     plugins: { legend: { position: "top", labels: { color: "#374151", font: { size: 14, family: "'Inter', sans-serif" } } }, tooltip: { backgroundColor: "#1f2937", titleFont: { size: 14 }, bodyFont: { size: 12 } } },
// //   };

// //   return (
// //     <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f9fafb 0%, #e5e7eb 100%)", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: "#1f2937" }}>
// //       <div style={{ display: "flex", maxWidth: "1600px", margin: "0 auto", padding: "20px", gap: "20px" }}>
// //         {/* Sidebar */}
// //         <motion.div
// //           initial={{ x: -300 }}
// //           animate={{ x: showSidebar ? 0 : -300 }}
// //           transition={{ duration: 0.3 }}
// //           style={{ width: "300px", background: "white", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", padding: "20px", position: "fixed", top: "20px", bottom: "20px", left: "20px", zIndex: 100, overflowY: "auto" }}
// //         >
// //           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
// //             <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937" }}>Filters</h3>
// //             <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setShowSidebar(false)} style={{ background: "none", border: "none", color: "#6b7280", cursor: "pointer" }}>
// //               <X size={20} />
// //             </motion.button>
// //           </div>
// //           <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
// //             <div>
// //               <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "8px", display: "block" }}>Segment</label>
// //               <select value={segment} onChange={(e) => setSegment(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px" }}>
// //                 <option value="All">All Customers</option>
// //                 <option value="High-Spender">High Spender</option>
// //                 <option value="Medium-Spender">Medium Spender</option>
// //                 <option value="Low-Spender">Low Spender</option>
// //                 <option value="Occasional">Occasional</option>
// //                 <option value="Loyal">Loyal</option>
// //                 <option value="New-Customer">New Customer</option>
// //               </select>
// //             </div>
// //             <div>
// //               <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "8px", display: "block" }}>Min Loyalty Points</label>
// //               <input type="number" value={loyaltyFilter} onChange={(e) => setLoyaltyFilter(Number(e.target.value))} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px" }} />
// //             </div>
// //             <div>
// //               <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "8px", display: "block" }}>Recency (Days)</label>
// //               <input type="range" min="30" max="730" step="30" value={recencyFilter} onChange={(e) => setRecencyFilter(Number(e.target.value))} style={{ width: "100%" }} />
// //               <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#6b7280" }}>
// //                 <span>30</span>
// //                 <span>{recencyFilter}</span>
// //                 <span>730</span>
// //               </div>
// //             </div>
// //             <div>
// //               <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "8px", display: "block" }}>Date Range</label>
// //               <input type="date" value={dateRange.start} onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px", marginBottom: "10px" }} />
// //               <input type="date" value={dateRange.end} onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px" }} />
// //             </div>
// //             <div>
// //               <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "8px", display: "block" }}>Spending Range</label>
// //               <div style={{ display: "flex", gap: "10px" }}>
// //                 <input type="number" placeholder="Min" value={spendingFilter.min} onChange={(e) => setSpendingFilter({ ...spendingFilter, min: Number(e.target.value) })} style={{ flex: "1", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px" }} />
// //                 <input type="number" placeholder="Max" value={spendingFilter.max === Infinity ? "" : spendingFilter.max} onChange={(e) => setSpendingFilter({ ...spendingFilter, max: Number(e.target.value) || Infinity })} style={{ flex: "1", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px" }} />
// //               </div>
// //             </div>
// //           </div>
// //         </motion.div>

// //         {/* Main Content */}
// //         <div style={{ flex: 1, marginLeft: showSidebar ? "320px" : "0", transition: "margin-left 0.3s" }}>
// //           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} style={{ background: "white", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", padding: "20px", minHeight: "calc(100vh - 40px)" }}>
// //             {/* Header */}
// //             <div style={{ position: "sticky", top: 0, background: "white", zIndex: 10, paddingBottom: "20px", borderBottom: "1px solid #e5e7eb" }}>
// //               <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
// //                 <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#1f2937" }}>Customer Analytics Dashboard</h2>
// //                 <div style={{ display: "flex", gap: "15px" }}>
// //                   <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setShowSidebar(true)} style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
// //                     <Filter size={18} /> Filters
// //                   </motion.button>
// //                   <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ background: "linear-gradient(135deg, #10b981, #34d399)", color: "white", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer" }}>
// //                     <CSVLink data={csvData} filename={"customer-data.csv"} style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
// //                       <span>↓</span> Export CSV
// //                     </CSVLink>
// //                   </motion.button>
// //                 </div>
// //               </div>
// //               <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
// //                 <input type="text" placeholder="Search customers..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ flex: 1, padding: "12px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px", boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05)" }} />
// //                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveTab("data")} style={{ background: activeTab === "data" ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "#f3f4f6", color: activeTab === "data" ? "white" : "#6b7280", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "500" }}>
// //                   Data
// //                 </motion.button>
// //                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveTab("visualizations")} style={{ background: activeTab === "visualizations" ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "#f3f4f6", color: activeTab === "visualizations" ? "white" : "#6b7280", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "500" }}>
// //                   Visualizations
// //                 </motion.button>
// //               </div>
// //             </div>

// //             {/* Summary Cards */}
// //             {customerStats.totalCustomers > 0 && (
// //               <motion.div initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", margin: "20px 0" }}>
// //                 {[
// //                   { title: "Total Customers", value: customerStats.totalCustomers, gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)", icon: <Users size={20} /> },
// //                   { title: "Total Revenue", value: formatCurrency(customerStats.totalSpending), gradient: "linear-gradient(135deg, #10b981, #34d399)", icon: <TrendingUp size={20} /> },
// //                   { title: "Avg Order Value", value: formatCurrency(customerStats.avgPurchaseValue), gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)", icon: <BarChart2 size={20} /> },
// //                   { title: "Active Customers", value: customerStats.activeCustomers, gradient: "linear-gradient(135deg, #ec4899, #f472b6)", icon: <Users size={20} /> },
// //                 ].map((stat, index) => (
// //                   <motion.div key={index} whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }} style={{ background: stat.gradient, padding: "20px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", color: "white", textAlign: "center" }}>
// //                     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
// //                       {stat.icon}
// //                       <div style={{ fontSize: "14px", fontWeight: "500" }}>{stat.title}</div>
// //                     </div>
// //                     <div style={{ fontSize: "24px", fontWeight: "700" }}>{stat.value}</div>
// //                   </motion.div>
// //                 ))}
// //               </motion.div>
// //             )}

// //             {/* Tab Content */}
// //             <AnimatePresence mode="wait">
// //               {loading ? (
// //                 <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ textAlign: "center", padding: "40px", color: "#6b7280" }}>
// //                   <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} style={{ fontSize: "24px" }}>
// //                     ⏳
// //                   </motion.div>
// //                   <div style={{ marginTop: "10px" }}>Loading data...</div>
// //                 </motion.div>
// //               ) : error ? (
// //                 <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ textAlign: "center", padding: "40px", color: "#ef4444", background: "#fee2e2", borderRadius: "8px" }}>
// //                   Error: {error}
// //                 </motion.div>
// //               ) : activeTab === "data" ? (
// //                 <motion.div key="data" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>
// //                   <div style={{ display: "flex", gap: "10px", margin: "20px 0" }}>
// //                     <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setViewMode("table")} style={{ background: viewMode === "table" ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "#f3f4f6", color: viewMode === "table" ? "white" : "#6b7280", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "500" }}>
// //                       Table View
// //                     </motion.button>
// //                     <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setViewMode("card")} style={{ background: viewMode === "card" ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "#f3f4f6", color: viewMode === "card" ? "white" : "#6b7280", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "500" }}>
// //                       Card View
// //                     </motion.button>
// //                   </div>

// //                   {filteredCustomers.length === 0 ? (
// //                     <div style={{ textAlign: "center", padding: "40px", color: "#6b7280" }}>No customers found.</div>
// //                   ) : viewMode === "table" ? (
// //                     <div style={{ overflowX: "auto", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", position: "relative" }}>
// //                       <div style={{ position: "sticky", top: "0", zIndex: 5, background: "white" }}>
// //                         <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0" }}>
// //                           <thead>
// //                             <tr style={{ background: "linear-gradient(135deg, #f3f4f6, #e5e7eb)" }}>
// //                               {["Name", "Email", "Phone", "Total Spent", "Segment", "Loyalty Points", "Last Purchase", "Risk Level", "Actions"].map((header) => (
// //                                 <th key={header} onClick={() => header !== "Actions" && sortCustomers(header.toLowerCase().replace(" ", "_"))} style={{ padding: "15px", fontWeight: "600", textAlign: "left", color: "#374151", cursor: header !== "Actions" ? "pointer" : "default", position: "sticky", top: 0, background: "inherit" }}>
// //                                   {header}
// //                                   {sortConfig.key === header.toLowerCase().replace(" ", "_") && <span style={{ marginLeft: "5px" }}>{sortConfig.direction === "asc" ? "▲" : "▼"}</span>}
// //                                 </th>
// //                               ))}
// //                             </tr>
// //                           </thead>
// //                         </table>
// //                       </div>
// //                       <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0" }}>
// //                         <tbody>
// //                           {filteredCustomers.map((customer, index) => {
// //                             const riskLevel = getCustomerRiskLevel(customer);
// //                             return (
// //                               <motion.tr key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: index * 0.05 }} whileHover={{ backgroundColor: "#f9fafb" }}>
// //                                 <td style={{ padding: "15px", color: "#374151" }}>{customer.name || "N/A"}</td>
// //                                 <td style={{ padding: "15px", color: "#374151" }}>{customer.email || "N/A"}</td>
// //                                 <td style={{ padding: "15px", color: "#374151" }}>{customer.phone || "N/A"}</td>
// //                                 <td style={{ padding: "15px", color: "#6366f1", textAlign: "right" }}>{formatCurrency(customer.total_spent)}</td>
// //                                 <td style={{ padding: "15px" }}>
// //                                   <span style={{ background: getSegmentColor(customer.segment, 0.2), color: getSegmentColor(customer.segment), padding: "4px 8px", borderRadius: "4px", fontSize: "12px" }}>{customer.segment || "N/A"}</span>
// //                                 </td>
// //                                 <td style={{ padding: "15px", color: "#374151" }}>{customer.loyaltyPoints || 0}</td>
// //                                 <td style={{ padding: "15px", color: "#374151" }}>{customer.daysSinceLastPurchase !== null ? `${customer.daysSinceLastPurchase} days` : "N/A"}</td>
// //                                 <td style={{ padding: "15px" }}>
// //                                   <span style={{ background: `${riskLevel.color}20`, color: riskLevel.color, padding: "4px 8px", borderRadius: "4px", fontSize: "12px" }}>{riskLevel.label}</span>
// //                                 </td>
// //                                 <td style={{ padding: "15px" }}>
// //                                   <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => fetchPurchaseHistory(customer.phone)} style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white", padding: "8px 12px", borderRadius: "6px", border: "none", cursor: "pointer" }}>
// //                                     View
// //                                   </motion.button>
// //                                 </td>
// //                               </motion.tr>
// //                             );
// //                           })}
// //                         </tbody>
// //                       </table>
// //                     </div>
// //                   ) : (
// //                     <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
// //                       {filteredCustomers.map((customer, index) => {
// //                         const riskLevel = getCustomerRiskLevel(customer);
// //                         return (
// //                           <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }} whileHover={{ scale: 1.03, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }} style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
// //                             <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
// //                               <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: getSegmentColor(customer.segment, 0.2), color: getSegmentColor(customer.segment), display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", marginRight: "12px" }}>{(customer.name || "N/A").charAt(0)}</div>
// //                               <div>
// //                                 <div style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937" }}>{customer.name || "N/A"}</div>
// //                                 <div style={{ fontSize: "13px", color: "#6b7280" }}>{customer.email || "N/A"}</div>
// //                               </div>
// //                             </div>
// //                             <div style={{ fontSize: "14px", color: "#374151", marginBottom: "15px" }}>
// //                               <div style={{ display: "flex", justifyContent: "space-between" }}>
// //                                 <span>Total Spent:</span>
// //                                 <span style={{ color: "#6366f1" }}>{formatCurrency(customer.total_spent)}</span>
// //                               </div>
// //                               <div style={{ display: "flex", justifyContent: "space-between" }}>
// //                                 <span>Loyalty Points:</span>
// //                                 <span>{customer.loyaltyPoints || 0}</span>
// //                               </div>
// //                               <div style={{ display: "flex", justifyContent: "space-between" }}>
// //                                 <span>Last Purchase:</span>
// //                                 <span>{customer.daysSinceLastPurchase !== null ? `${customer.daysSinceLastPurchase} days` : "N/A"}</span>
// //                               </div>
// //                             </div>
// //                             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// //                               <span style={{ background: `${riskLevel.color}20`, color: riskLevel.color, padding: "4px 8px", borderRadius: "4px", fontSize: "12px" }}>{riskLevel.label}</span>
// //                               <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => fetchPurchaseHistory(customer.phone)} style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white", padding: "8px 12px", borderRadius: "6px", border: "none", cursor: "pointer" }}>
// //                                 View
// //                               </motion.button>
// //                             </div>
// //                           </motion.div>
// //                         );
// //                       })}
// //                     </div>
// //                   )}
// //                 </motion.div>
// //               ) : (
// //                 <motion.div key="visualizations" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>
// //                   {chartData && trendData && (
// //                     <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "25px", marginTop: "20px" }}>
// //                       {[
// //                         { title: "Customer Segments", icon: <PieChart size={20} />, data: chartData.segments, type: "pie", options: pieChartOptions },
// //                         { title: "Spending by Segment", icon: <BarChart2 size={20} />, data: chartData.spending, type: "bar", options: chartOptions },
// //                         { title: "Loyalty Points", icon: <PieChart size={20} />, data: chartData.loyalty, type: "pie", options: pieChartOptions },
// //                         { title: "Revenue Trend", icon: <TrendingUp size={20} />, data: trendData.revenue, type: "line", options: chartOptions },
// //                         { title: "Purchase Trend", icon: <TrendingUp size={20} />, data: trendData.purchases, type: "line", options: chartOptions },
// //                         { title: "Customer Trend", icon: <Users size={20} />, data: trendData.customers, type: "line", options: chartOptions },
// //                       ].map((chart, index) => (
// //                         <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }} style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
// //                           <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937", marginBottom: "15px", display: "flex", alignItems: "center", gap: "10px" }}>{chart.icon} {chart.title}</h3>
// //                           <div style={{ height: "300px" }}>
// //                             <Chart type={chart.type} data={chart.data} options={chart.options} />
// //                           </div>
// //                         </motion.div>
// //                       ))}
// //                     </div>
// //                   )}
// //                 </motion.div>
// //               )}
// //             </AnimatePresence>
// //           </motion.div>
// //         </div>
// //       </div>

// //       {/* Purchase History Modal */}
// //       <AnimatePresence>
// //         {showPurchaseModal && (
// //           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.7)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000, backdropFilter: "blur(5px)" }} onClick={() => setShowPurchaseModal(false)}>
// //             <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.3 }} style={{ background: "white", borderRadius: "16px", width: "90%", maxWidth: "1000px", maxHeight: "90vh", overflow: "hidden", boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)", display: "flex", flexDirection: "column" }} onClick={(e) => e.stopPropagation()}>
// //               <div style={{ padding: "20px", background: "linear-gradient(135deg, #f9fafb, #e5e7eb)", borderBottom: "1px solid #d1d5db", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// //                 <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "700", color: "#1f2937" }}>Purchase History - {selectedCustomerDetails?.name || "N/A"}</h3>
// //                 <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setShowPurchaseModal(false)} style={{ background: "none", border: "none", fontSize: "24px", cursor: "pointer", color: "#6b7280" }}>
// //                   ×
// //                 </motion.button>
// //               </div>
// //               <div style={{ padding: "20px", overflowY: "auto", flex: 1 }}>
// //                 <div style={{ marginBottom: "20px", background: " #f9fafb", padding: "15px", borderRadius: "8px" }}>
// //                   <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937", marginBottom: "15px" }}>Customer Summary</h4>
// //                   <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "15px" }}>
// //                     <div>
// //                       <span style={{ fontSize: "13px", color: "#6b7280" }}>Name:</span>
// //                       <div style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>{selectedCustomerDetails?.name || "N/A"}</div>
// //                     </div>
// //                     <div>
// //                       <span style={{ fontSize: "13px", color: "#6b7280" }}>Total Spent:</span>
// //                       <div style={{ fontSize: "14px", fontWeight: "500", color: "#6366f1" }}>{formatCurrency(purchaseStats?.totalSpent)}</div>
// //                     </div>
// //                     <div>
// //                       <span style={{ fontSize: "13px", color: "#6b7280" }}>Avg Purchase:</span>
// //                       <div style={{ fontSize: "14px", fontWeight: "500", color: "#f59e0b" }}>{formatCurrency(purchaseStats?.avgPurchase)}</div>
// //                     </div>
// //                     <div>
// //                       <span style={{ fontSize: "13px", color: "#6b7280" }}>Frequency:</span>
// //                       <div style={{ fontSize: "14px", fontWeight: "500", color: "#10b981" }}>{purchaseStats?.frequency ? `Every ${purchaseStats.frequency} days` : "N/A"}</div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {purchaseStats?.purchaseTrendData && (
// //                   <div style={{ marginBottom: "20px", background: "#f9fafb", padding: "15px", borderRadius: "8px" }}>
// //                     <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937", marginBottom: "15px" }}>Purchase Trend</h4>
// //                     <div style={{ height: "250px" }}>
// //                       <Chart type="line" data={purchaseStats.purchaseTrendData} options={chartOptions} />
// //                     </div>
// //                   </div>
// //                 )}

// //                 <div>
// //                   <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937", marginBottom: "15px" }}>Purchase History ({purchaseStats?.purchaseCount || 0})</h4>
// //                   <div style={{ maxHeight: "300px", overflowY: "auto" }}>
// //                     {purchaseHistory.map((purchase, index) => (
// //                       <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }} whileHover={{ backgroundColor: "#f3f4f6" }} style={{ background: index % 2 === 0 ? "#f9fafb" : "white", padding: "15px", borderRadius: "8px", marginBottom: "10px", cursor: "pointer" }} onClick={() => setSelectedPurchase(purchase)}>
// //                         <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
// //                           <span style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>{formatDate(purchase.date)}</span>
// //                           <span style={{ fontSize: "14px", fontWeight: "500", color: "#6366f1" }}>{formatCurrency(purchase.total_amount)}</span>
// //                         </div>
// //                         <div style={{ fontSize: "13px", color: "#6b7280" }}>{purchase.products ? purchase.products.map((p) => `${p.name} (x${p.quantity})`).join(", ") : "N/A"}</div>
// //                       </motion.div>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 {selectedPurchase && (
// //                   <div style={{ marginTop: "20px", background: "#f9fafb", padding: "15px", borderRadius: "8px" }}>
// //                     <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937", marginBottom: "15px" }}>Purchase Details</h4>
// //                     <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", marginBottom: "15px" }}>
// //                       <div>
// //                         <span style={{ fontSize: "13px", color: "#6b7280" }}>Date:</span>
// //                         <span style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>{formatDate(selectedPurchase.date)}</span>
// //                       </div>
// //                       <div>
// //                         <span style={{ fontSize: "13px", color: "#6b7280" }}>Order ID:</span>
// //                         <span style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>{selectedPurchase.order_id || "N/A"}</span>
// //                       </div>
// //                     </div>
// //                     <div>
// //                       <h5 style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937", marginBottom: "10px" }}>Products</h5>
// //                       {selectedPurchase.products && selectedPurchase.products.map((product, idx) => (
// //                         <div key={idx} style={{ marginBottom: "10px", fontSize: "13px", color: "#374151" }}>
// //                           <span style={{ fontWeight: "500" }}>{product.name || "N/A"}</span>
// //                           <span style={{ color: "#6b7280" }}> (x{product.quantity || 0}) - {formatCurrency(product.price)}</span>
// //                         </div>
// //                       ))}
// //                       <div style={{ fontSize: "14px", fontWeight: "600", color: "#6366f1", marginTop: "15px" }}>Total: {formatCurrency(selectedPurchase.total_amount)}</div>
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>
// //               <div style={{ padding: "15px", borderTop: "1px solid #d1d5db", display: "flex", justifyContent: "flex-end" }}>
// //                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ background: "linear-gradient(135deg, #10b981, #34d399)", color: "white", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
// //                   <CSVLink data={purchaseHistoryCsvData} filename={`purchase-history-${selectedCustomerDetails?.phone || "unknown"}.csv`} style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
// //                     <span>↓</span> Export
// //                   </CSVLink>
// //                 </motion.button>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // };

// // export default CustomerSegmentation;
// import React, { useState, useEffect } from "react";
// import { Chart } from "react-chartjs-2";
// import { CSVLink } from "react-csv";
// import "chart.js/auto";
// import { motion, AnimatePresence } from "framer-motion";
// import { BarChart2, PieChart, TrendingUp, Users, Filter, X } from "lucide-react";

// const CustomerSegmentation = () => {
//   const [customers, setCustomers] = useState([]);
//   const [segment, setSegment] = useState("All");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [loyaltyFilter, setLoyaltyFilter] = useState(0);
//   const [selectedCustomer, setSelectedCustomer] = useState(null);
//   const [purchaseHistory, setPurchaseHistory] = useState([]);
//   const [dateRange, setDateRange] = useState({ start: "", end: "" });
//   const [spendingFilter, setSpendingFilter] = useState({ min: 0, max: Infinity });
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
//   const [chartData, setChartData] = useState(null);
//   const [customerStats, setCustomerStats] = useState({});
//   const [activeTab, setActiveTab] = useState("data");
//   const [trendData, setTrendData] = useState(null);
//   const [viewMode, setViewMode] = useState("table");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [recencyFilter, setRecencyFilter] = useState(365);
//   const [riskCategories, setRiskCategories] = useState({
//     churnRisk: [],
//     highValue: [],
//     potentialLoyalists: [],
//   });
//   const [showPurchaseModal, setShowPurchaseModal] = useState(false);
//   const [selectedPurchase, setSelectedPurchase] = useState(null);
//   const [selectedCustomerDetails, setSelectedCustomerDetails] = useState(null);
//   const [purchaseStats, setPurchaseStats] = useState(null);

//   useEffect(() => {
//     const fetchCustomers = async () => {
//       setLoading(true);
//       try {
//         const storeId = localStorage.getItem("storeId");
//         if (!storeId) throw new Error("Store ID not found in localStorage");

//         const params = new URLSearchParams({
//           storeId,
//           segment: segment !== "All" ? segment : "",
//           loyaltyPoints: loyaltyFilter.toString(),
//           ...(dateRange.start && { startDate: dateRange.start }),
//           ...(dateRange.end && { endDate: dateRange.end }),
//         });

//         const url = `http://localhost:5008/api/customers?${params}`;
//         console.log("Fetching customers from:", url);

//         const response = await fetch(url);
//         if (!response.ok) {
//           const errorText = await response.text();
//           throw new Error(`Failed to fetch customers: ${response.status} - ${errorText}`);
//         }

//         const data = await response.json();
//         console.log("Received data:", data);

//         if (!data.customers || !Array.isArray(data.customers)) {
//           throw new Error("Invalid response format: 'customers' key missing or not an array");
//         }

//         const enrichedCustomers = await Promise.all(
//           data.customers.map(async (customer) => {
//             if (!customer.phone) {
//               console.warn("Customer missing phone:", customer);
//               return { ...customer, purchaseHistory: [], total_spent: 0, purchaseCount: 0, daysSinceLastPurchase: null, avgOrderValue: 0 };
//             }
//             const history = await fetchPurchaseHistory(customer.phone, true);
//             const totalSpent = history.reduce((sum, p) => sum + (p.total_amount || 0), 0);
//             const purchaseCount = history.length;
//             const lastPurchaseDate = history.length > 0
//               ? new Date(history.sort((a, b) => new Date(b.date) - new Date(a.date))[0].date)
//               : null;
//             const daysSinceLastPurchase = lastPurchaseDate
//               ? Math.floor((new Date() - lastPurchaseDate) / (1000 * 60 * 60 * 24))
//               : null;
//             const avgOrderValue = purchaseCount > 0 ? totalSpent / purchaseCount : 0;

//             return {
//               ...customer,
//               purchaseHistory: history,
//               total_spent: totalSpent,
//               purchaseCount,
//               daysSinceLastPurchase,
//               avgOrderValue,
//             };
//           })
//         );

//         setCustomers(enrichedCustomers);
//         calculateCustomerStats(enrichedCustomers);
//         updateChartData(enrichedCustomers);
//         generateTrendData(enrichedCustomers);
//         identifyCustomerCategories(enrichedCustomers);
//         setError(null);
//       } catch (err) {
//         console.error("Error in fetchCustomers:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCustomers();
//   }, [segment, loyaltyFilter, dateRange]);

//   const fetchPurchaseHistory = async (customerPhone, silent = false) => {
//     try {
//       const storeId = localStorage.getItem("storeId");
//       if (!storeId) throw new Error("Store ID not found in localStorage");

//       const response = await fetch(
//         `http://localhost:5008/api/customers/${customerPhone}/purchase-history?storeId=${storeId}`
//       );
//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(`Failed to fetch purchase history: ${response.status} - ${errorText}`);
//       }
//       const data = await response.json();
//       console.log(`Purchase history for ${customerPhone}:`, data);

//       if (!data.purchase_history || !Array.isArray(data.purchase_history)) {
//         throw new Error("Invalid purchase history response format");
//       }

//       if (!silent) {
//         setPurchaseHistory(data.purchase_history);
//         setSelectedCustomer(customerPhone);
//         const customer = customers.find((c) => c.phone === customerPhone);
//         if (customer) {
//           setSelectedCustomerDetails(customer);
//           setPurchaseStats(calculatePurchaseStats(data.purchase_history));
//         }
//         setShowPurchaseModal(true);
//       }
//       return data.purchase_history;
//     } catch (err) {
//       console.error("Error in fetchPurchaseHistory:", err);
//       if (!silent) setError(err.message);
//       return [];
//     }
//   };

//   const calculateCustomerStats = (customerData) => {
//     const stats = customerData.reduce(
//       (acc, customer) => ({
//         totalCustomers: acc.totalCustomers + 1,
//         totalPurchases: acc.totalPurchases + customer.purchaseCount,
//         totalSpending: acc.totalSpending + customer.total_spent,
//         avgPurchaseValue: (acc.avgPurchaseValue * acc.totalCustomers + (customer.avgOrderValue || 0)) / (acc.totalCustomers + 1),
//         activeCustomers: acc.activeCustomers + (customer.daysSinceLastPurchase < 90 ? 1 : 0),
//         inactiveCustomers: acc.inactiveCustomers + (customer.daysSinceLastPurchase >= 90 ? 1 : 0),
//         highValueCustomers: acc.highValueCustomers + (customer.total_spent > 1000 ? 1 : 0),
//         loyaltyPointsAvg: acc.loyaltyPointsAvg + (customer.loyaltyPoints || 0),
//       }),
//       {
//         totalCustomers: 0,
//         totalPurchases: 0,
//         totalSpending: 0,
//         avgPurchaseValue: 0,
//         activeCustomers: 0,
//         inactiveCustomers: 0,
//         highValueCustomers: 0,
//         loyaltyPointsAvg: 0,
//       }
//     );
//     stats.loyaltyPointsAvg = stats.totalCustomers > 0 ? Math.round(stats.loyaltyPointsAvg / stats.totalCustomers) : 0;
//     setCustomerStats(stats);
//   };

//   const calculatePurchaseStats = (history) => {
//     const totalSpent = history.reduce((sum, p) => sum + (p.total_amount || 0), 0);
//     const avgPurchase = history.length > 0 ? totalSpent / history.length : 0;
//     const purchaseDates = history.map((p) => new Date(p.date));
//     const frequency =
//       history.length > 1
//         ? (Math.max(...purchaseDates) - Math.min(...purchaseDates)) / (1000 * 60 * 60 * 24) / (history.length - 1)
//         : 0;

//     const purchasesByMonth = history.reduce((acc, purchase) => {
//       const date = new Date(purchase.date);
//       const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
//       acc[monthKey] = (acc[monthKey] || 0) + purchase.total_amount;
//       return acc;
//     }, {});

//     const purchaseTrendData = {
//       labels: Object.keys(purchasesByMonth)
//         .sort()
//         .map((month) => {
//           const [year, monthNum] = month.split("-");
//           return `${monthNum}/${year.slice(2)}`;
//         }),
//       datasets: [
//         {
//           label: "Purchase Amount",
//           data: Object.keys(purchasesByMonth)
//             .sort()
//             .map((month) => purchasesByMonth[month]),
//           borderColor: "#6366f1",
//           backgroundColor: "rgba(99, 102, 241, 0.2)",
//           fill: true,
//           tension: 0.4,
//         },
//       ],
//     };

//     return { totalSpent, avgPurchase, purchaseCount: history.length, frequency: Math.round(frequency), purchaseTrendData };
//   };

//   const generateTrendData = (customerData) => {
//     const purchasesByMonth = {};
//     customerData.forEach((customer) => {
//       customer.purchaseHistory.forEach((purchase) => {
//         const date = new Date(purchase.date);
//         const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
//         if (!purchasesByMonth[monthKey]) {
//           purchasesByMonth[monthKey] = { totalAmount: 0, purchaseCount: 0, customerCount: new Set() };
//         }
//         purchasesByMonth[monthKey].totalAmount += purchase.total_amount || 0;
//         purchasesByMonth[monthKey].purchaseCount += 1;
//         purchasesByMonth[monthKey].customerCount.add(customer.phone);
//       });
//     });

//     const sortedMonths = Object.keys(purchasesByMonth).sort();
//     const trendData = {
//       revenue: {
//         labels: sortedMonths.map((month) => `${month.split("-")[1]}/${month.split("-")[0].slice(2)}`),
//         datasets: [
//           {
//             label: "Monthly Revenue",
//             data: sortedMonths.map((month) => purchasesByMonth[month].totalAmount),
//             borderColor: "#6366f1",
//             backgroundColor: "rgba(99, 102, 241, 0.2)",
//             fill: true,
//             tension: 0.4,
//           },
//         ],
//       },
//       purchases: {
//         labels: sortedMonths.map((month) => `${month.split("-")[1]}/${month.split("-")[0].slice(2)}`),
//         datasets: [
//           {
//             label: "Purchase Count",
//             data: sortedMonths.map((month) => purchasesByMonth[month].purchaseCount),
//             borderColor: "#10b981",
//             backgroundColor: "rgba(16, 185, 129, 0.2)",
//             fill: true,
//             tension: 0.4,
//           },
//         ],
//       },
//       customers: {
//         labels: sortedMonths.map((month) => `${month.split("-")[1]}/${month.split("-")[0].slice(2)}`),
//         datasets: [
//           {
//             label: "Active Customers",
//             data: sortedMonths.map((month) => purchasesByMonth[month].customerCount.size),
//             borderColor: "#f59e0b",
//             backgroundColor: "rgba(245, 158, 11, 0.2)",
//             fill: true,
//             tension: 0.4,
//           },
//         ],
//       },
//     };
//     setTrendData(trendData);
//   };

//   const identifyCustomerCategories = (customerData) => {
//     const categories = { churnRisk: [], highValue: [], potentialLoyalists: [] };
//     customerData.forEach((customer) => {
//       if (customer.purchaseCount > 3 && customer.daysSinceLastPurchase > 120) categories.churnRisk.push(customer);
//       if (customer.total_spent > 1000 && customer.purchaseCount > 5) categories.highValue.push(customer);
//       if (customer.purchaseCount >= 2 && customer.purchaseCount < 5 && customer.daysSinceLastPurchase < 60 && customer.total_spent > 200)
//         categories.potentialLoyalists.push(customer);
//     });
//     setRiskCategories(categories);
//   };

//   const updateChartData = (customerData) => {
//     const segmentCounts = customerData.reduce((acc, customer) => {
//       acc[customer.segment || "Unknown"] = (acc[customer.segment || "Unknown"] || 0) + 1;
//       return acc;
//     }, {});

//     const spendingBySegment = customerData.reduce((acc, customer) => {
//       acc[customer.segment || "Unknown"] = (acc[customer.segment || "Unknown"] || 0) + customer.total_spent;
//       return acc;
//     }, {});

//     setChartData({
//       segments: {
//         labels: Object.keys(segmentCounts),
//         datasets: [
//           {
//             label: "Customer Segments",
//             data: Object.values(segmentCounts),
//             backgroundColor: Object.keys(segmentCounts).map((seg) => getSegmentColor(seg)),
//             borderWidth: 1,
//             borderColor: "#ffffff",
//           },
//         ],
//       },
//       spending: {
//         labels: Object.keys(spendingBySegment),
//         datasets: [
//           {
//             label: "Spending by Segment",
//             data: Object.values(spendingBySegment),
//             backgroundColor: Object.keys(spendingBySegment).map((seg) => getSegmentColor(seg, 0.7)),
//             borderWidth: 1,
//             borderColor: "#ffffff",
//           },
//         ],
//       },
//       loyalty: {
//         labels: ["0-50", "51-100", "101-200", "201-500", "501+"],
//         datasets: [
//           {
//             label: "Loyalty Points Distribution",
//             data: [
//               customerData.filter((c) => (c.loyaltyPoints || 0) >= 0 && (c.loyaltyPoints || 0) <= 50).length,
//               customerData.filter((c) => (c.loyaltyPoints || 0) > 50 && (c.loyaltyPoints || 0) <= 100).length,
//               customerData.filter((c) => (c.loyaltyPoints || 0) > 100 && (c.loyaltyPoints || 0) <= 200).length,
//               customerData.filter((c) => (c.loyaltyPoints || 0) > 200 && (c.loyaltyPoints || 0) <= 500).length,
//               customerData.filter((c) => (c.loyaltyPoints || 0) > 500).length,
//             ],
//             backgroundColor: ["#10b981", "#6366f1", "#f59e0b", "#ec4899", "#8b5cf6"],
//             borderWidth: 1,
//             borderColor: "#ffffff",
//           },
//         ],
//       },
//     });
//   };

//   const getSegmentColor = (segment, opacity = 1) => {
//     const colors = {
//       "High-Spender": `rgba(16, 185, 129, ${opacity})`,
//       "Medium-Spender": `rgba(99, 102, 241, ${opacity})`,
//       "Low-Spender": `rgba(245, 158, 11, ${opacity})`,
//       "Occasional": `rgba(236, 72, 153, ${opacity})`,
//       "Loyal": `rgba(139, 92, 246, ${opacity})`,
//       "New-Customer": `rgba(244, 63, 94, ${opacity})`,
//       Unknown: `rgba(107, 114, 128, ${opacity})`,
//     };
//     return colors[segment] || `rgba(107, 114, 128, ${opacity})`;
//   };

//   const formatCurrency = (amount) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(amount || 0);

//   const sortCustomers = (key) => {
//     const direction = sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
//     setSortConfig({ key, direction });
//     const sorted = [...customers].sort((a, b) => {
//       if (["total_spent", "loyaltyPoints", "purchaseCount", "daysSinceLastPurchase", "avgOrderValue"].includes(key)) {
//         return direction === "asc" ? (a[key] || 0) - (b[key] || 0) : (b[key] || 0) - (a[key] || 0);
//       }
//       if (a[key] === null || a[key] === undefined) return direction === "asc" ? 1 : -1;
//       if (b[key] === null || b[key] === undefined) return direction === "asc" ? -1 : 1;
//       return direction === "asc" ? String(a[key]).localeCompare(String(b[key])) : String(b[key]).localeCompare(String(a[key]));
//     });
//     setCustomers(sorted);
//   };

//   const filteredCustomers = customers.filter((customer) => {
//     const matchesSegment = segment === "All" || customer.segment === segment;
//     const matchesLoyalty = (customer.loyaltyPoints || 0) >= Number(loyaltyFilter);
//     const matchesSpending = (customer.total_spent || 0) >= spendingFilter.min && (customer.total_spent || 0) <= (spendingFilter.max === Infinity ? Number.MAX_VALUE : spendingFilter.max);
//     const matchesRecency = !recencyFilter || (customer.daysSinceLastPurchase || Infinity) <= recencyFilter;
//     const matchesSearch =
//       !searchTerm ||
//       (customer.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
//       (customer.email || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
//       (customer.phone || "").includes(searchTerm);
//     const matchesDateRange =
//       (!dateRange.start || (customer.purchaseHistory[0]?.date && new Date(customer.purchaseHistory[0].date) >= new Date(dateRange.start))) &&
//       (!dateRange.end || (customer.purchaseHistory[0]?.date && new Date(customer.purchaseHistory[0].date) <= new Date(dateRange.end)));

//     return matchesSegment && matchesLoyalty && matchesSpending && matchesRecency && matchesSearch && matchesDateRange;
//   });

//   const formatDate = (dateString) => {
//     const options = { year: "numeric", month: "short", day: "numeric" };
//     return dateString ? new Date(dateString).toLocaleDateString(undefined, options) : "N/A";
//   };

//   const csvData = filteredCustomers.map((customer) => ({
//     Name: customer.name || "N/A",
//     Email: customer.email || "N/A",
//     Phone: customer.phone || "N/A",
//     "Total Spent": formatCurrency(customer.total_spent).replace("₹", ""),
//     Segment: customer.segment || "N/A",
//     "Loyalty Points": customer.loyaltyPoints || 0,
//     "Purchase Count": customer.purchaseCount || 0,
//     "Last Purchase (Days)": customer.daysSinceLastPurchase || "N/A",
//     "Avg Order Value": formatCurrency(customer.avgOrderValue).replace("₹", ""),
//   }));

//   const purchaseHistoryCsvData = purchaseHistory.map((purchase) => ({
//     Date: formatDate(purchase.date),
//     "Order ID": purchase.order_id || "N/A",
//     "Total Amount": formatCurrency(purchase.total_amount).replace("₹", ""),
//     Products: purchase.products ? purchase.products.map((p) => `${p.name} (x${p.quantity})`).join("; ") : "N/A",
//   }));

//   const getCustomerRiskLevel = (customer) => {
//     if (!customer.daysSinceLastPurchase) return { level: "new", label: "New", color: "#10b981" };
//     if (customer.daysSinceLastPurchase > 180) return { level: "high", label: "High Risk", color: "#ef4444" };
//     if (customer.daysSinceLastPurchase > 90) return { level: "medium", label: "Medium Risk", color: "#f59e0b" };
//     return { level: "low", label: "Low Risk", color: "#6366f1" };
//   };

//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { position: "top", labels: { color: "#374151", font: { size: 14, family: "'Inter', sans-serif" } } },
//       tooltip: { backgroundColor: "#1f2937", titleFont: { size: 14 }, bodyFont: { size: 12 } },
//     },
//     scales: {
//       x: { grid: { display: false }, ticks: { color: "#6b7280" } },
//       y: { beginAtZero: true, grid: { color: "rgba(0, 0, 0, 0.05)" }, ticks: { color: "#6b7280" } },
//     },
//   };

//   const pieChartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { position: "top", labels: { color: "#374151", font: { size: 14, family: "'Inter', sans-serif" } } },
//       tooltip: { backgroundColor: "#1f2937", titleFont: { size: 14 }, bodyFont: { size: 12 } },
//     },
//   };

//   return (
//     <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f9fafb 0%, #e5e7eb 100%)", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: "#1f2937" }}>
//       <div style={{ display: "flex", maxWidth: "1600px", margin: "0 auto", padding: "20px", gap: "20px" }}>
//         {/* Sidebar */}
//         <motion.div
//           initial={{ x: -300 }}
//           animate={{ x: showSidebar ? 0 : -300 }}
//           transition={{ duration: 0.3 }}
//           style={{ width: "300px", background: "white", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", padding: "20px", position: "fixed", top: "20px", bottom: "20px", left: "20px", zIndex: 100, overflowY: "auto" }}
//         >
//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
//             <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937" }}>Filters</h3>
//             <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setShowSidebar(false)} style={{ background: "none", border: "none", color: "#6b7280", cursor: "pointer" }}>
//               <X size={20} />
//             </motion.button>
//           </div>
//           <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//             <div>
//               <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "8px", display: "block" }}>Segment</label>
//               <select value={segment} onChange={(e) => setSegment(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px" }}>
//                 <option value="All">All Customers</option>
//                 <option value="High-Spender">High Spender</option>
//                 <option value="Medium-Spender">Medium Spender</option>
//                 <option value="Low-Spender">Low Spender</option>
//                 <option value="Occasional">Occasional</option>
//                 <option value="Loyal">Loyal</option>
//                 <option value="New-Customer">New Customer</option>
//               </select>
//             </div>
//             <div>
//               <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "8px", display: "block" }}>Min Loyalty Points</label>
//               <input type="number" value={loyaltyFilter} onChange={(e) => setLoyaltyFilter(Number(e.target.value))} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px" }} />
//             </div>
//             <div>
//               <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "8px", display: "block" }}>Recency (Days)</label>
//               <input type="range" min="30" max="730" step="30" value={recencyFilter} onChange={(e) => setRecencyFilter(Number(e.target.value))} style={{ width: "100%" }} />
//               <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#6b7280" }}>
//                 <span>30</span>
//                 <span>{recencyFilter}</span>
//                 <span>730</span>
//               </div>
//             </div>
//             <div>
//               <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "8px", display: "block" }}>Date Range</label>
//               <input type="date" value={dateRange.start} onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px", marginBottom: "10px" }} />
//               <input type="date" value={dateRange.end} onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px" }} />
//             </div>
//             <div>
//               <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "8px", display: "block" }}>Spending Range</label>
//               <div style={{ display: "flex", gap: "10px" }}>
//                 <input type="number" placeholder="Min" value={spendingFilter.min} onChange={(e) => setSpendingFilter({ ...spendingFilter, min: Number(e.target.value) })} style={{ flex: "1", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px" }} />
//                 <input type="number" placeholder="Max" value={spendingFilter.max === Infinity ? "" : spendingFilter.max} onChange={(e) => setSpendingFilter({ ...spendingFilter, max: Number(e.target.value) || Infinity })} style={{ flex: "1", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px" }} />
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Main Content */}
//         <div style={{ flex: 1, marginLeft: showSidebar ? "320px" : "0", transition: "margin-left 0.3s" }}>
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} style={{ background: "white", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", padding: "20px", minHeight: "calc(100vh - 40px)" }}>
//             {/* Header */}
//             <div style={{ position: "sticky", top: 0, background: "white", zIndex: 10, paddingBottom: "20px", borderBottom: "1px solid #e5e7eb" }}>
//               <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
//                 <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#1f2937" }}>Customer Analytics Dashboard</h2>
//                 <div style={{ display: "flex", gap: "15px" }}>
//                   <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setShowSidebar(true)} style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
//                     <Filter size={18} /> Filters
//                   </motion.button>
//                   <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ background: "linear-gradient(135deg, #10b981, #34d399)", color: "white", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer" }}>
//                     <CSVLink data={csvData} filename={"customer-data.csv"} style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
//                       <span>↓</span> Export CSV
//                     </CSVLink>
//                   </motion.button>
//                 </div>
//               </div>
//               <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
//                 <input type="text" placeholder="Search customers..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ flex: 1, padding: "12px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px", boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05)" }} />
//                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveTab("data")} style={{ background: activeTab === "data" ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "#f3f4f6", color: activeTab === "data" ? "white" : "#6b7280", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "500" }}>
//                   Data
//                 </motion.button>
//                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveTab("visualizations")} style={{ background: activeTab === "visualizations" ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "#f3f4f6", color: activeTab === "visualizations" ? "white" : "#6b7280", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "500" }}>
//                   Visualizations
//                 </motion.button>
//               </div>
//             </div>

//             {/* Summary Cards */}
//             {customerStats.totalCustomers > 0 && (
//               <motion.div initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", margin: "20px 0" }}>
//                 {[
//                   { title: "Total Customers", value: customerStats.totalCustomers, gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)", icon: <Users size={20} /> },
//                   { title: "Total Revenue", value: formatCurrency(customerStats.totalSpending), gradient: "linear-gradient(135deg, #10b981, #34d399)", icon: <TrendingUp size={20} /> },
//                   { title: "Avg Order Value", value: formatCurrency(customerStats.avgPurchaseValue), gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)", icon: <BarChart2 size={20} /> },
//                   { title: "Active Customers", value: customerStats.activeCustomers, gradient: "linear-gradient(135deg, #ec4899, #f472b6)", icon: <Users size={20} /> },
//                 ].map((stat, index) => (
//                   <motion.div key={index} whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }} style={{ background: stat.gradient, padding: "20px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", color: "white", textAlign: "center" }}>
//                     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
//                       {stat.icon}
//                       <div style={{ fontSize: "14px", fontWeight: "500" }}>{stat.title}</div>
//                     </div>
//                     <div style={{ fontSize: "24px", fontWeight: "700" }}>{stat.value}</div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             )}

//             {/* Tab Content */}
//             <AnimatePresence mode="wait">
//               {loading ? (
//                 <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ textAlign: "center", padding: "40px", color: "#6b7280" }}>
//                   <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} style={{ fontSize: "24px" }}>
//                     ⏳
//                   </motion.div>
//                   <div style={{ marginTop: "10px" }}>Loading data...</div>
//                 </motion.div>
//               ) : error ? (
//                 <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ textAlign: "center", padding: "40px", color: "#ef4444", background: "#fee2e2", borderRadius: "8px" }}>
//                   Error: {error}
//                 </motion.div>
//               ) : activeTab === "data" ? (
//                 <motion.div key="data" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>
//                   <div style={{ display: "flex", gap: "10px", margin: "20px 0" }}>
//                     <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setViewMode("table")} style={{ background: viewMode === "table" ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "#f3f4f6", color: viewMode === "table" ? "white" : "#6b7280", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "500" }}>
//                       Table View
//                     </motion.button>
//                     <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setViewMode("card")} style={{ background: viewMode === "card" ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "#f3f4f6", color: viewMode === "card" ? "white" : "#6b7280", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "500" }}>
//                       Card View
//                     </motion.button>
//                   </div>

//                   {filteredCustomers.length === 0 ? (
//                     <div style={{ textAlign: "center", padding: "40px", color: "#6b7280" }}>No customers found.</div>
//                   ) : viewMode === "table" ? (
//                     <div style={{ overflowX: "auto", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", position: "relative" }}>
//                       <div style={{ position: "sticky", top: "0", zIndex: 5, background: "white" }}>
//                         <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0" }}>
//                           <thead>
//                             <tr style={{ background: "linear-gradient(135deg, #f3f4f6, #e5e7eb)" }}>
//                               {["Name", "Email", "Phone", "Total Spent", "Segment", "Loyalty Points", "Last Purchase", "Risk Level", "Actions"].map((header) => (
//                                 <th key={header} onClick={() => header !== "Actions" && sortCustomers(header.toLowerCase().replace(" ", "_"))} style={{ padding: "15px", fontWeight: "600", textAlign: "left", color: "#374151", cursor: header !== "Actions" ? "pointer" : "default", position: "sticky", top: 0, background: "inherit" }}>
//                                   {header}
//                                   {sortConfig.key === header.toLowerCase().replace(" ", "_") && <span style={{ marginLeft: "5px" }}>{sortConfig.direction === "asc" ? "▲" : "▼"}</span>}
//                                 </th>
//                               ))}
//                             </tr>
//                           </thead>
//                         </table>
//                       </div>
//                       <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0" }}>
//                         <tbody>
//                           {filteredCustomers.map((customer, index) => {
//                             const riskLevel = getCustomerRiskLevel(customer);
//                             return (
//                               <motion.tr key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: index * 0.05 }} whileHover={{ backgroundColor: "#f9fafb" }}>
//                                 <td style={{ padding: "15px", color: "#374151" }}>{customer.name || "N/A"}</td>
//                                 <td style={{ padding: "15px", color: "#374151" }}>{customer.email || "N/A"}</td>
//                                 <td style={{ padding: "15px", color: "#374151" }}>{customer.phone || "N/A"}</td>
//                                 <td style={{ padding: "15px", color: "#6366f1", textAlign: "right" }}>{formatCurrency(customer.total_spent)}</td>
//                                 <td style={{ padding: "15px" }}>
//                                   <span style={{ background: getSegmentColor(customer.segment, 0.2), color: getSegmentColor(customer.segment), padding: "4px 8px", borderRadius: "4px", fontSize: "12px" }}>{customer.segment || "N/A"}</span>
//                                 </td>
//                                 <td style={{ padding: "15px", color: "#374151" }}>{customer.loyaltyPoints || 0}</td>
//                                 <td style={{ padding: "15px", color: "#374151" }}>{customer.daysSinceLastPurchase !== null ? `${customer.daysSinceLastPurchase} days` : "N/A"}</td>
//                                 <td style={{ padding: "15px" }}>
//                                   <span style={{ background: `${riskLevel.color}20`, color: riskLevel.color, padding: "4px 8px", borderRadius: "4px", fontSize: "12px" }}>{riskLevel.label}</span>
//                                 </td>
//                                 <td style={{ padding: "15px" }}>
//                                   <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => fetchPurchaseHistory(customer.phone)} style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white", padding: "8px 12px", borderRadius: "6px", border: "none", cursor: "pointer" }}>
//                                     View
//                                   </motion.button>
//                                 </td>
//                               </motion.tr>
//                             );
//                           })}
//                         </tbody>
//                       </table>
//                     </div>
//                   ) : (
//                     <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
//                       {filteredCustomers.map((customer, index) => {
//                         const riskLevel = getCustomerRiskLevel(customer);
//                         return (
//                           <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }} whileHover={{ scale: 1.03, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }} style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
//                             <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
//                               <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: getSegmentColor(customer.segment, 0.2), color: getSegmentColor(customer.segment), display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", marginRight: "12px" }}>{(customer.name || "N/A").charAt(0)}</div>
//                               <div>
//                                 <div style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937" }}>{customer.name || "N/A"}</div>
//                                 <div style={{ fontSize: "13px", color: "#6b7280" }}>{customer.email || "N/A"}</div>
//                               </div>
//                             </div>
//                             <div style={{ fontSize: "14px", color: "#374151", marginBottom: "15px" }}>
//                               <div style={{ display: "flex", justifyContent: "space-between" }}>
//                                 <span>Total Spent:</span>
//                                 <span style={{ color: "#6366f1" }}>{formatCurrency(customer.total_spent)}</span>
//                               </div>
//                               <div style={{ display: "flex", justifyContent: "space-between" }}>
//                                 <span>Loyalty Points:</span>
//                                 <span>{customer.loyaltyPoints || 0}</span>
//                               </div>
//                               <div style={{ display: "flex", justifyContent: "space-between" }}>
//                                 <span>Last Purchase:</span>
//                                 <span>{customer.daysSinceLastPurchase !== null ? `${customer.daysSinceLastPurchase} days` : "N/A"}</span>
//                               </div>
//                             </div>
//                             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                               <span style={{ background: `${riskLevel.color}20`, color: riskLevel.color, padding: "4px 8px", borderRadius: "4px", fontSize: "12px" }}>{riskLevel.label}</span>
//                               <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => fetchPurchaseHistory(customer.phone)} style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white", padding: "8px 12px", borderRadius: "6px", border: "none", cursor: "pointer" }}>
//                                 View
//                               </motion.button>
//                             </div>
//                           </motion.div>
//                         );
//                       })}
//                     </div>
//                   )}
//                 </motion.div>
//               ) : (
//                 <motion.div key="visualizations" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>
//                   {chartData && trendData && (
//                     <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "25px", marginTop: "20px" }}>
//                       {[
//                         { title: "Customer Segments", icon: <PieChart size={20} />, data: chartData.segments, type: "pie", options: pieChartOptions },
//                         { title: "Spending by Segment", icon: <BarChart2 size={20} />, data: chartData.spending, type: "bar", options: chartOptions },
//                         { title: "Loyalty Points", icon: <PieChart size={20} />, data: chartData.loyalty, type: "pie", options: pieChartOptions },
//                         { title: "Revenue Trend", icon: <TrendingUp size={20} />, data: trendData.revenue, type: "line", options: chartOptions },
//                         { title: "Purchase Trend", icon: <TrendingUp size={20} />, data: trendData.purchases, type: "line", options: chartOptions },
//                         { title: "Customer Trend", icon: <Users size={20} />, data: trendData.customers, type: "line", options: chartOptions },
//                       ].map((chart, index) => (
//                         <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }} style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
//                           <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937", marginBottom: "15px", display: "flex", alignItems: "center", gap: "10px" }}>{chart.icon} {chart.title}</h3>
//                           <div style={{ height: "300px" }}>
//                             <Chart type={chart.type} data={chart.data} options={chart.options} />
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>
//                   )}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         </div>
//       </div>

//       {/* Purchase History Modal */}
//       <AnimatePresence>
//         {showPurchaseModal && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.7)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000, backdropFilter: "blur(5px)" }} onClick={() => setShowPurchaseModal(false)}>
//             <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.3 }} style={{ background: "white", borderRadius: "16px", width: "90%", maxWidth: "1000px", maxHeight: "90vh", overflow: "hidden", boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)", display: "flex", flexDirection: "column" }} onClick={(e) => e.stopPropagation()}>
//               <div style={{ padding: "20px", background: "linear-gradient(135deg, #f9fafb, #e5e7eb)", borderBottom: "1px solid #d1d5db", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                 <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "700", color: "#1f2937" }}>Purchase History - {selectedCustomerDetails?.name || "N/A"}</h3>
//                 <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setShowPurchaseModal(false)} style={{ background: "none", border: "none", fontSize: "24px", cursor: "pointer", color: "#6b7280" }}>
//                   ×
//                 </motion.button>
//               </div>
//               <div style={{ padding: "20px", overflowY: "auto", flex: 1 }}>
//                 <div style={{ marginBottom: "20px", background: "#f9fafb", padding: "15px", borderRadius: "8px" }}>
//                   <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937", marginBottom: "15px" }}>Customer Summary</h4>
//                   <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "15px" }}>
//                     <div>
//                       <span style={{ fontSize: "13px", color: "#6b7280" }}>Name:</span>
//                       <div style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>{selectedCustomerDetails?.name || "N/A"}</div>
//                     </div>
//                     <div>
//                       <span style={{ fontSize: "13px", color: "#6b7280" }}>Total Spent:</span>
//                       <div style={{ fontSize: "14px", fontWeight: "500", color: "#6366f1" }}>{formatCurrency(purchaseStats?.totalSpent)}</div>
//                     </div>
//                     <div>
//                       <span style={{ fontSize: "13px", color: "#6b7280" }}>Avg Purchase:</span>
//                       <div style={{ fontSize: "14px", fontWeight: "500", color: "#f59e0b" }}>{formatCurrency(purchaseStats?.avgPurchase)}</div>
//                     </div>
//                     <div>
//                       <span style={{ fontSize: "13px", color: "#6b7280" }}>Frequency:</span>
//                       <div style={{ fontSize: "14px", fontWeight: "500", color: "#10b981" }}>{purchaseStats?.frequency ? `Every ${purchaseStats.frequency} days` : "N/A"}</div>
//                     </div>
//                   </div>
//                 </div>

//                 {purchaseStats?.purchaseTrendData && (
//                   <div style={{ marginBottom: "20px", background: "#f9fafb", padding: "15px", borderRadius: "8px" }}>
//                     <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937", marginBottom: "15px" }}>Purchase Trend</h4>
//                     <div style={{ height: "250px" }}>
//                       <Chart type="line" data={purchaseStats.purchaseTrendData} options={chartOptions} />
//                     </div>
//                   </div>
//                 )}

//                 <div>
//                   <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937", marginBottom: "15px" }}>Purchase History ({purchaseStats?.purchaseCount || 0})</h4>
//                   <div style={{ maxHeight: "300px", overflowY: "auto" }}>
//                     {purchaseHistory.map((purchase, index) => (
//                       <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }} whileHover={{ backgroundColor: "#f3f4f6" }} style={{ background: index % 2 === 0 ? "#f9fafb" : "white", padding: "15px", borderRadius: "8px", marginBottom: "10px", cursor: "pointer" }} onClick={() => setSelectedPurchase(purchase)}>
//                         <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
//                           <span style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>{formatDate(purchase.date)}</span>
//                           <span style={{ fontSize: "14px", fontWeight: "500", color: "#6366f1" }}>{formatCurrency(purchase.total_amount)}</span>
//                         </div>
//                         <div style={{ fontSize: "13px", color: "#6b7280" }}>{purchase.products ? purchase.products.map((p) => `${p.name} (x${p.quantity})`).join(", ") : "N/A"}</div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>

//                 {selectedPurchase && (
//                   <div style={{ marginTop: "20px", background: "#f9fafb", padding: "15px", borderRadius: "8px" }}>
//                     <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937", marginBottom: "15px" }}>Purchase Details</h4>
//                     <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", marginBottom: "15px" }}>
//                       <div>
//                         <span style={{ fontSize: "13px", color: "#6b7280" }}>Date:</span>
//                         <span style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>{formatDate(selectedPurchase.date)}</span>
//                       </div>
//                       <div> 
//                         <span style={{ fontSize: "13px", color: "#6b7280" }}>Order ID:</span>
//                         <span style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>{selectedPurchase.order_id || "N/A"}</span>
//                       </div>
//                     </div>
//                     <div>
//                       <h5 style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937", marginBottom: "10px" }}>Products</h5>
//                       {selectedPurchase.products && selectedPurchase.products.map((product, idx) => (
//                         <div key={idx} style={{ marginBottom: "10px", fontSize: "13px", color: "#374151" }}>
//                           <span style={{ fontWeight: "500" }}>{product.name || "N/A"}</span>
//                           <span style={{ color: "#6b7280" }}> (x{product.quantity || 0}) - {formatCurrency(product.price)}</span>
//                         </div>
//                       ))}
//                       <div style={{ fontSize: "14px", fontWeight: "600", color: "#6366f1", marginTop: "15px" }}>Total: {formatCurrency(selectedPurchase.total_amount)}</div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <div style={{ padding: "15px", borderTop: "1px solid #d1d5db", display: "flex", justifyContent: "flex-end" }}>
//                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ background: "linear-gradient(135deg, #10b981, #34d399)", color: "white", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
//                   <CSVLink data={purchaseHistoryCsvData} filename={`purchase-history-${selectedCustomerDetails?.phone || "unknown"}.csv`} style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
//                     <span>↓</span> Export
//                   </CSVLink>
//                 </motion.button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default CustomerSegmentation;
import React, { useState, useEffect } from "react";
import { Chart } from "react-chartjs-2";
import { CSVLink } from "react-csv";
import "chart.js/auto";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart2, PieChart, TrendingUp, Users, Filter, X } from "lucide-react";

const CustomerSegmentation = () => {
  const [customers, setCustomers] = useState([]);
  const [segment, setSegment] = useState("All");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loyaltyFilter, setLoyaltyFilter] = useState(0);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [spendingFilter, setSpendingFilter] = useState({ min: 0, max: Infinity });
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [chartData, setChartData] = useState(null);
  const [customerStats, setCustomerStats] = useState({});
  const [activeTab, setActiveTab] = useState("data");
  const [trendData, setTrendData] = useState(null);
  const [viewMode, setViewMode] = useState("table");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const [recencyFilter, setRecencyFilter] = useState(365);
  const [riskCategories, setRiskCategories] = useState({
    churnRisk: [],
    highValue: [],
    potentialLoyalists: [],
  });
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [selectedPurchase, setSelectedPurchase] = useState(null);
  const [selectedCustomerDetails, setSelectedCustomerDetails] = useState(null);
  const [purchaseStats, setPurchaseStats] = useState(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      setLoading(true);
      try {
        const storeId = localStorage.getItem("storeId");
        if (!storeId) throw new Error("Store ID not found in localStorage");

        const params = new URLSearchParams({
          storeId,
          segment: segment !== "All" ? segment : "",
          loyaltyPoints: loyaltyFilter.toString(),
          ...(dateRange.start && { startDate: dateRange.start }),
          ...(dateRange.end && { endDate: dateRange.end }),
        });

        const url = `http://localhost:5008/api/customers?${params}`;
        console.log("Fetching customers from:", url);

        const response = await fetch(url);
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to fetch customers: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        console.log("Received data:", data);

        if (!data.customers || !Array.isArray(data.customers)) {
          throw new Error("Invalid response format: 'customers' key missing or not an array");
        }

        const enrichedCustomers = await Promise.all(
          data.customers.map(async (customer) => {
            if (!customer.phone || !/^\d+$/.test(customer.phone)) { // Check for valid phone number
              console.warn("Invalid or missing phone for customer:", customer);
              return { ...customer, purchaseHistory: [], total_spent: 0, purchaseCount: 0, daysSinceLastPurchase: null, avgOrderValue: 0, segment: customer.segment || "New-Customer" };
            }
            const history = await fetchPurchaseHistory(customer.phone, true);
            const totalSpent = history.reduce((sum, p) => sum + (p.total_amount || 0), 0);
            const purchaseCount = history.length;
            const lastPurchaseDate = history.length > 0
              ? new Date(history.sort((a, b) => new Date(b.date) - new Date(a.date))[0].date)
              : null;
            const daysSinceLastPurchase = lastPurchaseDate
              ? Math.floor((new Date() - lastPurchaseDate) / (1000 * 60 * 60 * 24))
              : null;
            const avgOrderValue = purchaseCount > 0 ? totalSpent / purchaseCount : 0;

            return {
              ...customer,
              purchaseHistory: history,
              total_spent: totalSpent,
              purchaseCount,
              daysSinceLastPurchase,
              avgOrderValue,
              segment: customer.segment || "New-Customer", // Default segment if missing
            };
          })
        );

        setCustomers(enrichedCustomers);
        calculateCustomerStats(enrichedCustomers);
        updateChartData(enrichedCustomers);
        generateTrendData(enrichedCustomers);
        identifyCustomerCategories(enrichedCustomers);
        setError(null);
      } catch (err) {
        console.error("Error in fetchCustomers:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCustomers();
  }, [segment, loyaltyFilter, dateRange]);

  const fetchPurchaseHistory = async (customerPhone, silent = false) => {
    try {
      const storeId = localStorage.getItem("storeId");
      if (!storeId) throw new Error("Store ID not found in localStorage");

      const response = await fetch(
        `http://localhost:5008/api/customers/${customerPhone}/purchase-history?storeId=${storeId}`
      );
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch purchase history: ${response.status} - ${errorText}`);
      }
      const data = await response.json();
      console.log(`Purchase history for ${customerPhone}:`, data);

      if (!data.purchase_history || !Array.isArray(data.purchase_history)) {
        throw new Error("Invalid purchase history response format");
      }

      if (!silent) {
        setPurchaseHistory(data.purchase_history);
        setSelectedCustomer(customerPhone);
        const customer = customers.find((c) => c.phone === customerPhone);
        if (customer) {
          setSelectedCustomerDetails(customer);
          setPurchaseStats(calculatePurchaseStats(data.purchase_history));
        }
        setShowPurchaseModal(true);
      }
      return data.purchase_history;
    } catch (err) {
      console.error("Error in fetchPurchaseHistory:", err);
      if (!silent) setError(err.message);
      return [];
    }
  };

  const calculateCustomerStats = (customerData) => {
    const stats = customerData.reduce(
      (acc, customer) => ({
        totalCustomers: acc.totalCustomers + 1,
        totalPurchases: acc.totalPurchases + customer.purchaseCount,
        totalSpending: acc.totalSpending + customer.total_spent,
        avgPurchaseValue: (acc.avgPurchaseValue * acc.totalCustomers + (customer.avgOrderValue || 0)) / (acc.totalCustomers + 1),
        activeCustomers: acc.activeCustomers + (customer.daysSinceLastPurchase !== null && customer.daysSinceLastPurchase < 90 ? 1 : 0),
        inactiveCustomers: acc.inactiveCustomers + (customer.daysSinceLastPurchase !== null && customer.daysSinceLastPurchase >= 90 ? 1 : 0),
        highValueCustomers: acc.highValueCustomers + (customer.total_spent > 1000 ? 1 : 0),
        loyaltyPointsAvg: acc.loyaltyPointsAvg + (customer.loyaltyPoints || 0),
      }),
      {
        totalCustomers: 0,
        totalPurchases: 0,
        totalSpending: 0,
        avgPurchaseValue: 0,
        activeCustomers: 0,
        inactiveCustomers: 0,
        highValueCustomers: 0,
        loyaltyPointsAvg: 0,
      }
    );
    stats.loyaltyPointsAvg = stats.totalCustomers > 0 ? Math.round(stats.loyaltyPointsAvg / stats.totalCustomers) : 0;
    setCustomerStats(stats);
  };

  const calculatePurchaseStats = (history) => {
    const totalSpent = history.reduce((sum, p) => sum + (p.total_amount || 0), 0);
    const avgPurchase = history.length > 0 ? totalSpent / history.length : 0;
    const purchaseDates = history.map((p) => new Date(p.date));
    const frequency =
      history.length > 1
        ? (Math.max(...purchaseDates) - Math.min(...purchaseDates)) / (1000 * 60 * 60 * 24) / (history.length - 1)
        : 0;

    const purchasesByMonth = history.reduce((acc, purchase) => {
      const date = new Date(purchase.date);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
      acc[monthKey] = (acc[monthKey] || 0) + purchase.total_amount;
      return acc;
    }, {});

    const purchaseTrendData = {
      labels: Object.keys(purchasesByMonth)
        .sort()
        .map((month) => {
          const [year, monthNum] = month.split("-");
          return `${monthNum}/${year.slice(2)}`;
        }),
      datasets: [
        {
          label: "Purchase Amount",
          data: Object.keys(purchasesByMonth)
            .sort()
            .map((month) => purchasesByMonth[month]),
          borderColor: "#6366f1",
          backgroundColor: "rgba(99, 102, 241, 0.2)",
          fill: true,
          tension: 0.4,
        },
      ],
    };

    return { totalSpent, avgPurchase, purchaseCount: history.length, frequency: Math.round(frequency), purchaseTrendData };
  };

  const generateTrendData = (customerData) => {
    const purchasesByMonth = {};
    customerData.forEach((customer) => {
      customer.purchaseHistory.forEach((purchase) => {
        const date = new Date(purchase.date);
        const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
        if (!purchasesByMonth[monthKey]) {
          purchasesByMonth[monthKey] = { totalAmount: 0, purchaseCount: 0, customerCount: new Set() };
        }
        purchasesByMonth[monthKey].totalAmount += purchase.total_amount || 0;
        purchasesByMonth[monthKey].purchaseCount += 1;
        purchasesByMonth[monthKey].customerCount.add(customer.phone);
      });
    });

    const sortedMonths = Object.keys(purchasesByMonth).sort();
    const trendData = {
      revenue: {
        labels: sortedMonths.map((month) => `${month.split("-")[1]}/${month.split("-")[0].slice(2)}`),
        datasets: [
          {
            label: "Monthly Revenue",
            data: sortedMonths.map((month) => purchasesByMonth[month].totalAmount),
            borderColor: "#6366f1",
            backgroundColor: "rgba(99, 102, 241, 0.2)",
            fill: true,
            tension: 0.4,
          },
        ],
      },
      purchases: {
        labels: sortedMonths.map((month) => `${month.split("-")[1]}/${month.split("-")[0].slice(2)}`),
        datasets: [
          {
            label: "Purchase Count",
            data: sortedMonths.map((month) => purchasesByMonth[month].purchaseCount),
            borderColor: "#10b981",
            backgroundColor: "rgba(16, 185, 129, 0.2)",
            fill: true,
            tension: 0.4,
          },
        ],
      },
      customers: {
        labels: sortedMonths.map((month) => `${month.split("-")[1]}/${month.split("-")[0].slice(2)}`),
        datasets: [
          {
            label: "Active Customers",
            data: sortedMonths.map((month) => purchasesByMonth[month].customerCount.size),
            borderColor: "#f59e0b",
            backgroundColor: "rgba(245, 158, 11, 0.2)",
            fill: true,
            tension: 0.4,
          },
        ],
      },
    };
    setTrendData(trendData);
  };

  const identifyCustomerCategories = (customerData) => {
    const categories = { churnRisk: [], highValue: [], potentialLoyalists: [] };
    customerData.forEach((customer) => {
      if (customer.purchaseCount > 3 && customer.daysSinceLastPurchase > 120) categories.churnRisk.push(customer);
      if (customer.total_spent > 1000 && customer.purchaseCount > 5) categories.highValue.push(customer);
      if (customer.purchaseCount >= 2 && customer.purchaseCount < 5 && customer.daysSinceLastPurchase < 60 && customer.total_spent > 200)
        categories.potentialLoyalists.push(customer);
    });
    setRiskCategories(categories);
  };

  const updateChartData = (customerData) => {
    const segmentCounts = customerData.reduce((acc, customer) => {
      acc[customer.segment || "Unknown"] = (acc[customer.segment || "Unknown"] || 0) + 1;
      return acc;
    }, {});

    const spendingBySegment = customerData.reduce((acc, customer) => {
      acc[customer.segment || "Unknown"] = (acc[customer.segment || "Unknown"] || 0) + customer.total_spent;
      return acc;
    }, {});

    setChartData({
      segments: {
        labels: Object.keys(segmentCounts),
        datasets: [
          {
            label: "Customer Segments",
            data: Object.values(segmentCounts),
            backgroundColor: Object.keys(segmentCounts).map((seg) => getSegmentColor(seg)),
            borderWidth: 1,
            borderColor: "#ffffff",
          },
        ],
      },
      spending: {
        labels: Object.keys(spendingBySegment),
        datasets: [
          {
            label: "Spending by Segment",
            data: Object.values(spendingBySegment),
            backgroundColor: Object.keys(spendingBySegment).map((seg) => getSegmentColor(seg, 0.7)),
            borderWidth: 1,
            borderColor: "#ffffff",
          },
        ],
      },
      loyalty: {
        labels: ["0-50", "51-100", "101-200", "201-500", "501+"],
        datasets: [
          {
            label: "Loyalty Points Distribution",
            data: [
              customerData.filter((c) => (c.loyaltyPoints || 0) >= 0 && (c.loyaltyPoints || 0) <= 50).length,
              customerData.filter((c) => (c.loyaltyPoints || 0) > 50 && (c.loyaltyPoints || 0) <= 100).length,
              customerData.filter((c) => (c.loyaltyPoints || 0) > 100 && (c.loyaltyPoints || 0) <= 200).length,
              customerData.filter((c) => (c.loyaltyPoints || 0) > 200 && (c.loyaltyPoints || 0) <= 500).length,
              customerData.filter((c) => (c.loyaltyPoints || 0) > 500).length,
            ],
            backgroundColor: ["#10b981", "#6366f1", "#f59e0b", "#ec4899", "#8b5cf6"],
            borderWidth: 1,
            borderColor: "#ffffff",
          },
        ],
      },
    });
  };

  const getSegmentColor = (segment, opacity = 1) => {
    const colors = {
      "High-Spender": `rgba(16, 185, 129, ${opacity})`,
      "Medium-Spender": `rgba(99, 102, 241, ${opacity})`,
      "Low-Spender": `rgba(245, 158, 11, ${opacity})`,
      "Occasional": `rgba(236, 72, 153, ${opacity})`,
      "Loyal": `rgba(139, 92, 246, ${opacity})`,
      "New-Customer": `rgba(244, 63, 94, ${opacity})`,
      Unknown: `rgba(107, 114, 128, ${opacity})`,
    };
    return colors[segment] || `rgba(107, 114, 128, ${opacity})`;
  };

  const formatCurrency = (amount) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(amount || 0);

  const sortCustomers = (key) => {
    const direction = sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    setSortConfig({ key, direction });
    const sorted = [...customers].sort((a, b) => {
      if (["total_spent", "loyaltyPoints", "purchaseCount", "daysSinceLastPurchase", "avgOrderValue"].includes(key)) {
        return direction === "asc" ? (a[key] || 0) - (b[key] || 0) : (b[key] || 0) - (a[key] || 0);
      }
      if (a[key] === null || a[key] === undefined) return direction === "asc" ? 1 : -1;
      if (b[key] === null || b[key] === undefined) return direction === "asc" ? -1 : 1;
      return direction === "asc" ? String(a[key]).localeCompare(String(b[key])) : String(b[key]).localeCompare(String(a[key]));
    });
    setCustomers(sorted);
  };

  const filteredCustomers = customers.filter((customer) => {
    const matchesSegment = segment === "All" || customer.segment === segment;
    const matchesLoyalty = (customer.loyaltyPoints || 0) >= Number(loyaltyFilter);
    const matchesSpending = (customer.total_spent || 0) >= spendingFilter.min && (customer.total_spent || 0) <= (spendingFilter.max === Infinity ? Number.MAX_VALUE : spendingFilter.max);
    const matchesRecency = !recencyFilter || (customer.daysSinceLastPurchase !== null ? customer.daysSinceLastPurchase <= recencyFilter : true); // Include customers with no purchases
    const matchesSearch =
      !searchTerm ||
      (customer.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (customer.email || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (customer.phone || "").includes(searchTerm);
    const matchesDateRange =
      (!dateRange.start || (customer.purchaseHistory.length > 0 && new Date(customer.purchaseHistory[0].date) >= new Date(dateRange.start))) &&
      (!dateRange.end || (customer.purchaseHistory.length > 0 && new Date(customer.purchaseHistory[0].date) <= new Date(dateRange.end))) ||
      customer.purchaseHistory.length === 0; // Include customers with no purchase history

    return matchesSegment && matchesLoyalty && matchesSpending && matchesRecency && matchesSearch && matchesDateRange;
  });

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return dateString ? new Date(dateString).toLocaleDateString(undefined, options) : "N/A";
  };

  const csvData = filteredCustomers.map((customer) => ({
    Name: customer.name || "N/A",
    Email: customer.email || "N/A",
    Phone: customer.phone || "N/A",
    "Total Spent": formatCurrency(customer.total_spent).replace("₹", ""),
    Segment: customer.segment || "N/A",
    "Loyalty Points": customer.loyaltyPoints || 0,
    "Purchase Count": customer.purchaseCount || 0,
    "Last Purchase (Days)": customer.daysSinceLastPurchase !== null ? customer.daysSinceLastPurchase : "N/A",
    "Avg Order Value": formatCurrency(customer.avgOrderValue).replace("₹", ""),
  }));

  const purchaseHistoryCsvData = purchaseHistory.map((purchase) => ({
    Date: formatDate(purchase.date),
    "Order ID": purchase.order_id || "N/A",
    "Total Amount": formatCurrency(purchase.total_amount).replace("₹", ""),
    Products: purchase.products ? purchase.products.map((p) => `${p.name} (x${p.quantity})`).join("; ") : "N/A",
  }));

  const getCustomerRiskLevel = (customer) => {
    if (customer.daysSinceLastPurchase === null) return { level: "new", label: "New", color: "#10b981" };
    if (customer.daysSinceLastPurchase > 180) return { level: "high", label: "High Risk", color: "#ef4444" };
    if (customer.daysSinceLastPurchase > 90) return { level: "medium", label: "Medium Risk", color: "#f59e0b" };
    return { level: "low", label: "Low Risk", color: "#6366f1" };
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top", labels: { color: "#374151", font: { size: 14, family: "'Inter', sans-serif" } } },
      tooltip: { backgroundColor: "#1f2937", titleFont: { size: 14 }, bodyFont: { size: 12 } },
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: "#6b7280" } },
      y: { beginAtZero: true, grid: { color: "rgba(0, 0, 0, 0.05)" }, ticks: { color: "#6b7280" } },
    },
  };

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top", labels: { color: "#374151", font: { size: 14, family: "'Inter', sans-serif" } } },
      tooltip: { backgroundColor: "#1f2937", titleFont: { size: 14 }, bodyFont: { size: 12 } },
    },
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f9fafb 0%, #e5e7eb 100%)", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: "#1f2937" }}>
      <div style={{ display: "flex", maxWidth: "1600px", margin: "0 auto", padding: "20px", gap: "20px" }}>
        {/* Sidebar */}
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: showSidebar ? 0 : -300 }}
          transition={{ duration: 0.3 }}
          style={{ width: "300px", background: "white", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", padding: "20px", position: "fixed", top: "20px", bottom: "20px", left: "20px", zIndex: 100, overflowY: "auto" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937" }}>Filters</h3>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setShowSidebar(false)} style={{ background: "none", border: "none", color: "#6b7280", cursor: "pointer" }}>
              <X size={20} />
            </motion.button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "8px", display: "block" }}>Segment</label>
              <select value={segment} onChange={(e) => setSegment(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px" }}>
                <option value="All">All Customers</option>
                <option value="High-Spender">High Spender</option>
                <option value="Medium-Spender">Medium Spender</option>
                <option value="Low-Spender">Low Spender</option>
                <option value="Occasional">Occasional</option>
                <option value="Loyal">Loyal</option>
                <option value="New-Customer">New Customer</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "8px", display: "block" }}>Min Loyalty Points</label>
              <input type="number" value={loyaltyFilter} onChange={(e) => setLoyaltyFilter(Number(e.target.value))} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px" }} />
            </div>
            <div>
              <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "8px", display: "block" }}>Recency (Days)</label>
              <input type="range" min="30" max="730" step="30" value={recencyFilter} onChange={(e) => setRecencyFilter(Number(e.target.value))} style={{ width: "100%" }} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#6b7280" }}>
                <span>30</span>
                <span>{recencyFilter}</span>
                <span>730</span>
              </div>
            </div>
            <div>
              <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "8px", display: "block" }}>Date Range</label>
              <input type="date" value={dateRange.start} onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px", marginBottom: "10px" }} />
              <input type="date" value={dateRange.end} onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px" }} />
            </div>
            <div>
              <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "8px", display: "block" }}>Spending Range</label>
              <div style={{ display: "flex", gap: "10px" }}>
                <input type="number" placeholder="Min" value={spendingFilter.min} onChange={(e) => setSpendingFilter({ ...spendingFilter, min: Number(e.target.value) })} style={{ flex: "1", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px" }} />
                <input type="number" placeholder="Max" value={spendingFilter.max === Infinity ? "" : spendingFilter.max} onChange={(e) => setSpendingFilter({ ...spendingFilter, max: Number(e.target.value) || Infinity })} style={{ flex: "1", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px" }} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div style={{ flex: 1, marginLeft: showSidebar ? "320px" : "0", transition: "margin-left 0.3s" }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} style={{ background: "white", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", padding: "20px", minHeight: "calc(100vh - 40px)" }}>
            {/* Header */}
            <div style={{ position: "sticky", top: 0, background: "white", zIndex: 10, paddingBottom: "20px", borderBottom: "1px solid #e5e7eb" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#1f2937" }}>Customer Analytics Dashboard</h2>
                <div style={{ display: "flex", gap: "15px" }}>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setShowSidebar(true)} style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
                    <Filter size={18} /> Filters
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ background: "linear-gradient(135deg, #10b981, #34d399)", color: "white", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer" }}>
                    <CSVLink data={csvData} filename={"customer-data.csv"} style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span>↓</span> Export CSV
                    </CSVLink>
                  </motion.button>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <input type="text" placeholder="Search customers..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ flex: 1, padding: "12px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px", boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05)" }} />
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveTab("data")} style={{ background: activeTab === "data" ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "#f3f4f6", color: activeTab === "data" ? "white" : "#6b7280", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "500" }}>
                  Data
                </motion.button>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveTab("visualizations")} style={{ background: activeTab === "visualizations" ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "#f3f4f6", color: activeTab === "visualizations" ? "white" : "#6b7280", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "500" }}>
                  Visualizations
                </motion.button>
              </div>
            </div>

            {/* Summary Cards */}
            {customerStats.totalCustomers > 0 && (
              <motion.div initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", margin: "20px 0" }}>
                {[
                  { title: "Total Customers", value: customerStats.totalCustomers, gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)", icon: <Users size={20} /> },
                  { title: "Total Revenue", value: formatCurrency(customerStats.totalSpending), gradient: "linear-gradient(135deg, #10b981, #34d399)", icon: <TrendingUp size={20} /> },
                  { title: "Avg Order Value", value: formatCurrency(customerStats.avgPurchaseValue), gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)", icon: <BarChart2 size={20} /> },
                  { title: "Active Customers", value: customerStats.activeCustomers, gradient: "linear-gradient(135deg, #ec4899, #f472b6)", icon: <Users size={20} /> },
                ].map((stat, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }} style={{ background: stat.gradient, padding: "20px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", color: "white", textAlign: "center" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                      {stat.icon}
                      <div style={{ fontSize: "14px", fontWeight: "500" }}>{stat.title}</div>
                    </div>
                    <div style={{ fontSize: "24px", fontWeight: "700" }}>{stat.value}</div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ textAlign: "center", padding: "40px", color: "#6b7280" }}>
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} style={{ fontSize: "24px" }}>
                    ⏳
                  </motion.div>
                  <div style={{ marginTop: "10px" }}>Loading data...</div>
                </motion.div>
              ) : error ? (
                <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ textAlign: "center", padding: "40px", color: "#ef4444", background: "#fee2e2", borderRadius: "8px" }}>
                  Error: {error}
                </motion.div>
              ) : activeTab === "data" ? (
                <motion.div key="data" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>
                  <div style={{ display: "flex", gap: "10px", margin: "20px 0" }}>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setViewMode("table")} style={{ background: viewMode === "table" ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "#f3f4f6", color: viewMode === "table" ? "white" : "#6b7280", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "500" }}>
                      Table View
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setViewMode("card")} style={{ background: viewMode === "card" ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "#f3f4f6", color: viewMode === "card" ? "white" : "#6b7280", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "500" }}>
                      Card View
                    </motion.button>
                  </div>

                  {filteredCustomers.length === 0 ? (
                    <div style={{ textAlign: "center", padding: "40px", color: "#6b7280" }}>No customers found.</div>
                  ) : viewMode === "table" ? (
                    <div style={{ overflowX: "auto", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", position: "relative" }}>
                      <div style={{ position: "sticky", top: "0", zIndex: 5, background: "white" }}>
                        <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0" }}>
                          <thead>
                            <tr style={{ background: "linear-gradient(135deg, #f3f4f6, #e5e7eb)" }}>
                              {["Name", "Email", "Phone", "Total Spent", "Segment", "Loyalty Points", "Last Purchase", "Risk Level", "Actions"].map((header) => (
                                <th key={header} onClick={() => header !== "Actions" && sortCustomers(header.toLowerCase().replace(" ", "_"))} style={{ padding: "15px", fontWeight: "600", textAlign: "left", color: "#374151", cursor: header !== "Actions" ? "pointer" : "default", position: "sticky", top: 0, background: "inherit" }}>
                                  {header}
                                  {sortConfig.key === header.toLowerCase().replace(" ", "_") && <span style={{ marginLeft: "5px" }}>{sortConfig.direction === "asc" ? "▲" : "▼"}</span>}
                                </th>
                              ))}
                            </tr>
                          </thead>
                        </table>
                      </div>
                      <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0" }}>
                        <tbody>
                          {filteredCustomers.map((customer, index) => {
                            const riskLevel = getCustomerRiskLevel(customer);
                            return (
                              <motion.tr key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: index * 0.05 }} whileHover={{ backgroundColor: "#f9fafb" }}>
                                <td style={{ padding: "15px", color: "#374151" }}>{customer.name || "N/A"}</td>
                                <td style={{ padding: "15px", color: "#374151" }}>{customer.email || "N/A"}</td>
                                <td style={{ padding: "15px", color: "#374151" }}>{customer.phone || "N/A"}</td>
                                <td style={{ padding: "15px", color: "#6366f1", textAlign: "right" }}>{formatCurrency(customer.total_spent)}</td>
                                <td style={{ padding: "15px" }}>
                                  <span style={{ background: getSegmentColor(customer.segment, 0.2), color: getSegmentColor(customer.segment), padding: "4px 8px", borderRadius: "4px", fontSize: "12px" }}>{customer.segment || "N/A"}</span>
                                </td>
                                <td style={{ padding: "15px", color: "#374151" }}>{customer.loyaltyPoints || 0}</td>
                                <td style={{ padding: "15px", color: "#374151" }}>{customer.daysSinceLastPurchase !== null ? `${customer.daysSinceLastPurchase} days` : "N/A"}</td>
                                <td style={{ padding: "15px" }}>
                                  <span style={{ background: `${riskLevel.color}20`, color: riskLevel.color, padding: "4px 8px", borderRadius: "4px", fontSize: "12px" }}>{riskLevel.label}</span>
                                </td>
                                <td style={{ padding: "15px" }}>
                                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => fetchPurchaseHistory(customer.phone)} style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white", padding: "8px 12px", borderRadius: "6px", border: "none", cursor: "pointer" }}>
                                    View
                                  </motion.button>
                                </td>
                              </motion.tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
                      {filteredCustomers.map((customer, index) => {
                        const riskLevel = getCustomerRiskLevel(customer);
                        return (
                          <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }} whileHover={{ scale: 1.03, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }} style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: getSegmentColor(customer.segment, 0.2), color: getSegmentColor(customer.segment), display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", marginRight: "12px" }}>{(customer.name || "N/A").charAt(0)}</div>
                              <div>
                                <div style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937" }}>{customer.name || "N/A"}</div>
                                <div style={{ fontSize: "13px", color: "#6b7280" }}>{customer.email || "N/A"}</div>
                              </div>
                            </div>
                            <div style={{ fontSize: "14px", color: "#374151", marginBottom: "15px" }}>
                              <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <span>Total Spent:</span>
                                <span style={{ color: "#6366f1" }}>{formatCurrency(customer.total_spent)}</span>
                              </div>
                              <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <span>Loyalty Points:</span>
                                <span>{customer.loyaltyPoints || 0}</span>
                              </div>
                              <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <span>Last Purchase:</span>
                                <span>{customer.daysSinceLastPurchase !== null ? `${customer.daysSinceLastPurchase} days` : "N/A"}</span>
                              </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <span style={{ background: `${riskLevel.color}20`, color: riskLevel.color, padding: "4px 8px", borderRadius: "4px", fontSize: "12px" }}>{riskLevel.label}</span>
                              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => fetchPurchaseHistory(customer.phone)} style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white", padding: "8px 12px", borderRadius: "6px", border: "none", cursor: "pointer" }}>
                                View
                              </motion.button>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div key="visualizations" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>
                  {chartData && trendData && (
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "25px", marginTop: "20px" }}>
                      {[
                        { title: "Customer Segments", icon: <PieChart size={20} />, data: chartData.segments, type: "pie", options: pieChartOptions },
                        { title: "Spending by Segment", icon: <BarChart2 size={20} />, data: chartData.spending, type: "bar", options: chartOptions },
                        { title: "Loyalty Points", icon: <PieChart size={20} />, data: chartData.loyalty, type: "pie", options: pieChartOptions },
                        { title: "Revenue Trend", icon: <TrendingUp size={20} />, data: trendData.revenue, type: "line", options: chartOptions },
                        { title: "Purchase Trend", icon: <TrendingUp size={20} />, data: trendData.purchases, type: "line", options: chartOptions },
                        { title: "Customer Trend", icon: <Users size={20} />, data: trendData.customers, type: "line", options: chartOptions },
                      ].map((chart, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }} style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
                          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937", marginBottom: "15px", display: "flex", alignItems: "center", gap: "10px" }}>{chart.icon} {chart.title}</h3>
                          <div style={{ height: "300px" }}>
                            <Chart type={chart.type} data={chart.data} options={chart.options} />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Purchase History Modal */}
      <AnimatePresence>
        {showPurchaseModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.7)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000, backdropFilter: "blur(5px)" }} onClick={() => setShowPurchaseModal(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.3 }} style={{ background: "white", borderRadius: "16px", width: "90%", maxWidth: "1000px", maxHeight: "90vh", overflow: "hidden", boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)", display: "flex", flexDirection: "column" }} onClick={(e) => e.stopPropagation()}>
              <div style={{ padding: "20px", background: "linear-gradient(135deg, #f9fafb, #e5e7eb)", borderBottom: "1px solid #d1d5db", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "700", color: "#1f2937" }}>Purchase History - {selectedCustomerDetails?.name || "N/A"}</h3>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setShowPurchaseModal(false)} style={{ background: "none", border: "none", fontSize: "24px", cursor: "pointer", color: "#6b7280" }}>
                  ×
                </motion.button>
              </div>
              <div style={{ padding: "20px", overflowY: "auto", flex: 1 }}>
                <div style={{ marginBottom: "20px", background: "#f9fafb", padding: "15px", borderRadius: "8px" }}>
                  <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937", marginBottom: "15px" }}>Customer Summary</h4>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "15px" }}>
                    <div>
                      <span style={{ fontSize: "13px", color: "#6b7280" }}>Name:</span>
                      <div style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>{selectedCustomerDetails?.name || "N/A"}</div>
                    </div>
                    <div>
                      <span style={{ fontSize: "13px", color: "#6b7280" }}>Total Spent:</span>
                      <div style={{ fontSize: "14px", fontWeight: "500", color: "#6366f1" }}>{formatCurrency(purchaseStats?.totalSpent)}</div>
                    </div>
                    <div>
                      <span style={{ fontSize: "13px", color: "#6b7280" }}>Avg Purchase:</span>
                      <div style={{ fontSize: "14px", fontWeight: "500", color: "#f59e0b" }}>{formatCurrency(purchaseStats?.avgPurchase)}</div>
                    </div>
                    <div>
                      <span style={{ fontSize: "13px", color: "#6b7280" }}>Frequency:</span>
                      <div style={{ fontSize: "14px", fontWeight: "500", color: "#10b981" }}>{purchaseStats?.frequency ? `Every ${purchaseStats.frequency} days` : "N/A"}</div>
                    </div>
                  </div>
                </div>

                {purchaseStats?.purchaseTrendData && (
                  <div style={{ marginBottom: "20px", background: "#f9fafb", padding: "15px", borderRadius: "8px" }}>
                    <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937", marginBottom: "15px" }}>Purchase Trend</h4>
                    <div style={{ height: "250px" }}>
                      <Chart type="line" data={purchaseStats.purchaseTrendData} options={chartOptions} />
                    </div>
                  </div>
                )}

                <div>
                  <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937", marginBottom: "15px" }}>Purchase History ({purchaseStats?.purchaseCount || 0})</h4>
                  <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                    {purchaseHistory.map((purchase, index) => (
                      <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }} whileHover={{ backgroundColor: "#f3f4f6" }} style={{ background: index % 2 === 0 ? "#f9fafb" : "white", padding: "15px", borderRadius: "8px", marginBottom: "10px", cursor: "pointer" }} onClick={() => setSelectedPurchase(purchase)}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                          <span style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>{formatDate(purchase.date)}</span>
                          <span style={{ fontSize: "14px", fontWeight: "500", color: "#6366f1" }}>{formatCurrency(purchase.total_amount)}</span>
                        </div>
                        <div style={{ fontSize: "13px", color: "#6b7280" }}>{purchase.products ? purchase.products.map((p) => `${p.name} (x${p.quantity})`).join(", ") : "N/A"}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {selectedPurchase && (
                  <div style={{ marginTop: "20px", background: "#f9fafb", padding: "15px", borderRadius: "8px" }}>
                    <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937", marginBottom: "15px" }}>Purchase Details</h4>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", marginBottom: "15px" }}>
                      <div>
                        <span style={{ fontSize: "13px", color: "#6b7280" }}>Date:</span>
                        <span style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>{formatDate(selectedPurchase.date)}</span>
                      </div>
                      <div>
                        <span style={{ fontSize: "13px", color: "#6b7280" }}>Order ID:</span>
                        <span style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>{selectedPurchase.order_id || "N/A"}</span>
                      </div>
                    </div>
                    <div>
                      <h5 style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937", marginBottom: "10px" }}>Products</h5>
                      {selectedPurchase.products && selectedPurchase.products.map((product, idx) => (
                        <div key={idx} style={{ marginBottom: "10px", fontSize: "13px", color: "#374151" }}>
                          <span style={{ fontWeight: "500" }}>{product.name || "N/A"}</span>
                          <span style={{ color: "#6b7280" }}> (x{product.quantity || 0}) - {formatCurrency(product.price)}</span>
                        </div>
                      ))}
                      <div style={{ fontSize: "14px", fontWeight: "600", color: "#6366f1", marginTop: "15px" }}>Total: {formatCurrency(selectedPurchase.total_amount)}</div>
                    </div>
                  </div>
                )}
              </div>
              <div style={{ padding: "15px", borderTop: "1px solid #d1d5db", display: "flex", justifyContent: "flex-end" }}>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ background: "linear-gradient(135deg, #10b981, #34d399)", color: "white", padding: "10px 15px", borderRadius: "8px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
                  <CSVLink data={purchaseHistoryCsvData} filename={`purchase-history-${selectedCustomerDetails?.phone || "unknown"}.csv`} style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>↓</span> Export
                  </CSVLink>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomerSegmentation;