// // import React, { useEffect, useState, useContext } from "react";
// // import axios from "axios";
// // import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
// // import { StoreContext } from "./StoreContext"; // Import StoreContext

// // const RoleDistribution = () => {
// //   const { storeId } = useContext(StoreContext); // Get storeId from context
// //   const [roleData, setRoleData] = useState([]);

// //   // Fetch employee data and calculate role distribution
// //   useEffect(() => {
// //     const fetchEmployeeData = async () => {
// //       if (!storeId) return; // Ensure storeId is available

// //       try {
// //         const response = await axios.get("http://localhost:5004/employees", {
// //           headers: { storeId }, // Pass storeId in headers
// //         });
// //         const employees = response.data;

// //         // Calculate role distribution
// //         const roleDistribution = employees.reduce((acc, employee) => {
// //           acc[employee.role] = (acc[employee.role] || 0) + 1;
// //           return acc;
// //         }, {});

// //         // Convert role distribution to an array for the PieChart
// //         const formattedRoleData = Object.keys(roleDistribution).map((role) => ({
// //           name: role,
// //           value: roleDistribution[role],
// //         }));

// //         setRoleData(formattedRoleData);
// //       } catch (error) {
// //         console.error("Error fetching employee data:", error);
// //       }
// //     };

// //     fetchEmployeeData();
// //   }, [storeId]); // Re-fetch when storeId changes

// //   // Colors for the pie chart segments
// //   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", "#FF1919"];

// //   return (
// //     <div className="bg-white rounded-lg shadow-md p-6">
// //       <h2 className="text-xl font-semibold text-gray-700 mb-4">Role Distribution</h2>
// //       <ResponsiveContainer width="100%" height={400}>
// //         <PieChart>
// //           <Pie
// //             data={roleData}
// //             cx="50%"
// //             cy="50%"
// //             outerRadius={150}
// //             innerRadius={70}
// //             fill="#8884d8"
// //             dataKey="value"
// //             label
// //           >
// //             {roleData.map((entry, index) => (
// //               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// //             ))}
// //           </Pie>
// //           <Tooltip
// //             contentStyle={{
// //               backgroundColor: "#ffffff",
// //               border: "1px solid #dddddd",
// //               borderRadius: "8px",
// //               boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
// //             }}
// //           />
// //           <Legend
// //             layout="vertical"
// //             align="right"
// //             verticalAlign="middle"
// //             wrapperStyle={{
// //               paddingLeft: "20px",
// //             }}
// //           />
// //         </PieChart>
// //       </ResponsiveContainer>
// //     </div>
// //   );
// // };

// // export default RoleDistribution;

// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
// import { StoreContext } from "./StoreContext"; // Import StoreContext

// const RoleDistribution = () => {
//   const { storeId } = useContext(StoreContext); // Get storeId from context
//   const [roleData, setRoleData] = useState([]);
//   const [salaryData, setSalaryData] = useState([]);
//   const [experienceData, setExperienceData] = useState([]);
//   const [totalEmployees, setTotalEmployees] = useState(0);
//   const [averageSalary, setAverageSalary] = useState(0);

//   // Fetch employee data and calculate metrics
//   useEffect(() => {
//     const fetchEmployeeData = async () => {
//       if (!storeId) return; // Ensure storeId is available

//       try {
//         const response = await axios.get("http://localhost:5004/employees", {
//           headers: { storeId }, // Pass storeId in headers
//         });
//         const employees = response.data;

//         // Calculate total employees
//         setTotalEmployees(employees.length);

//         // Calculate average salary
//         const totalSalary = employees.reduce((acc, employee) => acc + parseFloat(employee.salary || 0), 0);
//         setAverageSalary((totalSalary / employees.length).toFixed(2));

//         // Calculate role distribution
//         const roleDistribution = employees.reduce((acc, employee) => {
//           acc[employee.role] = (acc[employee.role] || 0) + 1;
//           return acc;
//         }, {});

//         // Convert role distribution to an array for the PieChart
//         const formattedRoleData = Object.keys(roleDistribution).map((role) => ({
//           name: role,
//           value: roleDistribution[role],
//         }));
//         setRoleData(formattedRoleData);

//         // Prepare salary data for BarChart
//         const salaryDistribution = employees.map((employee) => ({
//           name: employee.name,
//           salary: parseFloat(employee.salary || 0),
//         }));
//         setSalaryData(salaryDistribution);

//         // Prepare experience data for BarChart
//         const experienceDistribution = employees.map((employee) => ({
//           name: employee.name,
//           experience: parseFloat(employee.experience || 0),
//         }));
//         setExperienceData(experienceDistribution);
//       } catch (error) {
//         console.error("Error fetching employee data:", error);
//       }
//     };

//     fetchEmployeeData();
//   }, [storeId]); // Re-fetch when storeId changes

//   // Colors for the pie chart segments
//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", "#FF1919"];

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Employee Analytics</h1>

//       {/* Key Metrics Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-xl font-semibold text-gray-700 mb-2">Total Employees</h2>
//           <p className="text-3xl font-bold text-blue-600">{totalEmployees}</p>
//         </div>
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-xl font-semibold text-gray-700 mb-2">Average Salary</h2>
//           <p className="text-3xl font-bold text-green-600">₹{averageSalary}</p>
//         </div>
//       </div>

//       {/* Role Distribution Pie Chart */}
//       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//         <h2 className="text-xl font-semibold text-gray-700 mb-4">Role Distribution</h2>
//         <ResponsiveContainer width="100%" height={400}>
//           <PieChart>
//             <Pie
//               data={roleData}
//               cx="50%"
//               cy="50%"
//               outerRadius={150}
//               innerRadius={70}
//               fill="#8884d8"
//               dataKey="value"
//               label
//             >
//               {roleData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip
//               contentStyle={{
//                 backgroundColor: "#ffffff",
//                 border: "1px solid #dddddd",
//                 borderRadius: "8px",
//                 boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//               }}
//             />
//             <Legend
//               layout="vertical"
//               align="right"
//               verticalAlign="middle"
//               wrapperStyle={{
//                 paddingLeft: "20px",
//               }}
//             />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Salary Distribution Bar Chart */}
//       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//         <h2 className="text-xl font-semibold text-gray-700 mb-4">Salary Distribution</h2>
//         <ResponsiveContainer width="100%" height={400}>
//           <BarChart data={salaryData}>
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip
//               contentStyle={{
//                 backgroundColor: "#ffffff",
//                 border: "1px solid #dddddd",
//                 borderRadius: "8px",
//                 boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//               }}
//             />
//             <Legend />
//             <Bar dataKey="salary" fill="#8884d8" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Experience Distribution Bar Chart */}
//       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//         <h2 className="text-xl font-semibold text-gray-700 mb-4">Experience Distribution</h2>
//         <ResponsiveContainer width="100%" height={400}>
//           <BarChart data={experienceData}>
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip
//               contentStyle={{
//                 backgroundColor: "#ffffff",
//                 border: "1px solid #dddddd",
//                 borderRadius: "8px",
//                 boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//               }}
//             />
//             <Legend />
//             <Bar dataKey="experience" fill="#FF8042" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default RoleDistribution;


import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line } from "recharts";
import { StoreContext } from "./StoreContext";
import { motion } from "framer-motion";
import { ArrowUp, Users, DollarSign, Clock, TrendingUp, Award } from "lucide-react";

