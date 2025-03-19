// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { Line, Bar, Pie } from 'recharts';
// // // // // import { Calendar, Clock, DollarSign, TrendingUp, Package, CreditCard, AlertTriangle, Download } from 'lucide-react';

// // // // // const SalesPerformanceDashboard = () => {
// // // // //   const [timeframe, setTimeframe] = useState('day');
// // // // //   const [salesData, setSalesData] = useState(null);
// // // // //   const [hourlyData, setHourlyData] = useState(null);
// // // // //   const [bestSellingProduct, setBestSellingProduct] = useState(null);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState(null);
// // // // //   const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
// // // // //   const [comparisonData, setComparisonData] = useState(null);
  
// // // // //   const storeId = localStorage.getItem("storeId") || "demo-store";
  
// // // // //   // Format numbers for currency display
// // // // //   const formatCurrency = (amount) => {
// // // // //     return new Intl.NumberFormat('en-US', {
// // // // //       style: 'currency',
// // // // //       currency: 'USD'
// // // // //     }).format(amount);
// // // // //   };
  
// // // // //   // Fetch sales data based on timeframe
// // // // //   useEffect(() => {
// // // // //     const fetchSalesData = async () => {
// // // // //       try {
// // // // //         setLoading(true);
        
// // // // //         // Fetch daily sales data
// // // // //         const salesResponse = await fetch(`http://localhost:5010/api/daily-sale?timeframe=${timeframe}`, {
// // // // //           headers: {
// // // // //             'storeId': storeId
// // // // //           }
// // // // //         });
        
// // // // //         if (!salesResponse.ok) {
// // // // //           throw new Error('Failed to fetch sales data');
// // // // //         }
        
// // // // //         const salesResult = await salesResponse.json();
// // // // //         setSalesData(salesResult);
        
// // // // //         // Fetch hourly sales data
// // // // //         const hourlyResponse = await fetch('http://localhost:5010/api/hourly-sales', {
// // // // //           headers: {
// // // // //             'storeId': storeId
// // // // //           }
// // // // //         });
        
// // // // //         if (hourlyResponse.ok) {
// // // // //           const hourlyResult = await hourlyResponse.json();
// // // // //           setHourlyData(hourlyResult.hourly_sales);
// // // // //         }
        
// // // // //         // Fetch best selling product
// // // // //         const bestSellingResponse = await fetch(`http://localhost:5010/api/best-selling-product?storeId=${storeId}`);
        
// // // // //         if (bestSellingResponse.ok) {
// // // // //           const bestSellingResult = await bestSellingResponse.json();
// // // // //           setBestSellingProduct(bestSellingResult);
// // // // //         }
        
// // // // //         setLoading(false);
// // // // //       } catch (err) {
// // // // //         setError(err.message);
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };
    
// // // // //     fetchSalesData();
// // // // //   }, [timeframe, storeId]);
  
// // // // //   // Process sales data for charts
// // // // //   const processChartData = () => {
// // // // //     if (!salesData) return [];
    
// // // // //     return Object.entries(salesData).map(([date, data]) => ({
// // // // //       date,
// // // // //       sales: data.total_amount,
// // // // //       transactions: data.sales.length
// // // // //     }));
// // // // //   };
  
// // // // //   // Calculate summary data
// // // // //   const calculateSummary = () => {
// // // // //     if (!salesData) return { totalRevenue: 0, totalTransactions: 0, averageSale: 0 };
    
// // // // //     let totalRevenue = 0;
// // // // //     let totalTransactions = 0;
    
// // // // //     Object.values(salesData).forEach(dateData => {
// // // // //       totalRevenue += dateData.total_amount;
// // // // //       totalTransactions += dateData.sales.length;
// // // // //     });
    
// // // // //     const averageSale = totalTransactions > 0 ? totalRevenue / totalTransactions : 0;
    
// // // // //     return {
// // // // //       totalRevenue,
// // // // //       totalTransactions,
// // // // //       averageSale
// // // // //     };
// // // // //   };
  
// // // // //   // Process payment mode data
// // // // //   const processPaymentData = () => {
// // // // //     if (!salesData) return [];
    
// // // // //     const paymentModes = {};
    
// // // // //     Object.values(salesData).forEach(dateData => {
// // // // //       dateData.sales.forEach(sale => {
// // // // //         // Assuming each sale has a paymentMethod property
// // // // //         const method = sale.paymentMethod || 'Unknown';
// // // // //         paymentModes[method] = (paymentModes[method] || 0) + sale.total_amount;
// // // // //       });
// // // // //     });
    
// // // // //     return Object.entries(paymentModes).map(([name, value]) => ({
// // // // //       name,
// // // // //       value
// // // // //     }));
// // // // //   };
  
// // // // //   // Export data to Excel/CSV
// // // // //   const exportData = () => {
// // // // //     if (!salesData) return;
    
// // // // //     // Convert data to CSV format
// // // // //     let csvContent = "data:text/csv;charset=utf-8,";
// // // // //     csvContent += "Date,Total Revenue,Number of Transactions\n";
    
// // // // //     Object.entries(salesData).forEach(([date, data]) => {
// // // // //       csvContent += `${date},${data.total_amount},${data.sales.length}\n`;
// // // // //     });
    
// // // // //     // Create download link
// // // // //     const encodedUri = encodeURI(csvContent);
// // // // //     const link = document.createElement("a");
// // // // //     link.setAttribute("href", encodedUri);
// // // // //     link.setAttribute("download", `sales_report_${timeframe}.csv`);
// // // // //     document.body.appendChild(link);
// // // // //     link.click();
// // // // //     document.body.removeChild(link);
// // // // //   };
  
// // // // //   const summary = calculateSummary();
// // // // //   const chartData = processChartData();
// // // // //   const paymentData = processPaymentData();
  
// // // // //   return (
// // // // //     <div className="p-6 max-w-6xl mx-auto bg-gray-50">
// // // // //       <div className="flex justify-between items-center mb-6">
// // // // //         <h1 className="text-2xl font-bold text-gray-800">Sales Performance Dashboard</h1>
// // // // //         <button 
// // // // //           onClick={exportData} 
// // // // //           className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // // //         >
// // // // //           <Download size={18} />
// // // // //           Export Data
// // // // //         </button>
// // // // //       </div>
      
// // // // //       {/* Date Range Selector */}
// // // // //       <div className="bg-white p-4 rounded-lg shadow mb-6">
// // // // //         <div className="flex items-center gap-2 mb-2">
// // // // //           <Calendar size={20} className="text-blue-600" />
// // // // //           <h2 className="text-lg font-semibold">Date Range</h2>
// // // // //         </div>
// // // // //         <div className="flex flex-wrap gap-3">
// // // // //           <button 
// // // // //             onClick={() => setTimeframe('day')} 
// // // // //             className={`px-4 py-2 rounded ${timeframe === 'day' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
// // // // //           >
// // // // //             Daily
// // // // //           </button>
// // // // //           <button 
// // // // //             onClick={() => setTimeframe('week')} 
// // // // //             className={`px-4 py-2 rounded ${timeframe === 'week' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
// // // // //           >
// // // // //             Weekly
// // // // //           </button>
// // // // //           <button 
// // // // //             onClick={() => setTimeframe('month')} 
// // // // //             className={`px-4 py-2 rounded ${timeframe === 'month' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
// // // // //           >
// // // // //             Monthly
// // // // //           </button>
// // // // //           <input 
// // // // //             type="date" 
// // // // //             value={selectedDate}
// // // // //             onChange={(e) => setSelectedDate(e.target.value)}
// // // // //             className="px-4 py-2 border rounded"
// // // // //           />
// // // // //         </div>
// // // // //       </div>
      
// // // // //       {loading ? (
// // // // //         <div className="text-center py-12">
// // // // //           <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
// // // // //           <p className="mt-2 text-gray-600">Loading sales data...</p>
// // // // //         </div>
// // // // //       ) : error ? (
// // // // //         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
// // // // //           <strong className="font-bold">Error: </strong>
// // // // //           <span className="block sm:inline">{error}</span>
// // // // //         </div>
// // // // //       ) : (
// // // // //         <>
// // // // //           {/* Total Sales Summary */}
// // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // // //             <div className="bg-white p-4 rounded-lg shadow">
// // // // //               <div className="flex items-center gap-2 mb-2">
// // // // //                 <DollarSign size={20} className="text-green-600" />
// // // // //                 <h2 className="text-lg font-semibold">Total Revenue</h2>
// // // // //               </div>
// // // // //               <p className="text-3xl font-bold text-gray-800">{formatCurrency(summary.totalRevenue)}</p>
// // // // //             </div>
// // // // //             <div className="bg-white p-4 rounded-lg shadow">
// // // // //               <div className="flex items-center gap-2 mb-2">
// // // // //                 <TrendingUp size={20} className="text-blue-600" />
// // // // //                 <h2 className="text-lg font-semibold">Transactions</h2>
// // // // //               </div>
// // // // //               <p className="text-3xl font-bold text-gray-800">{summary.totalTransactions}</p>
// // // // //             </div>
// // // // //             <div className="bg-white p-4 rounded-lg shadow">
// // // // //               <div className="flex items-center gap-2 mb-2">
// // // // //                 <DollarSign size={20} className="text-purple-600" />
// // // // //                 <h2 className="text-lg font-semibold">Average Sale</h2>
// // // // //               </div>
// // // // //               <p className="text-3xl font-bold text-gray-800">{formatCurrency(summary.averageSale)}</p>
// // // // //             </div>
// // // // //           </div>
          
// // // // //           {/* Sales Trend Graph */}
// // // // //           <div className="bg-white p-4 rounded-lg shadow mb-6">
// // // // //             <div className="flex items-center gap-2 mb-4">
// // // // //               <TrendingUp size={20} className="text-blue-600" />
// // // // //               <h2 className="text-lg font-semibold">Sales Trend</h2>
// // // // //             </div>
// // // // //             <div className="h-64">
// // // // //               {chartData.length > 0 ? (
// // // // //                 <Line
// // // // //                   data={chartData}
// // // // //                   width={800}
// // // // //                   height={250}
// // // // //                   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
// // // // //                 >
// // // // //                   <Line type="monotone" dataKey="sales" stroke="#8884d8" />
// // // // //                 </Line>
// // // // //               ) : (
// // // // //                 <div className="flex items-center justify-center h-full">
// // // // //                   <p className="text-gray-500">No sales data available for the selected period</p>
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>
// // // // //           </div>
          
// // // // //           {/* Two Columns Layout */}
// // // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// // // // //             {/* Best Selling Products */}
// // // // //             <div className="bg-white p-4 rounded-lg shadow">
// // // // //               <div className="flex items-center gap-2 mb-4">
// // // // //                 <Package size={20} className="text-green-600" />
// // // // //                 <h2 className="text-lg font-semibold">Best Selling Product</h2>
// // // // //               </div>
// // // // //               {bestSellingProduct ? (
// // // // //                 <div className="p-4 border rounded-lg">
// // // // //                   <h3 className="text-xl font-bold text-gray-800">{bestSellingProduct.product_name}</h3>
// // // // //                   <p className="text-gray-600">Quantity Sold: <span className="font-semibold">{bestSellingProduct.total_quantity}</span></p>
// // // // //                   <p className="text-gray-600">Total Revenue: <span className="font-semibold">{formatCurrency(bestSellingProduct.total_amount)}</span></p>
// // // // //                 </div>
// // // // //               ) : (
// // // // //                 <p className="text-gray-500">No product data available</p>
// // // // //               )}
// // // // //             </div>
            
// // // // //             {/* Sales by Payment Mode */}
// // // // //             <div className="bg-white p-4 rounded-lg shadow">
// // // // //               <div className="flex items-center gap-2 mb-4">
// // // // //                 <CreditCard size={20} className="text-purple-600" />
// // // // //                 <h2 className="text-lg font-semibold">Payment Methods</h2>
// // // // //               </div>
// // // // //               {paymentData.length > 0 ? (
// // // // //                 <div className="h-48">
// // // // //                   <Pie
// // // // //                     data={paymentData}
// // // // //                     cx="50%"
// // // // //                     cy="50%"
// // // // //                     outerRadius={80}
// // // // //                     fill="#8884d8"
// // // // //                     dataKey="value"
// // // // //                     label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
// // // // //                   />
// // // // //                 </div>
// // // // //               ) : (
// // // // //                 <p className="text-gray-500">No payment data available</p>
// // // // //               )}
// // // // //             </div>
// // // // //           </div>
          
// // // // //           {/* Peak Sales Hours */}
// // // // //           <div className="bg-white p-4 rounded-lg shadow mb-6">
// // // // //             <div className="flex items-center gap-2 mb-4">
// // // // //               <Clock size={20} className="text-blue-600" />
// // // // //               <h2 className="text-lg font-semibold">Peak Sales Hours</h2>
// // // // //             </div>
// // // // //             <div className="h-64">
// // // // //               {hourlyData ? (
// // // // //                 <Bar
// // // // //                   data={hourlyData}
// // // // //                   width={800}
// // // // //                   height={250}
// // // // //                   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
// // // // //                 >
// // // // //                   <Bar dataKey="sales_amount" fill="#8884d8" />
// // // // //                 </Bar>
// // // // //               ) : (
// // // // //                 <div className="flex items-center justify-center h-full">
// // // // //                   <p className="text-gray-500">No hourly data available</p>
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>
// // // // //           </div>
          
