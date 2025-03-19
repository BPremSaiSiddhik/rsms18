// import React, { useState } from 'react';

// const EmployeesSalaryManagement = () => {
//   const [employees, setEmployees] = useState([
//     { id: 1, name: 'John Doe', salaryGiven: true, dateGiven: '2023-10-01' },
//     { id: 2, name: 'Jane Smith', salaryGiven: false, dateGiven: null },
//     { id: 3, name: 'Alice Johnson', salaryGiven: true, dateGiven: '2023-10-05' },
//   ]);

//   const handleSalaryGiven = (id) => {
//     setEmployees((prevEmployees) =>
//       prevEmployees.map((employee) =>
//         employee.id === id
//           ? { ...employee, salaryGiven: true, dateGiven: new Date().toISOString().split('T')[0] }
//           : employee
//       )
//     );
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Employee Salaries Management</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-300">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="py-2 px-4 border-b">Name</th>
//               <th className="py-2 px-4 border-b">Salary Status</th>
//               <th className="py-2 px-4 border-b">Date Given</th>
//               <th className="py-2 px-4 border-b">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((employee) => (
//               <tr key={employee.id} className="hover:bg-gray-50">
//                 <td className="py-2 px-4 border-b">{employee.name}</td>
//                 <td className="py-2 px-4 border-b">
//                   {employee.salaryGiven ? (
//                     <span className="text-green-600">Given</span>
//                   ) : (
//                     <span className="text-red-600">Not Given</span>
//                   )}
//                 </td>
//                 <td className="py-2 px-4 border-b">
//                   {employee.dateGiven || 'N/A'}
//                 </td>
//                 <td className="py-2 px-4 border-b">
//                   {!employee.salaryGiven && (
//                     <button
//                       onClick={() => handleSalaryGiven(employee.id)}
//                       className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//                     >
//                       Mark as Given
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default EmployeesSalaryManagement;

