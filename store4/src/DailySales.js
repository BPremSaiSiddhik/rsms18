// import React, { useState, useEffect, useContext } from "react";
// import { StoreContext } from "./StoreContext"; // Assuming StoreContext provides storeId

// const DailySales = () => {
//   const [salesData, setSalesData] = useState({});
//   const [error, setError] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(getTodayDate()); // Default to today's date
//   const { storeId } = useContext(StoreContext); // Using storeId from context

//   // Get today's date in YYYY-MM-DD format
//   function getTodayDate() {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = String(today.getMonth() + 1).padStart(2, '0');
//     const day = String(today.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   }

//   useEffect(() => {
//     const fetchSalesData = async () => {
//       if (!storeId) {
//         setError("Store ID is required.");
//         return;
//       }
  
//       try {
//         const response = await fetch(
//           `http://localhost:5010/api/daily-sales?date=${selectedDate}`, // Pass selectedDate in the query
//           {
//             headers: { storeId }, // Send storeId in headers
//           }
//         );
  
//         if (!response.ok) {
//           throw new Error("Failed to fetch daily sales");
//         }
  
//         const data = await response.json();
  
//         if (data.error) {
//           setError(data.error);
//         } else {
//           setSalesData(data);
//         }
//       } catch (error) {
//         setError("Failed to fetch sales data.");
//         setSalesData({});
//       }
//     };
  
//     if (storeId) {
//       fetchSalesData();
//     }
//   }, [storeId, selectedDate]); // Add selectedDate to the dependency array

//   // Handle date selection
//   const handleDateChange = (e) => {
//     setSelectedDate(e.target.value);
//   };

//   // Filter the sales data based on the selected date
//   const filteredSalesData = salesData[selectedDate];

//   return (
//     <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-8 transition-all duration-300 hover:shadow-2xl">
//       <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8 tracking-wide">
//         Daily Sales History for {storeId || "Store"}
//       </h2>

//       {error && <p className="text-red-500 text-center text-xl mb-6">{error}</p>}

//       <div className="flex justify-center items-center mb-6">
//         <label htmlFor="date" className="mr-4 text-lg text-gray-700">
//           Select Date:
//         </label>
//         <input
//           type="date"
//           id="date"
//           value={selectedDate}
//           onChange={handleDateChange}
//           className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {filteredSalesData ? (
//         <div className="mt-8">
//           <h3 className="text-2xl font-bold text-center text-yellow-500 mb-6">
//             Sales for {selectedDate}
//           </h3>
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-gray-800 text-white uppercase text-sm tracking-wider">
//                 <th className="px-6 py-4 text-center">Total Amount</th>
//                 <th className="px-6 py-4 text-center">Time</th>
//                 <th className="px-6 py-4 text-center">Products Sold</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredSalesData.sales.map((sale) => (
//                 <tr key={sale.id} className="bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
//                   <td className="px-6 py-4 text-center text-blue-600">₹{sale.total_amount.toFixed(2)}</td>
//                   <td className="px-6 py-4 text-center">{sale.date}</td>
//                   <td className="px-6 py-4">
//                     <ul className="space-y-2">
//                       {sale.products.map((product, index) => (
//                         <li key={index} className="text-gray-700">
//                           {product.name} (x{product.quantity}) - ₹{product.total_price.toFixed(2)}
//                         </li>
//                       ))}
//                     </ul>
//                   </td>
//                 </tr>
//               ))}
//               <tr className="bg-gray-200 font-semibold">
//                 <td className="px-6 py-4 text-center">Total for {selectedDate}</td>
//                 <td className="px-6 py-4"></td>
//                 <td className="px-6 py-4 text-center text-blue-600">₹{filteredSalesData.total_amount.toFixed(2)}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <p className="text-center text-gray-600 text-xl mt-8">
//           No sales data available for {selectedDate}.
//         </p>
//       )}
//     </div>
//   );
// };

// export default DailySales;


import React, { useState, useEffect, useContext, useMemo } from "react";
import { StoreContext } from "./StoreContext";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Calendar, ChevronLeft, ChevronRight, DollarSign, BarChart2, Clock, Package } from "lucide-react";