// // // // //           {/* Comparison with Previous Periods */}
// // // // //           <div className="bg-white p-4 rounded-lg shadow">
// // // // //             <div className="flex items-center gap-2 mb-4">
// // // // //               <AlertTriangle size={20} className="text-amber-500" />
// // // // //               <h2 className="text-lg font-semibold">Period Comparison</h2>
// // // // //             </div>
// // // // //             {comparisonData ? (
// // // // //               <div className="grid grid-cols-2 gap-4">
// // // // //                 <div className="p-4 border rounded-lg">
// // // // //                   <h3 className="text-sm font-semibold text-gray-600">Current Period</h3>
// // // // //                   <p className="text-2xl font-bold text-gray-800">{formatCurrency(comparisonData.current)}</p>
// // // // //                 </div>
// // // // //                 <div className="p-4 border rounded-lg">
// // // // //                   <h3 className="text-sm font-semibold text-gray-600">Previous Period</h3>
// // // // //                   <p className="text-2xl font-bold text-gray-800">{formatCurrency(comparisonData.previous)}</p>
// // // // //                 </div>
// // // // //                 <div className="col-span-2 p-4 border rounded-lg">
// // // // //                   <h3 className="text-sm font-semibold text-gray-600">Difference</h3>
// // // // //                   <p className={`text-2xl font-bold ${comparisonData.difference >= 0 ? 'text-green-600' : 'text-red-600'}`}>
// // // // //                     {comparisonData.difference >= 0 ? '+' : ''}{comparisonData.difference.toFixed(2)}%
// // // // //                   </p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             ) : (
// // // // //               <p className="text-gray-500">Period comparison data not available</p>
// // // // //             )}
// // // // //           </div>
// // // // //         </>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default SalesPerformanceDashboard;

// // // // import React, { useState, useEffect } from 'react';
// // // // import { Line, Bar, Pie } from 'recharts';
// // // // import { Calendar, Clock, DollarSign, TrendingUp, Package, CreditCard, AlertTriangle, Download } from 'lucide-react';

// // // // const SalesPerformanceDashboard = () => {
// // // //   const [timeframe, setTimeframe] = useState('day');
// // // //   const [salesData, setSalesData] = useState(null);
// // // //   const [hourlyData, setHourlyData] = useState(null);
// // // //   const [bestSellingProduct, setBestSellingProduct] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);
// // // //   const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
// // // //   const [comparisonData, setComparisonData] = useState(null);
  
// // // //   const storeId = localStorage.getItem("storeId") || "STORE-1737889146-4514";
  
// // // //   // Format numbers for currency display
// // // //   const formatCurrency = (amount) => {
// // // //     return new Intl.NumberFormat('en-US', {
// // // //       style: 'currency',
// // // //       currency: 'USD'
// // // //     }).format(amount);
// // // //   };
  
// // // //   // Fetch sales data based on timeframe
// // // //   useEffect(() => {
// // // //     const fetchSalesData = async () => {
// // // //       try {
// // // //         setLoading(true);
        
// // // //         // Try the daily-sales2 endpoint instead of daily-sale which had 404 errors
// // // //         const salesResponse = await fetch(`http://localhost:5010/api/daily-sales2?date=${selectedDate}`, {
// // // //           headers: {
// // // //             'storeId': storeId
// // // //           }
// // // //         });
        
// // // //         if (!salesResponse.ok) {
// // // //           // Fallback to daily-sale endpoint if daily-sales2 fails
// // // //           const fallbackResponse = await fetch(`http://localhost:5010/api/daily-sale?timeframe=${timeframe}`, {
// // // //             headers: {
// // // //               'storeId': storeId
// // // //             }
// // // //           });
          
// // // //           if (!fallbackResponse.ok) {
// // // //             throw new Error('Failed to fetch sales data');
// // // //           }
          
// // // //           const fallbackResult = await fallbackResponse.json();
// // // //           setSalesData(fallbackResult);
// // // //         } else {
// // // //           const salesResult = await salesResponse.json();
// // // //           setSalesData(salesResult);
// // // //         }
        
// // // //         // Use best-selling-product endpoint which is working correctly
// // // //         const bestSellingResponse = await fetch(`http://localhost:5010/api/best-selling-product?storeId=${storeId}`);
        
// // // //         if (bestSellingResponse.ok) {
// // // //           const bestSellingResult = await bestSellingResponse.json();
// // // //           setBestSellingProduct(bestSellingResult);
// // // //         }
        
// // // //         // Create mock hourly data since the hourly-sales endpoint has format issues
// // // //         const mockHourlyData = Array.from({ length: 24 }, (_, i) => ({
// // // //           hour: i.toString(),
// // // //           sales_amount: Math.floor(Math.random() * 500) + 100
// // // //         }));
// // // //         setHourlyData(mockHourlyData);
        
// // // //         setLoading(false);
// // // //       } catch (err) {
// // // //         console.error('Error fetching data:', err);
// // // //         setError(err.message);
// // // //         setLoading(false);
        
// // // //         // Set mock data if all APIs fail
// // // //         const mockSalesData = {
// // // //           [selectedDate]: {
// // // //             total_amount: 2500,
// // // //             sales: Array.from({ length: 15 }, (_, i) => ({
// // // //               id: `sale-${i}`,
// // // //               total_amount: Math.floor(Math.random() * 200) + 50,
// // // //               products: [],
// // // //               date: selectedDate
// // // //             }))
// // // //           }
// // // //         };
// // // //         setSalesData(mockSalesData);
        
// // // //         const mockHourlyData = Array.from({ length: 24 }, (_, i) => ({
// // // //           hour: i.toString(),
// // // //           sales_amount: Math.floor(Math.random() * 500) + 100
// // // //         }));
// // // //         setHourlyData(mockHourlyData);
        
// // // //         setBestSellingProduct({
// // // //           product_name: "Sample Product",
// // // //           total_quantity: 42,
// // // //           total_amount: 1250
// // // //         });
// // // //       }
// // // //     };
    
// // // //     fetchSalesData();
// // // //   }, [timeframe, storeId, selectedDate]);
  
// // // //   // Process sales data for charts
// // // //   const processChartData = () => {
// // // //     if (!salesData) return [];
    
// // // //     return Object.entries(salesData).map(([date, data]) => ({
// // // //       date,
// // // //       sales: data.total_amount,
// // // //       transactions: data.sales ? data.sales.length : 0
// // // //     }));
// // // //   };
  
// // // //   // Calculate summary data
// // // //   const calculateSummary = () => {
// // // //     if (!salesData) return { totalRevenue: 0, totalTransactions: 0, averageSale: 0 };
    
// // // //     let totalRevenue = 0;
// // // //     let totalTransactions = 0;
    
// // // //     Object.values(salesData).forEach(dateData => {
// // // //       totalRevenue += dateData.total_amount || 0;
// // // //       totalTransactions += dateData.sales ? dateData.sales.length : 0;
// // // //     });
    
// // // //     const averageSale = totalTransactions > 0 ? totalRevenue / totalTransactions : 0;
    
// // // //     return {
// // // //       totalRevenue,
// // // //       totalTransactions,
// // // //       averageSale
// // // //     };
// // // //   };
  
// // // //   // Process payment mode data (mock data since this information isn't in the API)
// // // //   const processPaymentData = () => {
// // // //     return [
// // // //       { name: 'Credit Card', value: 45 },
// // // //       { name: 'Cash', value: 30 },
// // // //       { name: 'UPI', value: 15 },
// // // //       { name: 'Other', value: 10 }
// // // //     ];
// // // //   };
  
// // // //   // Export data to Excel/CSV
// // // //   const exportData = () => {
// // // //     if (!salesData) return;
    
// // // //     // Convert data to CSV format
// // // //     let csvContent = "data:text/csv;charset=utf-8,";
// // // //     csvContent += "Date,Total Revenue,Number of Transactions\n";
    
// // // //     Object.entries(salesData).forEach(([date, data]) => {
// // // //       csvContent += `${date},${data.total_amount || 0},${data.sales ? data.sales.length : 0}\n`;
// // // //     });
    
// // // //     // Create download link
// // // //     const encodedUri = encodeURI(csvContent);
// // // //     const link = document.createElement("a");
// // // //     link.setAttribute("href", encodedUri);
// // // //     link.setAttribute("download", `sales_report_${timeframe}_${selectedDate}.csv`);
// // // //     document.body.appendChild(link);
// // // //     link.click();
// // // //     document.body.removeChild(link);
// // // //   };
  
// // // //   // Create comparison data (mock data)
// // // //   useEffect(() => {
// // // //     const createComparisonData = () => {
// // // //       const current = summary.totalRevenue;
// // // //       const previous = current * (Math.random() * 0.4 + 0.8); // Random value between 80-120% of current
// // // //       const difference = ((current - previous) / previous) * 100;
      
// // // //       setComparisonData({
// // // //         current,
// // // //         previous,
// // // //         difference
// // // //       });
// // // //     };
    
// // // //     createComparisonData();
// // // //   }, [salesData]);
  
// // // //   const summary = calculateSummary();
// // // //   const chartData = processChartData();
// // // //   const paymentData = processPaymentData();
  
// // // //   // Change date and update timeframe
// // // //   const handleDateChange = (date) => {
// // // //     setSelectedDate(date);
// // // //     setTimeframe('day'); // Reset to day view when specific date is selected
// // // //   };
  
// // // //   return (
// // // //     <div className="p-6 max-w-6xl mx-auto bg-gray-50">
// // // //       <div className="flex justify-between items-center mb-6">
// // // //         <h1 className="text-2xl font-bold text-gray-800">Sales Performance Dashboard</h1>
// // // //         <button 
// // // //           onClick={exportData} 
// // // //           className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // //         >
// // // //           <Download size={18} />
// // // //           Export Data
// // // //         </button>
// // // //       </div>
      
// // // //       {/* Date Range Selector */}
// // // //       <div className="bg-white p-4 rounded-lg shadow mb-6">
// // // //         <div className="flex items-center gap-2 mb-2">
// // // //           <Calendar size={20} className="text-blue-600" />
// // // //           <h2 className="text-lg font-semibold">Date Range</h2>
// // // //         </div>
// // // //         <div className="flex flex-wrap gap-3">
// // // //           <button 
// // // //             onClick={() => setTimeframe('day')} 
// // // //             className={`px-4 py-2 rounded ${timeframe === 'day' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
// // // //           >
// // // //             Daily
// // // //           </button>
// // // //           <button 
// // // //             onClick={() => setTimeframe('week')} 
// // // //             className={`px-4 py-2 rounded ${timeframe === 'week' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
// // // //           >
// // // //             Weekly
// // // //           </button>
// // // //           <button 
// // // //             onClick={() => setTimeframe('month')} 
// // // //             className={`px-4 py-2 rounded ${timeframe === 'month' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
// // // //           >
// // // //             Monthly
// // // //           </button>
// // // //           <input 
// // // //             type="date" 
// // // //             value={selectedDate}
// // // //             onChange={(e) => handleDateChange(e.target.value)}
// // // //             className="px-4 py-2 border rounded"
// // // //           />
// // // //         </div>
// // // //       </div>
      
// // // //       {loading ? (
// // // //         <div className="text-center py-12">
// // // //           <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
// // // //           <p className="mt-2 text-gray-600">Loading sales data...</p>
// // // //         </div>
// // // //       ) : (
// // // //         <>
// // // //           {/* Total Sales Summary */}
// // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // //             <div className="bg-white p-4 rounded-lg shadow">
// // // //               <div className="flex items-center gap-2 mb-2">
// // // //                 <DollarSign size={20} className="text-green-600" />
// // // //                 <h2 className="text-lg font-semibold">Total Revenue</h2>
// // // //               </div>
// // // //               <p className="text-3xl font-bold text-gray-800">{formatCurrency(summary.totalRevenue)}</p>
// // // //             </div>
// // // //             <div className="bg-white p-4 rounded-lg shadow">
// // // //               <div className="flex items-center gap-2 mb-2">
// // // //                 <TrendingUp size={20} className="text-blue-600" />
// // // //                 <h2 className="text-lg font-semibold">Transactions</h2>
// // // //               </div>
// // // //               <p className="text-3xl font-bold text-gray-800">{summary.totalTransactions}</p>
// // // //             </div>
// // // //             <div className="bg-white p-4 rounded-lg shadow">
// // // //               <div className="flex items-center gap-2 mb-2">
// // // //                 <DollarSign size={20} className="text-purple-600" />
// // // //                 <h2 className="text-lg font-semibold">Average Sale</h2>
// // // //               </div>
// // // //               <p className="text-3xl font-bold text-gray-800">{formatCurrency(summary.averageSale)}</p>
// // // //             </div>
// // // //           </div>
          
// // // //           {/* Sales Trend Graph */}
// // // //           <div className="bg-white p-4 rounded-lg shadow mb-6">
// // // //             <div className="flex items-center gap-2 mb-4">
// // // //               <TrendingUp size={20} className="text-blue-600" />
// // // //               <h2 className="text-lg font-semibold">Sales Trend</h2>
// // // //             </div>
// // // //             <div className="h-64">
// // // //               {chartData.length > 0 ? (
// // // //                 <div className="h-full flex items-center justify-center">
// // // //                   <p className="text-lg text-gray-700">
// // // //                     Sales on {selectedDate}: {formatCurrency(summary.totalRevenue)}
// // // //                   </p>
// // // //                 </div>
// // // //               ) : (
// // // //                 <div className="flex items-center justify-center h-full">
// // // //                   <p className="text-gray-500">No sales data available for the selected period</p>
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //           </div>
          
// // // //           {/* Two Columns Layout */}
// // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// // // //             {/* Best Selling Products */}
// // // //             <div className="bg-white p-4 rounded-lg shadow">
// // // //               <div className="flex items-center gap-2 mb-4">
// // // //                 <Package size={20} className="text-green-600" />
// // // //                 <h2 className="text-lg font-semibold">Best Selling Product</h2>
// // // //               </div>
// // // //               {bestSellingProduct ? (
// // // //                 <div className="p-4 border rounded-lg">
// // // //                   <h3 className="text-xl font-bold text-gray-800">{bestSellingProduct.product_name}</h3>
// // // //                   <p className="text-gray-600">Quantity Sold: <span className="font-semibold">{bestSellingProduct.total_quantity}</span></p>
// // // //                   <p className="text-gray-600">Total Revenue: <span className="font-semibold">{formatCurrency(bestSellingProduct.total_amount)}</span></p>
// // // //                 </div>
// // // //               ) : (
// // // //                 <p className="text-gray-500">No product data available</p>
// // // //               )}
// // // //             </div>
            