import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const EmployeeSalaryManagement = () => {
  // States
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newEmployee, setNewEmployee] = useState({ 
    name: '', 
    position: '', 
    salary: '',
    email: '',
    phone: '' 
  });
  const [editMode, setEditMode] = useState(false);
  const [editEmployeeId, setEditEmployeeId] = useState(null);
  const [filterPaid, setFilterPaid] = useState('all');
  const [salaryPayments, setSalaryPayments] = useState({});
  
  // Get storeId from localStorage
  const storeId = localStorage.getItem("storeId");
  const API_URL = "http://localhost:5004";
  
  // Fetch employees when component mounts
  useEffect(() => {
    fetchEmployees();
  }, []);
  
  // Fetch employees from the backend
  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/employees`, {
        headers: {
          'storeId': storeId
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }
      
      const data = await response.json();
      
      // Initialize salary payment status
      const paymentStatus = {};
      data.forEach(emp => {
        paymentStatus[emp._id] = {
          paid: emp.salaryPaid === 'true' || false,
          paymentDate: emp.paymentDate || null
        };
      });
      
      setSalaryPayments(paymentStatus);
      setEmployees(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching employees:', error);
      setLoading(false);
    }
  };
  
  // Handle input change for new employee
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({
      ...newEmployee,
      [name]: name === 'salary' ? (value === '' ? '' : value) : value
    });
  };
  
  // Add new employee
  const handleAddEmployee = async (e) => {
    e.preventDefault();
    if (!newEmployee.name || !newEmployee.position || !newEmployee.salary) return;
    
    try {
      const formData = new FormData();
      Object.keys(newEmployee).forEach(key => {
        formData.append(key, newEmployee[key]);
      });
      
      // Add salary payment status as false by default
      formData.append('salaryPaid', 'false');
      formData.append('paymentDate', '');
      
      const response = await fetch(`${API_URL}/employees`, {
        method: 'POST',
        headers: {
          'storeId': storeId
        },
        body: formData
      });
      
      if (!response.ok) {
        throw new Error('Failed to add employee');
      }
      
      const data = await response.json();
      
      // Update employees list and reset form
      setEmployees([...employees, data]);
      setSalaryPayments({
        ...salaryPayments,
        [data._id]: { paid: false, paymentDate: null }
      });
      setNewEmployee({ name: '', position: '', salary: '', email: '', phone: '' });
      toast.success('Employee added successfully!');
    } catch (error) {
      console.error('Error adding employee:', error);
      toast.error('Failed to add employee');
    }
  };
  
  // Start editing an employee
  const handleEditStart = (employee) => {
    setEditMode(true);
    setEditEmployeeId(employee._id);
    setNewEmployee({
      name: employee.name,
      position: employee.position,
      salary: employee.salary,
      email: employee.email || '',
      phone: employee.phone || ''
    });
  };
  
  // Save edited employee
  const handleEditSave = async (e) => {
    e.preventDefault();
    if (!newEmployee.name || !newEmployee.position || !newEmployee.salary) return;
    
    try {
      const formData = new FormData();
      Object.keys(newEmployee).forEach(key => {
        formData.append(key, newEmployee[key]);
      });
      
      // Preserve existing image if any
      const employee = employees.find(emp => emp._id === editEmployeeId);
      if (employee.image) {
        formData.append('existingImage', employee.image);
      }
      
      const response = await fetch(`${API_URL}/employees/${editEmployeeId}`, {
        method: 'PUT',
        headers: {
          'storeId': storeId
        },
        body: formData
      });
      
      if (!response.ok) {
        throw new Error('Failed to update employee');
      }
      
      // Update the employee in the local state
      setEmployees(employees.map(emp => 
        emp._id === editEmployeeId 
          ? { ...emp, ...newEmployee } 
          : emp
      ));
      
      setEditMode(false);
      setEditEmployeeId(null);
      setNewEmployee({ name: '', position: '', salary: '', email: '', phone: '' });
      toast.success('Employee updated successfully!');
    } catch (error) {
      console.error('Error updating employee:', error);
      toast.error('Failed to update employee');
    }
  };
  
  // Cancel editing
  const handleEditCancel = () => {
    setEditMode(false);
    setEditEmployeeId(null);
    setNewEmployee({ name: '', position: '', salary: '', email: '', phone: '' });
  };
  
  // Delete employee
  const handleDeleteEmployee = async (id) => {
    try {
      const response = await fetch(`${API_URL}/employees/${id}`, {
        method: 'DELETE',
        headers: {
          'storeId': storeId
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete employee');
      }
      
      // Update local state
      setEmployees(employees.filter(emp => emp._id !== id));
      
      // Remove from salary payments state
      const updatedPayments = { ...salaryPayments };
      delete updatedPayments[id];
      setSalaryPayments(updatedPayments);
      
      toast.success('Employee deleted successfully!');
    } catch (error) {
      console.error('Error deleting employee:', error);
      toast.error('Failed to delete employee');
    }
  };
  
  // Handle marking payment as complete
  const handlePaymentToggle = async (id) => {
    try {
      const isPaid = !salaryPayments[id]?.paid;
      const paymentDate = isPaid ? new Date().toISOString().split('T')[0] : null;
      
      // Update on the backend
      const formData = new FormData();
      formData.append('salaryPaid', isPaid.toString());
      formData.append('paymentDate', paymentDate || '');
      
      const response = await fetch(`${API_URL}/employees/${id}`, {
        method: 'PUT',
        headers: {
          'storeId': storeId
        },
        body: formData
      });
      
      if (!response.ok) {
        throw new Error('Failed to update payment status');
      }
      
      // Update local state
      setSalaryPayments({
        ...salaryPayments,
        [id]: { paid: isPaid, paymentDate }
      });
      
      toast.success(`Salary marked as ${isPaid ? 'paid' : 'unpaid'}`);
    } catch (error) {
      console.error('Error updating payment status:', error);
      toast.error('Failed to update payment status');
    }
  };
  
  // Filter employees based on payment status
  const filteredEmployees = employees.filter(emp => {
    if (filterPaid === 'all') return true;
    if (filterPaid === 'paid') return salaryPayments[emp._id]?.paid;
    if (filterPaid === 'unpaid') return !salaryPayments[emp._id]?.paid;
    return true;
  });
  
  // Calculate statistics
  const totalSalaries = employees.reduce((sum, emp) => sum + parseFloat(emp.salary || 0), 0);
  const paidSalaries = employees
    .filter(emp => salaryPayments[emp._id]?.paid)
    .reduce((sum, emp) => sum + parseFloat(emp.salary || 0), 0);
  const unpaidSalaries = totalSalaries - paidSalaries;
  const paidCount = employees.filter(emp => salaryPayments[emp._id]?.paid).length;
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-2xl font-bold mb-6">Retail Store Employee Salary Management</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded shadow">
          <h3 className="font-semibold text-blue-800">Total Employees</h3>
          <p className="text-2xl">{employees.length}</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <h3 className="font-semibold text-green-800">Total Salaries</h3>
          <p className="text-2xl">${totalSalaries.toLocaleString()}</p>
        </div>
        <div className="bg-emerald-100 p-4 rounded shadow">
          <h3 className="font-semibold text-emerald-800">Paid Salaries</h3>
          <p className="text-2xl">${paidSalaries.toLocaleString()} ({paidCount} employees)</p>
        </div>
        <div className="bg-amber-100 p-4 rounded shadow">
          <h3 className="font-semibold text-amber-800">Pending Salaries</h3>
          <p className="text-2xl">${unpaidSalaries.toLocaleString()} ({employees.length - paidCount} employees)</p>
        </div>
      </div>
      
      {/* Employee Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">{editMode ? 'Edit Employee' : 'Add New Employee'}</h2>
        <form onSubmit={editMode ? handleEditSave : handleAddEmployee} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={newEmployee.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
            <input
              type="text"
              name="position"
              value={newEmployee.position}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
              placeholder="Job Position"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Salary ($)</label>
            <input
              type="number"
              name="salary"
              value={newEmployee.salary}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
              placeholder="Monthly Salary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={newEmployee.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
              placeholder="Email Address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={newEmployee.phone}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
              placeholder="Phone Number"
            />
          </div>
          <div className="flex items-end gap-2">
            <button 
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              {editMode ? 'Update Employee' : 'Add Employee'}
            </button>
            {editMode && (
              <button 
                type="button"
                onClick={handleEditCancel}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
      
      {/* Employee List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Employee List</h2>
          <div className="flex items-center">
            <label className="mr-2 text-sm font-medium text-gray-700">Filter:</label>
            <select 
              value={filterPaid} 
              onChange={(e) => setFilterPaid(e.target.value)}
              className="p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Employees</option>
              <option value="paid">Paid</option>
              <option value="unpaid">Unpaid</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salary</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredEmployees.map(employee => (
                <tr key={employee._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {employee.image && (
                        <img 
                          src={`${API_URL}/uploads/${employee.image}`} 
                          alt={employee.name}
                          className="h-10 w-10 rounded-full mr-3 object-cover"
                        />
                      )}
                      <div>
                        <div className="font-medium text-gray-900">{employee.name}</div>
                        <div className="text-sm text-gray-500">{employee.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{employee.position}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium">${parseFloat(employee.salary || 0).toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button 
                      onClick={() => handlePaymentToggle(employee._id)}
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        salaryPayments[employee._id]?.paid 
                          ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                          : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                      }`}
                    >
                      {salaryPayments[employee._id]?.paid ? 'Paid' : 'Unpaid'}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {salaryPayments[employee._id]?.paymentDate || '-'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleEditStart(employee)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDeleteEmployee(employee._id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredEmployees.length === 0 && (
            <div className="text-center py-4 text-gray-500">
              No employees found with the selected filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeSalaryManagement;