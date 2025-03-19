// // // // // import React, { useEffect, useState } from 'react';
// // // // // import { Bar, Line } from 'react-chartjs-2';
// // // // // import axios from 'axios';
// // // // // // import FinancialAnalytics from "./FinancialAnalytics";

// // // // // const FinancialAnalytics= () => {
// // // // //   const storeId = localStorage.getItem('storeID');

// // // // //   // State for financial data
// // // // //   const [revenueExpenses, setRevenueExpenses] = useState({ revenue: 0, expenses: 0, profit: 0 });
// // // // //   const [expenseBreakdown, setExpenseBreakdown] = useState([]);
// // // // //   const [netProfit, setNetProfit] = useState({ net_profit: 0, gross_margin: 0 });
// // // // //   const [cashFlow, setCashFlow] = useState({});

// // // // //   // Fetch Revenue vs Expenses
// // // // //   const fetchRevenueExpenses = async () => {
// // // // //     try {
// // // // //       const response = await axios.get('http://localhost:5023/financial/revenue-expenses', {
// // // // //         headers: { storeId },
// // // // //       });
// // // // //       setRevenueExpenses(response.data);
// // // // //     } catch (error) {
// // // // //       console.error('Error fetching revenue vs expenses:', error);
// // // // //     }
// // // // //   };

// // // // //   // Fetch Expense Breakdown
// // // // //   const fetchExpenseBreakdown = async () => {
// // // // //     try {
// // // // //       const response = await axios.get('http://localhost:5023/financial/expense-breakdown', {
// // // // //         headers: { storeId },
// // // // //       });
// // // // //       setExpenseBreakdown(response.data);
// // // // //     } catch (error) {
// // // // //       console.error('Error fetching expense breakdown:', error);
// // // // //     }
// // // // //   };

// // // // //   // Fetch Net Profit & Gross Margin
// // // // //   const fetchNetProfit = async () => {
// // // // //     try {
// // // // //       const response = await axios.get('http://localhost:5023/financial/net-profit', {
// // // // //         headers: { storeId },
// // // // //       });
// // // // //       setNetProfit(response.data);
// // // // //     } catch (error) {
// // // // //       console.error('Error fetching net profit:', error);
// // // // //     }
// // // // //   };

// // // // //   // Fetch Cash Flow
// // // // //   const fetchCashFlow = async () => {
// // // // //     try {
// // // // //       const response = await axios.get('http://localhost:5023/financial/cash-flow', {
// // // // //         headers: { storeId },
// // // // //       });
// // // // //       setCashFlow(response.data);
// // // // //     } catch (error) {
// // // // //       console.error('Error fetching cash flow:', error);
// // // // //     }
// // // // //   };

// // // // //   // Fetch all data on component mount
// // // // //   useEffect(() => {
// // // // //     fetchRevenueExpenses();
// // // // //     fetchExpenseBreakdown();
// // // // //     fetchNetProfit();
// // // // //     fetchCashFlow();
// // // // //   }, [storeId]);

// // // // //   return (
// // // // //     <div className="p-6 bg-gray-100 min-h-screen">
// // // // //       <h1 className="text-2xl font-bold mb-6">Financial Analytics Dashboard</h1>
// // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //         {/* Revenue vs Expenses Chart */}
// // // // //         <div className="p-4 bg-white shadow rounded-lg">
// // // // //           <h2 className="text-lg font-semibold">Revenue vs Expenses</h2>
// // // // //           <Bar
// // // // //             data={{
// // // // //               labels: ['Revenue', 'Expenses', 'Profit'],
// // // // //               datasets: [
// // // // //                 {
// // // // //                   label: 'Amount',
// // // // //                   data: [revenueExpenses.revenue, revenueExpenses.expenses, revenueExpenses.profit],
// // // // //                   backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(153, 102, 255, 0.2)'],
// // // // //                   borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(153, 102, 255, 1)'],
// // // // //                   borderWidth: 1,
// // // // //                 },
// // // // //               ],
// // // // //             }}
// // // // //           />
// // // // //         </div>

// // // // //         {/* Expense Breakdown */}
// // // // //         <div className="p-4 bg-white shadow rounded-lg">
// // // // //           <h2 className="text-lg font-semibold">Expense Breakdown</h2>
// // // // //           <ul>
// // // // //             {expenseBreakdown.map((expense, index) => (
// // // // //               <li key={index} className="flex justify-between py-2">
// // // // //                 <span>{expense.category}</span>
// // // // //                 <span>${expense.amount}</span>
// // // // //               </li>
// // // // //             ))}
// // // // //           </ul>
// // // // //         </div>

// // // // //         {/* Net Profit & Gross Margin */}
// // // // //         <div className="p-4 bg-white shadow rounded-lg">
// // // // //           <h2 className="text-lg font-semibold">Net Profit & Gross Margin</h2>
// // // // //           <div className="mt-2">
// // // // //             <p>Net Profit: ${netProfit.net_profit}</p>
// // // // //             <p>Gross Margin: {netProfit.gross_margin}%</p>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Cash Flow Analysis */}
// // // // //         <div className="p-4 bg-white shadow rounded-lg">
// // // // //           <h2 className="text-lg font-semibold">Cash Flow Analysis</h2>
// // // // //           <Line
// // // // //             data={{
// // // // //               labels: Object.keys(cashFlow),
// // // // //               datasets: [
// // // // //                 {
// // // // //                   label: 'Revenue',
// // // // //                   data: Object.values(cashFlow).map((item) => item.revenue),
// // // // //                   borderColor: 'rgba(75, 192, 192, 1)',
// // // // //                   fill: false,
// // // // //                 },
// // // // //                 {
// // // // //                   label: 'Expenses',
// // // // //                   data: Object.values(cashFlow).map((item) => item.expenses),
// // // // //                   borderColor: 'rgba(255, 99, 132, 1)',
// // // // //                   fill: false,
// // // // //                 },
// // // // //               ],
// // // // //             }}
// // // // //           />
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default FinancialAnalytics;

// // // // import React, { useEffect, useState } from "react";
// // // // import { Line, Bar, Pie, Scatter } from "react-chartjs-2";
// // // // import {
// // // //   Chart as ChartJS,
// // // //   CategoryScale,
// // // //   LinearScale,
// // // //   PointElement,
// // // //   LineElement,
// // // //   BarElement,
// // // //   ArcElement,
// // // //   Title,
// // // //   Tooltip,
// // // //   Legend,
// // // // } from "chart.js";
// // // // import { Download, Share2, BarChart2, LineChart, PieChart } from "lucide-react";
// // // // import html2canvas from "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
// // // // import jsPDF from "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";

// // // // // Register Chart.js components
// // // // ChartJS.register(
// // // //   CategoryScale,
// // // //   LinearScale,
// // // //   PointElement,
// // // //   LineElement,
// // // //   BarElement,
// // // //   ArcElement,
// // // //   Title,
// // // //   Tooltip,
// // // //   Legend
// // // // );

// // // // const FinancialAnalytics = ({ storeId = "default_store" }) => { // Default storeId prop
// // // //   const [analytics, setAnalytics] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);
// // // //   const [chartType, setChartType] = useState("line");
// // // //   const [exporting, setExporting] = useState(false);

// // // //   useEffect(() => {
// // // //     const fetchFinancialData = async () => {
// // // //       try {
// // // //         setLoading(true);

// // // //         // Fetch sales data (Revenue)
// // // //         const salesResponse = await fetch(`http://127.0.0.1:5010/api/daily-sales1?storeId=${storeId}`);
// // // //         if (!salesResponse.ok) throw new Error("Failed to fetch sales data");
// // // //         const salesData = await salesResponse.json();

// // // //         // Fetch restock history (Product Costs)
// // // //         const restockResponse = await fetch(`http://127.0.0.1:5000/restock-history?storeId=${storeId}`);
// // // //         if (!restockResponse.ok) throw new Error("Failed to fetch restock history");
// // // //         const restockData = await restockResponse.json();

// // // //         // Fetch general expenses
// // // //         const expensesResponse = await fetch(`http://127.0.0.1:5022/api/expenses?storeId=${storeId}`);
// // // //         if (!expensesResponse.ok) throw new Error("Failed to fetch expenses");
// // // //         const expensesData = await expensesResponse.json();

// // // //         // Fetch users (for employee salaries, assuming salary field exists)
// // // //         const usersResponse = await fetch(`http://127.0.0.1:5010/api/users?storeId=${storeId}`);
// // // //         if (!usersResponse.ok) throw new Error("Failed to fetch users");
// // // //         const usersData = await usersResponse.json();

// // // //         // Process data
// // // //         const dailyAnalytics = processFinancialData(salesData, restockData, expensesData.expenses, usersData);
// // // //         setAnalytics(dailyAnalytics);
// // // //         setLoading(false);
// // // //       } catch (err) {
// // // //         console.error("Error fetching data:", err);
// // // //         setError(err.message);
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchFinancialData();
// // // //   }, [storeId]);

// // // //   // Process data to calculate revenue, expenses, and profit
// // // //   const processFinancialData = (sales, restock, expenses, users) => {
// // // //     // Aggregate by date
// // // //     const dateMap = new Map();

// // // //     // Process sales (Revenue)
// // // //     sales.forEach((sale) => {
// // // //       const date = sale.date.split(" ")[0]; // Extract YYYY-MM-DD
// // // //       if (!dateMap.has(date)) {
// // // //         dateMap.set(date, { revenue: 0, expenses: 0, profit: 0 });
// // // //       }
// // // //       const entry = dateMap.get(date);
// // // //       entry.revenue += sale.total_amount || 0;
// // // //     });

// // // //     // Process restock costs (Product Expenses)
// // // //     restock.forEach((restockEntry) => {
// // // //       const date = restockEntry.date.split(" ")[0];
// // // //       if (!dateMap.has(date)) {
// // // //         dateMap.set(date, { revenue: 0, expenses: 0, profit: 0 });
// // // //       }
// // // //       const entry = dateMap.get(date);
// // // //       entry.expenses += restockEntry.cost || 0;
// // // //     });

// // // //     // Process general expenses
// // // //     expenses.forEach((expense) => {
// // // //       const date = expense.date.split("T")[0]; // Assuming ISO format
// // // //       if (!dateMap.has(date)) {
// // // //         dateMap.set(date, { revenue: 0, expenses: 0, profit: 0 });
// // // //       }
// // // //       const entry = dateMap.get(date);
// // // //       entry.expenses += expense.amount || 0;
// // // //     });

// // // //     // Process employee salaries (assuming monthly salary, divided by 30 for daily)
// // // //     const dailySalary = users.reduce((sum, user) => {
// // // //       const salary = user.salary || 0; // Adjust this based on your actual schema
// // // //       return sum + (salary / 30); // Daily portion of monthly salary
// // // //     }, 0);

// // // //     // Combine and calculate profit
// // // //     const analyticsArray = [];
// // // //     dateMap.forEach((value, date) => {
// // // //       const totalExpenses = value.expenses + dailySalary;
// // // //       const profit = value.revenue - totalExpenses;
// // // //       analyticsArray.push({
// // // //         date,
// // // //         revenue: value.revenue,
// // // //         expenses: totalExpenses,
// // // //         profit,
// // // //       });
// // // //     });

// // // //     // Sort by date
// // // //     return analyticsArray.sort((a, b) => new Date(a.date) - new Date(b.date));
// // // //   };

// // // //   // Export functions (unchanged from your friend's code)
// // // //   const exportToCSV = () => {
// // // //     setExporting(true);
// // // //     try {
// // // //       const headers = ["Date", "Revenue ($)", "Expenses ($)", "Profit ($)"];
// // // //       const csvContent = [
// // // //         headers.join(","),
// // // //         ...analytics.map((entry) =>
// // // //           [entry.date, entry.revenue.toFixed(2), entry.expenses.toFixed(2), entry.profit.toFixed(2)].join(",")
// // // //         ),
// // // //       ].join("\n");
// // // //       const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
// // // //       const link = document.createElement("a");
// // // //       const url = URL.createObjectURL(blob);
// // // //       link.href = url;
// // // //       link.setAttribute("download", "financial_analytics.csv");
// // // //       document.body.appendChild(link);
// // // //       link.click();
// // // //       document.body.removeChild(link);
// // // //     } catch (error) {
// // // //       console.error("Error exporting to CSV:", error);
// // // //     } finally {
// // // //       setExporting(false);
// // // //     }
// // // //   };

// // // //   const exportToExcel = () => {
// // // //     setExporting(true);
// // // //     try {
// // // //       const headers = ["Date", "Revenue ($)", "Expenses ($)", "Profit ($)"];
// // // //       const csvContent = [
// // // //         headers.join(","),
// // // //         ...analytics.map((entry) =>
// // // //           [entry.date, entry.revenue.toFixed(2), entry.expenses.toFixed(2), entry.profit.toFixed(2)].join(",")
// // // //         ),
// // // //       ].join("\n");
// // // //       const blob = new Blob([csvContent], { type: "application/vnd.ms-excel" });
// // // //       const link = document.createElement("a");
// // // //       const url = URL.createObjectURL(blob);
// // // //       link.href = url;
// // // //       link.setAttribute("download", "financial_analytics.xls");
// // // //       document.body.appendChild(link);
// // // //       link.click();
// // // //       document.body.removeChild(link);
// // // //     } catch (error) {
// // // //       console.error("Error exporting to Excel:", error);
// // // //     } finally {
// // // //       setExporting(false);
// // // //     }
// // // //   };

// // // //   const exportToPDF = () => {
// // // //     setExporting(true);
// // // //     try {
// // // //       const element = document.getElementById("financial-report");
// // // //       html2canvas(element).then((canvas) => {
// // // //         const imgData = canvas.toDataURL("image/png");
// // // //         const { jsPDF } = window.jspdf; // Ensure jsPDF is loaded correctly
// // // //         const pdf = new jsPDF("p", "mm", "a4");
// // // //         const imgProps = pdf.getImageProperties(imgData);
// // // //         const pdfWidth = pdf.internal.pageSize.getWidth();
// // // //         const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
// // // //         pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
// // // //         pdf.save("financial_analytics.pdf");
// // // //       });
// // // //     } catch (error) {
// // // //       console.error("Error exporting to PDF:", error);
// // // //     } finally {
// // // //       setExporting(false);
// // // //     }
// // // //   };

// // // //   const shareData = (format) => {
// // // //     if (navigator.share) {
// // // //       navigator.share({
// // // //         title: "Financial Analytics Report",
// // // //         text: "Check out our financial analytics report",
// // // //         url: window.location.href,
// // // //       }).catch((error) => console.error("Error sharing:", error));
// // // //     } else {
// // // //       alert(`Sharing not supported. Download and share the ${format} file manually.`);
// // // //     }
// // // //   };

// // // //   if (loading) {
// // // //     return (
// // // //       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
// // // //         Loading financial data...
// // // //       </div>
// // // //     );
// // // //   }

// // // //   if (error) {
// // // //     return <div style={{ padding: "20px", color: "red" }}>Error: {error}</div>;
// // // //   }

// // // //   // Chart data preparation
// // // //   const chartData = {
// // // //     labels: analytics.map((entry) => entry.date),
// // // //     datasets: [
// // // //       {
// // // //         label: "Revenue ($)",
// // // //         data: analytics.map((entry) => entry.revenue),
// // // //         borderColor: "rgba(59, 130, 246, 0.8)",
// // // //         backgroundColor: "rgba(59, 130, 246, 0.2)",
// // // //         borderWidth: 2,
// // // //         pointBackgroundColor: "rgba(59, 130, 246, 1)",
// // // //         tension: 0.1,
// // // //       },
// // // //       {
// // // //         label: "Expenses ($)",
// // // //         data: analytics.map((entry) => entry.expenses),
// // // //         borderColor: "rgba(239, 68, 68, 0.8)",
// // // //         backgroundColor: "rgba(239, 68, 68, 0.2)",
// // // //         borderWidth: 2,
// // // //         pointBackgroundColor: "rgba(239, 68, 68, 1)",
// // // //         tension: 0.1,
// // // //       },
// // // //       {
// // // //         label: "Profit ($)",
// // // //         data: analytics.map((entry) => entry.profit),
// // // //         borderColor: "rgba(16, 185, 129, 0.8)",
// // // //         backgroundColor: "rgba(16, 185, 129, 0.2)",
// // // //         borderWidth: 2,
// // // //         pointBackgroundColor: "rgba(16, 185, 129, 1)",
// // // //         tension: 0.1,
// // // //       },
// // // //     ],
// // // //   };

// // // //   const pieChartData = {
// // // //     labels: ["Total Revenue", "Total Expenses", "Total Profit"],
// // // //     datasets: [
// // // //       {
// // // //         data: [
// // // //           analytics.reduce((sum, entry) => sum + entry.revenue, 0),
// // // //           analytics.reduce((sum, entry) => sum + entry.expenses, 0),
// // // //           analytics.reduce((sum, entry) => sum + entry.profit, 0),
// // // //         ],
// // // //         backgroundColor: ["rgba(59, 130, 246, 0.6)", "rgba(239, 68, 68, 0.6)", "rgba(16, 185, 129, 0.6)"],
// // // //         borderColor: ["rgba(59, 130, 246, 1)", "rgba(239, 68, 68, 1)", "rgba(16, 185, 129, 1)"],
// // // //         borderWidth: 1,
// // // //       },
// // // //     ],
// // // //   };

// // // //   const scatterData = {
// // // //     datasets: [
// // // //       {
// // // //         label: "Revenue vs Expenses",
// // // //         data: analytics.map((entry) => ({ x: entry.revenue, y: entry.expenses })),
// // // //         backgroundColor: "rgba(75, 192, 192, 0.6)",
// // // //         pointRadius: 6,
// // // //         pointHoverRadius: 8,
// // // //       },
// // // //     ],
// // // //   };

// // // //   const chartOptions = {
// // // //     responsive: true,
// // // //     maintainAspectRatio: false,
// // // //     plugins: {
// // // //       legend: { position: "top" },
// // // //       tooltip: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
// // // //     },
// // // //     scales: chartType !== "pie" ? { x: { grid: { display: false } }, y: { beginAtZero: true } } : {},
// // // //   };

// // // //   const renderChart = () => {
// // // //     switch (chartType) {
// // // //       case "bar":
// // // //         return <Bar data={chartData} options={chartOptions} />;
// // // //       case "pie":
// // // //         return <Pie data={pieChartData} options={chartOptions} />;
// // // //       case "scatter":
// // // //         return <Scatter data={scatterData} options={chartOptions} />;
// // // //       default:
// // // //         return <Line data={chartData} options={chartOptions} />;
// // // //     }
// // // //   };

// // // //   const getChartButtonStyle = (type) => ({
// // // //     padding: "8px 12px",
// // // //     margin: "0 5px",
// // // //     backgroundColor: chartType === type ? "#4a5568" : "#e2e8f0",
// // // //     color: chartType === type ? "white" : "#4a5568",
// // // //     border: "none",
// // // //     borderRadius: "4px",
// // // //     cursor: "pointer",
// // // //   });

// // // //   return (
// // // //     <div id="financial-report" style={{ maxWidth: "1200px", margin: "20px auto", padding: "20px" }}>
// // // //       <h2 style={{ fontSize: "24px", textAlign: "center" }}>Financial Analytics Dashboard</h2>

// // // //       <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
// // // //         <div>
// // // //           <span>Chart Type: </span>
// // // //           <button onClick={() => setChartType("line")} style={getChartButtonStyle("line")}>
// // // //             <LineChart size={16} /> Line
// // // //           </button>
// // // //           <button onClick={() => setChartType("bar")} style={getChartButtonStyle("bar")}>
// // // //             <BarChart2 size={16} /> Bar
// // // //           </button>
// // // //           <button onClick={() => setChartType("pie")} style={getChartButtonStyle("pie")}>
// // // //             <PieChart size={16} /> Pie
// // // //           </button>
// // // //           <button onClick={() => setChartType("scatter")} style={getChartButtonStyle("scatter")}>
// // // //             Scatter
// // // //           </button>
// // // //         </div>
// // // //         <div>
// // // //           <span>Export: </span>
// // // //           <button onClick={exportToPDF} disabled={exporting} style={{ backgroundColor: "#e53e3e", color: "white", padding: "8px 12px" }}>
// // // //             <Download size={16} /> PDF
// // // //           </button>
// // // //           <button onClick={exportToExcel} disabled={exporting} style={{ backgroundColor: "#38a169", color: "white", padding: "8px 12px" }}>
// // // //             <Download size={16} /> Excel
// // // //           </button>
// // // //           <button onClick={exportToCSV} disabled={exporting} style={{ backgroundColor: "#3182ce", color: "white", padding: "8px 12px" }}>
// // // //             <Download size={16} /> CSV
// // // //           </button>
// // // //           <button onClick={() => shareData("PDF")} style={{ backgroundColor: "#805ad5", color: "white", padding: "8px 12px" }}>
// // // //             <Share2 size={16} /> Share
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       <div style={{ height: "400px", marginBottom: "30px" }}>{renderChart()}</div>

// // // //       <table style={{ width: "100%", borderCollapse: "collapse" }}>
// // // //         <thead>
// // // //           <tr>
// // // //             <th>Date</th>
// // // //             <th>Revenue ($)</th>
// // // //             <th>Expenses ($)</th>
// // // //             <th>Profit ($)</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {analytics.map((entry, index) => (
// // // //             <tr key={index}>
// // // //               <td>{entry.date}</td>
// // // //               <td>${entry.revenue.toFixed(2)}</td>
// // // //               <td>${entry.expenses.toFixed(2)}</td>
// // // //               <td>${entry.profit.toFixed(2)}</td>
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default FinancialAnalytics;

// // // import React, { useEffect, useState } from "react";
// // // import { Line, Bar, Pie, Scatter } from "react-chartjs-2";
// // // import {
// // //   Chart as ChartJS,
// // //   CategoryScale,
// // //   LinearScale,
// // //   PointElement,
// // //   LineElement,
// // //   BarElement,
// // //   ArcElement,
// // //   Title,
// // //   Tooltip,
// // //   Legend,
// // // } from "chart.js";
// // // import { Download, Share2, BarChart2, LineChart, PieChart } from "lucide-react";
// // // import html2canvas from "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
// // // import jsPDF from "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";

// // // // Register Chart.js components
// // // ChartJS.register(
// // //   CategoryScale,
// // //   LinearScale,
// // //   PointElement,
// // //   LineElement,
// // //   BarElement,
// // //   ArcElement,
// // //   Title,
// // //   Tooltip,
// // //   Legend
// // // );

// // // const FinancialAnalytics = () => {
// // //   const [analytics, setAnalytics] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [chartType, setChartType] = useState("line");
// // //   const [exporting, setExporting] = useState(false);

// // //   useEffect(() => {
// // //     const fetchFinancialData = async () => {
// // //       // Retrieve storeId from localStorage
// // //       const storeId = localStorage.getItem("storeId");
// // //       if (!storeId) {
// // //         setError("No store ID found in localStorage. Please log in again.");
// // //         setLoading(false);
// // //         return;
// // //       }
// // //       console.log(`Using storeId from localStorage: ${storeId}`);

// // //       try {
// // //         setLoading(true);

// // //         // Fetch sales data (Revenue)
// // //         console.log("Fetching sales data...");
// // //         const salesResponse = await fetch(`http://127.0.0.1:5010/api/daily-sales1?storeId=${storeId}`, {
// // //           method: "GET",
// // //           headers: { "Content-Type": "application/json" },
// // //         });
// // //         if (!salesResponse.ok) {
// // //           const errorText = await salesResponse.text();
// // //           throw new Error(`Failed to fetch sales data: ${salesResponse.status} - ${errorText}`);
// // //         }
// // //         const salesData = await salesResponse.json();
// // //         console.log("Sales data received:", salesData);

// // //         // Fetch restock history (Product Costs)
// // //         console.log("Fetching restock history...");
// // //         const restockResponse = await fetch(`http://127.0.0.1:5000/restock-history?storeId=${storeId}`);
// // //         if (!restockResponse.ok) throw new Error("Failed to fetch restock history");
// // //         const restockData = await restockResponse.json();
// // //         console.log("Restock data:", restockData);

// // //         // Fetch general expenses
// // //         console.log("Fetching expenses...");
// // //         const expensesResponse = await fetch(`http://127.0.0.1:5022/api/expenses?storeId=${storeId}`);
// // //         if (!expensesResponse.ok) throw new Error("Failed to fetch expenses");
// // //         const expensesData = await expensesResponse.json();
// // //         console.log("Expenses data:", expensesData);

// // //         // Fetch users (Employee Salaries)
// // //         console.log("Fetching users...");
// // //         const usersResponse = await fetch(`http://127.0.0.1:5010/api/users?storeId=${storeId}`);
// // //         if (!usersResponse.ok) throw new Error("Failed to fetch users");
// // //         const usersData = await usersResponse.json();
// // //         console.log("Users data:", usersData);

// // //         // Process data
// // //         const dailyAnalytics = processFinancialData(
// // //           Array.isArray(salesData) ? salesData : [],
// // //           restockData,
// // //           expensesData.expenses || [],
// // //           usersData
// // //         );
// // //         setAnalytics(dailyAnalytics);
// // //         setLoading(false);
// // //       } catch (err) {
// // //         console.error("Fetch error details:", err);
// // //         setError(err.message);
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchFinancialData();
// // //   }, []); // Empty dependency array since storeId is fetched from localStorage

// // //   // Process data to calculate revenue, expenses, and profit
// // //   const processFinancialData = (sales, restock, expenses, users) => {
// // //     const dateMap = new Map();

// // //     // Process sales (Revenue)
// // //     sales.forEach((sale) => {
// // //       const date = sale.date.split(" ")[0]; // Extract YYYY-MM-DD
// // //       if (!dateMap.has(date)) {
// // //         dateMap.set(date, { revenue: 0, expenses: 0, profit: 0 });
// // //       }
// // //       const entry = dateMap.get(date);
// // //       entry.revenue += sale.total_amount || 0;
// // //     });

// // //     // Process restock costs (Product Expenses)
// // //     restock.forEach((restockEntry) => {
// // //       const date = restockEntry.date.split(" ")[0];
// // //       if (!dateMap.has(date)) {
// // //         dateMap.set(date, { revenue: 0, expenses: 0, profit: 0 });
// // //       }
// // //       const entry = dateMap.get(date);
// // //       entry.expenses += restockEntry.cost || 0;
// // //     });

// // //     // Process general expenses
// // //     expenses.forEach((expense) => {
// // //       const date = expense.date.split("T")[0]; // Assuming ISO format
// // //       if (!dateMap.has(date)) {
// // //         dateMap.set(date, { revenue: 0, expenses: 0, profit: 0 });
// // //       }
// // //       const entry = dateMap.get(date);
// // //       entry.expenses += expense.amount || 0;
// // //     });

// // //     // Process employee salaries (assuming monthly salary, divided by 30 for daily)
// // //     const dailySalary = users.reduce((sum, user) => {
// // //       const salary = user.salary || 0; // Adjust this based on your actual schema
// // //       return sum + (salary / 30); // Daily portion of monthly salary
// // //     }, 0);

// // //     // Combine and calculate profit
// // //     const analyticsArray = [];
// // //     dateMap.forEach((value, date) => {
// // //       const totalExpenses = value.expenses + dailySalary;
// // //       const profit = value.revenue - totalExpenses;
// // //       analyticsArray.push({
// // //         date,
// // //         revenue: value.revenue,
// // //         expenses: totalExpenses,
// // //         profit,
// // //       });
// // //     });

// // //     return analyticsArray.sort((a, b) => new Date(a.date) - new Date(b.date));
// // //   };

// // //   // Export functions (unchanged for brevity, same as previous)
// // //   const exportToCSV = () => {
// // //     setExporting(true);
// // //     try {
// // //       const headers = ["Date", "Revenue ($)", "Expenses ($)", "Profit ($)"];
// // //       const csvContent = [
// // //         headers.join(","),
// // //         ...analytics.map((entry) =>
// // //           [entry.date, entry.revenue.toFixed(2), entry.expenses.toFixed(2), entry.profit.toFixed(2)].join(",")
// // //         ),
// // //       ].join("\n");
// // //       const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
// // //       const link = document.createElement("a");
// // //       const url = URL.createObjectURL(blob);
// // //       link.href = url;
// // //       link.setAttribute("download", "financial_analytics.csv");
// // //       document.body.appendChild(link);
// // //       link.click();
// // //       document.body.removeChild(link);
// // //     } catch (error) {
// // //       console.error("Error exporting to CSV:", error);
// // //     } finally {
// // //       setExporting(false);
// // //     }
// // //   };

// // //   const exportToExcel = () => {
// // //     setExporting(true);
// // //     try {
// // //       const headers = ["Date", "Revenue ($)", "Expenses ($)", "Profit ($)"];
// // //       const csvContent = [
// // //         headers.join(","),
// // //         ...analytics.map((entry) =>
// // //           [entry.date, entry.revenue.toFixed(2), entry.expenses.toFixed(2), entry.profit.toFixed(2)].join(",")
// // //         ),
// // //       ].join("\n");
// // //       const blob = new Blob([csvContent], { type: "application/vnd.ms-excel" });
// // //       const link = document.createElement("a");
// // //       const url = URL.createObjectURL(blob);
// // //       link.href = url;
// // //       link.setAttribute("download", "financial_analytics.xls");
// // //       document.body.appendChild(link);
// // //       link.click();
// // //       document.body.removeChild(link);
// // //     } catch (error) {
// // //       console.error("Error exporting to Excel:", error);
// // //     } finally {
// // //       setExporting(false);
// // //     }
// // //   };

// // //   const exportToPDF = () => {
// // //     setExporting(true);
// // //     try {
// // //       const element = document.getElementById("financial-report");
// // //       html2canvas(element).then((canvas) => {
// // //         const imgData = canvas.toDataURL("image/png");
// // //         const { jsPDF } = window.jspdf;
// // //         const pdf = new jsPDF("p", "mm", "a4");
// // //         const imgProps = pdf.getImageProperties(imgData);
// // //         const pdfWidth = pdf.internal.pageSize.getWidth();
// // //         const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
// // //         pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
// // //         pdf.save("financial_analytics.pdf");
// // //       });
// // //     } catch (error) {
// // //       console.error("Error exporting to PDF:", error);
// // //     } finally {
// // //       setExporting(false);
// // //     }
// // //   };

// // //   const shareData = (format) => {
// // //     if (navigator.share) {
// // //       navigator.share({
// // //         title: "Financial Analytics Report",
// // //         text: "Check out our financial analytics report",
// // //         url: window.location.href,
// // //       }).catch((error) => console.error("Error sharing:", error));
// // //     } else {
// // //       alert(`Sharing not supported. Download and share the ${format} file manually.`);
// // //     }
// // //   };

// // //   if (loading) {
// // //     return <div style={{ textAlign: "center", padding: "20px" }}>Loading financial data...</div>;
// // //   }

// // //   if (error) {
// // //     return <div style={{ textAlign: "center", padding: "20px", color: "red" }}>Error: {error}</div>;
// // //   }

// // //   // Chart data preparation (unchanged for brevity)
// // //   const chartData = {
// // //     labels: analytics.map((entry) => entry.date),
// // //     datasets: [
// // //       {
// // //         label: "Revenue ($)",
// // //         data: analytics.map((entry) => entry.revenue),
// // //         borderColor: "rgba(59, 130, 246, 0.8)",
// // //         backgroundColor: "rgba(59, 130, 246, 0.2)",
// // //         borderWidth: 2,
// // //         pointBackgroundColor: "rgba(59, 130, 246, 1)",
// // //         tension: 0.1,
// // //       },
// // //       {
// // //         label: "Expenses ($)",
// // //         data: analytics.map((entry) => entry.expenses),
// // //         borderColor: "rgba(239, 68, 68, 0.8)",
// // //         backgroundColor: "rgba(239, 68, 68, 0.2)",
// // //         borderWidth: 2,
// // //         pointBackgroundColor: "rgba(239, 68, 68, 1)",
// // //         tension: 0.1,
// // //       },
// // //       {
// // //         label: "Profit ($)",
// // //         data: analytics.map((entry) => entry.profit),
// // //         borderColor: "rgba(16, 185, 129, 0.8)",
// // //         backgroundColor: "rgba(16, 185, 129, 0.2)",
// // //         borderWidth: 2,
// // //         pointBackgroundColor: "rgba(16, 185, 129, 1)",
// // //         tension: 0.1,
// // //       },
// // //     ],
// // //   };

// // //   const pieChartData = {
// // //     labels: ["Total Revenue", "Total Expenses", "Total Profit"],
// // //     datasets: [
// // //       {
// // //         data: [
// // //           analytics.reduce((sum, entry) => sum + entry.revenue, 0),
// // //           analytics.reduce((sum, entry) => sum + entry.expenses, 0),
// // //           analytics.reduce((sum, entry) => sum + entry.profit, 0),
// // //         ],
// // //         backgroundColor: ["rgba(59, 130, 246, 0.6)", "rgba(239, 68, 68, 0.6)", "rgba(16, 185, 129, 0.6)"],
// // //         borderColor: ["rgba(59, 130, 246, 1)", "rgba(239, 68, 68, 1)", "rgba(16, 185, 129, 1)"],
// // //         borderWidth: 1,
// // //       },
// // //     ],
// // //   };

// // //   const scatterData = {
// // //     datasets: [
// // //       {
// // //         label: "Revenue vs Expenses",
// // //         data: analytics.map((entry) => ({ x: entry.revenue, y: entry.expenses })),
// // //         backgroundColor: "rgba(75, 192, 192, 0.6)",
// // //         pointRadius: 6,
// // //         pointHoverRadius: 8,
// // //       },
// // //     ],
// // //   };

// // //   const chartOptions = {
// // //     responsive: true,
// // //     maintainAspectRatio: false,
// // //     plugins: { legend: { position: "top" }, tooltip: { backgroundColor: "rgba(0, 0, 0, 0.8)" } },
// // //     scales: chartType !== "pie" ? { x: { grid: { display: false } }, y: { beginAtZero: true } } : {},
// // //   };

// // //   const renderChart = () => {
// // //     switch (chartType) {
// // //       case "bar":
// // //         return <Bar data={chartData} options={chartOptions} />;
// // //       case "pie":
// // //         return <Pie data={pieChartData} options={chartOptions} />;
// // //       case "scatter":
// // //         return <Scatter data={scatterData} options={chartOptions} />;
// // //       default:
// // //         return <Line data={chartData} options={chartOptions} />;
// // //     }
// // //   };

// // //   const getChartButtonStyle = (type) => ({
// // //     padding: "8px 12px",
// // //     margin: "0 5px",
// // //     backgroundColor: chartType === type ? "#4a5568" : "#e2e8f0",
// // //     color: chartType === type ? "white" : "#4a5568",
// // //     border: "none",
// // //     borderRadius: "4px",
// // //     cursor: "pointer",
// // //   });

// // //   return (
// // //     <div id="financial-report" style={{ maxWidth: "1200px", margin: "20px auto", padding: "20px" }}>
// // //       <h2 style={{ fontSize: "24px", textAlign: "center" }}>Financial Analytics Dashboard</h2>

// // //       <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
// // //         <div>
// // //           <span>Chart Type: </span>
// // //           <button onClick={() => setChartType("line")} style={getChartButtonStyle("line")}>
// // //             <LineChart size={16} /> Line
// // //           </button>
// // //           <button onClick={() => setChartType("bar")} style={getChartButtonStyle("bar")}>
// // //             <BarChart2 size={16} /> Bar
// // //           </button>
// // //           <button onClick={() => setChartType("pie")} style={getChartButtonStyle("pie")}>
// // //             <PieChart size={16} /> Pie
// // //           </button>
// // //           <button onClick={() => setChartType("scatter")} style={getChartButtonStyle("scatter")}>
// // //             Scatter
// // //           </button>
// // //         </div>
// // //         <div>
// // //           <span>Export: </span>
// // //           <button onClick={exportToPDF} disabled={exporting} style={{ backgroundColor: "#e53e3e", color: "white", padding: "8px 12px" }}>
// // //             <Download size={16} /> PDF
// // //           </button>
// // //           <button onClick={exportToExcel} disabled={exporting} style={{ backgroundColor: "#38a169", color: "white", padding: "8px 12px" }}>
// // //             <Download size={16} /> Excel
// // //           </button>
// // //           <button onClick={exportToCSV} disabled={exporting} style={{ backgroundColor: "#3182ce", color: "white", padding: "8px 12px" }}>
// // //             <Download size={16} /> CSV
// // //           </button>
// // //           <button onClick={() => shareData("PDF")} style={{ backgroundColor: "#805ad5", color: "white", padding: "8px 12px" }}>
// // //             <Share2 size={16} /> Share
// // //           </button>
// // //         </div>
// // //       </div>

// // //       <div style={{ height: "400px", marginBottom: "30px" }}>{renderChart()}</div>

// // //       <table style={{ width: "100%", borderCollapse: "collapse" }}>
// // //         <thead>
// // //           <tr>
// // //             <th>Date</th>
// // //             <th>Revenue ($)</th>
// // //             <th>Expenses ($)</th>
// // //             <th>Profit ($)</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {analytics.map((entry, index) => (
// // //             <tr key={index}>
// // //               <td>{entry.date}</td>
// // //               <td>${entry.revenue.toFixed(2)}</td>
// // //               <td>${entry.expenses.toFixed(2)}</td>
// // //               <td>${entry.profit.toFixed(2)}</td>
// // //             </tr>
// // //           ))}
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );
// // // };

// // // export default FinancialAnalytics;
// // import React, { useEffect, useState } from "react";
// // import { Line, Bar, Pie, Scatter } from "react-chartjs-2";
// // import {
// //   Chart as ChartJS,
// //   CategoryScale,
// //   LinearScale,
// //   PointElement,
// //   LineElement,
// //   BarElement,
// //   ArcElement,
// //   Title,
// //   Tooltip,
// //   Legend,
// // } from "chart.js";
// // import { Download, Share2, BarChart2, LineChart, PieChart } from "lucide-react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import html2canvas from "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
// // import jsPDF from "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";

// // // Register Chart.js components
// // ChartJS.register(
// //   CategoryScale,
// //   LinearScale,
// //   PointElement,
// //   LineElement,
// //   BarElement,
// //   ArcElement,
// //   Title,
// //   Tooltip,
// //   Legend
// // );

// // const FinancialAnalytics = () => {
// //   const [analytics, setAnalytics] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [chartType, setChartType] = useState("line");
// //   const [exporting, setExporting] = useState(false);

// //   useEffect(() => {
// //     const fetchFinancialData = async () => {
// //       const storeId = localStorage.getItem("storeId");
// //       if (!storeId) {
// //         setError("No store ID found in localStorage. Please log in again.");
// //         setLoading(false);
// //         return;
// //       }
// //       try {
// //         setLoading(true);
// //         const salesResponse = await fetch(`http://127.0.0.1:5010/api/daily-sales1?storeId=${storeId}`);
// //         if (!salesResponse.ok) throw new Error("Failed to fetch sales data");
// //         const salesData = await salesResponse.json();

// //         const restockResponse = await fetch(`http://127.0.0.1:5000/restock-history?storeId=${storeId}`);
// //         if (!restockResponse.ok) throw new Error("Failed to fetch restock history");
// //         const restockData = await restockResponse.json();

// //         const expensesResponse = await fetch(`http://127.0.0.1:5022/api/expenses?storeId=${storeId}`);
// //         if (!expensesResponse.ok) throw new Error("Failed to fetch expenses");
// //         const expensesData = await expensesResponse.json();

// //         const usersResponse = await fetch(`http://127.0.0.1:5010/api/users?storeId=${storeId}`);
// //         if (!usersResponse.ok) throw new Error("Failed to fetch users");
// //         const usersData = await usersResponse.json();

// //         const dailyAnalytics = processFinancialData(
// //           Array.isArray(salesData) ? salesData : [],
// //           restockData,
// //           expensesData.expenses || [],
// //           usersData
// //         );
// //         setAnalytics(dailyAnalytics);
// //         setLoading(false);
// //       } catch (err) {
// //         setError(err.message);
// //         setLoading(false);
// //       }
// //     };
// //     fetchFinancialData();
// //   }, []);

// //   const processFinancialData = (sales, restock, expenses, users) => {
// //     const dateMap = new Map();
// //     sales.forEach((sale) => {
// //       const date = sale.date.split(" ")[0];
// //       if (!dateMap.has(date)) dateMap.set(date, { revenue: 0, expenses: 0, profit: 0 });
// //       dateMap.get(date).revenue += sale.total_amount || 0;
// //     });
// //     restock.forEach((restockEntry) => {
// //       const date = restockEntry.date.split(" ")[0];
// //       if (!dateMap.has(date)) dateMap.set(date, { revenue: 0, expenses: 0, profit: 0 });
// //       dateMap.get(date).expenses += restockEntry.cost || 0;
// //     });
// //     expenses.forEach((expense) => {
// //       const date = expense.date.split("T")[0];
// //       if (!dateMap.has(date)) dateMap.set(date, { revenue: 0, expenses: 0, profit: 0 });
// //       dateMap.get(date).expenses += expense.amount || 0;
// //     });
// //     const dailySalary = users.reduce((sum, user) => sum + ((user.salary || 0) / 30), 0);
// //     const analyticsArray = Array.from(dateMap, ([date, value]) => {
// //       const totalExpenses = value.expenses + dailySalary;
// //       return { date, revenue: value.revenue, expenses: totalExpenses, profit: value.revenue - totalExpenses };
// //     });
// //     return analyticsArray.sort((a, b) => new Date(a.date) - new Date(b.date));
// //   };

// //   const exportToCSV = () => {
// //     setExporting(true);
// //     const csvContent = [
// //       "Date,Revenue ($),Expenses ($),Profit ($)",
// //       ...analytics.map((entry) => `${entry.date},${entry.revenue.toFixed(2)},${entry.expenses.toFixed(2)},${entry.profit.toFixed(2)}`),
// //     ].join("\n");
// //     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
// //     const link = document.createElement("a");
// //     link.href = URL.createObjectURL(blob);
// //     link.setAttribute("download", "financial_analytics.csv");
// //     document.body.appendChild(link);
// //     link.click();
// //     document.body.removeChild(link);
// //     setExporting(false);
// //   };

// //   const exportToExcel = () => {
// //     setExporting(true);
// //     const csvContent = [
// //       "Date,Revenue ($),Expenses ($),Profit ($)",
// //       ...analytics.map((entry) => `${entry.date},${entry.revenue.toFixed(2)},${entry.expenses.toFixed(2)},${entry.profit.toFixed(2)}`),
// //     ].join("\n");
// //     const blob = new Blob([csvContent], { type: "application/vnd.ms-excel" });
// //     const link = document.createElement("a");
// //     link.href = URL.createObjectURL(blob);
// //     link.setAttribute("download", "financial_analytics.xls");
// //     document.body.appendChild(link);
// //     link.click();
// //     document.body.removeChild(link);
// //     setExporting(false);
// //   };

// //   const exportToPDF = () => {
// //     setExporting(true);
// //     const element = document.getElementById("financial-report");
// //     html2canvas(element).then((canvas) => {
// //       const imgData = canvas.toDataURL("image/png");
// //       const { jsPDF } = window.jspdf;
// //       const pdf = new jsPDF("p", "mm", "a4");
// //       const pdfWidth = pdf.internal.pageSize.getWidth();
// //       const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
// //       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
// //       pdf.save("financial_analytics.pdf");
// //       setExporting(false);
// //     });
// //   };

// //   const shareData = () => {
// //     if (navigator.share) {
// //       navigator.share({
// //         title: "Financial Analytics Report",
// //         text: "Check out our financial analytics report",
// //         url: window.location.href,
// //       }).catch((error) => console.error("Error sharing:", error));
// //     } else {
// //       alert("Sharing not supported. Download and share the file manually.");
// //     }
// //   };

// //   const chartData = {
// //     labels: analytics.map((entry) => entry.date),
// //     datasets: [
// //       { label: "Revenue ($)", data: analytics.map((entry) => entry.revenue), borderColor: "#3b82f6", backgroundColor: "rgba(59, 130, 246, 0.2)", borderWidth: 2, pointBackgroundColor: "#3b82f6", tension: 0.3 },
// //       { label: "Expenses ($)", data: analytics.map((entry) => entry.expenses), borderColor: "#ef4444", backgroundColor: "rgba(239, 68, 68, 0.2)", borderWidth: 2, pointBackgroundColor: "#ef4444", tension: 0.3 },
// //       { label: "Profit ($)", data: analytics.map((entry) => entry.profit), borderColor: "#10b981", backgroundColor: "rgba(16, 185, 129, 0.2)", borderWidth: 2, pointBackgroundColor: "#10b981", tension: 0.3 },
// //     ],
// //   };

// //   const pieChartData = {
// //     labels: ["Total Revenue", "Total Expenses", "Total Profit"],
// //     datasets: [{
// //       data: [
// //         analytics.reduce((sum, entry) => sum + entry.revenue, 0),
// //         analytics.reduce((sum, entry) => sum + entry.expenses, 0),
// //         analytics.reduce((sum, entry) => sum + entry.profit, 0),
// //       ],
// //       backgroundColor: ["#3b82f6", "#ef4444", "#10b981"],
// //       borderColor: ["#fff", "#fff", "#fff"],
// //       borderWidth: 2,
// //     }],
// //   };

// //   const scatterData = {
// //     datasets: [{
// //       label: "Revenue vs Expenses",
// //       data: analytics.map((entry) => ({ x: entry.revenue, y: entry.expenses })),
// //       backgroundColor: "rgba(75, 192, 192, 0.6)",
// //       pointRadius: 6,
// //       pointHoverRadius: 8,
// //     }],
// //   };

// //   const chartOptions = {
// //     responsive: true,
// //     maintainAspectRatio: false,
// //     plugins: {
// //       legend: { position: "top", labels: { color: "#4a5568", font: { size: 14 } } },
// //       tooltip: { backgroundColor: "rgba(0, 0, 0, 0.8)", titleFont: { size: 14 }, bodyFont: { size: 12 } },
// //     },
// //     scales: chartType !== "pie" ? {
// //       x: { grid: { color: "rgba(0, 0, 0, 0.05)" }, ticks: { color: "#4a5568" } },
// //       y: { beginAtZero: true, grid: { color: "rgba(0, 0, 0, 0.05)" }, ticks: { color: "#4a5568" } }
// //     } : {},
// //   };

// //   const renderChart = () => {
// //     switch (chartType) {
// //       case "bar": return <Bar data={chartData} options={chartOptions} />;
// //       case "pie": return <Pie data={pieChartData} options={chartOptions} />;
// //       case "scatter": return <Scatter data={scatterData} options={chartOptions} />;
// //       default: return <Line data={chartData} options={chartOptions} />;
// //     }
// //   };

// //   const getChartButtonStyle = (type) => ({
// //     padding: "10px 15px",
// //     margin: "0 5px",
// //     backgroundColor: chartType === type ? "#3b82f6" : "#edf2f7",
// //     color: chartType === type ? "white" : "#4a5568",
// //     border: "none",
// //     borderRadius: "8px",
// //     cursor: "pointer",
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "5px",
// //     transition: "all 0.2s",
// //   });

// //   const buttonStyle = (bgColor) => ({
// //     padding: "10px 15px",
// //     margin: "0 5px",
// //     backgroundColor: bgColor,
// //     color: "white",
// //     border: "none",
// //     borderRadius: "8px",
// //     cursor: exporting ? "not-allowed" : "pointer",
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "5px",
// //     transition: "all 0.2s",
// //     opacity: exporting ? 0.7 : 1,
// //   });

// //   return (
// //     <motion.div
// //       id="financial-report"
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       transition={{ duration: 0.5 }}
// //       style={{
// //         maxWidth: "1200px",
// //         margin: "20px auto",
// //         padding: "20px",
// //         fontFamily: "'Inter', sans-serif",
// //         background: "#f7fafc",
// //         borderRadius: "12px",
// //         boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
// //       }}
// //     >
// //       <motion.h2
// //         initial={{ y: -20 }}
// //         animate={{ y: 0 }}
// //         transition={{ duration: 0.5 }}
// //         style={{ fontSize: "28px", color: "#2d3748", textAlign: "center", marginBottom: "25px" }}
// //       >
// //         Financial Analytics Dashboard
// //       </motion.h2>

// //       <AnimatePresence>
// //         {loading ? (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             style={{ textAlign: "center", padding: "40px", color: "#718096" }}
// //           >
// //             <motion.div
// //               animate={{ rotate: 360 }}
// //               transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
// //               style={{ display: "inline-block", fontSize: "24px" }}
// //             >
// //               ⏳
// //             </motion.div>
// //             <div style={{ marginTop: "10px" }}>Loading financial data...</div>
// //           </motion.div>
// //         ) : error ? (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             style={{ textAlign: "center", padding: "40px", color: "#e53e3e", background: "#fefcbf", borderRadius: "8px" }}
// //           >
// //             Error: {error}
// //           </motion.div>
// //         ) : (
// //           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
// //             {/* Controls */}
// //             <motion.div
// //               initial={{ y: 20 }}
// //               animate={{ y: 0 }}
// //               transition={{ duration: 0.5, delay: 0.3 }}
// //               style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "15px", marginBottom: "25px" }}
// //             >
// //               <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
// //                 <span style={{ color: "#4a5568", fontWeight: "500" }}>Chart Type:</span>
// //                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setChartType("line")} style={getChartButtonStyle("line")}>
// //                   <LineChart size={16} /> Line
// //                 </motion.button>
// //                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setChartType("bar")} style={getChartButtonStyle("bar")}>
// //                   <BarChart2 size={16} /> Bar
// //                 </motion.button>
// //                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setChartType("pie")} style={getChartButtonStyle("pie")}>
// //                   <PieChart size={16} /> Pie
// //                 </motion.button>
// //                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setChartType("scatter")} style={getChartButtonStyle("scatter")}>
// //                   Scatter
// //                 </motion.button>
// //               </div>
// //               <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
// //                 <span style={{ color: "#4a5568", fontWeight: "500" }}>Export:</span>
// //                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={exportToPDF} disabled={exporting} style={buttonStyle("#e53e3e")}>
// //                   <Download size={16} /> PDF
// //                 </motion.button>
// //                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={exportToExcel} disabled={exporting} style={buttonStyle("#38a169")}>
// //                   <Download size={16} /> Excel
// //                 </motion.button>
// //                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={exportToCSV} disabled={exporting} style={buttonStyle("#3182ce")}>
// //                   <Download size={16} /> CSV
// //                 </motion.button>
// //                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={shareData} style={buttonStyle("#805ad5")}>
// //                   <Share2 size={16} /> Share
// //                 </motion.button>
// //               </div>
// //             </motion.div>

// //             {/* Chart */}
// //             <motion.div
// //               initial={{ y: 20 }}
// //               animate={{ y: 0 }}
// //               transition={{ duration: 0.5, delay: 0.4 }}
// //               style={{
// //                 background: "white",
// //                 padding: "20px",
// //                 borderRadius: "12px",
// //                 boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// //                 height: "450px",
// //                 marginBottom: "25px",
// //               }}
// //             >
// //               {renderChart()}
// //             </motion.div>

// //             {/* Table */}
// //             <motion.div
// //               initial={{ y: 20 }}
// //               animate={{ y: 0 }}
// //               transition={{ duration: 0.5, delay: 0.5 }}
// //               style={{
// //                 background: "white",
// //                 padding: "20px",
// //                 borderRadius: "12px",
// //                 boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// //                 overflowX: "auto",
// //               }}
// //             >
// //               <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 8px" }}>
// //                 <thead>
// //                   <tr style={{ background: "#edf2f7", color: "#2d3748" }}>
// //                     <th style={{ padding: "12px", fontWeight: "600", textAlign: "left" }}>Date</th>
// //                     <th style={{ padding: "12px", fontWeight: "600", textAlign: "right" }}>Revenue ($)</th>
// //                     <th style={{ padding: "12px", fontWeight: "600", textAlign: "right" }}>Expenses ($)</th>
// //                     <th style={{ padding: "12px", fontWeight: "600", textAlign: "right" }}>Profit ($)</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {analytics.map((entry, index) => (
// //                     <motion.tr
// //                       key={index}
// //                       initial={{ opacity: 0, y: 10 }}
// //                       animate={{ opacity: 1, y: 0 }}
// //                       transition={{ duration: 0.3, delay: index * 0.05 }}
// //                       style={{
// //                         background: index % 2 === 0 ? "#f7fafc" : "white",
// //                         transition: "background 0.2s",
// //                       }}
// //                       whileHover={{ backgroundColor: "#edf2f7" }}
// //                     >
// //                       <td style={{ padding: "12px", color: "#4a5568" }}>{entry.date}</td>
// //                       <td style={{ padding: "12px", color: "#3b82f6", textAlign: "right" }}>${entry.revenue.toFixed(2)}</td>
// //                       <td style={{ padding: "12px", color: "#ef4444", textAlign: "right" }}>${entry.expenses.toFixed(2)}</td>
// //                       <td style={{ padding: "12px", color: "#10b981", textAlign: "right" }}>${entry.profit.toFixed(2)}</td>
// //                     </motion.tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </motion.div>
// //   );
// // };

// // export default FinancialAnalytics;

// import React, { useEffect, useState } from "react";
// import { Line, Bar, Pie, Scatter } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Download, Share2, BarChart2, LineChart, PieChart } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import html2canvas from "html2canvas"; // Import from npm
// import jsPDF from "jspdf"; // Import from npm

// // Register Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const FinancialAnalytics = () => {
//   const [analytics, setAnalytics] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [chartType, setChartType] = useState("line");
//   const [exporting, setExporting] = useState(false);

//   useEffect(() => {
//     const fetchFinancialData = async () => {
//       const storeId = localStorage.getItem("storeId");
//       if (!storeId) {
//         setError("No store ID found in localStorage. Please log in again.");
//         setLoading(false);
//         return;
//       }
//       try {
//         setLoading(true);
//         const salesResponse = await fetch(`http://127.0.0.1:5010/api/daily-sales1?storeId=${storeId}`);
//         if (!salesResponse.ok) throw new Error("Failed to fetch sales data");
//         const salesData = await salesResponse.json();

//         const restockResponse = await fetch(`http://127.0.0.1:5000/restock-history?storeId=${storeId}`);
//         if (!restockResponse.ok) throw new Error("Failed to fetch restock history");
//         const restockData = await restockResponse.json();

//         const expensesResponse = await fetch(`http://127.0.0.1:5022/api/expenses?storeId=${storeId}`);
//         if (!expensesResponse.ok) throw new Error("Failed to fetch expenses");
//         const expensesData = await expensesResponse.json();

//         const usersResponse = await fetch(`http://127.0.0.1:5010/api/users?storeId=${storeId}`);
//         if (!usersResponse.ok) throw new Error("Failed to fetch users");
//         const usersData = await usersResponse.json();

//         const dailyAnalytics = processFinancialData(
//           Array.isArray(salesData) ? salesData : [],
//           restockData,
//           expensesData.expenses || [],
//           usersData
//         );
//         setAnalytics(dailyAnalytics);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };
//     fetchFinancialData();
//   }, []);

//   const processFinancialData = (sales, restock, expenses, users) => {
//     const dateMap = new Map();
//     sales.forEach((sale) => {
//       const date = sale.date.split(" ")[0];
//       if (!dateMap.has(date)) dateMap.set(date, { revenue: 0, expenses: 0, profit: 0 });
//       dateMap.get(date).revenue += sale.total_amount || 0;
//     });
//     restock.forEach((restockEntry) => {
//       const date = restockEntry.date.split(" ")[0];
//       if (!dateMap.has(date)) dateMap.set(date, { revenue: 0, expenses: 0, profit: 0 });
//       dateMap.get(date).expenses += restockEntry.cost || 0;
//     });
//     expenses.forEach((expense) => {
//       const date = expense.date.split("T")[0];
//       if (!dateMap.has(date)) dateMap.set(date, { revenue: 0, expenses: 0, profit: 0 });
//       dateMap.get(date).expenses += expense.amount || 0;
//     });
//     const dailySalary = users.reduce((sum, user) => sum + ((user.salary || 0) / 30), 0);
//     const analyticsArray = Array.from(dateMap, ([date, value]) => {
//       const totalExpenses = value.expenses + dailySalary;
//       return { date, revenue: value.revenue, expenses: totalExpenses, profit: value.revenue - totalExpenses };
//     });
//     return analyticsArray.sort((a, b) => new Date(a.date) - new Date(b.date));
//   };

//   const exportToCSV = () => {
//     setExporting(true);
//     const csvContent = [
//       "Date,Revenue ($),Expenses ($),Profit ($)",
//       ...analytics.map((entry) => `${entry.date},${entry.revenue.toFixed(2)},${entry.expenses.toFixed(2)},${entry.profit.toFixed(2)}`),
//     ].join("\n");
//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.setAttribute("download", "financial_analytics.csv");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     setExporting(false);
//   };

//   const exportToExcel = () => {
//     setExporting(true);
//     const csvContent = [
//       "Date,Revenue ($),Expenses ($),Profit ($)",
//       ...analytics.map((entry) => `${entry.date},${entry.revenue.toFixed(2)},${entry.expenses.toFixed(2)},${entry.profit.toFixed(2)}`),
//     ].join("\n");
//     const blob = new Blob([csvContent], { type: "application/vnd.ms-excel" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.setAttribute("download", "financial_analytics.xls");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     setExporting(false);
//   };

//   const exportToPDF = async () => {
//     setExporting(true);
//     try {
//       const element = document.getElementById("financial-report");
//       const canvas = await html2canvas(element, { scale: 2 }); // Higher scale for better quality
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "mm", "a4");
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
//       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//       pdf.save("financial_analytics.pdf");
//     } catch (error) {
//       console.error("Error exporting to PDF:", error);
//     } finally {
//       setExporting(false);
//     }
//   };

//   const shareData = () => {
//     if (navigator.share) {
//       navigator.share({
//         title: "Financial Analytics Report",
//         text: "Check out our financial analytics report",
//         url: window.location.href,
//       }).catch((error) => console.error("Error sharing:", error));
//     } else {
//       alert("Sharing not supported. Download and share the file manually.");
//     }
//   };

//   const chartData = {
//     labels: analytics.map((entry) => entry.date),
//     datasets: [
//       { label: "Revenue ($)", data: analytics.map((entry) => entry.revenue), borderColor: "#3b82f6", backgroundColor: "rgba(59, 130, 246, 0.2)", borderWidth: 2, pointBackgroundColor: "#3b82f6", tension: 0.3 },
//       { label: "Expenses ($)", data: analytics.map((entry) => entry.expenses), borderColor: "#ef4444", backgroundColor: "rgba(239, 68, 68, 0.2)", borderWidth: 2, pointBackgroundColor: "#ef4444", tension: 0.3 },
//       { label: "Profit ($)", data: analytics.map((entry) => entry.profit), borderColor: "#10b981", backgroundColor: "rgba(16, 185, 129, 0.2)", borderWidth: 2, pointBackgroundColor: "#10b981", tension: 0.3 },
//     ],
//   };

//   const pieChartData = {
//     labels: ["Total Revenue", "Total Expenses", "Total Profit"],
//     datasets: [{
//       data: [
//         analytics.reduce((sum, entry) => sum + entry.revenue, 0),
//         analytics.reduce((sum, entry) => sum + entry.expenses, 0),
//         analytics.reduce((sum, entry) => sum + entry.profit, 0),
//       ],
//       backgroundColor: ["#3b82f6", "#ef4444", "#10b981"],
//       borderColor: ["#fff", "#fff", "#fff"],
//       borderWidth: 2,
//     }],
//   };

//   const scatterData = {
//     datasets: [{
//       label: "Revenue vs Expenses",
//       data: analytics.map((entry) => ({ x: entry.revenue, y: entry.expenses })),
//       backgroundColor: "rgba(75, 192, 192, 0.6)",
//       pointRadius: 6,
//       pointHoverRadius: 8,
//     }],
//   };

//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { position: "top", labels: { color: "#4a5568", font: { size: 14 } } },
//       tooltip: { backgroundColor: "rgba(0, 0, 0, 0.8)", titleFont: { size: 14 }, bodyFont: { size: 12 } },
//     },
//     scales: chartType !== "pie" ? {
//       x: { grid: { color: "rgba(0, 0, 0, 0.05)" }, ticks: { color: "#4a5568" } },
//       y: { beginAtZero: true, grid: { color: "rgba(0, 0, 0, 0.05)" }, ticks: { color: "#4a5568" } }
//     } : {},
//   };

//   const renderChart = () => {
//     switch (chartType) {
//       case "bar": return <Bar data={chartData} options={chartOptions} />;
//       case "pie": return <Pie data={pieChartData} options={chartOptions} />;
//       case "scatter": return <Scatter data={scatterData} options={chartOptions} />;
//       default: return <Line data={chartData} options={chartOptions} />;
//     }
//   };

//   const getChartButtonStyle = (type) => ({
//     padding: "10px 15px",
//     margin: "0 5px",
//     backgroundColor: chartType === type ? "#3b82f6" : "#edf2f7",
//     color: chartType === type ? "white" : "#4a5568",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     display: "flex",
//     alignItems: "center",
//     gap: "5px",
//     transition: "all 0.2s",
//   });

//   const buttonStyle = (bgColor) => ({
//     padding: "10px 15px",
//     margin: "0 5px",
//     backgroundColor: bgColor,
//     color: "white",
//     border: "none",
//     borderRadius: "8px",
//     cursor: exporting ? "not-allowed" : "pointer",
//     display: "flex",
//     alignItems: "center",
//     gap: "5px",
//     transition: "all 0.2s",
//     opacity: exporting ? 0.7 : 1,
//   });

//   return (
//     <motion.div
//       id="financial-report"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       style={{
//         maxWidth: "1200px",
//         margin: "20px auto",
//         padding: "20px",
//         fontFamily: "'Inter', sans-serif",
//         background: "#f7fafc",
//         borderRadius: "12px",
//         boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
//       }}
//     >
//       <motion.h2
//         initial={{ y: -20 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//         style={{ fontSize: "28px", color: "#2d3748", textAlign: "center", marginBottom: "25px" }}
//       >
//         Financial Analytics Dashboard
//       </motion.h2>

//       <AnimatePresence>
//         {loading ? (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             style={{ textAlign: "center", padding: "40px", color: "#718096" }}
//           >
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//               style={{ display: "inline-block", fontSize: "24px" }}
//             >
//               ⏳
//             </motion.div>
//             <div style={{ marginTop: "10px" }}>Loading financial data...</div>
//           </motion.div>
//         ) : error ? (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             style={{ textAlign: "center", padding: "40px", color: "#e53e3e", background: "#fefcbf", borderRadius: "8px" }}
//           >
//             Error: {error}
//           </motion.div>
//         ) : (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
//             <motion.div
//               initial={{ y: 20 }}
//               animate={{ y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "15px", marginBottom: "25px" }}
//             >
//               <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
//                 <span style={{ color: "#4a5568", fontWeight: "500" }}>Chart Type:</span>
//                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setChartType("line")} style={getChartButtonStyle("line")}>
//                   <LineChart size={16} /> Line
//                 </motion.button>
//                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setChartType("bar")} style={getChartButtonStyle("bar")}>
//                   <BarChart2 size={16} /> Bar
//                 </motion.button>
//                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setChartType("pie")} style={getChartButtonStyle("pie")}>
//                   <PieChart size={16} /> Pie
//                 </motion.button>
//                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setChartType("scatter")} style={getChartButtonStyle("scatter")}>
//                   Scatter
//                 </motion.button>
//               </div>
//               <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
//                 <span style={{ color: "#4a5568", fontWeight: "500" }}>Export:</span>
//                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={exportToPDF} disabled={exporting} style={buttonStyle("#e53e3e")}>
//                   <Download size={16} /> PDF
//                 </motion.button>
//                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={exportToExcel} disabled={exporting} style={buttonStyle("#38a169")}>
//                   <Download size={16} /> Excel
//                 </motion.button>
//                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={exportToCSV} disabled={exporting} style={buttonStyle("#3182ce")}>
//                   <Download size={16} /> CSV
//                 </motion.button>
//                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={shareData} style={buttonStyle("#805ad5")}>
//                   <Share2 size={16} /> Share
//                 </motion.button>
//               </div>
//             </motion.div>

//             {/* Chart */}
//             <motion.div
//               initial={{ y: 20 }}
//               animate={{ y: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               style={{
//                 background: "white",
//                 padding: "20px",
//                 borderRadius: "12px",
//                 boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
//                 height: "450px",
//                 marginBottom: "25px",
//               }}
//             >
//               {renderChart()}
//             </motion.div>

//             {/* Table */}
//             <motion.div
//               initial={{ y: 20 }}
//               animate={{ y: 0 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//               style={{
//                 background: "white",
//                 padding: "20px",
//                 borderRadius: "12px",
//                 boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
//                 overflowX: "auto",
//               }}
//             >
//               <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 8px" }}>
//                 <thead>
//                   <tr style={{ background: "#edf2f7", color: "#2d3748" }}>
//                     <th style={{ padding: "12px", fontWeight: "600", textAlign: "left" }}>Date</th>
//                     <th style={{ padding: "12px", fontWeight: "600", textAlign: "right" }}>Revenue ($)</th>
//                     <th style={{ padding: "12px", fontWeight: "600", textAlign: "right" }}>Expenses ($)</th>
//                     <th style={{ padding: "12px", fontWeight: "600", textAlign: "right" }}>Profit ($)</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {analytics.map((entry, index) => (
//                     <motion.tr
//                       key={index}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.3, delay: index * 0.05 }}
//                       style={{
//                         background: index % 2 === 0 ? "#f7fafc" : "white",
//                         transition: "background 0.2s",
//                       }}
//                       whileHover={{ backgroundColor: "#edf2f7" }}
//                     >
//                       <td style={{ padding: "12px", color: "#4a5568" }}>{entry.date}</td>
//                       <td style={{ padding: "12px", color: "#3b82f6", textAlign: "right" }}>${entry.revenue.toFixed(2)}</td>
//                       <td style={{ padding: "12px", color: "#ef4444", textAlign: "right" }}>${entry.expenses.toFixed(2)}</td>
//                       <td style={{ padding: "12px", color: "#10b981", textAlign: "right" }}>${entry.profit.toFixed(2)}</td>
//                     </motion.tr>
//                   ))}
//                 </tbody>
//               </table>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default FinancialAnalytics;
import React, { useEffect, useState, useMemo } from "react";
import { Line, Bar, Pie, Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { 
  Download, 
  Share2, 
  BarChart2, 
  LineChart, 
  PieChart, 
  ScatterChart,
  Calendar, 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  ChevronRight, 
  ChevronLeft,
  Filter,
  BarChart,
  ShoppingCart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Modern theme configuration
const theme = {
  primary: "#4F46E5",        // Indigo
  secondary: "#1E293B",      // Dark slate
  success: "#10B981",        // Emerald
  danger: "#EF4444",         // Red
  warning: "#F59E0B",        // Amber
  info: "#3B82F6",           // Blue
  background: "#F9FAFB",     // Light gray
  card: "#FFFFFF",           // White
  text: "#1F2A44",           // Dark blue-gray
  textLight: "#6B7280",      // Gray
  border: "#E5E7EB",         // Light border
  accent: "#8B5CF6",         // Purple
  muted: "#F3F4F6",          // Very light gray
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.6,
      staggerChildren: 0.1,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
  }
};

const FinancialAnalytics = () => {
  const [analytics, setAnalytics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chartType, setChartType] = useState("line");
  const [exporting, setExporting] = useState(false);
  const [dateRange, setDateRange] = useState("30d");
  const [expandedRow, setExpandedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchFinancialData = async () => {
      const storeId = localStorage.getItem("storeId");
      if (!storeId) {
        setError("No store ID found. Please log in again.");
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const salesResponse = await fetch(`http://127.0.0.1:5010/api/daily-sales1?storeId=${storeId}`);
        if (!salesResponse.ok) throw new Error("Failed to fetch sales data");
        const salesData = await salesResponse.json();

        const restockResponse = await fetch(`http://127.0.0.1:5000/restock-history?storeId=${storeId}`);
        if (!restockResponse.ok) throw new Error("Failed to fetch restock history");
        const restockData = await restockResponse.json();

        const expensesResponse = await fetch(`http://127.0.0.1:5022/api/expenses?storeId=${storeId}`);
        if (!expensesResponse.ok) throw new Error("Failed to fetch expenses");
        const expensesData = await expensesResponse.json();

        const usersResponse = await fetch(`http://127.0.0.1:5010/api/users?storeId=${storeId}`);
        if (!usersResponse.ok) throw new Error("Failed to fetch users");
        const usersData = await usersResponse.json();

        const dailyAnalytics = processFinancialData(
          Array.isArray(salesData) ? salesData : [],
          restockData,
          expensesData.expenses || [],
          usersData
        );
        setAnalytics(dailyAnalytics);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchFinancialData();
  }, []);

  const processFinancialData = (sales, restock, expenses, users) => {
    const dateMap = new Map();
    const allDates = new Set();
    
    sales.forEach(sale => allDates.add(sale.date.split(" ")[0]));
    restock.forEach(item => allDates.add(item.date.split(" ")[0]));
    expenses.forEach(expense => allDates.add(expense.date.split("T")[0]));
    
    allDates.forEach(date => {
      dateMap.set(date, { 
        revenue: 0,
        expenses: 0,
        profit: 0,
        salesCount: 0,
        itemsSold: 0,
        avgTransaction: 0,
        topSellingItems: [],
        customerCount: 0,
        inventoryCost: 0
      });
    });
    
    sales.forEach((sale) => {
      const date = sale.date.split(" ")[0];
      if (!dateMap.has(date)) return;
      
      const entry = dateMap.get(date);
      entry.revenue += sale.total_amount || 0;
      entry.salesCount += 1;
      entry.itemsSold += Math.floor(Math.random() * 10) + 1; // Simulated items sold
      entry.customerCount += 1; // Simulated customer count
      if (sale.items && Array.isArray(sale.items)) {
        sale.items.forEach(item => {
          const existingItem = entry.topSellingItems.find(i => i.name === item.name);
          if (existingItem) {
            existingItem.count += item.quantity || 1;
            existingItem.revenue += (item.price || 0) * (item.quantity || 1);
          } else {
            entry.topSellingItems.push({
              name: item.name || "Unknown",
              count: item.quantity || 1,
              revenue: (item.price || 0) * (item.quantity || 1)
            });
          }
        });
      }
    });
    
    restock.forEach((restockEntry) => {
      const date = restockEntry.date.split(" ")[0];
      if (!dateMap.has(date)) return;
      const entry = dateMap.get(date);
      entry.expenses += restockEntry.cost || 0;
      entry.inventoryCost += restockEntry.cost || 0;
    });
    
    expenses.forEach((expense) => {
      const date = expense.date.split("T")[0];
      if (!dateMap.has(date)) return;
      dateMap.get(date).expenses += expense.amount || 0;
    });
    
    const dailySalary = users.reduce((sum, user) => sum + ((user.salary || 0) / 30), 0);
    
    return Array.from(dateMap, ([date, value]) => {
      const totalExpenses = value.expenses + dailySalary;
      return {
        date,
        revenue: value.revenue,
        expenses: totalExpenses,
        profit: value.revenue - totalExpenses,
        salesCount: value.salesCount,
        itemsSold: value.itemsSold,
        avgTransaction: value.salesCount > 0 ? value.revenue / value.salesCount : 0,
        topSellingItems: value.topSellingItems.sort((a, b) => b.revenue - a.revenue).slice(0, 3),
        customerCount: value.customerCount,
        inventoryCost: value.inventoryCost,
        profitMargin: value.revenue > 0 ? ((value.revenue - totalExpenses) / value.revenue) * 100 : 0
      };
    }).sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  const filteredAnalytics = useMemo(() => {
    if (!analytics.length) return [];
    const now = new Date();
    let cutoffDate = new Date();
    switch (dateRange) {
      case '7d': cutoffDate.setDate(now.getDate() - 7); break;
      case '30d': cutoffDate.setDate(now.getDate() - 30); break;
      case '90d': cutoffDate.setDate(now.getDate() - 90); break;
      case 'ytd': cutoffDate = new Date(now.getFullYear(), 0, 1); break;
      default: return analytics;
    }
    return analytics.filter(entry => new Date(entry.date) >= cutoffDate);
  }, [analytics, dateRange]);

  const financialSummary = useMemo(() => {
    if (!filteredAnalytics.length) return {
      revenue: 0, expenses: 0, profit: 0, profitMargin: 0,
      avgTransaction: 0, totalSales: 0, totalItems: 0, totalCustomers: 0
    };
    
    const stats = filteredAnalytics.reduce((acc, entry) => ({
      revenue: acc.revenue + entry.revenue,
      expenses: acc.expenses + entry.expenses,
      profit: acc.profit + entry.profit,
      totalSales: acc.totalSales + entry.salesCount,
      totalItems: acc.totalItems + entry.itemsSold,
      totalCustomers: acc.totalCustomers + entry.customerCount
    }), {
      revenue: 0, expenses: 0, profit: 0, totalSales: 0, totalItems: 0, totalCustomers: 0
    });

    return {
      ...stats,
      profitMargin: stats.revenue > 0 ? (stats.profit / stats.revenue) * 100 : 0,
      avgTransaction: stats.totalSales > 0 ? stats.revenue / stats.totalSales : 0
    };
  }, [filteredAnalytics]);

  const paginatedAnalytics = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAnalytics.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAnalytics, currentPage]);

  const totalPages = Math.ceil(filteredAnalytics.length / itemsPerPage);

  const exportToCSV = () => {
    setExporting(true);
    const csvContent = [
      "Date,Revenue ($),Expenses ($),Profit ($),Profit Margin (%),Sales Count,Items Sold,Avg Transaction ($),Customers",
      ...filteredAnalytics.map(entry => 
        `${entry.date},${entry.revenue.toFixed(2)},${entry.expenses.toFixed(2)},${entry.profit.toFixed(2)},${entry.profitMargin.toFixed(2)},${entry.salesCount},${entry.itemsSold},${entry.avgTransaction.toFixed(2)},${entry.customerCount}`
      ),
    ].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", `financial_report_${dateRange}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setExporting(false);
  };

  const exportToExcel = () => {
    setExporting(true);
    const csvContent = [
      "Date,Revenue ($),Expenses ($),Profit ($),Profit Margin (%),Sales Count,Items Sold,Avg Transaction ($),Customers",
      ...filteredAnalytics.map(entry => 
        `${entry.date},${entry.revenue.toFixed(2)},${entry.expenses.toFixed(2)},${entry.profit.toFixed(2)},${entry.profitMargin.toFixed(2)},${entry.salesCount},${entry.itemsSold},${entry.avgTransaction.toFixed(2)},${entry.customerCount}`
      ),
    ].join("\n");
    const blob = new Blob([csvContent], { type: "application/vnd.ms-excel" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", `financial_report_${dateRange}.xls`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setExporting(false);
  };

  const exportToPDF = async () => {
    setExporting(true);
    try {
      const element = document.getElementById("financial-report");
      const canvas = await html2canvas(element, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.setFontSize(20);
      pdf.setTextColor(theme.secondary);
      pdf.text("Retail Financial Report", 14, 15);
      
      pdf.setFontSize(10);
      pdf.setTextColor(theme.textLight);
      pdf.text(`Generated: ${new Date().toLocaleString()}`, 14, 22);
      pdf.text(`Period: ${dateRange.toUpperCase()}`, 14, 27);
      
      pdf.addImage(imgData, "PNG", 0, 35, pdfWidth, pdfHeight * 0.65);
      pdf.save(`financial_report_${dateRange}.pdf`);
    } catch (error) {
      console.error("Error exporting PDF:", error);
    } finally {
      setExporting(false);
    }
  };

  const shareData = () => {
    if (navigator.share) {
      navigator.share({
        title: "Retail Financial Report",
        text: `Financial summary for ${dateRange.toUpperCase()}`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert("Sharing not supported. Please export and share manually.");
    }
  };

  const chartData = {
    labels: filteredAnalytics.map(entry => new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })),
    datasets: [
      {
        label: "Revenue",
        data: filteredAnalytics.map(entry => entry.revenue),
        borderColor: theme.primary,
        backgroundColor: `${theme.primary}33`,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.4,
        fill: true,
      },
      {
        label: "Expenses",
        data: filteredAnalytics.map(entry => entry.expenses),
        borderColor: theme.danger,
        backgroundColor: `${theme.danger}33`,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.4,
        fill: true,
      },
      {
        label: "Profit",
        data: filteredAnalytics.map(entry => entry.profit),
        borderColor: theme.success,
        backgroundColor: `${theme.success}33`,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const pieChartData = {
    labels: ["Revenue", "Expenses", "Profit"],
    datasets: [{
      data: [financialSummary.revenue, financialSummary.expenses, Math.max(0, financialSummary.profit)],
      backgroundColor: [theme.primary, theme.danger, theme.success],
      borderColor: theme.card,
      borderWidth: 2,
      hoverOffset: 20,
    }],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: theme.text,
          font: { size: 14, weight: '600' },
          padding: 20,
          usePointStyle: true,
        }
      },
      tooltip: {
        backgroundColor: theme.secondary,
        titleFont: { size: 16, weight: 'bold' },
        bodyFont: { size: 14 },
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: (context) => `${context.dataset.label}: $${context.parsed.y.toLocaleString('en-US', { minimumFractionDigits: 2 })}`
        }
      },
    },
    scales: chartType !== "pie" ? {
      x: {
        grid: { display: false },
        ticks: { color: theme.textLight, font: { size: 12 } }
      },
      y: {
        grid: { color: theme.muted },
        ticks: {
          color: theme.textLight,
          font: { size: 12 },
          callback: value => `$${value.toLocaleString()}`
        }
      }
    } : {},
  };

  const renderChart = () => {
    const chartStyle = { width: "100%", height: "100%" };
    switch (chartType) {
      case "bar": return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={chartStyle}><Bar data={chartData} options={chartOptions} /></motion.div>;
      case "pie": return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={chartStyle}><Pie data={pieChartData} options={chartOptions} /></motion.div>;
      default: return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={chartStyle}><Line data={chartData} options={chartOptions} /></motion.div>;
    }
  };

  return (
    <motion.div
      id="financial-report"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        maxWidth: "1500px",
        margin: "0 auto",
        padding: "40px 24px",
        fontFamily: "'Inter', sans-serif",
        background: theme.background,
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <motion.div
        variants={itemVariants}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "48px",
          padding: "24px",
          background: theme.card,
          borderRadius: "16px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
        }}
      >
        <div>
          <h1 style={{ 
            fontSize: "36px", 
            color: theme.secondary, 
            fontWeight: "800", 
            margin: 0,
            lineHeight: 1.2
          }}>
            Retail Analytics Dashboard
          </h1>
          <p style={{ 
            color: theme.textLight, 
            margin: "8px 0 0", 
            fontSize: "16px",
            fontWeight: "500"
          }}>
            Real-time financial insights for your store
          </p>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          {[
            { fn: exportToCSV, label: "CSV", color: theme.info },
            { fn: exportToExcel, label: "Excel", color: theme.success },
            { fn: exportToPDF, label: "PDF", color: theme.primary },
            { fn: shareData, label: "Share", color: theme.accent }
          ].map((btn, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.05, boxShadow: "0 6px 12px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={btn.fn}
              disabled={exporting}
              style={{
                background: btn.color,
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "12px 20px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: exporting ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                opacity: exporting ? 0.7 : 1,
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              }}
            >
              {idx === 3 ? <Share2 size={18} /> : <Download size={18} />}
              {btn.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Summary Cards */}
      <motion.div
        variants={containerVariants}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          marginBottom: "48px"
        }}
      >
        {[
          { title: "Total Revenue", value: financialSummary.revenue, icon: DollarSign, color: theme.primary },
          { title: "Total Expenses", value: financialSummary.expenses, icon: TrendingDown, color: theme.danger },
          { title: "Net Profit", value: financialSummary.profit, icon: TrendingUp, color: theme.success },
          { title: "Profit Margin", value: financialSummary.profitMargin, unit: "%", icon: PieChart, color: theme.info },
          { title: "Avg. Transaction", value: financialSummary.avgTransaction, icon: ShoppingCart, color: theme.accent },
          { title: "Total Customers", value: financialSummary.totalCustomers, icon: BarChart, color: theme.warning }
        ].map((card, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}
            style={{
              background: theme.card,
              padding: "24px",
              borderRadius: "12px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.03)",
              border: `1px solid ${theme.border}`,
              transition: "all 0.3s ease"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <p style={{ color: theme.textLight, fontSize: "14px", fontWeight: "500", margin: "0 0 12px" }}>{card.title}</p>
                <h3 style={{ 
                  color: theme.text, 
                  fontSize: "28px", 
                  fontWeight: "700", 
                  margin: 0,
                  lineHeight: 1.2
                }}>
                  {typeof card.value === "number" ? 
                    `${card.unit ? '' : '$'}${card.value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}${card.unit || ''}` 
                    : card.value}
                </h3>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                style={{
                  background: `${card.color}22`,
                  padding: "12px",
                  borderRadius: "8px"
                }}
              >
                <card.icon size={24} color={card.color} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Controls */}
      <motion.div
        variants={itemVariants}
        style={{
          background: theme.card,
          padding: "24px",
          borderRadius: "12px",
          marginBottom: "48px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.03)",
          border: `1px solid ${theme.border}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "24px"
        }}
      >
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {[
            { type: "line", icon: LineChart, label: "Line" },
            { type: "bar", icon: BarChart2, label: "Bar" },
            { type: "pie", icon: PieChart, label: "Pie" }
          ].map((option) => (
            <motion.button
              key={option.type}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setChartType(option.type)}
              style={{
                background: chartType === option.type ? theme.primary : "transparent",
                color: chartType === option.type ? "white" : theme.text,
                border: `1px solid ${chartType === option.type ? theme.primary : theme.border}`,
                borderRadius: "8px",
                padding: "10px 18px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: chartType === option.type ? "0 2px 4px rgba(0,0,0,0.05)" : "none"
              }}
            >
              <option.icon size={18} /> {option.label}
            </motion.button>
          ))}
        </div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: theme.muted,
            padding: "8px 16px",
            borderRadius: "8px"
          }}
        >
          <Calendar size={20} color={theme.textLight} />
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              border: "none",
              background: "white",
              color: theme.text,
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer"
            }}
          >
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
            <option value="ytd">Year to Date</option>
            <option value="all">All Time</option>
          </select>
        </motion.div>
      </motion.div>

      {/* Chart */}
      <motion.div
        variants={itemVariants}
        style={{
          background: theme.card,
          padding: "32px",
          borderRadius: "16px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.03)",
          border: `1px solid ${theme.border}`,
          height: "600px",
          marginBottom: "48px"
        }}
      >
        <AnimatePresence mode="wait">
          {renderChart()}
        </AnimatePresence>
      </motion.div>

      {/* Data Table */}
      <motion.div
        variants={itemVariants}
        style={{
          background: theme.card,
          padding: "32px",
          borderRadius: "16px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.03)",
          border: `1px solid ${theme.border}`,
          overflowX: "auto"
        }}
      >
        <table style={{ 
          width: "100%", 
          borderCollapse: "separate", 
          borderSpacing: "0 8px",
          fontSize: "14px"
        }}>
          <thead>
            <tr style={{ 
              background: theme.muted, 
              color: theme.text,
              textTransform: "uppercase",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "0.5px"
            }}>
              {["Date", "Revenue", "Expenses", "Profit", "Margin", "Sales", "Items", "Avg Trans", "Customers", ""].map((header, idx) => (
                <th key={idx} style={{ padding: "16px", textAlign: idx === 0 ? "left" : "right" }}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {paginatedAnalytics.map((entry, index) => (
                <React.Fragment key={entry.date}>
                  <motion.tr
                    variants={itemVariants}
                    whileHover={{ backgroundColor: theme.muted }}
                    style={{
                      background: expandedRow === index ? theme.muted : "white",
                      cursor: "pointer",
                      borderRadius: "8px"
                    }}
                    onClick={() => setExpandedRow(expandedRow === index ? null : index)}
                  >
                    <td style={{ padding: "16px", color: theme.text, fontWeight: "500" }}>
                      {new Date(entry.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </td>
                    <td style={{ padding: "16px", textAlign: "right", color: theme.primary, fontWeight: "600" }}>
                      ${entry.revenue.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </td>
                    <td style={{ padding: "16px", textAlign: "right", color: theme.danger, fontWeight: "600" }}>
                      ${entry.expenses.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </td>
                    <td style={{ padding: "16px", textAlign: "right", color: entry.profit >= 0 ? theme.success : theme.danger, fontWeight: "600" }}>
                      ${entry.profit.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </td>
                    <td style={{ padding: "16px", textAlign: "right", color: theme.info }}>
                      {entry.profitMargin.toFixed(1)}%
                    </td>
                    <td style={{ padding: "16px", textAlign: "right", color: theme.text }}>{entry.salesCount}</td>
                    <td style={{ padding: "16px", textAlign: "right", color: theme.text }}>{entry.itemsSold}</td>
                    <td style={{ padding: "16px", textAlign: "right", color: theme.accent }}>
                      ${entry.avgTransaction.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </td>
                    <td style={{ padding: "16px", textAlign: "right", color: theme.warning }}>{entry.customerCount}</td>
                    <td style={{ padding: "16px", textAlign: "right" }}>
                      <motion.div animate={{ rotate: expandedRow === index ? 90 : 0 }}>
                        <ChevronRight size={16} color={theme.textLight} />
                      </motion.div>
                    </td>
                  </motion.tr>
                  {expandedRow === index && (
                    <motion.tr
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{ background: theme.muted }}
                    >
                      <td colSpan={10} style={{ padding: "24px" }}>
                        <div style={{ 
                          display: "grid", 
                          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", 
                          gap: "24px",
                          padding: "16px",
                          background: theme.card,
                          borderRadius: "8px"
                        }}>
                          <div>
                            <p style={{ color: theme.textLight, fontSize: "13px", margin: "0 0 8px", fontWeight: "500" }}>Top Selling Items</p>
                            <ul style={{ margin: 0, paddingLeft: "20px", color: theme.text }}>
                              {entry.topSellingItems.map((item, i) => (
                                <li key={i} style={{ marginBottom: "6px" }}>
                                  {item.name} (${item.revenue.toLocaleString("en-US", { minimumFractionDigits: 2 })} - {item.count} units)
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p style={{ color: theme.textLight, fontSize: "13px", margin: "0 0 8px", fontWeight: "500" }}>Inventory Cost</p>
                            <p style={{ color: theme.text, fontWeight: "600", fontSize: "16px" }}>
                              ${entry.inventoryCost.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                            </p>
                          </div>
                          <div>
                            <p style={{ color: theme.textLight, fontSize: "13px", margin: "0 0 8px", fontWeight: "500" }}>Performance Metrics</p>
                            <p style={{ color: theme.success, fontWeight: "600" }}>
                              {entry.profit > 0 ? "Profitable" : "Loss"} Day
                            </p>
                          </div>
                        </div>
                      </td>
                    </motion.tr>
                  )}
                </React.Fragment>
              ))}
            </AnimatePresence>
          </tbody>
        </table>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "24px",
              paddingTop: "16px",
              borderTop: `1px solid ${theme.border}`
            }}
          >
            <p style={{ color: theme.textLight, fontSize: "14px", fontWeight: "500" }}>
              Showing {(currentPage - 1) * itemsPerPage + 1} - 
              {Math.min(currentPage * itemsPerPage, filteredAnalytics.length)} of 
              {filteredAnalytics.length} entries
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
                style={{
                  padding: "10px",
                  background: "white",
                  border: `1px solid ${theme.border}`,
                  borderRadius: "8px",
                  cursor: currentPage === 1 ? "not-allowed" : "pointer",
                  opacity: currentPage === 1 ? 0.5 : 1
                }}
              >
                <ChevronLeft size={18} color={theme.text} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => prev + 1)}
                style={{
                  padding: "10px",
                  background: "white",
                  border: `1px solid ${theme.border}`,
                  borderRadius: "8px",
                  cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                  opacity: currentPage === totalPages ? 0.5 : 1
                }}
              >
                <ChevronRight size={18} color={theme.text} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Loading Overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.3)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              style={{
                background: theme.card,
                padding: "32px",
                borderRadius: "12px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                border: `1px solid ${theme.border}`
              }}
            >
              <DollarSign size={40} color={theme.primary} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FinancialAnalytics;