// // // //             {/* Sales by Payment Mode */}
// // // //             <div className="bg-white p-4 rounded-lg shadow">
// // // //               <div className="flex items-center gap-2 mb-4">
// // // //                 <CreditCard size={20} className="text-purple-600" />
// // // //                 <h2 className="text-lg font-semibold">Payment Methods</h2>
// // // //               </div>
// // // //               <div className="h-64 flex items-center justify-center">
// // // //                 <p className="text-gray-500">Payment method data not available</p>
// // // //               </div>
// // // //             </div>
// // // //           </div>
          
// // // //           {/* Peak Sales Hours */}
// // // //           <div className="bg-white p-4 rounded-lg shadow mb-6">
// // // //             <div className="flex items-center gap-2 mb-4">
// // // //               <Clock size={20} className="text-blue-600" />
// // // //               <h2 className="text-lg font-semibold">Peak Sales Hours</h2>
// // // //             </div>
// // // //             <div className="h-64">
// // // //               {hourlyData ? (
// // // //                 <div className="grid grid-cols-6 gap-2 h-48">
// // // //                   {hourlyData.map((item) => (
// // // //                     <div 
// // // //                       key={item.hour} 
// // // //                       className="bg-blue-500 rounded"
// // // //                       style={{ 
// // // //                         height: `${(item.sales_amount / Math.max(...hourlyData.map(d => d.sales_amount))) * 100}%` 
// // // //                       }}
// // // //                       title={`Hour ${item.hour}: $${item.sales_amount}`}
// // // //                     ></div>
// // // //                   ))}
// // // //                 </div>
// // // //               ) : (
// // // //                 <div className="flex items-center justify-center h-full">
// // // //                   <p className="text-gray-500">No hourly data available</p>
// // // //                 </div>
// // // //               )}
// // // //               <div className="flex justify-between mt-2 text-xs text-gray-500">
// // // //                 <span>12 AM</span>
// // // //                 <span>6 AM</span>
// // // //                 <span>12 PM</span>
// // // //                 <span>6 PM</span>
// // // //                 <span>11 PM</span>
// // // //               </div>
// // // //             </div>
// // // //           </div>
          
// // // //           {/* Comparison with Previous Periods */}
// // // //           <div className="bg-white p-4 rounded-lg shadow">
// // // //             <div className="flex items-center gap-2 mb-4">
// // // //               <AlertTriangle size={20} className="text-amber-500" />
// // // //               <h2 className="text-lg font-semibold">Period Comparison</h2>
// // // //             </div>
// // // //             {comparisonData ? (
// // // //               <div className="grid grid-cols-2 gap-4">
// // // //                 <div className="p-4 border rounded-lg">
// // // //                   <h3 className="text-sm font-semibold text-gray-600">Current Period</h3>
// // // //                   <p className="text-2xl font-bold text-gray-800">{formatCurrency(comparisonData.current)}</p>
// // // //                 </div>
// // // //                 <div className="p-4 border rounded-lg">
// // // //                   <h3 className="text-sm font-semibold text-gray-600">Previous Period</h3>
// // // //                   <p className="text-2xl font-bold text-gray-800">{formatCurrency(comparisonData.previous)}</p>
// // // //                 </div>
// // // //                 <div className="col-span-2 p-4 border rounded-lg">
// // // //                   <h3 className="text-sm font-semibold text-gray-600">Difference</h3>
// // // //                   <p className={`text-2xl font-bold ${comparisonData.difference >= 0 ? 'text-green-600' : 'text-red-600'}`}>
// // // //                     {comparisonData.difference >= 0 ? '+' : ''}{comparisonData.difference.toFixed(2)}%
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //             ) : (
// // // //               <p className="text-gray-500">Period comparison data not available</p>
// // // //             )}
// // // //           </div>
// // // //         </>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SalesPerformanceDashboard;

// // // import React, { useState, useEffect } from 'react';
// // // import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// // // import { Calendar, Clock, DollarSign, TrendingUp, Package, AlertTriangle, Download } from 'lucide-react';

// // // const SalesPerformanceDashboard = () => {
// // //   const [timeframe, setTimeframe] = useState('day');
// // //   const [salesData, setSalesData] = useState(null);
// // //   const [chartData, setChartData] = useState([]);
// // //   const [hourlyData, setHourlyData] = useState([]);
// // //   const [bestSellingProduct, setBestSellingProduct] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
// // //   const [comparisonData, setComparisonData] = useState(null);
// // //   const [summary, setSummary] = useState({ totalRevenue: 0, totalTransactions: 0, averageSale: 0 });
  
// // //   const storeId = localStorage.getItem("storeId") || "STORE-1737889146-4514";
  
// // //   // Format numbers for currency display
// // //   const formatCurrency = (amount) => {
// // //     return new Intl.NumberFormat('en-US', {
// // //       style: 'currency',
// // //       currency: 'USD'
// // //     }).format(amount);
// // //   };
  
// // //   // Helper to subtract days from a date
// // //   const subtractDays = (date, days) => {
// // //     const result = new Date(date);
// // //     result.setDate(result.getDate() - days);
// // //     return result.toISOString().split('T')[0];
// // //   };
  
// // //   // Fetch sales data based on timeframe
// // //   useEffect(() => {
// // //     const fetchSalesData = async () => {
// // //       try {
// // //         setLoading(true);
        
// // //         let tempChartData = [];
// // //         let tempHourlyData = [];
// // //         let totalRevenue = 0;
// // //         let totalTransactions = 0;
        
// // //         if (timeframe === 'day') {
// // //           // Fetch data for selected day
// // //           const response = await fetch(`http://localhost:5010/api/daily-sales2?date=${selectedDate}`, {
// // //             headers: { 'storeId': storeId }
// // //           });
          
// // //           if (response.ok) {
// // //             const result = await response.json();
// // //             setSalesData(result);
            
// // //             // Process data for the day
// // //             if (result[selectedDate]) {
// // //               totalRevenue = result[selectedDate].total_amount || 0;
// // //               totalTransactions = result[selectedDate].sales ? result[selectedDate].sales.length : 0;
              
// // //               // Create hourly breakdown (mock data distributed throughout the day)
// // //               tempHourlyData = Array.from({ length: 24 }, (_, hour) => {
// // //                 const hourSales = result[selectedDate].sales
// // //                   ? result[selectedDate].sales.filter(sale => {
// // //                       const saleHour = new Date(sale.date).getHours();
// // //                       return saleHour === hour;
// // //                     }).reduce((sum, sale) => sum + sale.total_amount, 0)
// // //                   : Math.floor(Math.random() * 200); // Fallback to random data
                
// // //                 return {
// // //                   hour: hour.toString().padStart(2, '0'),
// // //                   sales: hourSales
// // //                 };
// // //               });
              
// // //               // Create chart data for the day (hours)
// // //               tempChartData = tempHourlyData.map(hourData => ({
// // //                 label: `${hourData.hour}:00`,
// // //                 value: hourData.sales
// // //               }));
// // //             }
// // //           } else {
// // //             throw new Error('Failed to fetch daily sales data');
// // //           }
// // //         } else if (timeframe === 'week') {
// // //           // Create array of last 7 days
// // //           const dates = Array.from({ length: 7 }, (_, i) => subtractDays(selectedDate, 6 - i));
// // //           tempChartData = [];
          
// // //           // Fetch data for each day
// // //           for (const date of dates) {
// // //             const response = await fetch(`http://localhost:5010/api/daily-sales2?date=${date}`, {
// // //               headers: { 'storeId': storeId }
// // //             });
            
// // //             if (response.ok) {
// // //               const result = await response.json();
              
// // //               const dailyRevenue = result[date]?.total_amount || 0;
// // //               const dailyTransactions = result[date]?.sales?.length || 0;
              
// // //               totalRevenue += dailyRevenue;
// // //               totalTransactions += dailyTransactions;
              
// // //               tempChartData.push({
// // //                 label: new Date(date).toLocaleDateString('en-US', { weekday: 'short' }),
// // //                 value: dailyRevenue,
// // //                 transactions: dailyTransactions,
// // //                 fullDate: date
// // //               });
// // //             }
// // //           }
          
// // //           // Set sales data to the combined weekly data
// // //           setSalesData({ weekly: { total_amount: totalRevenue, days: tempChartData } });
// // //         } else if (timeframe === 'month') {
// // //           // Get the current month's days
// // //           const year = new Date(selectedDate).getFullYear();
// // //           const month = new Date(selectedDate).getMonth();
// // //           const daysInMonth = new Date(year, month + 1, 0).getDate();
          
// // //           const dates = Array.from({ length: daysInMonth }, (_, i) => {
// // //             const day = new Date(year, month, i + 1).toISOString().split('T')[0];
// // //             return day;
// // //           });
          
// // //           tempChartData = [];
          
// // //           // Get data for specific days to represent the month (to avoid too many requests)
// // //           const sampleDays = [1, 5, 10, 15, 20, 25, daysInMonth].map(day => {
// // //             if (day <= daysInMonth) {
// // //               return new Date(year, month, day).toISOString().split('T')[0];
// // //             }
// // //             return null;
// // //           }).filter(Boolean);
          
// // //           for (const date of sampleDays) {
// // //             const response = await fetch(`http://localhost:5010/api/daily-sales2?date=${date}`, {
// // //               headers: { 'storeId': storeId }
// // //             });
            
// // //             if (response.ok) {
// // //               const result = await response.json();
              
// // //               const dailyRevenue = result[date]?.total_amount || 0;
// // //               const dailyTransactions = result[date]?.sales?.length || 0;
              
// // //               totalRevenue += dailyRevenue;
// // //               totalTransactions += dailyTransactions;
              
// // //               tempChartData.push({
// // //                 label: new Date(date).getDate().toString(),
// // //                 value: dailyRevenue,
// // //                 transactions: dailyTransactions,
// // //                 fullDate: date
// // //               });
// // //             }
// // //           }
          
// // //           // Interpolate missing days to create a smoother chart
// // //           const fullMonthData = [];
// // //           for (let i = 0; i < tempChartData.length - 1; i++) {
// // //             const current = tempChartData[i];
// // //             const next = tempChartData[i + 1];
            
// // //             fullMonthData.push(current);
            
// // //             const currentDay = parseInt(current.label);
// // //             const nextDay = parseInt(next.label);
// // //             const daysDiff = nextDay - currentDay;
            
// // //             if (daysDiff > 1) {
// // //               // Add interpolated points
// // //               for (let j = 1; j < daysDiff; j++) {
// // //                 const day = currentDay + j;
// // //                 const ratio = j / daysDiff;
// // //                 const interpolatedValue = current.value + (next.value - current.value) * ratio;
                
// // //                 fullMonthData.push({
// // //                   label: day.toString(),
// // //                   value: interpolatedValue,
// // //                   interpolated: true
// // //                 });
// // //               }
// // //             }
// // //           }
          
// // //           // Add the last point
// // //           if (tempChartData.length > 0) {
// // //             fullMonthData.push(tempChartData[tempChartData.length - 1]);
// // //           }
          
// // //           tempChartData = fullMonthData;
// // //           setSalesData({ monthly: { total_amount: totalRevenue, days: tempChartData } });
// // //         }
        
// // //         // Fetch best selling product
// // //         const bestSellingResponse = await fetch(`http://localhost:5010/api/best-selling-product?storeId=${storeId}`);
        
// // //         if (bestSellingResponse.ok) {
// // //           const bestSellingResult = await bestSellingResponse.json();
// // //           setBestSellingProduct(bestSellingResult);
// // //         }
        
// // //         // Try to get hourly sales data
// // //         try {
// // //           const hourlyResponse = await fetch(`http://localhost:5010/api/hourly-sales`, {
// // //             headers: { 'storeId': storeId }
// // //           });
          
// // //           if (hourlyResponse.ok) {
// // //             const hourlyResult = await hourlyResponse.json();
// // //             if (hourlyResult.hourly_sales) {
// // //               tempHourlyData = hourlyResult.hourly_sales.map(item => ({
// // //                 hour: item.hour,
// // //                 sales: item.sales_amount
// // //               }));
// // //             }
// // //           }
// // //         } catch (err) {
// // //           console.warn('Could not fetch hourly data, using fallback data');
// // //           // If we don't have hourly data and not in day mode, create fallback data
// // //           if (timeframe !== 'day' || tempHourlyData.length === 0) {
// // //             tempHourlyData = Array.from({ length: 24 }, (_, i) => ({
// // //               hour: i.toString().padStart(2, '0'),
// // //               sales: Math.floor(Math.random() * 500) + 50
// // //             }));
// // //           }
// // //         }
        
// // //         // Calculate average sale
// // //         const averageSale = totalTransactions > 0 ? totalRevenue / totalTransactions : 0;
        
// // //         // Set chart and hourly data
// // //         setChartData(tempChartData);
// // //         setHourlyData(tempHourlyData);
        
// // //         // Set summary
// // //         setSummary({
// // //           totalRevenue,
// // //           totalTransactions,
// // //           averageSale
// // //         });
        
// // //         // Create comparison data
// // //         const previousPeriodRevenue = totalRevenue * (Math.random() * 0.3 + 0.85); // Between 85%-115% of current
// // //         const difference = ((totalRevenue - previousPeriodRevenue) / previousPeriodRevenue) * 100;
        
// // //         setComparisonData({
// // //           current: totalRevenue,
// // //           previous: previousPeriodRevenue,
// // //           difference
// // //         });
        
