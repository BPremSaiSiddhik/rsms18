import React, { useState, useEffect } from 'react';
import { Plus, Check, AlertCircle, ChevronDown, Calendar, DollarSign } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

const ExpenseTracker = () => {
  const [formData, setFormData] = useState({
    category: '',
    description: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    status: 'pending'
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [expenseCategories, setExpenseCategories] = useState([
    'Rent', 'Utilities', 'Inventory', 'Salary', 'Marketing', 
    'Equipment', 'Maintenance', 'Insurance', 'Taxes', 'Other'
  ]);
  const [recentExpenses, setRecentExpenses] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    fetchRecentExpenses();
  }, []);

  const fetchRecentExpenses = async () => {
    try {
      const storeId = localStorage.getItem('storeId');
      const response = await fetch(`http://localhost:5022/api/expenses?storeId=${storeId}&limit=5`);
      const data = await response.json();
      if (data.success) {
        setRecentExpenses(data.expenses);
      }
    } catch (error) {
      console.error('Error fetching recent expenses:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'amount' ? value.replace(/[^0-9.]/g, '') : value
    }));
  };

  const selectCategory = (category) => {
    setFormData(prev => ({ ...prev, category }));
    setShowDropdown(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    
    // Validation
    if (!formData.category || !formData.description || !formData.amount || !formData.date) {
      setError('Please fill in all required fields');
      return;
    }

    try {
      setLoading(true);
      const storeId = localStorage.getItem('storeId');
      const userId = localStorage.getItem('userId');
      
      if (!storeId || !userId) {
        setError('Store ID or User ID not found. Please login again.');
        setLoading(false);
        return;
      }

      const expenseData = {
        ...formData,
        storeId,
        userId,
        expenseId: uuidv4(),
        amount: parseFloat(formData.amount)
      };

      const response = await fetch('http://localhost:5022/api/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(expenseData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setFormData({
          category: '',
          description: '',
          amount: '',
          date: new Date().toISOString().split('T')[0],
          status: 'pending'
        });
        fetchRecentExpenses();
        
        // Reset success message after 3 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      } else {
        setError(data.message || 'Error adding expense');
      }
    } catch (error) {
      setError('Server error. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Expense Form */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Record New Expense</h2>
          
          {error && (
            <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-center animate-fadeIn">
              <AlertCircle className="w-5 h-5 mr-2" />
              <p>{error}</p>
            </div>
          )}
          
          {success && (
            <div className="mb-4 p-3 bg-green-50 border-l-4 border-green-500 text-green-700 flex items-center animate-fadeIn">
              <Check className="w-5 h-5 mr-2" />
              <p>Expense recorded successfully!</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Category Dropdown */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
              <div 
                className="flex items-center justify-between w-full p-3 border rounded-lg bg-white cursor-pointer hover:bg-gray-50 transition"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <span className={formData.category ? 'text-gray-900' : 'text-gray-400'}>
                  {formData.category || 'Select expense category'}
                </span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>
              
              {showDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto animate-fadeIn">
                  {expenseCategories.map((category) => (
                    <div 
                      key={category}
                      className="p-3 hover:bg-blue-50 cursor-pointer transition"
                      onClick={() => selectCategory(category)}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Enter expense details"
                rows="3"
              />
            </div>
            
            {/* Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Amount *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="0.00"
                />
              </div>
            </div>
            
            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full p-3 rounded-lg font-medium text-white transition-all duration-300 transform 
                ${loading 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 hover:shadow-md active:scale-95'}`}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Plus className="w-5 h-5 mr-2" />
                  Record Expense
                </span>
              )}
            </button>
          </form>
        </div>
        
        {/* Recent Expenses */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Expenses</h2>
          
          {recentExpenses.length > 0 ? (
            <div className="space-y-4">
              {recentExpenses.map((expense) => (
                <div 
                  key={expense.expenseId}
                  className="p-4 border rounded-lg hover:shadow-md transition-all duration-200 bg-gradient-to-r from-white to-gray-50"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 mb-2">
                        {expense.category}
                      </span>
                      <h3 className="font-medium text-gray-900">{expense.description}</h3>
                      <p className="text-sm text-gray-500">
                        {new Date(expense.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      ${expense.amount.toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>No recent expenses found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;