// import React, { useState, useEffect, useMemo } from "react";
// import { useStore } from "./StoreContext";
// import axios from "axios";
// import * as XLSX from 'xlsx';
// import { 
//   ShoppingCart, 
//   DollarSign, 
//   Filter, 
//   BarChart2, 
//   TrendingUp, 
//   Download, 
//   Search,
//   Clock,
//   UserCheck,
//   Package,
//   X,
//   Calendar,
//   PieChart as PieChartIcon,
//   LineChart as LineChartIcon,
//   Activity,
//   Users,
//   Tag
// } from 'lucide-react';
// import { 
//   BarChart, 
//   Bar, 
//   XAxis, 
//   YAxis, 
//   CartesianGrid, 
//   Tooltip, 
//   Legend, 
//   PieChart, 
//   Pie, 
//   Cell, 
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   AreaChart,
//   Area
// } from 'recharts';

// const SalesAnalyticsDashboard = () => {
//   const { storeId } = useStore();
//   const [sales, setSales] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('overview');
//   const [filters, setFilters] = useState({
//     dateRange: null,
//     minAmount: null,
//     userRole: null,
//     timeframe: 'month'
//   });

//   // Color palette
//   const colors = {
//     primary: '#3b82f6',
//     secondary: '#10b981',
//     background: '#f3f4f6',
//     text: {
//       dark: '#1f2937',
//       light: '#6b7280'
//     },
//     accent: {
//       blue: '#6366f1',
//       green: '#22c55e',
//       red: '#ef4444',
//       orange: '#f97316',
//       purple: '#8b5cf6',
//       teal: '#14b8a6',
//       pink: '#ec4899',
//       indigo: '#4f46e5'
//     }
//   };