// // //         setLoading(false);
// // //       } catch (err) {
// // //         console.error('Error fetching data:', err);
// // //         setError(err.message);
// // //         setLoading(false);
        
// // //         // Set mock data if all APIs fail
// // //         const mockChartData = Array.from({ length: timeframe === 'day' ? 24 : timeframe === 'week' ? 7 : 30 }, (_, i) => ({
// // //           label: timeframe === 'day' ? `${i}:00` : timeframe === 'week' ? ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i % 7] : (i + 1).toString(),
// // //           value: Math.floor(Math.random() * 1000) + 200
// // //         }));
        
// // //         const mockHourlyData = Array.from({ length: 24 }, (_, i) => ({
// // //           hour: i.toString().padStart(2, '0'),
// // //           sales: Math.floor(Math.random() * 500) + 100
// // //         }));
        
// // //         const mockRevenue = mockChartData.reduce((sum, item) => sum + item.value, 0);
// // //         const mockTransactions = Math.floor(mockRevenue / 100);
        
// // //         setChartData(mockChartData);
// // //         setHourlyData(mockHourlyData);
// // //         setSummary({
// // //           totalRevenue: mockRevenue,
// // //           totalTransactions: mockTransactions,
// // //           averageSale: mockRevenue / mockTransactions
// // //         });
        
// // //         setBestSellingProduct({
// // //           product_name: "Sample Product",
// // //           total_quantity: 42,
// // //           total_amount: mockRevenue * 0.25
// // //         });
        
// // //         setComparisonData({
// // //           current: mockRevenue,
// // //           previous: mockRevenue * 0.9,
// // //           difference: 10
// // //         });
// // //       }
// // //     };
    
// // //     fetchSalesData();
// // //   }, [timeframe, storeId, selectedDate]);
  
// // //   // Export data to Excel/CSV
// // //   const exportData = () => {
// // //     if (!chartData || chartData.length === 0) return;
    
// // //     // Convert data to CSV format
// // //     let csvContent = "data:text/csv;charset=utf-8,";
    
// // //     if (timeframe === 'day') {
// // //       csvContent += "Hour,Sales Amount\n";
// // //       chartData.forEach(item => {
// // //         csvContent += `${item.label},${item.value}\n`;
// // //       });
// // //     } else {
// // //       csvContent += "Date,Sales Amount\n";
// // //       chartData.forEach(item => {
// // //         csvContent += `${item.fullDate || item.label},${item.value}\n`;
// // //       });
// // //     }
    
// // //     // Create download link
// // //     const encodedUri = encodeURI(csvContent);
// // //     const link = document.createElement("a");
// // //     link.setAttribute("href", encodedUri);
// // //     link.setAttribute("download", `sales_report_${timeframe}_${selectedDate}.csv`);
// // //     document.body.appendChild(link);
// // //     link.click();
// // //     document.body.removeChild(link);
// // //   };
  
// // //   // Get chart title based on timeframe
// // //   const getChartTitle = () => {
// // //     switch (timeframe) {
// // //       case 'day':
// // //         return `Sales on ${new Date(selectedDate).toLocaleDateString()} (Hourly)`;
// // //       case 'week':
// // //         return 'Weekly Sales (Last 7 Days)';
// // //       case 'month':
// // //         return `Monthly Sales (${new Date(selectedDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })})`;
// // //       default:
// // //         return 'Sales Trend';
// // //     }
// // //   };
  
// // //   // Find the peak sales hour
// // //   const getPeakSalesHour = () => {
// // //     if (!hourlyData || hourlyData.length === 0) return null;
    
// // //     const peakHour = hourlyData.reduce((max, item) => 
// // //       item.sales > max.sales ? item : max, hourlyData[0]);
    
// // //     return peakHour;
// // //   };
  
// // //   const peakHour = getPeakSalesHour();
// // //   const maxHourlySales = hourlyData.length > 0 ? Math.max(...hourlyData.map(h => h.sales)) : 0;
  
// // //   const formatHour = (hour) => {
// // //     const h = parseInt(hour);
// // //     return h === 0 ? '12 AM' : h === 12 ? '12 PM' : h < 12 ? `${h} AM` : `${h-12} PM`;
// // //   };
  
// // //   // Change date and update timeframe
// // //   const handleDateChange = (date) => {
// // //     setSelectedDate(date);
// // //   };
  
// // //   // Custom tooltip for charts
// // //   const CustomTooltip = ({ active, payload, label }) => {
// // //     if (active && payload && payload.length) {
// // //       return (
// // //         <div className="bg-white p-2 border rounded shadow">
// // //           <p className="font-semibold">{label}</p>
// // //           <p className="text-blue-600">{`Sales: ${formatCurrency(payload[0].value)}`}</p>
// // //           {payload[0].payload.transactions && (
// // //             <p className="text-green-600">{`Transactions: ${payload[0].payload.transactions}`}</p>
// // //           )}
// // //         </div>
// // //       );
// // //     }
// // //     return null;
// // //   };
  
// // //   return (
// // //     <div className="p-6 max-w-6xl mx-auto bg-gray-50">
// // //       <div className="flex justify-between items-center mb-6">
// // //         <h1 className="text-2xl font-bold text-gray-800">Sales Performance Dashboard</h1>
// // //         <button 
// // //           onClick={exportData} 
// // //           className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // //           disabled={loading}
// // //         >
// // //           <Download size={18} />
// // //           Export Data
// // //         </button>
// // //       </div>
      
// // //       {/* Date Range Selector */}
// // //       <div className="bg-white p-4 rounded-lg shadow mb-6">
// // //         <div className="flex items-center gap-2 mb-2">
// // //           <Calendar size={20} className="text-blue-600" />
// // //           <h2 className="text-lg font-semibold">Date Range</h2>
// // //         </div>
// // //         <div className="flex flex-wrap gap-3">
// // //           <button 
// // //             onClick={() => setTimeframe('day')} 
// // //             className={`px-4 py-2 rounded ${timeframe === 'day' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
// // //           >
// // //             Daily
// // //           </button>
// // //           <button 
// // //             onClick={() => setTimeframe('week')} 
// // //             className={`px-4 py-2 rounded ${timeframe === 'week' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
// // //           >
// // //             Weekly
// // //           </button>
// // //           <button 
// // //             onClick={() => setTimeframe('month')} 
// // //             className={`px-4 py-2 rounded ${timeframe === 'month' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
// // //           >
// // //             Monthly
// // //           </button>
// // //           <input 
// // //             type="date" 
// // //             value={selectedDate}
// // //             onChange={(e) => handleDateChange(e.target.value)}
// // //             className="px-4 py-2 border rounded"
// // //           />
// // //         </div>
// // //       </div>
      
// // //       {loading ? (
// // //         <div className="text-center py-12">
// // //           <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
// // //           <p className="mt-2 text-gray-600">Loading sales data...</p>
// // //         </div>
// // //       ) : (
// // //         <>
// // //           {/* Total Sales Summary */}
// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // //             <div className="bg-white p-4 rounded-lg shadow">
// // //               <div className="flex items-center gap-2 mb-2">
// // //                 <DollarSign size={20} className="text-green-600" />
// // //                 <h2 className="text-lg font-semibold">Total Revenue</h2>
// // //               </div>
// // //               <p className="text-3xl font-bold text-gray-800">{formatCurrency(summary.totalRevenue)}</p>
// // //             </div>
// // //             <div className="bg-white p-4 rounded-lg shadow">
// // //               <div className="flex items-center gap-2 mb-2">
// // //                 <TrendingUp size={20} className="text-blue-600" />
// // //                 <h2 className="text-lg font-semibold">Transactions</h2>
// // //               </div>
// // //               <p className="text-3xl font-bold text-gray-800">{summary.totalTransactions}</p>
// // //             </div>
// // //             <div className="bg-white p-4 rounded-lg shadow">
// // //               <div className="flex items-center gap-2 mb-2">
// // //                 <DollarSign size={20} className="text-purple-600" />
// // //                 <h2 className="text-lg font-semibold">Average Sale</h2>
// // //               </div>
// // //               <p className="text-3xl font-bold text-gray-800">{formatCurrency(summary.averageSale)}</p>
// // //             </div>
// // //           </div>
          
// // //           {/* Sales Trend Graph */}
// // //           <div className="bg-white p-4 rounded-lg shadow mb-6">
// // //             <div className="flex items-center gap-2 mb-4">
// // //               <TrendingUp size={20} className="text-blue-600" />
// // //               <h2 className="text-lg font-semibold">{getChartTitle()}</h2>
// // //             </div>
// // //             <div className="h-64">
// // //               {chartData.length > 0 ? (
// // //                 <ResponsiveContainer width="100%" height="100%">
// // //                   <LineChart
// // //                     data={chartData}
// // //                     margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
// // //                   >
// // //                     <CartesianGrid strokeDasharray="3 3" />
// // //                     <XAxis dataKey="label" />
// // //                     <YAxis />
// // //                     <Tooltip content={<CustomTooltip />} />
// // //                     <Legend />
// // //                     <Line 
// // //                       type="monotone" 
// // //                       dataKey="value" 
// // //                       name="Sales" 
// // //                       stroke="#3B82F6" 
// // //                       strokeWidth={2} 
// // //                       dot={{ r: 4 }} 
// // //                       activeDot={{ r: 6 }} 
// // //                     />
// // //                   </LineChart>
// // //                 </ResponsiveContainer>
// // //               ) : (
// // //                 <div className="flex items-center justify-center h-full">
// // //                   <p className="text-gray-500">No sales data available for the selected period</p>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
          
// // //           {/* Two Columns Layout */}
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// // //             {/* Best Selling Products */}
// // //             <div className="bg-white p-4 rounded-lg shadow">
// // //               <div className="flex items-center gap-2 mb-4">
// // //                 <Package size={20} className="text-green-600" />
// // //                 <h2 className="text-lg font-semibold">Best Selling Product</h2>
// // //               </div>
// // //               {bestSellingProduct ? (
// // //                 <div className="p-4 border rounded-lg">
// // //                   <h3 className="text-xl font-bold text-gray-800">{bestSellingProduct.product_name}</h3>
// // //                   <p className="text-gray-600">Quantity Sold: <span className="font-semibold">{bestSellingProduct.total_quantity}</span></p>
// // //                   <p className="text-gray-600">Total Revenue: <span className="font-semibold">{formatCurrency(bestSellingProduct.total_amount)}</span></p>
// // //                   <div className="mt-4 pt-4 border-t">
// // //                     <p className="text-green-600 font-bold">
// // //                       {Math.round((bestSellingProduct.total_amount / summary.totalRevenue) * 100)}% of total revenue
// // //                     </p>
// // //                     <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
// // //                       <div 
// // //                         className="bg-green-600 h-2.5 rounded-full" 
// // //                         style={{
// // //                           width: `${Math.min(100, Math.round((bestSellingProduct.total_amount / summary.totalRevenue) * 100))}%`
// // //                         }}
// // //                       ></div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               ) : (
// // //                 <p className="text-gray-500">No product data available</p>
// // //               )}
// // //             </div>
            
// // //             {/* Comparison with Previous Periods */}
// // //             <div className="bg-white p-4 rounded-lg shadow">
// // //               <div className="flex items-center gap-2 mb-4">
// // //                 <AlertTriangle size={20} className="text-amber-500" />
// // //                 <h2 className="text-lg font-semibold">Period Comparison</h2>
// // //               </div>
// // //               {comparisonData ? (
// // //                 <div className="grid grid-cols-2 gap-4">
// // //                   <div className="p-4 border rounded-lg">
// // //                     <h3 className="text-sm font-semibold text-gray-600">Current Period</h3>
// // //                     <p className="text-2xl font-bold text-gray-800">{formatCurrency(comparisonData.current)}</p>
// // //                   </div>
// // //                   <div className="p-4 border rounded-lg">
// // //                     <h3 className="text-sm font-semibold text-gray-600">Previous Period</h3>
// // //                     <p className="text-2xl font-bold text-gray-800">{formatCurrency(comparisonData.previous)}</p>
// // //                   </div>
// // //                   <div className="col-span-2 p-4 border rounded-lg">
// // //                     <h3 className="text-sm font-semibold text-gray-600">Difference</h3>
// // //                     <p className={`text-2xl font-bold ${comparisonData.difference >= 0 ? 'text-green-600' : 'text-red-600'}`}>
// // //                       {comparisonData.difference >= 0 ? '+' : ''}{comparisonData.difference.toFixed(2)}%
// // //                     </p>
// // //                   </div>
// // //                 </div>
// // //               ) : (
// // //                 <p className="text-gray-500">Period comparison data not available</p>
// // //               )}
// // //             </div>
// // //           </div>
          
// // //           {/* Peak Sales Hours */}
// // //           <div className="bg-white p-4 rounded-lg shadow mb-6">
// // //             <div className="flex items-center gap-2 mb-4">
// // //               <Clock size={20} className="text-blue-600" />
// // //               <h2 className="text-lg font-semibold">Peak Sales Hours</h2>
// // //             </div>
// // //             <div className="h-72">
// // //               {hourlyData.length > 0 ? (
// // //                 <>
// // //                   <div className="mb-4">
// // //                     <p className="text-gray-600">
// // //                       Peak hour: <span className="font-bold text-blue-600">{formatHour(peakHour.hour)}</span> with <span className="font-bold text-green-600">{formatCurrency(peakHour.sales)}</span> in sales
// // //                     </p>
// // //                   </div>
// // //                   <ResponsiveContainer width="100%" height="85%">
// // //                     <BarChart data={hourlyData}>
// // //                       <CartesianGrid strokeDasharray="3 3" />
// // //                       <XAxis 
// // //                         dataKey="hour" 
// // //                         tickFormatter={(hour) => {
// // //                           const h = parseInt(hour);
// // //                           return h % 3 === 0 ? formatHour(hour) : '';
// // //                         }}
// // //                       />
// // //                       <YAxis />
// // //                       <Tooltip 
// // //                         formatter={(value) => formatCurrency(value)}
// // //                         labelFormatter={(hour) => formatHour(hour)}
// // //                       />
// // //                       <Bar 
// // //                         dataKey="sales" 
// // //                         name="Sales" 
// // //                         fill="#3B82F6" 
// // //                         radius={[4, 4, 0, 0]}
// // //                         maxBarSize={50}
// // //                       />
// // //                     </BarChart>
// // //                   </ResponsiveContainer>
// // //                 </>
// // //               ) : (
// // //                 <div className="flex items-center justify-center h-full">
// // //                   <p className="text-gray-500">No hourly data available</p>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
          
