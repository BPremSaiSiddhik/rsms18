// // // // // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // // // // import { Bar, Line } from "react-chartjs-2";
// // // // // // // // // // // // // import { Calendar, TrendingUp, User, DollarSign, FileText, Download } from "react-feather";
// // // // // // // // // // // // // import * as XLSX from "xlsx";
// // // // // // // // // // // // // import jsPDF from "jspdf";
// // // // // // // // // // // // // import "jspdf-autotable";

// // // // // // // // // // // // // const EmployeePerformanceReports = () => {
// // // // // // // // // // // // //   const [startDate, setStartDate] = useState("");
// // // // // // // // // // // // //   const [endDate, setEndDate] = useState("");
// // // // // // // // // // // // //   const [employeeData, setEmployeeData] = useState([]);
// // // // // // // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // // //   const [totalRevenue, setTotalRevenue] = useState(0);
// // // // // // // // // // // // //   const [totalTransactions, setTotalTransactions] = useState(0);
// // // // // // // // // // // // //   const [averageSale, setAverageSale] = useState(0);

// // // // // // // // // // // // //   // Fetch data from backend
// // // // // // // // // // // // //   const fetchEmployeePerformance = async () => {
// // // // // // // // // // // // //     setLoading(true);
// // // // // // // // // // // // //     setError(null);
// // // // // // // // // // // // //     try {
// // // // // // // // // // // // //       const storeId = localStorage.getItem("storeId");
// // // // // // // // // // // // //       const response = await fetch(
// // // // // // // // // // // // //         `http://localhost:5010/api/daily-sales?storeId=${storeId}&startDate=${startDate}&endDate=${endDate}`
// // // // // // // // // // // // //       );
// // // // // // // // // // // // //       const data = await response.json();
// // // // // // // // // // // // //       if (data.error) throw new Error(data.error);

// // // // // // // // // // // // //       // Process data
// // // // // // // // // // // // //       const processedData = processEmployeeData(data);
// // // // // // // // // // // // //       setEmployeeData(processedData);
// // // // // // // // // // // // //       calculateSummary(processedData);
// // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // //       setError(err.message);
// // // // // // // // // // // // //     } finally {
// // // // // // // // // // // // //       setLoading(false);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Process employee data
// // // // // // // // // // // // //   const processEmployeeData = (salesData) => {
// // // // // // // // // // // // //     const employeeMap = {};

// // // // // // // // // // // // //     salesData.forEach((sale) => {
// // // // // // // // // // // // //       const employeeId = sale.employee_id;
// // // // // // // // // // // // //       if (!employeeMap[employeeId]) {
// // // // // // // // // // // // //         employeeMap[employeeId] = {
// // // // // // // // // // // // //           totalSales: 0,
// // // // // // // // // // // // //           transactions: 0,
// // // // // // // // // // // // //           productsSold: {},
// // // // // // // // // // // // //         };
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //       employeeMap[employeeId].totalSales += sale.total_amount;
// // // // // // // // // // // // //       employeeMap[employeeId].transactions += 1;

// // // // // // // // // // // // //       // Track products sold
// // // // // // // // // // // // //       sale.products.forEach((product) => {
// // // // // // // // // // // // //         if (!employeeMap[employeeId].productsSold[product.name]) {
// // // // // // // // // // // // //           employeeMap[employeeId].productsSold[product.name] = 0;
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //         employeeMap[employeeId].productsSold[product.name] += product.quantity;
// // // // // // // // // // // // //       });
// // // // // // // // // // // // //     });

// // // // // // // // // // // // //     return Object.keys(employeeMap).map((id) => ({
// // // // // // // // // // // // //       id,
// // // // // // // // // // // // //       ...employeeMap[id],
// // // // // // // // // // // // //       topProduct: getTopProduct(employeeMap[id].productsSold),
// // // // // // // // // // // // //     }));
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Get top product for an employee
// // // // // // // // // // // // //   const getTopProduct = (productsSold) => {
// // // // // // // // // // // // //     return Object.keys(productsSold).reduce((a, b) =>
// // // // // // // // // // // // //       productsSold[a] > productsSold[b] ? a : b
// // // // // // // // // // // // //     );
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Calculate summary stats
// // // // // // // // // // // // //   const calculateSummary = (employeeData) => {
// // // // // // // // // // // // //     const totalSales = employeeData.reduce((sum, emp) => sum + emp.totalSales, 0);
// // // // // // // // // // // // //     const totalTransactions = employeeData.reduce(
// // // // // // // // // // // // //       (sum, emp) => sum + emp.transactions,
// // // // // // // // // // // // //       0
// // // // // // // // // // // // //     );
// // // // // // // // // // // // //     setTotalRevenue(totalSales);
// // // // // // // // // // // // //     setTotalTransactions(totalTransactions);
// // // // // // // // // // // // //     setAverageSale(totalSales / totalTransactions);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Export to CSV
// // // // // // // // // // // // //   const exportCSV = () => {
// // // // // // // // // // // // //     const headers = ["Employee ID", "Total Sales", "Transactions", "Top Product"];
// // // // // // // // // // // // //     const csvData = [
// // // // // // // // // // // // //       headers,
// // // // // // // // // // // // //       ...employeeData.map((emp) => [
// // // // // // // // // // // // //         emp.id,
// // // // // // // // // // // // //         emp.totalSales,
// // // // // // // // // // // // //         emp.transactions,
// // // // // // // // // // // // //         emp.topProduct,
// // // // // // // // // // // // //       ]),
// // // // // // // // // // // // //     ];

// // // // // // // // // // // // //     const csvContent = csvData.map((row) => row.join(",")).join("\n");
// // // // // // // // // // // // //     const blob = new Blob([csvContent], { type: "text/csv" });
// // // // // // // // // // // // //     const url = URL.createObjectURL(blob);
// // // // // // // // // // // // //     const link = document.createElement("a");
// // // // // // // // // // // // //     link.href = url;
// // // // // // // // // // // // //     link.download = `employee_performance_${startDate}_to_${endDate}.csv`;
// // // // // // // // // // // // //     link.click();
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Export to PDF
// // // // // // // // // // // // //   const exportPDF = () => {
// // // // // // // // // // // // //     const doc = new jsPDF();
// // // // // // // // // // // // //     doc.text(`Employee Performance Report (${startDate} to ${endDate})`, 10, 10);
// // // // // // // // // // // // //     doc.autoTable({
// // // // // // // // // // // // //       head: [["Employee ID", "Total Sales", "Transactions", "Top Product"]],
// // // // // // // // // // // // //       body: employeeData.map((emp) => [
// // // // // // // // // // // // //         emp.id,
// // // // // // // // // // // // //         emp.totalSales,
// // // // // // // // // // // // //         emp.transactions,
// // // // // // // // // // // // //         emp.topProduct,
// // // // // // // // // // // // //       ]),
// // // // // // // // // // // // //     });
// // // // // // // // // // // // //     doc.save(`employee_performance_${startDate}_to_${endDate}.pdf`);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Chart data
// // // // // // // // // // // // //   const barChartData = {
// // // // // // // // // // // // //     labels: employeeData.map((emp) => `Employee ${emp.id}`),
// // // // // // // // // // // // //     datasets: [
// // // // // // // // // // // // //       {
// // // // // // // // // // // // //         label: "Total Sales",
// // // // // // // // // // // // //         data: employeeData.map((emp) => emp.totalSales),
// // // // // // // // // // // // //         backgroundColor: "rgba(59, 130, 246, 0.6)",
// // // // // // // // // // // // //       },
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const lineChartData = {
// // // // // // // // // // // // //     labels: employeeData.map((emp) => `Employee ${emp.id}`),
// // // // // // // // // // // // //     datasets: [
// // // // // // // // // // // // //       {
// // // // // // // // // // // // //         label: "Transactions",
// // // // // // // // // // // // //         data: employeeData.map((emp) => emp.transactions),
// // // // // // // // // // // // //         borderColor: "rgba(16, 185, 129, 0.6)",
// // // // // // // // // // // // //         fill: false,
// // // // // // // // // // // // //       },
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className="p-6 bg-gray-50 min-h-screen">
// // // // // // // // // // // // //       <div className="max-w-7xl mx-auto">
// // // // // // // // // // // // //         {/* Header */}
// // // // // // // // // // // // //         <div className="flex justify-between items-center mb-6">
// // // // // // // // // // // // //           <h1 className="text-2xl font-bold text-gray-800">
// // // // // // // // // // // // //             Employee Performance Reports
// // // // // // // // // // // // //           </h1>
// // // // // // // // // // // // //           <div className="flex gap-4">
// // // // // // // // // // // // //             <button
// // // // // // // // // // // // //               onClick={exportCSV}
// // // // // // // // // // // // //               className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               <Download size={16} />
// // // // // // // // // // // // //               Export CSV
// // // // // // // // // // // // //             </button>
// // // // // // // // // // // // //             <button
// // // // // // // // // // // // //               onClick={exportPDF}
// // // // // // // // // // // // //               className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               <FileText size={16} />
// // // // // // // // // // // // //               Export PDF
// // // // // // // // // // // // //             </button>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Date Filter */}
// // // // // // // // // // // // //         <div className="bg-white p-6 rounded-lg shadow mb-6">
// // // // // // // // // // // // //           <div className="flex gap-4 items-end">
// // // // // // // // // // // // //             <div>
// // // // // // // // // // // // //               <label className="block text-sm font-medium text-gray-700">
// // // // // // // // // // // // //                 Start Date
// // // // // // // // // // // // //               </label>
// // // // // // // // // // // // //               <input
// // // // // // // // // // // // //                 type="date"
// // // // // // // // // // // // //                 value={startDate}
// // // // // // // // // // // // //                 onChange={(e) => setStartDate(e.target.value)}
// // // // // // // // // // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
// // // // // // // // // // // // //               />
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //             <div>
// // // // // // // // // // // // //               <label className="block text-sm font-medium text-gray-700">
// // // // // // // // // // // // //                 End Date
// // // // // // // // // // // // //               </label>
// // // // // // // // // // // // //               <input
// // // // // // // // // // // // //                 type="date"
// // // // // // // // // // // // //                 value={endDate}
// // // // // // // // // // // // //                 onChange={(e) => setEndDate(e.target.value)}
// // // // // // // // // // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
// // // // // // // // // // // // //               />
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //             <button
// // // // // // // // // // // // //               onClick={fetchEmployeePerformance}
// // // // // // // // // // // // //               disabled={loading || !startDate || !endDate}
// // // // // // // // // // // // //               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               {loading ? "Loading..." : "Generate Report"}
// // // // // // // // // // // // //             </button>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Summary Cards */}
// // // // // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // // // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // // // // // //             <div className="flex items-center gap-2">
// // // // // // // // // // // // //               <DollarSign size={20} className="text-blue-500" />
// // // // // // // // // // // // //               <h2 className="text-lg font-semibold text-gray-800">Total Revenue</h2>
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //             <p className="text-2xl font-bold text-gray-900">
// // // // // // // // // // // // //               ${totalRevenue.toLocaleString()}
// // // // // // // // // // // // //             </p>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // // // // // //             <div className="flex items-center gap-2">
// // // // // // // // // // // // //               <TrendingUp size={20} className="text-green-500" />
// // // // // // // // // // // // //               <h2 className="text-lg font-semibold text-gray-800">Transactions</h2>
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //             <p className="text-2xl font-bold text-gray-900">{totalTransactions}</p>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // // // // // //             <div className="flex items-center gap-2">
// // // // // // // // // // // // //               <User size={20} className="text-purple-500" />
// // // // // // // // // // // // //               <h2 className="text-lg font-semibold text-gray-800">Average Sale</h2>
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //             <p className="text-2xl font-bold text-gray-900">
// // // // // // // // // // // // //               ${averageSale.toFixed(2)}
// // // // // // // // // // // // //             </p>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Charts */}
// // // // // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// // // // // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // // // // // //             <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // // // // // // // // // // //               Revenue by Employee
// // // // // // // // // // // // //             </h2>
// // // // // // // // // // // // //             <Bar data={barChartData} />
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // // // // // //             <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // // // // // // // // // // //               Transactions Over Time
// // // // // // // // // // // // //             </h2>
// // // // // // // // // // // // //             <Line data={lineChartData} />
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Employee Leaderboard */}
// // // // // // // // // // // // //         <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // // // // // //           <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // // // // // // // // // // //             Employee Leaderboard
// // // // // // // // // // // // //           </h2>
// // // // // // // // // // // // //           <table className="w-full">
// // // // // // // // // // // // //             <thead>
// // // // // // // // // // // // //               <tr className="bg-gray-100">
// // // // // // // // // // // // //                 <th className="p-3 text-left">Employee ID</th>
// // // // // // // // // // // // //                 <th className="p-3 text-left">Total Sales</th>
// // // // // // // // // // // // //                 <th className="p-3 text-left">Transactions</th>
// // // // // // // // // // // // //                 <th className="p-3 text-left">Top Product</th>
// // // // // // // // // // // // //               </tr>
// // // // // // // // // // // // //             </thead>
// // // // // // // // // // // // //             <tbody>
// // // // // // // // // // // // //               {employeeData.map((emp) => (
// // // // // // // // // // // // //                 <tr key={emp.id} className="border-b">
// // // // // // // // // // // // //                   <td className="p-3">{emp.id}</td>
// // // // // // // // // // // // //                   <td className="p-3">${emp.totalSales.toLocaleString()}</td>
// // // // // // // // // // // // //                   <td className="p-3">{emp.transactions}</td>
// // // // // // // // // // // // //                   <td className="p-3">{emp.topProduct}</td>
// // // // // // // // // // // // //                 </tr>
// // // // // // // // // // // // //               ))}
// // // // // // // // // // // // //             </tbody>
// // // // // // // // // // // // //           </table>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default EmployeePerformanceReports;
// // // // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // // // import { Bar, Line } from "react-chartjs-2";
// // // // // // // // // // // // import { Calendar, TrendingUp, User, DollarSign, FileText, Download } from "react-feather";
// // // // // // // // // // // // import * as XLSX from "xlsx";
// // // // // // // // // // // // import jsPDF from "jspdf";
// // // // // // // // // // // // import "jspdf-autotable";

// // // // // // // // // // // // const EmployeePerformanceReports = () => {
// // // // // // // // // // // //   const [startDate, setStartDate] = useState("");
// // // // // // // // // // // //   const [endDate, setEndDate] = useState("");
// // // // // // // // // // // //   const [employeeData, setEmployeeData] = useState([]);
// // // // // // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // //   const [totalRevenue, setTotalRevenue] = useState(0);
// // // // // // // // // // // //   const [totalTransactions, setTotalTransactions] = useState(0);
// // // // // // // // // // // //   const [averageSale, setAverageSale] = useState(0);

// // // // // // // // // // // //   // Fetch data from backend
// // // // // // // // // // // //   const fetchEmployeePerformance = async () => {
// // // // // // // // // // // //     setLoading(true);
// // // // // // // // // // // //     setError(null);
// // // // // // // // // // // //     try {
// // // // // // // // // // // //       const storeId = localStorage.getItem("storeId");
// // // // // // // // // // // //       const response = await fetch(
// // // // // // // // // // // //         `http://localhost:5010/api/daily-sales?storeId=${storeId}&startDate=${startDate}&endDate=${endDate}`
// // // // // // // // // // // //       );
// // // // // // // // // // // //       const data = await response.json();
// // // // // // // // // // // //       if (data.error) throw new Error(data.error);

// // // // // // // // // // // //       // Process data
// // // // // // // // // // // //       const processedData = processEmployeeData(data);
// // // // // // // // // // // //       setEmployeeData(processedData);
// // // // // // // // // // // //       calculateSummary(processedData);
// // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // //       setError(err.message);
// // // // // // // // // // // //     } finally {
// // // // // // // // // // // //       setLoading(false);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Process employee data
// // // // // // // // // // // //   const processEmployeeData = (salesData) => {
// // // // // // // // // // // //     const employeeMap = {};

// // // // // // // // // // // //     salesData.forEach((sale) => {
// // // // // // // // // // // //       const employeeId = sale.employee_id;
// // // // // // // // // // // //       if (!employeeMap[employeeId]) {
// // // // // // // // // // // //         employeeMap[employeeId] = {
// // // // // // // // // // // //           totalSales: 0,
// // // // // // // // // // // //           transactions: 0,
// // // // // // // // // // // //           productsSold: {},
// // // // // // // // // // // //         };
// // // // // // // // // // // //       }
// // // // // // // // // // // //       employeeMap[employeeId].totalSales += sale.total_amount;
// // // // // // // // // // // //       employeeMap[employeeId].transactions += 1;

// // // // // // // // // // // //       // Track products sold
// // // // // // // // // // // //       sale.products.forEach((product) => {
// // // // // // // // // // // //         if (!employeeMap[employeeId].productsSold[product.name]) {
// // // // // // // // // // // //           employeeMap[employeeId].productsSold[product.name] = 0;
// // // // // // // // // // // //         }
// // // // // // // // // // // //         employeeMap[employeeId].productsSold[product.name] += product.quantity;
// // // // // // // // // // // //       });
// // // // // // // // // // // //     });

// // // // // // // // // // // //     return Object.keys(employeeMap).map((id) => ({
// // // // // // // // // // // //       id,
// // // // // // // // // // // //       ...employeeMap[id],
// // // // // // // // // // // //       topProduct: getTopProduct(employeeMap[id].productsSold),
// // // // // // // // // // // //     }));
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Get top product for an employee
// // // // // // // // // // // //   const getTopProduct = (productsSold) => {
// // // // // // // // // // // //     return Object.keys(productsSold).reduce((a, b) =>
// // // // // // // // // // // //       productsSold[a] > productsSold[b] ? a : b
// // // // // // // // // // // //     );
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Calculate summary stats
// // // // // // // // // // // //   const calculateSummary = (employeeData) => {
// // // // // // // // // // // //     const totalSales = employeeData.reduce((sum, emp) => sum + emp.totalSales, 0);
// // // // // // // // // // // //     const totalTransactions = employeeData.reduce(
// // // // // // // // // // // //       (sum, emp) => sum + emp.transactions,
// // // // // // // // // // // //       0
// // // // // // // // // // // //     );
// // // // // // // // // // // //     setTotalRevenue(totalSales);
// // // // // // // // // // // //     setTotalTransactions(totalTransactions);
// // // // // // // // // // // //     setAverageSale(totalSales / totalTransactions);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Export to CSV
// // // // // // // // // // // //   const exportCSV = () => {
// // // // // // // // // // // //     const headers = ["Employee ID", "Total Sales", "Transactions", "Top Product"];
// // // // // // // // // // // //     const csvData = [
// // // // // // // // // // // //       headers,
// // // // // // // // // // // //       ...employeeData.map((emp) => [
// // // // // // // // // // // //         emp.id,
// // // // // // // // // // // //         emp.totalSales,
// // // // // // // // // // // //         emp.transactions,
// // // // // // // // // // // //         emp.topProduct,
// // // // // // // // // // // //       ]),
// // // // // // // // // // // //     ];

// // // // // // // // // // // //     const csvContent = csvData.map((row) => row.join(",")).join("\n");
// // // // // // // // // // // //     const blob = new Blob([csvContent], { type: "text/csv" });
// // // // // // // // // // // //     const url = URL.createObjectURL(blob);
// // // // // // // // // // // //     const link = document.createElement("a");
// // // // // // // // // // // //     link.href = url;
// // // // // // // // // // // //     link.download = `employee_performance_${startDate}_to_${endDate}.csv`;
// // // // // // // // // // // //     link.click();
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Export to PDF
// // // // // // // // // // // //   const exportPDF = () => {
// // // // // // // // // // // //     const doc = new jsPDF();
// // // // // // // // // // // //     doc.text(`Employee Performance Report (${startDate} to ${endDate})`, 10, 10);
// // // // // // // // // // // //     doc.autoTable({
// // // // // // // // // // // //       head: [["Employee ID", "Total Sales", "Transactions", "Top Product"]],
// // // // // // // // // // // //       body: employeeData.map((emp) => [
// // // // // // // // // // // //         emp.id,
// // // // // // // // // // // //         emp.totalSales,
// // // // // // // // // // // //         emp.transactions,
// // // // // // // // // // // //         emp.topProduct,
// // // // // // // // // // // //       ]),
// // // // // // // // // // // //     });
// // // // // // // // // // // //     doc.save(`employee_performance_${startDate}_to_${endDate}.pdf`);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Chart data
// // // // // // // // // // // //   const barChartData = {
// // // // // // // // // // // //     labels: employeeData.map((emp) => `Employee ${emp.id}`),
// // // // // // // // // // // //     datasets: [
// // // // // // // // // // // //       {
// // // // // // // // // // // //         label: "Total Sales",
// // // // // // // // // // // //         data: employeeData.map((emp) => emp.totalSales),
// // // // // // // // // // // //         backgroundColor: "rgba(59, 130, 246, 0.6)",
// // // // // // // // // // // //       },
// // // // // // // // // // // //     ],
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const lineChartData = {
// // // // // // // // // // // //     labels: employeeData.map((emp) => `Employee ${emp.id}`),
// // // // // // // // // // // //     datasets: [
// // // // // // // // // // // //       {
// // // // // // // // // // // //         label: "Transactions",
// // // // // // // // // // // //         data: employeeData.map((emp) => emp.transactions),
// // // // // // // // // // // //         borderColor: "rgba(16, 185, 129, 0.6)",
// // // // // // // // // // // //         fill: false,
// // // // // // // // // // // //       },
// // // // // // // // // // // //     ],
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="p-6 bg-gray-50 min-h-screen">
// // // // // // // // // // // //       <div className="max-w-7xl mx-auto">
// // // // // // // // // // // //         {/* Header */}
// // // // // // // // // // // //         <div className="flex justify-between items-center mb-6">
// // // // // // // // // // // //           <h1 className="text-2xl font-bold text-gray-800">
// // // // // // // // // // // //             Employee Performance Reports
// // // // // // // // // // // //           </h1>
// // // // // // // // // // // //           <div className="flex gap-4">
// // // // // // // // // // // //             <button
// // // // // // // // // // // //               onClick={exportCSV}
// // // // // // // // // // // //               className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // // // // // // // //             >
// // // // // // // // // // // //               <Download size={16} />
// // // // // // // // // // // //               Export CSV
// // // // // // // // // // // //             </button>
// // // // // // // // // // // //             <button
// // // // // // // // // // // //               onClick={exportPDF}
// // // // // // // // // // // //               className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
// // // // // // // // // // // //             >
// // // // // // // // // // // //               <FileText size={16} />
// // // // // // // // // // // //               Export PDF
// // // // // // // // // // // //             </button>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* Date Filter */}
// // // // // // // // // // // //         <div className="bg-white p-6 rounded-lg shadow mb-6">
// // // // // // // // // // // //           <div className="flex gap-4 items-end">
// // // // // // // // // // // //             <div>
// // // // // // // // // // // //               <label className="block text-sm font-medium text-gray-700">
// // // // // // // // // // // //                 Start Date
// // // // // // // // // // // //               </label>
// // // // // // // // // // // //               <input
// // // // // // // // // // // //                 type="date"
// // // // // // // // // // // //                 value={startDate}
// // // // // // // // // // // //                 onChange={(e) => setStartDate(e.target.value)}
// // // // // // // // // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
// // // // // // // // // // // //               />
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //             <div>
// // // // // // // // // // // //               <label className="block text-sm font-medium text-gray-700">
// // // // // // // // // // // //                 End Date
// // // // // // // // // // // //               </label>
// // // // // // // // // // // //               <input
// // // // // // // // // // // //                 type="date"
// // // // // // // // // // // //                 value={endDate}
// // // // // // // // // // // //                 onChange={(e) => setEndDate(e.target.value)}
// // // // // // // // // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
// // // // // // // // // // // //               />
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //             <button
// // // // // // // // // // // //               onClick={fetchEmployeePerformance}
// // // // // // // // // // // //               disabled={loading || !startDate || !endDate}
// // // // // // // // // // // //               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
// // // // // // // // // // // //             >
// // // // // // // // // // // //               {loading ? "Loading..." : "Generate Report"}
// // // // // // // // // // // //             </button>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* Summary Cards */}
// // // // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // // // // //             <div className="flex items-center gap-2">
// // // // // // // // // // // //               <DollarSign size={20} className="text-blue-500" />
// // // // // // // // // // // //               <h2 className="text-lg font-semibold text-gray-800">Total Revenue</h2>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //             <p className="text-2xl font-bold text-gray-900">
// // // // // // // // // // // //               ${totalRevenue.toLocaleString()}
// // // // // // // // // // // //             </p>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // // // // //             <div className="flex items-center gap-2">
// // // // // // // // // // // //               <TrendingUp size={20} className="text-green-500" />
// // // // // // // // // // // //               <h2 className="text-lg font-semibold text-gray-800">Transactions</h2>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //             <p className="text-2xl font-bold text-gray-900">{totalTransactions}</p>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // // // // //             <div className="flex items-center gap-2">
// // // // // // // // // // // //               <User size={20} className="text-purple-500" />
// // // // // // // // // // // //               <h2 className="text-lg font-semibold text-gray-800">Average Sale</h2>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //             <p className="text-2xl font-bold text-gray-900">
// // // // // // // // // // // //               ${averageSale.toFixed(2)}
// // // // // // // // // // // //             </p>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* Charts */}
// // // // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// // // // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // // // // //             <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // // // // // // // // // //               Revenue by Employee
// // // // // // // // // // // //             </h2>
// // // // // // // // // // // //             <Bar data={barChartData} />
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // // // // //             <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // // // // // // // // // //               Transactions Over Time
// // // // // // // // // // // //             </h2>
// // // // // // // // // // // //             <Line data={lineChartData} />
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* Employee Leaderboard */}
// // // // // // // // // // // //         <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // // // // //           <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // // // // // // // // // //             Employee Leaderboard
// // // // // // // // // // // //           </h2>
// // // // // // // // // // // //           <table className="w-full">
// // // // // // // // // // // //             <thead>
// // // // // // // // // // // //               <tr className="bg-gray-100">
// // // // // // // // // // // //                 <th className="p-3 text-left">Employee ID</th>
// // // // // // // // // // // //                 <th className="p-3 text-left">Total Sales</th>
// // // // // // // // // // // //                 <th className="p-3 text-left">Transactions</th>
// // // // // // // // // // // //                 <th className="p-3 text-left">Top Product</th>
// // // // // // // // // // // //               </tr>
// // // // // // // // // // // //             </thead>
// // // // // // // // // // // //             <tbody>
// // // // // // // // // // // //               {employeeData.map((emp) => (
// // // // // // // // // // // //                 <tr key={emp.id} className="border-b">
// // // // // // // // // // // //                   <td className="p-3">{emp.id}</td>
// // // // // // // // // // // //                   <td className="p-3">${emp.totalSales.toLocaleString()}</td>
// // // // // // // // // // // //                   <td className="p-3">{emp.transactions}</td>
// // // // // // // // // // // //                   <td className="p-3">{emp.topProduct}</td>
// // // // // // // // // // // //                 </tr>
// // // // // // // // // // // //               ))}
// // // // // // // // // // // //             </tbody>
// // // // // // // // // // // //           </table>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default EmployeePerformanceReports;

// // // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // // import { Bar, Line } from "react-chartjs-2";
// // // // // // // // // // // import { Calendar, TrendingUp, User, DollarSign, FileText, Download } from "react-feather";
// // // // // // // // // // // import * as XLSX from "xlsx";
// // // // // // // // // // // import jsPDF from "jspdf";
// // // // // // // // // // // import "jspdf-autotable";