const DailySales = () => {
  const [salesData, setSalesData] = useState({});
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(getTodayDate());
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState("table"); // "table" or "chart"
  const { storeId } = useContext(StoreContext);

  // Get today's date in YYYY-MM-DD format
  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // Change date by one day
  const changeDate = (direction) => {
    const current = new Date(selectedDate);
    const newDate = new Date(current);
    
    if (direction === "next") {
      newDate.setDate(current.getDate() + 1);
    } else {
      newDate.setDate(current.getDate() - 1);
    }
    
    const year = newDate.getFullYear();
    const month = String(newDate.getMonth() + 1).padStart(2, '0');
    const day = String(newDate.getDate()).padStart(2, '0');
    setSelectedDate(`${year}-${month}-${day}`);
  };

  useEffect(() => {
    const fetchSalesData = async () => {
      if (!storeId) {
        setError("Store ID is required.");
        return;
      }
  
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5010/api/daily-sales?date=${selectedDate}`,
          {
            headers: { storeId },
          }
        );
  
        if (!response.ok) {
          throw new Error("Failed to fetch daily sales");
        }
  
        const data = await response.json();
  
        if (data.error) {
          setError(data.error);
        } else {
          setSalesData(data);
          setError(null);
        }
      } catch (error) {
        setError("Failed to fetch sales data.");
        setSalesData({});
      } finally {
        setIsLoading(false);
      }
    };
  
    if (storeId) {
      fetchSalesData();
    }
  }, [storeId, selectedDate]);

  // Handle date selection
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  // Format selected date for display
  const formattedDate = useMemo(() => {
    const date = new Date(selectedDate);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }, [selectedDate]);

  // Filter the sales data based on the selected date
  const filteredSalesData = salesData[selectedDate];

  // Prepare chart data
  const chartData = useMemo(() => {
    if (!filteredSalesData || !filteredSalesData.sales) return [];
    
    return filteredSalesData.sales.map(sale => {
      // Extract hour from the sale date (assuming format like "2023-05-15 14:30:00")
      const timeStr = sale.date.split(' ')[1] || "00:00:00";
      const hour = timeStr.split(':')[0];
      
      return {
        time: `${hour}:00`,
        amount: sale.total_amount,
        id: sale.id
      };
    });
  }, [filteredSalesData]);

  // Calculate summary data
  const summaryData = useMemo(() => {
    if (!filteredSalesData || !filteredSalesData.sales) {
      return { totalSales: 0, totalProducts: 0, avgSale: 0 };
    }
    
    const totalSales = filteredSalesData.total_amount;
    let totalProducts = 0;
    
    filteredSalesData.sales.forEach(sale => {
      sale.products.forEach(product => {
        totalProducts += product.quantity;
      });
    });
    
    const avgSale = filteredSalesData.sales.length > 0 
      ? totalSales / filteredSalesData.sales.length 
      : 0;
    
    return { totalSales, totalProducts, avgSale };
  }, [filteredSalesData]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl p-8 mt-8"
    >
      <motion.div 
        className="flex items-center justify-between mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Daily Sales Dashboard
          </span>
        </h2>

        <div className="flex space-x-4">
          <button 
            onClick={() => setViewMode("table")}
            className={`px-4 py-2 rounded-lg flex items-center ${viewMode === "table" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
          >
            <Clock className="w-5 h-5 mr-2" />
            Timeline
          </button>
          <button 
            onClick={() => setViewMode("chart")}
            className={`px-4 py-2 rounded-lg flex items-center ${viewMode === "chart" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
          >
            <BarChart2 className="w-5 h-5 mr-2" />
            Chart
          </button>
        </div>
      </motion.div>

      {error && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded"
        >
          <p className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        </motion.div>
      )}

      <motion.div 
        className="bg-gray-50 p-6 rounded-xl shadow-inner mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Calendar className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-xl font-semibold">{formattedDate}</h3>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => changeDate("prev")}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <button 
              onClick={() => changeDate("next")}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => setSelectedDate(getTodayDate())}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Today
            </button>
          </div>
        </div>
      </motion.div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : filteredSalesData ? (
        <>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div 
              className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center">
                <div className="p-3 bg-white bg-opacity-30 rounded-lg mr-4">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white text-opacity-90">Total Sales</h3>
                  <p className="text-2xl font-bold">₹{summaryData.totalSales.toFixed(2)}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-lg"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center">
                <div className="p-3 bg-white bg-opacity-30 rounded-lg mr-4">
                  <Package className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white text-opacity-90">Products Sold</h3>
                  <p className="text-2xl font-bold">{summaryData.totalProducts}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center">
                <div className="p-3 bg-white bg-opacity-30 rounded-lg mr-4">
                  <BarChart2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white text-opacity-90">Avg. Sale</h3>
                  <p className="text-2xl font-bold">₹{summaryData.avgSale.toFixed(2)}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <AnimatePresence mode="wait">
            {viewMode === "table" ? (
              <motion.div 
                key="table-view"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-xl shadow-lg"
              >
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                      <th className="px-6 py-4 text-center">Amount</th>
                      <th className="px-6 py-4 text-center">Time</th>
                      <th className="px-6 py-4 text-center">Products</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSalesData.sales.map((sale, index) => (
                      <motion.tr 
                        key={sale.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white even:bg-gray-50 hover:bg-blue-50 transition-colors duration-200"
                      >
                        <td className="px-6 py-4 text-center">
                          <span className="text-blue-600 font-medium">₹{sale.total_amount.toFixed(2)}</span>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-600">{sale.date}</td>
                        <td className="px-6 py-4">
                          <div className="space-y-2">
                            {sale.products.map((product, idx) => (
                              <div 
                                key={idx} 
                                className="flex justify-between bg-gray-100 p-2 rounded"
                              >
                                <span className="text-gray-800 font-medium">
                                  {product.name} <span className="text-blue-500">x{product.quantity}</span>
                                </span>
                                <span className="text-gray-700">₹{product.total_price.toFixed(2)}</span>
                              </div>
                            ))}
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                    <motion.tr 
                      className="bg-gradient-to-r from-gray-200 to-gray-300 font-semibold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <td className="px-6 py-4 text-center">Total</td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-blue-600 text-xl font-bold">
                          ₹{filteredSalesData.total_amount.toFixed(2)}
                        </span>
                      </td>
                    </motion.tr>
                  </tbody>
                </table>
              </motion.div>
            ) : (
              <motion.div 
                key="chart-view"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Sales Distribution</h3>
                <div className="h-64 md:h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip 
                        formatter={(value) => [`₹${value}`, 'Amount']}
                        contentStyle={{ 
                          backgroundColor: '#fff',
                          border: '1px solid #e2e8f0',
                          borderRadius: '0.5rem',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Bar 
                        dataKey="amount" 
                        fill="#3b82f6" 
                        radius={[4, 4, 0, 0]}
                        animationDuration={1500}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-50 rounded-xl p-12 text-center shadow-inner"
        >
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <p className="text-xl text-gray-600">
            No sales data available for {formattedDate}.
          </p>
          <button 
            onClick={() => setSelectedDate(getTodayDate())}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Today's Sales
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default DailySales;