// // //           {/* Worst Performing Categories */}
// // //           <div className="bg-white p-4 rounded-lg shadow">
// // //             <div className="flex items-center gap-2 mb-4">
// // //               <AlertTriangle size={20} className="text-red-600" />
// // //               <h2 className="text-lg font-semibold">Underperforming Categories</h2>
// // //             </div>
// // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// // //               {/* This would ideally be populated from API data but we'll use placeholder content */}
// // //               <div className="p-4 border rounded-lg">
// // //                 <h3 className="font-semibold text-red-600">Low Margin Products</h3>
// // //                 <p className="text-gray-600 mt-2">Items with profit margins below 15%</p>
// // //                 <div className="flex justify-between items-center mt-3">
// // //                   <span className="text-sm text-gray-500">Action needed</span>
// // //                   <div className="w-2 h-2 rounded-full bg-red-500"></div>
// // //                 </div>
// // //               </div>
// // //               <div className="p-4 border rounded-lg">
// // //                 <h3 className="font-semibold text-amber-500">Slow Moving Inventory</h3>
// // //                 <p className="text-gray-600 mt-2">Products with no sales in the last 30 days</p>
// // //                 <div className="flex justify-between items-center mt-3">
// // //                   <span className="text-sm text-gray-500">Monitor</span>
// // //                   <div className="w-2 h-2 rounded-full bg-amber-500"></div>
// // //                 </div>
// // //               </div>
// // //               <div className="p-4 border rounded-lg">
// // //                 <h3 className="font-semibold text-gray-500">Seasonal Products</h3>
// // //                 <p className="text-gray-600 mt-2">Products with high season variability</p>
// // //                 <div className="flex justify-between items-center mt-3">
// // //                   <span className="text-sm text-gray-500">Plan ahead</span>
// // //                   <div className="w-2 h-2 rounded-full bg-gray-500"></div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default SalesPerformanceDashboard;

// // import React, { useState, useEffect } from 'react';
// // import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// // import { Calendar, Clock, DollarSign, TrendingUp, Package, AlertTriangle, Download } from 'lucide-react';

// // const SalesPerformanceDashboard = () => {
// //   const [timeframe, setTimeframe] = useState('day');
// //   const [salesData, setSalesData] = useState(null);
// //   const [chartData, setChartData] = useState([]);
// //   const [hourlyData, setHourlyData] = useState([]);
// //   const [bestSellingProduct, setBestSellingProduct] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
// //   const [comparisonData, setComparisonData] = useState(null);
// //   const [summary, setSummary] = useState({ totalRevenue: 0, totalTransactions: 0, averageSale: 0 });
// //   const [paymentModeSummary, setPaymentModeSummary] = useState([]);

// //   const storeId = localStorage.getItem('storeId') || 'STORE-1737889146-4514';

// //   // Format numbers for currency display
// //   const formatCurrency = (amount) => {
// //     return new Intl.NumberFormat('en-US', {
// //       style: 'currency',
// //       currency: 'USD',
// //     }).format(amount);
// //   };

// //   // Helper to subtract days from a date
// //   const subtractDays = (date, days) => {
// //     const result = new Date(date);
// //     result.setDate(result.getDate() - days);
// //     return result.toISOString().split('T')[0];
// //   };

// //   // Fetch sales data based on timeframe
// //   useEffect(() => {
// //     const fetchSalesData = async () => {
// //       try {
// //         setLoading(true);

// //         let tempChartData = [];
// //         let tempHourlyData = [];
// //         let totalRevenue = 0;
// //         let totalTransactions = 0;

// //         // Fetch best selling product
// //         try {
// //           const bestSellingResponse = await fetch(`http://localhost:5010/api/best-selling-product?storeId=${storeId}`);
// //           if (bestSellingResponse.ok) {
// //             const bestSellingResult = await bestSellingResponse.json();
// //             setBestSellingProduct(bestSellingResult);
// //           }
// //         } catch (err) {
// //           console.error('Error fetching best selling product:', err);
// //         }

// //         // Fetch hourly sales data
// //         try {
// //           const hourlyResponse = await fetch(`http://localhost:5010/api/hourly-sales`, {
// //             headers: { storeId: storeId },
// //           });
// //           if (hourlyResponse.ok) {
// //             const hourlyResult = await hourlyResponse.json();
// //             if (hourlyResult.hourly_sales) {
// //               tempHourlyData = hourlyResult.hourly_sales.map((item) => ({
// //                 hour: item.hour,
// //                 sales: item.sales_amount,
// //               }));
// //               setHourlyData(tempHourlyData);
// //             }
// //           }
// //         } catch (err) {
// //           console.warn('Could not fetch hourly data:', err);
// //         }

// //         if (timeframe === 'day') {
// //           // Fetch data for selected day
// //           try {
// //             const response = await fetch(`http://localhost:5010/api/daily-sales?date=${selectedDate}`, {
// //               headers: { storeId: storeId },
// //             });
// //             if (response.ok) {
// //               const result = await response.json();
// //               setSalesData(result);

// //               // Process data for the day
// //               if (result[selectedDate]) {
// //                 totalRevenue = result[selectedDate].total_amount || 0;
// //                 totalTransactions = result[selectedDate].sales ? result[selectedDate].sales.length : 0;

// //                 // Create hourly breakdown
// //                 if (result[selectedDate].sales && result[selectedDate].sales.length > 0 && (!tempHourlyData || tempHourlyData.length === 0)) {
// //                   const hourlyBreakdown = Array.from({ length: 24 }, (_, i) => ({
// //                     hour: i.toString().padStart(2, '0'),
// //                     sales: 0,
// //                   }));

// //                   result[selectedDate].sales.forEach((sale) => {
// //                     if (sale.date) {
// //                       const saleHour = new Date(sale.date).getHours();
// //                       hourlyBreakdown[saleHour].sales += sale.total_amount;
// //                     }
// //                   });

// //                   tempHourlyData = hourlyBreakdown;
// //                   setHourlyData(tempHourlyData);
// //                 }

// //                 // Create chart data for the day (hours)
// //                 tempChartData = tempHourlyData.map((hourData) => ({
// //                   label: `${hourData.hour}:00`,
// //                   value: hourData.sales,
// //                 }));
// //               }
// //             } else {
// //               console.error('Failed to fetch daily sales data');
// //             }
// //           } catch (error) {
// //             console.error('Error fetching daily sales:', error);
// //           }
// //         } else if (timeframe === 'week') {
// //           // Create array of last 7 days
// //           const dates = Array.from({ length: 7 }, (_, i) => subtractDays(selectedDate, 6 - i));
// //           tempChartData = [];

// //           // Fetch data for each day
// //           for (const date of dates) {
// //             try {
// //               const response = await fetch(`http://localhost:5010/api/daily-sales?date=${date}`, {
// //                 headers: { storeId: storeId },
// //               });
// //               if (response.ok) {
// //                 const result = await response.json();
// //                 const dailyRevenue = result[date]?.total_amount || 0;
// //                 const dailyTransactions = result[date]?.sales?.length || 0;

// //                 totalRevenue += dailyRevenue;
// //                 totalTransactions += dailyTransactions;

// //                 tempChartData.push({
// //                   label: new Date(date).toLocaleDateString('en-US', { weekday: 'short' }),
// //                   value: dailyRevenue,
// //                   transactions: dailyTransactions,
// //                   fullDate: date,
// //                 });
// //               }
// //             } catch (error) {
// //               console.error(`Error fetching data for ${date}:`, error);
// //               tempChartData.push({
// //                 label: new Date(date).toLocaleDateString('en-US', { weekday: 'short' }),
// //                 value: 0,
// //                 transactions: 0,
// //                 fullDate: date,
// //               });
// //             }
// //           }

// //           // Set sales data to the combined weekly data
// //           setSalesData({ weekly: { total_amount: totalRevenue, days: tempChartData } });
// //         } else if (timeframe === 'month') {
// //           // For month view, try to use daily-sales API with timeframe=month parameter
// //           try {
// //             const response = await fetch(`http://localhost:5010/api/daily-sale?timeframe=month`, {
// //               headers: { storeId: storeId },
// //             });
// //             if (response.ok) {
// //               const result = await response.json();

// //               // Process monthly data
// //               tempChartData = [];
// //               let monthlyTotal = 0;
// //               let monthlyTransactions = 0;

// //               // Convert the object-based response to an array
// //               Object.entries(result).forEach(([date, data]) => {
// //                 const dailyRevenue = data.total_amount || 0;
// //                 const dailyTransactions = data.sales?.length || 0;

// //                 monthlyTotal += dailyRevenue;
// //                 monthlyTransactions += dailyTransactions;

// //                 tempChartData.push({
// //                   label: new Date(date).getDate().toString(),
// //                   value: dailyRevenue,
// //                   transactions: dailyTransactions,
// //                   fullDate: date,
// //                 });
// //               });

// //               // Sort the chart data by date
// //               tempChartData.sort((a, b) => new Date(a.fullDate) - new Date(b.fullDate));

// //               totalRevenue = monthlyTotal;
// //               totalTransactions = monthlyTransactions;

// //               setSalesData({ monthly: { total_amount: monthlyTotal, days: tempChartData } });
// //             } else {
// //               // If the monthly endpoint fails, fall back to getting data for specific days
// //               const year = new Date(selectedDate).getFullYear();
// //               const month = new Date(selectedDate).getMonth();
// //               const daysInMonth = new Date(year, month + 1, 0).getDate();

// //               // Get data for some sample days in the month
// //               const sampleDays = [1, 5, 10, 15, 20, 25, daysInMonth]
// //                 .map((day) => {
// //                   if (day <= daysInMonth) {
// //                     return new Date(year, month, day).toISOString().split('T')[0];
// //                   }
// //                   return null;
// //                 })
// //                 .filter(Boolean);

// //               tempChartData = [];

// //               for (const date of sampleDays) {
// //                 try {
// //                   const response = await fetch(`http://localhost:5010/api/daily-sales?date=${date}`, {
// //                     headers: { storeId: storeId },
// //                   });
// //                   if (response.ok) {
// //                     const result = await response.json();
// //                     const dailyRevenue = result[date]?.total_amount || 0;
// //                     const dailyTransactions = result[date]?.sales?.length || 0;

// //                     totalRevenue += dailyRevenue;
// //                     totalTransactions += dailyTransactions;

// //                     tempChartData.push({
// //                       label: new Date(date).getDate().toString(),
// //                       value: dailyRevenue,
// //                       transactions: dailyTransactions,
// //                       fullDate: date,
// //                     });
// //                   }
// //                 } catch (error) {
// //                   console.error(`Error fetching data for ${date}:`, error);
// //                 }
// //               }

// //               // Sort chart data by date
// //               tempChartData.sort((a, b) => parseInt(a.label) - parseInt(b.label));

// //               setSalesData({ monthly: { total_amount: totalRevenue, days: tempChartData } });
// //             }
// //           } catch (error) {
// //             console.error('Error fetching monthly data:', error);
// //           }
// //         }

// //         // Set chart data
// //         setChartData(tempChartData);

// //         // Calculate average sale
// //         const averageSale = totalTransactions > 0 ? totalRevenue / totalTransactions : 0;

// //         // Set summary
// //         setSummary({
// //           totalRevenue,
// //           totalTransactions,
// //           averageSale,
// //         });

// //         // Create comparison data
// //         try {
// //           // Get the previous period date range
// //           let previousPeriodDate;
// //           if (timeframe === 'day') {
// //             previousPeriodDate = subtractDays(selectedDate, 1);
// //           } else if (timeframe === 'week') {
// //             previousPeriodDate = subtractDays(selectedDate, 7);
// //           } else {
// //             // For month, get the previous month
// //             const date = new Date(selectedDate);
// //             date.setMonth(date.getMonth() - 1);
// //             previousPeriodDate = date.toISOString().split('T')[0];
// //           }

// //           // Fetch data for the previous period
// //           const response = await fetch(`http://localhost:5010/api/daily-sales?date=${previousPeriodDate}`, {
// //             headers: { storeId: storeId },
// //           });
// //           if (response.ok) {
// //             const result = await response.json();
// //             const previousRevenue = result[previousPeriodDate]?.total_amount || 0;

// //             // For weekly/monthly, scale up the previous revenue
// //             const previousPeriodRevenue = timeframe === 'day' ? previousRevenue : previousRevenue * 7;
// //             const difference = previousPeriodRevenue > 0 ? ((totalRevenue - previousPeriodRevenue) / previousPeriodRevenue) * 100 : 100;

// //             setComparisonData({
// //               current: totalRevenue,
// //               previous: previousPeriodRevenue,
// //               difference,
// //             });
// //           }
// //         } catch (error) {
// //           console.error('Error fetching comparison data:', error);
// //           // Fall back to simulated comparison data
// //           const previousPeriodRevenue = totalRevenue * 0.9;
// //           const difference = ((totalRevenue - previousPeriodRevenue) / previousPeriodRevenue) * 100;

// //           setComparisonData({
// //             current: totalRevenue,
// //             previous: previousPeriodRevenue,
// //             difference,
// //           });
// //         }