//   // Fetch data
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const [salesResponse, usersResponse] = await Promise.all([
//           axios.get(`http://localhost:5010/api/daily-sales1`, { params: { storeId, ...filters } }),
//           axios.get(`http://localhost:5010/api/users`, { params: { storeId } })
//         ]);

//         setSales(salesResponse.data);
//         setUsers(usersResponse.data);
//       } catch (error) {
//         console.error("Data fetching error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [storeId, filters]);

//   // Compute advanced sales analysis
//   const salesAnalysis = useMemo(() => {
//     if (sales.length === 0) return {};

//     // User-wise sales breakdown
//     const userSalesBreakdown = users.map(user => {
//       const userSales = sales.filter(sale => sale.user_id === user.id);
//       const totalUserSales = userSales.reduce((sum, sale) => sum + sale.total_amount, 0);
//       return {
//         userId: user.id,
//         name: user.firstName ? `${user.firstName} ${user.lastName || ''}` : `User ${user.id}`,
//         sales: totalUserSales,
//         role: user.role,
//         transactions: userSales.length
//       };
//     }).sort((a, b) => b.sales - a.sales);

//     // Product sales distribution
//     const productSalesDistribution = sales.reduce((acc, sale) => {
//       sale.products.forEach(product => {
//         const existing = acc.find(p => p.name === product.name);
//         if (existing) {
//           existing.sales += product.quantity;
//           existing.revenue += product.total_price || (product.price * product.quantity);
//         } else {
//           acc.push({ 
//             name: product.name, 
//             sales: product.quantity,
//             revenue: product.total_price || (product.price * product.quantity)
//           });
//         }
//       });
//       return acc;
//     }, []).sort((a, b) => b.sales - a.sales);

//     // Time-based sales trend
//     const dailySalesTrend = sales.reduce((acc, sale) => {
//       const date = new Date(sale.date).toLocaleDateString();
//       const existing = acc.find(d => d.date === date);
//       if (existing) {
//         existing.sales += sale.total_amount;
//         existing.transactions = (existing.transactions || 0) + 1;
//       } else {
//         acc.push({ 
//           date, 
//           sales: sale.total_amount,
//           transactions: 1
//         });
//       }
//       return acc;
//     }, []).sort((a, b) => new Date(a.date) - new Date(b.date));

//     // Hour-based sales analysis
//     const hourlySalesTrend = Array.from({ length: 24 }, (_, i) => ({
//       hour: i,
//       sales: 0,
//       transactions: 0
//     }));

//     sales.forEach(sale => {
//       const hour = new Date(sale.date).getHours();
//       hourlySalesTrend[hour].sales += sale.total_amount;
//       hourlySalesTrend[hour].transactions += 1;
//     });

//     // Sales by role
//     const salesByRole = users.reduce((acc, user) => {
//       const userSales = sales.filter(sale => sale.user_id === user.id);
//       const totalUserSales = userSales.reduce((sum, sale) => sum + sale.total_amount, 0);
//       const role = user.role || 'Unknown';
      
//       if (acc[role]) {
//         acc[role].sales += totalUserSales;
//         acc[role].transactions += userSales.length;
//         acc[role].users.add(user.id);
//       } else {
//         acc[role] = {
//           sales: totalUserSales, 
//           transactions: userSales.length,
//           users: new Set([user.id])
//         };
//       }
//       return acc;
//     }, {});

//     const salesByRoleArray = Object.entries(salesByRole).map(([role, data]) => ({ 
//       role, 
//       sales: data.sales,
//       transactions: data.transactions,
//       userCount: data.users.size
//     }));

//     // Weekly sales analysis
//     const getDayOfWeek = (dateStr) => {
//       const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//       return days[new Date(dateStr).getDay()];
//     };

//     const weeklySalesTrend = sales.reduce((acc, sale) => {
//       const dayOfWeek = getDayOfWeek(sale.date);
//       const existing = acc.find(d => d.day === dayOfWeek);
//       if (existing) {
//         existing.sales += sale.total_amount;
//         existing.transactions += 1;
//       } else {
//         acc.push({ day: dayOfWeek, sales: sale.total_amount, transactions: 1 });
//       }
//       return acc;
//     }, []);

//     // Order the days of the week correctly
//     const daysOrder = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     weeklySalesTrend.sort((a, b) => daysOrder.indexOf(a.day) - daysOrder.indexOf(b.day));

//     // Average transaction value over time
//     const averageTransactionValue = dailySalesTrend.map(day => ({
//       date: day.date,
//       value: day.transactions > 0 ? day.sales / day.transactions : 0
//     }));

//     return {
//       userSalesBreakdown,
//       productSalesDistribution,
//       dailySalesTrend,
//       hourlySalesTrend,
//       salesByRole: salesByRoleArray,
//       weeklySalesTrend,
//       averageTransactionValue
//     };
//   }, [sales, users]);

//   const salesSummary = useMemo(() => {
//     if (!sales.length) return {
//       totalSales: 0,
//       averageSale: 0,
//       salesCount: 0,
//       topSellingProducts: []
//     };

//     const totalSales = sales.reduce((sum, sale) => sum + sale.total_amount, 0);
//     const averageSale = totalSales / sales.length || 0;
    
//     // Top selling products
//     const topSellingProducts = sales.reduce((acc, sale) => {
//       sale.products.forEach(product => {
//         acc[product.name] = (acc[product.name] || 0) + product.quantity;
//       });
//       return acc;
//     }, {});

//     // Recent sales to display latest trends
//     const recentSales = [...sales]
//       .sort((a, b) => new Date(b.date) - new Date(a.date))
//       .slice(0, 5);

//     return {
//       totalSales,
//       averageSale,
//       salesCount: sales.length,
//       topSellingProducts: Object.entries(topSellingProducts)
//         .sort((a, b) => b[1] - a[1])
//         .slice(0, 5)
//         .map(([name, quantity]) => ({ name, quantity })),
//       recentSales
//     };
//   }, [sales]);

//   const processedSales = useMemo(() => {
//     return sales.filter(sale => 
//       sale._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       sale.total_amount.toString().includes(searchTerm) ||
//       users.find(user => user.id === sale.user_id)?.id.toString().includes(searchTerm)
//     );
//   }, [sales, searchTerm, users]);

//   const exportToExcel = () => {
//     const worksheet = XLSX.utils.json_to_sheet(processedSales);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Sales");
//     XLSX.writeFile(workbook, "sales_report.xlsx");
//   };

//   const renderTableRows = () => {
//     return processedSales.slice(0, 10).map(sale => {
//       const user = users.find(u => u.id === sale.user_id);
//       const saleDate = new Date(sale.date);
      
//       return (
//         <tr className="table-row" key={sale._id}>
//           <td className="table-cell">{sale._id}</td>
//           <td className="table-cell">
//             <span className="badge" style={{ backgroundColor: colors.accent.green }}>
//               ${sale.total_amount.toFixed(2)}
//             </span>
//           </td>
//           <td className="table-cell">
//             {saleDate.toLocaleDateString()}
//             <div style={{ 
//               color: colors.text.light, 
//               fontSize: '0.7rem', 
//               display: 'flex', 
//               alignItems: 'center',
//               gap: '0.3rem'
//             }}>
//               <Clock size={12} /> {saleDate.toLocaleTimeString()}
//             </div>
//           </td>
//           <td className="table-cell">
//             {sale.products.map(p => `${p.name} (${p.quantity})`).join(', ')}
//           </td>
//           <td className="table-cell">
//             {user ? (user.firstName ? `${user.firstName} ${user.lastName || ''}` : `User ID: ${user.id}`) : "Unknown User"}
//             <div style={{ 
//               color: colors.text.light, 
//               fontSize: '0.7rem',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '0.3rem'
//             }}>
//               <UserCheck size={12} /> {user?.role || "No Role"}
//             </div>
//           </td>
//         </tr>
//       );
//     });
//   };

//   // Overview Tab Components
//   const renderSummaryCards = () => (
//     <div className="summary-grid">
//       <div className="summary-card">
//         <DollarSign size={36} color={colors.accent.green} />
//         <div>
//           <h3>Total Revenue</h3>
//           <p style={{ 
//             fontWeight: 'bold', 
//             fontSize: '1.5rem',
//             color: colors.accent.green
//           }}>
//             ${salesSummary.totalSales.toFixed(2)}
//           </p>
//         </div>
//       </div>
//       <div className="summary-card">
//         <ShoppingCart size={36} color={colors.primary} />
//         <div>
//           <h3>Total Orders</h3>
//           <p style={{ 
//             fontWeight: 'bold', 
//             fontSize: '1.5rem',
//             color: colors.primary
//           }}>
//             {salesSummary.salesCount}
//           </p>
//         </div>
//       </div>
//       <div className="summary-card">
//         <TrendingUp size={36} color={colors.accent.blue} />
//         <div>
//           <h3>Avg. Sale</h3>
//           <p style={{ 
//             fontWeight: 'bold', 
//             fontSize: '1.5rem',
//             color: colors.accent.blue
//           }}>
//             ${salesSummary.averageSale.toFixed(2)}
//           </p>
//         </div>
//       </div>
//       <div className="summary-card">
//         <Package size={36} color={colors.accent.orange} />
//         <div>
//           <h3>Top Product</h3>
//           <p style={{ 
//             fontWeight: 'bold', 
//             fontSize: '1.5rem',
//             color: colors.accent.orange
//           }}>
//             {salesSummary.topSellingProducts[0]?.name || 'N/A'}
//           </p>
//         </div>
//       </div>
//     </div>
//   );

//   const renderTopProducts = () => (
//     <div className="dashboard-card" style={{ marginTop: '1.5rem' }}>
//       <h3 style={{ marginBottom: '1rem', color: colors.text.dark }}>Top Selling Products</h3>
//       <div style={{ 
//         display: 'flex', 
//         flexDirection: 'column',
//         gap: '0.5rem'
//       }}>
//         {salesAnalysis.productSalesDistribution?.slice(0, 5).map((product, index) => (
//           <div key={index} style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             padding: '0.75rem',
//             borderRadius: '8px',
//             background: colors.background,
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
//           }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
//               <div style={{
//                 width: '36px',
//                 height: '36px',
//                 borderRadius: '8px',
//                 background: Object.values(colors.accent)[index % 8],
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 color: 'white'
//               }}>
//                 <Tag size={18} />
//               </div>
//               <div>
//                 <div style={{ fontWeight: 'bold' }}>{product.name}</div>
//                 <div style={{ fontSize: '0.8rem', color: colors.text.light }}>{product.sales} units sold</div>
//               </div>
//             </div>
//             <div style={{ fontWeight: 'bold', color: colors.accent.blue }}>${product.revenue.toFixed(2)}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const renderRecentSales = () => (
//     <div className="dashboard-card" style={{ marginTop: '1.5rem' }}>
//       <h3 style={{ marginBottom: '1rem', color: colors.text.dark }}>Recent Sales</h3>
//       <div style={{ 
//         display: 'flex', 
//         flexDirection: 'column',
//         gap: '0.5rem'
//       }}>
//         {salesSummary.recentSales?.map((sale, index) => {
//           const user = users.find(u => u.id === sale.user_id);
//           const saleDate = new Date(sale.date);
          
//           return (
//             <div key={index} style={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'space-between',
//               padding: '0.75rem',
//               borderRadius: '8px',
//               background: colors.background,
//               boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
//             }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
//                 <div style={{
//                   width: '36px',
//                   height: '36px',
//                   borderRadius: '8px',
//                   background: Object.values(colors.accent)[index % 8],
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   color: 'white'
//                 }}>
//                   <ShoppingCart size={18} />
//                 </div>
//                 <div>
//                   <div style={{ fontWeight: 'bold' }}>Order #{sale._id.slice(-6)}</div>
//                   <div style={{ fontSize: '0.8rem', color: colors.text.light }}>
//                     {user ? (user.firstName ? `${user.firstName} ${user.lastName || ''}` : `User ${user.id}`) : "Unknown User"}
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div style={{ fontWeight: 'bold', color: colors.accent.green, textAlign: 'right' }}>
//                   ${sale.total_amount.toFixed(2)}
//                 </div>
//                 <div style={{ fontSize: '0.8rem', color: colors.text.light, textAlign: 'right' }}>
//                   {saleDate.toLocaleDateString()} {saleDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );

//   // Time Analysis Tab Components
//   const renderDailySalesTrend = () => (
//     <div className="dashboard-card">
//       <h3>Daily Sales Trend</h3>
//       <ResponsiveContainer width="100%" height={300}>
//         <AreaChart data={salesAnalysis.dailySalesTrend}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="date" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Area 
//             type="monotone" 
//             dataKey="sales" 
//             name="Revenue" 
//             stroke={colors.primary} 
//             fill={colors.primary}
//             fillOpacity={0.3}
//             strokeWidth={2}
//             animationDuration={1500}
//           />
//           <Area 
//             type="monotone" 
//             dataKey="transactions" 
//             name="Orders" 
//             stroke={colors.accent.orange} 
//             fill={colors.accent.orange}
//             fillOpacity={0.3}
//             strokeWidth={2}
//             animationDuration={1500}
//           />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );

//   const renderHourlySalesTrend = () => (
//     <div className="dashboard-card" style={{ marginTop: '1.5rem' }}>
//       <h3>Hourly Sales Distribution</h3>
//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={salesAnalysis.hourlySalesTrend}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis 
//             dataKey="hour" 
//             tickFormatter={(hour) => `${hour}:00`}
//           />
//           <YAxis />
//           <Tooltip 
//             formatter={(value, name) => [
//               name === 'sales' ? `$${value.toFixed(2)}` : value,
//               name === 'sales' ? 'Revenue' : 'Orders'
//             ]}
//             labelFormatter={(hour) => `${hour}:00 - ${(hour+1) % 24}:00`}
//           />
//           <Legend />
//           <Bar 
//             dataKey="sales" 
//             name="Revenue" 
//             fill={colors.primary} 
//             animationBegin={0}
//             animationDuration={1500}
//           />
//           <Bar 
//             dataKey="transactions" 
//             name="Orders"
//             fill={colors.accent.orange} 
//             animationBegin={0}
//             animationDuration={1500}
//           />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );

//   const renderWeeklySalesTrend = () => (
//     <div className="dashboard-card" style={{ marginTop: '1.5rem' }}>
//       <h3>Weekly Sales Pattern</h3>
//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={salesAnalysis.weeklySalesTrend}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="day" />
//           <YAxis />
//           <Tooltip 
//             formatter={(value, name) => [
//               name === 'sales' ? `$${value.toFixed(2)}` : value,
//               name === 'sales' ? 'Revenue' : 'Orders'
//             ]}
//           />
//           <Legend />
//           <Bar 
//             dataKey="sales" 
//             name="Revenue" 
//             fill={colors.accent.blue} 
//             animationBegin={0}
//             animationDuration={1500}
//           />
//           <Bar 
//             dataKey="transactions" 
//             name="Orders"
//             fill={colors.accent.purple} 
//             animationBegin={0}
//             animationDuration={1500}
//           />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );

//   const renderAverageTransactionValue = () => (
//     <div className="dashboard-card" style={{ marginTop: '1.5rem' }}>
//       <h3>Average Transaction Value Over Time</h3>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={salesAnalysis.averageTransactionValue}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="date" />
//           <YAxis />
//           <Tooltip formatter={(value) => [`$${value.toFixed(2)}`, 'Avg. Transaction']} />
//           <Line 
//             type="monotone" 
//             dataKey="value" 
//             name="Avg. Transaction Value" 
//             stroke={colors.accent.teal} 
//             strokeWidth={2}
//             animationDuration={1500}
//             dot={{ r: 4 }}
//             activeDot={{ r: 6 }}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );

//   // User Analysis Tab Components
//   const renderUserSalesChart = () => (
//     <div className="dashboard-card">
//       <h3>Sales by User</h3>
//       <ResponsiveContainer width="100%" height={400}>
//         <BarChart 
//           data={salesAnalysis.userSalesBreakdown}
//           layout="vertical"
//           margin={{ left: 120 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis type="number" />
//           <YAxis 
//             type="category" 
//             dataKey="name" 
//             width={100}
//           />
//           <Tooltip formatter={(value) => [`$${value.toFixed(2)}`, 'Total Sales']} />
//           <Bar 
//             dataKey="sales" 
//             name="Revenue"
//             fill={colors.primary} 
//             animationBegin={0}
//             animationDuration={1500}
//           />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );

//   const renderSalesByRoleChart = () => (
//     <div className="dashboard-card" style={{ marginTop: '1.5rem' }}>
//       <h3>Sales by User Role</h3>
//       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <div style={{ width: '48%' }}>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={salesAnalysis.salesByRole}
//                 cx="50%"
//                 cy="50%"
//                 labelLine={false}
//                 outerRadius={100}
//                 fill={colors.primary}
//                 dataKey="sales"
//                 nameKey="role"
//                 label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
//               >
//                 {salesAnalysis.salesByRole?.map((entry, index) => (
//                   <Cell 
//                     key={`cell-${index}`} 
//                     fill={Object.values(colors.accent)[index % 8]} 
//                   />
//                 ))}
//               </Pie>
//               <Tooltip formatter={(value) => [`$${value.toFixed(2)}`, 'Total Sales']} />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//           <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Revenue by Role</p>
//         </div>
//         <div style={{ width: '48%' }}>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={salesAnalysis.salesByRole}
//                 cx="50%"
//                 cy="50%"
//                 labelLine={false}
//                 outerRadius={100}
//                 fill={colors.primary}
//                 dataKey="transactions"
//                 nameKey="role"
//                 label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
//               >
//                 {salesAnalysis.salesByRole?.map((entry, index) => (
//                   <Cell 
//                     key={`cell-${index}`} 
//                     fill={Object.values(colors.accent)[index % 8]} 
//                   />
//                 ))}
//               </Pie>
//               <Tooltip formatter={(value) => [value, 'Number of Orders']} />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//           <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Orders by Role</p>
//         </div>
//       </div>
//     </div>
//   );

//   const renderUserPerformanceTable = () => (
//     <div className="dashboard-card" style={{ marginTop: '1.5rem' }}>
//       <h3>User Performance</h3>
//       <table className="advanced-table" style={{ marginTop: '1rem' }}>
//         <thead className="table-header">
//           <tr>
//             <th className="table-header-cell">User</th>
//             <th className="table-header-cell">Role</th>
//             <th className="table-header-cell">Total Revenue</th>
//             <th className="table-header-cell">Orders</th>
//             <th className="table-header-cell">Avg. Order Value</th>
//           </tr>
//         </thead>
//         <tbody>
//           {salesAnalysis.userSalesBreakdown?.map((user, index) => (
//             <tr className="table-row" key={index}>
//               <td className="table-cell">{user.name}</td>
//               <td className="table-cell">{user.role || 'N/A'}</td>
//               <td className="table-cell">
//                 <span className="badge" style={{ backgroundColor: colors.accent.green }}>
//                   ${user.sales.toFixed(2)}
//                 </span>
//               </td>
//               <td className="table-cell">{user.transactions}</td>
//               <td className="table-cell">
//                 ${(user.transactions > 0 ? user.sales / user.transactions : 0).toFixed(2)}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//   // Product Analysis Tab Components
//   const renderProductSalesPieChart = () => (
//     <div className="dashboard-card">
//       <h3>Product Sales Distribution</h3>
//       <ResponsiveContainer width="100%" height={400}>
//         <PieChart>
//           <Pie
//             data={salesAnalysis.productSalesDistribution?.slice(0, 10)}
//             cx="50%"
//             cy="50%"
//             labelLine={true}
//             outerRadius={130}
//             fill={colors.primary}
//             dataKey="sales"
//             nameKey="name"
//             label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
//           >
//             {salesAnalysis.productSalesDistribution?.slice(0, 10).map((entry, index) => (
//               <Cell 
//                 key={`cell-${index}`} 
//                 fill={Object.values(colors.accent)[index % 8]} 
//               />
//             ))}
//           </Pie>
//           <Tooltip formatter={(value, name, props) => [value, 'Units Sold']} />
//           <Legend />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );

//   const renderProductRevenueChart = () => (
//     <div className="dashboard-card" style={{ marginTop: '1.5rem' }}>
//       <h3>Product Revenue Distribution</h3>
//       <ResponsiveContainer width="100%" height={400}>
//         <BarChart 
//           data={salesAnalysis.productSalesDistribution?.slice(0, 10)}
//           layout="vertical"
//           margin={{ left: 150 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis type="number" />
//           <YAxis 
//             type="category" 
//             dataKey="name" 
//             width={140}
//           />
//           <Tooltip formatter={(value) => [`$${value.toFixed(2)}`, 'Revenue']} />
//           <Bar 
//             dataKey="revenue" 
//             name="Revenue"
//             fill={colors.accent.indigo} 
//             animationBegin={0}
//             animationDuration={1500}
//           />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );

//   const renderProductTable = () => (
//     <div className="dashboard-card" style={{ marginTop: '1.5rem' }}>
//       <h3>Product Performance</h3>
//       <table className="advanced-table" style={{ marginTop: '1rem' }}>
//         <thead className="table-header">
//           <tr>
//             <th className="table-header-cell">Product</th>
//             <th className="table-header-cell">Units Sold</th>
//             <th className="table-header-cell">Revenue</th>
//             <th className="table-header-cell">Avg. Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {salesAnalysis.productSalesDistribution?.map((product, index) => (
//             <tr className="table-row" key={index}>
//               <td className="table-cell">{product.name}</td>
//               <td className="table-cell">
//                 <span className="badge" style={{ backgroundColor: colors.accent.green }}>
//                   {product.sales}
//                 </span>
//               </td>
//               <td className="table-cell">
//                 <span className="badge" style={{ backgroundColor: colors.accent.blue }}>
//                   ${product.revenue.toFixed(2)}
//                 </span>
//               </td>
//               <td className="table-cell">
//                 <span className="badge" style={{ backgroundColor: colors.accent.orange }}>
//                   ${(product.revenue / product.sales).toFixed(2)}
//                 </span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//   // Tabs for Visualization
//   const Tabs = ({ activeTab, setActiveTab }) => {
//     const tabs = [
//       { id: 'overview', label: 'Overview', icon: <Activity size={18} /> },
//       { id: 'time', label: 'Time Analysis', icon: <Calendar size={18} /> },
//       { id: 'users', label: 'User Analysis', icon: <Users size={18} /> },
//       { id: 'products', label: 'Product Analysis', icon: <Package size={18} /> }
//     ];

//     return (
//       <div style={{ 
//         display: 'flex', 
//         gap: '1rem', 
//         marginBottom: '1.5rem', 
//         borderBottom: `2px solid ${colors.background}` 
//       }}>
//         {tabs.map(tab => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             style={{
//               padding: '0.75rem 1.5rem',
//               background: activeTab === tab.id ? colors.primary : 'transparent',
//               color: activeTab === tab.id ? 'white' : colors.text.dark,
//               border: 'none',
//               borderRadius: '8px',
//               cursor: 'pointer',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '0.5rem',
//               transition: 'all 0.3s ease',
//               fontWeight: 'bold'
//             }}
//           >
//             {tab.icon}
//             {tab.label}
//           </button>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div style={{ padding: '2rem', background: colors.background, minHeight: '100vh' }}>
//       <div style={{ 
//         maxWidth: '1600px', 
//         margin: '0 auto', 
//         background: 'white', 
//         borderRadius: '16px', 
//         padding: '2rem',
//         boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
//       }}>
//         <h1 style={{ 
//           display: 'flex', 
//           alignItems: 'center', 
//           gap: '1rem', 
//           marginBottom: '1.5rem', 
//           color: colors.text.dark 
//         }}>
//           <BarChart2 size={32} />
//           Sales Analytics Dashboard
//         </h1>

//         {/* Tabs */}
//         <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

//         {/* Tab Content */}
//         {activeTab === 'overview' && (
//           <>
//             {renderSummaryCards()}
//             {renderTopProducts()}
//             {renderRecentSales()}
//           </>
//         )}

//         {activeTab === 'time' && (
//           <>
//             {renderDailySalesTrend()}
//             {renderHourlySalesTrend()}
//             {renderWeeklySalesTrend()}
//             {renderAverageTransactionValue()}
//           </>
//         )}

//         {activeTab === 'users' && (
//           <>
//             {renderUserSalesChart()}
//             {renderSalesByRoleChart()}
//             {renderUserPerformanceTable()}
//           </>
//         )}

//         {activeTab === 'products' && (
//           <>
//             {renderProductSalesPieChart()}
//             {renderProductRevenueChart()}
//             {renderProductTable()}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SalesAnalyticsDashboard;
import React, { useState, useEffect, useMemo } from "react";
import { useStore } from "./StoreContext";
import axios from "axios";
import * as XLSX from 'xlsx';
import { 
  ShoppingCart, 
  DollarSign, 
  Filter, 
  BarChart2, 
  TrendingUp, 
  Download, 
  Search,
  Clock,
  UserCheck,
  Package,
  X,
  Calendar,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  Activity,
  Users,
  Tag
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';

const SalesAnalyticsDashboard = () => {
  const { storeId } = useStore();
  const [sales, setSales] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [filters, setFilters] = useState({
    dateRange: null,
    minAmount: null,
    userRole: null,
    timeframe: 'month'
  });

  // Color palette
  const colors = {
    primary: '#3b82f6',
    secondary: '#10b981',
    background: '#f3f4f6',
    text: {
      dark: '#1f2937',
      light: '#6b7280'
    },
    accent: {
      blue: '#6366f1',
      green: '#22c55e',
      red: '#ef4444',
      orange: '#f97316',
      purple: '#8b5cf6',
      teal: '#14b8a6',
      pink: '#ec4899',
      indigo: '#4f46e5'
    }
  };

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [salesResponse, usersResponse] = await Promise.all([
          axios.get(`http://localhost:5010/api/daily-sales1`, { params: { storeId, ...filters } }),
          axios.get(`http://localhost:5010/api/users`, { params: { storeId } })
        ]);

        // Normalize sales data to ensure all required fields are present
        const normalizedSales = salesResponse.data.map(sale => ({
          ...sale,
          _id: sale._id || sale.id || '', // Ensure _id is present
          total_amount: sale.total_amount || 0,
          products: sale.products || [],
          user_id: sale.user_id || null,
          date: sale.date || new Date().toISOString()
        }));

        setSales(normalizedSales);
        setUsers(usersResponse.data);
      } catch (error) {
        console.error("Data fetching error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [storeId, filters]);

  // Compute advanced sales analysis
  const salesAnalysis = useMemo(() => {
    if (!sales.length) return {};

    const userSalesBreakdown = users.map(user => {
      const userSales = sales.filter(sale => sale.user_id === user.id);
      const totalUserSales = userSales.reduce((sum, sale) => sum + sale.total_amount, 0);
      return {
        userId: user.id,
        name: user.firstName ? `${user.firstName} ${user.lastName || ''}` : `User ${user.id}`,
        sales: totalUserSales,
        role: user.role,
        transactions: userSales.length
      };
    }).sort((a, b) => b.sales - a.sales);

    const productSalesDistribution = sales.reduce((acc, sale) => {
      sale.products.forEach(product => {
        const existing = acc.find(p => p.name === product.name);
        if (existing) {
          existing.sales += product.quantity;
          existing.revenue += product.total_price || (product.price * product.quantity) || 0;
        } else {
          acc.push({ 
            name: product.name, 
            sales: product.quantity,
            revenue: product.total_price || (product.price * product.quantity) || 0
          });
        }
      });
      return acc;
    }, []).sort((a, b) => b.sales - a.sales);

    const dailySalesTrend = sales.reduce((acc, sale) => {
      const date = new Date(sale.date).toLocaleDateString();
      const existing = acc.find(d => d.date === date);
      if (existing) {
        existing.sales += sale.total_amount;
        existing.transactions = (existing.transactions || 0) + 1;
      } else {
        acc.push({ 
          date, 
          sales: sale.total_amount,
          transactions: 1
        });
      }
      return acc;
    }, []).sort((a, b) => new Date(a.date) - new Date(b.date));

    const hourlySalesTrend = Array.from({ length: 24 }, (_, i) => ({
      hour: i,
      sales: 0,
      transactions: 0
    }));

    sales.forEach(sale => {
      const hour = new Date(sale.date).getHours();
      hourlySalesTrend[hour].sales += sale.total_amount;
      hourlySalesTrend[hour].transactions += 1;
    });

    const salesByRole = users.reduce((acc, user) => {
      const userSales = sales.filter(sale => sale.user_id === user.id);
      const totalUserSales = userSales.reduce((sum, sale) => sum + sale.total_amount, 0);
      const role = user.role || 'Unknown';
      
      if (acc[role]) {
        acc[role].sales += totalUserSales;
        acc[role].transactions += userSales.length;
        acc[role].users.add(user.id);
      } else {
        acc[role] = {
          sales: totalUserSales, 
          transactions: userSales.length,
          users: new Set([user.id])
        };
      }
      return acc;
    }, {});

    const salesByRoleArray = Object.entries(salesByRole).map(([role, data]) => ({ 
      role, 
      sales: data.sales,
      transactions: data.transactions,
      userCount: data.users.size
    }));

    const getDayOfWeek = (dateStr) => {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return days[new Date(dateStr).getDay()];
    };

    const weeklySalesTrend = sales.reduce((acc, sale) => {
      const dayOfWeek = getDayOfWeek(sale.date);
      const existing = acc.find(d => d.day === dayOfWeek);
      if (existing) {
        existing.sales += sale.total_amount;
        existing.transactions += 1;
      } else {
        acc.push({ day: dayOfWeek, sales: sale.total_amount, transactions: 1 });
      }
      return acc;
    }, []);

    const daysOrder = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    weeklySalesTrend.sort((a, b) => daysOrder.indexOf(a.day) - daysOrder.indexOf(b.day));

    const averageTransactionValue = dailySalesTrend.map(day => ({
      date: day.date,
      value: day.transactions > 0 ? day.sales / day.transactions : 0
    }));

    return {
      userSalesBreakdown,
      productSalesDistribution,
      dailySalesTrend,
      hourlySalesTrend,
      salesByRole: salesByRoleArray,
      weeklySalesTrend,
      averageTransactionValue
    };
  }, [sales, users]);

  const salesSummary = useMemo(() => {
    if (!sales.length) return {
      totalSales: 0,
      averageSale: 0,
      salesCount: 0,
      topSellingProducts: []
    };

    const totalSales = sales.reduce((sum, sale) => sum + sale.total_amount, 0);
    const averageSale = totalSales / sales.length || 0;
    
    const topSellingProducts = sales.reduce((acc, sale) => {
      sale.products.forEach(product => {
        acc[product.name] = (acc[product.name] || 0) + product.quantity;
      });
      return acc;
    }, {});

    const recentSales = [...sales]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);

    return {
      totalSales,
      averageSale,
      salesCount: sales.length,
      topSellingProducts: Object.entries(topSellingProducts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([name, quantity]) => ({ name, quantity })),
      recentSales
    };
  }, [sales]);

  const processedSales = useMemo(() => {
    return sales.filter(sale => {
      const searchLower = searchTerm.toLowerCase();
      return (
        (sale._id && sale._id.toString().toLowerCase().includes(searchLower)) ||
        (sale.total_amount && sale.total_amount.toString().includes(searchTerm)) ||
        (sale.user_id && users.find(user => user.id === sale.user_id)?.id.toString().includes(searchTerm))
      );
    });
  }, [sales, searchTerm, users]);

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(processedSales);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sales");
    XLSX.writeFile(workbook, "sales_report.xlsx");
  };

  const renderTableRows = () => {
    return processedSales.slice(0, 10).map(sale => {
      const user = users.find(u => u.id === sale.user_id);
      const saleDate = new Date(sale.date);
      
      return (
        <tr className="table-row" key={sale._id}>
          <td className="table-cell">{sale._id}</td>
          <td className="table-cell">
            <span className="badge" style={{ backgroundColor: colors.accent.green }}>
              ${sale.total_amount.toFixed(2)}
            </span>
          </td>
          <td className="table-cell">
            {saleDate.toLocaleDateString()}
            <div style={{ 
              color: colors.text.light, 
              fontSize: '0.7rem', 
              display: 'flex', 
              alignItems: 'center',
              gap: '0.3rem'
            }}>
              <Clock size={12} /> {saleDate.toLocaleTimeString()}
            </div>
          </td>
          <td className="table-cell">
            {sale.products.map(p => `${p.name} (${p.quantity})`).join(', ')}
          </td>
          <td className="table-cell">
            {user ? (user.firstName ? `${user.firstName} ${user.lastName || ''}` : `User ID: ${user.id}`) : "Unknown User"}
            <div style={{ 
              color: colors.text.light, 
              fontSize: '0.7rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}>
              <UserCheck size={12} /> {user?.role || "No Role"}
            </div>
          </td>
        </tr>
      );
    });
  };

  // Overview Tab Components
  const renderSummaryCards = () => (
    <div className="summary-grid">
      <div className="summary-card">
        <DollarSign size={36} color={colors.accent.green} />
        <div>
          <h3>Total Revenue</h3>
          <p style={{ 
            fontWeight: 'bold', 
            fontSize: '1.5rem',
            color: colors.accent.green
          }}>
            ${salesSummary.totalSales.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="summary-card">
        <ShoppingCart size={36} color={colors.primary} />
        <div>
          <h3>Total Orders</h3>
          <p style={{ 
            fontWeight: 'bold', 
            fontSize: '1.5rem',
            color: colors.primary
          }}>
            {salesSummary.salesCount}
          </p>
        </div>
      </div>
      <div className="summary-card">
        <TrendingUp size={36} color={colors.accent.blue} />
        <div>
          <h3>Avg. Sale</h3>
          <p style={{ 
            fontWeight: 'bold', 
            fontSize: '1.5rem',
            color: colors.accent.blue
          }}>
            ${salesSummary.averageSale.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="summary-card">
        <Package size={36} color={colors.accent.orange} />
        <div>
          <h3>Top Product</h3>
          <p style={{ 
            fontWeight: 'bold', 
            fontSize: '1.5rem',
            color: colors.accent.orange
          }}>
            {salesSummary.topSellingProducts[0]?.name || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );

  const renderTopProducts = () => (
    <div className="dashboard-card" style={{ marginTop: '1.5rem' }}>
      <h3 style={{ marginBottom: '1rem', color: colors.text.dark }}>Top Selling Products</h3>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
        {salesAnalysis.productSalesDistribution?.slice(0, 5).map((product, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem',
            borderRadius: '8px',
            background: colors.background,
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: Object.values(colors.accent)[index % 8],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <Tag size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 'bold' }}>{product.name}</div>
                <div style={{ fontSize: '0.8rem', color: colors.text.light }}>{product.sales} units sold</div>
              </div>
            </div>
            <div style={{ fontWeight: 'bold', color: colors.accent.blue }}>${product.revenue.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderRecentSales = () => (
    <div className="dashboard-card" style={{ marginTop: '1.5rem' }}>
      <h3 style={{ marginBottom: '1rem', color: colors.text.dark }}>Recent Sales</h3>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
        {salesSummary.recentSales?.map((sale, index) => {
          const user = users.find(u => u.id === sale.user_id);
          const saleDate = new Date(sale.date);
          
          return (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.75rem',
              borderRadius: '8px',
              background: colors.background,
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: Object.values(colors.accent)[index % 8],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  <ShoppingCart size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Order #{sale._id.slice(-6)}</div>
                  <div style={{ fontSize: '0.8rem', color: colors.text.light }}>
                    {user ? (user.firstName ? `${user.firstName} ${user.lastName || ''}` : `User ${user.id}`) : "Unknown User"}
                  </div>
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 'bold', color: colors.accent.green, textAlign: 'right' }}>
                  ${sale.total_amount.toFixed(2)}
                </div>
                <div style={{ fontSize: '0.8rem', color: colors.text.light, textAlign: 'right' }}>
                  {saleDate.toLocaleDateString()} {saleDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  // Time Analysis Tab Components
  const renderDailySalesTrend = () => (
    <div className="dashboard-card">
      <h3>Daily Sales Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={salesAnalysis.dailySalesTrend}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area 
            type="monotone" 
            dataKey="sales" 
            name="Revenue" 
            stroke={colors.primary} 
            fill={colors.primary}
            fillOpacity={0.3}
            strokeWidth={2}
            animationDuration={1500}
          />
          <Area 
            type="monotone" 
            dataKey="transactions" 
            name="Orders" 
            stroke={colors.accent.orange} 
            fill={colors.accent.orange}
            fillOpacity={0.3}
            strokeWidth={2}
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );

  const renderHourlySalesTrend = () => (
    <div className="dashboard-card" style={{ marginTop: '1.5rem' }}>
      <h3>Hourly Sales Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={salesAnalysis.hourlySalesTrend}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="hour" 
            tickFormatter={(hour) => `${hour}:00`}
          />
          <YAxis />
          <Tooltip 
            formatter={(value, name) => [
              name === 'sales' ? `$${value.toFixed(2)}` : value,
              name === 'sales' ? 'Revenue' : 'Orders'
            ]}
            labelFormatter={(hour) => `${hour}:00 - ${(hour+1) % 24}:00`}
          />
          <Legend />
          <Bar 
            dataKey="sales" 
            name="Revenue" 
            fill={colors.primary} 
            animationBegin={0}
            animationDuration={1500}
          />
          <Bar 
            dataKey="transactions" 
            name="Orders"
            fill={colors.accent.orange} 
            animationBegin={0}
            animationDuration={1500}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const renderWeeklySalesTrend = () => (
    <div className="dashboard-card" style={{ marginTop: '1.5rem' }}>
      <h3>Weekly Sales Pattern</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={salesAnalysis.weeklySalesTrend}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip 
            formatter={(value, name) => [
              name === 'sales' ? `$${value.toFixed(2)}` : value,
              name === 'sales' ? 'Revenue' : 'Orders'
            ]}
          />
          <Legend />
          <Bar 
            dataKey="sales" 
            name="Revenue" 
            fill={colors.accent.blue} 
            animationBegin={0}
            animationDuration={1500}
          />
          <Bar 
            dataKey="transactions" 
            name="Orders"
            fill={colors.accent.purple} 
            animationBegin={0}
            animationDuration={1500}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const renderAverageTransactionValue = () => (
    <div className="dashboard-card" style={{ marginTop: '1.5rem' }}>
      <h3>Average Transaction Value Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={salesAnalysis.averageTransactionValue}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip formatter={(value) => [`$${value.toFixed(2)}`, 'Avg. Transaction']} />
          <Line 
            type="monotone" 
            dataKey="value" 
            name="Avg. Transaction Value" 
            stroke={colors.accent.teal} 
            strokeWidth={2}
            animationDuration={1500}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  // User Analysis Tab Components
  const renderUserSalesChart = () => (
    <div className="dashboard-card">
      <h3>Sales by User</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart 
          data={salesAnalysis.userSalesBreakdown}
          layout="vertical"
          margin={{ left: 120 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis 
            type="category" 
            dataKey="name" 
            width={100}
          />
          <Tooltip formatter={(value) => [`$${value.toFixed(2)}`, 'Total Sales']} />
          <Bar 
            dataKey="sales" 
            name="Revenue"
            fill={colors.primary} 
            animationBegin={0}
            animationDuration={1500}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const renderSalesByRoleChart = () => (
    <div className="dashboard-card" style={{ marginTop: '1.5rem' }}>
      <h3>Sales by User Role</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '48%' }}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={salesAnalysis.salesByRole}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill={colors.primary}
                dataKey="sales"
                nameKey="role"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
              >
                {salesAnalysis.salesByRole?.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={Object.values(colors.accent)[index % 8]} 
                  />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`$${value.toFixed(2)}`, 'Total Sales']} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Revenue by Role</p>
        </div>
        <div style={{ width: '48%' }}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={salesAnalysis.salesByRole}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill={colors.primary}
                dataKey="transactions"
                nameKey="role"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
              >
                {salesAnalysis.salesByRole?.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={Object.values(colors.accent)[index % 8]} 
                  />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [value, 'Number of Orders']} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Orders by Role</p>
        </div>
      </div>
    </div>
  );

  const renderUserPerformanceTable = () => (
    <div className="dashboard-card" style={{ marginTop: '1.5rem' }}>
      <h3>User Performance</h3>
      <table className="advanced-table" style={{ marginTop: '1rem' }}>
        <thead className="table-header">
          <tr>
            <th className="table-header-cell">User</th>
            <th className="table-header-cell">Role</th>
            <th className="table-header-cell">Total Revenue</th>
            <th className="table-header-cell">Orders</th>
            <th className="table-header-cell">Avg. Order Value</th>
          </tr>
        </thead>
        <tbody>
          {salesAnalysis.userSalesBreakdown?.map((user, index) => (
            <tr className="table-row" key={index}>
              <td className="table-cell">{user.name}</td>
              <td className="table-cell">{user.role || 'N/A'}</td>
              <td className="table-cell">
                <span className="badge" style={{ backgroundColor: colors.accent.green }}>
                  ${user.sales.toFixed(2)}
                </span>
              </td>
              <td className="table-cell">{user.transactions}</td>
              <td className="table-cell">
                ${(user.transactions > 0 ? user.sales / user.transactions : 0).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Product Analysis Tab Components
  const renderProductSalesPieChart = () => (
    <div className="dashboard-card">
      <h3>Product Sales Distribution</h3>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={salesAnalysis.productSalesDistribution?.slice(0, 10)}
            cx="50%"
            cy="50%"
            labelLine={true}
            outerRadius={130}
            fill={colors.primary}
            dataKey="sales"
            nameKey="name"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
          >
            {salesAnalysis.productSalesDistribution?.slice(0, 10).map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={Object.values(colors.accent)[index % 8]} 
              />
            ))}
          </Pie>
          <Tooltip formatter={(value, name, props) => [value, 'Units Sold']} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );

  const renderProductRevenueChart = () => (
    <div className="dashboard-card" style={{ marginTop: '1.5rem' }}>
      <h3>Product Revenue Distribution</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart 
          data={salesAnalysis.productSalesDistribution?.slice(0, 10)}
          layout="vertical"
          margin={{ left: 150 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis 
            type="category" 
            dataKey="name" 
            width={140}
          />
          <Tooltip formatter={(value) => [`$${value.toFixed(2)}`, 'Revenue']} />
          <Bar 
            dataKey="revenue" 
            name="Revenue"
            fill={colors.accent.indigo} 
            animationBegin={0}
            animationDuration={1500}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const renderProductTable = () => (
    <div className="dashboard-card" style={{ marginTop: '1.5rem' }}>
      <h3>Product Performance</h3>
      <table className="advanced-table" style={{ marginTop: '1rem' }}>
        <thead className="table-header">
          <tr>
            <th className="table-header-cell">Product</th>
            <th className="table-header-cell">Units Sold</th>
            <th className="table-header-cell">Revenue</th>
            <th className="table-header-cell">Avg. Price</th>
          </tr>
        </thead>
        <tbody>
          {salesAnalysis.productSalesDistribution?.map((product, index) => (
            <tr className="table-row" key={index}>
              <td className="table-cell">{product.name}</td>
              <td className="table-cell">
                <span className="badge" style={{ backgroundColor: colors.accent.green }}>
                  {product.sales}
                </span>
              </td>
              <td className="table-cell">
                <span className="badge" style={{ backgroundColor: colors.accent.blue }}>
                  ${product.revenue.toFixed(2)}
                </span>
              </td>
              <td className="table-cell">
                <span className="badge" style={{ backgroundColor: colors.accent.orange }}>
                  ${(product.revenue / product.sales).toFixed(2)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Tabs for Visualization
  const Tabs = ({ activeTab, setActiveTab }) => {
    const tabs = [
      { id: 'overview', label: 'Overview', icon: <Activity size={18} /> },
      { id: 'time', label: 'Time Analysis', icon: <Calendar size={18} /> },
      { id: 'users', label: 'User Analysis', icon: <Users size={18} /> },
      { id: 'products', label: 'Product Analysis', icon: <Package size={18} /> }
    ];

    return (
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        marginBottom: '1.5rem', 
        borderBottom: `2px solid ${colors.background}` 
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '0.75rem 1.5rem',
              background: activeTab === tab.id ? colors.primary : 'transparent',
              color: activeTab === tab.id ? 'white' : colors.text.dark,
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
              fontWeight: 'bold'
            }}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div style={{ padding: '2rem', background: colors.background, minHeight: '100vh' }}>
      <div style={{ 
        maxWidth: '1600px', 
        margin: '0 auto', 
        background: 'white', 
        borderRadius: '16px', 
        padding: '2rem',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem', 
          marginBottom: '1.5rem', 
          color: colors.text.dark 
        }}>
          <BarChart2 size={32} />
          Sales Analytics Dashboard
        </h1>

        {/* Tabs */}
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <>
            {renderSummaryCards()}
            {renderTopProducts()}
            {renderRecentSales()}
          </>
        )}

        {activeTab === 'time' && (
          <>
            {renderDailySalesTrend()}
            {renderHourlySalesTrend()}
            {renderWeeklySalesTrend()}
            {renderAverageTransactionValue()}
          </>
        )}

        {activeTab === 'users' && (
          <>
            {renderUserSalesChart()}
            {renderSalesByRoleChart()}
            {renderUserPerformanceTable()}
          </>
        )}

        {activeTab === 'products' && (
          <>
            {renderProductSalesPieChart()}
            {renderProductRevenueChart()}
            {renderProductTable()}
          </>
        )}
      </div>
    </div>
  );
};

export default SalesAnalyticsDashboard;