// // // // // // // // // // // const EmployeePerformanceReports = () => {
// // // // // // // // // // //   const [startDate, setStartDate] = useState("");
// // // // // // // // // // //   const [endDate, setEndDate] = useState("");
// // // // // // // // // // //   const [employeeData, setEmployeeData] = useState([]);
// // // // // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // //   const [totalRevenue, setTotalRevenue] = useState(0);
// // // // // // // // // // //   const [totalTransactions, setTotalTransactions] = useState(0);
// // // // // // // // // // //   const [averageSale, setAverageSale] = useState(0);

// // // // // // // // // // //   // Fetch data from backend
// // // // // // // // // // //   const fetchEmployeePerformance = async () => {
// // // // // // // // // // //     setLoading(true);
// // // // // // // // // // //     setError(null);

// // // // // // // // // // //     // Validate dates
// // // // // // // // // // //     if (!startDate || !endDate) {
// // // // // // // // // // //       setError("Please select both start and end dates.");
// // // // // // // // // // //       setLoading(false);
// // // // // // // // // // //       return;
// // // // // // // // // // //     }

// // // // // // // // // // //     if (new Date(startDate) > new Date(endDate)) {
// // // // // // // // // // //       setError("Start date cannot be after end date.");
// // // // // // // // // // //       setLoading(false);
// // // // // // // // // // //       return;
// // // // // // // // // // //     }

// // // // // // // // // // //     try {
// // // // // // // // // // //       const storeId = localStorage.getItem("storeId");
// // // // // // // // // // //       const response = await fetch(
// // // // // // // // // // //         `http://localhost:5010/api/daily-sales?storeId=${storeId}&startDate=${startDate}&endDate=${endDate}`
// // // // // // // // // // //       );

// // // // // // // // // // //       if (!response.ok) {
// // // // // // // // // // //         const errorData = await response.json();
// // // // // // // // // // //         throw new Error(errorData.error || "Failed to fetch data");
// // // // // // // // // // //       }

// // // // // // // // // // //       const data = await response.json();

// // // // // // // // // // //       // Process data
// // // // // // // // // // //       const processedData = processEmployeeData(data);
// // // // // // // // // // //       setEmployeeData(processedData);
// // // // // // // // // // //       calculateSummary(processedData);
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       setError(err.message);
// // // // // // // // // // //     } finally {
// // // // // // // // // // //       setLoading(false);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   // Process employee data
// // // // // // // // // // //   const processEmployeeData = (salesData) => {
// // // // // // // // // // //     const employeeMap = {};

// // // // // // // // // // //     salesData.forEach((sale) => {
// // // // // // // // // // //       const employeeId = sale.employee_id;
// // // // // // // // // // //       if (!employeeMap[employeeId]) {
// // // // // // // // // // //         employeeMap[employeeId] = {
// // // // // // // // // // //           totalSales: 0,
// // // // // // // // // // //           transactions: 0,
// // // // // // // // // // //           productsSold: {},
// // // // // // // // // // //         };
// // // // // // // // // // //       }
// // // // // // // // // // //       employeeMap[employeeId].totalSales += sale.total_amount;
// // // // // // // // // // //       employeeMap[employeeId].transactions += 1;

// // // // // // // // // // //       // Track products sold
// // // // // // // // // // //       sale.products.forEach((product) => {
// // // // // // // // // // //         if (!employeeMap[employeeId].productsSold[product.name]) {
// // // // // // // // // // //           employeeMap[employeeId].productsSold[product.name] = 0;
// // // // // // // // // // //         }
// // // // // // // // // // //         employeeMap[employeeId].productsSold[product.name] += product.quantity;
// // // // // // // // // // //       });
// // // // // // // // // // //     });

// // // // // // // // // // //     return Object.keys(employeeMap).map((id) => ({
// // // // // // // // // // //       id,
// // // // // // // // // // //       ...employeeMap[id],
// // // // // // // // // // //       topProduct: getTopProduct(employeeMap[id].productsSold),
// // // // // // // // // // //     }));
// // // // // // // // // // //   };

// // // // // // // // // // //   // Get top product for an employee
// // // // // // // // // // //   const getTopProduct = (productsSold) => {
// // // // // // // // // // //     return Object.keys(productsSold).reduce((a, b) =>
// // // // // // // // // // //       productsSold[a] > productsSold[b] ? a : b
// // // // // // // // // // //     );
// // // // // // // // // // //   };

// // // // // // // // // // //   // Calculate summary stats
// // // // // // // // // // //   const calculateSummary = (employeeData) => {
// // // // // // // // // // //     const totalSales = employeeData.reduce((sum, emp) => sum + emp.totalSales, 0);
// // // // // // // // // // //     const totalTransactions = employeeData.reduce(
// // // // // // // // // // //       (sum, emp) => sum + emp.transactions,
// // // // // // // // // // //       0
// // // // // // // // // // //     );
// // // // // // // // // // //     setTotalRevenue(totalSales);
// // // // // // // // // // //     setTotalTransactions(totalTransactions);
// // // // // // // // // // //     setAverageSale(totalSales / totalTransactions);
// // // // // // // // // // //   };

// // // // // // // // // // //   // Export to CSV
// // // // // // // // // // //   const exportCSV = () => {
// // // // // // // // // // //     const headers = ["Employee ID", "Total Sales", "Transactions", "Top Product"];
// // // // // // // // // // //     const csvData = [
// // // // // // // // // // //       headers,
// // // // // // // // // // //       ...employeeData.map((emp) => [
// // // // // // // // // // //         emp.id,
// // // // // // // // // // //         emp.totalSales,
// // // // // // // // // // //         emp.transactions,
// // // // // // // // // // //         emp.topProduct,
// // // // // // // // // // //       ]),
// // // // // // // // // // //     ];

// // // // // // // // // // //     const csvContent = csvData.map((row) => row.join(",")).join("\n");
// // // // // // // // // // //     const blob = new Blob([csvContent], { type: "text/csv" });
// // // // // // // // // // //     const url = URL.createObjectURL(blob);
// // // // // // // // // // //     const link = document.createElement("a");
// // // // // // // // // // //     link.href = url;
// // // // // // // // // // //     link.download = `employee_performance_${startDate}_to_${endDate}.csv`;
// // // // // // // // // // //     link.click();
// // // // // // // // // // //   };

// // // // // // // // // // //   // Export to PDF
// // // // // // // // // // //   const exportPDF = () => {
// // // // // // // // // // //     const doc = new jsPDF();
// // // // // // // // // // //     doc.text(`Employee Performance Report (${startDate} to ${endDate})`, 10, 10);
// // // // // // // // // // //     doc.autoTable({
// // // // // // // // // // //       head: [["Employee ID", "Total Sales", "Transactions", "Top Product"]],
// // // // // // // // // // //       body: employeeData.map((emp) => [
// // // // // // // // // // //         emp.id,
// // // // // // // // // // //         emp.totalSales,
// // // // // // // // // // //         emp.transactions,
// // // // // // // // // // //         emp.topProduct,
// // // // // // // // // // //       ]),
// // // // // // // // // // //     });
// // // // // // // // // // //     doc.save(`employee_performance_${startDate}_to_${endDate}.pdf`);
// // // // // // // // // // //   };

// // // // // // // // // // //   // Chart data
// // // // // // // // // // //   const barChartData = {
// // // // // // // // // // //     labels: employeeData.map((emp) => `Employee ${emp.id}`),
// // // // // // // // // // //     datasets: [
// // // // // // // // // // //       {
// // // // // // // // // // //         label: "Total Sales",
// // // // // // // // // // //         data: employeeData.map((emp) => emp.totalSales),
// // // // // // // // // // //         backgroundColor: "rgba(59, 130, 246, 0.6)",
// // // // // // // // // // //       },
// // // // // // // // // // //     ],
// // // // // // // // // // //   };

// // // // // // // // // // //   const lineChartData = {
// // // // // // // // // // //     labels: employeeData.map((emp) => `Employee ${emp.id}`),
// // // // // // // // // // //     datasets: [
// // // // // // // // // // //       {
// // // // // // // // // // //         label: "Transactions",
// // // // // // // // // // //         data: employeeData.map((emp) => emp.transactions),
// // // // // // // // // // //         borderColor: "rgba(16, 185, 129, 0.6)",
// // // // // // // // // // //         fill: false,
// // // // // // // // // // //       },
// // // // // // // // // // //     ],
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="p-6 bg-gray-50 min-h-screen">
// // // // // // // // // // //       <div className="max-w-7xl mx-auto">
// // // // // // // // // // //         {/* Header */}
// // // // // // // // // // //         <div className="flex justify-between items-center mb-6">
// // // // // // // // // // //           <h1 className="text-2xl font-bold text-gray-800">
// // // // // // // // // // //             Employee Performance Reports
// // // // // // // // // // //           </h1>
// // // // // // // // // // //           <div className="flex gap-4">
// // // // // // // // // // //             <button
// // // // // // // // // // //               onClick={exportCSV}
// // // // // // // // // // //               className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // // // // // // //             >
// // // // // // // // // // //               <Download size={16} />
// // // // // // // // // // //               Export CSV
// // // // // // // // // // //             </button>
// // // // // // // // // // //             <button
// // // // // // // // // // //               onClick={exportPDF}
// // // // // // // // // // //               className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
// // // // // // // // // // //             >
// // // // // // // // // // //               <FileText size={16} />
// // // // // // // // // // //               Export PDF
// // // // // // // // // // //             </button>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Date Filter */}
// // // // // // // // // // //         <div className="bg-white p-6 rounded-lg shadow mb-6">
// // // // // // // // // // //           <div className="flex gap-4 items-end">
// // // // // // // // // // //             <div>
// // // // // // // // // // //               <label className="block text-sm font-medium text-gray-700">
// // // // // // // // // // //                 Start Date
// // // // // // // // // // //               </label>
// // // // // // // // // // //               <input
// // // // // // // // // // //                 type="date"
// // // // // // // // // // //                 value={startDate}
// // // // // // // // // // //                 onChange={(e) => setStartDate(e.target.value)}
// // // // // // // // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
// // // // // // // // // // //               />
// // // // // // // // // // //             </div>
// // // // // // // // // // //             <div>
// // // // // // // // // // //               <label className="block text-sm font-medium text-gray-700">
// // // // // // // // // // //                 End Date
// // // // // // // // // // //               </label>
// // // // // // // // // // //               <input
// // // // // // // // // // //                 type="date"
// // // // // // // // // // //                 value={endDate}
// // // // // // // // // // //                 onChange={(e) => setEndDate(e.target.value)}
// // // // // // // // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
// // // // // // // // // // //               />
// // // // // // // // // // //             </div>
// // // // // // // // // // //             <button
// // // // // // // // // // //               onClick={fetchEmployeePerformance}
// // // // // // // // // // //               disabled={loading || !startDate || !endDate}
// // // // // // // // // // //               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
// // // // // // // // // // //             >
// // // // // // // // // // //               {loading ? "Loading..." : "Generate Report"}
// // // // // // // // // // //             </button>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           {error && <p className="text-red-500 mt-2">{error}</p>}
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Summary Cards */}
// // // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // // // //             <div className="flex items-center gap-2">
// // // // // // // // // // //               <DollarSign size={20} className="text-blue-500" />
// // // // // // // // // // //               <h2 className="text-lg font-semibold text-gray-800">Total Revenue</h2>
// // // // // // // // // // //             </div>
// // // // // // // // // // //             <p className="text-2xl font-bold text-gray-900">
// // // // // // // // // // //               ${totalRevenue.toLocaleString()}
// // // // // // // // // // //             </p>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // // // //             <div className="flex items-center gap-2">
// // // // // // // // // // //               <TrendingUp size={20} className="text-green-500" />
// // // // // // // // // // //               <h2 className="text-lg font-semibold text-gray-800">Transactions</h2>
// // // // // // // // // // //             </div>
// // // // // // // // // // //             <p className="text-2xl font-bold text-gray-900">{totalTransactions}</p>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // // // //             <div className="flex items-center gap-2">
// // // // // // // // // // //               <User size={20} className="text-purple-500" />
// // // // // // // // // // //               <h2 className="text-lg font-semibold text-gray-800">Average Sale</h2>
// // // // // // // // // // //             </div>
// // // // // // // // // // //             <p className="text-2xl font-bold text-gray-900">
// // // // // // // // // // //               ${averageSale.toFixed(2)}
// // // // // // // // // // //             </p>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Charts */}
// // // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// // // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // // // //             <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // // // // // // // // //               Revenue by Employee
// // // // // // // // // // //             </h2>
// // // // // // // // // // //             <Bar data={barChartData} />
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // // // //             <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // // // // // // // // //               Transactions Over Time
// // // // // // // // // // //             </h2>
// // // // // // // // // // //             <Line data={lineChartData} />
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Employee Leaderboard */}
// // // // // // // // // // //         <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // // // //           <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // // // // // // // // //             Employee Leaderboard
// // // // // // // // // // //           </h2>
// // // // // // // // // // //           <table className="w-full">
// // // // // // // // // // //             <thead>
// // // // // // // // // // //               <tr className="bg-gray-100">
// // // // // // // // // // //                 <th className="p-3 text-left">Employee ID</th>
// // // // // // // // // // //                 <th className="p-3 text-left">Total Sales</th>
// // // // // // // // // // //                 <th className="p-3 text-left">Transactions</th>
// // // // // // // // // // //                 <th className="p-3 text-left">Top Product</th>
// // // // // // // // // // //               </tr>
// // // // // // // // // // //             </thead>
// // // // // // // // // // //             <tbody>
// // // // // // // // // // //               {employeeData.map((emp) => (
// // // // // // // // // // //                 <tr key={emp.id} className="border-b">
// // // // // // // // // // //                   <td className="p-3">{emp.id}</td>
// // // // // // // // // // //                   <td className="p-3">${emp.totalSales.toLocaleString()}</td>
// // // // // // // // // // //                   <td className="p-3">{emp.transactions}</td>
// // // // // // // // // // //                   <td className="p-3">{emp.topProduct}</td>
// // // // // // // // // // //                 </tr>
// // // // // // // // // // //               ))}
// // // // // // // // // // //             </tbody>
// // // // // // // // // // //           </table>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default EmployeePerformanceReports;
// // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // import { Bar, Line } from "react-chartjs-2";
// // // // // // // // // // import { Calendar, TrendingUp, User, DollarSign, FileText, Download } from "react-feather";
// // // // // // // // // // import * as XLSX from "xlsx";
// // // // // // // // // // import jsPDF from "jspdf";
// // // // // // // // // // import "jspdf-autotable";

// // // // // // // // // // const EmployeePerformanceReports = () => {
// // // // // // // // // //   const [startDate, setStartDate] = useState("");
// // // // // // // // // //   const [endDate, setEndDate] = useState("");
// // // // // // // // // //   const [employeeData, setEmployeeData] = useState([]);
// // // // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // //   const [totalRevenue, setTotalRevenue] = useState(0);
// // // // // // // // // //   const [totalTransactions, setTotalTransactions] = useState(0);
// // // // // // // // // //   const [averageSale, setAverageSale] = useState(0);

// // // // // // // // // //   // Fetch data from backend
// // // // // // // // // //   const fetchEmployeePerformance = async () => {
// // // // // // // // // //     setLoading(true);
// // // // // // // // // //     setError(null);

// // // // // // // // // //     // Validate dates
// // // // // // // // // //     if (!startDate || !endDate) {
// // // // // // // // // //       setError("Please select both start and end dates.");
// // // // // // // // // //       setLoading(false);
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     if (new Date(startDate) > new Date(endDate)) {
// // // // // // // // // //       setError("Start date cannot be after end date.");
// // // // // // // // // //       setLoading(false);
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     try {
// // // // // // // // // //       const storeId = localStorage.getItem("storeId");
// // // // // // // // // //       const response = await fetch(
// // // // // // // // // //         `http://localhost:5010/api/daily-sales?startDate=${startDate}&endDate=${endDate}`,
// // // // // // // // // //         {
// // // // // // // // // //           headers: {
// // // // // // // // // //             "storeId": storeId, // Pass storeId in headers
// // // // // // // // // //           },
// // // // // // // // // //         }
// // // // // // // // // //       );

// // // // // // // // // //       if (!response.ok) {
// // // // // // // // // //         const errorData = await response.json();
// // // // // // // // // //         throw new Error(errorData.error || "Failed to fetch data");
// // // // // // // // // //       }

// // // // // // // // // //       const data = await response.json();

// // // // // // // // // //       // Process data
// // // // // // // // // //       const processedData = processEmployeeData(data);
// // // // // // // // // //       setEmployeeData(processedData);
// // // // // // // // // //       calculateSummary(processedData);
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       setError(err.message);
// // // // // // // // // //     } finally {
// // // // // // // // // //       setLoading(false);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   // Process employee data
// // // // // // // // // //   const processEmployeeData = (salesData) => {
// // // // // // // // // //     const employeeMap = {};

// // // // // // // // // //     salesData.forEach((sale) => {
// // // // // // // // // //       const employeeId = sale.employee_id;
// // // // // // // // // //       if (!employeeMap[employeeId]) {
// // // // // // // // // //         employeeMap[employeeId] = {
// // // // // // // // // //           totalSales: 0,
// // // // // // // // // //           transactions: 0,
// // // // // // // // // //           productsSold: {},
// // // // // // // // // //         };
// // // // // // // // // //       }
// // // // // // // // // //       employeeMap[employeeId].totalSales += sale.total_amount;
// // // // // // // // // //       employeeMap[employeeId].transactions += 1;

// // // // // // // // // //       // Track products sold
// // // // // // // // // //       sale.products.forEach((product) => {
// // // // // // // // // //         if (!employeeMap[employeeId].productsSold[product.name]) {
// // // // // // // // // //           employeeMap[employeeId].productsSold[product.name] = 0;
// // // // // // // // // //         }
// // // // // // // // // //         employeeMap[employeeId].productsSold[product.name] += product.quantity;
// // // // // // // // // //       });
// // // // // // // // // //     });

// // // // // // // // // //     return Object.keys(employeeMap).map((id) => ({
// // // // // // // // // //       id,
// // // // // // // // // //       ...employeeMap[id],
// // // // // // // // // //       topProduct: getTopProduct(employeeMap[id].productsSold),
// // // // // // // // // //     }));
// // // // // // // // // //   };

// // // // // // // // // //   // Get top product for an employee
// // // // // // // // // //   const getTopProduct = (productsSold) => {
// // // // // // // // // //     return Object.keys(productsSold).reduce((a, b) =>
// // // // // // // // // //       productsSold[a] > productsSold[b] ? a : b
// // // // // // // // // //     );
// // // // // // // // // //   };

// // // // // // // // // //   // Calculate summary stats
// // // // // // // // // //   const calculateSummary = (employeeData) => {
// // // // // // // // // //     const totalSales = employeeData.reduce((sum, emp) => sum + emp.totalSales, 0);
// // // // // // // // // //     const totalTransactions = employeeData.reduce(
// // // // // // // // // //       (sum, emp) => sum + emp.transactions,
// // // // // // // // // //       0
// // // // // // // // // //     );
// // // // // // // // // //     setTotalRevenue(totalSales);
// // // // // // // // // //     setTotalTransactions(totalTransactions);
// // // // // // // // // //     setAverageSale(totalSales / totalTransactions);
// // // // // // // // // //   };

// // // // // // // // // //   // Export to CSV
// // // // // // // // // //   const exportCSV = () => {
// // // // // // // // // //     const headers = ["Employee ID", "Total Sales", "Transactions", "Top Product"];
// // // // // // // // // //     const csvData = [
// // // // // // // // // //       headers,
// // // // // // // // // //       ...employeeData.map((emp) => [
// // // // // // // // // //         emp.id,
// // // // // // // // // //         emp.totalSales,
// // // // // // // // // //         emp.transactions,
// // // // // // // // // //         emp.topProduct,
// // // // // // // // // //       ]),
// // // // // // // // // //     ];

// // // // // // // // // //     const csvContent = csvData.map((row) => row.join(",")).join("\n");
// // // // // // // // // //     const blob = new Blob([csvContent], { type: "text/csv" });
// // // // // // // // // //     const url = URL.createObjectURL(blob);
// // // // // // // // // //     const link = document.createElement("a");
// // // // // // // // // //     link.href = url;
// // // // // // // // // //     link.download = `employee_performance_${startDate}_to_${endDate}.csv`;
// // // // // // // // // //     link.click();
// // // // // // // // // //   };

// // // // // // // // // //   // Export to PDF
// // // // // // // // // //   const exportPDF = () => {
// // // // // // // // // //     const doc = new jsPDF();
// // // // // // // // // //     doc.text(`Employee Performance Report (${startDate} to ${endDate})`, 10, 10);
// // // // // // // // // //     doc.autoTable({
// // // // // // // // // //       head: [["Employee ID", "Total Sales", "Transactions", "Top Product"]],
// // // // // // // // // //       body: employeeData.map((emp) => [
// // // // // // // // // //         emp.id,
// // // // // // // // // //         emp.totalSales,
// // // // // // // // // //         emp.transactions,
// // // // // // // // // //         emp.topProduct,
// // // // // // // // // //       ]),
// // // // // // // // // //     });
// // // // // // // // // //     doc.save(`employee_performance_${startDate}_to_${endDate}.pdf`);
// // // // // // // // // //   };

// // // // // // // // // //   // Chart data
// // // // // // // // // //   const barChartData = {
// // // // // // // // // //     labels: employeeData.map((emp) => `Employee ${emp.id}`),
// // // // // // // // // //     datasets: [
// // // // // // // // // //       {
// // // // // // // // // //         label: "Total Sales",
// // // // // // // // // //         data: employeeData.map((emp) => emp.totalSales),
// // // // // // // // // //         backgroundColor: "rgba(59, 130, 246, 0.6)",
// // // // // // // // // //       },
// // // // // // // // // //     ],
// // // // // // // // // //   };

// // // // // // // // // //   const lineChartData = {
// // // // // // // // // //     labels: employeeData.map((emp) => `Employee ${emp.id}`),
// // // // // // // // // //     datasets: [
// // // // // // // // // //       {
// // // // // // // // // //         label: "Transactions",
// // // // // // // // // //         data: employeeData.map((emp) => emp.transactions),
// // // // // // // // // //         borderColor: "rgba(16, 185, 129, 0.6)",
// // // // // // // // // //         fill: false,
// // // // // // // // // //       },
// // // // // // // // // //     ],
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="p-6 bg-gray-50 min-h-screen">
// // // // // // // // // //       <div className="max-w-7xl mx-auto">
// // // // // // // // // //         {/* Header */}
// // // // // // // // // //         <div className="flex justify-between items-center mb-6">
// // // // // // // // // //           <h1 className="text-2xl font-bold text-gray-800">
// // // // // // // // // //             Employee Performance Reports
// // // // // // // // // //           </h1>
// // // // // // // // // //           <div className="flex gap-4">
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={exportCSV}
// // // // // // // // // //               className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // // // // // //             >
// // // // // // // // // //               <Download size={16} />
// // // // // // // // // //               Export CSV
// // // // // // // // // //             </button>
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={exportPDF}
// // // // // // // // // //               className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
// // // // // // // // // //             >
// // // // // // // // // //               <FileText size={16} />
// // // // // // // // // //               Export PDF
// // // // // // // // // //             </button>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Date Filter */}
// // // // // // // // // //         <div className="bg-white p-6 rounded-lg shadow mb-6">
// // // // // // // // // //           <div className="flex gap-4 items-end">
// // // // // // // // // //             <div>
// // // // // // // // // //               <label className="block text-sm font-medium text-gray-700">
// // // // // // // // // //                 Start Date
// // // // // // // // // //               </label>
// // // // // // // // // //               <input
// // // // // // // // // //                 type="date"
// // // // // // // // // //                 value={startDate}
// // // // // // // // // //                 onChange={(e) => setStartDate(e.target.value)}
// // // // // // // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
// // // // // // // // // //               />
// // // // // // // // // //             </div>
// // // // // // // // // //             <div>
// // // // // // // // // //               <label className="block text-sm font-medium text-gray-700">
// // // // // // // // // //                 End Date
// // // // // // // // // //               </label>
// // // // // // // // // //               <input
// // // // // // // // // //                 type="date"
// // // // // // // // // //                 value={endDate}
// // // // // // // // // //                 onChange={(e) => setEndDate(e.target.value)}
// // // // // // // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
// // // // // // // // // //               />
// // // // // // // // // //             </div>
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={fetchEmployeePerformance}
// // // // // // // // // //               disabled={loading || !startDate || !endDate}
// // // // // // // // // //               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
// // // // // // // // // //             >
// // // // // // // // // //               {loading ? "Loading..." : "Generate Report"}
// // // // // // // // // //             </button>
// // // // // // // // // //           </div>
// // // // // // // // // //           {error && <p className="text-red-500 mt-2">{error}</p>}
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Summary Cards */}
// // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // // //             <div className="flex items-center gap-2">
// // // // // // // // // //               <DollarSign size={20} className="text-blue-500" />
// // // // // // // // // //               <h2 className="text-lg font-semibold text-gray-800">Total Revenue</h2>
// // // // // // // // // //             </div>
// // // // // // // // // //             <p className="text-2xl font-bold text-gray-900">
// // // // // // // // // //               ${totalRevenue.toLocaleString()}
// // // // // // // // // //             </p>
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // // //             <div className="flex items-center gap-2">
// // // // // // // // // //               <TrendingUp size={20} className="text-green-500" />
// // // // // // // // // //               <h2 className="text-lg font-semibold text-gray-800">Transactions</h2>
// // // // // // // // // //             </div>
// // // // // // // // // //             <p className="text-2xl font-bold text-gray-900">{totalTransactions}</p>
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // // //             <div className="flex items-center gap-2">
// // // // // // // // // //               <User size={20} className="text-purple-500" />
// // // // // // // // // //               <h2 className="text-lg font-semibold text-gray-800">Average Sale</h2>
// // // // // // // // // //             </div>
// // // // // // // // // //             <p className="text-2xl font-bold text-gray-900">
// // // // // // // // // //               ${averageSale.toFixed(2)}
// // // // // // // // // //             </p>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Charts */}
// // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // // //             <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // // // // // // // //               Revenue by Employee
// // // // // // // // // //             </h2>
// // // // // // // // // //             <Bar data={barChartData} />
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // // //             <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // // // // // // // //               Transactions Over Time
// // // // // // // // // //             </h2>
// // // // // // // // // //             <Line data={lineChartData} />
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Employee Leaderboard */}
// // // // // // // // // //         <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // // //           <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // // // // // // // //             Employee Leaderboard
// // // // // // // // // //           </h2>
// // // // // // // // // //           <table className="w-full">
// // // // // // // // // //             <thead>
// // // // // // // // // //               <tr className="bg-gray-100">
// // // // // // // // // //                 <th className="p-3 text-left">Employee ID</th>
// // // // // // // // // //                 <th className="p-3 text-left">Total Sales</th>
// // // // // // // // // //                 <th className="p-3 text-left">Transactions</th>
// // // // // // // // // //                 <th className="p-3 text-left">Top Product</th>
// // // // // // // // // //               </tr>
// // // // // // // // // //             </thead>
// // // // // // // // // //             <tbody>
// // // // // // // // // //               {employeeData.map((emp) => (
// // // // // // // // // //                 <tr key={emp.id} className="border-b">
// // // // // // // // // //                   <td className="p-3">{emp.id}</td>
// // // // // // // // // //                   <td className="p-3">${emp.totalSales.toLocaleString()}</td>
// // // // // // // // // //                   <td className="p-3">{emp.transactions}</td>
// // // // // // // // // //                   <td className="p-3">{emp.topProduct}</td>
// // // // // // // // // //                 </tr>
// // // // // // // // // //               ))}
// // // // // // // // // //             </tbody>
// // // // // // // // // //           </table>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default EmployeePerformanceReports;


// // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // import { Bar, Line } from "react-chartjs-2";
// // // // // // // // // import { Calendar, TrendingUp, User, DollarSign, FileText, Download } from "react-feather";
// // // // // // // // // import * as XLSX from "xlsx";
// // // // // // // // // import jsPDF from "jspdf";
// // // // // // // // // import "jspdf-autotable";

// // // // // // // // // const EmployeePerformanceReports = () => {
// // // // // // // // //   const [selectedDate, setSelectedDate] = useState("");
// // // // // // // // //   const [salesData, setSalesData] = useState([]);
// // // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // //   const [totalRevenue, setTotalRevenue] = useState(0);
// // // // // // // // //   const [totalTransactions, setTotalTransactions] = useState(0);
// // // // // // // // //   const [averageSale, setAverageSale] = useState(0);

// // // // // // // // //   // Fetch data from backend
// // // // // // // // //   const fetchSalesData = async () => {
// // // // // // // // //     setLoading(true);
// // // // // // // // //     setError(null);

// // // // // // // // //     // Validate date
// // // // // // // // //     if (!selectedDate) {
// // // // // // // // //       setError("Please select a date.");
// // // // // // // // //       setLoading(false);
// // // // // // // // //       return;
// // // // // // // // //     }

// // // // // // // // //     try {
// // // // // // // // //       const storeId = localStorage.getItem("storeId");
// // // // // // // // //       const response = await fetch(
// // // // // // // // //         `http://localhost:5010/api/daily-sales?date=${selectedDate}`,
// // // // // // // // //         {
// // // // // // // // //           headers: {
// // // // // // // // //             "storeId": storeId, // Pass storeId in headers
// // // // // // // // //           },
// // // // // // // // //         }
// // // // // // // // //       );

// // // // // // // // //       if (!response.ok) {
// // // // // // // // //         const errorData = await response.json();
// // // // // // // // //         throw new Error(errorData.error || "Failed to fetch data");
// // // // // // // // //       }

// // // // // // // // //       const data = await response.json();
// // // // // // // // //       setSalesData(data[selectedDate].sales || []);

// // // // // // // // //       // Calculate summary stats
// // // // // // // // //       const totalSales = data[selectedDate].total_amount || 0;
// // // // // // // // //       const totalTransactions = data[selectedDate].sales?.length || 0;
// // // // // // // // //       setTotalRevenue(totalSales);
// // // // // // // // //       setTotalTransactions(totalTransactions);
// // // // // // // // //       setAverageSale(totalTransactions > 0 ? totalSales / totalTransactions : 0);
// // // // // // // // //     } catch (err) {
// // // // // // // // //       setError(err.message);
// // // // // // // // //     } finally {
// // // // // // // // //       setLoading(false);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   // Export to CSV
// // // // // // // // //   const exportCSV = () => {
// // // // // // // // //     if (salesData.length === 0) return;

// // // // // // // // //     const headers = ["Sale ID", "Total Amount", "Products", "Date"];
// // // // // // // // //     const csvData = [
// // // // // // // // //       headers,
// // // // // // // // //       ...salesData.map((sale) => [
// // // // // // // // //         sale.id,
// // // // // // // // //         sale.total_amount,
// // // // // // // // //         sale.products.map((p) => `${p.name} (${p.quantity})`).join(", "),
// // // // // // // // //         sale.date,
// // // // // // // // //       ]),
// // // // // // // // //     ];

// // // // // // // // //     const csvContent = csvData.map((row) => row.join(",")).join("\n");
// // // // // // // // //     const blob = new Blob([csvContent], { type: "text/csv" });
// // // // // // // // //     const url = URL.createObjectURL(blob);
// // // // // // // // //     const link = document.createElement("a");
// // // // // // // // //     link.href = url;
// // // // // // // // //     link.download = `sales_data_${selectedDate}.csv`;
// // // // // // // // //     link.click();
// // // // // // // // //   };

// // // // // // // // //   // Export to PDF
// // // // // // // // //   const exportPDF = () => {
// // // // // // // // //     if (salesData.length === 0) return;

// // // // // // // // //     const doc = new jsPDF();
// // // // // // // // //     doc.text(`Sales Report for ${selectedDate}`, 10, 10);
// // // // // // // // //     doc.autoTable({
// // // // // // // // //       head: [["Sale ID", "Total Amount", "Products", "Date"]],
// // // // // // // // //       body: salesData.map((sale) => [
// // // // // // // // //         sale.id,
// // // // // // // // //         sale.total_amount,
// // // // // // // // //         sale.products.map((p) => `${p.name} (${p.quantity})`).join(", "),
// // // // // // // // //         sale.date,
// // // // // // // // //       ]),
// // // // // // // // //     });
// // // // // // // // //     doc.save(`sales_report_${selectedDate}.pdf`);
// // // // // // // // //   };

// // // // // // // // //   // Chart data
// // // // // // // // //   const barChartData = {
// // // // // // // // //     labels: salesData.map((sale) => `Sale ${sale.id}`),
// // // // // // // // //     datasets: [
// // // // // // // // //       {
// // // // // // // // //         label: "Total Amount",
// // // // // // // // //         data: salesData.map((sale) => sale.total_amount),
// // // // // // // // //         backgroundColor: "rgba(59, 130, 246, 0.6)",
// // // // // // // // //       },
// // // // // // // // //     ],
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="p-6 bg-gray-50 min-h-screen">
// // // // // // // // //       <div className="max-w-7xl mx-auto">
// // // // // // // // //         {/* Header */}
// // // // // // // // //         <div className="flex justify-between items-center mb-6">
// // // // // // // // //           <h1 className="text-2xl font-bold text-gray-800">Sales Performance Report</h1>
// // // // // // // // //           <div className="flex gap-4">
// // // // // // // // //             <button
// // // // // // // // //               onClick={exportCSV}
// // // // // // // // //               className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // // // // //             >
// // // // // // // // //               <Download size={16} />
// // // // // // // // //               Export CSV
// // // // // // // // //             </button>
// // // // // // // // //             <button
// // // // // // // // //               onClick={exportPDF}
// // // // // // // // //               className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
// // // // // // // // //             >
// // // // // // // // //               <FileText size={16} />
// // // // // // // // //               Export PDF
// // // // // // // // //             </button>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Date Filter */}
// // // // // // // // //         <div className="bg-white p-6 rounded-lg shadow mb-6">
// // // // // // // // //           <div className="flex gap-4 items-end">
// // // // // // // // //             <div>
// // // // // // // // //               <label className="block text-sm font-medium text-gray-700">
// // // // // // // // //                 Select Date
// // // // // // // // //               </label>
// // // // // // // // //               <input
// // // // // // // // //                 type="date"
// // // // // // // // //                 value={selectedDate}
// // // // // // // // //                 onChange={(e) => setSelectedDate(e.target.value)}
// // // // // // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
// // // // // // // // //               />
// // // // // // // // //             </div>
// // // // // // // // //             <button
// // // // // // // // //               onClick={fetchSalesData}
// // // // // // // // //               disabled={loading || !selectedDate}
// // // // // // // // //               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
// // // // // // // // //             >
// // // // // // // // //               {loading ? "Loading..." : "Generate Report"}
// // // // // // // // //             </button>
// // // // // // // // //           </div>
// // // // // // // // //           {error && <p className="text-red-500 mt-2">{error}</p>}
// // // // // // // // //         </div>

// // // // // // // // //         {/* Summary Cards */}
// // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // //             <div className="flex items-center gap-2">
// // // // // // // // //               <DollarSign size={20} className="text-blue-500" />
// // // // // // // // //               <h2 className="text-lg font-semibold text-gray-800">Total Revenue</h2>
// // // // // // // // //             </div>
// // // // // // // // //             <p className="text-2xl font-bold text-gray-900">
// // // // // // // // //               ${totalRevenue.toLocaleString()}
// // // // // // // // //             </p>
// // // // // // // // //           </div>
// // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // //             <div className="flex items-center gap-2">
// // // // // // // // //               <TrendingUp size={20} className="text-green-500" />
// // // // // // // // //               <h2 className="text-lg font-semibold text-gray-800">Transactions</h2>
// // // // // // // // //             </div>
// // // // // // // // //             <p className="text-2xl font-bold text-gray-900">{totalTransactions}</p>
// // // // // // // // //           </div>
// // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // //             <div className="flex items-center gap-2">
// // // // // // // // //               <User size={20} className="text-purple-500" />
// // // // // // // // //               <h2 className="text-lg font-semibold text-gray-800">Average Sale</h2>
// // // // // // // // //             </div>
// // // // // // // // //             <p className="text-2xl font-bold text-gray-900">
// // // // // // // // //               ${averageSale.toFixed(2)}
// // // // // // // // //             </p>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Charts */}
// // // // // // // // //         <div className="bg-white p-6 rounded-lg shadow mb-6">
// // // // // // // // //           <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // // // // // // //             Sales Breakdown
// // // // // // // // //           </h2>
// // // // // // // // //           <Bar data={barChartData} />
// // // // // // // // //         </div>

// // // // // // // // //         {/* Sales Table */}
// // // // // // // // //         <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // // //           <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // // // // // // //             Sales Data
// // // // // // // // //           </h2>
// // // // // // // // //           <table className="w-full">
// // // // // // // // //             <thead>
// // // // // // // // //               <tr className="bg-gray-100">
// // // // // // // // //                 <th className="p-3 text-left">Sale ID</th>
// // // // // // // // //                 <th className="p-3 text-left">Total Amount</th>
// // // // // // // // //                 <th className="p-3 text-left">Products</th>
// // // // // // // // //                 <th className="p-3 text-left">Date</th>
// // // // // // // // //               </tr>
// // // // // // // // //             </thead>
// // // // // // // // //             <tbody>
// // // // // // // // //               {salesData.map((sale) => (
// // // // // // // // //                 <tr key={sale.id} className="border-b">
// // // // // // // // //                   <td className="p-3">{sale.id}</td>
// // // // // // // // //                   <td className="p-3">${sale.total_amount.toLocaleString()}</td>
// // // // // // // // //                   <td className="p-3">
// // // // // // // // //                     {sale.products.map((p) => `${p.name} (${p.quantity})`).join(", ")}
// // // // // // // // //                   </td>
// // // // // // // // //                   <td className="p-3">{sale.date}</td>
// // // // // // // // //                 </tr>
// // // // // // // // //               ))}
// // // // // // // // //             </tbody>
// // // // // // // // //           </table>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default EmployeePerformanceReports;
// // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // import { Bar, Line } from "react-chartjs-2";
// // // // // // // // import { Calendar, TrendingUp, User, DollarSign, FileText, Download } from "react-feather";
// // // // // // // // import * as XLSX from "xlsx";
// // // // // // // // import jsPDF from "jspdf";
// // // // // // // // import "jspdf-autotable";

// // // // // // // // const EmployeeSalesReport = () => {
// // // // // // // //   const [selectedDate, setSelectedDate] = useState("");
// // // // // // // //   const [salesData, setSalesData] = useState([]);
// // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // //   const [error, setError] = useState(null);
// // // // // // // //   const [totalRevenue, setTotalRevenue] = useState(0);
// // // // // // // //   const [totalTransactions, setTotalTransactions] = useState(0);
// // // // // // // //   const [averageSale, setAverageSale] = useState(0);

// // // // // // // //   // Fetch data from backend
// // // // // // // //   const fetchSalesData = async () => {
// // // // // // // //     setLoading(true);
// // // // // // // //     setError(null);

// // // // // // // //     // Validate date
// // // // // // // //     if (!selectedDate) {
// // // // // // // //       setError("Please select a date.");
// // // // // // // //       setLoading(false);
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     try {
// // // // // // // //       const storeId = localStorage.getItem("storeId");
// // // // // // // //       const response = await fetch(
// // // // // // // //         `http://localhost:5010/api/daily-sales?date=${selectedDate}`,
// // // // // // // //         {
// // // // // // // //           headers: {
// // // // // // // //             "storeId": storeId, // Pass storeId in headers
// // // // // // // //           },
// // // // // // // //         }
// // // // // // // //       );

// // // // // // // //       if (!response.ok) {
// // // // // // // //         const errorData = await response.json();
// // // // // // // //         throw new Error(errorData.error || "Failed to fetch data");
// // // // // // // //       }

// // // // // // // //       const data = await response.json();
// // // // // // // //       setSalesData(data[selectedDate].sales || []);

// // // // // // // //       // Calculate summary stats
// // // // // // // //       const totalSales = data[selectedDate].total_amount || 0;
// // // // // // // //       const totalTransactions = data[selectedDate].sales?.length || 0;
// // // // // // // //       setTotalRevenue(totalSales);
// // // // // // // //       setTotalTransactions(totalTransactions);
// // // // // // // //       setAverageSale(totalTransactions > 0 ? totalSales / totalTransactions : 0);
// // // // // // // //     } catch (err) {
// // // // // // // //       setError(err.message);
// // // // // // // //     } finally {
// // // // // // // //       setLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // Export to CSV
// // // // // // // //   const exportCSV = () => {
// // // // // // // //     if (salesData.length === 0) return;

// // // // // // // //     const headers = ["Sale ID", "Total Amount", "Products", "Date"];
// // // // // // // //     const csvData = [
// // // // // // // //       headers,
// // // // // // // //       ...salesData.map((sale) => [
// // // // // // // //         sale.id,
// // // // // // // //         sale.total_amount,
// // // // // // // //         sale.products.map((p) => `${p.name} (${p.quantity})`).join(", "),
// // // // // // // //         sale.date,
// // // // // // // //       ]),
// // // // // // // //     ];

// // // // // // // //     const csvContent = csvData.map((row) => row.join(",")).join("\n");
// // // // // // // //     const blob = new Blob([csvContent], { type: "text/csv" });
// // // // // // // //     const url = URL.createObjectURL(blob);
// // // // // // // //     const link = document.createElement("a");
// // // // // // // //     link.href = url;
// // // // // // // //     link.download = `sales_data_${selectedDate}.csv`;
// // // // // // // //     link.click();
// // // // // // // //   };

// // // // // // // //   // Export to PDF
// // // // // // // //   const exportPDF = () => {
// // // // // // // //     if (salesData.length === 0) return;

// // // // // // // //     const doc = new jsPDF();
// // // // // // // //     doc.text(`Sales Report for ${selectedDate}`, 10, 10);
// // // // // // // //     doc.autoTable({
// // // // // // // //       head: [["Sale ID", "Total Amount", "Products", "Date"]],
// // // // // // // //       body: salesData.map((sale) => [
// // // // // // // //         sale.id,
// // // // // // // //         sale.total_amount,
// // // // // // // //         sale.products.map((p) => `${p.name} (${p.quantity})`).join(", "),
// // // // // // // //         sale.date,
// // // // // // // //       ]),
// // // // // // // //     });
// // // // // // // //     doc.save(`sales_report_${selectedDate}.pdf`);
// // // // // // // //   };

// // // // // // // //   // Chart data
// // // // // // // //   const barChartData = {
// // // // // // // //     labels: salesData.map((sale) => `Sale ${sale.id}`),
// // // // // // // //     datasets: [
// // // // // // // //       {
// // // // // // // //         label: "Total Amount",
// // // // // // // //         data: salesData.map((sale) => sale.total_amount),
// // // // // // // //         backgroundColor: "rgba(59, 130, 246, 0.6)",
// // // // // // // //       },
// // // // // // // //     ],
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="p-6 bg-gray-50 min-h-screen">
// // // // // // // //       <div className="max-w-7xl mx-auto">
// // // // // // // //         {/* Header */}
// // // // // // // //         <div className="flex justify-between items-center mb-6">
// // // // // // // //           <h1 className="text-2xl font-bold text-gray-800">Employee Sales Report</h1>
// // // // // // // //           <div className="flex gap-4">
// // // // // // // //             <button
// // // // // // // //               onClick={exportCSV}
// // // // // // // //               className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // // // //             >
// // // // // // // //               <Download size={16} />
// // // // // // // //               Export CSV
// // // // // // // //             </button>
// // // // // // // //             <button
// // // // // // // //               onClick={exportPDF}
// // // // // // // //               className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
// // // // // // // //             >
// // // // // // // //               <FileText size={16} />
// // // // // // // //               Export PDF
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* Date Filter */}
// // // // // // // //         <div className="bg-white p-6 rounded-lg shadow mb-6">
// // // // // // // //           <div className="flex gap-4 items-end">
// // // // // // // //             <div>
// // // // // // // //               <label className="block text-sm font-medium text-gray-700">
// // // // // // // //                 Select Date
// // // // // // // //               </label>
// // // // // // // //               <input
// // // // // // // //                 type="date"
// // // // // // // //                 value={selectedDate}
// // // // // // // //                 onChange={(e) => setSelectedDate(e.target.value)}
// // // // // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
// // // // // // // //               />
// // // // // // // //             </div>
// // // // // // // //             <button
// // // // // // // //               onClick={fetchSalesData}
// // // // // // // //               disabled={loading || !selectedDate}
// // // // // // // //               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
// // // // // // // //             >
// // // // // // // //               {loading ? "Loading..." : "Generate Report"}
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //           {error && <p className="text-red-500 mt-2">{error}</p>}
// // // // // // // //         </div>

// // // // // // // //         {/* Summary Cards */}
// // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // //             <div className="flex items-center gap-2">
// // // // // // // //               <DollarSign size={20} className="text-blue-500" />
// // // // // // // //               <h2 className="text-lg font-semibold text-gray-800">Total Revenue</h2>
// // // // // // // //             </div>
// // // // // // // //             <p className="text-2xl font-bold text-gray-900">
// // // // // // // //               ${totalRevenue.toLocaleString()}
// // // // // // // //             </p>
// // // // // // // //           </div>
// // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // //             <div className="flex items-center gap-2">
// // // // // // // //               <TrendingUp size={20} className="text-green-500" />
// // // // // // // //               <h2 className="text-lg font-semibold text-gray-800">Transactions</h2>
// // // // // // // //             </div>
// // // // // // // //             <p className="text-2xl font-bold text-gray-900">{totalTransactions}</p>
// // // // // // // //           </div>
// // // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // //             <div className="flex items-center gap-2">
// // // // // // // //               <User size={20} className="text-purple-500" />
// // // // // // // //               <h2 className="text-lg font-semibold text-gray-800">Average Sale</h2>
// // // // // // // //             </div>
// // // // // // // //             <p className="text-2xl font-bold text-gray-900">
// // // // // // // //               ${averageSale.toFixed(2)}
// // // // // // // //             </p>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* Charts */}
// // // // // // // //         <div className="bg-white p-6 rounded-lg shadow mb-6">
// // // // // // // //           <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // // // // // //             Sales Breakdown
// // // // // // // //           </h2>
// // // // // // // //           <Bar data={barChartData} />
// // // // // // // //         </div>

// // // // // // // //         {/* Sales Table */}
// // // // // // // //         <div className="bg-white p-6 rounded-lg shadow">
// // // // // // // //           <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // // // // // //             Sales Data
// // // // // // // //           </h2>
// // // // // // // //           <table className="w-full">
// // // // // // // //             <thead>
// // // // // // // //               <tr className="bg-gray-100">
// // // // // // // //                 <th className="p-3 text-left">Sale ID</th>
// // // // // // // //                 <th className="p-3 text-left">Total Amount</th>
// // // // // // // //                 <th className="p-3 text-left">Products</th>
// // // // // // // //                 <th className="p-3 text-left">Date</th>
// // // // // // // //               </tr>
// // // // // // // //             </thead>
// // // // // // // //             <tbody>
// // // // // // // //               {salesData.map((sale) => (
// // // // // // // //                 <tr key={sale.id} className="border-b">
// // // // // // // //                   <td className="p-3">{sale.id}</td>
// // // // // // // //                   <td className="p-3">${sale.total_amount.toLocaleString()}</td>
// // // // // // // //                   <td className="p-3">
// // // // // // // //                     {sale.products.map((p) => `${p.name} (${p.quantity})`).join(", ")}
// // // // // // // //                   </td>
// // // // // // // //                   <td className="p-3">{sale.date}</td>
// // // // // // // //                 </tr>
// // // // // // // //               ))}
// // // // // // // //             </tbody>
// // // // // // // //           </table>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default EmployeeSalesReport;
// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import { Bar, Line } from "react-chartjs-2";
// // // // // // import { Calendar, TrendingUp, User, DollarSign, FileText, Download } from "react-feather";
// // // // // // // import * as XLSX from "xlsx";
// // // // // // // import jsPDF from "jspdf";
// // // // // // // import "jspdf-autotable";

// // // // // // // const EmployeeSalesReport = () => {
// // // // // // //   const [selectedDate, setSelectedDate] = useState("");
// // // // // // //   const [salesData, setSalesData] = useState([]);
// // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // //   const [error, setError] = useState(null);
// // // // // // //   const [totalRevenue, setTotalRevenue] = useState(0);
// // // // // // //   const [totalTransactions, setTotalTransactions] = useState(0);
// // // // // // //   const [averageSale, setAverageSale] = useState(0);

// // // // // // //   // Fetch data from backend
// // // // // // //   const fetchSalesData = async () => {
// // // // // // //     setLoading(true);
// // // // // // //     setError(null);

// // // // // // //     // Validate date
// // // // // // //     if (!selectedDate) {
// // // // // // //       setError("Please select a date.");
// // // // // // //       setLoading(false);
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     try {
// // // // // // //       const storeId = localStorage.getItem("storeId");
// // // // // // //       const response = await fetch(
// // // // // // //         `http://localhost:5010/api/daily-sales?date=${selectedDate}`,
// // // // // // //         {
// // // // // // //           headers: {
// // // // // // //             "storeId": storeId, // Pass storeId in headers
// // // // // // //           },
// // // // // // //         }
// // // // // // //       );

// // // // // // //       if (!response.ok) {
// // // // // // //         const errorData = await response.json();
// // // // // // //         throw new Error(errorData.error || "Failed to fetch data");
// // // // // // //       }

// // // // // // //       const data = await response.json();
// // // // // // //       setSalesData(data[selectedDate].sales || []);

// // // // // // //       // Calculate summary stats
// // // // // // //       const totalSales = data[selectedDate].total_amount || 0;
// // // // // // //       const totalTransactions = data[selectedDate].sales?.length || 0;
// // // // // // //       setTotalRevenue(totalSales);
// // // // // // //       setTotalTransactions(totalTransactions);
// // // // // // //       setAverageSale(totalTransactions > 0 ? totalSales / totalTransactions : 0);
// // // // // // //     } catch (err) {
// // // // // // //       setError(err.message);
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Export to CSV
// // // // // // //   const exportCSV = () => {
// // // // // // //     if (salesData.length === 0) return;

// // // // // // //     const headers = ["Sale ID", "Total Amount", "Products", "Date"];
// // // // // // //     const csvData = [
// // // // // // //       headers,
// // // // // // //       ...salesData.map((sale) => [
// // // // // // //         sale.id,
// // // // // // //         sale.total_amount,
// // // // // // //         sale.products.map((p) => `${p.name} (${p.quantity})`).join(", "),
// // // // // // //         sale.date,
// // // // // // //       ]),
// // // // // // //     ];

// // // // // // //     const csvContent = csvData.map((row) => row.join(",")).join("\n");
// // // // // // //     const blob = new Blob([csvContent], { type: "text/csv" });
// // // // // // //     const url = URL.createObjectURL(blob);
// // // // // // //     const link = document.createElement("a");
// // // // // // //     link.href = url;
// // // // // // //     link.download = `sales_data_${selectedDate}.csv`;
// // // // // // //     link.click();
// // // // // // //   };

// // // // // // //   // Export to PDF
// // // // // // //   const exportPDF = () => {
// // // // // // //     if (salesData.length === 0) return;

// // // // // // //     const doc = new jsPDF();
// // // // // // //     doc.text(`Sales Report for ${selectedDate}`, 10, 10);
// // // // // // //     doc.autoTable({
// // // // // // //       head: [["Sale ID", "Total Amount", "Products", "Date"]],
// // // // // // //       body: salesData.map((sale) => [
// // // // // // //         sale.id,
// // // // // // //         sale.total_amount,
// // // // // // //         sale.products.map((p) => `${p.name} (${p.quantity})`).join(", "),
// // // // // // //         sale.date,
// // // // // // //       ]),
// // // // // // //     });
// // // // // // //     doc.save(`sales_report_${selectedDate}.pdf`);
// // // // // // //   };

// // // // // // //   // Chart data
// // // // // // //   const barChartData = {
// // // // // // //     labels: salesData.map((sale) => `Sale ${sale.id}`),
// // // // // // //     datasets: [
// // // // // // //       {
// // // // // // //         label: "Total Amount",
// // // // // // //         data: salesData.map((sale) => sale.total_amount),
// // // // // // //         backgroundColor: "rgba(59, 130, 246, 0.6)",
// // // // // // //       },
// // // // // // //     ],
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="p-6 bg-gray-50 min-h-screen">
// // // // // // //       <div className="max-w-7xl mx-auto">
// // // // // // //         {/* Header */}
// // // // // // //         <div className="flex justify-between items-center mb-6">
// // // // // // //           <h1 className="text-2xl font-bold text-gray-800">Employee Sales Report</h1>
// // // // // // //           <div className="flex gap-4">
// // // // // // //             <button
// // // // // // //               onClick={exportCSV}
// // // // // // //               className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // // //             >
// // // // // // //               <Download size={16} />
// // // // // // //               Export CSV
// // // // // // //             </button>
// // // // // // //             <button
// // // // // // //               onClick={exportPDF}
// // // // // // //               className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
// // // // // // //             >
// // // // // // //               <FileText size={16} />
// // // // // // //               Export PDF
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Date Filter */}
// // // // // // //         <div className="bg-white p-6 rounded-lg shadow mb-6">
// // // // // // //           <div className="flex gap-4 items-end">
// // // // // // //             <div>
// // // // // // //               <label className="block text-sm font-medium text-gray-700">
// // // // // // //                 Select Date
// // // // // // //               </label>
// // // // // // //               <input
// // // // // // //                 type="date"
// // // // // // //                 value={selectedDate}
// // // // // // //                 onChange={(e) => setSelectedDate(e.target.value)}
// // // // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //             <button
// // // // // // //               onClick={fetchSalesData}
// // // // // // //               disabled={loading || !selectedDate}
// // // // // // //               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
// // // // // // //             >
// // // // // // //               {loading ? "Loading..." : "Generate Report"}
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //           {error && <p className="text-red-500 mt-2">{error}</p>}
// // // // // // //         </div>

// // // // // // //         {/* Summary Cards */}
// // // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // //             <div className="flex items-center gap-2">
// // // // // // //               <DollarSign size={20} className="text-blue-500" />
// // // // // // //               <h2 className="text-lg font-semibold text-gray-800">Total Revenue</h2>
// // // // // // //             </div>
// // // // // // //             <p className="text-2xl font-bold text-gray-900">
// // // // // // //               ${totalRevenue.toLocaleString()}
// // // // // // //             </p>
// // // // // // //           </div>
// // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // //             <div className="flex items-center gap-2">
// // // // // // //               <TrendingUp size={20} className="text-green-500" />
// // // // // // //               <h2 className="text-lg font-semibold text-gray-800">Transactions</h2>
// // // // // // //             </div>
// // // // // // //             <p className="text-2xl font-bold text-gray-900">{totalTransactions}</p>
// // // // // // //           </div>
// // // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // // //             <div className="flex items-center gap-2">
// // // // // // //               <User size={20} className="text-purple-500" />
// // // // // // //               <h2 className="text-lg font-semibold text-gray-800">Average Sale</h2>
// // // // // // //             </div>
// // // // // // //             <p className="text-2xl font-bold text-gray-900">
// // // // // // //               ${averageSale.toFixed(2)}
// // // // // // //             </p>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Charts */}
// // // // // // //         <div className="bg-white p-6 rounded-lg shadow mb-6">
// // // // // // //           <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // // // // //             Sales Breakdown
// // // // // // //           </h2>
// // // // // // //           <Bar data={barChartData} />
// // // // // // //         </div>

// // // // // // //         {/* Sales Table */}
// // // // // // //         <div className="bg-white p-6 rounded-lg shadow">
// // // // // // //           <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // // // // //             Sales Data
// // // // // // //           </h2>
// // // // // // //           <table className="w-full">
// // // // // // //             <thead>
// // // // // // //               <tr className="bg-gray-100">
// // // // // // //                 <th className="p-3 text-left">Sale ID</th>
// // // // // // //                 <th className="p-3 text-left">Total Amount</th>
// // // // // // //                 <th className="p-3 text-left">Products</th>
// // // // // // //                 <th className="p-3 text-left">Date</th>
// // // // // // //               </tr>
// // // // // // //             </thead>
// // // // // // //             <tbody>
// // // // // // //               {salesData.map((sale) => (
// // // // // // //                 <tr key={sale.id} className="border-b">
// // // // // // //                   <td className="p-3">{sale.id}</td>
// // // // // // //                   <td className="p-3">${sale.total_amount.toLocaleString()}</td>
// // // // // // //                   <td className="p-3">
// // // // // // //                     {sale.products.map((p) => `${p.name} (${p.quantity})`).join(", ")}
// // // // // // //                   </td>
// // // // // // //                   <td className="p-3">{sale.date}</td>
// // // // // // //                 </tr>
// // // // // // //               ))}
// // // // // // //             </tbody>
// // // // // // //           </table>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default EmployeeSalesReport;

// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import { Bar, Line } from "react-chartjs-2";
// // // // // // import { Calendar, TrendingUp, User, DollarSign, FileText, Download } from "react-feather";
// // // // // // import * as XLSX from "xlsx";
// // // // // // import jsPDF from "jspdf";
// // // // // // import "jspdf-autotable";

// // // // // // const EmployeeSalesReport = () => {
// // // // // //   const [startDate, setStartDate] = useState("");
// // // // // //   const [endDate, setEndDate] = useState("");
// // // // // //   const [employeeData, setEmployeeData] = useState([]);
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [error, setError] = useState(null);
// // // // // //   const [totalRevenue, setTotalRevenue] = useState(0);
// // // // // //   const [totalTransactions, setTotalTransactions] = useState(0);
// // // // // //   const [averageSale, setAverageSale] = useState(0);
// // // // // //   const [storeAverage, setStoreAverage] = useState(0);

// // // // // //   // Fetch data from backend
// // // // // //   const fetchEmployeeSales = async () => {
// // // // // //     setLoading(true);
// // // // // //     setError(null);

// // // // // //     // Validate dates
// // // // // //     if (!startDate || !endDate) {
// // // // // //       setError("Please select both start and end dates.");
// // // // // //       setLoading(false);
// // // // // //       return;
// // // // // //     }

// // // // // //     if (new Date(startDate) > new Date(endDate)) {
// // // // // //       setError("Start date cannot be after end date.");
// // // // // //       setLoading(false);
// // // // // //       return;
// // // // // //     }

// // // // // //     try {
// // // // // //       const storeId = localStorage.getItem("storeId");
// // // // // //       const response = await fetch(
// // // // // //         `http://localhost:5010/api/daily-sales-employee?startDate=${startDate}&endDate=${endDate}`,
// // // // // //         {
// // // // // //           headers: {
// // // // // //             "storeId": storeId, // Pass storeId in headers
// // // // // //           },
// // // // // //         }
// // // // // //       );

// // // // // //       if (!response.ok) {
// // // // // //         const errorData = await response.json();
// // // // // //         throw new Error(errorData.error || "Failed to fetch data");
// // // // // //       }

// // // // // //       const data = await response.json();
// // // // // //       const processedData = processEmployeeData(data);
// // // // // //       setEmployeeData(processedData);
// // // // // //       calculateSummary(processedData);
// // // // // //     } catch (err) {
// // // // // //       setError(err.message);
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   // Process employee data
// // // // // //   const processEmployeeData = (salesData) => {
// // // // // //     const employeeMap = {};

// // // // // //     salesData.forEach((sale) => {
// // // // // //       const employeeId = sale.userId; // Use userId as employee ID
// // // // // //       if (!employeeMap[employeeId]) {
// // // // // //         employeeMap[employeeId] = {
// // // // // //           totalSales: 0,
// // // // // //           transactions: 0,
// // // // // //           productsSold: {},
// // // // // //         };
// // // // // //       }
// // // // // //       employeeMap[employeeId].totalSales += sale.total_amount;
// // // // // //       employeeMap[employeeId].transactions += 1;

// // // // // //       // Track products sold
// // // // // //       sale.products.forEach((product) => {
// // // // // //         if (!employeeMap[employeeId].productsSold[product.name]) {
// // // // // //           employeeMap[employeeId].productsSold[product.name] = 0;
// // // // // //         }
// // // // // //         employeeMap[employeeId].productsSold[product.name] += product.quantity;
// // // // // //       });
// // // // // //     });

// // // // // //     return Object.keys(employeeMap).map((id) => ({
// // // // // //       id,
// // // // // //       ...employeeMap[id],
// // // // // //       topProduct: getTopProduct(employeeMap[id].productsSold),
// // // // // //     }));
// // // // // //   };

// // // // // //   // Get top product for an employee
// // // // // //   const getTopProduct = (productsSold) => {
// // // // // //     return Object.keys(productsSold).reduce((a, b) =>
// // // // // //       productsSold[a] > productsSold[b] ? a : b
// // // // // //     );
// // // // // //   };

// // // // // //   // Calculate summary stats
// // // // // //   const calculateSummary = (employeeData) => {
// // // // // //     const totalSales = employeeData.reduce((sum, emp) => sum + emp.totalSales, 0);
// // // // // //     const totalTransactions = employeeData.reduce(
// // // // // //       (sum, emp) => sum + emp.transactions,
// // // // // //       0
// // // // // //     );
// // // // // //     const storeAverage = totalSales / employeeData.length;

// // // // // //     setTotalRevenue(totalSales);
// // // // // //     setTotalTransactions(totalTransactions);
// // // // // //     setAverageSale(totalTransactions > 0 ? totalSales / totalTransactions : 0);
// // // // // //     setStoreAverage(storeAverage);
// // // // // //   };

// // // // // //   // Export to CSV
// // // // // //   const exportCSV = () => {
// // // // // //     const headers = ["Employee ID", "Total Sales", "Transactions", "Top Product", "Comparison to Store Average"];
// // // // // //     const csvData = [
// // // // // //       headers,
// // // // // //       ...employeeData.map((emp) => [
// // // // // //         emp.id,
// // // // // //         emp.totalSales,
// // // // // //         emp.transactions,
// // // // // //         emp.topProduct,
// // // // // //         emp.totalSales > storeAverage ? "Above Average" : "Below Average",
// // // // // //       ]),
// // // // // //     ];

// // // // // //     const csvContent = csvData.map((row) => row.join(",")).join("\n");
// // // // // //     const blob = new Blob([csvContent], { type: "text/csv" });
// // // // // //     const url = URL.createObjectURL(blob);
// // // // // //     const link = document.createElement("a");
// // // // // //     link.href = url;
// // // // // //     link.download = `employee_sales_${startDate}_to_${endDate}.csv`;
// // // // // //     link.click();
// // // // // //   };

// // // // // //   // Export to PDF
// // // // // //   const exportPDF = () => {
// // // // // //     const doc = new jsPDF();
// // // // // //     doc.text(`Employee Sales Report (${startDate} to ${endDate})`, 10, 10);
// // // // // //     doc.autoTable({
// // // // // //       head: [["Employee ID", "Total Sales", "Transactions", "Top Product", "Comparison to Store Average"]],
// // // // // //       body: employeeData.map((emp) => [
// // // // // //         emp.id,
// // // // // //         emp.totalSales,
// // // // // //         emp.transactions,
// // // // // //         emp.topProduct,
// // // // // //         emp.totalSales > storeAverage ? "Above Average" : "Below Average",
// // // // // //       ]),
// // // // // //     });
// // // // // //     doc.save(`employee_sales_${startDate}_to_${endDate}.pdf`);
// // // // // //   };

// // // // // //   // Chart data
// // // // // //   const barChartData = {
// // // // // //     labels: employeeData.map((emp) => `Employee ${emp.id}`),
// // // // // //     datasets: [
// // // // // //       {
// // // // // //         label: "Total Sales",
// // // // // //         data: employeeData.map((emp) => emp.totalSales),
// // // // // //         backgroundColor: "rgba(59, 130, 246, 0.6)",
// // // // // //       },
// // // // // //     ],
// // // // // //   };

// // // // // //   const lineChartData = {
// // // // // //     labels: employeeData.map((emp) => `Employee ${emp.id}`),
// // // // // //     datasets: [
// // // // // //       {
// // // // // //         label: "Transactions",
// // // // // //         data: employeeData.map((emp) => emp.transactions),
// // // // // //         borderColor: "rgba(16, 185, 129, 0.6)",
// // // // // //         fill: false,
// // // // // //       },
// // // // // //     ],
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="p-6 bg-gray-50 min-h-screen">
// // // // // //       <div className="max-w-7xl mx-auto">
// // // // // //         {/* Header */}
// // // // // //         <div className="flex justify-between items-center mb-6">
// // // // // //           <h1 className="text-2xl font-bold text-gray-800">
// // // // // //             Employee Sales Performance Report
// // // // // //           </h1>
// // // // // //           <div className="flex gap-4">
// // // // // //             <button
// // // // // //               onClick={exportCSV}
// // // // // //               className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // //             >
// // // // // //               <Download size={16} />
// // // // // //               Export CSV
// // // // // //             </button>
// // // // // //             <button
// // // // // //               onClick={exportPDF}
// // // // // //               className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
// // // // // //             >
// // // // // //               <FileText size={16} />
// // // // // //               Export PDF
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Date Filter */}
// // // // // //         <div className="bg-white p-6 rounded-lg shadow mb-6">
// // // // // //           <div className="flex gap-4 items-end">
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700">
// // // // // //                 Start Date
// // // // // //               </label>
// // // // // //               <input
// // // // // //                 type="date"
// // // // // //                 value={startDate}
// // // // // //                 onChange={(e) => setStartDate(e.target.value)}
// // // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
// // // // // //               />
// // // // // //             </div>
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700">
// // // // // //                 End Date
// // // // // //               </label>
// // // // // //               <input
// // // // // //                 type="date"
// // // // // //                 value={endDate}
// // // // // //                 onChange={(e) => setEndDate(e.target.value)}
// // // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
// // // // // //               />
// // // // // //             </div>
// // // // // //             <button
// // // // // //               onClick={fetchEmployeeSales}
// // // // // //               disabled={loading || !startDate || !endDate}
// // // // // //               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
// // // // // //             >
// // // // // //               {loading ? "Loading..." : "Generate Report"}
// // // // // //             </button>
// // // // // //           </div>
// // // // // //           {error && <p className="text-red-500 mt-2">{error}</p>}
// // // // // //         </div>

// // // // // //         {/* Summary Cards */}
// // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // //             <div className="flex items-center gap-2">
// // // // // //               <DollarSign size={20} className="text-blue-500" />
// // // // // //               <h2 className="text-lg font-semibold text-gray-800">Total Revenue</h2>
// // // // // //             </div>
// // // // // //             <p className="text-2xl font-bold text-gray-900">
// // // // // //               ${totalRevenue.toLocaleString()}
// // // // // //             </p>
// // // // // //           </div>
// // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // //             <div className="flex items-center gap-2">
// // // // // //               <TrendingUp size={20} className="text-green-500" />
// // // // // //               <h2 className="text-lg font-semibold text-gray-800">Transactions</h2>
// // // // // //             </div>
// // // // // //             <p className="text-2xl font-bold text-gray-900">{totalTransactions}</p>
// // // // // //           </div>
// // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // //             <div className="flex items-center gap-2">
// // // // // //               <User size={20} className="text-purple-500" />
// // // // // //               <h2 className="text-lg font-semibold text-gray-800">Average Sale</h2>
// // // // // //             </div>
// // // // // //             <p className="text-2xl font-bold text-gray-900">
// // // // // //               ${averageSale.toFixed(2)}
// // // // // //             </p>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Charts */}
// // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // //             <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // // // //               Revenue by Employee
// // // // // //             </h2>
// // // // // //             <Bar data={barChartData} />
// // // // // //           </div>
// // // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // // //             <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // // // //               Transactions Over Time
// // // // // //             </h2>
// // // // // //             <Line data={lineChartData} />
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Employee Leaderboard */}
// // // // // //         <div className="bg-white p-6 rounded-lg shadow">
// // // // // //           <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // // // //             Employee Leaderboard
// // // // // //           </h2>
// // // // // //           <table className="w-full">
// // // // // //             <thead>
// // // // // //               <tr className="bg-gray-100">
// // // // // //                 <th className="p-3 text-left">Employee ID</th>
// // // // // //                 <th className="p-3 text-left">Total Sales</th>
// // // // // //                 <th className="p-3 text-left">Transactions</th>
// // // // // //                 <th className="p-3 text-left">Top Product</th>
// // // // // //                 <th className="p-3 text-left">Comparison to Store Average</th>
// // // // // //               </tr>
// // // // // //             </thead>
// // // // // //             <tbody>
// // // // // //               {employeeData.map((emp) => (
// // // // // //                 <tr key={emp.id} className="border-b">
// // // // // //                   <td className="p-3">{emp.id}</td>
// // // // // //                   <td className="p-3">${emp.totalSales.toLocaleString()}</td>
// // // // // //                   <td className="p-3">{emp.transactions}</td>
// // // // // //                   <td className="p-3">{emp.topProduct}</td>
// // // // // //                   <td className="p-3">
// // // // // //                     {emp.totalSales > storeAverage ? (
// // // // // //                       <span className="text-green-600">Above Average</span>
// // // // // //                     ) : (
// // // // // //                       <span className="text-red-600">Below Average</span>
// // // // // //                     )}
// // // // // //                   </td>
// // // // // //                 </tr>
// // // // // //               ))}
// // // // // //             </tbody>
// // // // // //           </table>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default EmployeeSalesReport;

// // // // // import React, { useState, useEffect, useRef } from "react";
// // // // // import axios from "axios";
// // // // // import { Bar, Pie, Line, Scatter } from "react-chartjs-2";
// // // // // import { Calendar, TrendingUp, User, DollarSign, FileText, Download } from "react-feather";

// // // // // import * as XLSX from "xlsx";
// // // // // import jsPDF from "jspdf";
// // // // // import "jspdf-autotable";
// // // // // import {
// // // // //   Chart as ChartJS,
// // // // //   CategoryScale,
// // // // //   LinearScale,
// // // // //   BarElement,
// // // // //   Title,
// // // // //   Tooltip,
// // // // //   Legend,
// // // // //   ArcElement,
// // // // //   PointElement,
// // // // //   LineElement,
// // // // // } from "chart.js";

// // // // // // Register Chart.js components
// // // // // ChartJS.register(
// // // // //   CategoryScale,
// // // // //   LinearScale,
// // // // //   BarElement,
// // // // //   Title,
// // // // //   Tooltip,
// // // // //   Legend,
// // // // //   ArcElement,
// // // // //   PointElement,
// // // // //   LineElement
// // // // // );

// // // // // const Employee = () => {
// // // // //   // State management
// // // // //   const [startDate, setStartDate] = useState("");
// // // // //   const [endDate, setEndDate] = useState("");
// // // // //   const [salesData, setSalesData] = useState([]);
// // // // //   const [attendanceData, setAttendanceData] = useState([]);
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [error, setError] = useState(null);
// // // // //   const [activeTab, setActiveTab] = useState("table");
// // // // //   const [totalSales, setTotalSales] = useState(0);
// // // // //   const [employeeStats, setEmployeeStats] = useState({});
// // // // //   const [showExportMenu, setShowExportMenu] = useState(false);

// // // // //   // Refs for chart components
// // // // //   const barChartRef = useRef(null);
// // // // //   const pieChartRef = useRef(null);
// // // // //   const lineChartRef = useRef(null);
// // // // //   const scatterChartRef = useRef(null);

// // // // //   // Fetch data when component mounts with default dates
// // // // //   useEffect(() => {
// // // // //     const today = new Date();
// // // // //     const thirtyDaysAgo = new Date();
// // // // //     thirtyDaysAgo.setDate(today.getDate() - 30);
// // // // //     setEndDate(today.toISOString().split("T")[0]);
// // // // //     setStartDate(thirtyDaysAgo.toISOString().split("T")[0]);
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     if (startDate && endDate) {
// // // // //       fetchSalesData();
// // // // //       fetchAttendanceData();
// // // // //     }
// // // // //   }, [startDate, endDate]);

// // // // //   // Fetch sales data
// // // // //   const fetchSalesData = async () => {
// // // // //     setLoading(true);
// // // // //     setError(null);
// // // // //     try {
// // // // //       const response = await axios.get("http://localhost:5010/api/daily-sales-employee", {
// // // // //         params: { startDate, endDate },
// // // // //       });
// // // // //       setSalesData(response.data);
// // // // //       processEmployeeStats(response.data);
// // // // //     } catch (err) {
// // // // //       setError("Failed to fetch sales data. Please try again.");
// // // // //       console.error("Error fetching sales data:", err);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   // Fetch attendance data
// // // // //   const fetchAttendanceData = async () => {
// // // // //     try {
// // // // //       const response = await axios.get("http://localhost:5004/api/attendance", {
// // // // //         params: { startDate, endDate },
// // // // //       });
// // // // //       setAttendanceData(response.data);
// // // // //     } catch (err) {
// // // // //       console.error("Error fetching attendance data:", err);
// // // // //     }
// // // // //   };

// // // // //   // Process employee statistics
// // // // //   const processEmployeeStats = (data) => {
// // // // //     const stats = {};
// // // // //     data.forEach((sale) => {
// // // // //       const { employee_id, total_amount, products } = sale;
// // // // //       if (!stats[employee_id]) {
// // // // //         stats[employee_id] = {
// // // // //           totalSales: 0,
// // // // //           transactions: 0,
// // // // //           avgSale: 0,
// // // // //           productsSold: {},
// // // // //         };
// // // // //       }
// // // // //       stats[employee_id].totalSales += total_amount;
// // // // //       stats[employee_id].transactions += 1;

// // // // //       // Track products sold
// // // // //       products.forEach((product) => {
// // // // //         if (!stats[employee_id].productsSold[product.name]) {
// // // // //           stats[employee_id].productsSold[product.name] = 0;
// // // // //         }
// // // // //         stats[employee_id].productsSold[product.name] += product.quantity;
// // // // //       });
// // // // //     });

// // // // //     // Calculate averages and top products
// // // // //     Object.keys(stats).forEach((id) => {
// // // // //       stats[id].avgSale = stats[id].totalSales / stats[id].transactions;
// // // // //       stats[id].topProduct = Object.keys(stats[id].productsSold).reduce((a, b) =>
// // // // //         stats[id].productsSold[a] > stats[id].productsSold[b] ? a : b
// // // // //       );
// // // // //     });

// // // // //     setEmployeeStats(stats);
// // // // //     setTotalSales(data.reduce((sum, sale) => sum + sale.total_amount, 0));
// // // // //   };

// // // // //   // Format currency
// // // // //   const formatCurrency = (amount) => {
// // // // //     return new Intl.NumberFormat("en-US", {
// // // // //       style: "currency",
// // // // //       currency: "USD",
// // // // //     }).format(amount);
// // // // //   };

// // // // //   // Chart data preparations
// // // // //   const barChartData = {
// // // // //     labels: Object.keys(employeeStats).map((id) => `Employee ${id}`),
// // // // //     datasets: [
// // // // //       {
// // // // //         label: "Total Sales",
// // // // //         data: Object.values(employeeStats).map((stat) => stat.totalSales),
// // // // //         backgroundColor: "rgba(37, 99, 235, 0.7)",
// // // // //         borderColor: "rgba(37, 99, 235, 1)",
// // // // //         borderWidth: 1,
// // // // //       },
// // // // //     ],
// // // // //   };

// // // // //   const pieChartData = {
// // // // //     labels: Object.keys(employeeStats).map((id) => `Employee ${id}`),
// // // // //     datasets: [
// // // // //       {
// // // // //         data: Object.values(employeeStats).map((stat) => stat.totalSales),
// // // // //         backgroundColor: [
// // // // //           "rgba(37, 99, 235, 0.7)",
// // // // //           "rgba(16, 185, 129, 0.7)",
// // // // //           "rgba(245, 158, 11, 0.7)",
// // // // //           "rgba(239, 68, 68, 0.7)",
// // // // //           "rgba(139, 92, 246, 0.7)",
// // // // //           "rgba(20, 184, 166, 0.7)",
// // // // //         ],
// // // // //         borderColor: [
// // // // //           "rgba(37, 99, 235, 1)",
// // // // //           "rgba(16, 185, 129, 1)",
// // // // //           "rgba(245, 158, 11, 1)",
// // // // //           "rgba(239, 68, 68, 1)",
// // // // //           "rgba(139, 92, 246, 1)",
// // // // //           "rgba(20, 184, 166, 1)",
// // // // //         ],
// // // // //         borderWidth: 1,
// // // // //       },
// // // // //     ],
// // // // //   };

// // // // //   const lineChartData = {
// // // // //     labels: Object.keys(employeeStats).map((id) => `Employee ${id}`),
// // // // //     datasets: [
// // // // //       {
// // // // //         label: "Performance Over Time",
// // // // //         data: Object.values(employeeStats).map((stat) => stat.avgSale),
// // // // //         borderColor: "rgba(16, 185, 129, 1)",
// // // // //         backgroundColor: "rgba(16, 185, 129, 0.1)",
// // // // //         borderWidth: 2,
// // // // //         tension: 0.4,
// // // // //         fill: true,
// // // // //       },
// // // // //     ],
// // // // //   };

// // // // //   const scatterChartData = {
// // // // //     datasets: [
// // // // //       {
// // // // //         label: "Employee Performance",
// // // // //         data: Object.keys(employeeStats).map((id) => ({
// // // // //           x: employeeStats[id].transactions,
// // // // //           y: employeeStats[id].avgSale,
// // // // //           id: id,
// // // // //         })),
// // // // //         backgroundColor: "rgba(139, 92, 246, 0.7)",
// // // // //         borderColor: "rgba(139, 92, 246, 1)",
// // // // //         borderWidth: 1,
// // // // //         pointRadius: 10,
// // // // //         pointHoverRadius: 14,
// // // // //       },
// // // // //     ],
// // // // //   };

// // // // //   // Export methods
// // // // //   const exportCSV = () => {
// // // // //     const headers = ["Employee ID", "Total Sales", "Transactions", "Top Product", "Attendance"];
// // // // //     const csvData = [
// // // // //       headers,
// // // // //       ...Object.keys(employeeStats).map((id) => [
// // // // //         id,
// // // // //         employeeStats[id].totalSales,
// // // // //         employeeStats[id].transactions,
// // // // //         employeeStats[id].topProduct,
// // // // //         attendanceData.find((att) => att.employee_id === id)?.daysPresent || 0,
// // // // //       ]),
// // // // //     ];
// // // // //     const csvContent = csvData.map((row) => row.join(",")).join("\n");
// // // // //     const blob = new Blob([csvContent], { type: "text/csv" });
// // // // //     const url = URL.createObjectURL(blob);
// // // // //     const link = document.createElement("a");
// // // // //     link.href = url;
// // // // //     link.download = `employee_sales_${startDate}_to_${endDate}.csv`;
// // // // //     link.click();
// // // // //   };

// // // // //   const exportPDF = () => {
// // // // //     const doc = new jsPDF();
// // // // //     doc.text(`Employee Sales Report (${startDate} to ${endDate})`, 10, 10);
// // // // //     doc.autoTable({
// // // // //       head: [["Employee ID", "Total Sales", "Transactions", "Top Product", "Attendance"]],
// // // // //       body: Object.keys(employeeStats).map((id) => [
// // // // //         id,
// // // // //         employeeStats[id].totalSales,
// // // // //         employeeStats[id].transactions,
// // // // //         employeeStats[id].topProduct,
// // // // //         attendanceData.find((att) => att.employee_id === id)?.daysPresent || 0,
// // // // //       ]),
// // // // //     });
// // // // //     doc.save(`employee_sales_${startDate}_to_${endDate}.pdf`);
// // // // //   };

// // // // //   return (
// // // // //     <div className="p-6 bg-gray-50 min-h-screen">
// // // // //       <div className="max-w-7xl mx-auto">
// // // // //         {/* Header */}
// // // // //         <div className="flex justify-between items-center mb-6">
// // // // //           <h1 className="text-2xl font-bold text-gray-800">
// // // // //             Employee Sales Performance Report
// // // // //           </h1>
// // // // //           <div className="flex gap-4">
// // // // //             <button
// // // // //               onClick={exportCSV}
// // // // //               className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // //             >
// // // // //               Export CSV
// // // // //             </button>
// // // // //             <button
// // // // //               onClick={exportPDF}
// // // // //               className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
// // // // //             >
// // // // //               Export PDF
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Date Filter */}
// // // // //         <div className="bg-white p-6 rounded-lg shadow mb-6">
// // // // //           <div className="flex gap-4 items-end">
// // // // //             <div>
// // // // //               <label className="block text-sm font-medium text-gray-700">
// // // // //                 Start Date
// // // // //               </label>
// // // // //               <input
// // // // //                 type="date"
// // // // //                 value={startDate}
// // // // //                 onChange={(e) => setStartDate(e.target.value)}
// // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
// // // // //               />
// // // // //             </div>
// // // // //             <div>
// // // // //               <label className="block text-sm font-medium text-gray-700">
// // // // //                 End Date
// // // // //               </label>
// // // // //               <input
// // // // //                 type="date"
// // // // //                 value={endDate}
// // // // //                 onChange={(e) => setEndDate(e.target.value)}
// // // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
// // // // //               />
// // // // //             </div>
// // // // //             <button
// // // // //               onClick={fetchSalesData}
// // // // //               disabled={loading || !startDate || !endDate}
// // // // //               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
// // // // //             >
// // // // //               {loading ? "Loading..." : "Generate Report"}
// // // // //             </button>
// // // // //           </div>
// // // // //           {error && <p className="text-red-500 mt-2">{error}</p>}
// // // // //         </div>

// // // // //         {/* Summary Cards */}
// // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // //             <div className="flex items-center gap-2">
// // // // //               <DollarSign size={20} className="text-blue-500" />
// // // // //               <h2 className="text-lg font-semibold text-gray-800">Total Revenue</h2>
// // // // //             </div>
// // // // //             <p className="text-2xl font-bold text-gray-900">
// // // // //               {formatCurrency(totalSales)}
// // // // //             </p>
// // // // //           </div>
// // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // //             <div className="flex items-center gap-2">
// // // // //               <TrendingUp size={20} className="text-green-500" />
// // // // //               <h2 className="text-lg font-semibold text-gray-800">Transactions</h2>
// // // // //             </div>
// // // // //             <p className="text-2xl font-bold text-gray-900">
// // // // //               {salesData.length}
// // // // //             </p>
// // // // //           </div>
// // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // //             <div className="flex items-center gap-2">
// // // // //               <User size={20} className="text-purple-500" />
// // // // //               <h2 className="text-lg font-semibold text-gray-800">Average Sale</h2>
// // // // //             </div>
// // // // //             <p className="text-2xl font-bold text-gray-900">
// // // // //               {formatCurrency(totalSales / salesData.length)}
// // // // //             </p>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Charts */}
// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // //             <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // // //               Revenue by Employee
// // // // //             </h2>
// // // // //             <Bar ref={barChartRef} data={barChartData} />
// // // // //           </div>
// // // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // // //             <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // // //               Performance Over Time
// // // // //             </h2>
// // // // //             <Line ref={lineChartRef} data={lineChartData} />
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Employee Leaderboard */}
// // // // //         <div className="bg-white p-6 rounded-lg shadow">
// // // // //           <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // // //             Employee Leaderboard
// // // // //           </h2>
// // // // //           <table className="w-full">
// // // // //             <thead>
// // // // //               <tr className="bg-gray-100">
// // // // //                 <th className="p-3 text-left">Employee ID</th>
// // // // //                 <th className="p-3 text-left">Total Sales</th>
// // // // //                 <th className="p-3 text-left">Transactions</th>
// // // // //                 <th className="p-3 text-left">Top Product</th>
// // // // //                 <th className="p-3 text-left">Attendance</th>
// // // // //               </tr>
// // // // //             </thead>
// // // // //             <tbody>
// // // // //               {Object.keys(employeeStats).map((id) => (
// // // // //                 <tr key={id} className="border-b">
// // // // //                   <td className="p-3">{id}</td>
// // // // //                   <td className="p-3">{formatCurrency(employeeStats[id].totalSales)}</td>
// // // // //                   <td className="p-3">{employeeStats[id].transactions}</td>
// // // // //                   <td className="p-3">{employeeStats[id].topProduct}</td>
// // // // //                   <td className="p-3">
// // // // //                     {attendanceData.find((att) => att.employee_id === id)?.daysPresent || 0} days
// // // // //                   </td>
// // // // //                 </tr>
// // // // //               ))}
// // // // //             </tbody>
// // // // //           </table>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Employee;

// // // // import React, { useState, useEffect, useRef } from "react";
// // // // import axios from "axios";
// // // // import { Bar, Pie, Line, Scatter } from "react-chartjs-2";
// // // // import { Calendar, TrendingUp, User, DollarSign, FileText, Download } from "react-feather";
// // // // import * as XLSX from "xlsx";
// // // // import jsPDF from "jspdf";
// // // // import "jspdf-autotable";
// // // // import {
// // // //   Chart as ChartJS,
// // // //   CategoryScale,
// // // //   LinearScale,
// // // //   BarElement,
// // // //   Title,
// // // //   Tooltip,
// // // //   Legend,
// // // //   ArcElement,
// // // //   PointElement,
// // // //   LineElement,
// // // // } from "chart.js";

// // // // // Register Chart.js components
// // // // ChartJS.register(
// // // //   CategoryScale,
// // // //   LinearScale,
// // // //   BarElement,
// // // //   Title,
// // // //   Tooltip,
// // // //   Legend,
// // // //   ArcElement,
// // // //   PointElement,
// // // //   LineElement
// // // // );

// // // // const Employee = () => {
// // // //   // State management
// // // //   const [startDate, setStartDate] = useState("");
// // // //   const [endDate, setEndDate] = useState("");
// // // //   const [salesData, setSalesData] = useState([]);
// // // //   const [attendanceData, setAttendanceData] = useState([]);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState(null);
// // // //   const [activeTab, setActiveTab] = useState("table");
// // // //   const [totalSales, setTotalSales] = useState(0);
// // // //   const [employeeStats, setEmployeeStats] = useState({});
// // // //   const [showExportMenu, setShowExportMenu] = useState(false);

// // // //   // Refs for chart components
// // // //   const barChartRef = useRef(null);
// // // //   const pieChartRef = useRef(null);
// // // //   const lineChartRef = useRef(null);
// // // //   const scatterChartRef = useRef(null);

// // // //   // Fetch data when component mounts with default dates
// // // //   useEffect(() => {
// // // //     const today = new Date();
// // // //     const thirtyDaysAgo = new Date();
// // // //     thirtyDaysAgo.setDate(today.getDate() - 30);
// // // //     setEndDate(today.toISOString().split("T")[0]);
// // // //     setStartDate(thirtyDaysAgo.toISOString().split("T")[0]);
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     if (startDate && endDate) {
// // // //       fetchSalesData();
// // // //       fetchAttendanceData();
// // // //     }
// // // //   }, [startDate, endDate]);

// // // //   // Fetch sales data
// // // // //   const fetchSalesData = async () => {
// // // // //     setLoading(true);
// // // // //     setError(null);
// // // // //     try {
// // // // //       const response = await axios.get("http://localhost:5010/api/daily-sales-employee", {
// // // // //         params: { startDate, endDate },
// // // // //       });
// // // // //       setSalesData(response.data);
// // // // //       processEmployeeStats(response.data);
// // // // //     } catch (err) {
// // // // //       setError("Failed to fetch sales data. Please try again.");
// // // // //       console.error("Error fetching sales data:", err);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };
// // // // const fetchSalesData = async () => {
// // // //     setLoading(true);
// // // //     setError(null);
// // // //     try {
// // // //       const storeId = localStorage.getItem("storeId"); // Get storeId from localStorage
// // // //       if (!storeId) {
// // // //         throw new Error("Store ID is missing.");
// // // //       }
  
// // // //       const response = await axios.get("http://localhost:5010/api/daily-sales-employee", {
// // // //         params: { startDate, endDate },
// // // //         headers: {
// // // //           "storeId": storeId, // Pass storeId in headers
// // // //         },
// // // //       });
// // // //       setSalesData(response.data);
// // // //       processEmployeeStats(response.data);
// // // //     } catch (err) {
// // // //       setError("Failed to fetch sales data. Please try again.");
// // // //       console.error("Error fetching sales data:", err);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };
// // // //   // Fetch attendance data
// // // //   const fetchAttendanceData = async () => {
// // // //     try {
// // // //       const response = await axios.get("http://localhost:5004/api/attendance", {
// // // //         params: { startDate, endDate },
// // // //       });
// // // //       setAttendanceData(response.data);
// // // //     } catch (err) {
// // // //       console.error("Error fetching attendance data:", err);
// // // //     }
// // // //   };

// // // //   // Process employee statistics
// // // //   const processEmployeeStats = (data) => {
// // // //     const stats = {};
// // // //     data.forEach((sale) => {
// // // //       const { userId, total_amount, products } = sale; // Use userId from backend
// // // //       if (!stats[userId]) {
// // // //         stats[userId] = {
// // // //           totalSales: 0,
// // // //           transactions: 0,
// // // //           avgSale: 0,
// // // //           productsSold: {},
// // // //         };
// // // //       }
// // // //       stats[userId].totalSales += total_amount;
// // // //       stats[userId].transactions += 1;

// // // //       // Track products sold
// // // //       products.forEach((product) => {
// // // //         if (!stats[userId].productsSold[product.name]) {
// // // //           stats[userId].productsSold[product.name] = 0;
// // // //         }
// // // //         stats[userId].productsSold[product.name] += product.quantity;
// // // //       });
// // // //     });

// // // //     // Calculate averages and top products
// // // //     Object.keys(stats).forEach((id) => {
// // // //       stats[id].avgSale = stats[id].totalSales / stats[id].transactions;
// // // //       stats[id].topProduct = Object.keys(stats[id].productsSold).reduce((a, b) =>
// // // //         stats[id].productsSold[a] > stats[id].productsSold[b] ? a : b
// // // //       );
// // // //     });

// // // //     setEmployeeStats(stats);
// // // //     setTotalSales(data.reduce((sum, sale) => sum + sale.total_amount, 0));
// // // //   };

// // // //   // Format currency
// // // //   const formatCurrency = (amount) => {
// // // //     return new Intl.NumberFormat("en-US", {
// // // //       style: "currency",
// // // //       currency: "USD",
// // // //     }).format(amount);
// // // //   };

// // // //   // Chart data preparations
// // // //   const barChartData = {
// // // //     labels: Object.keys(employeeStats).map((id) => `Employee ${id}`),
// // // //     datasets: [
// // // //       {
// // // //         label: "Total Sales",
// // // //         data: Object.values(employeeStats).map((stat) => stat.totalSales),
// // // //         backgroundColor: "rgba(37, 99, 235, 0.7)",
// // // //         borderColor: "rgba(37, 99, 235, 1)",
// // // //         borderWidth: 1,
// // // //       },
// // // //     ],
// // // //   };

// // // //   const pieChartData = {
// // // //     labels: Object.keys(employeeStats).map((id) => `Employee ${id}`),
// // // //     datasets: [
// // // //       {
// // // //         data: Object.values(employeeStats).map((stat) => stat.totalSales),
// // // //         backgroundColor: [
// // // //           "rgba(37, 99, 235, 0.7)",
// // // //           "rgba(16, 185, 129, 0.7)",
// // // //           "rgba(245, 158, 11, 0.7)",
// // // //           "rgba(239, 68, 68, 0.7)",
// // // //           "rgba(139, 92, 246, 0.7)",
// // // //           "rgba(20, 184, 166, 0.7)",
// // // //         ],
// // // //         borderColor: [
// // // //           "rgba(37, 99, 235, 1)",
// // // //           "rgba(16, 185, 129, 1)",
// // // //           "rgba(245, 158, 11, 1)",
// // // //           "rgba(239, 68, 68, 1)",
// // // //           "rgba(139, 92, 246, 1)",
// // // //           "rgba(20, 184, 166, 1)",
// // // //         ],
// // // //         borderWidth: 1,
// // // //       },
// // // //     ],
// // // //   };

// // // //   const lineChartData = {
// // // //     labels: Object.keys(employeeStats).map((id) => `Employee ${id}`),
// // // //     datasets: [
// // // //       {
// // // //         label: "Performance Over Time",
// // // //         data: Object.values(employeeStats).map((stat) => stat.avgSale),
// // // //         borderColor: "rgba(16, 185, 129, 1)",
// // // //         backgroundColor: "rgba(16, 185, 129, 0.1)",
// // // //         borderWidth: 2,
// // // //         tension: 0.4,
// // // //         fill: true,
// // // //       },
// // // //     ],
// // // //   };

// // // //   const scatterChartData = {
// // // //     datasets: [
// // // //       {
// // // //         label: "Employee Performance",
// // // //         data: Object.keys(employeeStats).map((id) => ({
// // // //           x: employeeStats[id].transactions,
// // // //           y: employeeStats[id].avgSale,
// // // //           id: id,
// // // //         })),
// // // //         backgroundColor: "rgba(139, 92, 246, 0.7)",
// // // //         borderColor: "rgba(139, 92, 246, 1)",
// // // //         borderWidth: 1,
// // // //         pointRadius: 10,
// // // //         pointHoverRadius: 14, // Fixed typo here
// // // //       },
// // // //     ],
// // // //   };

// // // //   // Export methods
// // // //   const exportCSV = () => {
// // // //     const headers = ["Employee ID", "Total Sales", "Transactions", "Top Product", "Attendance"];
// // // //     const csvData = [
// // // //       headers,
// // // //       ...Object.keys(employeeStats).map((id) => [
// // // //         id,
// // // //         employeeStats[id].totalSales,
// // // //         employeeStats[id].transactions,
// // // //         employeeStats[id].topProduct,
// // // //         attendanceData.find((att) => att.employee_id === id)?.daysPresent || 0,
// // // //       ]),
// // // //     ];
// // // //     const csvContent = csvData.map((row) => row.join(",")).join("\n");
// // // //     const blob = new Blob([csvContent], { type: "text/csv" });
// // // //     const url = URL.createObjectURL(blob);
// // // //     const link = document.createElement("a");
// // // //     link.href = url;
// // // //     link.download = `employee_sales_${startDate}_to_${endDate}.csv`;
// // // //     link.click();
// // // //   };

// // // //   const exportPDF = () => {
// // // //     const doc = new jsPDF();
// // // //     doc.text(`Employee Sales Report (${startDate} to ${endDate})`, 10, 10);
// // // //     doc.autoTable({
// // // //       head: [["Employee ID", "Total Sales", "Transactions", "Top Product", "Attendance"]],
// // // //       body: Object.keys(employeeStats).map((id) => [
// // // //         id,
// // // //         employeeStats[id].totalSales,
// // // //         employeeStats[id].transactions,
// // // //         employeeStats[id].topProduct,
// // // //         attendanceData.find((att) => att.employee_id === id)?.daysPresent || 0,
// // // //       ]),
// // // //     });
// // // //     doc.save(`employee_sales_${startDate}_to_${endDate}.pdf`);
// // // //   };

// // // //   return (
// // // //     <div className="p-6 bg-gray-50 min-h-screen">
// // // //       <div className="max-w-7xl mx-auto">
// // // //         {/* Header */}
// // // //         <div className="flex justify-between items-center mb-6">
// // // //           <h1 className="text-2xl font-bold text-gray-800">
// // // //             Employee Sales Performance Report
// // // //           </h1>
// // // //           <div className="flex gap-4">
// // // //             <button
// // // //               onClick={exportCSV}
// // // //               className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // //             >
// // // //               Export CSV
// // // //             </button>
// // // //             <button
// // // //               onClick={exportPDF}
// // // //               className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
// // // //             >
// // // //               Export PDF
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         {/* Date Filter */}
// // // //         <div className="bg-white p-6 rounded-lg shadow mb-6">
// // // //           <div className="flex gap-4 items-end">
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700">
// // // //                 Start Date
// // // //               </label>
// // // //               <input
// // // //                 type="date"
// // // //                 value={startDate}
// // // //                 onChange={(e) => setStartDate(e.target.value)}
// // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
// // // //               />
// // // //             </div>
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700">
// // // //                 End Date
// // // //               </label>
// // // //               <input
// // // //                 type="date"
// // // //                 value={endDate}
// // // //                 onChange={(e) => setEndDate(e.target.value)}
// // // //                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
// // // //               />
// // // //             </div>
// // // //             <button
// // // //               onClick={fetchSalesData}
// // // //               disabled={loading || !startDate || !endDate}
// // // //               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
// // // //             >
// // // //               {loading ? "Loading..." : "Generate Report"}
// // // //             </button>
// // // //           </div>
// // // //           {error && <p className="text-red-500 mt-2">{error}</p>}
// // // //         </div>

// // // //         {/* Summary Cards */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // //             <div className="flex items-center gap-2">
// // // //               <DollarSign size={20} className="text-blue-500" />
// // // //               <h2 className="text-lg font-semibold text-gray-800">Total Revenue</h2>
// // // //             </div>
// // // //             <p className="text-2xl font-bold text-gray-900">
// // // //               {formatCurrency(totalSales)}
// // // //             </p>
// // // //           </div>
// // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // //             <div className="flex items-center gap-2">
// // // //               <TrendingUp size={20} className="text-green-500" />
// // // //               <h2 className="text-lg font-semibold text-gray-800">Transactions</h2>
// // // //             </div>
// // // //             <p className="text-2xl font-bold text-gray-900">
// // // //               {salesData.length}
// // // //             </p>
// // // //           </div>
// // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // //             <div className="flex items-center gap-2">
// // // //               <User size={20} className="text-purple-500" />
// // // //               <h2 className="text-lg font-semibold text-gray-800">Average Sale</h2>
// // // //             </div>
// // // //             <p className="text-2xl font-bold text-gray-900">
// // // //               {formatCurrency(totalSales / salesData.length)}
// // // //             </p>
// // // //           </div>
// // // //         </div>

// // // //         {/* Charts */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // //             <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // //               Revenue by Employee
// // // //             </h2>
// // // //             <Bar ref={barChartRef} data={barChartData} />
// // // //           </div>
// // // //           <div className="bg-white p-6 rounded-lg shadow">
// // // //             <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // //               Performance Over Time
// // // //             </h2>
// // // //             <Line ref={lineChartRef} data={lineChartData} />
// // // //           </div>
// // // //         </div>

// // // //         {/* Employee Leaderboard */}
// // // //         <div className="bg-white p-6 rounded-lg shadow">
// // // //           <h2 className="text-lg font-semibold text-gray-800 mb-4">
// // // //             Employee Leaderboard
// // // //           </h2>
// // // //           <table className="w-full">
// // // //             <thead>
// // // //               <tr className="bg-gray-100">
// // // //                 <th className="p-3 text-left">Employee ID</th>
// // // //                 <th className="p-3 text-left">Total Sales</th>
// // // //                 <th className="p-3 text-left">Transactions</th>
// // // //                 <th className="p-3 text-left">Top Product</th>
// // // //                 <th className="p-3 text-left">Attendance</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {Object.keys(employeeStats).map((id) => (
// // // //                 <tr key={id} className="border-b">
// // // //                   <td className="p-3">{id}</td>
// // // //                   <td className="p-3">{formatCurrency(employeeStats[id].totalSales)}</td>
// // // //                   <td className="p-3">{employeeStats[id].transactions}</td>
// // // //                   <td className="p-3">{employeeStats[id].topProduct}</td>
// // // //                   <td className="p-3">
// // // //                     {attendanceData.find((att) => att.employee_id === id)?.daysPresent || 0} days
// // // //                   </td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Employee;

// // // // File: FinancialAnalytics.jsx
// // // import React, { useState, useEffect } from 'react';
// // // import { LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
// // // import { Calendar, ArrowUp, ArrowDown, DollarSign, TrendingUp, Percent } from 'lucide-react';

// // // const FinancialAnalytics = () => {
// // //   const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
// // //   const [salesData, setSalesData] = useState({});
// // //   const [productsData, setProductsData] = useState([]);
// // //   const [revenueVsExpensesData, setRevenueVsExpensesData] = useState([]);
// // //   const [expenseBreakdown, setExpenseBreakdown] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [dateRange, setDateRange] = useState('week'); // 'day', 'week', 'month', 'year'
// // //   const [financialMetrics, setFinancialMetrics] = useState({
// // //     totalRevenue: 0,
// // //     totalExpenses: 0,
// // //     netProfit: 0,
// // //     grossMargin: 0,
// // //     cashFlow: 0
// // //   });

// // //   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

// // //   useEffect(() => {
// // //     const storeId = localStorage.getItem("storeId");
// // //     if (!storeId) {
// // //       setError("Store ID not found in local storage");
// // //       setLoading(false);
// // //       return;
// // //     }

// // //     // Calculate date range
// // //     const { startDate, endDate } = calculateDateRange(selectedDate, dateRange);

// // //     // Fetch data from backend
// // //     Promise.all([
// // //       fetchSalesData(storeId, startDate, endDate),
// // //       fetchProductsData(storeId)
// // //     ])
// // //       .then(([salesData, productsData]) => {
// // //         setSalesData(salesData);
// // //         setProductsData(productsData);
        
// // //         // Process the data to calculate financial metrics
// // //         const processedData = processFinancialData(salesData, productsData);
// // //         setRevenueVsExpensesData(processedData.revenueVsExpensesData);
// // //         setExpenseBreakdown(processedData.expenseBreakdown);
// // //         setFinancialMetrics(processedData.financialMetrics);
        
// // //         setLoading(false);
// // //       })
// // //       .catch(err => {
// // //         setError("Error fetching data: " + err.message);
// // //         setLoading(false);
// // //       });
// // //   }, [selectedDate, dateRange]);

// // //   const calculateDateRange = (date, range) => {
// // //     let startDate = new Date(date);
// // //     let endDate = new Date(date);
    
// // //     if (range === 'day') {
// // //       // Keep the same day
// // //     } else if (range === 'week') {
// // //       startDate.setDate(startDate.getDate() - 7);
// // //     } else if (range === 'month') {
// // //       startDate.setMonth(startDate.getMonth() - 1);
// // //     } else if (range === 'year') {
// // //       startDate.setFullYear(startDate.getFullYear() - 1);
// // //     }
    
// // //     return {
// // //       startDate: startDate.toISOString().split('T')[0],
// // //       endDate: endDate.toISOString().split('T')[0]
// // //     };
// // //   };

// // //   const fetchSalesData = async (storeId, startDate, endDate) => {
// // //     try {
// // //       // In a real application, fetch all sales data for the date range
// // //       // Here's the API call to your backend:
// // //       const response = await fetch(`http://localhost:5010/api/sales-range?startDate=${startDate}&endDate=${endDate}`, {
// // //         headers: { 
// // //           "storeId": storeId 
// // //         }
// // //       });
      
// // //       if (!response.ok) {
// // //         throw new Error('Failed to fetch sales data');
// // //       }
      
// // //       return await response.json();
// // //     } catch (error) {
// // //       console.error("Error fetching sales data:", error);
// // //       // For development/testing, return mock data
// // //       return generateMockSalesData(startDate, endDate);
// // //     }
// // //   };

// // //   const fetchProductsData = async (storeId) => {
// // //     try {
// // //       // Fetch all products from your backend
// // //       const response = await fetch(`http://localhost:5010/products?storeId=${storeId}`);
      
// // //       if (!response.ok) {
// // //         throw new Error('Failed to fetch products data');
// // //       }
      
// // //       return await response.json();
// // //     } catch (error) {
// // //       console.error("Error fetching products data:", error);
// // //       // For development/testing, return mock data
// // //       return generateMockProductsData();
// // //     }
// // //   };

// // //   const processFinancialData = (salesData, productsData) => {
// // //     // Create a map of product name to purchase price for cost calculations
// // //     const productCostMap = {};
// // //     productsData.forEach(product => {
// // //       productCostMap[product.product_name] = parseFloat(product.purchase_price || 0);
// // //     });
    
// // //     // Initialize daily data
// // //     const dailyData = {};
    
// // //     // Process sales data by day
// // //     Object.entries(salesData).forEach(([date, dayData]) => {
// // //       // Initialize day if it doesn't exist
// // //       if (!dailyData[date]) {
// // //         dailyData[date] = {
// // //           date: date,
// // //           revenue: 0,
// // //           expenses: 0,
// // //           profit: 0,
// // //           expenseCategories: {}
// // //         };
// // //       }
      
// // //       // Add revenue from sales
// // //       dailyData[date].revenue += dayData.total_amount || 0;
      
// // //       // Calculate expenses based on product cost prices
// // //       (dayData.sales || []).forEach(sale => {
// // //         (sale.products || []).forEach(product => {
// // //           const productName = product.name;
// // //           const quantity = product.quantity || 0;
// // //           const costPrice = productCostMap[productName] || 0;
          
// // //           // Total cost for this product
// // //           const productCost = costPrice * quantity;
// // //           dailyData[date].expenses += productCost;
          
// // //           // Track expenses by product category (if available)
// // //           const productInfo = productsData.find(p => p.product_name === productName);
// // //           const category = productInfo?.category || 'Uncategorized';
          
// // //           if (!dailyData[date].expenseCategories[category]) {
// // //             dailyData[date].expenseCategories[category] = 0;
// // //           }
// // //           dailyData[date].expenseCategories[category] += productCost;
// // //         });
// // //       });
      
// // //       // Calculate profit
// // //       dailyData[date].profit = dailyData[date].revenue - dailyData[date].expenses;
// // //     });
    
// // //     // Convert to array for charts and sort by date
// // //     const revenueVsExpensesData = Object.values(dailyData).sort((a, b) => {
// // //       return new Date(a.date) - new Date(b.date);
// // //     });
    
// // //     // Calculate aggregate metrics
// // //     const totalRevenue = revenueVsExpensesData.reduce((sum, day) => sum + day.revenue, 0);
// // //     const totalExpenses = revenueVsExpensesData.reduce((sum, day) => sum + day.expenses, 0);
// // //     const netProfit = totalRevenue - totalExpenses;
// // //     const grossMargin = totalRevenue > 0 ? (netProfit / totalRevenue) * 100 : 0;
    
// // //     // Additional expenses not directly tied to product costs
// // //     // In a real application, you would fetch these from your backend
// // //     const fixedExpenses = {
// // //       'Rent': totalRevenue * 0.08, // Example: 8% of revenue for rent
// // //       'Salaries': totalRevenue * 0.15, // Example: 15% of revenue for salaries
// // //       'Utilities': totalRevenue * 0.03, // Example: 3% of revenue for utilities
// // //       'Marketing': totalRevenue * 0.05, // Example: 5% of revenue for marketing
// // //       'Other': totalRevenue * 0.02  // Example: 2% of revenue for other expenses
// // //     };
    
// // //     // Add fixed expenses to total
// // //     let totalFixedExpenses = 0;
// // //     Object.values(fixedExpenses).forEach(amount => {
// // //       totalFixedExpenses += amount;
// // //     });
    
// // //     // Generate expense breakdown pie chart data
// // //     // First add inventory costs from product purchase prices
// // //     const expenseBreakdown = [
// // //       { name: 'Inventory Cost', value: totalExpenses }
// // //     ];
    
// // //     // Then add fixed expenses
// // //     Object.entries(fixedExpenses).forEach(([category, amount]) => {
// // //       expenseBreakdown.push({ name: category, value: amount });
// // //     });
    
// // //     // Update total expenses including fixed costs
// // //     const grandTotalExpenses = totalExpenses + totalFixedExpenses;
    
// // //     // Final financial metrics including fixed expenses
// // //     const finalNetProfit = totalRevenue - grandTotalExpenses;
// // //     const finalGrossMargin = totalRevenue > 0 ? (finalNetProfit / totalRevenue) * 100 : 0;
    
// // //     // Cash flow (revenue minus direct costs, but not counting depreciation/amortization)
// // //     const cashFlow = finalNetProfit;
    
// // //     return {
// // //       revenueVsExpensesData,
// // //       expenseBreakdown,
// // //       financialMetrics: {
// // //         totalRevenue,
// // //         totalExpenses: grandTotalExpenses,
// // //         netProfit: finalNetProfit,
// // //         grossMargin: finalGrossMargin,
// // //         cashFlow
// // //       }
// // //     };
// // //   };

// // //   const generateMockSalesData = (startDate, endDate) => {
// // //     // Create mock daily sales data for date range
// // //     const result = {};
// // //     let currentDate = new Date(startDate);
// // //     const end = new Date(endDate);
    
// // //     while (currentDate <= end) {
// // //       const dateString = currentDate.toISOString().split('T')[0];
      
// // //       // Generate random sales data for this date
// // //       const randomSalesCount = Math.floor(Math.random() * 10) + 1;
// // //       const salesForDate = [];
// // //       let totalAmount = 0;
      
// // //       for (let i = 0; i < randomSalesCount; i++) {
// // //         const amount = Math.floor(Math.random() * 500) + 50;
// // //         totalAmount += amount;
        
// // //         const productName = ['Yippie', 'Peanuts', 'Chocolate', 'Soda', 'Chips'][Math.floor(Math.random() * 5)];
// // //         const quantity = Math.floor(Math.random() * 5) + 1;
        
// // //         salesForDate.push({
// // //           id: `sale-${dateString}-${i}`,
// // //           total_amount: amount,
// // //           products: [
// // //             {
// // //               name: productName,
// // //               quantity: quantity,
// // //               unit_price: amount / quantity,
// // //               total_price: amount
// // //             }
// // //           ],
// // //           date: `${dateString} ${Math.floor(Math.random() * 12)}:${Math.floor(Math.random() * 60)}:00`
// // //         });
// // //       }
      
// // //       result[dateString] = {
// // //         total_amount: totalAmount,
// // //         sales: salesForDate
// // //       };
      
// // //       // Move to next day
// // //       currentDate.setDate(currentDate.getDate() + 1);
// // //     }
    
// // //     return result;
// // //   };

// // //   const generateMockProductsData = () => {
// // //     // Create mock products data
// // //     return [
// // //       {
// // //         _id: '1',
// // //         product_name: 'Yippie',
// // //         quantity: '100',
// // //         units: 'Box',
// // //         category: 'Noodles',
// // //         purchase_price: '20',
// // //         sale_price: '26', 
// // //         tax: '0',
// // //         discount: '-2',
// // //         stock_level: '50',
// // //         supplier: 'VZA',
// // //         dateAdded: '2025-03-01'
// // //       },
// // //       {
// // //         _id: '2',
// // //         product_name: 'Peanuts',
// // //         quantity: '200',
// // //         units: 'Packet',
// // //         category: 'Snacks',
// // //         purchase_price: '150',
// // //         sale_price: '250',
// // //         tax: '0',
// // //         discount: '0',
// // //         stock_level: '80',
// // //         supplier: 'Local',
// // //         dateAdded: '2025-02-15'
// // //       },
// // //       {
// // //         _id: '3',
// // //         product_name: 'Chocolate',
// // //         quantity: '75',
// // //         units: 'Bars',
// // //         category: 'Confectionery',
// // //         purchase_price: '35',
// // //         sale_price: '50',
// // //         tax: '5',
// // //         discount: '0',
// // //         stock_level: '30',
// // //         supplier: 'National',
// // //         dateAdded: '2025-03-05'
// // //       },
// // //       {
// // //         _id: '4',
// // //         product_name: 'Soda',
// // //         quantity: '120',
// // //         units: 'Bottles',
// // //         category: 'Beverages',
// // //         purchase_price: '30',
// // //         sale_price: '45',
// // //         tax: '2',
// // //         discount: '0',
// // //         stock_level: '60',
// // //         supplier: 'National',
// // //         dateAdded: '2025-03-02'
// // //       },
// // //       {
// // //         _id: '5',
// // //         product_name: 'Chips',
// // //         quantity: '150',
// // //         units: 'Packets',
// // //         category: 'Snacks',
// // //         purchase_price: '15',
// // //         sale_price: '25',
// // //         tax: '0',
// // //         discount: '-1',
// // //         stock_level: '70',
// // //         supplier: 'Local',
// // //         dateAdded: '2025-02-20'
// // //       }
// // //     ];
// // //   };

// // //   const formatCurrency = (amount) => {
// // //     return new Intl.NumberFormat('en-IN', {
// // //       style: 'currency',
// // //       currency: 'INR',
// // //       maximumFractionDigits: 0
// // //     }).format(amount);
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <div className="flex items-center justify-center h-screen">
// // //         <div className="text-xl font-semibold">Loading financial data...</div>
// // //       </div>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="flex items-center justify-center h-screen">
// // //         <div className="text-xl text-red-500 font-semibold">{error}</div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="p-6 bg-gray-50 min-h-screen">
// // //       <h1 className="text-2xl font-bold mb-6">Financial Analytics</h1>
      
// // //       {/* Date Range Selector */}
// // //       <div className="mb-6 flex flex-wrap gap-4 items-center">
// // //         <div className="flex items-center">
// // //           <Calendar className="mr-2 text-gray-500" />
// // //           <input 
// // //             type="date" 
// // //             className="p-2 border rounded"
// // //             value={selectedDate}
// // //             onChange={(e) => setSelectedDate(e.target.value)}
// // //           />
// // //         </div>
        
// // //         <div className="flex gap-2">
// // //           <button 
// // //             onClick={() => setDateRange('day')} 
// // //             className={`px-4 py-2 rounded-md ${dateRange === 'day' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
// // //           >
// // //             Day
// // //           </button>
// // //           <button 
// // //             onClick={() => setDateRange('week')} 
// // //             className={`px-4 py-2 rounded-md ${dateRange === 'week' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
// // //           >
// // //             Week
// // //           </button>
// // //           <button 
// // //             onClick={() => setDateRange('month')} 
// // //             className={`px-4 py-2 rounded-md ${dateRange === 'month' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
// // //           >
// // //             Month
// // //           </button>
// // //           <button 
// // //             onClick={() => setDateRange('year')} 
// // //             className={`px-4 py-2 rounded-md ${dateRange === 'year' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
// // //           >
// // //             Year
// // //           </button>
// // //         </div>
// // //       </div>
      
// // //       {/* Financial Summary Cards */}
// // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
// // //         <div className="bg-white p-4 rounded-lg shadow">
// // //           <div className="flex justify-between items-center mb-2">
// // //             <h3 className="text-gray-500 font-medium">Total Revenue</h3>
// // //             <DollarSign className="text-green-500" />
// // //           </div>
// // //           <p className="text-2xl font-bold">{formatCurrency(financialMetrics.totalRevenue)}</p>
// // //         </div>
        
// // //         <div className="bg-white p-4 rounded-lg shadow">
// // //           <div className="flex justify-between items-center mb-2">
// // //             <h3 className="text-gray-500 font-medium">Total Expenses</h3>
// // //             <ArrowDown className="text-red-500" />
// // //           </div>
// // //           <p className="text-2xl font-bold">{formatCurrency(financialMetrics.totalExpenses)}</p>
// // //         </div>
        
// // //         <div className="bg-white p-4 rounded-lg shadow">
// // //           <div className="flex justify-between items-center mb-2">
// // //             <h3 className="text-gray-500 font-medium">Net Profit</h3>
// // //             <ArrowUp className="text-green-500" />
// // //           </div>
// // //           <p className="text-2xl font-bold">{formatCurrency(financialMetrics.netProfit)}</p>
// // //         </div>
        
// // //         <div className="bg-white p-4 rounded-lg shadow">
// // //           <div className="flex justify-between items-center mb-2">
// // //             <h3 className="text-gray-500 font-medium">Gross Margin</h3>
// // //             <Percent className="text-blue-500" />
// // //           </div>
// // //           <p className="text-2xl font-bold">{financialMetrics.grossMargin.toFixed(1)}%</p>
// // //         </div>
// // //       </div>
      
// // //       {/* Revenue vs Expenses Chart */}
// // //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
// // //         <div className="bg-white p-4 rounded-lg shadow">
// // //           <h2 className="text-xl font-semibold mb-4">Revenue vs Expenses 📊</h2>
// // //           <ResponsiveContainer width="100%" height={300}>
// // //             <LineChart 
// // //               data={revenueVsExpensesData} 
// // //               margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
// // //             >
// // //               <CartesianGrid strokeDasharray="3 3" />
// // //               <XAxis dataKey="date" />
// // //               <YAxis />
// // //               <Tooltip formatter={(value) => formatCurrency(value)} />
// // //               <Legend />
// // //               <Line 
// // //                 type="monotone" 
// // //                 dataKey="revenue" 
// // //                 stroke="#10B981" 
// // //                 strokeWidth={2}
// // //                 name="Revenue"
// // //               />
// // //               <Line 
// // //                 type="monotone" 
// // //                 dataKey="expenses" 
// // //                 stroke="#EF4444" 
// // //                 strokeWidth={2}
// // //                 name="Expenses"
// // //               />
// // //               <Line 
// // //                 type="monotone" 
// // //                 dataKey="profit" 
// // //                 stroke="#3B82F6" 
// // //                 strokeWidth={2}
// // //                 name="Profit"
// // //               />
// // //             </LineChart>
// // //           </ResponsiveContainer>
// // //         </div>
        
// // //         {/* Cash Flow Analysis */}
// // //         <div className="bg-white p-4 rounded-lg shadow">
// // //           <h2 className="text-xl font-semibold mb-4">Cash Flow Analysis 💰</h2>
// // //           <ResponsiveContainer width="100%" height={300}>
// // //             <AreaChart 
// // //               data={revenueVsExpensesData}
// // //               margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
// // //             >
// // //               <CartesianGrid strokeDasharray="3 3" />
// // //               <XAxis dataKey="date" />
// // //               <YAxis />
// // //               <Tooltip formatter={(value) => formatCurrency(value)} />
// // //               <Legend />
// // //               <Area 
// // //                 type="monotone" 
// // //                 dataKey="revenue" 
// // //                 stackId="1"
// // //                 stroke="#4ADE80" 
// // //                 fill="#4ADE80" 
// // //                 fillOpacity={0.6}
// // //                 name="Cash In"
// // //               />
// // //               <Area 
// // //                 type="monotone" 
// // //                 dataKey="expenses" 
// // //                 stackId="2"
// // //                 stroke="#F87171" 
// // //                 fill="#F87171" 
// // //                 fillOpacity={0.6}
// // //                 name="Cash Out"
// // //               />
// // //             </AreaChart>
// // //           </ResponsiveContainer>
// // //         </div>
// // //       </div>
      
// // //       {/* Expense Breakdown and Profit Analysis */}
// // //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // //         {/* Expense Breakdown */}
// // //         <div className="bg-white p-4 rounded-lg shadow">
// // //           <h2 className="text-xl font-semibold mb-4">Expense Breakdown 💸</h2>
// // //           <div className="flex flex-col md:flex-row">
// // //             <div className="w-full md:w-1/2">
// // //               <ResponsiveContainer width="100%" height={300}>
// // //                 <PieChart>
// // //                   <Pie
// // //                     dataKey="value"
// // //                     data={expenseBreakdown}
// // //                     cx="50%"
// // //                     cy="50%"
// // //                     outerRadius={100}
// // //                     fill="#8884d8"
// // //                     label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
// // //                   >
// // //                     {expenseBreakdown.map((entry, index) => (
// // //                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// // //                     ))}
// // //                   </Pie>
// // //                   <Tooltip formatter={(value) => formatCurrency(value)} />
// // //                 </PieChart>
// // //               </ResponsiveContainer>
// // //             </div>
// // //             <div className="w-full md:w-1/2">
// // //               <div className="space-y-2 mt-4 md:mt-0">
// // //                 {expenseBreakdown.map((item, index) => (
// // //                   <div key={index} className="flex items-center">
// // //                     <div 
// // //                       className="w-4 h-4 mr-2" 
// // //                       style={{ backgroundColor: COLORS[index % COLORS.length] }}
// // //                     ></div>
// // //                     <div className="flex justify-between w-full">
// // //                       <span>{item.name}</span>
// // //                       <span className="font-medium">{formatCurrency(item.value)}</span>
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
        
// // //         {/* Net Profit & Gross Margin */}
// // //         <div className="bg-white p-4 rounded-lg shadow">
// // //           <h2 className="text-xl font-semibold mb-4">Net Profit & Gross Margin 📉</h2>
// // //           <ResponsiveContainer width="100%" height={300}>
// // //             <BarChart 
// // //               data={revenueVsExpensesData}
// // //               margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
// // //             >
// // //               <CartesianGrid strokeDasharray="3 3" />
// // //               <XAxis dataKey="date" />
// // //               <YAxis yAxisId="left" orientation="left" stroke="#3B82F6" />
// // //               <YAxis yAxisId="right" orientation="right" stroke="#10B981" />
// // //               <Tooltip formatter={(value, name) => {
// // //                 if (name === "Profit") return formatCurrency(value);
// // //                 return `${value.toFixed(1)}%`;
// // //               }} />
// // //               <Legend />
// // //               <Bar 
// // //                 yAxisId="left"
// // //                 dataKey="profit" 
// // //                 fill="#3B82F6" 
// // //                 name="Profit" 
// // //               />
// // //               <Bar 
// // //                 yAxisId="right"
// // //                 dataKey={(entry) => ((entry.revenue > 0) ? (entry.profit / entry.revenue) * 100 : 0)}
// // //                 fill="#10B981" 
// // //                 name="Margin %" 
// // //               />
// // //             </BarChart>
// // //           </ResponsiveContainer>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default FinancialAnalytics;

// // import React, { useState, useEffect, useRef } from "react";
// // import axios from "axios";
// // import { Bar, Pie, Line, Scatter } from "react-chartjs-2";
// // import * as XLSX from "xlsx";
// // import jsPDF from "jspdf";
// // import "jspdf-autotable";
// // import {
// //   Chart as ChartJS,
// //   CategoryScale,
// //   LinearScale,
// //   BarElement,
// //   Title,
// //   Tooltip,
// //   Legend,
// //   ArcElement,
// //   PointElement,
// //   LineElement,
// // } from "chart.js";

// // // Register Chart.js components
// // ChartJS.register(
// //   CategoryScale,
// //   LinearScale,
// //   BarElement,
// //   Title,
// //   Tooltip,
// //   Legend,
// //   ArcElement,
// //   PointElement,
// //   LineElement
// // );

// // const API_URL = "http://localhost:5010/api";

// // const fetchSalesData = async (startDate, endDate) => {
// //   try {
// //     const storeId = localStorage.getItem("storeId") || "STORE-1737889146-4514";
// //     const response = await axios.get(`${API_URL}/daily-sales-employee`, {
// //       params: { startDate, endDate },
// //       headers: { storeId },
// //     });
// //     return response.data;
// //   } catch (error) {
// //     throw new Error(error.response?.data?.message || "Failed to fetch sales data");
// //   }
// // };

// // const Employee = () => {
// //   const [startDate, setStartDate] = useState("");
// //   const [endDate, setEndDate] = useState("");
// //   const [salesData, setSalesData] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [activeTab, setActiveTab] = useState("table");
// //   const [totalSales, setTotalSales] = useState(0);
// //   const [employeeStats, setEmployeeStats] = useState({});
// //   const [showExportMenu, setShowExportMenu] = useState(false);
// //   const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

// //   const barChartRef = useRef(null);
// //   const pieChartRef = useRef(null);
// //   const lineChartRef = useRef(null);
// //   const scatterChartRef = useRef(null);

// //   // Set default date range to last 30 days
// //   useEffect(() => {
// //     const today = new Date();
// //     const thirtyDaysAgo = new Date();
// //     thirtyDaysAgo.setDate(today.getDate() - 30);
// //     setEndDate(today.toISOString().split("T")[0]);
// //     setStartDate(thirtyDaysAgo.toISOString().split("T")[0]);
// //   }, []);

// //   // Fetch data when dates change
// //   useEffect(() => {
// //     if (startDate && endDate) {
// //       fetchSalesData(startDate, endDate).then(setSalesData).catch(err => setError(err.message));
// //     }
// //   }, [startDate, endDate]);

// //   // Process data for stats and charts
// //   useEffect(() => {
// //     if (salesData.length > 0) {
// //       const total = salesData.reduce((sum, sale) => sum + sale.total_amount, 0);
// //       setTotalSales(total);

// //       const stats = {};
// //       salesData.forEach(sale => {
// //         const employeeId = sale.userId; // Map userId to employee_id
// //         if (!stats[employeeId]) {
// //           stats[employeeId] = { totalSales: 0, transactions: 0, avgSale: 0 };
// //         }
// //         stats[employeeId].totalSales += sale.total_amount;
// //         stats[employeeId].transactions += 1;
// //       });
// //       Object.keys(stats).forEach(id => {
// //         stats[id].avgSale = stats[id].totalSales / stats[id].transactions;
// //       });
// //       setEmployeeStats(stats);
// //     }
// //   }, [salesData]);

// //   // Handle window resize for responsive design
// //   useEffect(() => {
// //     const handleResize = () => setIsDesktop(window.innerWidth >= 768);
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   // Click outside to close export menu
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (showExportMenu && !event.target.closest("#export-dropdown")) {
// //         setShowExportMenu(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, [showExportMenu]);

// //   const formatCurrency = (amount) => {
// //     return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
// //   };

// //   // Chart Data
// //   const barChartData = {
// //     labels: Object.keys(employeeStats).map(id => `Employee ${id}`),
// //     datasets: [
// //       {
// //         label: "Total Sales",
// //         data: Object.values(employeeStats).map(stat => stat.totalSales),
// //         backgroundColor: "rgba(37, 99, 235, 0.7)",
// //         borderColor: "rgba(37, 99, 235, 1)",
// //         borderWidth: 1,
// //       },
// //     ],
// //   };

// //   const barChartOptions = {
// //     responsive: true,
// //     maintainAspectRatio: false,
// //     plugins: {
// //       legend: { position: "top" },
// //       title: { display: true, text: "Sales by Employee", font: { size: 16, weight: "bold" } },
// //       tooltip: { callbacks: { label: (context) => `Sales: ${formatCurrency(context.raw)}` } },
// //     },
// //     scales: { y: { beginAtZero: true, ticks: { callback: (value) => formatCurrency(value) } } },
// //   };

// //   const pieChartData = {
// //     labels: Object.keys(employeeStats).map(id => `Employee ${id}`),
// //     datasets: [
// //       {
// //         data: Object.values(employeeStats).map(stat => stat.totalSales),
// //         backgroundColor: [
// //           "rgba(37, 99, 235, 0.7)",
// //           "rgba(16, 185, 129, 0.7)",
// //           "rgba(245, 158, 11, 0.7)",
// //           "rgba(239, 68, 68, 0.7)",
// //           "rgba(139, 92, 246, 0.7)",
// //           "rgba(20, 184, 166, 0.7)",
// //         ],
// //         borderColor: [
// //           "rgba(37, 99, 235, 1)",
// //           "rgba(16, 185, 129, 1)",
// //           "rgba(245, 158, 11, 1)",
// //           "rgba(239, 68, 68, 1)",
// //           "rgba(139, 92, 246, 1)",
// //           "rgba(20, 184, 166, 1)",
// //         ],
// //         borderWidth: 1,
// //       },
// //     ],
// //   };

// //   const pieChartOptions = {
// //     responsive: true,
// //     maintainAspectRatio: false,
// //     plugins: {
// //       legend: { position: "right" },
// //       title: { display: true, text: "Sales Distribution", font: { size: 16, weight: "bold" } },
// //       tooltip: {
// //         callbacks: {
// //           label: (context) => {
// //             const value = context.raw;
// //             const total = context.dataset.data.reduce((a, b) => a + b, 0);
// //             const percentage = ((value / total) * 100).toFixed(1);
// //             return `${formatCurrency(value)} (${percentage}%)`;
// //           },
// //         },
// //       },
// //     },
// //   };

// //   const prepareDateData = () => {
// //     const dateMap = {};
// //     salesData.forEach(sale => {
// //       const date = sale.date.split(" ")[0]; // Use date instead of sale_date
// //       dateMap[date] = (dateMap[date] || 0) + sale.total_amount;
// //     });
// //     const sortedDates = Object.keys(dateMap).sort();
// //     return {
// //       labels: sortedDates.map(date => new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" })),
// //       values: sortedDates.map(date => dateMap[date]),
// //     };
// //   };

// //   const dateData = salesData.length > 0 ? prepareDateData() : { labels: [], values: [] };

// //   const lineChartData = {
// //     labels: dateData.labels,
// //     datasets: [
// //       {
// //         label: "Daily Sales",
// //         data: dateData.values,
// //         borderColor: "rgba(16, 185, 129, 1)",
// //         backgroundColor: "rgba(16, 185, 129, 0.1)",
// //         borderWidth: 2,
// //         tension: 0.4,
// //         fill: true,
// //         pointRadius: 4,
// //         pointBackgroundColor: "rgba(16, 185, 129, 1)",
// //       },
// //     ],
// //   };

// //   const lineChartOptions = {
// //     responsive: true,
// //     maintainAspectRatio: false,
// //     plugins: {
// //       legend: { position: "top" },
// //       title: { display: true, text: "Sales Trend", font: { size: 16, weight: "bold" } },
// //       tooltip: { callbacks: { label: (context) => `Sales: ${formatCurrency(context.raw)}` } },
// //     },
// //     scales: { y: { beginAtZero: true, ticks: { callback: (value) => formatCurrency(value) } } },
// //   };

// //   const scatterChartData = {
// //     datasets: [
// //       {
// //         label: "Employee Performance",
// //         data: Object.keys(employeeStats).map(id => ({
// //           x: employeeStats[id].transactions,
// //           y: employeeStats[id].avgSale,
// //           id: id,
// //         })),
// //         backgroundColor: "rgba(139, 92, 246, 0.7)",
// //         borderColor: "rgba(139, 92, 246, 1)",
// //         borderWidth: 1,
// //         pointRadius: 10,
// //         pointHoverRadius: 14,
// //       },
// //     ],
// //   };

// //   const scatterChartOptions = {
// //     responsive: true,
// //     maintainAspectRatio: false,
// //     plugins: {
// //       legend: { position: "top" },
// //       title: { display: true, text: "Employee Performance Analysis", font: { size: 16, weight: "bold" } },
// //       tooltip: {
// //         callbacks: {
// //           label: (context) => [
// //             `Employee ID: ${context.raw.id}`,
// //             `Transactions: ${context.raw.x}`,
// //             `Avg Sale: ${formatCurrency(context.raw.y)}`,
// //           ],
// //         },
// //       },
// //     },
// //     scales: {
// //       x: { title: { display: true, text: "Number of Transactions", font: { weight: "bold" } }, beginAtZero: true },
// //       y: {
// //         title: { display: true, text: "Average Sale Amount", font: { weight: "bold" } },
// //         beginAtZero: true,
// //         ticks: { callback: (value) => formatCurrency(value) },
// //       },
// //     },
// //   };

// //   const handleShare = () => {
// //     if (navigator.share) {
// //       navigator.share({
// //         title: "Employee Sales Report",
// //         text: `Sales Report from ${startDate} to ${endDate} - Total: ${formatCurrency(totalSales)}`,
// //         url: window.location.href,
// //       }).then(() => console.log("Share successful")).catch(error => console.error("Error sharing:", error));
// //     } else {
// //       alert("Sharing is not supported on this browser.");
// //     }
// //   };

// //   const exportCSV = () => {
// //     if (salesData.length === 0) return;
// //     const headers = ["Employee ID", "Sale Date", "Total Amount"];
// //     const csvData = [
// //       headers.join(","),
// //       ...salesData.map(sale => `${sale.userId},${new Date(sale.date).toLocaleString()},${sale.total_amount}`),
// //     ].join("\n");
// //     const blob = new Blob([csvData], { type: "text/csv" });
// //     const url = window.URL.createObjectURL(blob);
// //     const a = document.createElement("a");
// //     a.setAttribute("href", url);
// //     a.setAttribute("download", `sales_${startDate}_to_${endDate}.csv`);
// //     document.body.appendChild(a);
// //     a.click();
// //     document.body.removeChild(a);
// //   };

// //   const exportExcel = () => {
// //     if (salesData.length === 0) return;
// //     const workbook = XLSX.utils.book_new();
// //     const salesWorksheetData = salesData.map(sale => ({
// //       "Employee ID": sale.userId,
// //       "Sale Date": new Date(sale.date).toLocaleString(),
// //       "Total Amount": sale.total_amount,
// //     }));
// //     const salesWorksheet = XLSX.utils.json_to_sheet(salesWorksheetData);
// //     XLSX.utils.book_append_sheet(workbook, salesWorksheet, "Sales Data");
// //     const summaryData = Object.keys(employeeStats).map(id => ({
// //       "Employee ID": id,
// //       "Total Sales": employeeStats[id].totalSales,
// //       "Transactions": employeeStats[id].transactions,
// //       "Average Sale": employeeStats[id].avgSale,
// //       "Percentage of Total": `${((employeeStats[id].totalSales / totalSales) * 100).toFixed(1)}%`,
// //     }));
// //     const summaryWorksheet = XLSX.utils.json_to_sheet(summaryData);
// //     XLSX.utils.book_append_sheet(workbook, summaryWorksheet, "Employee Summary");
// //     const overviewData = [
// //       { Metric: "Report Period", Value: `${startDate} to ${endDate}` },
// //       { Metric: "Total Sales", Value: totalSales },
// //       { Metric: "Total Transactions", Value: salesData.length },
// //       { Metric: "Average Sale", Value: totalSales / salesData.length },
// //     ];
// //     const overviewWorksheet = XLSX.utils.json_to_sheet(overviewData);
// //     XLSX.utils.book_append_sheet(workbook, overviewWorksheet, "Overview");
// //     XLSX.writeFile(workbook, `employee_sales_report_${startDate}_to_${endDate}.xlsx`);
// //   };

// //   const exportPDF = () => {
// //     if (salesData.length === 0) return;
// //     const doc = new jsPDF();
// //     doc.setFontSize(18);
// //     doc.text("Employee Sales Report", 14, 20);
// //     doc.setFontSize(12);
// //     doc.text(`Report Period: ${startDate} to ${endDate}`, 14, 30);
// //     doc.setFontSize(14);
// //     doc.text("Summary", 14, 40);
// //     doc.setFontSize(10);
// //     doc.text(`Total Sales: ${formatCurrency(totalSales)}`, 14, 50);
// //     doc.text(`Total Transactions: ${salesData.length}`, 14, 56);
// //     doc.text(`Average Sale: ${formatCurrency(totalSales / salesData.length)}`, 14, 62);
// //     doc.setFontSize(14);
// //     doc.text("Employee Performance", 14, 75);
// //     const employeeTableData = Object.keys(employeeStats).map(id => [
// //       id,
// //       formatCurrency(employeeStats[id].totalSales),
// //       employeeStats[id].transactions,
// //       formatCurrency(employeeStats[id].avgSale),
// //       `${((employeeStats[id].totalSales / totalSales) * 100).toFixed(1)}%`,
// //     ]);
// //     doc.autoTable({
// //       startY: 80,
// //       head: [["Employee ID", "Total Sales", "Transactions", "Average Sale", "% of Total"]],
// //       body: employeeTableData,
// //       theme: "grid",
// //       headStyles: { fillColor: [37, 99, 235] },
// //     });
// //     const salesTableData = salesData.slice(0, 20).map(sale => [
// //       sale.userId,
// //       new Date(sale.date).toLocaleString(),
// //       formatCurrency(sale.total_amount),
// //     ]);
// //     const salesTableY = doc.lastAutoTable.finalY + 15;
// //     doc.setFontSize(14);
// //     doc.text("Sales Data (First 20 Entries)", 14, salesTableY);
// //     doc.autoTable({
// //       startY: salesTableY + 5,
// //       head: [["Employee ID", "Sale Date", "Amount"]],
// //       body: salesTableData,
// //       theme: "grid",
// //       headStyles: { fillColor: [37, 99, 235] },
// //     });
// //     if (salesData.length > 20) {
// //       const noteY = doc.lastAutoTable.finalY + 10;
// //       doc.setFontSize(10);
// //       doc.setTextColor(100);
// //       doc.text(`Note: Showing 20 of ${salesData.length} total records.`, 14, noteY);
// //     }
// //     if (activeTab !== "table") {
// //       doc.addPage();
// //       doc.setFontSize(14);
// //       let chartTitle, chartCanvas;
// //       if (activeTab === "bar" && barChartRef.current) {
// //         chartTitle = "Sales by Employee";
// //         chartCanvas = barChartRef.current.canvas;
// //       } else if (activeTab === "pie" && pieChartRef.current) {
// //         chartTitle = "Sales Distribution";
// //         chartCanvas = pieChartRef.current.canvas;
// //       } else if (activeTab === "line" && lineChartRef.current) {
// //         chartTitle = "Sales Trend";
// //         chartCanvas = lineChartRef.current.canvas;
// //       } else if (activeTab === "scatter" && scatterChartRef.current) {
// //         chartTitle = "Employee Performance Analysis";
// //         chartCanvas = scatterChartRef.current.canvas;
// //       }
// //       if (chartCanvas) {
// //         doc.text(chartTitle, 14, 20);
// //         const imgData = chartCanvas.toDataURL("image/png");
// //         doc.addImage(imgData, "PNG", 14, 30, 180, 120);
// //       }
// //     }
// //     doc.save(`sales_report_${startDate}_to_${endDate}.pdf`);
// //   };

// //   const shareAsPDF = async () => {
// //     if (salesData.length === 0) return;
// //     try {
// //       setLoading(true);
// //       const doc = new jsPDF();
// //       doc.setFontSize(18);
// //       doc.text("Employee Sales Report", 14, 20);
// //       doc.setFontSize(12);
// //       doc.text(`Report Period: ${startDate} to ${endDate}`, 14, 30);
// //       doc.setFontSize(14);
// //       doc.text("Summary", 14, 40);
// //       doc.setFontSize(10);
// //       doc.text(`Total Sales: ${formatCurrency(totalSales)}`, 14, 50);
// //       doc.text(`Total Transactions: ${salesData.length}`, 14, 56);
// //       doc.text(`Average Sale: ${formatCurrency(totalSales / salesData.length)}`, 14, 62);
// //       doc.setFontSize(14);
// //       doc.text("Employee Performance", 14, 75);
// //       const employeeTableData = Object.keys(employeeStats).map(id => [
// //         id,
// //         formatCurrency(employeeStats[id].totalSales),
// //         employeeStats[id].transactions,
// //         formatCurrency(employeeStats[id].avgSale),
// //         `${((employeeStats[id].totalSales / totalSales) * 100).toFixed(1)}%`,
// //       ]);
// //       doc.autoTable({
// //         startY: 80,
// //         head: [["Employee ID", "Total Sales", "Transactions", "Average Sale", "% of Total"]],
// //         body: employeeTableData,
// //         theme: "grid",
// //         headStyles: { fillColor: [37, 99, 235] },
// //       });
// //       const pdfBlob = doc.output("blob");
// //       const fileData = {
// //         files: [
// //           new File([pdfBlob], `sales_report_${startDate}_to_${endDate}.pdf`, { type: "application/pdf" }),
// //         ],
// //         title: "Employee Sales Report",
// //         text: `Sales Report from ${startDate} to ${endDate}`,
// //       };
// //       if (navigator.canShare && navigator.canShare(fileData)) {
// //         await navigator.share(fileData);
// //       } else {
// //         alert("Sharing PDFs is not supported on this browser or device.");
// //       }
// //     } catch (error) {
// //       console.error("Error sharing PDF:", error);
// //       alert("Failed to share PDF: " + error.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 p-5 font-sans text-gray-800">
// //       <div className="max-w-6xl mx-auto">
// //         <div className="bg-white rounded-lg shadow-md p-6">
// //           <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
// //             <div>
// //               <h1 className="text-2xl font-bold text-gray-900">Employee Sales Dashboard</h1>
// //               <p className="text-sm text-gray-500 mt-1">Track and analyze employee sales performance with detailed insights</p>
// //             </div>
// //             <div className="flex gap-2 mt-4 md:mt-0">
// //               <button
// //                 onClick={handleShare}
// //                 disabled={loading}
// //                 className={`px-4 py-2 rounded text-sm font-medium text-white ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
// //               >
// //                 Share Report
// //               </button>
// //               <div className="relative" id="export-dropdown">
// //                 <button
// //                   onClick={() => setShowExportMenu(!showExportMenu)}
// //                   disabled={loading}
// //                   className={`flex items-center gap-2 px-4 py-2 rounded text-sm font-medium text-white ${loading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"}`}
// //                 >
// //                   Export
// //                   <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //                     <polyline points="6 9 12 15 18 9" />
// //                   </svg>
// //                 </button>
// //                 {showExportMenu && (
// //                   <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-40 z-10">
// //                     <div onClick={() => { exportCSV(); setShowExportMenu(false); }} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Export as CSV</div>
// //                     <div onClick={() => { exportExcel(); setShowExportMenu(false); }} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Export as Excel</div>
// //                     <div onClick={() => { exportPDF(); setShowExportMenu(false); }} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Export as PDF</div>
// //                     <div onClick={() => { shareAsPDF(); setShowExportMenu(false); }} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Share as PDF</div>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>

// //           <div className={`flex ${isDesktop ? "flex-row items-end gap-4" : "flex-col gap-4"} mb-2`}>
// //             <div className="flex-1">
// //               <label className="block text-sm font-medium text-gray-600 mb-1">Start Date</label>
// //               <input
// //                 type="date"
// //                 value={startDate}
// //                 onChange={(e) => setStartDate(e.target.value)}
// //                 className="w-full p-2 border border-gray-300 rounded text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
// //               />
// //             </div>
// //             <div className="flex-1">
// //               <label className="block text-sm font-medium text-gray-600 mb-1">End Date</label>
// //               <input
// //                 type="date"
// //                 value={endDate}
// //                 onChange={(e) => setEndDate(e.target.value)}
// //                 className="w-full p-2 border border-gray-300 rounded text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
// //               />
// //             </div>
// //             <button
// //               onClick={() => fetchSalesData(startDate, endDate)}
// //               disabled={loading || !startDate || !endDate}
// //               className={`px-4 py-2 rounded text-sm font-medium text-white ${loading || !startDate || !endDate ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
// //             >
// //               {loading ? "Loading..." : "Update Report"}
// //             </button>
// //           </div>

// //           {error && <div className="bg-red-100 text-red-800 p-4 rounded mb-6">{error}</div>}

// //           {!loading && salesData.length > 0 && (
// //             <>
// //               <div className={`grid gap-6 mb-6 ${isDesktop ? "grid-cols-3" : "grid-cols-1"}`}>
// //                 <div className="bg-white p-5 rounded-lg shadow">
// //                   <p className="text-sm text-gray-600 font-medium">Total Sales</p>
// //                   <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalSales)}</p>
// //                 </div>
// //                 <div className="bg-white p-5 rounded-lg shadow">
// //                   <p className="text-sm text-gray-600 font-medium">Total Transactions</p>
// //                   <p className="text-2xl font-bold text-gray-900">{salesData.length}</p>
// //                 </div>
// //                 <div className="bg-white p-5 rounded-lg shadow">
// //                   <p className="text-sm text-gray-600 font-medium">Average Sale</p>
// //                   <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalSales / salesData.length)}</p>
// //                 </div>
// //               </div>

// //               <div className="flex border-b border-gray-200">
// //                 {["table", "bar", "pie", "line", "scatter"].map(tab => (
// //                   <button
// //                     key={tab}
// //                     onClick={() => setActiveTab(tab)}
// //                     className={`uppercase px-6 py-4 text-sm font-medium transition-colors ${activeTab === tab ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-gray-800 hover:border-b-2 hover:border-gray-300"}`}
// //                   >
// //                     {tab === "table" ? "Table View" : tab === "bar" ? "Bar Chart" : tab === "pie" ? "Pie Chart" : tab === "line" ? "Trend" : "Performance"}
// //                   </button>
// //                 ))}
// //               </div>

// //               <div className="mt-5">
// //                 {activeTab === "table" && (
// //                   <div className="overflow-x-auto">
// //                     <table className="w-full text-sm text-left border-collapse">
// //                       <thead className="bg-gray-50">
// //                         <tr>
// //                           <th className="p-3 text-gray-600 font-medium uppercase tracking-wider">Employee ID</th>
// //                           <th className="p-3 text-gray-600 font-medium uppercase tracking-wider">Sale Date</th>
// //                           <th className="p-3 text-gray-600 font-medium uppercase tracking-wider">Total Amount</th>
// //                         </tr>
// //                       </thead>
// //                       <tbody>
// //                         {salesData.map((sale, index) => (
// //                           <tr key={index} className="border-b border-gray-200">
// //                             <td className="p-4 font-medium text-gray-900">{sale.userId}</td>
// //                             <td className="p-4 text-gray-700">{new Date(sale.date).toLocaleString()}</td>
// //                             <td className="p-4 text-gray-700">{formatCurrency(sale.total_amount)}</td>
// //                           </tr>
// //                         ))}
// //                       </tbody>
// //                     </table>
// //                   </div>
// //                 )}
// //                 {activeTab === "bar" && (
// //                   <div className="h-[400px] p-4">
// //                     <Bar ref={barChartRef} data={barChartData} options={barChartOptions} />
// //                   </div>
// //                 )}
// //                 {activeTab === "pie" && (
// //                   <div className="h-[400px] p-4">
// //                     <Pie ref={pieChartRef} data={pieChartData} options={pieChartOptions} />
// //                   </div>
// //                 )}
// //                 {activeTab === "line" && (
// //                   <div className="h-[400px] p-4">
// //                     <Line ref={lineChartRef} data={lineChartData} options={lineChartOptions} />
// //                   </div>
// //                 )}
// //                 {activeTab === "scatter" && (
// //                   <div className="h-[400px] p-4">
// //                     <Scatter ref={scatterChartRef} data={scatterChartData} options={scatterChartOptions} />
// //                   </div>
// //                 )}
// //               </div>
// //             </>
// //           )}

// //           {!loading && salesData.length === 0 && (
// //             <div className="bg-white rounded-lg shadow-md p-12 text-center">
// //               <h2 className="text-lg font-medium text-gray-600">No sales data available</h2>
// //               <p className="text-sm text-gray-400 mt-2">Try adjusting your date range or verify that sales data exists for the selected period.</p>
// //             </div>
// //           )}

// //           {loading && <div className="text-center py-12 text-gray-600">Loading sales data...</div>}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Employee;
// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { Bar, Pie, Line, Scatter } from "react-chartjs-2";
// import * as XLSX from "xlsx";
// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable"; // Explicitly import autoTable
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

// const API_URL = "http://localhost:5010/api";

// const fetchSalesData = async (startDate, endDate) => {
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

// const Employee = () => {
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [salesData, setSalesData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [activeTab, setActiveTab] = useState("table");
//   const [totalSales, setTotalSales] = useState(0);
//   const [employeeStats, setEmployeeStats] = useState({});
//   const [showExportMenu, setShowExportMenu] = useState(false);
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

//   const barChartRef = useRef(null);
//   const pieChartRef = useRef(null);
//   const lineChartRef = useRef(null);
//   const scatterChartRef = useRef(null);

//   // Set default date range to last 30 days
//   useEffect(() => {
//     const today = new Date();
//     const thirtyDaysAgo = new Date();
//     thirtyDaysAgo.setDate(today.getDate() - 30);
//     setEndDate(today.toISOString().split("T")[0]);
//     setStartDate(thirtyDaysAgo.toISOString().split("T")[0]);
//   }, []);

//   // Fetch data when dates change
//   useEffect(() => {
//     if (startDate && endDate) {
//       fetchSalesData(startDate, endDate)
//         .then(setSalesData)
//         .catch(err => setError(err.message));
//     }
//   }, [startDate, endDate]);

//   // Process data for stats and charts
//   useEffect(() => {
//     if (salesData.length > 0) {
//       const total = salesData.reduce((sum, sale) => sum + sale.total_amount, 0);
//       setTotalSales(total);

//       const stats = {};
//       salesData.forEach(sale => {
//         const employeeId = sale.userId;
//         if (!stats[employeeId]) {
//           stats[employeeId] = { totalSales: 0, transactions: 0, avgSale: 0 };
//         }
//         stats[employeeId].totalSales += sale.total_amount;
//         stats[employeeId].transactions += 1;
//       });
//       Object.keys(stats).forEach(id => {
//         stats[id].avgSale = stats[id].totalSales / stats[id].transactions;
//       });
//       setEmployeeStats(stats);
//     }
//   }, [salesData]);

//   // Handle window resize for responsive design
//   useEffect(() => {
//     const handleResize = () => setIsDesktop(window.innerWidth >= 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Click outside to close export menu
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (showExportMenu && !event.target.closest("#export-dropdown")) {
//         setShowExportMenu(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [showExportMenu]);

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
//   };

//   // Chart Data
//   const barChartData = {
//     labels: Object.keys(employeeStats).map(id => `Employee ${id}`),
//     datasets: [
//       {
//         label: "Total Sales",
//         data: Object.values(employeeStats).map(stat => stat.totalSales),
//         backgroundColor: "rgba(37, 99, 235, 0.7)",
//         borderColor: "rgba(37, 99, 235, 1 disputed)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const barChartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { position: "top" },
//       title: { display: true, text: "Sales by Employee", font: { size: 16, weight: "bold" } },
//       tooltip: { callbacks: { label: (context) => `Sales: ${formatCurrency(context.raw)}` } },
//     },
//     scales: { y: { beginAtZero: true, ticks: { callback: (value) => formatCurrency(value) } } },
//   };

//   const pieChartData = {
//     labels: Object.keys(employeeStats).map(id => `Employee ${id}`),
//     datasets: [
//       {
//         data: Object.values(employeeStats).map(stat => stat.totalSales),
//         backgroundColor: [
//           "rgba(37, 99, 235, 0.7)",
//           "rgba(16, 185, 129, 0.7)",
//           "rgba(245, 158, 11, 0.7)",
//           "rgba(239, 68, 68, 0.7)",
//           "rgba(139, 92, 246, 0.7)",
//           "rgba(20, 184, 166, 0.7)",
//         ],
//         borderColor: [
//           "rgba(37, 99, 235, 1)",
//           "rgba(16, 185, 129, 1)",
//           "rgba(245, 158, 11, 1)",
//           "rgba(239, 68, 68, 1)",
//           "rgba(139, 92, 246, 1)",
//           "rgba(20, 184, 166, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const pieChartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { position: "right" },
//       title: { display: true, text: "Sales Distribution", font: { size: 16, weight: "bold" } },
//       tooltip: {
//         callbacks: {
//           label: (context) => {
//             const value = context.raw;
//             const total = context.dataset.data.reduce((a, b) => a + b, 0);
//             const percentage = ((value / total) * 100).toFixed(1);
//             return `${formatCurrency(value)} (${percentage}%)`;
//           },
//         },
//       },
//     },
//   };

//   const prepareDateData = () => {
//     const dateMap = {};
//     salesData.forEach(sale => {
//       const date = sale.date.split(" ")[0];
//       dateMap[date] = (dateMap[date] || 0) + sale.total_amount;
//     });
//     const sortedDates = Object.keys(dateMap).sort();
//     return {
//       labels: sortedDates.map(date => new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" })),
//       values: sortedDates.map(date => dateMap[date]),
//     };
//   };

//   const dateData = salesData.length > 0 ? prepareDateData() : { labels: [], values: [] };

//   const lineChartData = {
//     labels: dateData.labels,
//     datasets: [
//       {
//         label: "Daily Sales",
//         data: dateData.values,
//         borderColor: "rgba(16, 185, 129, 1)",
//         backgroundColor: "rgba(16, 185, 129, 0.1)",
//         borderWidth: 2,
//         tension: 0.4,
//         fill: true,
//         pointRadius: 4,
//         pointBackgroundColor: "rgba(16, 185, 129, 1)",
//       },
//     ],
//   };

//   const lineChartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { position: "top" },
//       title: { display: true, text: "Sales Trend", font: { size: 16, weight: "bold" } },
//       tooltip: { callbacks: { label: (context) => `Sales: ${formatCurrency(context.raw)}` } },
//     },
//     scales: { y: { beginAtZero: true, ticks: { callback: (value) => formatCurrency(value) } } },
//   };

//   const scatterChartData = {
//     datasets: [
//       {
//         label: "Employee Performance",
//         data: Object.keys(employeeStats).map(id => ({
//           x: employeeStats[id].transactions,
//           y: employeeStats[id].avgSale,
//           id: id,
//         })),
//         backgroundColor: "rgba(139, 92, 246, 0.7)",
//         borderColor: "rgba(139, 92, 246, 1)",
//         borderWidth: 1,
//         pointRadius: 10,
//         pointHoverRadius: 14,
//       },
//     ],
//   };

//   const scatterChartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { position: "top" },
//       title: { display: true, text: "Employee Performance Analysis", font: { size: 16, weight: "bold" } },
//       tooltip: {
//         callbacks: {
//           label: (context) => [
//             `Employee ID: ${context.raw.id}`,
//             `Transactions: ${context.raw.x}`,
//             `Avg Sale: ${formatCurrency(context.raw.y)}`,
//           ],
//         },
//       },
//     },
//     scales: {
//       x: { title: { display: true, text: "Number of Transactions", font: { weight: "bold" } }, beginAtZero: true },
//       y: {
//         title: { display: true, text: "Average Sale Amount", font: { weight: "bold" } },
//         beginAtZero: true,
//         ticks: { callback: (value) => formatCurrency(value) },
//       },
//     },
//   };

//   const handleShare = () => {
//     if (navigator.share) {
//       navigator.share({
//         title: "Employee Sales Report",
//         text: `Sales Report from ${startDate} to ${endDate} - Total: ${formatCurrency(totalSales)}`,
//         url: window.location.href,
//       })
//         .then(() => console.log("Share successful"))
//         .catch(error => console.error("Error sharing:", error));
//     } else {
//       alert("Sharing is not supported on this browser.");
//     }
//   };

//   const exportCSV = () => {
//     if (salesData.length === 0) return;
//     const headers = ["Employee ID", "Sale Date", "Total Amount"];
//     const csvData = [
//       headers.join(","),
//       ...salesData.map(sale => `${sale.userId},${new Date(sale.date).toLocaleString()},${sale.total_amount}`),
//     ].join("\n");
//     const blob = new Blob([csvData], { type: "text/csv" });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.setAttribute("href", url);
//     a.setAttribute("download", `sales_${startDate}_to_${endDate}.csv`);
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//   };

//   const exportExcel = () => {
//     if (salesData.length === 0) return;
//     const workbook = XLSX.utils.book_new();
//     const salesWorksheetData = salesData.map(sale => ({
//       "Employee ID": sale.userId,
//       "Sale Date": new Date(sale.date).toLocaleString(),
//       "Total Amount": sale.total_amount,
//     }));
//     const salesWorksheet = XLSX.utils.json_to_sheet(salesWorksheetData);
//     XLSX.utils.book_append_sheet(workbook, salesWorksheet, "Sales Data");
//     const summaryData = Object.keys(employeeStats).map(id => ({
//       "Employee ID": id,
//       "Total Sales": employeeStats[id].totalSales,
//       "Transactions": employeeStats[id].transactions,
//       "Average Sale": employeeStats[id].avgSale,
//       "Percentage of Total": `${((employeeStats[id].totalSales / totalSales) * 100).toFixed(1)}%`,
//     }));
//     const summaryWorksheet = XLSX.utils.json_to_sheet(summaryData);
//     XLSX.utils.book_append_sheet(workbook, summaryWorksheet, "Employee Summary");
//     const overviewData = [
//       { Metric: "Report Period", Value: `${startDate} to ${endDate}` },
//       { Metric: "Total Sales", Value: totalSales },
//       { Metric: "Total Transactions", Value: salesData.length },
//       { Metric: "Average Sale", Value: totalSales / salesData.length },
//     ];
//     const overviewWorksheet = XLSX.utils.json_to_sheet(overviewData);
//     XLSX.utils.book_append_sheet(workbook, overviewWorksheet, "Overview");
//     XLSX.writeFile(workbook, `employee_sales_report_${startDate}_to_${endDate}.xlsx`);
//   };

//   const exportPDF = () => {
//     if (salesData.length === 0) return;
//     const doc = new jsPDF();
//     doc.setFontSize(18);
//     doc.text("Employee Sales Report", 14, 20);
//     doc.setFontSize(12);
//     doc.text(`Report Period: ${startDate} to ${endDate}`, 14, 30);
//     doc.setFontSize(14);
//     doc.text("Summary", 14, 40);
//     doc.setFontSize(10);
//     doc.text(`Total Sales: ${formatCurrency(totalSales)}`, 14, 50);
//     doc.text(`Total Transactions: ${salesData.length}`, 14, 56);
//     doc.text(`Average Sale: ${formatCurrency(totalSales / salesData.length)}`, 14, 62);
//     doc.setFontSize(14);
//     doc.text("Employee Performance", 14, 75);

//     // Use autoTable explicitly
//     autoTable(doc, {
//       startY: 80,
//       head: [["Employee ID", "Total Sales", "Transactions", "Average Sale", "% of Total"]],
//       body: Object.keys(employeeStats).map(id => [
//         id,
//         formatCurrency(employeeStats[id].totalSales),
//         employeeStats[id].transactions,
//         formatCurrency(employeeStats[id].avgSale),
//         `${((employeeStats[id].totalSales / totalSales) * 100).toFixed(1)}%`,
//       ]),
//       theme: "grid",
//       headStyles: { fillColor: [37, 99, 235] },
//     });

//     const salesTableData = salesData.slice(0, 20).map(sale => [
//       sale.userId,
//       new Date(sale.date).toLocaleString(),
//       formatCurrency(sale.total_amount),
//     ]);
//     const salesTableY = doc.lastAutoTable.finalY + 15;
//     doc.setFontSize(14);
//     doc.text("Sales Data (First 20 Entries)", 14, salesTableY);

//     autoTable(doc, {
//       startY: salesTableY + 5,
//       head: [["Employee ID", "Sale Date", "Amount"]],
//       body: salesTableData,
//       theme: "grid",
//       headStyles: { fillColor: [37, 99, 235] },
//     });

//     if (salesData.length > 20) {
//       const noteY = doc.lastAutoTable.finalY + 10;
//       doc.setFontSize(10);
//       doc.setTextColor(100);
//       doc.text(`Note: Showing 20 of ${salesData.length} total records.`, 14, noteY);
//     }

//     if (activeTab !== "table") {
//       doc.addPage();
//       doc.setFontSize(14);
//       let chartTitle, chartCanvas;
//       if (activeTab === "bar" && barChartRef.current) {
//         chartTitle = "Sales by Employee";
//         chartCanvas = barChartRef.current.canvas;
//       } else if (activeTab === "pie" && pieChartRef.current) {
//         chartTitle = "Sales Distribution";
//         chartCanvas = pieChartRef.current.canvas;
//       } else if (activeTab === "line" && lineChartRef.current) {
//         chartTitle = "Sales Trend";
//         chartCanvas = lineChartRef.current.canvas;
//       } else if (activeTab === "scatter" && scatterChartRef.current) {
//         chartTitle = "Employee Performance Analysis";
//         chartCanvas = scatterChartRef.current.canvas;
//       }
//       if (chartCanvas) {
//         doc.text(chartTitle, 14, 20);
//         const imgData = chartCanvas.toDataURL("image/png");
//         doc.addImage(imgData, "PNG", 14, 30, 180, 120);
//       }
//     }

//     doc.save(`sales_report_${startDate}_to_${endDate}.pdf`);
//   };

//   const shareAsPDF = async () => {
//     if (salesData.length === 0) return;
//     try {
//       setLoading(true);
//       const doc = new jsPDF();
//       doc.setFontSize(18);
//       doc.text("Employee Sales Report", 14, 20);
//       doc.setFontSize(12);
//       doc.text(`Report Period: ${startDate} to ${endDate}`, 14, 30);
//       doc.setFontSize(14);
//       doc.text("Summary", 14, 40);
//       doc.setFontSize(10);
//       doc.text(`Total Sales: ${formatCurrency(totalSales)}`, 14, 50);
//       doc.text(`Total Transactions: ${salesData.length}`, 14, 56);
//       doc.text(`Average Sale: ${formatCurrency(totalSales / salesData.length)}`, 14, 62);
//       doc.setFontSize(14);
//       doc.text("Employee Performance", 14, 75);

//       autoTable(doc, {
//         startY: 80,
//         head: [["Employee ID", "Total Sales", "Transactions", "Average Sale", "% of Total"]],
//         body: Object.keys(employeeStats).map(id => [
//           id,
//           formatCurrency(employeeStats[id].totalSales),
//           employeeStats[id].transactions,
//           formatCurrency(employeeStats[id].avgSale),
//           `${((employeeStats[id].totalSales / totalSales) * 100).toFixed(1)}%`,
//         ]),
//         theme: "grid",
//         headStyles: { fillColor: [37, 99, 235] },
//       });

//       const pdfBlob = doc.output("blob");
//       const fileData = {
//         files: [
//           new File([pdfBlob], `sales_report_${startDate}_to_${endDate}.pdf`, { type: "application/pdf" }),
//         ],
//         title: "Employee Sales Report",
//         text: `Sales Report from ${startDate} to ${endDate}`,
//       };
//       if (navigator.canShare && navigator.canShare(fileData)) {
//         await navigator.share(fileData);
//       } else {
//         alert("Sharing PDFs is not supported on this browser or device.");
//       }
//     } catch (error) {
//       console.error("Error sharing PDF:", error);
//       alert("Failed to share PDF: " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-5 font-sans text-gray-800">
//       <div className="max-w-6xl mx-auto">
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-900">Employee Sales Dashboard</h1>
//               <p className="text-sm text-gray-500 mt-1">Track and analyze employee sales performance with detailed insights</p>
//             </div>
//             <div className="flex gap-2 mt-4 md:mt-0">
//               <button
//                 onClick={handleShare}
//                 disabled={loading}
//                 className={`px-4 py-2 rounded text-sm font-medium text-white ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
//               >
//                 Share Report
//               </button>
//               <div className="relative" id="export-dropdown">
//                 <button
//                   onClick={() => setShowExportMenu(!showExportMenu)}
//                   disabled={loading}
//                   className={`flex items-center gap-2 px-4 py-2 rounded text-sm font-medium text-white ${loading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"}`}
//                 >
//                   Export
//                   <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <polyline points="6 9 12 15 18 9" />
//                   </svg>
//                 </button>
//                 {showExportMenu && (
//                   <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-40 z-10">
//                     <div onClick={() => { exportCSV(); setShowExportMenu(false); }} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Export as CSV</div>
//                     <div onClick={() => { exportExcel(); setShowExportMenu(false); }} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Export as Excel</div>
//                     <div onClick={() => { exportPDF(); setShowExportMenu(false); }} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Export as PDF</div>
//                     <div onClick={() => { shareAsPDF(); setShowExportMenu(false); }} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Share as PDF</div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className={`flex ${isDesktop ? "flex-row items-end gap-4" : "flex-col gap-4"} mb-2`}>
//             <div className="flex-1">
//               <label className="block text-sm font-medium text-gray-600 mb-1">Start Date</label>
//               <input
//                 type="date"
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block text-sm font-medium text-gray-600 mb-1">End Date</label>
//               <input
//                 type="date"
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
//               />
//             </div>
//             <button
//               onClick={() => fetchSalesData(startDate, endDate)}
//               disabled={loading || !startDate || !endDate}
//               className={`px-4 py-2 rounded text-sm font-medium text-white ${loading || !startDate || !endDate ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
//             >
//               {loading ? "Loading..." : "Update Report"}
//             </button>
//           </div>

//           {error && <div className="bg-red-100 text-red-800 p-4 rounded mb-6">{error}</div>}

//           {!loading && salesData.length > 0 && (
//             <>
//               <div className={`grid gap-6 mb-6 ${isDesktop ? "grid-cols-3" : "grid-cols-1"}`}>
//                 <div className="bg-white p-5 rounded-lg shadow">
//                   <p className="text-sm text-gray-600 font-medium">Total Sales</p>
//                   <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalSales)}</p>
//                 </div>
//                 <div className="bg-white p-5 rounded-lg shadow">
//                   <p className="text-sm text-gray-600 font-medium">Total Transactions</p>
//                   <p className="text-2xl font-bold text-gray-900">{salesData.length}</p>
//                 </div>
//                 <div className="bg-white p-5 rounded-lg shadow">
//                   <p className="text-sm text-gray-600 font-medium">Average Sale</p>
//                   <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalSales / salesData.length)}</p>
//                 </div>
//               </div>

//               <div className="flex border-b border-gray-200">
//                 {["table", "bar", "pie", "line", "scatter"].map(tab => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`uppercase px-6 py-4 text-sm font-medium transition-colors ${activeTab === tab ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-gray-800 hover:border-b-2 hover:border-gray-300"}`}
//                   >
//                     {tab === "table" ? "Table View" : tab === "bar" ? "Bar Chart" : tab === "pie" ? "Pie Chart" : tab === "line" ? "Trend" : "Performance"}
//                   </button>
//                 ))}
//               </div>

//               <div className="mt-5">
//                 {activeTab === "table" && (
//                   <div className="overflow-x-auto">
//                     <table className="w-full text-sm text-left border-collapse">
//                       <thead className="bg-gray-50">
//                         <tr>
//                           <th className="p-3 text-gray-600 font-medium uppercase tracking-wider">Employee ID</th>
//                           <th className="p-3 text-gray-600 font-medium uppercase tracking-wider">Sale Date</th>
//                           <th className="p-3 text-gray-600 font-medium uppercase tracking-wider">Total Amount</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {salesData.map((sale, index) => (
//                           <tr key={index} className="border-b border-gray-200">
//                             <td className="p-4 font-medium text-gray-900">{sale.userId}</td>
//                             <td className="p-4 text-gray-700">{new Date(sale.date).toLocaleString()}</td>
//                             <td className="p-4 text-gray-700">{formatCurrency(sale.total_amount)}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 )}
//                 {activeTab === "bar" && (
//                   <div className="h-[400px] p-4">
//                     <Bar ref={barChartRef} data={barChartData} options={barChartOptions} />
//                   </div>
//                 )}
//                 {activeTab === "pie" && (
//                   <div className="h-[400px] p-4">
//                     <Pie ref={pieChartRef} data={pieChartData} options={pieChartOptions} />
//                   </div>
//                 )}
//                 {activeTab === "line" && (
//                   <div className="h-[400px] p-4">
//                     <Line ref={lineChartRef} data={lineChartData} options={lineChartOptions} />
//                   </div>
//                 )}
//                 {activeTab === "scatter" && (
//                   <div className="h-[400px] p-4">
//                     <Scatter ref={scatterChartRef} data={scatterChartData} options={scatterChartOptions} />
//                   </div>
//                 )}
//               </div>
//             </>
//           )}

//           {!loading && salesData.length === 0 && (
//             <div className="bg-white rounded-lg shadow-md p-12 text-center">
//               <h2 className="text-lg font-medium text-gray-600">No sales data available</h2>
//               <p className="text-sm text-gray-400 mt-2">Try adjusting your date range or verify that sales data exists for the selected period.</p>
//             </div>
//           )}

//           {loading && <div className="text-center py-12 text-gray-600">Loading sales data...</div>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Employee;  

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Bar, Pie, Line, Scatter } from "react-chartjs-2";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { motion, AnimatePresence } from "framer-motion";
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

const API_URL = "http://localhost:5010/api";

const fetchSalesData = async (startDate, endDate) => {
  try {
    const storeId = localStorage.getItem("storeId") || "STORE-1737889146-4514";
    const response = await axios.get(`${API_URL}/daily-sales-employee`, {
      params: { startDate, endDate },
      headers: { storeId },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch sales data");
  }
};

const Employee = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("table");
  const [totalSales, setTotalSales] = useState(0);
  const [employeeStats, setEmployeeStats] = useState({});
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [chartAnimation, setChartAnimation] = useState(false);

  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const lineChartRef = useRef(null);
  const scatterChartRef = useRef(null);

  // Set default date range to last 30 days
  useEffect(() => {
    const today = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);
    setEndDate(today.toISOString().split("T")[0]);
    setStartDate(thirtyDaysAgo.toISOString().split("T")[0]);
  }, []);

  // Fetch data when dates change
  useEffect(() => {
    if (startDate && endDate) {
      fetchSalesData(startDate, endDate)
        .then(data => {
          setSalesData(data);
          // Trigger chart animation when new data is loaded
          setChartAnimation(true);
          setTimeout(() => setChartAnimation(false), 1000);
        })
        .catch(err => setError(err.message));
    }
  }, [startDate, endDate]);

  // Process data for stats and charts
  useEffect(() => {
    if (salesData.length > 0) {
      const total = salesData.reduce((sum, sale) => sum + sale.total_amount, 0);
      setTotalSales(total);

      const stats = {};
      salesData.forEach(sale => {
        const employeeId = sale.userId;
        if (!stats[employeeId]) {
          stats[employeeId] = { totalSales: 0, transactions: 0, avgSale: 0 };
        }
        stats[employeeId].totalSales += sale.total_amount;
        stats[employeeId].transactions += 1;
      });
      Object.keys(stats).forEach(id => {
        stats[id].avgSale = stats[id].totalSales / stats[id].transactions;
      });
      setEmployeeStats(stats);
    }
  }, [salesData]);

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Click outside to close export menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showExportMenu && !event.target.closest("#export-dropdown")) {
        setShowExportMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showExportMenu]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
  };

  // Chart Data with gradient backgrounds
  const getGradient = (ctx, chartArea, startColor, endColor) => {
    if (!ctx || !chartArea) return startColor;
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, startColor);
    gradient.addColorStop(1, endColor);
    return gradient;
  };

  const barChartData = {
    labels: Object.keys(employeeStats).map(id => `Employee ${id}`),
    datasets: [
      {
        label: "Total Sales",
        data: Object.values(employeeStats).map(stat => stat.totalSales),
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          if (!chartArea) return 'rgba(59, 130, 246, 0.8)';
          return getGradient(ctx, chartArea, 'rgba(59, 130, 246, 0.8)', 'rgba(37, 99, 235, 0.9)');
        },
        borderWidth: 0,
        borderRadius: 6,
        hoverBorderWidth: 2,
        hoverBorderColor: 'rgba(37, 99, 235, 1)',
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeOutQuart',
    },
    plugins: {
      legend: { position: "top", labels: { font: { family: "'Inter', sans-serif" } } },
      title: { 
        display: true, 
        text: "Sales by Employee", 
        font: { size: 16, weight: "bold", family: "'Inter', sans-serif" },
        padding: { bottom: 20 }
      },
      tooltip: { 
        callbacks: { label: (context) => `Sales: ${formatCurrency(context.raw)}` },
        backgroundColor: 'rgba(17, 24, 39, 0.8)',
        titleFont: { family: "'Inter', sans-serif" },
        bodyFont: { family: "'Inter', sans-serif" },
        padding: 12,
        cornerRadius: 8
      },
    },
    scales: { 
      y: { 
        beginAtZero: true, 
        ticks: { 
          callback: (value) => formatCurrency(value),
          font: { family: "'Inter', sans-serif" }
        },
        grid: {
          color: 'rgba(226, 232, 240, 0.6)'
        }
      },
      x: {
        ticks: {
          font: { family: "'Inter', sans-serif" }
        },
        grid: {
          display: false
        }
      }
    },
  };

  // Custom colors for pie chart
  const pieColors = [
    { start: 'rgba(37, 99, 235, 0.9)', end: 'rgba(59, 130, 246, 0.9)' },
    { start: 'rgba(16, 185, 129, 0.9)', end: 'rgba(5, 150, 105, 0.9)' },
    { start: 'rgba(245, 158, 11, 0.9)', end: 'rgba(217, 119, 6, 0.9)' },
    { start: 'rgba(239, 68, 68, 0.9)', end: 'rgba(220, 38, 38, 0.9)' },
    { start: 'rgba(139, 92, 246, 0.9)', end: 'rgba(124, 58, 237, 0.9)' },
    { start: 'rgba(20, 184, 166, 0.9)', end: 'rgba(13, 148, 136, 0.9)' },
  ];

  const pieChartData = {
    labels: Object.keys(employeeStats).map(id => `Employee ${id}`),
    datasets: [
      {
        data: Object.values(employeeStats).map(stat => stat.totalSales),
        backgroundColor: pieColors.map(color => color.start),
        hoverBackgroundColor: pieColors.map(color => color.end),
        borderWidth: 3,
        borderColor: 'rgba(255, 255, 255, 0.8)',
        hoverBorderColor: 'white',
        hoverOffset: 10,
      },
    ],
  };

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 2000,
      easing: 'easeOutQuart',
    },
    plugins: {
      legend: { 
        position: "right",
        labels: {
          font: { family: "'Inter', sans-serif" },
          padding: 16,
          usePointStyle: true,
          pointStyleWidth: 10
        }
      },
      title: { 
        display: true, 
        text: "Sales Distribution", 
        font: { size: 16, weight: "bold", family: "'Inter', sans-serif" },
        padding: { bottom: 20 }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${formatCurrency(value)} (${percentage}%)`;
          },
        },
        backgroundColor: 'rgba(17, 24, 39, 0.8)',
        titleFont: { family: "'Inter', sans-serif" },
        bodyFont: { family: "'Inter', sans-serif" },
        padding: 12,
        cornerRadius: 8
      },
    },
  };

  const prepareDateData = () => {
    const dateMap = {};
    salesData.forEach(sale => {
      const date = sale.date.split(" ")[0];
      dateMap[date] = (dateMap[date] || 0) + sale.total_amount;
    });
    const sortedDates = Object.keys(dateMap).sort();
    return {
      labels: sortedDates.map(date => new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" })),
      values: sortedDates.map(date => dateMap[date]),
    };
  };

  const dateData = salesData.length > 0 ? prepareDateData() : { labels: [], values: [] };

  const lineChartData = {
    labels: dateData.labels,
    datasets: [
      {
        label: "Daily Sales",
        data: dateData.values,
        borderColor: "rgba(16, 185, 129, 1)",
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          if (!chartArea) return 'rgba(16, 185, 129, 0.1)';
          return getGradient(ctx, chartArea, 'rgba(16, 185, 129, 0.01)', 'rgba(16, 185, 129, 0.2)');
        },
        borderWidth: 3,
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: "white",
        pointBorderColor: "rgba(16, 185, 129, 1)",
        pointBorderWidth: 2,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "rgba(16, 185, 129, 1)",
        pointHoverBorderColor: "white",
        pointHoverBorderWidth: 2,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeOutQuart',
    },
    plugins: {
      legend: { 
        position: "top",
        labels: { font: { family: "'Inter', sans-serif" } }
      },
      title: { 
        display: true, 
        text: "Sales Trend", 
        font: { size: 16, weight: "bold", family: "'Inter', sans-serif" },
        padding: { bottom: 20 }
      },
      tooltip: { 
        callbacks: { label: (context) => `Sales: ${formatCurrency(context.raw)}` },
        backgroundColor: 'rgba(17, 24, 39, 0.8)',
        titleFont: { family: "'Inter', sans-serif" },
        bodyFont: { family: "'Inter', sans-serif" },
        padding: 12,
        cornerRadius: 8
      },
    },
    scales: { 
      y: { 
        beginAtZero: true, 
        ticks: { 
          callback: (value) => formatCurrency(value),
          font: { family: "'Inter', sans-serif" }
        },
        grid: {
          color: 'rgba(226, 232, 240, 0.6)'
        }
      },
      x: {
        ticks: {
          font: { family: "'Inter', sans-serif" }
        },
        grid: {
          display: false
        }
      }
    },
  };

  const scatterChartData = {
    datasets: [
      {
        label: "Employee Performance",
        data: Object.keys(employeeStats).map(id => ({
          x: employeeStats[id].transactions,
          y: employeeStats[id].avgSale,
          id: id,
        })),
        backgroundColor: "rgba(139, 92, 246, 0.8)",
        borderColor: "rgba(124, 58, 237, 1)",
        borderWidth: 2,
        pointRadius: 10,
        pointHoverRadius: 14,
        pointHoverBackgroundColor: "rgba(124, 58, 237, 1)",
        pointHoverBorderColor: "white",
        pointHoverBorderWidth: 2,
      },
    ],
  };

  const scatterChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeOutQuart',
    },
    plugins: {
      legend: { 
        position: "top",
        labels: { font: { family: "'Inter', sans-serif" } }
      },
      title: { 
        display: true, 
        text: "Employee Performance Analysis", 
        font: { size: 16, weight: "bold", family: "'Inter', sans-serif" },
        padding: { bottom: 20 }
      },
      tooltip: {
        callbacks: {
          label: (context) => [
            `Employee ID: ${context.raw.id}`,
            `Transactions: ${context.raw.x}`,
            `Avg Sale: ${formatCurrency(context.raw.y)}`,
          ],
        },
        backgroundColor: 'rgba(17, 24, 39, 0.8)',
        titleFont: { family: "'Inter', sans-serif" },
        bodyFont: { family: "'Inter', sans-serif" },
        padding: 12,
        cornerRadius: 8
      },
    },
    scales: {
      x: { 
        title: { 
          display: true, 
          text: "Number of Transactions", 
          font: { weight: "bold", family: "'Inter', sans-serif" } 
        }, 
        beginAtZero: true,
        ticks: {
          font: { family: "'Inter', sans-serif" }
        },
        grid: {
          color: 'rgba(226, 232, 240, 0.6)'
        }
      },
      y: {
        title: { 
          display: true, 
          text: "Average Sale Amount", 
          font: { weight: "bold", family: "'Inter', sans-serif" } 
        },
        beginAtZero: true,
        ticks: { 
          callback: (value) => formatCurrency(value),
          font: { family: "'Inter', sans-serif" }
        },
        grid: {
          color: 'rgba(226, 232, 240, 0.6)'
        }
      },
    },
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Employee Sales Report",
        text: `Sales Report from ${startDate} to ${endDate} - Total: ${formatCurrency(totalSales)}`,
        url: window.location.href,
      })
        .then(() => console.log("Share successful"))
        .catch(error => console.error("Error sharing:", error));
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  const exportCSV = () => {
    if (salesData.length === 0) return;
    const headers = ["Employee ID", "Sale Date", "Total Amount"];
    const csvData = [
      headers.join(","),
      ...salesData.map(sale => `${sale.userId},${new Date(sale.date).toLocaleString()},${sale.total_amount}`),
    ].join("\n");
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", `sales_${startDate}_to_${endDate}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const exportExcel = () => {
    if (salesData.length === 0) return;
    const workbook = XLSX.utils.book_new();
    const salesWorksheetData = salesData.map(sale => ({
      "Employee ID": sale.userId,
      "Sale Date": new Date(sale.date).toLocaleString(),
      "Total Amount": sale.total_amount,
    }));
    const salesWorksheet = XLSX.utils.json_to_sheet(salesWorksheetData);
    XLSX.utils.book_append_sheet(workbook, salesWorksheet, "Sales Data");
    const summaryData = Object.keys(employeeStats).map(id => ({
      "Employee ID": id,
      "Total Sales": employeeStats[id].totalSales,
      "Transactions": employeeStats[id].transactions,
      "Average Sale": employeeStats[id].avgSale,
      "Percentage of Total": `${((employeeStats[id].totalSales / totalSales) * 100).toFixed(1)}%`,
    }));
    const summaryWorksheet = XLSX.utils.json_to_sheet(summaryData);
    XLSX.utils.book_append_sheet(workbook, summaryWorksheet, "Employee Summary");
    const overviewData = [
      { Metric: "Report Period", Value: `${startDate} to ${endDate}` },
      { Metric: "Total Sales", Value: totalSales },
      { Metric: "Total Transactions", Value: salesData.length },
      { Metric: "Average Sale", Value: totalSales / salesData.length },
    ];
    const overviewWorksheet = XLSX.utils.json_to_sheet(overviewData);
    XLSX.utils.book_append_sheet(workbook, overviewWorksheet, "Overview");
    XLSX.writeFile(workbook, `employee_sales_report_${startDate}_to_${endDate}.xlsx`);
  };

  const exportPDF = () => {
    if (salesData.length === 0) return;
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Employee Sales Report", 14, 20);
    doc.setFontSize(12);
    doc.text(`Report Period: ${startDate} to ${endDate}`, 14, 30);
    doc.setFontSize(14);
    doc.text("Summary", 14, 40);
    doc.setFontSize(10);
    doc.text(`Total Sales: ${formatCurrency(totalSales)}`, 14, 50);
    doc.text(`Total Transactions: ${salesData.length}`, 14, 56);
    doc.text(`Average Sale: ${formatCurrency(totalSales / salesData.length)}`, 14, 62);
    doc.setFontSize(14);
    doc.text("Employee Performance", 14, 75);

    // Use autoTable explicitly
    autoTable(doc, {
      startY: 80,
      head: [["Employee ID", "Total Sales", "Transactions", "Average Sale", "% of Total"]],
      body: Object.keys(employeeStats).map(id => [
        id,
        formatCurrency(employeeStats[id].totalSales),
        employeeStats[id].transactions,
        formatCurrency(employeeStats[id].avgSale),
        `${((employeeStats[id].totalSales / totalSales) * 100).toFixed(1)}%`,
      ]),
      theme: "grid",
      headStyles: { fillColor: [37, 99, 235] },
    });

    const salesTableData = salesData.slice(0, 20).map(sale => [
      sale.userId,
      new Date(sale.date).toLocaleString(),
      formatCurrency(sale.total_amount),
    ]);
    const salesTableY = doc.lastAutoTable.finalY + 15;
    doc.setFontSize(14);
    doc.text("Sales Data (First 20 Entries)", 14, salesTableY);

    autoTable(doc, {
      startY: salesTableY + 5,
      head: [["Employee ID", "Sale Date", "Amount"]],
      body: salesTableData,
      theme: "grid",
      headStyles: { fillColor: [37, 99, 235] },
    });

    if (salesData.length > 20) {
      const noteY = doc.lastAutoTable.finalY + 10;
      doc.setFontSize(10);
      doc.setTextColor(100);
      doc.text(`Note: Showing 20 of ${salesData.length} total records.`, 14, noteY);
    }

    if (activeTab !== "table") {
      doc.addPage();
      doc.setFontSize(14);
      let chartTitle, chartCanvas;
      if (activeTab === "bar" && barChartRef.current) {
        chartTitle = "Sales by Employee";
        chartCanvas = barChartRef.current.canvas;
      } else if (activeTab === "pie" && pieChartRef.current) {
        chartTitle = "Sales Distribution";
        chartCanvas = pieChartRef.current.canvas;
      } else if (activeTab === "line" && lineChartRef.current) {
        chartTitle = "Sales Trend";
        chartCanvas = lineChartRef.current.canvas;
      } else if (activeTab === "scatter" && scatterChartRef.current) {
        chartTitle = "Employee Performance Analysis";
        chartCanvas = scatterChartRef.current.canvas;
      }
      if (chartCanvas) {
        doc.text(chartTitle, 14, 20);
        const imgData = chartCanvas.toDataURL("image/png");
        doc.addImage(imgData, "PNG", 14, 30, 180, 120);
      }
    }

    doc.save(`sales_report_${startDate}_to_${endDate}.pdf`);
  };

  const shareAsPDF = async () => {
    if (salesData.length === 0) return;
    try {
      setLoading(true);
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.text("Employee Sales Report", 14, 20);
      doc.setFontSize(12);
      doc.text(`Report Period: ${startDate} to ${endDate}`, 14, 30);
      doc.setFontSize(14);
      doc.text("Summary", 14, 40);
      doc.setFontSize(10);
      doc.text(`Total Sales: ${formatCurrency(totalSales)}`, 14, 50);
      doc.text(`Total Transactions: ${salesData.length}`, 14, 56);
      doc.text(`Average Sale: ${formatCurrency(totalSales / salesData.length)}`, 14, 62);
      doc.setFontSize(14);
      doc.text("Employee Performance", 14, 75);

      autoTable(doc, {
        startY: 80,
        head: [["Employee ID", "Total Sales", "Transactions", "Average Sale", "% of Total"]],
        body: Object.keys(employeeStats).map(id => [
          id,
          formatCurrency(employeeStats[id].totalSales),
          employeeStats[id].transactions,
          formatCurrency(employeeStats[id].avgSale),
          `${((employeeStats[id].totalSales / totalSales) * 100).toFixed(1)}%`,
        ]),
        theme: "grid",
        headStyles: { fillColor: [37, 99, 235] },
      });

      const pdfBlob = doc.output("blob");
      const fileData = {
        files: [
          new File([pdfBlob], `sales_report_${startDate}_to_${endDate}.pdf`, { type: "application/pdf" }),
        ],
        title: "Employee Sales Report",
        text: `Sales Report from ${startDate} to ${endDate}`,
      };
      if (navigator.canShare && navigator.canShare(fileData)) {
        await navigator.share(fileData);
      } else {
        alert("Sharing PDFs is not supported on this browser or device.");
      }
    } catch (error) {
      console.error("Error sharing PDF:", error);
      alert("Failed to share PDF: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Animation variants for components
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-5 font-sans text-gray-800" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <motion.div variants={slideUp}>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Employee Sales Dashboard</h1>
              <p className="text-sm text-gray-500 mt-1">Track and analyze employee sales performance with detailed insights</p>
            </motion.div>
            <motion.div 
              variants={staggerChildren}
              className="flex gap-3 mt-4 md:mt-0"
            >
              <motion.button
                variants={slideUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleShare}
                disabled={loading}
                className={`px-4 py-2 rounded-lg text-sm font-medium text-white shadow-sm transition-all duration-300 ${
                  loading 
                    ? "bg-blue-400 cursor-not-allowed" 
                    : "bg-blue-600 hover:bg-blue-700 hover:shadow"
                }`}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <polyline points="16 6 12 2 8 6"></polyline>
                    <line x1="12" y1="2" x2="12" y2="15"></line>
                  </svg>
                  Share Report
                </div>
              </motion.button>
              <div className="relative" id="export-dropdown">
                <motion.button
                  variants={slideUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowExportMenu(!showExportMenu)}
                  disabled={loading}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white shadow-sm transition-all duration-300 ${
                    loading 
                      ? "bg-indigo-400 cursor-not-allowed" 
                      : "bg-indigo-600 hover:bg-indigo-700 hover:shadow"
                  }`}
                >
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Export
                </motion.button>
                <AnimatePresence>
                  {showExportMenu && (
                    <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48 z-10 overflow-hidden"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => { exportCSV(); setShowExportMenu(false); }} 
                      className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors"
                    >
                      Export as CSV
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => { exportExcel(); setShowExportMenu(false); }} 
                      className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors"
                    >
                      Export as Excel
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => { exportPDF(); setShowExportMenu(false); }} 
                      className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors"
                    >
                      Export as PDF
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => { shareAsPDF(); setShowExportMenu(false); }} 
                      className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors"
                    >
                      Share as PDF
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Date Range Picker */}
        <motion.div 
          variants={slideUp}
          className={`flex ${isDesktop ? "flex-row items-end gap-4" : "flex-col gap-4"} mb-6`}
        >
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-2.5 border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full p-2.5 border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => fetchSalesData(startDate, endDate)}
            disabled={loading || !startDate || !endDate}
            className={`px-4 py-2.5 rounded-lg text-sm font-medium text-white shadow-sm transition-all duration-300 ${
              loading || !startDate || !endDate 
                ? "bg-green-400 cursor-not-allowed" 
                : "bg-green-600 hover:bg-green-700 hover:shadow"
            }`}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading...
              </div>
            ) : (
              "Update Report"
            )}
          </motion.button>
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-100 text-red-800 p-4 rounded-lg mb-6"
          >
            {error}
          </motion.div>
        )}

        {/* Data Visualization */}
        {!loading && salesData.length > 0 && (
          <>
            {/* Summary Cards */}
            <motion.div 
              variants={staggerChildren}
              className={`grid gap-6 mb-6 ${isDesktop ? "grid-cols-3" : "grid-cols-1"}`}
            >
              <motion.div 
                variants={slideUp}
                className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <p className="text-sm text-gray-600 font-medium">Total Sales</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{formatCurrency(totalSales)}</p>
              </motion.div>
              <motion.div 
                variants={slideUp}
                className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <p className="text-sm text-gray-600 font-medium">Total Transactions</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{salesData.length}</p>
              </motion.div>
              <motion.div 
                variants={slideUp}
                className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <p className="text-sm text-gray-600 font-medium">Average Sale</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{formatCurrency(totalSales / salesData.length)}</p>
              </motion.div>
            </motion.div>

            {/* Tabs */}
            <motion.div 
              variants={slideUp}
              className="flex border-b border-gray-200"
            >
              {["table", "bar", "pie", "line", "scatter"].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`uppercase px-6 py-4 text-sm font-medium transition-colors ${
                    activeTab === tab 
                      ? "text-blue-600 border-b-2 border-blue-600" 
                      : "text-gray-600 hover:text-gray-800 hover:border-b-2 hover:border-gray-300"
                  }`}
                >
                  {tab === "table" ? "Table View" : tab === "bar" ? "Bar Chart" : tab === "pie" ? "Pie Chart" : tab === "line" ? "Trend" : "Performance"}
                </button>
              ))}
            </motion.div>

            {/* Tab Content */}
            <motion.div 
              variants={slideUp}
              className="mt-6"
            >
              {activeTab === "table" && (
                <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-100">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-3 text-gray-600 font-medium uppercase tracking-wider">Employee ID</th>
                        <th className="p-3 text-gray-600 font-medium uppercase tracking-wider">Sale Date</th>
                        <th className="p-3 text-gray-600 font-medium uppercase tracking-wider">Total Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {salesData.map((sale, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="p-4 font-medium text-gray-900">{sale.userId}</td>
                          <td className="p-4 text-gray-700">{new Date(sale.date).toLocaleString()}</td>
                          <td className="p-4 text-gray-700">{formatCurrency(sale.total_amount)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {activeTab === "bar" && (
                <div className="h-[400px] p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <Bar ref={barChartRef} data={barChartData} options={barChartOptions} />
                </div>
              )}
              {activeTab === "pie" && (
                <div className="h-[400px] p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <Pie ref={pieChartRef} data={pieChartData} options={pieChartOptions} />
                </div>
              )}
              {activeTab === "line" && (
                <div className="h-[400px] p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <Line ref={lineChartRef} data={lineChartData} options={lineChartOptions} />
                </div>
              )}
              {activeTab === "scatter" && (
                <div className="h-[400px] p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <Scatter ref={scatterChartRef} data={scatterChartData} options={scatterChartOptions} />
                </div>
              )}
            </motion.div>
          </>
        )}

        {/* Empty State */}
        {!loading && salesData.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm p-12 text-center border border-gray-100"
          >
            <h2 className="text-lg font-medium text-gray-600">No sales data available</h2>
            <p className="text-sm text-gray-400 mt-2">Try adjusting your date range or verify that sales data exists for the selected period.</p>
          </motion.div>
        )}

        {/* Loading State */}
        {loading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 text-gray-600"
          >
            Loading sales data...
          </motion.div>
        )}
      </motion.div>
    </div>
  </div>
);
};

export default Employee;