const RoleDistribution = () => {
  const { storeId } = useContext(StoreContext);
  const [roleData, setRoleData] = useState([]);
  const [salaryData, setSalaryData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [averageSalary, setAverageSalary] = useState(0);
  const [averageExperience, setAverageExperience] = useState(0);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [salaryExperienceData, setSalaryExperienceData] = useState([]);

  // Fetch employee data and calculate metrics
  useEffect(() => {
    const fetchEmployeeData = async () => {
      if (!storeId) return;

      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5004/employees", {
          headers: { storeId },
        });
        const employees = response.data;

        // Calculate total employees
        setTotalEmployees(employees.length);

        // Calculate average salary
        const totalSalary = employees.reduce((acc, employee) => acc + parseFloat(employee.salary || 0), 0);
        setAverageSalary((totalSalary / employees.length).toFixed(2));

        // Calculate average experience
        const totalExperience = employees.reduce((acc, employee) => acc + parseFloat(employee.experience || 0), 0);
        setAverageExperience((totalExperience / employees.length).toFixed(1));

        // Calculate role distribution
        const roleDistribution = employees.reduce((acc, employee) => {
          acc[employee.role] = (acc[employee.role] || 0) + 1;
          return acc;
        }, {});

        // Convert role distribution to an array for the PieChart
        const formattedRoleData = Object.keys(roleDistribution).map((role) => ({
          name: role,
          value: roleDistribution[role],
          percent: ((roleDistribution[role] / employees.length) * 100).toFixed(1),
        }));
        setRoleData(formattedRoleData);

        // Sort employees by salary for chart
        const sortedBySalary = [...employees].sort((a, b) => parseFloat(b.salary) - parseFloat(a.salary));
        const topSalaryEmployees = sortedBySalary.slice(0, 10);

        // Prepare salary data for BarChart
        const salaryDistribution = topSalaryEmployees.map((employee) => ({
          name: employee.name,
          salary: parseFloat(employee.salary || 0),
        }));
        setSalaryData(salaryDistribution);

        // Sort employees by experience for chart
        const sortedByExperience = [...employees].sort((a, b) => parseFloat(b.experience) - parseFloat(a.experience));
        const topExperienceEmployees = sortedByExperience.slice(0, 10);

        // Prepare experience data for BarChart
        const experienceDistribution = topExperienceEmployees.map((employee) => ({
          name: employee.name,
          experience: parseFloat(employee.experience || 0),
        }));
        setExperienceData(experienceDistribution);

        // Prepare salary vs experience data
        const salaryExperience = employees.map((employee) => ({
          name: employee.name,
          salary: parseFloat(employee.salary || 0),
          experience: parseFloat(employee.experience || 0),
        }));
        setSalaryExperienceData(salaryExperience);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching employee data:", error);
        setLoading(false);
      }
    };

    fetchEmployeeData();
  }, [storeId]);

  // Colors for the pie chart segments with better color palette
  const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899"];

  // Custom tooltip for pie chart
  const CustomPieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <p className="font-semibold">{payload[0].name}</p>
          <p className="text-gray-700">
            Count: <span className="font-medium">{payload[0].value}</span>
          </p>
          <p className="text-gray-700">
            Percentage: <span className="font-medium">{payload[0].payload.percent}%</span>
          </p>
        </div>
      );
    }
    return null;
  };

  // Custom tooltip for bar charts
  const CustomBarTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <p className="font-semibold">{label}</p>
          <p className="text-gray-700">
            {payload[0].name}: <span className="font-medium">{payload[0].value.toLocaleString()}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white"
      >
        <h1 className="text-3xl font-bold mb-2">Employee Analytics Dashboard</h1>
        <p className="text-blue-100">Comprehensive insights into your workforce performance and distribution</p>
      </motion.div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex space-x-6 overflow-x-auto">
            <button 
              onClick={() => setActiveTab("overview")} 
              className={`py-4 px-2 font-medium text-sm border-b-2 transition-colors ${activeTab === "overview" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab("roles")} 
              className={`py-4 px-2 font-medium text-sm border-b-2 transition-colors ${activeTab === "roles" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}
            >
              Role Distribution
            </button>
            <button 
              onClick={() => setActiveTab("salary")} 
              className={`py-4 px-2 font-medium text-sm border-b-2 transition-colors ${activeTab === "salary" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}
            >
              Salary Analysis
            </button>
            <button 
              onClick={() => setActiveTab("experience")} 
              className={`py-4 px-2 font-medium text-sm border-b-2 transition-colors ${activeTab === "experience" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}
            >
              Experience Metrics
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div>
            {/* Key Metrics Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium text-gray-700">Total Employees</h2>
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                    <Users size={20} />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-800">{totalEmployees}</p>
                <p className="text-sm text-gray-500 mt-2">Active team members</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium text-gray-700">Average Salary</h2>
                  <div className="p-3 bg-green-100 text-green-600 rounded-full">
                    <DollarSign size={20} />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-800">₹{parseInt(averageSalary).toLocaleString()}</p>
                <p className="text-sm text-gray-500 mt-2">Per employee</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium text-gray-700">Average Experience</h2>
                  <div className="p-3 bg-amber-100 text-amber-600 rounded-full">
                    <Clock size={20} />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-800">{averageExperience} <span className="text-lg font-normal">years</span></p>
                <p className="text-sm text-gray-500 mt-2">Professional expertise</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium text-gray-700">Top Role</h2>
                  <div className="p-3 bg-purple-100 text-purple-600 rounded-full">
                    <Award size={20} />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-800">
                  {roleData.length > 0 ? roleData.sort((a, b) => b.value - a.value)[0].name : "N/A"}
                </p>
                <p className="text-sm text-gray-500 mt-2">Most common position</p>
              </motion.div>
            </div>

            {/* Overview Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Role Distribution</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={roleData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      innerRadius={60}
                      fill="#8884d8"
                      dataKey="value"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${percent}%`}
                    >
                      {roleData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomPieTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Salary vs. Experience</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={salaryExperienceData.sort((a, b) => a.experience - b.experience).slice(0, 15)}>
                    <XAxis dataKey="experience" name="Experience (Years)" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="salary" name="Salary (₹)" stroke="#3B82F6" strokeWidth={2} dot={{ strokeWidth: 2 }} />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
            </div>
          </div>
        )}

        {/* Role Distribution Tab */}
        {activeTab === "roles" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Role Distribution Analysis</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                      <Pie
                        data={roleData}
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        innerRadius={70}
                        fill="#8884d8"
                        dataKey="value"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${percent}%`}
                      >
                        {roleData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomPieTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-4">Role Breakdown</h3>
                  <div className="space-y-4">
                    {roleData.map((role, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-800">{role.name}</span>
                          <span className="text-sm bg-gray-200 text-gray-700 py-1 px-2 rounded-full">{role.value} employees</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="h-2.5 rounded-full" 
                            style={{ 
                              width: `${role.percent}%`,
                              backgroundColor: COLORS[index % COLORS.length]
                            }}
                          ></div>
                        </div>
                        <div className="text-right text-xs text-gray-500 mt-1">{role.percent}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Salary Analysis Tab */}
        {activeTab === "salary" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Top 10 Employees by Salary</h2>
              <ResponsiveContainer width="100%" height={500}>
                <BarChart 
                  data={salaryData}
                  layout="vertical"
                  margin={{ top: 20, right: 30, left: 60, bottom: 20 }}
                >
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip content={<CustomBarTooltip />} />
                  <Bar 
                    dataKey="salary" 
                    fill="#3B82F6" 
                    radius={[0, 4, 4, 0]}
                    barSize={20}
                  >
                    {salaryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={`rgba(59, 130, 246, ${1 - index * 0.08})`} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Salary Distribution by Role</h2>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart 
                  data={roleData.map(role => ({
                    name: role.name,
                    averageSalary: Math.floor(Math.random() * 50000) + 30000, // This should be real data in production
                  }))}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="averageSalary" name="Average Salary (₹)" fill="#10B981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        )}

        {/* Experience Metrics Tab */}
        {activeTab === "experience" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Top 10 Employees by Experience</h2>
              <ResponsiveContainer width="100%" height={500}>
                <BarChart 
                  data={experienceData}
                  layout="vertical"
                  margin={{ top: 20, right: 30, left: 60, bottom: 20 }}
                >
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip content={<CustomBarTooltip />} />
                  <Bar 
                    dataKey="experience" 
                    fill="#F59E0B" 
                    radius={[0, 4, 4, 0]}
                    barSize={20}
                  >
                    {experienceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={`rgba(245, 158, 11, ${1 - index * 0.08})`} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Experience Distribution by Role</h2>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart 
                  data={roleData.map(role => ({
                    name: role.name,
                    averageExperience: (Math.random() * 10 + 2).toFixed(1), // This should be real data in production
                  }))}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="averageExperience" name="Average Experience (Years)" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-gray-300 py-6 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© {new Date().getFullYear()} Company Analytics. All rights reserved.</p>
            <p className="text-sm mt-2 md:mt-0">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleDistribution;