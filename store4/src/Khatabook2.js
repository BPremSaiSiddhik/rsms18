// // // // // // // // import React, { useState, useEffect } from "react";

// // // // // // // // const KhatabookPage = () => {
// // // // // // // //   const [customers, setCustomers] = useState([]); // List of customers
// // // // // // // //   const [selectedCustomer, setSelectedCustomer] = useState(null); // Selected customer
// // // // // // // //   const [transactions, setTransactions] = useState([]); // Customer transactions
// // // // // // // //   const [customerBalance, setCustomerBalance] = useState(0); // Customer balance
// // // // // // // //   const [newTransaction, setNewTransaction] = useState({
// // // // // // // //     type: "credit", // 'credit' or 'debit'
// // // // // // // //     amount: "",
// // // // // // // //     notes: "",
// // // // // // // //   });
// // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // //   const [error, setError] = useState(null);

// // // // // // // //   const storeId = localStorage.getItem("storeId"); // Get storeId from localStorage

// // // // // // // //   // Fetch all customers
// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchCustomers = async () => {
// // // // // // // //       try {
// // // // // // // //         const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}`);
// // // // // // // //         if (!response.ok) {
// // // // // // // //           throw new Error("Failed to fetch customers");
// // // // // // // //         }
// // // // // // // //         const data = await response.json();
// // // // // // // //         setCustomers(data.customers);
// // // // // // // //       } catch (error) {
// // // // // // // //         setError("Failed to fetch customers");
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     if (storeId) {
// // // // // // // //       fetchCustomers();
// // // // // // // //     } else {
// // // // // // // //       setError("Store ID not found in localStorage.");
// // // // // // // //     }
// // // // // // // //   }, [storeId]);

// // // // // // // //   // Fetch customer transactions and balance
// // // // // // // //   useEffect(() => {
// // // // // // // //     if (selectedCustomer) {
// // // // // // // //       const fetchCustomerDetails = async () => {
// // // // // // // //         setLoading(true);
// // // // // // // //         try {
// // // // // // // //           // Fetch transactions
// // // // // // // //           const transactionsResponse = await fetch(
// // // // // // // //             `http://localhost:5002/api/khatabook/transactions?customerPhone=${selectedCustomer.phone}&storeId=${storeId}`
// // // // // // // //           );
// // // // // // // //           if (!transactionsResponse.ok) {
// // // // // // // //             throw new Error("Failed to fetch transactions");
// // // // // // // //           }
// // // // // // // //           const transactionsData = await transactionsResponse.json();
// // // // // // // //           setTransactions(transactionsData.transactions);

// // // // // // // //           // Fetch balance
// // // // // // // //           const balanceResponse = await fetch(
// // // // // // // //             `http://localhost:5002/api/khatabook/customers/${selectedCustomer.phone}/balance`,
// // // // // // // //             { headers: { storeId } }
// // // // // // // //           );
// // // // // // // //           if (!balanceResponse.ok) {
// // // // // // // //             throw new Error("Failed to fetch balance");
// // // // // // // //           }
// // // // // // // //           const balanceData = await balanceResponse.json();
// // // // // // // //           setCustomerBalance(balanceData.balance);
// // // // // // // //         } catch (error) {
// // // // // // // //           setError("Failed to fetch customer details");
// // // // // // // //         } finally {
// // // // // // // //           setLoading(false);
// // // // // // // //         }
// // // // // // // //       };

// // // // // // // //       fetchCustomerDetails();
// // // // // // // //     }
// // // // // // // //   }, [selectedCustomer, storeId]);

// // // // // // // //   // Handle adding a new transaction
// // // // // // // //   const handleAddTransaction = async () => {
// // // // // // // //     if (!selectedCustomer || !newTransaction.amount) {
// // // // // // // //       setError("Please select a customer and enter an amount.");
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     const transactionData = {
// // // // // // // //       customerPhone: selectedCustomer.phone,
// // // // // // // //       type: newTransaction.type,
// // // // // // // //       amount: parseFloat(newTransaction.amount),
// // // // // // // //       notes: newTransaction.notes,
// // // // // // // //     };

// // // // // // // //     try {
// // // // // // // //       const response = await fetch("http://localhost:5002/api/khatabook/transactions", {
// // // // // // // //         method: "POST",
// // // // // // // //         headers: {
// // // // // // // //           "Content-Type": "application/json",
// // // // // // // //           storeId,
// // // // // // // //         },
// // // // // // // //         body: JSON.stringify(transactionData),
// // // // // // // //       });

// // // // // // // //       if (!response.ok) {
// // // // // // // //         throw new Error("Failed to add transaction");
// // // // // // // //       }

// // // // // // // //       // Refresh transactions and balance
// // // // // // // //       const updatedTransactions = await fetch(
// // // // // // // //         `http://localhost:5002/api/khatabook/transactions?customerPhone=${selectedCustomer.phone}&storeId=${storeId}`
// // // // // // // //       ).then((res) => res.json());
// // // // // // // //       setTransactions(updatedTransactions.transactions);

// // // // // // // //       const updatedBalance = await fetch(
// // // // // // // //         `http://localhost:5002/api/khatabook/customers/${selectedCustomer.phone}/balance`,
// // // // // // // //         { headers: { storeId } }
// // // // // // // //       ).then((res) => res.json());
// // // // // // // //       setCustomerBalance(updatedBalance.balance);

// // // // // // // //       // Reset form
// // // // // // // //       setNewTransaction({ type: "credit", amount: "", notes: "" });
// // // // // // // //     } catch (error) {
// // // // // // // //       setError("Failed to add transaction");
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="bg-white p-6 rounded-lg shadow-md">
// // // // // // // //       <h2 className="text-xl font-semibold mb-4">Khatabook</h2>

// // // // // // // //       {/* Error Message */}
// // // // // // // //       {error && (
// // // // // // // //         <div className="mb-4 p-4 bg-red-100 text-red-600 rounded-lg">
// // // // // // // //           {error}
// // // // // // // //         </div>
// // // // // // // //       )}

// // // // // // // //       {/* Customer Selection */}
// // // // // // // //       <div className="mb-4">
// // // // // // // //         <label className="block text-sm font-medium text-gray-700 mb-1">Select Customer:</label>
// // // // // // // //         <select
// // // // // // // //           value={selectedCustomer ? selectedCustomer.phone : ""}
// // // // // // // //           onChange={(e) => {
// // // // // // // //             const customer = customers.find((c) => c.phone === e.target.value);
// // // // // // // //             setSelectedCustomer(customer);
// // // // // // // //           }}
// // // // // // // //           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // //         >
// // // // // // // //           <option value="">Select Customer</option>
// // // // // // // //           {customers.map((customer) => (
// // // // // // // //             <option key={customer.phone} value={customer.phone}>
// // // // // // // //               {customer.name} - {customer.phone}
// // // // // // // //             </option>
// // // // // // // //           ))}
// // // // // // // //         </select>
// // // // // // // //       </div>

// // // // // // // //       {/* Customer Balance */}
// // // // // // // //       {selectedCustomer && (
// // // // // // // //         <div className="mb-4">
// // // // // // // //           <p className="text-sm font-medium text-gray-700">Customer Balance:</p>
// // // // // // // //           <p className={`text-lg font-bold ${customerBalance >= 0 ? "text-green-600" : "text-red-600"}`}>
// // // // // // // //             ${customerBalance.toFixed(2)}
// // // // // // // //           </p>
// // // // // // // //         </div>
// // // // // // // //       )}

// // // // // // // //       {/* Add Transaction Form */}
// // // // // // // //       {selectedCustomer && (
// // // // // // // //         <div className="mb-4">
// // // // // // // //           <h3 className="text-md font-medium mb-2">Add Transaction</h3>
// // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
// // // // // // // //             <div>
// // // // // // // //               <label className="block text-sm font-medium text-gray-700">Type</label>
// // // // // // // //               <select
// // // // // // // //                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // //                 value={newTransaction.type}
// // // // // // // //                 onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
// // // // // // // //               >
// // // // // // // //                 <option value="credit">Credit</option>
// // // // // // // //                 <option value="debit">Debit</option>
// // // // // // // //               </select>
// // // // // // // //             </div>
// // // // // // // //             <div>
// // // // // // // //               <label className="block text-sm font-medium text-gray-700">Amount</label>
// // // // // // // //               <input
// // // // // // // //                 type="number"
// // // // // // // //                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // //                 value={newTransaction.amount}
// // // // // // // //                 onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
// // // // // // // //               />
// // // // // // // //             </div>
// // // // // // // //             <div>
// // // // // // // //               <label className="block text-sm font-medium text-gray-700">Notes</label>
// // // // // // // //               <input
// // // // // // // //                 type="text"
// // // // // // // //                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // // //                 value={newTransaction.notes}
// // // // // // // //                 onChange={(e) => setNewTransaction({ ...newTransaction, notes: e.target.value })}
// // // // // // // //               />
// // // // // // // //             </div>
// // // // // // // //             <div className="flex items-end">
// // // // // // // //               <button
// // // // // // // //                 onClick={handleAddTransaction}
// // // // // // // //                 className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
// // // // // // // //               >
// // // // // // // //                 Add Transaction
// // // // // // // //               </button>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       )}

// // // // // // // //       {/* Transaction History */}
// // // // // // // //       {selectedCustomer && (
// // // // // // // //         <div>
// // // // // // // //           <h3 className="text-md font-medium mb-2">Transaction History</h3>
// // // // // // // //           <table className="w-full divide-y divide-gray-200">
// // // // // // // //             <thead className="bg-gray-50">
// // // // // // // //               <tr>
// // // // // // // //                 <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
// // // // // // // //                 <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
// // // // // // // //                 <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
// // // // // // // //                 <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Notes</th>
// // // // // // // //               </tr>
// // // // // // // //             </thead>
// // // // // // // //             <tbody className="bg-white divide-y divide-gray-200">
// // // // // // // //               {transactions.map((transaction) => (
// // // // // // // //                 <tr key={transaction.id}>
// // // // // // // //                   <td className="px-4 py-2 text-sm text-gray-500">{transaction.date}</td>
// // // // // // // //                   <td className={`px-4 py-2 text-sm font-medium ${transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}>
// // // // // // // //                     {transaction.type}
// // // // // // // //                   </td>
// // // // // // // //                   <td className="px-4 py-2 text-sm text-gray-500">${transaction.amount.toFixed(2)}</td>
// // // // // // // //                   <td className="px-4 py-2 text-sm text-gray-500">{transaction.notes}</td>
// // // // // // // //                 </tr>
// // // // // // // //               ))}
// // // // // // // //             </tbody>
// // // // // // // //           </table>
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default KhatabookPage;

// // // // // // // import React, { useState, useEffect } from "react";

// // // // // // // const KhatabookPage = () => {
// // // // // // //   const [customers, setCustomers] = useState([]); // List of customers
// // // // // // //   const [selectedCustomer, setSelectedCustomer] = useState(null); // Selected customer
// // // // // // //   const [transactions, setTransactions] = useState([]); // Customer transactions
// // // // // // //   const [customerBalance, setCustomerBalance] = useState(0); // Customer balance
// // // // // // //   const [newTransaction, setNewTransaction] = useState({
// // // // // // //     type: "credit", // 'credit' or 'debit'
// // // // // // //     amount: "",
// // // // // // //     notes: "",
// // // // // // //   });
// // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // //   const [error, setError] = useState(null);

// // // // // // //   const storeId = localStorage.getItem("storeId"); // Get storeId from localStorage

// // // // // // //   // Fetch all customers
// // // // // // //   useEffect(() => {
// // // // // // //     const fetchCustomers = async () => {
// // // // // // //       try {
// // // // // // //         const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}`);
// // // // // // //         if (!response.ok) {
// // // // // // //           throw new Error("Failed to fetch customers");
// // // // // // //         }
// // // // // // //         const data = await response.json();
// // // // // // //         console.log("Fetched customers:", data.customers); // Debugging
// // // // // // //         setCustomers(data.customers);
// // // // // // //       } catch (error) {
// // // // // // //         console.error("Error fetching customers:", error); // Debugging
// // // // // // //         setError("Failed to fetch customers");
// // // // // // //       }
// // // // // // //     };

// // // // // // //     if (storeId) {
// // // // // // //       fetchCustomers();
// // // // // // //     } else {
// // // // // // //       setError("Store ID not found in localStorage.");
// // // // // // //     }
// // // // // // //   }, [storeId]);

// // // // // // //   // Fetch customer transactions and balance
// // // // // // //   useEffect(() => {
// // // // // // //     if (selectedCustomer) {
// // // // // // //       const fetchCustomerDetails = async () => {
// // // // // // //         setLoading(true);
// // // // // // //         try {
// // // // // // //           // Fetch transactions
// // // // // // //           const transactionsResponse = await fetch(
// // // // // // //             `http://localhost:5002/api/khatabook/transactions?customerPhone=${selectedCustomer.phone}&storeId=${storeId}`
// // // // // // //           );
// // // // // // //           if (!transactionsResponse.ok) {
// // // // // // //             throw new Error("Failed to fetch transactions");
// // // // // // //           }
// // // // // // //           const transactionsData = await transactionsResponse.json();
// // // // // // //           console.log("Fetched transactions:", transactionsData.transactions); // Debugging
// // // // // // //           setTransactions(transactionsData.transactions);

// // // // // // //           // Fetch balance
// // // // // // //           const balanceResponse = await fetch(
// // // // // // //             `http://localhost:5002/api/khatabook/customers/${selectedCustomer.phone}/balance`,
// // // // // // //             { headers: { storeId } }
// // // // // // //           );
// // // // // // //           if (!balanceResponse.ok) {
// // // // // // //             throw new Error("Failed to fetch balance");
// // // // // // //           }
// // // // // // //           const balanceData = await balanceResponse.json();
// // // // // // //           console.log("Fetched balance:", balanceData.balance); // Debugging
// // // // // // //           setCustomerBalance(balanceData.balance);
// // // // // // //         } catch (error) {
// // // // // // //           console.error("Error fetching customer details:", error); // Debugging
// // // // // // //           setError("Failed to fetch customer details");
// // // // // // //         } finally {
// // // // // // //           setLoading(false);
// // // // // // //         }
// // // // // // //       };

// // // // // // //       fetchCustomerDetails();
// // // // // // //     }
// // // // // // //   }, [selectedCustomer, storeId]);

// // // // // // //   // Handle adding a new transaction
// // // // // // //   const handleAddTransaction = async () => {
// // // // // // //     if (!selectedCustomer || !newTransaction.amount) {
// // // // // // //       setError("Please select a customer and enter an amount.");
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     const transactionData = {
// // // // // // //       customerPhone: selectedCustomer.phone,
// // // // // // //       type: newTransaction.type,
// // // // // // //       amount: parseFloat(newTransaction.amount),
// // // // // // //       notes: newTransaction.notes,
// // // // // // //     };

// // // // // // //     try {
// // // // // // //       const response = await fetch("http://localhost:5002/api/khatabook/transactions", {
// // // // // // //         method: "POST",
// // // // // // //         headers: {
// // // // // // //           "Content-Type": "application/json",
// // // // // // //           storeId,
// // // // // // //         },
// // // // // // //         body: JSON.stringify(transactionData),
// // // // // // //       });

// // // // // // //       if (!response.ok) {
// // // // // // //         throw new Error("Failed to add transaction");
// // // // // // //       }

// // // // // // //       // Refresh transactions and balance
// // // // // // //       const updatedTransactions = await fetch(
// // // // // // //         `http://localhost:5002/api/khatabook/transactions?customerPhone=${selectedCustomer.phone}&storeId=${storeId}`
// // // // // // //       ).then((res) => res.json());
// // // // // // //       console.log("Updated transactions:", updatedTransactions.transactions); // Debugging
// // // // // // //       setTransactions(updatedTransactions.transactions);

// // // // // // //       const updatedBalance = await fetch(
// // // // // // //         `http://localhost:5002/api/khatabook/customers/${selectedCustomer.phone}/balance`,
// // // // // // //         { headers: { storeId } }
// // // // // // //       ).then((res) => res.json());
// // // // // // //       console.log("Updated balance:", updatedBalance.balance); // Debugging
// // // // // // //       setCustomerBalance(updatedBalance.balance);

// // // // // // //       // Reset form
// // // // // // //       setNewTransaction({ type: "credit", amount: "", notes: "" });
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error adding transaction:", error); // Debugging
// // // // // // //       setError("Failed to add transaction");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="bg-white p-6 rounded-lg shadow-md">
// // // // // // //       <h2 className="text-xl font-semibold mb-4">Khatabook</h2>

// // // // // // //       {/* Error Message */}
// // // // // // //       {error && (
// // // // // // //         <div className="mb-4 p-4 bg-red-100 text-red-600 rounded-lg">
// // // // // // //           {error}
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* Customer Selection */}
// // // // // // //       <div className="mb-4">
// // // // // // //         <label className="block text-sm font-medium text-gray-700 mb-1">Select Customer:</label>
// // // // // // //         <select
// // // // // // //           value={selectedCustomer ? selectedCustomer.phone : ""}
// // // // // // //           onChange={(e) => {
// // // // // // //             const customer = customers.find((c) => c.phone === e.target.value);
// // // // // // //             setSelectedCustomer(customer);
// // // // // // //           }}
// // // // // // //           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // //         >
// // // // // // //           <option value="">Select Customer</option>
// // // // // // //           {customers.map((customer) => (
// // // // // // //             <option key={customer.phone} value={customer.phone}>
// // // // // // //               {customer.name} - {customer.phone}
// // // // // // //             </option>
// // // // // // //           ))}
// // // // // // //         </select>
// // // // // // //       </div>

// // // // // // //       {/* Customer Balance */}
// // // // // // //       {selectedCustomer && (
// // // // // // //         <div className="mb-4">
// // // // // // //           <p className="text-sm font-medium text-gray-700">Customer Balance:</p>
// // // // // // //           <p className={`text-lg font-bold ${customerBalance >= 0 ? "text-green-600" : "text-red-600"}`}>
// // // // // // //             ${customerBalance.toFixed(2)}
// // // // // // //           </p>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* Add Transaction Form */}
// // // // // // //       {selectedCustomer && (
// // // // // // //         <div className="mb-4">
// // // // // // //           <h3 className="text-md font-medium mb-2">Add Transaction</h3>
// // // // // // //           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
// // // // // // //             <div>
// // // // // // //               <label className="block text-sm font-medium text-gray-700">Type</label>
// // // // // // //               <select
// // // // // // //                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // //                 value={newTransaction.type}
// // // // // // //                 onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
// // // // // // //               >
// // // // // // //                 <option value="credit">Credit</option>
// // // // // // //                 <option value="debit">Debit</option>
// // // // // // //               </select>
// // // // // // //             </div>
// // // // // // //             <div>
// // // // // // //               <label className="block text-sm font-medium text-gray-700">Amount</label>
// // // // // // //               <input
// // // // // // //                 type="number"
// // // // // // //                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // //                 value={newTransaction.amount}
// // // // // // //                 onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //             <div>
// // // // // // //               <label className="block text-sm font-medium text-gray-700">Notes</label>
// // // // // // //               <input
// // // // // // //                 type="text"
// // // // // // //                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // // //                 value={newTransaction.notes}
// // // // // // //                 onChange={(e) => setNewTransaction({ ...newTransaction, notes: e.target.value })}
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //             <div className="flex items-end">
// // // // // // //               <button
// // // // // // //                 onClick={handleAddTransaction}
// // // // // // //                 className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
// // // // // // //               >
// // // // // // //                 Add Transaction
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* Transaction History */}
// // // // // // //       {selectedCustomer && (
// // // // // // //         <div>
// // // // // // //           <h3 className="text-md font-medium mb-2">Transaction History</h3>
// // // // // // //           <table className="w-full divide-y divide-gray-200">
// // // // // // //             <thead className="bg-gray-50">
// // // // // // //               <tr>
// // // // // // //                 <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
// // // // // // //                 <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
// // // // // // //                 <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
// // // // // // //                 <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Notes</th>
// // // // // // //               </tr>
// // // // // // //             </thead>
// // // // // // //             <tbody className="bg-white divide-y divide-gray-200">
// // // // // // //               {transactions.map((transaction) => (
// // // // // // //                 <tr key={transaction.id}>
// // // // // // //                   <td className="px-4 py-2 text-sm text-gray-500">{transaction.date}</td>
// // // // // // //                   <td className={`px-4 py-2 text-sm font-medium ${transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}>
// // // // // // //                     {transaction.type}
// // // // // // //                   </td>
// // // // // // //                   <td className="px-4 py-2 text-sm text-gray-500">${transaction.amount.toFixed(2)}</td>
// // // // // // //                   <td className="px-4 py-2 text-sm text-gray-500">{transaction.notes}</td>
// // // // // // //                 </tr>
// // // // // // //               ))}
// // // // // // //             </tbody>
// // // // // // //           </table>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default KhatabookPage;

// // // // // // import React, { useState, useEffect } from "react";

// // // // // // const KhatabookPage = () => {
// // // // // //   const [customers, setCustomers] = useState([]); // List of customers
// // // // // //   const [selectedCustomer, setSelectedCustomer] = useState(null); // Selected customer
// // // // // //   const [transactions, setTransactions] = useState([]); // Customer transactions
// // // // // //   const [customerBalance, setCustomerBalance] = useState(0); // Customer balance
// // // // // //   const [newTransaction, setNewTransaction] = useState({
// // // // // //     type: "credit", // 'credit' or 'debit'
// // // // // //     amount: "",
// // // // // //     notes: "",
// // // // // //   });
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [error, setError] = useState(null);

// // // // // //   const storeId = localStorage.getItem("storeId"); // Get storeId from localStorage

// // // // // //   // Fetch all customers
// // // // // //   useEffect(() => {
// // // // // //     const fetchCustomers = async () => {
// // // // // //       try {
// // // // // //         const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}`);
// // // // // //         if (!response.ok) {
// // // // // //           throw new Error("Failed to fetch customers");
// // // // // //         }
// // // // // //         const data = await response.json();
// // // // // //         console.log("Fetched customers:", data.customers); // Debugging
// // // // // //         setCustomers(data.customers);
// // // // // //       } catch (error) {
// // // // // //         console.error("Error fetching customers:", error); // Debugging
// // // // // //         setError("Failed to fetch customers");
// // // // // //       }
// // // // // //     };

// // // // // //     if (storeId) {
// // // // // //       fetchCustomers();
// // // // // //     } else {
// // // // // //       setError("Store ID not found in localStorage.");
// // // // // //     }
// // // // // //   }, [storeId]);

// // // // // //   // Fetch customer transactions and balance
// // // // // //   useEffect(() => {
// // // // // //     if (selectedCustomer) {
// // // // // //       const fetchCustomerDetails = async () => {
// // // // // //         setLoading(true);
// // // // // //         try {
// // // // // //           // Fetch transactions
// // // // // //           const transactionsResponse = await fetch(
// // // // // //             `http://localhost:5002/api/khatabook/transactions?customerPhone=${selectedCustomer.phone}&storeId=${storeId}`
// // // // // //           );
// // // // // //           if (!transactionsResponse.ok) {
// // // // // //             throw new Error("Failed to fetch transactions");
// // // // // //           }
// // // // // //           const transactionsData = await transactionsResponse.json();
// // // // // //           console.log("Fetched transactions:", transactionsData.transactions); // Debugging
// // // // // //           setTransactions(transactionsData.transactions);

// // // // // //           // Fetch balance
// // // // // //           const balanceResponse = await fetch(
// // // // // //             `http://localhost:5002/api/khatabook/customers/${selectedCustomer.phone}/balance`,
// // // // // //             { headers: { storeId } }
// // // // // //           );
// // // // // //           if (!balanceResponse.ok) {
// // // // // //             throw new Error("Failed to fetch balance");
// // // // // //           }
// // // // // //           const balanceData = await balanceResponse.json();
// // // // // //           console.log("Fetched balance:", balanceData.balance); // Debugging
// // // // // //           setCustomerBalance(balanceData.balance);
// // // // // //         } catch (error) {
// // // // // //           console.error("Error fetching customer details:", error); // Debugging
// // // // // //           setError("Failed to fetch customer details");
// // // // // //         } finally {
// // // // // //           setLoading(false);
// // // // // //         }
// // // // // //       };

// // // // // //       fetchCustomerDetails();
// // // // // //     }
// // // // // //   }, [selectedCustomer, storeId]);

// // // // // //   // Handle adding a new transaction
// // // // // //   const handleAddTransaction = async () => {
// // // // // //     if (!selectedCustomer || !newTransaction.amount) {
// // // // // //       setError("Please select a customer and enter an amount.");
// // // // // //       return;
// // // // // //     }

// // // // // //     const transactionData = {
// // // // // //       customerPhone: selectedCustomer.phone,
// // // // // //       type: newTransaction.type,
// // // // // //       amount: parseFloat(newTransaction.amount),
// // // // // //       notes: newTransaction.notes,
// // // // // //     };

// // // // // //     try {
// // // // // //       const response = await fetch("http://localhost:5002/api/khatabook/transactions", {
// // // // // //         method: "POST",
// // // // // //         headers: {
// // // // // //           "Content-Type": "application/json",
// // // // // //           storeId,
// // // // // //         },
// // // // // //         body: JSON.stringify(transactionData),
// // // // // //       });

// // // // // //       if (!response.ok) {
// // // // // //         throw new Error("Failed to add transaction");
// // // // // //       }

// // // // // //       // Refresh transactions and balance
// // // // // //       const updatedTransactions = await fetch(
// // // // // //         `http://localhost:5002/api/khatabook/transactions?customerPhone=${selectedCustomer.phone}&storeId=${storeId}`
// // // // // //       ).then((res) => res.json());
// // // // // //       console.log("Updated transactions:", updatedTransactions.transactions); // Debugging
// // // // // //       setTransactions(updatedTransactions.transactions);

// // // // // //       const updatedBalance = await fetch(
// // // // // //         `http://localhost:5002/api/khatabook/customers/${selectedCustomer.phone}/balance`,
// // // // // //         { headers: { storeId } }
// // // // // //       ).then((res) => res.json());
// // // // // //       console.log("Updated balance:", updatedBalance.balance); // Debugging
// // // // // //       setCustomerBalance(updatedBalance.balance);

// // // // // //       // Reset form
// // // // // //       setNewTransaction({ type: "credit", amount: "", notes: "" });
// // // // // //     } catch (error) {
// // // // // //       console.error("Error adding transaction:", error); // Debugging
// // // // // //       setError("Failed to add transaction");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="bg-white p-6 rounded-lg shadow-md">
// // // // // //       <h2 className="text-xl font-semibold mb-4">Khatabook</h2>

// // // // // //       {/* Error Message */}
// // // // // //       {error && (
// // // // // //         <div className="mb-4 p-4 bg-red-100 text-red-600 rounded-lg">
// // // // // //           {error}
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* Customer Selection */}
// // // // // //       <div className="mb-4">
// // // // // //         <label className="block text-sm font-medium text-gray-700 mb-1">Select Customer:</label>
// // // // // //         <select
// // // // // //           value={selectedCustomer ? selectedCustomer.phone : ""}
// // // // // //           onChange={(e) => {
// // // // // //             const customer = customers.find((c) => c.phone === e.target.value);
// // // // // //             setSelectedCustomer(customer);
// // // // // //           }}
// // // // // //           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // //         >
// // // // // //           <option value="">Select Customer</option>
// // // // // //           {customers.map((customer) => (
// // // // // //             <option key={customer.phone} value={customer.phone}>
// // // // // //               {customer.name} - {customer.phone}
// // // // // //             </option>
// // // // // //           ))}
// // // // // //         </select>
// // // // // //       </div>

// // // // // //       {/* Customer Balance */}
// // // // // //       {selectedCustomer && (
// // // // // //         <div className="mb-4">
// // // // // //           <p className="text-sm font-medium text-gray-700">Customer Balance:</p>
// // // // // //           <p className={`text-lg font-bold ${customerBalance >= 0 ? "text-green-600" : "text-red-600"}`}>
// // // // // //             ${customerBalance.toFixed(2)}
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* Add Transaction Form */}
// // // // // //       {selectedCustomer && (
// // // // // //         <div className="mb-4">
// // // // // //           <h3 className="text-md font-medium mb-2">Add Transaction</h3>
// // // // // //           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700">Type</label>
// // // // // //               <select
// // // // // //                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // //                 value={newTransaction.type}
// // // // // //                 onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
// // // // // //               >
// // // // // //                 <option value="credit">Credit</option>
// // // // // //                 <option value="debit">Debit</option>
// // // // // //               </select>
// // // // // //             </div>
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700">Amount</label>
// // // // // //               <input
// // // // // //                 type="number"
// // // // // //                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // //                 value={newTransaction.amount}
// // // // // //                 onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
// // // // // //               />
// // // // // //             </div>
// // // // // //             <div>
// // // // // //               <label className="block text-sm font-medium text-gray-700">Notes</label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // // //                 value={newTransaction.notes}
// // // // // //                 onChange={(e) => setNewTransaction({ ...newTransaction, notes: e.target.value })}
// // // // // //               />
// // // // // //             </div>
// // // // // //             <div className="flex items-end">
// // // // // //               <button
// // // // // //                 onClick={handleAddTransaction}
// // // // // //                 className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
// // // // // //               >
// // // // // //                 Add Transaction
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* Transaction History */}
// // // // // //       {selectedCustomer && (
// // // // // //         <div>
// // // // // //           <h3 className="text-md font-medium mb-2">Transaction History</h3>
// // // // // //           <table className="w-full divide-y divide-gray-200">
// // // // // //             <thead className="bg-gray-50">
// // // // // //               <tr>
// // // // // //                 <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
// // // // // //                 <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
// // // // // //                 <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
// // // // // //                 <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Notes</th>
// // // // // //               </tr>
// // // // // //             </thead>
// // // // // //             <tbody className="bg-white divide-y divide-gray-200">
// // // // // //               {transactions.map((transaction) => (
// // // // // //                 <tr key={transaction.id}>
// // // // // //                   <td className="px-4 py-2 text-sm text-gray-500">{transaction.date}</td>
// // // // // //                   <td className={`px-4 py-2 text-sm font-medium ${transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}>
// // // // // //                     {transaction.type}
// // // // // //                   </td>
// // // // // //                   <td className="px-4 py-2 text-sm text-gray-500">${transaction.amount.toFixed(2)}</td>
// // // // // //                   <td className="px-4 py-2 text-sm text-gray-500">{transaction.notes}</td>
// // // // // //                 </tr>
// // // // // //               ))}
// // // // // //             </tbody>
// // // // // //           </table>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default KhatabookPage;


// // // // // import React, { useState, useEffect } from "react";

// // // // // const KhatabookPage = () => {
// // // // //   const [customers, setCustomers] = useState([]); // List of customers
// // // // //   const [selectedCustomer, setSelectedCustomer] = useState(null); // Selected customer
// // // // //   const [transactions, setTransactions] = useState([]); // Customer transactions
// // // // //   const [customerBalance, setCustomerBalance] = useState(0); // Customer balance
// // // // //   const [newTransaction, setNewTransaction] = useState({
// // // // //     type: "credit", // 'credit' or 'debit'
// // // // //     amount: "",
// // // // //     notes: "",
// // // // //   });
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [error, setError] = useState(null);

// // // // //   const storeId = localStorage.getItem("storeId"); // Get storeId from localStorage

// // // // //   // Fetch all customers
// // // // //   useEffect(() => {
// // // // //     const fetchCustomers = async () => {
// // // // //       try {
// // // // //         const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}`);
// // // // //         if (!response.ok) {
// // // // //           throw new Error("Failed to fetch customers");
// // // // //         }
// // // // //         const data = await response.json();
// // // // //         console.log("Fetched customers:", data.customers); // Debugging
// // // // //         setCustomers(data.customers);
// // // // //       } catch (error) {
// // // // //         console.error("Error fetching customers:", error); // Debugging
// // // // //         setError("Failed to fetch customers");
// // // // //       }
// // // // //     };

// // // // //     if (storeId) {
// // // // //       fetchCustomers();
// // // // //     } else {
// // // // //       setError("Store ID not found in localStorage.");
// // // // //     }
// // // // //   }, [storeId]);

// // // // //   // Fetch customer transactions and balance
// // // // //   useEffect(() => {
// // // // //     if (selectedCustomer) {
// // // // //       const fetchCustomerDetails = async () => {
// // // // //         setLoading(true);
// // // // //         try {
// // // // //           // Fetch transactions
// // // // //           const transactionsResponse = await fetch(
// // // // //             `http://localhost:5002/api/khatabook/transactions?customerPhone=${selectedCustomer.phone}&storeId=${storeId}`
// // // // //           );
// // // // //           if (!transactionsResponse.ok) {
// // // // //             throw new Error("Failed to fetch transactions");
// // // // //           }
// // // // //           const transactionsData = await transactionsResponse.json();
// // // // //           console.log("Fetched transactions:", transactionsData.transactions); // Debugging
// // // // //           setTransactions(transactionsData.transactions);

// // // // //           // Fetch balance
// // // // //           const balanceResponse = await fetch(
// // // // //             `http://localhost:5002/api/khatabook/customers/${selectedCustomer.phone}/balance`,
// // // // //             { headers: { storeId } }
// // // // //           );
// // // // //           if (!balanceResponse.ok) {
// // // // //             throw new Error("Failed to fetch balance");
// // // // //           }
// // // // //           const balanceData = await balanceResponse.json();
// // // // //           console.log("Fetched balance:", balanceData.balance); // Debugging
// // // // //           setCustomerBalance(balanceData.balance);
// // // // //         } catch (error) {
// // // // //           console.error("Error fetching customer details:", error); // Debugging
// // // // //           setError("Failed to fetch customer details");
// // // // //         } finally {
// // // // //           setLoading(false);
// // // // //         }
// // // // //       };

// // // // //       fetchCustomerDetails();
// // // // //     }
// // // // //   }, [selectedCustomer, storeId]);

// // // // //   // Handle adding a new transaction
// // // // //   const handleAddTransaction = async () => {
// // // // //     if (!selectedCustomer || !newTransaction.amount) {
// // // // //       setError("Please select a customer and enter an amount.");
// // // // //       return;
// // // // //     }

// // // // //     const transactionData = {
// // // // //       customerPhone: selectedCustomer.phone,
// // // // //       type: newTransaction.type,
// // // // //       amount: parseFloat(newTransaction.amount),
// // // // //       notes: newTransaction.notes,
// // // // //     };

// // // // //     try {
// // // // //       const response = await fetch("http://localhost:5002/api/khatabook/transactions", {
// // // // //         method: "POST",
// // // // //         headers: {
// // // // //           "Content-Type": "application/json",
// // // // //           storeId,
// // // // //         },
// // // // //         body: JSON.stringify(transactionData),
// // // // //       });

// // // // //       if (!response.ok) {
// // // // //         throw new Error("Failed to add transaction");
// // // // //       }

// // // // //       // Refresh transactions and balance
// // // // //       const updatedTransactions = await fetch(
// // // // //         `http://localhost:5002/api/khatabook/transactions?customerPhone=${selectedCustomer.phone}&storeId=${storeId}`
// // // // //       ).then((res) => res.json());
// // // // //       console.log("Updated transactions:", updatedTransactions.transactions); // Debugging
// // // // //       setTransactions(updatedTransactions.transactions);

// // // // //       const updatedBalance = await fetch(
// // // // //         `http://localhost:5002/api/khatabook/customers/${selectedCustomer.phone}/balance`,
// // // // //         { headers: { storeId } }
// // // // //       ).then((res) => res.json());
// // // // //       console.log("Updated balance:", updatedBalance.balance); // Debugging
// // // // //       setCustomerBalance(updatedBalance.balance);

// // // // //       // Reset form
// // // // //       setNewTransaction({ type: "credit", amount: "", notes: "" });
// // // // //     } catch (error) {
// // // // //       console.error("Error adding transaction:", error); // Debugging
// // // // //       setError("Failed to add transaction");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="bg-white p-6 rounded-lg shadow-md">
// // // // //       <h2 className="text-xl font-semibold mb-4">Khatabook</h2>

// // // // //       {/* Error Message */}
// // // // //       {error && (
// // // // //         <div className="mb-4 p-4 bg-red-100 text-red-600 rounded-lg">
// // // // //           {error}
// // // // //         </div>
// // // // //       )}

// // // // //       {/* Customer Selection */}
// // // // //       <div className="mb-4">
// // // // //         <label className="block text-sm font-medium text-gray-700 mb-1">Select Customer:</label>
// // // // //         <select
// // // // //           value={selectedCustomer ? selectedCustomer.phone : ""}
// // // // //           onChange={(e) => {
// // // // //             const customer = customers.find((c) => c.phone === e.target.value);
// // // // //             setSelectedCustomer(customer);
// // // // //           }}
// // // // //           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // //         >
// // // // //           <option value="">Select Customer</option>
// // // // //           {customers.map((customer) => (
// // // // //             <option key={customer.phone} value={customer.phone}>
// // // // //               {customer.name} - {customer.phone}
// // // // //             </option>
// // // // //           ))}
// // // // //         </select>
// // // // //       </div>

// // // // //       {/* Customer Balance */}
// // // // //       {selectedCustomer && (
// // // // //         <div className="mb-4">
// // // // //           <p className="text-sm font-medium text-gray-700">Customer Balance:</p>
// // // // //           <p className={`text-lg font-bold ${customerBalance >= 0 ? "text-green-600" : "text-red-600"}`}>
// // // // //             ${customerBalance.toFixed(2)}
// // // // //           </p>
// // // // //         </div>
// // // // //       )}

// // // // //       {/* Add Transaction Form */}
// // // // //       {selectedCustomer && (
// // // // //         <div className="mb-4">
// // // // //           <h3 className="text-md font-medium mb-2">Add Transaction</h3>
// // // // //           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
// // // // //             <div>
// // // // //               <label className="block text-sm font-medium text-gray-700">Type</label>
// // // // //               <select
// // // // //                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // //                 value={newTransaction.type}
// // // // //                 onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
// // // // //               >
// // // // //                 <option value="credit">Credit</option>
// // // // //                 <option value="debit">Debit</option>
// // // // //               </select>
// // // // //             </div>
// // // // //             <div>
// // // // //               <label className="block text-sm font-medium text-gray-700">Amount</label>
// // // // //               <input
// // // // //                 type="number"
// // // // //                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // //                 value={newTransaction.amount}
// // // // //                 onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
// // // // //               />
// // // // //             </div>
// // // // //             <div>
// // // // //               <label className="block text-sm font-medium text-gray-700">Notes</label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // //                 value={newTransaction.notes}
// // // // //                 onChange={(e) => setNewTransaction({ ...newTransaction, notes: e.target.value })}
// // // // //               />
// // // // //             </div>
// // // // //             <div className="flex items-end">
// // // // //               <button
// // // // //                 onClick={handleAddTransaction}
// // // // //                 className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
// // // // //               >
// // // // //                 Add Transaction
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //       {/* Transaction History */}
// // // // //       {selectedCustomer && (
// // // // //         <div>
// // // // //           <h3 className="text-md font-medium mb-2">Transaction History</h3>
// // // // //           <table className="w-full divide-y divide-gray-200">
// // // // //             <thead className="bg-gray-50">
// // // // //               <tr>
// // // // //                 <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
// // // // //                 <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
// // // // //                 <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
// // // // //                 <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Notes</th>
// // // // //               </tr>
// // // // //             </thead>
// // // // //             <tbody className="bg-white divide-y divide-gray-200">
// // // // //               {transactions.map((transaction) => (
// // // // //                 <tr key={transaction._id}>
// // // // //                   <td className="px-4 py-2 text-sm text-gray-500">{transaction.date}</td>
// // // // //                   <td className={`px-4 py-2 text-sm font-medium ${transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}>
// // // // //                     {transaction.type}
// // // // //                   </td>
// // // // //                   <td className="px-4 py-2 text-sm text-gray-500">${transaction.amount.toFixed(2)}</td>
// // // // //                   <td className="px-4 py-2 text-sm text-gray-500">{transaction.notes}</td>
// // // // //                 </tr>
// // // // //               ))}
// // // // //             </tbody>
// // // // //           </table>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default KhatabookPage;
// // // // import React, { useState, useEffect } from "react";

// // // // const KhatabookPage = () => {
// // // //   const [customers, setCustomers] = useState([]); // List of customers
// // // //   const [selectedCustomer, setSelectedCustomer] = useState(null); // Selected customer
// // // //   const [transactions, setTransactions] = useState([]); // Customer transactions
// // // //   const [customerBalance, setCustomerBalance] = useState(0); // Customer balance
// // // //   const [newTransaction, setNewTransaction] = useState({
// // // //     type: "credit", // 'credit' or 'debit'
// // // //     amount: "",
// // // //     notes: "",
// // // //   });
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState(null);

// // // //   const storeId = localStorage.getItem("storeId"); // Get storeId from localStorage

// // // //   // Fetch all customers
// // // //   useEffect(() => {
// // // //     const fetchCustomers = async () => {
// // // //       try {
// // // //         const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}`);
// // // //         if (!response.ok) {
// // // //           throw new Error("Failed to fetch customers");
// // // //         }
// // // //         const data = await response.json();
// // // //         console.log("Fetched customers:", data.customers); // Debugging
// // // //         setCustomers(data.customers);
// // // //       } catch (error) {
// // // //         console.error("Error fetching customers:", error); // Debugging
// // // //         setError("Failed to fetch customers");
// // // //       }
// // // //     };

// // // //     if (storeId) {
// // // //       fetchCustomers();
// // // //     } else {
// // // //       setError("Store ID not found in localStorage.");
// // // //     }
// // // //   }, [storeId]);

// // // //   // Function to fetch customer transactions and balance
// // // //   const fetchCustomerDetails = async () => {
// // // //     if (selectedCustomer) {
// // // //       setLoading(true);
// // // //       try {
// // // //         // Fetch transactions
// // // //         const transactionsResponse = await fetch(
// // // //           `http://localhost:5002/api/khatabook/transactions?customerPhone=${selectedCustomer.phone}&storeId=${storeId}`
// // // //         );
// // // //         if (!transactionsResponse.ok) {
// // // //           throw new Error("Failed to fetch transactions");
// // // //         }
// // // //         const transactionsData = await transactionsResponse.json();
// // // //         console.log("Fetched transactions:", transactionsData.transactions); // Debugging
// // // //         setTransactions(transactionsData.transactions);

// // // //         // Fetch balance
// // // //         const balanceResponse = await fetch(
// // // //           `http://localhost:5002/api/khatabook/customers/${selectedCustomer.phone}/balance`,
// // // //           { headers: { storeId } }
// // // //         );
// // // //         if (!balanceResponse.ok) {
// // // //           throw new Error("Failed to fetch balance");
// // // //         }
// // // //         const balanceData = await balanceResponse.json();
// // // //         console.log("Fetched balance:", balanceData.balance); // Debugging
// // // //         setCustomerBalance(balanceData.balance);
// // // //       } catch (error) {
// // // //         console.error("Error fetching customer details:", error); // Debugging
// // // //         setError("Failed to fetch customer details");
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     }
// // // //   };

// // // //   // Fetch customer details when selected customer changes
// // // //   useEffect(() => {
// // // //     fetchCustomerDetails();
// // // //   }, [selectedCustomer, storeId]);

// // // //   // Handle adding a new transaction
// // // //   const handleAddTransaction = async () => {
// // // //     if (!selectedCustomer || !newTransaction.amount) {
// // // //       setError("Please select a customer and enter an amount.");
// // // //       return;
// // // //     }

// // // //     const transactionData = {
// // // //       customerPhone: selectedCustomer.phone,
// // // //       type: newTransaction.type,
// // // //       amount: parseFloat(newTransaction.amount),
// // // //       notes: newTransaction.notes,
// // // //     };

// // // //     try {
// // // //       const response = await fetch("http://localhost:5002/api/khatabook/transactions", {
// // // //         method: "POST",
// // // //         headers: {
// // // //           "Content-Type": "application/json",
// // // //           storeId,
// // // //         },
// // // //         body: JSON.stringify(transactionData),
// // // //       });

// // // //       if (!response.ok) {
// // // //         throw new Error("Failed to add transaction");
// // // //       }

// // // //       // Refresh transactions and balance
// // // //       await fetchCustomerDetails();
// // // //       // Reset form
// // // //       setNewTransaction({ type: "credit", amount: "", notes: "" });
// // // //     } catch (error) {
// // // //       console.error("Error adding transaction:", error); // Debugging
// // // //       setError("Failed to add transaction");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="bg-white p-6 rounded-lg shadow-md">
// // // //       <h2 className="text-xl font-semibold mb-4">Khatabook</h2>

// // // //       {/* Error Message */}
// // // //       {error && (
// // // //         <div className="mb-4 p-4 bg-red-100 text-red-600 rounded-lg">
// // // //           {error}
// // // //         </div>
// // // //       )}

// // // //       {/* Customer Selection */}
// // // //       <div className="mb-4">
// // // //         <label className="block text-sm font-medium text-gray-700 mb-1">Select Customer:</label>
// // // //         <select
// // // //           value={selectedCustomer ? selectedCustomer.phone : ""}
// // // //           onChange={(e) => {
// // // //             const customer = customers.find((c) => c.phone === e.target.value);
// // // //             setSelectedCustomer(customer);
// // // //           }}
// // // //           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // //         >
// // // //           <option value="">Select Customer</option>
// // // //           {customers.map((customer) => (
// // // //             <option key={customer.phone} value={customer.phone}>
// // // //               {customer.name} - {customer.phone}
// // // //             </option>
// // // //           ))}
// // // //         </select>
// // // //       </div>

// // // //       {/* Customer Balance */}
// // // //       {selectedCustomer && (
// // // //         <div className="mb-4">
// // // //           <p className="text-sm font-medium text-gray-700">Customer Balance:</p>
// // // //           <p className={`text-lg font-bold ${customerBalance >= 0 ? "text-green-600" : "text-red-600"}`}>
// // // //             ${customerBalance.toFixed(2)}
// // // //           </p>
// // // //         </div>
// // // //       )}

// // // //       {/* Add Transaction Form */}
// // // //       {selectedCustomer && (
// // // //         <div className="mb-4">
// // // //           <h3 className="text-md font-medium mb-2">Add Transaction</h3>
// // // //           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700">Type</label>
// // // //               <select
// // // //                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // //                 value={newTransaction.type}
// // // //                 onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
// // // //               >
// // // //                 <option value="credit">Credit</option>
// // // //                 <option value="debit">Debit</option>
// // // //               </select>
// // // //             </div>
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700">Amount</label>
// // // //               <input
// // // //                 type="number"
// // // //                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // //                 value={newTransaction.amount}
// // // //                 onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
// // // //               />
// // // //             </div>
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700">Notes</label>
// // // //               <input
// // // //                 type="text"
// // // //                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // //                 value={newTransaction.notes}
// // // //                 onChange={(e) => setNewTransaction({ ...newTransaction, notes: e.target.value })}
// // // //               />
// // // //             </div>
// // // //             <div className="flex items-end">
// // // //               <button
// // // //                 onClick={handleAddTransaction}
// // // //                 className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
// // // //               >
// // // //                 Add Transaction
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {/* Transaction History */}
// // // //       {selectedCustomer && transactions.length > 0 && (
// // // //         <div>
// // // //           <h3 className="text-md font-medium mb-2">Transaction History</h3>
// // // //           <table className="w-full divide-y divide-gray-200">
// // // //             <thead className="bg-gray-50">
// // // //               <tr>
// // // //                 <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
// // // //                 <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
// // // //                 <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
// // // //                 <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Notes</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody className="bg-white divide-y divide-gray-200">
// // // //               {transactions.map((transaction) => (
// // // //                 <tr key={transaction._id}>
// // // //                   <td className="px-4 py-2 text-sm text-gray-500">{transaction.date}</td>
// // // //                   <td className={`px-4 py-2 text-sm font-medium ${transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}>
// // // //                     {transaction.type}
// // // //                   </td>
// // // //                   <td className="px-4 py-2 text-sm text-gray-500">${transaction.amount.toFixed(2)}</td>
// // // //                   <td className="px-4 py-2 text-sm text-gray-500">{transaction.notes}</td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>
// // // //       )}
// // // //       {selectedCustomer && transactions.length === 0 && (
// // // //         <div className="mt-4 text-gray-500">No transactions found for this customer.</div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default KhatabookPage;
// // // import React, { useState, useEffect } from "react";

// // // const KhatabookPage = () => {
// // //   const [customers, setCustomers] = useState([]);
// // //   const [selectedCustomer, setSelectedCustomer] = useState(null);
// // //   const [transactions, setTransactions] = useState([]);
// // //   const [customerBalance, setCustomerBalance] = useState(0);
// // //   const [newTransaction, setNewTransaction] = useState({ type: "credit", amount: "", notes: "" });
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);

// // //   const storeId = localStorage.getItem("storeId");

// // //   useEffect(() => {
// // //     const fetchCustomers = async () => {
// // //       try {
// // //         const response = await fetch(`http://localhost:5008/api/customers?storeId=${storeId}`);
// // //         if (!response.ok) throw new Error("Failed to fetch customers");
// // //         const data = await response.json();
// // //         setCustomers(data.customers);
// // //       } catch (error) {
// // //         setError(error.message);
// // //       }
// // //     };
// // //     if (storeId) fetchCustomers();
// // //   }, [storeId]);

// // //   useEffect(() => {
// // //     const fetchCustomerDetails = async () => {
// // //       if (!selectedCustomer) return;
// // //       setLoading(true);
// // //       try {
// // //         const [transactionsRes, balanceRes] = await Promise.all([
// // //           fetch(`http://localhost:5002/api/khatabook/transactions?customerPhone=${selectedCustomer.phone}&storeId=${storeId}`),
// // //           fetch(`http://localhost:5002/api/khatabook/customers/${selectedCustomer.phone}/balance`, { headers: { storeId } })
// // //         ]);
// // //         if (!transactionsRes.ok || !balanceRes.ok) throw new Error("Failed to fetch customer details");
// // //         const transactionsData = await transactionsRes.json();
// // //         const balanceData = await balanceRes.json();
// // //         setTransactions(transactionsData.transactions);
// // //         setCustomerBalance(balanceData.balance);
// // //       } catch (error) {
// // //         setError(error.message);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };
// // //     fetchCustomerDetails();
// // //   }, [selectedCustomer, storeId]);

// // //   const handleAddTransaction = async () => {
// // //     if (!selectedCustomer || !newTransaction.amount) return setError("Select a customer & enter an amount");
// // //     try {
// // //       const response = await fetch("http://localhost:5002/api/khatabook/transactions", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json", storeId },
// // //         body: JSON.stringify({
// // //           customerPhone: selectedCustomer.phone,
// // //           type: newTransaction.type,
// // //           amount: parseFloat(newTransaction.amount),
// // //           notes: newTransaction.notes,
// // //         }),
// // //       });
// // //       if (!response.ok) throw new Error("Failed to add transaction");
// // //       setNewTransaction({ type: "credit", amount: "", notes: "" });
// // //       setError(null);
// // //       await fetchCustomerDetails();
// // //     } catch (error) {
// // //       setError(error.message);
// // //     }
// // //   };

// // //   return (
// // //     <div className="bg-white p-6 rounded-lg shadow-md">
// // //       <h2 className="text-xl font-semibold mb-4">Khatabook</h2>
// // //       {error && <div className="mb-4 p-4 bg-red-100 text-red-600 rounded-lg">{error}</div>}

// // //       <div className="mb-4">
// // //         <label className="block text-sm font-medium text-gray-700">Select Customer:</label>
// // //         <select
// // //           className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
// // //           value={selectedCustomer?.phone || ""}
// // //           onChange={(e) => setSelectedCustomer(customers.find((c) => c.phone === e.target.value))}
// // //         >
// // //           <option value="">Select Customer</option>
// // //           {customers.map(({ name, phone }) => (
// // //             <option key={phone} value={phone}>{name} - {phone}</option>
// // //           ))}
// // //         </select>
// // //       </div>

// // //       {selectedCustomer && (
// // //         <div>
// // //           <p className="text-sm font-medium text-gray-700">Customer Balance:</p>
// // //           <p className={`text-lg font-bold ${customerBalance >= 0 ? "text-green-600" : "text-red-600"}`}>
// // //             ${customerBalance.toFixed(2)}
// // //           </p>
// // //         </div>
// // //       )}

// // //       {selectedCustomer && (
// // //         <div className="mb-4">
// // //           <h3 className="text-md font-medium mb-2">Add Transaction</h3>
// // //           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
// // //             <select className="p-3 border rounded-lg" value={newTransaction.type} onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}>
// // //               <option value="credit">Credit</option>
// // //               <option value="debit">Debit</option>
// // //             </select>
// // //             <input className="p-3 border rounded-lg" type="number" value={newTransaction.amount} onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })} />
// // //             <input className="p-3 border rounded-lg" type="text" placeholder="Notes" value={newTransaction.notes} onChange={(e) => setNewTransaction({ ...newTransaction, notes: e.target.value })} />
// // //             <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onClick={handleAddTransaction}>Add</button>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {selectedCustomer && transactions.length > 0 && (
// // //         <div>
// // //           <h3 className="text-md font-medium mb-2">Transaction History</h3>
// // //           <table className="w-full divide-y divide-gray-200">
// // //             <thead>
// // //               <tr>
// // //                 <th className="px-4 py-2">Date</th>
// // //                 <th className="px-4 py-2">Type</th>
// // //                 <th className="px-4 py-2">Amount</th>
// // //                 <th className="px-4 py-2">Notes</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {transactions.map(({ _id, date, type, amount, notes }) => (
// // //                 <tr key={_id}>
// // //                   <td className="px-4 py-2">{date}</td>
// // //                   <td className={`px-4 py-2 ${type === "credit" ? "text-green-600" : "text-red-600"}`}>{type}</td>
// // //                   <td className="px-4 py-2">${amount.toFixed(2)}</td>
// // //                   <td className="px-4 py-2">{notes}</td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default KhatabookPage;
// // import React, { useState, useEffect } from "react";

// // const KhatabookPage = () => {
// //   const [customers, setCustomers] = useState([]);
// //   const [selectedCustomer, setSelectedCustomer] = useState(null);
// //   const [transactions, setTransactions] = useState([]);
// //   const [customerBalance, setCustomerBalance] = useState(0);
// //   const [error, setError] = useState(null);
// //   const storeId = localStorage.getItem("storeId");

// //   // ✅ Move this function ABOVE the useEffect
// //   const fetchCustomerDetails = async () => {
// //     if (!selectedCustomer) return;
// //     try {
// //       const response = await fetch(
// //         `http://localhost:5002/api/khatabook/customers/${selectedCustomer.phone}/balance`,
// //         { headers: { storeId } }
// //       );
// //       if (!response.ok) throw new Error("Failed to fetch balance");
// //       const balanceData = await response.json();
// //       setCustomerBalance(balanceData.balance);
// //     } catch (error) {
// //       setError("Failed to fetch customer details");
// //     }
// //   };

// //   useEffect(() => {
// //     fetchCustomerDetails(); // ✅ Now it's defined before use
// //   }, [selectedCustomer, storeId]);

// //   return (
// //     <div>
// //       <h2>Khatabook</h2>
// //       {error && <p className="text-red-500">{error}</p>}
// //       <select
// //         onChange={(e) => {
// //           const customer = customers.find((c) => c.phone === e.target.value);
// //           setSelectedCustomer(customer);
// //         }}
// //       >
// //         {customers.map((customer) => (
// //           <option key={customer.phone} value={customer.phone}>
// //             {customer.name} - {customer.phone}
// //           </option>
// //         ))}
// //       </select>
// //       {selectedCustomer && <p>Balance: ${customerBalance.toFixed(2)}</p>}
// //     </div>
// //   );
// // };

// // export default KhatabookPage;
// import React, { useState, useEffect } from 'react';

// const CustomerKhataDisplay = () => {
//   const [customers, setCustomers] = useState([]);
//   const [selectedCustomer, setSelectedCustomer] = useState(null);
//   const [transactions, setTransactions] = useState([]);
//   const [totalBalance, setTotalBalance] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [paymentAmount, setPaymentAmount] = useState('');
//   const [paymentNote, setPaymentNote] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//   const storeId = localStorage.getItem("storeId");
//   const API_BASE_URL = "http://localhost:5002"; // Flask backend running on port 5002
//   const API_BASE_URL2 = "http://localhost:5008";
//   useEffect(() => {
//     fetchCustomers();
//   }, []);

// //   const fetchCustomers = async () => {
// //     try {
// //       setLoading(true);
// //       // This would be replaced with your actual API call
// //       const response = await fetch(`${API_BASE_URL2}/api/customers?storeId=${storeId}`, {
// //         headers: {
// //           'storeId': storeId
// //         }
// //       });
      
// //       if (!response.ok) throw new Error('Failed to fetch customers');
      
// //       const data = await response.json();
// //       setCustomers(data);
// //       setLoading(false);
// //     } catch (error) {
// //       console.error('Error fetching customers:', error);
// //       setErrorMessage('Failed to load customers. Please try again.');
// //       setLoading(false);
// //     }
// //   };
// const fetchCustomers = async () => {
//     try {
//       setLoading(true);
      
//       const response = await fetch(`${API_BASE_URL2}/api/customers?storeId=${storeId}`, {
//         headers: {
//           'storeId': storeId
//         }
//       });
  
//       if (!response.ok) throw new Error('Failed to fetch customers');
      
//       const data = await response.json();
  
//       // Ensure data is an array, or extract it correctly
//       const customerList = Array.isArray(data) ? data : data.customers || [];
  
//       setCustomers(customerList);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching customers:', error);
//       setErrorMessage('Failed to load customers. Please try again.');
//       setCustomers([]); // Ensure customers is always an array
//       setLoading(false);
//     }
//   };
  
//   const fetchCustomerKhata = async (customerPhone) => {
//     try {
//       setLoading(true);
      
//       // Fetch transactions
//       const transactionsResponse = await fetch(`${API_BASE_URL}/api/khatabook/transactions?customerPhone=${customerPhone}`, {
//         headers: {
//           'storeId': storeId
//         }
//       });
      
//       if (!transactionsResponse.ok) throw new Error('Failed to fetch transactions');
      
//       const transactionsData = await transactionsResponse.json();
//       setTransactions(transactionsData.transactions);
      
//       // Fetch balance
//       const balanceResponse = await fetch(`${API_BASE_URL}/api/khatabook/customers/${customerPhone}/balance`, {
//         headers: {
//           'storeId': storeId
//         }
//       });
      
//       if (!balanceResponse.ok) throw new Error('Failed to fetch balance');
      
//       const balanceData = await balanceResponse.json();
//       setTotalBalance(balanceData.balance);
      
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching khata details:', error);
//       setErrorMessage('Failed to load customer details. Please try again.');
//       setLoading(false);
//     }
//   };

//   const handleCustomerSelect = (customer) => {
//     setSelectedCustomer(customer);
//     fetchCustomerKhata(customer.phone);
//     setErrorMessage('');
//     setSuccessMessage('');
//   };

// //   const handlePayment = async () => {
// //     if (!paymentAmount || isNaN(parseFloat(paymentAmount)) || parseFloat(paymentAmount) <= 0) {
// //       setErrorMessage('Please enter a valid payment amount');
// //       return;
// //     }

// //     try {
// //       setLoading(true);
// //       // This would be your actual payment API
// //       const response = await fetch(`${API_BASE_URL}/api/khatabook/payment`, {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //           'storeId': storeId
// //         },
// //         body: JSON.stringify({
// //           customerPhone: selectedCustomer.phone,
// //           amount: parseFloat(paymentAmount),
// //           type: 'credit',
// //           notes: paymentNote || 'Payment received'
// //         })
// //       });
      
// //       if (!response.ok) throw new Error('Payment processing failed');
      
// //       // Refresh the khata details
// //       await fetchCustomerKhata(selectedCustomer.phone);
      
// //       setSuccessMessage(`Payment of ₹${paymentAmount} successfully recorded!`);
// //       setPaymentAmount('');
// //       setPaymentNote('');
// //       setLoading(false);
      
// //       // Clear success message after 3 seconds
// //       setTimeout(() => {
// //         setSuccessMessage('');
// //       }, 3000);
      
// //     } catch (error) {
// //       console.error('Error processing payment:', error);
// //       setErrorMessage('Failed to process payment. Please try again.');
// //       setLoading(false);
// //     }
// //   };
// // const handlePayment = async () => {
// //     if (!paymentAmount || isNaN(parseFloat(paymentAmount)) || parseFloat(paymentAmount) <= 0) {
// //         setErrorMessage('Please enter a valid payment amount');
// //         return;
// //     }

// //     try {
// //         setLoading(true);
// //         const response = await fetch(`${API_BASE_URL}/api/khatabook/payment`, {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json',
// //                 'storeId': storeId
// //             },
// //             body: JSON.stringify({
// //                 customerPhone: selectedCustomer.phone,
// //                 amount: parseFloat(paymentAmount),
// //                 type: 'credit',
// //                 notes: paymentNote || 'Payment received'
// //             })
// //         });

// //         if (!response.ok) throw new Error('Payment processing failed');

// //         // Refresh the khata details
// //         await fetchCustomerKhata(selectedCustomer.phone);

// //         setSuccessMessage(`Payment of ₹${paymentAmount} successfully recorded!`);
// //         setPaymentAmount('');
// //         setPaymentNote('');
// //         setLoading(false);

// //         // Clear success message after 3 seconds
// //         setTimeout(() => {
// //             setSuccessMessage('');
// //         }, 3000);

// //     } catch (error) {
// //         console.error('Error processing payment:', error);
// //         setErrorMessage('Failed to process payment. Please try again.');
// //         setLoading(false);
// //     }
// // };
// // const handlePayment = async () => {
// //     if (!paymentAmount || isNaN(parseFloat(paymentAmount)) || parseFloat(paymentAmount) <= 0) {
// //         setErrorMessage('Please enter a valid payment amount');
// //         return;
// //     }

// //     try {
// //         setLoading(true);
// //         const response = await fetch(`${API_BASE_URL}/api/khatabook/payment`, {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json',
// //                 'storeId': storeId
// //             },
// //             body: JSON.stringify({
// //                 customerPhone: selectedCustomer.phone,
// //                 amount: parseFloat(paymentAmount),
// //                 type: 'credit', // Assuming this is a payment (credit)
// //                 notes: paymentNote || 'Payment received'
// //             })
// //         });

// //         if (!response.ok) {
// //             const errorData = await response.json();
// //             throw new Error(errorData.error || 'Payment processing failed');
// //         }

// //         // Refresh the khata details
// //         await fetchCustomerKhata(selectedCustomer.phone);

// //         setSuccessMessage(`Payment of ₹${paymentAmount} successfully recorded!`);
// //         setPaymentAmount('');
// //         setPaymentNote('');
// //         setLoading(false);

// //         // Clear success message after 3 seconds
// //         setTimeout(() => {
// //             setSuccessMessage('');
// //         }, 3000);

// //     } catch (error) {
// //         console.error('Error processing payment:', error);
// //         setErrorMessage(error.message || 'Failed to process payment. Please try again.');
// //         setLoading(false);
// //     }
// // };
// // const handlePayment = async () => {
// //     if (!paymentAmount || isNaN(parseFloat(paymentAmount)) || parseFloat(paymentAmount) <= 0) {
// //         setErrorMessage('Please enter a valid payment amount');
// //         return;
// //     }

// //     try {
// //         setLoading(true);
// //         const response = await fetch(`${API_BASE_URL}/api/khatabook/payment`, {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json',
// //                 'storeId': storeId
// //             },
// //             body: JSON.stringify({
// //                 customerPhone: selectedCustomer.phone,
// //                 amount: parseFloat(paymentAmount),
// //                 type: 'credit', // Assuming this is a payment (credit)
// //                 notes: paymentNote || 'Payment received'
// //             })
// //         });

// //         if (!response.ok) {
// //             const errorData = await response.json();
// //             throw new Error(errorData.error || 'Payment processing failed');
// //         }

// //         // Refresh the khata details
// //         await fetchCustomerKhata(selectedCustomer.phone);

// //         setSuccessMessage(`Payment of ₹${paymentAmount} successfully recorded!`);
// //         setPaymentAmount('');
// //         setPaymentNote('');
// //         setLoading(false);

// //         // Clear success message after 3 seconds
// //         setTimeout(() => {
// //             setSuccessMessage('');
// //         }, 3000);

// //     } catch (error) {
// //         console.error('Error processing payment:', error);
// //         setErrorMessage(error.message || 'Failed to process payment. Please try again.');
// //         setLoading(false);
// //     }
// // };
// const handlePayment = async () => {
//     if (!paymentAmount || isNaN(parseFloat(paymentAmount)) || parseFloat(paymentAmount) <= 0) {
//         setErrorMessage('Please enter a valid payment amount');
//         return;
//     }

//     try {
//         setLoading(true);
//         const response = await fetch(`${API_BASE_URL}/api/khatabook/payment`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'storeId': storeId
//             },
//             body: JSON.stringify({
//                 customerPhone: selectedCustomer.phone,
//                 amount: parseFloat(paymentAmount),
//                 type: 'credit', // Assuming this is a payment (credit)
//                 notes: paymentNote || 'Payment received'
//             })
//         });

//         if (!response.ok) {
//             const errorData = await response.json();
//             throw new Error(errorData.error || 'Payment processing failed');
//         }

//         // Refresh the khata details
//         await fetchCustomerKhata(selectedCustomer.phone);

//         setSuccessMessage(`Payment of ₹${paymentAmount} successfully recorded!`);
//         setPaymentAmount('');
//         setPaymentNote('');
//         setLoading(false);

//         // Clear success message after 3 seconds
//         setTimeout(() => {
//             setSuccessMessage('');
//         }, 3000);

//     } catch (error) {
//         console.error('Error processing payment:', error);
//         setErrorMessage(error.message || 'Failed to process payment. Please try again.');
//         setLoading(false);
//     }
// };
//   const filteredCustomers = customers.filter(customer => 
//     (customer.name && customer.name.toLowerCase().includes(searchTerm.toLowerCase())) || 
//     (customer.phone && customer.phone.includes(searchTerm))
//   );

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleString('en-IN', {
//       day: '2-digit',
//       month: 'short',
//       year: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800 p-4">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">Customer Khata Book</h1>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Customer List Section */}
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
//             <div className="p-4 bg-indigo-600">
//               <h2 className="text-xl font-semibold text-white">Customers</h2>
//               <div className="mt-2" text-white>
//                 <input
//                   type="text"
//                   placeholder="Search by name or phone..."
                
//                   className="w-full p-2 rounded-md border-1 border-silver-500 focus:ring-2 focus:ring-indigo-400 text-white font-extrabold"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//               </div>
//             </div>
            
//             <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
//               {loading && !selectedCustomer ? (
//                 <div className="p-4 text-center animate-pulse">
//                   <div className="w-full h-8 bg-gray-200 rounded mb-2"></div>
//                   <div className="w-full h-8 bg-gray-200 rounded mb-2"></div>
//                   <div className="w-full h-8 bg-gray-200 rounded"></div>
//                 </div>
//               ) : filteredCustomers.length === 0 ? (
//                 <div className="p-4 text-center text-gray-500">
//                   No customers found
//                 </div>
//               ) : (
//                 filteredCustomers.map((customer, index) => (
//                   <div
//                     key={index}
//                     className={`p-4 cursor-pointer transition-colors duration-200 ${
//                       selectedCustomer && selectedCustomer.phone === customer.phone
//                         ? 'bg-indigo-50 border-l-4 border-indigo-500'
//                         : 'hover:bg-gray-50'
//                     }`}
//                     onClick={() => handleCustomerSelect(customer)}
//                   >
//                     <div className="font-medium">{customer.name}</div>
//                     <div className="text-sm text-gray-500">{customer.phone}</div>
//                   </div>
//                 ))
//               )}
//             </div>
//           </div>
          
//           {/* Khata Details Section */}
//           <div className="md:col-span-2">
//             {selectedCustomer ? (
//               <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
//                 <div className="p-4 bg-indigo-600 flex justify-between items-center">
//                   <div>
//                     <h2 className="text-xl font-semibold text-white">{selectedCustomer.name}</h2>
//                     <p className="text-indigo-100">{selectedCustomer.phone}</p>
//                   </div>
//                   <div className="text-right">
//                     <div className="text-white text-sm">Total Balance</div>
//                     <div className={`text-2xl font-bold ${totalBalance > 0 ? 'text-red-300' : 'text-green-300'}`}>
//                       ₹{Math.abs(totalBalance).toFixed(2)}
//                       <span className="text-sm ml-1">{totalBalance > 0 ? '(Due)' : '(Credit)'}</span>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Payment Entry Section */}
//                 <div className="p-4 bg-gray-50 border-b">
//                   <h3 className="text-lg font-medium mb-2">Record Payment</h3>
//                   {successMessage && (
//                     <div className="mb-4 p-2 bg-green-100 text-green-700 rounded-md border border-green-200 animate-fadeIn">
//                       {successMessage}
//                     </div>
//                   )}
//                   {errorMessage && (
//                     <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md border border-red-200 animate-fadeIn">
//                       {errorMessage}
//                     </div>
//                   )}
//                   <div className="flex flex-wrap gap-2">
//                     <input
//                       type="number"
//                       placeholder="Amount"
//                       className="flex-1 p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
//                       value={paymentAmount}
//                       onChange={(e) => setPaymentAmount(e.target.value)}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Note (optional)"
//                       className="flex-1 p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
//                       value={paymentNote}
//                       onChange={(e) => setPaymentNote(e.target.value)}
//                     />
//                     <button
//                       className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 disabled:opacity-50"
//                       onClick={handlePayment}
//                       disabled={loading}
//                     >
//                       {loading ? 'Processing...' : 'Record Payment'}
//                     </button>
//                   </div>
//                 </div>
                
//                 {/* Transactions History */}
//                 <div className="p-4">
//                   <h3 className="text-lg font-medium mb-2">Transaction History</h3>
                  
//                   {loading && selectedCustomer ? (
//                     <div className="animate-pulse">
//                       <div className="h-10 bg-gray-200 rounded mb-2"></div>
//                       <div className="h-10 bg-gray-200 rounded mb-2"></div>
//                       <div className="h-10 bg-gray-200 rounded"></div>
//                     </div>
//                   ) : transactions.length === 0 ? (
//                     <div className="text-center py-8 text-gray-500">
//                       No transaction history found
//                     </div>
//                   ) : (
//                     <div className="overflow-x-auto">
//                       <table className="min-w-full divide-y divide-gray-200">
//                         <thead className="bg-gray-50">
//                           <tr>
//                             <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                             <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
//                             <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
//                             <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
//                           </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                           {transactions.map((transaction, index) => (
//                             <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
//                               <td className="px-4 py-3 whitespace-nowrap">{formatDate(transaction.date)}</td>
//                               <td className="px-4 py-3 whitespace-nowrap">
//                                 <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                                   transaction.type === 'debit' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
//                                 }`}>
//                                   {transaction.type === 'debit' ? 'Purchase' : 'Payment'}
//                                 </span>
//                               </td>
//                               <td className="px-4 py-3 whitespace-nowrap">
//                                 <span className={transaction.type === 'debit' ? 'text-red-600' : 'text-green-600'}>
//                                   {transaction.type === 'debit' ? '- ' : '+ '}
//                                   ₹{transaction.amount.toFixed(2)}
//                                 </span>
//                               </td>
//                               <td className="px-4 py-3">{transaction.notes}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ) : (
//               <div className="bg-white rounded-lg shadow p-8 text-center h-full flex flex-col items-center justify-center">
//                 <svg className="w-16 h-16 text-indigo-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
//                 </svg>
//                 <h3 className="text-xl font-medium text-gray-700 mb-2">No Customer Selected</h3>
//                 <p className="text-gray-500">Select a customer from the list to view their khata details</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerKhataDisplay;

import React, { useState, useEffect, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const CustomerKhataDisplay = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);
  const [loading, setLoading] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentNote, setPaymentNote] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [customerStats, setCustomerStats] = useState({
    totalDue: 0,
    totalCredit: 0,
    topDueCustomers: [],
  });
  const [dateRange, setDateRange] = useState('all'); // 'week', 'month', 'year', 'all'

  const storeId = localStorage.getItem("storeId");
  const API_BASE_URL = "http://localhost:5002"; // Flask backend running on port 5002
  const API_BASE_URL2 = "http://localhost:5008";

  useEffect(() => {
    fetchCustomers();
  }, []);

  useEffect(() => {
    // Fetch store-wide analytics when analytics tab is shown
    if (showAnalytics) {
      fetchCustomerStats();
    }
  }, [showAnalytics]);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      
      const response = await fetch(`${API_BASE_URL2}/api/customers?storeId=${storeId}`, {
        headers: {
          'storeId': storeId
        }
      });
  
      if (!response.ok) throw new Error('Failed to fetch customers');
      
      const data = await response.json();
  
      // Ensure data is an array, or extract it correctly
      const customerList = Array.isArray(data) ? data : data.customers || [];
  
      setCustomers(customerList);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching customers:', error);
      setErrorMessage('Failed to load customers. Please try again.');
      setCustomers([]); // Ensure customers is always an array
      setLoading(false);
    }
  };
  
  const fetchCustomerKhata = async (customerPhone) => {
    try {
      setLoading(true);
      
      // Fetch transactions
      const transactionsResponse = await fetch(`${API_BASE_URL}/api/khatabook/transactions?customerPhone=${customerPhone}`, {
        headers: {
          'storeId': storeId
        }
      });
      
      if (!transactionsResponse.ok) throw new Error('Failed to fetch transactions');
      
      const transactionsData = await transactionsResponse.json();
      setTransactions(transactionsData.transactions);
      
      // Fetch balance
      const balanceResponse = await fetch(`${API_BASE_URL}/api/khatabook/customers/${customerPhone}/balance`, {
        headers: {
          'storeId': storeId
        }
      });
      
      if (!balanceResponse.ok) throw new Error('Failed to fetch balance');
      
      const balanceData = await balanceResponse.json();
      setTotalBalance(balanceData.balance);
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching khata details:', error);
      setErrorMessage('Failed to load customer details. Please try again.');
      setLoading(false);
    }
  };

  const fetchCustomerStats = async () => {
    try {
      setLoading(true);
      
      // This would be an API call to get store-wide statistics
      // For now, we'll mock this data based on what we already have
      
      // In a real implementation, this would be a dedicated API endpoint
      // that provides analytics for all customers at once
      
      // Mocked implementation for demonstration purposes
      const dueTotal = customers.reduce((total, customer) => {
        // Mocking the balance calculation - in production this would come from backend
        const mockBalance = Math.random() * 10000 - 3000;
        return mockBalance > 0 ? total + mockBalance : total;
      }, 0);
      
      const creditTotal = customers.reduce((total, customer) => {
        // Mocking the balance calculation - in production this would come from backend
        const mockBalance = Math.random() * 10000 - 3000;
        return mockBalance < 0 ? total + Math.abs(mockBalance) : total;
      }, 0);
      
      // Top 5 customers with highest dues (mocked)
      const topDueCustomers = customers
        .slice(0, Math.min(5, customers.length))
        .map(customer => ({
          name: customer.name,
          amount: Math.floor(Math.random() * 5000) + 1000
        }))
        .sort((a, b) => b.amount - a.amount);

      setCustomerStats({
        totalDue: dueTotal,
        totalCredit: creditTotal,
        topDueCustomers: topDueCustomers
      });
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching customer stats:', error);
      setLoading(false);
    }
  };

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer);
    fetchCustomerKhata(customer.phone);
    setErrorMessage('');
    setSuccessMessage('');
    setShowAnalytics(false);
  };

  const handlePayment = async () => {
    if (!paymentAmount || isNaN(parseFloat(paymentAmount)) || parseFloat(paymentAmount) <= 0) {
        setErrorMessage('Please enter a valid payment amount');
        return;
    }

    try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/api/khatabook/payment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'storeId': storeId
            },
            body: JSON.stringify({
                customerPhone: selectedCustomer.phone,
                amount: parseFloat(paymentAmount),
                type: 'credit', // Assuming this is a payment (credit)
                notes: paymentNote || 'Payment received'
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Payment processing failed');
        }

        // Refresh the khata details
        await fetchCustomerKhata(selectedCustomer.phone);

        setSuccessMessage(`Payment of ₹${paymentAmount} successfully recorded!`);
        setPaymentAmount('');
        setPaymentNote('');
        setLoading(false);

        // Clear success message after 3 seconds
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);

    } catch (error) {
        console.error('Error processing payment:', error);
        setErrorMessage(error.message || 'Failed to process payment. Please try again.');
        setLoading(false);
    }
  };

  const filteredCustomers = customers.filter(customer => 
    (customer.name && customer.name.toLowerCase().includes(searchTerm.toLowerCase())) || 
    (customer.phone && customer.phone.includes(searchTerm))
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Format currency amount
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Analytics data preparation for selected customer
  const customerTransactionData = useMemo(() => {
    if (!transactions.length) return [];

    const filteredTransactions = transactions.filter(transaction => {
      if (dateRange === 'all') return true;
      
      const txDate = new Date(transaction.date);
      const now = new Date();
      
      if (dateRange === 'week') {
        const weekAgo = new Date();
        weekAgo.setDate(now.getDate() - 7);
        return txDate >= weekAgo;
      } else if (dateRange === 'month') {
        const monthAgo = new Date();
        monthAgo.setMonth(now.getMonth() - 1);
        return txDate >= monthAgo;
      } else if (dateRange === 'year') {
        const yearAgo = new Date();
        yearAgo.setFullYear(now.getFullYear() - 1);
        return txDate >= yearAgo;
      }
      
      return true;
    });

    // Group transactions by month for chart
    const groupedByMonth = filteredTransactions.reduce((acc, transaction) => {
      const date = new Date(transaction.date);
      const monthYear = `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
      
      if (!acc[monthYear]) {
        acc[monthYear] = { 
          month: monthYear, 
          debits: 0, 
          credits: 0 
        };
      }
      
      if (transaction.type === 'debit') {
        acc[monthYear].debits += transaction.amount;
      } else {
        acc[monthYear].credits += transaction.amount;
      }
      
      return acc;
    }, {});
    
    return Object.values(groupedByMonth);
  }, [transactions, dateRange]);

  // Transaction type distribution for pie chart
  const transactionTypeData = useMemo(() => {
    if (!transactions.length) return [];
    
    const filteredTransactions = transactions.filter(transaction => {
      if (dateRange === 'all') return true;
      
      const txDate = new Date(transaction.date);
      const now = new Date();
      
      if (dateRange === 'week') {
        const weekAgo = new Date();
        weekAgo.setDate(now.getDate() - 7);
        return txDate >= weekAgo;
      } else if (dateRange === 'month') {
        const monthAgo = new Date();
        monthAgo.setMonth(now.getMonth() - 1);
        return txDate >= monthAgo;
      } else if (dateRange === 'year') {
        const yearAgo = new Date();
        yearAgo.setFullYear(now.getFullYear() - 1);
        return txDate >= yearAgo;
      }
      
      return true;
    });
    
    let totalDebit = 0;
    let totalCredit = 0;
    
    filteredTransactions.forEach(transaction => {
      if (transaction.type === 'debit') {
        totalDebit += transaction.amount;
      } else {
        totalCredit += transaction.amount;
      }
    });
    
    return [
      { name: 'Purchases', value: totalDebit, color: '#EF4444' },
      { name: 'Payments', value: totalCredit, color: '#10B981' }
    ];
  }, [transactions, dateRange]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">Customer Khata Book</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Customer List Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="p-4 bg-indigo-600">
              <h2 className="text-xl font-semibold text-white">Customers</h2>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Search by name or phone..."
                  className="w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 text-gray-800"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  className={`px-3 py-1 rounded-md transition-colors duration-200 ${
                    !showAnalytics ? 'bg-indigo-800 text-white' : 'bg-indigo-400 text-indigo-100'
                  }`}
                  onClick={() => setShowAnalytics(false)}
                >
                  Customers
                </button>
                <button
                  className={`px-3 py-1 rounded-md transition-colors duration-200 ${
                    showAnalytics ? 'bg-indigo-800 text-white' : 'bg-indigo-400 text-indigo-100'
                  }`}
                  onClick={() => setShowAnalytics(true)}
                >
                  Analytics
                </button>
              </div>
            </div>
            
            {!showAnalytics ? (
              <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
                {loading && !selectedCustomer ? (
                  <div className="p-4 text-center animate-pulse">
                    <div className="w-full h-8 bg-gray-200 rounded mb-2"></div>
                    <div className="w-full h-8 bg-gray-200 rounded mb-2"></div>
                    <div className="w-full h-8 bg-gray-200 rounded"></div>
                  </div>
                ) : filteredCustomers.length === 0 ? (
                  <div className="p-4 text-center text-gray-500">
                    No customers found
                  </div>
                ) : (
                  filteredCustomers.map((customer, index) => (
                    <div
                      key={index}
                      className={`p-4 cursor-pointer transition-colors duration-200 ${
                        selectedCustomer && selectedCustomer.phone === customer.phone
                          ? 'bg-indigo-50 border-l-4 border-indigo-500'
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => handleCustomerSelect(customer)}
                    >
                      <div className="font-medium">{customer.name}</div>
                      <div className="text-sm text-gray-500">{customer.phone}</div>
                    </div>
                  ))
                )}
              </div>
            ) : (
              <div className="p-4 max-h-96 overflow-y-auto">
                <h3 className="text-lg font-medium mb-4">Store-wide Analytics</h3>
                
                {loading ? (
                  <div className="animate-pulse">
                    <div className="h-10 bg-gray-200 rounded mb-2"></div>
                    <div className="h-40 bg-gray-200 rounded mb-2"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                        <div className="text-sm text-red-600">Total Due</div>
                        <div className="text-2xl font-bold text-red-700">
                          {formatCurrency(customerStats.totalDue)}
                        </div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                        <div className="text-sm text-green-600">Total Credit</div>
                        <div className="text-2xl font-bold text-green-700">
                          {formatCurrency(customerStats.totalCredit)}
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="font-medium text-gray-700 mb-2">Top Due Customers</h4>
                    <div className="space-y-2 mb-6">
                      {customerStats.topDueCustomers.map((customer, index) => (
                        <div key={index} className="flex justify-between p-2 bg-gray-50 rounded">
                          <span>{customer.name}</span>
                          <span className="font-medium text-red-600">{formatCurrency(customer.amount)}</span>
                        </div>
                      ))}
                    </div>
                    
                    <h4 className="font-medium text-gray-700 mb-2">Due vs Credit</h4>
                    <div className="h-48 mb-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={[
                              { name: 'Due', value: customerStats.totalDue, color: '#EF4444' },
                              { name: 'Credit', value: customerStats.totalCredit, color: '#10B981' }
                            ]}
                            cx="50%"
                            cy="50%"
                            outerRadius={60}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {[
                              { name: 'Due', value: customerStats.totalDue, color: '#EF4444' },
                              { name: 'Credit', value: customerStats.totalCredit, color: '#10B981' }
                            ].map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => formatCurrency(value)} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
          
          {/* Khata Details Section */}
          <div className="md:col-span-2">
            {selectedCustomer ? (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="p-4 bg-indigo-600 flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold text-white">{selectedCustomer.name}</h2>
                    <p className="text-indigo-100">{selectedCustomer.phone}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-white text-sm">Total Balance</div>
                    <div className={`text-2xl font-bold ${totalBalance > 0 ? 'text-red-300' : 'text-green-300'}`}>
                      ₹{Math.abs(totalBalance).toFixed(2)}
                      <span className="text-sm ml-1">{totalBalance > 0 ? '(Due)' : '(Credit)'}</span>
                    </div>
                  </div>
                </div>
                
                {/* Payment Entry Section */}
                <div className="p-4 bg-gray-50 border-b">
                  <h3 className="text-lg font-medium mb-2">Record Payment</h3>
                  {successMessage && (
                    <div className="mb-4 p-2 bg-green-100 text-green-700 rounded-md border border-green-200">
                      {successMessage}
                    </div>
                  )}
                  {errorMessage && (
                    <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md border border-red-200">
                      {errorMessage}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    <input
                      type="number"
                      placeholder="Amount"
                      className="flex-1 p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                      value={paymentAmount}
                      onChange={(e) => setPaymentAmount(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Note (optional)"
                      className="flex-1 p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                      value={paymentNote}
                      onChange={(e) => setPaymentNote(e.target.value)}
                    />
                    <button
                      className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 disabled:opacity-50"
                      onClick={handlePayment}
                      disabled={loading}
                    >
                      {loading ? 'Processing...' : 'Record Payment'}
                    </button>
                  </div>
                </div>
                
                {/* Customer Analytics Section */}
                <div className="p-4 border-b">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">Customer Analytics</h3>
                    <div className="flex space-x-2">
                      <select
                        className="p-1 border border-gray-300 rounded-md text-sm"
                        value={dateRange}
                        onChange={(e) => setDateRange(e.target.value)}
                      >
                        <option value="all">All Time</option>
                        <option value="year">Past Year</option>
                        <option value="month">Past Month</option>
                        <option value="week">Past Week</option>
                      </select>
                    </div>
                  </div>
                  
                  {loading ? (
                    <div className="animate-pulse">
                      <div className="h-60 bg-gray-200 rounded mb-4"></div>
                      <div className="h-40 bg-gray-200 rounded"></div>
                    </div>
                  ) : transactions.length === 0 ? (
                    <div className="text-center py-4 text-gray-500">
                      No data available for analytics
                    </div>
                  ) : (
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-md font-medium text-gray-700 mb-2">Transaction History</h4>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={customerTransactionData} margin={{ top: 10, right: 30, left: 0, bottom: 30 }}>
                              <XAxis dataKey="month" angle={-45} textAnchor="end" height={50} />
                              <YAxis />
                              <Tooltip formatter={(value) => `₹${value.toFixed(2)}`} />
                              <Legend />
                              <Bar dataKey="debits" name="Purchases" fill="#EF4444" />
                              <Bar dataKey="credits" name="Payments" fill="#10B981" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-1">
                          <h4 className="text-md font-medium text-gray-700 mb-2">Transaction Type</h4>
                          <div className="h-48">
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                  data={transactionTypeData}
                                  cx="50%"
                                  cy="50%"
                                  outerRadius={60}
                                  fill="#8884d8"
                                  dataKey="value"
                                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                >
                                  {transactionTypeData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                  ))}
                                </Pie>
                                <Tooltip formatter={(value) => `₹${value.toFixed(2)}`} />
                              </PieChart>
                            </ResponsiveContainer>
                          </div>
                        </div>
                        
                        <div className="md:col-span-2">
                          <h4 className="text-md font-medium text-gray-700 mb-2">Summary Statistics</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="text-sm text-gray-500">Total Purchases</div>
                              <div className="text-xl font-bold text-red-600">
                                {formatCurrency(transactionTypeData.find(t => t.name === 'Purchases')?.value || 0)}
                              </div>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="text-sm text-gray-500">Total Payments</div>
                              <div className="text-xl font-bold text-green-600">
                                {formatCurrency(transactionTypeData.find(t => t.name === 'Payments')?.value || 0)}
                              </div>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="text-sm text-gray-500">Number of Transactions</div>
                              <div className="text-xl font-bold text-indigo-600">
                                {transactions.length}
                              </div>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="text-sm text-gray-500">Last Transaction</div>
                              <div className="text-md font-bold text-indigo-600">
                                {transactions.length > 0 ? formatDate(transactions[0].date).split(',')[0] : 'N/A'}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Transactions History */}
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-4">Transaction History</h3>
                  
                  {loading && selectedCustomer ? (
                    <div className="animate-pulse">
                      <div className="h-10 bg-gray-200 rounded mb-2"></div>
                      <div className="h-10 bg-gray-200 rounded mb-2"></div>
                      <div className="h-10 bg-gray-200 rounded"></div>
                    </div>
                  ) : transactions.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      No transaction history found
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {transactions.map((transaction, index) => (
                            <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                              <td className="px-4 py-3 whitespace-nowrap">{formatDate(transaction.date)}</td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  transaction.type === 'debit' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                                }`}>
                                  {transaction.type === 'debit' ? 'Purchase' : 'Payment'}
                                </span>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <span className={transaction.type === 'debit' ? 'text-red-600' : 'text-green-600'}>
                                  {transaction.type === 'debit' ? '- ' : '+ '}
                                  ₹{transaction.amount.toFixed(2)}
                                </span>
                              </td>
                              <td className="px-4 py-3">{transaction.notes}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-8 text-center h-full flex flex-col items-center justify-center">
                <svg className="w-16 h-16 text-indigo-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
                <h3 className="text-xl font-medium text-gray-700 mb-2">No Customer Selected</h3>
                <p className="text-gray-500">Select a customer from the list to view their khata details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerKhataDisplay;