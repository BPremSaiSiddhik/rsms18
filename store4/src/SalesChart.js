// // import React, { useState, useEffect, useContext } from "react";
// // import { StoreContext } from "./StoreContext"; // Assuming StoreContext provides storeId
// // import { Line, Bar, Pie } from "react-chartjs-2";
// // import Chart from "chart.js/auto";

// // const SalesChart = () => {
// //   const [chartData, setChartData] = useState({
// //     labels: [],
// //     datasets: [
// //       {
// //         label: "Sales Amount",
// //         data: [],
// //         fill: false,
// //         borderColor: "rgba(75, 192, 192, 1)",
// //         tension: 0.1,
// //       },
// //     ],
// //   });
// //   const [error, setError] = useState(null);
// //   const [timeFrame, setTimeFrame] = useState("day"); // Default to "day"
// //   const [chartType, setChartType] = useState("line"); // Default to "line"
// //   const { storeId } = useContext(StoreContext); // Using storeId from context

// //   useEffect(() => {
// //     const fetchSalesData = async () => {
// //       if (!storeId) {
// //         setError("Store ID is required.");
// //         return;
// //       }

// //       try {
// //         console.log("Fetching sales data for storeId:", storeId); // Debug log
// //         const response = await fetch(
// //           `http://localhost:5010/api/daily-sale?timeframe=${timeFrame}`,
// //           {
// //             headers: { storeId }, // Send storeId in headers
// //           }
// //         );

// //         if (!response.ok) {
// //           throw new Error(`Failed to fetch daily sales: ${response.statusText}`);
// //         }

// //         const data = await response.json();
// //         console.log("Sales data fetched:", data); // Debug log

// //         if (data.error) {
// //           setError(data.error);
// //         } else {
// //           setChartData(formatSalesData(data));
// //         }
// //       } catch (error) {
// //         console.error("Error fetching sales data:", error); // Debug log
// //         setError("Failed to fetch sales data.");
// //       }
// //     };

// //     if (storeId) {
// //       fetchSalesData();
// //     }
// //   }, [storeId, timeFrame]);

// //   const formatSalesData = (salesData) => {
// //     const labels = [];
// //     const salesAmounts = [];

// //     Object.entries(salesData).forEach(([key, value]) => {
// //       labels.push(key); // Use the timeframe as the label
// //       salesAmounts.push(value.total_amount); // Total amount for the timeframe
// //     });

// //     return {
// //       labels,
// //       datasets: [
// //         {
// //           label: "Sales Amount",
// //           data: salesAmounts,
// //           fill: false,
// //           borderColor: "rgba(75, 192, 192, 1)",
// //           tension: 0.1,
// //         },
// //       ],
// //     };
// //   };

// //   const handleTimeFrameChange = (e) => {
// //     setTimeFrame(e.target.value);
// //   };

// //   const handleChartTypeChange = (e) => {
// //     setChartType(e.target.value);
// //   };

// //   const renderChart = () => {
// //     switch (chartType) {
// //       case "line":
// //         return <Line data={chartData} options={{ responsive: true }} />;
// //       case "bar":
// //         return <Bar data={chartData} options={{ responsive: true }} />;
// //       case "pie":
// //         return <Pie data={chartData} options={{ responsive: true }} />;
// //       default:
// //         return <Line data={chartData} options={{ responsive: true }} />;
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 p-6">
// //       <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sales Data</h2>

// //       {error && <p className="text-red-500 text-center mb-4">{error}</p>}

// //       <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
// //         <div className="flex items-center gap-2">
// //           <label htmlFor="time-frame" className="text-gray-700 font-medium">
// //             Select Time Frame:
// //           </label>
// //           <select
// //             id="time-frame"
// //             value={timeFrame}
// //             onChange={handleTimeFrameChange}
// //             className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           >
// //             <option value="hour">Hourly</option>
// //             <option value="day">Daily</option>
// //             <option value="week">Weekly</option>
// //             <option value="month">Monthly</option>
// //           </select>
// //         </div>

// //         <div className="flex items-center gap-2">
// //           <label htmlFor="chart-type" className="text-gray-700 font-medium">
// //             Select Chart Type:
// //           </label>
// //           <select
// //             id="chart-type"
// //             value={chartType}
// //             onChange={handleChartTypeChange}
// //             className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           >
// //             <option value="line">Line</option>
// //             <option value="bar">Bar</option>
// //             <option value="pie">Pie</option>
// //           </select>
// //         </div>
// //       </div>

// //       <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
// //         <div className="chart-container">{renderChart()}</div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SalesChart;


// import React, { useState, useEffect, useContext, useMemo } from "react";
// import { StoreContext } from "./StoreContext";
// import { Line, Bar, Pie } from "react-chartjs-2";
// import Chart from "chart.js/auto";
// import { motion } from "framer-motion";

// // Custom color themes
// const CHART_THEMES = {
//   primary: {
//     gradient: ["rgba(101, 116, 205, 0.8)", "rgba(101, 116, 205, 0.1)"],
//     border: "rgba(101, 116, 205, 1)",
//     point: "rgba(101, 116, 205, 1)",
//     pointHover: "rgba(72, 87, 178, 1)",
//   },
//   success: {
//     gradient: ["rgba(34, 197, 94, 0.8)", "rgba(34, 197, 94, 0.1)"],
//     border: "rgba(34, 197, 94, 1)",
//     point: "rgba(34, 197, 94, 1)",
//     pointHover: "rgba(22, 163, 74, 1)",
//   },
//   danger: {
//     gradient: ["rgba(239, 68, 68, 0.8)", "rgba(239, 68, 68, 0.1)"],
//     border: "rgba(239, 68, 68, 1)",
//     point: "rgba(239, 68, 68, 1)",
//     pointHover: "rgba(220, 38, 38, 1)",
//   },
// };

// const SalesChart = () => {
//   const [chartData, setChartData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [timeFrame, setTimeFrame] = useState("day");
//   const [chartType, setChartType] = useState("line");
//   const [theme, setTheme] = useState("primary");
//   const { storeId } = useContext(StoreContext);
  
//   // Chart animation configurations
//   const chartAnimations = {
//     line: {
//       tension: 0.4,
//       pointRadius: 4,
//       pointHoverRadius: 6,
//     },
//     bar: {
//       barPercentage: 0.7,
//       categoryPercentage: 0.8,
//     },
//   };

//   // Create gradient for chart background
//   const createGradient = (ctx, colors) => {
//     const gradient = ctx.createLinearGradient(0, 0, 0, 400);
//     gradient.addColorStop(0, colors[0]);
//     gradient.addColorStop(1, colors[1]);
//     return gradient;
//   };

//   useEffect(() => {
//     const fetchSalesData = async () => {
//       if (!storeId) {
//         setError("Store ID is required.");
//         setLoading(false);
//         return;
//       }

//       try {
//         setLoading(true);
        
//         const response = await fetch(
//           `http://localhost:5010/api/daily-sale?timeframe=${timeFrame}`,
//           {
//             headers: { storeId },
//           }
//         );

//         if (!response.ok) {
//           throw new Error(`Failed to fetch sales data: ${response.statusText}`);
//         }

//         const data = await response.json();

//         if (data.error) {
//           setError(data.error);
//         } else {
//           // Simulating a small delay for the loading animation to be visible
//           setTimeout(() => {
//             setChartData(data);
//             setError(null);
//             setLoading(false);
//           }, 600);
//         }
//       } catch (error) {
//         console.error("Error fetching sales data:", error);
//         setError("Failed to fetch sales data. Please try again later.");
//         setLoading(false);
//       }
//     };

//     if (storeId) {
//       fetchSalesData();
//     } else {
//       setLoading(false);
//     }
//   }, [storeId, timeFrame]);

//   const formattedChartData = useMemo(() => {
//     if (!chartData) return null;

//     const labels = [];
//     const salesAmounts = [];
//     let total = 0;

//     Object.entries(chartData).forEach(([key, value]) => {
//       labels.push(key);
//       salesAmounts.push(value.total_amount);
//       total += value.total_amount;
//     });

//     return {
//       labels,
//       datasets: [
//         {
//           label: "Sales Amount",
//           data: salesAmounts,
//           borderColor: CHART_THEMES[theme].border,
//           backgroundColor: function(context) {
//             const chart = context.chart;
//             const { ctx, chartArea } = chart;
            
//             if (!chartArea) {
//               return CHART_THEMES[theme].border;
//             }
            
//             return chartType === "line" 
//               ? createGradient(ctx, CHART_THEMES[theme].gradient)
//               : CHART_THEMES[theme].gradient[0];
//           },
//           borderWidth: 2,
//           pointBackgroundColor: CHART_THEMES[theme].point,
//           pointBorderColor: "#fff",
//           pointHoverBackgroundColor: CHART_THEMES[theme].pointHover,
//           pointHoverBorderColor: "#fff",
//           fill: chartType === "line",
//           tension: chartAnimations.line.tension,
//           pointRadius: chartAnimations.line.pointRadius,
//           pointHoverRadius: chartAnimations.line.pointHoverRadius,
//           barPercentage: chartAnimations.bar.barPercentage,
//           categoryPercentage: chartAnimations.bar.categoryPercentage,
//         },
//       ],
//       total,
//     };
//   }, [chartData, chartType, theme]);

//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: "top",
//         labels: {
//           font: {
//             family: "'Inter', sans-serif",
//             size: 12,
//             weight: "500",
//           },
//           padding: 20,
//           usePointStyle: true,
//           pointStyleWidth: 10,
//         },
//       },
//       tooltip: {
//         backgroundColor: "rgba(17, 24, 39, 0.8)",
//         titleFont: {
//           family: "'Inter', sans-serif",
//           size: 14,
//           weight: "600",
//         },
//         bodyFont: {
//           family: "'Inter', sans-serif",
//           size: 12,
//         },
//         padding: 12,
//         cornerRadius: 8,
//         displayColors: false,
//         callbacks: {
//           label: function(context) {
//             return `$${context.parsed.y.toLocaleString()}`;
//           }
//         }
//       },
//     },
//     scales: chartType !== "pie" ? {
//       x: {
//         grid: {
//           display: false,
//           drawBorder: false,
//         },
//         ticks: {
//           font: {
//             family: "'Inter', sans-serif",
//             size: 11,
//           },
//           color: "rgba(107, 114, 128, 0.8)",
//         },
//       },
//       y: {
//         grid: {
//           color: "rgba(243, 244, 246, 1)",
//           drawBorder: false,
//         },
//         border: {
//           dash: [5, 5],
//         },
//         ticks: {
//           font: {
//             family: "'Inter', sans-serif",
//             size: 11,
//           },
//           color: "rgba(107, 114, 128, 0.8)",
//           callback: function(value) {
//             return `$${value.toLocaleString()}`;
//           }
//         },
//         beginAtZero: true,
//       },
//     } : {},
//     animation: {
//       duration: 1000,
//       easing: "easeOutQuart",
//     },
//   };

//   const handleTimeFrameChange = (e) => {
//     setLoading(true);
//     setTimeFrame(e.target.value);
//   };

//   const handleChartTypeChange = (e) => {
//     setChartType(e.target.value);
//   };

//   const handleThemeChange = (e) => {
//     setTheme(e.target.value);
//   };

//   const formatTimeFrameLabel = (timeFrame) => {
//     switch (timeFrame) {
//       case "hour": return "Hourly";
//       case "day": return "Daily";
//       case "week": return "Weekly";
//       case "month": return "Monthly";
//       default: return "Daily";
//     }
//   };

//   const renderChart = () => {
//     if (!formattedChartData) return null;

//     switch (chartType) {
//       case "line":
//         return (
//           <Line 
//             data={formattedChartData} 
//             options={chartOptions} 
//             className="h-64 md:h-80" 
//           />
//         );
//       case "bar":
//         return (
//           <Bar 
//             data={formattedChartData} 
//             options={chartOptions} 
//             className="h-64 md:h-80" 
//           />
//         );
//       case "pie":
//         return (
//           <Pie 
//             data={formattedChartData} 
//             options={chartOptions} 
//             className="h-64 md:h-80 max-w-md mx-auto" 
//           />
//         );
//       default:
//         return (
//           <Line 
//             data={formattedChartData} 
//             options={chartOptions} 
//             className="h-64 md:h-80" 
//           />
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 md:p-8">
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-7xl mx-auto"
//       >
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
//           <motion.h2 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2, duration: 0.4 }}
//             className="text-2xl md:text-3xl font-bold text-gray-800"
//           >
//             Sales Analytics Dashboard
//           </motion.h2>
          
//           <motion.div 
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3, duration: 0.4 }}
//             className="text-sm text-gray-500 font-medium"
//           >
//             {storeId && `Store ID: ${storeId}`}
//           </motion.div>
//         </div>

//         {error && (
//           <motion.div 
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-md"
//           >
//             <div className="flex items-center">
//               <div className="flex-shrink-0">
//                 <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                 </svg>
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm text-red-700">{error}</p>
//               </div>
//             </div>
//           </motion.div>
//         )}

//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//           className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
//         >
//           <div className="p-5 md:p-6 border-b border-gray-200">
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
//               <div className="flex flex-wrap gap-4">
//                 <div className="flex items-center">
//                   <label htmlFor="time-frame" className="text-sm font-medium text-gray-700 mr-2">
//                     Time Frame:
//                   </label>
//                   <select
//                     id="time-frame"
//                     value={timeFrame}
//                     onChange={handleTimeFrameChange}
//                     className="text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                   >
//                     <option value="hour">Hourly</option>
//                     <option value="day">Daily</option>
//                     <option value="week">Weekly</option>
//                     <option value="month">Monthly</option>
//                   </select>
//                 </div>

//                 <div className="flex items-center">
//                   <label htmlFor="chart-type" className="text-sm font-medium text-gray-700 mr-2">
//                     Chart Type:
//                   </label>
//                   <select
//                     id="chart-type"
//                     value={chartType}
//                     onChange={handleChartTypeChange}
//                     className="text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                   >
//                     <option value="line">Line</option>
//                     <option value="bar">Bar</option>
//                     <option value="pie">Pie</option>
//                   </select>
//                 </div>

//                 <div className="flex items-center">
//                   <label htmlFor="theme" className="text-sm font-medium text-gray-700 mr-2">
//                     Theme:
//                   </label>
//                   <select
//                     id="theme"
//                     value={theme}
//                     onChange={handleThemeChange}
//                     className="text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                   >
//                     <option value="primary">Blue</option>
//                     <option value="success">Green</option>
//                     <option value="danger">Red</option>
//                   </select>
//                 </div>
//               </div>

//               {formattedChartData && (
//                 <div className="flex items-center space-x-6">
//                   <div className="flex flex-col">
//                     <span className="text-xs font-medium text-gray-500">TOTAL SALES</span>
//                     <span className="text-2xl font-bold text-gray-900">
//                       ${formattedChartData.total.toLocaleString()}
//                     </span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-xs font-medium text-gray-500">DATA POINTS</span>
//                     <span className="text-2xl font-bold text-gray-900">
//                       {formattedChartData.labels.length}
//                     </span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="p-5 md:p-6">
//             {loading ? (
//               <div className="flex flex-col items-center justify-center h-64 md:h-80">
//                 <svg className="animate-spin h-8 w-8 text-blue-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 <p className="text-sm text-gray-500">Loading {formatTimeFrameLabel(timeFrame).toLowerCase()} sales data...</p>
//               </div>
//             ) : (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="relative chart-container h-64 md:h-80"
//               >
//                 {renderChart()}
//               </motion.div>
//             )}
//           </div>
//         </motion.div>

//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.5 }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
//         >
//           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
//             <div className="flex flex-col">
//               <span className="text-xs font-medium text-gray-500 mb-1">INSIGHTS</span>
//               <h3 className="text-lg font-semibold text-gray-800 mb-3">Sales Trend Analysis</h3>
//               <p className="text-sm text-gray-600">
//                 View your {formatTimeFrameLabel(timeFrame).toLowerCase()} sales data to identify trends and make data-driven decisions.
//               </p>
//             </div>
//           </div>
          
//           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
//             <div className="flex flex-col">
//               <span className="text-xs font-medium text-gray-500 mb-1">TIP</span>
//               <h3 className="text-lg font-semibold text-gray-800 mb-3">Compare Time Frames</h3>
//               <p className="text-sm text-gray-600">
//                 Switch between hourly, daily, weekly, and monthly views to gain insights at different time scales.
//               </p>
//             </div>
//           </div>
          
//           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
//             <div className="flex flex-col">
//               <span className="text-xs font-medium text-gray-500 mb-1">REMINDER</span>
//               <h3 className="text-lg font-semibold text-gray-800 mb-3">Export Reports</h3>
//               <p className="text-sm text-gray-600">
//                 Download comprehensive sales reports to share with your team or for record keeping.
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default SalesChart;



import React, { useState, useEffect, useContext, useMemo } from "react";
import { StoreContext } from "./StoreContext";
import { Line, Bar, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { motion } from "framer-motion";

// Custom color themes
const CHART_THEMES = {
  primary: {
    gradient: ["rgba(101, 116, 205, 0.8)", "rgba(101, 116, 205, 0.1)"],
    border: "rgba(101, 116, 205, 1)",
    point: "rgba(101, 116, 205, 1)",
    pointHover: "rgba(72, 87, 178, 1)",
    backgroundColor: [
      "rgba(101, 116, 205, 0.8)",
      "rgba(111, 126, 215, 0.8)",
      "rgba(121, 136, 225, 0.8)",
      "rgba(131, 146, 235, 0.8)",
      "rgba(141, 156, 245, 0.8)",
      "rgba(151, 166, 255, 0.8)"
    ]
  },
  success: {
    gradient: ["rgba(34, 197, 94, 0.8)", "rgba(34, 197, 94, 0.1)"],
    border: "rgba(34, 197, 94, 1)",
    point: "rgba(34, 197, 94, 1)",
    pointHover: "rgba(22, 163, 74, 1)",
    backgroundColor: [
      "rgba(34, 197, 94, 0.8)",
      "rgba(44, 207, 104, 0.8)",
      "rgba(54, 217, 114, 0.8)",
      "rgba(64, 227, 124, 0.8)",
      "rgba(74, 237, 134, 0.8)",
      "rgba(84, 247, 144, 0.8)"
    ]
  },
  danger: {
    gradient: ["rgba(239, 68, 68, 0.8)", "rgba(239, 68, 68, 0.1)"],
    border: "rgba(239, 68, 68, 1)",
    point: "rgba(239, 68, 68, 1)",
    pointHover: "rgba(220, 38, 38, 1)",
    backgroundColor: [
      "rgba(239, 68, 68, 0.8)",
      "rgba(249, 78, 78, 0.8)",
      "rgba(259, 88, 88, 0.8)",
      "rgba(269, 98, 98, 0.8)",
      "rgba(279, 108, 108, 0.8)",
      "rgba(289, 118, 118, 0.8)"
    ]
  },
};

const SalesChart = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeFrame, setTimeFrame] = useState("day");
  const [chartType, setChartType] = useState("line");
  const [theme, setTheme] = useState("primary");
  const { storeId } = useContext(StoreContext);
  
  // Chart animation configurations
  const chartAnimations = {
    line: {
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 6,
    },
    bar: {
      barPercentage: 0.7,
      categoryPercentage: 0.8,
    },
  };

  // Create gradient for chart background
  const createGradient = (ctx, colors) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, colors[0]);
    gradient.addColorStop(1, colors[1]);
    return gradient;
  };

  useEffect(() => {
    const fetchSalesData = async () => {
      if (!storeId) {
        setError("Store ID is required.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        
        const response = await fetch(
          `http://localhost:5010/api/daily-sale?timeframe=${timeFrame}`,
          {
            headers: { storeId },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch sales data: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.error) {
          setError(data.error);
        } else {
          // Simulating a small delay for the loading animation to be visible
          setTimeout(() => {
            setChartData(data);
            setError(null);
            setLoading(false);
          }, 600);
        }
      } catch (error) {
        console.error("Error fetching sales data:", error);
        setError("Failed to fetch sales data. Please try again later.");
        setLoading(false);
      }
    };

    if (storeId) {
      fetchSalesData();
    } else {
      setLoading(false);
    }
  }, [storeId, timeFrame]);

  const formattedChartData = useMemo(() => {
    if (!chartData) return null;

    const labels = [];
    const salesAmounts = [];
    let total = 0;

    Object.entries(chartData).forEach(([key, value]) => {
      labels.push(key);
      salesAmounts.push(value.total_amount);
      total += value.total_amount;
    });

    // For pie charts we need a different structure for the dataset
    if (chartType === "pie") {
      return {
        labels: labels,
        datasets: [
          {
            data: salesAmounts,
            backgroundColor: CHART_THEMES[theme].backgroundColor,
            borderColor: CHART_THEMES[theme].border,
            borderWidth: 1,
          }
        ],
        total
      };
    }

    // For line and bar charts
    return {
      labels,
      datasets: [
        {
          label: "Sales Amount",
          data: salesAmounts,
          borderColor: CHART_THEMES[theme].border,
          backgroundColor: function(context) {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            
            if (!chartArea) {
              return CHART_THEMES[theme].border;
            }
            
            return chartType === "line" 
              ? createGradient(ctx, CHART_THEMES[theme].gradient)
              : CHART_THEMES[theme].gradient[0];
          },
          borderWidth: 2,
          pointBackgroundColor: CHART_THEMES[theme].point,
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: CHART_THEMES[theme].pointHover,
          pointHoverBorderColor: "#fff",
          fill: chartType === "line",
          tension: chartAnimations.line.tension,
          pointRadius: chartAnimations.line.pointRadius,
          pointHoverRadius: chartAnimations.line.pointHoverRadius,
          barPercentage: chartAnimations.bar.barPercentage,
          categoryPercentage: chartAnimations.bar.categoryPercentage,
        },
      ],
      total,
    };
  }, [chartData, chartType, theme]);

  // Create different options for different chart types
  const lineBarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            family: "'Inter', sans-serif",
            size: 12,
            weight: "500",
          },
          padding: 20,
          usePointStyle: true,
          pointStyleWidth: 10,
        },
      },
      tooltip: {
        backgroundColor: "rgba(17, 24, 39, 0.8)",
        titleFont: {
          family: "'Inter', sans-serif",
          size: 14,
          weight: "600",
        },
        bodyFont: {
          family: "'Inter', sans-serif",
          size: 12,
        },
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context) {
            let value = context.raw || 0;
            return `$${value.toLocaleString()}`;
          }
        }
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
            size: 11,
          },
          color: "rgba(107, 114, 128, 0.8)",
        },
      },
      y: {
        grid: {
          color: "rgba(243, 244, 246, 1)",
          drawBorder: false,
        },
        border: {
          dash: [5, 5],
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
            size: 11,
          },
          color: "rgba(107, 114, 128, 0.8)",
          callback: function(value) {
            return `$${value.toLocaleString()}`;
          }
        },
        beginAtZero: true,
      },
    },
    animation: {
      duration: 1000,
      easing: "easeOutQuart",
    },
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          font: {
            family: "'Inter', sans-serif",
            size: 12,
            weight: "500",
          },
          padding: 20,
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: "rgba(17, 24, 39, 0.8)",
        titleFont: {
          family: "'Inter', sans-serif",
          size: 14,
          weight: "600",
        },
        bodyFont: {
          family: "'Inter', sans-serif",
          size: 12,
        },
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: function(context) {
            let value = context.raw || 0;
            let label = context.label || '';
            return `${label}: $${value.toLocaleString()}`;
          }
        }
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 1000,
      easing: "easeOutQuart",
    },
  };

  const handleTimeFrameChange = (e) => {
    setLoading(true);
    setTimeFrame(e.target.value);
  };

  const handleChartTypeChange = (e) => {
    setChartType(e.target.value);
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const formatTimeFrameLabel = (timeFrame) => {
    switch (timeFrame) {
      case "hour": return "Hourly";
      case "day": return "Daily";
      case "week": return "Weekly";
      case "month": return "Monthly";
      default: return "Daily";
    }
  };

  const renderChart = () => {
    if (!formattedChartData) return null;

    switch (chartType) {
      case "line":
        return (
          <Line 
            data={formattedChartData} 
            options={lineBarOptions} 
            className="h-64 md:h-80" 
          />
        );
      case "bar":
        return (
          <Bar 
            data={formattedChartData} 
            options={lineBarOptions} 
            className="h-64 md:h-80" 
          />
        );
      case "pie":
        return (
          <Pie 
            data={formattedChartData} 
            options={pieOptions} 
            className="h-64 md:h-80 max-w-md mx-auto" 
          />
        );
      default:
        return (
          <Line 
            data={formattedChartData} 
            options={lineBarOptions} 
            className="h-64 md:h-80" 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-gray-800"
          >
            Sales Analytics Dashboard
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-sm text-gray-500 font-medium"
          >
            {storeId && `Store ID: ${storeId}`}
          </motion.div>
        </div>

        {error && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-md"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
        >
          <div className="p-5 md:p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <label htmlFor="time-frame" className="text-sm font-medium text-gray-700 mr-2">
                    Time Frame:
                  </label>
                  <select
                    id="time-frame"
                    value={timeFrame}
                    onChange={handleTimeFrameChange}
                    className="text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="hour">Hourly</option>
                    <option value="day">Daily</option>
                    <option value="week">Weekly</option>
                    <option value="month">Monthly</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <label htmlFor="chart-type" className="text-sm font-medium text-gray-700 mr-2">
                    Chart Type:
                  </label>
                  <select
                    id="chart-type"
                    value={chartType}
                    onChange={handleChartTypeChange}
                    className="text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="line">Line</option>
                    <option value="bar">Bar</option>
                    <option value="pie">Pie</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <label htmlFor="theme" className="text-sm font-medium text-gray-700 mr-2">
                    Theme:
                  </label>
                  <select
                    id="theme"
                    value={theme}
                    onChange={handleThemeChange}
                    className="text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="primary">Blue</option>
                    <option value="success">Green</option>
                    <option value="danger">Red</option>
                  </select>
                </div>
              </div>

              {formattedChartData && (
                <div className="flex items-center space-x-6">
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-gray-500">TOTAL SALES</span>
                    <span className="text-2xl font-bold text-gray-900">
                      ${formattedChartData.total.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-gray-500">DATA POINTS</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {formattedChartData.labels.length}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="p-5 md:p-6">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-64 md:h-80">
                <svg className="animate-spin h-8 w-8 text-blue-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="text-sm text-gray-500">Loading {formatTimeFrameLabel(timeFrame).toLowerCase()} sales data...</p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative chart-container h-64 md:h-80"
              >
                {renderChart()}
              </motion.div>
            )}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
        >
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-500 mb-1">INSIGHTS</span>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Sales Trend Analysis</h3>
              <p className="text-sm text-gray-600">
                View your {formatTimeFrameLabel(timeFrame).toLowerCase()} sales data to identify trends and make data-driven decisions.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-500 mb-1">TIP</span>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Compare Time Frames</h3>
              <p className="text-sm text-gray-600">
                Switch between hourly, daily, weekly, and monthly views to gain insights at different time scales.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-500 mb-1">REMINDER</span>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Export Reports</h3>
              <p className="text-sm text-gray-600">
                Download comprehensive sales reports to share with your team or for record keeping.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SalesChart;