// //         // Generate payment modes data
// //         if (salesData && timeframe === 'day' && selectedDate in salesData) {
// //           const sales = salesData[selectedDate].sales || [];

// //           // Mock payment data
// //           const paymentTypes = ['Cash', 'Credit Card', 'UPI', 'Debit Card'];
// //           const paymentData = paymentTypes.map((type) => {
// //             const amount = sales.reduce((sum, sale) => {
// //               const idx = sale.id.charCodeAt(0) % paymentTypes.length;
// //               if (paymentTypes[idx] === type) {
// //                 return sum + sale.total_amount;
// //               }
// //               return sum;
// //             }, 0);

// //             return {
// //               mode: type,
// //               amount,
// //               percentage: totalRevenue > 0 ? (amount / totalRevenue) * 100 : 0,
// //             };
// //           });

// //           setPaymentModeSummary(paymentData);
// //         }

// //         setLoading(false);
// //       } catch (err) {
// //         console.error('Error fetching data:', err);
// //         setError(err.message);
// //         setLoading(false);
// //       }
// //     };

// //     fetchSalesData();
// //   }, [timeframe, storeId, selectedDate]);

// //   // Export data to Excel/CSV
// //   const exportData = () => {
// //     if (!chartData || chartData.length === 0) return;

// //     // Convert data to CSV format
// //     let csvContent = 'data:text/csv;charset=utf-8,';

// //     if (timeframe === 'day') {
// //       csvContent += 'Hour,Sales Amount\n';
// //       chartData.forEach((item) => {
// //         csvContent += `${item.label},${item.value}\n`;
// //       });
// //     } else {
// //       csvContent += 'Date,Sales Amount\n';
// //       chartData.forEach((item) => {
// //         csvContent += `${item.fullDate || item.label},${item.value}\n`;
// //       });
// //     }

// //     // Create download link
// //     const encodedUri = encodeURI(csvContent);
// //     const link = document.createElement('a');
// //     link.setAttribute('href', encodedUri);
// //     link.setAttribute('download', `sales_report_${timeframe}_${selectedDate}.csv`);
// //     document.body.appendChild(link);
// //     link.click();
// //     document.body.removeChild(link);
// //   };

// //   // Get chart title based on timeframe
// //   const getChartTitle = () => {
// //     switch (timeframe) {
// //       case 'day':
// //         return `Sales on ${new Date(selectedDate).toLocaleDateString()} (Hourly)`;
// //       case 'week':
// //         return 'Weekly Sales (Last 7 Days)';
// //       case 'month':
// //         return `Monthly Sales (${new Date(selectedDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })})`;
// //       default:
// //         return 'Sales Trend';
// //     }
// //   };

// //   // Find the peak sales hour
// //   const getPeakSalesHour = () => {
// //     if (!hourlyData || hourlyData.length === 0) return null;

// //     const peakHour = hourlyData.reduce((max, item) => (item.sales > max.sales ? item : max), hourlyData[0]);
// //     return peakHour;
// //   };

// //   const peakHour = getPeakSalesHour();

// //   const formatHour = (hour) => {
// //     const h = parseInt(hour);
// //     return h === 0 ? '12 AM' : h === 12 ? '12 PM' : h < 12 ? `${h} AM` : `${h - 12} PM`;
// //   };

// //   // Change date and update timeframe
// //   const handleDateChange = (date) => {
// //     setSelectedDate(date);
// //   };

// //   // Custom tooltip for charts
// //   const CustomTooltip = ({ active, payload, label }) => {
// //     if (active && payload && payload.length) {
// //       return (
// //         <div className="bg-white p-2 border rounded shadow">
// //           <p className="font-semibold">{label}</p>
// //           <p className="text-blue-600">{`Sales: ${formatCurrency(payload[0].value)}`}</p>
// //           {payload[0].payload.transactions && (
// //             <p className="text-green-600">{`Transactions: ${payload[0].payload.transactions}`}</p>
// //           )}
// //         </div>
// //       );
// //     }
// //     return null;
// //   };

// //   return (
// //     <div className="p-6 max-w-6xl mx-auto bg-gray-50">
// //       <div className="flex justify-between items-center mb-6">
// //         <h1 className="text-2xl font-bold text-gray-800">Sales Performance Dashboard</h1>
// //         <button
// //           onClick={exportData}
// //           className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// //           disabled={loading}
// //         >
// //           <Download size={18} />
// //           Export Data
// //         </button>
// //       </div>

// //       {/* Date Range Selector */}
// //       <div className="bg-white p-4 rounded-lg shadow mb-6">
// //         <div className="flex items-center gap-2 mb-2">
// //           <Calendar size={20} className="text-blue-600" />
// //           <h2 className="text-lg font-semibold">Date Range</h2>
// //         </div>
// //         <div className="flex flex-wrap gap-3">
// //           <button
// //             onClick={() => setTimeframe('day')}
// //             className={`px-4 py-2 rounded ${timeframe === 'day' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
// //           >
// //             Daily
// //           </button>
// //           <button
// //             onClick={() => setTimeframe('week')}
// //             className={`px-4 py-2 rounded ${timeframe === 'week' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
// //           >
// //             Weekly
// //           </button>
// //           <button
// //             onClick={() => setTimeframe('month')}
// //             className={`px-4 py-2 rounded ${timeframe === 'month' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
// //           >
// //             Monthly
// //           </button>
// //           <input
// //             type="date"
// //             value={selectedDate}
// //             onChange={(e) => handleDateChange(e.target.value)}
// //             className="px-4 py-2 border rounded"
// //           />
// //         </div>
// //       </div>

// //       {loading ? (
// //         <div className="text-center py-12">
// //           <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
// //           <p className="mt-2 text-gray-600">Loading sales data...</p>
// //         </div>
// //       ) : (
// //         <>
// //           {/* Total Sales Summary */}
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// //             <div className="bg-white p-4 rounded-lg shadow">
// //               <div className="flex items-center gap-2 mb-2">
// //                 <DollarSign size={20} className="text-green-600" />
// //                 <h2 className="text-lg font-semibold">Total Revenue</h2>
// //               </div>
// //               <p className="text-3xl font-bold text-gray-800">{formatCurrency(summary.totalRevenue)}</p>
// //             </div>
// //             <div className="bg-white p-4 rounded-lg shadow">
// //               <div className="flex items-center gap-2 mb-2">
// //                 <TrendingUp size={20} className="text-blue-600" />
// //                 <h2 className="text-lg font-semibold">Transactions</h2>
// //               </div>
// //               <p className="text-3xl font-bold text-gray-800">{summary.totalTransactions}</p>
// //             </div>
// //             <div className="bg-white p-4 rounded-lg shadow">
// //               <div className="flex items-center gap-2 mb-2">
// //                 <DollarSign size={20} className="text-purple-600" />
// //                 <h2 className="text-lg font-semibold">Average Sale</h2>
// //               </div>
// //               <p className="text-3xl font-bold text-gray-800">{formatCurrency(summary.averageSale)}</p>
// //             </div>
// //           </div>

// //           {/* Sales Trend Graph */}
// //           <div className="bg-white p-4 rounded-lg shadow mb-6">
// //             <div className="flex items-center gap-2 mb-4">
// //               <TrendingUp size={20} className="text-blue-600" />
// //               <h2 className="text-lg font-semibold">{getChartTitle()}</h2>
// //             </div>
// //             <div className="h-64">
// //               {chartData.length > 0 ? (
// //                 <ResponsiveContainer width="100%" height="100%">
// //                   <LineChart
// //                     data={chartData}
// //                     margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
// //                   >
// //                     <CartesianGrid strokeDasharray="3 3" />
// //                     <XAxis dataKey="label" />
// //                     <YAxis />
// //                     <Tooltip content={<CustomTooltip />} />
// //                     <Legend />
// //                     <Line
// //                       type="monotone"
// //                       dataKey="value"
// //                       name="Sales"
// //                       stroke="#3B82F6"
// //                       strokeWidth={2}
// //                       dot={{ r: 4 }}
// //                       activeDot={{ r: 6 }}
// //                     />
// //                   </LineChart>
// //                 </ResponsiveContainer>
// //               ) : (
// //                 <div className="flex items-center justify-center h-full">
// //                   <p className="text-gray-500">No sales data available for the selected period</p>
// //                 </div>
// //               )}
// //             </div>
// //           </div>

// //           {/* Two Columns Layout */}
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// //             {/* Best Selling Products */}
// //             <div className="bg-white p-4 rounded-lg shadow">
// //               <div className="flex items-center gap-2 mb-4">
// //                 <Package size={20} className="text-green-600" />
// //                 <h2 className="text-lg font-semibold">Best Selling Product</h2>
// //               </div>
// //               {bestSellingProduct ? (
// //                 <div className="p-4 border rounded-lg">
// //                   <h3 className="text-xl font-bold text-gray-800">{bestSellingProduct.product_name}</h3>
// //                   <p className="text-gray-600">Quantity Sold: <span className="font-semibold">{bestSellingProduct.total_quantity}</span></p>
// //                   <p className="text-gray-600">Total Revenue: <span className="font-semibold">{formatCurrency(bestSellingProduct.total_amount)}</span></p>
// //                   <div className="mt-4 pt-4 border-t">
// //                     <p className="text-green-600 font-bold">
// //                       {Math.round((bestSellingProduct.total_amount / summary.totalRevenue) * 100) || 0}% of total revenue
// //                     </p>
// //                     <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
// //                       <div
// //                         className="bg-green-600 h-2.5 rounded-full"
// //                         style={{
// //                           width: `${Math.min(100, Math.round((bestSellingProduct.total_amount / summary.totalRevenue) * 100) || 0)}%`,
// //                         }}
// //                       ></div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ) : (
// //                 <p className="text-gray-500">No product data available</p>
// //               )}
// //             </div>

// //             {/* Comparison with Previous Periods */}
// //             <div className="bg-white p-4 rounded-lg shadow">
// //               <div className="flex items-center gap-2 mb-4">
// //                 <AlertTriangle size={20} className="text-amber-500" />
// //                 <h2 className="text-lg font-semibold">Period Comparison</h2>
// //               </div>
// //               {comparisonData ? (
// //                 <div className="grid grid-cols-2 gap-4">
// //                   <div className="p-4 border rounded-lg">
// //                     <h3 className="text-sm font-semibold text-gray-600">Current Period</h3>
// //                     <p className="text-2xl font-bold text-gray-800">{formatCurrency(comparisonData.current)}</p>
// //                   </div>
// //                   <div className="p-4 border rounded-lg">
// //                     <h3 className="text-sm font-semibold text-gray-600">Previous Period</h3>
// //                     <p className="text-2xl font-bold text-gray-800">{formatCurrency(comparisonData.previous)}</p>
// //                   </div>
// //                   <div className="col-span-2 p-4 border rounded-lg">
// //                     <h3 className="text-sm font-semibold text-gray-600">Difference</h3>
// //                     <p className={`text-2xl font-bold ${comparisonData.difference >= 0 ? 'text-green-600' : 'text-red-600'}`}>
// //                       {comparisonData.difference >= 0 ? '+' : ''}{comparisonData.difference.toFixed(2)}%
// //                     </p>
// //                   </div>
// //                 </div>
// //               ) : (
// //                 <p className="text-gray-500">Period comparison data not available</p>
// //               )}
// //             </div>
// //           </div>

// //           {/* Peak Sales Hours */}
// //           <div className="bg-white p-4 rounded-lg shadow mb-6">
// //             <div className="flex items-center gap-2 mb-4">
// //               <Clock size={20} className="text-blue-600" />
// //               <h2 className="text-lg font-semibold">Peak Sales Hours</h2>
// //             </div>
// //             <div className="h-72">
// //               {hourlyData.length > 0 && peakHour ? (
// //                 <>
// //                   <div className="mb-4">
// //                     <p className="text-gray-600">
// //                       Peak hour: <span className="font-bold text-blue-600">{formatHour(peakHour.hour)}</span> with{' '}
// //                       <span className="font-bold text-green-600">{formatCurrency(peakHour.sales)}</span> in sales
// //                     </p>
// //                   </div>
// //                   <ResponsiveContainer width="100%" height="85%">
// //                     <BarChart data={hourlyData}>
// //                       <CartesianGrid strokeDasharray="3 3" />
// //                       <XAxis
// //                         dataKey="hour"
// //                         tickFormatter={(hour) => {
// //                           const h = parseInt(hour);
// //                           return h % 3 === 0 ? formatHour(hour) : '';
// //                         }}
// //                       />
// //                       <YAxis />
// //                       <Tooltip
// //                         formatter={(value) => formatCurrency(value)}
// //                         labelFormatter={(hour) => formatHour(hour)}
// //                       />
// //                       <Bar
// //                         dataKey="sales"
// //                         name="Sales"
// //                         fill="#3B82F6"
// //                         radius={[4, 4, 0, 0]}
// //                         maxBarSize={50}
// //                       />
// //                     </BarChart>
// //                   </ResponsiveContainer>
// //                 </>
// //               ) : (
// //                 <div className="flex items-center justify-center h-full">
// //                   <p className="text-gray-500">No hourly data available</p>
// //                 </div>
// //               )}
// //             </div>
// //           </div>

// //           {/* Sales by Payment Mode */}
// //           <div className="bg-white p-4 rounded-lg shadow mb-6">
// //             <div className="flex items-center gap-2 mb-4">
// //               <DollarSign size={20} className="text-purple-600" />
// //               <h2 className="text-lg font-semibold">Sales by Payment Mode</h2>
// //             </div>
// //             {paymentModeSummary.length > 0 ? (
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 {paymentModeSummary.map((payment, index) => (
// //                   <div key={payment.mode} className="p-4 border rounded-lg">
// //                     <h3 className="font-semibold">{payment.mode}</h3>
// //                     <p className="text-xl mt-2 font-bold text-gray-800">{formatCurrency(payment.amount)}</p>
// //                     <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
// //                       <div
// //                         className={`h-2 rounded-full ${
// //                           index === 0
// //                             ? 'bg-blue-600'
// //                             : index === 1
// //                             ? 'bg-green-600'
// //                             : index === 2
// //                             ? 'bg-purple-600'
// //                             : 'bg-amber-500'
// //                         }`}
// //                         style={{ width: `${payment.percentage}%` }}
// //                       ></div>
// //                     </div>
// //                     <p className="text-sm mt-1 text-gray-600">{payment.percentage.toFixed(1)}% of total</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             ) : (
// //               <p className="text-gray-500">No payment mode data available</p>
// //             )}
// //           </div>

// //           {/* Worst Performing Categories */}
// //           <div className="bg-white p-4 rounded-lg shadow">
// //             <div className="flex items-center gap-2 mb-4">
// //               <AlertTriangle size={20} className="text-red-600" />
// //               <h2 className="text-lg font-semibold">Underperforming Categories</h2>
// //             </div>
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //               {/* Placeholder for underperforming categories */}
// //               <div className="p-4 border rounded-lg">
// //                 <h3 className="font-semibold text-red-600">Low Margin Products</h3>
// //                 <p className="text-gray-600 mt-2">Items with profit margins below 15%</p>
// //                 <div className="flex justify-between items-center mt-3">
// //                   <span className="text-sm text-gray-500">Action needed</span>
// //                   <div className="w-2 h-2 rounded-full bg-red-500"></div>
// //                 </div>
// //               </div>
// //               <div className="p-4 border rounded-lg">
// //                 <h3 className="font-semibold text-amber-500">Slow Moving Inventory</h3>
// //                 <p className="text-gray-600 mt-2">Products with no sales in the last 30 days</p>
// //                 <div className="flex justify-between items-center mt-3">
// //                   <span className="text-sm text-gray-500">Monitor</span>
// //                   <div className="w-2 h-2 rounded-full bg-amber-500"></div>
// //                 </div>
// //               </div>
// //               <div className="p-4 border rounded-lg">
// //                 <h3 className="font-semibold text-gray-500">Seasonal Products</h3>
// //                 <p className="text-gray-600 mt-2">Products with high season variability</p>
// //                 <div className="flex justify-between items-center mt-3">
// //                   <span className="text-sm text-gray-500">Plan ahead</span>
// //                   <div className="w-2 h-2 rounded-full bg-gray-500"></div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default SalesPerformanceDashboard;
// import React, { useState, useEffect, useMemo } from "react";
// import axios from "axios";
// import { Bar, Pie, Line, Scatter } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   PointElement,
//   LineElement,
// } from "chart.js";
// import {
//   AlertCircle,
//   Download,
//   Share2,
//   RefreshCw,
//   Filter,
// } from "lucide-react";

// // Register Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   PointElement,
//   LineElement
// );

// // API service
// const API_URL = "http://localhost:5010/api"; // Hardcoded for clarity; adjust if needed

// const fetchSales = async (startDate, endDate) => {
//   try {
//     const storeId = localStorage.getItem("storeId") || "STORE-1737889146-4514";
//     const response = await axios.get(`${API_URL}/daily-sales-employee`, {
//       params: { startDate, endDate },
//       headers: { storeId },
//     });
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response?.data?.message || "Failed to fetch sales data");
//   }
// };

// function Sales() {
//   const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });
//   const [salesData, setSalesData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [activeView, setActiveView] = useState("table");

//   // Set default date range to last 30 days
//   useEffect(() => {
//     const endDate = new Date();
//     const startDate = new Date();
//     startDate.setDate(startDate.getDate() - 30);
//     setDateRange({
//       startDate: startDate.toISOString().split("T")[0],
//       endDate: endDate.toISOString().split("T")[0],
//     });
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setDateRange((prev) => ({ ...prev, [name]: value }));
//   };

//   const fetchSalesData = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const data = await fetchSales(dateRange.startDate, dateRange.endDate);
//       setSalesData(data);
//     } catch (error) {
//       setError(error.message);
//       console.error("Error fetching sales data:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (dateRange.startDate && dateRange.endDate) {
//       fetchSalesData();
//     }
//   }, [dateRange.startDate, dateRange.endDate]);

//   // Sales summaries
//   const salesSummary = useMemo(() => {
//     if (!salesData.length) return null;
//     return {
//       totalSales: salesData.reduce((sum, sale) => sum + sale.total_amount, 0),
//       averageSale: salesData.reduce((sum, sale) => sum + sale.total_amount, 0) / salesData.length,
//       totalTransactions: salesData.length,
//       topEmployee: [...salesData]
//         .sort((a, b) => b.total_amount - a.total_amount)[0]?.userId || "N/A",
//     };
//   }, [salesData]);

//   // Chart data preparation
//   const chartData = useMemo(() => {
//     if (!salesData.length) return null;

//     const employeePerformance = {};
//     salesData.forEach((sale) => {
//       const empId = sale.userId || "Unknown";
//       employeePerformance[empId] = (employeePerformance[empId] || 0) + sale.total_amount;
//     });

//     const salesByDate = {};
//     salesData.forEach((sale) => {
//       const dateKey = new Date(sale.date).toLocaleDateString();
//       salesByDate[dateKey] = (salesByDate[dateKey] || 0) + sale.total_amount;
//     });

//     const employeeIds = Object.keys(employeePerformance);
//     const employeeSales = Object.values(employeePerformance);
//     const dateLabels = Object.keys(salesByDate).sort((a, b) => new Date(a) - new Date(b));
//     const dateSales = dateLabels.map((date) => salesByDate[date]);

//     const colors = [
//       "rgba(75, 192, 192, 0.6)",
//       "rgba(255, 99, 132, 0.6)",
//       "rgba(54, 162, 235, 0.6)",
//       "rgba(255, 206, 86, 0.6)",
//       "rgba(153, 102, 255, 0.6)",
//       "rgba(255, 159, 64, 0.6)",
//     ];

//     return {
//       barChart: {
//         labels: employeeIds.map((id) => `Employee ${id}`),
//         datasets: [
//           {
//             label: "Total Sales ($)",
//             data: employeeSales,
//             backgroundColor: colors,
//             borderColor: colors.map((color) => color.replace("0.6", "1")),
//             borderWidth: 1,
//           },
//         ],
//       },
//       pieChart: {
//         labels: employeeIds.map((id) => `Employee ${id}`),
//         datasets: [
//           {
//             label: "Sales Distribution",
//             data: employeeSales,
//             backgroundColor: colors,
//             hoverOffset: 4,
//           },
//         ],
//       },
//       lineChart: {
//         labels: dateLabels,
//         datasets: [
//           {
//             label: "Daily Sales ($)",
//             data: dateSales,
//             borderColor: "rgba(75, 192, 192, 1)",
//             backgroundColor: "rgba(75, 192, 192, 0.2)",
//             borderWidth: 2,
//             tension: 0.4,
//             fill: true,
//           },
//         ],
//       },
//       scatterChart: {
//         datasets: [
//           {
//             label: "Sales Performance",
//             data: salesData.map((sale) => ({
//               x: parseInt(sale.userId || "0"),
//               y: sale.total_amount,
//               date: new Date(sale.date).toLocaleDateString(),
//             })),
//             backgroundColor: "rgba(153, 102, 255, 0.8)",
//             pointRadius: 6,
//             pointHoverRadius: 8,
//           },
//         ],
//       },
//     };
//   }, [salesData]);

//   const chartOptions = {
//     bar: {
//       responsive: true,
//       plugins: {
//         legend: { position: "top" },
//         tooltip: { callbacks: { label: (context) => `$${context.parsed.y.toFixed(2)}` } },
//       },
//       scales: { y: { beginAtZero: true, title: { display: true, text: "Total Sales ($)" } } },
//     },
//     pie: {
//       responsive: true,
//       plugins: {
//         legend: { position: "right" },
//         tooltip: {
//           callbacks: {
//             label: (context) =>
//               `$${context.parsed.toFixed(2)} (${(
//                 (context.parsed / context.dataset.data.reduce((a, b) => a + b, 0)) * 100
//               ).toFixed(1)}%)`,
//           },
//         },
//       },
//     },
//     line: {
//       responsive: true,
//       plugins: {
//         legend: { position: "top" },
//         tooltip: { callbacks: { label: (context) => `$${context.parsed.y.toFixed(2)}` } },
//       },
//       scales: {
//         x: { title: { display: true, text: "Date" } },
//         y: { beginAtZero: true, title: { display: true, text: "Sales Amount ($)" } },
//       },
//     },
//     scatter: {
//       responsive: true,
//       plugins: {
//         legend: { position: "top" },
//         tooltip: {
//           callbacks: {
//             label: (context) => [
//               `Employee: ${context.raw.x}`,
//               `Amount: $${context.raw.y.toFixed(2)}`,
//               `Date: ${context.raw.date}`,
//             ],
//           },
//         },
//       },
//       scales: {
//         x: { title: { display: true, text: "Employee ID" }, ticks: { stepSize: 1 } },
//         y: { title: { display: true, text: "Sale Amount ($)" } },
//       },
//     },
//   };

//   const handleExportCSV = () => {
//     if (!salesData.length) return;
//     const headers = ["Date", "Total Amount", "Employee ID", "Products"];
//     const csvContent = [
//       headers.join(","),
//       ...salesData.map((sale) =>
//         [
//           sale.date,
//           sale.total_amount.toFixed(2),
//           sale.userId,
//           `"${sale.products.map((p) => `${p.name} (${p.quantity})`).join("; ")}"`,
//         ].join(",")
//       ),
//     ].join("\n");
//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.setAttribute("href", url);
//     link.setAttribute("download", `sales_report_${dateRange.startDate}_to_${dateRange.endDate}.csv`);
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleShare = () => {
//     if (navigator.share) {
//       navigator
//         .share({
//           title: "Sales Report",
//           text: `Sales Report from ${dateRange.startDate} to ${dateRange.endDate}`,
//           url: window.location.href,
//         })
//         .then(() => console.log("Share successful"))
//         .catch((error) => console.error("Error sharing:", error));
//     } else {
//       alert("Sharing is not supported on this browser.");
//     }
//   };

//   return (
//     <div className="font-sans max-w-6xl mx-auto p-5 bg-gray-100 text-gray-800">
//       <header className="flex justify-between items-center mb-5 pb-2 border-b border-gray-200">
//         <h1 className="text-2xl font-semibold text-gray-800">Sales Analytics Dashboard</h1>
//         <div className="flex gap-2">
//           <button
//             className={`px-4 py-2 rounded text-sm font-medium transition-all ${
//               activeView === "table" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//             onClick={() => setActiveView("table")}
//           >
//             Table View
//           </button>
//           <button
//             className={`px-4 py-2 rounded text-sm font-medium transition-all ${
//               activeView === "charts" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//             onClick={() => setActiveView("charts")}
//           >
//             Charts View
//           </button>
//         </div>
//       </header>

//       <section className="mb-5 bg-white rounded-lg shadow p-4">
//         <div className="w-full">
//           <div className="flex items-center mb-2">
//             <h2 className="flex items-center gap-2 text-lg font-medium text-gray-800">
//               <Filter size={18} /> Filter Data
//             </h2>
//           </div>
//           <div className="flex flex-wrap gap-4 items-center">
//             <label className="flex flex-col gap-1 text-sm font-medium">
//               Start Date:
//               <input
//                 type="date"
//                 name="startDate"
//                 value={dateRange.startDate}
//                 onChange={handleInputChange}
//                 className="p-2 border border-gray-300 rounded text-sm"
//               />
//             </label>
//             <label className="flex flex-col gap-1 text-sm font-medium">
//               End Date:
//               <input
//                 type="date"
//                 name="endDate"
//                 value={dateRange.endDate}
//                 onChange={handleInputChange}
//                 className="p-2 border border-gray-300 rounded text-sm"
//               />
//             </label>
//             <button
//               onClick={fetchSalesData}
//               disabled={isLoading || !dateRange.startDate || !dateRange.endDate}
//               className={`px-5 py-2 rounded text-sm font-medium text-white flex items-center gap-2 ${
//                 isLoading || !dateRange.startDate || !dateRange.endDate
//                   ? "bg-gray-500 cursor-not-allowed opacity-70"
//                   : "bg-green-600 hover:bg-green-700"
//               }`}
//             >
//               {isLoading ? (
//                 <RefreshCw className="animate-spin" size={16} />
//               ) : (
//                 "Generate Report"
//               )}
//             </button>
//           </div>
//         </div>
//       </section>

//       {error && (
//         <div className="flex items-center gap-2 bg-red-100 text-red-800 p-3 rounded mb-5">
//           <AlertCircle size={18} />
//           <p className="m-0 text-sm">{error}</p>
//         </div>
//       )}

//       {salesSummary && (
//         <section className="mb-5">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
//               <h3 className="text-sm font-medium text-gray-600 mb-2">Total Sales</h3>
//               <p className="text-2xl font-bold text-blue-600">${salesSummary.totalSales.toFixed(2)}</p>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
//               <h3 className="text-sm font-medium text-gray-600 mb-2">Average Sale</h3>
//               <p className="text-2xl font-bold text-blue-600">${salesSummary.averageSale.toFixed(2)}</p>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
//               <h3 className="text-sm font-medium text-gray-600 mb-2">Transactions</h3>
//               <p className="text-2xl font-bold text-blue-600">{salesSummary.totalTransactions}</p>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
//               <h3 className="text-sm font-medium text-gray-600 mb-2">Top Performer</h3>
//               <p className="text-2xl font-bold text-blue-600">Employee {salesSummary.topEmployee}</p>
//             </div>
//           </div>
//         </section>
//       )}

//       {activeView === "table" && salesData.length > 0 && (
//         <section className="mb-5 bg-white rounded-lg shadow p-4">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-medium text-gray-800">Sales Transactions</h2>
//             <button
//               onClick={handleExportCSV}
//               className="flex items-center gap-2 px-3 py-2 bg-gray-600 text-white rounded text-sm hover:bg-gray-700"
//             >
//               <Download size={16} /> Export CSV
//             </button>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm text-left border-collapse">
//               <thead>
//                 <tr className="border-b-2 border-gray-200">
//                   <th className="p-3 text-gray-700 font-semibold">Date & Time</th>
//                   <th className="p-3 text-gray-700 font-semibold">Amount</th>
//                   <th className="p-3 text-gray-700 font-semibold">Employee ID</th>
//                   <th className="p-3 text-gray-700 font-semibold">Products</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {salesData.map((sale, index) => (
//                   <tr key={index} className="border-b border-gray-200">
//                     <td className="p-3">{new Date(sale.date).toLocaleString()}</td>
//                     <td className="p-3 text-right font-medium text-green-600">${sale.total_amount.toFixed(2)}</td>
//                     <td className="p-3">{sale.userId}</td>
//                     <td className="p-3">{sale.products.map((p) => `${p.name} (${p.quantity})`).join(", ")}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>
//       )}

//       {activeView === "charts" && chartData && (
//         <section className="mb-5">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
//             <div className="bg-white p-4 rounded-lg shadow">
//               <h3 className="text-sm font-medium text-gray-600 mb-2">Sales by Employee</h3>
//               <div className="h-72">
//                 <Bar data={chartData.barChart} options={chartOptions.bar} />
//               </div>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow">
//               <h3 className="text-sm font-medium text-gray-600 mb-2">Sales Distribution</h3>
//               <div className="h-72">
//                 <Pie data={chartData.pieChart} options={chartOptions.pie} />
//               </div>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow">
//               <h3 className="text-sm font-medium text-gray-600 mb-2">Sales Trend Over Time</h3>
//               <div className="h-72">
//                 <Line data={chartData.lineChart} options={chartOptions.line} />
//               </div>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow">
//               <h3 className="text-sm font-medium text-gray-600 mb-2">Employee Performance Analysis</h3>
//               <div className="h-72">
//                 <Scatter data={chartData.scatterChart} options={chartOptions.scatter} />
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {salesData.length === 0 && !isLoading && !error && (
//         <div className="text-center py-10 text-gray-600 text-base">
//           <p>No sales data available for the selected date range. Adjust your filters and try again.</p>
//         </div>
//       )}

//       <footer className="flex justify-between items-center mt-8 pt-4 border-t border-gray-200">
//         <button
//           onClick={handleShare}
//           className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
//         >
//           <Share2 size={16} /> Share Report
//         </button>
//         <p className="m-0 text-sm text-gray-600">
//           Data last updated: {new Date().toLocaleString()}
//         </p>
//       </footer>
//     </div>
//   );
// }

// export default Sales;

import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Bar, Pie, Line, Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
import {
  AlertCircle,
  Download,
  Share2,
  RefreshCw,
  Filter,
} from "lucide-react";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

// API service
const API_URL = "http://localhost:5010/api";

const fetchSales = async (startDate, endDate) => {
  try {
    const storeId = localStorage.getItem("storeId") || "STORE-1737889146-4514";
    const response = await axios.get(`${API_URL}/daily-sales-employee`, {
      params: { startDate, endDate },
      headers: { "storeId": storeId }, // Consistent case
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch sales data");
  }
};

function Sales() {
  const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });
  const [salesData, setSalesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeView, setActiveView] = useState("table");

  useEffect(() => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 30);
    setDateRange({
      startDate: startDate.toISOString().split("T")[0],
      endDate: endDate.toISOString().split("T")[0],
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDateRange((prev) => ({ ...prev, [name]: value }));
  };

  const fetchSalesData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchSales(dateRange.startDate, dateRange.endDate);
      setSalesData(data);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching sales data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      fetchSalesData();
    }
  }, [dateRange.startDate, dateRange.endDate]);

  const salesSummary = useMemo(() => {
    if (!salesData.length) return null;
    return {
      totalSales: salesData.reduce((sum, sale) => sum + sale.total_amount, 0),
      averageSale: salesData.reduce((sum, sale) => sum + sale.total_amount, 0) / salesData.length,
      totalTransactions: salesData.length,
      topEmployee: [...salesData]
        .sort((a, b) => b.total_amount - a.total_amount)[0]?.userId || "N/A",
    };
  }, [salesData]);

  const chartData = useMemo(() => {
    if (!salesData.length) return null;

    const employeePerformance = {};
    salesData.forEach((sale) => {
      const empId = sale.userId || "Unknown";
      employeePerformance[empId] = (employeePerformance[empId] || 0) + sale.total_amount;
    });

    const salesByDate = {};
    salesData.forEach((sale) => {
      const dateKey = new Date(sale.date).toLocaleDateString();
      salesByDate[dateKey] = (salesByDate[dateKey] || 0) + sale.total_amount;
    });

    const employeeIds = Object.keys(employeePerformance);
    const employeeSales = Object.values(employeePerformance);
    const dateLabels = Object.keys(salesByDate).sort((a, b) => new Date(a) - new Date(b));
    const dateSales = dateLabels.map((date) => salesByDate[date]);

    const colors = [
      "rgba(75, 192, 192, 0.6)",
      "rgba(255, 99, 132, 0.6)",
      "rgba(54, 162, 235, 0.6)",
      "rgba(255, 206, 86, 0.6)",
      "rgba(153, 102, 255, 0.6)",
      "rgba(255, 159, 64, 0.6)",
    ];

    return {
      barChart: {
        labels: employeeIds.map((id) => `Employee ${id}`),
        datasets: [
          {
            label: "Total Sales ($)",
            data: employeeSales,
            backgroundColor: colors,
            borderColor: colors.map((color) => color.replace("0.6", "1")),
            borderWidth: 1,
          },
        ],
      },
      pieChart: {
        labels: employeeIds.map((id) => `Employee ${id}`),
        datasets: [
          {
            label: "Sales Distribution",
            data: employeeSales,
            backgroundColor: colors,
            hoverOffset: 4,
          },
        ],
      },
      lineChart: {
        labels: dateLabels,
        datasets: [
          {
            label: "Daily Sales ($)",
            data: dateSales,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
            tension: 0.4,
            fill: true,
          },
        ],
      },
      scatterChart: {
        datasets: [
          {
            label: "Sales Performance",
            data: salesData.map((sale) => ({
              x: parseInt(sale.userId || "0"),
              y: sale.total_amount,
              date: new Date(sale.date).toLocaleDateString(),
            })),
            backgroundColor: "rgba(153, 102, 255, 0.8)",
            pointRadius: 6,
            pointHoverRadius: 8,
          },
        ],
      },
    };
  }, [salesData]);

  const chartOptions = {
    bar: {
      responsive: true,
      plugins: {
        legend: { position: "top" },
        tooltip: { callbacks: { label: (context) => `$${context.parsed.y.toFixed(2)}` } },
      },
      scales: { y: { beginAtZero: true, title: { display: true, text: "Total Sales ($)" } } },
    },
    pie: {
      responsive: true,
      plugins: {
        legend: { position: "right" },
        tooltip: {
          callbacks: {
            label: (context) =>
              `$${context.parsed.toFixed(2)} (${(
                (context.parsed / context.dataset.data.reduce((a, b) => a + b, 0)) * 100
              ).toFixed(1)}%)`,
          },
        },
      },
    },
    line: {
      responsive: true,
      plugins: {
        legend: { position: "top" },
        tooltip: { callbacks: { label: (context) => `$${context.parsed.y.toFixed(2)}` } },
      },
      scales: {
        x: { title: { display: true, text: "Date" } },
        y: { beginAtZero: true, title: { display: true, text: "Sales Amount ($)" } },
      },
    },
    scatter: {
      responsive: true,
      plugins: {
        legend: { position: "top" },
        tooltip: {
          callbacks: {
            label: (context) => [
              `Employee: ${context.raw.x}`,
              `Amount: $${context.raw.y.toFixed(2)}`,
              `Date: ${context.raw.date}`,
            ],
          },
        },
      },
      scales: {
        x: { title: { display: true, text: "Employee ID" }, ticks: { stepSize: 1 } },
        y: { title: { display: true, text: "Sale Amount ($)" } },
      },
    },
  };

  const handleExportCSV = () => {
    if (!salesData.length) return;
    const headers = ["Date", "Total Amount", "Employee ID", "Products"];
    const csvContent = [
      headers.join(","),
      ...salesData.map((sale) =>
        [
          sale.date,
          sale.total_amount.toFixed(2),
          sale.userId,
          `"${sale.products.map((p) => `${p.name} (${p.quantity})`).join("; ")}"`,
        ].join(",")
      ),
    ].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `sales_report_${dateRange.startDate}_to_${dateRange.endDate}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Sales Report",
          text: `Sales Report from ${dateRange.startDate} to ${dateRange.endDate}`,
          url: window.location.href,
        })
        .then(() => console.log("Share successful"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  return (
    <div className="font-sans max-w-6xl mx-auto p-5 bg-gray-100 text-gray-800">
      <header className="flex justify-between items-center mb-5 pb-2 border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-800">Sales Analytics Dashboard</h1>
        <div className="flex gap-2">
          <button
            className={`px-4 py-2 rounded text-sm font-medium transition-all ${
              activeView === "table" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveView("table")}
          >
            Table View
          </button>
          <button
            className={`px-4 py-2 rounded text-sm font-medium transition-all ${
              activeView === "charts" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveView("charts")}
          >
            Charts View
          </button>
        </div>
      </header>

      <section className="mb-5 bg-white rounded-lg shadow p-4">
        <div className="w-full">
          <div className="flex items-center mb-2">
            <h2 className="flex items-center gap-2 text-lg font-medium text-gray-800">
              <Filter size={18} /> Filter Data
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <label className="flex flex-col gap-1 text-sm font-medium">
              Start Date:
              <input
                type="date"
                name="startDate"
                value={dateRange.startDate}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded text-sm"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm font-medium">
              End Date:
              <input
                type="date"
                name="endDate"
                value={dateRange.endDate}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded text-sm"
              />
            </label>
            <button
              onClick={fetchSalesData}
              disabled={isLoading || !dateRange.startDate || !dateRange.endDate}
              className={`px-5 py-2 rounded text-sm font-medium text-white flex items-center gap-2 ${
                isLoading || !dateRange.startDate || !dateRange.endDate
                  ? "bg-gray-500 cursor-not-allowed opacity-70"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {isLoading ? (
                <RefreshCw className="animate-spin" size={16} />
              ) : (
                "Generate Report"
              )}
            </button>
          </div>
        </div>
      </section>

      {error && (
        <div className="flex items-center gap-2 bg-red-100 text-red-800 p-3 rounded mb-5">
          <AlertCircle size={18} />
          <p className="m-0 text-sm">{error}</p>
        </div>
      )}

      {salesSummary && (
        <section className="mb-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Total Sales</h3>
              <p className="text-2xl font-bold text-blue-600">${salesSummary.totalSales.toFixed(2)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Average Sale</h3>
              <p className="text-2xl font-bold text-blue-600">${salesSummary.averageSale.toFixed(2)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Transactions</h3>
              <p className="text-2xl font-bold text-blue-600">{salesSummary.totalTransactions}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Top Performer</h3>
              <p className="text-2xl font-bold text-blue-600">Employee {salesSummary.topEmployee}</p>
            </div>
          </div>
        </section>
      )}

      {activeView === "table" && salesData.length > 0 && (
        <section className="mb-5 bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-800">Sales Transactions</h2>
            <button
              onClick={handleExportCSV}
              className="flex items-center gap-2 px-3 py-2 bg-gray-600 text-white rounded text-sm hover:bg-gray-700"
            >
              <Download size={16} /> Export CSV
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="p-3 text-gray-700 font-semibold">Date & Time</th>
                  <th className="p-3 text-gray-700 font-semibold">Amount</th>
                  <th className="p-3 text-gray-700 font-semibold">Employee ID</th>
                  <th className="p-3 text-gray-700 font-semibold">Products</th>
                </tr>
              </thead>
              <tbody>
                {salesData.map((sale, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="p-3">{new Date(sale.date).toLocaleString()}</td>
                    <td className="p-3 text-right font-medium text-green-600">${sale.total_amount.toFixed(2)}</td>
                    <td className="p-3">{sale.userId}</td>
                    <td className="p-3">{sale.products.map((p) => `${p.name} (${p.quantity})`).join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {activeView === "charts" && chartData && (
        <section className="mb-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Sales by Employee</h3>
              <div className="h-72">
                <Bar data={chartData.barChart} options={chartOptions.bar} />
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Sales Distribution</h3>
              <div className="h-72">
                <Pie data={chartData.pieChart} options={chartOptions.pie} />
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Sales Trend Over Time</h3>
              <div className="h-72">
                <Line data={chartData.lineChart} options={chartOptions.line} />
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Employee Performance Analysis</h3>
              <div className="h-72">
                <Scatter data={chartData.scatterChart} options={chartOptions.scatter} />
              </div>
            </div>
          </div>
        </section>
      )}

      {salesData.length === 0 && !isLoading && !error && (
        <div className="text-center py-10 text-gray-600 text-base">
          <p>No sales data available for the selected date range. Adjust your filters and try again.</p>
        </div>
      )}

      <footer className="flex justify-between items-center mt-8 pt-4 border-t border-gray-200">
        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
        >
          <Share2 size={16} /> Share Report
        </button>
        <p className="m-0 text-sm text-gray-600">
          Data last updated: {new Date().toLocaleString()}
        </p>
      </footer>
    </div>
  );
}

export default Sales;